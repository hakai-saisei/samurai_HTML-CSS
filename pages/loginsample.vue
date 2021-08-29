<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
        <v-card-actions>
          <v-btn class="info">ログイン</v-btn>
          <v-card width="400px" class="mx-auto mt-5"></v-card>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default { name: 'App', data: () => ({ showPassword: false }) }
data: () => ({
  valid: true,
  name: '',
  nameRules: [
    (v) => !!v || '正しいIDを入力してください。',
    (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ],
  email: '',
  emailRules: [
    (v) => !!v || 'E-mail is required',
    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
  checkbox: false,
}),
  methods
validate()
this.$refs.form.validate()

reset()
this.$refs.form.reset()

resetValidation()
this.$refs.form.resetValidation()
</script>