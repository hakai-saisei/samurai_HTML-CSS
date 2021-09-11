<template>
  <div>
    <v-card class="overflow-hidden">
      <v-img
        class="white--text align-end"
        height="600px"
        src="https://pro-foto.jp/free/img/images_big/hns0006-009.jpg"
      >
        <v-row>
          <v-col cols="6">
            <v-card-title class="font-weight-bold"
              >ポジティブケア
            </v-card-title>
          </v-col>
        </v-row>
      </v-img>

      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="700"
      >
        <v-container style="height: 1000px"></v-container>
      </v-sheet>
    </v-card>

    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="6" v-for="(article, i) in articles" :key="i">
            <v-card
              class="d-flex justify-space-around mb-2"
              color="grey lighten-2"
              flat
              tile
              min-height="600"
              min-width="auto"
              @click="toDetail(article.id)"
            >
              <v-card class="pa-2" outlined tile>
                <v-card-title>{{ article.data().title }}</v-card-title>
                <v-img
                  src="https://pro-foto.jp/free/img/images_big/sor0090-024.jpg"
                >
                </v-img>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="300" tile>
          <v-list disabled>
            <v-subheader>カテゴリ</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
        <v-card class="mx-auto" max-width="300" tile>
          <v-list disabled>
            <!-- <v-subheader>REPORTS</v-subheader> -->
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
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
    articles: [],
  }),
  methods: {
    getArticle() {
      this.$fire.firestore
        .collection('article')

        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.articles.push(doc)
            console.log(doc.data())
            console.log(doc.id)
          })
        })
    },
    toDetail(id) {
      this.$router.push({ path: `article/` + id })
    },
  },
  created: function () {
    this.getArticle()
    console.log('created')
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
