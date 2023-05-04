import{a as P,j as e}from"./jsx-runtime-ad672792.js";import{af as $,aP as b}from"./index-292d735c.js";import{g as l}from"./queryUtils-c8811bac.js";import{u as w}from"./useGetQueryResultBundle-3358bb23.js";import{r as f}from"./index-f1f749bf.js";import{d as Y}from"./dayjs.min-e0adaab4.js";import{f as B}from"./DateFormatter-02c7751d.js";import{o as k,i as O}from"./SynapseConstants-42953824.js";import"./getEndpoint-ac94413e.js";import"./SvgIcon-19b553ad.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-be3878cf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./IconSvg-e02ad7d3.js";import"./Clear-4b047352.js";import"./useTheme-5ec55fc4.js";import"./isHostComponent-fa76b8d9.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Box-748c1b2e.js";import"./extendSxProp-94a0a81d.js";import"./Button-251d6b7d.js";import"./ButtonBase-9ed4bb8f.js";import"./emotion-react.browser.esm-605ba919.js";import"./assertThisInitialized-081f9914.js";import"./Button-7d415009.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./isArray-5e3f9107.js";import"./QueryFilter-f76c7743.js";import"./cloneDeep-89c479ce.js";import"./_baseClone-915d0b90.js";import"./_Uint8Array-94184cdf.js";import"./_MapCache-0ce13457.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./useInfiniteQuery-c5238529.js";import"./infiniteQueryBehavior-167fe5ef.js";import"./merge-5bb462ed.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-062dbef5.js";import"./_baseRest-dbdc5e20.js";import"./_isIterateeCall-15ff692b.js";import"./utc-8a3e1a17.js";const g=({id:t,name:c,description:i,type:n,toolDetailPageURL:s,date:d,...o})=>P("div",{...o,className:`cardContainer FeaturedToolCard bootstrap-4-backport ${o.className??""}`,children:[e("div",{className:"FeaturedToolCard__Type",children:e("span",{className:"SRC-tag",children:n})}),e("div",{className:"FeaturedToolCard__Date",children:B(Y(parseInt(d)),"MMMM YYYY")}),e("div",{className:"FeaturedToolCard__Name",children:c}),e("div",{className:"FeaturedToolCard__Description",children:i}),e("div",{children:e("a",{className:"FeaturedToolCard__Link",href:`${s}${t}`,children:"View Tool"})})]});try{g.displayName="FeaturedToolCard",g.__docgenInfo={description:"",displayName:"FeaturedToolCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}}}catch{}const _=({entityId:t,toolDetailPageURL:c,idColumnName:i="id",nameColumnName:n="name",descriptionColumnName:s="description",typeColumnName:d="type",dateColumnName:o="date"})=>{const E=`SELECT "${i}", "${n}", "${s}", "${d}", "${o}" FROM ${t} ORDER BY ROW_ID DESC LIMIT 3`,L={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,partMask:k|O,query:{sql:E}},{accessToken:v}=$(),[h,F]=f.useState([]),[C,I]=f.useState(),{data:r,error:y}=w(L);return f.useEffect(()=>{(()=>{try{const p=l(i,r),V=l(n,r),x=l(d,r),S=l(s,r),U=l(o,r),N=(r==null?void 0:r.queryResult.queryResults.rows.map(T=>{T.values.some(M=>M===null)&&console.warn("Row has null value(s)");const m=T.values;return{name:m[V],description:m[S],type:m[x],id:m[p],date:m[U]}}))??[];if(y)throw y;if(N.length===0)return;F(N)}catch(p){console.error(p),I(p)}})()},[t,v,r,y,i,n,d,s,o]),C?e(b,{error:C}):e("div",{className:"FeaturedToolList",children:h.map(a=>e(g,{name:a.name,type:a.type,description:a.description,id:a.id,date:a.date,toolDetailPageURL:c},a.id))})};try{_.displayName="FeaturedToolsList",_.__docgenInfo={description:`Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
'id', 'name', 'type', and 'description'.`,displayName:"FeaturedToolsList",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},idColumnName:{defaultValue:{value:"id"},description:"",name:"idColumnName",required:!1,type:{name:"string"}},nameColumnName:{defaultValue:{value:"name"},description:"",name:"nameColumnName",required:!1,type:{name:"string"}},descriptionColumnName:{defaultValue:{value:"description"},description:"",name:"descriptionColumnName",required:!1,type:{name:"string"}},typeColumnName:{defaultValue:{value:"type"},description:"",name:"typeColumnName",required:!1,type:{name:"string"}},dateColumnName:{defaultValue:{value:"date"},description:"",name:"dateColumnName",required:!1,type:{name:"string"}}}}}catch{}const ke={title:"Home Page/FeaturedToolsList",component:_},u={args:{entityId:"syn26450069",idColumnName:"resourceId",nameColumnName:"resourceName",descriptionColumnName:"description",typeColumnName:"resourceType",dateColumnName:"dateAdded",toolDetailPageURL:"/Explore/Tools/DetailsPage?Resource_id="}};var D,R,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    entityId: 'syn26450069',
    idColumnName: 'resourceId',
    nameColumnName: 'resourceName',
    descriptionColumnName: 'description',
    typeColumnName: 'resourceType',
    dateColumnName: 'dateAdded',
    toolDetailPageURL: '/Explore/Tools/DetailsPage?Resource_id='
  }
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Oe=["Demo"];export{u as Demo,Oe as __namedExportsOrder,ke as default};
//# sourceMappingURL=FeaturedToolsList.stories-90efab9d.js.map
