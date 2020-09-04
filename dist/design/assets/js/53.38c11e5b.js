(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{399:function(n,t,e){"use strict";e.r(t);var l=e(42),o=Object(l.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"对象的克隆-原型模式-二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的克隆-原型模式-二"}},[n._v("#")]),n._v(" 对象的克隆——原型模式（二）")]),n._v(" "),e("p",[n._v("7.3 完整解决方案")]),n._v(" "),e("p",[n._v("Sunny公司开发人员决定使用原型模式来实现工作周报的快速创建，快速创建工作周报结构图如图7-3所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://my.csdn.net/uploads/201204/03/1333464523_7039.gif",alt:""}})]),n._v(" "),e("p",[n._v("图7-3 快速创建工作周报结构图")]),n._v(" "),e("p",[n._v("在图7-3中，WeeklyLog充当具体原型类，Object类充当抽象原型类，clone()方法为原型方法。WeeklyLog类的代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('//工作周报WeeklyLog：具体原型类，考虑到代码的可读性和易理解性，只列出部分与模式相关的核心代码\nclass WeeklyLog implements Cloneable\n{\n       private  String name;\n       private  String date;\n       private  String content;\n       public  void setName(String name) {\n              this.name  = name;\n       }\n       public  void setDate(String date) {\n              this.date  = date;\n       }\n       public  void setContent(String content) {\n              this.content  = content;\n       }\n       public  String getName() {\n              return  (this.name);\n       }\n       public  String getDate() {\n              return  (this.date);\n       }\n       public  String getContent() {\n              return  (this.content);\n       }\n     //克隆方法clone()，此处使用Java语言提供的克隆机制\n       public WeeklyLog clone()\n       {\n              Object obj = null;\n              try\n              {\n                     obj = super.clone();\n                     return (WeeklyLog)obj;     \n              }\n              catch(CloneNotSupportedException e)\n              {\n                     System.out.println("不支持复制！");\n                     return null;\n              }\n       }\n}\n\n')])])]),e("p",[n._v("编写如下客户端测试代码：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('class Client\n{\n       public  static void main(String args[])\n       {\n              WeeklyLog log_previous = new WeeklyLog();  //创建原型对象\n              log_previous.setName("张无忌");\n              log_previous.setDate("第12周");\n              log_previous.setContent("这周工作很忙，每天加班！");\n             \n              System.out.println("****周报****");\n              System.out.println("周次：" +  log_previous.getDate());\n              System.out.println("姓名：" +  log_previous.getName());\n              System.out.println("内容：" +  log_previous.getContent());\n              System.out.println("--------------------------------");\n             \n              WeeklyLog  log_new;\n              log_new  = log_previous.clone(); //调用克隆方法创建克隆对象\n              log_new.setDate("第13周");\n              System.out.println("****周报****");\n              System.out.println("周次：" + log_new.getDate());\n              System.out.println("姓名：" + log_new.getName());\n              System.out.println("内容：" + log_new.getContent());\n       }\n}\n')])])]),e("p",[n._v("编译并运行程序，输出结果如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("****周报****\n周次：第12周\n姓名：张无忌\n内容：这周工作很忙，每天加班！\n--------------------------------\n****周报****\n周次：第13周\n姓名：张无忌\n内容：这周工作很忙，每天加班！\n\n")])])]),e("p",[n._v("通过已创建的工作周报可以快速创建新的周报，然后再根据需要修改周报，无须再从头开始创建。原型模式为工作流系统中任务单的快速生成提供了一种解决方案。")]),n._v(" "),e("p",[n._v("思考")]),n._v(" "),e("p",[n._v("如果在Client类的main()函数中增加如下几条语句：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("System.out.println(log_previous == log_new);\nSystem.out.println(log_previous.getDate() == log_new.getDate());\nSystem.out.println(log_previous.getName() == log_new.getName());\nSystem.out.println(log_previous.getContent() == log_new.getContent());\n")])])]),e("p",[n._v("预测这些语句的输出结果。")])])}),[],!1,null,null,null);t.default=o.exports}}]);