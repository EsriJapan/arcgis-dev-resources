+++
title = "バージョン 100.x から 200.x への移行"
description = "今まで ArcGIS Runtime SDK for Android バージョン 100.x を使用してアプリケーションを開発されていた開発者向けのガイドです。"
weight = 3
hidden = false
aliases = ["/android/migration-android-200.x/"]
+++

出典：ArcGIS Maps SDK for Kotlin - Guide - [Migrate from 100.x to 200.x](https://developers.arcgis.com/kotlin/reference/migrate-from-100-x-to-200-x/)

ArcGIS Runtime SDK バージョン 100.15 は、不具合修正とマイナー アップデートのみに焦点を当てた長期サポート リリースです。ArcGIS Maps SDKs for Native Apps バージョン 200.x は、100.15 の実績あるアーキテクチャをベースに、最新の開発者フレームワークのイノベーションを活用するように設計されています。このトピックでは、変更された API の領域について概説し、200.x アプリ用に 100.x コードをリファクタリングするための手順を説明します。

200.0 リリースでは、Android 向けの新しい Kotlin ベースの API「ArcGIS Maps SDK for Kotlin」が導入されました。

このリリースは、ArcGIS Runtime SDK for Android を Kotlin ファーストの SDK として完全に再構築したもので、コルーチン、フロー、null 安全などの機能をすぐにサポートすることができます。Java ベースの ArcGIS Runtime SDK for Android は、長期サポート（LTS）となり、不具合修正は継続されますが、それ以上の機能アップデートはありません。

新機能を利用するには、Java ベースの ArcGIS Runtime SDK for Android を置き換える ArcGIS Maps SDK for Kotlin に移行してください。詳細については、ブログ「[ArcGIS Runtime SDK の今後のバージョンアップの計画についてのお知らせ](https://community.esri.com/t5/a/a/ta-p/1174047)」をご確認ください。

## Jetpack Compose のサポート
ArcGIS Maps SDK for Kotlin 200.2 以降では、Jetpack Compose を完全にサポートしています。このページのコード スニペットは、ほかのコンポーザブルとともに、ArcGIS Maps SDK for Kotlin Toolkit で定義されているコンポーザブル関数 [MapView](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) の使用を紹介しています。詳細については [Toolkit](https://developers.arcgis.com/kotlin/toolkit/) を参照してください。

Jetpack Compose を使用しない場合は、代わりに XML レイアウトと [MapView](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) および [SceneView](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping.view/-scene-view/index.html) クラスを使用し続けることができます。

## LifeCycleObserver
GeoView クラスは MapView や SceneView のベースクラスで、[DefaultLifecycleObserver](https://developer.android.com/reference/android/arch/lifecycle/DefaultLifecycleObserver) を実装しています。したがって、onResume、onPause、onDestroy のようなライフサイクルイベントを GeoView に転送することは、もはや必要ではありません。

{{< tabs items="ArcGIS Maps SDK for Kotlin v200.x,ArcGIS Runtime API for Android v100.x" >}}

    {{< tab >}}
    ```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    // API キーを設定する
    ArcGISEnvironment.apiKey = ApiKey.create(BuildConfig.API_KEY)
    // アクティビティにデータバインディングを設定する
    val activityMainBinding: ActivityMainBinding =
        DataBindingUtil.setContentView(this, R.layout.activity_main)
    mapView = activityMainBinding.mapView
    // アクティビティのライフサイクルに MapView を追加する
    lifecycle.addObserver(mapView)
}
```
    {{< /tab >}}
    {{< tab >}}
    ```kotlin {filename = "ArcGIS Runtime API for Android v100.x"}
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    val activityMainBinding = ActivityMainBinding.inflate(layoutInflater)
    setContentView(activityMainBinding.root)
    // API キーを設定する
    ArcGISRuntimeEnvironment.setApiKey(BuildConfig.API_KEY)
    // MapView と値のビューバインディング
    mapView =  activityMainBinding.mapView

}

override fun onPause() {
    mapView.pause()
    super.onPause()
}

override fun onResume() {
    super.onResume()
    mapView.resume()
}

override fun onDestroy() {
    mapView.dispose()
    super.onDestroy()
}
```
    {{< /tab >}}

{{< /tabs >}}




## コルーチンとコルーチンのスコープ
Kotlin のサスペンド関数は、より安全で、非同期操作のエラーが発生しにくくなっています。すべてのサスペンド関数は [`Result`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) を返すため、try/catch ブロックは不要になりました。さらに、ライフサイクルを認識するコルーチン スコープを使用してコルーチンを起動できます。これは、ライフサイクルが破棄されると自動的にキャンセルされます。
{{< tabs items="ArcGIS Maps SDK for Kotlin v200.x,ArcGIS Runtime API for Android v100.x" >}}

    {{< tab >}}
```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
lifecyleScope.launch {
    // サスペンド関数を実行してジオデータベースを取得する
    val geodatabaseResult = Geodatabase.create(filePath)
    // サスペンドが完了したら結果を取得する
    geodatabaseResult.onSuccess { geodatabase ->
        // サスペンド関数を実行してジオデータベース フィーチャテーブルを作成する
        val featureTableResult = geodatabase.createTable(tableDescription)
        // サスペンドが完了したら結果を取得する
        featureTableResult.onSuccess { geodatabaseFeatureTable ->
            setupMapFromGeodatabase(geodatabaseFeatureTable)
        }.onFailure { throwable ->
            showMessage(throwable.message)
        }
    }.onFailure { throwable ->
        showMessage(throwable.message)
    }
}
```
{{< /tab >}}
{{< tab >}}

```kotlin {filename = "ArcGIS Runtime API for Android v100.x"}
val geodatabaseFuture = Geodatabase.createAsync(filePath)
// ジオデータベースを非同期で作成する
geodatabaseFuture.addDoneListener {
    try {
        // モバイル ジオデータベースのインスタンスを取得する
        val geodatabase = geodatabaseFuture.get()
        // テーブルの説明を使用してテーブルを作成する
        val featureTableFuture = geodatabase.createTableAsync(tableDescription)
        featureTableFuture.addDoneListener {
            try {
                // 作成されたフィーチャテーブルを取得する
                val featureTable = featureTableFuture.get()
                setupMapFromGeodatabase(featureTable)
            } catch (e: Exception) {
                showMessage(e.message)
            }
        }
    } catch (e: Exception) {
        showMessage(e.message)
    }
}
```
{{< /tab >}}
{{< /tabs >}}

## イベント処理
すべてのイベントが [`SharedFlow`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-shared-flow/) を使用して表現されるようになったため、コールバックは不要になりました。

{{< tabs items="ArcGIS Maps SDK for Kotlin v200.x,ArcGIS Runtime API for Android v100.x" >}}

    {{< tab >}}
```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
val simulatedLocationDataSource = SimulatedLocationDataSource(polyline)
simulatedLocationDataSource.start()
simulatedLocationDataSource.locationChanged.collect { location ->
    val locationPoint = location.position
}
```
{{< /tab >}}
{{< tab >}}
```kotlin {filename = "ArcGIS Runtime API for Android v100.x"}
val simulatedLocationDataSource = SimulatedLocationDataSource().apply {
    setLocations(polyline)
}
simulatedLocationDataSource.startAsync()
simulatedLocationDataSource.addLocationChangedListener { locationChangedEvent ->
    val locationPoint = locationChangedEvent.location.position
}
```
{{< /tab >}}
{{< /tabs >}}

## ローダブル
ローダブルの状態 ([`LoadStatus`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-load-status/index.html)) は [`StateFlow`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/) を使用して表されますが、[`load()`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-loadable/load.html) はロード処理完了の [`Result<Unit>`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) を返すサスペンド関数です。ロード エラーは、失敗した場合に [`Result`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-result/) から取得できます。

{{< tabs items="ArcGIS Maps SDK for Kotlin v200.x,ArcGIS Runtime API for Android v100.x" >}}

    {{< tab >}}
```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
private suspend fun loadPortalItem() {
    val portalItem = PortalItem(Portal("https://www.arcgis.com"), itemID)
    portalItem.load().onSuccess {
        val featureLayer = FeatureLayer(portalItem)
        setFeatureLayer(featureLayer, viewpoint)
    }.onFailure { throwable ->
        showError(throwable.message)
    }
}
```
{{< /tab >}}

{{< tab >}}
```kotlin {filename = "ArcGIS Runtime API for Android v100.x"}
private fun loadPortalItem() {
    val portal = Portal("https://www.arcgis.com", false)
    val portalItem = PortalItem(portal, itemID)
    portalItem.addDoneLoadingListener {
        if(portalItem.loadStatus == LoadStatus.LOADED){
            val featureLayer = FeatureLayer(portalItem)
            setFeatureLayer(featureLayer)
        }else if(portalItem.loadStatus == LoadStatus.FAILED_TO_LOAD){
            showError(portalItem.loadError.message)
        }
    }
    portalItem.loadAsync()
}
```
{{< /tab >}}
{{< /tabs >}}

[`Loadable.loadStatus`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-loadable/load-status.html) プロパティが現在 [`StateFlow`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-state-flow/) であるため、[`LoadStatus`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-load-status/index.html) の更新を非同期で監視する方法があります。この方法では、途中の [`LoadStatus`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-load-status/index.html) の値も取得できます。

```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
lifecycleScope.launch {
   portalItem.load()
}
lifecycleScope.launch {
    portalItem.loadStatus.collect { loadStatus ->
        when (loadStatus) {
            LoadStatus.Loaded -> {
                val featureLayer = FeatureLayer(portalItem)
                setFeatureLayer(featureLayer)
            }
            is LoadStatus.FailedToLoad -> {
                showError("Error loading portal item: ${loadStatus.error.message}")
            }
            LoadStatus.Loading -> { ... }
            LoadStatus.NotLoaded -> { ... }
        }
    }
}
```

## タスクとジョブ
ArcGIS Maps SDK for Kotlin では、[ジョブ](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.tasks/-job/index.html) またはタスクのワークフローが大幅に変更されました。ジョブは、進行状況または完了の流れを制御する [`CoroutineScope`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope.html) で実行する必要があります。コルーチン フローを使用して複数のジョブとタスクを実行できるため、ネストされたコールバックの操作を回避できます。

{{< tabs items="ArcGIS Maps SDK for Kotlin v200.x,ArcGIS Runtime API for Android v100.x" >}}

    {{< tab >}}
```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
// 新しいオフライン マップ タスクを作成する
val offlineMapTask = OfflineMapTask(mapView.map)
// タスクのパラメーターを設定する
val generateOfflineMapParameters = GenerateOfflineMapParameters(
    geometry, minScale, maxScale
)
// オフライン マップ パラメーターを使用してジョブを作成する
val offlineMapJob = offlineMapTask.generateOfflineMap(
    generateOfflineMapParameters,
    offlineMapPath
)
// ジョブを開始する
offlineMapJob.start()
with (lifecycleScope) {
    // ジョブの進捗を取得する
    launch {
        offlineMapJob.progress.collect {
            val progressPercentage = offlineMapJob.progress.value
        }
    }
    // ジョブが成功した場合にマップを表示する
    launch {
        offlineMapJob.result().onSuccess { offlineMapResult ->
            mapView.map = offlineMapResult.offlineMap
        }.onFailure { throwable ->
            showMessage(throwable.message.toString())
        }
    }
}
```
{{< /tab >}}

{{< tab >}}
```kotlin {filename = "ArcGIS Runtime API for Android v100.x"}
// 新しいオフライン マップ タスクを作成する
val offlineMapTask = OfflineMapTask(mapView.map)
// タスクのパラメーターを設定する
val generateOfflineMapParameters = GenerateOfflineMapParameters(
    geometry, minScale, maxScale
)
// オフライン マップ パラメーターを使用してジョブを作成する
val offlineMapJob = offlineMapTask.generateOfflineMap(
    generateOfflineMapParameters,
    offlineMapPath
)
// ジョブを開始する
offlineMapJob.start()
// ジョブの進捗を取得する
offlineMapJob.addProgressChangedListener {
    val progress = offlineMapJob.progress
}
// ジョブが成功した場合にマップを表示する
offlineMapJob.addJobDoneListener {
    if (offlineMapJob.status == Job.Status.SUCCEEDED) {
        mapView.map = offlineMapJob.result.offlineMap
    } else if (offlineMapJob.status == Job.Status.FAILED) {
        showMessage(offlineMapJob.error.message)
    }
}
```
{{< /tab >}}
{{< /tabs >}}

{{< callout type = "info">}}

ArcGIS Maps SDK for Kotlin バージョン 200.x のコードで示されている `map` 変数は、[`MapView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) コンポーザブルに渡すものと同じ変数です。

```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
MapView(
    modifier = Modifier.fillMaxSize(),
    arcGISMap = map
)
```
{{< /callout >}}


## ジオメトリーとジオメトリー ビルダー
読みやすさと使いやすさを向上させるために、ジオメトリーとジオメトリー ビルダーの使用法にいくつかの変更があります。

* [`PolylineBuilder`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-polyline-builder/index.html) や [`PolygonBuilder`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-polygon-builder/index.html) などのジオメトリー ビルダーは、レシーバー タイプとしてビルダーを使用して関数パラメーターを受け取るようになり、Kotlin の慣用的な方法でビルダーにジオメトリーを追加できるようになりました。

* [`MutablePart.createWithSegments()`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-mutable-part/-companion/create-with-segments.html) を使用して、セグメントでパーツを作成できます。

* 可変および不変のジオメトリー コレクション タイプの名前は、Kotlin のイディオムに合わせて調整されています。以下は、ArcGIS Runtime API for Android に類似した ArcGIS Maps SDK for Kotlin で定義されているジオメトリー タイプのリストです。

| ArcGIS Maps SDK for Kotlin 200.x | ArcGIS Runtime API for Android v100.x |
|--------|--------|
| [`MutablePart`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-mutable-part/index.html)  | Part  |
| [`Part`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-part/index.html)  | ImmutablePart  |
| [`MutablePartCollection`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-mutable-part-collection/index.html)  | PartCollection  |
| [`PartCollection`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-part-collection/index.html)  | ImmutablePartCollection  |

* points プロパティにアクセスすることにより、[`Part`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-part/index.html) および [`MutablePart`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-mutable-part/index.html) をポイントのコレクションとして表示できます。

* [`GeometryEngine`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.geometry/-geometry-engine/index.html) メソッドはジェネリックであり、より優れたタイプ セーフを提供するため、以下に示すように同一のジオメトリーが返されます。

ArcGIS Maps SDK for Kotlin v200.x
```kotlin
fun <T : Geometry> project(geometry: T, outputSpatialReference: SpatialReference, datumTransformation: DatumTransformation?): T
fun <T : Geometry> project(geometry: T, spatialReference: SpatialReference): T
fun <T : Geometry> simplify(geometry: T): T
fun <T : Geometry> setM(geometry: T, m: Double?): T
fun <T : Geometry> setZ(geometry: T, z: Double?): T
fun <T : Geometry> setZAndM(geometry: T, z: Double?, m: Double?): T
```

{{< tabs items="ArcGIS Maps SDK for Kotlin v200.x,ArcGIS Runtime API for Android v100.x" >}}

    {{< tab >}}

```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
// ポリライン ジオメトリーを作成する
val polylineGeometry = PolylineBuilder(spatialReference) {
    addPoint(-10e5, 40e5)
    addPoint(20e5, 50e5)
}.toGeometry()

// セグメントを使用してパーツ ジオメトリーを作成する
val partGeometry = MutablePart.createWithSegments(
    segments = listOf(leftCurve, leftArc, rightArc, rightCurve),
    spatialReference = spatialReference
)
val polygon = Polygon(listOf(partGeometry))
```
{{< /tab >}}

{{< tab >}}
```kotlin {filename = "ArcGIS Runtime API for Android v100.x"}
// ポリライン ジオメトリーを作成する
val polylineGeometry = PolylineBuilder(spatialReference).apply {
    addPoint(-10e5, 40e5)
    addPoint(20e5, 50e5)
}.toGeometry()

// セグメントを使用してパーツ ジオメトリーを作成する
val partGeometry = Part(spatialReference).apply {
    addAll(listOf(leftCurve,leftArc,rightArc,rightCurve))
}
val polyon = Polygon(partGeometry, spatialReference)
```
{{< /tab >}}
{{< /tabs >}}

## ジェスチャー
[`MapView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) と [`SceneView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-scene-view.html) には、`DefaultMapViewOnTouchListener` をオーバーライドする代わりに、ジェスチャー イベントがあります。 イベントは [`SharedFlow`](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/-shared-flow/) として表され、コルーチンで取得できます。

{{< tabs items="ArcGIS Maps SDK for Kotlin v200.x,ArcGIS Runtime API for Android v100.x" >}}

    {{< tab >}}
```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
MapView(
    modifier = Modifier.fillMaxSize(),
    arcGISMap = map,
    onSingleTapConfirmed = { singleTapConfirmedEvent ->
        val mapPoint = singleTapConfirmedEvent.mapPoint
        val screenCoordinate = singleTapConfirmedEvent.screenCoordinate
        // . . .
    }
)
```
{{< /tab >}}
{{< tab >}}

```kotlin {filename = "ArcGIS Runtime API for Android v100.x"}
mapView.onTouchListener = object : DefaultMapViewOnTouchListener(applicationContext, mapView) {
      override fun onSingleTapConfirmed(motionEvent: MotionEvent): Boolean {
          val screenPoint = android.graphics.Point(
              motionEvent.x.roundToInt(),
              motionEvent.y.roundToInt()
          )
          val mapPoint = mapView.screenToLocation(screenPoint)
          return super.onSingleTapConfirmed(motionEvent)
      }
  }
```
{{< /tab >}}
{{< /tabs >}}

## 認証
ArcGIS Maps SDK for Kotlin には、セキュリティで保護された ArcGIS サービスを操作するための異なるアプローチがあります。SDK は、ArcGIS 認証情報を作成し、特定の保護されたリソースの読み込みとは関係なくトークンを生成するための一連の非同期 API を提供します。認証チャレンジの処理中に作成された資格情報は保存され、後続のリクエストの送信中に再利用されます。

```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
ArcGISEnvironment.authenticationManager.arcGISAuthenticationChallengeHandler =
    ArcGISAuthenticationChallengeHandler { challenge ->
        val result: Result<TokenCredential> = TokenCredential.create(
            challenge.requestUrl, "username", "password", tokenExpirationInterval
        )
        val credential = result.getOrElse { throwable ->
            Log.e("TokenCredential Creation", "Failed")
            return@ArcGISAuthenticationChallengeHandler ArcGISAuthenticationChallengeResponse
                .ContinueAndFailWithError(throwable)
        }
        Log.d("TokenCredential Creation", "Succeeded")
        return@ArcGISAuthenticationChallengeHandler ArcGISAuthenticationChallengeResponse
            .ContinueWithCredential(credential)
    }

lifecycleScope.launch {
    // authenticationManager は認証を処理して PortalItem を取得します
    val portal = Portal(portalURL, Portal.Connection.Authenticated)
    val portalItem = PortalItem(portal, itemID)
    val map = ArcGISMap(portalItem)
    mapView.map = map
    map.loadStatus.collect { loadStatus ->
        when (loadStatus) {
            LoadStatus.NotLoaded -> { ... }
            LoadStatus.Loading ->
                Log.e("LoadStatus", "About to load map")
            LoadStatus.Loaded ->
                Log.e("LoadStatus", "Map loaded successfully")
            is LoadStatus.FailedToLoad ->
                Log.e("LoadStatus", loadStatus.error.message.toString())
        }
    }
}
```

Output
```kotlin
LoadStatus: About to load map
TokenCredential Creation: Succeeded
LoadStatus: Map loaded successfully
```
アプリで認証コードを移行する手順については、[Migrate authentication from 100.x to 200.x](https://developers.arcgis.com/kotlin/reference/migrate-authentication-100-x-to-200-x/) トピックを参照してください。

## カスタム Location DataSource
ArcGIS Maps SDK for Kotlin には、ユーザー定義のロケーション データ プロバイダーによって駆動できる [`CustomLocationDataSource`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.location/-custom-location-data-source/index.html) が導入されています。これは、カスタム ソースからのロケーション データがあり、そのデータを [`LocationDataSource`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.location/-location-data-source/index.html) の形式にして、API の他の部分と連携できるようにする場合に役立ちます。

```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
{
  // ... MapView を設定する

  // カスタム ロケーション エミッタを作成する
  val customLocationProvider = { SingleLocationEmitter() }
  // ロケーション プロバイダーをデータソースに追加する
  val customLocationDataSource = CustomLocationDataSource(customLocationProvider)
  lifecycleScope.launch {
      customLocationDataSource.start().onSuccess {
          // カスタム ロケーション データソースが正常に開始される
      }.onFailure { throwable ->
          // ロケーション データソースの開始エラー
      }
      customLocationDataSource.locationChanged.collect {
          // ロケーションの変更を取得する
      }
  }
  // データソースを MapView に追加する
  mapView.locationDisplay.dataSource = customLocationDataSource
}

// ... 外部クラスで、カスタム ロケーション プロバイダーを作成する
class SingleLocationEmitter() : CustomLocationDataSource.LocationProvider {
    override val locations: Flow<Location> = flow {
        emit(
            Location(
                Clock.System.now(),
                point,
                horizontalAccurary,
                verticalAccuracy,
                speed,
                course,
                lastKnown
            )
        )
    }
    override val headings: Flow<Double> = flow {
        emit(0.0)
    }
}
```

カスタムの位置情報データ ソースはロケーション ディスプレイの [`dataSource`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping.view/-location-display/data-source.html) プロパティに割り当てられます。ロケーション ディスプレイを作成し、それを [`MapView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) コンポーザブルに渡す方法の一例は以下のとおりです。


```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
import com.arcgismaps.toolkit.geoviewcompose.rememberLocationDisplay

val locationDisplay = rememberLocationDisplay {
    dataSource = createCustomLocationDataSource()
}

MapView(
    modifier = Modifier.fillMaxSize(),
    arcGISMap = map,
    locationDisplay = locationDisplay
)
```

## ApplicationContext の要件
ArcGIS Runtime SDK for Android から ArcGIS Maps SDK for Kotlin へのアップデートでは、API のいくつかの部分で [`ArcGISEnvironment.applicationContext`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-arc-g-i-s-environment/application-context.html) プロパティを設定することが必要です。[`LocationDataSource`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.location/-location-data-source/index.html)、[`CustomLocationDataSource`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.location/-custom-location-data-source/index.html)、[`SystemLocationDataSource`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.location/-system-location-data-source/index.html)、[`IndoorsLocationDataSource`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.location/-indoors-location-data-source/index.html)、[`RouteTask`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.tasks.networkanalysis/-route-task/index.html)、[`ServiceAreaTask`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.tasks.networkanalysis/-service-area-task/index.html)、[`ClosestFacilityTask`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.tasks.networkanalysis/-closest-facility-task/index.html) または [`AuthenticationManager`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.httpcore.authentication/-authentication-manager/index.html) でコンテキストが必要です。このプロパティは、以下のようにアクティビティーの開始時に設定することができます。

```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x"}
ArcGISEnvironment.applicationContext = this.applicationContext
```

## ライブラリー固有のデータ型
[`Color`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-color/index.html): このアップデートにより、`android.graphics.color` が `com.arcgismaps.Color` に置き換えられます。この Color ライブラリーには、すぐに使用できるデフォルトのカラーが付属しており、カスタム RGB カラーを作成したり、アプリのリソースの色を使用したりできます。

```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x - Color"}
import com.arcgismaps.Color

var accentColor = Color.green
// var accentColor = Color.fromRgba(r = 0, g = 255, b = 0, a = 255)
// var accentColor = 0xFF00FF00.toInt()
// val accentColor = Color(colorResource(id = R.color.colorAccent).toArgb())

val selectionProperties = remember {
    SelectionProperties().apply {
        color = accentColor
    }
}

MapView(
    modifier = Modifier.fillMaxSize(),
    arcGISMap = map,
    selectionProperties = selectionProperties
)
```

ArcGIS Maps GUID: ArcGIS Maps SDK for Kotlin は独自のデータ型 [`GUID`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-guid/index.html) を導入します。これは、128 ビットのグローバルに一意の識別子を表し、ArcGIS サービスおよびジオデータベースからの GlobalID および GUID フィールドを表します。


```kotlin {filename = "ArcGIS Maps SDK for Kotlin v200.x - Guid"}
val utilityElement = utilityNetwork.createElementOrNull(
    assetType = utilityAssetType,
    globalId = Guid("<Unique-Identifier-Here>"),
    terminal = utilityTerminal
)
```

## 既知の制限事項
現バージョンでの既知の制限事項が、[ArcGIS Maps SDK for Kotlin: リリース ノート](https://developers.arcgis.com/kotlin/release-notes/) に記載されていますので、ご参照ください。