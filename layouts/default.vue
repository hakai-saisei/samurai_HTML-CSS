<template>
  <v-app dark class="body">
    <v-app-bar :clipped-left="clipped" fixed app>
      <div @click="toTop" class="logo d-flex justify-left">
        <v-icon left> mdi-home </v-icon>
        <!-- mdiとは MaterialDesginIcon の略称 -->
        <div class="logo-text">ポジティブケア</div>
      </div>
      <!-- クラスバインディングの基本は「オブジェクト構文」です。
      v-bind:class(省略記法:class)ディレクティブにオブジェクトを与え、
      クラス名をプロパティにして、値となる式を定めます。式のブール(論理)値評価がtureなら、クラスが適用される仕組みです。
      :class="{active: isActive}"
      :重要。:が付いたら右を変数として扱う。変数を使用して処理を分けたい時に使う。
      今回の例だと、右を文字列として扱うか、変数として扱うか。-->
      <v-spacer />

      <div class="page">
        <v-text-field
          v-model="keyword"
          outlined
          rounded
          label="検索ワードを入力"
          append-outer-icon="mdi-magnify"
        ></v-text-field>
      </div>

      <!-- 上のは検索機能 -->
      <v-row class="d-flex flex-row-reverse" align="right">
        <v-btn v-if="loginId" tile color="orange" outlined to="/user" nuxt>
          <v-icon left> mdi-account </v-icon>
          ユーザー名
        </v-btn>
        <v-btn
          class="logout"
          v-if="loginId"
          tile
          color="orange"
          outlined
          to="/"
          nuxt
          @click="logout"
        >
          ログアウト
        </v-btn>
        <v-btn
          v-if="loginId == null"
          tile
          color="orange"
          outlined
          to="/login"
          nuxt
        >
          <v-icon left> mdi-pencil </v-icon>
          ログイン
        </v-btn>
        <v-btn
          v-if="loginId == null"
          tile
          color="orange"
          outlined
          to="/register"
          nuxt
        >
          <v-icon left> mdi-pencil </v-icon>
          新規登録
        </v-btn>
        <v-btn v-if="loginId" tile color="orange" outlined to="/post" nuxt>
          <v-icon left> mdi-pencil </v-icon>
          投稿
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
  loading: {
    color: 'blue',
    height: '5px',
  },
  data() {
    return {
      title: 'ポジティブケア',
      tab: null,
      keyword: '',
      loading: false,
      posts: [],
      users: [],
    }
  },
  methods: {
    toTop() {
      this.$router.push({ path: `/` }) //タイトル
    },
    logout() {
      this.$store.dispatch('setLoginUserId', null) //ログイン状態をnullに
    },
    search() {
      this.loading = true
      const url = 'api/v1/search'
      this.$axios
        .get(url, { params: { keyword: this.keyword } })
        .then((res) => {
          this.posts = res.data.posts
          this.users = res.data.users
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },

  computed: {
    loginId: function () {
      return this.$store.state.loginUserId
    },
  },
  watch: {
    loginId: function (val) {
      console.log('ユーザーIDが変更された: ', this.$store.state.loginUserId)
    },
  },
}
</script>
<!--言語をCSSからSCSSに変更。階層を表現できるため
　　 親がlogoクラスで子がlogo-textならば適用されるようにしている。 -->
<style lang="scss"scoped>
.body {
  background: #fff3e0;
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