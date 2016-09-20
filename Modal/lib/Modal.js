!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-svg-icons"),require("react"),require("react-custom-scrollbars"),require("react-modal")):"function"==typeof define&&define.amd?define(["dnn-svg-icons","react","react-custom-scrollbars","react-modal"],t):"object"==typeof exports?exports.Modal=t(require("dnn-svg-icons"),require("react"),require("react-custom-scrollbars"),require("react-modal")):e.Modal=t(e["dnn-svg-icons"],e.react,e["react-custom-scrollbars"],e["react-modal"])}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(6),c=r(s),u=n(8),d=r(u),p=n(7),f=n(5);n(4);var h={width:"100%",height:"calc(100% - 55px)",boxSizing:"border-box",padding:"25px 30px"},m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.modalWidth,n=e.modalTopMargin;document.getElementsByClassName("socialpanel")&&document.getElementsByClassName("socialpanel").length>0&&!e.modalWidth&&(t=document.getElementsByClassName("socialpanel")[0].offsetWidth),document.getElementsByClassName("socialpanelheader")&&document.getElementsByClassName("socialpanelheader").length>0&&!e.modalHeight&&(n=document.getElementsByClassName("socialpanelheader")[0].offsetHeight);var r=e.style||{overlay:{zIndex:"99999",backgroundColor:"rgba(0,0,0,0.6)"},content:{top:n+e.dialogVerticalMargin,left:e.dialogHorizontalMargin+85,padding:0,borderRadius:0,border:"none",width:t-2*e.dialogHorizontalMargin,height:e.modalHeight||"60%",backgroundColor:"#FFFFFF",position:"absolute",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",boxSizing:"border-box"}};return c["default"].createElement(d["default"],{isOpen:e.isOpen,onRequestClose:e.onRequestClose,style:r},c["default"].createElement("div",{className:"modal-header"},c["default"].createElement("h3",null,e.header),e.headerChildren,c["default"].createElement("div",{className:"close-modal-button",dangerouslySetInnerHTML:{__html:f.XThinIcon},onClick:e.onRequestClose})),c["default"].createElement(p.Scrollbars,{style:h},c["default"].createElement("div",{style:e.contentStyle},e.children)))}}]),t}(s.Component);m.propTypes={isOpen:s.PropTypes.bool,style:s.PropTypes.object,onRequestClose:s.PropTypes.func,children:s.PropTypes.node,dialogVerticalMargin:s.PropTypes.number,dialogHorizontalMargin:s.PropTypes.number,modalWidth:s.PropTypes.number,modalHeight:s.PropTypes.number,modalTopMargin:s.PropTypes.number,header:s.PropTypes.string,headerChildren:s.PropTypes.node,contentStyle:s.PropTypes.object},m.defaultProps={modalWidth:861,modalTopMargin:100,dialogVerticalMargin:25,dialogHorizontalMargin:30,contentStyle:{padding:"25px 30px"}},t["default"]=m},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.ReactModalPortal{position:relative}.ReactModalPortal .modal-header{width:100%;height:50px;border-bottom:1px solid #c8c8c8}.ReactModalPortal .modal-header h3{font-size:18px;padding:15px 30px;float:left;color:#46292b}.ReactModalPortal .modal-header .close-modal-button{width:16px;height:16px;float:right;padding:17px 20px;cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=f[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));f[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],l=o[2],s=o[3],c={css:i,media:l,sourceMap:s};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=g(),r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=y++;n=b||(b=l(t)),r=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=d.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,y=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var l=n[i],s=f[l.id];s.refs--,a.push(s)}if(e){var c=o(e);r(c,t)}for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r}])});