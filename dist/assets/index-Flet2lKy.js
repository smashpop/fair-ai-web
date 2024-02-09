import{r as V,l as c,a1 as v,a2 as t,I as e,p as q,F as D,a9 as E,u as f,v as w,a4 as x,a3 as _,y as k}from"./@vue-5qbJIjPN.js";import{s as h,i as F}from"./index-8CQYiO2Z.js";import{c as A}from"./attachFile-p_gITBYI.js";import{e as u,i as d,k as C,r as N,m as n,B as T,C as B,D as I,E as R,y as S,a as y,h as b,p as $}from"./vuetify-xWM4wXMg.js";/* empty css             */import"./vue-router-kO06wcas.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-JNjw9D9N.js";import"./pinia-vSUcXG4D.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-9SxCCbqx.js";function z(r){return h({url:"/ai-event-request",method:"post",data:r})}function L(r){return F({url:"/file/upload",method:"post",data:r})}const j=_("p",null," 담당자 검토를 거쳐 최종적으로 등록되며, 등록 후 입력하신 이메일이나, 연락처로 안내 드립니다. ",-1),M={__name:"EventRegistView",setup(r){const o=V({eventName:"",contents:"",startDate:null,endDate:null,place:"",fee:null,reqStartDate:null,reqEndDate:null,url:"",imageFileUrl:"",reqName:"",reqEmail:"",reqTel:"",createdId:null}),m=V([]);async function U(i){try{const a=new FormData;m.value.forEach(l=>{a.append("file",l)}),await L(a).then(async l=>{console.log("fileUpload response=",l.data.file);try{const s={suggestId:i,filename:l.data.file.filename,originalname:l.data.file.originalname,mimetype:l.data.file.mimetype};await A(s).then(p=>{console.log("attach response=",p.data)}).catch(p=>{console.log(">createAttachFileApi() fail. error=",p)})}catch(s){console.error(s)}}).catch(l=>{console.log(">fileUploadApi() fail. error=",l)})}catch(a){console.error(a)}}async function g(){await z(o.value).then(async i=>{if(i.data.status==="success"){console.log("createEvent response.data=",i.data);const a=i.data.item.id;U(a)}else console.log("::fail data.code=",i.data.code)}).catch(i=>{console.log(">createEventApi() fail. error=",i)})}return(i,a)=>(c(),v(b,null,{default:t(()=>[e(u,{justify:"center"},{default:t(()=>[e(d,{cols:"8",class:"ma-6"},{default:t(()=>[e(C,{class:"mx-6 pa-4"},{default:t(()=>[e(N,null,{default:t(()=>[j,e(u,{dense:""},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(n,{modelValue:o.value.eventName,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value.eventName=l),label:"행사명",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"6",md:"6"},{default:t(()=>[e(n,{modelValue:o.value.startDate,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value.startDate=l),type:"date",label:"행사시작일",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",md:"6"},{default:t(()=>[e(n,{modelValue:o.value.endDate,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value.endDate=l),type:"date",label:"행사종료일",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(T,{modelValue:o.value.contents,"onUpdate:modelValue":a[3]||(a[3]=l=>o.value.contents=l),label:"내용",placeholder:"Write something …",variant:"outlined",clearable:"","clear-icon":"mdi-close-circle","auto-grow":"",rows:"10","row-height":"25"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"3"},{default:t(()=>[e(n,{modelValue:o.value.place,"onUpdate:modelValue":a[4]||(a[4]=l=>o.value.place=l),label:"장소",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"6"},{default:t(()=>[e(n,{modelValue:o.value.fee,"onUpdate:modelValue":a[5]||(a[5]=l=>o.value.fee=l),label:"비용",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"6",md:"6"},{default:t(()=>[e(n,{modelValue:o.value.reqStartDate,"onUpdate:modelValue":a[6]||(a[6]=l=>o.value.reqStartDate=l),type:"date",label:"참가신청기간",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1}),e(d,{cols:"6",md:"6"},{default:t(()=>[e(n,{modelValue:o.value.reqEndDate,"onUpdate:modelValue":a[7]||(a[7]=l=>o.value.reqEndDate=l),type:"date",label:"",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(n,{modelValue:o.value.url,"onUpdate:modelValue":a[8]||(a[8]=l=>o.value.url=l),label:"url",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(n,{modelValue:o.value.imageFileUrl,"onUpdate:modelValue":a[9]||(a[9]=l=>o.value.imageFileUrl=l),label:"이미지Url",variant:"outlined",density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"3"},{default:t(()=>[e(n,{modelValue:o.value.reqName,"onUpdate:modelValue":a[10]||(a[10]=l=>o.value.reqName=l),label:"요청자",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"6"},{default:t(()=>[e(n,{modelValue:o.value.reqEmail,"onUpdate:modelValue":a[11]||(a[11]=l=>o.value.reqEmail=l),label:"Email",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(d,{cols:"3"},{default:t(()=>[e(n,{modelValue:o.value.reqTel,"onUpdate:modelValue":a[12]||(a[12]=l=>o.value.reqTel=l),label:"연락처",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{dense:""},{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(B,{modelValue:m.value,"onUpdate:modelValue":a[13]||(a[13]=l=>m.value=l),label:"첨부파일",accept:"image/*",chips:"","show-size":"",variant:"outlined",density:"compact"},{selection:t(({fileNames:l})=>[(c(!0),q(D,null,E(l,s=>(c(),v(I,{key:s,size:"small",label:"",color:"primary",class:"me-2"},{default:t(()=>[f(w(s),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(S),e(y,{class:"ma-2",color:"blue-darken-1",variant:"outlined"},{default:t(()=>[f(" 닫기 ")]),_:1}),e(y,{class:"ma-2",color:"blue-darken-1",variant:"flat",onClick:x(g,["stop"])},{default:t(()=>[f(" 저장 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},W=_("div",{class:"text-center text-h2 font-weight-black text-black mx-16 my-5"},"행사등록 신청",-1),ae={__name:"index",setup(r){return(o,m)=>(c(),v(b,{fluid:"",class:"bg-white"},{default:t(()=>[W,e($,{class:"my-4 border-opacity-100",thickness:3}),e(k(M))]),_:1}))}};export{ae as default};
