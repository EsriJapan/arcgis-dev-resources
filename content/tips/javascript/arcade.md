+++
title = "Arcade"
description = "ArcGIS Maps SDK for JavaScript Arcade について紹介します。"
weight = 5
aliases = ["/Arcade/"]
+++


出典：[Arcade](https://developers.arcgis.com/javascript/latest/arcade/)
 

## Arcade とは？
[Arcade](https://developers.arcgis.com/arcade/) は、ArcGIS アプリ ([ArcGIS Pro](https://www.esri.com/ja-jp/arcgis/products/arcgis-pro/overview)、[ArcGIS Online](https://www.arcgis.com/index.html)、[ArcGIS Runtime API](https://developers.arcgis.com/documentation/mapping-and-location-services/)、[ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/documentation/glossary/arcgis-maps-sdk-for-javascript/) など) 内のビジュアライゼーション、ポップアップ コンテンツ、ラベルにおいて、数学的計算や論理式の評価を実行できる式言語です。これらの製品で作成された式は、Web マップに保存し、他のアプリで読み込み、評価することができます。これにより、あらゆる ArcGIS アプリケーションで一貫して保持および評価できるカスタム コンテンツを柔軟に定義することが可能になります。

## Arcade 式を書く方法
多くの点で、Arcade の構文は JavaScript と似ており、変数の宣言、論理演算の実行、組み込み関数の利用、カスタム関数の作成が可能です。ただし、この 2 つの言語には重要な違いがあります。Arcade 式を作成する方法の詳細については、[ガイド](https://developers.arcgis.com/arcade/guide/statements/)や[関数リファレンス](https://developers.arcgis.com/arcade/function-reference/)を含む [Arcade のドキュメント](https://developers.arcgis.com/arcade/)全体をご覧ください。また、テスト用データセットを使用して式をテストできる環境を提供する [playground](https://developers.arcgis.com/arcade/playground/) も利用できます。

**プロファイル変数**を使用すると、式からレイヤー、マップ、またはワークスペースに接続されたデータ値にアクセスできます。これらの値は、式の入力となり、式の作成者が定義した有効な戻り値を生成するために必要です。たとえば、`$feature` を使用すると、式からフィーチャの属性やジオメトリーにアクセスできます。

JavaScript アプリ内では、Arcade 式は常に文字列値として参照されます。1 行の式を書く場合は、単にダブル クォートかシングル クォートで囲みます。

``` js
// returns the % of the population that is age 18 and older
renderer.valueExpression = "Round( ($feature.AGE_18UP / $feature.TOTAL_POP) * 100 )";
```

[テンプレート リテラル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals) ([ES6](https://262.ecma-international.org/6.0/)以降) を使用すると、複数行にわたる Arcade 式を記述できます。

``` js
renderer.valueExpression = `
  var republican = $feature.MP06025a_B;
  var democrat = $feature.MP06024a_B;
  var independent = $feature.MP06026a_B;

  var parties = [ republican, democrat, independent ];
  var total = Sum(parties);
  var max = Max(parties);
  return (max / total) * 100;
`;
```

Arcade のテキスト値も[テンプレート リテラル](https://developers.arcgis.com/arcade/guide/template-literals/)に対応している点に注意してください。 [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/documentation/glossary/arcgis-maps-sdk-for-javascript/) では、Arcade 式は文字列として保存されるため、多くの場合、 JavaScript のテンプレート リテラルを使用して記述されます。JavaScript のテンプレート リテラル内でも Arcade のテンプレート リテラルを使用することは可能ですが、Arcade のテンプレート リテラルが正しく認識されるように、バッククォート (`) やドル記号 ($) などのキー文字をエスケープする必要があります。たとえば、ポップアップ テンプレート内で JavaScript テンプレート リテラルの中に Arcade テンプレート リテラルを使用している以下の Arcade 式に注目してください。

``` js
layer.popupTemplate = {
  content: "{expression/percent-unemployed}",
  expressionInfos: [{
    name: "percent-unemployed",
    title: "Percent unemployed",
    expression: `
var unemploymentRate = ($feature.UNEMP_CY / $feature.LABOR_FORCE) * 100;
var population = $feature.POP_16UP;
var populationNotWorking =
  (($feature.UNEMP_CY + $feature.NOT_LABORFORCE_16) / $feature.POP_16UP) * 100;

// returns a string built using an Arcade template literal
 return \`\${$feature.COUNTY} County

- Unemployment rate: ${Text(unemploymentRate, "##.#")}%
- % population not working: ${Text(populationNotWorking, "##.#")}%
- Population: ${Text(population, "#,###")}`;
   `,
  },
 ],
};
```

[ポップアップ内で空間集計](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade-groupby/)を行うサンプルは、Arcade テンプレート リテラルを使った別の例を示しています。[ES6](https://262.ecma-international.org/6.0/) のコードを書かない場合は、式を JavaScript の外にある別の `<script>` タグ内に配置し、タイプを `text/plain` に設定して一意の ID を指定することで、 JavaScript 内の適切な場所でそのスクリプトを参照することができます。

``` html
<script type="text/plain" id="adult-population">
  var republican = $feature.MP06025a_B;
  var democrat = $feature.MP06024a_B;
  var independent = $feature.MP06026a_B;

  var parties = [ republican, democrat, independent ];
  var total = Sum(parties);
  var max = Max(parties);
  return (max / total) * 100;
</script>
```

次に、 `document.getElementById()` メソッドを呼び出して、そのスクリプトを文字列値として参照します。

``` js
renderer.valueExpression = document.getElementById("adult-population").text;
```

詳細については、このページのサンプルコードや [Arcade を使用したカスタム ビジュアライゼーションの作成](https://developers.arcgis.com/javascript/latest/sample-code/visualization-arcade/)サンプルを参照してください。

## Arcade の利用場所
Arcade は、有効な**プロファイル**内でのみ実行できます。プロファイルは、有効な式を作成するためのルールや仕様を定義します。これには、実行可能なコンテキストに加え、有効なデータ入力 (プロファイル変数)、サポートされる関数、および戻り値の型を定義することが含まれます。

Arcade は自己完結型であり、フィーチャ単位で実行されます。プロファイルは、式が実行されるコンテキストにおいて、その安全性とパフォーマンスを確保します。たとえば、Arcade を使用すると、データ値に基づいたビジュアライゼーションを定義できます。レイヤーに 100,000 個のフィーチャがあり、 Arcade 式で定義されたレンダラーが設定されている場合、データを適切にレンダリングするには、その式を 100,000 回実行する必要があります。このため、[Visualization profile](#可視化) では、アプリのパフォーマンスが著しく低下するのを防ぐために、元のフィーチャ以外のソースからのデータへのアクセスが制限されます。一方、[ポップアップ](#ポップアップ)内では、一度に実行される式は 1 つだけ (ポップアップが開かれたとき) であるため、パフォーマンスを損なうことなく、マップやサービス内の任意のレイヤーのデータに Arcade 式からアクセスできます。

以下のセクションでは、JavaScript API 内で Arcade 式を記述できる場所について説明します。各セクションには、そのコンテキストにおける式のルールを定義したプロファイル仕様へのリンクと、実際の例が掲載されています。


## ラベリング
- 仕様 : [Labeling profile](https://developers.arcgis.com/arcade/profiles/labeling/)
- ライブ サンプル : [FeatureLayer へのラベルの追加](https://developers.arcgis.com/javascript/latest/sample-code/labels-basic/)、[複数行ラベル](https://developers.arcgis.com/javascript/latest/sample-code/labels-multiline/)、[レイヤーへの複数のラベル クラスの追加](https://developers.arcgis.com/javascript/latest/sample-code/labels-multiple-classes/)、[Arcade 式を使用したフィーチャへのラベル付け (3D)](https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-labeling-3d/)

Arcade は、[FeatureLayer](https://developers.arcgis.com/javascript/latest/references/core/layers/FeatureLayer/) または [SceneLayer](https://developers.arcgis.com/javascript/latest/references/core/layers/SceneLayer/) 内のフィーチャに対する[ラベル](https://developers.arcgis.com/arcade/profiles/labeling/)式を作成するために使用されます。API バージョン 4.5 以降、これはフィーチャにラベルを付けるためにサポートされている唯一の方法です。レイヤーの [labelingInfo](https://developers.arcgis.com/javascript/latest/references/core/layers/FeatureLayer/#labelingInfo) プロパティに、少なくとも 1 つの [LabelClass](https://developers.arcgis.com/javascript/latest/references/core/layers/support/LabelClass/) を追加する必要があります。 Arcade 式は、[LabelClass](https://developers.arcgis.com/javascript/latest/references/core/layers/support/LabelClass/) の [labelExpressionInfo](https://developers.arcgis.com/javascript/latest/references/core/layers/support/LabelClass/#labelExpressionInfo) オブジェクトの `expression` プロパティに、文字列値として指定する必要があります。


``` js
// returns the value of a field in the layer
// the value of this field will be the label for each feature
const arcade = "$feature.STATION_NAME";

// this object autocasts as new LabelClass()
const labelClass = {
  // set the arcade expression to the `expression` property of labelExpressionInfo
  labelExpressionInfo: {
    expression: arcade,
  },
  labelPlacement: "below-right",
  minScale: 2500000,
  symbol: {
    type: "label-3d",
    symbolLayers: [
      {
        type: "text",
        material: { color: "white" },
        halo: {
          color: "black",
          size: 1,
        },
        size: 8,
      },
    ],
  },
};

// set the label class to the feature layer
featureLayer.labelingInfo = [labelClass];
```

Arcade で記述されたラベル式は、数学演算や論理演算を行う複数行から構成されるなど、より複雑になる場合があります。たとえば、[複数行ラベルのサンプル](https://developers.arcgis.com/javascript/latest/sample-code/labels-multiline/)では、より複雑な複数行ラベル式の作成方法を示しています。この式では、2 つの数値フィールドの値をそれぞれの変数に代入し、それらを評価して文字列値を返します。 Arcade の [When () 関数](https://developers.arcgis.com/arcade/function-reference/logical_functions/#when)を使用して風向 (0 ～ 360度) を評価し、`N`、`NE`、`E`、`SE`、`S`、`SW`、`W`、`NW` のいずれかの方位を返します。風速が `0` の場合は、方位は返されません。式の最後の行では、WIND 変数の値であるラベルが返されます。

``` html
<script type="text/plain" id="wind-direction">
  var DEG = $feature.WIND_DIRECT;
  var SPEED = $feature.WIND_SPEED;
  var DIR = When( SPEED == 0, '',
    (DEG < 22.5 && DEG >= 0) || DEG > 337.5, 'N',
     DEG >= 22.5 && DEG < 67.5, 'NE',
     DEG >= 67.5 && DEG < 112.5, 'E',
     DEG >= 112.5 && DEG < 157.5, 'SE',
     DEG >= 157.5 && DEG < 202.5, 'S',
     DEG >= 202.5 && DEG < 247.5, 'SW',
     DEG >= 247.5 && DEG < 292.5, 'W',
     DEG >= 292.5 && DEG < 337.5, 'NW', '' );
  var WIND = SPEED + ' mph ' + DIR;
  return WIND;
</script>
```

ラベル作成に役立つ Arcade の機能は他にも多数あり、テキストの書式設定を行うロジックを提供する[テキスト関数](https://developers.arcgis.com/arcade/function-reference/text_functions/)なども含まれています。これらの組み込み関数に関する詳細については、[Arcade のドキュメント](https://developers.arcgis.com/arcade/)をご確認ください。

## ポップアップ 
Arcade は、2 つのポップアップ プロファイルとして実装されています：

- [Popup](#popup) - レイヤーのポップアップ コンテンツや集約フィーチャ ポップアップに表示する属性を計算するために使用します。これは単純な計算に便利です。
- [Popup Element](#ポップアップ要素) - レイヤーのポップアップや集約フィーチャ ポップアップ内で、条件に応じてポップアップ要素を作成するために使用します。特に、1 つの式で複数の値を 1 つのポップアップ要素に返したい場合に使用します。

### Popup
- 仕様：[Popup profile](https://developers.arcgis.com/arcade/profiles/popup/)
- レイヤーの例：[PopupTemplate での Arcade 式の参照](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade/)、[ポップアップでの交点の一括表示](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade-groupby/)
- クラスタリングの例： [Clustering - filter のポップアップ機能](https://developers.arcgis.com/javascript/latest/sample-code/featurereduction-cluster-popup-filter/)

Arcade 式は、[PopupTemplate](https://developers.arcgis.com/javascript/latest/references/core/PopupTemplate/) の [content](https://developers.arcgis.com/javascript/latest/references/core/PopupTemplate/#content) 内で参照されます。これは、レイヤーの属性値として存在しないデータを表示したい場合に役立ちます。ポップアップ プロファイルでは、式はテキストまたは数値を返す必要があり、`$feature` を使用してフィーチャの属性にアクセスしたり、`$layer`、`$map`、`$datastore` を使用して他のフィーチャやレイヤーのデータにアクセスしたりできます。

たとえば、[PopupTemplate での Arcade 式の参照](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade/)サンプルでは、米国の各郡の労働統計を含むレイヤーが表示されます。失業率、人口、労働力人口などの属性がありますが、労働力参加率に関する属性はありません。 Arcade を使用すれば、実行時にその値を計算することができます。

``` js
// labor force participation rate
Round(($feature.CIVLBFR_CY / $feature.POP_16UP) * 100, 2);
```

この式から返される値は、レイヤーの [popupTemplates](https://developers.arcgis.com/javascript/latest/references/core/layers/FeatureLayer/#popupTemplate) に表示できます。ポップアップでこの値を表示するには、ポップアップ テンプレートの [expressionInfos](https://developers.arcgis.com/javascript/latest/references/core/PopupTemplate/#expressionInfos) プロパティでこの値を参照し、`name` と `title` を割り当てる必要があります。

``` js
layer.popupTemplate = {
  expressionInfos: [
    {
      name: "participation-rate",
      title: "% of population 16+ participating in the labor force",
      expression: "Round(($feature.CIVLBFR_CY / $feature.POP_16UP)*100,2)",
    },
  ],
  content:
    "In {NAME} county, {expression/participation-rate}% of the population" +
    " participates in the labor force.",
};
```

`expressionInfos` プロパティに式が登録されると、ポップアップ テンプレートのコンテンツ内で `{expression/expression-name}` というプレースホルダー テンプレートを使用して、その式から返された値を参照できるようになります。ユーザーがアリゾナ州グリーンリーを表すフィーチャをクリックすると、ポップアップのコンテンツには次のように表示されます

<br>
<div style="width:360px; border:1px solid #c8c8c8; border-radius:4px; background:#f5f5f5; box-shadow:2px 2px 0 rgba(0,0,0,0.2); padding:16px; font-family:sans-serif;">

  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; color: #000000">
    <strong style="font-size:18px;">Greenlee, AZ</strong>
    <div style="font-size:18px;">
      ⧉ &nbsp; ✕
    </div>
  </div>

  <div style="font-size:14px; color:#333; margin-bottom:16px;">
    In Greenlee county, 51.12% of the population participates in the labor force.
  </div>

  <div style="font-size:14px; color:#444;">
    🔍 Zoom to
  </div>
</div>

また、 [FieldsContent](https://developers.arcgis.com/javascript/latest/references/core/popup/content/FieldsContent/)、[MediaContent](https://developers.arcgis.com/javascript/latest/references/core/popup/content/MediaContent/)、[TextContent](https://developers.arcgis.com/javascript/latest/references/core/popup/content/TextContent/) などのポップアップ コンテンツ要素内でも、 Arcade 式から返された値を参照できます。オブジェクトの `fieldName` プロパティで式の名前を指定するだけです。`expression/expression-name` という構文を使用することを忘れないでください。

```js
layer.popupTemplate = {
  expressionInfos: [
    {
      name: "participation-rate",
      title: "% of population 16+ participating in the labor force",
      expression: "Round(($feature.CIVLBFR_CY / $feature.POP_16UP)*100,2)",
    },
  ],
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "expression/participation-rate",
        },
        {
          fieldName: "CIVLBFR_CY",
          label: "Civilian labor force",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
        {
          fieldName: "POP_16UP",
          label: "Population 16+",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
      ],
    },
  ],
};
```
ポップアップには以下の内容が表示されます。

<br>
<div style="width:360px; font-family:sans-serif; line-height:1.2; background:#ffffff; padding: 5">

  <div style="display:flex; justify-content:space-between; align-items:center;">
    <strong style="font-size:18px; margin:0; color:#000000">Greenlee, AZ</strong>
    <span style="font-size:16px;  color:#000000">⧉ ✕</span>
  </div>

  <table style="width:100%; border-collapse:collapse; font-size:14px; margin-top:8px;">
    <tr style="background:#dcdcdc; color:#1f1f1f">
      <td style="padding:10px; width:70%; border-right:1px solid #ccc;">
        % of population 16+ participating in the labor force
      </td>
      <td style="padding:10px; text-align:right; width:30%;">
        51.12
      </td>
    </tr>
    <tr>
      <td style="padding:10px; border-right:1px solid #ccc; color:#000000">
        Civilian labor force
      </td>
      <td style="padding:10px; text-align:right; color:#000000">
        3,774
      </td>
    </tr>
    <tr style="background:#dcdcdc; color:#1f1f1f">
      <td style="padding:10px; border-right:1px solid #ccc;">
        Population 16+
      </td>
      <td style="padding:10px; text-align:right;">
        7,382
      </td>
    </tr>
  </table>
</div>

実際のサンプルでこのワークフローを確認するには、[PopupTemplate の Arcade 式の参照](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade/)をご覧ください。

### 集約フィーチャのポップアップ
レイヤー ポップアップに加え、[クラスターの popupTemplates](https://developers.arcgis.com/javascript/latest/references/core/layers/support/FeatureReductionCluster/#popupTemplate) の [content](https://developers.arcgis.com/javascript/latest/references/core/PopupTemplate/#content) 内でも Arcade 式を参照することができます。これはレイヤー ポップアップとは少し異なり、`$feature` は 2 つ以上のフィーチャをまとめたクラスターそのものを表します。

`$feature` には、常に `cluster_count` フィールドが含まれます。また、レイヤーのレンダラーに基づいて集計されたその他のフィールド (例：`cluster_avg_fieldName`) も含まれます。

``` js
// returns the sum of the cost field for all features in the cluster
$feature.cluster_count * $feature.cluster_avg_cost
```

このプロファイルでは、`$aggregatedFeatures` プロファイル変数を通じて、クラスター内に含まれるフィーチャにアクセスすることもできます。これらのフィーチャに対してフィルタリング、反復処理、並べ替え、統計計算を行うことができます。

``` js
// returns the total number of car crashes
// that resulted in at least one fatality in a
// cluster representing motor vehicle accidents
Count(Filter($aggregatedFeatures, "FATALITIES > 0"))
```

これらの式から返される値は、クラスターの [popupTemplate](https://developers.arcgis.com/javascript/latest/references/core/layers/support/FeatureReductionCluster/#popupTemplate) に表示できます。ポップアップで値を表示するには、 popupTemplate の [expressionInfos](https://developers.arcgis.com/javascript/latest/references/core/PopupTemplate/#expressionInfos) プロパティでその値を参照し、`name` と `title` を割り当てる必要があります。

``` js
layer.featureReduction = {
  type: "cluster",
  popupTemplate: {
    expressionInfos: [
      {
        name: "total-cost",
        title: "Total damages",
        expression: "Text($feature.cluster_count * $feature.cluster_avg_cost, '$#,###.##')",
      },
      {
        name: "fatalities",
        title: "Crashes with fatalities",
        expression: `
        Expects($aggregatedFeatures, 'FATALITIES')
        Count(Filter($aggregatedFeatures, 'FATALITIES > 0'))
      `,
      },
    ],
    content: `
      This cluster represents {cluster_count} motor vehical accidents. {expression/fatalities} of these crashes
      had at least one fatality. These crashes resulted in {expression/total-cost} of damages.
    `,
  },
};
```

なお、式が `expressionInfos` プロパティに存在すれば、PopupTemplate のコンテンツ内で `{expression/expression-name}` という文字列テンプレートを使用して、その式から返された値を参照することができます。

このプロファイルの実際の動作を確認するには、[Clustering - filter ポップアップ機能](https://developers.arcgis.com/javascript/latest/sample-code/featurereduction-cluster-popup-filter/)のサンプルをご覧ください。

## ポップアップ要素
- 仕様：[Popup Element profile ](https://developers.arcgis.com/arcade/profiles/popup-element/)<br>
- レイヤーの例：[Arcade 式からポップアップチャートを作成する](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade-expression-content/)<br>
- クラスタリングの例：[ポイントクラスター用のポップアップチャート](https://developers.arcgis.com/javascript/latest/sample-code/featurereduction-cluster-popup-chart/)

Popup Element プロファイルを使用すると、マップ作成者は、[リッチテキスト](https://developers.arcgis.com/javascript/latest/references/core/popup/content/TextContent/)、[フィールド](https://developers.arcgis.com/javascript/latest/references/core/popup/content/FieldsContent/)、または[メディア](https://developers.arcgis.com/javascript/latest/references/core/popup/content/MediaContent/) (チャート) のポップアップ コンテンツ要素を表すディクショナリー (オブジェクト) を返す式を記述できます。返されるディクショナリーは、[popupElement](https://developers.arcgis.com/web-map-specification/objects/popupElement/) に関する [Web マップ仕様](https://developers.arcgis.com/web-map-specification/)に準拠している必要があります。[ポップアップ](#ポップアップ機能) プロファイルとは異なり、このプロファイルでは、作成者が単一の要素内で複数の値を返すことができます。

このプロファイルでは、式はディクショナリーを返す必要があり、`$feature` を使用してフィーチャの属性にアクセスしたり、`$layer`, `$map`, `$datastore` を使用して他のフィーチャやレイヤーのデータにアクセスしたりすることができます。

このプロファイルは、チャート、テーブル、またはリッチ テキスト要素のコンテンツが論理条件に基づいて決定されるような高度なシナリオで有用です。例えば、次の式は、データ値を持つフィールドのみを含む [FieldsContent](https://developers.arcgis.com/javascript/latest/references/core/popup/content/FieldsContent/) 要素を作成します。これは、フィールドが空かどうかを確認する機能を持たない標準のフィールド コンテンツ要素よりも、大幅に簡潔になる場合があります。

``` js
// Creates a table with only fields that contain data
var fields = Schema($feature).fields;
function getNames(field){
  return field.name;
}
function filterValidFields(fieldName){
  var invalidNames = ["objectid", "fid", "shape__area", "shape__length"];
  return !includes(invalidNames, lower(fieldName)) && !IsEmpty($feature[fieldName]) && !IsNan($feature[fieldName]);
}

var validFields = Filter(Map(fields, getNames), filterValidFields);
var attributes = {};
var fieldInfos = [];

for (var f in validFields){
  var fieldName = validFields[f];
  Push(fieldInfos, { fieldName: fieldName });
  // format numbers with digit separator and one decimal place
  var value = IIF(TypeOf($feature[fieldName] == "Number"), Text($feature[fieldName], "#,#.#"), $feature[fieldName]);
  attributes[fieldName] = value;
}

return {
  type: "fields",
  fieldInfos: fieldInfos,
  attributes: attributes
};
```

Popup element の式は、 [ExpressionContent](https://developers.arcgis.com/javascript/latest/references/core/popup/content/ExpressionContent/) 要素の [expressionInfo](https://developers.arcgis.com/javascript/latest/references/core/popup/ElementExpressionInfo/) プロパティで定義されます。

``` js
// Creates an column chart where each category/value
// is an aggregate of two or more fields
layer.popupTemplate = {
  title: "Educational Attainment",
  content: [
    {
      type: "expression",
      expressionInfo: {
        expression: `
        // Create a dictionary of attributes representing the values
        // to display in the chart
        var attributes = {
          "No School": $feature.no_school + $feature.some_primary,
          "Primary": $feature.primary_complete + $feature.some_secondary,
          "Secondary": $feature.secondary_complete + $feature.some_highSchool,
          "High School": $feature.highSchool_diploma + $feature.highSchool_ged + $feature.some_college,
          "College/University": $feature.associates + $feature.bachelors + $feature.masters + $feature.doctorate + $feature.professional;
        };

        var fields = [];

        // Create an array representing the attribute names (or keys)
        for (var k in attributes){
          Push(fields, k);
        }

        // Returns a dictionary providing the information
        // required by the popup to render a column chart
        return {
          type: "media",
          attributes: attributes,
          title: "Educational attainment",
          mediaInfos: [{
            type: "columnchart",
            value: {
              // The list of attribute names (keys) to include in the chart
              fields: fields
            }
          }]
        };
      `,
        title: "Educational Attainment",
      },
    },
  ],
};
```

この要素を使用して、集計されたデータ値で構成されるグラフやその他のコンテン ツタイプを作成することもできます。これは、 [FeatureReductionCluster](https://developers.arcgis.com/javascript/latest/references/core/layers/support/FeatureReductionCluster/) のポップアップで特に役立ちます。以下の例では、Arcade 式で定義できるさまざまなコンテン ツタイプについて説明します。


{{< details title="HTML List" closed="true" >}}   
この例では、すべての値が Arcade 式から導出された、番号付きリストをポップアップ内のリッチテキスト要素として表示する方法を示します。番号付きリストを作成するには、 Arcade 式で次のように記述します。

  1. `GroupBy` を使用して、クラスター内の各燃料タイプごとの件数をクエリーします。
  2. 総数に基づいて種類を並べ替えます。
  3. 種類を順に処理し、種類とフィーチャ数を表示する順序付き HTML リストを作成します。
  4. [popupElement](https://developers.arcgis.com/web-map-specification/objects/popupElement/)
  の仕様で定義されているリッチ テキスト要素としてリストを返します。
  <img src="https://apps.esrij.com/arcgis-dev/guide/img/Arcade/arcade-popup-html-list-map.png" alt="燃料種類　使用量多い順リスト">


<small>世界の発電所。クラスターをクリックすると、そのクラスター内で発電に使用されているすべての燃料の種類の一覧が表示されます。燃料の種類は、使用量が多い順にリスト表示されます。</small>

``` js
let popupTemplate = {
  title: "Power plant summary",
  content: [
    {
      type: "text",
      text: "The following list describes the number of power plants used to generate power for each fuel type in this cluster.",
    },
    {
      type: "expression",
      expressionInfo: {
        expression: `
          Expects($aggregatedFeatures, "fuel1")

          var statsFS = GroupBy($aggregatedFeatures,
            [
              { name: 'Type', expression: 'fuel1'},
            ],
            [  // statistics to return for each fuel type
              { name: 'num_features', expression: '1', statistic: 'COUNT' }
            ]
          );
          var ordered = OrderBy(statsFs, 'num_features DESC');

          var list = "<ol>";

          for (var group in ordered){
            list += \`<li>\${group.Type} (\${Text(group.num_features, "#,###")})</li>\`
          }
          list += "</ol>";

          return {
            type: "text",
            text: list
          }
        `,
        title: "Total Capacity List",
      },
    },
  ],
};
```
{{< /details >}}


{{< details title="Fields table" closed="true" >}}Fields table
この例では、すべての値が Arcade 式から導出された、順序付きリストをフィールド ポップアップ要素として表示する方法を示します。フィールド要素を作成するには、Arcade 式で次の操作を行います。

  1. 空の `fieldsInfos` 配列と空の `attributes` ディクショナリーを作成します。`attributes` ディクショナリーには、ポップアップに表示する計算結果が格納されます。
  2. `GroupBy` を使用して、クラスター内の各燃料タイプの電力容量を合計します。
  3. 各燃料タイプを総容量の順に並べ替えます。
  4. 各燃料タイプを順に処理し、各タイプを属性として追加します。その際、総容量を属性の値として設定します。
  5. 燃料タイプを `fieldsInfos` 配列に追加します。
  6. [popupElement](https://developers.arcgis.com/web-map-specification/objects/popupElement/) の仕様で定義されている通り、このリストを fields コンテンツ要素として返します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/Arcade/arcade-popup-fields-table-map.png" alt="燃料種類 総出力大きい順">

<small>世界の発電所。クラスターをクリックすると、そのクラスター内で発電に使用されているすべての燃料の種類を一覧で確認できます。燃料の種類は、総出力（MW）の大きい順に表示されます。</small>

``` js
let popupTemplate = {
  title: "Power plant summary",
  content: [
    {
      type: "text",
      text: "The following table describes the total megawatt capacity of power plants used to generate power for each fuel type in this cluster.",
    },
    {
      type: "expression",
      expressionInfo: {
        expression: `
          Expects($aggregatedFeatures, "fuel1", "capacity_mw")
          var attributes = {};
          var fieldInfos = [];

          var statsFS = GroupBy($aggregatedFeatures,
            [
              { name: 'Type', expression: 'fuel1'},
            ],
            [  // statistics to return for each unique category
              { name: 'capacity_total', expression: 'capacity_mw', statistic: 'SUM' }
            ]
          );
          var ordered = OrderBy(statsFs, 'capacity_total DESC');

          for(var f in ordered){
            var type = f.Type;
            attributes[type] = Text(f.capacity_total, "#,### mW");
            Push(fieldInfos, {
              fieldName: type
            });
          }

          return {
            type: "fields",
            attributes: attributes,
            fieldInfos: fieldInfos,
          }
        `,
        title: "Table of fuel types",
      },
    },
  ],
};
```
{{< /details >}}



{{< details title="Pie chart" closed="true" >}}      
この例では、円グラフのすべての値が Arcade 式から導出される、メディアポップアップ要素としての円グラフを作成する方法を示します。グラフを作成するには、Arcade 式で次の操作を行います。
　
  1. 空の `fieldNames`配列と空の `attributes `ディクショナリーを作成します。`attributes` ディクショナリーには、チャートの各スライスの値が含まれます。
  2. `Distinct` を使用して、クラスター内の各燃料タイプを抽出します。
  3. 各燃料タイプを順に処理し、各タイプを属性として追加するとともに、その総数を属性の値として設定します。
  4. 燃料タイプを `fieldNames` 配列に追加します。
  5. [popupElement](https://developers.arcgis.com/web-map-specification/objects/popupElement/) の仕様で定義されたメディアコンテンツ要素を定義するディクショナリーを返します。この要素には、属性と、チャートに含める `fieldNames` の配列を含む `piechart` mediaInfo オブジェクトが含まれている必要があります。 

<img src="https://apps.esrij.com/arcgis-dev/guide/img/Arcade/arcade-popup-pie-chart-map.png" alt="発電所数 円グラフ">


<small>世界の発電所。クラスターをクリックすると、そのクラスター内の燃料種別ごとの発電所数を円グラフで表示します。</small>

``` js
let popupTemplate = {
  title: "Power plant summary",
  content: [
    {
      type: "expression",
      expressionInfo: {
        expression: `
          Expects($aggregatedFeatures, "fuel1")
          var attributes = {};
          var fieldNames = [];

          var types = Distinct($aggregatedFeatures, "fuel1");

          for(var t in types){
            var type = t.fuel1;
            Push(fieldNames, type);
            attributes[type] = Count(Filter($aggregatedFeatures, "fuel1 = @type" ));
          }

          return {
            type: "media",
            attributes: attributes,
            title: "Total power plants",
            mediaInfos: [{
              type: "piechart",
              value: {
                fields: fieldNames
              }
            }]
          }
        `,
        title: "Total Power Plants Pie Chart",
      },
    },
  ],
};
```
{{< /details >}}


## 可視化
- 仕様：[Visualization profile ](https://developers.arcgis.com/arcade/profiles/visualization/)<br>
- ライブ サンプル：[Arcade を使用したカスタム可視化の作成](https://developers.arcgis.com/javascript/latest/sample-code/visualization-arcade/)

[Visualization プロファイル](https://developers.arcgis.com/arcade/profiles/visualization/)において、Arcade を使用すると、レイヤー内の各フィーチャの値を実行時に計算し、その値をデータ駆動の可視化に活用することができます。これは、レイヤー内の単一フィールドに基づいてデータ駆動の `可視化` を作成する代替アプローチとなります。これを実現するには、[ClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/references/core/renderers/ClassBreaksRenderer/#valueExpression)、[UniqueValueRenderer](https://developers.arcgis.com/javascript/latest/references/core/renderers/UniqueValueRenderer/#valueExpression)、または[色](https://developers.arcgis.com/javascript/latest/references/core/renderers/visualVariables/ColorVariable/#valueExpression)、[サイズ](https://developers.arcgis.com/javascript/latest/references/core/renderers/visualVariables/SizeVariable/#valueExpression)、[不透明度](https://developers.arcgis.com/javascript/latest/references/core/renderers/visualVariables/OpacityVariable/#valueExpression)、[回転](https://developers.arcgis.com/javascript/latest/references/core/renderers/visualVariables/RotationVariable/#valueExpression)といった視覚変数のプロパティに、`field`/`normalizationField` を参照する代わりに Arcade 式を `valueExpression` プロパティへ渡します。また、シンボルの `primitiveOverrides` 内の `valueExpressionInfo.expression` プロパティを使用して、Arcade で CIM シンボルのプロパティを上書きすることもできます。

 ClassBreaksRenderer や視覚変数で使用する場合、式は `$feature` を使用してフィーチャの属性にアクセスでき、数値として評価される必要があります。 UniqueValueRenderer では、式は文字列または数値のいずれかとして評価されます。

次のスニペットでは、米国の郡を表すフィーチャ レイヤーをマップに追加しています。このサービスには、各郡の共和党支持者、民主党支持者、および無所属 / 無党派の有権者の数を識別する 3 つのフィールドがあります。どの政党の支持者が他よりも多いかに基づいて各郡の色を決定する Arcade 式を作成できます。

まず、一意の ID を持つスクリプト タグ内に Arcade 式を記述します。

``` html
<script type="text/plain" id="winning-party">
  // Write the expression and reference the value
  // of each field with a meaningful variable name within
  // the expression. Then calculate the max number with
  // the Max() function and use Decode() to return a string
  // value representing the party whose field value matches
  // the max value.

  var republican = $feature.MP06025a_B;
  var democrat = $feature.MP06024a_B;
  var independent = $feature.MP06026a_B;
  var parties = [republican, democrat, independent];
  // Decode() and Max() are built-in Arcade functions
  return Decode( Max(parties),
    republican, 'republican',
    democrat, 'democrat',
    independent, 'independent',
    'n/a');
</script>
```

次に、`document.getElementById()` を使用して、UniqueValueRenderer の [valueExpression](https://developers.arcgis.com/javascript/latest/references/core/renderers/UniqueValueRenderer/#valueExpression) プロパティに式を文字列値として設定します。

``` js
// Assign the expression to the `valueExpression` property and
// set up the unique value infos based on the decode values
// you set up in the expression.

const winnerArcade = document.getElementById("winning-party").text;

const renderer = new UniqueValueRenderer({
  valueExpression: winnerArcade,
  valueExpressionTitle: "Counties by dominant party among registered voters",
  uniqueValueInfos: [
    {
      value: "democrat",
      symbol: createSymbol("#00c3ff"),
      label: "Democrat",
    },
    {
      value: "republican",
      symbol: createSymbol("#ff002e"),
      label: "Republican",
    },
    {
      value: "independent",
      symbol: createSymbol("#faff00"),
      label: "Independent/non-affiliated",
    },
  ],
});
```

また、レンダラーに不透明度の視覚変数を追加することで、各郡における主要政党の相対的な勢力を可視化することもできます。ある特定の政党の支持者が多い郡は不透明度が高く描画され、各政党の支持者の割合が比較的均等な郡は不透明度が低く描画されます。

まず、 `<script>` タグ内に式を記述します。

``` html
<script type="text/plain" id="strength">
  // Write the expression and reference the value
  // of each field with a meaningful variable name within
  // the expression. Then calculate the max number with
  // the Max() function and the total using Sum().
  // Calculate the share of the max population within the
  // county. This value will be between 33 - 100 and will
  // be used to determine the feature's opacity.
  // Note the value is explicitly returned; it could also
  // be implicitly returned like the previous example

  var republican = $feature.MP06025a_B;
  var democrat = $feature.MP06024a_B;
  var independent = $feature.MP06026a_B;
  var parties = [republican, democrat, independent];
  var total = Sum(parties);
  var max = Max(parties);

  return (max / total) * 100;
</script>
```

その後、JavaScript 内で文字列として参照します。

``` js
// Assign the expression to the `valueExpression` property and
// set up the unique value infos based on the decode values
// you set up in the expression.

const strengthArcade = document.getElementById("strength").text;

const opacityVV = {
  type: "opacity",
  valueExpression: strengthArcade,
  stops: [
    { value: 33, opacity: 0.1 },
    { value: 50, opacity: 1.0 },
  ],
};

// Add the visual variable to the renderer

renderer.visualVariables = [opacityVV];
```

[Arcade を使用したカスタム可視化の作成](https://developers.arcgis.com/javascript/latest/sample-code/visualization-arcade/)サンプルをご覧いただくと、この例を実際に確認できます。

## フォーム
Arcade には、2 つのフォーム プロファイルが実装されています。

- [Form Constraint](#フォームの制約) - フォーム内のフィールドを表示するか、編集可能か、または必須かを指定するために使用します。
- [Form Calculation](#フォームの計算) - 他のフィールドからの入力に基づいて、条件に応じてフィールドの値を計算するために使用します。

### フォームの制約
- 仕様：[ Form Constraint profile](https://developers.arcgis.com/arcade/profiles/form-constraint/)
- ライブ サンプル：[高度な属性編集](https://developers.arcgis.com/javascript/latest/sample-code/editing-featureform-fieldvisibility/)、[フィーチャ属性の更新](https://developers.arcgis.com/javascript/latest/sample-code/editing-groupedfeatureform/)

[Form Constraint プロファイル](https://developers.arcgis.com/arcade/profiles/form-constraint/)は [FeatureForm](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-feature-form/) コンポーネントに実装されており、編集ワークフロー中にフィールドを表示するかどうか、必須とするかどうか、編集を可能にするかどうかを指定できます。たとえば、さまざまなフィールド構成で指定されたすべてのフィールドを表示する代わりに、可視性の Arcade 式を使用して、特定のフィールドを条件付きで表示するように設定できます。可視性式では、`$feature` を使用してフィーチャの属性にアクセスでき、`Boolean` 値を返す必要があります。

表示は、[ExpressionInfo](https://developers.arcgis.com/javascript/latest/references/core/form/ExpressionInfo/) オブジェクトの [expression](https://developers.arcgis.com/javascript/latest/references/core/form/ExpressionInfo/#expression) プロパティで定義されます。式情報は [FormTemplate.expressionInfos](https://developers.arcgis.com/javascript/latest/references/core/form/FormTemplate/#expressionInfos) プロパティに設定されます。フォーム [Element](https://developers.arcgis.com/javascript/latest/references/core/form/elements/Element/) の可視性を条件付きで設定するには、要素の [visibilityExpression](https://developers.arcgis.com/javascript/latest/references/core/form/elements/Element/#visibilityExpression) プロパティで式名を参照する必要があります。

このプロファイルは、[requiredExpression](https://developers.arcgis.com/javascript/latest/references/core/form/elements/FieldElement/#requiredExpression) および [editableExpression](https://developers.arcgis.com/javascript/latest/references/core/form/elements/FieldElement/#editableExpression) プロパティでも実装されています。これらのプロパティを使用すると、フィールドが必須であるか、編集可能であるかを指定できます。

以下の例では、2 番目のフィールド設定により、課題のステータスというラベルの付いたフィールドが表示されます。3 番目のフィールドは、`resolution` の `status` が `Completed` であり、かつ `resolution` フィールドに値がある場合に表示されます。

``` js
const formTemplate = new FormTemplate({
  title: "Inspector report",
  description: "Enter all relevant information below",
  elements: [
    new FieldElement({
      fieldName: "inspector",
      label: "Inspector name",
    }),
    new FieldElement({
      fieldName: "status",
      label: "Issue status",
    }),
    new FieldElement({
      fieldName: "resolution",
      label: "Resolution",
      // expression defined below
      visibilityExpression: "resolutionVisible",
    }),
  ],
  expressionInfos: [
    {
      name: "resolutionVisible",
      title: "Resolution if status is completed",
      expression: "$feature.status == 'Completed' && !IsEmpty($feature.resolution)",
    },
  ],
});
```

### フォームの計算

- 仕様：[Form Calculation profile](https://developers.arcgis.com/arcade/profiles/form-calculation/)

[Form Calculation プロファイル](https://developers.arcgis.com/arcade/profiles/form-calculation/)は [FeatureForm](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-feature-form/) コンポーネントに実装されており、編集ワークフロー中に条件に応じてフィールド値を計算することができます。`$feature`でフィーチャの属性、`$originalFeature`で元のフィーチャの属性、`$editcontext.editType` で編集タイプにアクセスできます。式は `Text`、`Number`、または `Date` 値を返す必要があります。

表示は、[ExpressionInfo](https://developers.arcgis.com/javascript/latest/references/core/form/ExpressionInfo/) オブジェクトの [expression](https://developers.arcgis.com/javascript/latest/references/core/form/ExpressionInfo/#expression) プロパティで定義されます。ExpressionInfo オブジェクトは、[FormTemplate.expressionInfos](https://developers.arcgis.com/javascript/latest/references/core/form/FormTemplate/#expressionInfos) プロパティに設定されます。他のフォーム入力内容に基づいてフォーム要素の値を条件付きで計算するには、[FieldElement](https://developers.arcgis.com/javascript/latest/references/core/form/elements/FieldElement/) の [valueExpression](https://developers.arcgis.com/javascript/latest/references/core/form/elements/FieldElement/#valueExpression) プロパティでその式の `name` を参照する必要があります。

以下の例では、最初のフィールドはフィーチャのジオメトリーに基づいて計算されます。最後のフィールド `FullName` は、`InspectorFirst` および `InspectorLast` の値に基づいて計算されます。

``` js
const formTemplate = new FormTemplate({
  title: "Inspector report",
  description: "Enter all relevant information below",
  elements: [
    new FieldElement({
      fieldName: "Area",
      label: "Area (square meters)",
      // expression defined in expressionInfos
      valueExpression: "area"
    }),
    new FieldElement({
      fieldName: "InspectorFirst",
      label: "First Name"
    })
    new FieldElement({
      fieldName: "InspectorLast",
      label: "Last Name"
    })
    new FieldElement({
      fieldName: "FullName",
      label: "Full Name",
      // expression defined in expressionInfos
      valueExpression: "fullName"
    }),
  ],
  expressionInfos: [{
    name: "area",
    title: "Area (square meters)",
    expression: "Round(AreaGeodetic($feature, 'square-meters'), 2)"
  }, {
    name: "fullName",
    title: "Inspector full name",
    expression: `
      IIF(!IsEmpty($feature.InspectorFirst) && !IsEmpty($feature.InspectorLast)){
        return $feature.InspectorFirst + " " + $feature.InspectorLast;
      }
    `
  }]
});
```

## フィーチャのソート

- 仕様：[Feature Z profile ](https://developers.arcgis.com/arcade/profiles/feature-z/)
- サンプル：[フィーチャの並べ替え順序の設定](https://developers.arcgis.com/javascript/latest/sample-code/layers-feature-sort-order/)

2D マップ ビューでは、 Arcade 式を使用して、ビュー内でフィーチャを描画する順序を決定できます。フィーチャの並べ替えは、 [FeatureLayer](https://developers.arcgis.com/javascript/latest/references/core/layers/FeatureLayer/) の [orderBy](https://developers.arcgis.com/javascript/latest/references/core/layers/FeatureLayer/#orderBy) プロパティで設定します。フィーチャの描画順序を並べ替える式は、[Feature Z プロファイル](https://developers.arcgis.com/arcade/profiles/feature-z/)の仕様に従う必要があります。式では `$feature` を使用して属性を参照でき、数値または日付値を返す必要があります。

``` js
// Orders features by storm warning duration in descending order.
// Warnings with longer durations will be
// rendered on top of warnings with shorter durations.
layer.orderBy = [
  {
    valueExpression: "DateDiff($feature.Watch_End, $feature.Watch_Start, 'hours' )",
    order: "descending",
  },
];
```

## Z 値

- 仕様：[Feature Z profile](https://developers.arcgis.com/arcade/profiles/feature-z/)
- サンプル：[標高オプション](https://developers.arcgis.com/javascript/latest/sample-code/scene-elevationinfo/)

3D シーンビューでは、 Arcade 式を使用してフィーチャにカスタム Z 値を設定できます。フィーチャのジオメトリー内に Z 値が含まれている場合でも、属性値に基づいて Z 値を計算または置換したり、Z 値を使用した数式から導出したりしたい場合があります。また、ジオメトリー内に Z 値を含んでいないものの、属性フィールドに Z 関連の情報が保存されているフィーチャもあるでしょう。このような場合、[featureExpressionInfo.expression](https://developers.arcgis.com/javascript/latest/references/core/layers/CSVLayer/#elevationInfo)プロパティに式を設定できます。Z 値を上書きするための式は、[Feature Z プロファイル](https://developers.arcgis.com/arcade/profiles/feature-z/)の仕様に従う必要があります。式では `$feature` を使用して属性を参照でき、数値を返す必要があります。例として、[標高オプション](https://developers.arcgis.com/javascript/latest/sample-code/scene-elevationinfo/)のサンプルでは、Arcade を使用してポイントの Z 値を変更する方法を示しています：

``` js
layer.elevationInfo = {
  mode: "absolute-height",
  featureExpressionInfo: {
    expression: "Geometry($feature).z + $feature.HEIGHT",
  },
  unit: "meters",
};
```

上記の例では、最終的なグラフィックの標高を設定するために、ジオメトリーの Z 値にフィールド属性 `HEIGHT` が追加されています。ポリラインやポリゴンのフィーチャの場合、各フィーチャのすべての頂点は、`expression` から返される同じ Z 値を使用します。

## 関連するサンプルとリソース

[Create a custom visualization using Arcade](https://developers.arcgis.com/javascript/latest/sample-code/visualization-arcade/)  
[Reference Arcade expressions in PopupTemplate](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade/)  
[Summarize intersecting points in a popup](https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade-groupby/)  
[Clustering - filter popup features](https://developers.arcgis.com/javascript/latest/sample-code/featurereduction-cluster-popup-filter/)  
[Multi-line labels](https://developers.arcgis.com/javascript/latest/sample-code/labels-multiline/)  
[Arcade-driven visualizations](https://developers.arcgis.com/javascript/latest/visualization/best-practices/arcade/)
