import{j as r}from"./jsx-runtime-CKrituN3.js";import"./OrientationBanner-eGM9Gy2i.js";import"./index-CBqU2yxZ.js";import{P as o}from"./getEndpoint-CjoHA800.js";import{w as n}from"./ApplicationSessionManager-BIT2Vljh.js";import{R as m,a as i}from"./RequirementItem-DikMA9J0.js";import{T as t}from"./Typography-B9IcQwF1.js";import{L as p}from"./Link-BtokOTIY.js";function s(){const{data:e,isLoading:a}=n();return r.jsxs(m,{status:a?i.LOADING:e.isVerified?i.COMPLETE:i.LOCKED,children:[r.jsxs(t,{variant:"body1",children:["You must first apply to have your"," ",r.jsx(p,{href:`${o.PORTAL}#!Profile:v/settings`,children:"user profile validated"})]}),a&&r.jsx("span",{className:"spinner"}),(e==null?void 0:e.isVerified)&&r.jsx(t,{variant:"body1",children:"Your user profile is validated."})]})}try{s.displayName="ValidationRequirement",s.__docgenInfo={description:`When creating requests for access requirements on a particular file, one or more access requirements may require that the
user has a validated profile.

This component checks if the user has a validated profile, and if not, provides a link on how to begin profile validation.`,displayName:"ValidationRequirement",props:{}}}catch{}export{s as V};
