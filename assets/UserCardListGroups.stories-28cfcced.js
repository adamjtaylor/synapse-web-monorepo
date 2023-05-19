import{J as h}from"./SynapseConstants-1ebc8be6.js";import{j as e,a as l,F as U}from"./jsx-runtime-095bf462.js";import{u as V}from"./useShowDesktop-4eaeb2a6.js";import{U as S}from"./UserCardListRotate-bf94aaae.js";import{E}from"./ExpandableContent-92771ca6.js";import{r as q}from"./index-8db94870.js";import{B as C}from"./Button-5637ed55.js";import"./SqlFunctions-cc0089fb.js";import"./RegularExpressions-bc0adf55.js";import"./SynapseClient-c43c6534.js";import"./_commonjsHelpers-042e6b4d.js";import"./getEndpoint-ac94413e.js";import"./inheritsLoose-c82a83d4.js";import"./index-8ce4a492.js";import"./extends-98964cd2.js";import"./Link-50e57cb4.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-2cba4329.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./Typography-b4a6e0b5.js";import"./extendSxProp-a6a93bb0.js";import"./TransitionGroupContext-53ae1513.js";import"./useForkRef-2674f3de.js";import"./utils-8d96ae5c.js";import"./useTheme-d9b5c73e.js";import"./Alert-e578e9d5.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./hoist-non-react-statics.cjs-775f1375.js";import"./inputBaseClasses-564a6ee4.js";import"./Fade-2249b304.js";import"./use-deep-compare-effect.esm-08e85271.js";import"./index-5d0cf067.js";import"./UserCardList-28370b5e.js";import"./UserCard-58e97778.js";import"./SkeletonTable-548d1d1b.js";import"./times-7d6556a7.js";import"./_baseTimes-8cccc40f.js";import"./isSymbol-7c514724.js";import"./Skeleton-cbf43066.js";import"./emotion-react.browser.esm-9ef79d4e.js";import"./IconSvg-e16de140.js";import"./SvgIcon-bc070951.js";import"./Tooltip-b11baf92.js";import"./ownerDocument-613eb639.js";import"./useEnhancedEffect-c45cae33.js";import"./isHostComponent-73d6e646.js";import"./useControlled-be22aa93.js";import"./useEventCallback-65e61675.js";import"./createSvgIcon-02cd1a2a.js";import"./ErrorOutlined-fccff164.js";import"./InfoOutlined-d944994d.js";import"./Clear-398befb5.js";import"./ToastMessage-6e66d93f.js";import"./FullWidthAlert-51eedfbf.js";import"./TransitionGroup-5e0fc2af.js";import"./assertThisInitialized-081f9914.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Popover-0894bcd3.js";import"./Modal-cf7a81a7.js";import"./Backdrop-0451e96c.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-16fb121c.js";import"./Box-fe8ef83e.js";import"./without-c7324a45.js";import"./_cacheHas-6a8ad860.js";import"./_MapCache-bceaa486.js";import"./_baseRest-052a6903.js";import"./isArrayLikeObject-c369fda5.js";function c(t){const{columnName:a,facetValues:r,...s}=t;return e("div",{children:r==null?void 0:r.map((i,o)=>{const n=r[o],m=e(S,{...s,selectedFacets:[{columnName:a,facetValues:[n],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]});return e(E,{title:l(U,{children:[" ",n," "]}),content:m},`UserCardListGroup-Mobile-${o}`)})})}try{c.displayName="UserCardListGroupsMobile",c.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function d(t){const[a,r]=q.useState(0),{columnName:s,facetValues:i,...o}=t,n={columnName:s,facetValues:[i[a]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return l("div",{className:"control-container",children:[l("div",{className:"button-container",children:[i==null?void 0:i.map((p,m)=>e("button",{className:a===m?"isSelected":"",onClick:()=>r(m),children:p},p)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(S,{...o,selectedFacets:[n]},`UserCardListGroup-${a}`)})]})}try{d.displayName="UserCardListGroupsDesktop",d.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function y(t){const{summaryLink:a,summaryLinkText:r,...s}=t,i=V();return e("div",{className:`bootstrap-4-backport UserCardListGroups${i?"__Desktop":""}`,children:l("div",{children:[i?e(d,{...s}):e(c,{...s}),a&&r&&e("div",{className:"UserCardListGroups__summary",children:e(C,{variant:"secondary",size:"lg",href:a,children:r})})]})})}try{y.displayName="UserCardListGroups",y.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}const $e={title:"Home Page/UserCardListGroups",component:y},u={args:{sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:h,useQueryResultUserData:!1,summaryLinkText:"Explore All People",summaryLink:"/Explore/People",count:6}};var f,R,L;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
    columnName: 'Project Title',
    facetValues: ['Somatic Mosaicism in the brain of Tourette syndrome', 'Somatic Mosaicism in Schizophrenia and Control Brains', '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism', '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism', 'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder', 'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease', '1/2-Somatic mosaicism and autism spectrum disorder', '2/2-Somatic mosaicism and autism spectrum disorder', '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism'],
    size: MEDIUM_USER_CARD,
    useQueryResultUserData: false,
    summaryLinkText: 'Explore All People',
    summaryLink: '/Explore/People',
    count: 6
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const We=["Demo"];export{u as Demo,We as __namedExportsOrder,$e as default};
//# sourceMappingURL=UserCardListGroups.stories-28cfcced.js.map
