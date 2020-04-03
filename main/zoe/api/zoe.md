# Zoe

<Zoe-Version/>

Zoe is a long-lived and well-trusted contract that enforces offer safety for the contracts that use it. Zoe has a single `inviteIssuer` for the entirety of its lifetime. By having a reference to Zoe, a user can get the `inviteIssuer` and thus validate any `invite` they receive from someone else.

## zoe.getInviteIssuer()
- Returns: `{Issuer}`

Get the long-lived `inviteIssuer`. The mint associated with the `inviteIssuer` creates the ERTP payments that represent the right to participate in a contract.

```js
// Bob claims all with the Zoe inviteIssuer
const inviteIssuer = zoe.getInviteIssuer();
const bobExclInvitePayment = await inviteIssuer.claim(bobInvitePayment);
```

## zoe.install(code, moduleFormat)
- `code` `{String}`
- `moduleFormat` `{String}`
- Returns: `{Object}`

Create an installation by safely evaluating the code and registering
it with Zoe. Returns an `installationHandle`, an opaque unique
identifier for the contract code.

```js
import bundleSource from '@agoric/bundle-source';

// Pack the contract.
const { sourceCode, moduleFormat } = await bundleSource(someContract);

// install and get the `installationHandle` for someContract
const installationHandle = zoe.install(sourceCode, moduleFormat);
```

## zoe.makeInstance(installationHandle, issuerKeywordRecord, terms)
- `installationHandle` `{Object}`
- `issuerKeywordRecord` `{Object}`
- `terms` `{Object}`
- Returns: `{Invite}`

We can use Zoe to create smart contract instances by specifying a
particular contract installation to use, as well as the
`issuerKeywordRecord` and `terms` of the contract. The
`issuerKeywordRecord` is a record mapping string names (keywords) to
issuers, such as `{ Asset: simoleanIssuer}`. (Note that the keywords
must begin with a capital letter and must be ASCII.) Parties to the
contract will use the keywords to index their proposal and their
payments. The payout that users receive from Zoe will be in the form of an
object with keywords as keys. Terms are the arguments to the contract,
such as the number of bids an auction will wait for before closing.
Terms are up to the discretion of the smart contract. We get back an
invite (an ERTP payment) to participate in the contract.

```js
const issuerKeywordRecord = { 
  'Asset' : moolaIssuer, 
  'Price' : simoleanIssuer 
};
const terms = { numBids: 3 };
const someInvite = await E(zoe).makeInstance(
  secondPriceAuctionInstallationHandle, 
  issuerKeywordRecord, 
  terms
);
```

## zoe.getInstance(instanceHandle)
- Returns: <router-link
  to="/zoe/api/table-columns.html#instance-record-properties">`{InstanceRecord}`</router-link>

Credibly get the instance record using the `instanceHandle` ID.

```js
const {
  handle,
  installationHandle,
  publicAPI,
  terms,
  issuerKeywordRecord,
  keywords,
} = await E(zoe).getInstance(instanceHandle);
```

## zoe.redeem(invite, proposal, payments)
- `invite` `{Payment}`
- `proposal` <router-link to="/zoe/api/structs.html#proposal">`{Proposal}`</router-link>
- `payments` `{PaymentKeywordRecord}`
- Returns: `{SeatAndPayout}`

To redeem an invite, the user must provide a proposal (their rules for the
offer) as well as payments to be escrowed by Zoe.

The proposal has three parts: `want` and `give` are used
by Zoe to enforce offer safety, and `exit` is used to specify
the extent of payout liveness that Zoe can guarantee.

`want` and `give` are objects with keywords as keys and amounts
as values. `payments` is a record with keywords as keys,
and the values are the actual payments to be escrowed. A payment
is expected for every rule under `give`.

```js
// A user redeems their invite and escrows with Zoe
const { seat: userSeat, payout: userPayoutP } = await zoe.redeem(
  userInvite,
  userProposal,
  userPayments,
);
```

## zoe.isOfferActive(offerHandle)
- `offerHandles` `{Object}`
- Returns: `{Boolean}``

Check if the offer is still active. This method does not throw if the offer is inactive.

```js
const isActive = zoe.isOfferActive(someOfferHandle);
```

## zoe.getOffers(offerHandles)
- `offerHandles` `{Array <Object>}`
- Returns: <router-link to="/zoe/api/records.html#offer-record">`{Array <OfferRecord>}`</router-link>

Get a list of offer records. Throws error if offers are not found.

```js
const offers = zoe.getOffers(listOfOfferHandles);
```

## zoe.getOffer(offerHandle)
- `offerHandle` `{Object}`
- Returns: <router-link to="/zoe/api/records.html#offer-record">`{<OfferRecord>}`</router-link>

Get the offer record. Throws error if the offer is not found.

```js
const { 
  handle,
  installationHandle,
  publicAPI,
  terms
} = zoe.getOffer(inviteHandle);
```
