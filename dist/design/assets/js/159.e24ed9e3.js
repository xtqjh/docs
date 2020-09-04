(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{505:function(t,r,n){"use strict";n.r(r);var s=n(42),e=Object(s.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"遍历聚合对象中的元素-迭代器模式-四"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#遍历聚合对象中的元素-迭代器模式-四"}},[t._v("#")]),t._v(" 遍历聚合对象中的元素——迭代器模式（四）")]),t._v(" "),n("p",[t._v("4 使用内部类实现迭代器")]),t._v(" "),n("p",[t._v("在迭代器模式结构图中，我们可以看到具体迭代器类和具体聚合类之间存在双重关系，其中一个关系为关联关系，在具体迭代器中需要维持一个对具体聚合对象的引用，该关联关系的目的是访问存储在聚合对象中的数据，以便迭代器能够对这些数据进行遍历操作。")]),t._v(" "),n("p",[t._v("除了使用关联关系外，为了能够让迭代器可以访问到聚合对象中的数据，我们还可以将迭代器类设计为聚合类的内部类，JDK中的迭代器类就是通过这种方法来实现的，如下AbstractList类代码片段所示：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package java.util;  \n……  \npublic abstract class AbstractList<E> extends AbstractCollection<E> implements List<E> {  \n    ......  \n    private class Itr implements Iterator<E> {  \n        int cursor = 0;  \n        ......  \n}  \n……  \n}  \n")])])]),n("p",[t._v("我们可以通过类似的方法来设计第3节中的ProductList类，将ProductIterator类作为ProductList类的内部类，代码如下所示：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//商品数据类：具体聚合类  \nclass ProductList extends AbstractObjectList {  \n    public ProductList(List products) {  \n        super(products);  \n    }  \n      \n    public AbstractIterator createIterator() {  \n        return new ProductIterator();  \n    }  \n      \n    //商品迭代器：具体迭代器，内部类实现  \n    private class ProductIterator implements AbstractIterator {  \n        private int cursor1;  \n        private int cursor2;  \n          \n        public ProductIterator() {  \n            cursor1 = 0;  \n            cursor2 = objects.size() -1;  \n        }  \n          \n        public void next() {  \n            if(cursor1 < objects.size()) {  \n                cursor1++;  \n            }  \n        }  \n          \n        public boolean isLast() {  \n            return (cursor1 == objects.size());  \n        }  \n          \n        public void previous() {  \n            if(cursor2 > -1) {  \n                cursor2--;  \n            }  \n        }  \n          \n        public boolean isFirst() {  \n            return (cursor2 == -1);  \n        }  \n          \n        public Object getNextItem() {  \n            return objects.get(cursor1);  \n        }   \n              \n        public Object getPreviousItem() {  \n            return objects.get(cursor2);  \n        }     \n    }  \n}  \n")])])]),n("p",[t._v("无论使用哪种实现机制，客户端代码都是一样的，也就是说客户端无须关心具体迭代器对象的创建细节，只需通过调用工厂方法createIterator()即可得到一个可用的迭代器对象，这也是使用工厂方法模式的好处，通过工厂来封装对象的创建过程，简化了客户端的调用。")])])}),[],!1,null,null,null);r.default=e.exports}}]);