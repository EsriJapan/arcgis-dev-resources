+++
title = "バージョン 10.2.x から 100.x への移行"
description = "今まで ArcGIS Runtime SDK for Android バージョン 10.2.x を使用してアプリケーションを開発されていた開発者向けのガイドです。"
weight = 3
aliases = ["/android/migration-android-100.x/"]
+++

ArcGIS Runtime SDK バージョン 100.x は新しいアーキテクチャを使用してゼロから開発された次世代の ArcGIS Runtime です。このバージョンアップに伴い API の再設計が行なわれています。このドキュメントでは、バージョン 100.x の変更点について説明します。

ArcGIS Runtime SDK for Android に関しては、[ESRIジャパン 製品ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-Android)をご参照ください。

以下は、バージョン 100.x の主な変更点です。

* __[Gradle 参照プロジェクトの変更](#gradle-参照プロジェクトの変更)__
* __[マップ](#マップ)__
* __[ビュー](#ビュー)__
* __[レイヤー クラス名の変更](#レイヤー-クラス名の変更)__
* __[フィーチャ レイヤーの表示](#フィーチャ-レイヤーの表示)__
* __[フィーチャの操作](#フィーチャの操作)__
* __[個別属性表示](#個別属性表示)__
* __[グラフィックス オーバーレイ](#グラフィックス-オーバーレイ)__
* __[ジオメトリとジオメトリ ビルダー](#ジオメトリとジオメトリ-ビルダー)__
* __[ローダブル パターン](#ローダブル-パターン)__
* __[新しい同期パターン](#新しい同期パターン)__
* __[既知の制限事項](#既知の制限事項)__

## Gradle 参照プロジェクトの変更

Android Studio のビルド ツールは Gradle を使用し、maven リポジトリとライブラリの参照を変更します。

```
repositories {
    jcenter()
    maven {
        url 'https://esri.jfrog.io/artifactory/arcgis'
    }
}
dependencies {
    implementation 'com.esri.arcgisruntime:arcgis-android:100.10.0'
}
```

ArcGIS Runtime SDK for Android がサポートする最新の動作環境は、[ESRIジャパン 製品ページ（動作環境）](https://www.esrij.com/products/arcgis-runtime-sdk-for-Android/environments/)をご参照ください。


## マップ
100.x では、`ArcGISMap` オブジェクトを API のコアとして、ArcGIS プラットフォームの Web GIS 機能を迅速に利用できるようになりました。

`ArcGISMap` オブジェクトは 、それを表示する View と分離されています。`ArcGISMap` オブジェクトには 、操作レイヤー、ベースマップ、ブックマーク等の ArcGIS 固有のデータを設定でき、アプリケーションで利用することができます。

## ビュー
`MapView`（2D表示用）と `SceneView`（3D表示用）は、UI コンポーネントです。`MapView` クラスの `map` プロパティに、`ArcGISMap` オブジェクトを設定します。

100.x では、以下のようにマップを表示します。
```java
// ベースマップを指定してマップを初期化
ArcGISMap mArcGISMap = new ArcGISMap();
mArcGISMap.setBasemap(Basemap.createTopographic());
// マップビューにマップを設定
MapView mMapView =  findViewById(R.id.MapView);
mMapView.setMap(mArcGISMap);
```

## レイヤー クラス名の変更
各レイヤーのクラス名が以下のように変更されています。

|レイヤー|10.2.x のクラス名|100.x のクラス名|
|:--:|:--:|:--:|
|ArcGIS Server ダイナミック マップ サービス レイヤー|ArcGISDynamicMapServiceLayer|ArcGISMapImageLayer|
|タイル マップ サービス レイヤー|ArcGISTiledMapServiceLayer|ArcGISTiledLayer|
|タイル パッケージ レイヤー|ArcGISLocalTiledLayer|ArcGISTiledLayer|

100.x でサポートされているレイヤーの種類については、[ArcGIS Runtime SDK for Android: レイヤー（英語）](https://developers.arcgis.com/android/layers/)をご参照ください。

作成した各レイヤーは、以下の方法でマップに追加します。
```java
// 操作レイヤーとしてマップに追加する
mArcGISMap.getOperationalLayers().add(arcgis_map_image_layer)

// ベースマップとしてマップに追加する
Basemap mBasemap = new Basemap();
mBasemap.getBaseLayers().add(arcgis_tiled_layer);
```

## フィーチャ レイヤーの表示
フィーチャ サービスや端末のローカルに格納されたジオデータベースのデータをマップに表示するにはフィーチャ レイヤーを使用します。
フィーチャ レイヤーを表示するには、はじめにフィーチャ テーブルを作成します（フィーチャ サービスのデータをフィーチャ レイヤーで表示する場合は `ArcGISFeatureTable` オブジェクト、ジオデータベースのデータを表示する場合は `GeodatabaseFeatureTable` オブジェクトを使用します）。次に作成したフィーチャ テーブルを引数として `FeatureLayer` オブジェクトを作成し、`ArcGISMap` オブジェクトの `OperationalLayers` に追加します。

次のコードは、フィーチャ サービスのデータを `FeatureLayer` としてマップに追加する方法を示しています。

```java
// フィーチャ サービスの URL からフィーチャ テーブルを作成
ServiceFeatureTable serviceFeatureTable = new ServiceFeatureTable("https://services.arcgis.com/wlVTGRSYTzAbjjiC/arcgis/rest/services/all_Japan_shikuchoson/FeatureServer/0");
// フィーチャ テーブルからフィーチャ レイヤーを作成
FeatureLayer featureLayer = new FeatureLayer(serviceFeatureTable);
// フィーチャ レイヤーをマップの操作レイヤーに追加
mArcGISMap.getOperationalLayers().add(featureLayer);
```

## フィーチャの操作

フィーチャの検索や編集はフィーチャ テーブル （`ServiceFeatureTable` または `GeodatabaseFeatureTable`）に対して行います。

フィーチャ サービスから作成したフィーチャ テーブル（`ServiceFeatureTable`）の場合、フィーチャ テーブルのフィーチャは、マップ上にレンダリングするために必要最小限の情報だけを含むように最適化されています。これにより、フィーチャを表示するための待機時間と帯域幅の消費が削減されます。フィーチャの編集やすべての属性情報を表示するような場合は完全な情報を取得するために、[ローダブル パターン](#ローダブル-パターン)等を使用して、フィーチャを明示的にロードしておく必要があります。


#### フィーチャのリクエスト モード
フィーチャ サービスからフィーチャを取得する場合は、
リクエスト モードの設定によってフィーチャの取得頻度とや端末上でのデータのキャッシュ方法を制御します。リクエスト モードには、`ON_INTERACTION_CACHE`、 `ON_INTERACTION_NO_CACHE`、`MANUAL_CACHE ` があります。リクエスト モードはフィーチャ テーブルが初期化される前に、`ServiceFeatureTable` の `setFeatureRequestMode` メソッドを使用して設定できます。

* **ON_INTERACTION_CACHE** : ユーザーの操作によりマップの表示領域が変更されると、フィーチャが自動的にリクエストされます。リクエストされたすべてのデータはローカルにキャッシュされます。データがキャッシュされルため、既に表示された領域にマップが移動しても、再度フィーチャはリクエストされません。サーバー上のデータが変更される可能性が少ない静的なデータに適したモードです。
* **ON_INTERACTION_NO_CACHE** : ユーザーの操作によりマップの表示領域が変更されると、フィーチャが自動的にリクエストされますが、キャッシュはされません。既に表示された領域にマップが移動すると、再度フィーチャがリクエストされます。サーバー上のデータが継続的に更新される可能性がある場合に適したモードです。
* **MANUAL_CACHE** : ユーザーによるマップ操作では、フィーチャは自動的にリクエストされません。このモードを使用する場合は、`ServiceFeatureTable` の `populateFromServiceAsync` メソッドを使用して明示的にデータをリクエストする必要があります。

以下のコードは `populateFromServiceAsync` メソッドを使用して、サーバー上のすべてのフィーチャを取得する方法の例です。

```java
// フィーチャの検索パラメーターを設定
QueryParameters queryParameters = new QueryParameters();
// すべてのフィーチャを取得するように条件を設定
queryParameters.setWhereClause("1=1");
// 検索結果にフィーチャのすべての属性情報（outFields の配列に "*" を指定）を含める
ArrayList<String> outFields = new ArrayList<>();
outFields.add("*");
serviceFeatureTable.populateFromServiceAsync(queryParameters,true,outFields);
```


#### フィーチャの編集
フィーチャの編集はフィーチャ テーブルに対して行います。フィーチャ サービスまたはジオデータベースのデータから作成したフィーチャ テーブルのどちらを編集する場合も実装方法に違いはありません。

フィーチャの編集方法は、
[ArcGIS Runtime SDK for Android: フィーチャの編集（英語）](https://developers.arcgis.com/android/query-and-edit/edit/)をご参照ください。


#### フィーチャの検索
フィーチャの検索はフィーチャ テーブルに対して行います。フィーチャ サービスまたはジオデータベースのデータから作成したフィーチャ テーブルのどちらを編集する場合も実装方法に違いはありません。検索を行うには
`ServiceFeatureTable` または `GeodatabaseFeatureTable` クラスの `queryFeaturesAsync` メソッドを使用します。

次のコードは、フィーチャ サービスから作成したフィーチャ テーブルからフィーチャを検索する方法を示しています。
```java
final ListenableFuture<FeatureQueryResult> queryResult  = serviceFeatureTable.queryFeaturesAsync(queryParameters);
queryResult.addDoneListener(()->{
    // call get on the future to get the result
    try {
        FeatureQueryResult result = queryResult.get();
        for (Iterator<Feature> features = result.iterator(); features.hasNext();) {
            // 検索結果のフィーチャを取得
            Feature feature = features.next();
        ・・・
        }
    } catch (InterruptedException e) {
        e.printStackTrace();
    } catch (ExecutionException e) {
        e.printStackTrace();
    }
});
```

## 個別属性表示

マップ上で特定の場所をタップして、その位置にあるフィーチャをすべてのレイヤーから検索して取得することができます。この操作はビューに対して行います。次のコードは、`MapView` クラスの `identifyLayersAsync` メソッドを使用してフィーチャを取得する方法を示しています。
```java
final ListenableFuture<List<IdentifyLayerResult>> identifyLayersResult = mapView.identifyLayersAsync(screenPoint,10,true);
    identifyLayersResult.addDoneListener(()->{
    try {
        List<IdentifyLayerResult> identifyResult = identifyLayersResult.get();
        for(IdentifyLayerResult identifyLayerResult : identifyResult){
            // GeoElement オブジェクトの取得
            List<GeoElement> geoElement = identifyLayerResult.getElements();
                    ・・・
        }
    } catch (InterruptedException e) {
        e.printStackTrace();
    } catch (ExecutionException e) {
        e.printStackTrace();
    }
});
```

## グラフィックス オーバーレイ

グラフィックは、マップ上に一時的なデータを表示するために使用されます。`MapView` オブジェクトにはグラフィックを表示するためのグラフィックス オーバーレイ（`GraphicsOverlay`）が含まれています。
グラフィックス オーバーレイを使用することで、マップ上のレイヤーの順序が変更されても、グラフィックが常に最上位に表示されます。

次のコードは、`MapView` オブジェクトに、グラフィックス オーバーレイを使用してグラフィックを追加する方法を示しています。

```java
// ジオメトリとシンボルを設定してグラフィックを作成
Graphic graphic = new Graphic(geometry,symbol);
// グラフィックス オーバーレイに作成したグラフィックを追加
GraphicsOverlay graphicsOverlay = new GraphicsOverlay();
graphicsOverlay.getGraphics().add(graphic);
// MapView の GraphicsOverlays に作成したグラフィックス オーバーレイを追加
mapView.getGraphicsOverlays().add(graphicsOverlay);
```

## ジオメトリとジオメトリ ビルダー

`Geometry` オブジェクトのコンストラクタを使用すると、既知の座標を使用してジオメトリを作成できますが、作成後にそのジオメトリを変更することはできません。

ジオメトリ ビルダー（`GeometryBuilder`）を使用すると、ゼロから新しいジオメトリを作成したり、既存のジオメトリを基に、ジオメトリを変更することができます。


## ローダブル パターン

データを非同期でロードして状態を初期化するマップやレイヤー等のリソースは、ローダブル パターンが採用されています。各リソースのプロパティにアクセスするには、ローダブル パターンを使用して、リソースがロードされた後にアクセスすることが推奨されます。ローダブル パターンは、ロード状態の振る舞いをより均一にして且つ一貫性を持たせることで、非同期性をより明示的にします。ローダブル パターンでは、各リソースは自動的にリソースの状態をロードしません。それらは、開発者が明示的に実行したときに、遅延ロードします。
各リソースの状態は、`NotLoaded（ロードが開始していない`、`Loading（ロード中）`、`Loaded（ロードに成功）`、`FailedToLoad（ロードに失敗）` のいずれかで監視することもできます。

詳細は、[ArcGIS Runtime SDK for Android: ローダブル パターン（英語）](https://developers.arcgis.com/android/programming-patterns/loadable/)をご参照ください。

次のコードは、ローダブル パターンの基本的な使用方法の例を示しています。
```java
FeatureLayer featureLayer = new FeatureLayer(serviceFeatureTable);
if(featureLayer.getLoadStatus().equals(LoadStatus.FAILED_TO_LOAD)){
    Log.e("eTag","error");
}else{
    // フィーチャ レイヤーのロードに成功
}
```

## 新しい同期パターン
Java 言語で `ListenableFuture` というインターフェースで馴染みのある Future パターンが拡張されました。この新しい API は、メソッドの完了時に必要な数のリスナーを追加できます。

## 既知の制限事項
本バージョンでの既知の制限事項が、[ArcGIS Runtime SDK for Android: リリース ノート（英語）](https://developers.arcgis.com/android/reference/release-notes/)に記載されていますので、ご参照ください。

