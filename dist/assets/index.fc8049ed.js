var _=Object.defineProperty,$=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var B=(r,a,l)=>a in r?_(r,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[a]=l,b=(r,a)=>{for(var l in a||(a={}))D.call(a,l)&&B(r,l,a[l]);if(y)for(var l of y(a))j.call(a,l)&&B(r,l,a[l]);return r},H=(r,a)=>$(r,W(a));var N=(r,a)=>{var l={};for(var s in r)D.call(r,s)&&a.indexOf(s)<0&&(l[s]=r[s]);if(r!=null&&y)for(var s of y(r))a.indexOf(s)<0&&j.call(r,s)&&(l[s]=r[s]);return l};import{j as E,r as c,L as h,R as C,a as K,P as u,u as U,b as X,c as J,d as Q,e as Z,B as ee}from"./vendor.84ecb1bd.js";const te=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}};te();var M="/assets/horizontal_negro.714359ff.svg";const e=E.exports.jsx,t=E.exports.jsxs,O=E.exports.Fragment;function re(){const[r,a]=c.exports.useState(!0);return c.exports.useEffect(()=>{const l=()=>{window.pageYOffset>10?a(!1):a(!0)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[r]),e("header",{className:`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!r&&"bg-white backdrop-blur-sm shadow-lg"}`,children:e("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:t("div",{className:"flex items-center justify-between h-16 md:h-20",children:[e("div",{className:"flex-shrink-0 mr-4",children:e(h,{to:"/",className:"block","aria-label":"Spaik",children:e("img",{src:M,width:"128",height:"128",alt:"logo"})})}),e("nav",{className:"flex flex-grow",children:e("ul",{className:"flex flex-grow justify-end flex-wrap items-center"})})]})})})}const I=C.createContext({parent:{}});function ae(){const r=c.exports.useRef(!0);return c.exports.useEffect(()=>{r.current=!1},[]),r.current}function T(fe){var F=fe,{show:r,enter:a="",enterStart:l="",enterEnd:s="",leave:n="",leaveStart:i="",leaveEnd:d="",appear:f,unmountOnExit:q,tag:G="div",children:V}=F,Y=N(F,["show","enter","enterStart","enterEnd","leave","leaveStart","leaveEnd","appear","unmountOnExit","tag","children"]);const k=a.split(" ").filter(o=>o.length),S=l.split(" ").filter(o=>o.length),R=s.split(" ").filter(o=>o.length),L=n.split(" ").filter(o=>o.length),z=i.split(" ").filter(o=>o.length),A=d.split(" ").filter(o=>o.length),g=q;function v(o,p){p.length&&o.classList.add(...p)}function w(o,p){p.length&&o.classList.remove(...p)}const m=C.useRef(null);return e(K,{appear:f,nodeRef:m,unmountOnExit:g,in:r,addEndListener:o=>{m.current.addEventListener("transitionend",o,!1)},onEnter:()=>{g||(m.current.style.display=null),v(m.current,[...k,...S])},onEntering:()=>{w(m.current,S),v(m.current,R)},onEntered:()=>{w(m.current,[...R,...k])},onExit:()=>{v(m.current,[...L,...z])},onExiting:()=>{w(m.current,z),v(m.current,A)},onExited:()=>{w(m.current,[...A,...L]),g||(m.current.style.display="none")},children:e(G,H(b({ref:m},Y),{style:{display:g?null:"none"},children:V}))})}function x(s){var n=s,{show:r,appear:a}=n,l=N(n,["show","appear"]);const{parent:i}=c.exports.useContext(I),d=ae();return r===void 0?e(T,b({appear:i.appear||!i.isInitialRender,show:i.show},l)):e(I.Provider,{value:{parent:{show:r,isInitialRender:d,appear:a}},children:e(T,b({appear:a,show:r},l))})}function P({children:r,id:a,ariaLabel:l,show:s,handleClose:n}){const i=c.exports.useRef(null);return c.exports.useEffect(()=>{const d=({target:f})=>{!s||i.current.contains(f)||n()};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)}),c.exports.useEffect(()=>{const d=({keyCode:f})=>{f===27&&n()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)}),t(O,{children:[e(x,{className:"fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm",show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0",enterEnd:"opacity-100",leave:"transition ease-out duration-100",leaveStart:"opacity-100",leaveEnd:"opacity-0","aria-hidden":"true"}),e(x,{id:a,className:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true","aria-labelledby":l,show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0 scale-95",enterEnd:"opacity-100 scale-100",leave:"transition ease-out duration-200",leaveStart:"opacity-100 scale-100",leaveEnd:"opacity-0 scale-95",children:e("div",{className:"bg-white overflow-auto max-w-6xl w-full max-h-full",ref:i,children:r})})]})}P.propTypes={children:u.oneOfType([u.arrayOf(u.element),u.element.isRequired]),id:u.string,ariaLabel:u.string,show:u.bool.isRequired,handleClose:u.func.isRequired};var le="/assets/hero-image.0b1780ce.png";function ne(){const[r,a]=c.exports.useState(!1);return t("section",{className:"relative",children:[e("div",{className:"absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none","aria-hidden":"true",children:t("svg",{width:"1360",height:"578",viewBox:"0 0 1360 578",xmlns:"http://www.w3.org/2000/svg",children:[e("defs",{children:t("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"illustration-01",children:[e("stop",{stopColor:"#FFF",offset:"0%"}),e("stop",{stopColor:"#EAEAEA",offset:"77.402%"}),e("stop",{stopColor:"#DFDFDF",offset:"100%"})]})}),t("g",{fill:"url(#illustration-01)",fillRule:"evenodd",children:[e("circle",{cx:"1232",cy:"128",r:"128"}),e("circle",{cx:"155",cy:"443",r:"64"})]})]})}),e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[t("div",{className:"text-center pb-12 md:pb-16",children:[e("h1",{className:"text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4","data-aos":"zoom-y-out",children:"AI-enabled imaging and diagnostics"}),e("div",{className:"max-w-3xl mx-auto",children:e("p",{className:"text-xl text-gray-600 mb-8","data-aos":"zoom-y-out","data-aos-delay":"150",children:"We are enhancing healthcare capabilities and scientific research with cutting-edge Artificial Intelligence technology."})})]}),t("div",{children:[t("div",{className:"relative flex justify-center mb-8","data-aos":"zoom-y-out","data-aos-delay":"450",children:[t("div",{className:"flex flex-col justify-center",children:[e("img",{className:"mx-auto",src:le,width:"768",height:"432",alt:"Hero"}),t("svg",{className:"absolute inset-0 max-w-full mx-auto md:max-w-none h-auto",width:"768",height:"432",viewBox:"0 0 768 432",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[t("defs",{children:[t("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"hero-ill-a",children:[e("stop",{stopColor:"#FFF",offset:"0%"}),e("stop",{stopColor:"#EAEAEA",offset:"77.402%"}),e("stop",{stopColor:"#DFDFDF",offset:"100%"})]}),t("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"99.24%",id:"hero-ill-b",children:[e("stop",{stopColor:"#FFF",offset:"0%"}),e("stop",{stopColor:"#EAEAEA",offset:"48.57%"}),e("stop",{stopColor:"#DFDFDF",stopOpacity:"0",offset:"100%"})]}),t("radialGradient",{cx:"21.152%",cy:"86.063%",fx:"21.152%",fy:"86.063%",r:"79.941%",id:"hero-ill-e",children:[e("stop",{stopColor:"#4FD1C5",offset:"0%"}),e("stop",{stopColor:"#81E6D9",offset:"25.871%"}),e("stop",{stopColor:"#338CF5",offset:"100%"})]}),e("circle",{id:"hero-ill-d",cx:"384",cy:"216",r:"64"})]}),t("g",{fill:"none",fillRule:"evenodd",children:[e("circle",{fillOpacity:".04",fill:"url(#hero-ill-a)",cx:"384",cy:"216",r:"128"}),e("circle",{fillOpacity:".16",fill:"url(#hero-ill-b)",cx:"384",cy:"216",r:"96"}),t("g",{fillRule:"nonzero",children:[e("use",{fill:"#000",xlinkHref:"#hero-ill-d"}),e("use",{fill:"url(#hero-ill-e)",xlinkHref:"#hero-ill-d"})]})]})]})]}),t("button",{className:"absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg",onClick:l=>{l.preventDefault(),l.stopPropagation(),a(!0)},"aria-controls":"modal",children:[t("svg",{className:"w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"}),e("path",{d:"M10 17l6-5-6-5z"})]}),e("span",{className:"ml-3",children:"Watch the full video (2 min)"})]})]}),e(P,{id:"modal",ariaLabel:"modal-headline",show:r,handleClose:()=>a(!1),children:e("div",{className:"relative pb-9/16",children:e("iframe",{className:"absolute w-full h-full",src:"https://player.vimeo.com/video/174002812",title:"Video",allowFullScreen:!0})})})]})]})})]})}var se="/assets/features-bg.98e1ab2d.png",ie="/assets/features-element.02cc9453.png",oe="/assets/grad_cam.3c5e99d1.png",ce="/assets/attention_unet.3ff93513.png";function de(){const[r,a]=c.exports.useState(1),l=c.exports.useRef(null),s=()=>{l.current.children[r]&&(l.current.style.height=l.current.children[r-1].offsetHeight+"px")};return c.exports.useEffect(()=>{s()},[r]),t("section",{className:"relative",children:[e("div",{className:"absolute inset-0 bg-gray-100 pointer-events-none mb-16","aria-hidden":"true"}),e("div",{className:"absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"}),e("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-12 md:pt-20",children:[t("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-16",children:[e("h1",{className:"h2 mb-4",children:"About us"}),e("p",{className:"text-xl text-gray-600",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."})]}),t("div",{className:"md:grid md:grid-cols-12 md:gap-6",children:[t("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6","data-aos":"fade-right",children:[t("div",{className:"md:pr-4 lg:pr-12 xl:pr-16 mb-8",children:[e("h3",{className:"h3 mb-3",children:"Medical imaging"}),e("p",{className:"text-xl text-gray-600",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."})]}),t("div",{className:"mb-8 md:mb-0",children:[t("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${r!==1?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:n=>{n.preventDefault(),a(1)},children:[t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"Research"}),e("div",{className:"text-gray-600",children:"Your partner in AI-driven research."})]}),e("div",{className:"flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3",children:e("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"})})})]}),t("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${r!==2?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:n=>{n.preventDefault(),a(2)},children:[t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"Diagnostic"}),e("div",{className:"text-gray-600",children:"Combine the power of machine learning with domain expertise and make AI work for you."})]}),e("div",{className:"flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3",children:e("svg",{className:"w-3 h-3 fill-current",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z",fillRule:"nonzero"})})})]})]})]}),e("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1","data-aos":"zoom-y-out",ref:l,children:t("div",{className:"relative flex flex-col text-center lg:text-right",children:[e(x,{show:r===1,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"md:max-w-none mx-auto rounded",src:ce,width:"500",height:"462",alt:"Features bg"})})}),e(x,{show:r===2,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"md:max-w-none mx-auto rounded",src:oe,width:"500",height:"462",alt:"Features bg"})})}),e(x,{show:r===3,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:t("div",{className:"relative inline-flex flex-col",children:[e("img",{className:"md:max-w-none mx-auto rounded",src:se,width:"500",height:"462",alt:"Features bg"}),e("img",{className:"md:max-w-none absolute w-full left-0 transform animate-float",src:ie,width:"500",height:"44",alt:"Element",style:{top:"30%"}})]})})]})})]})]})})]})}function me(){return e("footer",{children:t("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:[t("div",{className:"grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200",children:[t("div",{className:"sm:col-span-12 lg:col-span-3",children:[e("div",{className:"mb-2",children:e(h,{to:"/",className:"inline-block","aria-label":"Cruip",children:e("img",{src:M,width:"128",height:"128",alt:"logo"})})}),t("div",{className:"text-sm text-gray-600",children:[e(h,{to:"#",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Terms"})," \xB7 ",e(h,{to:"#",className:"text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out",children:"Privacy Policy"})]})]}),t("div",{className:"sm:col-span-6 md:col-span-3 lg:col-span-3",children:[e("h6",{className:"text-gray-800 font-medium mb-2",children:"Subscribe"}),e("p",{className:"text-sm text-gray-600 mb-4",children:"Get the latest news and articles to your inbox every month."}),e("form",{children:e("div",{className:"flex flex-wrap mb-4",children:t("div",{className:"w-full",children:[e("label",{className:"block text-sm sr-only",htmlFor:"newsletter",children:"Email"}),t("div",{className:"relative flex items-center max-w-xs",children:[e("input",{id:"newsletter",type:"email",className:"form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm",placeholder:"Your email",required:!0}),t("button",{type:"submit",className:"absolute inset-0 left-auto","aria-label":"Subscribe",children:[e("span",{className:"absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300","aria-hidden":"true"}),e("svg",{className:"w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fillRule:"nonzero"})})]})]})]})})})]})]}),t("div",{className:"md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200",children:[t("ul",{className:"flex mb-4 md:order-1 md:ml-4 md:mb-0",children:[e("li",{children:e(h,{to:"#",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Twitter",children:e("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"})})})}),e("li",{className:"ml-4",children:e(h,{to:"#",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Github",children:e("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"})})})}),e("li",{className:"ml-4",children:e(h,{to:"#",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Facebook",children:e("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"})})})})]}),t("div",{className:"text-sm text-gray-600 mr-4",children:[" ",e("a",{className:"text-blue-600 hover:underline",href:"https://spaik.es/",children:"Spaik"}),". All rights reserved."]})]})]})})}function ue(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[e(re,{}),t("main",{className:"flex-grow",children:[e(ne,{}),e(de,{})]}),e(me,{})]})}function he(){const r=U();return c.exports.useEffect(()=>{X.init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),c.exports.useEffect(()=>{document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior=""},[r.pathname]),e(O,{children:e(J,{children:e(Q,{exact:!0,path:"/spaik-technologies.github.io",element:e(ue,{})})})})}Z.render(e(C.StrictMode,{children:e(ee,{basename:"/",children:e(he,{})})}),document.getElementById("root"));
