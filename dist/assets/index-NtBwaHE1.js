import{F as r,i as c,l as d}from"./@fullcalendar-Y-ICjaWT.js";import{d as u}from"./index-xfwykSDA.js";import{j as f,k as m,l as p,r as _}from"./vuetify-KkwUcGrN.js";import{b as o,V as h,W as e,O as g,m as a,u as v,S as x}from"./@vue-sWHR_rYu.js";import"./preact-yBSrjXcw.js";/* empty css             */import"./axios-L6U4YIEh.js";import"./vue-router-q8UsfMt9.js";const V=x("strong",{class:"text-h4 font-weight-bold"},"행사캘린더",-1),O={__name:"index",setup(w){const s=o({plugins:[c],initialView:"dayGridMonth",weekends:!0,locale:d,events:[{title:"Meeting",start:new Date}]}),l=o(!1),n=o(0);async function i(){l.value=!0,await u().then(t=>{console.log("response.data=",t.data),s.value.events=t.data.items,n.value=t.data.total}).catch(t=>{console.log(t)}),l.value=!1}return i(),(t,C)=>(g(),h(f,{class:"fill-height"},{default:e(()=>[a(_,{class:"align-center text-center fill-height"},{default:e(()=>[a(m,{class:"d-flex align-center justify-center"},{default:e(()=>[a(p,{cols:"2"},{default:e(()=>[V]),_:1})]),_:1}),a(v(r),{options:s.value},null,8,["options"])]),_:1})]),_:1}))}};export{O as default};