+++
title = "ベースマップ"
description = "マッピングAPI＆ロケーションサービス内のベースマップについて紹介します"
Weight=4
aliases = ["/basemaps/"]
+++

出典：Mapping APIs and location services - [Basemaps](
https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-layers/
)

<iframe width="100%" height="400" id="DemoApp-gf1e4f0b9-39b1-23c1-aa14-4f83e29dbd4c" title="ArcGIS Developer Guide: Basemap layers" class="relative h-full w-full border-none bg-transparent" src="https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-demo-662a12e21dc578539aa01d45570f8294.html"
></iframe>

## ベースマップとは？

ベースマップはベースマップ レイヤーとも呼ばれ、マップとシーンの全体的なビジュアルを提供するレイヤーです。ベースマップには通常は大陸、湖沼、行政境界、道路、都市、地名などの地理的な特徴やラベルが含まれます。ベースマップの最も一般的なデータ ソースは、[ベースマップ サービス](#ベースマップ-サービス)と[データ サービス](#データ-サービス) です。

ベースマップ レイヤーを使って以下のようなことができます。

- マップとシーンの両方で、世界中のさまざまな地理データの表示
- ArcGIS streets、navigation、light gray canvas、OSM streets などのベースマップの表示
- 自身で指定した色、字体、フォントを使用したベースマップの表示
- 街路やナビゲーションのベクター タイル レイヤーの表示
- 衛星画像や陰影起伏図用のマップ タイル レイヤーの表示
- 独自のデータを独自の空間参照で表示

## ベースマップの仕組み

ベースマップ レイヤーは、マッピング アプリケーションの視覚的な基礎を提供します。ベースマップ レイヤーは、一般的にグローバルなデータを含み、マップやシーンに追加される最初のレイヤーです。マップを表示する場合、ベースマップ レイヤーが最初に描画され、次にデータ レイヤー、グラフィックス レイヤーの順に描画されます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/basemaps/photo02_basemaplayers.png" width="1200px">

{{% notice note %}}

ベスト プラクティス：ほとんどの場合、アプリケーションはフィーチャの選択やポップアップの表示など、ベースマップ レイヤーとのやり取りを許可していません。ベースマップ レイヤー上にある[データ レイヤー](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/data-layers/)を使用してマップ内のフィーチャの表示や操作をすることができます。

{{% /notice %}}


## データ ソースの種類

ベースマップの一般的なデータ ソースは、[ベースマップ サービス](#ベースマップ-サービス)と[データ サービス](#データ-サービス)の 2 つです。

### ベースマップ サービス

ベースマップ サービスは、ベースマップ レイヤーのデータを提供する Esri がホストするサービスです。ベースマップ サービスには、[ベースマップ スタイル サービス](#ベースマップ-スタイル-サービス)と[静的ベースマップ タイル サービス](#静的ベースマップ-タイル-サービス)が含まれます。

#### ベースマップ スタイル サービス

[ベースマップ スタイル サービス](https://developers.arcgis.com/rest/basemap-styles/)は、世界中のベースマップ スタイルとデータを提供するロケーション サービスです。各ベースマップ スタイルには、地理的なフィーチャとラベルの視覚的なプロパティに固有のセットがあります。このサービスには ArcGIS と OSM のスタイルが含まれます。デフォルトのベースマップ スタイルには、streets、navigation、light gray canvas、imagery などがあります。各スタイルのデータは、ArcGIS でホストされているベクター タイル レイヤーとマップ タイル レイヤーを通じて提供され、Web メルカトル空間参照に格納されます。このサービスでは、[場所](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-places/)、[ローカル言語](#ローカライズされた地名ラベルの表示)、[worldview](#worldview-の表示) を表示することもできます。

サービスを利用するための手順は以下の通りです。

1. [スタイル](https://developers.arcgis.com/rest/basemap-styles/)を選択します。

2. サービスの URL とスタイルを参照します。
   * URL : `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/{STYLE_TYPE}/{STYLE}`
   * スタイルの種類 : [`ArcGIS`](https://developers.arcgis.com/rest/basemap-styles/#arcgis-styles) または [`OSM`](https://developers.arcgis.com/rest/basemap-styles/#osm-styles)
   * スタイルの例 : [`streets`](https://developers.arcgis.com/rest/basemap-styles/#streets-and-navigation)、[`imagery`](https://developers.arcgis.com/rest/basemap-styles/#topography-and-imagery)、[`navigation`](https://developers.arcgis.com/rest/basemap-styles/#streets-and-navigation)、[`topography`](https://developers.arcgis.com/rest/basemap-styles/#topography-and-imagery)、[`light gray canvas`](https://developers.arcgis.com/rest/basemap-styles/#reference)、[`outdoors`](https://developers.arcgis.com/rest/basemap-styles/#topography-and-imagery) など

3. ベースマップを API で表示します。以下の[コード例](#コード例--ベースマップ-スタイル-サービス)をご参照ください。

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

ArcGIS Maps SDKs は、各スタイルにアクセスするための列挙型またはヘルパークラスを提供します。また、正しい [Esri とデータの帰属](https://developers.arcgis.com/documentation/esri-and-data-attribution/)も表示されます。ただし、オープン ソース ライブラリを使用する場合は、サービスを直接参照する必要があり、[帰属](https://developers.arcgis.com/documentation/esri-and-data-attribution/)の表示を行う必要がある場合があります。

{{% /notice %}}

{{% notice note %}}

ArcGIS REST API : さまざまなスタイルと機能の詳細については[ベースマップ スタイル サービス](https://developers.arcgis.com/rest/basemap-styles/) を参照してください。

{{% /notice %}}

#### 静的ベースマップ タイル サービス

[静的ベースマップ タイル サービス](https://developers.arcgis.com/rest/static-basemap-tiles/)は、世界の範囲のラスター ベースマップ タイルを提供するロケーション サービスです。各ベースマップ スタイルには、地理的なフィーチャとラベルの視覚的なプロパティに固有のセットがあります。このサービスは、streets、navigation、outdoor、light gray canvas など、デフォルトのベースマップ スタイルをサポートしています。タイルは Web メルカトル空間参照で 512 x 512 の `.png` ファイルとして提供されます。またこのサービスは、英語以外の言語での地名ラベル表示もサポートしています。

サービスを利用するための手順は以下の通りです。

1. [ベースマップ スタイル](https://developers.arcgis.com/rest/static-basemap-tiles/)を選択します。

2. サービスの URL とスタイルを参照します。
   * URL : `https://static-map-tiles-api.arcgis.com/arcgis/rest/services/static-basemap-tiles-service/v1/{STYLE}`
   * スタイルの例 : [`arcgis/navigation`](https://developers.arcgis.com/rest/static-basemap-tiles/arcgis-navigation-tile-get/)、[`arcgis/streets`](https://developers.arcgis.com/rest/static-basemap-tiles/arcgis-streets-tile-get/)、[`arcgis/outdoor`](https://developers.arcgis.com/rest/static-basemap-tiles/arcgis-outdoor-tile-get/)、[`arcgis/light-gray`](https://developers.arcgis.com/rest/static-basemap-tiles/arcgis-light-gray-tile-get/)

3. ベースマップを API で表示します。以下の[コード例](#コード例--静的ベースマップ-タイル-サービス)をご参照ください。

##### 例 : ArcGIS Maps SDK for JavaScript

```JavaScript
const basemapStyle = "arcgis/navigation"
// const basemapStyle = "arcgis/streets"
// const basemapStyle = "arcgis/outdoor"
// const basemapStyle = "arcgis/light-gray"
// const basemapStyle = "arcgis/dark-gray"
const basemap = new Basemap({
  baseLayers: [
    new TileLayer({
      url: `https://static-map-tiles-api.arcgis.com/arcgis/rest/services/static-basemap-tiles-service/v1/${basemapStyle}/static`
    })
  ]
});

const map = new Map({
  basemap: basemap
});
```
{{% notice note %}}

ArcGIS Maps SDKs は、正しい [Esri とデータの帰属](https://developers.arcgis.com/documentation/esri-and-data-attribution/)が表示されます。ただし、オープン ソース ライブラリを使用する場合は、サービスを直接参照する必要があり、[帰属](https://developers.arcgis.com/documentation/esri-and-data-attribution/)の表示を行う必要がある場合があります。

{{% /notice %}}

{{% notice note %}}

ArcGIS REST API : サービス パラメーターやアクセス条件の詳細については、[Static basemap tiles service](https://developers.arcgis.com/rest/static-basemap-tiles/) を参照してください。

{{% /notice %}}

### データ サービス

フィーチャ サービス、ベクター タイル サービス、マップ タイル サービスなどのデータ サービスは、ArcGIS Online または ArcGIS Enterprise でホストされているデータを含むサービスです。ほとんどの場合、クライアント API でサポートされているデータ サービスは、ベースマップのデータ ソースとして使用できます。データ サービスは、ArcGIS のホスト レイヤー (アイテム) でアクセスおよび管理できます。

データ サービス は通常、ホストされている既存のデータ サービスまたは独自のホスト型データ サービスを ArcGIS で使用する場合にベースマップに使用します。また、Web メルカトル以外の空間参照を必要とする小規模な地域やエリアのデータを表示する場合にも使用します。

データ サービスを利用するための一般的な手順は以下の通りです。

1. ホスト レイヤーおよびデータ サービスを検索または作成します。
    * [ArcGIS Online](https://www.arcgis.com/home/search.html?restrict=false&sortField=relevance&sortOrder=desc&focus=layers#content) および [ArcGIS Living Atlas of the World](https://livingatlas.arcgis.com/en/browse/#d=2) で既存のサービスを検索します。
    * 独自のデータ サービスを作成する方法については、[Data hosting](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/) を参照してください。

2. レイヤーのアイテム ID またはサービス URL を取得します。例 : 
    * レイヤー アイテム : https://www.arcgis.com/home/item.html?id=4d9fb5c0a6344407aec56f47a11482b5
    * アイテム ID : `4d9fb5c0a6344407aec56f47a11482b5`
    * サービス URL : https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/State_Geologic_Map_Compilation_%E2%80%93_Geology/FeatureServer/0

3. ベースマップを API で表示します。[ホスト レイヤーの表示](#ホスト-レイヤーの表示)も参照してください。


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

ArcGIS Maps SDKs は、ホスト レイヤーのアイテム ID またはサービス URL を使用してデータ サービスにアクセスできます。一方、オープンソース ライブラリは、サービス URL を使用してデータ サービスにアクセスします。

{{% /notice %}}

{{% notice note %}}

ベースマップ用に独自のサービスを作成する方法については、[Data services > Introduction](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/introduction-to-data-services/) を参照してください。

{{% /notice %}}

## コード例 : ベースマップ スタイル サービス
### ベースマップ スタイルの表示

この例では、ベースマップのデータ ソースとしてベースマップ スタイル サービスを使用する方法を示します。そのためには、デフォルトのベースマップ スタイルの 1 つを使用します。すべてのスタイルについては、[ベースマップ スタイル サービス](https://developers.arcgis.com/rest/basemap-styles/) を参照してください。

#### ステップ

1. マップを作成します。
2. ベースマップ スタイル サービスからスタイルを参照します。
3. ベースマップをマップに追加します。

##### 例 : ArcGIS Maps SDK for JavaScript 

```JavaScript
esriConfig.apiKey = "YOUR_ACCESS_TOKEN"

const map = new Map({
  basemap: "arcgis/streets",
  //basemap: "arcgis/navigation"
  //basemap: "arcgis/topographic"
  //basemap: "arcgis/outdoor"
  //basemap: "arcgis/light-gray"
  //basemap: "arcgis/imagery"
  //basemap: "osm/standard"
  //basemap: "osm/navigation"
  //basemap: "osm/blueprint"
})

const view = new MapView({
  map: map,
  center: [-118.805, 34.027],
  zoom: 12,
  container: "viewDiv",
  constraints: {
    snapToZoom: false,
  },
})

```
<div style="text-align: right;">
<a href="https://developers.arcgis.com/javascript/latest/tutorials/display-a-map/">チュートリアルヘ</a>
</div>

#### ArcGIS/Streets
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-js-api-streets-5337c29fa3125d500248d72f07e43b75.html"
></iframe>

#### ArcGIS/Navigation
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-js-api-navigation-dd09cf70e5a4704aa144d772b0d107bb.html"
></iframe>

#### ArcGIS/Topographic
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-js-api-topo-3d56a1f0b9a8bbe5f5713278eba715e8.html"
></iframe>

#### ArcGIS/Outdoor
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-outdoor-55d71e1fe483fef44647f3f5e2069268.html"
></iframe>

#### ArcGIS/Light gray canvas
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-js-api-gray-6c0ebf7df7ee05392a16758731700312.html"
></iframe>

#### ArcGIS/Imagery
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-js-api-imagery-13ef684f2844126cd272d44e7ca4a98f.html"
></iframe>

#### OSM/Standard
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-osm-standard-d5ced326be25ca18a90412012b233843.html"
></iframe>

#### OSM/Navigation
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-osm-navigation-168b4bec42bb7aaa7eed6f1fee53d73b.html"
></iframe>

#### OSM/Blueprint
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-basemap-layer-maplibre-gl-js-blueprint-532cbb47c149504c90b4abfeb4b48346.html"
></iframe>

### ローカライズされた地名ラベルの表示

ベースマップ スタイル サービスはデフォルトで英語のラベルを表示します。以下の例では、ローカライズされた言語ベースの地名ラベルで OSM スタイルを表示する方法を示します。

#### ステップ

1. マップまたはシーンを作成します。
2. ベースマップ スタイル サービス (v2) からスタイルを参照します。
3. スタイルの URL で、`language` パラメーターに言語コードを設定します。
4. ベースマップをマップに追加します。

#### ローカライズされた地名ラベル (ローカル)

この例では、`arcgis/light-gray` のマップ スタイルを使用します。デフォルトでは地名ラベルはグローバルな地名を表示します。ローカライズされた地名ラベルをレンダリングするには、`language` パラメーターを `local` に設定します。ローカライズされたラベルはズームレベル 10 以降でレンダリングされます。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-v2-localized-place-labels-933a30de5b45908b5bc519bd5dd58d0a.html"
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


#### 言語ベースの地名ラベル (グローバル) 

この例では、`arcgis/dark-gray` マップ スタイルを使用しています。`language` パラメーターに言語コード (ここでは `ja`) を設定し、全てのズームレベルで地名ラベルがすべて日本語で表示されるようにしています。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-v2-localized-place-labels-ja-91f1526405733b0b7d99d576e631fb0e.html"
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

ベースマップ スタイル サービスは、デフォルトのグローバルな worldview を使用して、国の境界線とラベルを表示します。この例では、ある国の特定のビューに基づいてベースマップの境界線とラベルを表示する方法を示します。worldview は、`navigation`、`streets`、`community` など一部の ArcGIS ベースマップ スタイルでのみ使用できます。OSM スタイルはサポートされていません。

{{% notice note %}}

特定の worlview を選択した場合、その国以外の国際的な方針ではないことに注意してください。

{{% /notice%}}

#### ステップ

1. マップまたはシーンを作成します。
2. ベースマップ スタイル サービスからベースマップ レイヤーを参照します。
3. スタイルの URL で、サポートされている worldview 名を `worldview` パラメーターに設定します。
4. ベースマップをマップに追加します。

この例では、 `arcgis/light-gray` のマップ スタイルを使用し、境界線とラベルの `worldview` を `morocco` に設定しています。すべての `worldview` オプションを見るには、[ベースマップ スタイル サービス](https://developers.arcgis.com/rest/basemap-styles/) をご覧ください。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-v2-select-a-worldview-1edcb84ffad5de5fa27b03ab58457ca2.html"
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

## コード例 : 静的ベースマップ タイル サービス

### 静的ベースマップ タイルの表示

この例では、静的ベースマップ タイル サービスをベースマップのデータ ソースとして使用する方法を示します。そのためには、デフォルトのベースマップ スタイルの 1 つを使用します。すべてのスタイルについては、[Static basemap tiles service](https://developers.arcgis.com/rest/static-basemap-tiles/) を参照してください。

#### ステップ

1. マップを作成します。
2. 静的ベースマップ スタイル サービスからスタイルを参照します。
3. ベースマップをマップに追加します。

##### 例 : ArcGIS Maps SDK for JavaScript 

```JavaScript
const basemapStyle = "arcgis/navigation"
// const basemapStyle = "arcgis/streets"
// const basemapStyle = "arcgis/outdoor"
// const basemapStyle = "arcgis/light-gray"
// const basemapStyle = "arcgis/dark-gray"
const basemap = new Basemap({
  baseLayers: [
    new TileLayer({
      url: `https://static-map-tiles-api.arcgis.com/arcgis/rest/services/static-basemap-tiles-service/v1/${basemapStyle}/static`
    })
  ]
});

const map = new Map({
  basemap: basemap
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-91.2996, 37.1174], // USA (x, y)
  zoom: 4
});

```

#### ArcGIS/Streets
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-static-basemap-tiles-jsapi-streets-3a7268bb7913e624a6c5a80cb8842ca4.html"
></iframe>

#### ArcGIS/Navigation
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-static-basemap-tiles-jsapi-c8c7ab9455128d7dbbf31e111fee9f3d.html"
></iframe>

#### ArcGIS/Outdoor
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-static-basemap-tiles-jsapi-outdoor-d2c44600063550567df10bc774da4b12.html"
></iframe>

#### ArcGIS/Light gray canvas
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-static-basemap-tiles-jsapi-lightgray-1139f56ce6e23df16f76290209c44f7c.html"
></iframe>

#### ArcGIS/Dark gray canvas
<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-static-basemap-tiles-jsapi-darkgray-bbb6646f285f84ff4823bd9114d3527c.html"
></iframe>

### 静的ベースマップ タイル サービスの言語ラベルの変更

この例では、静的ベースマップ タイル サービスを使用するときに言語ラベルを変更する方法を示します。URL エンドポイントに、[サポートされている言語コード](https://developers.arcgis.com/rest/static-basemap-tiles/arcgis-navigation-tile-get/#language)の `language` パラメーターを渡すことができます。以下のマップはスイスを中心としており、言語を切り替えるとラベルが変化するのがわかります。

#### ステップ

1. マップを作成します。
2. 静的ベースマップ タイル サービスからスタイルを参照し、`language` パラメーターを渡します。
3. ベースマップをマップに追加します。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-change-language-labels-for-static-basemap-tiles-jsapi-5199467edc81e507b05734476c36c0df.html"
></iframe>

##### 例 : ArcGIS Maps SDK for JavaScript 

```JavaScript
const updateBasemapLanguage = (language) => {
  let basemapLayer = new TileLayer({
    url: `https://static-map-tiles-api.arcgis.com/arcgis/rest/services/static-basemap-tiles-service/v1/${basemapEnum}/static`
  });

  // Remove existing language interceptor
  if (languageInterceptor) {
    esriConfig.request.interceptors = esriConfig.request.interceptors.filter(interceptor => interceptor !== languageInterceptor);
  }

  languageInterceptor = {
    urls: [basemapLayer.url],
    before({ requestOptions }) {
      requestOptions.query.language = language;
    },
  };
  esriConfig.request.interceptors.push(languageInterceptor);

  map.add(basemapLayer);
  basemapLayer.refresh();
};
```

## コード例 : データ サービス

### ホスト レイヤーの表示

この例では、ベースマップのデータ ソースとして ArcGIS のデータ サービスを使用する方法を示します。データはアメリカ全土の地質を示すホスト フィーチャ レイヤーです。データ サービスを利用するためには、ホスト レイヤーのアイテム ID を参照する必要があります。

#### ステップ

1. ホスト レイヤーのアイテム ID を検索します。
2. ベースマップを作成し、そのレイヤーをベース レイヤーとして追加します。
3. マップを作成し、ベースマップを使用します。

<iframe width="100%" height="400" src="
https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-code-basemap-layers-examples-display-a-data-service-js-api-125907858dee5bd8c1e12fb9251b3924.html"
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