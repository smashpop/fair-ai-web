import{e as v,f as p,d as h,p as x,l as w,h as V}from"./vuetify-DnXmRN3y.js";import{l as c,a0 as y,a1 as r,I as e,a2 as n,v as i,r as u,w as b,p as f,a8 as S,F as k,y as B}from"./@vue-L5kv75rD.js";import{s as C}from"./index-xVjVeJK4.js";/* empty css             */import"./vue-router-87F3wI6o.js";import"./axios-L6U4YIEh.js";import"./pinia-5t0_ST69.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-vW_7OF4G.js";const $={class:"text-h5 mb-4"},F={class:"text-medium-emphasis text-body-2"},I={class:"text-body-1 mb-4"},L={__name:"GuidelineCard",props:{name:{type:String,default:null},url:{type:String,default:null},summary:{type:String,default:null}},setup(l){const t=l;return(o,d)=>(c(),y(V,{class:"pa-2",flat:""},{default:r(()=>[e(v,null,{default:r(()=>[e(p,{cols:"12",md:"7"},{default:r(()=>[e(h,null,{default:r(()=>[n("h1",$,i(t.name),1),n("div",F,i(t.summary),1),n("h1",I,i(t.url),1)]),_:1})]),_:1}),e(x),e(p,{cols:"12",md:"3"},{default:r(()=>[e(w,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function G(l){return C({url:"/ai-guideline-page",method:"post",data:l})}const N=n("div",{class:"py-1"},null,-1),P={__name:"GuidelineView",setup(l){const t=u([]),o=u(!1),d=u(0),m=u({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function _(){o.value=!0,await G(m.value).then(a=>{t.value=a.data.items,d.value=a.data.total}).catch(a=>{console.log(a)}),o.value=!1}return _(),b(m,a=>{_()},{deep:!0}),(a,D)=>(c(!0),f(k,null,S(t.value,(s,g)=>(c(),f("div",{key:g},[e(B(L),{name:s.nation?s.nation.name:s.organization.name,url:s.url,summary:s.summary?s.summary.substring(0,250):null},null,8,["name","url","summary"]),N]))),128))}},z=n("strong",{class:"text-h5 font-weight-bold"},"가이드라인",-1),A=n("div",{class:"py-1"},null,-1),Q={__name:"index",setup(l){return(t,o)=>(c(),y(h,null,{default:r(()=>[z,A,e(P)]),_:1}))}};export{Q as default};
