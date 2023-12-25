+++
title = "ウィジェット開発"
description = "ウィジェットと呼ばれる、再利用可能な UX コンポーネント作成の基礎を紹介します。"
weight = 4
hidden = true
aliases = ["/javascript/custom-widget/"]
+++

出典：ArcGIS Maps SDK for JavaScript - [Widget development](https://developers.arcgis.com/javascript/latest/custom-widget/)

ウィジェットは再利用可能な UI コンポーネントで、リッチな UX を提供する鍵となります。ArcGIS Maps SDK for JavaScript では、完全にカスタム化されたウィジェットを <a herf="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML 要素</a>として <a herf="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html" target="_blank">View</a> に含めることができます。これには、完全に新しい機能を持つ独自のビューを開発する必要があり、ウィジェットの ViewModel を拡張することとは異なります。

カスタムウィジェットを作成する場合、<a herf="https://developers.arcgis.com/javascript/latest/es-modules/" target="_blank">@arcgis/core</a> ES モジュールをお好みのフロントエンド JavaScript フレームワークと共に使用することをお勧めします。React、Angular、Vue.js などのフレームワークは必須ではありませんが、最大の拡張性を提供します。SDK と疎結合で、フレームワークのよく知られた UI/UX パターンとコンポーネントのライフサイクルに準拠した複数のウィジェットを作成できます。独自のカスタムウィジェットの作成方法については、<a herf="https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-custom-widget" target="_blank">jsapi-custom-widget</a> のサンプルを参照してください。

{{% notice note %}}

<b>非推奨のお知らせ</b>  
バージョン 4.27 以降、完全なカスタム ウィジェットを構築するための基礎として、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html" target="_blank">/esri/widgets/Widget</a> をサブクラス化または拡張することは推奨されなくなりました。このパターンでは、SDK 内部への依存関係が作成され、文書化されていない変更が頻繁に発生する可能性があります。以下のガイド内容は、レガシー パターンに従ったものであり、既存のウィジェットを保守する場合にのみ使用してください。  


{{% /notice %}}

このフレームワークはすべての <a href="https://dojotoolkit.org/reference-guide/1.10/dijit/" target="_blank">Dijit</a> を直接差し替えることを意図していません。例えば、<a href="http://dgrid.io/" target="_blank">dgrid</a> の利用には Dijit が必要です。

トピック

  * [開発要件](#開発要件)
  * [ウィジェット ライフサイクル](#ウィジェット-ライフサイクル)
  * [ウィジェットの実装](#ウィジェットの実装)
  * [TypeScript デコレーター](#typescript-デコレーター)
  * [サンプルコード](#サンプルコード)
  * [関連リンク](#関連リンク)

## 開発要件

独自のカスタムウィジェットを作成する前に、自分のマシンでローカルにアプリケーションをビルドできるなど、最低限の要件を満たしていることを確認してください。このプロセスは、Web サーバー上でホストされ、ブラウザー上で実行される標準的な JavaScript アプリケーションを作成する場合に比べ、いくつかのステップが増えます。

### TypeScript

<a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> を使うことをお勧めします。その利点のひとつは、デコレーターを使って機能を強化できることです。<a href="https://developers.arcgis.com/javascript/latest/typescript-setup/" target="_blank">TypeScript のセットアップ ガイド</a> ページでは、ArcGIS Maps SDK for JavaScript を使用して TypeScript 開発環境をセットアップするための基本的な手順を説明しています。また、TypeScriptとは何か、なぜ使われるのか、どのように使うのかについて詳しく説明した<a href="https://www.sitepen.com/blog/update-the-definitive-typescript-guide" target="_blank">オンライン リソース</a>もたくさんあります。これらの基本に慣れることで、ウィジェット開発プロセスがより簡単になります

### JSX

<a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a>  は、JavaScriptの拡張構文で、HTMLと同様にウィジェットのユーザーインターフェイスを記述することができます。一般的には React と関連していますが、他の実装においても使うことができます。JavaScript とインラインで使えるという点では、HTML に似ています。カスタム ウィジェットは、TypeScript と JSX を組み合わせた拡張子 .tsx を使ってビルドされ、JavaScript に直接コンパイルされます。

### esri/core/Accessor の理解

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html" target="_blank">Accessor</a> は 4.x の主要な特徴のひとつであり、ウィジェットを含むすべてのクラスの基盤です。既存の API クラスを拡張してサブクラス、つまり子クラスを作成するため、カスタムウィジェットもこれに含まれます。カスタムウィジェットは、super() メソッドを呼び出すことで、親クラスからメソッドとプロパティを継承します。その他の詳細や使用パターンについては、<a href="https://developers.arcgis.com/javascript/latest/guide/implementing-accessor/index.html" target="_blank">Implementing Accessor</a> のトピックを参照してください。

### arcgis/core
<a href="https://developers.arcgis.com/javascript/latest/es-modules/" target="_blank">@arcgis/core</a> のESモジュールは、<a href="https://developers.arcgis.com/javascript/latest/amd-build/" target="_blank">AMD モジュール</a>と同じ API 機能を持ちます。 ES モジュールは専用の AMD ローダーを必要としないため、ほぼすべての主要な JavaScript フレームワークやビルドツールでシームレスに動作し、ブラウザや最新のビルドツールでネイティブに消費できるため、カスタムウィジェットの構築には @arcgis/core を使用することをお勧めします。モジュールは <a href="https://developers.arcgis.com/javascript/latest/install-and-set-up/#es-modules-via-npm" target="_blank">npm</a> を使って開発マシンのローカルにインストールします。

## ウィジェット ライフサイクル

開発をはじめる前に、ウィジェット ライフサイクルを理解している必要があります。ウィジェットの種類にかかわらず、ライフサイクル特有の一般的な概念は同じです。

1. constructor (params) - プロパティを設定している間に、ウィジェットが最初に作成されるところです。ウィジェットは Accessor から生じるので、get、set、watch を使いプロパティへアクセスできます（get、set、watch の詳細は <a href="https://developers.arcgis.com/javascript/latest/guide/working-with-props/index.html" target="_blank">Working with properties</a> をご参照ください）。
2. <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize" target="_blank">postInitialize()</a> - このメソッドは、ウィジェット作成後、UI の描画前に呼ばれます。
3. <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render" target="_blank">render()</a> - ウィジェット開発で唯一の必須となるメソッドです。UI を描画するために使用されます。
4. <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#destroy" target="_blank">destroy()</a> - ウィジェットのインスタンスを解放するためのメソッドです。

## TypeScript デコレーター

ウィジェット開発では <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank">TypeScript のデコレーター</a>が活用され、API では<a href="" target="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html">デコレーター</a>がクラスの作成に使用される基礎的なグルーとして使用されます。これにより、既存のプロパティ、メソッド、コンストラクタに共通する動作を設計時に拡張することができます。ウィジェット デコレーターの最も一般的なタイプについて、以下で説明します。

{{% notice note %}}

API デコレーターを使用する場合は、後方互換性のために `useDefineForClassFields` フラグを `false` に設定する必要があります。詳細は <a href="https://www.typescriptlang.org/tsconfig#useDefineForClassFields" target="_blank">TSConfig</a> を参照してください。  


{{% /notice %}}

### `@subclass`（`declared` と共に使われます）

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html#subclass" target="_blank">@subclass()</a> デコレーターは、API クラスを拡張するために使用します。また、コンストラクタで `declaredClass` プロパティを文字列で指定することもできます。これは、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#declaredClass" target="_blank">declaredClass</a> が読み取り専用である既存のクラスと、作成しようとしているカスタム クラスを区別するのに役立ちます。

以下のスニペットは、ベースとなる <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html" target="_blank">`Widget`</a> クラスをインポートして継承し、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render" target="_blank">`render`</a> メソッドで UI を定義しています。<a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a> は UI を定義するために使用されます。この単純なシナリオでは、`div` 要素が作成され、そのコンテンツとして `John Smith` という文字列が定義されます。
```ts
import Widget from "@arcgis/core/widgets/Widget.js";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {
  render() {
    return (
      <div>John Smith</div>
    );
  }
}
```

### `@property()`

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html" target="_blank">Accessor</a> プロパティを定義するには <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html#property" target="_blank">@property()</a> デコレーターを使用します。このデコレーターで定義されたプロパティはすべて、`get` と `set` ができます。さらに、プロパティの変更を <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-watchUtils.html#watch" target="_blank">watch</a> することもできます。  

```ts
@property()
name: string;
```

### `@aliasOf()`

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html#aliasOf" target="_blank">@aliasOf()</a> デコレーターは、デコレートするプロパティとそのメンバーの内部プロパティとの間に双方向バインディングを作成します。

```ts
@aliasOf("initialCenter.extent")
extent: Extent;
```

## ウィジェットの実装

以下のステップは、独自のカスタム ウィジェットを実装する際に必要なステップの簡単な概要を提供します。
<li><a href="https://developers.arcgis.com/javascript/latest/custom-widget/#extend-the-widget" target="_blank">ウィジェットの拡張</a></li>
<li><a href="https://developers.arcgis.com/javascript/latest/custom-widget/#implement-properties-and-methods" target="_blank">プロパティとメソッドの実装</a></li>
<li><a href="https://developers.arcgis.com/javascript/latest/custom-widget/#render-the-widget" target="_blank">ウィジェットのレンダリング</a></li>
<li><a href="https://developers.arcgis.com/javascript/latest/custom-widget/#export-module" target="_blank">エクスポート モジュール</a></li>


### 新しいウィジェット クラスの作成
ベースとなる <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html" target="_blank">Widget</a> クラスを拡張し、@subclass() コンストラクタで宣言されたクラスを指定することから始めます。

```ts
// 拡張に使用する Widget クラスのインポート
import Widget from "@arcgis/core/widgets/Widget.js";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends Widget {

}
```

### プロパティとメソッドの実装
次に、ウィジェット特有のプロパティとメソッドを実装します。このコードは、プロパティ作成において、<a href="https://developers.arcgis.com/javascript/latest/custom-widget/#typescript-decorators" target="_blank">デコレーター</a>をどのように利用するのかを示しています。

```ts
// 'name' プロパティの作成
@property()
name: string = "John Smith";

// private _onNameUpdateメソッドの作成
private _onNameUpdate(): string { return '${this.name}';}
```

デフォルトでは、要素の中で参照される関数は、実際の要素を参照する `this` を持ちます。必要に応じて、`this` の参照先を変更するために <a href="https://maquettejs.org/typedoc/interfaces/vnodeproperties.html#bind" target="_blank">`bind`</a> 属性を使用します。以下では、`name` プロパティを更新するときに呼ばれる `_onNameUpdate` コールバック関数を結び付けています。これは次の <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize" target="_blank">postInitialize</a> メソッドに表示されます。

```ts
class HelloWorld extends Widget {

  constructor(params?: any) {
    super(params);
    this._onNameUpdate = this._onNameUpdate.bind(this);
  }

}
```

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize" target="_blank">postInitialize</a> メソッドは、ウィジェットのプロパティは用意されているが、描画される前に呼ばれます。以下のコードは `name` プロパティを監視しています。プロパティが更新されると、`_onNameUpdate` コールバック関数を呼びます。<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-watchUtils.html#init" target="_blank">`watchUtils.init()`</a> は <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html#WatchHandle" target="_blank">WatchHandle</a> オブジェクトを返し、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#own" target="_blank">`own()`</a> に渡されます。これは、ウィジェットを削除した時点で、リソースを解放するメソッドです。

```ts
  import * as watchUtils from "@arcgis/core/core/watchUtils.js";

  postInitialize() {
    const handle = watchUtils.init(this, "name", this._onNameUpdate);

    // Helper used for cleaning up resources once the widget is destroyed
    this.own(handle);
  }

```

### ウィジェットのレンダリング
プロパティが実装された後、ウィジェットの UI は <a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a> を使用して描画されます。これはウィジェットの <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render" target="_blank">renderer</a> メソッドに処理されます。これは、ウィジェットの実装に必要な唯一のメソッドです。

```
JSX 要素として作成されたウィジェットは、まだサポートされていないことに注意してください。例えば、以下のスニペットは動作しません。

const search = <Search view={view} />;
```

```ts
// UI の描画
render() {
  return (
    <div>
      {this._onNameUpdate()}
    </div>
  );
}
```

最後に、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#destroy" target="_blank">`destroy` を呼びます。このメソッドはウィジェットを削除し、`postInitialize()` 内で参照されている `own()` メソッドに登録された、すべてのリソースを解放します。

```ts
postInitialize() {
  const handle = watchUtils.init(this, "name", this._onNameUpdate);

  // ウィジェットが削除された時点でリソースを解放するメソッド
  this.own(handle);
}
```

### エクスポート モジュール
コードページの一番最後に、モジュールを<a href="https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require" target="_blank">エクスポート</a>する行を追加します。エクスポートは、ウィジェットの機能を `import` 文によって利用可能にします。

```ts
export default HelloWorld;
```

### 完成したコード
<a href="https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-custom-widget" target="_blank">`jsapi-custom-widget`</a> サンプルは、`widget.tsx` ファイル全体を示します。TypeScript ファイルは、クラスが <a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_target">JSX</a> を使用していることを示すために次のような拡張子を使用しています。例：.ts + .jsx = .tsx

## ウィジェット レンダリング
以下のプロパティは、ウィジェットのレンダリングに使用できます。
<li><a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#classes" target="_blank">classes: </a>ウィジェットの class プロパティの値を構築するために使用されるユーティリティ メソッドです。これは、CSS クラスのセットアップを簡略化するのに役立ちます。</li>

```ts
// Widget のクラス ヘルパー メソッドで動作する新しいメソッド
render() {
  const dynamicClass = {
    [CSS.bold]: this.isBold,
    [CSS.italic]: this.isItalic
  }

  return {
    <div class={this.classes(CSS.base, dynamicClass)}>Hello World!</div>
  };
}
```

<li><a href="https://maquettejs.org/typedoc/interfaces/VNodeProperties.html#styles" target="_blank">styles: </a>スタイルを動的に変更できるようにします。</li>

```ts
render() {
  const dynamicStyles = {
    background-color: this.__hasBackgroundColor ? "chartreuse" : ""
  };

  return (
    <div styles={dynamicStyles}>Hello World!</div>
  );
}
```

<li><a href="https://maquettejs.org/typedoc/interfaces/VNodeProperties.html#afterCreate" target="_blank">afterCreate: </a>このコールバック メソッドは、ノードが DOM に追加された後に実行されます。子ノードやプロパティはすでに適用されています。実際の DOM ノードにアクセスするには、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render" target="_blank">render</a> 内でこのメソッドを使用します。要素ごとに使用することも可能です。</li>

```ts
private _doSomethingWithRootNode(element: Element){
  console.log(element);
}

private _doSomethingWithChildNode(element: Element){
  console.log(element);
}

// Access real DOM node within render()
render() {
  return (
    <div afterCreate={this._doSomethingWithRootNode}>Hello World!</div>
  );
}

// Can also be used per element

render() {
  return (
    <div afterCreate={this._doSomethingWithRootNode}>
      <span afterCreate={this._doSomethingWithChildNode}>Hello World!<span>
    </div>
  );
}
```

<li><a href="http://maquettejs.org/typedoc/interfaces/vnodeproperties.html#afterupdate" target="_blank">afterUpdate: </a>このコールバック メソッドは、ノードが更新されるたびに実行されます。</li>

```ts
private _afterUpdate(element: Element){
  console.log(element);
}

render() {
  return (
    <div afterUpdate={this._afterUpdate}>Hello world!</div>
  );
}
```

<li><a href="https://maquettejs.org/typedoc/interfaces/VNodeProperties.html#bind" target="_blank">bind: </a>このプロパティは、イベント ハンドラーの `this` の値を設定するために使用される。</li>

```ts
private _whatIsThis(): void {
  console.log('this === widget: ${this}');
}

render() {
  return (
    <div bind={this} onclick={this._whatIsThis}>'this' is the widget instance</div>
  );
}
```

<li><a href="https://maquettejs.org/typedoc/interfaces/VNodeProperties.html#key" target="_blank">key: </a>これは、兄弟要素の中で DOM ノードを一意に識別するために使用されます。これは、同じセレクターを持つ兄弟要素があり、要素が動的に追加/削除される場合に重要です。</li>

```ts
// キーは、以下のサンプルでは文字列で指定されていますが、数値やオブジェクトを指定することもできます。

render() {
  const top = this.hasTop ? <li class={CSS.item} key="top">Top</header> : null;
  const middle = this.hasMiddle ? <li class={CSS.item} key="middle">Middle</section> : null;
  const bottom = this.hasBottom ? <li class={CSS.item} key="bottom">Bottom</footer> : null;

  return (
    <ol>
      {top}
      {middle}
      {bottom}
    </ol>
  );
}
```

上記のメソッドに加えて、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-support-widget.html#storeNode" target="_blank">storeNode</a> という便利なメソッドもあります。<a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTMLElement</a> の DOM ノード リファレンスを変数に代入するときに使います。これは、カスタム データ属性 `data-node-ref` を使用して、要素の DOM ノードへの参照を格納します。これを正しく動作させるには、以下のスニペットに示すように、`bind={this}` のように、ウィジェット インスタンスにもバインドする必要があります。

```ts
// data-node-ref 属性を DOM ノード値に割り当てます。
//これは `bind` プロパティと組み合わせて使用する必要があり、
// storeNode コンビニエンス メソッドを使用するときに使用します。

rootNode: HTMLElement = null;

render() {
  return (
    <div afterCreate={storeNode} bind={this} data-node-ref="rootNode" />
  );
}
```

## 関連リンク

* <a href="https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-custom-widget" target="_blank">Sample - jsapi-custom-widget</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html" target="_blank">Accessor </a>class（英語）
* <a href="https://developers.arcgis.com/javascript/latest/typescript-setup/" target="_blank">Guide - TypeScript Setup</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/implementing-accessor/" target="_blank">Guide - Implementing Accessor</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/guide/working-with-props/index.html" target="_blank">Guide - Build with ES modules</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/programming-patterns/#properties" target="_blank">Guide - Working with properties</a>（英語）
* <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> reference（英語）
* <a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a> reference（英語）
* [バージョン 3.x から 4.x への移行](../migrating-from-3.x-to-4.0/#プロパティのハンドリング)
* [ArcGIS Maps SDK for JavaScript を利用したウィジェット開発ハンズオン](
https://github.com/EsriJapan/workshops/tree/master/20190823_app-development-hands-on/HandsOn_Document/03_Widget_Development)
