+++
title = "移行のヒント"
description = "マップ コンポーネントへの移行のヒントについて紹介します。"
weight = 5
aliases = ["/tips-for-migrating/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Tips for migrating](https://developers.arcgis.com/javascript/latest/migrating-to-components/)

## 移行のヒント
{{< callout type="warning">}}

既存のウィジェット ベースのアプリケーションを移行する場合、バージョン 5.0 以降ではウィジェットは非推奨となっており、将来のリリースで削除される予定です。詳細なスケジュールについては、[移行計画：ウィジェットからコンポーネントへ](../transition-plan/)を参照してください。

{{< /callout >}}

バージョン 4.30 で [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/documentation/glossary/arcgis-maps-sdk-for-javascript/) に Web コンポーネントが追加されました。これらのコンポーネントは[カスタム HTML 要素](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)として構築されているため、最新のブラウザーで標準的に使用でき、特定のフレームワークに依存しません。SDK では、コンポーネントによって API の定型コードの大部分をカプセル化することで、一般的なコーディング パターンを簡素化します。

アプリケーションは、[Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/) コンポーネントや [Scene](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/) コンポーネントといったコンポーネント（カスタム HTML 要素）を使って宣言的に定義できるようになりました。これにより、ビューやコンテナーの設定、モジュールのインポート作業が軽減されます。

```html
<head>
  <!-- ArcGIS Maps SDK for JavaScript のマップ コンポーネントおよびその他のコンポーネントのロード -->
  <script type="module" src="https://js.arcgis.com/5.1/"></script>
</head>
<body>
  <arcgis-map basemap="topo-vector" zoom="4" center="15, 65"></arcgis-map>
</body>
```

{{< callout type="info">}}

コンポーネントを使用する場合、個別のスタイルシートへのリンク (例：`https://js.arcgis.com/5.0/esri/themes/light/main.css`) を追加で読み込む必要はありません。SDK およびコンポーネント パッケージに必要なスタイルは自動的に処理されます。

{{< /callout >}}


## Getting started
Web コンポーネントが初めての方、またはこのトピックのブラッシュ アップが必要な方には、役立つさまざまなリソースがあります。

- すぐにコーディングを始めたい場合は、コンポーネントの[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)や [GitHub 上のコード サンプル](https://github.com/Esri/jsapi-resources/tree/main)を参照してください。

- 属性やプロパティの扱い方、変更の監視などに関する詳細ついては、[プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)のガイド トピックをお読みください。

- プロパティ、メソッド、イベントを確認するには、[リファレンス](https://developers.arcgis.com/javascript/latest/references/) ページをご覧ください。

- [AI コンポーネント (ベータ版)](https://developers.arcgis.com/javascript/latest/references/ai-components/)、[チャート コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/)、[コーディング コンポーネント](https://developers.arcgis.com/javascript/latest/references/coding-components/)、[共通コンポーネント](https://developers.arcgis.com/javascript/latest/references/common-components/)、[埋め込み可能なコンポーネント](https://developers.arcgis.com/javascript/latest/references/embeddable-components/) など、追加のコンポーネント パッケージについてはそれぞれのページをご覧ください。

- JavaScript Maps SDK コンポーネントでアプリを構築するブログ ([Build GIS Web Apps with the JavaScript Maps SDK components](https://community.esri.com/t5/a/a/ta-p/1384758/)) をご覧ください。

- MDN [ウェブコンポーネント](https://developer.mozilla.org/ja/docs/Web/API/Web_components) リソース ページをご覧ください。


## 基本的な実装
ArcGIS Maps SDK for JavaScript を使ってアプリケーションを実装する際、コンポーネントを使用すると反復的な定型コードを減らすことができます。たとえば、コア API の `Map` クラスと `MapView` クラスを使ってシンプルな地図を作成する**従来のパターン**は次のとおりです。

``` javascript
const [Map, MapView] = await $arcgis.import([
  "@arcgis/core/Map.js",
  "@arcgis/core/views/MapView.js",
]);
const map = new Map({
  basemap: "streets-vector",
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 14,
  center: [8.5, 47.37],
});
```

以下は、**Map コンポーネントを使用して HTML で記述した同等のコード**です。これにより、一般的なユース ケースにおいて、ビューを手動で作成したり、コンテナー要素を管理したり、コアのビュー モジュールをインポートしたりする必要がなくなります。このスニペットでは、コンポーネントに対して直接属性を設定する方法を示しています。

```html
<arcgis-map zoom="14" center="15, 65" basemap="streets-vector"></arcgis-map>
```

{{< callout type="info">}}

コンポーネントへの移行により、ビューや UI の作成、配置方法は変わりますが、コアとなる ArcGIS Maps SDK for JavaScript が置き換えられるわけではありません。マップ、レイヤー、レンダラーそしてほとんどのビュー ロジックは従来と同じ方法で動作します。

{{< /callout >}}


### slot を使用した UI 要素の宣言的な配置
コンポーネント ベースのパターンでは `view.ui.add` が [**slot**](https://developers.arcgis.com/javascript/latest/building-your-ui/#slots) に置き換えられ、コンポーネントやカスタム HTML などの UI 要素をマークアップ内で宣言的に配置し、[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) の一部として管理できるようになります。レイアウトやスタイリングは標準的な HTML と CSS の挙動に従うため、SDK 固有の構造やインポートを必要とせず、より柔軟なデザインを実現できます。

```html
<arcgis-map zoom="14" center="15, 65" basemap="streets-vector">
  <arcgis-zoom slot="top-left"></arcgis-zoom>
  <arcgis-basemap-toggle slot="bottom-right" next-basemap="topo"></arcgis-basemap-toggle>
  <div id="my-custom-ui-content" slot="bottom-right"></div>
</arcgis-map>
```

このアプローチにより、UI の配置をマークアップと密接に保ち、命令的な UI コードで一般的に発生するビューのライフサイクルに関するタイミングの問題を回避できます。


### reference-element を使用してコンポーネントをマップやシーンに関連付ける
slot に加えて、reference-element 属性を使用することで、コンポーネントを DOM 内の任意の位置に配置し、マップまたはシーンに接続できます。`<arcgis-map>` または `<arcgis-scene>` 要素の `id` を渡すことで、コンポーネントの接続を維持しつつ、より柔軟なレイアウトを実現できます。

```html
<arcgis-map id="my-map" zoom="14" center="15, 65" basemap="streets-vector"></arcgis-map>
<arcgis-legend reference-element="my-map"></arcgis-legend>
```

{{< callout >}}

slot および `reference-element` を使用したコンポーネントの関連付けに関する詳細については [Programming patterns](https://developers.arcgis.com/javascript/latest/programming-patterns/#associate-components-with-a-map-or-scene-component) をご覧ください。

{{< /callout >}}


### コア API を引き続き使用するケース
コンポーネントはアプリケーションのセットアップや UI の構築を簡素化しますが、**ArcGIS Maps SDK for JavaScript のコア API の代替となるものではありません**。カスタム レイヤーのロジック、レンダラー、クエリー、複雑なビュー操作などの高度なワークフローでは、コンポーネントと並行してコア モジュールを引き続き利用できます。


### カスタム機能の実装

[Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/) コンポーネントがロードされた後に実行される機能を実装するには、HTML 要素をクエリで取得し、その要素のオブジェクトを使用してイベント リスナーを設定したり、プロパティを取得または設定したり、コンポーネントに直接メソッドを実装したりします。

以下のスニペットでは、いくつかのプロパティを設定し、ビューの準備が整うのを待ってからマップの `itemId` をコンソールに出力しています。このシンプルな例では、モジュールのインポートは不要です。

```html {filename="index.html"}
<arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca"></arcgis-map>
<script type="module" src="/main.js"></script>
```

```javascript {filename="main.js"}
// HTML 要素を取得
const viewElement = document.querySelector("arcgis-map");

// マップのプロパティを設定
viewElement.zoom = 14;
viewElement.center = [15, 65];
viewElement.basemap = "streets-vector";

// ビューの準備完了まで待機
await viewElement.viewOnReady();

// マップのアイテム ID をログに出力
console.log(viewElement.itemId);

// オプション: コア API モジュールを使用したカスタム機能の実装
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const weatherStationsLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/weather_stations_010417/FeatureServer/0",
});
viewElement.map.add(weatherStationsLayer);
```

コンポーネントは、プロパティを通じてプログラム的に構成することも、カスタム要素内で属性を使って直接設定することも可能です。プロパティの更新、イベントの監視が可能で、`viewOnReady()` のようなライフサイクル メソッドが公開されているため、アプリケーションのロジック フローを制御できます。

{{< callout >}}

コンポーネントによってアプリケーションのセットアップは簡素化されますが、ほとんどのプロジェクトでは、上記のようにカスタム動作をサポートするためのコア API を引き続き使用できます。必要に応じてビューを構成したり、追加機能を統合したりするために、`$arcgis.import()` を使ってモジュールを動的にインポートすることが可能です。

{{< /callout >}}

{{< callout >}}

詳細は[開発の手順](../../get-started/)をご覧ください。

{{< /callout >}}

