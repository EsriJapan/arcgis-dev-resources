+++
title = "移行のヒント"
description = "マップ コンポーネントへの移行のヒントについて紹介します。"
weight = 5
aliases = ["/tips-for-migrating/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Tips for migrating](https://developers.arcgis.com/javascript/latest/migrating-to-components/)

## 移行のヒント
バージョン 4.30 で ArcGIS Maps SDK for JavaScript に Web コンポーネントが追加されました。 これらのコンポーネントは[カスタム HTML 要素](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)として構築されているため、最新のブラウザーで標準的に使用でき、フレームワークに依存しません。 SDKでは、コンポーネントは、API の定型コードの多くをカプセル化することにより、一般的なコーディングパターンを簡素化します。

アプリケーションは、カスタム HTML 要素を使って宣言的に定義できるようになり、ビューやコンテナ、モジュールのインポートなどの設定が不要になります。コンポーネントのスクリプトを読み込むだけで、要素がすぐに使用可能になります。

```HTML
<!-- ArcGIS Maps SDK for JavaScript のマップ コンポーネントおよびその他のコンポーネントのロード -->
<script
  type="module"
  src="https://js.arcgis.com/4.34/map-components/">
</script>
<body>
  <arcgis-map basemap="topo-vector" zoom="4" center="15, 65"></arcgis-map>
</body>
```

## Getting started

Web コンポーネントが初めての方、あるいはこのトピックのブラッシュアップが必要な方には、役立つさまざまなリソースがあります

- すぐにコーディングを始めたい場合は、コンポーネントの[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)や [GitHub にあるコードサンプル](https://github.com/Esri/jsapi-resources/tree/main/component-samples/README.md)を調べてみましょう。

- 属性やプロパティの扱い方、変更の監視などについては、[プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)のガイド・トピックをお読みください。

- プロパティ、メソッド、イベントを確認するには、[リファレンス](https://developers.arcgis.com/javascript/latest/references/)ページをご覧ください。

- JavaScript Maps SDK コンポーネントでアプリを構築するブログ ([Build GIS Web Apps with the JavaScript Maps SDK components](https://community.esri.com/t5/a/a/ta-p/1384758/)) をご覧ください。

- MDN [ウェブ コンポーネント](https://developer.mozilla.org/ja/docs/Web/API/Web_components) リソースページをご覧ください。


## 基本的な実装

コンポーネントを使用することで、JavaScript Maps SDK でアプリケーションを実装するたびに繰り返し必要になるコードを減らすことができます。例えば、以下は SDK の CDN からモジュールを使用してシンプルなマップを作成する JavaScript コードです。

``` JavaScript
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

以下は、Map コンポーネントを使った HTML による同等のコードです。このスニペットは、コンポーネントに直接属性を設定する方法を示しています。

```HTML
<arcgis-map zoom="14" center="8.5,47.37" basemap="streets-vector"></arcgis-map>
```

コンポーネント ベースのパターンでは、`view.ui.add` を使って UI 要素を手動で配置する必要がなくなり、[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) に直接統合されます。レイアウトやスタイリングは標準の HTML や CSS の挙動に従うため、SDK 固有の構文やインポートを必要とせず、より柔軟なデザインが可能になります。

#### カスタム機能の実装

Map コンポーネントがロードされた後に実行される機能を実装するには、HTML 要素をクエリで取得し、その要素のオブジェクトを使用してイベント リスナーを設定したり、プロパティを取得または設定したり、コンポーネントに直接メソッドを実装したりします。

以下のスニペットでは、いくつかのプロパティを設定し、ビューの準備が整うのを待ってからマップの `itemId` をコンソールに出力しています。このシンプルな例では、モジュールのインポートは不要です。

```HTML {filename="index.html"}
<arcgis-map></arcgis-map>
<script type="module" src="/main.js"></script>
```

```JavaScript {filename="main.js"}
// HTML 要素を取得
const viewElement = document.querySelector("arcgis-map");

// マップのプロパティを設定
viewElement.zoom = 14;
viewElement.center = [8.5, 47.37];
viewElement.basemap = "streets-vector";

// ビューの準備完了まで待機
await viewElement.viewOnReady();

// マップのアイテム ID をログ出力
console.log(viewElement.itemId)
```
コンポーネントは、プロパティを通じてプログラム的に構成することも、カスタム要素内で属性を使って直接設定することも可能です。プロパティの更新、イベントの監視が可能で、`viewOnReady()` のようなライフサイクル メソッドが公開されているため、アプリケーションのロジック フローを制御できます。

コンポーネントによってアプリケーションのセットアップは簡素化されますが、ほとんどのプロジェクトでは、上記のようにカスタム動作をサポートするためのコア API を引き続き使用できます。必要に応じてビューを構成したり、追加機能を統合したりするために、[$arcgis.import()](https://developers.arcgis.com/javascript/latest/4.32/#module-loading-via-cdn) を使ってモジュールを動的にインポートすることが可能です。

必要に応じて、アプリケーションは CDN とバニラの HTML / JavaScript を使って構築することも、npm を使って JavaScript のバンドラーやフレームワークでローカルに構築することも可能です。

{{< callout >}}
詳細は[開発の手順](../../get-started/)をご覧ください。
{{< /callout >}}














