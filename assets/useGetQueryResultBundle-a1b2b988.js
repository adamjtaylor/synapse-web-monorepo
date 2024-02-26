import{r as k}from"./index-76fb7be0.js";import{h as l,m as c,n as i}from"./SynapseClient-15d3bd1d.js";import{u as R}from"./useInfiniteQuery-aee729f2.js";import"./getEndpoint-ac94413e.js";import{B as g,D as b}from"./SynapseConstants-6baf84cd.js";import{m as d}from"./merge-75f6c925.js";const f={staleTime:1e3*60*30};function h(e,t){const{accessToken:n,keyFactory:s}=l();return c({...f,...t,queryKey:s.getEntityTableQueryResultQueryKey(e,!1),queryFn:()=>i.getQueryTableResults(e,n)})}function T(e,t,n){const{accessToken:s,keyFactory:u}=l();return c({...f,...t,queryKey:u.getEntityTableQueryResultWithAsyncStatusQueryKey(e,!1),queryFn:()=>i.getQueryTableAsyncJobResults(e,s,n)})}function S(e,t,n){const s=e.partMask&g,u={...e,partMask:s},r=s>0?t==null?void 0:t.enabled:!1;return T(u,{...t,enabled:r},n)}function E(e,t,n){const s=e.partMask&~g,u={...e,query:{...e.query,offset:void 0,limit:void 0,sort:void 0},partMask:s},r=s>0?t==null?void 0:t.enabled:!1;return T(u,{...t,enabled:r},n)}function B(e,t,n){const s=S(e,t,n),u=E(e,t,n);return k.useMemo(()=>s.status==="error"?s:u.status==="error"?u:s.isLoading?s:u.isLoading?u:s.isPending?d({},s,u):d({},u,s),[s,u])}function G(e,t,n){const{accessToken:s,keyFactory:u}=l();return R({...f,...t,queryKey:u.getEntityTableQueryResultQueryKey(e,!0),queryFn:r=>{const a=typeof r.pageParam=="string"?parseInt(r.pageParam):r.pageParam??0;return i.getQueryTableAsyncJobResults({...e,query:{...e.query,offset:a},partMask:a!==0?e.partMask&g:e.partMask},s,n)},select:r=>{const a=r==null?void 0:r.pages[0];if(a.responseBody)for(let o=0;o<r.pages.length;o++){const y=r.pages[o];y.responseBody!=null&&(r.pages[o].responseBody={...a.responseBody,queryResult:y.responseBody.queryResult})}return r},getPreviousPageParam:r=>{if(r.jobState!=="COMPLETE")return;const a=r.requestBody;if(a.query.offset==null||a.query.offset===0)return;const o=a.query.limit??b;return Math.max(a.query.offset-o,0)},initialPageParam:void 0,getNextPageParam:(r,a)=>{var Q,p;if(r.jobState!=="COMPLETE")return;const o=r.requestBody,y=o.query.limit??b,m=(Q=a[0].responseBody)==null?void 0:Q.queryCount;if(!(m!=null&&(o.query.offset??0)+y>=m))return((p=r.responseBody.queryResult)==null?void 0:p.queryResults.rows.length)===y?(o.query.offset??0)+y:void 0}})}function L(e,t,n=!1){const{accessToken:s,keyFactory:u}=l();return c({...f,...t,queryKey:u.getFullTableQueryResultQueryKey(e,n),queryFn:()=>i.getFullQueryTableResults(e,n?void 0:s)})}export{L as a,B as b,G as c,h as u};
