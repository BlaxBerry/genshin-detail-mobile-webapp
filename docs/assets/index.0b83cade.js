import{r as c,a}from"./react.432bdd35.js";import{c as Z}from"./react-dom.28efd146.js";import{H as S}from"./react-router-dom.cb564caa.js";import{u as y,Q as D,a as ee}from"./react-query.b1cfbc15.js";import{c as re,j as r,a as l,T as ie,C as ne,F as d,B as b,b as te,d as R,L as oe,e as j,f as W,g as se,h as le,i as ue,k as ce,I as _,l as O,P as q,S as p,m as H,n as V,o as g,p as de,q as me,r as ae,A as he,s as pe,D as fe,u as Q,t as k,v as ge,w as xe,x as ye,y as ve,z as be,E as Ce,M as Ee,G as z,R as G}from"./@mui.4d4f859c.js";import{E as Ie}from"./react-error-boundary.bcb9cd75.js";import{u as I,a as $,b as Le,c as x}from"./react-router.4fe7f937.js";import{c as Be}from"./clsx.09c75e33.js";import{R as U}from"./react-markdown.8c2b67b4.js";import"./@babel.940d80f2.js";import"./scheduler.153b3889.js";import"./history.425c1f62.js";import"./react-is.0cf839ec.js";import"./@emotion.3b18ba21.js";import"./hoist-non-react-statics.0f695828.js";import"./stylis.471761e6.js";import"./react-transition-group.d51aac6b.js";import"./remark-parse.f10fc8b7.js";import"./mdast-util-from-markdown.96241223.js";import"./mdast-util-to-string.8bc2e9c1.js";import"./micromark.b693a4d7.js";import"./micromark-util-combine-extensions.3e12e0b8.js";import"./micromark-util-chunked.d678dd6d.js";import"./micromark-factory-space.9fd44a7a.js";import"./micromark-util-character.ce99989b.js";import"./micromark-core-commonmark.855b1e58.js";import"./micromark-util-classify-character.ecb93cd3.js";import"./micromark-util-resolve-all.11047968.js";import"./decode-named-character-reference.706ddea9.js";import"./micromark-util-subtokenize.6d5e7083.js";import"./micromark-factory-destination.73fba900.js";import"./micromark-factory-label.72d23b45.js";import"./micromark-factory-title.ea53db64.js";import"./micromark-factory-whitespace.a39f7bcc.js";import"./micromark-util-normalize-identifier.f257cb72.js";import"./micromark-util-html-tag-name.5207f868.js";import"./micromark-util-decode-numeric-character-reference.9eaaae1c.js";import"./micromark-util-decode-string.d7d7e948.js";import"./unist-util-stringify-position.e39b5eb6.js";import"./prop-types.722da5de.js";import"./property-information.1f74bece.js";import"./unist-util-visit.a7a81adc.js";import"./unist-util-visit-parents.62f12f83.js";import"./unist-util-is.8abf3982.js";import"./hast-util-whitespace.8f8023d5.js";import"./space-separated-tokens.9ca30725.js";import"./comma-separated-tokens.e44b482b.js";import"./style-to-object.0c02c56a.js";import"./inline-style-parser.6dc90e75.js";import"./unified.72277873.js";import"./bail.26bb36c7.js";import"./is-buffer.19a6d344.js";import"./extend.57c43b10.js";import"./is-plain-obj.c90db913.js";import"./trough.f22441a1.js";import"./vfile.1aead541.js";import"./vfile-message.61c5e3c2.js";import"./remark-rehype.ce3741e9.js";import"./mdast-util-to-hast.f44a0f45.js";import"./unist-builder.25c4ba97.js";import"./unist-util-position.4cd18ce8.js";import"./unist-util-generated.8f78f123.js";import"./mdast-util-definitions.00f4c50f.js";import"./micromark-util-sanitize-uri.947fe355.js";import"./micromark-util-encode.df910363.js";import"./mdurl.d391f11c.js";import"./trim-lines.7e841c49.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const K=c.exports.createContext({toggleColorMode:()=>{}});function Ae({children:t}){const[i,e]=c.exports.useState("light"),n=c.exports.useMemo(()=>({toggleColorMode:()=>{e(s=>s==="light"?"dark":"light")}}),[]),o=c.exports.useMemo(()=>re({palette:{mode:i}}),[i]);return r(K.Provider,{value:n,children:l(ie,{theme:o,children:[r(ne,{}),t]})})}const Te="/genshin-detail-mobile-webapp/assets/confuse.98571481.jpg",Me=(t,i)=>{},Fe=({error:t,resetErrorBoundary:i})=>{const e=I();return l(d,{children:[r(b,{component:"img",sx:{width:"100vw",maxWidth:"390px"},src:Te,style:{paddingTop:35}}),l("div",{style:{textAlign:"center"},children:[r("h2",{children:"\u9875\u9762\u6570\u636E\u51FA\u9519\u4E86"}),r("h2",{children:'\u53EF\u80FD\u662F\u670D\u52A1\u5668\u5D29\u4E86 ( \uFFE3_\uFFE3 ")'}),r(te,{variant:"contained",onClick:()=>{e("/",{replace:!0}),e(0)},children:"\u8FD4\u56DE\u9996\u9875"})]}),l("div",{style:{marginTop:20,display:"flex",justifyContent:"center",alignItems:"center"},children:[r(R,{})," \xA0",r(oe,{href:"https://github.com/BlaxBerry/genshin-detail-mobile-webapp/issues",variant:"body2",children:"\u8054\u7CFB\u6211"})]})]})};function ke({children:t}){return r(Ie,{FallbackComponent:Fe,onError:Me,children:t})}function Qe(){const t=I(),[i,e]=c.exports.useState("home"),n=[{label:"\u89D2\u8272",value:"characters",icon:r(le,{})},{label:"\u9996\u9875",value:"home",icon:r(ue,{})},{label:"\u6B66\u5668",value:"weapons",icon:r(ce,{})}];return c.exports.useEffect(()=>{t(`/${i}`)},[i]),r(j,{fixed:!0,maxWidth:"xs",sx:{position:"fixed",bottom:0,left:0,right:0},style:{padding:0},children:r(W,{value:i,onChange:(o,s)=>{e(s)},children:n.map(({value:o,icon:s,label:u})=>r(se,{label:u,value:o,icon:s},o))})})}const A=async t=>(await fetch(`https://api.minigg.cn/characters?query=${t}`)).json(),$e=async t=>(await fetch(`https://api.minigg.cn/constellations?query=${t}`)).json(),Pe=async t=>(await fetch(`https://api.minigg.cn/talents?query=${t}`)).json(),we=a.memo(function({name:i}){var u,m,h,f;const e=I(),{data:n,isLoading:o,isError:s}=y(["characters-list-item",i],()=>A(i));return r(_,{onClick:()=>e(`/character/${i}`,{state:{hiddenBottomNaviation:O}}),children:l(q,{elevation:10,style:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(250, 250, 250, 0.5)"},children:[!((u=n==null?void 0:n.images)!=null&&u.icon)&&r(p,{variant:"rectangular",width:85,height:85,animation:"wave"}),((m=n==null?void 0:n.images)==null?void 0:m.icon)&&r("img",{src:(h=n==null?void 0:n.images)==null?void 0:h.icon,srcSet:(f=n==null?void 0:n.images)==null?void 0:f.icon,alt:i,loading:"lazy",style:{width:"85px",height:"85px"}})]})})});function ze({dataSource:t,loading:i}){return i?r(d,{children:"Loading..."}):!i&&(!t||!(t instanceof Array))?r(d,{children:"\u65E0\u6570\u636E"}):r(H,{cols:4,children:t==null?void 0:t.map(e=>r(we,{name:e},e))})}const Ne=a.memo(ze),Re="https://api.minigg.cn/weapons",T=async t=>(await fetch(`${Re}?query=${t}`)).json(),je=a.memo(function({name:i}){var u,m,h,f;const e=I(),{data:n,isLoading:o,isError:s}=y(["weapons-list-item",i],()=>T(i));return r(_,{onClick:()=>e(`/weapon/${i}`,{state:{hiddenBottomNaviation:O}}),children:l(q,{elevation:10,style:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(250, 250, 250, 0.5)"},children:[!((u=n==null?void 0:n.images)!=null&&u.icon)&&r(p,{variant:"rectangular",width:85,height:85,animation:"wave"}),((m=n==null?void 0:n.images)==null?void 0:m.icon)&&r("img",{src:(h=n==null?void 0:n.images)==null?void 0:h.icon,srcSet:(f=n==null?void 0:n.images)==null?void 0:f.icon,alt:i,loading:"lazy",style:{width:"85px",height:"85px"}})]})})});function We({dataSource:t,loading:i}){return i?r(d,{children:"Loading..."}):!i&&(!t||!(t instanceof Array))?r(d,{children:"\u65E0\u6570\u636E"}):r(H,{cols:4,children:t==null?void 0:t.map(e=>r(je,{name:e},e))})}const _e=a.memo(We),C=a.memo(function({value:i,index:e,talent:n}){return r("div",{role:"tabpanel",hidden:i!==e,id:`tabpanel-${e}`,style:{width:"80%",padding:"1rem",height:"510px",overflow:"scroll"},children:i===e&&l(b,{sx:{p:3},children:[!(n!=null&&n.name)&&!(n!=null&&n.info)&&r(d,{children:[...new Array(4)].map((o,s)=>r(p,{variant:"text",animation:"wave",sx:{height:s===0?"18.7px":"1rem",margin:s===0?"18.7px 0":"0",width:s===0?"50%":"100%"}},s))}),(n==null?void 0:n.name)&&(n==null?void 0:n.info)&&l(d,{children:[r("h3",{children:n==null?void 0:n.name}),r(U,{children:n==null?void 0:n.info})]})]})})}),Oe=a.memo(function({talents:i}){const[e,n]=a.useState(0);return l(b,{sx:{flexGrow:1,display:"flex"},children:[l(V,{orientation:"vertical",variant:"scrollable",value:e,onChange:(s,u)=>{n(u)},sx:{borderRight:1,borderColor:"divider",padding:"1rem 0"},children:[r(g,{label:"\u666E\u901A\u653B\u51FB"}),r(g,{label:"\u5143\u7D20\u6218\u6280"}),r(g,{label:"\u5143\u7D20\u7206\u53D1"}),r(g,{label:"\u88AB\u52A8"}),r(g,{label:"\u88AB\u52A8"}),r(g,{label:"\u56FA\u5B9A\u5929\u8D4B"}),(i==null?void 0:i.combatsp)&&r(g,{label:"\u7279\u6B8A\u6218\u6280"})]}),r(C,{value:e,index:0,talent:i==null?void 0:i.combat1}),r(C,{value:e,index:1,talent:i==null?void 0:i.combat2}),r(C,{value:e,index:2,talent:i==null?void 0:i.combat3}),r(C,{value:e,index:3,talent:i==null?void 0:i.passive1}),r(C,{value:e,index:4,talent:i==null?void 0:i.passive2}),r(C,{value:e,index:5,talent:i==null?void 0:i.passive3}),r(d,{children:(i==null?void 0:i.combatsp)&&r(C,{value:e,index:6,talent:i==null?void 0:i.combatsp})})]})}),qe=t=>{switch(t){case"home":return"\u9996\u9875";case"characters":return"\u89D2\u8272\u5217\u8868";case"weapons":return"\u6B66\u5668\u5217\u8868";default:return"\u8FD4\u56DE"}},He=t=>{switch(t){case"\u706B":return"#520202";case"\u6C34":return"#0b71b5";case"\u51B0":return"#8ec7f5";case"\u98CE":return"#5ddecd";case"\u96F7":return"#330252";case"\u5CA9":return"#87560c";case"\u8349":return"#2f7539";default:return""}},Ve=a.memo(function({dataSource:i,constellations:e}){return r(de,{sx:{width:"100%",maxWidth:360},children:e instanceof Array&&e.length>0&&(e==null?void 0:e.map(n=>l(a.Fragment,{children:[l(me,{children:[r(ae,{children:r(he,{src:n==null?void 0:n.image,sx:{bgcolor:He(i==null?void 0:i.element),width:50,height:50,marginRight:"1rem"}})}),l("div",{children:[r(pe,{primary:n==null?void 0:n.name}),r(U,{style:{margin:0},children:n==null?void 0:n.effect})]})]}),r(fe,{})]},n.name)))})});a.memo(function(){return r("div",{children:"TabPanel1"})});a.memo(function(){return r("div",{children:"TabPanel1"})});const B=a.memo(function(i){const{children:e,value:n,index:o,...s}=i;return r("div",{role:"tabpanel",hidden:n!==o,id:`tabpanel-${o}`,className:"my-tab-panel",style:{height:"510px",overflow:"scroll"},...s,children:n===o&&r(b,{sx:{p:3},children:e})})}),Ge=a.memo(function({dataSource:i,constellations:e,talents:n}){var m,h,f;const[o,s]=c.exports.useState(0);return l(d,{children:[r(b,{sx:{borderBottom:1,borderColor:"divider"},children:l(V,{value:o,onChange:(L,M)=>{s(M)},centered:!0,children:[r(g,{label:"\u5929\u8D4B"}),r(g,{label:"\u547D\u5EA7"}),r(g,{label:"\u6750\u6599"}),r(g,{label:"\u7ACB\u7ED8"})]})}),r(B,{value:o,index:0,children:r(Oe,{talents:n})}),r(B,{value:o,index:1,children:r(Ve,{dataSource:i,constellations:e})}),r(B,{value:o,index:2,children:"Item Two"}),r(B,{value:o,index:3,children:r(b,{component:"img",sx:{width:"92vw",maxWidth:"390px"},alt:i==null?void 0:i.fullname,src:((m=i==null?void 0:i.images)==null?void 0:m.portrait)||((h=i==null?void 0:i.images)==null?void 0:h.cover2)||((f=i==null?void 0:i.images)==null?void 0:f.card),style:{padding:0}})})]})}),J=c.exports.memo(function({children:i}){return r("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:i})});function Ue(){return r(W,{style:{background:"transparent"}})}function Ke(){const t=Q(),i=c.exports.useMemo(()=>t.palette.mode==="dark"?"\u6697\u9ED1\u4E3B\u9898":"\u660E\u4EAE\u4E3B\u9898",[t.palette.mode]);return l("div",{children:[r(k,{sx:{mr:1},color:"inherit",children:t.palette.mode==="dark"?r(ge,{}):r(xe,{})}),i]})}function Je(){const{pathname:t}=$(),i=I(),e=c.exports.useMemo(()=>t.split("/")[1],[t]),[n,o]=a.useState(null),s=h=>{o(h.currentTarget)},u=()=>{o(null)};Q();const m=a.useContext(K);return r(ye,{position:"static",color:"transparent",style:{boxShadow:"none"},children:l(ve,{variant:"dense",style:{padding:0},children:[l("div",{style:{flexGrow:1,display:"flex",alignItems:"center"},onClick:()=>i(-1),children:[t.split("/").length>=3&&r(be,{}),r("h3",{children:qe(decodeURI(e))})]}),l("div",{children:[r(k,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:s,color:"inherit",children:r(Ce,{})}),l(Ee,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:u,children:[r(z,{onClick:()=>{m.toggleColorMode(),u()},children:r(Ke,{})}),l(z,{onClick:u,children:[r(k,{sx:{mr:1},color:"inherit",children:r(R,{})}),"Github"]})]})]})]})})}function Xe({children:t}){var e,n;const i=Q();return r(c.exports.Fragment,{children:l(j,{fixed:!0,maxWidth:"xs",className:Be("main-content",((e=i==null?void 0:i.palette)==null?void 0:e.mode)==="dark"&&"background-dark-mode",((n=i==null?void 0:i.palette)==null?void 0:n.mode)==="light"&&"background-light-mode"),children:[r(Je,{}),r("main",{children:t}),r(Ue,{}),r(Qe,{})]})})}function F(){return r("div",{children:"Home"})}function Ye(){const{data:t,isLoading:i,isError:e}=y(["character5starts"],()=>A("5")),{data:n,isLoading:o,isError:s}=y(["character4starts"],()=>A("4")),u=c.exports.useMemo(()=>n instanceof Array&&t instanceof Array?[...t,...n]:[],[t,n]);return r("div",{children:r(Ne,{dataSource:u,loading:i&&o})})}function Ze(){var P;const{pathname:t}=$(),i=c.exports.useMemo(()=>t.split("/")[t.split("/").length-1],[t]),{data:e,isLoading:n,isError:o}=y(["character",i],()=>A(i)),{data:s,isLoading:u,isError:m}=y(["constellations",i],()=>$e(i)),{data:h,isLoading:f,isError:L}=y(["talents",i],()=>Pe(i)),M=c.exports.useMemo(()=>{let E=[];for(const v in s)v!=="name"&&v!=="images"&&v!=="version"&&E.push({name:s[v].name,effect:s[v].effect,image:s.images[v]});return E},[s]),X=c.exports.useMemo(()=>l("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[!(e!=null&&e.fullname)&&l(d,{children:[r(p,{variant:"text",width:100}),r(p,{variant:"text",width:100,sx:{fontSize:"24px"}})]}),(e==null?void 0:e.fullname)&&l(d,{children:[r("span",{children:e==null?void 0:e.title}),r("div",{style:{fontSize:"24px"},children:e==null?void 0:e.fullname})]}),l("div",{children:[!(e!=null&&e.description)&&l(d,{children:[r(p,{variant:"text",sx:{fontSize:"0.8rem"}}),r(p,{variant:"text",sx:{fontSize:"0.8rem"}}),r(p,{variant:"text",sx:{fontSize:"0.8rem"}})]}),(e==null?void 0:e.description)&&r("span",{style:{fontSize:"0.8rem"},children:e==null?void 0:e.description})]})]}),[e==null?void 0:e.title,e==null?void 0:e.fullname,e==null?void 0:e.description]),Y=c.exports.useMemo(()=>{var E,v,w;return l("div",{style:{padding:10},children:[!((E=e==null?void 0:e.images)!=null&&E.icon)&&r(p,{variant:"rounded",width:120,height:120}),((v=e==null?void 0:e.images)==null?void 0:v.icon)&&l("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r(b,{component:"img",sx:{width:"120px",height:"120px"},alt:e==null?void 0:e.fullname,src:(w=e==null?void 0:e.images)==null?void 0:w.icon}),r(G,{defaultValue:Number(e==null?void 0:e.rarity),max:Number(e==null?void 0:e.rarity),readOnly:!0})]})]})},[(P=e==null?void 0:e.images)==null?void 0:P.icon,e==null?void 0:e.rarity,e==null?void 0:e.fullname]);return l(d,{children:[l(J,{children:[X,Y]}),r(Ge,{dataSource:e,constellations:M,talents:h})]})}function Se(){const{data:t,isLoading:i,isError:e}=y(["weapons5starts"],()=>T("5")),{data:n,isLoading:o,isError:s}=y(["weapons4starts"],()=>T("4")),u=c.exports.useMemo(()=>t instanceof Array&&n instanceof Array?[...t,...n].filter(m=>m!=="\u300C\u4E00\u5FC3\u4F20\u300D\u540D\u5200"):[],[t,n]);return r("div",{children:r(_e,{dataSource:u,loading:i&&o})})}function De(){var m;const{pathname:t}=$(),i=c.exports.useMemo(()=>t.split("/")[t.split("/").length-1],[t]),{data:e,isLoading:n,isError:o}=y(["weapon",i],()=>T(i));c.exports.useEffect(()=>{if(o)throw new Error("\u8BF7\u6C42\u51FA\u9519\u4E86")},[o]),console.log(e);const s=c.exports.useMemo(()=>l("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[!(e!=null&&e.name)&&l(d,{children:[r(p,{variant:"text",width:100}),r(p,{variant:"text",width:100,sx:{fontSize:"24px"}})]}),(e==null?void 0:e.name)&&l(d,{children:[r("span",{children:e==null?void 0:e.effectname}),r("div",{style:{fontSize:"24px"},children:e==null?void 0:e.name})]}),l("div",{children:[!(e!=null&&e.description)&&l(d,{children:[r(p,{variant:"text",sx:{fontSize:"0.8rem"}}),r(p,{variant:"text",sx:{fontSize:"0.8rem"}}),r(p,{variant:"text",sx:{fontSize:"0.8rem"}})]}),(e==null?void 0:e.description)&&r("span",{style:{fontSize:"0.8rem"},children:e==null?void 0:e.description})]})]}),[e==null?void 0:e.effectname,e==null?void 0:e.name,e==null?void 0:e.description]),u=c.exports.useMemo(()=>{var h,f,L;return l("div",{style:{padding:10},children:[!((h=e==null?void 0:e.images)!=null&&h.icon)&&r(p,{variant:"rounded",width:120,height:120}),((f=e==null?void 0:e.images)==null?void 0:f.icon)&&l("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r(b,{component:"img",sx:{width:"120px",height:"120px"},alt:e==null?void 0:e.name,src:(L=e==null?void 0:e.images)==null?void 0:L.icon}),r(G,{defaultValue:Number(e==null?void 0:e.rarity),max:Number(e==null?void 0:e.rarity),readOnly:!0})]})]})},[(m=e==null?void 0:e.images)==null?void 0:m.icon,e==null?void 0:e.rarity,e==null?void 0:e.name]);return r(d,{children:l(J,{children:[s,u]})})}function N(){return r("div",{children:"404"})}function er(){return r("div",{children:"ServerError"})}function rr(){return l(Le,{children:[r(x,{path:"/",element:r(F,{})}),r(x,{path:"/index",element:r(F,{})}),r(x,{path:"/home",element:r(F,{})}),r(x,{path:"/characters",element:r(Ye,{})}),r(x,{path:"/character/:name",element:r(Ze,{})}),r(x,{path:"/weapons",element:r(Se,{})}),r(x,{path:"/weapon/:name",element:r(De,{})}),r(x,{path:"/404",element:r(N,{})}),r(x,{path:"/500",element:r(er,{})}),r(x,{path:"/*",element:r(N,{})})]})}function ir(){return r(Xe,{children:r(rr,{})})}const nr=new D;Z.createRoot(document.getElementById("root")).render(r(a.StrictMode,{children:r(S,{children:r(ke,{children:r(ee,{client:nr,children:r(Ae,{children:r(ir,{})})})})})}));
