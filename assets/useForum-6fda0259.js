import{h as o,m as n,n as s}from"./SynapseClient-15d3bd1d.js";import{u as F}from"./useInfiniteQuery-aee729f2.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-a1ca5cdb.js";import"./index-76fb7be0.js";import"./jsx-runtime-9dc53467.js";import{g}from"./InfiniteQueryUtils-54ae7e6b.js";function T(e,r){const{accessToken:t,keyFactory:a}=o();return n({...r,queryKey:a.getForumModeratorsQueryKey(e),queryFn:()=>s.getModerators(t,e)})}function Q(e,r){const{accessToken:t,keyFactory:a}=o();return n({...r,queryKey:a.getForumMetadataQueryKey(e),queryFn:()=>s.getForumMetadata(t,e)})}function f(e,r,t,a,u,y){const{accessToken:m,keyFactory:i}=o();return F({...y,queryKey:i.getForumThreadsQueryKey(e,r,t,a,u),queryFn:async c=>s.getForumThreads(m,e,c.pageParam,r,t,a,u),initialPageParam:void 0,getNextPageParam:g})}export{T as a,Q as b,f as u};
