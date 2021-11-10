(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{573:function(t,e,l){"use strict";l.r(e);var o=l(510),r=l(512),n={mixins:[o.validationMixin],validations:{select:{required:r.required}},data:function(){return{select:null,form:{title:"",detail:"",place:"",other:"",another:""},categories:[{text:"特別養護老人ホーム",value:"1"},{text:"老人健康保健施設",value:"2"},{text:"ケアハウス",value:"3"},{text:"グループホーム",value:"4"},{text:"病院",value:"5"}],places:[{text:"居室",value:"6"},{text:"廊下",value:"7"},{text:"食堂",value:"8"},{text:"トイレ",value:"9"},{text:"浴室",value:"10"}],file:{},dialog:!1,dialog2:!1}},methods:{submit:function(){var t=this;this.$fire.firestore.collection("article").add(this.form).then((function(e){console.log("記事保存成功　Add ID: ",e.id),t.uploadImgfile(e.id)}))},uploadImgfile:function(t){var e=this,l=this.$fire.storage.ref().child("article/"+t);console.log(this.file),l.put(this.file).then((function(t){console.log("画像保存成功　Add ID: ",t.id),e.dialog=!1,e.dialog2=!0})).catch((function(t){return console.log(t)}))}}},v=l(93),c=l(121),d=l.n(c),f=l(399),_=l(592),x=l(416),m=l(414),h=l(581),k=l(429),V=l(537),w=l(565),C=l(566),$=l(412),y=l(398),I=l(465),component=Object(v.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-flex",{attrs:{xs6:"",md12:""}},[l("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-card",{staticClass:"pa-4"},[l("v-card-title",{staticClass:"font-weight-bold"},[t._v("私が体験したこと")]),t._v(" "),l("v-text-field",{attrs:{placeholder:"タイトル"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),l("v-file-input",{attrs:{"show-size":"",label:"画像を選択する。"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),l("v-card-title",[t._v("体験した施設を選んでください。")]),t._v(" "),l("v-btn-toggle",{attrs:{tile:"",color:"orange",group:""},model:{value:t.build,callback:function(e){t.build=e},expression:"build"}},t._l(t.categories,(function(e,i){return l("v-btn",{key:i,attrs:{value:e.value}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),1),t._v(" "),l("v-card-title",[t._v("上記以外の場合は、下の欄へ記入してください。")]),t._v(" "),l("v-text-field",{attrs:{placeholder:"記入先はこちら"},model:{value:t.form.detail,callback:function(e){t.$set(t.form,"detail",e)},expression:"form.detail"}}),t._v(" "),l("v-card-title",[t._v("施設内のどこで起きたのかを教えてください。")]),t._v(" "),l("v-btn-toggle",{attrs:{tile:"",color:"orange",group:""},model:{value:t.form.place,callback:function(e){t.$set(t.form,"place",e)},expression:"form.place"}},t._l(t.places,(function(e,i){return l("v-btn",{key:i,attrs:{value:e.value}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),1),t._v(" "),l("v-card-title",[t._v("上記以外の場合は、下の欄へ記入してください。")]),t._v(" "),l("v-text-field",{attrs:{placeholder:"記入先はこちら"},model:{value:t.form.other,callback:function(e){t.$set(t.form,"other",e)},expression:"form.other"}}),t._v(" "),l("v-card-title",[t._v("どのように対処したか、そしてあなたが感じたことを共有してみましょう。")]),t._v(" "),l("v-textarea",{staticClass:"mt-0",attrs:{solo:"",label:"","auto-grow":"",rows:"5",placeholder:"記入先はこちら！"},model:{value:t.form.another,callback:function(e){t.$set(t.form,"another",e)},expression:"form.another"}}),t._v(" "),l("div",{staticClass:"text-center"},[l("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[l("v-btn",t._g(t._b({attrs:{color:"orange",dark:""}},"v-btn",r,!1),o),[t._v("\n              確認する\n            ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),l("v-card",[l("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n              投稿内容確認\n            ")]),t._v(" "),7==t.form.place?l("v-card-text",[t._v("\n              場所:居室\n              ")]):t._e(),t._v(" "),l("v-divider"),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{attrs:{color:"orange"},on:{click:t.submit}},[t._v(" 確認しました。 ")])],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"text-center"},[l("v-dialog",{attrs:{width:"500"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[l("v-card",[l("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v("\n              トップページに戻ります。\n            ")]),t._v(" "),l("v-card-text",[t._v("\n              この投稿によって施設、職員、個人が特定されたり、誹謗中傷の対象とならないこと。\n            ")]),t._v(" "),l("v-divider"),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{attrs:{color:"orange",to:"/",nuxt:""}},[t._v(" 確認しました。 ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VBtnToggle:_.a,VCard:x.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:h.a,VDivider:k.a,VFileInput:V.a,VFlex:w.a,VForm:C.a,VSpacer:$.a,VTextField:y.a,VTextarea:I.a})}}]);