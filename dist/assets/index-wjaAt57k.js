import{a as p,b as y}from"./index-1jSlFH5L.js";import{k as w,V,l as b,m as B,n as C,d as k}from"./vuetify-knQmhA5-.js";import{r as l,w as A,a2 as L,l as r,a3 as c,a4 as a,a1 as e,I as s,u as m,p as N,F as D,a7 as F,v as f,y as d}from"./@vue-6h1loiwv.js";/* empty css             */import"./axios-L6U4YIEh.js";import"./vue-router-tZIpevkY.js";import"./pinia-uIDokcZ3.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-cD8bNZ3_.js";const I={class:"d-flex justify-space-between"},T={class:"d-flex justify-space-between align-center"},$={class:"d-flex align-baseline flex-1"},j=e("div",{class:"bg-info pa-1 rounded-circle me-2"},null,-1),z={class:"text-body-2 font-weight-medium"},P={class:"text-body-2"},S={__name:"NoticeView",setup(h){const n=l([]),i=l(!1),v=l(0),_=l({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc"});async function u(){i.value=!0,await y(_.value).then(t=>{n.value=t.data.items,v.value=t.data.total}).catch(t=>{console.log(t)}),i.value=!1}return u(),A(_,t=>{u()},{deep:!0}),(t,q)=>{const x=L("BaseCard");return r(),c(x,null,{default:a(()=>[e("div",I,[s(w,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:a(()=>[m(" 공지사항 ")]),_:1}),s(V,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:a(()=>[m(" View All ")]),_:1})]),s(b,{class:"mb-2"}),s(B,{density:"compact"},{default:a(()=>[(r(!0),N(D,null,F(n.value,(o,g)=>(r(),c(C,{key:g},{default:a(()=>[e("div",T,[e("div",$,[j,e("div",null,[e("div",z,f(o.title),1)])]),e("div",P,f(o.updatedAt?d(p)(o.updatedAt):d(p)(o.createdAt)),1)])]),_:2},1024))),128))]),_:1})]),_:1})}}},E=e("strong",{class:"text-h5 font-weight-bold"},"공지사항",-1),O=e("div",{class:"py-1"},null,-1),Y={__name:"index",setup(h){return(n,i)=>(r(),c(k,null,{default:a(()=>[E,O,s(d(S))]),_:1}))}};export{Y as default};
