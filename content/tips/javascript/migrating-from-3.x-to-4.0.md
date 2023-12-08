+++
title = "バージョン 3.x から 4.x への移行"
description = "バージョン 3.x の API で作成した既存のアプリケーションを 4.x に移行するために必要な情報を紹介します。"
weight = 3
aliases = ["/javascript/migrating-from-3.x-to-4.0/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Migrating from 3.x to 4.28](https://developers.arcgis.com/javascript/latest/migrating/)

バージョン 4.x では ArcGIS Maps SDK for JavaScript の構成要素が大きく見直され、機能拡張が行われています。バージョン 3.x で開発したアプリケーションをアップデートすることも可能ですが、アプリケーションを書き換えることを検討してください。

本トピックでは [3.x](https://developers.arcgis.com/javascript/3/) の API で作成した既存のアプリケーションを 4.x に移行するために必要な情報を解説します。API で更新された仕様はいくつかありますが、その中でも重要な項目について紹介します。  

  * __[プロパティのハンドリング](#プロパティ)__  
  * __[View の利用](#view-の利用)__
  * __[Map と Layer の仕様](#map-と-layer-の仕様)__
  * __[モジュールとパッケージの更新](#モジュールとパッケージの更新)__
  * __[Web マップのサポート](#web-マップのサポート)__
  * __[ローカライズ](#ローカライズ)__
  * __[モジュール](#モジュール)__
  * __[廃止項目](#廃止項目)__

  バージョン 4.0 では、大幅な変更が行われました。これらの変更は、開発者がどのようなアプリケーションを作成する場合でも、より効率的かつ効果的に作業できるようにするために行われました。この変更は、コンストラクタ、プロパティ、イベントの処理方法に見られます。

## プロパティ

4.0 より前のバージョンでは、getMethodName や setMethodName を呼び出すことで、一部のプロパティを get (読み込み）または set（書き込み）することができました。API では、すべてのプロパティを取得・設定するためのシンプルで一貫した方法がサポートされているため、これらのタイプのメソッドは不要になりました。

- 例えば `map.basemap = "oceans"` のようにオブジェクトに直接プロパティを設定します。
- 例えば `map.basemap.title.` のようにオブジェクトから直接プロパティを取得します。

例えば、3.x ではフィーチャーレイヤーの definitionExpression 設定は、以下のようになります。

 ```javascript
myFeatureLayer.setDefinitionExpression(expression);
```

次の行は、4.0 でフィーチャーレイヤーの definitionExpression 設定する方法を示しています。

 ```javascript
myFeatureLayer.definitionExpression = expression;
```

4.0 では、以下のように `.get()` を使用して深い階層のプロパティにアクセスすることができます。

 ```javascript
var basemapTitle = map.get("basemap.title");
```

## プロパティの変更の監視

4.0 より前のバージョンでは、プロパティの変更はイベントでハンドリングされていました。4.0 では、プロパティの変更を監視することが非常に簡単になりました。これは、`.watch(property, callback)` メソッドで処理されます。このコールバックは、プロパティが変更されるたびに呼び出され、プロパティの新しい値、古い値、名前を監視対象のオブジェクトと一緒に操作することができます。
```javascript
// ベースマップ 'streets-vector' を定義し、新しい map オブジェクトを作成
var map = new Map({
  basemap: 'streets-vector'
});

// map オブジェクトで定義したベースマップのタイトルが変更されるとコールバックが発生します。
var handle = map.watch('basemap.title', function(newValue, oldValue, property, object) {
  console.log("新しい値: ", newValue,      // プロパティの新しい値
              "<br>古い値: ", oldValue,    // プロパティの前の値（変更される前の値）
              "<br>監視しているプロパティ: ", property,  // この例では、この値は常に "basemap.title" になります。
              "<br>監視しているオブジェクト: ", object);  // この例では、この値は常に map オブジェクトになります。
});
```
## View の利用

4.0 では、[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) を 2D または 3D で表示できるようになりました。それに併い、マップの描画ロジックが変更されました。描画ロジックは、マップとレイヤーではなく、[View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) によって制御されるようになりました。

View は 4.0 で導入されたコンセプトです。View は 2 つのタイプがあります。

* __2D で表示する場合: [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)__
* __3D で表示する場合: [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html)__

View は、Map や Scene 内のデータを可視化するために使用されます。Map には実際に表示するデータやレイヤーが含まれていますが、View はそのデータの表示を行います。データの可視化（表示）方法は、2D か 3D かによって異なります。View は、`view.map` のように、Map への参照を持っています。しかし、Map は View への参照を持っていません。注意すべき点は、1 つの Map が複数の View によって消費されることがあるということです。

これを別の言い方をすると、Map は世界のベースマップや機能を表し、View はその地図を見るための窓ということになります。

以下の構文は、2D View (MapView) と 3D View (SceneView) の両方を作成し、操作する方法を示しています。

次のスニペットは、MapView を使った 2D マッピングを示しています。

 ```javascript
function (Map, MapView){
  map = new Map({
    basemap: "topo-vector"
  });
  view = new MapView({
    container: "viewDiv",
    map: map,
    scale: 2400000
  });
}
```

このスニペットは、SceneView を使った 3D マッピングです。

 ```javascript
function (Map, SceneView){
  map = new Map({
    basemap: "topo-vector"
  });
  view = new SceneView({
    container: "viewDiv",
    map: map,
    scale: 2400000
  });
}
  ```

## Map と Layer の仕様

[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) と [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) にはいくつかの重要なアップデートが行われましたが、その一部を以下にご紹介します。

- 4.0 からは、[basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap) と地図上の [operational layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) を分離しました。
- 2D または 3D の View を[回転](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#rotation)させることができるようになりました。
- グラフィック レイヤーは、マップのレイヤー コレクションの中のどこにでも追加することができます。4.0 以前では、グラフィック レイヤーは他の形式のレイヤーよりも上に追加する必要がありました。
- [GroupLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html) クラスが追加されました。

## モジュールとパッケージの更新
詳細は[3.x/4.x 機能比較表（英語）](https://developers.arcgis.com/javascript/latest/guide/functionality-matrix/index.html)を確認してください。以下に挙げた項目は、その中でも重要な更新です。

- パッケージ名の変更（例: `esri/dijit` が `esri/widgets` に変更）
- モジュール名の短縮（例: `ArcGISTiledMapServiceLayer` が `TileLayer` に変更）
- モジュール名の大文字・小文字を統一し、「Map」「Graphic」「Query」など、すべてのモジュールが大文字で始まるようになりました。
- サポート クラスは、API リファレンスをより組織化するために support フォルダに
移動しました(例: `esri/layers/support`, `esri/tasks/support`)。
- `esri/config` の構成が変更され、 `esriConfig.defaults` のプロパティは `esriConfig` に移動しました。以下は、デフォルトで使用されるジオメトリ サービスの設定方法の例です。

 ```javascript
// 3.x
esriConfig.defaults.geometryService = new GeometryService("<ジオメトリ サービスのURL>");
```

 ```javascript
// 4.x
esriConfig.geometryService = new GeometryService("<ジオメトリ サービスのURL>");
```

* `defaults.io` オブジェクトは `esriConfig.request` に移動しました。

 ```javascript
// 3.x
esriConfig.defaults.io.timeout = 30000;
```

 ```javascript
// 4.x
esriConfig.request.timeout = 30000;
```

- 3 つの `*-all` レガシー モジュールが削除されました。これは、ビルドや Website Optimizer を使用してより適切に処理されます。
- 各コンストラクタは JSON をサポートしなくなったため、代わりに、`fromJSON()` メソッド（例: `Graphic.fromJSON()` ）を使用してください。(注: ベータ3では、まだ 3.x のスタイルを使用したコンストラクタがいくつか含まれています。)
- `FeatureLayer` はグラフィックを保持しません。代わりに [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) が [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) のフィーチャを表すグラフィックを描画します。

## Web マップのサポート
バージョン 2.x の  [Web マップ](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html) を読み込むことができます。WebMap の操作は部分的にサポートされています。これは、API ですでに利用可能な機能に依存していることを意味します。例えば、まだ実装されていないレイヤータイプが含まれている場合でも WebMap を読み取ることができます。このような場合、API でサポートされているレイヤータイプのみが表示されます。WebMap の保存は、バージョン 4.14 からサポートされています。

## ローカライズ
4.x では、ロケールを "ar "や "he "に設定しても、right-to-left (RTL) は行われなくなりました。

- どのロケールでも RTL をオプトインできるようになりました。[RTL サポート](https://developers.arcgis.com/javascript/latest/localization/index.html#rtl)を参照してください。
- `<html>` または `<body>` タグで方向を指定します。[RTL サポート](https://developers.arcgis.com/javascript/latest/localization/index.html#rtl)を参照してください。

## モジュール
4.x の API は、AMD モジュールと ES モジュールとして提供されます。4.0 以前は、AMD と dojo.require のレガシー モジュールの両方を使用することができました。4.0 以降は、AMD モデルのみのサポートとなり、4.18でESモジュールが導入されました。4.xの異なるモジュールタイプの概要については、[Introduction to tooling](https://developers.arcgis.com/javascript/latest/tooling-intro/) を参照してください。
## 廃止項目
`Geocoder` ウィジェットはバージョン 3.13 で非推奨となり、4.x では提供されません。代わりに [Search](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html) ウィジェットを使用してください。
