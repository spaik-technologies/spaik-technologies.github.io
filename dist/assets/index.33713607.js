var $=Object.defineProperty,K=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var M=(l,a,r)=>a in l?$(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,y=(l,a)=>{for(var r in a||(a={}))D.call(a,r)&&M(l,r,a[r]);if(b)for(var r of b(a))B.call(a,r)&&M(l,r,a[r]);return l},O=(l,a)=>K(l,U(a));var k=(l,a)=>{var r={};for(var s in l)D.call(l,s)&&a.indexOf(s)<0&&(r[s]=l[s]);if(l!=null&&b)for(var s of b(l))a.indexOf(s)<0&&B.call(l,s)&&(r[s]=l[s]);return r};import{j as C,r as c,L as h,R as F,a as X,P as u,u as J,b as Q,c as Z,d as N,e as ee}from"./vendor.aa47548e.js";const te=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}};te();var q="/assets/horizontal_negro.714359ff.svg";const e=C.exports.jsx,t=C.exports.jsxs,I=C.exports.Fragment;function E(){const[l,a]=c.exports.useState(!0);return c.exports.useEffect(()=>{const r=()=>{window.pageYOffset>10?a(!1):a(!0)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[l]),e("header",{className:`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!l&&"bg-white backdrop-blur-sm shadow-lg"}`,children:e("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:t("div",{className:"flex items-center justify-between h-16 md:h-20",children:[e("div",{className:"flex-shrink-0 mr-4",children:e(h,{to:"/",className:"block","aria-label":"Spaik",children:e("img",{src:q,width:"128",height:"128",alt:"logo"})})}),e("nav",{className:"flex flex-grow",children:e("ul",{className:"flex flex-grow justify-end flex-wrap items-center"})})]})})})}const G=F.createContext({parent:{}});function le(){const l=c.exports.useRef(!0);return c.exports.useEffect(()=>{l.current=!1},[]),l.current}function P(fe){var S=fe,{show:l,enter:a="",enterStart:r="",enterEnd:s="",leave:i="",leaveStart:n="",leaveEnd:d="",appear:x,unmountOnExit:W,tag:V="div",children:Y}=S,_=k(S,["show","enter","enterStart","enterEnd","leave","leaveStart","leaveEnd","appear","unmountOnExit","tag","children"]);const L=a.split(" ").filter(o=>o.length),R=r.split(" ").filter(o=>o.length),z=s.split(" ").filter(o=>o.length),H=i.split(" ").filter(o=>o.length),A=n.split(" ").filter(o=>o.length),j=d.split(" ").filter(o=>o.length),g=W;function w(o,p){p.length&&o.classList.add(...p)}function v(o,p){p.length&&o.classList.remove(...p)}const m=F.useRef(null);return e(X,{appear:x,nodeRef:m,unmountOnExit:g,in:l,addEndListener:o=>{m.current.addEventListener("transitionend",o,!1)},onEnter:()=>{g||(m.current.style.display=null),w(m.current,[...L,...R])},onEntering:()=>{v(m.current,R),w(m.current,z)},onEntered:()=>{v(m.current,[...z,...L])},onExit:()=>{w(m.current,[...H,...A])},onExiting:()=>{v(m.current,A),w(m.current,j)},onExited:()=>{v(m.current,[...j,...H]),g||(m.current.style.display="none")},children:e(V,O(y({ref:m},_),{style:{display:g?null:"none"},children:Y}))})}function f(s){var i=s,{show:l,appear:a}=i,r=k(i,["show","appear"]);const{parent:n}=c.exports.useContext(G),d=le();return l===void 0?e(P,y({appear:n.appear||!n.isInitialRender,show:n.show},r)):e(G.Provider,{value:{parent:{show:l,isInitialRender:d,appear:a}},children:e(P,y({appear:a,show:l},r))})}function T({children:l,id:a,ariaLabel:r,show:s,handleClose:i}){const n=c.exports.useRef(null);return c.exports.useEffect(()=>{const d=({target:x})=>{!s||n.current.contains(x)||i()};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)}),c.exports.useEffect(()=>{const d=({keyCode:x})=>{x===27&&i()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)}),t(I,{children:[e(f,{className:"fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm",show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0",enterEnd:"opacity-100",leave:"transition ease-out duration-100",leaveStart:"opacity-100",leaveEnd:"opacity-0","aria-hidden":"true"}),e(f,{id:a,className:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true","aria-labelledby":r,show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0 scale-95",enterEnd:"opacity-100 scale-100",leave:"transition ease-out duration-200",leaveStart:"opacity-100 scale-100",leaveEnd:"opacity-0 scale-95",children:e("div",{className:"bg-white overflow-auto max-w-6xl w-full max-h-full",ref:n,children:l})})]})}T.propTypes={children:u.oneOfType([u.arrayOf(u.element),u.element.isRequired]),id:u.string,ariaLabel:u.string,show:u.bool.isRequired,handleClose:u.func.isRequired};var ae="/assets/hero-image.0b1780ce.png";function re(){const[l,a]=c.exports.useState(!1);return t("section",{className:"relative",children:[e("div",{className:"absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none","aria-hidden":"true",children:t("svg",{width:"1360",height:"578",viewBox:"0 0 1360 578",xmlns:"http://www.w3.org/2000/svg",children:[e("defs",{children:t("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"illustration-01",children:[e("stop",{stopColor:"#FFF",offset:"0%"}),e("stop",{stopColor:"#EAEAEA",offset:"77.402%"}),e("stop",{stopColor:"#DFDFDF",offset:"100%"})]})}),t("g",{fill:"url(#illustration-01)",fillRule:"evenodd",children:[e("circle",{cx:"1232",cy:"128",r:"128"}),e("circle",{cx:"155",cy:"443",r:"64"})]})]})}),e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[t("div",{className:"text-center pb-12 md:pb-16",children:[e("h1",{className:"text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4","data-aos":"zoom-y-out",children:"AI-enabled imaging and diagnostics"}),e("div",{className:"max-w-3xl mx-auto",children:e("p",{className:"text-xl text-gray-600 mb-8","data-aos":"zoom-y-out","data-aos-delay":"150",children:"We are enhancing healthcare capabilities and scientific research with cutting-edge Artificial Intelligence technology."})})]}),t("div",{children:[t("div",{className:"relative flex justify-center mb-8","data-aos":"zoom-y-out","data-aos-delay":"450",children:[t("div",{className:"flex flex-col justify-center",children:[e("img",{className:"mx-auto",src:ae,width:"768",height:"432",alt:"Hero"}),t("svg",{className:"absolute inset-0 max-w-full mx-auto md:max-w-none h-auto",width:"768",height:"432",viewBox:"0 0 768 432",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[t("defs",{children:[t("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"hero-ill-a",children:[e("stop",{stopColor:"#FFF",offset:"0%"}),e("stop",{stopColor:"#EAEAEA",offset:"77.402%"}),e("stop",{stopColor:"#DFDFDF",offset:"100%"})]}),t("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"99.24%",id:"hero-ill-b",children:[e("stop",{stopColor:"#FFF",offset:"0%"}),e("stop",{stopColor:"#EAEAEA",offset:"48.57%"}),e("stop",{stopColor:"#DFDFDF",stopOpacity:"0",offset:"100%"})]}),t("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"hero-ill-e",children:[e("stop",{stopColor:"#4FD1C5",offset:"0%"}),e("stop",{stopColor:"#81E6D9",offset:"25.871%"}),e("stop",{stopColor:"#338CF5",offset:"100%"})]}),e("circle",{id:"hero-ill-d",cx:"384",cy:"216",r:"64"})]}),t("g",{fill:"none",fillRule:"evenodd",children:[e("circle",{fillOpacity:".04",fill:"url(#hero-ill-a)",cx:"384",cy:"216",r:"128"}),e("circle",{fillOpacity:".16",fill:"url(#hero-ill-b)",cx:"384",cy:"216",r:"96"}),t("g",{fillRule:"nonzero",children:[e("use",{fill:"#000",xlinkHref:"#hero-ill-d"}),e("use",{fill:"url(#hero-ill-e)",xlinkHref:"#hero-ill-d"})]})]})]})]}),t("button",{className:"absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg",onClick:r=>{r.preventDefault(),r.stopPropagation(),a(!0)},"aria-controls":"modal",children:[t("svg",{className:"w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"}),e("path",{d:"M10 17l6-5-6-5z"})]}),e("span",{className:"ml-3",children:"Watch the full video (2 min)"})]})]}),e(T,{id:"modal",ariaLabel:"modal-headline",show:l,handleClose:()=>a(!1),children:e("div",{className:"relative pb-9/16",children:e("iframe",{className:"absolute w-full h-full",src:"https://player.vimeo.com/video/174002812",title:"Video",allowFullScreen:!0})})})]})]})})]})}var ie="/assets/features-bg.98e1ab2d.png",se="/assets/features-element.02cc9453.png",ne="/assets/grad_cam.3c5e99d1.png",oe="/assets/attention_unet.3ff93513.png";function ce(){const[l,a]=c.exports.useState(1),r=c.exports.useRef(null),s=()=>{r.current.children[l]&&(r.current.style.height=r.current.children[l-1].offsetHeight+"px")};return c.exports.useEffect(()=>{s()},[l]),t("section",{className:"relative",children:[e("div",{className:"absolute inset-0 bg-gray-100 pointer-events-none mb-16","aria-hidden":"true"}),e("div",{className:"absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"}),e("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-12 md:pt-20",children:[t("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-16",children:[e("h1",{className:"h2 mb-4",children:"About us"}),e("p",{className:"text-xl text-gray-600",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."})]}),t("div",{className:"md:grid md:grid-cols-12 md:gap-6",children:[t("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6","data-aos":"fade-right",children:[t("div",{className:"md:pr-4 lg:pr-12 xl:pr-16 mb-8",children:[e("h3",{className:"h3 mb-3",children:"Medical imaging"}),e("p",{className:"text-xl text-gray-600",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."})]}),t("div",{className:"mb-8 md:mb-0",children:[t("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${l!==1?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:i=>{i.preventDefault(),a(1)},children:[t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"Research"}),e("div",{className:"text-gray-600",children:"Your partner in AI-driven research."})]}),e("div",{className:"flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3",children:e("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"})})})]}),t("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${l!==2?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:i=>{i.preventDefault(),a(2)},children:[t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"Diagnostic"}),e("div",{className:"text-gray-600",children:"Combine the power of machine learning with domain expertise and make AI work for you."})]}),e("div",{className:"flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3",children:e("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z",fillRule:"nonzero"})})})]})]})]}),e("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1","data-aos":"zoom-y-out",ref:r,children:t("div",{className:"relative flex flex-col text-center lg:text-right",children:[e(f,{show:l===1,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"md:max-w-none mx-auto rounded",src:oe,width:"500",height:"462",alt:"Features bg"})})}),e(f,{show:l===2,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"md:max-w-none mx-auto rounded",src:ne,width:"500",height:"462",alt:"Features bg"})})}),e(f,{show:l===3,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:t("div",{className:"relative inline-flex flex-col",children:[e("img",{className:"md:max-w-none mx-auto rounded",src:ie,width:"500",height:"462",alt:"Features bg"}),e("img",{className:"md:max-w-none absolute w-full left-0 transform animate-float",src:se,width:"500",height:"44",alt:"Element",style:{top:"30%"}})]})})]})})]})]})})]})}function de(){return e("footer",{children:t("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[t("div",{className:"grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200",children:[t("div",{className:"sm:col-span-12 lg:col-span-3",children:[e("div",{className:"mb-2",children:e(h,{to:"/",className:"inline-block","aria-label":"Cruip",children:e("img",{src:q,width:"128",height:"128",alt:"logo"})})}),t("div",{className:"text-sm text-gray-600",children:[e(h,{to:"#",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Terms"})," \xB7 ",e(h,{to:"#",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Privacy Policy"})]})]}),t("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-3",children:[e("h6",{className:"text-gray-800 font-medium mb-2",children:"Subscribe"}),e("p",{className:"text-sm text-gray-600 mb-4",children:"Get the latest news and articles to your inbox every month."}),e("form",{children:e("div",{className:"flex flex-wrap mb-4",children:t("div",{className:"w-full",children:[e("label",{className:"block text-sm sr-only",htmlFor:"newsletter",children:"Email"}),t("div",{className:"relative flex items-center max-w-xs",children:[e("input",{id:"newsletter",type:"email",className:"form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm",placeholder:"Your email",required:!0}),t("button",{type:"submit",className:"absolute inset-0 left-auto","aria-label":"Subscribe",children:[e("span",{className:"absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300","aria-hidden":"true"}),e("svg",{className:"w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})]})]})})})]})]}),t("div",{className:"md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200",children:[t("ul",{className:"flex mb-4 md:order-1 md:ml-4 md:mb-0",children:[e("li",{children:e(h,{to:"#",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Twitter",children:e("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"})})})}),e("li",{className:"ml-4",children:e(h,{to:"#",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Github",children:e("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"})})})}),e("li",{className:"ml-4",children:e(h,{to:"#",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Facebook",children:e("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"})})})})]}),t("div",{className:"text-sm text-gray-600 mr-4",children:[" ",e("a",{className:"text-blue-600 hover:underline",href:"https://spaik.es/",children:"Spaik"}),". All rights reserved."]})]})]})})}function me(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(E,{}),t("main",{className:"flex-grow",children:[e(re,{}),e(ce,{})]}),e(de,{})]})}function he(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(E,{}),e("main",{className:"flex-grow",children:e("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[e("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:e("h1",{className:"h1",children:"Welcome back. We exist to make entrepreneurism easier."})}),t("div",{className:"max-w-sm mx-auto",children:[t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[e("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:"Email"}),e("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Enter your email address",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("div",{className:"flex justify-between",children:[e("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"password",children:"Password"}),e(h,{to:"reset-password",className:"text-sm font-medium text-blue-600 hover:underline",children:"Having trouble signing in?"})]}),e("input",{id:"password",type:"password",className:"form-input w-full text-gray-800",placeholder:"Enter your password",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:e("div",{className:"w-full px-3",children:e("div",{className:"flex justify-between",children:t("label",{className:"flex items-center",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-gray-600 ml-2",children:"Keep me signed in"})]})})})}),e("div",{className:"flex flex-wrap -mx-3 mt-6",children:e("div",{className:"w-full px-3",children:e("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Sign in"})})})]}),t("div",{className:"flex items-center my-6",children:[e("div",{className:"border-t border-gray-300 flex-grow mr-3","aria-hidden":"true"}),e("div",{className:"text-gray-600 italic",children:"Or"}),e("div",{className:"border-t border-gray-300 flex-grow ml-3","aria-hidden":"true"})]}),t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with GitHub"})]})})}),e("div",{className:"flex flex-wrap -mx-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with Google"})]})})})]}),t("div",{className:"text-gray-600 text-center mt-6",children:["Don\u2019t you have an account? ",e(h,{to:"/signup",className:"text-blue-600 hover:underline transition duration-150 ease-in-out",children:"Sign up"})]})]})]})})})})]})}function ue(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(E,{}),e("main",{className:"flex-grow",children:e("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[e("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:e("h1",{className:"h1",children:"Welcome. We exist to make entrepreneurism easier."})}),t("div",{className:"max-w-sm mx-auto",children:[t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"name",children:["Name ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"name",type:"text",className:"form-input w-full text-gray-800",placeholder:"Enter your name",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:["Email ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Enter your email address",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"password",children:["Password ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"password",type:"password",className:"form-input w-full text-gray-800",placeholder:"Enter your password",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mt-6",children:e("div",{className:"w-full px-3",children:e("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Sign up"})})}),t("div",{className:"text-sm text-gray-500 text-center mt-3",children:["By creating an account, you agree to the ",e("a",{className:"underline",href:"#0",children:"terms & conditions"}),", and our ",e("a",{className:"underline",href:"#0",children:"privacy policy"}),"."]})]}),t("div",{className:"flex items-center my-6",children:[e("div",{className:"border-t border-gray-300 flex-grow mr-3","aria-hidden":"true"}),e("div",{className:"text-gray-600 italic",children:"Or"}),e("div",{className:"border-t border-gray-300 flex-grow ml-3","aria-hidden":"true"})]}),t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with GitHub"})]})})}),e("div",{className:"flex flex-wrap -mx-3",children:e("div",{className:"w-full px-3",children:t("button",{className:"btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center",children:[e("svg",{className:"w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),e("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Continue with Google"})]})})})]}),t("div",{className:"text-gray-600 text-center mt-6",children:["Already using Simple? ",e(h,{to:"/signin",className:"text-blue-600 hover:underline transition duration-150 ease-in-out",children:"Sign in"})]})]})]})})})})]})}function xe(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(E,{}),e("main",{className:"flex-grow",children:e("section",{className:"bg-gradient-to-b from-gray-100 to-white",children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[t("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:[e("h1",{className:"h1 mb-4",children:"Let\u2019s get you back up on your feet"}),e("p",{className:"text-xl text-gray-600",children:"Enter the email address you used when you signed up for your account, and we\u2019ll email you a link to reset your password."})]}),e("div",{className:"max-w-sm mx-auto",children:t("form",{children:[e("div",{className:"flex flex-wrap -mx-3 mb-4",children:t("div",{className:"w-full px-3",children:[t("label",{className:"block text-gray-800 text-sm font-medium mb-1",htmlFor:"email",children:["Email ",e("span",{className:"text-red-600",children:"*"})]}),e("input",{id:"email",type:"email",className:"form-input w-full text-gray-800",placeholder:"Enter your email address",required:!0})]})}),e("div",{className:"flex flex-wrap -mx-3 mt-6",children:e("div",{className:"w-full px-3",children:e("button",{className:"btn text-white bg-blue-600 hover:bg-blue-700 w-full",children:"Send reset link"})})})]})})]})})})})]})}function pe(){const l=J();return c.exports.useEffect(()=>{Q.init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),c.exports.useEffect(()=>{document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior=""},[l.pathname]),e(I,{children:t(Z,{children:[e(N,{exact:!0,path:"/",element:e(me,{})}),e(N,{path:"/signin",element:e(he,{})}),e(N,{path:"/signup",element:e(ue,{})}),e(N,{path:"/reset-password",element:e(xe,{})})]})})}ee.render(e(F.StrictMode,{children:e(pe,{})}),document.getElementById("root"));
