/* empty css             */import{c as ut,S as X,V as _,a as z,b as _t,d as w,e as f,f as o,g as I,h as M,i as ft,j as P,k as L,l as U,m as V,n as mt,o as Z,p as ht,q as pt,r as gt,s as O,t as vt,u as xt}from"./vuetify-JpZM_RNA.js";import{r as g,$ as D,U as W,l as u,a0 as h,a1 as e,I as t,a2 as a,y as m,a3 as Q,a4 as bt,a5 as N,a6 as F,v as $,a7 as tt,w as G,p as S,u as B,F as R,a8 as et,k as yt,W as $t,q as wt,a9 as kt}from"./@vue-Gg_kXOMH.js";import{u as st,c as At,a as It}from"./vue-router-fKhHmboF.js";import{a as at}from"./axios-L6U4YIEh.js";import{d as Vt,c as Et}from"./pinia-ctynUR1M.js";import{s as Pt}from"./pinia-plugin-persistedstate-XbYvz584.js";import{b as St}from"./vue-detect-browser-HAC5R545.js";import{s as Lt}from"./vue-json-excel3-belu5Iru.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const Dt={VBtn:{}},Ot=ut({defaults:Dt,theme:{defaultTheme:"light",themes:{light:{colors:{background:"#DEDEDE",primary:"#472AB2",secondary:"#4AEAD8"}}}},icons:{defaultSet:"mdi"}}),Rt="modulepreload",Ct=function(s){return"/"+s},Y={},b=function(l,n,d){let i=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");i=Promise.all(n.map(r=>{if(r=Ct(r),r in Y)return;Y[r]=!0;const p=r.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(!!d)for(let T=c.length-1;T>=0;T--){const j=c[T];if(j.href===r&&(!p||j.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${v}`))return;const E=document.createElement("link");if(E.rel=p?"stylesheet":Rt,p||(E.as="script",E.crossOrigin=""),E.href=r,document.head.appendChild(E),p)return new Promise((T,j)=>{E.addEventListener("load",T),E.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${r}`)))})}))}return i.then(()=>l()).catch(c=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c})},Tt={class:"mx-12"},Nt=a("strong",{class:"text-20 font-weight-bold"},"소개",-1),Ft=a("strong",{class:"text-20 font-weight-bold"},"자료실",-1),jt=a("strong",{class:"text-20 font-weight-bold"},"소식",-1),Bt=a("strong",{class:"text-20 font-weight-bold"},"문의·제안",-1),qt={__name:"Header",setup(s){const l=g(0);function n(){l.value++,console.log("scrollInvoked.value=",l.value)}return(d,i)=>{const c=D("logo");return W((u(),h(z,{color:"transparent",border:"",flat:"",height:"60"},{prepend:e(()=>[t(c),a("div",Tt,[t(_,{to:"/introduce",variant:"text"},{default:e(()=>[Nt]),_:1}),t(_,{to:"/archive",variant:"text"},{default:e(()=>[Ft]),_:1}),t(_,{to:"/news",variant:"text"},{default:e(()=>[jt]),_:1}),t(_,{to:"/suggest",variant:"text"},{default:e(()=>[Bt]),_:1})])]),_:1})),[[X,n,void 0,{self:!0}]])}}},zt={__name:"MainView",setup(s){const l=g(0);function n(){l.value++,console.log("scrollInvoked.value=",l.value)}return(d,i)=>{const c=D("router-view");return W((u(),h(_t,null,{default:e(()=>[t(c)]),_:1})),[[X,n,void 0,{self:!0}]])}}},y=(s,l)=>{const n=s.__vccOpts||s;for(const[d,i]of l)n[d]=i;return n},Ut={},Ht={class:"pa-4 mx-8"},Mt=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"소개",-1),Wt=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"자료실",-1),Gt=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"소식",-1),Kt=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"문의/제안",-1),Qt=a("strong",{class:"text-16 font-weight-bold text-grey-darken-1"}," 행사등록 신청 ",-1),Yt=a("strong",{class:"text-16 font-weight-bold text-grey-darken-1"},"개인정보처리방침",-1),Jt=a("strong",{class:"text-16 font-weight-bold"}," 관련사이트 ",-1),Xt={class:"d-flex flex-wrap mt-4 justify-end"};function Zt(s,l){const n=D("logo");return u(),h(M,{color:"#F4F4F4"},{default:e(()=>[t(w,null,{default:e(()=>[a("div",Ht,[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12",md:"3"},{default:e(()=>[t(n)]),_:1}),t(o,{cols:"12",md:"3"},{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(_,{to:"/introduce",variant:"text",density:"compact"},{default:e(()=>[Mt]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(_,{to:"/archive",variant:"text",density:"compact"},{default:e(()=>[Wt]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(_,{to:"/news",variant:"text",density:"compact"},{default:e(()=>[Gt]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(_,{to:"/suggest",variant:"text",density:"compact"},{default:e(()=>[Kt]),_:1})]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",md:"3"},{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(_,{to:"/news/event-regist",variant:"text",density:"compact"},{default:e(()=>[Qt]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(_,{to:"/privacy-polocy",variant:"text",density:"compact"},{default:e(()=>[Yt]),_:1})]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",md:"3",class:"text-end"},{default:e(()=>[t(I,{items:["나의AAC","NC문화재단","NC SOFT"],class:"ml-4",variant:"underlined",density:"compact"},{label:e(()=>[Jt]),_:1}),a("div",Xt,[t(_,{class:"mx-3",color:"grey",icon:"mdi-facebook",variant:"outlined"}),t(_,{color:"grey",icon:"mdi-youtube",variant:"outlined"})])]),_:1})]),_:1})])]),_:1})]),_:1})}const te=y(Ut,[["render",Zt]]),ee={class:"bg_image"},se={__name:"index",setup(s){return(l,n)=>(u(),h(ft,null,{default:e(()=>[a("div",ee,[t(m(qt)),t(m(zt)),t(m(te))])]),_:1}))}},ae=y(se,[["__scopeId","data-v-4e681e11"]]),lt={__name:"SearchField",emits:["search","click"],setup(s,{emit:l}){const n=g(""),d=l;function i(r){console.log("searchClick()=",r),d("search",r)}function c(){console.log("Click()="),d("click")}return(r,p)=>(u(),h(P,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=v=>n.value=v),placeholder:"검색",class:"mr-16",color:"primary","bg-color":"white",style:{"max-width":"600px"},variant:"outlined",rounded:"",density:"comfortable","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"",autofocus:"",onClick:p[1]||(p[1]=Q(v=>c(),["stop"])),onKeyup:p[2]||(p[2]=bt(Q(v=>i(n.value),["prevent"]),["enter"]))},null,8,["modelValue"]))}},K=s=>(N("data-v-c6afe764"),s=s(),F(),s),le=K(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter"},"AI 윤리 관련")],-1)),oe=K(()=>a("div",null,[a("strong",{class:"text-68 font-weight-black text-black letter"},"최근 이슈"),a("strong",{class:"text-68 font-weight-light text-black letter"},"에 대해")],-1)),ne=K(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter"},"알아보세요.")],-1)),ce={__name:"index",setup(s){const l=st();function n(d){console.log("keyword=",d),l.push({name:"Search"})}return(d,i)=>(u(),h(w,null,{default:e(()=>[t(f,{align:"center",class:"mx-0",style:{height:"460px"}},{default:e(()=>[t(o,{cols:"6"},{default:e(()=>[le,oe,ne]),_:1}),t(o,{cols:"6"},{default:e(()=>[t(m(lt),{class:"ms-2",onClick:n})]),_:1})]),_:1})]),_:1}))}},ie=y(ce,[["__scopeId","data-v-c6afe764"]]);function re(s){return s!==void 0?`http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/card/${s}`:void 0}const H=s=>(N("data-v-203de49e"),s=s(),F(),s),de=H(()=>a("div",null,[a("h6",{class:"text-subtitle-1 mb-4"},"논문 해외")],-1)),ue={class:"text-30 letter","font-weight-bold":""},_e=H(()=>a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"저자")],-1)),fe=H(()=>a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"발행")],-1)),me=H(()=>a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"연도")],-1)),he={__name:"ThesisCard",props:{card:{type:Object,default:null}},setup(s){const l=s;return(n,d)=>(u(),h(w,null,{default:e(()=>[l.card?(u(),h(L,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[de,a("div",null,[t(L,{height:"150",elevation:"0"},{default:e(()=>[a("strong",ue,$(l.card.thesis?l.card.thesis.title:""),1)]),_:1})]),a("div",null,[t(f,null,{default:e(()=>[t(o,{cols:"12",md:"5"},{default:e(()=>[t(U,{width:"163",height:"210",src:m(re)(l.card.id)},null,8,["src"])]),_:1}),t(o,{cols:"12",md:"7"},{default:e(()=>[_e,fe,me]),_:1})]),_:1})])]),_:1})):tt("",!0)]),_:1}))}},C=y(he,[["__scopeId","data-v-203de49e"]]),k=at.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/fair/api",timeout:5e3});k.interceptors.request.use(s=>s,s=>(console.log("request err=",s),Promise.reject(s)));k.interceptors.response.use(s=>{const l=s.data;if(console.log("res.code=",l.code),l.code!==2e4){if(console.log("res.message=",l.message),!(l.code===50008||l.code===50012||l.code===50014)){if(l.code===60204||l.code===60205)return s}return Promise.reject(new Error(l.message||"Error"))}else return s},s=>(console.log("response err=",s),Promise.reject(s)));const ot=at.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000",timeout:3e4});ot.interceptors.request.use(s=>(s.headers["Content-Type"]="multipart/form-data",s),s=>(console.log("requestStorage err=",s),Promise.reject(s)));ot.interceptors.response.use(s=>s,s=>(console.log("requestStorage err=",s),Promise.reject(s)));function nt(s){return k({url:"/ai-card",method:"get",data:s})}const pe={__name:"index",setup(s){const l=g([]),n=g(!1),d=g(0);async function i(){n.value=!0,await nt().then(c=>{l.value=c.data.items,d.value=c.data.total}).catch(c=>{console.log(c)}),n.value=!1,console.log("card items=",l.value)}return i(),(c,r)=>(u(),h(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(C),{card:l.value[0]},null,8,["card"])]),_:1}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(C),{card:l.value[1]},null,8,["card"])]),_:1}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(C),{card:l.value[2]},null,8,["card"])]),_:1})]),_:1}))}},ge={class:"text-30 font-weight-black"},ve=a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"매일경제 자세히보기")],-1),J={__name:"ArticleCard",props:{card:{type:Object,default:null}},setup(s){const l=s;return(n,d)=>(u(),h(w,null,{default:e(()=>[l.card?(u(),h(L,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[a("div",null,[t(U,{width:"410",height:"226",cover:"",src:l.card.thumbnailUrl},null,8,["src"])]),a("div",null,[t(L,{class:"my-4",height:"100",elevation:"0"},{default:e(()=>[a("strong",ge,$(l.card?l.card.title:""),1)]),_:1})]),ve]),_:1})):tt("",!0)]),_:1}))}};function Qa(s){return k({url:"/ai-article-page",method:"post",data:s})}function xe(){return k({url:"/ai-article-last",method:"get"})}const be={__name:"ArticleView",setup(s){const l=g([]),n=g(!1),d=g(0);async function i(){n.value=!0,await xe().then(c=>{l.value=c.data.items,d.value=c.data.total}).catch(c=>{console.log(c)}),n.value=!1,console.log("article card items=",l.value)}return i(),(c,r)=>(u(),h(L,{class:"mx-0",elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(V,{thickness:3}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(m(J),{card:l.value[0]},null,8,["card"])]),_:1}),t(V,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(m(J),{card:l.value[1]},null,8,["card"])]),_:1})]),_:1})]),_:1}))}},ye=a("div",{style:{height:"180px"}},[a("strong",{class:"text-48 font-weight-black mb-24"},"최근AI이슈")],-1),$e=a("div",{class:"mt-24"},[a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"이슈관련 키워드")],-1),we=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#AI윤리",-1),ke=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#CES2024",-1),Ae=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#의료AI",-1),Ie=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#자율주행",-1),Ve=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#강인공지능",-1),Ee=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#딥러닝",-1),Pe=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#학습 콘텐츠",-1),Se={__name:"index",setup(s){return(l,n)=>(u(),h(L,{elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(w,null,{default:e(()=>[ye,$e,a("div",null,[t(_,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[we]),_:1})]),a("div",null,[t(_,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[ke]),_:1}),t(_,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ae]),_:1})]),a("div",null,[t(_,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ie]),_:1}),t(_,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ve]),_:1})]),a("div",null,[t(_,{calss:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ee]),_:1}),t(_,{calss:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Pe]),_:1})])]),_:1})]),_:1}),t(o,{cols:"12",md:"8"},{default:e(()=>[t(m(be))]),_:1})]),_:1})]),_:1}))}},Le={__name:"index",setup(s){const l=g([]),n=g(!1),d=g(0);async function i(){n.value=!0,await nt().then(c=>{l.value=c.data.items,d.value=c.data.total}).catch(c=>{console.log(c)}),n.value=!1,console.log("card items=",l.value)}return i(),(c,r)=>(u(),h(L,{elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(C),{card:l.value[0]},null,8,["card"])]),_:1}),t(V,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(C),{card:l.value[1]},null,8,["card"])]),_:1}),t(V,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(C),{card:l.value[2]},null,8,["card"])]),_:1})]),_:1})]),_:1}))}},De="/assets/poster--n1wukWi.png",Oe={};function Re(s,l){return u(),h(U,{src:De,height:"380"})}const Ce=y(Oe,[["render",Re]]);function Ya(){return k({url:"/ai-event-list",method:"get"})}function Ja(s){return k({url:"/ai-event-page",method:"post",data:s})}function Te(s){return k({url:"/ai-event-last",method:"post",data:s})}const ct=s=>(N("data-v-464d2754"),s=s(),F(),s),Ne={class:"bg_image"},Fe=ct(()=>a("strong",{class:"text-48 font-weight-bold text-white"},"행사안내",-1)),je=ct(()=>a("div",{class:"py-6"},null,-1)),Be={__name:"index",setup(s){const l=g([]),n=g(!1),d=g(0),i=g({page:1,sortBy:"createdAt",sortType:"desc"});async function c(){n.value=!0,await Te(i.value).then(r=>{l.value=r.data.items,d.value=r.data.total}).catch(r=>{console.log(r)}),n.value=!1}return c(),G(i,r=>{c()},{deep:!0}),(r,p)=>(u(),S("div",Ne,[t(f,{class:"mx-16"},{default:e(()=>[t(o,{cols:"1"}),t(o,{cols:"2",class:"mt-12"},{default:e(()=>[Fe]),_:1}),t(o,{cols:"9"},{default:e(()=>[je,t(m(Ce))]),_:1})]),_:1})]))}},qe=y(Be,[["__scopeId","data-v-464d2754"]]);function Xa(s){return k({url:"/ai-notice-page",method:"post",data:s})}function ze(s){return k({url:"/ai-notice-last",method:"post",data:s})}function Za(s){if(arguments.length===0||!s)return null;{const l=new Date(s);return`${l.getFullYear()}-${`00${l.getMonth()+1}`.substring(`00${l.getMonth()+1}`.length-2)}-${`00${l.getDate()}`.substring(`00${l.getDate()}`.length-2)} ${`00${l.getHours()}`.substring(`00${l.getHours()}`.length-2)}:${`00${l.getMinutes()}`.substring(`00${l.getMinutes()}`.length-2)}`}}function q(s){if(arguments.length===0||!s)return null;{const l=new Date(s);return`${l.getFullYear()}-${`00${l.getMonth()+1}`.substring(`00${l.getMonth()+1}`.length-2)}-${`00${l.getDate()}`.substring(`00${l.getDate()}`.length-2)}`}}const Ue={class:"mx-16"},He={class:"d-flex justify-space-between",style:{height:"60px"}},Me=a("strong",{class:"text-20 font-weight-bold"}," 공지사항 ",-1),We={class:"d-flex justify-space-between align-center",style:{height:"40px"}},Ge={class:"d-flex align-baseline flex-1"},Ke={class:"text-16 font-weight-medium"},Qe={class:"text-body-2"},Ye={__name:"index",setup(s){const l=g([]),n=g(!1),d=g(0),i=g({page:1,sortBy:"createdAt",sortType:"desc"});async function c(){n.value=!0,await ze(i.value).then(r=>{l.value=r.data.items,d.value=r.data.total}).catch(r=>{console.log(r)}),n.value=!1}return c(),G(i,r=>{c()},{deep:!0}),(r,p)=>(u(),h(L,{class:"mx-16",elevation:"0"},{default:e(()=>[a("div",Ue,[t(V,{class:"mb-1",color:"black",thickness:3}),a("div",He,[Me,t(_,{size:"small",variant:"flat",class:"text-primary text-capitalize"},{default:e(()=>[B(" View All ")]),_:1})]),t(V,{class:"mb-1"}),t(mt,null,{default:e(()=>[(u(!0),S(R,null,et(l.value,(v,A)=>(u(),h(Z,{key:A},{default:e(()=>[a("div",We,[a("div",Ge,[a("div",Ke,$(v.title),1)]),a("div",Qe,$(v.updatedAt?m(q)(v.updatedAt):m(q)(v.createdAt)),1)]),t(V,{class:"my-2"})]),_:2},1024))),128))]),_:1})])]),_:1}))}},Je=a("div",{class:"py-1"},null,-1),Xe=a("div",{class:"py-2"},null,-1),Ze={__name:"index",setup(s){return(l,n)=>(u(),S(R,null,[t(w,{class:"w-75"},{default:e(()=>[t(m(ie)),t(m(pe)),Je,t(m(Se)),Xe,t(m(Le))]),_:1}),t(m(qe)),t(w,null,{default:e(()=>[t(m(Ye))]),_:1})],64))}},x=s=>(N("data-v-dc501bb5"),s=s(),F(),s),ts=x(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"AI 윤리 관련 ")],-1)),es=x(()=>a("div",null,[a("strong",{class:"text-68 font-weight-black text-black letter text-disabled"},"최근 이슈"),a("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"에 대해")],-1)),ss=x(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"알아보세요.")],-1)),as=x(()=>a("strong",{class:"text-16 text-black text-medium-emphasis"},"인기검색어",-1)),ls=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#AI윤리",-1)),os=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#CES2024",-1)),ns=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#의료AI",-1)),cs=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#자율주행",-1)),is=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#강인공지능",-1)),rs=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#딥러닝",-1)),ds=x(()=>a("div",{class:"ml-6"},"전체",-1)),us=x(()=>a("div",{class:"ml-3"},"논문명",-1)),_s=x(()=>a("div",{class:"ml-6"},"저자",-1)),fs=x(()=>a("div",{class:"ml-6"},"초록",-1)),ms=x(()=>a("div",{class:"ml-6"},"국내",-1)),hs=x(()=>a("div",{class:"ml-4"},"인용수",-1)),ps=x(()=>a("div",{class:"py-16"},null,-1)),gs=x(()=>a("div",{class:"py-16"},null,-1)),vs=x(()=>a("div",{class:"py-16"},null,-1)),xs={__name:"index",setup(s){const l=st();function n(d){console.log("keyword=",d),l.push({name:"Search"})}return(d,i)=>(u(),h(w,null,{default:e(()=>[t(f,{align:"center",class:"mx-0",style:{height:"460px"}},{default:e(()=>[t(o,{cols:"6"},{default:e(()=>[ts,es,ss]),_:1}),t(o,{cols:"6"},{default:e(()=>[t(m(lt),{class:"ms-2",onClick:n})]),_:1})]),_:1}),t(ht,{class:"mb-16",color:"blue-lighten-4",elevation:"0",rounded:""},{default:e(()=>[t(pt,null,{title:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[as,t(_,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[ls]),_:1}),t(_,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[os]),_:1}),t(_,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[ns]),_:1}),t(_,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[cs]),_:1}),t(_,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[is]),_:1}),t(_,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[rs]),_:1})]),_:1})]),_:1})]),text:e(()=>[t(w,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,null,{default:e(()=>[t(gt,{inline:""},{default:e(()=>[t(O,{label:"논문",value:"one"}),t(O,{label:"보고서",value:"two"}),t(O,{label:"기사",value:"three"}),t(O,{label:"가이드라인",value:"one"}),t(O,{label:"참고사이트",value:"two"}),t(O,{label:"교육커리큘럼",value:"three"}),t(O,{label:"행사",value:"three"})]),_:1})]),_:1})]),_:1}),t(V),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[ds]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[us]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[_s]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[B(" 발행기관 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[fs]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[B(" 발행년도 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[ms]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[hs]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[B(" 작성언어 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(P,{label:"선택하세요",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(f,null,{default:e(()=>[t(o)]),_:1})]),_:1})]),_:1})]),_:1}),ps,gs,vs]),_:1}))}},bs=y(xs,[["__scopeId","data-v-dc501bb5"]]),ys={__name:"index",setup(s){const{dataObj:l}=history.state;return console.log(l),(n,d)=>(u(),h(w,{class:"w-75"},{default:e(()=>[t(m(bs))]),_:1}))}},$s={class:"text-h5 mb-4"},ws={class:"text-medium-emphasis text-body-2"},ks={class:"text-body-1 mb-4"},As={__name:"ThesisCard",props:{title:{type:String,default:null},url:{type:String,default:null},abstract:{type:String,default:null}},setup(s){const l=s;return(n,d)=>(u(),h(M,{class:"pa-2",flat:""},{default:e(()=>[t(f,null,{default:e(()=>[t(o,{cols:"12",md:"7"},{default:e(()=>[t(w,null,{default:e(()=>[a("h1",$s,$(l.title),1),a("div",ws,$(l.abstract),1),a("h1",ks,$(l.url),1)]),_:1})]),_:1}),t(vt),t(o,{cols:"12",md:"3"},{default:e(()=>[t(U,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function Is(s){return k({url:"/ai-thesis-page",method:"post",data:s})}const Vs=a("div",{class:"py-1"},null,-1),Es={class:"text-center"},Ps={__name:"ThesisView",setup(s){const l=g(1),n=g([]),d=g(!1),i=g(0),c=g({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function r(){d.value=!0,await Is(c.value).then(p=>{n.value=p.data.items,i.value=p.data.total}).catch(p=>{console.log(p)}),d.value=!1}return r(),G(c,p=>{r()},{deep:!0}),(p,v)=>(u(),S(R,null,[(u(!0),S(R,null,et(n.value,(A,E)=>(u(),S("div",{key:E},[t(m(As),{title:A.title,url:A.url,abstract:A.abstract?A.abstract.substring(0,250):null},null,8,["title","url","abstract"]),Vs]))),128)),a("div",Es,[t(xt,{modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=A=>l.value=A),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},Ss={class:"text-h5 font-weight-bold"},Ls=a("div",{class:"py-1"},null,-1),Ds={__name:"index",setup(s){const{dataObj:l}=history.state;return console.log(l),(n,d)=>(u(),h(w,null,{default:e(()=>[a("strong",Ss,"검색결과: "+$(m(l).searchStr),1),t(Ps),Ls]),_:1}))}},Os={class:"date_item"},Rs={__name:"SelectEnforceDate",props:{modelValue:{type:Object,default:null},items:{type:Object,default:null}},emits:["update:modelValue"],setup(s,{emit:l}){const n=s,d=l,i=yt({get(){return n.modelValue},set(r){return d("update:modelValue",r)}});function c(r){console.log("select value=",r),i.value=n.items[r]}return(r,p)=>(u(),h(I,{modelValue:i.value,"onUpdate:modelValue":p[0]||(p[0]=v=>i.value=v),items:s.items,"item-title":"enforceDate","item-value":"id",variant:"outlined",density:"compact","menu-props":{closeOnContentClick:!0},"return-object":"","single-line":"","hide-details":""},{item:e(({item:v,index:A})=>[(u(),h(Z,{key:v.title,value:v.value,density:"compact","min-height":"5",onClick:E=>c(A)},{default:e(()=>[a("span",Os,$(m(q)(v.title)),1)]),_:2},1032,["value","onClick"]))]),selection:e(({item:v})=>[a("span",null,$(m(q)(v.title)),1)]),_:1},8,["modelValue","items"]))}},Cs=y(Rs,[["__scopeId","data-v-545ca651"]]);function Ts(){return k({url:"/ai-privacy-policy",method:"get"})}const it=Vt("privacyPolicy",{state:()=>({list:[]}),actions:{async loadPrivacyPolicys(){await Ts().then(s=>{this.list=s.data.items}).catch(s=>{console.log(">>Store-load PrivacyPolicys fail. error=",s)})}},persist:!0}),Ns=a("strong",{class:"pa-0 mb-4 text-h6 font-weight-bold"}," 개인정보처리방침 ",-1),Fs={class:"d-flex flex-wrap mt-4 justify-end"},js=a("div",{class:"py-1"},null,-1),Bs=["textContent"],qs={__name:"PrivacyPolicyView",setup(s){const l=it(),n=g(l.list[0]);function d(i){console.log("sel item=",i)}return(i,c)=>{const r=D("BaseCard");return u(),h(r,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,{cols:"10"},{default:e(()=>[Ns]),_:1}),t(o,{cols:"2"},{default:e(()=>[a("div",Fs,[t(m(Cs),{modelValue:n.value,"onUpdate:modelValue":[c[0]||(c[0]=p=>n.value=p),d],items:m(l).list,class:"ms-2 select"},null,8,["modelValue","items"])])]),_:1})]),_:1}),js,t(L,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"700"},{default:e(()=>[a("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:$(n.value?n.value.terms:null)},null,8,Bs)]),_:1})]),_:1})}}},zs=a("div",{class:"py-2"},null,-1),Us={__name:"index",setup(s){return(l,n)=>(u(),h(w,null,{default:e(()=>[zs,t(m(qs))]),_:1}))}},Hs={},Ms=a("strong",{class:"text-subtitle-1 font-weight-bold"},"재단소개",-1),Ws=a("strong",{class:"text-subtitle-1 font-weight-bold"},"AI윤리",-1);function Gs(s,l){return u(),h(z,{color:"indigo-darken-3",flat:"",height:"48"},{default:e(()=>[t(f,{class:"d-flex align-center justify-center"},{default:e(()=>[t(_,{to:"/introduce/introduce"},{default:e(()=>[Ms]),_:1}),t(_,{to:"/introduce/ai-ethics"},{default:e(()=>[Ws]),_:1})]),_:1})]),_:1})}const Ks=y(Hs,[["render",Gs]]),Qs={__name:"index",setup(s){return(l,n)=>{const d=D("router-view");return u(),S(R,null,[t(m(Ks)),t(d)],64)}}},Ys={},Js=a("strong",{class:"text-subtitle-1 font-weight-bold"},"논문",-1),Xs=a("strong",{class:"text-subtitle-1 font-weight-bold"},"보고서",-1),Zs=a("strong",{class:"text-subtitle-1 font-weight-bold"},"기사",-1),ta=a("strong",{class:"text-subtitle-1 font-weight-bold"},"가이드라인",-1),ea=a("strong",{class:"text-subtitle-1 font-weight-bold"},"교육커리큘럼",-1),sa=a("strong",{class:"text-subtitle-1 font-weight-bold"},"참고사이트",-1);function aa(s,l){return u(),h(z,{color:"indigo-darken-3",flat:"",height:"48"},{default:e(()=>[t(f,{class:"d-flex align-center justify-center"},{default:e(()=>[t(_,{to:"/archive/thesis"},{default:e(()=>[Js]),_:1}),t(_,{to:"/archive/report"},{default:e(()=>[Xs]),_:1}),t(_,{to:"/archive/article"},{default:e(()=>[Zs]),_:1}),t(_,{to:"/archive/guideline"},{default:e(()=>[ta]),_:1}),t(_,{to:"/archive/curriculum"},{default:e(()=>[ea]),_:1}),t(_,{to:"/archive/refSite"},{default:e(()=>[sa]),_:1})]),_:1})]),_:1})}const la=y(Ys,[["render",aa]]),oa={__name:"index",setup(s){return(l,n)=>{const d=D("router-view");return u(),S(R,null,[t(m(la)),t(d)],64)}}},na={},ca=a("strong",{class:"text-subtitle-1 font-weight-bold"},"공지사항",-1),ia=a("strong",{class:"text-subtitle-1 font-weight-bold"},"관련행사",-1),ra=a("strong",{class:"text-subtitle-1 font-weight-bold"},"행사캘린더",-1),da=a("strong",{class:"text-subtitle-1 font-weight-bold"},"행사신청",-1);function ua(s,l){return u(),h(z,{color:"indigo-darken-3",flat:"",height:"48"},{default:e(()=>[t(f,{class:"d-flex align-center justify-center"},{default:e(()=>[t(_,{to:"/news/notice"},{default:e(()=>[ca]),_:1}),t(_,{to:"/news/event"},{default:e(()=>[ia]),_:1}),t(_,{to:"/news/event-calendar"},{default:e(()=>[ra]),_:1}),t(_,{to:"/news/event-regist"},{default:e(()=>[da]),_:1})]),_:1})]),_:1})}const _a=y(na,[["render",ua]]),fa={__name:"index",setup(s){return(l,n)=>{const d=D("router-view");return u(),S(R,null,[t(m(_a)),t(d)],64)}}},ma={},ha=s=>(N("data-v-246d6314"),s=s(),F(),s),pa={class:"bg-white shadow"},ga=ha(()=>a("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[a("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1)),va=[ga];function xa(s,l){return u(),S("header",pa,va)}const ba=y(ma,[["render",xa],["__scopeId","data-v-246d6314"]]);var ya={};const $a={path:"introduce",name:"introduce",component:Qs,redirect:"/introduce/introduce",meta:{title:"소개"},children:[{path:"introduce",name:"Introduce",meta:{title:"재단소개"},component:()=>b(()=>import("./index-4RLv-489.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"ai-ethics",name:"AiEthics",meta:{title:"AI윤리"},component:()=>b(()=>import("./index-ffwXBWue.js"),__vite__mapDeps([5,1,2,3,4]))}]},wa={path:"archive",name:"자료실",component:oa,redirect:"/archive/thesis",meta:{title:"Archive"},children:[{path:"thesis",name:"Thesis List",meta:{title:"논문 관리"},component:()=>b(()=>import("./index-PsXqoDFa.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12,13]))},{path:"report",name:"Report List",meta:{title:"보고서 관리"},component:()=>b(()=>import("./index-Tt8zktv8.js"),__vite__mapDeps([14,2,3,4,7,8,9,10,11,12,13]))},{path:"article",name:"Article List",meta:{title:"기사 관리"},component:()=>b(()=>import("./index-LOOI0ZrZ.js"),__vite__mapDeps([15,2,3,4,7,8,9,10,11,12,13]))},{path:"guideline",name:"Guideline List",meta:{title:"가이드라인 관리"},component:()=>b(()=>import("./index-cyEbDqMC.js"),__vite__mapDeps([16,2,3,4,7,8,9,10,11,12,13]))},{path:"/archive/refSite",name:"ReferenceSite List",meta:{title:"참고사이트 관리"},component:()=>b(()=>import("./index-2bS1CLVe.js"),__vite__mapDeps([17,2,3,4,7,8,9,10,11,12,13]))},{path:"curriculum",name:"Curriculum List",meta:{title:"교육커리큘럼 관리"},component:()=>b(()=>import("./index-003DvppH.js"),__vite__mapDeps([18,2,3,4,7,8,9,10,11,12,13]))}]},ka={path:"news",name:"News",component:fa,redirect:"/news/notice",meta:{title:"소식"},children:[{path:"notice",name:"Notice",meta:{title:"공지사항"},component:()=>b(()=>import("./index-8AvKUj9x.js"),__vite__mapDeps([19,2,3,4,7,8,9,10,11,12,13]))},{path:"event",name:"Event",meta:{title:"관련행사"},component:()=>b(()=>import("./index-uvizjXqe.js"),__vite__mapDeps([20,2,3,4,7,8,9,10,11,12,13]))},{path:"event-calendar",name:"Event Calendar",meta:{title:"행사캘린더"},component:()=>b(()=>import("./index-G2o_-5ST.js"),__vite__mapDeps([21,22,23,3,2,4,7,8,9,10,11,12,13]))},{path:"event-regist",name:"Evenet Regist",meta:{title:"행사신청"},component:()=>b(()=>import("./index-mFA_flrg.js"),__vite__mapDeps([24,2,3,4,7,8,9,10,11,12,13]))}]},Aa={path:"suggest",name:"suggest",component:()=>b(()=>import("./index-PY8oq_QC.js"),__vite__mapDeps([25,2,3,4,7,8,9,10,11,12,13])),redirect:"/suggest/faq",meta:{title:"문의/제안"},children:[{path:"faq",name:"FAQ",meta:{title:"FAQ"},component:()=>b(()=>import("./index-RzXzLiyV.js"),__vite__mapDeps([26,2,3,4,7,8,9,10,11,12,13]))},{path:"suggest",name:"Suggest",meta:{title:"문의/제안"},component:()=>b(()=>import("./index-XNMSImBO.js"),__vite__mapDeps([27,2,3,4]))}]},Ia=[{path:"/",name:"Home",meta:{title:"Home"},component:ae,redirect:"/home",children:[{path:"home",name:"Home",component:Ze},{path:"search",name:"Search",component:ys},{path:"result",name:"Result",component:Ds},{path:"privacy-polocy",name:"PrivacyPolocy",component:Us},$a,wa,ka,Aa,{path:"/:path(.*)",component:ba}]}],Va=At({history:It(ya.BASE_URL),routes:Ia}),Ea={},Pa=a("strong",{class:"text-h4 font-weight-black"},"FAIR-AI",-1);function Sa(s,l){return u(),h(_,{variant:"text",href:"/home"},{default:e(()=>[Pa]),_:1})}const La=y(Ea,[["render",Sa]]),Da={class:"card-header"},Oa={class:"tio- text-18"},Ra={class:"card-title"},Ca={__name:"BaseCard",props:{cardTitle:{type:String,default:null},icon:{type:String,default:null},noPadding:{type:Boolean,default:!1}},setup(s){const l=s;return(n,d)=>(u(),h(M,{class:"card",elevation:"8"},{default:e(()=>[W(a("div",Da,[a("i",Oa,$(l.icon),1),a("div",Ra,$(l.cardTitle),1)],512),[[$t,l.cardTitle]]),wt(n.$slots,"default",{},void 0,!0)]),_:3}))}},Ta=y(Ca,[["__scopeId","data-v-a74d9016"]]);function Na(s){s.component("Logo",La).component("BaseCard",Ta)}const rt=Et();rt.use(Pt);function Fa(s){s.use(Ot).use(Va).use(rt).use(St).use(Na).component("DownloadExcel",Lt)}const ja={__name:"App",setup(s){return it().loadPrivacyPolicys(),(n,d)=>{const i=D("router-view");return u(),h(i)}}},dt=kt(ja);Fa(dt);dt.mount("#app");export{As as _,Qa as a,q as b,Xa as c,Ja as d,Ya as e,Is as f,y as g,Za as p,k as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4RLv-489.js","assets/Content-v1-B0qmlJ2R.js","assets/vuetify-JpZM_RNA.js","assets/@vue-Gg_kXOMH.js","assets/vuetify-EOxU0jFR.css","assets/index-ffwXBWue.js","assets/index-PsXqoDFa.js","assets/vue-router-fKhHmboF.js","assets/axios-L6U4YIEh.js","assets/pinia-ctynUR1M.js","assets/pinia-plugin-persistedstate-XbYvz584.js","assets/vue-detect-browser-HAC5R545.js","assets/vue-json-excel3-belu5Iru.js","assets/@mdi-z3tLSia1.css","assets/index-Tt8zktv8.js","assets/index-LOOI0ZrZ.js","assets/index-cyEbDqMC.js","assets/index-2bS1CLVe.js","assets/index-003DvppH.js","assets/index-8AvKUj9x.js","assets/index-uvizjXqe.js","assets/index-G2o_-5ST.js","assets/@fullcalendar--ApL0QKx.js","assets/preact-yBSrjXcw.js","assets/index-mFA_flrg.js","assets/index-PY8oq_QC.js","assets/index-RzXzLiyV.js","assets/index-XNMSImBO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
