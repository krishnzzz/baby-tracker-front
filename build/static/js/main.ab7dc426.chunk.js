(this["webpackJsonpbaby-tracker-front"]=this["webpackJsonpbaby-tracker-front"]||[]).push([[0],{36:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),o=n(7),s=n(11),u=(n(36),n(9)),m=n(10),i=n(3),d=n(21),f=n(24),E=(n(40),function(e){var t=e.measurement;return r.a.createElement(m.a,null,r.a.createElement(m.b,{to:"/measure/".concat(t.id),className:"measurement link bg-cover col cross-center main-center"},t.list&&t.list.length?r.a.createElement("div",null,r.a.createElement("div",{className:"amount"},"".concat(t.list[t.list.length-1].amount," ").concat(t.unit)),t.list[t.list.length-2]?r.a.createElement("div",{className:"row main-center dif",style:{color:t.list[t.list.length-1].amount>t.list[t.list.length-2].amount?"green":"red"}},t.list[t.list.length-1].amount>t.list[t.list.length-2].amount?"+":"",(t.list[t.list.length-1].amount-t.list[t.list.length-2].amount).toFixed(2)):r.a.createElement("div",null)):r.a.createElement("div",{className:"amount new"},"Add new"),r.a.createElement("div",{className:"type"},t.item)))});E.defaultProps={measurement:{}};var p=E,h=(n(42),function(){var e=Object(o.c)((function(e){return e.measurements}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row wrap"},e.map((function(e){return r.a.createElement(p,{key:e.id,measurement:e})}))))}),v=function(e,t,n){var a={method:e,headers:{"Content-Type":"application/json",token:localStorage.token}};return"POST"===e&&(a.body=JSON.stringify(n)),new Request("".concat("https://suyash-baby-tracker.herokuapp.com/").concat(t),a)},b=(n(43),function(e){var t=e.list,n=e.itemKey,a=e.displayAttr,c=e.toAddAttr,l=e.addItem,o=e.unit;return r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"items"},t.map((function(e){return r.a.createElement("div",{key:e[n],className:"row link"},a.map((function(t){return r.a.createElement("div",{key:t,className:"flex item"},r.a.createElement("div",null,"".concat(e[t]," ").concat("amount"===t?o:"")))})))}))),r.a.createElement("form",{onSubmit:l,className:"row main-center wrap"},c.map((function(e){return r.a.createElement("input",{key:e,type:"text",name:e,placeholder:e})})),r.a.createElement("input",{type:"submit",value:"Add New",className:"link"})))});b.defaultProps={list:[],unit:""};var g=b,w=function(){var e=Object(o.b)(),t=Object(i.g)().id,n=Object(a.useState)({}),c=Object(u.a)(n,2),l=c[0],s=c[1],m=Object(a.useState)(""),d=Object(u.a)(m,2),f=d[0],E=d[1],p=Object(o.c)((function(e){return e.measurements}));return Object(a.useEffect)((function(){!function(){for(var e=0;e<p.length;e+=1)if(p[e].id===parseInt(t,10)){s(p[e]);break}}()})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row cross-center main-center"},r.a.createElement("div",{className:"w-100 h-100"},r.a.createElement(g,{list:l.list,itemKey:"created_at",displayAttr:["date","amount"],toAddAttr:["amount"],unit:l.unit,addItem:function(t){t.preventDefault();var n={amount:t.target.amount.value,measure_id:l.id};fetch(v("POST","measurements/create",n)).then((function(e){if(E(""),!e.ok)throw Error(e.statusText);return e.json()})).then((function(a){a.measurement&&(n=a.measurement,t.target.amount.value="",e(function(e,t){return{type:"ADD_MEASUREMENT",measureId:e,measurement:t}}(l.id,n)),window.location.reload())})).catch((function(){E("Couldn't add Measurement!")}))}}),r.a.createElement("div",{className:"error row main-center cross-center"},f))))},S=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),m=s[0],d=s[1],f=Object(o.b)(),E=Object(o.c)((function(e){return e.measurements}));return Object(a.useEffect)((function(){localStorage.token&&fetch(v("GET","users/admin")).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){e.admin||c(!0)})).catch((function(){c(!0)}))})),r.a.createElement("div",null,n?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(g,{list:E,itemKey:"item",displayAttr:["item","unit"],toAddAttr:["item","unit"],addItem:function(e){e.preventDefault();var t={item:e.target.item.value,unit:e.target.unit.value};fetch(v("POST","measures/create",t)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(n){n.id&&(t.id=n.id,e.target.item.value="",e.target.unit.value="",f(function(e){return{type:"ADD_MEASURE",measure:e}}(t)))})).catch((function(){d("Couldn't add new Measure!")}))}}),r.a.createElement("div",{className:"error row main-center cross-center"},m)))},k=(n(44),function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(u.a)(l,2),s=o[0],m=o[1];return r.a.createElement("div",{className:"login"},n?r.a.createElement("div",{className:"col cross-center main-center"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch(v("POST","users/login",{name:e.target.name.value,password:e.target.password.value})).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){e.token&&(localStorage.token=e.token,window.location.reload())})).catch((function(){m("Couldn't Sign In!")}))},className:"col cross-center"},r.a.createElement("h2",null,"Sign In"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Username"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("input",{type:"submit",value:"Sign In",className:"link w-90"}),r.a.createElement("button",{type:"button",onClick:function(){c(!1)},className:"link button w-90"},"or create new account"))):r.a.createElement("div",{className:"col cross-center main-center"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch(v("POST","users/create",{name:e.target.name.value,password:e.target.password.value})).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){e.token&&(localStorage.token=e.token,window.location.reload())})).catch((function(){m("Couldn't Sign Up!")}))},className:"col cross-center"},r.a.createElement("h2",null,"Create new account"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Username"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}),r.a.createElement("input",{type:"submit",value:"Sign Up",className:"link w-90"}),r.a.createElement("button",{type:"button",onClick:function(){c(!0)},className:"link button w-90"},"Go to Sign In page"))),r.a.createElement("div",{className:"error row main-center cross-center"},s))}),y=(n(45),function(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],l=n[1];Object(a.useEffect)((function(){localStorage.token&&fetch(v("GET","measurements/fetch")).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){if(t.measures&&t.measurements)for(var n=0;n<t.measures.length;n+=1){var a=t.measures[n];a.list=[];for(var r=0;r<t.measurements.length;r+=1){var c=t.measurements[r],l=new Date(c.created_at);c.date=l.toLocaleString("default",{day:"numeric",month:"long",year:"numeric"}),c.measure_id===a.id&&a.list.push(c)}}e({type:"SET_MEASUREMENTS",measurements:t.measures})})).catch((function(){l("Couldn't fetch Measurements!")}))}));return r.a.createElement("div",null,localStorage.token?r.a.createElement(m.a,null,r.a.createElement("div",{className:"error row main-center cross-center"},c),r.a.createElement("header",{className:"row main-space-around"},r.a.createElement(m.b,{to:"/",className:"col cross-center main-center shadow-5 link flex"},r.a.createElement(d.a,{icon:f.a},"Sign Out"),r.a.createElement("span",null,"Home")),r.a.createElement("button",{type:"button",onClick:function(){localStorage.clear(),window.location.reload()},className:"link col cross-center main-center flex"},r.a.createElement(d.a,{icon:f.b},"Sign Out"),r.a.createElement("span",null,"Log out"))),r.a.createElement("div",{className:"main"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(i.b,{path:"/measure/:id"},r.a.createElement(w,null)),r.a.createElement(i.b,{path:"/admin"},r.a.createElement(S,null))))):r.a.createElement(k,null))}),N=n(27),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MEASUREMENTS":return t.measurements;case"ADD_MEASURE":return[].concat(Object(N.a)(e),[t.measure]);case"ADD_MEASUREMENT":for(var n=0;n<e.length;n+=1)e[n].id===t.measureId&&e[n].list.push(t.measurement);return e;default:return e}},j=Object(s.b)({measurements:O}),A=Object(s.c)(j);l.a.render(r.a.createElement(o.a,{store:A},r.a.createElement(y,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ab7dc426.chunk.js.map