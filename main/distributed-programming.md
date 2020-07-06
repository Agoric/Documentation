# Distributed programming in JavaScript

Agoric's platform is built mainly in JavaScript and enables authors to write secure smart contracts in JavaScript.

For the biggest part, all JavaScript knowledge is directly applicable to the Agoric platform. However, there are a couple of Agoric-specific additions at various layers that are better to understand before programming on the Agoric platform.

Some specificities are **concepts**, other are at the **syntax level**, others are **Agoric library additions**.


## Vats

A vat is a *unit of synchrony*. This means that within a JavaScript vat, objects
and functions can communicate with one another synchronously. It also means that
communication with objects outside the vat can be done, but it requires
[managing asynchronous messages and responses](#Communicating-with-remote-objects-via-E).

A vat runs a single *event loop*.

A physical machine can run one or several vats. A blockchain can run one or several communicating vats.

Different vats can communicate by sending asynchronous messages to other vats.

A vat is the moral equivalent of a Unix Process.

The internal state of a vat can be stored in persistent memory so that the vat
can be turned off and later turned back on (on the same or a different physical
machine) by loading the stored state.

In cosmic-swingset, several vats are started. Each vat hosts a service (registrar, zoe, etc.). Currently (April, 2020), all contracts run in the Zoe vat, but eventually, each contract will run in its own dedicated vat.


## Secure EcmaScript (SES)

SES is a standards-track extension of
[EcmaScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm),
the JavaScript standard - common to web browsers, Node.js, and embedded
devices. SES provides a secure platform for executing programs, which means that
it's possible to run code you don't completely trust, without being vulnerable
to its bugs or bad intentions. The guest code runs in an immutable realm that has no
access to ambient authority by default. The hosting code can provide access to
disk or network or other services, and any authority not granted is inaccessible
to the guest code.

SES can be enabled via the [`ses` package](https://www.npmjs.com/package/@agoric/harden).

```js
import {lockdown} from "ses";
 
lockdown(); // turns the current realm into an immutable realm
// calling this function also adds a global Compartment constructor to create compartments
```


### Compartments and realms

JavaScript code runs in the context of a [`Realm`](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-code-realms). A realm is composed of the set of *primordials* (objects and functions of the standard library like `Array.prototype.push`) and of a global object. In a web browser, an iframe is a realm. In Node.js, a Node process is a realm.

For historical reasons, the ECMAScript specification requires the *primordials*
to be mutable (`Array.prototype.push = yourFunction` is valid ECMAScript but not
recommended). SES makes it possible to turn the current realm into an
**immutable realm**, that is a realm within which the primordials are deeply
frozen. It also allows programs to create **Compartments**.

Compartments are "mini-realms". They have their own dedicated global object and environment, but they inherit the primordials from their parent realm.

Agoric "deploy scripts" and smart contract code run in an immutable realm with compartments providing just enough authority to create useful and secure contracts (but not enough authority to do anything unintended or harmful to the participants of the smart contract)


### harden

`harden` is a function provided by the
[`@agoric/harden` package](https://www.npmjs.com/package/@agoric/harden).  It ensures
that external callers of hardened objects can only interact with them through
functions present in their API.  `harden` does a transitive version of
[`Object.freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze),
which only locks up an object's own properties.

All objects that will be transferred across a trust boundary must have their API
surface frozen (usually by calling harden). This ensures that other objects can only
interact with them through their defined method interface. CapTP, our communications
layer for passing references to distributed objects, enforces this at vat boundaries.

After you've [installed](https://docs.npmjs.com/cli/install) the [`@agoric/harden` package](https://www.npmjs.com/package/@agoric/harden), you can use it this way:

```js
import harden from '@agoric/harden';

const o = {a: 2};
o.a  = 12;
console.log(o.a); // 12 because o is still mutable

harden(o);

o.a  = 37; // throws a TypeError because o is now hardened
```

### Communicating with remote objects using `E`


On the Agoric platform, objects may be running in distinct vats, or on a remote
machine, or even on a blockchain. Whenever you send messages to an object that
isn't accessible locally in the same vat, the response can't be received
immediately and can't be acted upon locally until the response comes back. In
order to ensure that local code isn't blocked while waiting for the response, we
return a Promise for the result. You can send further messages to the result of
that promise, and if the promise resolves to a remote object the message will be
forwarded to its location, and the result will eventually be returned and
processed locally.

JavaScript
[supports Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
natively, and Agoric's HandledPromises are compatible and interoperable with
standard Promises. The standard way to interact with a Promise is to do further
processing either in a `.then()` clause or after using `await` to get the
result, and that works the same way with HandledPromises.

You can send messages to the eventual result of a Promise, or to a presence (a
proxy for a remote object), using the `E`
notation. `E(remoteServiceP).startup(params)`. Since the result of a send
using`E` will always be a Promise, the normal thing to do with the result (as
with any object) is either pass it as a parameter or invoke a function to be
performed once the Promise is fulfilled.

`E(remoteServiceP).startup(params).then(result => useTheService(result));`

Deploy scripts and Zoe smart contracts may need to access services that run in a
different vat. For instance, a deploy script may want to install a contract in a
Zoe instance running in a blockchain. For this to happen, the deploy script
cannot call `zoe.install(code, moduleFormat)`, because it does not have local
access to the `zoe` object which is in a different vat. However, the deploy
script is given access to a `zoe` *presence*. In order to call methods on the
actual Zoe object, the deploy code can do:

```js
const installationHandle = await E(zoe).install(source, moduleFormat);
```

The `E` function is a local "bridge" that makes is possible to invoke methods on
remote object. The local version of a remote object is called a
**presence**. `E` takes a presence as an argument and creates an object with the
corresponding methods. It performs the communication asynchronously. Method
calls can take arguments that are objects in the current vat or presences for
objects in other vats.

### Notifiers

DApps and other tools may want to be notified about changes to the state of a Zoe
contract or a particular offer. We support this with a Notifier tool based on Promises,
which allows many parties to subscribe to be notified without requiring that the
publisher track a subscription list.

This is currently supported by Zoe itself, which publishes updates to the state of
offers (reallocations and completions), and by some contracts, which can publish
current prices or other details specific to the contract.

#### Getting notifications

Zoe has a public method `getOfferNotifier()`, and contracts will have similar
methods. This provides a long-lived notifier object associated with a particular
stream of updates. At any time, you can call `notifier.getUpdateSince()`, and it will
return a record `{ value, updateHandle, done }`. `value` is the current state,
according to the source. `done` will be false until the stream reaches a final state,
after which `value` will never change, and the same record will always be
returned. `updateHandle` allows you to ask to be notified the next time there's a
change to the state.

If you call `getUpdateSince(oldUpdateHandle)` with no handle, or any `updateHandle`
other than the most recent one, the notifier will immediately return a record with
the current state. If you call `getUpdateSince(updateHandle)` with the most-recently
generated `updateHandle`, you'll get a promise for the next record, which will be
resolved the next time there's a change in the state.

Well-designed notification systems can provide access either to the most recent
state, or to a complete list of changes. (Sometimes providing changes since a recent
epoch improves the UX.) This API is designed to support the former style of update,
though it's a simple work-around to include deltas as part of the state.

A common pattern for following updates to the notifier until it's done looks like this:

```js
  function updateStateOnChanges(notifier, lastHandle) {
    E(notifier)
      .getUpdateSince(lastHandle)
      .then({ value, updateHandle, done } => {
        if (done) {
          stopTracking(notifier);
        } else {
          respondToNewValue(value);
          // resubscribe for more updates
          updateStateOnChanges(notifier, updateHandle);
        };
    });
  }

  E(publicAPI)
    .getNotifier(offerHandle)
    .then(notifier => updateStateOnChanges(notifier );
```

Zoe's updates for an offer show the current allocation that will be paid if the
contract completes without further changes. When the contract calls `complete()` on
the offer, the notifier is marked `done`.

### Providing updates

Contracts can provide updates using a notifier by importing notifer and calling `produceNotifier()`.

```js
import { produceNotifier } from '@agoric/notifier';

const { notifier, updater } = produceNotifier();
```

The notifier half of the pair can be returned to anyone who should be allowed to see
state changes.

The updater has only two methods: `updateState(newState)`, and
`resolve(finalState)`. Both send a notification with the new state to any waiting
notifiers. `resolve()` also resolves the promise to a record with `done: true,
updateHandle: undefined`, and ensures that the answer will never change.
