+++
title = "マップ/シーン ビュー (Map/Scene View)"
weight = 13
aliases = ["/map-scene-view/"]
+++

出典：ArcGIS Experience Builder - Guide - [Map/Scene View](https://developers.arcgis.com/experience-builder/guide/core-concepts/map-scene-view/)

## マップ ビューとシーン ビューとは何か

ArcGIS Experience Builder は、ArcGIS Maps SDK for JavaScript と同じマップおよびシーン ビューの概念を使用しています。Experience Builder では、実行時のビューが `JimuMapView` によってラップされているため、ウィジェットはマップ操作、メッセージ、アクションに関して一貫した拡張モデルを使用できます。

## インターフェイスとライフサイクル
`JimuMapView` のインスタンスは、マップ ウィジェットによって作成および管理されます。
- Map ウィジェットは、設定された Web マップまたは Web シーンに対して `JimuMapView` オブジェクトを作成します。
- 他のウィジェットは、ほとんどのワークフローにおいて、MapView を直接作成することはありません。その代わりに、既存の `JimuMapView` インスタンスをサブスクライブして利用します。
- 実行時には、ウィジェットはアクティブな `JimuMapView` を受け取り、基盤となる ArcGIS Maps SDK ビューを操作できます。

## プロパティ
`JimuMapView` には、いくつかの重要なプロパティが用意されています。
- `view`: ArcGIS Maps SDK の MapView または ScenView オブジェクト。
- `dataSourceId`: そのビューを作成した Web マップまたは Web シーンのデータ ソース ID。
- `mapWidgetId`: そのビューを所有するマップ ウィジェットの ID。
- `jimuLayerViews`: そのビューに関連付けられたレイヤー ビューのラッパーの集合。

## ウィジェットで JimuMapView を使用する方法
ウィジェットでマップやシーン ビューが必要な場合、一般的なワークフローは次のとおりです。

1. ウィジェットの設定ページで、`MapWidgetSelector` を使用して、作成者がマップ ウィジェットを選択できるようにします。
2. 選択されたマップ ウィジェットの ID をウィジェットの設定に保存します。
3. 実行時に、`JimuMapViewComponent` をレンダリングし、選択されたマップ ウィジェットの ID を渡します。
4. `onActiveViewChange` コールバックを使用して、現在の `JimuMapView` を取得します。

ユーザーに特定のビューを直接選択してもらう必要がある場合は、設定で `JimuMapViewSelector` を使用することもできます。

## コード例
次に、アクティブな `JimuMapView` を取得し、その基盤となる ArcGIS Maps SDK ビューにアクセスする、最小構成のランタイム ウィジェットの例を示します。

```jsx
import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'

export default function Widget (props: AllWidgetProps<any>) {
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)

  const onActiveViewChange = (activeView: JimuMapView) => {
    setJimuMapView(activeView)
  }

  return (
    <div className='widget-map-scene-view'>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={onActiveViewChange}
      />

      {jimuMapView?.view && (
        <div>
          Active view type: {jimuMapView.view.type}
        </div>
      )}
    </div>
  )
}

```
