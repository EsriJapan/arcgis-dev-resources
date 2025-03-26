+++
title = "マップ/シーン ビュー（Map/Scene View）"
weight = 13
aliases = ["/map-scene-view/"]
+++

出典：ArcGIS Experience Builder - Guide - [Map/Scene View](https://developers.arcgis.com/experience-builder/guide/core-concepts/map-scene-view/)

### マップ/シーン ビュー（Map/Scene View）

ビューの概念は ArcGIS Maps SDK for JavaScript と同じですが、Experience Builder では、ウィジェットやメッセージ/アクションなどを作成する際に一貫した拡張性モデルを確保するために、ビューは `JimuMapView` としてラップされます。`JimuMapView` オブジェクトを作成するには、ウィジェットは `JimuMapViewManager.createJimuMapView()` メソッドを使用します。`JimuMapView` オブジェクトは、主に以下のプロパティを持っています。

- `view`: マップ/シーン ビュー オブジェクト
- `datasourceId`: ビューを作成するデータソース (webmap/webscene)
- `mapWidgetId`: オブジェクトを作成するビュー
- `jimuLayerViews`: レイヤー ビュー オブジェクトのラッパー

Experience Builder では、マップ ウィジェットが `JimuMapView` オブジェクトを作成します。ウィジェットが `JimuMapView` オブジェクトを使用する必要がある場合、設定ページの `MapWidgetSelector` コンポーネントを使用して マップ ウィジェットを選択することができます。マップ ウィジェットの ID を取得した後、ウィジェットは `JimuMapViewComponent` を使って、作成された `JimuMapView` オブジェクトを取得することができます。`JimuMapView` オブジェクトを選択するには、設定ページの `JimuMapViewSelector` コンポーネントを利用します。
