(window.webpackJsonpmovies=window.webpackJsonpmovies||[]).push([[7],{61:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var m=t(0),l=t.n(m),n=t(19);function c(e){return Object(m.useEffect)((function(){})),l.a.createElement("div",{className:"zmovo-breadcrumb"},l.a.createElement("div",{className:"zmovo-breadcrumb-area"},l.a.createElement("div",{className:"zmovo-breadcrumb-bg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"zmovo-breadcrumb-inner text-center"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(n.b,{to:"/"},"Trang ch\u1ee7")),e.items&&e.items.map((function(e,a){return l.a.createElement("li",{key:a},e.url?l.a.createElement(n.b,{to:e.url},e.label):l.a.createElement("span",null,e))}))))))))}},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var m=t(13),l=t(0),n=t.n(l),c=t(14),s=t(19);t(63);function r(e){var a=Object(c.c)().firebase,t=Object(l.useState)(),r=Object(m.a)(t,2),i=r[0],o=r[1],d=Object(l.useState)(),v=Object(m.a)(d,2),E=v[0],u=v[1],p=Object(l.useState)(),N=Object(m.a)(p,2),f=N[0],b=N[1];return Object(l.useEffect)((function(){i||a.getDocWithCondition("movie",{where:["status",0],orderBy:["view","desc"]},o),E||a.getDocWithCondition("movie",{where:["type",{id:"phim-le",name:"Phim l\u1ebb"}],limit:5,orderBy:["view","desc"]},u),f||a.getDocWithCondition("movie",{where:["type",{id:"phim-bo",name:"Phim b\u1ed9"}],limit:5,orderBy:["view","desc"]},b)}),[i,E,f,a]),n.a.createElement("div",{className:"zmovo-sidebar"},n.a.createElement("div",{className:"zmovo-widget"},n.a.createElement("div",{className:"zmovo-video-list-inner"},n.a.createElement("h2",{className:"widget-title mb-30"},n.a.createElement("span",null,"Top trailer")),n.a.createElement("div",{className:"zmovo-m-list-items mt-30"},i&&i.map((function(e,a){return n.a.createElement("div",{key:a,className:"zmovo-m-item"},n.a.createElement(s.b,{to:"/phim/".concat(e.id)},n.a.createElement("div",{className:"zmovo-m-item-img"},n.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),n.a.createElement("div",{className:"zmovo-m-item-content"},n.a.createElement("div",{className:"zmovo-m-item-c1"},n.a.createElement("span",null,e.name)),n.a.createElement("div",{className:"zmovo-m-item-text"},n.a.createElement("span",null,e.subname)),n.a.createElement("div",{className:"zmovo-m-item-time"},n.a.createElement("span",null,e.time)))))}))))),n.a.createElement("div",{className:"zmovo-widget"},n.a.createElement("div",{className:"zmovo-video-list-inner"},n.a.createElement("h2",{className:"widget-title mb-30"},n.a.createElement("span",null,"Top phim l\u1ebb")),n.a.createElement("div",{className:"zmovo-m-list-items mt-30"},E&&E.map((function(e,a){return n.a.createElement("div",{key:a,className:"zmovo-m-item"},n.a.createElement(s.b,{to:"/phim/".concat(e.id)},n.a.createElement("div",{className:"zmovo-m-item-img"},n.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),n.a.createElement("div",{className:"zmovo-m-item-content"},n.a.createElement("div",{className:"zmovo-m-item-c1"},n.a.createElement("span",null,e.name)),n.a.createElement("div",{className:"zmovo-m-item-text"},n.a.createElement("span",null,e.subname)),n.a.createElement("div",{className:"zmovo-m-item-time"},n.a.createElement("span",null,e.time)))))}))))),n.a.createElement("div",{className:"zmovo-widget"},n.a.createElement("div",{className:"zmovo-video-list-inner"},n.a.createElement("h2",{className:"widget-title mb-30"},n.a.createElement("span",null,"Top phim b\u1ed9")),n.a.createElement("div",{className:"zmovo-m-list-items mt-30"},f&&f.map((function(e,a){return n.a.createElement("div",{key:a,className:"zmovo-m-item"},n.a.createElement(s.b,{to:"/phim/".concat(e.id)},n.a.createElement("div",{className:"zmovo-m-item-img"},n.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),n.a.createElement("div",{className:"zmovo-m-item-content"},n.a.createElement("div",{className:"zmovo-m-item-c1"},n.a.createElement("span",null,e.name)),n.a.createElement("div",{className:"zmovo-m-item-text"},n.a.createElement("span",null,e.subname)),n.a.createElement("div",{className:"zmovo-m-item-time"},n.a.createElement("span",null,e.time)))))}))))))}},63:function(e,a,t){},72:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var m=t(0),l=t.n(m);t(73);function n(e){return Object(m.useEffect)((function(){})),l.a.createElement("div",{className:"zmovo-comments"},l.a.createElement("div",{className:"comment-area pt-30"},l.a.createElement("h2",{className:"title"},"comment's(10)"),l.a.createElement("ol",{className:"comment-list"},l.a.createElement("li",{className:"single-comment"},l.a.createElement("div",{className:"comment-body"},l.a.createElement("div",{className:"comment-img"},l.a.createElement("img",{src:"./assets/images/author/1.png",alt:""})),l.a.createElement("div",{className:"comment-content"},l.a.createElement("div",{className:"comment-header"},l.a.createElement("h3",{className:"comment-title"},"Kosmi Kotalia")),l.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which."),l.a.createElement("div",{className:"blog-details-reply-box"},l.a.createElement("div",{className:"comment-time"},"30 minits ago"),l.a.createElement("div",{className:"comment-reply"},l.a.createElement("a",{href:"/",className:"Repost"},"Repost"),l.a.createElement("a",{href:"/",className:"reply"},"reply"))))))),l.a.createElement("ol",{className:"comment-list-reply"},l.a.createElement("li",{className:"single-comment"},l.a.createElement("div",{className:"comment-body"},l.a.createElement("div",{className:"comment-img"},l.a.createElement("img",{src:"./assets/images/author/2.png",alt:""})),l.a.createElement("div",{className:"comment-content"},l.a.createElement("div",{className:"comment-header"},l.a.createElement("h3",{className:"comment-title"},"Kosmi Kotalia")),l.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"),l.a.createElement("div",{className:"blog-details-reply-box"},l.a.createElement("div",{className:"comment-time"},"30 minits ago"),l.a.createElement("div",{className:"comment-reply"},l.a.createElement("a",{href:"/",className:"Repost"},"Repost"),l.a.createElement("a",{href:"/",className:"reply"},"reply"))))))),l.a.createElement("ol",{className:"comment-list"},l.a.createElement("li",{className:"single-comment"},l.a.createElement("div",{className:"comment-body"},l.a.createElement("div",{className:"comment-img"},l.a.createElement("img",{src:"./assets/images/author/3.png",alt:""})),l.a.createElement("div",{className:"comment-content"},l.a.createElement("div",{className:"comment-header"},l.a.createElement("h3",{className:"comment-title"},"Kosmi Kotalia")),l.a.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which."),l.a.createElement("div",{className:"blog-details-reply-box"},l.a.createElement("div",{className:"comment-time"},"30 minits ago"),l.a.createElement("div",{className:"comment-reply"},l.a.createElement("a",{href:"/",className:"Repost"},"Repost"),l.a.createElement("a",{href:"/",className:"reply"},"reply"))))))),l.a.createElement("div",{className:"comment-respond"},l.a.createElement("h2",{className:"title"},"Leave a Comment"),l.a.createElement("div",{className:"respons-box"},l.a.createElement("div",{className:"form"},l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Nick Name :"),l.a.createElement("input",{id:"name",className:"form-control form-mane",required:"",type:"text"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"E-mail :"),l.a.createElement("input",{id:"email",className:"form-control form-email",required:"",type:"email"})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Write a Message :"),l.a.createElement("textarea",{id:"message",className:"form-control form-comment",cols:"10",rows:"8",name:"comment",required:""})),l.a.createElement("div",{className:"buttons"},l.a.createElement("a",{href:"/",className:"btn btn-buttons"},"Submit"))))))))}},73:function(e,a,t){},74:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var m=t(13),l=t(0),n=t.n(l),c=t(14),s=(t(74),t(60)),r=t.n(s);function i(){return Object(l.useEffect)((function(){return r()("body").addClass("loading"),function(){r()("body").removeClass("loading")}})),n.a.createElement("div",{className:"zmovo-preloader"})}var o=t(61),d=t(62),v=t(72);function E(e){return Object(l.useEffect)((function(){})),n.a.createElement("li",{onClick:function(){var a;a=e.dataEp,e.setCurentEp({sv:a.sv,ep:a.ep})},className:"episode "+(e.active?"active":"")},n.a.createElement("span",null,e.data.label))}function u(e){var a=e.data;return Object(l.useEffect)((function(){})),n.a.createElement("div",{className:"zmovo-list-server"},a.map((function(a,t){return n.a.createElement("div",{className:"zmovo-server",key:t},n.a.createElement("h4",{className:"zmovo-server-name"},n.a.createElement("i",{className:"icofont-server"}),a.name),n.a.createElement("ul",{className:"zmovo-server-list"},a.ep.map((function(a,m){return n.a.createElement(E,{key:m,setCurentEp:e.setCurentEp,dataEp:{sv:t,ep:m},data:a,active:t===e.curentEp.sv&&m===e.curentEp.ep})}))))})))}function p(e){var a=Object(l.useState)({sv:0,ep:0}),t=Object(m.a)(a,2),s=t[0],E=t[1],p=Object(c.c)(),N=p.state,f=p.getDocumentById,b=Object(l.useState)(),h=Object(m.a)(b,2),g=h[0],z=h[1],y=!0;return(!N.data||N.data&&!N.data.item||N.data.item&&e.match.params.id!==N.data.item.id)&&(y=!1,f("movie",e.match.params.id,(function(){y=!1}))),Object(l.useEffect)((function(){z(N.data&&N.data.item),r()("#catmenu li.active").addClass("open").children("ul").show(),r()("#catmenu li.has-sub>a").on("click",(function(){r()(this).removeAttr("href");var e=r()(this).parent("li");e.hasClass("open")?(e.removeClass("open"),e.find("li").removeClass("open"),e.find("ul").slideUp(200)):(e.addClass("open"),e.children("ul").slideDown(200),e.siblings("li").children("ul").slideUp(200),e.siblings("li").removeClass("open"),e.siblings("li").find("li").removeClass("open"),e.siblings("li").find("ul").slideUp(200))}))}),[N.data]),g&&y?n.a.createElement("div",{id:"WatchMoviePage"},n.a.createElement(o.a,{items:[{url:"/movie/"+g.id,label:g.name},"Watch movie"]}),n.a.createElement("div",{className:"zmoto-inner-page"},n.a.createElement("div",{className:"zmovo-blog-details pt-30"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"zmovo-blog-contents"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"zmovo-product-with-sedbar"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-9"},n.a.createElement("div",{className:"zmovo-blog-dec-contents"},n.a.createElement("div",{className:"zmovo-video-container"},n.a.createElement("video",{id:"zmovo-movie",controls:!0,src:g.server[s.sv].ep[s.ep].link})),n.a.createElement(u,{data:g.server,setCurentEp:E,curentEp:s}),n.a.createElement(v.a,null))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(d.a,null))))))))))):n.a.createElement(i,null)}t.d(a,"default",(function(){return p}))}}]);
//# sourceMappingURL=7.add03e1a.chunk.js.map