import{j as o}from"./jsx-runtime-CKrituN3.js";import{R as y}from"./index-CBqU2yxZ.js";import{h as g,x}from"./ApplicationSessionManager-BIT2Vljh.js";import{B as U}from"./Button-CpzfOSQ4.js";const i=n=>{const{id:p,buttonProps:c={variant:"contained"},label:d="Browse...",onUploadStart:r,onComplete:a}=n,{accessToken:u}=g(),t=y.useRef(null),f=()=>{var e;t!=null&&t.current&&((e=t.current)==null||e.click())},m=async e=>{if(e.target.files&&e.target.files.length>0){r&&r();const s=e.target.files[0];try{const l=await x(u,s.name,s);a&&a({success:!0,resp:l})}catch(l){console.log("FileUpload: fail to upload file",l),a&&a({success:!1,error:l})}}};return o.jsxs(o.Fragment,{children:[o.jsx("input",{type:"file",ref:t,onChange:e=>{m(e)},style:{display:"none"}}),o.jsx(U,{id:p,onClick:f,...c,children:d})]})};try{i.displayName="FileUpload",i.__docgenInfo={description:"",displayName:"FileUpload",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},onUploadStart:{defaultValue:null,description:"",name:"onUploadStart",required:!1,type:{name:"(() => void)"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"((response: UploadCallbackResp) => void)"}}}}}catch{}export{i as F};
