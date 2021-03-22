(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{398:function(t,e,a){t.exports=a.p+"assets/img/walletAndREPLColumns.0eae5a99.png"},399:function(t,e,a){t.exports=a.p+"assets/img/walletAndREPLRows.08e4b708.png"},400:function(t,e,a){t.exports=a.p+"assets/img/repl.1516c399.png"},401:function(t,e,a){t.exports=a.p+"assets/img/home.0d2a75d4.png"},459:function(t,e,a){"use strict";a.r(e);var s=a(41),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"agoric-repl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agoric-repl"}},[t._v("#")]),t._v(" Agoric REPL")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": This page describes the Agoric REPL. For information about the "),s("code",[t._v("Node.js")]),t._v(" REPL,\nclick "),s("a",{attrs:{href:"https://nodejs.org/api/repl.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("When you run "),s("code",[t._v("agoric start --reset")]),t._v(", you start a local "),s("em",[t._v("ag-solo")]),t._v(".")]),t._v(" "),s("p",[t._v("You use "),s("code",[t._v("agoric start")]),t._v(" to start what we call an "),s("em",[t._v("ag-solo")]),t._v(", which is a\nsingle personal local Agoric node. You need an ag-solo running on your\nmachine to interact with Agoric network services, whether a built-in\nsimulated chain (also started by "),s("code",[t._v("agoric start")]),t._v("), or a fully-decentralized public Agoric\nblockchain.")]),t._v(" "),s("p",[t._v("All deployment happens via the local running Agoric process. This is usually the\nag-solo process, and frequently referred to as that or just as ag-solo. It is also\nsometimes described as/called an Agoric VM or a local server.")]),t._v(" "),s("p",[t._v("An ag-solo communicates with either a locally running or remote chain. This local process (the ag-solo)\nhas a home object, which contains references to services on-chain, including Zoe, the\nBoard for sharing objects, and an application user's Wallet, among others. Developers can\nuse these service references to call the service's associated API commands.")]),t._v(" "),s("p",[t._v("Contract code starts in a file on a user's computer, either written by them or\nimported from "),s("code",[t._v("agoric/zoe")]),t._v(". The code is "),s("em",[t._v("bundled")]),t._v("; turned into a particularly formatted\nblob of code that exists in memory while a deploy script is running. When "),s("code",[t._v("E(zoe).install()")]),t._v(" is\ncalled, the blob is sent to and stored on-chain so that Zoe can access it.")]),t._v(" "),s("p",[t._v("An ag-solo has an associated REPL ("),s("em",[t._v("Read-Eval-Print Loop")]),t._v("). From the REPL and the "),s("code",[t._v("home")]),t._v("\nobject, developers can use all the on-chain commands that deployment scripts use to\ndeploy contracts and Dapps. In addition to the on-chain commands, they can also run\nany other JavaScript commands from the REPL.")]),t._v(" "),s("h2",{attrs:{id:"accessing-the-repl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-repl"}},[t._v("#")]),t._v(" Accessing the REPL")]),t._v(" "),s("p",[t._v("Once an ag-solo is running and on-chain, you can access its associated REPL\nin two ways.")]),t._v(" "),s("ul",[s("li",[t._v("In a browser tab, go to "),s("code",[t._v("localhost:8000")]),t._v(". Depending on the browser's width, you\nwill see the Wallet UI and REPL either in separate columns or separate rows.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(398),alt:"Wallet and REPL"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(399),alt:"Wallet and REPL"}})]),t._v(" "),s("ul",[s("li",[t._v("From a shell, run "),s("code",[t._v("agoric open --repl")]),t._v(" This opens the user's Wallet UI and its\nassociated REPL. To open only the REPL, run "),s("code",[t._v("agoric open --repl only")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(400),alt:"REPL"}})]),t._v(" "),s("h2",{attrs:{id:"using-the-repl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-repl"}},[t._v("#")]),t._v(" Using the REPL")]),t._v(" "),s("p",[t._v("You can run JavaScript commands from the REPL. You can also use the REPL's\n"),s("code",[t._v("home")]),t._v(" object's predefined connections to other objects and services. To see what’s\navailable, just type "),s("code",[t._v("home")]),t._v(" into the REPL:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(401),alt:"home"}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" home\nHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chainTimerService"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sharingService"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contractHost"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ibcport"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registrar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zoe"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localTimerService"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uploads"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("58")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spawner"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wallet"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"network"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("61")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Presence o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("62")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The results of what is entered into the REPL is saved under "),s("code",[t._v("history[N]")])]),t._v(" "),s("p",[t._v("The following sections describe the "),s("code",[t._v("home")]),t._v(" objects developers can use. Click on the\nsection header to go to more detailed documentation about that object.\nSeveral "),s("code",[t._v("home")]),t._v(" objects are either for internal Agoric use only or have been deprecated. These\nare listed together in the final section. External developers should ignore them and not try to use\nthem.")]),t._v(" "),s("h3",{attrs:{id:"wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/guides/wallet/api.html"}},[s("code",[t._v("wallet")])])],1),t._v(" "),s("p",[t._v("Holds on-chain digital assets and object capabilities on behalf of the user.\nThe header link takes you to the standard non-REPL specific "),s("code",[t._v("wallet")]),t._v(" API documentation. When calling\n"),s("code",[t._v("wallet")]),t._v(" API methods from the REPL, "),s("code",[t._v("wallet")]),t._v(" must be prefaced by "),s("code",[t._v("home.")]),t._v(" and use "),s("code",[t._v("E()")]),t._v(". For\nexample, "),s("code",[t._v("E(home.wallet).getPurses()")])]),t._v(" "),s("h3",{attrs:{id:"chaintimerservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chaintimerservice"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/repl/timerServices.html"}},[s("code",[t._v("chainTimerService")])])],1),t._v(" "),s("p",[t._v("On-chain time authority used to schedule events.")]),t._v(" "),s("h3",{attrs:{id:"localtimerservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localtimerservice"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/repl/timerServices.html"}},[s("code",[t._v("localTimerService")])])],1),t._v(" "),s("p",[t._v("Local off-chain time authority used to schedule events.")]),t._v(" "),s("h3",{attrs:{id:"board"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#board"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/repl/board.html"}},[s("code",[t._v("board")])])],1),t._v(" "),s("p",[t._v("Shared on-chain location where users can post generally accessible values.")]),t._v(" "),s("h3",{attrs:{id:"sharingservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharingservice"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/repl/sharingService.html"}},[s("code",[t._v("sharingService")])])],1),t._v(" "),s("p",[t._v("Share on-chain objects with other users without making them\navailable to the general public. In particular, you can share\nitems between vats connected to the same remote chain.")]),t._v(" "),s("h3",{attrs:{id:"ibcport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ibcport"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/repl/networking.html"}},[s("code",[t._v("ibcport")])])],1),t._v(" "),s("p",[t._v("IBC implementation that lets vats open and close listening ports,\nconnect and disconnect to/from remote ports, and send and receive\ndata over those connections.")]),t._v(" "),s("h3",{attrs:{id:"zoe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zoe"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/zoe/api/zoe.html"}},[s("code",[t._v("zoe")])])],1),t._v(" "),s("p",[t._v("Deploy and interact with smart contracts. Zoe protects smart contract users by escrowing\ndigital assets and guaranteeing users get either what they want or get a refund of what\nthey escrowed. Even if the contract is buggy or malicious. The header link takes you to the\nstandard, non-REPL specific, "),s("code",[t._v("zoe")]),t._v(" API documentation. When calling any of the "),s("code",[t._v("zoe")]),t._v(" API\nmethods from the REPL, "),s("code",[t._v("zoe")]),t._v(" must be prefaced by "),s("code",[t._v("home.")]),t._v(" and use "),s("code",[t._v("E()")]),t._v(". For\nexample, "),s("code",[t._v("E(home.zoe).getFoo()")])]),t._v(" "),s("h3",{attrs:{id:"priceauthority"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#priceauthority"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/repl/priceAuthority.html"}},[s("code",[t._v("priceAuthority")])])],1),t._v(" "),s("p",[t._v("Get price quotes for pairs of digital assets.")]),t._v(" "),s("h3",{attrs:{id:"scratch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scratch"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/repl/scratch.html"}},[s("code",[t._v("scratch")])])],1),t._v(" "),s("p",[t._v("An off-chain, private, place to store key-value pairs on your ag-solo for later use.")]),t._v(" "),s("h3",{attrs:{id:"deprecated-and-internal-only-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-and-internal-only-objects"}},[t._v("#")]),t._v(" Deprecated and Internal-only Objects")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("contractHost")]),t._v(": Replaced by the "),s("code",[t._v("spawner")]),t._v(" object.")]),t._v(" "),s("li",[s("code",[t._v("faucet")]),t._v(": Internal for chain setup.")]),t._v(" "),s("li",[s("code",[t._v("http")]),t._v(": "),s("code",[t._v("api/deploy.js")]),t._v(" uses this to install new HTTP and WebSocket handlers in an\nag-solo.  You should not need to use it.")]),t._v(" "),s("li",[s("code",[t._v("network")]),t._v(": Privileged object for internal use.")]),t._v(" "),s("li",[s("code",[t._v("plugin")]),t._v(": Privileged object for internal use.")]),t._v(" "),s("li",[s("code",[t._v("priceAuthorityAdmin")]),t._v(": Privileged object for internal use.")]),t._v(" "),s("li",[s("code",[t._v("registrar")]),t._v(": Deprecated.")]),t._v(" "),s("li",[s("code",[t._v("registry")]),t._v(": Deprecated.")]),t._v(" "),s("li",[s("code",[t._v("spawner")]),t._v(": Privileged object for internal use.")]),t._v(" "),s("li",[s("code",[t._v("uploads")]),t._v(": Deprecated name for "),s("code",[t._v("scratch")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("vattp")]),t._v(": Privileged object for internal use.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);