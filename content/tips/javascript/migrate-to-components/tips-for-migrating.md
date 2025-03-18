+++
title = "移行のヒント"
description = "マップ コンポーネントへの移行のヒントについて紹介します。"
weight = 101
aliases = ["/tips-for-migrating/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Tips for migrating](https://developers.arcgis.com/javascript/latest/migrating-to-components/)

## 移行のヒント
バージョン 4.30 で ArcGIS Maps SDK for JavaScript に Web コンポーネントが追加されました。 これらのコンポーネントは[カスタム HTML 要素](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)として構築されているため、最新のブラウザーで標準的に使用でき、フレームワークに依存しません。 SDKでは、コンポーネントは、API の定型コードの多くをカプセル化することにより、一般的なコーディングパターンを簡素化します。

## Getting started

Web コンポーネントが初めての方、あるいはこのトピックのブラッシュアップが必要な方には、役立つさまざまなリソースがあります

- すぐにコーディングを始めたい場合は、コンポーネントの[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)や [GitHub にあるコードサンプル](https://github.com/Esri/jsapi-resources/tree/main/component-samples/README.md)を調べてみましょう。

- 属性やプロパティの扱い方、変更の監視などについては、[プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)のガイド・トピックをお読みください。

- プロパティ、メソッド、イベントを確認するには、[リファレンス](https://developers.arcgis.com/javascript/latest/references/)ページをご覧ください。

- JavaScript Maps SDK コンポーネントでアプリを構築するブログ ([Build GIS Web Apps with the JavaScript Maps SDK components](https://community.esri.com/t5/a/a/ta-p/1384758/)) をご覧ください。

- MDN [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) リソースページをご覧ください。


## 基本的な実装

コンポーネントを使用することで、JavaScript Maps SDK でアプリケーションを実装するたびに繰り返し必要になるコードを減らすことができます。 例えば、SDK の AMD モジュールを使用したシンプルなマップの JavaScript コードを以下に示します。

``` JavaScript
require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
  const map = new Map({
    basemap: "streets-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 14,
    center: [8.5, 47.37]
  });
});
```

以下は、Map コンポーネントを使った HTML での同等のコードです。 このスニペットは、コンポーネントに直接属性を設定することを示しています

```HTML
<arcgis-map zoom="14" center="8.5,47.37" basemap="streets-vector"></arcgis-map>
```

#### カスタム機能の実装

Map コンポーネントがロードされた後に実行される機能を実装するには、HTML 要素をクエリし、その要素のオブジェクトを使用してイベント リスナーを設定したり、プロパティを取得または設定したり、コンポーネントに直接メソッドを実装したりします。

以下は、ビューの準備ができたことを検知し、いくつかのプロパティを設定し、コンソールにマップのズームレベルを書き込むスニペットです。 この単純な例では、require() ステートメント (AMD) や import モジュール (ESM) を実装する必要はありません。

```HTML
<arcgis-map></arcgis-map>
<script type="module" src="/main.js"></script>
```

```JavaScript
// Query for the HTML element
const map = document.querySelector("arcgis-map");

// Set map properties programmatically
map.zoom = 14;
map.center = [8.5, 47.37];
map.basemap = "streets-vector";

// Listen for the map's view to be ready
map.addEventListener("arcgisViewReadyChange", (event) => {
  // Get or set map properties
  console.log(`Zoom level is ${map.zoom}`);
});
```

















