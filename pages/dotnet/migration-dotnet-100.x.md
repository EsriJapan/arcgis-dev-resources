
ArcGIS Runtime SDK バージョン 100.x は新しいアーキテクチャを使用してゼロから開発された次世代の ArcGIS Runtime です。このバージョンアップに伴い API の再設計が行なわれています。このドキュメントでは、バージョン 100.x の変更点について説明します。

ArcGIS Runtime SDK for .NET に関しては、[ESRIジャパン 製品ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/)をご参照ください。

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
* __[ローカルサーバー](#ローカルサーバー)__
* __[既知の制限事項](#既知の制限事項)__

## マップとシーン
100.x では、`Map` オブジェクト（2D表示用）と `Scene` オブジェクト（3D表示用）<sup>※1</sup> を API のコアとして、ArcGIS プラットフォームの Web GIS 機能を迅速に利用できるようになりました。

`Map` オブジェクトと `Scene` オブジェクトは 、それらを表示する View と分離されています。`Map` オブジェクトと `Scene` オブジェクトには 、操作レイヤー、ベースマップ、ブックマーク等の ArcGIS 固有のデータを設定でき、アプリケーションで利用することができます。

<sup>※1</sup> バージョン100.0 では、モバイル環境において 3D 関連の機能はベータ機能として提供されています。

## ビュー
`MapView`（2D表示用）と `SceneView`（3D表示用）は、UI コンポーネントです。`MapView` クラスの `map` プロパティに、`Map` オブジェクトを、`MapSceneView` クラスの `scene` プロパティには `Scene` オブジェクトを設定します。

100.x では、以下のようにマップを表示します。
```javascript
// ベースマップを指定してマップを初期化
Map myMap = Map(Basemap.CreateImagery());
// マップビューにマップを設定
MyMapView.Map = myMap;
```

## レイヤー クラス名の変更
各レイヤーのクラス名が以下のように変更されています。

|レイヤー|10.2.x のクラス名|100.x のクラス名|
|:--:|:--:|:--:|
|ArcGIS Server ダイナミック マップ サービス レイヤー|ArcGISDynamicMapServiceLayer|ArcGISMapImageLayer|
|タイル マップ サービス レイヤー|ArcGISTiledMapServiceLayer|ArcGISTiledLayer|
|タイル パッケージ レイヤー|ArcGISLocalTiledLayer|ArcGISTiledLayer|

現バージョンの 100.2 では、10.2.x で提供されていた、以下のレイヤーがサポートされていませんので、ご注意ください。

* KML サービス レイヤー（`KMLLayer`）

100.x でサポートされているレイヤーのタイプについては、[ArcGIS for Developers: レイヤー（英語）](https://developers.arcgis.com/net/latest/wpf/guide/layers.htm)をご参照ください。

作成した各レイヤーは、以下の方法でマップに追加します。
```javascript
// 操作レイヤーとしてマップに追加する
myMap.OperationalLayers.Add(arcgis_map_image_layer)
// ベースマップとしてマップに追加する
myMap.Basemap.BaseLayers.Add(arcgis_tiled_layer);
```

## フィーチャ レイヤーの表示
フィーチャ サービスや端末のローカルに格納されたジオデータベースのデータをマップに表示するにはフィーチャ レイヤーを使用します。
フィーチャ レイヤーを表示するには、はじめにフィーチャ テーブルを作成します（フィーチャ サービスのデータをフィーチャ レイヤーとして表示するに場合は `ServiceFeatureTable ` オブジェクト、ジオデータベースのデータ表示する場合は `GeodatabaseFeatureTable ` オブジェクトを使用します）。次に作成したフィーチャ テーブルを引数として `FeatureLayer` オブジェクトを作成し、`Map` オブジェクトの `OperationalLayers` に追加します。

次のコードは、フィーチャ サービスのデータを `FeatureLayer` として追加する方法を示しています。

```javascript
// フィーチャ サービスの URL からフィーチャ テーブルを作成
ServiceFeatureTable featureTable = new ServiceFeatureTable(new Uri("https://services.arcgis.com/wlVTGRSYTzAbjjiC/arcgis/rest/services/all_Japan_shikuchoson/FeatureServer/0"));
// フィーチャ テーブルからフィーチャ レイヤーを作成
FeatureLayer featureLayer = FeatureLayer(featureTable)
// フィーチャ レイヤーをマップの操作レイヤーに追加
myMap.OperationalLayers.Add(featureLayer);
```

## フィーチャの操作
フィーチャの検索や編集はフィーチャ テーブル （`ServiceFeatureTable` または `GeodatabaseFeatureTable`）に対して行います。

フィーチャ サービスから作成したフィーチャ テーブル（`ServiceFeatureTable`）の場合、フィーチャ テーブルのフィーチャは、マップ上にレンダリングするために必要最小限の情報だけを含むように最適化されています。これにより、フィーチャを表示するための待機時間と帯域幅の消費が削減されます。フィーチャの編集やすべての属性情報を表示するような場合は完全な情報を取得するために、[ローダブル パターン](#ローダブル-パターン)等を使用して、フィーチャを明示的にロードしておく必要があります。


#### フィーチャのリクエスト モード
フィーチャ サービスからフィーチャを取得する場合は、
リクエスト モードの設定によってフィーチャの取得頻度とや端末上でのデータのキャッシュ方法を制御します。リクエスト モードには、`OnInteractionCache`、 `OnInteractionNoCache`、`ManualCache` があります。リクエスト モードはフィーチャ テーブルが初期化される前に、`ServiceFeatureTable` の `FeatureRequestMode` プロパティを使用して設定できます。

* `OnInteractionCache`: ユーザーの操作によりマップの表示領域が変更されると、フィーチャが自動的にリクエストされます。リクエストされたすべてのデータはローカルにキャッシュされます。キャッシュされたデータは、既に表示された領域にマップが移動しても、再度リクエストされません。サーバー上のデータが変更される可能性が少ない静的なデータに適したモードです。
* `OnInteractionNoCache`: ユーザーの操作によりマップの表示領域が変更されると、フィーチャが自動的にリクエストされますが、キャッシュはされません。既に表示された領域にマップが移動すると、再度リクエストされます。サーバー上のデータが継続的に更新される可能性がある場合に適したモードです。
* `ManualCache`: ユーザーによるマップ操作では、フィーチャは自動的にリクエストされません。このモードを使用する場合は、`ServiceFeatureTable` の `PopulateFromServiceAsync` メソッドを使用して明示的にデータをリクエストする必要があります。

  以下のコードは `PopulateFromServiceAsync` メソッドを使用して、サーバー上のすべてのフィーチャを取得する方法の例です。

```javascript
// フィーチャの取得（検索）時のパラメーターを設定
QueryParameters queryParameters = new QueryParameters();
// すべてのフィーチャを取得するように条件を設定
queryParameters.WhereClause = "1 = 1";
// 検索結果にフィーチャのすべての属性情報（outFields の配列に "*" を指定）を含める
var outputFields = new string[] { "*" };
// クエリの条件に基づいてフィーチャ テーブルにデータを設定する
await _featureTable.PopulateFromServiceAsync(queryParameters, true, outputFields);
```

リクエスト モードの詳細は、
[ArcGIS for Developers: フィーチャ リクエスト モード（英語）](https://developers.arcgis.com/net/latest/wpf/guide/layers.htm#GUID-925AD533-12E7-4E93-AB88-3F9577906818)をご参照ください。

#### フィーチャの編集
フィーチャの編集はフィーチャ テーブルに対して行います。フィーチャ サービスまたはジオデータベースのデータから作成したフィーチャ テーブルのどちらを編集する場合も実装方法に違いはありません。

フィーチャの編集方法は、
[ArcGIS for Developers: フィーチャの編集（英語）](https://developers.arcgis.com/net/latest/wpf/guide/edit-features.htm)をご参照ください。

#### フィーチャの検索
フィーチャの検索はフィーチャ テーブルに対して行います。フィーチャ サービスまたはジオデータベースのデータから作成したフィーチャ テーブルのどちらを編集する場合も実装方法に違いはありません。検索を行うには
`ServiceFeatureTable` または `GeodatabaseFeatureTable` クラスの `QueryFeaturesAsync` メソッドを使用します。

次のコードは、フィーチャ テーブルからフィーチャを検索する方法を示しています。
```javascript
try
{
    // フィーチャの取得（検索）時のパラメーターを設定
    QueryParameters queryParams = new QueryParameters();
    // 検索条件を設定
    queryParams.WhereClause = "upper(KEN_NAME) LIKE '%" + (kenName.ToUpper()) + "%'";
    // フィーチャ テーブルから検索条件を取得 
    FeatureQueryResult queryResult = await _featureTable.QueryFeaturesAsync(queryParams);
    // 結果に問い合わせるためにリストを取得
    var features = queryResult.ToList();
    if (features.Any())
    {
        // 結果から1件のフィーチャを取得
        Feature feature = features[0];
    }
    else
    {
        MessageBox.Show("KEN Not Found!", "Add a valid ken name.");
    }
}
catch (Exception ex)
{
    MessageBox.Show("Sample error", "An error occurred" + ex.ToString());
}
```

## 個別属性表示
マップ上で特定の場所をタップして、その位置にあるフィーチャをすべてのレイヤーから検索して取得することができます。その操作はビューに対して行います。次のコードは、`MapView` クラスの `IdentifyLayerResult` メソッドを使用してフィーチャを取得する方法を示しています。
```javascript
// MapViewのすべてのレイヤーを識別し、タップポイント、許容値、リターンタイプ、最大結果を渡します
IReadOnlyList<IdentifyLayerResult> idLayerResults = await MyMapView.IdentifyLayersAsync(tapScreenPoint, pixelTolerance, returnPopupsOnly, maxLayerResults);
foreach (IdentifyLayerResult idResults in idLayerResults)
{
    // get the layer identified and cast it to FeatureLayer
    FeatureLayer idLayer = idResults.LayerContent as FeatureLayer;
    // iterate each identified GeoElement in the results for this layer
    foreach (GeoElement idElement in idResults.GeoElements)
    {
        // cast the result GeoElement to Feature
        Feature idFeature = idElement as Feature;
        // select this feature in the feature layer
        idLayer.SelectFeature(idFeature);
    }
}
```

## グラフィックス オーバーレイ
グラフィックは、マップ上に一時的なデータを表示するために使用されます。`MapView` と `SceneView` オブジェクトにはグラフィックを表示するためのグラフィックス オーバーレイ（`GraphicsOverlay`）が含まれています。
グラフィックス オーバーレイを使用することで、マップ上のレイヤーの順序が変更されても、グラフィックが常に最上位に表示されます。詳細は、[ArcGIS for Developers: グラフィックス オーバーレイの追加（英語）](https://developers.arcgis.com/net/latest/wpf/guide/add-graphics-overlays-to-your-app.htm)を参照してください。

次のコードは、`MapView` オブジェクトに、グラフィックス オーバーレイを使用してグラフィックを追加する方法を示しています。

```javascript
// ジオメトリとシンボルを使用してグラフィックを作成
var pointGraphic = new Graphic(pointGeometry, poitnSymbol);
// グラフィックス オーバーレイに作成したグラフィックを追加
GraphicsOverlay graphicsOverlay = new GraphicsOverlay();
graphicsOverlay.Graphics.add(pointGraphic)
// MapView の GraphicsOverlays に作成したグラフィックス オーバーレイを追加
MyMapView.GraphicsOverlays.Add(graphicsOverlay);
```

## ジオメトリとジオメトリ ビルダー
`Geometry` オブジェクトのコンストラクタを使用すると、既知の座標を使用してジオメトリを作成できますが、作成後にそのジオメトリを変更することはできません。

ジオメトリ ビルダー（`GeometryBuilder`）を使用すると、ゼロから新しいジオメトリを作成したり、既存のジオメトリを基に、ジオメトリを変更することができます。詳細は、[ArcGIS for Developers: ジオメトリの編集（英語）](https://developers.arcgis.com/net/latest/wpf/guide/edit-geometries.htm)を参照してください 。

## スケッチ エディター
スケッチ エディター（`SketchEditor`）を使用すると、ユーザーがマップ上で対話的にジオメトリをスケッチすることができます。

次のコードは、`SketchEditor` の使用方法の例を示しています。

```javascript
// 頂点の編集、サイズ変更、移動ができるようにスケッチエディタの設定を行います
var config = MyMapView.SketchEditor.EditConfiguration;
config.AllowVertexEditing = true;
config.ResizeMode = SketchResizeMode.Uniform;
config.AllowMove = true;
// スケッチエディタをページのデータコンテキストとして設定する
this.DataContext = MyMapView.SketchEditor;
   ・・・・・・
try
{
   // ジオメトリの種類を設定してスケッチを開始
   geometry = await MyMapView.SketchEditor.StartAsync(creationMode, true);
   ・・・・・・
   // ジオメトリが更新された際の処理
}
catch (TaskCanceledException)
{
   // Ignore ... let the user cancel drawing
}
catch (Exception ex)
{
    // Report exceptions
}
```

## ローダブル パターン
データを非同期的にロードして状態を初期化するマップやレイヤー等のリソースは、ローダブル パターンを採用しています。各リソースのプロパティにアクセスするときは、ローダブル パターンを使用して、リソースがロードされた後にアクセスすることが推奨されます。ローダブル パターンは、ロード状態の振る舞いをより均一にして且つ一貫性を持たせることで、非同期性をより明示的にします。ローダブル パターンでは、各リソースは自動的にリソースの状態をロードしません。それらは、開発者が明示的に実行したときに、遅延ロードします。
ローダブル パターンを採用しているリソースの状態は、`NotLoaded（ロードが開始していない`、`Loading（ロード中）`、`Loaded（ロードに成功）`、`FailedToLoad（ロードに失敗）` のいずれかで監視することができ、ロードに失敗した場合はロードを再試行することができます。

詳細は、[ArcGIS for Developers: ローダブル パターン（英語）](https://developers.arcgis.com/net/latest/wpf/guide/loadable-pattern.htm)を参照してください。

次のコードは、ローダブル パターンの使用方法の例を示しています。
```javascript
// ローダブル時のイベント
featureLayer.Loaded += (s, e) =>
{
    // フィーチャ レイヤーのプロパティにアクセス
    Debug.Assert(censusLayer.MinScale == 5000);
    Debug.Assert(censusLayer.MaxScale == 1000000);
};

// フィーチャ レイヤーのロード
await featureLayer.LoadAsync();
```

## ローカルサーバー
ローカルサーバーの機能は使用することができますが、使用する場合は別途インストールが必要となります。
詳細は、[ArcGIS for Developers: ローカルサーバー（英語）](https://developers.arcgis.com/net/latest/wpf/guide/local-server.htm)を参照してください。

今回のリリースでは、Standard、Advanced、Analysis の各レベルにおいてローカルサーバーでサポートされている追加のツールも導入され、データ管理、分析、および Runtime コンテンツのパッケージ化のための新しいワークフローが追加されました。

サポートされているツールの一覧は、[ArcGIS for Developers: ローカルサーバージオプロセシングツール サポート（英語）](https://developers.arcgis.com/net/latest/wpf/guide/local-server-geoprocessing-tools-support.htm) を参照してください。

## 既知の制限事項
現バージョン 100.1 での既知の制限事項が、[ArcGIS Runtime SDK for .NET: リリース ノート（英語）](https://developers.arcgis.com/net/latest/wpf/guide/release-notes.htm#ESRI_SECTION1_910A9F432FAB47A78ACD89F608748DD1)に記載されていますので、ご参照ください。

## 関連リンク
* [ArcGIS for Developers: リリース ノート（英語）](https://developers.arcgis.com/net/latest/wpf/guide/release-notes.htm)
