+++
title = "ベースマップ サービスの種類"
Weight=5
aliases = ["/type-of-basemap-services/"]
+++
出典：Mapping APIs and location services - [types of basemaps](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/types-of-basemap-services/
)

地図アプリケーション開発のためのベースマップ サービス、機能、およびベスト プラクティスの概要。
　　　　　　　　　　　　　　　　
 

<iframe width="100%" height="400" id="DemoApp-gf1e4f0b9-39b1-23c1-aa14-4f83e29dbd4c" title="ArcGIS Developer Guide: Basemap layers" class="relative h-full w-full border-none bg-transparent" src="https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-basemaps-code-basemap-services-compare-demo-781fdd9f6a166b9aa6ea20cb30bdd61c.html"
></iframe>    
<p align="center">
さまざまな ArcGIS ベースマップ サービスのデータとスタイルを表示した地図</p>


## ArcGIS ベースマップ サービス
ArcGIS ベースマップ サービスは、Esri が公開するロケーションサービスであり、地図アプリケーションを構築するための ベースマップのデータ ソースを提供します。このサービスには、[ArcGIS ベースマップ スタイル サービス](#arcgis-ベースマップ-スタイル-サービス) と [ArcGIS 静的 ベースマップ タイル サービス](#arcgis-静的-ベースマップ-タイル-サービス)の 2 種類があります。

## ArcGIS ベースマップ スタイル サービス
ArcGIS ベースマップ スタイル サービスは、世界中のベースマップのスタイルとデータを提供するデータ ソースです。スタイル形式は Mapbox スタイルまたは ArcGIS Web マップであり、データは使用されるスタイルに応じてベクター タイルまたはマップ タイル として提供されます。このサービスは、ArcGIS ベースマップ スタイルおよびオープン ベースマップ スタイル に含まれるすべてのスタイルに対応しています。これには、streets、navigation、outdoor、light gray、imagery （衛星画像） 、open/osm style などの一般的なスタイルが含まれます。 デフォルトのスタイルを使用することも、ArcGIS Vector Tile Style Editor を使用して独自の[カスタム スタイル](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/custom-basemap-styles/)を作成することもできます。また、このサービスでは、優先言語、表示基準、または場所を指定してスタイルを表示することも可能です。　
　　　　　　　　　　　　　　　　　
## 主な機能  
- スタイルは、Mapbox スタイルおよび ArcGIS Web マップとして利用可能です
- ベースマップ データは、ベクター タイルまたはマップ タイルです
- すべての ArcGIS ベースマップ スタイルおよびオープン ベースマップ スタイルに対応しています
- 衛星画像を完全にサポートしています
- カスタム スタイルへのアクセスおよび表示に対応しています
- 言語、表示基準、場所に関するサーバー サイドのスタイル設定に対応しています
- ArcGIS Location Platform または ArcGIS Online が必要です 
  
 このサービスの詳細については、[ベースマップ スタイル サービスの概要](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/introduction-basemap-styles-service/)をご覧ください。

 ☑ベスト プラクティス：ArcGIS ベースマップ スタイル サービスは、最も豊富な ベースマップ スタイル設定、オプション、サーバー機能を提供し、あらゆるズームレベルで最高の地図表示を実現します。このサービスを利用すれば、Mapbox スタイルや ArcGIS Web マップに対応したマッピング アプリケーションを構築できます。 WebGL をサポート し、ベクター タイルやスタイルにアクセスできる最新のクライアント環境において、特に有用です。|
|:-|

## ArcGIS 静的 ベースマップ タイル サービス
「ArcGIS 静的 ベースマップ タイル サービスは、世界中のベースマップ データを、事前にレンダリングおよびスタイル設定されたマップ タイルとして提供するデータ ソースです。マップタイルは、ラスター タイルとも呼ばれます。このサービスは、主要な ArcGIS ベースマップ スタイルおよびオープン ベースマップ スタイルに対応しています。これには、arcgis/navigation、arcgis/outdoor、arcgis/imagery (衛星画像)、open/osm style、open/light gray、open/navigation dark などのスタイルが含まれます。また、このサービスでは、優先言語や表示基準を設定して一部のスタイルを表示することも可能です。

## 主な機能  
- ベースマップ データは、事前にレンダリングされたマップ タイルです
- さまざまなスタイルのマップ タイルが利用可能です
- 主要な ArcGIS ベースマップ スタイルおよびオープン ベースマップ スタイルに対応しています
- 言語や表示基準などのサーバー サイドのスタイル設定に対応しています（ ArcGIS ベースマップ スタイルのみ）
- ArcGIS Location Platform が必要です

このサービスの詳細については、[静的 ベースマップ タイル サービスの概要](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/introduction-static-basemap-tiles-service/)をご覧ください。

☑ベスト プラクティス：ArcGIS 静的 ベースマップ タイル サービスは、ArcGIS ベースマップ スタイル サービスと比較して、ベースマップのスタイル、スタイル設定オプション、およびサーバー機能の一部を提供します。このサービスは、Mapbox スタイルや ArcGIS Web マップに対応していないマッピング アプリケーションを構築する際に使用します。WebGL に対応していないクライアント、単一のデータ ソースからのマップ タイルを好むクライアント、または低帯域幅環境で動作するクライアントにとって有用です。|
|:-|

## ベースマップ サービスの比較

以下の表は、各サービスの主な違いを示しています。

| 項目 | ベースマップ スタイル サービス | 静的 ベースマップ タイル サービス |
|:---|:---:|:---:|
| **製品サポート**| |  
| ArcGIS Location Platform | ✅ | ✅ |
| ArcGIS Online | ✅ | ✕ |
| ArcGIS Enterprise | ✕ | ✕ |
| **スタイル ファミリー** |  |  |
| [ArcGIS ベースマップ スタイル](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/arcgis-styles/) | ✅ | ◐<sup>1</sup> |
| [オープンベースマップ スタイル](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/open-styles/) | ✅ | ✅ |
| **スタイル グループ** |  |  |
| 通り | ✅ | ◐<sup>1</sup> |
| 地形 | ✅ | ◐<sup>1</sup> |
| 衛星 | ✅ | ◐<sup>2</sup> |
| 参考文献 | ✅ | ◐<sup>1</sup> |
| クリエイティブ | ✅ | ◐<sup>1</sup> |
| **スタイルの反応** |  |  |
| Mapbox スタイル | ✅ | ✕ |
| ArcGIS Web マップ | ✅ | ✕ |
| プリレンダリングされたマップ タイル | ✕ | ✅ |
| **データ型** |  |  |
| ベクター タイル | ✅ | ✕ |
| マップ タイル | ◐<sup>3</sup> | ✅ |
| **データ プロバイダー** |  |  |
| [Esri とパートナー](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/arcgis-styles/) | ✅ | ✅ |
| [オープン ソース](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/open-styles/) | ✅ | ✅ |
| **データ更新** |  |  |
| 毎月 | ✅ | ✅ |
| **サーバーのスタイリング設定** |  |  |
| 言語 | ✅ | ◐<sup>4</sup> |
| 表示基準 | ✅ | ◐<sup>5</sup> |
| 場所 | ✅ | ✕ |
| **開発者の選択肢** |  |  |
| クライアント側でのスタイル カスタマイズ | ✅ | ✕ |
| カスタム スタイルの表示 | ✅ | ✕ |
| 衛星画像の表示 | ✅ | ◐<sup>2</sup> |
| あらゆるスケールでの動的フィーチャレンダリング | ✅ | ✕ |
| ウェブおよびネイティブ クライアント | ✅ | ◐<sup>6</sup> |
| WebGL クライアント | ✅ | ✕ |
| Retina/ HiDPI スクリーン | ✅ | ◐<sup>7</sup> |
| 旧バージョンとクラシック クライアント | ✕ | ✅ |
| 低帯域幅使用量 | ✕ | ✅ |
|ヘッダー および トークン パラメータ認証 |✅|✅|
| **API サポート**
| ArcGIS Maps SDK for JavaScript | ✅ | ✅ |
| ArcGIS Maps SDK for .NET        | ✅ | ✅ |
| ArcGIS Maps SDKs for Kotlin     | ✅ | ✅ |
| ArcGIS Maps SDKs for Swift       | ✅ | ✅ |
| ArcGIS Maps SDKs for Flutter     | ✅ | ✅ |
| ArcGIS Maps SDKs for Java         | ✅ | ✅ |
| ArcGIS Maps SDK for Qt         | ✅ | ✅ |
| Leaflet                 | ✅ | ✅ |
| MapLibre GL JS                 | ✅ | ✅ |
| OpenLayers                    | ✅ | ✅ |
| CesiumJS                    | ✕ | ✅ |

 ✅ 全面的なサポート  ◐ 部分的なサポート  ✕ サポートなし

1. 特定のスタイルのみ対応しています
2. サテライト ラベルのみ対応しています
3. データ ソースがマップ タイル サービスの場合のみ対応しています
4. 利用可能な言語オプションが限定されています
5. 特定のスタイルでは、表示基準がアメリカ合衆国に限定されます
6. ArcGIS SDKs for Native Apps クライアントでは、ArcGISTiledLayerが必要です
7. Retina/HiDPI ディスプレイには最適化されていません

## サービスとスタイルの選択
使用するベースマップ サービスは、主に、利用している ArcGIS 製品やクライアント API、クライアントの表示機能、必要な機能、および地図アプリケーションの設計要件によって異なります。

|サービスとスタイル|選択基準|
|---|---|
| 正しいベースマップ サービスを選択| [ベースマップ スタイル サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/introduction-basemap-styles-service/)は、すべてのズーム レベルで動的レンダリングをサポートする最新の WebGL クライアントおよび API に最適です。また、サーバー側スタイルの設定、クライアント側のスタイル設定、カスタム スタイル作成など、最も多くのスタイリング オプションも提供しています。<br><br>[静的 ベースマップ タイル サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/introduction-static-basemap-tiles-service/)は、WebGL 以外のクライアントや API、単一の地図タイル データソースを好むクライアント、または低帯域環境で動作するクライアントに最適です。<br><br>サービス機能の比較は[ベースマップ サービスの比較](#ベースマップ-サービスを比較)をご参照ください。|
| 最適なベースマップ スタイルを選択| スタイル選択を助けるために、以下の推奨手順に従います。<br><br>1. データ提供者に基づいて**スタイル ファミリー**を選択<br>・ArcGIS ベースマップ スタイル<br>・オープン ベースマップ スタイル<br>2. **スタイルグループ**を選択（Streets, Topography, Satellite, Reference, Creative）<br>3. 最も適した地図デザインとデータを持つスタイルを選択します。<br><br>詳細が必要な場合は、[ArcGIS Basemap styles](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/arcgis-styles/)、[Open Basemap styles](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/open-styles/)、または [ArcGIS Basemap styles (map tiles)](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/arcgis-styles-tiles/) をご覧ください。<br><br>注意:より具体的なスタイルが必要な場合は、自分だけの[カスタム ベースマップ スタイル](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/custom-basemap-styles/)を作成できます。|

## ベスト プラクティス
マッピング アプリケーションを構築する際には、最高のユーザー体験を提供するために以下の点を考慮してください。これらのヒントは不要なタイルのリクエストを減らし、最終的にはサービス使用コストの削減にもつながります。
| 種類 | 概要 |
|---|---|
| ベースマップ選択の絞り込み | アプリケーションが開始した際に最適なベースマップ スタイルを表示し、ユーザーが不必要にベースマップを切り替えるのを防ぎます。大規模な、複数のベースマップから選択するオプションは避けてください。|
| JSON でベースマップのスタイルとデータを取得 | 常にベースマップ スタイル サービスにアクセスして、最新のスタイルとデータを取得してください。基盤となるデータ ソースには直接アクセスしないでください。 |
|適切な開始位置とズーム レベルを設定 | ユーザーが適切なエリアにズームする必要がないよう、マップの表示範囲を初期設定してください。 |
| 地理的範囲の制約 |ユーザーが誤ってパンニングを行ったり、不必要にズームしたりするのを防ぎます。 |
| 地図のズーム レベルを制限する|ユーザーが不必要な倍率にズームできないようにします。 |
| 繰り返し可能なマップ クエリを使用する |クライアントおよび CDN のキャッシュを活用し、再利用可能かつ繰り返し実行可能な地図のズームおよび表示範囲のクエリを提供します。 |

>  **セキュリティと認証ガイド**:
> セキュリティと認証に関するベストプラクティスについては、以下をご覧ください。  
> [セキュリティのベストプラクティス](https://developers.arcgis.com/documentation/security-and-authentication/security-best-practices)    

