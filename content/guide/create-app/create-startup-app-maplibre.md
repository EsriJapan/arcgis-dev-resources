+++
title = "MapLibre GL JS"
description = "MapLibre GL JS を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=3
aliases = ["/create-startup-app-maplibregl/"]
+++

出典：MapLibre GL JS and ArcGIS - Tutorials - [Display a map](https://developers.arcgis.com/maplibre-gl-js/maps/vector-tile-basemaps/display-a-map/)

# マップを表示する
このチュートリアルでは、[MapLibre GL JS](https://developers.arcgis.com/maplibre-gl-js/) と ベースマップ レイヤー サービスを使用して、マップを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-mapboxgl/create-startup-app-mapboxgl.png" width="600px">

ArcGIS ベースマップ スタイル サービスは、地形、道路、アウトドア、ナビゲーション、画像など、マップで使用できる複数のベースマップ スタイルを提供します。MapLibre GL JS アプリでこのサービスのベースマップ スタイルを表示するには、[MapLibre ArcGIS プラグイン](https://developers.arcgis.com/maplibre-gl-js/maplibre-arcgis-plugin/)を使用します。

このチュートリアルでは、`arcgis/topographic` ベースマップ スタイルを使用して、富士山周辺の地図を表示します。
このアプリケーションは[ベースマップ タイルの使用モデル ](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/basemap-usage-styles/)を利用します。

{{< callout type="info" >}}
マッピングと位置情報サービスのガイド:
ベースマップのスタイルについて詳しくは、[ベースマップ](../../services/basemaps/)をご覧ください。
{{< / callout >}}

## 前提条件
このチュートリアルを実施するには、以下が必要です。

- API キーにアクセスするための ArcGIS Online アカウントもしくは ArcGIS 開発者アカウント
  - アカウントをお持ちでない場合は、ArcGIS 開発者アカウントに[サイン アップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。

## ステップ

### 新しい Pen の作成

[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピング アプリケーション用の新しい Pen を作成します。

### 新しいアプリの作成
HTML ページを定義して、Web ブラウザの幅と高さにあわせたマップを作成します。

1. CodePen > HTML で、HTML と CSS を追加して、`map` という id 属性を持つ div 要素のあるページを作成します。
  

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>MapLibre GL JS Tutorials: Display a map</title>
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
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>MapLibre GL JS Tutorials: Display a map</title>
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
`<head>`タグに、[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/#cdn) と [Maplibre ArcGIS プラグイン](https://developers.arcgis.com/maplibre-gl-js/maplibre-arcgis-plugin/)への参照を追加します。

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>MapLibre GL JS Tutorials: Display a map</title>
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
    <!-- maplibre gl js のライブラリと css ファイルを指定 -->
    <script src=https://unpkg.com/maplibre-gl@5.15.0/dist/maplibre-gl.js></script>
    <link href=https://unpkg.com/maplibre-gl@5.15.0/dist/maplibre-gl.css rel="stylesheet" />
    <!-- MapLibre ArcGIS のライブラリを追加 -->
    <script src="https://unpkg.com/@esri/maplibre-arcgis@1.1.0/dist/umd/maplibre-arcgis.min.js"></script>
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

富士山を中央に配置した ArcGIS ベースマップ スタイルを表示するマップを作成します。ベースマップ スタイルにアクセスするには MapLibre ArcGIS プラグインを使用します。

表示と動作を制御するオプションを使用して [Map](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/) を作成します。[container](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/) プロパティを、作成した div の id に設定します。style プロパティは、ベースマップレイヤーサービスの場所を参照し、ベースマップ識別子と API キーを含みます。
また、プラグインを使用して、マップに [BasemapStyle](https://developers.arcgis.com/maplibre-gl-js/api-reference/BasemapStyle/) を適用します。プラグインは自動的に Esri およびデータ出典情報を適用します。

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>MapLibre GL JS Tutorials: Display a map</title>
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
    <!-- maplibre gl js のライブラリと css ファイルを指定 -->
    <script src=https://unpkg.com/maplibre-gl@5.15.0/dist/maplibre-gl.js></script>
    <link href=https://unpkg.com/maplibre-gl@5.15.0/dist/maplibre-gl.css rel="stylesheet" />
    <!-- MapLibre ArcGIS のライブラリを追加 -->
    <script src="https://unpkg.com/@esri/maplibre-arcgis@1.1.0/dist/umd/maplibre-arcgis.min.js"></script>
  </head>

  <body>
    <div id="map"></div>

    <!--script 要素を追加-->
    <script>
        // API キーの追加 
        const accessToken = "YOUR_ACCESS_TOKEN";
        // ベースマップの指定
        const basemapEnum = "arcgis/topographic";
      
        const map = new maplibregl.Map({
          container: "map", // div 要素内の id を指定
          zoom: 12, // マップ初期表示時点でのズームレベル
          center: [138.729858, 35.362752] // マップ初期表示時の位置
        });

        const basemapStyle = maplibreArcGIS.BasemapStyle.applyStyle(map, {
          style: basemapEnum,
          token: accessToken
        });

    </script>

  </body>

</html>
```

### アプリの実行
__CodePen__ で、作成したコードを実行して地図を表示します。

地図には、日本の富士山の周辺の地形ベースマップ レイヤーが表示されています。

### 次のチュートリアル
以下のチュートリアルで追加の位置情報サービスの使用方法を学びましょう(英語ページ)。

- [マップの表示(ベースマップ セッション)](https://developers.arcgis.com/maplibre-gl-js/maps/vector-tile-basemaps/display-a-map-with-a-basemap-session/)
- [ベースマップ スタイルの変更](https://developers.arcgis.com/maplibre-gl-js/maps/vector-tile-basemaps/change-the-basemap-style/)
- [言語ラベルの変更](https://developers.arcgis.com/maplibre-gl-js/maps/vector-tile-basemaps/change-language-labels/)
- [プレイスの表示](https://developers.arcgis.com/maplibre-gl-js/maps/vector-tile-basemaps/display-basemap-places/)
- [カスタム ベースマップ スタイルを表示する](https://developers.arcgis.com/maplibre-gl-js/maps/vector-tile-basemaps/display-a-custom-basemap-style/)
- [住所の検索](https://developers.arcgis.com/maplibre-gl-js/geocoding/search-for-an-address/)
- [ルート検索と案内](https://developers.arcgis.com/maplibre-gl-js/route-and-directions/find-a-route-and-directions/)

