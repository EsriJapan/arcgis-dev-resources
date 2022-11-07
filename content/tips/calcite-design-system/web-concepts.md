+++ 
title = "Web コンセプト" 
description = "Web マップアプリにおけるコンセプトについて説明しています。" 
Weight=2
+++

出典：Calcite Design System (Beta) - [Web concepts](https://developers.arcgis.com/calcite-design-system/web-concepts/)

## Web コンセプト
Calcite Components は、[Stencil.js](https://stenciljs.com/docs/introduction) を使用して構築された、再利用可能な Web コンポーネントのライブラリです。Calcite Components を使用すると、ブランド力のある、軽量でアクセスしやすい Web アプリケーションをすばやく構築できます。

Web コンポーネントはブラウザのネイティブ規格であり、Calcite Components で開発するために必要な技術的概念の多くは、このライブラリに固有のものではありません。このページでは、効果的な開発を行うために必要な、Web の主要コンセプトを紹介しています。さらに詳しい情報について、このページにあるすべての概念は、[MDN Web Docs](https://developer.mozilla.org/ja/) やその他の Web 標準ドキュメントのソースで見つけることができます。

---
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

もしコンポーネントにスロットがあれば、[slots for `calcite-card`](https://developers.arcgis.com/calcite-design-system/components/card/#component-api-slots) のように、ドキュメントに記載されます。また詳細については、[slots on MDN](https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_templates_and_slots#adding_flexibility_with_slots) で学ぶこともできます。

---
### Shadow DOM
カスタム要素はカプセル化され、そのマークアップ構造、スタイル、動作はページ上の他のコードから隠され、分離された状態に保たれます。[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) は、カスタム要素をカプセル化する仕組みです。その結果、Shadow DOM は Web コンポーネントの DOM 要素を隠して分離するため、ブラウザでレンダリングされますが、他のコードとぶつかることはありません。

Shadow DOM のカプセル化により、アプリケーション間で永続的なスタイルと機能を実現し、ユーザーに一貫したユーザー エクスペリエンスを提供することができます。

---
### CSS 変数
Calcite Components は、スタイルを上書きするための CSS 変数を提供しています。Web コンポーネントの Shadow DOM のため、CSS 変数がないと簡単にスタイルを変更することができません。トークンには CSS 変数があり、[color](https://developers.arcgis.com/calcite-design-system/foundations/colors/) や [typography](https://developers.arcgis.com/calcite-design-system/foundations/type/) など、デザインシステム全体で使用されます。

さらに、一部の Calcite Components には、コンポーネント固有のスタイルを変更するための独自の CSS 変数があります。これらの CSS 変数は、[CSS variables for `cacite-loader`](https://developers.arcgis.com/calcite-design-system/components/loader/#component-api-styles) のように、コンポーネントのドキュメントで見つけることができます。

使用例としては、CSS 変数を使用して、<a href="https://developers.arcgis.com/calcite-design-system/components/notice/" target="_blank">`calcite-notice`</a> の前景色と文字色を入れ替えることができます。

```html
calcite-notice {
  --calcite-ui-foreground-1: #151515;
  --calcite-ui-text-1: #ffffff;
}
```

[CSS variable MDN documentation](https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties) に、機能の詳細が説明されています。

---
### コンポーネント ロード
Web コンポーネントはプレーンなHTML要素として始まり、その実装が[ブラウザで定義](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)されると同時にアップグレードされます。Calcite Components は、インポートされ、アプリケーションで使用されると、自動的に定義されます。しかし、特定のコードを実行する前に、コンポーネントが定義されるまで待つ必要がある場合があります。

#### ハイドレーション
Stencil.js では、コンポーネントとそのすべての子コンポーネントのハイドレーションが終了したときに、フラグを追加するオプションが用意されています。これにより、様々なコンポーネントのダウンロードとレンダリングが非同期に行われるため、FOUC（Flash of Unstyled Content）を防止することができます。Calcite Components では、一度ハイドレーションされたコンポーネントに `calcite-hydrated` というCSSクラスが追加され、アプリケーションをデバッグする際に便利です。

#### 定義されたとき
`customElementRegistry` インターフェースの <a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined" target="_blank">`whenDefined()`</a> メソッドは、指定された要素が定義されたときに満たされる Promise を返します。

Promise が満たされると、次のようにコンポーネントの定義を必要とするコードを実行できるようになります。

```html
customElements
  .whenDefined("calcite-button")
  .then(() => document.querySelector("calcite-button").setFocus());
```

---
### イベント
Calcite Components は、<a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent" target="_blank">`CustomEvent()`</a> コンストラクターを使用して[イベントの作成とトリガー](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)を行います。

`CustomEvent` は `Event` と似たような振る舞いをします。これは `button` をクリックしたときなどの HTML 要素から放出されます。例えば、イベント ペイロードの <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/target" target="_blank">`target`</a> プロパティで要素にアクセスすることは可能です。また、一部の `CustomEvent` のペイロードは、<a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail" target="_blank">`detail`</a> プロパティにイベント固有の情報を含みます。

コンポーネントのドキュメント ページを表示すると、[`calcite-pagination` event](https://developers.arcgis.com/calcite-design-system/components/pagination/#component-api-events) のようなイベントを持つかどうかを確認することができます。

```html
document.addEventListener("calcitePaginationChange", (event) => {
  console.log("Pagination's starting item:", event.detail.start);
  console.log("Number of items per page:", event.target.num);
});
```

---
### テーマ
Calcite Components にはライトとダークのテーマがあり、対応する CSS クラスである `calcite-theme-light` と `calcite-theme-dark` を使って変更することができます。また、`calcite-theme-auto` クラスがあり、ブラウザの <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank">`prefers-color-scheme`</a> CSS メディア クエリに従い、明るいテーマか暗いテーマを使用するかを決定します。

ある要素にテーマ クラスを設定すると、そのすべての子ノードも変更されます。したがって、アプリケーション全体を明るい状態から暗い状態に切り替えるには、次のようにします。

```html
<body class="calcite-theme-dark">
  <!-- Your application content -->
</body>
```