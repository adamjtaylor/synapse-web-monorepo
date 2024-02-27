import{a as m,j as r}from"./jsx-runtime-9dc53467.js";import{v as E,w as T,x as N}from"./ApplicationSessionManager-e3b4cd5b.js";import{P as b}from"./getEndpoint-ac94413e.js";import"./OrientationBanner-a1ca5cdb.js";import"./index-76fb7be0.js";import{u as I}from"./useEntity-62ca77dc.js";import{u as _}from"./useGetEntityHeaders-cbff0849.js";import{E as c}from"./EntityIcon-45716546.js";import{E as k}from"./ErrorChip-272da4bf.js";import{L as x}from"./Link-6ae0d01e.js";import{S as L}from"./Skeleton-131bd473.js";const f=s=>{const{entity:n,className:u,versionNumber:i,displayTextField:d="name",link:h=!0,showIcon:p=!0}=s;let e="";typeof n=="string"&&(e=n);const y=!!e&&typeof n=="string",{data:l,isLoading:v}=_(e,i,{enabled:y}),g=y&&l==null&&!v,{error:o}=I(e,i,{enabled:g});if(l||typeof n!="string"){const t=l??n;let a;return"concreteType"in t?a=E(t.concreteType):a=T(t),h?m(x,{className:u,target:"_blank",rel:"noopener noreferrer",href:`${b.PORTAL}#!Synapse:${t.id}${i?`.${i}`:""}`,children:[p&&r(c,{type:a,style:{marginRight:"6px"}}),t[d]]}):m("p",{className:u,children:[p&&r(c,{type:a,style:{marginRight:"6px"}}),t[d]]})}else return o?e?r(k,{chipText:e,error:o}):r(N,{error:o}):r(L,{variant:"rectangular",width:"100"})};try{f.displayName="EntityLink",f.__docgenInfo={description:"",displayName:"EntityLink",props:{entity:{defaultValue:null,description:"",name:"entity",required:!0,type:{name:"string | EntityHeader | Entity"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},link:{defaultValue:null,description:"Whether the component should link to the entity page in Synapse. Default true",name:"link",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},showIcon:{defaultValue:null,description:"Whether to display an icon identifying the entity type. Default true",name:"showIcon",required:!1,type:{name:"boolean"}},displayTextField:{defaultValue:null,description:"The field of the entity to display. Default is 'name'",name:"displayTextField",required:!1,type:{name:"enum",value:[{value:'"name"'},{value:'"type"'},{value:'"id"'},{value:'"modifiedOn"'},{value:'"modifiedBy"'},{value:'"benefactorId"'},{value:'"isLatestVersion"'},{value:'"versionNumber"'},{value:'"versionLabel"'},{value:'"createdOn"'},{value:'"createdBy"'},{value:'"description"'},{value:'"etag"'},{value:'"parentId"'},{value:'"concreteType"'}]}}}}}catch{}export{f as E};
