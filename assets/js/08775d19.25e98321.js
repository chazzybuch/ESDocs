"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[7205],{4137:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return t?o.createElement(f,a(a({ref:r},p),{},{components:t})):o.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,a=new Array(n);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<n;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7401:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=t(7462),i=(t(7294),t(4137));const n={},a="Mirror",l={unversionedId:"room-editor/logic_props/mirror",id:"room-editor/logic_props/mirror",title:"Mirror",description:"A mirror can be placed like a one-sided plane and will reflect everything visible in the room, just as you would expect a normal mirror to do.",source:"@site/docs/room-editor/logic_props/mirror.md",sourceDirName:"room-editor/logic_props",slug:"/room-editor/logic_props/mirror",permalink:"/docs/room-editor/logic_props/mirror",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/logic_props/mirror.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Lua Scripting",permalink:"/docs/room-editor/lua-scripting"},next:{title:"Obstacle",permalink:"/docs/room-editor/logic_props/obstacle"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"Example",id:"example",level:2},{value:"\ud83d\udca1Tips",id:"tips",level:2},{value:"Limitations",id:"limitations",level:3},{value:"Helpful Tips",id:"helpful-tips",level:2}],p={toc:c},m="wrapper";function u(e){let{components:r,...n}=e;return(0,i.kt)(m,(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mirror"},"Mirror"),(0,i.kt)("p",null,"A mirror can be placed like a one-sided plane and will reflect everything visible in the room, just as you would expect a normal mirror to do.\nIt can be scaled to any size, and works in any direction (e.g. on the floor/ceiling), but there are some limitations."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mirror Selector",src:t(8639).Z,width:"1911",height:"1076"})),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:""}),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h2",{id:"tips"},"\ud83d\udca1Tips"),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Performance will degrade quickly if you have too many mirror or if your mirrors are too large in scale. Try to stick with one regular-scale mirror per room and disable any mirrors outside the player's field of vision."),(0,i.kt)("li",{parentName:"ul"},"Mirror reflections become very pixellated wen viewed up close."),(0,i.kt)("li",{parentName:"ul"},"A mirror does not reflect the reflection of other mirrors."),(0,i.kt)("li",{parentName:"ul"},"A mirror does not reflect items of clothing worn by the player."),(0,i.kt)("li",{parentName:"ul"},"A mirror does not reflect water at the moment (known bug, should be fixed later).")),(0,i.kt)("h2",{id:"helpful-tips"},"Helpful Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can paint on a mirror, but that will make it non-opaque. If you need a semi-transparent layer to add design, place a transparent in front of the mirror instead."),(0,i.kt)("li",{parentName:"ul"},"Using mirrors in dark rooms is not very effective, they work best in well-lit rooms."),(0,i.kt)("li",{parentName:"ul"},"Using a light source to illuminate a mirror can make the reflection and contrast clearer, but will also make it shinier, especially the surface structure. The lighting should be indirect and the light source out of the mirror's reflection range. Try placing a point light well above the mirror, pointing down.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(646).Z,width:"1024",height:"649"}),"\na ",(0,i.kt)("strong",{parentName:"p"},"very")," vintage mirror made with a transparent overlay"))}u.isMDXComponent=!0},8639:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/Mirror-Selector-b761ab83b7ccd7e92ab6417bc050d628.png"},646:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/oldmirror-6ca1d09d7fac2a7afb5b44816ad5c1f1.png"}}]);