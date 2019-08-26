function t(t,e,r,n,i,o,s){try{var l=t[o](s);var a=l.value}catch(c){r(c);return}if(l.done){e(a)}else{Promise.resolve(a).then(n,i)}}function e(e){return function(){var r=this,n=arguments;return new Promise(function(i,o){var s=e.apply(r,n);function l(e){t(s,i,o,l,a,"next",e)}function a(e){t(s,i,o,l,a,"throw",e)}l(undefined)})}}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}function n(t,e,n){if(e)r(t.prototype,e);if(n)r(t,n);return t}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{Ftzj:function t(r,i,o){"use strict";o.r(i),o.d(i,"ion_reorder",function(){return a}),o.d(i,"ion_reorder_group",function(){return c});var s=o("S6Yj"),l=(o("OoTa"),o("1OJ9"));var a=function(){function t(t){Object(s.m)(this,t)}var e=t.prototype;e.onClick=function t(e){e.preventDefault(),e.stopImmediatePropagation()};e.render=function t(){return Object(s.i)(s.a,{class:Object(s.e)(this)},Object(s.i)("slot",null,Object(s.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))};n(t,null,[{key:"style",get:function t(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"}}]);return t}(),c=function(){function t(t){Object(s.m)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(s.d)(this,"ionItemReorder",7)}var r=t.prototype;r.disabledChanged=function t(){this.gesture&&this.gesture.setDisabled(this.disabled)};r.componentDidLoad=function(){var t=e(regeneratorRuntime.mark(function t(){var e=this;var r;return regeneratorRuntime.wrap(function t(n){while(1){switch(n.prev=n.next){case 0:r=this.el.closest("ion-content");n.t0=r;if(!n.t0){n.next=6;break}n.next=5;return r.getScrollElement();case 5:this.scrollEl=n.sent;case 6:n.next=8;return Promise.resolve().then(o.bind(null,"VUZZ"));case 8:n.t1={el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function t(r){return e.canStart(r)},onStart:function t(r){return e.onStart(r)},onMove:function t(r){return e.onMove(r)},onEnd:function t(){return e.onEnd()}};this.gesture=n.sent.createGesture(n.t1);this.disabledChanged();case 11:case"end":return n.stop()}}},t,this)}));function r(){return t.apply(this,arguments)}return r}();r.componentDidUnload=function t(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)};r.complete=function t(e){return Promise.resolve(this.completeSync(e))};r.canStart=function t(e){if(this.selectedItemEl||0!==this.state)return!1;var r=e.event.target.closest("ion-reorder");if(!r)return!1;var n=u(r,this.el);return!!n&&(e.data=n,!0)};r.onStart=function t(e){e.event.preventDefault();var r=this.selectedItemEl=e.data,n=this.cachedHeights;n.length=0;var i=this.el,o=i.children;if(!o||0===o.length)return;var s=0;for(var a=0;a<o.length;a++){var c=o[a];n.push(s+=c.offsetHeight),c.$ionIndex=a}var u=i.getBoundingClientRect();if(this.containerTop=u.top,this.containerBottom=u.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+d,this.scrollElBottom=f.bottom-d}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=h(r),this.selectedItemHeight=r.offsetHeight,this.state=1,r.classList.add(m),Object(l.a)()};r.onMove=function t(e){var r=this.selectedItemEl;if(!r)return;var n=this.autoscroll(e.currentY),i=this.containerTop-n,o=Math.max(i,Math.min(e.currentY,this.containerBottom-n)),s=n+o-e.startY,a=this.itemIndexForTop(o-i);if(a!==this.lastToIndex){var c=h(r);this.lastToIndex=a,Object(l.b)(),this.reorderMove(c,a)}r.style.transform="translateY("+s+"px)"};r.onEnd=function t(){var e=this;var r=this.selectedItemEl;if(this.state=2,!r)return void(this.state=0);var n=this.lastToIndex,i=h(r);n===i?(r.style.transition="transform 200ms ease-in-out",r.style.transform="",r.classList.remove(m),setTimeout(function(){return e.completeSync()},200)):this.ionItemReorder.emit({from:i,to:n,complete:this.completeSync.bind(this)}),Object(l.c)()};r.completeSync=function t(e){var r=this.selectedItemEl;if(r&&2===this.state){var n=this.el.children,i=n.length,o=this.lastToIndex,s=h(r);o===s||e&&!0!==e||this.el.insertBefore(r,s<o?n[o+1]:n[o]),Array.isArray(e)&&(e=v(e,s,o));for(var l=0;l<i;l++){n[l].style.transform=""}r.style.transition="",r.classList.remove(m),this.selectedItemEl=void 0,this.state=0}return e};r.itemIndexForTop=function t(e){var r=this.cachedHeights;var n=0;for(n=0;n<r.length&&!(r[n]>e);n++){}return n};r.reorderMove=function t(e,r){var n=this.selectedItemHeight,i=this.el.children;for(var o=0;o<i.length;o++){var s="";o>e&&o<=r?s="translateY("+-n+"px)":o<e&&o>=r&&(s="translateY("+n+"px)"),i[o].style.transform=s}};r.autoscroll=function t(e){if(!this.scrollEl)return 0;var r=0;return e<this.scrollElTop?r=-f:e>this.scrollElBottom&&(r=f),0!==r&&this.scrollEl.scrollBy(0,r),this.scrollEl.scrollTop-this.scrollElInitial};r.render=function t(){var e;var r=Object(s.e)(this);return Object(s.i)(s.a,{class:(e={},e[r]=!0,e["reorder-enabled"]=!this.disabled,e["reorder-list-active"]=0!==this.state,e)})};n(t,[{key:"el",get:function t(){return Object(s.f)(this)}}],[{key:"watchers",get:function t(){return{disabled:["disabledChanged"]}}},{key:"style",get:function t(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}]);return t}(),h=function t(e){return e.$ionIndex},u=function t(e,r){var n;for(;e;){if((n=e.parentElement)===r)return e;e=n}},d=60,f=10,m="reorder-selected",v=function t(e,r,n){var i=e[r];return e.splice(r,1),e.splice(n,0,i),e.slice()}}}]);