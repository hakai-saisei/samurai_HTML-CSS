<template>
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
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || '正しいIDを入力してください。',
      (v) => (v && v.length <= 10) || 'Name must be less than 128 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    checkbox: false,
  }),

  methods: {
    submit() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log('成功！')
          dispatch('checkLogin')
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
<style scoped>
.login {
  background: white;
}
</style>