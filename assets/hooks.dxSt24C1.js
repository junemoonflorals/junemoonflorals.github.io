import{r as o}from"./index.l2PZgWEW.js";function c(e,n){const[t,s]=o.useState(e);return o.useEffect(()=>{const u=setTimeout(()=>{s(e)},n);return()=>{clearTimeout(u)}},[e,n]),t}function r(){const[e,n]=o.useState({x:0,y:0});return o.useEffect(()=>{const t=()=>{n({x:window.scrollX,y:window.scrollY})};return window.addEventListener("scroll",t),t(),()=>{window.removeEventListener("scroll",t)}},[]),e}function f(){const{y:e}=r();return o.useMemo(()=>{if(typeof window>"u")return!1;const t=window?.matchMedia("(min-width: 1024px)")?.matches??!1?112:160;return e>t},[e])}function l(e){const{y:n}=r();return o.useMemo(()=>{if(typeof window>"u")return!1;const t=document.getElementById(e);return t?n>=t.offsetTop:!1},[n])}export{l as a,f as b,c as u};