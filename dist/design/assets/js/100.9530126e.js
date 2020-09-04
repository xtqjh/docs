(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{446:function(n,t,a){"use strict";a.r(t);var e=a(42),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"模板方法模式深度解析-二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板方法模式深度解析-二"}},[n._v("#")]),n._v(" 模板方法模式深度解析（二）")]),n._v(" "),a("p",[n._v("3 模板方法模式应用实例")]),n._v(" "),a("p",[n._v("下面通过一个应用实例来进一步学习和理解模板方法模式。")]),n._v(" "),a("ol",[a("li",[n._v("实例说明")])]),n._v(" "),a("p",[n._v("某软件公司欲为某银行的业务支撑系统开发一个利息计算模块，利息计算流程如下：")]),n._v(" "),a("p",[n._v("(1) 系统根据账号和密码验证用户信息，如果用户信息错误，系统显示出错提示；")]),n._v(" "),a("p",[n._v("(2) 如果用户信息正确，则根据用户类型的不同使用不同的利息计算公式计算利息（如活期账户和定期账户具有不同的利息计算公式）；")]),n._v(" "),a("p",[n._v("(3) 系统显示利息。")]),n._v(" "),a("p",[n._v("试使用模板方法模式设计该利息计算模块。")]),n._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[n._v("实例类图")])]),n._v(" "),a("p",[n._v("通过分析，本实例结构图如图3所示。")]),n._v(" "),a("p",[a("img",{attrs:{src:"http://img.my.csdn.net/uploads/201212/15/1355577976_2992.jpg",alt:""}})]),n._v(" "),a("p",[n._v("图3 银行利息计算模块结构图")]),n._v(" "),a("p",[n._v("在图3中，Account充当抽象类角色，CurrentAccount和SavingAccount充当具体子类角色。")]),n._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[n._v("实例代码")])]),n._v(" "),a("p",[n._v("(1) Account：账户类，充当抽象类。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('//Account.cs  \nusing System;  \n  \nnamespace TemplateMethodSample  \n{  \n    abstract class Account  \n    {  \n        //基本方法——具体方法  \n        public bool Validate(string account, string password)   \n        {  \n            Console.WriteLine("账号：{0}", account);  \n            Console.WriteLine("密码：{0}", password);  \n            //模拟登录  \n            if (account.Equals("张无忌") && password.Equals("123456"))   \n            {  \n                return true;  \n            }  \n            else   \n            {  \n                return false;  \n            }  \n        }  \n  \n        //基本方法——抽象方法  \n        public abstract void CalculateInterest();  \n  \n        //基本方法——具体方法  \n        public void Display()   \n        {  \n            Console.WriteLine("显示利息！");  \n        }  \n  \n        //模板方法  \n        public void Handle(string account, string password)   \n        {  \n            if (!Validate(account,password))   \n            {  \n                Console.WriteLine("账户或密码错误！");  \n                return;  \n            }  \n            CalculateInterest();  \n            Display();  \n        }  \n    }  \n}  \n')])])]),a("p",[n._v("(2) CurrentAccount：活期账户类，充当具体子类。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('//CurrentAccount.cs  \nusing System;  \n  \nnamespace TemplateMethodSample  \n{  \n    class CurrentAccount : Account  \n    {  \n        //覆盖父类的抽象基本方法  \n        public override void CalculateInterest()   \n        {  \n            Console.WriteLine("按活期利率计算利息！");  \n        }  \n    }  \n}  \n')])])]),a("p",[n._v("(3) SavingAccount：定期账户类，充当具体子类。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('//SavingAccount.cs  \nusing System;  \n  \nnamespace TemplateMethodSample  \n{  \n    class SavingAccount : Account  \n    {  \n        //覆盖父类的抽象基本方法  \n        public override void CalculateInterest()   \n        {  \n            Console.WriteLine("按定期利率计算利息！");  \n        }  \n    }  \n}  \n')])])]),a("p",[n._v("(4) 配置文件App.config，在配置文件中存储了具体子类的类名。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<?xml version="1.0" encoding="utf-8" ?>  \n<configuration>  \n  <appSettings>  \n    <add key="subClass" value="TemplateMethodSample.CurrentAccount"/>  \n  </appSettings>  \n</configuration>  \n')])])]),a("p",[n._v("(5) Program：客户端测试类")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('//Program.cs  \nusing System;  \nusing System.Configuration;  \nusing System.Reflection;  \n  \nnamespace TemplateMethodSample  \n{  \n    class Program  \n    {  \n        static void Main(string[] args)  \n        {  \n            Account account;  \n            //读取配置文件  \n            string subClassStr = ConfigurationManager.AppSettings["subClass"];  \n            //反射生成对象  \n            account = (Account)Assembly.Load("TemplateMethodSample").CreateInstance(subClassStr);  \n            account.Handle("张无忌", "123456");  \n            Console.Read();  \n        }  \n    }  \n}  \n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[n._v("结果及分析")])]),n._v(" "),a("p",[n._v("编译并运行程序，输出结果如下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("账号：张无忌\n密码：123456\n按活期利率计算利息！\n显示利息！\n")])])]),a("p",[n._v("如果需要更换具体子类，无须修改源代码，只需修改配置文件App.config，例如将活期账户(CurrentAccount)改为定期账户(Saving Account)，只需将存储在配置文件中的具体子类CurrentAccount改为SavingAccount，如下代码所示：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<?xml version="1.0" encoding="utf-8" ?>  \n<configuration>  \n  <appSettings>  \n    <add key="subClass" value="TemplateMethodSample.SavingAccount"/>  \n  </appSettings>  \n</configuration>  \n')])])]),a("p",[n._v("重新运行客户端程序，输出结果如下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("账号：张无忌\n密码：123456\n按定期利率计算利息！\n显示利息！\n")])])]),a("blockquote",[a("p",[n._v("如果需要增加新的具体子类（新的账户类型），原有代码均无须修改，完全符合开闭原则。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);