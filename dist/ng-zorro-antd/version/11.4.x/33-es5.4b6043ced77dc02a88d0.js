!function(){function n(e,t,i){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,e,t){var i=function(n,e){for(;!Object.prototype.hasOwnProperty.call(n,e)&&null!==(n=o(n)););return n}(n,e);if(i){var c=Object.getOwnPropertyDescriptor(i,e);return c.get?c.get.call(t):c.value}})(e,t,i||e)}function e(n,t){return(e=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,t)}function t(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}();return function(){var t,c=o(n);if(e){var s=o(this).constructor;t=Reflect.construct(c,arguments,s)}else t=c.apply(this,arguments);return i(this,t)}}function i(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function o(n){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function c(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function s(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function b(n,e,t){return e&&s(n.prototype,e),t&&s(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"6lNT":function(i,s,a){"use strict";a.d(s,"a",function(){return N}),a.d(s,"b",function(){return j});var d=a("mrSG"),r=a("cH1L"),p=a("8IHs"),l=a("d1+9"),z=a("XNiG"),u=a("2Vo4"),m=a("jtHE"),h=a("PqYM"),f=a("JX91"),g=a("/uUt"),X=a("eIep"),Y=a("zx2A"),y=function(){function n(e){c(this,n),this.durationSelector=e}return b(n,[{key:"call",value:function(n,e){return e.subscribe(new v(n,this.durationSelector))}}]),n}(),v=function(i){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&e(n,t)}(a,i);var s=t(a);function a(n,e){var t;return c(this,a),(t=s.call(this,n)).durationSelector=e,t.hasValue=!1,t}return b(a,[{key:"_next",value:function(n){try{var e=this.durationSelector.call(this,n);e&&this._tryNext(n,e)}catch(t){this.destination.error(t)}}},{key:"_complete",value:function(){this.emitValue(),this.destination.complete()}},{key:"_tryNext",value:function(n,e){var t=this.durationSubscription;this.value=n,this.hasValue=!0,t&&(t.unsubscribe(),this.remove(t)),(t=Object(Y.c)(e,new Y.a(this)))&&!t.closed&&this.add(this.durationSubscription=t)}},{key:"notifyNext",value:function(){this.emitValue()}},{key:"notifyComplete",value:function(){this.emitValue()}},{key:"emitValue",value:function(){if(this.hasValue){var e=this.value,t=this.durationSubscription;t&&(this.durationSubscription=void 0,t.unsubscribe(),this.remove(t)),this.value=void 0,this.hasValue=!1,n(o(a.prototype),"_next",this).call(this,e)}}}]),a}(Y.b),k=a("1G5W"),S=a("GU7r"),T=a("ofXK"),Q=a("fXoL");function C(n,e){1&n&&(Q.Yb(0,"span",3),Q.Tb(1,"i",4),Q.Tb(2,"i",4),Q.Tb(3,"i",4),Q.Tb(4,"i",4),Q.Xb())}function O(n,e){}function w(n,e){if(1&n&&(Q.Yb(0,"div",8),Q.Qc(1),Q.Xb()),2&n){var t=Q.kc(2);Q.Db(1),Q.Rc(t.nzTip)}}function I(n,e){if(1&n&&(Q.Yb(0,"div"),Q.Yb(1,"div",5),Q.Oc(2,O,0,0,"ng-template",6),Q.Oc(3,w,2,1,"div",7),Q.Xb(),Q.Xb()),2&n){var t=Q.kc(),i=Q.Cc(1);Q.Db(1),Q.Jb("ant-spin-rtl","rtl"===t.dir)("ant-spin-spinning",t.isLoading)("ant-spin-lg","large"===t.nzSize)("ant-spin-sm","small"===t.nzSize)("ant-spin-show-text",t.nzTip),Q.Db(1),Q.sc("ngTemplateOutlet",t.nzIndicator||i),Q.Db(1),Q.sc("ngIf",t.nzTip)}}function D(n,e){if(1&n&&(Q.Yb(0,"div",9),Q.qc(1),Q.Xb()),2&n){var t=Q.kc();Q.Jb("ant-spin-blur",t.isLoading)}}var x,H,L=["*"],N=((H=function(){function n(e,t,i){c(this,n),this.nzConfigService=e,this.cdr=t,this.directionality=i,this._nzModuleName="spin",this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new z.a,this.spinning$=new u.a(this.nzSpinning),this.delay$=new m.a(1),this.isLoading=!1,this.dir="ltr"}return b(n,[{key:"ngOnInit",value:function(){var n,e=this;this.delay$.pipe(Object(f.a)(this.nzDelay),Object(g.a)(),Object(X.a)(function(n){return 0===n?e.spinning$:e.spinning$.pipe((t=function(e){return Object(h.a)(e?n:0)},function(n){return n.lift(new y(t))}));var t}),Object(k.a)(this.destroy$)).subscribe(function(n){e.isLoading=n,e.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe(Object(k.a)(this.destroy$)).subscribe(function(){return e.cdr.markForCheck()}),null===(n=this.directionality.change)||void 0===n||n.pipe(Object(k.a)(this.destroy$)).subscribe(function(n){e.dir=n,e.cdr.detectChanges()}),this.dir=this.directionality.value}},{key:"ngOnChanges",value:function(n){var e=n.nzSpinning,t=n.nzDelay;e&&this.spinning$.next(this.nzSpinning),t&&this.delay$.next(this.nzDelay)}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}}]),n}()).\u0275fac=function(n){return new(n||H)(Q.Rb(p.b),Q.Rb(Q.h),Q.Rb(r.c,8))},H.\u0275cmp=Q.Lb({type:H,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(n,e){2&n&&Q.Jb("ant-spin-nested-loading",!e.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[Q.Bb],ngContentSelectors:L,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(n,e){1&n&&(Q.rc(),Q.Oc(0,C,5,0,"ng-template",null,0,Q.Pc),Q.Oc(2,I,4,12,"div",1),Q.Oc(3,D,2,2,"div",2)),2&n&&(Q.Db(2),Q.sc("ngIf",e.isLoading),Q.Db(1),Q.sc("ngIf",!e.nzSimple))},directives:[T.o,T.t],encapsulation:2}),Object(d.b)([Object(p.c)(),Object(d.c)("design:type",Object)],H.prototype,"nzIndicator",void 0),Object(d.b)([Object(l.b)(),Object(d.c)("design:type",Object)],H.prototype,"nzDelay",void 0),Object(d.b)([Object(l.a)(),Object(d.c)("design:type",Object)],H.prototype,"nzSimple",void 0),Object(d.b)([Object(l.a)(),Object(d.c)("design:type",Object)],H.prototype,"nzSpinning",void 0),H),j=((x=function n(){c(this,n)}).\u0275fac=function(n){return new(n||x)},x.\u0275mod=Q.Pb({type:x}),x.\u0275inj=Q.Ob({imports:[[r.a,T.c,S.b]]}),x)},rEOW:function(n,e,t){"use strict";t.r(e),t.d(e,"NzDemoSpinModule",function(){return E});var i,o,s,a=t("tyNb"),d=t("WGB2"),r=t("6lNT"),p=t("TcjH"),l=t("MOHP"),z=t("uPy1"),u=[r.b,p.b,l.b,z.b],m=t("rKiv"),h=t("fXoL"),f=t("utH8"),g=t("l83q"),X=t("pk25"),Y=t("T+9E"),y=((s=function n(){c(this,n)}).\u0275fac=function(n){return new(n||s)},s.\u0275cmp=h.Lb({type:s,selectors:[["nz-demo-spin-basic"]],decls:1,vars:0,consts:[["nzSimple",""]],template:function(n,e){1&n&&h.Tb(0,"nz-spin",0)},directives:[r.a],encapsulation:2}),s),v=((o=function n(){c(this,n)}).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=h.Lb({type:o,selectors:[["nz-demo-spin-inside"]],decls:2,vars:0,consts:[[1,"example"],["nzSimple",""]],template:function(n,e){1&n&&(h.Yb(0,"div",0),h.Tb(1,"nz-spin",1),h.Xb())},directives:[r.a],styles:[".example[_ngcontent-%COMP%] {\n        text-align: center;\n        background: rgba(0, 0, 0, 0.05);\n        border-radius: 4px;\n        margin-bottom: 20px;\n        padding: 30px 50px;\n        margin: 20px 0;\n      }"]}),o),k=((i=function n(){c(this,n)}).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=h.Lb({type:i,selectors:[["nz-demo-spin-tip"]],decls:2,vars:0,consts:[["nzTip","Loading..."],["nzType","info","nzMessage","Alert message title","nzDescription","Further details about the context of this alert."]],template:function(n,e){1&n&&(h.Yb(0,"nz-spin",0),h.Tb(1,"nz-alert",1),h.Xb())},directives:[r.a,p.a],encapsulation:2}),i);function S(n,e){1&n&&h.Tb(0,"i",2)}var T,Q,C,O,w,I,D,x=((Q=function n(){c(this,n)}).\u0275fac=function(n){return new(n||Q)},Q.\u0275cmp=h.Lb({type:Q,selectors:[["nz-demo-spin-custom-indicator"]],decls:3,vars:1,consts:[["indicatorTemplate",""],["nzSimple","",3,"nzIndicator"],["nz-icon","","nzType","loading"]],template:function(n,e){if(1&n&&(h.Oc(0,S,1,0,"ng-template",null,0,h.Pc),h.Tb(2,"nz-spin",1)),2&n){var t=h.Cc(1);h.Db(2),h.sc("nzIndicator",t)}},directives:[r.a,l.a],styles:["i[_ngcontent-%COMP%] {\n        font-size: 24px;\n      }"]}),Q),H=((T=function n(){c(this,n)}).\u0275fac=function(n){return new(n||T)},T.\u0275cmp=h.Lb({type:T,selectors:[["nz-demo-spin-size"]],decls:3,vars:2,consts:[["nzSimple","",3,"nzSize"],["nzSimple",""]],template:function(n,e){1&n&&(h.Tb(0,"nz-spin",0),h.Tb(1,"nz-spin",1),h.Tb(2,"nz-spin",0)),2&n&&(h.sc("nzSize","small"),h.Db(2),h.sc("nzSize","large"))},directives:[r.a],styles:["nz-spin[_ngcontent-%COMP%] {\n        display: inline-block;\n        margin-right: 16px;\n      }"]}),T),L=t("3Pt+"),N=((D=function n(){c(this,n),this.isSpinning=!1}).\u0275fac=function(n){return new(n||D)},D.\u0275cmp=h.Lb({type:D,selectors:[["nz-demo-spin-nested"]],decls:6,vars:5,consts:[[3,"nzSpinning"],[3,"nzType","nzMessage","nzDescription"],[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(h.Yb(0,"nz-spin",0),h.Tb(1,"nz-alert",1),h.Xb(),h.Tb(2,"br"),h.Yb(3,"div"),h.Qc(4," Loading state\uff1a "),h.Yb(5,"nz-switch",2),h.gc("ngModelChange",function(n){return e.isSpinning=n}),h.Xb(),h.Xb()),2&n&&(h.sc("nzSpinning",e.isSpinning),h.Db(1),h.sc("nzType","info")("nzMessage","Alert message title")("nzDescription","Further details about the context of this alert."),h.Db(4),h.sc("ngModel",e.isSpinning))},directives:[r.a,p.a,z.a,L.p,L.s],encapsulation:2}),D),j=((I=function n(){c(this,n),this.isSpinning=!1}).\u0275fac=function(n){return new(n||I)},I.\u0275cmp=h.Lb({type:I,selectors:[["nz-demo-spin-delay-and-debounce"]],decls:6,vars:6,consts:[[3,"nzSpinning","nzDelay"],[3,"nzType","nzMessage","nzDescription"],[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(h.Yb(0,"nz-spin",0),h.Tb(1,"nz-alert",1),h.Xb(),h.Tb(2,"br"),h.Yb(3,"div"),h.Qc(4," Loading state\uff1a "),h.Yb(5,"nz-switch",2),h.gc("ngModelChange",function(n){return e.isSpinning=n}),h.Xb(),h.Xb()),2&n&&(h.sc("nzSpinning",e.isSpinning)("nzDelay",500),h.Db(1),h.sc("nzType","info")("nzMessage","Alert message title")("nzDescription","Further details about the context of this alert."),h.Db(4),h.sc("ngModel",e.isSpinning))},directives:[r.a,p.a,z.a,L.p,L.s],encapsulation:2}),I),R=((w=function(){function n(){c(this,n),this.expanded=!1}return b(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||w)},w.\u0275cmp=h.Lb({type:w,selectors:[["nz-demo-spin"]],viewQuery:function(n,e){var t;1&n&&h.Vc(m.a,1),2&n&&h.Bc(t=h.hc())&&(e.codeBoxes=t)},decls:201,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-spin-demo-basic","nzTitle","\u57fa\u672c\u7528\u6cd5"],["nzHref","#components-spin-demo-size","nzTitle","\u5404\u79cd\u5927\u5c0f"],["nzHref","#components-spin-demo-inside","nzTitle","\u5bb9\u5668"],["nzHref","#components-spin-demo-nested","nzTitle","\u5361\u7247\u52a0\u8f7d\u4e2d"],["nzHref","#components-spin-demo-tip","nzTitle","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848"],["nzHref","#components-spin-demo-delay-and-debounce","nzTitle","\u5ef6\u8fdf"],["nzHref","#components-spin-demo-custom-indicator","nzTitle","\u81ea\u5b9a\u4e49\u6307\u793a\u7b26"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c\u7528\u6cd5","nzSelector","nz-demo-spin-basic","nzGenerateCommand","ng g ng-zorro-antd:spin-basic <name>","nzComponentName","NzDemoSpinBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u5bb9\u5668","nzSelector","nz-demo-spin-inside","nzGenerateCommand","ng g ng-zorro-antd:spin-inside <name>","nzComponentName","NzDemoSpinInsideComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848","nzSelector","nz-demo-spin-tip","nzGenerateCommand","ng g ng-zorro-antd:spin-tip <name>","nzComponentName","NzDemoSpinTipComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u6307\u793a\u7b26","nzSelector","nz-demo-spin-custom-indicator","nzGenerateCommand","ng g ng-zorro-antd:spin-custom-indicator <name>","nzComponentName","NzDemoSpinCustomIndicatorComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5404\u79cd\u5927\u5c0f","nzSelector","nz-demo-spin-size","nzGenerateCommand","ng g ng-zorro-antd:spin-size <name>","nzComponentName","NzDemoSpinSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5361\u7247\u52a0\u8f7d\u4e2d","nzSelector","nz-demo-spin-nested","nzGenerateCommand","ng g ng-zorro-antd:spin-nested <name>","nzComponentName","NzDemoSpinNestedComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5ef6\u8fdf","nzSelector","nz-demo-spin-delay-and-debounce","nzGenerateCommand","ng g ng-zorro-antd:spin-delay-and-debounce <name>","nzComponentName","NzDemoSpinDelayAndDebounceComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-spin"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-spin'",1,"anchor"]],template:function(n,e){1&n&&(h.Yb(0,"article"),h.Yb(1,"nz-affix",0),h.Yb(2,"nz-anchor",1),h.gc("nzClick",function(n){return e.goLink(n)}),h.Tb(3,"nz-link",2),h.Tb(4,"nz-link",3),h.Tb(5,"nz-link",4),h.Tb(6,"nz-link",5),h.Tb(7,"nz-link",6),h.Tb(8,"nz-link",7),h.Tb(9,"nz-link",8),h.Tb(10,"nz-link",9),h.Xb(),h.Xb(),h.Yb(11,"section",10),h.Yb(12,"h1"),h.Qc(13,"Spin"),h.Yb(14,"span",11),h.Qc(15,"\u52a0\u8f7d\u4e2d"),h.Xb(),h.Tb(16,"span",12),h.Yb(17,"a",13),h.Tb(18,"i",14),h.Xb(),h.Xb(),h.Yb(19,"section",10),h.Sb(),h.Yb(20,"p"),h.Qc(21,"\u7528\u4e8e\u9875\u9762\u548c\u533a\u5757\u7684\u52a0\u8f7d\u4e2d\u72b6\u6001\u3002"),h.Xb(),h.Yb(22,"h2",15),h.Yb(23,"span"),h.Qc(24,"\u4f55\u65f6\u4f7f\u7528"),h.Xb(),h.Yb(25,"a",16),h.Qc(26,"#"),h.Xb(),h.Xb(),h.Yb(27,"p"),h.Qc(28,"\u9875\u9762\u5c40\u90e8\u5904\u4e8e\u7b49\u5f85\u5f02\u6b65\u6570\u636e\u6216\u6b63\u5728\u6e32\u67d3\u8fc7\u7a0b\u65f6\uff0c\u5408\u9002\u7684\u52a0\u8f7d\u52a8\u6548\u4f1a\u6709\u6548\u7f13\u89e3\u7528\u6237\u7684\u7126\u8651\u3002"),h.Xb(),h.Yb(29,"pre",17),h.Yb(30,"code"),h.Yb(31,"span",18),h.Qc(32,"import"),h.Xb(),h.Qc(33," "),h.Yb(34,"span",19),h.Qc(35,"{"),h.Xb(),h.Qc(36," NzSpinModule "),h.Yb(37,"span",19),h.Qc(38,"}"),h.Xb(),h.Qc(39," "),h.Yb(40,"span",18),h.Qc(41,"from"),h.Xb(),h.Qc(42," "),h.Yb(43,"span",20),h.Qc(44,"'ng-zorro-antd/spin'"),h.Xb(),h.Yb(45,"span",19),h.Qc(46,";"),h.Xb(),h.Xb(),h.Xb(),h.Zb(),h.Xb(),h.Yb(47,"h2"),h.Yb(48,"span"),h.Qc(49,"\u4ee3\u7801\u6f14\u793a"),h.Xb(),h.Yb(50,"i",21),h.gc("click",function(){return e.expandAllCode()}),h.Xb(),h.Xb(),h.Xb(),h.Yb(51,"div",22),h.Yb(52,"div",23),h.Yb(53,"nz-code-box",24),h.Tb(54,"nz-demo-spin-basic",25),h.Yb(55,"div",26),h.Sb(),h.Yb(56,"p"),h.Qc(57,"\u4e00\u4e2a\u7b80\u5355\u7684 loading \u72b6\u6001\u3002"),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(58,"nz-code-box",27),h.Tb(59,"nz-demo-spin-inside",25),h.Yb(60,"div",26),h.Sb(),h.Yb(61,"p"),h.Qc(62,"\u653e\u5165\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002"),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(63,"nz-code-box",28),h.Tb(64,"nz-demo-spin-tip",25),h.Yb(65,"div",26),h.Sb(),h.Yb(66,"p"),h.Qc(67,"\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848\u3002"),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(68,"nz-code-box",29),h.Tb(69,"nz-demo-spin-custom-indicator",25),h.Yb(70,"div",26),h.Sb(),h.Yb(71,"p"),h.Qc(72,"\u4f7f\u7528\u81ea\u5b9a\u4e49\u6307\u793a\u7b26\u3002"),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Xb(),h.Yb(73,"div",23),h.Yb(74,"nz-code-box",30),h.Tb(75,"nz-demo-spin-size",25),h.Yb(76,"div",26),h.Sb(),h.Yb(77,"p"),h.Qc(78,"\u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\uff0c\u9ed8\u8ba4\u7528\u4e8e\u5361\u7247\u5bb9\u5668\u7ea7\u52a0\u8f7d\uff0c\u5927\u7684\u7528\u4e8e"),h.Yb(79,"strong"),h.Qc(80,"\u9875\u9762\u7ea7"),h.Xb(),h.Qc(81,"\u52a0\u8f7d\u3002"),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(82,"nz-code-box",31),h.Tb(83,"nz-demo-spin-nested",25),h.Yb(84,"div",26),h.Sb(),h.Yb(85,"p"),h.Qc(86,"\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 "),h.Yb(87,"code"),h.Qc(88,"nz-spin"),h.Xb(),h.Qc(89," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(90,"nz-code-box",32),h.Tb(91,"nz-demo-spin-delay-and-debounce",25),h.Yb(92,"div",26),h.Sb(),h.Yb(93,"p"),h.Qc(94,"\u5ef6\u8fdf\u663e\u793a loading \u6548\u679c\u3002\u5f53 spinning \u72b6\u6001\u5728 "),h.Yb(95,"code"),h.Qc(96,"nzDelay"),h.Xb(),h.Qc(97," \u65f6\u95f4\u5185\u7ed3\u675f\uff0c\u5219\u4e0d\u663e\u793a loading \u72b6\u6001\u3002"),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Xb(),h.Xb(),h.Yb(98,"section",33),h.Sb(),h.Yb(99,"h2",34),h.Yb(100,"span"),h.Qc(101,"API"),h.Xb(),h.Yb(102,"a",35),h.Qc(103,"#"),h.Xb(),h.Xb(),h.Yb(104,"h3",36),h.Yb(105,"span"),h.Qc(106,"nz-spin"),h.Xb(),h.Yb(107,"label",37),h.Qc(108,"component"),h.Xb(),h.Yb(109,"a",38),h.Qc(110,"#"),h.Xb(),h.Xb(),h.Yb(111,"table"),h.Yb(112,"thead"),h.Yb(113,"tr"),h.Yb(114,"th"),h.Qc(115,"\u53c2\u6570"),h.Xb(),h.Yb(116,"th"),h.Qc(117,"\u8bf4\u660e"),h.Xb(),h.Yb(118,"th"),h.Qc(119,"\u7c7b\u578b"),h.Xb(),h.Yb(120,"th"),h.Qc(121,"\u9ed8\u8ba4\u503c"),h.Xb(),h.Yb(122,"th"),h.Qc(123,"\u5168\u5c40\u914d\u7f6e"),h.Xb(),h.Xb(),h.Xb(),h.Yb(124,"tbody"),h.Yb(125,"tr"),h.Yb(126,"td"),h.Yb(127,"code"),h.Qc(128,"[nzDelay]"),h.Xb(),h.Xb(),h.Yb(129,"td"),h.Qc(130,"\u5ef6\u8fdf\u663e\u793a\u52a0\u8f7d\u6548\u679c\u7684\u65f6\u95f4\uff08\u9632\u6b62\u95ea\u70c1\uff09\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2"),h.Xb(),h.Yb(131,"td"),h.Yb(132,"code"),h.Qc(133,"number"),h.Xb(),h.Xb(),h.Yb(134,"td"),h.Qc(135,"-"),h.Xb(),h.Tb(136,"td"),h.Xb(),h.Yb(137,"tr"),h.Yb(138,"td"),h.Yb(139,"code"),h.Qc(140,"[nzIndicator]"),h.Xb(),h.Xb(),h.Yb(141,"td"),h.Qc(142,"\u52a0\u8f7d\u6307\u793a\u7b26"),h.Xb(),h.Yb(143,"td"),h.Yb(144,"code"),h.Qc(145,"TemplateRef<void>"),h.Xb(),h.Xb(),h.Yb(146,"td"),h.Qc(147,"-"),h.Xb(),h.Yb(148,"td"),h.Qc(149,"\u2705"),h.Xb(),h.Xb(),h.Yb(150,"tr"),h.Yb(151,"td"),h.Yb(152,"code"),h.Qc(153,"[nzSize]"),h.Xb(),h.Xb(),h.Yb(154,"td"),h.Qc(155,"\u7ec4\u4ef6\u5927\u5c0f"),h.Xb(),h.Yb(156,"td"),h.Yb(157,"code"),h.Qc(158,"'large' | 'small' | 'default'"),h.Xb(),h.Xb(),h.Yb(159,"td"),h.Yb(160,"code"),h.Qc(161,"'default'"),h.Xb(),h.Xb(),h.Tb(162,"td"),h.Xb(),h.Yb(163,"tr"),h.Yb(164,"td"),h.Yb(165,"code"),h.Qc(166,"[nzSpinning]"),h.Xb(),h.Xb(),h.Yb(167,"td"),h.Qc(168,"\u662f\u5426\u65cb\u8f6c"),h.Xb(),h.Yb(169,"td"),h.Yb(170,"code"),h.Qc(171,"boolean"),h.Xb(),h.Xb(),h.Yb(172,"td"),h.Yb(173,"code"),h.Qc(174,"true"),h.Xb(),h.Xb(),h.Tb(175,"td"),h.Xb(),h.Yb(176,"tr"),h.Yb(177,"td"),h.Yb(178,"code"),h.Qc(179,"[nzSimple]"),h.Xb(),h.Xb(),h.Yb(180,"td"),h.Qc(181,"\u662f\u5426\u5305\u88f9\u5143\u7d20"),h.Xb(),h.Yb(182,"td"),h.Yb(183,"code"),h.Qc(184,"boolean"),h.Xb(),h.Xb(),h.Yb(185,"td"),h.Yb(186,"code"),h.Qc(187,"false"),h.Xb(),h.Xb(),h.Tb(188,"td"),h.Xb(),h.Yb(189,"tr"),h.Yb(190,"td"),h.Yb(191,"code"),h.Qc(192,"[nzTip]"),h.Xb(),h.Xb(),h.Yb(193,"td"),h.Qc(194,"\u5f53\u4f5c\u4e3a\u5305\u88f9\u5143\u7d20\u65f6\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848"),h.Xb(),h.Yb(195,"td"),h.Yb(196,"code"),h.Qc(197,"string"),h.Xb(),h.Xb(),h.Yb(198,"td"),h.Qc(199,"-"),h.Xb(),h.Tb(200,"td"),h.Xb(),h.Xb(),h.Xb(),h.Zb(),h.Xb(),h.Xb()),2&n&&(h.Db(1),h.sc("nzOffsetTop",16),h.Db(1),h.sc("nzAffix",!1),h.Db(49),h.sc("nzGutter",16),h.Db(1),h.sc("nzXl",12)("nzSpan",24),h.Db(1),h.sc("nzId","components-spin-demo-basic")("nzLink","components-spin-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/basic.md"),h.Db(5),h.sc("nzId","components-spin-demo-inside")("nzLink","components-spin-demo-inside")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/inside.md"),h.Db(5),h.sc("nzId","components-spin-demo-tip")("nzLink","components-spin-demo-tip")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/tip.md"),h.Db(5),h.sc("nzId","components-spin-demo-custom-indicator")("nzLink","components-spin-demo-custom-indicator")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/custom-indicator.md"),h.Db(5),h.sc("nzXl",12)("nzSpan",24),h.Db(1),h.sc("nzId","components-spin-demo-size")("nzLink","components-spin-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/size.md"),h.Db(8),h.sc("nzId","components-spin-demo-nested")("nzLink","components-spin-demo-nested")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/nested.md"),h.Db(8),h.sc("nzId","components-spin-demo-delay-and-debounce")("nzLink","components-spin-demo-delay-and-debounce")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/delay-and-debounce.md"))},directives:[f.a,g.a,g.b,l.a,X.d,Y.c,Y.a,m.a,y,v,k,x,H,N,j],encapsulation:2}),w),G=((O=function(){function n(){c(this,n),this.expanded=!1}return b(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||O)},O.\u0275cmp=h.Lb({type:O,selectors:[["nz-demo-spin"]],viewQuery:function(n,e){var t;1&n&&h.Vc(m.a,1),2&n&&h.Bc(t=h.hc())&&(e.codeBoxes=t)},decls:209,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-spin-demo-basic","nzTitle","Basic Usage"],["nzHref","#components-spin-demo-size","nzTitle","Size"],["nzHref","#components-spin-demo-inside","nzTitle","Inside a container"],["nzHref","#components-spin-demo-nested","nzTitle","Embedded mode"],["nzHref","#components-spin-demo-tip","nzTitle","Customized description"],["nzHref","#components-spin-demo-delay-and-debounce","nzTitle","delay"],["nzHref","#components-spin-demo-custom-indicator","nzTitle","Custom spinning indicator"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic Usage","nzSelector","nz-demo-spin-basic","nzGenerateCommand","ng g ng-zorro-antd:spin-basic <name>","nzComponentName","NzDemoSpinBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Inside a container","nzSelector","nz-demo-spin-inside","nzGenerateCommand","ng g ng-zorro-antd:spin-inside <name>","nzComponentName","NzDemoSpinInsideComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customized description","nzSelector","nz-demo-spin-tip","nzGenerateCommand","ng g ng-zorro-antd:spin-tip <name>","nzComponentName","NzDemoSpinTipComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Custom spinning indicator","nzSelector","nz-demo-spin-custom-indicator","nzGenerateCommand","ng g ng-zorro-antd:spin-custom-indicator <name>","nzComponentName","NzDemoSpinCustomIndicatorComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Size","nzSelector","nz-demo-spin-size","nzGenerateCommand","ng g ng-zorro-antd:spin-size <name>","nzComponentName","NzDemoSpinSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Embedded mode","nzSelector","nz-demo-spin-nested","nzGenerateCommand","ng g ng-zorro-antd:spin-nested <name>","nzComponentName","NzDemoSpinNestedComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","delay","nzSelector","nz-demo-spin-delay-and-debounce","nzGenerateCommand","ng g ng-zorro-antd:spin-delay-and-debounce <name>","nzComponentName","NzDemoSpinDelayAndDebounceComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-spin"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-spin'",1,"anchor"]],template:function(n,e){1&n&&(h.Yb(0,"article"),h.Yb(1,"nz-affix",0),h.Yb(2,"nz-anchor",1),h.gc("nzClick",function(n){return e.goLink(n)}),h.Tb(3,"nz-link",2),h.Tb(4,"nz-link",3),h.Tb(5,"nz-link",4),h.Tb(6,"nz-link",5),h.Tb(7,"nz-link",6),h.Tb(8,"nz-link",7),h.Tb(9,"nz-link",8),h.Tb(10,"nz-link",9),h.Xb(),h.Xb(),h.Yb(11,"section",10),h.Yb(12,"h1"),h.Qc(13,"Spin"),h.Tb(14,"span",11),h.Tb(15,"span",12),h.Yb(16,"a",13),h.Tb(17,"i",14),h.Xb(),h.Xb(),h.Yb(18,"section",10),h.Sb(),h.Yb(19,"p"),h.Qc(20,"A spinner for displaying loading state of a page or a section."),h.Xb(),h.Yb(21,"h2",15),h.Yb(22,"span"),h.Qc(23,"When To Use"),h.Xb(),h.Yb(24,"a",16),h.Qc(25,"#"),h.Xb(),h.Xb(),h.Yb(26,"p"),h.Qc(27,"When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude."),h.Xb(),h.Yb(28,"pre",17),h.Yb(29,"code"),h.Yb(30,"span",18),h.Qc(31,"import"),h.Xb(),h.Qc(32," "),h.Yb(33,"span",19),h.Qc(34,"{"),h.Xb(),h.Qc(35," NzSpinModule "),h.Yb(36,"span",19),h.Qc(37,"}"),h.Xb(),h.Qc(38," "),h.Yb(39,"span",18),h.Qc(40,"from"),h.Xb(),h.Qc(41," "),h.Yb(42,"span",20),h.Qc(43,"'ng-zorro-antd/spin'"),h.Xb(),h.Yb(44,"span",19),h.Qc(45,";"),h.Xb(),h.Xb(),h.Xb(),h.Zb(),h.Xb(),h.Yb(46,"h2"),h.Yb(47,"span"),h.Qc(48,"Examples"),h.Xb(),h.Yb(49,"i",21),h.gc("click",function(){return e.expandAllCode()}),h.Xb(),h.Xb(),h.Xb(),h.Yb(50,"div",22),h.Yb(51,"div",23),h.Yb(52,"nz-code-box",24),h.Tb(53,"nz-demo-spin-basic",25),h.Yb(54,"div",26),h.Sb(),h.Yb(55,"p"),h.Qc(56,"A simple loading status."),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(57,"nz-code-box",27),h.Tb(58,"nz-demo-spin-inside",25),h.Yb(59,"div",26),h.Sb(),h.Yb(60,"p"),h.Qc(61,"Spin in a container."),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(62,"nz-code-box",28),h.Tb(63,"nz-demo-spin-tip",25),h.Yb(64,"div",26),h.Sb(),h.Yb(65,"p"),h.Qc(66,"Customized description content."),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(67,"nz-code-box",29),h.Tb(68,"nz-demo-spin-custom-indicator",25),h.Yb(69,"div",26),h.Sb(),h.Yb(70,"p"),h.Qc(71,"Use custom loading indicator."),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Xb(),h.Yb(72,"div",23),h.Yb(73,"nz-code-box",30),h.Tb(74,"nz-demo-spin-size",25),h.Yb(75,"div",26),h.Sb(),h.Yb(76,"p"),h.Qc(77,"A small "),h.Yb(78,"code"),h.Qc(79,"Spin"),h.Xb(),h.Qc(80," use in loading text, default "),h.Yb(81,"code"),h.Qc(82,"Spin"),h.Xb(),h.Qc(83," use in loading card-level block, and large "),h.Yb(84,"code"),h.Qc(85,"Spin"),h.Xb(),h.Qc(86," use in loading "),h.Yb(87,"strong"),h.Qc(88,"page"),h.Xb(),h.Qc(89,"."),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(90,"nz-code-box",31),h.Tb(91,"nz-demo-spin-nested",25),h.Yb(92,"div",26),h.Sb(),h.Yb(93,"p"),h.Qc(94,"Embedding content into "),h.Yb(95,"code"),h.Qc(96,"nz-spin"),h.Xb(),h.Qc(97," will alter it into loading state."),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Yb(98,"nz-code-box",32),h.Tb(99,"nz-demo-spin-delay-and-debounce",25),h.Yb(100,"div",26),h.Sb(),h.Yb(101,"p"),h.Qc(102,"Specifies a delay for loading state. If "),h.Yb(103,"code"),h.Qc(104,"spinning"),h.Xb(),h.Qc(105," ends during delay, loading status won't appear."),h.Xb(),h.Zb(),h.Xb(),h.Xb(),h.Xb(),h.Xb(),h.Yb(106,"section",33),h.Sb(),h.Yb(107,"h2",34),h.Yb(108,"span"),h.Qc(109,"API"),h.Xb(),h.Yb(110,"a",35),h.Qc(111,"#"),h.Xb(),h.Xb(),h.Yb(112,"h3",36),h.Yb(113,"span"),h.Qc(114,"nz-spin"),h.Xb(),h.Yb(115,"label",37),h.Qc(116,"component"),h.Xb(),h.Yb(117,"a",38),h.Qc(118,"#"),h.Xb(),h.Xb(),h.Yb(119,"table"),h.Yb(120,"thead"),h.Yb(121,"tr"),h.Yb(122,"th"),h.Qc(123,"Property"),h.Xb(),h.Yb(124,"th"),h.Qc(125,"Description"),h.Xb(),h.Yb(126,"th"),h.Qc(127,"Type"),h.Xb(),h.Yb(128,"th"),h.Qc(129,"Default Value"),h.Xb(),h.Yb(130,"th"),h.Qc(131,"Global Config"),h.Xb(),h.Xb(),h.Xb(),h.Yb(132,"tbody"),h.Yb(133,"tr"),h.Yb(134,"td"),h.Yb(135,"code"),h.Qc(136,"[nzDelay]"),h.Xb(),h.Xb(),h.Yb(137,"td"),h.Qc(138,"specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds"),h.Xb(),h.Yb(139,"td"),h.Yb(140,"code"),h.Qc(141,"number"),h.Xb(),h.Xb(),h.Yb(142,"td"),h.Qc(143,"-"),h.Xb(),h.Tb(144,"td"),h.Xb(),h.Yb(145,"tr"),h.Yb(146,"td"),h.Yb(147,"code"),h.Qc(148,"[nzIndicator]"),h.Xb(),h.Xb(),h.Yb(149,"td"),h.Qc(150,"the spinning indicator"),h.Xb(),h.Yb(151,"td"),h.Yb(152,"code"),h.Qc(153,"TemplateRef<void>"),h.Xb(),h.Xb(),h.Yb(154,"td"),h.Qc(155,"-"),h.Xb(),h.Yb(156,"td"),h.Qc(157,"\u2705"),h.Xb(),h.Xb(),h.Yb(158,"tr"),h.Yb(159,"td"),h.Yb(160,"code"),h.Qc(161,"[nzSize]"),h.Xb(),h.Xb(),h.Yb(162,"td"),h.Qc(163,"size of Spin"),h.Xb(),h.Yb(164,"td"),h.Yb(165,"code"),h.Qc(166,"'large' | 'small' | 'default'"),h.Xb(),h.Xb(),h.Yb(167,"td"),h.Yb(168,"code"),h.Qc(169,"'default'"),h.Xb(),h.Xb(),h.Tb(170,"td"),h.Xb(),h.Yb(171,"tr"),h.Yb(172,"td"),h.Yb(173,"code"),h.Qc(174,"[nzSpinning]"),h.Xb(),h.Xb(),h.Yb(175,"td"),h.Qc(176,"whether Spin is spinning"),h.Xb(),h.Yb(177,"td"),h.Yb(178,"code"),h.Qc(179,"boolean"),h.Xb(),h.Xb(),h.Yb(180,"td"),h.Yb(181,"code"),h.Qc(182,"true"),h.Xb(),h.Xb(),h.Tb(183,"td"),h.Xb(),h.Yb(184,"tr"),h.Yb(185,"td"),h.Yb(186,"code"),h.Qc(187,"[nzSimple]"),h.Xb(),h.Xb(),h.Yb(188,"td"),h.Qc(189,"whether Spin has no children"),h.Xb(),h.Yb(190,"td"),h.Yb(191,"code"),h.Qc(192,"boolean"),h.Xb(),h.Xb(),h.Yb(193,"td"),h.Yb(194,"code"),h.Qc(195,"false"),h.Xb(),h.Xb(),h.Tb(196,"td"),h.Xb(),h.Yb(197,"tr"),h.Yb(198,"td"),h.Yb(199,"code"),h.Qc(200,"[nzTip]"),h.Xb(),h.Xb(),h.Yb(201,"td"),h.Qc(202,"customize description content when Spin has children"),h.Xb(),h.Yb(203,"td"),h.Yb(204,"code"),h.Qc(205,"string"),h.Xb(),h.Xb(),h.Yb(206,"td"),h.Qc(207,"-"),h.Xb(),h.Tb(208,"td"),h.Xb(),h.Xb(),h.Xb(),h.Zb(),h.Xb(),h.Xb()),2&n&&(h.Db(1),h.sc("nzOffsetTop",16),h.Db(1),h.sc("nzAffix",!1),h.Db(48),h.sc("nzGutter",16),h.Db(1),h.sc("nzXl",12)("nzSpan",24),h.Db(1),h.sc("nzId","components-spin-demo-basic")("nzLink","components-spin-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/basic.md"),h.Db(5),h.sc("nzId","components-spin-demo-inside")("nzLink","components-spin-demo-inside")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/inside.md"),h.Db(5),h.sc("nzId","components-spin-demo-tip")("nzLink","components-spin-demo-tip")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/tip.md"),h.Db(5),h.sc("nzId","components-spin-demo-custom-indicator")("nzLink","components-spin-demo-custom-indicator")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/custom-indicator.md"),h.Db(5),h.sc("nzXl",12)("nzSpan",24),h.Db(1),h.sc("nzId","components-spin-demo-size")("nzLink","components-spin-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/size.md"),h.Db(17),h.sc("nzId","components-spin-demo-nested")("nzLink","components-spin-demo-nested")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/nested.md"),h.Db(8),h.sc("nzId","components-spin-demo-delay-and-debounce")("nzLink","components-spin-demo-delay-and-debounce")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/spin/demo/delay-and-debounce.md"))},directives:[f.a,g.a,g.b,l.a,X.d,Y.c,Y.a,m.a,y,v,k,x,H,N,j],encapsulation:2}),O),E=((C=function n(){c(this,n)}).\u0275fac=function(n){return new(n||C)},C.\u0275mod=h.Pb({type:C}),C.\u0275inj=h.Ob({imports:[[d.a].concat(u,[a.h.forChild([{path:"en",component:G},{path:"zh",component:R}])])]}),C)},uPy1:function(n,e,t){"use strict";t.d(e,"a",function(){return T}),t.d(e,"b",function(){return Q});var i=t("mrSG"),o=t("FtGj"),s=t("fXoL"),a=t("3Pt+"),d=t("cH1L"),r=t("8IHs"),p=t("d1+9"),l=t("XNiG"),z=t("1G5W"),u=t("ofXK"),m=t("fwD0"),h=t("vdzw"),f=t("MOHP"),g=t("u47x"),X=["switchElement"];function Y(n,e){1&n&&s.Tb(0,"i",8)}function y(n,e){if(1&n&&(s.Wb(0),s.Qc(1),s.Vb()),2&n){var t=s.kc(2);s.Db(1),s.Rc(t.nzCheckedChildren)}}function v(n,e){if(1&n&&(s.Wb(0),s.Oc(1,y,2,1,"ng-container",9),s.Vb()),2&n){var t=s.kc();s.Db(1),s.sc("nzStringTemplateOutlet",t.nzCheckedChildren)}}function k(n,e){if(1&n&&(s.Wb(0),s.Qc(1),s.Vb()),2&n){var t=s.kc(2);s.Db(1),s.Rc(t.nzUnCheckedChildren)}}function S(n,e){if(1&n&&s.Oc(0,k,2,1,"ng-container",9),2&n){var t=s.kc();s.sc("nzStringTemplateOutlet",t.nzUnCheckedChildren)}}var T=function(){var n=function(){function n(e,t,i,o){c(this,n),this.nzConfigService=e,this.cdr=t,this.focusMonitor=i,this.directionality=o,this._nzModuleName="switch",this.isChecked=!1,this.onChange=function(){},this.onTouched=function(){},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.dir="ltr",this.destroy$=new l.a}return b(n,[{key:"onHostClick",value:function(n){n.preventDefault(),this.nzDisabled||this.nzLoading||this.nzControl||this.updateValue(!this.isChecked)}},{key:"updateValue",value:function(n){this.isChecked!==n&&(this.isChecked=n,this.onChange(this.isChecked))}},{key:"onKeyDown",value:function(n){this.nzControl||this.nzDisabled||this.nzLoading||(n.keyCode===o.h?(this.updateValue(!1),n.preventDefault()):n.keyCode===o.j?(this.updateValue(!0),n.preventDefault()):n.keyCode!==o.k&&n.keyCode!==o.e||(this.updateValue(!this.isChecked),n.preventDefault()))}},{key:"focus",value:function(){var n;this.focusMonitor.focusVia(null===(n=this.switchElement)||void 0===n?void 0:n.nativeElement,"keyboard")}},{key:"blur",value:function(){var n;null===(n=this.switchElement)||void 0===n||n.nativeElement.blur()}},{key:"ngOnInit",value:function(){var n,e=this;null===(n=this.directionality.change)||void 0===n||n.pipe(Object(z.a)(this.destroy$)).subscribe(function(n){e.dir=n,e.cdr.detectChanges()}),this.dir=this.directionality.value}},{key:"ngAfterViewInit",value:function(){var n=this;this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe(Object(z.a)(this.destroy$)).subscribe(function(e){e||Promise.resolve().then(function(){return n.onTouched()})})}},{key:"ngOnDestroy",value:function(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}},{key:"writeValue",value:function(n){this.isChecked=n,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(n){this.onChange=n}},{key:"registerOnTouched",value:function(n){this.onTouched=n}},{key:"setDisabledState",value:function(n){this.nzDisabled=n,this.cdr.markForCheck()}}]),n}();return n.\u0275fac=function(e){return new(e||n)(s.Rb(r.b),s.Rb(s.h),s.Rb(g.d),s.Rb(d.c,8))},n.\u0275cmp=s.Lb({type:n,selectors:[["nz-switch"]],viewQuery:function(n,e){var t;(1&n&&s.Vc(X,3),2&n)&&(s.Bc(t=s.hc())&&(e.switchElement=t.first))},hostBindings:function(n,e){1&n&&s.gc("click",function(n){return e.onHostClick(n)})},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize"},exportAs:["nzSwitch"],features:[s.Cb([{provide:a.n,useExisting:Object(s.V)(function(){return n}),multi:!0}])],decls:9,vars:15,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode","keydown"],["switchElement",""],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(n,e){if(1&n&&(s.Yb(0,"button",0,1),s.gc("keydown",function(n){return e.onKeyDown(n)}),s.Yb(2,"span",2),s.Oc(3,Y,1,0,"i",3),s.Xb(),s.Yb(4,"span",4),s.Oc(5,v,2,1,"ng-container",5),s.Oc(6,S,1,1,"ng-template",null,6,s.Pc),s.Xb(),s.Tb(8,"div",7),s.Xb()),2&n){var t=s.Cc(7);s.Jb("ant-switch-checked",e.isChecked)("ant-switch-loading",e.nzLoading)("ant-switch-disabled",e.nzDisabled)("ant-switch-small","small"===e.nzSize)("ant-switch-rtl","rtl"===e.dir),s.sc("disabled",e.nzDisabled)("nzWaveExtraNode",!0),s.Db(3),s.sc("ngIf",e.nzLoading),s.Db(2),s.sc("ngIf",e.isChecked)("ngIfElse",t)}},directives:[h.a,u.o,f.a,m.b],encapsulation:2,changeDetection:0}),Object(i.b)([Object(p.a)(),Object(i.c)("design:type",Object)],n.prototype,"nzLoading",void 0),Object(i.b)([Object(p.a)(),Object(i.c)("design:type",Object)],n.prototype,"nzDisabled",void 0),Object(i.b)([Object(p.a)(),Object(i.c)("design:type",Object)],n.prototype,"nzControl",void 0),Object(i.b)([Object(r.c)(),Object(i.c)("design:type",String)],n.prototype,"nzSize",void 0),n}(),Q=function(){var n=function n(){c(this,n)};return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.Pb({type:n}),n.\u0275inj=s.Ob({imports:[[d.a,u.c,h.b,f.b,m.a]]}),n}()}}])}();