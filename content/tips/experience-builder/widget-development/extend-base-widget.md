+++
title = "ウィジェットの実装"
description = "ウィジェットの実装方法について紹介します。"
weight = 7
aliases = ["/extend-base-widget/"]
+++

出典：ArcGIS Experience Builder - Guide - [Widget implementation](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/)


Experience Builder ウィジェットは、次のファイルで構成されています。

- `src`: ウィジェットのソースコード
    - `runtime`: フォルダー
        - `widget.tsx`: メインのファイル
        - `assets`: `widget.tsx` で使用される assets フォルダー
        - `translations`: ウィジェットで使われる strings フォルダー
    - `setting`: フォルダー
        - `setting.tsx`: ウィジェットで使用する設定ファイル
        - `assets`: 設定で使用する assets フォルダー
        - `translations`: 設定で使用する strings フォルダー
- `dist`: コンパイル済みのウィジェットのソースコードを配置。ウィジェットのソースコードのフォルダーと同じ構成
- `icon.svg`: ウィジェット パネルのウィジェットのアイコン
- `config.json`: ウィジェットのデフォルト設定
- `manifest.json`: プロパティのリストは `jimu-core/WidgetManifest` で設定した内容を表示

## Client サーバー
Experience Builder (Developer Edition) で必要なモジュールをインストールしたら、/client ディレクトリで `npm start` を実行して webpack サーバーを起動します。webpack サーバーを起動した状態にすることでソースコードの編集におけるファイル変更を監視し、自動的にコンパイルを行います。通常は、ソースコードを編集する際に webpack サーバーを再起動する必要はありませんが、以下の場合では、サーバーを再起動する必要があります。

- 新しいモジュールのインストール
- ウィジェットの追加、削除、名前の変更
- ウィジェットの `manifest.json` の編集
- ファイルやフォルダーの追加、削除、名前の変更

{{< callout >}}

`ctrl + c` で webpack サーバーを停止させることができます。

{{< /callout >}}

## ウィジェットの作成
ウィジェットに必要なファイルを作成する簡単な方法は、[samples repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) にある demo widget をコピーして、`client/your-extensions/widgets` ディレクトリーに配置する方法です。demo widget フォルダーの名前を変更し、`maniest.json` で名前とラベルを変更し、ウィジェットの translations フォルダーにある default.ts ファイルの `_widgetLabel` のプロパティを変更します。widget/React コンポーネントを作成するには、クラスと関数の 2 つの方法があります。以下に、2 つの違いについて紹介します。

{{< callout >}}

default.ts の `_widgetLabel` は、常に manifest.json のラベルと同じとすることを推奨します。

{{< /callout >}}

- クラス コンポーネント

    - ES6 クラスを利用し、React のコンポーネント クラスを拡張します。
    - 独自のデータを state で維持します。
    - props(properties) をクラス コンポーネントに渡し、this.props でアクセスします。
    - render() メソッドを使います。

- 関数コンポーネント

    - アロー関数を使った JavaScript の基本的な関数ですが、通常の関数キーワードを使用することができます。
    - props を受け入れて使用します。
    - React Hooks を使用して state やその他の機能を使用します。
    - render() メソッドはありません。

開発者向けドキュメントで使用されているサンプルは、1 つを除いてすべてクラス コンポーネントに基づいています。今後のリリースでは、関数コンポーネントのサンプルを追加する予定です。

### クラス コンポーネントを使ったウィジェットの作成

以下の例では、React.PureComponent クラスを拡張して、シンプルな hello world クラスの widget/component を作成する方法を示しています。ウィジェットは、`export default class Widget extends React.Component<AllWidgetProps>, any>` で `AllWidgetProps` 型で宣言されており、ウィジェットの props を使用しています。 `render()` メソッドは、translations ファイル内の `_widgetLabel` のプロパティで設定した テキスト名：`hello world` とウィジェット名を返すために呼び出されます。

```tsx
//a custom pragma to transform your jsx into plain JavaScript
/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
export default class Widget extends React.PureComponent<AllWidgetProps<{}>, any> {

    render() {
      return (
        <div className="widget-starter jimu-widget" style={{ overflow: "auto" }}>
          <p>Hello world!</p>
          <p>Widget Name: {this.props.label}</p>
        </div>
      );
    }

}
```

### 関数コンポーネントを使ったウィジェットの作成

以下の例では、シンプルな hello world 関数の widget/component を作成するために必要なモジュールをロードしています。ウィジェットは、`export default function Widget (props: AllWidgetProps) {` で `AllWidgetProps` 型の関数として宣言されており、ウィジェットの props を使用しています。translations ファイルの `_widgetLabel` のプロパティで設定した テキスト名: `hello world` とウィジェット名を返します。

```tsx
/** @jsx jsx */
import { AllWidgetProps, jsx} from "jimu-core";

export default function Widget (props:AllWidgetProps) {
    return <div className="widget-starter jimu-widget" style={{ overflow: "auto" }}>
        <p>Hello world!</p>
        <p>Widget Name: {props.label}</p>
      </div>
  }
```

## ウィジェットの UI 設定

ウィジェットの UI 設定は、ウィジェットの作成と似ていますが、setting フォルダーの setting.tsx を使用することができます。ウィジェットの UI 設定を作成するには、クラスと関数の 2 つの方法があります。クラス コンポーネントを使用するには、`React.PureComponent` クラスを継承します。この例では、データ ソースを追加して設定パネルの config.json ファイルを操作する方法を示しています。また、この例では以下のインポートに注意する必要があります。

- import `React` は `React.PureComponent` クラスに使用されます。
- import `DataSourceTypes` はデータ ソースの種類に使用します。
- import `SettingSection` と `SettingRow` は設定に便利な UI コンポーネントです。
- import `DataSourceSelector` もデータ ソースの選択に使われるコンポーネントです。
- import `IMConfig` は config.json ファイルに使用されます。

```tsx
import {React, Immutable, FormattedMessage} from 'jimu-core';
import {AllWidgetSettingProps} from 'jimu-for-builder';
import {DataSourceTypes} from 'jimu-arcgis';
import {SettingSection, SettingRow} from 'jimu-ui/advanced/setting-components';
import {DataSourceSelector} from 'jimu-ui/advanced/data-source-selector';
import {IMConfig} from '../config';
import defaultI18nMessages from './translations/default'
```

`React.PureComponent` クラスは `AllWidgetSettingsProps` 型と `IMConfig` 型で宣言されています。`supportedTypes` プロパティは、クラス全体を通してデータ ソース タイプの Webmap に使用されます。`onDataSourceSelected` は、データ ソースの選択を処理する関数を持つクラス プロパティです。`this.props.OnSettingChange()` 関数は、設定 UI の変更を通知するために使用されます。`onP1Change` と `onP2Change` クラス プロパティは、React のイベント処理を使用して、config.json ファイルの値の設定を助けます。

```tsx
export default class Setting extends React.PureComponent{
  supportedTypes = Immutable([DataSourceTypes.WebMap]);

  onDataSourceSelected = (useDataSources: UseDataSource[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    });
  }
```

```tsx
    onP1Change = (evt: React.FormEvent<HTMLInputElement>) => {
      this.props.onSettingChange({
        id: this.props.id,
        config: this.props.config.set('p1', evt.currentTarget.value)
      });
    }

    onP2Change = (evt: React.FormEvent<HTMLInputElement>) => {
      this.props.onSettingChange({
        id: this.props.id,
        config: this.props.config.set('p2', evt.currentTarget.value)
      });
    }
```

jimu ライブラリーには、ウィジェットで使用できるコンポーネントがあります。例えば、Web マップを選択のための UI を支援するために、`DataSourceSelector` コンポーネントが、選択されたデータ ソースのタイプ、ID、およびコールバックを処理するために使用されます。さらに、`SettingSection` コンポーネントと `SettingRow` コンポーネントは、翻訳や config ファイルからの文字列のコンテナの整形を処理するために使用されます。

```tsx
render(){
    return <div className="sample-map-view-setting p-2">
      <DataSourceSelector
        types={this.supportedTypes}
        mustUseDataSource
        useDataSources={this.props.useDataSources}
        onChange={this.onDataSourceSelected}
        widgetId={this.props.id}
      />
      <SettingSection>
        <SettingRow label={<FormattedMessage id="p1" defaultMessage={defaultI18nMessages.p1}/>}> <input defaultValue={this.props.config.p1} onChange={this.onP1Change}/></SettingRow>
        <SettingRow label={<FormattedMessage id="p2" defaultMessage={defaultI18nMessages.p2}/>}> <input defaultValue={this.props.config.p2} onChange={this.onP2Change}/></SettingRow>
      </SettingSection>
    </div>
  }
}
```

## Props

ウィジェットには様々な props を設定できます。クラス コンポーネントの `this.props` や関数コンポーネントの props パラメータ `{props}` を通してアクセスすることができます。例えば、クラス コンポーネントを使用してウィジェットの config.json にある props にアクセスするには、`this.props.config` を使用します。関数コンポーネントでアクセスするには、`props.config` を使用します。利用可能なプロパティの詳細については、Experience Builder の `client/jimu-core/lib/types/props.ts` を参照してください。

場合によっては、this.props にないプロパティにアクセスする必要があるかもしれません。そのためには、ウィジェット クラスに以下のコード スニペットのような静的関数を定義します。

```tsx
static mapExtraStateProps = (state: IMState) => {
    return {
      appMode: state && state.appRuntimeInfo && state.appRuntimeInfo.appMode
    };
  };
```

## i18n サポート

Experience Builder は `react-intl` ライブラリーを使用して i18n をサポートしています。ウィジェットで言語のサポートを有効にするには、ウィジェットの manifest.json で `translatedLocales` プロパティのロケールを宣言します。慣例によりデフォルトのロケールを最初に指定しなければなりません。例えば、以下のスニペットでは、`translatedLocales` プロパティのデフォルトロケールは、英語(米国)、スペイン語、中国語(北京語) の順になっています。

```tsx
 "translatedLocales": [
    "en",
    "es",
    "zh-cn"
  ]
```

翻訳文字列は、`runtime/translations` フォルダーと `settings/translations` フォルダーにある `default.ts` というファイル内に設定する必要があります。`default.ts` はデフォルトで使用される文字列を定義し、ウィジェットにインポートしてデフォルト メッセージに使用できます。`default.ts` の書式は以下のとおりです。

```tsx
export default {
  _widgetLabel: 'My Widget',
  str1: 'String 1',
}
```

サポートされる言語が増えるごとに、`translations` フォルダーにそのロケールに対応した名前のファイルを作成します。例えば、スペイン語は `translations/es.js` です。ファイルの内容は `default.ts` で定義されているものと同じプロパティを持ち、そのロケールの翻訳文字列を値として持つ形式となります。

```tsx
System.register([], function (_export) {return {execute: function () {_export({
  // the strings
  _widgetLabel: 'Translated Widget Name',
  str1: 'Translated String 1',
})}}});
```

ウィジェット ファイル (例：`widget.tsx`) において、翻訳された文字列にアクセスする様々な方法を示します。

```tsx
// Class component
this.props.intl.formatMessage({id: 'str1', defaultMessage: defaultMessages.str1})

// Function component
props.intl.formatMessage({id: 'str1', defaultMessage: defaultMessage.str1})

// JSX
<FormattedMessage id="str1" defaultMessage={defaultMessages.str1}/>
```

## マップ ビュー/シーン ビュー

ほとんどの Experience Builder では、ウィジェットはマップ ビュー/シーン ビューで動作し、同様にビュー内のレイヤーにアクセスする必要があります。一貫した拡張性モデルを持つことを保証するために、Experience Builder フレームワーク内での使用をより簡単にするために、他のクラスやメソッドに加えて、`MapViewManager` クラスが `jimu-arcgis` で利用可能です。基本的に全てのウィジェットは `createJimuMapView` メソッドを呼び出して `MapViewManager` にマップ ビュー/シーン ビューを追加し、他のウィジェットで使用できるようにすることができます。

```tsx
      MapViewManager.getInstance().createJimuMapView({
        mapWidgetId: this.props.id,
        view: new MapView(options),
        datasourceId: webmapDs.id,
        isActive: true
      })
```

マップ ビュー/シーン ビューを使用する必要がある他のウィジェットでは、UI 設定で `MapWidgetSelector` を使用して選択することができます。選択したマップ/シーンは `WidgetJson.useMapWidgetsIds` に保存されます。

```tsx
<MapWidgetSelector onSelect={this.onMapWidgetSelected} useMapWidgetIds={this.props.useMapWidgetIds[0]} />
```

## ArcGIS Maps SDK for JavaScript のモジュール
既定では、Experience Builder はアプリのロード時に ArcGIS Maps SDK for JavaScript (JS API) をロードしません。JS API モジュールを利用するには、2 つのオプションがあります。

- JS API に依存するウィジェット (例：JS API がないと何もできません。)
  - ウィジェットの `manifest.json` で `jimu-arcgis` 依存関係を宣言します。
  - `widget.tsx` で必要なモジュールをインポート `import Query = require('esri/tasks/support/Query')` します。

```tsx
  const query = new Query({
    where: `${typeIdField} = ${graphic.attributes[objectIdField]}`,
    outFields: ['FirstName'],
    returnGeometry: true
  })
```

- 条件付きで JS API に依存するウィジェット (例：JS API がなくても何かを実行することはできます。)
  - `import {loadArcGISJSAPIModules}` と `loadArcGISJSAPIModules([])` を使用してモジュールを動的にロードします。

```tsx
  loadArcGISJSAPIModules(['esri/widgets/Directions']).then(modules => {
          [this.Directions] = modules;
          this.setState({
            apiLoaded: true
         });
        })
```

## インライン編集をサポート
構成可能なすべてのウィジェットは、ウィジェットの構成を可能にする設定ページを提供する必要があります。ただし、構成によっては、設定パネルよりもウィジェットの設定を変更する方が簡単な場合があります。このワークフローでは、ウィジェットはインライン編集機能を提供することで、この機能をサポートすることができます。

インライン編集を実装する方法はいくつかあります。

- ウィジェットの `manifest.json` の `properties` オブジェクトに `supportInlineEditing` を宣言します。このインスタンスでは、ウィジェットが Builder で起動されたときにウィジェットに編集ツールバーが表示されます。`Text` ウィジェットはこのように実装されています。
- ウィジェットの `manifest.json` の `properties` オブジェクトに `hasEmbeddedLayout` を宣言します。この場合、ユーザーが他のウィジェットをウィジェットの中でドラッグ＆ドロップできるようにするために、レイアウト コンポーネントを使用することをお勧めします。`jimu-layouts/layout-builder` と `jimu-layouts/layout-runtime` からエクスポートされた 2 つのレイアウト コンポーネントがあります。ウィジェットでは、jimu-layouts/layout-runtime からエクスポートされたレイアウトコンポーネントを使用する必要があります。`jimu-layouts/layout-builder` からエクスポートされたコンポーネントにアクセスするには、`this.props.builderSupportModules.LayoutClass` を使用します。`List` ウィジェットはこの手法を使っています。
- ウィジェットの `manifest.json` で `CONTEXT_TOOL` 拡張機能を宣言します。宣言した拡張機能は選択ツールバーで利用できるようになります。`Image` ウィジェットは、このように選択ツールバーに shape ツールや crop ツールを追加して使用します。

インライン編集をサポートするために、ウィジェットは Builder でウィジェットを起動した時にのみ必要なモジュールが含まれている場合があります。このシナリオでは、これらのモジュールを `builder-support.tsx` に配置します。このファイルは `widget.tsx` と同じフォルダーにあるはずです。このファイル内のモジュールは、ウィジェットが Builder で起動されると、`this.props.builderSupportModules.widgetModules` 内で利用できるようになります。

## ベストプラクティス

- ウィジェットのクラス名として `widget-<widget name>` を、ウィジェット設定のクラス名として `widget-setting-<widget name>` を使用して、ウィジェットのルート CSS クラス名を指定します。
- サードパーティの内蔵ライブラリーをロードするには `import {} from 'jimu-core'` を使います。例えば、`import {React} from 'jimu-core` から {React} をインポートします; `import {} from '3rd_lib'` を使うと、lib がウィジェットに組み込まれるので、ウィジェットのサイズは大きくなります。
- widget の `src` フォルダーに Typesafe 設定ファイルを作成し、`widget.tsx` と `setting.tsx` の両方で使用します。
- 可能な限りアウトオブボックスの UI コンポーネントを活用して、[ウィジェット UI](../widget-ui) を作成する方法の詳細をご覧ください。

