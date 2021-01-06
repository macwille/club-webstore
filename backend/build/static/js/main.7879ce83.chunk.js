(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{132:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c(0),n=c.n(r),i=c(11),l=c.n(i),s=c(14),j=c(28),o=c(179),u=c(180),b=c(175),d=c(95),O=c(182),x=c(135),h="Club Webstore",p=c(166),m=c(168),f=c(134),v=function(e){return{type:"SET_LOGGED",user:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_LOGGED":return null;case"SET_LOGGED":return t.user;default:return e}},y=function(){var e=Object(s.c)((function(e){return e.login})),t=Object(s.b)();return Object(a.jsx)(O.a,{children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(f.a,{component:j.b,to:"/",children:"Home"}),Object(a.jsx)(f.a,{component:j.b,to:"/courses",children:"Courses"}),Object(a.jsx)(f.a,{component:j.b,to:"/store",children:"Store"}),Object(a.jsx)(f.a,{component:j.b,to:"/login",children:"Login"}),Object(a.jsx)(f.a,{component:j.b,to:"/register",children:"Register"}),e&&Object(a.jsx)(f.a,{onClick:function(e){e.preventDefault(),t({type:"CLEAR_LOGGED"}),window.localStorage.clear()},children:"Logout"})]})})})},C=function(){return Object(a.jsx)(d.a,{color:"primary",children:Object(a.jsxs)(O.a,{p:3,children:[Object(a.jsx)(O.a,{py:8,children:Object(a.jsx)(x.a,{variant:"h1",align:"center",paragraph:!0,children:h})}),Object(a.jsx)(y,{})]})})},w=c(15),k=c(169),S=c(32),E=c(7),D=c(62),A=c(29),L=c(176),q=c(183),T=c(177),I=c(173),z=c(174),G=c(170),M=c(171),W=c(172),R=Object(k.a)({courseCard:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),_=function(e){var t=e.course,c=R();return Object(a.jsxs)(G.a,{className:c.courseCard,children:[Object(a.jsxs)(M.a,{children:[Object(a.jsxs)(x.a,{variant:"h6",paragraph:!0,children:[t.name," ",Object(a.jsx)("br",{}),t.euros,",",t.cents,"\u20ac"]}),Object(a.jsxs)(x.a,{color:"textSecondary",children:["Description: ",t.name,Object(a.jsx)("br",{}),"Trainer: ",t.trainer.id]})]}),Object(a.jsx)(W.a,{children:Object(a.jsx)(f.a,{onClick:function(e){e.preventDefault()},size:"small",children:"Sign Up"})})]})},N=function(e){var t=e.courses;return t?Object(a.jsx)(O.a,{children:Object(a.jsx)(z.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"baseline",direction:"row",children:t.map((function(e){return Object(a.jsx)(z.a,{item:!0,xs:6,sm:3,children:Object(a.jsx)(_,{course:e})},e.id)}))})}):Object(a.jsx)(O.a,{children:Object(a.jsx)(I.a,{})})},B=c(17),U=c.n(B),P=c(25),J=c(23),F=c.n(J),H="/api/courses",V={getAll:function(){return F.a.get(H).then((function(e){return e.data}))},create:function(){var e=Object(P.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post(H,t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(e){return F.a.delete("".concat(H,"/").concat(e)).then(console.log("course deleted"))},update:function(e,t){return F.a.put("".concat(H,"/").concat(e),t)}},Y=c(181),K=c(184),Q=c(87),X=function(e){var t=Object(r.useState)(""),c=Object(S.a)(t,2),a=c[0],n=c[1];return{type:e,value:a,onChange:function(e){n(e.target.value)},clear:function(e){e.preventDefault(),n("")}}},Z=function(e){var t=e.courses,c=e.setCourses,n=Object(s.c)((function(e){return e.users})),i=Object(r.useState)(null),l=Object(S.a)(i,2),j=l[0],o=l[1],u=X("text"),d=X("text"),x=X("date"),h=X("time"),p=X("number"),m=X("number");return Object(a.jsx)(O.a,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var a={name:u.value,description:d.value,euros:p.value,cents:m.value,trainer:j};try{V.create(a).then((function(e){c(t.concat(e))}))}catch(r){console.log(r)}},children:Object(a.jsxs)(z.a,{container:!0,spacing:5,children:[Object(a.jsxs)(z.a,{item:!0,xs:12,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Course name",variant:"outlined"},u),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:u.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:12,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Description",variant:"outlined"},d),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:d.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:3,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Euros",variant:"outlined"},p),{},{clear:null,min:"0",required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:p.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:8,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Cents",variant:"outlined"},m),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:m.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:3,children:[Object(a.jsx)(K.a,{children:"Date"}),Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({variant:"outlined"},x),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:x.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:8,children:[Object(a.jsx)(K.a,{children:"Time"}),Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({variant:"outlined"},h),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:h.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:12,children:[Object(a.jsx)(K.a,{children:"Trainer"}),Object(a.jsxs)(Q.a,{value:j,onChange:function(e){o(e.target.value)},children:[Object(a.jsx)("option",{"aria-label":"None",value:null}),n&&n.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.username},e.id)}))]})]}),Object(a.jsx)(z.a,{item:!0,xs:12,children:Object(a.jsx)(f.a,{variant:"contained",color:"primary",type:"submit",children:"Create"})})]})})})})},$=function(e){var t=e.children,c=e.value,r=e.index,n=Object(D.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(E.a)(Object(E.a)({role:"tabpanel",hidden:c!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:c===r&&Object(a.jsx)(O.a,{p:3,children:Object(a.jsx)(x.a,{children:t})})}))},ee=function(){var e=Object(r.useState)(null),t=Object(S.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(0),l=Object(S.a)(i,2),s=l[0],j=l[1];Object(r.useEffect)((function(){V.getAll().then((function(e){n(e)}))}),[]);return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(A.a,{children:Object(a.jsxs)("title",{children:["Courses - ",h]})}),Object(a.jsx)(L.a,{color:"primary",position:"static",children:Object(a.jsxs)(q.a,{value:s,onChange:function(e,t){j(t)},children:[Object(a.jsx)(T.a,{label:"Courses"}),Object(a.jsx)(T.a,{label:"My Courses"}),Object(a.jsx)(T.a,{label:"Create"})]})}),Object(a.jsxs)(O.a,{p:3,pt:8,children:[Object(a.jsx)($,{value:s,index:0,children:Object(a.jsx)(N,{courses:c})}),Object(a.jsx)($,{value:s,index:1,children:"My Courses"}),Object(a.jsx)($,{value:s,index:2,children:Object(a.jsx)(Z,{courses:c,setCourses:n})})]})]})},te="/api/products",ce={getAll:function(){return F.a.get(te).then((function(e){return e.data}))},create:function(){var e=Object(P.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post(te,t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ae=function(e){var t=e.products,c=e.setProducts,r=X("text"),n=X("text"),i=X("number"),l=X("number");return Object(a.jsx)(O.a,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var a={name:r.value,description:n.value,euros:i.value,cents:l.value};try{ce.create(a).then((function(e){console.log("Added product",e),c(t.concat(e))}))}catch(s){console.log(s)}},children:Object(a.jsxs)(z.a,{container:!0,spacing:5,children:[Object(a.jsxs)(z.a,{item:!0,xs:12,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Name",variant:"outlined"},r),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:r.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:12,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Description",variant:"outlined"},n),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:n.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:3,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Euros",variant:"outlined"},i),{},{clear:null,min:"0",required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:i.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:3,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Cents",variant:"outlined"},l),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(f.a,{color:"primary",size:"small",onClick:l.clear,children:"Clear"})]}),Object(a.jsx)(z.a,{item:!0,xs:12,children:Object(a.jsx)(f.a,{variant:"contained",color:"primary",type:"submit",children:"Create"})})]})})})})},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return e.concat(t.item);case"REMOVE_ITEM":return e.filter((function(e){return e.id===t.item}));case"CLEAR_CART":return[];default:return e}},ne=Object(k.a)({courseCard:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),ie=function(e){var t=e.product,c=ne(),r=Object(s.b)();return Object(a.jsxs)(G.a,{className:c.productCard,children:[Object(a.jsxs)(M.a,{children:[Object(a.jsx)(x.a,{variant:"h6",children:t.name}),Object(a.jsxs)(x.a,{children:[t.euros,",",t.cents,"\u20ac"]})]}),Object(a.jsx)(W.a,{children:Object(a.jsx)(f.a,{onClick:function(e){e.preventDefault(),r({type:"ADD_ITEM",item:t})},size:"small",children:"Add to Cart"})})]})},le=function(e){var t=e.products;return t?Object(a.jsx)(O.a,{children:Object(a.jsx)(z.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"baseline",direction:"row",children:t.map((function(e){return Object(a.jsx)(z.a,{item:!0,xs:6,sm:3,children:Object(a.jsx)(ie,{product:e})},e.id)}))})}):Object(a.jsx)(O.a,{children:Object(a.jsx)(I.a,{})})},se=function(){var e=Object(s.c)((function(e){return e.cart}));return Object(a.jsx)(O.a,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x.a,{variant:"h4",paragraph:!0,children:"Your Cart"}),Object(a.jsxs)(x.a,{children:["You have ",e.length," items in your cart."]}),Object(a.jsx)(le,{products:e})]})})},je=function(e){var t=e.children,c=e.value,r=e.index,n=Object(D.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(E.a)(Object(E.a)({role:"tabpanel",hidden:c!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:c===r&&Object(a.jsx)(O.a,{p:3,children:Object(a.jsx)(x.a,{children:t})})}))},oe=function(){var e=Object(r.useState)(null),t=Object(S.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(0),l=Object(S.a)(i,2),s=l[0],j=l[1];Object(r.useEffect)((function(){ce.getAll().then((function(e){n(e)}))}),[]);return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(A.a,{children:Object(a.jsxs)("title",{children:["Store - ",h]})}),Object(a.jsx)(L.a,{color:"primary",position:"static",children:Object(a.jsxs)(q.a,{value:s,onChange:function(e,t){j(t)},children:[Object(a.jsx)(T.a,{label:"Store"}),Object(a.jsx)(T.a,{label:"Create"}),Object(a.jsx)(T.a,{label:"Cart"})]})}),Object(a.jsxs)(O.a,{p:3,pt:8,children:[Object(a.jsx)(je,{value:s,index:0,children:Object(a.jsx)(le,{products:c})}),Object(a.jsx)(je,{value:s,index:1,children:Object(a.jsx)(ae,{products:c,setProducts:n})}),Object(a.jsx)(je,{value:s,index:2,children:Object(a.jsx)(se,{})})]})]})},ue="/api/users",be={getAll:function(){return F.a.get(ue).then((function(e){return e.data}))},create:function(){var e=Object(P.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post(ue,t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(){var e=Object(s.c)((function(e){return e.login})),t=Object(s.b)(),c=Object(w.f)(),r=X("text"),n=X("password"),i=X("text"),l=X("text"),j=X("text"),o=X("text"),u=X("email");return e?Object(a.jsx)(O.a,{children:Object(a.jsxs)(x.a,{variant:"h6",children:["Already Logged in as: ",e]})}):Object(a.jsxs)(b.a,{children:[Object(a.jsx)(A.a,{children:Object(a.jsxs)("title",{children:["Register - ",h]})}),Object(a.jsx)(O.a,{pb:8,children:Object(a.jsx)(x.a,{variant:"h4",children:"Register"})}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var a={username:r.value,firstname:i.value,lastname:l.value,address:j.value,postcode:o.value,email:u.value,password:n.value};try{be.create(a).then((function(e){t(v(e.username)),c.push("/")}))}catch(s){console.log(s)}},autoComplete:"off",children:Object(a.jsxs)(z.a,{container:!0,spacing:6,children:[Object(a.jsx)(z.a,{item:!0,xs:12,children:Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Username",variant:"outlined"},r),{},{clear:null,autoFocus:!0,fullWidth:!0,required:!0}))}),Object(a.jsx)(z.a,{item:!0,xs:12,children:Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Password",variant:"outlined"},n),{},{clear:null,fullWidth:!0,required:!0}))}),Object(a.jsx)(z.a,{item:!0,xs:6,children:Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"First name",variant:"outlined"},i),{},{clear:null,required:!0}))}),Object(a.jsx)(z.a,{item:!0,xs:6,children:Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Last name",variant:"outlined"},l),{},{clear:null,required:!0}))}),Object(a.jsx)(z.a,{item:!0,xs:6,children:Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Address",variant:"outlined"},j),{},{clear:null}))}),Object(a.jsx)(z.a,{item:!0,xs:6,children:Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Postcode",variant:"outlined"},o),{},{clear:null}))}),Object(a.jsx)(z.a,{item:!0,xs:12,children:Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Email",variant:"outlined"},u),{},{clear:null}))}),Object(a.jsx)(z.a,{item:!0,xs:6,children:Object(a.jsx)(f.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})}),Object(a.jsx)(z.a,{item:!0,xs:6,children:Object(a.jsx)(f.a,{onClick:function(e){r.clear(e),n.clear(e),i.clear(e),l.clear(e),j.clear(e),o.clear(e),u.clear(e)},variant:"contained",color:"primary",children:"Clear"})})]})})]})},Oe={login:function(){var e=Object(P.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("/api/login",t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){var e=Object(s.c)((function(e){return e.login})),t=Object(s.b)(),c=Object(w.f)(),r=X("text"),n=X("password"),i=function(){var e=Object(P.a)(U.a.mark((function e(a){var i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,Oe.login({username:r.value,password:n.value});case 4:i=e.sent,localStorage.setItem("token",i.token),window.localStorage.setItem("loggedUser",JSON.stringify(i)),t(v(i.username)),c.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Exception logging in",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return e?Object(a.jsx)(b.a,{children:Object(a.jsxs)(x.a,{variant:"h6",children:["Already Logged in as: ",e]})}):Object(a.jsxs)(b.a,{children:[Object(a.jsx)(A.a,{children:Object(a.jsxs)("title",{children:["Login - ",h]})}),Object(a.jsx)(O.a,{pb:8,children:Object(a.jsx)(x.a,{variant:"h4",children:"Login"})}),Object(a.jsx)("form",{onSubmit:i,children:Object(a.jsxs)(z.a,{container:!0,spacing:6,children:[Object(a.jsxs)(z.a,{item:!0,xs:12,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Username",variant:"outlined"},r),{},{clear:null,autoFocus:!0,fullWidth:!0,required:!0})),Object(a.jsx)(f.a,{color:"primary",onClick:r.clear,children:"Clear"})]}),Object(a.jsxs)(z.a,{item:!0,xs:12,children:[Object(a.jsx)(Y.a,Object(E.a)(Object(E.a)({label:"Password",variant:"outlined"},n),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(f.a,{color:"primary",onClick:n.clear,children:"Clear"})]}),Object(a.jsx)(z.a,{item:!0,xs:12,children:Object(a.jsx)(f.a,{variant:"contained",color:"primary",type:"submit",children:"Login"})})]})})]})},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.data;case"ADD":return t.user;default:return e}},pe=function(){var e=Object(s.c)((function(e){return e.users})),t=Object(s.b)();Object(r.useEffect)((function(){t(function(){var e=Object(P.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.getAll();case 2:c=e.sent,t({type:"INIT",data:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]);return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(A.a,{children:Object(a.jsx)("title",{children:h})}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x.a,{variant:"h4",children:"Users"}),Object(a.jsx)("ul",{children:e?e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)(x.a,{paragraph:!0,children:[e.username," - ",e.firstname," ",e.lastname," ",e.address,"."]})},e.id)})):Object(a.jsx)(I.a,{})})]})]})},me=Object(k.a)({mainBody:{minHeight:"40em",marginTop:"2em"}}),fe=function(){var e=me();return Object(a.jsx)(d.a,{className:e.mainBody,children:Object(a.jsxs)(w.c,{children:[Object(a.jsx)(w.a,{path:"/courses",children:Object(a.jsx)(ee,{})}),Object(a.jsx)(w.a,{path:"/store",children:Object(a.jsx)(oe,{})}),Object(a.jsx)(w.a,{path:"/register",children:Object(a.jsx)(de,{})}),Object(a.jsx)(w.a,{path:"/login",children:Object(a.jsx)(xe,{})}),Object(a.jsx)(w.a,{path:"/",children:Object(a.jsx)(pe,{})})]})})},ve=c(178),ge=function(){return Object(a.jsx)(O.a,{pb:"2em",pt:"40em",children:Object(a.jsxs)(x.a,{align:"center",children:["Made by Ville Manninen. Licensed ",Object(a.jsx)(ve.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})]})})},ye=c(92),Ce=c(88),we=c.n(Ce),ke=c(89),Se=c.n(ke),Ee=Object(ye.a)({spacing:4,palette:{primary:{main:we.a[500]},secondary:{main:Se.a[500]}}}),De=function(){var e=Object(s.b)();return Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedUser");if(t){var c=JSON.parse(t);e(v(c.username))}}),[e]),Object(a.jsx)(j.a,{children:Object(a.jsxs)(o.a,{theme:Ee,children:[Object(a.jsx)(u.a,{}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(C,{gutterBottom:!0}),Object(a.jsx)(fe,{}),Object(a.jsx)(ge,{})]})]})})},Ae=c(90),Le=c(42),qe=c(91),Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_LOGGED":return null;case"SET_LOGGED":return t.message;default:return e}},Ie=Object(Le.combineReducers)({users:he,login:g,cart:re,notification:Te}),ze=Object(Le.createStore)(Ie,Object(qe.composeWithDevTools)(Object(Le.applyMiddleware)(Ae.a)));l.a.render(Object(a.jsx)(s.a,{store:ze,children:Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(De,{})})}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.7879ce83.chunk.js.map