+++
title = "AppConfig"
weight = 15
aliases = ["/appconfig/"]
+++

出典：ArcGIS Experience Builder - Guide - [AppConfig](https://developers.arcgis.com/experience-builder/guide/core-concepts/appconfig/)

### AppConfig とは
ArcGIS Experience Builder における **AppConfig** オブジェクトは、エクスペリエンスの構成を定義する JSON ベースの設定ファイルです。アプリケーションの動作、レイアウト、外観、データ接続などを定義するための、すべての重要な設定や要素が含まれています。これには、ページ、レイアウト、ウィジェット、データ ソースなどを管理するためのプロパティも含まれます。

**AppConfig** は、エクスペリエンスに関連するすべての設定のリポジトリーとして機能し、開発者がアプリケーションを簡単に、管理、カスタマイズできるようにします。新しいエクスペリエンスが初期化されると作成され、アプリケーションの state の `appConfig` プロパティに保存されます。


### AppConfig を更新する方法
**AppConfig** はイミュータブル (不変) なオブジェクトです。設定値を更新するには、更新された設定を含む新しい `appConfig` インスタンスをプログラムで作成する必要があります。

以下は、ウィジェットの実行時に `jimu-core` ライブラリーを使用して `appConfig` を更新する方法の例です。プログラムで `appConfigChanged()` アクションを割り当てることで、`appConfig` を更新できます。

```tsx
import { appActions, ReactRedux } from "jimu-core"

// get the appConfig
const appConfig = ReactRedux.useSelector((state: IMState) => state.appConfig)

// modify the appConfig
const newAppConfig = appConfig.setIn(["pages", pageId, "label"], theNewLabel)
dispatch(appActions.appConfigChanged(newAppConfig))
```

`appConfig` を更新する最も一般的な方法は、ウィジェット構成画面でウィジェットの設定を更新することです。このとき、プログラムで `props.onSettingChange()` を呼び出します。この関数はウィジェット設定の変更をハンドリングし、パラメーターとしてウィジェットの `ID` と新しいウィジェットの `config` を含むオブジェクトを受け取ります。

```tsx
props.onSettingChange({
  id: widgetId,
  config: newWidgetConfig
})
```


### AppConfig の構造
`AppConfig` オブジェクトは、エクスペリエンス全体の構造と動作を定義する包括的な JSON ベースの構成ファイルです。主なプロパティには以下のようなものがあります。

|プロパティ|説明|
|-----|-----|
|dataSources|エクスペリエンス内で使用されるすべてのデータ ソースの指定|
|layouts|エクスペリエンスで使用されるレイアウトの定義|
|pages|エクスペリエンス内のすべてのページの設定|
|theme|エクスペリエンスに適用されるテーマの URI|
|views|エクスペリエンス内のビューの設定|
|widgets|すべてのウィジェット設定|

以下は、基本的な `AppConfig` の構造の例です。

```json
{
  "connections": [],
  "controllerPanels": [],
  "dataSources": {},
  "dialogs": {},
  "exbVersion": "1.0.0",
  "footer": {},
  "forBuilderAttributes": {},
  "header": {},
  "historyLabels": {},
  "layouts": {},
  "mainSizeMode": "desktop",
  "messageConfigs": {},
  "name": "My Experience",
  "originExbVersion": "1.0.0",
  "pages": [],
  "pageStructure": {},
  "preloadWidgets": [],
  "publishTimestamp": "",
  "screenGroups": [],
  "screens": [],
  "sections": {},
  "template": "",
  "theme": "",
  "timestamp": "",
  "useAutoSortInFixedLayout": true,
  "useCachedManifest": true,
  "views": [],
  "widgets": {},
  "widgetsManifest": {}
}
```

{{< callout >}}

`AppConfig` オブジェクトのプロパティや構造についての詳細は、[AppConfig API ドキュメント](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/AppConfig/)をご参照ください。

{{< /callout >}}


### ドラフト版と公開版
ArcGIS Experience Builder では、`AppConfig` オブジェクトはエクスペリエンスのドラフト版と公開版の両方を管理するために使用されます。ドラフト版は通常、アプリ作成者が変更を加える作業用のバージョンであり、公開版はユーザーが操作する最終バージョンです。

ArcGIS Online および ArcGIS Enterprise では、`AppConfig` のドラフト版はアプリ アイテムのリソースに保存され、公開版はアイテム データに保存されます。これにより、アプリ作成者は実行環境に影響を与えることなく変更作業を行い、準備が整った段階で公開することができます。

Experience Builder Developer Edition ではドラフト版は `public/apps/<appid>/resources/config/config.json` ファイルに保存され、公開版は `public/apps/<appid>/config.json` ファイルに保存されます。
