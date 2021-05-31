+++
title = "バージョン 3.x から 4.x への移行"
description = "バージョン 3.x の API で作成した既存のアプリケーションを 4.x に移行するために必要な情報を紹介します。"
weight = 4
aliases = ["/javascript/migrating-from-3.x-to-4.0/"]
+++

出典：ArcGIS API for JavaScript - [Migrating from 3.x to 4.19](https://developers.arcgis.com/javascript/latest/migrating/)

バージョン 4.x では ArcGIS API for JavaScript の構成要素が大きく見直され、機能拡張が行われています。バージョン 3.x で開発したアプリケーションをアップデートすることも可能ですが、アプリケーションを書き換えることを検討してください。

本トピックでは 3.x の API で作成した既存のアプリケーションを 4.x に移行するために必要な情報を解説します。API で更新された仕様はいくつかありますが、その中でも重要な項目について紹介します。  

  * __[プロパティのハンドリング](#プロパティのハンドリング)__  
  * __[View の利用](#view-の利用)__
  * __[Map と Layer の仕様](#map-と-layer-の仕様)__
  * __[モジュールとパッケージの更新](#モジュールとパッケージの更新)__
  * __[Web マップのサポート](#web-マップのサポート)__
  * __[ローカライズ](#ローカライズ)__
  * __[AMD の利用](#amd-の利用)__
  * __[廃止項目](#廃止項目)__

## プロパティのハンドリング

3.x ではいくつかのプロパティは、読み取り/書き込み用のクラス固有のメソッド名を呼び出すことで、値を get（読み取り）または set（書き込み）することができました。4.x ではメソッドの呼び出しが刷新され、シンプルで一貫した方法で全てのプロパティの読み取り、書き込みをサポートします。

* __オブジェクトに直接値を書き込む方法__

 ```javascript
// ベースマップのタイプを設定
map.basemap = 'oceans';
```
* __オブジェクトから直接値を読み取る方法__

 ```javascript
// ベースマップのタイトルを取得
var title = map.basemap.title;
```

例えば、3.x でフィーチャ レイヤーのフィルター定義式（definitionExpression）を設定するには、以下のように記述していました。

 ```javascript
myFeatureLayer.setDefinitionExpression(expression);
```
4.x では、以下の様に記述します。

 ```javascript
myFeatureLayer.definitionExpression = expression;
```

4.x では、以下に記述したように `.get()` または `.set()` を使用して、深い階層のプロパティにアクセスすることも可能です。

 ```javascript
var basemapTitle = map.get("basemap.title");
```

## プロパティの変更の監視

3.x ではプロパティの変更はイベントでハンドリングされていましたが、4.x ではプロパティの変更の監視を簡単に行うことができます。プロパティの変更は、`.watch(property, callback)` メソッドを通してハンドリングされます。`property` に変更があると `callback` が呼び出されます。そして、監視しているオブジェクトのプロパティの新しい値、古い値、名前を取得することができます。
```javascript
// ベースマップ 'street' を定義し、新しい map オブジェクトを作成
var map = new Map({
  basemap: 'streets'
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

4.x では、[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) は 2D または 3D で表示することができます。それに併せ、マップの描画ロジックも修正され、マップとレイヤーの描画は [View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) によって制御されるようになります。

View は 4.x で導入されたコンセプトです。View は 2 つのタイプのうちのどちらか1つを使用します。

* __2D で表示する場合: [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)__
* __3D で表示する場合: [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html)__

View は 2D または 3D のデータを可視化するのに使用します。Map は実際のデータまたはデータを表示するためのレイヤーを含み、View はそれらのデータの表示を処理します。どのように、データを表示するかは、2D または 3D のどちらを使用するかによって異なります。View から Map を参照（例: `view.map`）できますが、Map から View を参照することはできません。重要なのは1つの Map が複数の View を利用することができる点です。

下記の構文は、作成した Map を 2D（MapView）と 3D（SceneView）で表示する方法を示しています。

* __2D（MapView）で表示する方法__

 ```javascript
function (Map, MapView){
  map = new Map({
    basemap: "topo"
  });
  view = new MapView({
    container: "viewDiv",
    map: map,
    scale: 2400000
  });
}
```

* __3D（SceneView）で表示する方法__

 ```javascript
  function (Map, SceneView){
    map = new Map({
      basemap: "topo"
    });
    view = new SceneView({
      container: "viewDiv",
      map: map,
      scale: 2400000
    });
  ```

## Map と Layer の仕様
[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) と [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) には以下に挙げた重要な更新があります。

  * Map の [layers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers) に [basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap) は含まれません
  * 2D と 3D の両方でマップの[回転](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#rotation)が可能になりました
  * グラフィック レイヤーは、マップのレイヤー コレクションの中のどこにでも追加することができます（3.x ではグラフィック レイヤーは他の形式のレイヤーよりも上に追加する必要がありました）
  * [GroupLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html) クラスが追加されました

## モジュールとパッケージの更新
詳細は[3.x/4.x 機能比較表（英語）](https://developers.arcgis.com/javascript/latest/guide/functionality-matrix/index.html)を確認してください。以下に挙げた項目は、その中でも重要な更新です。

* パッケージ名の変更（例: `esri/dijit` が `esri/widgets` に変更）
* モジュール名の短縮（例: `ArcGISTiledMapServiceLayer` が `TileLayer` に変更）
* モジュール名の統一（全てのモジュール名は大文字から始まります）
* サポート クラスは、API リファレンスをより組織化するために support フォルダに
移動しました(例: `esri/layers/support`, `esri/tasks/support`)。
* `esri/config` の構成が変更され、 `esriConfig.defaults` のプロパティは `esriConfig` に移動しました。以下は、デフォルトで使用されるジオメトリ サービスの設定方法の例です。

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
esriConfig.defaults.io.alwaysUseProxy = true;
```

 ```javascript
// 4.x
esriConfig.request.alwaysUseProxy = true;
```

* 3 つの `*-all` レガシー モジュール（`Editor-all`, `AttributeInspector-all`, `TemplatePicker-all`）は削除されました。
* 各コンストラクタは JSON をサポートしません。代わりに、`fromJSON()` メソッド（例: `Graphic.fromJSON()` ）を使用してください。
* `FeatureLayer` はグラフィックを保持しません。代わりに [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) が [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) のフィーチャを表すグラフィックを描画します。

## Web マップのサポート
4.x 以降でも、アプリケーションで [Web マップ](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html) を表示することができます。Web マップ との連携は部分的にサポートされています。これは、Web マップとの連携が API の現在のバージョンで利用可能な機能に依存するためです。例えば、まだ API で実装されていないタイプのレイヤー（WFS レイヤーなど）が含まれている場合でも、Web マップを表示することができます。API でサポートされているタイプのレイヤーのみを表示することができます。また、Web マップの保存はバージョン 4.14 からサポートされています。

## ローカライズ
4.x では、ロケールを "ar "や "he "に設定しても、right-to-left (RTL) は行われなくなりました。

- どのロケールでも RTL をオプトインできるようになりました。[RTL サポート](https://developers.arcgis.com/javascript/latest/localization/index.html#rtl)を参照してください。
- `<html>` または `<body>` タグで方向を指定します。[RTL サポート](https://developers.arcgis.com/javascript/latest/localization/index.html#rtl)を参照してください。

## AMD の利用
3.x では AMD とレガシー モジュールの両方を利用できましたが、4.x からは、レガシー モジュールが廃止され、 AMD モジュールのみを利用できます。

## 廃止項目
`Geocoder` ウィジェットはバージョン 3.13 で非推奨となり、4.x では提供されません。代わりに [Search](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html) ウィジェットを使用してください。
