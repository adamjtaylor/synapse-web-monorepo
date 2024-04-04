import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as o,R as _}from"./index-Dl6G-zuu.js";import{T as x}from"./TextField-BYZwcPau.js";import{h as A,o as F,n as N,Q as V}from"./SynapseClient-DVOjLlPA.js";import"./OrientationBanner-CPsBxF8o.js";import"./getEndpoint-CjoHA800.js";import{u as q}from"./useMutation-DreY5go-.js";import{u as O}from"./useTeam-D-IoL4ov.js";import{a as k}from"./useTeamMembers-DeaUT_L-.js";import{p as Q}from"./papaparse.min-D3VSFJh2.js";import{B as p}from"./Box-DRdN2jdb.js";import{T as E}from"./Typography-B88_J_TK.js";import{M as W}from"./Alert-HJYNNEvY.js";import{n as w}from"./noop-DX6rZLP_.js";function B(n){const{accessToken:f,keyFactory:d}=A(),u=F();return q({...n,mutationFn:l=>N.registerChallengeTeam(l,f),onSuccess:async(l,r,a)=>{if(n!=null&&n.onSuccess)return n.onSuccess(l,r,a);await u.invalidateQueries({queryKey:d.getChallengeTeamListQueryKey(r.challengeId)})}})}function U(){const{mutateAsync:n,isPending:f,error:d}=O(),{mutateAsync:u,isPending:l,error:r}=k(),{mutateAsync:a,isPending:j,error:c}=B(),C=o.useCallback(async(h,g,s)=>{const y=[];for(const i of g){const m=await u({teamId:h,inviteeEmail:i.trim(),message:s});y.push(m)}return y},[u]),v=o.useCallback(async(h,g,s,y)=>{const i=await n(h),m=a({teamId:i.id,challengeId:g}),I=C(i.id,s,y);return Promise.all([Promise.resolve(i),m,I])},[n,C,a]),R=o.useMemo(()=>d||r||c?[d,r,c].filter(s=>s!=null):void 0,[c,d,r]);return{createAndRegisterTeam:v,isPending:f||l||j,errors:R}}const D=3,H="Please limit the initial number of invited members to three. You may add additional members after the team has been created.",M=_.forwardRef(function(f,d){const{challengeId:u,onCanSubmitChange:l=w,onFinished:r=w}=f,[a,j]=o.useState({name:"",description:""}),[c,C]=o.useState(""),[v,R]=o.useState(""),h=e=>{const T={...a,...e};j(T)},{inviteesParseResult:g,parsedInvitees:s}=o.useMemo(()=>{const e=Q.parse(v,{delimiter:",",transform(S){return S.trim()}}),T=e.data[0]||[];return{inviteesParseResult:e,parsedInvitees:T}},[v]),i=s.length>D,m=!!(a&&a.name&&a.name.length>1&&!i);o.useEffect(()=>{l(m)},[m,l]);const{createAndRegisterTeam:I,isPending:b,errors:P}=U();return o.useImperativeHandle(d,()=>({submit(){if(!m){console.warn("Attempted to submit when form data was not valid. Nothing will happen.");return}I(a,u,s,c).then(([e])=>{r(e.id)}).catch(()=>{})}}),[m,s,I,a,u,c,r]),t.jsxs(p,{children:[t.jsx(E,{variant:"body1",sx:{lineHeight:"20px"},children:"Create a new team for this Challenge!"}),t.jsx(x,{id:"name",label:"Team Name",value:a.name,fullWidth:!0,autoFocus:!0,required:!0,onChange:e=>h({name:e.target.value}),disabled:b}),t.jsx(p,{display:"flex",children:t.jsx(x,{id:"description",label:t.jsx(p,{display:"flex",gap:2,children:t.jsx(p,{children:"Team Description"})}),value:a.description,fullWidth:!0,multiline:!0,rows:4,onChange:e=>h({description:e.target.value}),disabled:b})}),t.jsx(p,{display:"flex",children:t.jsx(x,{id:"message",label:t.jsx(p,{display:"flex",gap:2,children:t.jsx(p,{children:"Recruitment Message"})}),value:c,fullWidth:!0,multiline:!0,rows:4,onChange:e=>C(e.target.value),disabled:b})}),t.jsx(x,{id:"invitees",label:"Emails of Additional Members to Invite (max 3)",placeholder:"Enter emails separated by comma",value:v,fullWidth:!0,onChange:e=>R(e.target.value),disabled:b}),(i||!V(g.errors)||P)&&t.jsxs(W,{severity:"error",children:[i&&t.jsx(E,{variant:"body1",children:H}),g.errors.map((e,T)=>t.jsx(E,{variant:"body1",children:e.message},T)),P&&P.map(e=>t.jsx(E,{variant:"body1",children:e.reason},e.reason))]})]})});try{M.displayName="CreateChallengeTeam",M.__docgenInfo={description:"",displayName:"CreateChallengeTeam",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},onCanSubmitChange:{defaultValue:null,description:"",name:"onCanSubmitChange",required:!1,type:{name:"((canSubmit: boolean) => void)"}},onFinished:{defaultValue:null,description:"",name:"onFinished",required:!1,type:{name:"((teamId: string) => void)"}}}}}catch{}export{M as C};
