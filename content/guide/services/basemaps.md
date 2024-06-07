+++
title = "ベースマップ"
description = "マッピングAPI＆ロケーションサービス内のベースマップについて紹介します"
Weight=4
aliases = ["/basemaps/"]
+++

出典：Mapping APIs and location services - [Basemaps](
https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-layers/
)

<iframe width="100%" height="400" id="DemoApp-gf1e4f0b9-39b1-23c1-aa14-4f83e29dbd4c" title="ArcGIS Developer Guide: Basemap layers" class="relative h-full w-full border-none bg-transparent" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-demo-662a12e21dc578539aa01d45570f8294.html"
></iframe>

## ベースマップとは？

ベースマップはベースマップ レイヤーとも呼ばれ、マップとシーンの全体的なビジュアルを提供するレイヤーです。ベースマップには通常は大陸、湖沼、行政境界、道路、都市、地名などの地理的な特徴やラベルが含まれます。ベースマップの最も一般的なデータ ソースは、[ベースマップ スタイル サービス](#ベースマップ-スタイル-サービス)と[データ サービス](#データ-サービス) です。

ベースマップ レイヤーを使って以下のようなことができます。

- マップとシーンの両方で、世界中の地理データを表示
- ArcGIS streets、navigation、light gray canvas、OSM streets などのベースマップを表示
- 自身で指定した色、字体、フォントを使用したベースマップを表示
- 街路やナビゲーションのベクター タイル レイヤーを表示
- 衛星画像や陰影起伏図用のマップ タイル レイヤーを表示
- 独自のデータを独自の空間参照で表示

## ベースマップの仕組み

ベースマップ レイヤーは、マッピング アプリケーションの視覚的な基礎を提供します。ベースマップ レイヤーは、一般的にグローバルなデータを含み、マップやシーンに追加される最初のレイヤーです。マップを表示する場合、ベースマップ レイヤーが最初に描画され、次にデータ レイヤー、グラフィックス レイヤーの順に描画されます。

#### ベストプラクティス

ほとんどの場合、アプリケーションはフィーチャの選択やポップアップの表示など、ベースマップ レイヤーとのやり取りを許可していません。ベースマップ レイヤーの上にある[データレイヤー](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/data-layers/)を使用してマップ内のフィーチャを表示して、フィーチャ内のデータにアクセスできます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/basemaps/photo02_basemaplayers.png" width="1200px">

## データ ソースの種類

ベースマップの一般的なデータ ソースは、[ベースマップ スタイル サービス](#ベースマップ-スタイル-サービス)と[データ サービス](#データ-サービス)の 2 つです。

### ベースマップ スタイル サービス

[ベースマップ スタイル サービス](https://developers.arcgis.com/rest/basemap-styles/)は、世界中のベースマップ スタイルとデータを提供するロケーション サービスです。各ベースマップ スタイルには、地理的なフィーチャとラベルの視覚的なプロパティに固有のセットがあります。このサービスには ArcGIS と OSM の 2 つのデータ プロバイダが含まれます。データ プロバイダは、streets、navigation、light gray canvas、imagery などのデフォルトのベースマップ スタイルをサポートしています。各スタイルのデータは、ArcGIS でホストされているベクター タイル レイヤーとマップ タイル レイヤーを通じて提供され、Web メルカトル空間参照に格納されます。 

#### ベストプラクティス

世界中のあらゆる場所の地理的特徴やラベルを表示するロケーション サービスを使用する場合や、独自の[カスタム ベースマップ スタイル](https://developers.arcgis.com/documentation/mapping-apis-and-services/visualization/basemap-styles/)を作成する場合は、ベースマップ スタイル サービスを使用してください。このサービスでは、[場所](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-places/)、[ローカル言語](#ローカライズされた地名ラベルの表示)、[worldview](#worldview-の表示) を表示することもできます。

ベースマップ スタイル サービスを利用するための一般的な手順は以下の通りです。

1. ベースマップ スタイル サービスで使用できる[デフォルトのベースマップ スタイル](https://developers.arcgis.com/rest/basemap-styles/)を確認します。

2. サービス、データ プロバイダ、スタイルを参照します

   * データ プロバイダ : [ArcGIS](https://developers.arcgis.com/rest/basemap-styles/#arcgis-styles) または [OSM](https://developers.arcgis.com/rest/basemap-styles/#osm-styles)
   * ベースマップ スタイル例 : [streets](https://developers.arcgis.com/rest/basemap-styles/#streets-and-navigation)、[imagery](https://developers.arcgis.com/rest/basemap-styles/#topography-and-imagery)、[navigation](https://developers.arcgis.com/rest/basemap-styles/#streets-and-navigation)、[topography](https://developers.arcgis.com/rest/basemap-styles/#topography-and-imagery)、[light gray canvas](https://developers.arcgis.com/rest/basemap-styles/#reference)、[outdoors](https://developers.arcgis.com/rest/basemap-styles/#topography-and-imagery) など

3. ベースマップを表示します

ArcGIS Maps SDKs は、各スタイルにアクセスするための列挙型またはヘルパークラスを提供します。ただし、オープン ソース ライブラリを使用する場合は、ベースマップ スタイル サービスまたは基礎となるベクター タイル レイヤーまたはマップ タイル レイヤーを直接参照する必要があります。

##### 例 : ArcGIS API for Python

```Python
from arcgis import GIS

gis = GIS(api_key="YOUR_API_KEY")
map = gis.map()
map.basemap = "streets-navigation-vector"
```
<div style="text-align: right;">
<a href="https://developers.arcgis.com/python/guide/part1-introduction-to-using-the-map-widget/">API リファリンスへ</a>
</div>

{{% notice note %}}

ベースマップ スタイル サービスを使用する方法を学ぶには[ベースマップ スタイルの表示](#ベースマップ-スタイルの表示)、[ローカライズされた地名ラベルの表示](#ローカライズされた地名ラベルの表示)、[worldview の表示](#worldview-の表示)を参照してください。地点の表示について学ぶ方法は [Basemap places](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-places/) を参照してください。

{{% /notice %}}

{{% notice note %}}

REST API : さまざまなスタイルと機能の詳細については[ベースマップ スタイル サービス (v2)](https://developers.arcgis.com/rest/basemap-styles/) を参照してください。

{{% /notice %}}

### データ サービス

フィーチャ サービス、ベクター タイル サービス、マップタイル サービスなどのデータ サービスは、ArcGIS Online または ArcGIS Enterprise でホストされているサービスで、お客様のデータを含んでいます。ほとんどの場合、クライアント API でサポートされているデータ サービスは、ベースマップのデータ ソースとして使用できます。データ サービスは、ArcGIS のホスト レイヤー (アイテム) でアクセスおよび管理できます。

#### ベストプラクティス

ArcGIS Online または ArcGIS Enterprise でホストされている既存のデータ サービスまたは独自のホスト型データ サービスを使用する場合は、データ サービスを使用します。また、Web メルカトル以外の空間参照を必要とする小規模な地域やエリアのデータを表示する場合にも使用します。


データ サービスを利用するための一般的な手順は以下の通りです。

1. ホスト レイヤーおよびデータ サービスを検索または作成します。
    * [ArcGIS Online](https://www.arcgis.com/home/search.html?restrict=false&sortField=relevance&sortOrder=desc&focus=layers#content) および [ArcGIS Living Atlas of the World](https://livingatlas.arcgis.com/en/browse/#d=2) で既存のサービスを検索します。
    * 独自のデータ サービスを作成する方法については、[Data hosting](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/) を参照してください。
2. レイヤー アイテム ID またはサービス URL を取得します。例 : 
    * レイヤー アイテム : https://www.arcgis.com/home/item.html?id=4d9fb5c0a6344407aec56f47a11482b5
    * アイテム ID : `4d9fb5c0a6344407aec56f47a11482b5`
    * サービス URL : https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/State_Geologic_Map_Compilation_%E2%80%93_Geology/FeatureServer/0
3. ベースマップを表示します。

ArcGIS Maps SDKs は、ホスト レイヤーのアイテム ID またはサービス URL を使用してデータ サービスにアクセスします。一方、オープンソース ライブラリは、サービス URL を使用してデータ サービスにアクセスします。

##### 例 : ArcGIS Maps SDK for JavaScript

```JavaScript
const featureLayer = new FeatureLayer({
    portalItem: {
      id: "4d9fb5c0a6344407aec56f47a11482b5" //  ArcGIS Online 上の State Geologic Map Compilation – Geology を参照
    }
  });
  const basemap = new Basemap({
    baseLayers: [featureLayer]
  });
```
<div style="text-align: right;">
<a href="https://developers.arcgis.com/javascript/latest/tutorials/display-a-custom-basemap-style/">チュートリアルへ</a>
</div>

{{% notice note %}}

ベースマップ用のホスト レイヤーとデータ サービスを使用する方法については、[ホスト レイヤー (データ サービス) の表示](#ホスト-レイヤー-データ-サービス-の表示)を参照してください。

{{% /notice %}}

{{% notice note %}}

ベースマップ用に独自のサービスを作成する方法については、[Data services > Introduction](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/introduction-to-data-services/) を参照してください。

{{% /notice %}}

## コード例
### ベースマップ スタイルの表示

この例では、ベースマップのデータ ソースとしてベースマップ スタイル サービスを使用する方法を示します。そのためには、デフォルトのベースマップ スタイルの 1 つを使用します。表示可能なベースマップについては、[ベースマップ スタイル (v2)](https://developers.arcgis.com/rest/basemap-styles/) を参照してください。

#### ステップ

1. マップを作成します。
2. ベースマップ スタイル サービスからスタイルを参照します。
3. ベースマップをマップに追加します。

##### 例 : ArcGIS API for Python
```Python
from arcgis.gis import GIS

gis = GIS(api_key="YOUR_API_KEY")
map = gis.map()
map.basemap = "streets-vector"
# map.basemap = "streets-navigation-vector"
# map.basemap = "topo-vector"
# map.basemap = "gray-vector"
# map.basemap = "satellite"

map.center = [35.25615700207951, 139.15502776889684]
map.zoom = 13
map

```
<div style="text-align: right;">
<a href="https://developers.arcgis.com/python/guide/using-the-map-widget/#basemaps">APIリファリンスヘ</a>
</div>

#### ArcGIS/Streets

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-js-api-streets-5337c29fa3125d500248d72f07e43b75.html"
></iframe>

#### ArcGIS/Navigation
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-js-api-navigation-dd09cf70e5a4704aa144d772b0d107bb.html"
></iframe>

#### ArcGIS/Topographic
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-js-api-topo-8de44b708e158d15c359ec647884e29e.html"
></iframe>

#### ArcGIS/Outdoor
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-outdoor-ff7a587d3adb756a071a6fbc29b87200.html"
></iframe>

#### ArcGIS/Light gray canvas
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-js-api-gray-6c0ebf7df7ee05392a16758731700312.html"
></iframe>

#### ArcGIS/Imagery
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-js-api-imagery-13ef684f2844126cd272d44e7ca4a98f.html"
></iframe>

#### OSM/Standard
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-osm-standard-e2d6615a76847965490cb2f353b6ec93.html"
></iframe>

#### OSM/Navigation
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-osm-navigation-62ce7ed27beb0a54d3c8c7ffb1417f1a.html"
></iframe>

#### OSM/Blueprint
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-blueprint-c2aacd5f4a0fa70678258d5ea4b9eaf8.html"
></iframe>

### ローカライズされた地名ラベルの表示

ベースマップ スタイル サービスはデフォルトで英語のラベルを表示します。以下の例では、ローカライズされた言語ベースの地名ラベルで OSM スタイルを表示する方法を示します。

#### ステップ

1. マップまたはシーンを作成します。
2. ベースマップ スタイル サービス (v2) からスタイルを参照します。
3. スタイルの URL で、`language` パラメーターに言語コードを設定します。
4. ベースマップをマップに追加します。

### ローカライズされた地名ラベル (ローカル)

この例では、`arcgis/light-gray` のマップ スタイルを使用します。デフォルトでは地名ラベルはグローバルな地名を表示します。ローカライズされた地名ラベルをレンダリングするには、`language` パラメーターを `local` に設定します。ローカライズされたラベルはズームレベル 10 以降でレンダリングされます。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-v2-localized-place-labels-ccbfc8d726ac2fa2ae7441a88ba41a69.html"
></iframe>

##### 例 : Esri Leaflet
```JavaScript
const apiKey = "YOUR_API_KEY";
const map = L.map("map").setView([35.67255187657312, 139.76323442958844], 14);
L.esri.Vector.vectorBasemapLayer("arcgis/light-gray", {
  apikey: apiKey,
  language: 'local',
  version: 2
  }).addTo(map);
```

<div style="text-align: right;">
<a href="https://developers.arcgis.com/esri-leaflet/maps/change-the-place-label-language/">チュートリアルへ</a>
</div>


### 言語ベースの地名ラベル (グローバル) 

この例では、`arcgis/dark-gray` マップ スタイルを使用しています。`language` パラメーターに言語コード (ここでは `ja`) を設定し、全てのズームレベルで地名ラベルがすべて日本語で表示されるようにしています。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-v2-localized-place-labels-ja-9152bd096725f24a64ca0c71c8fa1e79.html"
></iframe>

##### 例 : Esri Leaflet

```JavaScript
const apiKey = "YOUR_API_KEY";
const map = L.map("map").setView([2.35, 48.856], 6);
L.esri.Vector.vectorBasemapLayer("arcgis/dark-gray", {
  apikey: apiKey,
  language: 'ja',
  version: 2
}).addTo(map); 
```

<div style="text-align: right;">
<a href="https://developers.arcgis.com/esri-leaflet/maps/change-the-place-label-language/">チュートリアルへ</a>
</div>


### worldview の表示

ベースマップ スタイル サービスは、デフォルトのグローバルな worldview を使用して、国の境界線とラベルを表示します。この例では、ある国の特定のビューに基づいてベースマップの境界線とラベルを表示する方法を示します。 worldview は、`navigation`、`streets`、`community` など一部の ArcGIS ベースマップ スタイルでのみ使用できます。OSM スタイルはサポートされていません。

{{% notice note %}}

特定の worlview を選択した場合、その国以外の国際的な方針ではないことに注意してください。

{{% /notice%}}

#### ステップ

1. マップまたはシーンを作成します。
2. ベースマップ スタイル サービス (v2) からベースマップ レイヤーを参照します。
3. スタイルの URL で、サポートされている worldview 名を `worldview` パラメーターに設定します。
4. ベースマップをマップに追加します。

この例では、 `arcgis/light-gray` のマップ スタイルを使用し、境界線とラベルの `worldview` を `morocco` に設定しています。すべての `worldview` オプションを見るには、[ベースマップ スタイル サービス (v2)](https://developers.arcgis.com/rest/basemap-styles/) をご覧ください。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-v2-select-a-worldview-950ccd560a77cad1b43997272e52ad59.html"
></iframe>

##### 例 : MapLible GL JS
```JavaScript
const worldView = "morocco" // モロッコの worldview を指定
      const map = new maplibregl.Map({
        container: "map", // div 要素の ID
        style: `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/arcgis/light-gray?token=${apiKey}&worldview=${worldView}`,
        zoom: 3,
        center: [-7.09, 31], // 初期位置 [経度, 緯度]
      }) 
```

### ホスト レイヤー (データ サービス) の表示

この例では、ベースマップのデータ ソースとして ArcGIS のデータ サービスを使用する方法を示します。データはアメリカ全土の地質を示すホスト フィーチャ レイヤーです。データ サービスを利用するためには、ホスト レイヤーのアイテム ID を参照する必要があります。

#### ステップ

1. ホスト レイヤーのアイテム ID を見つけます。
2. ベースマップを作成し、そのレイヤーをベースレイヤーとして追加します。
3. マップを作成し、ベースマップを使用します。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-apis-and-services-maps-code-basemap-layers-examples-display-a-data-service-js-api-125907858dee5bd8c1e12fb9251b3924.html"
></iframe>


##### 例 : ArcGIS Maps SDK for JavaScript
```JavaScript
const featureLayer = new FeatureLayer({
    portalItem: {
      id: "4d9fb5c0a6344407aec56f47a11482b5" //  ArcGIS Online 上の State Geologic Map Compilation – Geology を参照
    }
  });
  const basemap = new Basemap({
    baseLayers: [featureLayer]
  }); 
```

<div style="text-align: right;">
<a href="https://developers.arcgis.com/javascript/latest/display-a-custom-basemap-style/#add-the-basemap-layers">チュートリアルへ</a>
</div>