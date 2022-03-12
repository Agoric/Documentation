(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{441:function(e,o,t){"use strict";t.r(o);var i=t(44),a=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"agoric-cli-command-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agoric-cli-command-reference"}},[e._v("#")]),e._v(" Agoric CLI Command Reference")]),e._v(" "),t("p",[e._v("Add a command name to "),t("code",[e._v("agoric")]),e._v(" to specify what command to run. "),t("strong",[e._v("Note")]),e._v(": Required argument names need not be given, only their values. Optional argument names must be given, along with their values. See the command's examples if you're not sure if a name is needed.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("agoric")]),e._v(" commands documented here are the ones useful for dapp developers. Other "),t("code",[e._v("agoric")]),e._v(" commands you may see listed\nare not covered in this document.")]),e._v(" "),t("p",[e._v("In general, you want to issue these Agoric CLI commands in this order:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("agoric init")])]),e._v(" "),t("li",[t("code",[e._v("agoric install")])]),e._v(" "),t("li",[t("code",[e._v("agoric start")]),e._v(" (Usually with "),t("code",[e._v("--reset")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("agoric deploy")])]),e._v(" "),t("li",[t("code",[e._v("agoric open")])])]),e._v(" "),t("p",[e._v("Use "),t("code",[e._v("agoric help")]),e._v(" whenever you need help with one of the above Agoric CLI commands.")]),e._v(" "),t("p",[e._v("There are some general options for all commands, whose usage is:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("agoric "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("p",[e._v("They are:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("-V")]),e._v(", "),t("code",[e._v("--version")]),e._v(" "),t("ul",[t("li",[e._v("Output the version number.")])])]),e._v(" "),t("li",[t("code",[e._v("--docker-tag <tag>")]),e._v(" "),t("ul",[t("li",[e._v("Use the specified tag of any started Docker containers.  Defaults to\n"),t("code",[e._v("latest")]),e._v(".")])])]),e._v(" "),t("li",[t("code",[e._v("--sdk")]),e._v(" "),t("ul",[t("li",[e._v("Use the Agoric SDK containing this program.")])])]),e._v(" "),t("li",[t("code",[e._v("-v")]),e._v(", "),t("code",[e._v("--verbose")]),e._v(" "),t("ul",[t("li",[e._v("Be verbose.  Multiple occurrences increase verbosity.")])])]),e._v(" "),t("li",[t("code",[e._v("-h")]),e._v(", "),t("code",[e._v("--help")]),e._v(" "),t("ul",[t("li",[e._v("Display help for the command.")])])])]),e._v(" "),t("h2",{attrs:{id:"agoric-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agoric-init"}},[e._v("#")]),e._v(" "),t("code",[e._v("agoric init")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Function")]),e._v(":\n"),t("ul",[t("li",[e._v("Creates a new Dapp directory named "),t("code",[e._v("<project>")]),e._v(" with contents copied from the "),t("code",[e._v("dapp-template")]),e._v(" argument template.")])])]),e._v(" "),t("li",[t("strong",[e._v("Required Arguments")]),e._v(":\n"),t("ul",[t("li",[t("code",[e._v("project")]),e._v(": Name of the new project to initialize.")])])]),e._v(" "),t("li",[t("strong",[e._v("Optional Arguments")]),e._v(":\n"),t("ul",[t("li",[t("code",[e._v("--dapp-template <name>")]),e._v(": Use the template specified by "),t("code",[e._v("<name>")]),e._v(". Defaults to the demo Dapp "),t("code",[e._v("dapp-fungible-faucet")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("--dapp-base <base-url>")]),e._v(": Look under this directory for the Dapp template. Defaults to "),t("code",[e._v("git://github.com/Agoric/")])]),e._v(" "),t("li",[t("code",[e._v("-h")]),e._v(", "),t("code",[e._v("--help")]),e._v(": Display help for "),t("code",[e._v("init")]),e._v(" command.")])])]),e._v(" "),t("li",[t("strong",[e._v("Examples")]),e._v(":\n"),t("ul",[t("li",[e._v("Creates a directory named "),t("code",[e._v("demo")]),e._v(" with contents copied from the default "),t("code",[e._v("dapp-template")]),e._v(" value "),t("code",[e._v("dapp-simple-exchange")]),e._v(".\n"),t("ul",[t("li",[t("code",[e._v("agoric init demo")])])])]),e._v(" "),t("li",[e._v("Creates a directory named "),t("code",[e._v("my-first-contract")]),e._v(" with contents copied from the default "),t("code",[e._v("dapp-template")]),e._v(" value "),t("code",[e._v("dapp-simple-exchange")]),e._v(".\n"),t("ul",[t("li",[t("code",[e._v("agoric init my-first-contract")])])])]),e._v(" "),t("li",[e._v("Creates a directory named "),t("code",[e._v("my-contract")]),e._v(" with contents copied from a template named "),t("code",[e._v("dapp-skeleton")]),e._v(" located under the URL "),t("code",[e._v("file:///home/contracts")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("agoric init my-contract --dapp-template dapp-skeleton --dapp-base file:///home/contracts")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"agoric-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agoric-install"}},[e._v("#")]),e._v(" "),t("code",[e._v("agoric install")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Function")]),e._v(":\n"),t("ul",[t("li",[e._v("Install Dapp JavaScript dependencies. This may take a while. You use this instead of established npm install tools.\nThe reason is that there is both an SDK ("),t("code",[e._v("--sdk")]),e._v(") and NPM mode. Currently we only support SDK mode, which allows you to link your Dapp\nagainst the SDK dependencies. This lets you modify in any package in the SDK against the SDK dependencies (and see the changes)\nand not have to register those packages with Yarn or NPM.")])])]),e._v(" "),t("li",[t("strong",[e._v("Required Arguments")]),e._v(":\n"),t("ul",[t("li",[e._v("None.")])])]),e._v(" "),t("li",[t("strong",[e._v("Optional Arguments")]),e._v(":\n"),t("ul",[t("li",[e._v("None.")])])]),e._v(" "),t("li",[t("strong",[e._v("Examples")]),e._v(":\n"),t("ul",[t("li",[e._v("Installs Dapp JavaScript dependencies\n"),t("ul",[t("li",[t("code",[e._v("agoric install")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"agoric-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agoric-start"}},[e._v("#")]),e._v(" "),t("code",[e._v("agoric start")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Function")]),e._v(":\n"),t("ul",[t("li",[e._v("Run an Agoric VM on which contracts will run.")])])]),e._v(" "),t("li",[t("strong",[e._v("Required Arguments")]),e._v(":\n"),t("ul",[t("li",[t("code",[e._v("[profile]")]),e._v(": Specifies the environment for the VM. Defaults to "),t("code",[e._v("dev")]),e._v(" for development mode, "),t("code",[e._v("testnet")]),e._v(" connects to our current testnet.")]),e._v(" "),t("li",[t("code",[e._v("[args]")]),e._v(": Ignore this for now. It currently has no valid values.")])])]),e._v(" "),t("li",[t("strong",[e._v("Optional Arguments")]),e._v(":\n"),t("ul",[t("li",[t("code",[e._v("--reset")]),e._v(":  Clear all VM state before starting.")]),e._v(" "),t("li",[t("code",[e._v("--pull")]),e._v(":  For Docker-based VM, pull the image before running.")]),e._v(" "),t("li",[t("code",[e._v("--delay [seconds]")]),e._v(": Delay the given number of seconds for each round-trip to the simulated chain and back for a simulated chain to process messages. A "),t("code",[e._v("1")]),e._v(" value lets you easily count the number of trips in your head.")]),e._v(" "),t("li",[t("code",[e._v("--inspect")]),e._v(': [host[:port]]`: Activate inspector on host:port (default: "127.0.0.1:9229")')]),e._v(" "),t("li",[t("code",[e._v("--inspect-brk [host[:port]]")]),e._v(':  Activate inspector on host:port and break at start of script (default: "127.0.0.1:9229")')]),e._v(" "),t("li",[t("code",[e._v("-h")]),e._v(", "),t("code",[e._v("--help")]),e._v(": Display help for "),t("code",[e._v("start")]),e._v(" command")])])]),e._v(" "),t("li",[t("strong",[e._v("Examples")]),e._v(":\n"),t("ul",[t("li",[e._v("Restart the Agoric VM, clearing all existing state before doing so.\n"),t("ul",[t("li",[t("code",[e._v("agoric start --reset")])])])]),e._v(" "),t("li",[e._v("For Docker-based VM, before running pull the image.\n"),t("ul",[t("li",[t("code",[e._v("agoric start --pull")])])])]),e._v(" "),t("li",[e._v("Delay 5 seconds for each round-trip to the simulated chain and back in order for a simulated chain to\nprocess messages.\n"),t("ul",[t("li",[t("code",[e._v("agoric start --delay 5")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"agoric-deploy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agoric-deploy"}},[e._v("#")]),e._v(" "),t("code",[e._v("agoric deploy")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Function")]),e._v(":\n"),t("ul",[t("li",[e._v("Run one or more deployment scripts against the local Agoric VM. You may optionally specify which host and port to connect to the VM on.")])])]),e._v(" "),t("li",[t("strong",[e._v("Required Arguments")]),e._v(":\n"),t("ul",[t("li",[t("code",[e._v("<script...>")]),e._v(": Deployment script(s) to run against the local Agoric instance. You must specify at least one, and may specify more than one.")])])]),e._v(" "),t("li",[t("strong",[e._v("Optional Arguments")]),e._v(":\n"),t("ul",[t("li",[t("code",[e._v("--hostport <HOST:PORT>")]),e._v(": Host and port on which to connect to the VM.")]),e._v(" "),t("li",[t("code",[e._v("-h")]),e._v(", "),t("code",[e._v("--help")]),e._v(": Display help for "),t("code",[e._v("deploy")]),e._v(" command")])])]),e._v(" "),t("li",[t("strong",[e._v("Examples")]),e._v(":\n"),t("ul",[t("li",[e._v("Run the specified "),t("code",[e._v("deploy.js")]),e._v(" scripts against the local Agoric VM.\n"),t("ul",[t("li",[t("code",[e._v("agoric deploy ./contract/deploy.js ./api/deploy.js")])])])]),e._v(" "),t("li",[e._v("Run the specified "),t("code",[e._v("deploy.js")]),e._v(" scripts on VM host 128.7.3.139 and\nport 99.\n"),t("ul",[t("li",[t("code",[e._v("agoric deploy --hostport 128.7.3.139:99 ./contract/deploy.js")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"agoric-open"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agoric-open"}},[e._v("#")]),e._v(" "),t("code",[e._v("agoric open")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Function")]),e._v(":\n"),t("ul",[t("li",[e._v("Launch the Agoric UI. By default, it shows only the UI and not the REPL. To show either\nboth the UI and REPL, or only the REPL, see the "),t("code",[e._v("--repl")]),e._v(" optional argument below.")])])]),e._v(" "),t("li",[t("strong",[e._v("Required Arguments")]),e._v(" "),t("ul",[t("li",[e._v("None")])])]),e._v(" "),t("li",[t("strong",[e._v("Optional Arguments")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("--hostport <host:port>")]),e._v(': Host and port on which to connect to the VM (default: "127.0.0.1:8000").')]),e._v(" "),t("li",[t("code",[e._v("--no-browser")]),e._v(": Display the UI's URL, but don't open a browser.")]),e._v(" "),t("li",[t("code",[e._v("--repl [yes | only | no]")]),e._v(":  Whether to show the Read-Eval-Print loop. Defaults to "),t("code",[e._v("yes")]),e._v(" if specified (see\nExamples below)")]),e._v(" "),t("li",[t("code",[e._v("-h")]),e._v(", "),t("code",[e._v("--help")]),e._v(": Display help for "),t("code",[e._v("open")]),e._v(" command.")])])]),e._v(" "),t("li",[t("strong",[e._v("Examples")]),e._v(" "),t("ul",[t("li",[e._v("Launch only the Agoric UI in a browser\n"),t("ul",[t("li",[t("code",[e._v("agoric open")])])])]),e._v(" "),t("li",[e._v("Display the Agoric UI's URL, but don't open it in a browser.\n"),t("ul",[t("li",[t("code",[e._v("agoric open --no-browser")])])])]),e._v(" "),t("li",[e._v("Display only the REPL for the Agoric UI in a browser.\n"),t("ul",[t("li",[t("code",[e._v("agoric open --repl only")])])])]),e._v(" "),t("li",[e._v("Display both the Agoric UI and the REPL in a browser ("),t("code",[e._v("--repl")]),e._v(" defaults to "),t("code",[e._v("yes")]),e._v(").\n"),t("ul",[t("li",[t("code",[e._v("agoric open --repl")])])])])])])]),e._v(" "),t("h2",{attrs:{id:"agoric-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agoric-help"}},[e._v("#")]),e._v(" "),t("code",[e._v("agoric help")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Function")]),e._v(":\n"),t("ul",[t("li",[e._v("Displays the Agoric CLI commands and arguments with brief descriptions.")])])]),e._v(" "),t("li",[t("strong",[e._v("Required Arguments")]),e._v(":\n"),t("ul",[t("li",[e._v("None")])])]),e._v(" "),t("li",[t("strong",[e._v("Optional Arguments")]),e._v(":\n"),t("ul",[t("li",[t("code",[e._v("-V")]),e._v(", "),t("code",[e._v("--version")]),e._v(": Output Agoric's version number.")]),e._v(" "),t("li",[t("code",[e._v("--sdk")]),e._v(": Use the Agoric SDK containing this program.")]),e._v(" "),t("li",[t("code",[e._v("-v")]),e._v(", "),t("code",[e._v("--verbose")]),e._v(": Output a more detailed version of help (note: only for some commands)")]),e._v(" "),t("li",[t("code",[e._v("-h")]),e._v(", "),t("code",[e._v("--help")]),e._v(": display help for command")])])]),e._v(" "),t("li",[t("strong",[e._v("Examples")]),e._v(":\n"),t("ul",[t("li",[e._v("Display Agoric CLI commands with brief descriptions.\n"),t("ul",[t("li",[t("code",[e._v("agoric help")])])])]),e._v(" "),t("li",[e._v("Display current Agoric version number\n"),t("ul",[t("li",[t("code",[e._v("agoric -V help")])])])]),e._v(" "),t("li",[e._v("Display verbose help for an Agoric command\n"),t("ul",[t("li",[t("code",[e._v("agoric start -h -v")])])])]),e._v(" "),t("li",[e._v("Display verbose general help\n"),t("ul",[t("li",[t("code",[e._v("agoric help -v")])])])])])])])])}),[],!1,null,null,null);o.default=a.exports}}]);