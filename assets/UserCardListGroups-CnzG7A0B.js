import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as f}from"./useShowDesktop-ZDAnySaz.js";import{U as p}from"./UserCardListRotate-BOTydcky.js";import{E as L}from"./ExpandableContent-qcHIdvZz.js";import{r as V}from"./index-CBqU2yxZ.js";import{L as R}from"./LargeButton-BpWMxRLp.js";function d(a){const{columnName:t,facetValues:r,...n}=a;return e.jsx("div",{children:r==null?void 0:r.map((s,u)=>{const l=r[u],i={columnName:t,facetValues:[l],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"},o=e.jsx(p,{...n,selectedFacets:[i]}),y=e.jsxs(e.Fragment,{children:[" ",l," "]});return e.jsx(L,{title:y,content:o},`UserCardListGroup-Mobile-${u}`)})})}try{d.displayName="UserCardListGroupsMobile",d.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function m(a){const[t,r]=V.useState(0),{columnName:n,facetValues:s,...u}=a,l={columnName:n,facetValues:[s[t]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return e.jsxs("div",{className:"control-container",children:[e.jsxs("div",{className:"button-container",children:[s==null?void 0:s.map((i,o)=>e.jsx("button",{className:t===o?"isSelected":"",onClick:()=>r(o),children:i},i)),e.jsx("button",{className:"gap-fill"})]}),e.jsx("div",{className:"content-container",children:e.jsx(p,{...u,selectedFacets:[l]},`UserCardListGroup-${t}`)})]})}try{m.displayName="UserCardListGroupsDesktop",m.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}function c(a){const{summaryLink:t,summaryLinkText:r,...n}=a,s=f();return e.jsx("div",{className:`UserCardListGroups${s?"__Desktop":""}`,children:e.jsxs("div",{children:[s?e.jsx(m,{...n}):e.jsx(d,{...n}),t&&r&&e.jsx("div",{className:"UserCardListGroups__summary",children:e.jsx(R,{color:"secondary",variant:"contained",href:t,children:r})})]})})}try{c.displayName="UserCardListGroups",c.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}}}catch{}export{c as U};
