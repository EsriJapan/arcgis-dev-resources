+++
title = "帰属"
description = "アプリで ArcGIS ベースマップ、ArcGIS データ サービス、または ArcGIS API テクノロジを使用する場合における Esri の帰属表示を含める方法をご紹介します。"
Weight=3
aliases = ["/attribution/"]
+++

出典：ArcGIS Developers - licensing - [Attribution](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/attribution/)

Esri では、アプリで ArcGIS ベースマップ、ArcGIS データ サービス、または ArcGIS API テクノロジを使用する場合、Esri の帰属表示を含める必要があります。アプリの構築方法や使用するデータによっては、アプリで対応が求められる帰属表示に関する特定の要件があります。

- データの帰属 (ベースマップ、データ レイヤ)：帰属を必要とする ArcGIS ロケーション サービスがホストする特定のデータを使用する場合

- Esri の表示 (Powered by Esri を使用)：アプリケーションが Esri API テクノロジで構築されているか、ArcGIS ロケーション サービスを使用している場合

## 帰属をマップに表示する
ArcGIS Location Services を通じて Esri が提供するデータをアプリケーションで使用する場合は、マップ上に帰属表示を行う必要があります。たとえば、このイメージでは、マップの下部に属性を表示しています。その他の例については、[ArcGIS Online](http://www.arcgis.com/home/search.html?q=basemaps%20owner:esri&t=content&start=11) のマップの 1 つを参照してください。

### Light basemap


### Dark basemap


{{% notice note %}}

以下の場合に表示されたロゴ、商標、著作権表示、またはその他の類似した帰属表示を削除することはできません。

- Esri のサービスを使用する。これには、マップ サービス (例: ベースマップ)、クレジット ベースのサービス (例: ルーティング)、または Esri が作成およびホストするその他のサービスなどのサービスが含まれる。

- ArcGIS Online でホストされているサービスを使用する。

- 顧客が自社のオンプレミスの ArcGIS Enterprise から公開し、ArcGIS Online に登録したサービスにアクセスする。たとえば、ABC 社は、ArcGIS Enterprise を通じて独自のサービスを公開し、それらのサービスを ArcGIS Online に登録しました。そして、そのサービスをアプリケーション内で使用します。ABC 社の ArcGIS Online からのサービスは、アプリケーション内で適切な帰属表示が必要となる。

- サード パーティのアプリケーション開発ツールで Esri サービスを使用する。これを行うには、すべての適切な帰属表示を追加する必要があります。サード パーティの API を使用する際の帰属表示の実装に関する全体的な考え方については、Esri Leaflet が帰属表示をどのように処理するかについて説明した以下のセクションを参照してください。

{{% /notice %}}

これらの要件が優れたアプリの構築の妨げにならないように、多くの柔軟性を提供しています。アプリでは、以下のガイドラインに沿って Esri の属性を設定する必要があります。

### 帰属要件

- ArcGIS API for JavaScript を使用する場合、マップの下部に帰属表示を行うデフォルトの実装を提供しています。これは推奨される配置なので、アプリのデザインに合っている場合はそこに適用してください。他の方法については、attribution ウィジェットを参照してください。

- ArcGIS Runtime API のいずれかを使用する場合、デフォルトの実装では帰属表示がマップの下部に配置されます。これがアプリのデザインと合わない場合は、帰属表示を MapView の他の場所に配置する API があります。詳細については、以下の実装を参照してください。

- Esri の帰属表示は、ArcGIS Online ベースマップが存在する場合、マップ上またはマップの近くに表示する必要があります。推奨される場所はマップの下部ですが、必要に応じて移動することができます。

- お客様の実装のユーザーインターフェースデザインによって、当社の表示が消えたり、見えなくなったりする場合は、本ガイドラインに従った他の方法で表示する必要があります。

- アプリはダイナミックアトリビューションを活用する必要があります。ユーザーが地図をズームしたりパンしたりすると、現在の範囲に応じてアトリビューションが変化します。これにより、アトリビューションのテキスト量を減らすことができます。また、アトリビューションは常に最新の状態で表示されます。

- ベースマップごとに帰属が異なります。

- ベースマップの帰属は、サービスメタデータで利用できます。たとえば、WorldImageryメタデータのリクエストは http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer?f=pjsonです。必要な情報は `copyrightText` 文字列にあります。この例では、帰属は次のとおりです。`Source: Esri, DigitalGlobe, GeoEye, i-cubed, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community.`

- 情報をアプリにコピーする静的なオプションを選択した場合は、帰属表示が定期的に変わることに注意してください。アプリをアップデートしたときなど、定期的に帰属表示を確認する必要があります。

