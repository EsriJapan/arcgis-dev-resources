+++
title = "メッセージ と アクション（Message and action）"
weight = 12
aliases = ["/message-action/"]
+++

出典：ArcGIS Experience Builder - Guide - [Message and action](https://developers.arcgis.com/experience-builder/guide/core-concepts/message-action/)

### メッセージ と アクション（Message and action）

メッセージ/アクションは、ウィジェットからウィジェット、ウィジェットからフレームワーク、フレームワークからウィジェットへの通信をサポートする方法です。
ウィジェット/フレームワークはメッセージを公開したり、メッセージを聞いたりすることができます。メッセージは jimu フレームワークによって定義される `MessageType` によって識別されます。jimu には `ExtentChange` や `DataRecordsSelectionChange` のようないくつかのメッセージタイプが定義されています。

### メッセージの発行（Publishing a message）
ウィジェットは，`MessageManager.getInstance().publishMessage(message)` を呼び出してメッセージを発行します．例えば、`List` ウィジェットでは，リストアイテムがクリックされたときに `DataRecordsSelectionChange` メッセージを発行したり，`Map` ウィジェットでは，ビューが変更されたときに `ExtentChange` メッセージを発行して，`List` ウィジェットのコンテンツを更新したりします。以下の `MessageTypes` がサポートされています。

- `StringSelectionChange`
- `ExtentChange`
- `DataRecordsSelectionChange`
- `DataRecordSetChange`

各メッセージには、それを定義するクラスがあります。例えば、`ExtentChange` メッセージは `ExtentChangeMessage` クラスで定義され、このクラスはメッセージのペイロードである `extent` プロパティを定義します。

メッセージを公開するために、ウィジェットは `manifest.json` ファイルで公開メッセージを宣言する必要があります。

```tsx
  "publishMessages": [
    "DATA_RECORDS_SELECTION_CHANGE"
  ]
```

### メッセージアクションの作成（Creating a message action）
メッセージアクションを作成するには、`AbstractMessageAction` クラスを継承する必要があります。メッセージアクションの開発に役立つメソッドや関数がいくつかあります。

`filterMessageType` メソッドは、利用可能なアクションのフィルタリングに使用されます。

```tsx
export default class QueryAction extends AbstractMessageAction{
  filterMessageType(messageType: MessageType, messageWidgetId?: string): boolean{
    return [MessageType.StringSelectionChange, MessageType.DataRecordsSelectionChange].indexOf(messageType) > -1;
  }
}
```

`filterMessage` メソッドは、メッセージマネージャでメッセージをフィルタリングするために使用されます。

```tsx
filterMessage(message: Message): boolean{
    return true;
  }
```

アクションによっては、アクションの動作を設定するための設定 UI が必要な場合があります。これを実現するには、manifest.json で `settingUri` を宣言します。特定のケースでは、設定 UI を省略したい場合があります。これを実現するには、`getSettingComponentUri` メソッドをオーバーライドし、該当する場合は `null` を返します。

アクション設定の UI コンポーネントはいくつかの差し込まれたプロパティを持つ React コンポーネントです。ユーザーが設定を変更したら、`this.props.onSettingChange` を呼び出して設定を保存し、`onExecute` メソッドで利用できるようにします。

```tsx
this.props.onSettingChange({
  actionId: this.props.actionId,
  config: {} // the action config
})
```

`onExecute` メソッドは、メッセージタイプに応じて発生させたいロジックを処理します。以下のスニペットでは、基本的にメッセージタイプに基づいてアクションを選択し、`dispatch` プロパティを使用してアプリケーションから `getAppStore()` 関数を使用してストアに送信しています。これにより、redux アクションがディスパッチされ、ステートが更新されるようになります。Redux アクションと Redux でのストアの使用について詳しくは[こちら](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)をご覧ください。

 ```tsx
onExecute(message: Message, actionConfig?: any): Promise<boolean> | boolean{
    let q = `${(actionConfig as ConfigForStringChangeMessage).fieldName} = '${message}'`
    switch(message.type){
      case MessageType.StringSelectionChange:
        q = `${(actionConfig as ConfigForStringChangeMessage).fieldName} = '${(message as StringSelectionChangeMessage).str}'`
        break;
      case MessageType.DataRecordsSelectionChange:
         q = `${actionConfig.fieldName} = ` +
          `'${(message as DataRecordsSelectionChangeMessage).records[0].getFieldValue(actionConfig.fieldName)}'`
        break;
    }
    getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryString', q));
    return true;
}
```

Redux ストアに格納できるのは、プレーンな JSON オブジェクトだけです。複雑な JavaScript オブジェクトを渡す必要がある場合は、`MutableStoreManager` を使ってミュータブル ストアに格納できます。値を更新したら、ウィジェットも再レンダリングできます。アクション内で次のように記述します。

```tsx
MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'theKey', theComplexObject)
```

ウィジェットでは次のようにしてオブジェクトにアクセスできます。

```tsx
this.props.mutableStateProps.theKey
```

`manifest.json` には `messageActions` プロパティがあり、メッセージ アクション エクステンションの場所と情報を提供します。

```tsx
 "messageActions": [
  {
    "name": "query",
    "label": "Query",
    "uri": "actions/query-action",
    "settingUri": "actions/query-action-setting"
  }
]
```

### 国際化対応（i18n support）
メッセージアクションの言語サポートは、[ウィジェット](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/#i18n-support)と同じパターンですが、1つ重要な違いがあります。メッセージアクションには、ユーザーがアクションを選択するための `Select an action` パネルがあります。そのため、アクションのプロパティ名を記載した `default.ts` というファイルを runtime/translations フォルダに用意する必要があります。フレームワークは、このパネルのアクションラベルの翻訳を処理します。そのため、ラベルのプロパティは、`_action_<actionName>_label` という命名規則を持つ必要があります。

```tsx
export default {
  _widgetLabel: 'Message subscriber',
  _action_query_label: 'Query'
}
```