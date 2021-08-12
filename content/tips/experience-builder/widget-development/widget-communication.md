+++
title = "ウィジェット間の通信"
description = "ウィジェット同士がどのように相互に通信する方法について紹介します。"
weight = 9
aliases = ["/widget-communication/"]
+++

出典：ArcGIS Experience Builder - Guide - [Widget communication](https://developers.arcgis.com/experience-builder/guide/widget-communication/)


Experience Builder のウィジェットは、1 つの機能単位です。しかし、多くの場合、1 つのタスクを完了するために複数のウィジェットが一緒に動作する必要があるので、フレームワーク レベルでウィジェット同士がどのように相互に通信するかをサポートする必要があります。
以下の方法をサポートしています。

- Message action (メッセージアクション): このメカニズムは、ウィジェット間の通信のための設定可能なソリューションです。詳細は [Message action](https://developers.arcgis.com/experience-builder/guide/message-action) を参照してください。

- Share state (状態の共有): このメカニズムは、ウィジェット間の通信のためのプログラミングを行います。ウィジェット間で state (状態) を共有するには、ウィジェットの state  (状態) を使用する方法と、独自の Redux store/action/reducer を提供する方法の2つの方法があります。

## ウィジェットの状態を使用してウィジェット間で状態を共有

React コンポーネントとしての Widget は内部 state (状態) を持つことができますが、他の Widget はこの state (状態) にアクセスすることができません。Jimu は state (状態) 管理 として Redux を使用しています。多くの情報を Redux store に保存します。情報の一つは `widgetsState` と呼ばれるもので、型の定義は `jimu-core/lib/types/state` にあります。`widgetState` に保存された情報は、他のすべてのウィジェットからアクセス可能です。`widgetsState` に情報を保存するには、以下のコードを参照してください。

```tsx
import {appActions} from 'jimu-core';

/*
* Call this when you need to save state.
*
* widgetId: your widget id
* propKey: can be a string with this format "a.b.c"
* value: the info you want to store
*/
this.props.dispatch(appActions.widgetStatePropChange(widgetId, propKey, value))
```

例えば、`this.props.dispatch(appActions.widgetStatePropChange("w1", "a.b1", "value1"))` と `this.props.dispatch(appActions.widgetStatePropChange("w1", "a.b2", "value2"))` を呼び出すと、Redux store でこの store の state (状態) が取得されます。

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

ウィジェット2 の `w1` が格納した情報にアクセスするには、`mapExtraStateProps` を使用するか、`useSelect` hooks を使用して store から値を選択することができます。

ただし、`widgetState` にはプレーンな JavaScript オブジェクトのみを格納することができます。複雑な JavaScript オブジェクトを格納するには、`this.props.dispatch(appActions.widgetMutableStatePropChange(widgetId, propKey, value))` を使用して値を格納し、`MutableStoreManager.getInstance().getStateValue()` を使用してアクセスすることができます。

## ウィジェット間で状態を共有するための独自の redux store/action/reducer を提供します。 
これにより、state (状態) 管理をより柔軟にカスタマイズすることができます。これは通常の Redux で行う方法とほぼ同じです。ご存知のように、Redux には 1 つの store と 1 つの root reducer があり、これは jimu によって使用されます。ウィジェット開発者が通常の Redux の方法で state (状態)を管理できるようにするために、jimu は ReduxStore 拡張ポイントを定義しています。Redux を使用する必要があるウィジェットはこの拡張ポイント用の拡張を提供できます。

- ReduxStoreExtension インターフェースを実装する拡張クラスを作成します。

```tsx
import {extensionSpec} from 'jimu-core';

export default class MyReduxStoreExtension implements extensionSpec.ReduxStoreExtension{
    getActions(){
        // return your redux actions.
    }

    getInitLocalState(){
        // return your redux init local state.
    }

    getReducer(){
        // return your redux reducer.
    }

    getStoreKey(){
        // return your redux local key.
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