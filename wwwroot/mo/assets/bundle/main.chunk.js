!function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);h.length;)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={1:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([127,0,2,3]),n()}({127:function(e,t,n){n(46),n(314),n(315),n(316),n(317),n(318),e.exports=n(63)},314:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t),n.d(t,"TOUCH_EVENT",(function(){return r})),n.d(t,"LAYER_DIM",(function(){return a})),n.d(t,"LAYER_PARENT",(function(){return o}));var r="ontouchstart"in window?"touchstart":"click",a=".layer_dimmed",o=".pop_layer"},316:function(e,t,n){"use strict";n.r(t);var r=n(63),a=n(46),o=n(92),i=n.n(o),s=n(1),l=n.n(s),c=console.log,u=a.default.Async,d=a.default.LayerRocket;l()((function(){(setTimeout((function(){i.a.init({once:!0,delay:400,duration:600})}),500),l()(".aos-tab").length)&&l()(".aos-tab li").on("click",(function(e){l()(".aos-init").removeClass("aos-animate"),i.a.refresh()}));document.getElementById("webgl-universe")&&function(){var e=new r.Stage;e.init();var t=new r.Mesh(e);t.init(),window.addEventListener("resize",(function(){e.onResize()}));!function n(){window.requestAnimationFrame((function(){e.onRaf(),t.onRaf(),n()}))}()}(),function(){if(l()(".intro-overlay").length){}}(),function(){var e=regeneratorRuntime.mark(a),t=regeneratorRuntime.mark(o),n=null,r=!0;function a(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,e.prev=1,l()(".layer-rocket").length&&l()(".layer-rocket").addClass("low-zIndex"),l()(".bg-overlay").show(),e.next=6,u.wait(100);case 6:return e.sent,l()(".btn-drawer-open").hide(),l()(".bg-overlay").addClass("active"),l()("#content").addClass("hide"),e.next=12,u.wait(600);case 12:return e.sent,l()(".drawer-cont").addClass("bg"),e.next=16,u.wait(100);case 16:e.sent,l()(".bg-overlay").addClass("hide"),l()(".btn-drawer-close").show(),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),c(e.t0.message);case 24:r=!0;case 25:case"end":return e.stop()}}),e,null,[[1,21]])}function o(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,e.prev=1,l()(".btn-drawer-close").hide(),l()(".bg-overlay").removeClass("hide"),e.next=6,u.wait(100);case 6:return e.sent,l()(".drawer-cont").removeClass("bg"),l()(".bg-overlay").removeClass("active"),l()(".layer-rocket").length&&l()(".layer-rocket").removeClass("low-zIndex"),e.next=12,u.wait(200);case 12:return e.sent,l()("#content").removeClass("hide"),e.next=16,u.wait(100);case 16:e.sent,l()(".bg-overlay").hide(),l()(".btn-drawer-open").show(),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),c(e.t0.message);case 24:r=!0;case 25:case"end":return e.stop()}}),t,null,[[1,21]])}l()(".btn-drawer-open").on("click",(function(){r&&(n=a(),u.generaterRun(n))})),l()(".btn-drawer-close").on("click",(function(){r&&(n=o(),u.generaterRun(n))}))}(),l()(document).on("click",".rocket-layer-open",(function(e){var t="."+l()(e.currentTarget).data("layer");d.eventChkFlag&&(d.cashGenerator=d.open(t,(function(e){console.log("".concat(e," layer open!"))}))(),u.generaterRun(d.cashGenerator))})),l()(document).on("click",".btn-rocket-close",(function(e){var t="."+l()(e.currentTarget).data("layer");d.eventChkFlag&&(d.cashGenerator=d.close(t,(function(e){console.log("".concat(e," layer close!"))}))(),u.generaterRun(d.cashGenerator))}))}))},317:function(e,t,n){"use strict";n.r(t);var r=n(46),a=n(1),o=n.n(a),i=(console.log,r.default.Lottie);o()((function(){document.getElementById("lottie00_01")&&i.init({elem:document.getElementById("lottie00_01"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/00_data-01.json"}),document.getElementById("lottie00_02")&&i.init({elem:document.getElementById("lottie00_02"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/00_data-02.json"}),document.getElementById("lottie01")&&i.init({elem:document.getElementById("lottie01"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/01_data.json"}),document.getElementById("lottie03")&&i.init({elem:document.getElementById("lottie03"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/03_data.json"}),document.getElementById("lottie04")&&i.init({elem:document.getElementById("lottie04"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/04_data.json"}),document.getElementById("lottie05")&&i.init({elem:document.getElementById("lottie05"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/05_data.json"}),document.getElementById("lottie06")&&i.init({elem:document.getElementById("lottie06"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/06_data.json"}),document.getElementById("lottie09")&&i.init({elem:document.getElementById("lottie09"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/09_data.json"}),document.getElementById("lottie10")&&i.init({elem:document.getElementById("lottie10"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/10_data.json"}),document.getElementById("lottie11")&&i.init({elem:document.getElementById("lottie11"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/11_data.json"}),document.getElementById("lottie13")&&i.init({elem:document.getElementById("lottie13"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/13_data.json"}),document.getElementById("lottie14")&&i.init({elem:document.getElementById("lottie14"),loopFlag:!0,autoplayFlag:!0,pathString:"../bundle/json/14_data.json"})}))},318:function(e,t,n){"use strict";n.r(t),n.d(t,"Stage",(function(){return s})),n.d(t,"Mesh",(function(){return l}));var r=n(2);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var s=function(){function e(){a(this,e),this.renderParam={width:window.innerWidth,height:window.innerHeight},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}return i(e,[{key:"init",value:function(){this._setScene(),this._setRender(),this._setCamera(),this._setFog(),this.isInitialized=!0}},{key:"_setScene",value:function(){this.scene=new r.l}},{key:"_setRender",value:function(){var e=document.getElementById("webgl-planet");this.renderer=new r.p({canvas:e,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.renderParam.width,this.renderParam.height/2)}},{key:"_setCamera",value:function(){var e=window.innerWidth,t=window.innerHeight/2;this.isInitialized||(this.camera=new r.g(2,this.renderParam.width/this.renderParam.height/2)),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t)}},{key:"_setFog",value:function(){this.scene.fog=new r.a(0,50,2e3)}},{key:"_render",value:function(){var e=.1*Math.PI/180;this.camera.position.x=1e3*Math.sin(e),this.camera.position.z=1e3*Math.cos(e),this.camera.lookAt(new r.o(0,0,0)),this.renderer.render(this.scene,this.camera)}},{key:"onResize",value:function(){this._setCamera()}},{key:"onRaf",value:function(){this._render()}}]),e}(),l=function(){function e(t){a(this,e),this.stage=t,this.meshLine=null,this.meshPlanet=null,this.lineFlag=!0}return i(e,[{key:"init",value:function(){this._setMesh()}},{key:"_setMesh",value:function(){var e=new r.k(18,15,32),t=(new r.n).load("../images/test-texture.png"),n=new r.f({map:t,flatShading:!0,side:r.b});this.meshLine=new r.e(e,n),this.stage.scene.add(this.meshLine),this.meshLine.rotation.x=2;var a=new r.m(11,32,32),o=(new r.n).load("../images/test-texture.png");o.wrapS=r.j,o.wrapT=r.j,o.repeat.set(2,1);var i=new r.f({map:o,flatShading:!0,side:r.b});this.meshPlanet=new r.e(a,i),this.stage.scene.add(this.meshPlanet)}},{key:"_render",value:function(){this.meshPlanet.rotation.y+=.005,Math.floor(10*this.meshLine.rotation.y)/10==.4?this.lineFlag=!1:Math.floor(10*this.meshLine.rotation.y)/10==-.4&&(this.lineFlag=!0),this.lineFlag?this.meshLine.rotation.y+=.002:this.lineFlag||(this.meshLine.rotation.y-=.002)}},{key:"onRaf",value:function(){this._render()}}]),e}()},46:function(e,t,n){"use strict";n.r(t);n(128);var r=n(1),a=n.n(r),o=n(126),i=n.n(o);function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u,d=console.log;!function(e){e.$=a.a,e.Resize={chk:function(e){(e.width()||0)>=1025?e.removeClass("pc mobile tablet").addClass("pc"):(e.width()||0)>=768?e.removeClass("pc mobile tablet").addClass("tablet"):e.removeClass("pc mobile tablet").addClass("mobile")},font:function(){var e=document.documentElement,t=String(e.clientWidth/320*62.5*100),n=parseFloat(t)/100;n=n>=85?85:n,e.style.fontSize=n+"%"},resize:function(t){var n=this;e.$(window).on("resize",(function(){n.chk(t),n.font()}))}},e.Map={init:function(){return new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=null,this.map=new Object}var t,n,r;return t=e,(n=[{key:"put",value:function(e,t){this.map[e]=t}},{key:"get",value:function(e){return this.map[e]}},{key:"containsKey",value:function(e){return e in this.map}},{key:"clear",value:function(){for(var e in this.map)delete this.map[e]}},{key:"remove",value:function(e){delete this.map[e]}},{key:"keys",value:function(){var e=new Array;for(var t in this.map)e.push(t);return e}},{key:"values",value:function(){var e=new Array;for(var t in this.map)e.push(this.map[t]);return e}},{key:"size",value:function(){var e=0;for(var t in this.map)e++;return e}}])&&c(t.prototype,n),r&&c(t,r),e}())}},e.Layer={scrollTop:0,calculate:function(t){var n=e.$(t),r=n.find(".modal-inner"),a=e.$(window).height()||0,o=e.$(window).width()||0;r.find(".modal-scroll").removeAttr("style");var i=n.height()||0,s=n.width()||0,l=parseInt(r.css("marginTop"))+parseInt(r.css("marginBottom"));a<i?(r.find(".modal-scroll").css({height:a-l,overflow:"auto"}),n.css({top:0,left:(o-s)/2})):(r.find(".modal-scroll").removeAttr("style"),n.css({top:(a-i)/2,left:(o-s)/2}))},openClick:function(t,n,r,a){var o=this;e.$(document).on("click",t,(function(t){var i="."+e.$(this).data("layer"),s=e.$(this),l=function(){o.open(i,n,r)};a?a(l,i,s):l(),t.preventDefault()}))},open:function(t,n,r,a){var o=this;o.scrollTop=e.$(window).scrollTop()||0,e.$("body").addClass("fixed"),e.$("body").css({top:-o.scrollTop}),n&&e.$(n).fadeIn(),a&&a(t),e.$(r+t).show(),o.calculate(t),e.$(window).on("resize.layer",(function(){o.calculate(t)}))},closeClick:function(t,n,r,a){var o=this;e.$(document).on("click",t,(function(i){var s,l=e.$(this),c=function(){o.close(s,n,r)};s=t==n?r:r+"."+e.$(this).data("layer"),a?a(c,s,l):c(),i.preventDefault()}))},close:function(t,n,r,a){t!=n?e.$(t).hide():e.$(r).hide(),n&&e.$(n).fadeOut(),a&&a(t),e.$("body").removeClass("fixed"),e.$("body").css({top:0}),e.$(window).scrollTop(this.scrollTop),e.$(window).off("resize.layer")}},e.LayerRocket={cashGenerator:null,eventChkFlag:!0,open:function(t,n){var r=this;return regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.eventChkFlag=!1,o=e.$(t),a.prev=2,e.$("body").addClass("overlay-hidden"),o.show(),a.next=7,e.Async.wait(100);case 7:return a.sent,o.addClass("active"),a.next=11,e.Async.wait(700);case 11:return a.sent,o.find(".layer-top").addClass("no-cloud"),o.find(".btn-rocket-open").addClass("open"),a.next=16,e.Async.wait(300);case 16:a.sent,o.find(".layer-cont").addClass("active"),o.find(".btn-rocket-close").addClass("open"),n&&n(t),a.next=25;break;case 22:a.prev=22,a.t0=a.catch(2),d(a.t0.message);case 25:r.eventChkFlag=!0;case 26:case"end":return a.stop()}}),a,null,[[2,22]])}))},close:function(t,n){var r=this;return regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.eventChkFlag=!1,o=e.$(t),a.prev=2,e.$("body").removeClass("overlay-hidden"),o.find(".btn-rocket-close").removeClass("open"),o.find(".btn-rocket-close").addClass("close"),o.removeClass("active"),a.next=9,e.Async.wait(1e3);case 9:return a.sent,o.find(".btn-rocket-open").addClass("close"),o.find(".btn-rocket-open").removeClass("open"),o.find(".btn-rocket-close").removeClass("close"),o.find(".btn-rocket-open").removeClass("close"),o.find(".layer-top").removeClass("no-cloud"),o.find(".layer-cont").removeClass("active"),a.next=18,e.Async.wait(100);case 18:a.sent,o.hide(),n&&n(t),a.next=26;break;case 23:a.prev=23,a.t0=a.catch(2),d(a.t0.message);case 26:r.eventChkFlag=!0;case 27:case"end":return a.stop()}}),a,null,[[2,23]])}))}},e.Event={toggle:function(t,n,r){e.$(document).on("click",t,(function(a){var o=e.$(this),i=e.$(t),s=e.$("."+o.data("target")),l=o.data("sort"),c=o.data("on"),u=o.data("siblings"),d=e.$(n),h=function(){if(c&&((null===n?o.hasClass("on"):s.is(":visible"))?(o.removeClass("on"),s.removeClass("on")):(u&&(i.removeClass("on"),d.removeClass("on")),o.addClass("on"),s.addClass("on"))),s.is(":visible"))if("fade"==l)s.fadeOut();else if("normal"==l)s.hide();else{if("none"==l)return!1;s.slideUp()}else if("fade"==l)u&&d.fadeOut(),s.fadeIn();else if("normal"==l)u&&d.hide(),s.show();else{if("none"==l)return!1;u&&d.slideUp(),s.slideDown()}};r?r(h,s):h()}))},goTop:function(t){t.on("click",(function(t){e.$("html, body").stop().animate({scrollTop:0},1e3),t.preventDefault()}))},topScrollCh:function(t,n){n.hasClass("pc")&&(0==(e.$(window).scrollTop()||0)?(t.fadeOut(),e.$("#header .inner").removeClass("on")):(t.fadeIn(),e.$("#header .inner").addClass("on")))},taps:function(t,n){var r=t+".tab_nav li";e.$(document).on("click",r,(function(r){var a=e.$(this),o=e.$(t+".tab_cont"),i=a.index(),s=function(){a.addClass("on").siblings().removeClass("on"),o.find("> div").eq(i).show().siblings().hide()};n?n(s):s(),r.preventDefault()}))}},e.Lottie={init:function(e){var t=e.elem,n=e.loopFlag,r=e.autoplayFlag,a=e.pathString;return i.a.loadAnimation({container:t,renderer:"svg",loop:n,autoplay:r,path:a})}},e.Async={generaterRun:function(e){return function t(n){var r=n.value;return n.done?r:r.constructor===Promise?r.then((function(n){return t(e.next(n))})).catch((function(t){return e.throw(t)})):t(e.next(r))}(e.next())},wait:function(e,t){return new Promise((function(n){return setTimeout(n,e,t)}))},promise:function(e){return new Promise((function(t,n){e(t,n)}))},debounce:function(e,t){var n=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return clearTimeout(n),new Promise((function(r){n=setTimeout((function(){return r(e.apply(void 0,a))}),t)}))}},throttling:function(e,t){var n=null;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return new Promise((function(r){n||(n=setTimeout((function(){r(e.apply(void 0,a)),n=null}),t))}))}}},e.Fn={filter:regeneratorRuntime.mark((function e(t,n){var r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=s(n),e.prev=1,r.s();case 3:if((a=r.n()).done){e.next=10;break}if(o=a.value,!t(o)){e.next=8;break}return e.next=8,o;case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),r.e(e.t0);case 15:return e.prev=15,r.f(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})),map:regeneratorRuntime.mark((function e(t,n){var r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=s(n),e.prev=1,r.s();case 3:if((a=r.n()).done){e.next=9;break}return o=a.value,e.next=7,t(o);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r.e(e.t0);case 14:return e.prev=14,r.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})),take:function(e,t){var n,r=[],a=s(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;if(r.push(o),r.length===e)return r}}catch(e){a.e(e)}finally{a.f()}return r},reduce:function(e,t,n){var r,a=s(n);try{for(a.s();!(r=a.n()).done;){t=e(t,r.value)}}catch(e){a.e(e)}finally{a.f()}return t}}}(u||(u={})),t.default=u,window.CommonUI=u,window.$=window.CommonUI.$},63:function(e,t,n){"use strict";n.r(t),n.d(t,"Stage",(function(){return s})),n.d(t,"Mesh",(function(){return l}));var r=n(2);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var s=function(){function e(){a(this,e),this.renderParam={width:window.innerWidth,height:window.innerHeight},this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.mesh=null,this.isInitialized=!1}return i(e,[{key:"init",value:function(){this._setScene(),this._setRender(),this._setCamera(),this._setFog(),this.isInitialized=!0}},{key:"_setScene",value:function(){this.scene=new r.l}},{key:"_setRender",value:function(){var e=document.getElementById("webgl-universe");this.renderer=new r.p({canvas:e,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.renderParam.width,this.renderParam.height)}},{key:"_setCamera",value:function(){var e=window.innerWidth,t=window.innerHeight;this.isInitialized||(this.camera=new r.g(120,this.renderParam.width/this.renderParam.height)),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t)}},{key:"_setFog",value:function(){this.scene.fog=new r.a(0,50,2e3)}},{key:"_render",value:function(){var e=.1*Math.PI/180;this.camera.position.x=1e3*Math.sin(e),this.camera.position.z=1e3*Math.cos(e),this.camera.lookAt(new r.o(0,0,0)),this.renderer.render(this.scene,this.camera)}},{key:"onResize",value:function(){this._setCamera()}},{key:"onRaf",value:function(){this._render()}}]),e}(),l=function(){function e(t){a(this,e),this.stage=t,this.mesh=null}return i(e,[{key:"init",value:function(){this._setMesh()}},{key:"_setMesh",value:function(){for(var e=new r.c,t=0;t<6e3;t++){var n=new r.o;n.x=r.d.randFloatSpread(2e3),n.y=r.d.randFloatSpread(2e3),n.z=r.d.randFloatSpread(2e3),e.vertices.push(n)}var a=(new r.n).load("../images/ico-star.png"),o=new r.i({color:16777215,size:3,map:a});o.alphaTest=.5,this.mesh=new r.h(e,o),this.stage.scene.add(this.mesh)}},{key:"_render",value:function(){this.mesh.rotation.y+=5e-4}},{key:"onRaf",value:function(){this._render()}}]),e}()}});
//# sourceMappingURL=main.chunk.js.map