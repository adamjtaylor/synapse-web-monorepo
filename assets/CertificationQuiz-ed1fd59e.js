import{a as s,j as n,F as x}from"./jsx-runtime-9dc53467.js";import{r as g,R as B}from"./index-76fb7be0.js";import{h as _,m as D,n as v,l as K,y as O,D as G,z as V}from"./ApplicationSessionManager-e3b4cd5b.js";import{y as j}from"./index-01eb1463.js";import"./getEndpoint-ac94413e.js";import{U as N}from"./SynapseConstants-eb00dc31.js";import{d as R}from"./ToastMessage-313b7aae.js";import{g as Y,z as W}from"./HelpPopover-349e17a9.js";import{u as J}from"./useMutation-824d3319.js";import{f as X}from"./DateFormatter-092d39b5.js";import{d as Z}from"./dayjs.min-f79c4412.js";import{T as p}from"./Typography-1d068b0b.js";import"./SkeletonButton-007d85cd.js";import{S as ee}from"./SkeletonTable-fdb2ca5b.js";import{M as b}from"./Alert-c3fe2b05.js";import{A as Q}from"./AlertTitle-aeea0d59.js";import{L as ne}from"./Link-6ae0d01e.js";import{B as q}from"./Button-33299b2c.js";import{H as E}from"./IconSvg-a7217c47.js";import{S as te}from"./Skeleton-131bd473.js";function re(r="",i){const{accessToken:t,keyFactory:c}=_();return D({...i,queryKey:c.getPassingRecordQueryKey(r),queryFn:()=>v.getPassingRecord(r,t)})}function ie(r){const i=K(),{accessToken:t,keyFactory:c}=_(),{data:d}=O();return J({...r,mutationFn:l=>v.postCertifiedUserTestResponse(t,l),onSuccess:async(l,f,y)=>{await Promise.all([i.invalidateQueries({queryKey:c.getPassingRecordQueryKey(d==null?void 0:d.ownerId)}),i.invalidateQueries({queryKey:c.getUserBundleQueryKey("current",N)})]),r!=null&&r.onSuccess&&await r.onSuccess(l,f,y)}})}function w(r){const{question:i,answer:t,onClick:c,checked:d,disabled:l}=r;return s("div",{children:[n("input",{id:`${i.questionIndex}-${t.answerIndex}`,name:`${i.questionIndex}`,type:i.exclusive?"radio":"checkbox",value:t.answerIndex,onClick:c,checked:d,disabled:l}),n(p,{variant:"label",component:"label",sx:{fontWeight:400},htmlFor:`${i.questionIndex}-${t.answerIndex}`,children:t.prompt})]})}try{w.displayName="CertificationAnswer",w.__docgenInfo={description:"",displayName:"CertificationAnswer",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"MultichoiceQuestion"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"MultichoiceAnswer"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const z=()=>{const{accessToken:r}=_(),i=G(),[t,c]=g.useState(),[d,l]=g.useState(!1),[f,y]=g.useState([]),{data:m}=V(N),C=m==null?void 0:m.isCertified,k=m==null?void 0:m.userId,{data:o,isLoading:P}=re(k,{enabled:k!==void 0}),I=B.useRef(null),L="https://help.synapse.org/docs/Getting-Started.2055471150.html",S=async()=>{try{c(await v.getCertifyQuiz(r))}catch(e){i(e)}},{mutate:M,isPending:H}=ie({onSuccess:()=>{l(!1),window.scrollTo(0,0)},throwOnError:!0}),T=!C&&(o==null||d);if(g.useEffect(()=>{r&&S()},[r]),P||t==null)return n(se,{});const A=(e,a)=>{const h=[...f.filter(u=>u.questionIndex!==e),{questionIndex:e,answerIndex:[a],concreteType:j}];y(h)},$=()=>{var e;(e=I.current)==null||e.reset(),l(!0),y([]),S()},F=()=>{try{if(t&&t.questions.length===f.length){const e={quizId:t.id,questionResponses:f};M(e)}else R("Please answer all of the questions and try again.","warning")}catch(e){R(e.reason,"danger")}},U=e=>e?{content:n(x,{children:"More info"}),closePopoverOnClick:!0,onClick:()=>window.open(e,"_blank"),color:"primary"}:void 0;return s("div",{children:[o&&!T&&s(x,{children:[(!o.passed||!C)&&s(b,{severity:"error",children:[!o.passed&&n(Q,{children:"Quiz Failed"}),s(p,{variant:"body1",sx:{marginTop:"5px"},children:["Please review the results from the previous attempt, and"," ",n(ne,{href:"#",onClick:e=>{e.preventDefault(),$()},children:"retake the quiz"}),"."]})]}),o.passed&&C&&s(b,{severity:"success",children:[n(Q,{children:"Quiz Passed"}),n(p,{variant:"body1",sx:{marginTop:"5px"},children:`You passed the Synapse Certification Quiz on ${X(Z(o.passedOn))}`})]}),s(p,{variant:"sectionTitle",sx:{marginTop:"20px",marginBottom:"20px"},children:["Score: ",o.score," / ",t==null?void 0:t.questions.length]})]}),s("div",{className:"CertificationQuiz__container",children:[t&&T&&s(x,{children:[s(q,{onClick:()=>window.open(L,"_blank"),className:"help-button",color:"secondary",variant:"contained",children:[n(E,{className:"HelpButton",style:{marginRight:"4px"}}),"Help"]}),n("div",{dangerouslySetInnerHTML:{__html:t.header}}),n("form",{ref:I,onSubmit:e=>e.preventDefault(),children:n("ol",{children:t==null?void 0:t.questions.map(e=>{const a=e.helpText||e.docLink;return s("li",{role:e.exclusive?"radiogroup":void 0,children:[n(p,{component:"div",variant:"body1",dangerouslySetInnerHTML:{__html:e.prompt},sx:{marginTop:"20px"}}),e.answers.map(h=>n(w,{question:e,answer:h,onClick:u=>A(e.questionIndex,Number(u.currentTarget.value))},`${e.questionIndex}-${h.answerIndex}`)),a&&n(Y,{contentProps:{markdown:e.helpText},placement:"right",sx:{table:{textAlign:"center",th:{padding:"5px"}}},actionButton:U(e.docLink),showCloseButton:!0,children:s(p,{variant:"hintText",color:"primary",children:[n(E,{className:"HelpButton",style:{marginRight:"4px"}}),"Need help answering this question?"]})})]},e.questionIndex)})})}),n(q,{className:"help-button",color:"primary",variant:"contained",size:"large",disabled:H,onClick:()=>{F()},children:"Submit"})]}),!T&&(o==null?void 0:o.corrections)&&n("ol",{children:o.corrections.map(e=>{const a=e.question,h=e.response;return s("li",{children:[n(p,{component:"div",variant:"body1",dangerouslySetInnerHTML:{__html:a.prompt},className:e.isCorrect?"":"incorrectQuestion",sx:{marginTop:"20px"}}),a.answers.map(u=>n(w,{question:a,answer:u,disabled:!0,checked:h.answerIndex.includes(u.answerIndex)},`${a.questionIndex}-${u.answerIndex}`))]},a.questionIndex)})})]})]})},se=()=>{const r=[];for(let i=0;i<20;i++)r.push(n("li",{children:n(ee,{numCols:1,numRows:5})},i));return s(x,{children:[n("div",{children:n(te,{height:"80px",width:"460px"})}),n(W,{numRows:5}),n("div",{className:"CertificationQuiz__container",children:n("ol",{style:{marginTop:"20px"},children:r})})]})};try{z.displayName="CertificationQuiz",z.__docgenInfo={description:"",displayName:"CertificationQuiz",props:{}}}catch{}export{z as C};
