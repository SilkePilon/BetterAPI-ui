function dt(t,e){t.indexOf(e)===-1&&t.push(e)}function kt(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const et=(t,e,n)=>Math.min(Math.max(n,t),e),p={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},q=t=>typeof t=="number",E=t=>Array.isArray(t)&&!q(t[0]),pt=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function mt(t,e){return E(t)?t[pt(0,t.length,e)]:t}const nt=(t,e,n)=>-n*t+n*e+t,it=()=>{},T=t=>t,X=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function st(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=X(0,e,i);t.push(nt(n,1,s))}}function gt(t){const e=[0];return st(e,t-1),e}function yt(t,e=gt(t.length),n=T){const i=t.length,s=i-e.length;return s>0&&st(e,s),a=>{let r=0;for(;r<i-2&&!(a<e[r+1]);r++);let o=et(0,1,X(e[r],e[r+1],a));return o=mt(n,r)(o),nt(t[r],t[r+1],o)}}const at=t=>Array.isArray(t)&&q(t[0]),B=t=>typeof t=="object"&&!!t.createAnimation,O=t=>typeof t=="function",vt=t=>typeof t=="string",F={ms:t=>t*1e3,s:t=>t/1e3},rt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Tt=1e-7,At=12;function bt(t,e,n,i,s){let a,r,o=0;do r=e+(n-e)/2,a=rt(r,i,s)-t,a>0?n=r:e=r;while(Math.abs(a)>Tt&&++o<At);return r}function R(t,e,n,i){if(t===e&&n===i)return T;const s=a=>bt(a,0,1,t,n);return a=>a===0||a===1?a:rt(s(a),e,i)}const St=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,s=e==="end"?Math.floor(i):Math.ceil(i);return et(0,1,s/t)},H={ease:R(.25,.1,.25,1),"ease-in":R(.42,0,1,1),"ease-in-out":R(.42,0,.58,1),"ease-out":R(0,0,.58,1)},wt=/\((.*?)\)/;function J(t){if(O(t))return t;if(at(t))return R(...t);if(H[t])return H[t];if(t.startsWith("steps")){const e=wt.exec(t);if(e){const n=e[1].split(",");return St(parseFloat(n[0]),n[1].trim())}}return T}class ot{constructor(e,n=[0,1],{easing:i,duration:s=p.duration,delay:a=p.delay,endDelay:r=p.endDelay,repeat:o=p.repeat,offset:f,direction:g="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=T,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,l)=>{this.resolve=h,this.reject=l}),i=i||p.easing,B(i)){const h=i.createAnimation(n);i=h.easing,n=h.keyframes||n,s=h.duration||s}this.repeat=o,this.easing=E(i)?T:J(i),this.updateDuration(s);const A=yt(n,f,E(i)?i.map(J):T);this.tick=h=>{var l;a=a;let d=0;this.pauseTime!==void 0?d=this.pauseTime:d=(h-this.startTime)*this.rate,this.t=d,d/=1e3,d=Math.max(d-a,0),this.playState==="finished"&&this.pauseTime===void 0&&(d=this.totalDuration);const x=d/this.duration;let D=Math.floor(x),y=x%1;!y&&x>=1&&(y=1),y===1&&D--;const V=D%2;(g==="reverse"||g==="alternate"&&V||g==="alternate-reverse"&&!V)&&(y=1-y);const P=d>=this.totalDuration?1:Math.min(y,1),S=A(this.easing(P));e(S),this.pauseTime===void 0&&(this.playState==="finished"||d>=this.totalDuration+r)?(this.playState="finished",(l=this.resolve)===null||l===void 0||l.call(this,S)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class Et{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const C=new WeakMap;function ct(t){return C.has(t)||C.set(t,{transforms:[],values:new Map}),C.get(t)}function Ot(t,e){return t.has(e)||t.set(e,new Et),t.get(e)}const xt=["","X","Y","Z"],Dt=["translate","scale","rotate","skew"],U={x:"translateX",y:"translateY",z:"translateZ"},Q={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Pt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:Q,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:T},skew:Q},I=new Map,Z=t=>`--motion-${t}`,z=["x","y","z"];Dt.forEach(t=>{xt.forEach(e=>{z.push(t+e),I.set(Z(t+e),Pt[t])})});const Mt=(t,e)=>z.indexOf(t)-z.indexOf(e),Rt=new Set(z),lt=t=>Rt.has(t),Ft=(t,e)=>{U[e]&&(e=U[e]);const{transforms:n}=ct(t);dt(n,e),t.style.transform=It(n)},It=t=>t.sort(Mt).reduce(Vt,"").trim(),Vt=(t,e)=>`${t} ${e}(var(${Z(e)}))`,K=t=>t.startsWith("--"),Y=new Set;function jt(t){if(!Y.has(t)){Y.add(t);try{const{syntax:e,initialValue:n}=I.has(t)?I.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const L=(t,e)=>document.createElement("div").animate(t,e),k={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{L({opacity:[1]})}catch{return!1}return!0},finished:()=>!!L({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{L({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},N={},w={};for(const t in k)w[t]=()=>(N[t]===void 0&&(N[t]=k[t]()),N[t]);const _t=.015,$t=(t,e)=>{let n="";const i=Math.round(e/_t);for(let s=0;s<i;s++)n+=t(X(0,i-1,s))+", ";return n.substring(0,n.length-2)},tt=(t,e)=>O(t)?w.linearEasing()?`linear(${$t(t,e)})`:p.easing:at(t)?qt(t):t,qt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;function Ut(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const zt=t=>Array.isArray(t)?t:[t];function W(t){return U[t]&&(t=U[t]),lt(t)?Z(t):t}const $={get:(t,e)=>{e=W(e);let n=K(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const i=I.get(e);i&&(n=i.initialValue)}return n},set:(t,e,n)=>{e=W(e),K(e)?t.style.setProperty(e,n):t.style[e]=n}};function ut(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function Ct(t,e){var n;let i=(e==null?void 0:e.toDefaultUnit)||T;const s=t[t.length-1];if(vt(s)){const a=((n=s.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";a&&(i=r=>r+a)}return i}function Lt(){return window.__MOTION_DEV_TOOLS_RECORD}function Nt(t,e,n,i={},s){const a=Lt(),r=i.record!==!1&&a;let o,{duration:f=p.duration,delay:g=p.delay,endDelay:A=p.endDelay,repeat:h=p.repeat,easing:l=p.easing,persist:d=!1,direction:x,offset:D,allowWebkitAcceleration:y=!1}=i;const V=ct(t),P=lt(e);let S=w.waapi();P&&Ft(t,e);const m=W(e),j=Ot(V.values,m),v=I.get(m);return ut(j.animation,!(B(l)&&j.generator)&&i.record!==!1),()=>{const _=()=>{var c,M;return(M=(c=$.get(t,m))!==null&&c!==void 0?c:v==null?void 0:v.initialValue)!==null&&M!==void 0?M:0};let u=Ut(zt(n),_);const G=Ct(u,v);if(B(l)){const c=l.createAnimation(u,e!=="opacity",_,m,j);l=c.easing,u=c.keyframes||u,f=c.duration||f}if(K(m)&&(w.cssRegisterProperty()?jt(m):S=!1),P&&!w.linearEasing()&&(O(l)||E(l)&&l.some(O))&&(S=!1),S){v&&(u=u.map(b=>q(b)?v.toDefaultUnit(b):b)),u.length===1&&(!w.partialKeyframes()||r)&&u.unshift(_());const c={delay:F.ms(g),duration:F.ms(f),endDelay:F.ms(A),easing:E(l)?void 0:tt(l,f),direction:x,iterations:h+1,fill:"both"};o=t.animate({[m]:u,offset:D,easing:E(l)?l.map(b=>tt(b,f)):void 0},c),o.finished||(o.finished=new Promise((b,ht)=>{o.onfinish=b,o.oncancel=ht}));const M=u[u.length-1];o.finished.then(()=>{d||($.set(t,m,M),o.cancel())}).catch(it),y||(o.playbackRate=1.000001)}else if(s&&P)u=u.map(c=>typeof c=="string"?parseFloat(c):c),u.length===1&&u.unshift(parseFloat(_())),o=new s(c=>{$.set(t,m,G?G(c):c)},u,Object.assign(Object.assign({},i),{duration:f,easing:l}));else{const c=u[u.length-1];$.set(t,m,v&&q(c)?v.toDefaultUnit(c):c)}return r&&a(t,e,u,{duration:f,delay:g,easing:l,repeat:h,offset:D},"motion-one"),j.setAnimation(o),o}}const Bt=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function Kt(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Wt=t=>t(),ft=(t,e,n=p.duration)=>new Proxy({animations:t.map(Wt).filter(Boolean),duration:n,options:e},Zt),Xt=t=>t.animations[0],Zt={get:(t,e)=>{const n=Xt(t);switch(e){case"duration":return t.duration;case"currentTime":return F.s((n==null?void 0:n[e])||0);case"playbackRate":case"playState":return n==null?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(Gt)).catch(it)),t.finished;case"stop":return()=>{t.animations.forEach(i=>ut(i))};case"forEachNative":return i=>{t.animations.forEach(s=>i(s,t))};default:return typeof(n==null?void 0:n[e])>"u"?void 0:()=>t.animations.forEach(i=>i[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=F.ms(n);case"currentTime":case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},Gt=t=>t.finished;function Ht(t,e,n){return O(t)?t(e,n):t}function Jt(t){return function(n,i,s={}){n=Kt(n);const a=n.length,r=[];for(let o=0;o<a;o++){const f=n[o];for(const g in i){const A=Bt(s,g);A.delay=Ht(A.delay,o,a);const h=Nt(f,g,i[g],A,t);r.push(h)}}return ft(r,s,s.duration)}}const Qt=Jt(ot);function Yt(t,e={}){return ft([()=>{const n=new ot(t,[0,1],e);return n.finished.catch(()=>{}),n}],e,e.duration)}function te(t,e,n){return(O(t)?Yt:Qt)(t,e,n)}export{ot as A,I as a,W as b,vt as c,te as d,mt as e,Nt as f,Ct as g,Kt as h,q as i,Bt as j,zt as k,p as l,nt as m,T as n,B as o,Ht as p,gt as q,kt as r,st as s,F as t,X as u,ft as w};