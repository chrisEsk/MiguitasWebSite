(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/yGZ":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),o=t("gIcY"),r=t("ZZ/e"),i=t("sybk"),a=t("v0iw"),s=t("dkQB"),c=function(){function n(){this.parseAppId=s.a.parseAppId,this.parseJSKey=s.a.parseJSKey,this.parseServerUrl=s.a.parseServerUrl,this.parseInitialize()}return n.prototype.parseInitialize=function(){a.initialize(this.parseAppId,this.parseJSKey),a.serverURL=this.parseServerUrl},n.prototype.RecoverPassword=function(n){return a.User.requestPasswordReset(n.trim().toLowerCase())},n.ngInjectableDef=e.Tb({factory:function(){return new n},token:n,providedIn:"root"}),n}(),b=t("2m4Y"),g=function(){function n(n,l,t,e,u,o,r,i,a){this.authService=n,this.navCtrl=l,this.translate=t,this.menuCtrl=e,this.toastCtrl=u,this.alertCtrl=o,this.loadingCtrl=r,this.formBuilder=i,this.forgotPasswordService=a,this.logo="/assets/img/miguitas_logo.png"}return n.prototype.ionViewWillEnter=function(){this.menuCtrl.enable(!1)},n.prototype.ngOnInit=function(){this.authService.SignOut(),this.onLoginForm=this.formBuilder.group({email:[null,o.n.compose([o.n.required])],password:[null,o.n.compose([o.n.required])]})},n.prototype.submit=function(){return u.b(this,void 0,void 0,function(){var n,l=this;return u.e(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({duration:5e3})];case 1:return(n=t.sent()).present(),this.authService.Login(this.onLoginForm.value).then(function(t){n.dismiss(),l.goToHome()}).catch(function(t){console.error(t),n.dismiss(),l.alertInvalidCredentials()}),[2]}})})},n.prototype.alertInvalidCredentials=function(){return u.b(this,void 0,void 0,function(){return u.e(this,function(n){switch(n.label){case 0:return[4,this.alertCtrl.create({header:"Usuario Inv\xe1lido",message:"Verifique las credenciales e intente de nuevo.",buttons:["Ok"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.openForgotPassAlert=function(){return u.b(this,void 0,void 0,function(){var n=this;return u.e(this,function(l){switch(l.label){case 0:return[4,this.alertCtrl.create({header:"Recuperaci\xf3n de contrase\xf1a",message:"Ingrese su correo electr\xf3nico:",inputs:[{name:"email",type:"email",placeholder:"Correo Electr\xf3nico"}],buttons:[{text:this.translate.get("app.label.cancel"),role:"cancel",cssClass:"secondary"},{text:this.translate.get("app.label.accept"),handler:function(l){return u.b(n,void 0,void 0,function(){return u.e(this,function(n){return this.forgotPass(l),[2]})})}}]})];case 1:return l.sent().present(),[2]}})})},n.prototype.forgotPass=function(n){return u.b(this,void 0,void 0,function(){var l,t=this;return u.e(this,function(e){switch(e.label){case 0:return this.validateEmail(n.email)?[3,3]:[4,this.toastCtrl.create({message:"Correo electr\xf3nico inv\xe1lido.",duration:4e3,position:"bottom",buttons:[{icon:"close",side:"end"}],color:"danger"})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2];case 3:return[4,this.loadingCtrl.create({duration:6e3})];case 4:return(l=e.sent()).present(),this.forgotPasswordService.RecoverPassword(n.email.trim().toLowerCase()).then(function(e){return u.b(t,void 0,void 0,function(){return u.e(this,function(t){switch(t.label){case 0:return l.dismiss(),[4,this.alertCtrl.create({header:"Sigue el enlace enviado a "+n.email,message:"Tip: Recuerda revisar la carpeta de correo no deseado si no lo encuentras.",buttons:["Ok"]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})}).catch(function(e){return u.b(t,void 0,void 0,function(){return u.e(this,function(t){switch(t.label){case 0:return l.dismiss(),[4,this.alertCtrl.create({header:"Error",message:"No se pudo enviar el correo de recuperaci\xf3n a "+n.email,buttons:["Ok"]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),console.error(e),[2]}})})}),[2]}})})},n.prototype.validateEmail=function(n){return/\S+@\S+\.\S+/.test(n)},n.prototype.goToHome=function(){this.navCtrl.navigateRoot("home")},n}(),d=function(){return function(){}}(),p=t("pMnS"),h=t("oBZk"),m=t("Ip0R"),v=t("ZYCi"),C=e.sb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg, var(--ion-color-medium), var(--ion-color-light))}.auth-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:0}.auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-ios[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-md[_ngcontent-%COMP%]{border-radius:0}.auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-ios[_ngcontent-%COMP%]:first-of-type, .auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-md[_ngcontent-%COMP%]:first-of-type{border-radius:2px 0 0 2px}.auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-ios[_ngcontent-%COMP%]:last-of-type, .auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-md[_ngcontent-%COMP%]:last-of-type{border-radius:0 2px 2px 0}.auth-page[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%]{margin:0 5%}.auth-page[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:100px;margin:auto;display:block}.paz[_ngcontent-%COMP%]{position:relative;z-index:10}"]],data:{}});function f(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,3,"p",[["class","text08"],["ion-text",""]],null,null,null,null,null)),(n()(),e.ub(1,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,h.sb,h.H)),e.tb(2,49152,null,0,r.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Ob(-1,0,[" Formato inv\xe1lido. "]))],function(n,l){n(l,2,0,"danger")},null)}function k(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,74,"ion-content",[["class","login auth-page"],["padding",""]],null,null,null,h.Y,h.n)),e.tb(1,49152,null,0,r.t,[e.h,e.k,e.z],null,null),(n()(),e.ub(2,0,null,0,72,"div",[["class","auth-content"]],null,null,null,null,null)),(n()(),e.ub(3,0,null,null,2,"div",[["class","animated fadeInDown"]],null,null,null,null,null)),(n()(),e.ub(4,0,null,null,1,"ion-img",[["class","logo"]],null,null,null,h.db,h.s)),e.tb(5,49152,null,0,r.C,[e.h,e.k,e.z],{src:[0,"src"]},null),(n()(),e.ub(6,0,null,null,68,"div",[["class","animated fadeInUp"]],null,null,null,null,null)),(n()(),e.ub(7,0,null,null,67,"ion-card",[["color","light"],["padding",""]],null,null,null,h.V,h.g)),e.tb(8,49152,null,0,r.l,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.ub(9,0,null,0,34,"form",[["class","list-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0,o=n.component;return"submit"===l&&(u=!1!==e.Gb(n,11).onSubmit(t)&&u),"reset"===l&&(u=!1!==e.Gb(n,11).onReset()&&u),"keyup.enter"===l&&(u=!1!==(!!o.onLoginForm.valid&&o.submit())&&u),u},null,null)),e.tb(10,16384,null,0,o.r,[],null,null),e.tb(11,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},null),e.Lb(2048,null,o.a,null,[o.d]),e.tb(13,16384,null,0,o.k,[[4,o.a]],null,null),(n()(),e.ub(14,0,null,null,13,"ion-item",[["no-padding",""]],null,null,null,h.fb,h.u)),e.tb(15,49152,null,0,r.G,[e.h,e.k,e.z],null,null),(n()(),e.ub(16,0,null,0,4,"ion-label",[["position","floating"]],null,null,null,h.gb,h.v)),e.tb(17,49152,null,0,r.M,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.ub(18,0,null,0,1,"ion-icon",[["item-start",""],["name","mail"]],null,null,null,h.cb,h.r)),e.tb(19,49152,null,0,r.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.Ob(-1,0,[" Correo Electr\xf3nico "])),(n()(),e.ub(21,0,null,0,6,"ion-input",[["color","hotpink"],["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Gb(n,22)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Gb(n,22)._handleInputEvent(t.target)&&u),u},h.eb,h.t)),e.tb(22,16384,null,0,r.Mb,[e.k],null,null),e.Lb(1024,null,o.h,function(n){return[n]},[r.Mb]),e.tb(24,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.h],[2,o.q]],{name:[0,"name"]},null),e.Lb(2048,null,o.i,null,[o.c]),e.tb(26,16384,null,0,o.j,[[4,o.i]],null,null),e.tb(27,49152,null,0,r.F,[e.h,e.k,e.z],{color:[0,"color"],type:[1,"type"]},null),(n()(),e.jb(16777216,null,null,1,null,f)),e.tb(29,16384,null,0,m.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.ub(30,0,null,null,13,"ion-item",[["no-padding",""]],null,null,null,h.fb,h.u)),e.tb(31,49152,null,0,r.G,[e.h,e.k,e.z],null,null),(n()(),e.ub(32,0,null,0,4,"ion-label",[["position","floating"]],null,null,null,h.gb,h.v)),e.tb(33,49152,null,0,r.M,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.ub(34,0,null,0,1,"ion-icon",[["item-start",""],["name","lock"]],null,null,null,h.cb,h.r)),e.tb(35,49152,null,0,r.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.Ob(-1,0,[" Contrase\xf1a "])),(n()(),e.ub(37,0,null,0,6,"ion-input",[["color","hotpink"],["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Gb(n,38)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Gb(n,38)._handleInputEvent(t.target)&&u),u},h.eb,h.t)),e.tb(38,16384,null,0,r.Mb,[e.k],null,null),e.Lb(1024,null,o.h,function(n){return[n]},[r.Mb]),e.tb(40,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.h],[2,o.q]],{name:[0,"name"]},null),e.Lb(2048,null,o.i,null,[o.c]),e.tb(42,16384,null,0,o.j,[[4,o.i]],null,null),e.tb(43,49152,null,0,r.F,[e.h,e.k,e.z],{color:[0,"color"],type:[1,"type"]},null),(n()(),e.ub(44,0,null,0,4,"ion-button",[["color","success"],["expand","full"],["margin",""],["shape","round"],["size","medium"],["tappable",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.submit()&&e),e},h.P,h.e)),e.tb(45,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],shape:[3,"shape"],size:[4,"size"]},null),(n()(),e.ub(46,0,null,0,1,"ion-icon",[["margin-end",""],["name","log-in"]],null,null,null,h.cb,h.r)),e.tb(47,49152,null,0,r.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.Ob(-1,0,[" Iniciar Sesi\xf3n "])),(n()(),e.ub(49,0,null,0,5,"ion-button",[["color","secondary"],["expand","full"],["margin",""],["shape","round"],["size","medium"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Gb(n,51).onClick()&&u),"click"===l&&(u=!1!==e.Gb(n,53).onClick(t)&&u),u},h.P,h.e)),e.tb(50,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],size:[3,"size"]},null),e.tb(51,16384,null,0,v.n,[v.m,v.a,[8,null],e.E,e.k],{routerLink:[0,"routerLink"]},null),e.Hb(52,1),e.tb(53,737280,null,0,r.Kb,[m.h,r.Hb,e.k,v.m,[2,v.n]],null,null),(n()(),e.Ob(-1,0,[" Crear Cuenta "])),(n()(),e.ub(55,0,null,0,19,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.ub(56,0,null,null,11,"div",[["class","col"]],null,null,null,null,null)),(n()(),e.ub(57,0,null,null,10,"ion-text",[["padding",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Gb(n,59).onClick()&&u),"click"===l&&(u=!1!==e.Gb(n,61).onClick(t)&&u),u},h.sb,h.H)),e.tb(58,49152,null,0,r.vb,[e.h,e.k,e.z],null,null),e.tb(59,16384,null,0,v.n,[v.m,v.a,[8,null],e.E,e.k],{routerLink:[0,"routerLink"]},null),e.Hb(60,1),e.tb(61,737280,null,0,r.Kb,[m.h,r.Hb,e.k,v.m,[2,v.n]],null,null),(n()(),e.ub(62,0,null,0,5,"ion-text",[["color","dark"]],null,null,null,h.sb,h.H)),e.tb(63,49152,null,0,r.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.ub(64,0,null,0,3,"strong",[],null,null,null,null,null)),(n()(),e.ub(65,0,null,null,1,"ion-icon",[["name","arrow-round-back"],["slot","start"]],null,null,null,h.cb,h.r)),e.tb(66,49152,null,0,r.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.Ob(-1,null,[" Regresar "])),(n()(),e.ub(68,0,null,null,6,"div",[["class","col"],["style","text-align: right"]],null,null,null,null,null)),(n()(),e.ub(69,0,null,null,5,"ion-text",[["padding",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openForgotPassAlert()&&e),e},h.sb,h.H)),e.tb(70,49152,null,0,r.vb,[e.h,e.k,e.z],null,null),(n()(),e.ub(71,0,null,0,3,"ion-text",[["color","dark"]],null,null,null,h.sb,h.H)),e.tb(72,49152,null,0,r.vb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.ub(73,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),e.Ob(-1,null,[" \xbfOlvidaste tu contrase\xf1a? "]))],function(n,l){var t=l.component;n(l,5,0,t.logo),n(l,8,0,"light"),n(l,11,0,t.onLoginForm),n(l,17,0,"floating"),n(l,19,0,"mail"),n(l,24,0,"email"),n(l,27,0,"hotpink","email"),n(l,29,0,t.onLoginForm.get("email").touched&&t.onLoginForm.get("email").hasError("required")),n(l,33,0,"floating"),n(l,35,0,"lock"),n(l,40,0,"password"),n(l,43,0,"hotpink","password"),n(l,45,0,"success",!t.onLoginForm.valid,"full","round","medium"),n(l,47,0,"log-in"),n(l,50,0,"secondary","full","round","medium");var e=n(l,52,0,"/signup");n(l,51,0,e),n(l,53,0);var u=n(l,60,0,"/home");n(l,59,0,u),n(l,61,0),n(l,63,0,"dark"),n(l,66,0,"arrow-round-back"),n(l,72,0,"dark")},function(n,l){n(l,9,0,e.Gb(l,13).ngClassUntouched,e.Gb(l,13).ngClassTouched,e.Gb(l,13).ngClassPristine,e.Gb(l,13).ngClassDirty,e.Gb(l,13).ngClassValid,e.Gb(l,13).ngClassInvalid,e.Gb(l,13).ngClassPending),n(l,21,0,e.Gb(l,26).ngClassUntouched,e.Gb(l,26).ngClassTouched,e.Gb(l,26).ngClassPristine,e.Gb(l,26).ngClassDirty,e.Gb(l,26).ngClassValid,e.Gb(l,26).ngClassInvalid,e.Gb(l,26).ngClassPending),n(l,37,0,e.Gb(l,42).ngClassUntouched,e.Gb(l,42).ngClassTouched,e.Gb(l,42).ngClassPristine,e.Gb(l,42).ngClassDirty,e.Gb(l,42).ngClassValid,e.Gb(l,42).ngClassInvalid,e.Gb(l,42).ngClassPending)})}function P(n){return e.Qb(0,[(n()(),e.ub(0,0,null,null,1,"app-login",[],null,null,null,k,C)),e.tb(1,114688,null,0,g,[i.a,r.Hb,b.a,r.Fb,r.Nb,r.a,r.Eb,o.b,c],null,null)],function(n,l){n(l,1,0)},null)}var O=e.qb("app-login",g,P,{},{},[]);t.d(l,"LoginPageModuleNgFactory",function(){return y});var y=e.rb(d,[],function(n){return e.Db([e.Eb(512,e.j,e.cb,[[8,[p.a,O]],[3,e.j],e.x]),e.Eb(4608,m.l,m.k,[e.u,[2,m.v]]),e.Eb(4608,o.p,o.p,[]),e.Eb(4608,o.b,o.b,[]),e.Eb(4608,r.b,r.b,[e.z,e.g]),e.Eb(4608,r.Gb,r.Gb,[r.b,e.j,e.q]),e.Eb(4608,r.Jb,r.Jb,[r.b,e.j,e.q]),e.Eb(1073742336,m.b,m.b,[]),e.Eb(1073742336,o.o,o.o,[]),e.Eb(1073742336,o.e,o.e,[]),e.Eb(1073742336,o.m,o.m,[]),e.Eb(1073742336,r.Cb,r.Cb,[]),e.Eb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),e.Eb(1073742336,d,d,[]),e.Eb(1024,v.k,function(){return[[{path:"",component:g}]]},[])])})}}]);