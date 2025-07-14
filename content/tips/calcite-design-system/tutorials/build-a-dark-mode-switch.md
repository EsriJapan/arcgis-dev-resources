+++
title = "暗色 (dark) モード スイッチの構築"
description = "Calcite コンポーネントと ArcGIS Maps SDK for JavaScript の明色 (light) モードと暗色 (dark) モードを切り替えるコンポーネントの作成方法について学びます。"
weight = 5
aliases = ["/calcite-desgin-sysytem/tutorials/build-a-dark-mode-switch"]
+++

出典：Calcite Design System - [Build a dark mode switch](https://developers.arcgis.com/calcite-design-system/tutorials/build-a-dark-mode-switch/)

Calcite コンポーネントと ArcGIS Maps SDK for JavaScript の明色 (light) モードと暗色 (dark) モードを切り替えるコンポーネントの作成方法について学びます。

Calcite コンポーネントを使用して、Calcite コンポーネント、ArcGIS Maps SDK for JavaScript のコンポーネントおよびベースマップに対して暗色 (dark) モードを有効にするスイッチを設計します。このアプリケーションは[マッピング アプリの作成](../create-a-mapping-app)チュートリアルで作成したアプリケーションを基にしています。

Calcite では CSS クラスを使用して明色 (light) モードと暗色 (dark) モードを切り替えることができます (`calcite-mode-light` (デフォルト) と `calcite-mode-dark`)。また、`calcite-mode-auto` クラスも用意されており、これはブラウザーの CSS の [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) メディア クエリーに従います。モード クラスを要素に設定すると、そのすべての子ノードにも適用されます。

モードやスタイリングに関する詳細は、Calcite Design System の [colors and modes](https://developers.arcgis.com/calcite-design-system/foundations/colors/) および ArcGIS Maps SDK for JavaScript の [Styling](https://developers.arcgis.com/javascript/latest/styling) ドキュメントを参照してください。

{{% notice note %}}

<b>ArcGIS 開発者アカウント</b></br>
このチュートリアルで使用するサービスにアクセスするには、無料の [ArcGIS Location Platform アカウント](../../../../guide/get-dev-account/)または ArcGIS Online 組織のアカウントが必要です。

{{% /notice %}}


## ステップ

### 新しいペンの作成
1. まずは[マッピング アプリの作成](../create-a-mapping-app)チュートリアルを完了するか、コード例のペンを使用してください。

### API キーの設定
1. このチュートリアルで使用されるロケーション サービスにアクセスするには、適切な権限を持つ API キーが必要です。

    1.1. [API キーの取得](../../../../guide/get-api-key/)の手順に従って、以下の権限を持つ API キーを作成します。
    - 権限：<b>ロケーション サービス > ベースマップ</b>

    1.2. <b>CodePen</b> で、`esriConfig.apiKey` に作成した API キーを設定してください。

```js
<!-- esriConfig 変数は、他の Esri ライブラリーを追加する前に定義する必要があります -->
<script type="module">
  var esriConfig = {
    apiKey: "API キー"
  };
</script>
```

アクセス トークンを取得するほかの方法については、[Types of authentication](https://developers.arcgis.com/documentation/security-and-authentication/types-of-authentication/) 参照してください。

### テーマのスタイル シートを追加
ArcGIS Maps SDK for JavaScript では、[テーマごとに個別のスタイル シート](https://developers.arcgis.com/javascript/latest/styling/#themes)を使用します。JavaScript で `id` 属性を使って動的に切り替えるため、明色 (light) テーマと暗色 (dark) テーマの両方のスタイル シートを追加します。

1. 暗色 (dark) テーマのスタイル シートを追加し、`disable` 属性を設定し、`id` を追加します。
2. 既存の明色 (light) テーマのスタイル シートに `id` を追加します。

```html
<script src="https://js.arcgis.com/calcite-components/3.2.1/calcite.esm.js" type="module"></script>
<script src="https://js.arcgis.com/4.33/"></script>
<script type="module" src="https://js.arcgis.com/4.33/map-components"></script>

<!-- 追加開始 -->
<link disabled id="arcgis-maps-sdk-theme-dark" rel="stylesheet"
  href="https://js.arcgis.com/4.33/esri/themes/dark/main.css" />
<!-- 追加終了 -->

<!-- 更新開始 -->
<link id="arcgis-maps-sdk-theme-light" rel="stylesheet"
  href="https://js.arcgis.com/4.33/esri/themes/light/main.css" />
<!-- 更新終了 -->
```

### HTML の追加
暗色 (dark) モード切り替えの主要なコンポーネントは [`calcite-switch`](https://developers.arcgis.com/calcite-design-system/components/switch/) です。モードの切り替えには、[calcite-label](https://developers.arcgis.com/calcite-design-system/components/label/) を使用して、暗色 (dark) モードに切り替えられた際のコンテキストを付与します。

1. [`calcite-navigation`](https://developers.arcgis.com/calcite-design-system/components/navigation/) コンポーネント内に `div` 要素を追加し、ナビゲーションの [`content-end`](https://developers.arcgis.com/calcite-design-system/components/navigation/#api-reference-slots-content-end) スロットに配置します。この `div` には、後でスタイリングに使用する `id` 属性を付与します。
2. [`calcite-label`](https://developers.arcgis.com/calcite-design-system/components/label/) コンポーネントを追加します。[`layout`](https://developers.arcgis.com/calcite-design-system/components/label/#component-api-properties-layout) 属性を `"inline"` に設定し、後でスタイリングに使用する `class` 属性も付与します。
3. [`calcite-switch`](https://developers.arcgis.com/calcite-design-system/components/switch/) コンポーネントを追加します。

[スロット]()の概念について詳しくはコア コンセプト内のセクションを参照してください。次のステップで CSS を追加した後、ナビゲーションの [`content-end`](https://developers.arcgis.com/calcite-design-system/components/navigation/#api-reference-slots-content-end) スロットからコンポーネントを削除することで、暗色 (dark) モードへのスイッチをマップ上に配置できます。

```html
<body>
  <calcite-shell content-behind>
    <calcite-navigation slot="header">
      <calcite-navigation-logo id="header-title" heading-level="1" slot="logo">
        <!-- 動的に入力される -->
      </calcite-navigation-logo>

      <!-- 追加開始 -->
      <div slot="content-end">
        <!-- 暗色 (dark) モード スイッチ -->
        <calcite-label layout="inline" class="label-wrapper">
          Dark mode: Off
          <calcite-switch></calcite-switch>
          On
        </calcite-label>
      </div>
      <!-- 追加終了 -->

    </calcite-navigation>
```

### CSS の追加
この時点でアプリを実行すると、暗色 (dark) モード スイッチがナビゲーションの "content-end" スロットに配置されていることが確認できます。

次に、Flexbox を使用してコンポーネントの位置を調整するための CSS スタイリングを追加します。

1. `<style>` 要素内に、暗色 (dark) モード スイッチのレイアウトを設定する CSS プロパティを設定します。`margin-inline` と `padding` の CSS プロパティを設定します。`--calcite-color-border-1` CSS 変数を使用して境界線を追加します。次に、[`calcite-switch`](https://developers.arcgis.com/calcite-design-system/components/switch/) に `margin` プロパティを追加し、将来的にインターフェイスをコントロールできるようにします。

    CSS 変数の基本的な概念については、コア コンセプトの [CSS 変数](../../core-concepts/#css-変数) セクションを参照してください。Calcite の[カラー モード](https://developers.arcgis.com/calcite-design-system/foundations/colors/)には明色 (light) と暗色 (dark) の値があり、モードの切り替え時に自動で変更されます。モードを切り替えるアプリケーションでは、Calcite 以外の要素にもカラー モード変数を使用してください。

2. 次に、`calcite-label` に [`--calcite-label-margin-bottom`](https://developers.arcgis.com/calcite-design-system/components/label/#component-api-styles---calcite-label-margin-bottom) CSS 変数を追加して、コンポーネントの下にスペースを設定します。また、[`calcite-switch`](https://developers.arcgis.com/calcite-design-system/components/switch/) の `cursor` プロパティを `"pointer"` に設定し、スイッチのコンテナーがクリック可能であることを示します。

```css
.label-wrapper {
  --calcite-label-margin-bottom: 0px;
  display: flex;
  margin-inline: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--calcite-color-border-1);
  cursor: pointer;
}
```

### JavaScript の追加
ここまでの手順で見栄えの良いコンポーネントが完成しましたが、まだ暗色 (dark) モードは有効になっていません。次に、JavaScript を使って暗色 (dark) モード スイッチを実装します。

1. `<script>` 要素内の既存の JavaScript コードの下に、新しく暗色 (dark) モードを有効にする関数を作成します。
2. `<body>` 要素の `calcite-mode-dark` クラスを切り替えます。`calcite-mode-light` クラスはデフォルトのため追加する必要はありません。
3. 上で追加した `id` 属性を使用して、ArcGIS Maps SDK for JavaScript の明色 (light) テーマと暗色 (dark) テーマのスタイル シートにアクセスします。
4. 両方のスタイル シートの `disabled` 属性を反転させ、ブール値を切り替えます。
5. 現在のモードに応じて、ベースマップを `gray-vector` と `dark-gray-vector` を切り替えます。
6. `.esri-ui` を使って、ArcGIS Maps SDK for JavaScript のコンポーネント全体で `calcite-mode-dark` クラスを切り替えます。
7. [`calcite-switch`](https://developers.arcgis.com/calcite-design-system/components/switch/) コンポーネントにイベント リスナーを追加します。[`calciteSwitchChange`](https://developers.arcgis.com/calcite-design-system/components/switch/#component-api-events) イベントを監視し、作成した関数を実行します。

Calcite では、多くのコンポーネントに対してカスタム イベントが用意されています。これらのカスタム イベントはすべて接頭辞として `calcite` が付けられ、次にコンポーネント名、最後にイベントの種類が付けられます。各コンポーネントがイベントを持っているかどうか、およびその詳細を確認するにはコンポーネントの API リファレンスを参照してください。

```js
    document.querySelector("calcite-shell").hidden = false;
    document.querySelector("calcite-loader").hidden = true;

  });


  // 追加開始
  const updateDarkMode = () => {
    document.querySelector("calcite-loader").hidden = false;
      // Calcite モード
      document.body.classList.toggle("calcite-mode-dark");
      // ArcGIS Maps SDK テーマ
      const dark = document.querySelector("#arcgis-maps-sdk-theme-dark");
      const light = document.querySelector("#arcgis-maps-sdk-theme-light");
      dark.disabled = !dark.disabled;
      light.disabled = !light.disabled;
      // ArcGIS Maps SDK ベースマップ
      mapEl.basemap = dark.disabled ? "gray-vector" : "dark-gray-vector";
      // Toggle ArcGIS Maps SDK ウィジェット モード
      const widgets = document.getElementsByClassName("esri-ui");
      for (let i = 0; i < widgets.length; i++) {
        widgets.item(i).classList.toggle("calcite-mode-dark");
      }
      document.querySelector("calcite-loader").hidden = true;
    };

    document.querySelector("calcite-switch").addEventListener("calciteSwitchChange", updateDarkMode);
    // 追加終了

</script>

```

### アプリの実行
<b>CodePen</b> でコードを実行すると、アプリケーションが表示されます。

画面右上には、新しく暗色 (dark) モード スイッチ コンポーネントが表示されます。コンポーネントの任意の場所をクリックすると、[`calcite-switch`](https://developers.arcgis.com/calcite-design-system/components/switch/) が切り替わります。イベント リスナーに設定した関数が実行され、Calcite コンポーネントを暗色 (dark) モードに切り替えると同時に、ArcGIS Maps SDK for JavaScript のベースマップやコンポーネントも暗色に切り替わります。
