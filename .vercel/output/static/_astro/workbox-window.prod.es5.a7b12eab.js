try{self["workbox:window:7.0.0"]&&_()}catch{}function S(n,e){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])}))}function W(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function E(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function k(n,e){var t;if(typeof Symbol>"u"||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return E(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:7.0.0"]&&_()}catch{}var y=function(){var n=this;this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))};function b(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var g=function(n,e){this.type=n,Object.assign(this,e)};function p(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function L(){}var j={type:"SKIP_WAITING"};function P(n,e){if(!e)return n&&n.then?n.then(L):Promise.resolve()}var x=function(n){var e,t;function r(e,t){var r,o;return void 0===t&&(t={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new y,r.en=new y,r.on=new y,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing;r.tn>0||!b(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,o=t.state,i=t===r.vn,a={sw:t,isExternal:i,originalEvent:n};!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new g(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===t&&r.dispatchEvent(new g("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller;r.dispatchEvent(new g("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(o=function(n){var e=n.data,t=n.ports,o=n.source;return p(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new g("message",{data:e,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(o.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=e,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}t=n,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var o,i=r.prototype;return i.register=function(n){var e,t,r=(void 0===n?{}:n).immediate,o=void 0!==r&&r;try{var i=this;return e=function(){return i.mn=!!navigator.serviceWorker.controller,i.yn=i.pn(),p(i.bn(),(function(n){i.fn=n,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var e=i.fn.waiting;return e&&b(e.scriptURL,i.sn.toString())&&(i.hn=e,Promise.resolve().then((function(){i.dispatchEvent(new g("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn}))},(t=function(){if(!o&&"complete"!==document.readyState)return P(new Promise((function(n){return window.addEventListener("load",n)})))}())&&t.then?t.then(e):e()}catch(n){return Promise.reject(n)}},i.update=function(){try{return this.fn?P(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},i.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},i.messageSW=function(n){try{return p(this.getSW(),(function(e){return S(e,n)}))}catch(n){return Promise.reject(n)}},i.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&S(this.fn.waiting,j)},i.pn=function(){var n=navigator.serviceWorker.controller;return n&&b(n.scriptURL,this.sn.toString())?n:void 0},i.bn=function(){try{var n=this;return function(e,t){try{var r=p(navigator.serviceWorker.register(n.sn,n.nn),(function(e){return n.un=performance.now(),e}))}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}(0,(function(n){throw n}))}catch(n){return Promise.reject(n)}},(o=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&W(r.prototype,o),r}(function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this;for(var e,t=k(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());export{x as Workbox,g as WorkboxEvent,S as messageSW};