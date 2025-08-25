+++
title = "バージョン 100.x から 200.x への移行"
description = "今まで ArcGIS Runtime SDK for iOS バージョン 100.x を使用してアプリケーションを開発されていた開発者向けのガイドです。"
weight = 3
hidden = false
aliases = ["/ios/migration-ios-200.x/"]
+++

出典：ArcGIS Maps SDK for Swift - Guide - [Migrate from 100.x to 200.x](https://developers.arcgis.com/swift/reference/migrate-from-100-x-to-200-x/)

## イントロダクション
ArcGIS Maps SDK for Swift v200.x は、Swift 開発者向けに設計された次世代マッピング API を提供します。これは、ArcGIS Runtime SDK for iOS v100.x の後継であり、同じ基盤、アーキテクチャー、および機能を継承しています。API の概念の多くは変更されていませんが、SwiftUI、構造化された同時並行処理、値型、Measurement、デフォルト パラメーターなどの Swift の規則、フレームワーク、および機能に合わせて記述されています。

既存のアプリを移行するには、大幅な変更が必要です。具体的には、SwiftUI を使用してユーザー インターフェイスを再構築し、async/await を使用して非同期コードを実装する必要があります。 これらのテクノロジーをしっかりと理解することは、移行を容易にし、強固な基盤を提供するのに役立ちます。

## API 名の変更
### 型名変更
型 (クラス、プロトコル、構造体、および列挙型) は `ArcGIS` モジュールにカプセル化され、名前に AGS プレフィックスが含まれなくなりました。その結果として生じる名前の変更の例を次に示します。
| v100.x | v200.x |
| ---- | ---- |
| AGSMap | Map |
| AGSMapView | MapView |
| AGSLoadable | Loadable |
| AGSViewpoint | Viewpoint |
| AGSPoint | Point |
| AGSFeatureLayer | FeatureLayer |
| AGSArcGISFeatureTable | ArcGISFeatureTable |

[ArcGIS Maps SDK への製品名変更](https://community.esri.com/t5/a/a/ta-p/1234968)の一環として、`Runtime` という単語がタイプ名から削除されました。
| v100.x | v200.x |
| ---- | ---- |
| ArcGISRuntimeEnvironment | ArcGISEnvironment |

### メソッドおよびプロパティー名の変更

[Swift API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) に従うように、さまざまなメソッドとプロパティーが調整されています。

* メソッド引数のラベルが読みやすくなりました。

    100.x:
    ```swift
    AGSGeometryEngine.bufferGeometry(geometry, byDistance:5000)
    ```
    200.x:
    ```swift
    GeometryEngine.buffer(around:geometry, distance: 5000)
    ```

* メソッドの引数の順序が変更されました。

    100.x:
    ```swift 
    featureLayer.setFeature(feature, visible: true)
    ```
    200.x:
    ```swift
    featureLayer.setVisible(true, for:feature)
    ```

* Boolean プロパティーはアサーションとして読み取られます。

    100.x:
    ```swift
    trackingStatus.calculatingRoute
    ```
    200.x:
    ```swift
    trackingStatus.isCalculatingRoute
    ```
* ファクトリー メソッドは、make プレフィックスを使用します。

    100.x:
    ```swift
    featureTable.createFeature()
    ```
    200.x:
    ```swift
    featureTable.makeFeature()
    ```

* コレクションを含むクラスは、それらを変更するための変更メソッドを提供します。

    100.x:
    ```swift 
    graphicsOverlay.graphics.add(graphic)
    ```
    200.x:
    ```swift 
    graphicsOverlay.addGraphic(graphic)
    ```

### Swift 構造化された同時並行処理関連の変更
非同期メソッドの呼び出しで、完了を処理するためにクロージャー コールバックを渡す必要がなくなりました。 非同期メソッドを待機して、結果を直接使用するか、エラーを処理できます。

100.x:
```swift
routeTask.solveRoute(with: routeParameters) { (routeResult: AGSRouteResult?, error: Error?) in
    if let error {
        // エラー処理
    } else if let routeResult {
        // 結果の使用
    }
}
```
200.x:
```swift
do {
    let routeResult = try await routeTask.solveRoute(using: routeParameters)
    // 結果の使用
} catch {
    // エラー処理
}
```

---

ジョブを開始するために、ステータスを監視したり完了を処理したりするためにクロージャー コールバックを渡す必要がなくなりました。代わりに、ジョブを開始し、その出力を待って結果を取得し、そのメッセージを非同期的に反復してステータスを監視できます。

100.x:
```swift
let job = offlineMapTask.generateOfflineMapJob(
    with: parameters,
    downloadDirectory: downloadDirectoryURL
)
job.start(statusHandler: { status in
    print(status)
}, completion: { [weak self] (result, error) in
    guard let self = self else { return }
    if let result {
        self.offlineMapGenerationDidSucceed(with: result)
    } else if let error {
        self.offlineMapGenerationDidFail(with: error)
    }
})
```
200.x:
```swift
let job = offlineMapTask.makeGenerateOfflineMapJob(
    parameters: parameters,
    downloadDirectory: downloadDirectoryURL
)
job.start()
Task {
    for await status in job.$status {
        print(status)
    }
}
do {
    let output = try await job.output
} catch {
    self.error = error
}
```

---

イベントは、コールバック ハンドラー、デリゲート、または通知センターではなく、非同期シーケンスを通じて提供されます。

100.x:
```swift
locationDisplay.dataSourceStatusChangedHandler = { [weak self] isStarted in
    // 開始したかどうかを確認
}
```
200.x:
```swift
for await isStarted in locationDisplay.statusChanged {
    // 開始したかどうかを確認
}
```

---

具体的には、`AGSRouteTrackerDelegate` によって提供されるルート トラッカーなどのデリゲート メソッドの場合、新しい一致パターンは非同期ストリームを使用します。

100.x:
```swift
extension NavigateRouteViewController: AGSRouteTrackerDelegate {
    func routeTracker(_ routeTracker: AGSRouteTracker, didUpdate trackingStatus: AGSTrackingStatus) {
        routeRemainingGraphic.geometry = trackingStatus.routeProgress.remainingGeometry
        routeTraversedGraphic.geometry = trackingStatus.routeProgress.traversedGeometry
    }
}
```
200.x:
```swift
for try await newStatus in routeTracker.$trackingStatus {
    routeRemainingGraphic.geometry = newStatus?.routeProgress.remainingGeometry
    routeTraversedGraphic.geometry = newStatus?.routeProgress.traversedGeometry
}
```


## SwiftUI 関連の変更
### マップ ビューを作成する
SwiftUI は宣言型 UI フレームワークです。これは、`View` を作成するときに、特定の状態で何を表示するかについての説明も作成することを意味します。これは、フレームが定義されたビューを作成する UIKit の `UIView` からの変更です。SwiftUI では、ビューは親ビューの `body` に含まれています。ただし、UIKit ビューは、プログラムまたは Storyboard を使用してビュー コントローラーのルート ビューに追加されていました。次のコードは、v200.x と比較して、v100.15 でマップ ビューを作成する方法を示しています。

100.x:
```swift
@IBOutlet private var mapView: AGSMapView! {
    didSet {
        mapView.map = AGSMap(basemapStyle: .arcGISOceans)
        mapView.setViewpoint(AGSViewpoint(latitude: -117, longitude: 34, scale: 1e5))
    }
}
```
200.x:
```swift
// Geo ビューに必要なさまざまなモデル オブジェクトを格納するモデル
private class Model: ObservableObject {
    let map = Map(basemapStyle: .arcGISOceans)
}

// ビューの状態が変化したときに再作成されないように、StateObject として保持される
@StateObject private var model = Model()

// マップ ビューの現在の視点
@State private var viewpoint = Viewpoint(
    center: Point(x: -117, y: 34, spatialReference: .wgs84),
    scale: 1e5
)

var body: some View {
    MapView(
        map: model.map,
        viewpoint: viewpoint
    )
}
```

### 修飾子を表示
ビュー修飾子をビューに適用して、ビューの外観と動作をカスタマイズします。 新しい `MapView` と `SceneView` には、対応する UIKit と同じ機能を実現するためのさまざまなビュー修飾子があります。

* **Viewpoint**: ビューポイント状態変数をマップ ビューの現在のビュー ポイントで更新します。
    ```swift
    .onViewpointChanged(kind: .centerAndScale) { viewpoint = $0 }
    ```

* **DrawStatus**: マップ ビューの描画ステータスが変化したときにアクションを実行します。
 
    ```swift
    .onDrawStatusChanged {
        if $0 == .completed { print("Map view draw completed.") }
    }
    ```

* **LocationDisplay**: マップ ビューの位置情報表示をオンにして設定します。

    ```swift
    .locationDisplay(model.locationDisplay)
    ```

* **Callout**: マップ ビューでタップされたポイントの座標を含むコールアウトを表示します。
    
    `AGSGeoViewTouchDelegate` のジェスチャー デリゲート メソッドは、さまざまなビュー修飾子に置き換えられました。

    ```swift
    .onSingleTapGesture { screenPoint, mapPoint in
        if calloutPlacement == nil {
            // タップした位置にコールアウトを WGS84 で表示する
            calloutPlacement = LocationCalloutPlacement(location: mapPoint)
        } else {
            // コールアウトを非表示にする
            calloutPlacement = nil
        }
    }
    .callout(placement: $calloutPlacement.animation(.default.speed(4))) { callout in
        Text(
            CoordinateFormatter.toLatitudeLongitude(
                point: callout.location,
                format: .decimalDegrees,
                decimalPlaces: 2
            )
        )
        .font(.callout)
    }
    ```

### ジオエレメントを識別する
UIKit と SwiftUI の違いにより、Identify(識別)の操作をマップ ビューで直接実行することはできません。 v200.x では、SwiftUI の reader-proxy デザイン パターンに従い、`MapViewProxy` を導入して、Identify などの操作を実行できるようにします。

次のコードは、v100.15 での `AGSGeoView.identifyLayers` を使用した Identify と、v200.x での `MapViewProxy.identify` を使用した Identify の違いを示しています。

100.x:
```swift
// Completion ブロック
mapView.identifyLayer(
    featureLayer,
    screenPoint: screenPoint,
    tolerance: 12,
    returnPopupsOnly: false,
    maximumResults: 10
) { (results: [AGSIdentifyLayerResult]?, error: Error?) in
    if let error {
        self.presentAlert(error: error)
    } else if let results {
        self.handleIdentifyResults(results)
    }
}
```
200.x:
```swift
MapViewReader { mapViewProxy in
    MapView(map: map)
        .onSingleTapGesture { screenPoint, tapLocation in
            identifyScreenPoint = screenPoint
            identifyTapLocation = tapLocation
        }
        .task(id: identifyScreenPoint) {
            guard let screenPoint = identifyScreenPoint else { return }
            // Async/Await
            do {
                let results = try await mapViewProxy.identify(
                    on: featureLayer,
                    screenPoint: screenPoint,
                    tolerance: 12,
                    maximumResults: 10
                )
            } catch {
                self.error = error
            }
            // 以下で識別結果を処理
        }
}
```

### @State および @StateObject
SwiftUI でのビューの更新は、状態の変化によって駆動されます。 次のコードは、マップ ビューの最新の表示領域の取得方法を、v200.x と v100.15 で比較しています。

100.x:
```swift
@IBOutlet private var mapView: AGSMapView! {
    didSet {
        mapView.map = AGSMap(basemapStyle: .arcGISOceans)
    }
}

// 表示領域の取得
private var visibleArea: AGSPolygon? {
    mapView.visibleArea
}
```

200.x:
```swift 
private class Model: ObservableObject {
    let map = Map(basemapStyle: .arcGISOceans)
}

@StateObject private var model = Model()

/// 現在のマップ ビューの表示領域
/// 概観図で使用できる
@State private var visibleArea: Polygon?

var body: some View {
    MapView(map: model.map)
        .onVisibleAreaChanged { visibleArea = $0 }
}
```

## 認証
アプリで認証コードを移行する手順については、[Migrate authentication from 100.x to 200.x](https://developers.arcgis.com/swift/reference/migrate-authentication-100-x-to-200-x/) トピックを参照してください。

## スケッチ
マップ ビューでジオメトリーをインタラクティブに描画するには、`AGSSketchEditor` の代わりに `GeometryEditor` を使用します。

## その他のリソース
その他の例については、新しい[サンプル](https://developers.arcgis.com/swift/sample-code/)または[ツールキット](https://developers.arcgis.com/swift/toolkit/)を確認できます。

---

## 既知の制限事項
現バージョンでの既知の制限事項が、[ArcGIS Maps SDK for Swift: リリース ノート](https://developers.arcgis.com/swift/release-notes/) に記載されていますので、ご参照ください。