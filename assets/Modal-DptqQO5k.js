import{a as fe,g as pe,_ as me,c as Z}from"./createTheme-BmyBSwiD.js";import{_ as P}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import{r as d}from"./index-CBqU2yxZ.js";import{s as se,u as he,c as be}from"./styled-CpvAj9Jd.js";import{j as A}from"./jsx-runtime-CKrituN3.js";import{B as ge}from"./Backdrop-qaxIKrms.js";import{g as xe}from"./getScrollbarSize-Bqq2hMjQ.js";import{o as O}from"./isHostComponent-BHK9_qiJ.js";import{o as q}from"./ownerWindow-PUvYI-j5.js";import{u as ie}from"./useForkRef-BEI5gptS.js";import{u as ee}from"./TransitionGroupContext-CSiky9Ms.js";import{e as Ee,a as te,P as ve}from"./Grow-DI9-8Eyf.js";import{c as oe}from"./createChainedFunction-BO_9K8Jh.js";const Re=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Te(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function ke(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function ye(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||ke(e))}function Pe(e){const t=[],n=[];return Array.from(e.querySelectorAll(Re)).forEach((o,s)=>{const r=Te(o);r===-1||!ye(o)||(r===0?t.push(o):n.push({documentOrder:s,tabIndex:r,node:o}))}),n.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function Ie(){return!0}function Se(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:r=Pe,isEnabled:i=Ie,open:c}=e,f=d.useRef(!1),g=d.useRef(null),m=d.useRef(null),h=d.useRef(null),R=d.useRef(null),x=d.useRef(!1),l=d.useRef(null),B=ie(t.ref,l),C=d.useRef(null);d.useEffect(()=>{!c||!l.current||(x.current=!n)},[n,c]),d.useEffect(()=>{if(!c||!l.current)return;const a=O(l.current);return l.current.contains(a.activeElement)||(l.current.hasAttribute("tabIndex")||l.current.setAttribute("tabIndex","-1"),x.current&&l.current.focus()),()=>{s||(h.current&&h.current.focus&&(f.current=!0,h.current.focus()),h.current=null)}},[c]),d.useEffect(()=>{if(!c||!l.current)return;const a=O(l.current),T=b=>{C.current=b,!(o||!i()||b.key!=="Tab")&&a.activeElement===l.current&&b.shiftKey&&(f.current=!0,m.current&&m.current.focus())},k=()=>{const b=l.current;if(b===null)return;if(!a.hasFocus()||!i()||f.current){f.current=!1;return}if(b.contains(a.activeElement)||o&&a.activeElement!==g.current&&a.activeElement!==m.current)return;if(a.activeElement!==R.current)R.current=null;else if(R.current!==null)return;if(!x.current)return;let E=[];if((a.activeElement===g.current||a.activeElement===m.current)&&(E=r(l.current)),E.length>0){var F,v;const D=!!((F=C.current)!=null&&F.shiftKey&&((v=C.current)==null?void 0:v.key)==="Tab"),w=E[0],S=E[E.length-1];typeof w!="string"&&typeof S!="string"&&(D?S.focus():w.focus())}else b.focus()};a.addEventListener("focusin",k),a.addEventListener("keydown",T,!0);const M=setInterval(()=>{a.activeElement&&a.activeElement.tagName==="BODY"&&k()},50);return()=>{clearInterval(M),a.removeEventListener("focusin",k),a.removeEventListener("keydown",T,!0)}},[n,o,s,i,c,r]);const N=a=>{h.current===null&&(h.current=a.relatedTarget),x.current=!0,R.current=a.target;const T=t.props.onFocus;T&&T(a)},I=a=>{h.current===null&&(h.current=a.relatedTarget),x.current=!0};return A.jsxs(d.Fragment,{children:[A.jsx("div",{tabIndex:c?0:-1,onFocus:I,ref:g,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:B,onFocus:N}),A.jsx("div",{tabIndex:c?0:-1,onFocus:I,ref:m,"data-testid":"sentinelEnd"})]})}function Ce(e){const t=O(e);return t.body===e?q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ne(e){return parseInt(q(e).getComputedStyle(e).paddingRight,10)||0}function Ne(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function re(e,t,n,o,s){const r=[t,n,...o];[].forEach.call(e.children,i=>{const c=r.indexOf(i)===-1,f=!Ne(i);c&&f&&U(i,s)})}function Y(e,t){let n=-1;return e.some((o,s)=>t(o)?(n=s,!0):!1),n}function Me(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Ce(o)){const i=xe(O(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${ne(o)+i}px`;const c=O(o).querySelectorAll(".mui-fixed");[].forEach.call(c,f=>{n.push({value:f.style.paddingRight,property:"padding-right",el:f}),f.style.paddingRight=`${ne(f)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=O(o).body;else{const i=o.parentElement,c=q(o);r=(i==null?void 0:i.nodeName)==="HTML"&&c.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:c})=>{r?i.style.setProperty(c,r):i.style.removeProperty(c)})}}function Fe(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class we{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&U(t.modalRef,!1);const s=Fe(n);re(n,t.mount,t.modalRef,s,!0);const r=Y(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),o)}mount(t,n){const o=Y(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[o];s.restore||(s.restore=Me(s,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=Y(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&U(t.modalRef,n),re(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&U(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ae(e){return typeof e=="function"?e():e}function Oe(e){return e?e.props.hasOwnProperty("in"):!1}const Be=new we;function De(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:s=Be,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:c,children:f,onClose:g,open:m,rootRef:h}=e,R=d.useRef({}),x=d.useRef(null),l=d.useRef(null),B=ie(l,h),[C,N]=d.useState(!m),I=Oe(f);let a=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(a=!1);const T=()=>O(x.current),k=()=>(R.current.modalRef=l.current,R.current.mount=x.current,R.current),M=()=>{s.mount(k(),{disableScrollLock:o}),l.current&&(l.current.scrollTop=0)},b=ee(()=>{const p=Ae(t)||T().body;s.add(k(),p),l.current&&M()}),E=d.useCallback(()=>s.isTopModal(k()),[s]),F=ee(p=>{x.current=p,p&&(m&&E()?M():l.current&&U(l.current,a))}),v=d.useCallback(()=>{s.remove(k(),a)},[a,s]);d.useEffect(()=>()=>{v()},[v]),d.useEffect(()=>{m?b():(!I||!r)&&v()},[m,v,I,r,b]);const D=p=>u=>{var y;(y=p.onKeyDown)==null||y.call(p,u),!(u.key!=="Escape"||u.which===229||!E())&&(n||(u.stopPropagation(),g&&g(u,"escapeKeyDown")))},w=p=>u=>{var y;(y=p.onClick)==null||y.call(p,u),u.target===u.currentTarget&&g&&g(u,"backdropClick")};return{getRootProps:(p={})=>{const u=Ee(e);delete u.onTransitionEnter,delete u.onTransitionExited;const y=P({},u,p);return P({role:"presentation"},y,{onKeyDown:D(y),ref:B})},getBackdropProps:(p={})=>{const u=p;return P({"aria-hidden":!0},u,{onClick:w(u),open:m})},getTransitionProps:()=>{const p=()=>{N(!1),i&&i()},u=()=>{N(!0),c&&c(),r&&v()};return{onEnter:oe(p,f==null?void 0:f.props.onEnter),onExited:oe(u,f==null?void 0:f.props.onExited)}},rootRef:B,portalRef:F,isTopModal:E,exited:C,hasTransition:I}}function Le(e){return fe("MuiModal",e)}pe("MuiModal",["root","hidden","backdrop"]);const He=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],je=e=>{const{open:t,exited:n,classes:o}=e;return be({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Le,o)},Ke=se("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>P({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Ue=se(ge,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),_e=d.forwardRef(function(t,n){var o,s,r,i,c,f;const g=he({name:"MuiModal",props:t}),{BackdropComponent:m=Ue,BackdropProps:h,className:R,closeAfterTransition:x=!1,children:l,container:B,component:C,components:N={},componentsProps:I={},disableAutoFocus:a=!1,disableEnforceFocus:T=!1,disableEscapeKeyDown:k=!1,disablePortal:M=!1,disableRestoreFocus:b=!1,disableScrollLock:E=!1,hideBackdrop:F=!1,keepMounted:v=!1,onBackdropClick:D,open:w,slotProps:S,slots:j}=g,G=me(g,He),p=P({},g,{closeAfterTransition:x,disableAutoFocus:a,disableEnforceFocus:T,disableEscapeKeyDown:k,disablePortal:M,disableRestoreFocus:b,disableScrollLock:E,hideBackdrop:F,keepMounted:v}),{getRootProps:u,getBackdropProps:y,getTransitionProps:ae,portalRef:le,isTopModal:ce,exited:V,hasTransition:X}=De(P({},p,{rootRef:n})),K=P({},p,{exited:V}),L=je(K),_={};if(l.props.tabIndex===void 0&&(_.tabIndex="-1"),X){const{onEnter:H,onExited:$}=ae();_.onEnter=H,_.onExited=$}const J=(o=(s=j==null?void 0:j.root)!=null?s:N.Root)!=null?o:Ke,Q=(r=(i=j==null?void 0:j.backdrop)!=null?i:N.Backdrop)!=null?r:m,W=(c=S==null?void 0:S.root)!=null?c:I.root,z=(f=S==null?void 0:S.backdrop)!=null?f:I.backdrop,de=te({elementType:J,externalSlotProps:W,externalForwardedProps:G,getSlotProps:u,additionalProps:{ref:n,as:C},ownerState:K,className:Z(R,W==null?void 0:W.className,L==null?void 0:L.root,!K.open&&K.exited&&(L==null?void 0:L.hidden))}),ue=te({elementType:Q,externalSlotProps:z,additionalProps:h,getSlotProps:H=>y(P({},H,{onClick:$=>{D&&D($),H!=null&&H.onClick&&H.onClick($)}})),className:Z(z==null?void 0:z.className,h==null?void 0:h.className,L==null?void 0:L.backdrop),ownerState:K});return!v&&!w&&(!X||V)?null:A.jsx(ve,{ref:le,container:B,disablePortal:M,children:A.jsxs(J,P({},de,{children:[!F&&m?A.jsx(Q,P({},ue)):null,A.jsx(Se,{disableEnforceFocus:T,disableAutoFocus:a,disableRestoreFocus:b,isEnabled:ce,open:w,children:d.cloneElement(l,_)})]}))})}),ot=_e;export{Se as F,ot as M};
