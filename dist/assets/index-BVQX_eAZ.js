import{_ as j}from"./SmallSearchField-D7jjuGM2.js";import{u as L}from"./vue-router-CXp4ErzU.js";import{p as y,b as N,_ as T}from"./index-B-GOdT_t.js";import{p as c,d as f,b as A,h as s,a as x,u as $,E as F,F as P,G as D,t as E,i as R,e as k,j as I,V as z,k as g}from"./vuetify-DQNkjVST.js";import{r as u,w as G,l as p,u as b,R as t,E as e,F as v,ac as H,p as M,a7 as l,B as d,y as a,z as C,H as O,a9 as q,aa as J}from"./@vue-BCn4Dycc.js";/* empty css             */import"./axios-Cm0UX6qg.js";import"./vue3-promise-dialog-Bil_GCmA.js";import"./pinia-DUAE3AJV.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./vue-detect-browser-D3UAd87C.js";import"./vue-json-excel3-CIG-qtOt.js";import"./vue-country-flag-next-Byqo9PGL.js";const K=["onClick"],Q={class:"text-16"},U={__name:"NoticeView",setup(n){const r=u([]),m=u(!1),h=u(0),w=u({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc"}),B=L();async function V(){m.value=!0,await N(w.value).then(o=>{r.value=o.data.items,console.log("notice=",r.value),h.value=o.data.total}).catch(o=>{console.log(o)}),m.value=!1}return V(),G(w,o=>{V()},{deep:!0}),(o,et)=>(p(),b(v,null,[t(c,{class:"mb-2"}),t(A,null,{default:e(()=>[(p(!0),b(v,null,H(r.value,(i,S)=>(p(),M(f,{key:S},{default:e(()=>[l("div",{class:"d-flex justify-space-between align-center",style:{height:"40px"},"align-baseline":"","d-flex":"","text-18":"","font-weight-medium":"",onClick:at=>d(B).push({name:"NoticePage",params:{id:i.id}})},[a(C(i.title)+" ",1),l("div",Q,C(i.updatedAt?d(y)(i.updatedAt):d(y)(i.createdAt)),1)],8,K),t(c,{class:"my-2"})]),_:2},1024))),128))]),_:1})],64))}},_=n=>(q("data-v-ad587b36"),n=n(),J(),n),W=_(()=>l("p",{class:"text-68 font-weight-bold text-black"},"공지사항",-1)),X=_(()=>l("span",null,"23",-1)),Y=_(()=>l("span",null,"15",-1)),Z=_(()=>l("p",{class:"text-20 font-weight-bold text-black"},[a(" 전체 "),l("span",{class:"ml-2 text-main-color"},"1,016")],-1)),tt={__name:"index",setup(n){return(r,m)=>(p(),b(v,null,[t(s,{class:"mx-auto d-flex justify-center align-end",width:"1360",height:"180"},{default:e(()=>[W]),_:1}),t(s,{class:"bo-sch mt-3 d-flex justify-center mx-auto",width:"1360"},{default:e(()=>[t(d(j))]),_:1}),t(c,{class:"mt-15 mb-4",thickness:1}),t(s,{class:"mx-auto snb",width:"1360"},{default:e(()=>[t(x,{variant:"plain",ripple:!1,class:"btn-plain-custom on"},{default:e(()=>[a("전체 "),X]),_:1}),t(x,{variant:"plain",ripple:!1,class:"btn-plain-custom"},{default:e(()=>[a("홍보 "),Y]),_:1})]),_:1}),t(c,{class:"mt-4",thickness:1}),t(s,{class:"mx-auto mt-15",width:"1360"},{default:e(()=>[t($,{class:"notice-top-card",elevation:"0","max-width":"",variant:"outlined"},{default:e(()=>[t(F,null,{default:e(()=>[t(P,{class:"text-30 text-black font-weight-bold"},{default:e(()=>[a(" 신규자료 업데이트 안내 ")]),_:1}),t(D,{class:"text-16 text-color-727171 font-weight-medium",style:{opacity:"1"}},{default:e(()=>[a(" 2023.12.15 ")]),_:1})]),_:1}),t(E,{class:"mt-4 text-16 text-color-222",style:{"line-height":"24px"}},{default:e(()=>[a(" 한국지능정보사회진흥원은 「생성형 AI윤리 가이드북」을 발간하였다.- 생성형 AI윤리 가이드북은 생성형 AI를 윤리적이고 생산적으로 활용하는데 참고할 수 있도록 방송통신위원회와 한국지능정보사회진흥원에서 기획·발간한 보고서임. ")]),_:1})]),_:1})]),_:1}),t(s,{class:"mx-auto board mt-10",width:"1360"},{default:e(()=>[t(R,{class:"pa-0",fluid:""},{default:e(()=>[t(k,{justify:"space-between",align:"center","no-gutters":""},{default:e(()=>[t(I,{class:"d-flex align-center line-height-normal"},{default:e(()=>[Z]),_:1}),t(I,{class:"d-flex justify-end"},{default:e(()=>[t(s,{class:"list-sort ml-8"},{default:e(()=>[t(z,{location:"bottom",attach:""},{activator:e(({props:h})=>[t(x,O(h,{variant:"plain",class:"btn-plain-custom text-black font-weight-medium text-body-1",rounded:"0",ripple:!1}),{default:e(()=>[a(" 최신순 ")]),_:2},1040)]),default:e(()=>[t(A,null,{default:e(()=>[t(f,null,{default:e(()=>[t(g,null,{default:e(()=>[a("최신순")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(g,null,{default:e(()=>[a("최신순")]),_:1})]),_:1}),t(f,null,{default:e(()=>[t(g,null,{default:e(()=>[a("최신순")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(c,{class:"border-opacity-100 mt-5",thickness:3}),t(k,{"no-gutters":""},{default:e(()=>[t(s,{class:"w-100"},{default:e(()=>[t(d(U))]),_:1})]),_:1})]),_:1})]),_:1})],64))}},ht=T(tt,[["__scopeId","data-v-ad587b36"]]);export{ht as default};
