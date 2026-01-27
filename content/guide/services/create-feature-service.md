+++
title = "フィーチャサービスの作成"
description = "データの検索や編集が可能な地図サービス (REST API) の配信方法を紹介します。"
Weight=2
aliases = ["/create-feature-service/"]
+++

## 配信可能な地図サービス

ArcGIS Location Platform では、お手持ちの地図データや、住所・緯度経度を含む CSV などのテキスト データをもとに地図 (GIS) サービスを配信することが可能です。ArcGIS の地図サービスはさまざまな機能ごとに種類が分かれています。配信可能な基本的な地図サービスは以下の 2 種類です。

* __フィーチャ サービス (レイヤー)__
  * 緯度経度および属性情報を[フィーチャ](https://www.esrij.com/gis-guide/arcgis-basic/feature-featureclass/) (文字列) として配信 (クライアントで[ベクター データ](https://www.esrij.com/gis-guide/gis-datamodel/vector-data/)のグラフィックとして描画されます)
  * クライアント側でクエリを実行してデータを取得したり、編集したりする場合に利用
  
    機能 : 表示 (地図と属性) / 検索 / 作成 / 更新 / 削除

* __タイル サービス (レイヤー)__
  * あらかじめ作成しておいた[タイル](https://www.esrij.com/gis-guide/web-gis/map-tile/)状に分割された地図を配信
  * 描画速度が速く、[背景地図](https://www.esrij.com/gis-guide/maps/basemap/)などの広範囲のデータを利用したい場合に最適
 <br>機能 : 表示 (地図のみ)

Esri は無償で利用できるタイル サービスとして、全世界の背景地図サービス ([道路地図](https://www.arcgis.com/home/item.html?id=eb472d0029e84f7887779f27e342afc8)、[地形図](https://www.arcgis.com/home/item.html?id=f58afd49c0d842a79301966f53fff4f8)、[衛星画像](https://www.arcgis.com/home/item.html?id=232727dda91d4978a3b1005bc45f8634) など) を配信しています。
なお、自分でタイル サービスを生成する場合は、[10,000 タイルにつき 1 クレジットを消費](https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm#ESRI_SECTION1_709121D2C7694DCAB9B8592F36F7A5BA)して生成できます。
生成したタイル サービスを公開する方法は ArcGIS Online ヘルプの[ホスト タイル レイヤーの公開](https://doc.arcgis.com/ja/arcgis-online/manage-data/publish-tiles-from-features.htm)をご覧ください。

以下では、主題データとして利用頻度のもっとも高いフィーチャ サービスの公開および配信方法をご紹介します。

## フィーチャ サービスの作成・公開

フィーチャ サービスの公開には以下の 2 つの方法があります。

* __空のフィーチャ サービスを公開__
  * データがない状態のフィーチャ サービスを公開し、マップ ビューアーを使って手動でデータを追加していきます。
<br>
* __地図データおよび住所データを使ってフィーチャ サービスを公開__
  * 地図データが持つ座標情報や住所情報をもとにフィーチャ サービスを公開します。公開可能なデータ例の一部を以下にあげます。

     * CSV
     * Excel (*.xlsx または *.xls)
     * Google Sheets
     * GeoJSON
     * シェープ ファイル (Zip 形式に圧縮)
     * ファイル ジオデータベース (Zip 形式に圧縮)

    詳細は ArcGIS Online ヘルプの[ホスト フィーチャ レイヤーの公開](https://doc.arcgis.com/ja/arcgis-online/manage-data/publish-features.htm)をご覧ください。

地図データや住所データを使ってフィーチャ サービスを公開する方法は「[Import data as a feature layer](https://developers.arcgis.com/documentation/portal-and-data-services/data-services/tutorials/tools/import-data-to-create-a-feature-layer/)」をお読みください。

以下は空のフィーチャ サービスを公開するまでのステップを紹介します。

### 1. フィーチャ サービスの作成を開始する

ArcGIS Location Platform から空のフィーチャ サービスを公開する方法として、ArcGIS Location Platform のアカウントで ArcGIS ポータルにアクセスし、ポータル上で作成できます。

1. [ArcGIS Location Platform](https://location.arcgis.com/) のサイト上から [My dashboard](https://location.arcgis.com/dashboard/) をクリックし、ご自身のアカウントのダッシュボードを開きます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_TOP.png" width="600px">

2. ダッシュボードを開きましたら [Layers and data services](https://location.arcgis.com/layers/) をクリックし、Create new feature service をクリックします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_Dashboards.png" width="600px">

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_Layers.png" width="600px">

3. そのあとに出るモーダルウィンドウ上の Go to your portal を押し、ポータル上で空のフィーチャ サービスを作成します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_AccessPortal.png" width="600px">

ポータル上での空のフィーチャ サービスの作成は[こちら](https://doc.esrij.com/online/users-guide/create-data/feature/build-layer/)を参照に作成してみてください。

### 2. フィーチャ サービスの利用状況の確認方法

ArcGIS Location Platform のダッシュボートでは、フィーチャ サービスの利用状況を確認することができます。

1. ArcGIS Location Platform の[ダッシュボード](https://location.arcgis.com/dashboard/)から [Layers and data services](https://location.arcgis.com/layers/) をクリックします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_Dashboards.png" width="600px">

2. ポータル上にあるレイヤーの一覧から利用状況を確認したいレイヤーの View usage をクリックします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_tousage.png" width="600px">

3. レイヤーの利用状況について月ごとの合計と利用された日付とその日の使用量を確認することができます。また、その結果を CSV ファイルでダウンロードすることもできます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_usage.png" width="600px">

### 3. フィーチャ サービスの詳細情報の確認と設定方法

フィーチャ サービスの詳細情報の確認はポータル上で行うことができます。
また、編集の可否についてもポータル上で設定が可能です。

1. ArcGIS Location Platform の[ダッシュボード](https://location.arcgis.com/dashboard/)から [Layers and data services](https://location.arcgis.com/layers/) をクリックします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_Dashboards.png" width="600px">

2. ポータル上にあるレイヤーの一覧から詳細情報の確認もしくは、設定を編集したいレイヤーの Manage layer and service をクリックします。
遷移先は、ポータル上のレイヤーの詳細画面になっています。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/LocationPlatform_toMange.png" width="600px">

ポータル上でのレイヤーの管理方法については[こちら](https://doc.esrij.com/online/users-guide/manage-data/)を参照してください。

ここまで作成してきたフィーチャ サービスは「[Web マップの作成](../create-webmap)」で 1 レイヤーとして扱うことができます。自身が複数のデータをお持ちで、複数のレイヤーとして地図に表示したい場合でも、自由に追加して独自の地図をデザインすることが可能です。
