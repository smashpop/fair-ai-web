/* empty css             */import{c as z,V as d,a as T,b as Y,d as G,e as K,f as k,g as j,h as F,i as H,j as C,k as S,l as L,m as V,n as W,o as J,p as Q,q as X}from"./vuetify-KkwUcGrN.js";import{O as u,P as $,Q as Z,R as ee,S as n,U as y,V as p,W as o,m as s,u as h,b as m,X as te,Y as se,w as B,Z as A,F as w,_ as R,$ as v,H as oe,J as ne,a0 as ae,a1 as re}from"./@vue-sWHR_rYu.js";import{a as M}from"./axios-L6U4YIEh.js";import{u as le,c as ce,a as ie}from"./vue-router-q8UsfMt9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(c){if(c.ep)return;c.ep=!0;const i=r(c);fetch(c.href,i)}})();const ue={VBtn:{}},de=z({defaults:ue,theme:{defaultTheme:"light",themes:{light:{colors:{background:"#DEDEDE",primary:"#472AB2",secondary:"#4AEAD8"}}}},icons:{defaultSet:"mdi"}}),_e="modulepreload",pe=function(e){return"/"+e},N={},x=function(t,r,l){let c=Promise.resolve();if(r&&r.length>0){const i=document.getElementsByTagName("link");c=Promise.all(r.map(a=>{if(a=pe(a),a in N)return;N[a]=!0;const f=a.endsWith(".css"),b=f?'[rel="stylesheet"]':"";if(!!l)for(let I=i.length-1;I>=0;I--){const O=i[I];if(O.href===a&&(!f||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${b}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":_e,f||(g.as="script",g.crossOrigin=""),g.href=a,document.head.appendChild(g),f)return new Promise((I,O)=>{g.addEventListener("load",I),g.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${a}`)))})}))}return c.then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},D=(e,t)=>{const r=e.__vccOpts||e;for(const[l,c]of t)r[l]=c;return r},he={},fe=e=>(Z("data-v-246d6314"),e=e(),ee(),e),me={class:"bg-white shadow"},ge=fe(()=>n("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[n("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1)),ve=[ge];function xe(e,t){return u(),$("header",me,ve)}const $e=D(he,[["render",xe],["__scopeId","data-v-246d6314"]]),be={class:"mr-12"},ye=n("strong",{class:"text-subtitle-1 font-weight-bold"},"HOME",-1),we=n("strong",{class:"text-subtitle-1 font-weight-bold"},"FAIR AI 소개",-1),Ee=n("strong",{class:"text-subtitle-1 font-weight-bold"},"최신자료",-1),Le=n("strong",{class:"text-subtitle-1 font-weight-bold"},"소식",-1),Ve=n("strong",{class:"text-subtitle-1 font-weight-bold"},"문의/제안",-1),Ae={__name:"Header",setup(e){return(t,r)=>{const l=y("logo");return u(),p(T,{color:"indigo-darken-4",flat:"",height:"48"},{prepend:o(()=>[s(l)]),append:o(()=>[n("div",be,[s(d,{text:"HOME",to:"/home"},{default:o(()=>[ye]),_:1}),s(d,{to:"/introduce"},{default:o(()=>[we]),_:1}),s(d,{to:"/archive"},{default:o(()=>[Ee]),_:1}),s(d,{to:"/news"},{default:o(()=>[Le]),_:1}),s(d,{to:"/suggest"},{default:o(()=>[Ve]),_:1})])]),_:1})}}},Pe={__name:"MainView",setup(e){return(t,r)=>{const l=y("router-view");return u(),p(Y,null,{default:o(()=>[s(l)]),_:1})}}},Se={__name:"Default",setup(e){return(t,r)=>(u(),p(G,null,{default:o(()=>[s(h(Ae)),s(h(Pe))]),_:1}))}},Ie={__name:"SearchField",emits:["search"],setup(e,{emit:t}){const r=m(""),l=t;function c(i){console.log("searchClick()=",i),l("search",i)}return(i,a)=>(u(),p(K,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=f=>r.value=f),placeholder:"검색",class:"mr-16",color:"primary","bg-color":"white",style:{"max-width":"600px"},variant:"outlined",rounded:"",density:"comfortable","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"",onKeyup:a[1]||(a[1]=te(se(f=>c(r.value),["prevent"]),["enter"]))},null,8,["modelValue"]))}},E=M.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/fair/api",timeout:5e3});E.interceptors.request.use(e=>e,e=>(console.log("request err=",e),Promise.reject(e)));E.interceptors.response.use(e=>{const t=e.data;if(console.log("res.code=",t.code),t.code!==2e4){if(console.log("res.message=",t.message),!(t.code===50008||t.code===50012||t.code===50014)){if(t.code===60204||t.code===60205)return e}return Promise.reject(new Error(t.message||"Error"))}else return e},e=>(console.log("response err=",e),Promise.reject(e)));function Re(e){return E({url:"/ai-article-page",method:"post",data:e})}function _s(e){if(arguments.length===0||!e)return null;{const t=new Date(e);return`${t.getFullYear()}-${`00${t.getMonth()+1}`.substring(`00${t.getMonth()+1}`.length-2)}-${`00${t.getDate()}`.substring(`00${t.getDate()}`.length-2)} ${`00${t.getHours()}`.substring(`00${t.getHours()}`.length-2)}:${`00${t.getMinutes()}`.substring(`00${t.getMinutes()}`.length-2)}`}}function P(e){if(arguments.length===0||!e)return null;{const t=new Date(e);return`${t.getFullYear()}-${`00${t.getMonth()+1}`.substring(`00${t.getMonth()+1}`.length-2)}-${`00${t.getDate()}`.substring(`00${t.getDate()}`.length-2)}`}}const De={class:"d-flex justify-space-between"},Oe={class:"d-flex justify-space-between align-center"},Te={class:"d-flex align-baseline flex-1"},Ce=n("div",{class:"bg-info pa-1 rounded-circle me-2"},null,-1),Be={class:"text-body-2 font-weight-medium"},ke={class:"text-body-2"},je={__name:"ArticleView",setup(e){const t=m([]),r=m(!1),l=m(0),c=m({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function i(){r.value=!0,await Re(c.value).then(a=>{t.value=a.data.items,l.value=a.data.total}).catch(a=>{console.log(a)}),r.value=!1}return i(),B(c,a=>{i()},{deep:!0}),(a,f)=>{const b=y("BaseCard");return u(),p(b,null,{default:o(()=>[n("div",De,[s(k,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:o(()=>[A(" 기사 ")]),_:1}),s(d,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:o(()=>[A(" View All ")]),_:1})]),s(j,{class:"mb-2"}),s(F,{density:"compact"},{default:o(()=>[(u(!0),$(w,null,R(t.value,(_,g)=>(u(),p(H,{key:g},{default:o(()=>[n("div",Oe,[n("div",Te,[Ce,n("div",null,[n("div",Be,v(_.title),1)])]),n("div",ke,v(_.updatedAt?h(P)(_.updatedAt):h(P)(_.createdAt)),1)])]),_:2},1024))),128))]),_:1})]),_:1})}}},U=M.create({baseURL:"http://localhost:5001",timeout:3e4});U.interceptors.request.use(e=>(e.headers["Content-Type"]="multipart/form-data",e),e=>(console.log("requestStorage err=",e),Promise.reject(e)));U.interceptors.response.use(e=>e,e=>(console.log("requestStorage err=",e),Promise.reject(e)));function ps(e){return E({url:"/ai-notice-page",method:"post",data:e})}function Fe(e){return E({url:"/ai-notice-last",method:"post",data:e})}const He={class:"d-flex justify-space-between"},Ne={class:"d-flex justify-space-between align-center"},Me={class:"d-flex align-baseline flex-1"},Ue=n("div",{class:"bg-info pa-1 rounded-circle me-2"},null,-1),qe={class:"text-body-2 font-weight-medium"},ze={class:"text-body-2"},Ye={__name:"NoticeView",setup(e){const t=m([]),r=m(!1),l=m(0),c=m({page:1,sortBy:"createdAt",sortType:"desc"});async function i(){r.value=!0,await Fe(c.value).then(a=>{t.value=a.data.items,l.value=a.data.total}).catch(a=>{console.log(a)}),r.value=!1}return i(),B(c,a=>{i()},{deep:!0}),(a,f)=>{const b=y("BaseCard");return u(),p(b,null,{default:o(()=>[n("div",He,[s(k,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:o(()=>[A(" 공지사항 ")]),_:1}),s(d,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:o(()=>[A(" View All ")]),_:1})]),s(j,{class:"mb-2"}),s(F,{density:"compact"},{default:o(()=>[(u(!0),$(w,null,R(t.value,(_,g)=>(u(),p(H,{key:g},{default:o(()=>[n("div",Ne,[n("div",Me,[Ue,n("div",null,[n("div",qe,v(_.title),1)])]),n("div",ze,v(_.updatedAt?h(P)(_.updatedAt):h(P)(_.createdAt)),1)])]),_:2},1024))),128))]),_:1})]),_:1})}}};function hs(){return E({url:"/ai-event-list",method:"get"})}function fs(e){return E({url:"/ai-event-page",method:"post",data:e})}function Ge(e){return E({url:"/ai-event-last",method:"post",data:e})}const Ke={class:"d-flex justify-space-between"},We={class:"d-flex justify-space-between align-center"},Je={class:"d-flex align-baseline flex-1"},Qe=n("div",{class:"bg-info pa-1 rounded-circle me-2"},null,-1),Xe={class:"text-body-2 font-weight-medium"},Ze={class:"text-body-2"},et={__name:"EventView",setup(e){const t=m([]),r=m(!1),l=m(0),c=m({page:1,sortBy:"createdAt",sortType:"desc"});async function i(){r.value=!0,await Ge(c.value).then(a=>{t.value=a.data.items,l.value=a.data.total}).catch(a=>{console.log(a)}),r.value=!1}return i(),B(c,a=>{i()},{deep:!0}),(a,f)=>{const b=y("BaseCard");return u(),p(b,{class:"mt-2"},{default:o(()=>[n("div",Ke,[s(k,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:o(()=>[A(" 행사사항 ")]),_:1}),s(d,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:o(()=>[A(" View All ")]),_:1})]),s(j,{class:"mb-2"}),s(F,{density:"compact"},{default:o(()=>[(u(!0),$(w,null,R(t.value,(_,g)=>(u(),p(H,{key:g},{default:o(()=>[n("div",We,[n("div",Je,[Qe,n("div",null,[n("div",Xe,v(_.eventName),1)])]),n("div",Ze,v(_.updatedAt?h(P)(_.updatedAt):h(P)(_.createdAt)),1)])]),_:2},1024))),128))]),_:1})]),_:1})}}},tt={class:"d-flex flex-wrap ga-4 justify-end"},st={class:"px-4"},ot={__name:"Footer-v1",setup(e){const t=["Home","About Us","Portfolio","Services","Contact"];return(r,l)=>{const c=y("logo");return u(),p(V,null,{default:o(()=>[s(C,{class:"pa-8"},{default:o(()=>[s(S,null,{default:o(()=>[s(L,{cols:"12",class:"d-flex justify-space-between mb-12"},{default:o(()=>[s(c),n("div",tt,[s(d,{color:"primary",text:"Signup",variant:"flat"}),s(d,{color:"primary",text:"Login",variant:"outlined"})])]),_:1}),s(L,{cols:"12",md:"5",class:"text-grey-darken-1 d-flex justify-md-start justify-end"},{default:o(()=>[n("div",st,"© "+v(new Date().getFullYear())+", Infix, LLC",1)]),_:1}),s(L,{cols:"12",md:"7",class:"text-end"},{default:o(()=>[(u(),$(w,null,R(t,i=>s(d,{key:i,variant:"text",class:"ms-4 text-grey-darken-1",rounded:""},{default:o(()=>[A(v(i),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})}}},nt={__name:"Gallery-v1",setup(e){return(t,r)=>(u(),p(V,{class:"pa-8"},{default:o(()=>[s(S,null,{default:o(()=>[s(L,{lg:"4",md:"4",sm:"8",cols:"12"},{default:o(()=>[s(V,{height:"250",color:"grey-lighten-2",flat:""})]),_:1}),s(L,{lg:"4",md:"4",sm:"8",cols:"12"},{default:o(()=>[s(V,{height:"250",color:"grey-lighten-2",flat:""})]),_:1}),s(L,{lg:"4",md:"4",sm:"8",cols:"12"},{default:o(()=>[s(V,{height:"250",color:"grey-lighten-2",flat:""})]),_:1})]),_:1})]),_:1}))}},at=n("div",{class:"py-2"},null,-1),rt={class:"d-flex justify-center"},lt=n("div",{class:"py-2"},null,-1),ct=n("div",{class:"py-1"},null,-1),it=n("div",{class:"py-1"},null,-1),ut=n("div",{class:"py-1"},null,-1),dt=n("div",{class:"py-1"},null,-1),_t={__name:"Home",setup(e){const t=le();function r(l){console.log("keyword=",l),t.push({name:"Result",state:{dataObj:{searchStr:l}}})}return(l,c)=>(u(),p(C,null,{default:o(()=>[at,n("div",rt,[s(h(Ie),{class:"ms-2",onSearch:r})]),lt,s(h(nt)),ct,s(h(je)),it,s(h(Ye)),ut,s(h(et)),dt,s(h(ot))]),_:1}))}},pt={class:"text-h5 mb-4"},ht={class:"text-medium-emphasis text-body-2"},ft={class:"text-body-1 mb-4"},mt={__name:"ThesisCard",props:{title:{type:String,default:null},url:{type:String,default:null},abstract:{type:String,default:null}},setup(e){const t=e;return(r,l)=>(u(),p(V,{class:"pa-2",flat:""},{default:o(()=>[s(S,null,{default:o(()=>[s(L,{cols:"12",md:"7"},{default:o(()=>[s(C,null,{default:o(()=>[n("h1",pt,v(t.title),1),n("div",ht,v(t.abstract),1),n("h1",ft,v(t.url),1)]),_:1})]),_:1}),s(W),s(L,{cols:"12",md:"3"},{default:o(()=>[s(J,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function gt(e){return E({url:"/ai-thesis-page",method:"post",data:e})}const vt=n("div",{class:"py-1"},null,-1),xt={class:"text-center"},$t={__name:"ThesisView",setup(e){const t=m(1),r=m([]),l=m(!1),c=m(0),i=m({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function a(){l.value=!0,await gt(i.value).then(f=>{r.value=f.data.items,c.value=f.data.total}).catch(f=>{console.log(f)}),l.value=!1}return a(),B(i,f=>{a()},{deep:!0}),(f,b)=>(u(),$(w,null,[(u(!0),$(w,null,R(r.value,(_,g)=>(u(),$("div",{key:g},[s(h(mt),{title:_.title,url:_.url,abstract:_.abstract?_.abstract.substring(0,250):null},null,8,["title","url","abstract"]),vt]))),128)),n("div",xt,[s(Q,{modelValue:t.value,"onUpdate:modelValue":b[0]||(b[0]=_=>t.value=_),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},bt={class:"text-h5 font-weight-bold"},yt=n("div",{class:"py-1"},null,-1),wt={__name:"index",setup(e){const{dataObj:t}=history.state;return console.log(t),(r,l)=>(u(),p(C,null,{default:o(()=>[n("strong",bt,"검색결과: "+v(h(t).searchStr),1),s($t),yt]),_:1}))}},Et={},Lt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"재단소개",-1),Vt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"AI윤리",-1);function At(e,t){return u(),p(T,{color:"indigo-darken-3",flat:"",height:"48"},{default:o(()=>[s(S,{class:"d-flex align-center justify-center"},{default:o(()=>[s(d,{to:"/introduce/introduce"},{default:o(()=>[Lt]),_:1}),s(d,{to:"/introduce/ai-ethics"},{default:o(()=>[Vt]),_:1})]),_:1})]),_:1})}const Pt=D(Et,[["render",At]]),St={__name:"index",setup(e){return(t,r)=>{const l=y("router-view");return u(),$(w,null,[s(h(Pt)),s(l)],64)}}},It={},Rt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"논문",-1),Dt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"보고서",-1),Ot=n("strong",{class:"text-subtitle-1 font-weight-bold"},"기사",-1),Tt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"가이드라인",-1),Ct=n("strong",{class:"text-subtitle-1 font-weight-bold"},"교육커리큘럼",-1),Bt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"참고사이트",-1);function kt(e,t){return u(),p(T,{color:"indigo-darken-3",flat:"",height:"48"},{default:o(()=>[s(S,{class:"d-flex align-center justify-center"},{default:o(()=>[s(d,{to:"/archive/thesis"},{default:o(()=>[Rt]),_:1}),s(d,{to:"/archive/report"},{default:o(()=>[Dt]),_:1}),s(d,{to:"/archive/article"},{default:o(()=>[Ot]),_:1}),s(d,{to:"/archive/guideline"},{default:o(()=>[Tt]),_:1}),s(d,{to:"/archive/curriculum"},{default:o(()=>[Ct]),_:1}),s(d,{to:"/archive/refSite"},{default:o(()=>[Bt]),_:1})]),_:1})]),_:1})}const jt=D(It,[["render",kt]]),Ft={__name:"index",setup(e){return(t,r)=>{const l=y("router-view");return u(),$(w,null,[s(h(jt)),s(l)],64)}}},Ht={},Nt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"공지사항",-1),Mt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"관련행사",-1),Ut=n("strong",{class:"text-subtitle-1 font-weight-bold"},"행사캘린더",-1),qt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"행사신청",-1);function zt(e,t){return u(),p(T,{color:"indigo-darken-3",flat:"",height:"48"},{default:o(()=>[s(S,{class:"d-flex align-center justify-center"},{default:o(()=>[s(d,{to:"/news/notice"},{default:o(()=>[Nt]),_:1}),s(d,{to:"/news/event"},{default:o(()=>[Mt]),_:1}),s(d,{to:"/news/eventCalendar"},{default:o(()=>[Ut]),_:1}),s(d,{to:"/news/eventRegist"},{default:o(()=>[qt]),_:1})]),_:1})]),_:1})}const Yt=D(Ht,[["render",zt]]),Gt={__name:"index",setup(e){return(t,r)=>{const l=y("router-view");return u(),$(w,null,[s(h(Yt)),s(l)],64)}}};var Kt={};const Wt=[{path:"/",component:Se,redirect:"/home",children:[{path:"/home",name:"Home",component:_t},{path:"/result",name:"Result",component:wt},{path:"/introduce",name:"Introduce",component:St,redirect:"/introduce/introduce",meta:{title:"소개"},children:[{path:"/introduce/introduce",name:"Introduce",meta:{title:"재단소개"},component:()=>x(()=>import("./Introduce-hW3n4Wyc.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"/introduce/ai-ethics",name:"AiEthics",meta:{title:"AI윤리"},component:()=>x(()=>import("./AiEthics-9JvgcRTT.js"),__vite__mapDeps([5,1,2,3,4]))}]},{path:"/archive",name:"자료실",component:Ft,redirect:"/archive/thesis",meta:{title:"Archive"},children:[{path:"/archive/thesis",name:"Thesis List",meta:{title:"논문 관리"},component:()=>x(()=>import("./index-2jN-WjKz.js"),__vite__mapDeps([6,2,3,4,7,8,9]))},{path:"/archive/report",name:"Report List",meta:{title:"보고서 관리"},component:()=>x(()=>import("./index-IOklgg9H.js"),__vite__mapDeps([10,2,3,4,7,8,9]))},{path:"/archive/article",name:"Article List",meta:{title:"기사 관리"},component:()=>x(()=>import("./index-3xJ28Dqm.js"),__vite__mapDeps([11,2,3,4,7,8,9]))},{path:"/archive/guideline",name:"Guideline List",meta:{title:"가이드라인 관리"},component:()=>x(()=>import("./index--NC_WMP_.js"),__vite__mapDeps([12,2,3,4,7,8,9]))},{path:"/archive/refSite",name:"ReferenceSite List",meta:{title:"참고사이트 관리"},component:()=>x(()=>import("./index-TUAYcer2.js"),__vite__mapDeps([13,2,3,4,7,8,9]))},{path:"/archive/curriculum",name:"Curriculum List",meta:{title:"교육커리큘럼 관리"},component:()=>x(()=>import("./index-zPPDQFTV.js"),__vite__mapDeps([14,2,3,4,7,8,9]))}]},{path:"/news",name:"News",component:Gt,redirect:"/news/notice",meta:{title:"소식"},children:[{path:"/news/notice",name:"Notice",meta:{title:"공지사항"},component:()=>x(()=>import("./index-tsadnxw2.js"),__vite__mapDeps([15,2,3,4,7,8,9]))},{path:"/news/event",name:"Event",meta:{title:"관련행사"},component:()=>x(()=>import("./index-BTWEHAyG.js"),__vite__mapDeps([16,2,3,4,7,8,9]))},{path:"/news/eventCalendar",name:"Event Calendar",meta:{title:"행사캘린더"},component:()=>x(()=>import("./index-NtBwaHE1.js"),__vite__mapDeps([17,18,19,3,2,4,7,8,9]))},{path:"/news/eventRegist",name:"Evenet Regist",meta:{title:"행사신청"},component:()=>x(()=>import("./index-g2HEtzA2.js"),__vite__mapDeps([20,2,3,4,7,8,9]))}]},{path:"/suggest",name:"Suggest",component:()=>x(()=>import("./index-KDX7hU0I.js"),__vite__mapDeps([21,2,3,4]))},{path:"/:path(.*)",component:$e}]}],Jt=ce({history:ie(Kt.BASE_URL),routes:Wt}),Qt=n("strong",{class:"text-h6 font-weight-black"},"FAIR-AI",-1),Xt={__name:"Logo",setup(e){return(t,r)=>(u(),p(d,{"prepend-icon":"mdi-lightning-bolt-circle",href:"/home"},{prepend:o(()=>[s(X,{color:"blue-grey",size:"30"})]),default:o(()=>[Qt]),_:1}))}},Zt={class:"card-header"},es={class:"tio- text-18"},ts={class:"card-title"},ss={__name:"BaseCard",props:{cardTitle:{type:String,default:null},icon:{type:String,default:null},noPadding:{type:Boolean,default:!1}},setup(e){const t=e;return(r,l)=>(u(),p(V,{class:"card"},{default:o(()=>[oe(n("div",Zt,[n("i",es,v(t.icon),1),n("div",ts,v(t.cardTitle),1)],512),[[ne,t.cardTitle]]),ae(r.$slots,"default",{},void 0,!0)]),_:3}))}},os=D(ss,[["__scopeId","data-v-0a8a1f17"]]);function ns(e){e.component("Logo",Xt).component("BaseCard",os)}function as(e){e.use(de).use(Jt).use(ns)}const rs={__name:"App",setup(e){return(t,r)=>{const l=y("router-view");return u(),p(l)}}},q=re(rs);as(q);q.mount("#app");export{$t as _,P as a,ps as b,fs as c,hs as d,D as e,Re as f,_s as p,E as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Introduce-hW3n4Wyc.js","assets/Content-v1-Cg53ekVW.js","assets/vuetify-KkwUcGrN.js","assets/@vue-sWHR_rYu.js","assets/vuetify-hhPxygCX.css","assets/AiEthics-9JvgcRTT.js","assets/index-2jN-WjKz.js","assets/axios-L6U4YIEh.js","assets/vue-router-q8UsfMt9.js","assets/@mdi-z3tLSia1.css","assets/index-IOklgg9H.js","assets/index-3xJ28Dqm.js","assets/index--NC_WMP_.js","assets/index-TUAYcer2.js","assets/index-zPPDQFTV.js","assets/index-tsadnxw2.js","assets/index-BTWEHAyG.js","assets/index-NtBwaHE1.js","assets/@fullcalendar-Y-ICjaWT.js","assets/preact-yBSrjXcw.js","assets/index-g2HEtzA2.js","assets/index-KDX7hU0I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
