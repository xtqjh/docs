(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{479:function(e,n,r){"use strict";r.r(n);var a=r(42),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"设计模式之代理模式-二"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之代理模式-二"}},[e._v("#")]),e._v(" 设计模式之代理模式（二）")]),e._v(" "),r("p",[e._v("15.3 代理模式应用实例")]),e._v(" "),r("p",[e._v("下面通过一个应用实例来进一步学习和理解代理模式。")]),e._v(" "),r("ol",[r("li",[e._v("实例说明")])]),e._v(" "),r("p",[e._v("某软件公司承接了某信息咨询公司的收费商务信息查询系统的开发任务，该系统的基本需求如下：")]),e._v(" "),r("p",[e._v("(1) 在进行商务信息查询之前用户需要通过身份验证，只有合法用户才能够使用该查询系统；")]),e._v(" "),r("p",[e._v("(2) 在进行商务信息查询时系统需要记录查询日志，以便根据查询次数收取查询费用。")]),e._v(" "),r("p",[e._v("该软件公司开发人员已完成了商务信息查询模块的开发任务，现希望能够以一种松耦合的方式向原有系统增加身份验证和日志记录功能，客户端代码可以无区别地对待原始的商务信息查询模块和增加新功能之后的商务信息查询模块，而且可能在将来还要在该信息查询模块中增加一些新的功能。")]),e._v(" "),r("p",[e._v("试使用代理模式设计并实现该收费商务信息查询系统。")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("实例分析及类图")])]),e._v(" "),r("p",[e._v("通过分析，可以采用一种间接访问的方式来实现该商务信息查询系统的设计，在客户端对象和信息查询对象之间增加一个代理对象，让代理对象来实现身份验证和日志记录等功能，而无须直接对原有的商务信息查询对象进行修改，如图15-3所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://img.my.csdn.net/uploads/201211/26/1353943846_5465.jpg",alt:""}})]),e._v(" "),r("p",[e._v("图15-3 商务信息查询系统设计方案示意图")]),e._v(" "),r("p",[e._v("在图15-3中，客户端对象通过代理对象间接访问具有商务信息查询功能的真实对象，在代理对象中除了调用真实对象的商务信息查询功能外，还增加了身份验证和日志记录等功能。使用代理模式设计该商务信息查询系统，结构图如图15-4所示。")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://img.my.csdn.net/uploads/201211/26/1353943854_9883.jpg",alt:""}})]),e._v(" "),r("p",[e._v("图15-4 商务信息查询系统结构图")]),e._v(" "),r("p",[e._v("在图15-4中，业务类AccessValidator用于验证用户身份，业务类Logger用于记录用户查询日志，Searcher充当抽象主题角色，RealSearcher充当真实主题角色，ProxySearcher充当代理主题角色。")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("实例代码")])]),e._v(" "),r("p",[e._v("(1) AccessValidator：身份验证类，业务类，它提供方法Validate()来实现身份验证。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//AccessValidator.cs  \nusing System;  \n  \nnamespace ProxySample  \n{  \n    class AccessValidator  \n    {  \n        //模拟实现登录验证  \n        public bool Validate(string userId)   \n        {  \n            Console.WriteLine("在数据库中验证用户\'" + userId + "\'是否是合法用户？");  \n            if (userId.Equals("杨过")) {  \n                Console.WriteLine("\'{0}\'登录成功！",userId);  \n                return true;  \n            }  \n            else {  \n                Console.WriteLine("\'{0}\'登录失败！", userId);  \n                return false;  \n            }  \n        }  \n    }  \n}  \n')])])]),r("p",[e._v("(2) Logger：日志记录类，业务类，它提供方法Log()来保存日志。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//Logger.cs  \nusing System;  \n  \nnamespace ProxySample  \n{  \n    class Logger  \n    {  \n        //模拟实现日志记录  \n        public void Log(string userId) {  \n            Console.WriteLine(\"更新数据库，用户'{0}'查询次数加1！\",userId);  \n        }  \n    }  \n}  \n")])])]),r("p",[e._v("(3) Searcher：抽象查询类，充当抽象主题角色，它声明了DoSearch()方法。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//Searcher.cs  \nnamespace ProxySample  \n{  \n    interface Searcher  \n    {  \n        string DoSearch(string userId, string keyword);  \n    }  \n}  \n")])])]),r("p",[e._v("(4) RealSearcher：具体查询类，充当真实主题角色，它实现查询功能，提供方法DoSearch()来查询信息。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//RealSearcher.cs  \nusing System;  \n  \nnamespace ProxySample  \n{  \n    class RealSearcher : Searcher  \n    {  \n        //模拟查询商务信息  \n        public string DoSearch(string userId, string keyword) {  \n            Console.WriteLine(\"用户'{0}'使用关键词'{1}'查询商务信息！\",userId,keyword);  \n            return \"返回具体内容\";  \n        }  \n    }  \n}  \n")])])]),r("p",[e._v("(5) ProxySearcher：代理查询类，充当代理主题角色，它是查询代理，维持了对RealSearcher对象、AccessValidator对象和Logger对象的引用。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("//ProxySearcher.cs  \nnamespace ProxySample  \n{  \n    class ProxySearcher : Searcher  \n    {  \n        private RealSearcher searcher = new RealSearcher(); //维持一个对真实主题的引用  \n        private AccessValidator validator;  \n        private Logger logger;  \n  \n        public string DoSearch(string userId, string keyword)  \n        {  \n            //如果身份验证成功，则执行查询  \n            if (this.Validate(userId))  \n            {  \n                string result = searcher.DoSearch(userId, keyword); //调用真实主题对象的查询方法  \n                this.Log(userId); //记录查询日志  \n                return result; //返回查询结果  \n            }  \n            else  \n            {  \n                return null;  \n            }  \n        }  \n  \n        //创建访问验证对象并调用其Validate()方法实现身份验证  \n        public bool Validate(string userId)  \n        {  \n            validator = new AccessValidator();  \n            return validator.Validate(userId);  \n        }  \n  \n        //创建日志记录对象并调用其Log()方法实现日志记录  \n        public void Log(string userId)  \n        {  \n            logger = new Logger();  \n            logger.Log(userId);  \n        }  \n    }  \n}  \n")])])]),r("p",[e._v("(6) 配置文件App.config，在配置文件中存储了代理主题类类名。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<?xml version="1.0" encoding="utf-8" ?>  \n<configuration>  \n  <appSettings>  \n    <add key="proxy" value="ProxySample.ProxySearcher"/>  \n  </appSettings>  \n</configuration>  \n')])])]),r("p",[e._v("(7) Program：客户端测试类")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//Program.cs  \nusing System;  \nusing System.Configuration;  \nusing System.Reflection;  \n  \nnamespace ProxySample  \n{  \n    class Program  \n    {  \n        static void Main(string[] args)  \n        {  \n            //读取配置文件  \n            string proxy = ConfigurationManager.AppSettings["proxy"];  \n  \n            //反射生成对象，针对抽象编程，客户端无须分辨真实主题类和代理类  \n            Searcher searcher;  \n            searcher = (Searcher)Assembly.Load("ProxySample").CreateInstance(proxy);  \n  \n            String result = searcher.DoSearch("杨过", "玉女心经");  \n            Console.Read();  \n        }  \n    }  \n}  \n')])])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("结果及分析")])]),e._v(" "),r("p",[e._v("编译并运行程序，输出结果如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("在数据库中验证用户'杨过'是否是合法用户？\n'杨过'登录成功！\n用户'杨过'使用关键词'玉女心经'查询商务信息！\n更新数据库，用户'杨过'查询次数加1！\n")])])]),r("p",[e._v("本实例是保护代理和智能引用代理的应用实例，在代理类ProxySearcher中实现对真实主题类的权限控制和引用计数，如果需要在访问真实主题时增加新的访问控制机制和新功能，只需增加一个新的代理类，再修改配置文件，在客户端代码中使用新增代理类即可，源代码无须修改，符合开闭原则。")])])}),[],!1,null,null,null);n.default=s.exports}}]);