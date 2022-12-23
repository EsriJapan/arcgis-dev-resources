+++
title = "Jimu"
weight = 9
aliases = ["/jimu/"]
+++

出典：ArcGIS Experience Builder - Guide - [Jimu](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/)

### Jimu

Jimu は、設定可能なエクスペリエンスを作成するために使用されるJavaScript ライブラリで、以下のようなパッケージで構成される拡張フレームワークです。

- `jimu-core` パッケージは、アプリの設定をロードして解析し、アプリの設定に基づいてレイアウト、テーマ、ウィジェットをロードします。これをサポートするために、本パッケージは WidgetManager、ConfigManager、ThemeManager などのいくつかのクラスを定義しています。また、jimu-core はウィジェットのインターフェイス、いくつかの共通型、およびいくつかの拡張ポイントを定義していますが、これらは他のパッケージやウィジェットにより拡張される可能性があります。
- `jimu-layouts` パッケージは、レイアウト ウィジェットのための、一般的な実装が含まれています。
- `jimu-ui` パッケージは、エクスペリエンスが利用するすべての UI コンポーネントが含まれています。より詳しくは、reactstrap と emotion-js を使用しています。さらに reactstrap に含まれていない、より多くのコンポーネントが追加されています。読み込みサイズを小さくするために、コンポーネントはindex、setting-components、sql-expression-builder などのいくつかのエントリに分割されています。詳細はAPIを参照してください。
- `jimu-arcgis` パッケージは、ArcGIS Maps SDK for JavaScript 4.x を実行するために必要なすべてのコンポーネントが含まれています。
- `jimu-for-builder` パッケージは、ウィジェットの設定ページの開発をサポートしています。

これらのパッケージは同じ構造パターンを使用しているため、同じベストプラクティスに沿って使用することができます。各パッケージは `import` するためのいくつかのエントリを定義し、これらのエントリはパッケージのルートフォルダの下に置かれます。`lib` フォルダ内のコンテンツは，パッケージの内部コンテンツとみなされますので，ウィジェットには `import` しないでください。例えば、`jimu-ui` の `Button` コンポーネントを使用する必要がある場合は、`import {Button} from 'jimu-ui'` ではなく、`import {Button} from 'jimu-ui/lib/components/button'` のようにインポートする必要があります。