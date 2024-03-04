import{j as e,a as u,F as f}from"./jsx-runtime-9dc53467.js";import{r as c,R as fe}from"./index-76fb7be0.js";import{C as ge}from"./CreateChallengeTeam-8d8e226b.js";import{f as Te}from"./DateFormatter-18606e00.js";import{d as Ce}from"./dayjs.min-f79c4412.js";import{a as ye}from"./RadioGroup-35987025.js";import{d as Ie}from"./Search-d4dcf422.js";import{B as ne}from"./Box-551bafc7.js";import{b as be}from"./InputLabel-fd013c0b.js";import"./OrientationBanner-7be8199b.js";import{g as _e,B as Se}from"./getEndpoint-ac94413e.js";import{h as z,m as ie,n as oe,y as L,aB as ve,V as Ee}from"./ApplicationSessionManager-cde90ea0.js";import{e as se,f as Me,c as le,b as Ne}from"./useTeamMembers-8a0b392d.js";import{L as Re}from"./Link-6ae0d01e.js";import{M as de}from"./Tooltip-fe9d0c3e.js";import{c as we}from"./createSvgIcon-396e3e24.js";import{B as S}from"./Box-8faf86fd.js";import{D as qe}from"./DataGrid-13816a5c.js";import{d as xe}from"./AddCircleTwoTone-e20d6c93.js";import{c as Ae,S as Le}from"./Stack-4eda368b.js";import{T as _}from"./Typography-1d068b0b.js";import{B as N}from"./Button-33299b2c.js";import{a as W}from"./useTeam-d94691a2.js";import{S as A}from"./LoadingScreen-21cf5616.js";import{M as R}from"./Alert-c3fe2b05.js";import{M as Oe}from"./TextField-5371a958.js";import{n as $}from"./noop-cb277961.js";import{u as Be}from"./useGetEntityChallenge-55fa6f1f.js";import{u as Fe}from"./useGetUserTeams-8f1d45e6.js";import{b as ke}from"./HelpPopover-1ccaea46.js";import{a as Ve}from"./UserBadge-5d4e6736.js";import{U as Ue}from"./UserOrTeamBadge-b1c8df65.js";const Ge=Ae(),je=Ge,He=we([e("path",{d:"m20 8-8 5-8-5v10h16zm0-2H4l8 4.99z",opacity:".3"},"0"),e("path",{d:"M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5 8-5v10H4z"},"1")],"EmailTwoTone");function De(t,i){const{accessToken:o,keyFactory:r}=z();return ie({...i,queryKey:r.getTeamListQueryKey(t.sort().join()),queryFn:()=>oe.getTeamList(t,o)})}function Je(t,i){const{accessToken:o,keyFactory:r}=z();return ie({...i,queryKey:r.getChallengeTeamListQueryKey(t),queryFn:()=>oe.getAllChallengeTeams(o,t)})}function j(t){const{value:i,rowCount:o,onChange:r}=t,s=o>5?"calc(100% - 8px)":"100%";return u(ne,{sx:{p:"4px 4px",display:"flex",flexGrow:1,width:s,border:"1px solid #F2F2F2","& .Mui-focused":{border:"none",boxShadow:"none"}},children:[e(ne,{sx:{margin:"0px 0 -4px 8px"},"aria-label":"search",children:e(Ie,{sx:{color:"#878E95"}})}),e(be,{value:i,onChange:r,sx:{"& .MuiInputBase-input":{p:"1px 8px"},ml:1,flex:1,backgroundColor:"white"},placeholder:"Search all teams",inputProps:{"aria-label":"search all teams"}})]})}try{j.displayName="ChallengeTeamSearch",j.__docgenInfo={description:"",displayName:"ChallengeTeamSearch",props:{rowCount:{defaultValue:null,description:"",name:"rowCount",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}function H(t){const{challengeId:i,onSelectTeam:o,selectedTeamId:r}=t,{data:s,isLoading:m}=Je(i),{data:d}=L(),{data:a}=se(d==null?void 0:d.ownerId,{enabled:!!(d!=null&&d.ownerId)}),[l,C]=c.useState(""),v=(s==null?void 0:s.map(n=>n.teamId))??[],{data:g,isLoading:w}=De(v,{enabled:!!v.length}),E=c.useMemo(()=>{const n=l.toLowerCase(),x=(g==null?void 0:g.list.filter(T=>T.canPublicJoin||T.canRequestMembership!==!1||(a==null?void 0:a.some(I=>I.teamId===T.id))))??[];let h=x;return n.length&&(h=x.filter(T=>{var I;return T.name.toLowerCase().includes(n)||((I=T.description)==null?void 0:I.toLowerCase().includes(n))})),h.map(T=>({...T,hasInvitation:!!(a!=null&&a.some(I=>I.teamId===T.id))}))},[a,l,g==null?void 0:g.list]),y=m||w,q=c.useMemo(()=>[{field:"radiobutton",headerName:"",width:25,sortable:!1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:({row:n})=>e(ye,{value:n.id,checked:String(n.id)===r,onChange:x=>{o(x)},label:"","aria-label":`Select ${n.name}`})},{field:"name",headerName:"Team Name",flex:1,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:({row:n})=>e(Re,{href:`${_e(Se.PORTAL_ENDPOINT)}/#!Team:${n.id}`,target:"_blank",underline:"hover",children:n.name})},{field:"hasInvitation",headerName:"",width:15,filterable:!1,hideable:!1,disableColumnMenu:!0,align:"center",renderCell:({value:n})=>n?e(de,{title:"You have been invited to join this team",children:e(He,{fontSize:"small",sx:{color:"grey.700"}})}):null},{field:"created",headerName:"Created On",width:100,filterable:!1,hideable:!1,disableColumnMenu:!0,renderCell:({value:n})=>Te(Ce(n),"MM/DD/YY")},{field:"description",headerName:"Description",flex:1,filterable:!1,hideable:!1,disableColumnMenu:!0}],[o,r]);return u(S,{sx:{height:220},children:[!y&&e(j,{value:l,onChange:n=>C(n.target.value),rowCount:E.length}),e(qe,{loading:y,rows:E,columns:q,rowCount:5,hideFooter:!0,density:"compact",rowBuffer:5,sx:{border:"none",height:"100%","& .MuiDataGrid-columnHeader":{backgroundColor:"#F1F3F5"},"& .Mui-odd":{backgroundColor:"#FBFBFC"},".MuiDataGrid-columnHeaderTitleContainer":{justifyContent:"space-between"},".radio":{display:"flex",alignItems:"center",height:"100%"}},getRowClassName:n=>n.indexRelativeToCurrentPage%2===0?"Mui-even":"Mui-odd"})]})}try{H.displayName="ChallengeTeamTable",H.__docgenInfo={description:`Table component that displays teams that
 1. are registered for the challenge specified by the challengeId prop
 2. the current user is able to join, create a request to join, or accept an invitation to join`,displayName:"ChallengeTeamTable",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},selectedTeamId:{defaultValue:null,description:"",name:"selectedTeamId",required:!1,type:{name:"string"}},onSelectTeam:{defaultValue:null,description:"",name:"onSelectTeam",required:!0,type:{name:"(teamId?: string | undefined) => void"}}}}}catch{}const Pe='To participate in a challenge, you need to create a new Team or join an existing one.   By default, the participant who creates a team is the "Team Captain" and has the ability to invite and remove members.   All team members will need a Synapse account so that they can login and accept the team invitation.',D=({challengeId:t,onCreateTeam:i,selectedTeamId:o,onSelectTeam:r})=>u(je,{spacing:2,children:[e(_,{variant:"body1",sx:{lineHeight:"20px"},children:Pe}),e(S,{sx:{height:270},children:e(H,{challengeId:t,selectedTeamId:o,onSelectTeam:r})}),e(S,{children:e(N,{color:"primary",variant:"contained",onClick:i,startIcon:e(xe,{}),children:"Create New Team"})})]});try{D.displayName="SelectChallengeTeam",D.__docgenInfo={description:"",displayName:"SelectChallengeTeam",props:{challengeId:{defaultValue:null,description:"",name:"challengeId",required:!0,type:{name:"string"}},onCreateTeam:{defaultValue:null,description:"",name:"onCreateTeam",required:!0,type:{name:"() => void"}},selectedTeamId:{defaultValue:null,description:"",name:"selectedTeamId",required:!1,type:{name:"string"}},onSelectTeam:{defaultValue:null,description:"",name:"onSelectTeam",required:!0,type:{name:"(teamId?: string | undefined) => void"}}}}}catch{}const J=({createdNewTeam:t,teamId:i})=>{const{data:o,status:r,error:s}=W(i,{enabled:!!i});return i?r==="pending"?e(S,{display:"flex",flexDirection:"column",gap:1,children:e(A,{})}):r==="error"?e(R,{severity:"error",children:s.message}):u(f,{children:[u(_,{variant:"body1",sx:{lineHeight:"20px"},children:["You have successfully ",t?"created":"joined"," team"," ",e("b",{children:o.name})," and have been added to this challenge."]}),t&&e(S,{children:"Invited team members will be automatically registered for the challenge as soon as they accept the team member invitation."})]}):null};try{J.displayName="RegistrationSuccessful",J.__docgenInfo={description:"",displayName:"RegistrationSuccessful",props:{createdNewTeam:{defaultValue:null,description:"",name:"createdNewTeam",required:!0,type:{name:"boolean"}},teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string | undefined"}}}}}catch{}const P=fe.forwardRef(function(i,o){const{teamId:r,onRequestSubmitted:s=$}=i,[m,d]=c.useState(""),{data:a}=L(),{data:l,status:C,error:v}=W(r,{enabled:!!r}),{mutate:g}=Me({onSuccess:()=>{s()}}),w=E=>{const y=E.target.value;d(y)};return c.useImperativeHandle(o,()=>({submit(){a&&g({teamId:r,userId:a.ownerId,message:m,expiresOn:void 0})}}),[m,g,r,a]),C==="pending"?e(S,{display:"flex",flexDirection:"column",gap:1,children:e(A,{})}):C==="error"?e(R,{severity:"error",children:v.message}):u(f,{children:[u(_,{variant:"body1",sx:{lineHeight:"20px"},children:["The following message will be sent to the Team Manager(s) of the"," ",e("strong",{children:l.name})," team."]}),e(S,{children:e(Oe,{label:"Your Message to Team Managers(s)",id:"membershipRequestMessage",value:m,fullWidth:!0,multiline:!0,rows:4,autoFocus:!0,onChange:w})})]})});try{P.displayName="MembershipRequestForm",P.__docgenInfo={description:"Component that provides a form that a user can use to create a MembershipRequest for a Team.\n\nTo submit the form, pass a ref and call the `submit` handle on the ref.",displayName:"MembershipRequestForm",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}},onRequestSubmitted:{defaultValue:null,description:"",name:"onRequestSubmitted",required:!0,type:{name:"() => void"}}}}}catch{}function Y(t){const{teamId:i,onSuccess:o=$,...r}=t,{data:s}=L(),{mutate:m,isPending:d}=le({onSuccess:()=>{o()}}),a=!s||d,l=c.useCallback(()=>{s!=null&&s.ownerId&&m({teamId:i,userId:s.ownerId})},[s==null?void 0:s.ownerId,m,i]);return e(N,{variant:"contained",disabled:a,startIcon:d?e(A,{}):void 0,...r,onClick:l,children:"Accept Invitation"})}function Q(t){const{teamId:i}=t,{data:o}=L(),{data:r,status:s,error:m}=se(o==null?void 0:o.ownerId,{enabled:!!(o!=null&&o.ownerId)}),{data:d}=W(i,{enabled:!!i});if(s==="pending")return e(A,{});if(s==="error")return e(R,{severity:"error",children:m.message});const a=r.find(l=>l.teamId===i);return a==null?u(R,{severity:"error",children:["No matching invitation for team ",d?d.name:`ID: ${i}`]}):u(Le,{gap:2,children:[u(_,{variant:"body1",children:[e(Ve,{userId:a.createdBy})," has invited you to join"," ",e("span",{children:e(Ue,{principalId:i})}),a.message?" with the following message:":"."]}),a.message&&e(_,{variant:"body1",component:"blockquote",children:a.message}),e(_,{variant:"body1",children:"Do you want to accept this invitation?"})]})}try{Y.displayName="AcceptMembershipInvitationButton",Y.__docgenInfo={description:"",displayName:"AcceptMembershipInvitationButton",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"(() => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{Q.displayName="OpenMembershipInvitation",Q.__docgenInfo={description:`For the current, authenticated user, displays the details of an open MembershipInvitation for the provided team ID.

This component requires
  1. The current user is logged-in
  2. The current user has an open invitation to join the teamId passed in via props

To prompt the user to accept the invitation, use the {@link AcceptMembershipInvitationButton} component.`,displayName:"OpenMembershipInvitation",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"(() => void)"}}}}}catch{}function Ye(t){switch(t){case"SELECT_YOUR_CHALLENGE_TEAM":return"Select Your Challenge Team";case"ACCEPT_INVITATION":return"Invitation to Join Team";case"JOIN_REQUEST_FORM":return"Request Team Membership";case"JOIN_REQUEST_SENT":return"Request Sent";case"CREATE_NEW_TEAM":return"Create Team";case"REGISTRATION_SUCCESSFUL":return"Registration Successful!"}}function re(t){const{projectId:i,isShowingModal:o=!1,onClose:r}=t,{accessToken:s}=z(),m=!!s,[d,a]=c.useState("SELECT_YOUR_CHALLENGE_TEAM"),[l,C]=c.useState(),[v,g]=c.useState(!1),[w,E]=c.useState(!1),y=c.useRef(null),q=c.useRef(null),{data:n,isLoading:x}=L({enabled:m}),{data:h,isLoading:T}=Be(i),{mutateAsync:I,isPending:B,error:F}=le(),{data:K,error:k}=Fe(h==null?void 0:h.id,1,0,{enabled:!!(m&&h)}),V=K&&K.results.length>0,{data:b,isLoading:X,error:U}=Ne(l,String(n==null?void 0:n.ownerId),{enabled:m&&!!l&&!!n}),Z=c.useCallback(async()=>{!l||!n||(await I({teamId:l,userId:n.ownerId}),a("REGISTRATION_SUCCESSFUL"))},[I,a,l,n]),ce=c.useCallback(()=>{E(!1),C(void 0),r()},[r]),ue=x||T,M=c.useMemo(()=>{switch(d){case"SELECT_YOUR_CHALLENGE_TEAM":case"JOIN_REQUEST_SENT":case"REGISTRATION_SUCCESSFUL":return e(f,{});case"ACCEPT_INVITATION":case"JOIN_REQUEST_FORM":case"CREATE_NEW_TEAM":default:return e(N,{variant:"outlined",onClick:()=>{a("SELECT_YOUR_CHALLENGE_TEAM"),C(void 0)},children:"Back"})}},[d]),G=c.useMemo(()=>e(N,{variant:"contained",onClick:()=>{r()},children:"Close"}),[r]),{actions:me=e(f,{}),content:pe=e(f,{})}=c.useMemo(()=>{if(!m)return{content:e(R,{severity:"error",children:e(ve,{})})};if(V)return{content:e(R,{severity:"error",children:e(_,{children:"You are already a member of a registered submission team for this Challenge."})})};switch(d){case"SELECT_YOUR_CHALLENGE_TEAM":{let p="Join Team",te=!1,O=$,ae="";return b&&b.hasOpenInvitation?(p="View Invitation to Join Team",O=()=>{a("ACCEPT_INVITATION")}):b&&b.hasOpenRequest?(p="Join Request Pending",te=!0,ae="You have already submitted a request to join this team."):b&&b.membershipApprovalRequired?(p="Request to Join Team",O=()=>{a("JOIN_REQUEST_FORM")}):b&&b.canJoin&&(p="Join Team",O=()=>{Z()}),{content:h&&!V&&e(D,{challengeId:h.id,onCreateTeam:()=>a("CREATE_NEW_TEAM"),selectedTeamId:l,onSelectTeam:he=>C(he)}),actions:u(f,{children:[M,e(de,{title:ae,children:e("span",{children:e(N,{onClick:O,startIcon:B?e(A,{}):void 0,disabled:!l||X||B||te,variant:"contained",children:p})})})]})}}case"ACCEPT_INVITATION":return{content:e(Q,{teamId:l}),actions:u(f,{children:[M,e(Y,{teamId:l,onSuccess:()=>{a("REGISTRATION_SUCCESSFUL")}})]})};case"JOIN_REQUEST_FORM":return{content:e(P,{ref:y,teamId:l,onRequestSubmitted:()=>{a("JOIN_REQUEST_SENT")}}),actions:u(f,{children:[M,e(N,{variant:"contained",onClick:()=>{var p;(p=y==null?void 0:y.current)==null||p.submit()},children:"Send Request"})]})};case"JOIN_REQUEST_SENT":return{content:e(_,{variant:"body1",sx:{lineHeight:"20px"},children:"Team Manager(s) have received your request. Check your Synapse email address for status of your request."}),actions:u(f,{children:[M,G]})};case"REGISTRATION_SUCCESSFUL":return{content:e(J,{createdNewTeam:w,teamId:l}),actions:u(f,{children:[M,G]})};case"CREATE_NEW_TEAM":return{content:e(ge,{ref:q,challengeId:h==null?void 0:h.id,onCanSubmitChange:p=>g(p),onFinished:p=>{E(!0),C(p),a("REGISTRATION_SUCCESSFUL")}}),actions:u(f,{children:[M,e(N,{variant:"contained",disabled:!v,onClick:()=>{var p;(p=q==null?void 0:q.current)==null||p.submit()},children:"Create Team"})]})}}},[m,V,d,l,M,G,w,b,h,B,X,Z,v]),ee=(F==null?void 0:F.message)||(U==null?void 0:U.message)||(k==null?void 0:k.message);return e(ke,{onCancel:ce,open:o,actions:me,title:Ye(d),content:e(Ee,{children:e(S,{display:"flex",flexDirection:"column",gap:1,children:ue?e(A,{size:40}):u(f,{children:[pe,ee&&e(R,{severity:"error",children:ee})]})})})})}try{re.displayName="ChallengeTeamWizard",re.__docgenInfo={description:`The ChallengeTeamWizard is used to guide a user through the process of joining or creating a team for a challenge.

A required precondition is that the user is NOT on any registered submission team for the challenge.`,displayName:"ChallengeTeamWizard",props:{projectId:{defaultValue:null,description:"",name:"projectId",required:!0,type:{name:"string"}},isShowingModal:{defaultValue:null,description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{re as C};
