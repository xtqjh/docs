(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{407:function(e,n,r){"use strict";r.r(n);var t=r(42),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"工厂三兄弟之工厂方法模式-一"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工厂三兄弟之工厂方法模式-一"}},[e._v("#")]),e._v(" 工厂三兄弟之工厂方法模式（一）")]),e._v(" "),r("p",[e._v("简单工厂模式虽然简单，但存在一个很严重的问题。当系统中需要引入新产品时，由于静态工厂方法通过所传入参数的不同来创建不同的产品，这必定要修改工厂类的源代码，将违背“开闭原则”，如何实现增加新产品而不影响已有代码？工厂方法模式应运而生，本文将介绍第二种工厂模式——工厂方法模式。")]),e._v(" "),r("p",[e._v("1 日志记录器的设计")]),e._v(" "),r("p",[e._v("Sunny软件公司欲开发一个系统运行日志记录器(Logger)，该记录器可以通过多种途径保存系统的运行日志，如通过文件记录或数据库记录，用户可以通过修改配置文件灵活地更换日志记录方式。在设计各类日志记录器时，Sunny公司的开发人员发现需要对日志记录器进行一些初始化工作，初始化参数的设置过程较为复杂，而且某些参数的设置有严格的先后次序，否则可能会发生记录失败。如何封装记录器的初始化过程并保证多种记录器切换的灵活性是Sunny公司开发人员面临的一个难题。")]),e._v(" "),r("p",[e._v("Sunny公司的开发人员通过对该需求进行分析，发现该日志记录器有两个设计要点：")]),e._v(" "),r("p",[e._v("(1) 需要封装日志记录器的初始化过程，这些初始化工作较为复杂，例如需要初始化其他相关的类，还有可能需要读取配置文件（例如连接数据库或创建文件），导致代码较长，如果将它们都写在构造函数中，会导致构造函数庞大，不利于代码的修改和维护；")]),e._v(" "),r("p",[e._v("(2) 用户可能需要更换日志记录方式，在客户端代码中需要提供一种灵活的方式来选择日志记录器，尽量在不修改源代码的基础上更换或者增加日志记录方式。")]),e._v(" "),r("p",[e._v("Sunny公司开发人员最初使用简单工厂模式对日志记录器进行了设计，初始结构如图1所示：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://img.blog.csdn.net/20130712094545500?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTG92ZUxpb24=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),e._v(" "),r("p",[e._v("图1 基于简单工厂模式设计的日志记录器结构图")]),e._v(" "),r("p",[e._v("在图1中，LoggerFactory充当创建日志记录器的工厂，提供了工厂方法createLogger()用于创建日志记录器，Logger是抽象日志记录器接口，其子类为具体日志记录器。其中，工厂类LoggerFactory代码片段如下所示：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//日志记录器工厂  \nclass LoggerFactory {  \n    //静态工厂方法  \n    public static Logger createLogger(String args) {  \n        if(args.equalsIgnoreCase("db")) {  \n            //连接数据库，代码省略  \n            //创建数据库日志记录器对象  \n            Logger logger = new DatabaseLogger();   \n            //初始化数据库日志记录器，代码省略  \n            return logger;  \n        }  \n        else if(args.equalsIgnoreCase("file")) {  \n            //创建日志文件  \n            //创建文件日志记录器对象  \n            Logger logger = new FileLogger();   \n            //初始化文件日志记录器，代码省略  \n            return logger;            \n        }  \n        else {  \n            return null;  \n        }  \n    }  \n}  \n')])])]),r("p",[e._v("为了突出设计重点，我们对上述代码进行了简化，省略了具体日志记录器类的初始化代码。在LoggerFactory类中提供了静态工厂方法createLogger()，用于根据所传入的参数创建各种不同类型的日志记录器。通过使用简单工厂模式，我们将日志记录器对象的创建和使用分离，客户端只需使用由工厂类创建的日志记录器对象即可，无须关心对象的创建过程，但是我们发现，虽然简单工厂模式实现了对象的创建和使用分离，但是仍然存在如下两个问题：")]),e._v(" "),r("p",[e._v("(1) 工厂类过于庞大，包含了大量的if…else…代码，导致维护和测试难度增大；")]),e._v(" "),r("p",[e._v("(2) 系统扩展不灵活，如果增加新类型的日志记录器，必须修改静态工厂方法的业务逻辑，违反了“开闭原则”。")]),e._v(" "),r("p",[e._v("如何解决这两个问题，提供一种简单工厂模式的改进方案？这就是本文所介绍的工厂方法模式的动机之一。")])])}),[],!1,null,null,null);n.default=a.exports}}]);