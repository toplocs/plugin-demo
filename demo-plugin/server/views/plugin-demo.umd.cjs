(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e["Plugin-Demo"]=t(e.Vue))})(this,function(e){"use strict";const t={class:"greetings"},s={class:"green"};return((n,r)=>{const o=n.__vccOpts||n;for(const[c,l]of r)o[c]=l;return o})(e.defineComponent({__name:"HelloWorld",props:{msg:{}},setup(n){return(r,o)=>(e.openBlock(),e.createElementBlock("div",t,[e.createElementVNode("h1",s,e.toDisplayString(r.msg),1),o[0]||(o[0]=e.createElementVNode("h3",null,[e.createTextVNode(" You’ve successfully created a project with "),e.createElementVNode("a",{href:"https://vite.dev/",target:"_blank",rel:"noopener"},"Vite"),e.createTextVNode(" + "),e.createElementVNode("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),e.createTextVNode(". What's next? ")],-1))]))}}),[["__scopeId","data-v-a6cc8622"]])});
