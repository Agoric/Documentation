# Atomic Swap

<Zoe-Version/>

##### [View the code on Github](https://github.com/Agoric/agoric-sdk/blob/958a2c0a3dec38bdba2234934119ea2c28958262/packages/zoe/src/contracts/atomicSwap.js) (Last updated: 4/22/2020)
##### [View all contracts on Github](https://github.com/Agoric/agoric-sdk/tree/master/packages/zoe/src/contracts)

If I want to trade one kind of asset for another kind, I could send
you the asset and ask you to send me the other kind back. But, you
could choose to behave opportunistically: receive my asset and give
nothing back. To solve this problem, swap contracts allow users to
securely trade one kind of digital asset for another kind, leveraging Zoe for
escrow and offer safety. At no time does any user have the ability to
behave opportunistically.

In the `atomicSwap` contract, anyone can securely swap with a counterparty by escrowing digital assets with Zoe and sending an invite to the swap to the counterparty.

Let's say that Alice wants to swap with Bob as the counterparty. She
knows that the code for the swap has already been installed, so she
can create a swap instance from the swap installation (`handle` is the
unique, unforgeable identifier):

```js
const issuerKeywordRecord = harden({
  Asset: moolaIssuer,
  Price: simoleanIssuer,
});
const newInvite = await zoe.makeInstance(
  installationHandle,
  issuerKeywordRecord,
);
```

Then she escrows her offer with Zoe. When she escrows, she passes in
two things, the actual ERTP payments that are part of her offer, and
an object called `Proposal`. The `Proposal` will be used by Zoe to
protect Alice from the smart contract and other participants. The
`Proposal` has three parts: `give` and `want`, which is used for
enforcing offer safety, and `exit`, which is used to enforce
exit safety. In this case, Alice's exit rule is `onDemand`, meaning
that she can exit at any time.

```js
const moola = moolaAmountMath.make;
const simoleans = simoleanAmountMath.make;

const aliceProposal = harden({
  give: { Asset: moola(3) },
  want: { Price: simoleans(15) },
  exit: { onDemand: null },
})

const alicePayments = { Asset: aliceMoolaPayment }
```

In order for Alice to escrow with Zoe she needs to use her invite.
Once Alice uses her invite and makes her offer she will receive an `outcome` and a
promise that resolves to her payout.

```js
const { outcome, payout: alicePayoutP } = await E(zoe).offer(
  aliceInvite,
  aliceProposal,
  alicePayments,
);
```

Alice's outcome, the result of the offer, is an invite she can send to
someone else:

```js
const newInviteP = outcome;
```

She then sends the invite to Bob and he looks up the invite to see if it matches Alice's claims.

```js
const inviteIssuer = zoe.getInviteIssuer();
const bobExclusiveInvite = await inviteIssuer.claim(newInviteP);
const bobInviteValue = inviteIssuer.getAmountOf(bobExclusiveInvite)
  .value[0];

const {
  installationHandle: bobInstallationId,
  issuerKeywordRecord: bobIssuers,
} = zoe.getInstance(bobInviteValue.instanceHandle);


// Bob does checks
assert(bobInstallationId === installationHandle, details`wrong installation`);
assert(bobIssuers.Asset === moolaIssuer, details`unexpected Asset issuer`);
assert(bobIssuers.Price === simoleanIssuer, details`unexpected Price issuer`);
assert(moolaAmountMath.isEqual(bobInviteValue.asset, moola(3)), details`wrong asset`);
assert(simoleanAmountMath.isEqual(bobInviteValue.price, simoleans(7)), details`wrong price`);
```

Bob decides to be the counter-party. He also escrows his payments and uses his invite to
make an offer in the same way as Alice, but his `Proposal` match Alice's:

```js
const bobProposal = harden({
  want: { Asset: moola(3) },
  give: { Price: simoleans(7) },
  exit: { onDemand: null },
})

// Bob escrows with zoe and makes an offer
const { outcome: bobOfferResult, payout: bobPayoutP } = await E(zoe).offer(
  bobExclusiveInvite,
  bobProposal,
  bobPayments,
);


Now that Bob has made his offer, the contract executes and Alice's
payout resolves to a a record with keyword keys
of ERTP payments `{ Asset: moola(0), Price: simoleans(7) }` where the
moolaPayment is empty, and the simoleanPayment has a balance of 7.

The same is true for Bob, but for his specific payout.

```js
const bobPayout = await bobPayoutP;
const alicePayout = await alicePayoutP;

const bobMoolaPayout = await bobPayout.Asset;
const bobSimoleanPayout = await bobPayout.Price;

const aliceMoolaPayout = await alicePayout.Asset;
const aliceSimoleanPayout = await alicePayout.Price;
```
