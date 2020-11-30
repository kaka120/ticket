function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"I/3/":function(t,n,e){"use strict";e.r(n);var o=e("tyNb"),i=(e("LfhP"),e("3Pt+")),r=e("fXoL"),a=e("mWeu"),l=e("ofXK");function s(t,n){1&t&&(r.Nb(0,"small"),r.ic(1,"Employee id required"),r.Mb())}function c(t,n){1&t&&(r.Nb(0,"small"),r.ic(1,"Min 8 char required"),r.Mb())}function p(t,n){if(1&t&&(r.Nb(0,"div",17),r.gc(1,s,2,0,"small",18),r.gc(2,c,2,0,"small",18),r.Mb()),2&t){var e=r.Xb();r.zb(1),r.Yb("ngIf",e.f.username.errors.required),r.zb(1),r.Yb("ngIf",e.f.username.errors.minlength)}}function d(t,n){1&t&&(r.Nb(0,"small"),r.ic(1,"password required"),r.Mb())}function f(t,n){if(1&t&&(r.Nb(0,"div",17),r.gc(1,d,2,0,"small",18),r.Mb()),2&t){var e=r.Xb();r.zb(1),r.Yb("ngIf",e.f.password.errors.required)}}var g,b,u=function(t){return{"is-invalid":t}},h=[{path:"",component:(g=function(){function t(n,e,o,i){_classCallCheck(this,t),this.formBuilder=n,this.router=e,this.route=o,this.authService=i,this.userlogindata={},this.passwordTypeProperty="password",this.showPass=0,this.zmdieyeclass="zmdi zmdi-eye",this.submitted=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.registerForm=this.formBuilder.group({username:["",[i.k.required,i.k.minLength(2)]],password:["",i.k.required]})}},{key:"btnshowpassEvent",value:function(){0==this.showPass?(this.passwordTypeProperty="text",this.zmdieyeclass="zmdi zmdi-eye-off",this.showPass=1):(this.passwordTypeProperty="password",this.zmdieyeclass="zmdi zmdi-eye",this.showPass=0)}},{key:"onSubmit",value:function(){var t=this;console.log(this.registerForm.value),this.submitted=!0,this.registerForm.invalid||(console.log(this.registerForm.value),this.authService.login(this.registerForm.value,"http://18.188.139.11:5000/api/authentication").subscribe((function(n){console.log(n.token),localStorage.setItem("token",n.token),t.router.navigate(["./bodyModule"])}),(function(t){return console.log(t)})))}},{key:"f",get:function(){return this.registerForm.controls}}]),t}(),g.\u0275fac=function(t){return new(t||g)(r.Kb(i.b),r.Kb(o.b),r.Kb(o.a),r.Kb(a.a))},g.\u0275cmp=r.Eb({type:g,selectors:[["gateway-module"]],decls:27,vars:9,consts:[[1,"limiter"],[1,"container-login100"],[1,"wrap-login100"],[1,"login100-form-title","p-b-26"],[1,"login100-form-title","p-b-48"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"container-login100-form-btn"],[1,"wrap-login100-form-btn"],[1,"login100-form-bgbtn"],[1,"login100-form-btn"],[1,"text-center","p-t-115"],[1,"txt1"],["href","#",1,"txt2"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"span",3),r.ic(4," Tickting Tool "),r.Mb(),r.Lb(5,"span",4),r.Nb(6,"form",5),r.Vb("ngSubmit",(function(){return n.onSubmit()})),r.Nb(7,"div",6),r.Nb(8,"label"),r.ic(9,"User_ID"),r.Mb(),r.Lb(10,"input",7),r.gc(11,p,3,2,"div",8),r.Mb(),r.Nb(12,"div",6),r.Nb(13,"label"),r.ic(14,"password"),r.Mb(),r.Lb(15,"input",9),r.gc(16,f,2,1,"div",8),r.Mb(),r.Nb(17,"div",10),r.Nb(18,"div",11),r.Lb(19,"div",12),r.Nb(20,"button",13),r.ic(21," Login "),r.Mb(),r.Mb(),r.Mb(),r.Nb(22,"div",14),r.Nb(23,"span",15),r.ic(24," Don\u2019t have an account? "),r.Mb(),r.Nb(25,"a",16),r.ic(26," Sign Up "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.zb(6),r.Yb("formGroup",n.registerForm),r.zb(4),r.Yb("ngClass",r.ac(5,u,n.submitted&&n.f.username.errors)),r.zb(1),r.Yb("ngIf",n.submitted&&n.f.username.errors),r.zb(4),r.Yb("ngClass",r.ac(7,u,n.submitted&&n.f.password.errors)),r.zb(1),r.Yb("ngIf",n.submitted&&n.f.password.errors))},directives:[i.m,i.g,i.d,i.a,i.f,i.c,l.h,l.j],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%;font-family:Poppins-Regular,sans-serif}a[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:14px;line-height:1.7;color:#666;margin:0;transition:all .4s;-webkit-transition:all .4s;-o-transition:all .4s;-moz-transition:all .4s}a[_ngcontent-%COMP%]:focus{outline:none!important}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#6a7dfe;color:-webkit-linear-gradient(left,#21d4fd,#b721ff);color:-o-linear-gradient(left,#21d4fd,#b721ff);color:-moz-linear-gradient(left,#21d4fd,#b721ff);color:linear-gradient(left,#21d4fd,#b721ff)}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0}p[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:14px;line-height:1.7;color:#666}li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin:0;list-style-type:none}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{outline:none;border:none}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{border-color:transparent!important}input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:transparent}input[_ngcontent-%COMP%]:focus:-moz-placeholder, input[_ngcontent-%COMP%]:focus::-moz-placeholder{color:transparent}input[_ngcontent-%COMP%]:focus:-ms-input-placeholder{color:transparent}textarea[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:transparent}textarea[_ngcontent-%COMP%]:focus:-moz-placeholder, textarea[_ngcontent-%COMP%]:focus::-moz-placeholder{color:transparent}textarea[_ngcontent-%COMP%]:focus:-ms-input-placeholder{color:transparent}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#adadad}input[_ngcontent-%COMP%]:-moz-placeholder, input[_ngcontent-%COMP%]::-moz-placeholder{color:#adadad}input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#adadad}textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#adadad}textarea[_ngcontent-%COMP%]:-moz-placeholder, textarea[_ngcontent-%COMP%]::-moz-placeholder{color:#adadad}textarea[_ngcontent-%COMP%]:-ms-input-placeholder{color:#adadad}button[_ngcontent-%COMP%]{outline:none!important;border:none;background:transparent}button[_ngcontent-%COMP%]:hover{cursor:pointer}iframe[_ngcontent-%COMP%]{border:none!important}.txt1[_ngcontent-%COMP%]{color:#666}.txt1[_ngcontent-%COMP%], .txt2[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:13px;line-height:1.5}.txt2[_ngcontent-%COMP%]{color:#333}.limiter[_ngcontent-%COMP%]{width:100%;margin:0 auto}.container-login100[_ngcontent-%COMP%]{width:100%;min-height:100vh;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:15px;background:#f2f2f2}.wrap-login100[_ngcontent-%COMP%]{width:390px;background:#fff;border-radius:10px;overflow:hidden;padding:57px 52px 12px 55px;box-shadow:0 7px 20px 1px #8bc34a;-moz-box-shadow:0 7px 20px 1px #8bc34a;-webkit-box-shadow:0 7px 20px 1px #8bc34a;-o-box-shadow:0 7px 20px 1px #8bc34a;-ms-box-shadow:0 7px 20px 1px #8bc34a}.login100-form[_ngcontent-%COMP%]{width:100%}.login100-form-title[_ngcontent-%COMP%]{display:block;font-family:fantasy;font-size:30px;color:#333;line-height:1.2;text-align:center}.login100-form-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:60px}.wrap-input100[_ngcontent-%COMP%]{width:100%;position:relative;border-bottom:2px solid #adadad;margin-bottom:37px}.input100[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:15px;color:#555;line-height:1.2;display:block;width:100%;height:45px;background:transparent;padding:0 5px}.focus-input100[_ngcontent-%COMP%]{position:absolute;display:block;width:100%;height:100%;top:0;left:0;pointer-events:none}.focus-input100[_ngcontent-%COMP%]:before{content:"";bottom:-2px;width:0;height:2px;background:#6a7dfe;background:linear-gradient(left,#21d4fd,#b721ff)}.focus-input100[_ngcontent-%COMP%]:after, .focus-input100[_ngcontent-%COMP%]:before{display:block;position:absolute;left:0;transition:all .4s}.focus-input100[_ngcontent-%COMP%]:after{font-family:Poppins-Regular;font-size:15px;color:#999;line-height:1.2;content:attr(data-placeholder);width:100%;top:16px;padding-left:5px}.input100[_ngcontent-%COMP%]:focus + .focus-input100[_ngcontent-%COMP%]:after{top:-15px}.input100[_ngcontent-%COMP%]:focus + .focus-input100[_ngcontent-%COMP%]:before{width:100%}.has-val.input100[_ngcontent-%COMP%] + .focus-input100[_ngcontent-%COMP%]:after{top:-15px}.has-val.input100[_ngcontent-%COMP%] + .focus-input100[_ngcontent-%COMP%]:before{width:100%}.btn-show-pass[_ngcontent-%COMP%]{font-size:15px;color:#999;display:flex;align-items:center;position:absolute;height:100%;top:0;right:0;padding-right:5px;cursor:pointer;transition:all .4s}.btn-show-pass.active[_ngcontent-%COMP%], .btn-show-pass[_ngcontent-%COMP%]:hover{color:#6a7dfe;color:-webkit-linear-gradient(left,#21d4fd,#b721ff);color:-o-linear-gradient(left,#21d4fd,#b721ff);color:-moz-linear-gradient(left,#21d4fd,#b721ff);color:linear-gradient(left,#21d4fd,#b721ff)}.container-login100-form-btn[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;padding-top:13px}.wrap-login100-form-btn[_ngcontent-%COMP%]{width:100%;display:block;position:relative;z-index:1;border-radius:25px;overflow:hidden;margin:0 auto}.login100-form-bgbtn[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:300%;height:100%;background:#a64bf4;background:linear-gradient(270deg,#009688,#4caf50,#d1ead2,#99e047);top:0;left:-100%;transition:all .4s}.login100-form-btn[_ngcontent-%COMP%]{font-family:Poppins-Medium;font-size:15px;color:#fff;line-height:1.2;text-transform:uppercase;display:flex;justify-content:center;align-items:center;padding:0 20px;width:100%;height:50px}.wrap-login100-form-btn[_ngcontent-%COMP%]:hover   .login100-form-bgbtn[_ngcontent-%COMP%]{left:0}@media (max-width:576px){.wrap-login100[_ngcontent-%COMP%]{padding:77px 15px 33px}}.validate-input[_ngcontent-%COMP%]{position:relative}.alert-validate[_ngcontent-%COMP%]:before{content:attr(data-validate);max-width:70%;border:1px solid #c80000;border-radius:2px;padding:4px 25px 4px 10px;right:0;pointer-events:none;font-family:Poppins-Regular;font-size:13px;line-height:1.4;text-align:left;visibility:hidden;opacity:0;transition:opacity .4s}.alert-validate[_ngcontent-%COMP%]:after, .alert-validate[_ngcontent-%COMP%]:before{position:absolute;background-color:#fff;top:50%;transform:translateY(-50%);color:#c80000}.alert-validate[_ngcontent-%COMP%]:after{content:"\\f06a";font-family:FontAwesome;font-size:16px;display:block;right:5px}.alert-validate[_ngcontent-%COMP%]:hover:before{visibility:visible;opacity:1}@media (max-width:992px){.alert-validate[_ngcontent-%COMP%]:before{visibility:visible;opacity:1}}.wrap-login100[_ngcontent-%COMP%]{background:url(tic_background.f1bab9dc959a71b5401f.png)}']}),g)}],m=((b=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:b}),b.\u0275inj=r.Hb({factory:function(t){return new(t||b)},imports:[[o.d.forChild(h)],o.d]}),b);e.d(n,"gatewayModule",(function(){return P}));var M,P=((M=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ib({type:M}),M.\u0275inj=r.Hb({factory:function(t){return new(t||M)},imports:[[m,l.b,i.e,i.i]]}),M)}}]);