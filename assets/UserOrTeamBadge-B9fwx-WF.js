import{j as a}from"./jsx-runtime-CKrituN3.js";import"./OrientationBanner-eGM9Gy2i.js";import"./index-CBqU2yxZ.js";import{P as m}from"./getEndpoint-CjoHA800.js";import"./ApplicationSessionManager-BIT2Vljh.js";import{u as p,a as c}from"./UserBadge-_T0G9b7c.js";import{I as f}from"./IconSvg-RU2HGWAm.js";import{k as I,P as g}from"./SynapseConstants-BgUUD4xl.js";import{S as _}from"./Skeleton-CL8YFeep.js";function o(n){const{teamId:e}=n;let{teamName:t,disableHref:l}=n,i="team";e==I&&(i="public",t="All registered Synapse users",l=!0),e==g&&(i="public",t="Anyone on the web",l=!0);const r=l?"span":"a";return a.jsxs("span",{children:[a.jsx(f,{icon:i}),a.jsx(r,{style:{marginLeft:"5px"},href:l?void 0:`${m.PORTAL}#!Team:${e}`,children:t})]})}try{o.displayName="TeamBadge",o.__docgenInfo={description:"",displayName:"TeamBadge",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string | number"}},teamName:{defaultValue:null,description:"",name:"teamName",required:!0,type:{name:"string"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}}}}}catch{}function d(n){let e=n.principalId;const{disableHref:t,showCardOnHover:l,showFullName:i,userGroupHeader:r}=n;e==null&&(e=r==null?void 0:r.ownerId);const{data:u}=p((e??"").toString(),{enabled:!r}),s=r??u;return e==null&&r==null?(console.error("Expected one of principalId or userGroupHeader to be defined but both were null or undefined"),a.jsx(a.Fragment,{})):s===void 0?a.jsx(_,{width:125,height:30}):s.isIndividual?a.jsx(c,{userId:e.toString(),disableLink:t,showFullName:i,showCardOnHover:l}):a.jsx(o,{teamId:e,teamName:s.userName,disableHref:t})}try{d.displayName="UserOrTeamBadge",d.__docgenInfo={description:"",displayName:"UserOrTeamBadge",props:{principalId:{defaultValue:null,description:"",name:"principalId",required:!1,type:{name:"string | number"}},userGroupHeader:{defaultValue:null,description:"",name:"userGroupHeader",required:!1,type:{name:"UserGroupHeader"}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}},showCardOnHover:{defaultValue:null,description:"",name:"showCardOnHover",required:!1,type:{name:"boolean"}}}}}catch{}export{d as U};
