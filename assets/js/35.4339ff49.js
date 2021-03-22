(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{434:function(e,t,o){"use strict";o.r(t);var a=o(41),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deploying-smart-contracts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploying-smart-contracts"}},[e._v("#")]),e._v(" Deploying Smart Contracts")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("agoric deploy")]),e._v(" command in the "),o("RouterLink",{attrs:{to:"/guides/agoric-cli/commands.html#agoric-deploy"}},[e._v("agoric command line tool")]),e._v("\nsupports deploying contracts and off-chain web applications that talk to them. The command\nhas two primary uses:")],1),e._v(" "),o("ul",[o("li",[e._v("Deploy smart contract source code onto the blockchain")]),e._v(" "),o("li",[e._v("Deploy and setup an application program to a local server running an Agoric process")])]),e._v(" "),o("p",[e._v("Use the "),o("code",[e._v("agoric deploy")]),e._v(" command to run your Dapp's "),o("code",[e._v("contract/deploy.js")]),e._v("\nand "),o("code",[e._v("api/deploy.js")]),e._v(" scripts. You can use the deploy scripts created when you copied an existing\nDapp into your directory as they are, or you can modify the scripts as suggested later in this document.")]),e._v(" "),o("p",[e._v("Remember, your Dapp has three primary subdirectories:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("contract/")]),e._v("which contains files relating to your smart contract itself.")]),e._v(" "),o("li",[o("code",[e._v("api/")]),e._v("which contains files enabling the UI frontend to communicate via HTTP/WebSocket to an on-chain backend contract instance and start your Dapp contract instance and backend.")]),e._v(" "),o("li",[o("code",[e._v("ui/")]),e._v(" which contains files relating to your contract's user interface.")])]),e._v(" "),o("h2",{attrs:{id:"how-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),o("p",[e._v("All deployment happens via the local running Agoric process. This is usually the "),o("code",[e._v("ag-solo")]),e._v(" process,\nand frequently referred to as that or just as "),o("code",[e._v("ag-solo")]),e._v(". It is also sometimes described as/called an Agoric VM or a local server.")]),e._v(" "),o("p",[o("code",[e._v("ag-solo")]),e._v(" communicates with either a locally running or remote chain. The local process has a "),o("code",[e._v("home")]),e._v(" object, which contains\nreferences to services on-chain, including "),o("code",[e._v("zoe")]),e._v(", the "),o("code",[e._v("board")]),e._v(" for\nsharing objects, and an application user's "),o("code",[e._v("wallet")]),e._v(". Developers can\nuse these service references to call the service's associated API commands.")]),e._v(" "),o("p",[e._v("Deploying to the chain first uploads the bundled contract source code to the local Agoric process ("),o("code",[e._v("ag-solo")]),e._v(").\nThe deployment script then uses the "),o("code",[e._v("home")]),e._v(" object to access "),o("code",[e._v("zoe")]),e._v(" which installs the code on chain.")]),e._v(" "),o("p",[e._v("Via the REPL associated with the wallet, developers can use all the on-chain commands that deployment scripts use to deploy\ncontracts and Dapps.")]),e._v(" "),o("p",[e._v("Each "),o("code",[e._v("deploy.js")]),e._v(" runs in its own temporary process, connected to "),o("code",[e._v("ag-solo")]),e._v(", through which it can reach the chain.")]),e._v(" "),o("h2",{attrs:{id:"contract-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contract-deployment"}},[e._v("#")]),e._v(" Contract deployment")]),e._v(" "),o("p",[e._v("First, let's look at "),o("em",[e._v("contract deployment")]),e._v(". "),o("code",[e._v("contract/deploy.js")]),e._v('bundles up a contract\'s source code\n(which may consist of multiple files and modules) and "installs"\nit on the blockchain as source code, using '),o("RouterLink",{attrs:{to:"/getting-started/intro-zoe.html"}},[o("code",[e._v("Zoe")])]),e._v(".\nThis does "),o("em",[e._v("not")]),e._v(" execute contract code; it just makes the code available on-chain.")],1),e._v(" "),o("p",[e._v("The contract deployment process uses "),o("RouterLink",{attrs:{to:"/zoe/api/zoe.html#e-zoe-install-bundle"}},[o("code",[e._v("zoe.install()")])]),e._v("\nto install the contract source code on-chain. This returns an "),o("em",[e._v("installation")]),e._v(" associated with the\nsource code. In a typical contract deployment, the deploy script adds the installation\nto the default shared board so it is broadly accessible on the chain. The script then writes\nthe board id to a config file in the Dapp's "),o("code",[e._v("ui")]),e._v(" directory as shown below.")],1),e._v(" "),o("p",[e._v("By default, when you run "),o("code",[e._v("agoric init")]),e._v(", your Dapp gets\nthe "),o("a",{attrs:{href:"https://github.com/Agoric/dapp-fungible-faucet/blob/main/contract/deploy.js",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("dapp-fungible-faucet")]),e._v(" "),o("code",[e._v("contract/deploy.js")]),e._v(" file"),o("OutboundLink")],1),e._v(",\nwhich is our example of a typical contract deploy script.")]),e._v(" "),o("p",[e._v("Deploying the "),o("code",[e._v("dapp-fungible-faucet")]),e._v(" contract (e.g., with "),o("code",[e._v("agoric deploy contract/deploy.js")]),e._v(" after "),o("code",[e._v("agoric init")]),e._v("\ncopied it into a local directory) installs it on chain, and generates the\nfile "),o("code",[e._v("./ui/public/conf/installationConstants.js")]),e._v("with contents like:")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// GENERATED FROM dapp-fungible-faucet/contract/deploy.js")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CONTRACT_NAME"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"fungibleFaucet"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"INSTALLATION_BOARD_ID"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1456154132"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("The board provides a unique ID per object, in this case\n"),o("code",[e._v('"1456154132"')]),e._v(", so it is different for each contract deployment.")]),e._v(" "),o("h2",{attrs:{id:"application-service-deployment-and-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-service-deployment-and-setup"}},[e._v("#")]),e._v(" Application service deployment and setup")]),e._v(" "),o("p",[e._v("Next, let's look at "),o("em",[e._v("application deployment and setup")]),e._v(". As compared to contract deployment,\nyou need to customize the Agoric API server deployment and setup much more\nfor your particular application and contract. Some Dapps use a singleton contract instance\nwhich presumes that it will be installed once and serve all customers (as opposed to an auction\nor swap contract, which is installed once, but instantiated separately for each sale it manages).\nA singleton potentially must:")]),e._v(" "),o("ul",[o("li",[e._v("Be created")]),e._v(" "),o("li",[e._v("Find and connect to on-chain resources such as issuers for specific currencies")]),e._v(" "),o("li",[e._v("Create new on-chain resources like new currencies or NFTs")]),e._v(" "),o("li",[e._v("Create new Purses for the application to use")]),e._v(" "),o("li",[e._v("Seed the on-chain contract with initial orders or configuration.")])]),e._v(" "),o("p",[e._v("These example contract "),o("code",[e._v("api/deploy.js")]),e._v(" scripts  show some of the\nrange of the above custom setup actions:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/Agoric/dapp-fungible-faucet/blob/main/api/deploy.js",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("dapp-fungible-faucet")]),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/Agoric/dapp-card-store/blob/main/api/deploy.js",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("dapp-card-store")]),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/Agoric/dapp-simple-exchange/blob/main/api/deploy.js",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("dapp-simple-exchange")]),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/Agoric/dapp-autoswap/blob/main/api/deploy.js",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("dapp-autoswap")]),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("For an example of additions needed to support IBC ("),o("em",[e._v("Inter-Blockchain Communication protocol")]),e._v("), see the "),o("a",{attrs:{href:"https://github.com/Agoric/dapp-encouragement/compare/main..dibc-encouragement",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("dibc-encouragement")]),e._v(" branch"),o("OutboundLink")],1),e._v(". The link takes you to a page showing the differences in various files in the Encouragement Dapp between the main branch and a branch which integrates IBC.")]),e._v(" "),o("p",[e._v("Application deployment steps may include:")]),e._v(" "),o("ul",[o("li",[e._v("Bundle the "),o("code",[e._v("api")]),e._v(' code and deploy it to the running local "api" process (ag-solo)')]),e._v(" "),o("li",[e._v("Include the contract installation configuration information in the bundle")]),e._v(" "),o("li",[e._v("Create new currencies and add them to the application's wallet")])]),e._v(" "),o("p",[e._v("Steps for contracts that use a singleton instance for all clients may further include:")]),e._v(" "),o("ul",[o("li",[e._v("Instantiate a contract instance using the installation created when the contract deployed")]),e._v(" "),o("li",[e._v("Use the invitation from that instance creation to configure the new instance")]),e._v(" "),o("li",[e._v("Register the contract instance's "),o("code",[e._v("instance")]),e._v(" with the Board")]),e._v(" "),o("li",[e._v("Record the contract instance's Board ID in a configuration file")])])])}),[],!1,null,null,null);t.default=n.exports}}]);