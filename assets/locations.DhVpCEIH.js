import{j as e}from"./jsx-runtime.chL-vPbI.js";import{_ as p,R as v,L as b}from"./image.82GAgwKn.js";import{r as s}from"./index.l2PZgWEW.js";import{L as j}from"./loader-circle.CSW4RjiQ.js";import"./index.Bm7yMb5A.js";import"./index.DY16rmGi.js";import"./cn._qghvgfj.js";import"./hooks.dxSt24C1.js";import"./createLucideIcon.CpY7988V.js";function M({locations:f}){const i=s.useRef(null),[n,a]=s.useState(1),[l,u]=s.useState(!0),[d,g]=s.useState(2),[h,c]=s.useState(1),[x]=s.useState(p.shuffle(f)),m=s.useMemo(()=>{const t=[];for(let r=0;r<n;r++)t.push([]);return x.slice(0,d*h).forEach((r,o)=>{const w=o%n;t[w].push(e.jsx("div",{className:"w-full",children:e.jsx(v,{ratio:360/436,children:e.jsxs("a",{href:`/portfolio/locations/${r.slug}`,className:"group flex h-full w-full flex-col gap-5 focus-visible:outline-none",children:[e.jsx("div",{className:"w-full flex-1 grow",children:e.jsx(b,{label:"View location",item:r})}),e.jsx("h3",{className:"text-center font-serif text-2xl uppercase text-accent-foreground",children:r.location})]})})},r._id))}),t.map((r,o)=>e.jsx("div",{className:"grid w-full max-w-lg gap-8 self-start md:max-w-full md:gap-12",children:r},o))},[x,d,h,n]);return s.useEffect(()=>{const t=new IntersectionObserver(([r])=>{r.isIntersecting&&!l&&g(o=>o+1)},{root:null,rootMargin:"0px",threshold:1});return i.current&&t.observe(i.current),()=>{i.current&&t.unobserve(i.current)}},[l]),s.useEffect(()=>{function t(){const r=window.matchMedia("(min-width: 1024px)").matches,o=window.matchMedia("(min-width: 768px)").matches;switch(!0){case r:a(3),c(3);break;case o:a(2),c(2);break;default:a(1),c(1);break}}return t(),u(!1),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),e.jsxs("section",{className:"w-full bg-accent px-4 py-16 text-accent-foreground md:px-8 md:py-24 lg:px-10",children:[e.jsxs("div",{className:"mx-auto flex w-full max-w-screen-2xl flex-col items-center gap-8 md:items-end",children:[e.jsxs("div",{className:"flex w-fit items-center gap-4",children:[e.jsxs("a",{href:"/portfolio",className:"inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-transparent transition-colors hover:border-border hover:bg-green focus-visible:border-border focus-visible:bg-green focus-visible:outline-none data-[active=true]:border-border data-[active=true]:bg-green",children:[e.jsx("span",{className:"sr-only",children:"Gallery"}),e.jsxs("svg",{width:"28",height:"29",fill:"none",viewBox:"0 0 28 29",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0.75",y:"0.75",width:"11.5",height:"27.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"0.75",width:"11.5",height:"7.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"11.75",width:"11.5",height:"16.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"})]})]}),e.jsxs("a",{"data-active":!0,href:"/portfolio/locations",className:"inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-transparent transition-colors hover:border-border hover:bg-green focus-visible:border-border focus-visible:bg-green focus-visible:outline-none data-[active=true]:border-border data-[active=true]:bg-green",children:[e.jsx("span",{className:"sr-only",children:"Gallery"}),e.jsxs("svg",{width:"28",height:"28",fill:"none",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0.75",y:"0.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"0.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"0.75",y:"15.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"}),e.jsx("rect",{x:"15.75",y:"15.75",width:"11.5",height:"11.5",rx:"1.25",stroke:"#5A5A01",strokeWidth:"1.5"})]})]})]}),!l&&e.jsx("div",{className:"grid w-full grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3",children:m}),l&&e.jsx("div",{className:"flex w-full items-center justify-center pt-16",children:e.jsx(j,{className:"h-4 w-4 animate-spin"})})]}),e.jsx("div",{ref:i})]})}export{M as PortfolioLocations};