+++
title = "インストール ガイド"
description = "ArcGIS Maos SDK for Kotlin のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/android/install-android-200.x/"]
+++

出典：ArcGIS Maps SDK for Kotlin - Guide - [Install and set up](https://developers.arcgis.com/kotlin/install-and-set-up/)

このインストール ガイドでは、ArcGIS Maps SDK for Kotlin (バージョン 200.x) のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-android/)」のチュートリアルをご覧ください。

ArcGIS Developers のダッシュボードから各インストーラーやデータをダウンロードするには、ArcGIS 開発者アカウントでログインする必要があります。アカウントをお持ちでない場合は、サインアップ (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。

ArcGIS Maps SDK for Kotlin をインストールする前に、開発マシンが [動作環境](https://developers.arcgis.com/kotlin/reference/system-requirements/) を満たしていることを確認してください。アプリを実行するすべてのターゲット デバイスには、Android API レベルの最小バージョンが必要です。詳細については、システム要件を参照してください。

[Gradle](https://gradle.org/) を使用してインストールすることをお勧めします。これにより、[Esri の Maven リポジトリ](https://esri.jfrog.io/artifactory/arcgis)から必要な依存関係と SDK バイナリがインストールされます。

## Gradle で API を取得する
既存の Android Studio プロジェクトか新しいプロジェクトを作成して、次のセットアップ手順を実行します。

1. settings.gradle ファイルの repositories ブロック内で、Esri の Maven リポジトリ URL を追加します。Esri のリポジトリはオープンソースではないため、google() や mavenCentral() からは使用できないため、この URL を指定する必要があります。

	settings.gradle

	```java  
	dependencyResolutionManagement {
		repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
		repositories {
			google()
			mavenCentral()

			// Esri の Maven リポジトリを追加
			maven {
				url 'https://esri.jfrog.io/artifactory/arcgis'
			}
		}
	}
    ```

2. module レベルの build.gradle ファイルの dependencies ブロック内で、ArcGIS Maps SDK for Kotlin の依存関係をアプリに追加します。

	注：この依存関係を、ArcGIS Maps SDK for Kotlin を使用する各モジュールに追加する必要があります。

	build.gradle

	```java
	dependencies {
		...
		implementation 'com.esri:arcgis-maps-kotlin:200.2.0'
	}
	```

3. module レベルの build.gradle ファイルの android ブロック内に、ビュー バインディングまたはデータ バインディングを有効にするブロックがあることを確認します。ビュー バインディングの詳細については、[ビュー バインディング](https://developer.android.com/topic/libraries/view-binding) を参照してください。データ バインディングの詳細については、[データ バインディング](https://developer.android.com/topic/libraries/data-binding/start) を参照してください。

	build.gradle
    ```java  
	android {
  		. . .
 		buildFeatures {
    		viewBinding true
  		}

		// buildFeatures {
    	// dataBinding true
    	// }
	}
    ```

4. module レベルの build.gradle ファイルの android ブロック内に、META-INFDEPENDENCIES ファイルの複製を除外する packagingOptions ブロックがあることを確認します。この設定により、META-INF ディレクトリにある同じファイルを出力に複数回含めようとした場合に発生するコンパイラー エラーを防ぐことができます。パッケージング オプションの詳細については、[PackagingOptions](https://developer.android.com/reference/tools/gradle-api/7.4/com/android/build/api/dsl/PackagingOptions) を参照してください。

	build.gradle

    ```java  
	android {
  		. . .
  		packagingOptions {
    		exclude 'META-INF/DEPENDENCIES'
  		}
	}
    ```

## 必要な権限と機能
Android は、権限が分離されたオペレーティング システムです。アプリで使用する ArcGIS の機能によっては、マニフェストに権限を追加する必要がある場合があります。アプリに含まれていない機能の権限を含めないようにしてください。

アプリが Android API バージョン 22 以前で実行されている場合、インストール時にすべての権限が要求されます（許可または拒否）。アプリが Android API バージョン 23 以降で実行されている場合、アクセス許可が要求され、インストール時に自動的に付与されます。ただし、潜在的に危険な権限は実行時にリクエストする必要があり、そのためにはアプリにコードを追加する必要があります。まだ許可されていない場合は、Android フレームワークまたは Android サポート ライブラリが、権限を確認して要求するために使用されます。詳細については、[アプリの権限を宣言する](https://developer.android.com/training/permissions/declaring.html)と[アプリの権限をリクエストする](https://developer.android.com/training/permissions/requesting.html)をご覧ください。

### アクセス許可が必要な ArcGIS Maps SDK for Kotlin の機能

* インターネットへのアクセス（ほとんどのアプリはこれを必要とします）：Android API 23 以降の標準の権限
* デバイスの GPS にアクセスするための FINE_LOCATION の権限：Android API 23 以降での危険な権限

次のコード例（AndroidManifest.xml ファイルの場合）には、これらの権限が含まれています。

AndroidManifest.xml
```xml  
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

### Android のストレージと権限
Android API Level 30 では、すべてのアプリは Android デバイスのファイルシステムにアクセスするために[対象範囲別ストレージ](https://developer.android.com/training/data-storage?hl=ja#scoped-storage)を使用します。対象範囲別ストレージを使用すると、アプリは (1)自身のファイル、および (2)メディア ストア内の共有ファイルにアクセスすることができます。下記のパーミッションの宣言は、サポートされていません。
```xml  
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Android のストレージは、API レベル 29 以降、劇的に変化しています。Android のストレージとパーミッションの詳細については、次のリンクを参照してください。

* [データ ストレージとファイル ストレージの概要](https://developer.android.com/training/data-storage#permissions)
* [Android ストレージのユースケースとおすすめの方法](https://developer.android.com/training/data-storage/use-cases)
* [共有ストレージからメディア ファイルにアクセスする](https://developer.android.com/training/data-storage/shared/media#request-permissions)
* [ストレージ デバイスのすべてのファイルを管理する](https://developer.android.com/training/data-storage/manage-all-files)


### OpenGL ES バージョンの宣言

Android マニフェストに [uses-feature 要素](https://developer.android.com/guide/topics/manifest/uses-feature-element.html)を追加すると、Play ストアでアプリを正しいタイプのデバイスで利用できるようになります。

MapView（2D）を使用するアプリには、最小でも OpenGL ES 2.x が必要です。

```xml  
<uses-feature android:glEsVersion="0x00020000" android:required="true" />
```

SceneView（3D）を使用するアプリには、OpenGL ES 3.x が必要です。

```xml  
<uses-feature android:glEsVersion="0x00030000" android:required="true" />
```

## 追加のダウンロード
開発プロジェクトを強化するために、[サンプル コード](#サンプル-コード)と[データ](#追加のデータ)の追加リソースを利用できます。このガイドを、[スタンドアロンの開発者ドキュメント](#スタンドアロンの開発者向けドキュメント)としてダウンロードすることもできます。


### サンプル コード
ドキュメントで[サンプル](https://developers.arcgis.com/kotlin/sample-code/)の包括的なリストを参照するか、[GitHub リポジトリ](https://github.com/Esri/arcgis-maps-sdk-kotlin-samples/tree/main)からサンプル コードをダウンロードしてください。

### ArcGIS Maps SDK for Kotlin Toolkit
[ArcGIS Maps SDK for Kotlin Toolkit](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit/tree/main) には、アプリ開発を簡素化するためのコントロールとユーティリティが含まれています。

### スタンドアロンの開発者向けドキュメント
[ダウンロード ページ](https://developers.arcgis.com/downloads/) から、開発者向けドキュメントをアーカイブとしてダウンロードできます。アーカイブには、ローカル Web サーバからドキュメントを提供する手順が含まれているため、インターネットに接続しなくてもドキュメントにアクセスできます。スタンドアロン ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、およびサンプル ドキュメントが含まれています。このドキュメントは、ローカルのスタンドアロン コンピューターまたは内部ネットワーク上で実行するように設計されており、パブリックなインターネット上では実行できません。

ローカルでドキュメントを公開する方法：

* 使用する ArcGIS Runtime SDK のドキュメントを[ダウンロード](https://developers.arcgis.com/downloads/)します。ダウンロードしたファイルは、.zip アーカイブ形式になっています。
* アーカイブをローカル フォルダに解凍します。解凍されたアーカイブには、public と install という 2 つのサブフォルダがあります。
* install フォルダ内の README.md ファイルを開き、選択した Web サーバーの指示に従います。

注：ライブ ドキュメント サイトはリリース時及びリリースの間に定期的に更新されますが、スタンドアロン ドキュメントは静的で、最初のリリース後は更新されません。

### 追加のデータ
#### Projection Engine データ
測地系変換は、ある空間基準から別の空間基準へジオメトリを投影する際に、2つの空間基準の基礎となる測地系に違いがある場合に使用されます。測地系変換は、数学的に定義する（方程式ベースの変換）ことも、外部のサポート ファイルに依存する（グリッド ベースの変換）ことも可能です。アプリでグリッドベースの変換を使用する場合、Projection Engine ファイルが存在する必要があります。API は、必要なファイルがローカルのファイルシステムで利用可能かどうかを検出することができます。Projection Engine ファイルが無い状態で変換をしようとすると、エラーが発生します。API は、必要なファイルがローカル ファイル システムで利用可能かどうかを検出できます。

[グリッド ベースの変換](https://developers.arcgis.com/kotlin/spatial-and-data-analysis/spatial-references/#grid-based-transformations)を使用している場合は、ダウンロード ページからサポートする [Projection Engine ファイル](https://developers.arcgis.com/downloads/#pedata)をダウンロードしてください。座標系、投影法、測地系変換の操作の詳細については、[Spatial references](https://developers.arcgis.com/kotlin/spatial-and-data-analysis/spatial-references/) のトピックを参照してください。

#### Electronic Navigational Charts (ENC)
航海用電子海図（ENC）は、水路や海上の情報を可視化し、分析するためのジオリファレンスされたベクター データセットです。SDK は、[国際水路機関（IHO）](https://iho.int/en/)の [S-57 規格](https://iho.int/uploads/user/pubs/standards/s-57/31Main.pdf) に準拠した ENC をサポートしています。

航海用電子海図 (ENC) を使用する場合は、ダウンロード ページから [hydrography](https://developers.arcgis.com/downloads/#hydrodata) データをダウンロードします。ENC データの操作の詳細については、[Display electronic navigational charts](https://developers.arcgis.com/kotlin/layers/display-electronic-navigational-charts/) のトピックを参照してください。

