+++
title = "Kotlin"
description = "ArcGIS Maps SDK for Kotlin を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight =7
aliases = ["/create-startup-app-android/"]
+++

出典：ArcGIS Maps SDK for Kotlin - Tutorials - [Display a map](https://developers.arcgis.com/kotlin/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for Kotlin を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src = "https://apps.esrij.com/arcgis-dev/guide/img/startup-android200.0/display_map.png" width = "300px">


マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで 1 つ以上のデータ レイヤーを追加できます。マップ ビューを使用し、場所とズーム レベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形図ベースマップ レイヤーを使用して、富士山付近を表示する地図を作成します。

{{< callout >}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{< /callout >}}


## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/swift/reference/system-requirements/)を満たしていることを確認します。
3. Kotlin で Android 開発をするための IDE。

{{< callout >}}

このチュートリアル アプリを作成するには、最新の安定板 Android Studio を使用することが推奨されます。ただし、以下の手順で説明されているコードは Kotlin をサポートする最新の Android IDE であれば、どれでも動作するはずです。

{{< /callout >}}

## 認証の設定

このチュートリアルで使用するセキュアな ArcGIS ロケーション サービスにアクセスするには、ArcGIS Location Platform または ArcGIS Online アカウントを使用して、API キー認証またはユーザー認証を実装する必要があります。

このチュートリアルでは、**API キー認証**または**ユーザー認証**を実装することができます。以下の違いを比較してください。

{{<tabs items = "API キー認証, ユーザー認証">}}
    {{<tab>}}
   * ユーザーはサインインする必要がありません。
   * 適切な権限を持つ API キーの認証情報を作成する必要があります。
   * API キーは長期間のアクセス トークンです。
   * サービス使用料は API キーの所有者/開発者に請求されます。
   * 実装が最も簡単な認証方法です。
   * 新規の ArcGIS 開発者に推奨される方法です。

    詳しくは [API キー認証](https://developers.arcgis.com/kotlin/security-and-authentication/#api-key-authentication)をご覧ください。

    このチュートリアルで使用するセキュアなリソースにアクセスする権限を持つ、新しい API キーのアクセス トークンを作成します。

   1. [API キーの作成](../../get-api-key/)のチュートリアルを完了し、以下の権限を持つ API キーを作成します。  
          - **Privileges**
            - **Location services > Basemaps**
   2. **API キーのアクセス トークン** をコピーし、安全な場所に貼り付けます。これは後のステップで使用します。
    {{</tab>}}

    {{<tab>}}
   * ユーザーは、ArcGIS アカウントでサインインする必要があります。
   * ユーザー アカウントには、アプリケーションで使用する ArcGIS サービスにアクセスする権限が必要です。
   * OAuth 認証情報の作成が必要です。
   * アプリケーションは、リダイレクト URL とクライアント ID を使用します。
   * サービスの使用料は、アプリケーションにサインインしたユーザーの組織に請求されます。

    詳しくは、[ユーザー認証](https://developers.arcgis.com/kotlin/security-and-authentication/#user-authentication)をご覧ください。

    このチュートリアルで使用するセキュアなリソースにアクセスするための新しい OAuth 認証情報を作成します。

   1. [ユーザー認証用の OAuth 認証情報を作成する](https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/tutorials/create-oauth-credentials-user-auth/)チュートリアルを完了します。

   2. **ClientID** と **RedirectURL** をコピーして安全な場所に貼り付けます。これらは後のステップで使用します。

    このアプリケーションにアクセスするすべてのユーザーには、ベースマップ スタイル サービスにアクセスするためのアカウント権限が必要です。
    {{</tab>}}
{{</ tabs>}}

{{< callout >}}

**セキュリティと認証ガイド** : 認証の種類について詳しくは、[認証の種類](../../security/)をご覧ください。

{{< /callout >}}

## 開発またはダウンロード
このチュートリアルを完了するには、2 つの選択肢があります。
1. [オプション 1:コードを開発する](#オプション-1コードを開発する) か
2. [オプション 2:完成したソリューションをダウンロードする](#オプション-2完成したソリューションをダウンロードする)

## オプション 1:コードを開発する

### 新しい Android Studio プロジェクトを作成する
Android Studio を使用してアプリを作成し、API を参照するように構成します。
1. Android Studio を開きます。
    * [Welcome to Android Studio] ウィンドウで [New Project] をクリックします。  
    または、メニュー バーで [File] → [New] → [New Project] をクリックします。
    * [Create New Project] ウィンドウで、[Phone and Tablet] タブが選択されていることを確認してから、[Empty Activity] を選択して、[Next] をクリックします。
    * 次のウィンドウで、以下の項目を設定し、[Finish] をクリックします。
        * **Name**: `Tutorial`
        * **Package name**： com.example.app に変更します。または、組織に合わせて変更してください。 
        * **Save location**: 新しいフォルダーに設定します。
        * **Minimum SDK**: API 28 ("Pie"; Android 9.0)
        * **Build configuration language**: Kotlin DSL (build.gradle.kts)

2. [プロジェクト] のツール ウィンドウで、現在のビューが [Android] であることを確認してください。チュートリアルの説明では、そのビューを参照しています。

    ビュー名が [Android] 以外の名前 （[プロジェクト]や[パッケージ]など） の場合、プロジェクト ツール ウィンドウのタイトル バーの左端のコントロールをクリックし、リストから [Android] を選択します。
    <img src = "https://apps.esrij.com/arcgis-dev/guide/img/startup-android200.0/display-a-map-android-view.png" widgh = "300px">

3. [Android] ビューから、[Gradle Scripts] > [build.gradle.kts (Project: Tutorial)] を開きます。ファイルの内容を次のコードに置き換えます。

    ```gradle {filename = "build.gradle.kts (Project: Tutorial)"}
    // すべてのサブプロジェクト/モジュールに共通の構成オプションを追加できる最上位のビルド ファイル
    plugins {
        alias(libs.plugins.android.application) apply false
        alias(libs.plugins.kotlin.android) apply false
        alias(libs.plugins.kotlin.compose) apply false
    }
    ```

4. [Android] ビューから、[Gradle Scripts] > [build.gradle.kts (Module: app)] を開きます。ファイルの内容を次のコードに置き換えます。

    ```gradle {filename = "build.gradle.kts (Project: Tutorial)"}
    plugins {
        alias(libs.plugins.android.application)
        alias(libs.plugins.kotlin.android)
        alias(libs.plugins.kotlin.compose)
    }

    android {
        namespace = "com.example.app"
        compileSdk = libs.versions.compileSdk.get().toInt()

        defaultConfig {
            applicationId = "com.example.app"
            minSdk = libs.versions.minSdk.get().toInt()
            targetSdk = libs.versions.targetSdk.get().toInt()
            versionCode = 1
            versionName = "1.0"
            testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
            vectorDrawables {
                useSupportLibrary = true
            }
        }

        buildTypes {
            release {
                isMinifyEnabled = false
                proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            }
        }
        compileOptions {
            sourceCompatibility = JavaVersion.VERSION_17
            targetCompatibility = JavaVersion.VERSION_17
        }
        kotlinOptions {
            jvmTarget = "17"
        }
        buildFeatures {
            compose = true
        }
        packaging {
            resources {
                excludes += "/META-INF/{AL2.0,LGPL2.1}"
            }
        }
    }

    dependencies {

        implementation(libs.androidx.core.ktx)
        implementation(libs.androidx.lifecycle.runtime.ktx)
        implementation(libs.androidx.activity.compose)
        implementation(platform(libs.androidx.compose.bom))
        implementation(libs.androidx.ui)
        implementation(libs.androidx.ui.graphics)
        implementation(libs.androidx.ui.tooling.preview)
        implementation(libs.androidx.material3)
        testImplementation(libs.junit)
        androidTestImplementation(libs.androidx.junit)
        androidTestImplementation(libs.androidx.espresso.core)
        androidTestImplementation(platform(libs.androidx.compose.bom))
        androidTestImplementation(libs.androidx.ui.test.junit4)
        debugImplementation(libs.androidx.ui.tooling)
        debugImplementation(libs.androidx.ui.test.manifest)

        // ArcGIS Maps for Kotlin - SDK dependency
        implementation(libs.arcgis.maps.kotlin)
        // Toolkit dependencies
        implementation(platform(libs.arcgis.maps.kotlin.toolkit.bom))
        implementation(libs.arcgis.maps.kotlin.toolkit.geoview.compose)
        implementation(libs.arcgis.maps.kotlin.toolkit.authentication)

    }
    ```

    Kotlin 2.0+ では、[Compose Compiler Gradle](https://developer.android.com/develop/ui/compose/compiler) プラグインが必要です。このプラグインは、`build.gradle.kts(Module :app)`の `plugins` ブロックで `alias(libs.plugins.kotlin.compose)` として参照され、`libs.versions.toml` ファイルでは `kotlin-compose = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }` として宣言されています。Compose Compiler Gradle プラグインと Kotlin Android プラグインのバージョンは同じです。

	2.0 より前の Kotlin バージョンを使用している場合は、Compose コンパイラーと Kotlin コンパイラーのバージョンが互換性があることを確認する必要があります。詳細については、[Compose to Kotlin Compatibility Map](https://developer.android.com/jetpack/androidx/releases/compose-kotlin) を参照してください。

5. [Android] ビューから、[Gradle Scripts] > [libs.versions.toml] を開きます。`[version]` セクションで、ArcGIS Maps SDK for Kotlin のバージョン番号を宣言します。また、`[libraries]` セクションには、以下のライブラリの宣言を追加します。
   * ArcGIS Maps SDK for Kotlin SDK
   * ArcGIS Maps SDK for Kotlin Toolkit BOM
   * アプリで使用するすべてのツールキット コンポーネント。マップビューまたはシーンビューを表示するには、コンポーザブルな [`MapView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) と[`SceneView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-scene-view.html) を含む `geoview-compose` モジュールの宣言が必要です。ユーザー認証を実装するには、`authentication` モジュールが必要です。

    Toolkit BOM のバージョンは、宣言したすべての Toolkit コンポーネントに適用されます。

    [Gradle バージョン カタログ](https://developer.android.com/build/migrate-to-catalogs)は依存関係のバージョンを宣言するための標準的な Android のアプローチです。`build.gradle.kts` でバージョン番号を指定したり、`version.gradle` でバージョン番号を列挙するよりも推奨されます。Android Studio の最近のリリースでは、[New Project Wizard] がこの標準をサポートする `build.gradle.kts` と `gradle/libs.version.toml` ファイルを生成します。

    Gradle バージョン カタログでは、BOM ファイルを使用して、BOM 内のすべての成果物に対して単一のバージョン番号を指定することもできます。詳細については、ArcGIS Maps SDK for Kotlin Toolkit の `README` の [`Using the BOM`](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit/blob/main/README.md#using-the-bom) を参照してください。

    ```toml {filename = "gradle/libs.versions.toml"}
    [versions]
    arcgisMapsKotlin = "200.8.0"

    [libraries]
    arcgis-maps-kotlin = { group = "com.esri", name = "arcgis-maps-kotlin", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-bom = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-bom", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-geoview-compose = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-geoview-compose" }
    arcgis-maps-kotlin-toolkit-authentication = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-authentication" }
    ```

    {{< callout type = "important">}}

    `libs.versions.toml` を手で編集しないでください。代わりに、以下のコードを展開し、展開した内容をすべてコピーして `libs.versions.toml` ファイルに貼り付け、新規プロジェクト ウィザードで生成された元の内容を置き換えてください。

    ```toml {filename = "gradle/libs.versions.toml"}
    [versions]
    arcgisMapsKotlin = "200.8.0"

    # Version numbers added by Android Studio New Project Wizard
    agp = "8.9.2"
    kotlin = "2.1.20"
    coreKtx = "1.16.0"
    junit = "4.13.2"
    junitVersion = "1.2.1"
    espressoCore = "3.6.1"
    lifecycleRuntimeKtx = "2.8.7"
    activityCompose = "1.10.1"
    composeBom = "2025.04.00"

    # Other version numbers
    compileSdk = "36"
    minSdk = "28"
    targetSdk = "36"

    [libraries]
    arcgis-maps-kotlin = { group = "com.esri", name = "arcgis-maps-kotlin", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-bom = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-bom", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-geoview-compose = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-geoview-compose" }
    arcgis-maps-kotlin-toolkit-authentication = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-authentication" }

    androidx-core-ktx = { group = "androidx.core", name = "core-ktx", version.ref = "coreKtx" }
    junit = { group = "junit", name = "junit", version.ref = "junit" }
    androidx-junit = { group = "androidx.test.ext", name = "junit", version.ref = "junitVersion" }
    androidx-espresso-core = { group = "androidx.test.espresso", name = "espresso-core", version.ref = "espressoCore" }
    androidx-lifecycle-runtime-ktx = { group = "androidx.lifecycle", name = "lifecycle-runtime-ktx", version.ref = "lifecycleRuntimeKtx" }
    androidx-activity-compose = { group = "androidx.activity", name = "activity-compose", version.ref = "activityCompose" }
    androidx-compose-bom = { group = "androidx.compose", name = "compose-bom", version.ref = "composeBom" }
    androidx-ui = { group = "androidx.compose.ui", name = "ui" }
    androidx-ui-graphics = { group = "androidx.compose.ui", name = "ui-graphics" }
    androidx-ui-tooling = { group = "androidx.compose.ui", name = "ui-tooling" }
    androidx-ui-tooling-preview = { group = "androidx.compose.ui", name = "ui-tooling-preview" }
    androidx-ui-test-manifest = { group = "androidx.compose.ui", name = "ui-test-manifest" }
    androidx-ui-test-junit4 = { group = "androidx.compose.ui", name = "ui-test-junit4" }
    androidx-material3 = { group = "androidx.compose.material3", name = "material3" }

    [plugins]
    android-application = { id = "com.android.application", version.ref = "agp" }
    kotlin-android = { id = "org.jetbrains.kotlin.android", version.ref = "kotlin" }
    kotlin-compose = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }
    ```
    {{< /callout >}}

6. [Android] ビューから、[Gradle Scripts] > [settings.gradle.kts] を開きます。ファイルの内容を次のコードに置き換えます。

    ```gradle {filename = "settings.gradle.kts (Tutorial)"}
    pluginManagement {
        repositories {
            google {
                content {
                    includeGroupByRegex("com\\.android.*")
                    includeGroupByRegex("com\\.google.*")
                    includeGroupByRegex("androidx.*")
                }
            }

            mavenCentral()
            gradlePluginPortal()
        }
    }

    dependencyResolutionManagement {
        repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
        repositories {
            google()
            mavenCentral()
            maven { url = uri("https://esri.jfrog.io/artifactory/arcgis") }
        }
    }

    rootProject.name = "Tutorial"
    include(":app")
    ```

7. Gradle の変更を同期します。[Sync now] プロンプトをクリックするか、ツール バーの更新アイコン ([Sync Project with Gradle Files]) をクリックします。同期に数分かかるかもしれません。

8. [Android] ビューから、[app] > [manifests] > [AndroidManifest.xml] を開きます。Android マニフェストを更新して、インターネット接続を許可します。

    これらの新しい要素を `manifest` 要素内に挿入します。 他のステートメントを変更または削除しないでください。

    今後のチュートリアルで追加する ArcGIS の機能によっては、マニフェストに追加のアクセス許可を追加する必要がある可能性があります。

    ```xml {filename = "AndroidManifest.xml"}
    <manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <!--追加開始-->
    <uses-permission android:name="android.permission.INTERNET"/>
    <!--追加終了-->

    <application
        ・・・
    ```


### マップを作成する
1. [Android] ビューから、[app] > [Kotlin+java] > [com.example.app] を右クリックし、リストから [New] > [package] を選択します。パッケージ名に **com.example.app.screens** と入力し、キーボードの **Enter** キーを押します。このステップで、すべての UI ファイルを含む新しいパッケージが作成されます。

2. 作成した **screens** パッケージを右クリックし、リストから [New] > [Kotlin Class/File] を選択します。ポップアップ ウィンドウで [File] を選択し、ファイル名に **MainScreen** と入力し、キーボードの **Enter** キーを押します。

3. *MainScreen.kt* で、Android Studio によって自動的に挿入されたコード行をすべて削除します。次に、以下のオプトイン アノテーション、パッケージ名、インポートを追加します。

    {{< callout type = "warning">}}

    以下のコード ブロックでコンポーザブル関数 [com.arcgismaps.tookit.geoviewcompose.MapView](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) をインポートしていることを確認してください。これは [ArcGIS Maps SDK for Kotlin Toolkit](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit) で定義されています。コンポーザブルに対応したコードでは ArcGIS Maps SDK API の [com.arcgismaps.mapping.view.MapView](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping.view/-map-view/index.html) という名前のクラスは使用しないでください。

    {{< /callout >}}

    ```kt {filename = "MainScreen.kt"}
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
    import com.arcgismaps.mapping.BasemapStyle
    import com.arcgismaps.mapping.Viewpoint
    import com.arcgismaps.toolkit.geoviewcompose.MapView
    import com.example.app.R
    ```

4. [`ArcGISMap`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を返す `createMap()` という名前のトップ レベル関数を作成します。

    ```kt {filename = "MainScreen.kt"}
    // 追加開始
    fun createMap(): ArcGISMap {

    }
    // 追加終了
    ```

5. [`BasemapStyle.ArcGISTopographic`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-basemap-style/-arc-g-i-s-topographic/index.html) を使用して [`ArcGISMap`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を作成し、マップ上で `apply{}` を呼び出します。この関数は [`ArcGISMap`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を返します。

    `apply {}` の詳細については Kotlin の [Scope functions](https://kotlinlang.org/docs/scope-functions.html) を参照してください。

    ```kt {filename = "MainScreen.kt"}
    fun createMap(): ArcGISMap {

        // 追加開始
        return ArcGISMap(BasemapStyle.ArcGISTopographic).apply {

        }
        // 追加終了

    }
    ```

6. `apply` ブロックで、x (経度) と y (緯度) の座標と縮尺を持つ [`Viewpoint`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-viewpoint/index.html) を作成します。この Viewpoint を [`ArcGISMap`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) の `initialViewpoint` プロパティに割り当てます。  
また、ベースマップのデフォルトのラベル表示は英語のため、日本語に変更します。

    ```kt {filename = "MainScreen.kt"}
    fun createMap(): ArcGISMap {

        // 追加開始
        val basemapStyleParams = BasemapStyleParameters()
        basemapStyleParams.languageStrategy = BasemapStyleLanguageStrategy.Specific(Locale("ja"))
        // 追加終了

        // 追加修正開始
        return ArcGISMap(basemap = Basemap(BasemapStyle.ArcGISTopographic, basemapStyleParameters = basemapStyleParams)).apply {
            initialViewpoint = Viewpoint(
                latitude = 35.360626,
                longitude = 138.727363,
                scale = 200000.0
            )
        // 追加修正終了
        }

    }
    ```

### マップを保持する MainScreen を作成する
1. [`MapView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) を呼び出す `MainScreen` という名前のコンポーザブル関数を作成します。

    ```kt {filename = "MainScreen.kt"}
    // 追加開始
    @Composable
    fun MainScreen() {

    }
    // 追加終了

    fun createMap(): ArcGISMap {
        ・・・
    ```

2. [`remember`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#remember(kotlin.Function0)) ブロックを追加し、その中で `createMap()` を呼び出します。そして `remember` を `map` というローカル変数に割り当てます。
    
    トップ レベルのコンポーザブル関数 [`remember`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#remember(kotlin.Function0)) は再構成時に状態を保持するために使用されます。

    ```kt {filename = "MainScreen.kt"}
    @Composable
    fun MainScreen() {

        // 追加開始
        val map = remember {
            createMap()
        }
        // 追加終了

    }
    ```

3. Android Jetpack Compose からいくつかのコンポーザブル関数を呼び出します。[`Scaffold`](https://developer.android.com/jetpack/compose/components/scaffold) を呼び出し、アプリ名 (`R.string.app_name`) を含む [`Text`](https://developer.android.com/jetpack/compose/text) で [`TopAppBar`](https://developer.android.com/jetpack/compose/components/app-bars) を渡します。

    ```kt {filename = "MainScreen.kt"}
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
4. [`Scaffold`](https://developer.android.com/jetpack/compose/components/scaffold) の末尾のラムダで、[ArcGIS Maps SDK for Kotlin Toolkit](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit) で定義されている [`MapView`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) コンポーザブルを呼び出し、最大サイズとデフォルトのパディングを持つ [Modifier](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier) を設定します。そして、`map` を `arcGISMap` パラメーターとして渡します。

    ```kt {filename = "MainScreen.kt"}
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
1. [app] > [kotlin+java] > [com.example.app] の **MainActivity.kt** を開きます。ファイル内のコードをすべて削除します。パッケージ宣言、import 文、 `MainActivity` クラスを追加します。

    ```kt {filename = "MainActivity.kt"}
    //追加開始
    package com.example.app

    import android.os.Bundle
    import androidx.activity.ComponentActivity
    import androidx.activity.compose.setContent
    import androidx.activity.enableEdgeToEdge
    import com.arcgismaps.ApiKey
    import com.arcgismaps.ArcGISEnvironment
    import com.arcgismaps.httpcore.authentication.OAuthUserConfiguration
    import com.arcgismaps.toolkit.authentication.AuthenticatorState
    import com.arcgismaps.toolkit.authentication.DialogAuthenticator
    import com.example.app.screens.MainScreen
    import com.example.app.ui.theme.TutorialTheme

    class MainActivity : ComponentActivity() {

    }
    //追加終了
    ```

2. [`onCreate()`](https://developer.android.com/guide/components/activities/activity-lifecycle) ライフサイクル関数の `setContent` ブロックでは、デフォルトのテーマが適用されたコンポーザブル関数 `MainScreen` を呼び出します。これを行うには、`onCreate()` に以下のコードを追加します。

    ```kt {filename = "MainActivity.kt"}
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

### 開発者認証情報を設定する
アプリのユーザーが ArcGIS Location Services にアクセスできるようにするには、[認証の設定](#認証の設定) ステップで作成した開発者認証情報を使用して、リソースへの要求を認証します。

{{<tabs items = "API キー認証, ユーザー認証">}}
    {{<tab>}}
    API キーを使用すると、ArcGIS Online でホストされているサービス、Web マップ、および Web シーンにアクセスできるようになります。

   1. **Android Studio** の [Android] ビューで、[app] > [kotlin+java] > [com.example.app] > [MainActivity] を開きます。
   2. `MainActivity` クラスの [`onCreate()`](https://developer.android.com/guide/components/activities/activity-lifecycle) ライフサイクル メソッドで、[`ApiKey.create()`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-api-key/-companion/create.html) を呼び出して [`ArcGISEnvironment.apiKey`](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-arc-g-i-s-environment/api-key.html) プロパティを設定します。**API キーのアクセス トークン**を文字列として渡し、二重引用符を忘れないでください。これは `setContent` ブロックの前に行います。

            ```kt {filename = "MainActivity.kt"}
            class MainActivity : ComponentActivity() {
                override fun onCreate(savedInstanceState: Bundle?) {
                    super.onCreate(savedInstanceState)
                    //追加開始
                    ArcGISEnvironment.apiKey = ApiKey.create("YOUR_ACCESS_TOKEN")
                    //追加終了
                    enableEdgeToEdge()
                    setContent {
                        TutorialTheme {
                            MainScreen()
                        }
                    }
                }
            }
            ```
    {{< callout >}}

    **ベスト プラクティス**: アクセス トークンは、このチュートリアルの便宜のためにコードに直接格納されています。本番環境では、認証情報をソース コードに直接保存しないでください。

    {{</callout >}}
    {{</tab>}}

    {{<tab>}}

   1. **Android Studio** の [Android] ビューで、[app] > [kotlin+java] > [com.example.app] > [MainActivity] を開きます。`MainActivity` クラスで、[ArcGIS Maps SDK for Kotlin Toolkit](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit) の [authentication](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit/tree/main/toolkit/authentication) モジュール `AuthenticatorState` のインスタンスを作成します。これを `setContent` ブロックの前に追加します。

            ```kt {filename = "MainActivity.kt"}
            class MainActivity : ComponentActivity() {
                //追加開始
                private val authenticatorState = AuthenticatorState()
                //追加終了
                override fun onCreate(savedInstanceState: Bundle?) {
                    super.onCreate(savedInstanceState)
                    enableEdgeToEdge()
                    setContent {
                        TutorialTheme {
                            MainScreen()
                        }
                    }
                }
            }
            ```

   2. `MainActivity` クラスの [`onCreate()`](https://developer.android.com/guide/components/activities/activity-lifecycle) ライフサイクル メソッドで、`OAuthUserConfiguration` をインスタンス化して `authenticatorState.oAuthUserConfiguration` プロパティを設定します。以前のステップで作成した clientId と redirectURL を渡します。  
    <br>
    redirectURL は、scheme と host コンポーネントで構成されます。リダイレクト URL の形式は `scheme://host` です。たとえば、リダイレクト URL が `myscheme://myhost` の場合、スキームは `myscheme`、ホストは `myhost` となります。[認証の設定](#認証の設定)ステップの`ユーザー認証`の部分で、アプリに指定した **RedirectURL** を使用する必要があります。

            ```kt {filename = "MainActivity.kt"}
            override fun onCreate(savedInstanceState: Bundle?) {
                super.onCreate(savedInstanceState)

                //追加開始
                authenticatorState.oAuthUserConfiguration = OAuthUserConfiguration(
                
                    portalUrl = "https://www.arcgis.com",
                    clientId = "YOUR_CLIENT_ID",
                    redirectUrl = "YOUR_REDIRECT_URL"

                )
                //追加終了

                enableEdgeToEdge()

                setContent {
                    TutorialTheme {
                        MainScreen()

                    }
                }
            }
            ```

   3. `setContent` ブロックで、[`DialogAuthenticator`](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.authentication/-dialog-authenticator.html) コンポーザブル関数を呼び出し、`authenticatorState` を渡します。`DialogAuthenticator` 組み込み関数を、`MainScreen()` 組み込み関数の後で呼び出します。

            ```kt {filename = "MainActivity.kt"}
            override fun onCreate(savedInstanceState: Bundle?) {
                super.onCreate(savedInstanceState)

                authenticatorState.oAuthUserConfiguration = OAuthUserConfiguration(
                
                    portalUrl = "https://www.arcgis.com",
                    clientId = "YOUR_CLIENT_ID",
                    redirectUrl = "YOUR_REDIRECT_URL"

                )

                enableEdgeToEdge()

                setContent {
                    TutorialTheme {
                        MainScreen()

                        //追加開始
                        DialogAuthenticator(authenticatorState)
                        //追加終了

                    }
                }
            }
            ```

   4. [app] > [manifests] > [AndroidManifest.xml] を開きます。OAuth ユーザー サインイン アクティビティーを宣言する `<activity>` タグを追加します。**RedirectURL** のスキームとホストを使用して、`android:scheme` と `android:host` を設定します。  
redirectURL は scheme と host コンポーネントで構成されます。リダイレクト URL のフォーマットは `scheme://host` です。たとえば、リダイレクト URL が `myscheme://myhost` の場合、スキームは `myscheme`、ホストは `myhost` となります。[認証の設定](#認証の設定)ステップの`ユーザー認証`の部分で、アプリに指定した **RedirectURL** を使用する必要があります。

            ```xml {filename = "AndroidManifest.xml"}
            </activity>     
            <!--追加開始-->
            <activity
                android:name="com.arcgismaps.toolkit.authentication.OAuthUserSignInActivity"
                android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
                android:exported="true"
                android:launchMode="singleTop" >
                <intent-filter>
                    <action android:name="android.intent.action.VIEW" />        
                    <category android:name="android.intent.category.DEFAULT" />
                    <category android:name="android.intent.category.BROWSABLE" />       
                    <data
                        android:scheme="your_redirect_url_scheme"
                        android:host="your_redirect_url_host" />        
                </intent-filter>
            </activity>
            <!--追加終了-->
            ```
    {{< callout >}}

    **ベスト プラクティス**:  OAuth 認証情報は、このチュートリアルの便宜のためにコードに直接保存されています。本番環境では、認証情報をソースコードに直接保存しないでください。

    {{</callout >}}

    {{</tab>}}
{{</tabs>}}

### アプリを実行する
1. [Run] > [Run] > [app] をクリックして、アプリを実行します。

    Android Studio では、アプリを実行するのに、実際の Android 端末と Android エミュレータの 2 通りの方法があります。

    #### Android デバイス
    パソコンと Android 端末を、USB または Wi-Fi で接続します。詳しくは、「[Android デバイスを接続する方法](https://developer.android.com/codelabs/basic-android-kotlin-compose-connect-device#0)」をご覧ください。

    #### Android エミュレーター
    Android エミュレーターで動作させるための AVD(Android Virtual Device) を作成します。 詳しくは、「[Android Emulator 上でアプリを実行する](https://developer.android.com/studio/run/emulator)」をご覧ください。

    #### デバイスの選択
    Android Studio でアプリをビルドして実行する場合、まずデバイスを選択する必要があります。Android Studio のツール バーから、現在利用可能なデバイス（仮想および物理の両方）のドロップダウン リストにアクセスできます。
    <img src = https://apps.esrij.com/arcgis-dev/guide/img/startup-android200.0/currently-selected-android-virtual-device.png>

    ツール バーのリストにアクセスできない場合は、[Tools] → [Device Manader] をクリックします。

    富士山を中心に、地形ベースマップ レイヤーが追加されたマップが表示されます。マップ ビュー上でマウス ホイールをダブル クリック、ドラッグ、およびスクロールして、マップを操作します。

---
あるいは、以下のチュートリアル ソリューションをダウンロードすることもできます。

## オプション 2:完成したソリューションをダウンロードする

1. [Download solution](https://developers.arcgis.com/kotlin/zips/display-a-map.zip) をクリックしてください。
2. マシンの任意の場所にファイルを解凍します。
3. **Android Studio** を起動します。
4. [File] > [Open...] に進みます。ソリューション フォルダーに移動し、[開く]をクリックします。  
  **Windows の場合**  
  [Welcome to Android Studio] ダイアログが表示されたら、[開く]をクリックし、ソリューション フォルダーに移動します。次に、[開く]をクリックします。

ダウンロードしたソリューションには認証情報が含まれていないため、[認証の設定](#認証の設定)セクションで作成した開発者認証情報を追加する必要があります。

### ソリューションに開発者認証情報を設定する
アプリのユーザが ArcGIS 位置情報サービスにアクセスできるようにするには、[認証の設定](#認証の設定)ステップで作成した開発者認証情報を使用して、リソースへの要求を認証します。  

{{<tabs items = "API キー認証,ユーザー認証">}}

    {{<tab>}}

   1. **Android Studio** の [Android] ビューで、[app] > [kotlin+java] > [com.example.app] > [MainActivity] を開きます。`AuthenticationMode` を `.API_KEY` に設定します。

            ```kt {filename = "MainActivity.kt"}
            class MainActivity : ComponentActivity() {  
                private enum class AuthenticationMode { API_KEY, USER_AUTH }

                //追加開始
                private val authenticationMode = AuthenticationMode.API_KEY
                //追加終了  
                private val authenticatorState = AuthenticatorState()   
                override fun onCreate(savedInstanceState: Bundle?) {
                    super.onCreate(savedInstanceState)  
                    when (authenticationMode) {
                        AuthenticationMode.API_KEY -> { 
                            ArcGISEnvironment.apiKey =   ApiKey.create("YOUR_ACCESS_TOKEN") 
                        }   
                        AuthenticationMode.USER_AUTH -> {
                            authenticatorState.oAuthUserConfiguration =   OAuthUserConfiguration(
                                portalUrl = "https://www.arcgis.com",   
                                clientId = "YOUR_CLIENT_ID",
                                redirectUrl = "YOUR_REDIRECT_URL"   
                            )   
                        }
                    }   
                    enableEdgeToEdge()  
                    setContent {
                        TutorialTheme {
                            MainScreen()    
                            if (authenticationMode == AuthenticationMode.USER_AUTH) {
                                DialogAuthenticator(authenticatorState)
                            }   
                        }
                    }
                }   
            }
            ```

   2. `apiKey` プロパティに API キーのアクセス トークンを設定します。  
            ```kt {filename = "MainActivity.kt"}
            override fun onCreate(savedInstanceState: Bundle?) {
                super.onCreate(savedInstanceState)
                when (authenticationMode) {
                    AuthenticationMode.API_KEY -> { 
                        //追加開始
                        ArcGISEnvironment.apiKey = Apikey.create("YOUR_ACCESS_TOKEN")
                        //追加終了  
                    }
            ``` 
    {{< callout >}} 

    **ベスト プラクティス**: アクセストークンは、このチュートリアルの便宜のためにコードに直接格納されています。本番環境では、認証情報をソース コードに直接保存しないでください。

    {{< /callout >}}

    {{</tab>}}
    {{<tab>}}
   1. **Android Studio** の [Android] ビューで、[app] > [kotlin+java] > [com.example.app] > [MainActivity] を開きます。`AuthenticationMode` を `.USER_AUTH` に設定します。

            ```kt {filename = "MainActivity.kt"}
            class MainActivity : ComponentActivity() {
                private enum class AuthenticationMode { API_KEY, USER_AUTH }

                //追加開始
                private val authenticationMode = AuthenticationMode.USER_AUTH
                //追加終了
            ```

   2. `clientID` と `redirectURL` の値を設定します。[認証の設定](#認証の設定)ステップの`ユーザー認証`パートでアプリに提供した **RedirectURL** を使用する必要があります。

            ```kt {filename = "MainActivity.kt"}
                        AuthenticationMode.USER_AUTH -> {
                            authenticatorState.oAuthUserConfiguration = OAuthUserConfiguration(
                                portalUrl = "https://www.arcgis.com",   
                                //追加開始
                                clientId = "YOUR_CLIENT_ID",
                                redirectUrl = "YOUR_REDIRECT_URL"
                                //追加終了
                            )
            ``` 
   3. [app] > [manifests] > [AndroidManifest.xml] を開きます。
   4. `android:scheme` と `android:host`は、**RedirectURL** の scheme と host を使って設定します。  
    **RedirectURL** は scheme と host コンポーネントで構成されます。リダイレクト URL のフォーマットは `scheme://host` です。たとえば、リダイレクト URL が `myscheme://myhost` の場合、スキームは `myscheme`、ホストは `myhost` となります。

            ```xml <filename = "AndroidManifest.xml">
                        <category android:name="android.intent.category.BROWSABLE" />   
                        <!--追加開始-->
                        <data
                            android:scheme="your_redirect_url_scheme"
                            android:host="your_redirect_url_host" />
                        <!--追加終了--> 
                    </intent-filter>
            ``` 
    {{< callout >}}

    **ベスト プラクティス**: OAuth 認証情報は、このチュートリアルの便宜のためにコードに直接保存されています。本番環境では、認証情報をソースコードに直接保存しないでください。

    {{< /callout >}}

    {{</tab>}}
{{</tabs>}}

### アプリを実行する

[Run] > [Run] > [app] をクリックしてアプリを実行します。

富士山を中心とした地形ベースマップ レイヤーの地図が表示されるはずです。マップ ビューをピンチ、ドラッグ、ダブルタップしてマップを探索します。

---

## 次のチュートリアル
これらのチュートリアルでは、追加の [API 機能](https://developers.arcgis.com/kotlin/key-features/)、[ArcGIS ロケーション サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/)、および [ArcGIS ツール](https://developers.arcgis.com/documentation/mapping-and-location-services/tools/)の使用方法について説明します。(英語ページ)

* [ポイント、ライン、およびポリゴンの追加](https://developers.arcgis.com/kotlin/maps-2d/tutorials/add-a-point-line-and-polygon/)
* [フィーチャ レイヤの追加](https://developers.arcgis.com/kotlin/layers/tutorials/add-a-feature-layer/)