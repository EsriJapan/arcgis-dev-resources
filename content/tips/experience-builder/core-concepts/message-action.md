+++
title = "メッセージとアクション (Message and action)"
weight = 12
aliases = ["/message-action/"]
+++

出典：ArcGIS Experience Builder - Guide - [Message and action](https://developers.arcgis.com/experience-builder/guide/core-concepts/message-action/)

### メッセージとアクション (Message and action)

ArcGIS Experience Builder において、メッセージ アクションは、ウィジェットとフレームワーク間の通信を行う仕組みです。ウィジェットとフレームワークは、メッセージの送信と受信の両方が可能であり、これにより動的な相互作用やワークフローが実現されます。メッセージは `MessageType` によって識別され、これは jimu フレームワークによって定義されています。一般的なメッセージ タイプには、`ExtentChange` や `DataRecordsSelectionChange` などがあります。

## メッセージアクションの使用方法
ArcGIS Experience Builder でメッセージアクションを使用するための一般的な手順は、次のとおりです。
1. [マニフェストでのメッセージとアクションの宣言](#マニフェストでメッセージとアクションを宣言する)
2. [メッセージの送信または処理](#メッセージの公開または処理)

### マニフェストでメッセージとアクションを宣言する
ウィジェットは、`MessageManager.getInstance().publishMessage(message)` を呼び出してメッセージを発行します。例えば、`List` ウィジェットでは，リスト アイテムがクリックされたときに `DataRecordsSelectionChange` メッセージを発行したり、`Map` ウィジェットでは、ビューが変更されたときに `ExtentChange` メッセージを発行して、`List` ウィジェットのコンテンツを更新したりします。以下の `MessageTypes` がサポートされています。

各メッセージには、それを定義するクラスがあります。例えば、`ExtentChange` メッセージは `ExtentChangeMessage` クラスで定義され、このクラスはメッセージのペイロードである `extent` プロパティを定義します。

メッセージを発行するために、ウィジェットは `manifest.json` ファイルで発行メッセージを宣言する必要があります。

```json
  "publishMessages": [
    "DATA_RECORDS_SELECTION_CHANGE"
  ]
```

{{< callout >}}
`MessageType` の詳細については、[MessageType API リファレンス](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/MessageType/)をご覧ください。
{{< /callout >}}

### メッセージの公開または処理
ウィジェットがメッセージを送信する必要がある場合は、`MessageManager.getInstance().publishMessage(message)` を呼び出す必要があります。ウィジェットがメッセージを処理する必要がある場合は、アクションを実装する必要があります。

メッセージアクションを作成するには、`AbstractMessageAction` クラスを継承します。メッセージアクションの開発には、以下のメソッドが役立ちます：

```jsx
export default class QueryAction extends AbstractMessageAction{
  filterMessageType(messageType: MessageType, messageWidgetId?: string): boolean{
    return [MessageType.StringSelectionChange, MessageType.DataRecordsSelectionChange].indexOf(messageType) > -1;
  }
}
```

**filterMessage** メソッドは、メッセージ マネージャーでメッセージをフィルタリングするために使用されます。

**filterMessageDescription**: ビルダーで利用可能なアクションをフィルタリングします。
```jsx
filterMessage(message: Message): boolean{
    return true;
  }
```

**UI の設定**: アクションによっては、アクションの動作を設定するための設定 UI が必要な場合があります。これを実現するには、manifest.json で `settingUri` を宣言します。特定のケースでは、設定 UI を省略したい場合があります。これを実現するには、`getSettingComponentUri` メソッドをオーバーライドし、該当する場合は `null` を返します。

**アクション設定 UI コンポーネント**: アクション設定の UI コンポーネントはいくつかの差し込まれたプロパティを持つ React コンポーネントです。ユーザーが設定を変更したら、`this.props.onSettingChange` を呼び出して設定を保存し、`onExecute` メソッドで利用できるようにします。

```jsx
this.props.onSettingChange({
  actionId: this.props.actionId,
  config: {} // アクションの config 設定
})
```

**onExecute**: メッセージタイプのロジックを処理します。たとえば、状態を更新するための Redux アクションをディスパッチする場合などです：

 ```jsx
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

Redux ストアには、プレーンな JSON オブジェクトのみを格納できます。複雑なオブジェクトの場合は、`MutableStoreManager` を使用してください。

```jsx
MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'theKey', theComplexObject)
```

ウィジェット内でオブジェクトにアクセスするには以下のようにします。

```jsx
this.props.mutableStateProps.theKey
```

`manifest.json` でメッセージアクションを宣言します：

```jsx
 "messageActions": [
  {
    "name": "query",
    "label": "Query",
    "uri": "actions/query-action",
    "settingUri": "actions/query-action-setting"
  }
]
```

### 国際化対応 (i18n support)
メッセージ アクションの国際化 (i18n) は、ウィジェットの場合と同じパターンに従いますが、1 つ重要な違いがあります。それは、メッセージ アクションには「アクションを選択」パネルがあることです。`runtime/translations` フォルダ内に、アクションのプロパティ名を記載した `default.ts` ファイルが必要です。label プロパティには、`_action_<actionName>_label` という命名規則を使用する必要があります。

```jsx
export default {
  _widgetLabel: 'Message subscriber',
  _action_query_label: 'Query'
}
```

## コード例
### ウィジェット内にメッセージアクションを作成する

この例では、ウィジェット内でメッセージアクションを使用する方法を示します。

AbstractMessageAction クラスを継承するクラスを作成します。

```jsx
export default class QueryAction extends AbstractMessageAction{
  filterMessageDescription(messageDescription: MessageDescription): boolean{
    return [MessageType.StringSelectionChange, MessageType.DataRecordsSelectionChange].indexOf(messageDescription.messageType) > -1;
  }

  filterMessage(message: Message): boolean{return true; }

  getSettingComponentUri(messageType: MessageType, messageWidgetId?: string): string {
    return 'actions/query-action-setting';
  }

  onExecute(message: Message, actionConfig?: any): Promise<boolean> | boolean{
    let q = `${actionConfig.fieldName} = '${message}'`
    switch(message.type){
      case MessageType.StringSelectionChange:
        q = `${actionConfig.fieldName} = '${(message as StringSelectionChangeMessage).str}'`
        break;
      case MessageType.DataRecordsSelectionChange:
        q = `${actionConfig.fieldName} = ` +
          `'${(message as DataRecordsSelectionChangeMessage).records[0].getFieldValue(actionConfig.fieldName)}'`
        break;
    }

    getAppStore().dispatch(appActions.widgetStatePropChange(this.widgetId, 'queryString', q));
    return true;
  }
}
```

`React.PureComponent<ActionSettingProps>` を継承するクラスを作成します。メッセージ アクションの設定は、`onSettingChange` メソッドを通じて変更できます。

```jsx
this.props.onSettingChange({
actionId: this.props.actionId,
config: this.props.config.set('fieldName', field['name']).set('useDataSource',{
  dataSourceId: this.props.config.useDataSource.dataSourceId,
  mainDataSourceId: this.props.config.useDataSource.mainDataSourceId,
  dataViewId: this.props.config.useDataSource.dataViewId,
  rootDataSourceId: this.props.config.useDataSource.rootDataSourceId,
  fields: allSelectedFields.map(f => f.jimuName)
})
});

```

`manifest.json` には、メッセージ アクション拡張機能の場所や情報を指定する `messageActions` プロパティがあります。
```jsx
"messageActions": [
  {
    "name": "query",
    "label": "Query",
    "uri": "actions/query-action",
    "settingUri": "actions/query-action-setting"
  }
]
```

{{< callout >}}
メッセージ アクションの作成について詳しくは、[メッセージ サブスクライバーのコード例](https://github.com/Esri/arcgis-experience-builder-sdk-resources/tree/master/widgets/message-subscriber)を参照してください。
{{< /callout >}}