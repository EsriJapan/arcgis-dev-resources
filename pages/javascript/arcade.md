<a href="https://developers.arcgis.com/arcade/" target="_blank">Arcade</a> とは ArcGIS プラットフォームで使用するために作られた軽量でセキュアな条件式のためのスクリプト言語です。
他の一般的な式言語のように、数学的な計算や評価ロジックの命令語を利用できます。
ArcGIS プラットフォームにおける独自のデータ可視化とラベル表現の作成のためにデザインされており、独自の命令語を <a href="https://www.esrij.com/products/arcgis-pro/" target="_blank">ArcGIS Pro</a> や <a href="https://www.esrij.com/products/arcgis-online/" target="_blank">ArcGIS Online</a>、<a href="https://developers.arcgis.com/arcgis-runtime/" target="_blank">ArcGIS Runtime SDK</a>、<a href="https://developers.arcgis.com/javascript/" target="_blank">ArcGIS API for JavaScript</a> で編集・共有・実行することができます。

Arcade が他のスクリプト言語に比べてユニークなのは、ジオメトリの関数を含んでいるところです。
初期のリリースでは、ジオメトリの作成と参照が可能です。
将来的には、面積・長さの計測やオーバーレイの実行などのジオメトリ関数が追加される予定です。


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


## プロファイル

Arcade はいくつかのプロファイルにおける使用のためにデザインされました。
プロファイルとは、理解し使用される命令語のコンテクストです。
ArcGIS API 4.4 for JavaScript では、ビジュアライゼーションとポップアップコンテンツのプロファイルをサポートしています。
将来的には、ラベリングや、フィーチャ フィルタリングなどを考慮したプロファイルが追加される予定です。

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

## ポップアップ
Arcadeを <a href=https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html target="_blank">` PopupTmplate `</a> の<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#content" target="_blank">`コンテンツ `</a> 内で参照することもできます。ビジュアライゼーションプロファイルと同様に、 <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html" target="_blank">`FeatureLayer `</a> インスタンスに属性値として存在しないデータを表示する場合に便利です。
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

