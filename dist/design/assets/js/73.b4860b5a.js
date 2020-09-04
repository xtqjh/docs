(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{419:function(t,e,a){"use strict";a.r(e);var n=a(42),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"工厂三兄弟之简单工厂模式-四"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工厂三兄弟之简单工厂模式-四"}},[t._v("#")]),t._v(" 工厂三兄弟之简单工厂模式（四）")]),t._v(" "),a("p",[t._v("4 方案的改进")]),t._v(" "),a("p",[t._v("Sunny软件公司开发人员发现在创建具体Chart对象时，每更换一个Chart对象都需要修改客户端代码中静态工厂方法的参数，客户端代码将要重新编译，这对于客户端而言，违反了“开闭原则”，有没有一种方法能够在不修改客户端代码的前提下更换具体产品对象呢？答案是肯定的，下面将介绍一种常用的实现方式。")]),t._v(" "),a("p",[t._v("我们可以将静态工厂方法的参数存储在XML或properties格式的配置文件中，如下"),a("em",[t._v("config.xml")]),t._v("所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<?xml version="1.0"?>  \n<config>  \n    <chartType>histogram</chartType>  \n</config>  \n')])])]),a("p",[t._v("再通过一个工具类XMLUtil来读取配置文件中的字符串参数，XMLUtil类的代码如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import javax.xml.parsers.*;  \nimport org.w3c.dom.*;  \nimport org.xml.sax.SAXException;  \nimport java.io.*;  \n  \npublic class XMLUtil {  \n    //该方法用于从XML配置文件中提取图表类型，并返回类型名  \n    public static String getChartType() {  \n        try {  \n            //创建文档对象  \n            DocumentBuilderFactory dFactory = DocumentBuilderFactory.newInstance();  \n            DocumentBuilder builder = dFactory.newDocumentBuilder();  \n            Document doc;                             \n            doc = builder.parse(new File("config.xml"));   \n          \n            //获取包含图表类型的文本节点  \n            NodeList nl = doc.getElementsByTagName("chartType");  \n            Node classNode = nl.item(0).getFirstChild();  \n            String chartType = classNode.getNodeValue().trim();  \n            return chartType;  \n        }     \n        catch(Exception e) {  \n            e.printStackTrace();  \n            return null;  \n        }  \n    }  \n}  \n\n')])])]),a("p",[t._v("在引入了配置文件和工具类XMLUtil之后，客户端代码修改如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Client {  \n    public static void main(String args[]) {  \n        Chart chart;  \n        String type = XMLUtil.getChartType(); //读取配置文件中的参数  \n        chart = ChartFactory.getChart(type); //创建产品对象  \n        chart.display();  \n    }  \n}  \n")])])]),a("p",[t._v("不难发现，在上述客户端代码中不包含任何与具体图表对象相关的信息，如果需要更换具体图表对象，只需修改配置文件config.xml，无须修改任何源代码，符合“开闭原则”。")]),t._v(" "),a("p",[t._v("思考")]),t._v(" "),a("blockquote",[a("p",[t._v("在简单工厂模式中增加新的具体产品时是否符合“开闭原则”？如果不符合，原有系统需作出哪些修改？")])]),t._v(" "),a("p",[t._v("5 简单工厂模式的简化")]),t._v(" "),a("p",[t._v("有时候，为了简化简单工厂模式，我们可以将抽象产品类和工厂类合并，将静态工厂方法移至抽象产品类中，如图3所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.blog.csdn.net/20130711145238171?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvTG92ZUxpb24=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),t._v(" "),a("p",[t._v("图3 简化的简单工厂模式")]),t._v(" "),a("p",[t._v("在图3中，客户端可以通过产品父类的静态工厂方法，根据参数的不同创建不同类型的产品子类对象，这种做法在JDK等类库和框架中也广泛存在。")]),t._v(" "),a("p",[t._v("6 简单工厂模式总结")]),t._v(" "),a("p",[t._v("简单工厂模式提供了专门的工厂类用于创建对象，将对象的创建和对象的使用分离开，它作为一种最简单的工厂模式在软件开发中得到了较为广泛的应用。")]),t._v(" "),a("ol",[a("li",[t._v("主要优点")])]),t._v(" "),a("p",[t._v("简单工厂模式的主要优点如下：")]),t._v(" "),a("p",[t._v("(1) 工厂类包含必要的判断逻辑，可以决定在什么时候创建哪一个产品类的实例，客户端可以免除直接创建产品对象的职责，而仅仅“消费”产品，简单工厂模式实现了对象创建和使用的分离。")]),t._v(" "),a("p",[t._v("(2) 客户端无须知道所创建的具体产品类的类名，只需要知道具体产品类所对应的参数即可，对于一些复杂的类名，通过简单工厂模式可以在一定程度减少使用者的记忆量。")]),t._v(" "),a("p",[t._v("(3) 通过引入配置文件，可以在不修改任何客户端代码的情况下更换和增加新的具体产品类，在一定程度上提高了系统的灵活性。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("主要缺点")])]),t._v(" "),a("p",[t._v("简单工厂模式的主要缺点如下：")]),t._v(" "),a("p",[t._v("(1) 由于工厂类集中了所有产品的创建逻辑，职责过重，一旦不能正常工作，整个系统都要受到影响。")]),t._v(" "),a("p",[t._v("(2) 使用简单工厂模式势必会增加系统中类的个数（引入了新的工厂类），增加了系统的复杂度和理解难度。")]),t._v(" "),a("p",[t._v("(3) 系统扩展困难，一旦添加新产品就不得不修改工厂逻辑，在产品类型较多时，有可能造成工厂逻辑过于复杂，不利于系统的扩展和维护。")]),t._v(" "),a("p",[t._v("(4) 简单工厂模式由于使用了静态工厂方法，造成工厂角色无法形成基于继承的等级结构。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("适用场景")])]),t._v(" "),a("p",[t._v("在以下情况下可以考虑使用简单工厂模式：")]),t._v(" "),a("p",[t._v("(1) 工厂类负责创建的对象比较少，由于创建的对象较少，不会造成工厂方法中的业务逻辑太过复杂。")]),t._v(" "),a("p",[t._v("(2) 客户端只知道传入工厂类的参数，对于如何创建对象并不关心。")]),t._v(" "),a("p",[t._v("练习")]),t._v(" "),a("blockquote",[a("p",[t._v("使用简单工厂模式设计一个可以创建不同几何形状（如圆形、方形和三角形等）的绘图工具，每个几何图形都具有绘制draw()和擦除erase()两个方法，要求在绘制不支持的几何图形时，提示一个"),a("em",[t._v("UnSupportedShapeException")]),t._v("。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);