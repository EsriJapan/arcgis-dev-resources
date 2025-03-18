+++
title = "移行計画"
description = "ウィジェットからマップ コンポーネントへの移行計画について紹介します。"
weight = 102
aliases = ["/translation-plan/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Transition plan: widgets to components](https://developers.arcgis.com/javascript/latest/components-transition-plan/)

# 移行計画：ウィジェットからコンポーネントへ

JavaScript Maps SDK のコア API の `<arcgis-map></arcgis-map>` などの再利用可能なカスタム HTML 要素に拡張する標準ベースの [Web コンポーネント](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)への置き換えが進められています。

これは、ArcGIS 製品の内部開発にも、JavaScript Maps SDK の一部として提供される[ビルド済みの UI コンポーネント](https://developers.arcgis.com/javascript/latest/components/)にも当てはまります。
現在、SDK を使用した Web アプリの構築では、コンポーネントを使用することが推奨されています。

### コンポーネントのメリット

このアーキテクチャーの転換は、フロントエンド Web 開発の生産性を最大化します。
カスタム 要素は、使い慣れた（HTML、CSS、JS）プログラミング エクスペリエンスを提供し、アプリケーション フレームワークとのシームレスな統合を可能にします。
さらに、ArcGIS のエクスペリエンスを Esri 製品の Web コンポーネントとしてカプセル化しているため、実績のあるワークフローを SDK の設定によって変更が可能なコンポーネントとして提供できます（すでにリリースされている [Arcade Editor](https://developers.arcgis.com/javascript/latest/references/coding-components/arcgis-arcade-editor/) や [チャート コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/)など）。
SDK の上位レベルのコンポーネント 群は、時間の経過とともに増え続ける予定です。

### ウィジェットからマップ コンポーネントへ

SDK が最初に作られたとき、Web コンポーネントの規格はまだ成熟しておらず、ブラウザーに広く採用されていませんでした。
同時に、JS の状況は常に変化しているため、特定の JS フレームワークに積極的ではありませんでした。
そのため、私たちはウィジェット アーキテクチャーを開発し、開発者が Web アプリケーションで使用できるよう、時間をかけて 60 以上のウィジェットを作成しました。
Web コンポーネントの標準がすべての主要なブラウザーでサポートされるようになった今、（SDK の多くの内部でそうしているように）私たちはブラウザーとともに技術を進化させることができます。

移行の過程によってコンポーネントは非常に進歩しました。
実際、ウィジェットとして利用可能なすべての機能は、コンポーネントとしても利用可能です。
当初、ウィジェットは Web コンポーネントとしてラップされていましたが、時間の経過とともに、ウィジェットは標準の Web コンポーネントとして再実装されるようになりました。
バージョン 4.32 でこの移行が完了したコンポーネントの一覧は、[4.32 リリースノート](https://developers.arcgis.com/javascript/latest/4.32/#map-components)を参照してください。
コンポーネントの再実装が完了したら、スロットのサポートを追加します。これにより、コンポーネントのエクスペリエンス内にカスタム コントロールや機能を統合できるようになります。

### SDK Web サイトと関連リソースの移行

SDK の多くのリソースは、すでにコンポーネント ベースになっています。
これには、[スタートガイド](https://developers.arcgis.com/javascript/latest/get-started-overview/)、[プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)、[チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)、[サンプル集](https://developers.arcgis.com/javascript/latest/sample-code/?tagged=map-components)、[コンポーネント プレイグラウンドとAPI リファレンスの統合](https://developers.arcgis.com/javascript/latest/references/map-components/)などの新しいリソースや更新されたリソースが含まれます。
しかし、SDK の Web サイトには 8 年以上取り組んできたリソースが含まれているため、完全な移行には複数のリリースが必要になります。
移行期間中は、推奨されるコーディング パターンをまだ反映していない（コンポーネント ベースではない）サンプルやコード スニペットが Web サイト全体に表示されます。
リリースのたびに、注目すべき進歩がもたらされるでしょう。


### ウィジェット ロードマップ

最終的には、すべてのウィジェットは非推奨となり、後に削除されます。
しかし、コンポーネントへの移行にはアプリケーションの書き換えは必要ありませんが、相応の労力がかかり、計画と優先順位付けが必要であることを認識しています。
多くの Esri 製品チームが同じ移行作業を行うことになります。ウィジェットのロードマップは、コンポーネント開発のロードマップと同様に、この必要な作業を織り込んでいます。
コンポーネントへの完全移行のために、以下のマイルストーンが目標とされています。

- `@arcgis/map-components` パッケージのコンポーネントが実装を更新してウィジェットのコードをラップしなくなると、同等のウィジェットは非推奨となります。
非推奨は、API リファレンス、サンプル コード、およびコンソール メッセージで通知されます。

    - 4.32 では、[Basemap Gallery](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-gallery/)、[Basemap Toggle](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-toggle/)、[Compass](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-compass/)、[Directional Pad](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-directional-pad/)、[Fullscreen](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-fullscreen/)、[Home](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-home/)、[Locate](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-locate/)、[Navigation Toggle](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-navigation-toggle/)、[Scale Bar](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-scale-bar/)、[Swipe](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-swipe/)、[Track](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-track/)、[Zoom](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-zoom/) の 12 のマップコンポーネントに適用されます。

- すべてのウィジェットは、早ければ 2026 年第 1 四半期に非推奨となります。
- すべてのウィジェットは、早ければ 2027 年第 1 四半期に SDK から削除されます。

### コンポーネントによるアプリ構築の詳細

コンポーネントを使ったアプリの作り方を学ぶためのリソースは以下のようにたくさんあります。

- コンポーネントへのアクセス方法（CDNとnpm）、React や Angular などのフレームワークとの統合についてのガイドを含む、[スタートアップのためのリソース](https://developers.arcgis.com/javascript/latest/get-started-overview/)。

- [コンポーネントの概要](https://developers.arcgis.com/javascript/latest/components/)

- [チュートリアル](https://developers.arcgis.com/javascript/latest/tutorials/)

- コンポーネントを使用した[サンプルコード](https://developers.arcgis.com/javascript/latest/sample-code/?tagged=map-components)

- [プログラミング パターン](https://developers.arcgis.com/javascript/latest/programming-patterns/)

- Core API と Maps SDK コンポーネントの[リファレンス](https://developers.arcgis.com/javascript/latest/references/)



