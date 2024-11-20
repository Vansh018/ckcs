"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8042],{12931:function(e,t,n){let r;n.d(t,{x8:function(){return eG},VY:function(){return eZ},dk:function(){return eq},hg:function(){return eE},aV:function(){return eX},h_:function(){return ez},fC:function(){return eV},Dx:function(){return eH},xz:function(){return eY}});var o,i=n(2265),u=n.t(i,2);function l(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function a(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function s(...e){return i.useCallback(a(...e),e)}var c=n(57437),d=globalThis?.document?i.useLayoutEffect:()=>{},f=u["useId".toString()]||(()=>void 0),v=0;function p(e){let[t,n]=i.useState(f());return d(()=>{e||n(e=>e??String(v++))},[e]),e||(t?`radix-${t}`:"")}function m(e){let t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...e)=>t.current?.(...e),[])}var h=n(54887),g=i.forwardRef((e,t)=>{let{children:n,...r}=e,o=i.Children.toArray(n),u=o.find(b);if(u){let e=u.props.children,n=o.map(t=>t!==u?t:i.Children.count(e)>1?i.Children.only(null):i.isValidElement(e)?e.props.children:null);return(0,c.jsx)(y,{...r,ref:t,children:i.isValidElement(e)?i.cloneElement(e,void 0,n):null})}return(0,c.jsx)(y,{...r,ref:t,children:n})});g.displayName="Slot";var y=i.forwardRef((e,t)=>{let{children:n,...r}=e;if(i.isValidElement(n)){let e,o;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return i.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?a(t,u):u})}return i.Children.count(n)>1?i.Children.only(null):null});y.displayName="SlotClone";var E=({children:e})=>(0,c.jsx)(c.Fragment,{children:e});function b(e){return i.isValidElement(e)&&e.type===E}var w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=i.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?g:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,c.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),C="dismissableLayer.update",N=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),R=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:a,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:v,onDismiss:p,...h}=e,g=i.useContext(N),[y,E]=i.useState(null),b=null!==(r=null==y?void 0:y.ownerDocument)&&void 0!==r?r:null===(n=globalThis)||void 0===n?void 0:n.document,[,R]=i.useState({}),O=s(t,e=>E(e)),P=Array.from(g.layers),[L]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),T=P.indexOf(L),S=y?P.indexOf(y):-1,j=g.layersWithOutsidePointerEventsDisabled.size>0,I=S>=T,k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=m(e),o=i.useRef(!1),u=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){D("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=t,n.addEventListener("click",u.current,{once:!0})):t()}else n.removeEventListener("click",u.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!I||n||(null==d||d(e),null==v||v(e),e.defaultPrevented||null==p||p())},b),M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=m(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&D("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==f||f(e),null==v||v(e),e.defaultPrevented||null==p||p())},b);return!function(e,t=globalThis?.document){let n=m(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{S!==g.layers.size-1||(null==a||a(e),!e.defaultPrevented&&p&&(e.preventDefault(),p()))},b),i.useEffect(()=>{if(y)return u&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(o=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(y)),g.layers.add(y),x(),()=>{u&&1===g.layersWithOutsidePointerEventsDisabled.size&&(b.body.style.pointerEvents=o)}},[y,b,u,g]),i.useEffect(()=>()=>{y&&(g.layers.delete(y),g.layersWithOutsidePointerEventsDisabled.delete(y),x())},[y,g]),i.useEffect(()=>{let e=()=>R({});return document.addEventListener(C,e),()=>document.removeEventListener(C,e)},[]),(0,c.jsx)(w.div,{...h,ref:O,style:{pointerEvents:j?I?"auto":"none":void 0,...e.style},onFocusCapture:l(e.onFocusCapture,M.onFocusCapture),onBlurCapture:l(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:l(e.onPointerDownCapture,k.onPointerDownCapture)})});function x(){let e=new CustomEvent(C);document.dispatchEvent(e)}function D(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&i.addEventListener(e,t,{once:!0}),o)?i&&h.flushSync(()=>i.dispatchEvent(u)):i.dispatchEvent(u)}R.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(N),r=i.useRef(null),o=s(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(w.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var O="focusScope.autoFocusOnMount",P="focusScope.autoFocusOnUnmount",L={bubbles:!1,cancelable:!0},T=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...l}=e,[a,d]=i.useState(null),f=m(o),v=m(u),p=i.useRef(null),h=s(t,e=>d(e)),g=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(g.paused||!a)return;let t=e.target;a.contains(t)?p.current=t:I(p.current,{select:!0})},t=function(e){if(g.paused||!a)return;let t=e.relatedTarget;null===t||a.contains(t)||I(p.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&I(a)});return a&&n.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,a,g.paused]),i.useEffect(()=>{if(a){k.add(g);let e=document.activeElement;if(!a.contains(e)){let t=new CustomEvent(O,L);a.addEventListener(O,f),a.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(I(r,{select:t}),document.activeElement!==n)return}(S(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&I(a))}return()=>{a.removeEventListener(O,f),setTimeout(()=>{let t=new CustomEvent(P,L);a.addEventListener(P,v),a.dispatchEvent(t),t.defaultPrevented||I(null!=e?e:document.body,{select:!0}),a.removeEventListener(P,v),k.remove(g)},0)}}},[a,f,v,g]);let y=i.useCallback(e=>{if(!n&&!r||g.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=S(e);return[j(t,e),j(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&I(i,{select:!0})):(e.preventDefault(),n&&I(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,g.paused]);return(0,c.jsx)(w.div,{tabIndex:-1,...l,ref:h,onKeyDown:y})});function S(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function j(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function I(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}T.displayName="FocusScope";var k=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=M(r,e)).unshift(e)},remove(e){var t;null===(t=(r=M(r,e))[0])||void 0===t||t.resume()}});function M(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var A=i.forwardRef((e,t)=>{var n,r;let{container:o,...u}=e,[l,a]=i.useState(!1);d(()=>a(!0),[]);let s=o||l&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return s?h.createPortal((0,c.jsx)(w.div,{...u,ref:t}),s):null});A.displayName="Portal";var _=e=>{var t,n;let r,o;let{present:u,children:l}=e,a=function(e){var t,n;let[r,o]=i.useState(),u=i.useRef({}),l=i.useRef(e),a=i.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return i.useEffect(()=>{let e=F(u.current);a.current="mounted"===s?e:"none"},[s]),d(()=>{let t=u.current,n=l.current;if(n!==e){let r=a.current,o=F(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),l.current=e}},[e,c]),d(()=>{if(r){let e=e=>{let t=F(u.current).includes(e.animationName);e.target===r&&t&&h.flushSync(()=>c("ANIMATION_END"))},t=e=>{e.target===r&&(a.current=F(u.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:i.useCallback(e=>{e&&(u.current=getComputedStyle(e)),o(e)},[])}}(u),c="function"==typeof l?l({present:a.isPresent}):i.Children.only(l),f=s(a.ref,(r=null===(t=Object.getOwnPropertyDescriptor(c.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in r&&r.isReactWarning?c.ref:(r=null===(n=Object.getOwnPropertyDescriptor(c,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning?c.props.ref:c.props.ref||c.ref);return"function"==typeof l||a.isPresent?i.cloneElement(c,{ref:f}):null};function F(e){return(null==e?void 0:e.animationName)||"none"}_.displayName="Presence";var W=0;function B(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var U=n(25825),K=n(91584),$=n(28215),V=(0,n(15411)._)(),Y=function(){},z=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:Y,onWheelCapture:Y,onTouchMoveCapture:Y}),o=r[0],u=r[1],l=e.forwardProps,a=e.children,s=e.className,c=e.removeScrollBar,d=e.enabled,f=e.shards,v=e.sideCar,p=e.noIsolation,m=e.inert,h=e.allowPinchZoom,g=e.as,y=e.gapMode,E=(0,U._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=(0,$.q)([n,t]),w=(0,U.pi)((0,U.pi)({},E),o);return i.createElement(i.Fragment,null,d&&i.createElement(v,{sideCar:V,removeScrollBar:c,shards:f,noIsolation:p,inert:m,setCallbacks:u,allowPinchZoom:!!h,lockRef:n,gapMode:y}),l?i.cloneElement(i.Children.only(a),(0,U.pi)((0,U.pi)({},w),{ref:b})):i.createElement(void 0===g?"div":g,(0,U.pi)({},w,{className:s,ref:b}),a))});z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},z.classNames={fullWidth:K.zi,zeroRight:K.pF};var X=n(48776),Z=n(65973),H=n(18039),q=!1;if("undefined"!=typeof window)try{var G=Object.defineProperty({},"passive",{get:function(){return q=!0,!0}});window.addEventListener("test",G,G),window.removeEventListener("test",G,G)}catch(e){q=!1}var J=!!q&&{passive:!1},Q=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ee=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),et(e,r)){var o=en(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},et=function(e,t){return"v"===e?Q(t,"overflowY"):Q(t,"overflowX")},en=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},er=function(e,t,n,r,o){var i,u=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),l=u*r,a=n.target,s=t.contains(a),c=!1,d=l>0,f=0,v=0;do{var p=en(e,a),m=p[0],h=p[1]-p[2]-u*m;(m||h)&&et(e,a)&&(f+=h,v+=m),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!s&&a!==document.body||s&&(t.contains(a)||t===a));return d&&(o&&1>Math.abs(f)||!o&&l>f)?c=!0:!d&&(o&&1>Math.abs(v)||!o&&-l>v)&&(c=!0),c},eo=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ei=function(e){return[e.deltaX,e.deltaY]},eu=function(e){return e&&"current"in e?e.current:e},el=0,ea=[],es=(0,X.L)(V,function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(el++)[0],u=i.useState(H.Ws)[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,U.ev)([e.lockRef.current],(e.shards||[]).map(eu),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!l.current.allowPinchZoom;var o,i=eo(e),u=n.current,a="deltaX"in e?e.deltaX:u[0]-i[0],s="deltaY"in e?e.deltaY:u[1]-i[1],c=e.target,d=Math.abs(a)>Math.abs(s)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=ee(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ee(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(a||s)&&(r.current=o),!o)return!0;var v=r.current||o;return er(v,t,e,"h"===v?a:s,!0)},[]),s=i.useCallback(function(e){if(ea.length&&ea[ea.length-1]===u){var n="deltaY"in e?ei(e):eo(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(l.current.shards||[]).map(eu).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?a(e,o[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=i.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),d=i.useCallback(function(e){n.current=eo(e),r.current=void 0},[]),f=i.useCallback(function(t){c(t.type,ei(t),t.target,a(t,e.lockRef.current))},[]),v=i.useCallback(function(t){c(t.type,eo(t),t.target,a(t,e.lockRef.current))},[]);i.useEffect(function(){return ea.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",s,J),document.addEventListener("touchmove",s,J),document.addEventListener("touchstart",d,J),function(){ea=ea.filter(function(e){return e!==u}),document.removeEventListener("wheel",s,J),document.removeEventListener("touchmove",s,J),document.removeEventListener("touchstart",d,J)}},[]);var p=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?i.createElement(Z.jp,{gapMode:e.gapMode}):null)}),ec=i.forwardRef(function(e,t){return i.createElement(z,(0,U.pi)({},e,{ref:t,sideCar:es}))});ec.classNames=z.classNames;var ed=n(78369),ef="Dialog",[ev,ep]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>i.createContext(e));return function(n){let r=n?.[e]||t;return i.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=i.createContext(r),u=n.length;function l(t){let{scope:n,children:r,...l}=t,a=n?.[e][u]||o,s=i.useMemo(()=>l,Object.values(l));return(0,c.jsx)(a.Provider,{value:s,children:r})}return n=[...n,r],l.displayName=t+"Provider",[l,function(n,l){let a=l?.[e][u]||o,s=i.useContext(a);if(s)return s;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(ef),[em,eh]=ev(ef),eg=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:l=!0}=e,a=i.useRef(null),s=i.useRef(null),[d=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=i.useState(e),[r]=n,o=i.useRef(r),u=m(t);return i.useEffect(()=>{o.current!==r&&(u(r),o.current=r)},[r,o,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,l=u?e:r,a=m(n);return[l,i.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else o(t)},[u,e,o,a])]}({prop:r,defaultProp:o,onChange:u});return(0,c.jsx)(em,{scope:t,triggerRef:a,contentRef:s,contentId:p(),titleId:p(),descriptionId:p(),open:d,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(e=>!e),[f]),modal:l,children:n})};eg.displayName=ef;var ey="DialogTrigger",eE=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(ey,n),i=s(t,o.triggerRef);return(0,c.jsx)(w.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":eF(o.open),...r,ref:i,onClick:l(e.onClick,o.onOpenToggle)})});eE.displayName=ey;var eb="DialogPortal",[ew,eC]=ev(eb,{forceMount:void 0}),eN=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=eh(eb,t);return(0,c.jsx)(ew,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,c.jsx)(_,{present:n||u.open,children:(0,c.jsx)(A,{asChild:!0,container:o,children:e})}))})};eN.displayName=eb;var eR="DialogOverlay",ex=i.forwardRef((e,t)=>{let n=eC(eR,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eh(eR,e.__scopeDialog);return i.modal?(0,c.jsx)(_,{present:r||i.open,children:(0,c.jsx)(eD,{...o,ref:t})}):null});ex.displayName=eR;var eD=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(eR,n);return(0,c.jsx)(ec,{as:g,allowPinchZoom:!0,shards:[o.contentRef],children:(0,c.jsx)(w.div,{"data-state":eF(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eO="DialogContent",eP=i.forwardRef((e,t)=>{let n=eC(eO,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=eh(eO,e.__scopeDialog);return(0,c.jsx)(_,{present:r||i.open,children:i.modal?(0,c.jsx)(eL,{...o,ref:t}):(0,c.jsx)(eT,{...o,ref:t})})});eP.displayName=eO;var eL=i.forwardRef((e,t)=>{let n=eh(eO,e.__scopeDialog),r=i.useRef(null),o=s(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return(0,ed.Ry)(e)},[]),(0,c.jsx)(eS,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:l(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:l(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:l(e.onFocusOutside,e=>e.preventDefault())})}),eT=i.forwardRef((e,t)=>{let n=eh(eO,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,c.jsx)(eS,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,u;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(u=n.triggerRef.current)||void 0===u||u.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,u;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let l=t.target;(null===(u=n.triggerRef.current)||void 0===u?void 0:u.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eS=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...l}=e,a=eh(eO,n),d=i.useRef(null),f=s(t,d);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:B()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:B()),W++,()=>{1===W&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),W--}},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(T,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u,children:(0,c.jsx)(R,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":eF(a.open),...l,ref:f,onDismiss:()=>a.onOpenChange(!1)})}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(eK,{titleId:a.titleId}),(0,c.jsx)(e$,{contentRef:d,descriptionId:a.descriptionId})]})]})}),ej="DialogTitle",eI=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(ej,n);return(0,c.jsx)(w.h2,{id:o.titleId,...r,ref:t})});eI.displayName=ej;var ek="DialogDescription",eM=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(ek,n);return(0,c.jsx)(w.p,{id:o.descriptionId,...r,ref:t})});eM.displayName=ek;var eA="DialogClose",e_=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eh(eA,n);return(0,c.jsx)(w.button,{type:"button",...r,ref:t,onClick:l(e.onClick,()=>o.onOpenChange(!1))})});function eF(e){return e?"open":"closed"}e_.displayName=eA;var eW="DialogTitleWarning",[eB,eU]=function(e,t){let n=i.createContext(t);function r(e){let{children:t,...r}=e,o=i.useMemo(()=>r,Object.values(r));return(0,c.jsx)(n.Provider,{value:o,children:t})}return r.displayName=e+"Provider",[r,function(r){let o=i.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(eW,{contentName:eO,titleName:ej,docsSlug:"dialog"}),eK=e=>{let{titleId:t}=e,n=eU(eW),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return i.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e$=e=>{let{contentRef:t,descriptionId:n}=e,r=eU("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return i.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},eV=eg,eY=eE,ez=eN,eX=ex,eZ=eP,eH=eI,eq=eM,eG=e_},12218:function(e,t,n){n.d(t,{j:function(){return i}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r},i=(e,t)=>n=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:l}=t,a=Object.keys(u).map(e=>{let t=null==n?void 0:n[e],o=null==l?void 0:l[e];if(null===t)return null;let i=r(t)||r(o);return u[e][i]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,a,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...l,...s}[t]):({...l,...s})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}}}]);