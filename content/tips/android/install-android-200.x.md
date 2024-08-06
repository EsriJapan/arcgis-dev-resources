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

{{% notice note %}}

Android Studio で [New Project] ウィザードを実行する際、[Phone and Tablet]、[Empty Activity] の順に選択します。<b>Empty Activity</b> オプションは Compose 対応アプリを作成するために必要な Android からの Jetpack Compose 依存関係を提供します。

以下の手順では、<b>Android Studio Koala 2024.1.1</b> を使用します。最適な結果を得るには、このバージョン以降の Android Studio を使用してください。

{{% /notice %}}

Android Studio の [New Project] ウィザードで作成したプロジェクトで、次のセットアップ手順を実行します。

1. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [build.gradle.kts (Project: Display_a_map)] を開きます。ファイルの内容を次のコードに置き換えます。

	build.gradle.kts (Project: Display_a_map)

	```gradle
	// すべてのサブプロジェクト/モジュールに共通の構成オプションを追加できる最上位のビルド ファイル
	plugins {
		alias(libs.plugins.android.application) apply false
		alias(libs.plugins.jetbrains.kotlin.android) apply false
	}
	``` 

2. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [build.gradle.kts (Module: app)] を開きます。ファイルの内容を次のコードに置き換えます。

	build.gradle.kts (Module: app)

	```gradle
	plugins {
		alias(libs.plugins.android.application)
		alias(libs.plugins.jetbrains.kotlin.android)
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

		composeOptions {
			kotlinCompilerExtensionVersion = "1.5.11"
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
		// Additional modules from Toolkit, if needed, such as:
		// implementation(libs.arcgis.maps.kotlin.toolkit.authentication)

	}
	``` 

	Android Studio の [New Project] ウィザードで生成されるモジュール レベルの `build.gradle.kts` ファイルでは、Android と Kotlin のツールのバージョンが宣言されます。Kotlin Compiler (`kotlinOptions` ブロック) のオプションは互換性がなければなりません。互換性は Android の [Compose to Kotlin Compatibility Map](https://developer.android.com/jetpack/androidx/releases/compose-kotlin) を参照することで確認できます。

	build.gradle.kts (Module: app)

	```gradle
	kotlinOptions {
		jvmTarget = "17"
	}

	composeOptions {
		kotlinCompilerExtensionVersion = "1.5.11"
	}
	``` 
	
3. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [libs.versions.toml] を開きます。`[version]` セクションで、ArcGIS Maps SDK for Kotlin のバージョン番号を宣言します。また、`[libraries]` セクションには、以下のライブラリの宣言を追加します。
	* ArcGIS Maps SDK for Kotlin SDK
	* ArcGIS Maps SDK for Kotlin Toolkit BOM
	* 必要な Toolkit コンポーネント<br>このチュートリアルでは、コンポーザブル [MapView](https://developers.arcgis.com/kotlin/toolkit-api-reference/arcgis-maps-kotlin-toolkit/com.arcgismaps.toolkit.geoviewcompose/-map-view.html) を含む `geoview-compose` コンポーネントのみが必要です。

    Toolkit BOM のバージョンは、宣言したすべての Toolkit コンポーネントに適用されます。

    [Gradle バージョン カタログ](https://developer.android.com/build/migrate-to-catalogs)は依存関係のバージョンを宣言するための標準的な Android のアプローチです。`build.gradle.kts` でバージョン番号を指定したり、`version.gradle` でバージョン番号を列挙するよりも推奨されます。Android Studio の最近のリリースでは、[New Project Wizard] がこの標準をサポートする `build.gradle.kts` と `gradle/libs.version.toml` ファイルを生成します。

    Gradle バージョン カタログでは、BOM ファイルを使用して、BOM 内のすべての成果物に対して単一のバージョン番号を指定することもできます。詳細については、ArcGIS Maps SDK for Kotlin Toolkit の README の [Using the BOM](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit/blob/main/README.md#using-the-bom) を参照してください。

    gradle/libs.versions.toml

    ```toml
    [versions]
    arcgisMapsKotlin = "200.5.0"

    [libraries]
    arcgis-maps-kotlin = { group = "com.esri", name = "arcgis-maps-kotlin", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-bom = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-bom", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-geoview-compose = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-geoview-compose" }
    # Additional modules from Toolkit, if needed, such as:
    # arcgis-maps-kotlin-toolkit-authentication = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-authentication" }
    ```

    {{% notice note %}}

    `libs.versions.toml` を手で編集しないでください。代わりに、以下のコードを展開し、展開した内容をすべてコピーして `libs.versions.toml` ファイルに貼り付け、新規プロジェクト ウィザードで生成された元の内容を置き換えてください。

    {{% /notice %}}

    ```toml
    [versions]
    arcgisMapsKotlin = "200.5.0"

    # Version numbers added by Android Studio New Project Wizard
    agp = "8.3.2"
    kotlin = "1.9.23"
    coreKtx = "1.13.0"
    junit = "4.13.2"
    junitVersion = "1.1.5"
    espressoCore = "3.5.1"
    lifecycleRuntimeKtx = "2.8.3"
    activityCompose = "1.9.0"
    composeBom = "2024.04.01"

    # Other version numbers
    compileSdk = "34"
    minSdk = "26"
    targetSdk = "34"

    [libraries]
    arcgis-maps-kotlin = { group = "com.esri", name = "arcgis-maps-kotlin", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-bom = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-bom", version.ref = "arcgisMapsKotlin" }
    arcgis-maps-kotlin-toolkit-geoview-compose = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-geoview-compose" }
    # Additional modules from Toolkit, if needed, such as:
    # arcgis-maps-kotlin-toolkit-authentication = { group = "com.esri", name = "arcgis-maps-kotlin-toolkit-authentication" }

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
    jetbrains-kotlin-android = { id = "org.jetbrains.kotlin.android", version.ref = "kotlin" }
    ```

4. プロジェクト ツール ウィンドウから、[Gradle Scripts] > [settings.gradle.kts] を開きます。ファイルの内容を次のコードに置き換えます。

	settings.gradle.kts (Display a map)

	```gradle
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

	rootProject.name = "Display a map"
	include(":app")
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
Android API Level 30 では、すべてのアプリは Android デバイスのファイルシステムにアクセスするために[対象範囲別ストレージ](https://developer.android.com/training/data-storage?hl=ja#scoped-storage)を使用します。対象範囲別ストレージを使用すると、アプリは (1) 自身のファイル、および (2) メディア ストア内の共有ファイルにアクセスすることができます。下記のパーミッションの宣言は、サポートされていません。
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

`MapView`（2D）を使用するアプリには、最小でも OpenGL ES 2.x が必要です。

```xml  
<uses-feature android:glEsVersion="0x00020000" android:required="true" />
```

`SceneView`（3D）を使用するアプリには、OpenGL ES 3.x が必要です。

```xml  
<uses-feature android:glEsVersion="0x00030000" android:required="true" />
```

## 追加のダウンロード
開発プロジェクトを強化するために、[サンプル コード](#サンプル-コード)と[データ](#追加のデータ)の追加リソースを利用できます。このガイドを、[スタンドアロンの開発者ドキュメント](#スタンドアロンの開発者向けドキュメント)としてダウンロードすることもできます。


### サンプル コード
ドキュメントで[サンプル](https://developers.arcgis.com/kotlin/sample-code/)の包括的なリストを参照するか、[GitHub リポジトリ](https://github.com/Esri/arcgis-maps-sdk-kotlin-samples/tree/main)からサンプル コードをダウンロードしてください。

また、[Google Play ストア](https://play.google.com/store/apps/details?id=com.esri.arcgismaps.kotlin.sampleviewer)からサンプル ビューアー アプリをダウンロードし、お使いのデバイスでライブ サンプルをご覧いただくこともできます。

### ArcGIS Maps SDK for Kotlin Toolkit
[ArcGIS Maps SDK for Kotlin Toolkit](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit/tree/main) には、アプリ開発を簡素化する Compose に対応したコンポーネント (コントロールとユーティリティ) が含まれています。`MapView` と `SceneView` のコンポーザブル関数を使用するには、モジュール レベルの `build.gradle.kts` に次の依存関係を含めます。

```gradle
implementation(platform("com.esri:arcgis-maps-kotlin-toolkit-bom:200.5.0"))
implementation("com.esri:arcgis-maps-kotlin-toolkit-geoview-compose")
```

[GeoView-Compose](https://github.com/Esri/arcgis-maps-sdk-kotlin-toolkit/tree/main/toolkit/geoview-compose)：`MapView` と `SceneView` クラスのコンポーザブルな実装を提供します。

Toolkit には、Compose に対応した他の特別なコンポーネントも含まれています。詳細は [Toolkit](https://developers.arcgis.com/kotlin/toolkit/) を参照してください。

### スタンドアロンの開発者向けドキュメント
[ダウンロード ページ](https://developers.arcgis.com/downloads/) から、開発者向けドキュメントをアーカイブとしてダウンロードできます。アーカイブには、ローカル Web サーバからドキュメントを提供する手順が含まれているため、インターネットに接続しなくてもドキュメントにアクセスできます。スタンドアロン ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、およびサンプル ドキュメントが含まれています。このドキュメントは、ローカルのスタンドアロン コンピューターまたは内部ネットワーク上で実行するように設計されており、パブリックなインターネット上では実行できません。

ローカルでドキュメントを公開する方法：

* 使用する ArcGIS Runtime SDK のドキュメントを[ダウンロード](https://developers.arcgis.com/downloads/)します。ダウンロードしたファイルは、.zip アーカイブ形式になっています。
* アーカイブをローカル フォルダに解凍します。解凍されたアーカイブには、`public` と `install` という 2 つのサブフォルダがあります。
* `install` フォルダ内の `README.md` ファイルを開き、選択した Web サーバーの指示に従います。

{{% notice note %}}

ライブ ドキュメント サイトはリリース時及びリリースの間に定期的に更新されますが、スタンドアロン ドキュメントは静的で、最初のリリース後は更新されません。

{{% /notice %}}

### 追加のデータ
#### Projection Engine データ
測地系変換は、ある空間基準から別の空間基準へジオメトリを投影する際に、2つの空間基準の基礎となる測地系に違いがある場合に使用されます。測地系変換は、数学的に定義する（方程式ベースの変換）ことも、外部のサポート ファイルに依存する（グリッド ベースの変換）ことも可能です。アプリでグリッドベースの変換を使用する場合、Projection Engine ファイルが存在する必要があります。API は、必要なファイルがローカルのファイルシステムで利用可能かどうかを検出することができます。Projection Engine ファイルが無い状態で変換をしようとすると、エラーが発生します。API は、必要なファイルがローカル ファイル システムで利用可能かどうかを検出できます。

[グリッド ベースの変換](https://developers.arcgis.com/kotlin/spatial-and-data-analysis/spatial-references/#grid-based-transformations)を使用している場合は、ダウンロード ページからサポートする [Projection Engine ファイル](https://developers.arcgis.com/downloads/#pedata)をダウンロードしてください。座標系、投影法、測地系変換の操作の詳細については、[Spatial references](https://developers.arcgis.com/kotlin/spatial-and-data-analysis/spatial-references/) のトピックを参照してください。

#### Electronic Navigational Charts (ENC)
航海用電子海図（ENC）は、水路や海上の情報を可視化し、分析するためのジオリファレンスされたベクター データセットです。SDK は、[国際水路機関（IHO）](https://iho.int/en/)の [S-57 規格](https://iho.int/uploads/user/pubs/standards/s-57/31Main.pdf) に準拠した ENC をサポートしています。

航海用電子海図 (ENC) を使用する場合は、ダウンロード ページから [hydrography](https://developers.arcgis.com/downloads/#hydrodata) データをダウンロードします。ENC データの操作の詳細については、[Display electronic navigational charts](https://developers.arcgis.com/kotlin/layers/display-electronic-navigational-charts/) のトピックを参照してください。

