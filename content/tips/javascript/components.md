+++
title = "コンポーネント"
description = "ArcGIS Maps SDK for JavaScript コンポーネントについて紹介します。"
weight = 6
aliases = ["/javascript/components/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Components](https://developers.arcgis.com/javascript/latest/components/)

ArcGIS Maps SDK for JavaScript コンポーネントは、最小限のコードで Web アプリを構築するための事前構築された UI コンポーネントのコレクションです。

標準ベースの [Web コンポーネント](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)として構築されており、JavaScript Maps SDK のコア API を再利用可能なカスタム HTML エレメント（例：<arcgis-map></arcgis-map>）に拡張します。これらは ArcGIS CDN および [npm](https://www.npmjs.com/get-npm) で利用可能です。また、JavaScript フレームワークに依存しないように設計されているため、バニラ JavaScript やほとんどのフレームワークおよびモジュール バンドラーで構築されたアプリケーションで使用できます。

現在のリリースでは、マップ、チャート（ベータ版）、コーディング コンポーネントの3つのコンポーネントパッケージがあります。

### マップ コンポーネント
[`@arcgis/map-components`](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/welcome--docs) パッケージには、マップ コンポーネント、シーン コンポーネント、および SDK の既存のウィジェットと同等の機能を持つ他のコンポーネントが含まれています。

これらのコンポーネントは、フレームワークと統合する際に迅速に地図アプリを構築するための代替オプションです。基本的な概念を示すコード スニペットは以下の通りです。
```HTML
<arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca"></arcgis-map>
```
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/map-component.png" width="600px">

### チャート コンポーネント（ベータ版）
[`@arcgis/charts-components`](https://developers.arcgis.com/javascript/latest/references/charts-components/?path=/docs/charts-components_welcome--docs) パッケージには、ArcGIS Maps SDK for JavaScript アプリケーションでチャートを作成するために使用できる一連のコンポーネントが含まれています。マップと一緒に使用することで、データの完全なデータビジュアライゼーションストーリーを提供できます。現在、8種類の異なるチャートコンポーネントが利用可能です。各チャートコンポーネントは、チャートの設定を含む共通のチャート仕様に従った JSON オブジェクトを参照することでレンダリングできます。[`@arcgis/charts-model`](https://developers.arcgis.com/javascript/latest/references/charts-components/?path=/docs/charts-model-bar-chart-model--docs) パッケージを使用すると、そのチャートの設定の作成と更新が容易になります。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/chart-component.png" width="600px">

### コーディング コンポーネント
[`@arcgis/coding-components`](https://developers.arcgis.com/javascript/latest/references/coding-components/?path=/docs/welcome--docs) パッケージには、[`Arcade エディター コンポーネント`](https://developers.arcgis.com/javascript/latest/references/coding-components/?path=/docs/component-reference-arcade-editor--docs)が含まれています。このコンポーネントを使用すると、エンド ユーザーはレンダラー、ポップアップ、ラベルのために新しいデータ値を動的に作成するための Arcade 式を作成できます。ユーザーは、Map Viewer や [`Arcade プレイグラウンド`](https://developers.arcgis.com/arcade/playground/)での編集と同じ体験を得ることができます。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/coding-components.png" width="600px">

{{% notice note %}}

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) で Web コンポーネント全般について詳しく学ぶことができます。

{{% /notice %}}