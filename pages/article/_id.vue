<template>
  <div>
    <v-card-title>記事詳細</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-card min-height="600" min-width="auto">
              <v-card-title>{{ article.title }}</v-card-title>
              <v-img :src="article.url"> </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-col>
          <v-card>
            <v-card-title>投稿者</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細１概要"
            ></v-textarea>
            <v-card-title>投稿日時</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細２概要"
            ></v-textarea>
            <v-card-title>施設</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細３概要"
            ></v-textarea>
            <v-card-title>場所</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細４概要"
            ></v-textarea>
            <v-card-title>どう感じ、どう対処したか</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細５概要"
            ></v-textarea>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: '特養', icon: 'alphabet-t-box-outline' },
      { text: '老健', icon: 'alphabet-r-box-outline' },
      { text: 'GH', icon: 'alphabet-g-box-outline' },
      { text: 'ケアハウス', icon: 'alphabet-c-box-outline' },
    ],
    article: {},
  }),
  methods: {
    getArticle() {
      this.$fire.firestore
        .collection('article')
        .doc(this.$route.params.id)
        .get()
        .then((doc) => {
          // ↑のドックに下の要素を入れますよーって合図。
          let storage = this.$fire.storage
          let storageRef = storage.ref().child('article/' + doc.id)
          this.article = doc.data()
          console.log(doc.data())
          console.log(doc.id, 'こんにちわ')
          storageRef
            .getDownloadURL()
            .then((res) => {
              console.log(res)
              doc['url'] = res
              this.article = doc
              // =が代入の意味。docがここまでのデータ要素を含んでいる。
              console.log(doc.data())
              console.log('見たいやつ', doc.url)
              console.log(doc.id)
            })
            .catch((error) => console.log(error))
        })
    },
    toDetail() {
      this.$router.push({ path: `article/1` })
    },
  },
  created: function () {
    this.getArticle()
    console.log(this.$route.params)
    console.log(this.$route.params.id)
  },
}
</script>
<style scoped>
</style>
