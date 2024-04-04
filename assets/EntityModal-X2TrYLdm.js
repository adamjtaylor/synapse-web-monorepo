import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as _}from"./index-Dl6G-zuu.js";import{h as Z,Q as z,v as b,aF as g,bp as X,bq as Y,br as ee,U as te}from"./SynapseClient-DVOjLlPA.js";import{g as C,B as O}from"./getEndpoint-CjoHA800.js";import{u as B}from"./RequestDownloadCard-DSJBmmqL.js";import{d as ae}from"./ToastMessage-CsPwcNWl.js";import{u as ne,a as se,S as oe}from"./SchemaDrivenAnnotationEditor-CrHn9OcX.js";import"./OrientationBanner-CPsBxF8o.js";import{d as ie}from"./useEntity-B-KI3oqp.js";import"./SkeletonButton-2OUtbWJw.js";import{b as re,C as le}from"./HelpPopover-BsnuazkQ.js";import{S as de}from"./SkeletonTable-CULGn8eZ.js";import{d as N}from"./dayjs.min-d18Up55D.js";import{F as ce}from"./FullWidthAlert-DFaJ0Nkn.js";import{f as w}from"./DateFormatter-0eKWx7UY.js";import{g as me,u as ue,a as pe}from"./useUploadDestination-D2DI-zYe.js";import{a as v}from"./UserBadge-BPZjBiVb.js";import{B as A}from"./Button-mb55Lwfk.js";import{S as _e}from"./Skeleton-C2B0Utez.js";import{n as he}from"./noop-DX6rZLP_.js";import{M as ye}from"./Tooltip-CYVQ1vhC.js";function fe(s){if(!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(s))return!1;const i=new Date(s);return i instanceof Date&&!isNaN(i.getTime())&&i.toISOString()===s}function I(s){return typeof s=="number"||typeof s=="boolean"?s.toString():fe(s)?w(N(s)):s}function E(s){const{entityId:i,versionNumber:a}=s,[T,d]=_.useState(!1),{isInExperimentalMode:h}=Z(),{data:c,isLoading:y,refetch:u}=ie(i,a,!0),n=c==null?void 0:c.entityMetadata,r=c==null?void 0:c.annotations,{data:p}=ne(i,{enabled:h}),{data:m,refetch:o}=se(i,{enabled:h&&!!p}),l=h&&!!p,f=!!n&&!!m&&N(n.modifiedOn).diff(N(m.validatedOn))>0,x=_.useCallback(async()=>{d(!0);const t=[u(),o()];await Promise.allSettled(t),d(!1)},[u,o]);return y||T?e.jsx(de,{numRows:3,numCols:2}):e.jsxs(e.Fragment,{children:[n&&r&&z(r)?e.jsxs("div",{className:"placeholder",children:["This"," ",b(g(n.concreteType))," ","has no annotations."]}):null,e.jsx("table",{className:"AnnotationsTable",children:e.jsxs("tbody",{children:[r&&Object.keys(r).map(t=>e.jsxs("tr",{className:"AnnotationsTable__Row",children:[e.jsx("td",{className:"AnnotationsTable__Row__Key",children:t}),e.jsx("td",{className:"AnnotationsTable__Row__Value",children:Array.isArray(r[t])?r[t].map(I).join(", "):I(r[t])})]},t)),l?e.jsxs("tr",{className:"AnnotationsTable__Row",children:[e.jsx("td",{className:"AnnotationsTable__Row__Key Schema",children:"Validation Schema"}),e.jsx("td",{className:"AnnotationsTable__Row__Value",children:e.jsx("a",{href:`${C(O.REPO_ENDPOINT)}/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,target:"_blank",rel:"noopener noreferrer",children:p.jsonSchemaVersionInfo.schemaName})})]}):null]})}),n&&l&&f&&e.jsx(ce,{variant:"warning",description:`This ${b(g(n.concreteType))} has changed since it has been last validated. If this ${b(g(n.concreteType))} is expected to have annotations derived from the Validation Schema, they may not yet be visible.`,primaryButtonConfig:{text:"Reload Annotations",onClick:()=>{x()}},isGlobal:!1})]})}try{E.displayName="AnnotationsTable",E.__docgenInfo={description:"",displayName:"AnnotationsTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const M=({entityId:s,versionNumber:i})=>{var n,r,p,m,o,l,f;const{data:a}=B(s,i),T=a&&X(a.entity),d=a?me(a):void 0,h=(n=a==null?void 0:a.entity)==null?void 0:n.parentId,c=d==null?void 0:d.storageLocationId,{data:y}=ue(h,c,{enabled:h!==void 0&&c!=null});let u;return d&&(u=pe(d,y)),a?e.jsx("table",{className:"MetadataTable",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Name"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:(r=a.entity)==null?void 0:r.name})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Type"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:b(a.entityType)})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Synapse ID"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:(p=a.entity)==null?void 0:p.id})]}),T&&e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Version"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:Y(a.entity)})]}),u&&e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Storage"}),e.jsx("td",{className:"MetadataTable__Row__Value",children:u})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:" Last Modified By"}),e.jsxs("td",{className:"MetadataTable__Row__Value",children:[e.jsx(v,{userId:(m=a.entity)==null?void 0:m.modifiedBy})," at"," ",w(N((o=a.entity)==null?void 0:o.modifiedOn))]})]}),e.jsxs("tr",{className:"MetadataTable__Row",children:[e.jsx("td",{className:"MetadataTable__Row__Key",children:"Created By"}),e.jsxs("td",{className:"MetadataTable__Row__Value",children:[e.jsx(v,{userId:(l=a.entity)==null?void 0:l.createdBy})," at"," ",w(N((f=a.entity)==null?void 0:f.createdOn))]})]})]})}):null};try{M.displayName="MetadataTable",M.__docgenInfo={description:"",displayName:"MetadataTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const Te=["METADATA","ANNOTATIONS"];function V(s){const{entityId:i,versionNumber:a,show:T,onClose:d,initialTab:h="METADATA",showTabs:c=!0,onEditModeChanged:y=he}=s,u=_.useRef(null),[n,r]=_.useState(h),[p,m]=_.useState(!1),[o,l]=_.useState(!1),[f,x]=_.useState(()=>l(!1));_.useEffect(()=>(y(o),()=>{y(!1)}),[o,y]);const{data:t}=B(i,a),D=t&&t.permissions.canEdit,S=t&&ee(t.entityType),q=S&&t.entity.isLatestVersion,L=n==="METADATA"&&t&&!window.location.href.includes(i),k=e.jsxs(A,{variant:"contained",onClick:()=>window.open(`${C(O.PORTAL_ENDPOINT)}#!Synapse:${i}`,"_blank","noopener"),children:["Open"," ",t?b(t==null?void 0:t.entityType):""]}),F=n==="ANNOTATIONS"&&o,K=e.jsx(A,{variant:"contained",onClick:()=>{u.current.formElement.current.requestSubmit()},children:"Save Annotations"}),$=n==="ANNOTATIONS"&&o,P=e.jsx(A,{variant:"outlined",onClick:()=>{x(()=>()=>l(!1)),m(!0)},children:"Cancel"}),G=D&&n==="ANNOTATIONS"&&!o,R=S&&!q,U=e.jsx(ye,{title:R?"Annotations can only be edited on the latest version":void 0,children:e.jsx("span",{children:e.jsx(A,{variant:"contained",disabled:R,onClick:()=>{l(!0)},children:"Edit"})})}),W=e.jsxs(e.Fragment,{children:[c&&!o?e.jsx("div",{className:"Tabs",children:Te.map(j=>e.jsx("div",{className:"Tab",role:"tab",onClick:Q=>{Q.stopPropagation(),r(j)},"aria-selected":j===n,children:j},j))}):null,e.jsx("div",{style:n==="ANNOTATIONS"?{}:{display:"none"},children:o?e.jsx(te,{children:e.jsx(oe,{entityId:i,formRef:u,hideActions:!0,onSuccess:()=>{ae("Annotations successfully updated.","success"),l(!1)},onCancel:()=>l(!1)})}):e.jsx(E,{entityId:i,versionNumber:a})}),e.jsx("div",{style:n==="METADATA"?{}:{display:"none"},children:e.jsx(M,{entityId:i,versionNumber:a})})]}),H=e.jsx(le,{open:p,title:"Unsaved Changes",content:"Any unsaved changes will be lost. Are you sure you want to close the editor?",onCancel:()=>{m(!1)},onConfirm:()=>{m(!1),f()}}),J=_.useMemo(()=>{if(t!=null&&t.entity.name){if(n==="ANNOTATIONS")return`${o?"Edit ":""}Annotations for ${t.entity.name}`}else return e.jsx(_e,{width:"40%"});return t.entity.name},[n,t==null?void 0:t.entity.name,o]);return e.jsx(re,{className:"EntityMetadata",open:T,onCancel:()=>{o?(m(!0),x(()=>()=>{l(!1),d()})):d()},maxWidth:o?"md":"sm",title:J,content:W,actions:e.jsxs(e.Fragment,{children:[H,$&&P,F&&K,G&&U,L&&k]})})}try{V.displayName="EntityModal",V.__docgenInfo={description:"",displayName:"EntityModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},initialTab:{defaultValue:null,description:"",name:"initialTab",required:!1,type:{name:"enum",value:[{value:'"METADATA"'},{value:'"ANNOTATIONS"'}]}},showTabs:{defaultValue:null,description:"",name:"showTabs",required:!1,type:{name:"boolean"}},onEditModeChanged:{defaultValue:null,description:"",name:"onEditModeChanged",required:!1,type:{name:"((isInEditMode: boolean) => void)"}}}}}catch{}export{V as E};
