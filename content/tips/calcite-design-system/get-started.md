+++
title = "はじめに"
description = "Calcite Design System の使い始めの方法を紹介します。"
weight = 1
aliases = ["/calcite-desgin-sysytem/get-started/"]
+++

出典：Calcite Design System (Beta) - [Get Started](https://developers.arcgis.com/calcite-design-system/get-started/)

## はじめに

Calcite Components は、Webアプリケーションを構築するための、柔軟でフレームワークに依存しないWebコンポーネントの豊富なライブラリです。コンポーネントの説明、例、およびプロパティ、スロット、スタイル、テーマを含む API リファレンスは、[コンポーネント ドキュメント](https://developers.arcgis.com/calcite-design-system/components/)をご覧ください。Calcite Components を使い始めるには、以下の手順をご参照ください。

まず、Calcite Components を使用するには、ArcGIS アカウントが必要です。アカウントをお持ちでない場合は、無料で作成することができます。

作成方法は、[開発者アカウントの作成](https://esrijapan.github.io/arcgis-dev-resources/guide/get-dev-account/)をご覧ください。

次に、CDN（Content Delivery Network）または NPM（Node Package Manager）ライブラリを使用して、Calcite Components を読み込みます。

### CDNで利用する
Calcite Components を読み込むための最も一般的な方法は、ArcGIS CDN でホストされているバージョンを使用する方法です。コンポーネントは、HTML ドキュメントの先頭にある script および link タグを使用して読み込むことができます。
``` html
<script type="module" src="https://js.arcgis.com/calcite-components/1.0.0-beta.95/calcite.esm.js"></script>
<link rel="stylesheet" type="text/css" href="https://js.arcgis.com/calcite-components/1.0.0-beta.95/calcite.css" />
```

これらのタグを追加すると、他の HTML 要素と同様にコンポーネントを使用することができます。アプリケーションで使用されるコンポーネントのみが読み込まれます。

### NPM パッケージで利用する
Calcite Components は、[NPM パッケージ](https://www.npmjs.com/package/@esri/calcite-components)としても提供されています。使い始めるには、まずパッケージをインストールし、以下のステップに従います。また、様々なフレームワークやビルドツールを使用したサンプルは[こちら](https://github.com/Esri/calcite-components-examples)でご覧いただけます。
``` cmd
npm install @esri/calcite-components
```

#### ビルドの選択
Calcite Componentsが提供する2つのビルドから1つを選択します。

#### カスタム要素
フロントエンド フレームワークを活用する場合は、[カスタム要素](https://stenciljs.com/docs/custom-elements) の構築を推奨します。このビルドを使用するには、Calcite Components のアセットへのパスを設定する必要があります。この後のステップで説明するローカル アセットと、CDN でホストされているアセットのどちらかを使用することができます。
``` js
import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN ホスティング アセット
setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.95/assets");

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
// CDN ホスティング アセット
defineCustomElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/1.0.0-beta.95/assets"
});

// ローカル アセット
// defineCustomElements(window);
```
カスタム エレメントはウィンドウ上で定義したため、個々のコンポーネントをインポートする必要はありません。

### アセットの読み込み
calcite-icon や calcite-date-picker などの一部のコンポーネントは、特定のパスで利用可能なアセットに依存しています。前述の通り、NPM パッケージでは、ローカルパスまたは CDN でホストされているアセットへの URL を指定するオプションがあります。CDN でホストされたアセットを使用することで、ディスク上のビルド サイズを減らすことができます。

ローカルで使用するためには、ビルド ツールや NPM スクリプトを使用して、アセットをコピーする必要があります。ローカル アセットのディレクトリは、コピー処理を容易にするために、assets という名前にする必要があります。例えば、/public/calcite/assets は動作しますが、/public/calcite-assets は動作しません。

Calcite Components の[サンプル集](https://github.com/Esri/calcite-components-examples)では、様々な JavaScript フレームワークやビルド ツールでローカル アセットを使用することを実証しています。各例には、フレームワークやビルド ツール固有の説明を含む README があります。
``` cmd
cp -r node_modules/@esri/calcite-components/dist/calcite/assets/* ./public/assets/
```

### スタイルのインポート
最後に、カスケーディング スタイル シート（CSS）を読み込みます。これもフレームワークやビルド ツールに依存しますが、多くの場合、JavaScript で読み込むことができます。
``` js
import "@esri/calcite-components/dist/calcite/calcite.css";
```