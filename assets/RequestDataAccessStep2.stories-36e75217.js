import{D as C}from"./DataAccessRequestAccessorsFilesForm-4774d6fb.js";import{m as n}from"./mockAccessRequirements-0ca7b9c7.js";import{M as c,a as R}from"./userProfileHandlers-259ec428.js";import{M as _}from"./MockResearchProject-1c98ef09.js";import{g as d,a as A,M as O,b as E}from"./fileHandlers-c65f6d40.js";import{M as r}from"./getEndpoint-ac94413e.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./AccessorChange-69229743.js";import"./EntityTypeUtils-cad60590.js";import"./inheritsLoose-c82a83d4.js";import"./isArray-5e3f9107.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./SynapseConstants-7100b9c0.js";import"./SvgIcon-4c933a0b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-f64e11ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./IconSvg-d75490bd.js";import"./Tooltip-d0fc02c5.js";import"./useTheme-14d0ce71.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./TransitionGroupContext-0df7f063.js";import"./Clear-72bafe95.js";import"./Box-13f1aabd.js";import"./extendSxProp-29a14132.js";import"./Button-891a522f.js";import"./ButtonBase-4f599170.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./assertThisInitialized-081f9914.js";import"./Button-5637ed55.js";import"./Alert-57f06f06.js";import"./hook-f132a7c0.js";import"./createWithBsPrefix-57e9f06a.js";import"./divWithClassName-ac73dc31.js";import"./index-58d3fd43.js";import"./RestrictionInformation-4ed2591e.js";import"./useDataAccessSubmission-5e23de5f.js";import"./useMutation-54498135.js";import"./mutation-a8024f6f.js";import"./useInfiniteQuery-538cc3d3.js";import"./infiniteQueryBehavior-e3fffe49.js";import"./useAccessRequirements-60fe7a1a.js";import"./sortBy-22808e00.js";import"./hasIn-d0e90e7e.js";import"./_Uint8Array-bcc5a866.js";import"./_MapCache-ef900796.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_baseMap-73605e66.js";import"./_cacheHas-6a32f8d9.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-dd7c9537.js";import"./_isIterateeCall-5bc20aab.js";import"./TextField-c47f1d13.js";import"./InputLabel-2be762b1.js";import"./inputBaseClasses-2e8dfab0.js";import"./ownerWindow-2c76219e.js";import"./isMuiElement-08f54e3c.js";import"./UserCard-049ace38.js";import"./SkeletonTable-4bb88ade.js";import"./times-7367ae9d.js";import"./Skeleton-3aad52b9.js";import"./ToastMessage-f9dfa353.js";import"./FullWidthAlert-1ed130e0.js";import"./Typography-0933b2f6.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./Popover-872c5707.js";import"./Modal-efa0c968.js";import"./Fade-e4fb8afd.js";import"./getScrollbarSize-ac846fe6.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-2b624eab.js";import"./Link-2921f78c.js";import"./RadioGroup-bf0fed90.js";import"./UserSearchBoxV2-94363909.js";import"./Select-457c486b.esm-39815c2e.js";import"./isNativeReflectConstruct-e378569d.js";import"./use-deep-compare-effect.esm-cb3aaa60.js";import"./index-5d0cf067.js";import"./uniq-72077aa6.js";import"./_baseSlice-cf92e063.js";import"./without-8803fac2.js";import"./isArrayLikeObject-99bf85c0.js";import"./UserOrTeamBadge-4be4879c.js";import"./Form-fa32957e.js";import"./FormLabel-7b55e02a.js";import"./Col-8dbe8567.js";import"./FormGroup-a255fd2e.js";import"./Stack-98e16f53.js";import"./FileUpload-7ce5a2c4.js";import"./DialogTitle-816e44c2.js";import"./DialogContent-a988373b.js";import"./IconButton-74239a2b.js";import"./Divider-0430dee5.js";import"./Alert-61691a15.js";import"./mock_file_handle-9ae40805.js";import"./mock_user_profile-52d9adc1.js";import"./mockWiki-c9dfcce9.js";import"./index-8d5da403.js";import"./util-441245ad.js";const lt={title:"Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation",component:C},t={args:{entityId:c,managedACTAccessRequirement:n,researchProjectId:_},parameters:{msw:{handlers:[...R(r),...d(r),...A(r,O)]}}},e={args:{entityId:c,managedACTAccessRequirement:n,researchProjectId:_},parameters:{msw:{handlers:[...R(r),...d(r),...A(r,E)]}}};var o,m,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    entityId: MOCK_FOLDER_ID,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID
  },
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getFileHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN, MOCK_DATA_ACCESS_REQUEST)]
    }
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,s,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    entityId: MOCK_FOLDER_ID,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID
  },
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getFileHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN, MOCK_DATA_ACCESS_RENEWAL)]
    }
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const Mt=["Request","Renewal"];export{e as Renewal,t as Request,Mt as __namedExportsOrder,lt as default};
//# sourceMappingURL=RequestDataAccessStep2.stories-36e75217.js.map
