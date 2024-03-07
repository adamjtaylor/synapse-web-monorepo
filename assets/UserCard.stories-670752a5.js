import{a as z,F as x,j as a}from"./jsx-runtime-9dc53467.js";import{h as D,i as h,M as k,j as b,e as v,A as w}from"./SynapseConstants-0078d114.js";import"./index-76fb7be0.js";import"./getEndpoint-ac94413e.js";import{v as y}from"./ApplicationSessionManager-2e1d5529.js";import{U as c}from"./UserBadge-872917b6.js";import{B as O}from"./Box-f6adec47.js";import"./OrientationBanner-450e6652.js";import"./FullWidthAlert-149d754f.js";import"./Alert-fd45ce28.js";import"./createTheme-d609db80.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-bb145c31.js";import"./createSvgIcon-b657d91b.js";import"./Paper-35c12a01.js";import"./IconButton-9b53499e.js";import"./ButtonBase-0719e676.js";import"./emotion-react.browser.esm-ca9fe929.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useForkRef-8feb2ebf.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./useIsFocusVisible-18cd238e.js";import"./Stack-9fb6382b.js";import"./extendSxProp-7fb4e09f.js";import"./AlertTitle-9139c2ff.js";import"./Typography-f217f607.js";import"./useTheme-a28bb397.js";import"./Grow-2f9de6a4.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./utils-19a63403.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-248f4fe4.js";import"./Button-065a21d4.js";import"./tinycolor-ea5bcbb6.js";import"./InfoTwoTone-aaf78040.js";import"./CheckCircleTwoTone-6570b572.js";import"./inputBaseClasses-8d4a6788.js";import"./Fade-05777e49.js";import"./Link-5cdd275a.js";import"./_getTag-b87d0382.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-4a1b1a67.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";import"./Menu-fd3efe37.js";import"./index-c71daf5e.js";import"./Modal-38359b46.js";import"./Backdrop-3c9a13b0.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./MenuList-acf5f616.js";import"./List-81115ae1.js";import"./IconSvg-4bf1503e.js";import"./ErrorOutlined-5d3a6347.js";import"./GetAppTwoTone-6e3519f9.js";import"./InfoOutlined-aa78e498.js";import"./cloneDeep-10deac57.js";import"./_baseClone-d4db307e.js";import"./_Uint8Array-df44b265.js";import"./_baseTimes-8715be3e.js";import"./_initCloneObject-c3239c20.js";import"./_getAllKeys-af1012ce.js";import"./SkeletonTable-3361182b.js";import"./times-8d386772.js";import"./identity-46f208ab.js";import"./toInteger-5bb233f4.js";import"./isSymbol-7c514724.js";import"./Skeleton-2007774f.js";import"./ToastMessage-3dbe47cb.js";import"./CSSTransition-e180c3db.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Divider-f85fbd3b.js";import"./dividerClasses-ed167313.js";import"./MenuItem-9dd34ee5.js";import"./Card-116c8a68.js";import"./Avatar-e1ef2d77.js";const uo={title:"UI/UserCard",component:c,render:function(n){const{data:m}=y();let s=m==null?void 0:m.ownerId;return s===w.toString()&&(s=void 0),z(x,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(c,{ownerId:n.ownerId??s,...n})]})}},r={args:{size:D,avatarSize:"SMALL"}},o={args:{size:h}},t={args:{size:k}},i={decorators:[p=>a(O,{maxWidth:"450px",children:a(p,{})})],args:{size:k,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:b},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},e={args:{size:v}};var d,l,A;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,...(A=(l=r.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var R,U,f;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...(f=(U=t.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var C,_,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Box maxWidth={'450px'}>
          <Story />
        </Box>;
  }],
  args: {
    size: MEDIUM_USER_CARD,
    menuActions: [{
      field: 'Action 1',
      callback: () => {
        console.log('Action 1 clicked');
      }
    }, {
      field: SEPERATOR
    }, {
      field: 'Action 2',
      callback: () => {
        console.log('Action 2 clicked');
      }
    }, {
      field: 'Action 3',
      callback: () => {
        console.log('Action 3 clicked');
      }
    }]
  }
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var M,I,L;e.parameters={...e.parameters,docs:{...(M=e.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(L=(I=e.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const go=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{r as Avatar,e as LargeUserCard,t as MediumUserCard,i as MediumUserCardWithActions,o as SmallUserCard,go as __namedExportsOrder,uo as default};
