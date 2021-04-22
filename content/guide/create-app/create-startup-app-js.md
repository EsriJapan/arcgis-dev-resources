+++
title = "JavaScript"
description = "ArcGIS API for JavaScript を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=1
aliases = ["/create-startup-app-js/"]
+++

# マップを表示する

このチュートリアルでは ArcGIS API for JavaScript を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

画像は変更する

<img src="https://developers.arcgis.com/android/static/666fc93052d838df5cebbfe0fc426a97/4cdf7/display-a-map.png" width="400px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで1つ以上のデータレイヤーを追加できます。マップビューを使用し、場所とズームレベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベースマップレイヤーを使用して、富士山付近を表示する地図を作成します。

## 前提条件

このチュートリアルを実施するには、以下が必要です。

- API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../get-dev-account/)」をご覧ください。

## ステップ

### 新しい Pen の作成
[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピングアプリケーション用の新しい Pen を作成します。

### HTML の作成

HTML ページを定義して、Web ブラウザのウィンドウの幅と高さをフル利用してマップを作成します。

1. CodePen ＞ HTML で、HTML と CSS を追加し、viewDiv 要素を持つページを作成します。viewDiv は地図を表示する要素で、その CSS はブラウザの設定をリセットして、ブラウザの幅と高さをフルに利用できるようにしています。

    CodePenでは、`<!DOCTYPE html>` タグは必要ありません。他のエディタを使用している場合や、ローカルサーバでページを実行している場合は、必ずこのタグを HTML ページの先頭に追加してください。

    ```HTML
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>ArcGIS API for JavaScript Tutorials: Display a map</title>

        <style>
          html,
          body,
          #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        </style>

      </head>
      <body>
        <div id="viewDiv"></div>
      </body>
    </html>
    ```

### API の参照

1. `<head>` タグ内に、CSS ファイルと JS ライブラリへの参照を追加します。
 
    ```HTML
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>ArcGIS API for JavaScript Tutorials: Display a map</title>

        <style>
          html,
          body,
          #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        </style>

        <!-- CSS ファイルと JS ライブラリへの参照を追加 -->
        <link rel="stylesheet" href="https://js.arcgis.com/4.18/esri/themes/light/main.css">
        <script src="https://js.arcgis.com/4.18/"></script>
        <!-- 追加終了 -->

      </head>
      <body>
        <div id="viewDiv"></div>
      </body>
    </html>
    ```

###  モジュールの追加

ArcGIS JS API には [AMD](https://dojotoolkit.org/documentation/tutorials/1.10/modules/index.html) モジュールが含まれています。require ステートメントで [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) モジュールと [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) モジュールを参照します。

1. `<head>` タグ内に、`<script>` タグと [AMD](https://dojotoolkit.org/documentation/tutorials/1.10/modules/index.html) の require ステートメントを追加して、[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) モジュールと [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) モジュールを読み込みます。

    JavaScript のコードを HTML パネルではなく、CodePen ＞ JS パネルに追加することもできます。その場合は、`<script>` タグを削除してください。

    ```HTML
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>ArcGIS API for JavaScript Tutorials: Display a map</title>

        <style>
          html,
          body,
          #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        </style>

        <!-- CSS ファイルと JS ライブラリへの参照を追加 -->
        <link rel="stylesheet" href="https://js.arcgis.com/4.18/esri/themes/light/main.css">
        <script src="https://js.arcgis.com/4.18/"></script>
        <!-- 追加終了 -->
        
        <!-- モジュールの追加 -->
        <script>
          require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {

          });
        </script>
        <!-- 追加終了 -->

      </head>
      <body>
        <div id="viewDiv"></div>
      </body>
    </html>
    ```

### API キーの取得

[ArcGIS サービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/services/)にアクセスするには、API キーが必要です。

1. [developer dashboard](https://developers.arcgis.com/dashboard/)にアクセスして、API キーを取得します。
2. 次のステップで使用しますので、キーをコピーしてください。

### マップの作成

[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) を使ってベースマップレイヤーを設定し、API キーを適用します。

1. __CodePen__ に戻ります。

2. require 文の中で、新しい [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) を作成し、[basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap) プロパティに arcgis-topographic を設定します。[ベースマップ レイヤーサービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/)へのアクセスを可能にするために、[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) の apiKey() プロパティを設定します。

    - マップには、データ レイヤとベースマップ レイヤがあります。[ベースマップ レイヤーサービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/)からベースマップ レイヤーにアクセスするためには、API キーが必要です。キーは、[Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) の作成時に前のステップから設定できます。

    - マップおよびマップ ビューが  [Map（2D）](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/)でどのように機能するかについては、[マッピングとロケーションサービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/) を参照してください。

    ```HTML
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>ArcGIS API for JavaScript Tutorials: Display a map</title>

        <style>
          html,
          body,
          #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        </style>

        <!-- CSS ファイルと JS ライブラリへの参照を追加 -->
        <link rel="stylesheet" href="https://js.arcgis.com/4.18/esri/themes/light/main.css">
        <script src="https://js.arcgis.com/4.18/"></script>
        <!-- 追加終了 -->
        　
        <!-- モジュールの追加 -->
        <script>
          require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig,Map, MapView) {
            
            // API キーの追加
            esriConfig.apiKey = "YOUR-API-KEY";

            // マップの作成
            const map = new Map({
              basemap: "arcgis-topographic" // Basemap layer service
            });

          });
        </script>
        <!-- 追加終了 -->

      </head>
      <body>
        <div id="viewDiv"></div>
      </body>
    </html>
    ```

### マップ ビューの作成

[MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) クラスを使って、表示する地図の位置を設定します。

1. [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) を作成し、[map](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#map) プロパティを設定します。マップビューを中央に表示するために、[center](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#center) プロパティを 138.727363, 35.360626 に、[zoom](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#zoom) プロパティを 13 に設定します。マップの内容を表示するために、[container](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#container) のプロパティを viewDiv に設定します。

    - [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) は、地図の内容を表示します。[center](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#center) と [zoom](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#zoom) のプロパティは、ロード時にマップの位置と表示されるズームレベルを決定する。

    - [zoom](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#zoom) プロパティは、マップのズームレベルを設定します。値の範囲は通常 0〜20 で、0 が地表から最も遠く、20 が最も近くなります。ベースマップ レイヤーの中には、さらに 23 までのズーム・レベルをサポートするものもあります。

    - [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) は、クリックやダブルクリックなどのいくつかのタッチイベントもサポートしています。これらのイベントを利用して、マップの位置を変更したり、レイヤー内のフィーチャーを探したりすることができます。

    - [Maps（2D）](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/)でのマップとマップビューの仕組みについては、[マッピング API とロケーションサービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/) のガイドを参照してください。


    ```HTML
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>ArcGIS API for JavaScript Tutorials: Display a map</title>

        <style>
          html,
          body,
          #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        </style>

        <!-- CSS ファイルと JS ライブラリへの参照を追加 -->
        <link rel="stylesheet" href="https://js.arcgis.com/4.18/esri/themes/light/main.css">
        <script src="https://js.arcgis.com/4.18/"></script>
        <!-- 追加終了 -->
        　
        <!-- モジュールの追加 -->
        <script>
          require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

            // API キーの追加
            esriConfig.apiKey = "YOUR-API-KEY";

            // マップの作成
            const map = new Map({
              basemap: "arcgis-topographic" // Basemap layer service
            });

            // マップ ビューの作成
            const view = new MapView({
              map: map,
              center: [138.727363, 35.360626], // Longitude, latitude
              zoom: 13, // Zoom level
              container: "viewDiv" // Div element
            });

          });
        </script>
        <!-- 追加終了 -->

      </head>
      <body>
        <div id="viewDiv"></div>
      </body>
    </html>
    ```

### アプリを実行する

__CodePen__ で、作成したコードを実行して地図を表示します。

マップには、富士山を中心とした地形ベースマップレイヤーが表示されます。

# Web マップを表示する
「[Web マップの作成](../../services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップも基本的に同じステップで表示できます。

1. require ステートメントにて、[WebMap](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html) モジュールを追加で読み込みます。

    ```HTML        
    <!-- モジュールの追加 -->
    <script>
      require(["esri/config","esri/Map", "esri/WebMap", "esri/views/MapView"], function (esriConfig, Map, WebMap, MapView) {

        // .....

      });
    </script>
    <!-- 追加終了 -->
    ```

2. [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) オブジェクトを下記のように書き換えます。

   ```JavaScript
    // Web マップの参照
    const map = new WebMap({
      portalItem: {
        id: "<Web マップ ID>"
        //id: "d3ffea931f4a455f9c3b6c2102e66eda"
      }
    });
   ```

3. Web マップに置き換えた全体のコードは下記の通りです。

   ```HTML
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>ArcGIS API for JavaScript Tutorials: Display a map</title>

        <style>
          html,
          body,
          #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        </style>
        
        <!-- CSS ファイルと JS ライブラリへの参照を追加 -->
        <link rel="stylesheet" href="https://js.arcgis.com/4.18/esri/themes/light/main.css">
        <script src="https://js.arcgis.com/4.18/"></script>
        <!--追加終了  -->
        
        <!-- モジュールの追加 -->
        <script>
          require(["esri/config", "esri/Map", "esri/WebMap", "esri/views/MapView"], function (esriConfig, Map, WebMap, MapView) {

            // API キーの追加
            esriConfig.apiKey = "YOUR-API-KEY";

            // マップの作成
            /*
            const map = new Map({
              basemap: "arcgis-topographic" // Basemap layer service
            });
            */

            // Web マップの参照
            const map = new WebMap({
                portalItem: {
                  id: "<Web マップ ID>"
                  //id: "d3ffea931f4a455f9c3b6c2102e66eda"
                }
            });
    
            // マップ ビューの作成
            const view = new MapView({
              map: map,
              center: [138.727363, 35.360626], // Longitude, latitude
              zoom: 13, // Zoom level
              container: "viewDiv" // Div element
            });

          });
        </script>
        <!-- 追加終了 -->

      </head>
      <body>
        <div id="viewDiv"></div>
      </body>
    </html>
    ```

---

アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)
