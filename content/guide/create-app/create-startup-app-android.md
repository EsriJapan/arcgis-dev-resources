+++
title = "Android"
description = "ArcGIS Maps SDK for Kotlin を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight =4
aliases = ["/create-startup-app-android/"]
+++

出典：ArcGIS Maps SDK for Kotlin - Tutorials - [Display a map](https://developers.arcgis.com/kotlin/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for Kotlin を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src = "https://apps.esrij.com/arcgis-dev/guide/img/startup-android200.0/display_map.png" width = "300px">


マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで 1 つ以上のデータ レイヤーを追加できます。マップ ビューを使用し、場所とズーム レベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形図ベースマップ レイヤーを使用して、富士山付近を表示する地図を作成します。

{{% notice note %}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{% /notice %}}

<!-- 
## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/) (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](https://esrijapan.github.io/arcgis-dev-resources/guide/get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/kotlin/reference/system-requirements/)を満たしていることを確認します。
3. Kotlin で Android 開発をするための IDE。

注: このチュートリアルの[完成版のコード](https://developers.arcgis.com/kotlin/zips/display-a-map.zip)は、Android Studio Chipmunk 2021.2.1 Patch 2 で作成されています。ただし、以下の手順で説明するコードは、Android Studio のその後のバージョンを含む、Kotlin をサポートする任意の Android IDE で動作するはずです。**Android Studio Flamingo 2022.2.1 以降を使用する場合は、Android Studio プロジェクトの作成時に「Empty Views Activity」テンプレートを使用してください。** -->

## ステップ

### 新しい Android Studio プロジェクトを作成します
Android Studio を使用してアプリを作成し、API を参照するように構成します。
1. Android Studio を開きます。
    * [Welcome to Android Studio] ウィンドウで [New Project] をクリックします。<br />
    または、メニューバーで [File] → [New] → [New Project] をクリックします。
    * [Create New Project] ウィンドウで、[Phone and Tablet] タブが選択されていることを確認してから、[Empty Activity] を選択して、[Next] をクリックします。
    * 次のウィンドウで、以下の項目を設定します。
        * Name: Display a map
        * Package name： com.example.app に変更します。または、組織に合わせて変更してください。 
        * Save location: 新しいフォルダに設定します。
        * Minimum SDK: API 26 ("Oreo"; Android 8.0)
        * Build configuration language: Kotlin DSL (build.gradle.kts)

2. プロジェクトのツール ウィンドウで、現在のビューが Android であることを確認してください。チュートリアルの説明では、そのビューを参照しています。

    ビュー名が Android 以外の名前 （プロジェクトやパッケージなど） の場合、プロジェクト ツール ウィンドウのタイトルバーの左端のコントロールをクリックし、リストから Android を選択します。
    <img src = "https://developers.arcgis.com/kotlin/static/8b96f6edb5d00aef8f0e7b3a31b34a86/811d1/display-a-map-android-view.png" widgh = "300px">

3. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [build.gradle.kts (Project: Display_a_map)] を開きます。ファイルの内容を次のコードに置き換えます。

    build.gradle.kts (Project: Display_a_map)

    ```gradle
    // すべてのサブプロジェクト/モジュールに共通の構成オプションを追加できる最上位のビルド ファイル
    plugins {
        id("com.android.application") version "8.2.0" apply false
        id("org.jetbrains.kotlin.android") version "1.9.10" apply false
    }
    ```

4. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [build.gradle.kts (Module: app)] を開きます。ファイルの内容を次のコードに置き換えます。

    build.gradle.kts (Module: Display_a_map)

    ```gradle
        plugins {
            id("com.android.application")
            id("org.jetbrains.kotlin.android")
        }

        android {
            compileSdk = 34

            defaultConfig {
                applicationId = "com.example.app"
                minSdk = 26
                targetSdk = 34
                versionCode = 1
                versionName = "1.0"

                testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
            }

            buildTypes {
                release {
                    isMinifyEnabled = false
                    proguardFiles(
                        getDefaultProguardFile("proguard-android-optimize.txt"),
                        "proguard-rules.pro"
                    )
                }
            }
            compileOptions {
                sourceCompatibility = JavaVersion.VERSION_17
                targetCompatibility = JavaVersion.VERSION_17
            }

            buildFeatures {
                compose = true
                buildConfig = true
            }

            composeOptions {
                kotlinCompilerExtensionVersion = "1.5.3"
            }

            kotlinOptions {
                jvmTarget = "17"
            }

            packaging {
                resources {
                    excludes += "/META-INF/DEPENDENCIES"
                }
            }

            namespace = "com.example.app"
        }

        dependencies {
            implementation("androidx.core:core-ktx:1.12.0")
            implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")
            implementation("androidx.activity:activity-compose:1.8.2")
            // Jetpack Compose の BOM
            implementation(platform("androidx.compose:compose-bom:2023.10.01"))
            // Jetpack Compose の依存関係
            implementation("androidx.compose.ui:ui")
            implementation("androidx.compose.material3:material3")
            // ArcGIS Map Kotlin SDK の依存関係
            implementation("com.esri:arcgis-maps-kotlin:200.4.0")
            // Toolkit の依存関係
            implementation(platform("com.esri:arcgis-maps-kotlin-toolkit-bom:200.4.0"))
            implementation("com.esri:arcgis-maps-kotlin-toolkit-geoview-compose")
        }
    ```

5. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [settings.gradle.kts] を開きます。ファイルの内容を次のコードに置き換えます。

    settings.gradle.kts (Display a map)

    ```gradle
    pluginManagement {
        repositories {
            google()
            mavenCentral()
            gradlePluginPortal()
        }
    }

    dependencyResolutionManagement {
        @Suppress("UnstableApiUsage")
        repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
        @Suppress("UnstableApiUsage")
        repositories {
            google()
            mavenCentral()
            maven { url = uri("https://esri.jfrog.io/artifactory/arcgis") }
        }
    }

    rootProject.name = "Display a map"
    include(":app")
    ```

6. Gradle の変更を同期します。[Sync now] プロンプトをクリックするか、ツールバーの更新アイコン(Sync Project with Gradle Files)をクリックします。同期に数分かかるかもしれません。 

7. プロジェクト ツール ウィンドウから、[app] > [manifests] > [AndroidManifest.xml] を開きます。Android マニフェストを更新して、インターネット接続を許可します。

    これらの新しい要素を `manifest` 要素内に挿入します。 他のステートメントを変更または削除しないでください。

    今後追加する ArcGIS の機能によっては、マニフェストに追加のアクセス許可を追加する必要がある可能性があります。

    AndroidManifest.xml

    ```xml
    <manifest xmlns:android="http://schemas.android.com/apk/res/android">

    // 追加開始
    <uses-permission android:name="android.permission.INTERNET"/>
    // 追加終了
    ```


### マップを作成する
1. プロジェクト ツール ウィンドウから、[app] > [Kotlin+java] > [com.example.app] を右クリックし、リストから [New] > [package] を選択します。パッケージ名に <b>com.example.app.screens</b> と入力し、キーボードの [Enter] キーを押します。このステップで、すべての UI ファイルを含む新しいパッケージが作成されます。

2. 作成した <b>screens</b> パッケージを右クリックし、リストから [New] > [Kotlin Class/File] を選択します。ポップアップ ウィンドウで [File] を選択し、ファイル名に <b>MainScreen</b> と入力し、キーボードの [Enter] キーを押します。

3. MainScreen.kt で、Android Studio によって自動的に挿入されたコード行をすべて削除します。次に、以下のオプトイン アノテーション、パッケージ名、インポートを追加します。

    {{% notice note %}}

    以下のコード ブロックでコンポーザブル関数 [com.arcgismaps.tookit.geoviewcompose.MapView](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) をインポートしていることを確認してください。これは [ArcGIS Maps SDK for Kotlin Toolkit](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit) で定義されています。コンポーザブルに対応したコードでは ArcGIS Maps SDK API の [com.arcgismaps.mapping.view.MapView](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping.view/-map-view/index.html) という名前のクラスは使用しないでください。

    {{% /notice %}}

    MainScreen.kt

    ```kt
    @file:OptIn(ExperimentalMaterial3Api::class)

    package com.example.app.screens

    import androidx.compose.foundation.layout.fillMaxSize
    import androidx.compose.foundation.layout.padding
    import androidx.compose.material3.ExperimentalMaterial3Api
    import androidx.compose.material3.Scaffold
    import androidx.compose.material3.Text
    import androidx.compose.material3.TopAppBar
    import androidx.compose.runtime.Composable
    import androidx.compose.runtime.remember
    import androidx.compose.ui.Modifier
    import androidx.compose.ui.res.stringResource
    import com.arcgismaps.mapping.ArcGISMap
    import com.arcgismaps.mapping.Basemap
    import com.arcgismaps.mapping.BasemapStyle
    import com.arcgismaps.mapping.BasemapStyleLanguageStrategy
    import com.arcgismaps.mapping.BasemapStyleParameters
    import com.arcgismaps.mapping.Viewpoint
    import com.arcgismaps.toolkit.geoviewcompose.MapView
    import com.example.app.R
    import java.util.Locale
    ```
4. [ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を返す `createMap()` という名前のトップ レベル関数を作成します。

    MainScreen.kt

    ```kt
    fun createMap(): ArcGISMap {

    }
    ```

5. BasemapStyle.ArcGISTopographic を使用して [ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を作成し、マップ上で apply{} を呼び出します。この関数は [ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を返します。

    apply{} の詳細については Kotlin の [Scope functions](https://kotlinlang.org/docs/scope-functions.html) を参照してください。

    MainScreen.kt

    ```kt
    fun createMap(): ArcGISMap {

        // 追加開始
        return ArcGISMap(BasemapStyle.ArcGISTopographic).apply {

        }
        // 追加終了

    }
    ```

6. `apply` ブロックで、x (経度) と y (緯度) の座標と縮尺を持つ [Viewpoint](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-viewpoint/index.html) を作成します。この Viewpoint を [ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) の `initialViewpoint` プロパティに割り当てます。
    また、ベースマップのデフォルトのラベル表示は英語のため、日本語に変更します。

    MainScreen.kt

    ```kt
    fun createMap(): ArcGISMap {

        // 追加開始
        val basemapStyleParams = BasemapStyleParameters()
        basemapStyleParams.languageStrategy = BasemapStyleLanguageStrategy.Specific(Locale("ja"))
        // 追加終了        

        return ArcGISMap(Basemap(BasemapStyle.ArcGISTopographic, basemapStyleParams)).apply {

            // 追加開始
            initialViewpoint = Viewpoint(
                latitude = 35.360626,
                longitude = 138.727363,

                scale = 200000.0

            )
            // 追加終了

        }

    }
    ```

### マップを保持する MainScreen を作成する。
1. [MapView](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) を呼び出す `MainScreen` という名前のコンポーザブル関数を作成します。

    MainScreen.kt

    ```kt
    // 追加開始
    @Composable
    fun MainScreen() {

    }
    // 追加終了

    fun createMap(): ArcGISMap {
        ・・・
    ```

2. [remember](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#remember(kotlin.Function0)) ブロックを追加し、その中で `createMap()` を呼び出します。そして `remember` を `map` というローカル変数に割り当てます。
    
    トップ レベルのコンポーザブル関数は再構成時に状態を保持するために使用されます。

    MainScreen.kt

    ```kt
    @Composable
    fun MainScreen() {

        // 追加開始
        val map = remember {
            createMap()
        }
        // 追加終了

    }
    ```

3. Android Jetpack Compose からいくつかのコンポーザブル関数を呼び出します。[Scaffold](https://developer.android.com/jetpack/compose/components/scaffold) を呼び出し、アプリ名 (`R.string.app_name`) を含む [Text](https://developer.android.com/jetpack/compose/text) で [TopAppBar](https://developer.android.com/jetpack/compose/components/app-bars) を渡します。

    MainScreen.kt

    ```kt
    @Composable
    fun MainScreen() {

        val map = remember {
            createMap()
        }

        // 追加開始
        Scaffold(
            topBar = { TopAppBar(title = { Text(text = stringResource(id = R.string.app_name)) }) }
        ) {

        }
        // 追加終了

    }
    ```
4. [Scaffold](https://developer.android.com/jetpack/compose/components/scaffold) の末尾のラムダで、[ArcGIS Maps SDK for Kotlin Toolkit](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit) で定義されている [MapView](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) コンポーザブルを呼び出し、最大サイズとデフォルトのパディングを持つ [Modifier](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier) を設定します。そして、`map` を `arcGISMap` パラメーターとして渡します。

    MainScreen.kt

    ```kt
    @Composable
    fun MainScreen() {

        val map = remember {
            createMap()
        }

        Scaffold(
            topBar = { TopAppBar(title = { Text(text = stringResource(id = R.string.app_name)) }) }
        ) {

            // 追加開始
            MapView(
                modifier = Modifier.fillMaxSize().padding(it),
                arcGISMap = map
            )
            // 追加終了

        }

    }
    ```

### MainActivity クラス内で MainScreen を呼び出す
1. [app] > [kotlin+java] > [com.example.app] の <b>MainActivity.kt</b> を開きます。パッケージ宣言 (最初の行) と `MainActivity` クラスの定義以外のすべての行を削除します。

    MainActivity.kt

    ```kt
    package com.example.app

    class MainActivity : ComponentActivity() {

    }
    ```

2. MainActivity.kt に import 文を追加します。

    MainActivity.kt

    ```kt
    package com.example.app

    // 追加開始
    import android.os.Bundle
    import androidx.activity.ComponentActivity
    import androidx.activity.compose.setContent
    import com.arcgismaps.ApiKey
    import com.arcgismaps.ArcGISEnvironment
    import com.example.app.screens.MainScreen
    import com.example.app.ui.theme.DisplayAMapTheme
    // 追加終了

    class MainActivity : ComponentActivity() {

    }
    ```

3. [onCreate()](https://developer.android.com/guide/components/activities/activity-lifecycle) ライフサイクル関数の `setContent()` ブロックでは、デフォルトのテーマ設定を適用して、コンポーザブル関数である `MainScreen` を呼び出します。これを行うには、`onCreate()` に以下のコードを追加します。

    MainActivity.kt

    ```kt
    class MainActivity : ComponentActivity() {

        // 追加開始
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)

            setContent {
                DisplayAMapTheme {
                    MainScreen()
                }
            }

        }
        // 追加終了
    }
    ```

### API キーを設定する
API キーを使用すると、ArcGIS Online でホストされているサービス、Web マップ、および Web シーンにアクセスできるようになります。

1. `MainActivity` クラスで `setApiKey()` メソッドを作成し、[ApiKey.create()](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-api-key/-companion/create.html) を呼び出し、API キーを文字列として渡すことで、[ArcGISEnvironment.apiKey](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-arc-g-i-s-environment/api-key.html) プロパティを設定します。引用符を忘れないでください。

    MainActivity.kt

    ```kt
    class MainActivity : ComponentActivity() {
        ・・・
    }

    // 追加開始
    private fun setApiKey() {

        ArcGISEnvironment.apiKey = ApiKey.create("API キー")

    }
    // 追加終了
    ```

2. onCreate() ライフサイクル メソッド内で setContent{} の前に setApiKey() を呼び出します。

    MainActivity.kt

    ```kt
    class MainActivity : ComponentActivity() {

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)

            // 追加開始
            setApiKey()
            // 追加終了

            setContent {
                DisplayAMapTheme {
                    MainScreen()
                }
            }

        }

    }
    ```

### アプリを実行する
1. [Run] > [Run] > [app] をクリックして、アプリを実行します。

    Android Studio では、アプリを実行するのに、実際の Android 端末と Android エミュレータの 2 通りの方法があります。

    #### Android デバイス
    パソコンと Android 端末を、USB または Wi-Fi で接続します。詳しくは、「[Android デバイスを接続する方法](https://developer.android.com/codelabs/basic-android-kotlin-compose-connect-device#0)」をご覧ください。

    #### Android エミュレータ
    Android エミュレータで動作させるための AVD(Android Virtual Device)を作成します。 詳しくは、「[Android Emulator 上でアプリを実行する](https://developer.android.com/studio/run/emulator)」をご覧ください。

    #### デバイスの選択
    Android Studio でアプリをビルドして実行する場合、まずデバイスを選択する必要があります。Android Studio のツールバーから、現在利用可能なデバイス（仮想および物理の両方）のドロップダウンリストにアクセスできます。
    <img src = https://developers.arcgis.com/kotlin/static/681e1101a5d24322f1b4044d8a8b6c1d/e7c18/currently-selected-android-virtual-device.png>
    
    ツールバーのリストにアクセスできない場合は、[Tools] → [Device Manader] をクリックします。

    富士山を中心に、地形ベースマップレイヤーが追加されたマップが表示されます。マップビュー上でマウス ホイールをダブルクリック、ドラッグ、およびスクロールして、マップを操作します。

### Web マップを表示する
「[Web マップの作成](https://esrijapan.github.io/arcgis-dev-resources/guide/services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップを [ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) クラスから参照することができます。

1. プロジェクト ツール ウィンドウから [app] > [Kotlin+java] > [com.example.app] > [screens] の <b>MainScreen.kt</b> を開きます。
2. MainScreen.kt に以下のインポートを追加します。

    MainScreen.kt

    ```kt
    import com.arcgismaps.mapping.PortalItem
    import com.arcgismaps.portal.Portal
    ```

3. createMap() 関数を以下のように記述します。

    MainScreen.kt

    ```kt
    fun createMap(): ArcGISMap {

        val portal = Portal(
            url = "https://www.arcgis.com", // 使用する ArcGIS ポータルの URL を記述
            connection = Portal.Connection.Anonymous // ArcGIS ポータルへのアクセス方法を設定
        )

        val portalItem = PortalItem(
            portal = portal,
            itemId = "<Web マップの ID>"
        )

        return ArcGISMap(item = portalItem)

    }
    ```

---

アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](https://esrijapan.github.io/arcgis-dev-resources/guide/security/)