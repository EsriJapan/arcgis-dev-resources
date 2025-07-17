+++
title = "コンポーネント"
description = "ArcGIS Maps SDK for JavaScript コンポーネントについて紹介します。"
weight = 6
aliases = ["/javascript/components/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Components](https://developers.arcgis.com/javascript/latest/components/)

ArcGIS Maps SDK for JavaScript コンポーネントは、最小限のコードで Web アプリを構築するための事前構築された UI コンポーネントのコレクションです。

標準ベースの [Web コンポーネント](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)として構築されており、JavaScript Maps SDK のコア API を再利用可能なカスタム HTML エレメント（例：`<arcgis-map></arcgis-map>`）に拡張します。また、JavaScript フレームワークに依存しないように設計されているため、バニラ JavaScript やほとんどのフレームワークおよびモジュール バンドラーで構築されたアプリケーションで使用できます。

### マップ コンポーネント
[`@arcgis/map-components`](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/welcome--docs) パッケージには、マップ コンポーネント、シーン コンポーネント、および SDK の既存のウィジェットと同等の機能を持つ他のコンポーネントが含まれています。

以下は、`item-id` 属性を持つマップ コンポーネント `<arcgis-map>` の使い方を示すコード スニペットで、指定されたアイテム ID を使用して ArcGIS マップを Web ページに埋め込むことができます。
```HTML
<arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca"></arcgis-map>
```
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/map-component.png" width="600px">

### チャート コンポーネント（ベータ版）

[`@arcgis/charts-components`](https://developers.arcgis.com/javascript/latest/references/charts-components/) パッケージには、ArcGIS Maps SDK for JavaScript アプリケーションでチャートを作成するために使用される[チャート コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/arcgis-chart/)と[チャート アクション バー コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/arcgis-charts-action-bar/)が含まれています。このパッケージは 9 種類のチャート タイプをサポートしており、各チャート タイプは、共有チャート仕様に準拠した `model` オブジェクトを設定することでレンダリングできます。この `model`  オブジェクトは、Web マップまたはフィーチャ レイヤーから読み込むか、チャート モデル メソッドを使用してプログラムで構成できます。

以下は、`<arcgis-chart>` チャート コンポーネントとデフォルトのチャート インタラクション アクションを追加する `<arcgis-charts-action-bar>` の使用方法を示すコード スニペットです。チャート要素に有効な `model` が設定され、チャートがレンダリングされます:
``` JavaScript
<arcgis-chart>
  <arcgis-charts-action-bar slot="action-bar"></arcgis-charts-action-bar>
</arcgis-chart>
<script type="module">
  const WebMap = await $arcgis.import("@arcgis/core/WebMap.js");

  const webmap = new WebMap({ portalItem: { id: "96cb2d2825dc459abadcabc941958125" }});
  await webmap.loadAll();

  const featureLayer = webmap.layers.find((layer) => layer.title === "College Scorecard");
  const scatterplotModel = featureLayer.charts[0];

  const chartElement = document.querySelector("arcgis-chart");

  chartElement.layer = featureLayer;
  chartElement.model = scatterplotModel;
</script>
```
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/chart-component_ver433.png" width="600px">


### コーディング コンポーネント
[`@arcgis/coding-components`](https://developers.arcgis.com/javascript/latest/references/coding-components/?path=/docs/welcome--docs) パッケージには、[`Arcade エディター コンポーネント`](https://developers.arcgis.com/javascript/latest/references/coding-components/?path=/docs/component-reference-arcade-editor--docs)が含まれています。このコンポーネントを使用すると、エンド ユーザーはレンダラー、ポップアップ、ラベルのために新しいデータ値を動的に作成するための Arcade 式を作成できます。ユーザーは、Map Viewer や [`Arcade プレイグラウンド`](https://developers.arcgis.com/arcade/playground/)での編集と同じ体験を得ることができます。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/coding-components.png" width="600px">

### 埋め込み可能なコンポーネント
[埋め込み可能なコンポーネント](https://developers.arcgis.com/javascript/latest/references/embeddable-components/)には、[埋め込み マップ コンポーネント](https://developers.arcgis.com/javascript/latest/references/embeddable-components/arcgis-embedded-map/)が含まれています。 このコンポーネントを使用すると、デフォルトのコンポーネント（ズーム、凡例、ブックマークなど）があらかじめ設定されたWebマップを、あらゆる Web サイトにすばやく統合することができます。ArcGIS Online の Map Viewer から、最小限の設定でインタラクティブなマップを追加できます。

```HTML
<arcgis-embedded-map item-id="ceb8954a5f2c457284c5074efd5a5ca0" theme="dark" heading-enabled legend-enabled information-enabled style="height:300px;"></arcgis-embedded-map>
```
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/embedded-map.png" width="600px">

{{% notice note %}}

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) で Web コンポーネント全般について詳しく学ぶことができます。

{{% /notice %}}