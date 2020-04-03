+++
title = "REST API"
description = "ArcGIS では、[ArcGIS REST API](https://developers.arcgis.com/rest/) を使用して地理空間サービス、マッピングサービス、および管理サービスを提供しています。ArcGIS REST API で利用できるサービスの概要について紹介します。"
Weight=7
aliases = ["/rest-api/"]
+++

ArcGIS では、[ArcGIS REST API](https://developers.arcgis.com/rest/) を使用して地理空間サービス、マッピングサービス、および管理サービスを提供しています。  
以下では、API で最も一般的に使用されるコンポーネントの概要を説明します。

## 位置情報ベースのサービス
ArcGIS Online は、ジオコーディング、ルーティング、および空間分析などのロケーションベースの RESTful サービスをホストしています。一般的に、これらのサービスはクレジットを消費します。

- [Geocoding and search API](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm)
- [Routing API](https://developers.arcgis.com/rest/network/api-reference/overview-of-network-analysis-services.htm)
- [Demographic and geoenrichment API](https://developers.arcgis.com/rest/geoenrichment/api-reference/geoenrichment-service-overview.htm)
- [Spatial API](https://developers.arcgis.com/rest/analysis/api-reference/getting-started.htm)
- [Elevation API](https://developers.arcgis.com/rest/elevation/api-reference/get-started-with-elevation-services.htm)

## ArcGIS Enterprise API
ArcGIS Enterprise REST API は、[ArcGIS Online](https://www.arcgis.com/sharing/rest) または ArcGIS Enterprise が独自のインフラストラクチャ上でホストしています。ArcGIS Enterprise API は、マップ、レイヤー、およびその他のコンテンツなどのアイテムの管理や、組織内のユーザーの特権や認証の処理に使用されます。ArcGIS Portal API の一般的なユースケースとしては、[ユーザー、グループ、およびアイテムの操作](https://developers.arcgis.com/rest/users-groups-and-items/working-with-users-groups-and-items.htm)や[検索 API](https://developers.arcgis.com/rest/users-groups-and-items/search.htm) へのアクセスなどがあります。

## ホスティングされたデータ サービス
ArcGIS Server REST API を使用すると、ArcGIS Enterprise または ArcGIS Online のいずれかに公開して[ホストされたデータ サービス](https://developers.arcgis.com/rest/services-reference/working-with-services-you-ve-published.htm)を操作することができます。たとえば、ArcGIS Online にデータをインポートすると、ArcGIS Server のインスタンス上でホストされているフィーチャ レイヤーが作成されます。そして、ArcGIS Server が提供する ArcGIS REST API を使用してレイヤにアクセスすることができます。ArcGIS Server が提供するレイヤーやサービスには、次のようなさまざまな ArcGIS ツールで作成して公開できるものがあります。

- [フィーチャー サービス](https://developers.arcgis.com/rest/services-reference/feature-service.htm)
- [マップ サービス](https://developers.arcgis.com/rest/services-reference/map-service.htm)
- [ジオプロセシング サービス](https://developers.arcgis.com/rest/services-reference/gp-service.htm)
- [イメージ サービス](https://developers.arcgis.com/rest/services-reference/image-service.htm)