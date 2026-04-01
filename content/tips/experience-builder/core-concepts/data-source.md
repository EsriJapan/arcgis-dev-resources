+++
title = "データ ソース (Data source)"
weight = 10
aliases = ["/data-source/"]
+++

出典：ArcGIS Experience Builder - Guide - [Data sources](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-source/)

## データ ソース (Data source) とは
ArcGIS Experience Builder のデータソースは、ウィジェットがデータにアクセスし、データを管理する方法を定義します。データソースは、リモート サーバーやローカルのコレクション、あるいは他のウィジェットによって生成されたデータなど、あらゆるデータ型に対して、ウィジェットが標準化された方法で操作できるようにします。

データソースは、ウィジェットとデータの架け橋となり、以下の処理を行います。
- リモート データ アクセス： 外部サービスやデータベースからのデータ取得。
- ローカル データ管理： クライアント サイドのデータ コレクションの保存と管理。
- ウィジェット コミュニケーション： 出力データソースを介してウィジェット間でデータを共有。

## データ ソースの構造
すべてのデータソースは、以下の構成要素からなる一貫した構造を持っています。
- スキーマ： データの構造とフィールドを定義します。
- レコード： 現在のクエリー条件に基づいてソースから取得されたデータが含まれており、getRecords() メソッドを使用して取得できます。
- ステータス： データソース インスタンスの状態とデータ読み込みの状態を示します。インスタンスの状態には、`NotCreated`、`Created`、`CreateError` が含まれます。データ読み込みの状態には、`NotReady`、`Unloaded`、`Loading`、`Loaded`、`LoadError` が含まれます。
- タイプと ID： データ ソースのタイプと一意の識別子を特定します。

jimu-core パッケージで定義されている DataSource インターフェースは、以下のメソッドを提供します。
- `id`： データ ソースの一意の識別子
- `type`： データ ソースのタイプを識別するために使用されるプロパティ
- `getSchema()`： データソースのスキーマとフィールドにアクセス
- `getRecords()`： データ ソースからデータ レコードを取得
- `getStatus()`：  現在のステータス（`NotReady`、`Unloaded`、`Loading`、`Loaded`、`LoadError`）を返す

**データソース管理**： データ ソースは、`DataSourceManager` によって管理され、データ ソースの作成や取得が行われます。データ ソース オブジェクトは `DataSourceManager` で管理され、データ ソース情報は Redux のアプリ ストアで管理されます。 `DataSourceComponent` を使用する場合、コンポーネントは `DataSourceManager` を呼び出してオンデマンドでデータ ソースを作成し、コールバック プロパティを通じてデータ ソース オブジェクトと `dataSourceInfo` を返します。 データソースの設定は `appConfig.dataSources` に保存され、データ ソースのインスタンスはデータ ソース マネージャーによって管理されます。

**データ ソース コンポーネント**： このコンポーネントは、`useDataSource` プロパティを受け取り、コールバックを通じてデータ ソース オブジェクトとそのステータス情報を返すことで、データ ソースの使用を簡素化します。また、子として関数を受け入れることもでき、これを使用してデータ ソース オブジェクトやデータをレンダリングするための情報を取得できます。このコンポーネントは、オプションの `query` プロパティを受け付けることができ、クエリーが変更されるとデータを再読み込みします。

## データ ソース タイプ
ArcGIS Experience Builder では、さまざまなデータ シナリオに対応するために、多くの種類のデータ ソースが用意されています。以下に、重要なデータ ソースの種類をいくつか挙げます。

- **QueriableDataSource**： クエリー操作をサポートするデータ サービス
- **ArcGISQueriableDataSource**： 一般的なクエリー動作を持つ ArcGIS サービス
- **FeatureLayerDataSource**： フィーチャ レイヤーのデータにアクセス
- **MapServiceDataSource**： マップ サービス データにアクセス
- **FeatureServiceDataSource**： フィーチャ サービスのデータにアクセス
- **WebMapDataSource**： ArcGIS Maps SDK for JavaScript の WebMap をラップ
- **WebSceneDataSource**： ArcGIS Maps SDK for JavaScript の WebScene をラップ

## データ ソースの使用方法
ウィジェットでデータ ソースを操作する手順は以下の通りです。

1. [データ ソースの選択](./#1-データ-ソースの選択)
ウィジェットに必要なデータソースを選択してください。

2. [データ ソースの設定](./#2-データ-ソースの設定)
データ ソースのプロパティとクエリー パラメータを設定します。

3. [データにアクセス](./#3-データにアクセス)
DataSourceComponent または直接メソッドを使用してデータを取得します。

### 1. データ ソースの選択
ウィジェットのデータ ソースを選択するには、以下の手順に従ってください。
1. ウィジェットの設定で `DataSourceSelector` コンポーネントを使用
2. 利用可能なデータ ソースから選択するか、新しいデータ ソースを追加
3. 必要に応じてデータ ソースのプロパティを設定

### 2. データ ソースの設定
ウィジェットがデータ ソースを使用する方法を設定するには、以下の手順に従ってください。
1. データをフィルタリングするためのクエリー パラメータの設定
2. 取得するフィールドの指定
3. ページネーションとキャッシュ設定の構成

### 3. データにアクセス
ウィジェット内のデータにアクセスするには、以下の手順に従ってください。
1. **DataSourceComponent**： ほとんどのケースにおける推奨されるアプローチ
2. **メソッドで直接**：  特定の要件に応じて、`dataSource.load()` または `dataSource.query()` を使用
3. **ステータスの監視**： データにアクセスする前に、データ ソースの状態を確認してください

## データソースの高度なコンセプト
高度なデータ ソースのコンセプトは、データの構成、スコープ設定、共有を行うためのパターンを提供し、ウィジェットが効率的かつ独立して動作できるようにします。これには、データ ソース セット、データ ビュー、ローカル データ ソース、ソース レコード、およびウィジェット出力データ ソースが含まれます。これらの違いはあるものの、いずれも `DataSource` インターフェースに準拠しており、`DataSourceManager` を通じて作成、追跡、更新されるため、クエリー、読み込み、フィルタリング、およびステータス管理を行うための統一された API が提供されます。

### データ ソース セット
`DataSourceSet` は、子データ ソースを含むデータ ソースであり、関連するデータ コレクションを扱う際に便利です。`WebMapDataSource` は `DataSourceSet` です。

データ ソース セットの主な機能は以下の通りです。
- 複数の関連データ ソースが含まれる
- 子データ ソースはオンデマンドで作成される
- `getChildDataSources` を使用して子データ ソースを取得する
- `parentDataSource` を使用して親データ ソースにアクセスする
- `createDataSourceById(dsId)` を使用して子データ ソースを作成する

### データ ビュー
データ ビューは、リレーショナル データ ベースのビューと同様に、データ ソースのローカル ビューを提供します。 これにより、複数のウィジェットが異なる視点を持つつも、同じデータソースを共有できるようになります。

データ表示の特徴は、以下の通りです。
- 主要なデータ ソースから作成される
- データ ソースと同じインターフェースを使用する
- 選択内容は、メインのデータ ソースとすべてのビューで共有される
- `getMainDataSource` を使用してメインのデータ ソースにアクセスする

### ローカル データ ソース
ローカル データ ソースとデータ ビューを使用することで、ウィジェットは元のデータ ソースに影響を与えることなく、フィルタリングされたデータを処理できます。これは、異なるデータ表示が必要なドロップダウン リストなどの場面で役立ちます。

ローカル データ ソースを使用する方法は、以下の通りです。
- `DataSourceComponent` を `localId` パラメーターと共に使用する
- `DataSourceManager().getinstance().createLocalDataSource()` を使用する
- ローカル データ ソースに適用されたフィルターは、元のデータ ソースには影響しない

### ウィジェットの出力データ ソース
ウィジェットは、他のウィジェットが利用可能な出力データ ソースを生成することができます。これにより、アプリケーション内のウィジェット間でデータをやり取りできるようになります。

出力データ ソースを作成する方法は、以下の通りです。
1. `this.props.onSettingChange` を使用して、ウィジェットの設定に出力データ ソースの設定を保存
2. 出力データ ソースは、アプリ設定の `dataSources` セクションに保存さる
3. 他のウィジェットも、他のデータ ソースと同様にこの出力データ ソースを使用できる

**重要**： 出力データ ソースが作成されると、そのステータスは `NotReady` になります。出力データ ソースを生成するウィジェットは、データの準備が整った時点でデータ ソースを更新し、その後、データ ソースのステータスを `Unloaded` に変更する必要があります。これにより、他のウィジェットがデータが使用可能になったことを認識できるようになります。

出力データ ソースのタイプは、以下の通りです。
- **サーバー サイド**：リモート サービスに接続
  - `outputDs.updateQueryParams(queryParams, widgetId)` を使用
  - `outputDs.load(queryParams, { widgetId })` を使用
  - `<DataSourceComponent useDataSource={Immutable({ dataSourceId: outputDsId, mainDataSourceId: outputDsId })} query={queryParams}>` を使用

- **クライアント サイド**：データをローカルに保存
  - フィーチャがある場合は、`outputDs.setSourceFeatures(features, options)` を使用してソースを設定
  - データ ソース レコードがある場合は、`outputDs.setSourceRecords(records)` を使用してソースを設定

出力データ ソースの JSON にある `originDataSources` プロパティは、元のデータ ソースと出力データ ソース間の関連性を保持します。ウィジェットの出力データ ソースにスキーマが定義されていない場合、元のデータ ソースのスキーマが使用されます。

## データの検索とフィルタリング

### データの読み込みとフィルタリング
データ ソースを扱う際、データへのアクセス方法にはいくつかの選択肢があります。
- **ローディング データ**： キャッシュとページネーション機能付きのデータ読み込みには、`DataSourceComponent` または `dataSource.load()` を使用。`load` メソッドは、データ ソースのデータとステータスを更新。
- **データのフィルタリング**： ページを再読み込みせずにフィルターを適用するには、`dataSource.updateQueryParams()` を使用
- **データの検索**： レコードを返すクエリーには、`dataSource.query()` を使用。この `query` メソッドは、データ ソースの状態を更新することなく、レコードを照会して返す。

### フィールドの選択
必要なフィールドのみを選択して、パフォーマンスを最適化します。
- **レコード数は多いが、フィールド数は少ない**： 設定の `widgetJson.useDataSources[i].fields` にフィールド構成を保存
- **1つのレコードに複数のフィールド**：  レコード ID を使用して `dataSource.query()` を呼び出す
- **カスタム フィールドの選択**：  クエリー パラメーターに `setOutFields` プロパティを設定

### クライアント サイドのクエリー
マップ レイヤーを扱う際、パフォーマンス向上のためにデータ ソースはクライアント サイドでクエリーを実行できます。
- クエリーはリモート サーバーではなく、MapView に対して実行される
- `MapView` または `LayerView` が準備できていない場合は、サーバーへのクエリーに切り替わる
- フィールド数が多い場合のパフォーマンス低下を防ぐには、`notAddFieldsToClient` を使用する
- クライアント サイドのクエリーを実行する前に、`LayerView` はクエリー パラメーターの `outFields` を `LayerView` のフィールドに追加する

## コード例
データ ソースを扱うためのコード例をいくつかご紹介します。

> ウィジェットのデータ ソースを選択するには、ウィジェットの設定にある `DataSourceSelector` コンポーネントを使用してください。
> ``` jsx
> <DataSourceSelector
>   mustUseDataSource
>   types={Immutable([DataSourceTypes.FeatureLayer])}
>   onChange={(useDss: UseDataSource[]) => {
>     props.onSettingChange({
>       id: props.id,
>       useDataSources: useDss
>     })
>   }}
>   useDataSources={props.useDataSources}
>  widgetId={props.id}
> />
> ```

> ほとんどのシナリオで推奨される方法である `DataSourceComponent` を使用して、ウィジェット内のデータにアクセスします。
> ``` tsx
> <DataSourceComponent
>  useDataSource={props.useDataSources[0]}
>  widgetId={props.id}
>  query={customQueryParameters}
> >
> {
>   (ds, info: IMDataSourceInfo) => {
>     return <div>
>       <div>Query state: {info.status}</div>
>       <div className='record-list'>
>         {
>           ds
>             ? ds.getRecords().map((r, i) => {
>               return <div key={i}>{r.getData()[props.config.fieldName]}</div>
>             })
>             : null
>         }
>       </div>
>     </div>
>   }
> }
> </DataSourceComponent>
> ```

> 出力データ ソースを作成するには、`this.props.onSettingChange` を使用して、ウィジェットの設定に出力データ ソースの設定を保存してください。
> ``` tsx
> onChange = () => {
>   const outputDsJsons: DataSourceJson[] = [{
>     id: `${props.id}-ouput`,
>     type: DataSourceTypes.FeatureLayer,
>     sourceLabel: `${props.manifest.name}-output-data-source`,
>     isOutputFromWidget: true,
>     geometryType: 'esriGeometryPoint',
>     originDataSources: [useDataSources[0]], // オプション：この出力データソースの作成が他のデータソースに依存する場合は、これを設定してください。
>     schema: schema, // オプション：出力データソースがクライアント サイド（URLなし）の場合は、これを設定してください。
>     url: 'https://<root>/<serviceName>/FeatureServer/<layerId>', // Optional
>     layerId: '<layerId>', // オプション
>     itemId: itemId, // オプション
>     portalUrl: portalUrl // オプション
>   }]
> 
>   props.onSettingChange({
>     id: props.id
>   }, outputDsJsons)
> }
>```

> 出力データソースが作成されると、そのステータスは `NotReady` になります。 出力データ ソースを生成するウィジェットは、データの準備が整った時点でデータ ソースを更新し、その後、データ ソースのステータスを `Unloaded` に変更する必要があります。これにより、他のウィジェットがデータが使用可能になったことを認識できるようになります。
> ``` tsx
> onFeaturesChange = (features: IFeature[]) => {
>   const outputDs = DataSourceManager.getInstance().getDataSource(this.props.outputDataSources?.[0])
>   if (!outputDs) return
>   // 出力データ ソースがクライアント サイド（URLなし）の場合、この方法でレコードを更新できます。
>   outputDs.setSourceRecords(features.map(f => outputDs.buildRecord(f)))
>   // 出力データ ソースのステータスはデフォルトで `NotReady` になっています。`Unloaded` に設定することで、他のウィジェットに対して出力データソースがクエリーを実行できる状態であることを通知します。
>   outputDs.setStatus(DataSourceStatus.Unloaded)
>   outputDs.setCountStatus(DataSourceStatus.Unloaded)
> }
> ```

## データ アクション
データ アクションを使用すると、ウィジェットはデータ ソースに対して操作を実行できます。データ アクションの実装方法については、[データ アクション](../data-action)を参照してください。

## 繰り返しデータ ソース
繰り返しデータ ソースは React Context と同様に機能し、親ウィジェットが子ウィジェットにデータを提供できるようにします。
データ ソースを繰り返し使用する方法は、以下の通りです。
- `this.props.repeatedDataSource` 経由でアクセス
- `id`、`record`、および `recordIndex` プロパティを含む
- `RepeatedDataSourceProvider` を使用して、繰り返しデータ ソースを提供
- ウィジェットのマニフェスト ファイルに `supportRepeat` プロパティを追加

リスト ウィジェットは、繰り返しデータ ソースを提供するウィジェットの例です。