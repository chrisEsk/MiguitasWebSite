(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{pXY8:function(n,t,l){"use strict";l.r(t);var o=l("CcnG"),i=l("mrSG"),e=l("VVxe"),r=l("LvDl"),u=l("Zr1d"),a=l("ZZ/e"),s=l("dkQB"),c=l("sybk"),b=l("7K7q"),d=function(){function n(n,t,l,o,i,e,r){this.route=n,this.navCtrl=t,this.keyboard=l,this.productService=o,this.loadingCtrl=i,this.alertCtrl=e,this.authService=r,this.brandUrlId=this.route.snapshot.paramMap.get("brandUrlId")||"all",this.loadTags=!1,this.searchCriteria="",this.daList=[],this.ionRefresher=!1}return n.prototype.ngOnInit=function(){this.resetPagination(),this.search()},n.prototype.doRefresh=function(n){return i.b(this,void 0,void 0,function(){return i.e(this,function(t){switch(t.label){case 0:return this.ionRefresher=!0,[4,this.ngOnInit()];case 1:return t.sent(),n.target.complete(),this.ionRefresher=!1,[2]}})})},n.prototype.resetPagination=function(){this.useInfiniteScroll=!1,this.fetchingPage=!1,this.page=0,this.lastPage=!1},n.prototype.search=function(){var n=this;return new Promise(function(t,l){return i.b(n,void 0,void 0,function(){var n=this;return i.e(this,function(o){return this.loading=!this.useInfiniteScroll&&!this.ionRefresher,this.noResults=!1,this.productService.GetBrandProductsBySearchCriteria(this.brandUrlId,this.page,s.a.SETTINGS.PAGE_SIZE,e(this.searchCriteria)).then(function(l){n.useInfiniteScroll?Object(r.each)(l,function(t){return i.b(n,void 0,void 0,function(){var n;return i.e(this,function(l){switch(l.label){case 0:return this.daList.push(t),this.loadTags?(n=t,[4,this.productService.GetTagsForProduct(t.id)]):[3,2];case 1:n.tags=l.sent(),l.label=2;case 2:return[2]}})})}):(n.daList=l,n.loadTags&&Object(r.each)(n.daList,function(t){return i.b(n,void 0,void 0,function(){var n;return i.e(this,function(l){switch(l.label){case 0:return n=t,[4,this.productService.GetTagsForProduct(t.id)];case 1:return n.tags=l.sent(),[2]}})})})),n.loading=!1,n.noResults=Object(r.isEmpty)(n.daList),t(l)}).catch(function(t){console.error(t),n.loading=!1,n.noResults=!0,n.daList=[],l(t)}),[2]})})})},n.prototype.loadMore=function(){var n=this;this.fetchingPage||(this.useInfiniteScroll=!0,this.fetchingPage=!0,this.page++,this.search().then(function(t){n.useInfiniteScroll=!1,n.fetchingPage=!1,n.infiniteScroll.complete(),t?n.lastPage=0===t.length:n.page--}).catch(function(t){console.error(t),n.infiniteScroll.complete()}))},n.prototype.goToProduct=function(n){this.navCtrl.navigateForward("product/"+n.get("urlId"))},n.prototype.criteriaChanged=function(){this.resetPagination(),this.search()},n.prototype.clearSearchBar=function(){this.searchCriteria="",this.hideKeyboard(),this.scrollToTop(),this.resetPagination(),this.search()},n.prototype.hideKeyboard=function(){this.keyboard.hide()},n.prototype.scrollToTop=function(){this.content.scrollToTop(1500)},n}(),h=function(){return function(){}}(),p=l("pMnS"),g=l("oBZk"),f=l("otYU"),m=l("Ip0R"),C=l("ZYCi"),v=o.sb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg, var(--ion-color-light), var(--cream))}ion-card.daListCard[_ngcontent-%COMP%]{position:relative}ion-card.daListCard[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-bottom:-3px}ion-card.daListCard[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:30px;position:absolute;top:5%;left:5%;z-index:2;text-shadow:.5px .5px .5px var(--ion-color-dark);font-weight:bolder}ion-card.daListCard[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{position:absolute;top:27%;left:5%;z-index:2;text-shadow:.5px .5px .5px var(--ion-color-dark);font-size:20px}ion-card.daListCard[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{width:100%;position:absolute;z-index:3;bottom:0}ion-card.daListCard[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;box-shadow:inset 0 0 15rem rgba(var(--ion-color-dark-rgb),.4)}ion-card.daListCard[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{right:2%;bottom:20%;position:absolute}ion-card.daListCard[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]{left:0;position:absolute;bottom:0}ion-card.daListCard[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin:3px}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:1rem;max-width:960px;margin:10px auto 30px}article[_ngcontent-%COMP%]{position:relative}.article-img[_ngcontent-%COMP%]{height:200px;width:100%;-o-object-fit:cover;object-fit:cover}.article-title[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;padding:10px;background-color:rgba(255,255,255,.7)}"]],data:{animation:[{type:7,name:"staggerIn",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:":enter",animation:{type:6,styles:{opacity:0,transform:"translate3d(0,10px,0)"},offset:null},options:{optional:!0}},{type:11,selector:":enter",animation:{type:12,timings:"300ms",animation:[{type:4,styles:{type:6,styles:{opacity:1,transform:"translate3d(0,0,0)"},offset:null},timings:"600ms"}]},options:{optional:!0}}],options:null}],options:{}}]}});function P(n){return o.Qb(0,[(n()(),o.ub(0,0,null,null,1,"ion-spinner",[["class","center3"]],null,null,null,g.qb,g.F)),o.tb(1,49152,null,0,a.qb,[o.h,o.k,o.z],null,null)],null,null)}function y(n){return o.Qb(0,[(n()(),o.ub(0,0,null,null,20,"article",[],null,null,null,null,null)),(n()(),o.ub(1,0,null,null,19,"ion-card",[["class","daListCard hvr-grow"],["tappable",""]],null,[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.goToProduct(n.context.$implicit)&&o),o},g.V,g.g)),o.tb(2,49152,null,0,a.l,[o.h,o.k,o.z],null,null),(n()(),o.ub(3,0,null,0,2,"ion-img",[],null,null,null,g.db,g.s)),o.tb(4,49152,null,0,a.C,[o.h,o.k,o.z],{src:[0,"src"]},null),o.Kb(5,2),(n()(),o.ub(6,0,null,0,2,"ion-card-title",[["color","light"]],null,null,null,g.U,g.k)),o.tb(7,49152,null,0,a.p,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.Ob(8,0,["",""])),(n()(),o.ub(9,0,null,0,2,"ion-card-subtitle",[["color","light"]],null,null,null,g.T,g.j)),o.tb(10,49152,null,0,a.o,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.Ob(11,0,["",""])),(n()(),o.ub(12,0,null,0,0,"div",[["class","shadow"]],null,null,null,null,null)),(n()(),o.ub(13,0,null,0,7,"ion-card-content",[],null,null,null,g.R,g.h)),o.tb(14,49152,null,0,a.m,[o.h,o.k,o.z],null,null),(n()(),o.ub(15,0,null,0,5,"ion-badge",[["class","price"],["color","success"],["slot","end"]],null,null,null,g.O,g.d)),o.tb(16,49152,null,0,a.i,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.ub(17,0,null,0,3,"h3",[],null,null,null,null,null)),(n()(),o.ub(18,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),o.Ob(19,null,["\u20a1 ",""])),o.Kb(20,1)],function(n,t){var l=o.Pb(t,4,0,n(t,5,0,o.Gb(t.parent,0),t.context.$implicit.get("imgUrls")[0],"rectangleFill"));n(t,4,0,l),n(t,7,0,"light"),n(t,10,0,"light"),n(t,16,0,"success")},function(n,t){var l=t.context.$implicit.get("name_es");n(t,8,0,l);var i=t.context.$implicit.get("presentation_es");n(t,11,0,i);var e=o.Pb(t,19,0,n(t,20,0,o.Gb(t.parent,1),t.context.$implicit.get("price_cr")));n(t,19,0,e)})}function O(n){return o.Qb(0,[o.Ib(0,f.a,[]),o.Ib(0,m.d,[o.u]),o.Mb(671088640,1,{content:0}),o.Mb(671088640,2,{infiniteScroll:0}),(n()(),o.ub(4,0,null,null,10,"ion-header",[],null,null,null,g.bb,g.q)),o.tb(5,49152,null,0,a.A,[o.h,o.k,o.z],null,null),(n()(),o.ub(6,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,g.vb,g.K)),o.tb(7,49152,null,0,a.Ab,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.ub(8,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.Q,g.f)),o.tb(9,49152,null,0,a.k,[o.h,o.k,o.z],null,null),(n()(),o.ub(10,0,null,0,1,"ion-menu-button",[],null,null,null,g.ib,g.y)),o.tb(11,49152,null,0,a.Q,[o.h,o.k,o.z],null,null),(n()(),o.ub(12,0,null,0,2,"ion-title",[],null,null,null,g.ub,g.J)),o.tb(13,49152,null,0,a.yb,[o.h,o.k,o.z],null,null),(n()(),o.Ob(-1,0,["Men\xfa"])),(n()(),o.ub(15,0,null,null,7,"ion-content",[],null,null,null,g.Y,g.n)),o.tb(16,49152,[[1,4]],0,a.t,[o.h,o.k,o.z],null,null),(n()(),o.ub(17,0,null,0,5,"div",[],[[24,"@staggerIn",0]],null,null,null,null)),(n()(),o.ub(18,0,null,null,4,"section",[["class","cards"]],null,null,null,null,null)),(n()(),o.jb(16777216,null,null,1,null,P)),o.tb(20,16384,null,0,m.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o.jb(16777216,null,null,1,null,y)),o.tb(22,278528,null,0,m.i,[o.P,o.M,o.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,7,0,"primary"),n(t,20,0,l.loading),n(t,22,0,l.daList)},function(n,t){var l=t.component;n(t,17,0,null==l.daList?null:l.daList.length)})}function x(n){return o.Qb(0,[(n()(),o.ub(0,0,null,null,2,"app-product-list",[],null,null,null,O,v)),o.Lb(512,null,u.a,u.a,[]),o.tb(2,114688,null,0,d,[C.a,a.Hb,u.a,b.a,a.Eb,a.a,c.a],null,null)],function(n,t){n(t,2,0)},null)}var M=o.qb("app-product-list",d,x,{},{},[]),k=l("gIcY"),_=l("7JYj");l.d(t,"ProductListPageModuleNgFactory",function(){return w});var w=o.rb(h,[],function(n){return o.Db([o.Eb(512,o.j,o.cb,[[8,[p.a,M]],[3,o.j],o.x]),o.Eb(4608,m.l,m.k,[o.u,[2,m.v]]),o.Eb(4608,k.p,k.p,[]),o.Eb(4608,a.b,a.b,[o.z,o.g]),o.Eb(4608,a.Gb,a.Gb,[a.b,o.j,o.q]),o.Eb(4608,a.Jb,a.Jb,[a.b,o.j,o.q]),o.Eb(1073742336,m.b,m.b,[]),o.Eb(1073742336,k.o,k.o,[]),o.Eb(1073742336,k.e,k.e,[]),o.Eb(1073742336,a.Cb,a.Cb,[]),o.Eb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),o.Eb(1073742336,_.a,_.a,[]),o.Eb(1073742336,h,h,[]),o.Eb(1024,C.k,function(){return[[{path:"",component:d}]]},[])])})}}]);