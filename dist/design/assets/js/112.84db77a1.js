(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{458:function(e,t,n){"use strict";n.r(t);var i=n(42),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"算法的封装与切换-策略模式-一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法的封装与切换-策略模式-一"}},[e._v("#")]),e._v(" 算法的封装与切换——策略模式（一）")]),e._v(" "),n("p",[e._v("俗话说：条条大路通罗马。在很多情况下，实现某个目标的途径不止一条，例如我们在外出旅游时可以选择多种不同的出行方式，如骑自行车、坐汽车、坐火车或者坐飞机，可根据实际情况（目的地、旅游预算、旅游时间等）来选择一种最适合的出行方式。在制订旅行计划时，如果目的地较远、时间不多，但不差钱，可以选择坐飞机去旅游；如果目的地虽远、但假期长、且需控制旅游成本时可以选择坐火车或汽车；如果从健康和环保的角度考虑，而且有足够的毅力，自行车游或者徒步旅游也是个不错的选择，大笑。")]),e._v(" "),n("p",[e._v("在软件开发中，我们也常常会遇到类似的情况，实现某一个功能有多条途径，每一条途径对应一种算法，此时我们可以使用一种设计模式来实现灵活地选择解决途径，也能够方便地增加新的解决途径。本章我们将介绍一种为了适应算法灵活性而产生的设计模式——策略模式。")]),e._v(" "),n("p",[e._v("24.1 电影票打折方案")]),e._v(" "),n("p",[e._v("Sunny软件公司为某电影院开发了一套影院售票系统，在该系统中需要为不同类型的用户提供不同的电影票打折方式，具体打折方案如下：")]),e._v(" "),n("p",[e._v("(1) 学生凭学生证可享受票价8折优惠；")]),e._v(" "),n("p",[e._v("(2) 年龄在10周岁及以下的儿童可享受每张票减免10元的优惠（原始票价需大于等于20元）；")]),e._v(" "),n("p",[e._v("(3) 影院VIP用户除享受票价半价优惠外还可进行积分，积分累计到一定额度可换取电影院赠送的奖品。")]),e._v(" "),n("p",[e._v("该系统在将来可能还要根据需要引入新的打折方式。")]),e._v(" "),n("p",[e._v("为了实现上述电影票打折功能，Sunny软件公司开发人员设计了一个电影票类MovieTicket，其核心代码片段如下所示：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('//电影票类  \nclass MovieTicket {  \n    private double price; //电影票价格  \n    private String type; //电影票类型  \n      \n    public void setPrice(double price) {  \n        this.price = price;  \n    }  \n      \n    public void setType(String type) {  \n        this.type = type;  \n    }  \n      \n    public double getPrice() {  \n        return this.calculate();  \n    }  \n      \n         //计算打折之后的票价  \n    public double calculate() {  \n                  //学生票折后票价计算  \n        if(this.type.equalsIgnoreCase("student")) {  \n            System.out.println("学生票：");  \n            return this.price * 0.8;  \n        }  \n                  //儿童票折后票价计算  \n        else if(this.type.equalsIgnoreCase("children") && this.price >= 20 ) {  \n            System.out.println("儿童票：");  \n            return this.price - 10;  \n        }  \n                  //VIP票折后票价计算  \n        else if(this.type.equalsIgnoreCase("vip")) {  \n            System.out.println("VIP票：");  \n            System.out.println("增加积分！");  \n            return this.price * 0.5;  \n        }  \n        else {  \n            return this.price; //如果不满足任何打折要求，则返回原始票价  \n        }  \n    }  \n}  \n')])])]),n("p",[e._v("编写如下客户端测试代码：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('class Client {  \n    public static void main(String args[]) {  \n        MovieTicket mt = new MovieTicket();  \n        double originalPrice = 60.0; //原始票价  \n        double currentPrice; //折后价  \n          \n        mt.setPrice(originalPrice);  \n        System.out.println("原始价为：" + originalPrice);  \n        System.out.println("---------------------------------");  \n              \n        mt.setType("student"); //学生票  \n        currentPrice = mt.getPrice();  \n        System.out.println("折后价为：" + currentPrice);  \n        System.out.println("---------------------------------");  \n          \n        mt.setType("children"); //儿童票  \n        currentPrice = mt.getPrice();  \n        System.out.println("折后价为：" + currentPrice);  \n    }  \n}  \n')])])]),n("p",[e._v("编译并运行程序，输出结果如下所示：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("原始价为：60.0\n---------------------------------\n学生票：\n折后价为：48.0\n---------------------------------\n儿童票：\n折后价为：50.0\n")])])]),n("p",[e._v("通过MovieTicket类实现了电影票的折后价计算，该方案解决了电影票打折问题，每一种打折方式都可以称为一种打折算法，更换打折方式只需修改客户端代码中的参数，无须修改已有源代码，但该方案并不是一个完美的解决方案，它至少存在如下三个问题：")]),e._v(" "),n("p",[e._v("(1) MovieTicket类的calculate()方法非常庞大，它包含各种打折算法的实现代码，在代码中出现了较长的if…else…语句，不利于测试和维护。")]),e._v(" "),n("p",[e._v("(2) 增加新的打折算法或者对原有打折算法进行修改时必须修改MovieTicket类的源代码，违反了“开闭原则”，系统的灵活性和可扩展性较差。")]),e._v(" "),n("p",[e._v("(3) 算法的复用性差，如果在另一个系统（如商场销售管理系统）中需要重用某些打折算法，只能通过对源代码进行复制粘贴来重用，无法单独重用其中的某个或某些算法（重用较为麻烦）。")]),e._v(" "),n("p",[e._v("如何解决这三个问题？导致产生这些问题的主要原因在于MovieTicket类职责过重，它将各种打折算法都定义在一个类中，这既不便于算法的重用，也不便于算法的扩展。因此我们需要对MovieTicket类进行重构，将原本庞大的MovieTicket类的职责进行分解，将算法的定义和使用分离，这就是策略模式所要解决的问题，下面将进入策略模式的学习。")])])}),[],!1,null,null,null);t.default=r.exports}}]);