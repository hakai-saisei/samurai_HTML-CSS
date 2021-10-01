<template>
  <div>
    <v-card-title>記事詳細</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-card @click="toDetail(article.id)">
              <v-card-title>{{ article.data().title }}</v-card-title>
              <v-img :src="article.url"> </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-col>
          <v-card>
            <v-card-title>詳細１</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細１概要"
            ></v-textarea>
            <v-card-title>詳細２</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細２概要"
            ></v-textarea>
            <v-card-title>詳細３</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細３概要"
            ></v-textarea>
            <v-card-title>詳細４</v-card-title>
            <v-textarea
              class="mt-0"
              solo
              auto-grow
              rows="1"
              value=""
              placeholder="詳細４概要"
            ></v-textarea>
            <v-card-title>詳細５</v-card-title>
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
import url from 'vuelidate/lib/validators/url'
export default {
  data: () => ({
    methods: {
      getArticle() {
        this.$fire.firestore
          .collection('article')

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
                  console.log(doc.data())
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
    },
    created: function () {
      this.getArticle()
      console.log('created')
    },
  }),
}
</script>