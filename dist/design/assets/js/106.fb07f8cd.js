(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{452:function(n,a,e){"use strict";e.r(a);var t=e(42),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"确保对象的唯一性-单例模式-三"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#确保对象的唯一性-单例模式-三"}},[n._v("#")]),n._v(" 确保对象的唯一性——单例模式 （三）")]),n._v(" "),e("p",[n._v("3.4 饿汉式单例与懒汉式单例的讨论")]),n._v(" "),e("p",[n._v("Sunny公司开发人员使用单例模式实现了负载均衡器的设计，但是在实际使用中出现了一个非常严重的问题，当负载均衡器在启动过程中用户再次启动该负载均衡器时，系统无任何异常，但当客户端提交请求时出现请求分发失败，通过仔细分析发现原来系统中还是存在多个负载均衡器对象，导致分发时目标服务器不一致，从而产生冲突。为什么会这样呢？Sunny公司开发人员百思不得其解。")]),n._v(" "),e("p",[n._v("现在我们对负载均衡器的实现代码进行再次分析，当第一次调用getLoadBalancer()方法创建并启动负载均衡器时，instance对象为null值，因此系统将执行代码instance= new LoadBalancer()，在此过程中，由于要对LoadBalancer进行大量初始化工作，需要一段时间来创建LoadBalancer对象。而在此时，如果再一次调用getLoadBalancer()方法（通常发生在多线程环境中），由于instance尚未创建成功，仍为null值，判断条件(instance== null)为真值，因此代码instance= new LoadBalancer()将再次执行，导致最终创建了多个instance对象，这违背了单例模式的初衷，也导致系统运行发生错误。")]),n._v(" "),e("p",[n._v("如何解决该问题？我们至少有两种解决方案，在正式介绍这两种解决方案之前，先介绍一下单例类的两种不同实现方式，饿汉式单例类和懒汉式单例类。")]),n._v(" "),e("p",[n._v("1.饿汉式单例类")]),n._v(" "),e("p",[n._v("饿汉式单例类是实现起来最简单的单例类，饿汉式单例类结构图如图3-4所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://my.csdn.net/uploads/201204/02/1333305889_1823.gif",alt:""}})]),n._v(" "),e("p",[n._v("从图3-4中可以看出，由于在定义静态变量的时候实例化单例类，因此在类加载的时候就已经创建了单例对象，代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class EagerSingleton {   \n    private static final EagerSingleton instance = new EagerSingleton();   \n    private EagerSingleton() { }   \n  \n    public static EagerSingleton getInstance() {  \n        return instance;   \n    }     \n}  \n")])])]),e("p",[n._v("当类被加载时，静态变量instance会被初始化，此时类的私有构造函数会被调用，单例类的唯一实例将被创建。如果使用饿汉式单例来实现负载均衡器LoadBalancer类的设计，则不会出现创建多个单例对象的情况，可确保单例对象的唯一性。")]),n._v(" "),e("p",[n._v("2.懒汉式单例类与线程锁定")]),n._v(" "),e("p",[n._v("除了饿汉式单例，还有一种经典的懒汉式单例，也就是前面的负载均衡器LoadBalancer类的实现方式。懒汉式单例类结构图如图3-5所示：")]),n._v(" "),e("p",[e("img",{attrs:{src:"http://my.csdn.net/uploads/201204/02/1333305983_8045.gif",alt:""}})]),n._v(" "),e("p",[n._v("从图3-5中可以看出，懒汉式单例在第一次调用getInstance()方法时实例化，在类加载时并不自行实例化，这种技术又称为延迟加载(Lazy Load)技术，即需要的时候再加载实例，为了避免多个线程同时调用getInstance()方法，我们可以使用关键字synchronized，代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class LazySingleton {   \n    private static LazySingleton instance = null;   \n  \n    private LazySingleton() { }   \n  \n    synchronized public static LazySingleton getInstance() {   \n        if (instance == null) {  \n            instance = new LazySingleton();   \n        }  \n        return instance;   \n    }  \n}  \n")])])]),e("p",[n._v("该懒汉式单例类在getInstance()方法前面增加了关键字synchronized进行线程锁，以处理多个线程同时访问的问题。但是，上述代码虽然解决了线程安全问题，但是每次调用getInstance()时都需要进行线程锁定判断，在多线程高并发访问环境中，将会导致系统性能大大降低。如何既解决线程安全问题又不影响系统性能呢？我们继续对懒汉式单例进行改进。事实上，我们无须对整个getInstance()方法进行锁定，只需对其中的代码“instance = new LazySingleton();”进行锁定即可。因此getInstance()方法可以进行如下改进：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public static LazySingleton getInstance() {   \n    if (instance == null) {  \n        synchronized (LazySingleton.class) {  \n            instance = new LazySingleton();   \n        }  \n    }  \n    return instance;   \n}  \n")])])]),e("p",[n._v("问题貌似得以解决，事实并非如此。如果使用以上代码来实现单例，还是会存在单例对象不唯一。原因如下：")]),n._v(" "),e("p",[n._v("假如在某一瞬间线程A和线程B都在调用getInstance()方法，此时instance对象为null值，均能通过instance == null的判断。由于实现了synchronized加锁机制，线程A进入synchronized锁定的代码中执行实例创建代码，线程B处于排队等待状态，必须等待线程A执行完毕后才可以进入synchronized锁定代码。但当A执行完毕时，线程B并不知道实例已经创建，将继续创建新的实例，导致产生多个单例对象，违背单例模式的设计思想，因此需要进行进一步改进，在synchronized中再进行一次(instance == null)判断，这种方式称为双重检查锁定(Double-Check Locking)。使用双重检查锁定实现的懒汉式单例类完整代码如下所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class LazySingleton {   \n    private volatile static LazySingleton instance = null;   \n  \n    private LazySingleton() { }   \n  \n    public static LazySingleton getInstance() {   \n        //第一重判断  \n        if (instance == null) {  \n            //锁定代码块  \n            synchronized (LazySingleton.class) {  \n                //第二重判断  \n                if (instance == null) {  \n                    instance = new LazySingleton(); //创建单例实例  \n                }  \n            }  \n        }  \n        return instance;   \n    }  \n}  \n")])])]),e("p",[n._v("需要注意的是，如果使用双重检查锁定来实现懒汉式单例类，需要在静态成员变量instance之前增加修饰符volatile，被volatile修饰的成员变量可以确保多个线程都能够正确处理，且该代码只能在JDK 1.5及以上版本中才能正确执行。由于volatile关键字会屏蔽Java虚拟机所做的一些代码优化，可能会导致系统运行效率降低，因此即使使用双重检查锁定来实现单例模式也不是一种完美的实现方式。")]),n._v(" "),e("p",[n._v("扩展")]),n._v(" "),e("p",[n._v("IBM公司高级软件工程师Peter    Haggar 2004年在IBM developerWorks上发表了一篇名为《双重检查锁定及单例模式——全面理解这一失效的编程习语》的文章，对JDK    1.5之前的双重检查锁定及单例模式进行了全面分析和阐述，参考链接：http://www.ibm.com/developerworks/cn/java/j-dcl.html")]),n._v(" "),e("p",[n._v("3.饿汉式单例类与懒汉式单例类比较")]),n._v(" "),e("p",[n._v("饿汉式单例类在类被加载时就将自己实例化，它的优点在于无须考虑多线程访问问题，可以确保实例的唯一性；从调用速度和反应时间角度来讲，由于单例对象一开始就得以创建，因此要优于懒汉式单例。但是无论系统在运行时是否需要使用该单例对象，由于在类加载时该对象就需要创建，因此从资源利用效率角度来讲，饿汉式单例不及懒汉式单例，而且在系统加载时由于需要创建饿汉式单例对象，加载时间可能会比较长。")]),n._v(" "),e("p",[n._v("懒汉式单例类在第一次使用时创建，无须一直占用系统资源，实现了延迟加载，但是必须处理好多个线程同时访问的问题，特别是当单例类作为资源控制器，在实例化时必然涉及资源初始化，而资源初始化很有可能耗费大量时间，这意味着出现多线程同时首次引用此类的机率变得较大，需要通过双重检查锁定等机制进行控制，这将导致系统性能受到一定影响。")])])}),[],!1,null,null,null);a.default=s.exports}}]);