import{_ as U}from"./SmallSearchField-BVfS9oRv.js";import{k as B,l as m,p as V,E as t,R as e,a7 as s,z as b,a8 as C,B as _,r as f,w as S,u as h,F as w,ab as j}from"./@vue-W6jyxCSA.js";import{t as z}from"./TempImage-dvg_ztwD.js";import{e as i,i as c,h as x,a as k,o as F,n as I,k as R,y as L,p,z as r,m as N}from"./vuetify-suYCaqwc.js";import{s as P}from"./index-YfFeSnV_.js";/* empty css             */import"./vue-router-7pEoD-nv.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-G_62FsX2.js";import"./pinia-DPFP5Xm5.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-wQp_0G3e.js";import"./vue-country-flag-next-Hc4247vA.js";const D={class:"text-20 my-2 mr-12",style:{"font-weight":"600"}},E={class:"text-medium-emphasis text-body-2 mr-12"},O=s("span",{class:"text-subtitle-1 text-medium-emphasis font-weight-bold ml-6"},"자세히보기",-1),A={class:"ml-1"},M={__name:"RefSiteCard",props:{item:{type:Object,default:null}},setup(n){const l=n,u=B(()=>l.item.description?l.item.description.substring(0,400):null);return(o,a)=>(m(),V(R,{class:"mx-2",flat:""},{default:t(()=>[e(i,{dense:""},{default:t(()=>[e(c,{cols:"12",md:"9"},{default:t(()=>[e(x,null,{default:t(()=>[e(i,null,{default:t(()=>[s("div",D,b(l.item.siteName),1)]),_:1}),e(i,{style:{height:"70px"}},{default:t(()=>[s("div",E,b(u.value)+"...",1)]),_:1}),e(i,null,{default:t(()=>[O,s("span",A,[e(k,{href:l.item.url,rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:a[0]||(a[0]=C(()=>{},["stop"]))},{default:t(()=>[e(F,{icon:"mdi-arrow-top-right",size:"large",start:""})]),_:1},8,["href"])])]),_:1})]),_:1})]),_:1}),e(c,{cols:"12",md:"3"},{default:t(()=>[e(I,{src:l.item.imageUrl?l.item.imageUrl:_(z),height:"140",class:"mt-1 rounded",cover:""},null,8,["src"])]),_:1})]),_:1})]),_:1}))}};function T(n){return P({url:"/ai-refsite-list",method:"post",data:n})}const q={class:"text-center"},G={__name:"RefSiteView",setup(n){const l=f([]),u=f(!1),o=f(0),a=f({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function y(){u.value=!0,await T(a.value).then(d=>{l.value=d.data.items,o.value=d.data.total}).catch(d=>{console.log(d)}),u.value=!1}return y(),S(a,d=>{y()},{deep:!0}),(d,g)=>(m(),h(w,null,[(m(!0),h(w,null,j(l.value,(v,$)=>(m(),h("div",{key:$},[e(_(M),{item:v},null,8,["item"]),e(p,{class:"mb-2 mx-2"})]))),128)),s("div",q,[e(L,{modelValue:d.page,"onUpdate:modelValue":g[0]||(g[0]=v=>d.page=v),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},H={class:"mx-0"},J=s("div",{class:"text-14 text-black my-5"}," 저자, 설명 등의 조합 키워드 검색은 상세검색을 이용해 주세요. ",-1),K=s("div",{class:"text-16 font-weight-black text-black"},"상세검색",-1),Q=s("div",{class:"text-16 font-weight-bold text-black text-medium-emphasis"},"발행연도",-1),W=s("div",{class:"text-16 font-weight-bold text-black text-medium-emphasis"},"국내/해외",-1),X={__name:"FilterView",setup(n){const l=f([]);return(u,o)=>(m(),V(x,null,{default:t(()=>[s("div",H,[e(i,{class:"my-4",justify:"center"},{default:t(()=>[J,e(k,{block:"",rounded:"xl",size:"large",variant:"outlined"},{default:t(()=>[K]),_:1})]),_:1}),e(p,{class:"my-6"}),e(i,{class:"my-4",justify:"start",dense:""},{default:t(()=>[Q]),_:1}),e(i,{dense:""},{default:t(()=>[e(c,{cols:"8"},{default:t(()=>[s("div",null,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),label:"2024 (98)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),s("div",null,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value=a),label:"2023 (1128)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),s("div",null,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=a=>l.value=a),label:"2022 (156)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),s("div",null,[e(r,{modelValue:l.value,"onUpdate:modelValue":o[3]||(o[3]=a=>l.value=a),label:"2021 (214)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])])]),_:1})]),_:1}),e(p,{class:"my-6"}),e(i,{class:"my-4",justify:"start",dense:""},{default:t(()=>[W]),_:1}),e(i,{dense:""},{default:t(()=>[e(c,{cols:"8"},{default:t(()=>[e(r,{modelValue:l.value,"onUpdate:modelValue":o[4]||(o[4]=a=>l.value=a),label:"국내",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"]),e(r,{modelValue:l.value,"onUpdate:modelValue":o[5]||(o[5]=a=>l.value=a),label:"해외",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{class:"my-6"})])]),_:1}))}},Y={class:"mx-16"},Z=s("div",{class:"text-h2 font-weight-black text-black my-5"},"참고사이트",-1),pe={__name:"index",setup(n){return(l,u)=>(m(),V(x,{fluid:"",class:"bg-white"},{default:t(()=>[s("div",Y,[e(N,{class:"text-center mx-auto px-4",height:"80","max-width":"800",width:"100%"},{default:t(()=>[Z]),_:1}),e(i,{class:"my-4",justify:"center"},{default:t(()=>[e(_(U))]),_:1}),e(p,{class:"my-4 border-opacity-100",thickness:3}),e(i,null,{default:t(()=>[e(c,{cols:"12",md:"2"},{default:t(()=>[e(_(X))]),_:1}),e(c,{cols:"12",md:"8"},{default:t(()=>[e(G)]),_:1})]),_:1})])]),_:1}))}};export{pe as default};
