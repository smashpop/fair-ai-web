/* empty css             */import{c as ot,S as q,V as u,a as T,b as nt,d as E,e as v,f as m,g as U,h as j,i as at,j as lt,k as P,l as R,m as S,n as ct,o as H,p as rt,q as it,r as dt,s as ut}from"./vuetify-DnXmRN3y.js";import{r as f,$ as k,U as F,l as d,a0 as h,a1 as e,I as t,a2 as n,y as _,a3 as _t,a4 as mt,v as b,a5 as M,p as y,w as B,a6 as W,a7 as K,u as G,F as I,a8 as Q,k as ht,W as ft,q as pt,a9 as gt}from"./@vue-L5kv75rD.js";import{u as vt,c as xt,a as bt}from"./vue-router-87F3wI6o.js";import{a as Y}from"./axios-L6U4YIEh.js";import{d as $t,c as yt}from"./pinia-5t0_ST69.js";import{s as wt}from"./pinia-plugin-persistedstate-XbYvz584.js";import{b as Vt}from"./vue-detect-browser-HAC5R545.js";import{s as Et}from"./vue-json-excel3-vW_7OF4G.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(c){if(c.ep)return;c.ep=!0;const l=a(c);fetch(c.href,l)}})();const Lt={VBtn:{}}; const Pt=ot({defaults:Lt,theme:{defaultTheme:"light",themes:{light:{colors:{background:"#DEDEDE",primary:"#472AB2",secondary:"#4AEAD8"}}}},icons:{defaultSet:"mdi"}}); const kt="modulepreload"; const It=function(o){return"/"+o}; const N={}; const x=function(s,a,i){let c=Promise.resolve();if(a&&a.length>0){const l=document.getElementsByTagName("link");c=Promise.all(a.map(r=>{if(r=It(r),r in N)return;N[r]=!0;const p=r.endsWith(".css"); const g=p?'[rel="stylesheet"]':"";if(i)for(let D=l.length-1;D>=0;D--){const C=l[D];if(C.href===r&&(!p||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${g}`))return;const L=document.createElement("link");if(L.rel=p?"stylesheet":kt,p||(L.as="script",L.crossOrigin=""),L.href=r,document.head.appendChild(L),p)return new Promise((D,C)=>{L.addEventListener("load",D),L.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${r}`)))})}))}return c.then(()=>s()).catch(l=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l})}; const St={class:"mx-12"}; const At=n("strong",{class:"text-h6 font-weight-bold"},"소개",-1); const Dt=n("strong",{class:"text-h6 font-weight-bold"},"최신자료",-1); const Ct=n("strong",{class:"text-h6 font-weight-bold"},"소식",-1); const Ot=n("strong",{class:"text-h6 font-weight-bold"},"문의/제안",-1); const Tt={__name:"Header",setup(o){const s=f(0);function a(){s.value++,console.log("scrollInvoked.value=",s.value)}return(i,c)=>{const l=k("logo");return F((d(),h(T,{color:"transparent",flat:"",height:"60"},{prepend:e(()=>[t(l),n("div",St,[t(u,{to:"/introduce",variant:"text"},{default:e(()=>[At]),_:1}),t(u,{to:"/archive",variant:"text"},{default:e(()=>[Dt]),_:1}),t(u,{to:"/news",variant:"text"},{default:e(()=>[Ct]),_:1}),t(u,{to:"/suggest",variant:"text"},{default:e(()=>[Ot]),_:1})])]),_:1})),[[q,a,void 0,{self:!0}]])}}}; const Rt={__name:"MainView",setup(o){const s=f(0);function a(){s.value++,console.log("scrollInvoked.value=",s.value)}return(i,c)=>{const l=k("router-view");return F((d(),h(nt,null,{default:e(()=>[t(l)]),_:1})),[[q,a,void 0,{self:!0}]])}}}; const w=(o,s)=>{const a=o.__vccOpts||o;for(const[i,c]of s)a[i]=c;return a}; const jt={}; const Ft={class:"pa-4 mx-8"}; const Bt=n("strong",{class:"text-subtitle-2 font-weight-bold text-grey-darken-1"},"소개",-1); const Nt=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"자료실",-1); const zt=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"소식",-1); const qt=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"문의/제안",-1); const Ut=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"}," 행사등록 신청 ",-1); const Ht=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"개인정보처리방침",-1); const Mt=n("strong",{class:"text-subtitle-1 font-weight-bold"}," 관련사이트 ",-1); const Wt={class:"d-flex flex-wrap mt-4 justify-end"};function Kt(o,s){const a=k("logo");return d(),h(j,{color:"#F4F4F4"},{default:e(()=>[t(E,null,{default:e(()=>[n("div",Ft,[t(v,{dense:""},{default:e(()=>[t(m,{cols:"12",md:"3"},{default:e(()=>[t(a)]),_:1}),t(m,{cols:"12",md:"3"},{default:e(()=>[t(v,{dense:""},{default:e(()=>[t(m,{cols:"12"},{default:e(()=>[t(u,{to:"/introduce",variant:"text",density:"compact"},{default:e(()=>[Bt]),_:1})]),_:1})]),_:1}),t(v,{dense:""},{default:e(()=>[t(m,{cols:"12"},{default:e(()=>[t(u,{to:"/archive",variant:"text",density:"compact"},{default:e(()=>[Nt]),_:1})]),_:1})]),_:1}),t(v,{dense:""},{default:e(()=>[t(m,{cols:"12"},{default:e(()=>[t(u,{to:"/news",variant:"text",density:"compact"},{default:e(()=>[zt]),_:1})]),_:1})]),_:1}),t(v,{dense:""},{default:e(()=>[t(m,{cols:"12"},{default:e(()=>[t(u,{to:"/suggest",variant:"text",density:"compact"},{default:e(()=>[qt]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{cols:"12",md:"3"},{default:e(()=>[t(v,{dense:""},{default:e(()=>[t(m,{cols:"12"},{default:e(()=>[t(u,{to:"/news/event-regist",variant:"text",density:"compact"},{default:e(()=>[Ut]),_:1})]),_:1})]),_:1}),t(v,{dense:""},{default:e(()=>[t(m,{cols:"12"},{default:e(()=>[t(u,{to:"/privacy-polocy",variant:"text",density:"compact"},{default:e(()=>[Ht]),_:1})]),_:1})]),_:1})]),_:1}),t(m,{cols:"12",md:"3",class:"text-end"},{default:e(()=>[t(U,{items:["나의AAC","NC문화재단","NC SOFT"],class:"ml-4",variant:"underlined",density:"compact"},{label:e(()=>[Mt]),_:1}),n("div",Wt,[t(u,{class:"mx-3",color:"grey",icon:"mdi-facebook",variant:"outlined"}),t(u,{color:"grey",icon:"mdi-youtube",variant:"outlined"})])]),_:1})]),_:1})])]),_:1})]),_:1})}const Gt=w(jt,[["render",Kt]]); const Qt={class:"bg_image"}; const Yt={__name:"index",setup(o){return(s,a)=>(d(),h(at,null,{default:e(()=>[n("div",Qt,[t(_(Tt)),t(_(Rt)),t(_(Gt))])]),_:1}))}}; const Jt=w(Yt,[["__scopeId","data-v-fd555ed8"]]); const Xt={__name:"SearchField",emits:["search"],setup(o,{emit:s}){const a=f(""); const i=s;function c(l){console.log("searchClick()=",l),i("search",l)}return(l,r)=>(d(),h(lt,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=p=>a.value=p),placeholder:"검색",class:"mr-16",color:"primary","bg-color":"white",style:{"max-width":"600px"},variant:"outlined",rounded:"",density:"comfortable","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"",onKeyup:r[1]||(r[1]=_t(mt(p=>c(a.value),["prevent"]),["enter"]))},null,8,["modelValue"]))}}; const Zt={class:"mx-16 my-16"}; const te=n("div",null,[n("strong",{class:"text-h2 font-weight-light text-black"},"AI 윤리 관련")],-1); const ee=n("div",null,[n("strong",{class:"text-h2 font-weight-black text-black"},"최근 이슈"),n("strong",{class:"text-h2 font-weight-light text-black"},"에 대해")],-1); const se=n("div",null,[n("strong",{class:"text-h2 font-weight-light text-black"},"알아보세요.")],-1); const oe={__name:"index",setup(o){const s=vt();function a(i){console.log("keyword=",i),s.push({name:"Result",state:{dataObj:{searchStr:i}}})}return(i,c)=>(d(),h(E,null,{default:e(()=>[n("div",Zt,[t(v,{"no-gutters":""},{default:e(()=>[t(m,{cols:"5"},{default:e(()=>[te,ee,se]),_:1}),t(m,{cols:"7"},{default:e(()=>[t(_(Xt),{class:"ms-2",onSearch:a})]),_:1})]),_:1})])]),_:1}))}};function ne(o){return o!==void 0?`http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/card/${o}`:void 0}const ae=n("div",null,[n("h6",{class:"text-subtitle-1 mb-4"},"논문 해외")],-1); const le={class:"text-h5","font-weight-bold":""}; const ce=n("div",null,[n("strong",{class:"text-subtitle-1 mb-4"},"저자")],-1); const re=n("div",null,[n("strong",{class:"text-subtitle-1 mb-4"},"발행")],-1); const ie=n("div",null,[n("strong",{class:"text-subtitle-1 mb-4"},"연도")],-1); const A={__name:"ThesisCard",props:{card:{type:Object,default:null}},setup(o){const s=o;return(a,i)=>(d(),h(E,null,{default:e(()=>[s.card?(d(),h(P,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[ae,n("div",null,[t(P,{height:"150",elevation:"0"},{default:e(()=>[n("strong",le,b(s.card.thesis?s.card.thesis.title:""),1)]),_:1})]),n("div",null,[t(v,null,{default:e(()=>[t(m,{cols:"12",md:"5"},{default:e(()=>[t(R,{height:"200",src:_(ne)(s.card.id)},null,8,["src"])]),_:1}),t(m,{cols:"12",md:"7"},{default:e(()=>[ce,re,ie]),_:1})]),_:1})])]),_:1})):M("",!0)]),_:1}))}}; const $=Y.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/fair/api",timeout:5e3});$.interceptors.request.use(o=>o,o=>(console.log("request err=",o),Promise.reject(o)));$.interceptors.response.use(o=>{const s=o.data;if(console.log("res.code=",s.code),s.code!==2e4){if(console.log("res.message=",s.message),!(s.code===50008||s.code===50012||s.code===50014)){if(s.code===60204||s.code===60205)return o}return Promise.reject(new Error(s.message||"Error"))}else return o},o=>(console.log("response err=",o),Promise.reject(o)));const J=Y.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000",timeout:3e4});J.interceptors.request.use(o=>(o.headers["Content-Type"]="multipart/form-data",o),o=>(console.log("requestStorage err=",o),Promise.reject(o)));J.interceptors.response.use(o=>o,o=>(console.log("requestStorage err=",o),Promise.reject(o)));function X(o){return $({url:"/ai-card",method:"get",data:o})}const de={class:"mx-16"}; const ue={__name:"index",setup(o){const s=f([]); const a=f(!1); const i=f(0);async function c(){a.value=!0,await X().then(l=>{s.value=l.data.items,i.value=l.data.total}).catch(l=>{console.log(l)}),a.value=!1,console.log("card items=",s.value)}return c(),(l,r)=>(d(),y("div",de,[t(v,{"no-gutters":""},{default:e(()=>[t(m,{cols:"12",md:"4"},{default:e(()=>[t(_(A),{card:s.value[0]},null,8,["card"])]),_:1}),t(m,{cols:"12",md:"4"},{default:e(()=>[t(_(A),{card:s.value[1]},null,8,["card"])]),_:1}),t(m,{cols:"12",md:"4"},{default:e(()=>[t(_(A),{card:s.value[2]},null,8,["card"])]),_:1})]),_:1})]))}}; const _e={class:"text-h5 font-weight-black"}; const me=n("div",null,[n("strong",{class:"text-subtitle-1 mb-4"},"매일경제 자세히보기")],-1); const z={__name:"ArticleCard",props:{card:{type:Object,default:null}},setup(o){const s=o;return(a,i)=>(d(),h(E,null,{default:e(()=>[s.card?(d(),h(P,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[n("div",null,[t(R,{height:"250","aspect-ratio":"16/9",cover:"",src:s.card.thumbnailUrl},null,8,["src"])]),n("div",null,[t(P,{class:"my-4",height:"100",elevation:"0"},{default:e(()=>[n("strong",_e,b(s.card?s.card.title:""),1)]),_:1})]),me]),_:1})):M("",!0)]),_:1}))}};function Vo(o){return $({url:"/ai-article-page",method:"post",data:o})}function he(){return $({url:"/ai-article-last",method:"get"})}const fe={class:"mx-0"}; const pe={__name:"ArticleView",setup(o){const s=f([]); const a=f(!1); const i=f(0);async function c(){a.value=!0,await he().then(l=>{s.value=l.data.items,i.value=l.data.total}).catch(l=>{console.log(l)}),a.value=!1,console.log("article card items=",s.value)}return c(),(l,r)=>(d(),h(P,{class:"mx-0",elevation:"0"},{default:e(()=>[n("div",fe,[t(v,{"no-gutters":""},{default:e(()=>[t(m,{cols:"12",md:"6"},{default:e(()=>[t(_(z),{card:s.value[0]},null,8,["card"])]),_:1}),t(S,{class:"my-9",vertical:""}),t(m,{cols:"12",md:"6"},{default:e(()=>[t(_(z),{card:s.value[1]},null,8,["card"])]),_:1})]),_:1})])]),_:1}))}}; const ge={class:"mx-16"}; const ve=n("div",null,[n("strong",{class:"text-h4 font-weight-black mb-24"},"최근AI이슈")],-1); const xe=n("div",{class:"mt-24"},[n("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"이슈관련 키워드")],-1); const be=n("p",{class:"text-subtitle-1 font-weight-black text-disabled"},"#AI윤리",-1); const $e=n("p",{class:"text-subtitle-1 font-weight-black text-disabled"},"#CES2024",-1); const ye=n("p",{class:"text-subtitle-1 font-weight-black text-disabled"},"#의료AI",-1); const we=n("p",{class:"text-subtitle-1 font-weight-black text-disabled"},"#자율주행",-1); const Ve=n("p",{class:"text-subtitle-1 font-weight-black text-disabled"},"#강인공지능",-1); const Ee=n("p",{class:"text-subtitle-1 font-weight-black text-disabled"},"#딥러닝",-1); const Le=n("p",{class:"text-subtitle-1 font-weight-black text-disabled"},"#게임형 학습 콘텐츠",-1); const Pe={__name:"index",setup(o){return(s,a)=>(d(),h(P,{class:"mx-16",elevation:"0"},{default:e(()=>[n("div",ge,[t(v,{"no-gutters":""},{default:e(()=>[t(m,{cols:"12",md:"4"},{default:e(()=>[t(E,null,{default:e(()=>[ve,xe,n("div",null,[t(u,{rounded:"xl",size:"x-large",variant:"outlined"},{default:e(()=>[be]),_:1})]),n("div",null,[t(u,{rounded:"xl",size:"x-large",variant:"outlined"},{default:e(()=>[$e]),_:1}),t(u,{rounded:"xl",size:"x-large",variant:"outlined"},{default:e(()=>[ye]),_:1})]),n("div",null,[t(u,{rounded:"xl",size:"x-large",variant:"outlined"},{default:e(()=>[we]),_:1}),t(u,{rounded:"xl",size:"x-large",variant:"outlined"},{default:e(()=>[Ve]),_:1})]),n("div",null,[t(u,{calss:"ma-2",rounded:"xl",size:"x-large",variant:"outlined"},{default:e(()=>[Ee]),_:1}),t(u,{calss:"ma-2",rounded:"xl",size:"x-large",variant:"outlined"},{default:e(()=>[Le]),_:1})])]),_:1})]),_:1}),t(m,{cols:"12",md:"8"},{default:e(()=>[t(_(pe))]),_:1})]),_:1})])]),_:1}))}}; const ke={class:"mx-16"}; const Ie={__name:"index",setup(o){const s=f([]); const a=f(!1); const i=f(0);async function c(){a.value=!0,await X().then(l=>{s.value=l.data.items,i.value=l.data.total}).catch(l=>{console.log(l)}),a.value=!1,console.log("card items=",s.value)}return c(),(l,r)=>(d(),h(P,{class:"mx-16",elevation:"0"},{default:e(()=>[n("div",ke,[t(v,{"no-gutters":""},{default:e(()=>[t(m,{cols:"12",md:"4"},{default:e(()=>[t(_(A),{card:s.value[0]},null,8,["card"])]),_:1}),t(S,{class:"my-9",vertical:""}),t(m,{cols:"12",md:"4"},{default:e(()=>[t(_(A),{card:s.value[1]},null,8,["card"])]),_:1}),t(S,{class:"my-9",vertical:""}),t(m,{cols:"12",md:"4"},{default:e(()=>[t(_(A),{card:s.value[2]},null,8,["card"])]),_:1})]),_:1})])]),_:1}))}}; const Se="/assets/poster--n1wukWi.png"; const Ae={};function De(o,s){return d(),h(R,{src:Se,height:"350"})}const Ce=w(Ae,[["render",De]]);function Eo(){return $({url:"/ai-event-list",method:"get"})}function Lo(o){return $({url:"/ai-event-page",method:"post",data:o})}function Oe(o){return $({url:"/ai-event-last",method:"post",data:o})}const Z=o=>(W("data-v-3bf1d1fc"),o=o(),K(),o); const Te={class:"bg_image"}; const Re=Z(()=>n("strong",{class:"text-h3 font-weight-bold text-white"},"행사안내",-1)); const je=Z(()=>n("div",{class:"py-6"},null,-1)); const Fe={__name:"index",setup(o){const s=f([]); const a=f(!1); const i=f(0); const c=f({page:1,sortBy:"createdAt",sortType:"desc"});async function l(){a.value=!0,await Oe(c.value).then(r=>{s.value=r.data.items,i.value=r.data.total}).catch(r=>{console.log(r)}),a.value=!1}return l(),B(c,r=>{l()},{deep:!0}),(r,p)=>(d(),y("div",Te,[t(v,{class:"mx-16"},{default:e(()=>[t(m,{cols:"1"}),t(m,{cols:"2",class:"mt-12"},{default:e(()=>[Re]),_:1}),t(m,{cols:"9"},{default:e(()=>[je,t(_(Ce))]),_:1})]),_:1})]))}}; const Be=w(Fe,[["__scopeId","data-v-3bf1d1fc"]]);function Po(o){return $({url:"/ai-notice-page",method:"post",data:o})}function Ne(o){return $({url:"/ai-notice-last",method:"post",data:o})}function ko(o){if(arguments.length===0||!o)return null;{const s=new Date(o);return`${s.getFullYear()}-${`00${s.getMonth()+1}`.substring(`00${s.getMonth()+1}`.length-2)}-${`00${s.getDate()}`.substring(`00${s.getDate()}`.length-2)} ${`00${s.getHours()}`.substring(`00${s.getHours()}`.length-2)}:${`00${s.getMinutes()}`.substring(`00${s.getMinutes()}`.length-2)}`}}function O(o){if(arguments.length===0||!o)return null;{const s=new Date(o);return`${s.getFullYear()}-${`00${s.getMonth()+1}`.substring(`00${s.getMonth()+1}`.length-2)}-${`00${s.getDate()}`.substring(`00${s.getDate()}`.length-2)}`}}const ze={class:"mx-16"}; const qe={class:"d-flex justify-space-between"}; const Ue=n("strong",{class:"pa-0 my-2 text-h6 font-weight-bold"}," 공지사항 ",-1); const He={class:"d-flex justify-space-between align-center"}; const Me={class:"d-flex align-baseline flex-1"}; const We={class:"text-body-2 font-weight-medium"}; const Ke={class:"text-body-2"}; const Ge={__name:"index",setup(o){const s=f([]); const a=f(!1); const i=f(0); const c=f({page:1,sortBy:"createdAt",sortType:"desc"});async function l(){a.value=!0,await Ne(c.value).then(r=>{s.value=r.data.items,i.value=r.data.total}).catch(r=>{console.log(r)}),a.value=!1}return l(),B(c,r=>{l()},{deep:!0}),(r,p)=>(d(),h(P,{class:"mx-16",elevation:"0"},{default:e(()=>[n("div",ze,[t(S,{class:"mb-1"}),n("div",qe,[Ue,t(u,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:e(()=>[G(" View All ")]),_:1})]),t(S,{class:"mb-1"}),t(ct,null,{default:e(()=>[(d(!0),y(I,null,Q(s.value,(g,V)=>(d(),h(H,{key:V},{default:e(()=>[n("div",He,[n("div",Me,[n("div",We,b(g.title),1)]),n("div",Ke,b(g.updatedAt?_(O)(g.updatedAt):_(O)(g.createdAt)),1)]),t(S,{class:"my-2"})]),_:2},1024))),128))]),_:1})])]),_:1}))}}; const Qe=n("div",{class:"py-2"},null,-1); const Ye=n("div",{class:"py-2"},null,-1); const Je=n("div",{class:"py-1"},null,-1); const Xe=n("div",{class:"py-2"},null,-1); const Ze={__name:"index",setup(o){return(s,a)=>(d(),y(I,null,[t(E,null,{default:e(()=>[Qe,t(_(oe)),Ye,t(_(ue)),Je,t(_(Pe)),Xe,t(_(Ie))]),_:1}),t(_(Be)),t(E,null,{default:e(()=>[t(_(Ge))]),_:1})],64))}}; const ts={class:"text-h5 mb-4"}; const es={class:"text-medium-emphasis text-body-2"}; const ss={class:"text-body-1 mb-4"}; const os={__name:"ThesisCard",props:{title:{type:String,default:null},url:{type:String,default:null},abstract:{type:String,default:null}},setup(o){const s=o;return(a,i)=>(d(),h(j,{class:"pa-2",flat:""},{default:e(()=>[t(v,null,{default:e(()=>[t(m,{cols:"12",md:"7"},{default:e(()=>[t(E,null,{default:e(()=>[n("h1",ts,b(s.title),1),n("div",es,b(s.abstract),1),n("h1",ss,b(s.url),1)]),_:1})]),_:1}),t(rt),t(m,{cols:"12",md:"3"},{default:e(()=>[t(R,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function ns(o){return $({url:"/ai-thesis-page",method:"post",data:o})}const as=n("div",{class:"py-1"},null,-1); const ls={class:"text-center"}; const cs={__name:"ThesisView",setup(o){const s=f(1); const a=f([]); const i=f(!1); const c=f(0); const l=f({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function r(){i.value=!0,await ns(l.value).then(p=>{a.value=p.data.items,c.value=p.data.total}).catch(p=>{console.log(p)}),i.value=!1}return r(),B(l,p=>{r()},{deep:!0}),(p,g)=>(d(),y(I,null,[(d(!0),y(I,null,Q(a.value,(V,L)=>(d(),y("div",{key:L},[t(_(os),{title:V.title,url:V.url,abstract:V.abstract?V.abstract.substring(0,250):null},null,8,["title","url","abstract"]),as]))),128)),n("div",ls,[t(it,{modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=V=>s.value=V),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}}; const rs={class:"text-h5 font-weight-bold"}; const is=n("div",{class:"py-1"},null,-1); const ds={__name:"index",setup(o){const{dataObj:s}=history.state;return console.log(s),(a,i)=>(d(),h(E,null,{default:e(()=>[n("strong",rs,"검색결과: "+b(_(s).searchStr),1),t(cs),is]),_:1}))}}; const us={class:"date_item"}; const _s={__name:"SelectEnforceDate",props:{modelValue:{type:Object,default:null},items:{type:Object,default:null}},emits:["update:modelValue"],setup(o,{emit:s}){const a=o; const i=s; const c=ht({get(){return a.modelValue},set(r){return i("update:modelValue",r)}});function l(r){console.log("select value=",r),c.value=r}return(r,p)=>(d(),h(U,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=g=>c.value=g),items:o.items,"item-title":"enforceDate","item-value":"id",variant:"outlined",density:"compact","menu-props":{closeOnContentClick:!0},"return-object":"","single-line":"","hide-details":""},{item:e(({item:g})=>[(d(),h(H,{key:g.title,value:g.value,density:"compact","min-height":"5",onClick:V=>l(g)},{default:e(()=>[n("span",us,b(_(O)(g.title)),1)]),_:2},1032,["value","onClick"]))]),selection:e(({item:g})=>[n("span",null,b(_(O)(g.title)),1)]),_:1},8,["modelValue","items"]))}}; const ms=w(_s,[["__scopeId","data-v-ef14bc24"]]);function hs(){return $({url:"/ai-privacy-policy",method:"get"})}const tt=$t("privacyPolicy",{state:()=>({list:[]}),actions:{async loadPrivacyPolicys(){await hs().then(o=>{this.list=o.data.items}).catch(o=>{console.log(">>Store-load PrivacyPolicys fail. error=",o)})}},persist:!0}); const fs={class:"d-flex justify-space-between"}; const ps={class:"d-flex flex-wrap justify-end",style:{width:"250px"}}; const gs=n("div",{class:"py-1"},null,-1); const vs=["textContent"]; const xs={__name:"PrivacyPolicyView",setup(o){const s=tt(); const a=f(s.list[0]);function i(c){console.log("sel item=",c),a.value=c}return(c,l)=>{const r=k("BaseCard");return d(),h(r,null,{default:e(()=>[n("div",fs,[t(dt,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:e(()=>[G(" 개인정보처리방침 ")]),_:1})]),n("div",ps,[t(_(ms),{modelValue:a.value,"onUpdate:modelValue":[l[0]||(l[0]=p=>a.value=p),l[1]||(l[1]=p=>i(c.value))],items:_(s).list,class:"ms-2 select"},null,8,["modelValue","items"])]),gs,t(P,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"300"},{default:e(()=>[n("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:b(a.value?a.value.terms:null)},null,8,vs)]),_:1})]),_:1})}}}; const bs=n("div",{class:"py-2"},null,-1); const $s={__name:"index",setup(o){return(s,a)=>(d(),h(E,null,{default:e(()=>[bs,t(_(xs))]),_:1}))}}; const ys={}; const ws=n("strong",{class:"text-subtitle-1 font-weight-bold"},"재단소개",-1); const Vs=n("strong",{class:"text-subtitle-1 font-weight-bold"},"AI윤리",-1);function Es(o,s){return d(),h(T,{color:"indigo-darken-3",flat:"",height:"48"},{default:e(()=>[t(v,{class:"d-flex align-center justify-center"},{default:e(()=>[t(u,{to:"/introduce/introduce"},{default:e(()=>[ws]),_:1}),t(u,{to:"/introduce/ai-ethics"},{default:e(()=>[Vs]),_:1})]),_:1})]),_:1})}const Ls=w(ys,[["render",Es]]); const Ps={__name:"index",setup(o){return(s,a)=>{const i=k("router-view");return d(),y(I,null,[t(_(Ls)),t(i)],64)}}}; const ks={}; const Is=n("strong",{class:"text-subtitle-1 font-weight-bold"},"논문",-1); const Ss=n("strong",{class:"text-subtitle-1 font-weight-bold"},"보고서",-1); const As=n("strong",{class:"text-subtitle-1 font-weight-bold"},"기사",-1); const Ds=n("strong",{class:"text-subtitle-1 font-weight-bold"},"가이드라인",-1); const Cs=n("strong",{class:"text-subtitle-1 font-weight-bold"},"교육커리큘럼",-1); const Os=n("strong",{class:"text-subtitle-1 font-weight-bold"},"참고사이트",-1);function Ts(o,s){return d(),h(T,{color:"indigo-darken-3",flat:"",height:"48"},{default:e(()=>[t(v,{class:"d-flex align-center justify-center"},{default:e(()=>[t(u,{to:"/archive/thesis"},{default:e(()=>[Is]),_:1}),t(u,{to:"/archive/report"},{default:e(()=>[Ss]),_:1}),t(u,{to:"/archive/article"},{default:e(()=>[As]),_:1}),t(u,{to:"/archive/guideline"},{default:e(()=>[Ds]),_:1}),t(u,{to:"/archive/curriculum"},{default:e(()=>[Cs]),_:1}),t(u,{to:"/archive/refSite"},{default:e(()=>[Os]),_:1})]),_:1})]),_:1})}const Rs=w(ks,[["render",Ts]]); const js={__name:"index",setup(o){return(s,a)=>{const i=k("router-view");return d(),y(I,null,[t(_(Rs)),t(i)],64)}}}; const Fs={}; const Bs=n("strong",{class:"text-subtitle-1 font-weight-bold"},"공지사항",-1); const Ns=n("strong",{class:"text-subtitle-1 font-weight-bold"},"관련행사",-1); const zs=n("strong",{class:"text-subtitle-1 font-weight-bold"},"행사캘린더",-1); const qs=n("strong",{class:"text-subtitle-1 font-weight-bold"},"행사신청",-1);function Us(o,s){return d(),h(T,{color:"indigo-darken-3",flat:"",height:"48"},{default:e(()=>[t(v,{class:"d-flex align-center justify-center"},{default:e(()=>[t(u,{to:"/news/notice"},{default:e(()=>[Bs]),_:1}),t(u,{to:"/news/event"},{default:e(()=>[Ns]),_:1}),t(u,{to:"/news/event-calendar"},{default:e(()=>[zs]),_:1}),t(u,{to:"/news/event-regist"},{default:e(()=>[qs]),_:1})]),_:1})]),_:1})}const Hs=w(Fs,[["render",Us]]); const Ms={__name:"index",setup(o){return(s,a)=>{const i=k("router-view");return d(),y(I,null,[t(_(Hs)),t(i)],64)}}}; const Ws={}; const Ks=o=>(W("data-v-246d6314"),o=o(),K(),o); const Gs={class:"bg-white shadow"}; const Qs=Ks(()=>n("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[n("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1)); const Ys=[Qs];function Js(o,s){return d(),y("header",Gs,Ys)}const Xs=w(Ws,[["render",Js],["__scopeId","data-v-246d6314"]]);const Zs={};const to=[{path:"/",name:"Home",meta:{title:"Home"},component:Jt,redirect:"/home",children:[{path:"home",name:"Home",component:Ze},{path:"result",name:"Result",component:ds},{path:"privacy-polocy",name:"PrivacyPolocy",component:$s},{path:"introduce",name:"introduce",component:Ps,redirect:"/introduce/introduce",meta:{title:"소개"},children:[{path:"introduce",name:"Introduce",meta:{title:"재단소개"},component:()=>x(()=>import("./index--qpA5nTe.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"ai-ethics",name:"AiEthics",meta:{title:"AI윤리"},component:()=>x(()=>import("./index-yZnqrBmY.js"),__vite__mapDeps([5,1,2,3,4]))}]},{path:"archive",name:"자료실",component:js,redirect:"/archive/thesis",meta:{title:"Archive"},children:[{path:"thesis",name:"Thesis List",meta:{title:"논문 관리"},component:()=>x(()=>import("./index-FxEBR7JS.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12,13]))},{path:"report",name:"Report List",meta:{title:"보고서 관리"},component:()=>x(()=>import("./index-RiP-W_zI.js"),__vite__mapDeps([14,2,3,4,7,8,9,10,11,12,13]))},{path:"article",name:"Article List",meta:{title:"기사 관리"},component:()=>x(()=>import("./index-hBhLnTRD.js"),__vite__mapDeps([15,2,3,4,7,8,9,10,11,12,13]))},{path:"guideline",name:"Guideline List",meta:{title:"가이드라인 관리"},component:()=>x(()=>import("./index-4nebG6dV.js"),__vite__mapDeps([16,2,3,4,7,8,9,10,11,12,13]))},{path:"/archive/refSite",name:"ReferenceSite List",meta:{title:"참고사이트 관리"},component:()=>x(()=>import("./index-nih6WNnT.js"),__vite__mapDeps([17,2,3,4,7,8,9,10,11,12,13]))},{path:"curriculum",name:"Curriculum List",meta:{title:"교육커리큘럼 관리"},component:()=>x(()=>import("./index-s8IVxTDl.js"),__vite__mapDeps([18,2,3,4,7,8,9,10,11,12,13]))}]},{path:"news",name:"News",component:Ms,redirect:"/news/notice",meta:{title:"소식"},children:[{path:"notice",name:"Notice",meta:{title:"공지사항"},component:()=>x(()=>import("./index-jp5xTtx0.js"),__vite__mapDeps([19,2,3,4,7,8,9,10,11,12,13]))},{path:"event",name:"Event",meta:{title:"관련행사"},component:()=>x(()=>import("./index-iUHLcLgm.js"),__vite__mapDeps([20,2,3,4,7,8,9,10,11,12,13]))},{path:"event-calendar",name:"Event Calendar",meta:{title:"행사캘린더"},component:()=>x(()=>import("./index-lcjup7mg.js"),__vite__mapDeps([21,22,23,3,2,4,7,8,9,10,11,12,13]))},{path:"event-regist",name:"Evenet Regist",meta:{title:"행사신청"},component:()=>x(()=>import("./index-nhALcBS3.js"),__vite__mapDeps([24,2,3,4,7,8,9,10,11,12,13]))}]},{path:"suggest",name:"suggest",component:()=>x(()=>import("./index-w8NJXwep.js"),__vite__mapDeps([25,2,3,4,7,8,9,10,11,12,13])),redirect:"/suggest/faq",meta:{title:"문의/제안"},children:[{path:"faq",name:"FAQ",meta:{title:"FAQ"},component:()=>x(()=>import("./index-JuUfoUzx.js"),__vite__mapDeps([26,2,3,4,7,8,9,10,11,12,13]))},{path:"suggest",name:"Suggest",meta:{title:"문의/제안"},component:()=>x(()=>import("./index-JIoMWmPN.js"),__vite__mapDeps([27,2,3,4]))}]},{path:"/:path(.*)",component:Xs}]}]; const eo=xt({history:bt(Zs.BASE_URL),routes:to}); const so={}; const oo=n("strong",{class:"text-h4 font-weight-black"},"FAIR-AI",-1);function no(o,s){return d(),h(u,{"prepend-icon":"mdi-lightning-bolt-circle",variant:"text",href:"/home"},{prepend:e(()=>[t(ut,{color:"blue-grey",size:"40"})]),default:e(()=>[oo]),_:1})}const ao=w(so,[["render",no]]); const lo={class:"card-header"}; const co={class:"tio- text-18"}; const ro={class:"card-title"}; const io={__name:"BaseCard",props:{cardTitle:{type:String,default:null},icon:{type:String,default:null},noPadding:{type:Boolean,default:!1}},setup(o){const s=o;return(a,i)=>(d(),h(j,{class:"card",elevation:"8"},{default:e(()=>[F(n("div",lo,[n("i",co,b(s.icon),1),n("div",ro,b(s.cardTitle),1)],512),[[ft,s.cardTitle]]),pt(a.$slots,"default",{},void 0,!0)]),_:3}))}}; const uo=w(io,[["__scopeId","data-v-54f5428c"]]);function _o(o){o.component("Logo",ao).component("BaseCard",uo)}const et=yt();et.use(wt);function mo(o){o.use(Pt).use(eo).use(et).use(Vt).use(_o).component("DownloadExcel",Et)}const ho={__name:"App",setup(o){return tt().loadPrivacyPolicys(),(a,i)=>{const c=k("router-view");return d(),h(c)}}}; const st=gt(ho);mo(st);st.mount("#app");export{cs as _,O as a,Po as b,Lo as c,Eo as d,w as e,Vo as f,ko as p,$ as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index--qpA5nTe.js","assets/Content-v1-59E6FxGR.js","assets/vuetify-DnXmRN3y.js","assets/@vue-L5kv75rD.js","assets/vuetify-FQNeEAzr.css","assets/index-yZnqrBmY.js","assets/index-FxEBR7JS.js","assets/vue-router-87F3wI6o.js","assets/axios-L6U4YIEh.js","assets/pinia-5t0_ST69.js","assets/pinia-plugin-persistedstate-XbYvz584.js","assets/vue-detect-browser-HAC5R545.js","assets/vue-json-excel3-vW_7OF4G.js","assets/@mdi-z3tLSia1.css","assets/index-RiP-W_zI.js","assets/index-hBhLnTRD.js","assets/index-4nebG6dV.js","assets/index-nih6WNnT.js","assets/index-s8IVxTDl.js","assets/index-jp5xTtx0.js","assets/index-iUHLcLgm.js","assets/index-lcjup7mg.js","assets/@fullcalendar-aIu1rIYP.js","assets/preact-yBSrjXcw.js","assets/index-nhALcBS3.js","assets/index-w8NJXwep.js","assets/index-JuUfoUzx.js","assets/index-JIoMWmPN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}