import{af as n,aj as S,c0 as o,c1 as m,ao as r,c2 as Q,c3 as f}from"./index-292d735c.js";import{u as y}from"./useMutation-7b33115e.js";import{u as A}from"./useInfiniteQuery-c5238529.js";function D(e,a){const{accessToken:t,keyFactory:c}=n();return S(c.getDataAccessSubmissionQueryKey(String(e.toString())),()=>o(e,t),a)}function q(e,a){const{accessToken:t,keyFactory:c}=n();return A(c.searchDataAccessSubmissionQueryKey(e),async s=>await m({...e,nextPageToken:s.pageParam},t),{...a,getNextPageParam:s=>s.nextPageToken})}function w(e){const a=r(),{accessToken:t,keyFactory:c}=n();return y(s=>Q(s,t),{...e,onSuccess:async(s,u,i)=>{await a.invalidateQueries(c.searchDataAccessSubmissionQueryKey()),a.setQueryData(c.getDataAccessSubmissionQueryKey(u.submissionId),s),e!=null&&e.onSuccess&&await e.onSuccess(s,u,i)}})}function K(e){const a=r(),{accessToken:t,keyFactory:c}=n();return y(({request:s})=>f(s,t),{...e,onSuccess:async(s,u,i)=>{await a.invalidateQueries(c.getAccessRequirementStatusQueryKey(u.accessRequirementId)),await a.invalidateQueries(c.searchDataAccessSubmissionQueryKey()),e!=null&&e.onSuccess&&await e.onSuccess(s,u,i)}})}export{w as a,q as b,D as c,K as u};
//# sourceMappingURL=useDataAccessSubmission-0ba60d51.js.map
