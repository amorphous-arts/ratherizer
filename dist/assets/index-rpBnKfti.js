(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Wu=()=>{document.querySelectorAll(".ingredient-container").forEach(r=>{r.addEventListener("click",()=>{Xu(r)})})},Xu=r=>{const t=!!r.classList.contains("flipped");t?r.classList.remove("flipped"):r.classList.add("flipped");const e=r.querySelector(".front"),n=r.querySelector(".back");e.style.transform=`rotateX(${t?"0":"-180"}deg)`,n.style.transform=`rotateX(${t?"180":"0"}deg)`},Yu=r=>`
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
    `,Fi=(r,t=!1)=>`<div class="attr-data ${t?"rotate":""}">
                    <div class="heading card-item">
                        <h3 class="text-2xl text-white">Attribute</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="text-lg text-white">${r}</p>       
                    </div>
                </div>`,Ui=(r,t=!1)=>`<div class="ing-data ${t?"rotate":""}">
                    <div class="heading card-item">
                        <h3 class="">Ingredient</h3>       
                    </div>
                    <div class="content card-item">
                        <p class="text-lg text-white">${r}</p>       
                    </div>
                </div>`,Bi=(r,t,e,n)=>`
        <div class="card ing-card ${e}">
            ${n?Fi(t)+Ui(r,!0):Ui(r)+Fi(t,!0)}
        </div>
    `,Vn=(r,t)=>`<div class="ingredient-container">
            ${Bi(r,t,"front",!1)} 
            ${Bi(r,t,"back",!0)}
        </div>
        `,qi=r=>`
        <div class="context-token">
            <span>${r}</span>
        </div>
    `,$i=(r,t,e={})=>{const n=document.createElement("div");n.className="meal-container",n.id=r,n.insertAdjacentHTML("afterbegin",`
            ${Vn("test","test")}
            ${Vn("test","test")}
            ${qi("stuffed")}
            ${Yu(e.name)}
            ${qi("with")}
            ${Vn("test","test")}
            ${Vn("test","test")}
        `),t.append(n)},Hr=(r,t,e,n="javascript:void(0)")=>`
        <a href="${n}" type="button" class="btn" id="${t}" data-id="${e}">${r}</button>
    `,Ju=`
    <div class="seperator-container">
        <div class="line"></div>
        <div class="text">
            <span>OR</span>
        </div>
    </div>
`,Zu=()=>'<div class="meal-analytics"><p> This meal was also chosen by <strong>63%</strong> of users.</p></div>',tl=()=>{};var ji={};/**
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
 */const Xo=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},el=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],u=r[e++],c=r[e++],d=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[n++]=String.fromCharCode(55296+(d>>10)),t[n++]=String.fromCharCode(56320+(d&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],u=i+1<r.length,c=u?r[i+1]:0,d=i+2<r.length,f=d?r[i+2]:0,_=o>>2,A=(o&3)<<4|c>>4;let C=(c&15)<<2|f>>6,P=f&63;d||(P=64,u||(C=64)),n.push(e[_],e[A],e[C],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(Xo(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):el(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],c=i<r.length?e[r.charAt(i)]:0;++i;const f=i<r.length?e[r.charAt(i)]:64;++i;const A=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||c==null||f==null||A==null)throw new nl;const C=o<<2|c>>4;if(n.push(C),f!==64){const P=c<<4&240|f>>2;if(n.push(P),A!==64){const N=f<<6&192|A;n.push(N)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class nl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rl=function(r){const t=Xo(r);return Yo.encodeByteArray(t,!0)},$n=function(r){return rl(r).replace(/\./g,"")},sl=function(r){try{return Yo.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ol=()=>il().__FIREBASE_DEFAULTS__,al=()=>{if(typeof process>"u"||typeof ji>"u")return;const r=ji.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ul=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&sl(r[1]);return t&&JSON.parse(t)},ms=()=>{try{return tl()||ol()||al()||ul()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ll=r=>{var t,e;return(e=(t=ms())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},cl=r=>{const t=ll(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Jo=()=>{var r;return(r=ms())===null||r===void 0?void 0:r.config};/**
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
 */class hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function dl(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[$n(JSON.stringify(e)),$n(JSON.stringify(u)),""].join(".")}/**
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
 */function fl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pl(){var r;const t=(r=ms())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ml(){return!pl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gl(){try{return typeof indexedDB=="object"}catch{return!1}}function _l(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const yl="FirebaseError";class Re extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=yl,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?El(o,n):"Error",c=`${this.serviceName}: ${u} (${i}).`;return new Re(i,c,n)}}function El(r,t){return r.replace(vl,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const vl=/\{\$([^}]+)}/g;function jn(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],u=t[i];if(zi(o)&&zi(u)){if(!jn(o,u))return!1}else if(o!==u)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function zi(r){return r!==null&&typeof r=="object"}/**
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
 */function Tl(r){return r&&r._delegate?r._delegate:r}class tn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const te="[DEFAULT]";/**
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
 */class Il{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new hl;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Al(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=te){return this.instances.has(t)}getOptions(t=te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);n===c&&u.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:wl(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=te){return this.component?this.component.multipleInstances?t:te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wl(r){return r===te?void 0:r}function Al(r){return r.instantiationMode==="EAGER"}/**
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
 */class Rl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Il(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(U||(U={}));const Cl={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Sl=U.INFO,Pl={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},bl=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Pl[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ta{constructor(t){this.name=t,this._logLevel=Sl,this._logHandler=bl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Vl=(r,t)=>t.some(e=>r instanceof e);let Hi,Ki;function Dl(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nl(){return Ki||(Ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ea=new WeakMap,Kr=new WeakMap,na=new WeakMap,Mr=new WeakMap,gs=new WeakMap;function kl(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",u)},o=()=>{e(qt(r.result)),i()},u=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&ea.set(e,r)}).catch(()=>{}),gs.set(t,r),t}function xl(r){if(Kr.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",u),r.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",u),r.addEventListener("abort",u)});Kr.set(r,t)}let Gr={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Kr.get(r);if(t==="objectStoreNames")return r.objectStoreNames||na.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return qt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Ol(r){Gr=r(Gr)}function Ml(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Lr(this),t,...e);return na.set(n,t.sort?t.sort():[t]),qt(n)}:Nl().includes(r)?function(...t){return r.apply(Lr(this),t),qt(ea.get(this))}:function(...t){return qt(r.apply(Lr(this),t))}}function Ll(r){return typeof r=="function"?Ml(r):(r instanceof IDBTransaction&&xl(r),Vl(r,Dl())?new Proxy(r,Gr):r)}function qt(r){if(r instanceof IDBRequest)return kl(r);if(Mr.has(r))return Mr.get(r);const t=Ll(r);return t!==r&&(Mr.set(r,t),gs.set(t,r)),t}const Lr=r=>gs.get(r);function Fl(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const u=indexedDB.open(r,t),c=qt(u);return n&&u.addEventListener("upgradeneeded",d=>{n(qt(u.result),d.oldVersion,d.newVersion,qt(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Ul=["get","getKey","getAll","getAllKeys","count"],Bl=["put","add","delete","clear"],Fr=new Map;function Gi(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Fr.get(t))return Fr.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=Bl.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ul.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,i?"readwrite":"readonly");let f=d.store;return n&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return Fr.set(t,o),o}Ol(r=>({...r,get:(t,e,n)=>Gi(t,e)||r.get(t,e,n),has:(t,e)=>!!Gi(t,e)||r.has(t,e)}));/**
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
 */class ql{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if($l(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function $l(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qr="@firebase/app",Qi="0.11.2";/**
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
 */const Nt=new ta("@firebase/app"),jl="@firebase/app-compat",zl="@firebase/analytics-compat",Hl="@firebase/analytics",Kl="@firebase/app-check-compat",Gl="@firebase/app-check",Ql="@firebase/auth",Wl="@firebase/auth-compat",Xl="@firebase/database",Yl="@firebase/data-connect",Jl="@firebase/database-compat",Zl="@firebase/functions",tc="@firebase/functions-compat",ec="@firebase/installations",nc="@firebase/installations-compat",rc="@firebase/messaging",sc="@firebase/messaging-compat",ic="@firebase/performance",oc="@firebase/performance-compat",ac="@firebase/remote-config",uc="@firebase/remote-config-compat",lc="@firebase/storage",cc="@firebase/storage-compat",hc="@firebase/firestore",dc="@firebase/vertexai",fc="@firebase/firestore-compat",pc="firebase",mc="11.4.0";/**
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
 */const Wr="[DEFAULT]",gc={[Qr]:"fire-core",[jl]:"fire-core-compat",[Hl]:"fire-analytics",[zl]:"fire-analytics-compat",[Gl]:"fire-app-check",[Kl]:"fire-app-check-compat",[Ql]:"fire-auth",[Wl]:"fire-auth-compat",[Xl]:"fire-rtdb",[Yl]:"fire-data-connect",[Jl]:"fire-rtdb-compat",[Zl]:"fire-fn",[tc]:"fire-fn-compat",[ec]:"fire-iid",[nc]:"fire-iid-compat",[rc]:"fire-fcm",[sc]:"fire-fcm-compat",[ic]:"fire-perf",[oc]:"fire-perf-compat",[ac]:"fire-rc",[uc]:"fire-rc-compat",[lc]:"fire-gcs",[cc]:"fire-gcs-compat",[hc]:"fire-fst",[fc]:"fire-fst-compat",[dc]:"fire-vertex","fire-js":"fire-js",[pc]:"fire-js-all"};/**
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
 */const zn=new Map,_c=new Map,Xr=new Map;function Wi(r,t){try{r.container.addComponent(t)}catch(e){Nt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Hn(r){const t=r.name;if(Xr.has(t))return Nt.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,r);for(const e of zn.values())Wi(e,r);for(const e of _c.values())Wi(e,r);return!0}function yc(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Ec(r){return r==null?!1:r.settings!==void 0}/**
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
 */const vc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new Zo("app","Firebase",vc);/**
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
 */class Tc{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const Ic=mc;function ra(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},t),i=n.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(e||(e=Jo()),!e)throw $t.create("no-options");const o=zn.get(i);if(o){if(jn(e,o.options)&&jn(n,o.config))return o;throw $t.create("duplicate-app",{appName:i})}const u=new Rl(i);for(const d of Xr.values())u.addComponent(d);const c=new Tc(e,n,u);return zn.set(i,c),c}function wc(r=Wr){const t=zn.get(r);if(!t&&r===Wr&&Jo())return ra();if(!t)throw $t.create("no-app",{appName:r});return t}function pe(r,t,e){var n;let i=(n=gc[r])!==null&&n!==void 0?n:r;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}Hn(new tn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Ac="firebase-heartbeat-database",Rc=1,en="firebase-heartbeat-store";let Ur=null;function sa(){return Ur||(Ur=Fl(Ac,Rc,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(en)}catch(e){console.warn(e)}}}}).catch(r=>{throw $t.create("idb-open",{originalErrorMessage:r.message})})),Ur}async function Cc(r){try{const e=(await sa()).transaction(en),n=await e.objectStore(en).get(ia(r));return await e.done,n}catch(t){if(t instanceof Re)Nt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(e.message)}}}async function Xi(r,t){try{const n=(await sa()).transaction(en,"readwrite");await n.objectStore(en).put(t,ia(r)),await n.done}catch(e){if(e instanceof Re)Nt.warn(e.message);else{const n=$t.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(n.message)}}}function ia(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Sc=1024,Pc=30;class bc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dc(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Yi();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Pc){const u=Nc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Nt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yi(),{heartbeatsToSend:n,unsentEntries:i}=Vc(this._heartbeatsCache.heartbeats),o=$n(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Nt.warn(e),""}}}function Yi(){return new Date().toISOString().substring(0,10)}function Vc(r,t=Sc){const e=[];let n=r.slice();for(const i of r){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Ji(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ji(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Dc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gl()?_l().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Cc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ji(r){return $n(JSON.stringify({version:2,heartbeats:r})).length}function Nc(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function kc(r){Hn(new tn("platform-logger",t=>new ql(t),"PRIVATE")),Hn(new tn("heartbeat",t=>new bc(t),"PRIVATE")),pe(Qr,Qi,r),pe(Qr,Qi,"esm2017"),pe("fire-js","")}kc("");var xc="firebase",Oc="11.4.0";/**
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
 */pe(xc,Oc,"app");var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jt,oa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var m=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)m[bt-2]=arguments[bt];return p.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],m=p+(I^g&(E^I))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[1]+3905402710&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[3]+3250441966&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[5]+1200080426&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[7]+4249261313&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[9]+2336552879&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[11]+2304563134&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(I^g&(E^I))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=I+(E^p&(g^E))+y[13]+4254626195&4294967295,I=p+(m<<12&4294967295|m>>>20),m=E+(g^I&(p^g))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=g+(p^E&(I^p))+y[15]+1236535329&4294967295,g=E+(m<<22&4294967295|m>>>10),m=p+(E^I&(g^E))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[6]+3225465664&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[0]+3921069994&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[10]+38016083&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[4]+3889429448&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[14]+3275163606&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[8]+1163531501&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(E^I&(g^E))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=I+(g^E&(p^g))+y[2]+4243563512&4294967295,I=p+(m<<9&4294967295|m>>>23),m=E+(p^g&(I^p))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=g+(I^p&(E^I))+y[12]+2368359562&4294967295,g=E+(m<<20&4294967295|m>>>12),m=p+(g^E^I)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[8]+2272392833&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[14]+4259657740&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[4]+1272893353&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[10]+3200236656&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[0]+3936430074&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[6]+76029189&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(g^E^I)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=I+(p^g^E)+y[12]+3873151461&4294967295,I=p+(m<<11&4294967295|m>>>21),m=E+(I^p^g)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=g+(E^I^p)+y[2]+3299628645&4294967295,g=E+(m<<23&4294967295|m>>>9),m=p+(E^(g|~I))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[7]+1126891415&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[5]+4237533241&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[3]+2399980690&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[1]+2240044497&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[15]+4264355552&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[13]+1309151649&4294967295,g=E+(m<<21&4294967295|m>>>11),m=p+(E^(g|~I))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=I+(g^(p|~E))+y[11]+3174756917&4294967295,I=p+(m<<10&4294967295|m>>>22),m=E+(p^(I|~g))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=g+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=g;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function u(v,p){this.h=p;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(g[E]=I,y=!1)}this.g=g}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(f(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var A=d(0),C=d(1),P=d(16777216);r=u.prototype,r.m=function(){if(M(this))return-D(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(M(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,y="";;){var E=rt(g,p).g;g=Y(g,E.j(p));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,N(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function M(v){return v.h==-1}r.l=function(v){return v=Y(this,v),M(v)?-1:N(v)?0:1};function D(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new u(g,~v.h).add(C)}r.abs=function(){return M(this)?D(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,g[E]=m<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function Y(v,p){return v.add(D(p))}r.j=function(v){if(N(this)||N(v))return A;if(M(this))return M(v)?D(this).j(D(v)):D(D(this).j(v));if(M(v))return D(this.j(D(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,bt=v.i(E)>>>16,Ve=v.i(E)&65535;g[2*y+2*E]+=m*Ve,G(g,2*y+2*E),g[2*y+2*E+1]+=I*Ve,G(g,2*y+2*E+1),g[2*y+2*E+1]+=m*bt,G(g,2*y+2*E+1),g[2*y+2*E+2]+=I*bt,G(g,2*y+2*E+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function G(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function K(v,p){this.g=v,this.h=p}function rt(v,p){if(N(p))throw Error("division by zero");if(N(v))return new K(A,A);if(M(v))return p=rt(D(v),p),new K(D(p.g),D(p.h));if(M(p))return p=rt(v,D(p)),new K(D(p.g),p.h);if(30<v.g.length){if(M(v)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var g=C,y=p;0>=y.l(v);)g=Pt(g),y=Pt(y);var E=it(g,1),I=it(y,1);for(y=it(y,2),g=it(g,2);!N(y);){var m=I.add(y);0>=m.l(v)&&(E=E.add(g),I=m),y=it(y,1),g=it(g,1)}return p=Y(v,E.j(p)),new K(E,p)}for(E=A;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),m=I.j(p);M(m)||0<m.l(v);)g-=y,I=f(g),m=I.j(p);N(I)&&(I=C),E=E.add(I),v=Y(v,m)}return new K(E,v)}r.A=function(v){return rt(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Pt(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function it(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+g)>>>p|v.i(I+g+1)<<32-p:v.i(I+g);return new u(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,oa=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,jt=u}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});var Dn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aa,Ge,ua,Ln,Yr,la,ca,ha;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dn=="object"&&Dn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in l))break t;l=l[T]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,T={next:function(){if(!h&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function C(s,a,l){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,C.apply(null,arguments)}function P(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function N(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,T,w){for(var S=Array(arguments.length-2),z=2;z<arguments.length;z++)S[z-2]=arguments[z];return a.prototype[T].apply(h,S)}}function M(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(d(h)){const T=s.length||0,w=h.length||0;s.length=T+w;for(let S=0;S<w;S++)s[T+S]=h[S]}else s.push(h)}}class Y{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var Pt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function it(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function v(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(l in h)s[l]=h[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){c.setTimeout(()=>{throw s},0)}function m(){var s=dr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class bt{constructor(){this.h=this.g=null}add(a,l){const h=Ve.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Ve=new Y(()=>new pu,s=>s.reset());class pu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Ne=!1,dr=new bt,Fs=()=>{const s=c.Promise.resolve(void 0);De=()=>{s.then(mu)}};var mu=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(l){I(l)}var a=Ve;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ne=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var gu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function ke(s,a){if(lt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Pt){t:{try{rt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:_u[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ke.aa.h.call(this)}}N(ke,lt);var _u={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),yu=0;function Eu(s,a,l,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=T,this.key=++yu,this.da=this.fa=!1}function dn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function fn(s){this.src=s,this.g={},this.h=0}fn.prototype.add=function(s,a,l,h,T){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var S=pr(s,a,h,T);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new Eu(a,this.src,w,!!h,T),a.fa=l,s.push(a)),a};function fr(s,a){var l=a.type;if(l in s.g){var h=s.g[l],T=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(h,T,1),w&&(dn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function pr(s,a,l,h){for(var T=0;T<s.length;++T){var w=s[T];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return T}return-1}var mr="closure_lm_"+(1e6*Math.random()|0),gr={};function Us(s,a,l,h,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Us(s,a[w],l,h,T);return null}return l=$s(l),s&&s[hn]?s.K(a,l,f(h)?!!h.capture:!1,T):vu(s,a,l,!1,h,T)}function vu(s,a,l,h,T,w){if(!a)throw Error("Invalid event type");var S=f(T)?!!T.capture:!!T,z=yr(s);if(z||(s[mr]=z=new fn(s)),l=z.add(a,l,h,S,w),l.proxy)return l;if(h=Tu(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)gu||(T=S),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(qs(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Tu(){function s(l){return a.call(s.src,s.listener,l)}const a=Iu;return s}function Bs(s,a,l,h,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Bs(s,a[w],l,h,T);else h=f(h)?!!h.capture:!!h,l=$s(l),s&&s[hn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=pr(w,l,h,T),-1<l&&(dn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=yr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=pr(a,l,h,T)),(l=-1<s?a[s]:null)&&_r(l))}function _r(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[hn])fr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(qs(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=yr(a))?(fr(l,s),l.h==0&&(l.src=null,a[mr]=null)):dn(s)}}}function qs(s){return s in gr?gr[s]:gr[s]="on"+s}function Iu(s,a){if(s.da)s=!0;else{a=new ke(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&_r(s),s=l.call(h,a)}return s}function yr(s){return s=s[mr],s instanceof fn?s:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function $s(s){return typeof s=="function"?s:(s[Er]||(s[Er]=function(a){return s.handleEvent(a)}),s[Er])}function ct(){xt.call(this),this.i=new fn(this),this.M=this,this.F=null}N(ct,xt),ct.prototype[hn]=!0,ct.prototype.removeEventListener=function(s,a,l,h){Bs(this,s,a,l,h)};function gt(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new lt(a,s);else if(a instanceof lt)a.target=a.target||s;else{var T=a;a=new lt(h,s),y(a,T)}if(T=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];T=pn(S,h,!0,a)&&T}if(S=a.g=s,T=pn(S,h,!0,a)&&T,T=pn(S,h,!1,a)&&T,l)for(w=0;w<l.length;w++)S=a.g=l[w],T=pn(S,h,!1,a)&&T}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)dn(l[h]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},ct.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function pn(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var z=S.listener,ot=S.ha||S.src;S.fa&&fr(s.i,S),T=z.call(ot,h)!==!1&&T}}return T&&!h.defaultPrevented}function js(s,a,l){if(typeof s=="function")l&&(s=C(s,l));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function zs(s){s.g=js(()=>{s.g=null,s.i&&(s.i=!1,zs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class wu extends xt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:zs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(s){xt.call(this),this.h=s,this.g={}}N(xe,xt);var Hs=[];function Ks(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&_r(a)},s),s.g={}}xe.prototype.N=function(){xe.aa.N.call(this),Ks(this)},xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vr=c.JSON.stringify,Au=c.JSON.parse,Ru=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Tr(){}Tr.prototype.h=null;function Gs(s){return s.h||(s.h=s.i())}function Qs(){}var Oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ir(){lt.call(this,"d")}N(Ir,lt);function wr(){lt.call(this,"c")}N(wr,lt);var Xt={},Ws=null;function mn(){return Ws=Ws||new ct}Xt.La="serverreachability";function Xs(s){lt.call(this,Xt.La,s)}N(Xs,lt);function Me(s){const a=mn();gt(a,new Xs(a))}Xt.STAT_EVENT="statevent";function Ys(s,a){lt.call(this,Xt.STAT_EVENT,s),this.stat=a}N(Ys,lt);function _t(s){const a=mn();gt(a,new Ys(a,s))}Xt.Ma="timingevent";function Js(s,a){lt.call(this,Xt.Ma,s),this.size=a}N(Js,lt);function Le(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Fe(){this.g=!0}Fe.prototype.xa=function(){this.g=!1};function Cu(s,a,l,h,T,w){s.info(function(){if(s.g)if(w)for(var S="",z=w.split("&"),ot=0;ot<z.length;ot++){var j=z[ot].split("=");if(1<j.length){var ht=j[0];j=j[1];var dt=ht.split("_");S=2<=dt.length&&dt[1]=="type"?S+(ht+"="+j+"&"):S+(ht+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+l+`
`+S})}function Su(s,a,l,h,T,w,S){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+l+`
`+w+" "+S})}function oe(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+bu(s,l)+(h?" "+h:"")})}function Pu(s,a){s.info(function(){return"TIMEOUT: "+a})}Fe.prototype.info=function(){};function bu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<T.length;S++)T[S]=""}}}}return vr(l)}catch{return a}}var gn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ar;function _n(){}N(_n,Tr),_n.prototype.g=function(){return new XMLHttpRequest},_n.prototype.i=function(){return{}},Ar=new _n;function Ot(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ti}function ti(){this.i=null,this.g="",this.h=!1}var ei={},Rr={};function Cr(s,a,l){s.L=1,s.v=Tn(Vt(a)),s.m=l,s.P=!0,ni(s,null)}function ni(s,a){s.F=Date.now(),yn(s),s.A=Vt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),gi(l.i,"t",h),s.C=0,l=s.j.J,s.h=new ti,s.g=xi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new wu(C(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Hs[0]=T.toString()),T=Hs);for(var w=0;w<T.length;w++){var S=Us(l,T[w],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Me(),Cu(s.i,s.u,s.A,s.l,s.R,s.m)}Ot.prototype.ca=function(s){s=s.target;const a=this.M;a&&Dt(s)==3?a.j():this.Y(s)},Ot.prototype.Y=function(s){try{if(s==this.g)t:{const dt=Dt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||wi(this.g)))){this.J||dt!=4||a==7||(a==8||0>=le?Me(3):Me(2)),Sr(this);var l=this.g.Z();this.X=l;e:if(ri(this)){var h=wi(this.g);s="";var T=h.length,w=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Ue(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(w&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Su(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ot=this.g;if((z=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(z)){var j=z;break e}}j=null}if(l=j)oe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,l);else{this.o=!1,this.s=3,_t(12),Yt(this),Ue(this);break t}}if(this.P){l=!0;let It;for(;!this.J&&this.C<S.length;)if(It=Vu(this,S),It==Rr){dt==4&&(this.s=4,_t(14),l=!1),oe(this.i,this.l,null,"[Incomplete Response]");break}else if(It==ei){this.s=4,_t(15),oe(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else oe(this.i,this.l,It,null),Pr(this,It);if(ri(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||S.length!=0||this.h.h||(this.s=1,_t(16),l=!1),this.o=this.o&&l,!l)oe(this.i,this.l,S,"[Invalid Chunked Response]"),Yt(this),Ue(this);else if(0<S.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),xr(ht),ht.M=!0,_t(11))}}else oe(this.i,this.l,S,null),Pr(this,S);dt==4&&Yt(this),this.o&&!this.J&&(dt==4?Vi(this.j,this):(this.o=!1,yn(this)))}else Gu(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Yt(this),Ue(this)}}}catch{}finally{}};function ri(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Vu(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?Rr:(l=Number(a.substring(l,h)),isNaN(l)?ei:(h+=1,h+l>a.length?Rr:(a=a.slice(h,h+l),s.C=h+l,a)))}Ot.prototype.cancel=function(){this.J=!0,Yt(this)};function yn(s){s.S=Date.now()+s.I,si(s,s.I)}function si(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Le(C(s.ba,s),a)}function Sr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Ot.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Pu(this.i,this.A),this.L!=2&&(Me(),_t(17)),Yt(this),this.s=2,Ue(this)):si(this,this.S-s)};function Ue(s){s.j.G==0||s.J||Vi(s.j,s)}function Yt(s){Sr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ks(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Pr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||br(l.h,s))){if(!s.K&&br(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Sn(l),Rn(l);else break t;kr(l),_t(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=Le(C(l.Za,l),6e3));if(1>=ai(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Zt(l,11)}else if((s.K||l.g==s)&&Sn(l),!G(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ht=j[3];ht!=null&&(l.la=ht,l.j.info("VER="+l.la));const dt=j[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const le=j[5];le!=null&&typeof le=="number"&&0<le&&(h=1.5*le,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const It=s.g;if(It){const bn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bn){var w=h.h;w.g||bn.indexOf("spdy")==-1&&bn.indexOf("quic")==-1&&bn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Vr(w,w.h),w.h=null))}if(h.D){const Or=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Or&&(h.ya=Or,H(h.I,h.D,Or))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var S=s;if(h.qa=ki(h,h.J?h.ia:null,h.W),S.K){ui(h.h,S);var z=S,ot=h.L;ot&&(z.I=ot),z.B&&(Sr(z),yn(z)),h.g=S}else Pi(h);0<l.i.length&&Cn(l)}else j[0]!="stop"&&j[0]!="close"||Zt(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Zt(l,7):Nr(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Me(4)}catch{}}var Du=class{constructor(s,a){this.g=s,this.map=a}};function ii(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ai(s){return s.h?1:s.g?s.g.size:0}function br(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Vr(s,a){s.g?s.g.add(a):s.h=a}function ui(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ii.prototype.cancel=function(){if(this.i=li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function li(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return M(s.i)}function Nu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function ku(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function ci(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=ku(s),h=Nu(s),T=h.length,w=0;w<T;w++)a.call(void 0,h[w],l&&l[w],s)}var hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),T=null;if(0<=h){var w=s[l].substring(0,h);T=s[l].substring(h+1)}else w=s[l];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Jt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Jt){this.h=s.h,En(this,s.j),this.o=s.o,this.g=s.g,vn(this,s.s),this.l=s.l;var a=s.i,l=new $e;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),di(this,l),this.m=s.m}else s&&(a=String(s).match(hi))?(this.h=!1,En(this,a[1]||"",!0),this.o=Be(a[2]||""),this.g=Be(a[3]||"",!0),vn(this,a[4]),this.l=Be(a[5]||"",!0),di(this,a[6]||"",!0),this.m=Be(a[7]||"")):(this.h=!1,this.i=new $e(null,this.h))}Jt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(qe(a,fi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(qe(a,fi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(qe(l,l.charAt(0)=="/"?Lu:Mu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",qe(l,Uu)),s.join("")};function Vt(s){return new Jt(s)}function En(s,a,l){s.j=l?Be(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function vn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function di(s,a,l){a instanceof $e?(s.i=a,Bu(s.i,s.h)):(l||(a=qe(a,Fu)),s.i=new $e(a,s.h))}function H(s,a,l){s.i.set(a,l)}function Tn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Be(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function qe(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Ou),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ou(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var fi=/[#\/\?@]/g,Mu=/[#\?:]/g,Lu=/[#\?]/g,Fu=/[#\?@]/g,Uu=/#/g;function $e(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Mt(s){s.g||(s.g=new Map,s.h=0,s.i&&xu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=$e.prototype,r.add=function(s,a){Mt(this),this.i=null,s=ae(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function pi(s,a){Mt(s),a=ae(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function mi(s,a){return Mt(s),a=ae(s,a),s.g.has(a)}r.forEach=function(s,a){Mt(this),this.g.forEach(function(l,h){l.forEach(function(T){s.call(a,T,h,this)},this)},this)},r.na=function(){Mt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const T=s[h];for(let w=0;w<T.length;w++)l.push(a[h])}return l},r.V=function(s){Mt(this);let a=[];if(typeof s=="string")mi(this,s)&&(a=a.concat(this.g.get(ae(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Mt(this),this.i=null,s=ae(this,s),mi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function gi(s,a,l){pi(s,a),0<l.length&&(s.i=null,s.g.set(ae(s,a),M(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var T=w;S[h]!==""&&(T+="="+encodeURIComponent(String(S[h]))),s.push(T)}}return this.i=s.join("&")};function ae(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Bu(s,a){a&&!s.j&&(Mt(s),s.i=null,s.g.forEach(function(l,h){var T=h.toLowerCase();h!=T&&(pi(this,h),gi(this,T,l))},s)),s.j=a}function qu(s,a){const l=new Fe;if(c.Image){const h=new Image;h.onload=P(Lt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=P(Lt,l,"TestLoadImage: error",!1,a,h),h.onabort=P(Lt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=P(Lt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function $u(s,a){const l=new Fe,h=new AbortController,T=setTimeout(()=>{h.abort(),Lt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(w=>{clearTimeout(T),w.ok?Lt(l,"TestPingServer: ok",!0,a):Lt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(l,"TestPingServer: error",!1,a)})}function Lt(s,a,l,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(l)}catch{}}function ju(){this.g=new Ru}function zu(s,a,l){const h=l||"";try{ci(s,function(T,w){let S=T;f(T)&&(S=vr(T)),a.push(h+w+"="+encodeURIComponent(S))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function In(s){this.l=s.Ub||null,this.j=s.eb||!1}N(In,Tr),In.prototype.g=function(){return new wn(this.l,this.j)},In.prototype.i=function(s){return function(){return s}}({});function wn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(wn,ct),r=wn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,ze(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ze(this)),this.g&&(this.readyState=3,ze(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_i(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function _i(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?je(this):ze(this),this.readyState==3&&_i(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,je(this))},r.Qa=function(s){this.g&&(this.response=s,je(this))},r.ga=function(){this.g&&je(this)};function je(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ze(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function ze(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function yi(s){let a="";return it(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Dr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=yi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function W(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(W,ct);var Hu=/^https?$/i,Ku=["POST","PUT"];r=W.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ar.g(),this.v=this.o?Gs(this.o):Gs(Ar),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ei(this,w);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)l.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ku,a,void 0))||h||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ii(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Ei(this,w)}};function Ei(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,vi(s),An(s)}function vi(s){s.A||(s.A=!0,gt(s,"complete"),gt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,gt(this,"complete"),gt(this,"abort"),An(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),W.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ti(this):this.bb())},r.bb=function(){Ti(this)};function Ti(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Dt(s)!=4||s.Z()!=2)){if(s.u&&Dt(s)==4)js(s.Ea,0,s);else if(gt(s,"readystatechange"),Dt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=S===0){var T=String(s.D).match(hi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!Hu.test(T?T.toLowerCase():"")}l=h}if(l)gt(s,"complete"),gt(s,"success");else{s.m=6;try{var w=2<Dt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",vi(s)}}finally{An(s)}}}}function An(s,a){if(s.g){Ii(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||gt(s,"ready");try{l.onreadystatechange=h}catch{}}}function Ii(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Dt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Au(a)}};function wi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Gu(s){const a={};s=(s.g&&2<=Dt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(G(s[h]))continue;var l=E(s[h]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[T]||[];a[T]=w,w.push(l)}v(a,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function He(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ai(s){this.Aa=0,this.i=[],this.j=new Fe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=He("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=He("baseRetryDelayMs",5e3,s),this.cb=He("retryDelaySeedMs",1e4,s),this.Wa=He("forwardChannelMaxRetries",2,s),this.wa=He("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ii(s&&s.concurrentRequestLimit),this.Da=new ju,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ai.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,h){_t(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=ki(this,null,this.W),Cn(this)};function Nr(s){if(Ri(s),s.G==3){var a=s.U++,l=Vt(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),Ke(s,l),a=new Ot(s,s.j,a),a.L=2,a.v=Tn(Vt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=xi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),yn(a)}Ni(s)}function Rn(s){s.g&&(xr(s),s.g.cancel(),s.g=null)}function Ri(s){Rn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Sn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Cn(s){if(!oi(s.h)&&!s.s){s.s=!0;var a=s.Ga;De||Fs(),Ne||(De(),Ne=!0),dr.add(a,s),s.B=0}}function Qu(s,a){return ai(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Le(C(s.Ga,s,a),Di(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Ot(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Si(this,T,a),l=Vt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),Ke(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(yi(w)))+"&"+a:this.m&&Dr(l,this.m,w)),Vr(this.h,T),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),T.T=!0,Cr(T,l,null)):Cr(T,l,a),this.G=2}}else this.G==3&&(s?Ci(this,s):this.i.length==0||oi(this.h)||Ci(this))};function Ci(s,a){var l;a?l=a.l:l=s.U++;const h=Vt(s.I);H(h,"SID",s.K),H(h,"RID",l),H(h,"AID",s.T),Ke(s,h),s.m&&s.o&&Dr(h,s.m,s.o),l=new Ot(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Si(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Vr(s.h,l),Cr(l,h,a)}function Ke(s,a){s.H&&it(s.H,function(l,h){H(a,h,l)}),s.l&&ci({},function(l,h){H(a,h,l)})}function Si(s,a,l){l=Math.min(s.i.length,l);var h=s.l?C(s.l.Na,s.l,s):null;t:{var T=s.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=T[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let z=!0;for(let ot=0;ot<l;ot++){let j=T[ot].g;const ht=T[ot].map;if(j-=w,0>j)w=Math.max(0,T[ot].g-100),z=!1;else try{zu(ht,S,"req"+j+"_")}catch{h&&h(ht)}}if(z){h=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function Pi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;De||Fs(),Ne||(De(),Ne=!0),dr.add(a,s),s.v=0}}function kr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Le(C(s.Fa,s),Di(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Le(C(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Rn(this),bi(this))};function xr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function bi(s){s.g=new Ot(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Vt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),Ke(s,a),s.m&&s.o&&Dr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Tn(Vt(a)),l.m=null,l.P=!0,ni(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Rn(this),kr(this),_t(19))};function Sn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Vi(s,a){var l=null;if(s.g==a){Sn(s),xr(s),s.g=null;var h=2}else if(br(s.h,a))l=a.D,ui(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=mn(),gt(h,new Js(h,l)),Cn(s)}else Pi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&Qu(s,a)||h==2&&kr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),T){case 1:Zt(s,5);break;case 4:Zt(s,10);break;case 3:Zt(s,6);break;default:Zt(s,2)}}}function Di(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function Zt(s,a){if(s.j.info("Error code "+a),a==2){var l=C(s.fb,s),h=s.Xa;const T=!h;h=new Jt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||En(h,"https"),Tn(h),T?qu(h.toString(),l):$u(h.toString(),l)}else _t(2);s.G=0,s.l&&s.l.sa(a),Ni(s),Ri(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ni(s){if(s.G=0,s.ka=[],s.l){const a=li(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function ki(s,a,l){var h=l instanceof Jt?Vt(l):new Jt(l);if(h.g!="")a&&(h.g=a+"."+h.g),vn(h,h.s);else{var T=c.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new Jt(null);h&&En(w,h),a&&(w.g=a),T&&vn(w,T),l&&(w.l=l),h=w}return l=s.D,a=s.ya,l&&a&&H(h,l,a),H(h,"VER",s.la),Ke(s,h),h}function xi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new W(new In({eb:l})):new W(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oi(){}r=Oi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Pn(){}Pn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){ct.call(this),this.g=new Ai(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!G(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ue(this)}N(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Nr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=vr(s),s=l);a.i.push(new Du(a.Ya++,s)),a.G==3&&Cn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Nr(this.g),delete this.g,Tt.aa.N.call(this)};function Mi(s){Ir.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(Mi,Ir);function Li(){wr.call(this),this.status=1}N(Li,wr);function ue(s){this.g=s}N(ue,Oi),ue.prototype.ua=function(){gt(this.g,"a")},ue.prototype.ta=function(s){gt(this.g,new Mi(s))},ue.prototype.sa=function(s){gt(this.g,new Li)},ue.prototype.ra=function(){gt(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,ha=function(){return new Pn},ca=function(){return mn()},la=Xt,Yr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gn.NO_ERROR=0,gn.TIMEOUT=8,gn.HTTP_ERROR=6,Ln=gn,Zs.COMPLETE="complete",ua=Zs,Qs.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ge=Qs,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,aa=W}).apply(typeof Dn<"u"?Dn:typeof self<"u"?self:typeof window<"u"?window:{});const to="@firebase/firestore",eo="4.7.9";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Ce="11.4.0";/**
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
 */const se=new ta("@firebase/firestore");function ce(){return se.logLevel}function V(r,...t){if(se.logLevel<=U.DEBUG){const e=t.map(_s);se.debug(`Firestore (${Ce}): ${r}`,...e)}}function kt(r,...t){if(se.logLevel<=U.ERROR){const e=t.map(_s);se.error(`Firestore (${Ce}): ${r}`,...e)}}function ye(r,...t){if(se.logLevel<=U.WARN){const e=t.map(_s);se.warn(`Firestore (${Ce}): ${r}`,...e)}}function _s(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function L(r="Unexpected state"){const t=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: `+r;throw kt(t),new Error(t)}function Q(r,t){r||L()}function q(r,t){return r}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Re{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class da{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Lc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Fc{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0);let n=this.i;const i=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string"),new da(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new pt(t)}}class Uc{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Bc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Uc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class no{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qc{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ec(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0);const n=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new no(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new no(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $c(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class jc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=$c(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function B(r,t){return r<t?-1:r>t?1:0}function Ee(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */const ro=-62135596800,so=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*so);return new vt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ro)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/so}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ro;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new vt(0,0))}static max(){return new O(new vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const io="__name__";class wt{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return wt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=wt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const n=wt.isNumericId(t),i=wt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?wt.extractNumericId(t).compare(wt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return jt.fromString(t.substring(4,t.length-2))}}class X extends wt{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const zc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends wt{construct(t,e,n){return new yt(t,e,n)}static isValidIdentifier(t){return zc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===io}static keyField(){return new yt([io])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}/**
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
 */const nn=-1;function Hc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=O.fromTimestamp(n===1e9?new vt(e+1,0):new vt(e,n));return new zt(i,x.empty(),t)}function Kc(r){return new zt(r.readTime,r.key,nn)}class zt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new zt(O.min(),x.empty(),nn)}static max(){return new zt(O.max(),x.empty(),nn)}}function Gc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
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
 */const Qc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function tr(r){if(r.code!==b.FAILED_PRECONDITION||r.message!==Qc)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,n)=>{e(t)})}static reject(t){return new R((e,n)=>{n(t)})}static waitFor(t){return new R((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},d=>n(d))}),u=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next(i=>i?R.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new R((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++c,c===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new R((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Xc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Se(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}er.ae=-1;/**
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
 */const Yc=-1;function nr(r){return r==null}function Jr(r){return r===0&&1/r==-1/0}/**
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
 */const fa="";function Jc(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=oo(t)),t=Zc(r.get(e),t);return oo(t)}function Zc(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case fa:e+="";break;default:e+=o}}return e}function oo(r){return r+fa+""}/**
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
 */function ao(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function an(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function th(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new uo(this.data.getIterator())}getIteratorFrom(t){return new uo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class uo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Ut([])}unionWith(t){let e=new nt(yt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ut(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pa("Invalid base64 string: "+o):o}}(t);return new ut(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const eh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(Q(!!r),typeof r=="string"){let t=0;const e=eh.exec(r);if(Q(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Kt(r){return typeof r=="string"?ut.fromBase64String(r):ut.fromUint8Array(r)}/**
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
 */const ma="server_timestamp",ga="__type__",_a="__previous_value__",ya="__local_write_time__";function ys(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ga])===null||e===void 0?void 0:e.stringValue)===ma}function rr(r){const t=r.mapValue.fields[_a];return ys(t)?rr(t):t}function rn(r){const t=Ht(r.mapValue.fields[ya].timestampValue);return new vt(t.seconds,t.nanos)}/**
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
 */class nh{constructor(t,e,n,i,o,u,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}const Kn="(default)";class sn{constructor(t,e){this.projectId=t,this.database=e||Kn}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Kn}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const rh="__type__",sh="__max__",kn={mapValue:{}},ih="__vector__",Zr="value";function Gt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ys(r)?4:ah(r)?9007199254740991:oh(r)?10:11:L()}function Ct(r,t){if(r===t)return!0;const e=Gt(r);if(e!==Gt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return rn(r).isEqual(rn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Ht(i.timestampValue),c=Ht(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Kt(i.bytesValue).isEqual(Kt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),c=J(o.doubleValue);return u===c?Jr(u)===Jr(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Ee(r.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ao(u)!==ao(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Ct(u[d],c[d])))return!1;return!0}(r,t);default:return L()}}function on(r,t){return(r.values||[]).find(e=>Ct(e,t))!==void 0}function ve(r,t){if(r===t)return 0;const e=Gt(r),n=Gt(t);if(e!==n)return B(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),d=J(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(r,t);case 3:return lo(r.timestampValue,t.timestampValue);case 4:return lo(rn(r),rn(t));case 5:return B(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Kt(o),d=Kt(u);return c.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=B(c[f],d[f]);if(_!==0)return _}return B(c.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=B(J(o.latitude),J(u.latitude));return c!==0?c:B(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return co(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,d,f,_;const A=o.fields||{},C=u.fields||{},P=(c=A[Zr])===null||c===void 0?void 0:c.arrayValue,N=(d=C[Zr])===null||d===void 0?void 0:d.arrayValue,M=B(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return M!==0?M:co(P,N)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===kn.mapValue&&u===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(u===kn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const C=B(d[A],_[A]);if(C!==0)return C;const P=ve(c[d[A]],f[_[A]]);if(P!==0)return P}return B(d.length,_.length)}(r.mapValue,t.mapValue);default:throw L()}}function lo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=Ht(r),n=Ht(t),i=B(e.seconds,n.seconds);return i!==0?i:B(e.nanos,n.nanos)}function co(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=ve(e[i],n[i]);if(o)return o}return B(e.length,n.length)}function Te(r){return ts(r)}function ts(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Ht(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Kt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ts(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${ts(e.fields[u])}`;return i+"}"}(r.mapValue):L()}function Fn(r){switch(Gt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=rr(r);return t?16+Fn(t):16;case 5:return 2*r.stringValue.length;case 6:return Kt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Fn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return an(n.fields,(o,u)=>{i+=o.length+Fn(u)}),i}(r.mapValue);default:throw L()}}function es(r){return!!r&&"integerValue"in r}function Es(r){return!!r&&"arrayValue"in r}function ho(r){return!!r&&"nullValue"in r}function fo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Br(r){return!!r&&"mapValue"in r}function oh(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[rh])===null||e===void 0?void 0:e.stringValue)===ih}function Xe(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return an(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Xe(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Xe(r.arrayValue.values[e]);return t}return Object.assign({},r)}function ah(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===sh}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Br(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(e)}setAll(t){let e=yt.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=Xe(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Br(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Br(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){an(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new At(Xe(this.value))}}/**
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
 */class mt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new mt(t,0,O.min(),O.min(),O.min(),At.empty(),0)}static newFoundDocument(t,e,n,i){return new mt(t,1,e,O.min(),n,i,0)}static newNoDocument(t,e){return new mt(t,2,e,O.min(),O.min(),At.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,O.min(),O.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gn{constructor(t,e){this.position=t,this.inclusive=e}}function po(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(u.referenceValue),e.key):n=ve(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function mo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ct(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Qn{constructor(t,e="asc"){this.field=t,this.dir=e}}function uh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ea{}class et extends Ea{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new ch(t,e,n):e==="array-contains"?new fh(t,n):e==="in"?new ph(t,n):e==="not-in"?new mh(t,n):e==="array-contains-any"?new gh(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new hh(t,n):new dh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ve(e,this.value)):e!==null&&Gt(this.value)===Gt(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Ea{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new St(t,e)}matches(t){return va(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function va(r){return r.op==="and"}function Ta(r){return lh(r)&&va(r)}function lh(r){for(const t of r.filters)if(t instanceof St)return!1;return!0}function ns(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Te(r.value);if(Ta(r))return r.filters.map(t=>ns(t)).join(",");{const t=r.filters.map(e=>ns(e)).join(",");return`${r.op}(${t})`}}function Ia(r,t){return r instanceof et?function(n,i){return i instanceof et&&n.op===i.op&&n.field.isEqual(i.field)&&Ct(n.value,i.value)}(r,t):r instanceof St?function(n,i){return i instanceof St&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&Ia(u,i.filters[c]),!0):!1}(r,t):void L()}function wa(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Te(e.value)}`}(r):r instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(wa).join(" ,")+"}"}(r):"Filter"}class ch extends et{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class hh extends et{constructor(t,e){super(t,"in",e),this.keys=Aa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class dh extends et{constructor(t,e){super(t,"not-in",e),this.keys=Aa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Aa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class fh extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Es(e)&&on(e.arrayValue,this.value)}}class ph extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&on(this.value.arrayValue,e)}}class mh extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!on(this.value.arrayValue,e)}}class gh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Es(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>on(this.value.arrayValue,n))}}/**
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
 */class _h{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.le=null}}function go(r,t=null,e=[],n=[],i=null,o=null,u=null){return new _h(r,t,e,n,i,o,u)}function vs(r){const t=q(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ns(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Te(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Te(n)).join(",")),t.le=e}return t.le}function Ts(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!uh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ia(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!mo(r.startAt,t.startAt)&&mo(r.endAt,t.endAt)}function rs(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class sr{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function yh(r,t,e,n,i,o,u,c){return new sr(r,t,e,n,i,o,u,c)}function Ra(r){return new sr(r)}function _o(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Eh(r){return r.collectionGroup!==null}function Ye(r){const t=q(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new nt(yt.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Qn(o,n))}),e.has(yt.keyField().canonicalString())||t.he.push(new Qn(yt.keyField(),n))}return t.he}function Rt(r){const t=q(r);return t.Pe||(t.Pe=vh(t,Ye(r))),t.Pe}function vh(r,t){if(r.limitType==="F")return go(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Qn(i.field,o)});const e=r.endAt?new Gn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Gn(r.startAt.position,r.startAt.inclusive):null;return go(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ss(r,t,e){return new sr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ir(r,t){return Ts(Rt(r),Rt(t))&&r.limitType===t.limitType}function Ca(r){return`${vs(Rt(r))}|lt:${r.limitType}`}function he(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>wa(i)).join(", ")}]`),nr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Te(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Te(i)).join(",")),`Target(${n})`}(Rt(r))}; limitType=${r.limitType})`}function or(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Ye(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,d){const f=po(u,c,d);return u.inclusive?f<=0:f<0}(n.startAt,Ye(n),i)||n.endAt&&!function(u,c,d){const f=po(u,c,d);return u.inclusive?f>=0:f>0}(n.endAt,Ye(n),i))}(r,t)}function Th(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Sa(r){return(t,e)=>{let n=!1;for(const i of Ye(r)){const o=Ih(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Ih(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),f=c.data.field(o);return d!==null&&f!==null?ve(d,f):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
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
 */class ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){an(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return th(this.inner)}size(){return this.innerSize}}/**
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
 */const wh=new Z(x.comparator);function Qt(){return wh}const Pa=new Z(x.comparator);function Qe(...r){let t=Pa;for(const e of r)t=t.insert(e.key,e);return t}function Ah(r){let t=Pa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ee(){return Je()}function ba(){return Je()}function Je(){return new ie(r=>r.toString(),(r,t)=>r.isEqual(t))}const Rh=new nt(x.comparator);function $(...r){let t=Rh;for(const e of r)t=t.add(e);return t}const Ch=new nt(B);function Sh(){return Ch}/**
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
 */function Ph(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(t)?"-0":t}}function bh(r){return{integerValue:""+r}}/**
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
 */class ar{constructor(){this._=void 0}}function Vh(r,t,e){return r instanceof is?function(i,o){const u={fields:{[ga]:{stringValue:ma},[ya]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ys(o)&&(o=rr(o)),o&&(u.fields[_a]=o),{mapValue:u}}(e,t):r instanceof Wn?Va(r,t):r instanceof Xn?Da(r,t):function(i,o){const u=Nh(i,o),c=yo(u)+yo(i.Ie);return es(u)&&es(i.Ie)?bh(c):Ph(i.serializer,c)}(r,t)}function Dh(r,t,e){return r instanceof Wn?Va(r,t):r instanceof Xn?Da(r,t):e}function Nh(r,t){return r instanceof os?function(n){return es(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class is extends ar{}class Wn extends ar{constructor(t){super(),this.elements=t}}function Va(r,t){const e=Na(t);for(const n of r.elements)e.some(i=>Ct(i,n))||e.push(n);return{arrayValue:{values:e}}}class Xn extends ar{constructor(t){super(),this.elements=t}}function Da(r,t){let e=Na(t);for(const n of r.elements)e=e.filter(i=>!Ct(i,n));return{arrayValue:{values:e}}}class os extends ar{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function yo(r){return J(r.integerValue||r.doubleValue)}function Na(r){return Es(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function kh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Wn&&i instanceof Wn||n instanceof Xn&&i instanceof Xn?Ee(n.elements,i.elements,Ct):n instanceof os&&i instanceof os?Ct(n.Ie,i.Ie):n instanceof is&&i instanceof is}(r.transform,t.transform)}class re{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new re}static exists(t){return new re(void 0,t)}static updateTime(t){return new re(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Un(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Is{}function ka(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Oh(r.key,re.none()):new ws(r.key,r.data,re.none());{const e=r.data,n=At.empty();let i=new nt(yt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ur(r.key,n,new Ut(i.toArray()),re.none())}}function xh(r,t,e){r instanceof ws?function(i,o,u){const c=i.value.clone(),d=vo(i.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ur?function(i,o,u){if(!Un(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=vo(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(xa(i)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ze(r,t,e,n){return r instanceof ws?function(o,u,c,d){if(!Un(o.precondition,u))return c;const f=o.value.clone(),_=To(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ur?function(o,u,c,d){if(!Un(o.precondition,u))return c;const f=To(o.fieldTransforms,d,u),_=u.data;return _.setAll(xa(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,c){return Un(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function Eo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ee(n,i,(o,u)=>kh(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ws extends Is{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends Is{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function xa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function vo(r,t,e){const n=new Map;Q(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,Dh(u,c,e[i]))}return n}function To(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Vh(o,u,t))}return n}class Oh extends Is{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&xh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ze(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ze(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ba();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const d=ka(u,c);d!==null&&n.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,(e,n)=>Eo(e,n))&&Ee(this.baseMutations,t.baseMutations,(e,n)=>Eo(e,n))}}/**
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
 */class Lh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Fh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,F;function Oa(r){if(r===void 0)return kt("GRPC error has no .code"),b.UNKNOWN;switch(r){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return L()}}(F=tt||(tt={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Uh(){return new TextEncoder}/**
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
 */const Bh=new jt([4294967295,4294967295],0);function Io(r){const t=Uh().encode(r),e=new oa;return e.update(t),new Uint8Array(e.digest())}function wo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new jt([e,n],0),new jt([i,o],0)]}class As{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new We(`Invalid padding: ${e}`);if(n<0)throw new We(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new We(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new We(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=jt.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(jt.fromNumber(n)));return i.compare(Bh)===1&&(i=new jt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Io(t),[n,i]=wo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);if(!this.Re(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new As(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.Ee===0)return;const e=Io(t),[n,i]=wo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);this.Ve(u)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class We extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new lr(O.min(),i,new Z(B),Qt(),$())}}class un{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new un(n,e,$(),$(),$())}}/**
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
 */class Bn{constructor(t,e,n,i){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=i}}class Ma{constructor(t,e){this.targetId=t,this.ge=e}}class La{constructor(t,e,n=ut.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Ao{constructor(){this.pe=0,this.ye=Ro(),this.we=ut.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=$(),e=$(),n=$();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new un(this.we,this.be,t,e,n)}Me(){this.Se=!1,this.ye=Ro()}xe(t,e){this.Se=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Q(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class qh{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Qt(),this.$e=xn(),this.Ke=xn(),this.Ue=new Z(B)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,n=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(rs(o))if(n===0){const u=new x(o.path);this.ze(e,u,mt.newNoDocument(u,O.min()))}else Q(n===1);else{const u=this.et(e);if(u!==n){const c=this.tt(t),d=c?this.nt(c,t,u):1;if(d!==0){this.Ye(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Kt(n).toUint8Array()}catch(d){if(d instanceof pa)return ye("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new As(u,i,o)}catch(d){return ye(d instanceof We?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ee===0?null:c}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.ke.it(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,u)=>{const c=this.Xe(u);if(c){if(o.current&&rs(c.target)){const d=new x(c.target.path);this._t(d).has(u)||this.ut(u,d)||this.ze(u,d,mt.newNoDocument(d,t))}o.ve&&(e.set(u,o.Fe()),o.Me())}});let n=$();this.Ke.forEach((o,u)=>{let c=!0;u.forEachWhile(d=>{const f=this.Xe(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(t));const i=new lr(t,e,this.Ue,this.Qe,n);return this.Qe=Qt(),this.$e=xn(),this.Ke=xn(),this.Ue=new Z(B),i}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ke=this.Ke.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ke=this.Ke.insert(e,this.ct(e).delete(t)),this.Ke=this.Ke.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Ao,this.qe.set(t,e)),e}ct(t){let e=this.Ke.get(t);return e||(e=new nt(B),this.Ke=this.Ke.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new nt(B),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Ao),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function xn(){return new Z(x.comparator)}function Ro(){return new Z(x.comparator)}const $h={asc:"ASCENDING",desc:"DESCENDING"},jh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zh={and:"AND",or:"OR"};class Hh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function as(r,t){return r.useProto3Json||nr(t)?t:{value:t}}function Kh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function me(r){return Q(!!r),O.fromTimestamp(function(e){const n=Ht(e);return new vt(n.seconds,n.nanos)}(r))}function Qh(r,t){return us(r,t).canonicalString()}function us(r,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Fa(r){const t=X.fromString(r);return Q(ja(t)),t}function qr(r,t){const e=Fa(t);if(e.get(1)!==r.databaseId.projectId)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(Ba(e))}function Ua(r,t){return Qh(r.databaseId,t)}function Wh(r){const t=Fa(r);return t.length===4?X.emptyPath():Ba(t)}function Co(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ba(r){return Q(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Xh(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(Q(_===void 0||typeof _=="string"),ut.fromBase64String(_||"")):(Q(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ut.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const _=f.code===void 0?b.UNKNOWN:Oa(f.code);return new k(_,f.message||"")}(u);e=new La(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=qr(r,n.document.name),o=me(n.document.updateTime),u=n.document.createTime?me(n.document.createTime):O.min(),c=new At({mapValue:{fields:n.document.fields}}),d=mt.newFoundDocument(i,o,u,c),f=n.targetIds||[],_=n.removedTargetIds||[];e=new Bn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=qr(r,n.document),o=n.readTime?me(n.readTime):O.min(),u=mt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Bn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=qr(r,n.document),o=n.removedTargetIds||[];e=new Bn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Fh(i,o),c=n.targetId;e=new Ma(c,u)}}return e}function Yh(r,t){return{documents:[Ua(r,t.path)]}}function Jh(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ua(r,i);const o=function(f){if(f.length!==0)return $a(St.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(C){return{field:de(C.field),direction:ed(C.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=as(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:i}}function Zh(r){let t=Wh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){Q(n===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const C=qa(A);return C instanceof St&&Ta(C)?C.getFilters():[C]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(C=>function(N){return new Qn(fe(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(C))}(e.orderBy));let c=null;e.limit&&(c=function(A){let C;return C=typeof A=="object"?A.value:A,nr(C)?null:C}(e.limit));let d=null;e.startAt&&(d=function(A){const C=!!A.before,P=A.values||[];return new Gn(P,C)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const C=!A.before,P=A.values||[];return new Gn(P,C)}(e.endAt)),yh(t,i,u,o,c,"F",d,f)}function td(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function qa(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fe(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=fe(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=fe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=fe(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return et.create(fe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(n=>qa(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function ed(r){return $h[r]}function nd(r){return jh[r]}function rd(r){return zh[r]}function de(r){return{fieldPath:r.canonicalString()}}function fe(r){return yt.fromServerFormat(r.fieldPath)}function $a(r){return r instanceof et?function(e){if(e.op==="=="){if(fo(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NAN"}};if(ho(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fo(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NAN"}};if(ho(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(e.field),op:nd(e.op),value:e.value}}}(r):r instanceof St?function(e){const n=e.getFilters().map(i=>$a(i));return n.length===1?n[0]:{compositeFilter:{op:rd(e.op),filters:n}}}(r):L()}function ja(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Bt{constructor(t,e,n,i,o=O.min(),u=O.min(),c=ut.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new Bt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class sd{constructor(t){this.Tt=t}}function id(r){const t=Zh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ss(t,t.limit,"L"):t}/**
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
 */class od{constructor(){this.Tn=new ad}addToCollectionParentIndex(t,e){return this.Tn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(zt.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class ad{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new nt(X.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new nt(X.comparator)).toArray()}}/**
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
 */const So={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},za=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(za,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class Ie{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Ie(0)}static Un(){return new Ie(-1)}}/**
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
 */const Po="LruGarbageCollector",ud=1048576;function bo([r,t],[e,n]){const i=B(r,e);return i===0?B(t,n):i}class ld{constructor(t){this.Hn=t,this.buffer=new nt(bo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();bo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class cd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){V(Po,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Se(e)?V(Po,"Ignoring IndexedDB error during garbage collection: ",e):await tr(e)}await this.er(3e5)})}}class hd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return R.resolve(er.ae);const n=new ld(e);return this.tr.forEachTarget(t,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(So)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),So):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,i,o,u,c,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,c=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,d=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(f=Date.now(),ce()<=U.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(d-c)+`ms
	Removed ${A} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function dd(r,t){return new hd(r,t)}/**
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
 */class fd{constructor(){this.changes=new ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class pd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class md{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&Ze(n.mutation,i,Ut.empty(),vt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,$()).next(()=>n))}getLocalViewOfDocuments(t,e,n=$()){const i=ee();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Qe();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ee();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,$()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Qt();const u=Je(),c=function(){return Je()}();return e.forEach((d,f)=>{const _=n.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof ur)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),Ze(_.mutation,f,_.mutation.getFieldMask(),vt.now())):u.set(f.key,Ut.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var A;return c.set(f,new pd(_,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const n=Je();let i=new Z((u,c)=>u-c),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||Ut.empty();_=c.applyToLocalView(f,_),n.set(d,_);const A=(i.get(c.batchId)||$()).add(d);i=i.insert(c.batchId,A)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,A=ba();_.forEach(C=>{if(!o.has(C)){const P=ka(e.get(C),n.get(C));P!==null&&A.set(C,P),o=o.add(C)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return R.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Eh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):R.resolve(ee());let c=nn,d=o;return u.next(f=>R.forEach(f,(_,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(C=>{d=d.insert(_,C)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,$())).next(_=>({batchId:c,changes:Ah(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let i=Qe();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Qe();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,d=>{const f=function(A,C){return new sr(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(_=>{_.forEach((A,C)=>{u=u.insert(A,C)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,mt.newInvalidDocument(_)))});let c=Qe();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Ze(_.mutation,f,Ut.empty(),vt.now()),or(e,f)&&(c=c.insert(d,f))}),c})}}/**
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
 */class gd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return R.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:me(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:id(i.bundledQuery),readTime:me(i.readTime)}}(e)),R.resolve()}}/**
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
 */class _d{constructor(){this.overlays=new Z(x.comparator),this.Rr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ee();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Et(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const i=ee(),o=e.length+1,u=new x(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&i.set(d.getKey(),d)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Z((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=ee(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=ee(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return R.resolve(c)}Et(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Lh(e,n));let o=this.Rr.get(e);o===void 0&&(o=$(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
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
 */class yd{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Rs{constructor(){this.Vr=new nt(st.mr),this.gr=new nt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new st(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new st(t,e))}br(t,e){t.forEach(n=>this.removeReference(n,e))}Sr(t){const e=new x(new X([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.gr.forEachInRange([n,i],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new x(new X([])),n=new st(e,t),i=new st(e,t+1);let o=$();return this.gr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return x.comparator(t.key,e.key)||B(t.Cr,e.Cr)}static pr(t,e){return B(t.Cr,e.Cr)||x.comparator(t.key,e.key)}}/**
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
 */class Ed{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(st.mr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Mh(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Mr=this.Mr.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Nr(n),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Yc:this.Fr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,i],u=>{const c=this.Or(u.Cr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(B);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],c=>{n=n.add(c.Cr)})}),R.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const u=new st(new x(o),0);let c=new nt(B);return this.Mr.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.Cr)),!0)},u),R.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(n=>{const i=this.Or(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Q(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return R.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new st(e,0),i=this.Mr.firstAfterOrEqual(n);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class vd{constructor(t){this.kr=t,this.docs=function(){return new Z(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():mt.newInvalidDocument(e))}getEntries(t,e){let n=Qt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():mt.newInvalidDocument(i))}),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Qt();const u=e.path,c=new x(u.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Gc(Kc(_),n)<=0||(i.has(_.key)||or(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}qr(t,e){return R.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Td(this)}getSize(t){return R.resolve(this.size)}}class Td extends fd{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(n)}),R.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class Id{constructor(t){this.persistence=t,this.Qr=new ie(e=>vs(e),Ts),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Rs,this.targetCount=0,this.Ur=Ie.Kn()}forEachTarget(t,e){return this.Qr.forEach((n,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),R.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new Ie(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.zn(e),R.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.Sr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Qr.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this.Kr.yr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this.Kr.br(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Kr.Sr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Kr.vr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this.Kr.containsKey(e))}}/**
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
 */class Ha{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new er(0),this.zr=!1,this.zr=!0,this.jr=new yd,this.referenceDelegate=t(this),this.Hr=new Id(this),this.indexManager=new od,this.remoteDocumentCache=function(i){return new vd(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new sd(e),this.Yr=new gd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new _d,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new Ed(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const i=new wd(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return R.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class wd extends Wc{constructor(t){super(),this.currentSequenceNumber=t}}class Cs{constructor(t){this.persistence=t,this.ti=new Rs,this.ni=null}static ri(t){return new Cs(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),R.resolve()}removeTarget(t,e){this.ti.Sr(e.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.ii,n=>{const i=x.fromPath(n);return this.si(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return R.or([()=>R.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Yn{constructor(t,e){this.persistence=t,this.oi=new ie(n=>Jc(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=dd(this,e)}static ri(t,e){return new Yn(t,e)}Zr(){}Xr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return R.forEach(this.oi,(n,i)=>this.ar(t,n,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,u=>this.ar(t,u,e).next(c=>{c||(n++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),R.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),R.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Fn(t.data.value)),e}ar(t,e,n){return R.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return R.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ss{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=i}static Yi(t,e){let n=$(),i=$();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ss(t,e.fromCache,n,i)}}/**
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
 */class Ad{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Rd{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ml()?8:Xc(fl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Ad;return this._s(t,e,u).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,u,c.size)})}).next(()=>o.result)}us(t,e,n,i){return n.documentReadCount<this.es?(ce()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",he(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),R.resolve()):(ce()<=U.DEBUG&&V("QueryEngine","Query:",he(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(ce()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",he(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(e))):R.resolve())}rs(t,e){if(_o(e))return R.resolve(null);let n=Rt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ss(e,null,"F"),n=Rt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=$(...o);return this.ns.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.cs(e,c);return this.ls(e,f,u,d.readTime)?this.rs(t,ss(e,null,"F")):this.hs(t,f,e,d)}))})))}ss(t,e,n,i){return _o(e)||i.isEqual(O.min())?R.resolve(null):this.ns.getDocuments(t,n).next(o=>{const u=this.cs(e,o);return this.ls(e,u,n,i)?R.resolve(null):(ce()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),he(e)),this.hs(t,u,e,Hc(i,nn)).next(c=>c))})}cs(t,e){let n=new nt(Sa(t));return e.forEach((i,o)=>{or(t,o)&&(n=n.add(o))}),n}ls(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,n){return ce()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",he(e)),this.ns.getDocumentsMatchingQuery(t,e,zt.min(),n)}hs(t,e,n,i){return this.ns.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const Ps="LocalStore",Cd=3e8;class Sd{constructor(t,e,n,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new Z(B),this.Is=new ie(o=>vs(o),Ts),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new md(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Pd(r,t,e,n){return new Sd(r,t,e,n)}async function Ka(r,t){const e=q(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let d=$();for(const f of i){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({Rs:f,removedBatchIds:u,addedBatchIds:c}))})})}function Ga(r){const t=q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function bd(r,t){const e=q(r),n=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((_,A)=>{const C=i.get(A);if(!C)return;c.push(e.Hr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Hr.addMatchingKeys(o,_.addedDocuments,A)));let P=C.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?P=P.withResumeToken(ut.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,n)),i=i.insert(A,P),function(M,D,Y){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Cd?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(C,P,_)&&c.push(e.Hr.updateTargetData(o,P))});let d=Qt(),f=$();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(Vd(o,u,t.documentUpdates).next(_=>{d=_.Vs,f=_.fs})),!n.isEqual(O.min())){const _=e.Hr.getLastRemoteSnapshotVersion(o).next(A=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(_)}return R.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.Ts=i,o))}function Vd(r,t,e){let n=$(),i=$();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Qt();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(O.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):V(Ps,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{Vs:u,fs:i}})}function Dd(r,t){const e=q(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Hr.getTargetData(n,t).next(o=>o?(i=o,R.resolve(i)):e.Hr.allocateTargetId(n).next(u=>(i=new Bt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function ls(r,t,e){const n=q(r),i=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Se(u))throw u;V(Ps,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ts=n.Ts.remove(t),n.Is.delete(i.target)}function Vo(r,t,e){const n=q(r);let i=O.min(),o=$();return n.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const A=q(d),C=A.Is.get(_);return C!==void 0?R.resolve(A.Ts.get(C)):A.Hr.getTargetData(f,_)}(n,u,Rt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(u,c.targetId).next(d=>{o=d})}).next(()=>n.Ps.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:$())).next(c=>(Nd(n,Th(t),c),{documents:c,gs:o})))}function Nd(r,t,e){let n=r.Es.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class Do{constructor(){this.activeTargetIds=Sh()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kd{constructor(){this.ho=new Do,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Do,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class xd{To(t){}shutdown(){}}/**
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
 */const No="ConnectivityMonitor";class ko{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){V(No,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){V(No,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let On=null;function cs(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
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
 */const $r="RestConnection",Od={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Md{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===Kn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}bo(t,e,n,i,o){const u=cs(),c=this.So(t,e.toUriEncodedString());V($r,`Sending RPC '${t}' ${u}:`,c,n);const d={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(d,i,o),this.vo(t,c,d,n).then(f=>(V($r,`Received RPC '${t}' ${u}: `,f),f),f=>{throw ye($r,`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",n),f})}Co(t,e,n,i,o,u){return this.bo(t,e,n,i,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ce}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}So(t,e){const n=Od[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
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
 */class Ld{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const ft="WebChannelConnection";class Fd extends Md{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){const o=cs();return new Promise((u,c)=>{const d=new aa;d.setWithCredentials(!0),d.listenOnce(ua.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ln.NO_ERROR:const _=d.getResponseJson();V(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Ln.TIMEOUT:V(ft,`RPC '${t}' ${o} timed out`),c(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const A=d.getStatus();if(V(ft,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const N=function(D){const Y=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(Y)>=0?Y:b.UNKNOWN}(P.status);c(new k(N,P.message))}else c(new k(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new k(b.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{V(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);V(ft,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,n,15)})}Wo(t,e,n){const i=cs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ha(),c=ca(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Do(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");V(ft,`Creating RPC '${t}' stream ${i}: ${_}`,d);const A=u.createWebChannel(_,d);let C=!1,P=!1;const N=new Ld({Fo:D=>{P?V(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(C||(V(ft,`Opening RPC '${t}' stream ${i} transport.`),A.open(),C=!0),V(ft,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},Mo:()=>A.close()}),M=(D,Y,G)=>{D.listen(Y,K=>{try{G(K)}catch(rt){setTimeout(()=>{throw rt},0)}})};return M(A,Ge.EventType.OPEN,()=>{P||(V(ft,`RPC '${t}' stream ${i} transport opened.`),N.Qo())}),M(A,Ge.EventType.CLOSE,()=>{P||(P=!0,V(ft,`RPC '${t}' stream ${i} transport closed`),N.Ko())}),M(A,Ge.EventType.ERROR,D=>{P||(P=!0,ye(ft,`RPC '${t}' stream ${i} transport errored:`,D),N.Ko(new k(b.UNAVAILABLE,"The operation could not be completed")))}),M(A,Ge.EventType.MESSAGE,D=>{var Y;if(!P){const G=D.data[0];Q(!!G);const K=G,rt=(K==null?void 0:K.error)||((Y=K[0])===null||Y===void 0?void 0:Y.error);if(rt){V(ft,`RPC '${t}' stream ${i} received error:`,rt);const Pt=rt.status;let it=function(g){const y=tt[g];if(y!==void 0)return Oa(y)}(Pt),v=rt.message;it===void 0&&(it=b.INTERNAL,v="Unknown error status: "+Pt+" with message "+rt.message),P=!0,N.Ko(new k(it,v)),A.close()}else V(ft,`RPC '${t}' stream ${i} received:`,G),N.Uo(G)}}),M(c,la.STAT_EVENT,D=>{D.stat===Yr.PROXY?V(ft,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Yr.NOPROXY&&V(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function jr(){return typeof document<"u"?document:null}/**
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
 */function Qa(r){return new Hh(r,!0)}/**
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
 */class Wa{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const xo="PersistentStream";class Ud{constructor(t,e,n,i,o,u,c,d){this.Ti=t,this.n_=n,this.r_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Wa(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(kt(e.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===e&&this.V_(n,i)},n=>{t(()=>{const i=new k(b.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return V(xo,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(V(xo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bd extends Ud{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Xh(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?me(u.readTime):O.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=Co(this.serializer),e.addTarget=function(o,u){let c;const d=u.target;if(c=rs(d)?{documents:Yh(o,d)}:{query:Jh(o,d).ht},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Gh(o,u.resumeToken);const f=as(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(O.min())>0){c.readTime=Kh(o,u.snapshotVersion.toTimestamp());const f=as(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=td(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=Co(this.serializer),e.removeTarget=t,this.I_(e)}}/**
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
 */class qd{}class $d extends qd{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.bo(t,us(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(b.UNKNOWN,o.toString())})}Co(t,e,n,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Co(t,us(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(b.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class jd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(kt(e),this.N_=!1):V("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const we="RemoteStore";class zd{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{n.enqueueAndForget(async()=>{cn(this)&&(V(we,"Restarting streams for network reachability change."),await async function(d){const f=q(d);f.W_.add(4),await ln(f),f.j_.set("Unknown"),f.W_.delete(4),await cr(f)}(this))})}),this.j_=new jd(n,i)}}async function cr(r){if(cn(r))for(const t of r.G_)await t(!0)}async function ln(r){for(const t of r.G_)await t(!1)}function Xa(r,t){const e=q(r);e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),Ns(e)?Ds(e):Pe(e).c_()&&Vs(e,t))}function bs(r,t){const e=q(r),n=Pe(e);e.U_.delete(t),n.c_()&&Ya(e,t),e.U_.size===0&&(n.c_()?n.P_():cn(e)&&e.j_.set("Unknown"))}function Vs(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Pe(r).y_(t)}function Ya(r,t){r.H_.Ne(t),Pe(r).w_(t)}function Ds(r){r.H_=new qh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.U_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),Pe(r).start(),r.j_.B_()}function Ns(r){return cn(r)&&!Pe(r).u_()&&r.U_.size>0}function cn(r){return q(r).W_.size===0}function Ja(r){r.H_=void 0}async function Hd(r){r.j_.set("Online")}async function Kd(r){r.U_.forEach((t,e)=>{Vs(r,t)})}async function Gd(r,t){Ja(r),Ns(r)?(r.j_.q_(t),Ds(r)):r.j_.set("Unknown")}async function Qd(r,t,e){if(r.j_.set("Online"),t instanceof La&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.U_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.U_.delete(c),i.H_.removeTarget(c))}(r,t)}catch(n){V(we,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Oo(r,n)}else if(t instanceof Bn?r.H_.We(t):t instanceof Ma?r.H_.Ze(t):r.H_.je(t),!e.isEqual(O.min()))try{const n=await Ga(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.H_.ot(u);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.U_.get(f);_&&o.U_.set(f,_.withResumeToken(d.resumeToken,u))}}),c.targetMismatches.forEach((d,f)=>{const _=o.U_.get(d);if(!_)return;o.U_.set(d,_.withResumeToken(ut.EMPTY_BYTE_STRING,_.snapshotVersion)),Ya(o,d);const A=new Bt(_.target,d,f,_.sequenceNumber);Vs(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){V(we,"Failed to raise snapshot:",n),await Oo(r,n)}}async function Oo(r,t,e){if(!Se(t))throw t;r.W_.add(1),await ln(r),r.j_.set("Offline"),e||(e=()=>Ga(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(we,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await cr(r)})}async function Mo(r,t){const e=q(r);e.asyncQueue.verifyOperationInProgress(),V(we,"RemoteStore received new credentials");const n=cn(e);e.W_.add(3),await ln(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await cr(e)}async function Wd(r,t){const e=q(r);t?(e.W_.delete(2),await cr(e)):t||(e.W_.add(2),await ln(e),e.j_.set("Unknown"))}function Pe(r){return r.J_||(r.J_=function(e,n,i){const o=q(e);return o.M_(),new Bd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:Hd.bind(null,r),No:Kd.bind(null,r),Lo:Gd.bind(null,r),p_:Qd.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Ns(r)?Ds(r):r.j_.set("Unknown")):(await r.J_.stop(),Ja(r))})),r.J_}/**
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
 */class ks{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new ks(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Za(r,t){if(kt("AsyncQueue",`${t}: ${r}`),Se(r))return new k(b.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class ge{static emptySet(t){return new ge(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=Qe(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ge;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Lo{constructor(){this.Z_=new Z(x.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ae{constructor(t,e,n,i,o,u,c,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Ae(t,e,ge.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Xd{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Yd{constructor(){this.queries=Fo(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const i=q(e),o=i.queries;i.queries=Fo(),o.forEach((u,c)=>{for(const d of c.ta)d.onError(n)})})(this,new k(b.ABORTED,"Firestore shutting down"))}}function Fo(){return new ie(r=>Ca(r),ir)}async function Jd(r,t){const e=q(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(n=2):(o=new Xd,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Za(u,`Initialization of query '${he(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&xs(e)}async function Zd(r,t){const e=q(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.ta.indexOf(t);u>=0&&(o.ta.splice(u,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function tf(r,t){const e=q(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.ta)c.oa(i)&&(n=!0);u.ea=i}}n&&xs(e)}function ef(r,t,e){const n=q(r),i=n.queries.get(t);if(i)for(const o of i.ta)o.onError(e);n.queries.delete(t)}function xs(r){r.ia.forEach(t=>{t.next()})}var hs,Uo;(Uo=hs||(hs={}))._a="default",Uo.Cache="cache";class nf{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Ae(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==hs.Cache}}/**
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
 */class tu{constructor(t){this.key=t}}class eu{constructor(t){this.key=t}}class rf{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=$(),this.mutatedKeys=$(),this.ya=Sa(t),this.wa=new ge(this.ya)}get ba(){return this.fa}Sa(t,e){const n=e?e.Da:new Lo,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const C=i.get(_),P=or(this.query,A)?A:null,N=!!C&&this.mutatedKeys.has(C.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;C&&P?C.data.isEqual(P.data)?N!==M&&(n.track({type:3,doc:P}),D=!0):this.va(C,P)||(n.track({type:2,doc:P}),D=!0,(d&&this.ya(P,d)>0||f&&this.ya(P,f)<0)&&(c=!0)):!C&&P?(n.track({type:0,doc:P}),D=!0):C&&!P&&(n.track({type:1,doc:C}),D=!0,(d||f)&&(c=!0)),D&&(P?(u=u.add(P),o=M?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{wa:u,Da:n,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const u=t.Da.X_();u.sort((_,A)=>function(P,N){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return M(P)-M(N)}(_.type,A.type)||this.ya(_.doc,A.doc)),this.Ca(n),i=i!=null&&i;const c=e&&!i?this.Fa():[],d=this.pa.size===0&&this.current&&!i?1:0,f=d!==this.ga;return this.ga=d,u.length!==0||f?{snapshot:new Ae(this.query,t.wa,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Lo,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=$(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new eu(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new tu(n))}),e}Oa(t){this.fa=t.gs,this.pa=$();const e=this.Sa(t.documents);return this.applyChanges(e,!0)}Na(){return Ae.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Os="SyncEngine";class sf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class of{constructor(t){this.key=t,this.Ba=!1}}class af{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new ie(c=>Ca(c),ir),this.qa=new Map,this.Qa=new Set,this.$a=new Z(x.comparator),this.Ka=new Map,this.Ua=new Rs,this.Wa={},this.Ga=new Map,this.za=Ie.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function uf(r,t,e=!0){const n=ou(r);let i;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await nu(n,t,e,!0),i}async function lf(r,t){const e=ou(r);await nu(e,t,!0,!1)}async function nu(r,t,e,n){const i=await Dd(r.localStore,Rt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await cf(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Xa(r.remoteStore,i),c}async function cf(r,t,e,n,i){r.Ha=(A,C,P)=>async function(M,D,Y,G){let K=D.view.Sa(Y);K.ls&&(K=await Vo(M.localStore,D.query,!1).then(({documents:v})=>D.view.Sa(v,K)));const rt=G&&G.targetChanges.get(D.targetId),Pt=G&&G.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(K,M.isPrimaryClient,rt,Pt);return qo(M,D.targetId,it.Ma),it.snapshot}(r,A,C,P);const o=await Vo(r.localStore,t,!0),u=new rf(t,o.gs),c=u.Sa(o.documents),d=un.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,d);qo(r,e,f.Ma);const _=new sf(t,e,u);return r.ka.set(t,_),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),f.snapshot}async function hf(r,t,e){const n=q(r),i=n.ka.get(t),o=n.qa.get(i.targetId);if(o.length>1)return n.qa.set(i.targetId,o.filter(u=>!ir(u,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ls(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&bs(n.remoteStore,i.targetId),ds(n,i.targetId)}).catch(tr)):(ds(n,i.targetId),await ls(n.localStore,i.targetId,!0))}async function df(r,t){const e=q(r),n=e.ka.get(t),i=e.qa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),bs(e.remoteStore,n.targetId))}async function ru(r,t){const e=q(r);try{const n=await bd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ka.get(o);u&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Ba=!0:i.modifiedDocuments.size>0?Q(u.Ba):i.removedDocuments.size>0&&(Q(u.Ba),u.Ba=!1))}),await iu(e,n,t)}catch(n){await tr(n)}}function Bo(r,t,e){const n=q(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ka.forEach((o,u)=>{const c=u.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const d=q(u);d.onlineState=c;let f=!1;d.queries.forEach((_,A)=>{for(const C of A.ta)C.sa(c)&&(f=!0)}),f&&xs(d)}(n.eventManager,t),i.length&&n.La.p_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ff(r,t,e){const n=q(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ka.get(t),o=i&&i.key;if(o){let u=new Z(x.comparator);u=u.insert(o,mt.newNoDocument(o,O.min()));const c=$().add(o),d=new lr(O.min(),new Map,new Z(B),u,c);await ru(n,d),n.$a=n.$a.remove(o),n.Ka.delete(t),Ms(n)}else await ls(n.localStore,t,!1).then(()=>ds(n,t,e)).catch(tr)}function ds(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ua.Sr(t).forEach(n=>{r.Ua.containsKey(n)||su(r,n)})}function su(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(bs(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ka.delete(e),Ms(r))}function qo(r,t,e){for(const n of e)n instanceof tu?(r.Ua.addReference(n.key,t),pf(r,n)):n instanceof eu?(V(Os,"Document no longer in limbo: "+n.key),r.Ua.removeReference(n.key,t),r.Ua.containsKey(n.key)||su(r,n.key)):L()}function pf(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(V(Os,"New document in limbo: "+e),r.Qa.add(n),Ms(r))}function Ms(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new x(X.fromString(t)),n=r.za.next();r.Ka.set(n,new of(e)),r.$a=r.$a.insert(e,n),Xa(r.remoteStore,new Bt(Rt(Ra(e.path)),n,"TargetPurposeLimboResolution",er.ae))}}async function iu(r,t,e){const n=q(r),i=[],o=[],u=[];n.ka.isEmpty()||(n.ka.forEach((c,d)=>{u.push(n.Ha(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,A?"current":"not-current")}if(f){i.push(f);const A=Ss.Yi(d.targetId,f);o.push(A)}}))}),await Promise.all(u),n.La.p_(i),await async function(d,f){const _=q(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(f,C=>R.forEach(C.Hi,P=>_.persistence.referenceDelegate.addReference(A,C.targetId,P)).next(()=>R.forEach(C.Ji,P=>_.persistence.referenceDelegate.removeReference(A,C.targetId,P)))))}catch(A){if(!Se(A))throw A;V(Ps,"Failed to update sequence numbers: "+A)}for(const A of f){const C=A.targetId;if(!A.fromCache){const P=_.Ts.get(C),N=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(N);_.Ts=_.Ts.insert(C,M)}}}(n.localStore,o))}async function mf(r,t){const e=q(r);if(!e.currentUser.isEqual(t)){V(Os,"User change. New user:",t.toKey());const n=await Ka(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(c=>{c.forEach(d=>{d.reject(new k(b.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await iu(e,n.Rs)}}function gf(r,t){const e=q(r),n=e.Ka.get(t);if(n&&n.Ba)return $().add(n.key);{let i=$();const o=e.qa.get(t);if(!o)return i;for(const u of o){const c=e.ka.get(u);i=i.unionWith(c.view.ba)}return i}}function ou(r){const t=q(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ru.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ff.bind(null,t),t.La.p_=tf.bind(null,t.eventManager),t.La.Ja=ef.bind(null,t.eventManager),t}class Jn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qa(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Pd(this.persistence,new Rd,t.initialUser,this.serializer)}Xa(t){return new Ha(Cs.ri,this.serializer)}Za(t){return new kd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jn.provider={build:()=>new Jn};class _f extends Jn{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){Q(this.persistence.referenceDelegate instanceof Yn);const n=this.persistence.referenceDelegate.garbageCollector;return new cd(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Ha(n=>Yn.ri(n,e),this.serializer)}}class fs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Bo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=mf.bind(null,this.syncEngine),await Wd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Yd}()}createDatastore(t){const e=Qa(t.databaseInfo.databaseId),n=function(o){return new Fd(o)}(t.databaseInfo);return function(o,u,c,d){return new $d(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new zd(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Bo(this.syncEngine,e,0),function(){return ko.D()?new ko:new xd}())}createSyncEngine(t,e){return function(i,o,u,c,d,f,_){const A=new af(i,o,u,c,d,f);return _&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=q(i);V(we,"RemoteStore shutting down."),o.W_.add(5),await ln(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}fs.provider={build:()=>new fs};/**
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
 */class yf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):kt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Wt="FirestoreClient";class Ef{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=jc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{V(Wt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(V(Wt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Za(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function zr(r,t){r.asyncQueue.verifyOperationInProgress(),V(Wt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Ka(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function $o(r,t){r.asyncQueue.verifyOperationInProgress();const e=await vf(r);V(Wt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Mo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Mo(t.remoteStore,i)),r._onlineComponents=t}async function vf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(Wt,"Using user provided OfflineComponentProvider");try{await zr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ye("Error using user provided cache. Falling back to memory cache: "+e),await zr(r,new Jn)}}else V(Wt,"Using default OfflineComponentProvider"),await zr(r,new _f(void 0));return r._offlineComponents}async function Tf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(Wt,"Using user provided OnlineComponentProvider"),await $o(r,r._uninitializedComponentsProvider._online)):(V(Wt,"Using default OnlineComponentProvider"),await $o(r,new fs))),r._onlineComponents}async function If(r){const t=await Tf(r),e=t.eventManager;return e.onListen=uf.bind(null,t.syncEngine),e.onUnlisten=hf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=lf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=df.bind(null,t.syncEngine),e}function wf(r,t,e={}){const n=new ne;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,d,f){const _=new yf({next:C=>{_.su(),u.enqueueAndForget(()=>Zd(o,A)),C.fromCache&&d.source==="server"?f.reject(new k(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(C)},error:C=>f.reject(C)}),A=new nf(c,_,{includeMetadataChanges:!0,Ta:!0});return Jd(o,A)}(await If(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function au(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const jo=new Map;function Af(r,t,e,n){if(t===!0&&n===!0)throw new k(b.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function zo(r){if(x.isDocumentKey(r))throw new k(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Rf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function ps(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Rf(r);throw new k(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */const uu="firestore.googleapis.com",Ho=!0;class Ko{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uu,this.ssl=Ho}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ho;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=za;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ud)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Af("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=au((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ls{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ko({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ko(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Mc;switch(n.type){case"firstParty":return new Bc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jo.get(e);n&&(V("ComponentProvider","Removing Datastore"),jo.delete(e),n.terminate())}(this),Promise.resolve()}}function Cf(r,t,e,n={}){var i;const o=(r=ps(r,Ls))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==uu&&o.host!==c&&ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:n});if(!jn(d,u)&&(r._setSettings(d),n.mockUserToken)){let f,_;if(typeof n.mockUserToken=="string")f=n.mockUserToken,_=pt.MOCK_USER;else{f=dl(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new pt(A)}r._authCredentials=new Lc(new da(f,_))}}/**
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
 */class hr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hr(this.firestore,t,this._query)}}class be{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new be(this.firestore,t,this._key)}}class _e extends hr{constructor(t,e,n){super(t,e,Ra(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new be(this.firestore,null,new x(t))}withConverter(t){return new _e(this.firestore,t,this._path)}}function Sf(r,t,...e){if(r=Tl(r),r instanceof Ls){const n=X.fromString(t,...e);return zo(n),new _e(r,null,n)}{if(!(r instanceof be||r instanceof _e))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(X.fromString(t,...e));return zo(n),new _e(r.firestore,null,n)}}/**
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
 */const Go="AsyncQueue";class Qo{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Wa(this,"async_queue_retry"),this.bu=()=>{const n=jr();n&&V(Go,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.Su=t;const e=jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=jr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new ne;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Se(t))throw t;V(Go,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.Su.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(n);throw kt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.Su=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=ks.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class lu extends Ls{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Qo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qo(t),this._firestoreClient=void 0,await t}}}function Pf(r,t){const e=typeof r=="object"?r:wc(),n=typeof r=="string"?r:Kn,i=yc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=cl("firestore");o&&Cf(i,...o)}return i}function bf(r){if(r._terminated)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Vf(r),r._firestoreClient}function Vf(r){var t,e,n;const i=r._freezeSettings(),o=function(c,d,f,_){return new nh(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,au(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Ef(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(r._componentsProvider))}/**
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
 */class Zn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zn(ut.fromBase64String(t))}catch(e){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Zn(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class cu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Df{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
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
 */class Nf{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}const kf=new RegExp("[~\\*/\\[\\]]");function xf(r,t,e){if(t.search(kf)>=0)throw Wo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new cu(...t.split("."))._internalPath}catch{throw Wo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Wo(r,t,e,n,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new k(b.INVALID_ARGUMENT,o+r+u)}/**
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
 */class hu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Of(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(du("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Of extends hu{data(){return super.data()}}function du(r,t){return typeof t=="string"?xf(r,t):t instanceof cu?t._internalPath:t._delegate._internalPath}/**
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
 */function Mf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lf{convertValue(t,e="none"){switch(Gt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Kt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return an(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Zr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new Nf(o)}convertGeoPoint(t){return new Df(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=rr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(rn(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);Q(ja(n));const i=new sn(n.get(1),n.get(3)),o=new x(n.popFirst(5));return i.isEqual(e)||kt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class Mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ff extends hu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(du("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class qn extends Ff{data(t={}){return super.data(t)}}class Uf{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Mn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new qn(this._firestore,this._userDataWriter,n.key,n,new Mn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const d=new qn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Mn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new qn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Mn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:Bf(c.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Bf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class qf extends Lf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Zn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new be(this.firestore,null,e)}}function $f(r){r=ps(r,hr);const t=ps(r.firestore,lu),e=bf(t),n=new qf(t);return Mf(r._query),wf(e,r._query).then(i=>new Uf(t,n,r,i))}(function(t,e=!0){(function(i){Ce=i})(Ic),Hn(new tn("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new lu(new Fc(n.getProvider("auth-internal")),new qc(u,n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(f.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),pe(to,eo,t),pe(to,eo,"esm2017")})();const jf={firebase:{apiKey:"AIzaSyBGYs1-A8RhDfcFoxch1RYsaHLum7T8Fvw",authDomain:"amorphous-arts.firebaseapp.com",projectId:"amorphous-arts",storageBucket:"amorphous-arts.firebasestorage.app",messagingSenderId:"742042448031",appId:"1:742042448031:web:13c0f76ad4778b3a4332aa"}},zf=jf.firebase,Hf=ra(zf),Kf=Pf(Hf),Gf=async()=>await Qf(Sf(Kf,"base_meals")),Qf=async(r="")=>{const t=await $f(r),e=t.size,n=Wf(e).sort(),i=[];let o=0;return t.forEach(u=>{o==n[0]&&(i.push(u.data()),n.shift()),n.length!=0&&o++}),i},Wf=r=>{let t="";const e=[];for(let n=0;n<2;n++)t=fu(r,t),e.push(t);return e},fu=(r,t)=>{let e=Math.floor(Math.random()*r);return e==t?fu(r,t):e},Ft=document.querySelector(".game-container"),Xf=async()=>{const r=await Gf();$i("meal-1",Ft,r[0]),Ft.insertAdjacentHTML("beforeend",Hr("Choose Meal 1","meal-1-trigger","meal-1")),Ft.insertAdjacentHTML("beforeend",Ju),$i("meal-2",Ft,r[1]),Ft.insertAdjacentHTML("beforeend",Hr("Choose Meal 2","meal-2-trigger","meal-2"))},Yf=()=>{document.querySelectorAll(".game-container .btn").forEach(r=>{r.addEventListener("click",()=>{const t=r.getAttribute("data-id");for(let e of[...Ft.children])e.id!==t&&(e.classList.add("fade-out"),setTimeout(()=>e.remove(),1e3));Ft.insertAdjacentHTML("beforeend",Zu()),Ft.insertAdjacentHTML("beforeend",Hr("Play Again !","","","/"))})})};document.addEventListener("DOMContentLoaded",async()=>{await Xf(),Wu(),Yf()});
