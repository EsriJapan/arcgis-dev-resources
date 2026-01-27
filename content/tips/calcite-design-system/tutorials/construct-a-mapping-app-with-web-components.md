+++
title = "Web コンポーネントでマッピング アプリを構築"
description = "Calcite コンポーネントと Map コンポーネントを使用して、インタラクティブなマッピング アプリケーションを構築する方法を学びます。"
weight = 6
aliases = ["/calcite-desgin-sysytem/tutorials/construct-a-mapping-app-with-web-components"]
+++

出典：Calcite Design System - [Construct a mapping app with web components](https://developers.arcgis.com/calcite-design-system/tutorials/construct-a-mapping-app-components/)

Calcite コンポーネントと ArcGIS Maps SDK for JavaScript の [Map コンポーネント](https://developers.arcgis.com/javascript/latest/get-started-cdn/)を使用して、Web コンポーネントでマッピング アプリケーションの UI を構築する方法をご紹介します。

Calcite コンポーネントを使用して、マッピング アプリケーションのユーザー エクスペリエンスを向上させ、インタラクションを促進します。このチュートリアルでは、アプリの作成を効率化するためのユーザー インタフェースと[マップ コンポーネント](https://developers.arcgis.com/javascript/latest/components/)に焦点を当て、ArcGIS Maps SDK for JavaScript の予備知識は必要ありません。ArcGIS Maps SDK for JavaScript を初めてお使いになる場合は、このアプリケーションで使用されている同様のマッピングをコンセプトに扱った素晴らしい[チュートリアル](https://developers.arcgis.com/javascript/latest/display-a-web-map/)をご覧ください。

## 前提条件

{{< callout >}}

<b>ArcGIS 開発者アカウント</b></br>
このチュートリアルで使用するサービスにアクセスするには、無料の [ArcGIS Location Platform アカウント](../../../../guide/get-dev-account/)または ArcGIS Online 組織のアカウントが必要です。

{{< /callout >}}

## ステップ

### 新しいペンの作成
1. [CodePen](https://codepen.io/pen/?editors=1000) に移動し、マッピングアプリケーション用の新しいペンを作成します。

### HTML の追加
1. CodePen > HTML で、地図を表示する [`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) コンポーネントを含むページを作成するための HTML と CSS を追加してください。

2. [`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) コンポーネントに `id` を追加して、アプリ開発全体で参照できるようにし、CSS を使って幅と高さをブラウザーのウィンドウに合わせて設定し、さらにアプリのスタイリングを補うために [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container) を使用してください。

CodePen では、`<!DOCTYPE html>` タグは必須ではありません。別のエディターを使用している場合や、ローカル サーバーでページを運営している場合は、必ずこのタグを HTML ページの先頭に追加してください。

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Calcite Components: Construct a mapping app with web components</title>
  </head>
  <style>
    html,
    body,
    #mapEl {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      display: flex;
    }
  </style>
  <body>
    <arcgis-map id="mapEl"></arcgis-map>
  </body>
  <script type="module">
  </script>
</html>
```

3. `<head>` 要素に、Calcite コンポーネントと ArcGIS Maps SDK for JavaScript への参照を追加します。

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
  <title>Calcite Components: Create a mapping app with web components</title>

  <!-- 追加開始 -->
  <script src="https://js.arcgis.com/calcite-components/3.2.1/calcite.esm.js" type="module"></script>
  <script src="https://js.arcgis.com/4.33/"></script>
  <link rel="stylesheet" href="https://js.arcgis.com/4.33/esri/themes/light/main.css" />
  <!-- 追加終了 -->

</head>
```

4. 次に、ArcGIS Maps SDK for JavaScript の[マップ コンポーネント](https://developers.arcgis.com/javascript/latest/get-started-cdn/#components)への参照を追加します。

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
  <title>Calcite Components: Create a mapping app with web components</title>

  <script src="https://js.arcgis.com/calcite-components/3.2.1/calcite.esm.js" type="module"></script>
  <script src="https://js.arcgis.com/4.33/"></script>
  <link rel="stylesheet" href="https://js.arcgis.com/4.33/esri/themes/light/main.css" />
  <!-- 追加開始 -->
  <script type="module" src="https://js.arcgis.com/4.33/map-components"></script>
  <!-- 追加終了 -->

</head>
```

## API キーの使用
開発者アカウントを使用している場合、[ArcGIS サービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/services/)にアクセスするには API キーが必要です。ArcGIS Online の組織に関連付けられているアカウントがある場合は、この手順を省略できます。

1. セキュアなリソースにアクセスできるアプリを作るには、[セキュリティと認証](../../../../guide/security)を始めるをご覧ください。
2. CodePen > `<script>` に戻り、[`esriConfig`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html) クラスをインポートします。
3. [`apiKey`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#apiKey) プロパティを設定します。

```html
<script type="module">
  // 追加開始
  const [esriConfig] = await $arcgis.import([
    "@arcgis/core/config.js"
  ]);
  esriConfig.apiKey = "YOUR_API_KEY";
  // 追加終了
</script>
```

## マップの表示
マップはこのアプリケーションの中心です。[HTML の追加](./#html-の追加)で追加したCSSは、マップをウィンドウの幅と高さいっぱいに表示します。また、マップと連動する ArcGIS Maps SDK for JavaScript のマップ コンポーネントも追加します。

1. `<body>` 内で、`item-id` 属性を使って [`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) コンポーネントを初期化します。この属性は Web マップのアイテム ID を指定します。

```html
<body>
    <!-- 更新開始 -->
    <arcgis-map id="mapEl" item-id="03d584a7c9874b44821c6a766c3bbc11">

    </arcgis-map>
    <!-- 更新終了 -->
</body>
```

2. 次に、[`arcgis-zoom`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-zoom/) コンポーネントを追加し、[`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) コンポーネントに対する`位置`を設定します。

```html
<body>
    <arcgis-map id="mapEl" item-id="03d584a7c9874b44821c6a766c3bbc11">
        <!-- 追加開始 -->
        <arcgis-zoom position="top-left"></arcgis-zoom>
        <!-- 追加終了 -->
    </arcgis-map>
</body>
```

この時点でアプリケーションはマップを表示します。 次に、Calcite コンポーネントを使ってアプリのユーザー インターフェイスを構築します。

### レイアウトの作成
レイアウトを作るために、スロットを使ってページ上の他のコンポーネントを整理する [`calcite-shell`](https://developers.arcgis.com/calcite-design-system/components/shell/) を使います。スロットは Web コンポーネントの概念であり、[コア コンセプト](../core-concepts/#スロット)のセクションに簡単な説明があります。Calcite コンポーネントにスロットがある場合は、その一覧が[リファレンス ページ](https://developers.arcgis.com/calcite-design-system/components/)に記載されています。たとえば、こちらが [シェルのスロット](https://developers.arcgis.com/calcite-design-system/components/shell/#slots)です。

1. calcite-shell コンポーネントを追加し、content-behind 属性を設定して、ユーザーがシェルの背後にある地図と操作できるようにします。

```html
<body>
    <!-- 追加開始 -->
    <calcite-shell content-behind>
    <!-- 追加終了 -->
        <arcgis-map id="mapEl" item-id="03d584a7c9874b44821c6a766c3bbc11">
            <arcgis-zoom position="top-left"></arcgis-zoom>
        </arcgis-map>
    <!-- 追加開始 -->
     </calcite-shell>
    <!-- 追加終了 -->
</body>
```

2. 次に、[`calcite-shell-panel`](https://developers.arcgis.com/calcite-design-system/components/shell-panel/) コンポーネントを追加し、それをシェルの [`"panel-end"`](https://developers.arcgis.com/calcite-design-system/components/shell/#api-reference-slots-panel-end) スロットに配置します。

3. 次に、シェル パネルの [`displayMode`](https://developers.arcgis.com/calcite-design-system/components/shell-panel/#api-reference-properties-displayMode) 属性を `"float"` に設定して、コンテンツが地図の上に浮かんで表示されるようにします。

```html
    <calcite-shell content-behind>
        <!-- 追加開始 -->
        <calcite-shell-panel id="shell-panel-nav" slot="panel-end" display-mode="float" height="l">

        </calcite-shell-panel>
        <!-- 追加終了 -->
        <arcgis-map id="mapEl" item-id="03d584a7c9874b44821c6a766c3bbc11">
            <arcgis-zoom position="top-left"></arcgis-zoom>
        </arcgis-map>
     </calcite-shell>
```

4. [`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) コンポーネントを追加します。`heading` に Web マップのタイトルを動的に入力するために `id` を指定し、初期化時にコンポーネントを隠すために `hidden` 属性を追加します。

5. 次に、[`calcite-icon`](https://developers.arcgis.com/calcite-design-system/components/icon/) をパネルの [`"header-actions-start"`](https://developers.arcgis.com/calcite-design-system/components/panel/#api-reference-slots-header-actions-start) スロットに挿入します。

6. 次に、[`calcite-action-bar`](https://developers.arcgis.com/calcite-design-system/components/action-bar/) をパネルの [`"action-bar"`](https://developers.arcgis.com/calcite-design-system/components/panel/#api-reference-slots-action-bar) スロットに挿入します。ここに [`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) を追加して、マップ コンポーネントを表示できるようにします。

7. 各アクションに、一意の `data-action-id` の値を追加する。

```html
    <calcite-shell content-behind>

        <calcite-shell-panel id="shell-panel-nav" slot="panel-end" display-mode="float" height="l">
            <!-- 追加開始-->
            <calcite-panel id="app-heading" hidden>
                <calcite-icon id="logo-icon" slot="header-actions-start" icon="explore" text-label="explore"></calcite-icon>
                <calcite-action-bar id="map-actions" slot="action-bar" layout="horizontal" expand-disabled>
                    <calcite-action icon="layers" text="Layers" data-action-id="layers"></calcite-action>
                    <calcite-action icon="basemap" text="Basemaps" data-action-id="basemaps"></calcite-action>
                    <calcite-action icon="legend" text="Legend" data-action-id="legend"></calcite-action>
                    <calcite-action icon="bookmark" text="Bookmarks" data-action-id="bookmarks"></calcite-action>
                    <calcite-action icon="print" text="Print" data-action-id="print"></calcite-action>
                    <calcite-action icon="information" text="About" data-action-id="information"></calcite-action>
              </calcite-action-bar>
            </calcite-panel>
            <!-- 追加開始-->
        </calcite-shell-panel>
```

### マップ コンポーネントの追加
レイアウトをさらに構築するために、ユーザーが [`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) に操作したときに表示される[マップ コンポーネント](https://developers.arcgis.com/javascript/latest/components/)を追加します。

1. はじめに calcite-block コンポーネントを追加する。
    * コンテンツを表示するために `expanded` 属性を追加します。
    * ユニークな `heading` を付けます。
    * 対応する `data-action-id` の値を、ブロックの `data-block-id` 属性に指定します。
    * アプリの初期化時にコンポーネントとそのコンテンツが表示されないように、`hidden` 属性を追加します。

2. [`calcite-block`](https://developers.arcgis.com/calcite-design-system/components/block/) に、[`arcgis-layer-list`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-layer-list/) マップ コンポーネントをスロットに挿入します。
    * `reference-element` にマップ コンポーネントの `id` に設定します。

```html
        <calcite-shell-panel id="shell-panel-nav" slot="panel-end" display-mode="float" height="l">
            <calcite-panel id="app-heading" hidden>
                <calcite-icon id="logo-icon" slot="header-actions-start" icon="explore" text-label="explore"></calcite-icon>
                <calcite-action-bar id="map-actions" slot="action-bar" layout="horizontal" expand-disabled>
                    <calcite-action icon="layers" text="Layers" data-action-id="layers"></calcite-action>
                    <calcite-action icon="basemap" text="Basemaps" data-action-id="basemaps"></calcite-action>
                    <calcite-action icon="legend" text="Legend" data-action-id="legend"></calcite-action>
                    <calcite-action icon="bookmark" text="Bookmarks" data-action-id="bookmarks"></calcite-action>
                    <calcite-action icon="print" text="Print" data-action-id="print"></calcite-action>
                    <calcite-action icon="information" text="About" data-action-id="information"></calcite-action>
              </calcite-action-bar>
            </calcite-panel>

            <!-- 追加開始 -->
            <!-- ArcGIS Maps SDK for JavaScript コンポーネントを含むマップ固有のブロック -->
            <calcite-block expanded heading="Layers" data-block-id="layers" hidden>
                <arcgis-layer-list drag-enabled reference-element="mapEl" visibility-appearance="checkbox"></arcgis-layer-list>
            </calcite-block>
            <!-- 追加終了 -->
        </calcite-shell-panel>
```

3. ステップ 1 と 2 を繰り返して、[`calcite-block`](https://developers.arcgis.com/calcite-design-system/components/block/) コンポーネントを追加し、[`arcgis-basemap-gallery`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-gallery/)、[`arcgis-legend`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/)、[`arcgis-bookmarks`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-bookmarks/)、および [`arcgis-print`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-print/) コンポーネントをそれぞれ含めます。

```html
            <!-- ArcGIS Maps SDK for JavaScript コンポーネントを含むマップ固有のブロック -->
            <calcite-block expanded heading="Layers" data-block-id="layers" hidden>
                <arcgis-layer-list drag-enabled reference-element="mapEl" visibility-appearance="checkbox"></arcgis-layer-list>
            </calcite-block>

            <!-- 追加開始 -->
            <calcite-block expanded heading="Basemaps" data-block-id="basemaps" hidden>
                <arcgis-basemap-gallery reference-element="mapEl"></arcgis-basemap-gallery>
            </calcite-block>
            <calcite-block expanded heading="Legend" data-block-id="legend" hidden>
                <arcgis-legend legend-style="classic" reference-element="mapEl"></arcgis-legend>
            </calcite-block>
            <calcite-block expanded heading="Bookmarks" data-block-id="bookmarks" hidden>
                <arcgis-bookmarks editing-enabled="false" reference-element="mapEl"></arcgis-bookmarks>
            </calcite-block>
            <calcite-block expanded heading="Print" data-block-id="print" hidden>
                <arcgis-print allowed-formats="all" allowed-layouts="all" include-default-templates="false"
                reference-element="mapEl"></arcgis-print>
            </calcite-block>
            <!-- 追加終了 -->
```

### インフォメーション カードの作成
インフォメーション カードは、アプリのデータに関する情報をユーザーに提供できます。[`calcite-card`](https://developers.arcgis.com/calcite-design-system/components/card/) を使用して Web マップの情報を表示します。このカードには、タイトル、サムネイル画像、説明、最終更新日、タグが動的に入力・整理されます。

1. 他の地図コンポーネントと同様に、[`calcite-block`](https://developers.arcgis.com/calcite-design-system/components/block/) コンポーネントを追加します。
    * コンテンツを表示するために `expanded` 属性を追加します。
    * ユニークな `heading` を付けます。
    * 対応する `data-action-id` の値を、ブロックの `data-block-id` 属性に指定します。
    * `closed` 属性を追加し、アプリの初期化時にコンポーネントとそのコンテンツが表示されないようにします。

2. [`calcite-card`](https://developers.arcgis.com/calcite-design-system/components/card/) コンポーネントを追加します。

3. カードに以下の子要素を、固有の ID を付けて追加します。
    * カードの thumbnail スロットに img 要素を定義します。
    * 3 つの div 要素を追加してください。1 つは heading スロットに、もう 1 つは description スロットに、最後の 1 つは footer-end スロットに配置します。

```html
      <calcite-block expanded heading="Print" data-block-id="print" hidden>
        <arcgis-print allowed-formats="all" allowed-layouts="all" include-default-templates="false"
          reference-element="mapEl"></arcgis-print>
      </calcite-block>

      <!-- 追加開始 -->
      <!-- Info block (populates with info from the web map) -->
      <calcite-block expanded heading="About the data" data-block-id="information" hidden>
        <calcite-card id="card-content">
          <img id="card-thumbnail" alt="Webmap thumbnail" slot="thumbnail" />
          <div id="card-heading" slot="heading">
            <!-- Dynamically populated -->
          </div>
          <div id="card-description" slot="description">
            <!-- Dynamically populated -->
          </div>
          <div id="card-tags" slot="footer-end">
            <!-- Dynamically populated -->
          </div>
        </calcite-card>
      </calcite-block>
      <!-- 追加終了 -->

    </calcite-shell-panel>
```

### コンテンツの設定
アプリケーションにコンポーネントの追加が終わりました。パネルの[`見出し`](https://developers.arcgis.com/calcite-design-system/components/panel/#api-reference-properties-heading)とインフォメーション カードに Web マップの内容を入力します。

1. `<script>` タグで `arcgis-map` コンポーネントを宣言します。

```html
<script type="module">

  // 追加開始
  const mapEl = document.getElementById("mapEl");
  // 追加終了

</script>
```

2. マップの [`arcgisViewReadyChange`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/#events) イベントで、Web マップのコンテンツを取得するために、次の `portalItem` の定数を宣言してください。：`title`、`thumbnailUrl`、`snippet`、`modified`、および `tags`

3. 次に、UI に値を追加します。
    * `title` は、パネルの`見出し`およびカードの `"heading"` スロットに使用されます。
    * `thumbnailUrl` は、カードの画像（`img`）の `src` プロパティとして `"thumbnail"` スロットに追加されます。
    * `snippet` と `modified` は、カードの `"description"` スロットを補足します。
    * `tags` は、それぞれのタグを繰り返し処理して、カードの `"footer-end"` スロットに個別の [`calcite-chip`](https://developers.arcgis.com/calcite-design-system/components/chip/) コンポーネントを作成します。

```html
<script type="module">

  const mapEl = document.getElementById("mapEl");

  // 追加開始
  mapEl.addEventListener("arcgisViewReadyChange", () => {
    const { title, thumbnailUrl, snippet, modified, tags } = mapEl.map.portalItem;
    document.getElementById("app-heading").heading = `${title} Explorer`;
    document.getElementById("card-heading").innerHTML = title;
    document.getElementById("card-thumbnail").src = thumbnailUrl;
    document.getElementById("card-description").innerHTML = `<p>${snippet}</p><p>Last modified on ${modified}.</p>`;
    tags.forEach(tag => {
      document.getElementById("card-tags").innerHTML += `<calcite-chip>${tag}</calcite-chip>`;
    });

  });
  // 追加終了

</script>

```

### コンポーネントをインタラクティブにする
次のステップは、対応する calcite-action コンポーネントをクリックしたときに、マップ コンポーネントを含む calcite-block コンポーネントを表示します。

1. 各 [`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) がクリックされたときに実行される関数を作成します。この関数は、現在表示されている [`calcite-block`](https://developers.arcgis.com/calcite-design-system/components/block/) を非表示にし、クリックされたアクションに対応するブロックを表示します。ユーザーが現在アクティブなアクションをクリックした場合、対応するブロックは閉じられ、展開されたブロックは存在しなくなります。

このステップでは、上で追加した[データ属性](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)を使って、アクション要素とブロック要素にアクセスするために[属性セレクター](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)を使用します。データ属性の値は、対応するマップコンポーネントの名前です。

```javascript
  mapEl.addEventListener("arcgisViewReadyChange", () => {
    const { title, thumbnailUrl, snippet, modified, tags } = mapEl.map.portalItem;
    document.getElementById("app-heading").heading = `${title} Explorer`;
    document.getElementById("card-heading").innerHTML = title;
    document.getElementById("card-thumbnail").src = thumbnailUrl;
    document.getElementById("card-description").innerHTML = `<p>${snippet}</p><p>Last modified on ${modified}.</p>`;
    tags.forEach(tag => {
      document.getElementById("card-tags").innerHTML += `<calcite-chip>${tag}</calcite-chip>`;
    });

  });

  // 追加開始
  let activeWidget;
  const handleActionBarClick = ({ target }) => {
    if (target.tagName !== "CALCITE-ACTION") {
      return;
    }
    if (activeWidget) {
      document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
      document.querySelector(`[data-block-id=${activeWidget}]`).hidden = true;
    }
    const nextWidget = target.dataset.actionId;
    if (nextWidget !== activeWidget) {
      document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
      document.querySelector(`[data-block-id=${nextWidget}]`).hidden = false;
      activeWidget = nextWidget;
    } else {
      activeWidget = null;
    }
  };
  document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);
  // 追加終了

</script>
```

### ローダー コンポーネントの追加
ここまでで、アプリケーションがインタラクティブになりました。Calcite コンポーネントを使用して、マップ コンポーネントを開いたり閉じたりできます。しかし、アプリケーションのロードには1秒かかるので、それをユーザーに伝える必要があります。

1. <body> 要素内で、シェルの終了タグの後に calcite-loader を追加して、コンポーネントを表示します。
```html
     </calcite-shell>
     <!-- 追加開始 -->
     <calcite-loader></calcite-loader>
     <!-- 追加終了 -->
</body>
```

2. [`arcgisViewReadyChange`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/#events) イベントの内部で、他の JavaScript コードの下に、[`calcite-loader`](https://developers.arcgis.com/calcite-design-system/components/loader/) コンポーネントを `hidden` プロパティを `true` に設定して非表示にし、[`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) を表示してください。マップとそのプロパティがアプリに読み込まれると、ローダーは非表示になり、パネルが UI に表示されます。

```javascript
  mapEl.addEventListener("arcgisViewReadyChange", () => {
    const { title, thumbnailUrl, snippet, modified, tags } = mapEl.map.portalItem;
    document.getElementById("app-heading").heading = `${title} Explorer`;
    document.getElementById("card-heading").innerHTML = title;
    document.getElementById("card-thumbnail").src = thumbnailUrl;
    document.getElementById("card-description").innerHTML = `<p>${snippet}</p><p>Last modified on ${modified}.</p>`;
    tags.forEach(tag => {
      document.getElementById("card-tags").innerHTML += `<calcite-chip>${tag}</calcite-chip>`;
    });

    // 追加開始
    document.querySelector("calcite-loader").hidden = true;
    document.getElementById("app-heading").removeAttribute("hidden");
    // 追加終了

  });
```

### スタイルの追加
`<style>` 要素内で、見出しの [`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) と情報の [`calcite-card`](https://developers.arcgis.com/calcite-design-system/components/card/) のユーザー インターフェースを強化するために、追加の CSS を記述します。

1. `calcite-icon` をパネルの `"header-actions-start"` にスロットしている場合、そのコンポーネントを整列させるために [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_containerk) の変数を追加します。

2. 次に、パネルの幅と高さを設定するためのスタイルを追加します。
    * calcite-shell-panel に --calcite-shell-panel-min-width を追加します。
    * `calcite-shell-panel` がスマートフォンなどの小型デバイスに対応できるように、[メディア クエリー](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)を追加します。
    * `data-block-id` 属性を含む `calcite-block` コンポーネントに対して、`max-height` を設定します。

```html
<style>

  html,
  body,
  #mapEl {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
  }


  /** 追加開始 */
  #logo-icon {
    align-self: center;
    height: auto;
    margin-inline-start: 0.5rem;
  }

  #shell-panel-nav {
    --calcite-shell-panel-min-width: 18rem;
  }

  @media (max-width: 400px) {
    #shell-panel-nav {
      --calcite-shell-panel-min-width: 80vw;
    }
  }

  calcite-block[data-block-id] {
    max-height: 50vh;
    overflow-y: auto;
  }
  /** 追加終了 */

</style>
```

3. 最後に、[`calcite-card`](https://developers.arcgis.com/calcite-design-system/components/card/) にスタイルを追加してください。具体的には、コンポーネントに`パディング`を追加し、[CSS 変数](https://developers.arcgis.com/calcite-design-system/foundations/tokens/reference/#font)を使って`フォント サイズ`を更新し、タグを `flex-wrap` で折り返すようにしてください。

```html
<style>
  /** ～ 中略 ～  */
  calcite-block[data-block-id] {
    max-height: 50vh;
    overflow-y: auto;
  }


  /* 追加開始 */
  #card-heading {
    font-size: var(--calcite-font-size-md);
  }

  #card-description {
    font-size: var(--calcite-font-size);
  }

  #card-tags {
    flex-wrap: wrap;
  }
  /* 追加終了 */

</style>
```

### アプリの実行
<b>CodePen</b> でコードを実行すると、アプリケーションが表示されます。

アプリケーションの読み込みが完了すると、マップが表示され、Web マップのタイトルと [`calcite-action-bar`](https://developers.arcgis.com/calcite-design-system/components/action-bar/) も一緒に表示されます。[`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) コンポーネントをクリックすると、[`calcite-block`](https://developers.arcgis.com/calcite-design-system/components/block/) コンポーネントが展開・折りたたみされます。これらのブロックには、[ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) のマップ コンポーネントが含まれています。