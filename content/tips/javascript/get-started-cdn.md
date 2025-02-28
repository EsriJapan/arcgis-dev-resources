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
ArcGIS Maps SDK for JavaScript をアプリに組み込む方法はいくつかあります。最も一般的な方法は、ArcGIS CDN を使用することです。ファイルは最適化されたクラウドキャッシュを介してダウンロードされるため、アプリケーションをローカルでビルドする必要がありません。また、SDK の新しいバージョンに更新するのも簡単で、その都度アプリケーションを再ビルドする必要がありません。

### コンポーネント
ArcGIS Maps SDK for JavaScript のコンポーネントは、[Calcite Design System](https://developers.arcgis.com/calcite-design-system/) と SDK の[コア API](https://developers.arcgis.com/javascript/latest/api-reference/) に依存しています。まず Calcite とコア API を読み込む必要があります。

Calcite を読み込むには、スタイルシート リンクとスクリプト タグを含めて Calcite コンポーネントをインポートします。

ArcGIS Maps SDK for JavaScript のバージョン 4.32 より前のバージョンでは、Calcite CSS リンク タグを含める必要がありました。 バージョン 4.32 では、Calcite CSS リンク タグは必要なくなりました。

``` HTML
<!-- Load Calcite -->
<script type="module" src="https://js.arcgis.com/calcite-components/3.0.3/calcite.esm.js"></script>
```

次に、SDK のコア API を読み込むには、スタイルシート リンクとスクリプト タグを含めます。
``` HTML
<!-- Load the ArcGIS Maps SDK for JavaScript core API -->
<link rel="stylesheet" href="https://js.arcgis.com/4.32/esri/themes/dark/main.css"/>
<script src="https://js.arcgis.com/4.32/"></script>
```

次に、Map コンポーネント パッケージやその他のコンポーネント パッケージを読み込むには、スクリプト タグ（必要に応じて関連する CSS も）を含めます。
``` HTML
<!-- Load map components -->
<script type="module" src="https://js.arcgis.com/map-components/4.32/arcgis-map-components.esm.js"></script>
```

カスタム CSS を追加して、コンポーネントがアプリケーション内で表示されるようにします。これは、ArcGIS のスタイルシートとライブラリを CDN からインポートした後、アプリケーションの `<head>` セクションの最後に配置する必要があります。
``` HTML
<style>
  html,
  body {
    margin: 0;
  }

  arcgis-map {
    display: block;
    height: 100vh;
  }
</style>
```

次に、HTML に `arcgis-map` コンポーネントを追加し、ArcGIS Online または ArcGIS Enterprise ポータルから WebMap を使用する場合はオプションの `item-id` を割り当てます。`item-id` が追加されない場合、デフォルトの[ベースマップ](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap)は `topo-vector` になります。詳細な手順については、[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/display-a-web-map/)を参照してください。
``` HTML
<arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca"></arcgis-map>
```

それが完了したら、次のことができます：

- [プロパティ](https://developers.arcgis.com/javascript/latest/programming-patterns/#attributes-and-properties)を設定する（例：ベースマップ、中心、ズーム）
- [変更を監視](https://developers.arcgis.com/javascript/latest/watch-for-changes/)する（例：`arcgisViewReadyChange` イベントを使用してビューが準備完了になったときや、ビューのマップまたはシーンが置き換えられたときに監視）
- コア API を使用してカスタム JavaScript ロジックを追加する。詳細な手順については、[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/using-view-with-components/)を参照してください。
``` HTML
const mapElem = document.querySelector("arcgis-map");
mapElem.addEventListener("arcgisViewReadyChange", (event) => {
  console.log('Map component is ready', event);

  // Set the zoom property
  mapElem.zoom = 10;
});
```

### API
API の AMD モジュールには、以下のスクリプトタグを使用します : 

``` HTML
<link rel="stylesheet" href="https://js.arcgis.com/4.32/esri/themes/light/main.css">
<script src="https://js.arcgis.com/4.32/"></script>
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

















