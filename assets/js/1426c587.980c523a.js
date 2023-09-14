"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[2634],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return o?i.createElement(m,r(r({ref:t},u),{},{components:o})):i.createElement(m,r({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<n;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4279:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=o(7462),a=(o(7294),o(4137));const n={},r="Slot",l={unversionedId:"room-editor/logic_props/slot",id:"room-editor/logic_props/slot",title:"Slot",description:'An object that represents a "keyhole". any defined "key" can unlock it. Anything can be a slot.',source:"@site/docs/room-editor/logic_props/slot.md",sourceDirName:"room-editor/logic_props",slug:"/room-editor/logic_props/slot",permalink:"/docs/room-editor/logic_props/slot",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/logic_props/slot.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Roulette",permalink:"/docs/room-editor/logic_props/roulette"},next:{title:"Sound",permalink:"/docs/room-editor/logic_props/sound"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38Keys",id:"keys",level:3},{value:"\ud83d\udd38Reject keys",id:"reject-keys",level:3},{value:"\ud83d\udd38Output value",id:"output-value",level:3},{value:"\ud83d\udd38Unlock success",id:"unlock-success",level:3},{value:"\ud83d\udd38Unlock success key",id:"unlock-success-key",level:3},{value:"\ud83d\udd38Unlock failed key",id:"unlock-failed-key",level:3},{value:"\ud83d\udd38Animation type",id:"animation-type",level:3},{value:"\ud83d\udd38Turn axis",id:"turn-axis",level:3},{value:"\ud83d\udd38On place",id:"on-place",level:3},{value:"\ud83d\udd38On remove",id:"on-remove",level:3},{value:"\ud83d\udca1Tips",id:"tips",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slot"},"Slot"),(0,a.kt)("p",null,'An object that represents a "keyhole". any defined "key" can unlock it. Anything can be a slot.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Slot Selector",src:o(8604).Z,width:"1914",height:"1077"})),(0,a.kt)("p",null,'Slots get triggered if you place the correct item in them. Every traditional lock with a key will have to have a slot in place. Remember if you make a door "lock", to parent the slot to the door, so that it will move with it when the door opens. Else you end up with floating keys!\nIt can only be occupied by one item at a time.'),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"keys"},"\ud83d\udd38Keys"),(0,a.kt)("div",{className:"highlight-div"},"Here you add each item that will be accepted as the correct key for this slot. Everything can be a key, not just actual key shaped items. Just make sure to not accidentally make your keys static. If you want to have an animated pickable item be a key, you need to assign it as a key BEFORE turning it into an animation. Then it works, even if animated objects can not be added as keys normally."),(0,a.kt)("h3",{id:"reject-keys"},"\ud83d\udd38Reject keys"),(0,a.kt)("div",{className:"highlight-div"},"Items you add here will be accepted into the slot, but they will not trigger the slot to give out a signal."),(0,a.kt)("h3",{id:"output-value"},"\ud83d\udd38Output value"),(0,a.kt)("div",{className:"highlight-div"},"Numerical value that gets send to a lock when the slot gets activated."),(0,a.kt)("h3",{id:"unlock-success"},"\ud83d\udd38Unlock success"),(0,a.kt)("div",{className:"highlight-div"},"Determines if the slot stays usable after being activated once."),(0,a.kt)("h3",{id:"unlock-success-key"},"\ud83d\udd38Unlock success key"),(0,a.kt)("div",{className:"highlight-div"},"Decides what happens with the correct key after it activated the slot:",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Merge")," means that it will become a static part of the slot, you can not pick it up anymore."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Parent")," means that the key will stay in the slot and move with it, but it can be picked up again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Eject")," will put the key right back into the player inventory the activation process/animation.")),(0,a.kt)("p",null,"If you have several single use keys in your room, it is advisable to simply merge them to the slot after success to avoid inventory clutter or confusion.")),(0,a.kt)("h3",{id:"unlock-failed-key"},"\ud83d\udd38Unlock failed key"),(0,a.kt)("div",{className:"highlight-div"},"The same as with success key. Make sure to not accidentally make false keys merge, else it will prevent the slot from ever being opened."),(0,a.kt)("h3",{id:"animation-type"},"\ud83d\udd38Animation type"),(0,a.kt)("div",{className:"highlight-div"},"Here you can decide if you want your item to spin like a key, or to do nothing like a properly placed statue or book. Turn Duration and Turn Count determine the turning animation further. You can also make the turn be less than one! This can create lever-like effects sometimes or other interesting stuff. I use less-than-one turn effects in combination with further animation, so that for example a writing pen has a more complex animation consisting of two different movements."),(0,a.kt)("h3",{id:"turn-axis"},"\ud83d\udd38Turn axis"),(0,a.kt)("div",{className:"highlight-div"},"Will determine how your key turns. Make sure to test this! Because the default axis makes some of the actual key assets spin sideways! And that looks quite silly."),(0,a.kt)("h3",{id:"on-place"},"\ud83d\udd38On place"),(0,a.kt)("div",{className:"highlight-div"},"If the correct key is placed in the slot, the slot will activate/send a 1 to the items you link here."),(0,a.kt)("h3",{id:"on-remove"},"\ud83d\udd38On remove"),(0,a.kt)("div",{className:"highlight-div"},"If the correct key or an incorrect key is removed from the slot, the slot will activate/send a 1 to the items you link here."),(0,a.kt)("h2",{id:"tips"},"\ud83d\udca1Tips"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Animated items cannot be assigned as keys. Assign them to be keys first, then animate them. This way the key properties will carry over and be retained when it becomes a pickable animation.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Some items can fall into slots if placed or dropped above them, others will fall through slots. To make items fall into slots that normally wouldn't you can give them a slotable parent and hide that inside the actual object. It will lend its slotableness to the child.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When a slot rejects an incorrect key the slot will send a 0 value to whatever it is connected to")))}p.isMDXComponent=!0},8604:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/Slot-Selector-ad8fc4c978a563873dab4346a73691c1.png"}}]);