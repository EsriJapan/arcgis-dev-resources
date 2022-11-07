+++
title = "フレームワークの統合"
description = "Calcite Components は、JavaScriptフレームワークやビルドツールと簡単に統合でき、サンプルレポが提供されているので、使い始めるのに便利です。"
Weight=5
aliases = ["/frameworks/"]
+++

出典：Calcite Design System (Beta) - [Framework integration](https://developers.arcgis.com/calcite-design-system/frameworks/)

`Calcite Components` は、JavaScript フレームワークやビルドツールと簡単に統合でき、始めるのに役立つ[サンプル](https://github.com/Esri/calcite-components-examples)が提供されています。ここでは、フレームワークごとの解説をしています。特定のフレームワークやビルドツールを選んで使った経験がない方は、[npm を使って始めてみましょう](https://developers.arcgis.com/calcite-design-system/get-started/#use-the-npm-package)。

## TypeScript

Stencil はすべてのコンポーネントに対して、完全な型付けを提供します。TypeScript がこれらのコンポーネントを認識できるようにするには、ライブラリをインポートするだけです。

```JavaScript
import "@esri/calcite-components";
```

これにより、コンポーネント名/プロパティのオートコンプリート、および追加の HTML 要素タイプが提供されます。

```JavaScript
// 作成された要素は、自動で正しい型を持つようになります。
const loader = document.createElement("calcite-loader");
document.body.appendChild(loader);
loader.active = true;

// また、生成された型を使って自分で要素を持たせることもできます。
// 型名は常に HTML{CamelCaseComponentName}Element としてフォーマットされます。
const loader = document.querySelector(".my-loader-element") as HTMLCalciteLoaderElement;
loader.active = true;
```

## Calcite Components React

`Calcite Components React` は、Web コンポーネントをラップする React コンポーネントのセットです。React は合成イベントシステムを使用しているため、Web コンポーネントから発行されるカスタムイベントは React の JSX では動作しません。例えば、[calcite-slider](https://developers.arcgis.com/calcite-design-system/components/slider/) が変化したときに値を更新するには、標準の Web コンポーネントを使用して、要素に`ref`を保存し、イベントリスナーを追加する必要があります。

```JavaScript
const sliderEl = useRef(null);
const [sliderValue, setSliderValue] = useState(50);

useEffect(() => {
  sliderEl.current.addEventListener("calciteSliderUpdate", event => setSliderValue(event.target.value));
}, [sliderEl]);
```

[esri/calcite-components-react](https://www.npmjs.com/package/@esri/calcite-components-react) を使用すると、イベントが接続されるようになります。

```JavaScript
const [sliderValue, setSliderValue] = useState(50);
<CalciteSlider onCalciteSliderUpdate={event => setSliderValue(event.target.value)} />;
```

TypeScript を使用している場合、イベントリスナーやプロップなどの型安全性も向上します。

### 使い方

まず、npm で [esri/calcite-components-react](https://www.npmjs.com/package/@esri/calcite-components-react) をインストールします。

```
npm install @esri/calcite-components-react
```

このパッケージには、Web コンポーネントライブラリの互換バージョンが依存関係として含まれているので、[@esri/calcite-components](https://www.npmjs.com/package/@esri/calcite-components) を個別にインストールする必要はありません。次に、[npm で使い始める手順](https://developers.arcgis.com/calcite-design-system/get-started/#choose-a-build)に従います。最後に、アプリケーションで使用したい Calcite の React コンポーネントをインポートします。

```JavaScript
import { CalciteButton, CalciteIcon, CalciteSlider } from "@esri/calcite-components-react";
```

完全なセットアップについては、[React サンプル](https://github.com/Esri/calcite-components-examples/tree/master/react)をご覧ください。

### その他

#### boolean 属性
Calcite Design System React コンポーネントに `boolean` 属性を渡すと、値が文字列に変換されます。この問題については、[stencil issues](https://github.com/ionic-team/stencil-ds-output-targets/issues/123)があります。実際には、`disabled={false}` は `disabled={"false"}` となり、真偽不明になってしまいます。falsy boolean 属性値に対する回避策としては

1. 属性を設定しない
2. falseの代わりに `undefined` を使用する

例えば、`CalcitePickListItem` を選択します。

```JavaScript
const selected = false;
<CalcitePickListItem key={0} label="Fried Egg Jellyfish" value="jellyfish" selected={selected}></CalcitePickListItem>
```

上記の通り selected を undefined に設定することでいずれの項目も選択されることはなくなります。

```JavaScript
const selected = false;
<CalcitePickListItem key={1} label="Satanic Leaf-Tailed Gecko" value="gecko"></CalcitePickListItem>
<CalcitePickListItem key={2} label="Red-Lipped Batfish" value="batfish" selected={undefined}></CalcitePickListItem>
<CalcitePickListItem key={3} label="Star-Nosed Mole" value="mole" selected={selected ? true : undefined}></CalcitePickListItem>
```

#### Jestの設定

[Jest](https://jestjs.io/docs/configuration)で設定する場合は、Jest の設定ファイルの `transformIgnorePatterns` に `@esri/calcite-components-react` を追加する必要があります。

```JSON
"transformIgnorePatterns": [
    "/node_modules/(?!(@esri/calcite-components-react))"
 ]
```
