+++
title = "OpenLayers"
description = "OpenLayers を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=3
aliases = ["/create-startup-app-OpenLayers/"]
+++

# マップを表示する
このチュートリアルでは、[OpenLayers](https://developers.arcgis.com/openlayers/) と ベースマップ レイヤー サービス を使用して、マップを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-openlayers/create-startup-app-openlayers.png" width="600px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで1つ以上のデータ レイヤーが含まれます。マップ ビューを使用し、場所とズームレベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形 ベースマップ レイヤーを使用して、 OpenLayers で富士山周辺の地図を表示します。

## 前提条件

このチュートリアルを実施するには、以下が必要です。

* 開発者ダッシュボードにアクセスして API キーを作成するには、[ArcGIS アカウント](https://developers.arcgis.com/sign-up/)が必要です。アカウントの作成手順については「[開発者アカウントの作成](../../get-dev-account/)」を参照してください。

## ステップ

### 新しい Pen の作成

[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピング アプリケーション用の新しい Pen を作成します。

### HTML の作成

HTML ページを定義して、Web ブラウザの幅と高さにあわせたマップを作成します。

1. CodePen ＞ HTML で、HTML と CSS を追加して、map という id 属性をもつ div 要素のあるページを作成します。

    HTML を使って、マップを表示する Web ページを作成します。この時マップは map div 内に表示します。CSS を使って、マップを全幅・全高で表示されるようにします。

    CodePenでは、`<!DOCTYPE html>`タグは必要ありません。他のエディタを使用している場合や、ローカルサーバでページを実行している場合は、必ずこのタグを HTML ページの先頭に追加してください。

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

### ライブラリの読み込み

OpenLayers と [ol-mapbox-style](https://github.com/openlayers/ol-mapbox-style) の JavaScript と CSS ファイルを参照するために、`<script>`と`<link>`タグを追加します。

1. `<head>`要素の中に、OpenLayers の CSS と JavaScript ライブラリへの参照を追加します。

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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

     </head>
  <body>
    <div id="map"></div>
  </body>
</html>

```

2. [ol-mapbox-style](https://github.com/openlayers/ol-mapbox-style) ライブラリへの参照を追加します。これは、OpenLayers でベク​​タータイル スタイルを使用してベクタータイル レイヤーをロードおよびスタイル設定するために必要です。<br>olms.js は、OpenLayers の開発者によって提供されています。"olms" は OpenLayers Mapbox Style の略です。詳しくは、ol-mapbox-style の[ドキュメント](https://github.com/openlayers/ol-mapbox-style)をご覧ください。


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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>

     </head>
  <body>
    <div id="map"></div>
  </body>
</html>

```

### Map と View の作成

OpenLayers マップを作成するには、[Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) クラスと [View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) クラスを使用します。

OpenLayers の [Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) クラスは、マップのコンテンツを表示し、それを操作するためのユーザーインターフェースを提供します。マップのクリック、ズーム、パン、回転、視点の変更をサポートしています。また、マップデータの可視コンテンツを操作することもでき、例えば、マウスカーソルでフィーチャを見つけることができます。また、新しいソースを追加したり、レイヤーのプロパティを変更したりして、表示されるデータを修正することもできます。OpenLayers は、レイヤーの変更に応じて、必要に応じて自動的に再レンダリングを行います。

詳細については、OpenLayers の[ドキュメント](https://openlayers.org/en/latest/doc/)を参照してください。
 
1. `<body>`要素の中に`<script>`要素を追加します。
 
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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>

  </head>
  <body>
    <div id="map"></div>
    
    <script>

    </script>
  
  </body>
</html>

```


2. [Map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) クラスを使用して、表示や動作を制御するオプション付きのマップを作成します。target プロパティには、div 要素の id として "map" を設定します。

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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>
  </head>
  <body>
    <div id="map"></div>
     <script>
        // 地図を表示するタグの id 属性を指定
         const map = new ol.Map({ target: "map" });

    </script>
  </body>
</html>

```

3. [View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) を作成し、[setView](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#setView) を使ってマップに適用します。マップビューを中央に配置するために、center プロパティを [138.729858,35.362752] に、zoom プロパティを12に設定します。

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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>
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

    </script>
  </body>
</html>

```

### APIキーの設定

[ロケーションサービス](../../services)にアクセスするには、API キーまたは OAuth2.0 アクセストークンが必要です。API キーの作成手順については「[API キーの取得](../../get-api-key)」を参照してください。
 
認証方法とアクセストークンの取得方法の詳細については、「[セキュリティと認証](../../security)」を参照してください。

1. [開発者ダッシュボード](https://developers.arcgis.com/dashboard/)に移動して、API キーを取得します。

2. 次の手順に使うため API キーをコピーします。

### ベースマップ レイヤーの追加

OpenLayers はベクター ベースマップやベクター スタイル ファイルを直接サポートしていないので、[openlayers-mapbox-style](https://github.com/openlayers/ol-mapbox-style) (olms) JavaScript ライブラリを使用して、[ベースマップ レイヤー サービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/)から Mapbox スタイルをロードし、OpenLayers でレンダリングします。

Mapbox スタイルは、スタイルで使用されるベクター タイル レイヤーへの参照と、それらのタイル内の1つまたは複数のデータ レイヤーに適用される表示スタイル ルールを含む JSON ファイルです。

1. API キーを変数として保存します。ArcGIS サービスを呼び出す際には、必ずこの API キーを含める必要があります。

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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>
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
      const apiKey = "YOUR_API_KEY";

    </script>

  </body>
</html>
```

2. basemapId 変数を作成し、それを arcgis/topographic に設定します。また、ベースマップを日本語で表示するため、language 変数を作成し、ja を設定します。

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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>
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
      const apiKey = "YOUR_API_KEY";

      // ベースマップの設定
      const basemapId = "arcgis/topographic";

      // ベースマップの言語設定
      const language = "ja";

    </script>

  </body>
</html>
```

3. basemapId と API キーに基づいてベースマップの URL を作成します。

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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>
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
      const apiKey = "YOUR_API_KEY";

      // ベースマップの設定
      const basemapId = "arcgis/topographic";

      // ベースマップの言語設定
      const language = "ja";

      // ベースマップの URL を設定
      const basemapURL = "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/" + basemapId + "?type=style&token=" + apiKey + "&language=" + language;

    </script>

  </body>
</html>
```

4. [olms](https://github.com/openlayers/ol-mapbox-style#olms) を使用して、ベースマップ スタイルをマップに適用します。olms 関数は、マップ要素と Mapbox ベースマップ スタイル ファイルの URL の2 つの入力を受け取ります

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
    <script src="https://cdn.jsdelivr.net/npm/ol@v8.2.0/dist/ol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v8.2.0/ol.css">

    <!-- ベクタータイル レイヤーを地図で表示するために olms.js ライブラリへの参照を追加 -->
    <script src="https://cdn.jsdelivr.net/npm/ol-mapbox-style@6.1.4/dist/olms.js"></script>
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
      const apiKey = "YOUR_API_KEY";

      // ベースマップの設定
      const basemapId = "arcgis/topographic";

      // ベースマップの言語設定
      const language = "ja";

      // ベースマップの URL を設定
      const basemapURL = "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/" + basemapId + "?type=style&token=" + apiKey + "&language=" + language;

      // olms 関数でベクター タイル レイヤー をベースマップに適用
      olms(map, basemapURL);
    </script>

  </body>
</html>
```
### アプリを実行する

__CodePen__ で、作成したコードを実行して地図を表示します。

地図には、日本の富士山のエリアの地形ベースマップ レイヤーが表示されているはずです。パンとズームで地図を探索してみましょう。