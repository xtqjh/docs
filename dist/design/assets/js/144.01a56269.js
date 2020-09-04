(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{490:function(n,t,e){"use strict";e.r(t);var i=e(42),a=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"请求发送者与接收者解耦-命令模式-二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求发送者与接收者解耦-命令模式-二"}},[n._v("#")]),n._v(" 请求发送者与接收者解耦——命令模式（二）")]),n._v(" "),e("p",[n._v("3 完整解决方案")]),n._v(" "),e("p",[n._v("为了降低功能键与功能处理类之间的耦合度，让用户可以自定义每一个功能键的功能，Sunny软件公司开发人员使用命令模式来设计“自定义功能键”模块，其核心结构如图4所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://img.my.csdn.net/uploads/201304/15/1366034181_4378.jpg",alt:""}})]),n._v(" "),e("p",[n._v("图4 自定义功能键核心结构图")]),n._v(" "),e("p",[n._v("在图4中，FBSettingWindow是“功能键设置”界面类，FunctionButton充当请求调用者，Command充当抽象命令类，MinimizeCommand和HelpCommand充当具体命令类，WindowHanlder和HelpHandler充当请求接收者。完整代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('import java.util.*;  \n  \n//功能键设置窗口类  \nclass FBSettingWindow {  \n    private String title; //窗口标题  \n    //定义一个ArrayList来存储所有功能键  \n    private ArrayList<FunctionButton> functionButtons = new ArrayList<FunctionButton>();  \n      \n    public FBSettingWindow(String title) {  \n        this.title = title;  \n    }  \n      \n    public void setTitle(String title) {  \n        this.title = title;  \n    }  \n      \n    public String getTitle() {  \n        return this.title;  \n    }  \n      \n    public void addFunctionButton(FunctionButton fb) {  \n        functionButtons.add(fb);  \n    }  \n      \n    public void removeFunctionButton(FunctionButton fb) {  \n        functionButtons.remove(fb);  \n    }  \n      \n    //显示窗口及功能键  \n    public void display() {  \n        System.out.println("显示窗口：" + this.title);  \n        System.out.println("显示功能键：");  \n        for (Object obj : functionButtons) {  \n            System.out.println(((FunctionButton)obj).getName());  \n        }  \n        System.out.println("------------------------------");  \n    }     \n}  \n  \n//功能键类：请求发送者  \nclass FunctionButton {  \n    private String name; //功能键名称  \n    private Command command; //维持一个抽象命令对象的引用  \n      \n    public FunctionButton(String name) {  \n        this.name = name;  \n    }  \n      \n    public String getName() {  \n        return this.name;  \n    }  \n      \n    //为功能键注入命令  \n    public void setCommand(Command command) {  \n        this.command = command;  \n    }  \n      \n    //发送请求的方法  \n    public void onClick() {  \n        System.out.print("点击功能键：");  \n        command.execute();  \n    }  \n}  \n  \n//抽象命令类  \nabstract class Command {  \n    public abstract void execute();  \n}  \n  \n//帮助命令类：具体命令类  \nclass HelpCommand extends Command {  \n    private HelpHandler hhObj; //维持对请求接收者的引用  \n      \n    public HelpCommand() {  \n        hhObj = new HelpHandler();  \n    }  \n      \n    //命令执行方法，将调用请求接收者的业务方法  \n    public void execute() {  \n        hhObj.display();  \n    }  \n}  \n  \n//最小化命令类：具体命令类  \nclass MinimizeCommand extends Command {  \n    private WindowHanlder whObj; //维持对请求接收者的引用  \n      \n    public MinimizeCommand() {  \n        whObj = new WindowHanlder();  \n    }  \n      \n//命令执行方法，将调用请求接收者的业务方法  \n    public void execute() {  \n        whObj.minimize();  \n    }  \n}  \n  \n//窗口处理类：请求接收者  \nclass WindowHanlder {  \n    public void minimize() {  \n        System.out.println("将窗口最小化至托盘！");  \n    }  \n}  \n  \n//帮助文档处理类：请求接收者  \nclass HelpHandler {  \n    public void display() {  \n        System.out.println("显示帮助文档！");  \n    }  \n}  \n')])])]),e("p",[n._v("为了提高系统的灵活性和可扩展性，我们将具体命令类的类名存储在配置文件中，并通过工具类XMLUtil来读取配置文件并反射生成对象，XMLUtil类的代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('import javax.xml.parsers.*;  \nimport org.w3c.dom.*;  \nimport org.xml.sax.SAXException;  \nimport java.io.*;  \n  \npublic class XMLUtil {  \n//该方法用于从XML配置文件中提取具体类类名，并返回一个实例对象，可以通过参数的不同返回不同类名节点所对应的实例  \n    public static Object getBean(int i) {  \n        try {  \n            //创建文档对象  \n            DocumentBuilderFactory dFactory = DocumentBuilderFactory.newInstance();  \n            DocumentBuilder builder = dFactory.newDocumentBuilder();  \n            Document doc;                             \n            doc = builder.parse(new File("config.xml"));   \n          \n            //获取包含类名的文本节点  \n            NodeList nl = doc.getElementsByTagName("className");  \n            Node classNode = null;  \n            if (0 == i) {  \n                classNode = nl.item(0).getFirstChild();  \n            }  \n            else {  \n                classNode = nl.item(1).getFirstChild();  \n            }   \n  \n            String cName = classNode.getNodeValue();  \n              \n            //通过类名生成实例对象并将其返回  \n            Class c = Class.forName(cName);  \n            Object obj = c.newInstance();  \n            return obj;  \n        }     \n        catch(Exception e){  \n            e.printStackTrace();  \n            return null;  \n        }  \n    }  \n}  \n')])])]),e("p",[n._v("配置文件config.xml中存储了具体建造者类的类名，代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<?xml version="1.0"?>  \n<config>  \n    <className>HelpCommand</className>  \n    <className>MinimizeCommand</className>  \n</config>  \n       编写如下客户端测试代码：\n[java] view plain copy\nclass Client {  \n    public static void main(String args[]) {  \n        FBSettingWindow fbsw = new FBSettingWindow("功能键设置");  \n              \n        FunctionButton fb1,fb2;  \n        fb1 = new FunctionButton("功能键1");  \n        fb2 = new FunctionButton("功能键1");  \n          \n        Command command1,command2;  \n        //通过读取配置文件和反射生成具体命令对象  \n        command1 = (Command)XMLUtil.getBean(0);  \n        command2 = (Command)XMLUtil.getBean(1);  \n          \n        //将命令对象注入功能键  \n        fb1.setCommand(command1);  \n        fb2.setCommand(command2);  \n          \n        fbsw.addFunctionButton(fb1);  \n        fbsw.addFunctionButton(fb2);  \n        fbsw.display();  \n          \n        //调用功能键的业务方法  \n        fb1.onClick();  \n        fb2.onClick();  \n    }  \n}  \n')])])]),e("p",[n._v("编译并运行程序，输出结果如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("显示窗口：功能键设置\n显示功能键：\n功能键1\n功能键1\n------------------------------\n点击功能键：显示帮助文档！\n点击功能键：将窗口最小化至托盘！\n")])])]),e("p",[n._v("如果需要修改功能键的功能，例如某个功能键可以实现“自动截屏”，只需要对应增加一个新的具体命令类，在该命令类与屏幕处理者(ScreenHandler)之间创建一个关联关系，然后将该具体命令类的对象通过配置文件注入到某个功能键即可，原有代码无须修改，符合“开闭原则”。在此过程中，每一个具体命令类对应一个请求的处理者（接收者），通过向请求发送者注入不同的具体命令对象可以使得相同的发送者对应不同的接收者，从而实现“将一个请求封装为一个对象，用不同的请求对客户进行参数化”，客户端只需要将具体命令对象作为参数注入请求发送者，无须直接操作请求的接收者。")])])}),[],!1,null,null,null);t.default=a.exports}}]);