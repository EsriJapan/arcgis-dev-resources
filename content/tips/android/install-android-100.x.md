+++
title = "インストール ガイド"
description = "ArcGIS Runtime SDK for Android のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/android/install-android-100.x/"]
+++

このインストール ガイドでは、ArcGIS Runtime SDK for Android のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-android/)」のチュートリアルをご覧ください。


{{% notice warning %}}

Gradle を使用して ArcGIS Runtime アプリケーションをビルドする場合、Maven リポジトリの URL が `https://esri.jfrog.io/artifactory/arcgis` であることに注意して下さい。2020年12月14日現在、旧 URL の `https://esri.bintray.com/arcgis` はサポートされていません。詳細は [Announcement to developers using ArcGIS Runtime SDKs for Android and Java](https://www.esri.com/arcgis-blog/products/developers/announcements/announcement-to-developers-using-arcgis-runtime-sdks-for-android-and-java/) をご参照ください。

{{% /notice %}}

# インストールとセットアップ

ArcGIS Runtime for Android をインストールする前に、開発マシンが[システム要件](https://www.esrij.com/products/arcgis-runtime-sdk-for-android/environments/)を満たしていることを確認してください。アプリを実行するすべてのターゲット デバイスには、Android API レベルの最小バージョンが必要です。詳細については、システム要件を参照してください。

[Gradle](https://gradle.org/) を使用してインストールすることをお勧めします。これにより、[Esri の Maven リポジトリ](https://esri.jfrog.io/artifactory/arcgis)から必要な依存関係と SDK バイナリがインストールされます。Gradle を利用できない場合は、代わりに SDK をダウンロードしてから、AAR ライブラリと依存関係アーティファクトを含めることでプロジェクトに依存関係を手動で追加できます。

注：制限された開発環境で作業していて、ユーザーディレクトリにファイルを書き込むためのオンラインアクセスまたは権限がない場合は、ダウンロードオプションを選択してください。

* [Gradle で API を取得する](#gradle-で-api-を取得する)
* [API を手動で取得する](#api-を手動で取得する)

## Gradle で API を取得する
既存の Android Studio プロジェクトか新しいプロジェクトを作成して、次のセットアップ手順を実行します。

1. project レベルの build.gradle ファイルの repositories ブロック内で、Esri の Maven リポジトリ URL をプロジェクトに追加します。Esri のリポジトリはオープンソースではないため、スクリプトのデフォルトリポジトリでは使用できないため、この URL を指定する必要があります。

	```java  
	allprojects {
		repositories {
			google()
			jcenter()

			// Esri のパブリック Maven リポジトリを追加します
			maven {
				url 'https://esri.jfrog.io/artifactory/arcgis'
			}
		}
	}
    ```

2. module レベルの build.gradle ファイルの dependencies ブロック内で、ArcGIS Runtime SDK for Android の依存関係をアプリに追加します。

	注：この依存関係を、ArcGIS Runtime SDK for Android を使用する各モジュールに追加する必要があります。

	```java
	dependencies {
		implementation 'com.esri.arcgisruntime:arcgis-android:100.10.0'
		...
	}
	```

3. Android Studio は、Java 8 言語機能のサブセットをサポートしています。これらの機能は、ArcGIS Runtime SDK for Android のドキュメントとサンプル全体で使用されています。アプリで使用する場合にコードサンプルを確実にコンパイルするには、Java 8 を使用するようにアプリ モジュールの互換性を設定します。app モジュールの build.gradle ファイルの android ブロック内に、compileOptions ディレクティブを追加して、Java 互換バージョンを設定します。

    ```java  
	android {
		...
		compileOptions {
			sourceCompatibility 1.8
			targetCompatibility 1.8
		}
	}
    ```

## API を手動で取得する
パブリック Gradle リポジトリを利用できない場合は、代わりに SDK をダウンロードし、ローカル AAR とすべての依存関係アーティファクトを含めることで、依存関係をプロジェクトに手動で追加できます。

1. [ArcGIS Developers](https://developers.arcgis.com/sign-in/) にサインインします。
    
	サインインには ArcGIS 開発者アカウントが必要です。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。

2. ダッシュボード上で、[Download](https://developers.arcgis.com/downloads/#android) をクリックし、最新バージョンの ArcGIS Runtime SDK for Android を選択します。

3. ダウンロードしたファイルを開発マシン上に解凍します。

依存関係を ArcGIS Runtime SDK for Android に手動で追加します。libs フォルダにある Android ライブラリ モジュール（.aar）には、API の jar ライブラリ arcgis-android-api とそのサードパーティの依存関係およびコア ネイティブ ライブラリが含まれています。


## 必要な権限と機能
Android は、権限が分離されたオペレーティング システムです。アプリで使用する ArcGIS の機能によっては、マニフェストに権限を追加する必要がある場合があります。アプリに含まれていない機能の権限を含めないようにしてください。

アプリが Android API バージョン 22 以前で実行されている場合、インストール時にすべての権限が要求されます（許可または拒否）。アプリが Android API バージョン 23 以降で実行されている場合、アクセス許可が要求され、インストール時に自動的に付与されます。ただし、潜在的に危険な権限は実行時にリクエストする必要があり、そのためにはアプリにコードを追加する必要があります。まだ許可されていない場合は、Android フレームワークまたは Android サポート ライブラリが、権限を確認して要求するために使用されます。詳細については、[アプリの権限を宣言する](https://developer.android.com/training/permissions/declaring.html)と[アプリの権限をリクエストする](https://developer.android.com/training/permissions/requesting.html)をご覧ください。

アクセス許可が必要な ArcGIS Runtime SDK for Android の機能：

* インターネットへのアクセス（ほとんどのアプリはこれを必要とします）：Android API 23 以降の標準の権限
* ローカルストレージ上のファイルへのアクセス（一部のアプリではこれが必要になります）：Android API 23以降での危険な権限。
* デバイスの GPS にアクセスするには、FINE_LOCATION の権限が必要です：Android API 23 以降での危険な権限

次のコード例（AndroidManifest.xml ファイルの場合）には、すべての権限が含まれています。

```xml  
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

さらに、Android マニフェストに [uses-feature 要素](https://developer.android.com/guide/topics/manifest/uses-feature-element.html)を追加すると、Play ストアでアプリを正しいタイプのデバイスで利用できるようになります。

MapView（2D）を使用するアプリには、最小でも OpenGL ES 2.x が必要です。

```xml  
<uses-feature android:glEsVersion="0x00020000" android:required="true" />
```

SceneView（3D）を使用するアプリには、OpenGL ES 3.x が必要です。

```xml  
<uses-feature android:glEsVersion="0x00030000" android:required="true" />
```

## androidx の依存関係

DefaultAuthenticationChallengeHandler は、OAuth 認証の認証情報の入力をユーザーに求めるために、デフォルトで [Chrome カスタムタブ](https://developer.chrome.com/docs/android/custom-tabs/overview/) を使用するようになりました。これにより、外部ブラウザ ウィンドウで資格情報の入力を求めるよりも優れたユーザーエクスペリエンスが提供されます。Chrome カスタムタブのサポートにより、[androidx.browser:browser:1.0.0](https://developer.android.com/jetpack/androidx/releases/browser) の新しい推移的依存関係が導入されました。 この依存関係は、gradle ビルドスクリプトから arcgis-android ライブラリを参照すると自動的に構成されます。API を手動でダウンロードする場合は、androidx の依存関係をサポートするように自分でプロジェクトを構成する必要があります。

プロジェクトが Google でサポートされていない Android サポート ライブラリに依存している場合は、androidx ライブラリでコンパイルまたはランタイムの問題が発生するため、プロジェクトを [androidx](https://developer.android.com/jetpack/androidx/migrate) に移行する必要があります。




