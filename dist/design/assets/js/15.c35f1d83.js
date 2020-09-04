(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{360:function(t,e,v){"use strict";v.r(e);var a=v(42),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"从招式与内功谈起-设计模式概述-二"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#从招式与内功谈起-设计模式概述-二"}},[t._v("#")]),t._v(" 从招式与内功谈起——设计模式概述（二）")]),t._v(" "),v("p",[t._v("1.2 设计模式是什么")]),t._v(" "),v("p",[t._v("俗话说：站在别人的肩膀上，我们会看得更远。设计模式的出现可以让我们站在前人的肩膀上，通过一些成熟的设计方案来指导新项目的开发和设计，以便于我们开发出具有更好的灵活性和可扩展性，也更易于复用的软件系统。")]),t._v(" "),v("p",[t._v("设计模式的一般定义如下：\n设计模式(Design Pattern)是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结，使用设计模式是为了可重用代码、让代码更容易被他人理解并且保证代码可靠性。")]),t._v(" "),v("p",[t._v("狭义的设计模式是指GoF在《设计模式：可复用面向对象软件的基础》一书中所介绍的23种经典设计模式，不过设计模式并不仅仅只有这23种，随着软件开发技术的发展，越来越多的新模式不断诞生并得以应用。")]),t._v(" "),v("p",[t._v("设计模式一般包含模式名称、问题、目的、解决方案、效果等组成要素，其中关键要素是模式名称、问题、解决方案和效果。模式名称(Pattern Name)通过一两个词来描述模式的问题、解决方案和效果，以便更好地理解模式并方便开发人员之间的交流，绝大多数模式都是根据其功能或模式结构来命名的（GoF设计模式中没有一个模式用人名命名，微笑）；问题(Problem)描述了应该在何时使用模式，它包含了设计中存在的问题以及问题存在的原因；解决方案(Solution)描述了一个设计模式的组成成分，以及这些组成成分之间的相互关系，各自的职责和协作方式，通常解决方案通过UML类图和核心代码来进行描述；效果(Consequences)描述了模式的优缺点以及在使用模式时应权衡的问题。")]),t._v(" "),v("p",[t._v("虽然GoF设计模式只有23个，但是它们各具特色，每个模式都为某一个可重复的设计问题提供了一套解决方案。根据它们的用途，设计模式可分为创建型(Creational)，结构型(Structural)和行为型(Behavioral)三种，其中创建型模式主要用于描述如何创建对象，结构型模式主要用于描述如何实现类或对象的组合，行为型模式主要用于描述类或对象怎样交互以及怎样分配职责，在GoF 23种设计模式中包含5种创建型设计模式、7种结构型设计模式和11种行为型设计模式。此外，根据某个模式主要是用于处理类之间的关系还是对象之间的关系，设计模式还可以分为类模式和对象模式。我们经常将两种分类方式结合使用，如单例模式是对象创建型模式，模板方法模式是类行为型模式。")]),t._v(" "),v("p",[t._v("值得一提的是，有一个设计模式虽然不属于GoF 23种设计模式，但一般在介绍设计模式时都会对它进行说明，它就是简单工厂模式，也许是太“简单”了，GoF并没有把它写到那本经典著作中，不过现在大部分的设计模式书籍都会对它进行专门的介绍。")]),t._v(" "),v("p",[t._v("表1列出将要介绍的24种设计模式，其中模式的学习难度是我个人在多年模式使用和推广过程中的经验总结，仅作参考，模式的使用频率来自著名的模式推广和教育网站——http://www.dofactory.net。")]),t._v(" "),v("p",[t._v("表1  常用设计模式一览表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("模式名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("学习难度")]),t._v(" "),v("th",[t._v("使用频率")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("创建型模式 Creational   Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("单例模式 Singleton Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★☆☆☆☆")]),t._v(" "),v("td",[t._v("★★★★☆")])]),t._v(" "),v("tr",[v("td",[t._v("创建型模式 Creational Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("简单工厂模式 Simple   Factory Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★☆☆☆")]),t._v(" "),v("td",[t._v("★★★☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("创建型模式 Creational Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("工厂方法模式 Factory Method Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★☆☆☆")]),t._v(" "),v("td",[t._v("★★★★★")])]),t._v(" "),v("tr",[v("td",[t._v("创建型模式 Creational Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("抽象工厂模式 Abstract  Factory   Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★★☆")]),t._v(" "),v("td",[t._v("★★★★★")])]),t._v(" "),v("tr",[v("td",[t._v("创建型模式 Creational Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("原型模式 Prototype Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("创建型模式 Creational Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("建造者模式 Builder Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★★☆")]),t._v(" "),v("td",[t._v("★★☆☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("结构型模式 Structural Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("适配器模式 Adapter Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★☆☆☆")]),t._v(" "),v("td",[t._v("★★★★☆")])]),t._v(" "),v("tr",[v("td",[t._v("结构型模式 Structural Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("桥接模式 Bridge  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("结构型模式 Structural Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("组合模式 Composite  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★★☆")])]),t._v(" "),v("tr",[v("td",[t._v("结构型模式 Structural Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("装饰模式 Decorator  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("结构型模式 Structural Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("外观模式 Façade  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★☆☆☆☆")]),t._v(" "),v("td",[t._v("★★★★★")])]),t._v(" "),v("tr",[v("td",[t._v("结构型模式 Structural Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("享元模式 Flyweight  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★★☆")]),t._v(" "),v("td",[t._v("★☆☆☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("结构型模式 Structural Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("代理模式 Proxy  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★★☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("职责链模式 Chain  of Responsibility   Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★☆☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("命令模式 Command  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★★☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("解释器模式 Interpreter  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★★★")]),t._v(" "),v("td",[t._v("★☆☆☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("迭代器模式 Iterator  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★★★")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("中介者模式 Mediator  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★☆☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("备忘录模式 Memento  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★☆☆☆")]),t._v(" "),v("td",[t._v("★★☆☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("观察者模式 Observer  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★★★")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("状态模式 State  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★☆☆")]),t._v(" "),v("td",[t._v("★★★☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("策略模式 Strategy  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★☆☆☆☆")]),t._v(" "),v("td",[t._v("★★★★☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("模板方法模式 Template  Method Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★☆☆☆")]),t._v(" "),v("td",[t._v("★★★☆☆")])]),t._v(" "),v("tr",[v("td",[t._v("行为型模式 Behavioral Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("访问者模式 Visitor  Pattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("★★★★☆")]),t._v(" "),v("td",[t._v("★☆☆☆☆")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);