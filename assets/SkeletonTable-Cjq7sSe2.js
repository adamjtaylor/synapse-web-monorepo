import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as l,R as p}from"./index-CBqU2yxZ.js";import{t as c}from"./times-Z7TOiV6C.js";import{S as f}from"./Skeleton-CL8YFeep.js";function g(e,t){return Math.floor(Math.random()*(t-e)+e)}const o=({numRows:e=5,numCols:t=2,rowHeight:n,className:i,fullWidthCells:r=!1})=>{const[m,d]=l.useState([]);return l.useEffect(()=>{const s=[];c(e*t,u=>{s.push(a.jsx(p.Fragment,{children:a.jsx(f,{height:n,width:r?"100%":`${g(35,75)}%`})},u))}),d(s)},[e,t,n,r]),a.jsx("div",{className:i,style:{display:"grid",gridTemplateColumns:"auto ".repeat(t),gap:"8px"},children:m})};try{o.displayName="SkeletonTable",o.__docgenInfo={description:`Skeleton component designed to mimic a table with an arbitrary number of rows and columns.

Implemented using CSS grid.`,displayName:"SkeletonTable",props:{numRows:{defaultValue:{value:"5"},description:"",name:"numRows",required:!1,type:{name:"number"}},numCols:{defaultValue:{value:"2"},description:"",name:"numCols",required:!1,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fullWidthCells:{defaultValue:{value:"false"},description:"",name:"fullWidthCells",required:!1,type:{name:"boolean"}}}}}catch{}export{o as S};
