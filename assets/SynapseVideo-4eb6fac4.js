import{j as t,a as I,F as v}from"./jsx-runtime-ad672792.js";import{r as l}from"./index-f1f749bf.js";import{af as V,aX as w,b0 as F,b6 as _}from"./index-292d735c.js";import{S as b}from"./SynapseConstants-42953824.js";function p({params:e}){const{accessToken:i}=V(),[d,c]=l.useState(),[u,f]=l.useState(),o=e.width??"",r=e.height??"";return l.useEffect(()=>{const y=()=>{if(e.videoId)c(`https://www.youtube.com/embed/${e.videoId}`);else if(e.vimeoId)c(`https://player.vimeo.com/video/${e.vimeoId}`);else{const n=e.oggSynapseId||e.mp4SynapseId||e.webmSynapseId;w(i,n).then(s=>{const g=[{associateObjectId:n,associateObjectType:F.FileEntity,fileHandleId:s.dataFileHandleId}];h(g,s.dataFileHandleId)})}},h=(n,s)=>{_({includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:n},i).then(a=>{const{preSignedURL:S}=a.requestedFiles.filter(m=>m.fileHandleId===s)[0];f(S)}).catch(a=>{console.error("Error on getting video ",a)})};y()},[d,e,i,r,o]),t(()=>u?i?t("video",{controls:!0,src:u,width:o,height:r,"data-testid":"synapse-video-url",children:"It does not support the HTML5 Video element."}):I("p",{children:["You will need to",t("button",{"data-testid":"video-login",className:`${b} sign-in-btn default
                `,children:"Sign in"}),"in for access to that resource."]}):d?t("iframe",{title:"video frame",src:d,width:o,height:r}):t(v,{}),{})}try{p.displayName="SynapseVideo",p.__docgenInfo={description:"",displayName:"SynapseVideo",props:{params:{defaultValue:null,description:"",name:"params",required:!0,type:{name:"{ width?: string | undefined; height?: string | undefined; videoId?: string | undefined; vimeoId?: string | undefined; oggSynapseId?: string | undefined; mp4SynapseId?: string | undefined; webmSynapseId?: string | undefined; }"}}}}}catch{}export{p as S};
//# sourceMappingURL=SynapseVideo-4eb6fac4.js.map
