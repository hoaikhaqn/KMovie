(window.webpackJsonpmovies=window.webpackJsonpmovies||[]).push([[8],{100:function(e,a,t){"use strict";t.r(a);var c=t(13),n=t(0),m=t.n(n),l=t(68),s=t.n(l),i=t(14),r=(t(82),t(60)),o=t.n(r),d=t(61),u=t(62),v=t(64);function p(e){return Object(n.useEffect)((function(){})),m.a.createElement("div",{className:"zmovo-product-list"},m.a.createElement("div",{className:"row"},e.data&&e.data.map((function(e,a){return m.a.createElement("div",{key:a,className:"col-lg-3 col-md-4 col-sm-4 col-6"},m.a.createElement("div",{className:"item"},m.a.createElement(v.a,{data:e})))}))))}function E(e){return Object(n.useEffect)((function(){})),m.a.createElement("div",{className:"product-filter mb-30"},m.a.createElement("div",{className:"product-filter-inner"},m.a.createElement("div",{className:"product-filter-list"},m.a.createElement("div",{className:"short-by-show form-inline2"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2"},m.a.createElement("div",{className:"short-by"},m.a.createElement("select",{type:"select",id:"sort",onChange:function(a){var t=a.target.value;e.setCurrentPage(0);var c=e.getDataPage(e.filter.sort((function(e,a){return a[t]-e[t]})),0);e.setDataPage(c)},className:"selectpicker","data-live-search":"true"},m.a.createElement("option",{value:"createdAt"},"M\u1edbi nh\u1ea5t"),m.a.createElement("option",{value:"imdb"},"Top IMDb"),m.a.createElement("option",{value:"view"},"L\u01b0\u1ee3t xem"),m.a.createElement("option",{value:"rating"},"Top \u0111\xe1nh gi\xe1")))),e.type?m.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2"},m.a.createElement("div",{className:"pro-show"},m.a.createElement("select",{type:"select",id:"type",className:"selectpicker",defaultValue:e.params.type},m.a.createElement("option",{value:"all-type"},"--Lo\u1ea1i--"),e.type.map((function(e,a){return m.a.createElement("option",{key:a,value:e.id},e.name)}))))):"",e.genre?m.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2"},m.a.createElement("div",{className:"pro-show"},m.a.createElement("select",{type:"select",id:"genre",className:"selectpicker",defaultValue:e.params.genre},m.a.createElement("option",{value:"all-genre"},"--Th\u1ec3 lo\u1ea1i--"),e.genre.map((function(e,a){return m.a.createElement("option",{key:a,value:e.id},e.name)}))))):"",e.nation?m.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2"},m.a.createElement("div",{className:"pro-show"},m.a.createElement("select",{type:"select",id:"nation",className:"selectpicker",defaultValue:e.params.nation},m.a.createElement("option",{value:"all-nation"},"--Qu\u1ed1c gia--"),e.nation.map((function(e,a){return m.a.createElement("option",{key:a,value:e.id},e.name)}))))):"",e.year?m.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2"},m.a.createElement("div",{className:"pro-show"},m.a.createElement("select",{type:"select",id:"year",className:"selectpicker",defaultValue:e.params.year},m.a.createElement("option",{value:"all-year"},"--N\u0103m--"),e.year.map((function(e,a){return m.a.createElement("option",{key:a,value:e.id},e.id)}))))):"",m.a.createElement("div",{className:"col-6 col-sm-4 col-md-3 col-lg-2"},m.a.createElement("div",{className:"pro-show"},m.a.createElement("button",{className:"btn btn-buttons btn-sm btn-fit",onClick:function(a){var t=document.getElementById("type").value,c=document.getElementById("genre").value,n=document.getElementById("nation").value,m=document.getElementById("year").value;"all-type"===t&&"all-genre"!==c?e.history.push("/the-loai/".concat(c,"/").concat(n,"/").concat(m)):"all-type"===t&&"all-nation"!==n?e.history.push("/quoc-gia/".concat(n,"/").concat(m)):"all-type"===t&&"all-year"!==m?e.history.push("/phim-nam/".concat(m)):e.history.push("".concat("all-type"!==t?"/loai/"+t:t,"/").concat(c,"/").concat(n,"/").concat(m))}},"L\u1ecdc phim"))))))))}t.d(a,"default",(function(){return b}));var g=t(83),N=!1;function b(e){var a=Object(i.c)(),t=a.state,l=a.firebase,r=a.getCollection,v=Object(n.useState)(),b=Object(c.a)(v,2),h=b[0],f=b[1],y=Object(n.useState)(),z=Object(c.a)(y,2),w=z[0],O=z[1],j=Object(n.useState)(),k=Object(c.a)(j,2),C=k[0],S=k[1],P=Object(n.useState)(),x=Object(c.a)(P,2),D=x[0],I=x[1],T=Object(n.useState)(),L=Object(c.a)(T,2),B=L[0],M=L[1],W=Object(n.useState)(),A=Object(c.a)(W,2),V=A[0],q=A[1],J=Object(n.useState)(),K=Object(c.a)(J,2),F=K[0],Q=K[1],R=Object(n.useState)(),G=Object(c.a)(R,2),H=G[0],U=G[1],X=Object(n.useState)(),Y=Object(c.a)(X,2),Z=Y[0],$=Y[1],_=Object(n.useState)(),ee=Object(c.a)(_,2),ae=ee[0],te=ee[1],ce=Object(n.useState)(),ne=Object(c.a)(ce,2),me=ne[0],le=ne[1],se=function(e,a){for(var t=[],c=Math.ceil(4*a),n=c;n<(c+4-1<e.length?c+4:e.length);n++)t.push(e[n]);return t};return!V&&e.match.params.keyword&&(N=!0,o()(".zmoto-products").removeClass("fadeIn"),q(e.match.params.keyword)),B&&g.isEqual(B,e.match.params)||(N=!0,o()(".zmoto-products").removeClass("fadeIn"),M(e.match.params)),(!t.data||t.data&&!t.data.year)&&r("year",{limit:5}),Object(n.useEffect)((function(){if(t.data&&(!h&&t.data.type&&f(t.data.type),!w&&t.data.genre&&O(t.data.genre),!C&&t.data.nation&&S(t.data.nation),!D&&t.data.year&&I(t.data.year)),h&&w&&C&&D&&B&&N){var a=[],c=[];if(B.type&&"all-type"!==B.type){var n=g.find(h,{id:B.type});n&&(a.push(["type",n]),c.push({url:"/".concat(n.id),label:n.name}))}if(B.genre&&"all-genre"!==B.genre){var m=g.find(w,{id:B.genre});m&&(a.push(["genre",m]),c.push({url:"/the-loai/".concat(m.id),label:m.name}))}if(B.nation&&"all-nation"!==B.nation){var s=g.find(C,{id:B.nation});s&&(a.push(["nation",s]),c.push({url:"/quoc-gia/".concat(s.id),label:s.name}))}B.year&&"all-year"!==B.year&&(a.push(["year",B.year]),c.push({url:"/phim-nam/".concat(B.year),label:"Phim ".concat(B.year)})),a.length&&(l.getDocWithMultiCondition("movie",{where:a,orderBy:["createdAt","desc"]},(function(e){var a=se(e,0);U(a),Q(e)})),N=!1),$(c)}V&&N&&(l.getDocWithKeyword("movie",{where:[["keywords CONTAINS '".concat(e.match.params.keyword.replace(/ /g,"%20"),"'")],["tags CONTAINS '".concat(e.match.params.keyword.replace(/ /g,"%20"),"'")]]},(function(e){var a=se(e,0);U(a),Q(e)})),N=!1)}),[t.data,h,w,C,D,B,V,l,e.match.params.keyword]),!N&&F&&(o()(".main-page").addClass("fadeIn"),o()(".zmoto-products").addClass("fadeIn")),!ae&&F&&F.length!==ae&&te(F.length/4),m.a.createElement("div",{id:"MoviePage",className:"main-page fadeOut"},e.match.params.keyword?m.a.createElement(d.a,{items:["T\u1eeb kh\xf3a: ".concat(e.match.params.keyword)]}):m.a.createElement(d.a,{items:Z}),m.a.createElement("div",{className:"zmoto-inner-page"},m.a.createElement("div",{className:"zmovo-product-page"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"zmovo-product-items"},m.a.createElement("div",{className:"zmovo-product-items-inner"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"zmovo-product-with-sedbar"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-9"},m.a.createElement(E,{params:B,type:h,genre:w,nation:C,year:D,filter:F,history:e.history,setFilter:Q,currentPage:me,setCurrentPage:le,getDataPage:se,setDataPage:U}),m.a.createElement("div",{className:"zmoto-products fadeOut"},H&&H.length?m.a.createElement(p,{data:H}):m.a.createElement("h4",null,"Kh\xf4ng t\xecm th\u1ea5y phim b\u1ea1n c\u1ea7n!")),F&&F.length>4?m.a.createElement("div",{className:"product-filter"},m.a.createElement("div",{className:"product-filter-inner"},m.a.createElement("div",{className:"product-filter-list"},m.a.createElement("div",{className:"pagination-wrapper"},m.a.createElement("nav",{"aria-label":"navigations"},m.a.createElement(s.a,{previousLabel:"<",nextLabel:">",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link pagefirst",nextLinkClassName:"page-link lastpage",breakLabel:"...",breakClassName:"page-item break-me",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",pageCount:ae,forcePage:me,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){le(e.selected);var a=se(F,e.selected);U(a)}})))))):""),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(u.a,null))))))))))))}},61:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var c=t(0),n=t.n(c),m=t(19);function l(e){return Object(c.useEffect)((function(){})),n.a.createElement("div",{className:"zmovo-breadcrumb"},n.a.createElement("div",{className:"zmovo-breadcrumb-area"},n.a.createElement("div",{className:"zmovo-breadcrumb-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"zmovo-breadcrumb-inner text-center"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(m.b,{to:"/"},"Trang ch\u1ee7")),e.items&&e.items.map((function(e,a){return n.a.createElement("li",{key:a},e.url?n.a.createElement(m.b,{to:e.url},e.label):n.a.createElement("span",null,e))}))))))))}},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var c=t(13),n=t(0),m=t.n(n),l=t(14),s=t(19);t(63);function i(e){var a=Object(l.c)().firebase,t=Object(n.useState)(),i=Object(c.a)(t,2),r=i[0],o=i[1],d=Object(n.useState)(),u=Object(c.a)(d,2),v=u[0],p=u[1],E=Object(n.useState)(),g=Object(c.a)(E,2),N=g[0],b=g[1];return Object(n.useEffect)((function(){r||a.getDocWithCondition("movie",{where:["status",0],orderBy:["view","desc"]},o),v||a.getDocWithCondition("movie",{where:["type",{id:"phim-le",name:"Phim l\u1ebb"}],limit:5,orderBy:["view","desc"]},p),N||a.getDocWithCondition("movie",{where:["type",{id:"phim-bo",name:"Phim b\u1ed9"}],limit:5,orderBy:["view","desc"]},b)}),[r,v,N,a]),m.a.createElement("div",{className:"zmovo-sidebar"},m.a.createElement("div",{className:"zmovo-widget"},m.a.createElement("div",{className:"zmovo-video-list-inner"},m.a.createElement("h2",{className:"widget-title mb-30"},m.a.createElement("span",null,"Top trailer")),m.a.createElement("div",{className:"zmovo-m-list-items mt-30"},r&&r.map((function(e,a){return m.a.createElement("div",{key:a,className:"zmovo-m-item"},m.a.createElement(s.b,{to:"/phim/".concat(e.id)},m.a.createElement("div",{className:"zmovo-m-item-img"},m.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),m.a.createElement("div",{className:"zmovo-m-item-content"},m.a.createElement("div",{className:"zmovo-m-item-c1"},m.a.createElement("span",null,e.name)),m.a.createElement("div",{className:"zmovo-m-item-text"},m.a.createElement("span",null,e.subname)),m.a.createElement("div",{className:"zmovo-m-item-time"},m.a.createElement("span",null,e.time)))))}))))),m.a.createElement("div",{className:"zmovo-widget"},m.a.createElement("div",{className:"zmovo-video-list-inner"},m.a.createElement("h2",{className:"widget-title mb-30"},m.a.createElement("span",null,"Top phim l\u1ebb")),m.a.createElement("div",{className:"zmovo-m-list-items mt-30"},v&&v.map((function(e,a){return m.a.createElement("div",{key:a,className:"zmovo-m-item"},m.a.createElement(s.b,{to:"/phim/".concat(e.id)},m.a.createElement("div",{className:"zmovo-m-item-img"},m.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),m.a.createElement("div",{className:"zmovo-m-item-content"},m.a.createElement("div",{className:"zmovo-m-item-c1"},m.a.createElement("span",null,e.name)),m.a.createElement("div",{className:"zmovo-m-item-text"},m.a.createElement("span",null,e.subname)),m.a.createElement("div",{className:"zmovo-m-item-time"},m.a.createElement("span",null,e.time)))))}))))),m.a.createElement("div",{className:"zmovo-widget"},m.a.createElement("div",{className:"zmovo-video-list-inner"},m.a.createElement("h2",{className:"widget-title mb-30"},m.a.createElement("span",null,"Top phim b\u1ed9")),m.a.createElement("div",{className:"zmovo-m-list-items mt-30"},N&&N.map((function(e,a){return m.a.createElement("div",{key:a,className:"zmovo-m-item"},m.a.createElement(s.b,{to:"/phim/".concat(e.id)},m.a.createElement("div",{className:"zmovo-m-item-img"},m.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),m.a.createElement("div",{className:"zmovo-m-item-content"},m.a.createElement("div",{className:"zmovo-m-item-c1"},m.a.createElement("span",null,e.name)),m.a.createElement("div",{className:"zmovo-m-item-text"},m.a.createElement("span",null,e.subname)),m.a.createElement("div",{className:"zmovo-m-item-time"},m.a.createElement("span",null,e.time)))))}))))))}},63:function(e,a,t){},64:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var c=t(0),n=t.n(c),m=t(19);t(65);function l(e){return Object(c.useEffect)((function(){})),n.a.createElement("div",{className:"zmovo-video-item-box",title:e.data.name+" - "+e.data.subname},n.a.createElement("div",{className:"zmovo-video-box-inner"},n.a.createElement("div",{className:"zmovo-video-item-tag"},n.a.createElement("span",null,"".concat(e.data.ribbon))),n.a.createElement(m.b,{to:"/phim/"+e.data.id},n.a.createElement("div",{className:"zmovo-v-box-img gradient"},n.a.createElement("img",{src:"./assets/images/movie/"+e.data.id+"/"+e.data.poster,alt:""}),n.a.createElement("div",{className:"ply-btns"},n.a.createElement("img",{src:"./assets/images/play-button.png",alt:""})))),n.a.createElement("div",{className:"zmovo-v-box-content"},n.a.createElement(m.b,{to:"/phim/"+e.data.id},e.data.name," "),n.a.createElement("div",{className:"zmovo-v-tag c2"},n.a.createElement("span",null,e.data.subname)),n.a.createElement("div",{className:"movie-time"},n.a.createElement("span",null,e.data.time)),n.a.createElement("div",{className:"like-icon"},n.a.createElement("a",{href:"/"},n.a.createElement("span",{className:"fa fa-heart-o"}))))))}},65:function(e,a,t){},82:function(e,a,t){}}]);
//# sourceMappingURL=8.7f2b08e6.chunk.js.map