# Mint Object

Only a **Mint** can issue new digital assets. 

A **Mint** has a one-to-one relationship with both an **[Issuer](./issuer.md)** and a **[Brand](./brand.md)**.
So it can only mint new assets of that **Brand** and is the only **Mint** that can mint
new assets of that **Brand**.

**Mints** are created by cqlling the **[makeIssuerKit()](./issuer.md#makeissuerkit-allegedname-assetkind-displayinfo-optshutdownwithfailure-elementshape)** function. See the **[Issuer](./issuer.md)** documentation for detailed information about how to use this function.

## aMint.getIssuer()
- Returns: **[Issuer](./issuer.md)**

Returns the **Issuer** uniquely associated with this **Mint**. From its creation, a **Mint** is always
in an unchangeable one-to-one relationship with a particular **Issuer**. 

```js
const { issuer: quatloosIssuer, mint: quatloosMint } = makeIssuerKit('quatloos');
const quatloosMintIssuer = quatloosMint.getIssuer();

// returns true
issuer === quatloosMintIssuer;
```

## aMint.mintPayment(newAmount)
- **newAmount** **[Amount](./ertp-data-types.md#amount)**
- Returns: **[Payment](./payment.md)**

Creates and returns new digital assets of the **Mint**'s associated **[Brand](./brand.md)**.
From its creation, a **Mint** is always in an unchangeable
one-to-one relationship with a **Brand**.

```js
const { issuer: quatloosIssuer, mint: quatloosMint
        brand: quatloosBrand } = makeIssuerKit('quatloos');

const quatloos1000 = amountMath.make(quatloosBrand, 1000n);
// newPayment will have a balance of 1000 Quatloos
const newPayment = quatloosMint.mintPayment(quatloos1000);
```

::: tip Important
**aMint.mintPayment()** is the <ins>only</ins> way
to create new digital assets. There is no other way.
:::
