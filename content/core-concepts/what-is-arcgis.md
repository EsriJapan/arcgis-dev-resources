+++
title = "ArcGIS とは"
description = "ArcGIS は、空間データの作成、管理、共有、分析を行う組織向けのプラットフォームで、サーバー コンポーネント、モバイルおよびデスクトップ アプリケーション、そして開発者ツールで構成されています。ArcGIS が提供しているサーバー コンポーネントやモバイル、およびデスクトップ、開発ツールについて紹介します。"
Weight=1
aliases = ["/what-is-arcgis/"]
+++

## ArcGIS とは
ArcGIS は、空間データの作成、管理、共有、分析を行う組織向けのプラットフォームで、サーバー コンポーネント、モバイルおよびデスクトップ アプリケーション、そして開発者ツールで構成されています。プラットフォームとしての ArcGIS は、ArcGIS Enterprise を使用してオンプレミスまたはクラウド（[Amazon Web Services (AWS)](https://aws.amazon.com/jp/ec2/)、[Microsoft Azure](https://azure.microsoft.com/ja-jp/)、[さくらのクラウド](https://cloud.sakura.ad.jp/)等）にデプロイするか、Esri がホストし管理する ArcGIS Online を介して使用することができます。

## ArcGIS プラットフォーム
[ArcGIS プラットフォーム](https://www.esrij.com/question/85268/)は、ArcGIS REST API と共通のファイル形式を介して相互に通信する多くのコンポーネントで構成されています。ArcGIS を使用して効率的にアプリケーションを構築するためには、プラットフォームのコンセプトを理解することが重要になります。

## ArcGIS Online と ArcGIS Enterprise
[ArcGIS Online](https://www.esrij.com/products/arcgis-online/) と [ArcGIS Enterprise](https://www.esrij.com/products/arcgis-enterprise/) が ArcGIS プラットフォームの中核です。このプラットフォームには、ホスト型 GIS サービスと、コンテンツ、マップ、アプリケーション、およびユーザを公開、共有、管理するための Web UI と API を備えたポータルの両方が用意されています。[ポータル](https://www.esrij.com/products/arcgis-enterprise/details/portal-for-arcgis/) を使って UI 上からインタラクティブにデータを操作することも、UI 上からではなく、[REST API](https://developers.arcgis.com/documentation/core-concepts/rest-api/) を使って直接データを操作することもできます。

* [ArcGIS Online](https://www.esrij.com/products/arcgis-online/) - データのインポート, コンテンツの作成と管理, ユーザーの管理, グループの作成, コンテンツの共有
* [MapViewer（マップ ビューアー）](https://www.arcgis.com/home/webmap/viewer.html) - 2D マップの作成, データの編集, データの分析
* [SceneViewer（シーン ビューアー）](https://www.arcgis.com/home/webscene/viewer.html) - 3D マップの作成, スライドの作成
* [ArcGIS REST API](https://developers.arcgis.com/documentation/core-concepts/rest-api/)

## ArcGIS Desktop
[ArcGIS Pro](https://www.esrij.com/products/arcgis-desktop/) および ArcMap は ArcGIS Desktop 製品の一部であり、ArcGIS Online および ArcGIS Enterprise と連携してデータやマップを公開および管理することができます。これらのデスクトップ製品は、詳細かつ高度な分析に優れています。また、様々なツールを使って[デスクトップの拡張](https://community.esri.com/docs/DOC-11507)や[処理の自動化](https://www.esrij.com/products/arcgis-desktop/details/framework/)をすることもできます。

## ArcGIS Apps
ArcGIS Online および ArcGIS Enterprise と連携できるアプリケーションも提供しています。詳細に関しては以下をご参照ください。

* [ArcGIS Collector](https://www.esrij.com/products/arcgis-collector/) - モバイル端末から GIS データを現地で直接収集や更新できるアプリケーション
* [ArcGIS Navigator](https://www.esri.com/products/navigator) - モバイル端末から最適経路を探索するためのアプリケーション ※
* [ArcGIS Dashboards](https://www.esrij.com/products/arcgis-dashboards/) - 地図上のリアルタイム データを監視、追跡、および評価することに特化したダッシュボード アプリケーション
* [ArcGIS Explorer](https://www.esrij.com/products/arcgis-explorer/) - iOS と Android 上で動作する、無料のマップ閲覧アプリケーション
* [ArcGIS Workforce](https://www.esrij.com/products/workforce/) - 現地調査作業の計画と調整を行うアプリケーション
* [ArcGIS Survey123](https://www.esrij.com/products/survey123/) - シンプルで直感的な調査票で GIS データを収集できるアプリケーション

※ 現在、国内未サポートです。

## ArcGIS API と SDK
カスタマイズが必要な場合、ArcGIS プラットフォームには、既存の ArcGIS 製品を拡張したり、独自のアプリを構築するための開発キット（API と SDK）が用意されています。カスタマイズを行う際は、利用可能な[開発キット](https://www.esrij.com/products/developer/)を比較してください。

* [ArcGIS API for JavaScript](https://www.esrij.com/products/arcgis-api-for-javascript/)
* [ArcGIS Web AppBuilder (Developer Edition)](https://www.esrij.com/products/web-appbuilder-dev/)
* [ArcGIS Runtime SDK for iOS](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/)
* [ArcGIS Runtime SDK for Android](https://www.esrij.com/products/arcgis-runtime-sdk-for-android/)
* [ArcGIS Runtime SDK for .NET](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/)
* [ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/qt/latest/)     ※
* [ArcGIS Runtime SDK for Java](https://developers.arcgis.com/java/latest/) ※
* [ArcGIS API for Python](https://www.esrij.com/products/arcgis-api-for-python/)
* [ArcGIS Engine](https://www.esrij.com/products/arcgis-engine/) 

※ 現在、国内未サポートです。

## ArcGIS for Developers Tools
[ArcGIS for Developers](https://www.esrij.com/products/arcgis-for-developers/) に[サインイン](https://developers.arcgis.com/dashboard)すると、ダッシュボードやツールにアクセスして、アプリケーションの管理、クレジットの使用状況の確認、およびデータの管理を行うことができます。ダッシュボードからは、プラットフォーム上の他の ArcGIS アプリケーションにもアクセスすることができます。

* [ArcGIS Developer Dashboard](https://developers.arcgis.com/dashboard) - アプリケーションの管理, 認証, クレジットの使用状況の確認, データのインポート
* [ArcGIS Vector Tile Style Editor](https://developers.arcgis.com/vector-tile-style-editor/) - ベースマップのカスタマイズ
* [Create a new dataset](https://developers.arcgis.com/layers/new) - 使用するアプリケーション用に新しいポイント、ライン、ポリゴンフィーチャクラスの作成
