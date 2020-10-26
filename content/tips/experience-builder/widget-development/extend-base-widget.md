+++
title = "ウィジェットの実装"
description = "ウィジェットの実装方法について紹介します。"
weight = 7
aliases = ["/extend-base-widget/"]
+++

Experience Builder ウィジェットは、次のファイルで構成されています。

- src: ウィジェットのソースコード
    - runtime: フォルダ
        - widget.tsx: メインエントリファイル
        - assets: widget.tsxで使用されるアセットのフォルダ
        - translations: ウィジェットで使われる文字列のフォルダ
    - setting: フォルダ
        - setting.tsx: ウィジェットで使用する設定ファイル
        - assets: 設定で使用するアセットのフォルダ
        - translations: 設定で使用する文字列のフォルダ
- dist: ウィジェットのコンパイルされたコードフォルダ。ソースコードフォルダ
- icon.svg: ウィジェットパネルのウィジェットのアイコン
- config.json: ウィジェットのデフォルト設定
- manifest.json: プロパティのリストは jim-core/lib/types/manifest を参照してください。

## Client server
Experience Builder (開発者向けエディション)で必要なモジュールをインストールしたら、/client ディレクトリで `npm start` を実行して webpack サーバーを起動します。webpack サーバーを起動した状態にすることでソースコードの修正におけるファイル変更を監視し、自動的にコンパイルを行います。ほとんどの場合、ソースコードを編集する際に webpack サーバーを再起動する必要はありません。しかし、以下のシナリオでは、サーバーを再起動する必要があります。

- 新しいモジュールのインストール
- ウィジェットの追加、削除、名前の変更
- ウィジェットの `manifest.json` の編集
- ファイルやフォルダの追加、削除、名前の変更

{{% notice tip %}}
`ctrl + c` で webpack サーバーを停止させることができます。
{{% /notice %}}

## ウィジェットの作成
ウィジェットに必要なファイルを作成する簡単な方法は、[samples repo](https://github.com/esri/arcgis-experience-builder-sdk-resources) にある demo widget をコピーして、client/your-extensions/widget ディレクトリに貼り付けます。demo widget フォルダの名前を変更し、`maniest.json` で名前とラベルを変更し、ウィジェットの translations フォルダにある default.ts ファイルの `_widgetLabel` のプロパティを変更します。widget/React コンポーネントを作成するには、クラスと関数の 2 つの方法があります。以下に、2 つの違いについて紹介します。

- クラスコンポーネント

    - ES6 クラスを利用し、React のコンポーネントクラスを拡張します。
    - 独自のデータを state で維持します。
    - props(properties) をクラスコンポーネントに渡し、this.props でアクセスします。
    - render() メソッドを使います。

- 関数コンポーネント

    - アロー関数を使った JavaScript の基本的な関数ですが、通常の関数キーワードを使用することができます。
    - props を受け入れて使用します。
    - React Hooks を使用して state やその他の機能を使用します。
    - render() メソッドはありません。

開発者向けドキュメントで使用されているサンプルは、1 つを除いてすべてクラスコンポーネントに基づいています。今後のリリースでは、関数コンポーネントのサンプルを追加する予定です。

### クラスコンポーネントを使ったウィジェットの作成

以下の例では、React.PureComponent クラスを拡張して、シンプルな hello world クラスの widget/component を作成する方法を示しています。ウィジェットは、`export default class Widget extends React.Component<AllWidgetProps>, any> {` で `AllWidgetProps` 型で宣言されており、ウィジェットの props を使用しています。 `render()` メソッドは、translations ファイル内の `_widgetLabel` のプロパティで設定した テキスト名：`hello world` とウィジェット名を返すために呼び出されます。

```tsx
//a custom pragma to transform your jsx into plain JavaScript
/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
export default class Widget extends React.Component<AllWidgetProps, any> {

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

### ウィジェットの UI 設定

ウィジェットの UI 設定は、ウィジェットの作成と似ていますが、1 つの例外を除いて、setting フォルダに setting.tsx があります。ウィジェットの設定を作成するには、クラスと関数の2つの方法があります。クラスコンポーネントを使うと、jimu-for-builder パッケージの一部である BaseWidgetSetting クラスを拡張することができます。この例では、データソースを追加して設定パネルの config.json ファイルと対話する方法を示しています。この例では、以下を含むいくつかのインポートに注意を払う必要があります。

- import React.Component はクラスを拡張するために使用します。
- import DataSourceTypes はデータソースの種類に使用します。
- import SettingSection と SettingRow は設定に便利なUIコンポーネントです。
- import DataSourceSelector もデータソースの選択に使われるコンポーネントです。
- import IMConfigはconfig.json ファイルに使用されます。

```tsx
import {React, Immutable, FormattedMessage} from 'jimu-core';
import {AllWidgetSettingProps} from 'jimu-for-builder';
import {DataSourceTypes} from 'jimu-arcgis';
import {SettingSection, SettingRow} from 'jimu-ui/advanced/setting-components';
import {DataSourceSelector} from 'jimu-ui/advanced/data-source-selector';
import {IMConfig} from '../config';
import defaultI18nMessages from './translations/default'
```

BaseWidgetSetting クラスは AllWidgetSettingProps と IMConfig という型で宣言されています。supportedTypes プロパティは、クラス全体でデータソースタイプのウェブマップに使用されます。 onDataSourceSelected は、データソースの選択を処理する関数を持つクラスプロパティです。設定UIの変更を通知する関数 this.props.OnSettingChange() を使用しています。クラスプロパティの onP1ChangeとonP2Change は、React のイベント処理を利用して、config.json ファイルの値の設定を支援しています。

```tsx
export default class Setting extends React.Component{
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