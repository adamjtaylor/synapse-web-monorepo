import{j as p}from"./jsx-runtime-095bf462.js";import{R as i}from"./index-8db94870.js";import{l as c}from"./SynapseConstants-42f333d2.js";import"./EntityTypeUtils-47fbc790.js";import"./getEndpoint-ac94413e.js";import{a as m}from"./useGetQueryResultBundle-1f2c1958.js";import{p as d}from"./sqlFunctions-0082e06a.js";function n(r){var a;const{query:o,parens:s}=r,u=d(o.sql),l={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:o,entityId:u,partMask:c},{data:e}=m(l),t=(a=e==null?void 0:e.queryCount)==null?void 0:a.toLocaleString();return p(i.Fragment,{children:t&&(s?`(${t})`:t)})}try{n.displayName="QueryCount",n.__docgenInfo={description:"Shows the total count of results for a table query.",displayName:"QueryCount",props:{query:{defaultValue:null,description:"",name:"query",required:!0,type:{name:"Query"}},parens:{defaultValue:null,description:"",name:"parens",required:!1,type:{name:"boolean"}}}}}catch{}export{n as Q};
//# sourceMappingURL=QueryCount-6470953c.js.map
