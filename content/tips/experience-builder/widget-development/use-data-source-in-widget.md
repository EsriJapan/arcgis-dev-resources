+++
title = "ウィジェットでデータ ソースを使用"
description = "ウィジェットでデータ ソースを使用する方法について紹介します。"
weight = 9
aliases = ["/use-data-source-in-widget/"]
+++

出典：ArcGIS Experience Builder - Guide - [Use data source in widget](https://developers.arcgis.com/experience-builder/guide/use-data-source-in-widget/)


[データ ソース](http://esrijapan.github.io/arcgis-dev-resources/tips/experience-builder/core-concepts/data-source/)は、ウィジェットがデータにアクセスする方法を定義します。データ ソースを使用して行いたいことは様々ですが、それぞれについて紹介します。

- ウィジェットの設定でデータ ソースを選択
- ウィジェット ランタイムのデータを読み込んで表示
- ユーザー入力に基づくデータのフィルタリングやクエリー
- データ上の選択を処理
- ArcGIS Maps SDK for JavaScript のフィーチャ オブジェクトとデータ ソースの同期
- ウィジェットで出力データ ソースの生成
- ウィジェットでメッセージの公開

{{< callout type="info" >}}

本ドキュメントで使用している appConfig という変数は、アプリの config JSON オブジェクトを指します。ArcGIS Online または Enterprise 版では、アプリの config JSON はアイテム データとして保存され、Developer Edition では server/public/apps/[appId]/config.json (公開版) または server/public/apps/[appId]/resources/config.json (ドラフト版) の下に保存されます。

{{< /callout >}}

## ウィジェットの設定でデータ ソースを選択

ウィジェットの設定でデータ ソースを選択するには、[`DataSourceSelector`](https://developers.arcgis.com/experience-builder/storybook/?path=/story/components-jimu-ui-advanced-data-source-selector-datasourceselector--single-selection-no-default-selected-ds) コンポーネントを使用する必要があります。Experience Builder は、複数の種類のデータ ソースをサポートしています。これらのデータ ソースは `jimu-core` と `jimu-arcgis` の 2 つのパッケージに入っています。`jimu-core` の [DataSourceTypes](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSourceTypes) と `jimu-arcgis` の [DataSourceTypes](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/DataSourceTypes) をご覧ください。`jimu-arcgis` のデータ ソースは ArcGIS Maps SDK for JavaScript に依存しており、`jimu-core` のデータ ソースは依存していません。

`DataSourceSelector` コンポーネントを使用するには、`types` プロパティを通じてウィジェットがサポートするデータ ソースの種類を設定する必要があります。データ ソースを選択した後、`onChange` コールバックにより選択されたデータ ソースを取得することができます。`onChange` コールバックでは、`props.onSettingChange()` を呼び出して、選択したデータ ソースを `appConfig` に保存する必要があります (`appConfig.widgets[widgetId].useDataSources`)。ユーザーが新しいデータ ソースを追加した場合、新しく追加されたデータ ソースは `appConfig.dataSources` に保存されます。[こちらのサンプルウィジェット](https://developers.arcgis.com/experience-builder/sample-code/widgets/feature-layer-function/)を参照してください。

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

データ ソースを選択した後、ユーザーがデータからフィールドを選択できるようにしたい場合があります。そのためには、[FieldSelector](https://developers.arcgis.com/experience-builder/storybook/?path=/story/components-jimu-ui-advanced-data-source-selector-fieldselector--list-single-selection) コンポーネントを使用します。データ ソースと同様に、`appConfig.widgets[widgetId].useDataSources` にも選択したフィールドを保存する必要があります。

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

ウィジェット設定でデータ ソースを選択すると、ウィジェット ランタイムは `props.useDataSources` で選択したデータ ソースを取得することができます。データを読み込むには、`DataSource` インスタンスを使用します。`DataSource` インスタンスを取得するには、`DataSourceManager` または`DataSourceComponent` を使用します。`DataSourceComponent` を使用する場合は、`useDataSource` プロパティを渡します。`DataSource` インスタンスを取得するには、`onDataSourceCreated` コールバックを使用します。

データを読み込むには、render 関数を使用してデータを表示します。こちらの[サンプル ウィジェット](https://developers.arcgis.com/experience-builder/sample-code/widgets/feature-layer-function/)を参照してください。別の方法として、`onDataSourceInfoChange` コールバックを使用し、データ ソースの現在のデータに応じてこのコールバック関数でウィジェットの UI を更新することができます。ウィジェットがデータをロードする必要がある場合、`query` と `widgetId` プロパティを渡します。フレームワークは、複数のウィジェットが同じデータ ソースに適用するクエリー パラメータを管理するのにこのプロパティを使用するため、`widgetId` は必須です。

データをロードしたいが、データ ソースのデータを変更したくない場合は、`localId` プロパティを渡します。これにより、ローカルデータ ソースが作成され、使用することができます。推奨される localId のパターンは、例えば、`widget_1_my_local` のように `widgetId + ???` とします。

`DataSourceComponent` をレンダリングすると、データ ソースのインスタンスが作成されますが、データは初期状態ではロードされません。なぜなら、`query` プロパティを渡すことを期待しているので、別のネットワーク要求が発生するためです。読み込まれたデータを取得するには、`dataSource.getRecords()` を使用します。データはページングされ、デフォルトのページング サイズは 100 です。ユーザーはビルダー データ設定パネルでページング サイズを変更することができます。ロードされたデータはクライアント上にキャッシュされ、クエリー条件が変更されるとキャッシュはクリアされます。

データを表示する際、表示されるページ サイズはクエリーのページ サイズと同じである必要はありません。例えば、クエリーのページ サイズが 100 の場合、`dataSource.getRecordsByPage(1, 10)` を使用して、最初の 10 レコードを取得して表示することが可能です。

レコードの総数を取得するには、`queryCount` プロパティを渡し、`dataSource.count` で件数を取得します。

データ ソース情報が変更されるたびに、データ レンダリング関数と`onDataSourceInfoChange` コールバックが呼び出されます。情報の内容は以下の通りです。
- `instanceStatus`: データ ソースのインスタンスが正常に作成されたかどうか
- `status`: データがロード中か、ロードされたか
- `countStatus`: データのカウントがロード中か、ロードされたか
- `selectedIds`: 選択されたデータ ID
- `selectOptions`: クエリ (フィルター) でデータを選択すると、データ ソースはクエリを実行し、その結果を selectedIds に格納する
- `widgetQueries`: データ ソースに適用されるクエリ (フィルター) ウィジェット
- `version`: バージョン番号は、クライアント側でデータの変更を管理するために使用されます。そのため、データ ソース利用者はデータが変更されたことを認識することができます。
- `gdbVersion`: ブランチ バージョニングをサポートするフィーチャ サービスのためのもの。ブランチ バージョン管理ウィジェットでブランチ バージョンが切り替わると、そのバージョンがここに保存されます。

多くの場合、ウィジェットは現在のデータ ソース情報と以前の情報とを比較して、何を更新する必要があるかを判断する必要があります。

ウィジェットがデータ ソースの情報変更を聞く必要があるが、データ ソースのデータ レコードを使う必要がない場合、`query` パラメーターを省略し、`onQueryRequired` コールバックでクエリーを実行することが可能です。

データ ソースのフィールドを取得するには、`dataSource.getSchema().fields` を使用します。

## ユーザー入力に基づくデータのフィルタリングやクエリ

ウィジェットがデータをフィルタリングすると、データ ソース インスタンスのデータが変更され、すべてのウィジェットがその変更を観察します。ウィジェットがデータ ソースを介してデータをクエリーする場合、データ ソース インスタンスのデータは影響を受けません。

複数のウィジェットが同じデータ ソースにフィルターを適用する場合、属性フィルターは `and` 演算子で結びつけられます。ジオメトリ フィルターの場合、最後にジオメトリ フィルターを適用したウィジェット (アプリ設定でのウィジェット追加順) からのフィルターが使用されます。

- データ ソースにフィルタをかけるには、データ ソースの設定により、基本的に 2 つの方法があります。
    - ウィジェットでデータを読み込む場合は、以下のように`DataSourceComponent` を使うのがおすすめです。
    
    ```tsx
    <DataSourceComponent useDataSource={} widgetId={} query={}>
        { Your render method }
    </DataSourceComponent>
    ```
    `DataSourceComponent` の使用例は、[Message subscriber のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/message-subscriber/)と [Server-side output data source のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/server-side-output/)に記載されています。

    {{< callout type="info" >}}
    
    `dataSource.load()` を使用して、データの読み込みとフィルタリングも可能です。

    {{< /callout >}}

    - ウィジェットがデータを読み込まない場合は、`Data Source` の `updateQueryParams()` 関数を使用することができます。例として、[Filter feature layer](https://developers.arcgis.com/experience-builder/sample-code/widgets/filter-feature-layer/) のサンプルをご覧ください。

- データ ソースからデータをクエリーするには、`dataSource.query()` を使用します。データをクエリーする際には、このデータ ソースに適用されているフィルターも使用されます。

## データ上の選択を処理

Experience Builder アプリで設計された選択の動作は、すべてのウィジェットが同じ選択を更新し、観察することです。例えば、ユーザーがリスト ウィジェット内のレコードを選択すると、選択ビューを使用しているテキスト ウィジェットにはその選択内容が表示されます。すべてのデータ ソースには、選択範囲を管理する選択範囲データ ビューがあります。選択データビューの他に、選択されたレコードの ID が Redux アプリ ストアーに保存されるので、データ ソースを使用するウィジェットは、選択内容が変更されたときに通知を受けることができます。

データ ソース内のデータ レコードを選択するには、`dataSource.selectRecordById()` または `dataSource.selectRecordsByIds()` を使用することができます。レコードがデータ ソースに読み込まれている場合は、2 番目のパラメータを渡す必要はありません。そうでない場合は、選択項目を使用する他のウィジェットがレコードを読み込めるようにするために、2 番目のパラメーターを渡す必要があります。

選択範囲を読み取るには、`dataSource.getSelectedRecords()` を使用します。

### WebMap/WebScene の使用

ArcGIS Maps SDK for JavaScript の WebMap と WebScene は、データ ソースとして `jimu-arcgis` パッケージでラッピングされています。WebMap にアクセスする場合は `WebMapDataSource` を、WebScene にアクセスする場合は `WebSceneDataSource` を使用します。これらのデータ ソースの使用方法については、[MapView のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/map-view/)をご覧ください。WebMap と WebScene オブジェクトに加えて、これらのオブジェクト内のすべてのレイヤーはデータ ソースとしてラッピングされているため、`getChildDataSources()` を呼び出してすべてのレイヤー データ ソースを取得できます。サポートされるレイヤーとサービスは、`SupportedLayerServiceTypes` と `SupportedServiceTypes` で定義されています。ArcGIS Maps SDK for JavaScript の`layer`があり、関連するレイヤーのデータ ソースを検索したい場合は、`mapDs.getDataSourceByLayer()` または `mapDs.createDataSourceByLayer()` を実行します。`DataSourceComponent` または `DataSourceManager` でマップ データ ソース (`WebMapDataSource` または `WebSceneDataSource`) を作成した場合、アプリの起動後、その子データ ソースは自動的に作成されないことに注意してください。すべての子データ ソースを作成するには、`await mapDs.childDataSourcesReady()` を実行します。

### FeatureLayer の使用

ワークフローによっては、フィーチャ レイヤーで直接動作する軽量なエクスペリエンスを作成する必要があります。このシナリオでは、`FeatureLayerDataSource` クラスを使用します。一般的に、スタンドアロン レイヤーを使用するウィジェットは、`layer` プロパティを持たない `FeatureLayerDataSource` オブジェクトを取得しますが、Web マップまたは Web シーンからのフィーチャ レイヤーを使用すると、`layer` プロパティを持つ `FeatureLayerDataSource` オブジェクトを返します。`Layer` オブジェクトは ArcGIS Maps SDK for JavaScript から提供されています。ポップアップ情報を取得するには `featureLayerDs.getPopupInfo()` を、ID フィールドを取得するには `featureLayerDs.getIdField()` を、ジオメトリ タイプを取得するには `featureLayerDs.getGeometryType()` を使用します。

```tsx
 const getLayerObject = (ds: FeatureLayerDataSource) => {
    return ds.layer; // this can be null
 }
```

### ウィジェット間のデータ共有

ウィジェットは、多くの場合、同じデータを共有します。この良い例が、エクスペリエンスでマップ ウィジェットとリスト ウィジェットを使用する場合です。リスト ウィジェットでフィーチャを選択すると、対応するフィーチャがマップ上で選択されます。これを実現する最も簡単な方法は、両方のウィジェットに同じデータ ソースを使用することです。たとえば、リスト ウィジェットでアイテムが選択されると、ウィジェットは `datasource.selectRecord()` を呼び出して、app store のデータ ソースの状態を更新します。これにより、マップ ウィジェットでは、現在選択されているアイテムを適宜レンダリングすることができます。また、現在選択されているアイテムの ID が URL に配置されるため、現在のアプリの状態を他の人と共有することが可能になります。

## ArcGIS Maps SDK for JavaScript のフィーチャ オブジェクトとデータ ソースの同期

Experience Builder ウィジェットでは、ArcGIS Maps SDK for JavaScript を使用してフィーチャを取得することができます。その後、他のウィジェットがこれらのフィーチャを使用できるようにしたい場合があります。たとえば、マップ上でこれらのフィーチャをハイライト表示したり、リスト ウィジェットでこれらのフィーチャを表示したりする必要があるかもしれません。これには、以下の 3 つのオプションがあります。

1. データ ソースでこれらのフィーチャ レコードを選択する
    - 使用できるデータ ソース インスタンスがあれば、`dataSource.selectRecordsByIds()` を呼んでこれらのレコードを選択することができます。`Graphic` インスタンスを取得する場合は、まず `FeatureRecord` インスタンスを作成する `(featureLayerDataSource.buildRecord(graphic))` 必要があります。
2. ウィジェットから出力データ ソースを生成する
    - [Widget output data source](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-source/#widget-output-data-source) サンプルを参照してください。
3. メッセージを公開する
    - ウィジェットが何らかのフィーチャを生成する場合、`DataRecordSetChangeMessage` メッセージを公開することで、他のウィジェットが監視できるようになります。

## MapView/SceneView または LayerView での作業

ウィジェットがデータ ソースと連動する場合、[MapView/SceneView](../../core-concepts/map-scene-view/) とも連動する必要がある場合が多くあります。ウィジェットが `JimuMapViewComponent` によって`JimuMapView` インスタンスを取得した後、`jimuMapView.dataSourceId` によって MapView/SceneView の対応するデータ ソースを取得し、`jimuMapView.jimuLayerViews` によって関連レイヤーを取得することができます。`jimuLayerView` インスタンスを介して、`jimuMapView.dataSource` によって、レイヤー ビューの対応するデータ ソースを取得することもできます。一般に、レイヤーからデータ ソースと同期する機能を取得するには、以下のオプションがあります。

- フィーチャの ID フィールドを使用して、データ ソースから関連するデータ レコードを検索
- `FeatureDataRecord` インスタンスを作成し、そのフィーチャに対応するデータ レコードを作成
- `FeatureDataRecord` のインスタンスから、`featureDataRecord.getFeature()` でフィーチャを取得