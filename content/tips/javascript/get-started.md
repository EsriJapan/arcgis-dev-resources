+++
title = "開発の手順"
description = "ArcGIS Maps SDK for JavaScript の開発におけるインストールとセットアップからの手順について紹介します。"
weight = 1
aliases = ["/javascript/get-started/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Get Started](https://developers.arcgis.com/javascript/latest/get-started/)

ArcGIS Maps SDK for JavaScript には、[コア API](https://developers.arcgis.com/javascript/latest/api-reference/) と、API の機能をすぐに使用できる UI 要素にカプセル化する [Web コンポーネント](https://developer.mozilla.org/ja/docs/Web/API/Web_components) ライブラリーのセットが含まれています。アプリケーションのニーズに応じて、6 つのコンポーネント ライブラリー（[Map](https://developers.arcgis.com/javascript/latest/references/map-components/)、[Charts](https://developers.arcgis.com/javascript/latest/references/charts-components/)、[AI（ベータ版）](https://developers.arcgis.com/javascript/latest/references/ai-components/)、[Embeddable](https://developers.arcgis.com/javascript/latest/references/embeddable-components/)）、[Coding](https://developers.arcgis.com/javascript/latest/references/coding-components/)、[Common](https://developers.arcgis.com/javascript/latest/references/common-components/)のどれからでもコンポーネントを使用することができます。

SDK は、一貫性とアクセシビリティーを備えたユーザー エクスペリエンスを実現するため、Esri の [Calcite Design System](https://developers.arcgis.com/calcite-design-system/) とも統合されています。Calcite は、豊富な [Web コンポーネント](https://developers.arcgis.com/calcite-design-system/components/)、[アイコン](https://developers.arcgis.com/calcite-design-system/icons/)、[カラー スキーム](https://developers.arcgis.com/calcite-design-system/foundations/colors/)、[デザイン パターン](https://developers.arcgis.com/calcite-design-system/foundations/)を含む完全な UI ツールキットを提供します。

JavaScript Maps SDK の使用を開始する最適な方法は、目的と要件によって異なります。
- ローカル パッケージをインストールせずに、純粋な JavaScript と HTML でアプリを構築する場合 — ArcGIS CDNを使用したアプリの作成を参照
- テンプレートからプロジェクトを作成する場合 — npm を使用したアプリの作成を参照

## 前提条件
ArcGIS Maps SDK for JavaScript を使用してコンテンツ、サービス、または組織にアクセスするには、ArcGIS Location Platform アカウント、ArcGIS Online アカウント、または ArcGIS Enterprise アカウントが必要です。必要なアカウントの種類、ユーザータイプ、およびロールは、アクセスする必要があるリソースと実行したい操作によって異なります。

アカウントをお持ちでない場合は、以下のいずれかのオプションを選択してください
{{< callout >}}

ArcGIS アカウント：[ArcGIS Location Platform](https://location.arcgis.com/sign-up/) または [ArcGIS Online](https://www.esri.com/ja-jp/arcgis/products/arcgis-online/trial) アカウントが必要です。

{{< /callout >}}

## アクセス トークン
{{< callout type="important">}}
アプリケーションが認証に ArcGIS アイデンティティーのみを使用している場合は、このセクションをスキップできます。詳細については、[セキュリティと認証](../../../guide/security/)に関するドキュメントを参照してください。
{{< /callout >}}

ベースマップ、ジオコーディング、ルート検索などの ArcGIS サービスにアクセスするには、アクセス トークンが必要です。ポータルにアクセスし、特定のニーズに合わせてカスタム権限とリファラーを設定したアクセス トークンを作成してください。チュートリアルやサンプルでは、指示で必要とされる場合にアクセス トークンを含めてください。[グローバル API キー](https://developers.arcgis.com/javascript/latest/references/core/config/#Config-apiKey)を使用できるほか、特定のクラスに対してより細かい設定が可能な API キーも使用できます。

詳細については、[API キーの作成](../../../guide/get-api-key/)チュートリアルをご覧ください。

## ArcGIS CDN を使用してアプリを作成
このセクションでは手動設定について説明します。スターター プロジェクトをご希望の場合は、[CDN テンプレート](https://github.com/Esri/jsapi-resources/tree/main/templates/js-maps-sdk-cdn)をご利用ください。

JavaScript Maps SDK は、ArcGIS CDN を使用して、標準的な JavaScript および HTML アプリケーションに統合できます。このアプローチは最適化されたクラウド キャッシュを活用し、ローカル ビルドの要件を排除し、最新の SDK バージョンへの更新を容易にします。

### セットアップ
開始するには、基本的な HTML ファイルの `<head>` セクションに ArcGIS CDNの `<script>` を含めてください。アプリケーションにコア API ライブラリー、すべてのコンポーネント パッケージ、および CSS を追加するためのメインのエントリー ポイントです。 CDN は `MAJOR.MINOR` 形式で提供され、パッチ固有のバージョンは `MAJOR.MINOR.PATCH` 形式で提供されます。最新のパッチ バージョンについては[リリース ノート](https://developers.arcgis.com/javascript/latest/release-notes/#patch-fixes)を参照してください。
```html {filename = "index.html"}
<!-- CDNからArcGIS Maps SDK for JavaScriptを読み込む -->
<script type="module" src="https://js.arcgis.com/5.0/"></script>
```

### CSSの設定
カスタム CSS を追加して、コンポーネントがアプリケーションに表示されるようにします。これは、CDN から ArcGIS ライブラリーをインポートした後、`<head>` セクションの最後の項目である必要があります。
```html {filename = "index.html"}
<style>
  html,
  body {
    height: 100%;
    margin: 0;
  }
</style>  
```

[Calcite モード](https://developers.arcgis.com/calcite-design-system/core-concepts/#modes)で明るいまたは暗い[テーマ](https://developers.arcgis.com/javascript/latest/building-your-ui/#light-and-dark-modes)を選択してください。

{{< callout type="warning">}}
まだ SDK のコンポーネントに移行しておらず、[ウィジェット](https://developers.arcgis.com/javascript/latest/references/core/widgets/Widget/)を使用している場合は、今すぐ[コンポーネントへの移行](./migrate-to-components/)をご検討ください。ウィジェットを使用する場合、および／または [MapView](https://developers.arcgis.com/javascript/latest/references/core/views/MapView/) または [SceneView](https://developers.arcgis.com/javascript/latest/references/core/views/SceneView/) をプログラムで初期化する場合、コア API の CSS スタイルシートを手動で含める必要があります。

```html {filename = "index.html"}
<!-- ウィジェット用の CSS を読み込みます -->
<link rel="stylesheet" href="https://js.arcgis.com/5.0/esri/themes/light/main.css" />
```
{{< /callout >}}

### レイアウトの作成
HTMLの `<body>` 要素に 2D [Map コンポーネント](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/)または 3D [Scene コンポーネント](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/)を追加し、ArcGIS Online または ArcGIS Enterprise ポータルから [WebMap](https://developers.arcgis.com/javascript/latest/references/core/WebMap/) または [WebScene](https://developers.arcgis.com/javascript/latest/references/core/WebScene/) を使用する場合は、オプションの `item-id` を割り当てます。[Map](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/#slots) または [Scene](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/#slots) のスロットを使用して、マップやシーン内で[ズーム](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-zoom/)などの他のコンポーネントを配置します。

```html {filename = "index.html"}
<!-- ベースマップ、範囲、ズームをプログラムで設定する必要はありません -->
<!-- この情報はすべて WebMap から得られます -->
<arcgis-map item-id="02b37471d5d84cacbebcccd785460e94">
  <arcgis-zoom slot="top-left"></arcgis-zoom>
</arcgis-map>
```

WebMap または WebScene を使用していない場合、代わりに Map コンポーネントまたは Scene コンポーネントでベースマップ、中心点、ズームを手動で設定できます。

### コア API モジュールの追加
HTML の `<body>` 内かつ最下部に配置した `<script>` タグ内で、コア API を使用して[プロパティの設定](https://developers.arcgis.com/javascript/latest/programming-patterns/#attributes-and-properties)、[変更の監視](https://developers.arcgis.com/javascript/latest/watch-for-changes/)、カスタム JavaScript ロジックの追加が可能です。スクリプトは `<script type="module">` としてマークされていることを確認してください。

コア API のモジュールは、グローバルな `$arcgis.import()` メソッドを介してロードできます。このメソッドはモジュールパスまたはモジュール パスの配列を受け取り、要求されたモジュールで解決するプロミスを返します。各 API リファレンス ページの上部にモジュール識別子が表示されています。詳細は [Graphic](https://developers.arcgis.com/javascript/latest/references/core/Graphic/) を参照してください。

{{< callout type="important">}}
`$arcgis.import()` メソッドは、CDN 経由で使用する場合に限り ArcGIS Maps SDK for JavaScript 専用であり、標準的な ES モジュール システムのネイティブ機能ではありません。
{{< /callout >}}

以下のコードはマップのビューが準備完了になるまで待機します。ビューの準備が整ったら、追加の機能を追加できます。
```html {filename = "index.html"}
<script type="module">
  const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
  const viewElement = document.querySelector("arcgis-map");
  // ビューの準備が整うまで追加機能の実装を待ってください
  await viewElement.viewOnReady();

  // ...

  // Graphic を作成し、それにジオメトリーとシンボルを追加する
  const pointGraphic = new Graphic({
    geometry: point, // ポイント ジオメトリー
    symbol: markerSymbol, // ポイントを描画するためのシンボル
  });
  viewElement.graphics.add(pointGraphic);
</script>
```

## npm でアプリを作成
ローカル ビルドで作業する場合、JavaScript Maps SDK を手動でインストールするか、@arcgis/create CLI ツールを使用するか、Esri/jsapi-resources GitHub リポジトリーにアクセスしてアプリケーション テンプレートをダウンロードできます。このリポジトリーには、最初のアプリケーションを素早く構築するための様々なテンプレートが含まれています。 これらのテンプレートは、SDK のコア API、コンポーネント、OAuth、および Calcite の操作方法を示しています。

### 手動インストール
プロジェクトで Map コンポーネントを使用するには、[`@arcgis/map-components`](https://www.npmjs.com/package/@arcgis/map-components) パッケージとその依存関係をインストールしてください。
{{< tabs items="npm,yarn,pnpm" >}}

{{< tab >}}
```cmd
npm install @arcgis/map-components @arcgis/core @esri/calcite-components
```
{{< /tab >}}

{{< tab >}}

```cmd
yarn add @arcgis/map-components @arcgis/core @esri/calcite-components
```
{{< /tab >}}

{{< tab >}}

```cmd
pnpm install @arcgis/map-components @arcgis/core @esri/calcite-components
```
{{< /tab >}}

{{< /tabs >}}

フレームワークおよびツールのセットアップに関する追加の設定情報については、以下のガイド項目を参照してください。
- [Vite setup](https://developers.arcgis.com/javascript/latest/vite/)
- [Configuring TypeScript](https://developers.arcgis.com/javascript/latest/typescript/)
- [React setup](https://developers.arcgis.com/javascript/latest/react/)
- [Angular setup](https://developers.arcgis.com/javascript/latest/angular/)

### @arcgis/create の使用
[@arcgis/create](https://www.npmjs.com/package/@arcgis/create) CLI ツールは、[npm init](https://docs.npmjs.com/cli/v8/commands/npm-init) または [npx](https://docs.npmjs.com/cli/v8/commands/npx) のいずれかを使用して実行できます。開始する前に、[Node.js および npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) の最新版の長期サポート (LTS) バージョンを使用していることを確認してください。

`npm init @arcgis` または `npx @arcgis/create` を実行して、新しいマッピング アプリケーションを素早く作成します。

`npx` を使用する際、すべての対話型プロンプトをスキップする CLI オプションを渡すこともできます。
```cmd
# CLI options:
#   -n, --name <name>          Name of the project
#   -t, --template <template>  Template to use

# Vite アプリ テンプレートと SDK 統合
npx @arcgis/create -n my-arcgis-app -t vite
```

その他のテンプレートには以下が含まれます。
{{< tabs items="React,Angular,Vue,Webpack,CDN,Node" >}}

{{< tab >}}
```cmd
# SDK 統合済み React アプリテンプレート
npx @arcgis/create -n my-arcgis-app -t react
```
{{< /tab >}}

{{< tab >}}

```cmd
# SDK 統合済み Angular アプリテンプレート
npx @arcgis/create -n my-arcgis-app -t angular
```
{{< /tab >}}

{{< tab >}}

```
# SDK 統合済み Vue アプリテンプレート
npx @arcgis/create -n my-arcgis-app -t vue
```
{{< /tab >}}

{{< tab >}}

```
# SDK 統合済み Webpack アプリテンプレート
npx @arcgis/create -n my-arcgis-app -t webpack
```
{{< /tab >}}

{{< tab >}}

```
# ArcGIS CDN を使用したバニラ JavaScript の設定
npx @arcgis/create -n my-arcgis-app -t cdn
```
{{< /tab >}}

{{< tab >}}

```
# SDK のコア API のみ、UI コンポーネントは含まれません
npx @arcgis/create -n my-arcgis-app -t node
```
{{< /tab >}}

{{< /tabs >}}

## 追加情報
詳細については、以下の追加リンクをご参照ください。
- [Tutorials](https://developers.arcgis.com/javascript/latest/tutorials/)
- [Programming patterns](https://developers.arcgis.com/javascript/latest/programming-patterns/)
- [Samples](https://developers.arcgis.com/javascript/latest/sample-code/)
- [References](https://developers.arcgis.com/javascript/latest/references/)
- [MDN - JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Web Reference - Module Bundlers in JavaScript](https://webreference.com/javascript/advanced/module-bundlers/)
- [MDN - Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [MDN - Client-side tooling overview](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
- [MDN - Package management basics](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
- [MDN - Introducing a complete toolchain](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)