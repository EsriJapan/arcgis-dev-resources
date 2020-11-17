+++
title = "ウィジェット開発"
description = "ウィジェットと呼ばれる、再利用可能な UX コンポーネント作成の基礎を紹介します。"
weight = 4
aliases = ["/javascript/custom-widget/"]
+++

ウィジェットは再利用可能な UI コンポーネントで、リッチな UX を提供する鍵となります。ArcGIS API for JavaScript はすぐに使えるウィジェットを提供しています。また、バージョン 4.2 からは、独自の機能を持つカスタム ウィジェットを作成する基盤を提供します。

このガイドは、ウィジェット開発の新しいフレームワークへ移行するときに重視すべきトピックを説明することで、ウィジェット開発の基本を説明します。カスタム ウィジェット作成の基盤は、ウィジェットに実装する機能にかかわらず一貫しています。

このフレームワークはすべての <a href="https://dojotoolkit.org/reference-guide/1.10/dijit/" target="_blank">Dijit</a> を直接差し替えることを意図していません。例えば、<a href="http://dgrid.io/" target="_blank">dgrid</a> の利用には Dijit が必要です。

トピック

  * [開発要件](#開発要件)
  * [ウィジェット ライフサイクル](#ウィジェット-ライフサイクル)
  * [ウィジェットの実装](#ウィジェットの実装)
  * [TypeScript デコレーター](#typescript-デコレーター)
  * [サンプルコード](#サンプルコード)
  * [関連リンク](#関連リンク)

このガイドはウィジェットのフレームワークの大まかな概要を説明しています。どのようにカスタム ウィジェットを作成するかは、<a href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-helloworld/index.html" target="_blank">Hello World</a> や <a href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-recenter/index.html" target="_blank">Recenter widget</a> のサンプルをご参照ください。

## 開発要件

カスタム ウィジェットを作成する前に、開発に必要となる要件を確認してください。要件は、作成するウィジェットにより異なります。以下はウィジェット開発に最低限必要な要件です。

### TypeScript

<a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> は JavaScript のスーパーセットです。TypeScript で書かれたコードは、JavaScript にコンパイルされます。ウィジェット開発には TypeScript を使用することが推奨されています。インターネット上には、TypeScript とは何か、なぜ使われるのか、そしてどのように使うのかを詳細に知ることのできる多数の<a href="https://www.sitepen.com/blog/2013/12/31/definitive-guide-to-typescript" target="_blank">リソース</a>があります。これらの基本を理解することで、ウィジェット開発の過程をより簡単に進めることができます。

### JSX

<a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a> は HTML と同じようにウィジェットの UI を表現することができる JavaScript の拡張シンタックスです。JSX は HTML に似ており、JavaScript に埋め込んで使用することができます。

### esri/core/Accessor の理解

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html" target="_blank">Accessor</a> は 4.x の主要な特徴のひとつであり、ウィジェットを含むすべてのクラスの基盤です。どのように動作するのか、使用パターンなどの詳細は <a href="https://developers.arcgis.com/javascript/latest/guide/implementing-accessor/index.html" target="_blank">Implementing Accessor</a> をご参照ください。

## ウィジェット ライフサイクル

開発をはじめる前に、ウィジェット ライフサイクルを理解している必要があります。ウィジェットの種類にかかわらず、ライフサイクル特有の一般的な概念は同じです。

1. constructor (params) - プロパティを設定している間に、ウィジェットが最初に作成されるところです。ウィジェットは Accessor から生じるので、get、set、watch を使いプロパティへアクセスできます（get、set、watch の詳細は <a href="https://developers.arcgis.com/javascript/latest/guide/working-with-props/index.html" target="_blank">Working with properties</a> をご参照ください）。
2. <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize" target="_blank">postInitialize()</a> - このメソッドは、ウィジェット作成後、UI の描画前に呼ばれます。
3. <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render" target="_blank">render()</a> - ウィジェット開発で唯一の必須となるメソッドです。UI を描画するために使用されます。
4. <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#destroy" target="_blank">destroy()</a> - ウィジェットのインスタンスを解放するためのメソッドです。

## ウィジェットの実装

まず、ベースとなる <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html" target="_blank">Widget</a> クラスを拡張することによりウィジェットを作成することからはじめます。

```ts
// 拡張に使用する Widget クラスのインポート
import Widget = require("esri/widgets/Widget");

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

}
```

次に、ウィジェット特有のプロパティとメソッドを実装します。このコードは、プロパティ作成において、デコレーターをどのように利用するのかを示しています。

```ts
// 'name' プロパティの作成
@property()
@renderable()
name: string = "John Smith";

// 'emphasized' プロパティの作成
@property()
@renderable()
emphasized: boolean = false;

// プライベートな _onNameUpdate メソッドの作成
private _onNameUpdate(): string { return '${this.name}';}
```

デフォルトでは、要素の中で参照される関数は、実際の要素を参照する `this` を持ちます。必要に応じて、`this` の参照先を変更するために `bind` 属性を使用します。以下では、`name` プロパティを更新するときに呼ばれる `_onNameUpdate` コールバック関数を結び付けています。これは次の <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize" target="_blank">postInitialize</a> メソッドに表示されます。

```ts
class HelloWorld extends declared(Widget) {

  constructor() {
    super();
    this._onNameUpdate = this._onNameUpdate.bind(this);
  }

}
```

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#postInitialize" target="_blank">postInitialize</a> メソッドは、ウィジェットのプロパティは用意されているが、描画される前に呼ばれます。以下のコードは `name` プロパティを監視しています。プロパティが更新されると、`_onNameUpdate` コールバック関数を呼びます。`watchUtils.init()` は <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html#WatchHandle" target="_blank">WatchHandle</a> オブジェクトを返し、`this.own()` に渡されます。これは、ウィジェットを削除した時点で、リソースを解放するメソッドです。

```ts
postInitialize() {
  const handle = watchUtils.init(this, "name", this._onNameUpdate);

  // ウィジェットが削除された時点でリソースを解放するメソッド
  this.own(handle);
}
```

プロパティが実装された後、ウィジェットの UI は <a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a> を使用して描画されます。これはウィジェットの <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render" target="_blank">renderer</a> メソッドに処理されます。

ベースとなる CSS は `class` 属性に設定されます。class 属性はクラスが変更されないときに使用されます。動的にクラスを変更したいときは、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-support-widget.html#classes" target="_blank">classes</a> を使います。これは、切り替え可能な CSS クラスを表すプロパティを持ったオブジェクトです。CSS クラスは、プロパティの値が true のときに追加され、false のときに削除されます。

```ts
// UI の描画
render() {
  const classes = { "hello-world-emphasized": this.emphasized };
  return (
    <div class = "hello-world" classes={classes}>{this._onNameUpdate()}</div>
  );
}
```

<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-support-widget.html#join" target="_blank">classes</a> と同様に、`styles` は動的にスタイルを適用することができます。`styles` のプロパティの値は文字列であることに注意してください。詳細は、<a href="https://developers.arcgis.com/javascript/latest/guide/styling/index.html" target="_blank">Styling</a> トピックをご参照ください。

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

**renderer() メソッドは、ウィジェットを実装するために必要となる唯一の必須メソッドです。**

最後に、`this.destroy()` を呼びます。このメソッドはウィジェットを削除し、`postInitialize()` 内で参照されている `own()` メソッドに登録された、すべてのリソースを解放します。

```ts
postInitialize() {
  const handle = watchUtils.init(this, "name", this._onNameUpdate);

  // ウィジェットが削除された時点でリソースを解放するメソッド
  this.own(handle);
}
```

### TypeScript デコレーター

ウィジェット開発は <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_blank">TypeScript のデコレーター</a>を利用します。デコレーターは、設計時に、既にあるプロパティ、メソッド、コンストラクタの中にある共通する振る舞いを定義、変更します。以下は、ウィジェットで使用される、もっとも一般的なデコレーターです。

### `@subclass`（`declared` と共に使われます）

これらは、4.x のクラスに結びつけられる基本となるデコレーターです。

以下のコードは `esri/widgets/Widget` クラスをインポートし、拡張して、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Widget.html#render" target="_blank">renderer</a> メソッド内で UI を定義しています。<a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a> は UI を定義するために使われています。この例では、`div` 要素と `div` 要素内に `John Smit` が作られます。

```ts
import Widget = require("esri/widgets/Widget");

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

この<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html#property" target="_blank">デコレーター</a>は <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html" target="_blank">Accessor</a> プロパティを定義するために使われます。このデコレーターで定義されたプロパティは、`get`、`set`、`watch` を使用できます。

```ts
@property()
name: string;
```

### `@renderable()`

この<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-support-widget.html#renderable" target="_blank">デコレーター</a>は描画をスケジューリングするために使われます。プロパティが修正されたとき、自動的に描画をスケジューリングし、更新します。

```ts
@renderable()
name: string;
```

 通常、プロパティを実装するときは、`@property()` と `@renderable()` の両方を使います。
 ```ts
 @property()
 @renderable()
 name: string;
 ```

### `@aliasOf()`

この<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-accessorSupport-decorators.html#aliasOf" target="_blank">デコレーター</a>はプロパティ エイリアスを定義します。これは、既にあるプロパティが重複しないようにコードを保つために使用されます（例えば ViewModel の内側に既に実装されています）。*このガイドで提供するサンプルはこのデコレーターを使っていません。もし、このファイルと関連する `HelloWroldViewModel` があるとき、この方法を通して直接プロパティへアクセスします。これにより、コードの重複を避けることができます。*

```ts
@aliasOf("viewModel.name")
name: string;
```

## サンプルコード

以下は、このガイドで説明したサンプルコードをまとめたものです。クラスは TypeScript で書かれ、TSX 拡張子で保存されます。TSX 拡張子は、作成するクラスが JSX を使っていることを示しています。

```ts
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// Import decorator modules
import {subclass, declared} from "esri/core/accessorSupport/decorators";
// Import decorator module and jsxFactory used for rendering
import {renderable, jsxFactory} from "esri/widgets/support/widget";

// Import used to extend off of base Widget class
import Widget = require("esri/widgets/Widget");

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends declared(Widget) {

  postInitialize() {
    const handle = watchUtils.init(this, "name", this._onNameUpdate);

    // Helper used for cleaning up resources once the widget is destroyed
    this.own(handle);
  }

  // Create 'name' property
  @property()
  @renderable()
  name: string = "John Smith";

  // Create 'emphasized' property
  @property()
  @renderable()
  emphasized: boolean = false;

  // Create private _onNameUpdate method
  private _onNameUpdate(): string { return '${this.name}';}

  // Render the UI
  render() {
    const classes = { "hello-world-emphasized": this.emphasized };
    return (
      <div class = "hello-world" join={classes}>{this._onNameUpdate()}</div>
    );
  }
}

export = HelloWorld;
```

## 関連リンク

* <a href="https://developers.arcgis.com/javascript/latest/guide/custom-widget/index.html" target="_blank">Widget development</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-helloworld/index.html" target="_blank">Hello World</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-recenter/index.html" target="_blank">Recenter widget</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html" target="_blank">Accessor class</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/guide/working-with-props/index.html" target="_blank">Guide - Working with properties</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/guide/implementing-accessor/index.html" target="_blank">Implementing Accessor</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-custom-recenter/index.html" target="_blank">Recenter sample</a>（英語）
* <a href="https://developers.arcgis.com/javascript/latest/guide/styling/index.html" target="_blank">Styling</a>（英語）
* <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>（英語）
* <a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank">JSX</a>（英語）
* [バージョン 3.x から 4.x への移行](../migrating-from-3.x-to-4.0/#プロパティのハンドリング)
* [ArcGIS API for JavaScript を利用したウィジェット開発ハンズオン](
https://github.com/EsriJapan/workshops/tree/master/20190823_app-development-hands-on/HandsOn_Document/03_Widget_Development)
