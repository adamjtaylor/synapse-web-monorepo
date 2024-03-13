import{j as e}from"./jsx-runtime-CKrituN3.js";import{R as i}from"./index-CBqU2yxZ.js";import{d as u}from"./ContentCopy-B9txzuGj.js";import{T as c}from"./ToastMessage-8-MpE8Xr.js";import{B as m}from"./Box-Bs5qirON.js";import{M as f}from"./TextField-_J16cikT.js";import{I as h}from"./InputAdornment-C8ZO4umc.js";import{I as y}from"./IconButton-NUGov2wg.js";const a=({value:t,inputWidth:s})=>{const[d,n]=i.useState(!1),o=i.createRef(),r=(x,l)=>p=>{p.preventDefault(),navigator.clipboard.writeText(l).then(()=>{n(!0),setTimeout(()=>{n(!1)},4e3)})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{text:"Successfully copied to clipboard",show:d,autohide:!0}),e.jsx(m,{display:"flex",justifyContent:"center",sx:{my:2,mx:0},ref:o,children:e.jsx(f,{sx:{width:s},value:t,inputProps:{readOnly:!0,onClick:r(o,t)},InputProps:{endAdornment:e.jsx(h,{position:"end",children:e.jsx(y,{onClick:r(o,t),children:e.jsx(u,{})})})}})})]})};try{a.displayName="CopyToClipboardInput",a.__docgenInfo={description:`Component that holds a large string in a readonly <input> to be copied to the user's clipboard when clicked.
This component should only be used when the full length of the string value to copy does not necessarily need to be
seen by the user. This component was adapted from the email address copy to clipboard functionality in UserCardMedium.
For smaller/inline strings, look at UserCardMedium functionality for displaying the value in a <p> tag instead of a
readonly <input> tag.`,displayName:"CopyToClipboardInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},inputWidth:{defaultValue:null,description:"",name:"inputWidth",required:!0,type:{name:"string"}}}}}catch{}export{a as C};
