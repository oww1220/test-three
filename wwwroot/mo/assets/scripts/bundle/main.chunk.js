!function(e){function n(n){for(var r,o,s=n[0],u=n[1],c=n[2],f=0,h=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(n);h.length;)h.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,s=1;s<t.length;s++){var u=t[s];0!==i[u]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},i={1:0},a=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;a.push([125,0,2,3]),t()}({125:function(e,n,t){t(126),t(313),t(314),t(315),t(62),e.exports=t(61)},126:function(e,n,t){"use strict";t.r(n);t(127);var r,i=t(124),a=t.n(i);function o(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw a}}}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}!function(e){e.$=a.a,e.Resize={chk:function(e){(e.width()||0)>=1025?e.removeClass("pc mobile tablet").addClass("pc"):(e.width()||0)>=768?e.removeClass("pc mobile tablet").addClass("tablet"):e.removeClass("pc mobile tablet").addClass("mobile")},font:function(){var e=document.documentElement,n=String(e.clientWidth/320*62.5*100),t=parseFloat(n)/100;t=t>=85?85:t,e.style.fontSize=t+"%"},resize:function(n){var t=this;e.$(window).on("resize",(function(){t.chk(n),t.font()}))}},e.Map={init:function(){return new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=null,this.map=new Object}var n,t,r;return n=e,(t=[{key:"put",value:function(e,n){this.map[e]=n}},{key:"get",value:function(e){return this.map[e]}},{key:"containsKey",value:function(e){return e in this.map}},{key:"clear",value:function(){for(var e in this.map)delete this.map[e]}},{key:"remove",value:function(e){delete this.map[e]}},{key:"keys",value:function(){var e=new Array;for(var n in this.map)e.push(n);return e}},{key:"values",value:function(){var e=new Array;for(var n in this.map)e.push(this.map[n]);return e}},{key:"size",value:function(){var e=0;for(var n in this.map)e++;return e}}])&&u(n.prototype,t),r&&u(n,r),e}())}},e.Layer={scrollTop:0,calculate:function(n){var t=e.$(n),r=t.find(".pop_inner"),i=e.$(window).height()||0,a=e.$(window).width()||0;r.find(".pop_scroll").removeAttr("style");var o=t.height()||0,s=t.width()||0,u=parseInt(r.css("marginTop"))+parseInt(r.css("marginBottom"));i<o?(r.find(".pop_scroll").css({height:i-u,overflow:"auto"}),t.css({top:0,left:(a-s)/2})):(r.find(".pop_scroll").removeAttr("style"),t.css({top:(i-o)/2,left:(a-s)/2}))},openClick:function(n,t,r,i){var a=this;e.$(document).on("click",n,(function(n){var o="."+e.$(this).data("layer"),s=e.$(this),u=function(){a.open(o,t,r)};i?i(u,o,s):u(),n.preventDefault()}))},open:function(n,t,r,i){var a=this;a.scrollTop=e.$(window).scrollTop()||0,e.$("body").addClass("fixed"),e.$("body").css({top:-a.scrollTop}),t&&e.$(t).fadeIn(),i&&i(n),e.$(r+n).show(),a.calculate(n),e.$(window).on("resize.layer",(function(){a.calculate(n)}))},closeClick:function(n,t,r,i){var a=this;e.$(document).on("click",n,(function(o){var s,u=e.$(this),c=function(){a.close(s,t,r)};s=n==t?r:r+"."+e.$(this).data("layer"),i?i(c,s,u):c(),o.preventDefault()}))},close:function(n,t,r,i){n!=t?e.$(n).hide():e.$(r).hide(),t&&e.$(t).fadeOut(),i&&i(n),e.$("body").removeClass("fixed"),e.$("body").css({top:0}),e.$(window).scrollTop(this.scrollTop),e.$(window).off("resize.layer")}},e.Event={toggle:function(n,t,r){e.$(document).on("click",n,(function(i){var a=e.$(this),o=e.$(n),s=e.$("."+a.data("target")),u=a.data("sort"),c=a.data("on"),l=a.data("siblings"),f=e.$(t),h=function(){if(c&&((null===t?a.hasClass("on"):s.is(":visible"))?(a.removeClass("on"),s.removeClass("on")):(l&&(o.removeClass("on"),f.removeClass("on")),a.addClass("on"),s.addClass("on"))),s.is(":visible"))if("fade"==u)s.fadeOut();else if("normal"==u)s.hide();else{if("none"==u)return!1;s.slideUp()}else if("fade"==u)l&&f.fadeOut(),s.fadeIn();else if("normal"==u)l&&f.hide(),s.show();else{if("none"==u)return!1;l&&f.slideUp(),s.slideDown()}};r?r(h,s):h()}))},goTop:function(n){n.on("click",(function(n){e.$("html, body").stop().animate({scrollTop:0},1e3),n.preventDefault()}))},topScrollCh:function(n,t){t.hasClass("pc")&&(0==(e.$(window).scrollTop()||0)?(n.fadeOut(),e.$("#header .inner").removeClass("on")):(n.fadeIn(),e.$("#header .inner").addClass("on")))},taps:function(n,t){var r=n+".tab_nav li";e.$(document).on("click",r,(function(r){var i=e.$(this),a=e.$(n+".tab_cont"),o=i.index(),s=function(){i.addClass("on").siblings().removeClass("on"),a.find("> div").eq(o).show().siblings().hide()};t?t(s):s(),r.preventDefault()}))}},e.Async={generaterRun:function(e){var n=e();!function e(t){var r=t.value;if(t.done)return r;r.constructor===Promise?r.then((function(t){return e(n.next(t))})).catch((function(e){return n.throw(e)})):e(n.next(r))}(n.next())},wait:function(e,n){return new Promise((function(t){return setTimeout(t,e,n)}))},promise:function(e){return new Promise((function(n,t){e(n,t)}))}},e.Fn={filter:regeneratorRuntime.mark((function e(n,t){var r,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o(t),e.prev=1,r.s();case 3:if((i=r.n()).done){e.next=10;break}if(a=i.value,!n(a)){e.next=8;break}return e.next=8,a;case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),r.e(e.t0);case 15:return e.prev=15,r.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})),map:regeneratorRuntime.mark((function e(n,t){var r,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o(t),e.prev=1,r.s();case 3:if((i=r.n()).done){e.next=9;break}return a=i.value,e.next=7,n(a);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r.e(e.t0);case 14:return e.prev=14,r.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})),take:function(e,n){var t,r=[],i=o(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;if(r.push(a),r.length===e)return r}}catch(e){i.e(e)}finally{i.f()}return r},reduce:function(e,n,t){var r,i=o(t);try{for(i.s();!(r=i.n()).done;){n=e(n,r.value)}}catch(e){i.e(e)}finally{i.f()}return n}}}(r||(r={})),n.default=r,window.CommonUI=r},313:function(e,n,t){},314:function(e,n,t){"use strict";t.r(n),t.d(n,"TOUCH_EVENT",(function(){return r})),t.d(n,"LAYER_DIM",(function(){return i})),t.d(n,"LAYER_PARENT",(function(){return a}));var r="ontouchstart"in window?"touchstart":"click",i=".layer_dimmed",a=".pop_layer"},315:function(e,n,t){"use strict";t.r(n);var r=t(61),i=t(62);!function(){var e=new r.Stage;e.init();var n=new r.Mesh(e);n.init(),window.addEventListener("resize",(function(){e.onResize()}));!function t(){window.requestAnimationFrame((function(){e.onRaf(),n.onRaf(),t()}))}()}(),function(){var e=new i.Stage;e.init();var n=new i.Mesh(e);n.init(),window.addEventListener("resize",(function(){e.onResize()}));requestAnimationFrame((function t(r){n.mesh.rotation.x+=.01,n.mesh.rotation.y+=1e-4,e.onRaf(),n.onRaf(),requestAnimationFrame(t)}))}()},61:function(e,n,t){"use strict";t.r(n),t.d(n,"Stage",(function(){return s})),t.d(n,"Mesh",(function(){return u}));var r=t(5);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}var s=function(){function e(){i(this,e),this.renderParam={width:window.innerWidth,height:window.innerHeight},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}return o(e,[{key:"init",value:function(){this._setScene(),this._setRender(),this._setCamera(),this._setFog(),this.isInitialized=!0}},{key:"_setScene",value:function(){this.scene=new r.j}},{key:"_setRender",value:function(){var e=document.getElementById("webgl-universe");this.renderer=new r.n({canvas:e,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.renderParam.width,this.renderParam.height)}},{key:"_setCamera",value:function(){var e=window.innerWidth,n=window.innerHeight;this.isInitialized||(this.camera=new r.g(120,this.renderParam.width/this.renderParam.height)),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,n)}},{key:"_setFog",value:function(){this.scene.fog=new r.b(0,50,2e3)}},{key:"_render",value:function(){var e=.1*Math.PI/180;this.camera.position.x=1e3*Math.sin(e),this.camera.position.z=1e3*Math.cos(e),this.camera.lookAt(new r.m(0,0,0)),this.renderer.render(this.scene,this.camera)}},{key:"onResize",value:function(){this._setCamera()}},{key:"onRaf",value:function(){this._render()}}]),e}(),u=function(){function e(n){i(this,e),this.stage=n,this.mesh=null}return o(e,[{key:"init",value:function(){this._setMesh()}},{key:"_setMesh",value:function(){for(var e=new r.c,n=0;n<1e4;n++){var t=new r.m;t.x=r.d.randFloatSpread(2e3),t.y=r.d.randFloatSpread(2e3),t.z=r.d.randFloatSpread(2e3),e.vertices.push(t)}var i=(new r.k).load("./assets/images/ico-star_on.png"),a=new r.i({color:16777215,size:1,map:i});this.mesh=new r.h(e,a),this.stage.scene.add(this.mesh)}},{key:"_render",value:function(){this.mesh.rotation.y+=5e-4}},{key:"onRaf",value:function(){this._render()}}]),e}()},62:function(e,n,t){"use strict";t.r(n),t.d(n,"Stage",(function(){return s})),t.d(n,"Mesh",(function(){return u}));var r=t(5);function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}var s=function(){function e(){i(this,e),this.renderParam={width:window.innerWidth,height:window.innerHeight},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}return o(e,[{key:"init",value:function(){this._setScene(),this._setRender(),this._setCamera(),this._setFog(),this.isInitialized=!0}},{key:"_setScene",value:function(){this.scene=new r.j}},{key:"_setRender",value:function(){var e=document.getElementById("webgl-planet");this.renderer=new r.n({canvas:e,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.renderParam.width,this.renderParam.height/2)}},{key:"_setCamera",value:function(){var e=window.innerWidth,n=window.innerHeight/2;this.isInitialized||(this.camera=new r.g(2,this.renderParam.width/this.renderParam.height/2)),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,n)}},{key:"_setFog",value:function(){this.scene.fog=new r.b(0,50,2e3)}},{key:"_render",value:function(){var e=.1*Math.PI/180;this.camera.position.x=1e3*Math.sin(e),this.camera.position.z=1e3*Math.cos(e),this.camera.lookAt(new r.m(0,0,0)),this.renderer.render(this.scene,this.camera)}},{key:"onResize",value:function(){this._setCamera()}},{key:"onRaf",value:function(){this._render()}}]),e}(),u=function(){function e(n){i(this,e),this.stage=n,this.mesh=null}return o(e,[{key:"init",value:function(){this._setMesh()}},{key:"_setMesh",value:function(){var e=new r.l(13,1,10,100),n=new r.f({color:16776960});this.mesh=new r.e(e,n),this.stage.scene.add(this.mesh);var t=new r.a(10,32),i=(new r.k).load("https://threejsfundamentals.org/threejs/resources/images/wall.jpg"),a=new r.f({map:i,flatShading:!0}),o=new r.e(t,a);this.stage.scene.add(o)}},{key:"_render",value:function(){}},{key:"onRaf",value:function(){this._render()}}]),e}()}});
//# sourceMappingURL=main.chunk.js.map