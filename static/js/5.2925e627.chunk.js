(window.webpackJsonpmovies=window.webpackJsonpmovies||[]).push([[5],{61:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),l=t.n(n),s=t(19);function i(e){return Object(n.useEffect)((function(){})),l.a.createElement("div",{className:"zmovo-breadcrumb"},l.a.createElement("div",{className:"zmovo-breadcrumb-area"},l.a.createElement("div",{className:"zmovo-breadcrumb-bg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"zmovo-breadcrumb-inner text-center"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Trang ch\u1ee7")),e.items&&e.items.map((function(e,a){return l.a.createElement("li",{key:a},e.url?l.a.createElement(s.b,{to:e.url},e.label):l.a.createElement("span",null,e))}))))))))}},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(13),l=t(0),s=t.n(l),i=t(14),r=t(19);t(63);function c(e){var a=Object(i.c)().firebase,t=Object(l.useState)(),c=Object(n.a)(t,2),m=c[0],o=c[1],u=Object(l.useState)(),d=Object(n.a)(u,2),p=d[0],f=d[1],v=Object(l.useState)(),g=Object(n.a)(v,2),b=g[0],N=g[1];return Object(l.useEffect)((function(){m||a.getDocWithCondition("movie",{where:["status",0],orderBy:["view","desc"]},o),p||a.getDocWithCondition("movie",{where:["type",{id:"phim-le",name:"Phim l\u1ebb"}],limit:5,orderBy:["view","desc"]},f),b||a.getDocWithCondition("movie",{where:["type",{id:"phim-bo",name:"Phim b\u1ed9"}],limit:5,orderBy:["view","desc"]},N)}),[m,p,b,a]),s.a.createElement("div",{className:"zmovo-sidebar"},s.a.createElement("div",{className:"zmovo-widget"},s.a.createElement("div",{className:"zmovo-video-list-inner"},s.a.createElement("h2",{className:"widget-title mb-30"},s.a.createElement("span",null,"Top trailer")),s.a.createElement("div",{className:"zmovo-m-list-items mt-30"},m&&m.map((function(e,a){return s.a.createElement("div",{key:a,className:"zmovo-m-item"},s.a.createElement(r.b,{to:"/phim/".concat(e.id)},s.a.createElement("div",{className:"zmovo-m-item-img"},s.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),s.a.createElement("div",{className:"zmovo-m-item-content"},s.a.createElement("div",{className:"zmovo-m-item-c1"},s.a.createElement("span",null,e.name)),s.a.createElement("div",{className:"zmovo-m-item-text"},s.a.createElement("span",null,e.subname)),s.a.createElement("div",{className:"zmovo-m-item-time"},s.a.createElement("span",null,e.time)))))}))))),s.a.createElement("div",{className:"zmovo-widget"},s.a.createElement("div",{className:"zmovo-video-list-inner"},s.a.createElement("h2",{className:"widget-title mb-30"},s.a.createElement("span",null,"Top phim l\u1ebb")),s.a.createElement("div",{className:"zmovo-m-list-items mt-30"},p&&p.map((function(e,a){return s.a.createElement("div",{key:a,className:"zmovo-m-item"},s.a.createElement(r.b,{to:"/phim/".concat(e.id)},s.a.createElement("div",{className:"zmovo-m-item-img"},s.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),s.a.createElement("div",{className:"zmovo-m-item-content"},s.a.createElement("div",{className:"zmovo-m-item-c1"},s.a.createElement("span",null,e.name)),s.a.createElement("div",{className:"zmovo-m-item-text"},s.a.createElement("span",null,e.subname)),s.a.createElement("div",{className:"zmovo-m-item-time"},s.a.createElement("span",null,e.time)))))}))))),s.a.createElement("div",{className:"zmovo-widget"},s.a.createElement("div",{className:"zmovo-video-list-inner"},s.a.createElement("h2",{className:"widget-title mb-30"},s.a.createElement("span",null,"Top phim b\u1ed9")),s.a.createElement("div",{className:"zmovo-m-list-items mt-30"},b&&b.map((function(e,a){return s.a.createElement("div",{key:a,className:"zmovo-m-item"},s.a.createElement(r.b,{to:"/phim/".concat(e.id)},s.a.createElement("div",{className:"zmovo-m-item-img"},s.a.createElement("img",{className:"",src:"./assets/images/movie/".concat(e.id,"/").concat(e.poster),alt:"poster"})),s.a.createElement("div",{className:"zmovo-m-item-content"},s.a.createElement("div",{className:"zmovo-m-item-c1"},s.a.createElement("span",null,e.name)),s.a.createElement("div",{className:"zmovo-m-item-text"},s.a.createElement("span",null,e.subname)),s.a.createElement("div",{className:"zmovo-m-item-time"},s.a.createElement("span",null,e.time)))))}))))))}},63:function(e,a,t){},64:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),l=t.n(n),s=t(19);t(65);function i(e){return Object(n.useEffect)((function(){})),l.a.createElement("div",{className:"zmovo-video-item-box",title:e.data.name+" - "+e.data.subname},l.a.createElement("div",{className:"zmovo-video-box-inner"},l.a.createElement("div",{className:"zmovo-video-item-tag"},l.a.createElement("span",null,"".concat(e.data.ribbon))),l.a.createElement(s.b,{to:"/phim/"+e.data.id},l.a.createElement("div",{className:"zmovo-v-box-img gradient"},l.a.createElement("img",{src:"./assets/images/movie/"+e.data.id+"/"+e.data.poster,alt:""}),l.a.createElement("div",{className:"ply-btns"},l.a.createElement("img",{src:"./assets/images/play-button.png",alt:""})))),l.a.createElement("div",{className:"zmovo-v-box-content"},l.a.createElement(s.b,{to:"/phim/"+e.data.id},e.data.name," "),l.a.createElement("div",{className:"zmovo-v-tag c2"},l.a.createElement("span",null,e.data.subname)),l.a.createElement("div",{className:"movie-time"},l.a.createElement("span",null,e.data.time)),l.a.createElement("div",{className:"like-icon"},l.a.createElement("a",{href:"/"},l.a.createElement("span",{className:"fa fa-heart-o"}))))))}},65:function(e,a,t){},68:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(69),s=(n=l)&&n.__esModule?n:{default:n};a.default=s.default},69:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),l=t(0),s=m(l),i=m(t(11)),r=m(t(70)),c=m(t(71));function m(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,l=a.pageCount,i=a.marginPagesDisplayed,r=a.breakLabel,m=a.breakClassName,o=a.breakLinkClassName,u=t.state.selected;if(l<=n)for(var d=0;d<l;d++)e.push(t.getPageElement(d));else{var p=n/2,f=n-p;u>l-n/2?p=n-(f=l-u):u<n/2&&(f=n-(p=u));var v=void 0,g=void 0,b=void 0,N=function(e){return t.getPageElement(e)};for(v=0;v<l;v++)(g=v+1)<=i||g>l-i||v>=u-p&&v<=u+f?e.push(N(v)):r&&e[e.length-1]!==b&&(b=s.default.createElement(c.default,{key:v,breakLabel:r,breakClassName:m,breakLinkClassName:o,onClick:t.handleBreakClick.bind(null,v)}),e.push(b))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){"undefined"!==typeof e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,l=t.pageLinkClassName,i=t.activeClassName,c=t.activeLinkClassName,m=t.extraAriaContext;return s.default.createElement(r.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:l,activeClassName:i,activeLinkClassName:c,extraAriaContext:m,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,l=e.pageCount,i=e.containerClassName,r=e.previousLinkClassName,c=e.previousLabel,m=e.nextLinkClassName,o=e.nextLabel,u=this.state.selected,d=t+(0===u?" "+a:""),p=n+(u===l-1?" "+a:""),f=0===u?"true":"false",v=u===l-1?"true":"false";return s.default.createElement("ul",{className:i},s.default.createElement("li",{className:d},s.default.createElement("a",{onClick:this.handlePreviousPage,className:r,href:this.hrefBuilder(u-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":f},c)),this.pagination(),s.default.createElement("li",{className:p},s.default.createElement("a",{onClick:this.handleNextPage,className:m,href:this.hrefBuilder(u+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":v},o)))}}]),a}(l.Component);o.propTypes={pageCount:i.default.number.isRequired,pageRangeDisplayed:i.default.number.isRequired,marginPagesDisplayed:i.default.number.isRequired,previousLabel:i.default.node,nextLabel:i.default.node,breakLabel:i.default.oneOfType([i.default.string,i.default.node]),hrefBuilder:i.default.func,onPageChange:i.default.func,initialPage:i.default.number,forcePage:i.default.number,disableInitialCallback:i.default.bool,containerClassName:i.default.string,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,previousClassName:i.default.string,nextClassName:i.default.string,previousLinkClassName:i.default.string,nextLinkClassName:i.default.string,disabledClassName:i.default.string,breakClassName:i.default.string,breakLinkClassName:i.default.string,extraAriaContext:i.default.string,ariaLabelBuilder:i.default.func},o.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=o},70:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(t(0)),l=s(t(11));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var a=e.pageClassName,t=e.pageLinkClassName,l=e.onClick,s=e.href,i=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),r=null;return e.selected&&(r="page",i=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:l,role:"button",className:t,href:s,tabIndex:"0","aria-label":i,"aria-current":r,onKeyPress:l},e.page))};i.propTypes={onClick:l.default.func.isRequired,selected:l.default.bool.isRequired,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,extraAriaContext:l.default.string,href:l.default.string,ariaLabel:l.default.string,page:l.default.number.isRequired},a.default=i},71:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(t(0)),l=s(t(11));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var a=e.breakLabel,t=e.breakClassName,l=e.breakLinkClassName,s=e.onClick,i=t||"break";return n.default.createElement("li",{className:i},n.default.createElement("a",{className:l,onClick:s,role:"button",tabIndex:"0",onKeyPress:s},a))};i.propTypes={breakLabel:l.default.oneOfType([l.default.string,l.default.node]),breakClassName:l.default.string,breakLinkClassName:l.default.string,onClick:l.default.func.isRequired},a.default=i},81:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(13),l=t(0),s=t.n(l),i=t(14),r=t(68),c=t.n(r),m=(t(81),t(60)),o=t.n(m),u=t(61),d=t(62),p=t(64);function f(e){var a=Object(i.c)().firebase,t=Object(l.useState)(),r=Object(n.a)(t,2),m=r[0],f=r[1],v=function(e,a){for(var t=[],n=Math.ceil(4*a),l=n;l<(n+4-1<e.length?n+4:e.length);l++)t.push(e[l]);return t};return Object(l.useEffect)((function(){m||a.getDocWithCondition("movie",{where:["status",0]},f)}),[m,a]),m&&(o()(".main-page").addClass("fadeIn"),o()(".zmoto-products").addClass("fadeIn")),s.a.createElement("div",{id:"TrailerPage",className:"main-page fadeOut"},s.a.createElement(u.a,{items:["Trailer"]}),s.a.createElement("div",{className:"zmoto-inner-page"},s.a.createElement("div",{className:"zmovo-product-page"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"zmovo-product-items"},s.a.createElement("div",{className:"zmovo-product-items-inner"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"zmovo-product-with-sedbar"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-9"},s.a.createElement("div",{className:"zmoto-products fadeOut"},s.a.createElement("div",{className:"zmovo-product-list"},s.a.createElement("div",{className:"row"},m&&m.map((function(e,a){return s.a.createElement("div",{key:a,className:"col-lg-3 col-md-4 col-sm-4 col-6"},s.a.createElement("div",{className:"item"},s.a.createElement(p.a,{data:e})))}))))),m&&m.length>4?s.a.createElement("div",{className:"product-filter"},s.a.createElement("div",{className:"product-filter-inner"},s.a.createElement("div",{className:"product-filter-list"},s.a.createElement("div",{className:"pagination-wrapper"},s.a.createElement("nav",{"aria-label":"navigations"},s.a.createElement(c.a,{previousLabel:"<",nextLabel:">",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link pagefirst",nextLinkClassName:"page-link lastpage",breakLabel:"...",breakClassName:"page-item break-me",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",pageCount:m.length/4,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=v(m,e.selected);f(a)}})))))):""),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(d.a,null))))))))))))}}}]);
//# sourceMappingURL=5.2925e627.chunk.js.map