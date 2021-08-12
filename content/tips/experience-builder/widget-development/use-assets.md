+++
title = "assets の使用"
description = "assets の使用について紹介します。"
weight = 13
aliases = ["/use-assets/"]
+++


出典：ArcGIS Experience Builder - Guide - [Use assets](https://developers.arcgis.com/experience-builder/guide/use-assets/)

## assets の使用に関する一般的なガイドライン

ウィジェットでは、画像や動画などのアセットを使用する必要があります。以下では、ArcGIS Experience Builder ウィジェットで assets を使用する方法について説明します。

一般的に、assets を使用する方法は 2 つあります。

- assets のインライン化
- assets を動的にロードする

### インライン assets
画像などの小さな assets の場合、ネットワークパフォーマンスへの悪影響が限定的であるため、この方法は妥当な方法です。assets をインライン化するには、次のように assets を`require()` します。

```tsx
const smallImage = require('./small-image.png')
<img style={{width: '200px', height: '200px'}} src={smallImage}/>
```

.svg ファイルの場合、インラインで [SVG DOM](https://www.w3.org/TR/SVG11/svgdom.html) としてレンダリングしたい場合は、`assets/icons` フォルダにファイルを置き、次のように `require()` します。

```tsx
const svg = require('./assets/icons/mysvg.svg')
<Icon icon={svg} color="red" width="200px" height="200px"/>
```

### ダイナミックに読み込む
動画や大きな画像の場合、ネットワークのパフォーマンスに悪影響を与える可能性があるため、インラインではなくダイナミックにアセットをロードするのが妥当な方法です。

アセットを動的にロードするには、2つの方法があります。アセットがランタイムで使用される場合は、ファイルを `runtime/assets` フォルダに配置します。それ以外の場合は、assets を`setting/assets` フォルダに配置します。そうすれば、次のようにアセットを使用することができます。

```tsx
<img style={{width: '200px', height: '200px'}} src={`${props.context.folderUrl}dist/runtime/assets/large-image.jpg`}/>
or
<Icon icon={`${props.context.folderUrl}dist/runtime/assets/mysvg.svg`} color="red" width="200px" height="200px"/>
```

後者（上図）は、`.svg` ファイルを SVG DOM としてレンダリングします。

アセットの使用方法やその他の詳細については，[use-assets](https://developers.arcgis.com/experience-builder/sample-code/widgets/use-assets/) サンプル ウィジェットを参照してください。