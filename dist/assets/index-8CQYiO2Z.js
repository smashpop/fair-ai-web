/* empty css             */import{c as ht,S as st,V as z,a as u,b as F,d as O,e as f,f as pt,g as vt,h as w,i as o,j as I,k as G,l as gt,m as E,n as L,o as B,p as $,q as xt,r as bt,s as yt,t as $t,u as wt,v as kt,w as C,x as At}from"./vuetify-xWM4wXMg.js";import{r as v,a0 as S,U as Y,l as _,a1 as h,a2 as e,I as t,a3 as a,J as M,y as m,a4 as Q,a5 as It,a6 as T,a7 as N,v as y,a8 as at,w as J,p as D,d as Vt,u as U,F as W,a9 as lt,k as ot,W as Pt,q as Et,aa as Dt}from"./@vue-5qbJIjPN.js";import{u as X,c as Lt,a as St}from"./vue-router-kO06wcas.js";import{a as nt}from"./axios-L6U4YIEh.js";import{c as Ct,o as Ot,P as Rt}from"./vue3-promise-dialog-JNjw9D9N.js";import{d as Tt,c as Nt}from"./pinia-vSUcXG4D.js";import{s as jt}from"./pinia-plugin-persistedstate-XbYvz584.js";import{b as Ft}from"./vue-detect-browser-HAC5R545.js";import{s as Bt}from"./vue-json-excel3-9SxCCbqx.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const qt={VBtn:{}},zt=ht({defaults:qt,theme:{defaultTheme:"light",themes:{light:{colors:{background:"#DEDEDE",primary:"#472AB2",secondary:"#4AEAD8"}}}},icons:{defaultSet:"mdi"}}),Mt="modulepreload",Ut=function(s){return"/"+s},tt={},b=function(l,n,d){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");r=Promise.all(n.map(c=>{if(c=Ut(c),c in tt)return;tt[c]=!0;const p=c.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!d)for(let j=i.length-1;j>=0;j--){const q=i[j];if(q.href===c&&(!p||q.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${g}`))return;const P=document.createElement("link");if(P.rel=p?"stylesheet":Mt,p||(P.as="script",P.crossOrigin=""),P.href=c,document.head.appendChild(P),p)return new Promise((j,q)=>{P.addEventListener("load",j),P.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>l()).catch(i=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i})},Wt={class:"mx-12"},Ht=a("div",{class:"text-20 font-weight-bold"},"소개",-1),Gt=a("div",{class:"text-18 font-weight-bold"},"재단소개",-1),Kt=a("div",{class:"text-18 font-weight-bold"},"AI윤리",-1),Qt=a("div",{class:"text-20 font-weight-bold"},"자료실",-1),Yt=a("div",{class:"text-18 font-weight-bold"},"논문",-1),Jt=a("div",{class:"text-18 font-weight-bold"},"보고서",-1),Xt=a("div",{class:"text-18 font-weight-bold"},"기사",-1),Zt=a("div",{class:"text-18 font-weight-bold"},"가이드라인",-1),te=a("div",{class:"text-18 font-weight-bold"},"교육커리큘럼",-1),ee=a("div",{class:"text-18 font-weight-bold"},"참고사이트",-1),se=a("div",{class:"text-20 font-weight-bold"},"소식",-1),ae=a("div",{class:"text-18 font-weight-bold"},"공지사항",-1),le=a("div",{class:"text-18 font-weight-bold"},"관련행사",-1),oe=a("div",{class:"text-18 font-weight-bold"},"행사캘린더",-1),ne=a("div",{class:"text-18 font-weight-bold"},"행사신청",-1),ce=a("div",{class:"text-20 font-weight-bold"},"문의·제안",-1),ie=a("div",{class:"text-18 font-weight-bold"},"FAQ",-1),re=a("div",{class:"text-18 font-weight-bold"},"문의/제안",-1),de=a("div",null,null,-1),ue={__name:"Header",setup(s){const l=v(0);function n(){l.value++,console.log("scrollInvoked.value=",l.value)}return(d,r)=>{const i=S("logo");return Y((_(),h(pt,{color:"transparent",border:"",flat:"",height:"60"},{prepend:e(()=>[t(i),a("div",Wt,[t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[Ht]),_:2},1040)]),default:e(()=>[t(F,null,{default:e(()=>[t(O,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/introduce/introduce",variant:"text"},{default:e(()=>[Gt]),_:1}),t(u,{to:"/introduce/ai-ethics",variant:"text"},{default:e(()=>[Kt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[Qt]),_:2},1040)]),default:e(()=>[t(F,null,{default:e(()=>[t(O,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/archive/thesis",variant:"text"},{default:e(()=>[Yt]),_:1}),t(u,{to:"/archive/report",variant:"text"},{default:e(()=>[Jt]),_:1}),t(u,{to:"/archive/article",variant:"text"},{default:e(()=>[Xt]),_:1}),t(u,{to:"/archive/guideline",variant:"text"},{default:e(()=>[Zt]),_:1}),t(u,{to:"/archive/curriculum",variant:"text"},{default:e(()=>[te]),_:1}),t(u,{to:"/archive/refSite",variant:"text"},{default:e(()=>[ee]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[se]),_:2},1040)]),default:e(()=>[t(F,null,{default:e(()=>[t(O,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/news/notice",variant:"text"},{default:e(()=>[ae]),_:1}),t(u,{to:"/news/event",variant:"text"},{default:e(()=>[le]),_:1}),t(u,{to:"/news/event-calendar",variant:"text"},{default:e(()=>[oe]),_:1}),t(u,{to:"/news/event-regist",variant:"text"},{default:e(()=>[ne]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{"open-on-hover":""},{activator:e(({props:c})=>[t(u,M(c,{variant:"text"}),{default:e(()=>[ce]),_:2},1040)]),default:e(()=>[t(F,null,{default:e(()=>[t(O,null,{default:e(()=>[t(f,{class:"d-flex align-center justify-center",dense:""},{default:e(()=>[t(u,{to:"/suggest/faq",variant:"text"},{default:e(()=>[ie]),_:1}),t(u,{to:"/suggest/suggest",variant:"text"},{default:e(()=>[re]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),de]),_:1})),[[st,n,void 0,{self:!0}]])}}},_e={__name:"MainView",setup(s){const l=v(0);function n(){l.value++,console.log("scrollInvoked.value=",l.value)}return(d,r)=>{const i=S("router-view");return Y((_(),h(vt,null,{default:e(()=>[t(i)]),_:1})),[[st,n,void 0,{self:!0}]])}}},V=(s,l)=>{const n=s.__vccOpts||s;for(const[d,r]of l)n[d]=r;return n},fe={},me={class:"pa-4 mx-8"},he=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"소개",-1),pe=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"자료실",-1),ve=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"소식",-1),ge=a("strong",{class:"text-20 font-weight-bold text-grey-darken-1"},"문의/제안",-1),xe=a("strong",{class:"text-16 font-weight-bold text-grey-darken-1"}," 행사등록 신청 ",-1),be=a("strong",{class:"text-16 font-weight-bold text-grey-darken-1"},"개인정보처리방침",-1),ye=a("strong",{class:"text-16 font-weight-bold"}," 관련사이트 ",-1),$e={class:"d-flex flex-wrap mt-4 justify-end"};function we(s,l){const n=S("logo");return _(),h(G,{color:"#F4F4F4"},{default:e(()=>[t(w,null,{default:e(()=>[a("div",me,[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12",md:"3"},{default:e(()=>[t(n)]),_:1}),t(o,{cols:"12",md:"3"},{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/introduce",variant:"text",density:"compact"},{default:e(()=>[he]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/archive",variant:"text",density:"compact"},{default:e(()=>[pe]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/news",variant:"text",density:"compact"},{default:e(()=>[ve]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/suggest",variant:"text",density:"compact"},{default:e(()=>[ge]),_:1})]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",md:"3"},{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/news/event-regist",variant:"text",density:"compact"},{default:e(()=>[xe]),_:1})]),_:1})]),_:1}),t(f,{dense:""},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[t(u,{to:"/privacy-polocy",variant:"text",density:"compact"},{default:e(()=>[be]),_:1})]),_:1})]),_:1})]),_:1}),t(o,{cols:"12",md:"3",class:"text-end"},{default:e(()=>[t(I,{items:["나의AAC","NC문화재단","NC SOFT"],class:"ml-4",variant:"underlined",density:"compact"},{label:e(()=>[ye]),_:1}),a("div",$e,[t(u,{class:"mx-3",color:"grey",icon:"mdi-facebook",variant:"outlined"}),t(u,{color:"grey",icon:"mdi-youtube",variant:"outlined"})])]),_:1})]),_:1})])]),_:1})]),_:1})}const ke=V(fe,[["render",we]]),Ae={class:"bg_image"},Ie={__name:"index",setup(s){return(l,n)=>(_(),h(gt,null,{default:e(()=>[a("div",Ae,[t(m(ue)),t(m(_e)),t(m(ke))])]),_:1}))}},Ve=V(Ie,[["__scopeId","data-v-4e681e11"]]),ct={__name:"SearchField",emits:["search","click"],setup(s,{emit:l}){const n=v(""),d=l;function r(c){console.log("searchClick()=",c),d("search",c)}function i(){console.log("Click()="),d("click")}return(c,p)=>(_(),h(E,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=g=>n.value=g),placeholder:"검색",class:"mr-16",color:"primary","bg-color":"white",style:{"max-width":"600px"},variant:"outlined",rounded:"",density:"comfortable","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"",autofocus:"",onClick:p[1]||(p[1]=Q(g=>i(),["stop"])),onKeyup:p[2]||(p[2]=It(Q(g=>r(n.value),["prevent"]),["enter"]))},null,8,["modelValue"]))}},Z=s=>(T("data-v-c6afe764"),s=s(),N(),s),Pe=Z(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter"},"AI 윤리 관련")],-1)),Ee=Z(()=>a("div",null,[a("strong",{class:"text-68 font-weight-black text-black letter"},"최근 이슈"),a("strong",{class:"text-68 font-weight-light text-black letter"},"에 대해")],-1)),De=Z(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter"},"알아보세요.")],-1)),Le={__name:"index",setup(s){const l=X();function n(d){console.log("keyword=",d),l.push({name:"Search"})}return(d,r)=>(_(),h(w,null,{default:e(()=>[t(f,{align:"center",class:"mx-0",style:{height:"460px"}},{default:e(()=>[t(o,{cols:"6"},{default:e(()=>[Pe,Ee,De]),_:1}),t(o,{cols:"6"},{default:e(()=>[t(m(ct),{class:"ms-2",onClick:n})]),_:1})]),_:1})]),_:1}))}},Se=V(Le,[["__scopeId","data-v-c6afe764"]]);function Ce(s){return s!==void 0?`http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/card/${s}`:void 0}const K=s=>(T("data-v-203de49e"),s=s(),N(),s),Oe=K(()=>a("div",null,[a("h6",{class:"text-subtitle-1 mb-4"},"논문 해외")],-1)),Re={class:"text-30 letter","font-weight-bold":""},Te=K(()=>a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"저자")],-1)),Ne=K(()=>a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"발행")],-1)),je=K(()=>a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"연도")],-1)),Fe={__name:"ThesisCard",props:{card:{type:Object,default:null}},setup(s){const l=s;return(n,d)=>(_(),h(w,null,{default:e(()=>[l.card?(_(),h(L,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[Oe,a("div",null,[t(L,{height:"150",elevation:"0"},{default:e(()=>[a("strong",Re,y(l.card.thesis?l.card.thesis.title:""),1)]),_:1})]),a("div",null,[t(f,null,{default:e(()=>[t(o,{cols:"12",md:"5"},{default:e(()=>[t(B,{width:"163",height:"210",src:m(Ce)(l.card.id)},null,8,["src"])]),_:1}),t(o,{cols:"12",md:"7"},{default:e(()=>[Te,Ne,je]),_:1})]),_:1})])]),_:1})):at("",!0)]),_:1}))}},R=V(Fe,[["__scopeId","data-v-203de49e"]]),k=nt.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/fair/api",timeout:5e3});k.interceptors.request.use(s=>s,s=>(console.log("request err=",s),Promise.reject(s)));k.interceptors.response.use(s=>{const l=s.data;if(console.log("res.code=",l.code),l.code!==2e4){if(console.log("res.message=",l.message),!(l.code===50008||l.code===50012||l.code===50014)){if(l.code===60204||l.code===60205)return s}return Promise.reject(new Error(l.message||"Error"))}else return s},s=>(console.log("response err=",s),Promise.reject(s)));const it=nt.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000",timeout:3e4});it.interceptors.request.use(s=>(s.headers["Content-Type"]="multipart/form-data",s),s=>(console.log("requestStorage err=",s),Promise.reject(s)));it.interceptors.response.use(s=>s,s=>(console.log("requestStorage err=",s),Promise.reject(s)));function rt(s){return k({url:"/ai-card",method:"get",data:s})}const Be={__name:"index",setup(s){const l=v([]),n=v(!1),d=v(0);async function r(){n.value=!0,await rt().then(i=>{l.value=i.data.items,d.value=i.data.total}).catch(i=>{console.log(i)}),n.value=!1,console.log("card items=",l.value)}return r(),(i,c)=>(_(),h(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[0]},null,8,["card"])]),_:1}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[1]},null,8,["card"])]),_:1}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[2]},null,8,["card"])]),_:1})]),_:1}))}},qe={class:"text-30 font-weight-black"},ze=a("div",null,[a("strong",{class:"text-subtitle-1 mb-4"},"매일경제 자세히보기")],-1),et={__name:"ArticleCard",props:{card:{type:Object,default:null}},setup(s){const l=s;return(n,d)=>(_(),h(w,null,{default:e(()=>[l.card?(_(),h(L,{key:0,class:"pa-4",elevation:"0"},{default:e(()=>[a("div",null,[t(B,{width:"410",height:"226",cover:"",src:l.card.thumbnailUrl},null,8,["src"])]),a("div",null,[t(L,{class:"my-4",height:"100",elevation:"0"},{default:e(()=>[a("strong",qe,y(l.card?l.card.title:""),1)]),_:1})]),ze]),_:1})):at("",!0)]),_:1}))}};function rl(s){return k({url:"/ai-article-page",method:"post",data:s})}function Me(){return k({url:"/ai-article-last",method:"get"})}const Ue={__name:"ArticleView",setup(s){const l=v([]),n=v(!1),d=v(0);async function r(){n.value=!0,await Me().then(i=>{l.value=i.data.items,d.value=i.data.total}).catch(i=>{console.log(i)}),n.value=!1,console.log("article card items=",l.value)}return r(),(i,c)=>(_(),h(L,{class:"mx-0",elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t($,{thickness:3}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(m(et),{card:l.value[0]},null,8,["card"])]),_:1}),t($,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"6"},{default:e(()=>[t(m(et),{card:l.value[1]},null,8,["card"])]),_:1})]),_:1})]),_:1}))}},We=a("div",{style:{height:"180px"}},[a("strong",{class:"text-48 font-weight-black mb-24"},"최근AI이슈")],-1),He=a("div",{class:"mt-24"},[a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"이슈관련 키워드")],-1),Ge=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#AI윤리",-1),Ke=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#CES2024",-1),Qe=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#의료AI",-1),Ye=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#자율주행",-1),Je=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#강인공지능",-1),Xe=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#딥러닝",-1),Ze=a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#학습 콘텐츠",-1),ts={__name:"index",setup(s){return(l,n)=>(_(),h(L,{elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(w,null,{default:e(()=>[We,He,a("div",null,[t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ge]),_:1})]),a("div",null,[t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ke]),_:1}),t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Qe]),_:1})]),a("div",null,[t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ye]),_:1}),t(u,{class:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Je]),_:1})]),a("div",null,[t(u,{calss:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Xe]),_:1}),t(u,{calss:"ma-2",rounded:"xl",variant:"outlined"},{default:e(()=>[Ze]),_:1})])]),_:1})]),_:1}),t(o,{cols:"12",md:"8"},{default:e(()=>[t(m(Ue))]),_:1})]),_:1})]),_:1}))}},es={__name:"index",setup(s){const l=v([]),n=v(!1),d=v(0);async function r(){n.value=!0,await rt().then(i=>{l.value=i.data.items,d.value=i.data.total}).catch(i=>{console.log(i)}),n.value=!1,console.log("card items=",l.value)}return r(),(i,c)=>(_(),h(L,{elevation:"0"},{default:e(()=>[t(f,{"no-gutters":""},{default:e(()=>[t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[0]},null,8,["card"])]),_:1}),t($,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[1]},null,8,["card"])]),_:1}),t($,{class:"my-9",vertical:""}),t(o,{cols:"12",md:"4"},{default:e(()=>[t(m(R),{card:l.value[2]},null,8,["card"])]),_:1})]),_:1})]),_:1}))}},ss="/assets/poster--n1wukWi.png",as={};function ls(s,l){return _(),h(B,{src:ss,height:"380"})}const os=V(as,[["render",ls]]);function dl(){return k({url:"/ai-event-list",method:"get"})}function ul(s){return k({url:"/ai-event-page",method:"post",data:s})}function ns(s){return k({url:"/ai-event-last",method:"post",data:s})}const dt=s=>(T("data-v-1209920d"),s=s(),N(),s),cs={class:"bg_image"},is=dt(()=>a("strong",{class:"text-48 font-weight-bold text-white"},"행사안내",-1)),rs=dt(()=>a("div",{class:"py-6"},null,-1)),ds={__name:"index",setup(s){const l=v([]),n=v(!1),d=v(0),r=v({page:1,sortBy:"createdAt",sortType:"desc"});async function i(){n.value=!0,await ns(r.value).then(c=>{l.value=c.data.items,d.value=c.data.total}).catch(c=>{console.log(c)}),n.value=!1}return i(),J(r,c=>{i()},{deep:!0}),(c,p)=>(_(),D("div",cs,[t(f,{class:"mx-16"},{default:e(()=>[t(o,{cols:"1"}),t(o,{cols:"2",class:"mt-12"},{default:e(()=>[is]),_:1}),t(o,{cols:"9"},{default:e(()=>[rs,t(m(os))]),_:1})]),_:1})]))}},us=V(ds,[["__scopeId","data-v-1209920d"]]);function _l(s){return k({url:"/ai-notice-page",method:"post",data:s})}function _s(s){return k({url:"/ai-notice-last",method:"post",data:s})}const fs=Vt({props:{text:{type:String,default:null}},setup(){function s(){return!0}return{returnValue:s,closeDialog:Ct}}}),ut=s=>(T("data-v-e1ad5167"),s=s(),N(),s),ms={class:"dialog"},hs={class:"center"},ps=ut(()=>a("div",{class:"mx-4 text-h6 font-weight-bold"},"Warning",-1)),vs={class:"py-5 text-center"},gs={class:"mx-12 text-h6 font-weight-bold"},xs={class:"pa-4 text-end"},bs=ut(()=>a("div",{class:"text-h6 font-weight-bold"},"닫기",-1));function ys(s,l,n,d,r,i){return _(),D("div",ms,[a("div",hs,[t(G,{class:"mx-auto",elevation:"16","min-width":"400"},{default:e(()=>[t(xt,{color:"red-lighten-1",density:"compact"},{default:e(()=>[ps]),_:1}),t($),t(bt,null,{default:e(()=>[a("div",vs,[t(yt,{class:"mb-6",color:"red",icon:"mdi-check-circle-outline",size:"96"}),a("div",gs,y(s.text),1)]),t($),a("div",xs,[t(u,{class:"text-none mx-2",color:"medium-emphasis","min-width":"80",rounded:"",variant:"outlined",onClick:l[0]||(l[0]=Q(c=>s.closeDialog(!1),["stop"]))},{default:e(()=>[bs]),_:1})])]),_:1})]),_:1})])])}const $s=V(fs,[["render",ys],["__scopeId","data-v-e1ad5167"]]);async function fl(s){return await Ot($s,{text:s})}function ml(s){if(arguments.length===0||!s)return null;{const l=new Date(s);return`${l.getFullYear()}-${`00${l.getMonth()+1}`.substring(`00${l.getMonth()+1}`.length-2)}-${`00${l.getDate()}`.substring(`00${l.getDate()}`.length-2)} ${`00${l.getHours()}`.substring(`00${l.getHours()}`.length-2)}:${`00${l.getMinutes()}`.substring(`00${l.getMinutes()}`.length-2)}`}}function H(s){if(arguments.length===0||!s)return null;{const l=new Date(s);return`${l.getFullYear()}-${`00${l.getMonth()+1}`.substring(`00${l.getMonth()+1}`.length-2)}-${`00${l.getDate()}`.substring(`00${l.getDate()}`.length-2)}`}}const ws={class:"mx-16"},ks={class:"d-flex justify-space-between",style:{height:"60px"}},As=a("strong",{class:"text-20 font-weight-bold"}," 공지사항 ",-1),Is={class:"d-flex justify-space-between align-center",style:{height:"40px"}},Vs={class:"d-flex align-baseline flex-1"},Ps={class:"text-16 font-weight-medium"},Es={class:"text-body-2"},Ds={__name:"index",setup(s){const l=v([]),n=v(!1),d=v(0),r=v({page:1,sortBy:"createdAt",sortType:"desc"});async function i(){n.value=!0,await _s(r.value).then(c=>{l.value=c.data.items,d.value=c.data.total}).catch(c=>{console.log(c)}),n.value=!1}return i(),J(r,c=>{i()},{deep:!0}),(c,p)=>(_(),h(L,{class:"mx-16",elevation:"0"},{default:e(()=>[a("div",ws,[t($,{class:"mb-1",color:"black",thickness:3}),a("div",ks,[As,t(u,{size:"small",variant:"flat",class:"text-primary text-capitalize"},{default:e(()=>[U(" View All ")]),_:1})]),t($,{class:"mb-1"}),t(F,null,{default:e(()=>[(_(!0),D(W,null,lt(l.value,(g,A)=>(_(),h(O,{key:A},{default:e(()=>[a("div",Is,[a("div",Vs,[a("div",Ps,y(g.title),1)]),a("div",Es,y(g.updatedAt?m(H)(g.updatedAt):m(H)(g.createdAt)),1)]),t($,{class:"my-2"})]),_:2},1024))),128))]),_:1})])]),_:1}))}},Ls=a("div",{class:"py-1"},null,-1),Ss=a("div",{class:"py-2"},null,-1),Cs={__name:"index",setup(s){return(l,n)=>(_(),D(W,null,[t(w,{class:"w-75"},{default:e(()=>[t(m(Se)),t(m(Be)),Ls,t(m(ts)),Ss,t(m(es))]),_:1}),t(m(us)),t(w,null,{default:e(()=>[t(m(Ds))]),_:1})],64))}},x=s=>(T("data-v-275bc5fc"),s=s(),N(),s),Os=x(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"AI 윤리 관련 ")],-1)),Rs=x(()=>a("div",null,[a("strong",{class:"text-68 font-weight-black text-black letter text-disabled"},"최근 이슈"),a("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"에 대해")],-1)),Ts=x(()=>a("div",null,[a("strong",{class:"text-68 font-weight-light text-black letter text-disabled"},"알아보세요.")],-1)),Ns=x(()=>a("strong",{class:"text-16 text-black text-medium-emphasis"},"인기검색어",-1)),js=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#AI윤리",-1)),Fs=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#CES2024",-1)),Bs=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#의료AI",-1)),qs=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#자율주행",-1)),zs=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#강인공지능",-1)),Ms=x(()=>a("strong",{class:"text-subtitle-1 font-weight-black text-disabled"},"#딥러닝",-1)),Us=x(()=>a("div",{class:"ml-6"},"전체",-1)),Ws=x(()=>a("div",{class:"ml-3"},"논문명",-1)),Hs=x(()=>a("div",{class:"ml-6"},"저자",-1)),Gs=x(()=>a("div",{class:"ml-6"},"초록",-1)),Ks=x(()=>a("div",{class:"ml-6"},"국내",-1)),Qs=x(()=>a("div",{class:"ml-4"},"인용수",-1)),Ys=x(()=>a("div",{class:"py-16"},null,-1)),Js=x(()=>a("div",{class:"py-16"},null,-1)),Xs=x(()=>a("div",{class:"py-16"},null,-1)),Zs={__name:"index",setup(s){const l=X();function n(d){console.log("keyword=",d),l.push({name:"Search"})}return(d,r)=>(_(),h(w,null,{default:e(()=>[t(f,{align:"center",class:"mx-0",style:{height:"460px"}},{default:e(()=>[t(o,{cols:"6"},{default:e(()=>[Os,Rs,Ts]),_:1}),t(o,{cols:"6"},{default:e(()=>[t(m(ct),{class:"ms-2",onClick:n})]),_:1})]),_:1}),t($t,{class:"mb-16",color:"blue-lighten-4",elevation:"0",rounded:""},{default:e(()=>[t(wt,null,{title:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[Ns,t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[js]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[Fs]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[Bs]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[qs]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[zs]),_:1}),t(u,{class:"mx-2",rounded:"xl",size:"small",variant:"outlined"},{default:e(()=>[Ms]),_:1})]),_:1})]),_:1})]),text:e(()=>[t(w,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,null,{default:e(()=>[t(kt,{inline:""},{default:e(()=>[t(C,{label:"논문",value:"one"}),t(C,{label:"보고서",value:"two"}),t(C,{label:"기사",value:"three"}),t(C,{label:"가이드라인",value:"one"}),t(C,{label:"참고사이트",value:"two"}),t(C,{label:"교육커리큘럼",value:"three"}),t(C,{label:"행사",value:"three"})]),_:1})]),_:1})]),_:1}),t($),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Us]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Ws]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Hs]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t($),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[U(" 발행기관 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Gs]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[U(" 발행년도 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t($),t(f,{dense:""},{default:e(()=>[t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Ks]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[Qs]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"AI윤리",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,{dense:""},{default:e(()=>[t(o,{cols:"2"},{default:e(()=>[U(" 작성언어 ")]),_:1}),t(o,{cols:"7"},{default:e(()=>[t(E,{label:"선택하세요",variant:"outlined",density:"compact"})]),_:1}),t(o,{cols:"3"},{default:e(()=>[t(I,{label:"AND",items:["AND","OR"],density:"compact",variant:"outlined"})]),_:1})]),_:1})]),_:1})]),_:1}),t($),t(f,null,{default:e(()=>[t(o)]),_:1})]),_:1})]),_:1})]),_:1}),Ys,Js,Xs]),_:1}))}},ta=V(Zs,[["__scopeId","data-v-275bc5fc"]]),ea={__name:"index",setup(s){const{dataObj:l}=history.state;return console.log(l),(n,d)=>(_(),h(w,{class:"w-75"},{default:e(()=>[t(m(ta))]),_:1}))}},sa="/assets/TempImage--ka0W-ql.png",aa={class:"text-20 mb-4",style:{"font-weight":"600"}},la={class:"text-medium-emphasis text-body-2"},oa={class:"text-body-1 mb-4"},na={__name:"ThesisCard",props:{thesis:{type:Object,default:null}},setup(s){const l=s,n=ot(()=>l.thesis.abstract?l.thesis.abstract.substring(0,500):null);return(d,r)=>(_(),h(G,{class:"pa-2",flat:""},{default:e(()=>[t(f,null,{default:e(()=>[t(o,{cols:"12",md:"9"},{default:e(()=>[t(w,null,{default:e(()=>[a("div",aa,y(l.thesis.title),1),a("div",la,y(n.value)+"... ",1),a("div",oa,y(l.thesis.url),1)]),_:1})]),_:1}),t(o,{cols:"12",md:"3"},{default:e(()=>[t(B,{class:"mt-2",height:"150",src:sa})]),_:1})]),_:1})]),_:1}))}};function ca(s){return k({url:"/ai-thesis-page",method:"post",data:s})}const ia=a("div",{class:"py-1"},null,-1),ra={class:"text-center"},da={__name:"ThesisView",setup(s){const l=v(1),n=v([]),d=v(!1),r=v(0),i=v({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function c(){d.value=!0,await ca(i.value).then(p=>{n.value=p.data.items,r.value=p.data.total}).catch(p=>{console.log(p)}),d.value=!1}return c(),J(i,p=>{c()},{deep:!0}),(p,g)=>(_(),D(W,null,[(_(!0),D(W,null,lt(n.value,(A,P)=>(_(),D("div",{key:P},[t(m(na),{title:A.title,url:A.url,abstract:A.abstract?A.abstract.substring(0,250):null},null,8,["title","url","abstract"]),ia]))),128)),a("div",ra,[t(At,{modelValue:l.value,"onUpdate:modelValue":g[0]||(g[0]=A=>l.value=A),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},ua={class:"text-h5 font-weight-bold"},_a=a("div",{class:"py-1"},null,-1),fa={__name:"index",setup(s){const{dataObj:l}=history.state;return console.log(l),(n,d)=>(_(),h(w,null,{default:e(()=>[a("strong",ua,"검색결과: "+y(m(l).searchStr),1),t(da),_a]),_:1}))}},ma={class:"date_item"},ha={__name:"SelectEnforceDate",props:{modelValue:{type:Object,default:null},items:{type:Object,default:null}},emits:["update:modelValue"],setup(s,{emit:l}){const n=s,d=l,r=ot({get(){return n.modelValue},set(c){return d("update:modelValue",c)}});function i(c){console.log("select value=",c),r.value=n.items[c]}return(c,p)=>(_(),h(I,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=g=>r.value=g),items:s.items,"item-title":"enforceDate","item-value":"id",variant:"outlined",density:"compact","menu-props":{closeOnContentClick:!0},"return-object":"","single-line":"","hide-details":""},{item:e(({item:g,index:A})=>[(_(),h(O,{key:g.title,value:g.value,density:"compact","min-height":"5",onClick:P=>i(A)},{default:e(()=>[a("span",ma,y(m(H)(g.title)),1)]),_:2},1032,["value","onClick"]))]),selection:e(({item:g})=>[a("span",null,y(m(H)(g.title)),1)]),_:1},8,["modelValue","items"]))}},pa=V(ha,[["__scopeId","data-v-545ca651"]]);function va(){return k({url:"/ai-privacy-policy",method:"get"})}const _t=Tt("privacyPolicy",{state:()=>({list:[]}),actions:{async loadPrivacyPolicys(){await va().then(s=>{this.list=s.data.items}).catch(s=>{console.log(">>Store-load PrivacyPolicys fail. error=",s)})}},persist:!0}),ga=a("strong",{class:"pa-0 mb-4 text-h6 font-weight-bold"}," 개인정보처리방침 ",-1),xa={class:"d-flex flex-wrap mt-4 justify-end"},ba=a("div",{class:"py-1"},null,-1),ya=["textContent"],$a={__name:"PrivacyPolicyView",setup(s){const l=_t(),n=v(l.list[0]);function d(r){console.log("sel item=",r)}return(r,i)=>{const c=S("BaseCard");return _(),h(c,null,{default:e(()=>[t(f,null,{default:e(()=>[t(o,{cols:"10"},{default:e(()=>[ga]),_:1}),t(o,{cols:"2"},{default:e(()=>[a("div",xa,[t(m(pa),{modelValue:n.value,"onUpdate:modelValue":[i[0]||(i[0]=p=>n.value=p),d],items:m(l).list,class:"ms-2 select"},null,8,["modelValue","items"])])]),_:1})]),_:1}),ba,t(L,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"700"},{default:e(()=>[a("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:y(n.value?n.value.terms:null)},null,8,ya)]),_:1})]),_:1})}}},wa=a("div",{class:"py-2"},null,-1),ka={__name:"index",setup(s){return(l,n)=>(_(),h(w,null,{default:e(()=>[wa,t(m($a))]),_:1}))}},Aa={__name:"index",setup(s){return(l,n)=>{const d=S("router-view");return _(),h(d)}}},Ia={__name:"index",setup(s){return(l,n)=>{const d=S("router-view");return _(),h(d)}}},Va={__name:"index",setup(s){return(l,n)=>{const d=S("router-view");return _(),h(d)}}},Pa={},Ea=s=>(T("data-v-246d6314"),s=s(),N(),s),Da={class:"bg-white shadow"},La=Ea(()=>a("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[a("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1)),Sa=[La];function Ca(s,l){return _(),D("header",Da,Sa)}const Oa=V(Pa,[["render",Ca],["__scopeId","data-v-246d6314"]]);var Ra={};const Ta={path:"introduce",name:"introduce",component:Aa,redirect:"/introduce/introduce",meta:{title:"소개"},children:[{path:"introduce",name:"Introduce",meta:{title:"재단소개"},component:()=>b(()=>import("./index-ta2JnMS1.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"ai-ethics",name:"AiEthics",meta:{title:"AI윤리"},component:()=>b(()=>import("./index-gptekT6R.js"),__vite__mapDeps([5,1,2,3,4]))}]},Na={path:"archive",name:"자료실",component:Ia,redirect:"/archive/thesis",meta:{title:"Archive"},children:[{path:"thesis",name:"Thesis List",meta:{title:"논문 관리"},component:()=>b(()=>import("./index-I5pW1uc8.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12,13,14]))},{path:"report",name:"Report List",meta:{title:"보고서 관리"},component:()=>b(()=>import("./index-CGsNOjW1.js"),__vite__mapDeps([15,2,3,4,7,8,9,10,11,12,13,14]))},{path:"article",name:"Article List",meta:{title:"기사 관리"},component:()=>b(()=>import("./index-ln-UhYBk.js"),__vite__mapDeps([16,17,2,3,4,7,8,9,10,11,12,13,14]))},{path:"guideline",name:"Guideline List",meta:{title:"가이드라인 관리"},component:()=>b(()=>import("./index-bJkW4VNO.js"),__vite__mapDeps([18,2,3,4,7,8,9,10,11,12,13,14]))},{path:"/archive/refSite",name:"ReferenceSite List",meta:{title:"참고사이트 관리"},component:()=>b(()=>import("./index-0TfbZLSa.js"),__vite__mapDeps([19,2,3,4,7,8,9,10,11,12,13,14]))},{path:"curriculum",name:"Curriculum List",meta:{title:"교육커리큘럼 관리"},component:()=>b(()=>import("./index-dw1T_BbQ.js"),__vite__mapDeps([20,2,3,4,7,8,9,10,11,12,13,14]))}]},ja={path:"news",name:"News",component:Va,redirect:"/news/notice",meta:{title:"소식"},children:[{path:"notice",name:"Notice",meta:{title:"공지사항"},component:()=>b(()=>import("./index-e1pSWIA3.js"),__vite__mapDeps([21,2,3,4,7,8,9,10,11,12,13,14]))},{path:"event",name:"Event",meta:{title:"관련행사"},component:()=>b(()=>import("./index-zFLWdDwL.js"),__vite__mapDeps([22,17,2,3,4,7,8,9,10,11,12,13,14]))},{path:"event-calendar",name:"Event Calendar",meta:{title:"행사캘린더"},component:()=>b(()=>import("./index-5Dkm7NMx.js"),__vite__mapDeps([23,24,25,3,2,4,7,8,9,10,11,12,13,14]))},{path:"event-regist",name:"Evenet Regist",meta:{title:"행사신청"},component:()=>b(()=>import("./index-Flet2lKy.js"),__vite__mapDeps([26,3,27,2,4,7,8,9,10,11,12,13,14]))}]},Fa={path:"suggest",name:"suggest",component:()=>b(()=>import("./index-EBx4ptER.js"),__vite__mapDeps([28,3])),redirect:"/suggest/faq",meta:{title:"문의/제안"},children:[{path:"faq",name:"FAQ",meta:{title:"FAQ"},component:()=>b(()=>import("./index-av6xIcbj.js"),__vite__mapDeps([29,2,3,4,7,8,9,10,11,12,13,14]))},{path:"suggest",name:"Suggest",meta:{title:"문의/제안"},component:()=>b(()=>import("./index-308bIAST.js"),__vite__mapDeps([30,3,27,2,4,7,8,9,10,11,12,13,14]))}]},Ba=[{path:"/",name:"Home",meta:{title:"Home"},component:Ve,redirect:"/home",children:[{path:"home",name:"Home",component:Cs},{path:"search",name:"Search",component:ea},{path:"result",name:"Result",component:fa},{path:"privacy-polocy",name:"PrivacyPolocy",component:ka},Ta,Na,ja,Fa,{path:"/:path(.*)",component:Oa}]}],qa=Lt({history:St(Ra.BASE_URL),routes:Ba}),za="/assets/BI_new-aCWc14p9.svg",Ma={class:"pt-1",style:{width:"260px",height:"48px"}},Ua={__name:"Logo",setup(s){const l=X();function n(){l.push("/home")}return(d,r)=>(_(),D("div",Ma,[t(B,{src:za,class:"cursor-pointer",height:"40",alt:"Logo",onClick:n})]))}},Wa={class:"card-header"},Ha={class:"tio- text-18"},Ga={class:"card-title"},Ka={__name:"BaseCard",props:{cardTitle:{type:String,default:null},icon:{type:String,default:null},noPadding:{type:Boolean,default:!1}},setup(s){const l=s;return(n,d)=>(_(),h(G,{class:"card",elevation:"8"},{default:e(()=>[Y(a("div",Wa,[a("i",Ha,y(l.icon),1),a("div",Ga,y(l.cardTitle),1)],512),[[Pt,l.cardTitle]]),Et(n.$slots,"default",{},void 0,!0)]),_:3}))}},Qa=V(Ka,[["__scopeId","data-v-a74d9016"]]);function Ya(s){s.component("Logo",Ua).component("BaseCard",Qa)}const ft=Nt();ft.use(jt);function Ja(s){s.use(zt).use(qa).use(ft).use(Rt).use(Ft).use(Ya).component("DownloadExcel",Bt)}const Xa={__name:"App",setup(s){return _t().loadPrivacyPolicys(),(n,d)=>{const r=S("router-view");return _(),h(r)}}},mt=Dt(Xa);Ja(mt);mt.mount("#app");export{na as _,ct as a,sa as b,rl as c,H as d,_l as e,ca as f,ul as g,dl as h,it as i,ml as p,k as s,fl as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-ta2JnMS1.js","assets/Content-v2-KKqk_GRm.js","assets/vuetify-xWM4wXMg.js","assets/@vue-5qbJIjPN.js","assets/vuetify-sPw3oskJ.css","assets/index-gptekT6R.js","assets/index-I5pW1uc8.js","assets/vue-router-kO06wcas.js","assets/axios-L6U4YIEh.js","assets/vue3-promise-dialog-JNjw9D9N.js","assets/pinia-vSUcXG4D.js","assets/pinia-plugin-persistedstate-XbYvz584.js","assets/vue-detect-browser-HAC5R545.js","assets/vue-json-excel3-9SxCCbqx.js","assets/@mdi-z3tLSia1.css","assets/index-CGsNOjW1.js","assets/index-ln-UhYBk.js","assets/TempImage-dvg_ztwD.js","assets/index-bJkW4VNO.js","assets/index-0TfbZLSa.js","assets/index-dw1T_BbQ.js","assets/index-e1pSWIA3.js","assets/index-zFLWdDwL.js","assets/index-5Dkm7NMx.js","assets/@fullcalendar-9d2Q5ilX.js","assets/preact-yBSrjXcw.js","assets/index-Flet2lKy.js","assets/attachFile-p_gITBYI.js","assets/index-EBx4ptER.js","assets/index-av6xIcbj.js","assets/index-308bIAST.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
