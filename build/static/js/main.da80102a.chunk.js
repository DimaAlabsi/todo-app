(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{264:function(e,t){},266:function(e,t){},281:function(e,t){},283:function(e,t){},311:function(e,t){},313:function(e,t){},314:function(e,t){},319:function(e,t){},321:function(e,t){},327:function(e,t){},329:function(e,t){},348:function(e,t){},360:function(e,t){},363:function(e,t){},380:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n(15),c=n(17),r=n(16),o=n(0),s=n.n(o),l=n(12),u=n.n(l),j=n(21),d=n(1),b=s.a.createContext();var O=function(e){var t=Object(o.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],c=Object(o.useState)(2),r=Object(j.a)(c,2),s=r[0],l=r[1],u=Object(o.useState)("do"),O=Object(j.a)(u,2),p=O[0],h=O[1],f={display:a,numOfItems:s,defaultSort:p,setDisplay:i,setNumOfItems:l,setDefaultSort:h};return Object(o.useEffect)((function(){var e=localStorage.getItem("SettingForm"),t=JSON.parse(e);t&&l(Number(t.numberOfItem)),localStorage.clear()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(b.Provider,{value:f,children:e.children})})},p=n(385),h=n(47),f=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(p.c,{class:"bp3-navbar bp3-dark",children:Object(d.jsxs)(p.c.Group,{align:h.a.LEFT,children:[Object(d.jsx)(p.c.Heading,{children:"TO DO List Manager \ud83d\udcd4"}),Object(d.jsx)(p.c.Divider,{})]})})}}]),n}(o.Component),m=f,x=n(20),g=n(174),v=n(93),S=function(e){var t=Object(o.useState)({}),n=Object(j.a)(t,2),a=n[0],i=n[1];return{handleChange:function(e){e.persist(),i((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(x.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(a)},values:a}},C=n(173),y=n.n(C);var T=function(e){var t=Object(o.useContext)(b),n=Object(o.useState)(0),a=Object(j.a)(n,2),i=a[0],c=a[1],r=t.numOfItems,s=i*r,l=e.list.slice(s,s+r).map((function(t){return Object(d.jsxs)("div",{style:{width:"650px",margin:"15px"},children:[Object(d.jsx)("p",{children:t.text}),Object(d.jsx)("p",{children:Object(d.jsxs)("small",{children:["Assigned to: ",t.assignee]})}),Object(d.jsx)("p",{children:Object(d.jsxs)("small",{children:["Difficulty: ",t.difficulty]})}),Object(d.jsxs)(p.a,{onClick:function(){return e.toggleComplete(t.id)},children:["Complete: ",t.complete.toString()]}),Object(d.jsx)(p.a,{onClick:function(){return e.deleteItem(t.id)},type:"submit",intent:"danger",text:"delete"})]},t.id)})),u=Math.ceil(e.list.length/r);return Object(d.jsxs)(d.Fragment,{children:[l,Object(d.jsx)(y.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:u,onPageChange:function(e){var t=e.selected;c(t)},containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]})},D=n(386),E=n(26),k=n(49),_=n(61),I=n(94),w=n.n(I),L=n(95),N=n.n(L),A={admin:{password:"password",name:"Administrator",role:"admin",capabilities:["create","read","update","delete"]},editor:{password:"password",name:"Editor",role:"editor",capabilities:["read","update"]},writer:{password:"password",name:"Writer",role:"writer",capabilities:["create"]}},P=s.a.createContext(),R=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).can=function(e){var t,n,a,c;return null===(t=Object(_.a)(i))||void 0===t||null===(n=t.state)||void 0===n||null===(a=n.user)||void 0===a||null===(c=a.capabilities)||void 0===c?void 0:c.includes(e)},i.login=function(e,t){if(A[e]){var n=N.a.sign(A[e],Object({NODE_ENV:"production",PUBLIC_URL:"/todo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SECRET||"Dima");i.validateToken(n)}},i.logout=function(){i.setLoginState(!1,null,{})},i.validateToken=function(e){try{var t=N.a.verify(e,Object({NODE_ENV:"production",PUBLIC_URL:"/todo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SECRET||"Dima");i.setLoginState(!0,e,t)}catch(n){i.setLoginState(!1,null,{}),console.log("Token Validation Error",n)}},i.setLoginState=function(e,t,n){w.a.save("auth",t),i.setState({token:t,loggedIn:e,user:n})},i.state={loggedIn:!1,can:i.can,login:i.login,logout:i.logout,user:{capabilities:[]}},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search),t=w.a.load("auth"),n=e.get("token")||t||null;this.validateToken(n)}},{key:"render",value:function(){return Object(d.jsx)(P.Provider,{value:this.state,children:this.props.children})}}]),n}(s.a.Component),F=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.context.loggedIn,t=!this.props.capability||this.context.can(this.props.capability),n=e&&t;return Object(d.jsx)(k.a,{condition:n,children:this.props.children})}}]),n}(s.a.Component);F.contextType=P;var W=F,H=function(){var e,t,n=Object(o.useState)([]),a=Object(j.a)(n,2),i=a[0],c=a[1],r=Object(o.useState)([]),s=Object(j.a)(r,2),l=s[0],u=s[1],b=S((function(e){e.id=Object(D.a)(),e.complete=!1,c([].concat(Object(g.a)(i),[e]))})),O=b.handleChange,h=b.handleSubmit;return Object(o.useEffect)((function(){var e=i.filter((function(e){return!e.complete})).length;u(e),document.title="To Do List: ".concat(l)}),[i]),Object(d.jsx)(W,{capability:"create",children:Object(d.jsx)(p.b,{interactive:!0,elevation:E.a.TWO,children:Object(d.jsxs)("div",{className:"mainsec",children:[Object(d.jsxs)("h2",{id:"h2",children:["To Do List: ",l.length," items pending "]}),Object(d.jsxs)("div",{className:"mainCards",children:[Object(d.jsxs)("form",{onSubmit:h,children:[Object(d.jsx)("h2",{children:"Add To Do Item"}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"To Do Item"}),Object(d.jsx)("input",(e={onChange:O,name:"text",type:"text",placeholder:"Item Details",class:"bp3-input .modifier"},Object(x.a)(e,"type","text"),Object(x.a)(e,"dir","auto"),e))]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Assigned To"}),Object(d.jsx)("input",(t={class:"bp3-input .modifier",type:"text",onChange:O,name:"assignee"},Object(x.a)(t,"type","text"),Object(x.a)(t,"placeholder","Assignee Name"),Object(x.a)(t,"dir","auto"),t))]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Difficulty"}),Object(d.jsx)("input",{onChange:O,defaultValue:3,type:"range",min:1,max:5,name:"difficulty",dir:"auto"})]}),Object(d.jsx)("label",{children:Object(d.jsx)(p.a,{"data-testid":"button-test",type:"submit",rightIcon:"arrow-right",intent:"success",text:"Add Item"})})]}),Object(d.jsx)(T,{list:i,toggleComplete:function(e){var t=i.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));c(t)},deleteItem:function(e){var t=i.filter((function(t){return t.id!==e}));c(t)}})]})]})})})},B=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"bp3-navbar bp3-dark",id:"footer",children:Object(d.jsx)("p",{children:" \xa9 Dima Alabsi 2021 "})})}}]),n}(o.Component),K=B;n(380);var U=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).handleChange=function(e){i.setState(Object(x.a)({},e.target.name,e.target.value))},i.handleSubmit=function(e){e.preventDefault(),i.context.login(i.state.username,i.state.password)},i.state={username:"",password:""},i}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k.a,{condition:this.context.loggedIn,children:Object(d.jsx)("button",{onClick:this.context.logout,children:"Log Out"})}),Object(d.jsx)(k.a,{condition:!this.context.loggedIn,children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{placeholder:"UserName",name:"username",onChange:this.handleChange}),Object(d.jsx)("input",{placeholder:"password",name:"password",onChange:this.handleChange}),Object(d.jsx)("button",{children:"Login"})]})})]})}}]),n}(s.a.Component);U.contextType=P;var V=U,J=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(R,{children:[Object(d.jsx)(V,{}),Object(d.jsxs)(O,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(H,{}),Object(d.jsx)(K,{})]})]})})}}]),n}(s.a.Component),M=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(J,{})}}]),n}(s.a.Component),G=document.getElementById("root");u.a.render(Object(d.jsx)(M,{}),G)}},[[381,1,2]]]);
//# sourceMappingURL=main.da80102a.chunk.js.map