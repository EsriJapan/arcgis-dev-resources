+++
title = "ルール ベースのモデリング"
description = "ルール ベースのモデリングを学習します。"
Weight = 4
alwaysopen = false
publishDate = 2023-01-11T00:00:00+09:00
draft = false
author = "司馬"
+++


チュートリアル データは、**\[Help\] メニュー** → **\[Download Tutorials
and Examples...\]** を選択し、\[CityEngine Tutorial\]
からダウンロードできます。

*このチュートリアルは、Houseal Lavigne Associates の Devin Lavigne 氏との共同作業で作成されました。*

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-7D9CF3D2-8EAF-4B3C-B65B-24CA0AF5A98F-web.png" title=" " width="500" >}} 

## 概要

CityEngine は「プロシージャル モデリング アプリケーション」と呼ばれ、2D の形状が一連の手順 (CGA ルール ファイル) を経て 3D のモデルになります。CityEngine の強みは CGA (Computer Generated Architecture) にあります。CityEngine のシェープ グラマーである CGA は、建築物の 3D コンテンツを生成するために指定できる独自のプログラミング言語です。基本的には、CGA のルールを形状に割り当てたり、適用したりすることで 3D モデルが作成されます。
3D モデルの複雑さは、CGA のルールとその中の指示によって決まります。単純な CGA ファイルでは、建物のフットプリント 形状を取得し、それを押し出して 3D の形状や集合体にすることができます。
一方、より複雑な CGA ルールでは、集合体のファサードにテクスチャを適用したり、他のパーツに分割して、豊富で詳細な 3D モデルを生成したりすることができます。

CGA を書くことにおいての秘訣の 1 つは、ルールを段階的にオーサリングし、その都度機能を組み込んでいくことです。望ましい結果を得るための計画を立てることは重要ですが、500 行のコードを書いてそのまま進めるわけではありません。むしろ、段階的にルールを構築し、結果をテストしながら進めていくのです。

このチュートリアルでは、単純なフットプリントから一連の 3D 建物を作成するルールのオーサリングについて説明します。


|演習|
|:--|
|・[シーンを開く](#シーンを開く)|
|・[Hello, World!](#hello-world)|
|・[ルールの割り当て](#ルールの割り当て)|
|・[属性の追加](#属性の追加)|
|・[ハンドルの追加](#ハンドルの追加)|
|・[フロア分割の追加](#フロア分割の追加)|
|・[用途別に着色する関数の構築](#用途別に着色する関数の構築)|
|・[定数の作成](#定数の作成)|
|・[レポートの追加](#レポートの追加)|
|・[ダッシュボードの追加](#ダッシュボードの追加)|

## シーンを開く

始めるにはプロジェクトの **scenes** フォルダーから **BasicsOfRules.cej** を開きます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-7436236E-ACAA-4A78-A63A-E54EEFF9432F-web.png" title=" " width="500" >}} 


## Hello, World!

コーディングには、「Hello, World!」呼ばれるものがあります。これは、簡単なコードを書いて簡単なメッセージを出力することで、基本的な構文を確認し、自分のコードが動作していることを確認する方法です。CityEngine での「Hello World!」バージョンは、ランダムな高さの押し出しで、形状に色を適用するシンプルなものです。

最初のルールを作成するために、**rules** フォルダーを右クリックし、**[New] → [CGA Rule File]** に進み、ルールに **DetailedBuilding.cga** と名前をつけます。

まず、使用している CityEngine のバージョン (例えばバージョン 2022.1) を記述したコードの行の下に、以下の行を追加してルールを保存します。
```
@StartRule
Footprint -->
	extrude(rand(10,100))  
	color(1,1,0)
```
**＠StartRule** のアノテーションをつけることで、ピッカーから **Footprint** ルールを利用できるようになります。次の行では、10 から 100 メートルの間でランダムに高さを変えて形状を押し出しています。最後の行では RGB で黄色に着色しています。

## ルールの割り当て

ルールを保存したら、形状を選択してルールを割り当てます (下図参照)。新しいルールを割り当てた後、何も起こらない場合は、**[Generate Models]** ツール (Ctrl+G) をクリックするか、メイン メニューの **[Shapes] → [Generate Models]** をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-DE1D0FC2-F7BF-4AB0-A0BF-C5C5C59E2446-web.png" title=" " width="500" >}} 

## 属性の追加

ルールが動作するようになったので、属性として高さを追加して、ルールにいくつかの追加機能を持たせます。重要なのは段階的な変化であることを忘れないでください。つまり、ゼロから始めるのではなく、すでに始めているルールに変更を加えていくのです。

```
@Group("Building Shell")
@Range(min=0, max=100, stepsize=1)
attr building_height = rint(rand(10,100))

@StartRule
Footprint -->
	extrude(building_height)  
	color(1,1,0)
```
これらの変更により、ランダム化された建物の高さが **building_height** という属性に移動しました。この属性はまだすべての形状で生成されますが、**[Inspector]** ウィンドウでコントロールできる属性に移動されます。また、乱数を最も近い整数に丸める **rint** という新しい組み込み関数も追加されました。

**@Group** アノテーションは **[Inspector]** ウィンドウに表示される属性の場所を整理するのに役立ちます。**@Range** アノテーションは、スライダーの機能を制御します。建物の高さを属性にすることで、各形状の高さを制御するスライダーを持つことができます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-4D22D951-8536-42C6-AC5D-49D1AE40812B-web.png" title=" " width="500" >}} 
これで建物をクリックすると、高さの調整と乱数のオーバーライドができるようになりました。また、スライダーは範囲の最小値と最大値である 0 から100 の間だけになりました。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-0B2E7080-F773-40F0-A873-2FA0597FD89A-web.png" title=" " width="500" >}} 

## ハンドルの追加

ハンドルは属性の機能を拡張し、非常に直感的かつ対話的な方法で制御をシーンにもたらします。

**＠Handle** アノテーションと **Mass** ルールを追加して、モデル内の建物の高さを制御するハンドルを含めることができます。
```
@Group("Building Shell")
@Handle(shape=Mass, axis=y)
@Range(min=0, max=100, stepsize=1)
attr building_height = rint(rand(0,100))

@StartRule
Footprint -->
	extrude(building_height)  
	color(1,1,0)
	Mass
```
モデルを再生成する (CTRL+G) ことを忘れないでください。ハンドルが建物に表示され、高さ属性を調整することができます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-BF966D94-158B-4120-9CBA-69D28DEEC242-web.png" title=" " width="500" >}} 

## フロア分割の追加

ルールの段階的な変更の続きとして、今度は建物をフロアごと (y 軸に沿って) 垂直分割するコードを追加します。

新しい **floor_height** 属性で制御される分割操作で、**Mass** ルールを作成します。デフォルトの単位はメートルのため、以下のコードでは 3.048 メートルと表示されており、**#** で示されたコメントは 10 フィートであることを知らせるためのものです。

```
@Group("Building Shell")
@Handle(shape=Mass, axis=y)
@Range(min=0, max=100, stepsize=1)
attr building_height = rint(rand(10,100))

@Range(min=1, max=25, stepsize=1)
attr floor_height = 3.048	# 10 feet


@StartRule
Footprint -->
	extrude(building_height)  
	color(1,1,0)
	Mass

Mass -->
	split(y) { floor_height : Floor }*
```

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-A0988603-B534-493B-81FB-22FCC97AD816-web.png" title=" " width="500" >}} 
建物の最上階の階高が違うことにお気づきでしょうか。これは、分割が下から始まり上に向かって分割され、すべての分割が行われた後に残ったものが最上階の高さであるためです。

この違いを修正する 1 つの方法は、階高の前にチルダ文字 (~) を追加することです。これは CityEngine にフローティング サイズを使用するように指示し、ソフトウェアが自動的に分割を調整することを可能にします。各フロアの高さは正確には 3.048 メートルではありませんが、すべて等しくなり、余分な部分がなくなります。

```
Mass -->
	split(y) { ~floor_height : Floor }*
```
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-E16372F7-A36C-459D-842C-072C82D5A339-web.png" title=" " width="500" >}} 

## 用途別に着色する関数の構築

まず、**@StartRule** でフットプリントに色を指定した行をコメント アウトします。ルールからルールへと形状が処理される際に何度も色を変更することができますが、色を設定するのは一度だけにすることをおすすめします。

**#color(1,1,0)** というコメントを追加します。

```
@StartRule
Footprint -->
	extrude(building_height)  
	#color(1,1,0)
	Mass
```

関数は、ある処理を実行して値を返すために使用し、再利用できるルーチンまたはコードのかたまりです。土地利用によってフロアを着色するには、適切な色を使用するために呼び出される簡単な関数を構築することができます。そのためには、フロアの位置によって異なる土地利用を選択できるようにするための属性も作成する必要があります。

```
@Group("Building Shell")
@Handle(shape=Mass, axis=y)
@Range(min=0, max=100, stepsize=1)
attr building_height = rint(rand(10,100))
@Range(min=1, max=25, stepsize=1)
attr floor_height = 3.048	# 10 feet

@Group("Land Use")
@Enum("Retail","Office","Multi-Family")
attr use_ground = "Retail"

@Enum("Retail","Office","Multi-Family")
attr use_upper = "Multi-Family"
```

次に属性と **@StartRule** の間に、新しい関数を構築します。以下の関数は、**use**  パラメーターを受け取り、それを評価してファサードの正しい色を返します。**use** パラメーターが一致しない場合は #FFFFFF、つまり白色を渡します。

```
getColor(use) = 		case use == "Retail" : "#FF6633"
				case use == "Office" : "#6699FF"
				case use == "Multi-Family" : "#A97C50" 
				else: "#FFFFFF"
```

最後に 1 階と上階を求め、そのフロアを着色する関数を呼び出すことで、すべてをまとめます。最上階をすべての上階の分割から区別するために、分割を呼び出すたびに作成される **split.index** と **split.total** を使用します。これを行うには、コードを拡張して **Floor** ルールを追加します。**Floor** ルールは、まず条件付きルールである **case** を実行します。**split.index** が 0 の場合は 1 階、それ以外の場合は上階となります。階が決まると、関数が呼び出され、床の色が設定されます。

```
Floor -->
	case split.index == 0: 
		color(getColor(use_ground))
	else:
		color(getColor(use_upper))
```

高さや土地利用の属性を工夫することで、より多様なトポロジを実現できるようになりました。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-6A989C0D-28C3-4146-91C1-1FE8813B0123-web.png" title=" " width="500" >}} 

## 定数の作成

定数を作成することで、計算を行うための静的な数値を作成することができます。これは次のチュートリアルで説明するレポート作成など、さまざまな場面で役立ちます。以下のコードでは、平方メートルから平方フィートを計算したり、建物の住戸数を計算したりするのに役立ちます。しかし、定数はどんなものにも対応でき、コードのどこにでも配置できます。とはいえ、定数はページの先頭付近にまとめることをおすすめします。これらの定数は、CityEngine のデフォルトのメートル法による値 (メートル) を、アメリカのインペリアル法による値 (フィート) に変換することに注意してください。

```
const unitScale = 0.3048			# convert meters to feet
const areaScale = 10.7639			# convert square meters to square feet
const acres = 43560 			# there are 43,560 square feet in an acre
```

## レポートの追加

CityEngine は 3D モデルの生成だけでなく、ルール内で計算を実行してレポートすることで貴重なデータを得ることができます。つまり、計画や開発を可視化するだけでなく、数値レポートを作成することができるため、CityEngine はジオデザインの分野で強力なツールとなります。例えば、延べ床面積 (GFA)、戸数、土地利用構成などの数値を含めることができます。また、モデルや形状を含むプランを変更すると、レポートが自動的に更新されます。

このルールをもとに、実際にデータを報告してみましょう。最初は床面積だけを報告するシンプルなものから始めます。まず、**Floor** ルールを変更して、**Plate** というルールにつなげます。**Plate** ルールでは、ジオメトリをコンポーネント面 **(comp(f))** に分割し、ジオメトリの面積を計算するために **Reporting** ルールに形状の底を渡します。最初に底面の形状を分割する必要があります。そうしないと、すべての形状の表面積が計算に含まれてしまうことに注意してください。

```
Floor -->
	case split.index == 0: 
		color(getColor(use_ground))
		Plate
	else:
		color(getColor(use_upper))
		Plate

Plate -->
	comp(f) { side : Wall | bottom : Reporting | top : Top }

Reporting -->
	report("FloorArea", geometry.area)
```

結果を見るには、ルール ファイルを保存 (Ctrl+S) し、すべての形状を選択 (Ctrl+A) し、**[Generate Model]** (Ctrl+G) をクリックします。

**[Inspector]** ウィンドウで **[Report]** セクションを展開します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-16617997-588E-4478-A6EE-1C39551E5C75-web.png" title=" " width="500" >}} 

このことから、総階数は 117 階、総面積は 85,704.20 平方メートルであることがわかります。床面積を平方フィートに変換するには、**geometry.area** に **areaScale** 定数を掛けるだけで行えます。

```
Reporting -->
	report("FloorArea", geometry.area * areaScale)
```

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-9D510646-7D43-4365-AA81-CD83B59B0FB2-web.png" title=" " width="500" >}}

もし土地利用による面積や、密度や容積率のような重要かつ一般的な都市計画情報を調べたい場合は、ルールにいくつかの簡単な修正を加え、土地利用情報をパラメーターとして渡すことが可能です。**Plate** ルールに **landUse** パラメーターとして土地利用 (**use_ground** と **use_upper**) を渡すようにコードを修正すると、**Reporting** ルールに渡すことができるようになります。

```
Floor -->
	case split.index == 0: 
		color(getColor(use_ground))
		Plate (use_ground)
	else:
		color(getColor(use_upper))
		Plate (use_upper)

Plate(landUse) -->
	comp(f) { side : Wall | bottom : Reporting(landUse) | top : Top }

Reporting(landUse) -->
	report("FloorArea." + landUse, geometry.area * areaScale)
```

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-56E9F118-D4BB-4069-A390-D8E5DD230B9C-web.png" title=" " width="500" >}}

容積率 (FAR) を計算するためには、土地の面積を報告または計算する必要があります。この計算を行うには、**@StartRule** として **Footprint**  ルールに **report** オペレーションを追加します。

```
@StartRule
Footprint -->
	report("LotArea", geometry.area * areaScale)
	extrude(building_height)  
	#color(1,1,0)
	Mass
```

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-5791C815-26EF-4125-9F74-F6050AD56FCB-web.png" title=" " width="500" >}}

## ダッシュボードの追加

ダッシュボードは、CityEngine のレポートを拡張する素晴らしい方法です。ダッシュボードを使用すると、ルールから報告された任意の値を取得し、必要に応じて追加の計算を適用し、情報を棒グラフやチャートで表示することができます。

メイン メニューの **[Window] → [Dashboard]** をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-CCDD5C99-E232-4BAD-96EA-2B8898923540-web.png" title=" " width="300" >}}

デフォルトでは、**[Inspector]** ウィンドウに **[Dashboard]** タブが表示されます。

**[Add a Chart]** ボタンをクリックしてウィンドウを開きます。**[Pie Chart]** を選択し、**[Title]** ボックスに **Land Use** と追加して、**[FloorArea.*]** を選択します。最後に **[Add Card]** をクリックし、**[Dashboard]** ウィンドウのキャンバスに配置して、カードを追加します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-5CFFF868-C6B9-4A50-A698-A59F72FFF416-web.png" title=" " width="500" >}}

別のカードを追加します。今回は **[Key Number]** を選択します。タイトルに「**FAR**」と名付け、レポートとして **[FloorArea.*]** を選択して **LotArea** で除算します。**[Add Card]** をクリックし、キャンバスに追加します。

最後のステップとして、画面上の建物の色に合わせて、チャートに色を追加することができます。これを行うには、**Reporting** ルールに 2 行目を追加します。これは、土地利用の色取得関数を呼び出し、チャートの属性として追加するものです。

```
Reporting(landUse) -->
	report("FloorArea." + landUse, geometry.area * areaScale)
	report("FloorArea." + landUse + "#color", getColor(landUse))
```

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-A756A404-2BF8-4BF6-8877-CFC6F5D31B4A-web.png" title=" " width="500" >}}

CityEngine を設計ツールとして使用した場合のダッシュボードの威力を確認するため、建物を選択し、ハンドルで建物の高さを変更します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-AB09187A-042A-44C0-9227-632284507A16-web.png" title=" " width="500" >}}

ダッシュボードがリアルタイムに更新され、都市計画者やデザイナーが地域の要件や設計目標を満たすための計画を作成するのに役立ちます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/GUID-F4ECD7BC-5E7C-4F66-96F5-43D795005AB5-web.png" title=" " width="500" >}}

他のエッセンシャル チュートリアルもご参照ください。: [CityEngine ツアー](/cityengine/tutorials/essentials/cityengine-tour)と [GIS データを使った作業](/cityengine/tutorials/essentials/work-with-gis-data) 

CityEngine の学習を続けるには、[CityEngine チュートリアル](/cityengine/tutorials/)
をご参照ください。

