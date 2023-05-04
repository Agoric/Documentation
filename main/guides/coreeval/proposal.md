# Code the Proposal

You will need to write a proposal script that requests storageNode powers and passes them to the contract via privateArgs. For example, [here](https://github.com/Agoric/agoric-sdk/blob/master/packages/inter-protocol/test/psm/gov-add-psm.js) is the proposal we created for the PSM contract:

```jsx
/* global startPSM */
// @ts-nocheck

/**
 * @typedef {{
 *   denom: string,
 *   keyword?: string,
 *   proposedName?: string,
 *   decimalPlaces?: number
 * }} AnchorOptions
 */

/** @type {AnchorOptions} */
const DAI = {
  keyword: 'DAI',
  decimalPlaces: 18,
  denom: 'ibc/toydai',
  proposedName: 'Maker DAI',
};

const config = {
  options: { anchorOptions: DAI },
  WantMintedFeeBP: 1n,
  GiveMintedFeeBP: 3n,
  MINT_LIMIT: 0n,
};

/** @param {unknown} permittedPowers see gov-add-psm-permit.json */
const main = async permittedPowers => {
  console.log('starting PSM:', DAI);
  const {
    consume: { feeMintAccess: _, ...restC },
    ...restP
  } = permittedPowers;
  const noMinting = { consume: restC, ...restP };
  await Promise.all([
    startPSM.makeAnchorAsset(noMinting, {
      options: { anchorOptions: DAI },
    }),
    startPSM.startPSM(permittedPowers, config),
  ]);
  console.log('started PSM:', config);
};

// "export" from script
main;

```

Bundle your contract by navigating to `<agoric-sdk>/packages/vats` and running

```
yarn bundle-source --cache-json bundles/ <PATH_TO_CONTRACT> <CONTRACT_NAME>
```