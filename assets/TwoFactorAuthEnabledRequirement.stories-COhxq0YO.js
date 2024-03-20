import{j as m}from"./jsx-runtime-Du8NFWEI.js";import{l as w}from"./index-DqkfSIC0.js";import{M as E}from"./getEndpoint-CjoHA800.js";import{T as e}from"./TwoFactorAuthEnabledRequirement-CXKHJ2_G.js";import{S as x,F as A}from"./ApplicationSessionManager-CMPvQ9rv.js";import"./index-Dl6G-zuu.js";import"./index-DMoHWj5j.js";import"./events-CXH2uRM3.js";import"./util-79FwwIvO.js";import"./index-DCjY2C6i.js";import"./TwoFactorEnrollmentForm-DcaFonw1.js";import"./LeftRightPanel-Cnmq8UeD.js";import"./styled-OgyJf9MH.js";import"./createTheme-CwlmBDro.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./Box-DRdN2jdb.js";import"./Paper-BWoP1bRz.js";import"./OrientationBanner-tb7WDFcR.js";import"./FullWidthAlert-xeBFwHL5.js";import"./Alert-HJYNNEvY.js";import"./mergeSlotProps-DHTQkAbv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-BYNyJbGL.js";import"./IconButton-CgTC7RgJ.js";import"./ButtonBase-5SeL_6IU.js";import"./TransitionGroupContext-DGN18uA0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./Stack-CkbmjR2j.js";import"./AlertTitle-DKiwjjrh.js";import"./Typography-B88_J_TK.js";import"./utils-C1pLSGi5.js";import"./index-D1_ZHIBm.js";import"./Grow-DYov3NPi.js";import"./ClickAwayListener-BnMSRy2k.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CYVQ1vhC.js";import"./index-aEXBT5Ni.js";import"./Button-mb55Lwfk.js";import"./TextField-BYZwcPau.js";import"./StyledFormControl-BNgdB6B_.js";import"./InputLabel-D0wmCbAz.js";import"./useFormControl-EHw8eS4L.js";import"./inputBaseClasses-DUreQxsm.js";import"./ownerWindow-BN2rbQ_G.js";import"./isMuiElement-DAcuSkv2.js";import"./LoadingScreen-Cp1NTgGu.js";import"./Backdrop-BtqnMcmK.js";import"./Fade-BNGotgqy.js";import"./LinearProgress-CvefknrU.js";import"./useMutation-D4sAzr5-.js";import"./QueryFilterUtils-Cryu8inb.js";import"./SynapseConstants-DZFwfboe.js";import"./isEqual-CzWE5dRj.js";import"./_baseIsEqual-C_xb3_5M.js";import"./_Uint8Array-DkdoQoHp.js";import"./_baseTimes-DoMoQz2v.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./_cacheHas-BGExH0_3.js";import"./_setToArray-CSiN_fit.js";import"./_getAllKeys-CgFfSulb.js";import"./_getTag-B6zWmB6G.js";import"./isNumber-IkxNlUCJ.js";import"./IconSvg-5eVZ_Vnt.js";import"./ErrorOutlined-BSUguZv8.js";import"./GetAppTwoTone-CE-akCN_.js";import"./InfoOutlined-C7x-yViA.js";import"./CheckCircleTwoTone-h9GSy5KG.js";import"./Dialog--0zFVEET.js";import"./Modal-BRilODZK.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./DialogTitle-VmdyF1RY.js";import"./DialogContent-BtEBz09g.js";import"./Link-EkQ0dGSu.js";import"./Divider-CvGeMHYm.js";import"./dividerClasses-Cc_Ns5us.js";import"./RequirementItem-CVnYv3AY.js";import"./ConditionalWrapper-Be926PbJ.js";import"./Avatar-CSnnTcUv.js";import"./Skeleton-C2B0Utez.js";import"./colorManipulator-CXx1BTzE.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-sybcF8uh.js";import"./index-C-UbkUMQ.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./StringUtils-D4kDWP8q.js";const it={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:e,parameters:{stack:"mock"},render:o=>m.jsx(x,{children:p=>m.jsx(A,{synapseContext:{...p,accessToken:"fake token"},children:m.jsx(e,{...o})})})};function l(o){return[w.rest.get(`${E}/auth/v1/2fa`,async(p,h,i)=>{const f={status:o?"ENABLED":"DISABLED"};return h(i.status(200),i.json(f))})]}const r={parameters:{msw:{handlers:[l(!0)]}}},t={parameters:{msw:{handlers:[l(!1)]}}};var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const et=["Enabled","Disabled"];export{t as Disabled,r as Enabled,et as __namedExportsOrder,it as default};
