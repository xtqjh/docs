(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{445:function(a,n,t){"use strict";t.r(n);var e=t(42),s=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"模板方法模式深度解析-三"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板方法模式深度解析-三"}},[a._v("#")]),a._v(" 模板方法模式深度解析（三）")]),a._v(" "),t("p",[a._v("4 钩子方法的使用")]),a._v(" "),t("p",[a._v("模板方法模式中，在父类中提供了一个定义算法框架的模板方法，还提供了一系列抽象方法、具体方法和钩子方法，其中钩子方法的引入使得子类可以控制父类的行为。最简单的钩子方法就是空方法，代码如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("public virtual void Display() {   }  \n")])])]),t("p",[a._v("当然也可以在钩子方法中定义一个默认的实现，如果子类不覆盖钩子方法，则执行父类的默认实现代码。")]),a._v(" "),t("p",[a._v("另一种钩子方法可以实现对其他方法进行约束，这种钩子方法通常返回一个bool类型，即返回true或false，用来判断是否执行某一个基本方法，下面通过一个实例来说明这种钩子方法的使用。")]),a._v(" "),t("p",[a._v("某软件公司欲为销售管理系统提供一个数据图表显示功能，该功能的实现包括如下几个步骤：")]),a._v(" "),t("p",[a._v("(1) 从数据源获取数据；")]),a._v(" "),t("p",[a._v("(2) 将数据转换为XML格式；")]),a._v(" "),t("p",[a._v("(3) 以某种图表方式显示XML格式的数据。")]),a._v(" "),t("p",[a._v("该功能支持多种数据源和多种图表显示方式，但所有的图表显示操作都基于XML格式的数据，因此可能需要对数据进行转换，如果从数据源获取的数据已经是XML数据则无须转换。")]),a._v(" "),t("p",[a._v("由于该数据图表显示功能的三个步骤次序是固定的，且存在公共代码（例如数据格式转换代码），满足模板方法模式的适用条件，可以使用模板方法模式对其进行设计。因为数据格式的不同，XML数据可以直接显示，而其他格式的数据需要进行转换，因此第(2)步“将数据转换为XML格式”的执行存在不确定性，为了解决这个问题，可以定义一个钩子方法IsNotXMLData()来对数据转换方法进行控制。通过分析，该图表显示功能的基本结构如图4所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://img.my.csdn.net/uploads/201212/15/1355579556_7922.jpg",alt:""}})]),a._v(" "),t("p",[a._v("图4  数据图表显示功能结构图")]),a._v(" "),t("p",[a._v("可以将公共方法和框架代码放在抽象父类中，代码如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('//DataViewer.cs  \nusing System;  \n  \nnamespace TemplateMethodSample  \n{  \n    abstract class DataViewer  \n    {  \n        //抽象方法：获取数据  \n        public abstract void GetData();  \n  \n        //具体方法：转换数据  \n        public void ConvertData()   \n        {  \n            Console.WriteLine("将数据转换为XML格式。");  \n        }  \n  \n        //抽象方法：显示数据  \n        public abstract void DisplayData();  \n  \n        //钩子方法：判断是否为XML格式的数据  \n        public virtual bool IsNotXMLData()  \n        {  \n            return true;  \n        }  \n  \n        //模板方法  \n        public void Process()  \n        {  \n            GetData();  \n            //如果不是XML格式的数据则进行数据转换  \n            if (IsNotXMLData())  \n            {  \n                ConvertData();  \n            }  \n            DisplayData();  \n        }  \n    }  \n}  \n')])])]),t("p",[a._v("在上面的代码中，引入了一个钩子方法IsNotXMLData()，其返回类型为bool类型，在模板方法中通过它来对数据转换方法ConvertData()进行约束，该钩子方法的默认返回值为true，在子类中可以根据实际情况覆盖该方法，其中用于显示XML格式数据的具体子类XMLDataViewer代码如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('//XMLDataViewer.cs  \nusing System;  \n  \nnamespace TemplateMethodSample  \n{  \n    class XMLDataViewer : DataViewer  \n    {  \n        //实现父类方法：获取数据  \n        public override void GetData()   \n        {  \n            Console.WriteLine("从XML文件中获取数据。");  \n        }  \n  \n        //实现父类方法：显示数据，默认以柱状图方式显示，可结合桥接模式来改进  \n        public override void DisplayData()   \n        {  \n            Console.WriteLine("以柱状图显示数据。");  \n        }  \n  \n        //覆盖父类的钩子方法  \n        public override bool IsNotXMLData()  \n        {  \n            return false;  \n        }  \n    }  \n}  \n')])])]),t("p",[a._v("在具体子类XMLDataViewer中覆盖了钩子方法IsNotXMLData()，返回false，表示该数据已为XML格式，无须执行数据转换方法ConvertData()，客户端代码如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//Program.cs  \nusing System;  \n  \nnamespace TemplateMethodSample  \n{  \n    class Program  \n    {  \n        static void Main(string[] args)  \n        {  \n            DataViewer dv;  \n            dv = new XMLDataViewer();  \n            dv.Process();  \n            Console.Read();  \n        }  \n    }  \n}  \n")])])]),t("p",[a._v("该程序运行结果如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("从XML文件中获取数据。\n以柱状图显示数据。\n")])])]),t("p",[a._v("5 模板方法模式效果与适用场景")]),a._v(" "),t("p",[a._v("模板方法模式是基于继承的代码复用技术，它体现了面向对象的诸多重要思想，是一种使用较为频繁的模式。模板方法模式广泛应用于框架设计中，以确保通过父类来控制处理流程的逻辑顺序（如框架的初始化，测试流程的设置等）。")]),a._v(" "),t("p",[a._v("5.1 模式优点")]),a._v(" "),t("p",[a._v("模板方法模式的主要优点如下：")]),a._v(" "),t("p",[a._v("(1) 在父类中形式化地定义一个算法，而由它的子类来实现细节的处理，在子类实现详细的处理算法时并不会改变算法中步骤的执行次序。")]),a._v(" "),t("p",[a._v("(2) 模板方法模式是一种代码复用技术，它在类库设计中尤为重要，它提取了类库中的公共行为，将公共行为放在父类中，而通过其子类来实现不同的行为，它鼓励我们恰当使用继承来实现代码复用。")]),a._v(" "),t("p",[a._v("(3) 可实现一种反向控制结构，通过子类覆盖父类的钩子方法来决定某一特定步骤是否需要执行。")]),a._v(" "),t("p",[a._v("(4) 在模板方法模式中可以通过子类来覆盖父类的基本方法，不同的子类可以提供基本方法的不同实现，更换和增加新的子类很方便，符合单一职责原则和开闭原则。")]),a._v(" "),t("p",[a._v("5.2 模式缺点")]),a._v(" "),t("p",[a._v("模板方法模式的主要缺点如下：")]),a._v(" "),t("p",[a._v("需要为每一个基本方法的不同实现提供一个子类，如果父类中可变的基本方法太多，将会导致类的个数增加，系统更加庞大，设计也更加抽象，此时，可结合桥接模式来进行设计。")]),a._v(" "),t("p",[a._v("5.3 模式适用场景")]),a._v(" "),t("p",[a._v("在以下情况下可以考虑使用模板方法模式：")]),a._v(" "),t("p",[a._v("(1) 对一些复杂的算法进行分割，将其算法中固定不变的部分设计为模板方法和父类具体方法，而一些可以改变的细节由其子类来实现。即：一次性实现一个算法的不变部分，并将可变的行为留给子类来实现。")]),a._v(" "),t("p",[a._v("(2) 各子类中公共的行为应被提取出来并集中到一个公共父类中以避免代码重复。")]),a._v(" "),t("p",[a._v("(3) 需要通过子类来决定父类算法中某个步骤是否执行，实现子类对父类的反向控制。")])])}),[],!1,null,null,null);n.default=s.exports}}]);