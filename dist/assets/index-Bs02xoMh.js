import{_ as C}from"./SmallSearchField-dqoSXKJS.js";import{_ as $,s as N}from"./index-DD_DxA5p.js";import{e as d,j as m,i as w,h as i,p as _,a as g}from"./vuetify-D8GCVbd5.js";import{k as y,a6 as z,l as r,p as v,E as e,R as t,a7 as n,z as b,u as h,q as F,r as u,w as G,ac as L,F as k,B as V,y as f}from"./@vue-BCn4Dycc.js";/* empty css             */import"./vue-router-CXp4ErzU.js";import"./axios-Cm0UX6qg.js";import"./vue3-promise-dialog-Bil_GCmA.js";import"./pinia-DUAE3AJV.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./vue-detect-browser-D3UAd87C.js";import"./vue-json-excel3-CIG-qtOt.js";import"./vue-country-flag-next-Byqo9PGL.js";const S={class:"text-16 text-color-222 font-weight-bold"},T={key:0},D={class:"text-body-1 list",style:{"word-break":"break-word"}},E={__name:"GuidelineCard",props:{item:{type:Object,default:null}},setup(s){const a=s,l=y(()=>a.item.nation?a.item.nation.name:a.item.organization.name);return y(()=>a.item.summary?a.item.summary.substring(0,500):null),(x,p)=>{const c=z("country-flag");return r(),v(w,{class:"pa-0",fluid:""},{default:e(()=>[t(d,{"no-gutters":""},{default:e(()=>[n("span",S,b(l.value),1)]),_:1}),t(d,{"no-gutters":"",class:"mt-4"},{default:e(()=>[t(m,{style:{width:"100px",flex:"0 0 auto"}},{default:e(()=>[s.item.orgType==="국가"?(r(),h("span",T,[t(c,{country:s.item.nation.iso,size:"big"},null,8,["country"])])):F("",!0)]),_:1}),t(m,{style:{width:"auto"}},{default:e(()=>[n("p",D,b(a.item.url),1)]),_:1})]),_:1})]),_:1})}}},I=$(E,[["__scopeId","data-v-d9233d06"]]);function O(s){return N({url:"/ai-guideline-page",method:"post",data:s})}const P={__name:"GuidelineView",setup(s){const a=u([]),l=u(!1),x=u(0),p=u({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function c(){l.value=!0,await O(p.value).then(o=>{a.value=o.data.items,x.value=o.data.total}).catch(o=>{console.log(o)}),l.value=!1}return c(),G(p,o=>{c()},{deep:!0}),(o,H)=>(r(!0),h(k,null,L(a.value,(j,B)=>(r(),v(i,{key:B,width:"650",style:{padding:"30px 0 35px","min-height":"160px","border-bottom":"1px solid #e4e4e4"}},{default:e(()=>[t(V(I),{item:j},null,8,["item"])]),_:2},1024))),128))}},R=n("p",{class:"text-68 font-weight-bold text-black"},"가이드라인",-1),q=n("p",{class:"text-34 font-weight-bold text-black"},"국가",-1),A=n("p",{class:"text-black font-weight-medium"},[f(" 업데이트 : "),n("span",{class:"text-color-727171"},"2024.01.21")],-1),ot={__name:"index",setup(s){return(a,l)=>(r(),h(k,null,[t(i,{class:"mx-auto d-flex justify-center align-end",width:"1360",height:"180"},{default:e(()=>[R]),_:1}),t(i,{class:"bo-sch mt-3 d-flex justify-center mx-auto",width:"1360"},{default:e(()=>[t(V(C))]),_:1}),t(_,{class:"mt-15 mb-4",thickness:1}),t(i,{class:"mx-auto snb",width:"1360"},{default:e(()=>[t(g,{variant:"plain",ripple:!1,class:"btn-plain-custom on"},{default:e(()=>[f("국가")]),_:1}),t(g,{variant:"plain",ripple:!1,class:"btn-plain-custom"},{default:e(()=>[f("국제기구")]),_:1})]),_:1}),t(_,{class:"mt-4",thickness:1}),t(i,{class:"mx-auto board mt-15",width:"1360"},{default:e(()=>[t(w,{class:"pa-0",fluid:""},{default:e(()=>[t(d,{justify:"space-between",align:"center","no-gutters":""},{default:e(()=>[t(m,{class:"d-flex align-center line-height-normal"},{default:e(()=>[q]),_:1}),t(m,{class:"d-flex justify-end"},{default:e(()=>[A]),_:1})]),_:1}),t(_,{class:"border-opacity-100 mt-5",thickness:3}),t(d,{"no-gutters":"",class:"justify-space-between"},{default:e(()=>[t(P)]),_:1})]),_:1})]),_:1})],64))}};export{ot as default};
