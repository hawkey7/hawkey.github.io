webpackJsonp([8],{223:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=n(0),o=(n.n(t),n(26)),c=n(86),A=n(24),r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var n in s)s.hasOwnProperty(n)&&(e[n]=s[n])};return function(s,n){function t(){this.constructor=s}e(s,n),s.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}(),i=n(297),a=n(85),u=function(e){function s(s){var n=e.call(this,s)||this;return n.onClose=n.onClose.bind(n),n}return r(s,e),s.prototype.componentDidMount=function(){document.body.classList.add("subscribe-success");var e=A.a.API_PATH_SUBSCRIBE_SUCCESS+"?lang="+this.props.lang+"&key="+A.a.API_KEY;o.a.Post(e,{email:this.props.match.params.base,Category:A.a.APP_CATEGORY}).then(function(e){console.log(e)})},s.prototype.onClose=function(){document.body.classList.remove("subscribe-success"),this.props.history.push("/")},s.prototype.render=function(){var e=this.props.i18n;return t.createElement("div",{className:i.success},t.createElement("div",{className:i.content},t.createElement("img",{src:a}),t.createElement("p",null,e.NEWS_PAGE_SUBSCRIBE_SUCCESS),t.createElement("a",{className:i.close,onClick:this.onClose},t.createElement(c.a,{color:"#fff"}))))},s}(t.Component);s.default=u},297:function(e,s,n){var t=n(298);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;n(213)(t,o);t.locals&&(e.exports=t.locals)},298:function(e,s,n){s=e.exports=n(212)(!0),s.push([e.i,".success_2wfK7qYJ{background-image:url("+n(214)+");background-size:100% 100%;text-align:center;min-height:80vh;position:absolute;left:0;right:0;top:0;bottom:0;z-index:999}.success_2wfK7qYJ .close_3e6QdpbW{position:absolute;right:30%;top:25%;cursor:pointer}.success_2wfK7qYJ .content_FFi46T_V{width:100%;max-width:65rem;margin:0 auto;padding-top:20%}.success_2wfK7qYJ .content_FFi46T_V p{color:#fff;font-size:1.25rem;margin-top:20px}.subscribe-success{overflow:hidden}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/subscribe-success.scss"],names:[],mappings:"AAAA,kBACE,+CAA0D,AAC1D,0BAA2B,AAC3B,kBAAmB,AACnB,gBAAiB,AACjB,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,SAAU,AACV,WAAa,CAAE,AACf,kCACE,kBAAmB,AACnB,UAAW,AACX,QAAS,AACT,cAAgB,CAAE,AACpB,oCACE,WAAY,AACZ,gBAAiB,AACjB,cAAe,AACf,eAAiB,CAAE,AACnB,sCACE,WAAY,AACZ,kBAAmB,AACnB,eAAiB,CAAE,AAEzB,mBACE,eAAiB,CAAE",file:"subscribe-success.scss",sourcesContent:['.success {\n  background-image: url("../resources/img/home-banner.png");\n  background-size: 100% 100%;\n  text-align: center;\n  min-height: 80vh;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 999; }\n  .success .close {\n    position: absolute;\n    right: 30%;\n    top: 25%;\n    cursor: pointer; }\n  .success .content {\n    width: 100%;\n    max-width: 65rem;\n    margin: 0 auto;\n    padding-top: 20%; }\n    .success .content p {\n      color: #fff;\n      font-size: 1.25rem;\n      margin-top: 20px; }\n\n:global .subscribe-success {\n  overflow: hidden; }\n'],sourceRoot:""}]),s.locals={success:"success_2wfK7qYJ",close:"close_3e6QdpbW",content:"content_FFi46T_V"}}});