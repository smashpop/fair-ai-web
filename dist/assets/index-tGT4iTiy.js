import{f as y,g as m,e as h,r as x,q as V,h as w}from"./vuetify-PPqK8pek.js";import{N as c,U as g,V as s,m as t,R as r,W as u,b as i,w as b,O as f,X as C,F as S,u as k}from"./@vue-6eiOjXGE.js";import{s as z}from"./index-jcjGOSuj.js";/* empty css             */import"./axios-L6U4YIEh.js";import"./vue-router-GNuAVlfW.js";const B={class:"text-h5 mb-4"},$={class:"text-medium-emphasis text-body-2"},F={class:"text-body-1 mb-4"},L={__name:"CurriculumCard",props:{organization:{type:String,default:null},url:{type:String,default:null},description:{type:String,default:null}},setup(o){const e=o;return(n,d)=>(c(),g(w,{class:"pa-2",flat:""},{default:s(()=>[t(y,null,{default:s(()=>[t(m,{cols:"12",md:"7"},{default:s(()=>[t(h,null,{default:s(()=>[r("h1",B,u(e.organization),1),r("div",$,u(e.description),1),r("h1",F,u(e.url),1)]),_:1})]),_:1}),t(x),t(m,{cols:"12",md:"3"},{default:s(()=>[t(V,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function N(o){return z({url:"/ai-curriculum-page",method:"post",data:o})}const I=r("div",{class:"py-1"},null,-1),O={__name:"CurriculumView",setup(o){const e=i([]),n=i(!1),d=i(0),_=i({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function p(){n.value=!0,await N(_.value).then(a=>{e.value=a.data.items,d.value=a.data.total}).catch(a=>{console.log(a)}),n.value=!1}return p(),b(_,a=>{p()},{deep:!0}),(a,q)=>(c(!0),f(S,null,C(e.value,(l,v)=>(c(),f("div",{key:v},[t(k(L),{organization:l.organization,url:l.url,description:l.description?l.description.substring(0,250):null},null,8,["organization","url","description"]),I]))),128))}},P=r("strong",{class:"text-h5 font-weight-bold"},"교육 커리큘럼",-1),R=r("div",{class:"py-1"},null,-1),X={__name:"index",setup(o){return(e,n)=>(c(),g(h,null,{default:s(()=>[P,R,t(O)]),_:1}))}};export{X as default};
