(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(32).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(25),s=c.n(a),n=c(5),r=c(3),i=c(7),l=c(4),o=c(1),j=c.n(o),d=function(e){return e.phone="phones",e.tablet="tablets",e.accessory="accessories",e}({}),u="https://mate-academy.github.io/react_phone-catalog/_new";var b=function(e){return function(e){return fetch(u+e).then((function(e){return e.json()}))}(e)},m=function(){return b("/products.json")},_=c(0),h=j.a.createContext({products:[],phonesCount:"",tabletsCount:"",accessoriesCount:"",brandNewProducts:[],hotPriceProducts:[],isLoading:!1,getCategoryItems:function(){return[]}}),O=function(e){var t=e.children,c=Object(o.useState)([]),a=Object(l.a)(c,2),s=a[0],n=a[1],r=Object(o.useState)(!1),j=Object(l.a)(r,2),u=j[0],b=j[1];Object(o.useEffect)((function(){b(!0),m().then(n).catch((function(){})).finally((function(){b(!1)}))}),[]);var O=Object(i.a)(s).sort((function(e,t){return t.year-e.year})).sort((function(e,t){return t.price-e.price})),x=Object(i.a)(s).sort((function(e,t){var c=e.fullPrice-e.price;return t.fullPrice-t.price-c})),p=Object(o.useCallback)((function(e){return Object(i.a)(s).filter((function(t){return t.category===e}))}),[s]),N=Object(o.useCallback)((function(e){var t=p(e);return 1===t.length?"".concat(t.length," model"):"".concat(t.length," models")}),[p]),g=N(d.phone),v=N(d.tablet),f=N(d.accessory),P={products:s,phonesCount:g,tabletsCount:v,accessoriesCount:f,brandNewProducts:O,isLoading:u,hotPriceProducts:x,getCategoryItems:p};return Object(_.jsx)(h.Provider,{value:P,children:t})};function x(e,t){var c=Object(o.useState)((function(){var c=localStorage.getItem(e);if(!c)return t;try{return JSON.parse(c)}catch(a){return localStorage.removeItem(e),t}})),a=Object(l.a)(c,2),s=a[0],n=a[1];return[s,function(t){localStorage.setItem(e,JSON.stringify(t)),n(t)}]}var p=j.a.createContext({cart:[],setCart:function(){},handleAddToCart:function(){},removeFromCart:function(){},increaseQuantity:function(){},decreaseQuantity:function(){}}),N=function(e){var t=e.children,c=x("cart",[]),a=Object(l.a)(c,2),s=a[0],n=a[1];var r={cart:s,setCart:n,handleAddToCart:function(e){s.some((function(t){return t.product.itemId===e.itemId}))?n(Object(i.a)(s).filter((function(t){return t.product.itemId!==e.itemId}))):n([].concat(Object(i.a)(s),[{id:s.length+1,quantity:1,product:e}]))},removeFromCart:function(e){return n(s.filter((function(t){return t.id!==e})))},increaseQuantity:function(e){var t=Object(i.a)(s),c=t.find((function(t){return t.id===e}));c&&(c.quantity+=1,n(t))},decreaseQuantity:function(e){var t=Object(i.a)(s),c=t.find((function(t){return t.id===e}));c&&(c.quantity-=1,n(t))}};return Object(_.jsx)(p.Provider,{value:r,children:t})},g=j.a.createContext({fav:[],setFav:function(){},handleAddToFav:function(){}}),v=function(e){var t=e.children,c=x("fav",[]),a=Object(l.a)(c,2),s=a[0],n=a[1];var r={fav:s,setFav:n,handleAddToFav:function(e){s.find((function(t){return t.itemId===e.itemId}))?n(Object(i.a)(s).filter((function(t){return t.itemId!==e.itemId}))):n([].concat(Object(i.a)(s),[e]))}};return Object(_.jsx)(g.Provider,{value:r,children:t})},f=c(8),P=c.n(f),y=(c(32),function(){return Object(_.jsx)(n.c,{to:"/",className:"Logo icon"})}),C=(c(33),function(e){var t=e.isActive;return P()("Navbar__item",{"Navbar__item--active":t})}),S=function(){return Object(_.jsx)("nav",{className:"Navbar",children:Object(_.jsxs)("ul",{className:"Navbar__list",children:[Object(_.jsx)("li",{children:Object(_.jsx)(n.c,{to:"/",className:C,children:"Home"})}),Object(_.jsx)("li",{children:Object(_.jsx)(n.c,{to:"/phones",className:C,children:"Phones"})}),Object(_.jsx)("li",{children:Object(_.jsx)(n.c,{to:"/tablets",className:C,children:"Tablets"})}),Object(_.jsx)("li",{children:Object(_.jsx)(n.c,{to:"/accessories",className:C,children:"Accessories"})})]})})},D=(c(34),c(26)),F=c.n(D);function k(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(l.a)(e,2),a=t[0],s=t[1];null===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}c(36);var w=function(){var e=Object(n.d)(),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(c.get("query")||""),i=Object(l.a)(s,2),j=i[0],d=i[1],u=Object(r.o)().pathname;Object(o.useEffect)((function(){var e=c.get("query")||"";d(e),a(k(c,{query:e||null}))}),[c,a]);var b=Object(o.useMemo)((function(){return F()(a,1e3)}),[a]),m=function(){d(""),a(k(c,{query:null}))};return Object(_.jsxs)("div",{className:"Search",children:[Object(_.jsx)("input",{type:"text",className:"Search__input",placeholder:"Search in ".concat(u.slice(1),"..."),value:j,onChange:function(e){e.target.value?(d(e.target.value),b(k(c,{query:e.target.value,page:"1"}))):m()}}),j?Object(_.jsx)("button",{type:"button","data-cy":"searchDelete","aria-label":"Delete query",className:"Search__clear",onClick:m}):Object(_.jsx)("div",{className:"Search__icon"})]})},B=(c(37),function(e){var t=e.count;return Object(_.jsx)("div",{className:"Counter",children:t})}),A=c.p+"static/media/Favourites.dbd19c03.svg",I=c.p+"static/media/Shopping_cart.1962e424.svg",L=function(e){var t=e.isActive;return P()("Navbar__button",{"Navbar__button--active":t})},T=function(){var e=Object(r.o)().pathname,t=Object(o.useContext)(g).fav,c=Object(o.useContext)(p).cart;return Object(_.jsx)("div",{className:"Header",children:Object(_.jsxs)("div",{className:"Header__content",children:[Object(_.jsxs)("div",{className:"Header__logo-and-nav",children:[Object(_.jsx)(y,{}),Object(_.jsx)(S,{})]}),Object(_.jsxs)("div",{className:"Header__fav-and-cart",children:[("/phones"===e||"/tablets"===e||"/accessories"===e||"/favorites"===e)&&Object(_.jsx)(w,{}),Object(_.jsx)(n.c,{to:"/favorites",className:L,children:Object(_.jsxs)("div",{className:"Action",children:[Object(_.jsx)("img",{src:A,alt:"Favorites",className:"Action__img"}),!!t.length&&Object(_.jsx)(B,{count:t.length})]})}),Object(_.jsx)(n.c,{to:"/cart",className:L,children:Object(_.jsxs)("div",{className:"Action",children:[Object(_.jsx)("img",{src:I,alt:"Shopping cart",className:"Action__img"}),!!c.length&&Object(_.jsx)(B,{count:c.length})]})})]})]})})},q=(c(38),function(){return window.scrollTo({top:0,behavior:"smooth"})}),R=function(){return Object(_.jsx)("div",{className:"Footer",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"Footer__content",children:[Object(_.jsx)(y,{}),Object(_.jsx)("nav",{className:"Footer__nav",children:Object(_.jsxs)("ul",{className:"Footer__nav-list",children:[Object(_.jsx)("li",{className:"Footer__nav-item",children:Object(_.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noreferrer noopener",className:"Footer__nav-link",children:"Github"})}),Object(_.jsx)("li",{className:"Footer__nav-item",children:Object(_.jsx)(n.b,{to:"/contacts",className:"Footer__nav-link",children:"Contacts"})}),Object(_.jsx)("li",{className:"Footer__nav-item",children:Object(_.jsx)(n.b,{to:"/rigths",className:"Footer__nav-link",children:"Rights"})})]})}),Object(_.jsxs)("div",{className:"Footer__button",children:[Object(_.jsx)("p",{className:"Footer__button-text",children:"Back to top"}),Object(_.jsx)("button",{type:"button",className:"button button--back-to-top",onClick:q,"aria-label":"Back to top"})]})]})})})},H=(c(39),function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(T,{}),Object(_.jsx)("div",{className:"App__main",children:Object(_.jsx)(r.b,{})}),Object(_.jsx)(R,{})]})}),M=c.p+"static/media/Arrow_left.c0d01b22.svg",E=(c(40),function(){return Object(_.jsxs)(n.b,{to:"..",className:"Back",children:[Object(_.jsx)("img",{src:M,alt:"Arrow",className:"Back__icon"}),Object(_.jsx)("p",{className:"Back__text",children:"Back"})]})}),G=(c(41),function(e){var t=e.item,c=Object(o.useContext)(p),a=c.removeFromCart,s=c.increaseQuantity,n=c.decreaseQuantity,r=t.product,i=r.image,l=r.name,j=r.price;return Object(_.jsxs)("li",{className:"CartItem",children:[Object(_.jsxs)("div",{className:"CartItem__main-info",children:[Object(_.jsx)("button",{type:"button","aria-label":"Delete",className:"CartItem__clear","data-cy":"cartDeleteButton",onClick:function(){return a(t.id)}}),Object(_.jsx)("div",{className:"CartItem__image-container",children:Object(_.jsx)("img",{src:"".concat(u,"/").concat(i),alt:l,className:"CartItem__image"})}),Object(_.jsx)("span",{className:"CartItem__title",children:l})]}),Object(_.jsxs)("div",{className:"CartItem__quan-and-price",children:[Object(_.jsxs)("div",{className:"CartItem__quantity-area",children:[Object(_.jsx)("button",{type:"button","aria-label":"Remove",className:"button button--minus",disabled:1===t.quantity,onClick:function(){return n(t.id)}}),Object(_.jsx)("p",{className:"CartItem__quantity",children:t.quantity||1}),Object(_.jsx)("button",{type:"button","aria-label":"Add",className:"button button--plus",onClick:function(){return s(t.id)}})]}),Object(_.jsxs)("span",{className:"CartItem__price",children:["$",j]})]})]})}),Q=(c(42),function(){var e=Object(o.useContext)(p).cart;return Object(_.jsx)("div",{className:"CartPage",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"CartPage__content",children:[Object(_.jsxs)("div",{className:"CartPage__top",children:[Object(_.jsx)(E,{}),Object(_.jsx)("h2",{className:"CartPage__title",children:"Cart"})]}),Object(_.jsx)("div",{className:"CartPage__main",children:Object(_.jsx)("ul",{className:"CartPage__list",children:e.map((function(e){return Object(_.jsx)(G,{item:e},e.id)}))})})]})})})}),$=c.p+"static/media/Home.d4c29e4f.svg",J=(c(43),function(e){var t=e.page,c=e.productName;return Object(_.jsxs)("div",{className:"Breadcrumbs","data-cy":"breadCrumbs",children:[Object(_.jsx)(n.b,{to:"/",className:"Breadcrumbs__home",children:Object(_.jsx)("img",{src:$,alt:"Home",className:"Breadcrumbs__home-img"})}),Object(_.jsx)("div",{className:"Breadcrumbs__arrow"}),Object(_.jsx)(n.b,{to:"/".concat(t),className:P()("Breadcrumbs__page-title",{"Breadcrumbs__page-title--dark":c}),children:t}),c&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"Breadcrumbs__arrow"}),Object(_.jsx)("p",{className:"Breadcrumbs__product-title",children:c})]})]})}),X=c.p+"static/media/Search.eb670dd9.svg",z=(c(44),function(){return Object(_.jsxs)("section",{className:"NoSearchResults",children:[Object(_.jsx)("img",{src:X,alt:"Search",className:"NoSearchResults__image"}),Object(_.jsx)("h2",{className:"NoSearchResults__title",children:"Oops, no results found"})]})}),U=(c(45),function(e){var t=e.newProduct,c=Object(o.useContext)(p),a=c.cart,s=c.handleAddToCart,r=Object(o.useContext)(g),i=r.fav,l=r.handleAddToFav,j=a.some((function(e){return e.product.itemId===t.itemId})),d=i.find((function(e){return e.itemId===t.itemId})),b=t.image,m=t.name,h=t.category,O=t.itemId,x=t.price,N=t.fullPrice,v=t.screen,f=t.capacity,y=t.ram;return Object(_.jsxs)("div",{className:"ProductCart",children:[Object(_.jsxs)(n.b,{to:"/".concat(h,"/").concat(O),className:"ProductCart__link",children:[Object(_.jsx)("div",{className:"ProductCart__image-container",children:Object(_.jsx)("img",{src:"".concat(u,"/").concat(b),alt:m,className:"ProductCart__image"})}),Object(_.jsxs)("div",{className:"ProductCart__info",children:[Object(_.jsx)("h2",{className:"ProductCart__name",children:m}),Object(_.jsxs)("div",{className:"ProductCart__prices",children:[Object(_.jsxs)("span",{className:"ProductCart__new-price",children:["$",x]}),Object(_.jsxs)("span",{className:"ProductCart__full-price",children:["$",N]})]}),Object(_.jsx)("div",{className:"ProductCart__line"})]}),Object(_.jsxs)("ul",{className:"ProductCart__features",children:[Object(_.jsxs)("li",{className:"ProductCart__feature",children:[Object(_.jsx)("span",{className:"ProductCart__feature-name",children:"Screen"}),Object(_.jsx)("span",{className:"ProductCart__feature-value",children:v})]}),Object(_.jsxs)("li",{className:"ProductCart__feature",children:[Object(_.jsx)("span",{className:"ProductCart__feature-name",children:"Capacity"}),Object(_.jsx)("span",{className:"ProductCart__feature-value",children:f})]}),Object(_.jsxs)("li",{className:"ProductCart__feature",children:[Object(_.jsx)("span",{className:"ProductCart__feature-name",children:"RAM"}),Object(_.jsx)("span",{className:"ProductCart__feature-value",children:y})]})]})]}),Object(_.jsxs)("div",{className:"ProductCart__buttons",children:[Object(_.jsx)("button",{type:"button",className:P()("button__add-to-cart",{"button__added-to-cart":j}),onClick:function(){return s(t)},children:j?"Added to cart":"Add to cart"}),Object(_.jsx)("button",{type:"button","aria-label":"Like","data-cy":"addToFavorite",className:P()("button button--like",{"button--like-active":d}),onClick:function(){return l(t)}})]})]})}),Y=(c(46),function(e){var t=e.products;return Object(_.jsx)("div",{className:"ProductsList","data-cy":"productList",children:t.map((function(e){return Object(_.jsx)(U,{newProduct:e},e.itemId)}))})}),Z=(c(47),function(){var e=Object(n.d)(),t=Object(l.a)(e,1)[0],c=Object(o.useContext)(g).fav,a=t.get("query")||"",s=Object(o.useCallback)((function(){var e=Object(i.a)(c);return a?e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):e}),[c,a])();return Object(_.jsx)("div",{className:"Favorites",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"Favorites__content",children:[Object(_.jsx)(J,{page:"Favorites"}),Object(_.jsxs)("div",{className:"Favorites__main-info",children:[Object(_.jsx)("h2",{className:"Favorites__title",children:"Favorites"}),Object(_.jsx)("span",{className:"Favorites__models-count",children:a?"".concat(s.length," result").concat(1===s.length?"":"s"):"".concat(s.length," item").concat(1===s.length?"":"s")})]}),!s.length&&a&&Object(_.jsx)(z,{}),Object(_.jsx)(Y,{products:s})]})})})}),K=(c(48),function(){return Object(_.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(_.jsx)("div",{className:"Loader__content"})})}),V=(c(49),[{url:c.p+"static/media/phones.3fb173f0.png",alt:"phones"},{url:c.p+"static/media/tablets.a962057c.png",alt:"tablets"},{url:c.p+"static/media/accessories.bdd2e0fc.png",alt:"accessories"}]),W=1040,ee=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1],s=V.length-1,r=c*W,i=Object(o.useCallback)((function(){a(c===s?0:function(e){return e+1})}),[c,s]);return Object(o.useEffect)((function(){var e=setInterval(i,5e3);return function(){return clearInterval(e)}}),[c,i]),Object(_.jsx)("div",{className:"Slider",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"Slider__content",children:[Object(_.jsxs)("div",{className:"Slider__main",children:[Object(_.jsx)("button",{type:"button","aria-label":"Previous",className:"button button--slider button--slider-back",onClick:function(){a(0===c?s:function(e){return e-1})}}),Object(_.jsx)("ul",{className:"Slider__list",style:{width:W},children:V.map((function(e){return Object(_.jsx)("li",{style:{transform:"translateX(-".concat(r,"px)"),transition:"transform ".concat(1500,"ms ease")},children:Object(_.jsx)(n.b,{to:"/".concat(e.alt),children:Object(_.jsx)("img",{src:e.url,alt:e.alt,width:W})})},e.url)}))}),Object(_.jsx)("button",{type:"button","aria-label":"Next",className:"button button--slider button--slider-forward",onClick:i})]}),Object(_.jsx)("div",{className:"Slider__dots",children:V.map((function(e,t){return Object(_.jsx)("div",{className:P()("Slider__dot",{"Slider__dot--active":t===c})},e.url)}))})]})})})},te=(c(50),function(e){var t=e.title,c=e.products,a=Object(o.useState)(0),s=Object(l.a)(a,2),n=s[0],r=s[1],i=288*n,j=c.length-1;return Object(_.jsxs)("div",{className:"ProductsSlider",children:[Object(_.jsxs)("div",{className:"ProductsSlider__title-and-buttons",children:[Object(_.jsx)("h2",{className:"ProductsSlider__title",children:t}),Object(_.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(_.jsx)("button",{type:"button","aria-label":"Previous products",className:"button button--prev",disabled:0===n,onClick:function(){var e=n-2;r(e<0?0:e)}}),Object(_.jsx)("button",{type:"button","aria-label":"Next products",className:"button button--next",onClick:function(){r(n===j?0:function(e){return e+2})}})]})]}),Object(_.jsx)("div",{className:"ProductsSlider__cards-container","data-cy":"cardsContainer",children:c.map((function(e){return Object(_.jsx)("div",{style:{width:1136,transform:"translateX(-".concat(i,"px)"),transition:"transform ".concat(1e3,"ms ease")},children:Object(_.jsx)(U,{newProduct:e})},e.id)}))})]})}),ce=function(){var e=Object(o.useContext)(h).hotPriceProducts;return Object(_.jsx)("div",{className:"HotPrices",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)(te,{title:"Hot prices",products:e})})})},ae=(c(51),c.p+"static/media/phones.cbed3047.png"),se=c.p+"static/media/tablets.c198526a.png",ne=c.p+"static/media/accessories.b914f412.png",re=function(){var e=Object(o.useContext)(h),t=e.phonesCount,c=e.tabletsCount,a=e.accessoriesCount;return Object(_.jsx)("div",{className:"ShopByCategory",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"ShopByCategory__content",children:[Object(_.jsx)("h2",{className:"ShopByCategory__title",children:"Shop by category"}),Object(_.jsxs)("div",{className:"ShopByCategory__categories","data-cy":"categoryLinksContainer",children:[Object(_.jsx)("div",{className:"ShopByCategory__category",children:Object(_.jsxs)(n.b,{to:"/phones",className:"ShopByCategory__category-content",children:[Object(_.jsx)("img",{src:ae,alt:"Mobile Phones",className:"ShopByCategory__category-image"}),Object(_.jsxs)("div",{className:"ShopByCategory__category-info",children:[Object(_.jsx)("h3",{className:"ShopByCategory__category-title",children:"Mobile phones"}),Object(_.jsx)("div",{className:"ShopByCategory__category-count",children:t})]})]})}),Object(_.jsx)("div",{className:"ShopByCategory__category",children:Object(_.jsxs)(n.b,{to:"/tablets",className:"ShopByCategory__category-content",children:[Object(_.jsx)("img",{src:se,alt:"Tablets",className:"ShopByCategory__category-image"}),Object(_.jsxs)("div",{className:"ShopByCategory__category-info",children:[Object(_.jsx)("h3",{className:"ShopByCategory__category-title",children:"Tablets"}),Object(_.jsx)("div",{className:"ShopByCategory__category-count",children:c})]})]})}),Object(_.jsx)("div",{className:"ShopByCategory__category",children:Object(_.jsxs)(n.b,{to:"/accessories",className:"ShopByCategory__category-content",children:[Object(_.jsx)("img",{src:ne,alt:"Accessories",className:"ShopByCategory__category-image"}),Object(_.jsxs)("div",{className:"ShopByCategory__category-info",children:[Object(_.jsx)("h3",{className:"ShopByCategory__category-title",children:"Accessories"}),Object(_.jsx)("div",{className:"ShopByCategory__category-count",children:a})]})]})})]})]})})})},ie=function(){var e=Object(o.useContext)(h).brandNewProducts;return Object(_.jsx)("div",{className:"BrandNew",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsx)(te,{title:"Brand new models",products:e})})})},le=(c(52),function(){var e=Object(o.useContext)(h).isLoading;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"HomePage",children:[e&&Object(_.jsx)(K,{}),Object(_.jsx)(ee,{}),Object(_.jsx)(ce,{}),Object(_.jsx)(re,{}),Object(_.jsx)(ie,{})]})})});c(53);var oe=function(e){var t=e.pages,c=Object(n.d)(),a=Object(l.a)(c,2),s=a[0],r=a[1],i=+(s.get("page")||1),o=function(e){for(var t=[],c=1;c<=e;c+=1)t.push(c);return t}(t);return Object(_.jsxs)("div",{className:"Pagination","data-cy":"pagination",children:[Object(_.jsx)("button",{type:"button","data-cy":"paginationLeft","aria-label":"Prev page",className:"button button--prev",disabled:1===i,onClick:function(){var e=+(s.get("page")||1);r(k(s,{page:(e-1).toString()}))}}),Object(_.jsx)("ul",{className:"Pagination__list",children:o.map((function(e){return Object(_.jsx)(n.b,{to:{search:k(s,{page:e.toString()}).toString()},className:P()("Pagination__link",{"Pagination__link--active":i===e}),children:Object(_.jsx)("li",{className:P()("Pagination__item button",{"Pagination__item--active":i===e}),children:e})},e)}))}),Object(_.jsx)("button",{type:"button","aria-label":"Next page","data-cy":"paginationRight",className:"button button--next",disabled:i===o.length,onClick:function(){var e=+(s.get("page")||1);r(k(s,{page:(e+1).toString()}))}})]})},je=(c(54),{Newest:"age",Alphabetically:"name",Cheapest:"price"}),de=["4","8","16","All"],ue=function(){var e=Object(n.d)(),t=Object(l.a)(e,1)[0],c=Object(o.useContext)(h).phonesCount,a=Object(o.useState)([]),s=Object(l.a)(a,2),r=s[0],j=s[1],u=Object(o.useState)(!1),b=Object(l.a)(u,2),O=b[0],x=b[1],p=Object(o.useState)(null),N=Object(l.a)(p,2),g=N[0],v=N[1],f=+(t.get("page")||1),y=t.get("perPage")||8,C=t.get("sort")||"age",S=t.get("query")||"";Object(o.useEffect)((function(){x(!0),m().then((function(e){return Object(i.a)(e).filter((function(e){return e.category===d.phone}))})).then(j).catch((function(){})).finally((function(){x(!1)}))}),[]);var D=Object(o.useCallback)((function(){var e=Object(i.a)(r);switch(C){case je.Alphabetically:e=e.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case je.Cheapest:e=e.sort((function(e,t){return e.price-t.price}));break;case je.Newest:e=e.sort((function(e,t){return t.year-e.year})).sort((function(e,t){return t.price-e.price}));break;default:return e}return S&&(e=e.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}))),e}),[r,S,C])(),F=Math.ceil(D.length/+y)||1,w=(f-1)*+y,B=f*+y<D.length?f*+y:D.length,A=function(e){v(e===g?null:e)},I=function(){v(null)};return Object(_.jsx)("div",{className:"PhonesPage",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"PhonesPage__content",children:[Object(_.jsx)(J,{page:"Phones"}),Object(_.jsxs)("div",{className:"PhonesPage__main-info",children:[Object(_.jsx)("h2",{className:"PhonesPage__title",children:"Mobile phones"}),Object(_.jsx)("span",{className:"PhonesPage__models-count",children:S?"".concat(D.length," result").concat(1===D.length?"":"s"):"".concat(c)})]}),O&&!D.length&&!!S&&Object(_.jsx)(K,{}),!D.length&&!O&&Object(_.jsx)(z,{}),!!D.length&&Object(_.jsxs)("div",{className:"PhonesPage__dropdowns",children:[Object(_.jsxs)("div",{className:"Dropdown",children:[Object(_.jsx)("p",{className:"Dropdown__title",children:"Sort by"}),Object(_.jsxs)("div",{className:"Dropdown__content",children:[Object(_.jsxs)("button",{type:"button",className:"button button--dropdown",onClick:function(){return A("sort")},onBlur:I,children:[Object(_.jsx)("p",{className:"Dropdown__text",children:function(){var e=t.get("sort");return Object.keys(je).find((function(t){return je[t]===e}))||"Newest"}()}),Object(_.jsx)("div",{className:P()("Dropdown__icon",{"Dropdown__icon--active":"sort"===g})})]}),Object(_.jsx)("ul",{className:P()("Dropdown__list",{"Dropdown__list--opened":"sort"===g}),children:Object.entries(je).map((function(e){var c=Object(l.a)(e,2),a=c[0],s=c[1];return Object(_.jsx)("div",{className:"Dropdown__item",children:Object(_.jsx)(n.b,{to:{search:k(t,{sort:s,page:"1"}).toString()},className:"Dropdown__link",children:a})},s)}))})]})]}),Object(_.jsxs)("div",{className:"Dropdown",children:[Object(_.jsx)("p",{className:"Dropdown__title",children:"Items on page"}),Object(_.jsxs)("div",{className:"Dropdown__content",children:[Object(_.jsxs)("button",{type:"button",className:"button button--dropdown",onClick:function(){return A("perPage")},onBlur:I,children:[Object(_.jsx)("p",{className:"button--dropdown-text",children:y.toString()}),Object(_.jsx)("div",{className:P()("Dropdown__icon",{"Dropdown__icon--active":"perPage"===g})})]}),Object(_.jsx)("ul",{className:P()("Dropdown__list",{"Dropdown__list--opened":"perPage"===g}),children:de.map((function(e){return Object(_.jsx)("div",{className:"Dropdown__item",children:Object(_.jsx)(n.b,{to:{search:k(t,{perPage:e,page:"1"}).toString()},className:"Dropdown__link",children:e})},e)}))})]})]})]}),!O&&!!D.length&&Object(_.jsx)(Y,{products:D.slice(w,B)}),F>1&&"All"!==y&&Object(_.jsx)(oe,{pages:F})]})})})},be=(c(55),{black:"#202020",coral:"#e4664f",gold:"#fbd7bd",green:"#ade1cd",midnightgreen:"#4e5850",purple:"#d1cddb",red:"#ba0c2f",rosegold:"#fddcd7",silver:"#ebebe3",spacegray:"#5f5f5f",white:"#f9f6ef",yellow:"#ffe680"}),me=function(){var e=Object(r.o)().pathname,t=e.slice(1).split("/")[0],c=Object(r.s)().productId,a=Object(o.useState)(),s=Object(l.a)(a,2),i=s[0],j=s[1],d=Object(o.useState)(!1),u=Object(l.a)(d,2),m=u[0],O=u[1],x=Object(o.useState)(""),N=Object(l.a)(x,2),v=N[0],f=N[1],y=Object(o.useContext)(p),C=y.cart,S=y.handleAddToCart,D=Object(o.useContext)(g),F=D.fav,k=D.handleAddToFav,w=Object(o.useContext)(h),B=w.products,A=w.hotPriceProducts,I=Object(o.useMemo)((function(){return(null===i||void 0===i?void 0:i.images)||[]}),[i]),L=Object(o.useMemo)((function(){return B.find((function(e){return e.itemId===c}))}),[c,B]);Object(o.useEffect)((function(){var e;c&&(O(!0),(e=c,b("/products/".concat(e,".json"))).then(j).catch((function(){})).finally((function(){O(!1)})))}),[c]),Object(o.useEffect)((function(){f(I[0])}),[I]);var T=C.find((function(e){return e.product.itemId===(null===L||void 0===L?void 0:L.itemId)})),q=F.find((function(e){return e.itemId===(null===L||void 0===L?void 0:L.itemId)}));return Object(_.jsx)("div",{className:"ProductDetailsPage",children:Object(_.jsx)("div",{className:"container",children:i&&!m&&Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:"ProductDetailsPage__content",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__section",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__top",children:[Object(_.jsx)(J,{page:t,productName:i.name}),Object(_.jsxs)("div",{className:"ProductDetailsPage__back-and-title",children:[Object(_.jsx)(E,{}),Object(_.jsx)("h2",{className:"ProductDetailsPage__product-title",children:i.name})]})]}),Object(_.jsx)("ul",{className:"ProductDetailsPage__images",children:i.images.map((function(t){return Object(_.jsx)("li",{className:P()("ProductDetailsPage__item",{"ProductDetailsPage__item--active":v===t}),children:Object(_.jsx)(n.b,{to:e,className:"ProductDetailsPage__image-link",onClick:function(){f(t)},children:Object(_.jsx)("img",{src:"_new/".concat(t),alt:t,className:"ProductDetailsPage__image"})})},t)}))}),Object(_.jsx)("div",{className:"ProductDetailsPage__main-image",children:Object(_.jsx)("img",{src:"_new/".concat(v),alt:v,className:"ProductDetailsPage__main-image-selected"})}),Object(_.jsxs)("div",{className:"ProductDetailsPage__main-info",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__product-options",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__colors-and-id",children:[Object(_.jsx)("p",{className:"ProductDetailsPage__colors-text",children:"Available colors"}),Object(_.jsx)("ul",{className:"ProductDetailsPage__colors",children:i.colorsAvailable.map((function(t){return Object(_.jsx)("li",{className:P()("ProductDetailsPage__color",{"ProductDetailsPage__color--selected":i.color===t}),children:Object(_.jsx)(n.b,{to:e.replace(i.color,t),className:"ProductDetailsPage__color-link",children:Object(_.jsx)("span",{className:"ProductDetailsPage__color-circle",style:{backgroundColor:be[t]}})})},t)}))})]}),Object(_.jsx)("div",{className:"ProductDetailsPage__line"}),Object(_.jsxs)("div",{className:"ProductDetailsPage__capacity-info",children:[Object(_.jsx)("p",{className:"ProductDetailsPage__capacity-text",children:"Select capacity"}),Object(_.jsx)("ul",{className:"ProductDetailsPage__capacity-list",children:i.capacityAvailable.map((function(t){return Object(_.jsx)("li",{className:"ProductDetailsPage__capacity-item",children:Object(_.jsx)(n.b,{to:e.replace(i.capacity.toLowerCase(),t.toLowerCase()),className:P()("ProductDetailsPage__capacity",{"ProductDetailsPage__capacity--selected":i.capacity===t}),children:t.replace("GB"," GB")})},t)}))})]}),Object(_.jsx)("div",{className:"ProductDetailsPage__line"})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__price-and-buttons",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__prices",children:[Object(_.jsxs)("span",{className:"ProductDetailsPage__price-discount",children:["$",i.priceDiscount]}),Object(_.jsxs)("span",{className:"ProductDetailsPage__price-full",children:["$",i.priceRegular]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__actions",children:[Object(_.jsx)("button",{type:"button",className:P()("button__add-to-cart",{"button__added-to-cart":T}),onClick:function(){L&&T&&S(L)},children:T?"Added to cart":"Add to cart"}),Object(_.jsx)("button",{type:"button","aria-label":"Like","data-cy":"addToFavorite",className:P()("button button--like",{"button--like-active":q}),onClick:function(){L&&q&&k(L)}})]})]}),Object(_.jsx)("div",{className:"ProductDetailsPage__features Feature",children:Object(_.jsxs)("ul",{className:"Feature__list",children:[Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Screen"}),Object(_.jsx)("p",{className:"Feature__value",children:i.screen})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Resolution"}),Object(_.jsx)("p",{className:"Feature__value",children:i.resolution.replace("\u0445"," \u0445 ")})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Processor"}),Object(_.jsx)("p",{className:"Feature__value",children:i.processor})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"RAM"}),Object(_.jsx)("p",{className:"Feature__value",children:i.ram.replace("GB"," GB")})]})]})})]})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__section",children:[Object(_.jsxs)("article",{className:"ProductDetailsPage__section-content About",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__section-top",children:[Object(_.jsx)("h3",{className:"ProductDetailsPage__section-title",children:"About"}),Object(_.jsx)("div",{className:"ProductDetailsPage__line"})]}),Object(_.jsx)("div",{className:"Description",children:Object(_.jsx)("ul",{className:"Description__list",children:i.description.map((function(e){return Object(_.jsxs)("li",{className:"Description__item",children:[Object(_.jsx)("h4",{className:"Description__title",children:e.title}),Object(_.jsx)("p",{className:"Description__text",children:e.text})]})}))})})]}),Object(_.jsxs)("article",{className:"ProductDetailsPage__section-content TechSpecs",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__section-top",children:[Object(_.jsx)("h3",{className:"ProductDetailsPage__section-title",children:"Tech specs"}),Object(_.jsx)("div",{className:"ProductDetailsPage__line"})]}),Object(_.jsx)("div",{className:"TechSpecs",children:Object(_.jsxs)("ul",{className:"Feature__list",children:[Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Screen"}),Object(_.jsx)("p",{className:"Feature__value",children:i.screen})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Resolution"}),Object(_.jsx)("p",{className:"Feature__value",children:i.resolution.replace("\u0445"," \u0445 ")})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Processor"}),Object(_.jsx)("p",{className:"Feature__value",children:i.processor})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"RAM"}),Object(_.jsx)("p",{className:"Feature__value",children:i.ram.replace("GB"," GB")})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Built in memory"}),Object(_.jsx)("p",{className:"Feature__value",children:i.capacity.replace("GB"," GB")})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Camera"}),Object(_.jsx)("p",{className:"Feature__value",children:i.camera})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Zoom"}),Object(_.jsx)("p",{className:"Feature__value",children:i.zoom})]}),Object(_.jsxs)("li",{className:"Feature__item",children:[Object(_.jsx)("p",{className:"Feature__name",children:"Cell"}),Object(_.jsx)("p",{className:"Feature__value",children:i.cell.join(", ")})]})]})})]})]}),Object(_.jsx)("div",{className:"ProductDetailsPage__section",children:Object(_.jsx)("div",{className:"ProductDetailsPage__section-slider",children:Object(_.jsx)(te,{title:"You may also like",products:A})})})]})})})})},_e=function(){return Object(_.jsx)(O,{children:Object(_.jsx)(v,{children:Object(_.jsx)(N,{children:Object(_.jsx)(n.a,{children:Object(_.jsx)(r.e,{children:Object(_.jsxs)(r.c,{path:"/",element:Object(_.jsx)(H,{}),children:[Object(_.jsx)(r.c,{index:!0,element:Object(_.jsx)(le,{})}),Object(_.jsx)(r.c,{path:"home",element:Object(_.jsx)(r.a,{to:"/"})}),Object(_.jsxs)(r.c,{path:"phones",children:[Object(_.jsx)(r.c,{index:!0,element:Object(_.jsx)(ue,{})}),Object(_.jsx)(r.c,{path:":productId",element:Object(_.jsx)(me,{})})]}),Object(_.jsx)(r.c,{path:"favorites",element:Object(_.jsx)(Z,{})}),Object(_.jsx)(r.c,{path:"cart",element:Object(_.jsx)(Q,{})})]})})})})})})};c(56);s.a.render(Object(_.jsx)(_e,{}),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.914b97e8.chunk.js.map