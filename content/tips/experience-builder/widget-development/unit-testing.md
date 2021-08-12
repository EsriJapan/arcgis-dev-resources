+++
title = "単体テスト"
description = "単体テストの方法について紹介します。"
weight = 12
aliases = ["/unit-testing/"]
+++


出典：ArcGIS Experience Builder - Guide - [Unit Testing](https://developers.arcgis.com/experience-builder/guide/unit-testing/)


## 単体テストの一般原則
良い単体テストを行うためには、テスト可能なコードを書くことが重要です。シンプルな設計原則を適用することが助けになります

- 適切な命名規則を使用し、コードにはコメントを付けましょう（「どのように」ではなく「なぜ」）。コメントは、名前やデザインの悪さの代用にはならないことを覚えておいてください。
- DRY：Don't Repeat Yourself（同じことを繰り返さない） - コードの重複を避ける。
- 単一責任：各オブジェクト/機能は、単一のタスクに集中しなければならない。
- 同じコンポーネント内では、1つの抽象度にとどめる。例えば、同じメソッドの中で、ビジネスロジックと低レベルの技術的詳細を混在させないようにします。
- コンポーネント間の依存関係の最小化：コンポーネント間の情報のカプセル化と交換を少なくする。
- ハードコーディングではなく、コンフィギュラビリティをサポートする。そうすることで、テスト時に全く同じ環境を再現する必要がなくなります。

### ArcGIS Experience Builder での単体テスト
単体テストのファイルは .test.ts(x) または .spec.ts(x) で終わり、tests フォルダに置く必要があります。
単体テストは、[行動駆動型開発（BDD）](https://en.wikipedia.org/wiki/Behavior-driven_development)スタイルで記述する必要があります。たとえば、以下のようになります。

```tsx
describe('calculator', function() {
  // Describes a module with nested "describe" functions
  describe('add', function() {
    // Specify the expected behavior
    it('should add 2 numbers', function() {
      // Use assertion functions to test the expected behavior
      expect(foo).toBeTruthy();
      expect(foo).toBe('bar');
    })
  })
})
```

- Experience Builder は、テストフレームワークとして [Jest](https://jestjs.io/) を使用しています。
- Experience Builder では、React コンポーネントのテストに [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro) を使用しています。

### Experience Builderで単位テストを書く
一般的には、以下の3種類のコードに対して単位テストを書く必要があります。

- TypeScript のネイティブコード：この種のコードでは、`Jest` のみを使用することができるかもしれません。ほとんどの場合、単体テストを書きやすくするために、いくつかのコンポーネントをモックする必要があります。
- ネイティブな React コンポーネント：この種のコードでは、`Jest` と `@testing-library/react` を使用する必要があります。テストフレームワークとしてJestを使用し、テスティングライブラリを使用してReactコンポーネントをレンダリングし、そのレンダリング結果を確認します。
- Experience Builder ウィジェット：エクスペリエンス・ビルダー・ウィジェットには、`jimu-for-test` からエクスポートされた `wrapWidget` と `wrapWidgetSetting` を使用する必要があります。

上記のような種類のコードに対して、`jimu-for-test` はテストを簡単に書くためのいくつかのヘルパーユーティリティー関数を提供します。例えば、以下のようなものです。

- 状態の初期化：`getInitState()` と `getDefaultAppConfig()` を使って、このようにストアを初期化することができます。

```tsx
  getAppStore().dispatch(appActions.updateStoreState(getInitState().merge({
    appConfig: getDefaultAppConfig().merge({
      widgets: {
        w1: {
          label: 'W 1'
        }
      }
    })
  })))
```

- フィーチャーサービスをモックするには、次のようにモックデータを使って `mockFeatureLayer` を呼び出します。

```tsx
mockFeatureLayer(mockData)
```
フィーチャ レイヤーをモックアップした後は、単体テストのリクエストがネットワークリクエストを行わないため、テストがより安定して高速になります。

- React コンポーネントをレンダリングするには、次のようにしてレンダリングします。

```tsx
const {queryByText} = render(<Component/>)
const {queryByText} = withStoreRender(<Component/>)
```

- そして、レンダリング結果を次のようにチェックします。

```tsx
expect(queryByText('the text')).toBeInTheDocument();
```

- ウィジェットをレンダリングするには、次のようにします。

```tsx
// Get the widget render, you can pass in store/theme/locale optionally
const render = widgetRender();
// Wrap the widget to inject some props into widget component
const Widget = wrapWidget(_Widget, {config: {}});
// Then, you can render the widget like a native react component
const {queryByText} = render(<Widget/>)
```

### ArcGIS API for JavaScript を使用するモジュールのテスト
コンポーネントで使用したモジュールをモックする必要があります。loadArcGISJSAPIModule でモジュールをロードした場合は、以下のようにモックを作成します。

```tsx
jest.mock('jimu-core', () => {
  return {
    ...jest.requireActual('jimu-core'),
    loadArcGISJSAPIModule: jest.fn().mockImplementation(moduleId => {
      let module
      if(moduleId === 'esri/layers/FeatureLayer'){
        module = jest.fn().mockImplementation(() => {
          return {
            queryFeatureCount: () => Promise.resolve(5)
          }
        })
      }
      return Promise.resolve(module)
    })
  }
})
```

モジュールをインポートすると、`jade.mock()` が使えるようになります。

### 単体テストの実行
`client` フォルダで `npm test` を実行します。

単体テストの例は [show-unit-tests サンプル](https://developers.arcgis.com/experience-builder/sample-code/widgets/show-unit-tests/)をご覧ください。