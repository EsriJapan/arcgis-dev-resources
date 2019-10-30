+++
title = "フィーチャサービスの作成"
description = "データの検索や編集が可能な地図サービス (REST API) の配信方法を紹介します。"
Weight=2
aliases = ["/create-feature-service/"]
+++

## 配信可能な地図サービス

ArcGIS for Developers の開発者向けクラウド サービスではお手持ちの地図データや住所/緯度経度を含む CSV などのテキスト データをもとに地図（GIS）サービスを配信することが可能です。ArcGIS の地図サービスはさまざまな機能ごとに種類が分かれています。配信可能な基本的な地図サービスは以下の 2 種類です。

* __フィーチャ サービス（レイヤー）__
  * 緯度経度および属性情報を文字列で配信（地図データはクライアントでグラフィックとして描画されます）
<br> 機能 : 表示（地図と属性）/ 検索 / 作成 / 更新 / 削除

* __タイル サービス（レイヤー）__
  * あらかじめ作成しておいたタイル状に分割された地図画像を配信（地図データはクライアントで画像として描画されます）
 <br>機能 : 表示（地図のみ）

タイル サービスとしては Esri が配信している全世界の背景地図サービスを無償で利用できます。
なお、タイル生成サービスを利用する場合は、[1,000 タイル生成につき、1 クレジット消費します](http://www.esrij.com/products/arcgis-online/credits/maptile/)。
タイル サービスを公開する方法は ArcGIS Online ヘルプの[ホスト タイル レイヤーの公開](http://doc.arcgis.com/ja/arcgis-online/share-maps/publish-tiles-from-features.htm)をご覧ください。

以下では、主題データとして利用頻度のもっとも高いフィーチャ サービスの公開および配信方法をご紹介します。

## フィーチャ サービスの作成・公開

フィーチャ サービスの公開には以下の 2 つの方法があります。

* __空のフィーチャ サービスを公開__
  * データがない状態のフィーチャ サービスを公開し、マップ ビューアーを使って手動でデータを追加していきます。

* __地図データおよび住所データを使ってフィーチャ サービスを公開__
  * 地図データが持つ座標情報や住所情報をもとにフィーチャ サービスを公開します。ArcGIS for Developers のサイトを使用して公開が可能なデータは以下の通りです。

     * CSV
     * GeoJSON
     * シェープファイル（Zip 形式に圧縮）
     * ファイル ジオデータベース（Zip 形式に圧縮）

    詳細は ArcGIS Online ヘルプの[ホスト フィーチャ レイヤーの公開](http://doc.arcgis.com/ja/arcgis-online/share-maps/publish-features.htm)をご覧ください。

以下は空のフィーチャ サービスを公開するまでのステップを紹介します。

<!--地図データや住所データを使ってフィーチャ サービスを公開する方法は「[データのインポート]()」をお読みください。-->

### 1. フィーチャ サービスの作成を開始する

<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature1.gif" width="600px">

1. [Dashboard］の横の［＋］をクリックし、［New Layer］を選択します。
1. [Create an Empty Layer］をクリックし、Create New Layer ページを開きます。

### 2. 基本情報の入力

<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature2.gif" width="600px">

公開するフィーチャ サービスに対して、以下の基本情報を入力します。

* Title（タイトル）
  * 新しく作成するフィーチャ サービスのタイトルを入力します。

* Service Name（サービス名）
  * アプリケーションがデータにアクセスする際に使用します。デフォルトでは自動で Title と同じ文字が入力されますが、変更することも可能です。サービス名に使用できる文字はアルファベット、数字およびアンダースコアのみです。

* Tags（タグ）
  * ArcGIS for Developers のサイト上でフィーチャ サービスを検索する際に利用します。作成するフィーチャー サービスのキーワードとなる語句を入力し、Enter キー を押すとタグが作成されます。

入力が完了したら、[Geometry] をクリックして次へ進みます。

<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature3.gif" width="600px">

* Geometry Type（ジオメトリ タイプ）
  * ジオメトリ タイプはフィーチャの図形の種類で、ポイント、ライン、ポリゴンの三種類から構成されています。ポイントは地物を点のデータで表し、観測地点などを表示するために使われます。ラインは地物を線のデータで表し、河川や道路などのフィーチャを表示するために使用されます。ポリゴンは地物を面のデータで表し、建物などを表示するために使用されます。 1 つのフィーチャ サービスに対して選択できるジオメトリ タイプはいずれか 1 つです。

* Spatial Reference（空間参照）
  * フィーチャ レイヤーの座標系の ID（WKID）を入力します。4326（WGS 84 緯度経度）または102100（Web メルカトル）が推奨されています。

入力が完了したら、[Fields] をクリックして次へ進みます。

### 3.属性情報の入力

<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature4.gif" width="600px">

属性とはフィーチャに関する様々な情報のことで、属性テーブルと呼ばれるデータベースに保存することができます。属性テーブルの列のことを属性フィールドと呼びます。例えば公共施設の属性には名称や所在地、分類、電話番号などを含めることができます。この属性情報をもとにシンボルやラベルを表示したり、フィーチャを検索したりすることが可能です。

属性フィールドには以下の項目を設定します。

* Field Name（フィールド名）
  * Field Name はフィールドの名前をコンピューター用に定義したものです。コンピューターが理解しやすいように使用できる文字に制限があります（スペースや特殊文字は使用できません）。

* Field Alias（エイリアス）
  * Field Alias は属性フィールドの名前を人間にもわかりやすく定義したものです。たとえば、人口の情報であれば Field Name を POP、Field Alias を Population と使い分けます。

* Data Type（データ型）
  * 格納する情報の種類によって以下の 4 つのデータ型から選択します。属性フィールドに設定されたデータ型と異なるデータ型の値を格納することはできません。

     * String: 文字型。文字列を格納します。
     * Integer: 整数型。自然数を格納します。
     * Double: 倍精度浮動小数点型。小数点を持つ有理数やパーセント値などを格納します。
     * Date: 日付型。日付、または日付と時間を格納します。

Field Name と Field Type を入力し、[+ Add Field] をクリックすることで属性フィールドを追加できます。フィールドを追加した後に、Field Alias を設定できます。作成した属性フィールドを削除するには 赤いゴミ箱のアイコンをクリックします。入力が完了したら、[Settings] をクリックして次へ進みます。

### 4.詳細設定

<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature5.gif" width="600px">

ファイルの添付機能やサービスの共有、編集権限などを設定できます。設定がすべて終了したら[Create Layer] をクリックし、フィーチャ サービスを公開します。

## フィーチャ サービスの表示・編集

フィーチャ サービス公開後、マップ ビューアー上でフィーチャ サービスを表示して、データを追加することができます。

### 1. フィーチャ サービスの表示
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature6.gif" width="600px">  
公開したフィーチャ サービスを選択して、[Open in Map Viewer] をクリックして、マップ ビューアーを起動します。
マップ ビューアーが起動すると、地図が表示されます。画面左側にあるコンテンツ パネルには公開したフィーチャ サービスを参照したレイヤーが表示されています。


### 2. フィーチャ サービスの編集
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/featureservice/update_ver/Feature7.gif" width="600px">  

  1. [編集] をクリックして、[フィーチャの追加] ウィンドウから追加するデータのシンボルを選択します。
  1. 選択後に、地図上の任意の場所をクリックすることで新しいデータが追加されます。
  1. フィーチャを追加すると、ポップアップが自動で開き、フィーチャの属性情報を編集することが可能です。

ここまで作成してきたフィーチャ サービスは「[Web マップの作成](../create-webmap)」で 1 レイヤーとして扱うことができます。自身が複数のデータをお持ちで、複数のレイヤーとして地図に表示したい場合でも、自由に追加して独自の地図をデザインすることが可能です。
