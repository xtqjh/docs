(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{467:function(n,e,t){"use strict";t.r(e);var o=t(42),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"自定义语言的实现-解释器模式-五"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义语言的实现-解释器模式-五"}},[n._v("#")]),n._v(" 自定义语言的实现——解释器模式（五）")]),n._v(" "),t("p",[n._v("18.5 再谈Context的作用")]),n._v(" "),t("p",[n._v("在解释器模式中，环境类Context用于存储解释器之外的一些全局信息，它通常作为参数被传递到所有表达式的解释方法interpret()中，可以在Context对象中存储和访问表达式解释器的状态，向表达式解释器提供一些全局的、公共的数据，此外还可以在Context中增加一些所有表达式解释器都共有的功能，减轻解释器的职责。")]),n._v(" "),t("p",[n._v("在上面的机器人控制程序实例中，我们省略了环境类角色，下面再通过一个简单实例来说明环境类的用途：")]),n._v(" "),t("p",[n._v("Sunny软件公司开发了一套简单的基于字符界面的格式化指令，可以根据输入的指令在字符界面中输出一些格式化内容，例如输入“LOOP 2 PRINT杨过 SPACE SPACE PRINT 小龙女 BREAK END PRINT郭靖 SPACE SPACE PRINT 黄蓉”，将输出如下结果：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("杨过     小龙女\n杨过     小龙女\n郭靖     黄蓉\n")])])]),t("p",[n._v("其中关键词LOOP表示“循环”，后面的数字表示循环次数；PRINT表示“打印”，后面的字符串表示打印的内容；SPACE表示“空格”；BREAK表示“换行”；END表示“循环结束”。每一个关键词对应一条命令，计算机程序将根据关键词执行相应的处理操作。")]),n._v(" "),t("p",[n._v("现使用解释器模式设计并实现该格式化指令的解释，对指令进行分析并调用相应的操作执行指令中每一条命令。")]),n._v(" "),t("p",[n._v("Sunny软件公司开发人员通过分析，根据该格式化指令中句子的组成，定义了如下文法规则：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("expression ::= command* //表达式，一个表达式包含多条命令\ncommand ::= loop | primitive //语句命令\nloop ::= 'loopnumber' expression  'end' //循环命令，其中number为自然数\nprimitive ::= 'printstring'  | 'space' | 'break' //基本命令，其中string为字符串\n\n")])])]),t("p",[n._v("根据以上文法规则，通过进一步分析，绘制如图18-6所示结构图：")]),n._v(" "),t("p",[t("img",{attrs:{src:"http://my.csdn.net/uploads/201207/04/1341332238_7715.jpg",alt:""}})]),n._v(" "),t("p",[n._v("图18-6    格式化指令结构图")]),n._v(" "),t("p",[n._v("在图18-6中，Context充当环境角色，Node充当抽象表达式角色，ExpressionNode、CommandNode和LoopCommandNode充当非终结符表达式角色，PrimitiveCommandNode充当终结符表达式角色。完整代码如下所示：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('import java.util.*;  \n  \n//环境类：用于存储和操作需要解释的语句，在本实例中每一个需要解释的单词可以称为一个动作标记(Action Token)或命令  \nclass Context {  \n    private StringTokenizer tokenizer; //StringTokenizer类，用于将字符串分解为更小的字符串标记(Token)，默认情况下以空格作为分隔符  \n    private String currentToken; //当前字符串标记  \n      \n    public Context(String text) {  \n        tokenizer = new StringTokenizer(text); //通过传入的指令字符串创建StringTokenizer对象  \n        nextToken();  \n    }  \n      \n    //返回下一个标记  \n    public String nextToken() {  \n        if (tokenizer.hasMoreTokens()) {  \n            currentToken = tokenizer.nextToken();  \n        }  \n        else {  \n            currentToken = null;  \n        }  \n        return currentToken;  \n    }  \n      \n    //返回当前的标记  \n    public String currentToken() {  \n        return currentToken;  \n    }  \n      \n    //跳过一个标记  \n    public void skipToken(String token) {  \n        if (!token.equals(currentToken)) {  \n            System.err.println("错误提示：" + currentToken + "解释错误！");  \n            }  \n        nextToken();  \n    }  \n      \n    //如果当前的标记是一个数字，则返回对应的数值  \n    public int currentNumber() {  \n        int number = 0;  \n        try{  \n            number = Integer.parseInt(currentToken); //将字符串转换为整数  \n        }  \n        catch(NumberFormatException e) {  \n            System.err.println("错误提示：" + e);  \n        }  \n        return number;  \n    }  \n}  \n  \n//抽象节点类：抽象表达式  \nabstract class Node {  \n    public abstract void interpret(Context text); //声明一个方法用于解释语句  \n    public abstract void execute(); //声明一个方法用于执行标记对应的命令  \n}  \n  \n//表达式节点类：非终结符表达式  \nclass ExpressionNode extends Node {  \n    private ArrayList<Node> list = new ArrayList<Node>(); //定义一个集合用于存储多条命令  \n      \n    public void interpret(Context context) {  \n        //循环处理Context中的标记  \n        while (true){  \n            //如果已经没有任何标记，则退出解释  \n            if (context.currentToken() == null) {  \n                break;  \n            }  \n            //如果标记为END，则不解释END并结束本次解释过程，可以继续之后的解释  \n            else if (context.currentToken().equals("END")) {  \n                context.skipToken("END");  \n                break;  \n            }  \n            //如果为其他标记，则解释标记并将其加入命令集合  \n            else {  \n                Node commandNode = new CommandNode();  \n                commandNode.interpret(context);  \n                list.add(commandNode);  \n            }  \n        }  \n    }  \n      \n    //循环执行命令集合中的每一条命令  \n    public void execute() {  \n        Iterator iterator = list.iterator();  \n        while (iterator.hasNext()){  \n            ((Node)iterator.next()).execute();  \n        }  \n    }  \n}  \n  \n//语句命令节点类：非终结符表达式  \nclass CommandNode extends Node {  \n    private Node node;  \n      \n    public void interpret(Context context) {  \n        //处理LOOP循环命令  \n        if (context.currentToken().equals("LOOP")) {  \n            node = new LoopCommandNode();  \n            node.interpret(context);  \n        }  \n        //处理其他基本命令  \n        else {  \n            node = new PrimitiveCommandNode();  \n            node.interpret(context);  \n        }  \n    }  \n      \n    public void execute() {  \n        node.execute();  \n    }  \n}  \n  \n//循环命令节点类：非终结符表达式  \nclass LoopCommandNode extends Node {  \n    private int number; //循环次数  \n    private Node commandNode; //循环语句中的表达式  \n      \n    //解释循环命令  \n    public void interpret(Context context) {  \n        context.skipToken("LOOP");  \n        number = context.currentNumber();  \n        context.nextToken();  \n        commandNode = new ExpressionNode(); //循环语句中的表达式  \n        commandNode.interpret(context);  \n    }  \n      \n    public void execute() {  \n        for (int i=0;i<number;i++)  \n            commandNode.execute();  \n    }  \n}  \n  \n//基本命令节点类：终结符表达式  \nclass PrimitiveCommandNode extends Node {  \n    private String name;  \n    private String text;  \n      \n    //解释基本命令  \n    public void interpret(Context context) {  \n        name = context.currentToken();  \n        context.skipToken(name);  \n        if (!name.equals("PRINT") && !name.equals("BREAK") && !name.equals ("SPACE")){  \n            System.err.println("非法命令！");  \n        }  \n        if (name.equals("PRINT")){  \n            text = context.currentToken();  \n            context.nextToken();  \n        }  \n    }  \n      \n    public void execute(){  \n        if (name.equals("PRINT"))  \n            System.out.print(text);  \n        else if (name.equals("SPACE"))  \n            System.out.print(" ");  \n        else if (name.equals("BREAK"))  \n            System.out.println();  \n    }  \n}  \n')])])]),t("p",[n._v("在本实例代码中，环境类Context类似一个工具类，它提供了用于处理指令的方法，如nextToken()、currentToken()、skipToken()等，同时它存储了需要解释的指令并记录了每一次解释的当前标记(Token)，而具体的解释过程交给表达式解释器类来处理。我们还可以将各种解释器类包含的公共方法移至环境类中，更好地实现这些方法的重用和扩展。")]),n._v(" "),t("p",[n._v("针对本实例代码，我们编写如下客户端测试代码：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('class Client{  \n    public static void main(String[] args){  \n        String text = "LOOP 2 PRINT 杨过 SPACE SPACE PRINT 小龙女 BREAK END PRINT 郭靖 SPACE SPACE PRINT 黄蓉";  \n        Context context = new Context(text);  \n              \n        Node node = new ExpressionNode();  \n        node.interpret(context);  \n        node.execute();  \n    }  \n}  \n')])])]),t("p",[n._v("编译并运行程序，输出结果如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("杨过     小龙女\n杨过     小龙女\n郭靖     黄蓉\n")])])]),t("p",[n._v("思考")]),n._v(" "),t("blockquote",[t("p",[n._v("预测指令“LOOP    2 LOOP 2 PRINT杨过 SPACE SPACE    PRINT 小龙女 BREAK END PRINT   郭靖 SPACE SPACE PRINT 黄蓉    BREAK END”的输出结果。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);