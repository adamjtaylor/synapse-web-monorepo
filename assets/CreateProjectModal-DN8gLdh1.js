import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import{h,m as C}from"./ApplicationSessionManager-BIT2Vljh.js";import"./OrientationBanner-eGM9Gy2i.js";import"./getEndpoint-CjoHA800.js";import{C as g}from"./HelpPopover-D9xpB85R.js";import{F as y}from"./FullWidthAlert-843DPaPD.js";import{T as S}from"./TextField-CvoifmWq.js";import{M as x}from"./Alert-C_9TnCz2.js";const m=({isShowingModal:s=!1,onClose:p})=>{const{accessToken:u}=h(),[o,n]=a.useState(""),[f,i]=a.useState(!1),[c,r]=a.useState(),l=()=>{n(""),r(void 0),p()},d=async()=>{try{const e=await C.createProject(o,u);i(!0),l(),window.location.href=`/#!Synapse:${e.id}`}catch(e){e.reason?r(e.reason):r(e.toString())}},j=t.jsxs(t.Fragment,{children:[t.jsx(S,{id:"projectInput",label:"Project Name",value:o,fullWidth:!0,onChange:e=>{n(e.target.value)},inputProps:{onKeyDown:e=>{e.key==="Enter"&&o!==""&&d()}}}),c&&t.jsx(x,{severity:"error",children:c})]});return t.jsxs(t.Fragment,{children:[t.jsx(g,{open:s,title:"Create a new Project",content:j,confirmButtonProps:{children:"Save"},onConfirm:()=>{d()},onCancel:l,maxWidth:"md"}),t.jsx(y,{show:f,variant:"info",title:"Project created",description:"",autoCloseAfterDelayInSeconds:10,onClose:()=>{i(!1)}})]})};try{m.displayName="CreateProjectModal",m.__docgenInfo={description:"",displayName:"CreateProjectModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{m as C};
