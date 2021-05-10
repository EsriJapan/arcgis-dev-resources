+++
title = "iOS"
description = "ArcGIS Runtime SDK for iOS を用いたモバイル地図アプリの作成方法を紹介します。"
Weight=4
aliases = ["/create-startup-app-ios/"]
+++

# マップを表示する

このチュートリアルでは ArcGIS Runtime SDK for iOS を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src="https://developers.arcgis.com/ios/static/831dfe84a5694dd5041c84c9b17e1ad2/4cdf7/display-a-map.png" width="400px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで1つ以上のデータレイヤーを追加できます。マップビューを使用し、場所とズームレベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベースマップレイヤーを使用して、富士山付近を表示する地図を作成します。

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/environments/)を満たしていることを確認します。
3. ArcGIS Runtime SDK for iOS が[インストール](../tips/ios/install-ios-100.x/)されていること

## ステップ

### 新しい Xcode プロジェクトを作成する
Xcode を使用してシングルビュー iOS アプリを作成し、SDK を参照するように構成します。

1. Xcode を開き、[Create a new Xcode project] > [App] をクリックします。
   * [Choose options for your new project] ウィンドウで、次の値を設定します。
     * Product Name: <任意の名前>
     * Language: Swift
     * Interface: Storyboard
     * Organization Identifier: <任意の組織>
   * 他のすべてのオプションのチェックを外します。
   * [Next] > [Create] をクリックします。

2. 「[インストールガイドのプロジェクトの構成](../tips/ios/install-ios-100.x/)」の手順に従って、API への参照を追加します。


### UI にマップビューを追加する
マップビューは、マップを表示する UI コンポーネントです。また、タッチジェスチャによるナビゲートなど、ユーザーによるマップの操作も処理します。Xcode とストーリーボード エディターを使用して、マップビューを UI に追加し、それをビュー コントローラーのソースコードに接続します。iPhone のディスプレイ全体に表示されるようにマップビューのサイズを設定します。

1. Project Navigator で ViewController.swift をクリックします。
2. エディターで、API を参照するインポート ステートメントを追加し、mapViewという名前で AGSMapView タイプの @IBOutlet を追加します。これにより、ストーリーボードで作成するマップビューへの参照が提供されます。[AGSMapView](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_map_view.html) は [UIView](https://developer.apple.com/documentation/uikit/uiview) のサブクラスです。

    ViewController.swift
    ```swift
    import UIKit

    // 追加開始
    import ArcGIS
    // 追加終了

    class ViewController: UIViewController {
        
        // 追加開始
        @IBOutlet weak var mapView: AGSMapView!
        // 追加終了
        
        override func viewDidLoad() {
            super.viewDidLoad()

        }

    }
    ```

3. Project Navigator で Main.storyboard をクリックしストーリーボード エディターを開きます。
4. メニューで, [View] > [Show Library] をクリックしオブジェクト ライブラリを表示します。
5. オブジェクト ライブラリ上で
    * uiview と入力するか、下にスクロールして View を見つけます。
    * 新しい View をストーリーボードのメインビューにドラッグアンドドロップします。
6. ストーリーボード エディターの右下にある Add New Constraints をクリックします。パネル上で
    * 上下左右のコンストレイントに0を入力します。
    * Add 4 Constraints をクリックします。

    新しい View が画面いっぱいに表示されます。

7. メニューで [View] > [Inspectors] > [Identity] をクリックします。インスペクター パネルで [Custom Class] > [Class] を AGSMapView に設定します。これにより、新しい View のタイプが AGSMapView に設定されます。

8. ストーリーボード エディターで、黄色の View Controller アイコンを右クリックして、コネクション パネルを表示します。 mapView アウトレット コネクタをストーリーボードの新しい AGSMapView ビューにドラッグします。これにより、ストーリーボードの AGSMapView が、ViewController クラスで以前に作成されたmapView アウトレットに接続されます。

### マップを追加する
マップビューを使用して、富士山を中心としたマップを表示します。マップには、地形ベースマップレイヤーが含まれます。

1. Xcode の Project Navigator で ViewController.swift をクリックします。
2. エディタで、setupMap() という名前のプライベート メソッドを定義します。 setupMap() で [AGSMap](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_map.html) を作成します。AGSBasemapStyleArcGISTopographic という名前の地形図の[ベースマップスタイル](https://developers.arcgis.com/ios/api-reference/_a_g_s_basemap_8h.html#a4ee21ae8bfe01ad97932cdea71737db1)を使用して ArcGISMap を構成します。

    ViewController.swift
    ```swift
    class ViewController: UIViewController {

        @IBOutlet weak var mapView: AGSMapView!

        // 追加開始
        private func setupMap() {

            let map = AGSMap(
                basemapStyle: .arcGISTopographic
            )

            mapView.setViewpoint(
                AGSViewpoint(
                    latitude: 35.360626,
                    longitude: 138.727363,
                    scale: 200000
                )
            )

        }
        // 追加終了

        override func viewDidLoad() {
            super.viewDidLoad()

        }

    }
    ```
    
    地形図（.arcGISTopographic）以外にも、道路地図（.arcGISStreets）、衛星画像（.arcGISImagery）、オープンストリートマップ（.osmStreets）など、様々なスタイルが用意されています。

3. mapView アウトレットの [map](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_map_view_common.html#a3a79687646c388a9307c5f3c327133b2) プロパティを新しい AGSMap に設定します。

    ViewController.swift
    ```swift
    private func setupMap() {

        let map = AGSMap(
            basemapStyle: .arcGISTopographic
        )

        // 追加開始
        mapView.map = map
        // 追加終了

        mapView.setViewpoint(
            AGSViewpoint(
                latitude: 35.360626,
                longitude: 138.727363,
                scale: 200000
            )
        )

    }
    ```

4. ViewController の viewDidLoad メソッドで、ビューがロードされたら setupMap() を呼び出します。

    ViewController.swift
    ```swift
    override func viewDidLoad() {
        super.viewDidLoad()

        // 追加開始
        setupMap()
        // 追加終了

    }
    ```

### API キーを設定する
ArcGIS Online でホストされているサービス、Web マップ、Web シーンにアクセスできるようにするには、API キーが必要です。
まだ作成していない場合は、[ArcGIS Developers ダッシュボード](https://developers.arcgis.com/dashboard/) に移動して、API キーを取得します。作成方法は「[API キーの作成]()」をご覧ください。

1. Project Navigator で AppDelegate.swift をクリックします。
2. エディターで、API を参照するインポートステートメントを追加し、AppDelegate の application(_:didFinishLaunchingWithOptions:) メソッドで、API キーを使用して [AGSArcGISRuntimeEnvironment](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_arc_g_i_s_runtime_environment.html) の [apiKey](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_arc_g_i_s_runtime_environment.html#a7a4ca7305796e26c3ded7c84e35a6edd) プロパティを設定します。

    AppDelegate.swift
    ```swift
    import UIKit

    // 追加開始
    import ArcGIS
    // 追加終了

    @UIApplicationMain
    class AppDelegate: UIResponder, UIApplicationDelegate {
        var window: UIWindow?

        func application(_ application: UIApplication,
                        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
            
            // 追加開始
            // 注：API キーをソースコードに保存することはベストプラクティスではありません。
            //チュートリアルでは便宜上ソースコードに記載しています
            AGSArcGISRuntimeEnvironment.apiKey = "<API キー>"
            // 追加終了

            return true
        }

    }
    ```

3. <Command + R> を押してアプリを実行します。


富士山を中心とした地形ベースマップレイヤーのマップが表示されます。マップビューをピンチ、ドラッグ、およびダブルタップして、マップを操作します。

完成版のプロジェクトは[こちら](https://developers.arcgis.com/ios/zips/display-a-map-solution.zip)からダウンロードできます（マップの表示場所は本チュートリアルで設定した場所とは異なります）。

# Web マップを表示する
「[Web マップの作成](../../services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップも基本的に同じステップで表示できます。

1. [マップを表示する](#マップを表示する)のステップで作成したプロジェクトの ViewController.swift を開き、setupMap() メソッドを下記のように書き換えます。
    
    ViewController.swift

    ```swift        
    private func setupMap() {

        let portal = AGSPortal.arcGISOnline(withLoginRequired: false)
        let itemID = "<Web マップの ID>"
        let portalItem = AGSPortalItem(portal: portal, itemID: itemID)

        let map = AGSMap(item: portalItem)
        mapView.map = map

    }
    ```

 ---

アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)
