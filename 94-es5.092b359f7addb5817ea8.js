function i(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(i,n.key,n)}}function e(e,t,n){if(t)i(e.prototype,t);if(n)i(e,n);return e}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{RyPD:function i(t,n,s){"use strict";s.r(n),s.d(n,"ion_split_pane",function(){return o});var a=s("S6Yj");s("OoTa");var r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},o=function(){function i(i){Object(a.m)(this,i),this.visible=!1,this.disabled=!1,this.when=r.lg,this.ionSplitPaneVisible=Object(a.d)(this,"ionSplitPaneVisible",7)}var t=i.prototype;t.visibleChanged=function i(e){var t={visible:e,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(t)};t.componentDidLoad=function i(){this.styleChildren(),this.updateState()};t.componentDidUnload=function i(){this.rmL&&(this.rmL(),this.rmL=void 0)};t.updateState=function i(){var e=this;if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);var t=this.when;if("boolean"==typeof t)return void(this.visible=t);var n=r[t]||t;if(0!==n.length){if(window.matchMedia){var s=function i(t){e.visible=t.matches},a=window.matchMedia(n);a.addListener(s),this.rmL=function(){return a.removeListener(s)},this.visible=a.matches}}else this.visible=!1};t.isPane=function i(e){return!!this.visible&&e.parentElement===this.el&&e.classList.contains("split-pane-side")};t.styleChildren=function i(){var e=this.contentId,t=this.el.children,n=this.el.childElementCount;var s=!1;for(var a=0;a<n;a++){var r=t[a],o=void 0!==e?r.id===e:r.hasAttribute("main");if(o){if(s)return void console.warn("split pane cannot have more than one main node");s=!0}l(r,o)}s||console.warn("split pane does not have a specified main node")};t.render=function i(){var e;var t=Object(a.e)(this);return Object(a.i)(a.a,{class:(e={},e[t]=!0,e["split-pane-"+t]=!0,e["split-pane-visible"]=this.visible,e)})};e(i,[{key:"el",get:function i(){return Object(a.f)(this)}}],[{key:"watchers",get:function i(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}},{key:"style",get:function i(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-md{--border:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"}}]);return i}(),l=function i(e,t){var n,s;t?(n="split-pane-main",s="split-pane-side"):(n="split-pane-side",s="split-pane-main");var a=e.classList;a.add(n),a.remove(s)}}}]);