import{r as v,l as g,u as h,R as e,E as l,F as b,ab as C,p as k,y as c,z as w,a8 as I,B as A,a7 as S}from"./@vue-W6jyxCSA.js";import{D as T}from"./vue3-promise-dialog-G_62FsX2.js";import{s as B,e as D,v as R,w as V}from"./index-0m61xstO.js";import{c as z}from"./attachFile-D7bYf-Cz.js";import{e as n,i,k as $,r as G,v as L,w as y,x as m,F as W,G as j,y as H,H as J,I as M,a as x,h as U,J as O,p as P}from"./vuetify-96PCg_u6.js";/* empty css             */import"./vue-router-7pEoD-nv.js";import"./axios-L6U4YIEh.js";import"./pinia-DPFP5Xm5.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-wQp_0G3e.js";import"./vue-country-flag-next-Hc4247vA.js";function Y(d){return B({url:"/ai-suggest",method:"post",data:d})}function q(d){return D({url:"/file/upload",method:"post",data:d})}const K=S("p",null," 담당자 검토를 거쳐 최종적으로 등록되며, 등록 후 입력하신 이메일이나, 연락처로 안내 드립니다. ",-1),Q={__name:"SuggestView",setup(d){const o=v({title:"",contents:"",suggestName:"",suggestEmail:"",suggestTel:"",categoryId:null});function _(){o.value.title="",o.value.contents="",o.value.suggestName="",o.value.suggestEmail="",o.value.suggestTel="",o.value.categoryId=null}const r=v({flag:!1,message:"등록이 완료되었습니다.",timeout:1500}),f=v([]);async function E(s){try{const t=new FormData;f.value.forEach(a=>{t.append("file",a)}),await q(t).then(async a=>{console.log("fileUpload response=",a.data.file);try{const u={suggestId:s,filename:a.data.file.filename,originalname:a.data.file.originalname,mimetype:a.data.file.mimetype};await z(u).then(p=>{console.log("attach response=",p.data)}).catch(p=>{V(" 파일등록 실패.")&&console.log("Err addNotice() - createAttachFileApi"),console.log(">createAttachFileApi() fail. error=",p)})}catch(u){console.error(u)}}).catch(a=>{V(" 파일등록 실패.")&&console.log("Err addNotice() - fileUploadApi"),console.log(">fileUploadApi() fail. error=",a)})}catch(t){console.error(t)}}async function F(){await R()?(console.log("YES"),await N(),_()):console.log("NO")}async function N(){await Y(o.value).then(async s=>{if(s.data.status==="success"){console.log("createSuggest response.data=",s.data);const t=s.data.item.id;E(t),r.value.flag=!0}else console.log("::fail data.code=",s.data.code)}).catch(s=>{V(" 등록 실패.")&&console.log("Err addSuggest() - createSuggestApi"),console.log(">createSuggestApi() fail. error=",s)})}return(s,t)=>(g(),h(b,null,[e(U,null,{default:l(()=>[e(n,{justify:"center"},{default:l(()=>[e(i,{cols:"8",class:"ma-6"},{default:l(()=>[e($,{class:"mx-6 pa-4"},{default:l(()=>[e(G,null,{default:l(()=>[K,e(L,{modelValue:o.value.categoryId,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value.categoryId=a),inline:"",density:"compact",color:"primary"},{default:l(()=>[e(y,{label:"시스템장애",value:"1"}),e(y,{label:"자료등록 신청",value:"2"}),e(y,{label:"기타",value:"3"})]),_:1},8,["modelValue"]),e(n,{dense:""},{default:l(()=>[e(i,{cols:"6"},{default:l(()=>[e(m,{modelValue:o.value.suggestName,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value.suggestName=a),label:"신청자",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:l(()=>[e(i,{cols:"6"},{default:l(()=>[e(m,{modelValue:o.value.suggestEmail,"onUpdate:modelValue":t[2]||(t[2]=a=>o.value.suggestEmail=a),label:"e-mail",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),e(i,{cols:"6"},{default:l(()=>[e(m,{modelValue:o.value.suggestTel,"onUpdate:modelValue":t[3]||(t[3]=a=>o.value.suggestTel=a),label:"연락처",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(m,{modelValue:o.value.title,"onUpdate:modelValue":t[4]||(t[4]=a=>o.value.title=a),label:"제목",variant:"outlined",density:"compact","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(W,{modelValue:o.value.contents,"onUpdate:modelValue":t[5]||(t[5]=a=>o.value.contents=a),label:"내용",placeholder:"Write something …",variant:"outlined",clearable:"","clear-icon":"mdi-close-circle","auto-grow":"",rows:"12","row-height":"25"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{dense:""},{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(j,{modelValue:f.value,"onUpdate:modelValue":t[6]||(t[6]=a=>f.value=a),label:"첨부파일",accept:"image/*",chips:"","show-size":"",variant:"outlined",density:"compact"},{selection:l(({fileNames:a})=>[(g(!0),h(b,null,C(a,u=>(g(),k(H,{key:u,size:"small",label:"",color:"primary",class:"me-2"},{default:l(()=>[c(w(u),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(J,null,{default:l(()=>[e(M),e(x,{class:"ma-2",color:"blue-darken-1",variant:"outlined"},{default:l(()=>[c(" 닫기 ")]),_:1}),e(x,{class:"ma-2",color:"blue-darken-1",variant:"flat",onClick:I(F,["stop"])},{default:l(()=>[c(" 저장 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{modelValue:r.value.flag,"onUpdate:modelValue":t[7]||(t[7]=a=>r.value.flag=a),timeout:r.value.timeout},{default:l(()=>[c(w(r.value.message),1)]),_:1},8,["modelValue","timeout"]),e(A(T))],64))}},X=S("div",{class:"text-center text-h2 font-weight-black text-black mx-16 my-5"},"문의/제안 등록",-1),me={__name:"index",setup(d){return(o,_)=>(g(),k(U,{fluid:"",class:"bg-white"},{default:l(()=>[X,e(P,{class:"my-4 border-opacity-100",thickness:3}),e(A(Q))]),_:1}))}};export{me as default};
