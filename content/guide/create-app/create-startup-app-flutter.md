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

{{< callout >}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{< /callout >}}  

{{< callout >}}

Flutter のバージョンは、Esri のリリース サイクルの間に頻繁に更新されるため、パッケージの新しいリリースごとに、その時点で利用可能な最新の Flutter バージョンに対してビルドおよび検証を行っています。Esri のリリース期間の間に Flutter の新しいバージョンがリリースされた場合は、最新のSDKとの互換性に関するガイダンスを共有します。  
Flutter 3.44.x に関する注意事項と依存関係の要件につきましては、[こちら](https://community.esri.com/t5/arcgis-maps-sdks-native-blog/arcgis-maps-sdk-for-flutter-300-0-0-compatibility/ba-p/1706472)をご覧ください。

{{< /callout >}}

<!--下記記述はバージョンを追えないのでコメントアウト。問い合わせ用に残しておく-->
<!--
{{< callout >}}

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

{{< /callout >}}
-->

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/flutter/system-requirements/)を満たしており、[Flutter の開発環境](../../../tips/flutter/install-flutter/) が整っていることを確認します。
3. Flutter 用の IDE。[VS Code](https://code.visualstudio.com/) を推奨しています。

## 認証の設定

このチュートリアルで使用するセキュアな ArcGIS ロケーション サービスにアクセスするには、ArcGIS Location Platform または ArcGIS Online アカウントを使用して、API キー認証を実装する必要があります。

{{<tabs>}}
    {{<tab name = "API キー認証">}}
   * ユーザーはサインインする必要がありません。
   * 適切な権限を持つ API キーの認証情報を作成する必要があります。
   * API キーは長期間のアクセス トークンです。
   * サービス使用料は、API キーの所有者/開発者に請求されます。
   * 実装が最も簡単な認証方法です。
   * 新規の ArcGIS 開発者に推奨される方法です。

    詳しくは [API キー認証](https://developers.arcgis.com/kotlin/security-and-authentication/#api-key-authentication)をご覧ください。

    このチュートリアルで使用するセキュアなリソースにアクセスする権限を持つ、新しい API キーのアクセス トークンを作成します。

   1. [API キーの作成](../../get-api-key/)のチュートリアルを完了し、以下の権限を持つ API キーを作成します。  
          - **Privileges**
            - **Location services > Basemaps**
   2. **API キーのアクセス トークン** をコピーし、安全な場所に貼り付けます。これは後のステップで使用します。
    {{</tab>}}

    {{<tab  name = "ユーザー認証">}}

   * ユーザーは、ArcGIS アカウントでサインインする必要があります。
   * ユーザー アカウントには、アプリケーションで使用する ArcGIS サービスにアクセスする権限が必要です。
   * OAuth 認証情報の作成が必要です。
   * アプリケーションには、リダイレクト URL とクライアント ID を使用します。
   * サービスの使用料は、アプリケーションにサインインしたユーザーの組織に請求されます。

    詳しくは、[ユーザー認証](https://developers.arcgis.com/flutter/security-and-authentication/types-of-authentication/#user-authentication)をご覧ください。

    このチュートリアルで使用するセキュアなリソースにアクセスするための新しい OAuth 認証情報を作成します。

   1. [ユーザー認証用の OAuth 認証情報を作成する](https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/tutorials/create-oauth-credentials-user-auth/)チュートリアルを完了し、 **ClientID** と **RedirectURL** を取得してください。

   2. **ClientID** と **RedirectURL** をコピーして安全な場所に貼り付けます。これらは後のステップで使用します。

    このアプリケーションにアクセスするすべてのユーザーには、ベースマップ スタイル サービスにアクセスするためのアカウント権限が必要です。

    {{< callout >}}

    **セキュリティと認証ガイド** : 認証の種類について詳しくは、[認証の種類](../../security/)をご覧ください。

    {{</callout >}}
    {{</tab>}}
{{</tabs>}}

## 開発またはダウンロード
このチュートリアルを完了するには、2 つの選択肢があります。
1. [オプション 1: コードを開発する](#オプション-1-コードを開発する)
2. [オプション 2: 完成したソリューションをダウンロードする](#オプション-2-完成したソリューションをダウンロードする)


## オプション 1: コードを開発する
### 新しい Flutter アプリを作成する
1. **VS Code** を起動し、ウェルカム タブで [Open...] を選択します。プロジェクトを保存したい場所を選択してください。
2. [View]>[Terminal] に移動してください。
3. ターミナル ウィンドウで、次のコマンドを実行して **display_a_map** という名前の新しい Flutter アプリを作成します。必要なターゲット プラットフォームと、組織名 **com.example.app** を設定してください。
    ```powershell
    flutter create -e display_a_map --platforms ios,android --org com.example.app
    ```

### テンプレート コードをリファクタリングする
ArcGIS Maps SDK for Flutter を使用する際、データの変更に応じて UI を更新するなど、アプリケーションの状態を更新する必要が生じることはよくあります。アプリがこうした処理に対応できるよう、ステートフル ウィジェットを実装します。  
ステートレスなウィジェットの実装を使用して地図を表示することも可能です。詳細は [Display map](https://developers.arcgis.com/flutter/sample-code/display-map/) サンプルを参照してください。

1. VS Code で、**lib/main.dart** を開きます。
2. `main()` 関数内で、[`runApp()`](https://api.flutter.dev/flutter/widgets/runApp.html) 内に [`MaterialApp`](https://api.flutter.dev/flutter/material/MaterialApp-class.html) をインスタンス化し、名前付き引数 [`home`](https://api.flutter.dev/flutter/material/MaterialApp/home.html) に `MainApp` のインスタンスを設定します。
    ```dart {name = "main.dart"}
    void main() {
        runApp(

            const MaterialApp(home: MainApp()), //変更

        );
    }
    ```
3. テンプレートの `MainApp` クラスの定義を、[`StatefulWidget`](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) を継承するようにリファクタリングします。[`StatelessWidget`](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html) キーワードにマウスを合わせ、右クリックして [Refactor...] を選択し、[Convert to StatefulWidget] を選んでコードをリファクタリングします。 
    ```dart {name = "main.dart"}
    class MainApp extends StatefulWidget { //変更

        const MainApp({super.key});

        @override
        State<MainApp> createState() => _MainAppState();//変更

    }

    //追加開始
    class _MainAppState extends State<MainApp> {
        @override
        Widget build(BuildContext context) {

            return const MaterialApp(
                home: Scaffold(body: Center(child: Text('Hello World!'))),
            );

        }
    }
    //追加終了
    ```
4. クラス `_MainAppState` の build メソッド内で返されている `MaterialApp` ウィジェットを削除してください。このコードは Flutter の作成テンプレートによって生成されたものであり、後の手順で、マップを含むウィジェットを返すコードに置き換えられます。
    ```dart {name = "main.dart"}
    class _MainAppState extends State<MainApp> {
        @override
        Widget build(BuildContext context) {

            //削除開始
            return const MaterialApp(
                home: Scaffold(body: Center(child: Text('Hello World!'))),
            );
            //削除終了

        }
    }
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
5. **main.dart** に戻ります。
6. `arcgis_maps` パッケージをインポートします。
    ```dart {name = "main.dart"}
    import 'package:arcgis_maps/arcgis_maps.dart';//追加
    ```
### プラットフォーム固有の構成
Android、iOS、またはその両方のアプリを開発する際、Flutter のツールセットでは、いくつかの設定バージョンに対してデフォルト値が設定されています。これらは、新しいプロジェクトを作成する際にあらかじめ設定されます。以下に示す更新内容は、最新バージョンの ArcGIS Maps SDK for Flutter パッケージを使用してアプリケーションをコンパイルするために、これらのデフォルト設定に変更を加える必要がある点です。詳細については、[システム要件](https://developers.arcgis.com/flutter/system-requirements/)のページをご覧ください。
{{< tabs >}}

    {{< tab  name="Android" >}}
   1. プロジェクトの `android/app/build.gradle.kts` ファイルを編集して、最小要件を更新します。

            ```gradle {filename = "build.gradle.kts"}
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

            ```xml {filename = "AndroidManifest.xml"}
            <manifest xmlns:android="http://schemas.android.com/apk/res/android">
                <uses-permission android:name="android.permission.INTERNET" /> <!-- 追加 -->
                <application
                    android:label="display_a_map"
                    android:name="${applicationName}"
                    android:icon="@mipmap/ic_launcher">
            ```
    {{< /tab >}}
    {{< tab name="iOS" >}}

   3. `ios/Podfile` ファイルを編集して iOS 17.0 を最小に設定します。 行のコメントを解除し、バージョン番号を更新します。

    	    ```ruby {filename = "podfile"}
    	    # Uncomment this line to define a global platform for your project
    	    platform :ios, '17.0'  #変更
    	    ```  

   4. `Runtimecore` pod と `arcgis_maps_ffi` pod を `Runner` ターゲット セクションに追加します。

    	    ```ruby {filename = "podfile"}
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

   5. `pod update` を使用して Pods を設定します。

            ```powershell
            cd ios && pod update && cd ..
            ```  
    {{< /tab >}}
{{< /tabs >}}

### 開発者資格情報を設定する

アプリ ユーザーが ArcGIS の位置情報サービスにアクセスできるようにするには、[認証の設定](#認証の設定) ステップで作成した開発者資格情報を使用して、リソースへのリクエストを認証します。

{{<tabs>}}
    {{<tab name = "API キー認証">}}
    API キーのアクセス トークンを [`ArcGISEnvironment`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISEnvironment-class.html) に渡してください。
   1. **main.dart** に戻ります。
   2. `main()` 関数で、[ArcGISEnvironment.apiKey](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISEnvironment/apiKey.html) の値をアクセス トークンに設定します。

            ```dart {filename = "main.dart"}
            void main() {
                ArcGISEnvironment.apiKey = ''; // アクセス トークンをここに記入します。 //追加
                runApp(const MainApp());
            }
            ```

    {{< callout >}}
    このチュートリアルでは便宜上、アクセス トークンをコードに直接格納しています。アクセス トークンをソース コードに格納することはベスト プラクティスではありません。
    {{< /callout >}}
    {{</tab>}}
    {{<tab name = "ユーザー認証">}}
    [`Authenticator`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator-class.html) ツールキット コンポーネントを使用して、OAuth 認証情報を管理してください。

   1. [手順](https://developers.arcgis.com/flutter/toolkit/#vs-code)に従って、アプリに「ArcGIS Maps SDK for Flutter Toolkit」パッケージを追加してください。
   2. `_MainAppState` クラス内に最終クラスのメンバー変数 `_oAuthUserConfiguration` を定義し、`portalUri`、`clientId`、`redirectUri` の値を指定して [`OAuthUserConfiguration`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/OAuthUserConfiguration-class.html) オブジェクトで初期化してください。
            ```dart {filename = "main.dart"}
            class _MainAppState extends State<MainApp> {
                
                //追加開始
                final _oAuthUserConfiguration = OAuthUserConfiguration(
                    portalUri: Uri.parse('https://www.arcgis.com'),
                    clientId: 'YOUR_CLIENT_ID',
                    redirectUri: Uri.parse('YOUR_REDIRECT_URL'),
                );
                //追加終了

                @override
                Widget build(BuildContext context) {

                }
            }
            ```
    {{< callout >}}
    このチュートリアルでは、便宜上、OAuth の認証情報をコード内に直接記述しています。本番環境では、認証情報をソース コード内に直接記述しないでください。
    {{< /callout >}}
   3. アプリケーションのサインアウト時に、認証情報のストアからすべてのトークンを無効化 [`Authenticator.revokeOAuthTokens()`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator/revokeOAuthTokens.html) し、すべての認証情報を消去 [`Authenticator.clearCredentials()`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator/clearCredentials.html) するコードを追加してください。
            ``` dart {filename = "main.dart"}
            class _MainAppState extends State<MainApp> {

                final _oAuthUserConfiguration = OAuthUserConfiguration(
                    portalUri: Uri.parse('https://www.arcgis.com'),
                    clientId: 'YOUR_CLIENT_ID',
                    redirectUri: Uri.parse('YOUR_REDIRECT_URL'),
                );

                //追加開始
                @override
                void dispose() {
                    Authenticator.revokeOAuthTokens().whenComplete(
                        Authenticator.clearCredentials,
                    );

                    super.dispose();
                }
                //追加終了

                @override
                Widget build(BuildContext context) {

                }
            }
            ```
            アプリケーションのサインアウト時には、アプリの要件に応じて、すべてのトークンを無効化し、認証情報ストアからすべての認証情報を削除することを検討してください。ツールキット コンポーネントを使用する際の詳細については、[`Authenticator`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator-class.html) のリファレンスを参照してください。  
   4. Android のみ、ユーザー認証にはシステム ブラウザーが必要です。プロジェクトの Android マニフェストに、以下のアクティビティーを追加してください。  
            ```xml {filename = "android/app/src/main/AndroidManifest.xml"}
            <activity
                android:name="com.linusu.flutter_web_auth_2.CallbackActivity"
                android:exported="true">
                <intent-filter android:label="flutter_web_auth_2">
                    <action android:name="android.intent.action.VIEW" />
                    <category android:name="android.intent.category.DEFAULT" />
                    <category android:name="android.intent.category.BROWSABLE" />
                    <data android:scheme="YOUR_CALLBACK_URL_SCHEME_HERE" />
                </intent-filter>
            </activity>
            ```
            `YOUR_CALLBACK_URL_SCHEME_HERE` を、先ほど[認証を設定した](#認証の設定)際に使用しダイレクト URL のスキームに置き換えてください。これは、ログイン フローが完了した後、ブラウザーがアプリに通信を戻すために必要です。  
            たとえば、**my-app://auth** のようなリダイレクト URL がある場合、スキームの値は **my-app** となります。この値が、アクティビティー内の `YOUR_CALLBACK_URL_SCHEME_HERE` を置き換えることになります。
    {{</tab>}}
{{</tabs>}}

### マップを追加する

地形図ベースマップ レイヤーを含むマップを作成します。 地図は富士山の付近とします。


1. `_MainAppState` クラスの内部で、最後のクラス メンバー変数 `_mapViewController` を定義し、[`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) クラスの [`createController()`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView/createController.html) を呼び出して [`ArcGISMapViewController`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapViewController-class.html) で初期化します。

    ArcGIS マップ ビュー コントローラーは、[`ArcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMap-class.html) で定義された 2 次元 (2D) 地理コンテンツを表示するユーザー インターフェース コントロールです。

    {{<tabs>}}
        {{<tab name = "API キー認証">}}

        ```dart {filename = "main.dart"}
        class _MainAppState extends State<MainApp> {

            final _mapViewController = ArcGISMapView.createController(); //追加

            @override
            Widget build(BuildContext context) {

            }

        }
        ```
        {{< /tab >}}

        {{<tab name = "ユーザー認証">}}

        ```dart {filename = "main.dart"}
        class _MainAppState extends State<MainApp> {

            final _mapViewController = ArcGISMapView.createController(); //追加

            final _oAuthUserConfiguration = OAuthUserConfiguration(
                portalUri: Uri.parse('https://www.arcgis.com'),
                clientId: 'YOUR_CLIENT_ID',
                redirectUri: Uri.parse('YOUR_REDIRECT_URL'),
            );

            @override
            void dispose() {
                Authenticator.revokeOAuthTokens().whenComplete(
                Authenticator.clearCredentials,
                );

                super.dispose();
            }

            @override
            Widget build(BuildContext context) {

            }
        }
        ```

        {{</tab>}}
    {{</tabs>}}

2. {{<tabs>}}
        {{<tab name = "API キー認証">}}
        
        build メソッド内で [`Scaffold`](https://api.flutter.dev/flutter/material/Scaffold-class.html)、[`Column`](https://api.flutter.dev/flutter/widgets/Column-class.html)、[`Expanded`](https://api.flutter.dev/flutter/widgets/Expanded-class.html) からなるウィジェット ツリーに [`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) ウィジェットを追加します。マップ ビューの名前付き引数 [`controllerProvider`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView/controllerProvider.html) をクラス メンバー変数 `_mapViewController` に設定し、[`onMapViewReady`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView/onMapViewReady.html) 引数を次に定義する引数と同じ名前の新しいメソッドに設定します。  

        [`Scaffold`](https://api.flutter.dev/flutter/material/Scaffold-class.html) ウィジェットは基本的な[マテリアル デザイン](https://m3.material.io/)のビジュアル レイアウト構造を提供し、[`Column`](https://api.flutter.dev/flutter/widgets/Column-class.html) ウィジェットは子ウィジェットを垂直配列で表示します。[`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) ウィジェットは、サイズが制限されたウィジェット内でのみ使用できます。 サイズが制限されていない状態で使用すると、アプリケーションは例外をスローします。 たとえば、`ArcGISMapView` を `Column` ウィジェット内で使用すると、サイズが制限されないため、このような例外が発生します。 代わりに、チュートリアルのこのステップで説明するように、`ArcGISMapView` を [`Expanded`](https://api.flutter.dev/flutter/widgets/Expanded-class.html) ウィジェットでラップして、適切な境界を提供することができます。
        ```csharp {filename = "main.dart"}
        class _MainAppState extends State<MainApp> {

            final _mapViewController = ArcGISMapView.createController(); //追加

            @override
            Widget build(BuildContext context) {

            }

        }
        ```
        {{< /tab >}}
        {{<tab name = "ユーザー認証">}}

        `build()` 内で、[`Scaffold`](https://api.flutter.dev/flutter/material/Scaffold-class.html)、[`Column`](https://api.flutter.dev/flutter/widgets/Column-class.html)、[`Expanded`](https://api.flutter.dev/flutter/widgets/Expanded-class.html)、[`Authenticator`]()、および [`ArcGISMapView`]() から構成されるウィジェット ツリーにウィジェットを追加します。authenticator の名前付き引数 `oAuthUserConfigurations` をクラス メンバー変数 `_oAuthUserConfiguration` に設定し、`ArcGISMapView` ウィジェットを authenticator の子として配置します。最後に、マップ ビューの名前付き引数 [`controllerProvider`]() をクラスのメンバー変数 `_mapViewController` に設定し、[`onMapViewReady`]() 引数を、引数と同じ名前の新しいメソッドに設定します。この新しいメソッドは次に定義します。

        [`Scaffold`](https://api.flutter.dev/flutter/material/Scaffold-class.html) ウィジェットは基本的な[マテリアル デザイン](https://m3.material.io/)の視覚的レイアウト構造を提供しますが、[`Column`](https://api.flutter.dev/flutter/widgets/Column-class.html) ウィジェットは子要素を縦方向の配列として表示します。[`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) ウィジェットは、サイズが制限されたウィジェット内でのみ使用できます。サイズが制限されていないウィジェットで使用すると、アプリケーションで例外が発生します。たとえば、`Column` ウィジェット内で `ArcGISMapView` を使用すると、サイズが無制限になるため、このような例外が発生します。代わりに、このチュートリアルのこのステップで示されているように、`ArcGISMapView` を [`Expanded`](https://api.flutter.dev/flutter/widgets/Expanded-class.html) ウィジェットでラップして、適切な境界を設定することができます。[`Authenticator`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator-class.html) はウィジェット ツリー内のどこにでも配置できますが、このチュートリアルでは `ArcGISMapView` ウィジェットの親として使用するのが最も理にかなっています。
        ```dart {filename = "main.dart"}
        class _MainAppState extends State<MainApp> {

            final _mapViewController = ArcGISMapView.createController();

            final _oAuthUserConfiguration = OAuthUserConfiguration(
                portalUri: Uri.parse('https://www.arcgis.com'),
                clientId: 'YOUR_CLIENT_ID',
                redirectUri: Uri.parse('YOUR_REDIRECT_URL'),
            );

            @override
            void dispose() {
                Authenticator.revokeOAuthTokens().whenComplete(
                    Authenticator.clearCredentials,
                );

                super.dispose();
            }

            @override
            Widget build(BuildContext context) {
                
                //追加開始
                return Scaffold(
                  body: Column(
                    children: [
                      Expanded(
                        child: Authenticator(
                          oAuthUserConfigurations: [_oAuthUserConfiguration],
                          child: ArcGISMapView(
                            controllerProvider: () => _mapViewController,
                            onMapViewReady: onMapViewReady,
                          ),
                        ),
                      ),
                    ],
                  ),
                );
                //追加終了

            }
        }
        ```
        {{</tab>}}
    {{</tabs>}}


1. `_MainAppState` 内で、何も返さない新しいメソッド `onMapViewReady()` を定義してください。


    ```csharp {filename = "main.dart"}
    //追加開始
    void onMapViewReady() {


    }
    //追加終了
    ```

2. 新しいメソッド内で final 変数 `map` を定義し、ArcGIS Topographic Basemap Style を使用して [`ArcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMap-class.html) として初期化します。

    ```csharp {filename = "main.dart"}
    void onMapViewReady() {

        final map = ArcGISMap.withBasemapStyle(BasemapStyle.arcGISTopographic);//追加
    }
    ```

3. ArcGIS マップビュー コントローラーの [`arcGISMap`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapViewController/arcGISMap.html) プロパティを `map` に設定します。さらに、[`setViewpoint()`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/GeoViewController/setViewpoint.html) を呼び出して、富士山にズームインします。

    縮尺はビューポイントを作成する上で不可欠な要素です。これは、マップをどの程度拡大して表示するかを決定します。縮尺とは、マップビュー上の測定値と実世界の測定値との比率のことです。この[変換ツール](https://developers.arcgis.com/documentation/mapping-and-location-services/reference/zoom-levels-and-scale/#conversion-tool)を使用して、ズームレベルに対する縮尺の仕組みを確認し、その関係についてさらに詳しく学びましょう。  

    ```csharp {filename = "main.dart"}
    void onMapViewReady() {

        final map = ArcGISMap.withBasemapStyle(BasemapStyle.arcGISTopographic);

        _mapViewController.arcGISMap = map;

        _mapViewController.setViewpoint(
            Viewpoint.withLatLongScale(
                latitude: 35.360626,
                longitude: 138.727363,
                scale: 200000.0,
            ),
        );

    }
    ```


### アプリを実行する
1. Android エミュレーター、iOS シミュレーター、または物理的なデバイスが設定され、実行されていることを確認します。
2. VS Codeで、[Run] > [Run Without Debugging] を選択します。

富士山を中心に、地形図のベースマップ層が表示された地図が表示されます。地図ビューをピンチ、ドラッグ、またはダブルタップして、地図を閲覧してください。

---
または、以下の手順に従ってチュートリアル ソリューションをダウンロードすることもできます。

## オプション 2: 完成したソリューションをダウンロードする

1. [こちら](https://developers.arcgis.com/flutter/zips/display-a-map-solution.zip)をクリックしファイルをダウンロードし、コンピュータ内の任意の場所に解凍してください。
2. VS Code で、プロジェクトを開いてください。

ダウンロードしたソリューションには認証情報が含まれていないため、[認証の設定](#認証の設定) セクションで作成した開発者資格情報を追加する必要があります。

### ソリューションに開発者資格情報を設定する

アプリ ユーザーが ArcGIS の位置情報サービスにアクセスできるようにするには、[認証の設定](#認証の設定) ステップで作成した開発者資格情報を使用して、リソースへのリクエストを認証します。

{{<tabs>}}

    {{<tab name = "API キー認証">}}

   1. VS Codeで、**lib/main.dart** を開きます。

   2. `main()` 関数で、[ArcGISEnvironment.apiKey](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISEnvironment/apiKey.html) の値をアクセス トークンに設定します。

            ```dart {filename = "main.dart"}
            void main() {
            
                 ArcGISEnvironment.apiKey = ''; // アクセス トークンをここに記入します。 //追加
        
                runApp(const MainApp());
            }
            ```

    {{< callout >}}

    このチュートリアルでは便宜上、アクセス トークンをコードに直接格納しています。アクセス トークンをソース コードに格納することはベスト プラクティスではありません。

    {{</callout >}}
    {{</tab>}}

    {{<tab name = "ユーザー認証">}}
    OAuth 認証情報を管理するために、[`Authenticator`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator-class.html) ツールキット コンポーネントを追加してください。

    1. 以下の[手順](https://developers.arcgis.com/flutter/toolkit/#vs-code)に従って、アプリに ArcGIS Maps SDK for Flutter Toolkit パッケージを追加してください
    2. **main.dart** に以下のコードを追加します。

        * `_MainAppState` クラス内に final クラス メンバー変数 `_oAuthUserConfiguration` を定義し、`portalUri`、`clientId`、`redirectUri` の値を渡して [`OAuthUserConfiguration`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/OAuthUserConfiguration-class.html) で初期化します。
        * アプリケーションのサインアウト時に、認証システムの資格情報ストアからすべてのトークン[`Authenticator.revokeOAuthTokens()`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator/revokeOAuthTokens.html) を無効化し、すべての資格情報 [`Authenticator.clearCredentials()`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator/clearCredentials.html) をクリアするコードを追加します。
        * `build()` 内の既存のウィジェット ツリーにおいて、[`ArcGISMapView`](https://developers.arcgis.com/flutter/api-reference/reference/arcgis_maps/ArcGISMapView-class.html) ウィジェットの親として [`Authenticator`](https://developers.arcgis.com/flutter/toolkit-api-reference/arcgis_maps_toolkit/Authenticator-class.html) ウィジェットを追加します。名前付きパラメーター `oAuthUserConfigurations` の値を、新しいメンバー変数 `_oAuthUserConfiguration` を含むリストに設定します。
        ```dart {filename = "main.dart"}
        class _MainAppState extends State<MainApp> {

            final _mapViewController = ArcGISMapView.createController();

            final _oAuthUserConfiguration = OAuthUserConfiguration(
                portalUri: Uri.parse('https://www.arcgis.com'),
                clientId: 'YOUR_CLIENT_ID',
                redirectUri: Uri.parse('YOUR_REDIRECT_URL'),
            );

            @override
            void dispose() {
                Authenticator.revokeOAuthTokens().whenComplete(
                    Authenticator.clearCredentials,
                );

                super.dispose();
            }

            @override
            Widget build(BuildContext context) {
        
                return Scaffold(
                    body: Column(
                        children: [
                            Expanded(
                                child: Authenticator(
                                    oAuthUserConfigurations: [_oAuthUserConfiguration],
                                    child: ArcGISMapView(
                                        controllerProvider: () => _mapViewController,
                                        onMapViewReady: onMapViewReady,
                                    ),
                                ),
                            ),
                        ],
                    ),
                );

            }
        }
        ```
    {{< callout >}}
    このチュートリアルでは便宜上、アクセス トークンをコードに直接格納しています。アクセス ークンをソース コードに格納することはベスト プラクティスではありません。
    {{</callout >}}
    3. Android のみ、ユーザー認証にはシステム ブラウザーが必要です。プロジェクトの Android マニフェストに、以下のアクティビティーを追加してください。
        ```xml {filename = "android/app/src/main/AndroidManifest.xml"}
         <!-- ... -->

        <activity
            android:name="com.linusu.flutter_web_auth_2.CallbackActivity"
            android:exported="true">
            <intent-filter android:label="flutter_web_auth_2">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="YOUR_CALLBACK_URL_SCHEME_HERE" />
            </intent-filter>
        </activity>

        <!-- ... -->
        ```

        `YOUR_CALLBACK_URL_SCHEME_HERE` を、先ほど[認証を設定](#認証の設定)した際に使用したリダイレクト URL のスキームに置き換えてください。これは、ログイン フローが完了した後、ブラウザーがアプリに通信を戻すために必要です。

        たとえば、**my-app://auth** のようなリダイレクト URL がある場合、スキームの値は **my-app** になります。この値が、アクティビティー内の `YOUR_CALLBACK_URL_SCHEME_HERE` を置き換えることになります。
    {{</tab>}}
{{</tabs>}}

### アプリを実行する

以下の手順に従ってアプリケーションを実行してください。

1. VS Codeのターミナルで、次のコマンドを実行してください。
    ```shell
    flutter pub upgrade
    ```

2. 次のコマンドを実行します。
    ```shell
    dart run arcgis_maps install
    ```

3. Android エミュレーター、iOS シミュレーター、または物理的なデバイスが設定され、実行されていることを確認します。
4. VS Codeで、[Run] > [Run Without Debugging] を選択します。

富士山を中心に、地形図のベースマップ層が表示された地図が表示されます。地図ビューをピンチ、ドラッグ、またはダブルタップして、地図を閲覧してください。

---

アプリの動作が確認できたら [ArcGIS の セキュリティーと認証について学びましょう！](../../security)

