+++
title = "Android"
description = "ArcGIS Maps SDK for Kotlin を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight =4
aliases = ["/create-startup-app-android/"]
+++

出典：ArcGIS Maps SDK for Kotlin - Tutorials - [Display a map](https://developers.arcgis.com/kotlin/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for Kotlin を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src = "https://apps.esrij.com/arcgis-dev/guide/img/startup-android100.0/display_map.png" width = "300px">


マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで 1 つ以上のデータ レイヤーを追加できます。マップ ビューを使用し、場所とズーム レベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベースマップ レイヤーを使用して、富士山付近を表示する地図を作成します。

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/) (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](https://esrijapan.github.io/arcgis-dev-resources/guide/get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/kotlin/reference/system-requirements/)を満たしていることを確認します。
3. Kotlin で Android 開発をするための IDE。このチュートリアルでは Android Studio を使用していますが、記述されたコードは Kotlin をサポートする任意の Android の IDE で動作します。

注: このチュートリアルの[完成版のコード](https://developers.arcgis.com/kotlin/zips/display-a-map.zip)は、Android Studio Chipmunk 2021.2.1 Patch 2 で作成されています。ただし、以下の手順で説明するコードは、Android Studio のその後のバージョンを含む、Kotlin をサポートする任意の Android IDE で動作するはずです。

## ステップ

### 新しい Android Studio プロジェクトを作成します。
Android Studio を使用してアプリを作成し、API を参照するように構成します。
1. Android Studio を開きます。
    * メニューバーで [File] → [New] → [New Project….] をクリックします。
    * [Create New Project] ウィンドウで、[Phone and Tablet] タブが選択されていることを確認してから、[Empty Activity] を選択して、[Next] をクリックします。
    * [Configure your project] ウィンドウで、以下の項目を設定します。
        * Name: Display a map
        * Package name： com.example.app に変更します。または、組織に合わせて変更してください。 
        * Save location: 新しいフォルダに設定します。
        * Language: Kotlin
        * Minimum SDK: API 26:Android 8.0 (O)

2. プロジェクトのツール ウィンドウで、現在のビューが Android であることを確認してください。チュートリアルの説明では、そのビューを参照しています。

    ビュー名が Android 以外の名前 （プロジェクトやパッケージなど） の場合、プロジェクト ツール ウィンドウのタイトルバーの左端のコントロールをクリックし、リストから Android を選択します。
    <img src = "https://developers.arcgis.com/kotlin/static/8b96f6edb5d00aef8f0e7b3a31b34a86/811d1/display-a-map-android-view.png" widgh = "300px">

3. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [build.gradle (Project: Display_a_map)] を開きます。ファイルの内容を次のコードに置き換えます。

    build.gradle (Project: Display_a_map)

    ```gradle
    // すべてのサブプロジェクト/モジュールに共通の構成オプションを追加できる最上位のビルド ファイル
    plugins {
        id 'com.android.application' version '7.3.1' apply false
        id 'com.android.library' version '7.3.1' apply false
        id 'org.jetbrains.kotlin.android' version '1.7.20' apply false
    }


    task clean(type: Delete) {
        delete rootProject.buildDir
    }
    ```

4. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [build.gradle (Module: app)] を開きます。ファイルの内容を次のコードに置き換えます。

    build.gradle (Module: Display_a_map)

    ```gradle
    plugins {
        id 'com.android.application'
        id 'org.jetbrains.kotlin.android'
    }

    android {
        compileSdk 33

        defaultConfig {
            applicationId "com.example.app"
            minSdk 26
            targetSdk 33
            versionCode 1
            versionName "1.0"

            testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
        }

        buildTypes {
            release {
                minifyEnabled false
                proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
            }
        }
        compileOptions {
            sourceCompatibility JavaVersion.VERSION_11
            targetCompatibility JavaVersion.VERSION_11
        }

        buildFeatures {
            dataBinding true
        }

        namespace 'com.example.app'

    }

    dependencies {
        implementation 'androidx.appcompat:appcompat:1.5.1'
        implementation 'com.google.android.material:material:1.7.0'
        implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
        implementation "com.esri:arcgis-maps-kotlin:200.2.0"
    }
    ```

5. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [settings.gradle] を開きます。ファイルの内容を次のコードに置き換えます。

    settings.gradle (Display a map)

    ```gradle
    pluginManagement {
        repositories {
            gradlePluginPortal()
            google()
            mavenCentral()
        }
    }

    dependencyResolutionManagement {
        repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
        repositories {
            google()
            mavenCentral()
            maven {
                url 'https://esri.jfrog.io/artifactory/arcgis'
            }
        }
    }

    rootProject.name = "Display a map"
    include ':app'
    ```

6. Gradle の変更を同期します。[Sync now] プロンプトをクリックするか、ツールバーの更新アイコン(Sync Project with Gradle Files)をクリックします。同期に数分かかるかもしれません。 

7. プロジェクト ツール ウィンドウから、[app] > [manifests] > [AndroidManifest.xml] を開きます。Android マニフェストを更新して、インターネット接続を許可します。

    これらの新しい要素を manifest 要素内に挿入します。 他のステートメントを変更または削除しないでください。

    今後追加する ArcGIS の機能によっては、マニフェストに追加のアクセス許可を追加する必要がある可能性があります。

    AndroidManifest.xml

    ```xml
    <manifest xmlns:android="http://schemas.android.com/apk/res/android">

    // 追加開始
    <uses-permission android:name="android.permission.INTERNET"/>
    // 追加終了
    ```

### インポートステートメントを追加する
[app] > [java] > [com.example.app MainActivity.kt] を開き、API を参照するためのインポート ステートメントを追加します。
    
MainActivity.kt

```kt
package com.example.app

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

// 追加開始
import android.util.Log
import android.widget.Toast
import androidx.databinding.DataBindingUtil
import com.arcgismaps.ApiKey
import com.arcgismaps.ArcGISEnvironment
import com.arcgismaps.mapping.ArcGISMap
import com.arcgismaps.mapping.BasemapStyle
import com.arcgismaps.mapping.Viewpoint
import com.arcgismaps.mapping.view.MapView
import com.example.app.databinding.ActivityMainBinding
// 追加終了

class MainActivity : AppCompatActivity() {
```

### マップビューの UI を追加する
マップビューは、マップを表示する UI コンポーネントです。 また、タッチジェスチャによるナビゲートなど、ユーザーによるマップの操作も処理します。XML を使用してマップビューを UI に追加し、メインアクティビティのソースコードで使用できるようにします。
1. [app] > [res] > [layout] > [activity_main.xml] で、TextView 要素全体を [MapView](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping.view/-map-view/index.html) 要素に置き換えます。

    XML コードが表示されない場合は、[Code] タブを選択してデザインモードを切り替え、エディターに XML コードを表示します。

    MapView 要素は、ArcGIS Maps SDK for Kotlin から [MapView](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping.view/-map-view/index.html) クラスのインスタンスを作成します。

    メインアクティビティソースコードでは、android:id 属性の値で宣言されている暗黙的なプロパティを使用してその [MapView](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping.view/-map-view/index.html) インスタンスにアクセスできます。この場合、プロパティの名前は mapView になります。

    activity_main.xml を下記のように置き換えます。

    activity_main.xml

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <layout xmlns:android="http://schemas.android.com/apk/res/android">

        <androidx.constraintlayout.widget.ConstraintLayout xmlns:tools="http://schemas.android.com/tools"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            tools:context=".MainActivity">

            <com.arcgismaps.mapping.view.MapView
                android:id="@+id/mapView"
                android:layout_width="match_parent"
                android:layout_height="match_parent" />

        </androidx.constraintlayout.widget.ConstraintLayout>
    </layout>
    ```

2. MainActivity.kt で、activityMainBinding という名前の遅延プロパティを作成します。 Android クラスの [DataBindingUtil](https://developer.android.com/reference/android/databinding/DataBindingUtil#setContentView(android.app.Activity,%20int)) を使用して、メイン アクティビティのコンテンツ ビューを特定のレイアウトに設定します。

    MainActivity.kt

    ```kt
    class MainActivity : AppCompatActivity() {

        // 追加開始
        private val activityMainBinding: ActivityMainBinding by lazy {
            DataBindingUtil.setContentView(this, R.layout.activity_main)
        }        
        // 追加終了
    ```

3. mapView という読み取り専用の変数を作成し、それを activity_main.xml で作成された mapView にバインドします。

    MainActivity.kt

    ```kt
    class MainActivity : AppCompatActivity() {
        
        private val activityMainBinding: ActivityMainBinding by lazy {
            DataBindingUtil.setContentView(this, R.layout.activity_main)
        }

        // 追加開始
        private val mapView: MapView by lazy {
            activityMainBinding.mapView
        }
        // 追加終了
    ```

### マップを追加する
マップビューを使用して、富士山を中心としたマップを表示します。マップには、地形ベースマップ レイヤーが含まれます。
1. MainActivity.kt で、MainActivity クラスに新しい setupMap() メソッドを追加し、[ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を作成します。
    
    [BasemapStyle.ArcGISTopographic](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-basemap-style/-arc-g-i-s-topographic/index.html) というベースマップスタイルを使用して [ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) を構成します。

    MainActivity.kt

    ```kt
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)

        }

        // 追加開始
        private fun setupMap() {

            val map = ArcGISMap(BasemapStyle.ArcGISTopographic)

        }
        // 追加終了

    }
    ```

2. mapView の map プロパティを [ArcGISMap](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-arc-g-i-s-map/index.html) に設定します。次に、[ViewPoint](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps.mapping/-viewpoint/index.html) を作成し、それを mapView に追加します。

    MainActivity.kt

    ```kt
        private fun setupMap() {

            val map = ArcGISMap(BasemapStyle.ArcGISTopographic)

            // 追加開始
            // レイアウトの MapView に表示されるマップを設定
            mapView.map = map

            mapView.setViewpoint(Viewpoint(35.360626, 138.727363, 200000.0))
            // 追加終了

        }

    }
    ```

3. [onCreate()](https://developer.android.com/reference/android/app/Activity#onCreate(android.os.Bundle)) メソッドで、setContentView(R.layout.activity_main) コードを探し、見つかった場合は削除します。

    Android Studio の New Project ウィザードを使用した場合、onCreate() ライフサイクル関数で setContentView(R.layout.activity_main) が記述されている可能性があります。 そのコードを削除する必要があります。その代わりに、前の手順で宣言した遅延プロパティ activityMainBinding を使用します。

4. [onCreate()](https://developer.android.com/reference/android/app/Activity#onCreate(android.os.Bundle)) メソッドで、lifecycle.addObserver() を呼び出し、マップ ビューを渡します。 次に、前の手順で定義した関数 setupMap() を呼び出します。

    MainActivity.kt

    ```kt
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // 追加開始
        lifecycle.addObserver(mapView)
        setupMap()
        // 追加終了

    }
    ```

### API キーを設定する
API キーは、ArcGIS Online でホストされているサービス、Web マップ、および Web シーンへのアクセスを可能にします。
1. [開発者用ダッシュボード](https://developers.arcgis.com/dashboard/)で、API キーを取得します。このチュートリアルでは、デフォルトの API キーを使用します。作成方法は「[API キーの取得](../../get-api-key/)」をご覧ください。

2. setApiKey() メソッドを作成し、[ArcGISEnvironment.apiKey](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-arc-g-i-s-environment/api-key.html) プロパティを設定します。[ApiKey.create()](https://developers.arcgis.com/kotlin/api-reference/arcgis-maps-kotlin/com.arcgismaps/-api-key/-companion/create.html) を呼び出し、API キーを文字列として渡します。またダブルクォーテーションを付けるのを忘れないでください。

    MainActivity.kt

    ```kt
        private fun setupMap() {

            val map = ArcGISMap(BasemapStyle.ArcGISTopographic)

            // レイアウトの MapView に表示するマップを設定
            mapView.map = map

            mapView.setViewpoint(Viewpoint(35.360626, 138.727363, 200000.0))

        }

        //  追加開始
        private fun setApiKey() {

            // API キーをソースコードに保存することはベストプラクティスではありません。
            // このチュートリアルでは便宜上ソースコードに記載しています。
            ArcGISEnvironment.apiKey = ApiKey.create("API キーを入力")

        }
        //  追加終了

    }
    ```

3. onCreate() ライフサイクルメソッド内で、setupMap() を呼び出す前に setApiKey() を呼び出します。

    MainActivity.kt

    ```kt
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        lifecycle.addObserver(mapView)

        // 追加開始
        setApiKey()
        // 追加終了

        setupMap()


    }
    ```

<!--
### エラーメッセージを追加する (オプション)
1. アプリ UI のトーストにエラーを表示し、Android Studio にエラーを記録する showError() 関数を作成します（Logcat タブに表示されます）。

    この最初のチュートリアル（マップを表示する）は非常にシンプルで、showError() を呼び出しません。他のチュートリアルの多くは、マップの表示に基づいており、この関数を呼び出す必要があります。それらのチュートリアルで便利に使用できるように、この関数を定義します。

    MainActivity.kt

    ```kt
    // 追加開始
    private fun showError(message: String) {
        Toast.makeText(applicationContext, message, Toast.LENGTH_LONG).show()
        Log.e(localClassName, message)
    }
    // 追加終了
    ```
-->

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

完成版のプロジェクトは[こちら](https://developers.arcgis.com/kotlin/zips/display-a-map.zip)からダウンロードできます (マップの表示場所は本チュートリアルで設定した場所とは異なります)。

### Web マップを表示する
「[Web マップの作成](https://esrijapan.github.io/arcgis-dev-resources/guide/services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップも基本的に同じステップで表示できます。

1. [マップを表示する](#マップを表示する)のステップで作成したプロジェクトの [app] > [java] > [com.example.app] > [MainActivity.kt] を開き、必要なインポートステートメントを追加します。

    MainActivity.kt

    ```kt
    import com.arcgismaps.portal.Portal
    import com.arcgismaps.mapping.PortalItem
    ```

2. setupMap メソッドを下記のように書き換えます。

    MainActivity.kt

    ```kt
    val portal = Portal("https://www.arcgis.com", Portal.Connection.Anonymous)

    val itemId = "Web マップの ID"
    val portalItem = PortalItem(portal, itemId)
    val map = ArcGISMap(portalItem)
    
    mapView.map = map
    ```

---
アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](https://esrijapan.github.io/arcgis-dev-resources/guide/security/)