import{a as y,F as g,j as s}from"./jsx-runtime-9dc53467.js";import{R as U}from"./index-76fb7be0.js";import{h as _,B as b}from"./ApplicationSessionManager-e3b4cd5b.js";import{B as h}from"./Button-33299b2c.js";const i=o=>{const{id:p,buttonProps:c={variant:"contained"},label:d="Browse...",onUploadStart:n,onComplete:t}=o,{accessToken:u}=_(),a=U.useRef(null),f=()=>{var e;a!=null&&a.current&&((e=a.current)==null||e.click())},m=async e=>{if(e.target.files&&e.target.files.length>0){n&&n();const r=e.target.files[0];try{const l=await b(u,r.name,r);t&&t({success:!0,resp:l})}catch(l){console.log("FileUpload: fail to upload file",l),t&&t({success:!1,error:l})}}};return y(g,{children:[s("input",{type:"file",ref:a,onChange:e=>{m(e)},style:{display:"none"}}),s(h,{id:p,onClick:f,...c,children:d})]})};try{i.displayName="FileUpload",i.__docgenInfo={description:"",displayName:"FileUpload",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!1,type:{name:"ButtonProps"}},onUploadStart:{defaultValue:null,description:"",name:"onUploadStart",required:!1,type:{name:"(() => void)"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"((response: UploadCallbackResp) => void)"}}}}}catch{}export{i as F};
