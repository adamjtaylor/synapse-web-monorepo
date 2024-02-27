import{a,j as i}from"./jsx-runtime-9dc53467.js";import"./OrientationBanner-a1ca5cdb.js";import"./index-76fb7be0.js";import{P as c}from"./getEndpoint-ac94413e.js";import{z as m}from"./ApplicationSessionManager-e3b4cd5b.js";import{a as r,R as f}from"./RequirementItem-e9a41bcc.js";import{T as o}from"./Typography-1d068b0b.js";import{L as p}from"./Link-6ae0d01e.js";function s(){const{data:e,isLoading:t}=m(),n=t?r.LOADING:e!=null&&e.isCertified?r.COMPLETE:r.LOCKED;return a(f,{status:n,children:[a(o,{variant:"body1",children:["You must first become a"," ",i(p,{href:`${c.PORTAL}#!Quiz:`,children:"certified user"})]}),t&&i("span",{className:"spinner"}),(e==null?void 0:e.isCertified)&&i(o,{variant:"body1",children:"You are a certified user"})]})}try{s.displayName="CertificationRequirement",s.__docgenInfo={description:`When creating requests for access requirements on a particular file, one or more access requirements may require that the
user is certified.

This component checks if the user is certified, and if not, provides a link on how to begin certification.`,displayName:"CertificationRequirement",props:{}}}catch{}export{s as C};
