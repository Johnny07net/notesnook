(this.webpackJsonptiptap=this.webpackJsonptiptap||[]).push([[1],{119:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(23),a=n.n(i),l=(n(81),n(82),n(57)),c=n(0);var s=function(){return Object(c.jsx)(l.a,{})},u=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,125)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),i(e),a(e)}))};n(114),n(115),n(116),n(117),n(118);a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s,{})}),document.getElementById("root")),u()},15:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}));var o={selection:"editor-event:selection",content:"editor-event:content",title:"editor-event:title",scroll:"editor-event:scroll",history:"editor-event:history",newtag:"editor-event:newtag",tag:"editor-event:tag",filepicker:"editor-event:picker",download:"editor-event:download-attachment",logger:"native:logger",back:"editor-event:back",pro:"editor-event:pro",monograph:"editor-event:monograph",properties:"editor-event:properties",fullscreen:"editor-event:fullscreen"};function r(){return!!window.ReactNativeWebView}function i(t,n){r()?window.ReactNativeWebView.postMessage(JSON.stringify({type:o[t]||t,value:n,sessionId:e.sessionId})):console.log(t,n)}globalThis.logger=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n.map((function(e){return"string"!==typeof e?JSON.stringify(e):e})).join(" ");i(o.logger,"[".concat(e,"]: ")+a)},globalThis.post=i}).call(this,n(31))},32:function(e,t,n){e.exports={btn:"styles_btn__19MaA",btn_header:"styles_btn_header__2xGXR",titleBar:"styles_titleBar__2hePW"}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(45),r=n.n(o),i=n(14);function a(e){var t=document.getElementById("variables-nn"),n=document.getElementsByTagName("head")[0];t&&n.removeChild(t);var o=document.createElement("style");o.type="text/css",o.id="variables-nn",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),n.insertBefore(o,function(){var e,t=Object(i.a)(document.getElementsByTagName("style"));try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n.innerHTML.includes("#root"))return n}}catch(o){t.e(o)}finally{t.f()}}())}function l(e){var t=":root {";for(var n in e)t+="--nn_".concat(n,": ").concat(e[n],";");return t+"}"}var c={accent:"#008837",shade:"#00883712",fg:"#008837",normal:"black",icon:"gray",transGray:"#00000010",errorBg:"#FFB6C1",errorText:"#ff6961",successBg:"#DFF2BF",successText:"#4F8A10",warningBg:"#FF990020",warningText:"#FF9900",red:"#f44336",orange:"#FF9800",yellow:"#FFD600",green:"#4CAF50",blue:"#2196F3",purple:"#673AB7",gray:"#9E9E9E",discord:"#5865F2",night:!1,bg:"#ffffff",navbg:"#f7f7f7",nav:"#f7f7f7",pri:"#424242",sec:"white",light:"#ffffff",input:"transparent",heading:"#212121",border:"#E8E8E8",placeholder:"#a9a9a9"};a(l(c));var s=r()((function(e,t){return{colors:c,setColors:function(t){a(l(t)),e({colors:t})}}}))},57:function(e,t,n){"use strict";(function(e){var o=n(7),r=n(9),i=n(6),a=n(33),l=n(50),c=n(1),s=n(61),u=n(62),d=n(38),f=n(15),b=n(63),g=n(73),v=n(74),h=n(75),p=n(0),j=function(t){var n,o,l=t.editorTheme,u=t.toolbarTheme,d=t.settings,j=Object(c.useState)(0),O=Object(i.a)(j,2),y=O[0],x=O[1],C=Object(c.useRef)(null),w=Object(c.useRef)(null),T=Object(c.useState)(!1),S=Object(i.a)(T,2),R=S[0],_=S[1];Object(a.d)({claims:{premium:d.premium},onPermissionDenied:function(){post(f.a.pro)}});var k=Object(a.e)({onUpdate:function(t){var n=t.editor;e.editorController.contentChange(n)},onSelectionUpdate:function(e){e.transaction.scrollIntoView()},onOpenAttachmentPicker:function(t,n){return e.editorController.openFilePicker(n),!0},onDownloadAttachment:function(t,n){return e.editorController.downloadAttachment(n),!0},theme:l,element:R&&C.current||void 0,editable:!d.readonly,editorProps:{editable:function(){return!d.readonly}},content:null===(n=e.editorController)||void 0===n||null===(o=n.content)||void 0===o?void 0:o.current,isMobile:!0,isKeyboardOpen:d.keyboardShown,doubleSpacedLines:d.doubleSpacedLines},[R,d.readonly,y]),I=Object(c.useCallback)((function(){x((function(e){return e+1})),globalThis.editorController.setTitlePlaceholder("Note title")}),[]),D=Object(s.a)(I),F=Object(c.useRef)(D);return globalThis.editorController=D,globalThis.editor=k,Object(c.useLayoutEffect)((function(){_(!0)}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"column",maxWidth:"100vw",marginBottom:"5px"},children:[Object(p.jsx)(b.a,{hasRedo:(null===k||void 0===k?void 0:k.can().redo())||!1,hasUndo:(null===k||void 0===k?void 0:k.can().undo())||!1,settings:d,noHeader:d.noHeader||!1}),Object(p.jsxs)("div",{onScroll:D.scroll,ref:w,style:{overflowY:"scroll",flexDirection:"column",height:"100%",flexGrow:1,flexShrink:1,display:"flex"},children:[d.noHeader?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v.a,{}),Object(p.jsx)(h.a,{titlePlaceholder:D.titlePlaceholder,readonly:d.readonly,controller:F,title:D.title}),Object(p.jsx)(g.a,{container:w})]}),Object(p.jsx)(m,{padding:d.doubleSpacedLines?0:6,ref:C}),Object(p.jsx)("div",{onDoubleClick:function(){var e,t,n=null===(e=globalThis.editor)||void 0===e?void 0:e.state.doc.content.size;n&&(null===(t=globalThis.editor)||void 0===t||t.chain().insertContentAt(n-1,"<p></p>",{updateSelection:!0}).run(),setTimeout((function(){var e;null===(e=globalThis.editor)||void 0===e||e.commands.focus()}),1))},style:{flexShrink:0,height:150,width:"100%"}})]}),d.noToolbar||!R?null:Object(p.jsx)(a.b,{sx:{pl:"10px",pt:"5px",minHeight:45},theme:u,editor:k,location:"bottom",tools:Object(r.a)(d.tools)})]})})},m=Object(c.memo)(Object(c.forwardRef)((function(e,t){var n=Object(d.a)((function(e){return e.colors}));return Object(p.jsx)("div",{ref:t,style:{padding:12,paddingTop:e.padding,flex:1,color:n.pri,marginTop:-12,caretColor:n.accent}})})),(function(){return!0}));t.a=function(){var e=Object(u.a)(),t=Object(d.a)((function(e){return e.colors})),n=Object(l.useTheme)({accent:null===t||void 0===t?void 0:t.accent,scale:1,theme:null!==t&&void 0!==t&&t.night?"dark":"light"});!function(e){e.space=[0,10,12,18],e.space.small="10px",e.buttons.menuitem=Object(o.a)(Object(o.a)({},e.buttons.menuitem),{},{height:"50px",paddingX:"20px",borderBottomWidth:0}),e.iconSizes={big:20,medium:18,small:18},e.fontSizes=Object(o.a)(Object(o.a)({},e.fontSizes),{},{subBody:"0.8rem",body:"0.9rem"}),e.radii=Object(o.a)(Object(o.a)({},e.radii),{},{small:5}),e.buttons.menuitem=Object(o.a)(Object(o.a)({},e.buttons.menuitem),{},{px:5,height:"45px"})}(n);var r=Object(l.useTheme)({accent:null===t||void 0===t?void 0:t.accent,scale:1,theme:null!==t&&void 0!==t&&t.night?"dark":"light"});return r.colors.background=(null===t||void 0===t?void 0:t.bg)||"#f0f0f0",r.space=[0,10,12,20],Object(p.jsx)(a.a,{children:Object(p.jsx)(j,{editorTheme:r,toolbarTheme:n,settings:e})})}}).call(this,n(31))},61:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var o=n(6),r=n(1),i=n(38),a=n(15);function l(t){var n=Object(r.useState)(""),l=Object(o.a)(n,2),c=l[0],s=l[1],u=Object(r.useState)("Note title"),d=Object(o.a)(u,2),f=d[0],b=d[1],g=Object(r.useRef)(null),v=Object(r.useRef)({selectionChange:null,change:null}),h=Object(r.useCallback)((function(e){}),[]),p=Object(r.useCallback)((function(e){Object(a.c)(a.a.title,e)}),[]),j=Object(r.useCallback)((function(e){if(e){var t;if("number"===typeof v.current.change)clearTimeout(null===(t=v.current)||void 0===t?void 0:t.change);v.current.change=setTimeout((function(){g.current=e.getHTML(),Object(a.c)(a.a.content,g.current)}),300)}}),[]),m=Object(r.useCallback)((function(e){}),[]),O=Object(r.useCallback)((function(){t()}),[t]),y=Object(r.useCallback)((function(n){if("{"===(null===n||void 0===n?void 0:n.data[0])){var o=JSON.parse(n.data),r=o.type,l=o.value;switch(e.sessionId=o.sessionId,r){case"native:html":g.current=l,t();break;case"native:theme":i.a.getState().setColors(o.value);break;case"native:title":s(l);break;case"native:titleplaceholder":b(l)}Object(a.c)(r)}}),[t]);Object(r.useEffect)((function(){if(Object(a.b)()){var e=navigator.vendor.match(/apple/i),t=document;return e&&(t=window),console.log("recreating messaging"),t.addEventListener("message",y),function(){t.removeEventListener("message",y)}}}),[y]);var x=Object(r.useCallback)((function(e){Object(a.c)(a.a.filepicker,e)}),[]),C=Object(r.useCallback)((function(e){Object(a.c)(a.a.download,e)}),[]);return{contentChange:j,selectionChange:h,titleChange:p,scroll:m,title:c,setTitle:s,titlePlaceholder:f,setTitlePlaceholder:b,openFilePicker:x,downloadAttachment:C,content:g,onUpdate:O}}}).call(this,n(31))},62:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var o=n(6),r=n(7),i=n(33),a=n(1),l=localStorage.getItem("editorSettings"),c={fullscreen:!1,deviceMode:"mobile",premium:!1,tools:JSON.parse(JSON.stringify(Object(i.c)().default)),noToolbar:globalThis.noToolbar,noHeader:globalThis.noHeader,readonly:globalThis.readonly,doubleSpacedLines:!0};e.settingsController={update:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{noToolbar:globalThis.noToolbar||t.noToolbar,noHeader:globalThis.noHeader||t.noHeader,readonly:globalThis.readonly||t.readonly});JSON.stringify(n)!==JSON.stringify(e.settingsController.previous)&&(e.settingsController.set&&e.settingsController.set(n),t?localStorage.setItem("editorSettings",JSON.stringify(n)):localStorage.removeItem("editorSettings"),settingsController.previous=Object(r.a)({},n))},previous:l?JSON.parse(l):Object(r.a)({},c)},e.settingsController.previous.noHeader=globalThis.noHeader,e.settingsController.previous.noToolbar=globalThis.noToolbar,e.settingsController.previous.readonly=globalThis.readonly;var s=function(){var t=Object(a.useState)(Object(r.a)({},e.settingsController.previous)),n=Object(o.a)(t,2),i=n[0],l=n[1];return e.settingsController.set=l,i}}).call(this,n(31))},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var o=n(64),r=n.n(o),i=n(65),a=n.n(i),l=n(66),c=n.n(l),s=n(67),u=n.n(s),d=n(68),f=n.n(d),b=n(69),g=n.n(b),v=n(70),h=n.n(v),p=n(71),j=n.n(p),m=(n(1),n(72)),O=n(15),y=n(32),x=n.n(y),C=n(0),w=function(e){var t=e.onPress,n=e.children,o=e.style,r=e.preventDefault,i=void 0===r||r;return Object(C.jsx)("button",{className:x.a.btn_header,style:o,onMouseDown:function(e){i&&e.preventDefault(),t()},children:n})};function T(e){var t=e.noHeader,n=e.settings,o=e.hasUndo,i=e.hasRedo,l=Object(m.a)();return Object(C.jsx)("div",{style:{display:"flex",alignItems:"center",height:"".concat(t?l.top:50+l.top,"px"),backgroundColor:"var(--nn_bg)",position:"sticky",width:"100vw"},children:t?null:Object(C.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",flexDirection:"row",paddingTop:l.top,height:50,alignItems:"center"},children:["mobile"===n.deviceMode||n.fullscreen?Object(C.jsx)(w,{onPress:function(){post(O.a.back)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginLeft:6,width:40,height:40,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"relative"},children:Object(C.jsx)(r.a,{size:27,style:{position:"absolute"},color:"var(--nn_pri)"})}):Object(C.jsx)("div",{}),Object(C.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"},children:[Object(C.jsx)(w,{onPress:function(){var e;null===(e=editor)||void 0===e||e.commands.undo()},style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(f.a,{color:o?"var(--nn_pri)":"var(--nn_nav)",size:25,style:{position:"absolute"}})}),Object(C.jsx)(w,{onPress:function(){var e;null===(e=editor)||void 0===e||e.commands.redo()},style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(g.a,{color:i?"var(--nn_pri)":"var(--nn_nav)",size:25,style:{position:"absolute"}})}),!n.premium&&Object(C.jsx)(w,{onPress:function(){post(O.a.pro)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(c.a,{size:25,style:{position:"absolute"},color:"orange"})}),Object(C.jsx)(w,{onPress:function(){var e;null===(e=editor)||void 0===e||e.commands.startSearch()},style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(j.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})}),Object(C.jsx)(w,{onPress:function(){post(O.a.monograph)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(a.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})}),"mobile"===n.deviceMode||n.fullscreen?null:Object(C.jsx)(w,{onPress:function(){post(O.a.fullscreen)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(h.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})}),Object(C.jsx)(w,{onPress:function(){post(O.a.properties)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:12,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(u.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})})]})]})})}},72:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var o=n(6),r=n(1),i=localStorage.getItem("safeAreaInsets"),a=i&&!globalThis.noHeader?JSON.parse(i):{top:0,bottom:0,left:0,right:0};e.safeAreaController={update:function(e){safeAreaController.set&&safeAreaController.set(e),safeAreaController.previous=e,localStorage.setItem("safeAreaInsets",JSON.stringify(e))},reset:function(){safeAreaController.set&&safeAreaController.set(a)},previous:a};var l=function(){var t=Object(r.useState)(e.safeAreaController.previous),n=Object(o.a)(t,2),i=n[0],a=n[1];return e.safeAreaController.set=a,i}}).call(this,n(31))},73:function(e,t,n){"use strict";var o=n(6),r=n(1),i=n.n(r),a=n(0);function l(e){var t=e.container,n=Object(r.useState)({date:"",saved:""}),l=Object(o.a)(n,2),c=l[0],s=l[1],u=Object(r.useState)(!1),d=Object(o.a)(u,2),f=d[0],b=d[1],g=Object(r.useRef)(!1),v=Object(r.useRef)(0),h=Object(r.useRef)(0),p=Object(r.useState)("0 words"),j=Object(o.a)(p,2),m=j[0],O=j[1],y=Object(r.useRef)(m),x=Object(r.useRef)(0),C=Object(r.useRef)({set:s});globalThis.statusBar=C;var w=i.a.useCallback((function(e){var t=e.target.scrollTop;t<200?g.current&&(g.current=!1,b(!1),h.current=Date.now(),v.current=t):Date.now()-h.current<300||(t>v.current?(b(!1),g.current=!1):(b(!0),g.current=!0),h.current=Date.now(),v.current=t)}),[]);Object(r.useEffect)((function(){y.current=m}),[m]),Object(r.useEffect)((function(){return clearInterval(x.current),x.current=setInterval((function(){var e,t,n,o=(null===(e=editor)||void 0===e||null===(t=e.storage)||void 0===t||null===(n=t.characterCount)||void 0===n?void 0:n.words())+" words";y.current!==o&&O(o)}),3e3),function(){clearInterval(x.current)}}),[]),Object(r.useEffect)((function(){var e=t.current;return null===e||void 0===e||e.addEventListener("scroll",w),function(){null===e||void 0===e||e.removeEventListener("scroll",w)}}),[w,t]);var T={marginTop:0,marginBottom:0,fontSize:"12px",color:"var(--nn_icon)",marginRight:8,paddingBottom:0};return Object(a.jsxs)("div",{style:{flexDirection:"row",display:"flex",paddingRight:12,paddingLeft:12,position:f?"sticky":"relative",top:-3,backgroundColor:"var(--nn_bg)",zIndex:1,justifyContent:f?"center":"flex-start",paddingTop:2,paddingBottom:2},children:[Object(a.jsx)("p",{style:T,children:m}),Object(a.jsx)("p",{style:T,children:c.date}),Object(a.jsx)("p",{style:T,children:c.saved})]})}t.a=i.a.memo(l,(function(){return!0}))},74:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var o=n(6),r=n(1),i=n(15),a=n(32),l=n.n(a),c=n(0);function s(){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],s=n[1],u=Object(r.useRef)({setTags:s});e.editorTags=u;var d=function(){var e,t;null!==(e=editor)&&void 0!==e&&e.isFocused&&(editor.commands.blur(),null===(t=editorTitle.current)||void 0===t||t.blur());post(i.a.newtag)};return Object(c.jsxs)("div",{style:{padding:"0px 12px",display:"flex",alignItems:"center",marginTop:10},children:[Object(c.jsxs)("button",{className:l.a.btn,onMouseUp:function(e){e.preventDefault(),d()},onMouseDown:function(e){return e.preventDefault()},onTouchEnd:function(e){e.preventDefault(),d()},style:{borderWidth:0,backgroundColor:"var(--nn_nav)",marginRight:5,borderRadius:100,padding:"0px 10px",fontFamily:"Open Sans",display:"flex",alignItems:"center",height:"30px"},children:[0===a.length?Object(c.jsx)("p",{style:{marginRight:4,fontSize:13,color:"var(--nn_icon)",userSelect:"none"},children:"Add a tag"}):null,Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{fill:"var(--nn_accent)",d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"})})]}),a.map((function(e){return Object(c.jsxs)("button",{className:l.a.btn,style:{borderWidth:0,backgroundColor:"var(--nn_nav)",marginRight:5,borderRadius:100,padding:"0px 10px",height:"30px",fontFamily:"Open Sans",fontSize:13,color:"var(--nn_icon)"},onMouseUp:function(t){t.preventDefault(),post(i.a.tag,e.title)},onMouseDown:function(e){return e.preventDefault()},onTouchEnd:function(t){t.preventDefault(),post(i.a.tag,e.title)},children:["#",e.alias]})}))]})}}).call(this,n(31))},75:function(e,t,n){"use strict";(function(e){var o=n(1),r=n.n(o),i=n(32),a=n.n(i),l=n(0);function c(t){var n=t.controller,r=t.title,i=t.titlePlaceholder,c=t.readonly,s=Object(o.useRef)(null),u=Object(o.useRef)(!0);return e.editorTitle=s,Object(o.useEffect)((function(){s.current&&(u.current=!1,s.current.value=r,u.current=!0)}),[r]),Object(l.jsx)("input",{ref:s,className:a.a.titleBar,contentEditable:!c,disabled:c,style:{height:50,fontSize:25,width:"100%",boxSizing:"border-box",borderWidth:0,paddingRight:12,paddingLeft:12,fontWeight:600,fontFamily:"Open Sans",backgroundColor:"transparent",color:"var(--nn_heading)",caretColor:"var(--nn_accent)"},maxLength:150,onChange:function(e){var t;u.current&&(null===(t=n.current)||void 0===t||t.titleChange(e.target.value))},placeholder:i})}t.a=r.a.memo(c,(function(e,t){return e.title===t.title&&(e.titlePlaceholder===t.titlePlaceholder&&e.readonly===t.readonly)}))}).call(this,n(31))},81:function(e,t,n){},82:function(e,t,n){}},[[119,2,3]]]);