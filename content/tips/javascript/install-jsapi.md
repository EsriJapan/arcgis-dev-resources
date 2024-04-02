+++
title = "インストール ガイド"
description = "ArcGIS Maps SDK for JavaScript ライブラリのインストール方法を紹介します。"
weight = 2
aliases = ["/javascript/install-jsapi/"]
+++

ArcGIS Maps SDK for JavaScript のライブラリを Windows® Server の IIS（インターネット インフォメーション サービス）上に配置して Web アプリからアクセスできる環境を作るまでの流れを紹介します。API の詳細については<a href="https://esrijapan.github.io/arcgis-dev-resources/tips/javascript/install-and-setup/" target="_blank">インストールおよびセットアップ方法</a>を参照してください。なお、IIS 以外の Web サーバーや Linux 上の Web サーバー（Apache Tomcat® など）へインストールする場合も基本的な流れは変わりません。

Esri がホストしている CDN にインターネット経由で参照する場合には、ライブラリをインストールする必要はありません。

## ライブラリのダウンロード

ライブラリとヘルプ ドキュメントは ArcGIS Maps SDK for JavaScript リファレンスの <a href="https://developers.arcgis.com/javascript/latest/downloads/" target="_blank">Downloads ページ</a>からダウンロードできます。ダウンロードしたいバージョンの [API] ボタンをクリックするとダウンロードが開始します。

※ バージョンによってはインストール方法が本手順とは異なる場合があります。詳しくはダウンロード フォルダ内にあります install.html をご参照ください。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/downloadPage_429.png" width="1150px">

> [Documentation] ボタンをクリックすると <a href="https://developers.arcgis.com/javascript/" target="_blank">https://developers.arcgis.com/javascript/</a> で公開されているヘルプ ドキュメントとサンプル一式をダウンロードできます。

## Web サーバー（IIS）に配置

<!-- まずはダウンロードしたサンプル コードを実行してみましょう。 -->

1. ダウンロードしたライブラリの zip ファイルを解凍します。
2. `\arcgis_js_v429_api\arcgis_js_api\javascript\4.29\` とすべてのコンテンツをコピーして Web サーバー上に配置します。例 : (`C:\inetpub\wwwroot\javascript\api\4.29\`)

## 必要条件

ArcGIS Maps SDK for JavaScript ライブラリおよびドキュメントのデフォルトのホスティング構成は、いずれも HTTPS です。

- HTTPS では、Web サーバーに Web サーバー証明書を使用する必要があります。
- IIS には、以下の MIME タイプの登録が必要です。
  | 拡張 | MIME/type | 説明 |
  | ---- | --------- | ---- |
  | `.ttf` | `application/octet-stream` | True Typeフォント |
  | `.wasm` | `application/wasm` | [WebAssembly](https://webassembly.org/) |
  | `.woff` | `application/font-woff` | [Web Open Font Format](https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF) |
  | `.woff2` | `application/font-woff2` | [WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/) |
  | `.wsv` | `application/octet-stream` | SceneViewの星の可視化に対応 |
  | `.pbf` | `application/x-protobuf` | [一部のレイヤーの MapView ラベル](https://developers.arcgis.com/javascript/latest/labeling/#mapview)用のフォント |

- [Google: HTTPSが重要な理由](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
- [Google: HTTPS でサイトを保護する](https://support.google.com/webmasters/answer/6073543)

## インストールのテスト

以下のサンプルは、ArcGIS Maps SDK for JavaScript のダウンロード版に含まれています。
ArcGIS Maps SDK for JavaScript のダウンロード版から /arcgis_js_v429_api/arcgis_js_api/javascript/4.29/ およびそのすべてのコンテンツを Web サーバにコピーした後、<a href="https://developers.arcgis.com/javascript/latest/system-requirements/" target="_blank">サポートされている Web ブラウザ</a>でアプリケーション https://www.example.com/javascript/4.29/index.html を開くことにより、API をテストすることができます。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Test local installation of ArcGIS Maps SDK for JavaScript</title>
    <style>
      html,
      body,
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 93%;
        width: 100%;
      }
    </style>

    <link rel="stylesheet" href="./esri/themes/light/main.css" />
    <script src="./init.js"></script>

    <script>
      require(["esri/Basemap", "esri/layers/TileLayer", "esri/Map", "esri/views/SceneView"], function (
        Basemap,
        TileLayer,
        Map,
        SceneView
      ) {
        // --------------------------------------------------------------------
        // If you do not have public internet access, change the layer URL to
        // point to your own locally accessible cached service.
        // --------------------------------------------------------------------
        const layer = new TileLayer({
          url: "https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"
        });
        const customBasemap = new Basemap({
          baseLayers: [layer],
          title: "My Basemap"
        });
        const myMap = new Map({
          basemap: customBasemap
        });
        const view = new SceneView({
          container: "viewDiv",
          map: myMap
        });

        checkThisOne("./esri/views/3d/environment/resources/stars.wsv", "wsv mimetype");
        checkThisOne("./esri/t9n/basemaps.json", "json mimetype");
        checkThisOne("./esri/themes/base/icons/fonts/CalciteWebCoreIcons.ttf", "ttf mimetype");
        checkThisOne("./esri/themes/base/icons/fonts/CalciteWebCoreIcons.woff", "woff mimetype");

        function checkThisOne(url, desc) {
          fetch(url, {
            method: "HEAD"
          })
            .then(function (response) {
              if (response.ok) {
                logDiv.innerHTML += "* OK: " + desc + "<br/>";
                if (response.status !== 200) {
                  logDiv.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;status: " + response.status + "<br/>";
                }
                return response.blob();
              } else {
                // response not ok
                logDiv.innerHTML +=
                  "* HTTP error " + response.status + ' for <a href="' + url + '">' + url + "</a><br/>";
                alert("Problem accessing " + desc);
              }
            })
            .catch(function (error) {
              logDiv.innerHTML += '* BAD: <a href="' + url + '">' + url + "</a><br/>";
            });
        }
      });
    </script>
  </head>

  <body>
    <div id="viewDiv"></div>
    <div id="logDiv"></div>
  </body>
</html>
```
以下のスクリーンショットのような結果が表示されます。(X.YZの部分は4.29となります。)
<img src="https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/Install_test_image.png" width="1150px">