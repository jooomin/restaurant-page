(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),r=n.n(o),c=n(645),i=n.n(c)()(r());i.push([t.id,"h1 {\n  text-align: center;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n}\n\n.nav-button {\n  cursor: pointer;\n}\n\n#home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#home-image {\n  height: 500px;\n  width: auto;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#creator {\n  text-align: center;\n}",""]);const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,c){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);o&&i[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var c={},i=[],a=0;a<t.length;a++){var s=t[a],u=o.base?s[0]+o.base:s[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var c=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<c.length;i++){var a=n(c[i]);e[a].references--}for(var s=o(t,r),u=0;u<c.length;u++){var d=n(c[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}c=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={id:o,exports:{}};return t[o](c,c.exports,n),c.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{const t=n.p+"fed70c8577e0798a10df.jpg",e=function(){const e=document.getElementById("main-container");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","home");const n=document.createElement("p");n.setAttribute("id","home-description"),n.textContent="made with love and passion";const o=new Image;return o.setAttribute("id","home-image"),o.src=t,e.appendChild(n),e.appendChild(o),e}())};function o(){const t=document.createElement("header");t.setAttribute("id","header");const n=document.createElement("h1");return t.setAttribute("id","restaurant-name"),n.textContent="flour and grape",t.appendChild(n),t.appendChild(function(){const t=document.createElement("nav"),n=document.createElement("button");n.classList.add("nav-button"),n.textContent="Home",n.addEventListener("click",(t=>{console.log("Home button has been clicked"),r(n),e()}));const o=document.createElement("button");o.classList.add("nav-button"),o.textContent="Menu",o.addEventListener("click",(t=>{console.log("Menu button has been clicked"),r(o),function(){const t=document.getElementById("main-container");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","menu");const e=document.createElement("p");return e.setAttribute("id","menu-description"),e.textContent="a list of our irresistable dishes",t.appendChild(e),t}())}()}));const c=document.createElement("button");return c.classList.add("nav-button"),c.textContent="Contact",c.addEventListener("click",(t=>{console.log("Contact button has been clicked"),r(c),function(){const t=document.getElementById("main-container");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","contact");const e=document.createElement("p");return e.setAttribute("id","contact-description"),e.textContent="how to reach us",t.appendChild(e),t}())}()})),t.appendChild(n),t.appendChild(o),t.appendChild(c),t}()),t}function r(t){document.querySelectorAll(".nav-button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}var c=n(379),i=n.n(c),a=n(795),s=n.n(a),u=n(569),d=n.n(u),l=n(565),p=n.n(l),m=n(216),f=n.n(m),h=n(589),v=n.n(h),b=n(426),g={};g.styleTagTransform=v(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=f(),i()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals,function(){const t=document.getElementById("content");t.appendChild(o()),t.appendChild(function(){const t=document.createElement("main");return t.setAttribute("id","main-container"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.setAttribute("id","footer");const e=document.createElement("p");return e.setAttribute("id","creator"),e.textContent="Created by JooMin Choi",t.append(e),t}()),e()}()})()})();