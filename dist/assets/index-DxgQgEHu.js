(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Fm=r=>`
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
    `,tl=(r,e=!1)=>`<div class="attr-data ${e?"rotate":""}">
                    <div class="heading card-item">
                        <h3 class="">Attribute</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="">${r}</p>       
                    </div>
                </div>`,nl=(r,e=!1)=>`<div class="ing-data ${e?"rotate":""}">
                    <div class="heading card-item">
                        <h3 class="">Ingredient</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="">${r}</p>       
                    </div>
                </div>`,rl=(r,e,t,n)=>`
        <div class="card ing-card ${t}">
            ${n?tl(e)+nl(r,!0):nl(r)+tl(e,!0)}
        </div>
    `,ts=(r,e,t=!1)=>`<div class="ingredient-container">
            ${rl(r,e,"front",t)} 
            ${rl(r,e,"back",!t)}
            <div class="ing-text">
                <span>${t?e:r}</span>
            </div>
        </div>`,ns=r=>`
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
    `;function il(r,e,t){const n=document.createElement("div");n.className="meal-container",n.id=r;const i=t.mealDescriptions[0],s=t.mealDescriptions[1],a=t.basemeal,u=t.sides[0],c=t.sides[1];n.insertAdjacentHTML("afterbegin",`
        ${ts(i.ingredient,i.attribute,i.doRotate)}
        ${ns(i.doRotate||s.doRotate?"":"and")}
        ${ts(s.ingredient,s.attribute,s.doRotate)}
        ${ns(t.firstContextToken.trimStart())}
        ${Fm(a.descriptor)}
        ${ns(t.secondContextToken)}
        ${ts(u.ingredient,u.attribute,u.doRotate)}
        ${ns(u.doRotate||c.doRotate?"":"and")}
        ${ts(c.ingredient,c.attribute,c.doRotate)}
    `),e.append(n)}const Lm={sides:"with a side of",topped:"topped with",extras:"topped with",drinks:"with a side of"};class sl{constructor(e,t,n){this.mealDescriptions=e,this.basemeal=t,this.sides=n}get secondContextToken(){return Lm[this.sides[0].category]??""}get firstContextToken(){return this.basemeal.category==="stuffed"?"stuffed ":""}}const ra=(r,e,t,n="javascript:void(0)",i="")=>`
        <a href="${n}" type="button" class="btn ${i}" id="${e}" data-id="${t}">${r}</button>
    `,Bm=`
    <div class="seperator-container">
        <div class="line"></div>
        <div class="text">
            <span>OR</span>
        </div>
    </div>
`,Um=()=>{};var ol={};/**
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
 */const zh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qm=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],u=r[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,u=a?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,f=s>>2,m=(s&3)<<4|u>>4;let _=(u&15)<<2|h>>6,R=h&63;c||(R=64,a||(_=64)),n.push(t[f],t[m],t[_],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(zh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):qm(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],u=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||u==null||h==null||m==null)throw new $m;const _=s<<2|u>>4;if(n.push(_),h!==64){const R=u<<4&240|h>>2;if(n.push(R),m!==64){const D=h<<6&192|m;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jm=function(r){const e=zh(r);return Gh.encodeByteArray(e,!0)},Is=function(r){return jm(r).replace(/\./g,"")},Kh=function(r){try{return Gh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ts(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zm(t)||(r[t]=Ts(r[t],e[t]));return r}function zm(r){return r!=="__proto__"}/**
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
 */function Wh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gm=()=>Wh().__FIREBASE_DEFAULTS__,Km=()=>{if(typeof process>"u"||typeof ol>"u")return;const r=ol.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Wm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Kh(r[1]);return e&&JSON.parse(e)},Fa=()=>{try{return Um()||Gm()||Km()||Wm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Hm=r=>{var e,t;return(t=(e=Fa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Qm=r=>{const e=Hm(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Hh=()=>{var r;return(r=Fa())===null||r===void 0?void 0:r.config};/**
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
 */class Ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Jm(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Is(JSON.stringify(t)),Is(JSON.stringify(a)),""].join(".")}/**
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
 */function Es(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xm(){var r;const e=(r=Fa())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zm(){return typeof window<"u"||Qh()}function Qh(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Yh(){return!Xm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jh(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const tp="FirebaseError";class wn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=tp,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zs.prototype.create)}}class zs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?np(s,n):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new wn(i,u,n)}}function np(r,e){return r.replace(rp,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const rp=/\{\$([^}]+)}/g;/**
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
 */function al(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Kn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(ul(s)&&ul(a)){if(!Kn(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function ul(r){return r!==null&&typeof r=="object"}function ip(r,e){const t=new sp(r,e);return t.subscribe.bind(t)}class sp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");op(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=zo),i.error===void 0&&(i.error=zo),i.complete===void 0&&(i.complete=zo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function op(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function zo(){}/**
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
 */function _e(r){return r&&r._delegate?r._delegate:r}class gn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class ap{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ym;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cp(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);n===u&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:up(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function up(r){return r===en?void 0:r}function cp(r){return r.instantiationMode==="EAGER"}/**
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
 */class Xh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ap(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const La=[];var W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));const Zh={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},lp=W.INFO,hp={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},dp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=hp[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ba{constructor(e){this.name=e,this._logLevel=lp,this._logHandler=dp,this._userLogHandler=null,La.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}function fp(r){La.forEach(e=>{e.setLogLevel(r)})}function gp(r,e){for(const t of La){let n=null;e&&e.level&&(n=Zh[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(i,s,...a)=>{const u=a.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(n??i.logLevel)&&r({level:W[s].toLowerCase(),message:u,args:a,type:i.name})}}}const mp=(r,e)=>e.some(t=>r instanceof t);let cl,ll;function pp(){return cl||(cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _p(){return ll||(ll=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ed=new WeakMap,ia=new WeakMap,td=new WeakMap,Go=new WeakMap,Ua=new WeakMap;function yp(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(Vt(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ed.set(t,r)}).catch(()=>{}),Ua.set(e,r),e}function bp(r){if(ia.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});ia.set(r,e)}let sa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ia.get(r);if(e==="objectStoreNames")return r.objectStoreNames||td.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ip(r){sa=r(sa)}function Tp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ko(this),e,...t);return td.set(n,e.sort?e.sort():[e]),Vt(n)}:_p().includes(r)?function(...e){return r.apply(Ko(this),e),Vt(ed.get(this))}:function(...e){return Vt(r.apply(Ko(this),e))}}function Ep(r){return typeof r=="function"?Tp(r):(r instanceof IDBTransaction&&bp(r),mp(r,pp())?new Proxy(r,sa):r)}function Vt(r){if(r instanceof IDBRequest)return yp(r);if(Go.has(r))return Go.get(r);const e=Ep(r);return e!==r&&(Go.set(r,e),Ua.set(e,r)),e}const Ko=r=>Ua.get(r);function vp(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),u=Vt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Vt(a.result),c.oldVersion,c.newVersion,Vt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const wp=["get","getKey","getAll","getAllKeys","count"],Ap=["put","add","delete","clear"],Wo=new Map;function hl(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Wo.get(e))return Wo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Ap.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||wp.includes(t)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),i&&c.done]))[0]};return Wo.set(e,s),s}Ip(r=>({...r,get:(e,t,n)=>hl(e,t)||r.get(e,t,n),has:(e,t)=>!!hl(e,t)||r.has(e,t)}));/**
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
 */class Rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Sp(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vs="@firebase/app",oa="0.11.2";/**
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
 */const lt=new Ba("@firebase/app"),Pp="@firebase/app-compat",Vp="@firebase/analytics-compat",Cp="@firebase/analytics",Dp="@firebase/app-check-compat",xp="@firebase/app-check",Op="@firebase/auth",kp="@firebase/auth-compat",Np="@firebase/database",Mp="@firebase/data-connect",Fp="@firebase/database-compat",Lp="@firebase/functions",Bp="@firebase/functions-compat",Up="@firebase/installations",qp="@firebase/installations-compat",$p="@firebase/messaging",jp="@firebase/messaging-compat",zp="@firebase/performance",Gp="@firebase/performance-compat",Kp="@firebase/remote-config",Wp="@firebase/remote-config-compat",Hp="@firebase/storage",Qp="@firebase/storage-compat",Yp="@firebase/firestore",Jp="@firebase/vertexai",Xp="@firebase/firestore-compat",Zp="firebase",e_="11.4.0";/**
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
 */const Ot="[DEFAULT]",t_={[vs]:"fire-core",[Pp]:"fire-core-compat",[Cp]:"fire-analytics",[Vp]:"fire-analytics-compat",[xp]:"fire-app-check",[Dp]:"fire-app-check-compat",[Op]:"fire-auth",[kp]:"fire-auth-compat",[Np]:"fire-rtdb",[Mp]:"fire-data-connect",[Fp]:"fire-rtdb-compat",[Lp]:"fire-fn",[Bp]:"fire-fn-compat",[Up]:"fire-iid",[qp]:"fire-iid-compat",[$p]:"fire-fcm",[jp]:"fire-fcm-compat",[zp]:"fire-perf",[Gp]:"fire-perf-compat",[Kp]:"fire-rc",[Wp]:"fire-rc-compat",[Hp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Yp]:"fire-fst",[Xp]:"fire-fst-compat",[Jp]:"fire-vertex","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
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
 */const kt=new Map,Wn=new Map,Hn=new Map;function ni(r,e){try{r.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function nd(r,e){r.container.addOrOverwriteComponent(e)}function Qn(r){const e=r.name;if(Hn.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;Hn.set(e,r);for(const t of kt.values())ni(t,r);for(const t of Wn.values())ni(t,r);return!0}function qa(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function n_(r,e,t=Ot){qa(r,e).clearInstance(t)}function rd(r){return r.options!==void 0}function id(r){return r==null?!1:r.settings!==void 0}function r_(){Hn.clear()}/**
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
 */const i_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new zs("app","Firebase",i_);/**
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
 */let sd=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}};/**
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
 */function dl(r,e){const t=Kh(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const i=JSON.parse(t).exp*1e3,s=new Date().getTime();i-s<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class s_ extends sd{constructor(e,t,n,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,a={name:n,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,a,i);else{const u=e;super(u.options,a,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._serverConfig.authIdToken&&dl(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&dl(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Ze(vs,oa,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){ja(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Ke.create("server-app-deleted")}}/**
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
 */const $a=e_;function Gs(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ot,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Ke.create("bad-app-name",{appName:String(i)});if(t||(t=Hh()),!t)throw Ke.create("no-options");const s=kt.get(i);if(s){if(Kn(t,s.options)&&Kn(n,s.config))return s;throw Ke.create("duplicate-app",{appName:i})}const a=new Xh(i);for(const c of Hn.values())a.addComponent(c);const u=new sd(t,n,a);return kt.set(i,u),u}function o_(r,e){if(Zm()&&!Qh())throw Ke.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;rd(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const i=h=>[...h].reduce((f,m)=>Math.imul(31,f)+m.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Ke.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(n)),a=Wn.get(s);if(a)return a.incRefCount(e.releaseOnDeref),a;const u=new Xh(s);for(const h of Hn.values())u.addComponent(h);const c=new s_(t,e,s,u);return Wn.set(s,c),c}function od(r=Ot){const e=kt.get(r);if(!e&&r===Ot&&Hh())return Gs();if(!e)throw Ke.create("no-app",{appName:r});return e}function a_(){return Array.from(kt.values())}async function ja(r){let e=!1;const t=r.name;kt.has(t)?(e=!0,kt.delete(t)):Wn.has(t)&&r.decRefCount()<=0&&(Wn.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function Ze(r,e,t){var n;let i=(n=t_[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(u.join(" "));return}Qn(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ad(r,e){if(r!==null&&typeof r!="function")throw Ke.create("invalid-log-argument");gp(r,e)}function ud(r){fp(r)}/**
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
 */const u_="firebase-heartbeat-database",c_=1,ri="firebase-heartbeat-store";let Ho=null;function cd(){return Ho||(Ho=vp(u_,c_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ri)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ke.create("idb-open",{originalErrorMessage:r.message})})),Ho}async function l_(r){try{const t=(await cd()).transaction(ri),n=await t.objectStore(ri).get(ld(r));return await t.done,n}catch(e){if(e instanceof wn)lt.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}}async function fl(r,e){try{const n=(await cd()).transaction(ri,"readwrite");await n.objectStore(ri).put(e,ld(r)),await n.done}catch(t){if(t instanceof wn)lt.warn(t.message);else{const n=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(n.message)}}}function ld(r){return`${r.name}!${r.options.appId}`}/**
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
 */const h_=1024,d_=30;class f_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new m_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>d_){const a=p_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){lt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gl(),{heartbeatsToSend:n,unsentEntries:i}=g_(this._heartbeatsCache.heartbeats),s=Is(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return lt.warn(t),""}}}function gl(){return new Date().toISOString().substring(0,10)}function g_(r,e=h_){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ml(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ml(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class m_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jh()?ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await l_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ml(r){return Is(JSON.stringify({version:2,heartbeats:r})).length}function p_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function __(r){Qn(new gn("platform-logger",e=>new Rp(e),"PRIVATE")),Qn(new gn("heartbeat",e=>new f_(e),"PRIVATE")),Ze(vs,oa,r),Ze(vs,oa,"esm2017"),Ze("fire-js","")}__("");const y_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:wn,SDK_VERSION:$a,_DEFAULT_ENTRY_NAME:Ot,_addComponent:ni,_addOrOverwriteComponent:nd,_apps:kt,_clearComponents:r_,_components:Hn,_getProvider:qa,_isFirebaseApp:rd,_isFirebaseServerApp:id,_registerComponent:Qn,_removeServiceInstance:n_,_serverApps:Wn,deleteApp:ja,getApp:od,getApps:a_,initializeApp:Gs,initializeServerApp:o_,onLog:ad,registerVersion:Ze,setLogLevel:ud},Symbol.toStringTag,{value:"Module"}));var b_="firebase",I_="11.4.0";/**
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
 */Ze(b_,I_,"app");var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ct,hd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,p){function b(){}b.prototype=p.prototype,I.D=p.prototype,I.prototype=new b,I.prototype.constructor=I,I.C=function(T,E,A){for(var y=Array(arguments.length-2),st=2;st<arguments.length;st++)y[st-2]=arguments[st];return p.prototype[E].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,p,b){b||(b=0);var T=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)T[E]=p.charCodeAt(b++)|p.charCodeAt(b++)<<8|p.charCodeAt(b++)<<16|p.charCodeAt(b++)<<24;else for(E=0;16>E;++E)T[E]=p[b++]|p[b++]<<8|p[b++]<<16|p[b++]<<24;p=I.g[0],b=I.g[1],E=I.g[2];var A=I.g[3],y=p+(A^b&(E^A))+T[0]+3614090360&4294967295;p=b+(y<<7&4294967295|y>>>25),y=A+(E^p&(b^E))+T[1]+3905402710&4294967295,A=p+(y<<12&4294967295|y>>>20),y=E+(b^A&(p^b))+T[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=b+(p^E&(A^p))+T[3]+3250441966&4294967295,b=E+(y<<22&4294967295|y>>>10),y=p+(A^b&(E^A))+T[4]+4118548399&4294967295,p=b+(y<<7&4294967295|y>>>25),y=A+(E^p&(b^E))+T[5]+1200080426&4294967295,A=p+(y<<12&4294967295|y>>>20),y=E+(b^A&(p^b))+T[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=b+(p^E&(A^p))+T[7]+4249261313&4294967295,b=E+(y<<22&4294967295|y>>>10),y=p+(A^b&(E^A))+T[8]+1770035416&4294967295,p=b+(y<<7&4294967295|y>>>25),y=A+(E^p&(b^E))+T[9]+2336552879&4294967295,A=p+(y<<12&4294967295|y>>>20),y=E+(b^A&(p^b))+T[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=b+(p^E&(A^p))+T[11]+2304563134&4294967295,b=E+(y<<22&4294967295|y>>>10),y=p+(A^b&(E^A))+T[12]+1804603682&4294967295,p=b+(y<<7&4294967295|y>>>25),y=A+(E^p&(b^E))+T[13]+4254626195&4294967295,A=p+(y<<12&4294967295|y>>>20),y=E+(b^A&(p^b))+T[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=b+(p^E&(A^p))+T[15]+1236535329&4294967295,b=E+(y<<22&4294967295|y>>>10),y=p+(E^A&(b^E))+T[1]+4129170786&4294967295,p=b+(y<<5&4294967295|y>>>27),y=A+(b^E&(p^b))+T[6]+3225465664&4294967295,A=p+(y<<9&4294967295|y>>>23),y=E+(p^b&(A^p))+T[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=b+(A^p&(E^A))+T[0]+3921069994&4294967295,b=E+(y<<20&4294967295|y>>>12),y=p+(E^A&(b^E))+T[5]+3593408605&4294967295,p=b+(y<<5&4294967295|y>>>27),y=A+(b^E&(p^b))+T[10]+38016083&4294967295,A=p+(y<<9&4294967295|y>>>23),y=E+(p^b&(A^p))+T[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=b+(A^p&(E^A))+T[4]+3889429448&4294967295,b=E+(y<<20&4294967295|y>>>12),y=p+(E^A&(b^E))+T[9]+568446438&4294967295,p=b+(y<<5&4294967295|y>>>27),y=A+(b^E&(p^b))+T[14]+3275163606&4294967295,A=p+(y<<9&4294967295|y>>>23),y=E+(p^b&(A^p))+T[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=b+(A^p&(E^A))+T[8]+1163531501&4294967295,b=E+(y<<20&4294967295|y>>>12),y=p+(E^A&(b^E))+T[13]+2850285829&4294967295,p=b+(y<<5&4294967295|y>>>27),y=A+(b^E&(p^b))+T[2]+4243563512&4294967295,A=p+(y<<9&4294967295|y>>>23),y=E+(p^b&(A^p))+T[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=b+(A^p&(E^A))+T[12]+2368359562&4294967295,b=E+(y<<20&4294967295|y>>>12),y=p+(b^E^A)+T[5]+4294588738&4294967295,p=b+(y<<4&4294967295|y>>>28),y=A+(p^b^E)+T[8]+2272392833&4294967295,A=p+(y<<11&4294967295|y>>>21),y=E+(A^p^b)+T[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=b+(E^A^p)+T[14]+4259657740&4294967295,b=E+(y<<23&4294967295|y>>>9),y=p+(b^E^A)+T[1]+2763975236&4294967295,p=b+(y<<4&4294967295|y>>>28),y=A+(p^b^E)+T[4]+1272893353&4294967295,A=p+(y<<11&4294967295|y>>>21),y=E+(A^p^b)+T[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=b+(E^A^p)+T[10]+3200236656&4294967295,b=E+(y<<23&4294967295|y>>>9),y=p+(b^E^A)+T[13]+681279174&4294967295,p=b+(y<<4&4294967295|y>>>28),y=A+(p^b^E)+T[0]+3936430074&4294967295,A=p+(y<<11&4294967295|y>>>21),y=E+(A^p^b)+T[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=b+(E^A^p)+T[6]+76029189&4294967295,b=E+(y<<23&4294967295|y>>>9),y=p+(b^E^A)+T[9]+3654602809&4294967295,p=b+(y<<4&4294967295|y>>>28),y=A+(p^b^E)+T[12]+3873151461&4294967295,A=p+(y<<11&4294967295|y>>>21),y=E+(A^p^b)+T[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=b+(E^A^p)+T[2]+3299628645&4294967295,b=E+(y<<23&4294967295|y>>>9),y=p+(E^(b|~A))+T[0]+4096336452&4294967295,p=b+(y<<6&4294967295|y>>>26),y=A+(b^(p|~E))+T[7]+1126891415&4294967295,A=p+(y<<10&4294967295|y>>>22),y=E+(p^(A|~b))+T[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=b+(A^(E|~p))+T[5]+4237533241&4294967295,b=E+(y<<21&4294967295|y>>>11),y=p+(E^(b|~A))+T[12]+1700485571&4294967295,p=b+(y<<6&4294967295|y>>>26),y=A+(b^(p|~E))+T[3]+2399980690&4294967295,A=p+(y<<10&4294967295|y>>>22),y=E+(p^(A|~b))+T[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=b+(A^(E|~p))+T[1]+2240044497&4294967295,b=E+(y<<21&4294967295|y>>>11),y=p+(E^(b|~A))+T[8]+1873313359&4294967295,p=b+(y<<6&4294967295|y>>>26),y=A+(b^(p|~E))+T[15]+4264355552&4294967295,A=p+(y<<10&4294967295|y>>>22),y=E+(p^(A|~b))+T[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=b+(A^(E|~p))+T[13]+1309151649&4294967295,b=E+(y<<21&4294967295|y>>>11),y=p+(E^(b|~A))+T[4]+4149444226&4294967295,p=b+(y<<6&4294967295|y>>>26),y=A+(b^(p|~E))+T[11]+3174756917&4294967295,A=p+(y<<10&4294967295|y>>>22),y=E+(p^(A|~b))+T[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=b+(A^(E|~p))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}n.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var b=p-this.blockSize,T=this.B,E=this.h,A=0;A<p;){if(E==0)for(;A<=b;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<p;)if(T[E++]=I.charCodeAt(A++),E==this.blockSize){i(this,T),E=0;break}}else for(;A<p;)if(T[E++]=I[A++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var b=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=b&255,b/=256;for(this.u(I),I=Array(16),p=b=0;4>p;++p)for(var T=0;32>T;T+=8)I[b++]=this.g[p]>>>T&255;return I};function s(I,p){var b=u;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=p(I)}function a(I,p){this.h=p;for(var b=[],T=!0,E=I.length-1;0<=E;E--){var A=I[E]|0;T&&A==p||(b[E]=A,T=!1)}this.g=b}var u={};function c(I){return-128<=I&&128>I?s(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return x(h(-I));for(var p=[],b=1,T=0;I>=b;T++)p[T]=I/b|0,b*=4294967296;return new a(p,0)}function f(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return x(f(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=h(Math.pow(p,8)),T=m,E=0;E<I.length;E+=8){var A=Math.min(8,I.length-E),y=parseInt(I.substring(E,E+A),p);8>A?(A=h(Math.pow(p,A)),T=T.j(A).add(h(y))):(T=T.j(b),T=T.add(h(y)))}return T}var m=c(0),_=c(1),R=c(16777216);r=a.prototype,r.m=function(){if(O(this))return-x(this).m();for(var I=0,p=1,b=0;b<this.g.length;b++){var T=this.i(b);I+=(0<=T?T:4294967296+T)*p,p*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(O(this))return"-"+x(this).toString(I);for(var p=h(Math.pow(I,6)),b=this,T="";;){var E=X(b,p).g;b=q(b,E.j(p));var A=((0<b.g.length?b.g[0]:b.h)>>>0).toString(I);if(b=E,D(b))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function O(I){return I.h==-1}r.l=function(I){return I=q(this,I),O(I)?-1:D(I)?0:1};function x(I){for(var p=I.g.length,b=[],T=0;T<p;T++)b[T]=~I.g[T];return new a(b,~I.h).add(_)}r.abs=function(){return O(this)?x(this):this},r.add=function(I){for(var p=Math.max(this.g.length,I.g.length),b=[],T=0,E=0;E<=p;E++){var A=T+(this.i(E)&65535)+(I.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);T=y>>>16,A&=65535,y&=65535,b[E]=y<<16|A}return new a(b,b[b.length-1]&-2147483648?-1:0)};function q(I,p){return I.add(x(p))}r.j=function(I){if(D(this)||D(I))return m;if(O(this))return O(I)?x(this).j(x(I)):x(x(this).j(I));if(O(I))return x(this.j(x(I)));if(0>this.l(R)&&0>I.l(R))return h(this.m()*I.m());for(var p=this.g.length+I.g.length,b=[],T=0;T<2*p;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<I.g.length;E++){var A=this.i(T)>>>16,y=this.i(T)&65535,st=I.i(E)>>>16,vr=I.i(E)&65535;b[2*T+2*E]+=y*vr,j(b,2*T+2*E),b[2*T+2*E+1]+=A*vr,j(b,2*T+2*E+1),b[2*T+2*E+1]+=y*st,j(b,2*T+2*E+1),b[2*T+2*E+2]+=A*st,j(b,2*T+2*E+2)}for(T=0;T<p;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=p;T<2*p;T++)b[T]=0;return new a(b,0)};function j(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function U(I,p){this.g=I,this.h=p}function X(I,p){if(D(p))throw Error("division by zero");if(D(I))return new U(m,m);if(O(I))return p=X(x(I),p),new U(x(p.g),x(p.h));if(O(p))return p=X(I,x(p)),new U(x(p.g),p.h);if(30<I.g.length){if(O(I)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var b=_,T=p;0>=T.l(I);)b=ne(b),T=ne(T);var E=Q(b,1),A=Q(T,1);for(T=Q(T,2),b=Q(b,2);!D(T);){var y=A.add(T);0>=y.l(I)&&(E=E.add(b),A=y),T=Q(T,1),b=Q(b,1)}return p=q(I,E.j(p)),new U(E,p)}for(E=m;0<=I.l(p);){for(b=Math.max(1,Math.floor(I.m()/p.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(b),y=A.j(p);O(y)||0<y.l(I);)b-=T,A=h(b),y=A.j(p);D(A)&&(A=_),E=E.add(A),I=q(I,y)}return new U(E,I)}r.A=function(I){return X(this,I).h},r.and=function(I){for(var p=Math.max(this.g.length,I.g.length),b=[],T=0;T<p;T++)b[T]=this.i(T)&I.i(T);return new a(b,this.h&I.h)},r.or=function(I){for(var p=Math.max(this.g.length,I.g.length),b=[],T=0;T<p;T++)b[T]=this.i(T)|I.i(T);return new a(b,this.h|I.h)},r.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),b=[],T=0;T<p;T++)b[T]=this.i(T)^I.i(T);return new a(b,this.h^I.h)};function ne(I){for(var p=I.g.length+1,b=[],T=0;T<p;T++)b[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(b,I.h)}function Q(I,p){var b=p>>5;p%=32;for(var T=I.g.length-b,E=[],A=0;A<T;A++)E[A]=0<p?I.i(A+b)>>>p|I.i(A+b+1)<<32-p:I.i(A+b);return new a(E,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,hd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Ct=a}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});var rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dd,Gr,fd,ls,aa,gd,md,pd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof rs=="object"&&rs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,l){if(l)e:{var d=n;o=o.split(".");for(var g=0;g<o.length-1;g++){var w=o[g];if(!(w in d))break e;d=d[w]}o=o[o.length-1],g=d[o],l=l(g),l!=g&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,g=!1,w={next:function(){if(!g&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,g),o.apply(l,w)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function R(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function D(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,w,P){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return l.prototype[w].apply(g,k)}}function O(o){const l=o.length;if(0<l){const d=Array(l);for(let g=0;g<l;g++)d[g]=o[g];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const w=o.length||0,P=g.length||0;o.length=w+P;for(let k=0;k<P;k++)o[w+k]=g[k]}else o.push(g)}}class q{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function X(o){return X[" "](o),o}X[" "]=function(){};var ne=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Q(o,l,d){for(const g in o)l.call(d,o[g],g,o)}function I(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,g;for(let w=1;w<arguments.length;w++){g=arguments[w];for(d in g)o[d]=g[d];for(let P=0;P<b.length;P++)d=b[P],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function E(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function A(o){u.setTimeout(()=>{throw o},0)}function y(){var o=Io;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class st{constructor(){this.h=this.g=null}add(l,d){const g=vr.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var vr=new q(()=>new nm,o=>o.reset());class nm{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let wr,Ar=!1,Io=new st,tc=()=>{const o=u.Promise.resolve(void 0);wr=()=>{o.then(rm)}};var rm=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var l=vr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Ar=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var im=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function Rr(o,l){if(Ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ne){e:{try{X(l.nodeName);var w=!0;break e}catch{}w=!1}w||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:sm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Rr.aa.h.call(this)}}D(Rr,Ae);var sm={2:"touch",3:"pen",4:"mouse"};Rr.prototype.h=function(){Rr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mi="closure_listenable_"+(1e6*Math.random()|0),om=0;function am(o,l,d,g,w){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=w,this.key=++om,this.da=this.fa=!1}function Fi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Li(o){this.src=o,this.g={},this.h=0}Li.prototype.add=function(o,l,d,g,w){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=Eo(o,l,g,w);return-1<k?(l=o[k],d||(l.fa=!1)):(l=new am(l,this.src,P,!!g,w),l.fa=d,o.push(l)),l};function To(o,l){var d=l.type;if(d in o.g){var g=o.g[d],w=Array.prototype.indexOf.call(g,l,void 0),P;(P=0<=w)&&Array.prototype.splice.call(g,w,1),P&&(Fi(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Eo(o,l,d,g){for(var w=0;w<o.length;++w){var P=o[w];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==g)return w}return-1}var vo="closure_lm_"+(1e6*Math.random()|0),wo={};function nc(o,l,d,g,w){if(Array.isArray(l)){for(var P=0;P<l.length;P++)nc(o,l[P],d,g,w);return null}return d=sc(d),o&&o[Mi]?o.K(l,d,h(g)?!!g.capture:!1,w):um(o,l,d,!1,g,w)}function um(o,l,d,g,w,P){if(!l)throw Error("Invalid event type");var k=h(w)?!!w.capture:!!w,te=Ro(o);if(te||(o[vo]=te=new Li(o)),d=te.add(l,d,g,k,P),d.proxy)return d;if(g=cm(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)im||(w=k),w===void 0&&(w=!1),o.addEventListener(l.toString(),g,w);else if(o.attachEvent)o.attachEvent(ic(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function cm(){function o(d){return l.call(o.src,o.listener,d)}const l=lm;return o}function rc(o,l,d,g,w){if(Array.isArray(l))for(var P=0;P<l.length;P++)rc(o,l[P],d,g,w);else g=h(g)?!!g.capture:!!g,d=sc(d),o&&o[Mi]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=Eo(P,d,g,w),-1<d&&(Fi(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ro(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Eo(l,d,g,w)),(d=-1<o?l[o]:null)&&Ao(d))}function Ao(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Mi])To(l.i,o);else{var d=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(d,g,o.capture):l.detachEvent?l.detachEvent(ic(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=Ro(l))?(To(d,o),d.h==0&&(d.src=null,l[vo]=null)):Fi(o)}}}function ic(o){return o in wo?wo[o]:wo[o]="on"+o}function lm(o,l){if(o.da)o=!0;else{l=new Rr(l,this);var d=o.listener,g=o.ha||o.src;o.fa&&Ao(o),o=d.call(g,l)}return o}function Ro(o){return o=o[vo],o instanceof Li?o:null}var So="__closure_events_fn_"+(1e9*Math.random()>>>0);function sc(o){return typeof o=="function"?o:(o[So]||(o[So]=function(l){return o.handleEvent(l)}),o[So])}function Re(){yt.call(this),this.i=new Li(this),this.M=this,this.F=null}D(Re,yt),Re.prototype[Mi]=!0,Re.prototype.removeEventListener=function(o,l,d,g){rc(this,o,l,d,g)};function Oe(o,l){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new Ae(l,o);else if(l instanceof Ae)l.target=l.target||o;else{var w=l;l=new Ae(g,o),T(l,w)}if(w=!0,d)for(var P=d.length-1;0<=P;P--){var k=l.g=d[P];w=Bi(k,g,!0,l)&&w}if(k=l.g=o,w=Bi(k,g,!0,l)&&w,w=Bi(k,g,!1,l)&&w,d)for(P=0;P<d.length;P++)k=l.g=d[P],w=Bi(k,g,!1,l)&&w}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],g=0;g<d.length;g++)Fi(d[g]);delete o.g[l],o.h--}}this.F=null},Re.prototype.K=function(o,l,d,g){return this.i.add(String(o),l,!1,d,g)},Re.prototype.L=function(o,l,d,g){return this.i.add(String(o),l,!0,d,g)};function Bi(o,l,d,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,P=0;P<l.length;++P){var k=l[P];if(k&&!k.da&&k.capture==d){var te=k.listener,Te=k.ha||k.src;k.fa&&To(o.i,k),w=te.call(Te,g)!==!1&&w}}return w&&!g.defaultPrevented}function oc(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function ac(o){o.g=oc(()=>{o.g=null,o.i&&(o.i=!1,ac(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class hm extends yt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ac(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(o){yt.call(this),this.h=o,this.g={}}D(Sr,yt);var uc=[];function cc(o){Q(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ao(l)},o),o.g={}}Sr.prototype.N=function(){Sr.aa.N.call(this),cc(this)},Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=u.JSON.stringify,dm=u.JSON.parse,fm=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Vo(){}Vo.prototype.h=null;function lc(o){return o.h||(o.h=o.i())}function hc(){}var Pr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Co(){Ae.call(this,"d")}D(Co,Ae);function Do(){Ae.call(this,"c")}D(Do,Ae);var Qt={},dc=null;function Ui(){return dc=dc||new Re}Qt.La="serverreachability";function fc(o){Ae.call(this,Qt.La,o)}D(fc,Ae);function Vr(o){const l=Ui();Oe(l,new fc(l))}Qt.STAT_EVENT="statevent";function gc(o,l){Ae.call(this,Qt.STAT_EVENT,o),this.stat=l}D(gc,Ae);function ke(o){const l=Ui();Oe(l,new gc(l,o))}Qt.Ma="timingevent";function mc(o,l){Ae.call(this,Qt.Ma,o),this.size=l}D(mc,Ae);function Cr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Dr(){this.g=!0}Dr.prototype.xa=function(){this.g=!1};function gm(o,l,d,g,w,P){o.info(function(){if(o.g)if(P)for(var k="",te=P.split("&"),Te=0;Te<te.length;Te++){var Y=te[Te].split("=");if(1<Y.length){var Se=Y[0];Y=Y[1];var Pe=Se.split("_");k=2<=Pe.length&&Pe[1]=="type"?k+(Se+"="+Y+"&"):k+(Se+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+g+") [attempt "+w+"]: "+l+`
`+d+`
`+k})}function mm(o,l,d,g,w,P,k){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+w+"]: "+l+`
`+d+`
`+P+" "+k})}function Vn(o,l,d,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+_m(o,d)+(g?" "+g:"")})}function pm(o,l){o.info(function(){return"TIMEOUT: "+l})}Dr.prototype.info=function(){};function _m(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var w=g[1];if(Array.isArray(w)&&!(1>w.length)){var P=w[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Po(d)}catch{return l}}var qi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xo;function $i(){}D($i,Vo),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},xo=new $i;function bt(o,l,d,g){this.j=o,this.i=l,this.l=d,this.R=g||1,this.U=new Sr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _c}function _c(){this.i=null,this.g="",this.h=!1}var yc={},Oo={};function ko(o,l,d){o.L=1,o.v=Ki(ot(l)),o.m=d,o.P=!0,bc(o,null)}function bc(o,l){o.F=Date.now(),ji(o),o.A=ot(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Oc(d.i,"t",g),o.C=0,d=o.j.J,o.h=new _c,o.g=Jc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new hm(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,g=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(uc[0]=w.toString()),w=uc);for(var P=0;P<w.length;P++){var k=nc(d,w[P],g||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Vr(),gm(o.i,o.u,o.A,o.l,o.R,o.m)}bt.prototype.ca=function(o){o=o.target;const l=this.M;l&&at(o)==3?l.j():this.Y(o)},bt.prototype.Y=function(o){try{if(o==this.g)e:{const Pe=at(this.g);var l=this.g.Ba();const xn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Uc(this.g)))){this.J||Pe!=4||l==7||(l==8||0>=xn?Vr(3):Vr(2)),No(this);var d=this.g.Z();this.X=d;t:if(Ic(this)){var g=Uc(this.g);o="";var w=g.length,P=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),xr(this);var k="";break t}this.h.i=new u.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,o+=this.h.i.decode(g[l],{stream:!(P&&l==w-1)});g.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=d==200,mm(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Te=this.g;if((te=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(te)){var Y=te;break t}}Y=null}if(d=Y)Vn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mo(this,d);else{this.o=!1,this.s=3,ke(12),Yt(this),xr(this);break e}}if(this.P){d=!0;let We;for(;!this.J&&this.C<k.length;)if(We=ym(this,k),We==Oo){Pe==4&&(this.s=4,ke(14),d=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==yc){this.s=4,ke(15),Vn(this.i,this.l,k,"[Invalid Chunk]"),d=!1;break}else Vn(this.i,this.l,We,null),Mo(this,We);if(Ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||k.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)Vn(this.i,this.l,k,"[Invalid Chunked Response]"),Yt(this),xr(this);else if(0<k.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),$o(Se),Se.M=!0,ke(11))}}else Vn(this.i,this.l,k,null),Mo(this,k);Pe==4&&Yt(this),this.o&&!this.J&&(Pe==4?Wc(this.j,this):(this.o=!1,ji(this)))}else Nm(this.g),d==400&&0<k.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Yt(this),xr(this)}}}catch{}finally{}};function Ic(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ym(o,l){var d=o.C,g=l.indexOf(`
`,d);return g==-1?Oo:(d=Number(l.substring(d,g)),isNaN(d)?yc:(g+=1,g+d>l.length?Oo:(l=l.slice(g,g+d),o.C=g+d,l)))}bt.prototype.cancel=function(){this.J=!0,Yt(this)};function ji(o){o.S=Date.now()+o.I,Tc(o,o.I)}function Tc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Cr(_(o.ba,o),l)}function No(o){o.B&&(u.clearTimeout(o.B),o.B=null)}bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(pm(this.i,this.A),this.L!=2&&(Vr(),ke(17)),Yt(this),this.s=2,xr(this)):Tc(this,this.S-o)};function xr(o){o.j.G==0||o.J||Wc(o.j,o)}function Yt(o){No(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,cc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Mo(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Fo(d.h,o))){if(!o.K&&Fo(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var w=g;if(w[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Xi(d),Yi(d);else break e;qo(d),ke(18)}}else d.za=w[1],0<d.za-d.T&&37500>w[2]&&d.F&&d.v==0&&!d.C&&(d.C=Cr(_(d.Za,d),6e3));if(1>=wc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Xt(d,11)}else if((o.K||d.g==o)&&Xi(d),!j(l))for(w=d.Da.g.parse(l),l=0;l<w.length;l++){let Y=w[l];if(d.T=Y[0],Y=Y[1],d.G==2)if(Y[0]=="c"){d.K=Y[1],d.ia=Y[2];const Se=Y[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Pe=Y[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const xn=Y[5];xn!=null&&typeof xn=="number"&&0<xn&&(g=1.5*xn,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const We=o.g;if(We){const es=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var P=g.h;P.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Lo(P,P.h),P.h=null))}if(g.D){const jo=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(g.ya=jo,ie(g.I,g.D,jo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var k=o;if(g.qa=Yc(g,g.J?g.ia:null,g.W),k.K){Ac(g.h,k);var te=k,Te=g.L;Te&&(te.I=Te),te.B&&(No(te),ji(te)),g.g=k}else Gc(g);0<d.i.length&&Ji(d)}else Y[0]!="stop"&&Y[0]!="close"||Xt(d,7);else d.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Xt(d,7):Uo(d):Y[0]!="noop"&&d.l&&d.l.ta(Y),d.v=0)}}Vr(4)}catch{}}var bm=class{constructor(o,l){this.g=o,this.map=l}};function Ec(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function wc(o){return o.h?1:o.g?o.g.size:0}function Fo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Lo(o,l){o.g?o.g.add(l):o.h=l}function Ac(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ec.prototype.cancel=function(){if(this.i=Rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Rc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return O(o.i)}function Im(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,g=0;g<d;g++)l.push(o[g]);return l}l=[],d=0;for(g in o)l[d++]=o[g];return l}function Tm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const g in o)l[d++]=g;return l}}}function Sc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Tm(o),g=Im(o),w=g.length,P=0;P<w;P++)l.call(void 0,g[P],d&&d[P],o)}var Pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Em(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),w=null;if(0<=g){var P=o[d].substring(0,g);w=o[d].substring(g+1)}else P=o[d];l(P,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,zi(this,o.j),this.o=o.o,this.g=o.g,Gi(this,o.s),this.l=o.l;var l=o.i,d=new Nr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Vc(this,d),this.m=o.m}else o&&(l=String(o).match(Pc))?(this.h=!1,zi(this,l[1]||"",!0),this.o=Or(l[2]||""),this.g=Or(l[3]||"",!0),Gi(this,l[4]),this.l=Or(l[5]||"",!0),Vc(this,l[6]||"",!0),this.m=Or(l[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}Jt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(kr(l,Cc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(kr(l,Cc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(kr(d,d.charAt(0)=="/"?Am:wm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",kr(d,Sm)),o.join("")};function ot(o){return new Jt(o)}function zi(o,l,d){o.j=d?Or(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Gi(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Vc(o,l,d){l instanceof Nr?(o.i=l,Pm(o.i,o.h)):(d||(l=kr(l,Rm)),o.i=new Nr(l,o.h))}function ie(o,l,d){o.i.set(l,d)}function Ki(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Or(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function kr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,vm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cc=/[#\/\?@]/g,wm=/[#\?:]/g,Am=/[#\?]/g,Rm=/[#\?@]/g,Sm=/#/g;function Nr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function It(o){o.g||(o.g=new Map,o.h=0,o.i&&Em(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Nr.prototype,r.add=function(o,l){It(this),this.i=null,o=Cn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Dc(o,l){It(o),l=Cn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function xc(o,l){return It(o),l=Cn(o,l),o.g.has(l)}r.forEach=function(o,l){It(this),this.g.forEach(function(d,g){d.forEach(function(w){o.call(l,w,g,this)},this)},this)},r.na=function(){It(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let g=0;g<l.length;g++){const w=o[g];for(let P=0;P<w.length;P++)d.push(l[g])}return d},r.V=function(o){It(this);let l=[];if(typeof o=="string")xc(this,o)&&(l=l.concat(this.g.get(Cn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return It(this),this.i=null,o=Cn(this,o),xc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Oc(o,l,d){Dc(o,l),0<d.length&&(o.i=null,o.g.set(Cn(o,l),O(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var g=l[d];const P=encodeURIComponent(String(g)),k=this.V(g);for(g=0;g<k.length;g++){var w=P;k[g]!==""&&(w+="="+encodeURIComponent(String(k[g]))),o.push(w)}}return this.i=o.join("&")};function Cn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Pm(o,l){l&&!o.j&&(It(o),o.i=null,o.g.forEach(function(d,g){var w=g.toLowerCase();g!=w&&(Dc(this,g),Oc(this,w,d))},o)),o.j=l}function Vm(o,l){const d=new Dr;if(u.Image){const g=new Image;g.onload=R(Tt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=R(Tt,d,"TestLoadImage: error",!1,l,g),g.onabort=R(Tt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=R(Tt,d,"TestLoadImage: timeout",!1,l,g),u.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function Cm(o,l){const d=new Dr,g=new AbortController,w=setTimeout(()=>{g.abort(),Tt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(w),P.ok?Tt(d,"TestPingServer: ok",!0,l):Tt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),Tt(d,"TestPingServer: error",!1,l)})}function Tt(o,l,d,g,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),g(d)}catch{}}function Dm(){this.g=new fm}function xm(o,l,d){const g=d||"";try{Sc(o,function(w,P){let k=w;h(w)&&(k=Po(w)),l.push(g+P+"="+encodeURIComponent(k))})}catch(w){throw l.push(g+"type="+encodeURIComponent("_badmap")),w}}function Wi(o){this.l=o.Ub||null,this.j=o.eb||!1}D(Wi,Vo),Wi.prototype.g=function(){return new Hi(this.l,this.j)},Wi.prototype.i=function(o){return function(){return o}}({});function Hi(o,l){Re.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Hi,Re),r=Hi.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Fr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function kc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Mr(this):Fr(this),this.readyState==3&&kc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Mr(this))},r.Qa=function(o){this.g&&(this.response=o,Mr(this))},r.ga=function(){this.g&&Mr(this)};function Mr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Fr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Fr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nc(o){let l="";return Q(o,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function Bo(o,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Nc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,l,d))}function he(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(he,Re);var Om=/^https?$/i,km=["POST","PUT"];r=he.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xo.g(),this.v=this.o?lc(this.o):lc(xo),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Mc(this,P);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var w in g)d.set(w,g[w]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(km,l,void 0))||g||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of d)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Mc(this,P)}};function Mc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Fc(o),Qi(o)}function Fc(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Oe(this,"complete"),Oe(this,"abort"),Qi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),he.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Lc(this):this.bb())},r.bb=function(){Lc(this)};function Lc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)oc(o.Ea,0,o);else if(Oe(o,"readystatechange"),at(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=k===0){var w=String(o.D).match(Pc)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),g=!Om.test(w?w.toLowerCase():"")}d=g}if(d)Oe(o,"complete"),Oe(o,"success");else{o.m=6;try{var P=2<at(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Fc(o)}}finally{Qi(o)}}}}function Qi(o,l){if(o.g){Bc(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Oe(o,"ready");try{d.onreadystatechange=g}catch{}}}function Bc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),dm(l)}};function Uc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Nm(o){const l={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var d=E(o[g]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[w]||[];l[w]=P,P.push(d)}I(l,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function qc(o){this.Aa=0,this.i=[],this.j=new Dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lr("baseRetryDelayMs",5e3,o),this.cb=Lr("retryDelaySeedMs",1e4,o),this.Wa=Lr("forwardChannelMaxRetries",2,o),this.wa=Lr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ec(o&&o.concurrentRequestLimit),this.Da=new Dm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=qc.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,g){ke(0),this.W=o,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Yc(this,null,this.W),Ji(this)};function Uo(o){if($c(o),o.G==3){var l=o.U++,d=ot(o.I);if(ie(d,"SID",o.K),ie(d,"RID",l),ie(d,"TYPE","terminate"),Br(o,d),l=new bt(o,o.j,l),l.L=2,l.v=Ki(ot(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Jc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ji(l)}Qc(o)}function Yi(o){o.g&&($o(o),o.g.cancel(),o.g=null)}function $c(o){Yi(o),o.u&&(u.clearTimeout(o.u),o.u=null),Xi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ji(o){if(!vc(o.h)&&!o.s){o.s=!0;var l=o.Ga;wr||tc(),Ar||(wr(),Ar=!0),Io.add(l,o),o.B=0}}function Mm(o,l){return wc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Cr(_(o.Ga,o,l),Hc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new bt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=p(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(w.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=zc(this,w,l),d=ot(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),Br(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Nc(P)))+"&"+l:this.m&&Bo(d,this.m,P)),Lo(this.h,w),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",l),ie(d,"SID","null"),w.T=!0,ko(w,d,null)):ko(w,d,l),this.G=2}}else this.G==3&&(o?jc(this,o):this.i.length==0||vc(this.h)||jc(this))};function jc(o,l){var d;l?d=l.l:d=o.U++;const g=ot(o.I);ie(g,"SID",o.K),ie(g,"RID",d),ie(g,"AID",o.T),Br(o,g),o.m&&o.o&&Bo(g,o.m,o.o),d=new bt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=zc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Lo(o.h,d),ko(d,g,l)}function Br(o,l){o.H&&Q(o.H,function(d,g){ie(l,g,d)}),o.l&&Sc({},function(d,g){ie(l,g,d)})}function zc(o,l,d){d=Math.min(o.i.length,d);var g=o.l?_(o.l.Na,o.l,o):null;e:{var w=o.i;let P=-1;for(;;){const k=["count="+d];P==-1?0<d?(P=w[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let te=!0;for(let Te=0;Te<d;Te++){let Y=w[Te].g;const Se=w[Te].map;if(Y-=P,0>Y)P=Math.max(0,w[Te].g-100),te=!1;else try{xm(Se,k,"req"+Y+"_")}catch{g&&g(Se)}}if(te){g=k.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,g}function Gc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;wr||tc(),Ar||(wr(),Ar=!0),Io.add(l,o),o.v=0}}function qo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Cr(_(o.Fa,o),Hc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Kc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Cr(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Yi(this),Kc(this))};function $o(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Kc(o){o.g=new bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ot(o.qa);ie(l,"RID","rpc"),ie(l,"SID",o.K),ie(l,"AID",o.T),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(l,"TO",o.ja),ie(l,"TYPE","xmlhttp"),Br(o,l),o.m&&o.o&&Bo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ki(ot(l)),d.m=null,d.P=!0,bc(d,o)}r.Za=function(){this.C!=null&&(this.C=null,Yi(this),qo(this),ke(19))};function Xi(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Wc(o,l){var d=null;if(o.g==l){Xi(o),$o(o),o.g=null;var g=2}else if(Fo(o.h,l))d=l.D,Ac(o.h,l),g=1;else return;if(o.G!=0){if(l.o)if(g==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var w=o.B;g=Ui(),Oe(g,new mc(g,d)),Ji(o)}else Gc(o);else if(w=l.s,w==3||w==0&&0<l.X||!(g==1&&Mm(o,l)||g==2&&qo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),w){case 1:Xt(o,5);break;case 4:Xt(o,10);break;case 3:Xt(o,6);break;default:Xt(o,2)}}}function Hc(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Xt(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),g=o.Xa;const w=!g;g=new Jt(g||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||zi(g,"https"),Ki(g),w?Vm(g.toString(),d):Cm(g.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),Qc(o),$c(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Qc(o){if(o.G=0,o.ka=[],o.l){const l=Rc(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Yc(o,l,d){var g=d instanceof Jt?ot(d):new Jt(d);if(g.g!="")l&&(g.g=l+"."+g.g),Gi(g,g.s);else{var w=u.location;g=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var P=new Jt(null);g&&zi(P,g),l&&(P.g=l),w&&Gi(P,w),d&&(P.l=d),g=P}return d=o.D,l=o.ya,d&&l&&ie(g,d,l),ie(g,"VER",o.la),Br(o,g),g}function Jc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new he(new Wi({eb:d})):new he(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xc(){}r=Xc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Zi(){}Zi.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){Re.call(this),this.g=new qc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!j(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Dn(this)}D($e,Re),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Uo(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Po(o),o=d);l.i.push(new bm(l.Ya++,o)),l.G==3&&Ji(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,$e.aa.N.call(this)};function Zc(o){Co.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}D(Zc,Co);function el(){Do.call(this),this.status=1}D(el,Do);function Dn(o){this.g=o}D(Dn,Xc),Dn.prototype.ua=function(){Oe(this.g,"a")},Dn.prototype.ta=function(o){Oe(this.g,new Zc(o))},Dn.prototype.sa=function(o){Oe(this.g,new el)},Dn.prototype.ra=function(){Oe(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,pd=function(){return new Zi},md=function(){return Ui()},gd=Qt,aa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qi.NO_ERROR=0,qi.TIMEOUT=8,qi.HTTP_ERROR=6,ls=qi,pc.COMPLETE="complete",fd=pc,hc.EventType=Pr,Pr.OPEN="a",Pr.CLOSE="b",Pr.ERROR="c",Pr.MESSAGE="d",Re.prototype.listen=Re.prototype.K,Gr=hc,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,dd=he}).apply(typeof rs<"u"?rs:typeof self<"u"?self:typeof window<"u"?window:{});const _l="@firebase/firestore",yl="4.7.9";/**
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
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let mr="11.4.0";/**
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
 */const Nt=new Ba("@firebase/firestore");function Bn(){return Nt.logLevel}function T_(r){Nt.setLogLevel(r)}function C(r,...e){if(Nt.logLevel<=W.DEBUG){const t=e.map(za);Nt.debug(`Firestore (${mr}): ${r}`,...t)}}function fe(r,...e){if(Nt.logLevel<=W.ERROR){const t=e.map(za);Nt.error(`Firestore (${mr}): ${r}`,...t)}}function nt(r,...e){if(Nt.logLevel<=W.WARN){const t=e.map(za);Nt.warn(`Firestore (${mr}): ${r}`,...t)}}function za(r){if(typeof r=="string")return r;try{/**
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
 */function F(r="Unexpected state"){const e=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: `+r;throw fe(e),new Error(e)}function L(r,e){r||F()}function E_(r,e){r||F()}function M(r,e){return r}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class we{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class _d{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class v_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}}class w_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A_{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new we;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new we,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new we)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new _d(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string"),new Ie(e)}}class R_{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class S_{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new R_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P_{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,id(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){L(this.o===void 0);const n=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new bl(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(L(typeof t.token=="string"),this.R=t.token,new bl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function V_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=V_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function $(r,e){return r<e?-1:r>e?1:0}function Yn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function bd(r){return r+"\0"}/**
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
 */const Il=-62135596800,Tl=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Tl);return new ce(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Il)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tl}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Il;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const El="__name__";class Qe{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(),n===void 0?n=e.length-t:n>e.length-t&&F(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Qe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qe?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Qe.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Math.sign(e.length-t.length)}static compareSegments(e,t){const n=Qe.isNumericId(e),i=Qe.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Qe.extractNumericId(e).compare(Qe.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ct.fromString(e.substring(4,e.length-2))}}class G extends Qe{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new G(t)}static emptyPath(){return new G([])}}const C_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends Qe{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return C_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===El}static keyField(){return new ae([El])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(s(),i++)}if(s(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(G.fromString(e))}static fromName(e){return new N(G.fromString(e).popFirst(5))}static empty(){return new N(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&G.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new G(e.slice()))}}/**
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
 */const Jn=-1;class ws{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function ua(r){return r.fields.find(e=>e.kind===2)}function tn(r){return r.fields.filter(e=>e.kind!==2)}ws.UNKNOWN_ID=-1;class hs{constructor(e,t){this.fieldPath=e,this.kind=t}}class ii{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ii(0,ze.min())}}function Id(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new ce(t+1,0):new ce(t,n));return new ze(i,N.empty(),e)}function Td(r){return new ze(r.readTime,r.key,Jn)}class ze{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ze(B.min(),N.empty(),Jn)}static max(){return new ze(B.max(),N.empty(),Jn)}}function Ga(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(r.documentKey,e.documentKey),t!==0?t:$(r.largestBatchId,e.largestBatchId))}/**
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
 */const Ed="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zt(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Ed)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):v.reject(t)}static resolve(e){return new v((t,n)=>{t(e)})}static reject(e){return new v((t,n)=>{n(e)})}static waitFor(e){return new v((t,n)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},c=>n(c))}),a=!0,s===i&&t()})}static or(e){let t=v.resolve(!1);for(const n of e)t=t.next(i=>i?v.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new v((n,i)=>{const s=e.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++u,u===s&&n(a)},f=>i(f))}})}static doWhile(e,t){return new v((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */const je="SimpleDb";class Ks{static open(e,t,n,i){try{return new Ks(t,e.transaction(i,n))}catch(s){throw new Qr(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new we,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Qr(e,t.error)):this.m.resolve()},this.transaction.onerror=n=>{const i=Ka(n.target.error);this.m.reject(new Qr(e,i))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(C(je,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new x_(t)}}class et{static delete(e){return C(je,"Removing database:",e),rn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Jh())return!1;if(et.v())return!0;const e=Es(),t=et.C(e),n=0<t&&t<10,i=wd(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.O=n,et.C(Es())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(C(je,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;t(a)},i.onblocked=()=>{n(new Qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new V(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new V(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Qr(e,a))},i.onupgradeneeded=s=>{C(je,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.O.B(a,i.transaction,s.oldVersion,this.version).next(()=>{C(je,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.N(e);const u=Ks.open(this.db,e,s?"readonly":"readwrite",n),c=i(u).next(h=>(u.S(),h)).catch(h=>(u.abort(h),v.reject(h))).toPromise();return c.catch(()=>{}),await u.p,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(C(je,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function wd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class D_{constructor(e){this.q=e,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.K=e}delete(){return rn(this.q.delete())}}class Qr extends V{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Gt(r){return r.name==="IndexedDbTransactionError"}class x_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C(je,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(C(je,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),rn(n)}add(e){return C(je,"ADD",this.store.name,e,e),rn(this.store.add(e))}get(e){return rn(this.store.get(e)).next(t=>(t===void 0&&(t=null),C(je,"GET",this.store.name,e,t),t))}delete(e){return C(je,"DELETE",this.store.name,e),rn(this.store.delete(e))}count(){return C(je,"COUNT",this.store.name),rn(this.store.count())}G(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new v((a,u)=>{s.onerror=c=>{u(c.target.error)},s.onsuccess=c=>{a(c.target.result)}})}{const s=this.cursor(n),a=[];return this.j(s,(u,c)=>{a.push(c)}).next(()=>a)}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new v((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}J(e,t){C(je,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const i=this.cursor(n);return this.j(i,(s,a,u)=>u.delete())}Z(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.j(i,t)}X(e){const t=this.cursor({});return new v((n,i)=>{t.onerror=s=>{const a=Ka(s.target.error);i(a)},t.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}j(e,t){const n=[];return new v((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const c=new D_(u),h=t(u.primaryKey,u.value,c);if(h instanceof v){const f=h.catch(m=>(c.done(),v.reject(m)));n.push(f)}c.isDone?i():c.U===null?u.continue():u.continue(c.U)}}).next(()=>v.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function rn(r){return new v((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Ka(n.target.error);t(i)}})}let vl=!1;function Ka(r){const e=et.C(Es());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vl||(vl=!0,setTimeout(()=>{throw n},0)),n}}return r}const Yr="IndexBackfiller";class O_{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){C(Yr,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();C(Yr,`Documents written: ${t}`)}catch(t){Gt(t)?C(Yr,"Ignoring IndexedDB error during index backfill: ",t):await zt(t)}await this.te(6e4)})}}class k_{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const n=new Set;let i=t,s=!0;return v.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return C(Yr,`Processing collection: ${a}`),this.ie(e,a,i).next(u=>{i-=u,n.add(a)});s=!1})).next(()=>t-i)}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.se(i,s)).next(u=>(C(Yr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>a.size)}))}se(e,t){let n=e;return t.changes.forEach((i,s)=>{const a=Td(s);Ga(a,n)>0&&(n=a)}),new ze(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */const Dt=-1;function Ei(r){return r==null}function si(r){return r===0&&1/r==-1/0}function Ad(r){return typeof r=="number"&&Number.isInteger(r)&&!si(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const As="";function De(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=wl(e)),e=N_(r.get(t),e);return wl(e)}function N_(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case As:t+="";break;default:t+=s}}return t}function wl(r){return r+As+""}function Je(r){const e=r.length;if(L(e>=2),e===2)return L(r.charAt(0)===As&&r.charAt(1)===""),G.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const a=r.indexOf(As,s);switch((a<0||a>t)&&F(),r.charAt(a+1)){case"":const u=r.substring(s,a);let c;i.length===0?c=u:(i+=u,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:F()}s=a+2}return new G(n)}/**
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
 */const nn="remoteDocuments",vi="owner",On="owner",oi="mutationQueues",M_="userId",He="mutations",Al="batchId",cn="userMutationsIndex",Rl=["userId","batchId"];/**
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
 */function ds(r,e){return[r,De(e)]}function Rd(r,e,t){return[r,De(e),t]}const F_={},Xn="documentMutations",Rs="remoteDocumentsV14",L_=["prefixPath","collectionGroup","readTime","documentId"],fs="documentKeyIndex",B_=["prefixPath","collectionGroup","documentId"],Sd="collectionGroupIndex",U_=["collectionGroup","readTime","prefixPath","documentId"],ai="remoteDocumentGlobal",ca="remoteDocumentGlobalKey",Zn="targets",Pd="queryTargetsIndex",q_=["canonicalId","targetId"],er="targetDocuments",$_=["targetId","path"],Wa="documentTargetsIndex",j_=["path","targetId"],Ss="targetGlobalKey",fn="targetGlobal",ui="collectionParents",z_=["collectionId","parent"],tr="clientMetadata",G_="clientId",Ws="bundles",K_="bundleId",Hs="namedQueries",W_="name",Ha="indexConfiguration",H_="indexId",la="collectionGroupIndex",Q_="collectionGroup",Ps="indexState",Y_=["indexId","uid"],Vd="sequenceNumberIndex",J_=["uid","sequenceNumber"],Vs="indexEntries",X_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Cd="documentKeyIndex",Z_=["indexId","uid","orderedDocumentKey"],Qs="documentOverlays",ey=["userId","collectionPath","documentId"],ha="collectionPathOverlayIndex",ty=["userId","collectionPath","largestBatchId"],Dd="collectionGroupOverlayIndex",ny=["userId","collectionGroup","largestBatchId"],Qa="globals",ry="name",xd=[oi,He,Xn,nn,Zn,vi,fn,er,tr,ai,ui,Ws,Hs],iy=[...xd,Qs],Od=[oi,He,Xn,Rs,Zn,vi,fn,er,tr,ai,ui,Ws,Hs,Qs],kd=Od,Ya=[...kd,Ha,Ps,Vs],sy=Ya,oy=[...Ya,Qa];/**
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
 */class da extends vd{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function ye(r,e){const t=M(r);return et.M(t.ue,e)}/**
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
 */function Sl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Kt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Nd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class re{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Ee.RED,this.left=i??Ee.EMPTY,this.right=s??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Ee(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pl(this.data.getIterator())}getIteratorFrom(e){return new Pl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ee(this.comparator);return t.data=e,t}}class Pl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new ee(ae.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Md extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function ay(){return typeof atob<"u"}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Md("Invalid base64 string: "+s):s}}(e);return new de(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const uy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(r){if(L(!!r),typeof r=="string"){let e=0;const t=uy.exec(r);if(L(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(r.seconds),nanos:oe(r.nanos)}}function oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function dt(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
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
 */const Fd="server_timestamp",Ld="__type__",Bd="__previous_value__",Ud="__local_write_time__";function Ys(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ld])===null||t===void 0?void 0:t.stringValue)===Fd}function Js(r){const e=r.mapValue.fields[Bd];return Ys(e)?Js(e):e}function ci(r){const e=ht(r.mapValue.fields[Ud].timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class cy{constructor(e,t,n,i,s,a,u,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h}}const Cs="(default)";class Mt{constructor(e,t){this.projectId=e,this.database=t||Cs}static empty(){return new Mt("","")}get isDefaultDatabase(){return this.database===Cs}isEqual(e){return e instanceof Mt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ja="__type__",qd="__max__",St={mapValue:{fields:{__type__:{stringValue:qd}}}},Xa="__vector__",nr="value",gs={nullValue:"NULL_VALUE"};function Ft(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ys(r)?4:$d(r)?9007199254740991:Xs(r)?10:11:F()}function rt(r,e){if(r===e)return!0;const t=Ft(r);if(t!==Ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ci(r).isEqual(ci(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=ht(i.timestampValue),u=ht(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return dt(i.bytesValue).isEqual(dt(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return oe(i.geoPointValue.latitude)===oe(s.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return oe(i.integerValue)===oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=oe(i.doubleValue),u=oe(s.doubleValue);return a===u?si(a)===si(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return Yn(r.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Sl(a)!==Sl(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!rt(a[c],u[c])))return!1;return!0}(r,e);default:return F()}}function li(r,e){return(r.values||[]).find(t=>rt(t,e))!==void 0}function Lt(r,e){if(r===e)return 0;const t=Ft(r),n=Ft(e);if(t!==n)return $(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,e.booleanValue);case 2:return function(s,a){const u=oe(s.integerValue||s.doubleValue),c=oe(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return Vl(r.timestampValue,e.timestampValue);case 4:return Vl(ci(r),ci(e));case 5:return $(r.stringValue,e.stringValue);case 6:return function(s,a){const u=dt(s),c=dt(a);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=$(u[h],c[h]);if(f!==0)return f}return $(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const u=$(oe(s.latitude),oe(a.latitude));return u!==0?u:$(oe(s.longitude),oe(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Cl(r.arrayValue,e.arrayValue);case 10:return function(s,a){var u,c,h,f;const m=s.fields||{},_=a.fields||{},R=(u=m[nr])===null||u===void 0?void 0:u.arrayValue,D=(c=_[nr])===null||c===void 0?void 0:c.arrayValue,O=$(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Cl(R,D)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===St.mapValue&&a===St.mapValue)return 0;if(s===St.mapValue)return 1;if(a===St.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const _=$(c[m],f[m]);if(_!==0)return _;const R=Lt(u[c[m]],h[f[m]]);if(R!==0)return R}return $(c.length,f.length)}(r.mapValue,e.mapValue);default:throw F()}}function Vl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return $(r,e);const t=ht(r),n=ht(e),i=$(t.seconds,n.seconds);return i!==0?i:$(t.nanos,n.nanos)}function Cl(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Lt(t[i],n[i]);if(s)return s}return $(t.length,n.length)}function rr(r){return fa(r)}function fa(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=ht(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return dt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return N.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=fa(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${fa(t.fields[a])}`;return i+"}"}(r.mapValue):F()}function ms(r){switch(Ft(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Js(r);return e?16+ms(e):16;case 5:return 2*r.stringValue.length;case 6:return dt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+ms(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Kt(n.fields,(s,a)=>{i+=s.length+ms(a)}),i}(r.mapValue);default:throw F()}}function mn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ga(r){return!!r&&"integerValue"in r}function hi(r){return!!r&&"arrayValue"in r}function Dl(r){return!!r&&"nullValue"in r}function xl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ps(r){return!!r&&"mapValue"in r}function Xs(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ja])===null||t===void 0?void 0:t.stringValue)===Xa}function Jr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Kt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Jr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function $d(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qd}const jd={mapValue:{fields:{[Ja]:{stringValue:Xa},[nr]:{arrayValue:{}}}}};function ly(r){return"nullValue"in r?gs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?mn(Mt.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Xs(r)?jd:{mapValue:{}}:F()}function hy(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?mn(Mt.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?jd:"mapValue"in r?Xs(r)?{mapValue:{}}:St:F()}function Ol(r,e){const t=Lt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function kl(r,e){const t=Lt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class ve{constructor(e){this.value=e}static empty(){return new ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(t)}setAll(e){let t=ae.emptyPath(),n={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=u.popLast()}a?n[u.lastSegment()]=Jr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ps(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Kt(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new ve(Jr(this.value))}}function zd(r){const e=[];return Kt(r.fields,(t,n)=>{const i=new ae([t]);if(ps(n)){const s=zd(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ue(e)}/**
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
 */class se{constructor(e,t,n,i,s,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new se(e,0,B.min(),B.min(),B.min(),ve.empty(),0)}static newFoundDocument(e,t,n,i){return new se(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new se(e,2,t,B.min(),B.min(),ve.empty(),0)}static newUnknownDocument(e,t){return new se(e,3,t,B.min(),B.min(),ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bt{constructor(e,t){this.position=e,this.inclusive=t}}function Nl(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),t.key):n=Lt(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ml(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class di{constructor(e,t="asc"){this.field=e,this.dir=t}}function dy(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Gd{}class K extends Gd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new fy(e,t,n):t==="array-contains"?new py(e,n):t==="in"?new Jd(e,n):t==="not-in"?new _y(e,n):t==="array-contains-any"?new yy(e,n):new K(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new gy(e,n):new my(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Lt(t,this.value)):t!==null&&Ft(this.value)===Ft(t)&&this.matchesComparison(Lt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Gd{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Z(e,t)}matches(e){return ir(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ir(r){return r.op==="and"}function ma(r){return r.op==="or"}function Za(r){return Kd(r)&&ir(r)}function Kd(r){for(const e of r.filters)if(e instanceof Z)return!1;return!0}function pa(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+rr(r.value);if(Za(r))return r.filters.map(e=>pa(e)).join(",");{const e=r.filters.map(t=>pa(t)).join(",");return`${r.op}(${e})`}}function Wd(r,e){return r instanceof K?function(n,i){return i instanceof K&&n.op===i.op&&n.field.isEqual(i.field)&&rt(n.value,i.value)}(r,e):r instanceof Z?function(n,i){return i instanceof Z&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,u)=>s&&Wd(a,i.filters[u]),!0):!1}(r,e):void F()}function Hd(r,e){const t=r.filters.concat(e);return Z.create(t,r.op)}function Qd(r){return r instanceof K?function(t){return`${t.field.canonicalString()} ${t.op} ${rr(t.value)}`}(r):r instanceof Z?function(t){return t.op.toString()+" {"+t.getFilters().map(Qd).join(" ,")+"}"}(r):"Filter"}class fy extends K{constructor(e,t,n){super(e,t,n),this.key=N.fromName(n.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class gy extends K{constructor(e,t){super(e,"in",t),this.keys=Yd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class my extends K{constructor(e,t){super(e,"not-in",t),this.keys=Yd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>N.fromName(n.referenceValue))}class py extends K{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hi(t)&&li(t.arrayValue,this.value)}}class Jd extends K{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&li(this.value.arrayValue,t)}}class _y extends K{constructor(e,t){super(e,"not-in",t)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!li(this.value.arrayValue,t)}}class yy extends K{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>li(this.value.arrayValue,n))}}/**
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
 */class by{constructor(e,t=null,n=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.le=null}}function _a(r,e=null,t=[],n=[],i=null,s=null,a=null){return new by(r,e,t,n,i,s,a)}function pn(r){const e=M(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>pa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ei(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>rr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>rr(n)).join(",")),e.le=t}return e.le}function wi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!dy(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Wd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ml(r.startAt,e.startAt)&&Ml(r.endAt,e.endAt)}function Ds(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function xs(r,e){return r.filters.filter(t=>t instanceof K&&t.field.isEqual(e))}function Fl(r,e,t){let n=gs,i=!0;for(const s of xs(r,e)){let a=gs,u=!0;switch(s.op){case"<":case"<=":a=ly(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,u=!1;break;case"!=":case"not-in":a=gs}Ol({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Ol({value:n,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}function Ll(r,e,t){let n=St,i=!0;for(const s of xs(r,e)){let a=St,u=!0;switch(s.op){case">=":case">":a=hy(s.value),u=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,u=!1;break;case"!=":case"not-in":a=St}kl({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];kl({value:n,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class gt{constructor(e,t=null,n=[],i=[],s=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Xd(r,e,t,n,i,s,a,u){return new gt(r,e,t,n,i,s,a,u)}function pr(r){return new gt(r)}function Bl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function eu(r){return r.collectionGroup!==null}function zn(r){const e=M(r);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ee(ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new di(s,n))}),t.has(ae.keyField().canonicalString())||e.he.push(new di(ae.keyField(),n))}return e.he}function Fe(r){const e=M(r);return e.Pe||(e.Pe=Iy(e,zn(r))),e.Pe}function Iy(r,e){if(r.limitType==="F")return _a(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new di(i.field,s)});const t=r.endAt?new Bt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Bt(r.startAt.position,r.startAt.inclusive):null;return _a(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ya(r,e){const t=r.filters.concat([e]);return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Os(r,e,t){return new gt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ai(r,e){return wi(Fe(r),Fe(e))&&r.limitType===e.limitType}function Zd(r){return`${pn(Fe(r))}|lt:${r.limitType}`}function Un(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Qd(i)).join(", ")}]`),Ei(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>rr(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>rr(i)).join(",")),`Target(${n})`}(Fe(r))}; limitType=${r.limitType})`}function Ri(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):N.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of zn(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,u,c){const h=Nl(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,zn(n),i)||n.endAt&&!function(a,u,c){const h=Nl(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,zn(n),i))}(r,e)}function ef(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function tf(r){return(e,t)=>{let n=!1;for(const i of zn(r)){const s=Ty(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Ty(r,e,t){const n=r.field.isKeyField()?N.comparator(e.key,t.key):function(s,a,u){const c=a.data.field(s),h=u.data.field(s);return c!==null&&h!==null?Lt(c,h):F()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
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
 */class mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Nd(this.inner)}size(){return this.innerSize}}/**
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
 */const Ey=new re(N.comparator);function qe(){return Ey}const nf=new re(N.comparator);function Kr(...r){let e=nf;for(const t of r)e=e.insert(t.key,t);return e}function rf(r){let e=nf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Xe(){return Xr()}function sf(){return Xr()}function Xr(){return new mt(r=>r.toString(),(r,e)=>r.isEqual(e))}const vy=new re(N.comparator),wy=new ee(N.comparator);function z(...r){let e=wy;for(const t of r)e=e.add(t);return e}const Ay=new ee($);function tu(){return Ay}/**
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
 */function nu(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:si(e)?"-0":e}}function of(r){return{integerValue:""+r}}function af(r,e){return Ad(e)?of(e):nu(r,e)}/**
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
 */class Zs{constructor(){this._=void 0}}function Ry(r,e,t){return r instanceof sr?function(i,s){const a={fields:{[Ld]:{stringValue:Fd},[Ud]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ys(s)&&(s=Js(s)),s&&(a.fields[Bd]=s),{mapValue:a}}(t,e):r instanceof _n?cf(r,e):r instanceof yn?lf(r,e):function(i,s){const a=uf(i,s),u=Ul(a)+Ul(i.Ie);return ga(a)&&ga(i.Ie)?of(u):nu(i.serializer,u)}(r,e)}function Sy(r,e,t){return r instanceof _n?cf(r,e):r instanceof yn?lf(r,e):t}function uf(r,e){return r instanceof or?function(n){return ga(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class sr extends Zs{}class _n extends Zs{constructor(e){super(),this.elements=e}}function cf(r,e){const t=hf(e);for(const n of r.elements)t.some(i=>rt(i,n))||t.push(n);return{arrayValue:{values:t}}}class yn extends Zs{constructor(e){super(),this.elements=e}}function lf(r,e){let t=hf(e);for(const n of r.elements)t=t.filter(i=>!rt(i,n));return{arrayValue:{values:t}}}class or extends Zs{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ul(r){return oe(r.integerValue||r.doubleValue)}function hf(r){return hi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Si{constructor(e,t){this.field=e,this.transform=t}}function Py(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof _n&&i instanceof _n||n instanceof yn&&i instanceof yn?Yn(n.elements,i.elements,rt):n instanceof or&&i instanceof or?rt(n.Ie,i.Ie):n instanceof sr&&i instanceof sr}(r.transform,e.transform)}class Vy{constructor(e,t){this.version=e,this.transformResults=t}}class ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ue}static exists(e){return new ue(void 0,e)}static updateTime(e){return new ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _s(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class eo{}function df(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new yr(r.key,ue.none()):new _r(r.key,r.data,ue.none());{const t=r.data,n=ve.empty();let i=new ee(ae.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new pt(r.key,n,new Ue(i.toArray()),ue.none())}}function Cy(r,e,t){r instanceof _r?function(i,s,a){const u=i.value.clone(),c=$l(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof pt?function(i,s,a){if(!_s(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=$l(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(ff(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Zr(r,e,t,n){return r instanceof _r?function(s,a,u,c){if(!_s(s.precondition,a))return u;const h=s.value.clone(),f=jl(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof pt?function(s,a,u,c){if(!_s(s.precondition,a))return u;const h=jl(s.fieldTransforms,c,a),f=a.data;return f.setAll(ff(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,a,u){return _s(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function Dy(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=uf(n.transform,i||null);s!=null&&(t===null&&(t=ve.empty()),t.set(n.field,s))}return t||null}function ql(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Yn(n,i,(s,a)=>Py(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class _r extends eo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pt extends eo{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ff(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function $l(r,e,t){const n=new Map;L(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,u=e.data.field(s.field);n.set(s.field,Sy(a,u,t[i]))}return n}function jl(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,Ry(s,a,e))}return n}class yr extends eo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ru extends eo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iu{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Cy(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Zr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Zr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=sf();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const c=df(a,u);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&Yn(this.mutations,e.mutations,(t,n)=>ql(t,n))&&Yn(this.baseMutations,e.baseMutations,(t,n)=>ql(t,n))}}class su{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){L(e.mutations.length===n.length);let i=function(){return vy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new su(e,t,n,i)}}/**
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
 */class ou{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class xy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pe,H;function gf(r){switch(r){case S.OK:return F();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return F()}}function mf(r){if(r===void 0)return fe("GRPC error has no .code"),S.UNKNOWN;switch(r){case pe.OK:return S.OK;case pe.CANCELLED:return S.CANCELLED;case pe.UNKNOWN:return S.UNKNOWN;case pe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case pe.INTERNAL:return S.INTERNAL;case pe.UNAVAILABLE:return S.UNAVAILABLE;case pe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case pe.NOT_FOUND:return S.NOT_FOUND;case pe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case pe.ABORTED:return S.ABORTED;case pe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case pe.DATA_LOSS:return S.DATA_LOSS;default:return F()}}(H=pe||(pe={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pf(){return new TextEncoder}/**
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
 */const Oy=new Ct([4294967295,4294967295],0);function zl(r){const e=pf().encode(r),t=new hd;return t.update(e),new Uint8Array(t.digest())}function Gl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ct([t,n],0),new Ct([i,s],0)]}class au{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Wr(`Invalid padding: ${t}`);if(n<0)throw new Wr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ct.fromNumber(this.Ee)}Ae(e,t,n){let i=e.add(t.multiply(Ct.fromNumber(n)));return i.compare(Oy)===1&&(i=new Ct([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=zl(e),[n,i]=Gl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(n,i,s);if(!this.Re(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new au(s,i,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.Ee===0)return;const t=zl(e),[n,i]=Gl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(n,i,s);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pi{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Pi(B.min(),i,new re($),qe(),z())}}class Vi{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Vi(n,t,z(),z(),z())}}/**
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
 */class ys{constructor(e,t,n,i){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=i}}class _f{constructor(e,t){this.targetId=e,this.ge=t}}class yf{constructor(e,t,n=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Kl{constructor(){this.pe=0,this.ye=Wl(),this.we=de.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=z(),t=z(),n=z();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:F()}}),new Vi(this.we,this.be,e,t,n)}Me(){this.Se=!1,this.ye=Wl()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,L(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class ky{constructor(e){this.ke=e,this.qe=new Map,this.Qe=qe(),this.$e=ss(),this.Ke=ss(),this.Ue=new re($)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((n,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,n=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(Ds(s))if(n===0){const a=new N(s.path);this.ze(t,a,se.newNoDocument(a,B.min()))}else L(n===1);else{const a=this.et(t);if(a!==n){const u=this.tt(e),c=u?this.nt(u,e,a):1;if(c!==0){this.Ye(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,h)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=dt(n).toUint8Array()}catch(c){if(c instanceof Md)return nt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new au(a,i,s)}catch(c){return nt(c instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ee===0?null:u}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,a)=>{const u=this.Xe(a);if(u){if(s.current&&Ds(u.target)){const c=new N(u.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,se.newNoDocument(c,e))}s.ve&&(t.set(a,s.Fe()),s.Me())}});let n=z();this.Ke.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(s))}),this.Qe.forEach((s,a)=>a.setReadTime(e));const i=new Pi(e,t,this.Ue,this.Qe,n);return this.Qe=qe(),this.$e=ss(),this.Ke=ss(),this.Ue=new re($),i}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Kl,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new ee($),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new ee($),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Kl),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ss(){return new re(N.comparator)}function Wl(){return new re(N.comparator)}const Ny={asc:"ASCENDING",desc:"DESCENDING"},My={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fy={and:"AND",or:"OR"};class Ly{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ba(r,e){return r.useProto3Json||Ei(e)?e:{value:e}}function ar(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function By(r,e){return ar(r,e.toTimestamp())}function ge(r){return L(!!r),B.fromTimestamp(function(t){const n=ht(t);return new ce(n.seconds,n.nanos)}(r))}function uu(r,e){return Ia(r,e).canonicalString()}function Ia(r,e){const t=function(i){return new G(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function If(r){const e=G.fromString(r);return L(Cf(e)),e}function fi(r,e){return uu(r.databaseId,e.path)}function tt(r,e){const t=If(e);if(t.get(1)!==r.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new N(vf(t))}function Tf(r,e){return uu(r.databaseId,e)}function Ef(r){const e=If(r);return e.length===4?G.emptyPath():vf(e)}function Ta(r){return new G(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vf(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Hl(r,e,t){return{name:fi(r,e),fields:t.value.mapValue.fields}}function wf(r,e,t){const n=tt(r,e.name),i=ge(e.updateTime),s=e.createTime?ge(e.createTime):B.min(),a=new ve({mapValue:{fields:e.fields}}),u=se.newFoundDocument(n,i,s,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function Uy(r,e){return"found"in e?function(n,i){L(!!i.found),i.found.name,i.found.updateTime;const s=tt(n,i.found.name),a=ge(i.found.updateTime),u=i.found.createTime?ge(i.found.createTime):B.min(),c=new ve({mapValue:{fields:i.found.fields}});return se.newFoundDocument(s,a,u,c)}(r,e):"missing"in e?function(n,i){L(!!i.missing),L(!!i.readTime);const s=tt(n,i.missing),a=ge(i.readTime);return se.newNoDocument(s,a)}(r,e):F()}function qy(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string"),de.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),de.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(h){const f=h.code===void 0?S.UNKNOWN:mf(h.code);return new V(f,h.message||"")}(a);t=new yf(n,i,s,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=tt(r,n.document.name),s=ge(n.document.updateTime),a=n.document.createTime?ge(n.document.createTime):B.min(),u=new ve({mapValue:{fields:n.document.fields}}),c=se.newFoundDocument(i,s,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ys(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=tt(r,n.document),s=n.readTime?ge(n.readTime):B.min(),a=se.newNoDocument(i,s),u=n.removedTargetIds||[];t=new ys([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=tt(r,n.document),s=n.removedTargetIds||[];t=new ys([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new xy(i,s),u=n.targetId;t=new _f(u,a)}}return t}function gi(r,e){let t;if(e instanceof _r)t={update:Hl(r,e.key,e.value)};else if(e instanceof yr)t={delete:fi(r,e.key)};else if(e instanceof pt)t={update:Hl(r,e.key,e.data),updateMask:Wy(e.fieldMask)};else{if(!(e instanceof ru))return F();t={verify:fi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const u=a.transform;if(u instanceof sr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof _n)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof or)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw F()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:By(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(r,e.precondition)),t}function Ea(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?ue.updateTime(ge(s.updateTime)):s.exists!==void 0?ue.exists(s.exists):ue.none()}(e.currentDocument):ue.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new sr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new _n(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new yn(f)}else"increment"in u?c=new or(a,u.increment):F();const h=ae.fromServerFormat(u.fieldPath);return new Si(h,c)}(r,i)):[];if(e.update){e.update.name;const i=tt(r,e.update.name),s=new ve({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(c){const h=c.fieldPaths||[];return new Ue(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new pt(i,s,a,t,n)}return new _r(i,s,t,n)}if(e.delete){const i=tt(r,e.delete);return new yr(i,t)}if(e.verify){const i=tt(r,e.verify);return new ru(i,t)}return F()}function $y(r,e){return r&&r.length>0?(L(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?ge(i.updateTime):ge(s);return a.isEqual(B.min())&&(a=ge(s)),new Vy(a,i.transformResults||[])}(t,e))):[]}function Af(r,e){return{documents:[Tf(r,e.path)]}}function Rf(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Tf(r,i);const s=function(h){if(h.length!==0)return Vf(Z.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:qn(_.field),direction:zy(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=ba(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:i}}function Sf(r){let e=Ef(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){L(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const _=Pf(m);return _ instanceof Z&&Za(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(_=>function(D){return new di($n(D.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(t.orderBy));let u=null;t.limit&&(u=function(m){let _;return _=typeof m=="object"?m.value:m,Ei(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(m){const _=!!m.before,R=m.values||[];return new Bt(R,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,R=m.values||[];return new Bt(R,_)}(t.endAt)),Xd(e,i,a,s,u,"F",c,h)}function jy(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=$n(t.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=$n(t.unaryFilter.field);return K.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$n(t.unaryFilter.field);return K.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=$n(t.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(t){return K.create($n(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Z.create(t.compositeFilter.filters.map(n=>Pf(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(r):F()}function zy(r){return Ny[r]}function Gy(r){return My[r]}function Ky(r){return Fy[r]}function qn(r){return{fieldPath:r.canonicalString()}}function $n(r){return ae.fromServerFormat(r.fieldPath)}function Vf(r){return r instanceof K?function(t){if(t.op==="=="){if(xl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NAN"}};if(Dl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NAN"}};if(Dl(t.value))return{unaryFilter:{field:qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(t.field),op:Gy(t.op),value:t.value}}}(r):r instanceof Z?function(t){const n=t.getFilters().map(i=>Vf(i));return n.length===1?n[0]:{compositeFilter:{op:Ky(t.op),filters:n}}}(r):F()}function Wy(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Cf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ct{constructor(e,t,n,i,s=B.min(),a=B.min(),u=de.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Df{constructor(e){this.Tt=e}}function Hy(r,e){let t;if(e.document)t=wf(r.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=N.fromSegments(e.noDocument.path),i=In(e.noDocument.readTime);t=se.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const n=N.fromSegments(e.unknownDocument.path),i=In(e.unknownDocument.version);t=se.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ce(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),t}function Ql(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:ks(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,a){return{name:fi(s,a.key),fields:a.data.value.mapValue.fields,updateTime:ar(s,a.version.toTimestamp()),createTime:ar(s,a.createTime.toTimestamp())}}(r.Tt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:bn(e.version)};else{if(!e.isUnknownDocument())return F();n.unknownDocument={path:t.path.toArray(),version:bn(e.version)}}return n}function ks(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function bn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function In(r){const e=new ce(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function sn(r,e){const t=(e.baseMutations||[]).map(s=>Ea(r.Tt,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const u=e.mutations[s+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Ea(r.Tt,s)),i=ce.fromMillis(e.localWriteTimeMs);return new iu(e.batchId,i,t,n)}function Hr(r){const e=In(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?In(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return L(s.documents.length===1),Fe(pr(Ef(s.documents[0])))}(r.query):function(s){return Fe(Sf(s))}(r.query),new ct(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function xf(r,e){const t=bn(e.snapshotVersion),n=bn(e.lastLimboFreeSnapshotVersion);let i;i=Ds(e.target)?Af(r.Tt,e.target):Rf(r.Tt,e.target).ht;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function cu(r){const e=Sf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Os(e,e.limit,"L"):e}function Qo(r,e){return new ou(e.largestBatchId,Ea(r.Tt,e.overlayMutation))}function Yl(r,e){const t=e.path.lastSegment();return[r,De(e.path.popLast()),t]}function Jl(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:bn(n.readTime),documentKey:De(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Qy{getBundleMetadata(e,t){return Xl(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:In(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Xl(e).put(function(i){return{bundleId:i.id,createTime:bn(ge(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Zl(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:cu(s.bundledQuery),readTime:In(s.readTime)}}(n)})}saveNamedQuery(e,t){return Zl(e).put(function(i){return{name:i.name,readTime:bn(ge(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Xl(r){return ye(r,Ws)}function Zl(r){return ye(r,Hs)}/**
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
 */class to{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const n=t.uid||"";return new to(e,n)}getOverlay(e,t){return Ur(e).get(Yl(this.userId,t)).next(n=>n?Qo(this.serializer,n):null)}getOverlays(e,t){const n=Xe();return v.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,a)=>{const u=new ou(t,a);i.push(this.Et(e,u))}),v.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(a=>i.add(De(a.getCollectionPath())));const s=[];return i.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(Ur(e).J(ha,u))}),v.waitFor(s)}getOverlaysForCollection(e,t,n){const i=Xe(),s=De(t),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ur(e).G(ha,a).next(u=>{for(const c of u){const h=Qo(this.serializer,c);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=Xe();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ur(e).Z({index:Dd,range:u},(c,h,f)=>{const m=Qo(this.serializer,h);s.size()<i||m.largestBatchId===a?(s.set(m.getKey(),m),a=m.largestBatchId):f.done()}).next(()=>s)}Et(e,t){return Ur(e).put(function(i,s,a){const[u,c,h]=Yl(s,a.mutation.key);return{userId:s,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:gi(i.Tt,a.mutation)}}(this.serializer,this.userId,t))}}function Ur(r){return ye(r,Qs)}/**
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
 */class Yy{dt(e){return ye(e,Qa)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class on{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(oe(e.integerValue));else if("doubleValue"in e){const n=oe(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),si(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),typeof n=="string"&&(n=ht(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.bt(t);else if("bytesValue"in e)this.ft(t,30),t.St(dt(e.bytesValue)),this.bt(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?$d(e)?this.ft(t,Number.MAX_SAFE_INTEGER):Xs(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.bt(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.bt(t)):F()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const n=e.fields||{};this.ft(t,55);for(const i of Object.keys(n))this.wt(i,t),this.Rt(n[i],t)}vt(e,t){var n,i;const s=e.fields||{};this.ft(t,53);const a=nr,u=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.ft(t,15),t.gt(oe(u)),this.wt(a,t),this.Rt(s[a],t)}Ft(e,t){const n=e.values||[];this.ft(t,50);for(const i of n)this.Rt(i,t)}Dt(e,t){this.ft(t,37),N.fromName(e).path.forEach(n=>{this.ft(t,60),this.Mt(n,t)})}ft(e,t){e.gt(t)}bt(e){e.gt(2)}}on.xt=new on;/**
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
 */const Nn=255;function Jy(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function eh(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const a=Jy(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(e/8)}class Xy{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Nt(n.value),n=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.kt(n.value),n=t.next();this.qt()}Qt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Nt(n);else if(n<2048)this.Nt(960|n>>>6),this.Nt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|n>>>12),this.Nt(128|63&n>>>6),this.Nt(128|63&n);else{const i=t.codePointAt(0);this.Nt(240|i>>>18),this.Nt(128|63&i>>>12),this.Nt(128|63&i>>>6),this.Nt(128|63&i)}}this.Bt()}$t(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.kt(n);else if(n<2048)this.kt(960|n>>>6),this.kt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|n>>>12),this.kt(128|63&n>>>6),this.kt(128|63&n);else{const i=t.codePointAt(0);this.kt(240|i>>>18),this.kt(128|63&i>>>12),this.kt(128|63&i>>>6),this.kt(128|63&i)}}this.qt()}Kt(e){const t=this.Ut(e),n=eh(t);this.Wt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Gt(e){const t=this.Ut(e),n=eh(t);this.Wt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}zt(){this.jt(Nn),this.jt(255)}Ht(){this.Jt(Nn),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Ut(e){const t=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Nn?(this.jt(Nn),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Nn?(this.Jt(Nn),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class Zy{constructor(e){this.Zt=e}St(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Kt(e)}Vt(){this.Zt.zt()}}class eb{constructor(e){this.Zt=e}St(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class qr{constructor(){this.Zt=new Xy,this.Xt=new Zy(this.Zt),this.en=new eb(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
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
 */class an{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new an(this.indexId,this.documentKey,this.arrayValue,n)}}function Et(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=th(r.arrayValue,e.arrayValue),t!==0?t:(t=th(r.directionalValue,e.directionalValue),t!==0?t:N.comparator(r.documentKey,e.documentKey)))}function th(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class nh{constructor(e){this.rn=new ee((t,n)=>ae.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const n=t;n.isInequality()?this.rn=this.rn.add(n):this._n.push(n)}}get an(){return this.rn.size>1}un(e){if(L(e.collectionGroup===this.collectionId),this.an)return!1;const t=ua(e);if(t!==void 0&&!this.cn(t))return!1;const n=tn(e);let i=new Set,s=0,a=0;for(;s<n.length&&this.cn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.rn.size>0){const u=this.rn.getIterator().getNext();if(!i.has(u.field.canonicalString())){const c=n[s];if(!this.ln(u,c)||!this.hn(this.sn[a++],c))return!1}++s}for(;s<n.length;++s){const u=n[s];if(a>=this.sn.length||!this.hn(this.sn[a++],u))return!1}return!0}Pn(){if(this.an)return null;let e=new ee(ae.comparator);const t=[];for(const n of this._n)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new hs(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new hs(n.field,0))}for(const n of this.sn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new hs(n.field,n.dir==="asc"?0:1)));return new ws(ws.UNKNOWN_ID,this.collectionId,t,ii.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Of(r){var e,t;if(L(r instanceof K||r instanceof Z),r instanceof K){if(r instanceof Jd){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>K.create(r.field,"==",s)))||[];return Z.create(i,"or")}return r}const n=r.filters.map(i=>Of(i));return Z.create(n,r.op)}function tb(r){if(r.getFilters().length===0)return[];const e=Aa(Of(r));return L(kf(e)),va(e)||wa(e)?[e]:e.getFilters()}function va(r){return r instanceof K}function wa(r){return r instanceof Z&&Za(r)}function kf(r){return va(r)||wa(r)||function(t){if(t instanceof Z&&ma(t)){for(const n of t.getFilters())if(!va(n)&&!wa(n))return!1;return!0}return!1}(r)}function Aa(r){if(L(r instanceof K||r instanceof Z),r instanceof K)return r;if(r.filters.length===1)return Aa(r.filters[0]);const e=r.filters.map(n=>Aa(n));let t=Z.create(e,r.op);return t=Ns(t),kf(t)?t:(L(t instanceof Z),L(ir(t)),L(t.filters.length>1),t.filters.reduce((n,i)=>lu(n,i)))}function lu(r,e){let t;return L(r instanceof K||r instanceof Z),L(e instanceof K||e instanceof Z),t=r instanceof K?e instanceof K?function(i,s){return Z.create([i,s],"and")}(r,e):rh(r,e):e instanceof K?rh(e,r):function(i,s){if(L(i.filters.length>0&&s.filters.length>0),ir(i)&&ir(s))return Hd(i,s.getFilters());const a=ma(i)?i:s,u=ma(i)?s:i,c=a.filters.map(h=>lu(h,u));return Z.create(c,"or")}(r,e),Ns(t)}function rh(r,e){if(ir(e))return Hd(e,r.getFilters());{const t=e.filters.map(n=>lu(r,n));return Z.create(t,"or")}}function Ns(r){if(L(r instanceof K||r instanceof Z),r instanceof K)return r;const e=r.getFilters();if(e.length===1)return Ns(e[0]);if(Kd(r))return r;const t=e.map(i=>Ns(i)),n=[];return t.forEach(i=>{i instanceof K?n.push(i):i instanceof Z&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:Z.create(n,r.op)}/**
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
 */class nb{constructor(){this.Tn=new hu}addToCollectionParentIndex(e,t){return this.Tn.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(ze.min())}updateCollectionGroup(e,t,n){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class hu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ee(G.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ee(G.comparator)).toArray()}}/**
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
 */const ih="IndexedDbIndexManager",os=new Uint8Array(0);class rb{constructor(e,t){this.databaseId=t,this.In=new hu,this.En=new mt(n=>pn(n),(n,i)=>wi(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const s={collectionId:n,parent:De(i)};return sh(e).put(s)}return v.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[bd(t),""],!1,!0);return sh(e).G(i).next(s=>{for(const a of s){if(a.collectionId!==t)break;n.push(Je(a.parent))}return n})}addFieldIndex(e,t){const n=$r(e),i=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const a=Fn(e);return s.next(u=>{a.put(Jl(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=$r(e),i=Fn(e),s=Mn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=$r(e),n=Mn(e),i=Fn(e);return t.J().next(()=>n.J()).next(()=>i.J())}createTargetIndexes(e,t){return v.forEach(this.dn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new nh(n).Pn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=Mn(e);let i=!0;const s=new Map;return v.forEach(this.dn(t),a=>this.An(e,a).next(u=>{i&&(i=!!u),s.set(a,u)})).next(()=>{if(i){let a=z();const u=[];return v.forEach(s,(c,h)=>{C(ih,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(X=>`${X.fieldPath}:${X.kind}`).join(",")}`}(c)} to execute ${pn(t)}`);const f=function(U,X){const ne=ua(X);if(ne===void 0)return null;for(const Q of xs(U,ne.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(h,c),m=function(U,X){const ne=new Map;for(const Q of tn(X))for(const I of xs(U,Q.fieldPath))switch(I.op){case"==":case"in":ne.set(Q.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return ne.set(Q.fieldPath.canonicalString(),I.value),Array.from(ne.values())}return null}(h,c),_=function(U,X){const ne=[];let Q=!0;for(const I of tn(X)){const p=I.kind===0?Fl(U,I.fieldPath,U.startAt):Ll(U,I.fieldPath,U.startAt);ne.push(p.value),Q&&(Q=p.inclusive)}return new Bt(ne,Q)}(h,c),R=function(U,X){const ne=[];let Q=!0;for(const I of tn(X)){const p=I.kind===0?Ll(U,I.fieldPath,U.endAt):Fl(U,I.fieldPath,U.endAt);ne.push(p.value),Q&&(Q=p.inclusive)}return new Bt(ne,Q)}(h,c),D=this.Rn(c,h,_),O=this.Rn(c,h,R),x=this.Vn(c,h,m),q=this.mn(c.indexId,f,D,_.inclusive,O,R.inclusive,x);return v.forEach(q,j=>n.H(j,t.limit).next(U=>{U.forEach(X=>{const ne=N.fromSegments(X.documentKey);a.has(ne)||(a=a.add(ne),u.push(ne))})}))}).next(()=>u)}return v.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=tb(Z.create(e.filters,"and")).map(n=>_a(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,n,i,s,a,u){const c=(t!=null?t.length:1)*Math.max(n.length,s.length),h=c/(t!=null?t.length:1),f=[];for(let m=0;m<c;++m){const _=t?this.fn(t[m/h]):os,R=this.gn(e,_,n[m%h],i),D=this.pn(e,_,s[m%h],a),O=u.map(x=>this.gn(e,_,x,!0));f.push(...this.createRange(R,D,O))}return f}gn(e,t,n,i){const s=new an(e,N.empty(),t,n);return i?s:s.nn()}pn(e,t,n,i){const s=new an(e,N.empty(),t,n);return i?s.nn():s}An(e,t){const n=new nh(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const u of s)n.un(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(e,t){let n=2;const i=this.dn(t);return v.forEach(i,s=>this.An(e,s).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new ee(ae.comparator),f=!1;for(const m of c.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of c.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&n===2?1:n)}yn(e,t){const n=new qr;for(const i of tn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const a=n.tn(i.kind);on.xt.At(s,a)}return n.Yt()}fn(e){const t=new qr;return on.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const n=new qr;return on.xt.At(mn(this.databaseId,t),n.tn(function(s){const a=tn(s);return a.length===0?0:a[a.length-1].kind}(e))),n.Yt()}Vn(e,t,n){if(n===null)return[];let i=[];i.push(new qr);let s=0;for(const a of tn(e)){const u=n[s++];for(const c of i)if(this.bn(t,a.fieldPath)&&hi(u))i=this.Sn(i,a,u);else{const h=c.tn(a.kind);on.xt.At(u,h)}}return this.Dn(i)}Rn(e,t,n){return this.Vn(e,t,n.position)}Dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Yt();return t}Sn(e,t,n){const i=[...e],s=[];for(const a of n.arrayValue.values||[])for(const u of i){const c=new qr;c.seed(u.Yt()),on.xt.At(a,c.tn(t.kind)),s.push(c)}return s}bn(e,t){return!!e.filters.find(n=>n instanceof K&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=$r(e),i=Fn(e);return(t?n.G(la,IDBKeyRange.bound(t,t)):n.G()).next(s=>{const a=[];return v.forEach(s,u=>i.get([u.indexId,this.uid]).next(c=>{a.push(function(f,m){const _=m?new ii(m.sequenceNumber,new ze(In(m.readTime),new N(Je(m.documentKey)),m.largestBatchId)):ii.empty(),R=f.fields.map(([D,O])=>new hs(ae.fromServerFormat(D),O));return new ws(f.indexId,f.collectionGroup,R,_)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:$(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=$r(e),s=Fn(e);return this.vn(e).next(a=>i.G(la,IDBKeyRange.bound(t,t)).next(u=>v.forEach(u,c=>s.put(Jl(c.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return v.forEach(t,(i,s)=>{const a=n.get(i.collectionGroup);return(a?v.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(u=>(n.set(i.collectionGroup,u),v.forEach(u,c=>this.Cn(e,i,c).next(h=>{const f=this.Fn(s,c);return h.isEqual(f)?v.resolve():this.Mn(e,s,c,h,f)}))))})}xn(e,t,n,i){return Mn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.wn(n,t.key),documentKey:t.key.path.toArray()})}On(e,t,n,i){return Mn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.wn(n,t.key),t.key.path.toArray()])}Cn(e,t,n){const i=Mn(e);let s=new ee(Et);return i.Z({index:Cd,range:IDBKeyRange.only([n.indexId,this.uid,this.wn(n,t)])},(a,u)=>{s=s.add(new an(n.indexId,t,u.arrayValue,u.directionalValue))}).next(()=>s)}Fn(e,t){let n=new ee(Et);const i=this.yn(t,e);if(i==null)return n;const s=ua(t);if(s!=null){const a=e.data.field(s.fieldPath);if(hi(a))for(const u of a.arrayValue.values||[])n=n.add(new an(t.indexId,e.key,this.fn(u),i))}else n=n.add(new an(t.indexId,e.key,os,i));return n}Mn(e,t,n,i,s){C(ih,"Updating index entries for document '%s'",t.key);const a=[];return function(c,h,f,m,_){const R=c.getIterator(),D=h.getIterator();let O=kn(R),x=kn(D);for(;O||x;){let q=!1,j=!1;if(O&&x){const U=f(O,x);U<0?j=!0:U>0&&(q=!0)}else O!=null?j=!0:q=!0;q?(m(x),x=kn(D)):j?(_(O),O=kn(R)):(O=kn(R),x=kn(D))}}(i,s,Et,u=>{a.push(this.xn(e,t,n,u))},u=>{a.push(this.On(e,t,n,u))}),v.waitFor(a)}vn(e){let t=1;return Fn(e).Z({index:Vd,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,u)=>Et(a,u)).filter((a,u,c)=>!u||Et(a,c[u-1])!==0);const i=[];i.push(e);for(const a of n){const u=Et(a,e),c=Et(a,t);if(u===0)i[0]=e.nn();else if(u>0&&c<0)i.push(a),i.push(a.nn());else if(c>0)break}i.push(t);const s=[];for(let a=0;a<i.length;a+=2){if(this.Nn(i[a],i[a+1]))return[];const u=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,os,[]],c=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,os,[]];s.push(IDBKeyRange.bound(u,c))}return s}Nn(e,t){return Et(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(oh)}getMinOffset(e,t){return v.mapArray(this.dn(t),n=>this.An(e,n).next(i=>i||F())).next(oh)}}function sh(r){return ye(r,ui)}function Mn(r){return ye(r,Vs)}function $r(r){return ye(r,Ha)}function Fn(r){return ye(r,Ps)}function oh(r){L(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Ga(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}/**
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
 */const ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nf=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Mf(r,e,t){const n=r.store(He),i=r.store(Xn),s=[],a=IDBKeyRange.only(t.batchId);let u=0;const c=n.Z({range:a},(f,m,_)=>(u++,_.delete()));s.push(c.next(()=>{L(u===1)}));const h=[];for(const f of t.mutations){const m=Rd(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return v.waitFor(s).next(()=>h)}function Ms(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Nf,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);class no{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Bn={}}static It(e,t,n,i){L(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new no(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return vt(e).Z({index:cn,range:n},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=jn(e),a=vt(e);return a.add({}).next(u=>{L(typeof u=="number");const c=new iu(u,t,n,i),h=function(R,D,O){const x=O.baseMutations.map(j=>gi(R.Tt,j)),q=O.mutations.map(j=>gi(R.Tt,j));return{userId:D,batchId:O.batchId,localWriteTimeMs:O.localWriteTime.toMillis(),baseMutations:x,mutations:q}}(this.serializer,this.userId,c),f=[];let m=new ee((_,R)=>$(_.canonicalString(),R.canonicalString()));for(const _ of i){const R=Rd(this.userId,_.key.path,u);m=m.add(_.key.path.popLast()),f.push(a.put(h)),f.push(s.put(R,F_))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Bn[u]=c.keys()}),v.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return vt(e).get(t).next(n=>n?(L(n.userId===this.userId),sn(this.serializer,n)):null)}Ln(e,t){return this.Bn[t]?v.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Bn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return vt(e).Z({index:cn,range:i},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),s=sn(this.serializer,u)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Dt;return vt(e).Z({index:cn,range:t,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Dt],[this.userId,Number.POSITIVE_INFINITY]);return vt(e).G(cn,t).next(n=>n.map(i=>sn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ds(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return jn(e).Z({range:i},(a,u,c)=>{const[h,f,m]=a,_=Je(f);if(h===this.userId&&t.path.isEqual(_))return vt(e).get(m).next(R=>{if(!R)throw F();L(R.userId===this.userId),s.push(sn(this.serializer,R))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee($);const i=[];return t.forEach(s=>{const a=ds(this.userId,s.path),u=IDBKeyRange.lowerBound(a),c=jn(e).Z({range:u},(h,f,m)=>{const[_,R,D]=h,O=Je(R);_===this.userId&&s.path.isEqual(O)?n=n.add(D):m.done()});i.push(c)}),v.waitFor(i).next(()=>this.kn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=ds(this.userId,n),a=IDBKeyRange.lowerBound(s);let u=new ee($);return jn(e).Z({range:a},(c,h,f)=>{const[m,_,R]=c,D=Je(_);m===this.userId&&n.isPrefixOf(D)?D.length===i&&(u=u.add(R)):f.done()}).next(()=>this.kn(e,u))}kn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(vt(e).get(s).next(a=>{if(a===null)throw F();L(a.userId===this.userId),n.push(sn(this.serializer,a))}))}),v.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Mf(e.ue,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),v.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return v.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return jn(e).Z({range:n},(s,a,u)=>{if(s[0]===this.userId){const c=Je(s[1]);i.push(c)}else u.done()}).next(()=>{L(i.length===0)})})}containsKey(e,t){return Ff(e,this.userId,t)}Qn(e){return Lf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Dt,lastStreamToken:""})}}function Ff(r,e,t){const n=ds(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return jn(r).Z({range:s,Y:!0},(u,c,h)=>{const[f,m,_]=u;f===e&&m===i&&(a=!0),h.done()}).next(()=>a)}function vt(r){return ye(r,He)}function jn(r){return ye(r,Xn)}function Lf(r){return ye(r,oi)}/**
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
 */class Tn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Tn(0)}static Un(){return new Tn(-1)}}/**
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
 */class ib{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const n=new Tn(t.highestTargetId);return t.highestTargetId=n.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>B.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Wn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Gn(e,i)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(n=>(n.targetCount+=1,this.jn(t,n),this.Gn(e,n))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ln(e).delete(t.targetId)).next(()=>this.Wn(e)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.Gn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return Ln(e).Z((a,u)=>{const c=Hr(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>v.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Ln(e).Z((n,i)=>{const s=Hr(i);t(s)})}Wn(e){return uh(e).get(Ss).next(t=>(L(t!==null),t))}Gn(e,t){return uh(e).put(Ss,t)}zn(e,t){return Ln(e).put(xf(this.serializer,t))}jn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=pn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Ln(e).Z({range:i,index:Pd},(a,u,c)=>{const h=Hr(u);wi(t,h.target)&&(s=h,c.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=Rt(e);return t.forEach(a=>{const u=De(a.path);i.push(s.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(e,n,a))}),v.waitFor(i)}removeMatchingKeys(e,t,n){const i=Rt(e);return v.forEach(t,s=>{const a=De(s.path);return v.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=Rt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Rt(e);let s=z();return i.Z({range:n,Y:!0},(a,u,c)=>{const h=Je(a[1]),f=new N(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=De(t.path),i=IDBKeyRange.bound([n],[bd(n)],!1,!0);let s=0;return Rt(e).Z({index:Wa,Y:!0,range:i},([a,u],c,h)=>{a!==0&&(s++,h.done())}).next(()=>s>0)}lt(e,t){return Ln(e).get(t).next(n=>n?Hr(n):null)}}function Ln(r){return ye(r,Zn)}function uh(r){return ye(r,fn)}function Rt(r){return ye(r,er)}/**
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
 */const ch="LruGarbageCollector",sb=1048576;function lh([r,e],[t,n]){const i=$(r,t);return i===0?$(e,n):i}class ob{constructor(e){this.Hn=e,this.buffer=new ee(lh),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();lh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Bf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){C(ch,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gt(t)?C(ch,"Ignoring IndexedDB error during garbage collection: ",t):await zt(t)}await this.er(3e5)})}}class ab{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return v.resolve(Be.ae);const n=new ob(t);return this.tr.forEachTarget(e,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(ah)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ah):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,i,s,a,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,u=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),Bn()<=W.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Uf(r,e){return new ab(r,e)}/**
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
 */class ub{constructor(e,t){this.db=e,this.garbageCollector=Uf(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(n,i)=>t(i))}addReference(e,t,n){return as(e,n)}removeReference(e,t,n){return as(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return as(e,t)}ar(e,t){return function(i,s){let a=!1;return Lf(i).X(u=>Ff(i,u,s).next(c=>(c&&(a=!0),v.resolve(!c)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this._r(e,(a,u)=>{if(u<=t){const c=this.ar(e,a).next(h=>{if(!h)return s++,n.getEntry(e,a).next(()=>(n.removeEntry(a,B.min()),Rt(e).delete(function(m){return[0,De(m.path)]}(a))))});i.push(c)}}).next(()=>v.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return as(e,t)}_r(e,t){const n=Rt(e);let i,s=Be.ae;return n.Z({index:Wa},([a,u],{path:c,sequenceNumber:h})=>{a===0?(s!==Be.ae&&t(new N(Je(i)),s),s=h,i=c):s=Be.ae}).next(()=>{s!==Be.ae&&t(new N(Je(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function as(r,e){return Rt(r).put(function(n,i){return{targetId:0,path:De(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class qf{constructor(){this.changes=new mt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?v.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Zt(e).put(n)}removeEntry(e,t,n){return Zt(e).delete(function(s,a){const u=s.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],ks(a),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.ur(e,n)))}getEntry(e,t){let n=se.newInvalidDocument(t);return Zt(e).Z({index:fs,range:IDBKeyRange.only(jr(t))},(i,s)=>{n=this.cr(t,s)}).next(()=>n)}lr(e,t){let n={size:0,document:se.newInvalidDocument(t)};return Zt(e).Z({index:fs,range:IDBKeyRange.only(jr(t))},(i,s)=>{n={document:this.cr(t,s),size:Ms(s)}}).next(()=>n)}getEntries(e,t){let n=qe();return this.hr(e,t,(i,s)=>{const a=this.cr(i,s);n=n.insert(i,a)}).next(()=>n)}Pr(e,t){let n=qe(),i=new re(N.comparator);return this.hr(e,t,(s,a)=>{const u=this.cr(s,a);n=n.insert(s,u),i=i.insert(s,Ms(a))}).next(()=>({documents:n,Tr:i}))}hr(e,t,n){if(t.isEmpty())return v.resolve();let i=new ee(fh);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(jr(i.first()),jr(i.last())),a=i.getIterator();let u=a.getNext();return Zt(e).Z({index:fs,range:s},(c,h,f)=>{const m=N.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&fh(u,m)<0;)n(u,null),u=a.getNext();u&&u.isEqual(m)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.W(jr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),ks(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Zt(e).G(IDBKeyRange.bound(u,c,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=qe();for(const m of h){const _=this.cr(N.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(Ri(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=qe();const a=dh(t,n),u=dh(t,ze.max());return Zt(e).Z({index:Sd,range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const m=this.cr(N.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new lb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return hh(e).get(ca).next(t=>(L(!!t),t))}ur(e,t){return hh(e).put(ca,t)}cr(e,t){if(t){const n=Hy(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return se.newInvalidDocument(e)}}function $f(r){return new cb(r)}class lb extends qf{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new mt(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ee((s,a)=>$(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const u=this.Er.get(s);if(t.push(this.Ir.removeEntry(e,s,u.readTime)),a.isValidDocument()){const c=Ql(this.Ir.serializer,a);i=i.add(s.path.popLast());const h=Ms(c);n+=h-u.size,t.push(this.Ir.addEntry(e,s,c))}else if(n-=u.size,this.trackRemovals){const c=Ql(this.Ir.serializer,a.convertToNoDocument(B.min()));t.push(this.Ir.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Ir.updateMetadata(e,n)),v.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(n=>(this.Er.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:n,Tr:i})=>(i.forEach((s,a)=>{this.Er.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function hh(r){return ye(r,ai)}function Zt(r){return ye(r,Rs)}function jr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function dh(r,e){const t=e.documentKey.path.toArray();return[r,ks(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function fh(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=$(t[s],n[s]),i)return i;return i=$(t.length,n.length),i||(i=$(t[t.length-2],n[n.length-2]),i||$(t[t.length-1],n[n.length-1]))}/**
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
 */class hb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class jf{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Zr(n.mutation,i,Ue.empty(),ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=z()){const i=Xe();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=Kr();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Xe();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,z()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,i){let s=qe();const a=Xr(),u=function(){return Xr()}();return t.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof pt)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Zr(f.mutation,h,f.mutation.getFieldMask(),ce.now())):a.set(h.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var m;return u.set(h,new hb(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),u))}recalculateAndSaveOverlays(e,t){const n=Xr();let i=new re((a,u)=>a-u),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Ue.empty();f=u.applyToLocalView(h,f),n.set(c,f);const m=(i.get(u.batchId)||z()).add(c);i=i.insert(u.batchId,m)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,m=sf();f.forEach(_=>{if(!s.has(_)){const R=df(t.get(_),n.get(_));R!==null&&m.set(_,R),s=s.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return v.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):v.resolve(Xe());let u=Jn,c=s;return a.next(h=>v.forEach(h,(f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),s.get(f)?v.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,z())).next(f=>({batchId:u,changes:rf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next(n=>{let i=Kr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=Kr();return this.indexManager.getCollectionParents(e,s).next(u=>v.forEach(u,c=>{const h=function(m,_){return new gt(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,se.newInvalidDocument(f)))});let u=Kr();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Zr(f.mutation,h,Ue.empty(),ce.now()),Ri(t,h)&&(u=u.insert(c,h))}),u})}}/**
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
 */class db{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return v.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ge(i.createTime)}}(t)),v.resolve()}getNamedQuery(e,t){return v.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:cu(i.bundledQuery),readTime:ge(i.readTime)}}(t)),v.resolve()}}/**
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
 */class fb{constructor(){this.overlays=new re(N.comparator),this.Rr=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Xe();return v.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.Et(e,t,s)}),v.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(n)),v.resolve()}getOverlaysForCollection(e,t,n){const i=Xe(),s=t.length+1,a=new N(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new re((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=Xe(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=Xe(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=i)););return v.resolve(u)}Et(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new ou(t,n));let s=this.Rr.get(t);s===void 0&&(s=z(),this.Rr.set(t,s)),this.Rr.set(t,s.add(n.key))}}/**
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
 */class gb{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return v.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,v.resolve()}}/**
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
 */class du{constructor(){this.Vr=new ee(be.mr),this.gr=new ee(be.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new be(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.wr(new be(e,t))}br(e,t){e.forEach(n=>this.removeReference(n,t))}Sr(e){const t=new N(new G([])),n=new be(t,e),i=new be(t,e+1),s=[];return this.gr.forEachInRange([n,i],a=>{this.wr(a),s.push(a.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new N(new G([])),n=new be(t,e),i=new be(t,e+1);let s=z();return this.gr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new be(e,0),n=this.Vr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class be{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return N.comparator(e.key,t.key)||$(e.Cr,t.Cr)}static pr(e,t){return $(e.Cr,t.Cr)||N.comparator(e.key,t.key)}}/**
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
 */class mb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new ee(be.mr)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new iu(s,t,n,i);this.mutationQueue.push(a);for(const u of i)this.Mr=this.Mr.add(new be(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return v.resolve(a)}lookupMutationBatch(e,t){return v.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Nr(n),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?Dt:this.Fr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new be(t,0),i=new be(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([n,i],a=>{const u=this.Or(a.Cr);s.push(u)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ee($);return t.forEach(i=>{const s=new be(i,0),a=new be(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,a],u=>{n=n.add(u.Cr)})}),v.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;N.isDocumentKey(s)||(s=s.child(""));const a=new be(new N(s),0);let u=new ee($);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(u=u.add(c.Cr)),!0)},a),v.resolve(this.Br(u))}Br(e){const t=[];return e.forEach(n=>{const i=this.Or(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){L(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return v.forEach(t.mutations,i=>{const s=new be(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=n})}qn(e){}containsKey(e,t){const n=new be(t,0),i=this.Mr.firstAfterOrEqual(n);return v.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pb{constructor(e){this.kr=e,this.docs=function(){return new re(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return v.resolve(n?n.document.mutableCopy():se.newInvalidDocument(t))}getEntries(e,t){let n=qe();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():se.newInvalidDocument(i))}),v.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=qe();const a=t.path,u=new N(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ga(Td(f),n)<=0||(i.has(f.key)||Ri(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,t,n,i){F()}qr(e,t){return v.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new _b(this)}getSize(e){return v.resolve(this.size)}}class _b extends qf{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(n)}),v.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class yb{constructor(e){this.persistence=e,this.Qr=new mt(t=>pn(t),wi),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.$r=0,this.Kr=new du,this.targetCount=0,this.Ur=Tn.Kn()}forEachTarget(e,t){return this.Qr.forEach((n,i)=>t(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),v.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Tn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.zn(t),v.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.Qr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return v.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),v.resolve()}removeMatchingKeys(e,t,n){this.Kr.br(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),v.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Kr.vr(t);return v.resolve(n)}containsKey(e,t){return v.resolve(this.Kr.containsKey(t))}}/**
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
 */class fu{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Be(0),this.zr=!1,this.zr=!0,this.jr=new gb,this.referenceDelegate=e(this),this.Hr=new yb(this),this.indexManager=new nb,this.remoteDocumentCache=function(i){return new pb(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Df(t),this.Yr=new db(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new mb(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);const i=new bb(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return v.or(Object.values(this.Wr).map(n=>()=>n.containsKey(e,t)))}}class bb extends vd{constructor(e){super(),this.currentSequenceNumber=e}}class ro{constructor(e){this.persistence=e,this.ti=new du,this.ni=null}static ri(e){return new ro(e)}get ii(){if(this.ni)return this.ni;throw F()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),v.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),v.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.ii,n=>{const i=N.fromPath(n);return this.si(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(n=>{n?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return v.or([()=>v.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Fs{constructor(e,t){this.persistence=e,this.oi=new mt(n=>De(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Uf(this,t)}static ri(e,t){return new Fs(e,t)}Zr(){}Xr(e){return v.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}sr(e){let t=0;return this.rr(e,n=>{t++}).next(()=>t)}rr(e,t){return v.forEach(this.oi,(n,i)=>this.ar(e,n,i).next(s=>s?v.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(u=>{u||(n++,s.removeEntry(a,B.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),v.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),v.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),v.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),v.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ms(e.data.value)),t}ar(e,t,n){return v.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return v.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ib{constructor(e){this.serializer=e}B(e,t,n,i){const s=new Ks("createOrUpgrade",t);n<1&&i>=1&&(function(c){c.createObjectStore(vi)}(e),function(c){c.createObjectStore(oi,{keyPath:M_}),c.createObjectStore(He,{keyPath:Al,autoIncrement:!0}).createIndex(cn,Rl,{unique:!0}),c.createObjectStore(Xn)}(e),gh(e),function(c){c.createObjectStore(nn)}(e));let a=v.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore(er),c.deleteObjectStore(Zn),c.deleteObjectStore(fn)}(e),gh(e)),a=a.next(()=>function(c){const h=c.store(fn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put(Ss,f)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store(He).G().next(m=>{c.deleteObjectStore(He),c.createObjectStore(He,{keyPath:Al,autoIncrement:!0}).createIndex(cn,Rl,{unique:!0});const _=h.store(He),R=m.map(D=>_.put(D));return v.waitFor(R)})}(e,s))),a=a.next(()=>{(function(c){c.createObjectStore(tr,{keyPath:G_})})(e)})),n<5&&i>=5&&(a=a.next(()=>this._i(s))),n<6&&i>=6&&(a=a.next(()=>(function(c){c.createObjectStore(ai)}(e),this.ai(s)))),n<7&&i>=7&&(a=a.next(()=>this.ui(s))),n<8&&i>=8&&(a=a.next(()=>this.ci(e,s))),n<9&&i>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(a=a.next(()=>this.li(s))),n<11&&i>=11&&(a=a.next(()=>{(function(c){c.createObjectStore(Ws,{keyPath:K_})})(e),function(c){c.createObjectStore(Hs,{keyPath:W_})}(e)})),n<12&&i>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore(Qs,{keyPath:ey});h.createIndex(ha,ty,{unique:!1}),h.createIndex(Dd,ny,{unique:!1})})(e)})),n<13&&i>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore(Rs,{keyPath:L_});h.createIndex(fs,B_),h.createIndex(Sd,U_)}(e)).next(()=>this.hi(e,s)).next(()=>e.deleteObjectStore(nn))),n<14&&i>=14&&(a=a.next(()=>this.Pi(e,s))),n<15&&i>=15&&(a=a.next(()=>function(c){c.createObjectStore(Ha,{keyPath:H_,autoIncrement:!0}).createIndex(la,Q_,{unique:!1}),c.createObjectStore(Ps,{keyPath:Y_}).createIndex(Vd,J_,{unique:!1}),c.createObjectStore(Vs,{keyPath:X_}).createIndex(Cd,Z_,{unique:!1})}(e))),n<16&&i>=16&&(a=a.next(()=>{t.objectStore(Ps).clear()}).next(()=>{t.objectStore(Vs).clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(c){c.createObjectStore(Qa,{keyPath:ry})})(e)})),a}ai(e){let t=0;return e.store(nn).Z((n,i)=>{t+=Ms(i)}).next(()=>{const n={byteSize:t};return e.store(ai).put(ca,n)})}_i(e){const t=e.store(oi),n=e.store(He);return t.G().next(i=>v.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,Dt],[s.userId,s.lastAcknowledgedBatchId]);return n.G(cn,a).next(u=>v.forEach(u,c=>{L(c.userId===s.userId);const h=sn(this.serializer,c);return Mf(e,s.userId,h).next(()=>{})}))}))}ui(e){const t=e.store(er),n=e.store(nn);return e.store(fn).get(Ss).next(i=>{const s=[];return n.Z((a,u)=>{const c=new G(a),h=function(m){return[0,De(m)]}(c);s.push(t.get(h).next(f=>f?v.resolve():(m=>t.put({targetId:0,path:De(m),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(s))})}ci(e,t){e.createObjectStore(ui,{keyPath:z_});const n=t.store(ui),i=new hu,s=a=>{if(i.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:De(c)})}};return t.store(nn).Z({Y:!0},(a,u)=>{const c=new G(a);return s(c.popLast())}).next(()=>t.store(Xn).Z({Y:!0},([a,u,c],h)=>{const f=Je(u);return s(f.popLast())}))}li(e){const t=e.store(Zn);return t.Z((n,i)=>{const s=Hr(i),a=xf(this.serializer,s);return t.put(a)})}hi(e,t){const n=t.store(nn),i=[];return n.Z((s,a)=>{const u=t.store(Rs),c=function(m){return m.document?new N(G.fromString(m.document.name).popFirst(5)):m.noDocument?N.fromSegments(m.noDocument.path):m.unknownDocument?N.fromSegments(m.unknownDocument.path):F()}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(h))}).next(()=>v.waitFor(i))}Pi(e,t){const n=t.store(He),i=$f(this.serializer),s=new fu(ro.ri,this.serializer.Tt);return n.G().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:z();sn(this.serializer,c).keys().forEach(m=>f=f.add(m)),u.set(c.userId,f)}),v.forEach(u,(c,h)=>{const f=new Ie(h),m=to.It(this.serializer,f),_=s.getIndexManager(f),R=no.It(f,this.serializer,_,s.referenceDelegate);return new jf(i,R,m,_).recalculateAndSaveOverlaysForDocumentKeys(new da(t,Be.ae),c).next()})})}}function gh(r){r.createObjectStore(er,{keyPath:$_}).createIndex(Wa,j_,{unique:!0}),r.createObjectStore(Zn,{keyPath:"targetId"}).createIndex(Pd,q_,{unique:!0}),r.createObjectStore(fn)}const wt="IndexedDbPersistence",Yo=18e5,Jo=5e3,Xo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",zf="main";class gu{constructor(e,t,n,i,s,a,u,c,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ti=s,this.window=a,this.document=u,this.Ii=h,this.Ei=f,this.di=m,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=_=>Promise.resolve(),!gu.D())throw new V(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ub(this,i),this.gi=t+zf,this.serializer=new Df(c),this.pi=new et(this.gi,this.di,new Ib(this.serializer)),this.jr=new Yy,this.Hr=new ib(this.referenceDelegate,this.serializer),this.remoteDocumentCache=$f(this.serializer),this.Yr=new Qy,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,f===!1&&fe(wt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(S.FAILED_PRECONDITION,Xo);return this.bi(),this.Si(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new Be(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>us(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(Gt(e))return C(wt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C(wt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return zr(e).get(On).next(t=>v.resolve(this.Ni(t)))}Bi(e){return us(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Yo)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ye(t,tr);return n.G().next(i=>{const s=this.qi(i,Yo),a=i.filter(u=>s.indexOf(u)===-1);return v.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?v.resolve(!0):zr(e).get(On).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Jo)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new V(S.FAILED_PRECONDITION,Xo);return!1}}return!(!this.networkEnabled||!this.inForeground)||us(e).G().next(n=>this.qi(n,Jo).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(s||a&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C(wt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[vi,tr],e=>{const t=new da(e,Be.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(n=>this.ki(n.updateTimeMs,t)&&!this.$i(n.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>us(e).G().next(t=>this.qi(t,Yo).map(n=>n.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return no.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new rb(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return to.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,n){C(wt,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===17?oy:c===16?sy:c===15?Ya:c===14?kd:c===13?Od:c===12?iy:c===11?xd:void F()}(this.di);let a;return this.pi.runTransaction(e,i,s,u=>(a=new da(u,this.Gr?this.Gr.next():Be.ae),t==="readwrite-primary"?this.Fi(a).next(c=>!!c||this.Mi(a)).next(c=>{if(!c)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new V(S.FAILED_PRECONDITION,Ed);return n(a)}).next(c=>this.Oi(a).next(()=>c)):this.ji(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}ji(e){return zr(e).get(On).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,Jo)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(S.FAILED_PRECONDITION,Xo)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return zr(e).put(On,t)}static D(){return et.D()}xi(e){const t=zr(e);return t.get(On).next(n=>this.Ni(n)?(C(wt,"Releasing primary lease."),t.delete(On)):v.resolve())}ki(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}bi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}Si(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ki();const t=/(?:Version|Mobile)\/1[456]/;Yh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const n=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return C(wt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return fe(wt,"Failed to get zombied client id.",n),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function zr(r){return ye(r,vi)}function us(r){return ye(r,tr)}function mu(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class pu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=i}static Yi(e,t){let n=z(),i=z();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pu(e,t.fromCache,n,i)}}/**
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
 */class Tb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Gf{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Yh()?8:wd(Es())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.rs(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ss(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Tb;return this._s(e,t,a).next(u=>{if(s.result=u,this.Xi)return this.us(e,t,a,u.size)})}).next(()=>s.result)}us(e,t,n,i){return n.documentReadCount<this.es?(Bn()<=W.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),v.resolve()):(Bn()<=W.DEBUG&&C("QueryEngine","Query:",Un(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(Bn()<=W.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):v.resolve())}rs(e,t){if(Bl(t))return v.resolve(null);let n=Fe(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Os(t,null,"F"),n=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=z(...s);return this.ns.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.cs(t,u);return this.ls(t,h,a,c.readTime)?this.rs(e,Os(t,null,"F")):this.hs(e,h,t,c)}))})))}ss(e,t,n,i){return Bl(t)||i.isEqual(B.min())?v.resolve(null):this.ns.getDocuments(e,n).next(s=>{const a=this.cs(t,s);return this.ls(t,a,n,i)?v.resolve(null):(Bn()<=W.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Un(t)),this.hs(e,a,t,Id(i,Jn)).next(u=>u))})}cs(e,t){let n=new ee(tf(e));return t.forEach((i,s)=>{Ri(e,s)&&(n=n.add(s))}),n}ls(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,n){return Bn()<=W.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Un(t)),this.ns.getDocumentsMatchingQuery(e,t,ze.min(),n)}hs(e,t,n,i){return this.ns.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const _u="LocalStore",Eb=3e8;class vb{constructor(e,t,n,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new re($),this.Is=new mt(s=>pn(s),wi),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jf(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Kf(r,e,t,n){return new vb(r,e,t,n)}async function Wf(r,e){const t=M(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],u=[];let c=z();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:u}))})})}function wb(r,e){const t=M(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const m=h.batch,_=m.keys();let R=v.resolve();return _.forEach(D=>{R=R.next(()=>f.getEntry(c,D)).next(O=>{const x=h.docVersions.get(D);L(x!==null),O.version.compareTo(x)<0&&(m.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=z();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Hf(r){const e=M(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Ab(r,e){const t=M(r),n=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const u=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;u.push(t.Hr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(s,f.addedDocuments,m)));let R=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(de.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),i=i.insert(m,R),function(O,x,q){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Eb?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(_,R,f)&&u.push(t.Hr.updateTargetData(s,R))});let c=qe(),h=z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(Qf(s,a,e.documentUpdates).next(f=>{c=f.Vs,h=f.fs})),!n.isEqual(B.min())){const f=t.Hr.getLastRemoteSnapshotVersion(s).next(m=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(f)}return v.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.Ts=i,s))}function Qf(r,e,t){let n=z(),i=z();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=qe();return t.forEach((u,c)=>{const h=s.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):C(_u,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:i}})}function Rb(r,e){const t=M(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Dt),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function ur(r,e){const t=M(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Hr.getTargetData(n,e).next(s=>s?(i=s,v.resolve(i)):t.Hr.allocateTargetId(n).next(a=>(i=new ct(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(n.targetId,n),t.Is.set(e,n.targetId)),n})}async function cr(r,e,t){const n=M(r),i=n.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Gt(a))throw a;C(_u,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ts=n.Ts.remove(e),n.Is.delete(i.target)}function Ls(r,e,t){const n=M(r);let i=B.min(),s=z();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=M(c),_=m.Is.get(f);return _!==void 0?v.resolve(m.Ts.get(_)):m.Hr.getTargetData(h,f)}(n,a,Fe(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>n.Ps.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:z())).next(u=>(Xf(n,ef(e),u),{documents:u,gs:s})))}function Yf(r,e){const t=M(r),n=M(t.Hr),i=t.Ts.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.lt(s,e).next(a=>a?a.target:null))}function Jf(r,e){const t=M(r),n=t.Es.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.ds.getAllFromCollectionGroup(i,e,Id(n,Jn),Number.MAX_SAFE_INTEGER)).then(i=>(Xf(t,e,i),i))}function Xf(r,e,t){let n=r.Es.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.Es.set(e,n)}async function Sb(r,e,t,n){const i=M(r);let s=z(),a=qe();for(const h of t){const f=e.ps(h.metadata.name);h.document&&(s=s.add(f));const m=e.ys(h);m.setReadTime(e.ws(h.metadata.readTime)),a=a.insert(f,m)}const u=i.ds.newChangeBuffer({trackRemovals:!0}),c=await ur(i,function(f){return Fe(pr(G.fromString(`__bundle__/docs/${f}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",h=>Qf(h,u,a).next(f=>(u.apply(h),f)).next(f=>i.Hr.removeMatchingKeysForTargetId(h,c.targetId).next(()=>i.Hr.addMatchingKeys(h,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(h,f.Vs,f.fs)).next(()=>f.Vs)))}async function Pb(r,e,t=z()){const n=await ur(r,Fe(cu(e.bundledQuery))),i=M(r);return i.persistence.runTransaction("Save named query","readwrite",s=>{const a=ge(e.readTime);if(n.snapshotVersion.compareTo(a)>=0)return i.Yr.saveNamedQuery(s,e);const u=n.withResumeToken(de.EMPTY_BYTE_STRING,a);return i.Ts=i.Ts.insert(u.targetId,u),i.Hr.updateTargetData(s,u).next(()=>i.Hr.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.Hr.addMatchingKeys(s,t,n.targetId)).next(()=>i.Yr.saveNamedQuery(s,e))})}/**
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
 */const Zf="firestore_clients";function mh(r,e){return`${Zf}_${r}_${e}`}const eg="firestore_mutations";function ph(r,e,t){let n=`${eg}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const tg="firestore_targets";function Zo(r,e){return`${tg}_${r}_${e}`}/**
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
 */const Ye="SharedClientState";class Bs{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static bs(e,t,n){const i=JSON.parse(n);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new V(i.error.code,i.error.message))),a?new Bs(e,t,i.state,s):(fe(Ye,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ss(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ei{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static bs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new V(n.error.code,n.error.message))),s?new ei(e,n.state,i):(fe(Ye,`Failed to parse target state for ID '${e}': ${t}`),null)}Ss(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Us{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static bs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=tu();for(let a=0;i&&a<n.activeTargetIds.length;++a)i=Ad(n.activeTargetIds[a]),s=s.add(n.activeTargetIds[a]);return i?new Us(e,s):(fe(Ye,`Failed to parse client data for instance '${e}': ${t}`),null)}}class yu{constructor(e,t){this.clientId=e,this.onlineState=t}static bs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new yu(t.clientId,t.onlineState):(fe(Ye,`Failed to parse online state: ${e}`),null)}}class Ra{constructor(){this.activeTargetIds=tu()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ea{constructor(e,t,n,i,s){this.window=e,this.Ti=t,this.persistenceKey=n,this.Cs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new re($),this.started=!1,this.Os=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ns=mh(this.persistenceKey,this.Cs),this.Bs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new Ra),this.Ls=new RegExp(`^${Zf}_${a}_([^_]*)$`),this.ks=new RegExp(`^${eg}_${a}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${tg}_${a}_(\\d+)$`),this.Qs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.$s=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const n of e){if(n===this.Cs)continue;const i=this.getItem(mh(this.persistenceKey,n));if(i){const s=Us.bs(n,i);s&&(this.xs=this.xs.insert(s.clientId,s))}}this.Ks();const t=this.storage.getItem(this.Qs);if(t){const n=this.Us(t);n&&this.Ws(n)}for(const n of this.Os)this.Ms(n);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,n){this.zs(e,t,n),this.js(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Zo(this.persistenceKey,e));if(i){const s=ei.bs(e,i);s&&(n=s.state)}}return t&&this.Hs.Ds(e),this.Ks(),n}removeLocalQueryTarget(e){this.Hs.vs(e),this.Ks()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zo(this.persistenceKey,e))}updateQueryState(e,t,n){this.Js(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.js(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return C(Ye,"READ",e,t),t}setItem(e,t){C(Ye,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){C(Ye,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(C(Ye,"EVENT",t.key,t.newValue),t.key===this.Ns)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const n=this.Xs(t.key);return this.eo(n,null)}{const n=this.no(t.key,t.newValue);if(n)return this.eo(n.clientId,n)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const n=this.ro(t.key,t.newValue);if(n)return this.io(n)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const n=this.so(t.key,t.newValue);if(n)return this.oo(n)}}else if(t.key===this.Qs){if(t.newValue!==null){const n=this.Us(t.newValue);if(n)return this.Ws(n)}}else if(t.key===this.Bs){const n=function(s){let a=Be.ae;if(s!=null)try{const u=JSON.parse(s);L(typeof u=="number"),a=u}catch(u){fe(Ye,"Failed to read sequence number from WebStorage",u)}return a}(t.newValue);n!==Be.ae&&this.sequenceNumberHandler(n)}else if(t.key===this.$s){const n=this._o(t.newValue);await Promise.all(n.map(i=>this.syncEngine.ao(i)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Ks(){this.setItem(this.Ns,this.Hs.Ss())}zs(e,t,n){const i=new Bs(this.currentUser,e,t,n),s=ph(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ss())}js(e){const t=ph(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,n){const i=Zo(this.persistenceKey,e),s=new ei(e,t,n);this.setItem(i,s.Ss())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const n=this.Xs(e);return Us.bs(n,t)}ro(e,t){const n=this.ks.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Bs.bs(new Ie(s),i,t)}so(e,t){const n=this.qs.exec(e),i=Number(n[1]);return ei.bs(i,t)}Us(e){return yu.bs(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);C(Ye,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const n=t?this.xs.insert(e,t):this.xs.remove(e),i=this.Gs(this.xs),s=this.Gs(n),a=[],u=[];return s.forEach(c=>{i.has(c)||a.push(c)}),i.forEach(c=>{s.has(c)||u.push(c)}),this.syncEngine.lo(a,u).then(()=>{this.xs=n})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=tu();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class ng{constructor(){this.ho=new Ra,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ra,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vb{To(e){}shutdown(){}}/**
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
 */const _h="ConnectivityMonitor";class yh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){C(_h,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){C(_h,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cs=null;function Sa(){return cs===null?cs=function(){return 268435456+Math.round(2147483648*Math.random())}():cs++,"0x"+cs.toString(16)}/**
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
 */const ta="RestConnection",Cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Db{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===Cs?`project_id=${n}`:`project_id=${n}&database_id=${i}`}bo(e,t,n,i,s){const a=Sa(),u=this.So(e,t.toUriEncodedString());C(ta,`Sending RPC '${e}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,s),this.vo(e,u,c,n).then(h=>(C(ta,`Received RPC '${e}' ${a}: `,h),h),h=>{throw nt(ta,`RPC '${e}' ${a} failed with error: `,h,"url: ",u,"request:",n),h})}Co(e,t,n,i,s,a){return this.bo(e,t,n,i,s)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}So(e,t){const n=Cb[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}/**
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
 */class xb{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Ve="WebChannelConnection";class Ob extends Db{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,i){const s=Sa();return new Promise((a,u)=>{const c=new dd;c.setWithCredentials(!0),c.listenOnce(fd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ls.NO_ERROR:const f=c.getResponseJson();C(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ls.TIMEOUT:C(Ve,`RPC '${e}' ${s} timed out`),u(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case ls.HTTP_ERROR:const m=c.getStatus();if(C(Ve,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const D=function(x){const q=x.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(R.status);u(new V(D,R.message))}else u(new V(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new V(S.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{C(Ve,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);C(Ve,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,n,15)})}Wo(e,t,n){const i=Sa(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=pd(),u=md(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");C(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);let _=!1,R=!1;const D=new xb({Fo:x=>{R?C(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(_||(C(Ve,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),C(Ve,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},Mo:()=>m.close()}),O=(x,q,j)=>{x.listen(q,U=>{try{j(U)}catch(X){setTimeout(()=>{throw X},0)}})};return O(m,Gr.EventType.OPEN,()=>{R||(C(Ve,`RPC '${e}' stream ${i} transport opened.`),D.Qo())}),O(m,Gr.EventType.CLOSE,()=>{R||(R=!0,C(Ve,`RPC '${e}' stream ${i} transport closed`),D.Ko())}),O(m,Gr.EventType.ERROR,x=>{R||(R=!0,nt(Ve,`RPC '${e}' stream ${i} transport errored:`,x),D.Ko(new V(S.UNAVAILABLE,"The operation could not be completed")))}),O(m,Gr.EventType.MESSAGE,x=>{var q;if(!R){const j=x.data[0];L(!!j);const U=j,X=(U==null?void 0:U.error)||((q=U[0])===null||q===void 0?void 0:q.error);if(X){C(Ve,`RPC '${e}' stream ${i} received error:`,X);const ne=X.status;let Q=function(b){const T=pe[b];if(T!==void 0)return mf(T)}(ne),I=X.message;Q===void 0&&(Q=S.INTERNAL,I="Unknown error status: "+ne+" with message "+X.message),R=!0,D.Ko(new V(Q,I)),m.close()}else C(Ve,`RPC '${e}' stream ${i} received:`,j),D.Uo(j)}}),O(u,gd.STAT_EVENT,x=>{x.stat===aa.PROXY?C(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===aa.NOPROXY&&C(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}/**
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
 */function rg(){return typeof window<"u"?window:null}function bs(){return typeof document<"u"?document:null}/**
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
 */function Ci(r){return new Ly(r,!0)}/**
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
 */class bu{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-n);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const bh="PersistentStream";class ig{constructor(e,t,n,i,s,a,u,c){this.Ti=e,this.n_=n,this.r_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new bu(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===t&&this.V_(n,i)},n=>{e(()=>{const i=new V(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return C(bh,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(C(bh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kb extends ig{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=qy(this.serializer,e),n=function(s){if(!("targetChange"in s))return B.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?ge(a.readTime):B.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=Ta(this.serializer),t.addTarget=function(s,a){let u;const c=a.target;if(u=Ds(c)?{documents:Af(s,c)}:{query:Rf(s,c).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=bf(s,a.resumeToken);const h=ba(s,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=ar(s,a.snapshotVersion.toTimestamp());const h=ba(s,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const n=jy(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=Ta(this.serializer),t.removeTarget=e,this.I_(t)}}class Nb extends ig{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return L(!!e.streamToken),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){L(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=$y(e.writeResults,e.commitTime),n=ge(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=Ta(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>gi(this.serializer,n))};this.I_(t)}}/**
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
 */class Mb{}class Fb extends Mb{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.bo(e,Ia(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(S.UNKNOWN,s.toString())})}Co(e,t,n,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(e,Ia(t,n),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Lb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(fe(t),this.N_=!1):C("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const En="RemoteStore";class Bb{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(a=>{n.enqueueAndForget(async()=>{Wt(this)&&(C(En,"Restarting streams for network reachability change."),await async function(c){const h=M(c);h.W_.add(4),await br(h),h.j_.set("Unknown"),h.W_.delete(4),await Di(h)}(this))})}),this.j_=new Lb(n,i)}}async function Di(r){if(Wt(r))for(const e of r.G_)await e(!0)}async function br(r){for(const e of r.G_)await e(!1)}function io(r,e){const t=M(r);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Eu(t)?Tu(t):Tr(t).c_()&&Iu(t,e))}function lr(r,e){const t=M(r),n=Tr(t);t.U_.delete(e),n.c_()&&sg(t,e),t.U_.size===0&&(n.c_()?n.P_():Wt(t)&&t.j_.set("Unknown"))}function Iu(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tr(r).y_(e)}function sg(r,e){r.H_.Ne(e),Tr(r).w_(e)}function Tu(r){r.H_=new ky({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.U_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Tr(r).start(),r.j_.B_()}function Eu(r){return Wt(r)&&!Tr(r).u_()&&r.U_.size>0}function Wt(r){return M(r).W_.size===0}function og(r){r.H_=void 0}async function Ub(r){r.j_.set("Online")}async function qb(r){r.U_.forEach((e,t)=>{Iu(r,e)})}async function $b(r,e){og(r),Eu(r)?(r.j_.q_(e),Tu(r)):r.j_.set("Unknown")}async function jb(r,e,t){if(r.j_.set("Online"),e instanceof yf&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.U_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.U_.delete(u),i.H_.removeTarget(u))}(r,e)}catch(n){C(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await qs(r,n)}else if(e instanceof ys?r.H_.We(e):e instanceof _f?r.H_.Ze(e):r.H_.je(e),!t.isEqual(B.min()))try{const n=await Hf(r.localStore);t.compareTo(n)>=0&&await function(s,a){const u=s.H_.ot(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.U_.get(h);f&&s.U_.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=s.U_.get(c);if(!f)return;s.U_.set(c,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),sg(s,c);const m=new ct(f.target,c,h,f.sequenceNumber);Iu(s,m)}),s.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){C(En,"Failed to raise snapshot:",n),await qs(r,n)}}async function qs(r,e,t){if(!Gt(e))throw e;r.W_.add(1),await br(r),r.j_.set("Offline"),t||(t=()=>Hf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C(En,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await Di(r)})}function ag(r,e){return e().catch(t=>qs(r,t,e))}async function Ir(r){const e=M(r),t=Ut(e);let n=e.K_.length>0?e.K_[e.K_.length-1].batchId:Dt;for(;zb(e);)try{const i=await Rb(e.localStore,n);if(i===null){e.K_.length===0&&t.P_();break}n=i.batchId,Gb(e,i)}catch(i){await qs(e,i)}ug(e)&&cg(e)}function zb(r){return Wt(r)&&r.K_.length<10}function Gb(r,e){r.K_.push(e);const t=Ut(r);t.c_()&&t.b_&&t.S_(e.mutations)}function ug(r){return Wt(r)&&!Ut(r).u_()&&r.K_.length>0}function cg(r){Ut(r).start()}async function Kb(r){Ut(r).C_()}async function Wb(r){const e=Ut(r);for(const t of r.K_)e.S_(t.mutations)}async function Hb(r,e,t){const n=r.K_.shift(),i=su.from(n,e,t);await ag(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Ir(r)}async function Qb(r,e){e&&Ut(r).b_&&await async function(n,i){if(function(a){return gf(a)&&a!==S.ABORTED}(i.code)){const s=n.K_.shift();Ut(n).h_(),await ag(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ir(n)}}(r,e),ug(r)&&cg(r)}async function Ih(r,e){const t=M(r);t.asyncQueue.verifyOperationInProgress(),C(En,"RemoteStore received new credentials");const n=Wt(t);t.W_.add(3),await br(t),n&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Di(t)}async function Pa(r,e){const t=M(r);e?(t.W_.delete(2),await Di(t)):e||(t.W_.add(2),await br(t),t.j_.set("Unknown"))}function Tr(r){return r.J_||(r.J_=function(t,n,i){const s=M(t);return s.M_(),new kb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{xo:Ub.bind(null,r),No:qb.bind(null,r),Lo:$b.bind(null,r),p_:jb.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),Eu(r)?Tu(r):r.j_.set("Unknown")):(await r.J_.stop(),og(r))})),r.J_}function Ut(r){return r.Y_||(r.Y_=function(t,n,i){const s=M(t);return s.M_(),new Nb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Kb.bind(null,r),Lo:Qb.bind(null,r),D_:Wb.bind(null,r),v_:Hb.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await Ir(r)):(await r.Y_.stop(),r.K_.length>0&&(C(En,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
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
 */class vu{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new we,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,u=new vu(e,t,a,i,s);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Er(r,e){if(fe("AsyncQueue",`${e}: ${r}`),Gt(r))return new V(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||N.comparator(t.key,n.key):(t,n)=>N.comparator(t.key,n.key),this.keyedMap=Kr(),this.sortedSet=new re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Gn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Th{constructor(){this.Z_=new re(N.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?e.type!==0&&n.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&n.type!==1?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Z_=this.Z_.remove(t):e.type===1&&n.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):F():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class hr{constructor(e,t,n,i,s,a,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new hr(e,t,Gn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ai(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Yb{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Jb{constructor(){this.queries=Eh(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,n){const i=M(t),s=i.queries;i.queries=Eh(),s.forEach((a,u)=>{for(const c of u.ta)c.onError(n)})})(this,new V(S.ABORTED,"Firestore shutting down"))}}function Eh(){return new mt(r=>Zd(r),Ai)}async function wu(r,e){const t=M(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(n=2):(s=new Yb,n=e.ra()?0:1);try{switch(n){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Er(a,`Initialization of query '${Un(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&Ru(t)}async function Au(r,e){const t=M(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.ta.indexOf(e);a>=0&&(s.ta.splice(a,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Xb(r,e){const t=M(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.ta)u.oa(i)&&(n=!0);a.ea=i}}n&&Ru(t)}function Zb(r,e,t){const n=M(r),i=n.queries.get(e);if(i)for(const s of i.ta)s.onError(t);n.queries.delete(e)}function Ru(r){r.ia.forEach(e=>{e.next()})}var Va,vh;(vh=Va||(Va={}))._a="default",vh.Cache="cache";class Su{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new hr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const n=t!=="Offline";return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Va.Cache}}/**
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
 */class eI{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
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
 */class wh{constructor(e){this.serializer=e}ps(e){return tt(this.serializer,e)}ys(e){return e.metadata.exists?wf(this.serializer,e.document,!1):se.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return ge(e)}}class tI{constructor(e,t,n){this.da=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=lg(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const n=G.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,n=new wh(this.serializer);for(const i of e)if(i.metadata.queries){const s=n.ps(i.metadata.name);for(const a of i.metadata.queries){const u=(t.get(a)||z()).add(s);t.set(a,u)}}return t}async complete(){const e=await Sb(this.localStore,new wh(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const n of this.queries)await Pb(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function lg(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class hg{constructor(e){this.key=e}}class dg{constructor(e){this.key=e}}class fg{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=z(),this.mutatedKeys=z(),this.ya=tf(e),this.wa=new Gn(this.ya)}get ba(){return this.fa}Sa(e,t){const n=t?t.Da:new Th,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),R=Ri(this.query,m)?m:null,D=!!_&&this.mutatedKeys.has(_.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let x=!1;_&&R?_.data.isEqual(R.data)?D!==O&&(n.track({type:3,doc:R}),x=!0):this.va(_,R)||(n.track({type:2,doc:R}),x=!0,(c&&this.ya(R,c)>0||h&&this.ya(R,h)<0)&&(u=!0)):!_&&R?(n.track({type:0,doc:R}),x=!0):_&&!R&&(n.track({type:1,doc:_}),x=!0,(c||h)&&(u=!0)),x&&(R?(a=a.add(R),s=O?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{wa:a,Da:n,ls:u,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,m)=>function(R,D){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return O(R)-O(D)}(f.type,m.type)||this.ya(f.doc,m.doc)),this.Ca(n),i=i!=null&&i;const u=t&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new hr(this.query,e.wa,s,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Th,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=z(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const t=[];return e.forEach(n=>{this.pa.has(n)||t.push(new dg(n))}),this.pa.forEach(n=>{e.has(n)||t.push(new hg(n))}),t}Oa(e){this.fa=e.gs,this.pa=z();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return hr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ht="SyncEngine";class nI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rI{constructor(e){this.key=e,this.Ba=!1}}class iI{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new mt(u=>Zd(u),Ai),this.qa=new Map,this.Qa=new Set,this.$a=new re(N.comparator),this.Ka=new Map,this.Ua=new du,this.Wa={},this.Ga=new Map,this.za=Tn.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function sI(r,e,t=!0){const n=so(r);let i;const s=n.ka.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await gg(n,e,t,!0),i}async function oI(r,e){const t=so(r);await gg(t,e,!0,!1)}async function gg(r,e,t,n){const i=await ur(r.localStore,Fe(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let u;return n&&(u=await Pu(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&io(r.remoteStore,i),u}async function Pu(r,e,t,n,i){r.Ha=(m,_,R)=>async function(O,x,q,j){let U=x.view.Sa(q);U.ls&&(U=await Ls(O.localStore,x.query,!1).then(({documents:I})=>x.view.Sa(I,U)));const X=j&&j.targetChanges.get(x.targetId),ne=j&&j.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(U,O.isPrimaryClient,X,ne);return Ca(O,x.targetId,Q.Ma),Q.snapshot}(r,m,_,R);const s=await Ls(r.localStore,e,!0),a=new fg(e,s.gs),u=a.Sa(s.documents),c=Vi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=a.applyChanges(u,r.isPrimaryClient,c);Ca(r,t,h.Ma);const f=new nI(e,t,a);return r.ka.set(e,f),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),h.snapshot}async function aI(r,e,t){const n=M(r),i=n.ka.get(e),s=n.qa.get(i.targetId);if(s.length>1)return n.qa.set(i.targetId,s.filter(a=>!Ai(a,e))),void n.ka.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await cr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&lr(n.remoteStore,i.targetId),dr(n,i.targetId)}).catch(zt)):(dr(n,i.targetId),await cr(n.localStore,i.targetId,!0))}async function uI(r,e){const t=M(r),n=t.ka.get(e),i=t.qa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),lr(t.remoteStore,n.targetId))}async function cI(r,e,t){const n=xu(r);try{const i=await function(a,u){const c=M(a),h=ce.now(),f=u.reduce((R,D)=>R.add(D.key),z());let m,_;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let D=qe(),O=z();return c.ds.getEntries(R,f).next(x=>{D=x,D.forEach((q,j)=>{j.isValidDocument()||(O=O.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,D)).next(x=>{m=x;const q=[];for(const j of u){const U=Dy(j,m.get(j.key).overlayedDocument);U!=null&&q.push(new pt(j.key,U,zd(U.value.mapValue),ue.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,q,u)}).next(x=>{_=x;const q=x.applyToLocalDocumentSet(m,O);return c.documentOverlayCache.saveOverlays(R,x.batchId,q)})}).then(()=>({batchId:_.batchId,changes:rf(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new re($)),h=h.insert(u,c),a.Wa[a.currentUser.toKey()]=h}(n,i.batchId,t),await _t(n,i.changes),await Ir(n.remoteStore)}catch(i){const s=Er(i,"Failed to persist write");t.reject(s)}}async function mg(r,e){const t=M(r);try{const n=await Ab(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ka.get(s);a&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?L(a.Ba):i.removedDocuments.size>0&&(L(a.Ba),a.Ba=!1))}),await _t(t,n,e)}catch(n){await zt(n)}}function Ah(r,e,t){const n=M(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.ka.forEach((s,a)=>{const u=a.view.sa(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=M(a);c.onlineState=u;let h=!1;c.queries.forEach((f,m)=>{for(const _ of m.ta)_.sa(u)&&(h=!0)}),h&&Ru(c)}(n.eventManager,e),i.length&&n.La.p_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function lI(r,e,t){const n=M(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Ka.get(e),s=i&&i.key;if(s){let a=new re(N.comparator);a=a.insert(s,se.newNoDocument(s,B.min()));const u=z().add(s),c=new Pi(B.min(),new Map,new re($),a,u);await mg(n,c),n.$a=n.$a.remove(s),n.Ka.delete(e),Du(n)}else await cr(n.localStore,e,!1).then(()=>dr(n,e,t)).catch(zt)}async function hI(r,e){const t=M(r),n=e.batch.batchId;try{const i=await wb(t.localStore,e);Cu(t,n,null),Vu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await _t(t,i)}catch(i){await zt(i)}}async function dI(r,e,t){const n=M(r);try{const i=await function(a,u){const c=M(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(m=>(L(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);Cu(n,e,t),Vu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await _t(n,i)}catch(i){await zt(i)}}async function fI(r,e){const t=M(r);Wt(t.remoteStore)||C(Ht,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=M(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(n===Dt)return void e.resolve();const i=t.Ga.get(n)||[];i.push(e),t.Ga.set(n,i)}catch(n){const i=Er(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Vu(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function Cu(r,e,t){const n=M(r);let i=n.Wa[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Wa[n.currentUser.toKey()]=i}}function dr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.qa.get(e))r.ka.delete(n),t&&r.La.Ja(n,t);r.qa.delete(e),r.isPrimaryClient&&r.Ua.Sr(e).forEach(n=>{r.Ua.containsKey(n)||pg(r,n)})}function pg(r,e){r.Qa.delete(e.path.canonicalString());const t=r.$a.get(e);t!==null&&(lr(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ka.delete(t),Du(r))}function Ca(r,e,t){for(const n of t)n instanceof hg?(r.Ua.addReference(n.key,e),gI(r,n)):n instanceof dg?(C(Ht,"Document no longer in limbo: "+n.key),r.Ua.removeReference(n.key,e),r.Ua.containsKey(n.key)||pg(r,n.key)):F()}function gI(r,e){const t=e.key,n=t.path.canonicalString();r.$a.get(t)||r.Qa.has(n)||(C(Ht,"New document in limbo: "+t),r.Qa.add(n),Du(r))}function Du(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const t=new N(G.fromString(e)),n=r.za.next();r.Ka.set(n,new rI(t)),r.$a=r.$a.insert(t,n),io(r.remoteStore,new ct(Fe(pr(t.path)),n,"TargetPurposeLimboResolution",Be.ae))}}async function _t(r,e,t){const n=M(r),i=[],s=[],a=[];n.ka.isEmpty()||(n.ka.forEach((u,c)=>{a.push(n.Ha(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);const m=pu.Yi(c.targetId,h);s.push(m)}}))}),await Promise.all(a),n.La.p_(i),await async function(c,h){const f=M(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>v.forEach(h,_=>v.forEach(_.Hi,R=>f.persistence.referenceDelegate.addReference(m,_.targetId,R)).next(()=>v.forEach(_.Ji,R=>f.persistence.referenceDelegate.removeReference(m,_.targetId,R)))))}catch(m){if(!Gt(m))throw m;C(_u,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const R=f.Ts.get(_),D=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(D);f.Ts=f.Ts.insert(_,O)}}}(n.localStore,s))}async function mI(r,e){const t=M(r);if(!t.currentUser.isEqual(e)){C(Ht,"User change. New user:",e.toKey());const n=await Wf(t.localStore,e);t.currentUser=e,function(s,a){s.Ga.forEach(u=>{u.forEach(c=>{c.reject(new V(S.CANCELLED,a))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await _t(t,n.Rs)}}function pI(r,e){const t=M(r),n=t.Ka.get(e);if(n&&n.Ba)return z().add(n.key);{let i=z();const s=t.qa.get(e);if(!s)return i;for(const a of s){const u=t.ka.get(a);i=i.unionWith(u.view.ba)}return i}}async function _I(r,e){const t=M(r),n=await Ls(t.localStore,e.query,!0),i=e.view.Oa(n);return t.isPrimaryClient&&Ca(t,e.targetId,i.Ma),i}async function yI(r,e){const t=M(r);return Jf(t.localStore,e).then(n=>_t(t,n))}async function bI(r,e,t,n){const i=M(r),s=await function(u,c){const h=M(u),f=M(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Ln(m,c).next(_=>_?h.localDocuments.getDocuments(m,_):v.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Ir(i.remoteStore):t==="acknowledged"||t==="rejected"?(Cu(i,e,n||null),Vu(i,e),function(u,c){M(M(u).mutationQueue).qn(c)}(i.localStore,e)):F(),await _t(i,s)):C(Ht,"Cannot apply mutation batch with id: "+e)}async function II(r,e){const t=M(r);if(so(t),xu(t),e===!0&&t.ja!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await Rh(t,n.toArray());t.ja=!0,await Pa(t.remoteStore,!0);for(const s of i)io(t.remoteStore,s)}else if(e===!1&&t.ja!==!1){const n=[];let i=Promise.resolve();t.qa.forEach((s,a)=>{t.sharedClientState.isLocalQueryTarget(a)?n.push(a):i=i.then(()=>(dr(t,a),cr(t.localStore,a,!0))),lr(t.remoteStore,a)}),await i,await Rh(t,n),function(a){const u=M(a);u.Ka.forEach((c,h)=>{lr(u.remoteStore,h)}),u.Ua.Dr(),u.Ka=new Map,u.$a=new re(N.comparator)}(t),t.ja=!1,await Pa(t.remoteStore,!1)}}async function Rh(r,e,t){const n=M(r),i=[],s=[];for(const a of e){let u;const c=n.qa.get(a);if(c&&c.length!==0){u=await ur(n.localStore,Fe(c[0]));for(const h of c){const f=n.ka.get(h),m=await _I(n,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await Yf(n.localStore,a);u=await ur(n.localStore,h),await Pu(n,_g(h),a,!1,u.resumeToken)}i.push(u)}return n.La.p_(s),i}function _g(r){return Xd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function TI(r){return function(t){return M(M(t).persistence).zi()}(M(r).localStore)}async function EI(r,e,t,n){const i=M(r);if(i.ja)return void C(Ht,"Ignoring unexpected query state notification.");const s=i.qa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const a=await Jf(i.localStore,ef(s[0])),u=Pi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await _t(i,a,u);break}case"rejected":await cr(i.localStore,e,!0),dr(i,e,n);break;default:F()}}async function vI(r,e,t){const n=so(r);if(n.ja){for(const i of e){if(n.qa.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){C(Ht,"Adding an already active target "+i);continue}const s=await Yf(n.localStore,i),a=await ur(n.localStore,s);await Pu(n,_g(s),a.targetId,!1,a.resumeToken),io(n.remoteStore,a)}for(const i of t)n.qa.has(i)&&await cr(n.localStore,i,!1).then(()=>{lr(n.remoteStore,i),dr(n,i)}).catch(zt)}}function so(r){const e=M(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=mg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lI.bind(null,e),e.La.p_=Xb.bind(null,e.eventManager),e.La.Ja=Zb.bind(null,e.eventManager),e}function xu(r){const e=M(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dI.bind(null,e),e}function wI(r,e,t){const n=M(r);(async function(s,a,u){try{const c=await a.getMetadata();if(await function(R,D){const O=M(R),x=ge(D.createTime);return O.persistence.runTransaction("hasNewerBundle","readonly",q=>O.Yr.getBundleMetadata(q,D.id)).then(q=>!!q&&q.createTime.compareTo(x)>=0)}(s.localStore,c))return await a.close(),u._completeWith(function(R){return{taskState:"Success",documentsLoaded:R.totalDocuments,bytesLoaded:R.totalBytes,totalDocuments:R.totalDocuments,totalBytes:R.totalBytes}}(c)),Promise.resolve(new Set);u._updateProgress(lg(c));const h=new tI(c,s.localStore,a.serializer);let f=await a.Ya();for(;f;){const _=await h.Aa(f);_&&u._updateProgress(_),f=await a.Ya()}const m=await h.complete();return await _t(s,m.ma,void 0),await function(R,D){const O=M(R);return O.persistence.runTransaction("Save bundle","readwrite",x=>O.Yr.saveBundleMetadata(x,D))}(s.localStore,c),u._completeWith(m.progress),Promise.resolve(m.Va)}catch(c){return nt(Ht,`Loading bundle failed with ${c}`),u._failWith(c),Promise.resolve(new Set)}})(n,e,t).then(i=>{n.sharedClientState.notifyBundleLoaded(i)})}class mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ci(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Kf(this.persistence,new Gf,e.initialUser,this.serializer)}Xa(e){return new fu(ro.ri,this.serializer)}Za(e){return new ng}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mi.provider={build:()=>new mi};class AI extends mi{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){L(this.persistence.referenceDelegate instanceof Fs);const n=this.persistence.referenceDelegate.garbageCollector;return new Bf(n,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new fu(n=>Fs.ri(n,t),this.serializer)}}class yg extends mi{constructor(e,t,n){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await xu(this.ru.syncEngine),await Ir(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return Kf(this.persistence,new Gf,e.initialUser,this.serializer)}tu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Bf(n,e.asyncQueue,t)}nu(e,t){const n=new k_(t,this.persistence);return new O_(e.asyncQueue,n)}Xa(e){const t=mu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new gu(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,rg(),bs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new ng}}class RI extends yg{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof ea&&(this.sharedClientState.syncEngine={uo:bI.bind(null,t),co:EI.bind(null,t),lo:vI.bind(null,t),zi:TI.bind(null,t),ao:yI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async n=>{await II(this.ru.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Za(e){const t=rg();if(!ea.D(t))throw new V(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=mu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ea(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class pi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ah(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=mI.bind(null,this.syncEngine),await Pa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Jb}()}createDatastore(e){const t=Ci(e.databaseInfo.databaseId),n=function(s){return new Ob(s)}(e.databaseInfo);return function(s,a,u,c){return new Fb(s,a,u,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,u){return new Bb(n,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Ah(this.syncEngine,t,0),function(){return yh.D()?new yh:new Vb}())}createSyncEngine(e,t){return function(i,s,a,u,c,h,f){const m=new iI(i,s,a,u,c,h);return f&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=M(i);C(En,"RemoteStore shutting down."),s.W_.add(5),await br(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}pi.provider={build:()=>new pi};function Sh(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class oo{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class SI{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new we,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(n=>{n&&n.Ea()?this.metadata.resolve(n.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ia)}`))},n=>this.metadata.reject(n))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),n=Number(t);isNaN(n)&&this.cu(`length string (${t}) is not valid number`);const i=await this.lu(n);return new eI(JSON.parse(i),e.length+n)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class PI{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const a=M(i),u={documents:s.map(m=>fi(a.serializer,m))},c=await a.Co("BatchGetDocuments",a.serializer.databaseId,G.emptyPath(),u,s.length),h=new Map;c.forEach(m=>{const _=Uy(a.serializer,m);h.set(_.key.toString(),_)});const f=[];return s.forEach(m=>{const _=h.get(m.toString());L(!!_),f.push(_)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new yr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const i=N.fromPath(n);this.mutations.push(new ru(i,this.precondition(i)))}),await async function(n,i){const s=M(n),a={writes:i.map(u=>gi(s.serializer,u))};await s.bo("Commit",s.serializer.databaseId,G.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F();t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new V(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?ue.exists(!1):ue.updateTime(t):ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new V(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ue.updateTime(t)}return ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class VI{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this.Tu=n.maxAttempts,this.a_=new bu(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new PI(this.datastore),t=this.du(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.Au(i)}))}).catch(n=>{this.Au(n)})})}du(e){try{const t=this.updateFunction(e);return!Ei(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!gf(t)}return!1}}/**
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
 */const qt="FirestoreClient";class CI{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{C(qt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(C(qt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new we;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Er(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function na(r,e){r.asyncQueue.verifyOperationInProgress(),C(qt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Wf(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Ph(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Ou(r);C(qt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Ih(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Ih(e.remoteStore,i)),r._onlineComponents=e}async function Ou(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C(qt,"Using user provided OfflineComponentProvider");try{await na(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;nt("Error using user provided cache. Falling back to memory cache: "+t),await na(r,new mi)}}else C(qt,"Using default OfflineComponentProvider"),await na(r,new AI(void 0));return r._offlineComponents}async function ao(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C(qt,"Using user provided OnlineComponentProvider"),await Ph(r,r._uninitializedComponentsProvider._online)):(C(qt,"Using default OnlineComponentProvider"),await Ph(r,new pi))),r._onlineComponents}function bg(r){return Ou(r).then(e=>e.persistence)}function ku(r){return Ou(r).then(e=>e.localStore)}function Ig(r){return ao(r).then(e=>e.remoteStore)}function Nu(r){return ao(r).then(e=>e.syncEngine)}function DI(r){return ao(r).then(e=>e.datastore)}async function fr(r){const e=await ao(r),t=e.eventManager;return t.onListen=sI.bind(null,e.syncEngine),t.onUnlisten=aI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uI.bind(null,e.syncEngine),t}function xI(r){return r.asyncQueue.enqueue(async()=>{const e=await bg(r),t=await Ig(r);return e.setNetworkEnabled(!0),function(i){const s=M(i);return s.W_.delete(0),Di(s)}(t)})}function OI(r){return r.asyncQueue.enqueue(async()=>{const e=await bg(r),t=await Ig(r);return e.setNetworkEnabled(!1),async function(i){const s=M(i);s.W_.add(0),await br(s),s.j_.set("Offline")}(t)})}function kI(r,e){const t=new we;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const u=await function(h,f){const m=M(h);return m.persistence.runTransaction("read document","readonly",_=>m.localDocuments.getDocument(_,f))}(i,s);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new V(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const c=Er(u,`Failed to get document '${s} from cache`);a.reject(c)}}(await ku(r),e,t)),t.promise}function Tg(r,e,t={}){const n=new we;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new oo({next:_=>{f.su(),a.enqueueAndForget(()=>Au(s,m));const R=_.docs.has(u);!R&&_.fromCache?h.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&_.fromCache&&c&&c.source==="server"?h.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Su(pr(u.path),f,{includeMetadataChanges:!0,Ta:!0});return wu(s,m)}(await fr(r),r.asyncQueue,e,t,n)),n.promise}function NI(r,e){const t=new we;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const u=await Ls(i,s,!0),c=new fg(s,u.gs),h=c.Sa(u.documents),f=c.applyChanges(h,!1);a.resolve(f.snapshot)}catch(u){const c=Er(u,`Failed to execute query '${s} against cache`);a.reject(c)}}(await ku(r),e,t)),t.promise}function Eg(r,e,t={}){const n=new we;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new oo({next:_=>{f.su(),a.enqueueAndForget(()=>Au(s,m)),_.fromCache&&c.source==="server"?h.reject(new V(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Su(u,f,{includeMetadataChanges:!0,Ta:!0});return wu(s,m)}(await fr(r),r.asyncQueue,e,t,n)),n.promise}function MI(r,e){const t=new oo(e);return r.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).ia.add(s),s.next()}(await fr(r),t)),()=>{t.su(),r.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).ia.delete(s)}(await fr(r),t))}}function FI(r,e,t,n){const i=function(a,u){let c;return c=typeof a=="string"?pf().encode(a):a,function(f,m){return new SI(f,m)}(function(f,m){if(f instanceof Uint8Array)return Sh(f,m);if(f instanceof ArrayBuffer)return Sh(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),u)}(t,Ci(e));r.asyncQueue.enqueueAndForget(async()=>{wI(await Nu(r),i,n)})}function LI(r,e){return r.asyncQueue.enqueue(async()=>function(n,i){const s=M(n);return s.persistence.runTransaction("Get named query","readonly",a=>s.Yr.getNamedQuery(a,i))}(await ku(r),e))}/**
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
 */function vg(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Vh=new Map;/**
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
 */function Mu(r,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function wg(r,e,t,n){if(e===!0&&n===!0)throw new V(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ch(r){if(!N.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Dh(r){if(N.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function uo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F()}function J(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uo(r);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Ag(r,e){if(e<=0)throw new V(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Rg="firestore.googleapis.com",xh=!0;class Oh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rg,this.ssl=xh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xh;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sb)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vg((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xi{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new v_;switch(n.type){case"firstParty":return new S_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Vh.get(t);n&&(C("ComponentProvider","Removing Datastore"),Vh.delete(t),n.terminate())}(this),Promise.resolve()}}function Sg(r,e,t,n={}){var i;const s=(r=J(r,xi))._getSettings(),a=Object.assign(Object.assign({},s),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;s.host!==Rg&&s.host!==u&&nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:u,ssl:!1,emulatorOptions:n});if(!Kn(c,a)&&(r._setSettings(c),n.mockUserToken)){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=Ie.MOCK_USER;else{h=Jm(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ie(m)}r._authCredentials=new w_(new _d(h,f))}}/**
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
 */let Le=class Pg{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Pg(this.firestore,e,this._query)}},le=class Vg{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vg(this.firestore,e,this._key)}},xt=class Cg extends Le{constructor(e,t,n){super(e,t,pr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new N(e))}withConverter(e){return new Cg(this.firestore,e,this._path)}};function Fu(r,e,...t){if(r=_e(r),Mu("collection","path",e),r instanceof xi){const n=G.fromString(e,...t);return Dh(n),new xt(r,null,n)}{if(!(r instanceof le||r instanceof xt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return Dh(n),new xt(r.firestore,null,n)}}function BI(r,e){if(r=J(r,xi),Mu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Le(r,null,function(n){return new gt(G.emptyPath(),n)}(e))}function $s(r,e,...t){if(r=_e(r),arguments.length===1&&(e=yd.newId()),Mu("doc","path",e),r instanceof xi){const n=G.fromString(e,...t);return Ch(n),new le(r,null,new N(n))}{if(!(r instanceof le||r instanceof xt))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(e,...t));return Ch(n),new le(r.firestore,r instanceof xt?r.converter:null,new N(n))}}function Dg(r,e){return r=_e(r),e=_e(e),(r instanceof le||r instanceof xt)&&(e instanceof le||e instanceof xt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function xg(r,e){return r=_e(r),e=_e(e),r instanceof Le&&e instanceof Le&&r.firestore===e.firestore&&Ai(r._query,e._query)&&r.converter===e.converter}/**
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
 */const kh="AsyncQueue";class Nh{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new bu(this,"async_queue_retry"),this.bu=()=>{const n=bs();n&&C(kh,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.Su=e;const t=bs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=bs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new we;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Gt(e))throw e;C(kh,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(n=>{this.gu=n,this.pu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw fe("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.Su=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=vu.createAndSchedule(this,e,t,n,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&F()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Da(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class UI{constructor(){this._progressObserver={},this._taskCompletionResolver=new we,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const qI=-1;let me=class extends xi{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Nh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nh(e),this._firestoreClient=void 0,await e}}};function $I(r,e){const t=typeof r=="object"?r:od(),n=typeof r=="string"?r:Cs,i=qa(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=Qm("firestore");s&&Sg(i,...s)}return i}function xe(r){if(r._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Og(r),r._firestoreClient}function Og(r){var e,t,n;const i=r._freezeSettings(),s=function(u,c,h,f){return new cy(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,vg(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new CI(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function jI(r,e){nt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return kg(r,pi.provider,{build:n=>new yg(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function zI(r){nt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();kg(r,pi.provider,{build:t=>new RI(t,e.cacheSizeBytes)})}function kg(r,e,t){if((r=J(r,me))._firestoreClient||r._terminated)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Og(r)}function GI(r){if(r._initialized&&!r._terminated)throw new V(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new we;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!et.D())return Promise.resolve();const i=n+zf;await et.delete(i)}(mu(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function KI(r){return function(t){const n=new we;return t.asyncQueue.enqueueAndForget(async()=>fI(await Nu(t),n)),n.promise}(xe(r=J(r,me)))}function WI(r){return xI(xe(r=J(r,me)))}function HI(r){return OI(xe(r=J(r,me)))}function QI(r,e){const t=xe(r=J(r,me)),n=new UI;return FI(t,r._databaseId,e,n),n}function YI(r,e){return LI(xe(r=J(r,me)),e).then(t=>t?new Le(r,null,t.query):null)}/**
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
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(de.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let $t=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let An=class{constructor(e){this._methodName=e}};/**
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
 */class co{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}}/**
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
 */class Lu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const JI=/^__.*__$/;class XI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}class Ng{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mg(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class lo{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:n,Qu:!1});return i.$u(e),i}Ku(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return js(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Mg(this.Lu)&&JI.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ZI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ci(e)}ju(e,t,n,i=!1){return new lo({Lu:e,methodName:t,zu:n,path:ae.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rn(r){const e=r._freezeSettings(),t=Ci(r._databaseId);return new ZI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function ho(r,e,t,n,i,s={}){const a=r.ju(s.merge||s.mergeFields?2:0,e,t,i);Gu("Data must be an object, but it was:",a,n);const u=Bg(n,a);let c,h;if(s.merge)c=new Ue(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=xa(e,m,t);if(!a.contains(_))throw new V(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);qg(f,_)||f.push(_)}c=new Ue(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new XI(new ve(u),c,h)}class Oi extends An{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oi}}function Fg(r,e,t){return new lo({Lu:3,zu:e.settings.zu,methodName:r._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Bu extends An{_toFieldTransform(e){return new Si(e.path,new sr)}isEqual(e){return e instanceof Bu}}class Uu extends An{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=Fg(this,e,!0),n=this.Hu.map(s=>Sn(s,t)),i=new _n(n);return new Si(e.path,i)}isEqual(e){return e instanceof Uu&&Kn(this.Hu,e.Hu)}}class qu extends An{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=Fg(this,e,!0),n=this.Hu.map(s=>Sn(s,t)),i=new yn(n);return new Si(e.path,i)}isEqual(e){return e instanceof qu&&Kn(this.Hu,e.Hu)}}class $u extends An{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new or(e.serializer,af(e.serializer,this.Ju));return new Si(e.path,t)}isEqual(e){return e instanceof $u&&this.Ju===e.Ju}}function ju(r,e,t,n){const i=r.ju(1,e,t);Gu("Data must be an object, but it was:",i,n);const s=[],a=ve.empty();Kt(n,(c,h)=>{const f=Ku(e,c,t);h=_e(h);const m=i.Ku(f);if(h instanceof Oi)s.push(f);else{const _=Sn(h,m);_!=null&&(s.push(f),a.set(f,_))}});const u=new Ue(s);return new Ng(a,u,i.fieldTransforms)}function zu(r,e,t,n,i,s){const a=r.ju(1,e,t),u=[xa(e,n,t)],c=[i];if(s.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)u.push(xa(e,s[_])),c.push(s[_+1]);const h=[],f=ve.empty();for(let _=u.length-1;_>=0;--_)if(!qg(h,u[_])){const R=u[_];let D=c[_];D=_e(D);const O=a.Ku(R);if(D instanceof Oi)h.push(R);else{const x=Sn(D,O);x!=null&&(h.push(R),f.set(R,x))}}const m=new Ue(h);return new Ng(f,m,a.fieldTransforms)}function Lg(r,e,t,n=!1){return Sn(t,r.ju(n?4:3,e))}function Sn(r,e){if(Ug(r=_e(r)))return Gu("Unsupported field value:",e,r),Bg(r,e);if(r instanceof An)return function(n,i){if(!Mg(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const u of n){let c=Sn(u,i.Uu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return af(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ce.fromDate(n);return{timestampValue:ar(i.serializer,s)}}if(n instanceof ce){const s=new ce(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ar(i.serializer,s)}}if(n instanceof co)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof it)return{bytesValue:bf(i.serializer,n._byteString)};if(n instanceof le){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uu(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Lu)return function(a,u){return{mapValue:{fields:{[Ja]:{stringValue:Xa},[nr]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Wu("VectorValues must only contain numeric values.");return nu(u.serializer,h)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${uo(n)}`)}(r,e)}function Bg(r,e){const t={};return Nd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(r,(n,i)=>{const s=Sn(i,e.qu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Ug(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ce||r instanceof co||r instanceof it||r instanceof le||r instanceof An||r instanceof Lu)}function Gu(r,e,t){if(!Ug(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=uo(t);throw n==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+n)}}function xa(r,e,t){if((e=_e(e))instanceof $t)return e._internalPath;if(typeof e=="string")return Ku(r,e);throw js("Field path arguments must be of type string or ",r,!1,void 0,t)}const e0=new RegExp("[~\\*/\\[\\]]");function Ku(r,e,t){if(e.search(e0)>=0)throw js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new $t(...e.split("."))._internalPath}catch{throw js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function js(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new V(S.INVALID_ARGUMENT,u+r+c)}function qg(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class _i{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new t0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class t0 extends _i{data(){return super.data()}}function fo(r,e){return typeof e=="string"?Ku(r,e):e instanceof $t?e._internalPath:e._delegate._internalPath}/**
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
 */function $g(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wu{}class ki extends Wu{}function At(r,e,...t){let n=[];e instanceof Wu&&n.push(e),n=n.concat(t),function(s){const a=s.filter(c=>c instanceof Hu).length,u=s.filter(c=>c instanceof go).length;if(a>1||a>0&&u>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class go extends ki{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new go(e,t,n)}_apply(e){const t=this._parse(e);return zg(e._query,t),new Le(e.firestore,e.converter,ya(e._query,t))}_parse(e){const t=Rn(e.firestore);return function(s,a,u,c,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Fh(m,f);const D=[];for(const O of m)D.push(Mh(c,s,O));_={arrayValue:{values:D}}}else _=Mh(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Fh(m,f),_=Lg(u,a,m,f==="in"||f==="not-in");return K.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function n0(r,e,t){const n=e,i=fo("where",r);return go._create(i,n,t)}class Hu extends Wu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Hu(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const u=s.getFlattenedFilters();for(const c of u)zg(a,c),a=ya(a,c)}(e._query,t),new Le(e.firestore,e.converter,ya(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qu extends ki{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qu(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new di(s,a)}(e._query,this._field,this._direction);return new Le(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new gt(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function r0(r,e="asc"){const t=e,n=fo("orderBy",r);return Qu._create(n,t)}class mo extends ki{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new mo(e,t,n)}_apply(e){return new Le(e.firestore,e.converter,Os(e._query,this._limit,this._limitType))}}function i0(r){return Ag("limit",r),mo._create("limit",r,"F")}function s0(r){return Ag("limitToLast",r),mo._create("limitToLast",r,"L")}class po extends ki{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new po(e,t,n)}_apply(e){const t=jg(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(i,s){return new gt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function o0(...r){return po._create("startAt",r,!0)}function a0(...r){return po._create("startAfter",r,!1)}class _o extends ki{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new _o(e,t,n)}_apply(e){const t=jg(e,this.type,this._docOrFields,this._inclusive);return new Le(e.firestore,e.converter,function(i,s){return new gt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function u0(...r){return _o._create("endBefore",r,!1)}function c0(...r){return _o._create("endAt",r,!0)}function jg(r,e,t,n){if(t[0]=_e(t[0]),t[0]instanceof _i)return function(s,a,u,c,h){if(!c)throw new V(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const m of zn(s))if(m.field.isKeyField())f.push(mn(a,c.key));else{const _=c.data.field(m.field);if(Ys(_))throw new V(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const R=m.field.canonicalString();throw new V(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}f.push(_)}return new Bt(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const i=Rn(r.firestore);return function(a,u,c,h,f,m){const _=a.explicitOrderBy;if(f.length>_.length)throw new V(S.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let D=0;D<f.length;D++){const O=f[D];if(_[D].field.isKeyField()){if(typeof O!="string")throw new V(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof O}`);if(!eu(a)&&O.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${O}' contains a slash.`);const x=a.path.child(G.fromString(O));if(!N.isDocumentKey(x))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const q=new N(x);R.push(mn(u,q))}else{const x=Lg(c,h,O);R.push(x)}}return new Bt(R,m)}(r._query,r.firestore._databaseId,i,e,t,n)}}function Mh(r,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eu(e)&&t.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(G.fromString(t));if(!N.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return mn(r,new N(n))}if(t instanceof le)return mn(r,t._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uo(t)}.`)}function Fh(r,e){if(!Array.isArray(r)||r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zg(r,e){const t=function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Yu{convertValue(e,t="none"){switch(Ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Kt(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[nr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>oe(a.doubleValue));return new Lu(s)}convertGeoPoint(e){return new co(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Js(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const t=ht(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);L(Cf(n));const i=new Mt(n.get(1),n.get(3)),s=new N(n.popFirst(5));return i.isEqual(t)||fe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function yo(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class l0 extends Yu{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}/**
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
 */class ln{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ft=class extends _i{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(fo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},ti=class extends ft{data(e={}){return super.data(e)}},jt=class{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ln(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ti(this._firestore,this._userDataWriter,n.key,n,new ln(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new ti(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ln(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new ti(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ln(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:h0(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function h0(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function Gg(r,e){return r instanceof ft&&e instanceof ft?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof jt&&e instanceof jt&&r._firestore===e._firestore&&xg(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function d0(r){r=J(r,le);const e=J(r.firestore,me);return Tg(xe(e),r._key).then(t=>Ju(e,r,t))}class Pn extends Yu{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function f0(r){r=J(r,le);const e=J(r.firestore,me),t=xe(e),n=new Pn(e);return kI(t,r._key).then(i=>new ft(e,n,r._key,i,new ln(i!==null&&i.hasLocalMutations,!0),r.converter))}function g0(r){r=J(r,le);const e=J(r.firestore,me);return Tg(xe(e),r._key,{source:"server"}).then(t=>Ju(e,r,t))}function m0(r){r=J(r,Le);const e=J(r.firestore,me),t=xe(e),n=new Pn(e);return $g(r._query),Eg(t,r._query).then(i=>new jt(e,n,r,i))}function p0(r){r=J(r,Le);const e=J(r.firestore,me),t=xe(e),n=new Pn(e);return NI(t,r._query).then(i=>new jt(e,n,r,i))}function _0(r){r=J(r,Le);const e=J(r.firestore,me),t=xe(e),n=new Pn(e);return Eg(t,r._query,{source:"server"}).then(i=>new jt(e,n,r,i))}function Lh(r,e,t){r=J(r,le);const n=J(r.firestore,me),i=yo(r.converter,e,t);return Ni(n,[ho(Rn(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,ue.none())])}function Bh(r,e,t,...n){r=J(r,le);const i=J(r.firestore,me),s=Rn(i);let a;return a=typeof(e=_e(e))=="string"||e instanceof $t?zu(s,"updateDoc",r._key,e,t,n):ju(s,"updateDoc",r._key,e),Ni(i,[a.toMutation(r._key,ue.exists(!0))])}function y0(r){return Ni(J(r.firestore,me),[new yr(r._key,ue.none())])}function Kg(r,e){const t=J(r.firestore,me),n=$s(r),i=yo(r.converter,e);return Ni(t,[ho(Rn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,ue.exists(!1))]).then(()=>n)}function Wg(r,...e){var t,n,i;r=_e(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Da(e[a])||(s=e[a],a++);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Da(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let c,h,f;if(r instanceof le)h=J(r.firestore,me),f=pr(r._key.path),c={next:m=>{e[a]&&e[a](Ju(h,r,m))},error:e[a+1],complete:e[a+2]};else{const m=J(r,Le);h=J(m.firestore,me),f=m._query;const _=new Pn(h);c={next:R=>{e[a]&&e[a](new jt(h,_,m,R))},error:e[a+1],complete:e[a+2]},$g(r._query)}return function(_,R,D,O){const x=new oo(O),q=new Su(R,x,D);return _.asyncQueue.enqueueAndForget(async()=>wu(await fr(_),q)),()=>{x.su(),_.asyncQueue.enqueueAndForget(async()=>Au(await fr(_),q))}}(xe(h),f,u,c)}function b0(r,e){return MI(xe(r=J(r,me)),Da(e)?e:{next:e})}function Ni(r,e){return function(n,i){const s=new we;return n.asyncQueue.enqueueAndForget(async()=>cI(await Nu(n),i,s)),s.promise}(xe(r),e)}function Ju(r,e,t){const n=t.docs.get(e._key),i=new Pn(r);return new ft(r,i,e._key,n,new ln(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const I0={maxAttempts:5};/**
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
 */let T0=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Rn(e)}set(e,t,n){this._verifyNotCommitted();const i=Pt(e,this._firestore),s=yo(i.converter,t,n),a=ho(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,ue.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=Pt(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof $t?zu(this._dataReader,"WriteBatch.update",s._key,t,n,i):ju(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Pt(e,this._firestore);return this._mutations=this._mutations.concat(new yr(t._key,ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Pt(r,e){if((r=_e(r)).firestore!==e)throw new V(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class E0{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Rn(e)}get(e){const t=Pt(e,this._firestore),n=new l0(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return F();const s=i[0];if(s.isFoundDocument())return new _i(this._firestore,n,s.key,s,t.converter);if(s.isNoDocument())return new _i(this._firestore,n,t._key,null,t.converter);throw F()})}set(e,t,n){const i=Pt(e,this._firestore),s=yo(i.converter,t,n),a=ho(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,n);return this._transaction.set(i._key,a),this}update(e,t,n,...i){const s=Pt(e,this._firestore);let a;return a=typeof(t=_e(t))=="string"||t instanceof $t?zu(this._dataReader,"Transaction.update",s._key,t,n,i):ju(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,a),this}delete(e){const t=Pt(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let v0=class extends E0{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Pt(e,this._firestore),n=new Pn(this._firestore);return super.get(e).then(i=>new ft(this._firestore,n,t._key,i._document,new ln(!1,!1),t.converter))}};function w0(r,e,t){r=J(r,me);const n=Object.assign(Object.assign({},I0),t);return function(s){if(s.maxAttempts<1)throw new V(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(s,a,u){const c=new we;return s.asyncQueue.enqueueAndForget(async()=>{const h=await DI(s);new VI(s.asyncQueue,h,u,a,c).Iu()}),c.promise}(xe(r),i=>e(new v0(r,i)),n)}/**
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
 */function A0(){return new Oi("deleteField")}function R0(){return new Bu("serverTimestamp")}function S0(...r){return new Uu("arrayUnion",r)}function P0(...r){return new qu("arrayRemove",r)}function V0(r){return new $u("increment",r)}(function(e,t=!0){(function(i){mr=i})($a),Qn(new gn("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new me(new A_(n.getProvider("auth-internal")),new P_(a,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mt(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Ze(_l,yl,e),Ze(_l,yl,"esm2017")})();const C0={firebase:{apiKey:"AIzaSyDRx1KMPmSuNkVSEz7uEFSqkMOpW9dWGDA",authDomain:"amorphous-arts-bb228.firebaseapp.com",projectId:"amorphous-arts-bb228",storageBucket:"amorphous-arts-bb228.firebasestorage.app",messagingSenderId:"56943092140",appId:"1:56943092140:web:a8dbebb6cc74f4bae19a09"}};/**
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
 */class D0{constructor(e,t){this._delegate=e,this.firebase=t,ni(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ja(this._delegate)))}_getService(e,t=Ot){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ot){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ni(this._delegate,e)}_addOrOverwriteComponent(e){nd(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const x0={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Uh=new zs("app-compat","Firebase",x0);/**
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
 */function O0(r){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ze,setLogLevel:ud,onLog:ad,apps:null,SDK_VERSION:$a,INTERNAL:{registerComponent:u,removeApp:n,useAsService:c,modularAPIs:y_}};t.default=t,Object.defineProperty(t,"apps",{get:a});function n(h){delete e[h]}function i(h){if(h=h||Ot,!al(e,h))throw Uh.create("no-app",{appName:h});return e[h]}i.App=r;function s(h,f={}){const m=Gs(h,f);if(al(e,m.name))return e[m.name];const _=new r(m,t);return e[m.name]=_,_}function a(){return Object.keys(e).map(h=>e[h])}function u(h){const f=h.name,m=f.replace("-compat","");if(Qn(h)&&h.type==="PUBLIC"){const _=(R=i())=>{if(typeof R[m]!="function")throw Uh.create("invalid-app-argument",{appName:f});return R[m]()};h.serviceProps!==void 0&&Ts(_,h.serviceProps),t[m]=_,r.prototype[m]=function(...R){return this._getService.bind(this,f).apply(this,h.multipleInstances?R:[])}}return h.type==="PUBLIC"?t[m]:null}function c(h,f){return f==="serverAuth"?null:f}return t}/**
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
 */function Hg(){const r=O0(D0);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:Hg,extendNamespace:e,createSubscribe:ip,ErrorFactory:zs,deepExtend:Ts});function e(t){Ts(r,t)}return r}const k0=Hg();/**
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
 */const qh=new Ba("@firebase/app-compat"),N0="@firebase/app-compat",M0="0.2.51";/**
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
 */function F0(r){Ze(N0,M0,r)}/**
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
 */try{const r=Wh();if(r.firebase!==void 0){qh.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&qh.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const L0=k0;F0();const B0="@firebase/firestore-compat",U0="0.3.44";/**
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
 */function Xu(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new V("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function $h(){if(typeof Uint8Array>"u")throw new V("unimplemented","Uint8Arrays are not available in this environment.")}function jh(){if(!ay())throw new V("unimplemented","Blobs are unavailable in Firestore in this environment.")}class yi{constructor(e){this._delegate=e}static fromBase64String(e){return jh(),new yi(it.fromBase64String(e))}static fromUint8Array(e){return $h(),new yi(it.fromUint8Array(e))}toBase64(){return jh(),this._delegate.toBase64()}toUint8Array(){return $h(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Oa(r){return q0(r,["next","error","complete"])}function q0(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class $0{enableIndexedDbPersistence(e,t){return jI(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return zI(e._delegate)}clearIndexedDbPersistence(e){return GI(e._delegate)}}class Qg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&nt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Sg(this._delegate,e,t,n)}enableNetwork(){return WI(this._delegate)}disableNetwork(){return HI(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,wg("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return KI(this._delegate)}onSnapshotsInSync(e){return b0(this._delegate,e)}get app(){if(!this._appCompat)throw new V("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new gr(this,Fu(this._delegate,e))}catch(t){throw Me(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ge(this,$s(this._delegate,e))}catch(t){throw Me(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ne(this,BI(this._delegate,e))}catch(t){throw Me(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return w0(this._delegate,t=>e(new Yg(this,t)))}batch(){return xe(this._delegate),new Jg(new T0(this._delegate,e=>Ni(this._delegate,e)))}loadBundle(e){return QI(this._delegate,e)}namedQuery(e){return YI(this._delegate,e).then(t=>t?new Ne(this,t):null)}}class bo extends Yu{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(new it(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ge.forKey(t,this.firestore,null)}}function j0(r){T_(r)}class Yg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new bo(e)}get(e){const t=hn(e);return this._delegate.get(t).then(n=>new bi(this._firestore,new ft(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const i=hn(e);return n?(Xu("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=hn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=hn(e);return this._delegate.delete(t),this}}class Jg{constructor(e){this._delegate=e}set(e,t,n){const i=hn(e);return n?(Xu("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=hn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=hn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class vn{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new ti(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ii(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=vn.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(t);return s||(s=new vn(e,new bo(e),t),i.set(t,s)),s}}vn.INSTANCES=new WeakMap;class Ge{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new bo(e)}static forPath(e,t,n){if(e.length%2!==0)throw new V("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ge(t,new le(t._delegate,n,new N(e)))}static forKey(e,t,n){return new Ge(t,new le(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new gr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new gr(this.firestore,Fu(this._delegate,e))}catch(t){throw Me(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=_e(e),e instanceof le?Dg(this._delegate,e):!1}set(e,t){t=Xu("DocumentReference.set",t);try{return t?Lh(this._delegate,e,t):Lh(this._delegate,e)}catch(n){throw Me(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?Bh(this._delegate,e):Bh(this._delegate,e,t,...n)}catch(i){throw Me(i,"updateDoc()","DocumentReference.update()")}}delete(){return y0(this._delegate)}onSnapshot(...e){const t=Xg(e),n=Zg(e,i=>new bi(this.firestore,new ft(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Wg(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=f0(this._delegate):(e==null?void 0:e.source)==="server"?t=g0(this._delegate):t=d0(this._delegate),t.then(n=>new bi(this.firestore,new ft(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new Ge(this.firestore,e?this._delegate.withConverter(vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Me(r,e,t){return r.message=r.message.replace(e,t),r}function Xg(r){for(const e of r)if(typeof e=="object"&&!Oa(e))return e;return{}}function Zg(r,e){var t,n;let i;return Oa(r[0])?i=r[0]:Oa(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class bi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ge(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Gg(this._delegate,e._delegate)}}class Ii extends bi{data(e){const t=this._delegate.data(e);return this._delegate._converter||E_(t!==void 0),t}}class Ne{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new bo(e)}where(e,t,n){try{return new Ne(this.firestore,At(this._delegate,n0(e,t,n)))}catch(i){throw Me(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ne(this.firestore,At(this._delegate,r0(e,t)))}catch(n){throw Me(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ne(this.firestore,At(this._delegate,i0(e)))}catch(t){throw Me(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ne(this.firestore,At(this._delegate,s0(e)))}catch(t){throw Me(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ne(this.firestore,At(this._delegate,o0(...e)))}catch(t){throw Me(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ne(this.firestore,At(this._delegate,a0(...e)))}catch(t){throw Me(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ne(this.firestore,At(this._delegate,u0(...e)))}catch(t){throw Me(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ne(this.firestore,At(this._delegate,c0(...e)))}catch(t){throw Me(t,"endAt()","Query.endAt()")}}isEqual(e){return xg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=p0(this._delegate):(e==null?void 0:e.source)==="server"?t=_0(this._delegate):t=m0(this._delegate),t.then(n=>new ka(this.firestore,new jt(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=Xg(e),n=Zg(e,i=>new ka(this.firestore,new jt(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Wg(this._delegate,t,n)}withConverter(e){return new Ne(this.firestore,e?this._delegate.withConverter(vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class z0{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ii(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ka{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ne(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ii(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new z0(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Ii(this._firestore,n))})}isEqual(e){return Gg(this._delegate,e._delegate)}}class gr extends Ne{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ge(this.firestore,e):null}doc(e){try{return e===void 0?new Ge(this.firestore,$s(this._delegate)):new Ge(this.firestore,$s(this._delegate,e))}catch(t){throw Me(t,"doc()","CollectionReference.doc()")}}add(e){return Kg(this._delegate,e).then(t=>new Ge(this.firestore,t))}isEqual(e){return Dg(this._delegate,e._delegate)}withConverter(e){return new gr(this.firestore,e?this._delegate.withConverter(vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function hn(r){return J(r,le)}/**
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
 */class Zu{constructor(...e){this._delegate=new $t(...e)}static documentId(){return new Zu(ae.keyField().canonicalString())}isEqual(e){return e=_e(e),e instanceof $t?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class un{static serverTimestamp(){const e=R0();return e._methodName="FieldValue.serverTimestamp",new un(e)}static delete(){const e=A0();return e._methodName="FieldValue.delete",new un(e)}static arrayUnion(...e){const t=S0(...e);return t._methodName="FieldValue.arrayUnion",new un(t)}static arrayRemove(...e){const t=P0(...e);return t._methodName="FieldValue.arrayRemove",new un(t)}static increment(e){const t=V0(e);return t._methodName="FieldValue.increment",new un(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const G0={Firestore:Qg,GeoPoint:co,Timestamp:ce,Blob:yi,Transaction:Yg,WriteBatch:Jg,DocumentReference:Ge,DocumentSnapshot:bi,Query:Ne,QueryDocumentSnapshot:Ii,QuerySnapshot:ka,CollectionReference:gr,FieldPath:Zu,FieldValue:un,setLogLevel:j0,CACHE_SIZE_UNLIMITED:qI};function K0(r,e){r.INTERNAL.registerComponent(new gn("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},G0)))}/**
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
 */function W0(r){K0(r,(e,t)=>new Qg(e,t,new $0)),r.registerVersion(B0,U0)}W0(L0);const H0=C0.firebase,Q0=Gs(H0),Y0=$I(Q0),ec=class ec{};ec.randomInclusive=(e,t)=>{const n=Math.ceil(e),i=Math.floor(t);return Math.floor(Math.random()*(i-n+1)+n)};let Ti=ec;const J0={base_meal:["stuffed","not_stuffed"],Card_1:["stuffed","topped"],Card_2:["drinks","topped","sides","extras"]};class Na{constructor(e){this.collection=e,this.getIngredients=async()=>{const t=this.getRandomKey(),n=await this.collection.getIngredient(t);return n.doRotate=Ti.randomInclusive(0,1)===1,[n,await this.collection.getIngredient(t)].sort((i,s)=>i.order-s.order)},this.getRandomKey=()=>{const t=J0[this.collection.group];return t[Ti.randomInclusive(0,t.length-1)]}}}const em=[{descriptor:"Stuffed Shells",uuid:"754717a1-85b0-479e-9888-c5a82f76fe4d"},{descriptor:"Wellington",uuid:"212d4c15-2364-4b84-9965-27741ff6e26f"},{descriptor:"Ravioli",uuid:"edde354d-19f2-4d9b-8cd1-ce308cdd5d88"},{descriptor:"Dumplings",uuid:"8f5b6841-f077-40ed-ac55-586d42712ab8"},{descriptor:"Hot Dog",uuid:"ba48de07-cb95-481b-844f-2056cc92df5f"},{descriptor:"Calzone",uuid:"bbaf14ac-7c62-46a4-a3d9-6fac73f30017"},{descriptor:"Empanadas",uuid:"ef729b97-6225-4ef1-a387-9ac78d89513e"},{descriptor:"Spanikopita",uuid:"d16c9c8c-1b8d-493d-ac1a-c3e916ca607e"},{descriptor:"Enchiladas",uuid:"af183c52-4176-40ce-91c4-f57751ef9ce5"},{descriptor:"Spring Rolls",uuid:"80bfa6f6-16da-4da8-8da4-77fc204c6e86"},{descriptor:"Gyro",uuid:"66ec29d1-332a-4b68-8257-498cc0489621"},{descriptor:"Souvlaki",uuid:"292fa6c2-3b62-4ccb-bccd-19bc1bef8140"},{descriptor:"Croquettes",uuid:"1214ec33-e019-43ec-80ff-6e9e674c40ba"},{descriptor:"Burrito",uuid:"e33afba0-4464-4fe8-b679-f7b666dc1f52"},{descriptor:"Falafel",uuid:"1a70ed02-7fce-4262-a066-4dad074ace16"},{descriptor:"Haggis",uuid:"0677b571-679e-412a-a674-1cec6a9f2027"}],tm=[{descriptor:"Top Ramen",uuid:"86b132fd-ce6a-4aed-a2ba-68d11d3d589c"},{descriptor:"Rotisserie",uuid:"f835419d-e78a-4c96-8600-e0b8041f2ff6"},{descriptor:"Salad",uuid:"6e7e9374-43a2-407f-a6ce-ffcd52ed5d28"},{descriptor:"Shepard's Pie",uuid:"18b8b126-eef7-4b73-b213-0fd157fd34f8"},{descriptor:"Souffle",uuid:"c8d631f5-aecb-4a0b-a4ff-323272280312"},{descriptor:"Soup",uuid:"e89965d1-f372-4197-9899-02691d4f29b2"},{descriptor:"Steak",uuid:"168f64d2-ee7e-4a59-99a5-4b4f0a180681"},{descriptor:"Stew",uuid:"65bcfdd1-9866-45bc-9dbd-7c961a2df007"},{descriptor:"Stir Fry",uuid:"5a110884-1b58-4886-88eb-326076491c27"},{descriptor:"Stuffing",uuid:"3741538e-2c61-4d93-b7b9-11e9b7f3ec91"},{descriptor:"Sushi",uuid:"4b285b55-928d-4af3-8593-101578ea1f52"},{descriptor:"Tacos",uuid:"c4bdbea0-ae05-44c3-900d-07844cc1a406"},{descriptor:"Curry",uuid:"3bf18c30-edbb-4f86-b406-0377e9451dc4"},{descriptor:"Pho",uuid:"1703a394-eec6-433e-a0a0-f209d21f6af4"},{descriptor:"Pizza",uuid:"ac330bec-1131-45ff-a004-40145e21485e"},{descriptor:"Pudding",uuid:"085026e3-c5be-452e-bcda-aa665331e370"},{descriptor:"Quiche",uuid:"1702173b-3d30-404d-b690-c497471513fd"},{descriptor:"Filet",uuid:"1993ad6f-cc13-4821-b662-c2344fdb34de"},{descriptor:"Ice Cream",uuid:"b818b648-47eb-4ea9-b81b-ddf33dac674f"},{descriptor:"Lasagne",uuid:"d5a0fe93-fd56-4acb-b0ce-293eeafa89c2"},{descriptor:"Parfait",uuid:"b7eed744-d99d-4000-929a-67a580daeec8"},{descriptor:"Pie",uuid:"b5e2a80c-f060-4e12-b3f6-b14afcaba2bf"},{descriptor:"Aspic",uuid:"9a9d0ebc-eb9b-4ae9-84fd-f0144d11cd11"},{descriptor:"Burger",uuid:"8d342778-74d9-49d5-b128-e2c8e8545d58"},{descriptor:"Cake",uuid:"a2a6bce0-0c6d-497a-8396-13339720b179"},{descriptor:"Casserole",uuid:"4abcd1f9-be48-4afb-a021-450afccdc648"},{descriptor:"Chili",uuid:"1f020278-c57d-4ee1-81aa-c91740810c5a"},{descriptor:"Club Sandwich",uuid:"48f184f2-8da7-459f-835b-f3c1b3eccbb2"},{descriptor:"Goulash",uuid:"2974416a-397a-454f-be57-d653ffb3ac94"},{descriptor:"Shish Kebab",uuid:"ddf32c5a-d926-421c-9320-7c6ca960beff"},{descriptor:"Century Egg",uuid:"dd7f14c9-f0da-4e42-907c-7bbe8aaaf978"},{descriptor:"Peking Duck",uuid:"b0806933-0369-4c42-b00a-60491cf9701b"},{descriptor:"Gelato",uuid:"026eec78-d912-4d3b-9fec-f0ef8d41c255"},{descriptor:"Pad Thai",uuid:"4e33030f-eab9-4a47-9e69-33b41ab8f2b0"},{descriptor:"Tres Leches",uuid:"a52f3ea7-baf6-4491-9a4f-01630231ac2e"},{descriptor:"Fajitas",uuid:"5404f590-9f5a-4486-b3b1-ad7ac7e520db"},{descriptor:"Couscous",uuid:"8680ad7f-7a56-4abc-b4f6-f780524ef4e3"},{descriptor:"Matzoh Ball Soup",uuid:"68f5ca28-1249-455f-8c77-94bf8aab9047"},{descriptor:"Poutine",uuid:"33af7875-16de-45e3-a107-b51d49c6c47b"},{descriptor:"Beaver Tail",uuid:"ecfbf5b2-dd39-4b6e-a6a7-38c59612f981"},{descriptor:"Borscht",uuid:"5e72f8c8-14bd-450b-8d0e-38a6be387e53"},{descriptor:"Laverbread",uuid:"e047aa54-c433-49f2-8a3d-ca81d7c0c6f0"},{descriptor:"Waffles",uuid:"dcc2681b-6e62-4e95-b108-2fca513fe51d"},{descriptor:"Frikadeller",uuid:"db4155d7-9f74-428a-9424-0a04eba9b3a4"},{descriptor:"Sausages",uuid:"7cb24000-d337-4b84-8554-0bb8f60a91a1"},{descriptor:"Bibimbap",uuid:"e3d2d3ee-6e1f-4be1-ae12-5773598c25c8"},{descriptor:"Fermented Shark",uuid:"90694812-b5d8-4fd2-a0b3-fbdbf5b262de"},{descriptor:"Bread",uuid:"9cf154fa-1272-41f5-8498-9ebaf1fb648c"},{descriptor:"Nachos",uuid:"c69510fe-ff60-4cce-bf97-39ce00f4ef7e"},{descriptor:"Croissants",uuid:"3fe7d624-84c9-461e-99cc-3450910a2e5e"},{descriptor:"Escargot",uuid:"5164c760-7f4c-421c-b560-3b27184ef421"},{descriptor:"Frog's Legs",uuid:"5b517f1a-b598-4ec4-b1e9-ce2140a1425b"},{descriptor:"Paella",uuid:"f9fa8c25-d7a1-42a2-bace-241d961d6d13"}],X0={stuffed:em,not_stuffed:tm},Z0=Object.freeze(Object.defineProperty({__proto__:null,default:X0,not_stuffed:tm,stuffed:em},Symbol.toStringTag,{value:"Module"})),eT=JSON.parse(`{"drinks":[{"ingredient":"Unpasteurized Milk","attribute":"Lumpy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"cf232306-a4e9-4edf-bbed-7899bc7afbe4"},{"ingredient":"A Quarter Teaspoon of Bleach","attribute":"Non-Lethal","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"14e2ff17-db39-4f38-a774-68f73a1fe72e"},{"ingredient":"Steaming Cud","attribute":"Pre-Chewed","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ab93c6e7-2aba-4d2c-8817-d4b3f248cbc5"},{"ingredient":"Beaver Anal Gland Juice","attribute":"Raspberry Flavored","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"71ccef23-888a-458f-8be7-4e380908f124"},{"ingredient":"Platypus Milk","attribute":"Venomous","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"9925b753-e6b7-49e5-a0f9-5e3859fada2f"}],"sides":[],"topped":[{"ingredient":"Gravy?","attribute":"Fermented","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"cf1c2b9d-7feb-4f24-924d-c67132a5e515"},{"ingredient":"Headcheese","attribute":"Human","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"60710d6e-ea2b-4d3a-a6da-21d85edb4da4"},{"ingredient":"Lamb Sauce","attribute":"Gloopy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4f0a19a4-045d-4d0d-b695-a40477989e57"},{"ingredient":"Foot Cheese","attribute":"Home Grown","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"62400311-f68b-4834-8675-fce88551e4c4"},{"ingredient":"Rock-It Sauce™","attribute":"Sold Out","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"5db92dd9-0ae4-48df-8ba3-485e6fb5ace5"}],"stuffed":[{"ingredient":"Claw Meat","attribute":"Spongey","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"9c8a68cb-d11f-4473-a9b8-a0c0df91a1c1"},{"ingredient":"School Lunch Mystery Meat","attribute":"Slithering","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"2f7697c7-c7a7-4f19-a974-0bcb96129956"},{"ingredient":"Sea Turtle Meat","attribute":"Endangered","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"2f68ffac-6e8d-4d2f-9445-568b9cb51eaa"},{"ingredient":"Crocodile Meat","attribute":"Aggressive","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"75cc49c7-53b0-46ad-b688-0e6d396249b0"},{"ingredient":"Leopleurodon Meat","attribute":"Magical","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"dc158db9-ab2a-4a22-886d-9d03d0334ae9"},{"ingredient":"Manatee Meat","attribute":"Medium Rare","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"0871fdac-3d74-479a-9c9c-a0fe37099a75"},{"ingredient":"Clown Meat","attribute":"That Tastes Kinda Funny","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"e7b2d545-55f5-40cd-8e0e-99663401df41"},{"ingredient":"Hamburger Meat","attribute":"RAW","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"05818b8a-d254-4c78-af78-23b8b5079aef"},{"ingredient":"Dark Meat","attribute":"Juicy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"63c2d03b-0798-4867-9d83-db9313c90441"}],"extras":[{"ingredient":"Monkey Brains","attribute":"Curdled","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ec2ca0dc-2735-44cf-8dce-5425a90c8b67"},{"ingredient":"90's Neon Condiments","attribute":"Unctuous","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"476d9211-eeb4-48fc-9840-883a6cbb72db"},{"ingredient":"Orbeez","attribute":"Fully Hydrated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"e9e499e8-9367-43f7-9694-0c1c8fdfb96a"},{"ingredient":"Bill Cosby's Leftover Puddin'","attribute":"Putrid","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"c430aa41-66a3-4d51-815e-7918b4f9f2ab"},{"ingredient":"A Handful of Silver Dragees","attribute":"Mechanical","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"b5ead66c-ad8c-4609-b56b-91cea1ed8d2c"},{"ingredient":"Yellow Snow","attribute":"Acidic","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"1814c54a-72bb-4418-8dd3-4ee217f0adfc"},{"ingredient":"A Gram of Skin Flakes","attribute":"Dessicated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ddeb7baa-4f71-4f40-b970-d23bb1143e01"},{"ingredient":"Pre-Cooked Dino Nuggets","attribute":"Nutritionally Fortified","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"061b975e-f157-44a8-92b2-3d5238f9d3a6"},{"ingredient":"Fred Durst's Autograph","attribute":"Pustulent","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"bac967fc-85c6-4eb3-9797-1e664ce9cfcc"},{"ingredient":"Rat Shit","attribute":"Adorable","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"bb2156d7-64fa-4d0f-9e6e-c46450912747"},{"ingredient":"A Drawer Full of Outdated Computer Cables","attribute":"Vibrating","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"aac8d7f2-d26a-4a9e-b044-9827a2b9b331"},{"ingredient":"Pencil Shavings","attribute":"Dusty","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"bd770069-2b31-4204-9984-e5dfc7ccc019"},{"ingredient":"Unpeeled Shrimp","attribute":"Crunchy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"03dea02d-66bc-4da3-932c-7ccc7f948b60"},{"ingredient":"Sea Cucumber","attribute":"Singing","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d3fde9cf-74fc-46cb-814f-2283d01763c7"},{"ingredient":"The Cool S","attribute":"Crusty","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"6bda014d-44e3-457d-9bd4-2ea4df56fca0"},{"ingredient":"Dolphin Filet","attribute":"Occulated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"19edb101-071b-421a-bebc-0990540f4cf0"},{"ingredient":"Elephant Ears","attribute":"Plastic","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"89bc0ac2-7a3d-4df4-9b8b-027b1f0c505a"},{"ingredient":"Bangers","attribute":"Hissing","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"e5d42b7a-f11e-406c-b9ef-b8809b8e18b1"},{"ingredient":"Rocky Mountain Oysters","attribute":"Bumpy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"8758ae3a-9784-468a-8025-1702818936e4"},{"ingredient":"Jerked Goat","attribute":"Tenderized","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"505f8cb8-b814-49ac-96ae-9e43d2d3c17b"},{"ingredient":"Ox Tails","attribute":"Freshly Peeled","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"9c655e70-ff17-4b4b-ac7e-c5d00e2b13cf"},{"ingredient":"Elk Penis","attribute":"Veiny","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"9ac6cdbb-f53d-457c-b85e-08c3309f68c4"},{"ingredient":"Cotton Candy","attribute":"Undulating","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"65e907fb-c0e2-4dfa-b431-22980fc1cda2"},{"ingredient":"Lutefisk","attribute":"Rotten","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d84ad1aa-7970-461f-87a2-6fc799447e55"},{"ingredient":"Wasabi","attribute":"With 2.3 Million Scoville Units","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"1375e3ac-b020-4c65-bfac-d9bd342b3bed"},{"ingredient":"Broken Glass","attribute":"Radioactive","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"2c982f31-61ac-49b0-9058-f1f909c45fea"},{"ingredient":"Seal Eyes","attribute":"Baby","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d9f8ded4-4240-4398-8755-46240fe4fc0c"},{"ingredient":"Grandma's Ashes","attribute":"Burnt","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"e80ea500-3d91-4044-a859-c431df6b7ab3"},{"ingredient":"Anchovies","attribute":"Hairy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"7c008cb2-46e6-483b-bcaa-e7f542f60b81"},{"ingredient":"Donald Trump's Diarrhea","attribute":"Red","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"1b5ac18d-5ed6-4d8d-8f7d-cb9fd3d18aaa"},{"ingredient":"Bernie Sanders's Diarrhea","attribute":"Left-Leaning","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ded1e1ea-06da-4a9d-8e2a-784996ef5bea"},{"ingredient":"Graphite","attribute":"Powdered","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"6fb3bd05-d8ff-4d5f-b62e-dbed8d19490f"},{"ingredient":"A Used Condom","attribute":"That's Been Lying on Hot Blacktop For 5 Weeks","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"a98cfa2c-4a20-4e9b-a000-451dfd32eb9c"},{"ingredient":"Water","attribute":"Soaking Wet","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"1cf07f04-0109-4e6f-8893-f215f43f2bdc"},{"ingredient":"Onions","attribute":"Caramelized","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"e4a5980a-87db-4c34-8730-ec8d148a582e"},{"ingredient":"Avocado","attribute":"Toasted","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"b4c9bf1b-7020-4650-a70e-589441339e30"},{"ingredient":"Celery","attribute":"Bitter","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"a77896ff-8aff-4567-840e-898491fb000c"},{"ingredient":"The Literal Blood of Jesus","attribute":"Full of Holes","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"625512e8-c88f-47fa-9319-bddd091f1cf5"},{"ingredient":"Dog Saliva","attribute":"Super Clean","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"1e8e7c4c-3c5f-41f0-bb44-45ea4aad32ff"},{"ingredient":"Big, Plump Crickets","attribute":"Chitinous","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"e72bb300-7e45-4f06-a57a-97c25d314ab5"},{"ingredient":"Tapeworm Eggs","attribute":"Regurgitated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"35af7c21-9f6f-44cf-ad9f-a901726c16f3"},{"ingredient":"Slurpee™","attribute":"Multi-Flavored","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4052f302-d098-437e-842c-4055a3a76a55"},{"ingredient":"Army Soldiers","attribute":"Fully Sentient","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"67049204-bfe7-4af7-a47a-898d3cbb8d44"},{"ingredient":"Grapes","attribute":"Unpeeled","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"5cd6d676-72b3-4fee-9159-a32fc7c05cd6"},{"ingredient":"A Prom Punch Bowl","attribute":"Spiked","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"bf848528-eb03-467a-b272-2210f9b833cb"},{"ingredient":"Stop & Shop™ Sushi","attribute":"One Week Old","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"651106d1-d70c-4bad-8427-c448829b84bc"},{"ingredient":"Human Flesh","attribute":"Seared","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"98fadeea-745a-4bcb-9deb-811c53f3c576"},{"ingredient":"Chicken Eggs","attribute":"Medium Well","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"79165594-c433-4629-8992-02a700cd433e"},{"ingredient":"Ox Cheeks","attribute":"Braised","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4d659b43-c491-4387-a48c-59aed281b1c0"},{"ingredient":"An Edible Replica of The Declaration of Independence","attribute":"Patriotic","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"5ddd8d89-0bd6-47c1-b2cd-4f334f1eb7e6"},{"ingredient":"Bamboo Skewers","attribute":"Charred","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"3970e20c-0ac3-495e-8b7b-76a7a0d335a9"},{"ingredient":"Kiwi","attribute":"Rare","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d0444b26-187b-4b26-aed6-77ab29df5998"},{"ingredient":"Banana","attribute":"Non-GMO","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"dbd25297-8ea8-439e-9fea-1c1b28fd5053"},{"ingredient":"Leaves","attribute":"Dry","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"451fb346-1a2f-43b6-b921-16233b213e05"},{"ingredient":"Bellybutton Lint","attribute":"Fluffy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f3430080-2d74-4fbc-bf40-3e830b16a66f"},{"ingredient":"Heroin","attribute":"From a Syringe 7 Other People Just Shared","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"7ce92bd9-078e-49ac-a025-fbfa4c6d2083"},{"ingredient":"Broccoli Rabe","attribute":"Fiberous","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4132217d-e52e-4a41-9d83-e91edfc671ba"},{"ingredient":"Potato Skins","attribute":"That was Buried For a Year","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"6d89f25a-85e2-4093-b1cc-554f3cac921d"},{"ingredient":"Cannabis ","attribute":"Sticky-Icky-Icky","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"a0d0aa2e-4931-4d37-8b2a-9c97c6ac7ed1"},{"ingredient":"A Tiny MAGA Hat","attribute":"Starched","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"dedc37de-6cb8-41a0-b4c9-67fab98d8779"},{"ingredient":"Poutine","attribute":"Canadian","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"9b20c7a4-bd00-421a-ac70-f8e5dbb17c48"},{"ingredient":"Salt & Pepper","attribute":"Served by Salt N' Peppa™","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"e8ad000e-d731-4170-b7ec-78940b70ff88"},{"ingredient":"Parsley","attribute":"Decorative","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"090d90d4-8734-4055-8b54-535adab85def"},{"ingredient":"System of a Down's Worst Album","attribute":"Mysterious","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"fba45c24-5cfd-4747-b651-ab62d240725b"},{"ingredient":"Dihydrogen Monoxide","attribute":"Deadly","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d055f929-1413-49c0-95b3-8512057509fc"},{"ingredient":"The Cats, The Dogs, The Pets of The People Who Live There","attribute":"Fictional","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"802cb599-20f0-4d43-932c-c73baf16128b"},{"ingredient":"Cheez-Its™","attribute":"Addictive","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"0943b410-9d49-46ff-af96-25ad0aeadfa1"},{"ingredient":"Mini Marshmallows","attribute":"Toasted","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d69c7b2b-7b4e-45fe-aa74-4165eac22cb4"},{"ingredient":"Fetus","attribute":"Aborted","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"7066d066-5be1-43ea-8a10-c6dbcb5a595d"},{"ingredient":"Peas","attribute":"Canned","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"cd3b7776-d7cb-42e8-a39c-8525a589fcd1"},{"ingredient":"Everything","attribute":"On The Cob","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"5f8bcf21-e85d-40f6-95d2-781d4a12c40d"},{"ingredient":"This Weeks Underwear","attribute":"Saturated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"33671bac-8386-417c-8ceb-35f67dc18f62"},{"ingredient":"Dirt","attribute":"Ground","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4e2eb0f9-53e2-4468-9eaa-377f933fc7dd"},{"ingredient":"Phlegm","attribute":"Bubbly","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"88ad3f30-8790-42a8-bd7a-a3eda12ac965"},{"ingredient":"Ferret Skin","attribute":"Leathery","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"729a2845-063f-424e-9f0b-1d3ad1b34016"},{"ingredient":"Arnold Swarzeneggar's Sweat","attribute":"Invigorating","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4b6f21aa-b07a-4deb-b1be-b0c5501ee7ea"},{"ingredient":"Gold Flakes","attribute":"Youth-Restoring","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"7eb58af8-9ffb-43be-b46e-36319c9cd3f8"},{"ingredient":"Socks","attribute":"Sweaty","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"200140f6-94a8-4f3e-93e3-28bfd38001bf"},{"ingredient":"Neurons","attribute":"Rapidly Communicating","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f18c7d27-8147-4d2d-a12f-75be26f83582"},{"ingredient":"A Random Illogical Non-Repeating Number","attribute":"In Alphabetical attributeOrder","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"e957f45d-f1e1-44ab-846d-0b8dbf56d863"},{"ingredient":"Monster Blood","attribute":"Incrementally Growing","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"6c7a1492-2a77-4077-bc59-1ae500143714"},{"ingredient":"That Dog That Became a Venereal Disease","attribute":"Single-Celled","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"a3f61eda-89e2-457e-9b30-5c68118ad04b"},{"ingredient":"Mysterious Liquid","attribute":"Liquified","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"322ed8c9-690b-4e98-98d8-fbf82cd3d9e1"},{"ingredient":"Bits of Chewed-up Cuticle Skin","attribute":"Anxiety-Inducing","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"35f68bcf-d25c-42e3-9e60-8e0fc6435753"},{"ingredient":"Surströmming","attribute":"Boneless","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"c635848d-4367-491b-9a93-c924c94dd63b"}]}`),tT=JSON.parse(`{"drinks":[{"ingredient":"Milk and Cereal","attribute":"Sour","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"b87798b6-c2d8-4e25-a7e4-4c3757d2b9aa"},{"ingredient":"Nautical Themed Craft Beer","attribute":"Pretentious","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ff942e5f-995d-4a0a-8b9c-22a6de4fe90d"},{"ingredient":"Steamed Carrots","attribute":"Extremely Firm","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"c07e72b3-95cf-41b3-8e25-fb2a25594ee0"},{"ingredient":"Whole Milk","attribute":"Expired","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"aaf1f19f-3731-4592-8fad-3f769c092d7d"},{"ingredient":"Baking Soda","attribute":"Basic","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"3a4aead2-03f3-43c6-80da-a0a2a3be3050"}],"sides":[{"ingredient":"Black Licorice","attribute":"Licorice-Flavored","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"cc2f7b73-5306-44dc-a5ee-969d6c5c956a"},{"ingredient":"Thrice Used Frying Grease","attribute":"From A KFC™ Dumpster","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"3ed42567-f9d3-4880-9e2a-599620f919a8"},{"ingredient":"Kale From an Old Salad Bar","attribute":"Fuzzy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"5c6d9ef8-b1d9-4463-9ebd-458727b87ab6"},{"ingredient":"Seasoned Curly Fries","attribute":"Small","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"b98ce291-b50f-47dc-b729-f9b3569173c3"}],"topped":[{"ingredient":"Gravy","attribute":"Oily","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"5745f92b-22c6-4dd7-9a62-c905dadd5143"},{"ingredient":"Clam Sauce","attribute":"Briney","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"25435b80-2e73-4ad5-8593-056ab0cc912e"},{"ingredient":"Toenail Parmesan Cheese","attribute":"Grated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"a09ee706-30d8-4a33-80ca-e736d59c84aa"},{"ingredient":"Whipped Cream","attribute":"Consisting of 99% Air","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"62b044a5-4da6-4451-8136-0b20d1d2a101"},{"ingredient":"Cream Cheese","attribute":"Melted","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d478810c-cd6c-4ffd-b29a-fdac56e18c9a"}],"stuffed":[{"ingredient":"Cheap Gyro Meat","attribute":"Freezer-Burned","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"eb0ff4a6-50c1-43d4-8187-366489334171"},{"ingredient":"Baked Beans","attribute":"Undercooked","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f9d8a9f1-6cc5-4421-b4ea-324e8be24a43"},{"ingredient":"Albino Alligator Meat","attribute":"Lucky","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"8939cfc3-3ae9-4e4d-b4c7-0569b210860d"},{"ingredient":"Dragon Meat","attribute":"Mythical","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"98f925c1-04e3-436f-a6dc-21a6e467c889"},{"ingredient":"Green Beans","attribute":"That Inadvertedly Caused a War Crime","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"c665cd33-e5f2-4058-981c-2bcdc4b82346"},{"ingredient":"All-White Meat Chicken Breast","attribute":"Extra Well Done","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"101d9357-5526-4941-8124-e3e78a53d26c"},{"ingredient":"Breakfast sausages","attribute":"Drowned in Maple Syrup","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"efdd61fd-3088-4562-aca2-f0496c11ac35"},{"ingredient":"Mixed Veggies","attribute":"From the Clearence Section","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"bf75768f-df3c-456a-a8d5-7bafc8d387ab"}],"extras":[{"ingredient":"Narwhal Bacon","attribute":"Blubbery","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"754d3417-fb30-4e5b-a6c0-70f1a7a74238"},{"ingredient":"Grill Scrapings","attribute":"Coagulated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"7853b1e1-2503-41ed-8074-6baa2f9a0b11"},{"ingredient":"The Last TMNT Pudding Pie","attribute":"Moldy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"db8fcb0f-280f-4c1c-a639-e2de341f6e97"},{"ingredient":"One of Everything on The Taco Bell™ Menu","attribute":"Americanized","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"c11e0885-a953-4f8e-a731-f9c190ce1794"},{"ingredient":"Chicken Head","attribute":"Shrieking","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"3ec75da0-fdd6-4507-b2aa-58a02184317e"},{"ingredient":"Baby Teeth From Grandma's House","attribute":"Cursed","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"6e57b524-7970-422b-b39d-caab089bd33b"},{"ingredient":"Gherkins","attribute":"Bleached","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"b294077d-0a37-47ea-a81e-3b942e3ec784"},{"ingredient":"Quail Eggs","attribute":"Hatching","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f5b3132d-a42b-46cd-a732-51be72851bb8"},{"ingredient":"Weevils","attribute":"Swarming","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"45b9a390-a56d-453c-8d2e-9aa72a0c9135"},{"ingredient":"A Hair Blob From The Shower Drain","attribute":"Mutated","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d0b692d1-924c-48c6-a02e-115ec2ea8097"},{"ingredient":"Saw Dust","attribute":"Infested","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ee59ee10-7182-4c8e-a4b1-6d8870e543c3"},{"ingredient":"Plastic Bits","attribute":"Fried","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"98246f68-c142-4873-905f-efb0d94447d3"},{"ingredient":"Jellyfish","attribute":"Gurgling","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"9d47ffee-ddc5-4353-8868-330faad90a89"},{"ingredient":"Urine Crystals","attribute":"From Concentrate","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"00ef6009-03f2-4556-b8a0-97ce1781b39b"},{"ingredient":"An Eighth of Stems and Seeds","attribute":"Pickled","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"1841af48-2fd3-473e-ab04-0ef320326f6e"},{"ingredient":"Candy Corn","attribute":"Recycled","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"cee4a957-7815-480a-b36d-b5fdfd566f4a"},{"ingredient":"Foreskins","attribute":"Stretchy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"8c7bacad-937a-4628-8af0-333ee39f9b1b"},{"ingredient":"Ambergris","attribute":"Petrified","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"81ebd384-df3f-46d1-aeaa-7c776a0e15cc"},{"ingredient":"Fugu","attribute":"Obnoxiously Salty","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"cc93ce36-dcbb-4668-b4b5-0d09205d0cff"},{"ingredient":"Chicken Feet","attribute":"Pitter-Pattering","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"8d3fb3c9-0e20-4a17-b416-922608a24b8b"},{"ingredient":"Turkey Neck","attribute":"Dancing","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f23d2cc5-d850-4ef2-bfee-8053a90a370f"},{"ingredient":"96.9% Isopropyl Alcohol","attribute":"Fuming","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"72dce563-86c9-4869-a121-3f0653176b6f"},{"ingredient":"Bone Marrow","attribute":"Porous","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"2bafa336-c6de-4633-aaaa-343752077f09"},{"ingredient":"Placenta","attribute":"Gurgling","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"26c8f9d8-cca7-43cd-b7d9-465fbba1359a"},{"ingredient":"Braunschweiger","attribute":"Mealy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"5007197c-7b42-47c6-8ef2-08a55b0690a8"},{"ingredient":"SPIDERS.","attribute":"Skittering","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"174420c8-c494-4007-8118-30ed1ac18efa"},{"ingredient":"An Entire Denny's Grand Slam™","attribute":"Quivering","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"632e9123-dd26-4798-8bb1-6a4d36ecabe3"},{"ingredient":"Mealworm-Infested Granola","attribute":"Cursed With Eternal Life","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"84d32f9e-4ec6-4109-896c-b3576a3e6650"},{"ingredient":"Honeydew (The Aphid Kind)","attribute":"Obnoxiously Sweet","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"c2aaa0e6-aa03-41b2-b877-e935b3f5e636"},{"ingredient":"Joe Biden's Diarrhea","attribute":"Blue","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4eb8ea1c-50f8-4cb7-a681-535bd9a929cf"},{"ingredient":"A Ground-Up Bic™ Pen","attribute":"Gnawed-on","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"a0e9dc83-73b5-4488-a24b-88712f3ef85b"},{"ingredient":"Vegimite™","attribute":"Anti-American","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"6dac49e0-d669-4331-9c44-79e92fa3fcd2"},{"ingredient":"Bits of a Badly Mildewed Ebony Porn Mag","attribute":"Musty-Smelling","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"56b70caa-75f9-4dd7-9c22-7c3c15c51913"},{"ingredient":"Cabbage","attribute":"Steamed","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"dbbedbe0-eba2-4941-a071-f35eceefbb75"},{"ingredient":"Broccoli","attribute":"Cheesy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"26c2a53b-4c4b-4282-a4fc-15e187203d2c"},{"ingredient":"Eggplant","attribute":"Pan Fried","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d5486a54-b9d4-4eb7-82b7-d3fba5cc4f08"},{"ingredient":"Uhhh...","attribute":"Offensively Bland","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"04be9d9b-bfe2-4099-8f28-655e4e224988"},{"ingredient":"The Literal Flesh of Jesus","attribute":"Aged","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"69339435-6c33-4f74-8075-2674648b00d9"},{"ingredient":"Piece of String","attribute":"Really Long","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"94749f33-033d-4228-8d93-f76198a38983"},{"ingredient":"Skittles","attribute":"That Have Been Under a Couch Cushion for 5 Years","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"781eb379-c6ee-46f8-91f3-5df33bc09598"},{"ingredient":"Construction Paper","attribute":"Of Various Colors","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"c42af547-a7b4-4bdb-87a3-4799738a33b1"},{"ingredient":"A Rabbit","attribute":"That is of Age and Capable of Consent","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"0216492c-7474-418e-92b2-bbde98443a91"},{"ingredient":"Your Uncle's Backhanded Compliments","attribute":"Bearded","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"6561c9f4-eab0-434b-b458-5aad84b82d71"},{"ingredient":"Fully Engorged Ticks","attribute":"Bursting","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"dee95fbe-69b2-4667-bb07-253be46f7a11"},{"ingredient":"Tiny Spherical Magnets","attribute":"A Handful of","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"e274999f-0d62-41cf-af72-f9543c5ef217"},{"ingredient":"Face Skin","attribute":"That Fell Off The Back of A Truck","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"b3186b65-341e-4977-a841-11bf2d0a850c"},{"ingredient":"Just a Sprinkle of Cocaine","attribute":"Medium Done","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4891fd1f-7aee-41c4-9ce7-71b42df78520"},{"ingredient":"Giant Hogweed","attribute":"Itch-Inducing","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"59cd460b-5b83-4f55-a88f-5e602a74a084"},{"ingredient":"Imitation Vanilla","attribute":"Cheap","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d01da39c-de1b-485a-b20e-4d2bcef6eac3"},{"ingredient":"The Antidote","attribute":"Slightly Toxic","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"737506a3-9cd2-4cba-9c5a-3f203eae4cbe"},{"ingredient":"Old Mop Bucket Water","attribute":"Dubiously Smelling","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"6203b1f4-4431-471c-b773-57de3222fc99"},{"ingredient":"Yesterday's Veal Stock","attribute":"Evil","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f5cca618-9923-474f-bf01-4fbdd133016e"},{"ingredient":"Venus Flytrap","attribute":"Man-Eating","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ff9d677a-e4fa-44fd-87b5-968003930c1d"},{"ingredient":"Lichen","attribute":"From Deep Inside of a Well","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"ae06e1e1-601d-4c72-8089-c4df687490b7"},{"ingredient":"Bong Water","attribute":"Resinous","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"3a8cb5ee-d43f-4e32-b4e0-d5b3d0bb7d2b"},{"ingredient":"Roots N' Tubers","attribute":"Dirty","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"de214a33-2fa8-4893-af4b-687c541677a2"},{"ingredient":"Bean Sprouts","attribute":"With Lots of Potential","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"b21a0734-24ad-4f68-a437-87a29f302b8c"},{"ingredient":"Bird Seed Mix","attribute":"Edible","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f3f32a50-248a-4f04-a997-cab6a832d860"},{"ingredient":"Sandy Leeks","attribute":"Unwashed","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"b74ced0c-b129-4f92-a8f8-90935b6f1c9a"},{"ingredient":"A Shot of Jack Daniel's™","attribute":"In a Trailer Park Boys™ Whiskey Glass","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"a81c0bc8-7e50-4bd8-93e4-28259d19695e"},{"ingredient":"Bacon","attribute":"Full of Trans Fats","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"51bbf74c-2302-433c-9037-9a7db425a52d"},{"ingredient":"Sewage","attribute":"Full of Splinters","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"fe68a723-ed37-4c7c-9fc1-5804b17c0e2c"},{"ingredient":"Cilantro","attribute":"Soapy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"ec4283dc-ffb9-4ae0-b362-97fa933d5410"},{"ingredient":"Lead Paint","attribute":"Surprisingly Sweet","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"8766a2e8-0955-45f1-be79-bd28f3146f32"},{"ingredient":"Toast","attribute":"Soggy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"547997fc-414d-4df0-8203-a28eeeaf51b3"},{"ingredient":"Hellman's™ Mayonnaise","attribute":"Just Okay","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"a28dc749-5778-40c8-82e5-912d7b56d0d8"},{"ingredient":"Miracle Whip™","attribute":"But It's Not What You Expect","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"7ac92c50-c124-4016-80ac-ccb0780eb878"},{"ingredient":"Browny Bites","attribute":"Cannabis-Infused","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"55967065-c317-4fa7-9a0f-e551cc3fed3a"},{"ingredient":"Cucumber","attribute":"Nearly Expired","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"c272a90a-3d42-43a1-b66d-f936ff3dc64d"},{"ingredient":"Corn","attribute":"Creamed","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"197b8295-50ea-433c-a202-72ab27f6ee5b"},{"ingredient":"Motor Oil","attribute":"From a Driveway Puddle","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"414cedcd-21ea-4ab0-9788-de3f0e662112"},{"ingredient":"Monkey's Paw","attribute":"Imbued with Dark Magic","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"56ac5ef5-0d07-4753-8ae2-82f5ab67014e"},{"ingredient":"Ghoul Flesh","attribute":"Feral","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"24253a09-d7fc-4988-ae07-ab64a5f71fa0"},{"ingredient":"Egg Whites","attribute":"With 200% Your Daily Recommended Calcium","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"3456ec0b-8708-4251-ae71-1f7398c65391"},{"ingredient":"Napkin","attribute":"Melt-In-Your-Mouth","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"06c47242-6bd8-4f9e-bf78-759d210fa4eb"},{"ingredient":"Adrenochrome","attribute":"With a Meth-Like Effect","attributeOrder":{"ingredient":0,"attribute":1},"uuid":"1103d92c-9649-4502-abbd-db9fb122df6d"},{"ingredient":"Corn Flakes™","attribute":"Frosted","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"22d6d5cd-c353-48a2-a165-d01e7e764053"},{"ingredient":"Boogers","attribute":"Chewy","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d63bd797-8583-4d17-b607-fea4137f71e7"},{"ingredient":"Mushrooms","attribute":"Eco-Friendly","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"b34061c7-ac10-4f13-b234-60bbe565c930"},{"ingredient":"Raw Zombie Liver","attribute":"Cooked","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"4e70ae69-6ce7-452d-ab05-98ec526b29bb"},{"ingredient":"Horsehair Worms","attribute":"Parasitic","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"f584fe20-8e5f-4de7-9002-2d0925844e04"},{"ingredient":"Gunpowder","attribute":"Explosive","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"dde28eb5-4326-4037-99a3-cc597a76c636"},{"ingredient":"Kyle Gass's Rock Star Semen","attribute":"Divine","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"383261a6-9add-4119-bec9-2c4c0617b688"},{"ingredient":"Terracotta","attribute":"Mesmerizing","attributeOrder":{"attribute":0,"ingredient":0},"uuid":"d76faaa8-7335-40db-b668-0b7a63e6a197"}]}`);class nT{constructor(e,t,n={ingredient:0,attribute:0},i){this.ingredient=e,this.attribute=t,this.attributeOrder=n,this.uuid=i,this.doRotate=!1}get order(){return this.attributeOrder[this.getTopAttribute()]}getTopAttribute(){return this.doRotate?"attribute":"ingredient"}}class rT{constructor(e,t){this.descriptor=e,this.uuid=t,this._doRotate=!1}set doRotate(e){}get doRotate(){return this._doRotate}get order(){return 0}}class iT{static print(e,t){const n=t==="base_meal"?rT.prototype:nT.prototype;return Object.setPrototypeOf(e,n)}}const sT={Card_1:eT,Card_2:tT,base_meal:Z0};class Ma{constructor(e){this.group=e,this.cards=sT[e]}getIngredient(e){const t=Ti.randomInclusive(0,this.cards[e].length-1),n=this.cards[e].splice(t,1)[0],i=iT.print(n,this.group);return i.category=e,Promise.resolve(i)}}const oT=async()=>{const r=new Na(new Ma("base_meal"));return[(await r.getIngredients())[0],(await r.getIngredients())[0]]},aT=async()=>{const r=new Na(new Ma("Card_1")),e=new Na(new Ma("Card_2")),t=await Promise.all([r.getIngredients(),e.getIngredients()]),n=await Promise.all([r.getIngredients(),e.getIngredients()]);return[t,n]},uT=async r=>{const e={firstIng:r.mealDescriptions[0].uuid,secondIng:r.mealDescriptions[1].uuid,meal:r.basemeal.uuid,thirdIng:r.sides[0].uuid,fourthIng:r.sides[1].uuid,firstToken:r.firstContextToken,secondToken:r.secondContextToken,rotates:[r.mealDescriptions[0].doRotate,!1,r.sides[0].doRotate,!1]};Kg(Fu(Y0,"stats"),e),typeof gtag=="function"&&gtag("event","meal_choice",{event:"meal_choice","meal-id":"meal1","meal-name":meals.meal1.mealDescriptions[0].ingredient})};function cT(){const r=new Audio("https://cdn.jsdelivr.net/gh/amorphous-arts/ratherizer/assets/audio/fart.mp3");document.body.appendChild(r),document.addEventListener("mouseover",e=>{e.target.classList.contains("ingredient-container")&&(r.volume=.15,r.play())}),document.addEventListener("click",e=>{e.target.classList.contains("btn")&&(r.volume=1,r.play())})}const ut=document.querySelector(".game-container");let dn={meal1:void 0,meal2:void 0};const lT=async()=>{const[r,e]=await Promise.all([oT(),aT()]);dn.meal1=new sl(e[0][0],r[0],e[0][1]),dn.meal2=new sl(e[1][0],r[1],e[1][1]),il("meal1",ut,dn.meal1),ut.insertAdjacentHTML("beforeend",ra("Choose Meal 1","meal-1-trigger","meal1")),ut.insertAdjacentHTML("beforeend",Bm),il("meal2",ut,dn.meal2),ut.insertAdjacentHTML("beforeend",ra("Choose Meal 2","meal-2-trigger","meal2"))},hT=()=>{document.querySelectorAll(".game-container .btn").forEach(r=>{r.addEventListener("click",async()=>{const e=r.getAttribute("data-id");if(!dn[e])return console.error("Meal not found");for(let n of[...ut.children])n.id!==e&&(n.classList.add("fade-out"),setTimeout(()=>n.remove(),1e3));uT(dn[e]),ut.insertAdjacentHTML("beforeend",ra("Play Again !","","","","play-again-btn"));const t=document.createElement("a");t.text="Share",t.href="#",t.classList.add("btn"),t.addEventListener("click",n=>{n.preventDefault(),dT(dn[e])}),ut.appendChild(t)})})};function dT(r){const e={title:"Ratherizer",text:`I'd rather eat ${r.mealDescriptions[1].ingredient} ${r.firstContextToken} ${r.basemeal.descriptor}. What would you rather eat?`,url:location.href};typeof navigator.canShare!="function"||!navigator.canShare(e)?(navigator.clipboard.writeText(`${e.text} ${e.url}`),alert("Copied result to clipboard")):navigator.share(e)}function fT(){cT()}(async function(){ut&&(console.time("Starting"),fT(),await lT(),hT(),console.timeEnd("Starting"))})();
