import{j as r,a as i}from"./jsx-runtime-ad672792.js";import{r as a}from"./index-f1f749bf.js";import{S as L}from"./Sort-c508847f.js";import{D as f}from"./EntityChildren-7cd71d6e.js";import{af as P,aP as O,b2 as b,bV as k}from"./index-292d735c.js";import{S as A}from"./LoadingScreen-d6e4be89.js";import{a as R,d as _}from"./useFavorites-26a380c4.js";import{I as y}from"./IconSvg-e02ad7d3.js";import{P as j}from"./getEndpoint-ac94413e.js";import{E as G}from"./EntityIcon-80ae1a00.js";import{F as $}from"./Form-4a4de212.js";import{a as z}from"./Clear-4b047352.js";import{T as H}from"./Table-6b0350f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./SvgIcon-19b553ad.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-be3878cf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./Box-748c1b2e.js";import"./extendSxProp-94a0a81d.js";import"./Button-251d6b7d.js";import"./ButtonBase-9ed4bb8f.js";import"./emotion-react.browser.esm-605ba919.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./TransitionGroupContext-a2b6e27b.js";import"./useForkRef-dd8a6e5c.js";import"./index-96c5f47c.js";import"./SynapseConstants-42953824.js";import"./Button-7d415009.js";import"./useTheme-5ec55fc4.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./isArray-5e3f9107.js";import"./contains-e27fcc5c.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./Typography-25de91b6.js";import"./useMutation-7b33115e.js";import"./mutation-2649c68f.js";import"./useInfiniteQuery-c5238529.js";import"./infiniteQueryBehavior-167fe5ef.js";import"./FormLabel-897d2462.js";import"./Col-1f1afacc.js";import"./FormGroup-08e5002f.js";import"./isHostComponent-fa76b8d9.js";function U(){const{accessToken:h}=P(),[t,u]=a.useState(void 0),[s,g]=a.useState(""),[p,N]=a.useState(void 0),[v,c]=a.useState(),{data:l,isFetching:x,isError:C,error:d}=R();a.useEffect(()=>{C&&d&&c(d)},[C,d]),a.useEffect(()=>{c(h?void 0:new Error("Please sign in to access your favorites."))},[h]);const F=(e,o)=>{const n=e.toLowerCase();return o.filter(I=>I.name.toLowerCase().indexOf(n)>=0)};a.useEffect(()=>{if(l){let e=[...l.results];t&&e.sort((o,n)=>t.direction=="DESC"?o[t.field].toLowerCase()>n[t.field].toLowerCase()?1:-1:o[t.field].toLowerCase()<n[t.field].toLowerCase()?1:-1),s&&(e=F(s,e)),N(e)}},[l,s,t]);const{mutate:w}=_(),S=e=>u&&r(L,{role:"button",style:{height:"20px"},active:(t==null?void 0:t.field)===e,direction:(t==null?void 0:t.field)===e?t.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(t==null?void 0:t.field)?t.direction==="ASC"?"DESC":"ASC":"DESC";u({field:e,direction:o})}});return v?r(O,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[r(y,{icon:"searchOutlined"}),r($.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:e=>{g(e.target.value)}})]}),p&&p.length>0&&r("div",{className:"bootstrap-4-backport",children:i(H,{striped:!0,responsive:!0,className:"FavoritesTable",children:[r("thead",{children:i("tr",{children:[r("th",{}),i("th",{children:["Name",r("span",{children:S("name")})]}),i("th",{children:["Type",r("span",{children:S("type")})]})]})}),r("tbody",{children:p.map(e=>{if(e){const o=b(e.type);return i("tr",{children:[r("td",{children:r(z,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:r("a",{onClick:()=>{w(e.id)},className:"ignoreLink",children:r(y,{icon:"fav",sx:{color:"#EDC766"}})})})}),r("td",{children:r("a",{rel:"noopener noreferrer",href:`${j.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[r(G,{type:o,style:{marginRight:"5px"}}),k(o)]})]},e.id)}else return!1})})]})}),x&&r("div",{className:"placeholder",children:r(A,{size:30})})]})}const ze={title:"Synapse/FavoritesPage",component:U},m={};var E,T,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const He=["Demo"];export{m as Demo,He as __namedExportsOrder,ze as default};
//# sourceMappingURL=FavoritesPage.stories-ab42bf42.js.map
