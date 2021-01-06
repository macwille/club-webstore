(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c(0),n=c.n(r),i=c(11),l=c.n(i),s=c(28),j=c(14),o=c(176),u=c(177),b=c(172),d=c(92),O=c(179),x=c(132),h=c(163),p=c(165),m=c(131),f=function(e){return{type:"SET_LOGGED",user:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_LOGGED":return null;case"SET_LOGGED":return t.user;default:return e}},g=function(){var e=Object(j.c)((function(e){return e.login})),t=Object(j.b)();return Object(a.jsx)(O.a,{children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(m.a,{component:s.b,to:"/",children:"Home"}),Object(a.jsx)(m.a,{component:s.b,to:"/courses",children:"Courses"}),Object(a.jsx)(m.a,{component:s.b,to:"/store",children:"Store"}),Object(a.jsx)(m.a,{component:s.b,to:"/login",children:"Login"}),Object(a.jsx)(m.a,{component:s.b,to:"/register",children:"Register"}),e&&Object(a.jsx)(m.a,{onClick:function(e){e.preventDefault(),t({type:"CLEAR_LOGGED"}),window.localStorage.clear()},children:"Logout"})]})})})},y=function(e){var t=e.title,c=t||"PLACEHOLDER";return Object(a.jsx)(d.a,{color:"primary",children:Object(a.jsxs)(O.a,{p:3,children:[Object(a.jsx)(O.a,{py:8,children:Object(a.jsx)(x.a,{variant:"h1",align:"center",paragraph:!0,children:c})}),Object(a.jsx)(g,{})]})})},C=c(15),w=c(166),k=c(31),S=c(7),A=c(60),E=c(173),D=c(180),L=c(174),q=c(170),I=c(171),T=c(167),z=c(168),M=c(169),W=Object(w.a)({courseCard:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),N=function(e){var t=e.course;console.log("Course",t);var c=W();return Object(a.jsxs)(T.a,{className:c.courseCard,children:[Object(a.jsxs)(z.a,{children:[Object(a.jsxs)(x.a,{variant:"h6",paragraph:!0,children:[t.name," ",Object(a.jsx)("br",{}),t.euros,",",t.cents,"\u20ac"]}),Object(a.jsxs)(x.a,{color:"textSecondary",children:["Description: ",t.name,Object(a.jsx)("br",{}),"Trainer: ",t.trainer.id]})]}),Object(a.jsx)(M.a,{children:Object(a.jsx)(m.a,{onClick:function(e){e.preventDefault(),console.log("Add product to cart:",t)},size:"small",children:"Sign Up"})})]})},R=function(e){var t=e.courses;return t?Object(a.jsx)(O.a,{children:Object(a.jsx)(I.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"baseline",direction:"row",children:t.map((function(e){return Object(a.jsx)(I.a,{item:!0,xs:6,sm:3,children:Object(a.jsx)(N,{course:e})},e.id)}))})}):Object(a.jsx)(O.a,{children:Object(a.jsx)(q.a,{})})},G=c(17),_=c.n(G),U=c(25),B=c(23),P=c.n(B),J="/api/courses",F={getAll:function(){return P.a.get(J).then((function(e){return e.data}))},create:function(){var e=Object(U.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post(J,t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(e){return P.a.delete("".concat(J,"/").concat(e)).then(console.log("course deleted"))},update:function(e,t){return P.a.put("".concat(J,"/").concat(e),t)}},H=c(178),V=c(181),Y=c(84),K=function(e){var t=Object(r.useState)(""),c=Object(k.a)(t,2),a=c[0],n=c[1];return{type:e,value:a,onChange:function(e){n(e.target.value)},clear:function(e){e.preventDefault(),n("")}}},Q=function(e){var t=e.courses,c=e.setCourses,n=Object(j.c)((function(e){return e.users})),i=Object(r.useState)(null),l=Object(k.a)(i,2),s=l[0],o=l[1],u=K("text"),d=K("text"),x=K("date"),h=K("time"),p=K("number"),f=K("number");console.log("Users",n),console.log("Selected",s);return Object(a.jsx)(O.a,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var a={name:u.value,description:d.value,euros:p.value,cents:f.value,trainer:s};try{F.create(a).then((function(e){console.log("Added course",e),c(t.concat(e))}))}catch(r){console.log(r)}},children:Object(a.jsxs)(I.a,{container:!0,spacing:5,children:[Object(a.jsxs)(I.a,{item:!0,xs:12,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Course name",variant:"outlined"},u),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:u.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:12,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Description",variant:"outlined"},d),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:d.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:3,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Euros",variant:"outlined"},p),{},{clear:null,min:"0",required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:p.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:8,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Cents",variant:"outlined"},f),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:f.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:3,children:[Object(a.jsx)(V.a,{children:"Date"}),Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({variant:"outlined"},x),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:x.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:8,children:[Object(a.jsx)(V.a,{children:"Time"}),Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({variant:"outlined"},h),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:h.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:12,children:[Object(a.jsx)(V.a,{children:"Trainer"}),Object(a.jsxs)(Y.a,{value:s,onChange:function(e){o(e.target.value)},children:[Object(a.jsx)("option",{"aria-label":"None",value:null}),n&&n.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.username},e.id)}))]})]}),Object(a.jsx)(I.a,{item:!0,xs:12,children:Object(a.jsx)(m.a,{variant:"contained",color:"primary",type:"submit",children:"Create"})})]})})})})},X=function(e){var t=e.children,c=e.value,r=e.index,n=Object(A.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(S.a)(Object(S.a)({role:"tabpanel",hidden:c!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:c===r&&Object(a.jsx)(O.a,{p:3,children:Object(a.jsx)(x.a,{children:t})})}))},Z=function(){var e=Object(r.useState)(null),t=Object(k.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(0),l=Object(k.a)(i,2),s=l[0],j=l[1];Object(r.useEffect)((function(){F.getAll().then((function(e){n(e)}))}),[]);return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(E.a,{color:"primary",position:"static",children:Object(a.jsxs)(D.a,{value:s,onChange:function(e,t){j(t)},children:[Object(a.jsx)(L.a,{label:"Courses"}),Object(a.jsx)(L.a,{label:"My Courses"}),Object(a.jsx)(L.a,{label:"Create"})]})}),Object(a.jsxs)(O.a,{p:3,pt:8,children:[Object(a.jsx)(X,{value:s,index:0,children:Object(a.jsx)(R,{courses:c})}),Object(a.jsx)(X,{value:s,index:1,children:"My Courses"}),Object(a.jsx)(X,{value:s,index:2,children:Object(a.jsx)(Q,{courses:c,setCourses:n})})]})]})},$="/api/products",ee={getAll:function(){return P.a.get($).then((function(e){return e.data}))},create:function(){var e=Object(U.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post($,t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=function(e){var t=e.products,c=e.setProducts,r=K("text"),n=K("text"),i=K("number"),l=K("number");return Object(a.jsx)(O.a,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var a={name:r.value,description:n.value,euros:i.value,cents:l.value};try{ee.create(a).then((function(e){console.log("Added product",e),c(t.concat(e))}))}catch(s){console.log(s)}},children:Object(a.jsxs)(I.a,{container:!0,spacing:5,children:[Object(a.jsxs)(I.a,{item:!0,xs:12,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Name",variant:"outlined"},r),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:r.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:12,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Description",variant:"outlined"},n),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:n.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:3,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Euros",variant:"outlined"},i),{},{clear:null,min:"0",required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:i.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:3,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Cents",variant:"outlined"},l),{},{clear:null,min:"0",max:"99",required:!0})),Object(a.jsx)(m.a,{color:"primary",size:"small",onClick:l.clear,children:"Clear"})]}),Object(a.jsx)(I.a,{item:!0,xs:12,children:Object(a.jsx)(m.a,{variant:"contained",color:"primary",type:"submit",children:"Create"})})]})})})})},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action",t),t.type){case"ADD_ITEM":return e.concat(t.item);case"REMOVE_ITEM":return e.filter((function(e){return e.id===t.item}));case"CLEAR_CART":return[];default:return e}},ae=Object(w.a)({courseCard:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),re=function(e){var t=e.product,c=ae(),r=Object(j.b)();return Object(a.jsxs)(T.a,{className:c.productCard,children:[Object(a.jsxs)(z.a,{children:[Object(a.jsx)(x.a,{variant:"h6",children:t.name}),Object(a.jsxs)(x.a,{children:[t.euros,",",t.cents,"\u20ac"]})]}),Object(a.jsx)(M.a,{children:Object(a.jsx)(m.a,{onClick:function(e){e.preventDefault(),r({type:"ADD_ITEM",item:t}),console.log("Add product to cart:",t)},size:"small",children:"Add to Cart"})})]})},ne=function(e){var t=e.products;return t?Object(a.jsx)(O.a,{children:Object(a.jsx)(I.a,{container:!0,spacing:3,justify:"flex-start",alignItems:"baseline",direction:"row",children:t.map((function(e){return Object(a.jsx)(I.a,{item:!0,xs:6,sm:3,children:Object(a.jsx)(re,{product:e})},e.id)}))})}):Object(a.jsx)(O.a,{children:Object(a.jsx)(q.a,{})})},ie=function(){var e=Object(j.c)((function(e){return e.cart}));return Object(a.jsx)(O.a,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x.a,{variant:"h4",paragraph:!0,children:"Your Cart"}),Object(a.jsxs)(x.a,{children:["You have ",e.length," items in your cart."]}),Object(a.jsx)(ne,{products:e})]})})},le=function(e){var t=e.children,c=e.value,r=e.index,n=Object(A.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(S.a)(Object(S.a)({role:"tabpanel",hidden:c!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:c===r&&Object(a.jsx)(O.a,{p:3,children:Object(a.jsx)(x.a,{children:t})})}))},se=function(){var e=Object(r.useState)(null),t=Object(k.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(0),l=Object(k.a)(i,2),s=l[0],j=l[1];Object(r.useEffect)((function(){ee.getAll().then((function(e){n(e)}))}),[]);return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(E.a,{color:"primary",position:"static",children:Object(a.jsxs)(D.a,{value:s,onChange:function(e,t){j(t)},children:[Object(a.jsx)(L.a,{label:"Store"}),Object(a.jsx)(L.a,{label:"Create"}),Object(a.jsx)(L.a,{label:"Cart"})]})}),Object(a.jsxs)(O.a,{p:3,pt:8,children:[Object(a.jsx)(le,{value:s,index:0,children:Object(a.jsx)(ne,{products:c})}),Object(a.jsx)(le,{value:s,index:1,children:Object(a.jsx)(te,{products:c,setProducts:n})}),Object(a.jsx)(le,{value:s,index:2,children:Object(a.jsx)(ie,{})})]})]})},je="/api/users",oe={getAll:function(){return P.a.get(je).then((function(e){return e.data}))},create:function(){var e=Object(U.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post(je,t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ue=function(){var e=Object(j.c)((function(e){return e.login})),t=Object(j.b)(),c=Object(C.f)(),r=K("text"),n=K("password"),i=K("text"),l=K("text"),s=K("text"),o=K("text"),u=K("email");return e?Object(a.jsx)(O.a,{children:Object(a.jsxs)(x.a,{variant:"h6",children:["Already Logged in as: ",e]})}):Object(a.jsxs)(b.a,{children:[Object(a.jsx)(O.a,{pb:8,children:Object(a.jsx)(x.a,{variant:"h4",children:"Register"})}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault();var a={username:r.value,firstname:i.value,lastname:l.value,address:s.value,postcode:o.value,email:u.value,password:n.value};try{oe.create(a).then((function(e){console.log("Added user",e),t(f(e.username)),c.push("/")}))}catch(j){console.log(j)}},autoComplete:"off",children:Object(a.jsxs)(I.a,{container:!0,spacing:6,children:[Object(a.jsx)(I.a,{item:!0,xs:12,children:Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Username",variant:"outlined"},r),{},{clear:null,autoFocus:!0,fullWidth:!0,required:!0}))}),Object(a.jsx)(I.a,{item:!0,xs:12,children:Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Password",variant:"outlined"},n),{},{clear:null,fullWidth:!0,required:!0}))}),Object(a.jsx)(I.a,{item:!0,xs:6,children:Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"First name",variant:"outlined"},i),{},{clear:null,required:!0}))}),Object(a.jsx)(I.a,{item:!0,xs:6,children:Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Last name",variant:"outlined"},l),{},{clear:null,required:!0}))}),Object(a.jsx)(I.a,{item:!0,xs:6,children:Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Address",variant:"outlined"},s),{},{clear:null}))}),Object(a.jsx)(I.a,{item:!0,xs:6,children:Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Postcode",variant:"outlined"},o),{},{clear:null}))}),Object(a.jsx)(I.a,{item:!0,xs:12,children:Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Email",variant:"outlined"},u),{},{clear:null}))}),Object(a.jsx)(I.a,{item:!0,xs:6,children:Object(a.jsx)(m.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})}),Object(a.jsx)(I.a,{item:!0,xs:6,children:Object(a.jsx)(m.a,{onClick:function(e){r.clear(e),n.clear(e),i.clear(e),l.clear(e),s.clear(e),o.clear(e),u.clear(e)},variant:"contained",color:"primary",children:"Clear"})})]})})]})},be={login:function(){var e=Object(U.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("/api/login",t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(){var e=Object(j.c)((function(e){return e.login})),t=Object(j.b)(),c=Object(C.f)(),r=K("text"),n=K("password"),i=function(){var e=Object(U.a)(_.a.mark((function e(a){var i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,be.login({username:r.value,password:n.value});case 4:i=e.sent,localStorage.setItem("token",i.token),window.localStorage.setItem("loggedUser",JSON.stringify(i)),t(f(i.username)),c.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Exception logging in",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return e?Object(a.jsx)(b.a,{children:Object(a.jsxs)(x.a,{variant:"h6",children:["Already Logged in as: ",e]})}):Object(a.jsxs)(b.a,{children:[Object(a.jsx)(O.a,{pb:8,children:Object(a.jsx)(x.a,{variant:"h4",children:"Login"})}),Object(a.jsx)("form",{onSubmit:i,children:Object(a.jsxs)(I.a,{container:!0,spacing:6,children:[Object(a.jsxs)(I.a,{item:!0,xs:12,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Username",variant:"outlined"},r),{},{clear:null,autoFocus:!0,fullWidth:!0,required:!0})),Object(a.jsx)(m.a,{color:"primary",onClick:r.clear,children:"Clear"})]}),Object(a.jsxs)(I.a,{item:!0,xs:12,children:[Object(a.jsx)(H.a,Object(S.a)(Object(S.a)({label:"Password",variant:"outlined"},n),{},{clear:null,fullWidth:!0,required:!0})),Object(a.jsx)(m.a,{color:"primary",onClick:n.clear,children:"Clear"})]}),Object(a.jsx)(I.a,{item:!0,xs:12,children:Object(a.jsx)(m.a,{variant:"contained",color:"primary",type:"submit",children:"Login"})})]})})]})},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.data;case"ADD":return t.user;default:return e}},xe=function(){var e=Object(j.c)((function(e){return e.users})),t=Object(j.b)();Object(r.useEffect)((function(){t(function(){var e=Object(U.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.getAll();case 2:c=e.sent,t({type:"INIT",data:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]);return Object(a.jsx)(O.a,{children:Object(a.jsxs)(b.a,{children:[Object(a.jsx)(x.a,{variant:"h4",children:"Users"}),Object(a.jsx)("ul",{children:e?e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)(x.a,{paragraph:!0,children:[e.username," - ",e.firstname," ",e.lastname," ",e.address,"."]})},e.id)})):Object(a.jsx)(q.a,{})})]})})},he=Object(w.a)({mainBody:{minHeight:"40em",marginTop:"2em"}}),pe=function(){var e=he();return Object(a.jsx)(d.a,{className:e.mainBody,children:Object(a.jsxs)(C.c,{children:[Object(a.jsx)(C.a,{path:"/courses",children:Object(a.jsx)(Z,{})}),Object(a.jsx)(C.a,{path:"/store",children:Object(a.jsx)(se,{})}),Object(a.jsx)(C.a,{path:"/register",children:Object(a.jsx)(ue,{})}),Object(a.jsx)(C.a,{path:"/login",children:Object(a.jsx)(de,{})}),Object(a.jsx)(C.a,{path:"/",children:Object(a.jsx)(xe,{})})]})})},me=c(175),fe=function(){return Object(a.jsx)(O.a,{pb:"2em",pt:"40em",children:Object(a.jsxs)(x.a,{align:"center",children:["Made by Ville Manninen. Licensed ",Object(a.jsx)(me.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})]})})},ve=c(89),ge=c(85),ye=c.n(ge),Ce=c(86),we=c.n(Ce),ke=Object(ve.a)({spacing:4,palette:{primary:{main:ye.a[500]},secondary:{main:we.a[500]}}}),Se=function(){var e=Object(j.b)();return Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedUser");if(t){var c=JSON.parse(t);e(f(c.username))}}),[e]),console.log("App using theme:",ke),Object(a.jsxs)(o.a,{theme:ke,children:[Object(a.jsx)(u.a,{}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(y,{title:"Club Webstore",gutterBottom:!0}),Object(a.jsx)(pe,{}),Object(a.jsx)(fe,{})]})]})},Ae=c(87),Ee=c(41),De=c(88),Le=Object(Ee.combineReducers)({users:Oe,login:v,cart:ce}),qe=Object(Ee.createStore)(Le,Object(De.composeWithDevTools)(Object(Ee.applyMiddleware)(Ae.a)));l.a.render(Object(a.jsx)(j.a,{store:qe,children:Object(a.jsx)(s.a,{children:Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(Se,{})})})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.490d6641.chunk.js.map