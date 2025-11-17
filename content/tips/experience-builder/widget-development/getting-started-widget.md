+++
title = "ウィジェット開発のスタート"
description = "ウィジェット開発に使用しているライブラリから開発に必要な概要までを紹介します。"
weight = 5
aliases = ["/getting-started-widget/"]
+++

出典：ArcGIS Experience Builder - Guide - [Getting started with widget development](https://developers.arcgis.com/experience-builder/guide/getting-started-widget/)


ArcGIS Experience Builder は、React と ArcGIS Maps SDK for JavaScript を使用して構築されています。これにより、特定のワークフローに合わせて、カスタム ウィジェットを作成することができます。独自のウィジェットを作成するには、以下の基本的な理解が必要となります。

- [TypeScript](https://www.typescriptlang.org/) は、JavaScript のスーパーセットです。TypeScript は、ウィジェットの開発に使用される言語です。
- [React](https://reactjs.org/) は、ユーザーインターフェースを作成するための JavaScript ライブラリです。React は DOM を抽象化したもので、アプリケーションや UI を様々な状態で考え、それらの状態をレンダリングすることで、UI の一貫性を保つことを容易にしています。
- [JSX](https://reactjs.org/docs/introducing-jsx.html) は JavaScript の拡張構文で、React を通じてウィジェットの UI のあるべき姿を記述することができます。
- [Jimu](https://developers.arcgis.com/experience-builder/api-reference/) は、Experience Builder がウィジェットを作成する際に使用する JavaScript ライブラリです。

## インストール
Experience Builder は、インストール用の ZIP ファイルとして提供されています。詳細については、[インストール ガイド](../../install-guide)を参照してください。

## ウィジェット開発環境のセットアップ
カスタム ウィジェットの開発には、使い慣れた IDE やテキスト エディタを使うことができます。[Visual Studio Code](https://code.visualstudio.com/) は、デフォルトで TypeScript に対応しているため、良い選択肢です。

構築したカスタム ウィジェットは ArcGIS Experience Builder の `client` フォルダー内のディレクトリに配置されます。Visual Studio Code で `client` フォルダーをプロジェクトとして開きます。

1. [ファイル] メニューをクリックします。
2. [フォルダーを開く] をクリックします。
3. Experience Builder の初回起動時に展開した Experience Builder フォルダー内の `client` フォルダーを参照します。

これにより、`client` フォルダー内のすべてのファイル（カスタム ウィジェットのファイルを含む）が左側のエクスプローラー タブで利用できるようになります。また Visual Studio Code は Experience Builder ライブラリの TypeScript 定義について `client` フォルダーのコンテンツ全体をスキャンし、カスタム ウィジェットの作成中に TypeScript の検証とオート コンプリートが有効になります。

## Visual Studio Code
Visual Studio Code をテキスト エディタとして使用している場合、テキスト エディタに機能を追加するために使用できる、[拡張機能のマーケット プレイス](https://code.visualstudio.com/docs/editor/extension-gallery)が用意されています。ArcGIS Experience Builder のカスタム ウィジェットの開発では、インストールする React 拡張機能に加えて、これらの拡張機能が推奨されます (必須ではありません)。
- [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)：ワークスペースにある定義に基づいて、HTML の class 属性の CSS クラス名を補完します。
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)：スタイル付きコンポーネントの強調表示します。
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)：ESLint を Visual Studio Code に統合します。

## ウィジェット
ウィジェットは、Experience Builder で設定可能で共有可能な機能群です。基本的に、ウィジェットは jimu フレームワークによってこれらの共通のプロパティが設定された React コンポーネントです。

- ウィジェットの設定 (id、label、configなど)
- state や isClassLoaded などを含むウィジェットのランタイム情報
- ローカル言語の文字列
- データソースのインスタンスとステータス情報
- URL パラメータ情報

## ウィジェットの配置場所
カスタム ウィジェットは Experience Builder の Web 拡張機能リポジトリーに配置されます。Web 拡張機能リポジトリーは、`client` フォルダー内のフォルダーで下のコンテンツを含む `manifest.json` ファイルが格納されています。

```json
{
  "name": "my-web-extension-repo",
  "type": "exb-web-extension-repo",
  "description": "This is a sample extension repository.",
  "copyright": "",
  "license": ""
}
```

Experience Builder (Developer Edition) には、`client/your-extensions` にサンプルの Web 拡張機能リポジトリーが付属しています。このリポジトリーを使用することも、独自のリポジトリーを作成することもできます。Git のようなソース コード リポジトリー システムを使用する場合は、独自のものを使用した方がうまくいく場合があります。独自に作成する場合、Jimu モジュールの型宣言がないなど、コード エディター上でエラーが表示されることがあります。これを修正するには、`tsconfig.json` ファイル内の `include` 配列に、Web 拡張機能リポジトリーのフォルダーを次のように追加します。

```json
{
  "include": [
    "dist/widgets",
    "your-extensions",
    "types",
    "jimu-core/lib/types",
    /** Web 拡張機能リポジトリーのフォルダー名を追加します **/
    "my-web-extension-repo"
  ],
}
```

## ウィジェット ファイル
Web 拡張機能リポジトリーのルート フォルダーには、`widgets` と `themes` の 2 つのフォルダーがあります。カスタム ウィジェットを作成するには、`widgets` フォルダー内にカスタム ウィジェットの名前で新しいフォルダーを作成してください。カスタム ウィジェットのすべてのファイルは、この新しいフォルダーに配置されます。

```txt
- my-web-extension-repo/
    - manifest.json
    - themes/
    - widgets/
        - my-custom-widget/
```

ウィジェット フォルダー内には、有効なウィジェットとして、manifest.json とその他の必要なファイルが含まれている必要があります。

- `manifest.json` ファイルの詳細については、[ウィジェット manifest](https://esrijapan.github.io/arcgis-dev-resources/tips/experience-builder/widget-development/widget-manifest/) を参照してください。
- その他の必要なファイルや一般的なウィジェット開発の詳細については、[ウィジェットの実装](https://esrijapan.github.io/arcgis-dev-resources/tips/experience-builder/widget-development/extend-base-widget/) を参照してください。
- 必要最小限のファイルですぐに始めるには、`your-extensions/widgets` フォルダーにある、`simple` ウィジェットを参照してください。

## 基本的な考え方
Experience Builder 開発が初めての方で、基本的な考え方を理解したい方は、以下をチェックしてください。

- [コア コンセプト](../../core-concepts)
- コードを見て学ぶのが一番良い場合は、[リポジトリー](https://github.com/esri/arcgis-experience-builder-sdk-resources)からクローンして、[サンプル](https://developers.arcgis.com/experience-builder/sample-code/)を参照してください。

