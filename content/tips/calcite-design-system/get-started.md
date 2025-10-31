+++
title = "はじめに"
description = "次の手順に従って、すぐに Calcite コンポーネントを使い始めることができます。"
weight = 1
aliases = ["/calcite-desgin-sysytem/get-started/"]
+++

出典：Calcite Design System - [Get Started](https://developers.arcgis.com/calcite-design-system/get-started/)

## はじめに
Calcite コンポーネントは、Web アプリケーションを構築するための、柔軟でフレームワークに依存しない Web コンポーネントの豊富なライブラリです。[Web コンセプトのページ](https://developers.arcgis.com/calcite-design-system/core-concepts/) では、Calcite Design System の構成要素について説明しています。

例題、プロパティ、スロット、スタイル、イベント、モードなどの API リファレンスについては、[コンポーネント ドキュメント](https://developers.arcgis.com/calcite-design-system/components/)をご覧ください。以下の手順で、Calcite コンポーネントを使い始めることができます。

まず、Calcite コンポーネントを使用するには、ArcGIS アカウントが必要です。アカウントをお持ちでない場合は、無料で作成することができます。

作成方法は、[開発者アカウントの作成](https://esrijapan.github.io/arcgis-dev-resources/guide/get-dev-account/)をご覧ください。

次に、CDN（Content Delivery Network）または NPM（Node Package Manager）ライブラリを使用して、Calcite コンポーネントを読み込みます。

### CDN で利用する
Calcite コンポーネントをロードする最も一般的な方法は、ArcGIS CDN にホストされているバージョンを使用することです。コンポーネントは、HTML ドキュメントの head セクションに `<script>` タグを配置することでロードできます:

``` html
<script type="module" src="https://js.arcgis.com/calcite-components/3.3.3/calcite.esm.js"></script>
```

これらのタグを追加すると、他の HTML 要素と同様にコンポーネントを使用することができます。アプリケーションで使用されるコンポーネントのみが読み込まれます。

### NPM パッケージで利用する
Calcite コンポーネントは、[NPM パッケージ](https://www.npmjs.com/package/@esri/calcite-components)としても提供されています。使い始めるには、まずパッケージをインストールし、以下のステップに従います。また、様々なフレームワークやビルドツールを使用したサンプルは[こちら](https://github.com/Esri/calcite-design-system/tree/main/examples/components)でご覧いただけます。
``` cmd
npm install @esri/calcite-components
```

#### アセットの読み込み
一部のコンポーネント（例：`calcite-icon`、`calcite-date-picker`）は静的リソースに依存しています。デフォルトでは、リソースは CDN から自動的に配信されるため、ほとんどのケースで手動でのパス設定が不要になります。

ローカルにアセットをホストしたい場合やオフライン環境をサポートする必要がある場合は、アセットをプロジェクトのディレクトリにコピーできます。互換性を維持するため、ローカルのアセットは「`assets`」という名前のディレクトリに配置してください。

例えば、次のコマンドを使用してアセットをコピーできます。

```cmd
cp -r node_modules/@esri/calcite-components/dist/calcite/assets/* ./public/assets/
```

アセットが用意できたら、アプリケーション内でアセットのパスを設定してください

```JavaScript
import { setAssetPath } from "@esri/calcite-components";
setAssetPath("/path-to-your-assets/");
```

#### スタイルのインポート
最後に、カスケーディング スタイル シート（CSS）を読み込みます。これもフレームワークやビルド ツールに依存しますが、多くの場合、JavaScript で直接読み込むことができます。
``` js
import "@esri/calcite-components/dist/calcite/calcite.css";
```

#### ビルドの選択
Calcite Components は、異なる用途に対応するため、2 つのビルドを提供しています

#### カスタム要素
[カスタム要素](https://stenciljs.com/docs/custom-elements) は、フロントエンド フレームワークを利用する場合に推奨されるビルドです。 必要に応じて個々のコンポーネントをインポートできます。
アセットをローカルでホストする場合またはカスタム CDN を使用する場合のみ、アセットのパスを設定する必要があります。

``` js
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath("/path-to-your-assets/");
```
次に、必要なコンポーネントをインポートします。これにより、カスタム要素が自動的に定義されます。
``` js
import "@esri/calcite-components/components/calcite-button";
import "@esri/calcite-components/components/calcite-icon";
import "@esri/calcite-components/components/calcite-slider";
```

#### ディストリビューション
ディストリビューション ビルドでは、グローバルの `window` オブジェクトにカスタム要素を定義する必要があります。カスタム要素 ビルドと同様に、ローカルまたは CDN ホストされたアセットを使用するかを選択できます。

``` js
import { defineCustomElements } from "@esri/calcite-components/loader";

// CDN hosted assets (default)
defineCustomElements();

// Or, for local assets:
// defineCustomElements({ resourcesUrl: "/path-to-your-assets/" });
``` 

このアプローチでは、個々のコンポーネントをインポートする必要はありません。すべてのコンポーネントはグローバルに登録されているためです。

#### TypeScript の設定
TypeScript の設定方法については、 [TypeScript section of the Framework integration](https://developers.arcgis.com/calcite-design-system/resources/frameworks/#typescript) を参照してください。



