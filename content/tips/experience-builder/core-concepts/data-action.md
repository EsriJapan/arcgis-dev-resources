+++
title = "データ アクション (Data action)"
weight = 11
aliases = ["/data-action/"]
+++

出典：ArcGIS Experience Builder - Guide - [Data action](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-action/)

## データ アクションとは
データ アクションは、データ レコードの集合を拡張可能な方法で処理します。データ操作は、フレーム ワークまたはウィジェットによって提供されます。これらはウィジェットによって利用され、データのエクスポートや地図上のフィーチャへのズームインなど、データ レコードに対する操作を実行することができます。

## インターフェースとライフサイクル
データ アクションは `DataAction` インターフェースによって定義されており、このインターフェースには2つの重要なメソッドがあります。
- `isSupported` メソッドは、そのアクションがデータを処理できるかどうかを確認するために呼び出されます。サポートされていないデータアクションは、実行時に非表示になります。
- ユーザーがデータ アクションをクリックすると、`onExecute` が呼び出されます。

どちらの方法も、データ ソース、オプションのレコード配列、およびフィールドを含む `DataRecordSet` インスタンスの配列を受け取ります。どちらの方法も、`DataLevel` および `widgetId` パラメーターを受け取ります。`DataLevel` は、`DataRecordSet` がすべてのレコードを含むか、それともレコードの一部のみを含むかを示します。

## データ操作の宣言
このフレームワークでは、CSV へのエクスポートや JSON へのエクスポートなどのデータ操作機能を提供しています。ウィジェットはデータ操作機能も提供できます。たとえば、マップ ウィジェットには「パンして」や「ズームして」といったデータ アクションが用意されています。データ アクションは、`manifest.json` でアクションを宣言し、`AbstractDataAction` を継承するクラスを作成することで、ウィジェットに実装できます。

## 設定画面を追加
データ アクションによっては、その動作を設定するための設定画面が用意されている場合があります。これを行うには、`manifest.json` 内で `settingUri` を宣言してください。

設定用 UI コンポーネントとは、プロパティが注入された React コンポーネントのことです。ユーザーが設定を変更した際は、`this.props.onSettingChange` を呼び出して設定を保存してください。保存された設定は `onExecute` メソッド内で利用可能になります。

以下は、`manifest.json` 内でデータ アクションがどのように宣言されるかを示すコードの抜粋です
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

## ウィジェット内でのアクションの実行
ウィジェットはアクションを提供するだけでなく、データ アクションを受け取ることもできます。ウィジェットでデータ アクションを使用するには、ウィジェットの `manifest.json` で `canConsumeDataAction: true` を宣言し、`jimu-ui` から `DataActionList` をインポートして、ウィジェットの UI にレンダリングします。
``` tsx
import { DataActionList } from 'jimu-ui'

// ウィジェット コンポーネントのレンダリング
<DataActionList widgetId={props.id} dataSets={dataRecordSets} />
```

## コード例
> 以下は、`AbstractDataAction` を継承したデータ アクションの骨格実装です。
> ``` tsx
> import { AbstractDataAction, DataRecordSet, DataLevel } from 'jimu-core'
> 
> export default class ShowOnMapAction extends AbstractDataAction {
>   isSupported(dataSets: DataRecordSet[], dataLevel: DataLevel, widgetId?: string): boolean {
>     // データセットが条件を満たしているかどうかを返す
>     return true
>   }
> 
>   async onExecute(dataSets: DataRecordSet[], dataLevel: DataLevel, widgetId?: string): Promise<boolean> {
>     // アクションの挙動を実装する
>     return true
>   }
> }
>```
