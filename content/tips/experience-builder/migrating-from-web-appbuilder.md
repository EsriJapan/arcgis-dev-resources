+++
title = "Web AppBuilder からの移行"
description = "Web AppBuilder から ArcGIS Experience Builder (Developer Edition) への移行方法について説明しています。"
weight = 15
aliases = ["/experience/migrating-from-web-appbuilder/"]
+++

出典：ArcGIS Experience Builder - Guide - [migrating-from-web-appbuilder](https://developers.arcgis.com/experience-builder/guide/migrating-from-web-appbuilder/)

## はじめに
ArcGIS Experience Builder は、Web AppBuilder とはさまざまな点で異なります。これらの違いから、Web AppBuilder から Experience Builder へカスタム ウィジェットやテーマを直接変換することはできません。手動のプロセスですが、Experience Builder 用にウィジェットやテーマを再構築する際に考慮すべきヒント、テクニック、および推奨プラクティスを紹介します。

{{< callout >}}

これは網羅的なものではありませんし、開発者が手動で書き直す作業であることに変わりはありません。これらの手順は、Experience Builder 内でウィジェットを再ビルドする際の準備と計画に役立つように提供されます。

{{< /callout >}}

## スタートアップ
まず、Experience Builder のドキュメントを確認し、[ウィジェット開発のスタート ドキュメント](https://esrijapan.github.io/arcgis-dev-resources/tips/experience-builder/widget-development/getting-started-widget/)に従って TypeScript、React、JSX、Jimu を学びます。

## ウィジェットの新規作成

コア技術の概念に慣れたら、ブランク/スターターの Experience Builder のウィジェットを作成し、ビルド環境が正しく設定されていることを確認します。次に、Web AppBuilder のカスタム ウィジェットから新しい Experience Builder のカスタム ウィジェットにコードを移動し、次の点に注意してください。

1. どちらのウィジェットにも manifest.json がありますが、Experience Builder のものは若干異なりますので、[新しい manifest.json の形式](https://developers.arcgis.com/experience-builder/guide/widget-manifest/)を確認し、適宜更新してください。

2. dojo 固有のモジュールはすべて置き換える必要があります。 - たとえば、`dojo/domClass` モジュールの `domClass` 関数を次のように使用する場合

    ```tsx
    domClass.contains(domNode, "myClassName");
    ```

    この場合、Dojo 以外の選択肢でそれを書き直す必要があります。

    ```tsx
    domNode.classList.contains("myClassName");
    ```

{{< callout >}}

Dojo はブラウザのサポートを標準化してくれますが、ネイティブの JavaScript の機能を使うことはできませんので、[MDN](https://developer.mozilla.org/en-US/docs/Web/API) や [CanIUse](https://caniuse.com/) などのサイトで、使用する機能のブラウザ サポートを確認する必要があります。この場合、例えば CanIUse によると、[`classList` はすべての主要なブラウザでサポートされている](https://caniuse.com/?search=classList)と述べています。

{{< /callout >}}

3. [ウィジェットのライフサイクル メソッド](https://developers.arcgis.com/web-appbuilder/guide/widget-life-cycle.htm)は、同じようには動作しません。一般的に、ウィジェット起動時に発生するウィジェットのライフサイクル メソッド (`constructor`、`postMixinProperties`、`buildRendering`、`postCreate`) は、おそらく [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount) 関数 (またはフックを使用する場合は同等の `useEffect()`)に移動できます。

4. 今まで [widget.html にあったテンプレート](https://developers.arcgis.com/web-appbuilder/guide/define-the-template.htm)は、Experience Builder のカスタム ウィジェット (React コンポーネント) の `render()` 関数で [JSX](https://reactjs.org/docs/introducing-jsx.html) に変換されるようになります。
    - DOM ノードに `data-dojo-attach-point` で名前を付けている場合、React でそれに相当するものは [Refs](https://reactjs.org/docs/refs-and-the-dom.html) です。
    - 国際化/翻訳に NLS を使用している場合、テンプレート (例：`<div>${nls.label1}.</div>` では、[「translations folder」](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/#i18n-support)パターンを使用するようになります)。

5. Map/Scene オブジェクトへのアクセス - `this.map` を使用している場合、Experience Builder では 1 つのエクスペリエンスに複数のマップまたはシーンを持つことができるようになったため、このパターンはまったく同じようには動作しません (Web AppBuilder アプリごとに 1 つのマップしか持つことができませんでした)。[MapWidgetSelector](https://developers.arcgis.com/experience-builder/storybook/?path=/story/components-jimu-ui-advanced-setting-components-mapwidgetselector--has-selected-map) と [JimuMapViewComponent](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapViewComponent/) を参照してください。

6. カスタム設定パネル (`/setting` フォルダー内) がある場合、それに相当するのは Experience Builder カスタム ウィジェットの `src/setting` 内です。[設定 UI の作成に関する詳細情報](https://developers.arcgis.com/experience-builder/guide/extend-base-widget/#creating-a-setting-ui-for-the-widget)
