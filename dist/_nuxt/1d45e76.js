(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,6,13,16],{285:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("9884307e",content,!0,{sourceMap:!1})},288:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("674753b2",content,!0,{sourceMap:!1})},289:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("0472bd0f",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);var r={props:["title","header","page"],data:function(){return{email:"",password:""}},methods:{submitForm:function(){this.$emit("submit-form",{email:this.email,password:this.password})},change:function(){this.$emit("change","SignupInput")}}},o=(n(294),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_group flex_col "},[n("h1",{staticStyle:{"text-align":"center"}},[t._v("Login")]),t._v(" "),n("FormulateInput",{attrs:{type:"email",name:"email",validation:"required|email","error-behavior":"live"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("FormulateInput",{attrs:{type:"password",name:"password",validation:"required","error-behavior":"live"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.submitForm}},[t._v(" Login ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"booking"===t.page,expression:"page === 'booking'"}],staticClass:"flex_row"},[n("p",[t._v("Don't have an account ...")]),t._v(" "),n("p",{staticClass:"login_text",on:{click:t.change}},[t._v("Sign Up")])])],1)}),[],!1,null,"6a7e010c",null);e.default=component.exports},294:function(t,e,n){"use strict";n(285)},295:function(t,e,n){var r=n(46)(!1);r.push([t.i,".login_text[data-v-6a7e010c]{color:#00f;font-style:italic;padding-left:1em;cursor:pointer}.btn[data-v-6a7e010c]{padding-top:1em;padding-bottom:1em;background:#000;color:#fff}.input[data-v-6a7e010c]{margin-bottom:2em}label[data-v-6a7e010c]{padding-bottom:.5em}@media only screen and (min-width:1000px){.form_group[data-v-6a7e010c]{min-width:400px}}",""]),t.exports=r},303:function(t,e,n){"use strict";n(288)},304:function(t,e,n){var r=n(46)(!1);r.push([t.i,".login_text[data-v-28b132d2]{color:#00f;font-style:italic;padding-left:1em;cursor:pointer}.btn[data-v-28b132d2]{padding-top:1em;padding-bottom:1em;background:#000;color:#fff}.form_group[data-v-28b132d2]{min-width:400px}.input[data-v-28b132d2]{margin-bottom:2em}label[data-v-28b132d2]{padding-bottom:.5em}",""]),t.exports=r},305:function(t,e,n){"use strict";n(289)},306:function(t,e,n){var r=n(46)(!1);r.push([t.i,".container[data-v-f26b0710]{height:300px;color:#fff;width:100%;display:flex;justify-content:center;align-items:center}",""]),t.exports=r},323:function(t,e,n){"use strict";n.r(e);var r={props:["title","header"],data:function(){return{email:"",password:"",firstName:"",lastName:"",phoneNumber:""}},methods:{submitForm:function(){this.$emit("submit-form",{email:this.email,password:this.password,firstName:this.firstName,lastName:this.lastName,phoneNumber:this.phoneNumber})},change:function(){this.$emit("change","LoginInput")}}},o=(n(303),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form_group flex_col "},[n("h1",{staticStyle:{"text-align":"center"}},[t._v("Sign Up")]),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("First name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("Last name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"email"}},[t._v("Phone number")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"input",attrs:{type:"tel"},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.submitForm}},[t._v(" Sign up ")]),t._v(" "),n("div",{staticClass:"flex_row"},[n("p",[t._v("Already have an account ...")]),t._v(" "),n("p",{staticClass:"login_text",on:{click:t.change}},[t._v("Login")])])])}),[],!1,null,"28b132d2",null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var r={props:["title","backgroundColor","image"]},o=(n(305),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{background:t.backgroundColor}},[n("h1",[t._v(t._s(t.title))])])}),[],!1,null,"f26b0710",null);e.default=component.exports},351:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("5b512f5a",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";n.r(e);var r={props:["firstname","lastname","email","phonenumber","userId"]},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.firstname))]),t._v(" "),n("p",[t._v(t._s(t.lastname))]),t._v(" "),n("p",[t._v(t._s(t.phonenumber))]),t._v(" "),n("p",[t._v(t._s(t.userId))]),t._v(" "),n("p",[t._v(t._s(t.email))])])}),[],!1,null,"2ac65382",null);e.default=component.exports},377:function(t,e,n){"use strict";n(351)},378:function(t,e,n){var r=n(46)(!1);r.push([t.i,".container_center[data-v-349b7cee]{width:100%;display:flex;justify-content:center;align-items:center}.container[data-v-349b7cee]{width:100%}.body_profile[data-v-349b7cee]{max-width:800px;margin-left:auto;margin-right:auto}",""]),t.exports=r},405:function(t,e,n){"use strict";n.r(e);n(33),n(24),n(29),n(40),n(25),n(41);var r=n(5),o=n(13),l=(n(39),n(57));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=m({data:function(){return{authComp:"LoginInput",isLoggedIn:!1}},computed:Object(l.c)({firstname:function(t){return t.firstname},lastname:function(t){return t.lastname},userId:function(t){return t.userId},books:function(t){return t.books},email:function(t){return t.email},phonenumber:function(t){return t.phonenumber}}),methods:{signUp:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,e.$axios.$post("http://localhost:8000/signup",m({},t)).then((function(t){e.$store.dispatch("setAuth",t),t.token&&(e.userId=t.user._id,e.popup=!1)})).then((function(){e.isLoggedIn=!0})),n.next=7;break;case 4:return n.prev=4,n.t0=n.catch(0),n.abrupt("return",console.log(n.t0));case 7:case"end":return n.stop()}}),n,null,[[0,4]])})))()},changeLoginScreen:function(t){this.authComp=t},logIn:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,e.$axios.$post("http://localhost:8000/login",m({},t)).then((function(t){e.$store.dispatch("setAuthLogin",t),t.token&&(e.userId=t.userId,e.popup=!1)})).then((function(data){return e.isLoggedIn=!0,e.$router.push("/booking")})),n.next=7;break;case 4:return n.prev=4,n.t0=n.catch(0),n.abrupt("return",console.log(n.t0));case 7:case"end":return n.stop()}}),n,null,[[0,4]])})))()}}},Object(l.b)({setAuth:"setAuth",setAuthLogin:"setAuthLogin"})),f=(n(377),n(23)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero",{attrs:{title:"Welcome to the login page",backgroundColor:"black"}}),t._v(" "),t.isLoggedIn?n("section",{staticClass:"container"},[n("div",{staticClass:"body_profile"},[n("p",[t._v(t._s(t.firstname))]),t._v(" "),n("UserDetails",{attrs:{firstname:t.firstname,lastname:t.lastname,email:t.email,userId:t.userId,phonenumber:t.phonenumber}}),t._v(" "),n("div",[n("h2",[t._v("Booking request here")]),t._v(" "),t._l(t.books,(function(t){return n("p",{key:t})}))],2)],1)]):n("section",{staticClass:"container_center"},["SignupInput"==t.authComp?n("div",[n("SignupInput",{on:{"submit-form":t.signUp,change:t.changeLoginScreen}})],1):t._e(),t._v(" "),"LoginInput"==t.authComp?n("div",[n("LoginInput",{attrs:{page:"booking"},on:{"submit-form":t.logIn,change:t.changeLoginScreen}})],1):t._e()])],1)}),[],!1,null,"349b7cee",null);e.default=component.exports;installComponents(component,{Hero:n(325).default,SignupInput:n(323).default,LoginInput:n(293).default,UserDetails:n(357).default})}}]);