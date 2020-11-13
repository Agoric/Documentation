(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{424:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"loan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loan"}},[t._v("#")]),t._v(" Loan")]),t._v(" "),e("Zoe-Version"),t._v(" "),e("h5",{attrs:{id:"view-the-code-on-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-the-code-on-github"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/tree/master/packages/zoe/src/contracts/loan",target:"_blank",rel:"noopener noreferrer"}},[t._v("View the code on Github"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"view-all-contracts-on-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view-all-contracts-on-github"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/Agoric/agoric-sdk/tree/master/packages/zoe/src/contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("View all contracts on Github"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("The basic loan contract has two parties, a "),e("em",[t._v("lender")]),t._v(" and a "),e("em",[t._v("borrower")]),t._v(".\nIt lets the borrower add collateral of a particular brand and get a\nloan of another brand. The collateral (also known as margin) must be a\ncertain percentage of the loan value (the default is 150%). The exact\npercentage required is defined by the Maintenance Margin Requirement\n("),e("code",[t._v("mmr")]),t._v(") in the terms of the contract.")]),t._v(" "),e("p",[t._v("The loan does not have a distinct end time. Rather, if the\nvalue of the collateral changes such that insufficient margin is\nprovided, the collateral is liquidated, and the loan is closed. At any\ntime, the borrower can add collateral or repay the loan with interest,\nclosing the loan.")]),t._v(" "),e("p",[t._v("Note that all collateral must be of the same brand and all of the\nloaned amount and interest must be of the same (separate) brand.")]),t._v(" "),e("h2",{attrs:{id:"terms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terms"}},[t._v("#")]),t._v(" Terms")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("mmr")]),t._v(" (default = 150) - the Maintenance Margin Requirement, in\npercent. The default is 150, meaning that collateral should be\nworth at least 150% of the loan. If the value of the collateral\ndrops below "),e("code",[t._v("mmr")]),t._v(", liquidation can occur.")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zoe/guide/price-authority.html"}},[e("code",[t._v("priceAuthority")])]),t._v(" - used for getting the current value of\ncollateral and setting liquidation triggers.")],1),t._v(" "),e("li",[e("code",[t._v("autoswapInstance")]),t._v(" - The running contract instance for an\n"),e("RouterLink",{attrs:{to:"/zoe/guide/contracts/autoswap.html"}},[t._v("Autoswap")]),t._v(" or "),e("RouterLink",{attrs:{to:"/zoe/guide/contracts/multipoolAutoswap.html"}},[t._v("Multipool\nAutoswap")]),t._v(" installation. The "),e("code",[t._v("publicFacet")]),t._v("\nof the instance is used to make an invitation to sell the\ncollateral on liquidation.")],1),t._v(" "),e("li",[e("code",[t._v("periodAsyncIterable")]),t._v(" - the "),e("a",{attrs:{href:"https://javascript.info/async-iterators-generators",target:"_blank",rel:"noopener noreferrer"}},[t._v("asyncIterable"),e("OutboundLink")],1),t._v(" used for notifications\nthat a period has passed, on which compound interest will be\ncalculated using the "),e("code",[t._v("interestRate")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("interestRate")]),t._v(" - the rate in "),e("a",{attrs:{href:"https://www.investopedia.com/terms/b/basispoint.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("basis points"),e("OutboundLink")],1),t._v(" that will be multiplied\nwith the debt on every period to compound interest.")])]),t._v(" "),e("h2",{attrs:{id:"issuerkeywordrecord"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issuerkeywordrecord"}},[t._v("#")]),t._v(" IssuerKeywordRecord")]),t._v(" "),e("p",[t._v("All keyword records use the following, regardless of their role in\nthe contract:")]),t._v(" "),e("ul",[e("li",[t._v("Keyword: "),e("code",[t._v("Collateral")]),t._v(" - The issuer/payment for the digital assets to be\nescrowed as collateral.")]),t._v(" "),e("li",[t._v("Keyword: "),e("code",[t._v("Loan")]),t._v(" - The issuer/payment for the digital assets to be loaned\nout.")])]),t._v(" "),e("h2",{attrs:{id:"the-lender"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-lender"}},[t._v("#")]),t._v(" The Lender")]),t._v(" "),e("p",[t._v("The lender puts up the amount to be loaned to the borrower, but has no\nfurther actions. The loan is ongoing until it is paid back entirely or\nliquidated, at which point the lender receives a payout. This means\nthe lender's payout will be in Loan-branded digital assets,\nnot Collateral-brand. (The only exception is if the scheduling\nof liquidation triggers with the "),e("code",[t._v("priceAuthority")]),t._v(" results in a error. In\nthat case, we must give the collateral to the lender.\nThe borrower has already exited with their loan.)")]),t._v(" "),e("p",[t._v("The lender will want the loan interest in addition to either their refund\nor the liquidation results. If the collateral price drops\nbefore liquidation, the total payout could be zero.\nTherefore, the lender cannot "),e("code",[t._v("want")]),t._v(" anything in their proposal.")]),t._v(" "),e("p",[t._v("The lender must be able to exit on demand until borrowing occurs. If\nthe exit rule was "),e("code",[t._v("waived")]),t._v(", a borrower could hold on to their\ninvitation and effectively lock up the lender's escrowed loan amount\nforever.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" terms "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mmr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  autoswapInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  priceAuthority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  periodAsyncIterable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  interestRate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" creatorInvitation"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lendInvitation "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("startInstance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  installation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  issuerKeywordRecord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  terms"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" maxLoan "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loanMath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proposal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  give"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Loan"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maxLoan "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" payments "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Loan"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" loanPayment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lenderSeatPromise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lendInvitation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proposal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// E() can operate on a promise for an object. This enables promise pipelining.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" borrowInvitationPromise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lenderSeatPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOfferResult")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("h2",{attrs:{id:"the-borrower"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-borrower"}},[t._v("#")]),t._v(" The Borrower")]),t._v(" "),e("p",[t._v("The borrower receives an invitation to join, makes an offer with Zoe\nescrowing their collateral, and receives their loan. The collateral is\nmoved to an internal seat called the "),e("code",[t._v("collateralSeat")]),t._v(", and the borrower seat\nis exited at this point so the borrower gets the payout of their loan.\nThe borrower also gets an object ("),e("code",[t._v("borrowFacet")]),t._v(") as their "),e("code",[t._v("offerResult")]),t._v(" that\nlets them continue interacting with the contract.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" borrowerProposal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("harden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  want"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Loan"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maxLoan "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  give"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Collateral"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" allCollateralAmount "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" borrowerPayments "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Collateral"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" collateralPayment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" borrowSeatPromise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  borrowInvitationPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  borrowerProposal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  borrowerPayments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" borrowFacetPromise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("borrowSeatPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOfferResult")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("p",[t._v("Once the loan starts, the borrower can repay the loan in its\nentirety at any time (at which point the lender receives the loan amount back plus\ninterest, and the contract closes), or add more collateral to prevent\nliquidation.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" closeLoanInvitationPromise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  borrowFacetPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCloseLoanInvitation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addCollateralInvitationPromise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  borrowFacetPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeAddCollateralInvitation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("h2",{attrs:{id:"contract-shutdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contract-shutdown"}},[t._v("#")]),t._v(" Contract Shutdown")]),t._v(" "),e("p",[t._v("The contract shuts down under any one of 3 conditions:")]),t._v(" "),e("ol",[e("li",[t._v("The loan (plus interest) is repaid.\n"),e("ul",[e("li",[t._v("The lender gets the repayment and the borrower gets\ntheir collateral back.")])])]),t._v(" "),e("li",[t._v("The value of the collateral drops and the collateral must be\nliquidated.\n"),e("ul",[e("li",[t._v("The lender gets the outcome of the collateral sale, and the borrower keeps their loan.")])])]),t._v(" "),e("li",[t._v("An error occurs when trying to use the priceAuthority.\n"),e("ul",[e("li",[t._v("The lender gets the collateral, and the borrower keeps their loan.")])])])]),t._v(" "),e("h2",{attrs:{id:"debt-and-interest-calculation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debt-and-interest-calculation"}},[t._v("#")]),t._v(" Debt and Interest Calculation")]),t._v(" "),e("p",[t._v("Interest is calculated and compounded when the\n"),e("code",[t._v("periodAsyncIterable")]),t._v(" pushes a new value. The interest rate per period\nis defined by the "),e("code",[t._v("interestRate")]),t._v(" parameter.")]),t._v(" "),e("h2",{attrs:{id:"scheduling-liquidation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scheduling-liquidation"}},[t._v("#")]),t._v(" Scheduling Liquidation")]),t._v(" "),e("p",[t._v("Liquidation is scheduled using the "),e("code",[t._v("priceAuthority")]),t._v(" parameter.\nSpecifically, the contract gets a promise resolved when the value of the\ncollateral falls below a trigger value defined by the "),e("code",[t._v("mmr")]),t._v(" parameter:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" internalLiquidationPromise "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priceAuthority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quoteWhenLT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  allCollateralAmount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  liquidationTriggerValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ninternalLiquidationPromise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("liquidate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("p",[t._v("The borrower can self-forewarn about a potential liquidation by setting up their own margin calls.\nThey do this by getting the "),e("RouterLink",{attrs:{to:"/zoe/guide/price-authority.html"}},[e("code",[t._v("priceAuthority")])]),t._v(" from the terms and calling:")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priceAuthority"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("quoteWhenLT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allCollateralAmount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myWarningLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("priceQuote")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAddCollateral")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priceQuote"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),e("p",[t._v("where "),e("code",[t._v("myWarningLevel")]),t._v(" is the value of the collateral in the Loan brand at which they\nwant a reminder to add collateral.")]),t._v(" "),e("h2",{attrs:{id:"liquidating"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#liquidating"}},[t._v("#")]),t._v(" Liquidating")]),t._v(" "),e("p",[t._v("Actual liquidation is done through an Autoswap or Multipool Autoswap\ninstance, regardless of the current price within the Autoswap\ninstance. Even if the price is worse or better than what our "),e("code",[t._v("priceAuthority")]),t._v("\nquoted, we still liquidate.")]),t._v(" "),e("h2",{attrs:{id:"future-directions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#future-directions"}},[t._v("#")]),t._v(" Future directions")]),t._v(" "),e("ul",[e("li",[t._v("Add ability to liquidate partially")]),t._v(" "),e("li",[t._v("Add ability to withdraw excess collateral")]),t._v(" "),e("li",[t._v("Add ability to repay partially")])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);