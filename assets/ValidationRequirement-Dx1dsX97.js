import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{H as o}from"./SynapseClient-DVOjLlPA.js";import"./OrientationBanner-CPsBxF8o.js";import{P as n}from"./getEndpoint-CjoHA800.js";import"./index-Dl6G-zuu.js";import{R as m,a as i}from"./RequirementItem-CVnYv3AY.js";import{T as t}from"./Typography-B88_J_TK.js";import{L as p}from"./Link-EkQ0dGSu.js";function s(){const{data:e,isLoading:a}=o();return r.jsxs(m,{status:a?i.LOADING:e.isVerified?i.COMPLETE:i.LOCKED,children:[r.jsxs(t,{variant:"body1",children:["You must first apply to have your"," ",r.jsx(p,{href:`${n.PORTAL}#!Profile:v/settings`,children:"user profile validated"})]}),a&&r.jsx("span",{className:"spinner"}),(e==null?void 0:e.isVerified)&&r.jsx(t,{variant:"body1",children:"Your user profile is validated."})]})}try{s.displayName="ValidationRequirement",s.__docgenInfo={description:`When creating requests for access requirements on a particular file, one or more access requirements may require that the
user has a validated profile.

This component checks if the user has a validated profile, and if not, provides a link on how to begin profile validation.`,displayName:"ValidationRequirement",props:{}}}catch{}export{s as V};
