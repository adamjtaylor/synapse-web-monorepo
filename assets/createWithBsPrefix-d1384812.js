import{r as f,R as l}from"./index-f1f749bf.js";import{_ as L}from"./extends-9cd95192.js";import{_ as P,u as b,c as x}from"./Button-a16e56e5.js";function z(e){return e&&e.ownerDocument||document}const g=!!(typeof window<"u"&&window.document&&window.document.createElement);var v=!1,m=!1;try{var i={get passive(){return v=!0},get once(){return m=v=!0}};g&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch{}function R(e,r,t,n){if(n&&typeof n!="boolean"&&!m){var a=n.once,u=n.capture,c=t;!m&&a&&(c=t.__once||function o(s){this.removeEventListener(r,o,u),t.call(this,s)},t.__once=c),e.addEventListener(r,c,v?n:u)}e.addEventListener(r,t,n)}function N(e,r,t,n){var a=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(r,t,a),t.__once&&e.removeEventListener(r,t.__once,a)}function M(e,r,t,n){return R(e,r,t,n),function(){N(e,r,t,n)}}function B(e){var r=f.useRef(e);return f.useEffect(function(){r.current=e},[e]),r}function O(e){var r=B(e);return f.useCallback(function(){return r.current&&r.current.apply(r,arguments)},[r])}var D=/-(.)/g;function U(e){return e.replace(D,function(r,t){return t.toUpperCase()})}var k=["className","bsPrefix","as"],S=function(r){return r[0].toUpperCase()+U(r).slice(1)};function T(e,r){var t=r===void 0?{}:r,n=t.displayName,a=n===void 0?S(e):n,u=t.Component,c=t.defaultProps,o=l.forwardRef(function(s,p){var E=s.className,_=s.bsPrefix,d=s.as,w=d===void 0?u||"div":d,y=P(s,k),C=b(_,e);return l.createElement(w,L({ref:p,className:x(E,C)},y))});return o.defaultProps=c,o.displayName=a,o}export{g as a,R as b,T as c,M as l,z as o,N as r,O as u};
//# sourceMappingURL=createWithBsPrefix-d1384812.js.map
