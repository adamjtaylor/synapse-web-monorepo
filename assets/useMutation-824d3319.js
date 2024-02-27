var C=(r,t,s)=>{if(!t.has(r))throw TypeError("Cannot "+s)};var e=(r,t,s)=>(C(r,t,"read from private field"),s?s.call(r):t.get(r)),l=(r,t,s)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,s)},d=(r,t,s,i)=>(C(r,t,"write to private field"),i?i.call(r,s):t.set(r,s),s);var p=(r,t,s)=>(C(r,t,"access private method"),s);import{r as f}from"./index-76fb7be0.js";import{af as U,as as k,at as w,au as L,ag as R,l as j,av as q}from"./ApplicationSessionManager-e3b4cd5b.js";var u,n,o,h,m,M,v,E,K,A=(K=class extends U{constructor(t,s){super();l(this,m);l(this,v);l(this,u,void 0);l(this,n,void 0);l(this,o,void 0);l(this,h,void 0);d(this,u,t),this.setOptions(s),this.bindMethods(),p(this,m,M).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const s=this.options;this.options=e(this,u).defaultMutationOptions(t),k(this.options,s)||e(this,u).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,o),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&w(s.mutationKey)!==w(this.options.mutationKey)?this.reset():(i=e(this,o))==null||i.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=e(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){p(this,m,M).call(this),p(this,v,E).call(this,t)}getCurrentResult(){return e(this,n)}reset(){var t;(t=e(this,o))==null||t.removeObserver(this),d(this,o,void 0),p(this,m,M).call(this),p(this,v,E).call(this)}mutate(t,s){var i;return d(this,h,s),(i=e(this,o))==null||i.removeObserver(this),d(this,o,e(this,u).getMutationCache().build(e(this,u),this.options)),e(this,o).addObserver(this),e(this,o).execute(t)}},u=new WeakMap,n=new WeakMap,o=new WeakMap,h=new WeakMap,m=new WeakSet,M=function(){var s;const t=((s=e(this,o))==null?void 0:s.state)??L();d(this,n,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},v=new WeakSet,E=function(t){R.batch(()=>{var s,i,a,y,c,O,S,x;if(e(this,h)&&this.hasListeners()){const b=e(this,n).variables,g=e(this,n).context;(t==null?void 0:t.type)==="success"?((i=(s=e(this,h)).onSuccess)==null||i.call(s,t.data,b,g),(y=(a=e(this,h)).onSettled)==null||y.call(a,t.data,null,b,g)):(t==null?void 0:t.type)==="error"&&((O=(c=e(this,h)).onError)==null||O.call(c,t.error,b,g),(x=(S=e(this,h)).onSettled)==null||x.call(S,void 0,t.error,b,g))}this.listeners.forEach(b=>{b(e(this,n))})})},K);function T(r,t){const s=j(t),[i]=f.useState(()=>new A(s,r));f.useEffect(()=>{i.setOptions(r)},[i,r]);const a=f.useSyncExternalStore(f.useCallback(c=>i.subscribe(R.batchCalls(c)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),y=f.useCallback((c,O)=>{i.mutate(c,O).catch(D)},[i]);if(a.error&&q(i.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:y,mutateAsync:a.mutate}}function D(){}export{T as u};
