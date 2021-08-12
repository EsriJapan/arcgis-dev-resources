+++
title = "ウィジェット開発のスタート"
description = "ウィジェット開発に使用しているライブラリから開発に必要な概要までを紹介します。"
weight = 5
aliases = ["/getting-started-widget/"]
+++

出典：ArcGIS Experience Builder - Guide - [Getting started with widget development](https://developers.arcgis.com/experience-builder/guide/getting-started-widget/)


ArcGIS Experience Builder は、React と ArcGIS API for JavaScript を使用して構築されています。これにより、特定のワークフローに合わせて、カスタム ウィジェットを作成することができます。独自のウィジェットを作成するには、以下の基本的な理解が必要となります。

- [TypeScript](https://www.typescriptlang.org/) は、JavaScript のスーパーセットです。TypeScript は、ウィジェットの開発に使用される言語です。
- [React](https://reactjs.org/) は、ユーザーインターフェースを作成するための JavaScript ライブラリです。React は DOM を抽象化したもので、アプリケーションや UI を様々な状態で考え、それらの状態をレンダリングすることで、UI の一貫性を保つことを容易にしています。
- [JSX](https://reactjs.org/docs/introducing-jsx.html) は JavaScript の拡張構文で、React を通じてウィジェットの UI のあるべき姿を記述することができます。
- Jimu は、Experience Builder がウィジェットを作成する際に使用する JavaScript ライブラリです。

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

## 基本的な考え方
Experience Builder 開発が初めての方で、基本的な考え方を理解したい方は、以下をチェックしてください。

- [コア コンセプト](../../core-concepts)
- コードを見て学ぶのが一番良い場合は、[リポジトリ](https://github.com/esri/arcgis-experience-builder-sdk-resources)からクローンして、[サンプル](https://developers.arcgis.com/experience-builder/sample-code/)を参照してください。

