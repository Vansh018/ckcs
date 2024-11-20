"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8264],{68264:function(e,t,n){n.d(t,{ee:function(){return eD},Eh:function(){return e$},VY:function(){return eF},fC:function(){return eW},D7:function(){return ex}});var r=n(22988),i=n(2265);let o=["top","right","bottom","left"],l=Math.min,a=Math.max,f=Math.round,s=Math.floor,c=e=>({x:e,y:e}),u={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function p(e,t){return"function"==typeof e?e(t):e}function h(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function g(e){return"x"===e?"y":"x"}function y(e){return"y"===e?"height":"width"}function w(e){return["top","bottom"].includes(h(e))?"y":"x"}function v(e){return e.replace(/start|end/g,e=>d[e])}function x(e){return e.replace(/left|right|bottom|top/g,e=>u[e])}function b(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function R(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function A(e,t,n){let r,{reference:i,floating:o}=e,l=w(t),a=g(w(t)),f=y(a),s=h(t),c="y"===l,u=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,p=i[f]/2-o[f]/2;switch(s){case"top":r={x:u,y:i.y-o.height};break;case"bottom":r={x:u,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(m(t)){case"start":r[a]-=p*(n&&c?-1:1);break;case"end":r[a]+=p*(n&&c?-1:1)}return r}let E=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(t)),s=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:u}=A(s,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:y,data:w,reset:v}=await m({x:c,y:u,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:s,platform:l,elements:{reference:e,floating:t}});if(c=null!=g?g:c,u=null!=y?y:u,p={...p,[o]:{...p[o],...w}},v&&h<=50){h++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(s=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:c,y:u}=A(s,d,f)),n=-1;continue}}return{x:c,y:u,placement:d,strategy:i,middlewareData:p}};async function P(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=e,{boundary:s="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:d=!1,padding:h=0}=p(t,e),m=b(h),g=a[d?"floating"===u?"reference":"floating":u],y=R(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:s,rootBoundary:c,strategy:f})),w="floating"===u?{...l.floating,x:r,y:i}:l.reference,v=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),x=await (null==o.isElement?void 0:o.isElement(v))&&await (null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},A=R(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:f}):w);return{top:(y.top-A.top+m.top)/x.y,bottom:(A.bottom-y.bottom+m.bottom)/x.y,left:(y.left-A.left+m.left)/x.x,right:(A.right-y.right+m.right)/x.x}}let S=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:o,platform:f,elements:s,middlewareData:c}=t,{element:u,padding:d=0}=p(e,t)||{};if(null==u)return{};let h=b(d),v={x:n,y:r},x=g(w(i)),R=y(x),A=await f.getDimensions(u),E="y"===x,P=E?"clientHeight":"clientWidth",S=o.reference[R]+o.reference[x]-v[x]-o.floating[R],L=v[x]-o.reference[x],T=await (null==f.getOffsetParent?void 0:f.getOffsetParent(u)),O=T?T[P]:0;O&&await (null==f.isElement?void 0:f.isElement(T))||(O=s.floating[P]||o.floating[R]);let C=O/2-A[R]/2-1,H=l(h[E?"top":"left"],C),k=l(h[E?"bottom":"right"],C),W=O-A[R]-k,D=O/2-A[R]/2+(S/2-L/2),F=a(H,l(D,W)),$=!c.arrow&&null!=m(i)&&D!=F&&o.reference[R]/2-(D<H?H:k)-A[R]/2<0,_=$?D<H?D-H:D-W:0;return{[x]:v[x]+_,data:{[x]:F,centerOffset:D-F-_,...$&&{alignmentOffset:_}},reset:$}}});function L(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function T(e){return o.some(t=>e[t]>=0)}async function O(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=h(n),a=m(n),f="y"===w(n),s=["left","top"].includes(l)?-1:1,c=o&&f?-1:1,u=p(t,e),{mainAxis:d,crossAxis:g,alignmentAxis:y}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&"number"==typeof y&&(g="end"===a?-1*y:y),f?{x:g*c,y:d*s}:{x:d*s,y:g*c}}function C(e){return W(e)?(e.nodeName||"").toLowerCase():"#document"}function H(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function k(e){var t;return null==(t=(W(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function W(e){return e instanceof Node||e instanceof H(e).Node}function D(e){return e instanceof Element||e instanceof H(e).Element}function F(e){return e instanceof HTMLElement||e instanceof H(e).HTMLElement}function $(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof H(e).ShadowRoot)}function _(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function M(e){let t=V(),n=B(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function V(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function z(e){return["html","body","#document"].includes(C(e))}function B(e){return H(e).getComputedStyle(e)}function N(e){return D(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Y(e){if("html"===C(e))return e;let t=e.assignedSlot||e.parentNode||$(e)&&e.host||k(e);return $(t)?t.host:t}function j(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=Y(t);return z(n)?t.ownerDocument?t.ownerDocument.body:t.body:F(n)&&_(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=H(i);return o?t.concat(l,l.visualViewport||[],_(i)?i:[],l.frameElement&&n?j(l.frameElement):[]):t.concat(i,j(i,[],n))}function I(e){let t=B(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=F(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,a=f(n)!==o||f(r)!==l;return a&&(n=o,r=l),{width:n,height:r,$:a}}function X(e){return D(e)?e:e.contextElement}function Z(e){let t=X(e);if(!F(t))return c(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=I(t),l=(o?f(n.width):n.width)/r,a=(o?f(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let q=c(0);function G(e){let t=H(e);return V()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:q}function J(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=X(e),a=c(1);t&&(r?D(r)&&(a=Z(r)):a=Z(e));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===H(l))&&i)?G(l):c(0),s=(o.left+f.x)/a.x,u=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=H(l),t=r&&D(r)?H(r):r,n=e.frameElement;for(;n&&r&&t!==e;){let e=Z(n),t=n.getBoundingClientRect(),r=B(n),i=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,u*=e.y,d*=e.x,p*=e.y,s+=i,u+=o,n=H(n).frameElement}}return R({width:d,height:p,x:s,y:u})}function K(e){return J(k(e)).left+N(e).scrollLeft}function Q(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=H(e),r=k(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let e=V();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(e,n);else if("document"===t)r=function(e){let t=k(e),n=N(e),r=e.ownerDocument.body,i=a(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=a(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+K(e),f=-n.scrollTop;return"rtl"===B(r).direction&&(l+=a(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:l,y:f}}(k(e));else if(D(t))r=function(e,t){let n=J(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=F(e)?Z(e):c(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=G(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return R(r)}function U(e,t){return F(e)&&"fixed"!==B(e).position?t?t(e):e.offsetParent:null}function ee(e,t){let n=H(e);if(!F(e))return n;let r=U(e,t);for(;r&&["table","td","th"].includes(C(r))&&"static"===B(r).position;)r=U(r,t);return r&&("html"===C(r)||"body"===C(r)&&"static"===B(r).position&&!M(r))?n:r||function(e){let t=Y(e);for(;F(t)&&!z(t);){if(M(t))return t;t=Y(t)}return null}(e)||n}let et=async function(e){let{reference:t,floating:n,strategy:r}=e,i=this.getOffsetParent||ee,o=this.getDimensions;return{reference:function(e,t,n){let r=F(t),i=k(t),o="fixed"===n,l=J(e,!0,o,t),a={scrollLeft:0,scrollTop:0},f=c(0);if(r||!r&&!o){if(("body"!==C(t)||_(i))&&(a=N(t)),r){let e=J(t,!0,o,t);f.x=e.x+t.clientLeft,f.y=e.y+t.clientTop}else i&&(f.x=K(i))}return{x:l.left+a.scrollLeft-f.x,y:l.top+a.scrollTop-f.y,width:l.width,height:l.height}}(t,await i(n),r),floating:{x:0,y:0,...await o(n)}}},en={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,i=F(n),o=k(n);if(n===o)return t;let l={scrollLeft:0,scrollTop:0},a=c(1),f=c(0);if((i||!i&&"fixed"!==r)&&(("body"!==C(n)||_(o))&&(l=N(n)),F(n))){let e=J(n);a=Z(n),f.x=e.x+n.clientLeft,f.y=e.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-l.scrollLeft*a.x+f.x,y:t.y*a.y-l.scrollTop*a.y+f.y}},getDocumentElement:k,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,o=[..."clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=j(e,[],!1).filter(e=>D(e)&&"body"!==C(e)),i=null,o="fixed"===B(e).position,l=o?Y(e):e;for(;D(l)&&!z(l);){let t=B(l),n=M(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||_(l)&&!n&&function e(t,n){let r=Y(t);return!(r===n||!D(r)||z(r))&&("fixed"===B(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=Y(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],f=o[0],s=o.reduce((e,n)=>{let r=Q(t,n,i);return e.top=a(r.top,e.top),e.right=l(r.right,e.right),e.bottom=l(r.bottom,e.bottom),e.left=a(r.left,e.left),e},Q(t,f,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:ee,getElementRects:et,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return I(e)},getScale:Z,isElement:D,isRTL:function(e){return"rtl"===B(e).direction}},er=(e,t,n)=>{let r=new Map,i={platform:en,...n},o={...i.platform,_c:r};return E(e,t,{...i,platform:o})};var ei=n(54887);let eo=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;if(n&&({}).hasOwnProperty.call(n,"current")){if(null!=n.current)return S({element:n.current,padding:r}).fn(t)}else if(n)return S({element:n,padding:r}).fn(t);return{}}});var el="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function ea(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!ea(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!ea(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ef(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function es(e,t){let n=ef(e);return Math.round(t*n)/n}function ec(e){let t=i.useRef(e);return el(()=>{t.current=e}),t}var eu=n(25171);let ed=(0,i.forwardRef)((e,t)=>{let{children:n,width:o=10,height:l=5,...a}=e;return(0,i.createElement)(eu.WV.svg,(0,r.Z)({},a,{ref:t,width:o,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,i.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var ep=n(1584),eh=n(98324),em=n(75137),eg=n(1336),ey=n(75238);let ew="Popper",[ev,ex]=(0,eh.b)(ew),[eb,eR]=ev(ew),eA=(0,i.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:o,...l}=e,a=eR("PopperAnchor",n),f=(0,i.useRef)(null),s=(0,ep.e)(t,f);return(0,i.useEffect)(()=>{a.onAnchorChange((null==o?void 0:o.current)||f.current)}),o?null:(0,i.createElement)(eu.WV.div,(0,r.Z)({},l,{ref:s}))}),eE="PopperContent",[eP,eS]=ev(eE),eL=(0,i.forwardRef)((e,t)=>{var n,o,f,c,u,d,b,R,A,E,S,C,H,W;let{__scopePopper:D,side:F="bottom",sideOffset:$=0,align:_="center",alignOffset:M=0,arrowPadding:V=0,avoidCollisions:z=!0,collisionBoundary:B=[],collisionPadding:N=0,sticky:Y="partial",hideWhenDetached:I=!1,updatePositionStrategy:Z="optimized",onPlaced:q,...G}=e,K=eR(eE,D),[Q,U]=(0,i.useState)(null),ee=(0,ep.e)(t,e=>U(e)),[et,en]=(0,i.useState)(null),ed=(0,ey.t)(et),eh=null!==(n=null==ed?void 0:ed.width)&&void 0!==n?n:0,ew=null!==(o=null==ed?void 0:ed.height)&&void 0!==o?o:0,ev="number"==typeof N?N:{top:0,right:0,bottom:0,left:0,...N},ex=Array.isArray(B)?B:[B],eb=ex.length>0,eA={padding:ev,boundary:ex.filter(eC),altBoundary:eb},{refs:eS,floatingStyles:eL,placement:eT,isPositioned:eO,middlewareData:eW}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:s,open:c}=e,[u,d]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=i.useState(r);ea(p,r)||h(r);let[m,g]=i.useState(null),[y,w]=i.useState(null),v=i.useCallback(e=>{e!=A.current&&(A.current=e,g(e))},[g]),x=i.useCallback(e=>{e!==E.current&&(E.current=e,w(e))},[w]),b=l||m,R=a||y,A=i.useRef(null),E=i.useRef(null),P=i.useRef(u),S=ec(s),L=ec(o),T=i.useCallback(()=>{if(!A.current||!E.current)return;let e={placement:t,strategy:n,middleware:p};L.current&&(e.platform=L.current),er(A.current,E.current,e).then(e=>{let t={...e,isPositioned:!0};O.current&&!ea(P.current,t)&&(P.current=t,ei.flushSync(()=>{d(t)}))})},[p,t,n,L]);el(()=>{!1===c&&P.current.isPositioned&&(P.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let O=i.useRef(!1);el(()=>(O.current=!0,()=>{O.current=!1}),[]),el(()=>{if(b&&(A.current=b),R&&(E.current=R),b&&R){if(S.current)return S.current(b,R,T);T()}},[b,R,T,S]);let C=i.useMemo(()=>({reference:A,floating:E,setReference:v,setFloating:x}),[v,x]),H=i.useMemo(()=>({reference:b,floating:R}),[b,R]),k=i.useMemo(()=>{let e={position:n,left:0,top:0};if(!H.floating)return e;let t=es(H.floating,u.x),r=es(H.floating,u.y);return f?{...e,transform:"translate("+t+"px, "+r+"px)",...ef(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,f,H.floating,u.x,u.y]);return i.useMemo(()=>({...u,update:T,refs:C,elements:H,floatingStyles:k}),[u,T,C,H,k])}({strategy:"fixed",placement:F+("center"!==_?"-"+_:""),whileElementsMounted:(...e)=>(function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:o=!0,ancestorResize:f=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=X(e),h=o||f?[...p?j(p):[],...j(t)]:[];h.forEach(e=>{o&&e.addEventListener("scroll",n,{passive:!0}),f&&e.addEventListener("resize",n)});let m=p&&u?function(e,t){let n,r=null,i=k(e);function o(){clearTimeout(n),r&&r.disconnect(),r=null}return!function f(c,u){void 0===c&&(c=!1),void 0===u&&(u=1),o();let{left:d,top:p,width:h,height:m}=e.getBoundingClientRect();if(c||t(),!h||!m)return;let g=s(p),y=s(i.clientWidth-(d+h)),w={rootMargin:-g+"px "+-y+"px "+-s(i.clientHeight-(p+m))+"px "+-s(d)+"px",threshold:a(0,l(1,u))||1},v=!0;function x(e){let t=e[0].intersectionRatio;if(t!==u){if(!v)return f();t?f(!1,t):n=setTimeout(()=>{f(!1,1e-7)},100)}v=!1}try{r=new IntersectionObserver(x,{...w,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,w)}r.observe(e)}(!0),o}(p,n):null,g=-1,y=null;c&&(y=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),p&&!d&&y.observe(p),y.observe(t));let w=d?J(e):null;return d&&function t(){let r=J(e);w&&(r.x!==w.x||r.y!==w.y||r.width!==w.width||r.height!==w.height)&&n(),w=r,i=requestAnimationFrame(t)}(),n(),()=>{h.forEach(e=>{o&&e.removeEventListener("scroll",n),f&&e.removeEventListener("resize",n)}),m&&m(),y&&y.disconnect(),y=null,d&&cancelAnimationFrame(i)}})(...e,{animationFrame:"always"===Z}),elements:{reference:K.anchor},middleware:[{name:"offset",options:A={mainAxis:$+ew,alignmentAxis:M},async fn(e){let{x:t,y:n}=e,r=await O(e,A);return{x:t+r.x,y:n+r.y,data:r}}},z&&{name:"shift",options:S={mainAxis:!0,crossAxis:!1,limiter:"partial"===Y?(void 0===E&&(E={}),{options:E,fn(e){let{x:t,y:n,placement:r,rects:i,middlewareData:o}=e,{offset:l=0,mainAxis:a=!0,crossAxis:f=!0}=p(E,e),s={x:t,y:n},c=w(r),u=g(c),d=s[u],m=s[c],y=p(l,e),v="number"==typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(a){let e="y"===u?"height":"width",t=i.reference[u]-i.floating[e]+v.mainAxis,n=i.reference[u]+i.reference[e]-v.mainAxis;d<t?d=t:d>n&&(d=n)}if(f){var x,b;let e="y"===u?"width":"height",t=["top","left"].includes(h(r)),n=i.reference[c]-i.floating[e]+(t&&(null==(x=o.offset)?void 0:x[c])||0)+(t?0:v.crossAxis),l=i.reference[c]+i.reference[e]+(t?0:(null==(b=o.offset)?void 0:b[c])||0)-(t?v.crossAxis:0);m<n?m=n:m>l&&(m=l)}return{[u]:d,[c]:m}}}):void 0,...eA},async fn(e){let{x:t,y:n,placement:r}=e,{mainAxis:i=!0,crossAxis:o=!1,limiter:f={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=p(S,e),c={x:t,y:n},u=await P(e,s),d=w(h(r)),m=g(d),y=c[m],v=c[d];if(i){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",n=y+u[e],r=y-u[t];y=a(n,l(y,r))}if(o){let e="y"===d?"top":"left",t="y"===d?"bottom":"right",n=v+u[e],r=v-u[t];v=a(n,l(v,r))}let x=f.fn({...e,[m]:y,[d]:v});return{...x,data:{x:x.x-t,y:x.y-n}}}},z&&{name:"flip",options:C={...eA},async fn(e){var t,n,r,i,o;let{placement:l,middlewareData:a,rects:f,initialPlacement:s,platform:c,elements:u}=e,{mainAxis:d=!0,crossAxis:b=!0,fallbackPlacements:R,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:S=!0,...L}=p(C,e);if(null!=(t=a.arrow)&&t.alignmentOffset)return{};let T=h(l),O=h(s)===s,H=await (null==c.isRTL?void 0:c.isRTL(u.floating)),k=R||(O||!S?[x(s)]:function(e){let t=x(e);return[v(e),t,v(t)]}(s));R||"none"===E||k.push(...function(e,t,n,r){let i=m(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(h(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(v)))),o}(s,S,E,H));let W=[s,...k],D=await P(e,L),F=[],$=(null==(n=a.flip)?void 0:n.overflows)||[];if(d&&F.push(D[T]),b){let e=function(e,t,n){void 0===n&&(n=!1);let r=m(e),i=g(w(e)),o=y(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=x(l)),[l,x(l)]}(l,f,H);F.push(D[e[0]],D[e[1]])}if($=[...$,{placement:l,overflows:F}],!F.every(e=>e<=0)){let e=((null==(r=a.flip)?void 0:r.index)||0)+1,t=W[e];if(t)return{data:{index:e,overflows:$},reset:{placement:t}};let n=null==(i=$.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(A){case"bestFit":{let e=null==(o=$.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:o[0];e&&(n=e);break}case"initialPlacement":n=s}if(l!==n)return{reset:{placement:n}}}return{}}},{name:"size",options:H={...eA,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:o}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${i}px`),l.setProperty("--radix-popper-anchor-height",`${o}px`)}},async fn(e){let t,n;let{placement:r,rects:i,platform:o,elements:f}=e,{apply:s=()=>{},...c}=p(H,e),u=await P(e,c),d=h(r),g=m(r),y="y"===w(r),{width:v,height:x}=i.floating;"top"===d||"bottom"===d?(t=d,n=g===(await (null==o.isRTL?void 0:o.isRTL(f.floating))?"start":"end")?"left":"right"):(n=d,t="end"===g?"top":"bottom");let b=x-u[t],R=v-u[n],A=!e.middlewareData.shift,E=b,S=R;if(y){let e=v-u.left-u.right;S=g||A?l(R,e):e}else{let e=x-u.top-u.bottom;E=g||A?l(b,e):e}if(A&&!g){let e=a(u.left,0),t=a(u.right,0),n=a(u.top,0),r=a(u.bottom,0);y?S=v-2*(0!==e||0!==t?e+t:a(u.left,u.right)):E=x-2*(0!==n||0!==r?n+r:a(u.top,u.bottom))}await s({...e,availableWidth:S,availableHeight:E});let L=await o.getDimensions(f.floating);return v!==L.width||x!==L.height?{reset:{rects:!0}}:{}}},et&&eo({element:et,padding:V}),eH({arrowWidth:eh,arrowHeight:ew}),I&&{name:"hide",options:W={strategy:"referenceHidden",...eA},async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...r}=p(W,e);switch(n){case"referenceHidden":{let n=L(await P(e,{...r,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:T(n)}}}case"escaped":{let n=L(await P(e,{...r,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:T(n)}}}default:return{}}}}]}),[eD,eF]=ek(eT),e$=(0,em.W)(q);(0,eg.b)(()=>{eO&&(null==e$||e$())},[eO,e$]);let e_=null===(f=eW.arrow)||void 0===f?void 0:f.x,eM=null===(c=eW.arrow)||void 0===c?void 0:c.y,eV=(null===(u=eW.arrow)||void 0===u?void 0:u.centerOffset)!==0,[ez,eB]=(0,i.useState)();return(0,eg.b)(()=>{Q&&eB(window.getComputedStyle(Q).zIndex)},[Q]),(0,i.createElement)("div",{ref:eS.setFloating,"data-radix-popper-content-wrapper":"",style:{...eL,transform:eO?eL.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ez,"--radix-popper-transform-origin":[null===(d=eW.transformOrigin)||void 0===d?void 0:d.x,null===(b=eW.transformOrigin)||void 0===b?void 0:b.y].join(" ")},dir:e.dir},(0,i.createElement)(eP,{scope:D,placedSide:eD,onArrowChange:en,arrowX:e_,arrowY:eM,shouldHideArrow:eV},(0,i.createElement)(eu.WV.div,(0,r.Z)({"data-side":eD,"data-align":eF},G,{ref:ee,style:{...G.style,animation:eO?void 0:"none",opacity:null!==(R=eW.hide)&&void 0!==R&&R.referenceHidden?0:void 0}}))))}),eT={top:"bottom",right:"left",bottom:"top",left:"right"},eO=(0,i.forwardRef)(function(e,t){let{__scopePopper:n,...o}=e,l=eS("PopperArrow",n),a=eT[l.placedSide];return(0,i.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,i.createElement)(ed,(0,r.Z)({},o,{ref:t,style:{...o.style,display:"block"}})))});function eC(e){return null!==e}let eH=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:s}=t,c=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,u=c?0:e.arrowWidth,d=c?0:e.arrowHeight,[p,h]=ek(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(i=s.arrow)||void 0===i?void 0:i.x)&&void 0!==r?r:0)+u/2,y=(null!==(o=null===(l=s.arrow)||void 0===l?void 0:l.y)&&void 0!==o?o:0)+d/2,w="",v="";return"bottom"===p?(w=c?m:`${g}px`,v=`${-d}px`):"top"===p?(w=c?m:`${g}px`,v=`${f.floating.height+d}px`):"right"===p?(w=`${-d}px`,v=c?m:`${y}px`):"left"===p&&(w=`${f.floating.width+d}px`,v=c?m:`${y}px`),{data:{x:w,y:v}}}});function ek(e){let[t,n="center"]=e.split("-");return[t,n]}let eW=e=>{let{__scopePopper:t,children:n}=e,[r,o]=(0,i.useState)(null);return(0,i.createElement)(eb,{scope:t,anchor:r,onAnchorChange:o},n)},eD=eA,eF=eL,e$=eO},75238:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(2265),i=n(1336);function o(e){let[t,n]=(0,r.useState)(void 0);return(0,i.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);