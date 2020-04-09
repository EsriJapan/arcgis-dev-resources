+++
title = "APIs、SDKs、Apps"
description = "ArcGIS では、ArcGIS Pro のような既存の ArcGIS アプリケーションを拡張したり、特定のニーズに合わせて構成可能なアプリケーションをカスタマイズしたり、ゼロから完全にカスタムのアプリケーションを作成したりすることができます。ArcGIS で利用できる アプリケーションや API、SDK について紹介します。"
Weight=2
aliases = ["/apis-sdks-apps/"]
+++

## アプリの種類
ArcGIS プラットフォームを使用して実現できるワークフローやタスクには、様々な種類があります。ArcGIS Pro のような既存の ArcGIS アプリケーションを拡張したり、特定のニーズに合わせて設定可能なアプリケーションをカスタマイズしたり、ゼロから完全なカスタム アプリケーションを作成したりすることができます。

### ArcGIS アプリ
ArcGIS プラットフォームには、一般的なユースケースをカバーする様々なアプリケーションが含まれています。これらのアプリケーションには、以下のものが含まれます。

- [ArcGIS Desktop](https://desktop.arcgis.com/) - ArcGIS Pro や ArcMap などの GIS アプリケーションのデスクトップ
- [Collector for ArcGIS](http://www.esri.com/products/collector-for-arcgis) - モバイル データ収集アプリ
- [Navigator for ArcGIS](http://www.esri.com/products/navigator) - 高度にカスタマイズ可能なモバイル ルーティング ソリューション
- [ArcGIS ダッシュボード](https://www.esri.com/en-us/arcgis/products/arcgis-dashboards/overview) - リアルタイムでカスタマイズ可能なダッシュボード
- [Explorer for ArcGIS](http://www.esri.com/software/arcgis/explorer) - 組織内の GIS データの発見と表示
- [Workforce for ArcGIS](http://www.esri.com/products/workforce) - フィールドワークを調整するためのモバイル・Web アプリ
- [Survey123 For ArcGIS](http://www.esri.com/products/survey123) - データ収集・調査のための軽量アプリ

これらのアプリケーションの多くは、新しい機能を追加するために[スクリプトの作成や拡張](https://developers.arcgis.com/documentation/#extend)したりすることができます。


### 設定可能なアプリと App builder
ArcGIS Online および ArcGIS Enterprise には、カスタマイズや拡張が可能な多くの構成可能なアプリケーションがあらかじめ組み込まれています。これらのアプリケーションは、開発者がダウンロードしてカスタマイズすることができます。ArcGIS Online のヘルプには、[構成可能なアプリケーションの比較](http://doc.arcgis.com/en/arcgis-online/create-maps/choose-configurable-app.htm)が記載されています。

ArcGIS には、構成可能なアプリケーションに加えて、次の 3 つの App builder ソリューションがあります。

- [Experience Builder (Developer Edition) ](https://developers.arcgis.com/experience-builder/)- WYSIWYG ウィジェットベースのインターフェイスを使用して、複数ページの Web Experience アプリを構築します。
- [Web AppBuilder (Developer Edition)](https://developers.arcgis.com/web-appbuilder) - WYSISIWYG ウィジェットベースのインターフェイスを使用して、Web アプリを構築します。
- [AppStudio Developer Edition](https://doc.arcgis.com/en/appstudio/create-apps/licenseappstudio.htm) - テンプレートに基づいてモバイルアプリケーションを公開します。

### カスタム アプリ
ArcGIS API や SDK を使用すると、開発者は特定のニーズに対応したカスタム アプリケーションを構築することができます。様々なユースケースやプラットフォームを対象とした API、SDK があります。プロジェクトに適した SDK を選択するためには、オプションを慎重に比較する必要があります。

## ArcGIS API または SDK の選択
Esri の ArcGIS API、SDK、及び開発ツールを使用すると、あらゆる最新のプラットフォームに対応した堅牢なロケーションベースのアプリケーションを開発することができます。Esri のソリューションは、モバイル ([Android](https://developers.arcgis.com/android)、[iOS](https://developers.arcgis.com/ios)、[Windows](https://developers.arcgis.com/net)) 、及びデスクトップ ([Java](https://developers.arcgis.com/java)、[Windows](https://developers.arcgis.com/net)、[Linux](https://developers.arcgis.com/qt) プラットフォーム、デバイス) を対象としたネイティブ、Web 開発に対応しています。[ArcGIS API for JavaScript](https://developers.arcgis.com/javascript) を使用して、最新の Web ブラウザー上にアプリを展開することができます。ソリューションは、非開発者向けでは、コーディング不要のアプリ、開発者向では、最小限のコーディング（[Web AppBuilder](https://developers.arcgis.com/web-appbuilder)、[AppStudio](https://appstudio.arcgis.com/)）、または開発者が 1 つの Codebase を構築して複数のプラットフォーム（[Qt](https://developers.arcgis.com/qt)、[.NET](https://developers.arcgis.com/net)、[Java](https://developers.arcgis.com/java)、[JavaScript](https://developers.arcgis.com/javascript)）にまたがってデプロイできる API と SDK を使用して構築することができます。

ArcGIS ソフトウェアの開発パターンは、[ArcGIS Runtime SDKs](https://developers.arcgis.com/arcgis-runtime) と [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/) で類似しています。独自の ArcGIS ベースのアプリケーションを作成するためのアプローチを選択する際には、ネイティブ アプリと Web アプリの一般的な違いや ArcGIS の機能との違いを理解しておくと便利です。

- ネイティブ戦略では、接続されたワークフローとオフライン ワークフローの両方を持つアプリに対して、最適なデバイス統合とすぐに使える機能が提供されますが、ネイティブ開発のスキルが必要です。[ArcGIS Runtime SDKs](https://developers.arcgis.com/arcgis-runtime) を使用して、様々なデバイス プラットフォーム用のネイティブ アプリを作成することができます。
- Web 戦略では、Web サーバー上でホストされた HTML、JavaScript、及び CSS を使用して、Web ブラウザーを使用してユーザーのデバイスまたはデスクトップに配信します。この戦略は、ユーザーがどのデバイスを使用しているか分からない場合や、幅広いユーザーにリーチする必要がある場合に最適です。[ArcGIS API for JavaScript](https://developers.arcgis.com/javascript) を使用して Web クライアント ソリューションを作成することができます。


### ユーザーとチームのニーズ
最も重要な開発目標は、アプリを使用しているユーザーに最高のエクスペリエンスと機能を提供することです。アプリに適したプラットフォームを選択する際には、次の質問を考慮してください。

- 対象者は誰か（社内か一般ユーザーか）？
- どのような機能（マッピング、高度な空間分析など）がアプリをサポートするために必要ですか？
- ユーザーは時々切断されることがあり、オフラインでアプリを実行する必要がありますか？
- 現在の開発チームはどのようなスキルを持っていますか？
- アプリケーションをサポートするために必要なデータや Web サービスは何ですか？
- デバイスの GPS、コンパス、メディア、カレンダー、連絡先、テキストメッセージング（SMS）、通知などの使用など、デバイス統合の要件はありますか？

### プラットフォームによる一般的な違い
|考慮|ネイティブ戦略|Web 戦略|
|:---|:---|:---|
|ユーザーが好むデバイスは？|各オペレーティングシステム（OS）をターゲットにして、最高のネイティブ体験を提供します。これは、各 OS 用のアプリを作成するか、[クロスプラットフォーム](https://developers.arcgis.com/documentation/core-concepts/apis-sdks-apps/#crossplatform-development-with-arcgis)の開発オプションを利用することを意味します。|すべてのデバイスのブラウザで使用できるように、1 つの Web アプリケーションを構築します。|
|どのようなスキルが必要ですか？|各ネイティブプラットフォーム（例えば、iOS 用の Objective-C、Android 用の Java、Windows 用の .NET など）で開発するスキルが必要です。ただし、いくつかの Runtime SDKs は[クロスプラットフォーム](https://developers.arcgis.com/documentation/core-concepts/apis-sdks-apps/#crossplatform-development-with-arcgis)での開発オプションを提供しています。|HTML、JavaScript、CSS の知識が必要です。|
|ストア（App Store、Google Play、Windows Store、Amazon）を経由してアプリを配信しますか？|ストア経由での配信に対応しています。|ストア経由での配信は、追加フレームワーク [1] を利用することで対応しています。|
|デバイス機能へのアクセス|すべてのデバイス機能（タッチ、GPS、コンパス、カレンダー、メディア、連絡先、カメラなど）にアクセスすることができます。|アプリを実行しているブラウザがサポートしているものに限定されます。例えば、GPS はほとんどの最新のブラウザでサポートされています。一部のモバイルブラウザでは、カメラにアクセスしたり、デバイスのコンパスを使用したりすることもできます。|
|パフォーマンス|ネイティブパフォーマンス|通常、ネイティブパフォーマンスよりも低い|
|複数のデバイスやデスクトップにまたがるメンテナンス|アプリの更新にはアドホック配信、エンタープライズ配信、ストアでの配布が必要です。|アプリの更新は、すべてのデバイスのユーザーがすぐに利用できるようになります [2]。|

[1] ArcGIS API for JavaScript を使用すると、[PhoneGap](http://phonegap.com/)、[Apache Cordova™](http://cordova.apache.org/)、[Intel® XDK](https://software.intel.com/en-us/intel-xdk)、[Trigger.io](https://trigger.io/)、または [Electron](http://electron.atom.io/) を使用して、ブラウザでアプリを配布したり、複数のプラットフォームでハイブリッド アプリを配布したりすることができます。  
[2] ハイブリッド戦略を使用する場合は、アプリのビルドとデプロイが必要です。

### プラットフォーム間での ArcGIS の機能
|必要な機能|ネイティブ戦略|Web 戦略|
|:---|:---|:---|
|オフラインでのデータアクセスとアプリの使い勝手|オフラインでの使用はアプリに組み込まれており、オフラインでの地図閲覧、同期による編集、ジオコーディング、ルーティング、分析などが含まれています。|最近の Web ブラウザーでは、一部のローカルストレージが可能です。オフライン操作は可能ですが、カスタム開発が必要です。|
|ルーティングとジオコーディング|オンラインとオフラインに対応しています。オフライン データ ソースをオーサリングするには [ArcGIS Desktop](http://desktop.arcgis.com/) が必要です。|ネットワーク接続が必要です。|
|GeoEnrichment（人口統計、ビジネス、景観データ セット）|ネットワーク接続が必要です。|ネットワーク接続が必要です。|
|クリップ、バッファ、交差、単純化、結合、分割などのジオメトリ操作|オフラインはサポートされており、推奨されています。|オフラインはサポートされており、推奨されています。|
|モデルベース解析（ジオプロセシング）[1]|オンライン、オフライン、ローカルサーバー [2] を使用した場合に対応しています。|ネットワーク接続が必要です。|
|幾何学的ネットワークトレース [3]|オンライン、オフライン、ローカルサーバー [2] を使用した対応になります。|ネットワーク接続が必要です。|
|回転、オフセット、ベクトル/フォントベースのシンボル、military シンボル（2525b-2、C、D）のサポートを含む高度な地図作成とシンボル|完全にサポートされています。|回転とオフセットのサポート。完全サポートは、エクスポートされた画像を介してマップ サービスから利用可能です。|
|多数の機能を表示してアニメーション化|スムーズで高速な地図ナビゲーションを維持しながらの表示・アニメーションに完全対応しています。|対応していますが、数が多い場合はお勧めできません。|
|ローカル ファイルベースのデータ（ベクターとラスター）オフライン|ベクトル、ラスター データへのオフライン、及びローカルアクセスが組み込まれています。|サポートされていません。|
|ベクター タイル ベースマップ|オンラインとオフライン|ネットワーク接続が必要です。|
|ストリーム レイヤーなどのリアルタイム GIS|サポートされていません。|サポートされています。|
|3D|オンラインとオフライン（標高ソースを含むシーンパッケージ）|ネットワーク接続が必要です。|

[1] [ArcGIS Desktop](http://desktop.arcgis.com/) でモデルを構築し、ジオプロセシング サービスを介してクライアントに解析を提供する。  
[2] ローカルサーバーは、[ArcGIS Runtime SDK for .NET](https://developers.arcgis.com/net)、[Java](https://developers.arcgis.com/java)、[Qt](https://developers.arcgis.com/qt) で Windows および Linux で利用できます。  
[3] Valve isolation trace などのモデルベースの解析（ジオプロセシング サービス）で対応できます。

### ArcGIS を使用したクロスプラットフォーム開発

いくつかの ArcGIS API および SDK を使用すると、以下のような方法でアプリケーションを一度に記述し、複数のプラットフォームにデプロイすることができます。

|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|Android|iOS|Windows|macOS|Linux|
|:---|:---:|:---:|:---:|:---:|:---:|
|ArcGIS Runtime SDK for Android|✓|||||
|ArcGIS Runtime SDK for iOS||✓||||
|ArcGIS Runtime SDK for Java [1]|||✓|✓|✓|
|ArcGIS Runtime SDK for .NET [2]|✓|✓|✓|||		
|ArcGIS Runtime SDK for Qt [3]|✓|✓|✓|✓|✓|
|ArcGIS API for JavaScript [4]|✓|✓|✓|✓|✓|
|Web AppBuilder for ArcGIS [4]|✓|✓|✓|✓|✓|
|AppStudio for ArcGIS [5]|✓|✓|✓|✓|✓|
|ArcGIS REST API [6]|✓|✓|✓|✓|✓|

[1] [ArcGIS Runtime SDK for Java](https://developers.arcgis.com/java) は、Windows、Linux、および macOS デスクトップ システムのクロス プラットフォーム開発をサポートします。  
[2] [ArcGIS Runtime SDK for .NET](https://developers.arcgis.com/net) は、単一のコードベースから Windows デスクトップ、タブレット、および携帯電話用のアプリケーションの構築をサポートします。  
[3] [ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/qt) を使用すると、一度書いたコードを Android、iOS、Linux、macOS、Windows などにデプロイすることができます。QML API を使用して記述されたコードは、ターゲット プラットフォームごとにネイティブ コンパイルする必要がありますが、各プラットフォームでは同じコードです。Qt QML API や Esri Runtime for Qt にはプラットフォーム間の違いがないため、単一のコードベースでクロスプラットフォームのアプリケーション開発が可能になります。これを実現するためには、いくつかの妥協点が必要です。例えば、利用可能な UI コントロールはすべてのプラットフォームに存在しなければならず、クロスプラットフォームのコードを構築する際には、1 つのプラットフォームにのみ存在する特定の UI コンポーネントを使用することはできません。しかし、大部分のユースケースでは、QML API を使用するのが良い選択となるでしょう。  
[4] [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript) を使用すると、[PhoneGap](http://phonegap.com/)、[Apache Cordova™](http://cordova.apache.org/)、[Intel® XDK](https://software.intel.com/en-us/intel-xdk)、[Trigger.io](https://trigger.io/)、または [Electron](http://electron.atom.io/) を使用して、ブラウザでアプリを配布したり、複数のプラットフォームでハイブリッドアプリを配布することができます。  
[5] [AppStudio for ArcGIS](https://appstudio.arcgis.com/) アプリは、[ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/qt) を使用して拡張することができます。  
[6] [ArcGIS REST API](https://developers.arcgis.com/rest/) を使用すると、HTTP 要求を発行できる任意のプラットフォームで Web サービスを使用できます。

### ハイブリッド戦略
ハイブリッド戦略では、Web アプリのコンテンツ（HTML、JavaScript、CSS）とネイティブ コンポーネントを組み合わせてネイティブ アプリケーションを構築します。これには、[Apache Cordova](https://cordova.apache.org/) や [Electron](https://electron.atom.io/) などのフレームワークが含まれます。ハイブリッドアプリ戦略は、以下のような場合によく使用されます。

- ネイティブデバイスの機能（プッシュ通知、連絡先、カレンダーなど）やストレージへのアクセスを拡大することが望ましい。
- 開発チームはウェブアプリの経験が豊富で、ネイティブアプリの経験が少ない。

ハイブリッド アプリで使用される主なアプローチは、``WebView`` (Androidの場合) や ``UIWebView`` (iOS の場合) などの API を使用して、Web コンテンツをネイティブ アプリケーションに埋め込むことです。より高度な戦略としては、デスクトップ アプリケーションの構築に Electron を使用するなど、ネイティブ プラットフォームへの統合をさらに強化した JavaScript の活用があります。Esri では、ハイブリッド アプリケーション戦略に特化したフレームワークは提供していません。
