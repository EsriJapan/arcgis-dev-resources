+++
title = "開発の手順 (CDN)"
description = "cdn を使用した ArcGIS Maps SDK for JavaScript の開発の手順について紹介します。"
Weight = 2
aliases = ["/javascript/get-started-cdn/"]
+++

出典 : ArcGIS Maps SDK for JavaScript - [Get started with CDN](https://developers.arcgis.com/javascript/latest/get-started-cdn/)

{{% notice note %}}

コード : [Map コンポーネントを表示する](https://developers.arcgis.com/javascript/latest/tutorials/display-a-map-component/)チュートリアル、または [マップ コンポーネントの導入-2D マップの作成](https://developers.arcgis.com/javascript/latest/sample-code/intro-map-components/) サンプルから始めましょう。

{{% /notice %}}

### セットアップ
ArcGIS Maps SDK for JavaScript をアプリに取り込むには、複数の方法があります。 最も一般的な方法は、ArcGIS CDN を使用することです。ファイルは最適化されたクラウド キャッシング経由でダウンロードされるため、アプリケーションをローカルでビルドする必要はありません。 また、アプリケーションを毎回再構築する必要がないため、SDK の新しいバージョンへのアップデートも簡単です。

### コンポーネント
コンポーネントについては、HTML に以下のタグを使用して、アプリケーションに CSS とライブラリを追加します。

``` HTML
  <!-- Load Map Components from CDN-->
  <link rel="stylesheet" href="https://js.arcgis.com/4.31/esri/themes/light/main.css">
  <script src="https://js.arcgis.com/4.31/"></script>
  <script type="module" src="https://js.arcgis.com/map-components/4.31/arcgis-map-components.esm.js"></script>
```

ArcGIS Online または ArcGIS Enterprise のポータルの WebMap を使用する場合は、`arcgis-map` タグを HTML に追加し、オプションの `item-id` を割り当てます。ステップバイステップの手順については、[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/display-a-map-component/)を参照してください。

``` HTML
<arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca"></arcgis-map>
```

それが完了したら

- basemap、center、zoom などのプロパティを設定します。
- `arcgisViewReadyChange` イベントを使用して、ビューの準備ができたとき、またはビューのマップやシーンが置き換えられたときを監視します。
- コア API を使用してカスタム JavaScript ロジックを追加します - ステップバイステップの手順については、[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/using-view-with-components/)を参照してください。

``` JavaScript
const mapElem = document.querySelector("arcgis-map");
mapElem.addEventListener("arcgisViewReadyChange", (event) => {
  const { view, map } = event.target;
});
```

### API
API の AMD モジュールには、以下のスクリプトタグを使用します : 

``` HTML
<link rel="stylesheet" href="https://js.arcgis.com/4.31/esri/themes/light/main.css">
<script src="https://js.arcgis.com/4.31/"></script>
```

HTML に div を追加し、`id` を割り当てます：

``` HTML
<div id="viewDiv"></div>
```

それが完了したら、マップを初期化し、カスタム機能を追加し始めることができます : 

``` JavaScript
const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv", // reference to the div id
  map: map,
  zoom: 4,
  center: [15, 65]
});
```

















