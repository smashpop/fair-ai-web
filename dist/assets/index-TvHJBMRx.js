import{u as v,J as y,K as g,n as w,t as V,h as b,p as k}from"./vuetify-fvTuGKAk.js";import{l,B as m,C as s,Q as e,a6 as c,v as d,r as o,w as q,p as _,ab as B,F as C,y as f}from"./@vue-L2QGslVC.js";import{s as F}from"./index-ujCqkgXH.js";/* empty css             */import"./vue-router-qEIoPK5X.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-2Oa0RDq6.js";import"./pinia-xePs6rUv.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-5Xi2bfpa.js";const P={class:"my-4 font-weight-bold"},E=["textContent"],$={__name:"FaqCard",props:{faq:{type:Object,default:null}},setup(n){const t=n;return(r,i)=>(l(),m(V,null,{default:s(()=>[e(v,null,{default:s(()=>[e(y,null,{default:s(()=>[c("div",P,d(t.faq.title),1)]),_:1}),e(g,null,{default:s(()=>[e(w,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"300"},{default:s(()=>[c("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:d(t.faq.contents)},null,8,E)]),_:1})]),_:1})]),_:1})]),_:1}))}};function L(n){return F({url:"/ai-faq-page",method:"post",data:n})}const S=c("div",{class:"py-2"},null,-1),T={__name:"FaqView",setup(n){const t=o([]),r=o(!1),i=o(0),u=o({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function p(){r.value=!0,await L(u.value).then(a=>{t.value=a.data.items,i.value=a.data.total}).catch(a=>{console.log(a)}),r.value=!1}return p(),q(u,a=>{p()},{deep:!0}),(a,D)=>(l(!0),_(C,null,B(t.value,(h,x)=>(l(),_("div",{key:x},[e(f($),{faq:h},null,8,["faq"]),S]))),128))}},A=c("div",{class:"text-center text-h2 font-weight-black text-black mx-16 my-5"},"FAQ",-1),R={__name:"index",setup(n){return(t,r)=>(l(),m(b,{fluid:"",class:"bg-white h-screen"},{default:s(()=>[A,e(k,{class:"my-4 border-opacity-100",thickness:3}),e(f(T))]),_:1}))}};export{R as default};