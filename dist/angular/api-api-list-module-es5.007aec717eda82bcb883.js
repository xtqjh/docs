function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{dth9:function(t,e,i){"use strict";i.r(e);var s,n=i("ofXK"),a=i("tk/3"),c=i("PCNd"),r=i("jtHE"),o=i("itXk"),u=i("lJxs"),l=i("fXoL"),h=i("XNiG"),f=i("1G5W"),p=i("vkgz"),b=i("jn67"),v=i("vHPH"),y=((s=function(){function t(e,i){_classCallCheck(this,t),this.http=e,this.logger=i,this.apiBase=b.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new h.a,this.sectionsSubject=new r.a(1),this._sections=this.sectionsSubject.pipe(Object(f.a)(this.onDestroy))}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.onDestroy.next()}},{key:"fetchSections",value:function(t){var e=this,i=this.apiBase+(t||this.apiListJsonDefault);this.http.get(i).pipe(Object(f.a)(this.onDestroy),Object(p.a)((function(){return e.logger.log("Got API sections from ".concat(i))}))).subscribe((function(t){return e.sectionsSubject.next(t)}),(function(t){throw e.logger.error(t),t}))}},{key:"sections",get:function(){var t=this;return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe((function(e){return t.logger.log("ApiService got API ".concat(e.length," section(s)"))}))),this._sections.pipe(Object(p.a)((function(t){t.forEach((function(t){t.deprecated=!!t.items&&t.items.every((function(t){return"deprecated"===t.stability}))}))})))}}]),t}()).\u0275fac=function(t){return new(t||s)(l.Zb(a.a),l.Zb(v.a))},s.\u0275prov=l.Mb({token:s,factory:s.\u0275fac}),s),d=i("/lUL"),g=i("x4lQ"),m=["filter"];function C(t,e){if(1&t&&(l.Vb(0,"h2"),l.Vb(1,"a",11),l.Ec(2),l.Ub(),l.Ub()),2&t){var i=l.hc().$implicit;l.Cb(1),l.Gb("deprecated-api-item",i.deprecated),l.mc("href",i.path,l.xc),l.Cb(1),l.Fc(i.title)}}function S(t,e){if(1&t&&(l.Tb(0),l.Vb(1,"li",13),l.Vb(2,"a",11),l.Rb(3,"span"),l.Ec(4),l.Ub(),l.Ub(),l.Sb()),2&t){var i=e.$implicit;l.Cb(2),l.Gb("deprecated-api-item","deprecated"===i.stability),l.mc("href",i.path,l.xc),l.Cb(1),l.Fb("symbol ",i.docType,""),l.Cb(1),l.Gc(" ",i.title," ")}}function k(t,e){if(1&t&&(l.Vb(0,"ul",12),l.Cc(1,S,5,7,"ng-container",8),l.Ub()),2&t){var i=l.hc().$implicit;l.Cb(1),l.mc("ngForOf",i.items)}}function w(t,e){if(1&t&&(l.Vb(0,"div"),l.Cc(1,C,3,4,"h2",9),l.Cc(2,k,2,1,"ul",10),l.Ub()),2&t){var i=e.$implicit;l.Cb(1),l.mc("ngIf",i.items),l.Cb(1),l.mc("ngIf",i.items&&i.items.length)}}var j,O=function t(){_classCallCheck(this,t),this.query="",this.status="all",this.type="all"},T=((j=function(){function t(e,i){_classCallCheck(this,t),this.apiService=e,this.locationService=i,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new r.a(1),this.searchCriteria=new O,this.types=[{value:"all",title:"\u5168\u90e8"},{value:"class",title:"\u7c7b"},{value:"const",title:"\u5e38\u91cf"},{value:"decorator",title:"\u88c5\u9970\u5668"},{value:"directive",title:"\u6307\u4ee4"},{value:"enum",title:"\u679a\u4e3e"},{value:"function",title:"\u51fd\u6570"},{value:"interface",title:"\u63a5\u53e3"},{value:"pipe",title:"\u7ba1\u9053"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"\u7c7b\u578b\u522b\u540d"},{value:"package",title:"\u5305"}],this.statuses=[{value:"all",title:"\u5168\u90e8"},{value:"stable",title:"Stable"},{value:"deprecated",title:"\u5f03\u7528"},{value:"security-risk",title:"\u5b89\u5168\u98ce\u9669"}]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.filteredSections=Object(o.a)([this.apiService.sections,this.criteriaSubject]).pipe(Object(u.a)((function(t){return{sections:t[0],criteria:t[1]}})),Object(u.a)((function(e){return e.sections.map((function(i){return Object.assign(Object.assign({},i),{items:t.filterSection(i,e.criteria)})}))}))),this.initializeSearchCriteria()}},{key:"setQuery",value:function(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})}},{key:"setStatus",value:function(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})}},{key:"setType",value:function(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})}},{key:"toggleStatusMenu",value:function(){this.showStatusMenu=!this.showStatusMenu}},{key:"toggleTypeMenu",value:function(){this.showTypeMenu=!this.showTypeMenu}},{key:"filterSection",value:function(t,e){var i=e.query,s=e.status,n=e.type,a=!i||-1!==t.name.indexOf(i),c=t.items.filter((function(t){return function(t){return"all"===n||n===t.docType}(t)&&function(t){return"all"===s||s===t.stability||"security-risk"===s&&t.securityRisk}(t)&&function(t){return a||-1!==t.name.indexOf(i)}(t)}));return c.length?c:a&&"package"===n?[]:null}},{key:"initializeSearchCriteria",value:function(){var t=this.locationService.search(),e=t.query,i=t.status,s=t.type,n=(e||"").toLowerCase();this.queryEl.nativeElement.value=n,this.status=this.statuses.find((function(t){return t.value===i}))||this.statuses[0],this.type=this.types.find((function(t){return t.value===s}))||this.types[0],this.searchCriteria={query:n,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}},{key:"setLocationSearch",value:function(){var t=this.searchCriteria,e=t.query,i=t.status,s=t.type;this.locationService.setSearch("API \u641c\u7d22",{query:e||void 0,status:"all"!==i?i:void 0,type:"all"!==s?s:void 0})}},{key:"setSearchCriteria",value:function(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()}}]),t}()).\u0275fac=function(t){return new(t||j)(l.Qb(y),l.Qb(d.a))},j.\u0275cmp=l.Kb({type:j,selectors:[["aio-api-list"]],viewQuery:function(t,e){var i;1&t&&l.Ac(m,!0),2&t&&l.rc(i=l.ec())&&(e.queryEl=i.first)},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","\u7c7b\u578b\uff1a",3,"options","selected","showSymbol","change"],["label","\u72b6\u6001\uff1a",3,"options","selected","disabled","change"],[1,"form-search"],["placeholder","\u8fc7\u6ee4","aria-label","Filter Search",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Vb(1,"aio-select",1),l.dc("change",(function(t){return e.setType(t.option)})),l.Ub(),l.Vb(2,"aio-select",2),l.dc("change",(function(t){return e.setStatus(t.option)})),l.Ub(),l.Vb(3,"div",3),l.Vb(4,"input",4,5),l.dc("input",(function(t){return e.setQuery(t.target.value)})),l.Ub(),l.Vb(6,"i",6),l.Ec(7,"search"),l.Ub(),l.Ub(),l.Ub(),l.Vb(8,"article",7),l.Cc(9,w,3,2,"div",8),l.ic(10,"async"),l.Ub()),2&t&&(l.Cb(1),l.mc("options",e.types)("selected",e.type)("showSymbol",!0),l.Cb(1),l.mc("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),l.Cb(7),l.mc("ngForOf",l.jc(10,7,e.filteredSections)))},directives:[g.a,n.i,n.j],pipes:[n.b],encapsulation:2}),j);i.d(e,"ApiListModule",(function(){return _}));var U,_=((U=function t(){_classCallCheck(this,t),this.customElementComponent=T}).\u0275mod=l.Ob({type:U}),U.\u0275inj=l.Nb({factory:function(t){return new(t||U)},providers:[y],imports:[[n.c,c.a,a.b]]}),U)}}]);
//# sourceMappingURL=api-api-list-module-es5.007aec717eda82bcb883.js.map