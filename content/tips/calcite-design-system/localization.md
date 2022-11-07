+++ 
title = "ローカライゼーション" 
description = "言語変更およびそれに伴うアイコンの向きについて説明しています。" 
Weight = 4
+++

出典：Calcite Design System (Beta) - [Localization](https://developers.arcgis.com/calcite-design-system/localization/)

## ローカライゼーション
言語タグとロケールは、Web の国際化のための基本的な構成要素の一つです。Calcite Components は、多くのロケールと右横書き言語（RTL）を双方向でサポートしています。

---
### ロケール
Calcite Components は、<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang" target="_blank">`lang`</a> 属性で設定されたアプリケーションで定義されたデフォルトの言語を自動的に使用します。

```html
<!-- HTML lang attribute to set the locale to English -->
<html lang="en">
```

[Input Date Picker](https://developers.arcgis.com/calcite-design-system/components/input-date-picker/) などの一部のコンポーネントは、任意の言語や国のフォーマットに合わせて特定のローカライズを含んでいます。

```html
<!-- Sets the component's locale to English -->
<!-- Dates are formatted MM/DD/YYYY -->
<calcite-input-date-picker locale="en"></calcite-input-date-picker>

<!-- Sets the component's locale to English - Canada -->
<!-- Dates are formatted YYYY-MM-DD -->
<calcite-input-date-picker locale="en-CA"></calcite-input-date-picker>

<!-- Sets the component's locale to English - UK -->
<!-- Dates are formatted DD/MM/YYYY -->
<calcite-input-date-picker locale="en-GB"></calcite-input-date-picker>
```

#### ロケールを持つコンポーネント
* [Date Picker](https://developers.arcgis.com/calcite-design-system/components/date-picker/)
* [Input](https://developers.arcgis.com/calcite-design-system/components/input/)
* [Input Data Picker](https://developers.arcgis.com/calcite-design-system/components/input-date-picker/)

---
### ナンバリングシステム
ナンバリングシステムは、設定されたロケールの定義に従って、数字または記号を使用して一貫した形式で数字を伝えるものです。

ブラウザの不一致を防ぐため、アラビア語の番号は、デフォルトでラテン語に設定されています。<a href="https://developers.arcgis.com/calcite-design-system/components/input/#component-api-properties-numberingSystem" target="_blank">`numberingSystem`</a> プロパティを標準的な Unicode 数値システムに設定することで、デフォルト値を変更することができます。

`numberingSystem` プロパティの詳細については、[MDN documentation](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) を参照してください（利用可能な番号付けシステムのリストを含みます）。

```html
<calcite-input numbering-system="arab" type="number" value="10"></calcite-input>
```

#### 番号付けされたコンポーネント
* [Color Picker](https://developers.arcgis.com/calcite-design-system/components/color-picker/)
* [Input](https://developers.arcgis.com/calcite-design-system/components/input/)

---
### ロケールサポート
Calcite Components は、以下のロケールをサポートしています。

* Arabic(ar)
* Bosnian(bs)
* Bulgarian(bg)
* Catalan(ca)
* Chinese Simplified (zh-CN)
* Chinese Traditional - Hong Kong (zh-HK)
* Chinese Traditional - Taiwan (zh-TW)
* Croatian (hr)
* Czech (cs)
* Danish (da)
* Dutch (nl)
* English (en)
* English - Australia (en-AU)
* English - Canada (en-CA)
* English - United Kingdom (en-GB)
* Estonian (et)
* Finnish (fi)
* French (fr)
* French - Switzerland (fr-CH)
* German (de)
* German - Switzerland (de-CH)
* Greek (el)
* Hebrew (he)
* Hindi (hi)
* Hungarian (hu)
* Indonesian (id)
* Italian (it)
* Italian - Switzerland (it-CH)
* Japanese (ja)
* Korean (ko)
* Latvian (lv)
* Lithuanian (lt)
* Macedonian (mk)
* Norwegian (nb)
* Polish (pl)
* Portuguese (pt)
* Portuguese - Portugal (pt-PT)
* Romanian (ro)
* Russian (ru)
* Serbian (sr)
* Slovak (sk)
* Slovenian (sl)
* Spanish (es)
* Spanish - Mexico (es-MX)
* Swedish (sv)
* Thai (th)
* Turkish (tr)
* Ukrainian (uk)
* Vietnamese (vi)

---
### 右横書き言語(RTL)
また、Calcite Components は、アラビア語やヘブライ語などの言語を双方向でサポートしています。方向を変えるには、`<html>` タグまたは `<body>` タグで <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir" target="_blank">`dir`</a> 属性を `rtl` に設定します。

```html
<calcite-color-picker dir="rtl"></calcite-color-picker>
```

```html
<html dir="rtl">
```

|左から右へ(LTR)|右から左へ(RTL)|
|:--:|:--:|
|![LTR](https://developers.arcgis.com/calcite-design-system/static/80f73f73d4a1235b779f07814def3689/f96df/map-ltr.png)|![RTL](https://developers.arcgis.com/calcite-design-system/static/f220fb81fe1a4e3a6e65ff41146d137d/b2cef/map-rtl.png)|

#### ミラーリングアイコン
ナビゲーションに使用される左右のアイコンなど、他のコンポーネントの [Icon](https://developers.arcgis.com/calcite-design-system/components/icon/) を RTL 用にミラーリングすることができます。

```html
<!-- Flip the componet's element direction to rtl -->
<calcite-icon flip-rtl icon="arrow-bold-left"></calcite-icon>
```

以下のアイコンはミラーリングしてください。
* ナビゲーションの矢印
* ランニングなど前進へ進む動きのもの
* 音量等の調整に関してのもの

しかし、以下のアイコンはミラーリングしないでください。
* ロゴおよびブランディング
* 時計やリフレッシュ等、循環が時計回りで表現されるもの