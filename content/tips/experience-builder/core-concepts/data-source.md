+++
title = "データ ソース（Data source）"
weight = 10
aliases = ["/data-source/"]
+++

出典：ArcGIS Experience Builder - Guide - [Data sources](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-source/)

### データ ソース（Data source）

データ ソースは、ウィジェットがどのようにデータにアクセスするかを定義します。例えば、データがリモートサーバーからのものである場合、ウィジェットはクライアント側にクエリするために、データ ソース クラスを使用します。ウィジェットでデータが生成された場合、それ自身をデータ ソース クラスに入れることで、別のウィジェットで使用することができます。

高レベルでは、データ ソースはスキーマといくつかのレコードを持ち、子/親データ ソースを持つ場合があります。さらに、すべてのデータ ソースは、それを識別するのに役立つ型、ID、ステータスがあります。
`DataSource` インターフェースは `jimu-core` パッケージで定義されており、これは以下のメソッドとプロパティのいくつかを定義しています。

- `id`: データ ソースID。
- `type`: どのタイプのデータ ソースを使っているかチェックするため、ウィジェットで使っているプロパティ。
- `fetchSchema`: すべてのデータ ソースは、スキーマを返すためにこのメソッドを実装しなければなりません。これは、リモート データ サービスで定義されたスキーマです。例えば、ユーザーがExperience Builder でデータ ソースを追加した場合、データ ソースのスキーマはアプリ構成に保存されません。代わりに、最新のデータ ソース スキーマを取得するために `fetchSchema` メソッドが呼び出されます。
- `getSchema`: ウィジェットがデータ ソースのスキーマとフィールドにアクセスするために使用するメソッドです。
- `getRecords`: ウィジェットがデータ ソースのデータレコードにアクセスするために使用するメソッドです。
- `getStatus`: ウィジェットはこのメソッドを使用してデータ ソースのステータスを取得します。これらのステータスには、`NotReady`、`Unloaded`、`Loading`、`Loaded` および `LoadError` があります。`NotReady` はウィジェットの出力データ ソース専用です。出力データ ソースのインスタンスが作成されても、そのインスタンスは使用する準備ができていません。出力データ ソースを生成するウィジェットはデータ ソースを使用可能な状態にするアクション (DataSourceChanged) を送る必要があります。データ ソースのステータスが準備できていない場合、クエリは空の結果を返します。その他のクエリ可能なデータ ソースでは、既定のステータスは `Unloaded` です。データが要求されると `Loading` に変更され、最後に `Loaded` または `LoadError` に変更されます。

1つのデータ ソースには、サブデータ ソースを含めることができます。その結果、使いやすくするために複数のデータ ソースを含めることができます。このようなデータ ソースを `DataSourceSet` と呼びます。`WebMapDataSource` は `DataSourceSet` です。`DataSourceSet` も、isDataSourceSet プロパティをtrue に設定していれば、データ ソースの一種です。データ ソースは `DataSourceManager` で管理し、データ ソースの作成や取得を行います。

複数のウィジェットが 1 つのデータ ソースに接続する場合、ウィジェットはデータ ソースのローカル ビューを表示したい場合があります。このシナリオでは、データ ビューを使用します。データ ビューとデータ ソースの関係は、リレーショナル データベースのビューとテーブルの関係に非常に似ています。Experience Builder のデータ ソースは、クライアント側の実際のリモート データ ソースのビューですが、データ ソースはテーブル、データ ビューはビューと考えることができます。アプリ作成者は、データ ソースからデータ ビューを作成し、ビルダーでデータ ビューにウィジェットを接続することができます。API レベルでは、データ ビューは `DataSource` クラスを使用して管理されるため、データ ビューは、属性の違いだけでデータ ソースと同じインターフェースとふるまいを持ちます。

データ ソースの使用を簡単にするために、`DataSourceComponent` コンポーネントが定義されています。これは `useDataSource` プロパティを受け取り、コールバックを通じてデータ ソース オブジェクトとそのステータス情報を返します。また、子として関数を受け入れ、データ ソース オブジェクトとデータ ソース内のデータをレンダリングするための情報を取得するために使用することができます。`DataSourceComponent` コンポーネントは、オプションの `query` プロパティを受け入れることもでき、クエリが変更されたときにデータをリロードします。

フィーチャーサービスのような最も一般的に使用されるデータ形式をサポートするために、APIにはQueriableDataSourceインターフェイスと抽象クラス AbstractQueriableDataSource があります。このインターフェイスには、url、load、query などのプロパティがあります。ロードとクエリの違いは、ロードはレコードのプロパティとデータ ソースのステータスを更新し、クエリはレコードのみをクエリして返すことです。

具体的には、Experience Builder で `FeatureLayerDataSource` データ ソースを定義して、フィーチャレイヤーにアクセスします。データ ソースがスタンドアロンのフィーチャ レイヤから作成された場合、オブジェクトには `layer` プロパティはありません。Webmap/Webscene に含まれるフィーチャ レイヤから作成された場合、オブジェクトには `layer` プロパティがあり、これは ArcGIS Maps SDK for JavaScript の FeatureLayer オブジェクトです。`FeatureLayerDataSource` の実際のデータは、リモート データベースからのものと、クライアント側のフィーチャのコレクションからのものがあり、どちらもクエリをサポートしています。クライアント側のデータについては、データ ソースがスタンドアロン フィーチャ レイヤーから作成された場合でも、クエリをサポートするためにレイヤー オブジェクトが作成されます。

一般的にデータ ソースは2つの場所に保存され、データ ソースオブジェクトは `DataSourceManager` に保存・管理され、データ ソース情報はredux アプリ ストアに保存されます。`ataSourceComponent` を使う場合、コンポーネントは `DataSourceManager` を呼び出してオンデマンドでデータ ソースを作成し、コールバック プロップを使ってデータ ソース オブジェクトと`dataSourceInfo` を返します。`dataSourceInfo` では、データ ソースの `instanceStatus`, `status`, `selectedIds` などを返すことができます。

ArcGIS server サービスの多くは、`MapServiceDataSource`、`FeatureServiceDataSource` など、アクセスしやすいようにデータ ソースにマッピングされています。 ArcGIS Maps SDK for JavaScript の `WebMap` と `WebScene` は、jimu-arcgis パッケージ内で `WebMapDataSource` と `WebSceneDataSource` としてラップされています。


### データ ソース セット（Data Source Set）
データ ソースは、子データ ソースを持つことができます。そのため、使いやすいように複数のデータ ソースを含めることがあります。このようなデータ ソースを `DataSourceSet` と呼びます。`WebMapDataSource` は `DataSourceSet` です。`isDataSourceSet` プロパティが true に設定されていれば、`DataSourceSet` もデータ ソースの一種です。`getChildDataSources` を使って親データ ソースから子データ ソースを取得したり、`parentDataSource` を使って子データ ソースから親データ ソースを取得することができます。

### データ ビュー（Data View）
複数のウィジェットが 1 つのデータ ソースに接続している場合、ウィジェットはデータ ソースのローカルビューを見たいと思うかもしれません。このような場合には、データ ビューを使用します。データ ビューとデータ ソースの関係は、リレーショナルデータベースのビューとテーブルの関係によく似ています。Experience Builder のデータ ソースは、クライアント側の実際のリモートデータ ソースのビューですが、データ ソースはテーブル、データ ビューはビューと考えることができます。アプリ作成者は、データ ソースからデータ ビューを作成し、ビルダー内のデータビューにウィジェットを接続することができます。APIレベルでは、データ ビューは `DataSource` クラスを使用して管理されているため、データビューは、いくつかのプロパティの違いがあるだけで、データ ソースと同じインターフェイスと動作を持っています。データ ビューのベースとなるデータ ソースはメインデータ ソースと呼ばれ、`getMainDataSource` を使ってデータビューからデータ ソースを取得したり、`getDataViews` を使ってメインデータ ソースのすべてのビューを取得することができます。

選択は、メインデータ ソースとそのすべてのデータビューの間で共有されます。選択されたレコードはデータ ソースの選択ビューに保存され、選択されたレコード ID は redux app store のデータ ソース ID の下に保存されます。選択ビューは、メインデータ ソースの特別なデータビューで、`${mainDataSourceId}-sclection` で識別されます。

### ローカルデータ ソースとデータビュー（Local data source and data view）
複数のウィジェットが異なるデータを取得するために異なるデータビューを使用することができますが、異なるウィジェットが同じデータ ソースまたは同じデータビューに接続する必要があっても、ウィジェット内のドロップダウンリストなど、ウィジェット内の異なるデータを取得する必要があるシナリオがあります。この場合、ウィジェットはローカルデータ ソースまたはデータビューを作成することができ、ローカルデータ ソースまたはデータビューに適用されたフィルタは、関連するデータ ソースまたはデータビューに影響を与えません。`DataSourceComponent` を使用して `localId` を渡すか、`DataSourceManager().getinstance().createLocalDataSource` を使用してローカルデータ ソースまたはデータビューを使用することができます。

### データ ソース内のソースレコード（Source records in data source）
ほとんどの場合、データはリモート・データベースにあるので、データ・ソース・インスタンスはリモートからデータを取得してデータ・ソース・インスタンスに保存するだけです。しかし、一部のデータ ソースでは、ウィジェットの出力データ ソースや選択ビューのデータ ソースのように、データがクライアント側で生成される場合があります。これらのシナリオでは、データ ソースのデータは、データ ソース・インスタンスの `DsourceRecords` に格納されます。`getSourceRecords` と `setSourceRecords` を使用して、それを取得および更新することができます。

### ウィジェット出力データ ソース（Widget output data source）
ウィジェットは、データ ソースを使用することができ、また、データ ソースを生成することもできます。一般的に、ウィジェットはその設定ページで `this.props.onSettingChange` を呼び出して出力データ ソースを宣言し、他のウィジェットがその出力データ ソースを使用できるようにする必要があります。出力データ ソースは app config の `dataSources` に保存されます。他のウィジェットでは、出力データ ソースを使用しても、ユーザーが追加したデータ ソースを使用しても、違いはありません。

内部的には、ウィジェットが出力データ ソースを使用し、ウィジェットがレンダリングされると、出力データ ソースと出力データビューが作成されます。出力データビューは、`${outputDataSourceId}-output` で識別されます。出力データ ソースを使用するウィジェットは、出力ビューを使用します。出力データ ソースを生成したウィジェットは、出力データ ソースの`setSourceRecords` または `updateQueryParams` を呼び出すことで、データ ソースを更新します。

出力データ ソースの JSON 内の `originDataSources` は、オリジンデータ ソースと出力データ ソースの関係を維持するために使用されます。例えば、ウィジェットの出力データ・ソースにスキーマが定義されていない場合、オリジン・データ・ソースのスキーマが使用されます。ウィジェットは、このプロパティと、id、type などの一般的なプロパティを更新する必要があります。クエリとチャートのウィジェットは、どちらも出力データ ソースを生成します。これらの出力データ ソースの JSON を参考にして、出力データ ソースの JSON に必要なプロパティを確認することができます。

### データアクション（Data action）
データアクションの[参照](../data-action)

### リピート データ ソース（Repeated Data source）
`RepeatedDataSourceProvider` が提供するデータ ソースをリピートデータ ソースと呼びます。データ ソースを提供するウィジェットのすべての子ウィジェットは、リピートデータ ソースを受け取ります。これは [React's Context](https://reactjs.org/docs/context.html) と似ています。ウィジェットは `this.props.repetedDataSource` でリピートデータ ソースにアクセスできます。リピートデータ ソースは、データ ソースの `id`、`record`、`recordIndx` を取得します。
どのウィジェットでも、`RepeatedDataSourceProvider` を使用してリピートデータ ソースを提供することができます。Experience Builder の `List` ウィジェットは、リピートデータ ソースを提供する良い例です。リピートデータ ソースを使用するには、ウィジェットのマニフェストファイルに `supportRepeat` プロパティを追加します。

### ウィジェットでのデータ ソースの使用（Use data source in widget）
データ ソースは、ウィジェットがデータにアクセスする方法を定義します。公開されたエクスペリエンスのすべてのデータ ソースは、アプリの config.json の `dataSources` プロパティに保存されます。config.json は `server/public/apps/` フォルダにあります。以下のスニペットでは、この `dataSources` プロパティに `WEB_MAP` タイプのデータ ソースが 1 つあります。

```tsx
"dataSources": {
    "dataSource_1": {
      "type": "WEB_MAP",
      "itemId": "cb5329a59a354904a035de57f85112d3",
      "id": "dataSource_1",
      "label": "US Breweries",
      "portalUrl": "https://www.arcgis.com"
    }
  },
```

ウィジェットでのデータ ソースの使用は、app config で `useDataSources` というプロパティで宣言されます。

```tsx
   "useDataSources": [
        {
          "dataSourceId": "dataSource_1"
        }
      ],
```

ウィジェットでは、データ ソースを選択できる設定UIを提供することをお勧めします。これを実現するには、`DataSourceSelector` コンポーネントを使用して、設定 UI でデータ ソースを選択します。詳細については、[設定 UI](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/#creating-a-setting-ui-for-the-widget) の作成をご確認ください。実行時には、`DataSourceComponent` を使用して、データ ソースオブジェクトとデータ ソース情報を取得します。情報には以下のものが含まれます。

- instanceStatus: データ ソースのインスタンスが正常に作成されたかどうか
- status: データがロードされているかどうか
- countStatus: データのカウントがロードされているかどうか
- selectedIds: 選択されたデータの ID
- widgetQueries: データ ソースに適用されたクエリ(フィルタ)ウィジェット
- version: バージョン番号は、クライアント側でデータの変更を管理するためのもので、すべてのデータ ソース・コンシューマーはデータがいつ変更されたかを知ることができます。
- gdbVersion： ブランチバージョンをサポートしている機能サービスの場合。ブランチ・バージョン管理ウィジェットがブランチ・バージョンを切り替えると、そのバージョンがここに保存されます。

選択されたデータ ソースの id/index は、`datasource.selectRecord` または `datasource.selectRecordById` を使って、クエリパラメータとして URL に入れることができます。

### WebMap/WebScene の使用（Use WebMap/WebScene）
`jimu-arcgis` パッケージでは、データ ソースとして WebMap/WebScene をラッピングしています。WebMap にアクセスするには `WebMapDataSource` を、WebScene には `WebSceneDataSource` を使用します。これらのデータ ソースの使用方法については、[MapView サンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/map-view/)をご確認ください。WebMap/WebScene オブジェクトに加えて、これらのオブジェクトに含まれるすべてのレイヤーもデータ ソースとしてラップされているため、`getChildDataSources` を呼び出してすべてのレイヤーのデータ ソースを取得することができます。サポートされているレイヤーとサービスは、`SupportedLayerServiceTypes` と `SupportedServiceTypes` で定義されています。

### FeatureLayer の使用（Use FeatureLayer）
ワークフローの中には、FeatureLayer を直接操作するような軽量のエクスペリエンスを作成する必要があるものもあります。このような場合、`FeatureLayerDataSource` クラスを使用します。独立したフィーチャーマップを使用するウィジェットは、`layer` プロパティを持たない `FeatureLayerDataSource` オブジェクトを取得しますが、ウェブマップやウェブシーンからフィーチャーマップを使用すると、`layer` プロパティを持つ `FeatureLayerDataSource` オブジェクトが返されます。`Layer` オブジェクトは、ArcGIS Maps SDK for JavaScript のものです。

```tsx
 const getLayerObject = (ds: FeatureLayerDataSource) => {
    return ds.layer; // this can be null
 }
 ```

### ウィジェット間のデータ共有（Sharing data between widgets）
ウィジェットが同じデータを共有することは、一般的なワークフローです。例えば、Map と List の2つのウィジェットを使った体験談です。リストウィジェットでフィーチャーが選択されると、マップでも対応するフィーチャーが選択されます。これを実現する最も簡単な方法は、両方のウィジェットに同じデータ ソースを使用することです。例えば、リストウィジェットでアイテムが選択されると、ウィジェットは datasource.selectRecord() を呼び出し、アプリストアのデータ ソースのステータスを更新します。これにより、Map ウィジェットは現在選択されているアイテムを適宜レンダリングすることができます。また、現在選択されているアイテムが URL に配置されるため、現在のアプリの状態を他の人と共有することが可能になります。