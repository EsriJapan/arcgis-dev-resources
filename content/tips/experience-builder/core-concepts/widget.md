+++
title = "ウィジェット (Widget)"
weight = 8
aliases = ["/widget/"]
+++

出典：ArcGIS Experience Builder - Guide - [Widget](https://developers.arcgis.com/experience-builder/guide/core-concepts/widget/)

## ウィジェット (Widget)
ArcGIS Experience Builder におけるウィジェットは、Web アプリケーション内で特定の機能を提供するモジュール型の構成可能なコンポーネントです。ウィジェットは、地図の表示、ボタンによるユーザー操作の処理、リストやチャートによるデータの可視化など、さまざまなタスクを処理できます。開発者はウィジェットを設定することで、インタラクティブで動的な Web アプリケーションを作成できます。

Experience Builder に含まれるウィジェットには以下の 2 つのカテゴリーがあります。

- **標準ウィジェット** (Out-of-the-box widgets)：
Experience Builder に付属する事前構築済みのコンポーネントで、マップ、ボタン、データ可視化ツールなどの一般的な機能を提供します。
- **カスタム ウィジェット** (Custom widgets)：
Developer Edition を使用して開発者が作成するコンポーネントで、特定の要件に対応するための機能を実装します。

各ウィジェットは、動作や外観をカスタマイズするための設定できます。設定は次の方法で管理できます。

- 標準プロパティを変更するためのインターフェイスである、ビルダー環境の設定 UI
- 設定 UI がない場合に高度な設定オプションを編集できる、JSON エディター

## ウィジェットの機能
ほとんどのウィジェットには UI がありますが、必須ではありません。ウィジェットは UI 以外にもさまざまな機能を提供できます。
- **メッセージ アクションとデータ アクション**  
  ウィジェットは、メッセージ アクションを通じて他のウィジェットと連携し、データ アクションを通じてデータを処理できます。これによりウィジェット間で通信し、複数のデータ ソースから取得したデータを処理できます。詳細は [ウィジェット間の通信](../../widget-development/widget-communication/)をご覧ください。

- **拡張機能**  
  ウィジェットは拡張機能を使用して、アプリケーションのライフサイクル内の特定のタイミングで処理を実行できます。たとえば、`AppConfigProcessor` 拡張ポイントを使用すると、ウィジェットは実行時にアプリケーション構成を処理・変更できます。利用可能な拡張ポイントの詳細は、[拡張ポイント](../extension-points/)のガイドをご覧ください。

## ウィジェットの使用方法
ArcGIS Experience Builder でウィジェットを使用する一般的な手順は次のとおりです。

1. [ウィジェットの追加](./#1-ウィジェットの追加)
ページやレイアウトにウィジェットを追加します。

2. [ウィジェットの設定の構成](./#2-ウィジェットの設定の構成)
ウィジェットのプロパティや動作を調整します。

3. [ウィジェットの配置とスタイルの設定](./#3-ウィジェットの配置とスタイルの設定)
レイアウト内でウィジェットを整理し、スタイルを適用します。

### 1. ウィジェットの追加
次の手順に従って、エクスペリエンスにウィジェットを追加します。

1. ArcGIS Experience Builder の**ウィジェット** パネルに移動します。
2. 追加するウィジェットをページまたはレイアウト内の領域にドラッグ アンド ドロップします。
3. ウィジェットがエクスペリエンスに追加され、詳細を設定できるようになります。

{{< callout >}}

ウィジェットの追加について詳しくは、[**ウィジェットの追加**](https://developers.arcgis.com/experience-builder/guide/add-widgets/#insert-widgets)ガイドをご覧ください。

{{< /callout >}}

### 2. ウィジェット設定の構成
次の手順に従って、ウィジェットのプロパティを設定します。

1. 設定したいウィジェットを選択します。
2. 設定パネルを使用して、データ ソース、外観、動作などのウィジェットのプロパティを調整します。
3. 設定 UI がないウィジェットの場合は、JSON エディターを使用して手動でオプションを構成します。


### 3. ウィジェットの配置とスタイルの設定
次の手順に従って、エクスペリエンス内でウィジェットを配置し、スタイルを設定します。

1. レイアウト内でウィジェットを移動したり、サイズ変更したりして、配置を変更します。
2. 背景、枠線、余白などのスタイルを適用して、各ウィジェットの外観をカスタマイズします。
3. 整列ツールや均等配置ツールを使用して、ユーザビリティーに考慮してウィジェットを整理します。

## ウィジェットの UI 構築
カスタム ウィジェットを開発する際、UI を構築するには下記の方法があります。

- Jimu-UI ライブラリー  
  このライブラリーはウィジェット UI の開発に推奨される選択肢です。Experience Builder のテーマ システムと統合された事前構築済みコンポーネントを提供します。これにより、ウィジェット間でスタイルと動作の一貫性を確保できます。

- Calcite Design System  
  `jimu-ui` で必要な機能が提供されていない場合、Calcite コンポーネントを使用します。Calcite にはウィジェットの UI 構築に利用できる事前構築済みコンポーネントが含まれています。Calcite コンポーネントは `@esri/calcite-components` から利用できます。

{{< callout >}}

ウィジェット UI の構築やコンポーネント オプションについての詳細は、[**ウィジェット UI**](https://developers.arcgis.com/experience-builder/guide/widget-ui/) をご覧ください。

{{< /callout >}}

## データとマップの操作
ウィジェットは、下記の方法でデータやマップと連携できます。

- データを扱う場合 (例：フィーチャ レイヤー)
  - 設定画面で [DataSourceSelector](https://developers.arcgis.com/experience-builder/storybook/?path=/docs/components-jimu-ui-advanced-data-source-selector-datasourceselector--docs) を使用します。
  - 実行時に [DataSourceComponent](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSourceComponent/) を使用します。
  - 詳細は [ウィジェットでのデータの使用](https://developers.arcgis.com/experience-builder/guide/use-data-source-in-widget/)をご覧ください。

- マップ ウィジェットを扱う場合
  - 設定画面で [MapWidgetSelector](https://developers.arcgis.com/experience-builder/storybook/?path=/docs/components-jimu-ui-advanced-setting-components-mapwidgetselector--docs) と [JimuLayerViewSelector](https://developers.arcgis.com/experience-builder/storybook/?path=/docs/components-jimu-ui-advanced-setting-components-jimulayerviewselector--docs) を使用します。
  - 実行時に [JimuMapViewComponent](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapView/) を使用します。

## カスタム ウィジェット開発
カスタム ウィジェットを作成することで、ArcGIS Experience Builder の機能の拡張が可能です。カスタム ウィジェットは、[ArcGIS Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/guide/install-guide/) を使用して構築します。Developer Edition は、新しいウィジェットをビルダー環境に作成・統合することができるツールと API を提供します。

{{< callout >}}

ウィジェットの実装やカスタマイズの詳細については、[ウィジェットの実装](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/)をご覧ください。

{{< /callout >}}
