+++
title = "コンポーネント"
description = "ArcGIS Maps SDK for JavaScript コンポーネントについて紹介します。"
weight = 3
aliases = ["/javascript/components/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Components](https://developers.arcgis.com/javascript/latest/components/)

ArcGIS Maps SDK for JavaScript コンポーネントは、最小限のコードで Web アプリを構築するための事前構築された UI コンポーネントのコレクションです。

標準ベースの [Web コンポーネント](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)として構築されており、JavaScript Maps SDK のコア API を再利用可能なカスタム HTML 要素（例：`<arcgis-map></arcgis-map>`）に拡張します。また、JavaScript フレームワークに依存しないように設計されているため、バニラ JavaScript やほとんどのフレームワークおよびモジュール バンドラーで構築されたアプリケーションで使用できます。


## マップ コンポーネント
[`@arcgis/map-components`](https://developers.arcgis.com/javascript/latest/references/map-components/?path=/docs/welcome--docs) パッケージには、Map コンポーネント、Scene コンポーネント、および SDK の既存のウィジェットと同等の機能を持つ他のコンポーネントが含まれています。

以下は、`item-id` 属性を持つ Map コンポーネント `<arcgis-map>` の使い方を示すコード スニペットで、指定されたアイテム ID を使用して ArcGIS マップを Web ページに埋め込む方法を示してます。
```html
<arcgis-map item-id="05e015c5f0314db9a487a9b46cb37eca"></arcgis-map>
```
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/map-component.png">


## チャート コンポーネント
[`@arcgis/charts-components`](https://developers.arcgis.com/javascript/latest/references/charts-components/) パッケージには、ArcGIS Maps SDK for JavaScript アプリケーションでチャートを作成するために使用される[チャート コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/arcgis-chart/)と[チャート アクション バー コンポーネント](https://developers.arcgis.com/javascript/latest/references/charts-components/arcgis-charts-action-bar/)が含まれています。各チャートは、共有チャート仕様に準拠した `model` オブジェクトを設定することでレンダリングできます。この `model` オブジェクトは、フィーチャ レイヤーから読み込むか、チャート モデルを使用してプログラムで構成できます。

以下は、[`<arcgis-chart>`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-chart/) チャート コンポーネントとデフォルトのチャート操作を追加する [`<arcgis-charts-action-bar>`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-charts-action-bar/) の使用方法を示すコード スニペットです。[`layer-item-id`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-chart/#layerItemId) と [`chart-index`](https://developers.arcgis.com/javascript/latest/references/charts-components/components/arcgis-chart/#chartIndex) の 2 つの属性を使用して、データ ソースとレンダリングするチャートのインデックスを指定します。

``` html
<arcgis-chart layer-item-id="8871626e970a4f3e9d6113ec63a92f2f" chart-index="0">
  <arcgis-charts-action-bar slot="action-bar"></arcgis-charts-action-bar>
</arcgis-chart>
```
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/chart-component_ver433.png">


## コーディング コンポーネント
[`@arcgis/coding-components`](https://developers.arcgis.com/javascript/latest/references/coding-components/?path=/docs/welcome--docs) パッケージには、[`Arcade エディター コンポーネント`](https://developers.arcgis.com/javascript/latest/references/coding-components/?path=/docs/component-reference-arcade-editor--docs)が含まれています。このコンポーネントを使用すると、エンド ユーザーはレンダラー、ポップアップ、ラベルのために新しいデータ値を動的に作成するための Arcade 式を作成できます。ユーザーは、Map Viewer や [`Arcade プレイグラウンド`](https://developers.arcgis.com/arcade/playground/)での編集と同じ体験を得ることができます。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/coding-components.png">


## 共通コンポーネント
[`@arcgis/common-components`](https://developers.arcgis.com/javascript/latest/references/common-components/) パッケージには、ArcGIS Maps SDK for JavaScript の上位コンポーネントで使用される共通の UI コンポーネントが含まれています。これには、[Slider](https://developers.arcgis.com/javascript/latest/references/common-components/components/arcgis-slider/)、[Histogram](https://developers.arcgis.com/javascript/latest/references/common-components/components/arcgis-histogram/)、[Ticks](https://developers.arcgis.com/javascript/latest/references/common-components/components/arcgis-ticks/) といったコンポーネントが含まれます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/common-components.webp">


## 埋め込み可能なコンポーネント
[埋め込み可能なコンポーネント](https://developers.arcgis.com/javascript/latest/references/embeddable-components/)には、[埋め込み マップ コンポーネント](https://developers.arcgis.com/javascript/latest/references/embeddable-components/arcgis-embedded-map/)が含まれています。 このコンポーネントを使用すると、デフォルトのコンポーネント（ズーム、凡例、ブックマークなど）があらかじめ設定された Web マップを、あらゆる Web サイトにすばやく統合することができます。ユーザーは ArcGIS Online のマップ ビューアーから、最小限の設定でインタラクティブなマップを追加できます。

```html
<arcgis-embedded-map
  item-id="ceb8954a5f2c457284c5074efd5a5ca0"
  theme="dark"
  heading-enabled
  legend-enabled
  information-enabled
  style="height:300px;"></arcgis-embedded-map>
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/components/embedded-map.png">

{{< callout >}}

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) で Web コンポーネント全般について詳しく学ぶことができます。

{{< /callout >}}