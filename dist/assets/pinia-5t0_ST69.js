import{e as F,r as V,m as H,w as Y,a as Z,i as p,b as B,t as G,c as $,g as A,o as T,n as tt,f as et,j as st,k as nt}from"./@vue-L5kv75rD.js";const ot=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let D;const E=t=>D=t; const J=Symbol();function R(t){return t&&typeof t==="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!=="function"}let k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function ht(){const t=F(!0); const o=t.run(()=>V({}));const s=[]; let e=[];const r=H({install(u){E(r),r._a=u,u.provide(J,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const N=()=>{};function O(t,o,s,e=N){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&A()&&T(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function I(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s]; const r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!p(e)&&!B(e)?t[s]=I(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!R(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function at(t){return!!(p(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o; const a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const y=st(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((m,_)=>(m[_]=H(nt(()=>{E(s);const d=s._s.get(t);return f[_].call(d,d)})),m),{}))}return g=q(t,b,o,s,e,!0),g}function q(t,o,s={},e,r,u){let f;const a=v({actions:{}},s); const g={deep:!0};let b; let y; let m=[]; let _=[]; let d;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let L;function W(c){let n;b=y=!1,typeof c==="function"?(c(e.state.value[t]),n={type:k.patchFunction,storeId:t,events:d}):(I(e.state.value[t],c),n={type:k.patchObject,payload:c,storeId:t,events:d});const h=L=Symbol();tt().then(()=>{L===h&&(b=!0)}),y=!0,P(m,n,e.state.value[t])}const z=u?function(){const{state:n}=s; const h=n?n():{};this.$patch(S=>{v(S,h)})}:N;function K(){f.stop(),m=[],_=[],e._s.delete(t)}function M(c,n){return function(){E(e);const h=Array.from(arguments); const S=[]; const x=[];function U(i){S.push(i)}function X(i){x.push(i)}P(_,{args:h,name:c,store:l,after:U,onError:X});let C;try{C=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(x,i),i}return C instanceof Promise?C.then(i=>(P(S,i),i)).catch(i=>(P(x,i),Promise.reject(i))):(P(S,C),C)}}const Q={_p:e,$id:t,$onAction:O.bind(null,_),$patch:W,$reset:z,$subscribe(c,n={}){const h=O(m,c,n.detached,()=>S()); const S=f.run(()=>Y(()=>e.state.value[t],x=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:k.direct,events:d},x)},v({},g,n)));return h},$dispose:K}; const l=Z(Q);e._s.set(t,l);const w=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in w){const n=w[c];if(p(n)&&!at(n)||B(n))u||(j&&ut(n)&&(p(n)?n.value=j[c]:I(n,j[c])),e.state.value[t][c]=n);else if(typeof n==="function"){const h=M(c,n);w[c]=h,a.actions[c]=n}}return v(l,w),v(G(l),w),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function bt(t,o,s){let e,r;const u=typeof o==="function";typeof t==="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,g){const b=et();return a=a||(b?$(J,null):null),a&&E(a),a=D,a._s.has(e)||(u?q(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{ht as c,bt as d};
