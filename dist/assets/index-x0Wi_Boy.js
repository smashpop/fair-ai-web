import{k as h,l as u,j as g,n as y,o as w,m as v}from"./vuetify-KkwUcGrN.js";import{O as i,V as b,W as e,m as t,S as r,$ as d,b as c,w as V,P as f,_ as S,F as k,u as B}from"./@vue-sWHR_rYu.js";import{s as C}from"./index-Fu5DyKcA.js";/* empty css             */import"./axios-L6U4YIEh.js";import"./vue-router-q8UsfMt9.js";const $={class:"text-h5 mb-4"},F={class:"text-medium-emphasis text-body-2"},L={class:"text-body-1 mb-4"},P={__name:"ReportCard",props:{title:{type:String,default:null},url:{type:String,default:null},abstract:{type:String,default:null}},setup(l){const a=l;return(o,_)=>(i(),b(v,{class:"pa-2",flat:""},{default:e(()=>[t(h,null,{default:e(()=>[t(u,{cols:"12",md:"7"},{default:e(()=>[t(g,null,{default:e(()=>[r("h1",$,d(a.title),1),r("div",F,d(a.abstract),1),r("h1",L,d(a.url),1)]),_:1})]),_:1}),t(y),t(u,{cols:"12",md:"3"},{default:e(()=>[t(w,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function R(l){return C({url:"/ai-report-page",method:"post",data:l})}const I=r("div",{class:"py-1"},null,-1),N={__name:"ReportView",setup(l){const a=c([]),o=c(!1),_=c(0),p=c({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function m(){o.value=!0,await R(p.value).then(s=>{a.value=s.data.items,_.value=s.data.total}).catch(s=>{console.log(s)}),o.value=!1}return m(),V(p,s=>{m()},{deep:!0}),(s,j)=>(i(!0),f(k,null,S(a.value,(n,x)=>(i(),f("div",{key:x},[t(B(P),{title:n.title,url:n.url,abstract:n.abstract?n.abstract.substring(0,250):null},null,8,["title","url","abstract"]),I]))),128))}},O=r("strong",{class:"text-h5 font-weight-bold"},"보고서",-1),z={__name:"index",setup(l){return(a,o)=>(i(),b(g,null,{default:e(()=>[O,t(h,null,{default:e(()=>[t(u,{cols:"12",md:"2"},{default:e(()=>[t(v,{title:"Filter section",color:"white",height:"700px",class:"pa-2",flat:""})]),_:1}),t(u,{cols:"12",md:"10"},{default:e(()=>[t(N)]),_:1})]),_:1})]),_:1}))}};export{z as default};
