import{k as v,l as p,j as h,n as x,o as V,m as w}from"./vuetify-KkwUcGrN.js";import{O as c,V as g,W as n,m as e,S as r,$ as i,b as u,w as b,P as f,_ as S,F as k,u as $}from"./@vue-sWHR_rYu.js";import{s as B}from"./index-Fu5DyKcA.js";/* empty css             */import"./axios-L6U4YIEh.js";import"./vue-router-q8UsfMt9.js";const C={class:"text-h5 mb-4"},F={class:"text-medium-emphasis text-body-2"},L={class:"text-body-1 mb-4"},P={__name:"GuidelineCard",props:{name:{type:String,default:null},url:{type:String,default:null},summary:{type:String,default:null}},setup(l){const t=l;return(o,d)=>(c(),g(w,{class:"pa-2",flat:""},{default:n(()=>[e(v,null,{default:n(()=>[e(p,{cols:"12",md:"7"},{default:n(()=>[e(h,null,{default:n(()=>[r("h1",C,i(t.name),1),r("div",F,i(t.summary),1),r("h1",L,i(t.url),1)]),_:1})]),_:1}),e(x),e(p,{cols:"12",md:"3"},{default:n(()=>[e(V,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function G(l){return B({url:"/ai-guideline-page",method:"post",data:l})}const I=r("div",{class:"py-1"},null,-1),N={__name:"GuidelineView",setup(l){const t=u([]),o=u(!1),d=u(0),m=u({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function _(){o.value=!0,await G(m.value).then(a=>{t.value=a.data.items,d.value=a.data.total}).catch(a=>{console.log(a)}),o.value=!1}return _(),b(m,a=>{_()},{deep:!0}),(a,z)=>(c(!0),f(k,null,S(t.value,(s,y)=>(c(),f("div",{key:y},[e($(P),{name:s.nation?s.nation.name:s.organization.name,url:s.url,summary:s.summary?s.summary.substring(0,250):null},null,8,["name","url","summary"]),I]))),128))}},O=r("strong",{class:"text-h5 font-weight-bold"},"가이드라인",-1),j=r("div",{class:"py-1"},null,-1),q={__name:"index",setup(l){return(t,o)=>(c(),g(h,null,{default:n(()=>[O,j,e(N)]),_:1}))}};export{q as default};
