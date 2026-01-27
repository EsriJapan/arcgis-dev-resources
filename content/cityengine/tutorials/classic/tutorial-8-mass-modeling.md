+++
title = "チュートリアル 8 : マスモデリング"
description = "建物のマスモデルがどのようにシェープ グラマーにより作成されるのかを学習します。"
Weight = 8
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false 
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
このチュートリアルでは、L 字型および U 字型シェープの建物を使ったマスモデリングや区画に高さとセットバックのバリエーションを適用する方法、テクスチャを含む多様な外観のシーンを生成する方法について学習します。

CGA シェープ グラマーの詳細については、エッセンシャル チュートリアルの[ルール ベースのモデリング](https://doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/)やヘルプの [Rule-based modeling](https://doc.arcgis.com/en/cityengine/2023.1/get-started/get-started-rule-based-modeling.htm)、[CGA modeling](https://doc.arcgis.com/en/cityengine/2023.1/help/help-cga-modeling-overview.htm) をご参照ください。

|演習|
|:--|
|・[Part 1 : L 字型および U 字型シェープ](#part-1--l-字型および-u-字型シェープ)|
|・[Part 2 : 再帰を使用したマスモデリング](#part-2--再帰を使用したマスモデリング)|
|・[Part 3 : セットバックによる区画の調整](#part-3--セットバックによる区画の調整)|
|・[Part 4 : マスモデルとセットバックの組み合わせ](#part-4--マスモデルとセットバックの組み合わせ)|
|・[Part 5 : テクスチャ付きファサードの追加](#part-5--テクスチャ付きファサードの追加)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-32B17FFE-038E-45D4-B60A-A30D690D3DB3-web.png" title=" " width="600" >}} 

## Part 1 : L 字型および U 字型シェープ
はじめに [CGA](https://doc.arcgis.com/en/cityengine/2023.1/cga/cityengine-cga-introduction.htm) を使用して、建物の L 字型マスモデルと U 字型マスモデルを作成します。これは、都市における一般的な建物のタイプを表しています。

### ルール ファイルの作成
1.	[[Navigator](https://doc.arcgis.com/en/cityengine/2023.1/help/help-navigator.htm)] ウィンドウで **Tutorial_08_Mass_Modeling** フォルダーを展開します。

2.	**scenes** フォルダーのシーン **01_MassModeling.cej** を開きます。

	[Would you like to regenerate these models?] と表示されたら、**[No]** をクリックします。

	これは、ワークフローの後半でルールを適用し、モデルを生成するためです。

3.	**[File] メニュー → [New …] → [CityEngine] → [CGA Rule File]** をクリックします。

4.	**[Next]** をクリックします。

5.	**「myMass_01.cga」** という名前をルールに付けます。

6.	**[Finish]** をクリックします。

	新しい CGA ファイルが作成され、[[CGA Rule Editor](https://doc.arcgis.com/en/cityengine/2023.1/help/help-cga-editor.htm)] ウィンドウが表示されます。バージョン番号以外は空欄になっています。


### L 字型シェープ
まずはとてもシンプルな L 字型のマスモデルの生成から始めます。

1.	下記のルールを **myMass_01.cga** ルールに追加します。
	```
	attr height    = rand(30, 60)
	attr wingWidth = rand(10, 20)

	Lot --> 
		LShape

	LShape -->
		shapeL(wingWidth, wingWidth) { shape : LFootprint }

	LFootprint --> 
		extrude(height) Mass
		
	LotInner -->
		OpenSpace
	```
	**LShape** ルールでは、サイズが 10m から 20m の範囲で L 字型のフットプリントを作成します。**LFootprint** ルールでは、height 値まで L 字型を立ち上げます。

	**LotInner** ではシンプルに **OpenSpace** を適用し、区画シェープをそのまま維持します。

	次に、このルールを区画に適用します。

2.	Ctrl+S キーを押して、ルール ファイルを保存します。

3.	現状、モデルの作成に道路は不要なため、**[Visibility settings]** をクリックし、**[Graph Networks]** (F10 キー) の選択を解除して、道路を非表示にします。

4.	すべての区画を選択するためには、**[Scene]** ウィンドウの **Streetnetwork** レイヤー内にある **Blocks** サブレイヤーを右クリックし、**[Select Objects]** をクリックします。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-FA268277-E19C-4496-B829-00679FBA501A-web.png" title=" " width="400" >}} 

5.	**myMass_01.cga** ルールを区画に割り当てます。

	a.**[Inspector]** ウィンドウにて **[Lots]** タブが選択されていることを確認します。

	b.**[Inspector]** ウィンドウ内の **[Rule File]** の横にある **[Assign]** をクリックします。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-62FDA034-5ADC-4986-854D-8621AC4356C1-web.png" title=" " width="400" >}} 

	c.**[Assign Rule File]** ダイアログ ボックスにて **myMass_01.cga** ルールを選択し、[Open] をクリックします。

6.	**[Select]** ツール (Q キー) をクリックし、[[3D View](https://doc.arcgis.com/en/cityengine/2023.1/help/help-viewport.htm)] ウィンドウでいくつかの区画を選択します。

7.	[Shapes] メニュー → [Generate Models] または Ctrl+G キーにより建物を生成します。
	
	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-B842A31A-91EF-4CDC-9FED-7EF936F3E291-web.png" title=" " width="550" >}} 
	
	L 字型マスモデルを見せるだけではこれで良いように見えますが、モデルの形状が混在している方がより良いものになるかもしれません。続いて、マスモデルによりバリエーションを加えます。


### L 字型シェープの応用 
現在の L 字型のサイド ウィングは常に区画全体の左側のみに位置していますが、**rotateScope** オペレーションを使用することで、L 字型を右側にも配置することができます。

1.	確率オペレーター **%** を使用して **LShape** ルールを変更し、L 字型が左側か右側のどちらかにサイド ウィングを持つように改良します。
	```
	LShape -->
		50%  :
				shapeL(wingWidth, wingWidth) { shape : LFootprint }
		else :
				rotateScope(0, 90, 0) 
				shapeL(wingWidth, wingWidth) { shape : LFootprint }
 	```

2.	**convexify** オペレーションを使用することで、L 字型を両ウィングに分割し、これらの高さを変化させることができます。ここでも変化をつけるためにランダム確率を使用して **LFootprint** ルールを編集することでバリエーションを加えます。
	```
	LFootprint -->
		75%  :
				extrude(height) Mass
		else :
				convexify
				comp(f) { 0   : extrude(height) Mass
						| all : extrude(height*0.7) Mass }
	```

3.	ルール ファイルを保存し、生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-0F7E29CF-78C8-4AAD-9C25-77151C96A900-web.png" title=" " width="550" >}} 

サイド ウィングは左右に表示され、高さが異なります。次にシェープのタイプを追加します。

### U 字型シェープ
U 字型のシェープを追加します。

1.	スタートの **Lot** ルールで、先ほどの **LShape** の代わりに **UShape** を呼び出します。
	```
	Lot --> 
		UShape
	```

2.	同様に、**shapeU** オペレーションを使用して、**Lot** ルールの下に **UShape** ルールと **UFootprint** ルールを追加します。
	```
	UShape -->
		shapeU(wingWidth, wingWidth*0.7, wingWidth*0.7) { shape : UFootprint }

	UFootprint --> 
		extrude(height) Mass
	```

3.	保存し、生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-2574C602-74DE-4D95-9839-43A92282976A-web.png" title=" " width="550" >}} 

4.	次に、U 字型のいくつかをランダムに 180 度回転させて変化をつけます。
	```
	UShape -->
		80%  :
				rotateScope(0, 180, 0)
				shapeU(wingWidth, wingWidth*0.7, wingWidth* 0.7) { shape : UFootprint }
		else :
				shapeU(wingWidth, wingWidth*0.7, wingWidth*0.7) { shape : UFootprint }
	```

5.	保存し、生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-3413F513-022D-4ED2-9CB4-C02B694DCA85-web.png" title=" " width="550" >}} 

すべての区画が U 字型になっているわけではないことが分かります。次のセクションでは、L 字型と U 字型を統合します。

### L 字型シェープと U 字型シェープの統合
L 字型シェープと U 字型シェープを統合し、高さの分布においていくつかのバリエーションを追加します。

1.	建物の高さをより良く制御するために、**height** 属性に対して面積の広い土地だけが高い建物を建てられるという条件を追加します。
	```
	attr height =
		case geometry.area < 1000 : rand(20, 50)
		else : rand(50, 150)
	```

2.	**Lot** ルールで **Ushape** の代わりに **LUShape** を呼び出し、**LUShape** という新しいルールを追加して、どの区画にどのシェープのタイプが作成されるかを制御します。
	```
	Lot -->
		LUShape

	LUShape -->
		case scope.sx > scope.sz :
				60%  : UShape
				else : LShape
		else : LShape
	```
	U 字型は奥行よりも幅の方が長いシェープに適しています。CGA グラマーで言えば、**scope.sx** が **scope.sz** よりも大きい場合です。これ以外の場合は L 字型を生成するようにします。


3.	保存し、今回はより多くのシェープを選択してより多くの建物のマスモデルを作成します。

4.	建物を生成します。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-E309FD58-8738-4F54-A629-EA576CFD8ACA-web.png" title=" " width="550" >}} 

5.	矩形でない区画では U 字型も L 字型も適していません。次の case ステートメントでは、およそ矩形 (許容値 15°) の区画においてのみ **UShape** および **LShape** のモデルが作成されることを条件付けします。
	
	この条件を満たさない場合は新しいフットプリント ルールを呼び出します。
	```
	LUShape -->
		case geometry.isRectangular(15) :
				case scope.sx > scope.sz :
					60%  : UShape
					else : LShape
				else : LShape
		else : BasicFootprint
	```

6.	これにより押し出された区画シェープは、L 字型や U 字型に比べて大き過ぎてしまいます。そこで、**BasicFootprint** ルールに対してマイナスのオフセットを追加します。これにより、各建物の間にいくらかスペースを作ることにもなります。下記の内容を **LFootprint** ルールの後に配置します。
	```
	BasicFootprint -->
		offset(-5, inside)
		extrude(height) Mass
	```

7.	保存し、生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-4D818AA5-C389-400B-AD7B-CCF17F7ED6C3-web.png" title=" " width="550" >}}


この時点でシーンがどのように見えるかを確認するためには、シーン **01_MassModeling.cej** を保存せずに開きます。モデルを再生成するプロンプトが表示されたら、**[Yes]** をクリックします。

次の Part 2 では、シェープ グラマーで再帰を使用してマスモデリングを行う方法を学習します。


## Part 2 : 再帰を使用したマスモデリング
ここでは、シェープ グラマーの中で再帰を使用することにより建物要素の繰り返しをモデリングする方法を学習します。

### タワー シェープ

1.	**myMass_02.cga** という新しいルール ファイルを作成します。

2.	新しいルール ファイルに以下の内容を追加します。
	```
	height =
		case geometry.area > 1000 : rand(50, 200)
		else: rand(20, 50)
	
	Lot -->
		Tower

	Tower -->
		extrude(height) Envelope
	
	Envelope -->
		RecursiveSetbacks
	```
	**height** 関数は建物の高さとしてランダム値を返します。スタートの **Lot** ルールで **Tower** ルールを呼び出し、これがフットプリントをタワーの包絡面 (エンベロープ) まで押し出します。**Envelope** ルールは Recursion ルールを呼び出します。

3.	この後の再帰ルールのために、3 つの変数を追加する必要があります。**lowHeight**、**scale**、**floorheight** です。height 関数の後に配置します。
	```
	lowHeight =
		50%  : 0.4
		else : 0.6

	attr scale       = rand(0.75, 0.9)
	attr floorheight = rand(4, 5)
	```
	建物の **scale** は 1 つの建物に対して一定値となるので、属性として定義します。これは関数とは異なり、属性は生成プロセスの最初に一度だけチェックされるためです。	 

4.	**Envelope** ルールの後に **RecursiveSetbacks** ルールを追加します。
	```
	RecursiveSetbacks -->
		case scope.sy > 2*floorheight :
				split(y) { 'lowHeight : Mass | ~1 : Setback }
		else :
				s('1, floorheight, '1) Mass
	```
	**RecursiveSetbacks** ルールは、マスモデルが 2 階分の高さよりも高ければマスを分割し、相対的高さ **lowHeight** を持った下の部分が Mass となります。残りの部分は **Setback** シェープを生成します。

	**RecursiveSetbacks** シェープの高さが 2 階分よりも低い場合は、残りの部分の高さは **floorheight** に設定され、**Mass** シェープが生成されます。

5.	**Setback** ルールを追加することで、シェープを拡大縮小および移動し、再帰的に **RecursiveSetbacks** ルールを呼び出します。
	```
	Setback -->
		s('scale, '1, 'scale)
		center(xz)
		RecursiveSetbacks
	```

6.	ルール ファイルを保存します。

7.	シーン上のすべての区画を選択し、**[Inspector]** ウィンドウで **myMass_2.cga** ルール ファイルを割り当てます。

	従来のルールのシンプルな建物のマスモデルは、セットバックのあるタワーに変更されます。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-98064F38-D391-4D97-A536-E1A751F75128-web.png" title=" " width="550" >}} 

## ラウンド シェープ
外部のラウンド (円筒) アセットを使用すれば、非常に簡単に先ほどの再帰タワーの円筒バージョンを作成することができます。

1.	**Envelope** ルールを以下のように変更します。

	```
	Envelope -->
		case geometry.isRectangular(20) :
				20%  : i("cyl.obj") RecursiveSetbacks
				else : RecursiveSetbacks
		else : RecursiveSetbacks
	```
	タワー全体の 20 % について、シェープで生成される元々の立方体の代わりに円筒アセットを挿入します。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-B73977B0-532E-4DDB-8A87-BA778B85738E-web.png" title=" " width="400" >}} 

2.	保存し、生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-821BF39C-B617-4B70-8855-9AF345525C3B-web.png" title=" " width="550" >}} 

シーン **02_MassModeling.cej** でも、上の画像のように見えます。

次の Part 3 ではセットバックにより区画内を変更する方法を学習します。


## Part 3 : セットバックによる区画の調整
区画のシェープに対してセットバックを適用します。

### 道路のセットバック
道路にセットバックを適用します。

1.	**myMass_03.cga** という新しいルール ファイルを作成します。

2.	新しいルール ファイルに以下の内容を追加します。
	```
	attr height =
		case geometry.area > 1000 : rand(50, 200)
		else : rand(20, 50)

	attr distanceStreet =
		20%  : 0
		else : rand(3, 6)

	Lot --> 
		Parcel
	
	LotInner --> 
		OpenSpace

	Parcel -->
		setback(distanceStreet) { street.front : OpenSpace
									| remainder    : Footprint }

	Footprint -->
		extrude(height)

	OpenSpace -->
		color("#77ff77")
	```

	**Parcel** ルールは区画のすべての道路側の辺にセットバックを適用し、このエリアを **OpenSpace** ルールに転送します。道路側から離れた区画内部は **Footprint** に転送され、ランダムな高さに押し出します。

	**street.front** セレクターは **streetWidth** シェープのオブジェクト属性をチェックします。この属性は、ブロックから作成された動的な区画シェープに対して自動的に設定されているもので、手動で作成されたシェープには存在しません。

3.	ルール ファイルを保存し、すべての区画を選択します。

4.	**[Shapes] メニュー → [Delete Models]** をクリックし、生成されたすべてのモデルを削除します。

5.	すべての区画に **myMass_03.cga** ルールを割り当てます。

6.	1 つの区画を選択し、生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-530AF584-1714-4B34-8C29-6DEADC589F88-web.png" title=" " width="550" >}}

	選択した区画に道路からのセットバックが適用されているのが確認できます。

7.	追加でいくつかの区画を選択し、再度生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-96092C8F-8856-4102-A202-0B70DEA17952-web.png" title=" " width="550" >}}

	建物が道路からセットバックされていますが、建物間にスペースが開いていないことが確認できます。

### 建物間の距離
ここでは、同様のセットバックを建物間の距離を制御するために追加します。

1.	**distanceStreet** 属性の下に **distanceBuildings** 属性を追加します。
	```
	attr distanceBuildings =
		30%  : 0
		else : rand(4, 8)
	```

2.	remainder で **SubParcel** ルールを呼び出すために **Parcel** ルールを変更し、新しい **SubParcel** ルールをその後ろに追加します。
	```
	Parcel -->
		setback(distanceStreet) { street.front  : OpenSpace
									| remainder     : SubParcel }

	SubParcel -->
		setback(distanceBuildings/2) { !street.front  : OpenSpace
				  						 | remainder      : Footprint }
	```
	
	**SubParcel** ルールで再度セットバックが適用されますが、今回は道路に面していない側の辺になります。

3.	保存し、生成を行います。
4.	**[Inspector]** ウィンドウを確認するためにモデルを選択します。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-25030208-D1D2-4158-B75D-03F37B05C2E4-web.png" title=" " width="550" >}}

	**distanceBuildings** と **distanceStreet** は、セットバック距離を変更するために調整できるルール パラメーターです。選択した 1 つのモデルや複数のモデルに対して値を設定することができます。
	
	ルール ファイルのデフォルトのランダム値にリセットするには、いずれかのパラメーター値の横にあるドロップダウン メニューをクリックし、**[Rule default]** をクリックします。

5.	すべての区画を選択し、生成を行います。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-79DC88EB-E0A2-4428-9299-ADF0BA24D2A6-web.png" title=" " width="600" >}}

セットバックされた区画のある建物の例を確認したい場合は、シーン **03_MassModeling.cej** を開きます。

次の Part 4 では、Part 1 と Part 2 で作成したマスモデルをセットバックした区画と結合します。


## Part 4 : マスモデルとセットバックの組み合わせ
次に、マスモデルとセットバックした区画を組み合わせます。

### LU字型シェープとタワーのマスモデリング ルールのインポート
1.	**myMass_03.cga** の [CGA Rule Editor] ウィンドウがアクティブであることを確認し、**myMass_04.cga** として保存します。

2.	以下の 2 つの import をルール ファイルの先頭にある version ステートメントの後に追加します。
	```
	import lushapes : "myMass_01.cga"
	import towers   : "myMass_02.cga"
	```
	インポートされたルール ファイルのすべてのルールや属性、関数が現在のルール ファイル上で使用できるようになりました。

3.	**Footprint** ルールを以下のように変更します。
	``` 
	Footprint -->
		case geometry.isRectangular(15):
				25%  : towers.Tower
				else : lushapes.LUShape
		else:
				25%  : towers.Tower
				else : lushapes.BasicFootprint
	``` 
	**Footprint** ルールでは、シンプルな押し出しの代わりに、前のステップで作成したものより高度なマスモデルが生成されます。case ステートメント内の **geometry.isRectangular** 関数では、**LUShapes** のほとんどが長方形で生成されることが確認できます。

4.	ルール ファイルを保存します。

5.	すべての区画を選択し、**myMass_04.cga** ルール ファイルを割り当てます。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-C64320AC-13E0-4345-9D79-43ABFF1459E7-web.png" title=" " width="600" >}}

	セットバックされたすべての区画と高さの異なる正方形と円筒のタワーが混在しているのが確認できます。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-0C06DDF2-DA32-4A8F-8BBB-07161245A676-web.png" title=" " width="600" >}}

シーン **04_MassModeling.cej** では、セットバックした建物とタワーが見えます。

次の Part 5 では、テクスチャ付けしたファサードを追加します。


## Part 5 : テクスチャ付きファサードの追加
次に、テクスチャ付きファサードを追加します。

1.	**myMass_04.cga** ルール ファイルを **myMass_05.cga** として保存します。 

2.	属性の下に 12 個のファサード テクスチャ タイルの中からランダムに 1 つを選択する const 関数を追加します。
	``` 
	const randomFacadeTexture = fileRandom("*facade_textures/f*.tif")
	``` 

3.	続いて、**floorHeight** 属性を追加します。
	``` 
	attr floorheight = rand(4,5)
	``` 

4.	テクスチャ タイルをファサードに正しくマッピングするために、現在のマスの実際のフロアの高さとタイルの幅を計算する 2 つの関数を定義します。
	``` 
	actualFloorHeight = 
		case scope.sy >= floorheight : scope.sy/rint(scope.sy/floorheight)
		else : scope.sy
	
	actualTileWidth = 
		case scope.sx >= 2 : scope.sx/rint(scope.sx/4)
		else : scope.sx
	``` 
	これら 2 つの関数により、テクスチャ タイルがファサードのエッジで切断されないようにすることができます。

5.	要素分割コマンド (comp) により、マスモデルのファサード要素を取得するために、ルール ファイルの一番下に **Mass** ルールを追加します。
	``` 
	Mass --> 
		comp(f){ side : Facade | top : Roof. }
	``` 

6.	続いて、インポートされているルールにこの **Mass** ルールを使用するように指示します。 
	```
	towers.Mass -->
		Mass
	
	lushapes.Mass --> 
		Mass
	```

7.	最後に、**Façade** ルールでファサードに対して実際の UV 座標を設定して、**randomFacadeTexture** 関数によりテクスチャ ファイルを定義し、UV を投影します。
	```
	Facade -->
		setupProjection(0, scope.xy, 8*actualTileWidth, 8*actualFloorHeight)
		texture(randomFacadeTexture)
		projectUV(0)
	```

8.	ルール ファイルを保存します。

9.	すべての区画を選択し、区画に **myMass_05.cga** ルールを割り当てます。

10.	建物を生成します。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-912DC6DC-A115-4219-B293-E6BAEE5D7C5D-web.png" title=" " width="600" >}}

	モデルにランダムなテクスチャ ファサードが与えられました。

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-0AA9F54B-147B-4E6F-BEFA-07277048AE76-web.png" title=" " width="600" >}}

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-AB0E2AF2-66F9-44F8-9D15-87438728E235-web.png" title=" " width="600" >}}

	{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-8-mass-modeling/GUID-32B17FFE-038E-45D4-B60A-A30D690D3DB3-web.png" title=" " width="600" >}}

最終的なテクスチャの建物を確認するには、シーン **05_MassModeling.cej** を開きます。

このチュートリアルでは、以下の方法を学習しました。
* L 字型および U 字型シェープの建物を使ってマスモデルを生成しました。
* 区画に距離とセットバックのバリエーションを適用しました。
* 多様な形状、高さ、テクスチャを持つ建物を作成しました。
