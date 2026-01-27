+++
title = "拡張ポイント (Extension points)"
weight = 14
aliases = ["/extension-points/"]
+++

出典：ArcGIS Experience Builder - Guide - [Extension points](https://developers.arcgis.com/experience-builder/guide/extension-points/)

### 拡張ポイント (Extension points)

Jimu ライブラリーを使用すると、ArcGIS Experience Builder を拡張することができます。多くの場合、カスタム ウィジェットやテーマを作成することで Experience Builder を拡張します。また、Jimu エクステンションにより、より深いカスタマイズを行うことができます。

Jimu ライブラリーでは、特定の拡張ポイントが定義されています。拡張ポイントとは、エクステンションが準拠すべきインターフェイスを定義したものです。エクステンションとは、拡張ポイントのインターフェイスを実装したクラスのことです。このインターフェイスは、`jimu-core` からエクスポートされた `extensionSpec` です。ウィジェットでエクステンションを提供するには、ウィジェットの `manifest.json` ファイルでエクステンションを宣言する必要があります。

```tsx
"extensions": [
  {
    "point": "<拡張ポイント名>",
    "uri": "<拡張される URI、関連するソース フォルダー>"
  }
]
```

Jimu では、API ドキュメントで定義されている様々な拡張ポイントが定義されています。よく使われる拡張ポイントは以下の 2 つです。

- `AppConfigProcessor` - この拡張ポイントのエクステンションは、`AppConfig` を受け取り、処理された app config を解決するプロミスを返す必要があります。これは、文字列の翻訳 ([Translation サンプルを参照](https://developers.arcgis.com/experience-builder/sample-code/widgets/translation/)) のように、app config を実行時に修正するために使用できます。この処理は、app config がロードされた直後に起動されます。

- `DependencyDefine` - この拡張機能を使用すると、初期化が必要なサード パーティーのライブラリーを使用できます。

- `ReduxStore` - この拡張機能を使用すると、ウィジェットの Redux 状態の `actions` と `reducers` を定義できます。

### サンプル
拡張機能の作成例として、[Translation サンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/translation/)をご紹介します。