import{_ as B}from"./SmallSearchField-4lCyqbPu.js";import{k as U,l as m,p as y,E as t,R as e,a7 as s,z as u,a8 as j,r as _,w as z,u as v,F as w,ab as F,B as b}from"./@vue-4VtEq8s7.js";import{a as R,s as I}from"./index-5ghCA6t9.js";import{e as d,i as p,h as x,y as L,o as k,a as $,n as P,k as S,z as A,p as f,A as c,m as D}from"./vuetify-N6sFEKsC.js";/* empty css             */import"./vue-router-izlzWlJ4.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-pueFlEgn.js";import"./pinia-2JqXyxpT.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-q7weqA0g.js";import"./vue-country-flag-next-USwdQ1vq.js";const E={class:"text-20 my-2 mr-12",style:{"font-weight":"600"}},N={class:"text-body-1"},O=s("span",{class:"text-body-1 font-weight-bold ml-6"}," 저자 ",-1),T={class:"text-body-1 ml-2"},M=s("span",{class:"text-body-1 font-weight-bold ml-6"}," 발행지명 ",-1),Y={class:"text-body-1 ml-2"},q=s("span",{class:"text-body-1 font-weight-bold ml-6"}," 발행연도 ",-1),G={class:"text-body-1 ml-2"},H={class:"text-medium-emphasis text-body-2 mr-12"},J=s("span",{class:"text-subtitle-1 font-weight-bold text-medium-emphasis"},"원문보기",-1),K={class:"mr-4"},Q={__name:"ReportCard",props:{report:{type:Object,default:null}},setup(n){const l=n,r=U(()=>l.report.abstract?l.report.abstract.substring(0,400):null);return(o,a)=>(m(),y(S,{class:"mx-2",flat:""},{default:t(()=>[e(d,{dense:""},{default:t(()=>[e(p,{cols:"12",md:"9"},{default:t(()=>[e(x,null,{default:t(()=>[e(d,null,{default:t(()=>[s("div",E,u(l.report.title),1)]),_:1}),e(d,{class:"mb-2"},{default:t(()=>[e(L,{color:"primary",size:"small",label:""},{default:t(()=>[e(k,{start:"",icon:"mdi-web"}),s("span",N,u(l.report.orgType),1)]),_:1}),O,s("span",T,u(l.report.author),1),M,s("span",Y,u(l.report.publisher),1),q,s("span",G,u(l.report.publishedYear),1)]),_:1}),e(d,{style:{height:"80px"}},{default:t(()=>[s("div",H,u(r.value)+"...",1)]),_:1}),e(d,{justify:"end",dense:""},{default:t(()=>[J,s("span",K,[e($,{href:l.report.url,rel:"noopener noreferrer",target:"_blank",variant:"text",onClick:a[0]||(a[0]=j(()=>{},["stop"]))},{default:t(()=>[e(k,{icon:"mdi-arrow-top-right",size:"large",start:""})]),_:1},8,["href"])])]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"3"},{default:t(()=>[e(P,{src:R,height:"180",class:"mt-2 rounded",cover:""})]),_:1})]),_:1})]),_:1}))}};function W(n){return I({url:"/ai-report-page",method:"post",data:n})}const X={class:"text-center"},Z={__name:"ReportView",setup(n){const l=_([]),r=_(!1),o=_(0),a=_({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function V(){r.value=!0,await W(a.value).then(i=>{l.value=i.data.items,o.value=i.data.total}).catch(i=>{console.log(i)}),r.value=!1}return V(),z(a,i=>{V()},{deep:!0}),(i,g)=>(m(),v(w,null,[(m(!0),v(w,null,F(l.value,(h,C)=>(m(),v("div",{key:C},[e(b(Q),{report:h},null,8,["report"]),e(f,{class:"mb-2 mx-2"})]))),128)),s("div",X,[e(A,{modelValue:i.page,"onUpdate:modelValue":g[0]||(g[0]=h=>i.page=h),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},ee={class:"mx-0"},te=s("div",{class:"text-14 text-black my-5"}," 저자, 설명 등의 조합 키워드 검색은 상세검색을 이용해 주세요. ",-1),le=s("div",{class:"text-16 font-weight-black text-black"},"상세검색",-1),se=s("div",{class:"text-16 font-weight-bold text-black text-medium-emphasis"},"발행연도",-1),ae=s("div",{class:"text-16 font-weight-bold text-black text-medium-emphasis"},"국내/해외",-1),oe={__name:"FilterView",setup(n){const l=_([]);return(r,o)=>(m(),y(x,null,{default:t(()=>[s("div",ee,[e(d,{class:"my-4",justify:"center"},{default:t(()=>[te,e($,{block:"",rounded:"xl",size:"large",variant:"outlined"},{default:t(()=>[le]),_:1})]),_:1}),e(f,{class:"my-6"}),e(d,{class:"my-4",justify:"start",dense:""},{default:t(()=>[se]),_:1}),e(d,{dense:""},{default:t(()=>[e(p,{cols:"8"},{default:t(()=>[s("div",null,[e(c,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value=a),label:"2024 (98)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),s("div",null,[e(c,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value=a),label:"2023 (1128)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),s("div",null,[e(c,{modelValue:l.value,"onUpdate:modelValue":o[2]||(o[2]=a=>l.value=a),label:"2022 (156)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),s("div",null,[e(c,{modelValue:l.value,"onUpdate:modelValue":o[3]||(o[3]=a=>l.value=a),label:"2021 (214)",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])])]),_:1})]),_:1}),e(f,{class:"my-6"}),e(d,{class:"my-4",justify:"start",dense:""},{default:t(()=>[ae]),_:1}),e(d,{dense:""},{default:t(()=>[e(p,{cols:"8"},{default:t(()=>[e(c,{modelValue:l.value,"onUpdate:modelValue":o[4]||(o[4]=a=>l.value=a),label:"국내",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"]),e(c,{modelValue:l.value,"onUpdate:modelValue":o[5]||(o[5]=a=>l.value=a),label:"해외",color:"info",value:"info",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{class:"my-6"})])]),_:1}))}},de={class:"mx-16"},ie=s("div",{class:"text-h2 font-weight-black text-black my-5"},"보고서",-1),Ve={__name:"index",setup(n){return(l,r)=>(m(),y(x,{fluid:"",class:"bg-white"},{default:t(()=>[s("div",de,[e(D,{class:"text-center mx-auto px-4",height:"80","max-width":"800",width:"100%"},{default:t(()=>[ie]),_:1}),e(d,{class:"my-4",justify:"center"},{default:t(()=>[e(b(B))]),_:1}),e(f,{class:"my-4 border-opacity-100",thickness:3}),e(d,null,{default:t(()=>[e(p,{cols:"12",md:"2"},{default:t(()=>[e(b(oe))]),_:1}),e(p,{cols:"12",md:"10"},{default:t(()=>[e(Z)]),_:1})]),_:1})])]),_:1}))}};export{Ve as default};
