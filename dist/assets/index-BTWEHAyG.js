import{k as y,l as p,j as h,n as V,o as w,m as k}from"./vuetify-KkwUcGrN.js";import{O as r,V as v,W as a,m as t,S as n,$ as m,b as o,w as S,P as f,_ as $,F as b,u as g}from"./@vue-sWHR_rYu.js";import{c as B}from"./index-xfwykSDA.js";/* empty css             */import"./axios-L6U4YIEh.js";import"./vue-router-q8UsfMt9.js";const C={class:"text-h5 mb-4"},E={class:"text-medium-emphasis text-body-2"},F={__name:"EventCard",props:{title:{type:String,default:null},text:{type:String,default:null}},setup(c){const e=c;return(l,i)=>(r(),v(k,{class:"pa-2",flat:""},{default:a(()=>[t(y,null,{default:a(()=>[t(p,{cols:"12",md:"7"},{default:a(()=>[t(h,null,{default:a(()=>[n("h1",C,m(e.title),1),n("div",E,m(e.text),1)]),_:1})]),_:1}),t(V),t(p,{cols:"12",md:"3"},{default:a(()=>[t(w,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}},L=n("div",{class:"py-1"},null,-1),N={__name:"EventView",setup(c){const e=o([]),l=o(!1),i=o(0),d=o({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function _(){l.value=!0,await B(d.value).then(s=>{e.value=s.data.items,i.value=s.data.total}).catch(s=>{console.log(s)}),l.value=!1}return _(),S(d,s=>{_()},{deep:!0}),(s,O)=>(r(!0),f(b,null,$(e.value,(u,x)=>(r(),f("div",{key:x},[t(g(F),{title:u.eventName,text:u.contents?u.contents.substring(0,250):null},null,8,["title","text"]),L]))),128))}},P=n("strong",{class:"text-h5 font-weight-bold"},"관련행사",-1),I=n("div",{class:"py-1"},null,-1),q={__name:"index",setup(c){return(e,l)=>(r(),v(h,null,{default:a(()=>[P,I,t(g(N))]),_:1}))}};export{q as default};
