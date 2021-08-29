<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="君の名は？IDを入力してください。"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="メアド教えてよ。E-mailアドレスを入力してください。"
      required
    ></v-text-field>

    <v-row align="center" justify="space-around">
      <v-btn tile color="#8BC34">
        <v-icon left> mdi-pencil </v-icon>
        君の瞳に今すぐアクセス
      </v-btn>
    </v-row>
  </v-form>
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
