# Creating a fungible eright with ERTP

## Definition of "fungible"

A **fungible** asset means that different elements of this asset are interchangeable.
Currencies are interchangeable: if you have 10 one-dollar notes laying around and decide
to take 5 of them, you do not care which 5 you get. They're all "the same" as far 
as counting value goes.

This would not be the case for 10 house ownership rights each designating a different house.
House ownership rights are not fungible, they are **specific**.


## Creating a fungible asset with ERTP

### Creating and sending the asset

In ERTP, digital assets are created by a [`mint`](./mint.html). Having access to the mint
gives you the power to create more digital assets of the same type at
will. For instance, let's say we want to create a new community
currency called 'BaytownBucks'.
You would first install the [ertp JavaScript package](https://www.npmjs.com/package/@agoric/ertp)
(`npm install @agoric/ertp`) and then:

```js
import { makeMint } from '@agoric/ertp';

const baytownBucksMint = makeMint('BaytownBucks');
```

Great! Now let's use our mint to create 1000 new BaytownBucks.

```js
const baytownBucksAssay = baytownBucksMint.getAssay();
const baytownBucks = baytownBucksAssay.makeUnits;
const purse = baytownBucksMint.mint(baytownBucks(1000), 'community treasury');
```

The act of minting created 1000 BaytownBucks and stored them together in a
`purse`. [Purses](./mint.html#purses) in ERTP only hold one type of digital asset, so this
purse can only ever hold BaytownBucks.

Let's distribute the BaytownBucks to members of the community. To send
money in ERTP, we withdraw [`payments`](./mint.html#payments) from purses.

```js
const paymentForAlice = purse.withdraw(10, `alice's community money`);
```

Like our purse, this payment contains BaytownBucks, but unlike purses,
payments are used to represent tokens in transit. A payment can be
sent to someone else, a purse never should be.

Now let's send the payment to Alice as a message:

```js
alice.receivePayment(paymentForAlice);
```

Here `alice` is an object reference, and we can call her `receivePayment`
to ask her to receive this payment. Alice's methods are entirely up to her, 
and are not part of ERTP.


### Receiving the asset

On Alice side, she creates a purse for baytownBucks and gets ready to receive payments.
For this to happen, Alice needs access to `baytownBucksAssay`.
However, she does not need access to `baytownBucksMint`.
If she had access to it, she could create baytownBucks herself by calling `baytownBucksMint.mint`.

```js
const myBaytownBucksPurse = baytownBucksAssay.makeEmptyPurse()

myBaytownBucksPurse.getBalance(); // 0

const alice = {
    receivePayment(allegedBaytownBucksPayment){
        myBaytownBucksPurse.depositAll(allegedBaytownBucksPayment)
    }
}
```

And just like that, when `alice.receivePayment(paymentForAlice)` from earlier 
is called, Alice accumulates the 1000 payment in her purse.

When alice wants to exchange something for 300 BaytownBucks, she creates a payment from her purse:
```js
const baytownBucksAssay = baytownBucksMint.getAssay();
const baytownBucks = baytownBucksAssay.makeUnits;
const payment = myBaytownBucksPurse.withdraw(baytownBucks(300));
```

This came naturally without having to express "which" 300 she wanted to withdraw.

And this is how fungible assets work in ERTP!


## Security Properties

How does Alice know that she got paid real money? She could have been
sent fake money, or she could have been sent money that was
[double-spent](https://en.wikipedia.org/wiki/Double-spending).

When alice receives an alleged payment, she calls `myBaytownBucksPurse.depositAll`.
This function first checks that its argument is a genuine payment object of the same
assay as the purse. If it's the case, the amount ("extent") is transfered in full
from the payment to the purse. If there is a mismatch, the method throws an error.

After the method call succeeded, ERTP guarantees that:
- the payment object is now empty
- the purse contains the full content of the payment

After the method call throws, ERTP guarantees that:
- the alleged payment is in the same state as before the call
- the purse is in the same state as before the call

The BaytownBucksAssay is associated with the BaytownBucksMint, but
the assay is the public-facing version that is accessible to anyone.
By holding the reference to a mint, you can mint more tokens. By
holding a reference to the assay for a mint, you can check that a
payment is valid and exclusively claim it (`baytownBucksAssay.claimAll`)
in a new payment to yourself or deposit it in a purse of 
yours (`myBaytownBucksPurse.depositAll`).
