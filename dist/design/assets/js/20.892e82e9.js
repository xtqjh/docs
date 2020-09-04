(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{366:function(n,t,e){"use strict";e.r(t);var o=e(42),a=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"协调多个对象之间的交互-中介者模式-三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协调多个对象之间的交互-中介者模式-三"}},[n._v("#")]),n._v(" 协调多个对象之间的交互——中介者模式（三）")]),n._v(" "),e("p",[n._v("20.3 完整解决方案")]),n._v(" "),e("p",[n._v("为了协调界面组件对象之间的复杂交互关系，Sunny公司开发人员使用中介者模式来设计客户信息管理窗口，其结构示意图如图20-7所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://img.my.csdn.net/uploads/201301/08/1357652393_2992.jpg",alt:""}})]),n._v(" "),e("p",[n._v("图20-7 引入了中介者类的“客户信息管理窗口”结构示意图")]),n._v(" "),e("p",[n._v("图20-7只是一个重构之后的结构示意图，在具体实现时，为了确保系统具有更好的灵活性和可扩展性，我们需要定义抽象中介者和抽象组件类，其中抽象组件类是所有具体组件类的公共父类，完整类图如图20-8所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://img.my.csdn.net/uploads/201301/08/1357652403_1841.jpg",alt:""}})]),n._v(" "),e("p",[n._v("图20-8 重构后的“客户信息管理窗口”结构图")]),n._v(" "),e("p",[n._v("在图20-8中，Component充当抽象同事类，Button、List、ComboBox和TextBox充当具体同事类，Mediator充当抽象中介者类，ConcreteMediator充当具体中介者类，ConcreteMediator维持了对具体同事类的引用，为了简化ConcreteMediator类的代码，我们在其中只定义了一个Button对象和一个TextBox对象。完整代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('//抽象中介者  \nabstract class Mediator {  \n    public abstract void componentChanged(Component c);  \n}  \n  \n//具体中介者  \nclass ConcreteMediator extends Mediator {  \n    //维持对各个同事对象的引用  \n    public Button addButton;  \n    public List list;  \n    public TextBox userNameTextBox;  \n    public ComboBox cb;  \n  \n    //封装同事对象之间的交互  \n    public void componentChanged(Component c) {  \n        //单击按钮  \nif(c == addButton) {  \n            System.out.println("--单击增加按钮--");  \n            list.update();  \n            cb.update();  \n            userNameTextBox.update();  \n        }  \n        //从列表框选择客户  \n        else if(c == list) {  \n            System.out.println("--从列表框选择客户--");  \n            cb.select();  \n            userNameTextBox.setText();  \n        }  \n        //从组合框选择客户  \n        else if(c == cb) {  \n            System.out.println("--从组合框选择客户--");  \n            cb.select();  \n            userNameTextBox.setText();  \n        }  \n    }  \n}  \n  \n//抽象组件类：抽象同事类  \nabstract class Component {  \n    protected Mediator mediator;  \n      \n    public void setMediator(Mediator mediator) {  \n        this.mediator = mediator;  \n    }  \n  \n    //转发调用  \n    public void changed() {  \n        mediator.componentChanged(this);  \n    }  \n      \n    public abstract void update();    \n}  \n  \n//按钮类：具体同事类  \nclass Button extends Component {  \n    public void update() {  \n        //按钮不产生交互  \n    }  \n}  \n  \n//列表框类：具体同事类  \nclass List extends Component {  \n    public void update() {  \n        System.out.println("列表框增加一项：张无忌。");  \n    }  \n      \n    public void select() {  \n        System.out.println("列表框选中项：小龙女。");  \n    }  \n}  \n  \n//组合框类：具体同事类  \nclass ComboBox extends Component {  \n    public void update() {  \n        System.out.println("组合框增加一项：张无忌。");  \n    }  \n      \n    public void select() {  \n        System.out.println("组合框选中项：小龙女。");  \n    }  \n}  \n  \n//文本框类：具体同事类  \nclass TextBox extends Component {  \n    public void update() {  \n        System.out.println("客户信息增加成功后文本框清空。");  \n    }  \n      \n    public void setText() {  \n        System.out.println("文本框显示：小龙女。");  \n    }  \n}  \n')])])]),e("p",[n._v("编写如下客户端测试代码：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('class Client {  \n    public static void main(String args[]) {  \n        //定义中介者对象  \n        ConcreteMediator mediator;  \n        mediator = new ConcreteMediator();  \n          \n        //定义同事对象  \n        Button addBT = new Button();  \n        List list = new List();  \n        ComboBox cb = new ComboBox();  \n        TextBox userNameTB = new TextBox();  \n  \n        addBT.setMediator(mediator);  \n        list.setMediator(mediator);  \n        cb.setMediator(mediator);  \n        userNameTB.setMediator(mediator);  \n  \n        mediator.addButton = addBT;  \n        mediator.list = list;  \n        mediator.cb = cb;  \n        mediator.userNameTextBox = userNameTB;  \n          \n        addBT.changed();  \n        System.out.println("-----------------------------");  \n        list.changed();  \n    }  \n}  \n')])])]),e("p",[n._v("编译并运行程序，输出结果如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("--单击增加按钮--\n列表框增加一项：张无忌。\n组合框增加一项：张无忌。\n客户信息增加成功后文本框清空。\n-----------------------------\n--从列表框选择客户--\n组合框选中项：小龙女。\n文本框显示：小龙女。\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);