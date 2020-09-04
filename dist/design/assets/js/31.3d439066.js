(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{377:function(v,_,t){"use strict";t.r(_);var p=t(42),e=Object(p.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"处理多维度变化-桥接模式-四"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理多维度变化-桥接模式-四"}},[v._v("#")]),v._v(" 处理多维度变化——桥接模式（四）")]),v._v(" "),t("p",[v._v("10.4 适配器模式与桥接模式的联用")]),v._v(" "),t("p",[v._v("在软件开发中，适配器模式通常可以与桥接模式联合使用。适配器模式可以解决两个已有接口间不兼容问题，在这种情况下被适配的类往往是一个黑盒子，有时候我们不想也不能改变这个被适配的类，也不能控制其扩展。适配器模式通常用于现有系统与第三方产品功能的集成，采用增加适配器的方式将第三方类集成到系统中。桥接模式则不同，用户可以通过接口继承或类继承的方式来对系统进行扩展。")]),v._v(" "),t("p",[v._v("桥接模式和适配器模式用于设计的不同阶段，桥接模式用于系统的初步设计，对于存在两个独立变化维度的类可以将其分为抽象化和实现化两个角色，使它们可以分别进行变化；而在初步设计完成之后，当发现系统与已有类无法协同工作时，可以采用适配器模式。但有时候在设计初期也需要考虑适配器模式，特别是那些涉及到大量第三方应用接口的情况。")]),v._v(" "),t("p",[v._v("下面通过一个实例来说明适配器模式和桥接模式的联合使用：")]),v._v(" "),t("p",[v._v("在某系统的报表处理模块中，需要将报表显示和数据采集分开，系统可以有多种报表显示方式也可以有多种数据采集方式，如可以从文本文件中读取数据，也可以从数据库中读取数据，还可以从Excel文件中获取数据。如果需要从Excel文件中获取数据，则需要调用与Excel相关的API，而这个API是现有系统所不具备的，该API由厂商提供。使用适配器模式和桥接模式设计该模块。")]),v._v(" "),t("p",[v._v("在设计过程中，由于存在报表显示和数据采集两个独立变化的维度，因此可以使用桥接模式进行初步设计；为了使用Excel相关的API来进行数据采集则需要使用适配器模式。系统的完整设计中需要将两个模式联用，如图10-6所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://my.csdn.net/uploads/201204/16/1334507018_4999.gif",alt:""}})]),v._v(" "),t("p",[v._v("10.5 桥接模式总结")]),v._v(" "),t("p",[v._v("桥接模式是设计Java虚拟机和实现JDBC等驱动程序的核心模式之一，应用较为广泛。在软件开发中如果一个类或一个系统有多个变化维度时，都可以尝试使用桥接模式对其进行设计。桥接模式为多维度变化的系统提供了一套完整的解决方案，并且降低了系统的复杂度。\n1.主要优点")]),v._v(" "),t("p",[v._v("桥接模式的主要优点如下：")]),v._v(" "),t("p",[v._v("(1)分离抽象接口及其实现部分。桥接模式使用“对象间的关联关系”解耦了抽象和实现之间固有的绑定关系，使得抽象和实现可以沿着各自的维度来变化。所谓抽象和实现沿着各自维度的变化，也就是说抽象和实现不再在同一个继承层次结构中，而是“子类化”它们，使它们各自都具有自己的子类，以便任何组合子类，从而获得多维度组合对象。")]),v._v(" "),t("p",[v._v("(2)在很多情况下，桥接模式可以取代多层继承方案，多层继承方案违背了“单一职责原则”，复用性较差，且类的个数非常多，桥接模式是比多层继承方案更好的解决方法，它极大减少了子类的个数。")]),v._v(" "),t("p",[v._v("(3)桥接模式提高了系统的可扩展性，在两个变化维度中任意扩展一个维度，都不需要修改原有系统，符合“开闭原则”。")]),v._v(" "),t("p",[v._v("2.主要缺点")]),v._v(" "),t("p",[v._v("桥接模式的主要缺点如下：")]),v._v(" "),t("p",[v._v("(1)桥接模式的使用会增加系统的理解与设计难度，由于关联关系建立在抽象层，要求开发者一开始就针对抽象层进行设计与编程。")]),v._v(" "),t("p",[v._v("(2)桥接模式要求正确识别出系统中两个独立变化的维度，因此其使用范围具有一定的局限性，如何正确识别两个独立维度也需要一定的经验积累。")]),v._v(" "),t("p",[v._v("3.适用场景")]),v._v(" "),t("p",[v._v("在以下情况下可以考虑使用桥接模式：")]),v._v(" "),t("p",[v._v("(1)如果一个系统需要在抽象化和具体化之间增加更多的灵活性，避免在两个层次之间建立静态的继承关系，通过桥接模式可以使它们在抽象层建立一个关联关系。")]),v._v(" "),t("p",[v._v("(2)“抽象部分”和“实现部分”可以以继承的方式独立扩展而互不影响，在程序运行时可以动态将一个抽象化子类的对象和一个实现化子类的对象进行组合，即系统需要对抽象化角色和实现化角色进行动态耦合。")]),v._v(" "),t("p",[v._v("(3)一个类存在两个（或多个）独立变化的维度，且这两个（或多个）维度都需要独立进行扩展。")]),v._v(" "),t("p",[v._v("(4)对于那些不希望使用继承或因为多层继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。")]),v._v(" "),t("p",[v._v("练习")]),v._v(" "),t("blockquote",[t("p",[v._v("Sunny软件公司欲开发一个数据转换工具，可以将数据库中的数据转换成多种文件格式，例如txt、xml、pdf等格式，同时该工具需要支持多种不同的数据库。试使用桥接模式对其进行设计。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);