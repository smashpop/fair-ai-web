import{s as w,a as V}from"./index-8CQYiO2Z.js";import{e as m,i,h as y,y as b,o as k,k as S,n as $,p as B}from"./vuetify-xWM4wXMg.js";import{l as c,a1 as g,a2 as t,I as e,a3 as l,v as d,r as u,w as C,p as h,a9 as F,F as I,y as v}from"./@vue-5qbJIjPN.js";/* empty css             */import"./vue-router-kO06wcas.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-JNjw9D9N.js";import"./pinia-vSUcXG4D.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-9SxCCbqx.js";const L={class:"text-h5 mb-4"},D={class:"text-medium-emphasis text-body-2"},G={class:"text-body-1 mb-4"},N={__name:"GuidelineCard",props:{name:{type:String,default:null},url:{type:String,default:null},summary:{type:String,default:null}},setup(n){const a=n;return(o,_)=>(c(),g(S,{class:"pa-2",flat:""},{default:t(()=>[e(m,null,{default:t(()=>[e(i,{cols:"12",md:"2"}),e(i,{cols:"12",md:"7"},{default:t(()=>[e(y,null,{default:t(()=>[l("h1",L,d(a.name),1),l("div",D,d(a.summary),1),l("h1",G,d(a.url),1)]),_:1})]),_:1}),e(b),e(i,{cols:"12",md:"3"},{default:t(()=>[e(k,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function P(n){return w({url:"/ai-guideline-page",method:"post",data:n})}const j=l("div",{class:"py-1"},null,-1),z={__name:"GuidelineView",setup(n){const a=u([]),o=u(!1),_=u(0),p=u({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function f(){o.value=!0,await P(p.value).then(s=>{a.value=s.data.items,_.value=s.data.total}).catch(s=>{console.log(s)}),o.value=!1}return f(),C(p,s=>{f()},{deep:!0}),(s,O)=>(c(!0),h(I,null,F(a.value,(r,x)=>(c(),h("div",{key:x},[e(v(N),{name:r.nation?r.nation.name:r.organization.name,url:r.url,summary:r.summary?r.summary.substring(0,250):null},null,8,["name","url","summary"]),j]))),128))}},A={class:"mx-16"},E=l("div",{class:"text-h2 font-weight-black text-black my-5"},"가이드라인",-1),Y={__name:"index",setup(n){return(a,o)=>(c(),g(y,{fluid:"",class:"bg-white"},{default:t(()=>[l("div",A,[e($,{class:"text-center mx-auto px-4",height:"80","max-width":"800",width:"100%"},{default:t(()=>[E]),_:1}),e(m,{class:"my-4",justify:"center"},{default:t(()=>[e(v(V))]),_:1}),e(B,{class:"my-4 border-opacity-100",thickness:3}),e(m,null,{default:t(()=>[e(i,{cols:"12",md:"10"},{default:t(()=>[e(z)]),_:1})]),_:1})])]),_:1}))}};export{Y as default};
