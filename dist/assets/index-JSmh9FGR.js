import{u as g,K as y,L as w,m as V,t as b,p as _,h as k}from"./vuetify-N6sFEKsC.js";import{l,p as f,E as s,R as e,a7 as i,z as d,r as o,w as q,u as m,ab as B,F as E,B as h}from"./@vue-4VtEq8s7.js";import{s as F}from"./index-U1xtgbjX.js";/* empty css             */import"./vue-router-izlzWlJ4.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-pueFlEgn.js";import"./pinia-2JqXyxpT.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-q7weqA0g.js";import"./vue-country-flag-next-USwdQ1vq.js";const P={class:"text-18 font-weight-medium"},C=["textContent"],L={__name:"FaqCard",props:{faq:{type:Object,default:null}},setup(n){const t=n;return(r,c)=>(l(),f(b,null,{default:s(()=>[e(g,{elevation:"0"},{default:s(()=>[e(y,null,{default:s(()=>[i("div",P,d(t.faq.title),1)]),_:1}),e(w,null,{default:s(()=>[e(V,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"300"},{default:s(()=>[i("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:d(t.faq.contents)},null,8,C)]),_:1})]),_:1})]),_:1})]),_:1}))}};function S(n){return F({url:"/ai-faq-page",method:"post",data:n})}const T={__name:"FaqView",setup(n){const t=o([]),r=o(!1),c=o(0),u=o({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function p(){r.value=!0,await S(u.value).then(a=>{t.value=a.data.items,c.value=a.data.total}).catch(a=>{console.log(a)}),r.value=!1}return p(),q(u,a=>{p()},{deep:!0}),(a,A)=>(l(!0),m(E,null,B(t.value,(x,v)=>(l(),m("div",{key:v},[e(h(L),{faq:x},null,8,["faq"]),e(_,{class:"my-2"})]))),128))}},$=i("div",{class:"text-center text-h2 font-weight-black text-black mx-16 my-5"},"FAQ",-1),M={__name:"index",setup(n){return(t,r)=>(l(),f(k,{fluid:"",class:"bg-white h-screen"},{default:s(()=>[$,e(_,{class:"my-4 border-opacity-100",thickness:3}),e(h(T))]),_:1}))}};export{M as default};