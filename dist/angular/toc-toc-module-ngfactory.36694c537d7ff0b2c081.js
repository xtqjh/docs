(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{KQya:function(n,l,t){"use strict";var e=t("mrSG"),i=1,u={},o=function(n){function l(l,t){var e=n.call(this,l,t)||this;return e.scheduler=l,e.work=t,e}return e.c(l,n),l.prototype.requestAsyncId=function(l,t,e){return void 0===e&&(e=0),null!==e&&e>0?n.prototype.requestAsyncId.call(this,l,t,e):(l.actions.push(this),l.scheduled||(l.scheduled=(o=l.flush.bind(l,null),c=i++,u[c]=o,Promise.resolve().then(function(){return function(n){var l=u[n];l&&l()}(c)}),c)));var o,c},l.prototype.recycleAsyncId=function(l,t,e){if(void 0===e&&(e=0),null!==e&&e>0||null===e&&this.delay>0)return n.prototype.recycleAsyncId.call(this,l,t,e);0===l.actions.length&&(delete u[t],l.scheduled=void 0)},l}(t("h9Dq").a),c=function(n){function l(){return null!==n&&n.apply(this,arguments)||this}return e.c(l,n),l.prototype.flush=function(n){this.active=!0,this.scheduled=void 0;var l,t=this.actions,e=-1,i=t.length;n=n||t.shift();do{if(l=n.execute(n.state,n.delay))break}while(++e<i&&(n=t.shift()));if(this.active=!1,l){for(;++e<i&&(n=t.shift());)n.unsubscribe();throw l}},l}(t("CS9Q").a);t.d(l,"a",function(){return r});var r=new c(o)},s8K4:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=t("K9Ia"),u=t("dzgT"),o=t("KQya"),c=t("ny24"),r=t("mrSG"),s=t("6blF"),a=t("/21U"),d=function(n){function l(l,t,e){void 0===t&&(t=0),void 0===e&&(e=o.a);var i=n.call(this)||this;return i.source=l,i.delayTime=t,i.scheduler=e,(!Object(a.a)(t)||t<0)&&(i.delayTime=0),e&&"function"==typeof e.schedule||(i.scheduler=o.a),i}return r.c(l,n),l.create=function(n,t,e){return void 0===t&&(t=0),void 0===e&&(e=o.a),new l(n,t,e)},l.dispatch=function(n){return this.add(n.source.subscribe(n.subscriber))},l.prototype._subscribe=function(n){return this.scheduler.schedule(l.dispatch,this.delayTime,{source:this.source,subscriber:n})},l}(s.a),p=function(){function n(n,l){this.scheduler=n,this.delay=l}return n.prototype.call=function(n,l){return new d(l,this.delay,this.scheduler).subscribe(n)},n}(),b=t("p0Sj"),f=function(){function n(n,l,t){this.scrollService=n,this.tocService=t,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new i.a,this.primaryMax=4,this.isEmbedded=-1!==l.nativeElement.className.indexOf("embedded")}return n.prototype.ngOnInit=function(){var n=this;this.tocService.tocList.pipe(Object(c.a)(this.onDestroy)).subscribe(function(l){n.tocList=l;var t,e=(t=function(n){return"h1"!==n.level},n.tocList.reduce(function(n,l){return t(l)?n+1:n},0));n.type=e>0?n.isEmbedded?e>n.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})},n.prototype.ngAfterViewInit=function(){var n,l,t=this;this.isEmbedded||Object(u.a)(this.tocService.activeItemIndex.pipe((n=o.a,void 0===l&&(l=0),function(t){return t.lift(new p(n,l))})),this.items.changes.pipe(Object(b.a)(this.items))).pipe(Object(c.a)(this.onDestroy)).subscribe(function(n){var l=n[0],e=n[1];if(t.activeIndex=l,!(null===l||l>=e.length)){var i=e.toArray()[l].nativeElement,u=i.offsetParent,o=i.getBoundingClientRect(),c=u.getBoundingClientRect();o.top>=c.top&&o.bottom<=c.bottom||(u.scrollTop+=o.top-c.top-u.clientHeight/2)}})},n.prototype.ngOnDestroy=function(){this.onDestroy.next()},n.prototype.toggle=function(n){void 0===n&&(n=!0),this.isCollapsed=!this.isCollapsed,n&&this.isCollapsed&&this.toTop()},n.prototype.toTop=function(){this.scrollService.scrollToTop()},n}(),h=function(){return function(){this.customElementComponent=f}}(),m=t("Mr+X"),y=t("SMsm"),v=t("Ip0R"),g=t("Faly"),x=t("TNhP"),I=e.ob({encapsulation:2,styles:[],data:{}});function E(n){return e.Gb(0,[(n()(),e.qb(0,0,null,null,1,"div",[["class","toc-heading embedded"]],null,null,null,null,null)),(n()(),e.Eb(-1,null,[" \u76ee\u5f55 "]))],null,null)}function w(n){return e.Gb(0,[(n()(),e.qb(0,0,null,null,3,"button",[["aria-label","Expand/collapse contents"],["class","toc-heading embedded secondary"],["title","Expand/collapse contents"],["type","button"]],[[1,"aria-pressed",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggle(!1)&&e),e},null,null)),(n()(),e.Eb(-1,null,[" \u76ee\u5f55 "])),(n()(),e.qb(2,0,null,null,1,"mat-icon",[["class","rotating-icon mat-icon"],["role","img"],["svgIcon","keyboard_arrow_right"]],[[2,"collapsed",null],[2,"mat-icon-inline",null]],null,null,m.b,m.a)),e.pb(3,9158656,null,0,y.b,[e.k,y.d,[8,null],[2,y.a]],{svgIcon:[0,"svgIcon"]},null)],function(n,l){n(l,3,0,"keyboard_arrow_right")},function(n,l){var t=l.component;n(l,0,0,!t.isCollapsed),n(l,2,0,t.isCollapsed,e.zb(l,3).inline)})}function k(n){return e.Gb(0,[(n()(),e.qb(0,0,[[1,0],["tocItem",1]],null,1,"li",[],[[8,"title",0],[8,"className",0],[2,"secondary",null],[2,"active",null]],null,null,null,null)),(n()(),e.qb(1,0,null,null,0,"a",[],[[8,"href",4],[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,e.sb(1,"",l.parent.context.$implicit.title,""),e.sb(1,"",l.parent.context.$implicit.level,""),"EmbeddedExpandable"===t.type&&l.parent.context.index>=t.primaryMax,l.parent.context.index===t.activeIndex),n(l,1,0,l.parent.context.$implicit.href,l.parent.context.$implicit.content)})}function O(n){return e.Gb(0,[(n()(),e.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,k)),e.pb(2,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(0,null,null,0))],function(n,l){n(l,2,0,"Floating"===l.component.type||"h1"!==l.context.$implicit.level)},null)}function C(n){return e.Gb(0,[(n()(),e.qb(0,0,null,null,0,"button",[["aria-label","Expand/collapse contents"],["class","toc-more-items embedded material-icons"],["title","Expand/collapse contents"],["type","button"]],[[2,"collapsed",null],[1,"aria-pressed",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggle()&&e),e},null,null))],null,function(n,l){var t=l.component;n(l,0,0,t.isCollapsed,!t.isCollapsed)})}function q(n){return e.Gb(0,[(n()(),e.qb(0,0,null,null,9,"div",[["class","toc-inner no-print"]],[[2,"collapsed",null]],null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,E)),e.pb(2,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,w)),e.pb(4,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(5,0,null,null,2,"ul",[["class","toc-list"]],[[2,"embedded",null]],null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,O)),e.pb(7,278528,null,0,v.j,[e.R,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.ib(16777216,null,null,1,null,C)),e.pb(9,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,"EmbeddedSimple"===t.type),n(l,4,0,"EmbeddedExpandable"===t.type),n(l,7,0,t.tocList),n(l,9,0,"EmbeddedExpandable"===t.type)},function(n,l){var t=l.component;n(l,0,0,t.isCollapsed),n(l,5,0,"Floating"!==t.type)})}function S(n){return e.Gb(0,[e.Cb(671088640,1,{items:1}),(n()(),e.ib(16777216,null,null,1,null,q)),e.pb(2,16384,null,0,v.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"None"!==l.component.type)},null)}function T(n){return e.Gb(0,[(n()(),e.qb(0,0,null,null,1,"aio-toc",[],null,null,null,S,I)),e.pb(1,4440064,null,0,f,[g.a,e.k,x.a],null,null)],function(n,l){n(l,1,0)},null)}var G=e.mb("aio-toc",f,T,{},{},[]),j=t("Fzqc"),F=t("Wf4p"),R=t("ZYjt");t.d(l,"TocModuleNgFactory",function(){return M});var M=e.nb(h,[],function(n){return e.wb([e.xb(512,e.j,e.db,[[8,[G]],[3,e.j],e.y]),e.xb(4608,v.m,v.l,[e.v,[2,v.x]]),e.xb(1073742336,v.c,v.c,[]),e.xb(1073742336,j.a,j.a,[]),e.xb(1073742336,F.e,F.e,[[2,F.b],[2,R.g]]),e.xb(1073742336,y.c,y.c,[]),e.xb(1073742336,h,h,[])])})}}]);
//# sourceMappingURL=toc-toc-module-ngfactory.36694c537d7ff0b2c081.js.map