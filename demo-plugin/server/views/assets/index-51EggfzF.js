import{importShared as nt,__tla as dn}from"./__federation_fn_import-ofDdBDNE.js";import{_ as mn,__tla as gn}from"./PluginComponent.vue_vue_type_script_setup_true_lang-DeopReNH.js";Promise.all([(()=>{try{return dn}catch{}})(),(()=>{try{return gn}catch{}})()]).then(async()=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})(),await nt("vue"),await nt("vue");const{getCurrentInstance:vn,inject:V,onUnmounted:yn,onDeactivated:bn,onActivated:wn,computed:q,unref:H,watchEffect:En,defineComponent:yt,reactive:ee,h:bt,provide:rt,ref:ne,watch:re,shallowRef:oe,shallowReactive:ae,nextTick:ce}=await nt("vue"),U=typeof document<"u";function wt(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ie(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wt(t.default)}const O=Object.assign;function ot(t,e){const n={};for(const r in e){const o=e[r];n[r]=L(o)?o.map(t):t(o)}return n}const K=()=>{},L=Array.isArray,Et=/#/g,le=/&/g,se=/\//g,ue=/=/g,fe=/\?/g,kt=/\+/g,pe=/%5B/g,he=/%5D/g,Ot=/%5E/g,de=/%60/g,Rt=/%7B/g,me=/%7C/g,Ct=/%7D/g,ge=/%20/g;function at(t){return encodeURI(""+t).replace(me,"|").replace(pe,"[").replace(he,"]")}function ve(t){return at(t).replace(Rt,"{").replace(Ct,"}").replace(Ot,"^")}function ct(t){return at(t).replace(kt,"%2B").replace(ge,"+").replace(Et,"%23").replace(le,"%26").replace(de,"`").replace(Rt,"{").replace(Ct,"}").replace(Ot,"^")}function ye(t){return ct(t).replace(ue,"%3D")}function be(t){return at(t).replace(Et,"%23").replace(fe,"%3F")}function we(t){return t==null?"":be(t).replace(se,"%2F")}function z(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ee=/\/$/,ke=t=>t.replace(Ee,"");function it(t,e,n="/"){let r,o={},s="",p="";const g=e.indexOf("#");let i=e.indexOf("?");return g<i&&g>=0&&(i=-1),i>-1&&(r=e.slice(0,i),s=e.slice(i+1,g>-1?g:e.length),o=t(s)),g>-1&&(r=r||e.slice(0,g),p=e.slice(g,e.length)),r=Pe(r??e,n),{fullPath:r+(s&&"?")+s+p,path:r,query:o,hash:z(p)}}function Oe(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pt(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Re(t,e,n){const r=e.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&W(e.matched[r],n.matched[o])&&St(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function W(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function St(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ce(t[n],e[n]))return!1;return!0}function Ce(t,e){return L(t)?$t(t,e):L(e)?$t(e,t):t===e}function $t(t,e){return L(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Pe(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,p,g;for(p=0;p<r.length;p++)if(g=r[p],g!==".")if(g==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(p).join("/")}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var N;(function(t){t.pop="pop",t.push="push"})(N||(N={}));var Q;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Q||(Q={}));function Se(t){if(!t)if(U){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ke(t)}const $e=/^[^#]+#/;function Ae(t,e){return t.replace($e,"#")+e}function je(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const J=()=>({left:window.scrollX,top:window.scrollY});function _e(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=je(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function At(t,e){return(history.state?history.state.position-e:-1)+t}const lt=new Map;function Le(t,e){lt.set(t,e)}function xe(t){const e=lt.get(t);return lt.delete(t),e}let qe=()=>location.protocol+"//"+location.host;function jt(t,e){const{pathname:n,search:r,hash:o}=e,s=t.indexOf("#");if(s>-1){let p=o.includes(t.slice(s))?t.slice(s).length:1,g=o.slice(p);return g[0]!=="/"&&(g="/"+g),Pt(g,"")}return Pt(n,t)+r+o}function Me(t,e,n,r){let o=[],s=[],p=null;const g=({state:l})=>{const u=jt(t,location),E=n.value,k=e.value;let P=0;if(l){if(n.value=u,e.value=l,p&&p===E){p=null;return}P=k?l.position-k.position:0}else r(u);o.forEach($=>{$(n.value,E,{delta:P,type:N.pop,direction:P?P>0?Q.forward:Q.back:Q.unknown})})};function i(){p=n.value}function f(l){o.push(l);const u=()=>{const E=o.indexOf(l);E>-1&&o.splice(E,1)};return s.push(u),u}function d(){const{history:l}=window;l.state&&l.replaceState(O({},l.state,{scroll:J()}),"")}function c(){for(const l of s)l();s=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:i,listen:f,destroy:c}}function _t(t,e,n,r=!1,o=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:o?J():null}}function Be(t){const{history:e,location:n}=window,r={value:jt(t,n)},o={value:e.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(i,f,d){const c=t.indexOf("#"),l=c>-1?(n.host&&document.querySelector("base")?t:t.slice(c))+i:qe()+t+i;try{e[d?"replaceState":"pushState"](f,"",l),o.value=f}catch(u){console.error(u),n[d?"replace":"assign"](l)}}function p(i,f){const d=O({},e.state,_t(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});s(i,d,!0),r.value=i}function g(i,f){const d=O({},o.value,e.state,{forward:i,scroll:J()});s(d.current,d,!0);const c=O({},_t(r.value,i,null),{position:d.position+1},f);s(i,c,!1),r.value=i}return{location:r,state:o,push:g,replace:p}}function Ie(t){t=Se(t);const e=Be(t),n=Me(t,e.state,e.location,e.replace);function r(s,p=!0){p||n.pauseListeners(),history.go(s)}const o=O({location:"",base:t,go:r,createHref:Ae.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function Ge(t){return typeof t=="string"||t&&typeof t=="object"}function Lt(t){return typeof t=="string"||typeof t=="symbol"}const xt=Symbol("");var qt;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qt||(qt={}));function T(t,e){return O(new Error,{type:t,[xt]:!0},e)}function M(t,e){return t instanceof Error&&xt in t&&(e==null||!!(t.type&e))}const Mt="[^/]+?",De={sensitive:!1,strict:!1,start:!0,end:!0},Ue=/[.+*?^${}()[\]/\\]/g;function We(t,e){const n=O({},De,e),r=[];let o=n.start?"^":"";const s=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let c=0;c<f.length;c++){const l=f[c];let u=40+(n.sensitive?.25:0);if(l.type===0)c||(o+="/"),o+=l.value.replace(Ue,"\\$&"),u+=40;else if(l.type===1){const{value:E,repeatable:k,optional:P,regexp:$}=l;s.push({name:E,repeatable:k,optional:P});const w=$||Mt;if(w!==Mt){u+=10;try{new RegExp(`(${w})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${E}" (${w}): `+x.message)}}let R=k?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;c||(R=P&&f.length<2?`(?:/${R})`:"/"+R),P&&(R+="?"),o+=R,u+=20,P&&(u+=-8),k&&(u+=-20),w===".*"&&(u+=-50)}d.push(u)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const p=new RegExp(o,n.sensitive?"":"i");function g(f){const d=f.match(p),c={};if(!d)return null;for(let l=1;l<d.length;l++){const u=d[l]||"",E=s[l-1];c[E.name]=u&&E.repeatable?u.split("/"):u}return c}function i(f){let d="",c=!1;for(const l of t){(!c||!d.endsWith("/"))&&(d+="/"),c=!1;for(const u of l)if(u.type===0)d+=u.value;else if(u.type===1){const{value:E,repeatable:k,optional:P}=u,$=E in f?f[E]:"";if(L($)&&!k)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const w=L($)?$.join("/"):$;if(!w)if(P)l.length<2&&(d.endsWith("/")?d=d.slice(0,-1):c=!0);else throw new Error(`Missing required param "${E}"`);d+=w}}return d||"/"}return{re:p,score:r,keys:s,parse:g,stringify:i}}function Te(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Bt(t,e){let n=0;const r=t.score,o=e.score;for(;n<r.length&&n<o.length;){const s=Te(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(It(r))return 1;if(It(o))return-1}return o.length-r.length}function It(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Fe={type:0,value:""},Ve=/[a-zA-Z0-9_]/;function He(t){if(!t)return[[]];if(t==="/")return[[Fe]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(u){throw new Error(`ERR (${n})/"${f}": ${u}`)}let n=0,r=n;const o=[];let s;function p(){s&&o.push(s),s=[]}let g=0,i,f="",d="";function c(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(i==="*"||i==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):e("Invalid state to consume buffer"),f="")}function l(){f+=i}for(;g<t.length;){if(i=t[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&c(),p()):i===":"?(c(),n=1):l();break;case 4:l(),n=r;break;case 1:i==="("?n=2:Ve.test(i)?l():(c(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:n=3:d+=i;break;case 3:c(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),c(),p(),o}function Ke(t,e,n){const r=We(He(t.path),n),o=O(r,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function ze(t,e){const n=[],r=new Map;e=Wt({strict:!1,end:!0,sensitive:!1},e);function o(c){return r.get(c)}function s(c,l,u){const E=!u,k=Dt(c);k.aliasOf=u&&u.record;const P=Wt(e,c),$=[k];if("alias"in c){const x=typeof c.alias=="string"?[c.alias]:c.alias;for(const D of x)$.push(Dt(O({},k,{components:u?u.record.components:k.components,path:D,aliasOf:u?u.record:k})))}let w,R;for(const x of $){const{path:D}=x;if(l&&D[0]!=="/"){const G=l.record.path,_=G[G.length-1]==="/"?"":"/";x.path=l.record.path+(D&&_+D)}if(w=Ke(x,l,P),u?u.alias.push(w):(R=R||w,R!==w&&R.alias.push(w),E&&c.name&&!Ut(w)&&p(c.name)),Tt(w)&&i(w),k.children){const G=k.children;for(let _=0;_<G.length;_++)s(G[_],w,u&&u.children[_])}u=u||w}return R?()=>{p(R)}:K}function p(c){if(Lt(c)){const l=r.get(c);l&&(r.delete(c),n.splice(n.indexOf(l),1),l.children.forEach(p),l.alias.forEach(p))}else{const l=n.indexOf(c);l>-1&&(n.splice(l,1),c.record.name&&r.delete(c.record.name),c.children.forEach(p),c.alias.forEach(p))}}function g(){return n}function i(c){const l=Xe(c,n);n.splice(l,0,c),c.record.name&&!Ut(c)&&r.set(c.record.name,c)}function f(c,l){let u,E={},k,P;if("name"in c&&c.name){if(u=r.get(c.name),!u)throw T(1,{location:c});P=u.record.name,E=O(Gt(l.params,u.keys.filter(R=>!R.optional).concat(u.parent?u.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),c.params&&Gt(c.params,u.keys.map(R=>R.name))),k=u.stringify(E)}else if(c.path!=null)k=c.path,u=n.find(R=>R.re.test(k)),u&&(E=u.parse(k),P=u.record.name);else{if(u=l.name?r.get(l.name):n.find(R=>R.re.test(l.path)),!u)throw T(1,{location:c,currentLocation:l});P=u.record.name,E=O({},l.params,c.params),k=u.stringify(E)}const $=[];let w=u;for(;w;)$.unshift(w.record),w=w.parent;return{name:P,path:k,params:E,matched:$,meta:Qe($)}}t.forEach(c=>s(c));function d(){n.length=0,r.clear()}return{addRoute:s,resolve:f,removeRoute:p,clearRoutes:d,getRoutes:g,getRecordMatcher:o}}function Gt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Dt(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ne(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ne(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ut(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qe(t){return t.reduce((e,n)=>O(e,n.meta),{})}function Wt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Xe(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Bt(t,e[s])<0?r=s:n=s+1}const o=Ye(t);return o&&(r=e.lastIndexOf(o,r-1)),r}function Ye(t){let e=t;for(;e=e.parent;)if(Tt(e)&&Bt(t,e)===0)return e}function Tt({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ze(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const o=n[r].replace(kt," "),s=o.indexOf("="),p=z(s<0?o:o.slice(0,s)),g=s<0?null:z(o.slice(s+1));if(p in e){let i=e[p];L(i)||(i=e[p]=[i]),i.push(g)}else e[p]=g}return e}function Ft(t){let e="";for(let n in t){const r=t[n];if(n=ye(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(L(r)?r.map(o=>o&&ct(o)):[r&&ct(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function Je(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=L(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return e}const tn=Symbol(""),Vt=Symbol(""),st=Symbol(""),Ht=Symbol(""),ut=Symbol("");function X(){let t=[];function e(r){return t.push(r),()=>{const o=t.indexOf(r);o>-1&&t.splice(o,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function I(t,e,n,r,o,s=p=>p()){const p=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((g,i)=>{const f=l=>{l===!1?i(T(4,{from:n,to:e})):l instanceof Error?i(l):Ge(l)?i(T(2,{from:e,to:l})):(p&&r.enterCallbacks[o]===p&&typeof l=="function"&&p.push(l),g())},d=s(()=>t.call(r&&r.instances[o],e,n,f));let c=Promise.resolve(d);t.length<3&&(c=c.then(f)),c.catch(l=>i(l))})}function ft(t,e,n,r,o=s=>s()){const s=[];for(const p of t)for(const g in p.components){let i=p.components[g];if(!(e!=="beforeRouteEnter"&&!p.instances[g]))if(wt(i)){const f=(i.__vccOpts||i)[e];f&&s.push(I(f,n,r,p,g,o))}else{let f=i();s.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${g}" at "${p.path}"`);const c=ie(d)?d.default:d;p.mods[g]=d,p.components[g]=c;const l=(c.__vccOpts||c)[e];return l&&I(l,n,r,p,g,o)()}))}}return s}function Kt(t){const e=V(st),n=V(Ht),r=q(()=>{const i=H(t.to);return e.resolve(i)}),o=q(()=>{const{matched:i}=r.value,{length:f}=i,d=i[f-1],c=n.matched;if(!d||!c.length)return-1;const l=c.findIndex(W.bind(null,d));if(l>-1)return l;const u=zt(i[f-2]);return f>1&&zt(d)===u&&c[c.length-1].path!==u?c.findIndex(W.bind(null,i[f-2])):l}),s=q(()=>o.value>-1&&on(n.params,r.value.params)),p=q(()=>o.value>-1&&o.value===n.matched.length-1&&St(n.params,r.value.params));function g(i={}){return rn(i)?e[H(t.replace)?"replace":"push"](H(t.to)).catch(K):Promise.resolve()}return{route:r,href:q(()=>r.value.href),isActive:s,isExactActive:p,navigate:g}}const en=yt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kt,setup(t,{slots:e}){const n=ee(Kt(t)),{options:r}=V(st),o=q(()=>({[Nt(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nt(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:bt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),nn=en;function rn(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function on(t,e){for(const n in e){const r=e[n],o=t[n];if(typeof r=="string"){if(r!==o)return!1}else if(!L(o)||o.length!==r.length||r.some((s,p)=>s!==o[p]))return!1}return!0}function zt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nt=(t,e,n)=>t??e??n,an=yt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=V(ut),o=q(()=>t.route||r.value),s=V(Vt,0),p=q(()=>{let f=H(s);const{matched:d}=o.value;let c;for(;(c=d[f])&&!c.components;)f++;return f}),g=q(()=>o.value.matched[p.value]);rt(Vt,q(()=>p.value+1)),rt(tn,g),rt(ut,o);const i=ne();return re(()=>[i.value,g.value,t.name],([f,d,c],[l,u,E])=>{d&&(d.instances[c]=f,u&&u!==d&&f&&f===l&&(d.leaveGuards.size||(d.leaveGuards=u.leaveGuards),d.updateGuards.size||(d.updateGuards=u.updateGuards))),f&&d&&(!u||!W(d,u)||!l)&&(d.enterCallbacks[c]||[]).forEach(k=>k(f))},{flush:"post"}),()=>{const f=o.value,d=t.name,c=g.value,l=c&&c.components[d];if(!l)return Qt(n.default,{Component:l,route:f});const u=c.props[d],E=u?u===!0?f.params:typeof u=="function"?u(f):u:null,k=bt(l,O({},E,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(c.instances[d]=null)},ref:i}));return Qt(n.default,{Component:k,route:f})||k}}});function Qt(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cn=an;function ln(t){const e=ze(t.routes,t),n=t.parseQuery||Ze,r=t.stringifyQuery||Ft,o=t.history,s=X(),p=X(),g=X(),i=oe(B);let f=B;U&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ot.bind(null,a=>""+a),c=ot.bind(null,we),l=ot.bind(null,z);function u(a,m){let h,v;return Lt(a)?(h=e.getRecordMatcher(a),v=m):v=a,e.addRoute(v,h)}function E(a){const m=e.getRecordMatcher(a);m&&e.removeRoute(m)}function k(){return e.getRoutes().map(a=>a.record)}function P(a){return!!e.getRecordMatcher(a)}function $(a,m){if(m=O({},m||i.value),typeof a=="string"){const y=it(n,a,m.path),A=e.resolve({path:y.path},m),Z=o.createHref(y.fullPath);return O(y,A,{params:l(A.params),hash:z(y.hash),redirectedFrom:void 0,href:Z})}let h;if(a.path!=null)h=O({},a,{path:it(n,a.path,m.path).path});else{const y=O({},a.params);for(const A in y)y[A]==null&&delete y[A];h=O({},a,{params:c(y)}),m.params=c(m.params)}const v=e.resolve(h,m),C=a.hash||"";v.params=d(l(v.params));const S=Oe(r,O({},a,{hash:ve(C),path:v.path})),b=o.createHref(S);return O({fullPath:S,hash:C,query:r===Ft?Je(a.query):a.query||{}},v,{redirectedFrom:void 0,href:b})}function w(a){return typeof a=="string"?it(n,a,i.value.path):O({},a)}function R(a,m){if(f!==a)return T(8,{from:m,to:a})}function x(a){return _(a)}function D(a){return x(O(w(a),{replace:!0}))}function G(a){const m=a.matched[a.matched.length-1];if(m&&m.redirect){const{redirect:h}=m;let v=typeof h=="function"?h(a):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),O({query:a.query,hash:a.hash,params:v.path!=null?{}:a.params},v)}}function _(a,m){const h=f=$(a),v=i.value,C=a.state,S=a.force,b=a.replace===!0,y=G(h);if(y)return _(O(w(y),{state:typeof y=="object"?O({},C,y.state):C,force:S,replace:b}),m||h);const A=h;A.redirectedFrom=m;let Z;return!S&&Re(r,v,h)&&(Z=T(16,{to:A,from:v}),te(v,v,!0,!1)),(Z?Promise.resolve(Z):Xt(A,v)).catch(j=>M(j)?M(j,2)?j:mt(j):dt(j,A,v)).then(j=>{if(j){if(M(j,2))return _(O({replace:b},w(j.to),{state:typeof j.to=="object"?O({},C,j.to.state):C,force:S}),m||A)}else j=Zt(A,v,!0,b,C);return Yt(A,v,j),j})}function un(a,m){const h=R(a,m);return h?Promise.reject(h):Promise.resolve()}function pt(a){const m=et.values().next().value;return m&&typeof m.runWithContext=="function"?m.runWithContext(a):a()}function Xt(a,m){let h;const[v,C,S]=sn(a,m);h=ft(v.reverse(),"beforeRouteLeave",a,m);for(const y of v)y.leaveGuards.forEach(A=>{h.push(I(A,a,m))});const b=un.bind(null,a,m);return h.push(b),F(h).then(()=>{h=[];for(const y of s.list())h.push(I(y,a,m));return h.push(b),F(h)}).then(()=>{h=ft(C,"beforeRouteUpdate",a,m);for(const y of C)y.updateGuards.forEach(A=>{h.push(I(A,a,m))});return h.push(b),F(h)}).then(()=>{h=[];for(const y of S)if(y.beforeEnter)if(L(y.beforeEnter))for(const A of y.beforeEnter)h.push(I(A,a,m));else h.push(I(y.beforeEnter,a,m));return h.push(b),F(h)}).then(()=>(a.matched.forEach(y=>y.enterCallbacks={}),h=ft(S,"beforeRouteEnter",a,m,pt),h.push(b),F(h))).then(()=>{h=[];for(const y of p.list())h.push(I(y,a,m));return h.push(b),F(h)}).catch(y=>M(y,8)?y:Promise.reject(y))}function Yt(a,m,h){g.list().forEach(v=>pt(()=>v(a,m,h)))}function Zt(a,m,h,v,C){const S=R(a,m);if(S)return S;const b=m===B,y=U?history.state:{};h&&(v||b?o.replace(a.fullPath,O({scroll:b&&y&&y.scroll},C)):o.push(a.fullPath,C)),i.value=a,te(a,m,h,b),mt()}let Y;function fn(){Y||(Y=o.listen((a,m,h)=>{const v=$(a),C=G(v);if(C){_(O(C,{replace:!0}),v).catch(K);return}f=v;const S=i.value;U&&Le(At(S.fullPath,h.delta),J()),Xt(v,S).catch(b=>M(b,12)?b:M(b,2)?(_(b.to,v).then(y=>{M(y,20)&&!h.delta&&h.type===N.pop&&o.go(-1,!1)}).catch(K),Promise.reject()):(h.delta&&o.go(-h.delta,!1),dt(b,v,S))).then(b=>{b=b||Zt(v,S,!1),b&&(h.delta&&!M(b,8)?o.go(-h.delta,!1):h.type===N.pop&&M(b,20)&&o.go(-1,!1)),Yt(v,S,b)}).catch(K)}))}let ht=X(),Jt=X(),tt;function dt(a,m,h){mt(a);const v=Jt.list();return v.length?v.forEach(C=>C(a,m,h)):console.error(a),Promise.reject(a)}function pn(){return tt&&i.value!==B?Promise.resolve():new Promise((a,m)=>{ht.add([a,m])})}function mt(a){return tt||(tt=!a,fn(),ht.list().forEach(([m,h])=>a?h(a):m()),ht.reset()),a}function te(a,m,h,v){const{scrollBehavior:C}=t;if(!U||!C)return Promise.resolve();const S=!h&&xe(At(a.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return ce().then(()=>C(a,m,S)).then(b=>b&&_e(b)).catch(b=>dt(b,a,m))}const gt=a=>o.go(a);let vt;const et=new Set,hn={currentRoute:i,listening:!0,addRoute:u,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:k,resolve:$,options:t,push:x,replace:D,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:s.add,beforeResolve:p.add,afterEach:g.add,onError:Jt.add,isReady:pn,install(a){const m=this;a.component("RouterLink",nn),a.component("RouterView",cn),a.config.globalProperties.$router=m,Object.defineProperty(a.config.globalProperties,"$route",{enumerable:!0,get:()=>H(i)}),U&&!vt&&i.value===B&&(vt=!0,x(o.location).catch(C=>{}));const h={};for(const C in B)Object.defineProperty(h,C,{get:()=>i.value[C],enumerable:!0});a.provide(st,m),a.provide(Ht,ae(h)),a.provide(ut,i);const v=a.unmount;et.add(a),a.unmount=function(){et.delete(a),et.size<1&&(f=B,Y&&Y(),Y=null,i.value=B,vt=!1,tt=!1),v()}}};function F(a){return a.reduce((m,h)=>m.then(()=>pt(h)),Promise.resolve())}return hn}function sn(t,e){const n=[],r=[],o=[],s=Math.max(e.matched.length,t.matched.length);for(let p=0;p<s;p++){const g=e.matched[p];g&&(t.matched.find(f=>W(f,g))?r.push(g):n.push(g));const i=t.matched[p];i&&(e.matched.find(f=>W(f,i))||o.push(i))}return[n,r,o]}ln({history:Ie("/"),routes:[]}),await nt("vue"),{...mn}});
