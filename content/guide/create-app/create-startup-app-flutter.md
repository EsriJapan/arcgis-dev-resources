+++
title = "Flutter"
description = "ArcGIS Maps SDK for Flutter を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight = 9
aliases = ["/create-startup-app-flutter/"]
+++

出典：ArcGIS Maps SDK for Flutter - Tutorials - [Display a map](https://developers.arcgis.com/flutter/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for Flutter を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src = "https://apps.esrij.com/arcgis-dev/guide/img/startup-flutter/display-a-map-flutter.png" width="650px">


マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで 1 つ以上のデータ レイヤーを追加できます。

このチュートリアルでは、地形図ベースマップ レイヤーを使用して、富士山付近を表示する地図を作成します。

このマップとコードは、他の 2D チュートリアルの出発点として使用されます。

{{% notice note %}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{% /notice %}}  

{{% notice warning %}}

Android Studio の最新リリースである Ladybug 2024.2.1+ を使用している場合、Flutter アプリを起動しようとするとエラーが発生することがあります。例えば、このチュートリアルを実行しようとすると、次のようなエラーが表示されることがあります。  
*"Unknown Kotlin JVM target: 21"*  
同様に、flutter create コマンドを使って新しい Flutter プロジェクトを作成すると、次のような警告が表示されることがあります。  
*"The configured version of Java detected may conflict with the Gradle version in your new Flutter app."*  
この問題は、Ladybug にバンドルされている Java のバージョン（JDK 21）が Flutter の要件（JDK 17）と後方互換性がないことと、Flutter が使用している Gradle のバージョンに関連しています。

新しい Flutter アプリを作成し、Android Studio Ladybug でこのチュートリアルを実行するための解決策は、手動で JDK 17 をインストールし、Flutter が JDK 17 を使用するようにリダイレクトすることです。  
Android Studio からこの操作を行うためには、  
*[設定] -> [ビルドツール] -> [Gradle JDK Location]* に行き、JDK 17 のインストール パスを設定します。  
またはコマンド ラインから次のように実行します。
```powershell
flutter config --jdk-dir=<your-local-JDK-17-path>
```

{{% /notice %}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/flutter/reference/system-requirements/)を満たしており、[Flutter の開発環境](../../../tips/flutter/install-flutter-200.x/) が整っていることを確認します。
<!-- 3. Flutter 用の IDE。[VS Code](https://code.visualstudio.com/)を推奨しています。 -->

## ステップ

### 新しい Flutter アプリを作成します
1. **VS Code** を開き、ウェルカム タブで [Open Folder...] を選択します。プロジェクトの場所を選んでください。
2. [View] > [Terminal] に進みます。
3. ターミナル ウィンドウで以下のコマンドを使い、**display_a_map** という新しい Flutter アプリを作成します。 必要なターゲット プラットフォームと 組織名 **com.example.app** を設定します。

    ```powershell
    flutter create -e display_a_map --platforms ios,android --org com.example.app
    ```

### ArcGIS Maps SDK for Flutter を追加します
`arcgis_maps` パッケージに依存関係を追加します。

1. VS Code のターミナルで、ディレクトリを新しいプロジェクトに変更します。
    ```powershell
    cd display_a_map
    ```
2. 以下のコマンドを実行します。
    ```powershell
    dart pub add arcgis_maps
    ```
3. 以下のコマンドを実行します。
    ```powershell
    flutter pub upgrade
    ```
4. 最後に、以下のコマンドを実行します。
    ```powershell
    dart run arcgis_maps install
    ```

### プラットフォーム固有の構成
#### Android
1. プロジェクトの `android/app/build.gradle` ファイルを編集して、最小要件を更新します。

    build.gradle

	```gradle
	android {
    	namespace = "com.example.app.display_a_map"
    	compileSdk = flutter.compileSdkVersion
		ndkVersion = "25.2.9519653"  //変更

    	compileOptions {
        	sourceCompatibility = JavaVersion.VERSION_1_8
        	targetCompatibility = JavaVersion.VERSION_1_8
    	}

    	kotlinOptions {
        	jvmTarget = JavaVersion.VERSION_1_8
    	}

    	defaultConfig {
    	    // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
    	    applicationId = "com.example.app.display_a_map"
    	    // You can update the following values to match your application needs.
    	    // For more information, see: https://flutter.dev/to/review-gradle-config.
    	    //
			minSdk = 26 // 変更
    	    targetSdk = flutter.targetSdkVersion
    	    versionCode = flutter.versionCode
    	    versionName = flutter.versionName
        }
    }
	```

2. プロジェクトの `android/settings.gradle` ファイルを編集して、Kotlin のバージョンを更新します。

    settings.gradle

	```gradle
	plugins {
        id "dev.flutter.flutter-plugin-loader" version "1.0.0"
        id "com.android.application" version "8.1.0" apply false
        id "org.jetbrains.kotlin.android" version "1.9.0" apply false //変更
	}
	```  

3. `android/app/src/main/AndroidManifest.xml` に、オンライン リソースにアクセスするためのパーミッションを追加します。

    AndroidManifest.xml

    ```xml
    <manifest xmlns:android="http://schemas.android.com/apk/res/android">
        <uses-permission android:name="android.permission.INTERNET" /> <!-- 追加 -->
        <application
            android:label="display_a_map"
            android:name="${applicationName}"
            android:icon="@mipmap/ic_launcher">
    ```

#### iOS
1. `ios/Podfile` ファイルを編集して iOS 16.0 を最小に設定します。 行のコメントを解除し、バージョン番号を更新します。

    Podfile

	```ruby
	# Uncomment this line to define a global platform for your project
	platform :ios, '16.0'  #変更
	```  

2. `Runtimecore` pod と `arcgis_maps_ffi` pod を `Runner` ターゲット セクションに追加します。

    Podfile

	```ruby
	target 'Runner' do
		use_frameworks!
		use_modular_headers!

        #変更開始
		pod 'Runtimecore', :podspec => '../arcgis_maps_core/ios/Runtimecore.podspec'
		pod 'arcgis_maps_ffi', :podspec => '../arcgis_maps_core/ios/arcgis_maps_ffi.podspec'
        #変更終了

		flutter_install_all_ios_pods File.dirname(File.realpath(__FILE__))
		target 'RunnerTests' do
			inherit! :search_paths
		end
	end
	```  

3. `pod update` を使用して Pods を設定します。

    ```powershell
	cd ios && pod update && cd ..
	```  

### アクセス トークンを取得する
このチュートリアルで使用するロケーション サービスを使用するには、アクセス トークンが必要です。
1. アクセス トークンを取得するには、[API キーの取得](../../get-api-key) チュートリアルに進んでください。
2. 次の権限が有効になっていることを確認してください。[ロケーション サービス] > [ベースマップ] > [ベースマップ スタイル サービス]
3. アクセス トークンをコピーします。アクセス トークンを取得する他の方法については、[Types of authentication](https://developers.arcgis.com/documentation/security-and-authentication/types-of-authentication/) を参照してください。

### API キーを設定する
1. VS Codeで、`lib/main.dart` を開きます。
2. `arcgis_maps` パッケージをインポートします。

    main.dart

    ```dart
    import 'package:flutter/material.dart';

    import 'package:arcgis_maps/arcgis_maps.dart'; //追加
    ```

3. `main()` 関数で、[const](https://dart.dev/language/variables#final-and-const) `apiKey` を定義し、その値にアクセス トークンを設定します。

    ```dart
    void main() {

        const apiKey = ''; // Your access token here. //追加

        runApp(const MainApp());
    }
    ```

    {{% notice info %}}

    このチュートリアルでは便宜上、アクセス トークンをコードに直接格納しています。アクセス トークンをソース コードに格納することはベスト プラクティスではありません。

    {{% /notice %}}

4. [`ArcGISEnvironment.apiKey`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISEnvironment/apiKey.html) を `apiKey` 定数に設定します。

    main.dart

    ```dart
    void main() {

    const apiKey = ''; // Your access token here.

    ArcGISEnvironment.apiKey = apiKey; //追加

    runApp(const MainApp());
    }
    ```
    {{% notice warning %}}

    API キーが必要なのにアクセス トークンが設定されていない（または無効な値が設定されている）場合、チュートリアルのコードを実行すると次のようなエラーが表示されることがあります。  
    `Unhandled Loadable ArcGISMap load error: ArcGISException: code=22; HttpException: Failed to parse header value`  
    このエラーが発生した場合は、有効なアクセス トークンが [`ArcGISEnvironment.apiKey`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISEnvironment/apiKey.html) プロパティに設定されていることを確認してください。Flutter のコア HTTP スタックに既知の問題があるため、ArcGIS Maps SDK for Flutter は現時点でより明確なエラーを確実に提供することができません。

    {{% /notice %}}
5. [`runApp()`](https://api.flutter.dev/flutter/widgets/runApp.html) 内で [`MaterialApp`](https://api.flutter.dev/flutter/material/MaterialApp-class.html) をインスタンス化し、名前付き引数の [`home`](https://api.flutter.dev/flutter/material/MaterialApp/home.html) に `MainApp` のインスタンスを設定します。

    main.dart

    ```dart
    void main() {

        const apiKey = ''; // Your access token here.

        ArcGISEnvironment.apiKey = apiKey;

        runApp(

            //変更開始
            const MaterialApp(
                home: MainApp(),
            ),
            //変更終了

        );
    }
    ```

### マップを追加する
地形図ベースマップ レイヤーを含む地図を作成します。 地図は富士山の付近とします。

1. テンプレート `MainApp` クラス定義をリファクタリングして、[`StatefulWidget`](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) を拡張します。 [`StatelessWidget`](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html) キーワードにマウス カーソルを合わせて右クリックし、[Refactor...] から、[Convert to StatefulWidget] を選択してコードをリファクタリングします。

    ArcGIS Maps SDK for Flutter で作業していると、データの変更に応じて UI を更新するなど、アプリケーションの状態の更新が必要になることがよくあります。 ステートフル ウィジェットを実装することで、アプリはこのような状況に対応できます。 ステートレス ウィジェットの実装を使用して、単に地図を表示することも可能です。

    main.dart

    ```dart
    class MainApp extends StatefulWidget { //変更

        const MainApp({super.key});

        // 変更開始
        @override
        State<MainApp> createState() => _MainAppState();
        // 変更終了

    }

    //追加開始
    class _MainAppState extends State<MainApp> {
        @override
        Widget build(BuildContext context) {

            return const MaterialApp(
                home: Scaffold(
                    body: Center(
                        child: Text('Hello World!'),
                    ),
                ),
            );

        }
    }
    //追加終了
    ```

2. build メソッド内で返される `MaterialApp` ウィジェットを削除します。 このコードは Flutter create テンプレートによって生成されたもので、次項でマップを含むウィジェットを返すコードに置き換えられます。

    main.dart

    ```dart
    class MainApp extends StatefulWidget {

        const MainApp({super.key});

        @override
        State<MainApp> createState() => _MainAppState();

    }

    class _MainAppState extends State<MainApp> {
            @override
            Widget build(BuildContext context) {

                // 削除開始
                return const MaterialApp(
                    home: Scaffold(
                        body: Center(
                            child: Text('Hello World!'),
                        ),
                    ),
                );
                // 削除終了

            }
    }
    ```

3. `_MainAppState` クラスの内部で、最後のクラス メンバー変数 `_mapViewController` を定義し、[`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) クラスの [`createController()`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView/createController.html) を呼び出して [`ArcGISMapViewController`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapViewController-class.html) で初期化します。

    ArcGIS マップ ビュー コントローラーは、[`ArcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMap-class.html) で定義された 2 次元 (2D) 地理コンテンツを表示するユーザー インタフェース コントロールです。

    main.dart

    ```dart
    class _MainAppState extends State<MainApp> {

        final _mapViewController = ArcGISMapView.createController(); //追加

        @override
        Widget build(BuildContext context) {

        }

    }
    ```

4. build メソッド内で [`Scaffold`](https://api.flutter.dev/flutter/material/Scaffold-class.html)、[`Column`](https://api.flutter.dev/flutter/widgets/Column-class.html)、[`Expanded`](https://api.flutter.dev/flutter/widgets/Expanded-class.html) からなるウィジェット ツリーに [`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) ウィジェットを追加します。 引数名 [`controllerProvider`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView/controllerProvider.html) をクラス メンバー変数 `_mapViewController` に設定し、[`onMapViewReady`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView/onMapViewReady.html) 引数を次に定義する引数と同じ名前の新しいメソッドに設定します。

    [`Scaffold`](https://api.flutter.dev/flutter/material/Scaffold-class.html) ウィジェットは基本的な[マテリアル デザイン](https://m3.material.io/)のビジュアル レイアウト構造を提供し、[`Column`](https://api.flutter.dev/flutter/widgets/Column-class.html) ウィジェットは子ウィジェットを垂直配列で表示します。[`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) ウィジェットは、サイズが制限されたウィジェット内でのみ使用できます。 サイズが制限されていない状態で使用すると、アプリケーションは例外をスローします。 たとえば、`ArcGISMapView` を `Column` ウィジェット内で使用すると、サイズが制限されないため、このような例外が発生します。 代わりに、チュートリアルのこのステップで説明するように、`ArcGISMapView` を [`Expanded`](https://api.flutter.dev/flutter/widgets/Expanded-class.html) ウィジェットでラップして、適切な境界を提供することができます。

    main.dart

    ```dart
    class _MainAppState extends State<MainApp> {

        final _mapViewController = ArcGISMapView.createController();

        @override
        Widget build(BuildContext context) {

            //追加開始
            return Scaffold(
              body: Column(
                children: [
                  Expanded(
                    child: ArcGISMapView(
                      controllerProvider: () => _mapViewController,
                      onMapViewReady: onMapViewReady,
                    ),
                  ),
                ],
              ),
            );
            //追加終了

        }

    }
    ```

5. `MainAppState` 内で、何も返さない新しいメソッド `onMapViewReady()` を定義します。

    main.dart

    ```dart
    class _MainAppState extends State<MainApp> {

        final _mapViewController = ArcGISMapView.createController();

        @override
        Widget build(BuildContext context) {

            return Scaffold(
                body: Column(
                    children: [
                        Expanded(
                            child: ArcGISMapView(
                                controllerProvider: () => _mapViewController,
                                onMapViewReady: onMapViewReady,
                            ),
                        ),
                    ],
                ),
            );

        }

        //追加開始
        void onMapViewReady() {

        }
        //追加終了

    }
    ```

6. 新しいメソッド内で final 変数 `basemapStyleParams`、`basemap`、`map` を定義します。それぞれの定義は以下の通りです。
    * `basemapStyleParams`: [`BasemapStyleParameters`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/BasemapStyleParameters-class.html) をインスタンス化し、specificLanguage を日本語に変更します。
    * `basemap`: ArcGIS Topographic ベースマップ スタイルと 生成した `basemapStyleParams` で [`Basemap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/Basemap-class.html) をインスタンス化します。
    * `map`: `basemap` で [`ArcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMap-class.html) をインスタンス化します。  

    main.dart

    ```dart
    class _MainAppState extends State<MainApp> {

        final _mapViewController = ArcGISMapView.createController();

        @override
        Widget build(BuildContext context) {

            return Scaffold(
                body: Column(
                    children: [
                        Expanded(
                            child: ArcGISMapView(
                                controllerProvider: () => _mapViewController,
                                onMapViewReady: onMapViewReady,
                            ),
                        ),
                    ],
                ),
            );

        }

        void onMapViewReady() {

            //追加開始
            final basemapStyleParams = BasemapStyleParameters();
            basemapStyleParams.specificLanguage = "ja"; //ベースマップの言語を日本語に設定

            final basemap = Basemap.withStyle(BasemapStyle.arcGISTopographic, parameters: basemapStyleParams); //ベースマップに設定を適用
            final map = ArcGISMap.withBasemap(basemap); //設定したベースマップでマップを生成
            //追加終了

        }

    }
    ```

7. ArcGIS マップ ビュー コントローラーの [`arcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapViewController/arcGISMap.html) プロパティをマップに設定します。 さらに、[`setViewpoint()`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/GeoViewController/setViewpoint.html) を呼び出して、富士山にズームします。

    main.dart

    ```dart
    class _MainAppState extends State<MainApp> {

        final _mapViewController = ArcGISMapView.createController();

        @override
        Widget build(BuildContext context) {

            return Scaffold(
                body: Column(
                    children: [
                        Expanded(
                            child: ArcGISMapView(
                                controllerProvider: () => _mapViewController,
                                onMapViewReady: onMapViewReady,
                            ),
                        ),
                    ],
                ),
            );

        }

        void onMapViewReady() {

            final basemapStyleParams = BasemapStyleParameters();
            basemapStyleParams.specificLanguage = "ja"; //ベースマップの言語を日本語に設定

            final basemap = Basemap.withStyle(BasemapStyle.arcGISTopographic, parameters: basemapStyleParams); //ベースマップに設定を適用
            final map = ArcGISMap.withBasemap(basemap); //設定したベースマップでマップを生成

            //追加開始
            _mapViewController.arcGISMap = map;
            _mapViewController.setViewpoint(
                Viewpoint.withLatLongScale(
                    latitude: 35.360626,
                    longitude: 138.727363,
                    scale: 200000.0,
                ),
            );
            //追加終了

        }

    }
    ```

### アプリを実行する
1. Android エミュレーター、iOS シミュレーター、または物理的なデバイスが設定され、実行されていることを確認します。
2. VS Codeで、[Run] > [Run Without Debugging] を選択します。

### ダウンロードしたソリューションを実行する
プロジェクト ソリューションをダウンロードした場合は、以下の手順に従ってアプリケーションを実行します。

1. VS Code で展開したプロジェクトを開きます。
2. VS Code のターミナルで、以下のコマンドを実行します。
    ```powershell
    flutter pub upgrade
    ```
3. 以下のコマンドを実行します。

    ```powershell
    dart run arcgis_maps install lib/main.dart
    ```

4. アクセス トークンを取得し、ソース コード ファイルに API キーを設定します。
5. Android エミュレーター、iOS シミュレーター、または物理デバイスが設定され、実行されていることを確認します。
6. VS Code で、[Run] > [Run Without Debugging] を選択します。

完成版のプロジェクトは[こちら](https://developers.arcgis.com/flutter/zips/display-a-map-solution.zip)からダウンロードできます（マップの表示場所は本チュートリアルで設定した場所とは異なります）。

### Web マップを表示する
「[Web マップの作成](../../services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップも基本的に同じステップで表示できます。

1. [マップを表示する](#マップを表示する)のステップで作成したプロジェクトの `main.dart` を開き、`onMapViewReady()` を下記のように書き換えます。

    main.dart

    ```dart
    void onMapViewReady() {

        //URI を生成します。
        var uri = Uri(
          scheme: "https",
          host: "example.com",
          path: "Portal の Path"
        );

        //ArcGIS ポータルを作成します。URI を指定しない場合は "Portal.arcGISOnline()" を使用します。
        final portal = Portal(uri);

        //アイテム ID を使用して、Web マップをポータル アイテムとして取得します。
        final portalItem = PortalItem.withPortalAndItemId(portal: portal, itemId: "Web マップの ID");

        //ポータル アイテムからマップを作成します。
        final map = ArcGISMap.withItem(portalItem);
    }
    ```

 ---

 アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)

