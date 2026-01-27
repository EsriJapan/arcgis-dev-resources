+++
title = "CesiumJS"
description = "CesiumJS を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=5
aliases = ["/create-startup-app-cesium/"]
+++

出典：CesiumJS and ArcGIS - Tutorials - [Display a scene](https://developers.arcgis.com/cesiumjs/scenes/satellite-basemap-tiles/display-a-scene/)

# シーンを表示する
このチュートリアルでは、[CesiumJS](https://developers.arcgis.com/cesiumjs/) と ベースマップ レイヤー サービスを使用して、シーンを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-cesium/create-startup-app-cesium.png" width="600px">

ArcGIS マップ タイル サービスを使用すると、CesiumJS で地図が表示できます。
ArcGIS Static Basemap Tiles サービスは、世界全体のベースマップ データを事前スタイル設定済みのラスター タイルとして提供します。このサービスは ArcGIS ベースマップ スタイル ファミリーのスタイルを提供し、道路、地形、参照、クリエイティブなどのカテゴリに分類されています。

このチュートリアルでは、`ArcGIS:Imagery` と `Cesium World Terrain` を使用して、富士山周辺のシーンを表示します。

このアプリケーションは[ベースマップ タイルの使用モデル](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/basemap-usage-styles/)を利用します。

{{< callout type="info" >}}
マッピングと位置情報サービスのガイド:
詳細については、[静的ベースマップ タイル サービスの概要](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemaps/introduction-static-basemap-tiles-service/)をご覧ください。
{{< / callout >}}

## 前提条件

このチュートリアルを実施するには、ArcGIS Location Platform アカウントが必要です。
ArcGIS Online および ArcGIS Enterprise アカウントはサポートされていません。

- API キーにアクセスするための ArcGIS Online アカウントもしくは ArcGIS 開発者アカウント
  - アカウントをお持ちでない場合は、ArcGIS 開発者アカウントに[サイン アップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。

## ステップ

### 新しい Pen の作成

[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、新しい Pen を作成します。

### HTML の追加
HTML ページを定義して、Web ブラウザの幅と高さにあわせたマップを作成します。

1. CodePen > HTML で、HTML と CSS を追加して、`cesiumContainer` という id 属性を持つ div 要素のあるページを作成します。
    `cesiumContainer` は、マップを表示するために使用される id 属性です。CSS はブラウザの設定をリセットして、マップがブラウザの幅と高さ全体に表示されるようにします。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>

    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>

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

1. HTML の `<body>` 内に `<script>` 要素を追加し、アクセス トークンを格納するための `accessToken` 変数を作成します。
YOUR_ACCESS_TOKEN を、取得してきた API キーをアクセス トークンとして設定してください。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>

    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>

    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      
    </script>
  </body>
</html>
```

2. ArcGIS サービスへのリクエストを認証するために、Cesium に `ArcGisMapService.defaultAccessToken` を設定します。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>

    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>

    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;
      
    </script>
  </body>
</html>
```

### Cesium ion アクセス トークンの取得

すべての Cesium アプリケーションは、Cesium ion を通じて提供される[アクセス トークン](https://cesium.com/learn/ion/cesium-ion-access-tokens/)を使用する必要があります。このトークンによって、アプリケーションで [Cesium World Terrain](https://cesium.com/platform/cesium-ion/content/#cesium-world-terrain) などのアセットにアクセスできるようになります。

1. Cesium ion の[ダッシュボード](https://ion.cesium.com/tokens) にアクセスし、アクセス トークンを生成し、取得します。
2. `cesiumAccessToken` 変数を作成し、Cesium ion ダッシュボードからコピーしたアクセス トークンを格納し、`Cesium.Ion.defaultAccessToken` に設定します。
```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>
    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;

      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
    </script>

  </body>
</html>
```

### スクリプト参照の追加
1. `<head>`タグで、CesiumJS CSS および JS ライブラリへの参照を追加します。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>
    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加 
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;

      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
    </script>
  </body>
</html>
```

### シーンの作成

`World Imagery` マップ タイル レイヤーにアクセスする `Viewer` を作成します。[`ArcGisMapServerImageryProvider`](https://cesium.com/learn/ion-sdk/ref-doc/ArcGisMapServerImageryProvider.html) クラスを使用して、ベースマップ スタイル サービスに認証済み要求を行います。

1. `SATTELITE` ベースマップ タイプを使用して新しい [`ArcGisMapServerImageryProvider`](https://cesium.com/learn/ion-sdk/ref-doc/ArcGisMapServerImageryProvider.html) クラスを作成します。`SATTELITE` ベースマップ タイプは、`ArcGIS:World Imagery` マップ タイル サービスにアクセスします。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>
    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;

      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
      // fromBasemapType メソッドを利用して ArcGIS のベースマップを呼び出し
      const arcGisImagery = Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE);
    
    </script>

  </body>
</html>
```

2. `CesiumContainer` に接続された [Cesium.Viewer](https://cesium.com/learn/ion-sdk/ref-doc/Viewer.html) クラスを作成します。 [Cesium.ImageryLayer.fromProviderAsync](https://cesium.com/learn/ion-sdk/ref-doc/ImageryLayer.html) メソッドで、`baseLayer` プロパティを設定します。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>
    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;

      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
      // fromBasemapType メソッドを利用して ArcGIS のベースマップを呼び出し
      const arcGisImagery = Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE);
      // CesiumContainer に接続された Cesium.Viewer クラスを作成
      const viewer = new Cesium.Viewer("cesiumContainer", {
        // Cesium のベースマップを SATELLITE に設定
        baseLayer: Cesium.ImageryLayer.fromProviderAsync(arcGisImagery),

      });
    </script>

  </body>
</html>
```

3. オプションの追加パラメーターを設定し、[Viewer](https://cesium.com/learn/ion-sdk/ref-doc/Viewer.html) の外観を構成します。今回は、timeline、animation、geocoder コントロールを無効にし、[Cesium World Terrain](https://cesium.com/platform/cesium-ion/content/#cesium-world-terrain) を追加します。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>
    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;

      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
      // fromBasemapType メソッドを利用して ArcGIS のベースマップを呼び出し
      const arcGisImagery = Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE);
      // CesiumContainer に接続された Cesium.Viewer クラスを作成
      const viewer = new Cesium.Viewer("cesiumContainer", {
        // Cesium のベースマップを SATELLITE に設定
        baseLayer: Cesium.ImageryLayer.fromProviderAsync(arcGisImagery),
        // Viewer のオプションを設定。
        terrain: Cesium.Terrain.fromWorldTerrain(),
        timeline: false,
        animation: false,
        geocoder:false

      });
    </script>

  </body>
</html>
```

4. `viewer.camera.setView` を使用して、シーンのカメラの位置は河口湖付近に設定し、少し上から見下ろしているような視点にします。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>
    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;

      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
      // fromBasemapType メソッドを利用して ArcGIS のベースマップを呼び出し
      const arcGisImagery = Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE);
      // CesiumContainer に接続された Cesium.Viewer クラスを作成
      const viewer = new Cesium.Viewer("cesiumContainer", {
        // Cesium のベースマップを SATELLITE に設定
        baseLayer: Cesium.ImageryLayer.fromProviderAsync(arcGisImagery),
        // Viewer のオプションを設定。
        terrain: Cesium.Terrain.fromWorldTerrain(),
        timeline: false,
        animation: false,
        geocoder:false

      });
      // カメラの位置と角度を設定
      viewer.camera.setView({
        destination : Cesium.Cartesian3.fromDegrees(138.74482706645605,35.509217041554955, 3500),
        orientation : {
          heading : Cesium.Math.toRadians(180.0),
          pitch : Cesium.Math.toRadians(-10.0),
        }
      });
    </script>

  </body>
</html>
```

### 帰属表示を追加する
Esri テクノロジーを使用するすべてのアプリケーションにおいて、Esri およびデータの帰属表示を表示する必要があります。
CesiumJS は ArcGIS ベースマップ スタイル サービスに対してデータ帰属表示を自動的に行いますが、Esri 帰属表示（「Powered by Esri」）を表示するには追加の手順が必要です。

「Powered by Esri」文字列用の新しいクレジットを作成し、`showOnScreen` を `true` に設定した後、ビューアに追加します。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.137/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
    <style>
        html, body, #cesiumContainer {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
  </head>

  <body>

    <div id="cesiumContainer"></div>
    <!--script のタグを追加-->
    <script>
      // ArcGIS API キーの追加
      const accessToken = "YOUR_ACCESS_TOKEN";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = accessToken;

      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
      // fromBasemapType メソッドを利用して ArcGIS のベースマップを呼び出し
      const arcGisImagery = Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE);
      // CesiumContainer に接続された Cesium.Viewer クラスを作成
      const viewer = new Cesium.Viewer("cesiumContainer", {
        // Cesium のベースマップを SATELLITE に設定
        baseLayer: Cesium.ImageryLayer.fromProviderAsync(arcGisImagery),
        // Viewer のオプションを設定。
        terrain: Cesium.Terrain.fromWorldTerrain(),
        timeline: false,
        animation: false,
        geocoder:false

      });
      // カメラの位置と角度を設定
      viewer.camera.setView({
        destination : Cesium.Cartesian3.fromDegrees(138.74482706645605,35.509217041554955, 3500),
        orientation : {
          heading : Cesium.Math.toRadians(180.0),
          pitch : Cesium.Math.toRadians(-10.0),
        }
      });

      // Esri の帰属表示を追加する
      // 詳細はこちらをご覧ください：https://esriurl.com/attribution
      const poweredByEsri = new Cesium.Credit("Powered by <a href='https://www.esri.com/en-us/home' target='_blank'>Esri</a>", true);
      viewer.creditDisplay.addStaticCredit(poweredByEsri);
    </script>

  </body>
</html>
```

{{< callout type="info" >}}
帰属表示の要件について詳しくは、[Esri とデータの帰属表示](https://developers.arcgis.com/documentation/esri-and-data-attribution/)をご覧ください。
{{< / callout >}}

### アプリの実行
__CodePen__ で、作成したコードを実行してシーンを表示します。

表示されるシーンには、日本の富士山周辺の衛星画像が 3D で表示されています。

### 次のチュートリアル
以下のチュートリアルで追加の位置情報サービスの使用方法を学びましょう(英語ページ)。

- [ベース レイヤーの変更](https://developers.arcgis.com/cesiumjs/scenes/satellite-basemap-tiles/change-the-base-layer/)
- [フィーチャの追加(GeoJSON)](https://developers.arcgis.com/cesiumjs/layers/add-features-as-geojson/)
- [3D オブジェクト シーン レイヤーの追加](https://developers.arcgis.com/cesiumjs/layers/add-3d-objects/)