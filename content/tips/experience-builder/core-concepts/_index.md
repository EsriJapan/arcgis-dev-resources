+++
title = "コア コンセプト"
description = "ArcGIS Experience Builder (Developer Edition) のコア コンセプトについて紹介します。"
weight = 2
alwaysopen = false
+++

出典：ArcGIS Experience Builder - Guide - [Core concepts](https://developers.arcgis.com/experience-builder/guide/core-concepts/)

### はじめに

Experience Builder は、カスタム ウィジェットの作成、カスタム テーマの作成、カスタム データソース、メッセージ/アクションの作成を通じて拡張することが可能です。これらはすべて、以下のコンポーネントで構成されている`jimu` と呼ばれる Experience Builder の拡張フレームワークを使用することで可能になります。

- ArcGIS Maps SDK for JavaScript 4.x
- React + Redux フレームワーク
- Bootstrap 4 （UI用）
- HTML5

Experience Builderでウィジェットやテーマなどを開発するには、TypeScript が必要になります。TypeScript を利用するのは、次のようなメリットがあります。

- 型宣言によるエラー検出
- よりよい IDE 体験
- セルフ-ドキュメント コード
- より読みやすく、わかりやすい

Experience Builder アプリケーションは多くのパーツで構成されています。これらのコンセプトは、アプリケーションの構造を理解するのに役立ちます。

{{% children style="h5" depth="2" %}}

##### <span style="padding-left:40px">[高速モード（Express mode）](https://doc.arcgis.com/ja/experience-builder/latest/build-apps/express-mode.htm) （外部サイトに移動します）</span>