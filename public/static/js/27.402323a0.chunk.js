(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[27],{518:function(e,t,n){"use strict";var a=n(26),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),s=(0,a(n(34)).default)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=s},522:function(e,t,n){"use strict";var a=n(4),r=n(2),c=n(0),s=(n(7),n(6)),i=n(8),o=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=c.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,o=e.alignItems,l=void 0===o?"stretch":o,u=e.classes,d=e.className,b=e.component,f=void 0===b?"div":b,m=e.container,j=void 0!==m&&m,x=e.direction,v=void 0===x?"row":x,h=e.item,p=void 0!==h&&h,g=e.justify,O=e.justifyContent,w=void 0===O?"flex-start":O,k=e.lg,C=void 0!==k&&k,y=e.md,z=void 0!==y&&y,N=e.sm,S=void 0!==N&&N,q=e.spacing,M=void 0===q?0:q,Q=e.wrap,A=void 0===Q?"wrap":Q,W=e.xl,B=void 0!==W&&W,_=e.xs,I=void 0!==_&&_,E=e.zeroMinWidth,L=void 0!==E&&E,P=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(s.a)(u.root,d,j&&[u.container,0!==M&&u["spacing-xs-".concat(String(M))]],p&&u.item,L&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==A&&u["wrap-xs-".concat(String(A))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==i&&u["align-content-xs-".concat(String(i))],"flex-start"!==(g||w)&&u["justify-content-xs-".concat(String(g||w))],!1!==I&&u["grid-xs-".concat(String(I))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==z&&u["grid-md-".concat(String(z))],!1!==C&&u["grid-lg-".concat(String(C))],!1!==B&&u["grid-xl-".concat(String(B))]);return c.createElement(f,Object(r.a)({className:R,ref:t},P))})),b=Object(i.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=b},525:function(e,t,n){"use strict";var a=n(26),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),s=(0,a(n(34)).default)(c.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=s},545:function(e,t,n){"use strict";var a=n(26),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),s=(0,a(n(34)).default)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=s},559:function(e,t,n){"use strict";var a=n(3),r=n(28),c=n.n(r),s="/api/question",i={getQuestion:function(e){return c.a.get("".concat(s,"/get-question-by-id/").concat(e))},getQuestionByQuiz:function(e,t){return c.a.get("".concat(s,"/get-question-by-quiz/").concat(e))},postQuestion:function(e,t){return c.a.post("".concat(s,"/post-question-by-quiz/").concat(e),Object(a.a)({},t))},putQuestion:function(e,t){return c.a.put("".concat(s,"/put-question/").concat(e),Object(a.a)({},t))},deleteQuestionByQuiz:function(e,t){return c.a.delete("".concat(s,"/delete-question-by-quiz/").concat(e),{headers:{Authorization:t}})},deleteQuestion:function(e){return c.a.delete("".concat(s,"/delete-question-by-id/").concat(e))}};t.a=i},570:function(e,t,n){"use strict";var a=n(26),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),s=(0,a(n(34)).default)(c.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=s},740:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(16),c=n.n(r),s=n(3),i=n(27),o=n(11),l=n(180),u=n(503),d=n(522),b=n(178),f=n.n(b),m=n(525),j=n.n(m),x=n(518),v=n.n(x),h=n(145),p=n(0),g=n(64),O=n(94),w=n(20),k=n(19),C=n(48),y=n(570),z=n.n(y),N=n(56),S=n(545),q=n.n(S),M=n(488),Q=n(559),A=n(1),W=O.b().shape({content:O.d().trim(),answer1:O.d().trim(),answer2:O.d().trim(),answer3:O.d().trim()}),B=Object(M.a)((function(){return{container:{margin:"3.2rem 0"},root:{padding:"2.8rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",backgroundColor:"var(--bg-color-sec)"},title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.8rem",marginBottom:"1.2rem"},grid:{marginTop:"2.4rem",marginBottom:"2.4rem"},tooltipIcon:{fontSize:"1.6rem",color:"var(--label-color)"},btn:{marginLeft:"1rem",textTransform:"none",minWidth:"14rem"},btnReset:{borderColor:"var(--accent-color) !important",color:"var(--accent-color) !important","&:hover, &:active":{filter:"brightness(0.85)"}},sentenceInput:{minHeight:"8rem"}}}));t.default=function(){var e,t,n,r,b=B();Object(N.a)("Create quiz");var m=Object(g.d)({resolver:Object(l.a)(W)}),x=m.register,O=m.handleSubmit,y=m.formState.errors,S=Object(p.useState)(!1),M=Object(o.a)(S,2),_=M[0],I=M[1],E=Object(w.g)(),L=Object(p.useState)({content:"",answer1:"",answer2:"",answer3:"",check:[!1,!1,!1]}),P=Object(o.a)(L,2),R=P[0],V=P[1],G=Object(w.i)(),H=G.id,D=G.listen_id,T=Object(k.b)();Object(p.useEffect)((function(){return Object(i.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.getQuestion(H);case 2:t=e.sent,(n=Object(s.a)({},R)).content=t.data.question.Content,n.answer1=t.data.question.Answers[0].content,n.answer2=t.data.question.Answers[1].content,n.check[0]=t.data.question.Answers[0].isCorrect,n.check[1]=t.data.question.Answers[1].isCorrect,t.data.question.Answers[2]&&(n.answer3=null===(a=t.data.question.Answers[2])||void 0===a?void 0:a.content,n.check[2]=null===(r=t.data.question.Answers[2])||void 0===r?void 0:r.isCorrect),V(n);case 11:case"end":return e.stop()}}),e)})))(),function(){}}),[H]);var J=Object(p.useState)(-1),F=Object(o.a)(J,2),$=F[0],K=F[1],U=function(e){var t=e.target,n=t.name,r=t.value;V(Object(s.a)(Object(s.a)({},R),{},Object(a.a)({},n,r)))},X=function(e){var t=Object(s.a)({},R);t.check[$]=!0,V(t)},Y=function(){var e=Object(s.a)({},R);e.check[$]=!1,V(e)},Z=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,I(!0),t=[],n=0,""!==R.answer1.trim()&&(1==R.check[0]&&(n+=1),t.push({content:R.answer1,isCorrect:R.check[0]})),""!==R.answer2.trim()&&(1==R.check[1]&&(n+=1),t.push({content:R.answer2,isCorrect:R.check[1]})),""!==R.answer3.trim()&&(1==R.check[2]&&(n+=1),t.push({content:R.answer3,isCorrect:R.check[2]})),!(t.length<2)){e.next=12;break}return T(Object(C.b)("Question is invalid","error")),I(!1),console.log(1),e.abrupt("return");case 12:if(2!=t.length||2!=n){e.next=16;break}return T(Object(C.b)("Question is invalid","error")),I(!1),e.abrupt("return");case 16:if(!function(e){return e.every((function(e){return!1===e}))}(R.check)){e.next=22;break}T(Object(C.b)("Please check the correct answer","error")),I(!1),e.next=33;break;case 22:if(a=function(e){return e.every((function(e){return!0===e}))},console.log(a(R.check)),!a(R.check)){e.next=28;break}return T(Object(C.b)("Question is invalid","error")),I(!1),e.abrupt("return");case 28:return r={Content:R.content,Answers:t},e.next=31,Q.a.putQuestion(H,r);case 31:e.sent&&(T(Object(C.b)("Edit question successfully","success")),I(!1),console.log(D),E.push("/admin/quiz/details/".concat(D)));case 33:e.next=39;break;case 35:e.prev=35,e.t0=e.catch(0),T(Object(C.b)(e.t0.response.data.message,"error")),I(!1);case 39:case"end":return e.stop()}}),e,null,[[0,35]])})));return function(){return e.apply(this,arguments)}}();return Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:b.container,children:Object(A.jsx)("div",{className:"ani-fade",children:Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{className:b.title,children:"S\u1eeda c\xe2u h\u1ecfi"}),Object(A.jsx)("div",{className:"english-break"}),Object(A.jsxs)("form",{onSubmit:O(Z),autoComplete:"off",children:[Object(A.jsxs)(d.a,{className:b.grid,container:!0,spacing:3,children:[Object(A.jsxs)(d.a,{item:!0,xs:12,children:[Object(A.jsx)(h.a,{className:"w-100",label:"C\xe2u h\u1ecfi",value:R.content,error:Boolean(y.content),inputProps:Object(s.a)({name:"content"},x("content")),onChange:U}),y.Content&&Object(A.jsx)("p",{className:"text-error",children:null===(e=y.content)||void 0===e?void 0:e.message})]}),Object(A.jsxs)(d.a,{item:!0,xs:12,md:4,children:[Object(A.jsx)(h.a,{className:"w-100",label:"\u0110\xe1p \xe1n th\u1ee9 nh\u1ea5t",value:R.answer1,onChange:U,error:Boolean(y.answer1),inputProps:Object(s.a)({name:"answer1"},x("answer1")),endAdornment:!1===R.check[0]?Object(A.jsx)(z.a,{value:R.check[0],className:"english-setting-icon",onMouseOver:function(){return K(0)},onClick:X}):Object(A.jsx)(q.a,{className:"english-setting-icon",onMouseOver:function(){return K(0)},onClick:Y})}),y.answer1&&Object(A.jsx)("p",{className:"text-error",children:null===(t=y.answer1)||void 0===t?void 0:t.message})]}),Object(A.jsxs)(d.a,{item:!0,xs:12,md:4,children:[Object(A.jsx)(h.a,{className:"w-100",label:"\u0110\xe1p \xe1n th\u1ee9 hai",value:R.answer2,onChange:U,error:Boolean(y.answer2),inputProps:Object(s.a)({name:"answer2"},x("answer2")),endAdornment:!1===R.check[1]?Object(A.jsx)(z.a,{value:R.check[1],className:"english-setting-icon",onMouseOver:function(){return K(1)},onClick:X}):Object(A.jsx)(q.a,{className:"english-setting-icon",onMouseOver:function(){return K(1)},onClick:Y})}),y.answer2&&Object(A.jsx)("p",{className:"text-error",children:null===(n=y.answer2)||void 0===n?void 0:n.message})]}),Object(A.jsxs)(d.a,{item:!0,xs:12,md:4,children:[Object(A.jsx)(h.a,{className:"w-100",value:R.answer3,label:"\u0110\xe1p \xe1n th\u1ee9 ba",onChange:U,error:Boolean(y.answer3),inputProps:Object(s.a)({name:"answer3"},x("answer3")),endAdornment:!1===R.check[2]?Object(A.jsx)(z.a,{value:R.check[2],className:"english-setting-icon",onMouseOver:function(){return K(2)},onClick:X}):Object(A.jsx)(q.a,{className:"english-setting-icon",onMouseOver:function(){return K(2)},onClick:Y})}),y.answer3&&Object(A.jsx)("p",{className:"text-error",children:null===(r=y.answer3)||void 0===r?void 0:r.message})]})]}),Object(A.jsx)("div",{className:"english-break"}),Object(A.jsxs)("div",{className:"d-flex flex-end jus-content-end pt-5 w-100",children:[Object(A.jsx)(u.a,{className:"".concat(b.btn," ").concat(b.btnReset),color:"secondary",endIcon:Object(A.jsx)(j.a,{}),variant:"outlined",disabled:_,onClick:function(){return E.push("/admin/quiz/details/".concat(D))},children:"Quay l\u1ea1i"}),Object(A.jsx)(u.a,{type:"submit",className:"".concat(b.btn," _btn _btn-primary"),disabled:_,endIcon:_?Object(A.jsx)(f.a,{className:"ani-spin"}):Object(A.jsx)(v.a,{}),variant:"contained",children:"S\u1eeda"})]})]})]})})})})}}}]);
//# sourceMappingURL=27.402323a0.chunk.js.map