function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+1zh":function(e,t,n){"use strict";n.r(t),n.d(t,"TocModule",(function(){return T}));var r=n("ofXK"),i=n("NFeN"),o=n("XNiG"),c=n("itXk"),a=n("7Hc7"),s=n("1G5W"),l=n("HDdC"),u=n("Y7HM"),d=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a;return _classCallCheck(this,n),(r=t.call(this)).source=e,r.delayTime=i,r.scheduler=o,(!Object(u.a)(i)||i<0)&&(r.delayTime=0),o&&"function"==typeof o.schedule||(r.scheduler=a.a),r}return _createClass(n,[{key:"_subscribe",value:function(e){return this.scheduler.schedule(n.dispatch,this.delayTime,{source:this.source,subscriber:e})}}],[{key:"create",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a;return new n(e,t,r)}},{key:"dispatch",value:function(e){var t=e.source,n=e.subscriber;return this.add(t.subscribe(n))}}]),n}(l.a);function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n.lift(new p(e,t))}}var p=function(){function e(t,n){_classCallCheck(this,e),this.scheduler=t,this.delay=n}return _createClass(e,[{key:"call",value:function(e,t){return new d(t,this.delay,this.scheduler).subscribe(e)}}]),e}(),b=n("JX91"),h=n("fXoL"),y=n("Faly"),v=n("TNhP"),m=["tocItem"];function g(e,t){1&e&&(h.Rb(0,"div",7),h.yc(1," \u76ee\u5f55 "),h.Qb())}function _(e,t){if(1&e){var n=h.Sb();h.Rb(0,"button",8),h.Yb("click",(function(){return h.qc(n),h.cc(2).toggle(!1)})),h.yc(1," \u76ee\u5f55 "),h.Nb(2,"mat-icon",9),h.Qb()}if(2&e){var r=h.cc(2);h.Ab("aria-pressed",!r.isCollapsed),h.zb(2),h.Db("collapsed",r.isCollapsed)}}function C(e,t){if(1&e&&(h.Rb(0,"li",11,12),h.Nb(2,"a",13),h.Qb()),2&e){var n=h.cc(),r=n.$implicit,i=n.index,o=h.cc(2);h.Bb(r.level),h.Db("secondary","EmbeddedExpandable"===o.type&&i>=o.primaryMax)("active",i===o.activeIndex),h.ic("title",r.title),h.zb(2),h.hc("href",r.href,h.sc)("innerHTML",r.content,h.rc)}}function x(e,t){if(1&e&&(h.Pb(0),h.xc(1,C,3,10,"li",10),h.Ob()),2&e){var n=t.$implicit,r=h.cc(2);h.zb(1),h.hc("ngIf","Floating"===r.type||"h1"!==n.level)}}function O(e,t){if(1&e){var n=h.Sb();h.Rb(0,"button",14),h.Yb("click",(function(){return h.qc(n),h.cc(2).toggle()})),h.Qb()}if(2&e){var r=h.cc(2);h.Db("collapsed",r.isCollapsed),h.Ab("aria-pressed",!r.isCollapsed)}}function k(e,t){if(1&e&&(h.Rb(0,"div",1),h.xc(1,g,2,0,"div",2),h.xc(2,_,3,3,"button",3),h.Rb(3,"ul",4),h.xc(4,x,2,1,"ng-container",5),h.Qb(),h.xc(5,O,1,3,"button",6),h.Qb()),2&e){var n=h.cc();h.Db("collapsed",n.isCollapsed),h.zb(1),h.hc("ngIf","EmbeddedSimple"===n.type),h.zb(1),h.hc("ngIf","EmbeddedExpandable"===n.type),h.zb(1),h.Db("embedded","Floating"!==n.type),h.zb(1),h.hc("ngForOf",n.tocList),h.zb(1),h.hc("ngIf","EmbeddedExpandable"===n.type)}}var E,I,w=((I=function(){function e(t,n,r){_classCallCheck(this,e),this.scrollService=t,this.tocService=r,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new o.a,this.primaryMax=4,this.isEmbedded=-1!==n.nativeElement.className.indexOf("embedded")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.tocService.tocList.pipe(Object(s.a)(this.onDestroy)).subscribe((function(t){e.tocList=t;var n,r=(n=function(e){return"h1"!==e.level},e.tocList.reduce((function(e,t){return n(t)?e+1:e}),0));e.type=r>0?e.isEmbedded?r>e.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"}))}},{key:"ngAfterViewInit",value:function(){var e=this;this.isEmbedded||Object(c.a)([this.tocService.activeItemIndex.pipe(f(a.a)),this.items.changes.pipe(Object(b.a)(this.items))]).pipe(Object(s.a)(this.onDestroy)).subscribe((function(t){var n=_slicedToArray(t,2),r=n[0],i=n[1];if(e.activeIndex=r,!(null===r||r>=i.length)){var o=i.toArray()[r].nativeElement,c=o.offsetParent,a=o.getBoundingClientRect(),s=c.getBoundingClientRect();a.top>=s.top&&a.bottom<=s.bottom||(c.scrollTop+=a.top-s.top-c.clientHeight/2)}}))}},{key:"ngOnDestroy",value:function(){this.onDestroy.next()}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()}},{key:"toTop",value:function(){this.scrollService.scrollToTop()}}]),e}()).\u0275fac=function(e){return new(e||I)(h.Mb(y.a),h.Mb(h.l),h.Mb(v.a))},I.\u0275cmp=h.Gb({type:I,selectors:[["aio-toc"]],viewQuery:function(e,t){var n;1&e&&h.Dc(m,!0),2&e&&h.mc(n=h.Zb())&&(t.items=n)},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&h.xc(0,k,6,8,"div",0),2&e&&h.hc("ngIf","None"!==t.type)},directives:[r.k,r.j,i.a],encapsulation:2}),I),T=((E=function e(){_classCallCheck(this,e),this.customElementComponent=w}).\u0275mod=h.Kb({type:E}),E.\u0275inj=h.Jb({factory:function(e){return new(e||E)},imports:[[r.c,i.b]]}),E)}}]);
//# sourceMappingURL=toc-toc-module-es5.2ed0fc86fd4f9b7bf72e.js.map