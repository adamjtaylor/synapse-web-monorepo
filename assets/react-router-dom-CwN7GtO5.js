import{w as F,x as b,y as G,z as x,B as $,C as I,D as J}from"./SynapseClient-DVOjLlPA.js";import{_ as M}from"./inheritsLoose-B7h9gheN.js";import{R as c}from"./index-Dl6G-zuu.js";import{_ as g}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{_ as B}from"./createTheme-CwlmBDro.js";import{i as W}from"./tiny-invariant-CopsF_GD.js";var tr=function(r){M(t,r);function t(){for(var a,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return a=r.call.apply(r,[this].concat(o))||this,a.history=F(a.props),a}var e=t.prototype;return e.render=function(){return c.createElement(b,{history:this.history,children:this.props.children})},t}(c.Component);c.Component;var E=function(t,e){return typeof t=="function"?t(e):t},S=function(t,e){return typeof t=="string"?J(t,null,null,e):t},H=function(t){return t},v=c.forwardRef;typeof v>"u"&&(v=H);function O(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var Q=v(function(r,t){var e=r.innerRef,a=r.navigate,i=r.onClick,o=B(r,["innerRef","navigate","onClick"]),n=o.target,l=g({},o,{onClick:function(s){try{i&&i(s)}catch(u){throw s.preventDefault(),u}!s.defaultPrevented&&s.button===0&&(!n||n==="_self")&&!O(s)&&(s.preventDefault(),a())}});return H!==v?l.ref=t||e:l.ref=e,c.createElement("a",l)}),U=v(function(r,t){var e=r.component,a=e===void 0?Q:e,i=r.replace,o=r.to,n=r.innerRef,l=B(r,["component","replace","to","innerRef"]);return c.createElement(x.Consumer,null,function(f){f||W(!1);var s=f.history,u=S(E(o,f.location),f.location),C=u?s.createHref(u):"",p=g({},l,{href:C,navigate:function(){var m=E(o,f.location),d=$(f.location)===$(S(m)),L=i||d?s.replace:s.push;L(m)}});return H!==v?p.ref=t||n:p.innerRef=n,c.createElement(a,p)})}),q=function(t){return t},w=c.forwardRef;typeof w>"u"&&(w=q);function V(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.filter(function(a){return a}).join(" ")}var er=w(function(r,t){var e=r["aria-current"],a=e===void 0?"page":e,i=r.activeClassName,o=i===void 0?"active":i,n=r.activeStyle,l=r.className,f=r.exact,s=r.isActive,u=r.location,C=r.sensitive,p=r.strict,h=r.style,m=r.to,d=r.innerRef,L=B(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(x.Consumer,null,function(D){D||W(!1);var y=u||D.location,K=S(E(m,y),y),T=K.pathname,j=T&&T.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),z=j?I(y.pathname,{path:j,exact:f,sensitive:C,strict:p}):null,R=!!(s?s(z,y):z),N=typeof l=="function"?l(R):l,P=typeof h=="function"?h(R):h;R&&(N=V(N,o),P=g({},P,n));var A=g({"aria-current":R&&a||null,className:N,style:P,to:K},L);return q!==w?A.ref=t||d:A.innerRef=d,c.createElement(U,A)})});export{tr as B,U as L,er as N};
