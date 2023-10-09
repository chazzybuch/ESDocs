"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[5486],{4137:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(i),u=o,m=c["".concat(a,".").concat(u)]||c[u]||h[u]||s;return i?r.createElement(m,n(n({ref:t},d),{},{components:i})):r.createElement(m,n({ref:t},d))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,n=new Array(s);n[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<s;p++)n[p]=i[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4485:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=i(7462),o=(i(7294),i(4137));const s={},n="Display",l={unversionedId:"room-editor/logic_props/display",id:"room-editor/logic_props/display",title:"Display",description:"A display shows an image or grid of images from a configured sprite sheet. The display shows a particular image when fed an input from a lock.",source:"@site/docs/room-editor/logic_props/display.md",sourceDirName:"room-editor/logic_props",slug:"/room-editor/logic_props/display",permalink:"/docs/room-editor/logic_props/display",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/logic_props/display.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Collider",permalink:"/docs/room-editor/logic_props/collider"},next:{title:"Empty",permalink:"/docs/room-editor/logic_props/empty"}},a={},p=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38Target Lock",id:"target-lock",level:3},{value:"\ud83d\udd38Columns",id:"columns",level:3},{value:"\ud83d\udd38Rows",id:"rows",level:3},{value:"\ud83d\udd38Padding",id:"padding",level:3},{value:"\ud83d\udd38Sprite Sheet Columns",id:"sprite-sheet-columns",level:3},{value:"\ud83d\udd38Sprite Sheet Rows",id:"sprite-sheet-rows",level:3},{value:"\ud83d\udd38Sprite Sheet",id:"sprite-sheet",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"display"},"Display"),(0,o.kt)("p",null,"A display shows an image or grid of images from a configured sprite sheet. The display shows a particular image when fed an input from a lock."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Display Selector",src:i(3343).Z,width:"1915",height:"1072"})),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"target-lock"},"\ud83d\udd38Target Lock"),(0,o.kt)("div",{className:"highlight-div"},"During play the selected lock's current inputted password will be used for the display. During edit time the display shows the password value."),(0,o.kt)("p",null,"The lock that will define what images to be shown. As the values sent to the lock changes the display changes to images based on the numbers on the lock. If 0 is sent to the lock, it will display the first image in the sprite sheet. "),(0,o.kt)("p",null,"While editing the room the Target lock's password will be used for displaying. When playing the room the Display shows the images from the actual values of the Target lock."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Display setup",src:i(712).Z,width:"1446",height:"576"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Display setup",src:i(3648).Z,width:"1610",height:"313"})),(0,o.kt)("h3",{id:"columns"},"\ud83d\udd38Columns"),(0,o.kt)("div",{className:"highlight-div"},"Amount of display columns to show."),(0,o.kt)("p",null,"The number of columns of images to be shown on the display."),(0,o.kt)("h3",{id:"rows"},"\ud83d\udd38Rows"),(0,o.kt)("div",{className:"highlight-div"},"Amount of display rows to show."),(0,o.kt)("p",null,"The number of rows of images to be shown on the display."),(0,o.kt)("h3",{id:"padding"},"\ud83d\udd38Padding"),(0,o.kt)("div",{className:"highlight-div"},"Amount of space to leave around a single display quad."),(0,o.kt)("p",null,"The amount of horizontal and vertical padding between the shown images.\nDefault is 0, 0."),(0,o.kt)("h3",{id:"sprite-sheet-columns"},"\ud83d\udd38Sprite Sheet Columns"),(0,o.kt)("div",{className:"highlight-div"},"Enter the amount of sprites the selected 'Sprite Sheet' has in one row."),(0,o.kt)("p",null,"The number of columns in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number."),(0,o.kt)("h3",{id:"sprite-sheet-rows"},"\ud83d\udd38Sprite Sheet Rows"),(0,o.kt)("div",{className:"highlight-div"},"Enter the amount of sprites the selected 'Sprite Sheet' has in one column."),(0,o.kt)("p",null,"The number of rows in the linked sprite sheet. The display will slice the images evenly from the sprite sheet based on this number."),(0,o.kt)("h3",{id:"sprite-sheet"},"\ud83d\udd38Sprite Sheet"),(0,o.kt)("div",{className:"highlight-div"},"Image that will be segmented and shown. The first segment is the top left one and it represents the number 0."),(0,o.kt)("p",null,"An image containing rows / columns of images to be shown. The sprites are indexed from top-left starting at 0, going row by row."))}h.isMDXComponent=!0},3343:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/Display-Selector-43947b95723087eff355952336b5e156.png"},3648:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/display_lock-c0e1013368f31356e292c84128cbb394.gif"},712:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/display_setup-a89b8a820521e37ecdc500490f61c733.png"}}]);