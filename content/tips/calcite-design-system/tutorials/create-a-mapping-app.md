+++
title = "マッピング アプリの作成"
description = "Calcite コンポーネントとArcGIS Maps SDK for JavaScript Mapコンポーネントを使用して、シンプルなマッピング アプリケーションのUIを作成する方法について学びます。"
weight = 4
aliases = ["/calcite-desgin-sysytem/tutorials/create-a-mapping-app/"]
+++

出典：Calcite Design System - [Create a mapping app](https://developers.arcgis.com/calcite-design-system/tutorials/create-a-mapping-app/)

Calcite コンポーネントと [ArcGIS Maps SDK for JavaScript のマップ コンポーネント](https://developers.arcgis.com/javascript/latest/components/)を使用して、シンプルなマッピング アプリケーションの UI を作成する方法について学びます。

Calcite コンポーネントを使用して、マッピング アプリケーションでポジティブなユーザー エクスペリエンスを設計し、ユーザーとのインタラクションを促進します。このチュートリアルではユーザー インターフェースに焦点を当てており、ArcGIS Maps SDK for JavaScript の基本的な知識が必要です。ArcGIS Maps SDK for JavaScript に初めて触れる場合は、このアプリケーションで用いられるマッピング概念を解説した[チュートリアル](https://developers.arcgis.com/javascript/latest/display-a-web-map)をご覧ください。

### 前提条件

{{< callout >}}

<b>ArcGIS 開発者アカウント</b></br>
このチュートリアルで使用するサービスにアクセスするには、無料の [ArcGIS Location Platform アカウント](../../../../guide/get-dev-account/)または ArcGIS Online 組織のアカウントが必要です。

{{< /callout >}}

## ステップ

### 新しいペンの作成
1. [CodePen](https://codepen.io/pen/?editors=1000) にアクセスして、マッピング アプリケーション用の新しいペンを作成してください。

### HTML の追加

**CodePen** の **HTML** で、HTML と CSS を追加して、[`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/)を表示するページを作成します。CSS は、マップがブラウザー ウィンドウの全幅と全高に表示されるようにします。
`<!DOCTYPE html>` タグは CodePen では必要ありません。異なるエディターを使用している場合や、ページをローカル サーバーで実行している場合は、HTML ページの先頭にこのタグを追加してください。

``` HTML
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Calcite Components: Create a mapping app</title>
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
  <arcgis-map id="mapEl">
    <arcgis-zoom position="top-right"></arcgis-zoom>
  </arcgis-map>
  </body>
  <script type="module">
  </script>
</html>
```

1. `<head>` 要素に、Calcite コンポーネント、ArcGIS Maps SDK for JavaScript、およびマップ コンポーネントへの参照を追加します。

``` HTML
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
  <title>Calcite Components: Create a mapping app</title>

<!-- 追加開始 -->
  <script src="https://js.arcgis.com/calcite-components/3.2.1/calcite.esm.js" type="module"></script>

  <script src="https://js.arcgis.com/4.33/"></script>
  <link rel="stylesheet" href="https://js.arcgis.com/4.33/esri/themes/light/main.css" />
  <script type="module" src="https://js.arcgis.com/4.33/map-components"></script>
<!-- 追加終了 -->

</head>
<style>
```

### API キーの設定
1. このチュートリアルで使用されるロケーション サービスにアクセスするには、適切な権限を持つ API キーが必要です。

    1.1. [API キーの取得](../../../../guide/get-api-key/)の手順に従って、以下の権限を持つ API キーを作成します。
    - 権限：<b>ロケーション サービス > ベースマップ</b>

    1.2. <b>CodePen</b> で、`esriConfig.apiKey` に作成した API キーを設定してください。

```html
<!-- esriConfig 変数は、他の Esri ライブラリーを追加する前に定義する必要があります -->
<script type="module">
  var esriConfig = {
    apiKey: "API キー"
  };
</script>
```

アクセス トークンを取得するほかの方法については、[Types of authentication](https://developers.arcgis.com/documentation/security-and-authentication/types-of-authentication/) 参照してください。


### マップの表示

このアプリケーションはマップが中心となっています。上記に CSS を追加することで、マップがウィンドウの全幅と全高に表示されるように設定しました。さらに、マップと関係を持つ [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/components/) のコンポーネントを追加します。これらのコンポーネントは、ユーザー インターフェースをシンプルに保つためにCalcite コンポーネントで管理されます。

1. `<body>` 内で、Web マップのアイテム ID を指定する `item-id` 属性を使用して、[`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) コンポーネントを初期化します。

``` HTML
    <arcgis-map id="mapEl" item-id="210c5b77056846808c7a5ce93920be81">
      <arcgis-zoom position="top-right"></arcgis-zoom>
    </arcgis-map>
```
### レイアウトの作成

レイアウトを作成するには、[`calcite-shell`](https://developers.arcgis.com/calcite-design-system/components/shell/) を使用します。calcite-shell は、スロットを使用してページ上の他のコンポーネントを配置します。スロットは Web コンポーネントの概念であり、[コア コンセプトのセクション](https://developers.arcgis.com/calcite-design-system/core-concepts/#slots)で簡単に説明されています。コンポーネントがスロットを保有する場合、そのスロットのリストはコンポーネントの[リファレンス ページ](https://developers.arcgis.com/calcite-design-system/components/)で確認できます。例えば、[シェルのスロット](https://developers.arcgis.com/calcite-design-system/components/shell/#component-api-slots)はこちらの通りです。

1. [`calcite-shell`](https://developers.arcgis.com/calcite-design-system/components/shell/) コンポーネントを追加します。
    - [`content-behind`](https://developers.arcgis.com/calcite-design-system/components/shell/#component-api-properties-contentBehind) 属性を設定し、ユーザーがシェル背後のマップとインタラクションできるようにします。
2. [`calcite-shell-panel`](https://developers.arcgis.com/calcite-design-system/components/shell-panel/) コンポーネントを追加し、シェル パネルの [`panel-start`](https://developers.arcgis.com/calcite-design-system/components/shell/#component-api-slots-panel-start) スロットに配置します。[`displayMode`](https://developers.arcgis.com/calcite-design-system/components/shell-panel/#component-api-properties-displayMode) 属性を `float-content` に設定し、シェル パネルの中身がマップの上で動作するように表示されます。

``` HTML
<body>

  <!-- 追加開始 -->
  <calcite-shell content-behind>

    <calcite-shell-panel slot="panel-start" display-mode="float-content">

    </calcite-shell-panel>
    <!-- 追加終了 -->

    <arcgis-map id="mapEl" item-id="210c5b77056846808c7a5ce93920be81">
      <arcgis-zoom position="top-right"></arcgis-zoom>
    </arcgis-map>

  <!-- 追加開始 -->
  </calcite-shell>
  <!-- 追加終了 -->
</body>
```

1. [`calcite-navigation`](https://developers.arcgis.com/calcite-design-system/components/navigation/) コンポーネントを追加し、シェルの [`header`](https://developers.arcgis.com/calcite-design-system/components/shell/#component-api-slots-header) スロットに配置します。

2. 次に、[`calcite-navigation-logo`](https://developers.arcgis.com/calcite-design-system/components/navigation-logo/) コンポーネントをナビゲーションの [`logo`](https://developers.arcgis.com/calcite-design-system/components/navigation/#api-reference-slots-logo) スロットに配置します。Web マップのタイトルで`ヘッダー`を動的に表示するために、`id` を指定します。

``` HTML
  <calcite-shell content-behind>

    <!-- 追加開始 -->
    <calcite-navigation slot="header">
      <calcite-navigation-logo id="header-title" heading-level="1" slot="logo">
        <!-- Dynamically populated -->
      </calcite-navigation-logo>
    </calcite-navigation>
    <!-- 追加終了 -->

    <calcite-shell-panel slot="panel-start" display-mode="float-content">

    </calcite-shell-panel>
```

### アクションとパネル コンポーネントを追加する

次に、[ArcGIS Maps SDK for JavaScript コンポーネント](https://developers.arcgis.com/javascript/latest/components/)にアクセスするために使用するコンポーネントを追加します。[`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) コンポーネントにはマップ コンポーネント コンテナーが含まれます。パネルは初期状態では非表示になっており、ユーザーは対応する [`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) コンポーネントを使用して表示できます。

1. [`calcite-action-bar`](https://developers.arcgis.com/calcite-design-system/components/action-bar/) コンポーネントを追加し、シェル パネルの [`action-bar`](https://developers.arcgis.com/calcite-design-system/components/shell-panel/#component-api-slots-action-bar) スロットに配置します。
2. [`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) コンポーネントを追加し、クリックするとパネルが開くようにします。
    - アクションで開くマップ コンポーネントの名前を [`icon`](https://developers.arcgis.com/calcite-design-system/components/action/#component-api-properties-icon) 属性に設定します。追加のオプションを確認するには、[Calcite icons](https://developers.arcgis.com/calcite-design-system/icons/)を表示してください。
    - action-bar を展開した際に表示される[`テキスト`](https://developers.arcgis.com/calcite-design-system/components/action/#component-api-properties-text)属性を設定します。
    - `data-action-id` のグローバル属性を設定します。この属性は、以降のステップでアクションを操作する際に使用されます。

``` HTML
  <calcite-shell content-behind>

    <calcite-navigation slot="header">
      <calcite-navigation-logo id="header-title" heading-level="1" slot="logo">
        <!-- Dynamically populated -->
      </calcite-navigation-logo>
    </calcite-navigation>

    <calcite-shell-panel slot="panel-start" display-mode="float-content">

      <!-- 追加開始 -->
      <calcite-action-bar slot="action-bar">
        <calcite-action data-action-id="layers" icon="layers" text="Layers"></calcite-action>
        <calcite-action data-action-id="basemaps" icon="basemap" text="Basemaps"></calcite-action>
        <calcite-action data-action-id="legend" icon="legend" text="Legend"></calcite-action>
        <calcite-action data-action-id="bookmarks" icon="bookmark" text="Bookmarks"></calcite-action>
        <calcite-action data-action-id="print" icon="print" text="Print"></calcite-action>
        <calcite-action data-action-id="information" icon="information" text="Information"></calcite-action>
      </calcite-action-bar>
      <!-- 追加終了 -->

    </calcite-shell-panel>
```
1. アクション バーの下に、[ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/components/) コンポーネント（[`arcgis-layer-list`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-layer-list/)、[`arcgis-basemap-gallery`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-basemap-gallery/)、[`arcgis-legend`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-legend/)、[`arcgis-bookmarks`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-bookmarks/)、[`arcgis-print`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-print/) を含む）用のコンテナを含む [`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) コンポーネントを追加します。
    - パネルのタイトルの [`heading`](https://developers.arcgis.com/calcite-design-system/components/panel/#component-api-properties-heading) 属性を設定します。
    - パネルの高さを [`height`](https://developers.arcgis.com/calcite-design-system/components/panel/#component-api-properties-height) 属性を使用して設定します。
    - 対応するアクションをクリックした際に削除される`closed` 属性を設定します。
    - パネルのグローバル属性 `data-panel-id` を設定します。この属性は、後の手順でパネルを操作する際に使用されます。

``` HTML
      </calcite-action-bar>
      
      <!-- 追加開始 -->
      <!-- Map-specific panels (each one provides a div for ArcGIS Maps SDK for JavaScript widgets) -->
      <calcite-panel heading="Layers" height-scale="l" data-panel-id="layers" closed closable>
        <arcgis-layer-list drag-enabled reference-element="mapEl" visibility-appearance="checkbox"></arcgis-layer-list>
      </calcite-panel>
      <calcite-panel heading="Basemaps" height-scale="l" data-panel-id="basemaps" closed closable>
        <arcgis-basemap-gallery reference-element="mapEl"></arcgis-basemap-gallery>
      </calcite-panel>
      <calcite-panel heading="Legend" height-scale="l" data-panel-id="legend" closed closable>
        <arcgis-legend legend-style="classic" reference-element="mapEl"></arcgis-legend>
      </calcite-panel>
      <calcite-panel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks" closed closable>
        <arcgis-bookmarks editing-enabled="false" reference-element="mapEl"></arcgis-bookmarks>
      </calcite-panel>
      <calcite-panel heading="Print" height-scale="l" data-panel-id="print" closed closable>
        <arcgis-print allowed-formats="all" allowed-layouts="all" include-default-templates="false"
          reference-element="mapEl"></arcgis-print>
      </calcite-panel>
      <!-- 追加終了 -->

    </calcite-shell-panel>
```

1. 別の [`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) のコンポーネントを追加します。
2. `div` 要素を作成し、その中にグローバル属性 `id` が指定されている `img` 要素と `div` 要素の子要素を追加します。これらの要素には、Web マップのサムネイルと説明が表示されます。
3. [`calcite-label`](https://developers.arcgis.com/calcite-design-system/components/label/) コンポーネントを追加し、[`layout`](https://developers.arcgis.com/calcite-design-system/components/label/#component-api-properties-layout) 属性を `inline` に設定します。
4. ラベルの子要素として [`calcite-rating`](https://developers.arcgis.com/calcite-design-system/components/rating/) コンポーネントを追加し、[`read-only`](https://developers.arcgis.com/calcite-design-system/components/rating/#component-api-properties-readOnly) 属性を設定します。このコンポーネントには、Web マップの平均評価が取り込まれます。

``` HTML
      <calcite-panel heading="Print" height-scale="l" data-panel-id="print" closed closable>
        <arcgis-print allowed-formats="all" allowed-layouts="all" include-default-templates="false"
          reference-element="mapEl"></arcgis-print>
      </calcite-panel>

      <!-- 追加開始 -->
      <!-- Info panel (populates with info from the web map) -->
      <calcite-panel heading="Details" data-panel-id="information" closed closable>
        <div id="info-content">
          <img id="item-thumbnail" alt="webmap thumbnail" />
          <div id="item-description">
            <!-- Dynamically populated -->
          </div>
          <calcite-label layout="inline">
            <b>Rating:</b>
            <calcite-rating id="item-rating" read-only>
              <!-- Dynamically populated -->
            </calcite-rating>
          </calcite-label>
        </div>
      </calcite-panel>
      <!-- 追加終了 -->

    </calcite-shell-panel>

    <arcgis-map id="mapEl" item-id="210c5b77056846808c7a5ce93920be81">
      <arcgis-zoom position="top-right"></arcgis-zoom>
    </arcgis-map>
```

### 内容を追加する

これまで Calcite コンポーネントをアプリケーションに追加してきました。
次に、ナビゲーション ロゴの [`heading`](https://developers.arcgis.com/calcite-design-system/components/navigation-logo/#api-reference-properties-heading) と情報パネルに Web マップの内容を反映させます。

1. 既存の JavaScript コードの `<script>` 要素の中に、[`arcgisViewReadyChange`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/#events) イベントを使用して、マップが非同期で読み込みが完了するのを待ちます。
2. マップが読み込まれると、[`querySelector()` メソッド](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)を使用して DOM にアクセスし、コンテンツを格納します。
3. 次に、[`arcgis-map`](https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-map/) の左側に [`padding`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#padding) を追加し、[ArcGIS Maps SDK for JavaScript コンポーネント](https://developers.arcgis.com/javascript/latest/components/)のためのスペースを確保します。

``` HTML
<script type="module">

  <!-- 追加開始 -->
    const mapEl = document.getElementById("mapEl");

    mapEl.addEventListener("arcgisViewReadyChange", (evt) => {
      const { title, description, thumbnailUrl, avgRating } = mapEl.map.portalItem;
      document.querySelector("#header-title").heading = title;
      document.querySelector("#item-description").innerHTML = description;
      document.querySelector("#item-thumbnail").src = thumbnailUrl;
      document.querySelector("#item-rating").value = avgRating;

      mapEl.view.padding = {
        left: 49
      };
  <!-- 追加終了 -->

    });
</script>
```

### コンポーネントを操作する

次のステップは、対応する [`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) コンポーネントをクリックした際に、[ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/components/) コンポーネントを含む [`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) コンポーネントを開くことです。

1. `arcgisViewReadyChange` イベント内で、現在開かれているマップ コンポーネントの名前を格納するための変数を初期化します。

2. アクションがクリックされた際に実行される関数を作成します。この関数は、アクティブなパネルを閉じ、クリックされたアクションに対応するパネルを開きます。ユーザーがアクティブなアクションをクリックした場合、対応するパネルが閉じられ、開いているパネルはなくなります。

このステップでは、 [属性セレクター](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) を使用して、上記で追加した [データ属性](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) を使用してアクションとパネル要素にアクセスします。データ属性の値は、対応するマップ コンポーネントの名前です。

1. 上記の関数をコールバックとして使用して、[`calcite-action-bar`](https://developers.arcgis.com/calcite-design-system/components/action-bar/) にクリック イベント リスナーを作成します。

``` JavaScript
      mapEl.view.padding = {
        left: 49
      };

      // 追加開始
      let activeWidget;

      const handleActionBarClick = ({ target }) => {
        if (target.tagName !== "CALCITE-ACTION") {
          return;
        }

        if (activeWidget) {
          document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
          document.querySelector(`[data-panel-id=${activeWidget}]`).closed = true;
        }

        const nextWidget = target.dataset.actionId;
        if (nextWidget !== activeWidget) {
          document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
          document.querySelector(`[data-panel-id=${nextWidget}]`).closed = false;
          activeWidget = nextWidget;
          document.querySelector(`[data-panel-id=${nextWidget}]`).setFocus();
        } else {
          activeWidget = null;
        }
      };
      // Panel interaction
      const panelEls = document.querySelectorAll("calcite-panel");
      for (let i = 0; i < panelEls.length; i++) {
      panelEls[i].addEventListener("calcitePanelClose", () => {
        document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
        document.querySelector(`[data-action-id=${activeWidget}]`).setFocus();
        activeWidget = null;
      });
      }
      // 追加終了

    });
</script>
```

### マップを動的にサイズ変更する

コンポーネントが操作可能になったため、[`calcite-action-bar`](https://developers.arcgis.com/calcite-design-system/components/action-bar/) が展開または折りたたまれる際に、マップが自動的に調整される必要があります。

1. `arcgisViewReadyChange` イベント内で、[`calciteActionBarToggle`](https://developers.arcgis.com/calcite-design-system/components/action-bar/#component-api-events-calciteActionBarToggle) にイベント リスナーを追加します。このリスナーは、ビューが展開されたり折りたたまれたりした際に、それぞれに応じて padding を追加または削除します。

``` JavaScript
        activeWidget = null;
      });
      }

      // 追加開始
      document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

      let actionBarExpanded = false;

      document.addEventListener("calciteActionBarToggle", event => {
        actionBarExpanded = !actionBarExpanded;
        mapEl.view.padding = {
          left: actionBarExpanded ? 135 : 49
        };
      });
      // 追加終了
```

### loader コンポーネントを追加する

ここまでで、アプリケーション内のすべての要素が操作可能になりました。Calcite コンポーネントを使用して、マップ コンポーネントの表示と非表示を切り替えることができます。ただし、アプリケーションの読み込みに数秒かかりますので、ユーザーにその旨を通知する必要があります。

1. `<body>` 要素内に、コンポーネントを表示するための [`calcite-loader`](https://developers.arcgis.com/calcite-design-system/components/loader/) を追加します。
2. [`calcite-shell`](https://developers.arcgis.com/calcite-design-system/components/shell/) に `hiddun` グローバル属性を追加します。

``` HTML
  <body>
    <!-- 追加開始 -->
    <calcite-loader></calcite-loader>
    <!-- 追加終了 -->
    <!-- 変更開始 -->
    <calcite-shell content-behind hidden>
    <!-- 変更終了 -->

      <calcite-navigation slot="header">
        <calcite-navigation-logo id="header-title" heading-level="1" slot="logo">
        <!--dynamically populated-->
        </calcite-navigation-logo>
      </calcite-navigation>
```

1. `arcgisViewReadyChange` イベント内において、JavaScript コードの残りの部分の下で、[`calcite-loader`](https://developers.arcgis.com/calcite-design-system/components/loader/) コンポーネントの `hidden` プロパティを `true` に設定して非表示にし、[`calcite-shell`](https://developers.arcgis.com/calcite-design-system/components/shell/) コンポーネントの `hidden` プロパティを `false` に設定して表示します。

``` JavaScript
      document.querySelector("calcite-shell").hidden = false;
      document.querySelector("calcite-loader").hidden = true;
```

### スタイルを追加する

1. `<style>` 要素に、ユーザー インターフェースを整理するための追加の CSS を追加します。

``` JavaScript
  #mapEl {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
  }

<!-- 追加開始 -->
  body {
    display: flex;
  }

  calcite-loader {
    align-self: center;
    justify-self: center;
  }

  #info-content {
    padding: 0.75rem;
  }

  calcite-rating {
    margin-top: 0.25rem;
  }
  <!-- 追加終了 -->


</style>
```

### アプリを実行する

**CodePen** でコードを実行してアプリケーションを表示します。アプリケーションの読み込みが完了すると、マップが表示され、Web マップのタイトルと [`calcite-action-bar`](https://developers.arcgis.com/calcite-design-system/components/action-bar/) が表示されます。[`calcite-action`](https://developers.arcgis.com/calcite-design-system/components/action/) コンポーネントをクリックすると、 [ArcGIS Maps SDK for JavaScript Map コンポーネント](https://developers.arcgis.com/javascript/latest/components/)が含まれている[`calcite-panel`](https://developers.arcgis.com/calcite-design-system/components/panel/) コンポーネントが開閉します。




