+++
title = "拡張ポイント (Extension points)"
weight = 14
aliases = ["/extension-points/"]
+++

出典：ArcGIS Experience Builder - Guide - [Extension points](https://developers.arcgis.com/experience-builder/guide/extension-points/)

## 拡張ポイント (Extension points)
ArcGIS Experience Builder フレームワークは、拡張できるように設計されています。開発者は、カスタム ウィジェットやテーマの作成など、さまざまな方法で Experience Builder を拡張できます。さらに、Jimu の拡張機能を使用して、より高度なカスタマイズを行うこともできます。

## 拡張ポイントとは
Experience Builder Jimu ライブラリーにおける拡張ポイントは、開発者がフレームワークの動作をどのように拡張できるかを定義する、名前付きの規約です。拡張機能とは、特定の拡張ポイントのインターフェイスを実装するクラスのことです。

すべての拡張機能に共通する基底インターフェイスは [`BaseExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/BaseExtension/) です。各拡張機能には、この基底インターフェイスを継承した独自のインターフェイスがあります。たとえば、`jimu-core` からエクスポートされる [`extensionSpec.AppConfigProcessorExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/AppConfigProcessorExtension/) インターフェイスは、`AppConfigProcessor` 拡張ポイントで使用されます。

ウィジェットで拡張機能を提供するには、そのウィジェットの `manifest.json` ファイルで拡張機能を宣言する必要があります。

## 拡張ポイントを使う理由

拡張ポイントを使用すると、Experience Builder フレームワークにフックして、標準のウィジェット開発では不可能な方法でその動作を変更したり、機能を強化したりすることができます。たとえば、拡張機能を使用して次のようなことができます。

- 実行時に他のウィジェットが読み込まれる前に、アプリの設定を変更する
- 初期化が必要なサードパーティー製ライブラリーを統合する
- ウィジェット用にカスタム [Redux](https://redux.js.org/) アクションおよびリデューサーを定義する

## 拡張機能の実装方法
拡張機能を実装するには、次の手順を実行します。

1. `extensionSpec` で定義された拡張ポイントのインターフェイスを実装するクラスを作成します。
2. ウィジェットの `src` フォルダ内のファイルから、その拡張クラスをエクスポートします。
3. ウィジェットの `manifest.json` ファイルの `extensions` セクションで、その拡張機能を宣言します。

コード例
```json
"extensions": [
  {
    "point": "<Extension point name>",
    "uri": "<Extension uri, relative to src folder>"
  }
]
```

## 拡張ポイントの種類
Jimu では、API リファレンスに記載されているさまざまな拡張ポイントが定義されています。よく使用される拡張ポイントには、次のようなものがあります。

|  **拡張ポイント名**  |  **説明**  |
|-----|-----|
| [`AppConfigProcessorExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/AppConfigProcessorExtension/) | この拡張ポイント用の拡張機能は、`AppConfig` オブジェクトを受け取り、処理済みのアプリ設定で解決される Promise を返す必要があります。これにより、文字列の翻訳など、アプリ設定を実行時に変更できます。（[翻訳のサンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/translation/)を参照）。この処理は、アプリ設定の読み込み直後に呼び出されます。 |
| [`BuilderOperationsExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/BuilderOperationsExtension/)  | この拡張機能を使用すると、アプリの保存や公開といったビルダー操作にフックすることができます。 |
| [`ReduxStoreExtension`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/ReduxStoreExtension/)  | 	アクション、リデューサー、初期状態、ストア キーなどを提供して、ウィジェットの Redux ストアを拡張できます。 |

## コード例
### アプリ設定内の文字列を翻訳する

この例では、実行時にアプリ設定内の文字列を変換するために、`AppConfigProcessorExtension` 拡張ポイントを実装する方法を示します。

この拡張機能は、`manifest.json` 内で次のように宣言します。

```json
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
    // ビルダーで実行されている場合は置換しません。
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

上記のコードは、次の処理を行います。

1. `AppConfigProcessorExtension` インターフェイスを実装する `Translation` クラスを定義します。

2. `process` メソッドは、アプリがビルダー内で実行されているかどうかを確認し、実行されていない場合は、現在のロケールとウィジェット マニフェストのメッセージを使用して、国際化 (intl) オブジェクトを作成します。

3. `utils.replaceI18nPlaceholdersInObject` を呼び出して、アプリ設定内のプレースホルダーを翻訳済み文字列に置き換え、変更後のアプリ設定を返します。

{{< callout >}}

この Translation 拡張機能の詳細については、[Experience Builder SDK リソース リポジトリー](https://github.com/Esri/arcgis-experience-builder-sdk-resources)内の [Translation](https://github.com/Esri/arcgis-experience-builder-sdk-resources/tree/master/widgets/translation) サンプル コードをご覧ください。

{{< /callout >}}
