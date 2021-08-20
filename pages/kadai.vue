<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://pro-foto.jp/free/img/images_big/kis0148-009.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ポジティブケア</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu
        bottom
        left 
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>特養</v-tab>
          <v-tab>老健</v-tab>
          <v-tab>ケアハウス</v-tab>
          <v-tab>グループホーム</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
  <!-- こっちを見ろ。こっちを見ろと言っているんだぜ。　　　　以下その他　アクションとアイテムグループより　　　こっちを見ろ。こっちを見ろと言っているんだぜ。-->
<div>

<v-else-if>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-toolbar
      color="purple"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Settings</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list
      subheader
      three-line
    >
      <v-subheader>User Controls</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Content filtering</v-list-item-title>
          <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Password</v-list-item-title>
          <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>General</v-subheader>

      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</v-else-if>
</div>

<!--  メモ用というかどこの何を使ったのか。どこでつまづいたのかを書いておく。

まず最初。Vuetify　App-Bars　
https://vuetifyjs.com/ja/components/app-bars/　  その他メニューの最初
R3.8.6 トップ画像差し替え。https://pro-foto.jp/free/img/images_big/kis0148-009.jpg
　　　　 タイトル、ボタン名前変更。特に問題なく反映される。余裕やで

R3.8.9 メインリスト追加。フレームワーク後ろに追加。以下引用先 Vuetify Lists　その他アクションとアイテムグループ
https://vuetifyjs.com/ja/components/lists/#section-30a230af30b730e730f3306830a230a430c630e030b030eb30fc30d7

ターミナルでエラー表示ないけどWeb上でエラー。 v-else-if　using multiple elements ホニャホニャ。こっちを見ろ以下をchainしろと。は？ggrわ。
翻訳すると、「コンポーネントテンプレートには、ルートエレメントを一つだけ含める必要があります。」だそうな。は？

<div>
  打とうとしてたコード
</div>

<template>タグの中のルートエレメントは1つだけにする必要がある。解説こちらhttps://web-camp.io/magazine/archives/27528

以下一部抜粋
HTMLには、段落を表す<p>タグや見出しを表す<h1>タグなど数多くのタグがあります。
これらのタグの一つである<div>タグは、他のタグとは違い<div>タグ単体では意味を持ちません。
しかし、<div>タグは囲んだ要素をグループ化する役割を持ちます。

<div>タグはHTMLの各要素をグループ化することで、Webサイトのレイアウトを構成する際に使用したりもするので、非常に重要なタグの一つとなっています。

Webサイトのレイアウトを構成する際に<div>タグを使う。
  
へー

79行に<div> 178行に</div> 追記。何も変わりがない。へ？
あーバーしか入れてないからか？フレームを入れてみよう。
「始めましょう」ワイヤフレーム、Three Column
https://vuetifyjs.com/ja/getting-started/wireframes/#section-30b530f330d730eb
１行目コピペ。ん？やっぱりだめだ。

明日日中高尾さんにメッセ飛ばすことにする。

-->
