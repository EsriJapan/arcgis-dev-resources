+++
title = "インストール ガイド"
description = "ArcGIS API for JavaScript ライブラリのインストール方法を紹介します。"
weight = 2
aliases = ["/javascript/install-jsapi/"]
+++

ArcGIS API for JavaScript のライブラリを Windows® Server の IIS（インターネット インフォメーション サービス）上に配置して Web アプリからアクセスできる環境を作るまでの流れを紹介します。なお、IIS 以外の Web サーバーや Linux 上の Web サーバー（Apache Tomcat® など）へインストールする場合も基本的な流れは変わりません。

Esri がホストしている CDN にインターネット経由で参照する場合には、ライブラリをインストールする必要はありません。

## ライブラリのダウンロード

ライブラリとヘルプ ドキュメントは ArcGIS Developers の <a href="https://developers.arcgis.com/downloads/" target="_blank">Downloads ページ</a>からダウンロードできます。[Product] のドロップダウン リストから [ArcGIS API for JavaScript] を選択し、ダウンロードしたいバージョンの [API] ボタンをクリックするとダウンロードが開始します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/Install.png" width="1150px">

> [arcgis_js_v420_sdk.zip] ボタンをクリックすると <a href="https://developers.arcgis.com/javascript/" target="_blank">https://developers.arcgis.com/javascript/</a> で公開されているヘルプ ドキュメントとサンプル一式をダウンロードできます。

## Web サーバー（IIS）に配置

まずはダウンロードしたサンプル コードを実行してみましょう。

1. ダウンロードしたライブラリの zip ファイルを解凍します。
1. `\arcgis_js_v419_api\arcgis_js_api\javascript\4.20\` とすべてのコンテンツをコピーして Web サーバー上に配置します。例 : (`C:\inetpub\wwwroot\javascript\api\4.20\`)

## ビルドのインストール

ライブラリ ファイルに配置した Web サーバーの FQDN とトップレベル ドメインを指定します。

1. `C:\inetpub\wwwroot\javascript\api\4.20\init.js` をテキスト エディターで開きます。
1. `[HOSTNAME_AND_PATH_TO_JSAPI]` を検索して `www.example.com/javascript/api/4.20/` に置き換えます。
1. `C:\inetpub\wwwroot\arcgis_js_api\library\4.20\dojo\dojo.js` をテキスト エディターで開きます。
1. `[HOSTNAME_AND_PATH_TO_JSAPI]` を検索して `www.example.com/arcgis_js_api/library/` に置き換えます。

## インストールのテスト

ここまでの手順が完了したら、以下の URL で ArcGIS API for JavaScript のライブラリにアクセスできるようになります。

```html
<script src="https://www.example.com/javascript/api/4.20/init.js"></script>
```

インストールのテストには以下のコードを利用してください。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no" />
    <title>Test Map</title>
    <link rel="stylesheet" href="https://www.example.com/javascript/api/4.20/esri/themes/light/main.css" />
    <style>
      html,
      body,
      #viewDiv {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <script src="https://www.example.com/javascript/api/4.20/init.js"></script>
    <script>
      require([
        "esri/Basemap",
        "esri/layers/TileLayer",
        "esri/Map",
        "esri/views/MapView"
      ], function (Basemap, TileLayer, Map, MapView){
        // --------------------------------------------------------------------
        // パブリックなインターネット アクセスができない環境の場合、
        // Basemap クラスとローカルにアクセス可能なキャッシュ サービスを利用します。
        //
        // そうでない場合は、ホストされた ArcGIS サービスのいずれかを使用することができます。
        // https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer
        // --------------------------------------------------------------------
        const layer = new TileLayer({
          url: "https://www.example.com/arcgis/rest/services/Folder/Custom_Base_Map/MapServer"
        });
        const customBasemap = new Basemap({
          baseLayers: [layer],
          title: "Custom Basemap",
          id: "myBasemap"
        });
        const myMap = new Map({
          basemap: customBasemap
        });
        const view = new MapView({
          center: [139, 35], // long, lat
          container: "viewDiv",
          map: myMap,
          zoom: 6
        });
      });
    </script>
  </head>
  <body>
    <div id="viewDiv"></div>
  </body>
</html>
```
