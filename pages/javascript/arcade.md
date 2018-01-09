<a href="https://developers.arcgis.com/arcade/" target="_blank">Arcade</a> とは ArcGIS プラットフォームで使用するために作られた軽量でセキュアな条件式のためのスクリプト言語です。
他の一般的な式言語のように、数学的な計算や評価ロジックの命令語を利用できます。
ArcGIS プラットフォームにおける独自のデータ可視化とラベル表現の作成のためにデザインされており、独自の命令語を <a href="https://www.esrij.com/products/arcgis-pro/" target="_blank">ArcGIS Pro</a> や <a href="https://www.esrij.com/products/arcgis-online/" target="_blank">ArcGIS Online</a>、<a href="https://developers.arcgis.com/arcgis-runtime/" target="_blank">ArcGIS Runtime SDK</a>、<a href="https://developers.arcgis.com/javascript/" target="_blank">ArcGIS API for JavaScript</a> で編集・共有・実行することができます。

Arcade が他のスクリプト言語に比べてユニークなのは、<a href="https://developers.arcgis.com/arcade/function-reference/geometry_functions/" target="_blank">ジオメトリ関数</a>を含んでいるところです。
ジオメトリ関数は、面積や長さの計算、トポロジ リレーションシップのテスト、そしてシンプルなオーバーレイの実行を可能にします。
現在のリリースでは、ジオメトリの作成と参照が可能です。
しかし、<a href="https://developers.arcgis.com/arcade/guide/release-notes/#version-13">Arcade バージョン 1.3</a> で導入されたジオメトリの操作は、4.x 系の ArcGIS API for JavaScript ではサポートされていません。

> <a href="https://developers.arcgis.com/arcade/guide/release-notes/#version-13">Arcade バージョン 1.3</a> で導入されたジオメトリ関数は、4.x 系の ArcGIS API for JavaScript ではサポートされていません。3.x 系の API では、バージョン 3.23 以上で使用できます。将来的には、4.x でのサポートを予定しています。

## シンタックス

Arcade のシンタックスは JavaScript ライクに変数の宣言やロジックの実行、関数の記述などができます。
しかし、二つの言語間にはいくつか異なる部分があります。
記述方法の詳細については、<a href="https://developers.arcgis.com/arcade/" target="_blank">Arcade ドキュメント（英語）</a>をご参照ください。
また、<a href="https://developers.arcgis.com/arcade/playground/" target="_blank">ArcGIS Arcade Playground</a> では独自のスクリプトをテスト実行するための環境を提供していますので、アクセスしてみてください。

Arcade には外部データにアクセスするためのグローバル変数が用意されています。
`$feature` というグローバル変数は、フィーチャ レイヤー内のフィーチャが持つフィールド値にアクセスするために使用します。
以下のシンタックスを使用することでフィールド値を参照できます。

```js
$feature.fieldName
```

このように、ランタイムでフィールド値を使用したシンプルな計算を容易に実行できます。

```js
// 民主党候補者に投票した人の割合（%）を計算
($feature.DEM_VOTES / $feature.TURNOUT ) * 100
```

Arcade はコンテクスト内、または Arcade が理解されるプロファイル内でのみ実行可能です。JavaScript アプリでは、式は常に文字列の値として参照されます。Arcade は、シンプルな一行の式、または、より複雑な複数行からなる式として書かれます。

一行の式を書くとき、シンプルにダブルまたはシングル クォーテーションで囲みます。

```js
renderer.valueExpression = "Round( ($feature.AGE_18UP / $feature.TOTAL_POP) * 100 )";
```

複数行に渡る式を書くとき、JavaScript の外に `<script>` タグを分け、タイプを `text/plain` に設定し、JavaScript から参照できるようユニークな ID を付与して配置することが推奨されます。

```html
<script type="text/plain" id="adult-population">
  // 複数行の式を記述
</script>
```

そして、JavaScript は、`document.getElementById()` メソッドを呼ぶことで、文字列として参照します。

```js
renderer.valueExpression = document.getElementById("adult-population").text;
```

下記のスニペットや <a href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-arcade/index.html" target="_balnk">Create a custom visualization using an Arcade expression サンプル</a>を参照ください。

## プロファイル

Arcade はいくつかのプロファイルにおける使用のためにデザインされました。プロファイルとは、理解し使用される命令語のコンテクストです。ArcGIS API 4.5 for JavaScript では、ビジュアライゼーション、ポップアップ、ラベリング（3D のみサポート）の３つのプロファイルをサポートしています。3D では、Arcade を使用することにより、フィーチャの標高を計算することも可能です。

### ビジュアライゼーション

ビジュアライゼーション プロファイルにおいて、Arcade を使ってランタイムで <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html" target="_blank">`FeatureLayer`</a> (フィーチャ レイヤー) あるいは <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-SceneLayer.html" target="_blank">`SceneLayer`</a> (シーン レイヤー) 内の各フィーチャが持つ値を計算することができます。
また、データドリブンな可視化のための基盤として、それらの値を使用することができます。
これは、レイヤー内の単一フィールド値をもとにしたデータ ビジュアライゼーションを作成するための別のアプローチになります。
これによって、Arcade 命令語は `field`/`normarizationField` あるいは JavaScript 関数の代わりに <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html#valueExpression" target="_blank">`ClassBreaksRenderer`</a> (数値分類) や <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#valueExpression" target="_blank">`UniqueValueRenderer`</a> (個別値分類)、その他の可視化変数 (<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#ColorVisualVariable" target="_blank">`color`</a>, <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#SizeVisualVariable" target="_blank">`size`</a>, <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#OpacityVisualVariable" target="_blank">`opacity`</a>, <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#RotationVisualVariable" target="_blank">`rotation`</a>) の `valueExpression` プロパティに渡されます。


> Arcade は `FeatureLayer` と `SceneLayer` におけるビジュアライゼーションの作成のみサポートします。
> 
> `ClassBreaks` と `UniqueValueRenderer` を利用できる他のレイヤー (例えば、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html" target="_blank">`MapImageLayer`</a>) は Arcade をサポートしていません。

`ClassBreaksRenderer` あるいはその他の可視化変数を使用する際、命令語は必ず数値を評価してください。
`UniqueValueRenderer` は文字列と数値のいずれも評価して構いません。

以下の例では、Arcade 命令語が `UniqueValueRenderer` の <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html#valueExpression" target="_blank">`valueExpression`</a> プロパティを使用しています。
アメリカの州を表すフィーチャ レイヤーのためにビジュアライゼーションを作成します。
このサービスは各州における共和党、民主党、無所属に対する得票数という 3 つのフィールドを持ちます。
そこで、得票数で勝った党を各州で可視化したいとします。
サービスには優勢な党を示すフィールドが含まれていません。
したがって、Arcade を使ってその党を明らかにしましょう。

```js
// まず、各フィールドの属性値の参照と変数宣言を記述しています。
// Max() 関数を使って最大数を算出し、
// 最大数を持つ党を判定するために Decode() 関数を使います。

var arcade = "var republican = $feature.MP06025a_B;"
  + "var democrat = $feature.MP06024a_B;"
  + "var independent = $feature.MP06026a_B;"
  + "var parties = [republican, democrat, independent];"
  // Decode() と Max() は Arcade 組み込みの関数です。
  + "Decode( Max(parties),"
  + "        republican, 'republican',"
  + "        democrat, 'democrat',"
  + "        independent, 'independent',"
  + "        'n/a');";

// `valueExpression` プロパティに Arcade で記述した式を割り当て、
// Decode() で処理された値をもとに個別値の情報を設定します。

var renderer = new UniqueValueRenderer({
  valueExpression: arcade,
  valueExpressionTitle: "Counties by dominant party among registered voters",
  uniqueValueInfos: [{
    value: "democrat",
    symbol: createSymbol("#00c3ff"),
    label: "Democrat"
  }, {
    value: "republican",
    symbol: createSymbol("#ff002e"),
    label: "Republican"
  }, {
    value: "independent",
    symbol: createSymbol("#faff00"),
    label: "Independent/non-affiliated"
  }]
});
```

また、各州における優勢な党の相対的な力を示すために `renderer` に対して `opacity` の可視化変数を追加します。
より多くの人々が特定の党に投票している州を高い透過率でし、各党に対する得票数が拮抗している州は低い透過率で描画してみましょう。

```js
// まず、各フィールドの属性値の参照と変数宣言を記述しています。
// Max() 関数を使って最大数を、
// Sum() 関数ですべての党の得票数の合計値を算出します。
// 合計値に対するもっとも多くの投票を得た党の得票数の割合をパーセントで返します。

var opacityArcade = "var republican = $feature.MP06025a_B;"
  + "var democrat = $feature.MP06024a_B;"
  + "var independent = $feature.MP06026a_B;"
  + "var parties = [republican, democrat, independent];"
  + "var total = Sum(parties);"
  + "var max = Max(parties);"
  + "return (max / total) * 100;";

// `valueExpression` プロパティに Arcade で記述した式を割り当て、
// 返り値であるパーセントに応じて透過率を設定します。

var opacityVV = {
  type: "opacity",
  valueExpression: opacityArcade,
  stops: [
    { value: 33, opacity: 0.1 },
    { value: 50, opacity: 1.0 }
  ]
};

// 先に作成したレンダラーに透過率による可視化変数を追加します。

renderer.visualVariables = [ opacityVV ];
```

実際にビジュアライゼーションを行った結果はサンプル アプリ (<a href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-arcade/index.html" target="_blank">Create a custom visualization using Arcade</a>) で確認してみてください。

### ポップアップ
Arcadeを <a href=https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html target="_blank">` PopupTmplate `</a> の<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#content" target="_blank">`コンテンツ `</a> 内で参照することもできます。ビジュアライゼーション プロファイルと同様に、 <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html" target="_blank">`FeatureLayer `</a> インスタンスに属性値として存在しないデータを表示する場合に便利です。
例えば、サンプルアプリ （ <a href="https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade/index.html" target="_blank">`Reference Arcade expressions in PopupTemplate`</a> ）では、各米国郡の労働統計を含むレイヤーを表示します。いくつかの属性には、失業率、人口、および労働人口が含まれます。労働参加率の属性は含まれていません。 Arcade を使用して、実行時に算出することができます。

```js  
// 労働参加率を計算
Round(($feature.CIVLBFR_CY / $feature.POP_16UP)*100,2)
```

この式から返された値を使用して、レイヤーを視覚化したり、レイヤーの <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#popupTemplate" target="_blank">`PopupTmplate`</a> に表示したりすることができます。ポップアップで値を表示するには、PopupTmplate の <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#expressionInfos" target="_blank">`expressioninfo`</a> プロパティで値を参照し、 ` name ` と`  title` を割り当てる必要があります。

```js
layer.popupTemplate = {　　
  expressionInfos: [{　　
    name: "participation-rate",　　
    title: "% of population 16+ participating in the labor force",　　
    expression: "Round(($feature.CIVLBFR_CY / $feature.POP_16UP)*100,2)"　　
  }],　　
  content: "In {NAME} county, {expression/participation-rate}% of the population"　　
    + " participates in the labor force."　　
};　　
```

式が `expressionInfos` プロパティに存在すると、 PopupTemplate のコンテンツ内の`{expession/expression-name}` プレースホルダー テンプレートを使用して式から返された値を参照できます。
ポップアップのコンテンツは、ユーザーが Greenlee , AZ を表現しているフィーチャーをクリックした後に次のように表示されます。

 <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/Arcade/arcade-popup-text.png" width="450px" >


また、PopupTmplate　のコンテンツ の <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#fieldInfos" target="_blank">`fieldinfos`</a>　プロパティの中で Arcade から返された値を参照できるため、表形式で表示することもできます。オブジェクトの ` fieldName ` プロパティで式の名前を参照するだけです。なお、 `expression/expression-name` シンタックスを使用してください。

```js
layer.popupTemplate = {
  expressionInfos: [{
    name: "participation-rate",
    title: "% of population 16+ participating in the labor force",
    expression: "Round(($feature.CIVLBFR_CY / $feature.POP_16UP)*100,2)"
  }],
  content: [{
    type: "fields",
    fieldInfos: [{
      fieldName: "expression/participation-rate"
    }]
  }]
};
```

ポップアップには以下のように表示されます。
  
 <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/Arcade/arcade-popup-table.png" width="450px" >

PopupTmplate の <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#fieldInfos" target="_blank">`fieldinfos`</a> プロパティの書式設定オプションを利用して、式から返された数値を書式設定することもできます。
このワークフローはサンプルアプリ（<a href="https://developers.arcgis.com/javascript/latest/sample-code/popuptemplate-arcade/index.html" target="_blank">`PopupTemplate Reference Arcade`</a>）でご覧ください。

### ラベリング

> ラベリングは、現在、3D <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html" target="_blank">SceneView</a> のみサポートしています。2D <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html" target="_blank">MapView</a> でのラベリングは将来のリリースで追加される予定です。

Arcade は、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html" target="_blank">FeatureLayer</a> または <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-SceneLayer.html" target="_blank">SceneLayer</a> に含まれるフィーチャのラベルの式を作成するためにも使用されます。バージョン 4.5 からは、フィーチャをラベリングするためにサポートされた唯一の方法です。

少なくともひとつの <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html" target="_blank">LabelClass</a> をレイヤーの <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#labelingInfo" target="_blank">LabelingInfo</a> プロパティへ追加し、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#labelsVisible" target="_blank">labelsVisible</a> プロパティを `true` へ設定する必要があります。式は、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html" target="_blank">LabelClass</a> の <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html#labelExpressionInfo" target="_blank">labelExpressionInfo</a> オブジェクトの `expression` プロパティへ文字列として渡します。

```js
// レイヤーのフィールド値を返す
// フィールド値は各フィーチャのラベルに使用される
var arcade = "$feature.STATION_NAME";

// new LabelClass() の autocast オブジェクト
var labelClass = {
  // 式を labelExpressionInfo の `expression` プロパティに設定する
  labelExpressionInfo: {
    expression: arcade
  },
  labelPlacement: "below-right",
  minScale: 2500000,
  symbol: {
    type: "label-3d",
    symbolLayers: [{
      type: "text",
      material: { color: "white" },
      halo: {
        color: "black",
        size: 1
      },
      size: 8
    }]
  }
};

// LabelClass を FeatureLayer へ設定
featureLayer.labelingInfo = [ labelClass ];
featureLayer.labelsVisible = true;
```

Arcade で書かれたラベル式は、数学的で論理的な操作を実行する複数行に渡るもっと複雑な式になるかもしれません。例えば、<a href="https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-labeling-3d/" target="_blank">Label features using Arcade expressions サンプル</a>は、より複雑な複数行に渡るラベル式を示しています。この式は２つの数値フィールドの値を変数に入れ、評価し、文字列を返します。Arcade の <a href="https://developers.arcgis.com/arcade/function-reference/logical_functions/#when" target="_blank">When()</a> は、風向き（0 - 360 度）を評価し、`N`、`NE`、`E`、`SE`、`S`、`SW`、`W` または `NW` のいずれかの関連する方角を返します。風力が `0` のとき、方角は返されません。式の最後で、ラベル（WIND 変数の値）を返します。

```html
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

そのほかにも、テキスト整形のロジックを提供するテキスト関数を含む、ラベリングに役立つ多くの関数が用意されています。詳細は <a href="https://developers.arcgis.com/arcade/">Arcade</a> をご参照ください。

## その他のケース

### 標高

3D SceneView では、<a href="https://developers.arcgis.com/arcade/" target="_blank">Arcade</a> を使用してフィーチャごとに独自の標高を設定できます。フィーチャは Z 値を持つことができますが、属性値や Z 値を使用した計算式をもとに高さを演算したい場合に有効です。さらに、Z 値を含まないが、属性フィールドに Z 値に関連する情報を持つデータの場合、<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-CSVLayer.html#elevationInfo" target="_blank">featureExpressionInfo.expression</a> プロパティに式を設定できます。例として、<a href="https://developers.arcgis.com/javascript/latest/sample-code/scene-elevationinfo/index.html" target="_blank">Elevation options</a> サンプルは Arcade を使用してポイント シンボルの高さがどのように変化するのかを示しています。

```js
layer.elevationInfo = {
  mode: "absolute-height",
  featureExpressionInfo: {
    expression: "Geometry($feature).z + $feature.HEIGHT"
  },
  unit: "meters"
};
```

上記の例では、独自の HEIGHT 属性がジオメトリの Z 値として、グラフィックの標高に設定されます。ラインまたはポリゴン フィーチャにおいて、すべてのフィーチャの頂点は `expression` の戻り値の標高を持ちます。

<a href="https://developers.arcgis.com/arcade/playground/" target="_blank">プレイグラウンド</a>では、入力フィーチャ サービスからインポートしたフィールド値をもとに、ブラウザーから式をビルド、デバッグ、テストできます。<a href="https://developers.arcgis.com/arcade/function-reference/text_functions/#Console" target="_blank">Console()</a> 機能を使い、複雑なスクリプトをデバッグすることも可能です。