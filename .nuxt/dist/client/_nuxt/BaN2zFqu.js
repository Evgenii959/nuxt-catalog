import{n as m,u as h,p as g,q as _,s as p,c as f,a as l,t as r,v as i,x,o as k}from"./CE8piOIx.js";const y={key:0,class:"flex flex-col items-center mt-10 min-h-screen"},L={class:"text-3xl font-semibold mb-4 text-gray-800"},v={class:"text-sm text-gray-600"},D=m({__name:"[categoryItem]",setup(C){const d=h(),e=g();_(async()=>{await e.fetchTreeData()});const c=p(()=>{const n=d.path,o=e.treeData.find(a=>a.childs.some(t=>{var s;return"/"+((s=t.locale[e.selectedLanguage])==null?void 0:s.link)===n}));return o&&o.childs.find(t=>{var s;return"/"+((s=t.locale[e.selectedLanguage])==null?void 0:s.link)===n})||null});return(n,o)=>{var a,t;return c.value?(k(),f("div",y,[l("h2",L,r((a=c.value.locale[i(e).selectedLanguage])==null?void 0:a.cg_name),1),l("p",v,r((t=c.value.locale[i(e).selectedLanguage])==null?void 0:t.cg_description),1)])):x("",!0)}}});export{D as default};
