import{r as y,k as q,l as g,u as E,R as e,E as o,H as C,y as f,F as k,ab as T,p as A,z as x,a8 as B,B as F,a7 as N}from"./@vue-W6jyxCSA.js";import{D as R}from"./vue3-promise-dialog-G_62FsX2.js";import{B as I,w as i,C as O,D as P,V as $,e as d,i as n,k as z,r as L,E as H,F as M,x as W,G as j,H as G,a as S,h,I as Y,p as J}from"./vuetify-suYCaqwc.js";import{s as K,e as Q,g as X,w}from"./index-6nR9EJ7U.js";import{c as Z}from"./attachFile-v3FIV90V.js";/* empty css             */import"./vue-router-7pEoD-nv.js";import"./axios-L6U4YIEh.js";import"./pinia-DPFP5Xm5.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-wQp_0G3e.js";import"./vue-country-flag-next-Hc4247vA.js";const D={__name:"DatePicker",props:{modelValue:{type:String,default:null},label:{type:String,default:null}},emits:["update:modelValue"],setup(s,{emit:r}){const a=s,v=y(!1),m=I(),V=r,c=q({get(){return a.modelValue},set(u){return V("update:modelValue",u)}}),b=q(()=>c.value?new Date(c.value):new Date);function _(u){v.value=!1,c.value=m.toISO(u),console.log(u)}return(u,t)=>(g(),E("div",null,[e($,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=l=>v.value=l),"close-on-content-click":!1,"min-width":"290px"},{activator:o(({props:l})=>[e(i,C(l,{"model-value":c.value,label:s.label,variant:"outlined",density:"compact","append-inner-icon":"mdi-calendar"}),null,16,["model-value","label"])]),default:o(()=>[e(O,{locale:"ko"},{default:o(()=>[e(P,{color:"primary","model-value":b.value,elevation:"12","onUpdate:modelValue":_},null,8,["model-value"])]),_:1})]),_:1},8,["modelValue"])]))}};function ee(s){return K({url:"/ai-event-request",method:"post",data:s})}function le(s){return Q({url:"/file/upload",method:"post",data:s})}const ae=N("p",null," 담당자 검토를 거쳐 최종적으로 등록되며, 등록 후 입력하신 이메일이나, 연락처로 안내 드립니다. ",-1),te={__name:"EventRegistView",setup(s){const r=I(),a=y({eventName:"",contents:"",startDate:r.toISO(new Date),endDate:r.toISO(new Date),place:"",fee:null,reqStartDate:null,reqEndDate:null,url:"",imageFileUrl:"",reqName:"",reqEmail:"",reqTel:"",createdId:null});function v(){a.value.eventName="",a.value.contents="",a.value.startDate=r.toISO(new Date),a.value.endDate=r.toISO(new Date),a.value.place="",a.value.fee="",a.value.reqStartDate="",a.value.reqEndDate="",a.value.url="",a.value.imageFileUrl=null,a.value.reqName="",a.value.reqEmail="",a.value.reqTel=""}const m=y({flag:!1,message:"등록이 완료되었습니다.",timeout:1500}),V=y([]);async function c(u){try{const t=new FormData;V.value.forEach(l=>{t.append("file",l)}),await le(t).then(async l=>{console.log("fileUpload response=",l.data.file);try{const p={suggestId:u,filename:l.data.file.filename,originalname:l.data.file.originalname,mimetype:l.data.file.mimetype};await Z(p).then(U=>{console.log("attach response=",U.data)}).catch(U=>{w(" 파일등록 실패.")&&console.log("Err addNotice() - createAttachFileApi"),console.log(">createAttachFileApi() fail. error=",U)})}catch(p){console.error(p)}}).catch(l=>{w(" 파일등록 실패.")&&console.log("Err addNotice() - fileUploadApi"),console.log(">fileUploadApi() fail. error=",l)})}catch(t){console.error(t)}}async function b(){await X("등룍 하시겠습니까?")?(console.log("YES"),await _(),v()):console.log("NO")}async function _(){await ee(a.value).then(async u=>{if(u.data.status==="success"){console.log("createEvent response.data=",u.data);const t=u.data.item.id;c(t),m.value.flag=!0}else console.log("::fail data.code=",u.data.code)}).catch(u=>{w(" 등록 실패.")&&console.log("Err addEvent() - createEventApi"),console.log(">createEventApi() fail. error=",u)})}return(u,t)=>(g(),E(k,null,[e(h,null,{default:o(()=>[e(d,{justify:"center"},{default:o(()=>[e(n,{cols:"8",class:"ma-6"},{default:o(()=>[e(z,{class:"mx-6 pa-4"},{default:o(()=>[e(L,null,{default:o(()=>[ae,e(d,{class:"mt-2",dense:""},{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(i,{modelValue:a.value.eventName,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.eventName=l),label:"행사명",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"6",md:"3"},{default:o(()=>[e(D,{modelValue:a.value.startDate,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.startDate=l),label:"행사시작일"},null,8,["modelValue"])]),_:1}),f(" ~ "),e(n,{cols:"6",md:"3"},{default:o(()=>[e(D,{modelValue:a.value.endDate,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.endDate=l),label:"행사종료일"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(H,{modelValue:a.value.contents,"onUpdate:modelValue":t[3]||(t[3]=l=>a.value.contents=l),label:"내용",placeholder:"Write something …",variant:"outlined",clearable:"","clear-icon":"mdi-close-circle","auto-grow":"",rows:"10","row-height":"25"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"9"},{default:o(()=>[e(i,{modelValue:a.value.place,"onUpdate:modelValue":t[4]||(t[4]=l=>a.value.place=l),label:"장소",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"3"},{default:o(()=>[e(i,{modelValue:a.value.fee,"onUpdate:modelValue":t[5]||(t[5]=l=>a.value.fee=l),label:"비용",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"6",md:"3"},{default:o(()=>[e(D,{modelValue:a.value.reqStartDate,"onUpdate:modelValue":t[6]||(t[6]=l=>a.value.reqStartDate=l),label:"참가신청기간"},null,8,["modelValue"])]),_:1}),f(" ~ "),e(n,{cols:"6",md:"3"},{default:o(()=>[e(D,{modelValue:a.value.reqEndDate,"onUpdate:modelValue":t[7]||(t[7]=l=>a.value.reqEndDate=l),label:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(i,{modelValue:a.value.url,"onUpdate:modelValue":t[8]||(t[8]=l=>a.value.url=l),label:"url",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(i,{modelValue:a.value.imageFileUrl,"onUpdate:modelValue":t[9]||(t[9]=l=>a.value.imageFileUrl=l),label:"이미지Url",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"3"},{default:o(()=>[e(i,{modelValue:a.value.reqName,"onUpdate:modelValue":t[10]||(t[10]=l=>a.value.reqName=l),label:"요청자",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:o(()=>[e(i,{modelValue:a.value.reqEmail,"onUpdate:modelValue":t[11]||(t[11]=l=>a.value.reqEmail=l),label:"Email",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(n,{cols:"3"},{default:o(()=>[e(i,{modelValue:a.value.reqTel,"onUpdate:modelValue":t[12]||(t[12]=l=>a.value.reqTel=l),label:"연락처",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{dense:""},{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[e(M,{modelValue:V.value,"onUpdate:modelValue":t[13]||(t[13]=l=>V.value=l),label:"첨부파일",accept:"image/*",chips:"","show-size":"",variant:"outlined",density:"compact"},{selection:o(({fileNames:l})=>[(g(!0),E(k,null,T(l,p=>(g(),A(W,{key:p,size:"small",label:"",color:"primary",class:"me-2"},{default:o(()=>[f(x(p),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(j,null,{default:o(()=>[e(G),e(S,{class:"ma-2",color:"blue-darken-1",variant:"outlined"},{default:o(()=>[f(" 닫기 ")]),_:1}),e(S,{class:"ma-2",color:"blue-darken-1",variant:"flat",onClick:B(b,["stop"])},{default:o(()=>[f(" 저장 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(Y,{modelValue:m.value.flag,"onUpdate:modelValue":t[14]||(t[14]=l=>m.value.flag=l),timeout:m.value.timeout},{default:o(()=>[f(x(m.value.message),1)]),_:1},8,["modelValue","timeout"]),e(F(R))],64))}},oe=N("div",{class:"text-center text-h2 font-weight-black text-black mx-16 my-5"},"행사등록 신청",-1),De={__name:"index",setup(s){return(r,a)=>(g(),A(h,{fluid:"",class:"bg-white"},{default:o(()=>[oe,e(J,{class:"my-4 border-opacity-100",thickness:3}),e(F(te))]),_:1}))}};export{De as default};
