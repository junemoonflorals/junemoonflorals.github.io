import{j as t}from"./jsx-runtime.chL-vPbI.js";import{r}from"./index.l2PZgWEW.js";function b({item:s}){const e=r.useRef(null),[o,c]=r.useState(!1),[n,a]=r.useState(!1),i=r.useCallback(()=>{c(!1)},[]);return r.useEffect(()=>{a(!0)},[]),r.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(a(!0),e.current&&l.unobserve(e.current))},{root:null,rootMargin:"0px",threshold:.1});return e.current&&l.observe(e.current),()=>{e.current&&l.unobserve(e.current)}},[]),t.jsxs("div",{ref:e,className:"relative h-full w-full",children:[(!n||o)&&t.jsx("img",{draggable:"false",src:`${s.image}?blur=50&w=8&h=8`,className:"absolute z-0 h-full w-full select-none object-cover object-center"}),n&&t.jsxs("div",{className:"group relative z-0 flex h-full w-full items-center justify-center",children:[t.jsx("span",{className:"absolute inset-0 z-10 flex select-none items-center justify-center bg-black/50 px-4 text-center font-serif text-2xl uppercase tracking-normal text-dark-foreground opacity-0 transition-all group-hover:opacity-100",children:s.location}),t.jsx("img",{loading:"lazy",decoding:"async",draggable:"false",onLoad:i,src:s.image,className:"relative z-0 h-full w-full select-none object-cover object-center transition-all group-hover:blur-[2px]"})]})]})}export{b as LazyImage,b as default};
