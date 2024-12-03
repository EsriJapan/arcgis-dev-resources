+++
title = "インストール ガイド"
description = "ArcGIS Maps SDK for Swift のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/ios/install-ios-200.x/"]
+++

出典：ArcGIS Maps SDK for Swift - Guide - [Install and set up](https://developers.arcgis.com/swift/install-and-set-up/)

このインストール ガイドでは、ArcGIS Maps SDK for Swift (バージョン 200.x) のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-ios/)」のチュートリアルをご覧ください。

## Swift Package Manager
Swift Package Manager を使用して Xcode プロジェクトに簡単に統合できます。

Xcode 16 での手順
1. Xcode プロジェクトを開きます。メニューバーで、[File] > [Add Package Dependencies...] を選択します。

<img src="https://developers.arcgis.com/swift/static/f419aeb428f027c28577da5386a1eb6f/4cdf7/swiftpm-xcode15.png" width="650px">

2. パッケージ リポジトリの URL として https://github.com/esri/arcgis-maps-sdk-swift を入力します。
3. オプションとして、正確なバージョンまたは使用するバージョンの範囲を指定したい場合は、Dependency Rule オプションを選択します。

4. [Add Package] をクリックします。

5. [Add to Target] リストからアプリを選択します。[Add Package] をクリックします。

<img src="https://developers.arcgis.com/swift/static/2dd70de575f5618041f2391d01b7deef/874d1/xcode-select-target.png" width="650px">

6. ターゲットでアプリを選択します。[Frameworks, Libraries, and Embedded Content] で + 記号をクリックし、"ArcGIS" がまだ存在しない場合は追加します。

<img src="https://developers.arcgis.com/swift/static/908bbaabea25038c6645f48d3c7c7354/eb1d2/xcode-embed-frameworks.png" width="650px">

ArcGIS の API を使用するには、次のインポートステートメントを任意の Swift コード（.swift）ファイルに追加します。
```swift  
import ArcGIS
```

## 追加のダウンロード
開発プロジェクトを強化するために、[サンプル コード](#サンプル-コード)と[データ](#追加のデータ)、[ツール](#arcgis-maps-sdk-for-swift-toolkit) の追加リソースを利用できます。このガイドを、[スタンドアロンの開発者ドキュメント](#スタンドアロンの開発者向けドキュメント)としてダウンロードすることもできます。

### サンプル コード
独自のアプリケーションに追加できるさまざまな強力な機能を紹介する実践的なサンプル コードを入手してください。サンプルを検索し、[サンプル ドキュメント](https://developers.arcgis.com/swift/sample-code/)で関連するコードを参照するか、[サンプル リポジトリ](https://github.com/Esri/arcgis-maps-sdk-swift-samples)からコードをダウンロードしてローカルで実行できます。

### ArcGIS Maps SDK for Swift Toolkit
[ArcGIS Maps SDK for Swift Toolkit](https://developers.arcgis.com/swift/toolkit/) は、ArcGIS Maps SDK for Swift チームによって管理されているオープン ソース プロジェクトであり、アプリ開発を簡素化するためのコントロールとユーティリティが含まれています。 [Examples プロジェクト](https://github.com/Esri/arcgis-maps-sdk-swift-toolkit/blob/main/Examples)でこれらのコンポーネントの動作を確認するか、[ドキュメント](https://github.com/Esri/arcgis-maps-sdk-swift-toolkit/blob/main/Documentation)を読んで詳細を確認できます。

### スタンドアロンの開発者向けドキュメント
[ダウンロード ページ](https://developers.arcgis.com/swift/downloads/) から、開発者向けドキュメントをアーカイブとしてダウンロードできます。アーカイブには、ローカル Web サーバからドキュメントを提供する手順が含まれているため、インターネットに接続しなくてもドキュメントにアクセスできます。スタンドアロン ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、およびサンプル ドキュメントが含まれています。このドキュメントは、ローカルのスタンドアロン コンピューターまたは内部ネットワーク上で実行するように設計されており、パブリックなインターネット上では実行できません。

ローカルでドキュメントを公開する方法：

* 使用する SDK のドキュメントを[ダウンロード](https://developers.arcgis.com/swift/downloads/)します。ダウンロードしたファイルは、.zip アーカイブ形式になっています。
* アーカイブをローカル フォルダに解凍します。解凍されたアーカイブには、public と install という 2 つのサブフォルダがあります。
* install フォルダ内の README.md ファイルを開き、選択した Web サーバーの指示に従います。

{{% notice note %}}

ライブ ドキュメント サイトはリリース時及びリリースの間に定期的に更新されますが、スタンドアロン ドキュメントは静的で、最初のリリース後は更新されません。

{{% /notice %}}

### 追加のデータ
#### Projection Engine データ
測地系変換は、ある空間基準から別の空間基準へジオメトリを投影する際に、2つの空間基準の基礎となる測地系に違いがある場合に使用されます。測地系変換は、数学的に定義する（方程式ベースの変換）ことも、外部のサポート ファイルに依存する（グリッド ベースの変換）ことも可能です。アプリでグリッドベースの変換を使用する場合、Projection Engine ファイルが存在する必要があります。Projection Engine ファイルが無い状態で変換をしようとすると、エラーが発生します。API は、必要なファイルがローカル ファイル システムで利用可能かどうかを検出できます。

[グリッド ベースの変換](https://developers.arcgis.com/swift/spatial-and-data-analysis/spatial-references/#grid-based-transformations)を使用している場合は、ダウンロード ページからサポートする [Projection Engine ファイル](https://developers.arcgis.com/swift/downloads/#projection-engine-data)をダウンロードしてください。座標系、投影法、測地系変換の操作の詳細については、[Spatial references](https://developers.arcgis.com/swift/spatial-and-data-analysis/spatial-references/) のトピックを参照してください。

#### Electronic Navigational Charts (ENC)
航海用電子海図（ENC）は、水路や海上の情報を可視化し、分析するためのジオリファレンスされたベクター データセットです。SDK は、[国際水路機関（IHO）](https://iho.int/en/)の [S-57 規格](https://iho.int/uploads/user/pubs/standards/s-57/31Main.pdf) に準拠した ENC をサポートしています。

航海用電子海図 (ENC) を使用する場合は、ダウンロード ページから [hydrography](https://developers.arcgis.com/swift/downloads/#hydrography-data) データをダウンロードします。ENC データの操作の詳細については、[Display electronic navigational charts](https://developers.arcgis.com/swift/layers/display-electronic-navigational-charts/) のトピックを参照してください。