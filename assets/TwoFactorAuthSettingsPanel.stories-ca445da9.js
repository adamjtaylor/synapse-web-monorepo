import{a as n,j as o}from"./jsx-runtime-ad672792.js";import{d as u}from"./ToastMessage-4328e127.js";import{I as v}from"./IconSvg-e02ad7d3.js";import{u as B,a as F,T as k}from"./TwoFactorEnrollmentForm-3c502235.js";import{C as s}from"./ConditionalWrapper-2492e95a.js";import{B as x}from"./Box-748c1b2e.js";import{T as a}from"./Typography-25de91b6.js";import{S as d}from"./Skeleton-fac1f03c.js";import{S}from"./Stack-83e4ec56.js";import{B as l}from"./Button-251d6b7d.js";import{P as C}from"./Paper-e394b7cf.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./FullWidthAlert-e8ee4bbb.js";import"./Alert-84d62a08.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./Button-7d415009.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./index-4d501b15.js";import"./Clear-4b047352.js";import"./styled-be3878cf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./useTheme-5ec55fc4.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./SvgIcon-19b553ad.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isArray-5e3f9107.js";import"./isSymbol-7c514724.js";import"./LeftRightPanel-7b9a50ed.js";import"./index-292d735c.js";import"./getEndpoint-ac94413e.js";import"./SynapseConstants-42953824.js";import"./TextField-2175e071.js";import"./InputLabel-46f6ca98.js";import"./ownerWindow-2c76219e.js";import"./emotion-react.browser.esm-605ba919.js";import"./isMuiElement-d529b771.js";import"./LoadingScreen-d6e4be89.js";import"./contains-e27fcc5c.js";import"./useMutation-7b33115e.js";import"./mutation-2649c68f.js";import"./Typography-fd50ec33.js";import"./Dialog-04e316aa.js";import"./DialogContent-b913dd90.js";import"./Modal-405ff371.js";import"./Fade-a660e176.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./DialogTitle-810d38cb.js";import"./IconButton-a480e7a2.js";import"./ButtonBase-9ed4bb8f.js";import"./Link-81a3b4be.js";import"./Divider-db45920f.js";import"./extendSxProp-94a0a81d.js";function m(e){const{onRegenerateBackupCodes:w,onBeginTwoFactorEnrollment:y}=e,{data:t,isLoading:c}=B(),r=(t==null?void 0:t.status)==="ENABLED",{mutate:A,isLoading:T}=F({onSuccess:()=>{u("2FA removed from this account","info")}}),i=c||T;return n(x,{children:[o(a,{variant:"headline2",children:"Two-factor Authentication (2FA)"}),o(s,{condition:i,wrapper:d,children:n(a,{variant:"body1",color:r?"success.main":"error.main",sx:{my:2,display:"flex",alignItems:"center"},children:[o(v,{icon:r?"check":"cross",sx:{mr:1,height:"24px"}}),i?"Loading...":r?"Active":"Inactive"]})}),o(a,{variant:"body1Italic",sx:{my:1},children:"Required to satisfy certain data access requirements, and recommended for overall account security."}),o(a,{variant:"body1",sx:{my:2},children:"Synapse uses a time-based system, which you can set up using an app like Google Authenticator, Duo Mobile, Microsoft Authenticator, or Authy. Certain data may require 2FA to be turned on for your account in order to request access."}),n(S,{direction:"row",gap:1,children:[o(s,{condition:c,wrapper:d,children:n(l,{variant:"outlined",disabled:i,onClick:()=>{r?A():y()},children:[r?"Deactivate":"Activate"," 2FA"]})}),(t==null?void 0:t.status)!=="DISABLED"&&o(s,{condition:c,wrapper:d,children:o(l,{variant:"text",disabled:i,onClick:()=>{w()},children:"Regenerate Backup Codes"})}),o(l,{variant:"text",onClick:()=>window.open(k,"_blank"),children:"More Information"})]})]})}try{m.displayName="TwoFactorAuthSettingsPanel",m.__docgenInfo={description:"",displayName:"TwoFactorAuthSettingsPanel",props:{onRegenerateBackupCodes:{defaultValue:null,description:"",name:"onRegenerateBackupCodes",required:!0,type:{name:"() => void"}},onBeginTwoFactorEnrollment:{defaultValue:null,description:"",name:"onBeginTwoFactorEnrollment",required:!0,type:{name:"() => void"}}}}}catch{}const Go={title:"Authentication/TwoFactorSettingsPanel",component:m,render:e=>o(C,{sx:{p:7,mx:"auto",width:"720px"},children:o(m,{...e})})},p={args:{onBeginTwoFactorEnrollment:()=>{u("In-app, you would now redirect to the two-factor enrollment page","info")},onRegenerateBackupCodes:()=>{u("In-app, you would now redirect to the backup codes page","info")}}};var g,h,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onBeginTwoFactorEnrollment: () => {
      displayToast('In-app, you would now redirect to the two-factor enrollment page', 'info');
    },
    onRegenerateBackupCodes: () => {
      displayToast('In-app, you would now redirect to the backup codes page', 'info');
    }
  }
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Vo=["Demo"];export{p as Demo,Vo as __namedExportsOrder,Go as default};
//# sourceMappingURL=TwoFactorAuthSettingsPanel.stories-ca445da9.js.map
