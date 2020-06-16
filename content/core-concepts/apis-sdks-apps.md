+++
title = "API、SDK、アプリ"
description = "ArcGIS では、ArcGIS Pro のような既存の ArcGIS アプリケーションを拡張したり、特定のニーズに合わせて構成可能なアプリケーションをカスタマイズしたり、ゼロから完全にカスタムのアプリケーションを作成したりすることができます。ArcGIS で利用できるアプリケーションや API、SDK について紹介します。"
Weight=2
aliases = ["/apis-sdks-apps/"]
+++

{{% notice note %}}
本ページに記載のある以下の製品については国内未サポートの製品です。

- Navigator for ArcGIS
- ArcGIS Experience Builder (Developer Edition) 
- AppStudio Developer Edition
- ArcGIS Runtime SDK for Java
- ArcGIS Runtime SDK for Qt
{{% /notice %}}

## アプリの種類
ArcGIS プラットフォームを使用して実現できるワークフローやタスクには、様々な種類があります。ArcGIS Pro のような既存の ArcGIS アプリケーションを拡張したり、特定のニーズに合わせて設定可能なアプリケーションをカスタマイズしたり、ゼロから完全なカスタム アプリケーションを作成したりすることができます。

### ArcGIS Apps
ArcGIS プラットフォームには、以下のような一般的なユースケースをカバーする様々なアプリケーションが含まれています。

- [ArcGIS Desktop](https://www.esrij.com/products/arcgis-desktop/) - ArcGIS Pro や ArcMap などのデスクトップ GIS アプリケーション
- [Collector for ArcGIS](https://www.esrij.com/products/collector-for-arcgis/) - モバイルのデータ収集アプリ
- [Navigator for ArcGIS](http://www.esri.com/products/navigator) - 高度にカスタマイズ可能なモバイル ルーティング ソリューション
- [ArcGIS Dashboards](https://www.esrij.com/products/arcgis-dashboards/) - カスタマイズ可能なリアルタイム ダッシュボード
- [Explorer for ArcGIS](https://www.esrij.com/products/explorer-for-arcgis/) - 組織内の GIS データの検索と表示
- [Workforce for ArcGIS](https://www.esrij.com/products/workforce/) - 現地調査を調整するためのモバイル／Web アプリ
- [Survey123 for ArcGIS](https://www.esrij.com/products/survey123-for-arcgis/) - データ収集・調査のための軽量アプリ

これらのアプリケーションの多くは、新しい機能を追加するために[スクリプトでの自動化や拡張](https://developers.arcgis.com/documentation/#extend)が可能です。


### 構成可能なアプリとアプリ ビルダー
ArcGIS Online および ArcGIS Enterprise には、カスタマイズや拡張が可能な多くの構成可能なアプリケーションがあらかじめ組み込まれています。これらのアプリケーションは、開発者がダウンロードしてカスタマイズすることができます。ArcGIS Online のヘルプには、[構成可能なアプリケーションの比較](http://doc.arcgis.com/en/arcgis-online/create-maps/choose-configurable-app.htm)が記載されています。

ArcGIS には、構成可能なアプリケーションに加えて、次の 3 つのアプリ ビルダー ソリューションがあります。

- [ArcGIS Experience Builder (Developer Edition)](https://developers.arcgis.com/experience-builder/) - WYSIWYG なウィジェットベースのインターフェイスを使用して、フレキシブルなレイアウト、2D/3D、複数ページ構成に対応したアプリを構築します。
- [Web AppBuilder for ArcGIS (Developer Edition)](https://www.esrij.com/products/web-appbuilder-for-arcgis-dev/) - WYSIWYG なウィジェットベースのインターフェイスを使用して、Web アプリを構築します。
- [AppStudio for ArcGIS Developer Edition](https://doc.arcgis.com/en/appstudio/create-apps/licenseappstudio.htm) - テンプレートに基づいてモバイル アプリケーションを公開します。

### カスタム アプリ
ArcGIS の API や SDK を使用すると、開発者は特定のニーズに対応したカスタム アプリケーションを構築することができます。様々なユースケースやプラットフォームを対象とした API / SDK があるため、プロジェクトに適した API / SDK を選択するためには慎重に比較検討する必要があります。

## API または SDK の選択
Esri の API / SDK、及び開発ツールを使用すると、あらゆる最新のプラットフォームに対応した強力なロケーション ベースのアプリケーションを開発することができます。Esri のソリューションは、モバイル ([Android](https://www.esrij.com/products/arcgis-runtime-sdk-for-android/)、[iOS](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/)、[Windows](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/)) 、デスクトップ ([Java](https://developers.arcgis.com/java)、[Windows](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/)、[Linux](https://developers.arcgis.com/qt)) を対象としたネイティブ開発、及びWeb 開発に対応しています。[ArcGIS API for JavaScript](https://www.esrij.com/products/arcgis-api-for-javascript/) を使用して、最新の Web ブラウザー上にアプリをデプロイすることができます。これらのソリューションは、非開発者向けではコーディング不要で構築することができます。また、開発者向けでは最小限のコーディング ([Web AppBuilder for ArcGIS (Developer Edition)](https://www.esrij.com/products/web-appbuilder-for-arcgis-dev/)、[AppStudio for ArcGIS](https://appstudio.arcgis.com/)) で、もしくは API/SDK を使用して 1 つの コードベース を元に複数のプラットフォーム ([Qt](https://developers.arcgis.com/qt)、[.NET](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/)、[Java](https://developers.arcgis.com/java)、[JavaScript](https://www.esrij.com/products/arcgis-api-for-javascript/)) でデプロイすることができます。

基本的な部分においては [ArcGIS Runtime SDKs](https://developers.arcgis.com/arcgis-runtime) と [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/) の開発パターンは似ています。独自の ArcGIS ベースのアプリケーションを作成するためのアプローチを選択する際には、ネイティブ アプリと Web アプリの一般的な違いや ArcGIS の機能との違いを理解しておくと便利です。

- ネイティブ アプリでは、オンラインとオフラインの両方のワークフローを持つアプリに対して、最適なデバイス連携とすぐに使える機能が提供されます。しかし、ネイティブ開発のスキルが必要です。ArcGIS Runtime SDKs ([Android](https://www.esrij.com/products/arcgis-runtime-sdk-for-android/)、[iOS](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/)、[Windows](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/)) を使用して、様々なデバイス プラットフォーム用のネイティブ アプリを作成することができます。
- Web アプリでは、Web サーバー上でホストされた HTML、JavaScript、及び CSS を使用して、Web ブラウザーを介してユーザーのデバイスまたはデスクトップに配信します。これは、ユーザーがどのデバイスを使用しているか分からない場合や、幅広いユーザーから利用される場合に最適です。[ArcGIS API for JavaScript](https://developers.arcgis.com/javascript) を使用して Web クライアント ソリューションを作成することができます。

### ユーザーとチームのニーズ
最も重要な開発目標は、アプリを使用しているユーザーに最高の体験と機能を提供することです。アプリに適したプラットフォームを選択する際には、次の項目を考慮してください。

- 対象者は誰か (社内か一般ユーザーか) 
- どのような機能 (マッピング、高度な空間分析など) がアプリに必要か
- ユーザーがオフラインでアプリを実行する必要があるか
- 現在の開発チームがどのようなスキルを持っているか
- アプリケーションに必要なデータや Web サービスは何か
- デバイスの GPS、コンパス、メディア、カレンダー、連絡先、テキストメッセージング (SMS) 、通知の使用など、デバイスと連携する必要があるか

### プラットフォームによる一般的な違い
|考慮する事項|ネイティブ アプリ|Web アプリ|
|:---|:---|:---|
|ユーザーが用いるデバイスは何か？|各オペレーティングシステム (OS) をターゲットにして、最高のネイティブ体験を提供します。各 OS 用のアプリを作成するか、[クロスプラットフォーム](#ArcGIS-を使用したクロスプラットフォーム開発)で開発することで実現します。|すべてのデバイスのブラウザーで使用できるように、1 つの Web アプリケーションを構築します。|
|どのようなスキルが必要か？|各ネイティブ プラットフォームで開発するスキル (例えば、iOS 用の Objective-C、Android 用の Java、Windows 用の .NET など) が必要です。ただし、いくつかの SDK は[クロスプラットフォーム](#ArcGIS-を使用したクロスプラットフォーム開発)での開発オプションを提供しています。|HTML、JavaScript、CSS の知識が必要です。|
|ストア (App Store、Google Play、Windows Store、Amazon) を経由してアプリを配布しますか？|ストアでの配布に対応しています。|ストアでの配布は、追加フレームワーク<sup>[1]</sup>を利用することで対応しています。|
|デバイス機能へのアクセス|すべてのデバイス機能 (GPS、コンパス、カレンダー、メディア、連絡先、カメラなど) にアクセスすることができます。|アプリを実行しているブラウザーがサポートしているものに限定されます。例えば、GPS はほとんどの最新のブラウザーでサポートされています。一部のモバイルブラウザーでは、カメラにアクセスしたり、デバイスのコンパスを使用したりすることもできます。|
|パフォーマンス|ネイティブ パフォーマンス|通常、ネイティブ アプリのパフォーマンスよりも低い|
|複数のデバイスやデスクトップにまたがるメンテナンス|アプリの更新には AdHoc 配信、エンタープライズ配信、ストアでの配布が必要です。|アプリの更新は、すべてのデバイスのユーザーがすぐに利用できるようになります<sup>[2]</sup>。|

<span style="font-size: 75%">[1] ArcGIS API for JavaScript を使用すると、[PhoneGap](http://phonegap.com/)、[Apache Cordova™](http://cordova.apache.org/)、[Intel® XDK](https://software.intel.com/en-us/intel-xdk)、[Trigger.io](https://trigger.io/)、または [Electron](http://electron.atom.io/) を使用して、ブラウザーでアプリを配布したり、複数のプラットフォームでハイブリッド アプリを配布したりすることができます。</span></br>
<span style="font-size: 75%">[2] ハイブリッド アプリを使用する場合は、アプリのビルドとデプロイが必要です。</span>

### プラットフォーム全体での ArcGIS の機能
|必要な機能|ネイティブ アプリ|Web アプリ|
|:---|:---|:---|
|オフラインでのデータアクセスとアプリのユーザービリティ|オフラインでの使用はアプリに組み込まれており、オフラインでの地図参照、編集、同期、ジオコーディング、ルート検索、分析などが含まれます。|最新の Web ブラウザーでは、一部のローカル ストレージの使用が可能です。オフライン操作は可能ですが、カスタマイズが必要です。|
|ルーティングとジオコーディング|オンラインとオフラインに対応しています。オフラインのデータ ソースを作成するには [ArcGIS Desktop](https://www.esrij.com/products/arcgis-desktop/) が必要です。|ネットワーク接続が必要です。|
|ジオエンリッチメント (人口統計、ビジネス等のデータの付加サービス) |ネットワーク接続が必要です。|ネットワーク接続が必要です。|
|クリップ、バッファー、インターセクト、単純化、ユニオン、スプリットなどのジオメトリ操作|オフラインはサポート及び推奨されています。|ネットワーク接続が必要です。|
|モデル ベースの解析 (ジオプロセシング ) <sup>[1]</sup>|オンライン、オフライン、ローカル サーバー <sup>[2]</sup> の使用に対応しています。|ネットワーク接続が必要です。|
|ジオメトリック ネットワークのトレース<sup>[3]</sup>|オンライン、オフライン、ローカルサーバー<sup>[2]</sup> の使用に対応しています。|ネットワーク接続が必要です。|
|回転、オフセット、ベクター / フォントベースのシンボル、軍事関連シンボル (2525b-2、C、D) のサポートを含む高度な地図作成|全てサポートされています。|回転とオフセットがサポートされています。その他については、エクスポートされた画像を介してマップ サービスから利用可能です。|
|大量のフィーチャの表示とアニメーション|スムーズで高速な地図ナビゲーションを維持しながらの表示 / アニメーションに完全対応しています。|対応していますが、数が多い場合は非推奨です。|
|オフライン及びローカルのファイルベースのデータ (ベクターとラスター)|オフライン及びローカルのベクター / ラスター データへのアクセスが組み込まれています。|サポートされていません。|
|ベクター タイル ベースマップ|オンライン / オフラインでのアクセスがサポートされています。|ネットワーク接続が必要です。|
|ストリーム レイヤーなどのリアルタイム GIS|サポートされていません。|サポートされています。|
|3D|オンライン / オフライン (標高データを含むシーンパッケージ ) がサポートされています。 |ネットワーク接続が必要です。|

<span style="font-size: 75%">[1] [ArcGIS Desktop](http://desktop.arcgis.com/) でモデルを構築し、ジオプロセシング サービスを介してクライアントに解析を提供します。</span></br>
<span style="font-size: 75%">[2] ローカルサーバーは、[ArcGIS Runtime SDK for .NET](https://developers.arcgis.com/net)、[Java](https://developers.arcgis.com/java)、[Qt](https://developers.arcgis.com/qt) で Windows および Linux で利用できます。</span></br>
<span style="font-size: 75%">[3] 分離トレースなどのモデルベースの解析 (ジオプロセシング サービス ) で対応できます。</span>

### ArcGIS を使用したクロスプラットフォーム開発

いくつかのAPI / SDK を使用すると、以下のような方法でアプリケーションを一度に記述し、複数のプラットフォームにデプロイすることができます。

|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|Android|iOS|Windows|macOS|Linux|
|:---|:---:|:---:|:---:|:---:|:---:|
|ArcGIS Runtime SDK for Android|✓|||||
|ArcGIS Runtime SDK for iOS||✓||||
|ArcGIS Runtime SDK for Java<sup>[1]</sup>|||✓|✓|✓|
|ArcGIS Runtime SDK for .NET<sup>[2]</sup>|✓|✓|✓|||		
|ArcGIS Runtime SDK for Qt<sup>[3]</sup>|✓|✓|✓|✓|✓|
|ArcGIS API for JavaScript<sup>[4]</sup>|✓|✓|✓|✓|✓|
|Web AppBuilder for ArcGIS<sup>[4]</sup>|✓|✓|✓|✓|✓|
|AppStudio for ArcGIS<sup>[5]</sup>|✓|✓|✓|✓|✓|
|ArcGIS REST API<sup>[6]</sup>|✓|✓|✓|✓|✓|

<span style="font-size: 75%">[1] [ArcGIS Runtime SDK for Java](https://developers.arcgis.com/java) は、Windows、Linux、および macOS デスクトップ システムのクロス プラットフォーム開発をサポートします。</span></br>
<span style="font-size: 75%">[2] [ArcGIS Runtime SDK for .NET](https://developers.arcgis.com/net) は、単一のコードベースから Windows デスクトップ、タブレット、およびモバイル アプリケーションの構築をサポートします。</span></br>
<span style="font-size: 75%">[3] [ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/qt) を使用すると、一度書いたコードを Android、iOS、Linux、macOS、Windows などにデプロイすることができます。QML API を使用して記述されたコードは、対象のプラットフォームごとにネイティブ コンパイルする必要がありますが、各プラットフォームでは同じコードです。Qt QML API や Esri Runtime for Qt にはプラットフォーム間の違いがないため、単一のコードベースでクロスプラットフォームのアプリケーション開発が可能になります。これを実現するためには、いくつかの妥協点が必要です。例えば、利用可能な UI コントロールはすべてのプラットフォームに存在しなければならず、クロスプラットフォームのコードを構築する際には、1 つのプラットフォームにのみ存在する特定の UI コンポーネントを使用することはできません。しかし、大部分のユースケースでは、QML API を使用するのが良い選択となるでしょう。</span></br>
<span style="font-size: 75%">[4] [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript) を使用すると、[PhoneGap](http://phonegap.com/)、[Apache Cordova™](http://cordova.apache.org/)、[Intel® XDK](https://software.intel.com/en-us/intel-xdk)、[Trigger.io](https://trigger.io/)、または [Electron](http://electron.atom.io/) を使用して、ブラウザーでアプリを配布したり、複数のプラットフォームでハイブリッドアプリを配布することができます。</span></br>
<span style="font-size: 75%">[5] [AppStudio for ArcGIS](https://appstudio.arcgis.com/) アプリは、[ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/qt) を使用して拡張することができます。</span></br>
<span style="font-size: 75%">[6] [ArcGIS REST API](https://developers.arcgis.com/rest/) を使用すると、HTTP 要求を発行できる任意のプラットフォームで Web サービスを使用できます。</span>

### ハイブリッド アプリ
ハイブリッド アプリでは、Web アプリのコンテンツ (HTML、JavaScript、CSS) とネイティブ コンポーネントを組み合わせてネイティブ アプリケーションを構築します。これには、[Apache Cordova](https://cordova.apache.org/) や [Electron](https://electron.atom.io/) などのフレームワークが含まれます。ハイブリッド アプリは、以下のような場合によく使用されます。

- ネイティブ デバイスの機能 (プッシュ通知、連絡先、カレンダーなど ) やストレージへのアクセスを拡大することが望ましい。
- 開発チームが、ウェブアプリの経験が豊富でネイティブアプリの経験が少ない。

ハイブリッド アプリで使用される主なアプローチは、``WebView`` (Androidの場合) や ``UIWebView`` (iOS の場合) などの API を使用して、Web コンテンツをネイティブ アプリケーションに埋め込むことです。より高度なアプローチとしては、デスクトップ アプリケーションの構築に Electron を使用するなど、ネイティブ プラットフォームとの連携をさらに強化した JavaScript の活用があります。Esri では、ハイブリッド アプリに特化したフレームワークは提供していません。
