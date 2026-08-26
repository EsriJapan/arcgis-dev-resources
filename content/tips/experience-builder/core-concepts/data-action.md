+++
title = "データ アクション (Data action)"
weight = 11
aliases = ["/data-action/"]
+++

出典：ArcGIS Experience Builder - Guide - [Data action](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-action/)

## データ アクションとは
データ アクションは、拡張可能な方法でデータ レコードの集合を処理する機能です。データ アクションは、フレーム ワークまたはウィジェットによって提供されます。ウィジェットはデータ アクションを利用して、データのエクスポートやマップ上のフィーチャへのズームなど、データ レコードに対する操作を実行できます。

## インターフェイスとライフサイクル
データ アクションは `DataAction` インターフェイスによって定義されており、このインターフェイスには 2 つの重要なメソッドがあります。
- `isSupported` メソッドは、データ アクションが対象データを処理できるかどうかを確認するために呼び出されます。対象データをサポートしていないデータ アクションは、実行時に表示されません。
- ユーザーがデータ アクションをクリックすると、`onExecute` メソッドが呼び出されます。

どちらのメソッドも、データ ソース、任意のレコード配列、およびフィールドを含む `DataRecordSet` インスタンスの配列を受け取ります。どちらのメソッドも、`DataLevel` および `widgetId` パラメーターを受け取ります。`DataLevel` は、`DataRecordSet` がすべてのレコードを含むか、それともレコードの一部のみを含むかを示します。

## データ アクションの宣言
Experience Builder のフレームワークでは、CSV へのエクスポートや JSON へのエクスポートなどのデータ アクションを提供します。ウィジェットはデータ アクション機能も提供できます。たとえば、マップ ウィジェットには「画面移動」や「ズーム」などのデータ アクションが用意されています。データ アクションをウィジェットに実装するには、`manifest.json` でアクションを宣言し、`AbstractDataAction` クラスを継承するクラスを作成します。

## 設定画面の追加
データ アクションには、動作を構成するための設定 UI を含めることができます。これを行うには、`manifest.json` 内で `settingUri` を宣言します。

設定用 UI コンポーネントは、必要な props を受け取る React コンポーネントです。ユーザーが設定を変更した際は、`this.props.onSettingChange` を呼び出して設定を保存してください。保存された設定は `onExecute` メソッド内で利用可能になります。

以下は、`manifest.json` 内でデータ アクションがどのように宣言されるかを示すコードの抜粋です。
``` json
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

## ウィジェットでデータ アクションを利用
ウィジェットはアクションを提供するだけでなく、データ アクションを利用することもできます。ウィジェットでデータ アクションを使用するには、ウィジェットの `manifest.json` で `canConsumeDataAction: true` を宣言し、`jimu-ui` から `DataActionList` をインポートして、ウィジェットの UI にレンダリングします。
``` tsx
import { DataActionList } from 'jimu-ui'

// ウィジェット コンポーネントのレンダリング
<DataActionList widgetId={props.id} dataSets={dataRecordSets} />
```

## コード例
次に、`AbstractDataAction` を継承したデータ アクションの基本的な実装例を示します。
``` tsx
import { AbstractDataAction, DataRecordSet, DataLevel } from 'jimu-core'

export default class ShowOnMapAction extends AbstractDataAction {
  isSupported(dataSets: DataRecordSet[], dataLevel: DataLevel, widgetId?: string): boolean {
    // データセットが条件を満たしているかどうかを返す
    return true
  }

  async onExecute(dataSets: DataRecordSet[], dataLevel: DataLevel, widgetId?: string): Promise<boolean{
    // アクションの挙動を実装する
    return true
  }
}
```
