import{b as S}from"./_baseSlice-cf92e063.js";import{i as g}from"./_isIterateeCall-15ff692b.js";import{t as p}from"./toInteger-15407dea.js";import{S as v,c as w}from"./_cacheHas-e49a1757.js";import{a as b,c as x}from"./without-e28d7bc4.js";import{bW as u}from"./index-292d735c.js";import{s as I}from"./_setToArray-3d6ec6fd.js";function A(){}var C=Math.ceil,M=Math.max;function H(n,e,s){(s?g(n,e,s):e===void 0)?e=1:e=M(p(e),0);var f=n==null?0:n.length;if(!f||e<1)return[];for(var i=0,a=0,l=Array(C(f/e));i<f;)l[a++]=S(n,i,i+=e);return l}var R=1/0,q=u&&1/I(new u([,-0]))[1]==R?function(n){return new u(n)}:A;const E=q;var N=200;function T(n,e,s){var f=-1,i=b,a=n.length,l=!0,h=[],t=h;if(s)l=!1,i=x;else if(a>=N){var c=e?null:E(n);if(c)return I(c);l=!1,i=w,t=new v}else t=e?[]:h;n:for(;++f<a;){var r=n[f],o=e?e(r):r;if(r=s||r!==0?r:0,l&&o===o){for(var m=t.length;m--;)if(t[m]===o)continue n;e&&t.push(o),h.push(r)}else i(t,o,s)||(t!==h&&t.push(o),h.push(r))}return h}function L(n){return n&&n.length?T(n):[]}export{T as b,H as c,A as n,L as u};
//# sourceMappingURL=uniq-50c4e28d.js.map
