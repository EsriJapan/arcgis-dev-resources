+++
title = "ウィジェット UI の作成"
description = "ウィジェット UI の作成方法について紹介します。"
weight = 8
aliases = ["/widget-ui/"]
+++

Experience Builder のベースとなる `Widget` クラスは、React のコンポーネントサブクラスから拡張されています。[PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) から拡張されており、`render()` と呼ばれる関数を提供しています。UI の作業のほとんどは、この関数の内部で行われることが予想されます。

## JSX の記述
UI テンプレートの作成に使用される React の構文は JSX と呼ばれています。これは HTML を書くのと非常に似ていますが、JavaScript の機能を完全に組み込んでいます。

[JSX](https://reactjs.org/docs/introducing-jsx.html) の詳細を参照してください。

ここでは、ウィジェットの UI にいくつかの基本的な HTML 要素を追加する簡単な例を示します。

```tsx
// in widget.tsx:
import { React, BaseWidget, AllWidgetProps } from 'jimu-core';

export default class Widget extends BaseWidget<AllWidgetProps<{}>, any>{
  render() {
    return <div className="myWidget">
      <p>This is a sample widget</p>
      <button type="button" style={{background: 'orange'}}>I'm a button</button>
    </div>;
  }
}
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetUIJSX.png)

## Jimu UI ライブラリの使用
Jimu フレームワークは、開発者がウィジェット開発で使用するコンポーネントの UI ライブラリを提供しています。

- __基本的な UI コンポーネント__: button, dropdown, form controls, icon, navigation, modal, grid layout container など
- __高度な UI コンポーネント__: date picker, resource selector, expression builder など

内部的には、Jimu の UI コンポーネントは [Reactstrap](http://reactstrap.github.io/) と呼ばれる React Bootstrap フレームワークから拡張・カスタマイズされています。このライブラリは、他の類似した React UI ライブラリと同様に、コンポーネントの使用方法についても同様のパターンを踏襲しています。 

一般的に使用されているコンポーネントやアイコンのほとんどは、Storybookのサイト `(https://localhost:3001/storybook/index.html)` にアクセスしてプレビューすることができます。

Experience Builder の [Storybook](https://developers.arcgis.com/experience-builder/guide/storybook) の詳細を参照してください。

Jimu UI は Experience Builder の公式 UI ライブラリであり、このライブラリのコンポーネントを考慮して UI 開発を利用することを強くお勧めします。その理由は以下の通りです。

- UI/UX の一貫性: ウィジェットの全体的な外観と操作感、それを使って作成されたアプリは、一貫したパターンに従います。
- テーマ性：コンポーネントのスタイルは設定可能でテーマ性があるため、さまざまなテーマに対応したウィジェットを簡単に作ることができます。
- Experience Builder および ArcGIS とのより良い統合が実現できます。

## UI コンポーネント

### コンポーネントのインポート
基本的な UI コンポーネントは「jimu-ui」から直接インポートでき、高度な UI コンポーネントはパスを使用して個別にインポートする必要があります。

```tsx
import { Button, Icon, TextInput } from 'jimu-ui'; // basic
import { DatePicker } from 'jimu-ui/date-picker'; // advanced
```

### クイック サンプル
ここでは、"primary" スタイルの Button コンポーネントとスターアイコンをウィジェットに追加しています。

```tsx
// in widget.tsx:
import { React, BaseWidget, AllWidgetProps } from 'jimu-core';
import { Button, Icon } from 'jimu-ui'; // import components

// Create an svg icon using Icon component:
const iconNode = <Icon icon={require('jimu-ui/lib/icons/star.svg')} />;

export default class Widget extends BaseWidget<AllWidgetProps, any>{
  render(){
    // Add Button component containing an icon to the widget:
    return <Button type="primary">{iconNode} primary button</Button>;
  }
}
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetUIButton.png)

## CSS ユーティリティクラス
Jimu UI は、[Bootstrap](https://getbootstrap.com/docs/4.3/utilities) と同じ CSS ユーティリティクラスを提供しており、UI 要素に素早くスタイルを適用することができます。

### クイック サンプル
ここでは w-100、p-3、bg-primary、text-white を追加して要素を作成しています。

- 親要素の幅を 100% に設定
- 1 rem の padding（パディング）を設定
- 背景色を テーマの primary color として設定
- テキストカラーを テーマの white color として設定

```tsx
// in the render() function:

return <div className="w-100 p-3 bg-primary text-white">
  <p>This is a sample widget</p>
</div>;
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetUtilityClasses.png)

## ウィジェット スタイル設定
Experience Builder では、ウィジェットのスタイルを設定するには 3 つのオプションがあります。

### インライン CSS
React のコンテキストでは、インラインの CSS スタイルは JavaScript オブジェクトとして記述され、DOM 要素の `style` 属性に適用されます。

```css
// in the render() function:

const containerStyle = {
  background: 'darkblue',
  color: 'white',
  width: 200,
  height: 150,
  padding: '1rem',
  borderRadius: 5
};

return <div
  style={containerStyle} // CSS styles applied
> content </div>;
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetCSSInline.png)

### 外部 CSS スタイルシート
別の方法としては、外部スタイルシートのファイルで CSS スタイルを定義し、ウィジェット内で個別にインポートする方法があります。使用できるスタイルシートのファイルの拡張子は .css、.sass、および .scss です。

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

としてウィジェットにファイルをインポートします。

```css
// widget.tsx:
import 'path/to/style.css';
```

そして、style.css で定義されている DOM 要素にクラス名を追加することを忘れないでください。

```css
// widget.tsx:
// in the render() function:

return <div className="my-widget"> content </div>;
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetCSSInline.png)


### CSS-in-JS (推奨)

CSS-in-JS とは、ベンダープレフィックス、スコープ付き CSS、JS ロジック、テーマ機能など、CSS では解決できない問題に対処するために JavaScript で CSS を書く方法のことを指します。

Styled Components や Emotion など、よく知られている CSS-in-JS のライブラリがたくさんあります。Experience Builder では、スタイリングとテーマ設定を目的としたフレームワークとして [Emotion](https://emotion.sh/docs/introduction) を使用しています。

Emotion には 2 つのスタイリング パターンがあります。

### 1. css prop
Emotion の `css` prop を使うと、React のスタイルプロップに比べて、より自然で親しみやすい方法で CSS スタイルを書くことができます。CSS スタイルは `template literals` で書くことができるので、CSS の中に JS ロジックを書くことができます。

例えば、以下のサンプルの Counter ウィジェットは、カウント値が 2 以上になるとテキストの色が赤から緑に変わります。

```tsx
// widget.tsx:
/** @jsx jsx */ // <-- make sure to include the jsx pragma
import { React, BaseWidget, AllWidgetProps } from 'jimu-core';
import { css, jsx } from 'jimu-core';
import { Button, ButtonGroup } from 'jimu-ui';

interface State {
  count: number;
}

export default class Widget extends BaseWidget<AllWidgetProps<{}>, State>{
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
      <ButtonGroup>
        <Button type="secondary" onClick={e => {this.setState({
          count: this.state.count - 1
          })}}> - </Button>
        <Button type="secondary" onClick={e => {this.setState({
          count: this.state.count + 1
          })}}> + </Button>
      </ButtonGroup>
    </div>;
  }
}
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/EmotionCSSProp.png)

### 2. Styled Components
このパターンは [Styled-Components](https://www.styled-components.com/) ライブラリにインスピレーションされたもので、使い方は非常に似ています。"styled" アプローチは、ウィジェット内で再利用可能なコンポーネントを作成するのに最適です。

```tsx
/** @jsx jsx */ // <-- make sure to include the jsx pragma
import { BaseWidget, AllWidgetProps } from 'jimu-core';
import { styled, jsx } from 'jimu-core';

// A styled button component:
const StyledButton = styled.button`
  color: white;
  background-color: blue;
  transition: 0.15s ease-in all;
  &:hover {
    background-color: darkblue;
  }
`;

export default class Widget extends BaseWidget<AllWidgetProps<{}>>{
  render() {
    return <StyledButton>
      A styled HTML Button
    </StyledButton>;
  }
}
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetStyledComponent.png)

### 3. テーマを使った作業
これは、ウィジェットをアプリケーションの他の部分と一貫して見えるようにしたい場合や、テーマが変更されたときに自動的にルック＆フィールを更新したい場合に必要です。

Experience Builder フレームワークは、テーマ変数を JSON オブジェクトとして提供し、それをプロパティとしてウィジェットに挿入します。色、フォント、サイズ、コンポーネントなど、すべてのテーマ変数にアクセスできます。

ウィジェット内のテーマ変数にアクセスし、CSS 宣言でそれらを参照するには this.props.theme を使用します。例えば、以下のようになります。

```tsx
/** @jsx jsx */ // <-- make sure to include the jsx pragma
import { BaseWidget, AllWidgetProps } from 'jimu-core';
import { css, jsx } from 'jimu-core';

export default class Widget extends BaseWidget<AllWidgetProps<{}>>{
  render() {
    const theme = this.props.theme;
    const style = css`
      background: ${theme.colors.palette.primary[100]};
      color: ${theme.colors.black};
      padding: ${theme.sizes[3]};
    `;
    return <div css={style}>
      <p>This is a sample widget</p>
    </div>;
  }
}
```

Output 例:
![](https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/widgetWithTheme.png)

default theme vs. dark theme
