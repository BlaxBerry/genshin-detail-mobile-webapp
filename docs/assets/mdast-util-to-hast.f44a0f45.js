import{u}from"./unist-builder.25c4ba97.js";import{v as P}from"./unist-util-visit.a7a81adc.js";import{p as x,a as b}from"./unist-util-position.4cd18ce8.js";import{g as B}from"./unist-util-generated.8f78f123.js";import{d as C}from"./mdast-util-definitions.00f4c50f.js";import{s as N}from"./micromark-util-sanitize-uri.947fe355.js";import{e as y}from"./mdurl.d391f11c.js";import{t as I}from"./trim-lines.7e841c49.js";const g={}.hasOwnProperty;function A(e,t){const n=t.data||{};return"value"in t&&!(g.call(n,"hName")||g.call(n,"hProperties")||g.call(n,"hChildren"))?e.augment(t,u("text",t.value)):e(t,"div",f(e,t))}function k(e,t,n){const r=t&&t.type;let i;if(!r)throw new Error("Expected node, got `"+t+"`");return g.call(e.handlers,r)?i=e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?i=O:i=e.unknownHandler,(typeof i=="function"?i:A)(e,t,n)}function O(e,t){return"children"in t?{...t,children:f(e,t)}:t}function f(e,t){const n=[];if("children"in t){const r=t.children;let i=-1;for(;++i<r.length;){const l=k(e,r[i],t);if(l){if(i&&r[i-1].type==="break"&&(!Array.isArray(l)&&l.type==="text"&&(l.value=l.value.replace(/^\s+/,"")),!Array.isArray(l)&&l.type==="element")){const o=l.children[0];o&&o.type==="text"&&(o.value=o.value.replace(/^\s+/,""))}Array.isArray(l)?n.push(...l):n.push(l)}}}return n}function m(e,t){const n=[];let r=-1;for(t&&n.push(u("text",`
`));++r<e.length;)r&&n.push(u("text",`
`)),n.push(e[r]);return t&&e.length>0&&n.push(u("text",`
`)),n}function S(e){let t=-1;const n=[];for(;++t<e.footnoteOrder.length;){const r=e.footnoteById[e.footnoteOrder[t].toUpperCase()];if(!r)continue;const i=f(e,r),l=String(r.identifier),o=N(l.toLowerCase());let c=0;const s=[];for(;++c<=e.footnoteCounts[l];){const p={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+o+(c>1?"-"+c:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"\u21A9"}]};c>1&&p.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(c)}]}),s.length>0&&s.push({type:"text",value:" "}),s.push(p)}const a=i[i.length-1];if(a&&a.type==="element"&&a.tagName==="p"){const p=a.children[a.children.length-1];p&&p.type==="text"?p.value+=" ":a.children.push({type:"text",value:" "}),a.children.push(...s)}else i.push(...s);const d={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+o},children:m(i,!0)};r.position&&(d.position=r.position),n.push(d)}return n.length===0?null:{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:{...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),id:"footnote-label"},children:[u("text",e.footnoteLabel)]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:m(n,!0)},{type:"text",value:`
`}]}}function T(e,t){return e(t,"blockquote",m(f(e,t),!0))}function R(e,t){return[e(t,"br"),u("text",`
`)]}function D(e,t){const n=t.value?t.value+`
`:"",r=t.lang&&t.lang.match(/^[^ \t]+(?=[ \t]|$)/),i={};r&&(i.className=["language-"+r]);const l=e(t,"code",i,[u("text",n)]);return t.meta&&(l.data={meta:t.meta}),e(t.position,"pre",[l])}function H(e,t){return e(t,"del",f(e,t))}function F(e,t){return e(t,"em",f(e,t))}function w(e,t){const n=String(t.identifier),r=N(n.toLowerCase()),i=e.footnoteOrder.indexOf(n);let l;i===-1?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,l=e.footnoteOrder.length):(e.footnoteCounts[n]++,l=i+1);const o=e.footnoteCounts[n];return e(t,"sup",[e(t.position,"a",{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:"footnote-label"},[u("text",String(l))])])}function E(e,t){const n=e.footnoteById;let r=1;for(;r in n;)r++;const i=String(r);return n[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:t.children}],position:t.position},w(e,{type:"footnoteReference",identifier:i,position:t.position})}function U(e,t){return e(t,"h"+t.depth,f(e,t))}function q(e,t){return e.dangerous?e.augment(t,u("raw",t.value)):null}function v(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return u("text","!["+t.alt+r);const i=f(e,t),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift(u("text","["));const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push(u("text",r)),i}function J(e,t){const n=e.definition(t.identifier);if(!n)return v(e,t);const r={src:y(n.url||""),alt:t.alt};return n.title!==null&&n.title!==void 0&&(r.title=n.title),e(t,"img",r)}function $(e,t){const n={src:y(t.url),alt:t.alt};return t.title!==null&&t.title!==void 0&&(n.title=t.title),e(t,"img",n)}function z(e,t){return e(t,"code",[u("text",t.value.replace(/\r?\n|\r/g," "))])}function _(e,t){const n=e.definition(t.identifier);if(!n)return v(e,t);const r={href:y(n.url||"")};return n.title!==null&&n.title!==void 0&&(r.title=n.title),e(t,"a",r,f(e,t))}function j(e,t){const n={href:y(t.url)};return t.title!==null&&t.title!==void 0&&(n.title=t.title),e(t,"a",n,f(e,t))}function G(e,t,n){const r=f(e,t),i=n?K(n):L(t),l={},o=[];if(typeof t.checked=="boolean"){let a;r[0]&&r[0].type==="element"&&r[0].tagName==="p"?a=r[0]:(a=e(null,"p",[]),r.unshift(a)),a.children.length>0&&a.children.unshift(u("text"," ")),a.children.unshift(e(null,"input",{type:"checkbox",checked:t.checked,disabled:!0})),l.className=["task-list-item"]}let c=-1;for(;++c<r.length;){const a=r[c];(i||c!==0||a.type!=="element"||a.tagName!=="p")&&o.push(u("text",`
`)),a.type==="element"&&a.tagName==="p"&&!i?o.push(...a.children):o.push(a)}const s=r[r.length-1];return s&&(i||!("tagName"in s)||s.tagName!=="p")&&o.push(u("text",`
`)),e(t,"li",l,o)}function K(e){let t=e.spread;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=L(n[r]);return Boolean(t)}function L(e){const t=e.spread;return t==null?e.children.length>1:t}function M(e,t){const n={},r=t.ordered?"ol":"ul",i=f(e,t);let l=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++l<i.length;){const o=i[l];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}return e(t,r,n,m(i,!0))}function Q(e,t){return e(t,"p",f(e,t))}function V(e,t){return e.augment(t,u("root",m(f(e,t))))}function W(e,t){return e(t,"strong",f(e,t))}function X(e,t){const n=t.children;let r=-1;const i=t.align||[],l=[];for(;++r<n.length;){const o=n[r].children,c=r===0?"th":"td",s=[];let a=-1;const d=t.align?i.length:o.length;for(;++a<d;){const p=o[a];s.push(e(p,c,{align:i[a]},p?f(e,p):[]))}l[r]=e(n[r],"tr",m(s,!0))}return e(t,"table",m([e(l[0].position,"thead",m([l[0]],!0))].concat(l[1]?e({start:x(l[1]),end:b(l[l.length-1])},"tbody",m(l.slice(1),!0)):[]),!0))}function Y(e,t){return e.augment(t,u("text",I(String(t.value))))}function Z(e,t){return e(t,"hr")}const tt={blockquote:T,break:R,code:D,delete:H,emphasis:F,footnoteReference:w,footnote:E,heading:U,html:q,imageReference:J,image:$,inlineCode:z,linkReference:_,link:j,listItem:G,list:M,paragraph:Q,root:V,strong:W,table:X,text:Y,thematicBreak:Z,toml:h,yaml:h,definition:h,footnoteDefinition:h};function h(){return null}const et={}.hasOwnProperty;function nt(e,t){const n=t||{},r=n.allowDangerousHtml||!1,i={};return o.dangerous=r,o.clobberPrefix=n.clobberPrefix===void 0||n.clobberPrefix===null?"user-content-":n.clobberPrefix,o.footnoteLabel=n.footnoteLabel||"Footnotes",o.footnoteLabelTagName=n.footnoteLabelTagName||"h2",o.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},o.footnoteBackLabel=n.footnoteBackLabel||"Back to content",o.definition=C(e),o.footnoteById=i,o.footnoteOrder=[],o.footnoteCounts={},o.augment=l,o.handlers={...tt,...n.handlers},o.unknownHandler=n.unknownHandler,o.passThrough=n.passThrough,P(e,"footnoteDefinition",c=>{const s=String(c.identifier).toUpperCase();et.call(i,s)||(i[s]=c)}),o;function l(c,s){if(c&&"data"in c&&c.data){const a=c.data;a.hName&&(s.type!=="element"&&(s={type:"element",tagName:"",properties:{},children:[]}),s.tagName=a.hName),s.type==="element"&&a.hProperties&&(s.properties={...s.properties,...a.hProperties}),"children"in s&&s.children&&a.hChildren&&(s.children=a.hChildren)}if(c){const a="type"in c?c:{position:c};B(a)||(s.position={start:x(a),end:b(a)})}return s}function o(c,s,a,d){return Array.isArray(a)&&(d=a,a={}),l(c,{type:"element",tagName:s,properties:a||{},children:d||[]})}}function ft(e,t){const n=nt(e,t),r=k(n,e,null),i=S(n);return i&&r.children.push(u("text",`
`),i),Array.isArray(r)?{type:"root",children:r}:r}export{ft as t};
