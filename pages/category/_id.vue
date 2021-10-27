<template>
  <div>
    <v-card class="overflow-hidden">
      <v-img
        class="white--text align-end"
        height="400px"
        src="https://pro-foto.jp/free/img/images_big/hns0006-009.jpg"
      >
        <!-- タイトル -->
      </v-img>
    </v-card>
    <v-card-title class="text-center" height="100px">{{
      $route.query.name
    }}</v-card-title>
    <v-card-subtitle 　　class="text-center" height="40px">
      令和になっても介護職に対するマイナスのイメージは根強い。<br />
      高まり続ける需要とは反対に、離職の絶えない現場。<br />
      上がることのない給料。<br />

      そんな中でも、面白いことや驚いたことを共有することで、<br />
      モチベーションをあげることができるのではないか？<br />
      そう考え、作成していたサイトです。<br />
      匿名性を維持しつつも共有できれば！と思っています。</v-card-subtitle
    >
    <!-- >サイト概要 -->

    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="6" v-for="(article, i) in articles" :key="i">
            <v-card
              class="d-flex justify-space-around mb-2"
              color="orange"
              flat
              tile
              min-height="600"
              min-width="auto"
              @click="toDetail(article.id)"
            >
              <v-card class="pa-2" outlined tile>
                <v-card-title>{{ article.data().title }}</v-card-title>
                <v-img :src="article.url"> </v-img>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
        <v-card-title class="d-flex justify-space-around md-2">
          さらに表示する
        </v-card-title>
        <!-- 記事を画面全体に表示するページを　-->
      </v-col>
      <!-- 投稿された記事サムネ表示 -->
      <v-col cols="4">
        <v-card class="mx-auto" max-width="300" tile>
          <v-list disabled>
            <v-subheader>カテゴリ別検索</v-subheader>

            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  class=""
                ></v-list-item-title>
                <v-btn tile color="orange" outlined @click="goto(item)" nuxt>
                  投稿する
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import url from 'vuelidate/lib/validators/url'
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { id: 1, text: '特養' },
      { id: 2, text: '老健' },
      { id: 3, text: 'グループホーム' },
      { id: 4, text: 'ケアハウス' },
      { id: 5, text: '病院' },
      { id: 6, text: 'その他' },
    ],
    articles: [],
  }),
  // カテゴリ別検索
  methods: {
    getArticle() {
      this.$fire.firestore
        .collection('article')
        .where('category', '==', this.$route.query.id)
        .get()

        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let storage = this.$fire.storage
            let storageRef = storage.ref().child('article/' + doc.id)
            console.log(this.file)
            storageRef
              .getDownloadURL()
              .then((res) => {
                console.log(res)
                doc['url'] = res
                this.articles.push(doc)
                console.log('見たいやつ', doc.url)
                console.log(doc.id)
              })
              .catch((error) => console.log(error))
          })
        })
    },
    // 画像のURL取得
    toDetail(id) {
      // @click=toDetail実行したらarticleのid渡してる。113のIDを使って114の処理をする。
      this.$router.push({ path: `article/` + id })
    },
    goto(item) {
      this.$router.push({ path: `/?` + item.id + '&' + item.text })
    },
  },
  created: function () {
    this.getArticle()
    console.log('created')
    console.log(this.$route.query)
    console.log(this.$route.params.id)
  },
}
</script>
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
.card-style {
  background-color: red;
  max-width: 100px !important;
  max-height: 50px;
}
</style>
