(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(6),n=c.n(i),d=c(7),j=c(5),r=(c(12),c(0));function l(){var e=new Date,t=new Array(7);return t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday",t[e.getDay()]}var b=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(""),n=Object(j.a)(i,2),b=n[0],o=n[1];return c.length,Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"mainHeading",children:Object(r.jsx)("h1",{children:"ToDo List"})}),Object(r.jsxs)("div",{className:"subHeading",children:[Object(r.jsx)("br",{}),Object(r.jsxs)("h2",{children:["Whoop, it's ",l()," \ud83c\udf1d \u2615 "]})]}),Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("input",{value:b,onChange:function(e){return o(e.target.value)},type:"text",placeholder:"\ud83d\udd8a\ufe0f Add item..."}),Object(r.jsx)("i",{onClick:function(){return a([].concat(Object(d.a)(c),[{id:Date.now(),text:b,status:!1,active:!1,done:!1,cancel:!1}]))},className:"fas fa-plus"})]}),Object(r.jsxs)("div",{className:"subHeading",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h2",{children:"Active List"}),Object(r.jsx)("div",{className:"todos",children:c.map((function(e,t){if(!e.active&&!e.done)return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("input",{onChange:function(t){a(c.filter((function(c){return c.id===e.id&&(c.status=t.target.checked,c.done=!e.done),c})))},value:e.status,type:"checkbox",name:"",id:""}),Object(r.jsx)("p",{children:e.text})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)("i",{className:"fas fa-times",onClick:function(){a(c.filter((function(t){return t.id===e.id&&(t.active=!t.active),t})))}})})]})}))})]}),Object(r.jsxs)("div",{className:"subHeading",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h2",{children:"Completed List \u2705"}),Object(r.jsx)("div",{className:"todos",children:c.map((function(e,t){if(!e.active&&e.done)return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("i",{className:"fas fa-check"}),Object(r.jsx)("p",{children:"".concat(e.text)})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)("i",{className:"fas fa-times",onClick:function(){a(c.filter((function(t){return t.id===e.id&&(t.active=!t.active),t})))}})})]})}))})]}),Object(r.jsxs)("div",{className:"subHeading",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h2",{children:"History/Canceld List \ud83d\udeae "}),Object(r.jsx)("div",{className:"todos",children:c.map((function(e,t){if(e.active||e.done)return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("i",{className:"fas fa-trash"}),Object(r.jsx)("p",{children:"".concat(e.text)})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)("div",{className:"date",children:Object(r.jsx)("p",{})})})]})}))})]})]})};n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9310a187.chunk.js.map