(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{ejOg:function n(a,e,i){"use strict";i.r(e),i.d(e,"mdTransitionAnimation",function(){return t});var o=i("1iah");var t=function n(a,e){var i="back"===e.direction,t=e.leavingEl,c=r(e.enteringEl),s=c.querySelector("ion-toolbar"),d=Object(o.a)();if(d.addElement(c).beforeRemoveClass("ion-page-invisible"),i?d.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),s){var u=Object(o.a)();u.addElement(s),d.addAnimation(u)}if(t&&i){d.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var p=Object(o.a)();p.addElement(r(t)).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),d.addAnimation(p)}return d},r=function n(a){return a.classList.contains("ion-page")?a:a.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||a}}}]);