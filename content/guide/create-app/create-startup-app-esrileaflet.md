+++
title = "Esri Leaflet"
description = "Esri leaflet を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=2
aliases = ["/create-startup-app-esrileaflet/"]
+++

# マップを表示する
このチュートリアルでは、[Esri Leaflet](https://esri.github.io/esri-leaflet/) と ベースマップ レイヤー サービス を使用して、マップを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-esrileaflet/display_map.png" width="600px">

マップには、ベースマップ レイヤー サービスのベクター タイル ベースマップ レイヤーを使用しています。ベクター タイル ベースマップ レイヤーには、レイヤーをレンダリングするためのスタイル、レイヤー、フォントグリフ(Font Glyphs)、およびアイコンが含まれています。

このチュートリアルでは、[ベースマップ レイヤー サービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/)の地形ベースマップ レイヤーを使用して、富士山周辺の地図を作成します。

マップとレイヤーの詳細については、[Mapping APIs and services のガイド](https://developers.arcgis.com/documentation/mapping-apis-and-services/)をご覧ください。

## 前提条件

このチュートリアルを実施するには、以下が必要です。

* 開発者ダッシュボードにアクセスして API キーを作成するには、[ArcGIS アカウント](https://developers.arcgis.com/sign-up/)が必要です。アカウントの作成手順については「[開発者アカウントの作成](../../get-dev-account/)」を参照してください。

## ステップ

### 新しい Pen の作成

[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピング アプリケーション用の新しい Pen を作成します。

### HTML の作成と各 JS ライブラリへの参照を追加する
Leaflet、Esri Leaflet への参照を含む HTML ページを作成します。 これらは、ベクター タイル ベースマップ レイヤーにアクセスして表示するために必要です。

- `<head>`の中に、ライブラリを参照するための`<script>`要素を追加します。
- `<head>`に，ページとマップのスタイルを決めるための`<style>`要素も追加します。
- `<body>`の中に、マップ用の`<div>`要素を追加します。

```HTML
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <title>Esri Leaflet</title>

  <!-- Leaflet の jsライブラリ と css ファイルの参照を追加-->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>

  <!-- Esri Leaflet の js ライブラリ と ベクタータイル対応の js ライブラリへの参照を追加-->
  <script src="https://unpkg.com/esri-leaflet@3.0.0/dist/esri-leaflet.js"></script>
  <script src="https://unpkg.com/esri-leaflet-vector@3.0.0/dist/esri-leaflet-vector.js"></script>

 
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

### マップの表示
`<body>`要素に、コードを含む`<script>`要素を追加してマップを作成します。


```HTML
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <title>Esri Leaflet</title>

 <!-- Leaflet の jsライブラリ と css ファイルの参照を追加-->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>

  <!-- Esri Leaflet の js ライブラリ と ベクタータイル対応の js ライブラリへの参照を追加-->
  <script src="https://unpkg.com/esri-leaflet@3.0.0/dist/esri-leaflet.js"></script>
  <script src="https://unpkg.com/esri-leaflet-vector@3.0.0/dist/esri-leaflet-vector.js"></script>

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
  
  <!-- Leaflet でのマップの作成 -->
  <script>

    const apiKey = "YOUR_API_KEY";
    const basemapEnum = "ArcGIS:Topographic";

    const map = L.map('map', {
      minZoom: 2
    }).setView([35.362752, 138.729858], 12);

    L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      apiKey: apiKey
    }).addTo(map);

  </script>

</body>

</html>

```

### API キーの設定
[ロケーションサービス](../../services)にアクセスするには、API キーまたは OAuth2.0 アクセストークンが必要です。API キーの作成手順については「[API キーの取得](../../get-api-key)」を参照してください。
 
認証方法とアクセストークンの取得方法の詳細については、「[セキュリティと認証](../../security)」を参照してください。

1. [開発者ダッシュボード](https://developers.arcgis.com/dashboard/)にアクセスして、API キーを取得します。このチュートリアルで使用するサービスにアクセスするには API キーの[スコープ](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/create-and-manage-an-api-key/)を設定する必要があります。 

2. CodePen で、キーを使用するため、apiKey を更新します。

```HTML
<script>

    const apiKey = "YOUR_API_KEY";
    const basemapEnum = "ArcGIS:Topographic";

    const map = L.map('map', {
      minZoom: 2
    }).setView([35.362752, 138.729858], 12);

    L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      apiKey: apiKey
    }).addTo(map);

</script>
  ```

### アプリを実行する

__CodePen__ で、コードを実行してマップを表示します。