(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{445:function(t,e,r){var content=r(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("043a7217",content,!0,{sourceMap:!1})},521:function(t,e,r){"use strict";r(445)},522:function(t,e,r){var o=r(20)(!1);o.push([t.i,".button[data-v-200111e2]{border:none;border-radius:2px}.button-close[data-v-200111e2],.card-style[data-v-200111e2]{background-color:red}.card-style[data-v-200111e2]{max-width:100px!important;max-height:50px}",""]),t.exports=o},553:function(t,e,r){"use strict";r.r(e);r(14);var o={data:function(){return{selectedItem:1,items:[{id:1,text:"特養"},{id:2,text:"老健"},{id:3,text:"グループホーム"},{id:4,text:"ケアハウス"},{id:5,text:"病院"},{id:6,text:"その他"}],articles:[]}},methods:{getArticle:function(){var t=this;this.$fire.firestore.collection("article").get().then((function(e){e.forEach((function(e){var r=t.$fire.storage.ref().child("article/"+e.id);console.log(t.file),r.getDownloadURL().then((function(r){console.log(r),e.url=r,t.articles.push(e),console.log("見たいやつ",e.url),console.log(e.id)})).catch((function(t){return console.log(t)}))}))}))},toDetail:function(t){this.$router.push({path:"article/"+t})},goto:function(t){this.$router.push({path:"/category?id="+t.id+"&name="+t.text})}},created:function(){this.getArticle(),console.log("created")}},n=(r(521),r(86)),c=r(110),l=r.n(c),d=r(392),v=r(390),h=r(430),f=r(245),m=r(433),x=r(414),_=r(400),w=r(387),C=r(432),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"overflow-hidden"},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"400px",src:"https://pro-foto.jp/free/img/images_big/hns0006-009.jpg"}})],1),t._v(" "),r("v-card-title",{staticClass:"text-center",attrs:{height:"100px"}},[t._v("ポジティブケアの目的")]),t._v(" "),r("v-card-subtitle",{staticClass:"text-center",attrs:{height:"40px"}},[t._v("\n    令和になっても介護職に対するマイナスのイメージは根強い。"),r("br"),t._v("\n    高まり続ける需要とは反対に、離職の絶えない現場。"),r("br"),t._v("\n    上がることのない給料。"),r("br"),t._v("\n\n    そんな中でも、面白いことや驚いたことを共有することで、"),r("br"),t._v("\n    モチベーションをあげることができるのではないか？"),r("br"),t._v("\n    そう考え、作成していたサイトです。"),r("br"),t._v("\n    匿名性を維持しつつも共有できれば！と思っています。")]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"8"}},[r("v-row",t._l(t.articles,(function(article,i){return r("v-col",{key:i,attrs:{cols:"6"}},[r("v-card",{staticClass:"d-flex justify-space-around mb-2",attrs:{color:"orange",flat:"",tile:"","min-height":"600","min-width":"auto"},on:{click:function(e){return t.toDetail(article.id)}}},[r("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[r("v-card-title",[t._v(t._s(article.data().title))]),t._v(" "),r("v-img",{attrs:{src:article.url}})],1)],1)],1)})),1),t._v(" "),r("v-card-title",{staticClass:"d-flex justify-space-around md-2"},[t._v("\n        さらに表示する\n      ")])],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:""}},[r("v-list",[r("v-subheader",[t._v("カテゴリ別検索")]),t._v(" "),t._l(t.items,(function(e,i){return r("v-list-item",{key:i,on:{click:function(r){return t.goto(e)}}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)}))],2)],1)],1)],1)],1)}),[],!1,null,"200111e2",null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:v.b,VCardTitle:v.d,VCol:h.a,VImg:f.a,VList:m.a,VListItem:x.a,VListItemContent:_.a,VListItemTitle:_.b,VRow:w.a,VSubheader:C.a})}}]);