+++
title = "カスタム フォント"
description = "独自のフォントを使用する手順を紹介します。"
weight = 6
aliases = ["/javascript/custom-font/"]
+++

ArcGIS API for JavaScirpt のバージョン 4.10 以降、MapView 上のフィーチャ レイヤーのラベルやテキスト シンボルで使用するフォントは、pbf (Protocolbuffer Binary Format) で配信する必要があります。
デフォルトでは、pbf フォントは Esri が `https://static.arcgis.com/fonts` でホストしているフォントを使用できます。
利用可能なフォントの一覧は、Esri の[ガイド](https://developers.arcgis.com/javascript/latest/guide/labeling/index.html#fonts-for-featurelayer%2C-csvlayer%2C-and-streamlayer)で確認できます（"Read more" をクリックしてページを展開してください）。

デフォルトで提供されていないフォントを使用したい場合は、自身で pbf フォントを作成し Web サーバーで配信することで、API から使用することができます。このガイドでは ArcGSI API for JavaScript バージョン 4.x で独自のフォントを使用する手順を紹介します。

※ 本ガイドでご紹介する手順に関しては ESRIジャパンの技術サポート サービスの対象外となります。予めご了承ください。また、フォントの変換・配置を行う場合は、利用されるフォントの利用規約を予めご確認ください。

## フォントの入手
今回は、[Google フォント](https://fonts.google.com/?subset=japanese) からダウンロードして PBF に変換します。

<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/js_devguid/font_download.gif" width=80%>



## pbf フォントの作成
pbf ファイルは符号付き距離フィールドのセットとして以下の URL で配信する必要があります。これは MapBox GL JS のスタイル仕様と同じです。

`https://fonts/<フォントスタック>/<ユニコード文字範囲>.pbf`

pbf ファイルは [node-fontnik](https://github.com/mapbox/node-fontnik) を使用して、ttf や otf 等のフォントファイルから変換して作成できます。

1. node-fontnik をクローンします。
```
git clone https://github.com/mapbox/node-fontnik.git
```
1. node-fontnik フォルダに移動して、モジュールをインストールします。
```
npm install
```
1. fonts フォルダを作成し、作成したフォルダにダウンロードした Google フォントを配置します。
1. glyphs フォルダと変換後のファイルを出力するサブフォルダ（例: glyphs/KosugiMaru-Regular）を作成します。
1. build-glyphs を実行して pbf ファイルを作成します。
```
node-fontnik/bin/build-glyphs fonts/KosugiMaru-Regular.ttf glyphs/KosugiMaru-Regular
```
1. glyphs/KosugiMaru-Regular フォルダにユニコード文字範囲の pdf ファイル群が作成されていることを確認します。


## PBF フォントの配置
以下のディレクトリ構成にして Web サーバーへ配置します。
IIS を使用する場合は、MIME に .pbf (binary/octet-stream) を登録します。

「fonts」 フォルダ  
　　|--「<フォントファミリー>-<ウェイト>-<スタイル>」フォルダ（例：arial-bold-italic） ※  
　　　|-- pbf ファイル群

![フォントの配置](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/js_devguid/font_deploy.png)

※ <スタイル> は省略可能です。今回は「KosugiMaru-Regular」フォルダを作成します。
詳細は「API の設定」の項目を参照してください。



## API の設定

1. ArcGIS API for JavaScript で参照するフォント リソースの URL を変更します。
フォントの URL の設定は、esri/config クラスの [fontsUrl](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#fontsUrl) プロパティを使用します。

1. マップに表示するフォントを作成します。
フォントの作成は [Font](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Font.html) クラスを使用します。
family、weight、style の各プロパティに設定した値をもとに設定したフォント URL へリクエストが実行されます。
例えば、family に "arial"、weight に "bold"、style に "italic" を設定した場合は、https://<サーバー名>/fonts/arial-bold-italic フォルダにある pbf ファイルを取得します。
フォントに複数スタイルが存在しない場合は style プロパティは省略可能です。
また、weight プロパティも省略可能ですが、API で指定しない場合は regular が自動で設定され、https://<サーバー名>/fonts/arial-regular がリクエストされます。

以下は作成した pbf フォントをテキスト シンボルで表示した画面とサンプルコードです。

![フォントの表示](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/js_devguid/font_api.png)

```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no"/>
    <title>font_mapView</title>

    <link rel="stylesheet" href="https://js.arcgis.com/4.11/esri/themes/light/main.css" />

    <style>
      html,
      body,
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: black;
      }
    </style>

    <script src="https://js.arcgis.com/4.11/"></script>

    <script>
      require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/config"
      ], function(Map, MapView, Graphic, esriConfig) {

        // .pbfファイルを独自に配信するURL
        esriConfig.fontsUrl = "http://<サーバー名>/fonts";

        // テキストシンボルの作成
        var textSymbol = {
          type: "text",
          color: "white",
          text: "KosugiMaru フォントです", // 表示する文字列
          font: {
            size: 15,
            family: 'KosugiMaru' // フォントファミリー
          }
        };

        var point = {
          type: "point",
          longitude: 139.751068,
          latitude: 35.684482
        };

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: textSymbol
        });

        var map = new Map({
          basemap: "dark-gray-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          center: [139.751068, 35.684482],
          zoom: 12
        });

        view.graphics.add(pointGraphic);

      });
    </script>
  </head>

  <body>
    <div id="viewDiv"></div>
  </body>
</html>
```
