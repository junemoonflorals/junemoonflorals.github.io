import{r as c,a as Re}from"./index.l2PZgWEW.js";import{j as F}from"./jsx-runtime.chL-vPbI.js";import{u as ee,P as j,d as Oe}from"./index.Bm7yMb5A.js";import{R as Le}from"./index.DY16rmGi.js";function X(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),n===!1||!o.defaultPrevented)return t?.(o)}}function jt(e,t){const n=c.createContext(t),r=s=>{const{children:u,...a}=s,m=c.useMemo(()=>a,Object.values(a));return F.jsx(n.Provider,{value:m,children:u})};r.displayName=e+"Provider";function o(s){const u=c.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[r,o]}function Ht(e,t=[]){let n=[];function r(s,u){const a=c.createContext(u),m=n.length;n=[...n,u];const l=d=>{const{scope:h,children:y,...S}=d,i=h?.[e]?.[m]||a,f=c.useMemo(()=>S,Object.values(S));return F.jsx(i.Provider,{value:f,children:y})};l.displayName=s+"Provider";function v(d,h){const y=h?.[e]?.[m]||a,S=c.useContext(y);if(S)return S;if(u!==void 0)return u;throw new Error(`\`${d}\` must be used within \`${s}\``)}return[l,v]}const o=()=>{const s=n.map(u=>c.createContext(u));return function(a){const m=a?.[e]||s;return c.useMemo(()=>({[`__scope${e}`]:{...a,[e]:m}}),[a,m])}};return o.scopeName=e,[r,xe(o,...t)]}function xe(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const u=r.reduce((a,{useScope:m,scopeName:l})=>{const d=m(s)[`__scope${l}`];return{...a,...d}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}var ve=globalThis?.document?c.useLayoutEffect:()=>{},Te=Re.useId||(()=>{}),Ae=0;function Kt(e){const[t,n]=c.useState(Te());return ve(()=>{n(r=>r??String(Ae++))},[e]),t?`radix-${t}`:""}function x(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>t.current?.(...n),[])}function Xt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=ke({defaultProp:t,onChange:n}),s=e!==void 0,u=s?e:r,a=x(n),m=c.useCallback(l=>{if(s){const d=typeof l=="function"?l(e):l;d!==e&&a(d)}else o(l)},[s,e,o,a]);return[u,m]}function ke({defaultProp:e,onChange:t}){const n=c.useState(e),[r]=n,o=c.useRef(r),s=x(t);return c.useEffect(()=>{o.current!==r&&(s(r),o.current=r)},[r,o,s]),n}function De(e,t=globalThis?.document){const n=x(e);c.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Fe="DismissableLayer",Q="dismissableLayer.update",Me="dismissableLayer.pointerDownOutside",Ne="dismissableLayer.focusOutside",te,he=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ie=c.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:u,onDismiss:a,...m}=e,l=c.useContext(he),[v,d]=c.useState(null),h=v?.ownerDocument??globalThis?.document,[,y]=c.useState({}),S=ee(t,E=>d(E)),i=Array.from(l.layers),[f]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),p=i.indexOf(f),C=v?i.indexOf(v):-1,g=l.layersWithOutsidePointerEventsDisabled.size>0,b=C>=p,w=_e(E=>{const O=E.target,M=[...l.branches].some(K=>K.contains(O));!b||M||(o?.(E),u?.(E),E.defaultPrevented||a?.())},h),R=Ue(E=>{const O=E.target;[...l.branches].some(K=>K.contains(O))||(s?.(E),u?.(E),E.defaultPrevented||a?.())},h);return De(E=>{C===l.layers.size-1&&(r?.(E),!E.defaultPrevented&&a&&(E.preventDefault(),a()))},h),c.useEffect(()=>{if(v)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(te=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(v)),l.layers.add(v),ne(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=te)}},[v,h,n,l]),c.useEffect(()=>()=>{v&&(l.layers.delete(v),l.layersWithOutsidePointerEventsDisabled.delete(v),ne())},[v,l]),c.useEffect(()=>{const E=()=>y({});return document.addEventListener(Q,E),()=>document.removeEventListener(Q,E)},[]),F.jsx(j.div,{...m,ref:S,style:{pointerEvents:g?b?"auto":"none":void 0,...e.style},onFocusCapture:X(e.onFocusCapture,R.onFocusCapture),onBlurCapture:X(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:X(e.onPointerDownCapture,w.onPointerDownCapture)})});Ie.displayName=Fe;var Be="DismissableLayerBranch",We=c.forwardRef((e,t)=>{const n=c.useContext(he),r=c.useRef(null),o=ee(t,r);return c.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),F.jsx(j.div,{...e,ref:o})});We.displayName=Be;function _e(e,t=globalThis?.document){const n=x(e),r=c.useRef(!1),o=c.useRef(()=>{});return c.useEffect(()=>{const s=a=>{if(a.target&&!r.current){let m=function(){me(Me,n,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=m,t.addEventListener("click",o.current,{once:!0})):m()}else t.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Ue(e,t=globalThis?.document){const n=x(e),r=c.useRef(!1);return c.useEffect(()=>{const o=s=>{s.target&&!r.current&&me(Ne,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ne(){const e=new CustomEvent(Q);document.dispatchEvent(e)}function me(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Oe(o,s):o.dispatchEvent(s)}var Y="focusScope.autoFocusOnMount",$="focusScope.autoFocusOnUnmount",re={bubbles:!1,cancelable:!0},je="FocusScope",He=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:s,...u}=e,[a,m]=c.useState(null),l=x(o),v=x(s),d=c.useRef(null),h=ee(t,i=>m(i)),y=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let i=function(g){if(y.paused||!a)return;const b=g.target;a.contains(b)?d.current=b:L(d.current,{select:!0})},f=function(g){if(y.paused||!a)return;const b=g.relatedTarget;b!==null&&(a.contains(b)||L(d.current,{select:!0}))},p=function(g){if(document.activeElement===document.body)for(const w of g)w.removedNodes.length>0&&L(a)};document.addEventListener("focusin",i),document.addEventListener("focusout",f);const C=new MutationObserver(p);return a&&C.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",i),document.removeEventListener("focusout",f),C.disconnect()}}},[r,a,y.paused]),c.useEffect(()=>{if(a){ae.add(y);const i=document.activeElement;if(!a.contains(i)){const p=new CustomEvent(Y,re);a.addEventListener(Y,l),a.dispatchEvent(p),p.defaultPrevented||(Ke(ze(pe(a)),{select:!0}),document.activeElement===i&&L(a))}return()=>{a.removeEventListener(Y,l),setTimeout(()=>{const p=new CustomEvent($,re);a.addEventListener($,v),a.dispatchEvent(p),p.defaultPrevented||L(i??document.body,{select:!0}),a.removeEventListener($,v),ae.remove(y)},0)}}},[a,l,v,y]);const S=c.useCallback(i=>{if(!n&&!r||y.paused)return;const f=i.key==="Tab"&&!i.altKey&&!i.ctrlKey&&!i.metaKey,p=document.activeElement;if(f&&p){const C=i.currentTarget,[g,b]=Xe(C);g&&b?!i.shiftKey&&p===b?(i.preventDefault(),n&&L(g,{select:!0})):i.shiftKey&&p===g&&(i.preventDefault(),n&&L(b,{select:!0})):p===C&&i.preventDefault()}},[n,r,y.paused]);return F.jsx(j.div,{tabIndex:-1,...u,ref:h,onKeyDown:S})});He.displayName=je;function Ke(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(L(r,{select:t}),document.activeElement!==n)return}function Xe(e){const t=pe(e),n=oe(t,e),r=oe(t.reverse(),e);return[n,r]}function pe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function oe(e,t){for(const n of e)if(!Ye(n,{upTo:t}))return n}function Ye(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function $e(e){return e instanceof HTMLInputElement&&"select"in e}function L(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&$e(e)&&t&&e.select()}}var ae=Ve();function Ve(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=ce(e,t),e.unshift(t)},remove(t){e=ce(e,t),e[0]?.resume()}}}function ce(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function ze(e){return e.filter(t=>t.tagName!=="A")}var Ge="Portal",Ze=c.forwardRef((e,t)=>{const{container:n,...r}=e,[o,s]=c.useState(!1);ve(()=>s(!0),[]);const u=n||o&&globalThis?.document?.body;return u?Le.createPortal(F.jsx(j.div,{...r,ref:t}),u):null});Ze.displayName=Ge;var V=0;function Yt(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??se()),document.body.insertAdjacentElement("beforeend",e[1]??se()),V++,()=>{V===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),V--}},[])}function se(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var P=function(){return P=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},P.apply(this,arguments)};function ye(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function qe(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var _="right-scroll-bar-position",U="width-before-scroll-bar",Qe="with-scroll-bars-hidden",Je="--removed-body-scroll-bar-size";function z(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function et(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var tt=typeof window<"u"?c.useLayoutEffect:c.useEffect,ie=new WeakMap;function nt(e,t){var n=et(null,function(r){return e.forEach(function(o){return z(o,r)})});return tt(function(){var r=ie.get(n);if(r){var o=new Set(r),s=new Set(e),u=n.current;o.forEach(function(a){s.has(a)||z(a,null)}),s.forEach(function(a){o.has(a)||z(a,u)})}ie.set(n,e)},[e]),n}function rt(e){return e}function ot(e,t){t===void 0&&(t=rt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var u=t(s,r);return n.push(u),function(){n=n.filter(function(a){return a!==u})}},assignSyncMedium:function(s){for(r=!0;n.length;){var u=n;n=[],u.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){r=!0;var u=[];if(n.length){var a=n;n=[],a.forEach(s),u=n}var m=function(){var v=u;u=[],v.forEach(s)},l=function(){return Promise.resolve().then(m)};l(),n={push:function(v){u.push(v),l()},filter:function(v){return u=u.filter(v),n}}}};return o}function at(e){e===void 0&&(e={});var t=ot(null);return t.options=P({async:!0,ssr:!1},e),t}var Ee=function(e){var t=e.sideCar,n=ye(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,P({},n))};Ee.isSideCarExport=!0;function ct(e,t){return e.useMedium(t),Ee}var ge=at(),G=function(){},H=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:G,onWheelCapture:G,onTouchMoveCapture:G}),o=r[0],s=r[1],u=e.forwardProps,a=e.children,m=e.className,l=e.removeScrollBar,v=e.enabled,d=e.shards,h=e.sideCar,y=e.noIsolation,S=e.inert,i=e.allowPinchZoom,f=e.as,p=f===void 0?"div":f,C=e.gapMode,g=ye(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=h,w=nt([n,t]),R=P(P({},g),o);return c.createElement(c.Fragment,null,v&&c.createElement(b,{sideCar:ge,removeScrollBar:l,shards:d,noIsolation:y,inert:S,setCallbacks:s,allowPinchZoom:!!i,lockRef:n,gapMode:C}),u?c.cloneElement(c.Children.only(a),P(P({},R),{ref:w})):c.createElement(p,P({},R,{className:m,ref:w}),a))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};H.classNames={fullWidth:U,zeroRight:_};var st=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function it(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=st();return t&&e.setAttribute("nonce",t),e}function ut(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function lt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var dt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=it())&&(ut(t,n),lt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ft=function(){var e=dt();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},be=function(){var e=ft(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},vt={left:0,top:0,right:0,gap:0},Z=function(e){return parseInt(e||"",10)||0},ht=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Z(n),Z(r),Z(o)]},mt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return vt;var t=ht(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},pt=be(),D="data-scroll-locked",yt=function(e,t,n,r){var o=e.left,s=e.top,u=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Qe,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body[`).concat(D,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(_,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(U,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(_," .").concat(_,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(U," .").concat(U,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(D,`] {
    `).concat(Je,": ").concat(a,`px;
  }
`)},ue=function(){var e=parseInt(document.body.getAttribute(D)||"0",10);return isFinite(e)?e:0},Et=function(){c.useEffect(function(){return document.body.setAttribute(D,(ue()+1).toString()),function(){var e=ue()-1;e<=0?document.body.removeAttribute(D):document.body.setAttribute(D,e.toString())}},[])},gt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Et();var s=c.useMemo(function(){return mt(o)},[o]);return c.createElement(pt,{styles:yt(s,!t,o,n?"":"!important")})},J=!1;if(typeof window<"u")try{var N=Object.defineProperty({},"passive",{get:function(){return J=!0,!0}});window.addEventListener("test",N,N),window.removeEventListener("test",N,N)}catch{J=!1}var T=J?{passive:!1}:!1,bt=function(e){return e.tagName==="TEXTAREA"},Se=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!bt(e)&&n[t]==="visible")},St=function(e){return Se(e,"overflowY")},wt=function(e){return Se(e,"overflowX")},le=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=we(e,r);if(o){var s=Ce(e,r),u=s[1],a=s[2];if(u>a)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Ct=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Pt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},we=function(e,t){return e==="v"?St(t):wt(t)},Ce=function(e,t){return e==="v"?Ct(t):Pt(t)},Rt=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ot=function(e,t,n,r,o){var s=Rt(e,window.getComputedStyle(t).direction),u=s*r,a=n.target,m=t.contains(a),l=!1,v=u>0,d=0,h=0;do{var y=Ce(e,a),S=y[0],i=y[1],f=y[2],p=i-f-s*S;(S||p)&&we(e,a)&&(d+=p,h+=S),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!m&&a!==document.body||m&&(t.contains(a)||t===a));return(v&&(Math.abs(d)<1||!o)||!v&&(Math.abs(h)<1||!o))&&(l=!0),l},I=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},de=function(e){return[e.deltaX,e.deltaY]},fe=function(e){return e&&"current"in e?e.current:e},Lt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},xt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Tt=0,A=[];function At(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState(Tt++)[0],s=c.useState(be)[0],u=c.useRef(e);c.useEffect(function(){u.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var i=qe([e.lockRef.current],(e.shards||[]).map(fe),!0).filter(Boolean);return i.forEach(function(f){return f.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),i.forEach(function(f){return f.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=c.useCallback(function(i,f){if("touches"in i&&i.touches.length===2||i.type==="wheel"&&i.ctrlKey)return!u.current.allowPinchZoom;var p=I(i),C=n.current,g="deltaX"in i?i.deltaX:C[0]-p[0],b="deltaY"in i?i.deltaY:C[1]-p[1],w,R=i.target,E=Math.abs(g)>Math.abs(b)?"h":"v";if("touches"in i&&E==="h"&&R.type==="range")return!1;var O=le(E,R);if(!O)return!0;if(O?w=E:(w=E==="v"?"h":"v",O=le(E,R)),!O)return!1;if(!r.current&&"changedTouches"in i&&(g||b)&&(r.current=w),!w)return!0;var M=r.current||w;return Ot(M,f,i,M==="h"?g:b,!0)},[]),m=c.useCallback(function(i){var f=i;if(!(!A.length||A[A.length-1]!==s)){var p="deltaY"in f?de(f):I(f),C=t.current.filter(function(w){return w.name===f.type&&(w.target===f.target||f.target===w.shadowParent)&&Lt(w.delta,p)})[0];if(C&&C.should){f.cancelable&&f.preventDefault();return}if(!C){var g=(u.current.shards||[]).map(fe).filter(Boolean).filter(function(w){return w.contains(f.target)}),b=g.length>0?a(f,g[0]):!u.current.noIsolation;b&&f.cancelable&&f.preventDefault()}}},[]),l=c.useCallback(function(i,f,p,C){var g={name:i,delta:f,target:p,should:C,shadowParent:kt(p)};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(b){return b!==g})},1)},[]),v=c.useCallback(function(i){n.current=I(i),r.current=void 0},[]),d=c.useCallback(function(i){l(i.type,de(i),i.target,a(i,e.lockRef.current))},[]),h=c.useCallback(function(i){l(i.type,I(i),i.target,a(i,e.lockRef.current))},[]);c.useEffect(function(){return A.push(s),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",m,T),document.addEventListener("touchmove",m,T),document.addEventListener("touchstart",v,T),function(){A=A.filter(function(i){return i!==s}),document.removeEventListener("wheel",m,T),document.removeEventListener("touchmove",m,T),document.removeEventListener("touchstart",v,T)}},[]);var y=e.removeScrollBar,S=e.inert;return c.createElement(c.Fragment,null,S?c.createElement(s,{styles:xt(o)}):null,y?c.createElement(gt,{gapMode:e.gapMode}):null)}function kt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Dt=ct(ge,At);var Ft=c.forwardRef(function(e,t){return c.createElement(H,P({},e,{ref:t,sideCar:Dt}))});Ft.classNames=H.classNames;var Mt=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},k=new WeakMap,B=new WeakMap,W={},q=0,Pe=function(e){return e&&(e.host||Pe(e.parentNode))},Nt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Pe(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},It=function(e,t,n,r){var o=Nt(t,Array.isArray(e)?e:[e]);W[n]||(W[n]=new WeakMap);var s=W[n],u=[],a=new Set,m=new Set(o),l=function(d){!d||a.has(d)||(a.add(d),l(d.parentNode))};o.forEach(l);var v=function(d){!d||m.has(d)||Array.prototype.forEach.call(d.children,function(h){if(a.has(h))v(h);else try{var y=h.getAttribute(r),S=y!==null&&y!=="false",i=(k.get(h)||0)+1,f=(s.get(h)||0)+1;k.set(h,i),s.set(h,f),u.push(h),i===1&&S&&B.set(h,!0),f===1&&h.setAttribute(n,"true"),S||h.setAttribute(r,"true")}catch(p){console.error("aria-hidden: cannot operate on ",h,p)}})};return v(t),a.clear(),q++,function(){u.forEach(function(d){var h=k.get(d)-1,y=s.get(d)-1;k.set(d,h),s.set(d,y),h||(B.has(d)||d.removeAttribute(r),B.delete(d)),y||d.removeAttribute(n)}),q--,q||(k=new WeakMap,k=new WeakMap,B=new WeakMap,W={})}},$t=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Mt(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),It(r,o,n,"aria-hidden")):function(){return null}};export{Ie as D,He as F,Ze as P,Ft as R,X as a,Yt as b,Ht as c,jt as d,Xt as e,Kt as f,x as g,$t as h,ve as u};
