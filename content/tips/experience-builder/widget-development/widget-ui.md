+++
title = "ウィジェット UI の作成"
description = "ウィジェット UI の作成方法について紹介します。"
weight = 8
aliases = ["/widget-ui/"]
+++


出典：ArcGIS Experience Builder - Guide - [Create UI for widget](https://developers.arcgis.com/experience-builder/guide/widget-ui/)


Experience Builder のベースとなる `Widget` クラスは、React のコンポーネント サブクラスから拡張されています。[PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) から拡張されており、`render()` と呼ばれる関数を提供しています。UI の作業のほとんどは、この関数の内部で行われることが予想されます。


## JSX の記述
UI テンプレートの作成に使用される React の構文は [JSX](https://react.dev/learn/writing-markup-with-jsx) と呼ばれています。これは HTML を書くのと非常に似ていますが、JavaScript の機能を完全に組み込んでいます。

以下は、**クラス コンポーネント**を使ってウィジェットの UI に基本的な HTML 要素を追加する簡単な例です。

```jsx
// widget.tsx 内:
import { React, AllWidgetProps } from 'jimu-core';

export default class Widget extends React.PureComponent<AllWidgetProps<{}>, any>{
  render() {
    return <div className="myWidget">
      <p>This is a sample widget</p>
      <button type="button" style={{background: 'orange'}}>I'm a button</button>
    </div>;
  }
}
```

{{< callout type="info" >}}

[PureComponent](https://react.dev/reference/react/PureComponent) クラスは、`renderer()` という関数を提供しており、UI のほとんどの処理はこの関数内で実装されます。

{{< /callout >}}


### 関数コンポーネント
クラス コンポーネントのほかに、**関数コンポーネント**を使ってウィジェットを作成することもできます。

以下は、関数コンポーネントとして書かれた同等の例です。

```jsx
// widget.tsx 内:
import { React, AllWidgetProps } from 'jimu-core';

export default function Widget(props: AllWidgetProps<{}>) {
  return (
    <div className="myWidget">
      <p>This is a sample widget</p>
      <button type="button" style={{ background: 'orange' }}>I'm a button</button>
    </div>
  );
}
```

関数コンポーネントでは、`useState` や `useEffect` などの React [フック](https://ja.react.dev/reference/react/hooks)を使って状態の管理や副作用の処理ができるため、非常に強力で柔軟性があります。

Output 例:
![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetUIJSX.png)


## Jimu UI ライブラリーの使用
Jimu フレームワークは、開発者がウィジェット開発で使用するコンポーネントの UI ライブラリーを提供しています。

- __基本的な UI コンポーネント__：button、dropdown、inputs、icon、nav、modal、paper など
- __高度な UI コンポーネント__：date picker、resource selector など

Storybook サイト（[`https://developers.arcgis.com/experience-builder/storybook`](https://developers.arcgis.com/experience-builder/storybook)）では、よく使われるコンポーネントやアイコンの多くをプレビューできます。

詳細は Experience Builder の [Storybook](https://developers.arcgis.com/experience-builder/guide/storybook) を参照してください。

Jimu UI は Experience Builder の公式 UI ライブラリーであり、このライブラリーのコンポーネントを考慮して UI 開発を利用することを強くお勧めします。その理由は以下の通りです。

- UI/UX の一貫性：ウィジェットの全体的な外観と操作感、それを使って作成されたアプリは、一貫したパターンに従います。
- テーマ性：コンポーネントのスタイルは設定可能でテーマ性があるため、さまざまなテーマに対応したウィジェットを簡単に作ることができます。
- Experience Builder および ArcGIS とよりスムーズに連携できます。


### コンポーネントのインポート
基本的な UI コンポーネントは「jimu-ui」から直接インポートでき、高度な UI コンポーネントはパスを使用して個別にインポートする必要があります。

```jsx
import { Button, Icon, Paper, TextInput } from 'jimu-ui'; // 基本
import { DatePicker } from 'jimu-ui/date-picker'; // 高度
```


### クイック サンプル
ここでは、"primary" スタイルの Button コンポーネントとスター アイコンをウィジェットに追加しています。

```jsx
// widget.tsx 内:
import { React, AllWidgetProps } from 'jimu-core';
import { Button, Icon } from 'jimu-ui'; // import components
import { StarFilled } from 'jimu-icons/filled/application/star'

// Icon コンポーネントを使用して SVG アイコンを作成:
const iconNode = <StarFilled />;

export default class Widget extends React.PureComponent<AllWidgetProps, any>{
  render(){
    // ウィジェットにアイコンを含む Button コンポーネントを追加:
    return <Button type="primary">{iconNode} primary button</Button>;
  }
}
```

Output 例:
![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetUIButton.png)


### Paper コンポーネントをウィジェット コンテナーとして使用
ウィジェットのスタイルを一貫性のあるものに保つためには、ウィジェットのコンテナーに Paper コンポーネントの使用が推奨されます。

```jsx
const Widget = () => {
  return <Paper variant="flat" shape="none" className="jimu-widget widget-xxx">...</Paper>
}
```

{{< callout >}}

Paper コンポーネントはデフォルトで角が丸くなっています。`shape="none"` を設定するとその角が取り除かれ、ウィジェットの角のスタイルがレイアウトのデザインに追従するようになります。<br>
Paper 上に直接表示されるテキストについては、Paper から継承されるためテキスト カラーを指定する必要はありません。

{{< /callout >}}

デフォルトのスタイル：
* Background：`theme.sys.color.surface.paper`
* Text：`theme.sys.color.surface.paperText`

より明るいテキストを表示したい場合は、`surface.paperHint` を使用します。推奨される方法は `<Typography color="paperHint" />` を使うことです。

```jsx
<Typography color="paperHint">Secondary text</Typography>
```

その他のオプション：
* Border：`<Paper variant="outlined" />`
* BorderRadius：`<Paper shape="shape1" />`（デフォルトは `shape2`）
* Transparent background：`<Paper variant="flat" transparent />`

![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/ThemeGuideSurfaceText.svg)


{{< callout type="info" >}}

詳細はこちらの[ドキュメント](https://developers.arcgis.com/experience-builder/guide/upgrade-to-new-theme/#background--text-colors)をご参照ください。

{{< /callout >}}


## Calcite コンポーネントの使用
[Jimu UI](https://developers.arcgis.com/experience-builder/api-reference/jimu-ui/) は Experience Builder の主要なコンポーネント ライブラリーであり、カスタム ウィジェットやテーマを Experience Builder 全体のテーマと一貫性を持たせるために、まずこちらを使用することが望ましいです。Calcite Design System を使用する必要がある場合は、それも可能です。[Calcite のサンプル ウィジェット](https://developers.arcgis.com/experience-builder/sample-code/widgets/web-component-widgets/use-calcite-components/)を参照してください。Calcite コンポーネントを使用する際は、`@esri/calcite-components` ではなく、`calcite-components` からインポートするようにしてください。


## ウィジェット スタイル設定
Experience Builder にはウィジェットをスタイリングするいくつかの方法があります。


### CSS-in-JS (推奨)

CSS-in-JS とは、ベンダー プレフィックス、スコープ付き CSS、JS ロジック、テーマ機能など、CSS では解決できない問題に対処するために JavaScript で CSS を書く方法のことを指します。

Styled Components や Emotion など、よく知られている CSS-in-JS のライブラリがたくさんあります。Experience Builder では、スタイリングとテーマ設定を目的としたフレームワークとして [Emotion](https://emotion.sh/docs/introduction) を使用しています。

Emotion には 2 つのスタイリング パターンがあります。

### 1. [css prop](https://emotion.sh/docs/css-prop)
Emotion の `css` prop を使うと、React の style prop に比べて、より自然で親しみやすい方法で CSS スタイルを書くことができます。CSS スタイルは `template literals` で書くことができるので、CSS の中に JS ロジックを書くことができます。

例えば、以下のサンプルの Counter ウィジェットは、カウント値が 2 以上になるとテキストの色が赤から緑に変わります。

```jsx
// widget.tsx:
import { React, css, type AllWidgetProps } from 'jimu-core';
import { Button, ButtonGroup } from 'jimu-ui';

interface State {
  count: number;
}

export default class Widget extends React.PureComponent<AllWidgetProps<{}>, State>{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const numberStyle = css`
      font-size: 2.5rem;
      color: ${this.state.count > 2 ? 'green' : 'red'};
    `;
    return <div className="text-center">
      <p css={numberStyle}>{this.state.count}</p>
      <ButtonGroup variant="outlined" color="primary">
        <Button onClick={e => {setCount(count - 1)}}> - </Button>
        <Button onClick={e => {setCount(count + 1)}}> + </Button>
      </ButtonGroup>
    </div>;
  }
}
```

または

```jsx
// widget.tsx:
import { React, css, type AllWidgetProps } from 'jimu-core';
import { Button, ButtonGroup } from 'jimu-ui';

const Widget = (props: AllWidgetProps<{}>): React.ReactElement => {
  const [count, setCount] = React.useState(0);
  const numberStyle = css`
    font-size: 2.5rem;
    color: ${count > 2 ? 'green' : 'red'};
  `;
  return <div className="text-center">
    <p css={numberStyle}>{count}</p>
    <ButtonGroup variant="outlined" color="primary">
      <Button onClick={e => {setCount(count - 1)}}> - </Button>
      <Button onClick={e => {setCount(count + 1)}}> + </Button>
    </ButtonGroup>
  </div>;
}
```

Output 例:
![](https://developers.arcgis.com/experience-builder/static/1bd4a1de34d6c8fc4995baaf8f1dad3b/811d1/EmotionCSSProp.png)

### 2. Styled Components
このパターンは [Styled-Components](https://www.styled-components.com/) ライブラリーにインスピレーションされたもので、使い方は非常に似ています。"styled" アプローチは、ウィジェット内で再利用可能なコンポーネントを作成するのに最適です。

```tsx
import { React, AllWidgetProps } from 'jimu-core';
import { styled } from 'jimu-theme';

// スタイルが設定された Button コンポーネント:
const StyledButton = styled.button`
  color: white;
  background-color: blue;
  transition: 0.15s ease-in all;
  &:hover {
    background-color: darkblue;
  }
`;

export default class Widget extends React.PureComponent<AllWidgetProps<{}>>{
  render() {
    return <StyledButton>
      A styled HTML Button
    </StyledButton>;
  }
}
```

Output 例:
![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetStyledComponent.png)


### CSS ユーティリティー クラス
Jimu UI は、UI 要素に素早くスタイルを適用するための同様の [CSS ユーティリティー クラス](https://developers.arcgis.com/experience-builder/storybook/?path=/docs/theme-theme-references-css-utility-classes--docs)を提供しています。


### クイック サンプル
ここでは、w-100、p-3、bg-paper、text-paper、border を追加して、要素に以下のスタイルを適用します。

* 親要素の幅を 100% を取得
* 12px のパディングを設定
* テーマの paper カラーを背景色として使用
* テーマの paper テキスト カラーを文字色として使用
* テーマの divider の primary カラーを境界線の色として使用

```jsx
// render() 関数内:

return <div className="w-100 p-3 bg-paper text-paper border">
  <p>This is a sample widget</p>
</div>;
```

Output 例:
![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/WidgetUIUtilities.png)


### インライン CSS
React のコンテキストでは、インラインの CSS スタイルは JavaScript オブジェクトとして記述され、DOM 要素の `style` 属性に適用されます。

```jsx
// render() 関数内:

const containerStyle = {
  background: 'darkblue',
  color: 'white',
  width: 200,
  height: 150,
  padding: '1rem',
  borderRadius: 5
};

return <div
  style={containerStyle} // CSS スタイルの適用
> content </div>;
```

Output 例:
![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetCSSInline.png)


### 外部 CSS スタイルシート
別の方法としては、外部スタイルシートのファイルで CSS スタイルを定義し、ウィジェット内で個別にインポートする方法があります。使用できるスタイルシートのファイルの拡張子は `.css`、`.sass`、および `.scss` です。

先ほどのコードサンプルを例に、CSS スタイルを別のスタイルシート (例: style.css) に移動します。

```css
/* style.css */
.my-widget {
  background: 'darkblue';
  color: 'white';
  width: 200px;
  height: 150px;
  padding: '1rem';
  border-radius: 5px;
}
```

ウィジェットにファイルをインポートします。

```jsx
// widget.tsx:
import 'path/to/style.css';
```

style.css で定義されている DOM 要素にクラス名を追加することを忘れないでください。

```jsx
// widget.tsx:
// render() 関数内:

return <div className="my-widget"> content </div>;
```

Output 例:
![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetCSSInline.png)


## テーマを使った作業
この設定は、ウィジェットをアプリケーション全体のデザインと一貫性のあるものにしたい場合や、テーマ変更時に自動的にデザインを更新したい場合に必要です。


### ウィジェットの props からテーマ変数にアクセス
Experience Builder フレームワークでは、テーマ変数が JSON オブジェクトとして提供され、ウィジェットにプロパティとして挿入します。これにより、色、タイポグラフィー、シャドウなど、すべてのテーマ変数にアクセスできます。

ウィジェット内で `props.theme` を使用することでテーマ変数にアクセスでき、CSS 宣言内でそれらを参照できます。例えば、以下のように使用します。

```jsx
import { React, AllWidgetProps } from 'jimu-core';
import { css } from 'jimu-core';

export default class Widget extends React.PureComponent<AllWidgetProps<{}>>{
  render() {
    const theme = this.props.theme;
    const style = css({
      color: theme.sys.color.surface.paperText,
      backgroundColor: theme.sys.color.surface.paper,
      padding: theme.sys.spacing(3),
      borderRadius: theme.sys.shape.shape2
    });
    return <div css={style}>
      <p>This is a sample widget</p>
    </div>;
  }
}
```

または

```jsx
import { React, css, AllWidgetProps } from 'jimu-core';

export default function Widget(props: AllWidgetProps<{}>) {
  const { theme } = props;
  const style = css({
    color: theme.sys.color.surface.paperText,
    backgroundColor: theme.sys.color.surface.paper,
    padding: theme.sys.spacing(3),
    borderRadius: theme.sys.shape.shape2
  });
  return <div css={style}>
    <p>This is a sample widget</p>
  </div>;
}
```

Output 例:
![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/WidgetUIThemeWidget.png)


### コンポーネント内でのテーマ変数へのアクセス
ウィジェット内でより複雑な UI を構築する場合は、テーマを使用するコンポーネントにさらに分割することができます。


### スタイル付きコンポーネント（styled component）を使ってテーマ変数にアクセスする方法（推奨）

```jsx
// my-component.tsx
import { React } from 'jimu-core';
import { styled } from 'jimu-theme'

const MyComponent = styled('div')(({ theme }) => ({
    color: theme.sys.color.surface.paperText,
    backgroundColor: theme.sys.color.surface.paper,
    padding: theme.sys.spacing(3),
    borderRadius: theme.sys.shape.shape2
}));

export default MyComponent;

//widget.tsx
import { React, AllWidgetProps } from 'jimu-core';
import MyComponent from './my-component';

export default function Widget(props: AllWidgetProps<{}>) {
  return (
    <MyComponent>
      <p>This is a sample widget</p>
    </MyComponent>
  );
}
```

![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/WidgetUIThemeWidget.png)


### フックを使用したテーマ変数へのアクセス

```jsx
// my-component.tsx
import { React, css } from 'jimu-core';
import { useTheme } from 'jimu-theme'

const MyComponent = ({ children }) => {
  const theme = useTheme();
  const style = css({
    color: theme.sys.color.surface.paperText,
    backgroundColor: theme.sys.color.surface.paper,
    padding: theme.sys.spacing(3),
    borderRadius: theme.sys.shape.shape2
  });
  return <div css={style}>
    {children}
  </div>;
};
export default MyComponent;

// widget.tsx
import { React, AllWidgetProps } from 'jimu-core';
import MyComponent from './my-component';

export default function Widget(props: AllWidgetProps<{}>) {
  return <MyComponent>
    <p>This is a sample widget</p>
  </MyComponent>;
}
```

![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/WidgetUIThemeWidget.png)


### HOC withTheme を使用したテーマ変数へのアクセス

```jsx
// my-component.tsx
import { React, css } from 'jimu-core';
import { withTheme } from 'jimu-theme'

const MyComponent = ({ theme, children }) => {

  const style = css({
    color: theme.sys.color.surface.paperText,
    backgroundColor: theme.sys.color.surface.paper,
    padding: theme.sys.spacing(3),
    borderRadius: theme.sys.shape.shape2
  });

  return <div css={style}>
    {children}
  </div>
};

export default withTheme(MyComponent)

// widget.tsx
import { React, AllWidgetProps } from 'jimu-core';
import MyComponent from './my-component';

export default function Widget(props: AllWidgetProps<{}>) {
  return <MyComponent>
    <p>This is a sample widget</p>
  </MyComponent>;
}
```

![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/WidgetUIThemeWidget.png)


## ArcGIS Maps SDK コンポーネント
Jimu テーマと Calcite テーマの間のテーマ トークンのマッピングはフレームワークによって処理されているため、Calcite コンポーネントのスタイルを気にする必要はありません。ただし、Calcite コンポーネントや Jimu コンポーネントを使用しなかった際（例えば、ArcGIS Maps SDK の Web コンポーネントを使用する場合）、そのコンポーネントのスタイルがテーマに合わない場合は、ウィジェット内でトークンを上書きする必要があるかもしれません。

{{< callout type="info" >}}

[Calcite-JimuTheme Token mapping](https://developers.arcgis.com/experience-builder/storybook/?path=/docs/theme-theme-references-calcite-token-jimu-theme-token-mapping--docs) ドキュメントを参照してください。

{{< /callout >}}


## リファレンス
* [jimu-theme](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/)
* [styled](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/styled/)
* [useTheme](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/useTheme/)
* [withTheme](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/withTheme/)
* [ThemeVariables](https://developers.arcgis.com/experience-builder/api-reference/jimu-theme/ThemeVariables/)
* [IMThemeVariables](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/IMThemeVariables/)
* [Calcite-JimuTheme Token mapping](https://developers.arcgis.com/experience-builder/storybook/?path=/docs/theme-theme-references-calcite-token-jimu-theme-token-mapping--docs)