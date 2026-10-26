+++ 
title = "コア コンセプト" 
description = "Web コンポーネントを活用するための基本的な概念とパターンを学びます。" 
Weight=2
+++

出典：Calcite Design System - [core concepts](https://developers.arcgis.com/calcite-design-system/core-concepts/)

Calcite コンポーネントは、最小限のコードで Web アプリケーションを構築するための、再利用可能な Web コンポーネントのライブラリーです。Calcite コンポーネントを使用すると、ブランドに沿った、軽量でアクセスしやすい Web アプリケーションを素早く構築できます。

Web コンポーネントはブラウザーのネイティブ標準であり、Calcite コンポーネントを用いた開発に必要な技術的な概念の多くは、このライブラリー固有のものではありません。このページでは、効率的な開発に必要な主要な Web の概念について解説します。さらに詳しく知りたい場合は、このページで紹介しているすべての概念について、[MDN Web Docs](https://developer.mozilla.org/) やその他の Web 標準に関するドキュメントで確認することができます。


## カスタム要素
カスタム要素は、Web コンポーネント標準の一部であり、HTML と任意の JavaScript ライブラリーや Web フレームワークを使用して、モダンなブラウザーで動作します。カスタム要素は機能をカプセル化するため、他のコードとの競合を防ぐことができます。

Calcite Components はカスタム要素であり、ネイティブの HTML 要素と同様に使用することができます。例えば以下のように記述します。

```html
<calcite-action-bar layout="horizontal"></calcite-action-bar>
```


## スロット
スロットは、スロット名を参照することで独自のコンテンツを追加できるプレースホルダー要素です。スロットは Web コンポーネントの一般的な概念であり、すでに使用している可能性があります。例えば、次の HTML を見てみましょう。

```html
<select>
  <option value="platypus">Platypus</option>
  <option value="sloth">Sloth</option>
  <option value="armadillo">Nine-banded armadillo</option>
</select>
```

Web コンポーネントの用語では、`option` 要素は `select` のデフォルト スロットに配置されます。さらに、「Platypus」、「Sloth」、「Nine-banded armadillo」のテキストは、それぞれの `option` 要素のデフォルト スロットに配置されます。

Calcite コンポーネントの多くもデフォルト スロットを利用しています。例えば、以下の [`calcite-action-bar`](https://developers.arcgis.com/calcite-design-system/components/action-bar/) では、[`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) 要素がデフォルト スロットに追加されています。

```html
<calcite-action-bar layout="horizontal">
  <calcite-action text="Add" icon="plus" text-enabled></calcite-action>
  <calcite-action text="Save" icon="save" text-enabled></calcite-action>
  <calcite-tooltip slot="expand-tooltip">Toggle Action Bar</calcite-tooltip>
</calcite-action-bar>
```

多くの場合、デフォルトのスロットだけで十分です。しかし、コンポーネントが複雑になるにつれ、子要素の位置やスタイルを個別に設定する必要が生じます。ここで名前付きスロットが活躍します。名前付きスロットは特定のコンポーネントで使用することを想定し、あらかじめスタイルと配置が定義されています。コンポーネント固有の名前付きスロットには任意の要素を使用できますが、スロットの本来の目的と一致しない可能性があります。上記の例では、[`calcite-tooltip`](https://developers.arcgis.com/calcite-design-system/components/tooltip/)がアクション バーの [`expand-tooltip`](https://developers.arcgis.com/calcite-design-system/components/action-bar/#api-reference-slots-expand-tooltip) スロットに配置されています。これにより、このコンポーネントはツール チップをデフォルト スロット内の要素とは異なる方法で扱うべきだと認識します。

コンポーネントにスロットがある場合、[`calcite-card` のスロット](https://developers.arcgis.com/calcite-design-system/components/card/#slots)のようにドキュメントに記載されています。スロットの詳細については [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#adding_flexibility_with_slots) を参照してください。


## Shadow DOM
カスタム要素はカプセル化されており、マークアップ構造、スタイル、動作がページ上の他のコードから隠され、分離されます。[Shadow DOM](https://developer.mozilla.org/ja/docs/Web/API/Web_components/Using_shadow_DOM) はカスタム要素をカプセル化する仕組みです。その結果、Shadow DOM は Web コンポーネントの DOM 要素を隠して分離するため、ブラウザー上にレンダリングされますが、他のコードと衝突することはありません。

Shadow DOM によるカプセル化はアプリケーション全体で一貫したスタイルと機能を維持し、ユーザーに統一されたユーザー体験を提供します。


## CSS 変数
Calcite コンポーネントでは、スタイルを上書きするための CSS 変数が提供されています。Web コンポーネントの Shadow DOM により、CSS 変数なしでは簡単にスタイルを変更することができません。[色](https://developers.arcgis.com/calcite-design-system/foundations/colors/)や[タイポグラフィー](https://developers.arcgis.com/calcite-design-system/foundations/typography/)など、デザイン システム全体で使用されるトークンには CSS 変数が用意されています。

さらに、一部の Calcite コンポーネントにはコンポーネント固有のスタイルを変更するための CSS 変数も用意されています。これらの CSS 変数は [`calcite-loader` の CSS 変数](https://developers.arcgis.com/calcite-design-system/components/loader/#styles)のようにコンポーネントのドキュメントから確認できます。

使用例としては、[`calcite-notice`](https://developers.arcgis.com/calcite-design-system/components/notice/) において、CSS 変数を使って表面色とテキスト色を入れ替えることが挙げられます。

```CSS
calcite-notice {
  --calcite-color-foreground-1: #151515;
  --calcite-color-text-1: #ffffff;
}
```
[CSS カスタムプロパティ（変数）の使用](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) に、機能の詳細が説明されています。


## コンポーネントのロード
Calcite コンポーネントは、最初は通常の HTML 要素として存在し、読み込まれて[ブラウザーに定義される](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)とすぐにハイドレーションされます。このハイドレーションにより、ブラウザーがコンポーネントのマークアップやスロット内のコンテンツを一時的にレンダリングし、ページの読み込み中にスタイル未適用コンテンツが一瞬表示される現象 (FOUC) が発生する場合があります。また、特定のコードを実行する前に、コンポーネントが定義されるまで待機しなければならない場合もあります。


### コンポーネントのハイドレーション中のコンテンツのフラッシュの防止
スタイルが適用されていないコンテンツや、スロットに割り当てられたコンテンツが一瞬表示されるのを防ぐには以下の手法を使用します。方法は、Calcite コンポーネントの読み込み方法と、目的とする動作によって異なります。


#### ハイドレーションの完了を待機
Calcite コンポーネントでは、コンポーネントとそのすべての子コンポーネントのハイドレーションが完了すると、`calcite-hydrated` 属性が追加されます。
この属性を使用すると、各種コンポーネントが非同期に読み込まれてレンダリングされる際に、スタイルが適用されていないコンテンツが一瞬表示される現象 (FOUC) を防止できます。また、アプリケーションのデバッグにも役立ちます。
これは、CDN ベースと ESM ベースの両方のアプリケーションに適用されます。

```css
calcite-button:not([calcite-hydrated]) {
  visibility: hidden;
}
```


#### CDN アプリケーションでページのレンダリングを遅延
スタイルが適用されていないコンテンツを表示するよりも、ページの初回レンダリングを遅らせるほうが望ましい場合は、[`blocking="render"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#blocking) を使用します。これにより、Calcite が利用可能になり、アプリケーションの初期表示の準備が整うまでレンダリングが行われません。
blocking コンテンツ属性は、[HTML の &lt;head&gt; 要素](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) 内で読み込まれるスクリプトでの使用を想定しています。

``` html
<script
  type="module"
  blocking="render"
  src="https://js.arcgis.com/calcite-components/">
</script>
```

`blocking="render"` のサポート状況はブラウザーによって異なります。現在、Chromium ベースのブラウザーと Safari はこの機能をサポートしていますが、Firefox はサポートしていません。
ブラウザー間で一貫した動作が必要なアプリケーションでは、`blocking="render"` を併用するかどうかにかかわらず、`:not([calcite-hydrated])` を使用してください。


#### ESM インポートの使用
バンドラー (Vite、Webpack、esbuild など) を使用する ESM アプリケーションでは、対応するカスタム要素を作成する前に、コンポーネントのモジュールをインポートします。
フレームワークでは一般にこのパターンが採用されています。遅延読み込みに依存するのではなく、アプリケーションがコンポーネントをレンダリングする時点で、その定義がすでに登録されていることを保証できます。

```js
import "@esri/calcite-components/components/calcite-button";

const buttonEl = document.createElement("calcite-button");
document.body.appendChild(buttonEl);
```

コンポーネントの登録が完了する前にコンポーネントのマークアップがレンダリングされる可能性がある場合は、前述の `:not([calcite-hydrated])` の手法を使用します。これにより、ページのレンダリングを遅らせることなく、スタイルが適用されていないコンテンツを非表示にできます。


### 定義されるまで待機 (When defined)
{{< callout type="warning" >}}

フレームワークを使っている場合や、&lt;script type="module"&gt; を読み込んでいる場合は、`whenDefined()` メソッドを使用する必要はありません。

{{< /callout >}}

`customElementRegistry` インターフェイスの [`whenDefined()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined) メソッドは、指定された要素が定義された際に解決される Promise を返します。

この Promise が解決された後に、そのコンポーネントの定義を必要とするコードを実行することができます。例えば、次のように記述します。

```js
customElements.whenDefined("calcite-button").then(() => document.querySelector("calcite-button").setFocus());
```

### コンポーネントの準備完了を待機
コンポーネントがレンダリングされたタイミングを判断するには、`componentOnReady()` メソッドを使用できます。このメソッドは、コンポーネントがレンダリングされた後に解決される Promise を返します。コンポーネントのメソッドを使用する前や、あるコンポーネントが別のコンポーネントに依存している場合には、対象のコンポーネントが読み込まれていることを確認することが推奨されます。

例えば、他のコンポーネントのレンダリングが完了するまで [`calcite-loader`](https://developers.arcgis.com/calcite-design-system/components/loader/) を表示しておきたい場合などです。

```js
await document.querySelector("calcite-alert").componentOnReady();
document.querySelector("calcite-loader").hidden = true;
```

フレームワークを使用している場合や &lt;script type="module"&gt; を読み込んでいる場合は、`whenDefined()` メソッドを使用する必要はありません。しかし、&lt;script type="module"&gt; を追加できない状況では、非同期関数と [`whenDefined()`](https://developers.arcgis.com/calcite-design-system/core-concepts/#when-defined) を組み合わせて使用する必要があります。

```js
(async () => {
  await customElements.whenDefined("calcite-alert");
  await document.querySelector("calcite-alert").componentOnReady();
  document.querySelector("calcite-loader").hidden = true;
})();
```

[`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) のコールバックとしてコンポーネントのメソッドを呼び出すことで、ユーザー インターフェイスがコンポーネントの状態に応じて更新されることが保証されます。例えば、ユーザーの閲覧履歴に基づいて [`calcite-stepper`](https://developers.arcgis.com/calcite-design-system/components/stepper/) の現在のステップを設定したい場合は、[`goToStep()`](https://developers.arcgis.com/calcite-design-system/components/stepper/#component-api-methods-goToStep) メソッドを使用することができます。

```js
(async () => {
  await customElements.whenDefined("calcite-stepper");
  const el = await document.querySelector("calcite-stepper").componentOnReady();
  requestAnimationFrame(() => el.goToStep(3));
})();
```

## 属性とプロパティ
[属性](https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Attributes)は HTML における要素の初期状態を表すのに対し、[プロパティ](https://developer.mozilla.org/ja/docs/Glossary/Property/JavaScript)は DOM の一部であり、要素の現在の状態を更新する手段を提供します。

```html
<!-- ボタンのラベルと icon-start 属性 -->
<calcite-button label="Add new folder" icon-start="folder-plus"></calcite-button>
```

```js
/* ボタンのラベルと開始側のアイコンを設定 */
document.querySelector("calcite-button").label = "Remove folder";
document.querySelector("calcite-button").iconStart = "recycle-bin";
```

### Boolean 属性
一部の属性は [Boolean](https://developer.mozilla.org/ja/docs/Glossary/Boolean/HTML) であり、値の有無にかかわらず属性の存在自体が `true` と解釈されます。存在しない場合は `false` と解釈されます。`true` や `false` といった値の使用は避けてください。現代のブラウザーは任意の文字列値を `true` と解釈しますが、この動作に依存することは推奨されません。

```html
<!-- Boolean 属性は名前で指定してください -->
<calcite-button disabled>A disabled button</calcite-button>
<calcite-button>A non-disabled button</calcite-button>

<!-- Boolean で指定された値を避ける -->
<calcite-button disabled="false">Another disabled button</calcite-button>
```


{{< callout type="info">}}

Boolean 属性の値を `true` として解釈するには、その名前を指定してください。

{{< /callout >}}
{{< callout type="error"  >}}

Boolean 属性に `true` や `false` の値を指定することは避けてください。

{{< /callout >}}


## イベント
Calcite コンポーネントは、[`CustomEvent()`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) コンストラクターを使用して[イベントを作成し、トリガーします](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)。

`CustomEvent` は、ボタンのクリックなどで HTML 要素から発火される `Event` と同様に動作します。例えば、イベント ペイロード内の [`target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) プロパティを通じて発火元の要素にアクセスすることができます。

各コンポーネントのドキュメント ページでは、[`calcite-pagination` のイベント](https://developers.arcgis.com/calcite-design-system/components/pagination/#events)など、どのようなイベントを持っているかを確認できます。例えば以下のようにイベントを利用できます。

```js
document.addEventListener("calcitePaginationChange", event => {
  console.log(`Starting item number on the page: ${event.target.startItem}`);
});
```

### open / close イベントの動作
一部のコンポーネントは、`open` Boolean 型プロパティを切り替えることで表示位置や表示状態を制御できます。open プロパティの値がユーザー操作やプログラムによって変更されると、コンポーネントは対応するイベントを発火させ、その変更を通知します。

例えば、[Dialog](https://developers.arcgis.com/calcite-design-system/components/dialog/) が開かれたり、閉じられたりすると、`calciteDialogOpen` および `calciteDialogClose` イベントが発火されます。

[Block](https://developers.arcgis.com/calcite-design-system/components/block/) コンポーネントのように、`open` の代わりに `expanded` プロパティを使用するものもありますが、イベントの発火パターンは同様です。

この設計により、遷移を伴うアニメーションやタイミングの一貫性が保たれますが、ユーザー操作のみがイベントに反映されると期待している場合は混乱する可能性があります。

なお、open または close イベントがボタンのクリックなどのユーザー操作によるものか、`element.open = false` を設定するなどのプログラムによるものかを区別する方法は組み込まれていません。しかし、フラグを使ってプログラムによる変更を追跡することは可能です。

例えば、以下のような方法です。

```js
let isProgrammaticClose = false;

const dialog = document.querySelector("calcite-dialog");
const cancelButton = document.getElementById("dialog-cancel-button");

// close イベントのハンドリング
dialog.addEventListener("calciteDialogClose", () => {
  if (isProgrammaticClose) {
    console.log("Dialog closed programmatically");
  } else {
    console.log("Dialog closed by user interaction");
  }

  // イベントの処理後、フラグをリセット
  isProgrammaticClose = false;
});

// プログラムからダイアログを閉じる
function closeDialog() {
  isProgrammaticClose = true;
  dialog.open = false;
}

cancelButton.addEventListener("click", () => {
  closeDialog();
});
```


## グローバル設定

### バージョン
[`バージョン 2.10`](https://developers.arcgis.com/calcite-design-system/releases/changelogs/2.10.0/) 以降、開発者は `calciteConfig` グローバル変数を使用して、実行時に Calcite のバージョンを検出することができます。

``` js
window.addEventListener("load", () => console.log(window.calciteConfig.version));
```

### ログ メッセージ
[`バージョン 2.11`](https://developers.arcgis.com/calcite-design-system/releases/changelogs/2.11.0/) 以降、コンポーネントの非推奨化の通知などの重要なメッセージがコンソールに出力されるようになりました。開発者は `calciteConfig` を使用することで、これらのメッセージを本番環境やビルドしたアプリから除外することができます。

```js
var calciteConfig = {
  logLevel: "off"
};
```


## フォーム
フォーム内の各コンポーネントには、フォーム送信時に値を適切に渡すために、`name` 属性を設定する必要があります。例えば、[`Input Date Picker`](https://developers.arcgis.com/calcite-design-system/components/input-date-picker/) と [`Text Area`](https://developers.arcgis.com/calcite-design-system/components/text-area/) に `name` 属性を追加することが挙げられます。

```html
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

フォームに関するその他の考慮事項については、[フォームのアクセシビリティー](https://developers.arcgis.com/calcite-design-system/foundations/accessibility/#forms-and-labels)を参照してください。


### フォームの検証
フォームの検証には、`status`、`validationMessage`、`validationIcon` プロパティを使用します。これらのプロパティは、コンポーネントの `status` プロパティが `"invalid"` である場合に、デフォルトおよびカスタムのメッセージとアイコンをサポートします。


### 検証制約の設定
カスタムの制約を設定するには、以下の手順を行います。
* `id` を使用して、特定のフィールドのカスタム制約、メッセージ、アイコンを定義する検証用の制約配列を作成します。
* `setCustomValidity` のような関数を使用して、対象のフィールドに `validationMessage`、`validationIcon`、および `status` を設定します。
* イベント リスナーを使用してユーザー入力が事前に定義された制約に合致しているかを確認します。ユーザー入力が指定された制約を満たしていない場合、`setCustomValidity` 関数を使ってカスタムの検証メッセージを設定します。


### パターン
[`pattern`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) 属性を使用することで、フォーム検証における制約をサポートできます。この属性を使用すると、入力が一致しなければならない正規表現を定義できます。これにより、フォームが有効と見なされるための条件を指定できます。例えば、`pattern` の特定の部分に一致した場合に表示される `validationMessage` や `validationIcon` を定義することができます。

```html
<!-- HTML -->
<calcite-label>
  Full Name:
  <calcite-input-text pattern="[a-zA-Z]{1,15}\s[a-zA-Z]{1,15}" placeholder="John Doe" name="fullName" id="fullName"
    validation-message="Full name is a required field." validation-icon="exclamation-mark-triangle" status="invalid"
    required></calcite-input-text>
</calcite-label>
```

```js
// JavaScript
// フィールドの制約の検証、アイコン、メッセージを持つオブジェクトの配列を定義
const validationConstraints = [
  {
    id: "fullName",
    patterns: [
      {
        value: /^\w{16,}/,
        message: "First name must not be longer than 15 letters.",
        icon: "exclamation-mark-triangle-f"
      },
      {
        value: /^\w+\s\w{16,}$/,
        message: "Last name must not be longer than 15 letters.",
        icon: "exclamation-mark-triangle-f"
      },
      {
        value: /^\w*[^\s]\w*$/,
        message: "First and last name are required.",
        icon: "exclamation-mark-triangle-f"
      },
      {
        value: /^[a-zA-Z]*$/,
        message: "First and last name are required.",
        icon: "exclamation-mark-triangle-f"
      },
    ]
  }
];

// ユーザーがコンポーネントを操作する際のカスタムの validationMessage、validationIcon、status を設定
function setCustomValidity(el, message, icon) {
  if (message) {
    el.validationMessage = message;
    el.validationIcon = icon;
    el.status = "invalid";
  } else {
    el.validationMessage = "";
    el.validationIcon = false;
    el.status = "idle";
  }
}

window.onload = () => {
  // フォーム要素にイベント リスナーを追加し、validationMessage、validationIcon、blur 時のステータスを更新
  validationConstraints.forEach(constraint => {
    document.querySelector(`#${constraint.id}`)?.addEventListener("blur", ({ target }) => {
      // pattern 制約にカスタム validationMessage を設定
      if (typeof constraint?.patterns === "object" && constraint?.patterns?.length > 0) {
        for (const pattern of constraint?.patterns) {
          if (target.value?.match(pattern?.value)) {
            setCustomValidity(target, pattern?.message, pattern?.icon ?? true);
            return;
          }
        }
      }
      // すべての制約が満たされたら、カスタム検証メッセージを削除
      setCustomValidity(target, "");
    });
  });
};
```


## モード
Calcite コンポーネントは、ライト モードとダーク モードがあり、それぞれの CSS クラスである `calcite-mode-light` と `calcite-mode-dark` を使用して切り替えることができます。また、`calcite-mode-auto` クラスを使用すると、ブラウザーの [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) CSS メディア クエリーに従って、ライト、ダーク モードが自動的に決定されます。

モードのクラスをある要素に設定すると、そのすべての子ノードにも適用されます。したがって、アプリケーション全体をライト モードからダーク モードに切り替えるには次のようにします。

```html
<body class="calcite-mode-dark">
  <!-- アプリケーション要素 -->
</body>
```