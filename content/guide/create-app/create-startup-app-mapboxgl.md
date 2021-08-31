+++
title = "Mapbox GL JS"
description = "Mapbox GL JS を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=3
aliases = ["/create-startup-app-mapboxgl/"]
+++

# マップを表示する
このチュートリアルでは、[Mapbox GL JS](https://developers.arcgis.com/mapbox-gl-js/) と ベースマップ レイヤー サービスを使用して、マップを表示する方法を紹介します。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-mapboxgl/create-startup-app-mapboxgl.png" width="600px">

ベースマップ レイヤー サービスのベクター タイル ベースマップ レイヤーを使用して、Mapbox GL JS にマップを表示できます。ベクター タイル ベースマップレイヤーは、ソース、レイヤー、フォントグリフ(Font Glyphs)、およびレイヤーをレンダリングするためのアイコンを含む Mapbox GL スタイルです。

このチュートリアルでは、[ベースマップ レイヤー サービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-layers/)の地形ベースマップ レイヤーを使用して、富士山周辺の地図を表示します。

マップとレイヤーの詳細については、[Mapping APIs and services](https://developers.arcgis.com/documentation/mapping-apis-and-services/)のガイドの[Display maps, scenes, and layers](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/)にアクセスしてください。

## 前提条件
この機能を使うには、[ArcGIS アカウント](https://developers.arcgis.com/sign-up/)が必要です。アカウントの作成手順については「[開発者アカウントの作成](../../get-dev-account/)」を参照してください。

## 手順

### 新しい Pen の作成

[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピング アプリケーション用の新しい Pen を作成します。

### HTML の作成
HTML ページを定義して、Web ブラウザの幅と高さにあわせたマップを作成します。

1. CodePen > HTML で、HTML と CSS を追加して、map という id 属性を持つ div 要素のあるページを作成します。
    map id は、マップを表示するために使用される id 属性です。CSS はブラウザの設定をリセットして、マップがブラウザの幅と高さ全体に表示されるようにします。

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Mapbox GL JS Tutorials: Display a map</title>
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

### API の参照
1. `<head>`タグで、Mapbox GL JS CSS および JS ライブラリへの参照を追加します。

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Mapbox GL JS Tutorials: Display a map</title>
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
    <!-- mapbox gl js のライブラリと css ファイルを指定 -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
    <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />

  </head>
  <body>
    <div id="map"></div>
  </body>

</html>
```

### APIキーの設定

[ロケーションサービス](../../services)にアクセスするには、API キーまたは OAuth2.0 アクセストークンが必要です。API キーの作成手順については「[API キーの取得](../../get-api-key)」を参照してください。
 
認証方法とアクセストークンの取得方法の詳細については、「[セキュリティと認証](../../security)」を参照してください。

1. [開発者ダッシュボード](https://developers.arcgis.com/dashboard/)に移動して、API キーを取得します。これは、次の手順で使います。

### マップの作成

[Map](https://docs.mapbox.com/mapbox-gl-js/api/map/) クラスを使用して、指定したベースマップを使用してマップを追加します。
[Map](https://docs.mapbox.com/mapbox-gl-js/api/map/) クラスは、map id を使用して、マップのコンテンツを表示し、対話するためのユーザーインターフェイスを提供します。地図のクリック、ズーム、パン、回転、視点の変更をサポートします。また、マウスがクリックされた場所のフィーチャの検索など、マップデータに関する情報を操作および検出することもできます。また、新しいソースを追加したり、レイヤープロパティを変更したりして、表示されるデータを変更することもできます。
詳細については、Mapbox GL JS の[ドキュメント](https://docs.mapbox.com/mapbox-gl-js/api/map/)を参照してください。

1. `<body>`タグ内に`<script>`タグを追加します。

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Mapbox GL JS Tutorials: Display a map</title>
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
    <!-- mapbox gl js のライブラリと css ファイルを指定 -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
    <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />

  </head>

  <body>
    <div id="map"></div>

    <!--script のタグを追加-->
    <script>

    </script>

  </body>

</html>
```

2. API キーを格納するための apiKey 変数を作成します。YOUR_API_KEY を、API キーの設定で開発者ダッシュボードからコピーした API キーに置き換えます。アクセスする各 ArcGIS サービスの URL にこれを含める必要があります。なお、ここでは [mapboxgl.accessToken](https://docs.mapbox.com/mapbox-gl-js/api/map/) を設定する必要はありません。使用するベースマップ ArcGIS:topographic を格納する basemapEnum 変数を作成します。

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Mapbox GL JS Tutorials: Display a map</title>
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
    <!-- mapbox gl js のライブラリと css ファイルを指定 -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
    <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />


  </head>

  <body>
    <div id="map"></div>

    <!--script のタグを追加-->
    <script>
        // API キーの追加 
        const apiKey = "YOUR_API_KEY";
        // ベースマップの指定
        const basemapEnum = "ArcGIS:Topographic";
      
    </script>

  </body>

</html>
```

3. 表示と動作を制御するオプションを使用して [Map](https://docs.mapbox.com/mapbox-gl-js/api/map/) を作成します。[container](https://docs.mapbox.com/mapbox-gl-js/api/map/) プロパティを、作成した div の map id に設定します。style プロパティは、ベースマップレイヤーサービスの場所を参照し、ベースマップ識別子と API キーを含みます。

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Mapbox GL JS Tutorials: Display a map</title>
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
    <!-- mapbox gl js のライブラリと css ファイルを指定 -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
    <link href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />

  </head>

  <body>
    <div id="map"></div>

    <!--script 要素を追加-->
    <script>
        // API キーの追加 
        const apiKey = "YOUR_API_KEY";
        // ベースマップの指定
        const basemapEnum = "ArcGIS:Topographic";
      
        const map = new mapboxgl.Map({
            container: "map", // div 要素内の id を指定
            style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`,
            zoom: 12, // マップ初期表示時点でのズームレベル
            center: [138.729858, 35.362752] // マップ初期表示時の位置
        });

    </script>

  </body>

</html>
```

### アプリの実行
__CodePen__ で、作成したコードを実行して地図を表示します。

地図には、日本の富士山のエリアの地形ベースマップ レイヤーが表示されています。