(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),s=n(23),i=n.n(s),l=n(20),j=n(11),u=n(107),o=n(111),b=n(96),O=function(e){var t=e.title,n=t||"PLACEHOLDER";return Object(r.jsx)(o.a,{children:Object(r.jsx)(b.a,{variant:"h1",align:"center",children:n})})},d=n(6),h=function(){return Object(r.jsx)("div",{children:"Courses"})},x=function(){return Object(r.jsx)("div",{children:"Store"})},p=n(8),f=n(58),g=function(e){var t=Object(c.useState)(""),n=Object(f.a)(t,2),r=n[0],a=n[1];return{type:e,value:r,onChange:function(e){a(e.target.value)},clear:function(e){e.preventDefault(),a("")}}},v=n(17),m=n.n(v),w=n(25),C=n(33),y=n.n(C),k="/api/users",L={getAll:function(){return y.a.get(k).then((function(e){return e.data}))},create:function(){var e=Object(w.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post(k,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){return{type:"SET_LOGGED",user:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_LOGGED":return null;case"SET_LOGGED":return t.user;default:return e}},D=function(){var e=Object(j.c)((function(e){return e.login})),t=Object(j.b)(),n=Object(d.f)(),c=g("text"),a=g("password"),s=g("text"),i=g("text"),l=g("text"),u=g("text"),O=g("email");return e?Object(r.jsx)(o.a,{children:Object(r.jsxs)(b.a,{variant:"h6",children:["Already Logged in as: ",e]})}):Object(r.jsxs)(o.a,{children:[Object(r.jsx)(b.a,{variant:"h4",children:"Register"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={username:c.value,firstname:s.value,lastname:i.value,address:l.value,postcode:u.value,email:O.value,password:a.value};try{L.create(r).then((function(e){console.log("Added user",e),t(S(e.username)),n.push("/")}))}catch(j){console.log(j)}},children:[Object(r.jsxs)(b.a,{paragraph:!0,children:["Username:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},c),{},{clear:null,required:!0})),Object(r.jsx)("button",{onClick:c.clear,children:"Clear"}),"Password:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},a),{},{clear:null,required:!0})),Object(r.jsx)("button",{onClick:a.clear,children:"Clear"})]}),Object(r.jsxs)(b.a,{paragraph:!0,children:["First name:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},s),{},{clear:null,required:!0})),Object(r.jsx)("button",{onClick:s.clear,children:"Clear"}),"Last name:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},i),{},{clear:null,required:!0})),Object(r.jsx)("button",{onClick:i.clear,children:"Clear"})]}),Object(r.jsxs)(b.a,{paragraph:!0,children:["Address:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},l),{},{clear:null})),Object(r.jsx)("button",{onClick:l.clear,children:"Clear"}),"Postcode:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},u),{},{clear:null})),Object(r.jsx)("button",{onClick:u.clear,children:"Clear"})]}),Object(r.jsxs)(b.a,{paragraph:!0,children:["Email:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},O),{},{clear:null,required:!0})),Object(r.jsx)("button",{onClick:O.clear,children:"Clear"})]}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})]})},A={login:function(){var e=Object(w.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=Object(j.c)((function(e){return e.login})),t=Object(j.b)(),n=Object(d.f)(),c=g("text"),a=g("password"),s=function(){var e=Object(w.a)(m.a.mark((function e(r){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,A.login({username:c.value,password:a.value});case 4:s=e.sent,localStorage.setItem("token",s.token),window.localStorage.setItem("loggedUser",JSON.stringify(s)),t(S(s.username)),n.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Exception logging in",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return e?Object(r.jsx)(o.a,{children:Object(r.jsxs)(b.a,{variant:"h6",children:["Already Logged in as: ",e]})}):Object(r.jsxs)(o.a,{children:[Object(r.jsx)(b.a,{variant:"h4",children:"Login"}),Object(r.jsxs)("form",{onSubmit:s,children:[Object(r.jsxs)(b.a,{paragraph:!0,children:["Username:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},c),{},{clear:null,required:!0})),Object(r.jsx)("button",{onClick:c.clear,children:"Clear"})]}),Object(r.jsxs)(b.a,{paragraph:!0,children:["Password:",Object(r.jsx)("input",Object(p.a)(Object(p.a)({},a),{},{clear:null,required:!0})),Object(r.jsx)("button",{onClick:a.clear,children:"Clear"})]}),Object(r.jsx)("button",{type:"submit",children:"Login"})]})]})},G=n(106),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.data;case"ADD":return t.user;default:return e}},T=function(){var e=Object(j.c)((function(e){return e.users})),t=Object(j.b)();Object(c.useEffect)((function(){t(function(){var e=Object(w.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAll();case 2:n=e.sent,t({type:"INIT",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]);return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(b.a,{variant:"h4",children:"Users"}),Object(r.jsx)("ul",{children:e?e.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(b.a,{paragraph:!0,children:[e.username," - ",e.firstname," ",e.lastname," ",e.address,"."]})},e.id)})):Object(r.jsx)(G.a,{})})]})},M=function(){return Object(r.jsx)(o.a,{className:"main-body-box",children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/courses",children:Object(r.jsx)(h,{})}),Object(r.jsx)(d.a,{path:"/store",children:Object(r.jsx)(x,{})}),Object(r.jsx)(d.a,{path:"/register",children:Object(r.jsx)(D,{})}),Object(r.jsx)(d.a,{path:"/login",children:Object(r.jsx)(I,{})}),Object(r.jsx)(d.a,{path:"/",children:Object(r.jsx)(T,{})})]})})})},R=n(108),N=n(112),U=function(){var e=Object(j.c)((function(e){return e.login})),t=Object(j.b)();return Object(r.jsxs)(R.a,{children:[Object(r.jsx)(N.a,{component:l.b,to:"/",children:"Home"}),Object(r.jsx)(N.a,{component:l.b,to:"/courses",children:"Courses"}),Object(r.jsx)(N.a,{component:l.b,to:"/store",children:"Store"}),Object(r.jsx)(N.a,{component:l.b,to:"/login",children:"Login"}),Object(r.jsx)(N.a,{component:l.b,to:"/register",children:"Register"}),e&&Object(r.jsx)(N.a,{onClick:function(e){e.preventDefault(),t({type:"CLEAR_LOGGED"}),window.localStorage.clear()},children:"Logout"})]})},J=n(109),P=function(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(b.a,{align:"center",children:["Made by  ",Object(r.jsx)(J.a,{href:"https://github.com/macwille",children:"Ville Manninen"}),". Licensed ",Object(r.jsx)(J.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})]})})},_=function(){var e=Object(j.b)();return Object(c.useEffect)((function(){var t=window.localStorage.getItem("loggedUser");if(t){var n=JSON.parse(t);e(S(n.username))}}),[e]),Object(r.jsxs)(u.a,{children:[Object(r.jsx)(O,{title:"Club Webstore",gutterBottom:!0}),Object(r.jsx)(U,{}),Object(r.jsx)(M,{}),Object(r.jsx)(P,{})]})},B=n(56),H=n(28),W=n(57),F=Object(H.combineReducers)({users:q,login:E}),V=Object(H.createStore)(F,Object(W.composeWithDevTools)(Object(H.applyMiddleware)(B.a)));i.a.render(Object(r.jsx)(j.a,{store:V,children:Object(r.jsx)(l.a,{children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(_,{})})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.152a0dda.chunk.js.map