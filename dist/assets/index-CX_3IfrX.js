import{_ as $,s as B}from"./index-0Y0yupQ_.js";import{z as C,Q as E,R as S,h as c,y as L,o as p,E as T,i as F,e as m,a as i,j as q,V as A,b as N,d as x,k as g}from"./vuetify-B0VsVii7.js";import{l as r,p as Q,E as e,R as t,a7 as s,z as b,a9 as I,aa as P,r as f,w as R,u as _,F as w,ac as z,B as v,y as l,H as D}from"./@vue-BWISRTlF.js";import{_ as O}from"./SmallSearchField-DrN_jrFC.js";/* empty css             */import"./vue-router-DdhOKFq7.js";import"./axios-Cm0UX6qg.js";import"./vue3-promise-dialog-CJbxl8Nd.js";import"./pinia-8EFU34cO.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./vue-detect-browser-D3UAd87C.js";import"./vue-json-excel3-ruWnlMOt.js";import"./vue-country-flag-next-DHK649fL.js";const H=a=>(I("data-v-90a840ac"),a=a(),P(),a),M={class:"d-flex align-center"},U=H(()=>s("p",{style:{width:"50px"},class:"text-16 font-weight-medium text-center"}," 10 ",-1)),G={style:{wdith:"80px",margin:"0 30px"},class:"text-16 text-color-555 font-weight-medium text-center"},J=["textContent"],K={__name:"FaqCard",props:{faq:{type:Object,default:null}},setup(a){const n=a;return console.log(n.faq),(d,u)=>(r(),Q(L,null,{default:e(()=>[t(C,{elevation:"0"},{default:e(()=>[t(E,null,{default:e(()=>[s("div",M,[U,s("p",G,b(n.faq.category.name),1),s("p",null,b(n.faq.title),1)])]),_:1}),t(S,null,{default:e(()=>[t(c,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"300"},{default:e(()=>[s("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:b(n.faq.contents)},null,8,J)]),_:1})]),_:1})]),_:1})]),_:1}))}},W=$(K,[["__scopeId","data-v-90a840ac"]]);function X(a){return B({url:"/ai-faq-page",method:"post",data:a})}const Y=a=>(I("data-v-6bf3cfac"),a=a(),P(),a),Z={class:"text-center mt-10"},tt=Y(()=>s("p",{class:"text-body-1 text-color-555 font-weight-medium"}," 추가적인 제안이나, FAQ로 해결되지 않는 사항은 문의/제안 등록을 통해 담당자에게 직접 요청할 수 있습니다. ",-1)),et={__name:"FaqView",setup(a){const n=f([]),d=f(!1),u=f(0),y=f({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function V(){d.value=!0,await X(y.value).then(o=>{n.value=o.data.items,u.value=o.data.total}).catch(o=>{console.log(o)}),d.value=!1}return V(),R(y,o=>{V()},{deep:!0}),(o,k)=>(r(),_(w,null,[(r(!0),_(w,null,z(n.value,(h,j)=>(r(),_("div",{key:j},[t(v(W),{faq:h},null,8,["faq"]),t(p,{style:{opacity:"1","border-color":"#e4e4e4"}})]))),128)),s("div",Z,[t(T,{modelValue:o.page,"onUpdate:modelValue":k[0]||(k[0]=h=>o.page=h),class:"fair-pg",rounded:"circle",length:10,"total-visible":10},null,8,["modelValue"])]),t(c,{class:"mx-auto mt-15 d-flex align-center",width:"1360",height:"182",style:{border:"1px solid #cfcfcf","border-radius":"8px"}},{default:e(()=>[t(F,{class:"pa-0 d-flex flex-column align-center",fluid:""},{default:e(()=>[t(m,{"no-gutters":"",class:"d-flex justify-space-between"},{default:e(()=>[tt]),_:1}),t(m,{"no-gutters":"",class:"mt-7"},{default:e(()=>[t(i,{variant:"text",href:"/suggest/suggest",class:"suggest"},{default:e(()=>[l(" 문의·제안 등록 → ")]),_:1})]),_:1})]),_:1})]),_:1})],64))}},at=$(et,[["__scopeId","data-v-6bf3cfac"]]),st=s("p",{class:"text-68 font-weight-bold text-black"},"FAQ",-1),lt=s("span",null,"23",-1),nt=s("span",null,"15",-1),ot=s("span",null,"8",-1),ct=s("p",{class:"text-20 font-weight-bold text-black"},[l(" 전체 "),s("span",{class:"ml-2 text-main-color"},"1,016")],-1),vt={__name:"index",setup(a){return(n,d)=>(r(),_(w,null,[t(c,{class:"mx-auto d-flex justify-center align-end",width:"1360",height:"180"},{default:e(()=>[st]),_:1}),t(c,{class:"bo-sch mt-3 d-flex justify-center mx-auto",width:"1360"},{default:e(()=>[t(v(O))]),_:1}),t(p,{class:"mt-15 mb-4",thickness:1}),t(c,{class:"mx-auto snb",width:"1360"},{default:e(()=>[t(i,{variant:"plain",ripple:!1,class:"btn-plain-custom on"},{default:e(()=>[l("전체 "),lt]),_:1}),t(i,{variant:"plain",ripple:!1,class:"btn-plain-custom"},{default:e(()=>[l("검색관련 "),nt]),_:1}),t(i,{variant:"plain",ripple:!1,class:"btn-plain-custom"},{default:e(()=>[l("자료관련 "),ot]),_:1})]),_:1}),t(p,{class:"mt-4",thickness:1}),t(c,{class:"mx-auto board mt-15",width:"1360"},{default:e(()=>[t(F,{class:"pa-0",fluid:""},{default:e(()=>[t(m,{justify:"space-between",align:"center","no-gutters":""},{default:e(()=>[t(q,{class:"d-flex align-center line-height-normal"},{default:e(()=>[ct]),_:1}),t(q,{class:"d-flex justify-end"},{default:e(()=>[t(c,{class:"list-sort ml-8"},{default:e(()=>[t(A,{location:"bottom",attach:""},{activator:e(({props:u})=>[t(i,D(u,{variant:"plain",class:"btn-plain-custom text-black font-weight-medium text-body-1",rounded:"0",ripple:!1}),{default:e(()=>[l(" 최신순 ")]),_:2},1040)]),default:e(()=>[t(N,null,{default:e(()=>[t(x,null,{default:e(()=>[t(g,null,{default:e(()=>[l("최신순")]),_:1})]),_:1}),t(x,null,{default:e(()=>[t(g,null,{default:e(()=>[l("최신순")]),_:1})]),_:1}),t(x,null,{default:e(()=>[t(g,null,{default:e(()=>[l("최신순")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(p,{class:"border-opacity-100 mt-5",thickness:3}),t(m,{"no-gutters":""},{default:e(()=>[t(c,{class:"w-100"},{default:e(()=>[t(v(at))]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{vt as default};