+++
title = "移行計画"
description = "ウィジェットからマップ コンポーネントへの移行計画について紹介します。"
weight = 6
aliases = ["/translation-plan/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Transition plan: widgets to components](https://developers.arcgis.com/javascript/latest/components-transition-plan/)

# 移行計画：ウィジェットからコンポーネントへ
Esri は、JavaScript Maps SDK のコア API を `<arcgis-map></arcgis-map>` のような再利用可能なカスタム HTML 要素へと拡張する、[Web コンポーネント](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)の開発に全面的に取り組んでいます。

これは、ArcGIS 製品の内部開発にも、JavaScript Maps SDK の一部として提供される[ビルド済みの UI コンポーネント](https://developers.arcgis.com/javascript/latest/components/)にも当てはまります。
現在、SDK を使用した Web アプリの構築では、コンポーネントを使用することが推奨されています。


## コンポーネントのメリット
このアーキテクチャーの転換は、フロントエンド Web 開発の生産性を最大化します。
カスタム要素は、使い慣れた（HTML、CSS、JS）プログラミング エクスペリエンスを提供し、アプリケーション フレームワークとのシームレスな統合を可能にします。
さらに、ArcGIS のエクスペリエンスを Esri 製品の Web コンポーネントとしてカプセル化しているため、実績のあるワークフローを SDK の設定によって変更が可能なコンポーネントとして提供できます（すでにリリースされている [Arcade Editor](https://developers.arcgis.com/javascript/latest/references/coding-components/arcgis-arcade-editor/) や [チャート コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/)など）。
SDK の上位レベルのコンポーネント群は、今後も継続的に拡充されていきます。


## ウィジェットからマップ コンポーネントへ
SDK が最初に開発された当時、Web コンポーネントの規格はまだ成熟しておらず、ブラウザーに広く採用されていませんでした。同時に、JavaScript の技術動向は常に変化しているため、特定の JavaScript フレームワークに積極的なコミットはしませんでした。そのため、私たちは ウィジェット アーキテクチャーを開発し、開発者が Web アプリケーションで使用できるよう、時間をかけて 60 以上のウィジェットを作成しました。
現在では、Web コンポーネントの標準がすべての主要なブラウザーでサポートされているため、（SDK の内部構造と同様に）ブラウザーの進化に合わせて技術を進化させることが可能になりました。

コンポーネントへの移行は大きく進展しており、ウィジェットとして提供されていたすべての機能はコンポーネントとしても利用可能です。最初はウィジェットを Web コンポーネントとしてラップしていましたが、現在では標準的な Web コンポーネントとして再実装が進められています。今回のリリース時点で再実装されたマップ コンポーネントは以下のとおりです。

* [Area Measurement 3D](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-area-measurement-3d/)
* [Basemap Gallery](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-gallery/)
* [Basemap Toggle](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-toggle/)
* [Bookmarks](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-bookmarks/)
* [Compass](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-compass/)
* [Coordinate Conversion](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-coordinate-conversion/)
* [Daylight](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-daylight/)
* [Direct Line Measurement 3D](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-direct-line-measurement-3d/)
* [Directional Pad](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-directional-pad/)
* [Expand](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-expand/)
* [Feature](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-feature/)
* [Features](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-features/)
* [Fullscreen](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-fullscreen/)
* [Home](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-home/)
* [Legend](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/)
* [Line Of Sight](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-line-of-sight/)
* [Locate](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-locate/)
* [Navigation Toggle](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-navigation-toggle/)
* [Popup](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-popup/)（ベータ版）
* [Print](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-print/)
* [Scale Bar](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-scale-bar/)
* [Search](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-search/)
* [Slice](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-slice/)
* [Swipe](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-swipe/)
* [Time Zone Label](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-time-zone-label/)
* [Track](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-track/)
* [Video Player](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-video-player/)
* [Weather](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-weather/)
* [Zoom](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-zoom/)

すべてのコンポーネントの再実装が完了した後、slots（スロット）機能のサポートが追加される予定です。これにより、コンポーネント内にカスタム コントロールや機能を統合できるようになります。


## SDK Web サイトと関連リソースの移行
SDK の多くのリソースは、すでにコンポーネント ベースになっています。これには、[スタートガイド](https://developers.arcgis.com/javascript/latest/get-started-overview/)、[プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)、[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)、[サンプル集](https://developers.arcgis.com/javascript/latest/sample-code/?tagged=map-components)、[コンポーネント プレイグラウンドとAPI リファレンスの統合](https://developers.arcgis.com/javascript/latest/references/map-components/)などの新しいリソースや更新されたリソースが含まれます。
しかし、SDK の Web サイトには 8 年以上取り組んできたリソースが含まれているため、完全な移行には複数のリリースが必要になります。移行期間中は、推奨されるコーディング パターンをまだ反映していない（コンポーネント ベースではない）サンプルやコード スニペットが Web サイト上に見られることがあります。リリースのたびに、着実に進展していきます。


## ウィジェット ロードマップ
最終的には、すべてのウィジェットは[非推奨](https://developers.arcgis.com/javascript/latest/faq/#what-does-it-mean-when-an-aspect-of-the-sdk-is-deprecated)となり、後に削除されます。しかし、コンポーネントへの移行にはアプリケーションの書き換えは必要ありませんが、相応の労力がかかり、計画と優先順位付けが必要であることを認識しています。多くの Esri 製品チームが同じ移行作業を行うことになります。
ウィジェットのロードマップは、この必要な労力とコンポーネント開発のロードマップの両方を考慮して策定されています。コンポーネントへの完全移行のために、以下のマイルストーンを目指しています。

* [@arcgis/map-components](https://developers.arcgis.com/javascript/latest/references/map-components/) パッケージ内のコンポーネントが、ウィジェット コードをラップしない実装に更新された時点で、対応するウィジェットは非推奨となります。非推奨は[リリース ノート](https://developers.arcgis.com/javascript/latest/release-notes/#deprecations)、API リファレンス、コンソール メッセージで通知されます。
* すべてのウィジェットは、早ければ 2026 年第 1 四半期に非推奨となります。
* すべてのウィジェットは、早ければ 2027 年第 1 四半期に SDK から削除されます。


### ビュー モデル
ウィジェットの削除に伴い、現代化された SDK 内でビュー モデル機能をどのように公開するかについて慎重に設計を進めています。詳細についてはブログ記事「[ビュー モデルの進化と JavaScript Maps SDK によるカスタム ワークフローの構築](https://www.esri.com/arcgis-blog/products/js-api-arcgis/developers/evolution-of-view-models-and-building-custom-workflows-with-javascript-maps-sdk)」をご覧ください。


## コンポーネントによるアプリ構築の詳細
コンポーネントを使ったアプリの作り方を学ぶためのリソースは以下のようにたくさんあります。

* コンポーネントへのアクセス方法（CDNとnpm）、React や Angular などのフレームワークとの統合についてのガイドを含む、[開発の手順](../../get-started/)。
* [コンポーネントの概要](../../components/)
* [チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)
* コンポーネントを使用した[サンプルコード](https://developers.arcgis.com/javascript/latest/sample-code/?tagged=map-components)
* [プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)
* Core API と Maps SDK コンポーネントの[リファレンス](https://developers.arcgis.com/javascript/latest/references/)




