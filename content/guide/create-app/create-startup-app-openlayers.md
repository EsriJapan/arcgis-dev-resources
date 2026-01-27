+++
title = "OpenLayers"
description = "OpenLayers を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=4
aliases = ["/create-startup-app-OpenLayers/"]
+++

出典：OpenLayers and ArcGIS - Tutorials - [Display a map](https://developers.arcgis.com/openlayers/maps/vector-tile-basemaps/display-a-map/)

# マップを表示する
このチュートリアルでは、[OpenLayers](https://developers.arcgis.com/openlayers/) と ベースマップ レイヤー サービス を使用して、マップを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-openlayers/create-startup-app-openlayers.png" width="600px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで1つ以上のデータ レイヤーが含まれます。マップ ビューを使用し、場所とズーム レベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、arcgis/topographic ベースマップ スタイルを使用して、富士山周辺の地図を表示します。

このアプリケーションは[ベースマップ タイルの使用モデル](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/basemap-usage-styles/)を利用します。

{{< callout type="info" >}}
マッピングと位置情報サービスのガイド:
ベースマップのスタイルについて詳しくは、[マップ (2D)](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/maps-2d/)をご覧ください。
{{< / callout >}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

- API キーにアクセスするための ArcGIS Online アカウントもしくは ArcGIS 開発者アカウント
  - アカウントをお持ちでない場合は、ArcGIS 開発者アカウントに[サイン アップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。

## ステップ

### 新しい Pen の作成

[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピング アプリケーション用の新しい Pen を作成します。

### 新しいアプリの の作成

HTML ページを定義して、Web ブラウザの幅と高さにあわせたマップを作成します。

1. CodePen > HTML で、HTML と CSS を追加して、`map` という id 属性をもつ div 要素のあるページを作成します。
    HTML を使って、マップを表示する Web ページを作成します。この時マップは div 内に表示します。CSS を使って、マップを全幅・全高で表示されるようにします。

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>
    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
  </body>
</html>
```

### 認証を設定する

このチュートリアルで使用される位置情報サービスにアクセスするには、適切な権限を持つアクセス トークンが必要です。
  1. [API キーの取得](../../get-api-key/)のチュートリアルを参照し、以下の権限を持つ API キーを作成してください。  
      * 権限
        * **Location services** > **Basemaps**

### 開発者認証情報を設定する

前の手順で作成したアクセス トークンをアプリケーションで使用します。

HTML の `<body>` 内に `<script>` 要素を追加し、アクセス トークンを格納するための accessToken 変数を作成します。
YOUR_ACCESS_TOKEN を、取得してきた API キーをアクセス トークンとして設定してください。

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>
    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <!--script のタグを追加-->
    <script>
      // API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      
    </script>
  </body>
</html>
```

### スクリプト参照を追加する
OpenLayers と [ol-mapbox-style](https://github.com/openlayers/ol-mapbox-style) の JavaScript と CSS ファイルを参照するために、`<script>`と`<link>`タグを追加します。

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>
    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>

    <!-- openlayers の css ファイルと js ライブラリの参照追加 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@13.1.1/dist/olms.js"></script>

    </head>
  <body>
    <div id="map"></div>
    <!--script のタグを追加-->
    <script>
      // API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      
    </script>
  </body>
</html>

```

### マップの作成

OpenLayers マップを作成するには、[Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) クラスと [View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) クラスを使用します。

OpenLayers の [Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) クラスは、マップのコンテンツを表示し、それを操作するためのユーザーインターフェースを提供します。マップのクリック、ズーム、パン、回転、視点の変更をサポートしています。また、マップデータの可視コンテンツを操作することもでき、例えば、マウスカーソルでフィーチャを見つけることができます。また、新しいソースを追加したり、レイヤーのプロパティを変更したりして、表示されるデータを修正することもできます。OpenLayers は、レイヤーの変更に応じて、必要に応じて自動的に再レンダリングを行います。

詳細については、OpenLayers の[ドキュメント](https://openlayers.org/doc/)を参照してください。
 
1. [Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) クラスを使用して、表示や動作を制御するオプション付きのマップを作成します。target プロパティには、div 要素の id として "map" を設定します。

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>
    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>
    <!-- openlayers の css ファイルと js ライブラリの参照追加 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@13.1.1/dist/olms.js"></script>
  </head>
  <body>
    <div id="map"></div>
    <!--script のタグを追加-->
    <script>
      // API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      
      // 地図を表示するタグの id 属性を指定
      const map = new ol.Map({ target: "map" });

    </script>
  </body>
</html>

```

2. [View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) を作成し、[setView](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#setView) を使ってマップに適用します。マップ ビューを中央に配置するために、center プロパティを [138.729858,35.362752] に、zoom プロパティを `12` に設定します。

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>
    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>
    <!-- openlayers の css ファイルと js ライブラリの参照追加 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@13.1.1/dist/olms.js"></script>
  </head>
  <body>
    <div id="map"></div>
    <!--script のタグを追加-->
    <script>
      // API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      // 地図を表示するタグの id 属性を指定
      const map = new ol.Map({ target: "map" });
      
      // 地図を表示する位置と初期のズームレベルの指定
      map.setView(
        new ol.View({
          center: ol.proj.fromLonLat([138.729858, 35.362752]),
          zoom: 12
        })
      );

    </script>
  </body>
</html>

```

### ベースマップ レイヤーの追加

OpenLayers はベクター ベースマップやベクター スタイル ファイルを直接サポートしていないので、[openlayers-mapbox-style](https://github.com/openlayers/ol-mapbox-style) (olms) JavaScript ライブラリを使用して、[ベースマップ レイヤー サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemap-layers/)から Mapbox スタイルをロードし、OpenLayers でレンダリングします。

Mapbox スタイルは、スタイルで使用されるベクター タイル レイヤーへの参照と、それらのタイル内の1つまたは複数のデータ レイヤーに適用される表示スタイル ルールを含む JSON ファイルです。

1. basemapId 変数を作成し、それを arcgis/topographic に設定します。
また、ベースマップを日本語で表示するため、language 変数を作成し、ja を設定します。

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>

    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
     </style>
    <!-- openlayers の css ファイルと js ライブラリの参照追加 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@13.1.1/dist/olms.js"></script>
  </head>
  <body>
    <div id="map"></div>
     <script>
      // 地図を表示するタグの id 属性を指定
      const map = new ol.Map({ target: "map" });
      
      // 地図を表示する位置と初期のズームレベルの指定
      map.setView(
        new ol.View({
          center: ol.proj.fromLonLat([138.729858, 35.362752]),
          zoom: 12
        })
      );
      // API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";

      // ベースマップの設定
      const basemapId = "arcgis/topographic";

      // ベースマップの言語設定
      const language = "ja";

    </script>

  </body>
</html>
```

3. basemapId と API キー、langages 変数に基づいてベースマップの URL を作成します。

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>

    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>
    <!-- openlayers の css ファイルと js ライブラリの参照追加 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@13.1.1/dist/olms.js"></script>
  </head>
  <body>
    <div id="map"></div>
     <script>
      // 地図を表示するタグの id 属性を指定
      const map = new ol.Map({ target: "map" });
      
      // 地図を表示する位置と初期のズームレベルの指定
      map.setView(
        new ol.View({
          center: ol.proj.fromLonLat([138.729858, 35.362752]),
          zoom: 12
        })
      );
      // API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";

      // ベースマップの設定
      const basemapId = "arcgis/topographic";

      // ベースマップの言語設定
      const language = "ja";

      // ベースマップの URL を設定
      const basemapURL = "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/" + basemapId + "?type=style&token=" + accessToken + "&language=" + language;

    </script>

  </body>
</html>
```

4. [`olms`](https://github.com/openlayers/ol-mapbox-style#olms) を使用して、ベースマップ スタイルをマップに適用します。`olms.apply` 関数は、マップ要素と Mapbox ベースマップ スタイル ファイルの URL の2 つの入力を受け取ります

```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>

    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>
    <!-- openlayers の css ファイルと js ライブラリの参照追加 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@13.1.1/dist/olms.js"></script>
  </head>
  <body>
    <div id="map"></div>
     <script>
      // 地図を表示する要素の id 属性を指定
      const map = new ol.Map({ target: "map" });
      
      // 地図を表示する位置と初期のズームレベルの指定
      map.setView(
        new ol.View({
          center: ol.proj.fromLonLat([138.729858, 35.362752]),
          zoom: 12
        })
      );
      // API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";

      // ベースマップの設定
      const basemapId = "arcgis/topographic";

      // ベースマップの言語設定
      const language = "ja";

      // ベースマップの URL を設定
      const basemapURL = "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/" + basemapId + "?type=style&token=" + accessToken + "&language=" + language;

      // olms 関数でベクター タイル レイヤー をベースマップに適用
      olms.apply(map, basemapURL);
      
    </script>

  </body>
</html>
```

### 帰属表示を追加する
Esri テクノロジーを使用するすべてのアプリケーションにおいて、Esri およびデータの帰属表示を表示する必要があります。
OpenLayers はベースマップ スタイル サービスに対して自動的にデータ帰属を表示しますが、Esri の帰属表示（「Powered by Esri」）を表示するには追加の手順が必要です。

`olms.apply` 関数呼び出しにロード イベント ハンドラを追加します。
内部でベースマップ ソースを取得し、`setAttributions()` を使用して「Powered by Esri」を先頭に追加します。



```HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>OpenLayers Tutorials: Display a map</title>

    <style>
      html,
      body,
      #map {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: #323232;
      }
    </style>
    <!-- openlayers の css ファイルと js ライブラリの参照追加 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.7.0/ol.css" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/ol@v10.7.0/dist/ol.js"></script>

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@13.1.1/dist/olms.js"></script>
  </head>
  <body>
    <div id="map"></div>
     <script>
      // 地図を表示する要素の id 属性を指定
      const map = new ol.Map({ target: "map" });
      
      // 地図を表示する位置と初期のズームレベルの指定
      map.setView(
        new ol.View({
          center: ol.proj.fromLonLat([138.729858, 35.362752]),
          zoom: 12
        })
      );
      // API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";

      // ベースマップの設定
      const basemapId = "arcgis/topographic";

      // ベースマップの言語設定
      const language = "ja";

      // ベースマップの URL を設定
      const basemapURL = "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/" + basemapId + "?type=style&token=" + accessToken + "&language=" + language;

      // olms 関数でベクター タイル レイヤー をベースマップに適用
      olms.apply(map, basemapURL).then(() => {
        // Add Esri attribution
        // Learn more in https://esriurl.com/attribution
        const source = map.getLayers().item(0).getSource();
        const poweredByEsriString = "Powered by <a href='https://www.esri.com/en-us/home' target='_blank'>Esri</a> | ";

        const attributionFn = source.getAttributions();
        if (attributionFn) {
          source.setAttributions((ViewStateLayerStateExtent) => {
            return [poweredByEsriString, ...attributionFn(ViewStateLayerStateExtent)];
          });
        } else source.setAttributions(poweredByEsriString);
      });

    </script>

  </body>
</html>
```

{{< callout type="info" >}}
帰属表示の要件について詳しくは、[Esri とデータの帰属表示](https://developers.arcgis.com/documentation/esri-and-data-attribution/)をご覧ください。
{{< / callout>}}


### アプリを実行する

__CodePen__ で、作成したコードを実行して地図を表示します。

地図には、日本の富士山のエリアの地形ベースマップ レイヤーが表示されているはずです。パンとズームで地図を探索してみましょう。

### 次のチュートリアル
以下のチュートリアルで追加の位置情報サービスの使用方法を学びましょう(英語ページ)。

- [言語ラベルの変更](https://developers.arcgis.com/openlayers/maps/vector-tile-basemaps/change-language-labels/)
- [カスタム ベースマップ スタイルを表示する](https://developers.arcgis.com/openlayers/maps/vector-tile-basemaps/display-a-custom-basemap-style/)
- [住所の検索](https://developers.arcgis.com/openlayers/geocode-and-search/search-for-an-address/)
- [ルート検索と案内](https://developers.arcgis.com/openlayers/route-and-directions/find-a-route-and-directions/)