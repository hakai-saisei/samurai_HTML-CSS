(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{390:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return v}));var o=r(392),n=r(1),c=Object(n.h)("v-card__actions"),d=Object(n.h)("v-card__subtitle"),l=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},392:function(t,e,r){"use strict";r(12),r(11),r(15),r(18),r(14),r(19);var o=r(2),n=(r(28),r(178),r(393),r(180)),c=r(179),d=r(140),l=r(10);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},393:function(t,e,r){var content=r(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("e23b7040",content,!0,{sourceMap:!1})},394:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},401:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7132a15d",content,!0,{sourceMap:!1})},402:function(t,e,r){var o=r(20)(!1);o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=o},405:function(t,e,r){"use strict";r(12),r(11),r(15),r(18),r(14),r(19);var o=r(2),n=(r(401),r(29));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},439:function(t,e,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("f5dba6f8",content,!0,{sourceMap:!1})},484:function(t,e,r){"use strict";r(439)},485:function(t,e,r){var o=r(20)(!1);o.push([t.i,".fill-width[data-v-61789710]{width:100%}.link-caption[data-v-61789710]{text-decoration:none;color:#666!important;font-size:.75rem}.separator[data-v-61789710]{margin-top:30px;margin-bottom:30px;height:0;border-top:1px solid #ddd;border-bottom:1px solid #fff;position:relative}.middle_separator[data-v-61789710]{position:absolute;padding:0 16px;color:#ccc;background:#fff;font-size:11px;text-shadow:0 1px 0 #fff;text-transform:uppercase;top:-7px;left:30%;color:#777;font-size:13px;top:-9px;left:41%}",""]),t.exports=o},546:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{valid:!0,email:"",emailRules:[function(t){return!!t||"正しいメールアドレスを入力してください。"},function(t){return t&&t.length<=10||"email must be less than 128 characters"}],password:"",passwordRules:[function(t){return!!t||"正しいパスワードを入力してください。"},function(t){return/.+@.+\..+/.test(t)||"password must be valid"}],checkbox:!1,passwordShow:!1}},methods:{submit:function(){var t=this;this.$fire.auth.signInWithEmailAndPassword(this.email,this.password).then((function(data){console.log("成功！",data.user.uid),t.$store.dispatch("setLoginUserId",data.user.uid),t.$router.push({path:"/"})})).catch((function(t){alert(t)}))},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},n=(r(484),r(86)),c=r(110),d=r.n(c),l=r(376),v=r(392),h=r(390),f=r(405),x=r(375),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("v-card",{staticClass:"login,mx-auto fill-width",attrs:{tile:t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.xs,flat:"","max-width":"640"}},[r("v-card-title",{staticClass:"text-center pa-8"},[r("h4",{staticClass:"fill-width"},[t._v("ログインページ")])]),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"px-6 py-8"},[r("div",{staticClass:"mx-auto",staticStyle:{"max-width":"344px"}},[r("div",{staticClass:"separator separator_login_page"}),t._v(" "),r("div",{staticClass:"pt-6"},[r("div",[r("v-text-field",{attrs:{rules:[t.emailRules.required,t.emailRules.regex],autofocus:"",dense:"",height:"48px",outlined:"",placeholder:"メールアドレス"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"append-icon":t.passwordShow?"mdi-eye":"mdi-eye-off",rules:[t.passwordRules.required],type:t.passwordShow?"text":"password",dense:"",height:"48px",name:"input-password",outlined:"",placeholder:"パスワード"},on:{"click:append":function(e){t.passwordShow=!t.passwordShow}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("div",{staticClass:"login-btn pb-8"},[r("v-btn",{staticClass:"fill-width caption",attrs:{color:"#FFCB00",depressed:"",height:"48px",tile:""},on:{click:t.submit}},[t._v("\n                ログイン\n              ")])],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"pt-8 pb-4"},[r("span",[t._v("アカウントをお持ちですか？")]),r("br"),t._v(" "),r("nuxt-link",{attrs:{to:"/register"}},[t._v("新規登録に移動")])],1)],1)])])],1)],1)])}),[],!1,null,"61789710",null);e.default=component.exports;d()(component,{VBtn:l.a,VCard:v.a,VCardTitle:h.d,VDivider:f.a,VTextField:x.a})}}]);