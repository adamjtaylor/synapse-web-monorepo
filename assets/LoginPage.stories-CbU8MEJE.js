import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{L as I}from"./LeftRightPanel-DwKmO81x.js";import{u as O}from"./useShowDesktop-CPh-208G.js";import{u as v,L as d,T as x,a as L}from"./Constants-1mhCcwd1.js";import{S as g}from"./SystemUseNotification-Bs40tZIU.js";import{s as R}from"./styled-OgyJf9MH.js";import{T as t}from"./Typography-B88_J_TK.js";import{u as k}from"./utils-C1pLSGi5.js";import{B as i}from"./Box-DRdN2jdb.js";import{L as D}from"./Link-EkQ0dGSu.js";import{S as h}from"./Stack-CkbmjR2j.js";import{s as w}from"./StorybookComponentWrapper-gnAsGCAl.js";import{d as N}from"./ToastMessage-CsPwcNWl.js";import"./index-Dl6G-zuu.js";import"./Paper-BWoP1bRz.js";import"./createTheme-CwlmBDro.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-DMoHWj5j.js";import"./SynapseConstants-DwKkHu1W.js";import"./OrientationBanner-CPsBxF8o.js";import"./FullWidthAlert-DFaJ0Nkn.js";import"./Alert-HJYNNEvY.js";import"./mergeSlotProps-DHTQkAbv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-BYNyJbGL.js";import"./IconButton-CgTC7RgJ.js";import"./ButtonBase-5SeL_6IU.js";import"./TransitionGroupContext-DGN18uA0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./AlertTitle-DKiwjjrh.js";import"./Grow-DYov3NPi.js";import"./index-D1_ZHIBm.js";import"./ClickAwayListener-BnMSRy2k.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CYVQ1vhC.js";import"./index-aEXBT5Ni.js";import"./Button-mb55Lwfk.js";import"./useMutation-DreY5go-.js";import"./SynapseClient-DVOjLlPA.js";import"./index-Be3MfuFw.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-sybcF8uh.js";import"./CheckCircleTwoTone-h9GSy5KG.js";import"./colorManipulator-CXx1BTzE.js";import"./inputBaseClasses-DUreQxsm.js";import"./Fade-BNGotgqy.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./_getTag-B6zWmB6G.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";import"./TextField-BYZwcPau.js";import"./StyledFormControl-BNgdB6B_.js";import"./InputLabel-D0wmCbAz.js";import"./useFormControl-EHw8eS4L.js";import"./ownerWindow-BN2rbQ_G.js";import"./isMuiElement-DAcuSkv2.js";import"./LoginMethodButton-Bhhweo8Y.js";import"./IconSvg-B_5LF0ig.js";import"./ErrorOutlined-BSUguZv8.js";import"./GetAppTwoTone-CE-akCN_.js";import"./InfoOutlined-C7x-yViA.js";import"./LastLoginInfo-n_aSLlgt.js";import"./DateFormatter-0eKWx7UY.js";import"./timezone-Cq1SAuLw.js";import"./TextField-BYBL0P0S.js";import"./Select-CDrLCvLS.js";import"./Menu-DJaUcmOF.js";import"./Modal-BRilODZK.js";import"./Backdrop-BtqnMcmK.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuList-zLHdZWCi.js";import"./List-DP5ytkvU.js";import"./CSSTransition-Bd10BpAY.js";import"./hasClass-D5ZjVvBY.js";import"./uniqueId-DePWDRrE.js";import"./toString-DMqudUWC.js";import"./isSymbol-BVHl_2sa.js";const U=encodeURIComponent("Lost access to my Synapse account"),A=encodeURIComponent("<Please provide your username and/or email address associated with your account.>"),F=`https://sagebionetworks.jira.com/servicedesk/customer/portal/9/group/16/create/85?summary=${U}&description=${A}`,m=R(t,{label:"Tagline"})(({theme:e})=>({marginBottom:e.spacing(2),font:"300 24px/34px DM Sans, sans-serif"}));function u(e){return o.jsxs(o.Fragment,{children:[o.jsx(t,{...e,children:"Your backup code is a 16 digit code, with groups of 4 letters or numbers separated by hyphens, like this:"}),o.jsx(t,{...e,component:"div",variant:"monospace",sx:{my:1,fontSize:"18px"},children:"xxxx-xxxx-xxxx-xxxx"}),o.jsxs(t,{...e,children:["Each code can only be used once. If you don’t have access to these codes, please"," ",o.jsx(D,{href:F,children:"contact us"}),"."]})]})}function p(e){const{ssoRedirectUrl:j,sessionCallback:b}=e,s=O(910),c=k(),{step:r,onStepChange:a,submitUsernameAndPassword:E,submitOneTimePassword:_,errorMessage:T,isLoading:S}=v(b),l=o.jsxs(h,{alignItems:"stretch",sx:{height:"100%",width:"330px",mx:"auto"},children:[!s&&o.jsx(h,{flexDirection:"row",children:o.jsx(d,{step:r,onStepChange:a})}),o.jsxs(i,{sx:{mb:4,textAlign:"center",maxWidth:"90vw"},children:[o.jsx("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),!s&&o.jsx(t,{variant:"body1",align:"center",sx:{my:1},children:"Organize. Get credit. Collaborate."})]}),!s&&r==="VERIFICATION_CODE"&&o.jsx(t,{variant:"body1",align:"center",sx:{my:1},children:x}),!s&&r==="RECOVERY_CODE"&&o.jsx(u,{variant:"body1",align:"center",sx:{my:1}}),o.jsx(L,{ssoRedirectUrl:j,step:r,onStepChange:a,submitUsernameAndPassword:E,submitOneTimePassword:_,errorMessage:T,isLoading:S})]});return s?o.jsx(I,{leftContent:o.jsx(o.Fragment,{children:o.jsxs(i,{sx:{py:15,px:8,height:"100%",position:"relative"},children:[o.jsx(d,{step:r,onStepChange:a,sx:{position:"absolute",top:c.spacing(2),left:c.spacing(2)}}),l]})}),rightContent:o.jsx(i,{sx:{py:15,height:"100%",background:"url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 5px"},children:o.jsxs(i,{sx:{px:9,color:"#1e4964"},children:[r==="VERIFICATION_CODE"&&o.jsxs(o.Fragment,{children:[o.jsx(t,{variant:"headline1",sx:{mb:4},children:"Enter your verification code"}),o.jsx(t,{variant:"headline2",sx:{lineHeight:"30px"},children:x})]}),r==="RECOVERY_CODE"&&o.jsxs(o.Fragment,{children:[o.jsx(t,{variant:"headline1",sx:{mb:4},children:"Enter your backup code"}),o.jsx(u,{variant:"body1",sx:{fontSize:"18px",lineHeight:"30px"}})]}),r!=="VERIFICATION_CODE"&&r!=="RECOVERY_CODE"&&o.jsxs(o.Fragment,{children:[o.jsxs(m,{variant:"headline2",children:[o.jsx("strong",{children:"Organize"})," your digital research assets."]}),o.jsxs(m,{variant:"headline2",children:[o.jsx("strong",{children:"Get credit"})," for your research."]}),o.jsxs(m,{variant:"headline2",children:[o.jsx("strong",{children:"Collaborate"})," with your colleagues and the public."]})]}),o.jsx(g,{})]})})}):o.jsxs(i,{sx:{px:0,py:12,height:"95vh",background:"#fff url('https://s3.amazonaws.com/static.synapse.org/images/SynapseMobileLogInFull.svg') 50% 50%",backgroundSize:"contain"},children:[l,o.jsx(g,{})]})}try{p.displayName="LoginPage",p.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}}}catch{}const ue={title:"Authentication/LoginPage",component:p},n={args:{sessionCallback:()=>{w().then(({profile:e})=>{N(`You are currently logged in as ${e.userName}`,"info",{autoCloseInMs:5e3})})}}};var y,C,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      sessionChangeHandler().then(({
        profile
      }) => {
        displayToast(\`You are currently logged in as \${profile.userName}\`, 'info', {
          autoCloseInMs: 5000
        });
      });
    }
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const ye=["Demo"];export{n as Demo,ye as __namedExportsOrder,ue as default};
