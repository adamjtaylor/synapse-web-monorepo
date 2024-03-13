import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as t}from"./index-CBqU2yxZ.js";import{G as v,J as E,C as _}from"./HelpPopover-D9xpB85R.js";import{g as N,M as D,A as b,a as w,b as F,c as I,B as M,E as J,T as O,D as P,d as q}from"./ErrorListTemplate-DmPCwnoj.js";import"./isPlainObject-CBKr2sJD.js";import"./mapValues-Cyn6MZIo.js";import"./index.modern-BtJLeNAU.js";import"./index-BTun5L1E.js";import{p as R}from"./papaparse.min-CP10tOhp.js";import{i as B}from"./_Map-W_LbVzGG.js";import{B as S}from"./Box-Bs5qirON.js";import{B as f}from"./Button-CpzfOSQ4.js";import{C as k}from"./_getTag-CQLY2zcD.js";import{M as W}from"./TextField-_J16cikT.js";import{M as L}from"./Alert-C_9TnCz2.js";import{A as G}from"./AlertTitle-Cg6cXOoN.js";import{T as H}from"./Typography-B9IcQwF1.js";const U={jsonSchemaDefinition:{type:"string"}};function $(n=U){const{jsonSchemaDefinition:r}=n,i=t.useMemo(()=>B(r)&&r.type&&r.type==="string",[r]);return{parse:t.useCallback(l=>new Promise((s,u)=>{R.parse(l,{dynamicTyping:!i,complete:o=>{o.errors.length>0?u(o.errors):s(o.data.flat())}})}),[i])}}const x={type:"string"};function Y(n=x){return{$schema:"http://json-schema.org/draft-07/schema#",type:"array",items:n}}function y(n){const{value:r=[],onChange:i,onSubmit:p,arrayItemDefinition:l=x,formRef:s}=n,[u,o]=t.useState(!1),[m,d]=t.useState(""),[c,h]=t.useState([]),C=t.useMemo(()=>Y(l),[l]),{parse:g}=$({jsonSchemaDefinition:l}),A=t.useCallback(async()=>{if(m)try{const a=await g(m);i([...r,...a]),h([]),d(""),o(!1)}catch(a){h(a)}},[i,m,r,g]),V=t.useMemo(()=>N(),[]);return e.jsxs(S,{className:"JsonSchemaFormContainer",sx:{".JsonSchemaForm .LabelContainer":{display:"none",visibility:"hidden"}},children:[e.jsx(D,{ref:s,schema:C,className:"JsonSchemaForm",noHtml5Validate:!0,uiSchema:{"ui:submitButtonOptions":{norender:!0}},validator:v,formData:r,formContext:{allowRemovingLastItemInArray:!0},onChange:({formData:a})=>i(a),onSubmit:({formData:a})=>p(a),templates:{ArrayFieldDescriptionTemplate:b,ArrayFieldItemTemplate:w,ArrayFieldTemplate:F,ArrayFieldTitleTemplate:I,ButtonTemplates:M,ErrorListTemplate:J},transformErrors:V,widgets:{TextWidget:O,DateTimeWidget:P,SelectWidget:E,CheckboxWidget:q}}),e.jsx(f,{onClick:()=>o(!0),children:"Paste new values"}),e.jsxs(k,{sx:{mt:2},in:u,children:[e.jsx(W,{multiline:!0,InputProps:{inputProps:{"aria-label":"CSV or TSV to Append"}},rows:5,placeholder:"Place comma or tab delimited values here",value:m,onChange:a=>d(a.target.value)}),e.jsxs(S,{my:1,display:"flex",justifyContent:"flex-end",children:[e.jsx(f,{onClick:()=>o(!1),children:"Cancel"}),e.jsx(f,{onClick:()=>{A()},children:"Add"})]}),c&&c.length>0&&e.jsxs(L,{severity:"error",sx:{my:2},children:[e.jsx(G,{children:"Parsing errors encountered:"}),e.jsx("ul",{children:c.map((a,j)=>e.jsxs(H,{component:"li",lineHeight:1.5,variant:"smallText1",children:[a.row?`At ${a.row}: `:"",a.message]},j))})]})]})]})}try{y.displayName="JSONArrayEditor",y.__docgenInfo={description:"",displayName:"JSONArrayEditor",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(newValue: T[]) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(formData: T[]) => void"}},formRef:{defaultValue:null,description:"",name:"formRef",required:!1,type:{name:"Ref<Form<T, RJSFSchema, GenericObjectType>>"}}}}}catch{}function T(n){const{isShowingModal:r,onConfirm:i,onCancel:p,dialogTitle:l="Edit Values",value:s,...u}=n,o=t.useRef(null),[m,d]=t.useState(s??[]);return t.useEffect(()=>{s&&d(s)},[s]),e.jsx(_,{open:r,title:l,onCancel:p,maxWidth:"md",content:e.jsx(y,{formRef:o,value:m,onChange:c=>d(c),onSubmit:i,...u}),onConfirm:()=>{o.current.formElement.current.requestSubmit()}})}try{T.displayName="JSONArrayEditorModal",T.__docgenInfo={description:"",displayName:"JSONArrayEditorModal",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T[]"}},arrayItemDefinition:{defaultValue:null,description:"",name:"arrayItemDefinition",required:!1,type:{name:"JSONSchema7Definition"}},dialogTitle:{defaultValue:null,description:"",name:"dialogTitle",required:!1,type:{name:"ReactNode"}},isShowingModal:{defaultValue:null,description:"",name:"isShowingModal",required:!0,type:{name:"boolean"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!0,type:{name:"(value: T[]) => void"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!0,type:{name:"() => void"}}}}}catch{}export{T as J};
