+++
title = "Jimu"
weight = 9
aliases = ["/jimu/"]
+++

出典：ArcGIS Experience Builder - Guide - [Jimu](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/)

## Jimu
Jimuは、ArcGIS Experience Builder の根幹となる JavaScript フレームワークです。Experience Builder を拡張可能かつカスタマイズ可能にする基盤です。Jimu は以下の機能を提供します。

- 拡張性フレームワーク：カスタム コンポーネントを作成できるアーキテクチャー
- 構成システム：ノーコードでエクスペリエンスをカスタマイズすることが可能
- パッケージ ライブラリー：さまざまな開発ニーズに対応するライブラリーのコレクション
- 開発ツール：アプリケーション構築のためのユーティリティーとパターン

Jimuはモジュール性を重視して設計されており、必要なものだけを使用して、アプリケーション間で一貫性を維持できます。

Jimu を使って次のものを作成できます。

- Experience Builder の機能を拡張するウィジェット
- Experience Builder の機能を強化するエクステンション
- エクスペリエンスに適用できるテーマ
- エクスペリエンスの動作や外観をカスタマイズする構成


## Jimu のアーキテクチャー
Jimu は以下の主要な原則に基づくモジュール型アーキテクチャー パターンを採用しています：

### モジュール設計
Jimu は、機能ごとに分けられたパッケージで構成されるモジュール型アーキテクチャーを採用しています。この設計により、開発者は必要なパッケージのみを使用しながら、アプリケーション間で一貫性を維持できます。

|  **パッケージ**  |  **説明**  |
|-----|-----|
|  [jimu-core](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-core)  |  ユーティリティー、状態管理、データソース、基底クラス  |
|  [jimu-ui](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-ui)  |  コンポーネントとテーマ  |
|  [jimu-arcgis](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-arcgis)  |  ArcGIS機能と地図の統合  |
|  [jimu-for-builder](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-for-builder)  |  ビルダー コンポーネントとユーティリティー  |
|  [jimu-theme](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-theme)  |  テーマ管理とスタイル  |
|  [jimu-layouts](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-layouts)  |  レイアウト管理とコンポーネント  |
|  [jimu-for-test](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-for-test)  |  テスト用ユーティリティー  |
|  [jimu-icons](https://developers.arcgis.com/experience-builder/guide/core-concepts/jimu/#jimu-icons)  |  アイコン管理と SVG  |

### 拡張パターン (Extensibility pattern)
Jimu は、機能を拡張する上で、一貫したパターンを採用しています。カスタム ウィジェットを作成するコード例は次の通りです。
```jsx
// Example: Creating a custom widget
import { type AllWidgetProps } from 'jimu-core'

const Widget = (props: AllWidgetProps<any>) => {
  return (
    <div className="my-widget jimu-widget ">
      <p>My Widget</p>
    </div>
  )
}

export default Widget
```
メッセージ アクション と データ アクション は JavaScript クラスであり、`AbstractDataAction` および `AbstractMessageAction` クラスを継承することが推奨されます。

```jsx
export default class MyDataAction extends AbstractDataAction {}

export default class MyMessageAction extends AbstractMessageAction {}
```

Jimu の拡張機能は JavaScript クラスとして実装されますが、その種類によって異なるインターフェイスを持ちます。それぞれの機能に合わせたインターフェイスを実装することが推奨されます。
```javascript
export default class MyExtension implements extensionSpec.SomeExtensionInterface {}
```

### 構成駆動型 (Configuration-driven)
Jimu アプリケーションは構成駆動型であり、実行時のカスタマイズが可能です。以下はウィジェットの構成ファイルの例です：
```json
{
  "widgets": {
    "my-widget": {
      "label": "My Widget",
      "uri": "widgets/my-widget",
      "config": {
        "title": "Custom Title"
      }
    }
  }
}
```

## コア パッケージ (Core packages)
Jimu は、開発ニーズに応じてパッケージとして構成されています。以下は各パッケージの概要です。

### jimu-core
[`jimu-core`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/) パッケージによって、エクスペリエンス構築のためのユーティリティーと基底クラスを利用できます。

| **コンポーネント** | **説明** |
|----|----|
| 基底クラスとインターフェイス | `Message`、`MessageAction`、`DataAction`、`BaseExtension`、`DataSource` など |
| マネージャー | `WidgetManager`、`MessageManager`、`DataActionManager`、`ExtensionManager`、`DataSourceManager`、`SessionManager` など |
| Redux アクション | 状態管理のための `appActions` など |
| ユーティリティー関数 | `utils`、`urlUtils`、`portalUrlUtils`、`appConfigUtils`、`dataSourceUtils`、`geometryUtils` など |
| コンポーネント | `DataSourceComponent`、`ExpressionResolverComponent` など |
| モジュール ローダー | `moduleLoader`、`loadArcGISJSAPIModules`|

### jimu-ui
[`jimu-ui`](https://developers.arcgis.com/experience-builder/api-reference/jimu-ui/) パッケージによって、エクスペリエンス構築のためのすべての UI コンポーネントを利用できます。スタイリングには [emotion-js](https://emotion.sh/docs/introduction) を使用し、コンポーネントは `index`、`basic`、`advanced` のいずれかのカテゴリーに分類されます。

| コンポーネント | 説明 |
|----|----|
| index | `Button`、`TextInput`、`Modal` などの一般的な UI コンポーネント |
| Basic | `DatePicker`、`ColorPicker` などの特定機能に特化したコンポーネント |
| Advanced | `ExpressionBuilder`、`DataSourceSelector` など Experience Builder 特有の複雑なコンポーネント |

UI コンポーネントを作成する推奨方法は styled component を使用することです。詳細は `jimu-ui` パッケージのドキュメントに記載されています。

以下は UI コンポーネントの使用例です：
```jsx
import { Button, TextInput, Modal } from 'jimu-ui';
import { css } from 'jimu-core';
import { React } from 'jimu-core';

// Example: Using UI components with theming
const widgetStyle = css`
  background: var(--background-color);
  color: var(--text-color);
  padding: 1rem;
`;

export default function MyWidget() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div css={widgetStyle}>
      <TextInput placeholder="Enter data..." />
      <Button type="primary" onClick={() => setIsModalOpen(true)}>Submit</Button>
      <Modal isOpen={isModalOpen}>
        <div>Modal content</div>
      </Modal>
    </div>
  );
}
```

### jimu-arcgis
[`jimu-arcgis`](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/) パッケージには、[ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) を扱うためのコンポーネント、インターフェイス、クラス、プロパティ、メソッドが含まれています。

`jimu-arcgis` パッケージに含まれるクラスとコンポーネントは以下の通りです。

| コンポーネント | 説明 |
|----|----|
| [JimuMapView](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapView/) | MapView や SceneView インスタンスにアクセスするためのクラス |
| [JimuMapViewComponent](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapViewComponent/) | マップ ウィジェットとビューを統合するためのコンポーネント |
| [JimuLayerView](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuLayerView/) | レイヤー ビューを扱うためのクラス |
| [JimuLayerViewComponent](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuLayerViewComponent/) | レイヤー ビューを操作するためのコンポーネント |

以下にマップ コンポーネントの使用例を示します。
```jsx
import { JimuMapViewComponent } from 'jimu-arcgis';

// Example: Map integration
<JimuMapViewComponent
  useMapWidgetId={useMapWidgetId}
  onActiveViewChange={(jmv) => {
    // Handle map view changes
    jmv.view.when(() => {
      console.log('Map view ready');
    });
  }}
/>
```

### jimu-for-builder
[`jimu-for-builder`](https://developers.arcgis.com/experience-builder/api-reference/jimu-for-builder/) パッケージは、ウィジェット設定ページの開発をサポートするために設計されています。設定ページは、エクスペリエンス作成者がウィジェット構成を追加するビルダー内のセクションです。

このパッケージの主なコンポーネントは、`builderAppSync`、`appBuilderSync`、`WidgetSettingManager` です。Redux ストアを拡張し、`appStateInBuilder` や `builder` などのビルダー状態を追加するにはこのパッケージを使用します。

### jimu-theme
[`jimu-theme`](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/) パッケージによって、エクスペリエンス構築のためのテーマ管理とスタイルを利用できます。このパッケージには以下が含まれます。

- styled component を作成するメソッドである `styled`
- 高階コンポーネントを使って、コンポーネントにテーマ情報 (theme prop) を付与するための仕組みである `withTheme`
- `theme` にアクセスするための React フックとなる `useTheme`
- `ThemeVariable`、`ThemeOptions` などのテーマに関連したインターフェイス

| コンポーネント | 説明 |
|----|----|
| [styled](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/styled/) | styled componet を作成するメソッド |
| [useTheme](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/useTheme/) | `theme` 変数にアクセスする React フック |
| [withTheme](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/withTheme/) | コンポーネントにテーマ情報を付与するメソッド |
| [ThemeVariable](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/ThemeVariable/) | テーマ変数のインターフェイス |
| [RawThemeOptions](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/RawThemeOptions/) | JSON 形式のテーマ オプションのインターフェイス (theme フォルダ内の `variables.json`) |

### jimu-layouts
jimu-layouts パッケージによって、レイアウト管理とコンポーネントの利用が可能となります。2 つのエントリー ポイントがあります。

- アプリが実行時に開かれた場合の軽量エントリー ポイントである `layout-runtime`。レイアウト ツリー検索機能を提供する `selectors` や、ウィジェット レイアウト機能のための `LayoutEntry` コンポーネントをエクスポートします。
- アプリがビルダーで開かれた場合のエントリー ポイントである `layout-entry`。
- レイアウト ツリー操作のためのユーティリティーである `searchUtils`。

### jimu-data-sources
`jimu-data-sources` パッケージによって、データ ソースを実装することができます。ただ、ほとんどのケースではこのパッケージを直接使うより、`jimu-core` からエクスポートされる `DataSourceComponent` を使用することが推奨されます。

### jimu-for-test
[`jimu-for-test`](https://developers.arcgis.com/experience-builder/api-reference/jimu-for-test/) パッケージは、テスト用のユーティリティーを提供します。ユーティリティー関数には、`wrapWidget`、`withThemeRender`、`withIntlRender`、`withStoreRender`、`mockService`、`mockItem`、`initGlobal`、`getInitState`、`widgetRender` があります。

以下はテスト ユーティリティーの使用例として示した、チェックボックス コンポーネントをテストするコードです。
```jsx
import * as React from 'react'
import { render } from '@testing-library/react'
import { Checkbox } from 'jimu-ui'

describe('checkbox component test', () => {
  it('test mount', () => {
    const { container } = render(<Checkbox />)
    expect(container.firstChild).not.toBeNull()
  })

  it('test default jimu class name', () => {
    const { container } = render(<Checkbox />)
    expect(container.querySelector('.jimu-checkbox')).toBeTruthy()
  })

  it('test "checked" attribute', () => {
    const { container } = render(<Checkbox checked />)
    expect(container.querySelector('.jimu-checked')).toBeTruthy()
  })

  it('test "indeterminate" attribute', () => {
    const { container } = render(<Checkbox indeterminate />)
    expect(container.querySelector('.indeterminate')).toBeTruthy()
  })

  it('test "disabled" attribute', () => {
    const { container } = render(<Checkbox disabled />)
    expect(container.querySelector('.jimu-disabled')).toBeTruthy()
  })
})
```

テスト用ユーティリティーの別の使用例として、ボタン コンポーネントをテストするコードを示します。この例は次のファイルでも確認することができます：`<Experience Builder Developer Edition のインストール パス>/client/dist/widgets/common/button/tests/button.test.tsx` 

```jsx
import { React, Immutable, getAppStore, appActions } from 'jimu-core'
import ButtonWidget from '../src/runtime/widget'
import { wrapWidget, widgetRender, getInitState, getDefaultAppConfig } from 'jimu-for-test'
import '@testing-library/jest-dom'
getAppStore().dispatch(appActions.updateStoreState(getInitState().merge({ appConfig: getDefaultAppConfig() })))

const render = widgetRender(false)
const Widget = wrapWidget(ButtonWidget)
describe('button widget test', function () {
  describe('default config', function () {
    const config = Immutable({
      functionConfig: {
        text: 'Please configure link',
        toolTip: '',
        linkParam: {
        }
      },
      styleConfig: {
        themeStyle: {
          quickStyleType: 'default'
        }
      }
    })

    it('button widget should be render', () => {
      const { queryBySelector } = render(<Widget config={config}/>)
      expect(queryBySelector('.widget-button-link')).not.toBeNull()
    })
  })

  describe('test value config', function () {
    const config = Immutable({
      functionConfig: {
        text: 'textTest',
        toolTip: 'testToolTip',
        linkParam: {
          value: 'detail-page',
          linkType: 'PAGE'
        }
      },
      styleConfig: {
        themeStyle: {
          quickStyleType: 'default'
        }
      }
    })

    it('button widget should be render', () => {
      const renderResult = render(<Widget config={config}/>)

      expect(renderResult.queryBySelector('.widget-button-link')).toBeInTheDocument()
      expect(renderResult.queryByText('textTest')).toBeInTheDocument() //text ok
      expect(renderResult.queryByTitle('testToolTip')).toBeInTheDocument() // toolTip ok
      // renderResult.queryBySelector('.widget-button-link').getAttribute('href'); // link ok
    })
  })
})
```

{{% notice note %}}

jimu のパッケージについての詳細は、[API Reference](https://developers.arcgis.com/experience-builder/api-reference/) をご確認ください。

{{% /notice %}}