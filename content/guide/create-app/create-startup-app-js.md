+++
title = "ArcGIS Maps SDK for JavaScript"
description = "ArcGIS Maps SDK for JavaScript を用いた Web ブラウザー向け地図アプリの作成方法を紹介します。"
Weight=1
aliases = ["/create-startup-app-js/"]
+++

出典：ArcGIS Maps SDK for JavaScript - Tutorials - [Display a map](https://developers.arcgis.com/javascript/latest/tutorials/display-a-map/)

# マップを表示する

このチュートリアルでは ArcGIS Maps SDK for JavaScript を使用して、ベースマップ レイヤーを使用したマップの作成と表示方法を学びます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/create-app/create-startup-app-js.png" width="600px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで1つ以上のデータレイヤーを追加できます。マップビューを使用し、場所とズームレベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベースマップレイヤーを使用して、富士山付近を表示する地図を作成します。

このチュートリアルのマップとコードは、他の 2D チュートリアルの出発点として使用されます。

{{< callout type="info" >}}

マップとレイヤーの詳細については、[Mapping and location services](https://developers.arcgis.com/documentation/mapping-and-location-services/) ガイドの [Maps, scenes, and layers](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/) を参照してください。

{{< /callout >}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

- API キーにアクセスするための ArcGIS Online アカウントもしくは ArcGIS 開発者アカウント
  - アカウントをお持ちでない場合は、ArcGIS 開発者アカウントに[サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。

## ステップ

### 新しい Pen の作成
[CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピングアプリケーション用の新しい Pen を作成します。

{{% details title="より詳細に" closed="true" %}}
CodePen では、`<!doctype html></html>` タグは不要です。別のエディターを使用している場合やローカルサーバーでページを実行する場合は、開始タグと終了タグの両方を必ず追加してください。
{{% /details %}}

### 基本的なHTMLの追加
基本的なHTMLページを定義します。
  1. **CodePen** > **HTML** で、基本的なページを作成するための HTML を追加してください。 
  ```html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>ArcGIS Maps SDK for JavaScript Tutorials: Display a map</title>

  </head>

  <body>

  </body>

</html>
  ```

### CSS の追加
1. **CodePen** > **HTML** で、CSS を追加してマップをブラウザーの全幅と全高に設定します。
  ```html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>ArcGIS Maps SDK for JavaScript Tutorials: Display a map</title>
    <!-- マップをブラウザー上に表示する領域を追加 -->
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
    </style>
    <!-- 追加終了 -->

  </head>

  <body>

  </body>

</html>
  ```

### アクセス トークンの取得
このチュートリアルで使用される位置情報サービスにアクセスするには、適切な権限を持つアクセス トークンが必要です。
  1. [API キーの取得](../../get-api-key/)のチュートリアルを参照し、以下の権限を持つ API キーを作成してください。  
      * 権限
        * **Location services** > **Basemaps**
  2. **CodePen** では、esriConfig.apiKey にアクセス トークンを設定してください。
  ``` html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>ArcGIS Maps SDK for JavaScript Tutorials: Display a map</title>
    
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
    </style>
    
    <!-- アクセス トークンを追加 -->
    <!-- esriConfig 変数は、他の esri ライブラリーを追加する前に定義する必要があります。 -->
    <script>
      var esriConfig = {
        apiKey: "YOUR_ACCESS_TOKEN",
      };
    </script>
    <!-- 追加終了 -->
  </head>

  <body>

  </body>

</html>
  ```
  アクセス トークンを取得するその他の方法については、[Types of authentication](https://developers.arcgis.com/documentation/security-and-authentication/types-of-authentication/) を参照してください。

### リファレンスの追加
  1. `<head>` タグ内に、Map コンポーネント と Calcite Design System の `<script>` タグを追加してください。
  ``` html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>ArcGIS Maps SDK for JavaScript Tutorials: Display a map</title>
    
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
    </style>

    <!-- esriConfig 変数は、他の esri ライブラリーを追加する前に定義する必要があります。 -->
    <script>
      var esriConfig = {
        apiKey: "YOUR_ACCESS_TOKEN",
      };
    </script>

    <!-- リファレンスの追加 -->
    <!-- CDN から Caliete Design System をロード -->
    <script type="module" src="https://js.arcgis.com/calcite-components/3.3.3/calcite.esm.js"></script>

    <!-- CDN から ArcGIS Maps SDK for JavaScript をロード -->
    <script src="https://js.arcgis.com/4.34/"></script>

    <!-- CDN から Map コンポーネントをロード -->
    <script type="module" src="https://js.arcgis.com/4.34/map-components/"></script>
    <!-- 追加終了 -->
  </head>

  <body>

  </body>

</html>
  ```

### マップの追加
[マップ](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) コンポーネントを使用して、ベースマップ レイヤー、位置、ズームレベルを設定します。
  1. `<body>` タグ内に `<arcgis-map>` コンポーネントを追加し、`ベースマップ`、`中心座標`、`ズームレベル`を指定します。
  ``` html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>ArcGIS Maps SDK for JavaScript Tutorials: Display a map</title>
    
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
    </style>

    <!-- esriConfig 変数は、他の esri ライブラリーを追加する前に定義する必要があります。 -->
    <script>
      var esriConfig = {
        apiKey: "YOUR_ACCESS_TOKEN",
      };
    </script>

    <!-- CDN から Caliete Design System をロード -->
    <script type="module" src="https://js.arcgis.com/calcite-components/3.3.3/calcite.esm.js"></script>

    <!-- CDN から ArcGIS Maps SDK for JavaScript をロード -->
    <script src="https://js.arcgis.com/4.34/"></script>

    <!-- CDN から Map コンポーネントをロード -->
    <script type="module" src="https://js.arcgis.com/4.34/map-components/"></script>
  </head>

  <body>
    <!-- マップ コンポーネントをベースマップ、中心座標、ズームレベルを設定して追加 -->
    <arcgis-map basemap="arcgis/topographic" center="138.727363, 35.360626" zoom="13">

    </arcgis-map>
    <!-- 追加終了 -->
  </body>

</html>
  ```

  2. `<arcgis-map>` コンポーネント内に、`<arcgis-zoom>` コンポーネントを追加します。これにより、ユーザーはマウス ホイールを使用せずにズームインおよびズームアウトが可能になります。
  ``` html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>ArcGIS Maps SDK for JavaScript Tutorials: Display a map</title>
    
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
    </style>

    <!-- esriConfig 変数は、他の esri ライブラリーを追加する前に定義する必要があります。 -->
    <script>
      var esriConfig = {
        apiKey: "YOUR_ACCESS_TOKEN",
      };
    </script>

    <!-- CDN から Caliete Design System をロード -->
    <script type="module" src="https://js.arcgis.com/calcite-components/3.3.3/calcite.esm.js"></script>

    <!-- CDN から ArcGIS Maps SDK for JavaScript をロード -->
    <script src="https://js.arcgis.com/4.34/"></script>

    <!-- CDN から Map コンポーネントをロード -->
    <script type="module" src="https://js.arcgis.com/4.34/map-components/"></script>
  </head>

  <body>
    <arcgis-map basemap="arcgis/topographic" center="138.727363, 35.360626" zoom="13">
      <!-- ズーム コンポーネントの追加 -->
      <arcgis-zoom slot="top-left"></arcgis-zoom>
      <!-- 追加終了 -->
    </arcgis-map>
  </body>

</html>
  ```

### アプリを実行
CodePen でコードを実行してマップを表示してください。
マップには、富士山を中心とした地形ベースマップレイヤーが表示されます。  

## 次のチュートリアル
以下のチュートリアルで、追加の [SDK 機能](https://developers.arcgis.com/javascript/latest/key-features/)と [ArcGIS サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/)の使用方法を学びましょう（英語ページ）。
* [ポイント、ライン、ポリゴンを追加する](https://developers.arcgis.com/javascript/latest/tutorials/add-a-point-line-and-polygon/)
* [フィーチャ レイヤーを追加する](https://developers.arcgis.com/javascript/latest/tutorials/add-a-feature-layer/)
* [ベースマップ レイヤーを変更する](https://developers.arcgis.com/javascript/latest/tutorials/change-the-basemap-style/)
* [住所を検索する](https://developers.arcgis.com/javascript/latest/tutorials/search-for-an-address/)
* [ルートと道順を探す](https://developers.arcgis.com/javascript/latest/tutorials/find-a-route-and-directions/)

---

アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)
