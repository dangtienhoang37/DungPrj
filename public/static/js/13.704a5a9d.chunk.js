(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{507:function(e,t,r){"use strict";var a=r(4),n=r(11),o=r(3),c=r(270),i=r(439),s=r(488),l=r(450),d=r(0),u=r(477),m=Object(u.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),b=r(2),p=["label","options","className","error","resetFlag","index","onChange"];function j(e){var t,r=e.label,u=e.options,j=e.className,v=e.error,h=e.resetFlag,g=e.index,f=e.onChange,O=Object(o.a)(e,p),x=Object(d.useState)(null===(t=u[g])||void 0===t?void 0:t.value),y=Object(n.a)(x,2),N=y[0],w=y[1],C=m();return Object(d.useEffect)((function(){var e;h&&w(null===(e=u[0])||void 0===e?void 0:e.value)}),[h]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(c.a,{className:"".concat(C.root," ").concat(j),variant:"filled",children:[Object(b.jsx)(i.a,{classes:{root:C.label,focused:C.labelFocus},id:r,children:r}),Object(b.jsx)(l.a,Object(a.a)(Object(a.a)({classes:{root:C.selectRoot,icon:C.selectIcon},MenuProps:{classes:{paper:C.selectMenu}},disableUnderline:!0,error:v,labelId:r,label:r,value:N,onChange:function(e){w(e.target.value),f(e)}},O),{},{children:u&&u.map((function(e,t){return Object(b.jsx)(s.a,{value:e.value,children:e.label},t)}))}))]})})}j.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=j},508:function(e,t,r){"use strict";var a=r(26),n=r(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(35)).default)(o.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=c},509:function(e,t,r){"use strict";var a=r(11),n=r(0),o=r(477),c=Object(o.a)((function(){return{root:{border:"solid 1px var(--secondary-color)",padding:"0.4rem 0.8rem",width:"max-content",borderRadius:"25px",transition:"all 0.25s","&.active":{backgroundColor:"var(--secondary-color)"},"&:hover, &:active":{filter:"brightness(0.85)"}},icon:{borderRadius:"50%",width:"2.8rem",height:"2.8rem",marginRight:"0.5rem"},text:{color:"var(--text-color)",fontWeight:500,fontSize:"1.4rem",paddingLeft:"0.4rem",paddingRight:"0.8rem"}}})),i=r(2);function s(e){var t=e.title,r=e.iconSrc,o=e.id,s=e.onChange,l=c(),d=Object(n.useState)(!1),u=Object(a.a)(d,2),m=u[0],b=u[1];return Object(n.useEffect)((function(){b(!1)}),[]),Object(i.jsxs)("div",{className:"".concat(l.root," flex-center--ver cur-pointer ").concat(m?"active":""),onClick:function(){s(o,!m),b(!m)},children:[r&&Object(i.jsx)("img",{className:l.icon,src:r,alt:"icon"}),Object(i.jsx)("span",{className:l.text,children:t})]})}s.defaultProps={id:"",iconSrc:null,title:"Title",onChange:function(){},resetFlag:0};t.a=s},511:function(e,t,r){"use strict";var a=r(26),n=r(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(35)).default)(o.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=c},512:function(e,t,r){"use strict";var a=r(26),n=r(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(35)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=c},514:function(e,t,r){"use strict";var a=r(4),n=r(3),o=r(11),c=r(484),i=r(0),s=r(2),l=["children"];t.a=function(e){var t=Object(i.useState)(!1),r=Object(o.a)(t,2),d=r[0],u=r[1],m=Object(i.useState)(-1),b=Object(o.a)(m,2),p=b[0],j=b[1],v=e.children,h=Object(n.a)(e,l);return Object(i.useEffect)((function(){var e=!0;return document.body.offsetWidth>576?e&&j(!0):e&&j(!1),function(){return e=!1}}),[]),Object(s.jsx)(s.Fragment,{children:-1!==p&&Object(s.jsx)(s.Fragment,{children:p?Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({},h),{},{children:v})):Object(s.jsx)(c.a,Object(a.a)(Object(a.a)({},h),{},{open:d,onClick:function(){return u(!d)},children:v}))})})}},518:function(e,t,r){"use strict";var a=r(26),n=r(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(35)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=c},519:function(e,t,r){"use strict";var a=r(26),n=r(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(35)).default)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=c},520:function(e,t,r){"use strict";var a=r(11),n=r(492),o=r(485),c=r(517),i=r(518),s=r.n(i),l=r(512),d=r.n(l),u=r(509),m=r(515),b=r(0),p=r(477),j=Object(p.a)((function(){return{button:{backgroundColor:"var(--bg-color-accent) !important",boxShadow:"none !important",border:"solid 1px var(--border-color)",color:"var(--label-color)",textTransform:"capitalize",minHeight:"5.6rem","&:hover, &:active":{opacity:.85}},tagsWrap:{paddingTop:"0 !important",paddingBottom:"0 !important"},tags:{display:"flex",flexWrap:"wrap",padding:"2.4rem 1.2rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--sm-border-radius)","& > *":{margin:"0.8rem"}}}})),v=r(2);function h(e){var t=e.onChange,r=e.buttonTitle,i=e.topicList,l=e.buttonWrapper,m=e.tagsWrapper,p=j(),h=Object(b.useState)(!1),g=Object(a.a)(h,2),f=g[0],O=g[1],x=Object(b.useRef)([]),y=l||c.a,N=m||c.a,w=function(e,r){r?x.current.push(e):x.current=x.current.filter((function(t){return t!==e})),t(x.current)};return Object(b.useEffect)((function(){x.current=[]}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{children:Object(v.jsx)(n.a,{color:"secondary",variant:"contained",endIcon:f?Object(v.jsx)(s.a,{}):Object(v.jsx)(d.a,{}),className:"".concat(p.button," w-100 h-100"),onClick:function(){return O(!f)},children:r})}),Object(v.jsx)(N,{className:f?"":p.tagsWrap,children:Object(v.jsx)(o.a,{in:f,children:Object(v.jsx)("div",{className:p.tags,children:i.map((function(e,t){return Object(v.jsx)(u.a,{iconSrc:e.icon,title:e.title,id:e.key,onChange:w},t)}))})})})]})}h.defaultProps={onChange:function(){},resetFlag:0,buttonTitle:"Ch\u1ecdn ch\u1ee7 \u0111\u1ec1",topicList:m.a};t.a=h},522:function(e,t,r){"use strict";var a=r(26),n=r(34);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),c=(0,a(r(35)).default)(o.createElement(o.Fragment,null,o.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),o.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"PhotoCamera");t.default=c},524:function(e,t,r){"use strict";var a=r(4),n=r(29),o=r.n(n),c="/api/word",i={getWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.a.get("".concat(c,"/get-word-details"),{params:{id:e}})},getWordByTopic:function(e){return o.a.get("".concat(c,"/get-word-by-topic/").concat(e))},searchWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.a.get("".concat(c,"/search-word"),{params:{word:e,isCompact:t}})},getWordTopics:function(){return o.a.get("".concat(c,"/get-word-topics"))},getAllWord:function(){return o.a.get("".concat(c,"/get-all-word"))},postWord:function(e){return o.a.post("".concat(c,"/post-word"),Object(a.a)({},e),{header:{"content-type":"multipart/form-data"}})},putWord:function(e,t){return o.a.put("".concat(c,"/put-word/").concat(e),Object(a.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o.a.delete("".concat(c,"/delete-word"),{params:{word:e,type:t}})},checkWordExist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o.a.get("".concat(c,"/exist-word"),{params:{word:e,type:t}})},getWordList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rand";return o.a.get("".concat(c,"/get-word-pack"),{params:{page:e,perPage:t,packInfo:JSON.stringify(r),sortType:a}})},getWordTopicGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,r=arguments.length>2?arguments[2]:void 0;return o.a.get("".concat(c,"/get-word-topic-gallery"),{params:{page:e,perPage:t,packInfo:JSON.stringify(r)}})},getWordTopic:function(e){return o.a.get("".concat(c,"/get-word-topic-slide"),{params:{packInfo:JSON.stringify(e)}})}};t.a=i},547:function(e,t,r){"use strict";var a=r(519),n=r.n(a),o=r(514),c=(r(0),r(555)),i=r(2);t.a=function(e){var t=e.title,r=Object(c.a)();return Object(i.jsx)(o.a,{title:t,className:"cur-help",children:Object(i.jsx)(n.a,{className:r.tooltipIcon})})}},555:function(e,t,r){"use strict";var a=r(477);t.a=Object(a.a)((function(){return{root:{padding:"2.8rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",backgroundColor:"var(--bg-color-sec)"},title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.8rem",marginBottom:"1.2rem"},grid:{marginTop:"2.4rem",marginBottom:"2.4rem"},tooltipIcon:{fontSize:"1.6rem",color:"var(--label-color)"},btn:{marginLeft:"1rem",textTransform:"none",minWidth:"14rem"},btnReset:{borderColor:"var(--accent-color) !important",color:"var(--accent-color) !important","&:hover, &:active":{filter:"brightness(0.85)"}},sentenceInput:{minHeight:"8rem"},avtWrap:{width:"15rem",height:"15rem",position:"relative"},avt:{borderRadius:"50%",border:"2px solid var(--primary-color)"},cameraIconWrap:{position:"absolute",right:0,bottom:0,width:"4.2rem",height:"4.2rem",padding:"1.2rem",backgroundColor:"var(--primary-color)",borderRadius:"50%",cursor:"pointer",border:"solid 5px var(--bg-color-sec)","&:hover, &:active":{opacity:.85}},cameraIcon:{color:"var(--text-color)",fontSize:"2rem"},fileInput:{position:"absolute",width:"100%",height:"100%",top:0,left:0,opacity:0,cursor:"pointer"}}}))},583:function(e,t,r){"use strict";var a=r(4),n=r(11),o=r(3),c=r(517),i=r(143),s=r(0),l=r(9),d=r(477),u=Object(d.a)((function(e){var t;return{root:(t={backgroundColor:"var(--bg-color-main)",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",padding:"1.2rem",display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"0.6rem"},Object(l.a)(t,e.breakpoints.up("md"),{gridTemplateColumns:"repeat(10, 1fr)"}),Object(l.a)(t,"& span",{color:"var(--text-color)",fontSize:"2rem",fontWeight:500,padding:"0.8rem",cursor:"pointer",textAlign:"center",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--sm-border-radius)","&.close":{backgroundColor:"var(--secondary-color)"},transition:"all 0.25s","&:hover, &:active":{backgroundColor:"var(--primary-color)"}}),t)}})),m=r(2),b=["'","\u026a","i\u02d0","\u028a","u\u02d0","e","\u0259","\u025c\u02d0","\u0254\u02d0","\xe6","\u028c","a\u02d0","\u0252","\u026a\u0259","e\u026a","\u028a\u0259","\u0254\u026a","\u0259\u028a","a\u026a","a\u028a","t\u0283","d\u0292","\u03b8","\xf0","\u0283","\u014b","\u0292"];function p(e){var t=e.onClose,r=e.onInput,a=u();return Object(m.jsxs)("div",{className:a.root,children:[b.map((function(e,t){return Object(m.jsx)("span",{onClick:function(){return r(e)},children:e},t)})),Object(m.jsx)("span",{onClick:t,className:"close",children:"Close"})]})}p.defaultProps={onClose:function(){},onInput:function(){}};var j=p,v=r(547),h=["value","errorMessage","error","register","resetFlag","onChange"],g=["ref"];function f(e){var t=e.value,r=e.errorMessage,l=e.error,d=e.register,u=e.resetFlag,b=e.onChange,p=Object(o.a)(e,h).inputProps,f=d.ref,O=Object(o.a)(d,g),x=Object(s.useRef)(null),y=Object(s.useState)(!1),N=Object(n.a)(y,2),w=N[0],C=N[1],k=Object(s.useState)(t),E=Object(n.a)(k,2),L=E[0],S=E[1];return Object(s.useEffect)((function(){u&&S("")}),[u]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(c.a,{item:!0,xs:12,md:6,lg:4,children:[Object(m.jsx)(i.a,{onClick:function(){return C(!0)},className:"w-100",label:"K\xfd \xe2m (*)",error:l,value:L,inputProps:Object(a.a)(Object(a.a)(Object(a.a)({},p),O),{},{ref:function(e){f(e),x.current=e}}),onChange:function(e){S(e.target.value),b(e)},endAdornment:Object(m.jsx)(v.a,{title:"Nh\u1eadp k\xfd \xe2m (ng\u1eef \xe2m) c\u1ee7a t\u1eeb m\u1edbi. V\xed d\u1ee5: f\u0259\u02c8net\u026ak"})}),r&&Object(m.jsx)("p",{className:"text-error",children:r})]}),w&&Object(m.jsx)(c.a,{item:!0,xs:12,children:Object(m.jsx)(j,{onInput:function(e){S(L+e),x.current.focus()},onClose:function(){return C(!1)}})})]})}f.defaultProps={error:!1,errorMessage:null,resetFlag:0,valueInput:"",onChange:function(){}};t.a=f},721:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(16),o=r.n(n),c=r(4),i=r(3),s=r(27),l=r(11),d=r(32),u=r(524),m=r(19),b=r(177),p=r(492),j=r(517),v=r(175),h=r.n(v),g=r(511),f=r.n(g),O=r(508),x=r.n(O),y=r(143),N=r(507),w=r(520),C=r(6),k=r(64),E=r(48),L=r(93),S=r(547),_=r(583),W=r(555),M=r(522),R=r.n(M),P=r(62),T=r(22),I=r(2),z=L.b().shape({word:L.d().trim().required("H\xe3y nh\u1eadp m\u1ed9t t\u1eeb v\xe0o \u0111\xe2y").lowercase().max(C.c.WORD_LEN,"T\u1eeb d\xe0i t\u1ed1i \u0111\xe3 ".concat(C.c.WORD_LEN," k\xfd t\u1ef1")),mean:L.d().trim().lowercase().required("H\xe3y nh\u1eadp \xfd ngh\u0129a t\u1eeb").max(C.c.MEAN_WORD_LEN,"T\u1eeb d\xe0i t\u1ed1i \u0111\xe3 ".concat(C.c.MEAN_WORD_LEN," k\xfd t\u1ef1")),phonetic:L.d().trim().lowercase().required("H\xe3y nh\u1eadp k\xfd \xe2m c\u1ee7a t\u1eeb").max(C.c.PHONETIC_LEN,"T\u1eeb d\xe0i t\u1ed1i \u0111\xe3 ".concat(C.c.PHONETIC_LEN," k\xfd t\u1ef1")),type:L.d().required("Ch\u1ecdn lo\u1ea1i c\u1ee7a t\u1eeb").oneOf(C.k.map((function(e){return e.value}))),level:L.d().required("Ch\u1ecdn c\u1ea5p b\u1eadc c\u1ee7a t\u1eeb").oneOf(C.i.map((function(e){return e.value}))),specialty:L.d().required("Ch\u1ecdn c\u1ea5p b\u1eadc c\u1ee7a t\u1eeb").oneOf(C.j.map((function(e){return e.value}))),examples:L.d().max(C.c.EXAMPLE_WORD_LEN,"V\xed d\u1ee5 t\u1ed1i \u0111a ".concat(C.c.EXAMPLE_WORD_LEN," k\xfd t\u1ef1")),synonyms:L.d().max(C.c.SYNONYMS_WORD_LEN,"T\u1eeb \u0111\u1ed3ng ngh\u0129a t\u1ed1i \u0111a ".concat(C.c.SYNONYMS_WORD_LEN," k\xfd t\u1ef1")),antonyms:L.d().max(C.c.SYNONYMS_WORD_LEN,"T\u1eeb tr\xe1i ngh\u0129a t\u1ed1i \u0111a ".concat(C.c.SYNONYMS_WORD_LEN," k\xfd t\u1ef1")),note:L.d().max(C.c.NOTE_WORD_LEN,"Ghi ch\xfa t\u1ed1i \u0111a ".concat(C.c.NOTE_WORD_LEN," k\xfd t\u1ef1"))}),F=function(e){return Object(I.jsx)(j.a,Object(c.a)(Object(c.a)({},e),{},{item:!0,xs:12,md:6,lg:4}))},D=function(e){return Object(I.jsx)(j.a,Object(c.a)(Object(c.a)({},e),{},{item:!0,xs:12}))};function B(e){var t,r,n,o,i,s,d,u,v,g,O=e.onSubmitForm,L=e.submitting;Object(P.a)("Add word");var M=Object(W.a)(),B=Object(m.b)(),H=Object(k.d)({resolver:Object(b.a)(z)}),A=H.register,V=H.handleSubmit,Y=H.formState.errors,q=Object(a.useRef)([]),J=Object(T.f)(),G="https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png",U=Object(a.useState)(G),X=Object(l.a)(U,2),K=X[0],Q=X[1];return Object(I.jsxs)("div",{children:[Object(I.jsx)("h1",{className:M.title,children:"Th\xeam t\u1eeb m\u1edbi"}),Object(I.jsx)("div",{className:"dyno-break"}),Object(I.jsxs)("form",{onSubmit:V((function(e){O(Object(c.a)(Object(c.a)({},e),{},{topics:q.current,picture:K}))})),autoComplete:"off",children:[Object(I.jsx)(j.a,{container:!0,alignContent:"center",children:Object(I.jsxs)("div",{className:M.avtWrap,children:[Object(I.jsx)("img",{src:K||G,alt:"",className:"".concat(M.avt," w-100 h-100")}),Object(I.jsxs)("div",{className:"".concat(M.cameraIconWrap," flex-center"),children:[Object(I.jsx)(R.a,{className:M.cameraIcon}),Object(I.jsx)("input",{type:"file",className:M.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||B(Object(E.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&B(Object(E.b)("Size too large","error")),function(e){var t=new FileReader;return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))}(t).then((function(e){Q(e)}))}catch(r){throw r}},accept:"image/*"})]})]})}),Object(I.jsxs)(j.a,{className:M.grid,container:!0,spacing:3,children:[Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(y.a,{className:"w-100",label:"T\u1eeb m\u1edbi (*)",error:Boolean(Y.word),inputProps:Object(c.a)({autoFocus:!0,maxLength:C.c.WORD_LEN,name:"word"},A("word"))}),Y.word&&Object(I.jsx)("p",{className:"text-error",children:null===(t=Y.word)||void 0===t?void 0:t.message})]}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(y.a,{className:"w-100",label:"Ngh\u0129a c\u1ee7a t\u1eeb (*)",error:Boolean(Y.mean),inputProps:Object(c.a)({maxLength:C.c.MEAN_WORD_LEN,name:"mean"},A("mean"))}),Y.mean&&Object(I.jsx)("p",{className:"text-error",children:null===(r=Y.mean)||void 0===r?void 0:r.message})]}),Object(I.jsx)(_.a,{errorMessage:null===(n=Y.phonetic)||void 0===n?void 0:n.message,error:Boolean(Y.phonetic),valuePhonetic:"",inputProps:{maxLength:C.c.PHONETIC_LEN,name:"phonetic"},register:A("phonetic")}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(N.a,{className:"w-100",label:"Lo\u1ea1i t\u1eeb (*)",options:C.k,error:Boolean(Y.type),index:0,inputProps:Object(c.a)({name:"type"},A("type"))}),Y.type&&Object(I.jsx)("p",{className:"text-error",children:null===(o=Y.type)||void 0===o?void 0:o.message})]}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(N.a,{className:"w-100",label:"C\u1ea5p b\u1eadc c\u1ee7a t\u1eeb (*)",options:C.i,error:Boolean(Y.level),index:0,inputProps:Object(c.a)({name:"level"},A("level"))}),Y.level&&Object(I.jsx)("p",{className:"text-error",children:null===(i=Y.level)||void 0===i?void 0:i.message})]}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(N.a,{className:"w-100",label:"Thu\u1ed9c chuy\xean ng\xe0nh",options:C.j,error:Boolean(Y.specialty),index:0,inputProps:Object(c.a)({name:"specialty"},A("specialty"))}),Y.specialty&&Object(I.jsx)("p",{className:"text-error",children:null===(s=Y.specialty)||void 0===s?void 0:s.message})]}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(y.a,{className:"w-100",label:"C\xe2u v\xed d\u1ee5",multiline:!0,endAdornment:Object(I.jsx)(S.a,{title:"Th\xeam c\xe1c c\xe2u v\xed d\u1ee5 cho t\u1eeb tr\xean. \u0110\u1ea3m b\u1ea3o c\xf3 s\u1ef1 xu\u1ea5t hi\u1ec7n c\u1ee7a t\u1eeb \u0111\xf3 trong c\xe2u. B\u1ea1n c\xf3 th\u1ec3 th\xeam nhi\u1ec1u c\xe2u b\u1eb1ng c\xe1ch xu\u1ed1ng d\xf2ng."}),error:Boolean(Y.examples),inputProps:Object(c.a)({name:"examples"},A("examples"))}),Y.examples&&Object(I.jsx)("p",{className:"text-error",children:null===(d=Y.examples)||void 0===d?void 0:d.message})]}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(y.a,{className:"w-100",label:"C\xe1c t\u1eeb \u0111\u1ed3ng ngh\u0129a",multiline:!0,error:Boolean(Y.synonyms),inputProps:Object(c.a)({name:"synonyms"},A("synonyms"))}),Y.synonyms&&Object(I.jsx)("p",{className:"text-error",children:null===(u=Y.synonyms)||void 0===u?void 0:u.message})]}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(y.a,{className:"w-100",label:"C\xe1c t\u1eeb tr\xe1i ngh\u0129a",multiline:!0,error:Boolean(Y.antonyms),inputProps:Object(c.a)({name:"antonyms"},A("antonyms"))}),Y.antonyms&&Object(I.jsx)("p",{className:"text-error",children:null===(v=Y.antonyms)||void 0===v?void 0:v.message})]}),Object(I.jsxs)(j.a,{item:!0,xs:12,md:6,lg:4,children:[Object(I.jsx)(y.a,{className:"w-100",label:"Ghi ch\xfa",multiline:!0,endAdornment:Object(I.jsx)(S.a,{title:"Nh\u1eadp th\xeam ghi ch\xfa m\xe0 b\u1ea1n mu\u1ed1n cho t\u1eeb. Th\xeam nhi\u1ec1u d\xf2ng b\u1eb1ng c\xe1ch xu\u1ed1ng d\xf2ng."}),error:Boolean(Y.note),inputProps:Object(c.a)({name:"note"},A("note"))}),Y.note&&Object(I.jsx)("p",{className:"text-error",children:null===(g=Y.note)||void 0===g?void 0:g.message})]}),Object(I.jsx)(w.a,{onChange:function(e){return q.current=e},buttonTitle:"Th\xeam ch\u1ee7 \u0111\u1ec1",buttonWrapper:F,tagsWrapper:D})]}),Object(I.jsx)("div",{className:"dyno-break"}),Object(I.jsxs)("div",{className:"d-flex flex-end jus-content-end pt-5 w-100",children:[Object(I.jsx)(p.a,{className:"".concat(M.btn," ").concat(M.btnReset),color:"secondary",endIcon:Object(I.jsx)(f.a,{}),variant:"outlined",onClick:function(){return J.push("/admin/word")},children:"Quay l\u1ea1i"}),Object(I.jsx)(p.a,{type:"submit",className:"".concat(M.btn," _btn _btn-primary"),disabled:L,endIcon:L?Object(I.jsx)(h.a,{className:"ani-spin"}):Object(I.jsx)(x.a,{}),variant:"contained",children:"Th\xeam t\u1eeb"})]})]})]})}B.defaultProps={onSubmitForm:function(){},submitting:!1};var H=B,A=["examples","synonyms","antonyms","word","phonetic"],V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"!==typeof e||""===e)return[];var r,a=e.split("\n"),n=Object(d.a)(a);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(-1===o.toLocaleLowerCase().indexOf(t.toLocaleLowerCase()))return!1}}catch(c){n.e(c)}finally{n.f()}return a};var Y=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),r=t[0],n=t[1],d=Object(m.b)(),b=function(){var e=Object(s.a)(o.a.mark((function e(t){var r,a,s,l,m,b,p,j,v,h,g,f,O;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n(!0),r=t.examples,a=t.synonyms,s=t.antonyms,l=t.word,m=t.phonetic,b=Object(i.a)(t,A),"boolean"!==typeof(p=V(r,l))||p){e.next=8;break}return d(Object(E.b)("C\xe2u v\xed d\u1ee5 ph\u1ea3i ch\u1ee9a t\u1eeb v\u1ef1ng m\u1edbi.","warning")),n(!1),e.abrupt("return");case 8:return j=""!==a?a.split("\n"):[],v=""!==s?s.split("\n"):[],h=Object(c.a)(Object(c.a)({},b),{},{examples:p,synonyms:j,antonyms:v,word:l,phonetic:m.replaceAll("/","")}),e.next=13,u.a.postWord(h);case 13:e.sent&&(d(Object(E.b)("Created word successfully","success")),n(!1)),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(0),O=(null===(g=e.t0.response)||void 0===g||null===(f=g.data)||void 0===f?void 0:f.message)||"Error, can not create word",d(Object(E.b)(O,"error")),n(!1);case 22:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)(H,{onSubmitForm:b,submitting:r})},q=r(477),J=Object(q.a)((function(){return{root:{margin:"3.2rem 0"}}}));t.default=function(){var e=J();return Object(I.jsx)("div",{className:"container",children:Object(I.jsx)("div",{className:e.root,children:Object(I.jsx)("div",{className:"ani-fade",children:Object(I.jsx)(Y,{})})})})}}}]);
//# sourceMappingURL=13.704a5a9d.chunk.js.map