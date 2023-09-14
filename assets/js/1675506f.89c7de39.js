"use strict";(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[979],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(o),h=i,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||s;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,a=new Array(s);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,a[1]=r;for(var d=2;d<s;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3118:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=o(7462),i=(o(7294),o(4137));const s={},a="Sound",r={unversionedId:"room-editor/logic_props/sound",id:"room-editor/logic_props/sound",title:"Sound",description:"The game allows for the adding of custom sounds. Sounds get activated with an activation input from a button, a trigger field, lock or a slot. They can be activated by animations.",source:"@site/docs/room-editor/logic_props/sound.md",sourceDirName:"room-editor/logic_props",slug:"/room-editor/logic_props/sound",permalink:"/docs/room-editor/logic_props/sound",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/room-editor/logic_props/sound.md",tags:[],version:"current",frontMatter:{},sidebar:"roomEditorSidebar",previous:{title:"Slot",permalink:"/docs/room-editor/logic_props/slot"},next:{title:"Spawn Point",permalink:"/docs/room-editor/logic_props/spawn_point"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"\ud83d\udd38Asset",id:"asset",level:3},{value:"\ud83d\udd38Is Music",id:"is-music",level:3},{value:"\ud83d\udd38Is Loopable",id:"is-loopable",level:3},{value:"\ud83d\udd38Is 2D",id:"is-2d",level:3},{value:"\ud83d\udd38Volume Scale",id:"volume-scale",level:3},{value:"\ud83d\udd38Active On Start",id:"active-on-start",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...s}=e;return(0,i.kt)(c,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sound"},"Sound"),(0,i.kt)("p",null,"The game allows for the adding of custom sounds. Sounds get activated with an activation input from a button, a trigger field, lock or a slot. They can be activated by animations."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sound Selector",src:o(5698).Z,width:"1910",height:"1077"})),(0,i.kt)("p",null,"The Sound Logic prop is the only way to add sounds to your rooms. Choose from a preset library or add your own. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Room Editor supports ",(0,i.kt)("i",null,".mp3"),", ",(0,i.kt)("i",null,".ogg"),", ",(0,i.kt)("i",null,".wav")," and ",(0,i.kt)("i",null,".aiff")," files. The use of ",(0,i.kt)("i",null,".mp3")," or ",(0,i.kt)("i",null,".ogg")," is recommended, since they are compressed (contrary to ",(0,i.kt)("i",null,".wav"),") and will help to keep the file-size of the room small.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If some of your puzzles rely on sounds, notify the player at the start of the room or when they get to that puzzle so they know they should turn the sounds on! It's also good practice to offer visual alternatives for all sound puzzles.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A good free audio editing tool is ",(0,i.kt)("a",{parentName:"p",href:"https://www.audacityteam.org"},"Audacity"),".")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"asset"},"\ud83d\udd38Asset"),(0,i.kt)("div",{className:"highlight-div"},"Select one of the preset sounds or a custom sound from the room folder."),(0,i.kt)("p",null,"Clicking this option will open a sound selection panel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sound Selection Panel",src:o(3817).Z,width:"519",height:"578"})," "),(0,i.kt)("p",null,"Here you can preview and choose a sound from the 'Presets' tab or add you own custom sounds. Choosing a sound preset from the game library will result in some of the settings being disabled by default. If you want to change some of those settings you will have to import your own custom sound."),(0,i.kt)("p",null,"To add custom sounds open your UGC Room folder (",(0,i.kt)("img",{alt:"Open UGC Room Folder",src:o(3330).Z,width:"37",height:"37"}),") and place your custom sound files in that folder. The Room Editor supports ",(0,i.kt)("i",null,".mp3"),", ",(0,i.kt)("i",null,".wav"),", ",(0,i.kt)("i",null,".ogg")," and ",(0,i.kt)("i",null,".aiff")," files. Choosing a custom sound file as a source for the Sound Logic prop will result in more settings becoming available."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each preset sound comes with it's own sound settings.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you cannot hear a sound you imported, make sure you don't have your in-game music or sounds turned off!")),(0,i.kt)("h3",{id:"is-music"},"\ud83d\udd38Is Music"),(0,i.kt)("div",{className:"highlight-div"},"When checked, the sound will be played on the music track. Only one 'Is Music' sound can play at a time."),(0,i.kt)("p",null,"If checked, the sound is marked as music and is played on the music bus. Music sounds can only play one at a time, so triggering another Sound prop marked as music will stop the previous one and play the last triggered one. Music sounds are looped."),(0,i.kt)("p",null,"If not checked, the sound is marked as a regular sound and is played on the effects bus. These sounds can be played over each other and the music bus, and more sound settings are available for them."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some people have turned the music in their games off or low, so important hint sounds or cues should not be tagged as music.")),(0,i.kt)("h3",{id:"is-loopable"},"\ud83d\udd38Is Loopable"),(0,i.kt)("div",{className:"highlight-div"},"When checked, the sound will replay itself. Turn the sound off by reactivating the sound prop."),(0,i.kt)("p",null,"If checked, the sound will replay itself indefinitely. Activating this sound again will stop the sound completely."),(0,i.kt)("p",null,"If not checked, the sound will play only once. Activating a non looping sound twice at the same time will result in the sound playing twice at the same time."),(0,i.kt)("h3",{id:"is-2d"},"\ud83d\udd38Is 2D"),(0,i.kt)("div",{className:"highlight-div"},"When checked, the sound is played directly in the audio-output device. When not checked, the sound is directional."),(0,i.kt)("p",null,"If checked, the sound will be heard uniformly across the entire room."),(0,i.kt)("p",null,"If not checked, the sound will come from the position of the Sound Logic prop."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Changing the position of the prop will only change the position of the sound if the sound is played again.")),(0,i.kt)("h3",{id:"volume-scale"},"\ud83d\udd38Volume Scale"),(0,i.kt)("div",{className:"highlight-div"},"Determines the volume of the sound."),(0,i.kt)("p",null,"Change the value to change the sound volume. Default is set to 1."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The higher the Volume Scale value, the more the background music gets muted while the non-music sound asset gets played.")),(0,i.kt)("h3",{id:"active-on-start"},"\ud83d\udd38Active On Start"),(0,i.kt)("div",{className:"highlight-div"},"When checked, this sound is activated as soon as the player starts the room. Only one 'Is Music' can play at the start."),(0,i.kt)("p",null,"If checked, the Sound Logic prop will be triggered as soon as the game begins."),(0,i.kt)("p",null,"If not checked, the prop will remain silent until triggered by e.g. an animation or a button."))}p.isMDXComponent=!0},5698:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Sound-Selector-871299ee1962dcfb190b500379a265e9.png"},3330:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJESURBVFhH7ZbPi6lRGMe/GE2iLGQ7pZSthaFG/A+UlOUs5l8QWVnY+BMkS0lNTbOY7GRFLGQ3NLEgG4TJ74zbczr3Xvc63nmbed2ZWz4lnueo99Ppe57zqjwezw7fDDX//lacpeRylpLLWUouknPq6uoKJpOJV4dsNhs0m02s12veUQahlNFohN/vh8PhgE6n491DttstGo0G0uk05vM5734eoZTdbkcikYDBYOCd4ywWCzw8PCCVSrGdUwJhpi4vL2UJEbSTgUAAwWAQarUyERXulMvlQjKZ5JV8KF9SvL6+olgs4v7+HhqNhncPUVRKDrvdDuFwGOVymXcO+ecjQaVSsUMkxZfMKbPZzH+J+X+GpyhTo9EIz8/PyOVyGI/HvPsxaIz0+31eHSJLqtPpIB6PQ6/Xs7WLiwu+ogw032gAv729sfpdqdlshlgshslkgmg0CovFInmcPwLdDHd3d2i1Wqx+N1OFQgH1eh2RSARWq1VxIYKG7n4kJKW63S6bJ9fX10zoVDw+PmI4HPJKQopu/kqlgpeXF5Ynmi+nYDqdolar/coTIZSiP5BMJpPB7e0ttFotX1EWCjjFg66efYRSdFxLpRK8Xi9ubm5OkiOCniO6boRSvV4P+XweTqeTvVudAjrVT09PqFarvPMboRRdmqFQCG63W7HXkb+hAZrNZnn1J0efuFqtsFwuWeCV/NAODQYDdinvh3sf4fD8ic/ng81m45UytNttFo1jQoSk1FdxmsB8krOUXM5ScjlLyQP4AXouKop8QXjTAAAAAElFTkSuQmCC"},3817:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/soundPanel-6ece9c2122ee6e286548f0fac40ec48a.png"}}]);