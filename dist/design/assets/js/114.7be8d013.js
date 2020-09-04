(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{460:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"算法的封装与切换-策略模式-二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法的封装与切换-策略模式-二"}},[t._v("#")]),t._v(" 算法的封装与切换——策略模式（二）")]),t._v(" "),e("p",[t._v("24.2 策略模式概述")]),t._v(" "),e("p",[t._v("在策略模式中，我们可以定义一些独立的类来封装不同的算法，每一个类封装一种具体的算法，在这里，每一个封装算法的类我们都可以称之为一种策略(Strategy)，为了保证这些策略在使用时具有一致性，一般会提供一个抽象的策略类来做规则的定义，而每种算法则对应于一个具体策略类。")]),t._v(" "),e("p",[t._v("策略模式的主要目的是将算法的定义与使用分开，也就是将算法的行为和环境分开，将算法的定义放在专门的策略类中，每一个策略类封装了一种实现算法，使用算法的环境类针对抽象策略类进行编程，符合“依赖倒转原则”。在出现新的算法时，只需要增加一个新的实现了抽象策略类的具体策略类即可。策略模式定义如下：\n策略模式(Strategy Pattern)：定义一系列算法类，将每一个算法封装起来，并让它们可以相互替换，策略模式让算法独立于使用它的客户而变化，也称为政策模式(Policy)。策略模式是一种对象行为型模式。")]),t._v(" "),e("p",[t._v("策略模式结构并不复杂，但我们需要理解其中环境类Context的作用，其结构如图24-1所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://my.csdn.net/uploads/201208/01/1343811032_3729.jpg",alt:""}})]),t._v(" "),e("p",[t._v("在策略模式结构图中包含如下几个角色：")]),t._v(" "),e("p",[t._v("● Context（环境类）：环境类是使用算法的角色，它在解决某个问题（即实现某个方法）时可以采用多种策略。在环境类中维持一个对抽象策略类的引用实例，用于定义所采用的策略。")]),t._v(" "),e("p",[t._v("● Strategy（抽象策略类）：它为所支持的算法声明了抽象方法，是所有策略类的父类，它可以是抽象类或具体类，也可以是接口。环境类通过抽象策略类中声明的方法在运行时调用具体策略类中实现的算法。")]),t._v(" "),e("p",[t._v("● ConcreteStrategy（具体策略类）：它实现了在抽象策略类中声明的算法，在运行时，具体策略类将覆盖在环境类中定义的抽象策略类对象，使用一种具体的算法实现某个业务处理。")]),t._v(" "),e("p",[e("strong",[t._v("思考")])]),t._v(" "),e("p",[t._v("一个环境类Context能否对应多个不同的策略等级结构？如何设计？")]),t._v(" "),e("p",[t._v("策略模式是一个比较容易理解和使用的设计模式，策略模式是对算法的封装，它把算法的责任和算法本身分割开，委派给不同的对象管理。策略模式通常把一个系列的算法封装到一系列具体策略类里面，作为抽象策略类的子类。在策略模式中，对环境类和抽象策略类的理解非常重要，环境类是需要使用算法的类。在一个系统中可以存在多个环境类，它们可能需要重用一些相同的算法。")]),t._v(" "),e("p",[t._v("在使用策略模式时，我们需要将算法从Context类中提取出来，首先应该创建一个抽象策略类，其典型代码如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("abstract class AbstractStrategy {  \n    public abstract void algorithm(); //声明抽象算法  \n}  \n")])])]),e("p",[t._v("然后再将封装每一种具体算法的类作为该抽象策略类的子类，如下代码所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class ConcreteStrategyA extends AbstractStrategy {  \n    //算法的具体实现  \n    public void algorithm() {  \n       //算法A  \n    }  \n}  \n")])])]),e("p",[t._v("其他具体策略类与之类似，对于Context类而言，在它与抽象策略类之间建立一个关联关系，其典型代码如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Context {  \nprivate AbstractStrategy strategy; //维持一个对抽象策略类的引用  \n  \n    public void setStrategy(AbstractStrategy strategy) {  \n        this.strategy= strategy;  \n    }  \n  \n    //调用策略类中的算法  \n    public void algorithm() {  \n        strategy.algorithm();  \n    }  \n}  \n")])])]),e("p",[t._v("在Context类中定义一个AbstractStrategy类型的对象strategy，通过注入的方式在客户端传入一个具体策略对象，客户端代码片段如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("……  \nContext context = new Context();  \nAbstractStrategy strategy;  \nstrategy = new ConcreteStrategyA(); //可在运行时指定类型  \ncontext.setStrategy(strategy);  \ncontext.algorithm();  \n……  \n")])])]),e("p",[t._v("在客户端代码中只需注入一个具体策略对象，可以将具体策略类类名存储在配置文件中，通过反射来动态创建具体策略对象，从而使得用户可以灵活地更换具体策略类，增加新的具体策略类也很方便。策略模式提供了一种可插入式(Pluggable)算法的实现方案。")])])}),[],!1,null,null,null);a.default=r.exports}}]);