+++
title = "データ ソース（Data source）"
weight = 10
aliases = ["/data-source/"]
+++

出典：ArcGIS Experience Builder - Guide - [Data sources](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-source/)

### データ ソース（Data source）

データソースは、ウィジェットがどのようにデータにアクセスするかを定義します。例えば、データがリモートサーバーからのものである場合、ウィジェットはクライアント側にクエリするために、データソース クラスを使用します。ウィジェットでデータが生成された場合、それ自身をデータソース クラスに入れることで、別のウィジェットで使用することができます。

高レベルでは、データ ソースはスキーマといくつかのレコードを持ち、子/親データ ソースを持つ場合があります。さらに、すべてのデータソースは、それを識別するのに役立つ型、ID、ステータスがあります。
`DataSource` インターフェースは `jimu-core` パッケージで定義されており、これは以下のメソッドとプロパティのいくつかを定義しています。

- `id`: データソースID。
- `type`: どのタイプのデータソースを使っているかチェックするため、ウィジェットで使っているプロパティ。
- `fetchSchema`: すべてのデータソースは、スキーマを返すためにこのメソッドを実装しなければなりません。これは、リモート データ サービスで定義されたスキーマです。例えば、ユーザーがExperience Builder でデータ ソースを追加した場合、データ ソースのスキーマはアプリ構成に保存されません。代わりに、最新のデータ ソース スキーマを取得するために `fetchSchema` メソッドが呼び出されます。
- `getSchema`: ウィジェットがデータソースのスキーマとフィールドにアクセスするために使用するメソッドです。
- `getRecords`: ウィジェットがデータソースのデータレコードにアクセスするために使用するメソッドです。
- `getStatus`: ウィジェットはこのプロパティを使用してデータソースのステータスを取得します。これらのステータスの中には、Loading、Loaded、Errorなどがあります。

1つのデータソースには、サブデータソースを含めることができます。その結果、使いやすくするために複数のデータソースを含めることができます。このようなデータソースを `DataSourceSet` と呼びます。`WebMapDataSource` は `DataSourceSet` です。`DataSourceSet` も、isDataSourceSet プロパティをtrue に設定していれば、データソースの一種です。データソースは `DataSourceManager` で管理し、データソースの作成や取得を行います。

複数のウィジェットが 1 つのデータ ソースに接続する場合、ウィジェットはデータ ソースのローカル ビューを表示したい場合があります。このシナリオでは、データ ビューを使用します。データ ビューとデータ ソースの関係は、リレーショナル データベースのビューとテーブルの関係に非常に似ています。Experience Builder のデータ ソースは、クライアント側の実際のリモート データ ソースのビューですが、データ ソースはテーブル、データ ビューはビューと考えることができます。アプリ作成者は、データソースからデータ ビューを作成し、ビルダーでデータ ビューにウィジェットを接続することができます。API レベルでは、データ ビューは `DataSource` クラスを使用して管理されるため、データ ビューは、属性の違いだけでデータ ソースと同じインターフェースとふるまいを持ちます。

データ ソースの使用を簡単にするために、`DataSourceComponent` コンポーネントが定義されています。これは `useDataSource` プロパティを受け取り、コールバックを通じてデータ ソース オブジェクトとそのステータス情報を返します。また、子として関数を受け入れ、データ ソース オブジェクトとデータ ソース内のデータをレンダリングするための情報を取得するために使用することができます。`DataSourceComponent` コンポーネントは、オプションの `query` プロパティを受け入れることもでき、クエリが変更されたときにデータをリロードします。

フィーチャーサービスのような最も一般的に使用されるデータ形式をサポートするために、APIにはQueriableDataSourceインターフェイスと抽象クラス AbstractQueriableDataSource があります。このインターフェイスには、url、load、query などのプロパティがあります。ロードとクエリの違いは、ロードはレコードのプロパティとデータソースのステータスを更新し、クエリはレコードのみをクエリして返すことです。

具体的には、Experience Builder で `FeatureLayerDataSource` データソースを定義して、フィーチャレイヤーにアクセスします。データ ソースがスタンドアロンのフィーチャ レイヤから作成された場合、オブジェクトには `layer` プロパティはありません。Webmap/Webscene に含まれるフィーチャ レイヤから作成された場合、オブジェクトには `layer` プロパティがあり、これは ArcGIS Maps SDK for JavaScript の FeatureLayer オブジェクトです。`FeatureLayerDataSource` の実際のデータは、リモート データベースからのものと、クライアント側のフィーチャのコレクションからのものがあり、どちらもクエリをサポートしています。クライアント側のデータについては、データソースがスタンドアロン フィーチャ レイヤーから作成された場合でも、クエリをサポートするためにレイヤー オブジェクトが作成されます。

一般的にデータソースは2つの場所に保存され、データソースオブジェクトは `DataSourceManager` に保存・管理され、データソース情報はredux アプリ ストアに保存されます。`ataSourceComponent` を使う場合、コンポーネントは `DataSourceManager` を呼び出してオンデマンドでデータソースを作成し、コールバック プロップを使ってデータ ソース オブジェクトと`dataSourceInfo` を返します。`dataSourceInfo` では、データソースの `instanceStatus`, `status`, `selectedIds` などを返すことができます。

ArcGIS server サービスの多くは、`MapServiceDataSource`、`FeatureServiceDataSource` など、アクセスしやすいようにデータソースにマッピングされています。 ArcGIS Maps SDK for JavaScript の `WebMap` と `WebScene` は、jimu-arcgis パッケージ内で `WebMapDataSource` と `WebSceneDataSource` としてラップされています。


### データ ソース セット（Data Source Set）
データソースは、子データソースを持つことができます。そのため、使いやすいように複数のデータソースを含めることがあります。このようなデータソースを `DataSourceSet` と呼びます。`WebMapDataSource` は `DataSourceSet` です。`isDataSourceSet` プロパティが true に設定されていれば、`DataSourceSet` もデータソースの一種です。`getChildDataSources` を使って親データソースから子データソースを取得したり、`parentDataSource` を使って子データソースから親データソースを取得することができます。

### データ ビュー（Data View）
複数のウィジェットが 1 つのデータソースに接続している場合、ウィジェットはデータソースのローカルビューを見たいと思うかもしれません。このような場合には、データ ビューを使用します。データ ビューとデータソースの関係は、リレーショナルデータベースのビューとテーブルの関係によく似ています。Experience Builder のデータソースは、クライアント側の実際のリモートデータソースのビューですが、データソースはテーブル、データ ビューはビューと考えることができます。アプリ作成者は、データソースからデータ ビューを作成し、ビルダー内のデータビューにウィジェットを接続することができます。APIレベルでは、データ ビューは `DataSource` クラスを使用して管理されているため、データビューは、いくつかのプロパティの違いがあるだけで、データソースと同じインターフェイスと動作を持っています。データ ビューのベースとなるデータソースはメインデータソースと呼ばれ、`getMainDataSource` を使ってデータビューからデータソースを取得したり、`getDataViews` を使ってメインデータソースのすべてのビューを取得することができます。

選択は、メインデータソースとそのすべてのデータビューの間で共有されます。選択されたレコードはデータソースの選択ビューに保存され、選択されたレコード ID は redux app store のデータソース ID の下に保存されます。選択ビューは、メインデータソースの特別なデータビューで、`${mainDataSourceId}-sclection` で識別されます。

### ローカルデータソースとデータビュー（Local data source and data view）
複数のウィジェットが異なるデータを取得するために異なるデータビューを使用することができますが、異なるウィジェットが同じデータソースまたは同じデータビューに接続する必要があっても、ウィジェット内のドロップダウンリストなど、ウィジェット内の異なるデータを取得する必要があるシナリオがあります。この場合、ウィジェットはローカルデータソースまたはデータビューを作成することができ、ローカルデータソースまたはデータビューに適用されたフィルタは、関連するデータソースまたはデータビューに影響を与えません。`DataSourceComponent` を使用して `localId` を渡すか、`DataSourceManager().getinstance().createLocalDataSource` を使用してローカルデータソースまたはデータビューを使用することができます。

### データソース内のソースレコード（Source records in data source）
ほとんどの場合、データはリモート・データベースにあるので、データ・ソース・インスタンスはリモートからデータを取得してデータ・ソース・インスタンスに保存するだけです。しかし、一部のデータソースでは、ウィジェットの出力データソースや選択ビューのデータソースのように、データがクライアント側で生成される場合があります。これらのシナリオでは、データソースのデータは、データソース・インスタンスの `DsourceRecords` に格納されます。`getSourceRecords` と `setSourceRecords` を使用して、それを取得および更新することができます。

### ウィジェット出力データソース（Widget output data source）
ウィジェットは、データソースを使用することができ、また、データソースを生成することもできます。一般的に、ウィジェットはその設定ページで `this.props.onSettingChange` を呼び出して出力データソースを宣言し、他のウィジェットがその出力データソースを使用できるようにする必要があります。出力データソースは app config の `dataSources` に保存されます。他のウィジェットでは、出力データソースを使用しても、ユーザーが追加したデータソースを使用しても、違いはありません。

内部的には、ウィジェットが出力データソースを使用し、ウィジェットがレンダリングされると、出力データソースと出力データビューが作成されます。出力データビューは、`${outputDataSourceId}-output` で識別されます。出力データソースを使用するウィジェットは、出力ビューを使用します。出力データソースを生成したウィジェットは、出力データソースの`setSourceRecords` または `updateQueryParams` を呼び出すことで、データソースを更新します。

出力データソースの JSON 内の `originDataSources` は、オリジンデータソースと出力データソースの関係を維持するために使用されます。例えば、ウィジェットの出力データ・ソースにスキーマが定義されていない場合、オリジン・データ・ソースのスキーマが使用されます。ウィジェットは、このプロパティと、id、type などの一般的なプロパティを更新する必要があります。クエリとチャートのウィジェットは、どちらも出力データソースを生成します。これらの出力データソースの JSON を参考にして、出力データソースの JSON に必要なプロパティを確認することができます。

### データアクション（Data action）
データアクションの[参照](../data-action)

### リピート データ ソース（Repeated Data source）
`RepeatedDataSourceProvider` が提供するデータソースをリピートデータソースと呼びます。データソースを提供するウィジェットのすべての子ウィジェットは、リピートデータソースを受け取ります。これは [React's Context](https://reactjs.org/docs/context.html) と似ています。ウィジェットは `this.props.repetedDataSource` でリピートデータソースにアクセスできます。リピートデータソースは、データソースの `id`、`record`、`recordIndx` を取得します。
どのウィジェットでも、`RepeatedDataSourceProvider` を使用してリピートデータソースを提供することができます。Experience Builder の `List` ウィジェットは、リピートデータソースを提供する良い例です。リピートデータソースを使用するには、ウィジェットのマニフェストファイルに `supportRepeat` プロパティを追加します。

### ウィジェットでのデータソースの使用（Use data source in widget）
データソースは、ウィジェットがデータにアクセスする方法を定義します。公開されたエクスペリエンスのすべてのデータソースは、アプリの config.json の `dataSources` プロパティに保存されます。config.json は `server/public/apps/` フォルダにあります。以下のスニペットでは、この `dataSources` プロパティに `WEB_MAP` タイプのデータソースが 1 つあります。

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

ウィジェットでのデータソースの使用は、app config で `useDataSources` というプロパティで宣言されます。

```tsx
   "useDataSources": [
        {
          "dataSourceId": "dataSource_1"
        }
      ],
```

ウィジェットでは、データソースを選択できる設定UIを提供することをお勧めします。これを実現するには、`DataSourceSelector` コンポーネントを使用して、設定 UI でデータソースを選択します。詳細については、[設定 UI](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/#creating-a-setting-ui-for-the-widget) の作成をご確認ください。実行時には、`DataSourceComponent` を使用して、データソースオブジェクトとデータソース情報を取得します。情報には以下のものが含まれます。

- instanceStatus: データソースのインスタンスが正常に作成されたかどうか
- status: データがロードされているかどうか
- countStatus: データのカウントがロードされているかどうか
- selectedIds: 選択されたデータの ID
- widgetQueries: データソースに適用されたクエリ(フィルタ)ウィジェット
- version: バージョン番号は、クライアント側でデータの変更を管理するためのもので、すべてのデータソース・コンシューマーはデータがいつ変更されたかを知ることができます。
- gdbVersion： ブランチバージョンをサポートしている機能サービスの場合。ブランチ・バージョン管理ウィジェットがブランチ・バージョンを切り替えると、そのバージョンがここに保存されます。

選択されたデータソースの id/index は、`datasource.selectRecord` または `datasource.selectRecordById` を使って、クエリパラメータとして URL に入れることができます。

### WebMap/WebScene の使用（Use WebMap/WebScene）
`jimu-arcgis` パッケージでは、データソースとして WebMap/WebScene をラッピングしています。WebMap にアクセスするには `WebMapDataSource` を、WebScene には `WebSceneDataSource` を使用します。これらのデータソースの使用方法については、[MapView サンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/map-view/)をご確認ください。WebMap/WebScene オブジェクトに加えて、これらのオブジェクトに含まれるすべてのレイヤーもデータソースとしてラップされているため、`getChildDataSources` を呼び出してすべてのレイヤーのデータソースを取得することができます。サポートされているレイヤーとサービスは、`SupportedLayerServiceTypes` と `SupportedServiceTypes` で定義されています。

### FeatureLayer の使用（Use FeatureLayer）
ワークフローの中には、FeatureLayer を直接操作するような軽量のエクスペリエンスを作成する必要があるものもあります。このような場合、`FeatureLayerDataSource` クラスを使用します。独立したフィーチャーマップを使用するウィジェットは、`layer` プロパティを持たない `FeatureLayerDataSource` オブジェクトを取得しますが、ウェブマップやウェブシーンからフィーチャーマップを使用すると、`layer` プロパティを持つ `FeatureLayerDataSource` オブジェクトが返されます。`Layer` オブジェクトは、ArcGIS Maps SDK for JavaScript のものです。

```tsx
 const getLayerObject = (ds: FeatureLayerDataSource) => {
    return ds.layer; // this can be null
 }
 ```

### ウィジェット間のデータ共有（Sharing data between widgets）
ウィジェットが同じデータを共有することは、一般的なワークフローです。例えば、Map と List の2つのウィジェットを使った体験談です。リストウィジェットでフィーチャーが選択されると、マップでも対応するフィーチャーが選択されます。これを実現する最も簡単な方法は、両方のウィジェットに同じデータソースを使用することです。例えば、リストウィジェットでアイテムが選択されると、ウィジェットは datasource.selectRecord() を呼び出し、アプリストアのデータソースのステータスを更新します。これにより、Map ウィジェットは現在選択されているアイテムを適宜レンダリングすることができます。また、現在選択されているアイテムが URL に配置されるため、現在のアプリの状態を他の人と共有することが可能になります。