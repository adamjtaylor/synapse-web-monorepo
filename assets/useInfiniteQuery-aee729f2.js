import{ai as g,aw as f,ax as d,ay as v,az as x}from"./SynapseClient-15d3bd1d.js";var b=class extends g{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:f()},t)}getOptimisticResult(e){return e.behavior=f(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){var h,n,u,o;const{state:s}=e,i=super.createResult(e,t),{isFetching:r,isRefetching:P}=i,a=r&&((n=(h=s.fetchMeta)==null?void 0:h.fetchMore)==null?void 0:n.direction)==="forward",c=r&&((o=(u=s.fetchMeta)==null?void 0:u.fetchMore)==null?void 0:o.direction)==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:d(t,s.data),hasPreviousPage:v(t,s.data),isFetchingNextPage:a,isFetchingPreviousPage:c,isRefetching:P&&!a&&!c}}};function M(e,t){return x(e,b,t)}export{M as u};
