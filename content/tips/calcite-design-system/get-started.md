+++
title = "はじめに"
description = "次の手順に従って、すぐに Calcite Components を使い始めることができます。"
weight = 1
aliases = ["/calcite-desgin-sysytem/get-started/"]
+++

出典：Calcite Design System - [Get Started](https://developers.arcgis.com/calcite-design-system/get-started/)

## はじめに
Calcite Components は、Web アプリケーションを構築するための、柔軟でフレームワークに依存しない Web コンポーネントの豊富なライブラリです。[Web コンセプトのページ](https://developers.arcgis.com/calcite-design-system/core-concepts/) では、Calcite Design System の構成要素について説明しています。

例題、プロパティ、スロット、スタイル、イベント、モードなどの API リファレンスについては、[コンポーネント ドキュメント](https://developers.arcgis.com/calcite-design-system/components/)をご覧ください。以下の手順で、Calcite Components を使い始めることができます。

まず、Calcite Components を使用するには、ArcGIS アカウントが必要です。アカウントをお持ちでない場合は、無料で作成することができます。

作成方法は、[開発者アカウントの作成](https://esrijapan.github.io/arcgis-dev-resources/guide/get-dev-account/)をご覧ください。

次に、CDN（Content Delivery Network）または NPM（Node Package Manager）ライブラリを使用して、Calcite Components を読み込みます。

### CDN で利用する
Calcite Components を読み込むための最も一般的な方法は、ArcGIS CDN でホストされているバージョンを使用する方法です。コンポーネントは、HTML ドキュメントの先頭にある script および link タグを使用して読み込むことができます。
``` html
<script type="module" src="https://js.arcgis.com/calcite-components/1.11.0/calcite.esm.js"></script>
<link rel="stylesheet" type="text/css" href="https://js.arcgis.com/calcite-components/1.11.0/calcite.css" />
```

これらのタグを追加すると、他の HTML 要素と同様にコンポーネントを使用することができます。アプリケーションで使用されるコンポーネントのみが読み込まれます。

### NPM パッケージで利用する
Calcite Components は、[NPM パッケージ](https://www.npmjs.com/package/@esri/calcite-components)としても提供されています。使い始めるには、まずパッケージをインストールし、以下のステップに従います。また、様々なフレームワークやビルドツールを使用したサンプルは[こちら](https://github.com/Esri/calcite-components-examples)でご覧いただけます。
``` cmd
npm install @esri/calcite-components
```

#### アセットの読み込み
`calcite-icon` や `calcite-date-picker` のような幾つかのコンポーネントは、特定のパスで利用可能なアセットに依存しています。前述したように NPM パッケージでは、ローカルパスか CDN でホストされているアセットの URL を提供するオプションがあります。CDN でホストされているアセットを使うことで、ディスクのビルドサイズを減らすことができます。

ローカルでアセットを使用するには、ビルドツールや NPM スクリプトを使用してコピーする必要があります。ローカル アセットのディレクトリは `assets` という名前にする必要があります。例えば、`/public/calcite/assets` は動作しますが、`/public/calcite-assets` は動作しません。

Calcite Components の[サンプル集](https://github.com/Esri/calcite-components-examples)では、様々な JavaScript フレームワークやビルド ツールでローカル アセットを使用する方法を示しています。各例には、フレームワークやビルド ツール固有の説明を含む README があります。

``` cmd
cp -r node_modules/@esri/calcite-components/dist/calcite/assets/* ./public/assets/
```

#### スタイルのインポート
最後に、カスケーディング スタイル シート（CSS）を読み込みます。これもフレームワークやビルド ツールに依存しますが、多くの場合、JavaScript で読み込むことができます。
``` js
import "@esri/calcite-components/dist/calcite/calcite.css";
```

#### ビルドの選択
最後に、Calcite Components が提供する 2 つのビルドから 1 つを選択する。

#### カスタム要素
[カスタム要素](https://stenciljs.com/docs/custom-elements) は、フロントエンド フレームワークを利用する場合に推奨されるビルドです。このビルドを使用するには、Calcite Components のアセットへのパスを設定する必要があります。次のステップで説明するローカルのアセットを使用するか、CDN でホストされているアセットを使用することができます。

``` js
import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/1.11.0/assets");

// ローカル アセット
// setAssetPath(PATH); // PATH はフレームワークによって異なります。
```
次に、カスタム要素ビルドから、使用する各コンポーネントをインポートする必要があります。これにより、ウィンドウにカスタム要素が自動的に定義されます。
``` js
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";
```

#### ディストリビューション
[ディストリビューション](https://stenciljs.com/docs/distribution) ビルドを使用する場合、ウィンドウ上でカスタム要素を定義する必要があります。また、ローカルと CDN にホストされたアセットのどちらかを選択することができます。

``` js
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
// CDN hosted assets
defineCustomElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/1.11.0/assets"
});

// Local assets
// defineCustomElements (window);
``` 

カスタム要素をウィンドウ上で定義したので、個々のコンポーネントをインポートする必要はありません。
