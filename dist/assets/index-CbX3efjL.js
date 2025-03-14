var Xg=Object.defineProperty;var dl=r=>{throw TypeError(r)};var Zg=(r,e,t)=>e in r?Xg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Qr=(r,e,t)=>Zg(r,typeof e!="symbol"?e+"":e,t),fl=(r,e,t)=>e.has(r)||dl("Cannot "+t);var He=(r,e,t)=>(fl(r,e,"read from private field"),t?t.call(r):e.get(r)),On=(r,e,t)=>e.has(r)?dl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Wr=(r,e,t,n)=>(fl(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t);var ml=(r,e,t,n)=>({set _(s){Wr(r,e,s,t)},get _(){return He(r,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ep="/assets/fart-B1QTCwMx.mp3",tp=r=>`
        <div class="ingredient-container">
            <div class="card base-card">
                <div class="base-data">
                    <div class="heading card-item" >
                        <h3 class="">Base Meal</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="">${r}</p>       
                    </div>
                </div>
            </div>
            <div class="ing-text">
                <span>${r}</span>
            </div>
        </div>
    `,gl=(r,e=!1)=>`<div class="attr-data ${e?"rotate":""}">
                    <div class="heading card-item">
                        <h3 class="">Attribute</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="">${r}</p>       
                    </div>
                </div>`,pl=(r,e=!1)=>`<div class="ing-data ${e?"rotate":""}">
                    <div class="heading card-item">
                        <h3 class="">Ingredient</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="">${r}</p>       
                    </div>
                </div>`,_l=(r,e,t,n)=>`
        <div class="card ing-card ${t}">
            ${n?gl(e)+pl(r,!0):pl(r)+gl(e,!0)}
        </div>
    `,li=(r,e,t=!1)=>`<div class="ingredient-container">
            ${_l(r,e,"front",t)} 
            ${_l(r,e,"back",!t)}
            <div class="ing-text">
                <span>${t?e:r}</span>
            </div>
        </div>`,hi=r=>`
        <div class="context-token-container">
            ${r?`
            <div class="context-token">
                <span>${r}</span>
            </div>
            <div class="ing-text">
                <span>${r}</span>
            </div>
            `:""}
        </div>
    `,yl=(r,e,t={})=>{const n=document.createElement("div");n.className="meal-container",n.id=r,n.insertAdjacentHTML("afterbegin",`
        ${li(t.firstIng.ing,t.firstIng.attr,t.firstIng.rotate)}
        ${hi(t.firstIng.rotate+t.secondIng.rotate===0?"and":"")}
        ${li(t.secondIng.ing,t.secondIng.attr,t.secondIng.rotate)}
        ${hi(t.firstToken?t.firstToken:"")}
        ${tp(t.meal.name)}
        ${hi(t.secondToken?t.secondToken:"")}
        ${li(t.thirdIng.ing,t.thirdIng.attr,t.thirdIng.rotate)}
        ${hi(t.thirdIng.rotate+t.fourthIng.rotate===0?"and":"")}
        ${li(t.fourthIng.ing,t.fourthIng.attr,t.fourthIng.rotate)}
    `),e.append(n)},ga=(r,e,t,n="javascript:void(0)",s="")=>`
        <a href="${n}" type="button" class="btn ${s}" id="${e}" data-id="${t}">${r}</button>
    `,np=`
    <div class="seperator-container">
        <div class="line"></div>
        <div class="text">
            <span>OR</span>
        </div>
    </div>
`,rp=()=>'<p class="meal-analytics">This meal was also chosen by <span id="percentage"></span> of users.</p>',sp=()=>{};var Il={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ip=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],u=r[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,c=s+2<r.length,h=c?r[s+2]:0,f=i>>2,g=(i&3)<<4|u>>4;let _=(u&15)<<2|h>>6,R=h&63;c||(R=64,a||(_=64)),n.push(t[f],t[g],t[_],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(sd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ip(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const g=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||u==null||h==null||g==null)throw new op;const _=i<<2|u>>4;if(n.push(_),h!==64){const R=u<<4&240|h>>2;if(n.push(R),g!==64){const V=h<<6&192|g;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class op extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ap=function(r){const e=sd(r);return id.encodeByteArray(e,!0)},Ci=function(r){return ap(r).replace(/\./g,"")},od=function(r){try{return id.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Di(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!up(t)||(r[t]=Di(r[t],e[t]));return r}function up(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=()=>ad().__FIREBASE_DEFAULTS__,lp=()=>{if(typeof process>"u"||typeof Il>"u")return;const r=Il.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&od(r[1]);return e&&JSON.parse(e)},Wa=()=>{try{return sp()||cp()||lp()||hp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},dp=r=>{var e,t;return(t=(e=Wa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},fp=r=>{const e=dp(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},ud=()=>{var r;return(r=Wa())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ci(JSON.stringify(t)),Ci(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pp(){var r;const e=(r=Wa())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _p(){return typeof window<"u"||cd()}function cd(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function ld(){return!pp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hd(){try{return typeof indexedDB=="object"}catch{return!1}}function yp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="FirebaseError";class Sn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Ip,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Tp(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,u,n)}}function Tp(r,e){return r.replace(Ep,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Ep=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Xn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(El(i)&&El(a)){if(!Xn(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function El(r){return r!==null&&typeof r=="object"}function vp(r,e){const t=new wp(r,e);return t.subscribe.bind(t)}class wp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Ap(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=na),s.error===void 0&&(s.error=na),s.complete===void 0&&(s.complete=na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ap(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function na(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r){return r&&r._delegate?r._delegate:r}class _n{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new mp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sp(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(r){return r===sn?void 0:r}function Sp(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=[];var Q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Q||(Q={}));const fd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Pp=Q.INFO,Vp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Cp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Vp[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=Pp,this._logHandler=Cp,this._userLogHandler=null,Ha.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}function Dp(r){Ha.forEach(e=>{e.setLogLevel(r)})}function xp(r,e){for(const t of Ha){let n=null;e&&e.level&&(n=fd[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(s,i,...a)=>{const u=a.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(n??s.logLevel)&&r({level:Q[i].toLowerCase(),message:u,args:a,type:s.name})}}}const Np=(r,e)=>e.some(t=>r instanceof t);let vl,wl;function kp(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Op(){return wl||(wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const md=new WeakMap,pa=new WeakMap,gd=new WeakMap,ra=new WeakMap,Ja=new WeakMap;function Mp(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(xt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&md.set(t,r)}).catch(()=>{}),Ja.set(e,r),e}function Fp(r){if(pa.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});pa.set(r,e)}let _a={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||gd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Lp(r){_a=r(_a)}function Bp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(sa(this),e,...t);return gd.set(n,e.sort?e.sort():[e]),xt(n)}:Op().includes(r)?function(...e){return r.apply(sa(this),e),xt(md.get(this))}:function(...e){return xt(r.apply(sa(this),e))}}function Up(r){return typeof r=="function"?Bp(r):(r instanceof IDBTransaction&&Fp(r),Np(r,kp())?new Proxy(r,_a):r)}function xt(r){if(r instanceof IDBRequest)return Mp(r);if(ra.has(r))return ra.get(r);const e=Up(r);return e!==r&&(ra.set(r,e),Ja.set(e,r)),e}const sa=r=>Ja.get(r);function qp(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),u=xt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(xt(a.result),c.oldVersion,c.newVersion,xt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const $p=["get","getKey","getAll","getAllKeys","count"],jp=["put","add","delete","clear"],ia=new Map;function Al(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(ia.get(e))return ia.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=jp.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||$p.includes(t)))return;const i=async function(a,...u){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),s&&c.done]))[0]};return ia.set(e,i),i}Lp(r=>({...r,get:(e,t,n)=>Al(e,t)||r.get(e,t,n),has:(e,t)=>!!Al(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Gp(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ni="@firebase/app",ya="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new Ya("@firebase/app"),Kp="@firebase/app-compat",Qp="@firebase/analytics-compat",Wp="@firebase/analytics",Hp="@firebase/app-check-compat",Yp="@firebase/app-check",Jp="@firebase/auth",Xp="@firebase/auth-compat",Zp="@firebase/database",e_="@firebase/data-connect",t_="@firebase/database-compat",n_="@firebase/functions",r_="@firebase/functions-compat",s_="@firebase/installations",i_="@firebase/installations-compat",o_="@firebase/messaging",a_="@firebase/messaging-compat",u_="@firebase/performance",c_="@firebase/performance-compat",l_="@firebase/remote-config",h_="@firebase/remote-config-compat",d_="@firebase/storage",f_="@firebase/storage-compat",m_="@firebase/firestore",g_="@firebase/vertexai",p_="@firebase/firestore-compat",__="firebase",y_="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]",I_={[Ni]:"fire-core",[Kp]:"fire-core-compat",[Wp]:"fire-analytics",[Qp]:"fire-analytics-compat",[Yp]:"fire-app-check",[Hp]:"fire-app-check-compat",[Jp]:"fire-auth",[Xp]:"fire-auth-compat",[Zp]:"fire-rtdb",[e_]:"fire-data-connect",[t_]:"fire-rtdb-compat",[n_]:"fire-fn",[r_]:"fire-fn-compat",[s_]:"fire-iid",[i_]:"fire-iid-compat",[o_]:"fire-fcm",[a_]:"fire-fcm-compat",[u_]:"fire-perf",[c_]:"fire-perf-compat",[l_]:"fire-rc",[h_]:"fire-rc-compat",[d_]:"fire-gcs",[f_]:"fire-gcs-compat",[m_]:"fire-fst",[p_]:"fire-fst-compat",[g_]:"fire-vertex","fire-js":"fire-js",[__]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Map,Zn=new Map,er=new Map;function hs(r,e){try{r.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function pd(r,e){r.container.addOrOverwriteComponent(e)}function tr(r){const e=r.name;if(er.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;er.set(e,r);for(const t of Ft.values())hs(t,r);for(const t of Zn.values())hs(t,r);return!0}function Xa(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function T_(r,e,t=Mt){Xa(r,e).clearInstance(t)}function _d(r){return r.options!==void 0}function yd(r){return r==null?!1:r.settings!==void 0}function E_(){er.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new to("app","Firebase",v_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(r,e){const t=od(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const s=JSON.parse(t).exp*1e3,i=new Date().getTime();s-i<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class w_ extends Id{constructor(e,t,n,s){const i=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,a={name:n,automaticDataCollectionEnabled:i};if(e.apiKey!==void 0)super(e,a,s);else{const u=e;super(u.options,a,s)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._serverConfig.authIdToken&&bl(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&bl(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,tt(Ni,ya,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){eu(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ke.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=y_;function no(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Mt,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=ud()),!t)throw Ke.create("no-options");const i=Ft.get(s);if(i){if(Xn(t,i.options)&&Xn(n,i.config))return i;throw Ke.create("duplicate-app",{appName:s})}const a=new dd(s);for(const c of er.values())a.addComponent(c);const u=new Id(t,n,a);return Ft.set(s,u),u}function A_(r,e){if(_p()&&!cd())throw Ke.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;_d(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const s=h=>[...h].reduce((f,g)=>Math.imul(31,f)+g.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ke.create("finalization-registry-not-supported",{});const i=""+s(JSON.stringify(n)),a=Zn.get(i);if(a)return a.incRefCount(e.releaseOnDeref),a;const u=new dd(i);for(const h of er.values())u.addComponent(h);const c=new w_(t,e,i,u);return Zn.set(i,c),c}function Td(r=Mt){const e=Ft.get(r);if(!e&&r===Mt&&ud())return no();if(!e)throw Ke.create("no-app",{appName:r});return e}function b_(){return Array.from(Ft.values())}async function eu(r){let e=!1;const t=r.name;Ft.has(t)?(e=!0,Ft.delete(t)):Zn.has(t)&&r.decRefCount()<=0&&(Zn.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function tt(r,e,t){var n;let s=(n=I_[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(u.join(" "));return}tr(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Ed(r,e){if(r!==null&&typeof r!="function")throw Ke.create("invalid-log-argument");xp(r,e)}function vd(r){Dp(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="firebase-heartbeat-database",S_=1,ds="firebase-heartbeat-store";let oa=null;function wd(){return oa||(oa=qp(R_,S_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ds)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ke.create("idb-open",{originalErrorMessage:r.message})})),oa}async function P_(r){try{const t=(await wd()).transaction(ds),n=await t.objectStore(ds).get(Ad(r));return await t.done,n}catch(e){if(e instanceof Sn)dt.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Rl(r,e){try{const n=(await wd()).transaction(ds,"readwrite");await n.objectStore(ds).put(e,Ad(r)),await n.done}catch(t){if(t instanceof Sn)dt.warn(t.message);else{const n=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}function Ad(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=1024,C_=30;class D_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new N_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>C_){const a=k_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sl(),{heartbeatsToSend:n,unsentEntries:s}=x_(this._heartbeatsCache.heartbeats),i=Ci(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return dt.warn(t),""}}}function Sl(){return new Date().toISOString().substring(0,10)}function x_(r,e=V_){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Pl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Pl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class N_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hd()?yp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await P_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pl(r){return Ci(JSON.stringify({version:2,heartbeats:r})).length}function k_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(r){tr(new _n("platform-logger",e=>new zp(e),"PRIVATE")),tr(new _n("heartbeat",e=>new D_(e),"PRIVATE")),tt(Ni,ya,r),tt(Ni,ya,"esm2017"),tt("fire-js","")}O_("");const M_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Sn,SDK_VERSION:Za,_DEFAULT_ENTRY_NAME:Mt,_addComponent:hs,_addOrOverwriteComponent:pd,_apps:Ft,_clearComponents:E_,_components:er,_getProvider:Xa,_isFirebaseApp:_d,_isFirebaseServerApp:yd,_registerComponent:tr,_removeServiceInstance:T_,_serverApps:Zn,deleteApp:eu,getApp:Td,getApps:b_,initializeApp:no,initializeServerApp:A_,onLog:Ed,registerVersion:tt,setLogLevel:vd},Symbol.toStringTag,{value:"Module"}));var F_="firebase",L_="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(F_,L_,"app");var Vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nt,bd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,p){function I(){}I.prototype=p.prototype,T.D=p.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,v,b){for(var y=Array(arguments.length-2),at=2;at<arguments.length;at++)y[at-2]=arguments[at];return p.prototype[v].apply(E,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,I){I||(I=0);var E=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)E[v]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(v=0;16>v;++v)E[v]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=T.g[0],I=T.g[1],v=T.g[2];var b=T.g[3],y=p+(b^I&(v^b))+E[0]+3614090360&4294967295;p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+E[1]+3905402710&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+E[2]+606105819&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+E[3]+3250441966&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(b^I&(v^b))+E[4]+4118548399&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+E[5]+1200080426&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+E[6]+2821735955&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+E[7]+4249261313&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(b^I&(v^b))+E[8]+1770035416&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+E[9]+2336552879&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+E[10]+4294925233&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+E[11]+2304563134&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(b^I&(v^b))+E[12]+1804603682&4294967295,p=I+(y<<7&4294967295|y>>>25),y=b+(v^p&(I^v))+E[13]+4254626195&4294967295,b=p+(y<<12&4294967295|y>>>20),y=v+(I^b&(p^I))+E[14]+2792965006&4294967295,v=b+(y<<17&4294967295|y>>>15),y=I+(p^v&(b^p))+E[15]+1236535329&4294967295,I=v+(y<<22&4294967295|y>>>10),y=p+(v^b&(I^v))+E[1]+4129170786&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+E[6]+3225465664&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+E[11]+643717713&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+E[0]+3921069994&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^b&(I^v))+E[5]+3593408605&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+E[10]+38016083&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+E[15]+3634488961&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+E[4]+3889429448&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^b&(I^v))+E[9]+568446438&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+E[14]+3275163606&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+E[3]+4107603335&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+E[8]+1163531501&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(v^b&(I^v))+E[13]+2850285829&4294967295,p=I+(y<<5&4294967295|y>>>27),y=b+(I^v&(p^I))+E[2]+4243563512&4294967295,b=p+(y<<9&4294967295|y>>>23),y=v+(p^I&(b^p))+E[7]+1735328473&4294967295,v=b+(y<<14&4294967295|y>>>18),y=I+(b^p&(v^b))+E[12]+2368359562&4294967295,I=v+(y<<20&4294967295|y>>>12),y=p+(I^v^b)+E[5]+4294588738&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+E[8]+2272392833&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+E[11]+1839030562&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+E[14]+4259657740&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^b)+E[1]+2763975236&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+E[4]+1272893353&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+E[7]+4139469664&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+E[10]+3200236656&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^b)+E[13]+681279174&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+E[0]+3936430074&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+E[3]+3572445317&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+E[6]+76029189&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(I^v^b)+E[9]+3654602809&4294967295,p=I+(y<<4&4294967295|y>>>28),y=b+(p^I^v)+E[12]+3873151461&4294967295,b=p+(y<<11&4294967295|y>>>21),y=v+(b^p^I)+E[15]+530742520&4294967295,v=b+(y<<16&4294967295|y>>>16),y=I+(v^b^p)+E[2]+3299628645&4294967295,I=v+(y<<23&4294967295|y>>>9),y=p+(v^(I|~b))+E[0]+4096336452&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+E[7]+1126891415&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+E[14]+2878612391&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+E[5]+4237533241&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~b))+E[12]+1700485571&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+E[3]+2399980690&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+E[10]+4293915773&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+E[1]+2240044497&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~b))+E[8]+1873313359&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+E[15]+4264355552&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+E[6]+2734768916&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+E[13]+1309151649&4294967295,I=v+(y<<21&4294967295|y>>>11),y=p+(v^(I|~b))+E[4]+4149444226&4294967295,p=I+(y<<6&4294967295|y>>>26),y=b+(I^(p|~v))+E[11]+3174756917&4294967295,b=p+(y<<10&4294967295|y>>>22),y=v+(p^(b|~I))+E[2]+718787259&4294967295,v=b+(y<<15&4294967295|y>>>17),y=I+(b^(v|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+b&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var I=p-this.blockSize,E=this.B,v=this.h,b=0;b<p;){if(v==0)for(;b<=I;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<p;)if(E[v++]=T.charCodeAt(b++),v==this.blockSize){s(this,E),v=0;break}}else for(;b<p;)if(E[v++]=T[b++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var I=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=I&255,I/=256;for(this.u(T),T=Array(16),p=I=0;4>p;++p)for(var E=0;32>E;E+=8)T[I++]=this.g[p]>>>E&255;return T};function i(T,p){var I=u;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=p(T)}function a(T,p){this.h=p;for(var I=[],E=!0,v=T.length-1;0<=v;v--){var b=T[v]|0;E&&b==p||(I[v]=b,E=!1)}this.g=I}var u={};function c(T){return-128<=T&&128>T?i(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return x(h(-T));for(var p=[],I=1,E=0;T>=I;E++)p[E]=T/I|0,I*=4294967296;return new a(p,0)}function f(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return x(f(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(p,8)),E=g,v=0;v<T.length;v+=8){var b=Math.min(8,T.length-v),y=parseInt(T.substring(v,v+b),p);8>b?(b=h(Math.pow(p,b)),E=E.j(b).add(h(y))):(E=E.j(I),E=E.add(h(y)))}return E}var g=c(0),_=c(1),R=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-x(this).m();for(var T=0,p=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(N(this))return"-"+x(this).toString(T);for(var p=h(Math.pow(T,6)),I=this,E="";;){var v=X(I,p).g;I=q(I,v.j(p));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=v,V(I))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=q(this,T),N(T)?-1:V(T)?0:1};function x(T){for(var p=T.g.length,I=[],E=0;E<p;E++)I[E]=~T.g[E];return new a(I,~T.h).add(_)}r.abs=function(){return N(this)?x(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0,v=0;v<=p;v++){var b=E+(this.i(v)&65535)+(T.i(v)&65535),y=(b>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=y>>>16,b&=65535,y&=65535,I[v]=y<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function q(T,p){return T.add(x(p))}r.j=function(T){if(V(this)||V(T))return g;if(N(this))return N(T)?x(this).j(x(T)):x(x(this).j(T));if(N(T))return x(this.j(x(T)));if(0>this.l(R)&&0>T.l(R))return h(this.m()*T.m());for(var p=this.g.length+T.g.length,I=[],E=0;E<2*p;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var b=this.i(E)>>>16,y=this.i(E)&65535,at=T.i(v)>>>16,Cr=T.i(v)&65535;I[2*E+2*v]+=y*Cr,j(I,2*E+2*v),I[2*E+2*v+1]+=b*Cr,j(I,2*E+2*v+1),I[2*E+2*v+1]+=y*at,j(I,2*E+2*v+1),I[2*E+2*v+2]+=b*at,j(I,2*E+2*v+2)}for(E=0;E<p;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=p;E<2*p;E++)I[E]=0;return new a(I,0)};function j(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function U(T,p){this.g=T,this.h=p}function X(T,p){if(V(p))throw Error("division by zero");if(V(T))return new U(g,g);if(N(T))return p=X(x(T),p),new U(x(p.g),x(p.h));if(N(p))return p=X(T,x(p)),new U(x(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=p;0>=E.l(T);)I=ne(I),E=ne(E);var v=H(I,1),b=H(E,1);for(E=H(E,2),I=H(I,2);!V(E);){var y=b.add(E);0>=y.l(T)&&(v=v.add(I),b=y),E=H(E,1),I=H(I,1)}return p=q(T,v.j(p)),new U(v,p)}for(v=g;0<=T.l(p);){for(I=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=h(I),y=b.j(p);N(y)||0<y.l(T);)I-=E,b=h(I),y=b.j(p);V(b)&&(b=_),v=v.add(b),T=q(T,y)}return new U(v,T)}r.A=function(T){return X(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)&T.i(E);return new a(I,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)|T.i(E);return new a(I,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)^T.i(E);return new a(I,this.h^T.h)};function ne(T){for(var p=T.g.length+1,I=[],E=0;E<p;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(I,T.h)}function H(T,p){var I=p>>5;p%=32;for(var E=T.g.length-I,v=[],b=0;b<E;b++)v[b]=0<p?T.i(b+I)>>>p|T.i(b+I+1)<<32-p:T.i(b+I);return new a(v,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,bd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Nt=a}).apply(typeof Vl<"u"?Vl:typeof self<"u"?self:typeof window<"u"?window:{});var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rd,es,Sd,Ii,Ia,Pd,Vd,Cd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(o,l){if(l)e:{var d=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function R(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,P){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return l.prototype[A].apply(m,k)}}function N(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=o.length||0,P=m.length||0;o.length=A+P;for(let k=0;k<P;k++)o[A+k]=m[k]}else o.push(m)}}class q{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var ne=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function H(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function T(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function v(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){u.setTimeout(()=>{throw o},0)}function y(){var o=xo;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class at{constructor(){this.h=this.g=null}add(l,d){const m=Cr.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Cr=new q(()=>new _g,o=>o.reset());class _g{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Dr,xr=!1,xo=new at,dc=()=>{const o=u.Promise.resolve(void 0);Dr=()=>{o.then(yg)}};var yg=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var l=Cr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}xr=!1};function Tt(){this.s=this.s,this.C=this.C}Tt.prototype.s=!1,Tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Ig=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function Nr(o,l){if(Re.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ne){e:{try{X(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Tg[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Nr.aa.h.call(this)}}V(Nr,Re);var Tg={2:"touch",3:"pen",4:"mouse"};Nr.prototype.h=function(){Nr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Gs="closure_listenable_"+(1e6*Math.random()|0),Eg=0;function vg(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++Eg,this.da=this.fa=!1}function Ks(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qs(o){this.src=o,this.g={},this.h=0}Qs.prototype.add=function(o,l,d,m,A){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=ko(o,l,m,A);return-1<k?(l=o[k],d||(l.fa=!1)):(l=new vg(l,this.src,P,!!m,A),l.fa=d,o.push(l)),l};function No(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(Ks(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ko(o,l,d,m){for(var A=0;A<o.length;++A){var P=o[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return A}return-1}var Oo="closure_lm_"+(1e6*Math.random()|0),Mo={};function fc(o,l,d,m,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)fc(o,l[P],d,m,A);return null}return d=pc(d),o&&o[Gs]?o.K(l,d,h(m)?!!m.capture:!1,A):wg(o,l,d,!1,m,A)}function wg(o,l,d,m,A,P){if(!l)throw Error("Invalid event type");var k=h(A)?!!A.capture:!!A,te=Lo(o);if(te||(o[Oo]=te=new Qs(o)),d=te.add(l,d,m,k,P),d.proxy)return d;if(m=Ag(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Ig||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(gc(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ag(){function o(d){return l.call(o.src,o.listener,d)}const l=bg;return o}function mc(o,l,d,m,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)mc(o,l[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=pc(d),o&&o[Gs]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=ko(P,d,m,A),-1<d&&(Ks(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Lo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ko(l,d,m,A)),(d=-1<o?l[o]:null)&&Fo(d))}function Fo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Gs])No(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(gc(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Lo(l))?(No(d,o),d.h==0&&(d.src=null,l[Oo]=null)):Ks(o)}}}function gc(o){return o in Mo?Mo[o]:Mo[o]="on"+o}function bg(o,l){if(o.da)o=!0;else{l=new Nr(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Fo(o),o=d.call(m,l)}return o}function Lo(o){return o=o[Oo],o instanceof Qs?o:null}var Bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function pc(o){return typeof o=="function"?o:(o[Bo]||(o[Bo]=function(l){return o.handleEvent(l)}),o[Bo])}function Se(){Tt.call(this),this.i=new Qs(this),this.M=this,this.F=null}V(Se,Tt),Se.prototype[Gs]=!0,Se.prototype.removeEventListener=function(o,l,d,m){mc(this,o,l,d,m)};function Ne(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new Re(l,o);else if(l instanceof Re)l.target=l.target||o;else{var A=l;l=new Re(m,o),E(l,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var k=l.g=d[P];A=Ws(k,m,!0,l)&&A}if(k=l.g=o,A=Ws(k,m,!0,l)&&A,A=Ws(k,m,!1,l)&&A,d)for(P=0;P<d.length;P++)k=l.g=d[P],A=Ws(k,m,!1,l)&&A}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)Ks(d[m]);delete o.g[l],o.h--}}this.F=null},Se.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Se.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function Ws(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var k=l[P];if(k&&!k.da&&k.capture==d){var te=k.listener,ve=k.ha||k.src;k.fa&&No(o.i,k),A=te.call(ve,m)!==!1&&A}}return A&&!m.defaultPrevented}function _c(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function yc(o){o.g=_c(()=>{o.g=null,o.i&&(o.i=!1,yc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Rg extends Tt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:yc(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(o){Tt.call(this),this.h=o,this.g={}}V(kr,Tt);var Ic=[];function Tc(o){H(o.g,function(l,d){this.g.hasOwnProperty(d)&&Fo(l)},o),o.g={}}kr.prototype.N=function(){kr.aa.N.call(this),Tc(this)},kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Uo=u.JSON.stringify,Sg=u.JSON.parse,Pg=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function qo(){}qo.prototype.h=null;function Ec(o){return o.h||(o.h=o.i())}function vc(){}var Or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $o(){Re.call(this,"d")}V($o,Re);function jo(){Re.call(this,"c")}V(jo,Re);var Zt={},wc=null;function Hs(){return wc=wc||new Se}Zt.La="serverreachability";function Ac(o){Re.call(this,Zt.La,o)}V(Ac,Re);function Mr(o){const l=Hs();Ne(l,new Ac(l))}Zt.STAT_EVENT="statevent";function bc(o,l){Re.call(this,Zt.STAT_EVENT,o),this.stat=l}V(bc,Re);function ke(o){const l=Hs();Ne(l,new bc(l,o))}Zt.Ma="timingevent";function Rc(o,l){Re.call(this,Zt.Ma,o),this.size=l}V(Rc,Re);function Fr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Lr(){this.g=!0}Lr.prototype.xa=function(){this.g=!1};function Vg(o,l,d,m,A,P){o.info(function(){if(o.g)if(P)for(var k="",te=P.split("&"),ve=0;ve<te.length;ve++){var J=te[ve].split("=");if(1<J.length){var Pe=J[0];J=J[1];var Ve=Pe.split("_");k=2<=Ve.length&&Ve[1]=="type"?k+(Pe+"="+J+"&"):k+(Pe+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+k})}function Cg(o,l,d,m,A,P,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+k})}function Dn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+xg(o,d)+(m?" "+m:"")})}function Dg(o,l){o.info(function(){return"TIMEOUT: "+l})}Lr.prototype.info=function(){};function xg(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Uo(d)}catch{return l}}var Ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zo;function Js(){}V(Js,qo),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},zo=new Js;function Et(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pc}function Pc(){this.i=null,this.g="",this.h=!1}var Vc={},Go={};function Ko(o,l,d){o.L=1,o.v=ti(ut(l)),o.m=d,o.P=!0,Cc(o,null)}function Cc(o,l){o.F=Date.now(),Xs(o),o.A=ut(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),zc(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Pc,o.g=ul(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Rg(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ic[0]=A.toString()),A=Ic);for(var P=0;P<A.length;P++){var k=fc(d,A[P],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Mr(),Vg(o.i,o.u,o.A,o.l,o.R,o.m)}Et.prototype.ca=function(o){o=o.target;const l=this.M;l&&ct(o)==3?l.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const Ve=ct(this.g);var l=this.g.Ba();const kn=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||Jc(this.g)))){this.J||Ve!=4||l==7||(l==8||0>=kn?Mr(3):Mr(2)),Qo(this);var d=this.g.Z();this.X=d;t:if(Dc(this)){var m=Jc(this.g);o="";var A=m.length,P=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),Br(this);var k="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=d==200,Cg(this.i,this.u,this.A,this.l,this.R,Ve,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,ve=this.g;if((te=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(te)){var J=te;break t}}J=null}if(d=J)Dn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wo(this,d);else{this.o=!1,this.s=3,ke(12),en(this),Br(this);break e}}if(this.P){d=!0;let Qe;for(;!this.J&&this.C<k.length;)if(Qe=Ng(this,k),Qe==Go){Ve==4&&(this.s=4,ke(14),d=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==Vc){this.s=4,ke(15),Dn(this.i,this.l,k,"[Invalid Chunk]"),d=!1;break}else Dn(this.i,this.l,Qe,null),Wo(this,Qe);if(Dc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||k.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)Dn(this.i,this.l,k,"[Invalid Chunked Response]"),en(this),Br(this);else if(0<k.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ea(Pe),Pe.M=!0,ke(11))}}else Dn(this.i,this.l,k,null),Wo(this,k);Ve==4&&en(this),this.o&&!this.J&&(Ve==4?sl(this.j,this):(this.o=!1,Xs(this)))}else Yg(this.g),d==400&&0<k.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),en(this),Br(this)}}}catch{}finally{}};function Dc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ng(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?Go:(d=Number(l.substring(d,m)),isNaN(d)?Vc:(m+=1,m+d>l.length?Go:(l=l.slice(m,m+d),o.C=m+d,l)))}Et.prototype.cancel=function(){this.J=!0,en(this)};function Xs(o){o.S=Date.now()+o.I,xc(o,o.I)}function xc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Fr(_(o.ba,o),l)}function Qo(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Et.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Dg(this.i,this.A),this.L!=2&&(Mr(),ke(17)),en(this),this.s=2,Br(this)):xc(this,this.S-o)};function Br(o){o.j.G==0||o.J||sl(o.j,o)}function en(o){Qo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Tc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Wo(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Ho(d.h,o))){if(!o.K&&Ho(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ai(d),ii(d);else break e;Zo(d),ke(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Fr(_(d.Za,d),6e3));if(1>=Oc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else nn(d,11)}else if((o.K||d.g==o)&&ai(d),!j(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let J=A[l];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const Pe=J[3];Pe!=null&&(d.la=Pe,d.j.info("VER="+d.la));const Ve=J[4];Ve!=null&&(d.Aa=Ve,d.j.info("SVER="+d.Aa));const kn=J[5];kn!=null&&typeof kn=="number"&&0<kn&&(m=1.5*kn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Qe=o.g;if(Qe){const ci=Qe.g?Qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ci){var P=m.h;P.g||ci.indexOf("spdy")==-1&&ci.indexOf("quic")==-1&&ci.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Yo(P,P.h),P.h=null))}if(m.D){const ta=Qe.g?Qe.g.getResponseHeader("X-HTTP-Session-Id"):null;ta&&(m.ya=ta,se(m.I,m.D,ta))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var k=o;if(m.qa=al(m,m.J?m.ia:null,m.W),k.K){Mc(m.h,k);var te=k,ve=m.L;ve&&(te.I=ve),te.B&&(Qo(te),Xs(te)),m.g=k}else nl(m);0<d.i.length&&oi(d)}else J[0]!="stop"&&J[0]!="close"||nn(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?nn(d,7):Xo(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}Mr(4)}catch{}}var kg=class{constructor(o,l){this.g=o,this.map=l}};function Nc(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Oc(o){return o.h?1:o.g?o.g.size:0}function Ho(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Yo(o,l){o.g?o.g.add(l):o.h=l}function Mc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Nc.prototype.cancel=function(){if(this.i=Fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return N(o.i)}function Og(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function Mg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function Lc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Mg(o),m=Og(o),A=m.length,P=0;P<A;P++)l.call(void 0,m[P],d&&d[P],o)}var Bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fg(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var P=o[d].substring(0,m);A=o[d].substring(m+1)}else P=o[d];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function tn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof tn){this.h=o.h,Zs(this,o.j),this.o=o.o,this.g=o.g,ei(this,o.s),this.l=o.l;var l=o.i,d=new $r;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Uc(this,d),this.m=o.m}else o&&(l=String(o).match(Bc))?(this.h=!1,Zs(this,l[1]||"",!0),this.o=Ur(l[2]||""),this.g=Ur(l[3]||"",!0),ei(this,l[4]),this.l=Ur(l[5]||"",!0),Uc(this,l[6]||"",!0),this.m=Ur(l[7]||"")):(this.h=!1,this.i=new $r(null,this.h))}tn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(qr(l,qc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(qr(l,qc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(qr(d,d.charAt(0)=="/"?Ug:Bg,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",qr(d,$g)),o.join("")};function ut(o){return new tn(o)}function Zs(o,l,d){o.j=d?Ur(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ei(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Uc(o,l,d){l instanceof $r?(o.i=l,jg(o.i,o.h)):(d||(l=qr(l,qg)),o.i=new $r(l,o.h))}function se(o,l,d){o.i.set(l,d)}function ti(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ur(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function qr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Lg),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Lg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var qc=/[#\/\?@]/g,Bg=/[#\?:]/g,Ug=/[#\?]/g,qg=/[#\?@]/g,$g=/#/g;function $r(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function vt(o){o.g||(o.g=new Map,o.h=0,o.i&&Fg(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=$r.prototype,r.add=function(o,l){vt(this),this.i=null,o=xn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function $c(o,l){vt(o),l=xn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function jc(o,l){return vt(o),l=xn(o,l),o.g.has(l)}r.forEach=function(o,l){vt(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){vt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let P=0;P<A.length;P++)d.push(l[m])}return d},r.V=function(o){vt(this);let l=[];if(typeof o=="string")jc(this,o)&&(l=l.concat(this.g.get(xn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return vt(this),this.i=null,o=xn(this,o),jc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function zc(o,l,d){$c(o,l),0<d.length&&(o.i=null,o.g.set(xn(o,l),N(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var A=P;k[m]!==""&&(A+="="+encodeURIComponent(String(k[m]))),o.push(A)}}return this.i=o.join("&")};function xn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function jg(o,l){l&&!o.j&&(vt(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&($c(this,m),zc(this,A,d))},o)),o.j=l}function zg(o,l){const d=new Lr;if(u.Image){const m=new Image;m.onload=R(wt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=R(wt,d,"TestLoadImage: error",!1,l,m),m.onabort=R(wt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=R(wt,d,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Gg(o,l){const d=new Lr,m=new AbortController,A=setTimeout(()=>{m.abort(),wt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?wt(d,"TestPingServer: ok",!0,l):wt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),wt(d,"TestPingServer: error",!1,l)})}function wt(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Kg(){this.g=new Pg}function Qg(o,l,d){const m=d||"";try{Lc(o,function(A,P){let k=A;h(A)&&(k=Uo(A)),l.push(m+P+"="+encodeURIComponent(k))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function ni(o){this.l=o.Ub||null,this.j=o.eb||!1}V(ni,qo),ni.prototype.g=function(){return new ri(this.l,this.j)},ni.prototype.i=function(o){return function(){return o}}({});function ri(o,l){Se.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ri,Se),r=ri.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,zr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?jr(this):zr(this),this.readyState==3&&Gc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,jr(this))},r.Qa=function(o){this.g&&(this.response=o,jr(this))},r.ga=function(){this.g&&jr(this)};function jr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,zr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Kc(o){let l="";return H(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function Jo(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Kc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):se(o,l,d))}function he(o){Se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(he,Se);var Wg=/^https?$/i,Hg=["POST","PUT"];r=he.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zo.g(),this.v=this.o?Ec(this.o):Ec(zo),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Qc(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hg,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of d)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Qc(this,P)}};function Qc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Wc(o),si(o)}function Wc(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),si(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),si(this,!0)),he.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Hc(this):this.bb())},r.bb=function(){Hc(this)};function Hc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ct(o)!=4||o.Z()!=2)){if(o.u&&ct(o)==4)_c(o.Ea,0,o);else if(Ne(o,"readystatechange"),ct(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=k===0){var A=String(o.D).match(Bc)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Wg.test(A?A.toLowerCase():"")}d=m}if(d)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var P=2<ct(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Wc(o)}}finally{si(o)}}}}function si(o,l){if(o.g){Yc(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ne(o,"ready");try{d.onreadystatechange=m}catch{}}}function Yc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ct(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Sg(l)}};function Jc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yg(o){const l={};o=(o.g&&2<=ct(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(j(o[m]))continue;var d=v(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}T(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Xc(o){this.Aa=0,this.i=[],this.j=new Lr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gr("baseRetryDelayMs",5e3,o),this.cb=Gr("retryDelaySeedMs",1e4,o),this.Wa=Gr("forwardChannelMaxRetries",2,o),this.wa=Gr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Nc(o&&o.concurrentRequestLimit),this.Da=new Kg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Xc.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,m){ke(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=al(this,null,this.W),oi(this)};function Xo(o){if(Zc(o),o.G==3){var l=o.U++,d=ut(o.I);if(se(d,"SID",o.K),se(d,"RID",l),se(d,"TYPE","terminate"),Kr(o,d),l=new Et(o,o.j,l),l.L=2,l.v=ti(ut(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=ul(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Xs(l)}ol(o)}function ii(o){o.g&&(ea(o),o.g.cancel(),o.g=null)}function Zc(o){ii(o),o.u&&(u.clearTimeout(o.u),o.u=null),ai(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function oi(o){if(!kc(o.h)&&!o.s){o.s=!0;var l=o.Ga;Dr||dc(),xr||(Dr(),xr=!0),xo.add(l,o),o.B=0}}function Jg(o,l){return Oc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Fr(_(o.Ga,o,l),il(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new Et(this,this.j,o);let P=this.o;if(this.S&&(P?(P=p(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=tl(this,A,l),d=ut(this.I),se(d,"RID",o),se(d,"CVER",22),this.D&&se(d,"X-HTTP-Session-Id",this.D),Kr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Kc(P)))+"&"+l:this.m&&Jo(d,this.m,P)),Yo(this.h,A),this.Ua&&se(d,"TYPE","init"),this.P?(se(d,"$req",l),se(d,"SID","null"),A.T=!0,Ko(A,d,null)):Ko(A,d,l),this.G=2}}else this.G==3&&(o?el(this,o):this.i.length==0||kc(this.h)||el(this))};function el(o,l){var d;l?d=l.l:d=o.U++;const m=ut(o.I);se(m,"SID",o.K),se(m,"RID",d),se(m,"AID",o.T),Kr(o,m),o.m&&o.o&&Jo(m,o.m,o.o),d=new Et(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=tl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Yo(o.h,d),Ko(d,m,l)}function Kr(o,l){o.H&&H(o.H,function(d,m){se(l,m,d)}),o.l&&Lc({},function(d,m){se(l,m,d)})}function tl(o,l,d){d=Math.min(o.i.length,d);var m=o.l?_(o.l.Na,o.l,o):null;e:{var A=o.i;let P=-1;for(;;){const k=["count="+d];P==-1?0<d?(P=A[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let te=!0;for(let ve=0;ve<d;ve++){let J=A[ve].g;const Pe=A[ve].map;if(J-=P,0>J)P=Math.max(0,A[ve].g-100),te=!1;else try{Qg(Pe,k,"req"+J+"_")}catch{m&&m(Pe)}}if(te){m=k.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function nl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Dr||dc(),xr||(Dr(),xr=!0),xo.add(l,o),o.v=0}}function Zo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Fr(_(o.Fa,o),il(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Fr(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),ii(this),rl(this))};function ea(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function rl(o){o.g=new Et(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ut(o.qa);se(l,"RID","rpc"),se(l,"SID",o.K),se(l,"AID",o.T),se(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(l,"TO",o.ja),se(l,"TYPE","xmlhttp"),Kr(o,l),o.m&&o.o&&Jo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ti(ut(l)),d.m=null,d.P=!0,Cc(d,o)}r.Za=function(){this.C!=null&&(this.C=null,ii(this),Zo(this),ke(19))};function ai(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function sl(o,l){var d=null;if(o.g==l){ai(o),ea(o),o.g=null;var m=2}else if(Ho(o.h,l))d=l.D,Mc(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=Hs(),Ne(m,new Rc(m,d)),oi(o)}else nl(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&Jg(o,l)||m==2&&Zo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:nn(o,5);break;case 4:nn(o,10);break;case 3:nn(o,6);break;default:nn(o,2)}}}function il(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function nn(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),m=o.Xa;const A=!m;m=new tn(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Zs(m,"https"),ti(m),A?zg(m.toString(),d):Gg(m.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),ol(o),Zc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function ol(o){if(o.G=0,o.ka=[],o.l){const l=Fc(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function al(o,l,d){var m=d instanceof tn?ut(d):new tn(d);if(m.g!="")l&&(m.g=l+"."+m.g),ei(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new tn(null);m&&Zs(P,m),l&&(P.g=l),A&&ei(P,A),d&&(P.l=d),m=P}return d=o.D,l=o.ya,d&&l&&se(m,d,l),se(m,"VER",o.la),Kr(o,m),m}function ul(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new he(new ni({eb:d})):new he(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function cl(){}r=cl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ui(){}ui.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){Se.call(this),this.g=new Xc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!j(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Nn(this)}V($e,Se),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Xo(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Uo(o),o=d);l.i.push(new kg(l.Ya++,o)),l.G==3&&oi(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,Xo(this.g),delete this.g,$e.aa.N.call(this)};function ll(o){$o.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}V(ll,$o);function hl(){jo.call(this),this.status=1}V(hl,jo);function Nn(o){this.g=o}V(Nn,cl),Nn.prototype.ua=function(){Ne(this.g,"a")},Nn.prototype.ta=function(o){Ne(this.g,new ll(o))},Nn.prototype.sa=function(o){Ne(this.g,new hl)},Nn.prototype.ra=function(){Ne(this.g,"b")},ui.prototype.createWebChannel=ui.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,Cd=function(){return new ui},Vd=function(){return Hs()},Pd=Zt,Ia={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,Ii=Ys,Sc.COMPLETE="complete",Sd=Sc,vc.EventType=Or,Or.OPEN="a",Or.CLOSE="b",Or.ERROR="c",Or.MESSAGE="d",Se.prototype.listen=Se.prototype.K,es=vc,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,Rd=he}).apply(typeof di<"u"?di:typeof self<"u"?self:typeof window<"u"?window:{});const Cl="@firebase/firestore",Dl="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Ya("@firebase/firestore");function $n(){return Lt.logLevel}function B_(r){Lt.setLogLevel(r)}function D(r,...e){if(Lt.logLevel<=Q.DEBUG){const t=e.map(tu);Lt.debug(`Firestore (${Er}): ${r}`,...t)}}function me(r,...e){if(Lt.logLevel<=Q.ERROR){const t=e.map(tu);Lt.error(`Firestore (${Er}): ${r}`,...t)}}function st(r,...e){if(Lt.logLevel<=Q.WARN){const t=e.map(tu);Lt.warn(`Firestore (${Er}): ${r}`,...t)}}function tu(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const e=`FIRESTORE (${Er}) INTERNAL ASSERTION FAILED: `+r;throw me(e),new Error(e)}function L(r,e){r||F()}function U_(r,e){r||F()}function O(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class $_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class j_{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let i=new Ee;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ee,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ee)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Dd(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string"),new Te(e)}}class z_{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class G_{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new z_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K_{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,yd(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){L(this.o===void 0);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new xl(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(L(typeof t.token=="string"),this.R=t.token,new xl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Q_(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function $(r,e){return r<e?-1:r>e?1:0}function nr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function Nd(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=-62135596800,kl=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*kl);return new ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Nl)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kl}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Nl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ce(0,0))}static max(){return new B(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="__name__";class Je{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(),n===void 0?n=e.length-t:n>e.length-t&&F(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Je?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Je.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const n=Je.isNumericId(e),s=Je.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Je.extractNumericId(e).compare(Je.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nt.fromString(e.substring(4,e.length-2))}}class G extends Je{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new G(t)}static emptyPath(){return new G([])}}const W_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends Je{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return W_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ol}static keyField(){return new ae([Ol])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(G.fromString(e))}static fromName(e){return new M(G.fromString(e).popFirst(5))}static empty(){return new M(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&G.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new G(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=-1;class ki{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Ta(r){return r.fields.find(e=>e.kind===2)}function on(r){return r.fields.filter(e=>e.kind!==2)}ki.UNKNOWN_ID=-1;class Ti{constructor(e,t){this.fieldPath=e,this.kind=t}}class fs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new fs(0,ze.min())}}function kd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new ze(s,M.empty(),e)}function Od(r){return new ze(r.readTime,r.key,rr)}class ze{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ze(B.min(),M.empty(),rr)}static max(){return new ze(B.max(),M.empty(),rr)}}function nu(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(r.documentKey,e.documentKey),t!==0?t:$(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Md)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,n)=>{t(e)})}static reject(e){return new w((t,n)=>{n(e)})}static waitFor(e){return new w((t,n)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},c=>n(c))}),a=!0,i===s&&t()})}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next(s=>s?w.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new w((n,s)=>{const i=e.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(e,t){return new w((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="SimpleDb";class ro{static open(e,t,n,s){try{return new ro(t,e.transaction(s,n))}catch(i){throw new ss(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new Ee,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new ss(e,t.error)):this.m.resolve()},this.transaction.onerror=n=>{const s=ru(n.target.error);this.m.reject(new ss(e,s))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(D(je,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Y_(t)}}class nt{static delete(e){return D(je,"Removing database:",e),un(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!hd())return!1;if(nt.v())return!0;const e=xi(),t=nt.C(e),n=0<t&&t<10,s=Ld(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.O=n,nt.C(xi())===12.2&&me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(D(je,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;t(a)},s.onblocked=()=>{n(new ss(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new C(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new ss(e,a))},s.onupgradeneeded=i=>{D(je,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.O.B(a,s.transaction,i.oldVersion,this.version).next(()=>{D(je,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.N(e);const u=ro.open(this.db,e,i?"readonly":"readwrite",n),c=s(u).next(h=>(u.S(),h)).catch(h=>(u.abort(h),w.reject(h))).toPromise();return c.catch(()=>{}),await u.p,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(D(je,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ld(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class H_{constructor(e){this.q=e,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.K=e}delete(){return un(this.q.delete())}}class ss extends C{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Wt(r){return r.name==="IndexedDbTransactionError"}class Y_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(D(je,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(D(je,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),un(n)}add(e){return D(je,"ADD",this.store.name,e,e),un(this.store.add(e))}get(e){return un(this.store.get(e)).next(t=>(t===void 0&&(t=null),D(je,"GET",this.store.name,e,t),t))}delete(e){return D(je,"DELETE",this.store.name,e),un(this.store.delete(e))}count(){return D(je,"COUNT",this.store.name),un(this.store.count())}G(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}})}{const i=this.cursor(n),a=[];return this.j(i,(u,c)=>{a.push(c)}).next(()=>a)}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}J(e,t){D(je,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const s=this.cursor(n);return this.j(s,(i,a,u)=>u.delete())}Z(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.j(s,t)}X(e){const t=this.cursor({});return new w((n,s)=>{t.onerror=i=>{const a=ru(i.target.error);s(a)},t.onsuccess=i=>{const a=i.target.result;a?e(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}j(e,t){const n=[];return new w((s,i)=>{e.onerror=a=>{i(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new H_(u),h=t(u.primaryKey,u.value,c);if(h instanceof w){const f=h.catch(g=>(c.done(),w.reject(g)));n.push(f)}c.isDone?s():c.U===null?u.continue():u.continue(c.U)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function un(r){return new w((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=ru(n.target.error);t(s)}})}let Ml=!1;function ru(r){const e=nt.C(xi());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ml||(Ml=!0,setTimeout(()=>{throw n},0)),n}}return r}const is="IndexBackfiller";class J_{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){D(is,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();D(is,`Documents written: ${t}`)}catch(t){Wt(t)?D(is,"Ignoring IndexedDB error during index backfill: ",t):await Qt(t)}await this.te(6e4)})}}class X_{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const n=new Set;let s=t,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return D(is,`Processing collection: ${a}`),this.ie(e,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>t-s)}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.se(s,i)).next(u=>(D(is,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>a.size)}))}se(e,t){let n=e;return t.changes.forEach((s,i)=>{const a=Od(i);nu(a,n)>0&&(n=a)}),new ze(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.oe(n),this._e=n=>t.writeSequenceNumber(n))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Be.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=-1;function Ds(r){return r==null}function ms(r){return r===0&&1/r==-1/0}function Bd(r){return typeof r=="number"&&Number.isInteger(r)&&!ms(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="";function xe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Fl(e)),e=Z_(r.get(t),e);return Fl(e)}function Z_(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Oi:t+="";break;default:t+=i}}return t}function Fl(r){return r+Oi+""}function Ze(r){const e=r.length;if(L(e>=2),e===2)return L(r.charAt(0)===Oi&&r.charAt(1)===""),G.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const a=r.indexOf(Oi,i);switch((a<0||a>t)&&F(),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:F()}i=a+2}return new G(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="remoteDocuments",xs="owner",Mn="owner",gs="mutationQueues",ey="userId",We="mutations",Ll="batchId",fn="userMutationsIndex",Bl=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(r,e){return[r,xe(e)]}function Ud(r,e,t){return[r,xe(e),t]}const ty={},sr="documentMutations",Mi="remoteDocumentsV14",ny=["prefixPath","collectionGroup","readTime","documentId"],vi="documentKeyIndex",ry=["prefixPath","collectionGroup","documentId"],qd="collectionGroupIndex",sy=["collectionGroup","readTime","prefixPath","documentId"],ps="remoteDocumentGlobal",Ea="remoteDocumentGlobalKey",ir="targets",$d="queryTargetsIndex",iy=["canonicalId","targetId"],or="targetDocuments",oy=["targetId","path"],su="documentTargetsIndex",ay=["path","targetId"],Fi="targetGlobalKey",pn="targetGlobal",_s="collectionParents",uy=["collectionId","parent"],ar="clientMetadata",cy="clientId",so="bundles",ly="bundleId",io="namedQueries",hy="name",iu="indexConfiguration",dy="indexId",va="collectionGroupIndex",fy="collectionGroup",Li="indexState",my=["indexId","uid"],jd="sequenceNumberIndex",gy=["uid","sequenceNumber"],Bi="indexEntries",py=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],zd="documentKeyIndex",_y=["indexId","uid","orderedDocumentKey"],oo="documentOverlays",yy=["userId","collectionPath","documentId"],wa="collectionPathOverlayIndex",Iy=["userId","collectionPath","largestBatchId"],Gd="collectionGroupOverlayIndex",Ty=["userId","collectionGroup","largestBatchId"],ou="globals",Ey="name",Kd=[gs,We,sr,an,ir,xs,pn,or,ar,ps,_s,so,io],vy=[...Kd,oo],Qd=[gs,We,sr,Mi,ir,xs,pn,or,ar,ps,_s,so,io,oo],Wd=Qd,au=[...Wd,iu,Li,Bi],wy=au,Ay=[...au,ou];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Fd{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function ye(r,e){const t=O(r);return nt.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ht(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function by(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function Hd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??we.RED,this.left=s??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new we(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,s,i){return this}insert(e,t,n){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ql(this.data.getIterator())}getIteratorFrom(e){return new ql(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ee(this.comparator);return t.data=e,t}}class ql{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Fn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new ee(ae.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yd("Invalid base64 string: "+i):i}}(e);return new de(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const Sy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(r){if(L(!!r),typeof r=="string"){let e=0;const t=Sy.exec(r);if(L(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(r.seconds),nanos:oe(r.nanos)}}function oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function mt(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="server_timestamp",Xd="__type__",Zd="__previous_value__",ef="__local_write_time__";function ao(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Xd])===null||t===void 0?void 0:t.stringValue)===Jd}function uo(r){const e=r.mapValue.fields[Zd];return ao(e)?uo(e):e}function ys(r){const e=ft(r.mapValue.fields[ef].timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t,n,s,i,a,u,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h}}const Ui="(default)";class Bt{constructor(e,t){this.projectId=e,this.database=t||Ui}static empty(){return new Bt("","")}get isDefaultDatabase(){return this.database===Ui}isEqual(e){return e instanceof Bt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="__type__",tf="__max__",Ct={mapValue:{fields:{__type__:{stringValue:tf}}}},cu="__vector__",ur="value",wi={nullValue:"NULL_VALUE"};function Ut(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ao(r)?4:nf(r)?9007199254740991:co(r)?10:11:F()}function it(r,e){if(r===e)return!0;const t=Ut(r);if(t!==Ut(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ys(r).isEqual(ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ft(s.timestampValue),u=ft(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return mt(s.bytesValue).isEqual(mt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),u=oe(i.doubleValue);return a===u?ms(a)===ms(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return nr(r.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Ul(a)!==Ul(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!it(a[c],u[c])))return!1;return!0}(r,e);default:return F()}}function Is(r,e){return(r.values||[]).find(t=>it(t,e))!==void 0}function qt(r,e){if(r===e)return 0;const t=Ut(r),n=Ut(e);if(t!==n)return $(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return function(i,a){const u=oe(i.integerValue||i.doubleValue),c=oe(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return $l(r.timestampValue,e.timestampValue);case 4:return $l(ys(r),ys(e));case 5:return $(r.stringValue,e.stringValue);case 6:return function(i,a){const u=mt(i),c=mt(a);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=$(u[h],c[h]);if(f!==0)return f}return $(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,a){const u=$(oe(i.latitude),oe(a.latitude));return u!==0?u:$(oe(i.longitude),oe(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return jl(r.arrayValue,e.arrayValue);case 10:return function(i,a){var u,c,h,f;const g=i.fields||{},_=a.fields||{},R=(u=g[ur])===null||u===void 0?void 0:u.arrayValue,V=(c=_[ur])===null||c===void 0?void 0:c.arrayValue,N=$(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:jl(R,V)}(r.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ct.mapValue&&a===Ct.mapValue)return 0;if(i===Ct.mapValue)return 1;if(a===Ct.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=$(c[g],f[g]);if(_!==0)return _;const R=qt(u[c[g]],h[f[g]]);if(R!==0)return R}return $(c.length,f.length)}(r.mapValue,e.mapValue);default:throw F()}}function $l(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);const t=ft(r),n=ft(e),s=$(t.seconds,n.seconds);return s!==0?s:$(t.nanos,n.nanos)}function jl(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=qt(t[s],n[s]);if(i)return i}return $(t.length,n.length)}function cr(r){return ba(r)}function ba(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=ft(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return mt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return M.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ba(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${ba(t.fields[a])}`;return s+"}"}(r.mapValue):F()}function Ai(r){switch(Ut(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uo(r);return e?16+Ai(e):16;case 5:return 2*r.stringValue.length;case 6:return mt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Ai(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Ht(n.fields,(i,a)=>{s+=i.length+Ai(a)}),s}(r.mapValue);default:throw F()}}function yn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ra(r){return!!r&&"integerValue"in r}function Ts(r){return!!r&&"arrayValue"in r}function zl(r){return!!r&&"nullValue"in r}function Gl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bi(r){return!!r&&"mapValue"in r}function co(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[uu])===null||t===void 0?void 0:t.stringValue)===cu}function os(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ht(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=os(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=os(r.arrayValue.values[t]);return e}return Object.assign({},r)}function nf(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===tf}const rf={mapValue:{fields:{[uu]:{stringValue:cu},[ur]:{arrayValue:{}}}}};function Vy(r){return"nullValue"in r?wi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?yn(Bt.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?co(r)?rf:{mapValue:{}}:F()}function Cy(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?yn(Bt.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?rf:"mapValue"in r?co(r)?{mapValue:{}}:Ct:F()}function Kl(r,e){const t=qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Ql(r,e){const t=qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!bi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=os(t)}setAll(e){let t=ae.emptyPath(),n={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=u.popLast()}a?n[u.lastSegment()]=os(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());bi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Ht(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Ae(os(this.value))}}function sf(r){const e=[];return Ht(r.fields,(t,n)=>{const s=new ae([t]);if(bi(n)){const i=sf(n.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,n,s,i,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ie(e,0,B.min(),B.min(),B.min(),Ae.empty(),0)}static newFoundDocument(e,t,n,s){return new ie(e,1,t,B.min(),n,s,0)}static newNoDocument(e,t){return new ie(e,2,t,B.min(),B.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new ie(e,3,t,B.min(),B.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.position=e,this.inclusive=t}}function Wl(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],a=r.position[s];if(i.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),t.key):n=qt(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Hl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!it(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dy(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{}class K extends of{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new xy(e,t,n):t==="array-contains"?new Oy(e,n):t==="in"?new df(e,n):t==="not-in"?new My(e,n):t==="array-contains-any"?new Fy(e,n):new K(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ny(e,n):new ky(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qt(t,this.value)):t!==null&&Ut(this.value)===Ut(t)&&this.matchesComparison(qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends of{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Z(e,t)}matches(e){return lr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function lr(r){return r.op==="and"}function Sa(r){return r.op==="or"}function lu(r){return af(r)&&lr(r)}function af(r){for(const e of r.filters)if(e instanceof Z)return!1;return!0}function Pa(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+cr(r.value);if(lu(r))return r.filters.map(e=>Pa(e)).join(",");{const e=r.filters.map(t=>Pa(t)).join(",");return`${r.op}(${e})`}}function uf(r,e){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&it(n.value,s.value)}(r,e):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&uf(a,s.filters[u]),!0):!1}(r,e):void F()}function cf(r,e){const t=r.filters.concat(e);return Z.create(t,r.op)}function lf(r){return r instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${cr(t.value)}`}(r):r instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(lf).join(" ,")+"}"}(r):"Filter"}class xy extends K{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ny extends K{constructor(e,t){super(e,"in",t),this.keys=hf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ky extends K{constructor(e,t){super(e,"not-in",t),this.keys=hf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hf(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>M.fromName(n.referenceValue))}class Oy extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ts(t)&&Is(t.arrayValue,this.value)}}class df extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Is(this.value.arrayValue,t)}}class My extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(Is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Is(this.value.arrayValue,t)}}class Fy extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ts(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Is(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t=null,n=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.le=null}}function Va(r,e=null,t=[],n=[],s=null,i=null,a=null){return new Ly(r,e,t,n,s,i,a)}function In(r){const e=O(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Pa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>cr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>cr(n)).join(",")),e.le=t}return e.le}function Ns(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Dy(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!uf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Hl(r.startAt,e.startAt)&&Hl(r.endAt,e.endAt)}function qi(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function $i(r,e){return r.filters.filter(t=>t instanceof K&&t.field.isEqual(e))}function Yl(r,e,t){let n=wi,s=!0;for(const i of $i(r,e)){let a=wi,u=!0;switch(i.op){case"<":case"<=":a=Vy(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=wi}Kl({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];Kl({value:n,inclusive:s},{value:a,inclusive:t.inclusive})<0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}function Jl(r,e,t){let n=Ct,s=!0;for(const i of $i(r,e)){let a=Ct,u=!0;switch(i.op){case">=":case">":a=Cy(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=Ct}Ql({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];Ql({value:n,inclusive:s},{value:a,inclusive:t.inclusive})>0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function ff(r,e,t,n,s,i,a,u){return new pt(r,e,t,n,s,i,a,u)}function vr(r){return new pt(r)}function Xl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function hu(r){return r.collectionGroup!==null}function Qn(r){const e=O(r);if(e.he===null){e.he=[];const t=new Set;for(const i of e.explicitOrderBy)e.he.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ee(ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.he.push(new Es(i,n))}),t.has(ae.keyField().canonicalString())||e.he.push(new Es(ae.keyField(),n))}return e.he}function Fe(r){const e=O(r);return e.Pe||(e.Pe=mf(e,Qn(r))),e.Pe}function By(r){const e=O(r);return e.Te||(e.Te=mf(e,r.explicitOrderBy)),e.Te}function mf(r,e){if(r.limitType==="F")return Va(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Es(s.field,i)});const t=r.endAt?new $t(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new $t(r.startAt.position,r.startAt.inclusive):null;return Va(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Ca(r,e){const t=r.filters.concat([e]);return new pt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ji(r,e,t){return new pt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ks(r,e){return Ns(Fe(r),Fe(e))&&r.limitType===e.limitType}function gf(r){return`${In(Fe(r))}|lt:${r.limitType}`}function jn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>lf(s)).join(", ")}]`),Ds(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>cr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>cr(s)).join(",")),`Target(${n})`}(Fe(r))}; limitType=${r.limitType})`}function Os(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Qn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(a,u,c){const h=Wl(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,Qn(n),s)||n.endAt&&!function(a,u,c){const h=Wl(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,Qn(n),s))}(r,e)}function pf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function _f(r){return(e,t)=>{let n=!1;for(const s of Qn(r)){const i=Uy(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Uy(r,e,t){const n=r.field.isKeyField()?M.comparator(e.key,t.key):function(i,a,u){const c=a.data.field(i),h=u.data.field(i);return c!==null&&h!==null?qt(c,h):F()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ht(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Hd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=new re(M.comparator);function qe(){return qy}const yf=new re(M.comparator);function ts(...r){let e=yf;for(const t of r)e=e.insert(t.key,t);return e}function If(r){let e=yf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function et(){return as()}function Tf(){return as()}function as(){return new _t(r=>r.toString(),(r,e)=>r.isEqual(e))}const $y=new re(M.comparator),jy=new ee(M.comparator);function z(...r){let e=jy;for(const t of r)e=e.add(t);return e}const zy=new ee($);function du(){return zy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ms(e)?"-0":e}}function Ef(r){return{integerValue:""+r}}function vf(r,e){return Bd(e)?Ef(e):fu(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this._=void 0}}function Gy(r,e,t){return r instanceof hr?function(s,i){const a={fields:{[Xd]:{stringValue:Jd},[ef]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ao(i)&&(i=uo(i)),i&&(a.fields[Zd]=i),{mapValue:a}}(t,e):r instanceof Tn?Af(r,e):r instanceof En?bf(r,e):function(s,i){const a=wf(s,i),u=Zl(a)+Zl(s.Ie);return Ra(a)&&Ra(s.Ie)?Ef(u):fu(s.serializer,u)}(r,e)}function Ky(r,e,t){return r instanceof Tn?Af(r,e):r instanceof En?bf(r,e):t}function wf(r,e){return r instanceof dr?function(n){return Ra(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class hr extends lo{}class Tn extends lo{constructor(e){super(),this.elements=e}}function Af(r,e){const t=Rf(e);for(const n of r.elements)t.some(s=>it(s,n))||t.push(n);return{arrayValue:{values:t}}}class En extends lo{constructor(e){super(),this.elements=e}}function bf(r,e){let t=Rf(e);for(const n of r.elements)t=t.filter(s=>!it(s,n));return{arrayValue:{values:t}}}class dr extends lo{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Zl(r){return oe(r.integerValue||r.doubleValue)}function Rf(r){return Ts(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.field=e,this.transform=t}}function Qy(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Tn&&s instanceof Tn||n instanceof En&&s instanceof En?nr(n.elements,s.elements,it):n instanceof dr&&s instanceof dr?it(n.Ie,s.Ie):n instanceof hr&&s instanceof hr}(r.transform,e.transform)}class Wy{constructor(e,t){this.version=e,this.transformResults=t}}class ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ri(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ho{}function Sf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ar(r.key,ue.none()):new wr(r.key,r.data,ue.none());{const t=r.data,n=Ae.empty();let s=new ee(ae.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new yt(r.key,n,new Ue(s.toArray()),ue.none())}}function Hy(r,e,t){r instanceof wr?function(s,i,a){const u=s.value.clone(),c=th(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof yt?function(s,i,a){if(!Ri(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=th(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Pf(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function us(r,e,t,n){return r instanceof wr?function(i,a,u,c){if(!Ri(i.precondition,a))return u;const h=i.value.clone(),f=nh(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof yt?function(i,a,u,c){if(!Ri(i.precondition,a))return u;const h=nh(i.fieldTransforms,c,a),f=a.data;return f.setAll(Pf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,e,t,n):function(i,a,u){return Ri(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function Yy(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=wf(n.transform,s||null);i!=null&&(t===null&&(t=Ae.empty()),t.set(n.field,i))}return t||null}function eh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&nr(n,s,(i,a)=>Qy(i,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class wr extends ho{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yt extends ho{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function th(r,e,t){const n=new Map;L(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],a=i.transform,u=e.data.field(i.field);n.set(i.field,Ky(a,u,t[s]))}return n}function nh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,a=t.data.field(s.field);n.set(s.field,Gy(i,a,e))}return n}class Ar extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mu extends ho{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Hy(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=us(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=us(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Tf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const c=Sf(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,(t,n)=>eh(t,n))&&nr(this.baseMutations,e.baseMutations,(t,n)=>eh(t,n))}}class pu{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){L(e.mutations.length===n.length);let s=function(){return $y}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new pu(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,W;function Vf(r){switch(r){case S.OK:return F();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return F()}}function Cf(r){if(r===void 0)return me("GRPC error has no .code"),S.UNKNOWN;switch(r){case pe.OK:return S.OK;case pe.CANCELLED:return S.CANCELLED;case pe.UNKNOWN:return S.UNKNOWN;case pe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case pe.INTERNAL:return S.INTERNAL;case pe.UNAVAILABLE:return S.UNAVAILABLE;case pe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case pe.NOT_FOUND:return S.NOT_FOUND;case pe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case pe.ABORTED:return S.ABORTED;case pe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case pe.DATA_LOSS:return S.DATA_LOSS;default:return F()}}(W=pe||(pe={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Nt([4294967295,4294967295],0);function rh(r){const e=Df().encode(r),t=new bd;return t.update(e),new Uint8Array(t.digest())}function sh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Nt([t,n],0),new Nt([s,i],0)]}class yu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ns(`Invalid padding: ${t}`);if(n<0)throw new ns(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ns(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ns(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Nt.fromNumber(this.Ee)}Ae(e,t,n){let s=e.add(t.multiply(Nt.fromNumber(n)));return s.compare(Zy)===1&&(s=new Nt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=rh(e),[n,s]=sh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);if(!this.Re(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new yu(i,s,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.Ee===0)return;const t=rh(e),[n,s]=sh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Ls.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Fs(B.min(),s,new re($),qe(),z())}}class Ls{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ls(n,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,n,s){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=s}}class xf{constructor(e,t){this.targetId=e,this.ge=t}}class Nf{constructor(e,t,n=de.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class ih{constructor(){this.pe=0,this.ye=oh(),this.we=de.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=z(),t=z(),n=z();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:F()}}),new Ls(this.we,this.be,e,t,n)}Me(){this.Se=!1,this.ye=oh()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,L(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class eI{constructor(e){this.ke=e,this.qe=new Map,this.Qe=qe(),this.$e=mi(),this.Ke=mi(),this.Ue=new re($)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((n,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,n=e.ge.count,s=this.Xe(t);if(s){const i=s.target;if(qi(i))if(n===0){const a=new M(i.path);this.ze(t,a,ie.newNoDocument(a,B.min()))}else L(n===1);else{const a=this.et(t);if(a!==n){const u=this.tt(e),c=u?this.nt(u,e,a):1;if(c!==0){this.Ye(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,h)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=mt(n).toUint8Array()}catch(c){if(c instanceof Yd)return st("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new yu(a,s,i)}catch(c){return st(c instanceof ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ee===0?null:u}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.ze(t,i,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((i,a)=>{const u=this.Xe(a);if(u){if(i.current&&qi(u.target)){const c=new M(u.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,ie.newNoDocument(c,e))}i.ve&&(t.set(a,i.Fe()),i.Me())}});let n=z();this.Ke.forEach((i,a)=>{let u=!0;a.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new Fs(e,t,this.Ue,this.Qe,n);return this.Qe=qe(),this.$e=mi(),this.Ke=mi(),this.Ue=new re($),s}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new ih,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new ee($),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ee($),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ih),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function mi(){return new re(M.comparator)}function oh(){return new re(M.comparator)}const tI={asc:"ASCENDING",desc:"DESCENDING"},nI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rI={and:"AND",or:"OR"};class sI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Da(r,e){return r.useProto3Json||Ds(e)?e:{value:e}}function fr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function iI(r,e){return fr(r,e.toTimestamp())}function ge(r){return L(!!r),B.fromTimestamp(function(t){const n=ft(t);return new ce(n.seconds,n.nanos)}(r))}function Iu(r,e){return xa(r,e).canonicalString()}function xa(r,e){const t=function(s){return new G(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Of(r){const e=G.fromString(r);return L(zf(e)),e}function vs(r,e){return Iu(r.databaseId,e.path)}function rt(r,e){const t=Of(e);if(t.get(1)!==r.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new M(Lf(t))}function Mf(r,e){return Iu(r.databaseId,e)}function Ff(r){const e=Of(r);return e.length===4?G.emptyPath():Lf(e)}function Na(r){return new G(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Lf(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ah(r,e,t){return{name:vs(r,e),fields:t.value.mapValue.fields}}function Bf(r,e,t){const n=rt(r,e.name),s=ge(e.updateTime),i=e.createTime?ge(e.createTime):B.min(),a=new Ae({mapValue:{fields:e.fields}}),u=ie.newFoundDocument(n,s,i,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function oI(r,e){return"found"in e?function(n,s){L(!!s.found),s.found.name,s.found.updateTime;const i=rt(n,s.found.name),a=ge(s.found.updateTime),u=s.found.createTime?ge(s.found.createTime):B.min(),c=new Ae({mapValue:{fields:s.found.fields}});return ie.newFoundDocument(i,a,u,c)}(r,e):"missing"in e?function(n,s){L(!!s.missing),L(!!s.readTime);const i=rt(n,s.missing),a=ge(s.readTime);return ie.newNoDocument(i,a)}(r,e):F()}function aI(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string"),de.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),de.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(h){const f=h.code===void 0?S.UNKNOWN:Cf(h.code);return new C(f,h.message||"")}(a);t=new Nf(n,s,i,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=rt(r,n.document.name),i=ge(n.document.updateTime),a=n.document.createTime?ge(n.document.createTime):B.min(),u=new Ae({mapValue:{fields:n.document.fields}}),c=ie.newFoundDocument(s,i,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Si(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=rt(r,n.document),i=n.readTime?ge(n.readTime):B.min(),a=ie.newNoDocument(s,i),u=n.removedTargetIds||[];t=new Si([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=rt(r,n.document),i=n.removedTargetIds||[];t=new Si([],i,s,null)}else{if(!("filter"in e))return F();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Xy(s,i),u=n.targetId;t=new xf(u,a)}}return t}function ws(r,e){let t;if(e instanceof wr)t={update:ah(r,e.key,e.value)};else if(e instanceof Ar)t={delete:vs(r,e.key)};else if(e instanceof yt)t={update:ah(r,e.key,e.data),updateMask:mI(e.fieldMask)};else{if(!(e instanceof mu))return F();t={verify:vs(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof hr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Tn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof En)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof dr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw F()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(r,e.precondition)),t}function ka(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ue.updateTime(ge(i.updateTime)):i.exists!==void 0?ue.exists(i.exists):ue.none()}(e.currentDocument):ue.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new hr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new Tn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new En(f)}else"increment"in u?c=new dr(a,u.increment):F();const h=ae.fromServerFormat(u.fieldPath);return new Ms(h,c)}(r,s)):[];if(e.update){e.update.name;const s=rt(r,e.update.name),i=new Ae({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(c){const h=c.fieldPaths||[];return new Ue(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new yt(s,i,a,t,n)}return new wr(s,i,t,n)}if(e.delete){const s=rt(r,e.delete);return new Ar(s,t)}if(e.verify){const s=rt(r,e.verify);return new mu(s,t)}return F()}function uI(r,e){return r&&r.length>0?(L(e!==void 0),r.map(t=>function(s,i){let a=s.updateTime?ge(s.updateTime):ge(i);return a.isEqual(B.min())&&(a=ge(i)),new Wy(a,s.transformResults||[])}(t,e))):[]}function Uf(r,e){return{documents:[Mf(r,e.path)]}}function Tu(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Mf(r,s);const i=function(h){if(h.length!==0)return jf(Z.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Pt(_.field),direction:hI(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Da(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:s}}function cI(r,e,t,n){const{ht:s,parent:i}=Tu(r,e),a={},u=[];let c=0;return t.forEach(h=>{const f="aggregate_"+c++;a[f]=h.alias,h.aggregateType==="count"?u.push({alias:f,count:{}}):h.aggregateType==="avg"?u.push({alias:f,avg:{field:Pt(h.fieldPath)}}):h.aggregateType==="sum"&&u.push({alias:f,sum:{field:Pt(h.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},Pt:a,parent:i}}function qf(r){let e=Ff(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){L(n===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const _=$f(g);return _ instanceof Z&&lu(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(_=>function(V){return new Es(zn(V.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(_))}(t.orderBy));let u=null;t.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,Ds(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(g){const _=!!g.before,R=g.values||[];return new $t(R,_)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const _=!g.before,R=g.values||[];return new $t(R,_)}(t.endAt)),ff(e,s,a,i,u,"F",c,h)}function lI(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $f(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=zn(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=zn(t.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(t.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(t){return K.create(zn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(n=>$f(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(r):F()}function hI(r){return tI[r]}function dI(r){return nI[r]}function fI(r){return rI[r]}function Pt(r){return{fieldPath:r.canonicalString()}}function zn(r){return ae.fromServerFormat(r.fieldPath)}function jf(r){return r instanceof K?function(t){if(t.op==="=="){if(Gl(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NAN"}};if(zl(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gl(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NOT_NAN"}};if(zl(t.value))return{unaryFilter:{field:Pt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pt(t.field),op:dI(t.op),value:t.value}}}(r):r instanceof Z?function(t){const n=t.getFilters().map(s=>jf(s));return n.length===1?n[0]:{compositeFilter:{op:fI(t.op),filters:n}}}(r):F()}function mI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function zf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,n,s,i=B.min(),a=B.min(),u=de.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.Tt=e}}function gI(r,e){let t;if(e.document)t=Bf(r.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=M.fromSegments(e.noDocument.path),s=wn(e.noDocument.readTime);t=ie.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const n=M.fromSegments(e.unknownDocument.path),s=wn(e.unknownDocument.version);t=ie.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ce(s[0],s[1]);return B.fromTimestamp(i)}(e.readTime)),t}function uh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:zi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,a){return{name:vs(i,a.key),fields:a.data.value.mapValue.fields,updateTime:fr(i,a.version.toTimestamp()),createTime:fr(i,a.createTime.toTimestamp())}}(r.Tt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:vn(e.version)};else{if(!e.isUnknownDocument())return F();n.unknownDocument={path:t.path.toArray(),version:vn(e.version)}}return n}function zi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function vn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function wn(r){const e=new ce(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function cn(r,e){const t=(e.baseMutations||[]).map(i=>ka(r.Tt,i));for(let i=0;i<e.mutations.length-1;++i){const a=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const u=e.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>ka(r.Tt,i)),s=ce.fromMillis(e.localWriteTimeMs);return new gu(e.batchId,s,t,n)}function rs(r){const e=wn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?wn(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return L(i.documents.length===1),Fe(vr(Ff(i.documents[0])))}(r.query):function(i){return Fe(qf(i))}(r.query),new ht(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function Kf(r,e){const t=vn(e.snapshotVersion),n=vn(e.lastLimboFreeSnapshotVersion);let s;s=qi(e.target)?Uf(r.Tt,e.target):Tu(r.Tt,e.target).ht;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:In(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Eu(r){const e=qf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ji(e,e.limit,"L"):e}function aa(r,e){return new _u(e.largestBatchId,ka(r.Tt,e.overlayMutation))}function ch(r,e){const t=e.path.lastSegment();return[r,xe(e.path.popLast()),t]}function lh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:vn(n.readTime),documentKey:xe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{getBundleMetadata(e,t){return hh(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:wn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return hh(e).put(function(s){return{bundleId:s.id,createTime:vn(ge(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return dh(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Eu(i.bundledQuery),readTime:wn(i.readTime)}}(n)})}saveNamedQuery(e,t){return dh(e).put(function(s){return{name:s.name,readTime:vn(ge(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function hh(r){return ye(r,so)}function dh(r){return ye(r,io)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const n=t.uid||"";return new fo(e,n)}getOverlay(e,t){return Hr(e).get(ch(this.userId,t)).next(n=>n?aa(this.serializer,n):null)}getOverlays(e,t){const n=et();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,a)=>{const u=new _u(t,a);s.push(this.Et(e,u))}),w.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(a=>s.add(xe(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Hr(e).J(wa,u))}),w.waitFor(i)}getOverlaysForCollection(e,t,n){const s=et(),i=xe(t),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Hr(e).G(wa,a).next(u=>{for(const c of u){const h=aa(this.serializer,c);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=et();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Hr(e).Z({index:Gd,range:u},(c,h,f)=>{const g=aa(this.serializer,h);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>i)}Et(e,t){return Hr(e).put(function(s,i,a){const[u,c,h]=ch(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ws(s.Tt,a.mutation)}}(this.serializer,this.userId,t))}}function Hr(r){return ye(r,oo)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{dt(e){return ye(e,ou)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(oe(e.integerValue));else if("doubleValue"in e){const n=oe(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),ms(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),typeof n=="string"&&(n=ft(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.bt(t);else if("bytesValue"in e)this.ft(t,30),t.St(mt(e.bytesValue)),this.bt(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?nf(e)?this.ft(t,Number.MAX_SAFE_INTEGER):co(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.bt(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.bt(t)):F()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const n=e.fields||{};this.ft(t,55);for(const s of Object.keys(n))this.wt(s,t),this.Rt(n[s],t)}vt(e,t){var n,s;const i=e.fields||{};this.ft(t,53);const a=ur,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.ft(t,15),t.gt(oe(u)),this.wt(a,t),this.Rt(i[a],t)}Ft(e,t){const n=e.values||[];this.ft(t,50);for(const s of n)this.Rt(s,t)}Dt(e,t){this.ft(t,37),M.fromName(e).path.forEach(n=>{this.ft(t,60),this.Mt(n,t)})}ft(e,t){e.gt(t)}bt(e){e.gt(2)}}ln.xt=new ln;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=255;function yI(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function fh(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const a=yI(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(e/8)}class II{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Nt(n.value),n=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.kt(n.value),n=t.next();this.qt()}Qt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Nt(n);else if(n<2048)this.Nt(960|n>>>6),this.Nt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|n>>>12),this.Nt(128|63&n>>>6),this.Nt(128|63&n);else{const s=t.codePointAt(0);this.Nt(240|s>>>18),this.Nt(128|63&s>>>12),this.Nt(128|63&s>>>6),this.Nt(128|63&s)}}this.Bt()}$t(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.kt(n);else if(n<2048)this.kt(960|n>>>6),this.kt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|n>>>12),this.kt(128|63&n>>>6),this.kt(128|63&n);else{const s=t.codePointAt(0);this.kt(240|s>>>18),this.kt(128|63&s>>>12),this.kt(128|63&s>>>6),this.kt(128|63&s)}}this.qt()}Kt(e){const t=this.Ut(e),n=fh(t);this.Wt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Gt(e){const t=this.Ut(e),n=fh(t);this.Wt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}zt(){this.jt(Ln),this.jt(255)}Ht(){this.Jt(Ln),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Ut(e){const t=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Ln?(this.jt(Ln),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Ln?(this.Jt(Ln),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class TI{constructor(e){this.Zt=e}St(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Kt(e)}Vt(){this.Zt.zt()}}class EI{constructor(e){this.Zt=e}St(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class Yr{constructor(){this.Zt=new II,this.Xt=new TI(this.Zt),this.en=new EI(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new hn(this.indexId,this.documentKey,this.arrayValue,n)}}function At(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=mh(r.arrayValue,e.arrayValue),t!==0?t:(t=mh(r.directionalValue,e.directionalValue),t!==0?t:M.comparator(r.documentKey,e.documentKey)))}function mh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.rn=new ee((t,n)=>ae.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const n=t;n.isInequality()?this.rn=this.rn.add(n):this._n.push(n)}}get an(){return this.rn.size>1}un(e){if(L(e.collectionGroup===this.collectionId),this.an)return!1;const t=Ta(e);if(t!==void 0&&!this.cn(t))return!1;const n=on(e);let s=new Set,i=0,a=0;for(;i<n.length&&this.cn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.rn.size>0){const u=this.rn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.ln(u,c)||!this.hn(this.sn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.sn.length||!this.hn(this.sn[a++],u))return!1}return!0}Pn(){if(this.an)return null;let e=new ee(ae.comparator);const t=[];for(const n of this._n)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Ti(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Ti(n.field,0))}for(const n of this.sn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Ti(n.field,n.dir==="asc"?0:1)));return new ki(ki.UNKNOWN_ID,this.collectionId,t,fs.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(r){var e,t;if(L(r instanceof K||r instanceof Z),r instanceof K){if(r instanceof df){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>K.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>Qf(s));return Z.create(n,r.op)}function vI(r){if(r.getFilters().length===0)return[];const e=Fa(Qf(r));return L(Wf(e)),Oa(e)||Ma(e)?[e]:e.getFilters()}function Oa(r){return r instanceof K}function Ma(r){return r instanceof Z&&lu(r)}function Wf(r){return Oa(r)||Ma(r)||function(t){if(t instanceof Z&&Sa(t)){for(const n of t.getFilters())if(!Oa(n)&&!Ma(n))return!1;return!0}return!1}(r)}function Fa(r){if(L(r instanceof K||r instanceof Z),r instanceof K)return r;if(r.filters.length===1)return Fa(r.filters[0]);const e=r.filters.map(n=>Fa(n));let t=Z.create(e,r.op);return t=Gi(t),Wf(t)?t:(L(t instanceof Z),L(lr(t)),L(t.filters.length>1),t.filters.reduce((n,s)=>vu(n,s)))}function vu(r,e){let t;return L(r instanceof K||r instanceof Z),L(e instanceof K||e instanceof Z),t=r instanceof K?e instanceof K?function(s,i){return Z.create([s,i],"and")}(r,e):ph(r,e):e instanceof K?ph(e,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0),lr(s)&&lr(i))return cf(s,i.getFilters());const a=Sa(s)?s:i,u=Sa(s)?i:s,c=a.filters.map(h=>vu(h,u));return Z.create(c,"or")}(r,e),Gi(t)}function ph(r,e){if(lr(e))return cf(e,r.getFilters());{const t=e.filters.map(n=>vu(r,n));return Z.create(t,"or")}}function Gi(r){if(L(r instanceof K||r instanceof Z),r instanceof K)return r;const e=r.getFilters();if(e.length===1)return Gi(e[0]);if(af(r))return r;const t=e.map(s=>Gi(s)),n=[];return t.forEach(s=>{s instanceof K?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.Tn=new wu}addToCollectionParentIndex(e,t){return this.Tn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(ze.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class wu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ee(G.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ee(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="IndexedDbIndexManager",gi=new Uint8Array(0);class AI{constructor(e,t){this.databaseId=t,this.In=new wu,this.En=new _t(n=>In(n),(n,s)=>Ns(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const i={collectionId:n,parent:xe(s)};return yh(e).put(i)}return w.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Nd(t),""],!1,!0);return yh(e).G(s).next(i=>{for(const a of i){if(a.collectionId!==t)break;n.push(Ze(a.parent))}return n})}addFieldIndex(e,t){const n=Jr(e),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const a=Un(e);return i.next(u=>{a.put(lh(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Jr(e),s=Un(e),i=Bn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Jr(e),n=Bn(e),s=Un(e);return t.J().next(()=>n.J()).next(()=>s.J())}createTargetIndexes(e,t){return w.forEach(this.dn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new gh(n).Pn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Bn(e);let s=!0;const i=new Map;return w.forEach(this.dn(t),a=>this.An(e,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=z();const u=[];return w.forEach(i,(c,h)=>{D(_h,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(X=>`${X.fieldPath}:${X.kind}`).join(",")}`}(c)} to execute ${In(t)}`);const f=function(U,X){const ne=Ta(X);if(ne===void 0)return null;for(const H of $i(U,ne.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(h,c),g=function(U,X){const ne=new Map;for(const H of on(X))for(const T of $i(U,H.fieldPath))switch(T.op){case"==":case"in":ne.set(H.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return ne.set(H.fieldPath.canonicalString(),T.value),Array.from(ne.values())}return null}(h,c),_=function(U,X){const ne=[];let H=!0;for(const T of on(X)){const p=T.kind===0?Yl(U,T.fieldPath,U.startAt):Jl(U,T.fieldPath,U.startAt);ne.push(p.value),H&&(H=p.inclusive)}return new $t(ne,H)}(h,c),R=function(U,X){const ne=[];let H=!0;for(const T of on(X)){const p=T.kind===0?Jl(U,T.fieldPath,U.endAt):Yl(U,T.fieldPath,U.endAt);ne.push(p.value),H&&(H=p.inclusive)}return new $t(ne,H)}(h,c),V=this.Rn(c,h,_),N=this.Rn(c,h,R),x=this.Vn(c,h,g),q=this.mn(c.indexId,f,V,_.inclusive,N,R.inclusive,x);return w.forEach(q,j=>n.H(j,t.limit).next(U=>{U.forEach(X=>{const ne=M.fromSegments(X.documentKey);a.has(ne)||(a=a.add(ne),u.push(ne))})}))}).next(()=>u)}return w.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=vI(Z.create(e.filters,"and")).map(n=>Va(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,n,s,i,a,u){const c=(t!=null?t.length:1)*Math.max(n.length,i.length),h=c/(t!=null?t.length:1),f=[];for(let g=0;g<c;++g){const _=t?this.fn(t[g/h]):gi,R=this.gn(e,_,n[g%h],s),V=this.pn(e,_,i[g%h],a),N=u.map(x=>this.gn(e,_,x,!0));f.push(...this.createRange(R,V,N))}return f}gn(e,t,n,s){const i=new hn(e,M.empty(),t,n);return s?i:i.nn()}pn(e,t,n,s){const i=new hn(e,M.empty(),t,n);return s?i.nn():i}An(e,t){const n=new gh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let a=null;for(const u of i)n.un(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(e,t){let n=2;const s=this.dn(t);return w.forEach(s,i=>this.An(e,i).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new ee(ae.comparator),f=!1;for(const g of c.filters)for(const _ of g.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const g of c.orderBy)g.field.isKeyField()||(h=h.add(g.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&s.length>1&&n===2?1:n)}yn(e,t){const n=new Yr;for(const s of on(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const a=n.tn(s.kind);ln.xt.At(i,a)}return n.Yt()}fn(e){const t=new Yr;return ln.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const n=new Yr;return ln.xt.At(yn(this.databaseId,t),n.tn(function(i){const a=on(i);return a.length===0?0:a[a.length-1].kind}(e))),n.Yt()}Vn(e,t,n){if(n===null)return[];let s=[];s.push(new Yr);let i=0;for(const a of on(e)){const u=n[i++];for(const c of s)if(this.bn(t,a.fieldPath)&&Ts(u))s=this.Sn(s,a,u);else{const h=c.tn(a.kind);ln.xt.At(u,h)}}return this.Dn(s)}Rn(e,t,n){return this.Vn(e,t,n.position)}Dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Yt();return t}Sn(e,t,n){const s=[...e],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new Yr;c.seed(u.Yt()),ln.xt.At(a,c.tn(t.kind)),i.push(c)}return i}bn(e,t){return!!e.filters.find(n=>n instanceof K&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Jr(e),s=Un(e);return(t?n.G(va,IDBKeyRange.bound(t,t)):n.G()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(c=>{a.push(function(f,g){const _=g?new fs(g.sequenceNumber,new ze(wn(g.readTime),new M(Ze(g.documentKey)),g.largestBatchId)):fs.empty(),R=f.fields.map(([V,N])=>new Ti(ae.fromServerFormat(V),N));return new ki(f.indexId,f.collectionGroup,R,_)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:$(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Jr(e),i=Un(e);return this.vn(e).next(a=>s.G(va,IDBKeyRange.bound(t,t)).next(u=>w.forEach(u,c=>i.put(lh(c.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(e,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,c=>this.Cn(e,s,c).next(h=>{const f=this.Fn(i,c);return h.isEqual(f)?w.resolve():this.Mn(e,i,c,h,f)}))))})}xn(e,t,n,s){return Bn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.wn(n,t.key),documentKey:t.key.path.toArray()})}On(e,t,n,s){return Bn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.wn(n,t.key),t.key.path.toArray()])}Cn(e,t,n){const s=Bn(e);let i=new ee(At);return s.Z({index:zd,range:IDBKeyRange.only([n.indexId,this.uid,this.wn(n,t)])},(a,u)=>{i=i.add(new hn(n.indexId,t,u.arrayValue,u.directionalValue))}).next(()=>i)}Fn(e,t){let n=new ee(At);const s=this.yn(t,e);if(s==null)return n;const i=Ta(t);if(i!=null){const a=e.data.field(i.fieldPath);if(Ts(a))for(const u of a.arrayValue.values||[])n=n.add(new hn(t.indexId,e.key,this.fn(u),s))}else n=n.add(new hn(t.indexId,e.key,gi,s));return n}Mn(e,t,n,s,i){D(_h,"Updating index entries for document '%s'",t.key);const a=[];return function(c,h,f,g,_){const R=c.getIterator(),V=h.getIterator();let N=Fn(R),x=Fn(V);for(;N||x;){let q=!1,j=!1;if(N&&x){const U=f(N,x);U<0?j=!0:U>0&&(q=!0)}else N!=null?j=!0:q=!0;q?(g(x),x=Fn(V)):j?(_(N),N=Fn(R)):(N=Fn(R),x=Fn(V))}}(s,i,At,u=>{a.push(this.xn(e,t,n,u))},u=>{a.push(this.On(e,t,n,u))}),w.waitFor(a)}vn(e){let t=1;return Un(e).Z({index:jd,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,u)=>At(a,u)).filter((a,u,c)=>!u||At(a,c[u-1])!==0);const s=[];s.push(e);for(const a of n){const u=At(a,e),c=At(a,t);if(u===0)s[0]=e.nn();else if(u>0&&c<0)s.push(a),s.push(a.nn());else if(c>0)break}s.push(t);const i=[];for(let a=0;a<s.length;a+=2){if(this.Nn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,gi,[]],c=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,gi,[]];i.push(IDBKeyRange.bound(u,c))}return i}Nn(e,t){return At(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ih)}getMinOffset(e,t){return w.mapArray(this.dn(t),n=>this.An(e,n).next(s=>s||F())).next(Ih)}}function yh(r){return ye(r,_s)}function Bn(r){return ye(r,Bi)}function Jr(r){return ye(r,iu)}function Un(r){return ye(r,Li)}function Ih(r){L(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;nu(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hf=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(r,e,t){const n=r.store(We),s=r.store(sr),i=[],a=IDBKeyRange.only(t.batchId);let u=0;const c=n.Z({range:a},(f,g,_)=>(u++,_.delete()));i.push(c.next(()=>{L(u===1)}));const h=[];for(const f of t.mutations){const g=Ud(e,f.key.path,t.batchId);i.push(s.delete(g)),h.push(f.key)}return w.waitFor(i).next(()=>h)}function Ki(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(Hf,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);class mo{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Bn={}}static It(e,t,n,s){L(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new mo(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return bt(e).Z({index:fn,range:n},(s,i,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Gn(e),a=bt(e);return a.add({}).next(u=>{L(typeof u=="number");const c=new gu(u,t,n,s),h=function(R,V,N){const x=N.baseMutations.map(j=>ws(R.Tt,j)),q=N.mutations.map(j=>ws(R.Tt,j));return{userId:V,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:q}}(this.serializer,this.userId,c),f=[];let g=new ee((_,R)=>$(_.canonicalString(),R.canonicalString()));for(const _ of s){const R=Ud(this.userId,_.key.path,u);g=g.add(_.key.path.popLast()),f.push(a.put(h)),f.push(i.put(R,ty))}return g.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Bn[u]=c.keys()}),w.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return bt(e).get(t).next(n=>n?(L(n.userId===this.userId),cn(this.serializer,n)):null)}Ln(e,t){return this.Bn[t]?w.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Bn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return bt(e).Z({index:fn,range:s},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),i=cn(this.serializer,u)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=kt;return bt(e).Z({index:fn,range:t,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,kt],[this.userId,Number.POSITIVE_INFINITY]);return bt(e).G(fn,t).next(n=>n.map(s=>cn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ei(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Gn(e).Z({range:s},(a,u,c)=>{const[h,f,g]=a,_=Ze(f);if(h===this.userId&&t.path.isEqual(_))return bt(e).get(g).next(R=>{if(!R)throw F();L(R.userId===this.userId),i.push(cn(this.serializer,R))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee($);const s=[];return t.forEach(i=>{const a=Ei(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=Gn(e).Z({range:u},(h,f,g)=>{const[_,R,V]=h,N=Ze(R);_===this.userId&&i.path.isEqual(N)?n=n.add(V):g.done()});s.push(c)}),w.waitFor(s).next(()=>this.kn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Ei(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new ee($);return Gn(e).Z({range:a},(c,h,f)=>{const[g,_,R]=c,V=Ze(_);g===this.userId&&n.isPrefixOf(V)?V.length===s&&(u=u.add(R)):f.done()}).next(()=>this.kn(e,u))}kn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(bt(e).get(i).next(a=>{if(a===null)throw F();L(a.userId===this.userId),n.push(cn(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Yf(e.ue,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return Gn(e).Z({range:n},(i,a,u)=>{if(i[0]===this.userId){const c=Ze(i[1]);s.push(c)}else u.done()}).next(()=>{L(s.length===0)})})}containsKey(e,t){return Jf(e,this.userId,t)}Qn(e){return Xf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:kt,lastStreamToken:""})}}function Jf(r,e,t){const n=Ei(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return Gn(r).Z({range:i,Y:!0},(u,c,h)=>{const[f,g,_]=u;f===e&&g===s&&(a=!0),h.done()}).next(()=>a)}function bt(r){return ye(r,We)}function Gn(r){return ye(r,sr)}function Xf(r){return ye(r,gs)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new An(0)}static Un(){return new An(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const n=new An(t.highestTargetId);return t.highestTargetId=n.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>B.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Wn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Gn(e,s)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(n=>(n.targetCount+=1,this.jn(t,n),this.Gn(e,n))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>qn(e).delete(t.targetId)).next(()=>this.Wn(e)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.Gn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return qn(e).Z((a,u)=>{const c=rs(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(e,t){return qn(e).Z((n,s)=>{const i=rs(s);t(i)})}Wn(e){return Eh(e).get(Fi).next(t=>(L(t!==null),t))}Gn(e,t){return Eh(e).put(Fi,t)}zn(e,t){return qn(e).put(Kf(this.serializer,t))}jn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=In(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return qn(e).Z({range:s,index:$d},(a,u,c)=>{const h=rs(u);Ns(t,h.target)&&(i=h,c.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Vt(e);return t.forEach(a=>{const u=xe(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(e,n,a))}),w.waitFor(s)}removeMatchingKeys(e,t,n){const s=Vt(e);return w.forEach(t,i=>{const a=xe(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Vt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Vt(e);let i=z();return s.Z({range:n,Y:!0},(a,u,c)=>{const h=Ze(a[1]),f=new M(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=xe(t.path),s=IDBKeyRange.bound([n],[Nd(n)],!1,!0);let i=0;return Vt(e).Z({index:su,Y:!0,range:s},([a,u],c,h)=>{a!==0&&(i++,h.done())}).next(()=>i>0)}lt(e,t){return qn(e).get(t).next(n=>n?rs(n):null)}}function qn(r){return ye(r,ir)}function Eh(r){return ye(r,pn)}function Vt(r){return ye(r,or)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="LruGarbageCollector",RI=1048576;function wh([r,e],[t,n]){const s=$(r,t);return s===0?$(e,n):s}class SI{constructor(e){this.Hn=e,this.buffer=new ee(wh),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();wh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Zf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){D(vh,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wt(t)?D(vh,"Ignoring IndexedDB error during garbage collection: ",t):await Qt(t)}await this.er(3e5)})}}class PI{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Be.ae);const n=new SI(t);return this.tr.forEachTarget(e,s=>n.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>n.Zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Th)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Th):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,s,i,a,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(e,n,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(g=>(h=Date.now(),$n()<=Q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function em(r,e){return new PI(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.db=e,this.garbageCollector=em(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(n,s)=>t(s))}addReference(e,t,n){return pi(e,n)}removeReference(e,t,n){return pi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return pi(e,t)}ar(e,t){return function(s,i){let a=!1;return Xf(s).X(u=>Jf(s,u,i).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this._r(e,(a,u)=>{if(u<=t){const c=this.ar(e,a).next(h=>{if(!h)return i++,n.getEntry(e,a).next(()=>(n.removeEntry(a,B.min()),Vt(e).delete(function(g){return[0,xe(g.path)]}(a))))});s.push(c)}}).next(()=>w.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return pi(e,t)}_r(e,t){const n=Vt(e);let s,i=Be.ae;return n.Z({index:su},([a,u],{path:c,sequenceNumber:h})=>{a===0?(i!==Be.ae&&t(new M(Ze(s)),i),i=h,s=c):i=Be.ae}).next(()=>{i!==Be.ae&&t(new M(Ze(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function pi(r,e){return Vt(r).put(function(n,s){return{targetId:0,path:xe(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.changes=new _t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return rn(e).put(n)}removeEntry(e,t,n){return rn(e).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],zi(a),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.ur(e,n)))}getEntry(e,t){let n=ie.newInvalidDocument(t);return rn(e).Z({index:vi,range:IDBKeyRange.only(Xr(t))},(s,i)=>{n=this.cr(t,i)}).next(()=>n)}lr(e,t){let n={size:0,document:ie.newInvalidDocument(t)};return rn(e).Z({index:vi,range:IDBKeyRange.only(Xr(t))},(s,i)=>{n={document:this.cr(t,i),size:Ki(i)}}).next(()=>n)}getEntries(e,t){let n=qe();return this.hr(e,t,(s,i)=>{const a=this.cr(s,i);n=n.insert(s,a)}).next(()=>n)}Pr(e,t){let n=qe(),s=new re(M.comparator);return this.hr(e,t,(i,a)=>{const u=this.cr(i,a);n=n.insert(i,u),s=s.insert(i,Ki(a))}).next(()=>({documents:n,Tr:s}))}hr(e,t,n){if(t.isEmpty())return w.resolve();let s=new ee(Rh);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Xr(s.first()),Xr(s.last())),a=s.getIterator();let u=a.getNext();return rn(e).Z({index:vi,range:i},(c,h,f)=>{const g=M.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&Rh(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.W(Xr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),zi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rn(e).G(IDBKeyRange.bound(u,c,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=qe();for(const g of h){const _=this.cr(M.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);_.isFoundDocument()&&(Os(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=qe();const a=bh(t,n),u=bh(t,ze.max());return rn(e).Z({index:qd,range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const g=this.cr(M.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new DI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ah(e).get(Ea).next(t=>(L(!!t),t))}ur(e,t){return Ah(e).put(Ea,t)}cr(e,t){if(t){const n=gI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ie.newInvalidDocument(e)}}function nm(r){return new CI(r)}class DI extends tm{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new _t(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ee((i,a)=>$(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Er.get(i);if(t.push(this.Ir.removeEntry(e,i,u.readTime)),a.isValidDocument()){const c=uh(this.Ir.serializer,a);s=s.add(i.path.popLast());const h=Ki(c);n+=h-u.size,t.push(this.Ir.addEntry(e,i,c))}else if(n-=u.size,this.trackRemovals){const c=uh(this.Ir.serializer,a.convertToNoDocument(B.min()));t.push(this.Ir.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Ir.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(n=>(this.Er.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:n,Tr:s})=>(s.forEach((i,a)=>{this.Er.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Ah(r){return ye(r,ps)}function rn(r){return ye(r,Mi)}function Xr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function bh(r,e){const t=e.documentKey.path.toArray();return[r,zi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Rh(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=$(t[i],n[i]),s)return s;return s=$(t.length,n.length),s||(s=$(t[t.length-2],n[n.length-2]),s||$(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&us(n.mutation,s,Ue.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=z()){const s=et();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let a=ts();return i.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=et();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,z()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,s){let i=qe();const a=as(),u=function(){return as()}();return t.forEach((c,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof yt)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),us(f.mutation,h,f.mutation.getFieldMask(),ce.now())):a.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return u.set(h,new xI(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(e,t){const n=as();let s=new re((a,u)=>a-u),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Ue.empty();f=u.applyToLocalView(h,f),n.set(c,f);const g=(s.get(u.batchId)||z()).add(c);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,g=Tf();f.forEach(_=>{if(!i.has(_)){const R=Sf(t.get(_),n.get(_));R!==null&&g.set(_,R),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):w.resolve(et());let u=rr,c=i;return a.next(h=>w.forEach(h,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,z())).next(f=>({batchId:u,changes:If(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(n=>{let s=ts();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let a=ts();return this.indexManager.getCollectionParents(e,i).next(u=>w.forEach(u,c=>{const h=function(g,_){return new pt(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ie.newInvalidDocument(f)))});let u=ts();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&us(f.mutation,h,Ue.empty(),ce.now()),Os(t,h)&&(u=u.insert(c,h))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return w.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ge(s.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:Eu(s.bundledQuery),readTime:ge(s.readTime)}}(t)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.overlays=new re(M.comparator),this.Rr=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=et();return w.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Et(e,t,i)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Rr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const s=et(),i=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new re((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=et(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=et(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=s)););return w.resolve(u)}Et(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(n.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new _u(t,n));let i=this.Rr.get(t);i===void 0&&(i=z(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.Vr=new ee(Ie.mr),this.gr=new ee(Ie.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.wr(new Ie(e,t))}br(e,t){e.forEach(n=>this.removeReference(n,t))}Sr(e){const t=new M(new G([])),n=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.gr.forEachInRange([n,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new M(new G([])),n=new Ie(t,e),s=new Ie(t,e+1);let i=z();return this.gr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ie(e,0),n=this.Vr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return M.comparator(e.key,t.key)||$(e.Cr,t.Cr)}static pr(e,t){return $(e.Cr,t.Cr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ee(Ie.mr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new gu(i,t,n,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new Ie(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(e,t){return w.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Nr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?kt:this.Fr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,s],a=>{const u=this.Or(a.Cr);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee($);return t.forEach(s=>{const i=new Ie(s,0),a=new Ie(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],u=>{n=n.add(u.Cr)})}),w.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const a=new Ie(new M(i),0);let u=new ee($);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.Cr)),!0)},a),w.resolve(this.Br(u))}Br(e){const t=[];return e.forEach(n=>{const s=this.Or(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){L(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return w.forEach(t.mutations,s=>{const i=new Ie(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){const n=new Ie(t,0),s=this.Mr.firstAfterOrEqual(n);return w.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.kr=e,this.docs=function(){return new re(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ie.newInvalidDocument(t))}getEntries(e,t){let n=qe();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ie.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=qe();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||nu(Od(f),n)<=0||(s.has(f.key)||Os(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(e,t,n,s){F()}qr(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new LI(this)}getSize(e){return w.resolve(this.size)}}class LI extends tm{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.persistence=e,this.Qr=new _t(t=>In(t),Ns),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Au,this.targetCount=0,this.Ur=An.Kn()}forEachTarget(e,t){return this.Qr.forEach((n,s)=>t(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),w.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new An(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.zn(t),w.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.Kr.br(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Kr.vr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Be(0),this.zr=!1,this.zr=!0,this.jr=new OI,this.referenceDelegate=e(this),this.Hr=new BI(this),this.indexManager=new wI,this.remoteDocumentCache=function(s){return new FI(s)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Gf(t),this.Yr=new NI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new MI(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const s=new UI(this.Gr.next());return this.referenceDelegate.Zr(),n(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,t){return w.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}}class UI extends Fd{constructor(e){super(),this.currentSequenceNumber=e}}class go{constructor(e){this.persistence=e,this.ti=new Au,this.ni=null}static ri(e){return new go(e)}get ii(){if(this.ni)return this.ni;throw F()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),w.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(s=>this.ii.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.ii,n=>{const s=M.fromPath(n);return this.si(e,s).next(i=>{i||t.removeEntry(s,B.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(n=>{n?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return w.or([()=>w.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Qi{constructor(e,t){this.persistence=e,this.oi=new _t(n=>xe(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=em(this,t)}static ri(e,t){return new Qi(e,t)}Zr(){}Xr(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}rr(e,t){return w.forEach(this.oi,(n,s)=>this.ar(e,n,s).next(i=>i?w.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,t).next(u=>{u||(n++,i.removeEntry(a,B.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),w.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ai(e.data.value)),t}ar(e,t,n){return w.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.serializer=e}B(e,t,n,s){const i=new ro("createOrUpgrade",t);n<1&&s>=1&&(function(c){c.createObjectStore(xs)}(e),function(c){c.createObjectStore(gs,{keyPath:ey}),c.createObjectStore(We,{keyPath:Ll,autoIncrement:!0}).createIndex(fn,Bl,{unique:!0}),c.createObjectStore(sr)}(e),Sh(e),function(c){c.createObjectStore(an)}(e));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(c){c.deleteObjectStore(or),c.deleteObjectStore(ir),c.deleteObjectStore(pn)}(e),Sh(e)),a=a.next(()=>function(c){const h=c.store(pn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put(Fi,f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store(We).G().next(g=>{c.deleteObjectStore(We),c.createObjectStore(We,{keyPath:Ll,autoIncrement:!0}).createIndex(fn,Bl,{unique:!0});const _=h.store(We),R=g.map(V=>_.put(V));return w.waitFor(R)})}(e,i))),a=a.next(()=>{(function(c){c.createObjectStore(ar,{keyPath:cy})})(e)})),n<5&&s>=5&&(a=a.next(()=>this._i(i))),n<6&&s>=6&&(a=a.next(()=>(function(c){c.createObjectStore(ps)}(e),this.ai(i)))),n<7&&s>=7&&(a=a.next(()=>this.ui(i))),n<8&&s>=8&&(a=a.next(()=>this.ci(e,i))),n<9&&s>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(a=a.next(()=>this.li(i))),n<11&&s>=11&&(a=a.next(()=>{(function(c){c.createObjectStore(so,{keyPath:ly})})(e),function(c){c.createObjectStore(io,{keyPath:hy})}(e)})),n<12&&s>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore(oo,{keyPath:yy});h.createIndex(wa,Iy,{unique:!1}),h.createIndex(Gd,Ty,{unique:!1})})(e)})),n<13&&s>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore(Mi,{keyPath:ny});h.createIndex(vi,ry),h.createIndex(qd,sy)}(e)).next(()=>this.hi(e,i)).next(()=>e.deleteObjectStore(an))),n<14&&s>=14&&(a=a.next(()=>this.Pi(e,i))),n<15&&s>=15&&(a=a.next(()=>function(c){c.createObjectStore(iu,{keyPath:dy,autoIncrement:!0}).createIndex(va,fy,{unique:!1}),c.createObjectStore(Li,{keyPath:my}).createIndex(jd,gy,{unique:!1}),c.createObjectStore(Bi,{keyPath:py}).createIndex(zd,_y,{unique:!1})}(e))),n<16&&s>=16&&(a=a.next(()=>{t.objectStore(Li).clear()}).next(()=>{t.objectStore(Bi).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(c){c.createObjectStore(ou,{keyPath:Ey})})(e)})),a}ai(e){let t=0;return e.store(an).Z((n,s)=>{t+=Ki(s)}).next(()=>{const n={byteSize:t};return e.store(ps).put(Ea,n)})}_i(e){const t=e.store(gs),n=e.store(We);return t.G().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,kt],[i.userId,i.lastAcknowledgedBatchId]);return n.G(fn,a).next(u=>w.forEach(u,c=>{L(c.userId===i.userId);const h=cn(this.serializer,c);return Yf(e,i.userId,h).next(()=>{})}))}))}ui(e){const t=e.store(or),n=e.store(an);return e.store(pn).get(Fi).next(s=>{const i=[];return n.Z((a,u)=>{const c=new G(a),h=function(g){return[0,xe(g)]}(c);i.push(t.get(h).next(f=>f?w.resolve():(g=>t.put({targetId:0,path:xe(g),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(i))})}ci(e,t){e.createObjectStore(_s,{keyPath:uy});const n=t.store(_s),s=new wu,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:xe(c)})}};return t.store(an).Z({Y:!0},(a,u)=>{const c=new G(a);return i(c.popLast())}).next(()=>t.store(sr).Z({Y:!0},([a,u,c],h)=>{const f=Ze(u);return i(f.popLast())}))}li(e){const t=e.store(ir);return t.Z((n,s)=>{const i=rs(s),a=Kf(this.serializer,i);return t.put(a)})}hi(e,t){const n=t.store(an),s=[];return n.Z((i,a)=>{const u=t.store(Mi),c=function(g){return g.document?new M(G.fromString(g.document.name).popFirst(5)):g.noDocument?M.fromSegments(g.noDocument.path):g.unknownDocument?M.fromSegments(g.unknownDocument.path):F()}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(h))}).next(()=>w.waitFor(s))}Pi(e,t){const n=t.store(We),s=nm(this.serializer),i=new bu(go.ri,this.serializer.Tt);return n.G().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:z();cn(this.serializer,c).keys().forEach(g=>f=f.add(g)),u.set(c.userId,f)}),w.forEach(u,(c,h)=>{const f=new Te(h),g=fo.It(this.serializer,f),_=i.getIndexManager(f),R=mo.It(f,this.serializer,_,i.referenceDelegate);return new rm(s,R,g,_).recalculateAndSaveOverlaysForDocumentKeys(new Aa(t,Be.ae),c).next()})})}}function Sh(r){r.createObjectStore(or,{keyPath:oy}).createIndex(su,ay,{unique:!0}),r.createObjectStore(ir,{keyPath:"targetId"}).createIndex($d,iy,{unique:!0}),r.createObjectStore(pn)}const Rt="IndexedDbPersistence",ua=18e5,ca=5e3,la="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",sm="main";class Ru{constructor(e,t,n,s,i,a,u,c,h,f,g=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ti=i,this.window=a,this.document=u,this.Ii=h,this.Ei=f,this.di=g,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=_=>Promise.resolve(),!Ru.D())throw new C(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new VI(this,s),this.gi=t+sm,this.serializer=new Gf(c),this.pi=new nt(this.gi,this.di,new qI(this.serializer)),this.jr=new _I,this.Hr=new bI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=nm(this.serializer),this.Yr=new pI,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,f===!1&&me(Rt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,la);return this.bi(),this.Si(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new Be(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>_i(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(Wt(e))return D(Rt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(Rt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return Zr(e).get(Mn).next(t=>w.resolve(this.Ni(t)))}Bi(e){return _i(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,ua)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ye(t,ar);return n.G().next(s=>{const i=this.qi(s,ua),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?w.resolve(!0):Zr(e).get(Mn).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,ca)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,la);return!1}}return!(!this.networkEnabled||!this.inForeground)||_i(e).G().next(n=>this.qi(n,ca).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D(Rt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[xs,ar],e=>{const t=new Aa(e,Be.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(n=>this.ki(n.updateTimeMs,t)&&!this.$i(n.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>_i(e).G().next(t=>this.qi(t,ua).map(n=>n.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return mo.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new AI(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return fo.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,n){D(Rt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===17?Ay:c===16?wy:c===15?au:c===14?Wd:c===13?Qd:c===12?vy:c===11?Kd:void F()}(this.di);let a;return this.pi.runTransaction(e,s,i,u=>(a=new Aa(u,this.Gr?this.Gr.next():Be.ae),t==="readwrite-primary"?this.Fi(a).next(c=>!!c||this.Mi(a)).next(c=>{if(!c)throw me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new C(S.FAILED_PRECONDITION,Md);return n(a)}).next(c=>this.Oi(a).next(()=>c)):this.ji(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}ji(e){return Zr(e).get(Mn).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,ca)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(S.FAILED_PRECONDITION,la)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Zr(e).put(Mn,t)}static D(){return nt.D()}xi(e){const t=Zr(e);return t.get(Mn).next(n=>this.Ni(n)?(D(Rt,"Releasing primary lease."),t.delete(Mn)):w.resolve())}ki(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(me(`Detected an update time that is in the future: ${e} > ${n}`),!1))}bi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}Si(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ki();const t=/(?:Version|Mobile)\/1[456]/;ld()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const n=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return D(Rt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return me(Rt,"Failed to get zombied client id.",n),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){me("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Zr(r){return ye(r,xs)}function _i(r){return ye(r,ar)}function Su(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=s}static Yi(e,t){let n=z(),s=z();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pu(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ld()?8:Ld(xi())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.rs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,t,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new $I;return this._s(e,t,a).next(u=>{if(i.result=u,this.Xi)return this.us(e,t,a,u.size)})}).next(()=>i.result)}us(e,t,n,s){return n.documentReadCount<this.es?($n()<=Q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),w.resolve()):($n()<=Q.DEBUG&&D("QueryEngine","Query:",jn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ts*s?($n()<=Q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):w.resolve())}rs(e,t){if(Xl(t))return w.resolve(null);let n=Fe(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ji(t,null,"F"),n=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const a=z(...i);return this.ns.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.cs(t,u);return this.ls(t,h,a,c.readTime)?this.rs(e,ji(t,null,"F")):this.hs(e,h,t,c)}))})))}ss(e,t,n,s){return Xl(t)||s.isEqual(B.min())?w.resolve(null):this.ns.getDocuments(e,n).next(i=>{const a=this.cs(t,i);return this.ls(t,a,n,s)?w.resolve(null):($n()<=Q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.hs(e,a,t,kd(s,rr)).next(u=>u))})}cs(e,t){let n=new ee(_f(e));return t.forEach((s,i)=>{Os(e,i)&&(n=n.add(i))}),n}ls(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,t,n){return $n()<=Q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",jn(t)),this.ns.getDocumentsMatchingQuery(e,t,ze.min(),n)}hs(e,t,n,s){return this.ns.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LocalStore",jI=3e8;class zI{constructor(e,t,n,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new re($),this.Is=new _t(i=>In(i),Ns),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rm(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function om(r,e,t,n){return new zI(r,e,t,n)}async function am(r,e){const t=O(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.As(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let c=z();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:u}))})})}function GI(r,e){const t=O(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.ds.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const g=h.batch,_=g.keys();let R=w.resolve();return _.forEach(V=>{R=R.next(()=>f.getEntry(c,V)).next(N=>{const x=h.docVersions.get(V);L(x!==null),N.version.compareTo(x)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=z();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function um(r){const e=O(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function KI(r,e){const t=O(r),n=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const u=[];e.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;u.push(t.Hr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Hr.addMatchingKeys(i,f.addedDocuments,g)));let R=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(de.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),s=s.insert(g,R),function(N,x,q){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=jI?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(_,R,f)&&u.push(t.Hr.updateTargetData(i,R))});let c=qe(),h=z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push(cm(i,a,e.documentUpdates).next(f=>{c=f.Vs,h=f.fs})),!n.isEqual(B.min())){const f=t.Hr.getLastRemoteSnapshotVersion(i).next(g=>t.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ts=s,i))}function cm(r,e,t){let n=z(),s=z();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let a=qe();return t.forEach((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):D(Vu,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function QI(r,e){const t=O(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=kt),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function mr(r,e){const t=O(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Hr.getTargetData(n,e).next(i=>i?(s=i,w.resolve(s)):t.Hr.allocateTargetId(n).next(a=>(s=new ht(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Hr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ts.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(n.targetId,n),t.Is.set(e,n.targetId)),n})}async function gr(r,e,t){const n=O(r),s=n.Ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Wt(a))throw a;D(Vu,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ts=n.Ts.remove(e),n.Is.delete(s.target)}function Wi(r,e,t){const n=O(r);let s=B.min(),i=z();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=O(c),_=g.Is.get(f);return _!==void 0?w.resolve(g.Ts.get(_)):g.Hr.getTargetData(h,f)}(n,a,Fe(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,u.targetId).next(c=>{i=c})}).next(()=>n.Ps.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?i:z())).next(u=>(dm(n,pf(e),u),{documents:u,gs:i})))}function lm(r,e){const t=O(r),n=O(t.Hr),s=t.Ts.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.lt(i,e).next(a=>a?a.target:null))}function hm(r,e){const t=O(r),n=t.Es.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.ds.getAllFromCollectionGroup(s,e,kd(n,rr),Number.MAX_SAFE_INTEGER)).then(s=>(dm(t,e,s),s))}function dm(r,e,t){let n=r.Es.get(e)||B.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.Es.set(e,n)}async function WI(r,e,t,n){const s=O(r);let i=z(),a=qe();for(const h of t){const f=e.ps(h.metadata.name);h.document&&(i=i.add(f));const g=e.ys(h);g.setReadTime(e.ws(h.metadata.readTime)),a=a.insert(f,g)}const u=s.ds.newChangeBuffer({trackRemovals:!0}),c=await mr(s,function(f){return Fe(vr(G.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",h=>cm(h,u,a).next(f=>(u.apply(h),f)).next(f=>s.Hr.removeMatchingKeysForTargetId(h,c.targetId).next(()=>s.Hr.addMatchingKeys(h,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(h,f.Vs,f.fs)).next(()=>f.Vs)))}async function HI(r,e,t=z()){const n=await mr(r,Fe(Eu(e.bundledQuery))),s=O(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=ge(e.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.Yr.saveNamedQuery(i,e);const u=n.withResumeToken(de.EMPTY_BYTE_STRING,a);return s.Ts=s.Ts.insert(u.targetId,u),s.Hr.updateTargetData(i,u).next(()=>s.Hr.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Hr.addMatchingKeys(i,t,n.targetId)).next(()=>s.Yr.saveNamedQuery(i,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="firestore_clients";function Ph(r,e){return`${fm}_${r}_${e}`}const mm="firestore_mutations";function Vh(r,e,t){let n=`${mm}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const gm="firestore_targets";function ha(r,e){return`${gm}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="SharedClientState";class Hi{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static bs(e,t,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new C(s.error.code,s.error.message))),a?new Hi(e,t,s.state,i):(me(Xe,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ss(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static bs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new C(n.error.code,n.error.message))),i?new cs(e,n.state,s):(me(Xe,`Failed to parse target state for ID '${e}': ${t}`),null)}Ss(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static bs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=du();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=Bd(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Yi(e,i):(me(Xe,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Cu{constructor(e,t){this.clientId=e,this.onlineState=t}static bs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Cu(t.clientId,t.onlineState):(me(Xe,`Failed to parse online state: ${e}`),null)}}class La{constructor(){this.activeTargetIds=du()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class da{constructor(e,t,n,s,i){this.window=e,this.Ti=t,this.persistenceKey=n,this.Cs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new re($),this.started=!1,this.Os=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ns=Ph(this.persistenceKey,this.Cs),this.Bs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new La),this.Ls=new RegExp(`^${fm}_${a}_([^_]*)$`),this.ks=new RegExp(`^${mm}_${a}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${gm}_${a}_(\\d+)$`),this.Qs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.$s=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const n of e){if(n===this.Cs)continue;const s=this.getItem(Ph(this.persistenceKey,n));if(s){const i=Yi.bs(n,s);i&&(this.xs=this.xs.insert(i.clientId,i))}}this.Ks();const t=this.storage.getItem(this.Qs);if(t){const n=this.Us(t);n&&this.Ws(n)}for(const n of this.Os)this.Ms(n);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,n){this.zs(e,t,n),this.js(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ha(this.persistenceKey,e));if(s){const i=cs.bs(e,s);i&&(n=i.state)}}return t&&this.Hs.Ds(e),this.Ks(),n}removeLocalQueryTarget(e){this.Hs.vs(e),this.Ks()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ha(this.persistenceKey,e))}updateQueryState(e,t,n){this.Js(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.js(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D(Xe,"READ",e,t),t}setItem(e,t){D(Xe,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(Xe,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(D(Xe,"EVENT",t.key,t.newValue),t.key===this.Ns)return void me("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const n=this.Xs(t.key);return this.eo(n,null)}{const n=this.no(t.key,t.newValue);if(n)return this.eo(n.clientId,n)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const n=this.ro(t.key,t.newValue);if(n)return this.io(n)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const n=this.so(t.key,t.newValue);if(n)return this.oo(n)}}else if(t.key===this.Qs){if(t.newValue!==null){const n=this.Us(t.newValue);if(n)return this.Ws(n)}}else if(t.key===this.Bs){const n=function(i){let a=Be.ae;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){me(Xe,"Failed to read sequence number from WebStorage",u)}return a}(t.newValue);n!==Be.ae&&this.sequenceNumberHandler(n)}else if(t.key===this.$s){const n=this._o(t.newValue);await Promise.all(n.map(s=>this.syncEngine.ao(s)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Ks(){this.setItem(this.Ns,this.Hs.Ss())}zs(e,t,n){const s=new Hi(this.currentUser,e,t,n),i=Vh(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ss())}js(e){const t=Vh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,n){const s=ha(this.persistenceKey,e),i=new cs(e,t,n);this.setItem(s,i.Ss())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const n=this.Xs(e);return Yi.bs(n,t)}ro(e,t){const n=this.ks.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Hi.bs(new Te(i),s,t)}so(e,t){const n=this.qs.exec(e),s=Number(n[1]);return cs.bs(s,t)}Us(e){return Cu.bs(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);D(Xe,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const n=t?this.xs.insert(e,t):this.xs.remove(e),s=this.Gs(this.xs),i=this.Gs(n),a=[],u=[];return i.forEach(c=>{s.has(c)||a.push(c)}),s.forEach(c=>{i.has(c)||u.push(c)}),this.syncEngine.lo(a,u).then(()=>{this.xs=n})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=du();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class pm{constructor(){this.ho=new La,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new La,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="ConnectivityMonitor";class Dh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){D(Ch,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){D(Ch,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi=null;function Ba(){return yi===null?yi=function(){return 268435456+Math.round(2147483648*Math.random())}():yi++,"0x"+yi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="RestConnection",JI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class XI{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${s}`,this.wo=this.databaseId.database===Ui?`project_id=${n}`:`project_id=${n}&database_id=${s}`}bo(e,t,n,s,i){const a=Ba(),u=this.So(e,t.toUriEncodedString());D(fa,`Sending RPC '${e}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,u,c,n).then(h=>(D(fa,`Received RPC '${e}' ${a}: `,h),h),h=>{throw st(fa,`RPC '${e}' ${a} failed with error: `,h,"url: ",u,"request:",n),h})}Co(e,t,n,s,i,a){return this.bo(e,t,n,s,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Er}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s)}So(e,t){const n=JI[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection";class eT extends XI{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,s){const i=Ba();return new Promise((a,u)=>{const c=new Rd;c.setWithCredentials(!0),c.listenOnce(Sd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ii.NO_ERROR:const f=c.getResponseJson();D(Ce,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ii.TIMEOUT:D(Ce,`RPC '${e}' ${i} timed out`),u(new C(S.DEADLINE_EXCEEDED,"Request time out"));break;case Ii.HTTP_ERROR:const g=c.getStatus();if(D(Ce,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const V=function(x){const q=x.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(R.status);u(new C(V,R.message))}else u(new C(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new C(S.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{D(Ce,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);D(Ce,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,n,15)})}Wo(e,t,n){const s=Ba(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Cd(),u=Vd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=i.join("");D(Ce,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let _=!1,R=!1;const V=new ZI({Fo:x=>{R?D(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(_||(D(Ce,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),D(Ce,`RPC '${e}' stream ${s} sending:`,x),g.send(x))},Mo:()=>g.close()}),N=(x,q,j)=>{x.listen(q,U=>{try{j(U)}catch(X){setTimeout(()=>{throw X},0)}})};return N(g,es.EventType.OPEN,()=>{R||(D(Ce,`RPC '${e}' stream ${s} transport opened.`),V.Qo())}),N(g,es.EventType.CLOSE,()=>{R||(R=!0,D(Ce,`RPC '${e}' stream ${s} transport closed`),V.Ko())}),N(g,es.EventType.ERROR,x=>{R||(R=!0,st(Ce,`RPC '${e}' stream ${s} transport errored:`,x),V.Ko(new C(S.UNAVAILABLE,"The operation could not be completed")))}),N(g,es.EventType.MESSAGE,x=>{var q;if(!R){const j=x.data[0];L(!!j);const U=j,X=(U==null?void 0:U.error)||((q=U[0])===null||q===void 0?void 0:q.error);if(X){D(Ce,`RPC '${e}' stream ${s} received error:`,X);const ne=X.status;let H=function(I){const E=pe[I];if(E!==void 0)return Cf(E)}(ne),T=X.message;H===void 0&&(H=S.INTERNAL,T="Unknown error status: "+ne+" with message "+X.message),R=!0,V.Ko(new C(H,T)),g.close()}else D(Ce,`RPC '${e}' stream ${s} received:`,j),V.Uo(j)}}),N(u,Pd.STAT_EVENT,x=>{x.stat===Ia.PROXY?D(Ce,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Ia.NOPROXY&&D(Ce,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){return typeof window<"u"?window:null}function Pi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(r){return new sI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="PersistentStream";class ym{constructor(e,t,n,s,i,a,u,c){this.Ti=e,this.n_=n,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Du(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(me(t.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.i_===t&&this.V_(n,s)},n=>{e(()=>{const s=new C(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(s)})})}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{n(()=>this.m_(s))}),this.stream.onMessage(s=>{n(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return D(xh,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(D(xh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tT extends ym{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=aI(this.serializer,e),n=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?ge(a.readTime):B.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=Na(this.serializer),t.addTarget=function(i,a){let u;const c=a.target;if(u=qi(c)?{documents:Uf(i,c)}:{query:Tu(i,c).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=kf(i,a.resumeToken);const h=Da(i,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=fr(i,a.snapshotVersion.toTimestamp());const h=Da(i,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const n=lI(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=Na(this.serializer),t.removeTarget=e,this.I_(t)}}class nT extends ym{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return L(!!e.streamToken),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){L(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=uI(e.writeResults,e.commitTime),n=ge(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=Na(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>ws(this.serializer,n))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{}class sT extends rT{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(e,xa(t,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(S.UNKNOWN,i.toString())})}Co(e,t,n,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(e,xa(t,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(S.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class iT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(me(t),this.N_=!1):D("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="RemoteStore";class oT{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{n.enqueueAndForget(async()=>{Yt(this)&&(D(bn,"Restarting streams for network reachability change."),await async function(c){const h=O(c);h.W_.add(4),await br(h),h.j_.set("Unknown"),h.W_.delete(4),await Us(h)}(this))})}),this.j_=new iT(n,s)}}async function Us(r){if(Yt(r))for(const e of r.G_)await e(!0)}async function br(r){for(const e of r.G_)await e(!1)}function po(r,e){const t=O(r);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),ku(t)?Nu(t):Sr(t).c_()&&xu(t,e))}function pr(r,e){const t=O(r),n=Sr(t);t.U_.delete(e),n.c_()&&Im(t,e),t.U_.size===0&&(n.c_()?n.P_():Yt(t)&&t.j_.set("Unknown"))}function xu(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sr(r).y_(e)}function Im(r,e){r.H_.Ne(e),Sr(r).w_(e)}function Nu(r){r.H_=new eI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.U_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Sr(r).start(),r.j_.B_()}function ku(r){return Yt(r)&&!Sr(r).u_()&&r.U_.size>0}function Yt(r){return O(r).W_.size===0}function Tm(r){r.H_=void 0}async function aT(r){r.j_.set("Online")}async function uT(r){r.U_.forEach((e,t)=>{xu(r,e)})}async function cT(r,e){Tm(r),ku(r)?(r.j_.q_(e),Nu(r)):r.j_.set("Unknown")}async function lT(r,e,t){if(r.j_.set("Online"),e instanceof Nf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.U_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.U_.delete(u),s.H_.removeTarget(u))}(r,e)}catch(n){D(bn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ji(r,n)}else if(e instanceof Si?r.H_.We(e):e instanceof xf?r.H_.Ze(e):r.H_.je(e),!t.isEqual(B.min()))try{const n=await um(r.localStore);t.compareTo(n)>=0&&await function(i,a){const u=i.H_.ot(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.U_.get(h);f&&i.U_.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=i.U_.get(c);if(!f)return;i.U_.set(c,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),Im(i,c);const g=new ht(f.target,c,h,f.sequenceNumber);xu(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){D(bn,"Failed to raise snapshot:",n),await Ji(r,n)}}async function Ji(r,e,t){if(!Wt(e))throw e;r.W_.add(1),await br(r),r.j_.set("Offline"),t||(t=()=>um(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D(bn,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await Us(r)})}function Em(r,e){return e().catch(t=>Ji(r,t,e))}async function Rr(r){const e=O(r),t=jt(e);let n=e.K_.length>0?e.K_[e.K_.length-1].batchId:kt;for(;hT(e);)try{const s=await QI(e.localStore,n);if(s===null){e.K_.length===0&&t.P_();break}n=s.batchId,dT(e,s)}catch(s){await Ji(e,s)}vm(e)&&wm(e)}function hT(r){return Yt(r)&&r.K_.length<10}function dT(r,e){r.K_.push(e);const t=jt(r);t.c_()&&t.b_&&t.S_(e.mutations)}function vm(r){return Yt(r)&&!jt(r).u_()&&r.K_.length>0}function wm(r){jt(r).start()}async function fT(r){jt(r).C_()}async function mT(r){const e=jt(r);for(const t of r.K_)e.S_(t.mutations)}async function gT(r,e,t){const n=r.K_.shift(),s=pu.from(n,e,t);await Em(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Rr(r)}async function pT(r,e){e&&jt(r).b_&&await async function(n,s){if(function(a){return Vf(a)&&a!==S.ABORTED}(s.code)){const i=n.K_.shift();jt(n).h_(),await Em(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Rr(n)}}(r,e),vm(r)&&wm(r)}async function Nh(r,e){const t=O(r);t.asyncQueue.verifyOperationInProgress(),D(bn,"RemoteStore received new credentials");const n=Yt(t);t.W_.add(3),await br(t),n&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Us(t)}async function Ua(r,e){const t=O(r);e?(t.W_.delete(2),await Us(t)):e||(t.W_.add(2),await br(t),t.j_.set("Unknown"))}function Sr(r){return r.J_||(r.J_=function(t,n,s){const i=O(t);return i.M_(),new tT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{xo:aT.bind(null,r),No:uT.bind(null,r),Lo:cT.bind(null,r),p_:lT.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),ku(r)?Nu(r):r.j_.set("Unknown")):(await r.J_.stop(),Tm(r))})),r.J_}function jt(r){return r.Y_||(r.Y_=function(t,n,s){const i=O(t);return i.M_(),new nT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:fT.bind(null,r),Lo:pT.bind(null,r),D_:mT.bind(null,r),v_:gT.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await Rr(r)):(await r.Y_.stop(),r.K_.length>0&&(D(bn,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const a=Date.now()+n,u=new Ou(e,t,a,s,i);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pr(r,e){if(me("AsyncQueue",`${e}: ${r}`),Wt(r))return new C(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{static emptySet(e){return new Wn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=ts(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Wn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.Z_=new re(M.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?e.type!==0&&n.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&n.type!==1?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Z_=this.Z_.remove(t):e.type===1&&n.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):F():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class _r{constructor(e,t,n,s,i,a,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new _r(e,t,Wn.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class yT{constructor(){this.queries=Oh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,n){const s=O(t),i=s.queries;s.queries=Oh(),i.forEach((a,u)=>{for(const c of u.ta)c.onError(n)})})(this,new C(S.ABORTED,"Firestore shutting down"))}}function Oh(){return new _t(r=>gf(r),ks)}async function Mu(r,e){const t=O(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.na()&&e.ra()&&(n=2):(i=new _T,n=e.ra()?0:1);try{switch(n){case 0:i.ea=await t.onListen(s,!0);break;case 1:i.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Pr(a,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.ta.push(e),e.sa(t.onlineState),i.ea&&e.oa(i.ea)&&Lu(t)}async function Fu(r,e){const t=O(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function IT(r,e){const t=O(r);let n=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.ta)u.oa(s)&&(n=!0);a.ea=s}}n&&Lu(t)}function TT(r,e,t){const n=O(r),s=n.queries.get(e);if(s)for(const i of s.ta)i.onError(t);n.queries.delete(e)}function Lu(r){r.ia.forEach(e=>{e.next()})}var qa,Mh;(Mh=qa||(qa={}))._a="default",Mh.Cache="cache";class Bu{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new _r(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const n=t!=="Offline";return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=_r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==qa.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.serializer=e}ps(e){return rt(this.serializer,e)}ys(e){return e.metadata.exists?Bf(this.serializer,e.document,!1):ie.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return ge(e)}}class vT{constructor(e,t,n){this.da=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Am(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const n=G.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,n=new Fh(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.ps(s.metadata.name);for(const a of s.metadata.queries){const u=(t.get(a)||z()).add(i);t.set(a,u)}}return t}async complete(){const e=await WI(this.localStore,new Fh(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const n of this.queries)await HI(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function Am(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.key=e}}class Rm{constructor(e){this.key=e}}class Sm{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=z(),this.mutatedKeys=z(),this.ya=_f(e),this.wa=new Wn(this.ya)}get ba(){return this.fa}Sa(e,t){const n=t?t.Da:new kh,s=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const _=s.get(f),R=Os(this.query,g)?g:null,V=!!_&&this.mutatedKeys.has(_.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;_&&R?_.data.isEqual(R.data)?V!==N&&(n.track({type:3,doc:R}),x=!0):this.va(_,R)||(n.track({type:2,doc:R}),x=!0,(c&&this.ya(R,c)>0||h&&this.ya(R,h)<0)&&(u=!0)):!_&&R?(n.track({type:0,doc:R}),x=!0):_&&!R&&(n.track({type:1,doc:_}),x=!0,(c||h)&&(u=!0)),x&&(R?(a=a.add(R),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{wa:a,Da:n,ls:u,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,g)=>function(R,V){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return N(R)-N(V)}(f.type,g.type)||this.ya(f.doc,g.doc)),this.Ca(n),s=s!=null&&s;const u=t&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new _r(this.query,e.wa,i,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new kh,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=z(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const t=[];return e.forEach(n=>{this.pa.has(n)||t.push(new Rm(n))}),this.pa.forEach(n=>{e.has(n)||t.push(new bm(n))}),t}Oa(e){this.fa=e.gs,this.pa=z();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return _r.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Jt="SyncEngine";class wT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class AT{constructor(e){this.key=e,this.Ba=!1}}class bT{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new _t(u=>gf(u),ks),this.qa=new Map,this.Qa=new Set,this.$a=new re(M.comparator),this.Ka=new Map,this.Ua=new Au,this.Wa={},this.Ga=new Map,this.za=An.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function RT(r,e,t=!0){const n=_o(r);let s;const i=n.ka.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Pm(n,e,t,!0),s}async function ST(r,e){const t=_o(r);await Pm(t,e,!0,!1)}async function Pm(r,e,t,n){const s=await mr(r.localStore,Fe(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t);let u;return n&&(u=await Uu(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&po(r.remoteStore,s),u}async function Uu(r,e,t,n,s){r.Ha=(g,_,R)=>async function(N,x,q,j){let U=x.view.Sa(q);U.ls&&(U=await Wi(N.localStore,x.query,!1).then(({documents:T})=>x.view.Sa(T,U)));const X=j&&j.targetChanges.get(x.targetId),ne=j&&j.targetMismatches.get(x.targetId)!=null,H=x.view.applyChanges(U,N.isPrimaryClient,X,ne);return $a(N,x.targetId,H.Ma),H.snapshot}(r,g,_,R);const i=await Wi(r.localStore,e,!0),a=new Sm(e,i.gs),u=a.Sa(i.documents),c=Ls.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=a.applyChanges(u,r.isPrimaryClient,c);$a(r,t,h.Ma);const f=new wT(e,t,a);return r.ka.set(e,f),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),h.snapshot}async function PT(r,e,t){const n=O(r),s=n.ka.get(e),i=n.qa.get(s.targetId);if(i.length>1)return n.qa.set(s.targetId,i.filter(a=>!ks(a,e))),void n.ka.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&pr(n.remoteStore,s.targetId),yr(n,s.targetId)}).catch(Qt)):(yr(n,s.targetId),await gr(n.localStore,s.targetId,!0))}async function VT(r,e){const t=O(r),n=t.ka.get(e),s=t.qa.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),pr(t.remoteStore,n.targetId))}async function CT(r,e,t){const n=zu(r);try{const s=await function(a,u){const c=O(a),h=ce.now(),f=u.reduce((R,V)=>R.add(V.key),z());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let V=qe(),N=z();return c.ds.getEntries(R,f).next(x=>{V=x,V.forEach((q,j)=>{j.isValidDocument()||(N=N.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,V)).next(x=>{g=x;const q=[];for(const j of u){const U=Yy(j,g.get(j.key).overlayedDocument);U!=null&&q.push(new yt(j.key,U,sf(U.value.mapValue),ue.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,q,u)}).next(x=>{_=x;const q=x.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(R,x.batchId,q)})}).then(()=>({batchId:_.batchId,changes:If(g)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new re($)),h=h.insert(u,c),a.Wa[a.currentUser.toKey()]=h}(n,s.batchId,t),await It(n,s.changes),await Rr(n.remoteStore)}catch(s){const i=Pr(s,"Failed to persist write");t.reject(i)}}async function Vm(r,e){const t=O(r);try{const n=await KI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ka.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?L(a.Ba):s.removedDocuments.size>0&&(L(a.Ba),a.Ba=!1))}),await It(t,n,e)}catch(n){await Qt(n)}}function Lh(r,e,t){const n=O(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.ka.forEach((i,a)=>{const u=a.view.sa(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const c=O(a);c.onlineState=u;let h=!1;c.queries.forEach((f,g)=>{for(const _ of g.ta)_.sa(u)&&(h=!0)}),h&&Lu(c)}(n.eventManager,e),s.length&&n.La.p_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function DT(r,e,t){const n=O(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ka.get(e),i=s&&s.key;if(i){let a=new re(M.comparator);a=a.insert(i,ie.newNoDocument(i,B.min()));const u=z().add(i),c=new Fs(B.min(),new Map,new re($),a,u);await Vm(n,c),n.$a=n.$a.remove(i),n.Ka.delete(e),ju(n)}else await gr(n.localStore,e,!1).then(()=>yr(n,e,t)).catch(Qt)}async function xT(r,e){const t=O(r),n=e.batch.batchId;try{const s=await GI(t.localStore,e);$u(t,n,null),qu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await It(t,s)}catch(s){await Qt(s)}}async function NT(r,e,t){const n=O(r);try{const s=await function(a,u){const c=O(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(g=>(L(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);$u(n,e,t),qu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await It(n,s)}catch(s){await Qt(s)}}async function kT(r,e){const t=O(r);Yt(t.remoteStore)||D(Jt,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=O(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(n===kt)return void e.resolve();const s=t.Ga.get(n)||[];s.push(e),t.Ga.set(n,s)}catch(n){const s=Pr(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function qu(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function $u(r,e,t){const n=O(r);let s=n.Wa[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Wa[n.currentUser.toKey()]=s}}function yr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.qa.get(e))r.ka.delete(n),t&&r.La.Ja(n,t);r.qa.delete(e),r.isPrimaryClient&&r.Ua.Sr(e).forEach(n=>{r.Ua.containsKey(n)||Cm(r,n)})}function Cm(r,e){r.Qa.delete(e.path.canonicalString());const t=r.$a.get(e);t!==null&&(pr(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ka.delete(t),ju(r))}function $a(r,e,t){for(const n of t)n instanceof bm?(r.Ua.addReference(n.key,e),OT(r,n)):n instanceof Rm?(D(Jt,"Document no longer in limbo: "+n.key),r.Ua.removeReference(n.key,e),r.Ua.containsKey(n.key)||Cm(r,n.key)):F()}function OT(r,e){const t=e.key,n=t.path.canonicalString();r.$a.get(t)||r.Qa.has(n)||(D(Jt,"New document in limbo: "+t),r.Qa.add(n),ju(r))}function ju(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const t=new M(G.fromString(e)),n=r.za.next();r.Ka.set(n,new AT(t)),r.$a=r.$a.insert(t,n),po(r.remoteStore,new ht(Fe(vr(t.path)),n,"TargetPurposeLimboResolution",Be.ae))}}async function It(r,e,t){const n=O(r),s=[],i=[],a=[];n.ka.isEmpty()||(n.ka.forEach((u,c)=>{a.push(n.Ha(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Pu.Yi(c.targetId,h);i.push(g)}}))}),await Promise.all(a),n.La.p_(s),await async function(c,h){const f=O(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>w.forEach(h,_=>w.forEach(_.Hi,R=>f.persistence.referenceDelegate.addReference(g,_.targetId,R)).next(()=>w.forEach(_.Ji,R=>f.persistence.referenceDelegate.removeReference(g,_.targetId,R)))))}catch(g){if(!Wt(g))throw g;D(Vu,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const R=f.Ts.get(_),V=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(V);f.Ts=f.Ts.insert(_,N)}}}(n.localStore,i))}async function MT(r,e){const t=O(r);if(!t.currentUser.isEqual(e)){D(Jt,"User change. New user:",e.toKey());const n=await am(t.localStore,e);t.currentUser=e,function(i,a){i.Ga.forEach(u=>{u.forEach(c=>{c.reject(new C(S.CANCELLED,a))})}),i.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await It(t,n.Rs)}}function FT(r,e){const t=O(r),n=t.Ka.get(e);if(n&&n.Ba)return z().add(n.key);{let s=z();const i=t.qa.get(e);if(!i)return s;for(const a of i){const u=t.ka.get(a);s=s.unionWith(u.view.ba)}return s}}async function LT(r,e){const t=O(r),n=await Wi(t.localStore,e.query,!0),s=e.view.Oa(n);return t.isPrimaryClient&&$a(t,e.targetId,s.Ma),s}async function BT(r,e){const t=O(r);return hm(t.localStore,e).then(n=>It(t,n))}async function UT(r,e,t,n){const s=O(r),i=await function(u,c){const h=O(u),f=O(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",g=>f.Ln(g,c).next(_=>_?h.localDocuments.getDocuments(g,_):w.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Rr(s.remoteStore):t==="acknowledged"||t==="rejected"?($u(s,e,n||null),qu(s,e),function(u,c){O(O(u).mutationQueue).qn(c)}(s.localStore,e)):F(),await It(s,i)):D(Jt,"Cannot apply mutation batch with id: "+e)}async function qT(r,e){const t=O(r);if(_o(t),zu(t),e===!0&&t.ja!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Bh(t,n.toArray());t.ja=!0,await Ua(t.remoteStore,!0);for(const i of s)po(t.remoteStore,i)}else if(e===!1&&t.ja!==!1){const n=[];let s=Promise.resolve();t.qa.forEach((i,a)=>{t.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(yr(t,a),gr(t.localStore,a,!0))),pr(t.remoteStore,a)}),await s,await Bh(t,n),function(a){const u=O(a);u.Ka.forEach((c,h)=>{pr(u.remoteStore,h)}),u.Ua.Dr(),u.Ka=new Map,u.$a=new re(M.comparator)}(t),t.ja=!1,await Ua(t.remoteStore,!1)}}async function Bh(r,e,t){const n=O(r),s=[],i=[];for(const a of e){let u;const c=n.qa.get(a);if(c&&c.length!==0){u=await mr(n.localStore,Fe(c[0]));for(const h of c){const f=n.ka.get(h),g=await LT(n,f);g.snapshot&&i.push(g.snapshot)}}else{const h=await lm(n.localStore,a);u=await mr(n.localStore,h),await Uu(n,Dm(h),a,!1,u.resumeToken)}s.push(u)}return n.La.p_(i),s}function Dm(r){return ff(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function $T(r){return function(t){return O(O(t).persistence).zi()}(O(r).localStore)}async function jT(r,e,t,n){const s=O(r);if(s.ja)return void D(Jt,"Ignoring unexpected query state notification.");const i=s.qa.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const a=await hm(s.localStore,pf(i[0])),u=Fs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await It(s,a,u);break}case"rejected":await gr(s.localStore,e,!0),yr(s,e,n);break;default:F()}}async function zT(r,e,t){const n=_o(r);if(n.ja){for(const s of e){if(n.qa.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){D(Jt,"Adding an already active target "+s);continue}const i=await lm(n.localStore,s),a=await mr(n.localStore,i);await Uu(n,Dm(i),a.targetId,!1,a.resumeToken),po(n.remoteStore,a)}for(const s of t)n.qa.has(s)&&await gr(n.localStore,s,!1).then(()=>{pr(n.remoteStore,s),yr(n,s)}).catch(Qt)}}function _o(r){const e=O(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DT.bind(null,e),e.La.p_=IT.bind(null,e.eventManager),e.La.Ja=TT.bind(null,e.eventManager),e}function zu(r){const e=O(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NT.bind(null,e),e}function GT(r,e,t){const n=O(r);(async function(i,a,u){try{const c=await a.getMetadata();if(await function(R,V){const N=O(R),x=ge(V.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",q=>N.Yr.getBundleMetadata(q,V.id)).then(q=>!!q&&q.createTime.compareTo(x)>=0)}(i.localStore,c))return await a.close(),u._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(Am(c));const h=new vT(c,i.localStore,a.serializer);let f=await a.Ya();for(;f;){const _=await h.Aa(f);_&&u._updateProgress(_),f=await a.Ya()}const g=await h.complete();return await It(i,g.ma,void 0),await function(R,V){const N=O(R);return N.persistence.runTransaction("Save bundle","readwrite",x=>N.Yr.saveBundleMetadata(x,V))}(i.localStore,c),u._completeWith(g.progress),Promise.resolve(g.Va)}catch(c){return st(Jt,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,e,t).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class As{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bs(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return om(this.persistence,new im,e.initialUser,this.serializer)}Xa(e){return new bu(go.ri,this.serializer)}Za(e){return new pm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}As.provider={build:()=>new As};class KT extends As{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){L(this.persistence.referenceDelegate instanceof Qi);const n=this.persistence.referenceDelegate.garbageCollector;return new Zf(n,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new bu(n=>Qi.ri(n,t),this.serializer)}}class xm extends As{constructor(e,t,n){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await zu(this.ru.syncEngine),await Rr(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return om(this.persistence,new im,e.initialUser,this.serializer)}tu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Zf(n,e.asyncQueue,t)}nu(e,t){const n=new X_(t,this.persistence);return new J_(e.asyncQueue,n)}Xa(e){const t=Su(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new Ru(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,_m(),Pi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new pm}}class QT extends xm{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof da&&(this.sharedClientState.syncEngine={uo:UT.bind(null,t),co:jT.bind(null,t),lo:zT.bind(null,t),zi:$T.bind(null,t),ao:BT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async n=>{await qT(this.ru.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Za(e){const t=_m();if(!da.D(t))throw new C(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Su(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new da(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class bs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Lh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=MT.bind(null,this.syncEngine),await Ua(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yT}()}createDatastore(e){const t=Bs(e.databaseInfo.databaseId),n=function(i){return new eT(i)}(e.databaseInfo);return function(i,a,u,c){return new sT(i,a,u,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,a,u){return new oT(n,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Lh(this.syncEngine,t,0),function(){return Dh.D()?new Dh:new YI}())}createSyncEngine(e,t){return function(s,i,a,u,c,h,f){const g=new bT(s,i,a,u,c,h);return f&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=O(s);D(bn,"RemoteStore shutting down."),i.W_.add(5),await br(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bs.provider={build:()=>new bs};function Uh(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):me("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new Ee,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(n=>{n&&n.Ea()?this.metadata.resolve(n.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ia)}`))},n=>this.metadata.reject(n))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),n=Number(t);isNaN(n)&&this.cu(`length string (${t}) is not valid number`);const s=await this.lu(n);return new ET(JSON.parse(s),e.length+n)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const a=O(s),u={documents:i.map(g=>vs(a.serializer,g))},c=await a.Co("BatchGetDocuments",a.serializer.databaseId,G.emptyPath(),u,i.length),h=new Map;c.forEach(g=>{const _=oI(a.serializer,g);h.set(_.key.toString(),_)});const f=[];return i.forEach(g=>{const _=h.get(g.toString());L(!!_),f.push(_)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ar(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=M.fromPath(n);this.mutations.push(new mu(s,this.precondition(s)))}),await async function(n,s){const i=O(n),a={writes:s.map(u=>ws(i.serializer,u))};await i.bo("Commit",i.serializer.databaseId,G.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F();t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new C(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?ue.exists(!1):ue.updateTime(t):ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new C(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ue.updateTime(t)}return ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Tu=n.maxAttempts,this.a_=new Du(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new HT(this.datastore),t=this.du(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.Au(s)}))}).catch(n=>{this.Au(n)})})}du(e){try{const t=this.updateFunction(e);return!Ds(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Vf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="FirestoreClient";class JT{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Te.UNAUTHENTICATED,this.clientId=xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{D(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(D(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Pr(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ma(r,e){r.asyncQueue.verifyOperationInProgress(),D(zt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await am(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function qh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Gu(r);D(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Nh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Nh(e.remoteStore,s)),r._onlineComponents=e}async function Gu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(zt,"Using user provided OfflineComponentProvider");try{await ma(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;st("Error using user provided cache. Falling back to memory cache: "+t),await ma(r,new As)}}else D(zt,"Using default OfflineComponentProvider"),await ma(r,new KT(void 0));return r._offlineComponents}async function Io(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(zt,"Using user provided OnlineComponentProvider"),await qh(r,r._uninitializedComponentsProvider._online)):(D(zt,"Using default OnlineComponentProvider"),await qh(r,new bs))),r._onlineComponents}function Nm(r){return Gu(r).then(e=>e.persistence)}function Ku(r){return Gu(r).then(e=>e.localStore)}function km(r){return Io(r).then(e=>e.remoteStore)}function Qu(r){return Io(r).then(e=>e.syncEngine)}function Om(r){return Io(r).then(e=>e.datastore)}async function Ir(r){const e=await Io(r),t=e.eventManager;return t.onListen=RT.bind(null,e.syncEngine),t.onUnlisten=PT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ST.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VT.bind(null,e.syncEngine),t}function XT(r){return r.asyncQueue.enqueue(async()=>{const e=await Nm(r),t=await km(r);return e.setNetworkEnabled(!0),function(s){const i=O(s);return i.W_.delete(0),Us(i)}(t)})}function ZT(r){return r.asyncQueue.enqueue(async()=>{const e=await Nm(r),t=await km(r);return e.setNetworkEnabled(!1),async function(s){const i=O(s);i.W_.add(0),await br(i),i.j_.set("Offline")}(t)})}function eE(r,e){const t=new Ee;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(h,f){const g=O(h);return g.persistence.runTransaction("read document","readonly",_=>g.localDocuments.getDocument(_,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new C(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Pr(u,`Failed to get document '${i} from cache`);a.reject(c)}}(await Ku(r),e,t)),t.promise}function Mm(r,e,t={}){const n=new Ee;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new yo({next:_=>{f.su(),a.enqueueAndForget(()=>Fu(i,g));const R=_.docs.has(u);!R&&_.fromCache?h.reject(new C(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&c&&c.source==="server"?h.reject(new C(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Bu(vr(u.path),f,{includeMetadataChanges:!0,Ta:!0});return Mu(i,g)}(await Ir(r),r.asyncQueue,e,t,n)),n.promise}function tE(r,e){const t=new Ee;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await Wi(s,i,!0),c=new Sm(i,u.gs),h=c.Sa(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=Pr(u,`Failed to execute query '${i} against cache`);a.reject(c)}}(await Ku(r),e,t)),t.promise}function Fm(r,e,t={}){const n=new Ee;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,c,h){const f=new yo({next:_=>{f.su(),a.enqueueAndForget(()=>Fu(i,g)),_.fromCache&&c.source==="server"?h.reject(new C(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Bu(u,f,{includeMetadataChanges:!0,Ta:!0});return Mu(i,g)}(await Ir(r),r.asyncQueue,e,t,n)),n.promise}function nE(r,e,t){const n=new Ee;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await Om(r);n.resolve(async function(a,u,c){var h;const f=O(a),{request:g,Pt:_,parent:R}=cI(f.serializer,By(u),c);f.connection.fo||delete g.parent;const V=(await f.Co("RunAggregationQuery",f.serializer.databaseId,R,g,1)).filter(x=>!!x.result);L(V.length===1);const N=(h=V[0].result)===null||h===void 0?void 0:h.aggregateFields;return Object.keys(N).reduce((x,q)=>(x[_[q]]=N[q],x),{})}(s,e,t))}catch(s){n.reject(s)}}),n.promise}function rE(r,e){const t=new yo(e);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){O(s).ia.add(i),i.next()}(await Ir(r),t)),()=>{t.su(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){O(s).ia.delete(i)}(await Ir(r),t))}}function sE(r,e,t,n){const s=function(a,u){let c;return c=typeof a=="string"?Df().encode(a):a,function(f,g){return new WT(f,g)}(function(f,g){if(f instanceof Uint8Array)return Uh(f,g);if(f instanceof ArrayBuffer)return Uh(new Uint8Array(f),g);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(t,Bs(e));r.asyncQueue.enqueueAndForget(async()=>{GT(await Qu(r),s,n)})}function iE(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){const i=O(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.Yr.getNamedQuery(a,s))}(await Ku(r),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(r,e,t){if(!t)throw new C(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Bm(r,e,t,n){if(e===!0&&n===!0)throw new C(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function jh(r){if(!M.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function zh(r){if(M.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function To(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F()}function Y(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=To(r);throw new C(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Um(r,e){if(e<=0)throw new C(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="firestore.googleapis.com",Gh=!0;class Kh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qm,this.ssl=Gh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Gh;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<RI)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qs{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new q_;switch(n.type){case"firstParty":return new G_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=$h.get(t);n&&(D("ComponentProvider","Removing Datastore"),$h.delete(t),n.terminate())}(this),Promise.resolve()}}function $m(r,e,t,n={}){var s;const i=(r=Y(r,qs))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;i.host!==qm&&i.host!==u&&st("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:u,ssl:!1,emulatorOptions:n});if(!Xn(c,a)&&(r._setSettings(c),n.mockUserToken)){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=Te.MOCK_USER;else{h=gp(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Te(g)}r._authCredentials=new $_(new Dd(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le=class jm{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new jm(this.firestore,e,this._query)}},le=class zm{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zm(this.firestore,e,this._key)}},Ot=class Gm extends Le{constructor(e,t,n){super(e,t,vr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new M(e))}withConverter(e){return new Gm(this.firestore,e,this._path)}};function Vr(r,e,...t){if(r=_e(r),Wu("collection","path",e),r instanceof qs){const n=G.fromString(e,...t);return zh(n),new Ot(r,null,n)}{if(!(r instanceof le||r instanceof Ot))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return zh(n),new Ot(r.firestore,null,n)}}function oE(r,e){if(r=Y(r,qs),Wu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Le(r,null,function(n){return new pt(G.emptyPath(),n)}(e))}function Xi(r,e,...t){if(r=_e(r),arguments.length===1&&(e=xd.newId()),Wu("doc","path",e),r instanceof qs){const n=G.fromString(e,...t);return jh(n),new le(r,null,new M(n))}{if(!(r instanceof le||r instanceof Ot))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return jh(n),new le(r.firestore,r instanceof Ot?r.converter:null,new M(n))}}function Km(r,e){return r=_e(r),e=_e(e),(r instanceof le||r instanceof Ot)&&(e instanceof le||e instanceof Ot)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Qm(r,e){return r=_e(r),e=_e(e),r instanceof Le&&e instanceof Le&&r.firestore===e.firestore&&ks(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="AsyncQueue";class Wh{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Du(this,"async_queue_retry"),this.bu=()=>{const n=Pi();n&&D(Qh,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.Su=e;const t=Pi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Pi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ee;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Wt(e))throw e;D(Qh,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(n=>{this.gu=n,this.pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw me("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.pu=!1,n))));return this.Su=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Ou.createAndSchedule(this,e,t,n,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&F()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function ja(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class aE{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ee,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=-1;let fe=class extends qs{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Wh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wh(e),this._firestoreClient=void 0,await e}}};function cE(r,e){const t=typeof r=="object"?r:Td(),n=typeof r=="string"?r:Ui,s=Xa(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=fp("firestore");i&&$m(s,...i)}return s}function be(r){if(r._terminated)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Wm(r),r._firestoreClient}function Wm(r){var e,t,n;const s=r._freezeSettings(),i=function(u,c,h,f){return new Py(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Lm(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new JT(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function lE(r,e){st("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Hm(r,bs.provider,{build:n=>new xm(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function hE(r){st("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();Hm(r,bs.provider,{build:t=>new QT(t,e.cacheSizeBytes)})}function Hm(r,e,t){if((r=Y(r,fe))._firestoreClient||r._terminated)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Wm(r)}function dE(r){if(r._initialized&&!r._terminated)throw new C(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ee;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!nt.D())return Promise.resolve();const s=n+sm;await nt.delete(s)}(Su(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function fE(r){return function(t){const n=new Ee;return t.asyncQueue.enqueueAndForget(async()=>kT(await Qu(t),n)),n.promise}(be(r=Y(r,fe)))}function mE(r){return XT(be(r=Y(r,fe)))}function gE(r){return ZT(be(r=Y(r,fe)))}function pE(r,e){const t=be(r=Y(r,fe)),n=new aE;return sE(t,r._databaseId,e,n),n}function _E(r,e){return iE(be(r=Y(r,fe)),e).then(t=>t?new Le(r,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class IE{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ot(de.fromBase64String(e))}catch(t){throw new C(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ot(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=/^__.*__$/;class EE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new wr(e,this.data,t,this.fieldTransforms)}}class Ym{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new yt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Jm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class vo{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new vo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:n,Qu:!1});return s.$u(e),s}Ku(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:n,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Zi(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Jm(this.Lu)&&TE.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class vE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Bs(e)}ju(e,t,n,s=!1){return new vo({Lu:e,methodName:t,zu:n,path:ae.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vn(r){const e=r._freezeSettings(),t=Bs(r._databaseId);return new vE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function wo(r,e,t,n,s,i={}){const a=r.ju(i.merge||i.mergeFields?2:0,e,t,s);nc("Data must be an object, but it was:",a,n);const u=eg(n,a);let c,h;if(i.merge)c=new Ue(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=za(e,g,t);if(!a.contains(_))throw new C(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);ng(f,_)||f.push(_)}c=new Ue(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new EE(new Ae(u),c,h)}class $s extends Pn{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $s}}function Xm(r,e,t){return new vo({Lu:3,zu:e.settings.zu,methodName:r._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Yu extends Pn{_toFieldTransform(e){return new Ms(e.path,new hr)}isEqual(e){return e instanceof Yu}}class Ju extends Pn{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=Xm(this,e,!0),n=this.Hu.map(i=>Cn(i,t)),s=new Tn(n);return new Ms(e.path,s)}isEqual(e){return e instanceof Ju&&Xn(this.Hu,e.Hu)}}class Xu extends Pn{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=Xm(this,e,!0),n=this.Hu.map(i=>Cn(i,t)),s=new En(n);return new Ms(e.path,s)}isEqual(e){return e instanceof Xu&&Xn(this.Hu,e.Hu)}}class Zu extends Pn{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new dr(e.serializer,vf(e.serializer,this.Ju));return new Ms(e.path,t)}isEqual(e){return e instanceof Zu&&this.Ju===e.Ju}}function ec(r,e,t,n){const s=r.ju(1,e,t);nc("Data must be an object, but it was:",s,n);const i=[],a=Ae.empty();Ht(n,(c,h)=>{const f=rc(e,c,t);h=_e(h);const g=s.Ku(f);if(h instanceof $s)i.push(f);else{const _=Cn(h,g);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ue(i);return new Ym(a,u,s.fieldTransforms)}function tc(r,e,t,n,s,i){const a=r.ju(1,e,t),u=[za(e,n,t)],c=[s];if(i.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(za(e,i[_])),c.push(i[_+1]);const h=[],f=Ae.empty();for(let _=u.length-1;_>=0;--_)if(!ng(h,u[_])){const R=u[_];let V=c[_];V=_e(V);const N=a.Ku(R);if(V instanceof $s)h.push(R);else{const x=Cn(V,N);x!=null&&(h.push(R),f.set(R,x))}}const g=new Ue(h);return new Ym(f,g,a.fieldTransforms)}function Zm(r,e,t,n=!1){return Cn(t,r.ju(n?4:3,e))}function Cn(r,e){if(tg(r=_e(r)))return nc("Unsupported field value:",e,r),eg(r,e);if(r instanceof Pn)return function(n,s){if(!Jm(s.Lu))throw s.Wu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let c=Cn(u,s.Uu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vf(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ce.fromDate(n);return{timestampValue:fr(s.serializer,i)}}if(n instanceof ce){const i=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fr(s.serializer,i)}}if(n instanceof Eo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ot)return{bytesValue:kf(s.serializer,n._byteString)};if(n instanceof le){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iu(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Hu)return function(a,u){return{mapValue:{fields:{[uu]:{stringValue:cu},[ur]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Wu("VectorValues must only contain numeric values.");return fu(u.serializer,h)})}}}}}}(n,s);throw s.Wu(`Unsupported field value: ${To(n)}`)}(r,e)}function eg(r,e){const t={};return Hd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ht(r,(n,s)=>{const i=Cn(s,e.qu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function tg(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof Eo||r instanceof ot||r instanceof le||r instanceof Pn||r instanceof Hu)}function nc(r,e,t){if(!tg(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=To(t);throw n==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+n)}}function za(r,e,t){if((e=_e(e))instanceof Gt)return e._internalPath;if(typeof e=="string")return rc(r,e);throw Zi("Field path arguments must be of type string or ",r,!1,void 0,t)}const wE=new RegExp("[~\\*/\\[\\]]");function rc(r,e,t){if(e.search(wE)>=0)throw Zi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Gt(...e.split("."))._internalPath}catch{throw Zi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Zi(r,e,t,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new C(S.INVALID_ARGUMENT,u+r+c)}function ng(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ao("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AE extends Rs{data(){return super.data()}}function Ao(r,e){return typeof e=="string"?rc(r,e):e instanceof Gt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sc{}class js extends sc{}function Ye(r,e,...t){let n=[];e instanceof sc&&n.push(e),n=n.concat(t),function(i){const a=i.filter(c=>c instanceof ic).length,u=i.filter(c=>c instanceof bo).length;if(a>1||a>0&&u>0)throw new C(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class bo extends js{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new bo(e,t,n)}_apply(e){const t=this._parse(e);return ig(e._query,t),new Le(e.firestore,e.converter,Ca(e._query,t))}_parse(e){const t=Vn(e.firestore);return function(i,a,u,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Yh(g,f);const V=[];for(const N of g)V.push(Hh(c,i,N));_={arrayValue:{values:V}}}else _=Hh(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Yh(g,f),_=Zm(u,a,g,f==="in"||f==="not-in");return K.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function St(r,e,t){const n=e,s=Ao("where",r);return bo._create(s,n,t)}class ic extends sc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ic(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)ig(a,c),a=Ca(a,c)}(e._query,t),new Le(e.firestore,e.converter,Ca(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oc extends js{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new oc(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Es(i,a)}(e._query,this._field,this._direction);return new Le(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new pt(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function bE(r,e="asc"){const t=e,n=Ao("orderBy",r);return oc._create(n,t)}class Ro extends js{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ro(e,t,n)}_apply(e){return new Le(e.firestore,e.converter,ji(e._query,this._limit,this._limitType))}}function RE(r){return Um("limit",r),Ro._create("limit",r,"F")}function SE(r){return Um("limitToLast",r),Ro._create("limitToLast",r,"L")}class So extends js{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new So(e,t,n)}_apply(e){const t=sg(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(s,i){return new pt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function PE(...r){return So._create("startAt",r,!0)}function VE(...r){return So._create("startAfter",r,!1)}class Po extends js{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Po(e,t,n)}_apply(e){const t=sg(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(s,i){return new pt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function CE(...r){return Po._create("endBefore",r,!1)}function DE(...r){return Po._create("endAt",r,!0)}function sg(r,e,t,n){if(t[0]=_e(t[0]),t[0]instanceof Rs)return function(i,a,u,c,h){if(!c)throw new C(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of Qn(i))if(g.field.isKeyField())f.push(yn(a,c.key));else{const _=c.data.field(g.field);if(ao(_))throw new C(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const R=g.field.canonicalString();throw new C(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}f.push(_)}return new $t(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Vn(r.firestore);return function(a,u,c,h,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new C(S.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let V=0;V<f.length;V++){const N=f[V];if(_[V].field.isKeyField()){if(typeof N!="string")throw new C(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof N}`);if(!hu(a)&&N.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${N}' contains a slash.`);const x=a.path.child(G.fromString(N));if(!M.isDocumentKey(x))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const q=new M(x);R.push(yn(u,q))}else{const x=Zm(c,h,N);R.push(x)}}return new $t(R,g)}(r._query,r.firestore._databaseId,s,e,t,n)}}function Hh(r,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new C(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hu(e)&&t.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(G.fromString(t));if(!M.isDocumentKey(n))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return yn(r,new M(n))}if(t instanceof le)return yn(r,t._key);throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${To(t)}.`)}function Yh(r,e){if(!Array.isArray(r)||r.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ig(r,e){const t=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ac{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ht(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t[ur].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new Hu(i)}convertGeoPoint(e){return new Eo(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=uo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ys(e));default:return null}}convertTimestamp(e){const t=ft(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);L(zf(n));const s=new Bt(n.get(1),n.get(3)),i=new M(n.popFirst(5));return s.isEqual(t)||me(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class xE extends ac{constructor(e){super(),this.firestore=e}convertBytes(e){return new ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function NE(){return new yE("count")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let gt=class extends Rs{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ao("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},ls=class extends gt{data(e={}){return super.data(e)}},Kt=class{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new mn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ls(this._firestore,this._userDataWriter,n.key,n,new mn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const c=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new ls(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:kE(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function kE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function og(r,e){return r instanceof gt&&e instanceof gt?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Kt&&e instanceof Kt&&r._firestore===e._firestore&&Qm(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(r){r=Y(r,le);const e=Y(r.firestore,fe);return Mm(be(e),r._key).then(t=>uc(e,r,t))}class Xt extends ac{constructor(e){super(),this.firestore=e}convertBytes(e){return new ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function ME(r){r=Y(r,le);const e=Y(r.firestore,fe),t=be(e),n=new Xt(e);return eE(t,r._key).then(s=>new gt(e,n,r._key,s,new mn(s!==null&&s.hasLocalMutations,!0),r.converter))}function FE(r){r=Y(r,le);const e=Y(r.firestore,fe);return Mm(be(e),r._key,{source:"server"}).then(t=>uc(e,r,t))}function ag(r){r=Y(r,Le);const e=Y(r.firestore,fe),t=be(e),n=new Xt(e);return rg(r._query),Fm(t,r._query).then(s=>new Kt(e,n,r,s))}function LE(r){r=Y(r,Le);const e=Y(r.firestore,fe),t=be(e),n=new Xt(e);return tE(t,r._query).then(s=>new Kt(e,n,r,s))}function BE(r){r=Y(r,Le);const e=Y(r.firestore,fe),t=be(e),n=new Xt(e);return Fm(t,r._query,{source:"server"}).then(s=>new Kt(e,n,r,s))}function Jh(r,e,t){r=Y(r,le);const n=Y(r.firestore,fe),s=Vo(r.converter,e,t);return zs(n,[wo(Vn(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,ue.none())])}function Xh(r,e,t,...n){r=Y(r,le);const s=Y(r.firestore,fe),i=Vn(s);let a;return a=typeof(e=_e(e))=="string"||e instanceof Gt?tc(i,"updateDoc",r._key,e,t,n):ec(i,"updateDoc",r._key,e),zs(s,[a.toMutation(r._key,ue.exists(!0))])}function UE(r){return zs(Y(r.firestore,fe),[new Ar(r._key,ue.none())])}function ug(r,e){const t=Y(r.firestore,fe),n=Xi(r),s=Vo(r.converter,e);return zs(t,[wo(Vn(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ue.exists(!1))]).then(()=>n)}function cg(r,...e){var t,n,s;r=_e(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ja(e[a])||(i=e[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ja(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,f;if(r instanceof le)h=Y(r.firestore,fe),f=vr(r._key.path),c={next:g=>{e[a]&&e[a](uc(h,r,g))},error:e[a+1],complete:e[a+2]};else{const g=Y(r,Le);h=Y(g.firestore,fe),f=g._query;const _=new Xt(h);c={next:R=>{e[a]&&e[a](new Kt(h,_,g,R))},error:e[a+1],complete:e[a+2]},rg(r._query)}return function(_,R,V,N){const x=new yo(N),q=new Bu(R,x,V);return _.asyncQueue.enqueueAndForget(async()=>Mu(await Ir(_),q)),()=>{x.su(),_.asyncQueue.enqueueAndForget(async()=>Fu(await Ir(_),q))}}(be(h),f,u,c)}function qE(r,e){return rE(be(r=Y(r,fe)),ja(e)?e:{next:e})}function zs(r,e){return function(n,s){const i=new Ee;return n.asyncQueue.enqueueAndForget(async()=>CT(await Qu(n),s,i)),i.promise}(be(r),e)}function uc(r,e,t){const n=t.docs.get(e._key),s=new Xt(r);return new gt(r,s,e._key,n,new mn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(r){return $E(r,{count:NE()})}function $E(r,e){const t=Y(r.firestore,fe),n=be(t),s=by(e,(i,a)=>new Jy(a,i.aggregateType,i._internalFieldPath));return nE(n,r._query,s).then(i=>function(u,c,h){const f=new Xt(u);return new IE(c,f,h)}(t,r,i))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Vn(e)}set(e,t,n){this._verifyNotCommitted();const s=Dt(e,this._firestore),i=Vo(s.converter,t,n),a=wo(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ue.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=Dt(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof Gt?tc(this._dataReader,"WriteBatch.update",i._key,t,n,s):ec(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Dt(e,this._firestore);return this._mutations=this._mutations.concat(new Ar(t._key,ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Dt(r,e){if((r=_e(r)).firestore!==e)throw new C(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Vn(e)}get(e){const t=Dt(e,this._firestore),n=new xE(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return F();const i=s[0];if(i.isFoundDocument())return new Rs(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new Rs(this._firestore,n,t._key,null,t.converter);throw F()})}set(e,t,n){const s=Dt(e,this._firestore),i=Vo(s.converter,t,n),a=wo(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,a),this}update(e,t,n,...s){const i=Dt(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof Gt?tc(this._dataReader,"Transaction.update",i._key,t,n,s):ec(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,a),this}delete(e){const t=Dt(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KE=class extends GE{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Dt(e,this._firestore),n=new Xt(this._firestore);return super.get(e).then(s=>new gt(this._firestore,n,t._key,s._document,new mn(!1,!1),t.converter))}};function QE(r,e,t){r=Y(r,fe);const n=Object.assign(Object.assign({},jE),t);return function(i){if(i.maxAttempts<1)throw new C(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const c=new Ee;return i.asyncQueue.enqueueAndForget(async()=>{const h=await Om(i);new YT(i.asyncQueue,h,u,a,c).Iu()}),c.promise}(be(r),s=>e(new KE(r,s)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(){return new $s("deleteField")}function HE(){return new Yu("serverTimestamp")}function YE(...r){return new Ju("arrayUnion",r)}function JE(...r){return new Xu("arrayRemove",r)}function XE(r){return new Zu("increment",r)}(function(e,t=!0){(function(s){Er=s})(Za),tr(new _n("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new fe(new j_(n.getProvider("auth-internal")),new K_(a,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bt(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),tt(Cl,Dl,e),tt(Cl,Dl,"esm2017")})();const ZE={firebase:{apiKey:"AIzaSyDRx1KMPmSuNkVSEz7uEFSqkMOpW9dWGDA",authDomain:"amorphous-arts-bb228.firebaseapp.com",projectId:"amorphous-arts-bb228",storageBucket:"amorphous-arts-bb228.firebasestorage.app",messagingSenderId:"56943092140",appId:"1:56943092140:web:a8dbebb6cc74f4bae19a09"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this._delegate=e,this.firebase=t,hs(e,new _n("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),eu(this._delegate)))}_getService(e,t=Mt){var n;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((n=s.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=Mt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){hs(this._delegate,e)}_addOrOverwriteComponent(e){pd(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Zh=new to("app-compat","Firebase",tv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(r){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:tt,setLogLevel:vd,onLog:Ed,apps:null,SDK_VERSION:Za,INTERNAL:{registerComponent:u,removeApp:n,useAsService:c,modularAPIs:M_}};t.default=t,Object.defineProperty(t,"apps",{get:a});function n(h){delete e[h]}function s(h){if(h=h||Mt,!Tl(e,h))throw Zh.create("no-app",{appName:h});return e[h]}s.App=r;function i(h,f={}){const g=no(h,f);if(Tl(e,g.name))return e[g.name];const _=new r(g,t);return e[g.name]=_,_}function a(){return Object.keys(e).map(h=>e[h])}function u(h){const f=h.name,g=f.replace("-compat","");if(tr(h)&&h.type==="PUBLIC"){const _=(R=s())=>{if(typeof R[g]!="function")throw Zh.create("invalid-app-argument",{appName:f});return R[g]()};h.serviceProps!==void 0&&Di(_,h.serviceProps),t[g]=_,r.prototype[g]=function(...R){return this._getService.bind(this,f).apply(this,h.multipleInstances?R:[])}}return h.type==="PUBLIC"?t[g]:null}function c(h,f){return f==="serverAuth"?null:f}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){const r=nv(ev);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:hg,extendNamespace:e,createSubscribe:vp,ErrorFactory:to,deepExtend:Di});function e(t){Di(r,t)}return r}const rv=hg();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Ya("@firebase/app-compat"),sv="@firebase/app-compat",iv="0.2.51";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(r){tt(sv,iv,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const r=ad();if(r.firebase!==void 0){ed.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ed.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const cc=rv;ov();const av="@firebase/firestore-compat",uv="0.3.44";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function nd(){if(!Ry())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ss{constructor(e){this._delegate=e}static fromBase64String(e){return nd(),new Ss(ot.fromBase64String(e))}static fromUint8Array(e){return td(),new Ss(ot.fromUint8Array(e))}toBase64(){return nd(),this._delegate.toBase64()}toUint8Array(){return td(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(r){return cv(r,["next","error","complete"])}function cv(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{enableIndexedDbPersistence(e,t){return lE(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return hE(e._delegate)}clearIndexedDbPersistence(e){return dE(e._delegate)}}class dg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Bt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&st("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){$m(this._delegate,e,t,n)}enableNetwork(){return mE(this._delegate)}disableNetwork(){return gE(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Bm("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return fE(this._delegate)}onSnapshotsInSync(e){return qE(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Tr(this,Vr(this._delegate,e))}catch(t){throw Me(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ge(this,Xi(this._delegate,e))}catch(t){throw Me(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Oe(this,oE(this._delegate,e))}catch(t){throw Me(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return QE(this._delegate,t=>e(new fg(this,t)))}batch(){return be(this._delegate),new mg(new zE(this._delegate,e=>zs(this._delegate,e)))}loadBundle(e){return pE(this._delegate,e)}namedQuery(e){return _E(this._delegate,e).then(t=>t?new Oe(this,t):null)}}class Co extends ac{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(new ot(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ge.forKey(t,this.firestore,null)}}function hv(r){B_(r)}class fg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Co(e)}get(e){const t=gn(e);return this._delegate.get(t).then(n=>new Ps(this._firestore,new gt(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const s=gn(e);return n?(lc("Transaction.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const i=gn(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,n,...s),this}delete(e){const t=gn(e);return this._delegate.delete(t),this}}class mg{constructor(e){this._delegate=e}set(e,t,n){const s=gn(e);return n?(lc("WriteBatch.set",n),this._delegate.set(s,t,n)):this._delegate.set(s,t),this}update(e,t,n,...s){const i=gn(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,n,...s),this}delete(e){const t=gn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Rn{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new ls(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Vs(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Rn.INSTANCES;let s=n.get(e);s||(s=new WeakMap,n.set(e,s));let i=s.get(t);return i||(i=new Rn(e,new Co(e),t),s.set(t,i)),i}}Rn.INSTANCES=new WeakMap;class Ge{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Co(e)}static forPath(e,t,n){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ge(t,new le(t._delegate,n,new M(e)))}static forKey(e,t,n){return new Ge(t,new le(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Tr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Tr(this.firestore,Vr(this._delegate,e))}catch(t){throw Me(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=_e(e),e instanceof le?Km(this._delegate,e):!1}set(e,t){t=lc("DocumentReference.set",t);try{return t?Jh(this._delegate,e,t):Jh(this._delegate,e)}catch(n){throw Me(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?Xh(this._delegate,e):Xh(this._delegate,e,t,...n)}catch(s){throw Me(s,"updateDoc()","DocumentReference.update()")}}delete(){return UE(this._delegate)}onSnapshot(...e){const t=gg(e),n=pg(e,s=>new Ps(this.firestore,new gt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return cg(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=ME(this._delegate):(e==null?void 0:e.source)==="server"?t=FE(this._delegate):t=OE(this._delegate),t.then(n=>new Ps(this.firestore,new gt(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new Ge(this.firestore,e?this._delegate.withConverter(Rn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Me(r,e,t){return r.message=r.message.replace(e,t),r}function gg(r){for(const e of r)if(typeof e=="object"&&!Ga(e))return e;return{}}function pg(r,e){var t,n;let s;return Ga(r[0])?s=r[0]:Ga(r[1])?s=r[1]:typeof r[0]=="function"?s={next:r[0],error:r[1],complete:r[2]}:s={next:r[1],error:r[2],complete:r[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(n=s.complete)===null||n===void 0?void 0:n.bind(s)}}class Ps{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ge(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return og(this._delegate,e._delegate)}}class Vs extends Ps{data(e){const t=this._delegate.data(e);return this._delegate._converter||U_(t!==void 0),t}}class Oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Co(e)}where(e,t,n){try{return new Oe(this.firestore,Ye(this._delegate,St(e,t,n)))}catch(s){throw Me(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Oe(this.firestore,Ye(this._delegate,bE(e,t)))}catch(n){throw Me(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Oe(this.firestore,Ye(this._delegate,RE(e)))}catch(t){throw Me(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Oe(this.firestore,Ye(this._delegate,SE(e)))}catch(t){throw Me(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Oe(this.firestore,Ye(this._delegate,PE(...e)))}catch(t){throw Me(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Oe(this.firestore,Ye(this._delegate,VE(...e)))}catch(t){throw Me(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Oe(this.firestore,Ye(this._delegate,CE(...e)))}catch(t){throw Me(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Oe(this.firestore,Ye(this._delegate,DE(...e)))}catch(t){throw Me(t,"endAt()","Query.endAt()")}}isEqual(e){return Qm(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=LE(this._delegate):(e==null?void 0:e.source)==="server"?t=BE(this._delegate):t=ag(this._delegate),t.then(n=>new Ka(this.firestore,new Kt(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=gg(e),n=pg(e,s=>new Ka(this.firestore,new Kt(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return cg(this._delegate,t,n)}withConverter(e){return new Oe(this.firestore,e?this._delegate.withConverter(Rn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class dv{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Vs(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ka{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Oe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Vs(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new dv(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Vs(this._firestore,n))})}isEqual(e){return og(this._delegate,e._delegate)}}class Tr extends Oe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ge(this.firestore,e):null}doc(e){try{return e===void 0?new Ge(this.firestore,Xi(this._delegate)):new Ge(this.firestore,Xi(this._delegate,e))}catch(t){throw Me(t,"doc()","CollectionReference.doc()")}}add(e){return ug(this._delegate,e).then(t=>new Ge(this.firestore,t))}isEqual(e){return Km(this._delegate,e._delegate)}withConverter(e){return new Tr(this.firestore,e?this._delegate.withConverter(Rn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gn(r){return Y(r,le)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(...e){this._delegate=new Gt(...e)}static documentId(){return new hc(ae.keyField().canonicalString())}isEqual(e){return e=_e(e),e instanceof Gt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{static serverTimestamp(){const e=HE();return e._methodName="FieldValue.serverTimestamp",new dn(e)}static delete(){const e=WE();return e._methodName="FieldValue.delete",new dn(e)}static arrayUnion(...e){const t=YE(...e);return t._methodName="FieldValue.arrayUnion",new dn(t)}static arrayRemove(...e){const t=JE(...e);return t._methodName="FieldValue.arrayRemove",new dn(t)}static increment(e){const t=XE(e);return t._methodName="FieldValue.increment",new dn(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={Firestore:dg,GeoPoint:Eo,Timestamp:ce,Blob:Ss,Transaction:fg,WriteBatch:mg,DocumentReference:Ge,DocumentSnapshot:Ps,Query:Oe,QueryDocumentSnapshot:Vs,QuerySnapshot:Ka,CollectionReference:Tr,FieldPath:hc,FieldValue:dn,setLogLevel:hv,CACHE_SIZE_UNLIMITED:uE};function mv(r,e){r.INTERNAL.registerComponent(new _n("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(n,s)},"PUBLIC").setServiceProps(Object.assign({},fv)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(r){mv(r,(e,t)=>new dg(e,t,new lv)),r.registerVersion(av,uv)}gv(cc);const pv=ZE.firebase,_v=no(pv),Do=cE(_v);class Vi{}Qr(Vi,"randomInclusive",(e,t)=>{const n=Math.ceil(e),s=Math.floor(t);return Math.floor(Math.random()*(s-n+1)+n)});var yv="firebase",Iv="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cc.registerVersion(yv,Iv,"app-compat");const Tv={categories:["stuffed","not_stuffed"],Card_1:["stuffed","topped"],Card_2:["drinks","topped","sides","extras"]};var Hn,Cs,Yn,Jn,eo;class Qa{constructor(e,t){On(this,Hn);On(this,Cs);On(this,Yn,[]);On(this,Jn);On(this,eo,0);Qr(this,"getIngredients",async()=>[await this.getIngredient(),await this.getIngredient()].sort((e,t)=>e.order-t.order));Qr(this,"getIngredient",async()=>{let e;He(this,Yn).length>0&&(e=St(cc.firestore.FieldPath.documentId(),"not-in",He(this,Yn)));const t=(await ag(Ye(Vr(Do,He(this,Cs),He(this,Hn),He(this,Jn)),e))).docs,n=t[Vi.randomInclusive(0,t.length-1)],s=n.data();return s.key=He(this,Jn),s.id=n.id,s.rotate=++ml(this,eo)._%2===0?0:Vi.randomInclusive(0,1),s.order=s.order?s.order[s.rotate?"attr":"ingredient"]:0,He(this,Yn).push(n.id),s});Qr(this,"getRandomKey",()=>{const e=Tv[He(this,Hn)];return e[Vi.randomInclusive(0,e.length-1)]});Wr(this,Hn,t),Wr(this,Cs,e),Wr(this,Jn,this.getRandomKey())}}Hn=new WeakMap,Cs=new WeakMap,Yn=new WeakMap,Jn=new WeakMap,eo=new WeakMap;const Ev=async()=>new Qa("real_base_meals","categories").getIngredients(),vv=async()=>{const r=new Qa("real_ingredients","Card_1"),e=new Qa("real_ingredients","Card_2"),t=await Promise.all([r.getIngredients(),e.getIngredients()]),n=await Promise.all([r.getIngredients(),e.getIngredients()]);return[[t[0],n[0]],[t[1],n[1]]]},wv=async r=>(await lg(Ye(Vr(Do,"stats"),St("firstIng","==",r.firstIng),St("fourthIng","==",r.fourthIng),St("meal","==",r.meal),St("secondIng","==",r.secondIng),St("secondToken","==",r.secondToken),St("thirdIng","==",r.thirdIng)))).data().count,Av=async()=>(await lg(Vr(Do,"stats"))).data().count,bv=async r=>{const[e,t]=await Promise.all([wv(r),Av()]);return Object.keys(r).forEach(n=>{r[n]=r[n].hasOwnProperty("id")?r[n].id:r[n]}),ug(Vr(Do,"stats"),r),e/t*100},lt=document.querySelector(".game-container"),rd={sides:"with a side of",topped:"topped with",extras:"topped with",drinks:"with a side of"};let Kn={meal1:"",meal2:""};const Rv=async()=>{const[r,e]=await Promise.all([Ev(),vv()]);Kn.meal1={meal:r[0],firstIng:e[0][0][0],secondIng:e[0][0][1],firstToken:r[0].key==="stuffed"?"stuffed":"",secondToken:rd[e[1][0][0].key],thirdIng:e[1][0][0],fourthIng:e[1][0][1]},Kn.meal2={meal:r[1],firstIng:e[0][1][0],secondIng:e[0][1][1],firstToken:r[1].key==="stuffed"?"stuffed":"",secondToken:rd[e[1][1][0].key],thirdIng:e[1][1][0],fourthIng:e[1][1][1]},yl("meal1",lt,Kn.meal1),lt.insertAdjacentHTML("beforeend",ga("Choose Meal 1","meal-1-trigger","meal1")),lt.insertAdjacentHTML("beforeend",np),yl("meal2",lt,Kn.meal2),lt.insertAdjacentHTML("beforeend",ga("Choose Meal 2","meal-2-trigger","meal2"))},Sv=()=>{document.querySelectorAll(".game-container .btn").forEach(r=>{r.addEventListener("click",async()=>{const e=r.getAttribute("data-id");if(!Kn[e])return console.error("Meal not found");for(let t of[...lt.children])t.id!==e&&(t.classList.add("fade-out"),setTimeout(()=>t.remove(),1e3));bv(Kn[e]).then(t=>{document.querySelector(".meal-analytics #percentage").innerHTML=`<strong>${parseFloat(t).toFixed(2)}%</strong>`}),lt.insertAdjacentHTML("beforeend",rp()),lt.insertAdjacentHTML("beforeend",ga("Play Again !","","","","play-again-btn"))})})};function Pv(){Vv()}(async function(){lt&&(console.time("Starting"),Pv(),await Rv(),Sv(),console.timeEnd("Starting"))})();function Vv(){const r=new Audio(ep);document.body.appendChild(r),document.addEventListener("mouseover",e=>{e.target.classList.contains("ingredient-container")&&(r.volume=.15,r.play())}),document.addEventListener("click",e=>{e.target.classList.contains("btn")&&(r.volume=1,r.play())})}
