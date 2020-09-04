(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{374:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明文件"}},[t._v("#")]),t._v(" 声明文件")]),t._v(" "),a("p",[t._v("本篇会为大家详细介绍 "),a("code",[t._v("TypeScript")]),t._v(" 中的声明文件，分享我在工作中遇到的一些问题最终是如何解决的。")]),t._v(" "),a("h2",{attrs:{id:"什么是声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是声明文件"}},[t._v("#")]),t._v(" 什么是声明文件？")]),t._v(" "),a("p",[t._v("在开发过程中不可避免的要引用其他第三方 JavaScript 库。虽然通过直接引用可以调用库的类和方法，但是却无法通过 TypeScript 的严格类型检查机制。会提示类似以下的错误")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Could not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" a declaration "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'owl-ui'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/dengwenbin/myWorkspace/typescript-in-action/vue-actions/ts-vue/node_modules/owl-ui/lib/owl-ui.common.js'")]),t._v(" implicitly has an "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'any'")]),t._v(" type.\nTry "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @types/owl-ui"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" it exists or "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" a new declaration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".d.ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" containing "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("declare")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'owl-ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7016")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("上面提示的意思是，找不到模块的声明文件，解决该错误有两种方式：")]),t._v(" "),a("ol",[a("li",[t._v("尝试安装 "),a("code",[t._v("@types/owl-ui")])]),t._v(" "),a("li",[t._v("添加一个 .d.ts 声明文件，包含 "),a("code",[t._v("declare module 'owl-ui'")])])]),t._v(" "),a("p",[t._v("所以声明文件就是为js库提供类型声明。接下来\b我们主要介绍在 "),a("code",[t._v("ts")]),t._v(" 文件中如何引入外部类库以及如何为它们编写声明文件。")]),t._v(" "),a("h2",{attrs:{id:"声明文件放在哪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明文件放在哪"}},[t._v("#")]),t._v(" 声明文件放在哪？")]),t._v(" "),a("p",[t._v("在介绍声明文件如何编写之前，列举一下一般声明文件存放的方式。")]),t._v(" "),a("ol",[a("li",[t._v("目录 "),a("code",[t._v("src/@types/")]),t._v("，在 "),a("code",[t._v("src")]),t._v(" 目录新建 "),a("code",[t._v("@types")]),t._v(" 目录，在其中编写 "),a("code",[t._v(".d.ts")]),t._v(" 声明文件，声明文件会自动被识别，可以在此为一些没有声明文件的模块编写自己的声明文件，实际上在 "),a("code",[t._v("tsconfig.json")]),t._v(" 中 "),a("code",[t._v("include")]),t._v(" 字段包含的范围内编写 "),a("code",[t._v(".d.ts")]),t._v("，都将被自动识别；")]),t._v(" "),a("li",[t._v("与被声明的 "),a("code",[t._v("js")]),t._v(" 文件同级目录内，创建相同名称的 "),a("code",[t._v(".d.ts")]),t._v(" 文件，这样也会被自动识别；")]),t._v(" "),a("li",[t._v("设置 "),a("code",[t._v("package.json")]),t._v(" 中的 "),a("code",[t._v("typings")]),t._v(" 属性值，如 "),a("code",[t._v("./index.d.ts")]),t._v(". 这样系统会识别该地址的声明文件。同样当我们把自己的js库发布到 npm 上时，按照该方法绑定声明文件。")]),t._v(" "),a("li",[t._v("同过 npm 模块安装，如 "),a("code",[t._v("@type/react")]),t._v(" ，它存放在 "),a("code",[t._v("node_modules/@types/")]),t._v(" 路径下。")])]),t._v(" "),a("h2",{attrs:{id:"如何发布声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何发布声明文件"}},[t._v("#")]),t._v(" 如何发布声明文件？")]),t._v(" "),a("p",[t._v("如果我们自己实现了一个js库，如何来写声明文件呢？目前有两种方式用来发布声明文件到 "),a("code",[t._v("npm")]),t._v(" 上：")]),t._v(" "),a("ol",[a("li",[t._v("与你的 "),a("code",[t._v("npm")]),t._v(" 包同时捆绑在一起；")]),t._v(" "),a("li",[t._v("发布到 "),a("code",[t._v("npm")]),t._v(" 上的 "),a("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types organization"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"npm包含声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm包含声明文件"}},[t._v("#")]),t._v(" npm包含声明文件")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("package.json")]),t._v(" 中，你的需要指定 "),a("code",[t._v("npm")]),t._v(" 包的主 "),a("code",[t._v("js")]),t._v(" 文件，那么你还需要指定主声明文件。如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"owl-redux"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A simple version of redux"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/owl-redux.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.d.ts"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("有的 "),a("code",[t._v("npm")]),t._v(" 包设置的 "),a("code",[t._v("types")]),t._v(" 属性，它和 "),a("code",[t._v("typings")]),t._v(" 具有相同意义。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果你的 "),a("code",[t._v("npm")]),t._v(" 包需要依赖于其他包，需要将依赖放在 "),a("code",[t._v("dependencies")]),t._v(" 中")])]),t._v(" "),a("h3",{attrs:{id:"发布到-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布到-types"}},[t._v("#")]),t._v(" 发布到@types")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[t._v("@types"),a("OutboundLink")],1),t._v(" 下面的包是从  "),a("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("DefinitelyTyped"),a("OutboundLink")],1),t._v(" 里自动发布的，通过  "),a("a",{attrs:{href:"https://github.com/Microsoft/types-publisher",target:"_blank",rel:"noopener noreferrer"}},[t._v("types-publisher"),a("OutboundLink")],1),t._v(" 工具。 如果想让你的包发布为@types包，提交一个pull request到 https://github.com/DefinitelyTyped/DefinitelyTyped。 在这里查看详细信息  "),a("a",{attrs:{href:"http://definitelytyped.org/guides/contributing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("contribution guidelines page"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"编写声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写声明文件"}},[t._v("#")]),t._v(" 编写声明文件")]),t._v(" "),a("p",[t._v("目前大致分为三种类型的类库，分别为"),a("strong",[t._v("全局类库")]),t._v("、"),a("strong",[t._v("模块类库")]),t._v("、"),a("strong",[t._v("UMD类库")]),t._v("。接下来，我会带大家分析 "),a("code",[t._v("ts")]),t._v(" 引入各自类库的用法和区别。")]),t._v(" "),a("p",[t._v("接下来介绍的大部分内容为代码段，可以点击"),a("a",{attrs:{href:"https://github.com/dengwb1991/typescript-in-action/tree/master/base-typescript/fourth-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看源码"),a("OutboundLink")],1),t._v("同时阅读。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这里会接触到 JavaScript模块化 的一些基础知识，若您还对它不了解，可以点击"),a("a",{attrs:{href:"https://notes.dengwb.com/notes/jsModular.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解 JavaScript模块化"),a("OutboundLink")],1),t._v(" 进行预习。")])]),t._v(" "),a("h3",{attrs:{id:"引入jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入jquery"}},[t._v("#")]),t._v(" 引入jquery")]),t._v(" "),a("p",[t._v("jquery 是 UMD 类库，它可以全局引用，同时也可以使用模块化方式引用。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: Try `npm install @types/jquery` if it exists or add a new declaration (.d.ts) file containing `declare module 'jquery';`")]),t._v("\n")])])]),a("p",[t._v("在 "),a("code",[t._v("ts")]),t._v(" 文件中引入 js 文件时，会提示上述错误，原因在于缺少声明文件。")]),t._v(" "),a("p",[t._v("我们在使用非 "),a("code",[t._v("ts")]),t._v(" 编写的类库时，必须为这个类库编写一个声明文件，对外暴露它的 API，有时候这些类库的声明文件是单独提供的，需要额外安装。上述例子中就提示需要安装 "),a("code",[t._v("@types/jquery")]),t._v(" 插件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @types/jquery -D\n")])])]),a("p",[t._v("安装完之后，就可以正常在 ts 文件中使用 "),a("code",[t._v("jquery")]),t._v(" 了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ol",[a("li",[t._v("可在 "),a("code",[t._v("http://microsoft.github.io/TypeSearch/")]),t._v(" 中查询类库是否有声明文件")]),t._v(" "),a("li",[t._v("可在 "),a("code",[t._v("http://definitelytyped.org/")]),t._v(" 中了解如何发布声明文件")])])]),t._v(" "),a("h3",{attrs:{id:"全局类库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局类库"}},[t._v("#")]),t._v(" 全局类库")]),t._v(" "),a("p",[t._v("编写 js 文件，如下所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("globalLib")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nglobalLib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0.0'")]),t._v("\n\nglobalLib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doSomething")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'global lib do something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上述代码中，定义了一个函数，为函数添加了两个元素。接下来我们用 "),a("code",[t._v("script")]),t._v(" 标签引入该文件，让该函数作用在全局。")]),t._v(" "),a("p",[t._v("我们在 ts 中调用该函数，如下所示：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("globalLib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: Cannot find name 'globalLib'.")]),t._v("\n")])])]),a("p",[t._v("提示未找到该函数。")]),t._v(" "),a("p",[t._v("解决办法为它添加一个声明文件，在同级目录下创建一个同名 "),a("code",[t._v("d.ts")]),t._v(" 文件，如下所示：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("globalLib")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" globalLib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" globalLib "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Options")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("定义了一个同名函数和命名空间，在上一篇声明合并中有介绍过函数与命名空间合并，相当于为函数添加了一些默认属性。函数参数定义了一个接口，参数指定为可索引类型，接受任意属性。"),a("code",[t._v("declare")]),t._v(" 关键字可以为外部变量提供声明。")]),t._v(" "),a("p",[t._v("这样一个声明文件就定义好了。")]),t._v(" "),a("h3",{attrs:{id:"模块类库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块类库"}},[t._v("#")]),t._v(" 模块类库")]),t._v(" "),a("p",[t._v("以下为 CommonJS 模块编写的文件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0.0'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moduleLib do something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moduleLib")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmoduleLib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" version\nmoduleLib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doSomething "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doSomething\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" moduleLib\n")])])]),a("p",[t._v("同样我们将它引入 "),a("code",[t._v("ts")]),t._v(" 文件中使用。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./module-lib/index.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error: Could not find a declaration file for module './module-lib/index.js'. ")]),t._v("\n")])])]),a("p",[t._v("提示未找到该模块，同样我们需要为它编写文件声明。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moduleLib")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Options")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" moduleLib "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" moduleLib\n")])])]),a("p",[t._v("上述 ts 与刚刚编写的全局类库声明文件大致相同，唯一的区别这里需要 "),a("code",[t._v("export")]),t._v(" 输出。")]),t._v(" "),a("h3",{attrs:{id:"umd-类库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#umd-类库"}},[t._v("#")]),t._v(" UMD 类库")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" define "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" define"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("umdLib "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umd lib do something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("同样我们将它引入 "),a("code",[t._v("ts")]),t._v(" 文件中使用，如果没有声明文件也会提示错误，我们直接看 ts 声明文件")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" umdLib "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" umdLib\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" umdLib\n")])])]),a("p",[t._v("我们声明了一个命名空间，命名空间内有两个成员 "),a("code",[t._v("version")]),t._v(" 和 "),a("code",[t._v("doSomething")]),t._v("，分别对应 "),a("code",[t._v("umd")]),t._v(" 中的两个成员。")]),t._v(" "),a("p",[t._v("这里与其他类库不同的是，多添加了一条语句 "),a("code",[t._v("export as namespace umdLib")]),t._v("，如果为 "),a("code",[t._v("umd")]),t._v(" 库声明，这条语句必不可少。")]),t._v(" "),a("p",[a("code",[t._v("umd")]),t._v(" 同样可以使用全局方式引用。")]),t._v(" "),a("h2",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("有时候，我们想给一个第三方类库添加一些自定义的方法。以下介绍如何在"),a("strong",[t._v("模块插件")]),t._v("或"),a("strong",[t._v("全局插件")]),t._v("中添加自定义方法。")]),t._v(" "),a("h3",{attrs:{id:"模块插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块插件"}},[t._v("#")]),t._v(" 模块插件")]),t._v(" "),a("p",[t._v("我们使用 "),a("code",[t._v("moment")]),t._v(" 插件，为它添加一个自定义方法。 关键字 "),a("code",[t._v("declare module")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moment'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myFunction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myFunction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I am a Fn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"全局插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局插件"}},[t._v("#")]),t._v(" 全局插件")]),t._v(" "),a("p",[t._v("在上面我们有介绍全局类库，我们为它添加一个自定义方法。关键字 "),a("code",[t._v("declare global")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" globalLib "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doAnyting")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nglobalLib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doAnyting")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);