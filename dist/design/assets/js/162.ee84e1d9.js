(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{508:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面向对象设计原则之单一职责原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象设计原则之单一职责原则"}},[t._v("#")]),t._v(" 面向对象设计原则之单一职责原则")]),t._v(" "),a("p",[t._v("单一职责原则是最简单的面向对象设计原则，它用于控制类的粒度大小。单一职责原则定义如下：\n单一职责原则(Single Responsibility Principle, SRP)：一个类只负责一个功能领域中的相应职责，或者可以定义为：就一个类而言，应该只有一个引起它变化的原因。")]),t._v(" "),a("p",[t._v("单一职责原则告诉我们：一个类不能太“累”！在软件系统中，一个类（大到模块，小到方法）承担的职责越多，它被复用的可能性就越小，而且一个类承担的职责过多，就相当于将这些职责耦合在一起，当其中一个职责变化时，可能会影响其他职责的运作，因此要将这些职责进行分离，将不同的职责封装在不同的类中，即将不同的变化原因封装在不同的类中，如果多个职责总是同时发生改变则可将它们封装在同一类中。")]),t._v(" "),a("p",[t._v("单一职责原则是实现高内聚、低耦合的指导方针，它是最简单但又最难运用的原则，需要设计人员发现类的不同职责并将其分离，而发现类的多重职责需要设计人员具有较强的分析设计能力和相关实践经验。")]),t._v(" "),a("p",[t._v("下面通过一个简单实例来进一步分析单一职责原则：")]),t._v(" "),a("p",[t._v("Sunny软件公司开发人员针对某CRM（Customer Relationship  Management，客户关系管理）系统中客户信息图形统计模块提出了如图1所示初始设计方案：")]),t._v(" "),a("p",[t._v("图1  初始设计方案结构图")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://my.csdn.net/uploads/201205/05/1336147233_3529.jpg",alt:""}})]),t._v(" "),a("p",[t._v("在图1中，CustomerDataChart类中的方法说明如下：getConnection()方法用于连接数据库，findCustomers()用于查询所有的客户信息，createChart()用于创建图表，displayChart()用于显示图表。")]),t._v(" "),a("p",[t._v("现使用单一职责原则对其进行重构。")]),t._v(" "),a("p",[t._v("在图1中，CustomerDataChart类承担了太多的职责，既包含与数据库相关的方法，又包含与图表生成和显示相关的方法。如果在其他类中也需要连接数据库或者使用findCustomers()方法查询客户信息，则难以实现代码的重用。无论是修改数据库连接方式还是修改图表显示方式都需要修改该类，它不止一个引起它变化的原因，违背了单一职责原则。因此需要对该类进行拆分，使其满足单一职责原则，类CustomerDataChart可拆分为如下三个类：")]),t._v(" "),a("p",[t._v("(1) DBUtil：负责连接数据库，包含数据库连接方法getConnection()；")]),t._v(" "),a("p",[t._v("(2) CustomerDAO：负责操作数据库中的Customer表，包含对Customer表的增删改查等方法，如findCustomers()；")]),t._v(" "),a("p",[t._v("(3) CustomerDataChart：负责图表的生成和显示，包含方法createChart()和displayChart()。")]),t._v(" "),a("p",[t._v("使用单一职责原则重构后的结构如图2所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://my.csdn.net/uploads/201205/05/1336147240_4896.jpg",alt:""}})]),t._v(" "),a("p",[t._v("图2  重构后的结构图")])])}),[],!1,null,null,null);e.default=r.exports}}]);