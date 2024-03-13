import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as f,R as $}from"./index-CBqU2yxZ.js";import{h as w,l as B,m as C,n as U,v as K,B as O,w as D}from"./ApplicationSessionManager-BIT2Vljh.js";import{z as G}from"./index-C-UbkUMQ.js";import{U as E}from"./SynapseConstants-BgUUD4xl.js";import"./getEndpoint-CjoHA800.js";import{d as I}from"./ToastMessage-8-MpE8Xr.js";import{f as V,y as Y}from"./HelpPopover-D9xpB85R.js";import{u as W}from"./useMutation-fLVJo9eS.js";import{f as J}from"./DateFormatter-BJvnC5k4.js";import{d as X}from"./dayjs.min-BaCjP-cF.js";import{T as u}from"./Typography-B9IcQwF1.js";import"./SkeletonButton-am8ByK9J.js";import{S as Z}from"./SkeletonTable-Cjq7sSe2.js";import{M as S}from"./Alert-C_9TnCz2.js";import{A as R}from"./AlertTitle-Cg6cXOoN.js";import{L as ee}from"./Link-BtokOTIY.js";import{B as b}from"./Button-CpzfOSQ4.js";import{H as Q}from"./IconSvg-RU2HGWAm.js";import{S as ne}from"./Skeleton-CL8YFeep.js";function se(s="",r){const{accessToken:t,keyFactory:a}=w();return B({...r,queryKey:a.getPassingRecordQueryKey(s),queryFn:()=>C.getPassingRecord(s,t)})}function te(s){const r=U(),{accessToken:t,keyFactory:a}=w(),{data:l}=K();return W({...s,mutationFn:c=>C.postCertifiedUserTestResponse(t,c),onSuccess:async(c,x,h)=>{await Promise.all([r.invalidateQueries({queryKey:a.getPassingRecordQueryKey(l==null?void 0:l.ownerId)}),r.invalidateQueries({queryKey:a.getUserBundleQueryKey("current",E)})]),s!=null&&s.onSuccess&&await s.onSuccess(c,x,h)}})}function y(s){const{question:r,answer:t,onClick:a,checked:l,disabled:c}=s;return e.jsxs("div",{children:[e.jsx("input",{id:`${r.questionIndex}-${t.answerIndex}`,name:`${r.questionIndex}`,type:r.exclusive?"radio":"checkbox",value:t.answerIndex,onClick:a,checked:l,disabled:c}),e.jsx(u,{variant:"label",component:"label",sx:{fontWeight:400},htmlFor:`${r.questionIndex}-${t.answerIndex}`,children:t.prompt})]})}try{y.displayName="CertificationAnswer",y.__docgenInfo={description:"",displayName:"CertificationAnswer",props:{question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"MultichoiceQuestion"}},answer:{defaultValue:null,description:"",name:"answer",required:!0,type:{name:"MultichoiceAnswer"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const q=()=>{var k;const{accessToken:s}=w(),r=O(),[t,a]=f.useState(),[l,c]=f.useState(!1),[x,h]=f.useState([]),{data:p}=D(E),g=p==null?void 0:p.isCertified,T=p==null?void 0:p.userId,{data:i,isLoading:z}=se(T,{enabled:T!==void 0}),v=$.useRef(null),N="https://help.synapse.org/docs/Getting-Started.2055471150.html",_=async()=>{try{a(await C.getCertifyQuiz(s))}catch(n){r(n)}},{mutate:P,isPending:L}=te({onSuccess:()=>{c(!1),window.scrollTo(0,0)},throwOnError:!0}),j=!g&&(i==null||l);if(f.useEffect(()=>{s&&_()},[s]),z||t==null)return e.jsx(re,{});const M=(n,o)=>{const m=[...x.filter(d=>d.questionIndex!==n),{questionIndex:n,answerIndex:[o],concreteType:G}];h(m)},H=()=>{var n;(n=v.current)==null||n.reset(),c(!0),h([]),_()},A=()=>{try{if(t&&t.questions.length===x.length){const n={quizId:t.id,questionResponses:x};P(n)}else I("Please answer all of the questions and try again.","warning")}catch(n){I(n.reason,"danger")}},F=n=>n?{content:e.jsx(e.Fragment,{children:"More info"}),closePopoverOnClick:!0,onClick:()=>window.open(n,"_blank"),color:"primary"}:void 0;return e.jsxs("div",{children:[i&&!j&&e.jsxs(e.Fragment,{children:[(!i.passed||!g)&&e.jsxs(S,{severity:"error",children:[!i.passed&&e.jsx(R,{children:"Quiz Failed"}),e.jsxs(u,{variant:"body1",sx:{marginTop:"5px"},children:["Please review the results from the previous attempt, and"," ",e.jsx(ee,{href:"#",onClick:n=>{n.preventDefault(),H()},children:"retake the quiz"}),"."]})]}),i.passed&&g&&e.jsxs(S,{severity:"success",children:[e.jsx(R,{children:"Quiz Passed"}),e.jsx(u,{variant:"body1",sx:{marginTop:"5px"},children:`You passed the Synapse Certification Quiz on ${J(X(i.passedOn))}`})]}),e.jsxs(u,{variant:"sectionTitle",sx:{marginTop:"20px",marginBottom:"20px"},children:["Score: ",i.score," / ",(k=i.corrections)==null?void 0:k.length]})]}),e.jsxs("div",{className:"CertificationQuiz__container",children:[t&&j&&e.jsxs(e.Fragment,{children:[e.jsxs(b,{onClick:()=>window.open(N,"_blank"),className:"help-button",color:"secondary",variant:"contained",children:[e.jsx(Q,{className:"HelpButton",style:{marginRight:"4px"}}),"Help"]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:t.header}}),e.jsx("form",{ref:v,onSubmit:n=>n.preventDefault(),children:e.jsx("ol",{children:t==null?void 0:t.questions.map(n=>{const o=n.helpText||n.docLink;return e.jsxs("li",{role:n.exclusive?"radiogroup":void 0,children:[e.jsx(u,{component:"div",variant:"body1",dangerouslySetInnerHTML:{__html:n.prompt},sx:{marginTop:"20px"}}),n.answers.map(m=>e.jsx(y,{question:n,answer:m,onClick:d=>M(n.questionIndex,Number(d.currentTarget.value))},`${n.questionIndex}-${m.answerIndex}`)),o&&e.jsx(V,{contentProps:{markdown:n.helpText},placement:"right",sx:{table:{textAlign:"center",th:{padding:"5px"}}},actionButton:F(n.docLink),showCloseButton:!0,children:e.jsxs(u,{variant:"hintText",color:"primary",children:[e.jsx(Q,{className:"HelpButton",style:{marginRight:"4px"}}),"Need help answering this question?"]})})]},n.questionIndex)})})}),e.jsx(b,{className:"help-button",color:"primary",variant:"contained",size:"large",disabled:L,onClick:()=>{A()},children:"Submit"})]}),!j&&(i==null?void 0:i.corrections)&&e.jsx("ol",{children:i.corrections.map(n=>{const o=n.question,m=n.response;return e.jsxs("li",{children:[e.jsx(u,{component:"div",variant:"body1",dangerouslySetInnerHTML:{__html:o.prompt},className:n.isCorrect?"":"incorrectQuestion",sx:{marginTop:"20px"}}),o.answers.map(d=>e.jsx(y,{question:o,answer:d,disabled:!0,checked:m.answerIndex.includes(d.answerIndex)},`${o.questionIndex}-${d.answerIndex}`))]},o.questionIndex)})})]})]})},re=()=>{const s=[];for(let r=0;r<20;r++)s.push(e.jsx("li",{children:e.jsx(Z,{numCols:1,numRows:5})},r));return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(ne,{height:"80px",width:"460px"})}),e.jsx(Y,{numRows:5}),e.jsx("div",{className:"CertificationQuiz__container",children:e.jsx("ol",{style:{marginTop:"20px"},children:s})})]})};try{q.displayName="CertificationQuiz",q.__docgenInfo={description:"",displayName:"CertificationQuiz",props:{}}}catch{}export{q as C};
