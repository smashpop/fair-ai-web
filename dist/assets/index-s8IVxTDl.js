import{e as y,f as m,d as h,p as x,l as w,h as V}from"./vuetify-DnXmRN3y.js";import{l as c,a0 as g,a1 as s,I as t,a2 as r,v as u,r as i,w as C,p as f,a8 as b,F as S,y as k}from"./@vue-L5kv75rD.js";import{s as z}from"./index-kxoshW2X.js";/* empty css             */import"./vue-router-87F3wI6o.js";import"./axios-L6U4YIEh.js";import"./pinia-5t0_ST69.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-vW_7OF4G.js";const B={class:"text-h5 mb-4"}; const $={class:"text-medium-emphasis text-body-2"}; const F={class:"text-body-1 mb-4"}; const I={__name:"CurriculumCard",props:{organization:{type:String,default:null},url:{type:String,default:null},description:{type:String,default:null}},setup(o){const e=o;return(n,d)=>(c(),g(V,{class:"pa-2",flat:""},{default:s(()=>[t(y,null,{default:s(()=>[t(m,{cols:"12",md:"7"},{default:s(()=>[t(h,null,{default:s(()=>[r("h1",B,u(e.organization),1),r("div",$,u(e.description),1),r("h1",F,u(e.url),1)]),_:1})]),_:1}),t(x),t(m,{cols:"12",md:"3"},{default:s(()=>[t(w,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function L(o){return z({url:"/ai-curriculum-page",method:"post",data:o})}const N=r("div",{class:"py-1"},null,-1); const P={__name:"CurriculumView",setup(o){const e=i([]); const n=i(!1); const d=i(0); const p=i({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function _(){n.value=!0,await L(p.value).then(a=>{e.value=a.data.items,d.value=a.data.total}).catch(a=>{console.log(a)}),n.value=!1}return _(),C(p,a=>{_()},{deep:!0}),(a,E)=>(c(!0),f(S,null,b(e.value,(l,v)=>(c(),f("div",{key:v},[t(k(I),{organization:l.organization,url:l.url,description:l.description?l.description.substring(0,250):null},null,8,["organization","url","description"]),N]))),128))}}; const A=r("strong",{class:"text-h5 font-weight-bold"},"교육 커리큘럼",-1); const D=r("div",{class:"py-1"},null,-1); const Q={__name:"index",setup(o){return(e,n)=>(c(),g(h,null,{default:s(()=>[A,D,t(P)]),_:1}))}};export{Q as default};