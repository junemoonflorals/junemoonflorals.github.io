import{r as i}from"./index.l2PZgWEW.js";import{r as m}from"./index.DY16rmGi.js";import{j as c}from"./jsx-runtime.chL-vPbI.js";function h(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function p(...r){return e=>r.forEach(n=>h(n,e))}function b(...r){return i.useCallback(p(...r),r)}var d=i.forwardRef((r,e)=>{const{children:n,...t}=r,o=i.Children.toArray(n),s=o.find(v);if(s){const l=s.props.children,a=o.map(u=>u===s?i.Children.count(l)>1?i.Children.only(null):i.isValidElement(l)?l.props.children:null:u);return c.jsx(f,{...t,ref:e,children:i.isValidElement(l)?i.cloneElement(l,void 0,a):null})}return c.jsx(f,{...t,ref:e,children:n})});d.displayName="Slot";var f=i.forwardRef((r,e)=>{const{children:n,...t}=r;if(i.isValidElement(n)){const o=C(n);return i.cloneElement(n,{...E(t,n.props),ref:e?p(e,o):o})}return i.Children.count(n)>1?i.Children.only(null):null});f.displayName="SlotClone";var y=({children:r})=>c.jsx(c.Fragment,{children:r});function v(r){return i.isValidElement(r)&&r.type===y}function E(r,e){const n={...e};for(const t in e){const o=r[t],s=e[t];/^on[A-Z]/.test(t)?o&&s?n[t]=(...a)=>{s(...a),o(...a)}:o&&(n[t]=o):t==="style"?n[t]={...o,...s}:t==="className"&&(n[t]=[o,s].filter(Boolean).join(" "))}return{...r,...n}}function C(r){let e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?r.props.ref:r.props.ref||r.ref)}var g=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],j=g.reduce((r,e)=>{const n=i.forwardRef((t,o)=>{const{asChild:s,...l}=t,a=s?d:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(a,{...l,ref:o})});return n.displayName=`Primitive.${e}`,{...r,[e]:n}},{});function w(r,e){r&&m.flushSync(()=>r.dispatchEvent(e))}export{j as P,d as S,w as d,b as u};
