import{F as r,i as c,l as d}from"./@fullcalendar-zRq6lpEM.js";import{d as f}from"./index-1jSlFH5L.js";import{d as p,e as m,f as u,t as _}from"./vuetify-knQmhA5-.js";import{r as o,l as h,a3 as g,a4 as e,I as a,y as v,a1 as x}from"./@vue-6h1loiwv.js";import"./preact-yBSrjXcw.js";/* empty css             */import"./axios-L6U4YIEh.js";import"./vue-router-tZIpevkY.js";import"./pinia-uIDokcZ3.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-cD8bNZ3_.js";const w=x("strong",{class:"text-h4 font-weight-bold"},"행사캘린더",-1),I={__name:"index",setup(V){const s=o({plugins:[c],initialView:"dayGridMonth",weekends:!0,locale:d,events:[{title:"Meeting",start:new Date}]}),l=o(!1),n=o(0);async function i(){l.value=!0,await f().then(t=>{console.log("response.data=",t.data),s.value.events=t.data.items,n.value=t.data.total}).catch(t=>{console.log(t)}),l.value=!1}return i(),(t,C)=>(h(),g(p,{class:"fill-height"},{default:e(()=>[a(_,{class:"align-center text-center fill-height"},{default:e(()=>[a(m,{class:"d-flex align-center justify-center"},{default:e(()=>[a(u,{cols:"2"},{default:e(()=>[w]),_:1})]),_:1}),a(v(r),{options:s.value},null,8,["options"])]),_:1})]),_:1}))}};export{I as default};
