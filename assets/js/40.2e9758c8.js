(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{439:function(e,t,o){"use strict";o.r(t);var a=o(41),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"starting-a-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-project"}},[e._v("#")]),e._v(" Starting a Project")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Alpha status")]),e._v(" "),o("p",[e._v("The Agoric platform is at the alpha stage.\nIt has not yet been formally tested or hardened.\nDo not use for production purposes.")])]),e._v(" "),o("p",[e._v("This document shows how to start a new Agoric project. Our demos are called "),o("i",[e._v("Dapps (decentralized\napplications)")]),e._v(", which typically have a browser-based user interface,\na public API server, and a contract running on the Agoric blockchain.")]),e._v(" "),o("p",[e._v("Before doing the steps given in this document, be sure you have done the necessary prerequisites\nspecified in "),o("RouterLink",{attrs:{to:"/getting-started/before-using-agoric.html"}},[e._v("Before Using Agoric")]),e._v(".")],1),e._v(" "),o("p",[e._v("For complete documentation on the Agoric CLI commands (those starting with "),o("code",[e._v("agoric")]),e._v(") used here,\nsee the "),o("RouterLink",{attrs:{to:"/guides/agoric-cli/commands.html"}},[e._v("Agoric CLI Guide")]),e._v(".")],1),e._v(" "),o("p",[e._v("For starting a local chain with multiple users, making it possible to develop and test multiuser Dapps, also see the\n"),o("RouterLink",{attrs:{to:"/guides/agoric-cli/starting-multiuser-dapps.html"}},[e._v("Agoric CLI Guide")]),e._v(".")],1),e._v(" "),o("p",[e._v("Also, for what needs to be done after you modify a project's code, see\n"),o("RouterLink",{attrs:{to:"/getting-started/development-cycle.html"}},[e._v("Development\nCycle")])],1),e._v(" "),o("table",[o("tbody",[o("tr",[o("th",[o("b",[e._v("Step")])]),e._v(" "),o("th",[o("b",[e._v("Action")])]),e._v(" "),o("th",[o("b",[e._v("Explanation")])])]),o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("Go to or open a shell and "),o("code",[e._v("cd <directory-where-you-want-to-install-Dapp-code>")])]),e._v(" "),o("td",[e._v("When you initialize your project/Dapp in the next step, its initial code is copied into your current directory (permissions allowing).")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("Run "),o("code",[e._v("agoric init demo")])]),o("td",[e._v("Initializes a "),o("i",[e._v("Dapp")]),e._v(" ("),o("i",[e._v("Decentralized application")]),e._v(")\n  project.\n  "),o("br"),o("br"),e._v(" "),o("code",[e._v("init")]),e._v(" creates a sub-directory with the specified name\n    ("),o("code",[e._v("demo")]),e._v(" in this case) in your current directory and copies an existing project's files\n    into it. You can give the project any name you like. This\n    documentation assumes you used "),o("code",[e._v("demo")]),e._v(". \n    "),o("br"),o("br"),e._v("\n    There are optional arguments that let you specify which project\n    you want copied into the specified directory. By default, their values are set to\n    use the Fungible Faucet Dapp we wrote to provide a simple skeleton for a smart contract.\n    To specify a different project, use the optional arguments:"),o("br"),e._v(" "),o("code",[e._v("--dapp-template <name>")]),e._v(" Use the project specified by this <name> as the template copied into your current directory."),o("br"),e._v(" "),o("code",[e._v("--dapp-base <base-url>")]),e._v(" Look under this directory for the Dapp template. \n  "),o("br"),o("br"),e._v(" "),o("a",{attrs:{href:"/documentation/dapps/dapp-templates"}},[e._v("Learn more about the available dapp templates.")]),e._v(" "),o("br"),o("br"),e._v("If this \n  doesn't work, use "),o("code",[e._v("echo $PATH")]),e._v(" to check that your Agoric\n      CLI install directory is in your "),o("code",[e._v("$PATH")]),e._v(" If not, add\n      it to "),o("code",[e._v("$PATH")])])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[o("code",[e._v("cd demo")])]),e._v(" "),o("td",[e._v("Move to the directory where your project (the demo) is\n  located.")])]),e._v(" "),o("tr",[o("td",[e._v("4")]),e._v(" "),o("td",[o("code",[e._v("agoric install")])]),e._v(" "),o("td",[e._v("Install JavaScript dependencies, which may take a while."),o("br"),e._v("\n        Note: When on a Mac, you must first install \n        "),o("a",{attrs:{href:"https://apps.apple.com/us/app/xcode/id497799835"}},[e._v("Xcode")]),e._v(". \n    ")])]),e._v(" "),o("tr",[o("td",[e._v("5")]),e._v(" "),o("td",[o("code",[e._v("agoric start --reset")]),o("br"),e._v("\n  (leave this shell up with the process running)")]),e._v(" "),o("td",[e._v("Start the Agoric VM. "),o("code",[e._v("--reset")]),e._v(" discards any prior Agoric\n  state. This creates the "),o("i",[e._v("vats")]),e._v(" in which smart contract code runs.\n  The VM continues to run in this shell, making it unusable for\n  running commands.")])]),e._v(" "),o("tr",[o("td",[e._v("6")]),e._v(" "),o("td",[e._v("Open another shell, go to your "),o("code",[e._v("demo")]),e._v(" directory")]),e._v(" "),o("td",[e._v("For the remainder of this table, we call this the "),o("i",[e._v("deploy shell")]),e._v(".\n    "),o("br"),o("br"),e._v("Use the same project directory name and location as you used in Step 2. In\n      this example, we used "),o("code",[e._v("demo")]),e._v(" but you may have used a\n      different name in Step 2.")])]),e._v(" "),o("tr",[o("td",[e._v("7")]),e._v(" "),o("td",[e._v("In the deploy shell, "),o("code",[e._v("agoric deploy ./contract/deploy.js ./api/deploy.js")])]),e._v(" "),o("td",[e._v("Deploy the Dapp on an Agoric VM, install the Dapp's smart\n  contract and web API, as well as JavaScript code that implements the Agoric APIs for writing and implementing\n      contracts.")])]),e._v(" "),o("tr",[o("td",[e._v("8")]),e._v(" "),o("td",[e._v("In the deploy shell, "),o("code",[e._v("(cd ui && yarn start)")])]),e._v(" "),o("td",[e._v("This starts the demo project's UI development server.")])]),e._v(" "),o("tr",[o("td",[e._v("9")]),e._v(" "),o("td",[e._v("Go to a browser and open "),o("code",[e._v("http://localhost:3000")]),e._v(" to\n      see the Dapp. If you used the default values for "),o("code",[e._v("agoric init")]),e._v("\n      in Step 2, you'll see the Fungible Faucet demo Dapp, described in the next cell.")]),e._v(" "),o("td",[e._v("If you used the "),o("code",[e._v("agoric init")]),e._v(" defaults in Step 2, \n      you'll see our Fungible Faucet Dapp, which lets you get 1000 fungible tokens at a time for free. Receiving the tokens requires interaction\n      with your wallet where your assets are stored (which was started with the Agoric VM).")])]),e._v(" "),o("tr",[o("td",[e._v("10")]),e._v(" "),o("td",[e._v("To open your Wallet UI in a browser tab, "),o("code",[e._v("agoric open")])]),e._v(" "),o("td",[e._v("Running "),o("code",[e._v("agoric open --repl")]),e._v(" in a shell opens a browser tab\n     that shows both the Wallet UI and REPL ("),o("i",[e._v("Read-Eval-Print Loop")]),e._v(").")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);