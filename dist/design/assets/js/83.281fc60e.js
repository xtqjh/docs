(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{429:function(t,e,n){"use strict";n.r(e);var a=n(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"撤销功能的实现-备忘录模式-二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#撤销功能的实现-备忘录模式-二"}},[t._v("#")]),t._v(" 撤销功能的实现——备忘录模式（二）")]),t._v(" "),n("p",[t._v("21.2 备忘录模式概述")]),t._v(" "),n("p",[t._v("备忘录模式提供了一种状态恢复的实现机制，使得用户可以方便地回到一个特定的历史步骤，当新的状态无效或者存在问题时，可以使用暂时存储起来的备忘录将状态复原，当前很多软件都提供了撤销(Undo)操作，其中就使用了备忘录模式。")]),t._v(" "),n("p",[t._v("备忘录模式定义如下：")]),t._v(" "),n("blockquote",[n("p",[t._v("备忘录模式(Memento Pattern)：在不破坏封装的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，这样可以在以后将对象恢复到原先保存的状态。它是一种对象行为型模式，其别名为Token。")])]),t._v(" "),n("p",[t._v("备忘录模式的核心是备忘录类以及用于管理备忘录的负责人类的设计，其结构如图21-3所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://my.csdn.net/uploads/201205/02/1335891550_5966.jpg",alt:""}})]),t._v(" "),n("p",[t._v("在备忘录模式结构图中包含如下几个角色：")]),t._v(" "),n("p",[t._v("● Originator（原发器）：它是一个普通类，可以创建一个备忘录，并存储它的当前内部状态，也可以使用备忘录来恢复其内部状态，一般将需要保存内部状态的类设计为原发器。")]),t._v(" "),n("p",[t._v("●Memento（备忘录)：存储原发器的内部状态，根据原发器来决定保存哪些内部状态。备忘录的设计一般可以参考原发器的设计，根据实际需要确定备忘录类中的属性。需要注意的是，除了原发器本身与负责人类之外，备忘录对象不能直接供其他类使用，原发器的设计在不同的编程语言中实现机制会有所不同。")]),t._v(" "),n("p",[t._v("●Caretaker（负责人）：负责人又称为管理者，它负责保存备忘录，但是不能对备忘录的内容进行操作或检查。在负责人类中可以存储一个或多个备忘录对象，它只负责存储对象，而不能修改对象，也无须知道对象的实现细节。")]),t._v(" "),n("p",[t._v("理解备忘录模式并不难，但关键在于如何设计备忘录类和负责人类。由于在备忘录中存储的是原发器的中间状态，因此需要防止原发器以外的其他对象访问备忘录，特别是不允许其他对象来修改备忘录。")]),t._v(" "),n("p",[t._v("下面我们通过简单的示例代码来说明如何使用Java语言实现备忘录模式：")]),t._v(" "),n("p",[t._v("在使用备忘录模式时，首先应该存在一个原发器类Originator，在真实业务中，原发器类是一个具体的业务类，它包含一些用于存储成员数据的属性，典型代码如下所示：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package dp.memento;  \npublic class Originator {  \n    private String state;  \n  \n    public Originator(){}  \n  \n　　// 创建一个备忘录对象  \n    public Memento createMemento() {  \n　　　　return new Memento(this);  \n    }  \n  \n　　// 根据备忘录对象恢复原发器状态  \n    public void restoreMemento(Memento m) {  \n　　　　 state = m.state;  \n    }  \n  \n    public void setState(String state) {  \n        this.state=state;  \n    }  \n  \n    public String getState() {  \n        return this.state;  \n    }  \n}  \n")])])]),n("p",[t._v("对于备忘录类Memento而言，它通常提供了与原发器相对应的属性（可以是全部，也可以是部分）用于存储原发器的状态，典型的备忘录类设计代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package dp.memento;  \n//备忘录类，默认可见性，包内可见  \nclass Memento {  \n    private String state;  \n  \n    public Memento(Originator o) {  \n　　　　state = o.getState();  \n    }  \n  \n    public void setState(String state) {  \n        this.state=state;  \n    }  \n  \n    public String getState() {  \n        return this.state;  \n    }  \n}  \n")])])]),n("p",[t._v("在设计备忘录类时需要考虑其封装性，除了Originator类，不允许其他类来调用备忘录类Memento的构造函数与相关方法，如果不考虑封装性，允许其他类调用setState()等方法，将导致在备忘录中保存的历史状态发生改变，通过撤销操作所恢复的状态就不再是真实的历史状态，备忘录模式也就失去了本身的意义。")]),t._v(" "),n("p",[t._v("在使用Java语言实现备忘录模式时，一般通过将Memento类与Originator类定义在同一个包(package)中来实现封装，在Java语言中可使用默认访问标识符来定义Memento类，即保证其包内可见。只有Originator类可以对Memento进行访问，而限制了其他类对Memento的访问。在 Memento中保存了Originator的state值，如果Originator中的state值改变之后需撤销，可以通过调用它的restoreMemento()方法进行恢复。")]),t._v(" "),n("p",[t._v("对于负责人类Caretaker，它用于保存备忘录对象，并提供getMemento()方法用于向客户端返回一个备忘录对象，原发器通过使用这个备忘录对象可以回到某个历史状态。典型的负责人类的实现代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package dp.memento;  \npublic class Caretaker {  \n    private Memento memento;  \n  \n    public Memento getMemento() {  \n        return memento;  \n    }  \n  \n    public void setMemento(Memento memento) {  \n        this.memento=memento;  \n    }  \n}  \n")])])]),n("p",[t._v("在Caretaker类中不应该直接调用Memento中的状态改变方法，它的作用仅仅用于存储备忘录对象。将原发器备份生成的备忘录对象存储在其中，当用户需要对原发器进行恢复时再将存储在其中的备忘录对象取出。")]),t._v(" "),n("p",[t._v("思考")]),t._v(" "),n("blockquote",[n("p",[t._v("能否通过原型模式来创建备忘录对象？系统该如何设计？")])])])}),[],!1,null,null,null);e.default=r.exports}}]);