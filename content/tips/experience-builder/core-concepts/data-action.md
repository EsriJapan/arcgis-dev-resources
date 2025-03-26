+++
title = "データアクション（Data action）"
weight = 11
aliases = ["/data-action/"]
+++

出典：ArcGIS Experience Builder - Guide - [Data action](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-action/)

### データアクション（Data action）
データアクションは、データレコードのコレクションを拡張可能な方法で処理する方法を提供します。

データアクションは `Data Action` インターフェイスによって定義され、`isSupported` と `onExecute` という 2 つの重要なメソッドを持っています。
- `isSupported` が呼び出されると、アクションがデータを処理できるかがチェックされます。サポートされていないデータアクションは実行中は非表示になります。
- `onExecute` メソッドは `DataRecordSet` インスタンスとオプションのアクション構成を受け取ります。`DataRecordSet` インスタンスには、データ ソース、オプションのデータ レコードの配列、フィールドが含まれます。

どちらのメソッドも、データ ソース、オプションのデータ レコード配列およびフィールドを含む `DataRecordSet` インスタンスの配列を取得できます。これら 2 つのメソッドは、`DataLevel` と `widgetId` パラメーターも受け取ります。`DataLevel` は、`DataRecordSet` がすべてのレコードを含むか、レコードのサブセットを含むかを示すために使用されます。

フレームワークは CSV へのエクスポートや JSON へのエクスポートなどのデータアクションを提供します。ウィジェットもデータアクションを提供できます。例えば、Map ウィジェト手ゃ "画面移動 (pan to)" と "ズーム (zoom to)" というデータアクションを提供します。ウィジェットにデータアクションを実装するには、`manifest.json` でデータアクションを宣言し、`AbstractDataAction` を継承したクラスを作成します。

データアクションによっては、アクションの動作を設定するための UI が必要な場合があります。これを実現するには、manifest.json で `settingUri` を宣言します。アクション設定の UI コンポーネントは、いくつかの差し込まれたプロパティを持つ React コンポーネントです。ユーザーが設定を変更したら、`this.props.onSettingChange` を呼び出して設定を保存し、`onExecute` メソッドで利用できるようにします。

```json
"dataActions": [
    {
      "name": "showOnMap",
      "label": "Show on map",
      "uri": "data-actions/show-on-map",
      "settingUri": "data-actions/show-on-map-setting",
      "icon": "runtime/assets/icons/ds-map-view.svg"
    }
]
```

データアクションを提供するだけでなく、ウィジェットはデータアクションを使用することもできます。ウィジェットでデータアクションを使用するには、ウィジェットの`manifest.json` プロパティで `canConsumeDataAction: true` を宣言し、`import {DataActionDropDown} from 'jimu-ui'` をインポートして、ウィジェットの UI で `DataActionDropDown` をレンダリングする必要があります。