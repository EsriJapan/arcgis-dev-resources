+++
title = "Android"
description = "ArcGIS Runtime SDK for Android を用いたモバイル地図アプリの作成方法を紹介します。"
Weight=4
aliases = ["/create-startup-app-android/"]
+++

# マップを表示する

このチュートリアルでは ArcGIS Runtime SDK for Android を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-android100.0/display_map.png" width="300px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで1つ以上のデータレイヤーを追加できます。マップビューを使用し、場所とズームレベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベースマップレイヤーを使用して、富士山付近を表示する地図を作成します。


## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://www.esrij.com/products/arcgis-runtime-sdk-for-android/environments/)を満たしていることを確認します。
3. Kotlin で Android 開発を行うための IDE。このチュートリアルでは Android Studio を使用していますが、記述されたコードは Kotlin をサポートする任意の Android の IDE で動作します。

## ステップ

### 新しい Android Studio プロジェクトを作成します
Android Studio を使用してアプリを作成し、API を参照するように構成します。

1. Android Studio を開きます。
   * メニューバーで、[File] > [New] > [New Project....] をクリックします。
   * [Create New Project] ウィンドウで、[Phone and Tablet] タブが選択されていることを確認してから、[Empty Activity] を選択します。[Next] をクリックします。
   
     * Gradle は、Android Studio のデフォルトのビルドツールです。Gradle を使用できない場合は、[API を手動で取得する](../../../tips/android/install-android-100.x/#api-を手動で取得する) を参照してください。

   * [Configure your project] ウィンドウで、次の構成オプションを設定します。
     * Name: Display a map
     * Package name: com.example.app に変更します。または、組織に合わせて変更してください。
     * Save location: 新しいフォルダに設定します
     * Language: Kotlin
     * Minimum SDK: API 23: Android 6.0 (Marshmallow)

2. プロジェクトのツールウィンドウで、現在のビューが Android であることを確認してください。チュートリアルの説明では、そのビューを参照しています。

   ビュー名が Android 以外の名前（プロジェクトやパッケージなど）の場合は、プロジェクトツールウィンドウのタイトルバーの左端のコントロールをクリックし、リストから Android を選択します。

     <img src="https://developers.arcgis.com/android/static/8b96f6edb5d00aef8f0e7b3a31b34a86/811d1/display-a-map-android-view.png" width="400px">

3. プロジェクト ツールウィンドウから、[Gradle Scripts] > [build.gradle (Project: Display_a_map)] を開きます。Esri の Maven リポジトリから API を参照するには、allprojects の repositories ブロックに以下の行を追加します。

    build.gradle (Project: Display_a_map)

    ```java
    allprojects {
        repositories {
            google()
            jcenter()
            
            // 追加開始
            maven {
                url 'https://esri.jfrog.io/artifactory/arcgis'
            }
            // 追加終了

        }
    }
    ```
 
4. プロジェクト ツールウィンドウから、[Gradle Scripts] > [build.gradle (Module: Display_a_map.app)] を開きます。dependencies ブロックに以下の行を追加して、ArcGIS Runtime SDK for Android を含めます。

    build.gradle (Module: Display_a_map.app)

    ```java

    android {
        compileOptions {
            sourceCompatibility JavaVersion.VERSION_1_8
            targetCompatibility JavaVersion.VERSION_1_8
        }
        ...

    }

    dependencies {
        implementation fileTree(dir: "libs", include: ["*.jar"])
        implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
        implementation 'androidx.appcompat:appcompat:1.2.0'
        implementation 'androidx.constraintlayout:constraintlayout:2.0.4'

        // 追加開始
        implementation 'com.esri.arcgisruntime:arcgis-android:100.13.0'
        // 追加終了

    }
    ```

    注: 上記の build.gradle ファイルでは、ソースとターゲットの両方で Java 8 言語互換性を指定しています。Android Studio はこの互換性設定を利用して、必要に応じて「desugaring」と呼ばれるバイトコード変換を自動で行います。別の IDE を使用している場合は、自分で Java 8 互換性を設定する必要がある場合があります。詳しくは、[Java 8 言語機能と API を使用する](https://developer.android.com/studio/write/java8-support) を参照してください。

5. android ブロックに以下の buildFeatures ブロックを追加して、ビューのバインドを有効にします。

    build.gradle (Module: Display_a_map.app)

    ```java
    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_1_8.toString()
    }

    // 追加開始
    buildFeatures {
        viewBinding true
    }
    // 追加終了
    ```
6. Gradle の変更を同期します。[Sync now] プロンプトをクリックするか、ツールバーの更新アイコン（Sync Project with Gradle Files）をクリックします。同期に数分かかるかもしれません。

7. プロジェクトツールウィンドウから、[app] > [manifests] > [AndroidManifest.xml] を開きます。Android マニフェストを更新して、ネットワークアクセスを許可し、アプリが OpenGL2.0 以降を使用することを示します。

    AndroidManifest.xml

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">

    // 追加開始
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-feature
        android:glEsVersion="0x00020000"
        android:required="true" />
    // 追加終了
    ```

### インポートステートメントを追加する

 [app] > [java] > [com.example.app] > [MainActivity.kt] を開き、ArcGIS Runtime SDK を参照するようにインポートステートメントを追加します。

MainActivity.kt

```java
package com.example.app

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

// 追加開始
import com.esri.arcgisruntime.ArcGISRuntimeEnvironment
import com.esri.arcgisruntime.mapping.ArcGISMap
import com.esri.arcgisruntime.mapping.BasemapStyle
import com.esri.arcgisruntime.mapping.Viewpoint
import com.esri.arcgisruntime.mapping.view.MapView
import com.example.app.databinding.ActivityMainBinding
// 追加終了
```

### マップビューの UI を追加する
マップビューは、マップを表示する UI コンポーネントです。また、タッチジェスチャによるナビゲートなど、ユーザーによるマップの操作も処理します。XML を使用してマップビューを UI に追加し、メインアクティビティのソースコードで使用できるようにします。

1. [app] > [res] > [layout] > [activity_main.xml] で、TextView 要素全体を [MapView](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/mapping/view/MapView.html) 要素に置き換えます。

    XMLコードが表示されない場合は、[Code] タブを選択してデザインモードを切り替え、エディターに XML コードを表示します。
    MapView 要素は、ArcGIS Runtime SDK for Android から MapView クラスのインスタンスを作成します。

    メインアクティビティ ソースコードでは、android:id 属性の値で宣言されている暗黙的なプロパティを使用してその MapView インスタンスにアクセスできます。この場合、プロパティの名前は mapView になります。

    activity_main.xml

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".MainActivity">

        // 追加開始
        <com.esri.arcgisruntime.mapping.view.MapView
            android:id="@+id/mapView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        // 追加終了

    </androidx.constraintlayout.widget.ConstraintLayout>
    ```

2. MainActivity.kt で、生成された Android クラス [ActivityMainBinding](https://developer.android.com/topic/libraries/data-binding/expressions#binding_data) を参照する activityMainBinding という名前の読み取り専用ローカル変数を作成します。

    MainActivity.kt

    ```java
    class MainActivity : AppCompatActivity() {

        // 追加開始
        private val activityMainBinding by lazy {
            ActivityMainBinding.inflate(layoutInflater)
        }
        // 追加終了
    ```
3. mapView という名前の読み取り専用変数を作成し、それを activity_main.xml で作成された mapView にバインドします。

    MainActivity.kt

    ```java
    class MainActivity : AppCompatActivity() {

        private val activityMainBinding by lazy {
            ActivityMainBinding.inflate(layoutInflater)
        }

        // 追加開始
        private val mapView: MapView by lazy {
            activityMainBinding.mapView
        }
        // 追加終了
    ```

4. setContentView の引数を "R.layout.activity_main" から "activityMainBinding.root" に変更します。

    MainActivity.kt

    ```java

    private val activityMainBinding by lazy {
        ActivityMainBinding.inflate(layoutInflater)
    }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // 変更前
        // setContentView(R.layout.activity_main)
        // 変更後
        setContentView(activityMainBinding.root)
    }
    ```

### マップを追加する

マップビューを使用して、富士山を中心としたマップを表示します。マップには、地形ベースマップレイヤーが含まれます。

1. MainActivity.kt で、MainActivity クラスに新しい setupMap メソッドを追加し、[ArcGISMap](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/mapping/ArcGISMap.html) を作成します。[ARCGIS_TOPOGRAPHIC](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/mapping/BasemapStyle.html#ARCGIS_TOPOGRAPHIC) という名前の特定のベースマップスタイルを使用して ArcGISMap を構成します。

    MainActivity.kt

    ```java
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activityMainBinding.root)
    }

    // 追加開始
    // ここでマップを設定します。このメソッドは onCreate() から呼び出します
    private fun setupMap() {

        // BasemapStyle で地図を作成する
        val map = ArcGISMap(BasemapStyle.ARCGIS_TOPOGRAPHIC)

    }
    // 追加終了
    ```

    地形図（ARCGIS_TOPOGRAPHIC）以外にも、[道路地図（ARCGIS_STREETS）](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/mapping/BasemapStyle.html#ARCGIS_STREETS)、[衛星画像（ARCGIS_IMAGERY）](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/mapping/BasemapStyle.html#ARCGIS_IMAGERY)、[オープンストリートマップ（OSM_STANDARD）](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/mapping/BasemapStyle.html#OSM_STANDARD)など、様々なスタイルが用意されています。

2. mapView の map プロパティを新しい ArcGISMap に設定します。次に、[ViewPoint](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/mapping/Viewpoint.html) を作成し、それを mapView に追加します。

    MainActivity.kt

    ```java
    // ここでマップを設定します。このメソッドは onCreate() から呼び出します
    private fun setupMap() {

        // BasemapStyle で地図を作成する
        val map = ArcGISMap(BasemapStyle.ARCGIS_TOPOGRAPHIC)
        
        // 追加開始
        // レイアウトの MapView に表示されるマップを設定します
        mapView.map = map
        // 視点の Viewpoint(緯度、経度、スケール) を設定します
        mapView.setViewpoint(Viewpoint(35.360626, 138.727363, 200000.0))
        // 追加終了
    }
    ```

3. [onCreate](https://developer.android.com/reference/android/app/Activity#onCreate(android.os.Bundle)) メソッドで、setupMap を呼び出します。

    MainActivity.kt

    ```java
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activityMainBinding.root)

        // 追加開始
        setupMap()
        // 追加終了
    }
    ```
4. MainActivity クラスの [onPause](https://developer.android.com/reference/android/app/Activity#onPause())、[onResume](https://developer.android.com/reference/android/app/Activity#onResume())、[onDestroy](https://developer.android.com/reference/android/app/Activity#onDestroy()) メソッドをオーバーライドします。

    MainActivity.kt

    ```java
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(activityMainBinding.root)

        setupMap()

    }

    // 追加開始
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
    // 追加終了
    ```

### API キーを設定する
ArcGIS Online でホストされているサービス、Web マップ、Web シーンにアクセスできるようにするには、API キーが必要です。
まだ作成していない場合は、[ArcGIS Developers ダッシュボード](https://developers.arcgis.com/dashboard/) に移動して、API キーを取得します。作成方法は「[API キーの取得](../../get-api-key/)」をご覧ください。

1. アプリを実行する前に、API キーを使用して [ArcGISRuntimeEnvironment](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/ArcGISRuntimeEnvironment.html) の [apiKey](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/ArcGISRuntimeEnvironment.html#setApiKey(java.lang.String)) プロパティを設定します。

    MainActivity.kt

    ```java
    private fun setupMap() {
        
        // 追加開始
        // API キーを設定します
        // 注：API キーをソースコードに保存することはベストプラクティスではありません。API キーが参照されます。
        //チュートリアルでは便宜上ソースコードに記載しています
        ArcGISRuntimeEnvironment.setApiKey("<API キー>")
        // 追加終了

        val map = ArcGISMap(BasemapStyle.ARCGIS_TOPOGRAPHIC)
    ```

2. [Run] > [Run] > [app] をクリックして、アプリを実行します。アプリを実行するエミュレーターが表示されます。アプリがビルドされてもエミュレーターが表示されない場合は、エミュレーターを追加する必要があります。[Tools] > [AVD Manager] > [Create Virtual Device...] をクリックします。

富士山を中心とした地形ベースマップレイヤーのマップが表示されます。マップビューをピンチ、ドラッグ、およびダブルタップして、マップを操作します。   

完成版のプロジェクトは[こちら](https://developers.arcgis.com/android/zips/display-a-map.zip)からダウンロードできます（マップの表示場所は本チュートリアルで設定した場所とは異なります）。

ビルドした際に「More than one file was found with OS independent path 'META-INF/DEPENDENCIES'.」のエラーが発生した場合は、app の build.gradle の android ブロックに下記を追加します。

```java
android {
    ...   
    packagingOptions {
        exclude 'META-INF/DEPENDENCIES'
    }          
}
```

# Web マップを表示する
「[Web マップの作成](../../services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップも基本的に同じステップで表示できます。

1. [マップを表示する](#マップを表示する)のステップで作成したプロジェクトの [app] > [java] > [com.example.app] > [MainActivity.kt] を開き、必要なインポートステートメントを追加します。
    
    MainActivity.kt

    ```java        
    import com.esri.arcgisruntime.portal.Portal
    import com.esri.arcgisruntime.portal.PortalItem
    ```

2. setupMap メソッドを下記のように書き換えます。

    MainActivity.kt

    ```java        
        ArcGISRuntimeEnvironment.setApiKey("<API キー>")
        val portal = Portal("https://www.arcgis.com", false)
        val itemId = "<Web マップの ID>"
        val portalItem = PortalItem(portal, itemId)
        val map = ArcGISMap(portalItem)
        mapView.map = map

    ```

---

アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)