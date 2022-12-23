+++
title = "ウィジェットでデータソースを使用"
description = "ウィジェットでデータソースを使用する方法について紹介します。"
weight = 9
aliases = ["/use-data-source-in-widget/"]
+++

出典：ArcGIS Experience Builder - Guide - [Use data source in widget](https://developers.arcgis.com/experience-builder/guide/use-data-source-in-widget/)


[データソース](http://esrijapan.github.io/arcgis-dev-resources/tips/experience-builder/core-concepts/data-source/)は、ウィジェットがデータにアクセスする方法を定義します。データソースを使用して行いたいことは様々ですが、それぞれについて紹介します。

- ウィジェットの設定でデータソースを選択
- ウィジェット ランタイムのデータを読み込んで表示
- ユーザー入力に基づくデータのフィルタリングやクエリ
- データ上の選択を処理
- ArcGIS Maps SDK for JavaScript のフィーチャ オブジェクトとデータソースの同期
- ウィジェットで出力データソースの生成
- ウィジェットでメッセージの公開

{{% notice note %}}

本ドキュメントで使用している appConfig という変数は、アプリの config JSON オブジェクトを指します。ArcGIS Online または Enterprise 版では、アプリの config JSON はアイテム データとして保存され、Developer Edition では server/public/apps/[appId]/config.json (公開版) または server/public/apps/[appId]/resources/config.json (ドラフト版) の下に保存されます。

{{% /notice %}}

## ウィジェットの設定でデータソースを選択

ウィジェットの設定でデータソースを選択するには、[`DataSourceSelector`](https://developers.arcgis.com/experience-builder/storybook/?path=/story/components-jimu-ui-advanced-data-source-selector-datasourceselector--single-selection-no-default-selected-ds) コンポーネントを使用する必要があります。Experience Builder は、複数の種類のデータソースをサポートしています。これらのデータソースは `jimu-core` と `jimu-arcgis` の 2 つのパッケージに入っています。`jimu-core` の [DataSourceTypes](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSourceTypes) と `jimu-arcgis` の [DataSourceTypes](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/DataSourceTypes) をご覧ください。`jimu-arcgis` のデータソースは ArcGIS Maps SDK for JavaScript に依存しており、`jimu-core` のデータソースは依存していません。

`DataSourceSelector` コンポーネントを使用するには、`types` プロパティを通じてウィジェットがサポートするデータソースの種類を設定する必要があります。データソースを選択した後、`onChange` コールバックにより選択されたデータソースを取得することができます。`onChange` コールバックでは、`props.onSettingChange()` を呼び出して、選択したデータソースを `appConfig` に保存する必要があります (`appConfig.widgets[widgetId].useDataSources`)。ユーザーが新しいデータソースを追加した場合、新しく追加されたデータソースは `appConfig.dataSources` に保存されます。[こちらのサンプルウィジェット](https://developers.arcgis.com/experience-builder/sample-code/widgets/feature-layer-function/)を参照してください。

```tsx
<DataSourceSelector
   types={Immutable([AllDataSourceTypes.FeatureLayer])}
   useDataSources={props.useDataSources}
   useDataSourcesEnabled={props.useDataSourcesEnabled}
   onToggleUseDataEnabled={onToggleUseDataEnabled}
   onChange={onDataSourceChange}
   widgetId={props.id}
/>
```

データソースを選択した後、ユーザーがデータからフィールドを選択できるようにしたい場合があります。そのためには、[FieldSelector](https://developers.arcgis.com/experience-builder/storybook/?path=/story/components-jimu-ui-advanced-data-source-selector-fieldselector--list-single-selection) コンポーネントを使用します。データソースと同様に、`appConfig.widgets[widgetId].useDataSources` にも選択したフィールドを保存する必要があります。

```tsx
{
   props.useDataSources && props.useDataSources.length > 0 &&
   <FieldSelector
      useDataSources={props.useDataSources}
      onChange={onFieldChange}
      selectedFields={props.useDataSources[0].fields || Immutable([])}
   />
}
```

## ウィジェット ランタイムのデータを読み込んで表示

ウィジェット設定でデータソースを選択すると、ウィジェットランタイムは `props.useDataSources` で選択したデータソースを取得することができます。データを読み込むには、`DataSource` インスタンスを使用します。`DataSource` インスタンスを取得するには、`DataSourceManager` または`DataSourceComponent` を使用します。`DataSourceComponent` を使用する場合は、`useDataSource` プロパティを渡します。`DataSource` インスタンスを取得するには、`onDataSourceCreated` コールバックを使用します。

データを読み込むには、render 関数を使用してデータを表示します。[こちらのサンプルウィジェット](https://developers.arcgis.com/experience-builder/sample-code/widgets/feature-layer-function/)を参照してください。別の方法として、`onDataSourceInfoChange` コールバックを使用し、データソースの現在のデータに応じてこのコールバック関数でウィジェットの UI を更新することができます。ウィジェットがデータをロードする必要がある場合、`query` と `widgetId` プロパティを渡します。フレームワークは、複数のウィジェットが同じデータソースに適用するクエリパラメータを管理するのにこのプロパティを使用するため、`widgetId` は必須です。

データをロードしたいが、データソースのデータを変更したくない場合は、`localId` プロパティを渡します。これにより、ローカルデータソースが作成され、使用することができます。推奨される localId のパターンは、例えば、`widget_1_my_local` のように `widgetId + ???` とします。

`DataSourceComponent` をレンダリングすると、データソースのインスタンスが作成されますが、データは初期状態ではロードされません。なぜなら、`query` プロパティを渡すことを期待しているので、別のネットワーク要求が発生するためです。読み込まれたデータを取得するには、`dataSource.getRecords()` を使用します。データはページングされ、デフォルトのページングサイズは 100 です。ユーザーはビルダーデータ設定パネルでページングサイズを変更することができます。ロードされたデータはクライアント上にキャッシュされ、クエリ条件が変更されるとキャッシュはクリアされます。

データを表示する際、表示されるページサイズはクエリのページサイズと同じである必要はありません。例えば、クエリのページサイズが 100 の場合、`dataSource.getRecordsByPage(1, 10)` を使用して、最初の 10 レコードを取得して表示することが可能です。

レコードの総数を取得するには、`queryCount` プロパティを渡し、`dataSource.count` で件数を取得します。

データソース情報が変更されるたびに、データレンダリング関数と`onDataSourceInfoChange` コールバックが呼び出されます。情報の内容は以下の通りです。
- instanceStatus: データソースのインスタンスが正常に作成されたかどうか
- status: データがロード中か、ロードされたか
- countStatus: データのカウントがロード中か、ロードされたか
- selectedIds: 選択されたデータ ID
- widgetQueries: データソースに適用されるクエリ(フィルタ)ウィジェット
- version: バージョン番号は、クライアント側でデータの変更を管理するために使用されます。そのため、データソース利用者はデータが変更されたことを認識することができます。
- gdbVersion: ブランチ バージョニングをサポートするフィーチャ サービスのためのもの。ブランチ バージョン マネージメント ウィジェットでブランチ バージョンが切り替わると、そのバージョンがここに保存されます。

多くの場合、ウィジェットは現在のデータソース情報と以前の情報とを比較して、何を更新する必要があるかを判断する必要があります。

ウィジェットがデータソースの情報変更を聞く必要があるが、データソースのデータレコードを使う必要がない場合、`query` パラメータを省略し、`onQueryRequired` コールバックでクエリを実行することが可能です。

データソースのフィールドを取得するには、`dataSource.getSchema().fields` を使用します。

## ユーザー入力に基づくデータのフィルタリングやクエリ 

ウィジェットがデータをフィルタリングすると、データソース インスタンスのデータが変更され、すべてのウィジェットがその変更を観察します。ウィジェットがデータソースを介してデータをクエリする場合、データソースインスタンスのデータは影響を受けません。

複数のウィジェットが同じデータソースにフィルタを適用する場合、属性フィルタは `and` 演算子で結びつけられます。ジオメトリ フィルタの場合、最後にジオメトリ フィルタを適用したウィジェット (アプリ設定でのウィジェット追加順) からのフィルタが使用されます。

- データソースにフィルタをかけるには、データソースの設定により、基本的に2つの方法があります。
    - ウィジェットでデータを読み込む場合は、以下のように`DataSourceComponent` を使うのがおすすめです。
    
    ```tsx
    <DataSourceComponent useDataSource={} widgetId={} query={}>
    { Your render method }
    </DataSourceComponent>
    ```
    `DataSourceComponent` の使用例は、[Message subscriber のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/message-subscriber/)と [Server-side output data source のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/server-side-output/)に記載されています。

    {{% notice note %}}
    
    `dataSource.load()` を使用して、データの読み込みとフィルタリングも可能です。

    {{% /notice %}}

    - ウィジェットがデータを読み込まない場合は、`Data Source` の `updateQueryParams()` 関数を使用することができます。例として、[Filter feature layer](https://developers.arcgis.com/experience-builder/sample-code/widgets/filter-feature-layer/) のサンプルをご覧ください。

- データソースからデータをクエリするには、`dataSource.query()` を使用します。データをクエリする際には、このデータソースに適用されているフィルタも使用されます。

## データ上の選択を処理

Experience Builder アプリで設計された選択の動作は、すべてのウィジェットが同じ選択を更新し、観察することです。例えば、ユーザーがリスト ウィジェット内のレコードを選択すると、選択ビューを使用しているテキスト ウィジェットにはその選択内容が表示されます。すべてのデータソースには、選択範囲を管理する選択範囲データ ビューがあります。選択データビューの他に、選択されたレコードの ID が Redux アプリストアに保存されるので、データソースを使用するウィジェットは、選択内容が変更されたときに通知を受けることができます。

データソース内のデータレコードを選択するには、`dataSource.selectRecordById()` または `dataSource.selectRecordsByIds()` を使用することができます。レコードがデータソースに読み込まれている場合は、2 番目のパラメータを渡す必要はありません。そうでない場合は、選択項目を使用する他のウィジェットがレコードを読み込めるようにするために、2 番目のパラメータを渡す必要があります。

選択範囲を読み取るには、`dataSource.getSelectedRecords()` を使用します。

### WebMap/WebScene の使用

ArcGIS Maps SDK for JavaScript の WebMap と WebScene は、データソースとして `jimu-arcgis` パッケージでラッピングされています。WebMap にアクセスする場合は `WebMapDataSource` を、WebScene にアクセスする場合は `WebSceneDataSource` を使用します。これらのデータソースの使用方法については、[MapView のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/map-view/)をご覧ください。WebMap と WebScene オブジェクトに加えて、これらのオブジェクト内のすべてのレイヤーはデータソースとしてラッピングされているため、`getChildDataSources()` を呼び出してすべてのレイヤーデータソースを取得できます。サポートされるレイヤーとサービスは、`SupportedLayerServiceTypes` と `SupportedServiceTypes` で定義されています。

### FeatureLayer の使用

ワークフローによっては、フィーチャ レイヤーで直接動作する軽量なエクスペリエンスを作成する必要があります。このシナリオでは、`FeatureLayerDataSource` クラスを使用します。一般的に、スタンドアロン レイヤーを使用するウィジェットは、`layer` プロパティを持たない `FeatureLayerDataSource` オブジェクトを取得しますが、Web マップまたは Web シーンからのフィーチャ レイヤーを使用すると、`layer` プロパティを持つ `FeatureLayerDataSource` オブジェクトを返します。`Layer` オブジェクトは ArcGIS Maps SDK for JavaScript から提供されています。

```tsx
 const getLayerObject = (ds: FeatureLayerDataSource) => {
    return ds.layer; // this can be null
 }
```

### ウィジェット間のデータ共有

ウィジェットは、多くの場合、同じデータを共有します。この良い例が、エクスペリエンスでマップ ウィジェットとリスト ウィジェットを使用する場合です。リスト ウィジェットでフィーチャを選択すると、対応するフィーチャがマップ上で選択されます。これを実現する最も簡単な方法は、両方のウィジェットに同じデータソースを使用することです。たとえば、リスト ウィジェットでアイテムが選択されると、ウィジェットは `datasource.selectRecord()` を呼び出して、app store のデータソースの状態を更新します。これにより、マップ ウィジェットでは、現在選択されているアイテムを適宜レンダリングすることができます。また、現在選択されているアイテムの ID が URL に配置されるため、現在のアプリの状態を他の人と共有することが可能になります。

## ArcGIS Maps SDK for JavaScript のフィーチャ オブジェクトとデータソースの同期

Experience Builder ウィジェットでは、ArcGIS Maps SDK for JavaScript を使用してフィーチャを取得することができます。その後、他のウィジェットがこれらのフィーチャを使用できるようにしたい場合があります。たとえば、マップ上でこれらのフィーチャをハイライト表示したり、リスト ウィジェットでこれらのフィーチャを表示したりする必要があるかもしれません。これには、以下の 3 つのオプションがあります。

1. データソースでこれらのフィーチャ レコードを選択する
    - 使用できるデータソース インスタンスがあれば、`dataSource.selectRecordsByIds()` を呼んでこれらのレコードを選択することができます。`Graphic` インスタンスを取得する場合は、まず`FeatureRecord` インスタンスを作成する必要があります。
2. ウィジェットから出力データソースを生成する
    - [Widget output data source](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-source/#widget-output-data-source) サンプルを参照してください。
3. メッセージを公開する
    - ウィジェットが何らかのフィーチャを生成する場合、`DataRecordSetChangeMessage` メッセージを公開することで、他のウィジェットがサブスクライブできるようになります。

## MapView/SceneView または LayerView での作業

ウィジェットがデータソースと連動する場合、MapView/SceneView とも連動する必要がある場合が多くあります。ウィジェットが `JimuMapViewComponent` によって`JimuMapView` インスタンスを取得した後、`jimuMapView.dataSourceId` によって MapView/SceneView の対応するデータソースを取得し、`jimuMapView.jimuLayerViews` によって関連レイヤーを取得することができます。`jimuLayerView` インスタンスを介して、`jimuMapView.dataSource` によって、レイヤービューの対応するデータソースを取得することもできます。一般に、レイヤーからデータソースと同期する機能を取得するには、以下のオプションがあります。

- フィーチャの `objectId` を使用して、データソースから関連するデータレコードを検索
- `FeatureDataRecord` インスタンスを作成し、そのフィーチャに対応するデータレコードを作成
- `FeatureDataRecord` のインスタンスから、`featureDataRecord.getFeature()` でフィーチャを取得