+++
title = "CesiumJS"
description = "CesiumJS を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=5
aliases = ["/create-startup-app-cesium/"]
+++

# シーンを表示する
このチュートリアルでは、[CesiumJS](https://developers.arcgis.com/cesiumjs/) と ベースマップ レイヤー サービスを使用して、シーンを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-cesium/create-startup-app-cesium.png" width="600px">

ArcGIS マップ タイル サービスを使用すると、CesiumJS で地図が表示できます。例えば `ArcGIS:Imagery` マップ タイル レイヤーには、世界の地形と組み合わせて使用できる、グローバルなカバレッジを持つ衛星画像が含まれています。

このチュートリアルでは、`ArcGIS:Imagery` と `Cesium World Terrain` を使用して、富士山周辺のシーンを表示します。

{{% notice note %}}

ベースマップ レイヤーの詳細については、[Mapping APIs and services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) ガイドの [Basemaps](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-layers/) と[ベースマップ](https://esrijapan.github.io/arcgis-dev-resources/guide/services/basemaps/)を参照してください。

{{% /notice %}}
## 前提条件
この機能を使うには、[ArcGIS アカウント](https://developers.arcgis.com/sign-up/)が必要です。アカウントの作成手順については「[開発者アカウントの作成](../../get-dev-account/)」を参照してください。

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

### スクリプト参照の追加
1. `<head>`タグで、CesiumJS CSS および JS ライブラリへの参照を追加します。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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

### Cesium ion アクセス トークンの取得

すべての Cesium アプリケーションは、Cesium ion を通じて提供される[アクセス トークン](https://cesium.com/learn/ion/cesium-ion-access-tokens/)を使用する必要があります。このトークンによって、アプリケーションで [Cesium World Terrain](https://cesium.com/platform/cesium-ion/content/#cesium-world-terrain) などのアセットにアクセスできるようになります。

1. Cesium ion の[ダッシュボード](https://ion.cesium.com/tokens) にアクセスし、アクセス トークンを生成し、取得します。
2. `<body>`タグ内に`<script>`タグを追加します。

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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

    </script>

  </body>
</html>
```

3. 変数 `cesiumAccessToken` を作成し、Cesium ion ダッシュボードからコピーしたアクセス トークンを格納し、`Cesium.Ion.defaultAccessToken` に設定します。
```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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
      // 取得した Cesium ion のアクセス トークンを貼り付け
       const cesiumAccessToken = "YOUR_CESIUM_ACCESS_TOKEN";
      // Cesium ion へのアクセス トークンを cesiumAccessToken に設定
       Cesium.Ion.defaultAccessToken = cesiumAccessToken;
    </script>

  </body>
</html>
```

### ArcGIS APIキーの取得

[ロケーション サービス](../../services)にアクセスするには、API キーまたは OAuth2.0 アクセス トークンが必要です。API キーの作成手順については「[API キーの取得](../../get-api-key)」を参照してください。
 
認証方法とアクセストークンの取得方法の詳細については、「[セキュリティと認証](../../security)」を参照してください。

1. [開発者ダッシュボード](https://developers.arcgis.com/dashboard/)に移動して、API キーを取得します。

2. 作成した ArcGIS API キーを変数 `apiKey` に格納し、`Cesium.ArcGisMapService.defaultAccessToken` に設定します。
{{% notice note %}}

CesiumJS で利用可能な ArcGIS サービスの詳細については、[Key features](https://developers.arcgis.com/cesiumjs/key-features/) を参照してください。

{{% /notice %}}
```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>

    <meta charset="utf-8" />
    <title>CesiumJS: Display a Scene</title>
    <!-- cesium js のライブラリと css ファイルを指定 -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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
      const apiKey = "YOUR_API_KEY";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = apiKey;

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
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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
      const apiKey = "YOUR_API_KEY";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = apiKey;

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
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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
      const apiKey = "YOUR_API_KEY";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = apiKey;

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
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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
      const apiKey = "YOUR_API_KEY";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = apiKey;

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
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
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
      const apiKey = "YOUR_API_KEY";
      // ArcGIS API キーを Cesium.ArcGisMapService.defaultAccessToken に設定 
      Cesium.ArcGisMapService.defaultAccessToken = apiKey;

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

### アプリの実行
__CodePen__ で、作成したコードを実行してシーンを表示します。

表示されるシーンには、日本の富士山周辺の衛星画像が 3D で表示されています。