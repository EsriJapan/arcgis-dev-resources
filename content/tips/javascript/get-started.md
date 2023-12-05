+++
title = "開発の手順"
description = "ArcGIS Maps SDK for JavaScript のAPIキーの取得方法について紹介します。"
weight = 1
aliases = ["/javascript/get-started/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Get Started](https://developers.arcgis.com/javascript/latest/get-started/)

1 API の[インストールとセットアップ](#1インストールとセットアップ)

2 [API キーの取得](#2api-キーの取得)

3 チュートリアル [マップの表示(2D)](https://esrijapan.github.io/arcgis-dev-resources/guide/create-app/create-startup-app-js/)の開始

## 1.インストールとセットアップ
ArcGIS Maps SDK for JavaScript をアプリケーションに読み込むには複数の方法があります。最も一般的な方法は、ArcGIS CDN 経由でAMD モジュールを使用する方法でローカルビルドにも対応しています。

AMD モジュールの場合は、以下のスクリプト タグを使用します。
```ts
<link rel="stylesheet" href="https://js.arcgis.com/4.28/esri/themes/light/main.css">

<script src="https://js.arcgis.com/4.28/">
</script>
```
ES モジュールの場合は、ターミナル ウインドウ上で [npm](https://docs.npmjs.com/getting-started) を用いてモジュールをインストールします
```ts
npm install @arcgis/core
```
CSSには[@import url](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)を用います
```ts
<* CSS url as a string *>

<@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css";>
</script>
```
詳しくは、[インストールとセットアップ](https://developers.arcgis.com/javascript/latest/install-and-set-up/)をご覧ください。

## 2.API キーの取得

{{% notice note %}}

アプリケーションで認証に ArcGIS Identities のみを使用している場合は、この手順を省略できます。詳細については、[セキュリティと認証](https://esrijapan.github.io/arcgis-dev-resources/guide/security/)をご覧ください。

{{% /notice %}}

ベースマップ、ジオコーディング、ルーティングなどの ArcGIS サービスにアクセスするには、API キーが必要です。[ダッシュボード](https://developers.arcgis.com/dashboard/)にアクセスしてデフォルトの API キーをコピーするか、特定のニーズに合わせてカスタム スコープとリファラを設定してください。チュートリアルやサンプルの説明で必要な場合は、API キーを含めてください。[グローバルAPIキー](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#apiKey)だけでなく、特定のクラスでより細かいAPIキーを使用することもできます。

１ [ダッシュボード](https://developers.arcgis.com/dashboard/)にログインする

２ デフォルトのAPIキーをコピーするか、新しいキーを生成する

## 3.チュートリアル
[マップの表示(2D)](https://esrijapan.github.io/arcgis-dev-resources/guide/create-app/create-startup-app-js/)

[現在地の表示(英語)](https://developers.arcgis.com/javascript/latest/tutorials/display-your-location/)

[ポイント、ライン、ポリゴンの表示(英語)](https://developers.arcgis.com/javascript/latest/tutorials/add-a-point-line-and-polygon/)