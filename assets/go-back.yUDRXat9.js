import{j as e}from"./jsx-runtime.chL-vPbI.js";import{r as t}from"./index.l2PZgWEW.js";function l(){const i=t.useMemo(()=>document.referrer.startsWith(window.location.origin),[]),n=t.useCallback(()=>{window.history.back()},[]);return i?e.jsx("button",{onClick:n,className:"relative inline-flex w-full max-w-md select-none items-center justify-center rounded-full bg-dark px-12 py-4 text-base font-semibold text-dark-foreground ring-dark ring-offset-4 ring-offset-green transition-all duration-1000 animate-in fade-in-0 focus-visible:outline-none focus-visible:ring disabled:cursor-not-allowed disabled:opacity-85 lg:w-fit lg:text-2xl",children:"Go back"}):e.jsx("a",{href:"/",className:"relative inline-flex w-full max-w-md select-none items-center justify-center rounded-full bg-dark px-12 py-4 text-base font-semibold text-dark-foreground ring-dark ring-offset-4 ring-offset-green transition-all duration-1000 animate-in fade-in-0 focus-visible:outline-none focus-visible:ring disabled:cursor-not-allowed disabled:opacity-85 lg:w-fit lg:text-2xl",children:"Go home"})}export{l as GoBack};