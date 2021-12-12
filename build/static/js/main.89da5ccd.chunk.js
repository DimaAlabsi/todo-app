(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c=n(11),a=n(12),i=n(14),s=n(13),r=n(0),j=n.n(r),b=n(7),o=n.n(b),l=n(1),u=j.a.createContext();var O=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u.Provider,{value:{show:!1,sort:"To Do",itemsPerPage:3},children:e.children})})},d=n(143),p=n(22),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(d.c,{class:"bp3-navbar bp3-dark",children:Object(l.jsxs)(d.c.Group,{align:p.a.LEFT,children:[Object(l.jsx)(d.c.Heading,{children:"TO DO List Manager \ud83d\udcd4"}),Object(l.jsx)(d.c.Divider,{}),Object(l.jsx)(d.a,{className:"bp3-minimal",icon:"home",text:"Home"}),Object(l.jsx)("span",{class:"bp3-navbar-divider"}),Object(l.jsx)(d.a,{class:"bp3-Button bp3-minimal bp3-icon-user"}),Object(l.jsx)(d.a,{class:"bp3-Button bp3-minimal bp3-icon-notifications"}),Object(l.jsx)(d.a,{class:"bp3-button bp3-minimal bp3-icon-cog"})]})})}}]),n}(r.Component),m=h,x=n(9),f=n(53),g=n(17),v=n(35),y=function(e){var t=Object(r.useState)({}),n=Object(g.a)(t,2),c=n[0],a=n[1];return{handleChange:function(e){e.persist(),a((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(x.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(c)},values:c}};var C=function(e){var t=Object(r.useContext)(u),n=Object(r.useState)(0),c=Object(g.a)(n,2);c[0];return c[1],t.numOfItems,Object(l.jsx)(l.Fragment,{children:e.list.map((function(t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:t.text}),Object(l.jsx)("p",{children:Object(l.jsxs)("small",{children:["Assigned to: ",t.assignee]})}),Object(l.jsx)("p",{children:Object(l.jsxs)("small",{children:["Difficulty: ",t.difficulty]})}),Object(l.jsxs)(d.a,{icon:"refresh",onClick:function(){return e.toggleComplete(t.id)},children:[" Complete: ",t.complete.toString()," "]}),Object(l.jsx)("hr",{})]},t.id)})}))})},D=n(144),k=n(15),T=function(){var e,t,n,c=Object(r.useState)([]),a=Object(g.a)(c,2),i=a[0],s=a[1],j=Object(r.useState)([]),b=Object(g.a)(j,2),o=b[0],u=b[1],O=y((function(e){e.id=Object(D.a)(),e.complete=!1,s([].concat(Object(f.a)(i),[e]))})),p=O.handleChange,h=O.handleSubmit;return Object(r.useEffect)((function(){var e=i.filter((function(e){return!e.complete})).length;u(e),document.title="To Do List: ".concat(o)}),[i]),Object(l.jsx)(d.b,{interactive:!0,elevation:k.a.TWO,children:Object(l.jsxs)("div",{className:"mainsec",children:[Object(l.jsxs)("h2",{id:"h2",children:["To Do List: ",o.length," items pending "]}),Object(l.jsxs)("div",{className:"mainCards",children:[Object(l.jsxs)("form",{onSubmit:h,children:[Object(l.jsx)("h2",{children:"Add To Do Item"}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"To Do Item"}),Object(l.jsx)("input",(e={onChange:p,name:"text",type:"text",placeholder:"Item Details",class:"bp3-input .modifier"},Object(x.a)(e,"type","text"),Object(x.a)(e,"dir","auto"),e))]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Assigned To"}),Object(l.jsx)("input",(t={class:"bp3-input .modifier",type:"text",onChange:p,name:"assignee"},Object(x.a)(t,"type","text"),Object(x.a)(t,"placeholder","Assignee Name"),Object(x.a)(t,"dir","auto"),t))]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("span",{children:"Difficulty"}),Object(l.jsx)("input",(n={onChange:p,defaultValue:3,type:"range",min:1,max:5,name:"difficulty",class:"bp3-input .modifier"},Object(x.a)(n,"type","text"),Object(x.a)(n,"dir","auto"),n))]}),Object(l.jsx)("label",{children:Object(l.jsx)(d.a,{type:"submit",rightIcon:"arrow-right",intent:"success",text:"Add Item"})})]}),Object(l.jsx)(C,{list:i,toggleComplete:function(e){var t=i.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));s(t)}})]})]})})},S=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"bp3-navbar bp3-dark",id:"footer",children:Object(l.jsx)("p",{children:" \xa9 Dima Alabsi 2021 "})})}}]),n}(r.Component),I=S,A=(n(138),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(O,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(T,{}),Object(l.jsx)(I,{})]})})}}]),n}(j.a.Component)),F=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(A,{})}}]),n}(j.a.Component),N=document.getElementById("root");o.a.render(Object(l.jsx)(F,{}),N)}},[[139,1,2]]]);
//# sourceMappingURL=main.89da5ccd.chunk.js.map