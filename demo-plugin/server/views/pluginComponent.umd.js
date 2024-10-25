(function(k,ie){typeof exports=="object"&&typeof module<"u"?module.exports=ie():typeof define=="function"&&define.amd?define(ie):(k=typeof globalThis<"u"?globalThis:k||self,k.PluginComponent=ie())})(this,function(){"use strict";var k={};/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ie(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const T=k.NODE_ENV!=="production"?Object.freeze({}):{},on=k.NODE_ENV!=="production"?Object.freeze([]):[],oe=()=>{},cn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),D=Object.assign,ln=Object.prototype.hasOwnProperty,w=(e,t)=>ln.call(e,t),b=Array.isArray,B=e=>ge(e)==="[object Map]",dt=e=>ge(e)==="[object Set]",S=e=>typeof e=="function",I=e=>typeof e=="string",q=e=>typeof e=="symbol",x=e=>e!==null&&typeof e=="object",an=e=>(x(e)||S(e))&&S(e.then)&&S(e.catch),ht=Object.prototype.toString,ge=e=>ht.call(e),gt=e=>ge(e).slice(8,-1),_t=e=>ge(e)==="[object Object]",je=e=>I(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,un=(e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))})(e=>e.charAt(0).toUpperCase()+e.slice(1)),Y=(e,t)=>!Object.is(e,t),fn=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})};let mt;const _e=()=>mt||(mt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function He(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=I(s)?gn(s):He(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(I(e)||x(e))return e}const pn=/;(?![^(]*\))/g,dn=/:([^]+)/,hn=/\/\*[^]*?\*\//g;function gn(e){const t={};return e.replace(hn,"").split(pn).forEach(n=>{if(n){const s=n.split(dn);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function We(e){let t="";if(I(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const s=We(e[n]);s&&(t+=s+" ")}else if(x(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bt=e=>!!(e&&e.__v_isRef===!0),Et=e=>I(e)?e:e==null?"":b(e)||x(e)&&(e.toString===ht||!S(e.toString))?bt(e)?Et(e.value):JSON.stringify(e,wt,2):String(e),wt=(e,t)=>bt(t)?wt(e,t.value):B(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Ke(s,i)+" =>"]=r,n),{})}:dt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ke(n))}:q(t)?Ke(t):x(t)&&!b(t)&&!_t(t)?String(t):t,Ke=(e,t="")=>{var n;return q(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};var E={};function K(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let m;const ze=new WeakSet;class _n{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ze.has(this)&&(ze.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yt(this),Nt(this);const t=m,n=M;m=this,M=!0;try{return this.fn()}finally{E.NODE_ENV!=="production"&&m!==this&&K("Active effect was not restored correctly - this is likely a Vue internal bug."),Ot(this),m=t,M=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Be(t);this.deps=this.depsTail=void 0,yt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ze.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Je(this)&&this.run()}get dirty(){return Je(this)}}let St=0,ce,le;function mn(e,t=!1){if(e.flags|=8,t){e.next=le,le=e;return}e.next=ce,ce=e}function Le(){St++}function Ue(){if(--St>0)return;if(le){let t=le;for(le=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ce;){let t=ce;for(ce=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Nt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ot(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Be(s),En(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Je(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(bn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function bn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ee))return;e.globalVersion=Ee;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Je(e)){e.flags&=-3;return}const n=m,s=M;m=e,M=!0;try{Nt(e);const r=e.fn(e._value);(t.version===0||Y(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{m=n,M=s,Ot(e),e.flags&=-3}}function Be(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),E.NODE_ENV!=="production"&&n.subsHead===e&&(n.subsHead=r),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Be(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function En(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let M=!0;const xt=[];function me(){xt.push(M),M=!1}function be(){const e=xt.pop();M=e===void 0?!0:e}function yt(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=m;m=void 0;try{t()}finally{m=n}}}let Ee=0;class wn{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,E.NODE_ENV!=="production"&&(this.subsHead=void 0)}track(t){if(!m||!M||m===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==m)n=this.activeLink=new wn(m,this),m.deps?(n.prevDep=m.depsTail,m.depsTail.nextDep=n,m.depsTail=n):m.deps=m.depsTail=n,vt(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=m.depsTail,n.nextDep=void 0,m.depsTail.nextDep=n,m.depsTail=n,m.deps===n&&(m.deps=s)}return E.NODE_ENV!=="production"&&m.onTrack&&m.onTrack(D({effect:m},t)),n}trigger(t){this.version++,Ee++,this.notify(t)}notify(t){Le();try{if(E.NODE_ENV!=="production")for(let n=this.subsHead;n;n=n.nextSub)n.sub.onTrigger&&!(n.sub.flags&8)&&n.sub.onTrigger(D({effect:n.sub},t));for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ue()}}}function vt(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)vt(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),E.NODE_ENV!=="production"&&e.dep.subsHead===void 0&&(e.dep.subsHead=e),e.dep.subs=e}}const qe=new WeakMap,G=Symbol(E.NODE_ENV!=="production"?"Object iterate":""),Ye=Symbol(E.NODE_ENV!=="production"?"Map keys iterate":""),ae=Symbol(E.NODE_ENV!=="production"?"Array iterate":"");function y(e,t,n){if(M&&m){let s=qe.get(e);s||qe.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Sn),r.map=s,r.key=n),E.NODE_ENV!=="production"?r.track({target:e,type:t,key:n}):r.track()}}function z(e,t,n,s,r,i){const o=qe.get(e);if(!o){Ee++;return}const c=a=>{a&&(E.NODE_ENV!=="production"?a.trigger({target:e,type:t,key:n,newValue:s,oldValue:r,oldTarget:i}):a.trigger())};if(Le(),t==="clear")o.forEach(c);else{const a=b(e),f=a&&je(n);if(a&&n==="length"){const d=Number(s);o.forEach((l,u)=>{(u==="length"||u===ae||!q(u)&&u>=d)&&c(l)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),f&&c(o.get(ae)),t){case"add":a?f&&c(o.get("length")):(c(o.get(G)),B(e)&&c(o.get(Ye)));break;case"delete":a||(c(o.get(G)),B(e)&&c(o.get(Ye)));break;case"set":B(e)&&c(o.get(G));break}}Ue()}function ee(e){const t=h(e);return t===e?t:(y(t,"iterate",ae),R(e)?t:t.map(C))}function Ge(e){return y(e=h(e),"iterate",ae),e}const Nn={__proto__:null,[Symbol.iterator](){return Qe(this,Symbol.iterator,C)},concat(...e){return ee(this).concat(...e.map(t=>b(t)?ee(t):t))},entries(){return Qe(this,"entries",e=>(e[1]=C(e[1]),e))},every(e,t){return j(this,"every",e,t,void 0,arguments)},filter(e,t){return j(this,"filter",e,t,n=>n.map(C),arguments)},find(e,t){return j(this,"find",e,t,C,arguments)},findIndex(e,t){return j(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return j(this,"findLast",e,t,C,arguments)},findLastIndex(e,t){return j(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return j(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xe(this,"includes",e)},indexOf(...e){return Xe(this,"indexOf",e)},join(e){return ee(this).join(e)},lastIndexOf(...e){return Xe(this,"lastIndexOf",e)},map(e,t){return j(this,"map",e,t,void 0,arguments)},pop(){return ue(this,"pop")},push(...e){return ue(this,"push",e)},reduce(e,...t){return Dt(this,"reduce",e,t)},reduceRight(e,...t){return Dt(this,"reduceRight",e,t)},shift(){return ue(this,"shift")},some(e,t){return j(this,"some",e,t,void 0,arguments)},splice(...e){return ue(this,"splice",e)},toReversed(){return ee(this).toReversed()},toSorted(e){return ee(this).toSorted(e)},toSpliced(...e){return ee(this).toSpliced(...e)},unshift(...e){return ue(this,"unshift",e)},values(){return Qe(this,"values",C)}};function Qe(e,t,n){const s=Ge(e),r=s[t]();return s!==e&&!R(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const On=Array.prototype;function j(e,t,n,s,r,i){const o=Ge(e),c=o!==e&&!R(e),a=o[t];if(a!==On[t]){const l=a.apply(e,i);return c?C(l):l}let f=n;o!==e&&(c?f=function(l,u){return n.call(this,C(l),u,e)}:n.length>2&&(f=function(l,u){return n.call(this,l,u,e)}));const d=a.call(o,f,s);return c&&r?r(d):d}function Dt(e,t,n,s){const r=Ge(e);let i=n;return r!==e&&(R(e)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,e)}):i=function(o,c,a){return n.call(this,o,C(c),a,e)}),r[t](i,...s)}function Xe(e,t,n){const s=h(e);y(s,"iterate",ae);const r=s[t](...n);return(r===-1||r===!1)&&Oe(n[0])?(n[0]=h(n[0]),s[t](...n)):r}function ue(e,t,n=[]){me(),Le();const s=h(e)[t].apply(e,n);return Ue(),be(),s}const xn=ie("__proto__,__v_isRef,__isVue"),Vt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(q));function yn(e){q(e)||(e=String(e));const t=h(this);return y(t,"has",e),t.hasOwnProperty(e)}class Rt{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?$t:Pt:i?Mn:It).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=b(t);if(!r){let a;if(o&&(a=Nn[n]))return a;if(n==="hasOwnProperty")return yn}const c=Reflect.get(t,n,V(t)?t:s);return(q(n)?Vt.has(n):xn(n))||(r||y(t,"get",n),i)?c:V(c)?o&&je(n)?c:c.value:x(c)?r?At(c):Mt(c):c}}class vn extends Rt{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const a=L(i);if(!R(s)&&!L(s)&&(i=h(i),s=h(s)),!b(t)&&V(i)&&!V(s))return a?!1:(i.value=s,!0)}const o=b(t)&&je(n)?Number(n)<t.length:w(t,n),c=Reflect.set(t,n,s,V(t)?t:r);return t===h(r)&&(o?Y(s,i)&&z(t,"set",n,s,i):z(t,"add",n,s)),c}deleteProperty(t,n){const s=w(t,n),r=t[n],i=Reflect.deleteProperty(t,n);return i&&s&&z(t,"delete",n,void 0,r),i}has(t,n){const s=Reflect.has(t,n);return(!q(n)||!Vt.has(n))&&y(t,"has",n),s}ownKeys(t){return y(t,"iterate",b(t)?"length":G),Reflect.ownKeys(t)}}class Ct extends Rt{constructor(t=!1){super(!0,t)}set(t,n){return E.NODE_ENV!=="production"&&K(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0}deleteProperty(t,n){return E.NODE_ENV!=="production"&&K(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}}const Dn=new vn,Vn=new Ct,Rn=new Ct(!0),Ze=e=>e,we=e=>Reflect.getPrototypeOf(e);function Cn(e,t,n){return function(...s){const r=this.__v_raw,i=h(r),o=B(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,f=r[e](...s),d=n?Ze:t?tt:C;return!t&&y(i,"iterate",a?Ye:G),{next(){const{value:l,done:u}=f.next();return u?{value:l,done:u}:{value:c?[d(l[0]),d(l[1])]:d(l),done:u}},[Symbol.iterator](){return this}}}}function Se(e){return function(...t){if(E.NODE_ENV!=="production"){const n=t[0]?`on key "${t[0]}" `:"";K(`${un(e)} operation ${n}failed: target is readonly.`,h(this))}return e==="delete"?!1:e==="clear"?void 0:this}}function Tn(e,t){const n={get(r){const i=this.__v_raw,o=h(i),c=h(r);e||(Y(r,c)&&y(o,"get",r),y(o,"get",c));const{has:a}=we(o),f=t?Ze:e?tt:C;if(a.call(o,r))return f(i.get(r));if(a.call(o,c))return f(i.get(c));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&y(h(r),"iterate",G),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=h(i),c=h(r);return e||(Y(r,c)&&y(o,"has",r),y(o,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const o=this,c=o.__v_raw,a=h(c),f=t?Ze:e?tt:C;return!e&&y(a,"iterate",G),c.forEach((d,l)=>r.call(i,f(d),f(l),o))}};return D(n,e?{add:Se("add"),set:Se("set"),delete:Se("delete"),clear:Se("clear")}:{add(r){!t&&!R(r)&&!L(r)&&(r=h(r));const i=h(this);return we(i).has.call(i,r)||(i.add(r),z(i,"add",r,r)),this},set(r,i){!t&&!R(i)&&!L(i)&&(i=h(i));const o=h(this),{has:c,get:a}=we(o);let f=c.call(o,r);f?E.NODE_ENV!=="production"&&Tt(o,c,r):(r=h(r),f=c.call(o,r));const d=a.call(o,r);return o.set(r,i),f?Y(i,d)&&z(o,"set",r,i,d):z(o,"add",r,i),this},delete(r){const i=h(this),{has:o,get:c}=we(i);let a=o.call(i,r);a?E.NODE_ENV!=="production"&&Tt(i,o,r):(r=h(r),a=o.call(i,r));const f=c?c.call(i,r):void 0,d=i.delete(r);return a&&z(i,"delete",r,void 0,f),d},clear(){const r=h(this),i=r.size!==0,o=E.NODE_ENV!=="production"?B(r)?new Map(r):new Set(r):void 0,c=r.clear();return i&&z(r,"clear",void 0,void 0,o),c}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Cn(r,e,t)}),n}function ke(e,t){const n=Tn(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(w(n,r)&&r in s?n:s,r,i)}const In={get:ke(!1,!1)},Pn={get:ke(!0,!1)},$n={get:ke(!0,!0)};function Tt(e,t,n){const s=h(n);if(s!==n&&t.call(e,s)){const r=gt(e);K(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const It=new WeakMap,Mn=new WeakMap,Pt=new WeakMap,$t=new WeakMap;function An(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fn(e){return e.__v_skip||!Object.isExtensible(e)?0:An(gt(e))}function Mt(e){return L(e)?e:et(e,!1,Dn,In,It)}function At(e){return et(e,!0,Vn,Pn,Pt)}function Ne(e){return et(e,!0,Rn,$n,$t)}function et(e,t,n,s,r){if(!x(e))return E.NODE_ENV!=="production"&&K(`value cannot be made ${t?"readonly":"reactive"}: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Fn(e);if(o===0)return e;const c=new Proxy(e,o===2?s:n);return r.set(e,c),c}function te(e){return L(e)?te(e.__v_raw):!!(e&&e.__v_isReactive)}function L(e){return!!(e&&e.__v_isReadonly)}function R(e){return!!(e&&e.__v_isShallow)}function Oe(e){return e?!!e.__v_raw:!1}function h(e){const t=e&&e.__v_raw;return t?h(t):e}function jn(e){return!w(e,"__v_skip")&&Object.isExtensible(e)&&fn(e,"__v_skip",!0),e}const C=e=>x(e)?Mt(e):e,tt=e=>x(e)?At(e):e;function V(e){return e?e.__v_isRef===!0:!1}function Hn(e){return V(e)?e.value:e}const Wn={get:(e,t,n)=>t==="__v_raw"?e:Hn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return V(r)&&!V(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Kn(e){return te(e)?e:new Proxy(e,Wn)}const xe={},ye=new WeakMap;let Q;function zn(e,t=!1,n=Q){if(n){let s=ye.get(n);s||ye.set(n,s=[]),s.push(e)}else E.NODE_ENV!=="production"&&!t&&K("onWatcherCleanup() was called when there was no active watcher to associate with.")}function Ln(e,t,n=T){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:c,call:a}=n,f=_=>{(n.onWarn||K)("Invalid watch source: ",_,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},d=_=>r?_:R(_)||r===!1||r===0?U(_,1):U(_);let l,u,p,O,$=!1,Ae=!1;if(V(e)?(u=()=>e.value,$=R(e)):te(e)?(u=()=>d(e),$=!0):b(e)?(Ae=!0,$=e.some(_=>te(_)||R(_)),u=()=>e.map(_=>{if(V(_))return _.value;if(te(_))return d(_);if(S(_))return a?a(_,2):_();E.NODE_ENV!=="production"&&f(_)})):S(e)?t?u=a?()=>a(e,2):e:u=()=>{if(p){me();try{p()}finally{be()}}const _=Q;Q=l;try{return a?a(e,3,[O]):e(O)}finally{Q=_}}:(u=oe,E.NODE_ENV!=="production"&&f(e)),t&&r){const _=u,F=r===!0?1/0:r;u=()=>U(_(),F)}const se=()=>{l.stop()};if(i&&t){const _=t;t=(...F)=>{_(...F),se()}}let Z=Ae?new Array(e.length).fill(xe):xe;const he=_=>{if(!(!(l.flags&1)||!l.dirty&&!_))if(t){const F=l.run();if(r||$||(Ae?F.some((pt,Fe)=>Y(pt,Z[Fe])):Y(F,Z))){p&&p();const pt=Q;Q=l;try{const Fe=[F,Z===xe?void 0:Ae&&Z[0]===xe?[]:Z,O];a?a(t,3,Fe):t(...Fe),Z=F}finally{Q=pt}}}else l.run()};return c&&c(he),l=new _n(u),l.scheduler=o?()=>o(he,!1):he,O=_=>zn(_,!1,l),p=l.onStop=()=>{const _=ye.get(l);if(_){if(a)a(_,4);else for(const F of _)F();ye.delete(l)}},E.NODE_ENV!=="production"&&(l.onTrack=n.onTrack,l.onTrigger=n.onTrigger),t?s?he(!0):Z=l.run():o?o(he.bind(null,!0),!0):l.run(),se.pause=l.pause.bind(l),se.resume=l.resume.bind(l),se.stop=se,se}function U(e,t=1/0,n){if(t<=0||!x(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,V(e))U(e.value,t,n);else if(b(e))for(let s=0;s<e.length;s++)U(e[s],t,n);else if(dt(e)||B(e))e.forEach(s=>{U(s,t,n)});else if(_t(e)){for(const s in e)U(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&U(e[s],t,n)}return e}var g={};const X=[];function Un(e){X.push(e)}function Jn(){X.pop()}let nt=!1;function N(e,...t){if(nt)return;nt=!0,me();const n=X.length?X[X.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=Bn();if(s)ve(s,n,11,[e+t.map(i=>{var o,c;return(c=(o=i.toString)==null?void 0:o.call(i))!=null?c:JSON.stringify(i)}).join(""),n&&n.proxy,r.map(({vnode:i})=>`at <${rn(n,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${e}`,...t];r.length&&i.push(`
`,...qn(r)),console.warn(...i)}be(),nt=!1}function Bn(){let e=X[X.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function qn(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...Yn(n))}),t}function Yn({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${rn(e.component,e.type,s)}`,i=">"+n;return e.props?[r,...Gn(e.props),i]:[r+i]}function Gn(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...Ft(s,e[s]))}),n.length>3&&t.push(" ..."),t}function Ft(e,t,n){return I(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:V(t)?(t=Ft(e,h(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):S(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=h(t),n?t:[`${e}=`,t])}const jt={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function ve(e,t,n,s){try{return s?e(...s):e()}catch(r){rt(r,t,n)}}function Ht(e,t,n,s){if(S(e)){const r=ve(e,t,n,s);return r&&an(r)&&r.catch(i=>{rt(i,t,n)}),r}if(b(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ht(e[i],t,n,s));return r}else g.NODE_ENV!=="production"&&N(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`)}function rt(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||T;if(t){let c=t.parent;const a=t.proxy,f=g.NODE_ENV!=="production"?jt[n]:`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let l=0;l<d.length;l++)if(d[l](e,a,f)===!1)return}c=c.parent}if(i){me(),ve(i,null,10,[e,a,f]),be();return}}Qn(e,n,r,s,o)}function Qn(e,t,n,s=!0,r=!1){if(g.NODE_ENV!=="production"){const i=jt[t];if(n&&Un(n),N(`Unhandled error${i?` during execution of ${i}`:""}`),n&&Jn(),s)throw e;console.error(e)}else{if(r)throw e;console.error(e)}}const P=[];let H=-1;const ne=[];let J=null,re=0;const Wt=Promise.resolve();let De=null;const Xn=100;function Zn(e){const t=De||Wt;return e?t.then(this?e.bind(this):e):t}function kn(e){let t=H+1,n=P.length;for(;t<n;){const s=t+n>>>1,r=P[s],i=fe(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function st(e){if(!(e.flags&1)){const t=fe(e),n=P[P.length-1];!n||!(e.flags&2)&&t>=fe(n)?P.push(e):P.splice(kn(t),0,e),e.flags|=1,Kt()}}function Kt(){De||(De=Wt.then(Lt))}function zt(e){b(e)?ne.push(...e):J&&e.id===-1?J.splice(re+1,0,e):e.flags&1||(ne.push(e),e.flags|=1),Kt()}function er(e){if(ne.length){const t=[...new Set(ne)].sort((n,s)=>fe(n)-fe(s));if(ne.length=0,J){J.push(...t);return}for(J=t,g.NODE_ENV!=="production"&&(e=e||new Map),re=0;re<J.length;re++){const n=J[re];g.NODE_ENV!=="production"&&Ut(e,n)||(n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2)}J=null,re=0}}const fe=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Lt(e){g.NODE_ENV!=="production"&&(e=e||new Map);const t=g.NODE_ENV!=="production"?n=>Ut(e,n):oe;try{for(H=0;H<P.length;H++){const n=P[H];if(n&&!(n.flags&8)){if(g.NODE_ENV!=="production"&&t(n))continue;n.flags&4&&(n.flags&=-2),ve(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2)}}}finally{for(;H<P.length;H++){const n=P[H];n&&(n.flags&=-2)}H=-1,P.length=0,er(e),De=null,(P.length||ne.length)&&Lt(e)}}function Ut(e,t){const n=e.get(t)||0;if(n>Xn){const s=t.i,r=s&&nn(s.type);return rt(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}return e.set(t,n+1),!1}const it=new Map;g.NODE_ENV!=="production"&&(_e().__VUE_HMR_RUNTIME__={createRecord:ot(tr),rerender:ot(nr),reload:ot(rr)});const Ve=new Map;function tr(e,t){return Ve.has(e)?!1:(Ve.set(e,{initialDef:Re(t),instances:new Set}),!0)}function Re(e){return sn(e)?e.__vccOpts:e}function nr(e,t){const n=Ve.get(e);n&&(n.initialDef.render=t,[...n.instances].forEach(s=>{t&&(s.render=t,Re(s.type).render=t),s.renderCache=[],s.update()}))}function rr(e,t){const n=Ve.get(e);if(!n)return;t=Re(t),Jt(n.initialDef,t);const s=[...n.instances];for(let r=0;r<s.length;r++){const i=s[r],o=Re(i.type);let c=it.get(o);c||(o!==n.initialDef&&Jt(o,t),it.set(o,c=new Set)),c.add(i),i.appContext.propsCache.delete(i.type),i.appContext.emitsCache.delete(i.type),i.appContext.optionsCache.delete(i.type),i.ceReload?(c.add(i),i.ceReload(t.styles),c.delete(i)):i.parent?st(()=>{i.parent.update(),c.delete(i)}):i.appContext.reload?i.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required."),i.root.ce&&i!==i.root&&i.root.ce._removeChildStyle(o)}zt(()=>{it.clear()})}function Jt(e,t){D(e,t);for(const n in e)n!=="__file"&&!(n in t)&&delete e[n]}function ot(e){return(t,n)=>{try{return e(t,n)}catch(s){console.error(s),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let W=null,sr=null;const ir=e=>e.__isTeleport;function Bt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function or(e,t){return S(e)?D({name:e.name},t,{setup:e}):e}_e().requestIdleCallback,_e().cancelIdleCallback;const cr=Symbol.for("v-ndc"),ct=e=>e?jr(e)?Hr(e):ct(e.parent):null,pe=D(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>g.NODE_ENV!=="production"?Ne(e.props):e.props,$attrs:e=>g.NODE_ENV!=="production"?Ne(e.attrs):e.attrs,$slots:e=>g.NODE_ENV!=="production"?Ne(e.slots):e.slots,$refs:e=>g.NODE_ENV!=="production"?Ne(e.refs):e.refs,$parent:e=>ct(e.parent),$root:e=>ct(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ur(e),$forceUpdate:e=>e.f||(e.f=()=>{st(e.update)}),$nextTick:e=>e.n||(e.n=Zn.bind(e.proxy)),$watch:e=>Sr.bind(e)}),lr=e=>e==="_"||e==="$",lt=(e,t)=>e!==T&&!e.__isScriptSetup&&w(e,t),ar={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:c,appContext:a}=e;if(g.NODE_ENV!=="production"&&t==="__isVue")return!0;let f;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(lt(s,t))return o[t]=1,s[t];if(r!==T&&w(r,t))return o[t]=2,r[t];if((f=e.propsOptions[0])&&w(f,t))return o[t]=3,i[t];if(n!==T&&w(n,t))return o[t]=4,n[t];o[t]=0}}const d=pe[t];let l,u;if(d)return t==="$attrs"?y(e.attrs,"get",""):g.NODE_ENV!=="production"&&t==="$slots"&&y(e,"get",t),d(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==T&&w(n,t))return o[t]=4,n[t];if(u=a.config.globalProperties,w(u,t))return u[t];g.NODE_ENV!=="production"&&W&&(!I(t)||t.indexOf("__v")!==0)&&(r!==T&&lr(t[0])&&w(r,t)?N(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===W&&N(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return lt(r,t)?(r[t]=n,!0):g.NODE_ENV!=="production"&&r.__isScriptSetup&&w(r,t)?(N(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):s!==T&&w(s,t)?(s[t]=n,!0):w(e.props,t)?(g.NODE_ENV!=="production"&&N(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(g.NODE_ENV!=="production"&&N(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(g.NODE_ENV!=="production"&&t in e.appContext.config.globalProperties?Object.defineProperty(i,t,{enumerable:!0,configurable:!0,value:n}):i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let c;return!!n[o]||e!==T&&w(e,o)||lt(t,o)||(c=i[0])&&w(c,o)||w(s,o)||w(pe,o)||w(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:w(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};g.NODE_ENV!=="production"&&(ar.ownKeys=e=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e)));function qt(e){return b(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function ur(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(f=>Ce(a,f,o,!0)),Ce(a,t,o)),x(t)&&i.set(t,a),a}function Ce(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Ce(e,i,n,!0),r&&r.forEach(o=>Ce(e,o,n,!0));for(const o in t)if(s&&o==="expose")g.NODE_ENV!=="production"&&N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=fr[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const fr={data:Yt,props:Qt,emits:Qt,methods:de,computed:de,beforeCreate:v,created:v,beforeMount:v,mounted:v,beforeUpdate:v,updated:v,beforeDestroy:v,beforeUnmount:v,destroyed:v,unmounted:v,activated:v,deactivated:v,errorCaptured:v,serverPrefetch:v,components:de,directives:de,watch:dr,provide:Yt,inject:pr};function Yt(e,t){return t?e?function(){return D(S(e)?e.call(this,this):e,S(t)?t.call(this,this):t)}:t:e}function pr(e,t){return de(Gt(e),Gt(t))}function Gt(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function v(e,t){return e?[...new Set([].concat(e,t))]:t}function de(e,t){return e?D(Object.create(null),e,t):t}function Qt(e,t){return e?b(e)&&b(t)?[...new Set([...e,...t])]:D(Object.create(null),qt(e),qt(t??{})):t}function dr(e,t){if(!e)return t;if(!t)return e;const n=D(Object.create(null),e);for(const s in t)n[s]=v(e[s],t[s]);return n}let hr=null;function gr(e,t,n=!1){const s=Me||W;if(s||hr){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&S(t)?t.call(s&&s.proxy):t;g.NODE_ENV!=="production"&&N(`injection "${String(e)}" not found.`)}else g.NODE_ENV!=="production"&&N("inject() can only be used inside setup() or functional components.")}const _r={},Xt=e=>Object.getPrototypeOf(e)===_r,mr=xr,br=Symbol.for("v-scx"),Er=()=>{{const e=gr(br);return e||g.NODE_ENV!=="production"&&N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function wr(e,t,n=T){const{immediate:s,deep:r,flush:i,once:o}=n;g.NODE_ENV!=="production"&&!t&&(s!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&N('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const c=D({},n);g.NODE_ENV!=="production"&&(c.onWarn=N);const a=t&&s||!t&&i!=="post";let f;if(ft){if(i==="sync"){const p=Er();f=p.__watcherHandles||(p.__watcherHandles=[])}else if(!a){const p=()=>{};return p.stop=oe,p.resume=oe,p.pause=oe,p}}const d=Me;c.call=(p,O,$)=>Ht(p,d,O,$);let l=!1;i==="post"?c.scheduler=p=>{mr(p,d&&d.suspense)}:i!=="sync"&&(l=!0,c.scheduler=(p,O)=>{O?p():st(p)}),c.augmentJob=p=>{t&&(p.flags|=4),l&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const u=Ln(e,t,c);return ft&&(f?f.push(u):a&&u()),u}function Sr(e,t,n){const s=this.proxy,r=I(e)?e.includes(".")?Nr(s,e):()=>s[e]:e.bind(s,s);let i;S(t)?i=t:(i=t.handler,n=t);const o=Fr(this),c=wr(r,i.bind(s),n);return o(),c}function Nr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Or=e=>e.__isSuspense;function xr(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):zt(e)}const Zt=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),Te=[];let A=null;function Dr(e=!1){Te.push(A=e?null:[])}function Vr(){Te.pop(),A=Te[Te.length-1]||null}function Rr(e){return e.dynamicChildren=A||on,Vr(),A&&A.push(e),e}function Cr(e,t,n,s,r,i){return Rr(Pe(e,t,n,s,r,i,!0))}function Tr(e){return e?e.__v_isVNode===!0:!1}const Ir=(...e)=>en(...e),kt=({key:e})=>e??null,Ie=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?I(e)||V(e)||S(e)?{i:W,r:e,k:t,f:!!n}:e:null);function Pe(e,t=null,n=null,s=0,r=null,i=e===Zt?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&kt(t),ref:t&&Ie(t),scopeId:sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:W};return c?(at(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=I(n)?8:16),g.NODE_ENV!=="production"&&a.key!==a.key&&N("VNode created with invalid key (NaN). VNode type:",a.type),!o&&A&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&A.push(a),a}const Pr=g.NODE_ENV!=="production"?Ir:en;function en(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===cr)&&(g.NODE_ENV!=="production"&&!e&&N(`Invalid vnode type when creating vnode: ${e}.`),e=vr),Tr(e)){const c=$e(e,t,!0);return n&&at(c,n),!i&&A&&(c.shapeFlag&6?A[A.indexOf(e)]=c:A.push(c)),c.patchFlag=-2,c}if(sn(e)&&(e=e.__vccOpts),t){t=$r(t);let{class:c,style:a}=t;c&&!I(c)&&(t.class=We(c)),x(a)&&(Oe(a)&&!b(a)&&(a=D({},a)),t.style=He(a))}const o=I(e)?1:Or(e)?128:ir(e)?64:x(e)?4:S(e)?2:0;return g.NODE_ENV!=="production"&&o&4&&Oe(e)&&(e=h(e),N("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),Pe(e,t,n,s,r,o,i,!0)}function $r(e){return e?Oe(e)||Xt(e)?D({},e):e:null}function $e(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:c,transition:a}=e,f=t?Ar(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&kt(f),ref:t&&t.ref?n&&i?b(i)?i.concat(Ie(t)):[i,Ie(t)]:Ie(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:g.NODE_ENV!=="production"&&o===-1&&b(c)?c.map(tn):c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Zt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$e(e.ssContent),ssFallback:e.ssFallback&&$e(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Bt(d,a.clone(d)),d}function tn(e){const t=$e(e);return b(e.children)&&(t.children=e.children.map(tn)),t}function Mr(e=" ",t=0){return Pr(yr,null,e,t)}function at(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(b(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),at(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Xt(t)?t._ctx=W:r===3&&W&&(W.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else S(t)?(t={default:t,_ctx:W},n=32):(t=String(t),s&64?(n=16,t=[Mr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ar(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=We([t.class,s.class]));else if(r==="style")t.style=He([t.style,s.style]);else if(cn(r)){const i=t[r],o=s[r];o&&i!==o&&!(b(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}let Me=null,ut;{const e=_e(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ut=t("__VUE_INSTANCE_SETTERS__",n=>Me=n),t("__VUE_SSR_SETTERS__",n=>ft=n)}const Fr=e=>{const t=Me;return ut(e),e.scope.on(),()=>{e.scope.off(),ut(t)}};function jr(e){return e.vnode.shapeFlag&4}let ft=!1;function Hr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Kn(jn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pe)return pe[n](e)},has(t,n){return n in t||n in pe}})):e.proxy}const Wr=/(?:^|[-_])(\w)/g,Kr=e=>e.replace(Wr,t=>t.toUpperCase()).replace(/[-_]/g,"");function nn(e,t=!0){return S(e)?e.displayName||e.name:e.name||t&&e.__name}function rn(e,t,n=!1){let s=nn(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=i=>{for(const o in i)if(i[o]===t)return o};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?Kr(s):n?"App":"Anonymous"}function sn(e){return S(e)&&"__vccOpts"in e}function zr(){if(g.NODE_ENV==="production"||typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#1677ff"},n={style:"color:#f5222d"},s={style:"color:#eb2f96"},r={__vue_custom_formatter:!0,header(l){return x(l)?l.__isVue?["div",e,"VueInstance"]:V(l)?["div",{},["span",e,d(l)],"<",c("_value"in l?l._value:l),">"]:te(l)?["div",{},["span",e,R(l)?"ShallowReactive":"Reactive"],"<",c(l),`>${L(l)?" (readonly)":""}`]:L(l)?["div",{},["span",e,R(l)?"ShallowReadonly":"Readonly"],"<",c(l),">"]:null:null},hasBody(l){return l&&l.__isVue},body(l){if(l&&l.__isVue)return["div",{},...i(l.$)]}};function i(l){const u=[];l.type.props&&l.props&&u.push(o("props",h(l.props))),l.setupState!==T&&u.push(o("setup",l.setupState)),l.data!==T&&u.push(o("data",h(l.data)));const p=a(l,"computed");p&&u.push(o("computed",p));const O=a(l,"inject");return O&&u.push(o("injected",O)),u.push(["div",{},["span",{style:s.style+";opacity:0.66"},"$ (internal): "],["object",{object:l}]]),u}function o(l,u){return u=D({},u),Object.keys(u).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},l],["div",{style:"padding-left:1.25em"},...Object.keys(u).map(p=>["div",{},["span",s,p+": "],c(u[p],!1)])]]:["span",{}]}function c(l,u=!0){return typeof l=="number"?["span",t,l]:typeof l=="string"?["span",n,JSON.stringify(l)]:typeof l=="boolean"?["span",s,l]:x(l)?["object",{object:u?h(l):l}]:["span",n,String(l)]}function a(l,u){const p=l.type;if(S(p))return;const O={};for(const $ in l.ctx)f(p,$,u)&&(O[$]=l.ctx[$]);return O}function f(l,u,p){const O=l[p];if(b(O)&&O.includes(u)||x(O)&&u in O||l.extends&&f(l.extends,u,p)||l.mixins&&l.mixins.some($=>f($,u,p)))return!0}function d(l){return R(l)?"ShallowRef":l.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}var Lr={};function Ur(){zr()}return Lr.NODE_ENV!=="production"&&Ur(),or({__name:"PluginComponent",props:{message:{type:String,required:!0}},setup(e){return(t,n)=>(Dr(),Cr("div",null,[n[0]||(n[0]=Pe("h2",null,"Plugin Component",-1)),Pe("p",null,Et(e.message),1)]))}})});
