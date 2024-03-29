+++ 
title = "コア コンセプト" 
description = "Web コンポーネントを活用するための基本的な概念とパターンを学びます。" 
Weight=2
+++

出典：Calcite Design System - [core concepts](https://developers.arcgis.com/calcite-design-system/core-concepts/)

Calcite Components は、[Stencil.js](https://stenciljs.com/docs/introduction) を使用して構築された、再利用可能な Web コンポーネントのライブラリです。Calcite Components を使用すると、ブランド力のある、軽量でアクセスしやすい Web アプリケーションをすばやく構築できます。

Web コンポーネントはブラウザのネイティブ規格であり、Calcite Components で開発するために必要な技術的概念の多くは、このライブラリに固有のものではありません。このページでは、効果的な開発を行うために必要な、Web の主要コンセプトを紹介しています。さらに詳しい情報について、このページにあるすべての概念は、[MDN Web Docs](https://developer.mozilla.org/ja/) やその他の Web 標準ドキュメントのソースで見つけることができます。

### カスタム要素
カスタム要素は、Web コンポーネント標準の一部であり、HTML と任意の JavaScript ライブラリまたは Web フレームワークを使用して、モダン ブラウザ全体で動作します。カスタム要素は機能をカプセル化するため、他のコードとのコンフリクトを防ぐことができます。

Calcite Components はカスタム要素であり、ネイティブの HTML 要素と同様に使用することができます。

```html
<calcite-tip heading="Platypus"></calcite-tip>
```

---
### スロット
スロットはプレースホルダー要素であり、スロットの名前を参照することで独自のコンテンツを追加することができます。スロットは一般的な Web コンポーネントの概念であり、あなたもすでに使用している可能性があります。例えば、次のような HTML を考えてみましょう。

```html
<select>
  <option value="platypus">Platypus</option>
  <option value="sloth">Sloth</option>
  <option value="armadillo">Nine-banded armadillo</option>
</select>
```

Web コンポーネントの用語で、`option` 要素は `select` のデフォルト スロットに配置されます。また、「Platypus」、「Sloth」、「Nine-banded」のテキストは、それぞれの `option` のデフォルト スロットに配置されます。

また、多くの Calcite Components は、デフォルトのスロットを利用しています。例えば、下の <a href="https://developers.arcgis.com/calcite-design-system/components/tip/" target="_blank">`calcite-tip`</a> では、デフォルトのスロットに `p` コンテンツが追加されています。

```html
<calcite-tip heading="Platypus">
  <img slot="thumbnail" src="platypus.jpg" alt="A platypus sensing its prey using electrical fields." />
  <p>A platypus is a mammal with a bill, similar to a duck. They use their bill to sense prey via electrolocation.</p>
</calcite-tip>
```

多くの場合、デフォルトのスロットがあれば十分です。しかし、コンポーネントが複雑になればなるほど、子要素の位置やスタイルを変える必要が出てきます。そこで活躍するのがネームドスロットです。上の例では、チップの <a href="https://developers.arcgis.com/calcite-design-system/components/tip/#component-api-slots-thumbnail" target="_blank">`thumbnail`</a> スロットに画像が配置されています。これは、画像がデフォルトスロットの要素とは異なる方法で処理されるべきであることをコンポーネントに通知するものです。

もしコンポーネントにスロットがあれば、[slots for `calcite-card`](https://developers.arcgis.com/calcite-design-system/components/card/#component-api-slots) のように、ドキュメントに記載されます。また詳細については、[slots on MDN](https://developer.mozilla.org/ja/docs/Web/API/Web_components/Using_templates_and_slots#adding_flexibility_with_slots) で学ぶこともできます。

---
### Shadow DOM
カスタム要素はカプセル化され、そのマークアップ構造、スタイル、動作はページ上の他のコードから隠され、分離された状態に保たれます。[Shadow DOM](https://developer.mozilla.org/ja/docs/Web/API/Web_components/Using_shadow_DOM) は、カスタム要素をカプセル化する仕組みです。その結果、Shadow DOM は Web コンポーネントの DOM 要素を隠して分離するため、ブラウザでレンダリングされますが、他のコードとぶつかることはありません。

Shadow DOM のカプセル化により、アプリケーション間で永続的なスタイルと機能を実現し、ユーザーに一貫したユーザー エクスペリエンスを提供することができます。

---
### CSS 変数
Calcite Components は、スタイルを上書きするための CSS 変数を提供しています。Web コンポーネントの Shadow DOM のため、CSS 変数がないと簡単にスタイルを変更することができません。トークンには CSS 変数があり、[color](https://developers.arcgis.com/calcite-design-system/foundations/colors/) や [typography](https://developers.arcgis.com/calcite-design-system/foundations/type/) など、デザインシステム全体で使用されます。

さらに、一部の Calcite Components には、コンポーネント固有のスタイルを変更するための独自の CSS 変数があります。これらの CSS 変数は、[CSS variables for `cacite-loader`](https://developers.arcgis.com/calcite-design-system/components/loader/#component-api-styles) のように、コンポーネントのドキュメントで見つけることができます。

使用例としては、CSS 変数を使用して、<a href="https://developers.arcgis.com/calcite-design-system/components/notice/" target="_blank">`calcite-notice`</a> の前景色と文字色を入れ替えることができます。

```CSS
calcite-notice {
  --calcite-ui-foreground-1: #151515;
  --calcite-ui-text-1: #ffffff;
}
```

[CSS variable MDN documentation](https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties) に、機能の詳細が説明されています。

---
### コンポーネント ロード
Web コンポーネントはプレーンな HTML 要素として始まり、その実装が<a href="https://developer.mozilla.org/ja/docs/Web/API/CustomElementRegistry/define" targat="_blenk">ブラウザで定義</a>されると同時にアップグレードされます。Calcite Components は、インポートされ、アプリケーションで使用されると、自動的に定義されます。しかし、特定のコードを実行する前に、コンポーネントが定義されるまで待つ必要がある場合があります。

#### ハイドレーション
Stencil.js では、コンポーネントとそのすべての子コンポーネントのハイドレーションが終了したときに、フラグを追加するオプションが用意されています。これにより、様々なコンポーネントのダウンロードとレンダリングが非同期に行われるため、FOUC（Flash of Unstyled Content）を防止することができます。Calcite Components では、一度ハイドレーションされたコンポーネントに `calcite-hydrated` というCSSクラスが追加され、アプリケーションをデバッグする際に便利です。

#### 定義されたとき
`customElementRegistry` インターフェースの <a href="https://developer.mozilla.org/ja/docs/Web/API/CustomElementRegistry/whenDefined" target="_blank">`whenDefined()`</a> メソッドは、指定された要素が定義されたときに満たされる Promise を返します。

Promise が満たされると、次のようにコンポーネントの定義を必要とするコードを実行できるようになります。

```html
customElements.whenDefined("calcite-button").then(() => document.querySelector("calcite-button").setFocus());
```
#### コンポーネントの準備
コンポーネントがいつレンダリングされるかを決定するには、Stencilの `componentOnReady()` メソッドを使用します。このメソッドは、<a href="https://stenciljs.com/docs/component-lifecycle#componentdidload" target="_blank">`componentDidLoad()` </a>ライフサイクルメソッドが起動した後に解決される Promise を返します。これは、コンポーネントのメソッドを使用する前にコンポーネントがロードされていることを確認する場合や、あるコンポーネントが他のコンポーネントに依存している場合に便利です。

例えば、他のコンポーネントのレンダリングが終了するまで、<a href="https://developers.arcgis.com/calcite-design-system/components/loader/" target="_blank">`calcite-loader` </a>を表示させたい場合があります。

```JavaScript
(async () => {
  await customElements.whenDefined("calcite-alert");
  await document.querySelector("calcite-alert").componentOnReady();
  document.querySelector("calcite-loader").hidden = true;
})();
```

<a href="https://developer.mozilla.org/ja/docs/Web/API/window/requestAnimationFrame" target="_blank">`requestAnimationFrame` </a> のコールバックとしてコンポーネントのメソッドを呼び出すことで、コンポーネントの状態でユーザー インターフェースが更新されます。例えば、ユーザーの閲覧履歴に基づいて、<a href="https://developers.arcgis.com/calcite-design-system/components/stepper/" target="_blank">`calcite-stepper` </a>の現在のステップを設定したい場合、<a href="https://developers.arcgis.com/calcite-design-system/components/stepper/#component-api-methods-goToStep" target="_blank">`goToStep()`</a>メソッドを使うことができます。

```JavaScript
(async () => {
  await customElements.whenDefined("calcite-stepper");
  const el = await document.querySelector("calcite-stepper").componentOnReady();
  requestAnimationFrame(() => el.goToStep(3));
})();
```

---
### イベント
Calcite Components は、<a href="https://developer.mozilla.org/ja/docs/Web/API/CustomEvent/CustomEvent" target="_blank">`CustomEvent()`</a> コンストラクターを使用して<a href="https://developer.mozilla.org/ja/docs/Web/Events/Creating_and_triggering_events" target="_blank">イベントの作成とトリガー</a>を行います。

`CustomEvent` は `Event` と似たような振る舞いをします。これは `button` をクリックしたときなどの HTML 要素から放出されます。例えば、イベント ペイロードの <a href="https://developer.mozilla.org/ja/docs/Web/API/Event/target" target="_blank">`target`</a> プロパティで要素にアクセスすることは可能です。また、一部の `CustomEvent` のペイロードは、<a href="https://developer.mozilla.org/ja/docs/Web/API/CustomEvent/detail" target="_blank">`detail`</a> プロパティにイベント固有の情報を含みます。

コンポーネントのドキュメント ページを表示すると、[`calcite-pagination` event](https://developers.arcgis.com/calcite-design-system/components/pagination/#events) のようなイベントを持つかどうかを確認することができます。

```JavaScript
document.addEventListener("calcitePaginationChange", event => {
  console.log(`Starting item number on the page: ${event.target.startItem}`);
});
```

---
### フォーム
フォーム送信時に適切に値を渡すためには、フォーム内の各コンポーネントに `name` 属性を設定する必要があります。例えば、<a href="https://developers.arcgis.com/calcite-design-system/components/input-date-picker/" target="_blank">`Input Date Picker`</a> と <a href="https://developers.arcgis.com/calcite-design-system/components/text-area/" target="_blank">`Text Area`</a> に `name` 属性を追加します。

```HTML
<form>
  <calcite-label>
    Observation date:
    <calcite-input-date-picker name="observation-date"></calcite-input-date-picker>
  </calcite-label>
  <calcite-label>
    Observation notes:
    <calcite-text-area name="observation-notes" placeholder="Observation notes" max-length="250"></calcite-text-area>
  </calcite-label>
  <calcite-button type="submit">Submit</calcite-button>
</form>
```

フォームに関するその他の考慮事項については、フォームの<a href="https://developers.arcgis.com/calcite-design-system/foundations/accessibility/#forms-and-labels" target="_blank">アクセシビリティ</a>を参照してください。

---
### モード
Calcite Components には明暗モードがあり、対応する CSS クラス `calcite-mode-light` と `calcite-mode-dark` を使って変更できる。`calcite-mode-auto` クラスもあり、ブラウザの<a href="https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-color-scheme" target="_blank"> `prefers-color-scheme`</a> CSS メディアクエリに従うことで、明るいモードと暗いモードのどちらを使用するかを決定します。

要素に モード クラスを設定すると、その子ノードもすべて変更されます。したがって、アプリケーション全体を明るい状態から暗い状態に切り替えるには、次のようにします。

```html
<body class="calcite-mode-dark">
  <!-- Your application content -->
</body>
```