import{r as o}from"./index.l2PZgWEW.js";import{r as v}from"./index.DY16rmGi.js";import{j as c}from"./jsx-runtime.chL-vPbI.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p=(...e)=>e.filter((r,t,n)=>!!r&&n.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=o.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:i="",children:s,iconNode:l,...a},u)=>o.createElement("svg",{ref:u,...y,width:r,height:r,stroke:e,strokeWidth:n?Number(t)*24/Number(r):t,className:p("lucide",i),...a},[...l.map(([h,g])=>o.createElement(h,g)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(e,r)=>{const t=o.forwardRef(({className:n,...i},s)=>o.createElement(C,{ref:s,iconNode:r,className:p(`lucide-${w(e)}`,n),...i}));return t.displayName=`${e}`,t};function E(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function d(...e){return r=>e.forEach(t=>E(t,r))}function O(...e){return o.useCallback(d(...e),e)}var m=o.forwardRef((e,r)=>{const{children:t,...n}=e,i=o.Children.toArray(t),s=i.find(x);if(s){const l=s.props.children,a=i.map(u=>u===s?o.Children.count(l)>1?o.Children.only(null):o.isValidElement(l)?l.props.children:null:u);return c.jsx(f,{...n,ref:r,children:o.isValidElement(l)?o.cloneElement(l,void 0,a):null})}return c.jsx(f,{...n,ref:r,children:t})});m.displayName="Slot";var f=o.forwardRef((e,r)=>{const{children:t,...n}=e;if(o.isValidElement(t)){const i=j(t);return o.cloneElement(t,{...R(n,t.props),ref:r?d(r,i):i})}return o.Children.count(t)>1?o.Children.only(null):null});f.displayName="SlotClone";var b=({children:e})=>c.jsx(c.Fragment,{children:e});function x(e){return o.isValidElement(e)&&e.type===b}function R(e,r){const t={...r};for(const n in r){const i=e[n],s=r[n];/^on[A-Z]/.test(n)?i&&s?t[n]=(...a)=>{s(...a),i(...a)}:i&&(t[n]=i):n==="style"?t[n]={...i,...s}:n==="className"&&(t[n]=[i,s].filter(Boolean).join(" "))}return{...e,...t}}function j(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var N=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],V=N.reduce((e,r)=>{const t=o.forwardRef((n,i)=>{const{asChild:s,...l}=n,a=s?m:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(a,{...l,ref:i})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function W(e,r){e&&v.flushSync(()=>e.dispatchEvent(r))}export{V as P,m as S,k as c,W as d,O as u};
