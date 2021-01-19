(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{373:function(e,t,a){e.exports=a.p+"assets/img/0-MenuBar.12a6b27c.png"},374:function(e,t,a){e.exports=a.p+"assets/img/2-InboxWalletUI.fcd77570.png"},375:function(e,t,a){e.exports=a.p+"assets/img/3-TransfersWalletUI.4cdcf861.png"},376:function(e,t,a){e.exports=a.p+"assets/img/4-SetupWalletUI.dd54ed52.png"},377:function(e,t,a){e.exports=a.p+"assets/img/5-ConnectWalletUI.4b928516.png"},378:function(e,t,a){e.exports=a.p+"assets/img/PursesWalletUI.8cdfdb13.png"},379:function(e,t,a){e.exports=a.p+"assets/img/PursesSendWalletUI.909f142c.png"},380:function(e,t,a){e.exports=a.p+"assets/img/DappsWalletUI.0d76a53c.png"},381:function(e,t,a){e.exports=a.p+"assets/img/IssuersWalletUI.b65684cc.png"},382:function(e,t,a){e.exports=a.p+"assets/img/CreatePurseWalletUI.df3c3b46.png"},383:function(e,t,a){e.exports=a.p+"assets/img/ImportIssuerWalletUI.d54532aa.png"},384:function(e,t,a){e.exports=a.p+"assets/img/ContactsWalletUI.80ceeff5.png"},385:function(e,t,a){e.exports=a.p+"assets/img/ImportContactWalletUI.5d12ae5d.png"},386:function(e,t,a){e.exports=a.p+"assets/img/OffersWalletUI.7511543e.png"},387:function(e,t,a){e.exports=a.p+"assets/img/OfferDetailWalletUI.0563c8ee.png"},388:function(e,t,a){e.exports=a.p+"assets/img/IncomingPaymentWalletUI.6e97d7e5.png"},389:function(e,t,a){e.exports=a.p+"assets/img/PaymentDetailWalletUI.22a653f3.png"},433:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"agoric-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agoric-wallet"}},[e._v("#")]),e._v(" Agoric Wallet")]),e._v(" "),s("p",[e._v("This page documents the "),s("em",[e._v("Agoric Wallet")]),e._v(", including its use of "),s("em",[e._v("petnames")]),e._v(", its place in the Agoric Platform\narchitecture, accessing it via the "),s("em",[e._v("REPL")]),e._v(" ("),s("em",[e._v("Read-Eval-Print Loop")]),e._v("), and the Wallet API.")]),e._v(" "),s("h2",{attrs:{id:"wallet-and-agoric-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-and-agoric-architecture"}},[e._v("#")]),e._v(" Wallet and Agoric Architecture")]),e._v(" "),s("p",[e._v("The Agoric System consists of interconnected Agoric VMs. Some are\non the blockchain, some are local. The Wallet is a user's trusted\nagent for interacting with the Agoric VM network.")]),e._v(" "),s("p",[e._v("We also have Dapps ("),s("em",[e._v("Decentralized applications")]),e._v("), which are Web UIs\nthat interact with Agoric VMs. Dapps have their own agendas...which\nmay include wanting to steal assets from Wallets.")]),e._v(" "),s("p",[e._v("An "),s("em",[e._v("Ag-Solo")]),e._v(" is a single off-chain Agoric VM. They have their own UI\nand way of communicating with chains (including multiple chains and\nnetwork connections). They serve as entry points into the Agoric System.")]),e._v(" "),s("p",[e._v("When you run "),s("code",[e._v("agoric start")]),e._v(", you get a private ag-solo that runs your\nprivate wallet. The wallet is a user's "),s("em",[e._v("trusted agent")]),e._v(". It lets you\nenable or disable inbound connections from Dapps and approve or decline\nproposals from those Dapps you enabled. The Wallet is visible\nwhen you run "),s("code",[e._v("agoric open")]),e._v(".")]),e._v(" "),s("p",[e._v("The way this works in the Wallet's UI is via the "),s("em",[e._v("proposals")]),e._v(" that are\npart of a Zoe "),s("em",[e._v("offer")]),e._v("; a Dapp says it wants the user to offer something.\nThe wallet expresses that request/offer in a popup, and the user indicates\nif they want to enact or decline it.")]),e._v(" "),s("p",[e._v("Dapps can be anywhere; they can be web apps interacting with wallets,\nusually because they want your money and/or help you exchange something\nwith someone else. They may even want to give you something for free.\nBut a Dapp's main use is exchanging something on the chain, in addition\nto controlling what access they have and managing the proposals.")]),e._v(" "),s("h2",{attrs:{id:"wallet-bridge-protocol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-bridge-protocol"}},[e._v("#")]),e._v(" Wallet Bridge protocol")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("wallet bridge")]),e._v(" is a web page with direct access to an Agoric Wallet. It provides\nthe Dapp with a facet of an API. Dapps never talk directly to a Wallet, only to\nthis bridge that knows where the Wallet is. So, for example, if a Dapp is running in\nyour browser at "),s("code",[e._v("https://encouragement.example.com")]),e._v(" and the Wallet is running locally,\nthey don't communicate directly. They do so by sending JSON-encoded messages through\nthe wallet bridge.")]),e._v(" "),s("h2",{attrs:{id:"petnames-and-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#petnames-and-paths"}},[e._v("#")]),e._v(" Petnames and paths")]),e._v(" "),s("p",[e._v("Before we get into the Wallet itself, you should know about "),s("em",[e._v("petnames")]),e._v(',\nwhich are your personal names for objects. No one else can see or\nmodify a petname without your permission. You can think of them as\nyour phone\'s contacts list. The actual phone number is what your phone\nuses to call someone, but for you to more easily tell who a number is\nassociated with, you\'ve assigned a petname to it, such as Mom,\nGrandpa, Kate S., etc. Different people can have different petnames for\ndifferent objects. For example, the same person is "Mom" to you, "Mimi"\nto her granddaughter, and "Mrs. Watson" to many others.')]),e._v(" "),s("p",[e._v("Your Wallet manages your petnames for Dapps, asset types, issuers, etc.")]),e._v(" "),s("p",[e._v("The wallet bridge protocol is migrating petnames to "),s("em",[e._v("paths")]),e._v(". All former petnames\nare now either a "),s("em",[e._v("path")]),e._v(" or still a plain string. A path is an array of strings\nwhose first element is the user's petname for a Dapp. Dapps must be able to\nwork with either plain string petnames or array-of-strings paths.")]),e._v(" "),s("p",[e._v("They can do this via "),s("code",[e._v("JSON.stringify(petnameOrPath)")]),e._v(" before using the "),s("code",[e._v("petnameOrPath")]),e._v(" in\na programmatic string-only context (such as a key in a Map or Set, or an HTML element's\nattribute value, such as an ID).  When displaying a path to users, you should join its\nelements with "),s("code",[e._v("'.'")]),e._v(". If in a UI, you should ideally color the first element\ndifferently from the dots and other elements. The first element is a trusted,\nuser-assigned petname for the Dapp, while the other elements were automatically\ngenerated by the Dapp or wallet. Thus, they have no special relationship to the user.")]),e._v(" "),s("h3",{attrs:{id:"dapp-specific-path-suggestions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dapp-specific-path-suggestions"}},[e._v("#")]),e._v(" Dapp-specific path suggestions")]),e._v(" "),s("p",[e._v("Your Dapp should suggest names for any Installations, Instances, or Issuers wallet users\nwill interact with. When a wallet accepts them, it returns them to the Dapp as paths (arrays\nof strings) that start with the user's petname for the Dapp.")]),e._v(" "),s("p",[e._v("For example, here are "),s("a",{attrs:{href:"https://github.com/Agoric/dapp-fungible-faucet/blob/6092d6648a7a773d299c79fecd44bb650f6cfa06/ui/public/src/main.js#L145",target:"_blank",rel:"noopener noreferrer"}},[e._v("the messages that the Fungible Faucet Dapp\nsends"),s("OutboundLink")],1),e._v("\nover the wallet bridge:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Our issuer will default to something like `FungibleFaucet.Installation`.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("walletSend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'walletSuggestInstallation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      petname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Installation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      boardId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("INSTALLATION_BOARD_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Our issuer will default to something like `FungibleFaucet.Instance`.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("walletSend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'walletSuggestInstance'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      petname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Instance'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      boardId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("INSTANCE_BOARD_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Our issuer will default to something like `FungibleFaucet.Assurance`.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("walletSend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'walletSuggestIssuer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      petname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Token'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      boardId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("TOKEN_ISSUER_BOARD_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"the-agoric-board"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-agoric-board"}},[e._v("#")]),e._v(" The Agoric Board")]),e._v(" "),s("p",[e._v("Several Wallet API methods use "),s("em",[e._v("Agoric's Board")]),e._v(', a key-value "bulletin board" that\nlets users make data generally available. Users can obtain an Id by posting a value and\nothers can get the value just by knowing the Id. You can make Id(s) known by any\ncommunication method you like; private email, an email blast to a mailing list\nor many individuals, buying an ad on a website, tv program, or newspaper,\nlisting it on her website, etc.')]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" depositFacet "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("board"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("aliceQuatloosDepositFacetId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("aliceQuatloosDepositFacet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("receive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("myQuatloosPayment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])]),s("p",[e._v("To get an object, such as a depositFacet, using the Board, first you have\nto be told what Board Id is associated with it. Using the "),s("code",[e._v("getValue()")]),e._v(" method,\nyou retrieve the reference to the depositFacet and can deposit payments into it.")]),e._v(" "),s("h2",{attrs:{id:"the-wallet-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-wallet-ui"}},[e._v("#")]),e._v(" The Wallet UI")]),e._v(" "),s("p",[e._v("From a shell window, run "),s("code",[e._v("agoric open")]),e._v(" to open the Wallet UI in a browser tab.")]),e._v(" "),s("h3",{attrs:{id:"menu-bar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#menu-bar"}},[e._v("#")]),e._v(" Menu Bar")]),e._v(" "),s("p",[e._v("At the top of the UI is a menu bar with four items.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(373),alt:"Menu bar"}})]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Inbox")]),e._v(" "),s("ul",[s("li",[s("img",{attrs:{src:a(374),alt:"Inbox"}})]),e._v(" "),s("li",[e._v("Shows your offers, impending payments, Dapps, and purses.")]),e._v(" "),s("li",[e._v("Lets you send payments, enable/disable Dapps and change their petname, approve/decline offers, or deposit impending payments.")])])]),e._v(" "),s("li",[s("strong",[e._v("Transfers")]),e._v(" "),s("ul",[s("li",[s("img",{attrs:{src:a(375),alt:"Transfers"}})]),e._v(" "),s("li",[e._v("Shows your purses and contacts.")]),e._v(" "),s("li",[e._v("Lets you send payments, import contacts by Board ID and give them a petname.")])])]),e._v(" "),s("li",[s("strong",[e._v("Setup")]),e._v(" "),s("ul",[s("li",[s("img",{attrs:{src:a(376),alt:"Setup"}})]),e._v(" "),s("li",[e._v("Shows your Dapps, issuers, and contacts.")]),e._v(" "),s("li",[e._v("Lets you create empty purses, import contacts by Board ID and give them a petname, and enable/disable Dapps and change their petname.")])])]),e._v(" "),s("li",[s("strong",[e._v("Connected/Disconnect")]),e._v(" "),s("ul",[s("li",[s("img",{attrs:{src:a(377),alt:"Connected"}})]),e._v(" "),s("li",[e._v("Shows if the Wallet UI is connected to your ag-solo.")]),e._v(" "),s("li",[e._v("Lets you connect the Wallet to or disconnect the Wallet UI from your ag-solo.")])])])]),e._v(" "),s("p",[e._v("As there are only six page components, several of which are repeated on the three pages making up the Wallet UI,\nwe will cover the components in detail rather than the pages.")]),e._v(" "),s("h3",{attrs:{id:"purses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purses"}},[e._v("#")]),e._v(" Purses")]),e._v(" "),s("p",[s("img",{attrs:{src:a(378),alt:"Purses"}})]),e._v(" "),s("p",[e._v("The Purses component shows all purses in the wallet and their current balances (both the value and the brand).\nIt also shows the special default purse that holds Zoe invitations.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(379),alt:"Purse Send"}})]),e._v(" "),s("p",[e._v("If you expand a purse entry, you'll see a red "),s("strong",[e._v("SEND")]),e._v(" button for that purse. Clicking it opens the above\npopup. From the popup, you can specify how much of the purse's shown current balance you would like to\nsend elsewhere.")]),e._v(" "),s("p",[e._v("You can transfer assets to another purse within your wallet. However, there must already be a purse that accepts\nassets of that brand to select. Otherwise, your only option is to send the assets back to the same purse they came\nfrom, which can be used for testing.")]),e._v(" "),s("p",[e._v("Or you can transfer assets from the purse to any contact you already have. As noted, this is an irrevocable one way\ntransfer. If the contact doesn't have an auto-deposit purse that accepts this asset type, it just sits under their\nIncoming Payments until an appropriate purse is created and it is manually deposited.  Only one purse can be\ndesignated the auto-deposit purse for its asset type.")]),e._v(" "),s("p",[e._v("When you are finished specifying how much the payment is and where it's going, click the "),s("strong",[e._v("Send")]),e._v(" button at the bottom\nof the popup. Otherwise click the "),s("strong",[e._v("Cancel")]),e._v(" button to cancel the prospective transfer and close the popup.")]),e._v(" "),s("p",[e._v("If you enable a Purse's "),s("strong",[e._v("AutoDeposit")]),e._v(" by sliding its buttonto the right, causing it to turn red, any\nincoming Payments of that Purse's Brand are automatically deposited into it. Doing so disables any other\nauto-deposit purses for that Brand. Sliding the button to the left, causing it to turn white, means you have\nto manually approve the deposit.")]),e._v(" "),s("h3",{attrs:{id:"dapps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dapps"}},[e._v("#")]),e._v(" Dapps")]),e._v(" "),s("p",[s("img",{attrs:{src:a(380),alt:"Dapps"}})]),e._v(" "),s("p",[e._v("The Dapps component shows all Dapps that can communicate with the Wallet. An expanded entry\nshows an alleged URL for that Dapp's UI, its Petname, and a toggle to enable/disable the Dapp\nfrom communicating with the Wallet. Note that like the other entries with an on/off slider,\na Dapp is enabled when the button is slid to the right and turns red, and disabled when slid to the\nleft and turns white.")]),e._v(" "),s("h3",{attrs:{id:"issuers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issuers"}},[e._v("#")]),e._v(" Issuers")]),e._v(" "),s("p",[s("img",{attrs:{src:a(381),alt:"Issuers"}})]),e._v(" "),s("p",[e._v("The Issuers component shows all Issuers known to the Wallet, along with their associated Brands.\nAn expanded entry shows that Issuer's Board ID and a "),s("strong",[e._v("Make Purse")]),e._v(" button. When "),s("strong",[e._v("Make Purse")]),e._v(" is\nclicked the following popup appears:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(382),alt:"Make Purse"}})]),e._v(" "),s("p",[e._v("The Issuer creates a new empty Purse, that holds its Brand of assets, in the Wallet, giving it the Petname\nyou specify. Remember there can be more than one Purse in a Wallet that holds assets of a specific Brand.")]),e._v(" "),s("p",[e._v("If you click the "),s("strong",[e._v("Import")]),e._v(" button at the bottom of the Issuers list, this popup appears:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(383),alt:"Import Issuer"}})]),e._v(" "),s("p",[e._v("You specify a Petname and the Board ID (obtained from a trusted source) of an Issuer, and it's imported\ninto the Wallet and can be used to create new empty Purses to store assets of its associated Brand.")]),e._v(" "),s("h3",{attrs:{id:"contacts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contacts"}},[e._v("#")]),e._v(" Contacts")]),e._v(" "),s("p",[s("img",{attrs:{src:a(384),alt:"Contacts"}})]),e._v(" "),s("p",[e._v('The Contacts component shows all entities known to the Wallet, including the Wallet itself as "Self". An\nexpanded entry shows the contact\'s Board ID. If you click on the '),s("strong",[e._v("Import")]),e._v(" button, this popup appears:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(385),alt:"Import Contact"}})]),e._v(" "),s("p",[e._v("You specify a Petname and the Board ID (obtained from a trusted source) of a Contact, and it's imported\ninto the Wallet.")]),e._v(" "),s("h3",{attrs:{id:"offers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offers"}},[e._v("#")]),e._v(" Offers")]),e._v(" "),s("p",[s("img",{attrs:{src:a(386),alt:"Offers"}})]),e._v(" "),s("p",[e._v("The Offers component shows any pending offers known to the Wallet. Click the green "),s("strong",[e._v("Accept")]),e._v(" button\nto accept the offer, or click the red "),s("strong",[e._v("Decline")]),e._v(" button to decline it.")]),e._v(" "),s("p",[e._v("Note the small, red, "),s("code",[e._v("<>")]),e._v(" at the far right\nof an offer. Clicking it opens a popup with the JSON representation of that offer, for example:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(387),alt:"Offer Detail"}})]),e._v(" "),s("h3",{attrs:{id:"incoming-payments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#incoming-payments"}},[e._v("#")]),e._v(" Incoming Payments")]),e._v(" "),s("p",[s("img",{attrs:{src:a(388),alt:"Payments"}})]),e._v(" "),s("p",[e._v("The Incoming Payments component shows any pending incoming payments not yet deposited in a purse.\nA Deposit To value of \"Automatic\" means to deposit the payment in the apprpriate purse that has\nauto-deposit enabled. Otherwise, you need to select into which of your purses for that brand of asset you\nwant to deposit the payment. Note that you can't divide the payment or otherwise make a partial\ndeposit; it's all or nothing.")]),e._v(" "),s("p",[e._v("Note the small, red, "),s("code",[e._v("<>")]),e._v(" at the far right\nof a payment. Clicking it opens a popup with the JSON representation of that payment, for example:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(389),alt:"Payment Detail"}})]),e._v(" "),s("h2",{attrs:{id:"wallet-api-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-api-overview"}},[e._v("#")]),e._v(" Wallet API Overview")]),e._v(" "),s("p",[e._v("You can interact with a Wallet via the JavaScript "),s("em",[e._v("REPL")]),e._v(" ("),s("em",[e._v("Read-Eval-Print Loop")]),e._v("),\nwhich is visible at the bottom of the Wallet UI display.\nIn the REPL, you send messages to "),s("code",[e._v("home.wallet")]),e._v(", which is the Wallet running on that\npage/process. Typing "),s("code",[e._v("E(home.wallet).foo()")]),e._v(" in the REPL returns the names of all the Wallet\nAPI methods by the clever method of asking it to evaluate a non-existent API method and\ngetting an error message listing all the valid methods.")]),e._v(" "),s("p",[e._v("Running "),s("code",[e._v("agoric open --repl==only")]),e._v(" opens a browser tab that shows only the REPL, and not\nthe combination of Wallet UI and REPL area. When issuing commands to the Wallet from the\nREPL, they must be of the form "),s("code",[e._v("E(home.wallet).<Wallet API command and arguments>")]),e._v(". For more\ninformation about "),s("code",[e._v("E()")]),e._v(", see the "),s("RouterLink",{attrs:{to:"/distributed-programming.html#communicating-with-remote-objects-using-e"}},[s("code",[e._v("E()")]),e._v(" section")]),e._v(" in\nthe Distributed JavaScript Programming Guide.")],1),e._v(" "),s("p",[e._v("There are two objects on which the Wallet API commands work:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("WalletUser")]),e._v(": The presence exposed as "),s("code",[e._v("local.wallet")]),e._v(" (and "),s("code",[e._v("home.wallet")]),e._v(" for backwards compatibility)."),s("br"),e._v("\nIt provides a place for Wallet API commands.")]),e._v(" "),s("li",[s("code",[e._v("WalletBridge")]),e._v(": Its methods can be used by an untrusted\nDapp without breaching the wallet's integrity.  These methods are also\nexposed via the iframe/WebSocket bridge that a Dapp UI can use to access the\nwallet.")])]),e._v(" "),s("h2",{attrs:{id:"walletuser-api-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#walletuser-api-commands"}},[e._v("#")]),e._v(" WalletUser API commands")]),e._v(" "),s("h3",{attrs:{id:"getbridge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getbridge"}},[e._v("#")]),e._v(" "),s("code",[e._v("getBridge()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: "),s("code",[e._v("{Promise<WalletBridge>}")])])]),e._v(" "),s("p",[e._v("Returns the wallet bridge that bypasses Dapp-authorization. This should\nonly be used within the REPL or deployment scripts that want to use the\nWalletBridge API without the effort of calling "),s("code",[e._v("getScopedBridge")]),e._v(".\nSince your REPL and deployment scripts already run using the ag-solo's full authority,\nit doesn't really make a difference to have them use a more restricted bridge.")]),e._v(" "),s("h3",{attrs:{id:"getscopedbridge-suggesteddapppetname-dapporigin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getscopedbridge-suggesteddapppetname-dapporigin"}},[e._v("#")]),e._v(" "),s("code",[e._v("getScopedBridge(suggestedDappPetname, dappOrigin)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("suggestedDappPetname")]),e._v(" "),s("code",[e._v("{Petname}")])]),e._v(" "),s("li",[s("code",[e._v("dappOrigin")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("{Promise<WalletBridge>}")])])]),e._v(" "),s("p",[e._v("Returns a wallet bridge corresponding to an origin that must be approved in the wallet UI.\nThis is available for completeness to provide the underlying API that's available over the\nstandard wallet-bridge.html.")]),e._v(" "),s("h3",{attrs:{id:"addpayment-payment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addpayment-payment"}},[e._v("#")]),e._v(" "),s("code",[e._v("addPayment(payment)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("id")]),e._v(" "),s("code",[e._v("{ERef<Payment>}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Adds a payment to the Wallet for deposit to the user-specified purse,\neither via an autodeposit or manually approved.")]),e._v(" "),s("h3",{attrs:{id:"getdepositfacet-brandboardid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getdepositfacet-brandboardid"}},[e._v("#")]),e._v(" "),s("code",[e._v("getDepositFacet(brandBoardId)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("brandBoardId")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("{Promise<string>}")])])]),e._v(" "),s("p",[e._v("Returns the board ID for the deposit facet of the user's Wallet that accepts payments\nof the brand specified by the "),s("code",[e._v("brandBoardId")]),e._v(" parameter.")]),e._v(" "),s("h3",{attrs:{id:"getissuers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getissuers"}},[e._v("#")]),e._v(" "),s("code",[e._v("getIssuers()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: "),s("code",[e._v("{Array<[Petname, Issuer]>}")])])]),e._v(" "),s("p",[e._v("Returns an array of all the Issuers and their petnames associated with this Wallet.")]),e._v(" "),s("h3",{attrs:{id:"getissuer-petname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getissuer-petname"}},[e._v("#")]),e._v(" "),s("code",[e._v("getIssuer(petname)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("petname")]),e._v(" "),s("code",[e._v("{Petname}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("{Issuer}")])])]),e._v(" "),s("p",[e._v("Returns the issuer with the specified petname associated with this Wallet.")]),e._v(" "),s("h3",{attrs:{id:"getpurses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpurses"}},[e._v("#")]),e._v(" "),s("code",[e._v("getPurses()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: "),s("code",[e._v("{Array<[Petname, Purse]>}")])])]),e._v(" "),s("p",[e._v("Returns all the purses associated with this wallet.")]),e._v(" "),s("h3",{attrs:{id:"getpurse-pursepetname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpurse-pursepetname"}},[e._v("#")]),e._v(" "),s("code",[e._v("getPurse(pursePetname)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("pursePetName")]),e._v(" "),s("code",[e._v("{String}")])]),e._v(" "),s("li",[e._v("Returns "),s("code",[e._v("{Purse}")])]),e._v(" "),s("li",[e._v("Errors: Throws an error if there is no purse with the given petname.")])]),e._v(" "),s("p",[e._v("Returns the "),s("code",[e._v("purse")]),e._v(" object with the given petname")]),e._v(" "),s("h2",{attrs:{id:"walletbridge-api-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#walletbridge-api-commands"}},[e._v("#")]),e._v(" WalletBridge API commands")]),e._v(" "),s("p",[e._v("These methods can be used by an untrusted Dapp without breaching the wallet's\nintegrity.  They are also exposed via the iframe/WebSocket bridge that a\nDapp UI can use to access a Wallet.")]),e._v(" "),s("h3",{attrs:{id:"addoffer-offer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addoffer-offer"}},[e._v("#")]),e._v(" "),s("code",[e._v("addOffer(offer)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("offer")]),e._v(" "),s("code",[e._v("{OfferState}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("{Promise<string>}")])])]),e._v(" "),s("p",[e._v("Adds an offer to the Wallet, returning the offer's unique private ID in the Wallet.\nThis ID is not stored in the Board.")]),e._v(" "),s("h3",{attrs:{id:"addofferinvitation-offer-invitation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addofferinvitation-offer-invitation"}},[e._v("#")]),e._v(" "),s("code",[e._v("addOfferInvitation(offer, invitation)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("offer")]),e._v(" "),s("code",[e._v("{OfferState}")])]),e._v(" "),s("li",[s("code",[e._v("invitation")]),e._v(" "),s("code",[e._v("{ERef<Payment>}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("{Promise<string>}")])])]),e._v(" "),s("p",[e._v("Add the specified invitation to the specified offer, returning the offer's private ID in the Wallet."),s("br"),e._v("\nThis ID is not stored in the Board.")]),e._v(" "),s("h3",{attrs:{id:"getdepositfacetid-brandboardid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getdepositfacetid-brandboardid"}},[e._v("#")]),e._v(" "),s("code",[e._v("getDepositFacetId(brandBoardId")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("brandBoardId")]),e._v(" "),s("code",[e._v("{string}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("{Promise<string>}")])])]),e._v(" "),s("p",[e._v("Returns the Board ID to use to receive payments of the specified by its Board ID brand.")]),e._v(" "),s("h3",{attrs:{id:"getpursesnotifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getpursesnotifier"}},[e._v("#")]),e._v(" "),s("code",[e._v("getPursesNotifier()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: "),s("code",[e._v("{Promise<Notifier<Array<PursesFullState>>>}")])])]),e._v(" "),s("p",[e._v("Returns a notifier that follows changes the purses in the Wallet.")]),e._v(" "),s("h3",{attrs:{id:"getoffersnotifier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getoffersnotifier"}},[e._v("#")]),e._v(" "),s("code",[e._v("getOffersNotifier()")])]),e._v(" "),s("ul",[s("li",[e._v("Returns: "),s("code",[e._v("{Promise<Notifier<array<OfferState>>>}")])])]),e._v(" "),s("p",[e._v("Returns a notifier that follows changes to the offers received by the Wallet.")]),e._v(" "),s("h3",{attrs:{id:"suggestissuer-petname-issuerboardid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#suggestissuer-petname-issuerboardid"}},[e._v("#")]),e._v(" "),s("code",[e._v("suggestIssuer(petname, issuerBoardId)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("petname")]),e._v(" "),s("code",[e._v("{Petname}")])]),e._v(" "),s("li",[s("code",[e._v("issuerBoardId")]),e._v(" "),s("code",[e._v("{string}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Introduce an ERTP issuer with a suggested petname to the Wallet.")]),e._v(" "),s("h3",{attrs:{id:"suggestinstallation-petname-installationboardid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#suggestinstallation-petname-installationboardid"}},[e._v("#")]),e._v(" "),s("code",[e._v("suggestInstallation(petname, installationBoardID)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("petname")]),e._v(" "),s("code",[e._v("{Petname}")])]),e._v(" "),s("li",[s("code",[e._v("installationBoardId")]),e._v(" "),s("code",[e._v("{string}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Introduce a Zoe contract installation with a suggested petname to the Wallet.")]),e._v(" "),s("h3",{attrs:{id:"suggestinstance-petname-instanceboardid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#suggestinstance-petname-instanceboardid"}},[e._v("#")]),e._v(" "),s("code",[e._v("suggestInstance(petname, instanceBoardId)")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("petname")]),e._v(" "),s("code",[e._v("{Petname}")])]),e._v(" "),s("li",[s("code",[e._v("instanceBoardId")]),e._v(" "),s("code",[e._v("{string}")])]),e._v(" "),s("li",[e._v("Returns: "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Introduce a Zoe contract instance with a suggested petname to the Wallet.")])])}),[],!1,null,null,null);t.default=n.exports}}]);