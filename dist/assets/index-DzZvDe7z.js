import{_ as B}from"./SmallSearchField-dqoSXKJS.js";import{k as C,l as u,p as $,E as e,R as t,B as h,a7 as c,z as p,ab as j,y as S,r as i,w as F,u as d,F as _,ac as I}from"./@vue-BCn4Dycc.js";import{t as L,s as N}from"./index-DD_DxA5p.js";import{e as n,j as g,l as P,i as b,a as U,s as z,B as D,p as y,h as f}from"./vuetify-D8GCVbd5.js";/* empty css             */import"./vue-router-CXp4ErzU.js";import"./axios-Cm0UX6qg.js";import"./vue3-promise-dialog-Bil_GCmA.js";import"./pinia-DUAE3AJV.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./vue-detect-browser-D3UAd87C.js";import"./vue-json-excel3-CIG-qtOt.js";import"./vue-country-flag-next-Byqo9PGL.js";const E={class:"text-20 text-black font-weight-semi-bold"},O={class:"text-16 text-color-555"},R={__name:"CurriculumCard",props:{item:{type:Object,default:null}},setup(r){const a=r,l=C(()=>a.item.description?a.item.description.substring(0,500):null);return(x,o)=>(u(),$(z,{flat:""},{default:e(()=>[t(n,{"no-gutters":""},{default:e(()=>[t(g,{style:{"max-width":"210px"}},{default:e(()=>[t(P,{src:a.item.imageUrl?a.item.imageUrl:h(L),width:"210",height:"116",class:"rounded",cover:""},null,8,["src"])]),_:1}),t(g,{class:"pl-7"},{default:e(()=>[t(b,{fluid:"",class:"pa-0"},{default:e(()=>[t(n,{"no-gutters":""},{default:e(()=>[c("div",E,p(a.item.organization),1)]),_:1}),t(n,{"no-gutters":"",class:"mt-3"},{default:e(()=>[c("div",O,p(l.value),1)]),_:1}),t(n,{"no-gutters":"",class:"mt-3"},{default:e(()=>[c("span",null,[t(U,{class:"btn-plain-custom text-color-555 text-body-1",href:a.item.url,rel:"noopener noreferrer",target:"_blank",variant:"plain",onClick:o[0]||(o[0]=j(()=>{},["stop"]))},{default:e(()=>[S(p(a.item.url),1)]),_:1},8,["href"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};function T(r){return N({url:"/ai-curriculum-page",method:"post",data:r})}const A={class:"text-center"},M={__name:"CurriculumView",setup(r){const a=i([]),l=i(!1),x=i(0),o=i({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null}),v=i(1);async function w(){l.value=!0,await T(o.value).then(s=>{a.value=s.data.items,x.value=s.data.total}).catch(s=>{console.log(s)}),l.value=!1}return w(),F(o,s=>{w()},{deep:!0}),(s,V)=>(u(),d(_,null,[(u(!0),d(_,null,I(a.value,(m,k)=>(u(),d("div",{key:k},[t(h(R),{item:m},null,8,["item"]),t(y,{class:"my-8"})]))),128)),c("div",A,[t(D,{modelValue:v.value,"onUpdate:modelValue":V[0]||(V[0]=m=>v.value=m),class:"fair-pg",rounded:"circle",length:10,"total-visible":10},null,8,["modelValue"])])],64))}},q=c("p",{class:"text-68 font-weight-bold text-black"},"전공/커리큘럼",-1),rt={__name:"index",setup(r){return(a,l)=>(u(),d(_,null,[t(f,{class:"mx-auto d-flex justify-center align-end",width:"1360",height:"180"},{default:e(()=>[q]),_:1}),t(f,{class:"bo-sch mt-3 d-flex justify-center mx-auto",width:"1360"},{default:e(()=>[t(h(B))]),_:1}),t(f,{class:"mx-auto board mt-15",width:"1360"},{default:e(()=>[t(b,{class:"pa-0",fluid:""},{default:e(()=>[t(y,{class:"border-opacity-100 mt-5",thickness:3}),t(n,{"no-gutters":""},{default:e(()=>[t(g,{class:"pt-10"},{default:e(()=>[t(M)]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{rt as default};