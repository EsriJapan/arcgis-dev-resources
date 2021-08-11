+++
title = "レイアウト（Layout）"
weight = 6
aliases = ["/layout/"]
+++

出典：ArcGIS Experience Builder - Guide - [Layout](https://developers.arcgis.com/experience-builder/guide/core-concepts/layout/)

### レイアウト（Layout）
レイアウトは、レイアウトコンテナにコンテンツを配置する方法を定義します。コンテンツには、ウィジェット、セクション、または画面グループが含まれ、レイアウト コンテナには、ページ、ビュー、またはダイアログなどがあります。ArcGIS Experience Builder には、いくつかのレイアウト規則があります。たとえば、新しいページを作成するときに、Fixed レイアウトまたは Flow レイアウトを選択したり、Layout ウィジェットを使用して異なるレイアウトを作成したりすることができます。

アプリ コンフィグでは、レイアウトは `layouts` プロパティで定義され、レイアウト コンテナは layout id でレイアウトを参照します。レイアウトコンテナには、異なるサイズモードでのレイアウトを定義する `layouts` オブジェクトプロパティがあります。Experience Builder では、Large、Medium、Small の各サイズモードをサポートしています。レイアウトが定義されていないサイズモードでは、アプリの設定で定義された `mainSizeMode` レイアウトが使用されます。

フレームワークのレイアウト・コンテナの他に、ウィジェットもレイアウト・コンテナになることができます。ウィジェットがレイアウト・コンテナになると，ユーザーは他のウィジェットをドラッグ・アンド・ドロップすることができます．例えば、Map や Card はレイアウト・コンテナ・ウィジェットです。レイアウト・コンテナ・ウィジェットは、`manifest.json` で `layouts` プロパティを宣言し、LayoutEntry コンポーネントを使用する必要があります。パフォーマンス上の理由から、以下のロジックを使用する必要があります。

```tsx
  import {LayoutEntry} from 'jimu-layouts/layout-runtime'

  let LayoutEntryComponent
  if (window.jimuConfig.isInBuilder) {
    LayoutEntryComponent = this.props.builderSupportModules.LayoutEntry
  } else {
    LayoutEntryComponent = LayoutEntry
  }
```