+++
title = "iOS"
description = "ArcGIS Maps SDK for Swift を用いたモバイル地図アプリの作成方法を紹介します。"
Weight=8
aliases = ["/create-startup-app-ios/"]
+++

出典：ArcGIS Maps SDK for Swift - Tutorials - [Display a map](https://developers.arcgis.com/swift/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for Swift を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-ios100.0/display_map_jp.png" width="300px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで1つ以上のデータレイヤーを追加できます。マップビューを使用し、場所とズームレベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベースマップレイヤーを使用して、富士山付近を表示する地図を作成します。

{{% notice note %}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{% /notice %}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/swift/reference/system-requirements/)を満たしていることを確認します。


## ステップ

### 新しい Xcode プロジェクトを作成する
Xcode を使用してシングルビュー iOS アプリを作成し、SDK を参照するように構成します。

1. Xcode を開き、メニュー バーから [File] > [New] > [Project] > [iOS] > [App] > [Next] をクリックします。

   * [Choose options for your new project] ウィンドウで、次の値を設定します。
     * Product Name: display_a_map
     * Language: Swift
     * Interface: SwiftUI
     * Organization Identifier: <任意の組織>
   * 他のすべてのオプションのチェックを外します。
   * [Next] をクリックします。
   * プロジェクトを保存する場所を選択して、[Create] をクリックします。

2. Project Navigator で、display_a_mapApp.swift をクリックします。Editor で、display_a_mapApp struct を右クリックします。 [Refactor]、[Rename...] の順に選択して、構造体の名前を MainApp に変更します。 右上の [Rename] ボタンをクリックして、新しい名前を確認します。 これにより、影響を受けるすべての領域の構造体(struct)とファイルの名前が変更されます。

3. [Swift Package Manager](../../../tips/ios/install-ios-200.x/#swift-package-manager) を使用して API への参照を追加します。



### アクセストークンを取得する
ArcGIS Online でホストされているサービス、Web マップ、Web シーンにアクセスできるようにするには、アクセストークンが必要です。
まだ作成していない場合は、[ArcGIS Location Platform のダッシュボード](https://location.arcgis.com/dashboard/) に移動して、API キーを取得します。作成方法は「[API キーの取得](../../get-api-key/)」をご覧ください。
このチュートリアルでは、ロケーションサービスのベースマップの権限が有効になっている API キーが必要です。

### API キーを設定する
1. Project Navigator で MainApp.swift をクリックします。
2. エディターで、API を参照するインポートステートメントを追加します。

    MainApp.swift
    ```swift
    import SwiftUI
    
    // 追加開始
    import ArcGIS
    // 追加終了
    ```

3. DisplayAMap 構造体にイニシャライザを実装します。アクセストークンを使用して、[ArcGISEnvironment](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/arcgisenvironment/) の [ArcGISEnvironment.apiKey](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/arcgisenvironment/apikey/) プロパティを設定します。

    MainApp.swift
    ```swift
    import SwiftUI

    import ArcGIS

    @main
    struct MainApp: App {

        // 追加開始
        init() {
            ArcGISEnvironment.apiKey = APIKey("<#アクセストークンを入力#>")
        }
        // 追加終了

        var body: some Scene {
            WindowGroup {
                ContentView()
            }
        }

    }
  
    ```
    
    {{% notice note %}}

    アクセストークンは、このチュートリアルの便宜上、コードに直接格納されていますが、ソース コードにアクセストークンを格納することは、ベスト プラクティスではありません。

    {{% /notice %}}
    
### マップの追加
地形ベースマップレイヤーを含むマップを作成します。 マップは、富士山付近が中心になります。

1. Project Navigator で、ContentView.swift をクリックします。
2. Editor で、API を参照する import ステートメントを追加します。

    ContentView.swift
    ```swift
    import SwiftUI

    // 追加開始
    import ArcGIS
    // 追加終了
    ```

3. デフォルト値を持つ [Map](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/map/) タイプの map という名前の @State プロパティ ラッパーを追加します。 arcGISTopographic ベースマップ スタイルで Map を作成し、それを返します。

    ContentView.swift
    ```swift
    struct ContentView: View {

        // 追加開始
        @State private var map = {
            //ベースマップのラベルを日本語で表示します。
            let bsp = BasemapStyleParameters(language: BasemapStyleLanguage.specific(Locale.Language(identifier: "ja")))
 
            let map = Map(basemap:Basemap(style:.arcGISTopographic,parameters: bsp))
        
            return map
        }()
        // 追加終了

    }
    ```

    [Map](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/map/) や [Scene](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/scene/) のような [GeoModel](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/geomodel/) は、作成にコストがかかり、状態を保持する可能性があります。GeoModel やその他のモデル オブジェクトが必要に応じてのみ作成されるようにするには、上記のコードのように、@State または @StateObject プロパティ ラッパーを適用することができます。詳しくは、[Managing model data in your app](https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app) をご覧ください。

4. マップの initialViewpoint プロパティを、富士山付近の座標を持つ [Viewpoint](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/viewpoint/) で設定します。

    ContentView.swift
    ```swift
    struct ContentView: View {

        @State private var map = {
            //ベースマップのラベルを日本語で表示します。
            let bsp = BasemapStyleParameters(language:BasemapStyleLanguage.specific(Locale(languageCode: "ja")))
            let map = Map(basemap:Basemap(style:.arcGISTopographic,parameters: bsp))

            // 追加開始
            map.initialViewpoint = Viewpoint(latitude: 35.360626, longitude: 138.727363, scale: 200000)
            // 追加終了

            return map
        }()

    }
    ```

### マップ ビューの追加
マップ ビューは、マップを表示する UI コンポーネントです。 また、タッチ ジェスチャを使用したナビゲーションなど、マップとのユーザー インタラクションも処理します。Xcode と SwiftUI を使用してマップ ビューを追加します。

1. body で、前の手順で作成したマップを使用して [MapView](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/mapview/) を作成します。

    ContentView.swift
    ```swift
    struct ContentView: View {

        @State private var map = {
            //ベースマップのラベルを日本語で表示します。
            let bsp = BasemapStyleParameters(language:BasemapStyleLanguage.specific(Locale(languageCode: "ja")))
            let map = Map(basemap:Basemap(style:.arcGISTopographic,parameters: bsp))

            map.initialViewpoint = Viewpoint(latitude: 35.360626, longitude: 138.727363, scale: 200000)

            return map
        }()

        var body: some View {

            // 追加開始
            MapView(map: map)
            // 追加終了

        }

    }
    ```

    [MapView](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/mapview/) は Apple [View](https://developer.apple.com/documentation/swiftui/view) プロトコルに準拠しています。

2. Project Navigator で、MainApp.swift をクリックします。

3. ContentView に .ignoresSafeArea() 修飾子を追加します。 ContentView の body には MapView が含まれており、この修飾子により、マップ ビューがセーフ エリアを超えてすべての端まで表示されるようになります。

    MainApp.swift
    ```swift
    var body: some Scene {
        WindowGroup {
            ContentView()
                // 追加開始
                .ignoresSafeArea()
                // 追加終了

        }
    }
    ```

4. body 変数の宣言時の型を Scene から SwiftUI.Scene に変更します。
    
    MainApp.swift
    ```swift
    // 変更前
    var body: some Scene {
    // 変更後
    var body: some SwiftUI.Scene {
    ```

5. <Command + R> を押してアプリを実行します。

    富士山を中心とした地形ベースマップレイヤーのマップが表示されます。マップビューをピンチ、ドラッグ、およびダブルタップして、マップを操作します。

完成版のプロジェクトは[こちら](https://developers.arcgis.com/swift/zips/display-a-map-solution.zip)からダウンロードできます（マップの表示場所は本チュートリアルで設定した場所とは異なります）。

### Web マップを表示する
「[Web マップの作成](../../services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップも基本的に同じステップで表示できます。

1. [マップを表示する](#マップを表示する)のステップで作成したプロジェクトの ContentView.swift を開き、map を下記のように書き換えます。

    ContentView.swift
    ```swift
    struct ContentView: View {

        @State private var map = {

            let portalItem = PortalItem(
            portal: .arcGISOnline(connection: .anonymous),
            id: PortalItem.ID("Web マップの ID")!
        )
                
        let map = Map(item: portalItem)
            
        return map
            
        }()

    }
    ```

 ---

 アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)