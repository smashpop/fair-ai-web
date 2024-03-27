import{_ as L}from"./icon-download-DYesiT3d.js";import{_ as T}from"./SmallSearchField-dqoSXKJS.js";import{f as F,T as I}from"./index-DD_DxA5p.js";import{B as P,p as c,e as i,a as b,j as n,F as u,w as R,x as $,i as j,h as _,l as N,V as E,b as S,d as V,k as x}from"./vuetify-D8GCVbd5.js";import{r as m,w as A,l as p,u as v,F as g,ac as D,a7 as s,R as e,B as w,p as G,E as l,y as d,H}from"./@vue-BCn4Dycc.js";/* empty css             */import"./vue-router-CXp4ErzU.js";import"./axios-Cm0UX6qg.js";import"./vue3-promise-dialog-Bil_GCmA.js";import"./pinia-DUAE3AJV.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./vue-detect-browser-D3UAd87C.js";import"./vue-json-excel3-CIG-qtOt.js";import"./vue-country-flag-next-Byqo9PGL.js";const K={class:"text-center"},M={__name:"ThesisView",setup(y){const a=m(1),f=m([]),t=m(!1),o=m(0),k=m({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function U(){t.value=!0,await F(k.value).then(r=>{f.value=r.data.items,o.value=r.data.total}).catch(r=>{console.log(r)}),t.value=!1}return U(),A(k,r=>{U()},{deep:!0}),(r,B)=>(p(),v(g,null,[(p(!0),v(g,null,D(f.value,(h,C)=>(p(),v("div",{key:C},[e(w(I),{thesis:h},null,8,["thesis"]),e(c,{class:"my-8"})]))),128)),s("div",K,[e(P,{modelValue:a.value,"onUpdate:modelValue":B[0]||(B[0]=h=>a.value=h),class:"fair-pg",rounded:"circle",length:10,"total-visible":10},null,8,["modelValue"])])],64))}},O=s("div",{class:"text-14 text-color-222 font-weight-medium"},[d(" 저자, 설명 등의 조합 키워드 검색은 "),s("br"),d("상세검색을 이용해 주세요. ")],-1),q=s("div",{class:"text-16 font-weight-semi-bold text-black"},"상세검색",-1),z=s("div",{class:"text-16 font-weight-semi-bold text-color-555"},"발행연도",-1),J=s("div",{class:"text-16 font-weight-semi-bold text-color-555"},"KCI 등재여부",-1),Q=s("div",{class:"text-16 font-weight-semi-bold text-color-555"},"국내/국외",-1),W={__name:"FilterView",setup(y){const a=m([]);return(f,t)=>(p(),G(j,{class:"pa-0 pt-10",fluid:""},{default:l(()=>[s("div",null,[e(i,{"no-gutters":""},{default:l(()=>[O,e(b,{block:"",rounded:"xl",variant:"plain",style:{width:"100%",height:"44px",border:"1px solid #000",opacity:"1"},class:"mt-4",ripple:!1},{default:l(()=>[q]),_:1})]),_:1}),e(c,{class:"my-7"}),e(i,{"no-gutters":""},{default:l(()=>[z]),_:1}),e(i,{"no-gutters":"",class:"mt-5"},{default:l(()=>[e(n,{class:"scroll2",style:{"max-height":"195px"}},{default:l(()=>[s("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),label:"2024 (98)",value:"1","hide-details":"",class:"input-chk-custom",ripple:!1},null,8,["modelValue"])]),s("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),label:"2023 (1128)",value:"2","hide-details":"",class:"input-chk-custom mt-2",ripple:!1},null,8,["modelValue"])]),s("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value=o),label:"2022 (156)",value:"info","hide-details":"",class:"input-chk-custom mt-2",ripple:!1},null,8,["modelValue"])]),s("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=o=>a.value=o),label:"2021 (214)",value:"info","hide-details":"",class:"input-chk-custom mt-2",ripple:!1},null,8,["modelValue"])]),s("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=o=>a.value=o),label:"2020 (214)",value:"info","hide-details":"",class:"input-chk-custom mt-2",ripple:!1},null,8,["modelValue"])]),s("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value=o),label:"2019 (214)",value:"info","hide-details":"",class:"input-chk-custom mt-2",ripple:!1},null,8,["modelValue"])]),s("div",null,[e(u,{modelValue:a.value,"onUpdate:modelValue":t[6]||(t[6]=o=>a.value=o),label:"2018 (214)",value:"info","hide-details":"",class:"input-chk-custom mt-2",ripple:!1},null,8,["modelValue"])])]),_:1})]),_:1}),e(c,{class:"my-7"}),e(i,{"no-gutters":""},{default:l(()=>[J]),_:1}),e(i,{"no-gutters":"",class:"mt-5"},{default:l(()=>[e(n,null,{default:l(()=>[e(R,{"hide-details":""},{default:l(()=>[e($,{label:" 등재",value:"1",class:"input-radio-custom"}),e($,{label:" 미등재",value:"2",class:"input-radio-custom mt-2"})]),_:1})]),_:1})]),_:1}),e(c,{class:"my-7"}),e(i,{"no-gutters":""},{default:l(()=>[Q]),_:1}),e(i,{"no-gutters":"",class:"mt-5"},{default:l(()=>[e(n,null,{default:l(()=>[e(u,{modelValue:a.value,"onUpdate:modelValue":t[7]||(t[7]=o=>a.value=o),label:"국내",value:"1","hide-details":"",class:"input-chk-custom",ripple:!1},null,8,["modelValue"]),e(u,{modelValue:a.value,"onUpdate:modelValue":t[8]||(t[8]=o=>a.value=o),label:"국외",value:"2","hide-details":"",class:"input-chk-custom mt-2",ripple:!1},null,8,["modelValue"])]),_:1})]),_:1}),e(c,{class:"my-7"})])]),_:1}))}},X=s("p",{class:"text-68 font-weight-bold text-black"},"논문",-1),Y=s("p",{class:"text-34 font-weight-bold text-main-color"},"1,016",-1),Z=s("p",{class:"text-color-555",style:{"margin-left":"6px"}},[d("건의 자료가"),s("br"),d("있습니다.")],-1),ee=s("span",null,"엑셀 다운로드",-1),_e={__name:"index",setup(y){return(a,f)=>(p(),v(g,null,[e(_,{class:"mx-auto d-flex justify-center align-end",width:"1360",height:"180"},{default:l(()=>[X]),_:1}),e(_,{class:"bo-sch mt-3 d-flex justify-center mx-auto",width:"1360"},{default:l(()=>[e(w(T))]),_:1}),e(_,{class:"mx-auto board mt-15",width:"1360"},{default:l(()=>[e(j,{class:"pa-0",fluid:""},{default:l(()=>[e(i,{justify:"space-between",align:"center","no-gutters":""},{default:l(()=>[e(n,{class:"d-flex align-center line-height-normal"},{default:l(()=>[Y,Z]),_:1}),e(n,{class:"d-flex justify-end"},{default:l(()=>[e(b,{class:"btn-plain-custom btn-excel text-black font-weight-medium text-body-1",variant:"plain",ripple:!1},{default:l(()=>[ee,e(N,{src:L,class:"cursor-pointer ml-2",width:"12",height:"15",alt:"excel download"})]),_:1}),e(_,{class:"list-sort ml-8"},{default:l(()=>[e(E,{location:"bottom",attach:""},{activator:l(({props:t})=>[e(b,H(t,{variant:"plain",class:"btn-plain-custom text-black font-weight-medium text-body-1",rounded:"0",ripple:!1}),{default:l(()=>[d(" 최신순 ")]),_:2},1040)]),default:l(()=>[e(S,null,{default:l(()=>[e(V,null,{default:l(()=>[e(x,null,{default:l(()=>[d("최신순")]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(x,null,{default:l(()=>[d("최신순")]),_:1})]),_:1}),e(V,null,{default:l(()=>[e(x,null,{default:l(()=>[d("최신순")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{class:"border-opacity-100 mt-5",thickness:3}),e(i,{"no-gutters":"",class:"justify-space-between"},{default:l(()=>[e(n,{class:"side-menu"},{default:l(()=>[e(w(W))]),_:1}),e(n,{class:"contents pt-10"},{default:l(()=>[e(M)]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{_e as default};
