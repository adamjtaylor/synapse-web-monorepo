import{j as w}from"./jsx-runtime-095bf462.js";import{r as i,R as O}from"./index-8db94870.js";import{u as b,S as R,d as y}from"./Select-457c486b.esm-aea63717.js";import{_ as T}from"./extends-98964cd2.js";import"./index-8ce4a492.js";import{u as N,bz as v,bA as k,bB as A}from"./SynapseClient-c43c6534.js";import"./EntityTypeUtils-9aa47355.js";import"./getEndpoint-ac94413e.js";import{u as F}from"./use-deep-compare-effect.esm-08e85271.js";import{V as H,s as L,q as D,r as x}from"./SynapseConstants-1ebc8be6.js";import{u as C,c as G}from"./uniq-feee8d5f.js";import{w as P}from"./without-c7324a45.js";import{a as q,U as _}from"./UserOrTeamBadge-d8e68863.js";import{S as B}from"./Skeleton-cbf43066.js";var Y=i.forwardRef(function(t,e){var n=b(t);return i.createElement(R,T({ref:e},n))});const K=Y,M=(t,e,n)=>{i.useEffect(()=>{const o=setTimeout(()=>t(),n);return()=>clearTimeout(o)},[...e||[],n])},j={ownerId:"",firstName:"Unknown",lastName:"Unknown",userName:"Unknown",isIndividual:!1},$={name:"Unknown",id:"unknown",type:"org.sagebionetworks.repo.model.FileEntity",versionNumber:0,versionLabel:"placeholder",benefactorId:0,createdOn:"null",modifiedOn:"null",createdBy:"null",modifiedBy:"null",isLatestVersion:!0},J={id:"unknown",etag:"Unknown",name:"Unknown",description:"Unknown",ownerId:"null",createdOn:"null",contentSource:"Unknown",submissionInstructionsMessage:"Unknown",submissionReceiptMessage:"Unknown"},Q=async(t,e)=>{const n=await v(t,e),r=t.filter(s=>n.results.map(c=>c.id).indexOf(s.targetId)===-1).map(s=>({...$,id:s.targetId,name:`${s.targetId}`}));return[...n.results,...r]},z=async t=>{const e=(await k(t)).children,o=t.filter(r=>e.map(s=>s.ownerId).indexOf(r)===-1).map(r=>({...j,ownerId:r,name:`Unknown User (${r})`}));return[...e,...o]},W=async(t,e)=>{const n=await A(t,e),r=t.filter(s=>n.results.map(c=>c.id).indexOf(s)===-1).map(s=>({...J,id:s,name:s}));return[...n.results,...r]};function X(t){const{ids:e,type:n}=t,{accessToken:o}=N(),[r,s]=i.useState([]),c=n==="USER_PROFILE"?"ownerId":"id",I=(l=>{switch(l){case"USER_PROFILE":return x;case"ENTITY_HEADER":return D;case"EVALUATION_QUEUE":return L;default:return""}})(n),g=r.map(l=>l[c]),h=e.filter(l=>l!==H),S=C(P(h,...g));return i.useEffect(()=>{(p=>{if(!p.length)return;const d=sessionStorage.getItem(I);try{const u=d?JSON.parse(d):[],E=u.map(f=>f[c]);for(const f of p)E.includes(f[c])||u.push(f);sessionStorage.setItem(I,JSON.stringify(u))}catch{sessionStorage.setItem(I,JSON.stringify(p))}})(r)},[r,c,I]),F(()=>{let l=!1;return(async()=>{if(S.length>0)try{const d=Array.from(S),u=n==="ENTITY_HEADER"?d.map(m=>({targetId:m})):d,E=G(u,45),f=[];for(const m of E){let a=[];switch(n){case"USER_PROFILE":a=await z(m);break;case"ENTITY_HEADER":a=await Q(m,o);break;case"EVALUATION_QUEUE":a=await W(m,o);break}f.push(...a)}l||s(m=>m.concat(...f))}catch(d){console.error("Error on data retrieval",d)}})(),()=>{l=!0}},[o,n,S]),r}const Z={Control:t=>w(y.Control,{...t,className:`form-control ${t.className??""}`}),SingleValue:t=>{const{data:e}=t;return i.createElement(y.SingleValue,{...t,key:e==null?void 0:e.id},w(_,{userGroupHeader:e==null?void 0:e.header,disableHref:!0,showFullName:!0},e==null?void 0:e.header.ownerId))},Option:t=>{const{data:e}=t;return i.createElement(y.Option,{...t,key:e==null?void 0:e.id},w(_,{userGroupHeader:e==null?void 0:e.header,disableHref:!0,showFullName:!0,showCardOnHover:!1}))}},V=t=>{const{inputId:e,defaultValue:n=null,onChange:o,filterPredicate:r,typeFilter:s,placeholder:c,focusOnSelect:U=!1,value:I}=t,[g,h]=i.useState(""),[S,l]=i.useState("");M(()=>{l(g)},[g],500);const[p=void 0]=X({ids:n?[n]:[],type:"USER_PROFILE"}),{data:d,isLoading:u}=q(S,s),E=O.useRef(null);O.useEffect(()=>{U&&E.current&&E.current.focus()});const f=i.useMemo(()=>u||g!==S?()=>"Loading…":void 0,[u,S,g]),m=(d??[]).filter(r??(()=>!0)).map(a=>({id:a.ownerId.toString(),value:a.ownerId.toString(),label:a.userName,header:a}));return n&&p==null?w(B,{width:"100%"}):w(K,{className:"bootstrap-4-backport UserSearchBoxV2",ref:E,inputValue:g,onInputChange:h,filterOption:()=>!0,isLoading:u,options:!u&&m||[],noOptionsMessage:f,defaultValue:n?{id:n,value:n,label:p.userName,header:p}:void 0,inputId:e,isClearable:!0,value:I,styles:{control:a=>({...a,display:"flex !important"}),input:a=>({...a,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:Z,onChange:a=>{o&&o((a==null?void 0:a.id)??null,(a==null?void 0:a.header)??null)},placeholder:c})};try{V.displayName="UserSearchBoxV2",V.__docgenInfo={description:"",displayName:"UserSearchBoxV2",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((principalId: string | null, header: UserGroupHeader | null) => void)"}},typeFilter:{defaultValue:null,description:"",name:"typeFilter",required:!1,type:{name:"enum",value:[{value:'"USERS_ONLY"'},{value:'"TEAMS_ONLY"'},{value:'"ALL"'}]}},filterPredicate:{defaultValue:null,description:"",name:"filterPredicate",required:!1,type:{name:"((item: UserGroupHeader) => boolean)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},focusOnSelect:{defaultValue:null,description:"",name:"focusOnSelect",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"PropsValue<UserSearchBoxValueType>"}}}}}catch{}export{K as S,V as U,M as a,X as u};
//# sourceMappingURL=UserSearchBoxV2-c978dfb8.js.map
