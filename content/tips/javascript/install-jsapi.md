+++
title = "インストール ガイド"
description = "ArcGIS API for JavaScript ライブラリのインストール方法を紹介します。"
weight = 2
aliases = ["/javascript/install-jsapi/"]
+++

ArcGIS API for JavaScript のライブラリを Windows® Server の IIS（インターネット インフォメーション サービス）上に配置して Web アプリからアクセスできる環境を作るまでの流れを紹介します。API の詳細については<a href="https://esrijapan.github.io/arcgis-dev-resources/tips/javascript/install-and-setup/" target="_blank">インストールおよびセットアップ方法</a>を参照してください。なお、IIS 以外の Web サーバーや Linux 上の Web サーバー（Apache Tomcat® など）へインストールする場合も基本的な流れは変わりません。

Esri がホストしている CDN にインターネット経由で参照する場合には、ライブラリをインストールする必要はありません。

## ライブラリのダウンロード

ライブラリとヘルプ ドキュメントは ArcGIS Developers の <a href="https://developers.arcgis.com/downloads/" target="_blank">Downloads ページ</a>からダウンロードできます。[Product] のドロップダウン リストから [ArcGIS API for JavaScript] を選択し、ダウンロードしたいバージョンの [API] ボタンをクリックするとダウンロードが開始します。

※ バージョンによってはインストール方法が本手順とは異なる場合があります。詳しくはダウンロード フォルダ内にあります install.html をご参照ください。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/Install.png" width="1150px">

> [arcgis_js_v421_sdk.zip] ボタンをクリックすると <a href="https://developers.arcgis.com/javascript/" target="_blank">https://developers.arcgis.com/javascript/</a> で公開されているヘルプ ドキュメントとサンプル一式をダウンロードできます。

## Web サーバー（IIS）に配置

まずはダウンロードしたサンプル コードを実行してみましょう。

1. ダウンロードしたライブラリの zip ファイルを解凍します。
1. `\arcgis_js_v421_api\arcgis_js_api\javascript\4.21\` とすべてのコンテンツをコピーして Web サーバー上に配置します。例 : (`C:\inetpub\wwwroot\javascript\api\4.21\`)

## インストールのテスト

以下のサンプルは、ArcGIS API for JavaScript のダウンロード版に含まれています。
ArcGIS API for JavaScript のダウンロード版から /arcgis_js_v421_api/arcgis_js_api/javascript/4.21/ およびそのすべてのコンテンツを Web サーバにコピーした後、<a href="https://developers.arcgis.com/javascript/latest/system-requirements/" target="_blank">サポートされている Web ブラウザ</a>でアプリケーション https://www.example.com/javascript/api/4.21/index.html を開くことにより、API をテストすることができます。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Test local installation of ArcGIS API for JavaScript</title>
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
以下のスクリーンショットのような結果が表示されます。(X.YZの部分は4.21となります。)
<img src="https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/Install_test_image.png" width="1150px">