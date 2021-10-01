<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <div @click="toTop" class="logo d-flex justify-center">
        <div class="logo-text">ポジティブケア</div>
      </div>
      <!-- クラスバインディングの基本は「オブジェクト構文」です。
      v-bind:class(省略記法:class)ディレクティブにオブジェクトを与え、
      クラス名をプロパティにして、値となる式を定めます。式のブール(論理)値評価がtureなら、クラスが適用される仕組みです。
      :class="{active: isActive}"
      :重要。:が付いたら右を変数として扱う。変数を使用して処理を分けたい時に使う。
      今回の例だと、右を文字列として扱うか、変数として扱うか。-->
      <v-spacer />
      <v-row class="d-flex flex-row-reverse" align="right">
        <v-btn tile color="green" outlined to="/login" nuxt>
          <v-icon left> mdi-pencil </v-icon>
          ログイン
        </v-btn>
        <v-btn tile color="green" outlined to="/register" nuxt>
          <v-icon left> mdi-pencil </v-icon>
          新規登録
        </v-btn>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container class="default">
        <Nuxt />
        <!-- 画面遷移後の全てはここに入っている。 -->
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'ポジティブケア',
    }
  },
  methods: {
    toTop() {
      this.$router.push({ path: `/` })
    },
  },
}
</script>
<!--言語をCSSからSCSSに変更。階層を表現できるため
　　 親がlogoクラスで自分がlogo-textならば適用されるようにしている。 -->
<style lang="scss"scoped>
.default {
  background: orange;
}
.logo {
  text-align: center;
  width: 100%;
  position: absolute;
  .logo-text {
    cursor: pointer;
  }
}
</style>