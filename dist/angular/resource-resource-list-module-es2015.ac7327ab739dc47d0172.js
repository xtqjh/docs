(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6U+v":function(e,r,t){"use strict";t.r(r);var o=t("ofXK"),c=t("fXoL"),n=t("lJxs"),s=t("qZ0a"),i=t("jn67"),u=t("tk/3");const b=i.a+"resources.json";let a=(()=>{class e{constructor(e){this.http=e,this.categories=this.getCategories()}getCategories(){const e=this.http.get(b).pipe(Object(n.a)(e=>(function(e){return Object.keys(e).map(r=>{const t=e[r];return{id:h(r),title:r,order:t.order,subCategories:l(t.subCategories,r)}}).sort(f)})(e)),Object(s.a)());return e.connect(),e}}return e.\u0275fac=function(r){return new(r||e)(c.Zb(u.a))},e.\u0275prov=c.Lb({token:e,factory:function(r){return e.\u0275fac(r)},providedIn:null}),e})();function l(e,r){return Object.keys(e).map(t=>{const o=e[t];return{id:h(t),title:t,order:o.order,resources:d(o.resources,t,r)}}).sort(f)}function d(e,r,t){return Object.keys(e).map(o=>{const c=e[o];return c.category=t,c.subCategory=r,c.id=h(o),c}).sort(p)}function f(e,r){return e.order===r.order?p(e,r):e.order>r.order?1:-1}function p(e,r){return e.title.toUpperCase()>r.title.toUpperCase()?1:-1}function h(e){return e.toLowerCase().replace(/\s+/g,"-")}function g(e,r){if(1&e&&(c.Vb(0,"div",10),c.Vb(1,"a",11),c.Vb(2,"div"),c.Vb(3,"h4"),c.Gc(4),c.Tb(),c.Vb(5,"p",12),c.Gc(6),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&e){const e=c.hc().$implicit;c.Ab(1),c.mc("href",e.url,c.xc),c.Ab(3),c.Hc(e.title),c.Ab(2),c.Hc(e.desc||"No Description")}}function m(e,r){if(1&e&&(c.Vb(0,"div"),c.Ec(1,g,7,3,"div",9),c.Tb()),2&e){const e=r.$implicit;c.Ab(1),c.mc("ngIf",e.rev)}}function v(e,r){if(1&e&&(c.Vb(0,"div"),c.Qb(1,"a",5),c.Vb(2,"h3",8),c.Gc(3),c.Tb(),c.Ec(4,m,2,1,"div",7),c.Tb()),2&e){const e=r.$implicit;c.Ab(1),c.nc("id",e.id),c.Ab(2),c.Hc(e.title),c.Ab(1),c.mc("ngForOf",e.resources)}}function T(e,r){if(1&e&&(c.Vb(0,"div",3),c.Vb(1,"header",4),c.Qb(2,"a",5),c.Vb(3,"h2"),c.Gc(4),c.Tb(),c.Tb(),c.Vb(5,"div",6),c.Ec(6,v,5,3,"div",7),c.Tb(),c.Tb()),2&e){const e=r.$implicit;c.Ab(2),c.nc("id",e.id),c.Ab(2),c.Hc(e.title),c.Ab(2),c.mc("ngForOf",e.subCategories)}}let w=(()=>{class e{constructor(e,r){this.resourceService=r,this.scrollPos=0,this.location=e.pathname.replace(/^\/+/,"")}href(e){return this.location+"#"+e.id}ngOnInit(){this.resourceService.categories.subscribe(e=>this.categories=e)}onScroll(e){this.scrollPos=e&&(e.scrollTop||e.body.scrollTop)||0}}return e.\u0275fac=function(r){return new(r||e)(c.Pb(o.q),c.Pb(a))},e.\u0275cmp=c.Jb({type:e,selectors:[["aio-resource-list"]],hostBindings:function(e,r,t){1&e&&c.dc("scroll",(function(e){return r.onScroll(e.target)}),!1,c.uc)},decls:3,vars:1,consts:[[1,"resources-container"],[1,"l-flex--column"],["class","showcase",4,"ngFor","ngForOf"],[1,"showcase"],[1,"c-resource-header"],[1,"h-anchor-offset",3,"id"],[1,"shadow-1"],[4,"ngFor","ngForOf"],[1,"subcategory-title"],["class","c-resource",4,"ngIf"],[1,"c-resource"],["target","_blank",1,"l-flex--column","resource-row-link",3,"href"],[1,"resource-description"]],template:function(e,r){1&e&&(c.Vb(0,"div",0),c.Vb(1,"div",1),c.Ec(2,T,7,3,"div",2),c.Tb(),c.Tb()),2&e&&(c.Ab(2),c.mc("ngForOf",r.categories))},directives:[o.j,o.k],encapsulation:2}),e})();t.d(r,"ResourceListModule",(function(){return V}));let V=(()=>{class e{constructor(){this.customElementComponent=w}}return e.\u0275mod=c.Nb({type:e}),e.\u0275inj=c.Mb({factory:function(r){return new(r||e)},providers:[a],imports:[[o.c]]}),e})()}}]);
//# sourceMappingURL=resource-resource-list-module-es2015.ac7327ab739dc47d0172.js.map