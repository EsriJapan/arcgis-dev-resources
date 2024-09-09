+++
title = "ウィジェット間の通信"
description = "ウィジェット同士がどのように相互に通信する方法について紹介します。"
weight = 10
aliases = ["/widget-communication/"]
+++

出典：ArcGIS Experience Builder - Guide - [Widget communication](https://developers.arcgis.com/experience-builder/guide/widget-communication/)


ArcGIS Experience Builder ウィジェットは機能の単位であり、ウィジェットは 1 つの機能に焦点を当てます。しかし、多くの場合、タスクを完了するために複数のウィジェットを連携させる必要があります。そのためには、フレーム ワーク レベルでウィジェット同士が通信できる方法が必要です。Experience Builder では次の方法でこれを実現できます。

1. Configurable (設定によって実現)
    - [ウィジェット間で同じデータ ソース/データ ビューを使用する](#ウィジェット間で同じデータソースデータビューを使用する)
    - [ウィジェットの出力するデータ ソースを使用する](#ウィジェットの出力するデータ-ソースを使用する)
    - [メッセージ/アクションを使用する](#メッセージアクションを使用する)
    - [データ アクションを使用する](#データ-アクション)
2. Programming (プログラミングによって実現)
    - [ウィジェットの state をウィジェット間で共有する](#ウィジェットの-state-を使用してウィジェット間で状態を共有)
    - [ウィジェット間で state を共有するために、独自の redux ストア/アクション/リデューサーを用意する](#ウィジェット間で-state-を共有するための独自の-redux-storeactionreducer-を提供)

Configurable とはユーザーがビルダー内でウィジェット間の通信方法を設定できることを意味します。Programming とはウィジェット間の通信がコードによって行われることを意味します。

## ウィジェット間で同じデータソース/データビューを使用する
複数のウィジェットが同じデータ ソースまたはデータ ビューを使用する場合、それらのウィジェットは同じ選択、同じデータ レコードなど、同じデータ ソースの状態を取得できます。ウィジェットはこれらのデータを使用してデータ ソースの状態を同期できます。例えば、複数のウィジェットが同じデータ レコードを読み込んで、異なるビューを表示することができます。あるウィジェットはユーザーに選択を行わせ、別のウィジェットは選択状態を監視し、選択されたデータの詳細を表示することができます。

複数のウィジェットが同じデータ ソースの異なるデータ ビューを使用しても選択内容がデータ ビューのフィルター条件を満たしていれば、同じ選択内容を取得できます。

詳細は[ウィジェットでデータ ソースを使用](../use-data-source-in-widget/)を参照してください。

## ウィジェットの出力するデータ ソースを使用する
詳細は[ウィジェット出力データ ソース](../../core-concepts/data-source/#ウィジェット出力データ-ソースwidget-output-data-source)を参照してください。

## メッセージ/アクションを使用する
詳細は[メッセージとアクション](../../core-concepts/message-action/)を参照してください。

## データ アクション
詳細は[データ アクション](../../core-concepts/data-action/)を参照してください。


## ウィジェットの state を使用してウィジェット間で状態を共有

React コンポーネントとしての Widget は内部 state (状態) を持つことができますが、他の Widget はこの state にアクセスすることができません。Jimu は state 管理 として Redux を使用しています。多くの情報を Redux store に保存します。情報の一つは `widgetsState` と呼ばれるもので、型の定義は `jimu-core/lib/types/state` にあります。`widgetState` に保存された情報は、他のすべてのウィジェットからアクセス可能です。`widgetsState` に情報を保存するには、以下のコードを参照してください。

```tsx
import {appActions} from 'jimu-core';

/*
* state を保存する必要がある場合に呼び出します
*
* widgetId: 使用しているウィジェットの ID
* propKey: "a.b.c" といったフォーマットの文字列
* value: 保存したい情報
*/
this.props.dispatch(appActions.widgetStatePropChange(widgetId, propKey, value))
```

例えば、`this.props.dispatch(appActions.widgetStatePropChange("w1", "a.b1", "value1"))` と `this.props.dispatch(appActions.widgetStatePropChange("w1", "a.b2", "value2"))` を呼び出すと、Redux store でこの store の state が取得されます。

```tsx
widgetsState: {
    w1: {
        a: {
            b1: 'value1',
            b2: 'value2'
        }
    }
}
```

ウィジェット2 の `w1` が格納した情報にアクセスするには、`mapExtraStateProps` を使用するか、`useSelect` フックを使用して store から値を選択することができます。

ただし、`widgetState` にはプレーンな JavaScript オブジェクトのみを格納することができます。複雑な JavaScript オブジェクトを格納するには、`this.props.dispatch(appActions.widgetMutableStatePropChange(widgetId, propKey, value))` を使用して値を格納し、`MutableStoreManager.getInstance().getStateValue()` を使用してアクセスすることができます。

## ウィジェット間で state を共有するための独自の redux store/action/reducer を提供
これにより、state (状態) 管理をより柔軟にカスタマイズすることができます。これは通常の Redux で行う方法とほぼ同じです。ご存知のように、Redux には 1 つの store と 1 つの root reducer があり、これは jimu によって使用されます。ウィジェット開発者が通常の Redux の方法で state を管理できるようにするために、jimu は ReduxStore 拡張ポイントを定義しています。Redux を使用する必要があるウィジェットはこの拡張ポイント用の拡張を提供できます。

- ReduxStoreExtension インターフェースを実装する拡張クラスを作成します。

```tsx
import {extensionSpec} from 'jimu-core';

export default class MyReduxStoreExtension implements extensionSpec.ReduxStoreExtension{
    getActions(){
        // 値を返す redux アクション
    }

    getInitLocalState(){
        // ローカル state 内の redux を返す
    }

    getReducer(){
        // redux reducer を返す
    }

    getStoreKey(){
        // redux のローカル キーを返す
    }
}
```

- ウィジェットの manifest.json で拡張機能を宣言します。

```tsx
"extensions": [
    {
      "name": "My Store",
      "point": "REDUX_STORE",
      "uri": "my-store"
    }
  ]
```