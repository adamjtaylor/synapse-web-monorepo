import{c as Q}from"./_commonjsHelpers-BosuxZz1.js";var gr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var r={},t=Symbol("test"),e=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(e)!=="[object Symbol]")return!1;var o=42;r[t]=o;for(t in r)return!1;if(typeof Object.keys=="function"&&Object.keys(r).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(r).length!==0)return!1;var a=Object.getOwnPropertySymbols(r);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(r,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var y=Object.getOwnPropertyDescriptor(r,t);if(y.value!==o||y.enumerable!==!0)return!1}return!0},Br=gr,X=function(){return Br()&&!!Symbol.toStringTag},Dr=Error,_r=EvalError,Cr=RangeError,Gr=ReferenceError,vr=SyntaxError,B=TypeError,Nr=URIError,or=typeof Symbol<"u"&&Symbol,Mr=gr,Lr=function(){return typeof or!="function"||typeof Symbol!="function"||typeof or("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Mr()},C={__proto__:null,foo:{}},Wr=Object,kr=function(){return{__proto__:C}.foo===C.foo&&!(C instanceof Wr)},Jr="Function.prototype.bind called on incompatible ",Vr=Object.prototype.toString,qr=Math.max,Hr="[object Function]",nr=function(r,t){for(var e=[],o=0;o<r.length;o+=1)e[o]=r[o];for(var a=0;a<t.length;a+=1)e[a+r.length]=t[a];return e},zr=function(r,t){for(var e=[],o=t||0,a=0;o<r.length;o+=1,a+=1)e[a]=r[o];return e},Yr=function(n,r){for(var t="",e=0;e<n.length;e+=1)t+=n[e],e+1<n.length&&(t+=r);return t},Kr=function(r){var t=this;if(typeof t!="function"||Vr.apply(t)!==Hr)throw new TypeError(Jr+t);for(var e=zr(arguments,1),o,a=function(){if(this instanceof o){var c=t.apply(this,nr(e,arguments));return Object(c)===c?c:this}return t.apply(r,nr(e,arguments))},y=qr(0,t.length-e.length),l=[],f=0;f<y;f++)l[f]="$"+f;if(o=Function("binder","return function ("+Yr(l,",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var u=function(){};u.prototype=t.prototype,o.prototype=new u,u.prototype=null}return o},Qr=Kr,Z=Function.prototype.bind||Qr,Xr=Function.prototype.call,Zr=Object.prototype.hasOwnProperty,rt=Z,tt=rt.call(Xr,Zr),i,et=Dr,ot=_r,nt=Cr,at=Gr,E=vr,P=B,it=Nr,br=Function,G=function(n){try{return br('"use strict"; return ('+n+").constructor;")()}catch{}},v=Object.getOwnPropertyDescriptor;if(v)try{v({},"")}catch{v=null}var N=function(){throw new P},yt=v?function(){try{return arguments.callee,N}catch{try{return v(arguments,"callee").get}catch{return N}}}():N,h=Lr(),lt=kr(),p=Object.getPrototypeOf||(lt?function(n){return n.__proto__}:null),A={},ft=typeof Uint8Array>"u"||!p?i:p(Uint8Array),b={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?i:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?i:ArrayBuffer,"%ArrayIteratorPrototype%":h&&p?p([][Symbol.iterator]()):i,"%AsyncFromSyncIteratorPrototype%":i,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":typeof Atomics>"u"?i:Atomics,"%BigInt%":typeof BigInt>"u"?i:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?i:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?i:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?i:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":et,"%eval%":eval,"%EvalError%":ot,"%Float32Array%":typeof Float32Array>"u"?i:Float32Array,"%Float64Array%":typeof Float64Array>"u"?i:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?i:FinalizationRegistry,"%Function%":br,"%GeneratorFunction%":A,"%Int8Array%":typeof Int8Array>"u"?i:Int8Array,"%Int16Array%":typeof Int16Array>"u"?i:Int16Array,"%Int32Array%":typeof Int32Array>"u"?i:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":h&&p?p(p([][Symbol.iterator]())):i,"%JSON%":typeof JSON=="object"?JSON:i,"%Map%":typeof Map>"u"?i:Map,"%MapIteratorPrototype%":typeof Map>"u"||!h||!p?i:p(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?i:Promise,"%Proxy%":typeof Proxy>"u"?i:Proxy,"%RangeError%":nt,"%ReferenceError%":at,"%Reflect%":typeof Reflect>"u"?i:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?i:Set,"%SetIteratorPrototype%":typeof Set>"u"||!h||!p?i:p(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?i:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":h&&p?p(""[Symbol.iterator]()):i,"%Symbol%":h?Symbol:i,"%SyntaxError%":E,"%ThrowTypeError%":yt,"%TypedArray%":ft,"%TypeError%":P,"%Uint8Array%":typeof Uint8Array>"u"?i:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?i:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?i:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?i:Uint32Array,"%URIError%":it,"%WeakMap%":typeof WeakMap>"u"?i:WeakMap,"%WeakRef%":typeof WeakRef>"u"?i:WeakRef,"%WeakSet%":typeof WeakSet>"u"?i:WeakSet};if(p)try{null.error}catch(n){var pt=p(p(n));b["%Error.prototype%"]=pt}var ct=function n(r){var t;if(r==="%AsyncFunction%")t=G("async function () {}");else if(r==="%GeneratorFunction%")t=G("function* () {}");else if(r==="%AsyncGeneratorFunction%")t=G("async function* () {}");else if(r==="%AsyncGenerator%"){var e=n("%AsyncGeneratorFunction%");e&&(t=e.prototype)}else if(r==="%AsyncIteratorPrototype%"){var o=n("%AsyncGenerator%");o&&p&&(t=p(o.prototype))}return b[r]=t,t},ar={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},$=Z,U=tt,st=$.call(Function.call,Array.prototype.concat),ut=$.call(Function.apply,Array.prototype.splice),ir=$.call(Function.call,String.prototype.replace),x=$.call(Function.call,String.prototype.slice),gt=$.call(Function.call,RegExp.prototype.exec),vt=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,bt=/\\(\\)?/g,dt=function(r){var t=x(r,0,1),e=x(r,-1);if(t==="%"&&e!=="%")throw new E("invalid intrinsic syntax, expected closing `%`");if(e==="%"&&t!=="%")throw new E("invalid intrinsic syntax, expected opening `%`");var o=[];return ir(r,vt,function(a,y,l,f){o[o.length]=l?ir(f,bt,"$1"):y||a}),o},ht=function(r,t){var e=r,o;if(U(ar,e)&&(o=ar[e],e="%"+o[0]+"%"),U(b,e)){var a=b[e];if(a===A&&(a=ct(e)),typeof a>"u"&&!t)throw new P("intrinsic "+r+" exists, but is not available. Please file an issue!");return{alias:o,name:e,value:a}}throw new E("intrinsic "+r+" does not exist!")},w=function(r,t){if(typeof r!="string"||r.length===0)throw new P("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new P('"allowMissing" argument must be a boolean');if(gt(/^%?[^%]*%?$/,r)===null)throw new E("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=dt(r),o=e.length>0?e[0]:"",a=ht("%"+o+"%",t),y=a.name,l=a.value,f=!1,u=a.alias;u&&(o=u[0],ut(e,st([0,1],u)));for(var c=1,g=!0;c<e.length;c+=1){var s=e[c],d=x(s,0,1),O=x(s,-1);if((d==='"'||d==="'"||d==="`"||O==='"'||O==="'"||O==="`")&&d!==O)throw new E("property names with quotes must have matching quotes");if((s==="constructor"||!g)&&(f=!0),o+="."+s,y="%"+o+"%",U(b,y))l=b[y];else if(l!=null){if(!(s in l)){if(!t)throw new P("base intrinsic for "+r+" exists, but the property is not available.");return}if(v&&c+1>=e.length){var T=v(l,s);g=!!T,g&&"get"in T&&!("originalValue"in T.get)?l=T.get:l=l[s]}else g=U(l,s),l=l[s];g&&!f&&(b[y]=l)}}return l},dr={exports:{}},M,yr;function rr(){if(yr)return M;yr=1;var n=w,r=n("%Object.defineProperty%",!0)||!1;if(r)try{r({},"a",{value:1})}catch{r=!1}return M=r,M}var mt=w,F=mt("%Object.getOwnPropertyDescriptor%",!0);if(F)try{F([],"length")}catch{F=null}var D=F,lr=rr(),At=vr,m=B,fr=D,St=function(r,t,e){if(!r||typeof r!="object"&&typeof r!="function")throw new m("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new m("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new m("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new m("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new m("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new m("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,a=arguments.length>4?arguments[4]:null,y=arguments.length>5?arguments[5]:null,l=arguments.length>6?arguments[6]:!1,f=!!fr&&fr(r,t);if(lr)lr(r,t,{configurable:y===null&&f?f.configurable:!y,enumerable:o===null&&f?f.enumerable:!o,value:e,writable:a===null&&f?f.writable:!a});else if(l||!o&&!a&&!y)r[t]=e;else throw new At("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},q=rr(),hr=function(){return!!q};hr.hasArrayLengthDefineBug=function(){if(!q)return null;try{return q([],"length",{value:1}).length!==1}catch{return!0}};var Pt=hr,Et=w,pr=St,$t=Pt(),cr=D,sr=B,wt=Et("%Math.floor%"),Ot=function(r,t){if(typeof r!="function")throw new sr("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||wt(t)!==t)throw new sr("`length` must be a positive 32-bit integer");var e=arguments.length>2&&!!arguments[2],o=!0,a=!0;if("length"in r&&cr){var y=cr(r,"length");y&&!y.configurable&&(o=!1),y&&!y.writable&&(a=!1)}return(o||a||!e)&&($t?pr(r,"length",t,!0,!0):pr(r,"length",t)),r};(function(n){var r=Z,t=w,e=Ot,o=B,a=t("%Function.prototype.apply%"),y=t("%Function.prototype.call%"),l=t("%Reflect.apply%",!0)||r.call(y,a),f=rr(),u=t("%Math.max%");n.exports=function(s){if(typeof s!="function")throw new o("a function is required");var d=l(r,y,arguments);return e(d,1+u(0,s.length-(arguments.length-1)),!0)};var c=function(){return l(r,a,arguments)};f?f(n.exports,"apply",{value:c}):n.exports.apply=c})(dr);var Tt=dr.exports,mr=w,Ar=Tt,Ft=Ar(mr("String.prototype.indexOf")),tr=function(r,t){var e=mr(r,!!t);return typeof e=="function"&&Ft(r,".prototype.")>-1?Ar(e):e},It=X(),jt=tr,H=jt("Object.prototype.toString"),_=function(r){return It&&r&&typeof r=="object"&&Symbol.toStringTag in r?!1:H(r)==="[object Arguments]"},Sr=function(r){return _(r)?!0:r!==null&&typeof r=="object"&&typeof r.length=="number"&&r.length>=0&&H(r)!=="[object Array]"&&H(r.callee)==="[object Function]"},Rt=function(){return _(arguments)}();_.isLegacyArguments=Sr;var pe=Rt?_:Sr,Pr=Function.prototype.toString,S=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,z,I;if(typeof S=="function"&&typeof Object.defineProperty=="function")try{z=Object.defineProperty({},"length",{get:function(){throw I}}),I={},S(function(){throw 42},null,z)}catch(n){n!==I&&(S=null)}else S=null;var Ut=/^\s*class\b/,Y=function(r){try{var t=Pr.call(r);return Ut.test(t)}catch{return!1}},L=function(r){try{return Y(r)?!1:(Pr.call(r),!0)}catch{return!1}},j=Object.prototype.toString,xt="[object Object]",Bt="[object Function]",Dt="[object GeneratorFunction]",_t="[object HTMLAllCollection]",Ct="[object HTML document.all class]",Gt="[object HTMLCollection]",Nt=typeof Symbol=="function"&&!!Symbol.toStringTag,Mt=!(0 in[,]),K=function(){return!1};if(typeof document=="object"){var Lt=document.all;j.call(Lt)===j.call(document.all)&&(K=function(r){if((Mt||!r)&&(typeof r>"u"||typeof r=="object"))try{var t=j.call(r);return(t===_t||t===Ct||t===Gt||t===xt)&&r("")==null}catch{}return!1})}var Wt=S?function(r){if(K(r))return!0;if(!r||typeof r!="function"&&typeof r!="object")return!1;try{S(r,null,z)}catch(t){if(t!==I)return!1}return!Y(r)&&L(r)}:function(r){if(K(r))return!0;if(!r||typeof r!="function"&&typeof r!="object")return!1;if(Nt)return L(r);if(Y(r))return!1;var t=j.call(r);return t!==Bt&&t!==Dt&&!/^\[object HTML/.test(t)?!1:L(r)},kt=Wt,Jt=Object.prototype.toString,Er=Object.prototype.hasOwnProperty,Vt=function(r,t,e){for(var o=0,a=r.length;o<a;o++)Er.call(r,o)&&(e==null?t(r[o],o,r):t.call(e,r[o],o,r))},qt=function(r,t,e){for(var o=0,a=r.length;o<a;o++)e==null?t(r.charAt(o),o,r):t.call(e,r.charAt(o),o,r)},Ht=function(r,t,e){for(var o in r)Er.call(r,o)&&(e==null?t(r[o],o,r):t.call(e,r[o],o,r))},zt=function(r,t,e){if(!kt(t))throw new TypeError("iterator must be a function");var o;arguments.length>=3&&(o=e),Jt.call(r)==="[object Array]"?Vt(r,t,o):typeof r=="string"?qt(r,t,o):Ht(r,t,o)},$r=zt,W=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],Yt=typeof globalThis>"u"?Q:globalThis,wr=function(){for(var r=[],t=0;t<W.length;t++)typeof Yt[W[t]]=="function"&&(r[r.length]=W[t]);return r},Or=$r,Kt=wr,er=tr,Qt=er("Object.prototype.toString"),Tr=X(),R=D,Xt=typeof globalThis>"u"?Q:globalThis,Fr=Kt(),Zt=er("Array.prototype.indexOf",!0)||function(r,t){for(var e=0;e<r.length;e+=1)if(r[e]===t)return e;return-1},re=er("String.prototype.slice"),Ir={},k=Object.getPrototypeOf;Tr&&R&&k&&Or(Fr,function(n){var r=new Xt[n];if(Symbol.toStringTag in r){var t=k(r),e=R(t,Symbol.toStringTag);if(!e){var o=k(t);e=R(o,Symbol.toStringTag)}Ir[n]=e.get}});var te=function(r){var t=!1;return Or(Ir,function(e,o){if(!t)try{t=e.call(r)===o}catch{}}),t},ee=function(r){if(!r||typeof r!="object")return!1;if(!Tr||!(Symbol.toStringTag in r)){var t=re(Qt(r),8,-1);return Zt(Fr,t)>-1}return R?te(r):!1},jr=$r,oe=wr,Rr=tr,J=D,ne=Rr("Object.prototype.toString"),Ur=X(),ur=typeof globalThis>"u"?Q:globalThis,ae=oe(),ie=Rr("String.prototype.slice"),xr={},V=Object.getPrototypeOf;Ur&&J&&V&&jr(ae,function(n){if(typeof ur[n]=="function"){var r=new ur[n];if(Symbol.toStringTag in r){var t=V(r),e=J(t,Symbol.toStringTag);if(!e){var o=V(t);e=J(o,Symbol.toStringTag)}xr[n]=e.get}}});var ye=function(r){var t=!1;return jr(xr,function(e,o){if(!t)try{var a=e.call(r);a===o&&(t=a)}catch{}}),t},le=ee,ce=function(r){return le(r)?!Ur||!(Symbol.toStringTag in r)?ie(ne(r),8,-1):ye(r):!1};export{ee as a,gr as b,tr as c,Tt as d,Lr as e,Z as f,w as g,Pt as h,pe as i,X as s,B as t,ce as w};
