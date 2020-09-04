(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{409:function(t,a,r){"use strict";r.r(a);var e=r(42),c=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"工厂三兄弟之工厂方法模式-二"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工厂三兄弟之工厂方法模式-二"}},[t._v("#")]),t._v(" 工厂三兄弟之工厂方法模式（二）")]),t._v(" "),r("p",[t._v("2 工厂方法模式概述")]),t._v(" "),r("p",[t._v("在简单工厂模式中只提供一个工厂类，该工厂类处于对产品类进行实例化的中心位置，它需要知道每一个产品对象的创建细节，并决定何时实例化哪一个产品类。简单工厂模式最大的缺点是当有新产品要加入到系统中时，必须修改工厂类，需要在其中加入必要的业务逻辑，这违背了“开闭原则”。此外，在简单工厂模式中，所有的产品都由同一个工厂创建，工厂类职责较重，业务逻辑较为复杂，具体产品与工厂类之间的耦合度高，严重影响了系统的灵活性和扩展性，而工厂方法模式则可以很好地解决这一问题。")]),t._v(" "),r("p",[t._v("在工厂方法模式中，我们不再提供一个统一的工厂类来创建所有的产品对象，而是针对不同的产品提供不同的工厂，系统提供一个与产品等级结构对应的工厂等级结构。工厂方法模式定义如下：")]),t._v(" "),r("p",[t._v("工厂方法模式(Factory Method Pattern)：定义一个用于创建对象的接口，让子类决定将哪一个类实例化。工厂方法模式让一个类的实例化延迟到其子类。工厂方法模式又简称为工厂模式(Factory Pattern)，又可称作虚拟构造器模式(Virtual Constructor Pattern)或多态工厂模式(Polymorphic Factory Pattern)。工厂方法模式是一种类创建型模式。")]),t._v(" "),r("p",[t._v("工厂方法模式提供一个抽象工厂接口来声明抽象工厂方法，而由其子类来具体实现工厂方法，创建具体的产品对象。工厂方法模式结构如图2所示：")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://img.blog.csdn.net/20130712101002890?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTG92ZUxpb24=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),t._v(" "),r("p",[t._v("图2 工厂方法模式结构图")]),t._v(" "),r("p",[t._v("在工厂方法模式结构图中包含如下几个角色：")]),t._v(" "),r("p",[t._v("● Product（抽象产品）：它是定义产品的接口，是工厂方法模式所创建对象的超类型，也就是产品对象的公共父类。")]),t._v(" "),r("p",[t._v("● ConcreteProduct（具体产品）：它实现了抽象产品接口，某种类型的具体产品由专门的具体工厂创建，具体工厂和具体产品之间一一对应。")]),t._v(" "),r("p",[t._v("● Factory（抽象工厂）：在抽象工厂类中，声明了工厂方法(Factory Method)，用于返回一个产品。抽象工厂是工厂方法模式的核心，所有创建对象的工厂类都必须实现该接口。")]),t._v(" "),r("p",[t._v("● ConcreteFactory（具体工厂）：它是抽象工厂类的子类，实现了抽象工厂中定义的工厂方法，并可由客户端调用，返回一个具体产品类的实例。")]),t._v(" "),r("p",[t._v("与简单工厂模式相比，工厂方法模式最重要的区别是引入了抽象工厂角色，抽象工厂可以是接口，也可以是抽象类或者具体类，其典型代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("interface Factory {  \n    public Product factoryMethod();  \n}  \n")])])]),r("p",[t._v("在抽象工厂中声明了工厂方法但并未实现工厂方法，具体产品对象的创建由其子类负责，客户端针对抽象工厂编程，可在运行时再指定具体工厂类，具体工厂类实现了工厂方法，不同的具体工厂可以创建不同的具体产品，其典型代码如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("class ConcreteFactory implements Factory {  \n    public Product factoryMethod() {  \n        return new ConcreteProduct();  \n    }  \n}  \n")])])]),r("p",[t._v("在实际使用时，具体工厂类在实现工厂方法时除了创建具体产品对象之外，还可以负责产品对象的初始化工作以及一些资源和环境配置工作，例如连接数据库、创建文件等。")]),t._v(" "),r("p",[t._v("在客户端代码中，只需关心工厂类即可，不同的具体工厂可以创建不同的产品，典型的客户端类代码片段如下所示：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("……  \nFactory factory;  \nfactory = new ConcreteFactory(); //可通过配置文件实现  \nProduct product;  \nproduct = factory.factoryMethod();  \n……  \n")])])]),r("p",[t._v("可以通过配置文件来存储具体工厂类ConcreteFactory的类名，更换新的具体工厂时无须修改源代码，系统扩展更为方便。")]),t._v(" "),r("p",[t._v("思考")]),t._v(" "),r("blockquote",[r("p",[t._v("工厂方法模式中的工厂方法能否为静态方法？为什么？")])])])}),[],!1,null,null,null);a.default=c.exports}}]);