<template>
  <v-flex xs6 md12>
    <v-form v-model="valid">
      <v-card class="pa-4">
        <v-card-title class="font-weight-bold">私が体験したこと</v-card-title>
        <v-text-field v-model="form.title" placeholder="記事タイトル">
        </v-text-field>
        <v-card-title
          >施設の種類or起こった場所(居室・トイレ)などだけの方がいい？検討。</v-card-title
        >
        <v-btn outlline round class="green">選びやすいようにボタン？</v-btn>
        <v-btn outlline round class="green">それとも記述？</v-btn>
        <v-btn outlline round class="green">この辺は検討。</v-btn>
        <v-btn outlline round class="green">ボタン１</v-btn>
        <v-btn outlline round class="green">ボタン２</v-btn>
        <v-btn outlline round class="green">ボタン３</v-btn>
        <v-card-title
          >上が施設の種類で、ここ実際事件があった場所にする？</v-card-title
        >
        <v-btn outline round class="green">ボタン１</v-btn>
        <v-btn outline round class="green">ボタン２</v-btn>
        <v-btn outline round class="green">ボタン３</v-btn>
        <v-btn outline round class="green">ボタン４</v-btn>
        <v-btn-toggle
          v-model="form.place"
          tile
          color="deep-purple accent-3"
          group
        >
          <v-btn value="left"> Left </v-btn>

          <v-btn value="center"> Center </v-btn>

          <v-btn value="right"> Right </v-btn>

          <v-btn value="justify"> Justify </v-btn>
        </v-btn-toggle>
        <v-card-title
          >どのように対処したか、そしてあなたが感じたことを共有してみましょう。</v-card-title
        >
        <v-textarea
          v-model="form.detail"
          class="mt-0"
          solo
          label=""
          auto-grow
          rows="5"
          placeholder="記入先はこちら！"
        ></v-textarea>
      </v-card>
      <v-btn class="mr-4" @click="submit"> 投稿する </v-btn>
    </v-form>
  </v-flex>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    select: { required },
  },

  data: () => ({
    select: null,
    form: { title: '', detail: '', place: '' },
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  }),

  computed: {
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
  },

  methods: {
    submit() {
      this.$fire.firestore
        .collection('article')
        .add(this.form)
        .then((ref) => {
          console.log('Add ID: ', ref.id)
        })
      this.$v.$touch()
    },
  },
}
</script>
