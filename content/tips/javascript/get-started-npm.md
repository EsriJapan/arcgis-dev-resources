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

ArcGIS Maps SDK for JavaScript の [@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) および [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) パッケージは、npm からローカルにインストールできます。

npm を使用することに加えて、プロジェクトによってはフレームワーク、モジュール バンドラー、トランスパイラー、node.js などを含む、追加の最新のビルド ツールが必要になるかもしれません。これらのツールがどのように動作するかの基本的な点を理解している必要があります。これらの概念の詳細についてはこのページの[追加情報](#追加情報)のセクションを参照してください。

## 依存関係の管理
npm を使用する場合、`package.json` ファイルはアプリケーションの実行とビルドに必要なパッケージの初期セットを指定します。これらの npm パッケージがインストールされると、それぞれ固有の依存関係も指定されます。

ローカル ビルド ツールを使うのが初めての場合、[package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) が[依存関係](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies)、[devDependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devdependencies)、[peerDependencies](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#peerdependencies) とどのように連動するかを理解することが重要です。


## コンポーネント
Map コンポーネントを使用する場合、[@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) パッケージをプロジェクトにインストールします。

```cmd
npm install @arcgis/map-components
``` 

`index.html` ファイルに `arcgis-map` コンポーネントを追加し、`main.js` ファイルを参照します。

index.html
```html
<body>
   <arcgis-map item-id="e691172598f04ea8881cd2a4adaa45ba">
      <arcgis-legend position="top-right"></arcgis-legend>
   </arcgis-map>
   <script type="module" src="/main.js"></script>
</body>
``` 

次に、`main.js` ファイルで [CSS](https://developers.arcgis.com/javascript/latest/get-started-npm/#configure-css) を設定し、[@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) パッケージから `arcgis-map` などのコンポーネントを個別にインポートします。SDK のアセットはデフォルトでは ArcGIS CDN の ["https://js.arcgis.com/map-components/4.31/assets"](https://js.arcgis.com/map-components/4.31/assets) から読み込まれます。

main.js
```js
import "./index.css";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";

/**
 * コンポーネント パッケージのローカル アセットを使用する場合はコメントを外します
 */

// import { setArcgisAssetPath as setMapAssetPath} from '@arcgis/map-components/dist/components';
// setMapAssetPath(`${location.origin}${location.pathname}assets`);
``` 

ここまでで、以下のことが可能になっています。
* プロパティの設定
* イベントのハンドリング
* カスタム JavaScript ロジックの追加
* チャート（ベータ版）など、他のコンポーネントの追加
* 最終的なアプリケーションのビルド

以下のコード スニペットでは、機能を追加するために `arcgis-map` コンポーネントへの参照を取得しています。`document.querySelector()` を使用して、`arcgis-map` コンポーネントへの参照を取得します。次に、`arcgis-map` コンポーネントの `viewReadyChange` イベントのイベント リスナーを追加します。

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
すべてのコンポーネントを一度に登録する便利な方法もあるため、実行時にアプリケーションで使用するコンポーネントを個別にインポートする必要はありません。これはプロトタイピングやテストに便利な方法です。`defineCustomElements()` を使用して、アプリケーションの各コンポーネント パッケージを登録します。そして、`resourcesUrl` オプションで（ローカルまたは CDN の）アセットの場所を設定します。あるコンポーネント パッケージのアセット パスを設定しても、他のコンポーネント パッケージのアセット パスには影響しません。最高のパフォーマンスを実現し、アプリケーションのビルド サイズを小さくするには、ArcGIS CDN ホスト アセットを使用することをお勧めします。

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
コア API の ES モジュールを使用するには、[@arcgis/core](https://www.npmjs.com/package/@arcgis/core) パッケージをプロジェクトにインストールします。

```cmd
npm install @arcgis/core
``` 

HTML に div 要素を追加し、`id` を割り当てます。

index.html
```html
<div id="viewDiv"></div>
``` 

次に、[CSS](https://developers.arcgis.com/javascript/latest/get-started-npm/#configure-css) を設定し、[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 文を使って個々のモジュールをロードします。その後、 Map を初期化し、カスタム機能の追加を始めます。

main.js
```js
import "./index.css";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const map = new Map({
  basemap: "topo-vector"
});

const view = new MapView({
  container: "viewDiv", // div の id を参照
  map: map,
  zoom: 4,
  center: [15, 65]
});
``` 

詳細は [Using ESM import statements](https://developers.arcgis.com/javascript/latest/programming-patterns/#using-esm-import-statements) ガイドのトピックを参照してください。


## CSS の設定
Map コンポーネント パッケージの light または dark [テーマ](https://developers.arcgis.com/javascript/latest/styling/#themes)を選択し、対応する CSS ファイルをアプリケーションに組み込みます。ベスト プラクティスは ArcGIS CDN を使用することで、API のみを使用する場合は Calcite の組み込みは任意です。

index.css
```css
@import "https://js.arcgis.com/4.31/@arcgis/core/assets/esri/themes/dark/main.css";
@import "https://js.arcgis.com/calcite-components/2.13.2/calcite.css";
``` 

スタイル シートのローカル コピーの使用はオプションです。しかし、この方法では CDN を使用することによるパフォーマンス向上の利点は得られません。

index.css
```css
@import "@arcgis/core/assets/esri/themes/dark/main.css";
@import "@esri/calcite-components/dist/calcite/calcite.css";
``` 

この `@import url` パスを指定する方法は使用するフレーム ワークやモジュール バンドラーに依存します。MDN では [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) を使うための様々な方法について詳しく説明しています。


## アセットの利用
ローカル ビルドを行うほとんどのユース ケースでは、ArcGIS CDN から SDK のアセットを使用することをお勧めします。アセットには、スタイル、画像、Web ワーカー、WASM、ローカライズ ファイルが含まれます。CDN を使用する利点の 1 つは、ローカル ビルドでアセット ファイルをディスク上にバンドルする必要がないことです。代わりに、最適化されたクラウド キャッシュからファイルがダウンロードされます。

SDK のアセットをローカルで管理する必要がある場合は、`/node_modules/@arcgis/` + `packageName/assetPath` からプロジェクトにコピーし、アセットが正しく解決されるようにアセット パスを設定します。これを行う簡単な方法は、ビルド プロセス中に実行される npm スクリプトを設定することです。例えば、Mac や Windows のターミナルでは [cpx2](https://www.npmjs.com/package/cpx2) を利用できます。

{{% notice warning %}}

アセットのローカル コピーで作業すると、ビルドのディスク上のサイズが大きくなります。

{{% /notice %}}

こちらはアセットをコピーする Vite の例です。npm スクリプトやプラグインを使ったファイル コピーのベスト プラクティスについては、フレームワークやバンドラーのドキュメントを参照してください。

package.json
```json
{
  "script": {
    "dev": "npm run copy:all && vite",
    "build": "npm run copy:all && vite build",
    "copy:all": "npm run copy:components && npm run copy:core",
    "copy:components": "cpx ./node_modules/@arcgis/map-components/dist/arcgis-map-components/assets/ ./public/assets",
    "copy:core": "cpx ./node_modules/@arcgis/core/assets ./public/assets"
  }
}
``` 

index.js
```js
// コンポーネントとコア API のアセット パスを任意のディレクトリに設定
import { setArcgisAssetPath as setMapAssetPath} from '@arcgis/map-components/dist/components';
import esriConfig from "@arcgis/core/config.js";

setMapAssetPath("./public/assets");
esriConfig.assetsPath = "./public/assets";
``` 


## 追加情報
追加の情報として、以下のリンクを参照してください。
* [MDN - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [MDN - Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
* [MDN - Client-side tooling overview](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
* [MDN - Package management basics](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
* [MDN - Introducing a complete toolchain](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)
