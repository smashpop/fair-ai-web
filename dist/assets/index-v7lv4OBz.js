import{s as w,a as V}from"./index-ujCqkgXH.js";import{e as p,i as c,h as g,y as b,o as k,k as C,n as S,p as B}from"./vuetify-fvTuGKAk.js";import{l as u,B as v,C as e,Q as t,a6 as r,v as d,r as n,w as $,p as h,ab as z,F,y}from"./@vue-L2QGslVC.js";/* empty css             */import"./vue-router-qEIoPK5X.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-2Oa0RDq6.js";import"./pinia-xePs6rUv.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-5Xi2bfpa.js";const L={class:"text-h5 mb-4"},D={class:"text-medium-emphasis text-body-2"},I={class:"text-body-1 mb-4"},N={__name:"CurriculumCard",props:{organization:{type:String,default:null},url:{type:String,default:null},description:{type:String,default:null}},setup(o){const a=o;return(l,_)=>(u(),v(C,{class:"pa-2",flat:""},{default:e(()=>[t(p,null,{default:e(()=>[t(c,{cols:"12",md:"2"}),t(c,{cols:"12",md:"7"},{default:e(()=>[t(g,null,{default:e(()=>[r("h1",L,d(a.organization),1),r("div",D,d(a.description),1),r("h1",I,d(a.url),1)]),_:1})]),_:1}),t(b),t(c,{cols:"12",md:"3"},{default:e(()=>[t(k,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function P(o){return w({url:"/ai-curriculum-page",method:"post",data:o})}const j=r("div",{class:"py-1"},null,-1),A={__name:"CurriculumView",setup(o){const a=n([]),l=n(!1),_=n(0),m=n({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function f(){l.value=!0,await P(m.value).then(s=>{a.value=s.data.items,_.value=s.data.total}).catch(s=>{console.log(s)}),l.value=!1}return f(),$(m,s=>{f()},{deep:!0}),(s,Q)=>(u(!0),h(F,null,z(a.value,(i,x)=>(u(),h("div",{key:x},[t(y(N),{organization:i.organization,url:i.url,description:i.description?i.description.substring(0,250):null},null,8,["organization","url","description"]),j]))),128))}},E={class:"mx-16"},O=r("div",{class:"text-h2 font-weight-black text-black my-5"},"교육커리큘럼",-1),Y={__name:"index",setup(o){return(a,l)=>(u(),v(g,{fluid:"",class:"bg-white"},{default:e(()=>[r("div",E,[t(S,{class:"text-center mx-auto px-4",height:"80","max-width":"800",width:"100%"},{default:e(()=>[O]),_:1}),t(p,{class:"my-4",justify:"center"},{default:e(()=>[t(y(V))]),_:1}),t(B,{class:"my-4 border-opacity-100",thickness:3}),t(p,null,{default:e(()=>[t(c,{cols:"12",md:"10"},{default:e(()=>[t(A)]),_:1})]),_:1})])]),_:1}))}};export{Y as default};
