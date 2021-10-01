<template>
  <v-flex xs6 md12>
    <v-form v-model="valid">
      <v-card class="pa-4">
        <v-card-title class="font-weight-bold">私が体験したこと</v-card-title>
        <v-text-field v-model="form.title" placeholder="タイトル">
        </v-text-field>
        <v-file-input
          v-model="file"
          show-size
          label="画像を選択する。"
        ></v-file-input>
        <v-card-title>体験した施設を選んでください。</v-card-title>
        <v-btn-toggle
          v-btn-toggle
          v-model="text"
          tile
          color="green right1"
          group
        >
          <v-btn value="left"> 特別養護老人ホーム </v-btn>

          <v-btn value="center"> 老人健康保健施設 </v-btn>

          <v-btn value="right"> ケアハウス </v-btn>

          <v-btn value="justify"> グループホーム </v-btn>

          <v-btn value="justify"> 病院 </v-btn>
        </v-btn-toggle>
        <v-card-title
          >上記以外の場合は、下の欄へ記入してください。</v-card-title
        >
        <v-text-field v-model="form.title" placeholder="記入先はこちら">
        </v-text-field>
        <v-card-title>施設内のどこで起きたのかを教えてください。</v-card-title>
        <v-btn-toggle v-model="text" tile color="green right1" group>
          <v-btn value="left"> 居室 </v-btn>

          <v-btn value="center"> 廊下 </v-btn>

          <v-btn value="right"> 食堂 </v-btn>

          <v-btn value="justify"> トイレ </v-btn>

          <v-btn value="justify"> 浴室 </v-btn>
        </v-btn-toggle>

        <v-card-title
          >上記以外の場合は、下の欄へ記入してください。</v-card-title
        >
        <v-text-field v-model="form.title" placeholder="記入先はこちら">
        </v-text-field>

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
        <v-btn class="fill-width caption" color="pink" @click="submit">
          投稿する
        </v-btn>
      </v-card>
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
    file: {},
  }),

  // computed: {
  //   selectErrors() {
  //     const errors = []
  //     if (!this.$v.select.$dirty) return errors
  //     !this.$v.select.required && errors.push('Item is required')
  //     return errors
  //   },
  // },

  methods: {
    submit() {
      this.$fire.firestore
        .collection('article')
        .add(this.form)
        .then((ref) => {
          console.log('Add ID: ', ref.id)
          this.uploadImgfile(ref.id)
        })
      this.$v.$touch()
    },
    uploadImgfile(fileName) {
      let storage = this.$fire.storage
      let storageRef = storage.ref().child('article/' + fileName)
      console.log(this.file)
      storageRef
        .put(this.file)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    },
  },
}
</script>
