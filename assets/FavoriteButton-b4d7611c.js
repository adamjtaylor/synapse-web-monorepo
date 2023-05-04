import{j as t}from"./jsx-runtime-ad672792.js";import{I as f}from"./IconSvg-e02ad7d3.js";import{af as u}from"./index-292d735c.js";import"./index-f1f749bf.js";import{b as g,c as h,d as y}from"./useFavorites-26a380c4.js";import{C as F}from"./ConditionalWrapper-2492e95a.js";import{S as I}from"./Skeleton-fac1f03c.js";import{a as x}from"./Clear-4b047352.js";import{I as _}from"./IconButton-a480e7a2.js";function s(r){const{entityId:e}=r,{accessToken:d}=u(),a=!!d,{isFavorite:o,isLoading:n}=g(e),{mutate:p,isLoading:c}=h(),{mutate:m,isLoading:l}=y(),v=n||c||l||!a;let i="Add to Favorites";return a?o&&(i="Remove from Favorites"):i="Sign in to add this to your favorites",t(F,{condition:n,wrapper:I,children:t(x,{title:i,placement:"top",children:t("span",{children:t(_,{size:"small",disabled:v,onClick:()=>{o?m(e):p(e)},sx:{padding:"2px"},children:t(f,{icon:o?"fav":"favOutline",sx:{color:"tertiary.main",width:"21px",height:"21px"},wrap:!1})})})})})}try{s.displayName="FavoriteButton",s.__docgenInfo={description:`Renders a button that indicates if an entity is favorited by the logged-in user. When clicked, the entity is
added to/removed from their favorites`,displayName:"FavoriteButton",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}}}catch{}export{s as F};
//# sourceMappingURL=FavoriteButton-b4d7611c.js.map
