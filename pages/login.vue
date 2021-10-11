<!--<template>
  <v-card class="login">
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        label="メアド教えてよ。"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="パスワードを入力してください。"
        required
      ></v-text-field>

      <v-row align="center" justify="space-around">
        <v-btn tile color="#8BC34" @click="submit">
          <v-icon left> mdi-pencil </v-icon>
          君の瞳に今すぐアクセス
        </v-btn>
      </v-row>
    </v-form>
    <v-card width="400px" class="mx-auto mt-5"></v-card>
  </v-card>
</template> -->

<template>
  <div>
    <div>
      <v-card
        :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        class="login,mx-auto fill-width"
        flat
        max-width="640"
      >
        <v-card-title class="text-center pa-8">
          <h4 class="fill-width">ログインページ</h4>
        </v-card-title>
        <v-divider> </v-divider>
        <div class="px-6 py-8">
          <div style="max-width: 344px" class="mx-auto">
            <div class="separator separator_login_page"></div>
            <div class="pt-6">
              <div>
                <v-text-field
                  v-model="email"
                  :rules="[emailRules.required, emailRules.regex]"
                  autofocus
                  dense
                  height="48px"
                  outlined
                  placeholder="メールアドレス"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[passwordRules.required]"
                  :type="passwordShow ? 'text' : 'password'"
                  dense
                  height="48px"
                  name="input-password"
                  outlined
                  placeholder="パスワード"
                  @click:append="passwordShow = !passwordShow"
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
                  ログイン
                </v-btn>
              </div>
              <v-divider></v-divider>
              <div class="pt-8 pb-4">
                <span>アカウントをお持ちですか？</span><br />
                <nuxt-link to="/register">新規登録に移動</nuxt-link>
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
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || '正しいメールアドレスを入力してください。',
      (v) => (v && v.length <= 10) || 'email must be less than 128 characters',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || '正しいパスワードを入力してください。',
      (v) => /.+@.+\..+/.test(v) || 'password must be valid',
    ],
    checkbox: false,
    passwordShow: false,
  }),

  methods: {
    submit() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log('成功！', data.user.uid)

          this.$store.dispatch('setLoginUserId', data.user.uid)
          this.$router.push({ path: `/` })
        })
        .catch((error) => {
          alert(error)
        })
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
<style scoped >
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