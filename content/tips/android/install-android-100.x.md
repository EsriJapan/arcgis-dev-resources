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
		implementation 'com.esri.arcgisruntime:arcgis-android:100.13.0'
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

依存関係を ArcGIS Runtime SDK for Android に手動で追加するか、ダウンロードに含まれる他のリソースを使用します。libs フォルダにある Android ライブラリ モジュール（.aar）には、API の jar ライブラリ arcgis-android-api とそのサードパーティの依存関係およびコア ネイティブ ライブラリが含まれています。

### ArcGIS Android API がローカルの Maven リポジトリで動作するように設定する
以下のセットアップ手順では、インターネットから切り離された開発環境で作業していることを想定しています。たとえば、インターネット上でホストされている Maven リポジトリへのアクセスを許可しないファイアウォールの内側などです。以下の手順は、ローカルマシン上の Maven リポジトリでのセットアップを説明していますが、ネットワーク上に Maven サーバーをセットアップしている場合も同様に適用できます。

#### SDK およびその依存関係をコンピュータにデプロイする
1. arcgis-runtime-sdk-android-100.13.0.zip ファイルをダウンロードします。
2. アーカイブの内容をディスク上の任意の場所に解凍します。
3. 解凍した場所から、libs/aar ディレクトリの内容をディスク上の以下の場所にコピーします。

	mac: `/Users/[user-name]/.m2/repository/com/esri/arcgisruntime/arcgis-android/100.13.0/`
	
	Windows: `%USERPROFILE%\.m2\repository\com\esri\arcgisruntime\arcgis-android\100.13.0\`

4. ディレクトリのパスは以下のようになっているはずです。

	mac (2 ファイル):
	
	`/Users/[user-name]/.m2/repository/com/esri/arcgisruntime/arcgis-android/100.13.0/arcgis-android-100.13.0.aar`
	
	`/Users/[user-name]/.m2/repository/com/esri/arcgisruntime/arcgis-android/100.13.0/arcgis-android-100.13.0.pom`
	
	Windows (2 ファイル):

	`%USERPROFILE%\.m2\repository\com\esri\arcgisruntime\arcgis-android\100.13.0\arcgis-android-100.13.0.aar`
	
	`%USERPROFILE%\.m2\repository\com\esri\arcgisruntime\arcgis-android\100.13.0\arcgis-android-100.13.0.pom`

5. インターネットに接続して作業している場合は、このステップと以下のステップ6をスキップすることができます。
オフラインで作業している場合は、ArcGIS Runtime SDK の pom ファイルに記載されているすべての依存関係を、ローカルの Maven リポジトリに展開します。これらの依存関係のリストと、それらをダウンロードできる URL は以下のとおりです。

	* gson 2.8.6: https://search.maven.org/artifact/com.google.code.gson/gson/2.8.6/jar
	* androidx.browser 1.3.0: https://maven.google.com/web/index.html?q=browser#androidx.browser:browser:1.3.0
	* androidx.localbroadcastmanager 1.0.0: https://maven.google.com/web/index.html?q=localbroadcastmanager#androidx.localbroadcastmanager:localbroadcastmanager:1.0.0
	* httpcore5 5.0.4: https://search.maven.org/artifact/org.apache.httpcomponents.core5/httpcore5/5.0.4/jar
	* httpcore5-h2 5.0.4: https://search.maven.org/artifact/org.apache.httpcomponents.core5/httpcore5-h2/5.0.4/jar
	* slf4j-api 1.7.32: https://search.maven.org/artifact/org.slf4j/slf4j-api/1.7.32/jar
	* commons-codec 1.15: https://search.maven.org/artifact/commons-codec/commons-codec/1.15/jar
	* conscrypt-openjdk-uber 2.2.1 https://search.maven.org/artifact/org.conscrypt/conscrypt-openjdk-uber/2.2.1/jar
	* spymemcached 2.12.3 https://search.maven.org/artifact/net.spy/spymemcached/2.12.3/jar
	* ehcache-api 3.4.0 https://search.maven.org/artifact/org.ehcache.modules/ehcache-api/3.4.0/jar

6. オフラインで作業している場合は、上記のステップ5でダウンロードした依存関係を maven を使ってインストールします。
	* mvn maven ツールをインストールします。
	
		mac:

		`brew install mvn`
	
		Windows:

		https://maven.apache.org/guides/getting-started/windows-prerequisites.html を参照してください。

	* androidx の依存関係（browser と localbroadcastmanager）については、下記を実行してください。

		`mvn install:install-file -Dfile=<aar ファイルのパス> -DgroupId=<グループ ID> -DartifactId=<アーティファクト ID> -Dversion=<バージョン> -Dpackaging=aar -DgeneratePom=true`

	* 他のすべての依存関係については、下記を実行してください。

		`mvn install:install-file -Dfile=<jar ファイルのパス> -DgroupId=<グループ ID> -DartifactId=<アーティファクト ID> -Dversion=<バージョン> -Dpackaging=jar -DgeneratePom=true`

7. ローカルの Maven リポジトリを設定する必要があります。次のセクションで設定を確認します。


#### プロジェクトと app モジュールの Gradle ビルド スクリプトの編集

1. プロジェクトの build.gradle ファイルを編集して、ローカルの Maven リポジトリを参照する必要があります。これを行うには、プロジェクトのルートの build.gradle ファイルに以下を追加します。
 
	```java  
	allprojects {
		repositories {
			mavenLocal()
		}
	}
	```

2. app モジュールの build.gradle ファイルの android ブロック内に、以下のディレクティブを追加して、Java 8 の言語機能との互換性を設定します。
	```java 
	compileOptions {
		sourceCompatibility JavaVersion.VERSION_1_8
		targetCompatibility JavaVersion.VERSION_1_8
	}
	```

3. アプリの build.gradle ファイルに以下の依存関係を追加します。

	```java 
	dependencies {
			...
		implementation 'com.esri.arcgisruntime:arcgis-android:100.13.0'
		implementation 'com.google.code.gson:gson:2.8.6'
		implementation 'androidx.browser:browser:1.3.0'
		implementation 'androidx.localbroadcastmanager:localbroadcastmanager:1.0.0'
		implementation 'org.apache.httpcomponents.core5:httpcore5:5.0.4'
		implementation 'org.apache.httpcomponents.core5:httpcore5-h2:5.0.4'
		implementation 'org.slf4j:slf4j-api:1.7.32'
		implementation 'commons-codec:commons-codec:1.15'
		implementation 'org.conscrypt:conscrypt-openjdk-uber:2.2.1'
		implementation 'net.spy:spymemcached:2.12.3'
		implementation 'org.ehcache.modules:ehcache-api:3.4.0'
	}
	```

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

DefaultAuthenticationChallengeHandler は、OAuth 認証の認証情報の入力をユーザーに求めるために、デフォルトで [Chrome カスタムタブ](https://developer.chrome.com/docs/android/custom-tabs/overview/) を使用するようになりました。これにより、外部ブラウザ ウィンドウで資格情報の入力を求めるよりも優れたユーザーエクスペリエンスが提供されます。Chrome カスタムタブのサポートにより、[androidx.browser:browser](https://developer.android.com/jetpack/androidx/releases/browser) の新しい推移的依存関係が導入されました。 この依存関係は、gradle ビルドスクリプトから arcgis-android ライブラリを参照すると自動的に構成されます。API を手動でダウンロードする場合は、androidx の依存関係をサポートするように自分でプロジェクトを構成する必要があります。

プロジェクトが Google でサポートされていない Android サポート ライブラリに依存している場合は、androidx ライブラリでコンパイルまたはランタイムの問題が発生するため、プロジェクトを [androidx](https://developer.android.com/jetpack/androidx/migrate) に移行する必要があります。

# 追加のダウンロード
## サンプル コード
ArcGIS Runtime アプリで実行できる、機能については[サンプル コード](https://github.com/Esri/arcgis-runtime-samples-android)を参照してください。

サンプル ビューアー アプリは、[Google Play](https://play.google.com/store/apps/details?id=com.esri.sampleviewer) か、[ArcGIS Online（.apk ファイル）](https://arcgisruntime.maps.arcgis.com/home/item.html?id=21ac248ea189406c821400dc28bf686c) からも入手できます。


## ArcGIS Runtime SDK for Android Toolkit
[ArcGIS Runtime SDK for Android Toolkit](https://github.com/esri/arcgis-runtime-toolkit-android) には、アプリの開発を簡略化するためのコントロールやユーティリティが含まれています。例えば、以下のようなものがあります。

* ArcGISArView: SceneView を ARCore と統合し、拡張現実（AR）を実現します。
* ブックマーク: ウェブ マップに保存されているブックマークを表示します。
* コンパス: 北を指すコンパスのアイコンを表示して、マップやシーンの現在の向きを示します。
* スケールバー: 地図上での正確な直線計測の表現を表示します。

## スタンドアロンの開発者向けドキュメント
[ダウンロード ページ](https://developers.arcgis.com/downloads/) から、開発者向けドキュメント（任意の ArcGIS Runtime SDK 用）をアーカイブとしてダウンロードできます。アーカイブには、ローカル Web サーバからドキュメントを提供する手順が含まれているため、インターネットに接続しなくてもドキュメントにアクセスできます。スタンドアロン ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、およびサンプル ドキュメントが含まれています。このドキュメントは、ローカルのスタンドアロン コンピューターまたは内部ネットワーク上で実行するように設計されており、パブリックなインターネット上では実行できません。

ローカルでドキュメントを公開する方法：

* 使用する ArcGIS Runtime SDK のドキュメントを[ダウンロード](https://developers.arcgis.com/downloads/)します。ダウンロードしたファイルは、.zip アーカイブ形式になっています。
* アーカイブをローカル フォルダに解凍します。解凍されたアーカイブには、public と install という 2 つのサブフォルダがあります。
* install フォルダ内の README.md ファイルを開き、選択した Web サーバーの指示に従います。

注：ライブ ドキュメント サイトはリリース時及びリリースの間に定期的に更新されますが、スタンドアロン ドキュメントは静的で、最初のリリース後は更新されません。

## 追加のデータ
[グリッド ベースの地理座標変換](https://developers.arcgis.com/android/spatial-and-data-analysis/spatial-references/#grid-based-transformations)を使用している場合は、ダウンロード ページからサポートする [Projection Engine ファイル](https://developers.arcgis.com/downloads/#pedata)をダウンロードしてください。

航海用電子海図 (ENC) を使用する場合は、Esri.ArcGISRuntime.Hydrography NuGet パッケージをアプリに追加するか、ダウンロード ページから [hydrography directory](https://developers.arcgis.com/downloads/#hydrodata) をダウンロードします。

