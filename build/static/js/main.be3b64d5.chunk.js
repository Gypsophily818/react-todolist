(this.webpackJsonpinterview=this.webpackJsonpinterview||[]).push([[0],{21:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var c,i=t(1),a=t.n(i),s=t(12),r=t.n(s),l=(t(21),t(5)),o=t(16),u=t(4),j=t(2),d=t(3),b=t(0);function p(e){var n=e.addPlan,t=d.a.button(c||(c=Object(j.a)(["\n    cursor: pointer;\n    background-color: rgb(220, 220, 220);\n    outline: none;\n    border-radius: 5px;\n    padding: 5 30px;\n    height: 30px;\n    display: block;\n    width: 100px;\n    color: rgb(37, 32, 32);\n    border: none;\n  "]))),a=Object(i.useState)(""),s=Object(u.a)(a,2),r=s[0],l=s[1],o=Object(i.useState)(""),p=Object(u.a)(o,2),f=p[0],h=p[1],x=Object(i.useState)(""),O=Object(u.a)(x,2),v=O[0],m=O[1],g=Object(i.useState)(!1),N=Object(u.a)(g,2),U=N[0],S=N[1];function k(){var e,t=1*f;if(console.log(r,f,v),"number"!==typeof t||isNaN(t)||""===r||0===t||""===v)return alert("\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01");e={id:Date.now(),finished:!1,plan:r,price:t,currency:v},n(e),l(""),h(""),m("")}return Object(b.jsxs)("div",{className:"Task-header",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)("input",{className:"task",type:"text",placeholder:"\u4efb\u52a1",value:r,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("input",{className:"price",type:"text",placeholder:"\u4ef7\u683c",value:f,onChange:function(e){h(e.target.value)}})]}),Object(b.jsxs)("div",{className:"select-box",children:[Object(b.jsx)("input",{className:"currency",value:v,onChange:function(e){m(e.target.value)},type:"text",placeholder:"\u8d27\u5e01\u7c7b\u578b"}),Object(b.jsx)("span",{className:"icon",onClick:function(e){e.preventDefault(),S(!U)},children:"\u25bd"}),U?Object(b.jsx)("ul",{className:"select-CCY",children:["RUB","CNY","USD"].map((function(e,n){return Object(b.jsx)("li",{className:"ccy-item",onClick:function(){var n;n=e,S(!1),m(n)},children:e},n)}))}):""]}),Object(b.jsx)(t,{className:"add",onClick:function(){k()},children:"\u6dfb\u52a0"})]})}function f(e){var n=e.rate,t=n.RUB.previous.toFixed(3),c=(1/n.USD.previous*n.RUB.previous).toFixed(3),i=(1/n.USD.previous).toFixed(3);return Object(b.jsxs)("div",{className:"rate-box",children:[Object(b.jsxs)("span",{className:"currency-rate",children:[t," \u20bd/\uffe5"]}),Object(b.jsxs)("span",{className:"currency-rate",children:[c," \u20bd/$"]}),Object(b.jsxs)("span",{className:"currency-rate",children:[i," \uffe5/$"]})]})}var h,x,O,v,m,g,N=t(25);function U(e){var n=e.clickPlan,t=e.finished,c=e.id,i=e.plan,a=e.RUB,s=e.CNY,r=e.USD;var l=N({"Plan-text":!0,"is-finished":t});return Object(b.jsxs)("li",{className:"plan-item",children:[Object(b.jsx)("input",{className:"checkbox",type:"checkbox",checked:t,onChange:function(){n(c)}}),Object(b.jsx)("span",{className:l,children:i}),Object(b.jsxs)("div",{className:"plan-money",children:[Object(b.jsxs)("span",{className:"plan-RUB",children:["\u20bd",a]}),Object(b.jsxs)("span",{className:"plan-CNY",children:["\uffe5",s]}),Object(b.jsxs)("span",{className:"plan-USD",children:["$",r]})]})]})}function S(e){var n=e.isfinished,t=e.job,c=e.clickPlan,i=e.rate,a=d.a.div(h||(h=Object(j.a)(["\n    clear: both;\n    margin-bottom: 30px;\n  "]))),s=d.a.p(x||(x=Object(j.a)(["\n    text-align: left;\n    padding: 8px 0;\n  "]))),r=d.a.div(O||(O=Object(j.a)(["\n    display: flex;\n    padding: 8px 0;\n  "]))),o=d.a.div(v||(v=Object(j.a)(["\n    text-align: left;\n    flex: 1;\n  "]))),u=d.a.div(m||(m=Object(j.a)(["\n    text-align: center;\n  "]))),p=d.a.span(g||(g=Object(j.a)(["\n    margin: 0 30px;\n    display: inline-block;\n  "])));function f(e){return e.toPrecision(6)}var N=0,S=0,k=0;return N=t.map((function(e){return 1*e.CNY})).reduce((function(e,n){return e+n})),S=t.map((function(e){return 1*e.RUB})).reduce((function(e,n){return e+n})),k=t.map((function(e){return 1*e.USD})).reduce((function(e,n){return e+n})),N=f(N),S=f(S),k=f(k),Object(b.jsxs)(a,{children:[Object(b.jsx)(s,{children:n?"\u5df2\u5b8c\u6210:":"\u8ba1\u5212:"}),Object(b.jsx)("ul",{children:i.USD&&t.map((function(e){return Object(b.jsx)(U,Object(l.a)(Object(l.a)({},e),{},{clickPlan:c,rate:i}),e.id)}))}),Object(b.jsxs)(r,{children:[Object(b.jsx)(o,{children:n?"\u4e00\u5171\u82b1\u4e86:":"\u5c06\u8981\u82b1\u8d39:"}),Object(b.jsxs)(u,{children:[Object(b.jsxs)(p,{children:["\u20bd",S]}),Object(b.jsxs)(p,{children:["\uffe5",N]}),Object(b.jsxs)(p,{children:["$",k," "]})]})]})]})}t(26),t(27),t(28);var k=function(){var e,n,t,c=Object(i.useState)({}),a=Object(u.a)(c,2),s=a[0],r=a[1],j=Object(i.useState)([]),d=Object(u.a)(j,2),h=d[0],x=d[1],O=h.filter((function(e){return e.finished})),v=h.filter((function(e){return!e.finished}));function m(e){return e.toPrecision(6)}function g(e){x(h.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{finished:!n.finished}):n})))}return Object(i.useEffect)((function(){fetch("https://api.globus.furniture/forex").then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{addPlan:function(c){if(console.log(c),c){var i=c.plan,a=c.price,r=c.currency,l=c.finished,u=c.id;!function(c,i){"RUB"===c?(n=i/s.RUB.previous,t=i/s.RUB.previous*s.USD.previous,e=i):"CNY"===c?(e=i*s.RUB.previous,t=i*s.USD.previous,n=i):(e=i/s.USD.previous*s.RUB.previous,n=i/s.USD.previous,t=i),n=m(n),t=m(t),e=m(e)}(r,a),x([].concat(Object(o.a)(h),[{plan:i,currency:r,finished:l,id:u,RUB:e,CNY:n,USD:t}])),console.log("list",h)}}}),s.USD&&Object(b.jsx)(f,{rate:s}),0!==v.length&&Object(b.jsx)(S,{job:v,clickPlan:g,rate:s,isfinished:!1}),0!==O.length&&Object(b.jsx)(S,{job:O,clickPlan:g,rate:s,isfinished:!0})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),a(e),s(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.be3b64d5.chunk.js.map