+++
title = "マップ/シーン ビュー（Map/Scene View）"
weight = 13
aliases = ["/map-scene-view/"]
+++

出典：ArcGIS Experience Builder - Guide - [Map/Scene View](https://developers.arcgis.com/experience-builder/guide/core-concepts/map-scene-view/)

### マップ/シーン ビュー（Map/Scene View）

ビューの概念はArcGIS API for JavaScript と同じですが、Experience Builder では、ウィジェットやメッセージ/アクションなどを作成する際に一貫した拡張性モデルを確保するために、ビューは `JimuMapView` としてラップされます。`JimuMapView` オブジェクトを作成するには、ウィジェットは `JimuMapViewManager.createJimuMapView()` メソッドを使用します。`JimuMapView` オブジェクトは、主に以下のプロパティを持っています。

- `view`: マップ/シーン ビュー オブジェクト
- `datasourceId`: ビューを作成するデータソース (webmap/webscene)
- `mapWidgetId`: オブジェクトを作成するビュー
- `jimuLayerViews`: レイヤー ビュー オブジェクトのラッパー

マップ/シーン ビューを使用する必要があるウィジェットは、設定ページの `JimuMapViewSelector` コンポーネントを使用してマップ/シーンビューを選択することができます。これも `JimuMapViewComponent` を使用してJimuMapViewオブジェクトにアクセスします。
