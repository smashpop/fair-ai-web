/* empty css             */import{c as W,V as u,a as O,b as Q,d as D,e as $,f as x,g as H,h as S,i as Y,j as J,k as T,l as F,m as N,n as R,o as X,p as Z,q as ee,r as te,s as se}from"./vuetify-c5hRFog4.js";import{$ as w,l as d,a0 as _,a1 as s,I as e,a2 as n,y as m,r as g,a3 as oe,a4 as ne,w as B,u as I,p as V,F as A,a5 as j,v as b,k as ae,a6 as le,a7 as re,U as ce,W as ie,q as de,a8 as ue}from"./@vue-5G59DZlk.js";import{a as M}from"./axios-L6U4YIEh.js";import{u as _e,c as pe,a as me}from"./vue-router--y6Yrhe0.js";import{d as fe,c as he}from"./pinia-IseAD1qB.js";import{s as ge}from"./pinia-plugin-persistedstate-XbYvz584.js";import{b as ve}from"./vue-detect-browser-HAC5R545.js";import{s as ye}from"./vue-json-excel3-KrP0QM3b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=l(r);fetch(r.href,c)}})();const xe={VBtn:{}},be=W({defaults:xe,theme:{defaultTheme:"light",themes:{light:{colors:{background:"#DEDEDE",primary:"#472AB2",secondary:"#4AEAD8"}}}},icons:{defaultSet:"mdi"}}),$e="modulepreload",we=function(t){return"/"+t},q={},y=function(o,l,i){let r=Promise.resolve();if(l&&l.length>0){const c=document.getElementsByTagName("link");r=Promise.all(l.map(a=>{if(a=we(a),a in q)return;q[a]=!0;const p=a.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(!!i)for(let C=c.length-1;C>=0;C--){const k=c[C];if(k.href===a&&(!p||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${h}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":$e,p||(v.as="script",v.crossOrigin=""),v.href=a,document.head.appendChild(v),p)return new Promise((C,k)=>{v.addEventListener("load",C),v.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>o()).catch(c=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=c,window.dispatchEvent(a),!a.defaultPrevented)throw c})},Ve={class:"mx-12"},Pe=n("strong",{class:"text-h6 font-weight-bold"},"소개",-1),Ee=n("strong",{class:"text-h6 font-weight-bold"},"최신자료",-1),Ae=n("strong",{class:"text-h6 font-weight-bold"},"소식",-1),Le=n("strong",{class:"text-h6 font-weight-bold"},"문의/제안",-1),Se={__name:"Header",setup(t){return(o,l)=>{const i=w("logo");return d(),_(O,{color:"transparent",flat:"",height:"48"},{prepend:s(()=>[e(i),n("div",Ve,[e(u,{to:"/introduce"},{default:s(()=>[Pe]),_:1}),e(u,{to:"/archive"},{default:s(()=>[Ee]),_:1}),e(u,{to:"/news"},{default:s(()=>[Ae]),_:1}),e(u,{to:"/suggest"},{default:s(()=>[Le]),_:1})])]),_:1})}}},Ie={__name:"MainView",setup(t){return(o,l)=>{const i=w("router-view");return d(),_(Q,null,{default:s(()=>[e(i)]),_:1})}}},E=(t,o)=>{const l=t.__vccOpts||t;for(const[i,r]of o)l[i]=r;return l},Ce={},De=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"소개",-1),ke=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"자료실",-1),Oe=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"소식",-1),Te=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"문의/제안",-1),Re=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"}," 행사등록 신청 ",-1),Be=n("strong",{class:"text-subtitle-1 font-weight-bold text-grey-darken-1"},"개인정보처리방침",-1),je=n("strong",{class:"text-subtitle-1 font-weight-bold"}," 관련사이트 ",-1),Fe={class:"d-flex flex-wrap mt-4 justify-end"};function Ne(t,o){const l=w("logo");return d(),_(S,{color:"#F4F4F4"},{default:s(()=>[e(D,{class:"pa-8"},{default:s(()=>[e($,{dense:""},{default:s(()=>[e(x,{cols:"12",md:"3",class:"mb-12"},{default:s(()=>[e(l)]),_:1}),e(x,{cols:"12",md:"3"},{default:s(()=>[e($,{dense:""},{default:s(()=>[e(x,{cols:"12"},{default:s(()=>[e(u,{to:"/introduce",variant:"text",density:"compact"},{default:s(()=>[De]),_:1})]),_:1})]),_:1}),e($,{dense:""},{default:s(()=>[e(x,{cols:"12"},{default:s(()=>[e(u,{to:"/archive",variant:"text",density:"compact"},{default:s(()=>[ke]),_:1})]),_:1})]),_:1}),e($,{dense:""},{default:s(()=>[e(x,{cols:"12"},{default:s(()=>[e(u,{to:"/news",variant:"text",density:"compact"},{default:s(()=>[Oe]),_:1})]),_:1})]),_:1}),e($,{dense:""},{default:s(()=>[e(x,{cols:"12"},{default:s(()=>[e(u,{to:"/suggest",variant:"text",density:"compact"},{default:s(()=>[Te]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{cols:"12",md:"3"},{default:s(()=>[e($,{dense:""},{default:s(()=>[e(x,{cols:"12"},{default:s(()=>[e(u,{to:"/news/event-regist",variant:"text",density:"compact"},{default:s(()=>[Re]),_:1})]),_:1})]),_:1}),e($,{dense:""},{default:s(()=>[e(x,{cols:"12"},{default:s(()=>[e(u,{to:"/privacy-polocy",variant:"text",density:"compact"},{default:s(()=>[Be]),_:1})]),_:1})]),_:1})]),_:1}),e(x,{cols:"12",md:"3",class:"text-end"},{default:s(()=>[e(H,{items:["나의AAC","NC문화재단","NC SOFT"],class:"ml-4",variant:"underlined",density:"compact"},{label:s(()=>[je]),_:1}),n("div",Fe,[e(u,{class:"mx-3",color:"grey",icon:"mdi-facebook",variant:"outlined"}),e(u,{color:"grey",icon:"mdi-youtube",variant:"outlined"})])]),_:1})]),_:1})]),_:1})]),_:1})}const qe=E(Ce,[["render",Ne]]),He={class:"bg_image"},Me={__name:"index",setup(t){return(o,l)=>(d(),_(Y,null,{default:s(()=>[n("div",He,[e(m(Se)),e(m(Ie)),e(m(qe))])]),_:1}))}},Ue=E(Me,[["__scopeId","data-v-f3ebdd86"]]),ze={__name:"SearchField",emits:["search"],setup(t,{emit:o}){const l=g(""),i=o;function r(c){console.log("searchClick()=",c),i("search",c)}return(c,a)=>(d(),_(J,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=p=>l.value=p),placeholder:"검색",class:"mr-16",color:"primary","bg-color":"white",style:{"max-width":"600px"},variant:"outlined",rounded:"",density:"comfortable","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"",onKeyup:a[1]||(a[1]=oe(ne(p=>r(l.value),["prevent"]),["enter"]))},null,8,["modelValue"]))}},P=M.create({baseURL:"http://ec2-15-164-226-124.ap-northeast-2.compute.amazonaws.com:5000/fair/api",timeout:5e3});P.interceptors.request.use(t=>t,t=>(console.log("request err=",t),Promise.reject(t)));P.interceptors.response.use(t=>{const o=t.data;if(console.log("res.code=",o.code),o.code!==2e4){if(console.log("res.message=",o.message),!(o.code===50008||o.code===50012||o.code===50014)){if(o.code===60204||o.code===60205)return t}return Promise.reject(new Error(o.message||"Error"))}else return t},t=>(console.log("response err=",t),Promise.reject(t)));function Ge(t){return P({url:"/ai-article-page",method:"post",data:t})}function Ws(t){if(arguments.length===0||!t)return null;{const o=new Date(t);return`${o.getFullYear()}-${`00${o.getMonth()+1}`.substring(`00${o.getMonth()+1}`.length-2)}-${`00${o.getDate()}`.substring(`00${o.getDate()}`.length-2)} ${`00${o.getHours()}`.substring(`00${o.getHours()}`.length-2)}:${`00${o.getMinutes()}`.substring(`00${o.getMinutes()}`.length-2)}`}}function L(t){if(arguments.length===0||!t)return null;{const o=new Date(t);return`${o.getFullYear()}-${`00${o.getMonth()+1}`.substring(`00${o.getMonth()+1}`.length-2)}-${`00${o.getDate()}`.substring(`00${o.getDate()}`.length-2)}`}}const Ke={class:"d-flex justify-space-between"},We={class:"d-flex justify-space-between align-center"},Qe={class:"d-flex align-baseline flex-1"},Ye=n("div",{class:"bg-info pa-1 rounded-circle me-2"},null,-1),Je={class:"text-body-2 font-weight-medium"},Xe={class:"text-body-2"},Ze={__name:"ArticleView",setup(t){const o=g([]),l=g(!1),i=g(0),r=g({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function c(){l.value=!0,await Ge(r.value).then(a=>{o.value=a.data.items,i.value=a.data.total}).catch(a=>{console.log(a)}),l.value=!1}return c(),B(r,a=>{c()},{deep:!0}),(a,p)=>{const h=w("BaseCard");return d(),_(h,null,{default:s(()=>[n("div",Ke,[e(T,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:s(()=>[I(" 기사 ")]),_:1}),e(u,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:s(()=>[I(" View All ")]),_:1})]),e(F,{class:"mb-2"}),e(N,{density:"compact"},{default:s(()=>[(d(!0),V(A,null,j(o.value,(f,v)=>(d(),_(R,{key:v},{default:s(()=>[n("div",We,[n("div",Qe,[Ye,n("div",null,[n("div",Je,b(f.title),1)])]),n("div",Xe,b(f.updatedAt?m(L)(f.updatedAt):m(L)(f.createdAt)),1)])]),_:2},1024))),128))]),_:1})]),_:1})}}},U=M.create({baseURL:"http://localhost:5001",timeout:3e4});U.interceptors.request.use(t=>(t.headers["Content-Type"]="multipart/form-data",t),t=>(console.log("requestStorage err=",t),Promise.reject(t)));U.interceptors.response.use(t=>t,t=>(console.log("requestStorage err=",t),Promise.reject(t)));function Qs(t){return P({url:"/ai-notice-page",method:"post",data:t})}function et(t){return P({url:"/ai-notice-last",method:"post",data:t})}const tt={class:"d-flex justify-space-between"},st={class:"d-flex justify-space-between align-center"},ot={class:"d-flex align-baseline flex-1"},nt=n("div",{class:"bg-info pa-1 rounded-circle me-2"},null,-1),at={class:"text-body-2 font-weight-medium"},lt={class:"text-body-2"},rt={__name:"NoticeView",setup(t){const o=g([]),l=g(!1),i=g(0),r=g({page:1,sortBy:"createdAt",sortType:"desc"});async function c(){l.value=!0,await et(r.value).then(a=>{o.value=a.data.items,i.value=a.data.total}).catch(a=>{console.log(a)}),l.value=!1}return c(),B(r,a=>{c()},{deep:!0}),(a,p)=>{const h=w("BaseCard");return d(),_(h,null,{default:s(()=>[n("div",tt,[e(T,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:s(()=>[I(" 공지사항 ")]),_:1}),e(u,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:s(()=>[I(" View All ")]),_:1})]),e(F,{class:"mb-2"}),e(N,{density:"compact"},{default:s(()=>[(d(!0),V(A,null,j(o.value,(f,v)=>(d(),_(R,{key:v},{default:s(()=>[n("div",st,[n("div",ot,[nt,n("div",null,[n("div",at,b(f.title),1)])]),n("div",lt,b(f.updatedAt?m(L)(f.updatedAt):m(L)(f.createdAt)),1)])]),_:2},1024))),128))]),_:1})]),_:1})}}};function Ys(){return P({url:"/ai-event-list",method:"get"})}function Js(t){return P({url:"/ai-event-page",method:"post",data:t})}function ct(t){return P({url:"/ai-event-last",method:"post",data:t})}const it={class:"d-flex justify-space-between"},dt={class:"d-flex justify-space-between align-center"},ut={class:"d-flex align-baseline flex-1"},_t=n("div",{class:"bg-info pa-1 rounded-circle me-2"},null,-1),pt={class:"text-body-2 font-weight-medium"},mt={class:"text-body-2"},ft={__name:"EventView",setup(t){const o=g([]),l=g(!1),i=g(0),r=g({page:1,sortBy:"createdAt",sortType:"desc"});async function c(){l.value=!0,await ct(r.value).then(a=>{o.value=a.data.items,i.value=a.data.total}).catch(a=>{console.log(a)}),l.value=!1}return c(),B(r,a=>{c()},{deep:!0}),(a,p)=>{const h=w("BaseCard");return d(),_(h,{class:"mt-2"},{default:s(()=>[n("div",it,[e(T,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:s(()=>[I(" 행사사항 ")]),_:1}),e(u,{size:"small",flat:"",class:"text-primary text-capitalize"},{default:s(()=>[I(" View All ")]),_:1})]),e(F,{class:"mb-2"}),e(N,{density:"compact"},{default:s(()=>[(d(!0),V(A,null,j(o.value,(f,v)=>(d(),_(R,{key:v},{default:s(()=>[n("div",dt,[n("div",ut,[_t,n("div",null,[n("div",pt,b(f.eventName),1)])]),n("div",mt,b(f.updatedAt?m(L)(f.updatedAt):m(L)(f.createdAt)),1)])]),_:2},1024))),128))]),_:1})]),_:1})}}},ht={__name:"Gallery-v1",setup(t){return(o,l)=>(d(),_(S,{class:"pa-8"},{default:s(()=>[e($,null,{default:s(()=>[e(x,{lg:"4",md:"4",sm:"8",cols:"12"},{default:s(()=>[e(S,{height:"250",color:"grey-lighten-2",flat:""})]),_:1}),e(x,{lg:"4",md:"4",sm:"8",cols:"12"},{default:s(()=>[e(S,{height:"250",color:"grey-lighten-2",flat:""})]),_:1}),e(x,{lg:"4",md:"4",sm:"8",cols:"12"},{default:s(()=>[e(S,{height:"250",color:"grey-lighten-2",flat:""})]),_:1})]),_:1})]),_:1}))}},gt=n("div",{class:"py-2"},null,-1),vt={class:"d-flex justify-center"},yt=n("div",{class:"py-2"},null,-1),xt=n("div",{class:"py-1"},null,-1),bt=n("div",{class:"py-1"},null,-1),$t=n("div",{class:"py-1"},null,-1),wt=n("div",{class:"py-1"},null,-1),Vt={__name:"Home",setup(t){const o=_e();function l(i){console.log("keyword=",i),o.push({name:"Result",state:{dataObj:{searchStr:i}}})}return(i,r)=>(d(),_(D,null,{default:s(()=>[gt,n("div",vt,[e(m(ze),{class:"ms-2",onSearch:l})]),yt,e(m(ht)),xt,e(m(Ze)),bt,e(m(rt)),$t,e(m(ft)),wt]),_:1}))}},Pt={class:"text-h5 mb-4"},Et={class:"text-medium-emphasis text-body-2"},At={class:"text-body-1 mb-4"},Lt={__name:"ThesisCard",props:{title:{type:String,default:null},url:{type:String,default:null},abstract:{type:String,default:null}},setup(t){const o=t;return(l,i)=>(d(),_(S,{class:"pa-2",flat:""},{default:s(()=>[e($,null,{default:s(()=>[e(x,{cols:"12",md:"7"},{default:s(()=>[e(D,null,{default:s(()=>[n("h1",Pt,b(o.title),1),n("div",Et,b(o.abstract),1),n("h1",At,b(o.url),1)]),_:1})]),_:1}),e(X),e(x,{cols:"12",md:"3"},{default:s(()=>[e(Z,{height:"150",gradient:"#262626, #262626",class:"rounded elevation-5"})]),_:1})]),_:1})]),_:1}))}};function St(t){return P({url:"/ai-thesis-page",method:"post",data:t})}const It=n("div",{class:"py-1"},null,-1),Ct={class:"text-center"},Dt={__name:"ThesisView",setup(t){const o=g(1),l=g([]),i=g(!1),r=g(0),c=g({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function a(){i.value=!0,await St(c.value).then(p=>{l.value=p.data.items,r.value=p.data.total}).catch(p=>{console.log(p)}),i.value=!1}return a(),B(c,p=>{a()},{deep:!0}),(p,h)=>(d(),V(A,null,[(d(!0),V(A,null,j(l.value,(f,v)=>(d(),V("div",{key:v},[e(m(Lt),{title:f.title,url:f.url,abstract:f.abstract?f.abstract.substring(0,250):null},null,8,["title","url","abstract"]),It]))),128)),n("div",Ct,[e(ee,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=f=>o.value=f),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},kt={class:"text-h5 font-weight-bold"},Ot=n("div",{class:"py-1"},null,-1),Tt={__name:"index",setup(t){const{dataObj:o}=history.state;return console.log(o),(l,i)=>(d(),_(D,null,{default:s(()=>[n("strong",kt,"검색결과: "+b(m(o).searchStr),1),e(Dt),Ot]),_:1}))}},Rt={class:"date_item"},Bt={__name:"SelectEnforceDate",props:{modelValue:{type:Object,default:null},items:{type:Object,default:null}},emits:["update:modelValue"],setup(t,{emit:o}){const l=t,i=o,r=ae({get(){return l.modelValue},set(a){return i("update:modelValue",a)}});function c(a){console.log("select value=",a),r.value=a}return(a,p)=>(d(),_(H,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=h=>r.value=h),items:t.items,"item-title":"enforceDate","item-value":"id",variant:"outlined",density:"compact","menu-props":{closeOnContentClick:!0},"return-object":"","single-line":"","hide-details":""},{item:s(({item:h})=>[(d(),_(R,{key:h.title,value:h.value,density:"compact","min-height":"5",onClick:f=>c(h)},{default:s(()=>[n("span",Rt,b(m(L)(h.title)),1)]),_:2},1032,["value","onClick"]))]),selection:s(({item:h})=>[n("span",null,b(m(L)(h.title)),1)]),_:1},8,["modelValue","items"]))}},jt=E(Bt,[["__scopeId","data-v-570ab6be"]]);function Ft(){return P({url:"/ai-privacy-policy",method:"get"})}const z=fe("privacyPolicy",{state:()=>({list:[]}),actions:{async loadPrivacyPolicys(){await Ft().then(t=>{this.list=t.data.items}).catch(t=>{console.log(">>Store-load PrivacyPolicys fail. error=",t)})}},persist:!0}),Nt={class:"d-flex justify-space-between"},qt={class:"d-flex flex-wrap justify-end",style:{width:"250px"}},Ht=n("div",{class:"py-1"},null,-1),Mt=["textContent"],Ut={__name:"PrivacyPolicyView",setup(t){const o=z(),l=g(o.list[0]);function i(r){console.log("sel item=",r),l.value=r}return(r,c)=>{const a=w("BaseCard");return d(),_(a,null,{default:s(()=>[n("div",Nt,[e(T,{class:"pa-0 mb-4 text-h6 font-weight-bold"},{default:s(()=>[I(" 개인정보처리방침 ")]),_:1})]),n("div",qt,[e(m(jt),{modelValue:l.value,"onUpdate:modelValue":[c[0]||(c[0]=p=>l.value=p),c[1]||(c[1]=p=>i(r.value))],items:m(o).list,class:"ms-2 select"},null,8,["modelValue","items"])]),Ht,e(te,{class:"pa-2",color:"grey-lighten-4",border:"",rounded:"","min-height":"300"},{default:s(()=>[n("span",{class:"text-body-2",style:{"white-space":"pre-line"},textContent:b(l.value?l.value.terms:null)},null,8,Mt)]),_:1})]),_:1})}}},zt=n("div",{class:"py-2"},null,-1),Gt={__name:"index",setup(t){return(o,l)=>(d(),_(D,null,{default:s(()=>[zt,e(m(Ut))]),_:1}))}},Kt={},Wt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"재단소개",-1),Qt=n("strong",{class:"text-subtitle-1 font-weight-bold"},"AI윤리",-1);function Yt(t,o){return d(),_(O,{color:"indigo-darken-3",flat:"",height:"48"},{default:s(()=>[e($,{class:"d-flex align-center justify-center"},{default:s(()=>[e(u,{to:"/introduce/introduce"},{default:s(()=>[Wt]),_:1}),e(u,{to:"/introduce/ai-ethics"},{default:s(()=>[Qt]),_:1})]),_:1})]),_:1})}const Jt=E(Kt,[["render",Yt]]),Xt={__name:"index",setup(t){return(o,l)=>{const i=w("router-view");return d(),V(A,null,[e(m(Jt)),e(i)],64)}}},Zt={},es=n("strong",{class:"text-subtitle-1 font-weight-bold"},"논문",-1),ts=n("strong",{class:"text-subtitle-1 font-weight-bold"},"보고서",-1),ss=n("strong",{class:"text-subtitle-1 font-weight-bold"},"기사",-1),os=n("strong",{class:"text-subtitle-1 font-weight-bold"},"가이드라인",-1),ns=n("strong",{class:"text-subtitle-1 font-weight-bold"},"교육커리큘럼",-1),as=n("strong",{class:"text-subtitle-1 font-weight-bold"},"참고사이트",-1);function ls(t,o){return d(),_(O,{color:"indigo-darken-3",flat:"",height:"48"},{default:s(()=>[e($,{class:"d-flex align-center justify-center"},{default:s(()=>[e(u,{to:"/archive/thesis"},{default:s(()=>[es]),_:1}),e(u,{to:"/archive/report"},{default:s(()=>[ts]),_:1}),e(u,{to:"/archive/article"},{default:s(()=>[ss]),_:1}),e(u,{to:"/archive/guideline"},{default:s(()=>[os]),_:1}),e(u,{to:"/archive/curriculum"},{default:s(()=>[ns]),_:1}),e(u,{to:"/archive/refSite"},{default:s(()=>[as]),_:1})]),_:1})]),_:1})}const rs=E(Zt,[["render",ls]]),cs={__name:"index",setup(t){return(o,l)=>{const i=w("router-view");return d(),V(A,null,[e(m(rs)),e(i)],64)}}},is={},ds=n("strong",{class:"text-subtitle-1 font-weight-bold"},"공지사항",-1),us=n("strong",{class:"text-subtitle-1 font-weight-bold"},"관련행사",-1),_s=n("strong",{class:"text-subtitle-1 font-weight-bold"},"행사캘린더",-1),ps=n("strong",{class:"text-subtitle-1 font-weight-bold"},"행사신청",-1);function ms(t,o){return d(),_(O,{color:"indigo-darken-3",flat:"",height:"48"},{default:s(()=>[e($,{class:"d-flex align-center justify-center"},{default:s(()=>[e(u,{to:"/news/notice"},{default:s(()=>[ds]),_:1}),e(u,{to:"/news/event"},{default:s(()=>[us]),_:1}),e(u,{to:"/news/event-calendar"},{default:s(()=>[_s]),_:1}),e(u,{to:"/news/event-regist"},{default:s(()=>[ps]),_:1})]),_:1})]),_:1})}const fs=E(is,[["render",ms]]),hs={__name:"index",setup(t){return(o,l)=>{const i=w("router-view");return d(),V(A,null,[e(m(fs)),e(i)],64)}}},gs={},vs=t=>(le("data-v-246d6314"),t=t(),re(),t),ys={class:"bg-white shadow"},xs=vs(()=>n("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[n("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1)),bs=[xs];function $s(t,o){return d(),V("header",ys,bs)}const ws=E(gs,[["render",$s],["__scopeId","data-v-246d6314"]]);var Vs={};const Ps=[{path:"/",name:"Home",meta:{title:"Home"},component:Ue,redirect:"/home",children:[{path:"home",name:"Home",component:Vt},{path:"result",name:"Result",component:Tt},{path:"privacy-polocy",name:"PrivacyPolocy",component:Gt},{path:"introduce",name:"introduce",component:Xt,redirect:"/introduce/introduce",meta:{title:"소개"},children:[{path:"introduce",name:"Introduce",meta:{title:"재단소개"},component:()=>y(()=>import("./index-Q2fmfunp.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"ai-ethics",name:"AiEthics",meta:{title:"AI윤리"},component:()=>y(()=>import("./index-I5fLA5N0.js"),__vite__mapDeps([5,1,2,3,4]))}]},{path:"archive",name:"자료실",component:cs,redirect:"/archive/thesis",meta:{title:"Archive"},children:[{path:"thesis",name:"Thesis List",meta:{title:"논문 관리"},component:()=>y(()=>import("./index-uluAOls0.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12,13]))},{path:"report",name:"Report List",meta:{title:"보고서 관리"},component:()=>y(()=>import("./index-5HsG_z1X.js"),__vite__mapDeps([14,2,3,4,7,8,9,10,11,12,13]))},{path:"article",name:"Article List",meta:{title:"기사 관리"},component:()=>y(()=>import("./index-Gn_nLKMw.js"),__vite__mapDeps([15,2,3,4,7,8,9,10,11,12,13]))},{path:"guideline",name:"Guideline List",meta:{title:"가이드라인 관리"},component:()=>y(()=>import("./index-PqLCBpss.js"),__vite__mapDeps([16,2,3,4,7,8,9,10,11,12,13]))},{path:"/archive/refSite",name:"ReferenceSite List",meta:{title:"참고사이트 관리"},component:()=>y(()=>import("./index-XFNB9SNm.js"),__vite__mapDeps([17,2,3,4,7,8,9,10,11,12,13]))},{path:"curriculum",name:"Curriculum List",meta:{title:"교육커리큘럼 관리"},component:()=>y(()=>import("./index-OhHjreCn.js"),__vite__mapDeps([18,2,3,4,7,8,9,10,11,12,13]))}]},{path:"news",name:"News",component:hs,redirect:"/news/notice",meta:{title:"소식"},children:[{path:"notice",name:"Notice",meta:{title:"공지사항"},component:()=>y(()=>import("./index-pA1-jta_.js"),__vite__mapDeps([19,2,3,4,7,8,9,10,11,12,13]))},{path:"event",name:"Event",meta:{title:"관련행사"},component:()=>y(()=>import("./index-1SWoU17f.js"),__vite__mapDeps([20,2,3,4,7,8,9,10,11,12,13]))},{path:"event-calendar",name:"Event Calendar",meta:{title:"행사캘린더"},component:()=>y(()=>import("./index-aebDPdqd.js"),__vite__mapDeps([21,22,23,3,2,4,7,8,9,10,11,12,13]))},{path:"event-regist",name:"Evenet Regist",meta:{title:"행사신청"},component:()=>y(()=>import("./index-SJZ1vuvN.js"),__vite__mapDeps([24,2,3,4,7,8,9,10,11,12,13]))}]},{path:"suggest",name:"suggest",component:()=>y(()=>import("./index-uD2BW-4M.js"),__vite__mapDeps([25,2,3,4,7,8,9,10,11,12,13])),redirect:"/suggest/faq",meta:{title:"문의/제안"},children:[{path:"faq",name:"FAQ",meta:{title:"FAQ"},component:()=>y(()=>import("./index-TETMNI7Y.js"),__vite__mapDeps([26,2,3,4,7,8,9,10,11,12,13]))},{path:"suggest",name:"Suggest",meta:{title:"문의/제안"},component:()=>y(()=>import("./index-qmud-Tsi.js"),__vite__mapDeps([27,2,3,4]))}]},{path:"/:path(.*)",component:ws}]}],Es=pe({history:me(Vs.BASE_URL),routes:Ps}),As={},Ls=n("strong",{class:"text-h5 font-weight-black"},"FAIR-AI",-1);function Ss(t,o){return d(),_(u,{"prepend-icon":"mdi-lightning-bolt-circle",variant:"text",href:"/home"},{prepend:s(()=>[e(se,{color:"blue-grey",size:"30"})]),default:s(()=>[Ls]),_:1})}const Is=E(As,[["render",Ss]]),Cs={class:"card-header"},Ds={class:"tio- text-18"},ks={class:"card-title"},Os={__name:"BaseCard",props:{cardTitle:{type:String,default:null},icon:{type:String,default:null},noPadding:{type:Boolean,default:!1}},setup(t){const o=t;return(l,i)=>(d(),_(S,{class:"card"},{default:s(()=>[ce(n("div",Cs,[n("i",Ds,b(o.icon),1),n("div",ks,b(o.cardTitle),1)],512),[[ie,o.cardTitle]]),de(l.$slots,"default",{},void 0,!0)]),_:3}))}},Ts=E(Os,[["__scopeId","data-v-0a8a1f17"]]);function Rs(t){t.component("Logo",Is).component("BaseCard",Ts)}const G=he();G.use(ge);function Bs(t){t.use(be).use(Es).use(G).use(ve).use(Rs).component("DownloadExcel",ye)}const js={__name:"App",setup(t){return z().loadPrivacyPolicys(),(l,i)=>{const r=w("router-view");return d(),_(r)}}},K=ue(js);Bs(K);K.mount("#app");export{Dt as _,L as a,Qs as b,Js as c,Ys as d,E as e,Ge as f,Ws as p,P as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Q2fmfunp.js","assets/Content-v1-BvxVl0I4.js","assets/vuetify-c5hRFog4.js","assets/@vue-5G59DZlk.js","assets/vuetify-ZuF7K3jj.css","assets/index-I5fLA5N0.js","assets/index-uluAOls0.js","assets/axios-L6U4YIEh.js","assets/vue-router--y6Yrhe0.js","assets/pinia-IseAD1qB.js","assets/pinia-plugin-persistedstate-XbYvz584.js","assets/vue-detect-browser-HAC5R545.js","assets/vue-json-excel3-KrP0QM3b.js","assets/@mdi-z3tLSia1.css","assets/index-5HsG_z1X.js","assets/index-Gn_nLKMw.js","assets/index-PqLCBpss.js","assets/index-XFNB9SNm.js","assets/index-OhHjreCn.js","assets/index-pA1-jta_.js","assets/index-1SWoU17f.js","assets/index-aebDPdqd.js","assets/@fullcalendar-9qJcDari.js","assets/preact-yBSrjXcw.js","assets/index-SJZ1vuvN.js","assets/index-uD2BW-4M.js","assets/index-TETMNI7Y.js","assets/index-qmud-Tsi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
