+++
title = "拡張ポイント (Extension points)"
weight = 14
aliases = ["/extension-points/"]
+++

出典：ArcGIS Experience Builder - Guide - [Extension points](https://developers.arcgis.com/experience-builder/guide/extension-points/)

### 拡張ポイント (Extension points)
Jimu ライブラリーを使用すると、ArcGIS Experience Builder を拡張することができます。多くの場合、カスタム ウィジェットやテーマを作成することで Experience Builder を拡張します。また、Jimu エクステンションにより、より深いカスタマイズを行うことができます。

### 拡張ポイントとは
Experience Builder Jimu ライブラリーにおける拡張ポイントは、開発者がフレームワークの動作をどのように拡張できるかを定義する、名前付きの拡張インターフェイスです。拡張機能とは、特定の拡張ポイントのインターフェースを実装するクラスのことです。

すべての拡張機能の基底インターフェースは [`BaseExtension`](https://developers.arcgis.com/experience-builder/experience-builder/api-reference/jimu-core/BaseExtension/) です。各拡張機能には、この基底インターフェースを継承した独自のインターフェースがあります。たとえば、`jimu-core` からエクスポートされる [`extensionSpec.AppConfigProcessorExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/AppConfigProcessorExtension/) インターフェイスは、`AppConfigProcessor` 拡張ポイントで使用されます。

ウィジェットで拡張機能を提供するには、そのウィジェットの `manifest.json` ファイルでそれを宣言する必要があります。

### 拡張ポイントを使う理由

拡張ポイントを使用すると、Experience Builder フレームワークにフックして、標準のウィジェット開発では不可能な方法でその動作を変更したり、機能を強化したりすることができます。たとえば、拡張機能を使用して次のようなことができます。

- 実行時に他のウィジェットが読み込まれる前に、アプリの設定を変更する
- 初期化が必要なサードパーティ製ライブラリを統合する
- ウィジェット用にカスタム [Redux](https://redux.js.org/) アクションおよびリデューサーを定義する

### 拡張機能の実装方法
拡張機能を実装するには、次の手順を実行する必要があります。

1. `extensionSpec` で定義されている拡張ポイント インターフェースを実装するクラスを作成します。
2. ウィジェットの `src` フォルダ内のファイルから、その拡張クラスをエクスポートします。
3. ウィジェットの `manifest.json` ファイルの `extensions` セクションで、その拡張機能を宣言します。

コード例
```tsx
"extensions": [
  {
    "point": "<Extension point name>",
    "uri": "<Extension uri, relative to src folder>"
  }
]
```

### 拡張ポイントの種類
Jimu では、API リファレンスに記載されているさまざまな拡張ポイントが定義されています。よく使用される拡張ポイントには、次のようなものがあります。

|  **拡張ポイント名**  |  **説明**  |
|-----|-----|
| [`AppConfigProcessorExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/AppConfigProcessorExtension/) | この拡張ポイント用の拡張機能は、`AppConfig` を受け取り、処理済みのアプリ設定を解決する Promise を返す必要があります。これにより、文字列の翻訳など、アプリ設定のランタイム変更を行うことができます（[翻訳のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/translation/)を参照）。この処理は、アプリ設定の読み込み直後に呼び出されます。 |
| [`BuilderOperationsExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/BuilderOperationsExtension/)  | この拡張機能を使用すると、アプリの保存や公開といったビルダー操作にフックすることができます。 |
| [`ReduxStoreExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/ReduxStoreExtension/)  | 	この拡張機能を使用すると、アクション、リデューサー、初期状態、ストアキーなどのプロパティを取得することで、ウィジェットの Redux ストアを拡張することができます。 |

### コード例
#### アプリ設定内の文字列を翻訳する

この例では、実行時にアプリ設定内の文字列を変換するために、`AppConfigProcessorExtension` 拡張ポイントを実装する方法を示します。

この拡張機能は、`manifest.json` 内で次のように宣言されています。

```tsx
"extensions": [
    {
      "point": "APP_CONFIG_PROCESSOR_EXTENSION",
      "uri": "extensions/translation"
    }
  ]
```

`translation.ts` ファイルでは、`AppConfigProcessorExtension` インターフェイスが実装されており、アプリ設定を処理して、i18n プレースホルダーを翻訳済み文字列に置き換えます。

```tsx
import { type extensionSpec, type AppConfig, utils, createIntl, getAppStore } from 'jimu-core'
import defaultMessage from '../runtime/translations/default'

export default class Translation implements extensionSpec.AppConfigProcessorExtension {
  id = 'translation'
  widgetId: string

  async process (appConfig: AppConfig): Promise<AppConfig> {
    // Do not replace when run in builder.
    if (window.jimuConfig.isInBuilder) {
      return Promise.resolve(appConfig)
    }
    const widgetJson = appConfig.widgets[this.widgetId]

    const intl = createIntl({
      locale: getAppStore().getState().appContext.locale,
      messages: Object.assign({}, defaultMessage, widgetJson.manifest.i18nMessages)
    })

    utils.replaceI18nPlaceholdersInObject(appConfig, intl, defaultMessage)
    return Promise.resolve(appConfig)
  }
}
```

上記のコードは

1. `AppConfigProcessorExtension` インターフェースを実装する `Translation` クラスを定義します。

2. `process` メソッドは、アプリがビルダー内で実行されているかどうかを確認し、実行されていない場合は、現在のロケールとウィジェット マニフェストのメッセージを使用して、国際化 (intl) オブジェクトを作成します。

3. その後、`utils.replaceI18nPlaceholdersInObject` を呼び出して、アプリ設定内のプレースホルダーを翻訳済み文字列に置き換え、変更後のアプリ設定を返します。

{{< callout >}}

この Translation 拡張機能の詳細については、[Experience Builder SDK リソース リポジトリ](https://github.com/Esri/arcgis-experience-builder-sdk-resources)内の [Translation](https://github.com/Esri/arcgis-experience-builder-sdk-resources/tree/master/widgets/translation) サンプルコードをご覧ください。

{{< /callout >}}
