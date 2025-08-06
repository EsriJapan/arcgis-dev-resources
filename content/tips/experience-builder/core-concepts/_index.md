+++
title = "コア コンセプト"
description = "ArcGIS Experience Builder (Developer Edition) のコア コンセプトについて紹介します。"
weight = 2
alwaysopen = false
+++

出典：ArcGIS Experience Builder - Guide - [Core concepts](https://developers.arcgis.com/experience-builder/guide/core-concepts/)


ArcGIS Experience Builder Developer Edition は、開発者がノー コード/ロー コード アプローチでカスタム Web アプリケーションを作成できる Web アプリケーション フレームワークです。 ArcGIS のサービスやデータと統合できる、インタラクティブで応答性の高いアプリケーションを構築するためのツールやコンポーネントのセットを提供します。

開発者は、カスタム ウィジェット、テーマ、およびアクションを作成して、ArcGIS Experience Builder を拡張できます。**Jimu** と呼ばれるこの拡張性フレームワークにより、開発ニーズに合ったアプリケーションを構築することができる。

## Jimu とは
[Jimu](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/) は ArcGIS Experience Builder の拡張性フレームワークで、開発者はカスタム ウィジェット、テーマ、およびアクションを作成できます。Experience Builder アプリケーションの機能を拡張するための API とツールのセットを提供します。

Experience Builder は、カスタム ウィジェットの作成、カスタム テーマの作成、カスタム データソース、メッセージ/アクションの作成を通じて拡張することが可能です。これらはすべて、以下のコンポーネントで構成されている`jimu` と呼ばれる Experience Builder の拡張フレームワークを使用することで可能になります。

Jimu フレームワークは、以下を含むいくつかの技術の上に構築されています。
- [ArcGIS Maps SDK for JavaScript 4.x](https://developers.arcgis.com/javascript/latest/) は、地図と地理空間データを統合します。
- ユーザーインターフェースの構築とアプリケーションの状態管理のための [React](https://react.dev/) と [Redux](https://react-redux.js.org/) フレームワーク
- ユーザー インターフェース コンポーネントの [Emotion](https://emotion.sh/docs/introduction)
- Web 標準に準拠した [HTML5](https://developer.mozilla.org/ja/docs/Glossary/HTML5) と [CSS3](https://developer.mozilla.org/ja/docs/Web/CSS)

## 開発
[TypeScript](https://www.typescriptlang.org/) は JavaScript のスーパーセットで、言語に静的な型付けを追加しています。ArcGIS Experience Builder でウィジェット、テーマ、その他のコンポーネントを開発するには、TypeScript を使用します。TypeScript には、次のような多くの利点があります。

- 型宣言によるエラー検出
- よりよい IDE エクスペリエンス
- セルフ-ドキュメント コード
- より読みやすく、わかりやすい

## コア コンセプト
Experience Builder のエクスペリエンスは、Web アプリケーションを作成するために連携するさまざまなコンポーネントで構成されます。これらのコア コンセプトを理解することで、Experience Builder のフレームワークを効果的にナビゲートし、開発することができます。

{{% children style="h5" depth="2" %}}

##### <span style="padding-left:40px">[高速モード（Express mode）](https://doc.arcgis.com/ja/experience-builder/latest/build-apps/express-mode.htm) （外部サイトに移動します）</span>
##### <span style="padding-left:40px">[高度な書式設定](https://doc.arcgis.com/ja/experience-builder/latest/configure-widgets/advanced-formatting.htm) （外部サイトに移動します）</span>