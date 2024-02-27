import{r as Q}from"./index-76fb7be0.js";import{u as h}from"./useQueries-fbbc8307.js";import{b5 as M,h as o,m,n as i,l as f,b6 as S}from"./ApplicationSessionManager-e3b4cd5b.js";import{u as g}from"./useMutation-824d3319.js";import{u as P}from"./useInfiniteQuery-a2f9ef18.js";import"./getEndpoint-ac94413e.js";import"./OrientationBanner-a1ca5cdb.js";import"./jsx-runtime-9dc53467.js";import{i as w}from"./isEqualWith-40c9fc10.js";import{a as k}from"./isArray-5e3f9107.js";import{i as q}from"./_Map-92f6da1c.js";import{i as T,o as C,p as I,a as v}from"./pick-1a060884.js";import{g as G}from"./InfiniteQueryUtils-54ae7e6b.js";const K=(e,t)=>{if(!(k(e)||k(t))&&!(!q(e)||!q(t))&&!(!T(e,void 0)&&!T(t,void 0)))return w(C(e,a=>a===void 0),C(t,a=>a===void 0),K)};function A(e,t){return w(e,t,K)}function J(e,t){const a=new Set;for(const s of e)a.add(s.id);for(const s of t)if(s.id!=null&&!a.has(s.id))throw new Error(`Proposed schema contains a new column model with ID ${s.id} that is not in the old schema.`)}async function U(e,t,a,s){J(a,s);const n=new Map;for(const y of a)n.set(y.id,y);let r=[];for(const y of s){const c={...y};if(c.id!=null){const d=n.get(c.id);d!=null&&!A(d,c)&&delete c.id}r.push(c)}const u=(await M(e,r)).list,l=[],F=new Set;for(let y=0;y<s.length;y++){const c=s[y].id??null,d=u[y].id;c!=null&&F.add(c),F.add(d),c!=null&&c!==d?l.push({oldColumnId:c,newColumnId:d}):c==null&&l.push({oldColumnId:null,newColumnId:d})}for(const y of a){const c=y.id;F.has(c)||l.push({oldColumnId:c,newColumnId:null})}return{concreteType:"org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest",entityId:t,changes:[{concreteType:"org.sagebionetworks.repo.model.table.TableSchemaChangeRequest",entityId:t,changes:l,orderedColumnIds:u.map(y=>y.id)}]}}function E(e,t,a){return e.invalidateQueries({queryKey:t.getEntityQueryKey(a)})}function Z(e,t,a){const{accessToken:s,keyFactory:n}=o();return m({...a,queryKey:n.getEntityVersionQueryKey(e,t),queryFn:()=>i.getEntity(s,e,t==null?void 0:t.toString())})}function _(e,t){const{accessToken:a,keyFactory:s}=o(),n=Q.useMemo(()=>({queries:e.map(r=>({queryKey:s.getEntityVersionQueryKey(r.id,r.versionNumber),queryFn:()=>i.getEntity(a,r.id,r.versionNumber),options:t}))}),[a,e,s,t]);return h(n)}function j(e){const t=f(),{accessToken:a,keyFactory:s}=o();return g({mutationFn:n=>i.createEntity(n,a),onSuccess:async(n,r,u)=>{await E(t,s,n.id),t.setQueryData(s.getEntityQueryKey(n.id),n),e!=null&&e.onSuccess&&await e.onSuccess(n,r,u)}})}function H(e){const t=f(),{accessToken:a,keyFactory:s}=o();return g({...e,mutationFn:n=>i.updateEntity(n,a),onSuccess:async(n,r,u)=>{await E(t,s,n.id),t.setQueryData(s.getEntityQueryKey(n.id),n),e!=null&&e.onSuccess&&await e.onSuccess(n,r,u)}})}function ee(e){const t=f(),{accessToken:a,keyFactory:s}=o();return g({...e,mutationFn:n=>i.deleteEntity(a,n),onSuccess:async(n,r,u)=>{await E(t,s,r),e!=null&&e.onSuccess&&await e.onSuccess(n,r,u)}})}function te(e,t){const{accessToken:s,keyFactory:n}=o();return P({...t,queryKey:n.getEntityVersionsQueryKey(e),queryFn:async r=>await i.getEntityVersions(e,s,r.pageParam,200),initialPageParam:void 0,getNextPageParam:G})}function R(e){return I(e,S[e.concreteType])}function V(e){return v(e,S[e.concreteType])}function ne(e,t,a){const{accessToken:s,keyFactory:n}=o();return m({...a,queryKey:n.getEntityJsonQueryKey(e,t),queryFn:()=>i.getEntityJson(e,t,s),select:r=>{const u=R(r),l=V(r);return{entity:r,entityMetadata:u,annotations:l}}})}function se(e){const t=f(),{accessToken:a,keyFactory:s}=o();return g({...e,mutationFn:n=>{const r=n.id;return i.updateEntityJson(r,n,a)},onSuccess:async(n,r,u)=>{const l=n.id;await E(t,s,l),t.setQueryData(s.getEntityJsonQueryKey(l,!1),n),e!=null&&e.onSuccess&&await e.onSuccess(n,r,u)}})}function ae(e,t){const{accessToken:a,keyFactory:s}=o();return m({...t,queryKey:s.getEntityPathQueryKey(e),queryFn:()=>i.getEntityPath(e,a)})}function re(e,t){const{accessToken:a,keyFactory:s}=o();return m({...t,queryKey:s.getEntityPathQueryKey(e),queryFn:()=>i.getEntityACL(e,a)})}function ue(e,t){const{accessToken:a,keyFactory:s}=o();return m({...t,queryKey:s.getEntityAliasQueryKey(e),queryFn:()=>i.getEntityAlias(e,a)})}function ce(e,t,a){const{accessToken:s,keyFactory:n}=o();return m({...a,queryKey:n.getEntityEvaluationsQueryKey(e),queryFn:()=>i.getAllEntityEvaluations(e,t,s)})}function oe(e,t){const{accessToken:a,keyFactory:s}=o();return m({...t,queryKey:s.getEntityPermissionsQueryKey(e),queryFn:()=>i.getEntityPermissions(e,a)})}function ie(e){const t=f(),{accessToken:a,keyFactory:s}=o();return g({...e,mutationFn:n=>i.updateEntityACL(n,a),onSuccess:async(n,r,u)=>{await E(t,s,n.id),t.setQueryData(s.getEntityACLQueryKey(n.id),n),e!=null&&e.onSuccess&&await e.onSuccess(n,r,u)}})}function ye(e){const t=f(),{accessToken:a,keyFactory:s}=o();return g({...e,mutationFn:async n=>{const r=await U(a,n.entityId,n.originalColumnModels,n.newColumnModels);return i.updateTable(r,a)},onSuccess:async(n,r,u)=>{await E(t,s,r.entityId),e!=null&&e.onSuccess&&await e.onSuccess(n,r,u)}})}export{ye as a,ae as b,H as c,ne as d,_ as e,ce as f,ie as g,ue as h,E as i,re as j,oe as k,j as l,se as m,ee as n,te as o,Z as u};
