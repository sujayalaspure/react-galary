(this["webpackJsonpreact-galary"]=this["webpackJsonpreact-galary"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),i=a.n(r),s=(a(52),a(13)),o=(a(53),a(38)),l=a(39),u=(a(54),a(71),a(72),l.a.initializeApp({apiKey:"AIzaSyCq7pOWGXxtQdQfZMj2oOKWQlXe9MvLnJ8",authDomain:"clone-project-sujay.firebaseapp.com",projectId:"clone-project-sujay",storageBucket:"clone-project-sujay.appspot.com",messagingSenderId:"419718453701",appId:"1:419718453701:web:513af44e87860a5e9153ac"})),j=(u.auth(),u.firestore()),d=u.storage(),p=l.a.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=j.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:c}},f=a(99),g=a(4);var O=function(e){var t=e.setSelectedImg,a=b("images").docs;return Object(g.jsx)("div",{className:"img-grid",children:a&&a.map((function(e){return Object(g.jsx)(f.a.div,{className:"img-wrap",onClick:function(){return t(e.url)},layout:!0,whileHover:{opacity:1},children:Object(g.jsx)(f.a.img,{src:e.url,alt:"",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}})},e.id)}))})},m=a(40),v=a.n(m),h=a(42),x=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],b=Object(n.useState)(null),f=Object(s.a)(b,2),g=f[0],O=f[1];return Object(n.useEffect)((function(){var t=d.ref(e.name),a=j.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){u(e)}),Object(h.a)(v.a.mark((function e(){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,c=p(),a.add({url:n,createdAt:c}),O(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:c,url:g,error:l}};var y=function(e){var t=e.file,a=e.setFile,c=x(t),r=c.url,i=c.progress;return console.log(i,r),Object(n.useEffect)((function(){r&&a(null)}),[r,a]),Object(g.jsx)(f.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})};var S=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(s.a)(r,2),o=i[0],l=i[1],u=["image/png","image/jpeg"];return Object(g.jsxs)("form",{children:[Object(g.jsxs)("label",{children:[Object(g.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0];t?u.includes(t.type)?(c(t),l("")):(l("Please select an image file (png or jpeg)"),c(null)):(c(null),l(""))}}),Object(g.jsx)("span",{children:"+ Add"})]}),Object(g.jsxs)("div",{className:"output",children:[o&&Object(g.jsx)("div",{className:"error",children:o}),a&&Object(g.jsx)("div",{children:a.name}),a&&Object(g.jsx)(y,{file:a,setFile:c})]})]})};var w=function(e){var t=e.selectedImg,a=e.setSelectedImg;return Object(g.jsx)(f.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1},children:Object(g.jsx)(f.a.img,{src:t,alt:"",className:"enlarged-pic",initial:{y:"-100vh"},animate:{y:0}})})},I=a(93);a(95),a(96),a(98),a(97),a(100),a(44),Object(I.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));var k=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(S,{}),Object(g.jsx)(O,{setSelectedImg:c}),a&&Object(g.jsx)(w,{selectedImg:a,setSelectedImg:c})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),C()}},[[69,1,2]]]);
//# sourceMappingURL=main.b35b523a.chunk.js.map