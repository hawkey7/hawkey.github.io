webpackJsonp([8],{221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=(n.n(i),n(230)),o=n(242),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=n(283),l=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.componentDidMount=function(){this.props.setPageview("/privacy")},t.prototype.render=function(){var e=this.props.i18n;return i.createElement("div",{className:s.privacy},i.createElement("div",{className:s.header},i.createElement(o.a,null,i.createElement(r.a,null,i.createElement("div",{className:s.title},e.PRIVACY_PAGE_TITLE)))),i.createElement("div",{className:s.text},i.createElement("div",{className:s.content},i.createElement("div",null,e.PRIVACY_PAGE_LAST_REVISION),i.createElement("div",null,e.PRIVACY_PAGE_DESCRIPTION),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE1),e.PRIVACY_PAGE_CONTENT1),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE2),e.PRIVACY_PAGE_CONTENT2),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE3),e.PRIVACY_PAGE_CONTENT3),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE4),e.PRIVACY_PAGE_CONTENT4,i.createElement("span",{className:s.list},e.PRIVACY_PAGE_CONTENT4a,e.PRIVACY_PAGE_CONTENT4b,e.PRIVACY_PAGE_CONTENT4c,e.PRIVACY_PAGE_CONTENT4d,e.PRIVACY_PAGE_CONTENT4e,e.PRIVACY_PAGE_CONTENT4f)),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE5),e.PRIVACY_PAGE_CONTENT5,i.createElement("span",{className:s.list},e.PRIVACY_PAGE_CONTENT5a,e.PRIVACY_PAGE_CONTENT5b,e.PRIVACY_PAGE_CONTENT5c,e.PRIVACY_PAGE_CONTENT5d,e.PRIVACY_PAGE_CONTENT5e,e.PRIVACY_PAGE_CONTENT5f)),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE6),e.PRIVACY_PAGE_CONTENT6),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE7),e.PRIVACY_PAGE_CONTENT7),i.createElement("div",null,i.createElement("h4",null,e.PRIVACY_PAGE_TITLE8),e.PRIVACY_PAGE_CONTENT8))))},t}(i.Component);t.default=l},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"===typeof window||!window.document||!window.document.createElement),e.exports=t.default},228:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!==typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=r;var o=n(0),a=(i(o),n(2)),s=i(a);t.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},229:function(e,t,n){e.exports=n.p+"static/media/banner.73326f43.png"},230:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),n(231)),o=n.n(r),a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){return i.createElement(o.a,{component:"div",className:"react-container",transitionName:"slide-in",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnterTimeout:1500,transitionLeaveTimeout:1500},this.props.children)},t}(i.Component);t.a=s},231:function(e,t,n){"use strict";e.exports=n(232)},232:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(0),u=i(l),c=n(2),p=i(c),d=n(233),f=i(d),m=n(236),A=i(m),h=n(228),v=(h.nameShape.isRequired,p.default.bool,p.default.bool,p.default.bool,(0,h.transitionTimeout)("Appear"),(0,h.transitionTimeout)("Enter"),(0,h.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),E=function(e){function t(){var n,i,a;r(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=i=o(this,e.call.apply(e,[this].concat(l))),i._wrapChild=function(e){return u.default.createElement(A.default,{name:i.props.transitionName,appear:i.props.transitionAppear,enter:i.props.transitionEnter,leave:i.props.transitionLeave,appearTimeout:i.props.transitionAppearTimeout,enterTimeout:i.props.transitionEnterTimeout,leaveTimeout:i.props.transitionLeaveTimeout},e)},a=n,o(i,a)}return a(t,e),t.prototype.render=function(){return u.default.createElement(f.default,s({},this.props,{childFactory:this._wrapChild}))},t}(u.default.Component);E.displayName="CSSTransitionGroup",E.propTypes={},E.defaultProps=v,t.default=E,e.exports=t.default},233:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(234),u=i(l),c=n(0),p=i(c),d=n(2),f=i(d),m=n(1),A=(i(m),n(235)),h=(f.default.any,f.default.func,f.default.node,{component:"span",childFactory:function(e){return e}}),v=function(e){function t(n,i){r(this,t);var a=o(this,e.call(this,n,i));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,A.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,A.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,A.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,A.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,A.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,A.mergeChildMappings)(n,t)});for(var i in t){var r=n&&n.hasOwnProperty(i);!t[i]||r||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(var o in n){var a=t&&t.hasOwnProperty(o);!n[o]||a||this.currentlyTransitioningKeys[o]||this.keysToLeave.push(o)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[];for(var n in this.state.children)!function(n){var i=e.state.children[n];if(i){var r="string"!==typeof i.ref,o=e.props.childFactory(i),a=function(t){e.childRefs[n]=t};o===i&&r&&(a=(0,u.default)(i.ref,a)),t.push(p.default.cloneElement(o,{key:n,ref:a}))}}(n);var i=s({},this.props);return delete i.transitionLeave,delete i.transitionName,delete i.transitionAppear,delete i.transitionEnter,delete i.childFactory,delete i.transitionLeaveTimeout,delete i.transitionEnterTimeout,delete i.transitionAppearTimeout,delete i.component,p.default.createElement(this.props.component,i,t)},t}(p.default.Component);v.displayName="TransitionGroup",v.propTypes={},v.defaultProps=h,t.default=v,e.exports=t.default},234:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},235:function(e,t,n){"use strict";function i(e){if(!e)return e;var t={};return o.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function r(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var i={},r=[];for(var o in e)t.hasOwnProperty(o)?r.length&&(i[o]=r,r=[]):r.push(o);var a=void 0,s={};for(var l in t){if(i.hasOwnProperty(l))for(a=0;a<i[l].length;a++){var u=i[l][a];s[i[l][a]]=n(u)}s[l]=n(l)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s}t.__esModule=!0,t.getChildMapping=i,t.mergeChildMappings=r;var o=n(0)},236:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return C.length?C.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){C.length&&C.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=n(237),c=i(u),p=n(239),d=i(p),f=n(240),m=i(f),A=n(241),h=n(0),v=i(h),E=n(2),y=i(E),_=n(51),T=n(228),C=[];A.transitionEnd&&C.push(A.transitionEnd),A.animationEnd&&C.push(A.animationEnd);var g=(y.default.node,T.nameShape.isRequired,y.default.bool,y.default.bool,y.default.bool,y.default.number,y.default.number,y.default.number,function(e){function t(){var n,i,a;r(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=i=o(this,e.call.apply(e,[this].concat(l))),i.componentWillAppear=function(e){i.props.appear?i.transition("appear",e,i.props.appearTimeout):e()},i.componentWillEnter=function(e){i.props.enter?i.transition("enter",e,i.props.enterTimeout):e()},i.componentWillLeave=function(e){i.props.leave?i.transition("leave",e,i.props.leaveTimeout):e()},a=n,o(i,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var i=(0,_.findDOMNode)(this);if(!i)return void(t&&t());var r=this.props.name[e]||this.props.name+"-"+e,o=this.props.name[e+"Active"]||r+"-active",a=null,l=void 0;(0,c.default)(i,r),this.queueClassAndNode(o,i);var u=function(e){e&&e.target!==i||(clearTimeout(a),l&&l(),(0,d.default)(i,r),(0,d.default)(i,o),l&&l(),t&&t())};n?(a=setTimeout(u,n),this.transitionTimeouts.push(a)):A.transitionEnd&&(l=s(i,u))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=l({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,v.default.cloneElement(v.default.Children.only(this.props.children),e)},t}(v.default.Component));g.displayName="CSSTransitionGroupChild",g.propTypes={},t.default=g,e.exports=t.default},237:function(e,t,n){"use strict";function i(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=n(238),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=t.default},238:function(e,t,n){"use strict";function i(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},239:function(e,t,n){"use strict";function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=i(e.className,t):e.setAttribute("class",i(e.className&&e.className.baseVal||"",t))}},240:function(e,t,n){"use strict";function i(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-p)),i=setTimeout(e,n);return p=t,i}Object.defineProperty(t,"__esModule",{value:!0});var r=n(227),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=["","webkit","moz","o","ms"],s="clearTimeout",l=i,u=void 0,c=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};o.default&&a.some(function(e){var t=c(e,"request");if(t in window)return s=c(e,"cancel"),l=function(e){return window[t](e)}});var p=(new Date).getTime();u=function(e){return l(e)},u.cancel=function(e){window[s]&&"function"===typeof window[s]&&window[s](e)},t.default=u,e.exports=t.default},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var i=n(227),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o="transform",a=void 0,s=void 0,l=void 0,u=void 0,c=void 0,p=void 0,d=void 0,f=void 0,m=void 0,A=void 0,h=void 0;if(r.default){var v=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),i=void 0,r=void 0,o="",a=0;a<n.length;a++){var s=n[a];if(s+"TransitionProperty"in e){o="-"+s.toLowerCase(),i=t[s]("TransitionEnd"),r=t[s]("AnimationEnd");break}}return!i&&"transitionProperty"in e&&(i="transitionend"),!r&&"animationName"in e&&(r="animationend"),e=null,{animationEnd:r,transitionEnd:i,prefix:o}}();a=v.prefix,t.transitionEnd=s=v.transitionEnd,t.animationEnd=l=v.animationEnd,t.transform=o=a+"-"+o,t.transitionProperty=u=a+"-transition-property",t.transitionDuration=c=a+"-transition-duration",t.transitionDelay=d=a+"-transition-delay",t.transitionTiming=p=a+"-transition-timing-function",t.animationName=f=a+"-animation-name",t.animationDuration=m=a+"-animation-duration",t.animationTiming=A=a+"-animation-delay",t.animationDelay=h=a+"-animation-timing-function"}t.transform=o,t.transitionProperty=u,t.transitionTiming=p,t.transitionDelay=d,t.transitionDuration=c,t.transitionEnd=s,t.animationName=f,t.animationDuration=m,t.animationTiming=A,t.animationDelay=h,t.animationEnd=l,t.default={transform:o,end:s,property:u,timing:p,delay:d,duration:c}},242:function(e,t,n){"use strict";var i=n(0),r=(n.n(i),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}()),o=function(e){function t(t){var n=e.call(this,t)||this;return n.DOMElement={},n.state={init:!1},n.handleScroll=n.handleScroll.bind(n),n}return r(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),setTimeout(this.handleScroll)},t.prototype.handleScroll=function(){var e=window.scrollY;window.navigator.userAgent.indexOf("Trident/7.0")>=0&&(e=document.documentElement.scrollTop);var t=this.DOMElement.myRef;this.DOMElement.myRef&&window.innerHeight+e>t.offsetTop&&this.setState({init:!0})},t.prototype.render=function(){var e=this;return i.createElement("span",{ref:function(t){e.DOMElement.myRef=t}},this.state.init?this.props.children:null)},t}(i.Component);t.a=o},283:function(e,t,n){var i=n(284);"string"===typeof i&&(i=[[e.i,i,""]]);var r={};r.transform=void 0;n(215)(i,r);i.locals&&(e.exports=i.locals)},284:function(e,t,n){t=e.exports=n(214)(!0),t.push([e.i,".privacy_26ulLAlq .header_Zr4HkfVv{background:url("+n(229)+") top no-repeat;background-size:cover;font-size:4.5rem;color:#fff;font-family:Rockwell;padding:120px 0}.privacy_26ulLAlq .header_Zr4HkfVv .title_3E522HsZ{padding:0 40px}.privacy_26ulLAlq .title_3E522HsZ{font-size:4.5rem;text-align:center;line-height:4.5rem}.privacy_26ulLAlq .text_B9pisVbZ .content_36SdZWp0{width:100%;max-width:85rem;margin:0 auto;text-align:center;padding:3rem 0 8rem}.privacy_26ulLAlq .text_B9pisVbZ div{padding:10px 0 40px;line-height:25px;color:#999;text-align:left}.privacy_26ulLAlq .text_B9pisVbZ div h4{color:#458ed6}.privacy_26ulLAlq .text_B9pisVbZ div .list_3oEprJOn{display:inline-block;padding-left:10px}.privacy_26ulLAlq .text_B9pisVbZ div .list_3oEprJOn span{display:inline-block}.privacy_26ulLAlq .text_B9pisVbZ div a{color:#2dabe2;text-decoration:underline}@media screen and (max-width:830px){.privacy_26ulLAlq .header_Zr4HkfVv .title_3E522HsZ{font-size:2rem!important}.privacy_26ulLAlq .text_B9pisVbZ .content_36SdZWp0 div{padding:10px}}","",{version:3,sources:["/Users/lianmeng/Desktop/projects/exchange-union/src/scss/privacy.scss"],names:[],mappings:"AAAA,mCACE,uDAAoE,AACpE,sBAAuB,AACvB,iBAAkB,AAClB,WAAY,AACZ,qBAAwB,AACxB,eAAyB,CAAE,AAC3B,mDACE,cAAgB,CAAE,AAEtB,kCACE,iBAAkB,AAClB,kBAAmB,AACnB,kBAAoB,CAAE,AAExB,mDACE,WAAY,AACZ,gBAAiB,AACjB,cAAe,AACf,kBAAmB,AACnB,mBAAuB,CAAE,AAE3B,qCACE,oBAAuB,AACvB,iBAAkB,AAClB,WAAe,AACf,eAAiB,CAAE,AACnB,wCACE,aAAe,CAAE,AACnB,oDACE,qBAAsB,AACtB,iBAAmB,CAAE,AACrB,yDACE,oBAAsB,CAAE,AAC5B,uCACE,cAAe,AACf,yBAA2B,CAAE,AAEjC,oCACE,mDACE,wBAA2B,CAAE,AAC/B,uDACE,YAAc,CAAE,CAAE",file:"privacy.scss",sourcesContent:['.privacy .header {\n  background: url("../resources/img/banner.png") top center no-repeat;\n  background-size: cover;\n  font-size: 4.5rem;\n  color: #fff;\n  font-family: "Rockwell";\n  padding: 120px 0 120px 0; }\n  .privacy .header .title {\n    padding: 0 40px; }\n\n.privacy .title {\n  font-size: 4.5rem;\n  text-align: center;\n  line-height: 4.5rem; }\n\n.privacy .text .content {\n  width: 100%;\n  max-width: 85rem;\n  margin: 0 auto;\n  text-align: center;\n  padding: 3rem 0 8rem 0; }\n\n.privacy .text div {\n  padding: 10px 0 40px 0;\n  line-height: 25px;\n  color: #999999;\n  text-align: left; }\n  .privacy .text div h4 {\n    color: #458ed6; }\n  .privacy .text div .list {\n    display: inline-block;\n    padding-left: 10px; }\n    .privacy .text div .list span {\n      display: inline-block; }\n  .privacy .text div a {\n    color: #2dabe2;\n    text-decoration: underline; }\n\n@media screen and (max-width: 830px) {\n  .privacy .header .title {\n    font-size: 2rem !important; }\n  .privacy .text .content div {\n    padding: 10px; } }\n'],sourceRoot:""}]),t.locals={privacy:"privacy_26ulLAlq",header:"header_Zr4HkfVv",title:"title_3E522HsZ",text:"text_B9pisVbZ",content:"content_36SdZWp0",list:"list_3oEprJOn"}}});