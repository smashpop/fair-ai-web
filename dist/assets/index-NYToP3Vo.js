import{p as B,c as C,a as T}from"./index-ujCqkgXH.js";import{t as $}from"./TempImage-dvg_ztwD.js";import{e as h,i as d,h as w,y as S,o as D,k as F,x as N,p as V,n as g}from"./vuetify-fvTuGKAk.js";import{k as A,l as o,B as b,C as a,Q as e,a6 as l,v as i,y as c,r as n,w as I,p as _,F as y,ab as L,u as P}from"./@vue-L2QGslVC.js";/* empty css             */import"./vue-router-qEIoPK5X.js";import"./axios-L6U4YIEh.js";import"./vue3-promise-dialog-2Oa0RDq6.js";import"./pinia-xePs6rUv.js";import"./pinia-plugin-persistedstate-XbYvz584.js";import"./vue-detect-browser-HAC5R545.js";import"./vue-json-excel3-5Xi2bfpa.js";const U={class:"text-20 mb-4",style:{"font-weight":"600"}},j={class:"text-medium-emphasis text-body-2"},O={class:"text-medium-emphasis text-body-1 mt-1"},E={__name:"ArticleCard",props:{article:{type:Object,default:null}},setup(u){const t=u,r=A(()=>t.article.previewText?t.article.previewText.substring(0,500):null);return(f,m)=>(o(),b(F,{class:"pa-2",flat:""},{default:a(()=>[e(h,null,{default:a(()=>[e(d,{cols:"12",md:"8"},{default:a(()=>[e(w,null,{default:a(()=>[l("div",U,i(t.article.title),1),l("div",j,i(r.value)+"...",1),l("div",O,i(c(B)(t.article.publishedDate))+"  "+i(t.article.creator)+"기자  "+i(t.article.mediaName),1)]),_:1})]),_:1}),e(S),e(d,{cols:"12",md:"3"},{default:a(()=>[e(D,{src:t.article.thumbnailUrl?t.article.thumbnailUrl:c($),height:"150",class:"rounded",cover:""},null,8,["src"])]),_:1})]),_:1})]),_:1}))}},Q={class:"text-center"},R={__name:"ArticleView",setup(u){const t=n([]),r=n(!1),f=n(0),m=n({page:1,rowsPerPage:20,sortBy:"createdAt",sortType:"desc",keyword:null});async function v(){r.value=!0,await C(m.value).then(s=>{t.value=s.data.items,f.value=s.data.total}).catch(s=>{console.log(s)}),r.value=!1}return v(),I(m,s=>{v()},{deep:!0}),(s,x)=>(o(),_(y,null,[(o(!0),_(y,null,L(t.value,(p,k)=>(o(),_("div",{key:k},[e(c(E),{article:p},null,8,["article"]),e(V)]))),128)),l("div",Q,[e(N,{modelValue:s.page,"onUpdate:modelValue":x[0]||(x[0]=p=>s.page=p),class:"my-4",rounded:"circle",length:15,"total-visible":6},null,8,["modelValue"])])],64))}},q={class:"mx-16"},z=l("div",{class:"text-h2 font-weight-black text-black my-5"},"기사",-1),se={__name:"index",setup(u){return(t,r)=>(o(),b(w,{fluid:"",class:"bg-white"},{default:a(()=>[l("div",q,[e(g,{class:"text-center mx-auto px-4",height:"80","max-width":"800",width:"100%"},{default:a(()=>[z]),_:1}),e(h,{class:"my-4",justify:"center"},{default:a(()=>[e(c(T))]),_:1}),e(V,{class:"my-4 border-opacity-100",thickness:3}),e(h,null,{default:a(()=>[e(d,{cols:"12",md:"2"},{default:a(()=>[e(g,{color:"white",height:"700px",class:"pa-2",border:""},{default:a(()=>[P(" Filter section1 ")]),_:1})]),_:1}),e(d,{cols:"12",md:"10"},{default:a(()=>[e(c(R))]),_:1})]),_:1})])]),_:1}))}};export{se as default};