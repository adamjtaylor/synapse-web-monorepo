import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as o}from"./index-CBqU2yxZ.js";import{h as $,b5 as D,b6 as F,b7 as M,b8 as w,b9 as P,ba as k,j as O}from"./ApplicationSessionManager-NGEGnQRB.js";import{d as q}from"./dayjs.min-BIwLhz4I.js";import{I as j}from"./IconSvg-BuJ4Oh6J.js";import{S as L}from"./SkeletonTable-ClAWDQLk.js";import{P as A}from"./getEndpoint-CjoHA800.js";import{f as K}from"./DateFormatter-BCESFfl7.js";import{a as B}from"./UserBadge-CyVDZd8J.js";import{R as G}from"./Row-Cu5wkXxw.js";import{C}from"./Col-bRLfpUkc.js";import{S as z}from"./Skeleton-BQPHOfbB.js";import{T as x}from"./Typography-BhttL55U.js";import{N as H}from"./NoSearchResults-BfdZ2kj7.js";import{d as J}from"./ToastMessage-C2TziZIi.js";import{B as Q}from"./Button-BOCcoe4v.js";import"./_commonjsHelpers-BosuxZz1.js";import"./SynapseConstants-SVcgGabF.js";import"./OrientationBanner-_f-Wk-V6.js";import"./FullWidthAlert-jMrvQqfp.js";import"./Alert-jLvJNeQC.js";import"./createTheme-2XtGYoE4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DMoHWj5j.js";import"./styled-CPWjInoX.js";import"./mergeSlotProps-ih6DGlm4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BSLA1zlB.js";import"./createSvgIcon-ClnqzT54.js";import"./Paper-DYLu205z.js";import"./IconButton-DUzhqGqo.js";import"./ButtonBase-xB_9igmm.js";import"./TransitionGroupContext-B1FFUpIO.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./useIsFocusVisible-Chjat8DO.js";import"./Stack-wDqeWMTC.js";import"./Box-qzYP1vnN.js";import"./AlertTitle-DGMjNv9d.js";import"./utils-SU9mu0D7.js";import"./index-BtM5VmRH.js";import"./Grow-DHJeVGyA.js";import"./ClickAwayListener-CVXPLwF5.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-XprEAl00.js";import"./index-CJ-wfEIf.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CBfzdnva.js";import"./CheckCircleTwoTone-B5Iaww82.js";import"./colorManipulator-CieAV1Z7.js";import"./inputBaseClasses-DIwNn5yR.js";import"./Fade--kK2ZsE4.js";import"./index-C-UbkUMQ.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-BXqr-BaG.js";import"./_getTag-7fqy2l2P.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";import"./ErrorOutlined-BhDYotgP.js";import"./GetAppTwoTone-DGNvw6OX.js";import"./InfoOutlined-G1tbAqgK.js";import"./times-Z7TOiV6C.js";import"./_baseTimes-DoMoQz2v.js";import"./identity-DKeuBCMA.js";import"./toInteger-wfy7oWZN.js";import"./isSymbol-BVHl_2sa.js";import"./timezone-D8xTeCdM.js";import"./Menu-84FG2VOI.js";import"./Modal-BbYTGd2V.js";import"./Backdrop-BvN9j_Hy.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerWindow-BN2rbQ_G.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuList-CiRE7Hfk.js";import"./List-n4ZFYRWO.js";import"./cloneDeep-vUzW6Scs.js";import"./_baseClone-CkdsAOu8.js";import"./_Uint8Array-DkdoQoHp.js";import"./_initCloneObject-Cla6p12R.js";import"./_defineProperty-BehcNqME.js";import"./_getAllKeys-ClwlRObZ.js";import"./Divider-DDkVRX30.js";import"./dividerClasses-UDilKsZe.js";import"./MenuItem-Bcq3Naps.js";import"./Card-Dg8hlcab.js";import"./Avatar-1vKdsY-O.js";import"./ThemeProvider-C9m_AqWP.js";import"./CSSTransition-48o583Uk.js";import"./hasClass-D5ZjVvBY.js";import"./uniqueId-DePWDRrE.js";import"./toString-DMqudUWC.js";const R=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),v=r=>{const{threadId:p,replyId:n}=r,{accessToken:a}=$(),[s,c]=o.useState(),[d,u]=o.useState(""),[i,m]=o.useState(),[y,g]=o.useState(),[h,I]=o.useState(!1),b=async()=>{let t;const l=await D(p,a);if(I(!0),n){const f=await F(n,a);t=await M(f.messageKey,a),g(await w(f.createdBy)),m(f)}else g(await w(l.createdBy)),t=await P(l.messageKey,a);u(await R(t.messageUrl)),c(l),I(!1)};o.useEffect(()=>{b()},[]);const N=(t,l,f)=>{let T=`${A.PORTAL}#!Synapse:${l}/discussion/threadId=${t}`;return f&&(T+=`&replyId=${f}`),T};return e.jsx("div",{className:"bootstrap-4-backport search-result-container",children:e.jsxs(G,{children:[e.jsx(C,{xs:1,children:h?e.jsx(z,{variant:"circular",width:"40px",height:"40px"}):n?e.jsx(j,{icon:"replyTwoTone"}):e.jsx(j,{icon:"chatTwoTone"})}),e.jsx(C,{xs:11,children:h?e.jsx(L,{numCols:1,numRows:4}):e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"headline3",children:e.jsx("a",{className:"link",href:N(s==null?void 0:s.id,s==null?void 0:s.projectId,i==null?void 0:i.id),children:s==null?void 0:s.title})}),e.jsx("div",{className:"truncated",children:e.jsx(x,{variant:"body1",children:d})}),e.jsxs("div",{className:"search-result-footer",children:[n?"Reply":"Thread"," by"," ",e.jsx(B,{userId:y==null?void 0:y.ownerId})," ",K(q(i==null?void 0:i.createdOn))]})]})})]})})};try{R.displayName="getMessage",R.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{v.displayName="DiscussionSearchResult",v.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const W=()=>e.jsxs("div",{className:"text-center",children:[e.jsx(H,{className:"no-search-results",display:"block",height:"181px",sx:{pt:"40px",pb:"10px"}}),e.jsx(x,{variant:"body1",children:"No results with this query"}),e.jsx(x,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),_=r=>{const{onSearchResultsVisible:p}=r,{accessToken:n}=$(),[a,s]=o.useState(""),[c,d]=o.useState(),[u,i]=o.useState(),[m,y]=o.useState(),[g,h]=o.useState(!1),I=async()=>{p&&p(!0);try{d(void 0),h(!1);const t=await k({searchString:a,nextPageToken:void 0},r.forumId,n);t.matches.length==0&&h(!0),d(t),i(t.matches)}catch(t){J(t.reason,"danger")}},b=()=>{p&&p(!1),s(""),d(void 0),h(!1),i(void 0)};o.useEffect(()=>{(async()=>{if(r.projectId){const l=await O(n,r.projectId);y(l)}})()},[n,r.projectId]);const N=async()=>{const t=await k({searchString:a,nextPageToken:c==null?void 0:c.nextPageToken},r.forumId,n);d(t),u&&i([...u,...t.matches])};return e.jsxs("div",{className:"ForumSearch",children:[e.jsxs("div",{children:[e.jsx("span",{className:"SearchIcon",children:e.jsx(j,{icon:"search"})}),e.jsx("input",{role:"textbox",type:"search",className:`SearchBar  ${c?"SearchBarResult":""}`,placeholder:"Search discussions",value:a,onChange:t=>{s(t.target.value)},onKeyDown:t=>{t.key==="Enter"&&I()}}),a&&e.jsx("button",{className:"ClearSearchIcon",onClick:()=>{b()},children:e.jsx(j,{icon:"clear"})})]}),g&&e.jsxs(e.Fragment,{children:[r.projectId&&e.jsxs(x,{variant:"body1Italic",className:"NoResultsText",children:['No results for "',a,'" in ',m==null?void 0:m.name]}),e.jsx(W,{})]}),u&&e.jsxs(e.Fragment,{children:[r.projectId&&!g&&e.jsxs(x,{variant:"body1Italic",className:"ResultsText",children:['Results for "',a,'" in ',m==null?void 0:m.name]}),u.map(t=>e.jsx("div",{children:e.jsx(v,{threadId:t.threadId,replyId:t.replyId})},`${t.forumId}-${t.threadId}-${t.replyId}`))]}),(c==null?void 0:c.nextPageToken)&&e.jsx("div",{className:"text-center",children:e.jsx(Q,{variant:"contained",color:"primary",onClick:()=>{N()},children:"Load more"})})]})};try{_.displayName="ForumSearch",_.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const Ft={title:"Synapse/ForumSearch",component:_},S={args:{forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)}};var E,U,V;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`)
  }
}`,...(V=(U=S.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Mt=["Demo"];export{S as Demo,Mt as __namedExportsOrder,Ft as default};
