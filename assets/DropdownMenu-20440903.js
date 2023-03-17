import{j as a,a as S}from"./jsx-runtime-670450c2.js";import{r as u,R as E}from"./index-f1f749bf.js";import{I as A}from"./IconSvg-824f6a4b.js";import{B as V}from"./Button-aba6c75a.js";import{T as C}from"./Typography-08c96b57.js";import{a as U,v as z}from"./Clear-9ea9f276.js";import{F as K}from"./Fade-009a714e.js";import{P as X}from"./Paper-8468d701.js";import{u as G,a as Y}from"./useForkRef-dd8a6e5c.js";import{u as J}from"./TransitionGroupContext-a2b6e27b.js";import{o as P}from"./isHostComponent-fa76b8d9.js";import{M as Q}from"./MenuList-2735e2ec.js";import{_ as B}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as v}from"./extends-98964cd2.js";import{d as N,g as O,s as D,e as _,h as R,i as F,r as Z,q as L}from"./styled-e850f5df.js";import{a as k}from"./List-3f9fbf9e.js";import{B as ee}from"./ButtonBase-3cfd5227.js";import{d as q,D as te}from"./Divider-625f3695.js";function H(e){return e.substring(2).toLowerCase()}function ne(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function oe(e){const{children:t,disableReactTree:s=!1,mouseEvent:o="onClick",onClickAway:y,touchEvent:l="onTouchEnd"}=e,d=u.useRef(!1),i=u.useRef(null),c=u.useRef(!1),f=u.useRef(!1);u.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const I=G(t.ref,i),g=J(r=>{const n=f.current;f.current=!1;const p=P(i.current);if(!c.current||!i.current||"clientX"in r&&ne(r,p))return;if(d.current){d.current=!1;return}let b;r.composedPath?b=r.composedPath().indexOf(i.current)>-1:b=!p.documentElement.contains(r.target)||i.current.contains(r.target),!b&&(s||!n)&&y(r)}),h=r=>n=>{f.current=!0;const p=t.props[r];p&&p(n)},x={ref:I};return l!==!1&&(x[l]=h(l)),u.useEffect(()=>{if(l!==!1){const r=H(l),n=P(i.current),p=()=>{d.current=!0};return n.addEventListener(r,g),n.addEventListener("touchmove",p),()=>{n.removeEventListener(r,g),n.removeEventListener("touchmove",p)}}},[g,l]),o!==!1&&(x[o]=h(o)),u.useEffect(()=>{if(o!==!1){const r=H(o),n=P(i.current);return n.addEventListener(r,g),()=>{n.removeEventListener(r,g)}}},[g,o]),a(u.Fragment,{children:u.cloneElement(t,x)})}function re(e){return O("MuiListItemIcon",e)}const se=N("MuiListItemIcon",["root","alignItemsFlexStart"]),W=se,ae=["className"],ie=e=>{const{alignItems:t,classes:s}=e;return F({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},re,s)},ce=D("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>v({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),le=u.forwardRef(function(t,s){const o=_({props:t,name:"MuiListItemIcon"}),{className:y}=o,l=B(o,ae),d=u.useContext(k),i=v({},o,{alignItems:d.alignItems}),c=ie(i);return a(ce,v({className:R(c.root,y),ownerState:i,ref:s},l))}),de=le;function ue(e){return O("MuiListItemText",e)}const pe=N("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),w=pe,me=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],fe=e=>{const{classes:t,inset:s,primary:o,secondary:y,dense:l}=e;return F({root:["root",s&&"inset",l&&"dense",o&&y&&"multiline"],primary:["primary"],secondary:["secondary"]},ue,t)},ye=D("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${w.primary}`]:t.primary},{[`& .${w.secondary}`]:t.secondary},t.root,s.inset&&t.inset,s.primary&&s.secondary&&t.multiline,s.dense&&t.dense]}})(({ownerState:e})=>v({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),ge=u.forwardRef(function(t,s){const o=_({props:t,name:"MuiListItemText"}),{children:y,className:l,disableTypography:d=!1,inset:i=!1,primary:c,primaryTypographyProps:f,secondary:I,secondaryTypographyProps:g}=o,h=B(o,me),{dense:x}=u.useContext(k);let r=c??y,n=I;const p=v({},o,{disableTypography:d,inset:i,primary:!!r,secondary:!!n,dense:x}),b=fe(p);return r!=null&&r.type!==C&&!d&&(r=a(C,v({variant:x?"body2":"body1",className:b.primary,component:f!=null&&f.variant?void 0:"span",display:"block"},f,{children:r}))),n!=null&&n.type!==C&&!d&&(n=a(C,v({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},g,{children:n}))),S(ye,v({className:R(b.root,l),ownerState:p,ref:s},h,{children:[r,n]}))}),ve=ge;function be(e){return O("MuiMenuItem",e)}const Ie=N("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),M=Ie,xe=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],he=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},Ce=e=>{const{disabled:t,dense:s,divider:o,disableGutters:y,selected:l,classes:d}=e,c=F({root:["root",s&&"dense",t&&"disabled",!y&&"gutters",o&&"divider",l&&"selected"]},be,d);return v({},d,c)},Te=D(ee,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:he})(({theme:e,ownerState:t})=>v({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:L(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${M.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:L(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${M.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:L(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:L(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${M.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${M.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${q.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${q.inset}`]:{marginLeft:52},[`& .${w.root}`]:{marginTop:0,marginBottom:0},[`& .${w.inset}`]:{paddingLeft:36},[`& .${W.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&v({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${W.root} svg`]:{fontSize:"1.25rem"}}))),Me=u.forwardRef(function(t,s){const o=_({props:t,name:"MuiMenuItem"}),{autoFocus:y=!1,component:l="li",dense:d=!1,divider:i=!1,disableGutters:c=!1,focusVisibleClassName:f,role:I="menuitem",tabIndex:g,className:h}=o,x=B(o,xe),r=u.useContext(k),n=u.useMemo(()=>({dense:d||r.dense||!1,disableGutters:c}),[r.dense,d,c]),p=u.useRef(null);Y(()=>{y&&p.current&&p.current.focus()},[y]);const b=v({},o,{dense:n.dense,divider:i,disableGutters:c}),T=Ce(o),m=G(p,s);let $;return o.disabled||($=g!==void 0?g:-1),a(k.Provider,{value:n,children:a(Te,v({ref:m,role:I,tabIndex:$,component:l,focusVisibleClassName:R(T.focusVisible,f),className:R(T.root,h)},x,{ownerState:b,classes:T}))})}),$e=Me;function j(e){const{buttonTooltip:t,dropdownButtonText:s,items:o=[],convertSingleItemToButton:y=!0,renderMenuIfNoItems:l=!1,buttonProps:d={}}=e,i=u.useId(),[c,f]=E.useState(!1),I=E.useRef(null),g=o.flat().length;if(!l&&g===0)return null;if(y&&g===1){const n=o.flat()[0];return a(V,{component:"href"in n?"a":"button",title:n.tooltipText,variant:"outlined",href:"href"in n?n.href:void 0,rel:"href"in n?"noopener noreferrer":void 0,onClick:"onClick"in n?n.onClick:void 0,disabled:n.disabled,children:a(C,{variant:"buttonLink",children:n.text})})}const h=()=>{f(n=>!n)},x=n=>{I.current&&I.current.contains(n.target)||f(!1)};function r(n){n.key==="Tab"?(n.preventDefault(),f(!1)):n.key==="Escape"&&f(!1)}return S(E.Fragment,{children:[a(U,{title:t,placement:"top",children:a("span",{children:a(V,{variant:"outlined",ref:I,id:`composition-button-${i}`,"aria-controls":c?`composition-menu-${i}`:void 0,"aria-expanded":c?"true":void 0,"aria-haspopup":"true",onClick:h,...d,children:a(C,{variant:"buttonLink",children:s})})})}),a(z,{open:c,anchorEl:I.current,role:void 0,placement:"bottom-end",transition:!0,style:{zIndex:10},children:({TransitionProps:n})=>a(K,{...n,children:a(X,{children:a(oe,{onClickAway:x,children:a(Q,{autoFocusItem:c,id:`composition-menu-${i}`,"aria-labelledby":`composition-button-${i}`,onKeyDown:r,children:o.map((p,b,T)=>[p.map(m=>a(U,{title:m.tooltipText,placement:"left",children:S($e,{component:"a",sx:{"&:hover":{color:"unset"},"&:focus":{color:"unset",textDecoration:"unset"}},disabled:m.disabled,href:"href"in m?m.href:void 0,rel:"href"in m?"noopener noreferrer":void 0,style:{pointerEvents:"auto"},onClick:$=>{!m.disabled&&"onClick"in m&&m.onClick&&(f(!1),m.onClick($))},children:[a(de,{style:{minWidth:"30px"},children:m.icon&&a(A,{icon:m.icon,sx:{width:"17px",height:"17px",...m.iconSx},wrap:!1})}),a(ve,{primaryTypographyProps:{variant:"smallText1",sx:m.textSx},sx:{marginTop:0},children:m.text})]})},m.text)),b<T.length-1&&a(te,{})])})})})})})]})}try{j.displayName="DropdownMenu",j.__docgenInfo={description:"The DropdownMenu component provides a generic way to compose a MUI dropdown menu.",displayName:"DropdownMenu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropdownMenuItem[][]"}},dropdownButtonText:{defaultValue:null,description:"",name:"dropdownButtonText",required:!0,type:{name:"string"}},buttonTooltip:{defaultValue:null,description:"",name:"buttonTooltip",required:!1,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:'ButtonProps<"button", {}>'}},convertSingleItemToButton:{defaultValue:null,description:"",name:"convertSingleItemToButton",required:!1,type:{name:"boolean"}},renderMenuIfNoItems:{defaultValue:null,description:"",name:"renderMenuIfNoItems",required:!1,type:{name:"boolean"}}}}}catch{}export{j as D};
//# sourceMappingURL=DropdownMenu-20440903.js.map
