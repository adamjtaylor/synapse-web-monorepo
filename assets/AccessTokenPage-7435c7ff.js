import{a as o,j as e,F as E}from"./jsx-runtime-9dc53467.js";import{r as x,R as k}from"./index-76fb7be0.js";import{h as _,n as b,l as R,x as v,V as X}from"./ApplicationSessionManager-e3b4cd5b.js";import{u as F}from"./useMutation-824d3319.js";import{u as Y}from"./useInfiniteQuery-a2f9ef18.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-a1ca5cdb.js";import{l as V}from"./LoadingScreen-21cf5616.js";import{d as w}from"./dayjs.min-f79c4412.js";import{H as f}from"./index-01eb1463.js";import{d as H}from"./DeleteTwoTone-33ea7f93.js";import{I as J,A as Z}from"./IconSvg-a7217c47.js";import{W as $}from"./WarningDialog-1fea802e.js";import{L as ee,C as ne}from"./HelpPopover-349e17a9.js";import{C as oe}from"./Card-e26aaef7.js";import{B as h}from"./Box-8faf86fd.js";import{S as j}from"./Stack-4eda368b.js";import{T as s}from"./Typography-1d068b0b.js";import{M as T}from"./Tooltip-801f2a9c.js";import{I as q}from"./IconButton-f820fa46.js";import{n as A}from"./noop-cb277961.js";import{C as ae}from"./CopyToClipboardInput-4c90854a.js";import{C}from"./Checkbox-f25cec3e.js";import{T as te}from"./TextField-12f5946f.js";import{B as M}from"./Button-33299b2c.js";function re(n){const{accessToken:a,keyFactory:c}=_();return Y({...n,initialPageParam:void 0,queryKey:c.getPersonalAccessTokensQueryKey(),queryFn:async r=>await b.getPersonalAccessTokenRecords(a,r.pageParam),getNextPageParam:r=>r.nextPageToken})}function se(n){const{accessToken:a,keyFactory:c}=_(),r=R();return F({...n,onSuccess:async(...t)=>{n!=null&&n.onSuccess&&n.onSuccess(...t),await r.invalidateQueries({queryKey:c.getPersonalAccessTokensQueryKey()})},mutationFn:t=>b.createPersonalAccessToken(t,a)})}function ie(n){const{accessToken:a,keyFactory:c}=_(),r=R();return F({...n,onSuccess:async(...t)=>{n!=null&&n.onSuccess&&n.onSuccess(...t),await r.invalidateQueries({queryKey:c.getPersonalAccessTokensQueryKey()})},mutationFn:t=>b.deletePersonalAccessToken(t,a)})}w.extend(ee);const ce="This token has expired. It no longer works and can only be deleted.";function P(n){const{accessToken:a,onDelete:c=A}=n,[r,t]=x.useState(!1),i=a.state==="EXPIRED",{mutate:l,isPending:u}=ie({onSuccess:()=>{c()},throwOnError:!0}),g=x.useCallback(()=>{i?l(a.id):t(!0)},[a.id,l,i]);return o(oe,{sx:{my:2,height:"120px",width:"100%",p:1.5,pl:4,backgroundColor:i?"#fcf8e3":"inherit"},children:[e($,{title:"Confirm Deletion",content:o(E,{children:[e(s,{variant:"body1",children:"If you delete this token, any applications using it will stop working. This action cannot be undone."}),e(s,{variant:"body1",fontWeight:"700",children:"Are you sure you want to delete this token?"})]}),confirmButtonText:"Delete Token",onCancel:()=>t(!1),onConfirm:()=>{l(a.id),t(!1)},confirmButtonColor:"error",open:r}),o(h,{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",children:[o(j,{flexGrow:1,gap:1,justifyContent:"space-between",children:[e(s,{variant:"headline3",sx:{fontSize:"16px"},children:a.name}),o("div",{children:[e("span",{children:"Permissions: "}),a.scopes.map(d=>e(T,{title:f[d].description,children:e(s,{component:"span",variant:"smallText1",sx:{mx:.25,cursor:"default",color:"primary.main"},children:f[d].displayName})},d))]}),o("div",{children:[o(s,{component:"span",variant:"smallText1",children:["Last used ",w(a.lastUsed).fromNow()]}),e(s,{component:"span",variant:"smallText1",color:"grey.700",children:" | "}),o(s,{component:"span",variant:"smallText1",children:["Created ",w(a.createdOn).fromNow()]})]})]}),o(h,{alignSelf:"flex-start",display:"flex",gap:1,alignItems:"center",children:[i&&e(T,{title:ce,placement:"top",children:e(q,{children:e(J,{icon:"warning",sx:{color:"warning.main",fontSize:"inherit"},wrap:!1})})}),e(T,{title:"Delete Token",placement:"top",children:e(q,{disabled:u,color:"error",onClick:g,children:e(H,{})})})]})]})]})}try{P.displayName="AccessTokenCard",P.__docgenInfo={description:"",displayName:"AccessTokenCard",props:{accessToken:{defaultValue:null,description:"Record referring to an access token, not a token itself",name:"accessToken",required:!0,type:{name:"AccessTokenRecord"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}const le="You must provide a token name and at least one permission.";function S(n){const{onClose:a=A,onCreate:c=A}=n,[r,t]=k.useState(""),[i,l]=k.useState(!0),[u,g]=k.useState(!1),[m,d]=k.useState(!1),[N,I]=k.useState(null),{mutate:Q,isPending:W,error:D,data:y}=se(),K=p=>{t(p.target.value)},G=(p,O)=>!!p&&O.some(U=>U),L=()=>{if(G(r,[i,u,m])){I(null);const p={scope:[],name:r};i&&p.scope.push("view"),u&&p.scope.push("download"),m&&p.scope.push("modify"),Q(p),c()}else I(le)},z=y?o(E,{children:[o(s,{variant:"body1",children:[e(s,{variant:"body1",component:"span",fontWeight:700,children:"This token will not be able to be retrieved again."})," ","If needed, generate a new personal access token, and delete this one."]}),e("div",{children:e(ae,{value:y.token,inputWidth:"350px"})}),e(s,{variant:"body1",children:"This token grants access to your account functions and should be treated like a password."})]}):o("div",{children:[e(te,{autoFocus:!0,label:"Token Name",value:r,onChange:K,placeholder:"e.g. Synapse command line access on my laptop",sx:{mb:2}}),e(s,{variant:"label",children:"Token Permissions"}),o(j,{gap:2,my:1,children:[e(C,{label:f.view.displayName,checked:i,onChange:()=>l(!i),children:o(s,{variant:"smallText1",color:"grey.700",children:[f.view.description,". Required to use Synapse programmatic clients."]})}),e(C,{label:f.download.displayName,checked:u,onChange:()=>g(!u),children:e(s,{variant:"smallText1",color:"grey.700",children:f.download.description})}),e(C,{label:f.modify.displayName,checked:m,onChange:()=>d(!m),children:e(s,{variant:"smallText1",color:"grey.700",children:f.modify.description})})]}),N&&e(v,{error:N}),D&&e(v,{error:D.reason})]});return e(ne,{open:!0,title:"Create New Personal Access Token",content:W?V:z,confirmButtonProps:{children:y?"Close":"Create Token",variant:y?"outlined":"contained"},hasCancelButton:!y,onCancel:a,onConfirm:y?()=>a():()=>{L()}})}try{S.displayName="CreateAccessTokenModal",S.__docgenInfo={description:"",displayName:"CreateAccessTokenModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onCreate:{defaultValue:null,description:"",name:"onCreate",required:!1,type:{name:"(() => void)"}}}}}catch{}const B=({title:n,body:a})=>{const[c,r]=x.useState(!1),{data:t,isLoading:i,error:l,fetchNextPage:u,hasNextPage:g}=re(),m=(t==null?void 0:t.pages.flatMap(d=>d.results))??[];return o("div",{children:[o(h,{display:"flex",gap:2,justifyContent:"space-between",children:[o(h,{flexGrow:1,children:[e("h1",{children:n}),a]}),e(h,{flexShrink:0,alignSelf:"end",children:e(M,{variant:"contained",color:"primary",onClick:()=>r(!0),startIcon:e(Z,{}),children:"Create New Token"})})]}),o(X,{children:[c&&e(S,{onClose:()=>r(!1)}),o("div",{children:[!i&&!l&&m.length===0&&e(s,{variant:"headline2",m:5,textAlign:"center",children:"You currently have no personal access tokens."}),o(h,{maxWidth:"800px",mx:"auto",my:2.5,children:[m.map(d=>e(P,{accessToken:d},d.id)),i&&V,!i&&g&&!l&&e(h,{display:"flex",justifyContent:"flex-end",children:e(M,{variant:"contained",color:"primary",onClick:()=>{u()},children:"Load More"})})]}),l&&e(v,{error:l})]})]})]})};try{B.displayName="AccessTokenPage",B.__docgenInfo={description:"",displayName:"AccessTokenPage",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"ReactNode"}}}}}catch{}export{B as A};
