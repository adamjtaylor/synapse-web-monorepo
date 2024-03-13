import{_ as v}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import{_ as b}from"./createTheme-BmyBSwiD.js";import{c as f,u as g}from"./ThemeProvider-CGmafKay.js";import{R as a,r as D}from"./index-CBqU2yxZ.js";import{c as s}from"./createWithBsPrefix-CMJWVigS.js";import{j as u}from"./jsx-runtime-CKrituN3.js";import{a as E}from"./UserBadge-_T0G9b7c.js";import{f as R}from"./DateFormatter-BJvnC5k4.js";import{d as $}from"./dayjs.min-BaCjP-cF.js";const N=function(e){return a.forwardRef(function(t,d){return a.createElement("div",v({},t,{ref:d,className:f(t.className,e)}))})};var P=a.createContext(null);P.displayName="CardContext";const H=P;var O=["bsPrefix","className","variant","as"],S={variant:null},x=a.forwardRef(function(e,t){var d=e.bsPrefix,l=e.className,o=e.variant,n=e.as,c=n===void 0?"img":n,m=b(e,O),i=g(d,"card-img");return a.createElement(c,v({ref:t,className:f(o?i+"-"+o:i,l)},m))});x.displayName="CardImg";x.defaultProps=S;const T=x;var U=["bsPrefix","className","bg","text","border","body","children","as"],_=N("h5"),k=N("h6"),h=s("card-body"),w=s("card-title",{Component:_}),L=s("card-subtitle",{Component:k}),W=s("card-link",{Component:"a"}),q=s("card-text",{Component:"p"}),A=s("card-header"),F=s("card-footer"),V=s("card-img-overlay"),M={body:!1},r=a.forwardRef(function(e,t){var d=e.bsPrefix,l=e.className,o=e.bg,n=e.text,c=e.border,m=e.body,i=e.children,C=e.as,I=C===void 0?"div":C,B=b(e,U),p=g(d,"card"),j=D.useMemo(function(){return{cardHeaderBsPrefix:p+"-header"}},[p]);return a.createElement(H.Provider,{value:j},a.createElement(I,v({ref:t},B,{className:f(l,p,o&&"bg-"+o,n&&"text-"+n,c&&"border-"+c)}),m?a.createElement(h,null,i):i))});r.displayName="Card";r.defaultProps=M;r.Img=T;r.Title=w;r.Subtitle=L;r.Body=h;r.Link=W;r.Text=q;r.Header=A;r.Footer=F;r.ImgOverlay=V;const re=r;function y(e){const{userId:t,date:d}=e;return u.jsxs("div",{className:"created-on",children:[u.jsxs("span",{children:["Created on ",R($(d))," by "]}),u.jsx(E,{userId:t})]})}try{y.displayName="CreatedOnByUserDiv",y.__docgenInfo={description:"",displayName:"CreatedOnByUserDiv",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"Date"}}}}}catch{}export{re as C,y as a};
