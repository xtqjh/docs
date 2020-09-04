(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{484:function(t,e,n){"use strict";n.r(e);var r=n(42),c=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"设计模式综合实例分析之数据库同步系统-二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计模式综合实例分析之数据库同步系统-二"}},[t._v("#")]),t._v(" 设计模式综合实例分析之数据库同步系统（二）")]),t._v(" "),n("p",[t._v("接“设计模式综合实例分析之数据库同步系统（一）“。")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("享元模式和单例模式")])]),t._v(" "),n("p",[t._v("在数据库同步系统中，抽象类DBObjectSynchronizer表示需要同步的数据库对象，对于不同的数据库对象类型，提供了不同的子类实现，在数据库同步时可能有多个线程在同时进行同步工作，为了节省系统资源，可以使用享元模式来共享DBObjectSynchroizer对象，提供了享元工厂类DBObjectSynchronizerFlyweightFactory，且享元工厂类使用单例模式实现，类图如图5所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://img.my.csdn.net/uploads/201303/14/1363225871_6194.jpg",alt:""}})]),t._v(" "),n("p",[t._v("图5 享元模式和单例模式实例类图")]),t._v(" "),n("p",[t._v("在图5中，DBObjectSynchronizerFlyweightFactory充当数据库对象同步执行者的享元工厂，同步对象执行类DBObjectSynchronizer充当抽象享元，其间接子类OracleDBlinkDBSynchronizer、OracleTableDBSynchronizer等充当具体享元（由于篇幅问题，未将所有数据库对象类一一列出）。")]),t._v(" "),n("p",[t._v("在实现DBObjectSynchronizerFlyweightFactory时使用了单例模式（饿汉式单例），其代码片段如下所示：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class DBObjectSynchronizerFlyweightFactory {\n\tprivate static DBObjectSynchronizerFlyweightFactory instance = new DBObjectSynchronizerFlyweightFactory();\n\tprivate Map<String, DBObjectSynchronizer> map = new HashMap<String, DBObjectSynchronizer>();\n\tprivate DBObjectSynchronizerFlyweightFactory(){\t}\n\tpublic static DBObjectSynchronizerFlyweightFactory getInstance(){\n\treturn instance;\n……\n}\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("观察者模式")])]),t._v(" "),n("p",[t._v("在数据库同步系统中，用户可以自行决定需要同步哪些对象，需要同步的DBObjectSynchronizer子类对象将注册到DBSynchronizeManager中，DBSynchronizeManager类的代码片段如下所示：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public abstract class DBSynchronizeManager{\t\n    ……\n\tpublic void attachDBSynchronizer(DBObjectSynchronizer dbSynchronizer) {\n\t\tsynchronizers.add(dbSynchronizer);\n\t}\n\tpublic void detachDBSynchronizer(DBObjectSynchronizer dbSynchronizer) {\n\t\tsynchronizers.remove(dbSynchronizer);\n\t}\n\tpublic abstract void executeSyn() throws Exception;\n}\n")])])]),n("p",[t._v("其中attachDBSynchronizer(DBObjectSynchronizerdbSynchronizer)为注册方法，detachDBSynchronizer(DBObjectSynchronizerdbSynchronizer)为注销方法，executeSyn()为抽象的通知方法，其子类OracleDBSynchronizeManager为executeSyn()方法提供了具体实现，类图如图6所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://img.my.csdn.net/uploads/201303/14/1363225903_6539.jpg",alt:""}})]),t._v(" "),n("p",[t._v("图6 观察者模式实例类图")]),t._v(" "),n("p",[t._v("在数据库同步时，如果DBSynchronizeManager的executeSyn()方法被调用，将遍历观察者集合，调用每一个DBObjectSynchronizer对象的executeSyn()方法和compileDBObject()方法，此时DBSynchronizeManager充当抽象观察目标，OracleDBSynchronizeManager充当具体观察目标，DBObjectSynchronizer充当抽象观察者，OracleTableDBSynchronizer充当具体观察者。")]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("模板方法模式")])]),t._v(" "),n("p",[t._v("在执行同步时，OracleDBSynchronizeManager的executeSyn()方法将依次调用synDBObject()和compileDBObject()方法，并在这两个方法中分别调用DBObjectSynchronizer的processSyn()和compile()方法，在OracleDBSynchronizeManager的子类中可以覆盖synDBObject()和compileDBObject()方法，如图7所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://img.my.csdn.net/uploads/201303/14/1363225967_1800.jpg",alt:""}})]),t._v(" "),n("p",[t._v("图7 模板方法模式实例类图")]),t._v(" "),n("p",[t._v("在图7中，OracleDBSynchronizeManager充当抽象父类，其中定义了模板方法executeSyn()，NewOracleDBSynchronizeManager充当具体子类，其中OracleDBSynchronize Manager的代码片段如下所示：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class OracleDBSynchronizeManager extends DBSynchronizeManager {\n\tpublic void executeSyn() throws Exception {\n\t\tsynDBObject();\n\t\tcompileDBObject();\n\t}\n\tprotected void synDBObject(){\n\t\tfor (DBObjectSynchronizer dbSynchronizer : synchronizers) {\n\t\t\ttry {\n\t\t\t\tdbSynchronizer.processSyn(this);\n\t\t\t} catch (Exception e) {\n\t\t\t\te.printStackTrace();\n\t\t\t}\n\t\t}\n\t}\n\tprotected void compileDBObject(){\n\t\tfor (DBObjectSynchronizer dbSynchronizer : synchronizers) {\n\t\t\ttry {\n\t\t\t\tdbSynchronizer.compile(this);\n\t\t\t} catch (Exception e) {\n\t\t\t\te.printStackTrace();\n\t\t\t}\n\t\t}\n\t}\n}\n")])])]),n("p",[t._v("由于Oracle数据库对象类型较多，而大部分对象的处理逻辑大同小异，只有少部分对象类型同步结构后需要重新编译，因此在设计DefaultOracleObjectSynchronizer类时也可以使用模板方法模式，在其中定义一个钩子方法getCompileable()，由子类决定是否要调用编译逻辑，代码片段如下所示：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class DefaultOracleObjectSynchronizer extends DBObjectSynchronizer {\n\t......\n\tpublic void compile(DBSynchronizeManager dbSynchronizeManager)\n\t\t\tthrows Exception {\n\t\tif (getCompileable()){\n\t\t\tDatabase destDB = dbSynchronizeManager.getDestDB();\n\t\t\tString[] compileObjs = findAllObjects(destDB);\n\t\t\tint iLen = compileObjs.length;\n\t\t\tfor (int i = 0; i < iLen; i++) {\n\t\t\t\tcompileObject(destDB, compileObjs[i]);\n\t\t\t}\n\t\t}\n\t\t\n\t}\n\t......\n}\n")])])])])}),[],!1,null,null,null);e.default=c.exports}}]);