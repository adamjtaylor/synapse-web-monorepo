import{a as e,j as r,F as m}from"./jsx-runtime-ad672792.js";import{af as u,bm as d}from"./index-292d735c.js";import"./index-f1f749bf.js";import{S as p}from"./SynapseConstants-42953824.js";import{P as h}from"./getEndpoint-ac94413e.js";import{R as f,a as s}from"./RequirementItem-8060f2eb.js";import{T as i}from"./Typography-25de91b6.js";import{L as o}from"./Link-81a3b4be.js";function c(){const{accessToken:n}=u(),{data:t}=d(),a=!!n;return e(f,{status:a?s.COMPLETE:s.LOCKED,children:[!a&&r(m,{children:e(i,{variant:"body1",children:[r(o,{className:p,children:"Sign in"})," ","with a Sage Platform (Synapse) user account. If you do not have a Sage account, you can"," ",r(o,{href:`${h.PORTAL}#!RegisterAccount:0`,children:"register for free."})]})}),a&&e(i,{variant:"body1",children:["You have signed in with the Sage Platform (Synapse) user account"," ",e("b",{children:[t==null?void 0:t.userName,"@synapse.org"]})]})]})}try{c.displayName="AuthenticatedRequirement",c.__docgenInfo={description:"Displays a data access request requirement prompts the user to authenticate if not already signed in.",displayName:"AuthenticatedRequirement",props:{}}}catch{}export{c as A};
//# sourceMappingURL=AuthenticatedRequirement-103d4036.js.map
