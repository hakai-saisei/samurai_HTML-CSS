<template>
  <div>
    <div>
      <v-card
        :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        class="mx-auto fill-width"
        flat
        max-width="640"
      >
        <v-card-title class="text-center pa-8">
          <h4 class="fill-width">新規登録ページ</h4>
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
                  :rules="[passwordRules.required, passwordRules.regex]"
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
                  会員登録
                </v-btn>
              </div>
              <v-divider></v-divider>
              <div class="pt-8 pb-4">
                <span>すでにアカウントをお持ちですか？</span><br />
                <nuxt-link to="/login">ログインに移動</nuxt-link>
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
  data() {
    return {
      email: null,
      emailRules: {
        required: (value) => !!value || 'メールアドレスは必須です',
        regex: (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ) || 'メールアドレスの形式が違います',
      },
      password: null,
      passwordShow: false,
      passwordRules: {
        required: (value) => !!value || 'パスワードは必須です',
      },
    }
  },
  methods: {
    submit() {
      this.$fire.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          dispatch('checkLogin')
        })
        .catch(function (error) {
          console.log({ code: error.code, message: error.message })
        })
    },
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