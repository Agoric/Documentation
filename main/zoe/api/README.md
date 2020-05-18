# Zoe API

<Zoe-Version/>

The Zoe framework provides a way to write smart contracts without having to worry about [offer safety](../guide/offer-safety.md). To use Zoe, we put things in terms of "offers". An offer proposal is a statement about what you want and what you're willing to offer. It turns out, many smart contracts (apart from gifts and one-way payments) involve an exchange of digital assets that can be put in terms of offer proposals.

Start creating your own contract or build on any of our existing contracts.
Explore our pre-built contracts [here](../guide/contracts/README.md).

The Zoe API is divided into the following sections:

- [Zoe Service](./zoe.md) - 
  The methods for deploying and working with smart contracts.
- [Zoe Contract Facet](./zoe-contract-facet.md) -
  These Zoe methods can be called synchronously by contract code. A contract can use the Zoe Contract Facet (zcf) to do things like reallocate among offers or complete an offer.
- [ZoeHelpers for writing contracts](./zoe-helpers.md) -
  Functions that extract common contract code and patterns into reusable helpers.
- [Records in Zoe](./records.md) -
  Javascript objects specific to Zoe. 
