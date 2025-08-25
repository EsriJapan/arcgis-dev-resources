+++
title = "Swift"
description = "ArcGIS Maps SDK for Swift を用いたモバイル地図アプリの作成方法を紹介します。"
Weight=8
aliases = ["/create-startup-app-ios/"]
+++

出典：ArcGIS Maps SDK for Swift - Tutorials - [Display a map](https://developers.arcgis.com/swift/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for Swift を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-ios100.0/display_map_jp.png" width="300px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで 1 つ以上のデータレイヤーを追加できます。マップ ビューを使用し、場所とズーム レベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベースマップ レイヤーを使用して、富士山付近を表示する地図を作成します。

{{% notice note %}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{% /notice %}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/swift/reference/system-requirements/)を満たしていることを確認します。

## 認証の設定

このチュートリアルで使用するセキュアな ArcGIS ロケーション サービスにアクセスするには、ArcGIS Location Platform または ArcGIS Online アカウントを使用して、API キー認証またはユーザー認証を実装する必要があります。

このチュートリアルでは、API キー認証またはユーザー認証を実装することができます。以下の違いを比較してください。

#### API キー認証

- ユーザーはサイン インする必要がありません。
- 適切な権限を持つ API キーの認証情報を作成する必要があります。
- API キーは長期間のアクセス トークンです。
- サービス使用料は API キーの所有者/開発者に請求されます。
- 実装が最も簡単な認証方法です。
- 新規の ArcGIS 開発者に推奨される方法です。

詳しくは [API キー認証](https://developers.arcgis.com/swift/security-and-authentication/#api-key-authentication)をご覧ください。

このチュートリアルで使用するセキュアなリソースにアクセスする権限を持つ、新しい API キーのアクセス トークンを作成します。

1. [API キーの作成](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/tutorials/create-an-api-key/)のチュートリアルを完了し、以下の権限を持つ API キーを作成します。
    - **Privileges**
        - **Location services > Basemaps**
2. **API キーのアクセス トークン** をコピーし、安全な場所に貼り付けます。これは後のステップで使用します。

#### ユーザー認証

- ユーザーは、ArcGIS アカウントでサイン インする必要があります。
- ユーザー アカウントには、アプリケーションで使用する ArcGIS サービスにアクセスする権限が必要です。
- OAuth 認証情報の作成が必要です。
- アプリケーションは、リダイレクト URL とクライアント ID を使用します。
- サービスの使用料は、アプリケーションにサイン インしたユーザーの組織に請求されます。

詳しくは、[ユーザー認証](https://developers.arcgis.com/swift/security-and-authentication/#user-authentication)をご覧ください。

このチュートリアルで使用するセキュアなリソースにアクセスするための新しい OAuth 認証情報を作成します。

1. [ユーザー認証用の OAuth 認証情報を作成する](https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/tutorials/create-oauth-credentials-user-auth/)チュートリアルを完了します。

    `client ID` は、認証サーバー上でアプリを一意に識別します。サーバーは、提供された Client ID を持つアプリを見つけることができない場合、認証を続行しません。


    `Redirect URL`（callback url とも呼ばれる）は、OAuth ログイン後にシステムがアプリに制御を戻す際に、認証サーバーからの応答を識別するために使用されます。必ずしもユーザーがナビゲートできる有効なエンドポイントを表しているわけではないので、redirect URL は `my-app://auth` のようなカスタム スキームを使用できます。アプリのコードで使用する redirect URL が、認証サーバーで設定された redirect URL と一致することを確認することが重要です。

2. **ClientID** と **RedirectURL** をコピーして安全な場所に貼り付けます。これらは後のステップで使用します。

このアプリケーションにアクセスするすべてのユーザーには、ベースマップ スタイル サービスにアクセスするためのアカウント権限が必要です。

{{% notice note %}}

**セキュリティと認証ガイド** : 認証の種類について詳しくは、[認証の種類](https://esrijapan.github.io/arcgis-dev-resources/guide/security/)をご覧ください。

{{% /notice %}}

## 開発またはダウンロード
このチュートリアルを完了するには、2 つの選択肢があります。

1. [オプション 1:コードを開発する](#オプション-1コードを開発する) か
2. [オプション 2:完成したソリューションをダウンロードする](#オプション-2完成したソリューションをダウンロードする)

## オプション 1:コードを開発する
### 新しいアプリを作成する

始めるには、Xcode を使って iOS アプリを作成し、API を参照するように設定する。

1. **Xcode** を開き、**メニュー バー**から [File] > [New] > [Project] をクリックします。

   * [Choose a template for your new project] ウィンドウで、次の値を設定します。
     * **Multiplatform** iOS
     * **Application** App
   * [Next] をクリックします。

   * [Choose options for your new project] ウィンドウで、次の値を設定します。
     * **Product Name**: `<your app name>`
     * **Organization Identifier**: `<任意の組織>`
     * **Interface**: SwiftUI
     * **Language**: Swift
   * 他のすべてのオプションのチェックを外します。
   * [Next] をクリックします。
   * プロジェクトを保存する場所を選択して、[Create] をクリックします。

2. **Project Navigator** で、`<your app name>.App` をクリックします。**Editor** で、<your app name>.App struct を右クリックします。 [Refactor]、[Rename...] の順に選択して、構造体の名前を `MainApp` に変更します。 右上の [Rename] ボタンをクリックして、新しい名前を確認します。 これにより、影響を受けるすべての領域の構造体 (struct) とファイルの名前が変更されます。

3. [Swift Package Manager](https://developers.arcgis.com/swift/install-and-set-up/#swift-package-manager) を使用して API への参照を追加します。

4. **MainApp.swift** ファイルで、ArcGIS のインポート後にエラーが表示される場合があります。[`Scene`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/scene/) と [`Scene protocol`](https://developer.apple.com/documentation/swiftui/scene) を区別することで、エラーを解決します。これを行うには、`SwiftUI` 接頭辞を `Scene` に追加します。

    MainApp.swift
    ```swift
    // 追加開始
    var body: some SwiftUI.Scene {
    // 追加終了
        WindowGroup {
            ContentView()

        }
    }
    ```

### 開発者認証情報を設定する

アプリのユーザーが ArcGIS Location Services にアクセスできるようにするには、[認証の設定](https://esrijapan.github.io/arcgis-dev-resources/guide/create-app/create-startup-app-ios/#認証の設定) ステップで作成した開発者認証情報を使用して、リソースへの要求を認証します。

#### API キーでの認証
API キーを使用すると、ArcGIS Online でホストされているサービス、Web マップ、および Web シーンにアクセスできるようになります。

API キー アクセストークンを [`ArcGISEnvironment`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/arcgisenvironment/) に渡します。

1. **Project Navigator** で、[MainApp.swift] をクリックします。
2. `MainApp` 構造体にイニシャライザーを実装し、`ArcGISEnvironment.apiKey` プロパティーに API キーのアクセス トークンを設定します。

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
    ```

{{% notice note %}}

**ベストプラクティス** : アクセス トークンは、このチュートリアルの便宜のためにコードに直接格納されています。本番環境では、認証情報をソース コードに直接保存しないでください。

{{% /notice %}}

#### ユーザー認証

`Authenticator` toolkit コンポーネントを使用して OAuth 認証情報を管理し、[`ArcGISEnvironment`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/arcgisenvironment/) に渡します。

1. 以下の[手順](https://developers.arcgis.com/swift/toolkit/#swift-package-manager)に従って、ArcGIS Maps SDK for Swift Toolkit パッケージをアプリケーションに追加します。

2. **Project Navigator** で、[MainApp.swift] をクリックします。

- コードに `import ArcGISToolkit` を追加します。
- `MainApp` 構造体で `Authenticator` ツールキット コンポーネントを宣言し、初期化します。
- `MainApp` 構造体にイニシャライザーを実装します。
- `OAuthUserConfiguration` を使用して `Authenticator` の新しいインスタンスを作成します。
- `PortalURL`、`clientID`、および `redirectURL` の値を追加します。
- `authenticator` を `ArcGISEnvironment.authenticationManager` に渡して、チャレンジを処理します。

    MainApp.swift
    ```swift
    import SwiftUI

    import ArcGIS
    // 追加開始
    import ArcGISToolkit
    // 追加終了
    @main
    struct MainApp: App {
    // 追加開始
    @ObservedObject var authenticator: Authenticator

    init() {

        authenticator = Authenticator(oAuthUserConfigurations: [
            OAuthUserConfiguration(

                portalURL: URL(string: "<#YOUR-PORTAL-URL#>")!,
                clientID: ""<#YOUR-CLIENT-ID#>"",
                redirectURL: URL(string: "<#YOUR-REDIRECT-URL#>")!

            )
        ])
        ArcGISEnvironment.authenticationManager.handleChallenges(using: authenticator)

    }
    // 追加終了  
    ```

- body で、`ContentView` に`.authenticator(authenticator)`  修飾子を追加します。

    {{% notice note %}}

    **ベストプラクティス** : OAuth 認証情報は、このチュートリアルの便宜のためにコードに直接格納されています。本番環境では、認証情報をソース コードに直接保存しないでください。

    {{% /notice %}}


### マップの追加
地形ベースマップ レイヤーを含むマップを作成します。 マップは、富士山付近が中心になります。

1. **Project Navigator** で、[ContentView.swift] をクリックします。
2. **Editor** で、API を参照する `import` ステートメントを追加します。

    ContentView.swift
    ```swift
    import SwiftUI

    // 追加開始
    import ArcGIS
    // 追加終了
    ```

3. デフォルト値を持つ [`Map`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/map/) タイプの `map` という名前の @State プロパティー ラッパーを追加します。`arcGISTopographic` ベースマップ スタイルで `Map` を作成し、それを返します。

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
<!--
    [Map](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/map/) や [Scene](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/scene/) のような [GeoModel](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/geomodel/) は、作成にコストがかかり、状態を保持する可能性があります。GeoModel やその他のモデル オブジェクトが必要に応じてのみ作成されるようにするには、上記のコードのように、@State または @StateObject プロパティー ラッパーを適用することができます。詳しくは、[Managing model data in your app](https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app) をご覧ください。

-->

{{% notice warning %}}

ArcGIS Enterprise ユーザーは、ArcGIS Location ベースマップ スタイル サービスにアクセスできません。ArcGIS Enterprise ユーザ向けのアプリを作成する場合は、ユーザーがアクセスできるベースマップを含む `マップ` を作成する必要があります。

{{% /notice %}}

4. マップの initialViewpoint プロパティーを、富士山付近の座標を持つ [`Viewpoint`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/viewpoint/) で設定します。

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

1. body で、前の手順で作成したマップを使用して [`MapView`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/mapview/) を作成します。

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

    [`MapView`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/mapview/) は Apple [View](https://developer.apple.com/documentation/swiftui/view) プロトコルに準拠しています。

### ソリューションを実行する

1. **Project Navigator** で、[MainApp.swift] をクリックします。

2. `ContentView` に `.ignoresSafeArea()` 修飾子を追加します。`ContentView` の body には `MapView` が含まれており、この修飾子により、マップ ビューがセーフ エリアを超えてすべての端まで表示されるようになります。

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

3. <Command + R> を押してアプリを実行します。

    富士山を中心とした地形ベースマップ レイヤーのマップが表示されます。マップ ビューをピンチ、ドラッグ、およびダブルタップして、マップを操作します。

Xcode シミュレータを使用する場合、システムは以下の最低要件を満たしている必要があります ( macOS 14 (Sonoma), Xcode 16, iOS 18)。 物理的なデバイスを使用する場合は、[システム要件](https://developers.arcgis.com/swift/system-requirements/system-requirements-for-200-7/)を参照してください。

あるいは、以下のチュートリアル ソリューションをダウンロードすることもできます。

## オプション 2:完成したソリューションをダウンロードする

1. [Download solution](https://developers.arcgis.com/swift/zips/display-a-map-solution.zip) をクリックし、マシンの任意の場所にファイルを解凍します。
2. **Xcode** で `.xcodeproj` ファイルを開きます。

ダウンロードしたソリューションには認証情報が含まれていないため、[認証の設定](#認証の設定)セクションで作成した開発者認証情報を追加する必要があります。


### ソリューションに開発者認証情報を設定する

アプリのユーザが ArcGIS 位置情報サービスにアクセスできるようにするには、[認証の設定](#認証の設定)ステップで作成した開発者認証情報を使用して、リソースへの要求を認証します。

#### API キー認証

API キー アクセス トークンを [`ArcGISEnvironment`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/arcgisenvironment/) に渡します。

1. **Project Navigator** で、[MainApp.swift] をクリックします。
2. `AuthenticationMode` を `.apiKey` に設定する。

    MainApp.swift
    ```swift
    // Change the `AuthenticationMode` to `.apiKey` if your application uses API key authentication.

    // 追加開始
    private var authenticationMode: AuthenticationMode { .apiKey }
    // 追加終了

    ```

3. `apiKey` プロパティーに API キーのアクセス トークンを設定します。

    MainApp.swift
    ```swift
    // Please enter an API key access token if your application uses API key authentication.

    // 追加開始
    private let apiKey = APIKey("<#YOUR-ACCESS-TOKEN#>")
    // 追加終了

    ```


    {{% notice note %}}

    **ベストプラクティス** : アクセス トークンは、このチュートリアルの便宜のためにコードに直接格納されています。本番環境では、認証情報をソース コードに直接保存しないでください。

    {{% /notice %}}

#### ユーザー認証

`Authenticator` toolkit コンポーネントを使用して OAuth 認証情報を管理し、[`ArcGISEnvironment`](https://developers.arcgis.com/swift/api-reference/documentation/arcgis/arcgisenvironment/) に渡します。

1. **Project Navigator** で、[MainApp.swift] をクリックします。
2. `AuthenticationMode` を `.user` に設定します。

    MainApp.swift
    ```swift
    // Change the `AuthenticationMode` to `.user` if your application uses OAuth credentials.

        // 追加開始
        private var authenticationMode: AuthenticationMode { .user }
        // 追加終了
    ```

3. `portalURL`、`clientID`、`redirectURL` の値を設定します。

    MainApp.swift
    ```swift
    // Setup an `Authenticator` with OAuth configuration if your application uses OAuth credentials.
    @ObservedObject var authenticator = Authenticator(
        oAuthUserConfigurations: [
            OAuthUserConfiguration(

                // Please enter OAuth credentials for user authentication.

                // 追加開始
                portalURL: URL(string: "<#YOUR-PORTAL-URL#>")!,
                clientID: "<#YOUR-CLIENT-ID#>",
                redirectURL: URL(string: "<#YOUR-REDIRECT-URL#>")!
                // 追加終了

            )
        ]
    )
    ```

{{% notice note %}}

**ベストプラクティス** : アクセス トークンは、このチュートリアルの便宜のためにコードに直接格納されています。本番環境では、認証情報をソース コードに直接保存しないでください。

{{% /notice %}}

### アプリを実行する

アプリを実行するには、<Command + R> キーを押します。

Xcode シミュレータを使用する場合、システムは以下の最低要件を満たしている必要があります ( macOS 14 (Sonoma), Xcode 16, iOS 18)。物理的なデバイスを使用する場合は、[システム要件](https://developers.arcgis.com/swift/system-requirements/system-requirements-for-200-7/)を参照してください。

カリフォルニア州サンタモニカ山脈を中心とした地形ベースマップ レイヤーの地図が表示されるはずです。マップ ビューをピンチ、ドラッグ、ダブルタップしてマップを探索します。

## 次のチュートリアル

これらのチュートリアルでは、追加の [API 機能](https://developers.arcgis.com/kotlin/key-features/)、[ArcGIS ロケーション サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/)、および [ArcGIS ツール](https://developers.arcgis.com/documentation/mapping-and-location-services/tools/)の使用方法について説明します。(英語ページ)

- [Web マップを表示](https://developers.arcgis.com/swift/maps-2d/tutorials/display-a-web-map/)
- [ポイント、ライン、およびポリゴンの追加](https://developers.arcgis.com/swift/maps-2d/tutorials/add-a-point-line-and-polygon/)
- [住所の検索](https://developers.arcgis.com/swift/geocode-and-search/tutorials/search-for-an-address/)
- [フィーチャ レイヤーの追加](https://developers.arcgis.com/swift/layers/tutorials/add-a-feature-layer/)

