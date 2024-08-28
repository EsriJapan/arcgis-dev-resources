+++
title = "インストールおよびセットアップ方法"
description = "インストールおよびセットアップの方法を紹介します。"
weight = 4
aliases = ["/javascript/install-and-setup/"]
+++

## インストールおよびセットアップ

### API へのアクセス

ArcGIS Maps SDK for JavaScript をアプリに導入するには、複数のオプションがあります。AMD および ES モジュールの詳細については、[Introduction to Tooling](https://developers.arcgis.com/javascript/latest/tooling-intro/) を参照してください。

### ArcGIS CDN による AMD モジュール

API にアクセスする最も一般的な方法は、ホスト型のバージョンを使用することです。Esri の CDN から API と CSS を参照して、アプリでの API の使用を開始してください。
```ts
<link rel="stylesheet" href="https://js.arcgis.com/4.30/esri/themes/light/main.css">
<script src="https://js.arcgis.com/4.30/"></script>
```

### NPM による ES モジュール

JavaScript API は、npm（JavaScriptのパッケージマネージャー）を使っても利用できます。ローカルに API をインストールして、React や Angular などの JavaScript フレームワークや、[webpack](https://webpack.js.org/) や [rollup.js](https://rollupjs.org/) などのモジュールバンドラーで利用することができます。

インストール方法：
```ts
npm install @arcgis/core
```

モジュールのインポート：
```ts
import Map from "@arcgis/core/Map.js";
```

CSS のインポート：
```css
/* URL 文字列を使用した CSS */
@import "https://js.arcgis.com/4.30/@arcgis/core/assets/esri/themes/light/main.css";
```

詳細については、以下のガイドを参照してください。
- [ツールの紹介](https://developers.arcgis.com/javascript/latest/tooling-intro/)
- [ES モジュールの構築](https://developers.arcgis.com/javascript/latest/es-modules/)

### CDN による ES モジュール

※ この方法は、現在のところ、開発やプロトタイピングにのみ推奨されています。
```ts
<link rel="stylesheet" href="https://js.arcgis.com/4.30/@arcgis/core/assets/esri/themes/light/main.css">
<script type="module">
  import Map from "https://js.arcgis.com/4.30/@arcgis/core/Map.js";

  // Use the Map class
</script>
```

### ローカルにホストされる AMD モジュール

場合によっては、[ArcGIS CDN を介して AMD モジュール](https://developers.arcgis.com/javascript/latest/install-and-set-up/#amd-modules-via-arcgis-cdn)のローカルにホストされたバージョンを使用する必要があります。この例は、インターネットにアクセスできない制限されたネットワーク環境で作業している場合です。また、API リファレンス、チュートリアル、およびサンプルを含むドキュメントをダウンロードしてインストールすることもできます。ダウンロード可能なドキュメントは、バージョン 4.30 のリリース日からのスナップショットであり、最新のサンプル アップデートやドキュメントの修正などは含まれていません。

ArcGIS Maps SDK for JavaScript およびそのドキュメントをダウンロードするには、ArcGIS Maps SDK for JavaScript の[ダウンロード ページ](https://developers.arcgis.com/downloads/#javascript)に移動し、Esri グローバル アカウントでログインします。

## Web サーバーのホスティング設定

ArcGIS Maps SDK for JavaScript をホストする Web サーバのホスティング構成では、以下の MIME/type 登録が必要です。

| エクステンション | MIME/type | 説明 |
| --------------- | --------- | ---- |
| `.ttf` | `application/octet-stream` | True Type フォント |
| `.wasm` | `application/wasm` | [WebAssembly](https://webassembly.org/) |
| `.woff` | `application/font-woff` | [Web Open Font Format](https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF) |
| `.woff2` | `application/font-woff2` | [WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/) |
| `.wsv` | `application/octet-stream` | Scene View の星の可視化に対応 |
| `.pbf` | `application/x-protobuf` | [一部のレイヤーの MapView ラベル](https://developers.arcgis.com/javascript/latest/labeling/#mapview)用のフォント |

なお、HTTPS をサポートする Web サーバーでは、SSL Web サーバー証明書を使用する必要があります。