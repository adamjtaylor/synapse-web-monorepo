import{a as x,j as e}from"./jsx-runtime-9dc53467.js";import{p as I,B as M}from"./SynapseConstants-eb00dc31.js";import{r as y}from"./index-76fb7be0.js";import"./getEndpoint-ac94413e.js";import{h as U,x as $}from"./ApplicationSessionManager-e3b4cd5b.js";import{g as u}from"./queryUtils-9fbc8574.js";import{u as w}from"./useGetQueryResultBundle-27df2f21.js";import{d as B}from"./dayjs.min-f79c4412.js";import{f as Y}from"./DateFormatter-092d39b5.js";import{S as b}from"./ShowMore-0d3229ca.js";const f=({id:r,name:p,description:s,type:o,toolDetailPageURL:i,date:d,...t})=>x("div",{...t,className:`cardContainer FeaturedToolCard ${t.className??""}`,children:[e("div",{className:"FeaturedToolCard__Type",children:e("span",{className:"SRC-tag",children:o})}),e("div",{className:"FeaturedToolCard__Date",children:Y(B(parseInt(d)),"MMMM YYYY")}),e("div",{className:"FeaturedToolCard__Name",children:p}),e("div",{className:"FeaturedToolCard__Description",children:e(b,{summary:s})}),e("a",{className:"FeaturedToolCard__Link",href:`${i}${r}`,children:"View Tool"})]});try{f.displayName="FeaturedToolCard",f.__docgenInfo={description:"",displayName:"FeaturedToolCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}}}catch{}const q=({entityId:r,toolDetailPageURL:p,idColumnName:s="id",nameColumnName:o="name",descriptionColumnName:i="description",typeColumnName:d="type",dateColumnName:t="dateAdded"})=>{const C=`SELECT "${s}", "${o}", "${i}", "${d}", "${t}" FROM ${r} ORDER BY ${t} DESC LIMIT 3`,h={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:r,partMask:I|M,query:{sql:C}},{accessToken:v}=U(),[F,E]=y.useState([]),[_,L]=y.useState(),{data:a,error:m}=w(h);return y.useEffect(()=>{(()=>{try{const c=u(s,a),N=u(o,a),R=u(d,a),D=u(i,a),V=u(t,a),g=(a==null?void 0:a.queryResult.queryResults.rows.map(T=>{T.values.some(S=>S===null)&&console.warn("Row has null value(s)");const l=T.values;return{name:l[N],description:l[D],type:l[R],id:l[c],date:l[V]}}))??[];if(m)throw m;if(g.length===0)return;E(g)}catch(c){console.error(c),L(c)}})()},[r,v,a,m,s,o,d,i,t]),_?e($,{error:_}):e("div",{className:"FeaturedToolList",children:F.map(n=>e(f,{name:n.name,type:n.type,description:n.description,id:n.id,date:n.date,toolDetailPageURL:p},n.id))})};try{q.displayName="FeaturedToolsList",q.__docgenInfo={description:`Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
'id', 'name', 'type', and 'description'.`,displayName:"FeaturedToolsList",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},idColumnName:{defaultValue:{value:"id"},description:"",name:"idColumnName",required:!1,type:{name:"string"}},nameColumnName:{defaultValue:{value:"name"},description:"",name:"nameColumnName",required:!1,type:{name:"string"}},descriptionColumnName:{defaultValue:{value:"description"},description:"",name:"descriptionColumnName",required:!1,type:{name:"string"}},typeColumnName:{defaultValue:{value:"type"},description:"",name:"typeColumnName",required:!1,type:{name:"string"}},dateColumnName:{defaultValue:{value:"dateAdded"},description:"",name:"dateColumnName",required:!1,type:{name:"string"}}}}}catch{}export{q as F};
