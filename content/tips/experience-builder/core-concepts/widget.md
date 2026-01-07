+++
title = "ウィジェット（Widget）"
weight = 8
aliases = ["/widget/"]
+++

出典：ArcGIS Experience Builder - Guide - [Widget](https://developers.arcgis.com/experience-builder/guide/core-concepts/widget/)

## ウィジェット（Widget）
ArcGIS Experience Builder におけるウィジェットは、Web アプリケーション内で特定の機能を提供するモジュール型の柔軟なコンポーネントです。ウィジェットは、地図の表示、ボタンによるユーザー操作の管理、リストやチャートによるデータの可視化など、さまざまなタスクを処理できます。ウィジェットを設定することで、インタラクティブで動的な Web アプリケーションを作成できます。

Experience Builder に含まれるウィジェットには以下の2つのカテゴリがあります。

- **標準ウィジェット**（Out-of-the-box widgets）：
地図、ボタン、データ可視化ツールなど、一般的な機能を実装した事前構築済みのコンポーネント
- **カスタムウィジェット**（Custom widgets）：
Developer Edition を使用して開発者が作成するコンポーネントで、特定の要件に対応するための機能を実装

各ウィジェットは、動作や外観をカスタマイズするための設定が可能です。設定は次の方法で管理できます。

標準プロパティを変更するためのインターフェイスである、ビルダー環境の設定 UI
設定 UI がない場合に高度な設定オプションを編集できる、JSON エディター

## ウィジェットの機能
ほとんどのウィジェットには UI がありますが、必須ではありません。ウィジェットは UI 以外にもさまざまな機能があります。
- **メッセージ アクションとデータ アクション**

  ウィジェットは、メッセージアクションを通じて他のウィジェットと連携し、データアクションを通じてデータを処理できます。これによりウィジェット同士が通信し、異なるソースからのデータを処理できます。詳細は [**ウィジェット コミュニケーション**](https://developers.arcgis.com/experience-builder/guide/widget-communication/)をご覧ください。

- **拡張機能**

  ウィジェットは、拡張機能を用いることでアプリケーションライフサイクルの特定のポイントにフックできます。たとえば、`AppConfigProcessor` のエクステンション ポイントを使用すると、ウィジェットは実行時にアプリケーション構成を処理・変更できます。利用可能なエクステンション ポイントの詳細は、[**エクステンション ポイント**](https://developers.arcgis.com/experience-builder/guide/extension-points/)のガイドをご覧ください。

## ウィジェットの使い方
ArcGIS Experience Builder でウィジェットを使用する一般的な手順は次のとおりです。

1. [ウィジェットの追加](./#1-ウィジェットの追加)
ページやレイアウトにウィジェットを追加します。

2. [ウィジェットの設定の構成](./#2-ウィジェットの設定の構成)
ウィジェットのプロパティや動作を調整します。

3. [ウィジェットの配置とスタイルの設定](./#3-ウィジェットの配置とスタイルの設定)
レイアウト内でウィジェットを整理し、スタイルを適用します。

### 1. ウィジェットの追加
次のステップに従って、エクスペリエンスにウィジェットを追加します。

1. ArcGIS Experience Builder の**ウィジェット**パネルに移動します。
2. 追加したいウィジェットをページまたはレイアウト セクションに ドラッグ＆ドロップします。
3. ウィジェットがエクスペリエンスに追加され、詳細な設定が可能になります。

{{% notice note %}}

ウィジェットの追加について詳しくは、[**ウィジェットの追加**](https://developers.arcgis.com/experience-builder/guide/add-widgets/#insert-widgets)ガイドをご覧ください。

{{% /notice %}}

### 2. ウィジェットの設定の構成
次のステップに従って、ウィジェットのプロパティを設定します。

1. 設定したいウィジェットを選択します。
2. 設定パネルを使用して、データソース、外観、動作などのウィジェットのプロパティを調整します。
3. 設定 UI がないウィジェットの場合は、JSON エディターを使用して手動でオプションを構成します。


### 3. ウィジェットの配置とスタイルの設定
次のステップに従って、エクスペリエンス内でウィジェットを配置・スタイル設定をします。

1. レイアウト内でウィジェットを移動・サイズ変更し、配置を変更します。
2. 背景、枠線、余白などのスタイルを適用して、各ウィジェットの外観をカスタマイズします。
3. 整列ツールや分布ツールを使用して、ユーザビリティーに配慮してウィジェットを整理します。

## ウィジェットのUI構築
カスタムウィジェットを開発する際、UI を構築するには下記の方法があります。

- Jimu-UI ライブラリ
このライブラリはウィジェット開発に推奨される方法です。Experience Builderのテーマ システムと統合された事前構築済みコンポーネントを提供します。これにより、ウィジェット間で一貫したスタイルと動作が可能となります。

- Calcite Design System
`Jimu-UI` で必要な機能が提供されていない場合、Calcite コンポーネントを使用します。Calcite にはウィジェットの UI 構築に利用できる事前構築済みコンポーネントが含まれています。Calcite コンポーネントは `@esri/calcite-components` によってアクセス可能です。

{{% notice note %}}

ウィジェット UI の構築やコンポーネント オプションについての詳細は、[**ウィジェット UI**](https://developers.arcgis.com/experience-builder/guide/widget-ui/) をご覧ください。

{{% /notice %}}

## データとマップの操作
ウィジェットは、下記の方法でデータやマップと連携できます。

- データを扱う場合（例：フィーチャ レイヤー）
  - 設定画面で DataSourceSelector を使用
  - 実行時に DataSourceComponent を使用
  - 詳細は [**ウィジェットでのデータの使用**](https://developers.arcgis.com/experience-builder/guide/use-data-source-in-widget/)をご覧ください

- マップウィジェットを扱う場合
  - 設定画面で MapWidgetSelector と JimuLayerViewSelector を使用
  - 実行時に JimuMapViewComponent を使用

## カスタム ウィジェット開発
カスタム ウィジェットを作成することで、ArcGIS Experience Builder の機能の拡張が可能です。カスタム ウィジェットは、[ArcGIS Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/guide/install-guide/) を使用して構築します。Developer Edition は、新しいウィジェットをビルダー環境に作成・統合することができるツールと API を提供します。

{{% notice note %}}

ウィジェットの実装やカスタマイズの詳細については、[**ウィジェットの実装**](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/)をご覧ください。

{{% /notice %}}
