import{B as s}from"./SynapseConstants-0078d114.js";import{i}from"./_Map-92f6da1c.js";import{i as y}from"./isNumber-e963e862.js";function o(t,r,u){return t.invalidateQueries({queryKey:r.getEntityQueryKey(u)})}function q(t){return[{queryKey:t.getAllEntityActionsRequiredQueryKey()},{queryKey:t.getDownloadListBaseQueryKey()},{queryKey:t.getAllTableQueryResultsKey(),predicate:r=>{const u=r.queryKey;for(const e of u)if(i(e)&&"tableQueryBundleRequest"in e&&i(e.tableQueryBundleRequest)&&"partMask"in e.tableQueryBundleRequest&&y(e.tableQueryBundleRequest.partMask)&&e.tableQueryBundleRequest.partMask&s)return!0;return!1}}]}export{q as g,o as i};
