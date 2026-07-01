+++
title = "移行計画：ウィジェットからコンポーネントへ"
description = "ウィジェットからマップ コンポーネントへの移行計画について紹介します。"
weight = 6
aliases = ["/transition-plan/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Transition plan: widgets to components](https://developers.arcgis.com/javascript/latest/components-transition-plan/)

Esri は、ArcGIS Maps SDK for JavaScript のコア API を `<arcgis-map></arcgis-map>` のような再利用可能なカスタム HTML 要素へと拡張する、[Web コンポーネント](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)の開発に全面的に取り組んでいます。これは、ArcGIS 製品の内部開発にも、ArcGIS Maps SDK for JavaScript の一部として提供される[ビルド済みの UI コンポーネント](https://developers.arcgis.com/javascript/latest/components/)にも当てはまります。現在、SDK を使用した Web アプリの構築では、コンポーネントを使用することが推奨されています。

{{< callout >}}

**知っておくべきポイント**
- すべての新規開発ではコンポーネントを使用してください。
- ウィジェットはバージョン 5.0 以降で非推奨となっており、将来のリリースで削除される予定です。
- より詳細な移行ガイドについては[移行のヒント](../components/)をご覧ください。

{{</ callout >}}

## コンポーネントのメリット
Web コンポーネントは、SDK が推奨する UI 構築ブロックであり、その理由は次のとおりです。

- モダンなフロントエンド開発 (HTML、CSS、JavaScript) に自然に溶け込みます。
- さまざまなフレームワーク (React、Angular、Vue、Svelte など) に対応しているほか、フレームワークを塩茹しない環境でも動作します。
- プラットフォームとの親和性が高く、フレームワーク固有のラッパーではなく、標準的な DOM パターンでレイアウトを構築できます。
- Esri の内部方針と一致しており、ArcGIS 製品全体で使用されるコンポーネントと同じ標準ベースのアプローチを SDK でも採用しています。
- 設定可能な UI として、より高レベルでそのまま使える機能を提供します (例：[Arcade エディター](https://developers.arcgis.com/javascript/latest/references/coding-components/components/arcgis-arcade-editor/)や[チャート コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/))。

SDK の上位レベルのコンポーネント群は、今後も継続的に拡張されていく予定です。


## ウィジェットからマップ コンポーネントへ
SDK が最初に開発された当時、Web コンポーネントの規格はまだ成熟しておらず、ブラウザーに広く採用されていませんでした。同時に、JavaScript の技術動向は常に変化しているため、特定の JavaScript フレームワークに積極的なコミットはしませんでした。そのため、私たちは ウィジェット アーキテクチャーを開発し、開発者が Web アプリケーションで使用できるよう、時間をかけて 60 以上のウィジェットを作成しました。
現在では、Web コンポーネントの標準がすべての主要なブラウザーでサポートされているため、（SDK の内部構造と同様に）ブラウザーの進化に合わせて技術を進化させることが可能になりました。

コンポーネントへの移行は大きく進展しており、ウィジェットとして提供されていたすべての機能はコンポーネントとしても利用可能です。最初はウィジェットを Web コンポーネントとしてラップしていましたが、現在では標準的な Web コンポーネントとして再実装が進められています。今回のリリース時点で再実装されたマップ コンポーネントは以下のとおりです。

{{< callout >}}

この文脈において、
- 「**ラップされている**」とは、そのコンポーネントが既存のウィジェット実装を内部に保持していることを指します。
- 「**再実装された**」とは、そのコンポーネントがウィジェットの内部構造に依存するのではなく、ネイティブな Web コンポーネント (カスタム要素) として構築されていることを意味します。

{{</ callout >}}

* [Area Measurement 2D](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-area-measurement-2d/)
* [Area Measurement 3D](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-area-measurement-3d/)
* [Basemap Gallery](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-gallery/)
* [Basemap Toggle](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-toggle/)
* [Bookmarks](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-bookmarks/)
* [Building Explorer](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-building-explorer/)
* [Compass](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-compass/)
* [Coordinate Conversion](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-coordinate-conversion/)
* [Daylight](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-daylight/)
* [Direct Line Measurement 3D](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-direct-line-measurement-3d/)
* [Directional Pad](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-directional-pad/)
* [Distance Measurement 2D](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-distance-measurement-2d/)
* [Elevation Profile](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-elevation-profile/)
* [Expand](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-expand/)
* [Feature](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/)
* [Features](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-features/)
* [Floor Filter](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-floor-filter/)
* [Fullscreen](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-fullscreen/)
* [Grid Controls](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-grid-controls/)
* [Home](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-home/)
* [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/)
* [Line Of Sight](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-line-of-sight/)
* [Locate](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-locate/)
* [Navigation Toggle](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-navigation-toggle/)
* [Popup](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-popup/)（ベータ版）
* [Print](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-print/)
* [Scale Bar](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-scale-bar/)
* [Search](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-search/)
* [Shadow Cast](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-shadow-cast/)
* [Slice](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-slice/)
* [Swipe](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-swipe/)
* [Time Zone Label](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-time-zone-label/)
* [Track](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-track/)
* [Utility Network Trace Analysis](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-utility-network-trace-analysis/)
* [Video Player](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-video-player/)
* [Volume Measurement](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-volume-measurement/) (ベータ版)
* [Weather](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-weather/)
* [Zoom](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-zoom/)

すべてのコンポーネントの再実装が完了した後、slots（スロット）機能のサポートが追加される予定です。これにより、コンポーネント内にカスタム コントロールや機能を統合できるようになります。


## ウィジェット ロードマップ
バージョン 5.0 ですべてのウィジェットは[非推奨](https://developers.arcgis.com/javascript/latest/faq/#what-does-it-mean-when-an-aspect-of-the-sdk-is-deprecated)となり、その後削除される予定です。非推奨であることは、リリース ノート、API リファレンス、およびコンソール メッセージで示されます。
ただし、コンポーネントへの移行は、アプリケーションの全面的な書き直しを必要としない一方で、相応の作業量が伴い、計画と優先順位付けが必要であることも認識しています。多くの Esri 製品チームも同様の移行作業を進めています。

コンポーネントへの完全移行については、以下のマイルストーンを目標としています。

* すべてのウィジェットは、早ければ 2027 年第 1 四半期に SDK から削除されます。


### ビュー モデル
ウィジェットの削除に伴い、現代化された SDK 内でビュー モデル機能をどのように公開するかについて慎重に設計を進めています。詳細についてはブログ記事「[ビュー モデルの進化と JavaScript Maps SDK によるカスタム ワークフローの構築](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/evolution-of-view-models-and-building-custom-workflows-with-javascript-maps-sdk)」をご覧ください。また、今後のビュー モデルに関する具体的な計画については、「[ウィジェット ビュー モデルのロードマップ](https://developers.arcgis.com/javascript/latest/view-models/)」を確認してください。


## コンポーネントによるアプリ構築の詳細
コンポーネントを使ったアプリの作り方を学ぶためのリソースは以下のようにたくさんあります。

* コンポーネントへのアクセス方法（CDN と npm）、React や Angular などのフレームワークとの統合についてのガイドを含む、[開発の手順](../../get-started/)。
* [コンポーネントの概要](../../components/)
* [チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)
* コンポーネントを使用した[サンプルコード](https://developers.arcgis.com/javascript/latest/sample-code/?tagged=map-components)
* [プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)
* Core API と Maps SDK コンポーネントの[リファレンス](https://developers.arcgis.com/javascript/latest/references/)
