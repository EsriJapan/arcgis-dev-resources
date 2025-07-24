+++
title = "Jimu"
weight = 9
aliases = ["/jimu/"]
+++

出典：ArcGIS Experience Builder - Guide - [Jimu](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/)

### Jimu

[Jimu](https://developers.arcgis.com/experience-builder/api-reference/) は、設定可能なエクスペリエンスを作成するために使用される JavaScript ライブラリーで、以下のようなパッケージで構成される拡張フレームワークです。

- [jimu-arcgis](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/) パッケージは、ArcGIS Maps SDK for JavaScript を実行するためのクラスとメソッドが含まれています。よく使われるクラスは `JimuMapView` と `JimuMapViewComponent` です。
- [jimu-core](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/) パッケージは、ウィジェットのプロパティ、メッセージ アクション、データ ソースを扱うためのインターフェイスと型を提供します。また、エクスペリエンスを通じて使用されるいくつかのクラスも定義しています。
- [jimu-for-builder](https://developers.arcgis.com/experience-builder/api-reference/jimu-for-builder/) パッケージは、`SettingChangeFunction` や `WidgetSettingProps` といったウィジェット設定ページを開発するためのクラスを提供します。
- [jimu-for-test](https://developers.arcgis.com/experience-builder/api-reference/jimu-for-test/) パッケージは、ユニット テストに使用できるクラス、型、関数が含まれています。
- [jimu-ui](https://developers.arcgis.com/experience-builder/api-reference/jimu-ui/) パッケージは、エクスペリエンスが使用するすべての UI コンポーネントが含まれています。パフォーマンス上の理由から、UI コンポーネントは 3 つのカテゴリに分かれています。`jimu-ui` のエントリーには、`Button` や `Input` などの一般的な UI コンポーネントが含まれています。`jimu-ui/basic` 以下のエントリーには、`ColorPicker` や `QRCode` などの目的に応じたコンポーネントが含まれます。`jimu-ui/advanced` 以下のエントリーは重く、複雑です。例えば、`setting-components` エントリーには、ウィジェットの設定で使用される可能性のある複数のコンポーネントが含まれています。
<!-- - `jimu-layouts` パッケージは、レイアウト ウィジェットのための、一般的な実装が含まれています。 -->

これらのパッケージは同じ構造パターンを使用しているため、同じベストプラクティスに沿って使用することができます。各パッケージは `import` するためのいくつかのエントリーを定義し、これらのエントリーはパッケージのルート フォルダーの下に置かれます。`lib` フォルダー内のコンテンツは，パッケージの内部コンテンツとみなされますので，ウィジェットには `import` しないでください。例えば、`jimu-ui` の `Button` コンポーネントを使用する必要がある場合は、`import {Button} from 'jimu-ui'` ではなく、`import {Button} from 'jimu-ui/lib/components/button'` のようにインポートする必要があります。