(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{SLyW:function(e,t,n){"use strict";n.r(t),n.d(t,"KEYBOARD_DID_CLOSE",(function(){return o})),n.d(t,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(t,"copyVisualViewport",(function(){return l})),n.d(t,"keyboardDidClose",(function(){return b})),n.d(t,"keyboardDidOpen",(function(){return p})),n.d(t,"keyboardDidResize",(function(){return w})),n.d(t,"resetKeyboardAssist",(function(){return a})),n.d(t,"setKeyboardClose",(function(){return f})),n.d(t,"setKeyboardOpen",(function(){return c})),n.d(t,"startKeyboardAssist",(function(){return u})),n.d(t,"trackViewportChanges",(function(){return D}));const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let r={},d={},s=!1;const a=()=>{r={},d={},s=!1},u=e=>{h(e),e.visualViewport&&(d=l(e.visualViewport),e.visualViewport.onresize=()=>{D(e),p()||w(e)?c(e):b(e)&&f(e)})},h=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>f(e))},c=(e,t)=>{g(e,t),s=!0},f=e=>{y(e),s=!1},p=()=>!s&&r.width===d.width&&(r.height-d.height)*d.scale>150,w=e=>s&&!b(e),b=e=>s&&d.height===e.innerHeight,g=(e,t)=>{const n=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(n)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},D=e=>{r=Object.assign({},d),d=l(e.visualViewport)},l=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);