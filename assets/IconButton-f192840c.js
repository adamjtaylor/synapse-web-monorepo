import{d as m,g as z,s as R,p as t,q as u,e as y,_ as B,h as C,i as $}from"./styled-1b6f4d44.js";import{_ as s}from"./extends-98964cd2.js";import{r as I}from"./index-f1f749bf.js";import{j as x}from"./jsx-runtime-670450c2.js";import{B as h}from"./ButtonBase-4feee6fc.js";function k(o){return z("MuiIconButton",o)}const _=m("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),M=_,O=["edge","children","className","color","disabled","disableFocusRipple","size"],T=o=>{const{classes:a,disabled:e,color:r,edge:i,size:n}=o,l={root:["root",e&&"disabled",r!=="default"&&`color${t(r)}`,i&&`edge${t(i)}`,`size${t(n)}`]};return $(l,k,a)},U=R(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.color!=="default"&&a[`color${t(e.color)}`],e.edge&&a[`edge${t(e.edge)}`],a[`size${t(e.size)}`]]}})(({theme:o,ownerState:a})=>s({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:o,ownerState:a})=>{var e;const r=(e=(o.vars||o).palette)==null?void 0:e[a.color];return s({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&s({color:r==null?void 0:r.main},!a.disableRipple&&{"&:hover":s({},r&&{backgroundColor:o.vars?`rgba(${r.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(r.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${M.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),j=I.forwardRef(function(a,e){const r=y({props:a,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:v="medium"}=r,f=B(r,O),p=s({},r,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:v}),b=T(p);return x(U,s({className:C(b.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:e,ownerState:p},f,{children:n}))}),W=j;export{W as I};
//# sourceMappingURL=IconButton-f192840c.js.map
