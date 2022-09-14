import{r as c,a as d}from"./react.432bdd35.js";import{c as N}from"./react-dom.28efd146.js";import{H as S}from"./react-router-dom.cb564caa.js";import{u as x,Q as F,a as P}from"./react-query.5508b9e8.js";import{c as Q,j as e,a as l,T as R,C as O,F as m,b as M,B,d as W,e as j,f as z,g as H,I as _,h as q,P as V,S as h,i as U,k as v,l as G,m as p,u as k,n as w,o as K,p as J,A as X,q as Y,r as Z,M as D,s as I}from"./@mui.043ef480.js";import{E as ee}from"./react-error-boundary.dce83f01.js";import{c as te}from"./clsx.09c75e33.js";import{u as T,a as $,b as ne,c as u}from"./react-router.4fe7f937.js";import"./@babel.940d80f2.js";import"./scheduler.153b3889.js";import"./history.425c1f62.js";import"./react-is.8410b3df.js";import"./@emotion.3b18ba21.js";import"./hoist-non-react-statics.0f695828.js";import"./stylis.471761e6.js";import"./react-transition-group.3be7fa38.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const A=c.exports.createContext({toggleColorMode:()=>{}});function re({children:r}){const[n,t]=c.exports.useState("light"),i=c.exports.useMemo(()=>({toggleColorMode:()=>{t(s=>s==="light"?"dark":"light")}}),[]),o=c.exports.useMemo(()=>Q({palette:{mode:n}}),[n]);return e(A.Provider,{value:i,children:l(R,{theme:o,children:[e(O,{}),r]})})}const oe=(r,n)=>{},ie=({error:r,resetErrorBoundary:n})=>e(m,{children:"xxx"});function se({children:r}){return e(ee,{FallbackComponent:ie,onError:oe,children:r})}function le(){const r=T(),[n,t]=c.exports.useState("home"),i=[{label:"\u89D2\u8272",value:"characters",icon:e(j,{})},{label:"\u9996\u9875",value:"home",icon:e(z,{})},{label:"\u6B66\u5668",value:"weapons",icon:e(H,{})}];return c.exports.useEffect(()=>{r(`/${n}`)},[n]),e(M,{fixed:!0,maxWidth:"xs",sx:{position:"fixed",bottom:0,left:0,right:0},style:{padding:0},children:e(B,{value:n,onChange:(o,s)=>{t(s)},children:i.map(({value:o,icon:s,label:a})=>e(W,{label:a,value:o,icon:s},o))})})}const ae="https://api.minigg.cn/characters",y=async r=>(await fetch(`${ae}?query=${r}`)).json(),ce=d.memo(function({name:n}){var a,C,b,E;const t=T(),{data:i,isLoading:o,isError:s}=x(["characters-list-item",n],()=>y(n));return e(_,{onClick:()=>t(`/character/${n}`,{state:{hiddenBottomNaviation:q}}),children:l(V,{elevation:10,style:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(250, 250, 250, 0.5)"},children:[!((a=i==null?void 0:i.images)!=null&&a.icon)&&e(h,{variant:"rectangular",width:85,height:85,animation:"wave"}),((C=i==null?void 0:i.images)==null?void 0:C.icon)&&e("img",{src:(b=i==null?void 0:i.images)==null?void 0:b.icon,srcSet:(E=i==null?void 0:i.images)==null?void 0:E.icon,alt:n,loading:"lazy",style:{width:"85px",height:"85px"}})]})})});function ue({dataSource:r,loading:n}){return n?e(m,{children:"Loading..."}):!n&&(!r||!(r instanceof Array))?e(m,{children:"\u65E0\u6570\u636E"}):e(U,{cols:4,children:r==null?void 0:r.map(t=>e(ce,{name:t},t))})}const de=d.memo(ue),f=d.memo(function(n){const{children:t,value:i,index:o,...s}=n;return e("div",{role:"tabpanel",hidden:i!==o,id:`tabpanel-${o}`,...s,children:i===o&&e(v,{sx:{p:3},children:t})})}),me=d.memo(function({dataSource:n}){const[t,i]=c.exports.useState(0);return l(m,{children:[e(v,{sx:{borderBottom:1,borderColor:"divider"},children:l(G,{value:t,onChange:(s,a)=>{i(a)},children:[e(p,{label:"\u5929\u8D4B\u547D\u5EA7"}),e(p,{label:"\u5347\u7EA7\u6750\u6599"}),e(p,{label:"\u7ACB\u7ED8\u56FE\u7247"})]})}),e(f,{value:t,index:0,children:"Item One"}),e(f,{value:t,index:1,children:"Item Two"}),e(f,{value:t,index:2,children:"Item Three"})]})});function he(){return e(B,{style:{background:"transparent"}})}function pe(){const r=k(),n=d.useContext(A);return l("div",{children:[r.palette.mode," mode",e(w,{sx:{ml:1},onClick:n.toggleColorMode,color:"inherit",children:r.palette.mode==="dark"?e(K,{}):e(J,{})})]})}function fe(){const{pathname:r}=$(),n=c.exports.useMemo(()=>r.split("/")[r.split("/").length-1],[r]);d.useState(!0);const[t,i]=d.useState(null),o=a=>{i(a.currentTarget)},s=()=>{i(null)};return e(X,{position:"static",color:"transparent",style:{boxShadow:"none"},children:l(Y,{variant:"dense",style:{padding:0},children:[e("div",{style:{flexGrow:1},children:decodeURI(n)}),l("div",{children:[e(w,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:o,color:"inherit",children:e(Z,{})}),l(D,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:s,children:[e(I,{onClick:s,children:e(pe,{})}),e(I,{onClick:s,children:"My account"})]})]})]})})}function ge({children:r}){var t,i;const n=k();return e(c.exports.Fragment,{children:l(M,{fixed:!0,maxWidth:"xs",className:te("main-content",((t=n==null?void 0:n.palette)==null?void 0:t.mode)==="dark"&&"background-dark-mode",((i=n==null?void 0:n.palette)==null?void 0:i.mode)==="light"&&"background-light-mode"),children:[e(fe,{}),e("main",{children:r}),e(he,{}),e(le,{})]})})}function g(){return e("div",{children:"Home"})}function xe(){const{data:r,isLoading:n,isError:t}=x("character",()=>y("5"));return e("div",{children:e(de,{dataSource:r,loading:n})})}function ve(){const{pathname:r}=$(),n=c.exports.useMemo(()=>r.split("/")[r.split("/").length-1],[r]),{data:t,isLoading:i,isError:o}=x("character",()=>y(n));c.exports.useEffect(()=>{if(o)throw new Error("\u8BF7\u6C42\u51FA\u9519\u4E86")},[o]),console.log(t);const s=c.exports.useMemo(()=>{var a;return(a=t==null?void 0:t.images)==null?void 0:a.icon},[t==null?void 0:t.images]);return l(m,{children:[l("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[l("div",{style:{flex:1},children:[l("h2",{children:[!(t!=null&&t.fullname)&&e(h,{variant:"text",sx:{fontSize:"24px",margin:"0.83rem 0"}}),t&&l(m,{children:[t==null?void 0:t.title," ",t==null?void 0:t.fullname]})]}),l("div",{children:[!(t!=null&&t.description)&&e(h,{variant:"text",sx:{fontSize:"1rem"}}),(t==null?void 0:t.description)&&l(m,{children:[" ",t==null?void 0:t.description]})]})]}),!s&&e(h,{variant:"rounded",width:120,height:120}),s&&e(v,{component:"img",sx:{width:"120px",height:"120px"},alt:n,src:s})]}),e(me,{})]})}function ye(){return e("div",{children:"Weapon List"})}function Ce(){return e("div",{children:"Weapon Detail"})}function L(){return e("div",{children:"404"})}function be(){return e("div",{children:"ServerError"})}function Ee(){return l(ne,{children:[e(u,{path:"/",element:e(g,{})}),e(u,{path:"/index",element:e(g,{})}),e(u,{path:"/home",element:e(g,{})}),e(u,{path:"/characters",element:e(xe,{})}),e(u,{path:"/character/:name",element:e(ve,{})}),e(u,{path:"/weapons",element:e(ye,{})}),e(u,{path:"/weapon/:name",element:e(Ce,{})}),e(u,{path:"/404",element:e(L,{})}),e(u,{path:"/500",element:e(be,{})}),e(u,{path:"/*",element:e(L,{})})]})}function Ie(){return e(ge,{children:e(Ee,{})})}const Le=new F;N.createRoot(document.getElementById("root")).render(e(d.StrictMode,{children:e(S,{children:e(se,{children:e(P,{client:Le,children:e(re,{children:e(Ie,{})})})})})}));
