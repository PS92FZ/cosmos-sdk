"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[1868],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,k=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},o="BeginBlocker and EndBlocker",l={unversionedId:"building-modules/beginblock-endblock",id:"building-modules/beginblock-endblock",title:"BeginBlocker and EndBlocker",description:"BeginBlocker and EndBlocker are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the BeginBlock and EndBlock ABCI messages are received from the underlying consensus engine.",source:"@site/docs/building-modules/05-beginblock-endblock.md",sourceDirName:"building-modules",slug:"/building-modules/beginblock-endblock",permalink:"/main/building-modules/beginblock-endblock",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Query Services",permalink:"/main/building-modules/query-services"},next:{title:"Keepers",permalink:"/main/building-modules/keeper"}},d={},p=[{value:"BeginBlocker and EndBlocker",id:"beginblocker-and-endblocker-1",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"beginblocker-and-endblocker"},"BeginBlocker and EndBlocker"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the ",(0,r.kt)("a",{parentName:"p",href:"/main/core/baseapp#beginblock"},(0,r.kt)("inlineCode",{parentName:"a"},"BeginBlock"))," and ",(0,r.kt)("a",{parentName:"p",href:"/main/core/baseapp#endblock"},(0,r.kt)("inlineCode",{parentName:"a"},"EndBlock"))," ABCI messages are received from the underlying consensus engine.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/building-modules/module-manager"},"Module Manager")))),(0,r.kt)("h2",{id:"beginblocker-and-endblocker-1"},"BeginBlocker and EndBlocker"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," are a way for module developers to add automatic execution of logic to their module. This is a powerful tool that should be used carefully, as complex automatic functions can slow down or even halt the chain."),(0,r.kt)("p",null,"When needed, ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," are implemented as part of the ",(0,r.kt)("a",{parentName:"p",href:"/main/building-modules/module-manager#appmodule"},(0,r.kt)("inlineCode",{parentName:"a"},"AppModule")," interface"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlock")," methods of the interface implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"module.go")," generally defer to ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," methods respectively, which are usually implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"abci.go"),"."),(0,r.kt)("p",null,"The actual implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"abci.go")," are very similar to that of a ",(0,r.kt)("a",{parentName:"p",href:"/main/building-modules/msg-services"},(0,r.kt)("inlineCode",{parentName:"a"},"Msg")," service"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They generally use the ",(0,r.kt)("a",{parentName:"li",href:"/main/building-modules/keeper"},(0,r.kt)("inlineCode",{parentName:"a"},"keeper"))," and ",(0,r.kt)("a",{parentName:"li",href:"/main/core/context"},(0,r.kt)("inlineCode",{parentName:"a"},"ctx"))," to retrieve information about the latest state."),(0,r.kt)("li",{parentName:"ul"},"If needed, they use the ",(0,r.kt)("inlineCode",{parentName:"li"},"keeper")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx")," to trigger state-transitions."),(0,r.kt)("li",{parentName:"ul"},"If needed, they can emit ",(0,r.kt)("a",{parentName:"li",href:"/main/core/events"},(0,r.kt)("inlineCode",{parentName:"a"},"events"))," via the ",(0,r.kt)("inlineCode",{parentName:"li"},"ctx"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"EventManager"),".")),(0,r.kt)("p",null,"A specificity of the ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," is that it can return validator updates to the underlying consensus engine in the form of an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/abci/abci.html#validatorupdate"},(0,r.kt)("inlineCode",{parentName:"a"},"[]abci.ValidatorUpdates")),". This is the preferred way to implement custom validator changes."),(0,r.kt)("p",null,"It is possible for developers to define the order of execution between the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," functions of each of their application's modules via the module's manager ",(0,r.kt)("inlineCode",{parentName:"p"},"SetOrderBeginBlocker"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"SetOrderEndBlocker")," methods. For more on the module manager, click ",(0,r.kt)("a",{parentName:"p",href:"/main/building-modules/module-manager#manager"},"here"),"."),(0,r.kt)("p",null,"See an example implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"distribution")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/distribution/abci.go#L14-L38\n")),(0,r.kt)("p",null,"and an example implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlocker")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"staking")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/staking/abci.go#L22-L27\n")))}m.isMDXComponent=!0}}]);