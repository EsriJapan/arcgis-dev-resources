+++
title = "インストール ガイド"
description = "ArcGIS Maps SDK for Flutter のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/android/install-flutter-200.x/"]
+++

出典：ArcGIS Maps SDK for Flutter - Guide - [Install and set up](https://developers.arcgis.com/flutter/install-and-set-up/)

このインストール ガイドでは、ArcGIS Maps SDK for Flutter (バージョン 200.x) のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-flutter/)」のチュートリアルをご覧ください。

ArcGIS Maps SDK for Flutter をインストールする前に、開発マシンが [動作環境](https://www.esrij.com/products/arcgis-maps-sdk-for-flutter/spec/) を満たしていることを確認してください。

## Flutter パッケージ リポジトリー

ArcGIS Maps SDK for Flutter は、Flutter のパッケージ リポジトリーである [pub.dev](https://pub.dev/packages/arcgis_maps/) を使用して、[VS Code](https://code.visualstudio.com/) で Flutter プロジェクトに統合することができます。

### VS Code

1. VS Code で Flutter プロジェクトを開きます。

2. **View** > **Terminal** を開きます。

3. プロジェクトの依存関係に `arcgis_maps` パッケージを追加します。

	```shell
	dart pub add arcgis_maps
	```  
	<!-- 上の行の空白を消すと、`の数がおかしくなるので注意。以下、Shell タグは同様。 bash,sh,shell-scriptも。-->

	[`dart pub add`](https://dart.dev/tools/pub/cmd/pub-add) は、`arcgis_maps` パッケージを依存関係として [`pubspec.yaml`](https://docs.flutter.dev/tools/pubspec) に追加し、`pubspec.yaml` を解決するために依存関係を取得します。

4. 以下のコマンドを実行して、すべての依存関係を最新の互換性のあるバージョンにアップデートします。

	```shell
	flutter pub upgrade
	```  

	このコマンドを実行すると、アプリが依存しているパッケージのみがアップデートされます。

5. `arcgis_maps_core` をダウンロードしてインストールします。

	```shell
	dart run arcgis_maps install
	```  

	このコマンドを実行すると、ArcGIS Maps のコア機能のバイナリー配布が Flutter プロジェクトにダウンロードされ、セットアップされます。ソース管理にチェックする場合は、`.gitignore` ファイルに `arcgis_maps_core` を追加することをお勧めします。

この API を使用するには、以下の import 文を dart コード（.dart）ファイルに追加します。

```dart
import 'package:arcgis_maps/arcgis_maps.dart';
```

## プラットフォーム固有の構成
Android、iOS、またはその両方向けに開発するには、Flutter プロジェクトで以下の設定変更も行う必要があります。

{{< tabs items="Android,iOS" >}}

	{{< tab >}}

   1. 以下の最低要件を更新します。
		   * Android コンパイル SDK: `36` 
		   * Android NDK バージョン: `27.0.12077973`
		   * Android の最低 SDK バージョン: `28`

			```gradle {filename="android/app/build.gradle.kts"}
			android {
				namespace = "com.esri.flutter_project_template"
				compileSdk = 36  // 変更
				ndkVersion = "27.0.12077973"  // 変更
				compileOptions {
			    	sourceCompatibility = JavaVersion.VERSION_11
			    	targetCompatibility = JavaVersion.VERSION_11
				}
				kotlinOptions {
			    	jvmTarget = JavaVersion.VERSION_11.toString()
				}
				defaultConfig {
				    // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
				    applicationId = "com.esri.flutter_project_template"
				    // You can update the following values to match your application needs.
				    // For more information, see: https://flutter.dev/to/review-gradle-config.
				    //
					minSdk = 28 // 変更
				    targetSdk = flutter.targetSdkVersion
				    versionCode = flutter.versionCode
				    versionName = flutter.versionName
				}
			}
			```


	#### パーミッションを必要とする機能
	ArcGIS Maps SDK for Flutter に依存するアプリケーションをデプロイするには、以下の権限が必要です。オンライン リソースにアクセスする権限を追加し、デバイスの GPS にアクセスする権限を追加します。位置情報へのアクセス許可を必要とする API をアプリがアクティブに使用している場合のみ、ユーザーは位置情報へのアクセス許可を提供するよう促されることに注意してください。

	```xml {filename="android/app/src/main/AndroidManifest.xml"}
		<manifest xmlns:android="http://schemas.android.com/apk/res/android">
			<!-- 追加開始 -->
		    <uses-permission android:name="android.permission.INTERNET" />
		    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
		    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
			<!-- 追加終了 -->
		    <application
		        android:label="flutter_project_template"
		        android:name="${applicationName}"
		        android:icon="@mipmap/ic_launcher">
	```

	#### デバイスのストレージへのアクセスを許可
	添付ファイルの追加やエクスポートなど、デバイスのストレージに対する読み取り/書き込み操作が必要な場合は、以下の追加権限を追加する必要があります。

	```xml {filename="android/app/src/main/AndroidManifest.xml"}
	<manifest xmlns:android="http://schemas.android.com/apk/res/android">
		<!-- 追加開始 -->
	    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
	    <uses-permission android:name="android.permission.READ_INTERNAL_STORAGE"/>
	    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
		<!-- 追加終了 -->
	    <application
	        android:label="flutter_project_template"
	        android:name="${applicationName}"
	        android:icon="@mipmap/ic_launcher">
	```

	#### ユーザー認証の有効化
	ユーザー認証にシステム ブラウザーの使用が必要な場合は、以下を追加する必要があります。


	```xml {filename="android/app/src/main/AndroidManifest.xml"}
		</activity> <!-- application タグ内の activity タグ-->

		<!-- 追加開始 -->
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
		<!-- 追加終了 -->
	```  

	`YOUR_CALLBACK_URL_SCHEME_HERE` を、ポータルで OAuth 認証情報を設定したときに使用したリダイレクト URL のスキームに置き換えてください。 これは、ログイン ワークフローが完了した後、ブラウザーがアプリに通信して戻るために必要です。

	{{< /tab >}}

	{{< tab >}}
   1. iOS 17.0 以上を設定します。 行のコメントを解除し、バージョン番号を更新します。

			```ruby {filename="ios/Podfile"}
			# Uncomment this line to define a global platform for your project
			platform :ios, '17.0' #変更
			```  
	
   2. `Runtimecore` ポッドと `arcgis_maps_ffi` ポッドを `Runner` ターゲット セクションに追加します。

			```ruby {filename="ios/Podfile"}
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

	#### パーミッションを必要とする機能

	ArcGIS Maps SDK for Flutter の一部の機能には、追加のパーミッションが必要です。 ArcGIS Maps SDK for Flutter に依存する iOS アプリを App Store にデプロイするには、以下の記述が必要です。 位置情報へのアクセス許可を必要とする API をアプリがアクティブに使用している場合のみ、ユーザーに位置情報へのアクセス許可を求めるプロンプトが表示されることに注意してください。

   * ユーザーの位置情報へのアクセスを要求する（[NSLocationUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationusagedescription)）
   * 常にユーザーの位置情報へのアクセスを要求する（[NSLocationAlwaysAndWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationalwaysandwheninuseusagedescription)）
   * アプリがフォアグラウンドで実行されている間、ユーザーの位置情報へのアクセスを要求する（[NSLocationWhenInUseUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nslocationwheninuseusagedescription)）

	次のコード例では、[情報プロパティ リスト](https://developer.apple.com/documentation/bundleresources/information_property_list)にこれらを含めています。

	```xml {filename="ios/Runner/Info.plist"}
	<dict>
		<!-- 追加開始 -->
		<key>NSLocationUsageDescription</key>
		<string>Location permission is required to view your position.</string>
		<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
		<string>Location permission is required to view your position.</string>
		<key>NSLocationWhenInUseUsageDescription</key>
		<string>Location permission is required to view your position.</string>
		<!-- 追加終了 -->
		<key>CFBundleDevelopmentRegion</key>
		<string>$(DEVELOPMENT_LANGUAGE)</string>
	```

	{{< /tab >}}

{{< /tabs >}}



## 追加ダウンロード
[サンプル コード](#サンプル-コード)と[データ](#補足データ)の追加ソースは、あなたの開発プロジェクトを強化するために利用可能です。本ガイドは、[スタンドアロンの開発者向けドキュメント](#スタンドアロンの開発者向けドキュメント)としてダウンロードすることもできます。

### サンプル コード
独自のアプリケーションに追加できるさまざまな強力な機能を説明した、実践的なサンプル コードを入手できます。 サンプルを検索し、[サンプル ドキュメント](https://developers.arcgis.com/flutter/sample-code/)で関連するコードを参照するか、[サンプル リポジトリ](https://github.com/Esri/arcgis-maps-sdk-flutter-samples)からコードをダウンロードしてローカルで実行します。

### スタンドアロンの開発者向けドキュメント

ダウンロード ページ から、開発者向けドキュメントをアーカイブとして[ダウンロード](https://developers.arcgis.com/flutter/downloads/)できます。アーカイブには、ローカル Web サーバからドキュメントを提供する手順が含まれているため、インターネットに接続しなくてもドキュメントにアクセスできます。スタンドアロン ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、およびサンプル ドキュメントが含まれています。このドキュメントは、パブリックなインターネット上ではなく、ローカルのスタンドアロン コンピューターまたは内部ネットワーク上で実行するように設計されています。

{{< callout type = "important">}}

ダウンロードしたドキュメントのアーカイブを解凍するには、無料のオープンソース ファイル アーカイブ ユーティリティー [7-Zip](https://www.7-zip.org/) をお勧めします。

{{< /callout >}}

ローカルでドキュメントを公開する方法
* 使用する SDK のドキュメントを[ダウンロード](https://developers.arcgis.com/flutter/downloads/)します。 ダウンロードしたファイルは .zip アーカイブ形式になっています。
* アーカイブをローカル フォルダに解凍します。 解凍されたアーカイブには、`public` と `install` の 2 つのサブフォルダがあります。
* `install` フォルダ内の `README.md` ファイルを開き、選択した Web サーバーの指示に従います。

{{< callout type = "info">}}

ライブ ドキュメント サイトはリリースとリリースの間に定期的に更新されますが、スタンドアロン ドキュメントは静的で、最初のリリース後は更新されません。

{{< /callout >}}

### 補足データ

#### 投影 エンジン データ
測地系変換は、ある空間基準から別の空間基準へジオメトリを投影する際に、2つの空間基準の基礎となる測地系に違いがある場合に使用されます。測地系変換は、数学的に定義する（方程式ベースの変換）ことも、外部のサポート ファイルに依存する（グリッド ベースの変換）ことも可能です。アプリでグリッドベースの変換を使用する場合、投影エンジン ファイルが存在する必要があります。投影エンジン ファイルが無い状態で変換をしようとすると、エラーが発生します。API は、必要なファイルがローカル ファイル システムで利用可能かどうかを検出できます。

グリッド ベースの変換を使用している場合は、ダウンロード ページからサポートする [投影エンジン ファイル](https://developers.arcgis.com/flutter/downloads/#projection-engine-data)をダウンロードしてください。 座標系、投影、測地系変換の操作に関する詳細は、Spatial references トピックを参照してください。