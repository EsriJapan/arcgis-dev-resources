+++
title = "レイヤー"
description = "ArcGIS を使用してアプリケーションを構築する場合に、レイヤーは主要なコンテンツとなります。ArcGIS で利用できるレイヤーは、ディスク上またはネットワーク経由で利用可能な ArcGIS REST API 、CSV ファイル、GeoJSON、また他のファイルを介して公開される Web サービスに基づいています。レイヤーの種類と特長について紹介します。"
Weight=4
aliases = ["/layers/"]
+++

ArcGIS を使用してアプリケーションを構築する場合に、レイヤーは主要なコンテンツとなります。
ArcGIS で利用できるレイヤーは、ディスク上またはネットワーク経由で利用可能な ArcGIS REST API 、CSV ファイル、GeoJSON 、また他のファイルを介して公開される Web サービスに基づいています。
レイヤーは、ArcGIS の開発者製品である API および SDK を使用して、ネットワーク経由またはディスク上からロードされた任意のデータから作成することができます。  
また、一時的なグラフィックは、API で作成できるグラフィック レイヤーを使用して地図上に表示することも可能です。
  
レイヤーは、マップやアプリケーションを作成するときに使用される地理的データの論理的集合で、大まかにフィーチャ レイヤーかタイル レイヤーのいずれかに分類することができます。

| レイヤー タイプ | 概要 |
| --- | --- |
| フィーチャ レイヤー | ポイントやポリゴンのような [フィーチャ](https://developers.arcgis.com/documentation/core-concepts/features-and-geometries/) を扱うレイヤー<br>ジオメトリおよび属性情報の編集または更新、オフラインデータベースと同期が可能 |
| タイル レイヤー | 事前にキャッシュを作成し、サーバー上にキャッシュを配置しているレイヤー |

タイル レイヤー の例として、ベクター タイル マップはタイル レイヤーとなります。3D を表示するシーン レイヤーも、アプリケーション内でできるだけスムーズに表示を行うために建物などの 3D オブジェクトを含むフィーチャをキャッシュすることから、タイル レイヤーに分類することができます。

### ArcGIS の主なレイヤー
ArcGIS Online と ArcGIS Enterprise は、編集、オフライン同期、ベースマップの使用など、地図アプリを開発・利用する上で一般的なユースケースを実現するためのさまざまなタイプのレイヤーをサポートしています。ArcGIS を使用してアプリケーションを作成するには、これらの種類のレイヤーを使用する方法を考慮することが重要です。
  
この表は、アプリケーション構築時に使用する主なレイヤータイプの一般的な使用例をまとめたものです。

| レイヤーの種類 | REST API Service | ArcGIS Online※1 | ArcGIS Enterprise | キャッシュ作成の可否※2 | ユースケース |
| :---: | :---: | :---: | :---: | :---: | :--- |
| Feature Layer<br>(フィーチャレイヤー) | [Feature Service](https://developers.arcgis.com/rest/services-reference/feature-service.htm) | 〇 | 〇 | - | ベクター形式のデータのクエリ、レンダリング、編集などに利用 |
| Tile Layer<br>(タイル レイヤー) | [Map Service](https://developers.arcgis.com/rest/services-reference/map-service.htm) | 〇 | 〇 | 〇 | 変更頻度が低いベースマップやその他の複雑なデータセットに利用 |
| Vector Tile Layer<br>(ベクター タイル レイヤー) | [Vector Tile Service](https://developers.arcgis.com/rest/services-reference/vector-tile-service.htm) | 〇 | 〇 | 〇 | 変更頻度が低いベースマップやその他の複雑なデータセットに利用 |
| Dynamic Map Layer<br>(ダイナミック マップ レイヤー) | [Map Service](https://developers.arcgis.com/rest/services-reference/map-service.htm) | - | 〇 | - | 頻繁に変更される、または複雑なレンダリング要件が必要なデータセットを表示するために利用 |
| Image Layer<br>(イメージ レイヤー) | [Image Service](https://developers.arcgis.com/rest/services-reference/image-service.htm) | - | 〇 | - | 衛星画像や他の画像データのレンダリングと解析に利用 |
| Scene Layer<br>(シーン レイヤー) | [Scene Service](https://developers.arcgis.com/rest/services-reference/scene-service.htm) | 〇 | 〇 | 〇 | 3Dデータセットの表示とレンダリングに利用 |

※1：ArcGIS Onlineではホストできないレイヤーもありますが、ArcGIS EnterpriseでホストされているレイヤーはArcGIS Onlineと共有できます。 [ArcGIS Server Webサービス](https://doc.arcgis.com/en/arcgis-online/reference/arcgis-server-services.htm) を参照してください。  
※2：キャッシュされたレイヤーは事前に表示のための処理が行われるため、クライアントへ高速に配信することができます。キャッシュされていないレイヤーはデータベースクエリを作成し、HTTPキャッシュのみを利用します。

### その他のレイヤー タイプ
ご紹介した主なレイヤー タイプの一覧に加え、ArcGIS Enterprise は多くのレイヤーをサポートしています。詳細な情報は、ArcGIS Enterprise の ヘルプ ドキュメント「 [ArcGIS を使用してサービスを公開する方法](https://enterprise.arcgis.com/ja/server/latest/publish-services/windows/approaches-for-publishing-services-with-arcgis.htm) 」をご参照ください。具体的なレイヤーについては [公開できるサービスの種類](https://enterprise.arcgis.com/ja/server/latest/publish-services/windows/what-types-of-services-can-you-publish.htm) でご紹介しています。（このドキュメントでは、レイヤー以外の GIS 解析を行うサービスについてもご紹介しています）。

レイヤー タイプのサポート状況は API / SDK によって異なるため、詳細は各製品のサンプルやリファレンスをご確認ください。  
CSV、GeoRSS、KML などの一般的なファイルの種類のサポートに加え、ArcGIS の開発者向け API / SDK では、カスタム レイヤー タイプとして拡張可能なグラフィック レイヤーをサポートします。

### レイヤーの使用
ArcGIS プラットフォームでは、複数の方法でレイヤーを作成、編集、共有できます。

* <b>ArcGIS REST API から使用する</b>  
上記で紹介しました ArcGIS の主なレイヤー タイプは、ArcGIS Online と ArcGIS Enterprise の基本コンポーネントである ArcGIS Server のインスタンスでホストされるサービスをサポートしており、ArcGIS の API / SDK は REST API を介して操作します。  
開発者は REST API を使用してレイヤーを表示させるだけでなく、REST API に直接リクエストを送ることで、独自の GIS 機能をアプリケーションに追加することが可能です。

* <b>ArcGIS API と SDK から使用する</b>  
ArcGIS の API / SDK は、REST API を包含して設計されています。どの API / SDK もサポートするレイヤーをマップに追加することができます。  
また、レイヤーの種類毎にクラスとして実装されており、実行可能な処理はメソッドとして定義しています。REST API を使用して同様の処理を行う場合に比べ、より扱いやすくなっています。<br><br>
レイヤーの扱い方は、リファレンスだけでなくサンプルをご紹介するページやガイドページからでも学ぶことができます。  
ArcGIS API for JavaScript では、Intro to layers の sandbox で学習することができます。（このページを翻訳したはじめてのWeb マッピングアプリケーション開発：レイヤー表示編もご覧ください）ArcGIS Runtime SDK の各 OS では、ガイドページの基礎（Fundamentals）にレイヤーについての記述があります。（例：ArcGIS Runtime SDK for .NETのレイヤー）

* <b>Web マップで使用する</b>  
ArcGIS プラットフォームで利用できる Web マップでは、各レイヤーを追加してひとつの主題図を作成することが可能です。  
Web マップを使用すると、開発者は、複数のアプリやユーザー間で共有できるレイヤーとオプションの設定を 1 つのセットとして作成することができます。詳細については、「 [Web マップの概要](https://developers.arcgis.com/documentation/core-concepts/web-maps/) 」と「 [Web マップ仕様](https://developers.arcgis.com/web-map-specification/) 」を参照してください。  
レイヤは、Web マップの basemapLayers または operationalLayers プロパティに追加し、ArcGIS Online または ArcGIS Enterprise のアイテム ID または [REST API Map Service](https://developers.arcgis.com/rest/services-reference/map-service.htm) への URL で参照することができます。

### レイヤーの作成
レイヤーの作成方法は、ArcGIS の各製品によって異なります。  

#### フィーチャ レイヤー
* ArcGISチュートリアル：[CSV、GeoJSON、Shapefile、またはファイルGeoDatabaseのインポート](https://developers.arcgis.com/labs/arcgisonline/import-data/)
* ArcGISチュートリアル：[新しい空のフィーチャレイヤーのスキーマを定義します](https://developers.arcgis.com/labs/arcgisonline/create-a-new-dataset/)
* ArcGIS Online：[さまざまな形式のアイテムを使ったフィーチャレイヤーの公開](https://doc.arcgis.com/ja/arcgis-online/manage-data/add-items.htm)
* ArcGIS Enterprise：[フィーチャレイヤーの公開](https://enterprise.arcgis.com/ja/portal/latest/use/publish-features.htm)
* ArcGIS Pro：[フィーチャレイヤーの作成と ArcGIS Pro との共有](https://pro.arcgis.com/ja/pro-app/help/sharing/overview/web-feature-layer.htm)

#### タイル レイヤー
* ArcGIS Online：[タイルの公開](https://doc.arcgis.com/ja/arcgis-online/manage-data/publish-tiles.htm)
* ArcGIS Pro：[タイルの公開](https://enterprise.arcgis.com/ja/portal/latest/use/publish-tiles.htm)

#### ベクトル タイル レイヤー
* ArcGIS Pro：[ベクタータイルの公開](https://enterprise.arcgis.com/ja/portal/latest/use/publish-vector-tiles.htm)

#### シーン レイヤー
* ArcGIS Online：[フィーチャサービスからのシーンレイヤーの公開（ベータ）](https://doc.arcgis.com/ja/arcgis-online/manage-data/publish-scenes.htm)
* ArcGIS Pro：[シーンレイヤーの公開](https://enterprise.arcgis.com/ja/portal/latest/use/publish-scenes.htm)

#### ダイナミック マップ レイヤー
* ArcMap：[マップサービスの公開](https://enterprise.arcgis.com/ja/server/latest/publish-services/windows/how-to-publish-a-service.htm)

#### イメージ レイヤー
* ArcMap：[モザイクデータセットを作成する](https://desktop.arcgis.com/ja/arcmap/latest/manage-data/raster-and-images/ex-1-creating-a-mosaic-dataset.htm)