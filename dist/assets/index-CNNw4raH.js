import{_ as j}from"./SmallSearchField-Dl1Q9p7C.js";import{k as B,l as n,p as C,E as e,R as t,a7 as a,z as V,ab as S,B as _,r as d,w as F,u,F as h,ac as I,y as b}from"./@vue-BCn4Dycc.js";import{t as N,s as R}from"./index-C8gEbFyK.js";import{e as i,j as m,i as k,a as g,t as E,l as L,u as P,o as p,E as U,h as f}from"./vuetify-BJ8PFz4g.js";/* empty css             */import"./vue-router-CXp4ErzU.js";import"./axios-Cm0UX6qg.js";import"./vue3-promise-dialog-Bil_GCmA.js";import"./pinia-DUAE3AJV.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./vue-detect-browser-D3UAd87C.js";import"./vue-json-excel3-CIG-qtOt.js";import"./vue-country-flag-next-Byqo9PGL.js";const z={class:"text-20 my-2 mr-12",style:{"font-weight":"600"}},A={class:"text-medium-emphasis text-body-2 mr-12"},D=a("span",{class:"text-subtitle-1 text-medium-emphasis font-weight-bold ml-6"},"자세히보기",-1),O={class:"ml-1"},T={__name:"RefSiteCard",props:{item:{type:Object,default:null}},setup(o){const s=o,r=B(()=>s.item.description?s.item.description.substring(0,400):null);return(v,c)=>(n(),C(P,{class:"mx-2",flat:""},{default:e(()=>[t(i,{dense:""},{default:e(()=>[t(m,{cols:"12",md:"9"},{default:e(()=>[t(k,null,{default:e(()=>[t(i,null,{default:e(()=>[a("div",z,V(s.item.siteName),1)]),_:1}),t(i,{style:{height:"70px"}},{default:e(()=>[a("div",A,V(r.value)+"...",1)]),_:1}),t(i,null,{default:e(()=>[D,a("span",O,[t(g,{href:s.item.url,rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:c[0]||(c[0]=S(()=>{},["stop"]))},{default:e(()=>[t(E,{icon:"mdi-arrow-top-right",size:"large",start:""})]),_:1},8,["href"])])]),_:1})]),_:1})]),_:1}),t(m,{cols:"12",md:"3"},{default:e(()=>[t(L,{src:s.item.imageUrl?s.item.imageUrl:_(N),height:"140",class:"mt-1 rounded",cover:""},null,8,["src"])]),_:1})]),_:1})]),_:1}))}};function M(o){return R({url:"/ai-refsite-page",method:"post",data:o})}const q={class:"text-center"},G={__name:"RefSiteView",setup(o){const s=d([]),r=d(!1),v=d(0),c=d({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function w(){r.value=!0,await M(c.value).then(l=>{s.value=l.data.items,v.value=l.data.total}).catch(l=>{console.log(l)}),r.value=!1}return w(),F(c,l=>{w()},{deep:!0}),(l,y)=>(n(),u(h,null,[(n(!0),u(h,null,I(s.value,(x,$)=>(n(),u("div",{key:$},[t(_(T),{item:x},null,8,["item"]),t(p,{class:"my-8"})]))),128)),a("div",q,[t(U,{modelValue:l.page,"onUpdate:modelValue":y[0]||(y[0]=x=>l.page=x),class:"fair-pg",rounded:"circle",length:10,"total-visible":10},null,8,["modelValue"])])],64))}},H=a("div",{class:"text-16 text-color-555 font-weight-semi-bold"},"초성검색",-1),J={class:"side-initial mt-4"},K={__name:"FilterView",setup(o){return d([]),(s,r)=>(n(),u(h,null,[t(i,{justify:"start","no-gutters":"",class:"mt-10 flex-column"},{default:e(()=>[H,a("div",J,[t(g,{variant:"text",width:"42",height:"42",border:"",class:"text-body-1 font-weight-semi-bold",style:{"border-radius":"42px","min-width":"auto",border:"1px solid #cfcfcf"}},{default:e(()=>[b(" A ")]),_:1})])]),_:1}),t(p,{class:"mt-7",style:{"border-color":"#a0a0a0",opacity:"1"}})],64))}},Q=a("p",{class:"text-68 font-weight-bold text-black"},"참고사이트",-1),W=a("p",{class:"text-34 font-weight-bold text-black"},"국외",-1),dt={__name:"index",setup(o){return(s,r)=>(n(),u(h,null,[t(f,{class:"mx-auto d-flex justify-center align-end",width:"1360",height:"180"},{default:e(()=>[Q]),_:1}),t(f,{class:"bo-sch mt-3 d-flex justify-center mx-auto",width:"1360"},{default:e(()=>[t(_(j))]),_:1}),t(p,{class:"mt-15 mb-4",thickness:1}),t(f,{class:"mx-auto snb",width:"1360"},{default:e(()=>[t(g,{variant:"plain",ripple:!1,class:"btn-plain-custom"},{default:e(()=>[b("국내")]),_:1}),t(g,{variant:"plain",ripple:!1,class:"btn-plain-custom on"},{default:e(()=>[b("국외")]),_:1})]),_:1}),t(p,{class:"mt-4",thickness:1}),t(f,{class:"mx-auto board mt-15",width:"1360"},{default:e(()=>[t(k,{class:"pa-0",fluid:""},{default:e(()=>[t(i,{justify:"space-between",align:"center","no-gutters":""},{default:e(()=>[t(m,{class:"d-flex align-center line-height-normal"},{default:e(()=>[W]),_:1})]),_:1}),t(p,{class:"border-opacity-100 mt-5",thickness:3}),t(i,{"no-gutters":"",class:"justify-space-between"},{default:e(()=>[t(m,{class:"side-menu"},{default:e(()=>[t(_(K))]),_:1}),t(m,{class:"contents pt-10"},{default:e(()=>[t(G)]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{dt as default};
