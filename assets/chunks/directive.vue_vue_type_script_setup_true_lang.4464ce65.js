import{V as b,u as k}from"./component.411bed2a.js";import{d as _,h as o,o as e,b as x,w as y,k as l,c as t,G as r,F as u,l as p,t as d,a0 as f}from"./framework.0e5cb531.js";import{v as g}from"./directive.0f929a1f.js";const J={class:"table table-striped"},V={class:"thead-dark"},$={class:"sort-target"},E=_({__name:"demo",setup(v){const n=o([{text:"Id",value:"id"},{text:"Name",value:"name"}]),c=o([{name:"Joao",id:1},{name:"Jean",id:2},{name:"Johanna",id:3},{name:"Juan",id:4}]);return(i,m)=>(e(),x(p(b),{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=a=>n.value=a),target:".sort-target"},{default:y(()=>[l("table",J,[l("thead",V,[l("tr",$,[(e(!0),t(u,null,r(n.value,a=>(e(),t("th",{class:"cursor-move",key:a.value},d(a.text),1))),128))])]),l("tbody",null,[(e(!0),t(u,null,r(c.value,a=>(e(),t("tr",{key:a.name},[(e(!0),t(u,null,r(n.value,s=>(e(),t("td",{key:s},d(a[s.value]),1))),128))]))),128))])])]),_:1},8,["modelValue"]))}}),D={class:"table table-striped"},B={class:"thead-dark"},G=_({__name:"function",setup(v){const n=o([{text:"Id",value:"id"},{text:"Name",value:"name"}]),c=o([{name:"Joao",id:1},{name:"Jean",id:2},{name:"Johanna",id:3},{name:"Juan",id:4}]),i=o();return k(i,n),(m,a)=>(e(),t("table",D,[l("thead",B,[l("tr",{ref_key:"el",ref:i,class:"sort-target"},[(e(!0),t(u,null,r(n.value,s=>(e(),t("th",{class:"cursor-move",key:s.value},d(s.text),1))),128))],512)]),l("tbody",null,[(e(!0),t(u,null,r(c.value,s=>(e(),t("tr",{key:s.name},[(e(!0),t(u,null,r(n.value,h=>(e(),t("td",{key:h},d(s[h.value]),1))),128))]))),128))])]))}}),N={class:"table table-striped"},w={class:"thead-dark"},L=_({__name:"directive",setup(v){const n=o([{text:"Id",value:"id"},{text:"Name",value:"name"}]),c=o([{name:"Joao",id:1},{name:"Jean",id:2},{name:"Johanna",id:3},{name:"Juan",id:4}]);return(i,m)=>(e(),t("table",N,[l("thead",w,[f((e(),t("tr",null,[(e(!0),t(u,null,r(n.value,a=>(e(),t("th",{class:"cursor-move",key:a.value},d(a.text),1))),128))])),[[p(g),n.value]])]),l("tbody",null,[(e(!0),t(u,null,r(c.value,a=>(e(),t("tr",{key:a.name},[(e(!0),t(u,null,r(n.value,s=>(e(),t("td",{key:s},d(a[s.value]),1))),128))]))),128))])]))}});export{E as _,G as a,L as b};