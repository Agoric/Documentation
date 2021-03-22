(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{467:function(t,e,o){"use strict";o.r(e);var n=o(41),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"priceauthority-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#priceauthority-methods"}},[t._v("#")]),t._v(" PriceAuthority Methods")]),t._v(" "),o("h2",{attrs:{id:"getquoteissuer-brandin-brandout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getquoteissuer-brandin-brandout"}},[t._v("#")]),t._v(" getQuoteIssuer(brandIn, brandOut)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("brandIn")]),t._v(": "),o("code",[t._v("{ Brand }")])]),t._v(" "),o("li",[o("code",[t._v("brandOut")]),t._v(": "),o("code",[t._v("{ Brand }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Issuer | Promise<Issuer> }")])]),t._v(" "),o("li",[t._v("Gets the ERTP Issuer of PriceQuotes for a given brandIn/brandOut\npair.")])]),t._v(" "),o("h2",{attrs:{id:"gettimerservice-brandin-brandout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gettimerservice-brandin-brandout"}},[t._v("#")]),t._v(" getTimerService(brandIn, brandOut)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("brandIn")]),t._v(": "),o("code",[t._v("{ Brand }")])]),t._v(" "),o("li",[o("code",[t._v("brandOut")]),t._v(": "),o("code",[t._v("{ Brand }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ TimerService | Promise<TimerService> }")])]),t._v(" "),o("li",[t._v("Gets the timer used in PriceQuotes for a given brandIn/brandOut pair.")])]),t._v(" "),o("h2",{attrs:{id:"makequotenotifier-amountin-brandout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#makequotenotifier-amountin-brandout"}},[t._v("#")]),t._v(" makeQuoteNotifier(amountIn, brandOut)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("amountIn")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[o("code",[t._v("brandOut")]),t._v(": "),o("code",[t._v("{ Brand }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ ERef<Notifier<PriceQuote>> }")])]),t._v(" "),o("li",[t._v("Be notified of the latest PriceQuotes for a given "),o("code",[t._v("amountIn")]),t._v(".  The rate at\nwhich these are issued may be very different between "),o("code",[t._v("priceAuthorities")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"quoteattime-deadline-amountin-brandout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quoteattime-deadline-amountin-brandout"}},[t._v("#")]),t._v(" quoteAtTime(deadline, amountIn, brandOut)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("deadline")]),t._v(": "),o("code",[t._v("{ Timestamp }")])]),t._v(" "),o("li",[o("code",[t._v("amountIn")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[o("code",[t._v("brandOut")]),t._v(": "),o("code",[t._v("{ Brand }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),o("li",[t._v("Resolves after "),o("code",[t._v("deadline")]),t._v(" passes on the "),o("code",[t._v("priceAuthority")]),t._v("’s "),o("code",[t._v("timerService")]),t._v(" with the price\nquote of "),o("code",[t._v("amountIn")]),t._v(" at that time. Note that "),o("code",[t._v("deadline")]),t._v("'s value is a "),o("code",[t._v("BigInt")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"quotegiven-amountin-brandout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quotegiven-amountin-brandout"}},[t._v("#")]),t._v(" quoteGiven(amountIn, brandOut)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("amountIn:")]),t._v("{ Amount }`")]),t._v(" "),o("li",[o("code",[t._v("brandOut:")]),t._v("{ Brand }`")]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),o("li",[t._v("Get a quote on demand corresponding to "),o("code",[t._v("amountIn")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"quotewanted-brandin-amountout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quotewanted-brandin-amountout"}},[t._v("#")]),t._v(" quoteWanted(brandIn, amountOut)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("brandIn")]),t._v(": "),o("code",[t._v("{ Brand }")])]),t._v(" "),o("li",[o("code",[t._v("amountOut")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),o("li",[t._v("Get a quote on demand corresponding to "),o("code",[t._v("amountOut")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"quotewhengt-amountin-amountoutlimit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quotewhengt-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenGT(amountIn, amountOutLimit)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("amountIn")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[o("code",[t._v("amountOutLimit")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),o("li",[t._v("Resolves when a price quote of "),o("code",[t._v("amountIn")]),t._v(" exceeds "),o("code",[t._v("amountOutLimit")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"quotewhengte-amountin-amountoutlimit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quotewhengte-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenGTE(amountIn, amountOutLimit)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("amountIn")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[o("code",[t._v("amountOutLimit")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),o("li",[t._v("Resolves when a price quote of "),o("code",[t._v("amountIn")]),t._v(" reaches or exceeds "),o("code",[t._v("amountOutLimit")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"quotewhenlt-amountin-amountoutlimit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quotewhenlt-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenLT(amountIn, amountOutLimit)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("amountIn")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[o("code",[t._v("amountOutLimit")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),o("li",[t._v("Resolves when a price quote of "),o("code",[t._v("amountIn")]),t._v(" drops below "),o("code",[t._v("amountOutLimit")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"quotewhenlte-amountin-amountoutlimit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quotewhenlte-amountin-amountoutlimit"}},[t._v("#")]),t._v(" quoteWhenLTE(amountIn, amountOutLimit)")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("amountIn")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[o("code",[t._v("amountOutLimit")]),t._v(": "),o("code",[t._v("{ Amount }")])]),t._v(" "),o("li",[t._v("Returns: "),o("code",[t._v("{ Promise<PriceQuote> }")])]),t._v(" "),o("li",[t._v("Resolves when a price quote of "),o("code",[t._v("amountIn")]),t._v(" reaches or drops below\n"),o("code",[t._v("amountOutLimit")]),t._v(".")])])])}),[],!1,null,null,null);e.default=a.exports}}]);