<template>
  <div>
    詳細ページ
    {{ article.title }}
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
          this.article = doc.data()
          console.log(doc.data())
          console.log(doc)
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
