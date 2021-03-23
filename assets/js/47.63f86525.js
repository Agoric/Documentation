(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{447:function(e,t,o){"use strict";o.r(t);var a=o(41),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"agoric-javascript-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#agoric-javascript-overview"}},[e._v("#")]),e._v(" Agoric JavaScript Overview")]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("This doc summarizes Agoric’s additions to and deletions from the current JavaScript standards. In other\nwords, what you need to know to write JavaScript that runs in an Agoric vat. "),o("em",[e._v("Vats")]),e._v(" are containers that\nrun code in a confined and resource-limited environment,\nwith "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Persistence_(computer_science)#Orthogonal_or_transparent_persistence",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("orthogonal persistence")]),o("OutboundLink")],1),e._v("\nand "),o("a",{attrs:{href:"https://github.com/tc39/proposal-eventual-send",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("eventual-send-based")]),o("OutboundLink")],1),e._v(" access to external\nresources.")]),e._v(" "),o("p",[e._v("Most JS environments (Node.js, web browsers) provide a combination of the baseline\nJavaScript "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("language globals")]),o("OutboundLink")],1),e._v(" (e.g.\n"),o("code",[e._v("Object")]),e._v(", "),o("code",[e._v("Array")]),e._v(", etc.) and host objects, many of which provide\nIO. "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web browsers"),o("OutboundLink")],1),e._v(" offer things like "),o("code",[e._v("window")]),e._v(", "),o("code",[e._v("fetch")]),e._v(", "),o("code",[e._v("WebAssembly")]),e._v(",\nand "),o("code",[e._v("localStorage")]),e._v(", while "),o("a",{attrs:{href:"https://nodejs.org/dist/latest-v14.x/docs/api/globals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js includes"),o("OutboundLink")],1),e._v(" ones\nlike "),o("code",[e._v("require")]),e._v(", "),o("code",[e._v("process")]),e._v(", and "),o("code",[e._v("Buffer")]),e._v(". In general, host objects provide all IO.")]),e._v(" "),o("p",[e._v("Vats are different. Their JS environment is a frozen "),o("a",{attrs:{href:"https://medium.com/agoric/ses-securing-javascript-in-the-real-world-4f309e6b66a6",target:"_blank",rel:"noopener noreferrer"}},[e._v("SES"),o("OutboundLink")],1),e._v(" ("),o("em",[e._v("Secure\nECMAScript")]),e._v(") "),o("code",[e._v("Compartment")]),e._v(" (see below), with some additions.")]),e._v(" "),o("h2",{attrs:{id:"ses"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ses"}},[e._v("#")]),e._v(" SES")]),e._v(" "),o("p",[e._v('SES is a safe deterministic subset of "strict mode" JavaScript. This means it does not include\nany IO objects that provide '),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ambient_authority",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("ambient authority")]),o("OutboundLink")],1),e._v("\n(which is not “safe”). SES also removes non-determinism by modifying a few built-in objects. For a\nmore detailed explanation of SES and its functionality, see the "),o("RouterLink",{attrs:{to:"/guides/js-programming/ses/ses-guide.html"}},[e._v("SES Guide")]),e._v("\nand [SES Reference(./ses/ses-reference.md).")],1),e._v(" "),o("p",[e._v("As of SES-0.8.0/Fall 2020, "),o("a",{attrs:{href:"https://github.com/Agoric/SES-shim/blob/SES-v0.8.0/packages/ses/src/whitelist.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("the SES source code"),o("OutboundLink")],1),e._v("\ndefines a subset of the globals defined by the baseline JavaScript language specification. SES "),o("strong",[e._v("includes")]),e._v(" the globals:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Object")])]),e._v(" "),o("li",[o("code",[e._v("Array")])]),e._v(" "),o("li",[o("code",[e._v("Number")])]),e._v(" "),o("li",[o("code",[e._v("Map")])]),e._v(" "),o("li",[o("code",[e._v("WeakMap")])]),e._v(" "),o("li",[o("code",[e._v("Number")])]),e._v(" "),o("li",[o("code",[e._v("BigInt")])]),e._v(" "),o("li",[o("code",[e._v("Intl")])]),e._v(" "),o("li",[o("code",[e._v("Math")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Math.random()")]),e._v(" is disabled (calling it throws an error) as an obvious source of"),o("br"),e._v("\nnon-determinism.")])])]),e._v(" "),o("li",[o("code",[e._v("Date")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Date.now()")]),e._v(" returns "),o("code",[e._v("NaN")])]),e._v(" "),o("li",[o("code",[e._v("new Date(nonNumber)")]),e._v(" or "),o("code",[e._v("Date(anything)")]),e._v(" return a "),o("code",[e._v("Date")]),e._v(" that stringifies to "),o("code",[e._v('"Invalid Date"')])])])])]),e._v(" "),o("p",[e._v("We retain the other, purely computational and deterministic, "),o("code",[e._v("Math")]),e._v(" and "),o("code",[e._v("Date")]),e._v(" features.")]),e._v(" "),o("p",[e._v("Much of the "),o("code",[e._v("Intl")]),e._v(" package, and some locale-specific aspects of other objects\n(e.g. "),o("code",[e._v("Number.prototype.toLocaleString")]),e._v(") have results that depend upon which locale is configured.\nThis varies from one process to another. Our handling of this is still in development. Either these\nfunctions will be disabled, or they will act as if run on a host with a single fixed locale as defined\nby the SES specification.")]),e._v(" "),o("h2",{attrs:{id:"additions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#additions"}},[e._v("#")]),e._v(" Additions")]),e._v(" "),o("p",[e._v("As SES is on the JavaScript standards track, the below anticipates additional\nproposed standard-track features. If those features become standards, future\nJS environments will include them as global objects. So the current SES shim\nalso makes those global objects available.")]),e._v(" "),o("p",[e._v("The vat environment has four significant objects not part of standard JavaScript:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("console")]),e._v(" helps with debugging. Since all JavaScript implementations add it,\nyou may be surprised it’s not in the official spec. So leaving it out would\ncause too much confusion. Note that "),o("code",[e._v("console.log")]),e._v("’s exact behavior is up to\nthe host program; display to the operator is not guaranteed. Use the console\nfor debug information only. The console is not obliged to write to the POSIX\nstandard output.")])]),e._v(" "),o("p",[e._v("-"),o("code",[e._v("harden")]),e._v(" is a global that freezes an object’s API surface (enumerable data properties).\nA hardened object’s properties cannot be changed, so the only way to interact\nwith a hardened object is through its methods. "),o("code",[e._v("harden()")]),e._v(" is similar to "),o("code",[e._v("Object.freeze()")]),e._v("\nbut more powerful. For more details,\nsee "),o("a",{attrs:{href:"https://github.com/Agoric/SES-shim/blob/master/packages/ses/README.md#harden",target:"_blank",rel:"noopener noreferrer"}},[e._v("the details from the "),o("code",[e._v("ses")]),e._v(" package"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("harden()")]),e._v(" should be called on all objects that will be transferred\nacross a trust boundary. The general rule is if you make a new object\nand give it to someone else (and don't immediately forget it yourself),\nyou should give them "),o("code",[e._v("harden(obj)")]),e._v(" instead of the raw object. Hardening\na class instance also hardens the class.")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("HandledPromise")]),e._v(" is also a global.\nThe "),o("a",{attrs:{href:"https://agoric.com/documentation/distributed-programming.html#communicating-with-remote-objects-using-e",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("E")]),e._v(" wrapper ("),o("code",[e._v("E(target).method-name(args)")]),e._v(")"),o("OutboundLink")],1),e._v("\ncan be imported as "),o("code",[e._v("import { E } from '@agoric/eventual-send")]),e._v(". These two\nare defined by the TC39 "),o("a",{attrs:{href:"https://github.com/tc39/proposal-eventual-send",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eventual-Send Proposal"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Compartment")]),e._v(" (a "),o("a",{attrs:{href:"https://github.com/Agoric/SES-shim/tree/SES-v0.8.0/packages/ses#compartment",target:"_blank",rel:"noopener noreferrer"}},[e._v("part of SES"),o("OutboundLink")],1),e._v(")\nis a global. Vat code runs inside a "),o("code",[e._v("Compartment")]),e._v(" and can create sub-compartments\nto host other code (with different globals or transforms).")]),e._v(" "),o("p",[e._v("Note that these child compartments get "),o("code",[e._v("harden()")]),e._v(" and "),o("code",[e._v("Compartment")]),e._v(", but\nyou have to explicitly provide any other JS additions (including "),o("code",[e._v("console")]),e._v("\nand "),o("code",[e._v("HandledPromise")]),e._v(") as “endowments” since they won’t be present otherwise.\nIf the parent compartment is metered, its child compartments are always\nmetered too. Child compartments will "),o("em",[e._v("not")]),e._v(" be frozen by default:\nsee "),o("a",{attrs:{href:"#frozen-globalthis"}},[e._v("Frozen globalThis")]),e._v(" below for details.")])])]),e._v(" "),o("h2",{attrs:{id:"removals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#removals"}},[e._v("#")]),e._v(" Removals")]),e._v(" "),o("p",[e._v("Almost all existing JS code was written to run under Node.js or inside a browser,\nso it's easy to conflate the environment features with JavaScript itself. For\nexample, you may be surprised that "),o("code",[e._v("Buffer")]),e._v(" and "),o("code",[e._v("require")]),e._v(" are Node.js\nadditions and not part of JavaScript.")]),e._v(" "),o("p",[e._v("Most Node.js-specific "),o("a",{attrs:{href:"https://nodejs.org/dist/latest-v14.x/docs/api/globals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("global objects"),o("OutboundLink")],1),e._v("\nare unavailable within a vat including:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("queueMicrotask")])]),e._v(" "),o("li",[o("code",[e._v("Buffer")]),e._v(" (consider using "),o("code",[e._v("TypedArray")]),e._v(" instead, but see below)")]),e._v(" "),o("li",[o("code",[e._v("setImmediate")]),e._v("/"),o("code",[e._v("clearImmediate")]),e._v(": Not available, but you can generally\nreplace "),o("code",[e._v("setImmediate(fn)")]),e._v(" with "),o("code",[e._v("Promise.resolve().then(_ => fn())")]),e._v(" to\ndefer execution of "),o("code",[e._v("fn")]),e._v(" until after the current event/callback finishes\nprocessing. But be aware it won't run until after all "),o("em",[e._v("other")]),e._v(" ready\nPromise callbacks execute.")])]),e._v(" "),o("p",[e._v("There are two queues: the "),o("em",[e._v("IO queue")]),e._v(" (accessed by "),o("code",[e._v("setImmediate")]),e._v("), and\nthe "),o("em",[e._v("Promise queue")]),e._v(" (accessed by Promise resolution). SES code can only\nadd to the Promise queue. Note that the Promise queue is higher-priority\nthan the IO queue, so the Promise queue must be empty for any IO or timers to be handled.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("setInterval")]),e._v(" and "),o("code",[e._v("setTimeout")]),e._v(" (and "),o("code",[e._v("clearInterval")]),e._v("/"),o("code",[e._v("clearTimeout")]),e._v("): Any\nnotion of time must come from exchanging messages with external timer services\n(the SwingSet environment provides a "),o("code",[e._v("TimerService")]),e._v(" object to the bootstrap vat,\nwhich can share it with other vats)")]),e._v(" "),o("li",[o("code",[e._v("global")]),e._v(": Is not defined. Use "),o("code",[e._v("globalThis")]),e._v(" instead (and remember that it is frozen).")]),e._v(" "),o("li",[o("code",[e._v("process")]),e._v(": Is not available, e.g. no "),o("code",[e._v("process.env")]),e._v(" to access the process's environment\nvariables, or "),o("code",[e._v("process.argv")]),e._v(" for the argument array.")]),e._v(" "),o("li",[o("code",[e._v("URL")]),e._v(" and "),o("code",[e._v("URLSearchParams")]),e._v(": Are not available.")]),e._v(" "),o("li",[o("code",[e._v("WebAssembly")]),e._v(": Is not available.")]),e._v(" "),o("li",[o("code",[e._v("TextEncoder")]),e._v(" and "),o("code",[e._v("TextDecoder")]),e._v(": Are not available.")])]),e._v(" "),o("p",[e._v("Some names look like globals, but are really part of the module-defining tools: imports,\nexports, and metadata. Modules start as files on disk, but then are bundled together\ninto an archive before being loaded into a vat. The bundling tool uses several standard\nfunctions to locate other modules that must be included. These are not a part of SES, but\nare allowed in module source code, and are translated or removed before execution.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("import")]),e._v(" and "),o("code",[e._v("export")]),e._v(" syntax are allowed in ESM-style modules (preferred over CommonJS).\nThese are not globals as such, but top-level syntax that defines the module graph.")]),e._v(" "),o("li",[o("code",[e._v("require")]),e._v(", "),o("code",[e._v("module")]),e._v(", "),o("code",[e._v("module.exports")]),e._v(", and "),o("code",[e._v("exports")]),e._v(" are allowed in CommonJS-style modules,\nand should work as expected. However, new code should be written as ESM modules. They\nare either consumed by the bundling process, provided (in some form) by the execution\nenvironment, or otherwise rewritten to work sensibly")]),e._v(" "),o("li",[o("code",[e._v("__dirname")]),e._v(" and "),o("code",[e._v("__filename")]),e._v(" are not provided")]),e._v(" "),o("li",[e._v("The dynamic import expression ("),o("code",[e._v("await import('name')")]),e._v(") is currently prohibited in vat\ncode, but a future SES implementation may allow it.")])]),e._v(" "),o("p",[e._v("Node.js has a "),o("a",{attrs:{href:"https://nodejs.org/dist/latest-v14.x/docs/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("large collection"),o("OutboundLink")],1),e._v(' of "built-in\nmodules", such as '),o("code",[e._v("http")]),e._v(" and "),o("code",[e._v("crypto")]),e._v(". Some are clearly platform-specific (e.g. "),o("code",[e._v("v8")]),e._v("), while\nothers are not so obvious ("),o("code",[e._v("stream")]),e._v("). All are accessed by importing a\nmodule ("),o("code",[e._v("const v8 = require('v8')")]),e._v(" in CommonJS modules, or "),o("code",[e._v("import v8 from 'v8'")]),e._v(" in ESM modules).\nThese modules are built out of native code (C++), not plain JS.")]),e._v(" "),o("p",[e._v("None of these built-in modules are available to vat code. "),o("code",[e._v("require")]),e._v(" or "),o("code",[e._v("import")]),e._v(" can be used\non pure JS modules, but not on modules including native code. For a vat to exercise authority\nfrom a built-in module, you have to write a "),o("em",[e._v("device")]),e._v(" with an endowment with the built-in\nmodule's functions, then have the vat send messages to the device.")]),e._v(" "),o("p",[e._v("Browser environments also have a huge list of "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API",target:"_blank",rel:"noopener noreferrer"}},[e._v("other features"),o("OutboundLink")],1),e._v("\npresented as names in the global scope (some also added to Node.js). None are available in a\nSES environment. The most surprising removals include "),o("code",[e._v("atob")]),e._v(", "),o("code",[e._v("TextEncoder")]),e._v(", and "),o("code",[e._v("URL")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("debugger")]),e._v(" is a first-class JavaScript statement, and behaves as expected in vat code.")]),e._v(" "),o("h2",{attrs:{id:"shim-limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shim-limitations"}},[e._v("#")]),e._v(" Shim limitations")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/Agoric/SES-shim/",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("shim")]),o("OutboundLink")],1),e._v(" providing our SES environment is not as\nfully-featured as a native implementation. As a result, you cannot use some forms of code\nyet. The following restrictions should be lifted once your JS engine can provide SES natively.")]),e._v(" "),o("h3",{attrs:{id:"html-comments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#html-comments"}},[e._v("#")]),e._v(" HTML comments")]),e._v(" "),o("p",[e._v("JavaScript parsers may not recognize HTML comments within source code, potentially causing\ndifferent behavior on different engines. For safety, the SES shim rejects any source\ncode containing a comment open ("),o("code",[e._v("\x3c!--")]),e._v(") or close ("),o("code",[e._v("--\x3e")]),e._v(") sequence. However, its filter\nuses a regular expression, not a full parser. It unnecessarily rejects any source code\ncontaining either of the strings "),o("code",[e._v("\x3c!--")]),e._v(" or "),o("code",[e._v("--\x3e")]),e._v(", even if neither marks a comment.")]),e._v(" "),o("h3",{attrs:{id:"dynamic-import-expressions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-import-expressions"}},[e._v("#")]),e._v(" Dynamic import expressions")]),e._v(" "),o("p",[e._v('One active JS feature proposal would add a "dynamic import" expression: '),o("code",[e._v("await import('path')")]),e._v(".\nIf implemented (or if someone decides to be an early adopter and adds it to an engine),\nand your JS engine has this, vat code might be able to bypass the "),o("code",[e._v("Compartment")]),e._v("'s module\nmap. For safety, the SES shim already rejects code that looks like it uses this feature.\nThe regular expression for this pattern can be confused into falsely rejecting legitimate\ncode. For example, the word “import” at the end of a line in a comment, such as:")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This function calculates the import")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// duties paid on the merchandise..")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//")]),e._v("\n")])])]),o("p",[e._v("The regexp confuses the above with something like the following, and rejects it:")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[e._v("foo "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("bar")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("argument"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nsneaky "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// tricky comment to obscure function invocation")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("modulename"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("There are also problems with “import” being near a parenthesis inside a comment.")]),e._v(" "),o("h3",{attrs:{id:"direct-vs-indirect-eval-expressions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#direct-vs-indirect-eval-expressions"}},[e._v("#")]),e._v(" Direct vs. indirect eval expressions")]),e._v(" "),o("p",[e._v("A "),o("em",[e._v("direct eval")]),e._v(", invoked as "),o("code",[e._v("eval(code)")]),e._v(", behaves as if "),o("code",[e._v("code")]),e._v(" were expanded in place.\nThe evaluated code sees the same scope as the "),o("code",[e._v("eval")]),e._v(" itself sees, so this "),o("code",[e._v("code")]),e._v(" can\nreference "),o("code",[e._v("x")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("foo")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("code")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" x "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("eval")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("code"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),o("p",[e._v("If you perform a direct eval, you cannot hide your internal authorities from the\ncode being evaluated.")]),e._v(" "),o("p",[e._v("In contrast, an "),o("em",[e._v("indirect eval")]),e._v(" only gets the global scope, not the local scope.\nIn a safe SES environment, indirect eval is a useful and common tool. The evaluated\ncode can only access global objects, and those are all safe (and frozen). The only\nbad thing an indirect eval can do is consume unbounded CPU or memory. Once you've\nevaluated the code, you can invoke it with arguments to give it as many or as few\nauthorities as you like.")]),e._v(" "),o("p",[e._v("The most common way to invoke an indirect eval is "),o("code",[e._v("(1,eval)(code)")]),e._v(".")]),e._v(" "),o("p",[e._v("The SES shim cannot correctly emulate a direct eval. If it tried, it would perform\nan indirect eval. This could be pretty confusing, because the code might not actually\nuse objects from the local scope. You might not notice the problem until some later\nchange altered the behavior.")]),e._v(" "),o("p",[e._v("To avoid this confusion, the shim uses a regular expression to reject code that\nlooks like it is performing a direct eval. This regexp is not complete (you can\ntrick it into performing a direct eval anyway), but that’s safe. Our goal is\njust to guide people away from confusing behaviors early in their development process.")]),e._v(" "),o("p",[e._v("This regexp falsely rejects occurrences inside static strings and comments.")]),e._v(" "),o("h2",{attrs:{id:"other-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-changes"}},[e._v("#")]),e._v(" Other changes")]),e._v(" "),o("h3",{attrs:{id:"frozen-globalthis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frozen-globalthis"}},[e._v("#")]),e._v(" Frozen "),o("code",[e._v("globalThis")])]),e._v(" "),o("p",[e._v("Vats run in a "),o("code",[e._v("Compartment")]),e._v(" with a frozen "),o("code",[e._v("globalThis")]),e._v(" object. If mutable,\nit would provide an ambient communication channel. One side of this channel\ncould set "),o("code",[e._v("globalThis.heyBuddyAreYouOutThere = 'exfiltrated message'")]),e._v(", and\nthe other side could periodically read it. This would violate object-capability\nsecurity; objects may only communicate through references.")]),e._v(" "),o("p",[e._v("Vats can create a new "),o("code",[e._v("Compartment")]),e._v(" object, and decide if it supports object-capability\nsecurity. If it does, they should run "),o("code",[e._v("harden(compartment.globalThis)")]),e._v(" on it\nand only then load any untrusted code into it.")]),e._v(" "),o("h3",{attrs:{id:"frozen-primordials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frozen-primordials"}},[e._v("#")]),e._v(" Frozen primordials")]),e._v(" "),o("p",[e._v("SES freezes "),o("em",[e._v("primordials")]),e._v("; built-in JavaScript objects such as "),o("code",[e._v("Object")]),e._v(", "),o("code",[e._v("Array")]),e._v(",\nand "),o("code",[e._v("RegExp")]),e._v(", and their prototype chains. This prevents malicious code from\nchanging their behavior (imagine "),o("code",[e._v("Array.prototype.push")]),e._v(" delivering a copy of\nits argument to an attacker, or ignoring certain values). It also prevents\nusing, for example, "),o("code",[e._v("Object.heyBuddy")]),e._v(" as an ambient communication channel.")]),e._v(" "),o("p",[e._v("Both frozen primordials and a frozen "),o("code",[e._v("globalThis")]),e._v(" break a few JS libraries\nthat add new features to built-in objects (shims/polyfills). For shims which\njust add properties to "),o("code",[e._v("globalThis")]),e._v(", it may be possible to load these in a new\nnon-frozen "),o("code",[e._v("Compartment")]),e._v(". Shims that modify primordials only work if you build\nnew (mutable) wrappers around the default primordials and let the shims modify\nthose wrappers instead.")]),e._v(" "),o("h2",{attrs:{id:"library-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#library-compatibility"}},[e._v("#")]),e._v(" Library compatibility")]),e._v(" "),o("p",[e._v("Vat code can use "),o("code",[e._v("import")]),e._v(" or "),o("code",[e._v("require()")]),e._v(" to import other libraries consisting\nonly of JS code, which are compatible with the SES environment. This includes\na significant portion of the NPM registry.")]),e._v(" "),o("p",[e._v("However, many NPM packages use built-in Node.js modules. If used at import\ntime (in their top-level code), vat code cannot use the package and fails\nto load at all. If they use the built-in features at runtime, then the\npackage can load. However, it might fail later when a function is invoked\nthat accesses the missing functionality. So some NPM packages are partially\ncompatible; you can use them if you don't invoke certain features.")]),e._v(" "),o("p",[e._v("The same is true for NPM packages that use missing globals, or attempt to\nmodify frozen primordials.")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://github.com/Agoric/SES-shim/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("SES wiki"),o("OutboundLink")],1),e._v(" tracks compatibility\nreports for NPM packages, including potential workarounds.")]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("When writing JavaScript to run in Agoric’s vats, keep in mind the following\ndifferences from the JavaScript flavor you’re used to:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Missing or unusable:")]),e._v(" "),o("ul",[o("li",[e._v("Most "),o("a",{attrs:{href:"https://nodejs.org/dist/latest-v14.x/docs/api/globals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js-specific global objects"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("All "),o("a",{attrs:{href:"https://nodejs.org/dist/latest-v14.x/docs/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js built-in modules"),o("OutboundLink")],1),e._v(" such as "),o("code",[e._v("http")]),e._v(" and\n"),o("code",[e._v("crypto")]),e._v(".")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Features from browser environments"),o("OutboundLink")],1),e._v(" presented\nas names in the global scope including "),o("code",[e._v("atob")]),e._v(", "),o("code",[e._v("TextEncoder")]),e._v(", and "),o("code",[e._v("URL")]),e._v(".")]),e._v(" "),o("li",[e._v("HTML comments")]),e._v(" "),o("li",[e._v("Dynamic "),o("code",[e._v("import")]),e._v(" expressions")]),e._v(" "),o("li",[e._v("Direct evals")])])]),e._v(" "),o("li",[o("p",[e._v("Added or modified")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("console")])]),e._v(" "),o("li",[o("code",[e._v("harden()")])]),e._v(" "),o("li",[o("code",[e._v("HandledPromise()")])]),e._v(" "),o("li",[o("code",[e._v("Compartment")])]),e._v(" "),o("li",[o("code",[e._v("globalThis")]),e._v(" is frozen.")]),e._v(" "),o("li",[e._v("JavaScript primordials are frozen.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);