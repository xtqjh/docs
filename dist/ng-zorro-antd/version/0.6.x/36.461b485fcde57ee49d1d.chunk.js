webpackJsonp([36],{"2HdI":function(l,n){l.exports="import { Component } from '@angular/core';\nimport { NzMessageService } from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-message-loading',\n  template  : `\n    <button nz-button [nzType]=\"'default'\" (click)=\"createBasicMessage()\">\u663e\u793a\u52a0\u8f7d\u4e2d</button>\n  `,\n  styles    : []\n})\nexport class NzDemoMessageLoadingComponent {\n\n  constructor(private _message: NzMessageService) {\n  }\n\n  createBasicMessage(): void {\n    const id = this._message.loading('\u6b63\u5728\u6267\u884c\u4e2d', {nzDuration: 0}).messageId;\n    setTimeout(_ => {\n      this._message.remove(id);\n    }, 2500);\n  }\n}\n"},"6dou":function(l,n){l.exports="import {Component} from '@angular/core';\nimport {NzMessageService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-message-icon',\n  template  : `\n    <button nz-button (click)=\"createMessage('success','\u6210\u529f')\">\u663e\u793a\u6210\u529f\u63d0\u793a</button>\n    <button nz-button (click)=\"createMessage('error','\u62a5\u9519')\">\u663e\u793a\u62a5\u9519\u63d0\u793a</button>\n    <button nz-button (click)=\"createMessage('warning','\u8b66\u544a')\">\u663e\u793a\u8b66\u544a\u63d0\u793a</button>\n`,\n  styles    : []\n})\nexport class NzDemoMessageIconComponent {\n  createMessage = (type, text) => {\n    this._message.create(type, `\u8fd9\u662f\u4e00\u6761${text}\u63d0\u793a`);\n  };\n  constructor(private _message: NzMessageService) {\n  }\n}\n\n"},RgQR:function(l,n){l.exports="import {Component} from '@angular/core';\nimport {NzMessageService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-message-duration',\n  template  : `\n    <button nz-button [nzType]=\"'default'\" (click)=\"createBasicMessage()\">\u81ea\u5b9a\u4e49\u65f6\u957f\u63d0\u793a</button>\n`,\n  styles    : []\n})\nexport class NzDemoMessageDurationComponent {\n  createBasicMessage = () => {\n    this._message.success('\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u63d0\u793a,\u5e76\u5c06\u4e8e10\u79d2\u540e\u6d88\u5931', {nzDuration: 10000});\n  };\n  constructor(private _message: NzMessageService) {\n  }\n}\n\n"},U1ww:function(l,n){l.exports="import {Component} from '@angular/core';\nimport {NzMessageService} from '../../../index.showcase';\n\n@Component({\n  selector  : 'nz-demo-message-basic',\n  template  : `\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicMessage()\">\u663e\u793a\u666e\u901a\u63d0\u9192</button>\n`,\n  styles    : []\n})\nexport class NzDemoMessageBasicComponent {\n\n  constructor(private _message: NzMessageService) {\n  }\n\n  createBasicMessage() {\n    this._message.info('\u8fd9\u662f\u4e00\u6761\u666e\u901a\u7684\u63d0\u9192');\n  }\n}\n\n"},rkSk:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var _=u("LMZF"),e=function(){},t=u("g3ta"),a=u("QJaU"),o=u("HzDP"),s=u("88JB"),c=u("d0SC"),i=u("Un6q"),r=u("N5qe"),d=u("yojp"),p=(u("01zq"),function(){function l(l){this._message=l}return l.prototype.createBasicMessage=function(){this._message.info("\u8fd9\u662f\u4e00\u6761\u666e\u901a\u7684\u63d0\u9192")},l}()),g=u("16cp"),m=_._5({encapsulation:2,styles:[],data:{}});function z(l){return _._31(0,[(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==_._19(l,2)._onClick()&&e),"click"===n&&(e=!1!==t.createBasicMessage()&&e),e},r.b,r.a)),_._6(2,1097728,null,0,d.a,[_.l,_.D],{nzType:[0,"nzType"]},null),(l()(),_._29(-1,0,["\u663e\u793a\u666e\u901a\u63d0\u9192"])),(l()(),_._29(-1,null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}var b=function(l){var n=this;this._message=l,this.createBasicMessage=function(){n._message.success("\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u63d0\u793a,\u5e76\u5c06\u4e8e10\u79d2\u540e\u6d88\u5931",{nzDuration:1e4})}},f=_._5({encapsulation:2,styles:[],data:{}});function M(l){return _._31(0,[(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==_._19(l,2)._onClick()&&e),"click"===n&&(e=!1!==t.createBasicMessage()&&e),e},r.b,r.a)),_._6(2,1097728,null,0,d.a,[_.l,_.D],{nzType:[0,"nzType"]},null),(l()(),_._29(-1,0,["\u81ea\u5b9a\u4e49\u65f6\u957f\u63d0\u793a"])),(l()(),_._29(-1,null,["\n"]))],function(l,n){l(n,2,0,"default")},null)}var h=function(l){var n=this;this._message=l,this.createMessage=function(l,u){n._message.create(l,"\u8fd9\u662f\u4e00\u6761"+u+"\u63d0\u793a")}},v=_._5({encapsulation:2,styles:[],data:{}});function k(l){return _._31(0,[(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==_._19(l,2)._onClick()&&e),"click"===n&&(e=!1!==t.createMessage("success","\u6210\u529f")&&e),e},r.b,r.a)),_._6(2,1097728,null,0,d.a,[_.l,_.D],null,null),(l()(),_._29(-1,0,["\u663e\u793a\u6210\u529f\u63d0\u793a"])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(5,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==_._19(l,6)._onClick()&&e),"click"===n&&(e=!1!==t.createMessage("error","\u62a5\u9519")&&e),e},r.b,r.a)),_._6(6,1097728,null,0,d.a,[_.l,_.D],null,null),(l()(),_._29(-1,0,["\u663e\u793a\u62a5\u9519\u63d0\u793a"])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(9,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==_._19(l,10)._onClick()&&e),"click"===n&&(e=!1!==t.createMessage("warning","\u8b66\u544a")&&e),e},r.b,r.a)),_._6(10,1097728,null,0,d.a,[_.l,_.D],null,null),(l()(),_._29(-1,0,["\u663e\u793a\u8b66\u544a\u63d0\u793a"])),(l()(),_._29(-1,null,["\n"]))],null,null)}var C=function(){function l(l){this._message=l}return l.prototype.createBasicMessage=function(){var l=this,n=this._message.loading("\u6b63\u5728\u6267\u884c\u4e2d",{nzDuration:0}).messageId;setTimeout(function(u){l._message.remove(n)},2500)},l}(),N=_._5({encapsulation:2,styles:[],data:{}});function y(l){return _._31(0,[(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==_._19(l,2)._onClick()&&e),"click"===n&&(e=!1!==t.createBasicMessage()&&e),e},r.b,r.a)),_._6(2,1097728,null,0,d.a,[_.l,_.D],{nzType:[0,"nzType"]},null),(l()(),_._29(-1,0,["\u663e\u793a\u52a0\u8f7d\u4e2d"])),(l()(),_._29(-1,null,["\n  "]))],function(l,n){l(n,2,0,"default")},null)}var D=function(){return function(){this.NzDemoMessageBasicCode=u("U1ww"),this.NzDemoMessageDurationCode=u("RgQR"),this.NzDemoMessageIconCode=u("6dou"),this.NzDemoMessageLoadingCode=u("2HdI")}}(),S=_._5({encapsulation:2,styles:[[""]],data:{}});function x(l){return _._31(0,[(l()(),_._7(0,0,null,null,367,"article",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n\n  "])),(l()(),_._7(2,0,null,null,62,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),_._29(-1,null,["Message \u5168\u5c40\u63d0\u793a"])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(7,0,null,null,52,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),_._7(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f\u3002"])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(11,0,null,null,6,"h2",[],null,null,null,null,null)),(l()(),_._7(12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(15,0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),_._29(-1,null,["#"])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(19,0,null,null,9,"ul",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(21,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),_._7(22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u53ef\u63d0\u4f9b\u6210\u529f\u3001\u8b66\u544a\u548c\u9519\u8bef\u7b49\u53cd\u9988\u4fe1\u606f\u3002"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(25,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),_._7(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u9876\u90e8\u5c45\u4e2d\u663e\u793a\u5e76\u81ea\u52a8\u6d88\u5931\uff0c\u662f\u4e00\u79cd\u4e0d\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u8f7b\u91cf\u7ea7\u63d0\u793a\u65b9\u5f0f\u3002"])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(30,0,null,null,5,"h2",[["id","\u5982\u4f55\u4f7f\u7528"]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(32,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u5982\u4f55\u4f7f\u7528"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(37,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u5982\u679c\u8981\u4fee\u6539message\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u63d0\u4f9b\u5546"])),(l()(),_._7(39,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["NZ_MESSAGE_CONFIG"])),(l()(),_._29(-1,null,["\u7684\u503c\u6765\u4fee\u6539\u3002\n      "])),(l()(),_._7(42,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\uff08\u5982\uff1a\u5728\u4f60\u7684\u6a21\u5757\u7684providers\u4e2d\u52a0\u5165 "])),(l()(),_._7(44,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(45,null,[""," provide: NZ_MESSAGE_CONFIG, useValue: "," nzDuration: 3000 "," ",""])),(l()(),_._29(-1,null,["\uff0c"])),(l()(),_._7(47,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["NZ_MESSAGE_CONFIG"])),(l()(),_._29(-1,null,["\u53ef\u4ee5\u4ece"])),(l()(),_._7(50,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["ng-zorro-antd"])),(l()(),_._29(-1,null,["\u5bfc\u5165\uff09"])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(54,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u9ed8\u8ba4\u914d\u7f6e\u4e3a"])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(57,0,null,null,1,"pre",[["style","font-size:12px;"]],null,null,null,null,null)),(l()(),_._29(58,null,[" ","\n    nzDuration             : 1500,\n    nzMaxStack             : 7,\n    nzPauseOnHover         : true,\n    nzAnimate              : true\n ",""])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(61,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),_._7(63,0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n    "])),(l()(),_._29(-1,null,["\n\n  "])),(l()(),_._7(66,0,null,null,68,"div",[["nz-row",""]],null,null,null,t.b,t.a)),_._6(67,114688,null,0,a.a,[_.l,_.D],{nzGutter:[0,"nzGutter"]},null),(l()(),_._29(-1,0,["\n    "])),(l()(),_._7(69,0,null,0,34,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),_._6(70,606208,null,0,o.a,[_.l,[2,a.a],_.D],{nzSpan:[0,"nzSpan"]},null),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(72,0,null,null,11,"nz-code-box",[["id","components-message-demo-basic"]],null,null,null,s.b,s.a)),_._6(73,114688,null,0,c.a,[i.d,_.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(75,0,null,0,1,"nz-demo-message-basic",[["demo",""]],null,null,null,z,m)),_._6(76,49152,null,0,p,[g.b],null,null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(78,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(80,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u4fe1\u606f\u63d0\u9192\u53cd\u9988\u3002"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(85,0,null,null,17,"nz-code-box",[["id","components-message-demo-duration"]],null,null,null,s.b,s.a)),_._6(86,114688,null,0,c.a,[i.d,_.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(88,0,null,0,1,"nz-demo-message-duration",[["demo",""]],null,null,null,M,f)),_._6(89,49152,null,0,b,[g.b],null,null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(91,0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(93,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u81ea\u5b9a\u4e49\u65f6\u957f "])),(l()(),_._7(95,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["10s"])),(l()(),_._29(-1,null,["\uff0c\u9ed8\u8ba4\u65f6\u957f\u4e3a "])),(l()(),_._7(98,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["1.5s"])),(l()(),_._29(-1,null,["\u3002"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._29(-1,0,["\n    "])),(l()(),_._7(105,0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),_._6(106,606208,null,0,o.a,[_.l,[2,a.a],_.D],{nzSpan:[0,"nzSpan"]},null),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(108,0,null,null,11,"nz-code-box",[["id","components-message-demo-icon"]],null,null,null,s.b,s.a)),_._6(109,114688,null,0,c.a,[i.d,_.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(111,0,null,0,1,"nz-demo-message-icon",[["demo",""]],null,null,null,k,v)),_._6(112,49152,null,0,h,[g.b],null,null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(114,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(116,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u5305\u62ec\u6210\u529f\u3001\u5931\u8d25\u3001\u8b66\u544a\u3002"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(121,0,null,null,11,"nz-code-box",[["id","components-message-demo-loading"]],null,null,null,s.b,s.a)),_._6(122,114688,null,0,c.a,[i.d,_.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(124,0,null,0,1,"nz-demo-message-loading",[["demo",""]],null,null,null,y,N)),_._6(125,49152,null,0,C,[g.b],null,null),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(127,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(129,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u8fdb\u884c\u5168\u5c40 loading\uff0c\u5f02\u6b65\u81ea\u884c\u79fb\u9664\u3002"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._29(-1,0,["\n  "])),(l()(),_._29(-1,null,["\n  "])),(l()(),_._7(136,0,null,null,230,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(138,0,null,null,5,"h2",[["id","API"]],null,null,null,null,null)),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(140,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),_._29(-1,null,["API"])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(145,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),_._7(146,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u5168\u5c40\u914d\u7f6e\uff08NZ_MESSAGE_CONFIG\uff09"])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(149,0,null,null,82,"table",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(151,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(153,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(155,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u53c2\u6570"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(158,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u7c7b\u578b"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(161,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(164,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u8bf4\u660e"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(169,0,null,null,61,"tbody",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(171,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(173,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["nzDuration"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(176,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["Number"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(179,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["0"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(182,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u6301\u7eed\u65f6\u95f4,\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(186,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(188,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["nzMaxStack"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(191,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["Number"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(194,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["8"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(197,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u53ef\u5c55\u793a\u7684\u6700\u5927\u63d0\u793a\u6570\u91cf"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(201,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(203,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["nzPauseOnHover"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(206,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["Boolean"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(209,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["true"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(212,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u9f20\u6807\u79fb\u4e0a\u65f6\u6682\u505c\u5012\u8ba1\u65f6\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(216,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(218,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["nzAnimate"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(221,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["Boolean"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(224,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["true"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(227,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u5f00\u5173\u52a8\u753b\u6548\u679c\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(233,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),_._7(234,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),_._29(-1,null,["NzMessageService\u670d\u52a1"])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(237,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u63d0\u793a\uff1a\u4ee5\u4e0boptions\u53c2\u6570\u652f\u6301\u5168\u5c40\u914d\u7f6e\u4e2d\u7684 "])),(l()(),_._7(239,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["nzDuration/nzAnimate/nzPauseOnHover"])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._7(242,0,null,null,123,"table",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(244,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(246,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(248,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u65b9\u6cd5"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(251,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u53c2\u6570"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(254,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u8bf4\u660e"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._7(259,0,null,null,105,"tbody",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(261,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(263,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["loading"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(266,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(267,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(content: string, options?: Object)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(270,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u52a0\u8f7d\u4e2d"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(274,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(276,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["success"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(279,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(280,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(content: string, options?: Object)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(283,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u6210\u529f\u6d88\u606f"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(287,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(289,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["error"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(292,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(293,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(content: string, options?: Object)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(296,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u5931\u8d25\u6d88\u606f"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(300,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(302,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["warning"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(305,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(306,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(content: string, options?: Object)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(309,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u8b66\u544a\u6d88\u606f"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(313,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(315,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["info"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(318,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(319,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(content: string, options?: Object)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(322,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u4fe1\u606f\u6d88\u606f"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(326,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(328,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["create"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(331,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(332,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(type: string, content: string, options?: Object)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(335,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u63d0\u4f9btype\u5c5e\u6027\uff0c\u53ef\u4f20\u5165'success'\u7b49\u9009\u9879"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(339,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(341,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["html"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(344,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(345,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(html: string, options?: Object)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(348,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u53ef\u4f7f\u7528html\u4ee3\u7801\u6765\u6e32\u67d3\u5185\u5bb9"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._7(352,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(354,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["remove"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(357,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),_._7(358,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),_._29(-1,null,["(id?: string)"])),(l()(),_._29(-1,null,["\n          "])),(l()(),_._7(361,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._29(-1,null,["\u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f"])),(l()(),_._29(-1,null,["\n        "])),(l()(),_._29(-1,null,["\n      "])),(l()(),_._29(-1,null,["\n    "])),(l()(),_._29(-1,null,["\n  "])),(l()(),_._29(-1,null,["\n"])),(l()(),_._29(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,67,0,8),l(n,70,0,12),l(n,73,0,"\u666e\u901a\u63d0\u793a",u.NzDemoMessageBasicCode),l(n,86,0,"\u81ea\u5b9a\u4e49\u65f6\u957f\u63d0\u793a",u.NzDemoMessageDurationCode),l(n,106,0,12),l(n,109,0,"\u5176\u4ed6\u63d0\u793a\u7c7b\u578b",u.NzDemoMessageIconCode),l(n,122,0,"\u52a0\u8f7d\u4e2d",u.NzDemoMessageLoadingCode)},function(l,n){l(n,45,0,"{","{","}","}"),l(n,58,0,"{","}"),l(n,69,0,_._19(n,70).paddingLeft,_._19(n,70).paddingRight),l(n,105,0,_._19(n,106).paddingLeft,_._19(n,106).paddingRight)})}var T=_._3("nz-demo-message",D,function(l){return _._31(0,[(l()(),_._7(0,0,null,null,1,"nz-demo-message",[],null,null,null,x,S)),_._6(1,49152,null,0,D,[],null,null)],null,null)},{},{},[]),O=u("XQ86"),B=u("94s6"),w=u("QYLS"),I=u("sVuO"),G=u("WKJP"),j=u("9Q3e"),A=u("4e8C"),P=u("7rz8"),L=u("PqOC"),R=u("md/V"),q=u("0nO6"),F=u("l6RC"),H=u("V8+5"),Q=u("4jwp"),Z=u("OFGE"),E=u("7bMD"),U=u("71yQ"),K=u("jhj7"),V=u("ppgG"),J=u("Hjq/"),W=u("hNpP"),Y=u("f42N"),X=u("UHIZ"),$=function(){},ll=u("jlvU"),nl=u("AKwh"),ul=u("LTvz"),_l=u("v3Ml"),el=u("KvRT"),tl=u("fFfs"),al=u("CZgk"),ol=u("ICnb"),sl=u("nQgM"),cl=u("AMM9"),il=u("x9cu"),rl=u("Abwc"),dl=u("Gb4R"),pl=u("ATGq"),gl=u("rMvC"),ml=u("PIhm"),zl=u("G5xS"),bl=u("tGoV"),fl=u("Bd7q"),Ml=u("+dpF"),hl=u("t6og"),vl=u("0oag"),kl=u("0MmT"),Cl=u("0SjK"),Nl=u("UWIb"),yl=u("FP9i"),Dl=u("8zAG"),Sl=u("OtIO"),xl=u("V5qy"),Tl=u("BGFw"),Ol=u("qa79"),Bl=u("DJ6J"),wl=u("A6WS"),Il=u("nGV/"),Gl=u("4I7f"),jl=u("LLhl"),Al=u("+35O"),Pl=u("TRYS"),Ll=u("NGUZ"),Rl=u("Cjk6"),ql=u("6eTp"),Fl=u("pORy"),Hl=u("aQzP"),Ql=u("LpTC"),Zl=u("YeNB"),El=u("x7DS"),Ul=u("//KT"),Kl=u("h8LI"),Vl=u("1OKL"),Jl=u("Pgvs"),Wl=u("ZgIK"),Yl=u("mQB5"),Xl=u("9rok");u.d(n,"NzDemoMessageModuleNgFactory",function(){return $l});var $l=_._4(e,[],function(l){return _._15([_._16(512,_.k,_.Z,[[8,[T,O.a,B.a,w.a,I.a,G.a,j.a,A.a]],[3,_.k],_.w]),_._16(4608,i.n,i.m,[_.t,[2,i.v]]),_._16(5120,P.b,P.a,[[3,P.b],P.c]),_._16(5120,L.b,L.a,[[3,L.b],R.a,P.b]),_._16(4608,q.u,q.u,[]),_._16(6144,F.b,null,[i.d]),_._16(4608,F.c,F.c,[[2,F.b]]),_._16(4608,H.a,H.a,[]),_._16(5120,Q.c,Q.a,[[3,Q.c],_.y,H.a]),_._16(5120,Q.f,Q.e,[[3,Q.f],H.a,_.y]),_._16(4608,Z.h,Z.h,[Q.c,Q.f,_.y,i.d]),_._16(5120,Z.d,Z.i,[[3,Z.d],i.d]),_._16(4608,Z.g,Z.g,[Q.f,i.d]),_._16(5120,Z.e,Z.l,[[3,Z.e],i.d]),_._16(4608,Z.c,Z.c,[Z.h,Z.d,_.k,Z.g,Z.e,_.g,_.q,_.y,i.d]),_._16(5120,Z.j,Z.k,[Z.c]),_._16(4608,E.a,E.a,[]),_._16(4608,U.a,U.a,[_.g,_.k,L.b]),_._16(4608,K.a,K.a,[]),_._16(4608,V.b,V.b,[]),_._16(5120,_.d,function(l,n){return[J.b(l,n)]},[i.d,[2,W.a]]),_._16(5120,Y.a,Y.b,[i.d,[3,Y.a]]),_._16(512,X.o,X.o,[[2,X.t],[2,X.l]]),_._16(512,$,$,[]),_._16(512,i.c,i.c,[]),_._16(512,ll.a,ll.a,[]),_._16(512,nl.a,nl.a,[]),_._16(512,ul.a,ul.a,[]),_._16(512,_l.a,_l.a,[]),_._16(512,el.a,el.a,[]),_._16(512,tl.a,tl.a,[]),_._16(512,q.s,q.s,[]),_._16(512,q.i,q.i,[]),_._16(512,F.a,F.a,[]),_._16(512,al.c,al.c,[]),_._16(512,H.b,H.b,[]),_._16(512,Q.b,Q.b,[]),_._16(512,Z.f,Z.f,[]),_._16(512,ol.a,ol.a,[]),_._16(512,sl.a,sl.a,[]),_._16(512,cl.a,cl.a,[]),_._16(512,il.a,il.a,[]),_._16(512,rl.a,rl.a,[]),_._16(512,dl.a,dl.a,[]),_._16(512,pl.a,pl.a,[]),_._16(512,gl.a,gl.a,[]),_._16(512,ml.a,ml.a,[]),_._16(512,zl.a,zl.a,[]),_._16(512,bl.a,bl.a,[]),_._16(512,fl.a,fl.a,[]),_._16(512,Ml.a,Ml.a,[]),_._16(512,hl.a,hl.a,[]),_._16(512,vl.a,vl.a,[]),_._16(512,kl.a,kl.a,[]),_._16(512,Cl.a,Cl.a,[]),_._16(512,Nl.a,Nl.a,[]),_._16(512,yl.a,yl.a,[]),_._16(512,Dl.a,Dl.a,[]),_._16(512,Sl.a,Sl.a,[]),_._16(512,xl.a,xl.a,[]),_._16(512,Tl.a,Tl.a,[]),_._16(512,Ol.a,Ol.a,[]),_._16(512,Bl.a,Bl.a,[]),_._16(512,V.c,V.c,[]),_._16(512,wl.a,wl.a,[]),_._16(512,Il.a,Il.a,[]),_._16(512,Gl.a,Gl.a,[]),_._16(512,jl.a,jl.a,[]),_._16(512,Al.a,Al.a,[]),_._16(512,Pl.a,Pl.a,[]),_._16(512,Ll.a,Ll.a,[]),_._16(131584,J.a,J.a,[i.d,_.q,_.k]),_._16(512,Rl.a,Rl.a,[]),_._16(512,ql.a,ql.a,[]),_._16(512,Fl.a,Fl.a,[]),_._16(512,Hl.a,Hl.a,[]),_._16(512,Ql.a,Ql.a,[]),_._16(512,Zl.a,Zl.a,[]),_._16(512,El.a,El.a,[]),_._16(512,Ul.a,Ul.a,[]),_._16(512,Kl.a,Kl.a,[]),_._16(512,Vl.a,Vl.a,[]),_._16(512,Jl.a,Jl.a,[]),_._16(512,Wl.a,Wl.a,[]),_._16(512,e,e,[]),_._16(1024,X.j,function(){return[[{path:"",component:D}]]},[]),_._16(256,P.c,!1,[]),_._16(256,R.a,ul.b,[]),_._16(256,Yl.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),_._16(256,Xl.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})}});