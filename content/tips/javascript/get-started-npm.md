+++
title = "開発の手順（npm）"
description = "npm を使用した ArcGIS Maps SDK for JavaScript の開発におけるインストールとセットアップからの手順について紹介します。"
aliases = ["/javascript/get-started-npm/"]
weight = 3
+++

出典：ArcGIS Maps SDK for JavaScript - [Get started with npm](https://developers.arcgis.com/javascript/latest/get-started-npm/)

{{% notice note %}}

[@arcgis/map-components Vite](https://github.com/Esri/jsapi-resources/tree/main/component-samples/map-components/samples/vite) および [@arcgis/core Vite](https://github.com/Esri/jsapi-resources/tree/main/core-samples/jsapi-vite) のサンプルを使用して始めることができます。

{{% /notice %}}

ArcGIS Maps SDK for JavaScript の [@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) と [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) パッケージは、[npm](https://docs.npmjs.com/about-npm) コマンドライン インターフェイスを使用してローカルにインストールできます。

始めるには、npm と [Node.js](https://nodejs.org/) の両方をインストールします。さらに、モジュールバンドラーとローカル Web サーバーを含むクライアントサイドのビルドツール（例：[Vite.js](https://vitejs.dev/guide/)）が、アプリケーションの開発とテストに必要です。

フレームワークやトランスパイラーの使用は任意であり、特定の要件に依存します。これらのツールの基本的な動作を理解しておくことが重要です。これらの概念の紹介については、以下の[追加情報](#追加情報)セクションを参照してください。

## 依存関係の管理
npm を使用する場合、`package.json` ファイルはアプリケーションの実行とビルドに必要なパッケージの初期セットを指定します。これらの npm パッケージがインストールされると、それぞれ固有の依存関係も指定されます。

ローカル ビルド ツールを使うのが初めての場合、[package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) が[依存関係](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies)、[devDependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devdependencies)、[peerDependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependencies) とどのように連動するかを理解することが重要です。


## コンポーネント
### インストール
Map コンポーネントを使用する場合、[@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) パッケージをプロジェクトにインストールします。

```cmd
npm install @arcgis/map-components
``` 

### レイアウトの作成
`index.html` ファイルに `arcgis-map` コンポーネントを追加し、`main.js` ファイルを参照します。各コンポーネントは[カスタム要素](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)であり、HTML タグを使用してアプリケーションに追加します。これらは `<div></div>` などの他の HTML 要素と同様に機能します。

index.html
```html
<body>
   <arcgis-map item-id="e691172598f04ea8881cd2a4adaa45ba">
      <arcgis-legend position="top-right"></arcgis-legend>
   </arcgis-map>
   <script type="module" src="/main.js"></script>
</body>
``` 

### CSS の設定
[CSS](https://developers.arcgis.com/javascript/latest/get-started-npm/#configure-css) を設定し、`main.js` ファイルにインポートします。さまざまなフレームワークやモジュールバンドラーの具体例は、[jsapi-resources](https://github.com/esri/jsapi-resources?tab=readme-ov-file#samples) の GitHub リポジトリで確認できます。以下は、arcgis-map コンポーネントの Vite の例です。

index.css
```css
@import 'https://js.arcgis.com/4.31/@arcgis/core/assets/esri/themes/dark/main.css';

html,
body {
  margin: 0;
}

arcgis-map {
  display: block;
  height: 100vh;
}
```

main.js
```js
import "./index.css";
```

### コンポーネントのインポート
最後に、必要な SDK のコンポーネントを [@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) パッケージから個別にインポートします。（例：[`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/component-reference-map--docs) や `arcgis-legend`）

これにより、コンポーネントがブラウザーの [CustomElementRegistry](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) に登録されます。ブラウザーが `<arcgis-map></arcgis-map>` などのカスタム要素の HTML タグに遭遇すると、その要素のインスタンスを作成し、DOM に追加して機能を有効にします。

main.js
```js
import "./index.css";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
```

ここまでで、以下のことが可能になっています。
* プロパティの設定
* イベントのハンドリング
* カスタム JavaScript ロジックの追加
* チャート（ベータ版）など、他のコンポーネントの追加
* 最終的なアプリケーションのビルド

以下のコードスニペットでは、`document.querySelector()` を使用して `arcgis-map` コンポーネントへの参照を取得し、機能を追加しています。その後、`arcgis-map` コンポーネントの `arcgisViewReadyChange` イベントのイベントリスナーを追加します。

main.js
```js
document
  .querySelector("arcgis-map")
  .addEventListener("arcgisViewReadyChange", (event) => {
    /**
     * Get a reference to the `WebMap`
     * from the `event.detail` object.
     */
    const { map } = event.detail;
    // Add more functionality here.
  });
``` 

コンポーネントで View を使用する方法については、[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/using-view-with-components/)を参照してください。


### すべてのコンポーネントのロード
便利なパターンとして、すべてのコンポーネントを一度に登録する方法があります。これにより、実行時に個別にインポートする必要がなくなり、プロトタイピングやテストに役立ちます。

`defineCustomElements()` を使用して、アプリケーション内でコンポーネント パッケージを登録します。これにより、そのパッケージの任意のコンポーネントを個別にインポートすることなく、すぐに使用できます。パッケージのアセットの場所（ローカルまたは CDN）を `resourcesUrl` オプションで設定します。1 つのコンポーネント パッケージのアセット パスを設定しても、他のコンポーネント パッケージのアセット パスには影響しません。最高のパフォーマンスとアプリケーションのビルド サイズの削減のために、ArcGIS CDN ホストのアセットを使用することをお勧めします。

{{% notice warning %}}

すべてのコンポーネントをロードするこの方法は、プロトタイピングとテストにのみ推奨されます。最高のパフォーマンスを得るためには、コンポーネントを個別にロードしてください。

{{% /notice %}}

```js
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

// ArcGIS CDN がホストするアセットを指定
defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.31/assets",
});
``` 

## コア API
### インストール

コア API の ES モジュールを使用するには、[@arcgis/core](https://www.npmjs.com/package/@arcgis/core) パッケージをプロジェクトにインストールします。

```cmd
npm install @arcgis/core
``` 

### レイアウトの作成
HTML に div 要素を追加し、`id` を割り当てます。ここにマップが挿入されます。

index.html
```html
<div id="viewDiv"></div>
``` 

### CSS の設定
[CSS](https://developers.arcgis.com/javascript/latest/get-started-npm/#configure-css) を設定し、`main.js` ファイルにインポートします。`height`, `width`, `margin`、`padding` のプロパティを設定します。さまざまなフレームワークやモジュール バンドラーの具体例は、[jsapi-resources](https://github.com/esri/jsapi-resources?tab=readme-ov-file#samples) の GitHub リポジトリで確認できます。以下は、`@arcgis/core` を使用した Vite の例です。

index.css
```css
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
```

main.js
```js
import "./index.css";
```

### モジュール のインポート
最後に、必要な SDK のモジュールを個別にインポートします。（例：[`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) パッケージの [`@arcgis/core/Map`](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)）

main.js
```js
import "./index.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv", // reference the div id
  map: map,
  zoom: 4,
  center: [15, 65]
});
```

詳細は [Using ESM import statements](https://developers.arcgis.com/javascript/latest/programming-patterns/#using-esm-import-statements) ガイドのトピックを参照してください。


## CSS のインポート
コア API およびコンポーネント パッケージの light または dark [テーマ](https://developers.arcgis.com/javascript/latest/styling/#themes)を選択し、対応する CSS ファイルをアプリケーションに組み込みます。最適化されたクラウドキャッシュからスタイルファイルが提供され、効率的な読み込みとパフォーマンスの向上が図れる ArcGIS CDN を使用するのが最良の方法です。API のみを使用する場合は Calcite の組み込みは任意です。

index.css
```css
@import "https://js.arcgis.com/4.31/@arcgis/core/assets/esri/themes/dark/main.css";
@import "https://js.arcgis.com/calcite-components/2.13.2/calcite.css";
```

SDKは、コンポーネントやウィジェットにCalciteを使用しています。[Calcite Design System](https://developers.arcgis.com/calcite-design-system/) を使用して、独自のカスタム機能を追加することができます。このシステムには、UI キット、アイコン、カラースキーム、およびボタンやパネルなどの UI 要素を含む Web コンポーネントライブラリが含まれています。

スタイルシートのローカルコピーを使用することも可能ですが、CDN のパフォーマンス向上の利点は得られません。

index.css
```css
@import "@arcgis/core/assets/esri/themes/dark/main.css";
@import "@esri/calcite-components/dist/calcite/calcite.css";
```

この `@import url` パスを指定する方法は使用するフレーム ワークやモジュール バンドラーに依存します。MDN では [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) を使うための様々な方法について詳しく説明しています。


## アセットの利用
SDK のアセットには、スタイル、画像、Web ワーカー、WASM、およびローカライズ ファイルが含まれています。

### デフォルト アセット
ローカル ビルドを行うほとんどのユースケースでは、ArcGIS CDN から SDK のアセットを使用することをお勧めします。これらは以下の URL からデフォルトで読み込まれ、追加の設定は不要です。
- @arcgis/core: https://js.arcgis.com/4.31/@arcgis/core/assets/
- @arcgis/map-components: https://js.arcgis.com/map-components/4.31/assets
- @esri/calcite-components: https://js.arcgis.com/calcite-components/2.13.2/assets

ArcGIS CDN を使用することで、これらのアセットをローカル ビルドにバンドルする必要がなくなります。これにより、ディスク上のビルド サイズが削減され、ビルド時間が短縮される可能性があります。

### ローカル アセット
インターネットにアクセスできない環境で作業する場合など、アセットをローカルで管理する必要があるシナリオもあります。その場合、以下のディレクトリからアセットをプロジェクトにコピーする必要があります。
- @arcgis/core: /node_modules/@arcgis/core/assets
- @arcgis/map-components: /node_modules/@arcgis/map-components/dist/arcgis-map-components/assets/
- @esri/calcite-components: /node_modules/@esri/calcite-components/dist/calcite/assets/

{{% notice warning %}}

アセットのローカル コピーで作業すると、ビルドのディスク上のサイズが大きくなります。

{{% /notice %}}

これを実現する簡単な方法は、ビルド プロセス中に実行される npm スクリプトを構成することです。以下に、[`cpx2`](https://www.npmjs.com/package/cpx2) を使用してアセットを正しいプロジェクト フォルダーにコピーする Vite の例を示します。パッケージのインストールについては cpx2 のドキュメントを参照してください。その後、コンポーネント、Core API、および Calcite の package.json スクリプトにコピー コマンドを追加します。ファイルをコピーするための npm スクリプトやプラグインの使用に関するベスト プラクティスについては、フレームワークやバンドラーのドキュメントを確認してください。

package.json
```json
{
  "scripts": {
    "dev": "npm run copy:all && vite",
    "build": "npm run copy:all && vite build",
    "copy:all": "npm run copy:components && npm run copy:core",
    "copy:components": "cpx ./node_modules/@arcgis/map-components/dist/arcgis-map-components/assets/**/*.* ./public/assets",
    "copy:core": "cpx ./node_modules/@arcgis/core/assets/**/*.* ./public/assets",
    "copy:calcite": "cpx ./node_modules/@esri/calcite-components/dist/calcite/assets/**/*.* ./public/assets"
  }
}
```

コピー後の次のステップは、SDK がこれらのリソースを正しく見つけて読み込めるように、コード内のアセット パスを構成することです。このステップはローカル ビルド環境では非常に重要です。なぜなら、デフォルトのアセット パスがプロジェクトの構造と一致しない可能性があるからです。

index.js
```js
// Configure the asset path to your desired directory for components and core
import { setArcgisAssetPath as setMapAssetPath} from '@arcgis/map-components/dist/components';
import esriConfig from "@arcgis/core/config.js";

setMapAssetPath("./public/assets");
esriConfig.assetsPath = "./public/assets";
```

Calcite コンポーネントやローカル アセットの使用に関する詳細については、[Calcite's Get started](https://developers.arcgis.com/calcite-design-system/get-started/) および [SDK in a disconnected environment](https://developers.arcgis.com/javascript/latest/disconnected-environment/) のガイド トピックを参照してください。

## ESM インポート文の使用
ES モジュールの[インポート](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)文は、個々の API モジュールを読み込むために使用されます。インポート宣言には、デフォルト、ネームスペース、および名前付きの3つの形式があります。

```js
// Default import
import WebMap from "@arcgis/core/WebMap.js";

// Namespace import
import * as projection from "@arcgis/core/geometry/projection.js";
```

各モジュールのコア API リファレンス ページの上部には、デフォルトとネームスペースの どちらのインポート構文を使用するかについてのガイダンスがあります。 ほとんどのモジュールは、上記の import WebMap クラスの例に示されているように、デフォルトの import 構文を使用します。 ヘルパー関数を提供するモジュールなど、他のモジュールは、`import * as projection` の例のようなネームスペース インポートを使用します。 スタイルの好みに応じて、ネームスペースインポートの代わりに、必要なメソッドを正確に参照する名前付きインポートを使用することもできます。

```js
// Named import
import { load, project } from "@arcgis/core/geometry/projection.js";
```

変数名の競合が発生する可能性がある場合は、エイリアスを使用することもできます。例えば、いくつかのクラスが load() メソッドを使用している場合などです。

```js
// Named import using an alias
import { load as projectionLoad, project } from "@arcgis/core/geometry/projection.js";
```

デフォルト、ネームスペース、名前付きのいずれのインポートを使用しても、esbuild、rollup.js、Webpack などのモジュール バンドラーは、ツリーシェイキング（未使用のコードを削除して最小かつ最も効率的なビルドを作成するプロセス）に関して同じように扱います。

## ESM CDNの使用
ES モジュール CDN はテストとプロトタイピングのためのものであり、パフォーマンスの最適化はされていません。プロダクション アプリケーションで最高のパフォーマンスを得るには、@arcgis/core モジュールをローカルでビルドしてください。サンプルは[jsapi-resources](https://github.com/Esri/jsapi-resources/tree/main/core-samples/jsapi-esm-cdn) の GitHub リポジトリーにあります。以下は HTML と JavaScript のコード スニペットです。

```html
<link rel="stylesheet" href="https://js.arcgis.com/4.31/@arcgis/core/assets/esri/themes/light/main.css">

<script type="module">
  import Map from 'https://js.arcgis.com/4.31/@arcgis/core/Map.js';
  const map = new Map({
    basemap: "topo-vector"
  });
</script>
```

## 追加情報
追加の情報として、以下のリンクを参照してください。
* [MDN - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [MDN - Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
* [MDN - Client-side tooling overview](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
* [MDN - Package management basics](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
* [MDN - Introducing a complete toolchain](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)
