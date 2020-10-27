(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{456:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"译-rxjs-调度器入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#译-rxjs-调度器入门"}},[t._v("#")]),t._v(" [译] RxJS 调度器入门")]),t._v(" "),a("blockquote",[a("p",[t._v("原文链接: "),a("a",{attrs:{href:"https://staltz.com/primer-on-rxjs-schedulers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://staltz.com/primer-on-rxjs-schedulers.html"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("RxJS 中的调度器 ( Schedulers ) 是用来控制事件发出的顺序和速度的(发送给观察者的)。它还可以控制订阅 ( Subscriptions ) 的顺序。为了不搞得太理论化，先考虑下这个示例:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combineLatest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nc$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("你觉得控制台输出的结果是什么呢？大多数人会猜是:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("11\n12\n")])])]),a("p",[t._v("因为首先 "),a("code",[t._v("a$")]),t._v(" 中"),a("code",[t._v("1")]),t._v("会和 "),a("code",[t._v("b$")]),t._v(" 中的"),a("code",[t._v("10")]),t._v("配对，然后 "),a("code",[t._v("a$")]),t._v(" 中的"),a("code",[t._v("2")]),t._v("和 "),a("code",[t._v("b$")]),t._v(" 中的"),a("code",[t._v("10")]),t._v("配对。")]),t._v(" "),a("p",[t._v("事实上，出现在控制台中的是:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("12\n")])])]),a("p",[a("code",[t._v("1 + 10")]),t._v(" 的组合并没有发生。原因是 Observables "),a("code",[t._v("a$")]),t._v(" 和 "),a("code",[t._v("b$")]),t._v(" 都是“同步的”，它们会尽可能快地执行。那么事件发出的顺序到底是怎样的呢？答案是不确定的，它可能是以下任意一种:")]),t._v(" "),a("ul",[a("li",[t._v("1, 2, 10")]),t._v(" "),a("li",[t._v("1, 10, 2")]),t._v(" "),a("li",[t._v("10, 1, 2")])]),t._v(" "),a("p",[t._v("在这种顺序不确定的情况下，我们应该描述出事件的发出顺序是怎样的。这就是调度器所做的事。默认情况下，RxJS 使用所谓的"),a("strong",[t._v("递归调度器")]),t._v("。下面是它的工作原理:")]),t._v(" "),a("ol",[a("li",[t._v("c$ 被订阅")]),t._v(" "),a("li",[t._v("combineLatest 的第一个输入流 a$ 被订阅")]),t._v(" "),a("li",[t._v("a$ 发出值 1")]),t._v(" "),a("li",[t._v("combineLatest 将 1 作为 a$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("a$ 发出值 2")]),t._v(" "),a("li",[t._v("combineLatest 将 2 作为 a$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("combineLatest 的第二个输入流 b$ 被订阅")]),t._v(" "),a("li",[t._v("b$ 发出值 10")]),t._v(" "),a("li",[t._v("combineLatest 将 10 作为 b$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("combineLatest 现在同时拥有了 a$ 和 b$ 的值，因此它发出值 2 + 10")])]),t._v(" "),a("p",[t._v("发出的顺序为 "),a("code",[t._v("1, 2, 10")]),t._v(" 。最有意思的是在 "),a("code",[t._v("b$")]),t._v(" 被订阅前， 将 "),a("code",[t._v("a$")]),t._v(" 的所有事件都尽快地发出了。RxJS 使用这种调度器作为默认调度器出于两点原因:")]),t._v(" "),a("ul",[a("li",[t._v("使用此策略性能的整体表现更好")]),t._v(" "),a("li",[t._v("在调试工具中更易于进行堆栈跟踪")])]),t._v(" "),a("p",[t._v("然而，可以通过使用不同的调度器来自定义事件发出的顺序及速度。我们在 "),a("code",[t._v("a$")]),t._v(" 上使用 "),a("code",[t._v("asap")]),t._v(" 调度器来让其“慢下来”:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const a$ = Rx.Observable.of(1, 2);")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combineLatest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nc$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("from")]),t._v(" 操作符的第二个参数是调度器，用来自定义事件的发出。"),a("code",[t._v("asap")]),t._v(" 调度器使用 "),a("a",{attrs:{href:"https://github.com/YuzuJS/setImmediate",target:"_blank",rel:"noopener noreferrer"}},[t._v("setImmediate"),a("OutboundLink")],1),t._v(" 来安排任务尽快运行，但不是同步的。代码改变后，控制台会输出:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("11\n12\n")])])]),a("p",[t._v("因为内部运行顺序如下:")]),t._v(" "),a("ol",[a("li",[t._v("c$ 被订阅")]),t._v(" "),a("li",[t._v("combineLatest 的第一个输入流 a$ 被订阅")]),t._v(" "),a("li",[a("strong",[t._v("combineLatest 的第二个输入流 b$ 被订阅")])]),t._v(" "),a("li",[t._v("b$ 发出值 10")]),t._v(" "),a("li",[t._v("combineLatest 将 10 作为 b$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("a$ 发出值 1")]),t._v(" "),a("li",[t._v("combineLatest 将 1 作为 a$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("combineLatest 现在同时拥有了 a$ 和 b$ 的值，因此它发出值 1 + 10")]),t._v(" "),a("li",[t._v("a$ 发出值 2")]),t._v(" "),a("li",[t._v("combineLatest 将 2 作为 a$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("combineLatest 发出值 2 + 10")])]),t._v(" "),a("p",[t._v("发出的顺序为 "),a("code",[t._v("10, 1, 2")]),t._v(" 。为了得到另外一种发出顺序，可以为 "),a("code",[t._v("b$")]),t._v(" 也自定义调度器:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const b$ = Rx.Observable.of(10);")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scheduler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新代码")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combineLatest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nc$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("现在发出的顺序为 "),a("code",[t._v("1, 10, 2")]),t._v("，因为运行顺序如下:")]),t._v(" "),a("ol",[a("li",[t._v("c$ 被订阅")]),t._v(" "),a("li",[t._v("combineLatest 的第一个输入流 a$ 被订阅")]),t._v(" "),a("li",[t._v("combineLatest 的第二个输入流 b$ 被订阅")]),t._v(" "),a("li",[t._v("a$ 发出值 1")]),t._v(" "),a("li",[t._v("combineLatest 将 1 作为 a$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("b$ 发出值 10")]),t._v(" "),a("li",[t._v("combineLatest 将 10 作为 b$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("combineLatest 现在同时拥有了 a$ 和 b$ 的值，因此它发出值 1 + 10")]),t._v(" "),a("li",[t._v("a$ 发出值 2")]),t._v(" "),a("li",[t._v("combineLatest 将 2 作为 a$ 的最新值进行保存")]),t._v(" "),a("li",[t._v("combineLatest 发出值 2 + 10")])]),t._v(" "),a("p",[t._v("调度器还可以让事件的发出变得更快，同时保持发出的顺序不变。例如，RxJS 的 "),a("code",[t._v("TestScheduler")]),t._v(" 可以使 "),a("code",[t._v("Observable.interval(1000).take(10)")]),t._v(" 被订阅时进行同步执行，而不需要花费10秒钟来完成:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestScheduler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("take")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("TestScheduler")]),t._v(" 是在 RxJS 内部使用的 ("),a("a",{attrs:{href:"https://github.com/ReactiveX/rxjs/blob/a44d8e5d610fa2c419d0515c456bc924aa1fa095/spec/operators/filter-spec.ts#L37-L44",target:"_blank",rel:"noopener noreferrer"}},[t._v("参见 filter 的测试用例"),a("OutboundLink")],1),t._v(")，它使得成百上千个时间相关的测试代码飞快地运行，但有一些像 "),a("a",{attrs:{href:"https://github.com/kwonoj/rx-sandbox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rx Sandbox"),a("OutboundLink")],1),t._v(" 这样的工具和积极的讨论来丰富此调度器的使用场景，使得在 RxJS 内部之外的地方也可以使用。")]),t._v(" "),a("p",[t._v("如果你也喜欢本文，可以考虑将此"),a("a",{attrs:{href:"https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fstaltz.com%2Fprimer-on-rxjs-schedulers.html&text=Primer%20on%20RxJS%20Schedulers&tw_p=tweetbutton&url=https%3A%2F%2Fstaltz.com%2Fprimer-on-rxjs-schedulers.html&via=andrestaltz",target:"_blank",rel:"noopener noreferrer"}},[t._v("推文"),a("OutboundLink")],1),t._v("分享给你的关注者。")])])}),[],!1,null,null,null);s.default=e.exports}}]);