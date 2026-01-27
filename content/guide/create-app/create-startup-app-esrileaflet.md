+++
title = "Esri Leaflet"
description = "Esri leaflet を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=2
aliases = ["/create-startup-app-esrileaflet/"]
+++

出典：Esri Leaflet and ArcGIS - Tutorials - [Display a map](https://developers.arcgis.com/esri-leaflet/maps/vector-tile-basemaps/display-a-map/)


# マップを表示する
このチュートリアルでは、[Esri Leaflet](https://developers.arcgis.com/esri-leaflet/) と ベースマップ レイヤー サービス を使用して、マップを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-esrileaflet/display_map.png" width="600px">

マップには、ベースマップ レイヤー サービスのベクター タイル ベースマップ レイヤーを使用しています。ベクター タイル ベースマップ レイヤーには、レイヤーをレンダリングするためのスタイル、レイヤー、フォントグリフ(Font Glyphs)、およびアイコンが含まれています。

このチュートリアルでは、`arcgis/topographic` ベースマップ スタイルを使用して、富士山周辺の地図を表示します。

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

### 新しいアプリの作成
HTML ページを定義して、Web ブラウザの幅と高さにあわせたマップを作成します。

CodePen > HTML で、HTML と CSS を追加して、`map` という id 属性を持つ div 要素のあるページを作成します。

```HTML
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <title>Esri Leaflet Tutorials: Display a map</title>
 
  <style>
    body { margin:0; padding:0; }
    #map {
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
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
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <title>Esri Leaflet Tutorials: Display a map</title>

  <style>
    body { margin:0; padding:0; }
    #map {
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
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
ベクター ベースマップ レイヤーにアクセスするには、[`Leaflet`](https://developers.arcgis.com/esri-leaflet/esri-leaflet-plugin/#leaflet) ライブラリに加え、[`esri-leaflet`](https://developers.arcgis.com/esri-leaflet/esri-leaflet-plugin/#esri-leaflet) および [`esri-leaflet-vector`](https://developers.arcgis.com/esri-leaflet/esri-leaflet-plugin/#esri-leaflet-vector) プラグインを参照します。

```HTML
<html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Esri Leaflet Tutorials: Display a map</title>

    <!-- Leaflet の jsライブラリ と css ファイルの参照を追加-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>

    <!-- Esri Leaflet の js ライブラリ と ベクタータイル対応の js ライブラリへの参照を追加-->
    <script src="https://unpkg.com/esri-leaflet@3.0.19/dist/esri-leaflet.js"></script>
    <script src="https://unpkg.com/esri-leaflet-vector@4.3.2/dist/esri-leaflet-vector.js"></script>
  
    <style>
      body { margin:0; padding:0; }
      #map {
          position: absolute;
          top:0;
          bottom:0;
          right:0;
          left:0;
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

### マップの作成
指定したベースマップを使用して、div 要素に `map` を追加します。
ベースマップ スタイルの一覧を確認するには、[ベースマップ スタイル サービスの概要](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/introduction-basemap-styles-service/)を参照してください。

[`L.map`](https://leafletjs.com/reference.html#map) クラスを使って地図を作成します。
[setView](https://leafletjs.com/reference.html#map-setview) メソッドで中心点を富士山周辺にし、ズーム レベルを `12` にセットします。  
[`L.esri.Vector.vectorBasemapLayer`](https://developers.arcgis.com/esri-leaflet/api-reference/esri-leaflet-vector/vector-basemap/) クラスをインスタンス化し、`basemapEnum` と `accessToken` を設定してから、レイヤーを `map` に追加します。

```HTML
<html>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Esri Leaflet Tutorials: Display a map</title>

    <!-- Leaflet の js ライブラリ と css ファイルの参照を追加-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>

    <!-- Esri Leaflet の js ライブラリ と ベクタータイル対応の js ライブラリへの参照を追加-->
    <script src="https://unpkg.com/esri-leaflet@3.0.19/dist/esri-leaflet.js"></script>
    <script src="https://unpkg.com/esri-leaflet-vector@4.3.2/dist/esri-leaflet-vector.js"></script>

    <style>
      body { margin:0; padding:0; }
      #map {
          position: absolute;
          top:0;
          bottom:0;
          right:0;
          left:0;
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
      const basemapEnum = "arcgis/topographic";

      const map = L.map('map', {
        minZoom: 2
      }).setView([35.362752, 138.729858], 12);

      L.esri.Vector.vectorBasemapLayer(basemapEnum, {
        token: accessToken,
        language: "ja"
      }).addTo(map);

    </script>

  </body>

</html>

```

### アプリを実行する

**CodePen** で、コードを実行してマップを表示します。マップには、富士山を中心とした地形ベースマップ レイヤーが表示されます。

### 次のチュートリアル
以下のチュートリアルで追加の位置情報サービスの使用方法を学びましょう(英語ページ)。

- [言語ラベルの変更](https://developers.arcgis.com/esri-leaflet/maps/vector-tile-basemaps/change-language-labels/)
- [カスタム ベースマップ スタイルを表示する](https://developers.arcgis.com/esri-leaflet/maps/vector-tile-basemaps/display-a-custom-basemap-style/)
- [住所の検索](https://developers.arcgis.com/esri-leaflet/geocode-and-search/search-with-autosuggest/)
- [ルート検索と案内](https://developers.arcgis.com/esri-leaflet/route-and-directions/find-a-route-and-directions/)