# ArcGIS API for JavaScript ライブラリのインストール

ArcGIS API for JavaScript のライブラリを Windows® Server の IIS（インターネット インフォメーション サービス）上に配置して Web アプリからアクセスできる環境を作るまでの流れを紹介します。なお、IIS 以外の Web サーバーや Linux 上の Web サーバー（Apache Tomcat® など）へインストールする場合も基本的な流れは変わりません。

Esri がホストしている CDN にインターネット経由で参照する場合には、ライブラリをインストールする必要はありません。

## ライブラリのダウンロード

ライブラリとヘルプ ドキュメントは ArcGIS for Developers の [Downloads ページ](https://developers.arcgis.com/downloads/)からダウンロードできます。[ArcGIS API for JavaScript] の [Download for Hosting Locally]　セクションにある [API] ボタンをクリックするとダウンロードが開始します。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/developers-downloads.png" width="600px">

> ダウンロードするライブラリのバージョンはドロップダウン リストから選択することができます。
>
> [Documentation] ボタンをクリックすると [https://developers.arcgis.com/javascript/](https://developers.arcgis.com/javascript/) で公開されているヘルプ ドキュメントとサンプル一式をダウンロードできます。

## Web サーバー（IIS）に配置

まずはダウンロードしたサンプル コードを実行してみましょう。

1. ダウンロードしたライブラリの zip ファイルを解凍します。
1. `\arcgis_js_api\library` とすべてのコンテンツをコピーして Web サーバー上に移動します（`C:\Inetpub\wwwroot\arcgis_js_api\library`）。

## ビルドのインストール

ライブラリ ファイルに配置した Web サーバーの FQDN とトップレベル ドメインを指定します。

1. `C:\Inetpub\wwwroot\arcgis_js_api\library\4.1\4.1\init.js` をテキスト エディターで開きます。
1. `[HOSTNAME_AND_PATH_TO_JSAPI]` を検索して `fqdn.tld/arcgis_js_api/library/4.1/4.1/` に置き換えます。
1. `C:\Inetpub\wwwroot\arcgis_js_api\library\4.1\4.1\dojo\dojo.js` をテキスト エディターで開きます。
1. `[HOSTNAME_AND_PATH_TO_JSAPI]` を検索して `fqdn.tld/arcgis_js_api/library/4.1/4.1/` に置き換えます。

## インストールのテスト

ここまでの手順が完了したら、以下の URL で ArcGIS API for JavaScript のライブラリにアクセスできるようになります。

```html
<script src="http://www.example.com/arcgis_js_api/library/4.1/4.1/init.js"></script>
```

インストールのテストには以下のコードを利用してください。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no" />
    <title>Test Map</title>
    <link rel="stylesheet" href="http://www.example.com/arcgis_js_api/library/4.1/4.1/dijit/themes/claro/claro.css" />
    <link rel="stylesheet" href="http://www.example.com/arcgis_js_api/library/4.1/4.1/esri/css/main.css" />
    <style>
      html, body, #ui-map-view {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <script src="http://www.example.com/arcgis_js_api/library/4.1/4.1/init.js"></script>
    <script>
      var myMap, view;
      require([
        "esri/Basemap",
        "esri/layers/TileLayer",
        "esri/Map",
        "esri/views/MapView",
        "dojo/domReady!"
      ], function (Basemap, TileLayer, Map, MapView){
        // --------------------------------------------------------------------
        // パブリックなインターネット アクセスができない環境の場合、
        // Basemap クラスとローカルにアクセス可能なキャッシュ サービスを利用します。
        // --------------------------------------------------------------------
        var layer = new TileLayer({
          url: "http://www.example.com/arcgis/rest/services/Folder/Custom_Base_Map/MapServer"
        });
        var customBasemap = new Basemap({
          baseLayers: [layer],
          title: "Custom Basemap",
          id: "myBasemap"
        });
        myMap = new Map({
          basemap: customBasemap
        });
        view = new MapView({
          center: [139, 35],
          container: "ui-map-view",
          map: myMap,
          zoom: 5
        });
      });
    </script>
  </head>
  <body class="claro">
    <div id="ui-map-view"></div>
  </body>
</html>
```

---

[:back: メインページへ戻る](https://github.com/EsriJapan/arcgis-dev-resources/blob/gh-pages/README.md)
