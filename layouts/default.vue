<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-row align="right" justify="space-around">
        <v-btn tile color="success" to="/login" nuxt>
          <v-icon left> mdi-pencil </v-icon>
          ログイン
        </v-btn>
        <v-btn tile color="success" to="/register" nuxt>
          <v-icon left> mdi-pencil </v-icon>
          新規登録
        </v-btn>
      </v-row>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <!-- ログインボタン作るのに残しておいてもいいよ -->
        <v-icon>mdi-menu</v-icon>
      </v-btn>
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
}
</script>
<style scoped>
.default {
  background: rgb(204, 190, 190);
}
</style>