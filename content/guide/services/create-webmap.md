+++
title = "Web マップの作成"
description = "さまざまなフォーマットのデータを 1 つのマップとして集約し、それを可視化する方法を紹介します。"
Weight=3
aliases = ["/create-webmap/"]
+++

## Web マップとは

<img src="https://apps.esrij.com/arcgis-dev/guide/img/webmap/webmap.gif" width="300px">

Web マップとは背景地図や主題となる地図データを追加し、表示方法などを設定してクラウド上に JSON 形式で保存される Web 上の地図です。Web マップの作成には ArcGIS クラウド サービスが提供する地図作成ツール（[マップ ビューアー](https://www.arcgis.com/apps/mapviewer/index.html)）を使用します。クラウド上に保存された Web マップを使えば、地図上に何をどのように表示するかを一つ一つコーディングする必要がなく、非常にローコストで地図アプリを作成することができます。

Web マップに含まれる情報は以下の JSON 仕様で確認できます。

* [Web マップ仕様 (Web Map JSON)](https://developers.arcgis.com/web-map-specification/)

## Web マップの作成

### 1. Web マップの作成とレイヤーの追加

マップ ビューアーで Web マップを作成していきましょう。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/webmap/addlayer.gif" width="600px">

1. [マップ ビューアー](https://www.arcgis.com/apps/mapviewer/index.html)を開きます。

1. 開発者アカウントでサインインします（サインインをしないと地図作成機能を利用できません）。

1. ArcGIS Living Atlasで共有中のレイヤーを追加します。[追加] をクリック後、[マイコンテンツ]を [Living Atlas] に変更し [レイヤーの検索] を選択します。

1. レイヤーの検索を行います。検索先を変えるなどしてもよいので、検索フォームにお好きなキーワードを入力して検索してみましょう。

1. 検索結果が表示されたら、追加したいレイヤーの[+]ボタンをクリックするとレイヤーが追加されます。
  * 今回は、東京都 避難所と南海トラフ巨大地震の被害想定（震度/最大クラス）のレイヤーを追加しています。

### 2. レイヤーの表示方法の設定

<img src="https://apps.esrij.com/arcgis-dev/guide/img/webmap/styling.gif" width="600px">

1. レイヤーの表示設定を変えてみましょう。 レイヤー リストから表現を変更したいレイヤーを選び、[...] アイコンをクリックして、[プロパティの表示] をクリックします。

1. 画面右側に表示される[プロパティ]内の[レイヤースタイルの編集]をクリックします。

1. レイヤースタイルの個別値シンボルの場合は、属性値ごとに表示したいシンボルを設定することができます。シンボルを設定してみましょう。

1. [スタイルの選択]内の[場所(単一シンボル)]の[スタイルオプション]をクリックします。ペンアイコンをクリックして、シンボルをお好きなシンボルに変更します。また、見ずらいという方はサイズの変更を行うこともできます。

1. レイヤー リスト上の透過率を設定したいレイヤー下にある [...] アイコンをクリックして、画面右側に表示される[プロパティ]内の[透過表示] にカーソルを合わせると、スライダ－で透過率を設定できます。
<br>これで背景地図が見えるように設定できるので場所の特定はできるようになりましたが、地震の被害想定は見たい人だけに見てほしい。そんな場合には、初期状態で非表示にしておくことができます。
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/webmap/display.gif" width="600px">

1. 非表示にしたいレイヤー名の右にある目のマークをクリックして[／]で消すと、レイヤーは非表示になります。

### 3. Web マップの保存

<img src="https://apps.esrij.com/arcgis-dev/guide/img/webmap/save.gif" width="600px">

最後にここまで設定を行ってきた Web マップの保存を行います。保存すると Web マップには ID が割り当てられます。開発の際に、この ID を参照することで、設定を行った状態の地図をそのまま表示することができます。

1. 画面左側のメニューから[保存と開く] →[名前をつけて保存]の順にクリックし、マップの情報を入力します。入力し終わったら、[保存] をクリックして、保存は完了です。必須項目はマップのタイトルです。

1. 保存が完了すると、URL が自動的に変更されます。URL 末尾の `?webmap=<Web マップ ID>` が Web マップの ID です。メモしておきましょう。

 <img src="https://apps.esrij.com/arcgis-dev/guide/img/webmap/webmapid2.png" width="600px">

---

アプリの作成を始めましょう！お使いの開発環境からお選びください。

* [JavaScript](../../create-app/create-startup-app-js)
* [Android](../../create-app/create-startup-app-android)
* [iOS](../../create-app/create-startup-app-ios)
* [.NET](../../create-app/create-startup-app-dotnet)
