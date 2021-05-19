+++
title = "フィーチャサービスの作成"
description = "データの検索や編集が可能な地図サービス (REST API) の配信方法を紹介します。"
Weight=2
aliases = ["/create-feature-service/"]
+++

## 配信可能な地図サービス

ArcGIS Platform では、お手持ちの地図データや、住所・緯度経度を含む CSV などのテキスト データをもとに地図 (GIS) サービスを配信することが可能です。ArcGIS の地図サービスはさまざまな機能ごとに種類が分かれています。配信可能な基本的な地図サービスは以下の 2 種類です。

* __フィーチャ サービス (レイヤー)__
  * 緯度経度および属性情報を[フィーチャ](https://www.esrij.com/gis-guide/arcgis-basic/feature-featureclass/) (文字列) として配信 (クライアントで[ベクター データ](https://www.esrij.com/gis-guide/gis-datamodel/vector-data/)のグラフィックとして描画されます)
  * クライアント側でクエリを実行してデータを取得したり、編集したりする場合に利用

    <br>機能 : 表示 (地図と属性) / 検索 / 作成 / 更新 / 削除
<br>
* __タイル サービス (レイヤー)__
  * あらかじめ作成しておいた[タイル](https://www.esrij.com/gis-guide/web-gis/map-tile/)状に分割された地図画像を配信 (クライアントで画像として描画されます)
  * 描画速度が速く、[背景地図](https://www.esrij.com/gis-guide/maps/basemap/)などの広範囲のデータを利用したい場合に最適
 <br>機能 : 表示 (地図のみ)

Esri は無償で利用できるタイル サービスとして、全世界の背景地図サービス ([道路地図](https://www.arcgis.com/home/item.html?id=507f64964746439fa6c02b2f9c1e3690)、[地形図](https://www.arcgis.com/home/item.html?id=dc27f08af8204b438581231276e4e3ae)、[衛星画像](https://www.arcgis.com/home/item.html?id=232727dda91d4978a3b1005bc45f8634) など) を配信しています。
なお、自分でタイル サービスを生成する場合は、[10,000 タイルにつき 1 クレジットを消費](http://www.esrij.com/products/arcgis-online/credits/maptile/)して生成できます。
生成したタイル サービスを公開する方法は ArcGIS Online ヘルプの[ホスト タイル レイヤーの公開](http://doc.arcgis.com/ja/arcgis-online/share-maps/publish-tiles-from-features.htm)をご覧ください。

以下では、主題データとして利用頻度のもっとも高いフィーチャ サービスの公開および配信方法をご紹介します。

## フィーチャ サービスの作成・公開

フィーチャ サービスの公開には以下の 2 つの方法があります。

* __空のフィーチャ サービスを公開__
  * データがない状態のフィーチャ サービスを公開し、マップ ビューアーを使って手動でデータを追加していきます。
<br>
* __地図データおよび住所データを使ってフィーチャ サービスを公開__
  * 地図データが持つ座標情報や住所情報をもとにフィーチャ サービスを公開します。ArcGIS  Developers のサイトを使用して公開が可能なデータは以下の通りです。

     * CSV
     * Excel (*.xlsx または *.xls)
     * Google Sheets
     * GeoJSON
     * シェープファイル (Zip 形式に圧縮)
     * ファイル ジオデータベース (Zip 形式に圧縮)

    詳細は ArcGIS Online ヘルプの[ホスト フィーチャ レイヤーの公開](http://doc.arcgis.com/ja/arcgis-online/share-maps/publish-features.htm)をご覧ください。

以下は空のフィーチャ サービスを公開するまでのステップを紹介します。

地図データや住所データを使ってフィーチャ サービスを公開する方法は「[Import data as a feature layer](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/tutorials/tools/import-data-as-a-feature-layer/)」をお読みください。

### 1. フィーチャ サービスの作成を開始する

1. [ArcGIS Developers](https://developers.arcgis.com/) のサイト上で [Dashboard] をクリックし、[Layers] を選択します。
2. [+ Create Data] をクリックし、[New Hosted Layer (Feature Layer)] を選択します。
<br><img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/create-feature-service1.gif" width="600px"><br>

### 2. フィーチャ サービスのデータ構造を設定

1. [Data Structure] 画面で、以下の情報を設定します。
   * Geometry Type: Point
   * Fields:
     * フィールド 1:
       * Name: ID
       * Display name (alias): ID
       * Type: Integer
     * フィールド 2:
       * Name: NAME
       * Display name (alias): 名前
       * Type: String
     * フィールド 3:
       * Name: ADDRESS
       * Display name (alias): 住所
       * Type: String
   * Coordinate System: Latitude/Longitude (WGS 84/EPGS 4326)

2. 入力が完了したら、[Next] をクリックして次へ進みます。
   <br><img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/create-feature-service2.gif" width="600px"><br>

各データ構造の詳細は以下をご覧ください。

* Geometry Type (ジオメトリ タイプ)
  * フィーチャの図形の種類で、ポイント、ライン、ポリゴンの三種類から構成されています。
    * ポイント: 地物を点のデータで表し、観測地点などを表示するために使われます
    * ライン: 地物を線のデータで表し、河川や道路などのフィーチャを表示するために使用されます
    * ポリゴン: 地物を面のデータで表し、建物などを表示するために使用されます。
  * 1 つのフィーチャ サービスに対して選択できるジオメトリ タイプはいずれか 1 つです。

* Fields (属性情報)
  * フィーチャに関する様々な情報のことで、属性テーブルと呼ばれるデータベースに保存することができます。属性テーブルの列のことを属性フィールドと呼びます。例えば、公共施設の属性には名称や所在地、分類、電話番号などを含めることができます。この属性情報をもとにシンボルやラベルを表示したり、フィーチャを検索したりすることが可能です。
    * Field Name (フィールド名)
      * フィールドの名前をコンピューター用に定義したものです。コンピューターが理解しやすいように英数字で記載するなど使用できる文字に制限があります (スペースや特殊文字は使用できません) 。

    * Display name (エイリアス)
      * フィールドの名前を人間にもわかりやすく定義したものです。例えば、人口の情報であれば Field Name を「POP」、Display name を「Population」や「人口数」と使い分けます。

    * Type (データ型)
      * 格納する情報の種類によって以下の 4 つのデータ型から選択します。属性フィールドに設定されたデータ型と異なるデータ型の値を格納することはできません。
         * String: 文字型。文字列を格納します。
         * Integer: 整数型。自然数を格納します。
         * Double: 倍精度浮動小数点型。小数点を持つ有理数やパーセント値などを格納します。
         * Date: 日付型。日付、または日付と時間を格納します。

* Coordinate System ([座標系](https://www.esrij.com/gis-guide/coordinate-and-spatial/coordinate-system/))
  * 地球上の特定の位置を座標で表すための原点や座標の単位などの取り決めのことです。
  * フィーチャ レイヤーの ID (WKID) を入力します。
    * 「4326 (WGS 84 緯度経度)、「3857 (Web メルカトル)」が推奨されています。

### 3. フィーチャ サービスの基本情報を設定

1. [Item Details] 画面で、以下の情報を設定します。
   * Title: customerpoint
   * Tags: customer
   * Description: 顧客情報のポイント

2. 入力が完了したら、[Next] をクリックして次へ進みます。

   <br><img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/create-feature-service3.gif" width="600px"><br>

各情報の詳細は以下をご覧ください。

* Title (タイトル)
  * 新しく作成するフィーチャ サービスのタイトルを入力します。

* Tags (タグ)
  * ArcGIS Developers のサイト上でフィーチャ サービスを検索する際に利用します。作成するフィーチャー サービスのキーワードとなる語句を入力し、Enter キー を押すとタグが作成されます。

* Description (説明)
  * 新しく作成するフィーチャ サービスの説明を入力します。

### 4. 設定した情報の確認

1. [Review] 画面で、ここまで設定した内容を確認します。
2. 問題がなければ、[Create Layer] をクリックしてフィーチャ サービスを公開します。
3. 公開が完了すると、[ArcGIS Developers](https://developers.arcgis.com/) のサイト上にフィーチャ サービスのアイテム ページが作成され、フィーチャ サービスの URL などが確認できます。

   <br><img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/create-feature-service4.gif" width="600px"><br>

### 5. フィーチャ サービスの詳細情報を設定

1. 作成したフィーチャ サービスのアイテム ページから、[サービスの共有・編集権限](https://doc.arcgis.com/ja/arcgis-online/manage-data/manage-hosted-feature-layers.htm)を設定します。
2. ページ上部の [Settings] をクリックして以下にチェックを入れます。
   * Layer access (sharing): Private (authentication required)
   * Editing settings:
     * Allow editting (編集の有効化)
     * Track new features and updates (作成および更新されたフィーチャを記録)
     * Track authors of new features and updates (フィーチャの作成者および最終更新者を記録)
3. [Save setting] をクリックし、設定した内容を保存します。

   <br><img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/create-feature-service5.gif" width="600px"><br>

<!-- ## フィーチャ サービスの表示・編集

フィーチャ サービスの公開後、マップ ビューアーを使用してフィーチャ サービスを表示したり、データを追加・編集することができます。

### 1. フィーチャ サービスの表示

1. フィーチャ サービスのアイテム ページから、ページ上部の [Overview] をクリックします。
2. 地図画面上の [Open in] をクリックし、[Map Viewer (2D)] を選択します。
3. マップ ビューアーが起動すると、地図が表示されます。
4. 画面左側にあるコンテンツ パネルには公開したフィーチャ サービスを参照したレイヤーが表示されています。

   <br><img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature6.gif" width="600px">


### 2. フィーチャ サービスの編集

  1. [編集] をクリックして、[フィーチャの追加] ウィンドウから追加するデータのシンボルを選択します。
  1. 選択後に、地図上の任意の場所をクリックすることで新しいデータが追加されます。
  1. フィーチャを追加すると、ポップアップが自動で開き、フィーチャの属性情報を編集することが可能です。

   <br><img src="https://apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature7.gif" width="600px">   -->


ここまで作成してきたフィーチャ サービスは「[Web マップの作成](../create-webmap)」で 1 レイヤーとして扱うことができます。自身が複数のデータをお持ちで、複数のレイヤーとして地図に表示したい場合でも、自由に追加して独自の地図をデザインすることが可能です。
