(this.webpackJsonptitatemplate=this.webpackJsonptitatemplate||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(10),s=c.n(a),i=(c(26),c(27),c(28),c(0)),r=function(){var e=(new Date).getFullYear();return Object(i.jsxs)("div",{className:"footerContainer",children:[Object(i.jsxs)("p",{children:[" \xa9 ",e," - ",Object(i.jsx)("b",{children:"Sneak"})," All Rigth Reserved "]}),Object(i.jsxs)("div",{className:"socialContainer",children:[Object(i.jsx)("i",{className:"fa fa-facebook"}),Object(i.jsx)("i",{className:"fa fa-twitter"}),Object(i.jsx)("i",{className:"fa fa-pinterest-p"}),Object(i.jsx)("i",{className:"fa fa-google-plus"}),Object(i.jsx)("i",{className:"fa fa-youtube"})]})]})},j=c(5),o=c.n(j),l=c(6),u=c(4),x=c(7),h=c.n(x),m=(c(49),Object(n.createContext)()),b=function(e){var t=Object(n.useState)(),c=Object(u.a)(t,2),a=c[0],s=c[1];return Object(i.jsx)(m.Provider,{value:{menuGlobal:a,setMenuglobal:s},children:e.children})},d=(c(50),function(){var e=Object(n.useContext)(m).menuGlobal;return Object(i.jsx)("div",{className:"menuGalleryContainer",children:e&&Object(i.jsx)("ul",{children:e.map((function(e){return Object(i.jsx)("li",{className:"item-".concat(e.key),children:Object(i.jsx)("p",{children:e.value})},e.key)}))})})}),O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){s()}),[c]);var s=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://demo0453307.mockable.io/imgtita");case 2:return t=e.sent,e.next=5,t;case 5:c=e.sent,n=c.data,a(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"contenedorGallery",children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"gallery",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"column",children:c.row1&&c.row1.map((function(e){return Object(i.jsx)("img",{src:e.value,alt:""})}))}),Object(i.jsx)("div",{className:"column",children:c.row2&&c.row2.map((function(e){return Object(i.jsx)("img",{src:e.value,alt:""})}))}),Object(i.jsx)("div",{className:"column",children:c.row3&&c.row3.map((function(e){return Object(i.jsx)("img",{src:e.value,alt:""})}))})]}),Object(i.jsx)("button",{className:"negative",children:"Show Me More"})]})]})})},f=(c(51),c(21)),v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(u.a)(s,2),j=r[0],x=r[1],b=Object(n.useContext)(m).setMenuglobal;Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://demo0453307.mockable.io/menutita");case 3:return t=e.sent,e.next=6,t;case 6:c=e.sent,n=c.data,a(n),b(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("!UPS! Ocurrio un error con el servicio de menus, por favor vuelve a ingresar mas tarde, Error: ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[j&&Object(i.jsx)(f.slide,{isOpen:j,onClose:function(){return x(!1)},children:Object(i.jsx)("ul",{children:c.map((function(e){return Object(i.jsx)("li",{className:"item-".concat(e.key),children:Object(i.jsx)("p",{children:e.value})},e.key)}))})}),Object(i.jsxs)("div",{className:"contenedor",children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo"})}),Object(i.jsx)("div",{className:"menu",children:Object(i.jsxs)("ul",{children:[c.map((function(e){return Object(i.jsx)("li",{className:"item-".concat(e.key),children:Object(i.jsx)("p",{children:e.value})},e.key)})),Object(i.jsxs)("li",{className:"search",children:[Object(i.jsx)("i",{className:"fa fa-search"}),Object(i.jsx)("input",{type:"text"})]})]})}),Object(i.jsx)("div",{className:"menuResponsive",onClick:function(){return x(!0)},children:Object(i.jsx)("i",{class:"fa fa-bars"})})]})]})},g=(c(70),function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"contenedorSlider",children:Object(i.jsxs)("div",{className:"contenido",children:[Object(i.jsx)("p",{className:"titulo",children:"EXPLORE BEYOND HORIZON"}),Object(i.jsx)("p",{className:"parrafo",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non, nostrum laboriosam, rerum ut placeat vitae blanditiis minima atque mollitia eius molestias."}),Object(i.jsx)("button",{children:"VIEW OUR WORK"})]})})})});var A=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(b,{children:[Object(i.jsx)(v,{}),Object(i.jsx)(g,{}),Object(i.jsx)(O,{}),Object(i.jsx)(r,{})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};s.a.render(Object(i.jsx)(A,{}),document.getElementById("root")),M()}},[[71,1,2]]]);
//# sourceMappingURL=main.87f500b7.chunk.js.map