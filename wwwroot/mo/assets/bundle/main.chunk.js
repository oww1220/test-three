!function(e){function n(n){for(var r,i,s=n[0],l=n[1],c=n[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(n);h.length;)h.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={1:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;o.push([128,0,2,3]),t()}({128:function(e,n,t){t(63),t(315),t(316),t(65),t(64),t(317),e.exports=t(318)},315:function(e,n,t){"use strict";t.r(n);var r=t(64),a=t(65),o=t(63),i=t(94),s=t.n(i),l=t(6),c=t.n(l),u=console.log,d=o.default.Async,h=o.default.LayerRocket;c()((function(){setTimeout((function(){s.a.init({once:!0,delay:400,duration:600})}),500),c()(".mainTab").length&&c()(".mainTab ul li").on("click",(function(){c()(".aos-init").removeClass("aos-animate"),s.a.refresh()})),document.getElementById("webgl-universe")&&function(){var e=new r.Stage;e.init();var n=new r.Mesh(e);n.init(),window.addEventListener("resize",(function(){e.onResize()}));!function t(){window.requestAnimationFrame((function(){e.onRaf(),n.onRaf(),t()}))}()}(),document.getElementById("webgl-planet")&&function(){var e=new a.Stage;e.init();var n=new a.Mesh(e);n.init(),window.addEventListener("resize",(function(){e.onResize()}));!function t(){window.requestAnimationFrame((function(){e.onRaf(),n.onRaf(),t()}))}()}(),function(){var e=regeneratorRuntime.mark(a),n=regeneratorRuntime.mark(o),t=null,r=!0;function a(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,e.prev=1,c()(".layer-rocket").length&&c()(".layer-rocket").addClass("low-zIndex"),c()(".btn-drawer-open").hide(),c()(".bg-overlay").addClass("active"),c()("#content").addClass("hide"),e.next=8,d.wait(600);case 8:return e.sent,c()(".drawer-cont").addClass("bg"),e.next=12,d.wait(100);case 12:e.sent,c()(".bg-overlay").addClass("hide"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),u(e.t0.message);case 19:r=!0;case 20:case"end":return e.stop()}}),e,null,[[1,16]])}function o(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,e.prev=1,c()("#content").removeClass("hide"),c()(".bg-overlay").removeClass("hide"),e.next=6,d.wait(100);case 6:return e.sent,c()(".drawer-cont").removeClass("bg"),c()(".bg-overlay").removeClass("active"),c()(".layer-rocket").length&&c()(".layer-rocket").removeClass("low-zIndex"),e.next=12,d.wait(700);case 12:e.sent,c()(".btn-drawer-open").show(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),u(e.t0.message);case 19:r=!0;case 20:case"end":return e.stop()}}),n,null,[[1,16]])}c()(".btn-drawer-open").on("click",(function(){r&&(t=a(),d.generaterRun(t))})),c()(".btn-drawer-close").on("click",(function(){r&&(t=o(),d.generaterRun(t))}))}(),c()(document).on("click",".rocket-layer-open",(function(e){var n="."+c()(e.target).data("layer");h.eventChkFlag&&(h.cashGenerator=h.open(n,(function(e){console.log("".concat(e," layer open!"))}))(),d.generaterRun(h.cashGenerator))})),c()(document).on("click",".btn-rocket-close",(function(e){var n="."+c()(e.target).data("layer");h.eventChkFlag&&(h.cashGenerator=h.close(n,(function(e){console.log("".concat(e," layer close!"))}))(),d.generaterRun(h.cashGenerator))}))}))},316:function(e,n,t){"use strict";t.r(n);var r=t(18),a=t.n(r),o=t(6),i=t.n(o);console.log;i()((function(){document.getElementById("lottie00_01")&&a.a.loadAnimation({container:document.getElementById("lottie00_01"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/00_data-01.json"}),document.getElementById("lottie00_02")&&a.a.loadAnimation({container:document.getElementById("lottie00_02"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/00_data-02.json"}),document.getElementById("lottie01")&&a.a.loadAnimation({container:document.getElementById("lottie01"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/01_data.json"}),document.getElementById("lottie03")&&a.a.loadAnimation({container:document.getElementById("lottie03"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/03_data.json"}),document.getElementById("lottie05")&&a.a.loadAnimation({container:document.getElementById("lottie05"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/05_data.json"}),document.getElementById("lottie06")&&a.a.loadAnimation({container:document.getElementById("lottie06"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/06_data.json"}),document.getElementById("lottie09")&&a.a.loadAnimation({container:document.getElementById("lottie09"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/09_data.json"}),document.getElementById("lottie10")&&a.a.loadAnimation({container:document.getElementById("lottie10"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/10_data.json"}),document.getElementById("lottie11")&&a.a.loadAnimation({container:document.getElementById("lottie11"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/11_data.json"}),document.getElementById("lottie13")&&a.a.loadAnimation({container:document.getElementById("lottie13"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/13_data.json"}),document.getElementById("lottie14")&&a.a.loadAnimation({container:document.getElementById("lottie14"),renderer:"svg",loop:!0,autoplay:!0,path:"../images/json/14_data.json"})}))},317:function(e,n,t){},318:function(e,n,t){"use strict";t.r(n),t.d(n,"TOUCH_EVENT",(function(){return r})),t.d(n,"LAYER_DIM",(function(){return a})),t.d(n,"LAYER_PARENT",(function(){return o}));var r="ontouchstart"in window?"touchstart":"click",a=".layer_dimmed",o=".pop_layer"},63:function(e,n,t){"use strict";t.r(n);t(129);var r=t(6),a=t.n(r);function o(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw o}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l,c=console.log;!function(e){e.$=a.a,e.Resize={chk:function(e){(e.width()||0)>=1025?e.removeClass("pc mobile tablet").addClass("pc"):(e.width()||0)>=768?e.removeClass("pc mobile tablet").addClass("tablet"):e.removeClass("pc mobile tablet").addClass("mobile")},font:function(){var e=document.documentElement,n=String(e.clientWidth/320*62.5*100),t=parseFloat(n)/100;t=t>=85?85:t,e.style.fontSize=t+"%"},resize:function(n){var t=this;e.$(window).on("resize",(function(){t.chk(n),t.font()}))}},e.Map={init:function(){return new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=null,this.map=new Object}var n,t,r;return n=e,(t=[{key:"put",value:function(e,n){this.map[e]=n}},{key:"get",value:function(e){return this.map[e]}},{key:"containsKey",value:function(e){return e in this.map}},{key:"clear",value:function(){for(var e in this.map)delete this.map[e]}},{key:"remove",value:function(e){delete this.map[e]}},{key:"keys",value:function(){var e=new Array;for(var n in this.map)e.push(n);return e}},{key:"values",value:function(){var e=new Array;for(var n in this.map)e.push(this.map[n]);return e}},{key:"size",value:function(){var e=0;for(var n in this.map)e++;return e}}])&&s(n.prototype,t),r&&s(n,r),e}())}},e.Layer={scrollTop:0,calculate:function(n){var t=e.$(n),r=t.find(".modal-inner"),a=e.$(window).height()||0,o=e.$(window).width()||0;r.find(".modal-scroll").removeAttr("style");var i=t.height()||0,s=t.width()||0,l=parseInt(r.css("marginTop"))+parseInt(r.css("marginBottom"));a<i?(r.find(".modal-scroll").css({height:a-l,overflow:"auto"}),t.css({top:0,left:(o-s)/2})):(r.find(".modal-scroll").removeAttr("style"),t.css({top:(a-i)/2,left:(o-s)/2}))},openClick:function(n,t,r,a){var o=this;e.$(document).on("click",n,(function(n){var i="."+e.$(this).data("layer"),s=e.$(this),l=function(){o.open(i,t,r)};a?a(l,i,s):l(),n.preventDefault()}))},open:function(n,t,r,a){var o=this;o.scrollTop=e.$(window).scrollTop()||0,e.$("body").addClass("fixed"),e.$("body").css({top:-o.scrollTop}),t&&e.$(t).fadeIn(),a&&a(n),e.$(r+n).show(),o.calculate(n),e.$(window).on("resize.layer",(function(){o.calculate(n)}))},closeClick:function(n,t,r,a){var o=this;e.$(document).on("click",n,(function(i){var s,l=e.$(this),c=function(){o.close(s,t,r)};s=n==t?r:r+"."+e.$(this).data("layer"),a?a(c,s,l):c(),i.preventDefault()}))},close:function(n,t,r,a){n!=t?e.$(n).hide():e.$(r).hide(),t&&e.$(t).fadeOut(),a&&a(n),e.$("body").removeClass("fixed"),e.$("body").css({top:0}),e.$(window).scrollTop(this.scrollTop),e.$(window).off("resize.layer")}},e.LayerRocket={cashGenerator:null,eventChkFlag:!0,open:function(n,t){var r=this;return regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.eventChkFlag=!1,o=e.$(n),a.prev=2,e.$("body").addClass("overlay-hidden"),o.addClass("active"),a.next=7,e.Async.wait(700);case 7:return a.sent,o.find(".layer-top").addClass("no-cloud"),o.find(".btn-rocket-open").addClass("open"),a.next=12,e.Async.wait(300);case 12:a.sent,o.find(".layer-cont").addClass("active"),o.find(".btn-rocket-close").addClass("open"),t&&t(n),a.next=21;break;case 18:a.prev=18,a.t0=a.catch(2),c(a.t0.message);case 21:r.eventChkFlag=!0;case 22:case"end":return a.stop()}}),a,null,[[2,18]])}))},close:function(n,t){var r=this;return regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.eventChkFlag=!1,o=e.$(n),a.prev=2,e.$("body").removeClass("overlay-hidden"),o.find(".btn-rocket-close").removeClass("open"),o.find(".btn-rocket-close").addClass("close"),o.removeClass("active"),a.next=9,e.Async.wait(1e3);case 9:a.sent,o.find(".btn-rocket-open").addClass("close"),o.find(".btn-rocket-open").removeClass("open"),o.find(".btn-rocket-close").removeClass("close"),o.find(".btn-rocket-open").removeClass("close"),o.find(".layer-top").removeClass("no-cloud"),o.find(".layer-cont").removeClass("active"),t&&t(n),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(2),c(a.t0.message);case 22:r.eventChkFlag=!0;case 23:case"end":return a.stop()}}),a,null,[[2,19]])}))}},e.Event={toggle:function(n,t,r){e.$(document).on("click",n,(function(a){var o=e.$(this),i=e.$(n),s=e.$("."+o.data("target")),l=o.data("sort"),c=o.data("on"),u=o.data("siblings"),d=e.$(t),h=function(){if(c&&((null===t?o.hasClass("on"):s.is(":visible"))?(o.removeClass("on"),s.removeClass("on")):(u&&(i.removeClass("on"),d.removeClass("on")),o.addClass("on"),s.addClass("on"))),s.is(":visible"))if("fade"==l)s.fadeOut();else if("normal"==l)s.hide();else{if("none"==l)return!1;s.slideUp()}else if("fade"==l)u&&d.fadeOut(),s.fadeIn();else if("normal"==l)u&&d.hide(),s.show();else{if("none"==l)return!1;u&&d.slideUp(),s.slideDown()}};r?r(h,s):h()}))},goTop:function(n){n.on("click",(function(n){e.$("html, body").stop().animate({scrollTop:0},1e3),n.preventDefault()}))},topScrollCh:function(n,t){t.hasClass("pc")&&(0==(e.$(window).scrollTop()||0)?(n.fadeOut(),e.$("#header .inner").removeClass("on")):(n.fadeIn(),e.$("#header .inner").addClass("on")))},taps:function(n,t){var r=n+".tab_nav li";e.$(document).on("click",r,(function(r){var a=e.$(this),o=e.$(n+".tab_cont"),i=a.index(),s=function(){a.addClass("on").siblings().removeClass("on"),o.find("> div").eq(i).show().siblings().hide()};t?t(s):s(),r.preventDefault()}))}},e.Async={generaterRun:function(e){return function n(t){var r=t.value;return t.done?r:r.constructor===Promise?r.then((function(t){return n(e.next(t))})).catch((function(n){return e.throw(n)})):n(e.next(r))}(e.next())},wait:function(e,n){return new Promise((function(t){return setTimeout(t,e,n)}))},promise:function(e){return new Promise((function(n,t){e(n,t)}))},debounce:function(e,n){var t=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return clearTimeout(t),new Promise((function(r){t=setTimeout((function(){return r(e.apply(void 0,a))}),n)}))}},throttling:function(e,n){var t=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return new Promise((function(r){t||(t=setTimeout((function(){r(e.apply(void 0,a)),t=null}),n))}))}}},e.Fn={filter:regeneratorRuntime.mark((function e(n,t){var r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o(t),e.prev=1,r.s();case 3:if((a=r.n()).done){e.next=10;break}if(i=a.value,!n(i)){e.next=8;break}return e.next=8,i;case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),r.e(e.t0);case 15:return e.prev=15,r.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})),map:regeneratorRuntime.mark((function e(n,t){var r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o(t),e.prev=1,r.s();case 3:if((a=r.n()).done){e.next=9;break}return i=a.value,e.next=7,n(i);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r.e(e.t0);case 14:return e.prev=14,r.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})),take:function(e,n){var t,r=[],a=o(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(r.push(i),r.length===e)return r}}catch(e){a.e(e)}finally{a.f()}return r},reduce:function(e,n,t){var r,a=o(t);try{for(a.s();!(r=a.n()).done;){n=e(n,r.value)}}catch(e){a.e(e)}finally{a.f()}return n}}}(l||(l={})),n.default=l,window.CommonUI=l,window.$=window.CommonUI.$},64:function(e,n,t){"use strict";t.r(n),t.d(n,"Stage",(function(){return s})),t.d(n,"Mesh",(function(){return l}));var r=t(1);function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}var s=function(){function e(){a(this,e),this.renderParam={width:window.innerWidth,height:window.innerHeight},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}return i(e,[{key:"init",value:function(){this._setScene(),this._setRender(),this._setCamera(),this._setFog(),this.isInitialized=!0}},{key:"_setScene",value:function(){this.scene=new r.l}},{key:"_setRender",value:function(){var e=document.getElementById("webgl-universe");this.renderer=new r.p({canvas:e,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.renderParam.width,this.renderParam.height)}},{key:"_setCamera",value:function(){var e=window.innerWidth,n=window.innerHeight;this.isInitialized||(this.camera=new r.g(120,this.renderParam.width/this.renderParam.height)),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,n)}},{key:"_setFog",value:function(){this.scene.fog=new r.a(0,50,2e3)}},{key:"_render",value:function(){var e=.1*Math.PI/180;this.camera.position.x=1e3*Math.sin(e),this.camera.position.z=1e3*Math.cos(e),this.camera.lookAt(new r.o(0,0,0)),this.renderer.render(this.scene,this.camera)}},{key:"onResize",value:function(){this._setCamera()}},{key:"onRaf",value:function(){this._render()}}]),e}(),l=function(){function e(n){a(this,e),this.stage=n,this.mesh=null}return i(e,[{key:"init",value:function(){this._setMesh()}},{key:"_setMesh",value:function(){for(var e=new r.c,n=0;n<1e4;n++){var t=new r.o;t.x=r.d.randFloatSpread(2e3),t.y=r.d.randFloatSpread(2e3),t.z=r.d.randFloatSpread(2e3),e.vertices.push(t)}var a=(new r.n).load("../images/ico-star_on.png"),o=new r.i({color:16777215,size:1,map:a});this.mesh=new r.h(e,o),this.stage.scene.add(this.mesh)}},{key:"_render",value:function(){this.mesh.rotation.y+=5e-4}},{key:"onRaf",value:function(){this._render()}}]),e}()},65:function(e,n,t){"use strict";t.r(n),t.d(n,"Stage",(function(){return s})),t.d(n,"Mesh",(function(){return l}));var r=t(1);function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e}var s=function(){function e(){a(this,e),this.renderParam={width:window.innerWidth,height:window.innerHeight},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}return i(e,[{key:"init",value:function(){this._setScene(),this._setRender(),this._setCamera(),this._setFog(),this.isInitialized=!0}},{key:"_setScene",value:function(){this.scene=new r.l}},{key:"_setRender",value:function(){var e=document.getElementById("webgl-planet");this.renderer=new r.p({canvas:e,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.renderParam.width,this.renderParam.height/2)}},{key:"_setCamera",value:function(){var e=window.innerWidth,n=window.innerHeight/2;this.isInitialized||(this.camera=new r.g(2,this.renderParam.width/this.renderParam.height/2)),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,n)}},{key:"_setFog",value:function(){this.scene.fog=new r.a(0,50,2e3)}},{key:"_render",value:function(){var e=.1*Math.PI/180;this.camera.position.x=1e3*Math.sin(e),this.camera.position.z=1e3*Math.cos(e),this.camera.lookAt(new r.o(0,0,0)),this.renderer.render(this.scene,this.camera)}},{key:"onResize",value:function(){this._setCamera()}},{key:"onRaf",value:function(){this._render()}}]),e}(),l=function(){function e(n){a(this,e),this.stage=n,this.meshLine=null,this.meshPlanet=null,this.lineFlag=!0}return i(e,[{key:"init",value:function(){this._setMesh()}},{key:"_setMesh",value:function(){var e=new r.k(18,15,32),n=(new r.n).load("../images/test-texture.png"),t=new r.f({map:n,flatShading:!0,side:r.b});this.meshLine=new r.e(e,t),this.stage.scene.add(this.meshLine),this.meshLine.rotation.x=2;var a=new r.m(11,32,32),o=(new r.n).load("../images/test-texture.png");o.wrapS=r.j,o.wrapT=r.j,o.repeat.set(2,1);var i=new r.f({map:o,flatShading:!0,side:r.b});this.meshPlanet=new r.e(a,i),this.stage.scene.add(this.meshPlanet)}},{key:"_render",value:function(){this.meshPlanet.rotation.y+=.005,Math.floor(10*this.meshLine.rotation.y)/10==.4?this.lineFlag=!1:Math.floor(10*this.meshLine.rotation.y)/10==-.4&&(this.lineFlag=!0),this.lineFlag?this.meshLine.rotation.y+=.002:this.lineFlag||(this.meshLine.rotation.y-=.002)}},{key:"onRaf",value:function(){this._render()}}]),e}()}});
//# sourceMappingURL=main.chunk.js.map