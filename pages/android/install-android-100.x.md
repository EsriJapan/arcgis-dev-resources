
このインストール ガイドでは、初めて ArcGIS Runtime SDK for Android を使用してモバイル マッピング アプリケーションを構築する開発者の方に最も基本的な開発手順を紹介します。このインストール ガイドをお読み頂くことで、ArcGIS Runtime SDK for Android を使用したモバイル マッピング アプリケーション開発の基礎を理解することができます。

## ArcGIS Runtime SDK for Android とは

ArcGIS Runtime SDK for Android を使うと ArcGIS の機能を Android のネイティブ アプリケーションとして実装することができます。
この SDK には API やリファレンス、サンプルコードなどが含まれています。
詳細は [ArcGIS Runtime SDK for Android](http://www.esrij.com/products/arcgis-runtime-sdk-for-android/) をご参照ください。

## ArcGIS Runtime SDK for Android の開発環境

ここでは次の開発環境にて ArcGIS Runtime SDK for Android を用いたモバイル マッピング アプリケーションの開発手順を説明します。
開発手順を進める前に以下の開発環境をご使用のマシンにセットアップしてください。

* JDK(Java Development Kit)  ※JDK 7 以上を推奨します。
* Android Studio
* Android 4.4 (Kitkat: API レベル 19) 以降

ArcGIS Runtime SDK for Android がサポートする最新の動作環境につきましては[動作環境](http://www.esrij.com/products/arcgis-runtime-sdk-for-android/environments/)をご参照ください。

#### Java 8 の使用

Android Studio 3.0 以降では、プラットフォームのバージョンごとに異なる Java 7 のすべての言語機能と Java 8 の言語機能のサブセットをサポートしています。</br>
これらの言語機能は、ArcGIS Runtime SDK の Android ドキュメントおよび[サンプル](https://github.com/Esri/arcgis-runtime-samples-android/tree/master/java)でも使用されています。</br>
これらのコード例がアプリで使用されるときにコンパイルされるようにするには、Java 8 言語機能を使用するように Android Studio でアプリケーションモジュールの互換性を設定します。</br>
設定方法は[ArcGIS Runtime SDK の設定](#ArcGIS Runtime SDKの設定)内を参照してください。

## モバイル マッピング アプリケーションの開発

ここでは、次の構成で ArcGIS Runtime SDK for Android を使ってモバイル マッピング アプリケーションを作成するための基本的な手順を説明します。

* [プロジェクトの作成](#プロジェクトの作成)
* [ArcGIS Runtime SDKの設定](#arcgis-runtime-sdkの設定)
* [地図表示の実装](#地図表示の実装)
* [モバイル マッピング アプリケーションの実行](#モバイル-マッピング-アプリケーションの実行)

### プロジェクトの作成

まず Android Studio 上に新しいプロジェクトを作成します。

1.	Android Studio を起動し [Start a new Android Studio project] をクリックします。すでに Android Studio のプロジェクトが開いている場合は Android Studio のメニューから [File] → [New Project] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_1_1.StartupAndroid.png" width="600px">

1.	[Application name] にアプリケーションの名称を入力します。ここでは「HelloMap」としています。
[Company Domain] にドメインを、[Project Location] に作成するディレクトリを入力して [Next] をクリックします。
ここではドメインを「tutorials.esri.com」としています。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_1_2.makeProject.png" width="600px">

1.	[Phone and Tablet] のみにチェックを入れ、ドロップダウン リストから 「API 24: Android 7.0 (Nougat)」を選択して [Next] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_1_3.choseAndroidVersion.png" width="600px">

1.	Activity を選択します。ここでは「Empty Activity」を選択して [Next] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_1_4.choseActivity.png" width="600px">

1.	[Finish] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_1_5.makeActivity.png" width="600px">

1.	以上で新しいプロジェクトが作成されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_1_6.finish_startProject.png"  width="600px">

### ArcGIS Runtime SDKの設定

次に ArcGIS Runtime SDK for Android の API を使えるようにするための設定を行います。

1.	まずはこのアプリケーションが使用する機能に対して権限を付与します。
Project ツールウィンドウ で「Android」を選択して「Manifests」フォルダの AndroidManifest.xml をダブルクリックして開きます。
インターネットへのアクセス許可するための Permission を追加します。使用する機能に応じて、必要な Permission を追加してください。

	```java
	<uses-permission android:name="android.permission.INTERNET" />
	<uses-feature android:glEsVersion="0x00020000" android:required="true" />
	```

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_2_1.addPermission.png" width="700px">

1.	build.gradle (Project:HelloMap) をダブルクリックして開きます。
ArcGIS の Maven リポジトリの URL を追加します。

	```java
	allprojects {
	    repositories {
	        jcenter()
	        // esri arcgis maven リポジトリの追加
	        maven {
	            url 'https://esri.bintray.com/arcgis'
	        }
	    }
	}
	```

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_2_2.addMaven.png" width="700px">

1.	build.gradle (Module: app) をダブルクリックして開きます。dependencies セクション内に「implementation 'com.esri.arcgisruntime:arcgis-android:100.3.0'」を追加します。

	```java
	dependencies {
	    implementation 'com.esri.arcgisruntime:arcgis-android:100.3.0'
	    …
	}
	```

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_2_3.addRuntimeVersion.png" width="700px">

1.	続いて、Java 8 での機能を使用する設定を`android`中に追加します。
Java 8 で使用可能なラムダ式や特殊なアノーテーションを使用する場合ために、次のようにアプリケーションモジュールの互換性を設定します。

	```java
	android {
		…
	    compileOptions {
	        targetCompatibility 1.8
	        sourceCompatibility 1.8
	    }
	}
	```

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_2_4.addjava8conf.png" width="700px">

1.	ツールバーの [Sync Project with Gradle Files] または build.gradle を変更した後に表示されるメッセージの右にある [Sync Now] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_2_5.syncproject.png" width="600px">

これで準備が整いました。

### 地図表示の実装

ArcGIS の機能を実装する準備ができたので、アプリケーションに ArcGIS Online のベースマップを表示するための実装を加えます。

1.	Project ツールウィンドウで [app] → [res] → [layout] と展開し activity_main.xml をダブルクリックして開きます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_3_1.openLayoutXml.png"  width="700px">

1.	左下の [Text] タブをクリックして XML 形式で開きます。TextView 部分を全て削除して以下の MapView エレメントを追加します。

	```java
	<com.esri.arcgisruntime.mapping.view.MapView
	    android:id="@+id/mapView"
	    android:layout_width="fill_parent"
	    android:layout_height="fill_parent" >
	</com.esri.arcgisruntime.mapping.view.MapView>
	```

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_3_2.addMapviewElement.png" width="700px">

1.	Project ツールウィンドウで [app] → [res] → [java] と展開し MainActivity クラスを ダブルクリックして開き、地図表示のためのコードを設定します。

 * MainActivity クラスへ次のクラスをインポートします。

	```java
	import com.esri.arcgisruntime.mapping.view.MapView;
	import com.esri.arcgisruntime.mapping.ArcGISMap;
	import com.esri.arcgisruntime.mapping.Basemap;
	```
 * MainActivity クラスの先頭に次のクラス変数宣言を追加します。

	```java
	private MapView mMapView;
	```
 * onCreate() メソッド内の `setContentView()` を呼び出している後に以下のコードを追加します。
このコードは、レイアウトに定義している MapView の参照を取得し、ベースマップのタイプや初期表示の範囲、縮尺レベルを設定した地図を `MapView` に設定します。
ここではベースマップに地形図を設定し、初期表示範囲は永田町付近を表示するようにしています。

	```java
	mMapView = (MapView) findViewById(R.id.mapView);
	ArcGISMap map = new Map(Basemap.Type.TOPOGRAPHIC, 35.665731,139.731088, 16);
	mMapView.setMap(map);
	```
 * MainActivity クラスへ `onPause()` メソッド(一時停止)と `onResume()` メソッド(再開)を追加します。2つのメソッドへはそれぞれ次のコードを追加します。

	```java
	@Override
	protected void onPause(){
	    mMapView.pause();
	    super.onPause();
	}
	@Override
	protected void onResume(){
	    super.onResume();
	    mMapView.resume();
	}
	```

 * MainActivity は以下のようになります。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_3_3.finishMapViewElement.png" width="700px">

1.	ツールバーの [Make Project] または [Build] メニューから [Make Project] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_3_4.makeProject.png" width="600px">

### モバイル マッピング アプリケーションの実行

ベースマップを表示するアプリケーションが作成できたので Android 端末にインストールして実行します。

1.	ツールバーの [Run ‘app’] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_4_1.runAppBottun.png" width="600px">

1.	接続しているデバイスを選択し [OK] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_4_2.choseDevice.png" >

1.	アプリケーションが起動し東京ミッドタウン付近の地図が表示されます。
スワイプやピンチイン/ピンチアウトで地図を移動したり拡大/縮小したりすることができます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-android/_4_3.displayMap.png"  width="300px">


