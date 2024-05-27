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
Experience Builder は、インストール用の ZIP ファイルとして提供されています。詳細については、[インストールガイド](../../install-guide)を参照してください。

## ウィジェット
ウィジェットは、Experience Builder で設定可能で共有可能な機能群です。基本的に、ウィジェットは jimu フレームワークによってこれらの共通のプロパティが設定された React コンポーネントです。

- ウィジェットの設定 (id、label、configなど)
- state や isClassLoaded などを含むウィジェットのランタイム情報
- ローカル言語の文字列
- データソースのインスタンスとステータス情報
- URL パラメータ情報

必要最小限のファイルですぐに始めるには、`your-extensions\widgets` フォルダ内の `simple widget` を参照してください。

ウィジェット開発の詳細については、[ウィジェットの実装](../extend-base-widget)について学習してください。

## ウィジェットの配置場所
カスタム ウィジェットは Experience Builder の Web 拡張機能リポジトリに配置されます。Web 拡張機能リポジトリは、`client` フォルダー内のフォルダーで下のコンテンツを含む `manifest.json` ファイルが格納されています。

```json
{
  "name": "my-web-extension-repo",
  "type": "exb-web-extension-repo",
  "description": "This is a sample extension repository.",
  "copyright": "",
  "license": ""
}
```

Experience Builder (Developer Edition) には、`client/your-extensions` にサンプルの Web 拡張機能リポジトリが付属しています。このリポジトリを使用することも、独自のリポジトリを作成することもできます。Git のようなソース コード リポジトリ システムを使用する場合は、独自のものを使用した方がうまくいく場合があります。独自に作成する場合、Jimu モジュールの型宣言がないなど、コード エディター上でエラーが表示されることがあります。これを修正するには、`tsconfig.json` ファイル内の `include` 配列に、Web 拡張機能リポジトリのフォルダーを次のように追加します。

```json
{
  "include": [
    "dist/widgets",
    "your-extensions",
    "types",
    "jimu-core/lib/types",
    /** Web 拡張機能リポジトリのフォルダー名を追加します **/
    "my-web-extension-repo"
  ],
}
```

widget フォルダー内では、有効なウィジェットには manifest.json ファイルとその他の必須ファイルが含まれている必要があります。



## ウィジェット ファイル
Web 拡張機能リポジトリのルート フォルダーには、`widgets` と `themes` の 2 つのフォルダーがあります。カスタム ウィジェットを作成するには、`widgets` フォルダー内にカスタム ウィジェットの名前で新しいフォルダーを作成してください。カスタム ウィジェットのすべてのファイルは、この新しいフォルダーに配置されます。

```txt
- my-web-extension-repo/
    - manifest.json
    - themes/
    - widgets/
        - my-custom-widget/
```

- `manifest.json` ファイルの詳細については、[ウィジェット manifest](https://esrijapan.github.io/arcgis-dev-resources/tips/experience-builder/widget-development/widget-manifest/) を参照してください。
- その他の必要なファイルや一般的なウィジェット開発の詳細については、[ウィジェットの実装](https://esrijapan.github.io/arcgis-dev-resources/tips/experience-builder/widget-development/extend-base-widget/) を参照してください。
- 必要最小限のファイルですぐに始めるには、`your-extensions/widgets` フォルダーにある、`simple` ウィジェットを参照してください。

## 基本的な考え方
Experience Builder 開発が初めての方で、基本的な考え方を理解したい方は、以下をチェックしてください。

- [コア コンセプト](../../core-concepts)
- コードを見て学ぶのが一番良い場合は、[リポジトリ](https://github.com/esri/arcgis-experience-builder-sdk-resources)からクローンして、[サンプル](https://developers.arcgis.com/experience-builder/sample-code/)を参照してください。

