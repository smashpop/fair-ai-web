import{e as y,f as p,d as h,p as w,l as V,h as k}from"./vuetify-DnXmRN3y.js";import{l as r,a0 as v,a1 as s,I as t,a2 as l,v as m,r as o,w as B,p as f,a8 as C,F as S,y as g}from"./@vue-L5kv75rD.js";import{c as $}from"./index-kxoshW2X.js";/* empty css             */import"./vue-router-87F3wI6o.js";import"./axios-L6U4YIEh.js";import"./pinia-5t0_ST69.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-vW_7OF4G.js";const b={class:"text-h5 mb-4"}; const E={class:"text-medium-emphasis text-body-2"}; const F={__name:"EventCard",props:{title:{type:String,default:null},text:{type:String,default:null}},setup(c){const e=c;return(n,u)=>(r(),v(k,{class:"pa-2",flat:""},{default:s(()=>[t(y,null,{default:s(()=>[t(p,{cols:"12",md:"7"},{default:s(()=>[t(h,null,{default:s(()=>[l("h1",b,m(e.title),1),l("div",E,m(e.text),1)]),_:1})]),_:1}),t(w),t(p,{cols:"12",md:"3"},{default:s(()=>[t(V,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}}; const I=l("div",{class:"py-1"},null,-1); const L={__name:"EventView",setup(c){const e=o([]); const n=o(!1); const u=o(0); const d=o({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function _(){n.value=!0,await $(d.value).then(a=>{e.value=a.data.items,u.value=a.data.total}).catch(a=>{console.log(a)}),n.value=!1}return _(),B(d,a=>{_()},{deep:!0}),(a,A)=>(r(!0),f(S,null,C(e.value,(i,x)=>(r(),f("div",{key:x},[t(g(F),{title:i.eventName,text:i.contents?i.contents.substring(0,250):null},null,8,["title","text"]),I]))),128))}}; const N=l("strong",{class:"text-h5 font-weight-bold"},"관련행사",-1); const P=l("div",{class:"py-1"},null,-1); const K={__name:"index",setup(c){return(e,n)=>(r(),v(h,null,{default:s(()=>[N,P,t(g(L))]),_:1}))}};export{K as default};
