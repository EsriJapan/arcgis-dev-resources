+++
title = "インストール ガイド"
description = "ArcGIS Maps SDK for JavaScript ライブラリーのインストール方法を紹介します。"
weight = 2
aliases = ["/javascript/install-jsapi/"]
+++

JavaScript ライブラリーをインストールする前に[利用規約](https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/EULA.pdf)をご覧ください。
ArcGIS Maps SDK for JavaScript へのアクセスには、CDN([Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network)) 上にホストされたバージョンを使用することをお勧めします。

```html
<script type="module" src="https://js.arcgis.com/5.1/"></script>
```

ただし、API のコピーを自分の Web サーバー上でローカルにホストしたい場合もあります。 詳細については、[Can I host the ArcGIS CDN modules locally?](https://developers.arcgis.com/javascript/latest/faq/#can-i-host-the-arcgis-cdn-modules-locally) をお読みください。

## ライブラリーのダウンロード

ライブラリーとヘルプ ドキュメントは ArcGIS Maps SDK for JavaScript リファレンスの [Downloads and previous versions ページ](https://developers.arcgis.com/javascript/latest/downloads-and-previous-versions/)からダウンロードできます。ダウンロードしたいバージョンの [API] ボタンをクリックするとダウンロードが開始されます。  
※ バージョンによってはインストール方法が本手順とは異なる場合があります。詳しくはダウンロードしたフォルダーの install.html をご参照ください。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/downloadPage.png" width="1150px">

> [Documentation] ボタンをクリックすると [https://developers.arcgis.com/javascript/](https://developers.arcgis.com/javascript/) で公開されているヘルプ ドキュメントとサンプル一式をダウンロードできます。

## ArcGIS Maps SDK for JavaScript ライブラリーのインストール
Windows オペレーティング システムに ArcGIS Maps SDK for JavaScript ライブラリーをインストールする手順と、Unix/Linux ベースのシステムに ArcGIS Maps SDK for JavaScript ライブラリーをインストールする手順は、オペレーティング システムと Web サーバー インスタンスに固有の Web サーバー ソフトウェアを構成する必要があるという事実を除いて、概念的に同じです。

### Apache HTTP サーバー
これらの手順では、ArcGIS Maps SDK for JavaScript ライブラリーを [Apache HTTP サーバー](https://httpd.apache.org/)上の次の場所 https://www.example.com/javascript/api/5.1/ (/var/www/html/javascript/api/5.1) にインストールすることを前提としています。[www.example.com](https://ja.wikipedia.org/wiki/Fully_Qualified_Domain_Name) は、[Web サイトの完全修飾ドメイン名](https://ja.wikipedia.org/wiki/Fully_Qualified_Domain_Name)と[トップ レベル ドメイン](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%83%E3%83%97%E3%83%AC%E3%83%99%E3%83%AB%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3)の組み合わせです。  
ArcGIS Maps SDK for JavaScript ライブラリーは、そのすべてを Web サーバーのディレクトリーにコピーできます。ArcGIS Maps SDK for JavaScript のダウンロード ファイルから、/arcgis_js_v51_api/javascript/5.1/ ディレクトリーとその中身をすべて Web サーバーにコピーします。この例では、ファイルは /var/www/html/javascript/api/5.1/ にコピーします。

### インターネット インフォメーション サービス（IIS）
この手順では、Windows® Server の [インターネット インフォメーション サービス (IIS)](https://www.iis.net/) 上の次の場所 https://www.example.com/javascript/api/5.1/ (C:\Inetpub\wwwroot\javascript\api\5.1\)  に ArcGIS Maps SDK for JavaScript ライブラリーをインストールするものとします。[www.example.com](https://ja.wikipedia.org/wiki/Fully_Qualified_Domain_Name) は、[Web サイトの完全修飾ドメイン名](https://ja.wikipedia.org/wiki/Fully_Qualified_Domain_Name)と[トップ レベル ドメイン](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%83%E3%83%97%E3%83%AC%E3%83%99%E3%83%AB%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3)の組み合わせです。

ArcGIS Maps SDK for JavaScript ライブラリーは、その全体を Web サーバー ディレクトリーにコピーできます。ArcGIS Maps SDK for JavaScript のダウンロードから、\arcgis_js_v51_api\javascript\5.1\  ディレクトリーとその中のすべてのファイルを Web サーバーにコピーします。この例では、ファイルは次の場所にコピーしています。`C:\Inetpub\wwwroot\javascript\api\5.1\`


## 必要条件
ArcGIS Maps SDK for JavaScript ライブラリーおよびドキュメントのデフォルトのホスティング構成は、いずれも HTTPS です。

- HTTPS では、Web サーバーに Web サーバー証明書を使用する必要があります。
- IIS には、以下の MIME タイプの登録が必要です。
  | 拡張 | MIME/type | 説明 |
  | ---- | --------- | ---- |
  | `.ttf` | `application/octet-stream` | True Typeフォント |
  | `.wasm` | `application/wasm` | [WebAssembly](https://webassembly.org/) |
  | `.woff` | `application/font-woff` | [Web Open Font Format](https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF) |
  | `.woff2` | `application/font-woff2` | [WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/) |
  | `.wsv` | `application/octet-stream` | SceneViewの星の可視化に対応 |(https://developers.arcgis.com/javascript/latest/labeling/#mapview)用のフォント |

- [Google: HTTPSが重要である理由](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
- [Google: サーバーで HTTPS を有効にする](https://support.google.com/webmasters/answer/6073543)


## インストールのテスト
次のサンプルは、ダウンロード版の ArcGIS Maps SDK for JavaScript に含まれています。 ダウンロードした ArcGIS Maps SDK for JavaScript から /arcgis_js_v51_api/javascript/5.1/ とそのすべてのコンテンツを Web サーバーにコピーした後、[サポート対象の Web ブラウザー](https://developers.arcgis.com/javascript/latest/system-requirements/)でアプリケーション  https://www.example.com/javascript/api/5.1/index.html を開くことで API をテストできます。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
    <script type="module" src="./index.js"></script>

    <script type="module">
      const [Basemap, TileLayer, Map, SceneView] = await $arcgis.import([
        "@arcgis/core/Basemap.js",
        "@arcgis/core/layers/TileLayer.js",
        "@arcgis/core/Map.js",
        "@arcgis/core/views/SceneView.js",
      ]);

      // --------------------------------------------------------------------
      // If you do not have public internet access, change the layer URL to
      // point to your own locally accessible cached service.
      // --------------------------------------------------------------------
      const layer = new TileLayer({
        url: "https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
      });
      const customBasemap = new Basemap({
        baseLayers: [layer],
        title: "My Basemap",
      });
      const myMap = new Map({
        basemap: customBasemap,
      });
      const view = new SceneView({
        container: "viewDiv",
        map: myMap,
      });

      checkThisOne("./esri/views/3d/environment/resources/stars.wsv", "wsv mimetype");
      checkThisOne("./esri/t9n/basemaps.json", "json mimetype");
      checkThisOne("./esri/themes/base/icons/fonts/CalciteWebCoreIcons.ttf", "ttf mimetype");
      checkThisOne("./esri/themes/base/icons/fonts/CalciteWebCoreIcons.woff", "woff mimetype");

      function checkThisOne(url, desc) {
        fetch(url, {
          method: "HEAD",
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
              logDiv.innerHTML += "* HTTP error " + response.status + ' for <a href="' + url + '">' + url + "</a><br/>";
              alert("Problem accessing " + desc);
            }
          })
          .catch(function (error) {
            logDiv.innerHTML += '* BAD: <a href="' + url + '">' + url + "</a><br/>";
          });
      }
    </script>
  </head>

  <body>
    <div id="viewDiv"></div>
    <div id="logDiv"></div>
  </body>
</html>
```
以下のスクリーンショットのような結果が表示されます。(X.YZの部分は 5.1 となります。)
<img src="https://apps.esrij.com/arcgis-dev/guide/img/install-jsapi/Install_test_image.png" width="1150px">

リリース詳細
```json
{
  "builddate": "2026-07-20T22:30:32.286Z",
  "commit": "4a16195e9d5d7a2c39c2ffe802d23f4150e9ca45",
  "branch": "5.1-release",
  "version": "5.1.13",
  "@esri/calcite-components": "5.1.1",
  "@esri/arcgis-html-sanitizer": "4.1.0",
  "arcadeVersion": "1.36"
}
```