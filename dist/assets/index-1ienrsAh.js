/* empty css             */import{c as ft,S as st,V as z,a as u,b as N,d as C,e as f,f as mt,g as ht,h as $,i as o,j as A,k as K,l as pt,m as E,n as S,o as j,p as I,q as vt,r as gt,s as xt,t as O,u as bt,v as yt}from"./vuetify-jTIWUCT6.js";import{r as v,a0 as D,U as Q,l as _,a1 as h,a2 as e,I as t,a3 as s,J as M,y as m,a4 as Z,a5 as $t,a6 as F,a7 as B,v as y,a8 as at,w as Y,p as L,u as U,F as H,a9 as lt,k as wt,W as kt,q as At,aa as It}from"./@vue-5qbJIjPN.js";import{u as J,c as Vt,a as Et}from"./vue-router-kO06wcas.js";import{a as ot}from"./axios-L6U4YIEh.js";import{d as Pt,c as St}from"./pinia-vSUcXG4D.js";import{s as Lt}from"./pinia-plugin-persistedstate-XbYvz584.js";import{b as Dt}from"./vue-detect-browser-HAC5R545.js";import{s as Ot}from"./vue-json-excel3-9SxCCbqx.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ct={VBtn:{}},Rt=ft({defaults:Ct,theme:{defaultTheme:"light",themes:{light:{colors:{background:"#DEDEDE",primary:"#472AB2",secondary:"#4AEAD8"}}}},icons:{defaultSet:"mdi"}}),Tt="modulepreload",Nt=function(a){return"/"+a},tt={},b=function(l,n,d){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");r=Promise.all(n.map(c=>{if(c=Nt(c),c in tt)return;tt[c]=!0;const p=c.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!d)for(let T=i.length-1;T>=0;T--){const q=i[T];if(q.href===c&&(!p||q.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${g}`))return;const V=document.createElement("link");if(V.rel=p?"stylesheet":Tt,p||(V.as="script",V.crossOrigin=""),V.href=c,document.head.appendChild(V),p)return new Promise((T,q)=>{V.addEventListener("load",T),V.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>l()).catch(i=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i})},jt={class:"mx-12"},Ft=s("div",{class:"text-20 font-weight-bold"},"소개",-1),Bt=s("div",{class:"text-18 font-weight-bold"},"재단소개",-1),qt=s("div",{class:"text-18 font-weight-bold"},"AI윤리",-1),zt=s("div",{class:"text-20 font-weight-bold"},"자료실",-1),Mt=s("div",{class:"text-18 font-weight-bold"},"논문",-1),Ut=s("div",{class:"text-18 font-weight-bold"},"보고서",-1),Ht=s("div",{class:"text-18 font-weight-bold"},"기사",-1),Wt=s("div",{class:"text-18 font-weight-bold"},"가이드라인",-1),Gt=s("div",{class:"text-18 font-weight-bold"},"교육커리큘럼",-1),Kt=s("div",{class:"text-18 font-weight-bold"},"참고사이트",-1),Qt=s("div",{class:"text-20 font-weight-bold"},"소식",-1),Yt=s("div",{class:"text-18 font-weight-bold"},"공지사항",-1),Jt=s("div",{class:"text-18 font-weight-bold"},"관련행사",-1),Xt=s("div",{class:"text-18 font-weight-bold"},"행사캘린더",-1),Zt=s("div",{class:"text-18 font-weight-bold"},"행사신청",-1),te=s("div",{class:"text-20 font-weight-bold"},"문의·제안",-1),ee=s("div",{class:"text-18 font-weight-bold"},"FAQ",-1),se=s("div",{class:"text-18 font-weight-bold"},"문의/제안",-1),ae=s("div",null,null,-1),le={__name:"Header",setup(a){const l=v(0);function n(){l.value++,console.log("scrollInvoked.value=",l.value)}return(d,r)=>{const i=D("logo");return Q((_(),h(mt,{color:"transparent",border:"",flat:"",height:"60"},{prepend:e(()=>[t(i),s("div",jt,[t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[Ft]),_:2},1040)]),default:e(()=>[t(N,null,{default:e(()=>[t(C,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/introduce/introduce",variant:"text"},{default:e(()=>[Bt]),_:1}),t(u,{to:"/introduce/ai-ethics",variant:"text"},{default:e(()=>[qt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[zt]),_:2},1040)]),default:e(()=>[t(N,null,{default:e(()=>[t(C,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/archive/thesis",variant:"text"},{default:e(()=>[Mt]),_:1}),t(u,{to:"/archive/report",variant:"text"},{default:e(()=>[Ut]),_:1}),t(u,{to:"/archive/article",variant:"text"},{default:e(()=>[Ht]),_:1}),t(u,{to:"/archive/guideline",variant:"text"},{default:e(()=>[Wt]),_:1}),t(u,{to:"/archive/curriculum",variant:"text"},{default:e(()=>[Gt]),_:1}),t(u,{to:"/archive/refSite",variant:"text"},{default:e(()=>[Kt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[Qt]),_:2},1040)]),default:e(()=>[t(N,null,{default:e(()=>[t(C,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/news/notice",variant:"text"},{default:e(()=>[Yt]),_:1}),t(u,{to:"/news/event",variant:"text"},{default:e(()=>[Jt]),_:1}),t(u,{to:"/news/event-calendar",variant:"text"},{default:e(()=>[Xt]),_:1}),t(u,{to:"/news/event-regist",variant:"text"},{default:e(()=>[Zt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[te]),_:2},1040)]),default:e(()=>[t(N,null,{default:e(()=>[t(C,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/suggest/faq",variant:"text"},{default:e(()=>[ee]),_:1}),t(u,{to:"/suggest/suggest",variant:"text"},{default:e(()=>[se]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),ae]),_:1})),[[st,n,void 0,{self:!0}]])}}},oe={__name:"MainView",setup(a){const l=v(0);function n(){l.value++,console.log("scrollInvoked.value=",l.value)}return(d,r)=>{const i=D("router-view");return Q((_(),h(ht,null,{default:e(()=>[t(i)]),_:1})),[[st,n,void 0,{self:!0}]])}}},P=(a,l)=>{const n=a.__vccOpts||a;for(const[d,r]of l)n[d]=r;return n},ne={},ce={class:"pa-4 mx-8"},ie=s("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"소개",-1),re=s("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"자료실",-1),de=s("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"소식",-1),ue=s("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"문의/제안",-1),_e=s("strong",{class:"text-16 font-weight-bold text-grey-darken-1"}," 행사등록 신청 ",-1),fe=s("strong",{class:"text-16 font-weight-bold text-grey-darken-1"},"개인정보처리방침",-1),me=s("strong",{class:"text-16 font-weight-bold"}," 관련사이트 ",-1),he={class:"d-flex flex-wrap mt-4 justify-end"};function pe(a,l){const n=D("logo");return _(),h(K,{color:"#F4F4F4"},{default:e(()=>[t($,null,{default:e(()=>[s("div",ce,[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12",md:"3"},{default:e(()=>[t(n)]),_:1}),t(o,{cols:"12",md:"3"},{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/introduce",variant:"text",density:"compact"},{default:e(()=>[ie]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/archive",variant:"text",density:"compact"},{default:e(()=>[re]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/news",variant:"text",density:"compact"},{default:e(()=>[de]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/suggest",variant:"text",density:"compact"},{default:e(()=>[ue]),_:1})]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",md:"3"},{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/news/event-regist",variant:"text",density:"compact"},{default:e(()=>[_e]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/privacy-polocy",variant:"text",density:"compact"},{default:e(()=>[fe]),_:1})]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",md:"3",class:"text-end"},{default:e(()=>[t(A,{items:["나의AAC","NC문화재단","NC SOFT"],class:"ml-4",variant:"underlined",density:"compact"},{label:e(()=>[me]),_:1}),s("div",he,[t(u,{class:"mx-3",color:"grey",icon:"mdi-facebook",variant:"outlined"}),t(u,{color:"grey",icon:"mdi-youtube",variant:"outlined"})])]),_:1})]),_:1})])]),_:1})]),_:1})}const ve=P(ne,[["render",pe]]),ge={class:"bg_image"},xe={__name:"index",setup(a){return(l,n)=>(_(),h(pt,null,{default:e(()=>[s("div",ge,[t(m(le)),t(m(oe)),t(m(ve))])]),_:1}))}},be=P(xe,[["__scopeId","data-v-fd555ed8"]]),nt={__name:"SearchField",emits:["search","click"],setup(a,{emit:l}){const n=v(""),d=l;function r(c){console.log("searchClick()=",c),d("search",c)}function i(){console.log("Click()="),d("click")}return(c,p)=>(_(),h(E,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=g=>n.value=g),placeholder:"검색",class:"mr-16",color:"primary","bg-color":"white",style:{"max-width":"600px"},variant:"outlined",rounded:"",density:"comfortable","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"",autofocus:"",onClick:p[1]||(p[1]=Z(g=>i(),["stop"])),onKeyup:p[2]||(p[2]=$t(Z(g=>r(n.value),["prevent"]),["enter"]))},null,8,["modelValue"]))}},X=a=>(F("data-v-c4b457c4"),a=a(),B(),a),ye=X(()=>s("div",null,[s("strong",{class:"text-68 font-weight-light text-black letter"},"AI 윤리 관련")],-1)),$e=X(()=>s("div",null,[s("strong",{class:"text-68 font-weight-black text-black letter"},"최근 이슈"),s("strong",{class:"text-68 font-weight-light text-black letter"},"에 대해")],-1)),we=X(()=>s("div",null,[s("strong",{class:"text-68 font-weight-light text-black letter"},"알아보세요.")],-1)),ke={__name:"index",setup(a){const l=J();function n(d){console.log("keyword=",d),l.push({name:"Search"})}return(d,r)=>(_(),h($,null,{default:e(()=>[t(f,{align:"center",class:"mx-0",style:{height:"460px"}},{default:e(()=>[t(o,{cols:"6"},{default:e(()=>[ye,$e,we]),_:1}),t(o,{cols:"6"},{default:e(()=>[t(m(nt),{class:"ms-2",onClick:n})]),_:1})]),_:1})]),_:1}))}},Ae=P(ke,[["__scopeId","data-v-c4b457c4"]]);function Ie(a){return a!==void 0?`http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/card/${a}`:void 0}const G=a=>(F("data-v-d5fd7a07"),a=a(),B(),a),Ve=G(()=>s("div",null,[s("h6",{class:"text-subtitle-1 mb-4"},"논문 해외")],-1)),Ee={class:"text-30 letter","font-weight-bold":""},Pe=G(()=>s("div",null,[s("strong",{class:"text-subtitle-1 mb-4"},"저자")],-1)),Se=G(()=>s("div",null,[s("strong",{class:"text-subtitle-1 mb-4"},"발행")],-1)),Le=G(()=>s("div",null,[s("strong",{class:"text-subtitle-1 mb-4"},"연도")],-1)),De={__name:"ThesisCard",props:{card:{type:Object,default:null}},setup(a){const l=a;return(n,d)=>(_(),h($,null,{default:e(()=>[l.card?(_(),h(S,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[Ve,s("div",null,[t(S,{height:"150",elevation:"0"},{default:e(()=>[s("strong",Ee,y(l.card.thesis?l.card.thesis.title:""),1)]),_:1})]),s("div",null,[t(f,null,{default:e(()=>[t(o,{cols:"12",md:"5"},{default:e(()=>[t(j,{width:"163",height:"210",src:m(Ie)(l.card.id)},null,8,["src"])]),_:1}),t(o,{cols:"12",md:"7"},{default:e(()=>[Pe,Se,Le]),_:1})]),_:1})])]),_:1})):at("",!0)]),_:1}))}},R=P(De,[["__scopeId","data-v-d5fd7a07"]]),w=ot.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/fair/api",timeout:5e3});w.interceptors.request.use(a=>a,a=>(console.log("request err=",a),Promise.reject(a)));w.interceptors.response.use(a=>{const l=a.data;if(console.log("res.code=",l.code),l.code!==2e4){if(console.log("res.message=",l.message),!(l.code===50008||l.code===50012||l.code===50014)){if(l.code===60204||l.code===60205)return a}return Promise.reject(new Error(l.message||"Error"))}else return a},a=>(console.log("response err=",a),Promise.reject(a)));const ct=ot.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000",timeout:3e4});ct.interceptors.request.use(a=>(a.headers["Content-Type"]="multipart/form-data",a),a=>(console.log("requestStorage err=",a),Promise.reject(a)));ct.interceptors.response.use(a=>a,a=>(console.log("requestStorage err=",a),Promise.reject(a)));function it(a){return w({url:"/ai-card",method:"get",data:a})}const Oe={__name:"index",setup(a){const l=v([]),n=v(!1),d=v(0);async function r(){n.value=!0,await it().then(i=>{l.value=i.data.items,d.value=i.data.total}).catch(i=>{console.log(i)}),n.value=!1,console.log("card items=",l.value)}return r(),(i,c)=>(_(),h(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[0]},null,8,["card"])]),_:1}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[1]},null,8,["card"])]),_:1}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[2]},null,8,["card"])]),_:1})]),_:1}))}},Ce={class:"text-30 font-weight-black"},Re=s("div",null,[s("strong",{class:"text-subtitle-1 mb-4"},"매일경제 자세히보기")],-1),et={__name:"ArticleCard",props:{card:{type:Object,default:null}},setup(a){const l=a;return(n,d)=>(_(),h($,null,{default:e(()=>[l.card?(_(),h(S,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[s("div",null,[t(j,{width:"410",height:"226",cover:"",src:l.card.thumbnailUrl},null,8,["src"])]),s("div",null,[t(S,{class:"my-4",height:"100",elevation:"0"},{default:e(()=>[s("strong",Ce,y(l.card?l.card.title:""),1)]),_:1})]),Re]),_:1})):at("",!0)]),_:1}))}};function Ha(a){return w({url:"/ai-article-page",method:"post",data:a})}function Te(){return w({url:"/ai-article-last",method:"get"})}const Ne={__name:"ArticleView",setup(a){const l=v([]),n=v(!1),d=v(0);async function r(){n.value=!0,await Te().then(i=>{l.value=i.data.items,d.value=i.data.total}).catch(i=>{console.log(i)}),n.value=!1,console.log("article card items=",l.value)}return r(),(i,c)=>(_(),h(S,{class:"mx-0",elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(I,{thickness:3}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(m(et),{card:l.value[0]},null,8,["card"])]),_:1}),t(I,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(m(et),{card:l.value[1]},null,8,["card"])]),_:1})]),_:1})]),_:1}))}},je=s("div",{style:{height:"180px"}},[s("strong",{class:"text-48 font-weight-black mb-24"},"최근AI이슈")],-1),Fe=s("div",{class:"mt-24"},[s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"이슈관련 키워드")],-1),Be=s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#AI윤리",-1),qe=s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#CES2024",-1),ze=s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#의료AI",-1),Me=s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#자율주행",-1),Ue=s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#강인공지능",-1),He=s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#딥러닝",-1),We=s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#학습 콘텐츠",-1),Ge={__name:"index",setup(a){return(l,n)=>(_(),h(S,{elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t($,null,{default:e(()=>[je,Fe,s("div",null,[t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Be]),_:1})]),s("div",null,[t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[qe]),_:1}),t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[ze]),_:1})]),s("div",null,[t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Me]),_:1}),t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ue]),_:1})]),s("div",null,[t(u,{calss:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[He]),_:1}),t(u,{calss:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[We]),_:1})])]),_:1})]),_:1}),t(o,{cols:"12",md:"8"},{default:e(()=>[t(m(Ne))]),_:1})]),_:1})]),_:1}))}},Ke={__name:"index",setup(a){const l=v([]),n=v(!1),d=v(0);async function r(){n.value=!0,await it().then(i=>{l.value=i.data.items,d.value=i.data.total}).catch(i=>{console.log(i)}),n.value=!1,console.log("card items=",l.value)}return r(),(i,c)=>(_(),h(S,{elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[0]},null,8,["card"])]),_:1}),t(I,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[1]},null,8,["card"])]),_:1}),t(I,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[2]},null,8,["card"])]),_:1})]),_:1})]),_:1}))}},Qe="/assets/poster--n1wukWi.png",Ye={};function Je(a,l){return _(),h(j,{src:Qe,height:"380"})}const Xe=P(Ye,[["render",Je]]);function Wa(){return w({url:"/ai-event-list",method:"get"})}function Ga(a){return w({url:"/ai-event-page",method:"post",data:a})}function Ze(a){return w({url:"/ai-event-last",method:"post",data:a})}const rt=a=>(F("data-v-714e58a0"),a=a(),B(),a),ts={class:"bg_image"},es=rt(()=>s("strong",{class:"text-48 font-weight-bold text-white"},"행사안내",-1)),ss=rt(()=>s("div",{class:"py-6"},null,-1)),as={__name:"index",setup(a){const l=v([]),n=v(!1),d=v(0),r=v({page:1,sortBy:"createdAt",sortType:"desc"});async function i(){n.value=!0,await Ze(r.value).then(c=>{l.value=c.data.items,d.value=c.data.total}).catch(c=>{console.log(c)}),n.value=!1}return i(),Y(r,c=>{i()},{deep:!0}),(c,p)=>(_(),L("div",ts,[t(f,{class:"mx-16"},{default:e(()=>[t(o,{cols:"1"}),t(o,{cols:"2",class:"mt-12"},{default:e(()=>[es]),_:1}),t(o,{cols:"9"},{default:e(()=>[ss,t(m(Xe))]),_:1})]),_:1})]))}},ls=P(as,[["__scopeId","data-v-714e58a0"]]);function Ka(a){return w({url:"/ai-notice-page",method:"post",data:a})}function os(a){return w({url:"/ai-notice-last",method:"post",data:a})}function Qa(a){if(arguments.length===0||!a)return null;{const l=new Date(a);return`${l.getFullYear()}-${`00${l.getMonth()+1}`.substring(`00${l.getMonth()+1}`.length-2)}-${`00${l.getDate()}`.substring(`00${l.getDate()}`.length-2)} ${`00${l.getHours()}`.substring(`00${l.getHours()}`.length-2)}:${`00${l.getMinutes()}`.substring(`00${l.getMinutes()}`.length-2)}`}}function W(a){if(arguments.length===0||!a)return null;{const l=new Date(a);return`${l.getFullYear()}-${`00${l.getMonth()+1}`.substring(`00${l.getMonth()+1}`.length-2)}-${`00${l.getDate()}`.substring(`00${l.getDate()}`.length-2)}`}}const ns={class:"mx-16"},cs={class:"d-flex justify-space-between",style:{height:"60px"}},is=s("strong",{class:"text-20 font-weight-bold"}," 공지사항 ",-1),rs={class:"d-flex justify-space-between align-center",style:{height:"40px"}},ds={class:"d-flex align-baseline flex-1"},us={class:"text-16 font-weight-medium"},_s={class:"text-body-2"},fs={__name:"index",setup(a){const l=v([]),n=v(!1),d=v(0),r=v({page:1,sortBy:"createdAt",sortType:"desc"});async function i(){n.value=!0,await os(r.value).then(c=>{l.value=c.data.items,d.value=c.data.total}).catch(c=>{console.log(c)}),n.value=!1}return i(),Y(r,c=>{i()},{deep:!0}),(c,p)=>(_(),h(S,{class:"mx-16",elevation:"0"},{default:e(()=>[s("div",ns,[t(I,{class:"mb-1",color:"black",thickness:3}),s("div",cs,[is,t(u,{size:"small",variant:"flat",class:"text-primary text-capitalize"},{default:e(()=>[U(" View All ")]),_:1})]),t(I,{class:"mb-1"}),t(N,null,{default:e(()=>[(_(!0),L(H,null,lt(l.value,(g,k)=>(_(),h(C,{key:k},{default:e(()=>[s("div",rs,[s("div",ds,[s("div",us,y(g.title),1)]),s("div",_s,y(g.updatedAt?m(W)(g.updatedAt):m(W)(g.createdAt)),1)]),t(I,{class:"my-2"})]),_:2},1024))),128))]),_:1})])]),_:1}))}},ms=s("div",{class:"py-1"},null,-1),hs=s("div",{class:"py-2"},null,-1),ps={__name:"index",setup(a){return(l,n)=>(_(),L(H,null,[t($,{class:"w-75"},{default:e(()=>[t(m(Ae)),t(m(Oe)),ms,t(m(Ge)),hs,t(m(Ke))]),_:1}),t(m(ls)),t($,null,{default:e(()=>[t(m(fs))]),_:1})],64))}},x=a=>(F("data-v-4246dffe"),a=a(),B(),a),vs=x(()=>s("div",null,[s("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"AI 윤리 관련 ")],-1)),gs=x(()=>s("div",null,[s("strong",{class:"text-68 font-weight-black text-black letter text-disabled"},"최근 이슈"),s("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"에 대해")],-1)),xs=x(()=>s("div",null,[s("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"알아보세요.")],-1)),bs=x(()=>s("strong",{class:"text-16 text-black text-medium-emphasis"},"인기검색어",-1)),ys=x(()=>s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#AI윤리",-1)),$s=x(()=>s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#CES2024",-1)),ws=x(()=>s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#의료AI",-1)),ks=x(()=>s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#자율주행",-1)),As=x(()=>s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#강인공지능",-1)),Is=x(()=>s("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#딥러닝",-1)),Vs=x(()=>s("div",{class:"ml-6"},"전체",-1)),Es=x(()=>s("div",{class:"ml-3"},"논문명",-1)),Ps=x(()=>s("div",{class:"ml-6"},"저자",-1)),Ss=x(()=>s("div",{class:"ml-6"},"초록",-1)),Ls=x(()=>s("div",{class:"ml-6"},"국내",-1)),Ds=x(()=>s("div",{class:"ml-4"},"인용수",-1)),Os=x(()=>s("div",{class:"py-16"},null,-1)),Cs=x(()=>s("div",{class:"py-16"},null,-1)),Rs=x(()=>s("div",{class:"py-16"},null,-1)),Ts={__name:"index",setup(a){const l=J();function n(d){console.log("keyword=",d),l.push({name:"Search"})}return(d,r)=>(_(),h($,null,{default:e(()=>[t(f,{align:"center",class:"mx-0",style:{height:"460px"}},{default:e(()=>[t(o,{cols:"6"},{default:e(()=>[vs,gs,xs]),_:1}),t(o,{cols:"6"},{default:e(()=>[t(m(nt),{class:"ms-2",onClick:n})]),_:1})]),_:1}),t(vt,{class:"mb-16",color:"blue-lighten-4",elevation:"0",rounded:""},{default:e(()=>[t(gt,null,{title:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[bs,t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[ys]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[$s]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[ws]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[ks]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[As]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[Is]),_:1})]),_:1})]),_:1})]),text:e(()=>[t($,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,null,{default:e(()=>[t(xt,{inline:""},{default:e(()=>[t(O,{label:"논문",value:"one"}),t(O,{label:"보고서",value:"two"}),t(O,{label:"기사",value:"three"}),t(O,{label:"가이드라인",value:"one"}),t(O,{label:"참고사이트",value:"two"}),t(O,{label:"교육커리큘럼",value:"three"}),t(O,{label:"행사",value:"three"})]),_:1})]),_:1})]),_:1}),t(I),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Vs]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Es]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Ps]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t(I),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[U(" 발행기관 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Ss]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[U(" 발행년도 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t(I),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Ls]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Ds]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[U(" 작성언어 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"선택하세요",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(A,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t(I),t(f,null,{default:e(()=>[t(o)]),_:1})]),_:1})]),_:1})]),_:1}),Os,Cs,Rs]),_:1}))}},Ns=P(Ts,[["__scopeId","data-v-4246dffe"]]),js={__name:"index",setup(a){const{dataObj:l}=history.state;return console.log(l),(n,d)=>(_(),h($,{class:"w-75"},{default:e(()=>[t(m(Ns))]),_:1}))}},Fs="/assets/GettyImages--ka0W-ql.png",Bs={class:"text-20 font-weight-bold mb-4"},qs={class:"text-medium-emphasis text-body-2"},zs={class:"text-body-1 mb-4"},Ms={__name:"ThesisCard",props:{title:{type:String,default:null},url:{type:String,default:null},abstract:{type:String,default:null}},setup(a){const l=a;return(n,d)=>(_(),h(K,{class:"pa-2",flat:""},{default:e(()=>[t(f,null,{default:e(()=>[t(o,{cols:"12",md:"8"},{default:e(()=>[t($,null,{default:e(()=>[s("h1",Bs,y(l.title),1),s("div",qs,y(l.abstract),1),s("h1",zs,y(l.url),1)]),_:1})]),_:1}),t(bt),t(o,{cols:"12",md:"3"},{default:e(()=>[t(j,{class:"mt-2",height:"150",src:Fs})]),_:1})]),_:1})]),_:1}))}};function Us(a){return w({url:"/ai-thesis-page",method:"post",data:a})}const Hs=s("div",{class:"py-1"},null,-1),Ws={class:"text-center"},Gs={__name:"ThesisView",setup(a){const l=v(1),n=v([]),d=v(!1),r=v(0),i=v({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function c(){d.value=!0,await Us(i.value).then(p=>{n.value=p.data.items,r.value=p.data.total}).catch(p=>{console.log(p)}),d.value=!1}return c(),Y(i,p=>{c()},{deep:!0}),(p,g)=>(_(),L(H,null,[(_(!0),L(H,null,lt(n.value,(k,V)=>(_(),L("div",{key:V},[t(m(Ms),{title:k.title,url:k.url,abstract:k.abstract?k.abstract.substring(0,250):null},null,8,["title","url","abstract"]),Hs]))),128)),s("div",Ws,[t(yt,{modelValue:l.value,"onUpdate:modelValue":g[0]||(g[0]=k=>l.value=k),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},Ks={class:"text-h5 font-weight-bold"},Qs=s("div",{class:"py-1"},null,-1),Ys={__name:"index",setup(a){const{dataObj:l}=history.state;return console.log(l),(n,d)=>(_(),h($,null,{default:e(()=>[s("strong",Ks,"검색결과: "+y(m(l).searchStr),1),t(Gs),Qs]),_:1}))}},Js={class:"date_item"},Xs={__name:"SelectEnforceDate",props:{modelValue:{type:Object,default:null},items:{type:Object,default:null}},emits:["update:modelValue"],setup(a,{emit:l}){const n=a,d=l,r=wt({get(){return n.modelValue},set(c){return d("update:modelValue",c)}});function i(c){console.log("select value=",c),r.value=n.items[c]}return(c,p)=>(_(),h(A,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=g=>r.value=g),items:a.items,"item-title":"enforceDate","item-value":"id",variant:"outlined",density:"compact","menu-props":{closeOnContentClick:!0},"return-object":"","single-line":"","hide-details":""},{item:e(({item:g,index:k})=>[(_(),h(C,{key:g.title,value:g.value,density:"compact","min-height":"5",onClick:V=>i(k)},{default:e(()=>[s("span",Js,y(m(W)(g.title)),1)]),_:2},1032,["value","onClick"]))]),selection:e(({item:g})=>[s("span",null,y(m(W)(g.title)),1)]),_:1},8,["modelValue","items"]))}},Zs=P(Xs,[["__scopeId","data-v-83579530"]]);function ta(){return w({url:"/ai-privacy-policy",method:"get"})}const dt=Pt("privacyPolicy",{state:()=>({list:[]}),actions:{async loadPrivacyPolicys(){await ta().then(a=>{this.list=a.data.items}).catch(a=>{console.log(">>Store-load PrivacyPolicys fail. error=",a)})}},persist:!0}),ea=s("strong",{class:"pa-0 mb-4 text-h6 font-weight-bold"}," 개인정보처리방침 ",-1),sa={class:"d-flex flex-wrap mt-4 justify-end"},aa=s("div",{class:"py-1"},null,-1),la=["textContent"],oa={__name:"PrivacyPolicyView",setup(a){const l=dt(),n=v(l.list[0]);function d(r){console.log("sel item=",r)}return(r,i)=>{const c=D("BaseCard");return _(),h(c,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,{cols:"10"},{default:e(()=>[ea]),_:1}),t(o,{cols:"2"},{default:e(()=>[s("div",sa,[t(m(Zs),{modelValue:n.value,"onUpdate:modelValue":[i[0]||(i[0]=p=>n.value=p),d],items:m(l).list,class:"ms-2 select"},null,8,["modelValue","items"])])]),_:1})]),_:1}),aa,t(S,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"700"},{default:e(()=>[s("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:y(n.value?n.value.terms:null)},null,8,la)]),_:1})]),_:1})}}},na=s("div",{class:"py-2"},null,-1),ca={__name:"index",setup(a){return(l,n)=>(_(),h($,null,{default:e(()=>[na,t(m(oa))]),_:1}))}},ia={__name:"index",setup(a){return(l,n)=>{const d=D("router-view");return _(),h(d)}}},ra={__name:"index",setup(a){return(l,n)=>{const d=D("router-view");return _(),h(d)}}},da={__name:"index",setup(a){return(l,n)=>{const d=D("router-view");return _(),h(d)}}},ua={},_a=a=>(F("data-v-246d6314"),a=a(),B(),a),fa={class:"bg-white shadow"},ma=_a(()=>s("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[s("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1)),ha=[ma];function pa(a,l){return _(),L("header",fa,ha)}const va=P(ua,[["render",pa],["__scopeId","data-v-246d6314"]]);var ga={};const xa={path:"introduce",name:"introduce",component:ia,redirect:"/introduce/introduce",meta:{title:"소개"},children:[{path:"introduce",name:"Introduce",meta:{title:"재단소개"},component:()=>b(()=>import("./index-qqzswFDp.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"ai-ethics",name:"AiEthics",meta:{title:"AI윤리"},component:()=>b(()=>import("./index-4eagihCn.js"),__vite__mapDeps([5,1,2,3,4]))}]},ba={path:"archive",name:"자료실",component:ra,redirect:"/archive/thesis",meta:{title:"Archive"},children:[{path:"thesis",name:"Thesis List",meta:{title:"논문 관리"},component:()=>b(()=>import("./index-Nht5_muD.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12,13]))},{path:"report",name:"Report List",meta:{title:"보고서 관리"},component:()=>b(()=>import("./index-3-V3THq3.js"),__vite__mapDeps([14,2,3,4,7,8,9,10,11,12,13]))},{path:"article",name:"Article List",meta:{title:"기사 관리"},component:()=>b(()=>import("./index-W3JSsgIB.js"),__vite__mapDeps([15,2,3,4,7,8,9,10,11,12,13]))},{path:"guideline",name:"Guideline List",meta:{title:"가이드라인 관리"},component:()=>b(()=>import("./index-N7CRGV9U.js"),__vite__mapDeps([16,2,3,4,7,8,9,10,11,12,13]))},{path:"/archive/refSite",name:"ReferenceSite List",meta:{title:"참고사이트 관리"},component:()=>b(()=>import("./index-hcaax-2w.js"),__vite__mapDeps([17,2,3,4,7,8,9,10,11,12,13]))},{path:"curriculum",name:"Curriculum List",meta:{title:"교육커리큘럼 관리"},component:()=>b(()=>import("./index-8NhBDBZ9.js"),__vite__mapDeps([18,2,3,4,7,8,9,10,11,12,13]))}]},ya={path:"news",name:"News",component:da,redirect:"/news/notice",meta:{title:"소식"},children:[{path:"notice",name:"Notice",meta:{title:"공지사항"},component:()=>b(()=>import("./index-poBQhPfc.js"),__vite__mapDeps([19,2,3,4,7,8,9,10,11,12,13]))},{path:"event",name:"Event",meta:{title:"관련행사"},component:()=>b(()=>import("./index-JMPCPoZW.js"),__vite__mapDeps([20,2,3,4,7,8,9,10,11,12,13]))},{path:"event-calendar",name:"Event Calendar",meta:{title:"행사캘린더"},component:()=>b(()=>import("./index-X6EhdcSG.js"),__vite__mapDeps([21,22,23,3,2,4,7,8,9,10,11,12,13]))},{path:"event-regist",name:"Evenet Regist",meta:{title:"행사신청"},component:()=>b(()=>import("./index-L8ILhnOa.js"),__vite__mapDeps([24,3,25,2,4,7,8,9,10,11,12,13]))}]},$a={path:"suggest",name:"suggest",component:()=>b(()=>import("./index-EBx4ptER.js"),__vite__mapDeps([26,3])),redirect:"/suggest/faq",meta:{title:"문의/제안"},children:[{path:"faq",name:"FAQ",meta:{title:"FAQ"},component:()=>b(()=>import("./index-7zL6LVas.js"),__vite__mapDeps([27,2,3,4,7,8,9,10,11,12,13]))},{path:"suggest",name:"Suggest",meta:{title:"문의/제안"},component:()=>b(()=>import("./index-ykN7NL_m.js"),__vite__mapDeps([28,3,25,2,4,7,8,9,10,11,12,13]))}]},wa=[{path:"/",name:"Home",meta:{title:"Home"},component:be,redirect:"/home",children:[{path:"home",name:"Home",component:ps},{path:"search",name:"Search",component:js},{path:"result",name:"Result",component:Ys},{path:"privacy-polocy",name:"PrivacyPolocy",component:ca},xa,ba,ya,$a,{path:"/:path(.*)",component:va}]}],ka=Vt({history:Et(ga.BASE_URL),routes:wa}),Aa="/assets/BI_new-sl0ccosl.svg",Ia={class:"pt-1",style:{width:"260px",height:"48px"}},Va={__name:"Logo",setup(a){const l=J();function n(){l.push("/home")}return(d,r)=>(_(),L("div",Ia,[t(j,{src:Aa,class:"cursor-pointer",height:"40",alt:"Logo",onClick:n})]))}},Ea={class:"card-header"},Pa={class:"tio- text-18"},Sa={class:"card-title"},La={__name:"BaseCard",props:{cardTitle:{type:String,default:null},icon:{type:String,default:null},noPadding:{type:Boolean,default:!1}},setup(a){const l=a;return(n,d)=>(_(),h(K,{class:"card",elevation:"8"},{default:e(()=>[Q(s("div",Ea,[s("i",Pa,y(l.icon),1),s("div",Sa,y(l.cardTitle),1)],512),[[kt,l.cardTitle]]),At(n.$slots,"default",{},void 0,!0)]),_:3}))}},Da=P(La,[["__scopeId","data-v-54f5428c"]]);function Oa(a){a.component("Logo",Va).component("BaseCard",Da)}const ut=St();ut.use(Lt);function Ca(a){a.use(Rt).use(ka).use(ut).use(Dt).use(Oa).component("DownloadExcel",Ot)}const Ra={__name:"App",setup(a){return dt().loadPrivacyPolicys(),(n,d)=>{const r=D("router-view");return _(),h(r)}}},_t=It(Ra);Ca(_t);_t.mount("#app");export{Ms as _,nt as a,Fs as b,Ha as c,W as d,Ka as e,Us as f,Ga as g,Wa as h,ct as i,Qa as p,w as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-qqzswFDp.js","assets/Content-v2-Pn9Yn8ac.js","assets/vuetify-jTIWUCT6.js","assets/@vue-5qbJIjPN.js","assets/vuetify-qhbXEcH8.css","assets/index-4eagihCn.js","assets/index-Nht5_muD.js","assets/vue-router-kO06wcas.js","assets/axios-L6U4YIEh.js","assets/pinia-vSUcXG4D.js","assets/pinia-plugin-persistedstate-XbYvz584.js","assets/vue-detect-browser-HAC5R545.js","assets/vue-json-excel3-9SxCCbqx.js","assets/@mdi-z3tLSia1.css","assets/index-3-V3THq3.js","assets/index-W3JSsgIB.js","assets/index-N7CRGV9U.js","assets/index-hcaax-2w.js","assets/index-8NhBDBZ9.js","assets/index-poBQhPfc.js","assets/index-JMPCPoZW.js","assets/index-X6EhdcSG.js","assets/@fullcalendar-9d2Q5ilX.js","assets/preact-yBSrjXcw.js","assets/index-L8ILhnOa.js","assets/attachFile-expzUfvW.js","assets/index-EBx4ptER.js","assets/index-7zL6LVas.js","assets/index-ykN7NL_m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}