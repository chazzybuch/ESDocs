/*! For license information please see 7b16618b.b2d72bc9.js.LICENSE.txt */
(self.webpackChunkes_docs=self.webpackChunkes_docs||[]).push([[2506],{4137:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1789:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(7462),i=r(7294),o=r(4137),l=r(4313);const a=e=>{let{title:t,subtitle:r,blogUrl:n,dateString:o}=e;return i.createElement(l.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"var(--ifm-color-primary)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  var(--ifm-color-primary)"},date:o,iconStyle:{background:"var(--ifm-color-primary)",color:"#fff"},dateClassName:"dateLabel"},i.createElement("a",{href:n,style:{color:"var(--ifm-color-primary-darkest)"}},i.createElement("h3",{className:"vertical-timeline-element-title"},t),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},r)))},s={},c="Patch History",u={unversionedId:"patch-history",id:"patch-history",title:"Patch History",description:"Escape Simulator has a rich past in terms of updates including new rooms, new features, bug fixes and DLCs.",source:"@site/docs/patch-history.md",sourceDirName:".",slug:"/patch-history",permalink:"/docs/patch-history",draft:!1,editUrl:"https://github.com/SuperJura/ESDocs/blob/main/docs/patch-history.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Build-a-Room #1 Awards Stream",permalink:"/docs/stream-vods/build-a-room-1-winners"},next:{title:"FAQ",permalink:"/docs/faq/"}},d={},p=[],m={toc:p},f="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patch-history"},"Patch History"),(0,o.kt)("p",null,"Escape Simulator has a rich past in terms of updates including new rooms, new features, bug fixes and DLCs.\nHere is a full list of major patches."),(0,o.kt)(l.VerticalTimeline,{lineColor:"var(--ifm-color-primary)",mdxType:"VerticalTimeline"},(0,o.kt)(a,{title:"Portal DLC",subtitle:"DLC",blogUrl:"/blog/2023/09/07/portal",dateString:"September 7, 2023",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Versus Mode",subtitle:"Alternative to coop",blogUrl:"/blog/2023/08/01/versus-update",dateString:"August 1, 2023",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Treasure Island",subtitle:"New Room",blogUrl:"/blog/2023/06/22/treasure-island-update",dateString:"June 22, 2023",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Leonardo's Workshop Room",subtitle:"New Room",blogUrl:"/blog/2023/03/08/leonardos-workshop-update",dateString:"March 8, 2023",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Wild West + Big Bug fix update",subtitle:"DLC",blogUrl:"/blog/2022/12/08/wild-west-dlc",dateString:"December 8, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Halloween update",subtitle:"New Room",blogUrl:"/blog/2022/10/25/halloween-update",dateString:"October 25, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"70's Room",subtitle:"New Room",blogUrl:"/blog/2022/09/22/seventies-room",dateString:"September 22, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Room Editor 2.0",subtitle:"Room Editor Upgrade",blogUrl:"/blog/2022/06/06/room-editor-two",dateString:"June 6, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Steampunk DLC",subtitle:"DLC",blogUrl:"/blog/2022/06/06/steampunk-dlc",dateString:"June 6, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"One million players update & Cats in time Room",subtitle:"New Room",blogUrl:"/blog/2022/05/02/milion-players-cats",dateString:"May 2, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"HyperX update",subtitle:"Room Editor Upgrade",blogUrl:"/blog/2022/04/07/hyperx",dateString:"April 7, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Language pack update",subtitle:"Game Upgrade",blogUrl:"/blog/2022/03/22/languages",dateString:"March 22, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Big editor update: alchemist prop pack & room editor particles",subtitle:"Room Editor Upgrade",blogUrl:"/blog/2022/02/18/room-editor-packs",dateString:"February 18, 2022",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Santa's workshop",subtitle:"New Room",blogUrl:"/blog/2021/12/29/santa",dateString:"December 29, 2021",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Omega room",subtitle:"New Rooms",blogUrl:"/blog/2021/10/29/omega",dateString:"October 29, 2021 - December 9, 2021",mdxType:"PatchHistoryElement"}),(0,o.kt)(a,{title:"Escape Simulator is out!",subtitle:"Game release",dateString:"October 19, 2021",mdxType:"PatchHistoryElement"})))}h.isMDXComponent=!0},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=i.apply(null,r);l&&e.push(l)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{InView:()=>h,default:()=>h,defaultFallbackInView:()=>u,observe:()=>p,useInView:()=>y});var n=r(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var l=new Map,a=new WeakMap,s=0,c=void 0;function u(e){c=e}function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0":e[t]);var r})).toString()}function p(e,t,r,n){if(void 0===r&&(r={}),void 0===n&&(n=c),void 0===window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var t=d(e),r=l.get(t);if(!r){var n,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},l.set(t,r)}return r}(r),a=o.id,s=o.observer,u=o.elements,p=u.get(e)||[];return u.has(e)||u.set(e,p),p.push(t),s.observe(e),function(){p.splice(p.indexOf(t),1),0===p.length&&(u.delete(e),s.unobserve(e)),0===u.size&&(s.disconnect(),l.delete(a))}}var m=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!=typeof e.children}var h=function(e){var t,r;function l(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),f(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=l).prototype=Object.create(r.prototype),t.prototype.constructor=t,o(t,r);var a=l.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay,l=e.fallbackInView;this._unobserveCb=p(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:i,delay:o},l)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!f(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,s=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(o,m);return n.createElement(a||"div",i({ref:this.handleNode},s),l)},l}(n.Component);function y(e){var t=void 0===e?{}:e,r=t.threshold,i=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,s=t.triggerOnce,c=t.skip,u=t.initialInView,d=t.fallbackInView,m=n.useRef(),f=n.useState({inView:!!u}),h=f[0],y=f[1],g=n.useCallback((function(e){void 0!==m.current&&(m.current(),m.current=void 0),c||e&&(m.current=p(e,(function(e,t){y({inView:e,entry:t}),t.isIntersecting&&s&&m.current&&(m.current(),m.current=void 0)}),{root:a,rootMargin:l,threshold:r,trackVisibility:o,delay:i},d))}),[Array.isArray(r)?r.toString():r,a,l,s,c,o,d,i]);(0,n.useEffect)((function(){m.current||!h.entry||s||c||y({inView:!!u})}));var b=[g,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},8940:(e,t,r)=>{"use strict";t.Z=void 0;var n=l(r(7294)),i=l(r(5697)),o=l(r(4184));function l(e){return e&&e.__esModule?e:{default:e}}const a=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:i="#FFF",children:l})=>("object"==typeof window&&document.documentElement.style.setProperty("--line-color",i),n.default.createElement("div",{className:(0,o.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===r,"vertical-timeline--one-column-left":"1-column"===r||"1-column-left"===r,"vertical-timeline--one-column-right":"1-column-right"===r})},l));a.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,animate:i.default.bool,layout:i.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:i.default.string};var s=a;t.Z=s},7509:(e,t,r)=>{"use strict";t.Z=void 0;var n=a(r(7294)),i=a(r(5697)),o=a(r(4184)),l=r(131);function a(e){return e&&e.__esModule?e:{default:e}}const s=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:i=null,date:a="",dateClassName:s="",icon:c=null,iconClassName:u="",iconOnClick:d=null,onTimelineElementClick:p=null,iconStyle:m=null,id:f="",position:h="",style:y=null,textClassName:g="",intersectionObserverProps:b={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:v=!1})=>n.default.createElement(l.InView,b,(({inView:l,ref:b})=>n.default.createElement("div",{ref:b,id:f,className:(0,o.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===h,"vertical-timeline-element--right":"right"===h,"vertical-timeline-element--no-children":""===e}),style:y},n.default.createElement(n.default.Fragment,null,n.default.createElement("span",{style:m,onClick:d,className:(0,o.default)(u,"vertical-timeline-element-icon",{"bounce-in":l||v,"is-hidden":!(l||v)})},c),n.default.createElement("div",{style:i,onClick:p,className:(0,o.default)(g,"vertical-timeline-element-content",{"bounce-in":l||v,"is-hidden":!(l||v)})},n.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,n.default.createElement("span",{className:(0,o.default)(s,"vertical-timeline-element-date")},a))))));s.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visible:i.default.bool,intersectionObserverProps:i.default.shape({root:i.default.object,rootMargin:i.default.string,threshold:i.default.number,triggerOnce:i.default.bool})};var c=s;t.Z=c},4313:(e,t,r)=>{"use strict";e.exports={VerticalTimeline:r(8940).Z,VerticalTimelineElement:r(7509).Z}}}]);