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

{{% notice note %}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{% /notice %}}  

<!--下記記述はバージョンを追えないのでコメントアウト。問い合わせ用に残しておく-->
<!--
{{% notice warning %}}

Android Studio の最新リリースである Meerkat 2024.3.1 以降を使用している場合、pub.dev で arcgis_maps パッケージを使用すると、SDK の依存関係の管理で問題が発生する可能性があります。
これを解決するには、Flutter のデフォルト JDK として JDK 17 を設定する必要があります。

* macOS の場合：Homebrew を使用して macOS に JDK 17 をインストールします。
    
    ```
    brew install openjdk@17
    sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
    flutter config --jdk-dir=/opt/homebrew/Cellar/openjdk@17/17.0.14/libexec/openjdk.jdk/Contents/Home
    ```

* Windowsの場合：Microsoft の [OpenJDK](https://learn.microsoft.com/ja-jp/java/openjdk/download#openjdk-17) ページから OpenJDK 17 をダウンロードして、zip ファイルを任意のフォルダに解凍した後、PowerShell を使用して設定します。

    ```
    flutter config --jdk-dir PATH-TO-JDK
    ```

{{% /notice %}}
-->

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/flutter/reference/system-requirements/)を満たしており、[Flutter の開発環境](../../../tips/flutter/install-flutter-200.x/) が整っていることを確認します。
3. Flutter 用の IDE。[VS Code](https://code.visualstudio.com/) を推奨しています。

## 認証の設定

このチュートリアルで使用するセキュアな ArcGIS ロケーション サービスにアクセスするには、ArcGIS Location Platform または ArcGIS Online アカウントを使用して、API キー認証を実装する必要があります。

#### API キー認証

このチュートリアルで使用するセキュアなリソースにアクセスする権限を持つ、新しい API キーのアクセス トークンを作成します。

1. [API キーの作成](../../get-api-key/)のチュートリアルを完了し、以下の権限を持つ API キーを作成します。
    * **Privileges**
        * **Location services** > **Basemaps**
2. **API キーのアクセス トークン** をコピーし、安全な場所に貼り付けます。これは後のステップで使用します。

## 開発またはダウンロード
このチュートリアルを完了するには、2 つの選択肢があります。
1. [オプション 1:コードを開発する](#オプション-1コードを開発する) か
2. [オプション 2:完成したソリューションをダウンロードする](#オプション-2完成したソリューションをダウンロードする)

## オプション 1:コードを開発する

### 新しい Flutter アプリを作成する

1. **VS Code** を開き、Welcome タブで [Open Folder...] を選択します。プロジェクトの場所を選んでください。
2. [View] > [Terminal] に進みます。
3. ターミナル ウィンドウで以下のコマンドを使い、**display_a_map** という新しい Flutter アプリを作成します。 必要なターゲット プラットフォームと 組織名 **com.example.app** を設定します。

    ```powershell
    flutter create -e display_a_map --platforms ios,android --org com.example.app
    ```

### ArcGIS Maps SDK for Flutter を追加する

`arcgis_maps` パッケージに依存関係を追加します。

1. VS Code のターミナルで、ディレクトリーを新しいプロジェクトに変更します。
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
1. プロジェクトの `android/app/build.gradle.kts` ファイルを編集して、最小要件を更新します。

    build.gradle.kts

	```gradle
    android {
        namespace = "com.example.app.display_a_map"
        compileSdk = 36 //変更
        ndkVersion = "27.0.12077973" //変更

        compileOptions {
            sourceCompatibility = JavaVersion.VERSION_11
            targetCompatibility = JavaVersion.VERSION_11
        }

        kotlinOptions {
            jvmTarget = JavaVersion.VERSION_11.toString()
        }

        defaultConfig {
            // TODO: 任意のアプリケーション ID を指定します (https://developer.android.com/studio/build/application-id.html).
            applicationId = "com.example.app.display_a_map"
            // アプリケーションの要件に合わせて次の値を更新します。
            // 詳細については https://flutter.dev/to/review-gradle-config を参照してください。
            minSdk = 28 //変更
            targetSdk = flutter.targetSdkVersion
            versionCode = flutter.versionCode
            versionName = flutter.versionName
        }
    ```

2. `android/app/src/main/AndroidManifest.xml` に、オンライン リソースにアクセスするためのパーミッションを追加します。

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

1. `ios/Podfile` ファイルを編集して iOS 17.0 を最小に設定します。 行のコメントを解除し、バージョン番号を更新します。

    Podfile

	```ruby
	# Uncomment this line to define a global platform for your project
	platform :ios, '17.0'  #変更
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

### 開発者資格情報を設定する

アプリ ユーザーが ArcGIS の位置情報サービスにアクセスできるようにするには、[認証の設定](#認証の設定) ステップで作成した開発者資格情報を使用して、リソースへのリクエストを認証します。

#### API キーを設定する

1. VS Codeで、`lib/main.dart` を開きます。
2. `arcgis_maps` パッケージをインポートします。

    main.dart

    ```dart
    import 'package:flutter/material.dart';

    import 'package:arcgis_maps/arcgis_maps.dart'; //追加
    ```

3. `main()` 関数で、[ArcGISEnvironment.apiKey](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISEnvironment/apiKey.html) の値をアクセス トークンに設定します。

    ```dart
    void main() {

         ArcGISEnvironment.apiKey = ''; // アクセス トークンをここに記入します。 //追加

        runApp(const MainApp());
    }
    ```

    {{% notice info %}}

    このチュートリアルでは便宜上、アクセス トークンをコードに直接格納しています。アクセス トークンをソース コードに格納することはベスト プラクティスではありません。

    {{% /notice %}}

4. [`runApp()`](https://api.flutter.dev/flutter/widgets/runApp.html) 内で [`MaterialApp`](https://api.flutter.dev/flutter/material/MaterialApp-class.html) をインスタンス化し、名前付き引数 [`home`](https://api.flutter.dev/flutter/material/MaterialApp/home.html) に `MainApp` のインスタンスを設定します。

    main.dart

    ```dart
    void main() {

    ArcGISEnvironment.apiKey = ''; // アクセス トークンをここに記入します。

    ArcGISEnvironment.apiKey = apiKey; //追加

    runApp(
        const MaterialApp(home: MainApp()) //変更
        );
    }
    ```

### マップを追加する

地形図ベースマップ レイヤーを含む地図を作成します。 地図は富士山の付近とします。

1. テンプレート `MainApp` クラス定義をリファクタリングして、[`StatefulWidget`](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) を拡張します。 [`StatelessWidget`](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html) キーワードにマウス カーソルを合わせて右クリックし、[Refactor...] から、[Convert to StatefulWidget] を選択してコードをリファクタリングします。

    ArcGIS Maps SDK for Flutter で作業していると、データの変更に応じて UI を更新するなど、アプリケーションの状態の更新が必要になることがよくあります。 ステートフル ウィジェットを実装することで、アプリはこのような状況に対応できます。 ステートレス ウィジェットの実装を使用して、単に地図を表示することも可能です。[Display map](https://developers.arcgis.com/flutter/sample-code/display-map/) サンプルをご確認ください。


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

2. `_MainAppState` クラスの build メソッド内で返される `MaterialApp` ウィジェットを削除します。 このコードは Flutter create テンプレートによって生成されたもので、次項でマップを含むウィジェットを返すコードに置き換えられます。

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

5. `_MainAppState` 内で、何も返さない新しいメソッド `onMapViewReady()` を定義します。

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

6. 新しいメソッド内で、final 変数 `map` を定義し、ArcGIS Topographic ベースマップ スタイルを持つ [`ArcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMap-class.html) インスタンスに初期化します。
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

7. ArcGIS マップ ビュー コントローラーの [`arcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapViewController/arcGISMap.html) プロパティーを `map` に設定します。 さらに、[`setViewpoint()`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/GeoViewController/setViewpoint.html) を呼び出して、富士山にズームします。

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

富士山を中心に、地形図のベースマップ層が表示された地図が表示されます。地図ビューをピンチ、ドラッグ、またはダブルタップして、地図を閲覧してください。

---

または、以下の手順に従ってチュートリアルの解答をダウンロードすることもできます。

## オプション 2:完成したソリューションをダウンロードする

1. [こちら](https://developers.arcgis.com/flutter/zips/display-a-map-solution.zip)をクリックしファイルをダウンロードし、コンピュータ内の任意の場所に解凍してください。
2. VS Code で、プロジェクトを開いてください。

ダウンロードしたソリューションには認証情報が含まれていないため、[認証の設定](#認証の設定) セクションで作成した開発者資格情報を追加する必要があります。

### ソリューションに開発者資格情報を設定する

アプリ ユーザーが ArcGIS の位置情報サービスにアクセスできるようにするには、[認証の設定](#認証の設定) ステップで作成した開発者資格情報を使用して、リソースへのリクエストを認証します。

#### API キーを設定する

1. VS Codeで、`lib/main.dart` を開きます。

2. `main()` 関数で、[ArcGISEnvironment.apiKey](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISEnvironment/apiKey.html) の値をアクセス トークンに設定します。

    ```dart
    void main() {

         ArcGISEnvironment.apiKey = ''; // アクセス トークンをここに記入します。 //追加

        runApp(const MainApp());
    }
    ```

    {{% notice info %}}

    このチュートリアルでは便宜上、アクセス トークンをコードに直接格納しています。アクセス トークンをソース コードに格納することはベスト プラクティスではありません。

    {{% /notice %}}

### アプリを実行する

以下の手順に従ってアプリケーションを実行してください。

1. VS Codeのターミナルで、次のコマンドを実行してください。
    ```shell
    flutter pub upgrade
    ```

2. 実行します。
    ```shell
    dart run arcgis_maps install
    ```

3. Android エミュレーター、iOS シミュレーター、または物理的なデバイスが設定され、実行されていることを確認します。
4. VS Codeで、[Run] > [Run Without Debugging] を選択します。

富士山を中心に、地形図のベースマップ層が表示された地図が表示されます。地図ビューをピンチ、ドラッグ、またはダブルタップして、地図を閲覧してください。

---

アプリの動作が確認できたら [ArcGIS の セキュリティーと認証について学びましょう！](../../security)

