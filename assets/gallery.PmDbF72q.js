import{j as e}from"./cn.OipofWVx.js";import{_ as p,R as v,L as b,a as j}from"./image.B3W-BZb5.js";import{r as s}from"./index.l2PZgWEW.js";import"./index.CwxzPD9w.js";import"./index.DY16rmGi.js";const y={0:610/768,1:610/598,2:610/850,3:610/500,4:610/854,5:610/464,6:610/565,7:610/382,8:610/520};function S({items:u}){const o=s.useRef(null),[a,l]=s.useState(1),[n,f]=s.useState(!0),[d,g]=s.useState(2),[h,c]=s.useState(1),[x]=s.useState(p.shuffle(u)),m=s.useMemo(()=>{const t=[];for(let r=0;r<a;r++)t.push([]);return x.slice(0,d*h).forEach((r,i)=>{const w=i%a;t[w].push(e.jsx("div",{children:e.jsx(v,{ratio:y[i%9],children:e.jsx(b,{item:r})})},r._id))}),t.map((r,i)=>e.jsx("div",{className:"grid w-full max-w-lg gap-8 self-start md:max-w-full md:gap-12",children:r},i))},[x,d,h,a]);return s.useEffect(()=>{const t=new IntersectionObserver(([r])=>{r.isIntersecting&&!n&&g(i=>i+1)},{root:null,rootMargin:"0px",threshold:1});return o.current&&t.observe(o.current),()=>{o.current&&t.unobserve(o.current)}},[n]),s.useEffect(()=>{function t(){const r=window.matchMedia("(min-width: 1024px)").matches,i=window.matchMedia("(min-width: 768px)").matches;switch(!0){case r:l(3),c(3);break;case i:l(2),c(2);break;default:l(1),c(1);break}}return t(),f(!1),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),e.jsxs("section",{className:"w-full bg-accent px-4 py-16 text-accent-foreground md:px-8 md:py-24 lg:px-10",children:[e.jsxs("div",{className:"mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-8 md:items-end",children:[e.jsxs("div",{className:"flex w-fit items-center gap-4",children:[e.jsxs("a",{href:"/portfolio","data-active":!0,className:"inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-transparent transition-colors hover:border-border hover:bg-green focus-visible:border-border focus-visible:bg-green focus-visible:outline-none data-[active=true]:border-border data-[active=true]:bg-green",children:[e.jsx("span",{className:"sr-only",children:"Gallery"}),e.jsxs("svg",{width:"28",height:"29",fill:"none",viewBox:"0 0 28 29",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0.75",y:"0.75",width:"11.5",height:"27.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"0.75",width:"11.5",height:"7.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"11.75",width:"11.5",height:"16.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"})]})]}),e.jsxs("a",{href:"/portfolio/locations",className:"inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-transparent transition-colors hover:border-border hover:bg-green focus-visible:border-border focus-visible:bg-green focus-visible:outline-none data-[active=true]:border-border data-[active=true]:bg-green",children:[e.jsx("span",{className:"sr-only",children:"Gallery"}),e.jsxs("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0.75",y:"0.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"0.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"0.75",y:"15.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"15.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"})]})]})]}),!n&&e.jsx("div",{className:"grid w-full grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3",children:m}),n&&e.jsx("div",{className:"flex w-full items-center justify-center pt-16",children:e.jsx(j,{className:"h-4 w-4 animate-spin"})})]}),e.jsx("div",{ref:o})]})}export{S as PortfolioGallary};
