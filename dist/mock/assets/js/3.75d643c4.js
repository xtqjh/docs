(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(t,n,s){"use strict";var a=s(166),e=s(165),r=s(5),o=s(23),p=s(92),c=s(167),v=s(13),l=s(168),i=s(66),_=s(1),u=[].push,k=Math.min,d=!_((function(){return!RegExp(4294967295,"y")}));a("split",2,(function(t,n,s){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var a=String(o(this)),r=void 0===s?4294967295:s>>>0;if(0===r)return[];if(void 0===t)return[a];if(!e(t))return n.call(a,t,r);for(var p,c,v,l=[],_=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),k=0,d=new RegExp(t.source,_+"g");(p=i.call(d,a))&&!((c=d.lastIndex)>k&&(l.push(a.slice(k,p.index)),p.length>1&&p.index<a.length&&u.apply(l,p.slice(1)),v=p[0].length,k=c,l.length>=r));)d.lastIndex===p.index&&d.lastIndex++;return k===a.length?!v&&d.test("")||l.push(""):l.push(a.slice(k)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:n.call(this,t,s)}:n,[function(n,s){var e=o(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e,s):a.call(String(e),n,s)},function(t,e){var o=s(a,t,this,e,a!==n);if(o.done)return o.value;var i=r(t),_=String(this),u=p(i,RegExp),f=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(d?"y":"g"),h=new u(d?i:"^(?:"+i.source+")",g),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===_.length)return null===l(h,_)?[_]:[];for(var x=0,w=0,y=[];w<_.length;){h.lastIndex=d?w:0;var b,M=l(h,d?_:_.slice(w));if(null===M||(b=k(v(h.lastIndex+(d?0:w)),_.length))===x)w=c(_,w,f);else{if(y.push(_.slice(x,w)),y.length===m)return y;for(var R=1;R<=M.length-1;R++)if(y.push(M[R]),y.length===m)return y;w=x=b}}return y.push(_.slice(x)),y}]}),!d)},316:function(t,n,s){"use strict";var a=s(0),e=s(28).find,r=s(91),o=s(17),p=!0,c=o("find");"find"in[]&&Array(1).find((function(){p=!1})),a({target:"Array",proto:!0,forced:p||!c},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},319:function(t,n,s){"use strict";s.r(n);var a=s(320),e=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(n,t,(function(){return a[t]}))}(r);n.default=e.a},320:function(t,n,s){s(316),s(43),s(302),$("#fixPlaceholderLink").prev("table").find("td:nth-child(1)").each((function(t,n){$(n).contents().wrapAll($("<a>").attr("href","#"+$(n).text()))})).end().find("td:nth-child(2)").each((function(t,n){var s=$(n).text().split(" "),a=$();$(s).each((function(t,n){a.push($("<a>").attr("href","#"+n).text(n)[0]),t<s.length-1&&a.push($("<span>").text(", ")[0])})),$(n).empty().append(a)})).end()},351:function(t,n,s){"use strict";s.d(n,"a",(function(){return a})),s.d(n,"b",(function(){return e}));var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Mock.Random 是一个工具类，用于生成各种随机数据。")]),t._v(" "),s("p",[s("strong",[t._v("Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 "),s("code",[t._v("@占位符(参数 [, 参数])")]),t._v(" 。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Random "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Random\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "n.clark@miller.io"')]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "y.lee@lewis.org"')]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@email'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => { email: "v.lewis@hall.gov" }')]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意")])]),t._v(" "),s("h3",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("p",[t._v("Mock.Random 提供的完整方法（占位符）如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Method")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Basic")]),t._v(" "),s("td",[t._v("boolean, natural, integer, float, character, string, range, date, time, datetime, now")])]),t._v(" "),s("tr",[s("td",[t._v("Image")]),t._v(" "),s("td",[t._v("image, dataImage")])]),t._v(" "),s("tr",[s("td",[t._v("Color")]),t._v(" "),s("td",[t._v("color")])]),t._v(" "),s("tr",[s("td",[t._v("Text")]),t._v(" "),s("td",[t._v("paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle")])]),t._v(" "),s("tr",[s("td",[t._v("Name")]),t._v(" "),s("td",[t._v("first, last, name, cfirst, clast, cname")])]),t._v(" "),s("tr",[s("td",[t._v("Web")]),t._v(" "),s("td",[t._v("url, domain, email, ip, tld")])]),t._v(" "),s("tr",[s("td",[t._v("Address")]),t._v(" "),s("td",[t._v("area, region")])]),t._v(" "),s("tr",[s("td",[t._v("Helper")]),t._v(" "),s("td",[t._v("capitalize, upper, lower, pick, shuffle")])]),t._v(" "),s("tr",[s("td",[t._v("Miscellaneous")]),t._v(" "),s("td",[t._v("guid, id")])])])]),t._v(" "),s("h3",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),s("p",[t._v("Mock.Random 中的方法与数据模板的 "),s("code",[t._v("@占位符")]),t._v(" 一一对应，在需要时还可以为 Mock.Random 扩展方法，然后在数据模板中通过 "),s("code",[t._v("@扩展方法")]),t._v(" 引用。例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("constellation")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" constellations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'白羊座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'金牛座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'双子座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'巨蟹座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'狮子座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'处女座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'天秤座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'天蝎座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'射手座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'摩羯座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'水瓶座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'双鱼座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("constellations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constellation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "水瓶座"')]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@CONSTELLATION'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "天蝎座"')]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    constellation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@CONSTELLATION'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => { constellation: "射手座" }')]),t._v("\n")])])])])},e=[]},352:function(t,n,s){"use strict";s.r(n);var a=s(351),e=s(319);for(var r in e)["default"].indexOf(r)<0&&function(t){s.d(n,t,(function(){return e[t]}))}(r);var o=s(42),p=Object(o.a)(e.default,a.a,a.b,!1,null,null,null);n.default=p.exports}}]);