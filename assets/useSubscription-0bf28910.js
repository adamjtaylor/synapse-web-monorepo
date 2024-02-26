import{h as d,D as g}from"./index-3a31b023.js";import{h as y,l as b,n as l,m as S,T as m}from"./SynapseClient-15d3bd1d.js";import{u as p}from"./useMutation-cf90146e.js";import{u as f}from"./useInfiniteQuery-aee729f2.js";import"./OrientationBanner-a1ca5cdb.js";import{r as Q}from"./index-76fb7be0.js";import"./getEndpoint-ac94413e.js";import"./jsx-runtime-9dc53467.js";function I(e,t){const{accessToken:r,keyFactory:u}=y();return S({...t,queryKey:u.getSubscribersQueryKey(e.objectId,e.objectType),queryFn:()=>l.getSubscribers(r,e)})}function K(e,t,r){const{accessToken:u,keyFactory:i}=y(),s=async()=>{const n={objectType:t,idList:[e],sortByType:d.OBJECT_ID,sortDirection:g.ASC},c=await l.postSubscriptionList(u,n);return m(c.results)?null:c.results[0]};return S({...r,queryKey:i.getSubscriptionQueryKey(e,t),queryFn:s})}function L(e,t,r){const{accessToken:u,keyFactory:i}=y(),s=b();return f({...t,queryKey:r??i.getAllSubscriptionsQueryKey(e),queryFn:async n=>{const c=n.pageParam,o=await l.getAllSubscriptions(u,10,c,e);return o.results.forEach(a=>{s.setQueryData(i.getSubscriptionQueryKey(a.objectId,a.objectType),a)}),o},initialPageParam:void 0,getNextPageParam:(n,c)=>{const o=c.flatMap(a=>a.results).length;if(n.totalNumberOfResults>o)return o}})}function q(e){const t=b(),{accessToken:r,keyFactory:u}=y();return p({...e,mutationFn:i=>l.postSubscription(r,i),onSuccess:async(i,s,n)=>{await Promise.all([t.invalidateQueries({queryKey:u.getAllSubscriptionsQueryKey()}),t.invalidateQueries({queryKey:u.getSubscriptionQueryKey(s.objectId,s.objectType)}),t.invalidateQueries({queryKey:u.getSubscribersQueryKey(s.objectId,s.objectType)})]),e!=null&&e.onSuccess&&await e.onSuccess(i,s,n)}})}function P(e){const t=b(),{accessToken:r,keyFactory:u}=y();return p({...e,mutationFn:i=>l.deleteSubscription(r,i.subscriptionId),onSuccess:async(i,s,n)=>{await Promise.all([t.invalidateQueries({queryKey:u.getAllSubscriptionsQueryKey()}),t.invalidateQueries({queryKey:u.getSubscriptionQueryKey(s.objectId,s.objectType)}),t.invalidateQueries({queryKey:u.getSubscribersQueryKey(s.objectId,s.objectType)})]),e!=null&&e.onSuccess&&await e.onSuccess(i,s,n)}})}const h=(e,t)=>{const{data:r,isLoading:u}=K(e,t),{mutate:i,isPending:s}=q(),{mutate:n,isPending:c}=P(),o=u||s||c,a=Q.useCallback(()=>{r?n(r):i({objectId:e,objectType:t})},[n,e,t,i,r]);return{isLoading:o,subscription:r,toggleSubscribed:a,isSubscribed:!!r}};export{h as a,L as b,I as u};
