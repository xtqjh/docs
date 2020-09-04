(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{379:function(t,n,e){"use strict";e.r(n);var a=e(42),c=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"处理对象的多种状态及其相互转换-状态模式-三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#处理对象的多种状态及其相互转换-状态模式-三"}},[t._v("#")]),t._v(" 处理对象的多种状态及其相互转换——状态模式（三）")]),t._v(" "),e("p",[t._v("3 完整解决方案")]),t._v(" "),e("p",[t._v("Sunny软件公司开发人员使用状态模式来解决账户状态的转换问题，客户端只需要执行简单的存款和取款操作，系统根据余额将自动转换到相应的状态，其基本结构如图4所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.my.csdn.net/uploads/201301/20/1358693610_6618.jpg",alt:""}})]),t._v(" "),e("p",[t._v("图4 银行账户结构图")]),t._v(" "),e("p",[t._v("在图4中，Account充当环境类角色，AccountState充当抽象状态角色，NormalState、OverdraftState和RestrictedState充当具体状态角色。完整代码如下所示：\n温馨提示：代码有点长，需要有耐心！")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//银行账户：环境类  \nclass Account {  \n    private AccountState state; //维持一个对抽象状态对象的引用  \n    private String owner; //开户名  \n    private double balance = 0; //账户余额  \n      \n    public Account(String owner,double init) {  \n        this.owner = owner;  \n        this.balance = balance;  \n        this.state = new NormalState(this); //设置初始状态  \n        System.out.println(this.owner + "开户，初始金额为" + init);   \n        System.out.println("---------------------------------------------");      \n    }  \n      \n    public double getBalance() {  \n        return this.balance;  \n    }  \n      \n    public void setBalance(double balance) {  \n        this.balance = balance;  \n    }  \n      \n    public void setState(AccountState state) {  \n        this.state = state;  \n    }  \n      \n    public void deposit(double amount) {  \n        System.out.println(this.owner + "存款" + amount);  \n        state.deposit(amount); //调用状态对象的deposit()方法  \n        System.out.println("现在余额为"+ this.balance);  \n        System.out.println("现在帐户状态为"+ this.state.getClass().getName());  \n        System.out.println("---------------------------------------------");              \n    }  \n      \n    public void withdraw(double amount) {  \n        System.out.println(this.owner + "取款" + amount);  \n        state.withdraw(amount); //调用状态对象的withdraw()方法  \n        System.out.println("现在余额为"+ this.balance);  \n        System.out.println("现在帐户状态为"+ this. state.getClass().getName());          \n        System.out.println("---------------------------------------------");  \n    }  \n      \n    public void computeInterest()  \n    {  \n        state.computeInterest(); //调用状态对象的computeInterest()方法  \n    }  \n}  \n  \n//抽象状态类  \nabstract class AccountState {  \n    protected Account acc;  \n    public abstract void deposit(double amount);  \n    public abstract void withdraw(double amount);  \n    public abstract void computeInterest();  \n    public abstract void stateCheck();  \n}  \n  \n//正常状态：具体状态类  \nclass NormalState extends AccountState {  \n    public NormalState(Account acc) {  \n        this.acc = acc;  \n    }  \n  \npublic NormalState(AccountState state) {  \n        this.acc = state.acc;  \n    }  \n          \n    public void deposit(double amount) {  \n        acc.setBalance(acc.getBalance() + amount);  \n        stateCheck();  \n    }  \n      \n    public void withdraw(double amount) {  \n        acc.setBalance(acc.getBalance() - amount);  \n        stateCheck();  \n    }  \n      \n    public void computeInterest()  \n    {  \n        System.out.println("正常状态，无须支付利息！");  \n    }  \n      \n    //状态转换  \n    public void stateCheck() {  \n        if (acc.getBalance() > -2000 && acc.getBalance() <= 0) {  \n            acc.setState(new OverdraftState(this));  \n        }  \n        else if (acc.getBalance() == -2000) {  \n            acc.setState(new RestrictedState(this));  \n        }  \n        else if (acc.getBalance() < -2000) {  \n            System.out.println("操作受限！");  \n        }     \n    }     \n}    \n  \n//透支状态：具体状态类  \nclass OverdraftState extends AccountState  \n{  \n    public OverdraftState(AccountState state) {  \n        this.acc = state.acc;  \n    }  \n      \n    public void deposit(double amount) {  \n        acc.setBalance(acc.getBalance() + amount);  \n        stateCheck();  \n    }  \n      \n    public void withdraw(double amount) {  \n        acc.setBalance(acc.getBalance() - amount);  \n        stateCheck();  \n    }  \n      \n    public void computeInterest() {  \n        System.out.println("计算利息！");  \n    }  \n      \n    //状态转换  \n    public void stateCheck() {  \n        if (acc.getBalance() > 0) {  \n            acc.setState(new NormalState(this));  \n        }  \n        else if (acc.getBalance() == -2000) {  \n            acc.setState(new RestrictedState(this));  \n        }  \n        else if (acc.getBalance() < -2000) {  \n            System.out.println("操作受限！");  \n        }  \n    }  \n}  \n  \n//受限状态：具体状态类  \nclass RestrictedState extends AccountState {  \n    public RestrictedState(AccountState state) {  \n        this.acc = state.acc;  \n    }  \n      \n    public void deposit(double amount) {  \n        acc.setBalance(acc.getBalance() + amount);  \n        stateCheck();  \n    }  \n      \n    public void withdraw(double amount) {  \n        System.out.println("帐号受限，取款失败");  \n    }  \n      \n    public void computeInterest() {  \n        System.out.println("计算利息！");  \n    }  \n      \n    //状态转换  \n    public void stateCheck() {  \n        if(acc.getBalance() > 0) {  \n            acc.setState(new NormalState(this));  \n        }  \n        else if(acc.getBalance() > -2000) {  \n            acc.setState(new OverdraftState(this));  \n        }  \n    }  \n}  \n')])])]),e("p",[t._v("编写如下客户端测试代码：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('class Client {  \n    public static void main(String args[]) {  \n        Account acc = new Account("段誉",0.0);  \n        acc.deposit(1000);  \n        acc.withdraw(2000);  \n        acc.deposit(3000);  \n        acc.withdraw(4000);  \n        acc.withdraw(1000);  \n        acc.computeInterest();  \n    }  \n}  \n')])])]),e("p",[t._v("编译并运行程序，输出结果如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("段誉开户，初始金额为0.0\n---------------------------------------------\n段誉存款1000.0\n现在余额为1000.0\n现在帐户状态为NormalState\n---------------------------------------------\n段誉取款2000.0\n现在余额为-1000.0\n现在帐户状态为OverdraftState\n---------------------------------------------\n段誉存款3000.0\n现在余额为2000.0\n现在帐户状态为NormalState\n---------------------------------------------\n段誉取款4000.0\n现在余额为-2000.0\n现在帐户状态为RestrictedState\n---------------------------------------------\n段誉取款1000.0\n帐号受限，取款失败\n现在余额为-2000.0\n现在帐户状态为RestrictedState\n---------------------------------------------\n计算利息！\n")])])])])}),[],!1,null,null,null);n.default=c.exports}}]);