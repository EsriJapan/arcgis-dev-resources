+++
title = "バージョン 10.2.x から 100.x への移行"
description = "今まで ArcGIS Runtime SDK for iOS バージョン 10.2.x を使用してアプリケーションを開発されていた開発者向けのガイドです。"
weight = 3
aliases = ["/ios/migration-ios-100.x/"]
+++

ArcGIS Runtime SDK バージョン 100.x は新しいアーキテクチャを使用してゼロから開発された次世代の ArcGIS Runtime です。このバージョンアップに伴い API の再設計が行なわれています。このドキュメントでは、バージョン 100.x の変更点について説明します。

ArcGIS Runtime SDK for iOS に関しては、[ESRIジャパン 製品ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios)をご参照ください。

以下は、バージョン 100.x の主な変更点です。

* __[マップとシーン](#マップとシーン)__
* __[ビュー](#ビュー)__
* __[レイヤー クラス名の変更](#レイヤー-クラス名の変更)__
* __[フィーチャ レイヤーの表示](#フィーチャ-レイヤーの表示)__
* __[フィーチャの操作](#フィーチャの操作)__
* __[個別属性表示](#個別属性表示)__
* __[グラフィックス オーバーレイ](#グラフィックス-オーバーレイ)__
* __[ジオメトリとジオメトリ ビルダー](#ジオメトリとジオメトリ-ビルダー)__
* __[スケッチ エディター](#スケッチ-エディター)__
* __[ローダブル パターン](#ローダブル-パターン)__
* __[ブロックを使用した非同期プログラミング](#ブロックを使用した非同期プログラミング)__
* __[既知の制限事項](#既知の制限事項)__


## マップとシーン

100.x では、`AGSMap` オブジェクト（2D表示用）と `AGSScene` オブジェクト（3D表示用）を API のコアとして、ArcGIS プラットフォームの Web GIS 機能を迅速に利用できるようになりました。

`AGSMap` オブジェクトと `AGSScene` オブジェクトは 、それらを表示する View と分離されています。`AGSMap` オブジェクトと `AGSScene` オブジェクトには 、操作レイヤー、ベースマップ、ブックマーク等の ArcGIS 固有のデータを設定でき、アプリケーションで利用することができます。


## ビュー

`AGSMapView`（2D表示用）と `AGSSceneView`（3D表示用）は、UI コンポーネントです。`AGSMapView` クラスの `map` プロパティに、`AGSMap` オブジェクトを、`AGSMapSceneView` クラスの `scene` プロパティには `AGSScene` オブジェクトを設定します。

100.x では、以下のようにマップを表示します。
```javascript
// ベースマップを指定してマップを初期化
let map = AGSMap(basemap:AGSBasemap.imagery())
// マップビューにマップを設定
self.mapView.map = map
```

## レイヤー クラス名の変更

各レイヤーのクラス名が以下のように変更されています。

|レイヤー|10.2.x のクラス名|100.x のクラス名|
|:--:|:--:|:--:|
|ArcGIS Server ダイナミック マップ サービス レイヤー|AGSDynamicMapServiceLayer|AGSArcGISMapImageLayer|
|タイル マップ サービス レイヤー|AGSTiledMapServiceLayer|AGSArcGISTiledLayer|
|タイル パッケージ レイヤー|AGSLocalTiledLayer|AGSArcGISTiledLayer|

作成した各レイヤーは、以下の方法でマップに追加します。
```javascript
// 操作レイヤーとしてマップに追加する
self.map.operationalLayers.add(arcgis_map_image_layer)

// ベースマップとしてマップに追加する
self.map.basemap = AGSBasemap(baseLayer: arcgis_tiled_layer)
```


## フィーチャ レイヤーの表示

フィーチャ サービスや端末のローカルに格納されたジオデータベースのデータをマップに表示するにはフィーチャ レイヤーを使用します。
フィーチャ レイヤーを表示するには、はじめにフィーチャ テーブルを作成します（フィーチャ サービスのデータをフィーチャ レイヤーで表示する場合は `AGSArcGISFeatureTable` オブジェクト、ジオデータベースのデータを表示する場合は `AGSGeodatabaseFeatureTable` オブジェクトを使用します）。次に作成したフィーチャ テーブルを引数として `AGSFeatureLayer` オブジェクトを作成し、`AGSMap` オブジェクトの `OperationalLayers` に追加します。

次のコードは、フィーチャ サービスのデータを `AGSFeatureLayer` としてマップに追加する方法を示しています。

```javascript
// フィーチャ サービスの URL からフィーチャ テーブルを作成
let featureTable = AGSServiceFeatureTable(url: URL(string: "https://services.arcgis.com/wlVTGRSYTzAbjjiC/arcgis/rest/services/all_Japan_shikuchoson/FeatureServer/0")!)
// フィーチャ テーブルからフィーチャ レイヤーを作成
let featureLayer = AGSFeatureLayer(featureTable: featureTable)
// フィーチャ レイヤーをマップの操作レイヤーに追加
self.map.operationalLayers.add(featureLayer)
```

## フィーチャの操作

フィーチャの検索や編集はフィーチャ テーブル （`AGSArcGISFeatureTable` または `AGSGeodatabaseFeatureTable`）に対して行います。

フィーチャ サービスから作成したフィーチャ テーブル（`AGSArcGISFeatureTable`）の場合、フィーチャ テーブルのフィーチャは、マップ上にレンダリングするために必要最小限の情報だけを含むように最適化されています。これにより、フィーチャを表示するための待機時間と帯域幅の消費が削減されます。フィーチャの編集やすべての属性情報を表示するような場合は完全な情報を取得するために、[ローダブル パターン](#ローダブル-パターン)等を使用して、フィーチャを明示的にロードしておく必要があります。


#### フィーチャのリクエスト モード
フィーチャ サービスからフィーチャを取得する場合は、
リクエスト モードの設定によってフィーチャの取得頻度とや端末上でのデータのキャッシュ方法を制御します。リクエスト モードには、`OnInteractionCache`、 `OnInteractionNoCache`、`ManualCache` があります。リクエスト モードはフィーチャ テーブルが初期化される前に、`AGSServiceFeatureTable` の `featureRequestMode` プロパティを使用して設定できます。

- `OnInteractionCache`: ユーザーの操作によりマップの表示領域が変更されると、フィーチャが自動的にリクエストされます。リクエストされたすべてのデータはローカルにキャッシュされます。データがキャッシュされルため、既に表示された領域にマップが移動しても、再度フィーチャはリクエストされません。サーバー上のデータが変更される可能性が少ない静的なデータに適したモードです。
- `OnInteractionNoCache`: ユーザーの操作によりマップの表示領域が変更されると、フィーチャが自動的にリクエストされますが、キャッシュはされません。既に表示された領域にマップが移動すると、再度フィーチャがリクエストされます。サーバー上のデータが継続的に更新される可能性がある場合に適したモードです。
- `ManualCache`: ユーザーによるマップ操作では、フィーチャは自動的にリクエストされません。このモードを使用する場合は、`AGSServiceFeatureTable` の `populateFromService` メソッドを使用して明示的にデータをリクエストする必要があります。

  以下のコードは `populateFromService` メソッドを使用して、サーバー上のすべてのフィーチャを取得する方法の例です。
  
    ```javascript
    // フィーチャの検索パラメーターを設定
    let params = AGSQueryParameters()
    // すべてのフィーチャを取得するように条件を設定
    params.whereClause = "1 = 1"
    // 検索結果にフィーチャのすべての属性情報（outFields の配列に "*" を指定）を含める
    self.featureTable.populateFromService(with: params, clearCache: true, outFields: ["*"]) {(result, error) -> Void in
        if let error = error {
            // フィーチャの取得に失敗
            print("Error:\(error.localizedDescription)")
        } else {
            　// フィーチャの取得に成功（フィーチャ数を表示）
            print(result?.featureEnumerator().allObjects.count ?? "0")
        }
    }
    ```

リクエスト モードの詳細は、
[ArcGIS Runtime SDK for iOS: フィーチャ リクエスト モード（英語）](https://developers.arcgis.com/ios/latest/swift/guide/layers.htm#ESRI_SECTION1_40F10593308A4718971C9A8F5FB9EC7D)をご参照ください。


#### フィーチャの編集
フィーチャの編集はフィーチャ テーブルに対して行います。フィーチャ サービスまたはジオデータベースのデータから作成したフィーチャ テーブルのどちらを編集する場合も実装方法に違いはありません。

フィーチャの編集方法は、
[ArcGIS Runtime SDK for iOS: フィーチャの編集（英語）](https://developers.arcgis.com/ios/latest/swift/guide/edit-features.htm)をご参照ください。

#### フィーチャの検索
フィーチャの検索はフィーチャ テーブルに対して行います。フィーチャ サービスまたはジオデータベースのデータから作成したフィーチャ テーブルのどちらを編集する場合も実装方法に違いはありません。検索を行うには
`AGSServiceFeatureTable` または `AGSGeodatabaseFeatureTable` クラスの `queryFeaturesWithParameters` メソッドを使用します。

次のコードは、フィーチャ サービスから作成したフィーチャ テーブルからフィーチャを検索する方法を示しています。
```javascript
featureTable.queryFeatures(with: queryParameters, queryFeatureFields: .loadAll, completion:{ (result, error) -> Void in
           if let error = error {   
               print("Error:\(error.localizedDescription)")
           } else {
               let enumr = result?.featureEnumerator()
               for feature in enumr! {
                   // 検索結果のフィーチャを取得
                   let feature = feature as! AGSArcGISFeature
               }
           }
       })
```

## 個別属性表示

マップ上で特定の場所をタップして、その位置にあるフィーチャをすべてのレイヤーから検索して取得することができます。この操作はビューに対して行います。次のコードは、`AGSMapView` クラスの `identifyLayers` メソッドを使用してフィーチャを取得する方法を示しています。
```javascript
self.mapView.identifyLayers(atScreenPoint: screenPoint, tolerance: 10, returnPopupsOnly: true, completion: { (results, error)  -> Void in
    if let error = error {
        print(error)
    } else {
        for identifyLayerResult in results! {
            for geoElement in identifyLayerResult.geoElements {
                // AGSGeoElement オブジェクトの取得
            }
        }
    }
})
```

## グラフィックス オーバーレイ

グラフィックは、マップ上に一時的なデータを表示するために使用されます。`AGSMapView` と `AGSSceneView` オブジェクトにはグラフィックを表示するためのグラフィックス オーバーレイ（`AGSGraphicsOverlay`）が含まれています。
グラフィックス オーバーレイを使用することで、マップ上のレイヤーの順序が変更されても、グラフィックが常に最上位に表示されます。詳細は、[ArcGIS Runtime SDK for iOS: グラフィックス オーバーレイの追加（英語）](https://developers.arcgis.com/ios/latest/swift/guide/add-graphics-overlays-to-your-app.htm)をご参照ください。

次のコードは、`AGSMapView` オブジェクトに、グラフィックス オーバーレイを使用してグラフィックを追加する方法を示しています。

```javascript
// ジオメトリとシンボルを設定してグラフィックを作成
let pointGraphic = AGSGraphic(geometry: pointGeometry, symbol: poitnSymbol, attributes: nil)
// グラフィックス オーバーレイに作成したグラフィックを追加
let graphicsOverlay = AGSGraphicsOverlay()
graphicsOverlay.graphics.add(pointGraphic)
// AGSMapView の GraphicsOverlays に作成したグラフィックス オーバーレイを追加
self.mapView.graphicsOverlays.add(graphicsOverlay)
```

## ジオメトリとジオメトリ ビルダー

`AGSGeometry` オブジェクトのコンストラクタを使用すると、既知の座標を使用してジオメトリを作成できますが、作成後にそのジオメトリを変更することはできません。

ジオメトリ ビルダー（`AGSGeometryBuilder`）を使用すると、ゼロから新しいジオメトリを作成したり、既存のジオメトリを基に、ジオメトリを変更することができます。詳細は、[ArcGIS Runtime SDK for iOS: ジオメトリの編集（英語）](https://developers.arcgis.com/ios/latest/swift/guide/edit-geometries.htm)をご参照ください 。

## スケッチ エディター
スケッチ エディター（`AGSSketchEditor`）を使用すると、ユーザーがマップ上で対話的にジオメトリをスケッチすることができます。

次のコードは、`AGSSketchEditor` の使用方法の例を示しています。

```javascript
// マップ ビューにスケッチ エディターを設定
self.sketchEditor = AGSSketchEditor()
self.mapView.sketchEditor = self.sketchEditor
// ジオメトリの種類を設定してスケッチを開始
self.sketchEditor.start(with: AGSGeometryType.polygon)
// スケッチ中のジオメトリの更新を監視
NotificationCenter.default.addObserver(self, selector: #selector(ViewController.respondToGeometryChanged), name: NSNotification.Name.AGSSketchEditorGeometryDidChange, object: nil)

・・・・・・

@objc func respondToGeometryChanged() {
  // ジオメトリが更新された際の処理
}
```

## ローダブル パターン

データを非同期でロードして状態を初期化するマップやレイヤー等のリソースは、ローダブル パターンが採用されています。各リソースのプロパティにアクセスするには、ローダブル パターンを使用して、リソースがロードされた後にアクセスすることが推奨されます。ローダブル パターンは、ロード状態の振る舞いをより均一にして且つ一貫性を持たせることで、非同期性をより明示的にします。ローダブル パターンでは、各リソースは自動的にリソースの状態をロードしません。それらは、開発者が明示的に実行したときに、遅延ロードします。
各リソースの状態は、`NotLoaded（ロードが開始していない`、`Loading（ロード中）`、`Loaded（ロードに成功）`、`FailedToLoad（ロードに失敗）` のいずれかで監視することもできます。

詳細は、[ArcGIS Runtime SDK for iOS: ローダブル パターン（英語）](https://developers.arcgis.com/ios/latest/swift/guide/loadable-pattern.htm)をご参照ください。

次のコードは、ローダブル パターンの基本的な使用方法の例を示しています。
```javascript
self.featureLayer.load(completion: {(error) -> Void in
    if let error = error {
        print(error)
    }else {
        // フィーチャ レイヤーのロードに成功
    }
})
```

## ブロックを使用した非同期プログラミング

非同期操作を実行するメソッドは、完了ブロックを引数として受け取ります。ブロックは操作が正常に完了したとき、または、エラーが発生したときに呼び出されます。操作が成功すると、その操作の結果がブロックに渡されます。それ以外の場合はエラーが渡されます。
これは、デリゲートを使用して各非同期操作の結果とエラーをハンドリングしていた 10.2.x のプログラミング方法を置き換えます。

次のコードは、例として端末の GPS の位置情報の取得開始の操作結果をハンドリングする方法を示しています。
```javascript
self.mapView.locationDisplay.start(completion: { (error) -> Void in
  if let error = error {
    // GPS の位置情報の取得に失敗
    print("Error:\(error.localizedDescription)")
  } else {
    // GPS の位置情報の取得に成功
  }
})
```
## 既知の制限事項
現バージョンでの既知の制限事項が、[ArcGIS Runtime SDK for iOS: リリース ノート（英語）](https://developers.arcgis.com/ios/latest/swift/guide/release-notes.htm#ESRI_SECTION1_23003AC7E43242AB890BC5AC91D42A3F)に記載されていますので、ご参照ください。

## 関連リンク
* [ArcGIS Runtime SDK for iOS: バージョン 100.x への移行（英語）](https://developers.arcgis.com/ios/latest/swift/guide/migrate-to-100-0.htm)
* [ArcGIS Runtime SDK for iOS: リリース ノート（英語）](https://developers.arcgis.com/ios/latest/swift/guide/release-notes.htm)
