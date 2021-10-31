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
        <v-btn-toggle v-model="build" tile color="orange" group>
          <v-btn
            :value="category.value"
            v-for="(category, i) in categories"
            :key="i"
          >
            {{ category.text }}
          </v-btn>
        </v-btn-toggle>
        <!-- ボタン中身グループわけてる。 -->
        <v-card-title
          >上記以外の場合は、下の欄へ記入してください。</v-card-title
        >
        <v-text-field v-model="form.detail" placeholder="記入先はこちら">
        </v-text-field>
        <v-card-title>施設内のどこで起きたのかを教えてください。</v-card-title>
        <v-btn-toggle v-model="form.place" tile color="orange" group>
          <v-btn value="7"> 居室 </v-btn>

          <v-btn value="8"> 廊下 </v-btn>

          <v-btn value="9"> 食堂 </v-btn>

          <v-btn value="10"> トイレ </v-btn>

          <v-btn value="11"> 浴室 </v-btn>
        </v-btn-toggle>

        <v-card-title
          >上記以外の場合は、下の欄へ記入してください。</v-card-title
        >
        <v-text-field v-model="form.other" placeholder="記入先はこちら">
        </v-text-field>

        <v-card-title
          >どのように対処したか、そしてあなたが感じたことを共有してみましょう。</v-card-title
        >
        <v-textarea
          v-model="form.another"
          class="mt-0"
          solo
          label=""
          auto-grow
          rows="5"
          placeholder="記入先はこちら！"
        ></v-textarea>

        <!-- <v-btn tile color="orange" outlined @click="submit" to="/" nuxt>
          <v-icon left> mdi-pencil </v-icon>
          投稿する
        </v-btn> -->
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="orange" dark v-bind="attrs" v-on="on">
                確認する
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                投稿するにあたって
              </v-card-title>

              <v-card-text>
                この投稿によって施設、職員、個人が特定されたり、誹謗中傷の対象とならないこと。
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="orange" to="/" nuxt @click="submit">
                  確認しました。
                </v-btn>
                <!-- ここ　-->
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
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
    form: { title: '', detail: '', place: '', other: '', another: '' },
    categories: [
      { text: '特別養護老人ホーム', value: '1' },
      { text: '老人健康保健施設', value: '2' },
      { text: 'ケアハウス', value: '3' },
      { text: 'グループホーム', value: '4' },
      { text: '病院', value: '5' },
    ],

    places: [{ text: '' }],
    file: {}, // ファイル選択した画像を保存してるよ
    return: {
      dialog: false,
    },
  }),

  methods: {
    submit() {
      this.$fire.firestore
        .collection('article')
        .add(this.form)
        .then((ref) => {
          console.log('Add ID: ', ref.id)
          this.uploadImgfile(ref.id)
        })
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
