<template>
  <div>
    <div>
      <v-card class="mx-auto fill-width" flat max-width="640">
        <v-card-title class="text-center pa-8">
          <v-avatar size="80" class="mb-3 avatar">
            <img
              src="@/assets/no-avater.png"
              class="avatar-image"
              v-if="!avaterImage.image"
            />
            <!-- !で逆という意味 -->
            <img :src="avaterImage.image" />
            <!-- 画像ファイルの呼び出し処理　-->
          </v-avatar>
          <v-file-input
            v-model="file"
            show-size
            label="画像を選択する。"
            ref="file"
            @change="setImage"
          ></v-file-input>
          <!-- inputの値が変わる処理はchange -->
          <h4 class="fill-width">アカウント設定ページ</h4>
        </v-card-title>
        <v-divider> </v-divider>
        <div class="px-6 py-8">
          <div style="max-width: 344px" class="mx-auto">
            <div class="separator separator_login_page"></div>
            <div class="pt-6">
              <div>
                <v-text>ニックネーム</v-text>

                <v-text-field
                  v-model="form.nickName"
                  dense
                  height="48px"
                  outlined
                ></v-text-field>
                <v-text>ユーザーID</v-text>
                <v-text-field
                  v-model="form.loginUserId"
                  dense
                  height="48px"
                  outlined
                ></v-text-field>
                <v-text>年齢</v-text>
                <v-text-field
                  v-model="form.age"
                  dense
                  height="48px"
                  outlined
                ></v-text-field>
                <v-text>働いたことのある施設</v-text>
                <v-text-field
                  v-model="form.text"
                  dense
                  height="48px"
                  outlined
                ></v-text-field>
                <v-text>自己紹介文</v-text>
                <v-text-field
                  v-model="form.profile"
                  dense
                  auto-grow
                  height="96px"
                  outlined
                ></v-text-field>
              </div>
              <div class="login-btn pb-8">
                <v-btn
                  class="fill-width caption"
                  color="#FFCB00"
                  depressed
                  height="48px"
                  tile
                  @click="submit"
                >
                  変更を保存
                </v-btn>
              </div>
              <v-divider></v-divider>
              <div class="pt-8 pb-4">
                <nuxt-link to="/">トップページに移動</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: { nickName: '', loginUserId: '', age: '', text: '', profile: '' },
    avaterImage: {},
  }),
  computed: {
    loginId: function () {
      return this.$store.state.loginUserId
    }, // computed の意味が「計算された」。83.84行目の計算した値を出してくれている。本来ならそこらじゅうにthis.fire.storeとか書かないといけないのを計算してくれてる。
  },
  methods: {
    getArticle() {
      this.$fire.firestore
        .collection('user')
        .doc(this.loginId)
        .get()
        .then((doc) => {
          this.form = doc.data()
        })
    },
    submit() {
      this.$fire.firestore
        .collection('user')
        .doc(this.loginId)
        .set(this.form)
        .then(function () {
          console.log('アカウント情報の更新に成功しました。')
        })
        .catch(function (error) {
          console.error('アカウント情報の更新に失敗しました。', error)
        })
    },
    setImage(e) {
      // const files = this.$refs.file
      // console.log(files)
      // console.log(e)
      // console.log(files.files)
      // const fileImg = files.files[0] // 画像を取得する際、filesオブジェクトの0番目の画像を取得する。これルール。

      this.avaterImage.image = window.URL.createObjectURL(e)
      this.avaterImage.name = e.name
      this.avaterImage.type = e.type
    },
    uploadImgfile(fileName) {
      let storage = this.$fire.storage
      let storageRef = storage.ref().child('user/' + fileName)
      console.log(this.file)
      storageRef
        .put(this.file)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    },
  },
  created: function () {
    this.getArticle()
    console.log('created')
  },
}
</script>
<style scoped>
.fill-width {
  width: 100%;
}
.link-caption {
  text-decoration: none;
  color: #666 !important;
  font-size: 0.75rem;
}
.separator {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  position: relative;
}
.middle_separator {
  position: absolute;
  padding: 0 16px;
  color: #ccc;
  background: #fff;
  font-size: 11px;
  text-shadow: 0 1px 0 #fff;
  text-transform: uppercase;
  top: -7px;
  left: 30%;
}
.middle_separator {
  color: #777;
  font-size: 13px;
  top: -9px;
  left: 41%;
}
</style>