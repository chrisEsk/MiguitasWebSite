function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function t(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{nI0H:function e(r,n,i){"use strict";i.r(n),i.d(n,"ion_spinner",function(){return c});var s=i("S6Yj"),a=i("OoTa"),o=i("pyhm");var l={bubbles:{dur:1e3,circles:9,fn:function e(t,r,n){var i=t*r/n-t+"ms",s=2*Math.PI*r/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function e(t,r,n){var i=r/n,s=t*i-t+"ms",a=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function e(){return{r:20,cx:44,cy:44,fill:"none",viewBox:"22 22 44 44",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function e(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function e(t,r){return{r:6,style:{left:9-9*r+"px","animation-delay":-110*r+"ms"}}}},lines:{dur:1e3,lines:12,fn:function e(t,r,n){return{y1:17,y2:29,style:{transform:"rotate("+(30*r+(r<6?180:-180))+"deg)","animation-delay":t*r/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function e(t,r,n){return{y1:12,y2:20,style:{transform:"rotate("+(30*r+(r<6?180:-180))+"deg)","animation-delay":t*r/n-t+"ms"}}}}},c=function(){function e(e){Object(s.m)(this,e),this.paused=!1}var r=e.prototype;r.getName=function e(){var t=this.name||a.b.get("spinner"),r=Object(s.e)(this);return t||("ios"===r?"lines":"circular")};r.render=function e(){var t;var r=Object(s.e)(this),n=this.getName(),i=l[n]||l.lines,c="number"==typeof this.duration&&this.duration>10?this.duration:i.dur,u=[];if(void 0!==i.circles)for(var m=0;m<i.circles;m++){u.push(f(i,c,m,i.circles))}else if(void 0!==i.lines)for(var d=0;d<i.lines;d++){u.push(p(i,c,d,i.lines))}return Object(s.i)(s.a,{class:Object.assign({},Object(o.a)(this.color),(t={},t[r]=!0,t["spinner-"+n]=!0,t["spinner-paused"]=!!this.paused||a.b.getBoolean("_testing"),t)),role:"progressbar",style:i.elmDuration?{animationDuration:c+"ms"}:{}},u)};t(e,null,[{key:"style",get:function e(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:3.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}"}}]);return e}(),f=function e(t,r,n,i){var a=t.fn(r,n,i);return a.style["animation-duration"]=r+"ms",Object(s.i)("svg",{viewBox:a.viewBox||"0 0 64 64",style:a.style},Object(s.i)("circle",{transform:a.transform||"translate(32,32)",cx:a.cx,cy:a.cy,r:a.r,style:t.elmDuration?{animationDuration:r+"ms"}:{}}))},p=function e(t,r,n,i){var a=t.fn(r,n,i);return a.style["animation-duration"]=r+"ms",Object(s.i)("svg",{viewBox:a.viewBox||"0 0 64 64",style:a.style},Object(s.i)("line",{transform:"translate(32,32)",y1:a.y1,y2:a.y2}))}}}]);