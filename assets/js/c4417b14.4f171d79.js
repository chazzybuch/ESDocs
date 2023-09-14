"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[6789],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=n,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?o.createElement(d,a(a({ref:t},c),{},{components:r})):o.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(4137));const i={},a="Roulette",l={unversionedId:"room-editor/logic_props/roulette",id:"room-editor/logic_props/roulette",title:"Roulette",description:"Roulette Selector",source:"@site/docs/room-editor/logic_props/roulette.md",sourceDirName:"room-editor/logic_props",slug:"/room-editor/logic_props/roulette",permalink:"/docs/room-editor/logic_props/roulette",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/logic_props/roulette.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Puzzle",permalink:"/docs/room-editor/logic_props/puzzle"},next:{title:"Slot",permalink:"/docs/room-editor/logic_props/slot"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38Remove Target On Trigger",id:"remove-target-on-trigger",level:3},{value:"\ud83d\udd38Targets",id:"targets",level:3},{value:"\ud83d\udd38Testing Target",id:"testing-target",level:3}],c={toc:p},g="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(g,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"roulette"},"Roulette"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Roulette Selector",src:r(1754).Z,width:"1912",height:"1077"}),"\nThe main purpose of the Roulette logic prop is to add randomness to your custom room.\nIt is a prop you can target with a button, animation, slot and other. When the Roulette prop is triggered one of the items from the ",(0,n.kt)("a",{parentName:"p",href:"#targets"},"Targets")," list is chosen at random and triggered."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In Versus mode all Roulette random selections are synced, so all players are playing the same version to keep it fair.")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"remove-target-on-trigger"},"\ud83d\udd38Remove Target On Trigger"),(0,n.kt)("div",{className:"highlight-div"},"Determines whether each target can be triggered multiple times."),(0,n.kt)("p",null,"When this checkmark is ",(0,n.kt)("em",{parentName:"p"},"checked"),", each time you trigger this Roulette prop the random target selected will be triggered and then removed from the possible list of targets. So the next time this same Roulette prop is triggered the target triggered previously will not be triggered again.\nThis ensures each target can only be triggered once. If you trigger this Roulette prop more times than there are targets in the list all the targets will be triggered once and all subsequent triggers will be ignored."),(0,n.kt)("p",null,"When this checkmark is ",(0,n.kt)("em",{parentName:"p"},"not checked"),", every target can be triggered multiple times. It is also possible that the same target will be triggered multiple times in a row."),(0,n.kt)("h3",{id:"targets"},"\ud83d\udd38Targets"),(0,n.kt)("div",{className:"highlight-div"},"A list of targets that the roulette will choose from randomly."),(0,n.kt)("p",null,"Press the '+' button to add new targets from the scene, e.g. an animation behaviour. "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Locks cannot be targeted but you can target an Empty logic prop with an Animation behaviour that is connected to a lock.")),(0,n.kt)("h3",{id:"testing-target"},"\ud83d\udd38Testing Target"),(0,n.kt)("div",{className:"highlight-div"},"Determines which one of the targets you want the Roulette prop to always trigger. Used only for testing purposes."),(0,n.kt)("p",null,"This property is only shown if you have at least one item in the ",(0,n.kt)("a",{parentName:"p",href:"#targets"},"Targets")," list."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Testing target is only active while in the Room Editor.")))}u.isMDXComponent=!0},1754:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Roulette-Selector-be4b356b6b97e08127be4397b0e5d904.png"}}]);