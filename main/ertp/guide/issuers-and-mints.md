# Issuers and  Mints

## Issuers
![Issuer structure](./assets/issuers-and-assets.svg)

**Note**: You should not create an Issuer in a deploy script. Deploy scripts are ephemeral, so any object 
created there dies as soon as the script stops.

Behind the scenes, an `issuer` maps minted digital assets to their location in a `purse`
or `payment`. An `issuer` verifies, moves, and manipulates digital assets. 
Its special admin facet is a `mint` which it has a one-to-one
relationship with. Only a `mint` can issue new digital assets; an `issuer` cannot.

An `issuer` also has a one-to-one relationship with a `brand`. So, if
our `brand` is the imaginary currency Quatloos, only
the `issuer` in the one-to-one relationship with the Quatloos `brand`
can:
- Create a new empty `purse` that can store Quatloos.
- Manipulate a `payment` in Quatloos to be claimed, split, combined,
burned, or have its amount gotten.

An `issuer` should be obtained from a trusted source and
then relied upon as the authority as to whether an untrusted `payment`
of the same `brand` is valid.
 
![Issuer methods](./assets/issuer1.svg)

`Issuer` methods:
- Return information about an `issuer`.
- Create a new `issuer`.
- Create a new `purse`. 
- Operate on `payment` arguments.

The following is
a brief description and example of each `Issuer` method. For
more detail, click the method's name to go to its entry in the [ERTP
API Reference](/ertp/api/).

- **Create issuer operation**
  - [`makeIssuerKit(allegedName, assetKind, displayInfo=)`](/ertp/api/issuer.md#makeissuerkit-allegedname-assetkind-displayinfo)
    - Create and return a new `issuer` and its associated `mint` and `brand`.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#import
      <<< @/snippets/ertp/guide/test-issuers-and-mints.js#makeIssuerKit
- **Get information about the issuer operations**
  - [`issuer.getAllegedName()`](/ertp/api/issuer.md#issuer-getallegedname)
    - Return the `allegedName` for the `issuer` (the non-trusted human-readable name of its associated `brand`).
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#getAllegedName
  - [`issuer.getAssetKind()`](/ertp/api/issuer.md#issuer-getassetkind)
    - Return the kind of the `issuer`'s asset; either `AssetKind.NAT` ("nat") or `AssetKind.SET` ("set").
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#getAssetKind
  - [`issuer.getBrand()`](/ertp/api/issuer.md#issuer-getbrand)
    - Return the `brand` for the `issuer`.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#getBrand
- **Purse operation**
  - [`issuer.makeEmptyPurse()`](/ertp/api/issuer.md#issuer-makeemptypurse)
    - Make and return an empty `purse` for holding assets of the `brand` associated with the `issuer`.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#makeEmptyPurse
- **Payment operations**
  - [`issuer.burn(payment, optAmount)`](/ertp/api/issuer.md#issuer-burn-payment-optamount)
    - Destroy all of the digital assets in the `payment`.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#burn
  - [`issuer.claim(payment, optAmount)`](/ertp/api/issuer.md#issuer-claim-payment-optamount)
    - Transfer all digital assets from `payment` to a new Payment.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#claim
  - [`issuer.combine(paymentsArray)`](/ertp/api/issuer.md#issuer-combine-paymentsarray-opttotalamount)
    - Combine multiple Payments into one new Payment.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#combine

  - [`issuer.getAmountOf(payment)`](/ertp/api/issuer.md#issuer-getamountof-payment)
    - Describe the `payment`'s balance as an Amount.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#getAmountOf
  - [`issuer.isLive(payment)`](/ertp/api/issuer.md#issuer-islive-payment)
    - Return `true` if the `payment` was created by the issuer and is available for use (has not been consumed or burned).
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#isLive
  - [`issuer.split(payment, paymentAmountA)`](/ertp/api/issuer.md#issuer-split-payment-paymentamounta)
    - Split a single `payment` into two new Payments.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#split
  - [`issuer.splitMany(payment, paymentAmountArray)`](/ertp/api/issuer.md#issuer-splitmany-payment-amountarray)
    - Split a single `payment` into multiple Payments.
    - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#splitMany


**Related Methods:**

**Note**: These methods help you find the right `issuer`, but aren't authoritative.
A `mint`, `brand`, or `purse` is actually associated with an `issuer` only if
the `issuer` itself acknowledges the association.

- [`mint.getIssuer()`](/ertp/api/mint.md#mint-getissuer)
  - Return the `issuer` uniquely associated with the `mint`.
  - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#mintGetIssuer
- [`brand.isMyIssuer(issuer)`](/ertp/api/brand.md#brand-ismyissuer-issuer)
  - Return `true` if `issuer` is the brand's `issuer`, `false` if not.
  - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#isMyIssuer

## Mints
![Mint methods](./assets/mint.svg)

A `mint` issues new digital assets of its associated `brand` as a new 
`payment` object. These assets may be currency-like (our imaginary
Quatloos currency), goods-like valuables (magic swords for games), or
electronic rights (the right to participate in a contract). Only a
holder of a `mint` object can create new assets from it. 

In other words, let's say there
are 1000 Quatloos in circulation. Only holders of the Quatloos associated
`mint` can make any more Quatloos that'd boost the amount in circulation to, say, 2000.

Since these relationships are one-to-one and unchangeable:
- A `mint` created to make an asset `brand`, say Quatloos, can only create that `brand` asset.
For example, only Quatloos, not Moola or anything else.
- A `mint` that creates an asset `brand` is the only `mint` that can create that `brand`. Only
the one Quatloos `mint` can create new Quatloos.
- A `mint` that creates an asset `brand` can never be changed to create a different `brand`.
So a Quatloos `mint` can never become a Moola `mint`, or any other non-Quatloos asset.

There are two `mint` methods, and the method that creates new mints. Click the method's name to go to its entry in the [ERTP
API Reference](/ertp/api/).
- [`mint.getIssuer()`](/ertp/api/mint.md#mint-getissuer)
  - Return the `issuer` uniquely associated with the `mint`.
  - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#mintGetIssuer
- [`mint.mintPayment(newAmount)`](/ertp/api/mint.md#mint-mintpayment-newamount)
  - Create new digital assets of the `mint`'s associated `brand`.
  - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#mintMintPayment
- [`makeIssuerKit(allegedName, assetKind, displayInfo)`](/ertp/api/issuer.md#makeissuerkit-allegedname-assetkind-displayinfo)
  - Create and return a new `issuer` and its associated `mint` and `brand`.
  - <<< @/snippets/ertp/guide/test-issuers-and-mints.js#makeIssuerKitMint

