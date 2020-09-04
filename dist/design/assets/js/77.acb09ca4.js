(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{423:function(n,o,t){"use strict";t.r(o);var e=t(42),a=Object(e.a)({},(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"扩展系统功能-装饰模式-三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展系统功能-装饰模式-三"}},[n._v("#")]),n._v(" 扩展系统功能——装饰模式（三）")]),n._v(" "),t("p",[n._v("12.3 完整解决方案")]),n._v(" "),t("p",[n._v("为了让系统具有更好的灵活性和可扩展性，克服继承复用所带来的问题，Sunny公司开发人员使用装饰模式来重构图形界面构件库的设计，其中部分类的基本结构如图12-4所示：")]),n._v(" "),t("p",[t("img",{attrs:{src:"http://my.csdn.net/uploads/201204/04/1333528353_8435.gif",alt:""}})]),n._v(" "),t("p",[n._v("图12-4 图形界面构件库结构图")]),n._v(" "),t("p",[n._v("在图12-4中，Component充当抽象构件类，其子类Window、TextBox、ListBox充当具体构件类，Component类的另一个子类ComponentDecorator充当抽象装饰类，ComponentDecorator的子类ScrollBarDecorator和BlackBorderDecorator充当具体装饰类。完整代码如下所示：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('//抽象界面构件类：抽象构件类，为了突出与模式相关的核心代码，对原有控件代码进行了大量的简化\nabstract class Component\n{\n       public  abstract void display();\n}\n \n//窗体类：具体构件类\nclass Window extends Component\n{\n       public  void display()\n       {\n              System.out.println("显示窗体！");\n       }\n}\n \n//文本框类：具体构件类\nclass TextBox extends Component\n{\n       public  void display()\n       {\n              System.out.println("显示文本框！");\n       }\n}\n \n//列表框类：具体构件类\nclass ListBox extends Component\n{\n       public  void display()\n       {\n              System.out.println("显示列表框！");\n       }\n}\n \n//构件装饰类：抽象装饰类\nclass ComponentDecorator extends Component\n{\n       private Component component;  //维持对抽象构件类型对象的引用\n \n       public ComponentDecorator(Component  component)  //注入抽象构件类型的对象\n       {\n              this.component = component;\n       }\n \n       public void display()\n       {\n              component.display();\n       }\n}\n \n//滚动条装饰类：具体装饰类\nclass ScrollBarDecorator extends  ComponentDecorator\n{\n       public ScrollBarDecorator(Component  component)\n       {\n              super(component);\n       }\n \n       public void display()\n       {\n              this.setScrollBar();\n              super.display();\n       }\n \n       public  void setScrollBar()\n       {\n              System.out.println("为构件增加滚动条！");\n       }\n}\n \n//黑色边框装饰类：具体装饰类\nclass BlackBorderDecorator extends  ComponentDecorator\n{\n       public BlackBorderDecorator(Component  component)\n       {\n              super(component);\n       }\n \n       public void display()\n       {\n              this.setBlackBorder();\n              super.display();\n       }\n \n       public  void setBlackBorder()\n       {\n              System.out.println("为构件增加黑色边框！");\n       }\n}\n')])])]),t("p",[n._v("编写如下客户端测试代码：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Client\n{\n       public  static void main(String args[])\n       {\n              Component component,componentSB;  //使用抽象构件定义\n              component = new Window(); //定义具体构件\n              componentSB = new  ScrollBarDecorator(component); //定义装饰后的构件\n              componentSB.display();\n       }\n}\n")])])]),t("p",[n._v("编译并运行程序，输出结果如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("为构件增加滚动条！\n显示窗体！\n")])])]),t("p",[n._v("在客户端代码中，我们先定义了一个Window类型的具体构件对象component，然后将component作为构造函数的参数注入到具体装饰类ScrollBarDecorator中，得到一个装饰之后对象componentSB，再调用componentSB的display()方法后将得到一个有滚动条的窗体。如果我们希望得到一个既有滚动条又有黑色边框的窗体，不需要对原有类库进行任何修改，只需将客户端代码修改为如下所示：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Client\n{\n       public  static void main(String args[])\n       {\n              Component  component,componentSB,componentBB; //全部使用抽象构件定义\n              component = new Window();\n              componentSB = new  ScrollBarDecorator(component);\n              componentBB = new  BlackBorderDecorator(componentSB); //将装饰了一次之后的对象继续注入到另一个装饰类中，进行第二次装饰\n              componentBB.display();\n       }\n}\n")])])]),t("p",[n._v("编译并运行程序，输出结果如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("为构件增加黑色边框！\n为构件增加滚动条！\n显示窗体！\n")])])]),t("p",[n._v("我们可以将装饰了一次之后的componentSB对象注入另一个装饰类BlackBorderDecorator中实现第二次装饰，得到一个经过两次装饰的对象componentBB，再调用componentBB的display()方法即可得到一个既有滚动条又有黑色边框的窗体。")]),n._v(" "),t("p",[n._v("如果需要在原有系统中增加一个新的具体构件类或者新的具体装饰类，无须修改现有类库代码，只需将它们分别作为抽象构件类或者抽象装饰类的子类即可。与图12-2所示的继承结构相比，使用装饰模式之后将大大减少了子类的个数，让系统扩展起来更加方便，而且更容易维护，是取代继承复用的有效方式之一。")])])}),[],!1,null,null,null);o.default=a.exports}}]);