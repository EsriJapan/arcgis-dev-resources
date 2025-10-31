+++
title = "開発の手順"
description = "ArcGIS Maps SDK for JavaScript の開発におけるインストールとセットアップからの手順について紹介します。"
weight = 1
aliases = ["/javascript/get-started/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Get Started](https://developers.arcgis.com/javascript/latest/get-started/)

ArcGIS Maps SDK for JavaScript には、[コア API](https://developers.arcgis.com/javascript/latest/api-reference/) と、API の機能をすぐに使用できる UI 要素にカプセル化する [Web コンポーネント](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) ライブラリーのセットが含まれています。アプリケーションのニーズに応じて、4 つのコンポーネント ライブラリー（[Map](https://developers.arcgis.com/javascript/latest/references/map-components/)、[Coding](https://developers.arcgis.com/javascript/latest/references/coding-components/)、[Charts](https://developers.arcgis.com/javascript/latest/references/charts-components/)、[Embeddable](https://developers.arcgis.com/javascript/latest/references/embeddable-components/)）のどれからでもコンポーネントを使用することができます。また、SDK は Esri の [Calcite Design System](https://developers.arcgis.com/calcite-design-system/) と統合され、一貫性のある利用しやすいユーザー エクスペリエンスを提供します。Calcite は、[Web コンポーネント](https://developers.arcgis.com/calcite-design-system/components/)、[アイコン](https://developers.arcgis.com/calcite-design-system/icons/)、[配色](https://developers.arcgis.com/calcite-design-system/foundations/colors/)、[デザイン パターン](https://developers.arcgis.com/calcite-design-system/foundations/)の豊富なライブラリーを含む、完全な UI ツールキットを提供します。

JavaScript Maps SDK の使い始めは、目的や要件によって異なります。ローカル パッケージをインストールせずにバニラ JavaScript と HTML アプリを構築したい場合は、CDN を利用することができます。より構造化された、またはスケーラブルな Web アプリケーション、特にフロントエンド フレームワークやビルド ツールを使用する場合は、[npm](https://developers.arcgis.com/javascript/latest/get-started/#npm) で SDK をインストールすることを検討してください。

{{% notice tip %}}

コード例：React、Angular、Vite など、様々なサンプルについては [Esri/jsapi-resources](https://github.com/Esri/jsapi-resources/tree/main/component-samples) のリポジトリーを参照してください。

{{% /notice %}}

## CDN
JavaScript Maps SDK は、ArcGIS CDN を使用して、バニラ JavaScript および HTML アプリケーションに簡単に統合できます。このアプローチでは、最適化されたクラウド キャッシングを活用することで、ローカル ビルドの必要性をなくし、SDK の最新バージョンへの更新を容易にします。

### セットアップ
はじめに、基本的な HTML ファイルの `<head>` セクションに、必要なライブラリー スクリプトと CSS リンク タグを以下に示す順番ですべて含めます。  
index.html
```html
<!-- Calcite Design System のロード -->
<script type="module" src="https://js.arcgis.com/calcite-components/3.3.3/calcite.esm.js"></script>

<!-- ArcGIS Maps SDK for JavaScript コア API のロード -->
<script src="https://js.arcgis.com/4.34/"></script>

<!-- ArcGIS Maps SDK for JavaScript のマップ コンポーネントおよびその他のコンポーネントのロード -->
<script type="module" src="https://js.arcgis.com/4.34/map-components/"></script>
```

{{% notice warning %}}

まだコンポーネントに移行しておらず、[ウィジェット](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html)を使用している場合は、[コンポーネントへの移行](https://developers.arcgis.com/javascript/latest/components-transition-plan/)をご検討ください。ウィジェットの使用や、プログラムによる新しい [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)/[SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html) の初期化には、引き続きコア API スタイルシートが必要です。

index.html
```html
<link rel="stylesheet" href="https://js.arcgis.com/4.34/esri/themes/light/main.css" />
```
{{% /notice %}}

### CSS の設定
カスタム CSS を追加して、コンポーネントがアプリケーションで表示されるようにします。これは、CDN から ArcGIS スタイルシートとライブラリーをインポートした後、`<head>` セクションの最後の項目にする必要があります。


```html
<style>
  html,
  body {
    height: 100%;
    margin: 0;
  }
</style>
```
[Calcite モード](https://developers.arcgis.com/calcite-design-system/core-concepts/#modes)でライトまたはダークの[テーマ](https://developers.arcgis.com/javascript/latest/building-your-ui/#light-and-dark-modes)を選択してください。

### レイアウトの作成
2D [マップ コンポーネント](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) (または [3D シーン コンポーネント](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-scene/)) を HTML の `<body>` に追加し、ArcGIS Online または ArcGIS Enterprise ポータルの [WebMap](https://developers.arcgis.com/javascript/latest/api-reference/esri-WebMap.html) を使用している場合は、オプションの `item-id` を割り当てます。[マップ](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/#slots)または[シーン](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-scene/#slots)のスロットを使用して、マップやシーン内で[ズーム](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-zoom/)などの他のコンポーネントを配置します。

詳細については、[Programming Patterns](https://developers.arcgis.com/javascript/latest/programming-patterns/#configure-map-and-scene-components)、チュートリアル [Display a web map](https://developers.arcgis.com/javascript/latest/tutorials/display-a-web-map/)、およびサンプル [Create a 2D map](https://developers.arcgis.com/javascript/latest/sample-code/intro-map-components/) を参照してください。

```html
<!-- ベースマップ、範囲、ズームレベルをプログラムで設定する必要はありません -->
<!-- この情報はすべて WebMap から得られています -->
<arcgis-map item-id="02b37471d5d84cacbebcccd785460e94">
  <arcgis-zoom slot="top-left"></arcgis-zoom>
</arcgis-map>
```

次に、HTML の `<body>` の下にある `<script>` タグで、コア API を使用して[プロパティを設定](https://developers.arcgis.com/javascript/latest/programming-patterns/#attributes-and-properties)や、[変更を監視](https://developers.arcgis.com/javascript/latest/watch-for-changes/)、カスタム JavaScript ロジックを追加することができます。スクリプトが `<script type="module">` としてマークされていることを確認してください。

コア API からのモジュールは、グローバルな `$arcgis.import()` メソッドで読み込むことができます。このメソッドは、モジュール パスまたはモジュール パスの配列を受け取り、要求されたモジュールを解決するプロミスを返します。モジュール識別子は、各 API リファレンス ページの上部にあります。 参考までに [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) をご覧ください。

{{% notice note %}}

`$arcgis.import()` メソッドは、CDN 経由で使用する場合の ArcGIS Maps SDK for JavaScript 専用であり、標準の ES モジュール システムのネイティブ機能ではありません。

{{% /notice %}}

以下のコードは、マップのビューの準備ができるのを待ちます。[ビュー](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html)の準備が整えば、さらに機能を追加することができます。
index.html
```html
<script type="module">
  const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
  const viewElement = document.querySelector("arcgis-map");
  // ビューの準備が整うまで追加機能の実装を待つ
  await viewElement.viewOnReady();

  // ...

  // グラフィックを作成し、それにジオメトリーとシンボルを追加する
  const pointGraphic = new Graphic({
    geometry: point, // ポイントのジオメトリー
    symbol: markerSymbol // ポイントを描画するシンボル
  })
  viewElement.graphics.add(pointGraphic);
</script>
```
## npm
[Vite](https://vitejs.dev/) のような最新のビルド ツールや、[React](https://react.dev/)、[Angular](https://angular.dev/)、[Vue](https://vuejs.org/) のような JavaScript フレームワークの場合は、[npm](https://docs.npmjs.com/about-npm) のようなパッケージ マネージャー経由で JavaScript Maps SDK をインストールすることをお勧めします。

### セットアップ
[node.js と npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) の最新の長期サポート（LTS）バージョンを使用していることを確認してください。次に、好みのビルド ツールやフレームワークの推奨テンプレートを使ってプロジェクトの大枠を作成します。モジュール バンドラーとローカル Web サーバーを含むクライアント サイド ビルド ツールである Vite には、多くの[テンプレート プロジェクト](https://vite.dev/guide/)が用意されています。

{{% notice warning %}}

Yarn Plug’n’Play (PnP) は現在サポートされていません。

{{% /notice %}}

プロジェクトでマップ コンポーネントを使用するには、[@arcgis/map-components](https://www.npmjs.com/package/@arcgis/map-components) パッケージとその依存関係をインストールします。

npm の場合
```shell
    npm install @arcgis/map-components
```

yarn の場合
```shell
    yarn add @arcgis/map-components @arcgis/core @esri/calcite-components
```

### CSS の設定
バージョン 4.34 以降、npm を使用したコンポーネントでは CSS が自動的に読み込まれます。これにはコンポーネントと Calcite 両方のスタイルシートが含まれます。

index.css
```css
html,
body {
  height: 100%;
  margin: 0;
}
```

{{% notice warning %}}

まだコンポーネントに移行しておらず、[ウィジェット](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html)を使用している場合は、[コンポーネントへの移行](https://developers.arcgis.com/javascript/latest/components-transition-plan/)をご検討ください。ウィジェットの使用や、プログラムによる新しい [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)/[SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html) の初期化には、引き続きコア API スタイルシートが必要です。

index.css
```css
@import "@arcgis/core/assets/esri/themes/light/main.css";
```
{{% /notice %}}

{{% notice tip %}}

アプリケーションをローカル環境でホストする必要がある場合、または CSS プラグインのないビルド ツールを使用している場合は、詳細について[ローカル アセット](https://developers.arcgis.com/javascript/latest/working-with-assets/#local-assets) ガイド トピックを参照してください。

{{% /notice %}}

### レイアウトの作成
Vite + vanilla JavaScript スターター プロジェクトの index.html ファイルに、2D マップ コンポーネント（または 3D シーン コンポーネント）を追加し、main.js ファイルを参照してください。各コンポーネントは、`<div></div>` のような他の HTML 要素と同様に、HTML タグを使用してアプリケーションに追加できる[カスタム要素](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)です。

```html
<body>
  <arcgis-map item-id="02b37471d5d84cacbebcccd785460e94">
    <arcgis-zoom slot="top-left"></arcgis-zoom>
  </arcgis-map>
  <script type="module" src="./main.js"></script>
</body>
```

### コンポーネントのインポート
最後に、main.js JavaScript ファイルで、マップ コンポーネントなど、必要な SDK のコンポーネントを個別にインポートします。

ブラウザーの [CustomElementRegistry](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) にコンポーネントを登録します。ブラウザーが `<arcgis-map></arcgis-map>` のようなカスタム要素の HTML タグに出会うと、要素のインスタンスを作成し、DOM に追加してその機能を有効にします。

main.js
```javascript
import "./index.css";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import Graphic from "@arcgis/core/Graphic.js";

const viewElement = document.querySelector("arcgis-map");

// ビューの準備が整うまで追加機能の実装を待つ
viewElement.addEventListener("arcgisViewReadyChange", () => {
  // ...

  // グラフィックを作成し、それにジオメトリーとシンボルを追加する
  const pointGraphic = new Graphic({
    geometry: point, // ポイントのジオメトリー
    symbol: markerSymbol // ポイントを描画するシンボル
  });
  viewElement.graphics.add(pointGraphic);
});

```

### TypeScript
TypeScriptは、実行時ではなく開発時にエラーを特定する静的型チェックを提供する強力な言語です。これにより生産性が向上し、トラブルシューティングの時間が短縮されます。TypeScript の定義は、SDK が npm を使ってローカルにインストールされたときに提供される。TypeScript を JavaScript にコンパイルするには、[`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) ファイルを作成して TypeScript コンパイラーを設定する必要がある。プロジェクトのインストール時に `tsconfig.json` ファイルが自動的に作成された場合は、すべての設定を見直してください。

コア API の TypeScript [デコレーター](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html)を使用する場合、例えば [Accessor サブクラス](https://developers.arcgis.com/javascript/latest/implementing-accessor/#create-a-simple-subclass)を作成するときやベース レイヤーを拡張するときには、後方互換性のために `useDefineForClassFields` フラグを `false` に設定する必要があるかもしれません。このフラグの詳細については、[TSConfig Reference](https://www.typescriptlang.org/tsconfig#useDefineForClassFields)を参照してください。

以下に tsconfig.json の最小例になります。
tsconfig.json
```json
{
  "$schema": "https://json.schemastore.org/tsconfig.json",
  // コンパイル対象の `.ts` ファイルの配列。`"src/**/*"` のようなグローブ パターンも使用できます。
  "include": ["src", "*.ts"],
  "compilerOptions": {
    // `true`の場合、`import x from 'xyz'` のような `import` 構文の使用を許可します。
    "esModuleInterop": true,
    // コンパイルに含めるライブラリー型定義を指定します。
    "lib": ["DOM", "DOM.Iterable", "ES2023"],
    // コンパイルに使用するモジュール システム。
    // ここでは、トップレベル await と動的インポートを可能にするため、ES モジュール（ESNext）を対象としています。
    "module": "ES2022",
    // package.json の exports 条件を尊重します。
    "moduleResolution": "Bundler",
    // JSON ファイルからのインポートを許可する
    "resolveJsonModule": true,
    // これにより、サポートされる JavaScript 機能の最小バージョンが設定されます。
    "target": "ES2023",
    // ライブラリーから読み込む .d.ts ファイルではなく、
    // 自身が記述した .ts ファイルのみをチェックすることでパフォーマンスを向上させます。
    "skipLibCheck": true,
  },
}
```

{{% notice tip %}}

詳しくは [TypeScript の Get Started ガイド](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)をご覧ください。

{{% /notice %}}

コンポーネントとコア　API　の両方を使用する方法を示す完全な例については、SDK の TypeScript テンプレート プロジェクトを参照してください。これは Vite + TypeScript テンプレートを出発点としており、JavaScript サンプルを反映していますが、型安全性を提供するために TypeScript(.ts) で記述されています。

### React
React 19 プロジェクトで JSX を使用して SDK を使用することは、通常の JavaScript と HTML のプロジェクトで SDK を使用することに似ています。主な違いは、JSX の構文と React のプログラミング パターンです。React のようなフレームワークで作業する場合、コンポーネントのライフサイクルとの統合性を高めるために、一般的にはメソッドを直接呼び出すよりもイベントを使用することが推奨されます。

index.jsx
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import Graphic from "@arcgis/core/Graphic.js";

function App() {
  const handleViewReady = (event) => {
    const viewElement = event.target;

    // ...

    // グラフィックを作成し、それにジオメトリーとシンボルを追加する
    const pointGraphic = new Graphic({
      geometry: point, // ポイントのジオメトリー
      symbol: markerSymbol // ポイントを描画するシンボル
    });

    viewElement.graphics.add(pointGraphic);
  };

  return (
    <arcgis-map item-id="02b37471d5d84cacbebcccd785460e94" onarcgisViewReadyChange={handleViewReady}>
      <arcgis-zoom slot="top-left" />
    </arcgis-map>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

コンポーネントとコア API の両方を使用する方法を示す完全な例については、[SDK の React テンプレート プロジェクト](https://github.com/Esri/jsapi-resources/tree/main/component-samples/map-components/samples/react)を参照してください。

すでに React 19 プロジェクトで TypeScript を設定しており、TSX で Web コンポーネントを使用したい場合は、メインの `.tsx` ファイルまたは Vite の [`vite-env.d.ts`](https://vite.dev/guide/env-and-mode.html#intellisense-for-typescript) ファイルの先頭に1行のコードを書くだけで可能です。これにより、イベント リスナーやプロパティなどに対する型安全性が向上します。

vite.env.d.ts
```ts
/// <reference types="@arcgis/map-components/types/react" />
```

React 18 を使用している場合は、[@arcgis/map-components-react](https://www.npmjs.com/package/@arcgis/map-components-react) パッケージを確認してください。

### Angular
SDK の Web コンポーネントは非 Angular 要素です。 これらを Angular コンポーネント内で使用するには、Angular の [`CUSTOM_ELEMENTS_SCHEMA`](https://angular.dev/api/core/CUSTOM_ELEMENTS_SCHEMA) を設定する必要があります。

app.ts
```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";

import "@arcgis/map-components/components/arcgis-map";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ここにスキーマを設定
})
export class AppComponent {
  arcgisViewReadyChange(event: CustomEvent) {
    // ビューの準備が整いました。以下の追加機能を追加してください。
  }
}
```

現在 Angular では、マップ コンポーネントの CSS はバンドルされますが、**本番ビルドでは自動的に読み込まれません**。CSS はプロジェクトのルート スタイルシートで明示的にインポートする必要があります。`src/styles.css` に以下を追加してください。

sytles.css
```css
@import "@esri/calcite-components/calcite/calcite.css";
@import "@arcgis/map-components/main.css";
@import "@arcgis/coding-components/main.css";
```

{{% notice warning %}}

一部のコンポーネントはフォント ファイル（`.woff2`）を読み込みます。これらのアセットが Angular でサポートされるようにするには、`angular.json` にローダー設定を追加してください：
`"loader": { ".woff2": "file" }`

詳細については、Angular の[ファイル拡張子ローダーのカスタマイズ](https://angular.dev/tools/cli/build-system-migration#file-extension-loader-customization) ガイドを参照してください。
{{% /notice %}}

`app.html` の HTML インテリセンスについては、[インテリセンス](https://developers.arcgis.com/javascript/latest/intellisense/#html)のドキュメントをご覧ください。Angular のようなフレームワークで作業する場合、コンポーネントのライフサイクルとの統合性を高めるために、一般的にはメソッドを直接呼び出すよりもイベントを使用することをお勧めします。

app.html
```html
<arcgis-map
  item-id="45b77c869ba14b6dbc2de43a817304a6"
  (arcgisViewReadyChange)="arcgisViewReadyChange($event)"
>
  <arcgis-zoom slot="top-left"></arcgis-zoom>
</arcgis-map>
```

[SDK の Angular テンプレート プロジェクト](https://github.com/Esri/jsapi-resources/tree/main/component-samples/map-components/samples/angular)を参照すると、両方のコンポーネントとコア API の操作方法と CSS の設定方法を示す完全なサンプルが得られます。

## アクセス トークン
{{% notice note %}}

アプリケーションで認証に ArcGIS Identities のみを使用している場合は、このセクションをスキップできます。詳しくは、[セキュリティと認証](../../../guide/security)のドキュメントを参照してください。

{{% /notice %}}

ベースマップ、ジオコーディング、ルーティングなどの ArcGIS サービスにアクセスするには、アクセス トークンが必要です。ポータルにアクセスし、特定のニーズに合わせてカスタム権限とリファラーを持つアクセス トークンを作成します。チュートリアルやサンプルの説明で必要な場合は、アクセストークンを含めてください。[グローバル API キー](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#apiKey)だけでなく、特定のクラスでより細かい API キーを使用することもできます。

## 追加情報
詳細については、以下のリンクをご参照ください。

- [ArcGIS Maps SDK for JavaScript - Tutorials](https://developers.arcgis.com/javascript/latest/tutorials/)
- [ArcGIS Maps SDK for JavaScript - Programming patterns](https://developers.arcgis.com/javascript/latest/programming-patterns/)
- [ArcGIS Maps SDK for JavaScript - Samples](https://developers.arcgis.com/javascript/latest/sample-code/)
- [ArcGIS Maps SDK for JavaScript - References](https://developers.arcgis.com/javascript/latest/references/)
- [MDN - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Web Reference - Module Bundlers in JavaScript](https://webreference.com/javascript/advanced/module-bundlers/)
- [MDN - Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [MDN - Client-side tooling overview](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
- [MDN - Package management basics](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
- [MDN - Introducing a complete toolchain](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)