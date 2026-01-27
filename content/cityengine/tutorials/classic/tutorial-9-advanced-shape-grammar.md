+++
title = "チュートリアル 9: 高度なシェープ グラマー"
description = "写真から建物をモデリングする方法や、いくつかの高度な CGA テクニックについて学習します。"
weight = 9
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
このチュートリアルでは、建物のファサード イメージを解析し、ファサード コンポーネントを CGA に変換する方法を学習します。以下の実世界の画像から建物を再作成するための CGA ルールのセットを作成する方法を学習します。

|演習|
|:--|
|・[Part 1: 建物の探索](#part-1-建物の探索)|
|・[Part 2: ファサードのレイアウトを定義](#part-2-ファサードのレイアウトを定義)|
|・[Part 3: CGA で建物ボリュームを作成](#part-3-cga-で建物ボリュームを作成)|
|・[Part 4: フロアの追加](#part-4-フロアの追加)|
|・[Part 5: タイルの追加](#part-5-タイルの追加)|
|・[Part 6: 窓の追加](#part-6-窓の追加)|
|・[Part 7: 材質の追加](#part-7-材質の追加)|
|・[Part 8: 詳細の追加](#part-8-詳細の追加)|
|・[Part 9: スタイルの追加](#part-9-スタイルの追加)|
|・[Part 10: キャンドラー ビルディング](#part-10-キャンドラー-ビルディング)|
|・[Part 11: パルテノン神殿](#part-11-パルテノン神殿)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-2445CD11-B3BB-44BC-B59F-8EA0D6CC1180-web.png" title="ファサードの写真" >}}

この例では、タイルと窓のレイアウトが複雑なパターンになっていることに気づきます。また、建物を作成するために、入れ子式の繰り返し分割やパラメーターの受け渡しなど、いくつかの高度な CGA メカニズムが使用されています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-1A784D47-72BC-49D2-A9A3-9F3100F0BF39-web.png" title="最終成果物となる建物モデル" >}}

CGA シェープ グラマーの詳細については、[Rule-based modeling tutorial](https://doc.arcgis.com/en/cityengine/latest/tutorials/essentials-rule-based-modeling.htm)、および [Rule-based modeling](https://doc.arcgis.com/en/cityengine/latest/get-started/get-started-rule-based-modeling.htm) と [CGA modeling](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-modeling-overview.htm) ヘルプ トピックを参照してください。

## Part 1: 建物の探索
まず、上記のファサード イメージの CGA バージョンでシーンを開き、以下の手順を実行します。

1. [[Navigator]](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm) ウィンドウで **Tutorial_09_Advnced_Shape_Grammar** フォルダーを展開します。
2. [Scene] フォルダー内の **Complex Patterns.cej** シーンを開きます。[Would you like to regenerate these models?] と表示されたら **[YES]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-3D223736-73E8-431B-9FF8-925F0447F7E4-web.png" >}}

## Part 2: ファサードのレイアウトを定義
新しい CGA ルールを計画するときは、ルールの作成を始める前に、大まかなレイアウトをスケッチし、いくつかのシェープ名の定義を行うと便利です。

### ファサードの解析を実行
まず、ファサードを解析すると、ファサードが主に最上階 (Top Floor)、地上階 (Ground Floor)、中間階 (Upper Floor) の 3 つのフロア タイプで構成されていることがわかります。下層階は窓を含むタイルでできていますが、最上階には窓要素のみが含まれています。その他の下層階は全て同じため、特定の階の正しい外観 (タイルと窓の配置) を作成するために、インデックス (**FloorIndex**) パラメーターを **Floor** シェープとともに渡します。タイルのパターンのため、2 つの **Tile** シェープを含む中間 **DoubleTile** シェープを定義します。これは、フロア パターンをエンコードした後で役に立ちます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-5EC301D6-1C84-4286-8AFD-D2BC931423BA-web.png" title="階とタイルの構造" >}}

### サブ シェープの定義

次に、タイル内の詳細なサブ シェープを定義します。これは、**MilkGlass** (すりガラス) シェープと **Window** シェープという 2 つの主要な部分で構成されます。**Window** シェープには、上部の **Blind** と埋め込まれた **Subwindow** (小窓) シェープが含まれています。これらの要素の位置はタイルの水平方向の位置に依存します。サブ シェープ構造を正しく配置できるようにするために、この位置インデックス (**tileIndex**) を **Tile** シェープのパラメーターとして保存する必要があります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-3B17EC42-A1F8-4D52-A1CA-52218F716C89-web.png"  title="Window タイルの構造">}}

## Part 3: CGA で建物ボリュームを作成

ファサード レイアウトを定義したので、CGA で建物の作成を開始できます。

### 属性、変数およびアセットの追加

最初のステップとして、新しいルールを作成し、ルール ファイルの先頭に属性を定義していきます。これらの属性はルール セット全体で使用され、[[Inspector]](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm) ウィンドウを使用して属性とパラメーターを調整することで、シーン内に変更できます。ルールの作成を開始するには、以下の手順を実行します。

1. **[New]** → **[CityEngine]** → **[CGA Rule file]** をクリックします。
2. **[Next]** をクリックします。
3. ルール ファイルに「**myComplexPatterns.cga**」と名前を付けます。
4. **[Finish]** をクリックします。新しい CGA ファイルが作成され、[[CGA Editor]](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm) ウィンドウが表示されます。バージョンの記述以外は空です。
5. ルール ファイルに次のユーザー属性と、**@StartRule** とアノテーションがつけられた空のルールを下部に追加します。

```
// User Attribute 

@Group("Building", 1) @Range(min=5, max=40, restricted=false) @Distance
attr buildingH = 27             // building height

@Group("Facade", 2) @Range(min=3, max=6, restricted=false) @Distance
attr floorH = 3.5               // floor height
@Range(min=3, max=6, restricted=false) @Distance
attr groundfloorH = floorH+1    // groundfloor height
@Range(min=1, max=4, stepsize=1, restricted=false)
attr nSymmetries = 2
@Range(min=0.1, max=1, restricted=false) @Distance
attr borderwallW = 0.3          // width of border wall stripe
@Range(min=0.1, max=0.8, restricted=false) @Distance
attr ledgeH = 0.3               // ledge height

@Group("Window",3) @Range(min=1, max=5, restricted=false) @Distance
attr windowW = 2.5              // window width
@Range(min=1, max=5, restricted=false) @Distance
attr milkGlassW = windowW/2     // milkglass blend width
@Range(min=0.1, max=2.5, restricted=false) @Distance
attr blindH = 0.8               // blind height
@Range(min=0.01, max=0.5, restricted=false) @Distance
attr frameW = 0.07              // frame width

@Group("Balcony",4) @Range(min=3, max=6, restricted=false) @Distance
attr balconyDepth = 2

@Group("Colors",5)
@Color
attr brightblue = "#86b1c7" 
@Color
attr darkblue   = "#33556c"
@Color
attr red        = "#5c3f40"
@Color
attr grey       ="#6b7785"
@Color
attr white      = "#ffffff"

@StartRule
Lot --> BuildingVolume
```
6. Ctrl ＋ S キーを押して、ルール ファイルを保存します。
7. モデルを選択し、**myComplexPatterns.cga** ルールを割り当てます。[@Group](https://doc.arcgis.com/en/cityengine/latest/cga/cga-annotations.htm#GUID-DCD0595D-5202-4B7A-8F5F-2E91ADC4C568) や [@Range](https://doc.arcgis.com/en/cityengine/latest/cga/cga-annotations.htm#GUID-775B392A-0B73-442C-8099-5DBB7E1A39CB) などのアノテーションが属性に追加され、**[Inspector]** ウィンドウでの外観を制御していることに注目してください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-9C5BE412-D079-468F-BD5F-ED7ACE4303E1-web.png" title="現在のInspector ウィンドウ">}}

8. **@StartRule** の上に変数とアセットを追加します。

```
tileW = windowW + milkGlassW	// total tile width
const barDiameter = 0.04

// assets
const cyl_v 	    = "primitives/cylinder.vert.8.notop.tex.obj"
const cyl_h 	    = "primitives/cylinder.hor.8.notop.tex.obj"
const window_tex    = "facade/windows/1_glass_2_blue.tif"
const milkGlass_tex = "facade/windows/blend_tex.png"
```

### 建物を押し出す
これから実際の建物の作成が始まります。建物を押し出すために、以下の手順を実行します。
1. 押し出し操作でマス モデルを作成します。最上階を主要部分から分割し、再度分割してセット バック バルコニーを作成します。 

```
BuildingVolume -->
	extrude(buildingH)
	split(y) { ~1     : MainPart
	         | floorH : UpperPart }

UpperPart -->
	split(z) { ~1           : TopFloor 
	         | balconyDepth : Balcony }
```

2. コンポーネント分割を追加して様々なボリューム パーツに適用し、正面、側面、および上面を区別します。これにより、**Facade**、**Wall**、**Roof** がトリガーされます。

```
MainPart -->
	comp(f) { front : Facade
	        | side  : Wall
	        | top   : Roof. } 

TopFloor -->
	comp(f) { front : Floor(-1)
	        | side  : Wall
	        | top   : Roof. }
```
3. コンポーネント分割を使用して、**Railing** ルールを呼び出し、手すりを正面、左面、右面に配置します。

```
Balcony -->
	s(scope.sx-2*borderwallW, 1.1, scope.sz-borderwallW)
	center(x)
	comp(f) { front : Railing 
	        | left  : Railing 
	        | right : Railing }
```
バルコニーの寸法が決まりました。次に、建物に手すりを追加します。

4. ルール ファイルを保存します。<br>
  [[3D View]](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm) で建物が選択されていることを確認します。 

5. **Generate models of selected shapes** (Ctrl ＋ G キー) クリックして建物を生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-2CF2F6CB-5DAA-4126-8E42-A0FE24EE5015-web.png" title="押し出したモデル">}}

## Part 4: フロアの追加

正面ファサードをさらに細分化するには、以下の手順を実行します。
1. ファサードを地上階と上層階に分割します。
```
Facade -->
	split(y) { ~groundfloorH : Floor( split.index )
	         | { ~floorH     : Floor( split.index ) }* }
```

最初の分割では、繰り返し分割 **{…}** * を使用して、ファサードを地上階部分と上層階に再分割します。**~groundfloorH** のように、分割サイズの高さの前にチルダ記号 **(~)** を使用すると、高さを柔軟に変更でき、ファサードに穴がなくてもフロアを一致させることができます。**split.index** (フロア インデックスを表す) をパラメーターとして渡すことで、後で特定のフロア フィーチャをトリガーできます。

2. 各フロアの x 方向に単純に分割して、両側に狭い壁エリアを作成します。

```
Floor(floorIndex) -->
	split(x) { borderwallW : Wall
	         | ~1          : FloorSub(floorIndex)
	         | borderwallW : Wall }
```

3. 水平分割コマンドを使用して、フロアごとに特別な水平要素を追加するために以下の要件を使用します。

-  上層階には上部のレッジのみが付いています。
-  最上階には追加要素は持たず、**TileRow** シェープを直接トリガーします。
-  後のルールでフロア インデックスを再度使用するため、フロア インデックスを **TileRow** シェープのパラメーターとして再度割り当てます。
```
FloorSub(floorIndex) -->
	case floorIndex == 0:
		split(y) { 1      : Wall
		         | ~1     : TileRow(floorIndex)
		         | ledgeH : Wall }
	case floorIndex > 0:
		split(y) { ~1     : TileRow(floorIndex)
		         | ledgeH : Ledge }
	else:
		TileRow(floorIndex)
```
4. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-742DC339-C786-4418-B6FF-F56991313C10-web.png" title="フロア追加後のモデル">}}

## Part 5: タイルの追加

次に、フロアをタイル分割します。最上階は特別なパターンはなく窓要素が繰り返されているだけです。これらのタイルを後で指定するには、タイルに **-1** パラメーターを設定します。

1. メイン フロアの特別な繰り返しパターンを作成するには、中間の **DoubleTile** シェープを作成します。

```
TileRow(floorIndex) -->
	case floorIndex == -1:
		split(x) { ~windowW : Tile(-1) }*
	else: 
		split(x) { ~tileW*nSymmetries : DoubleTile(floorIndex, split.index) }*
```

後の手順で窓要素を正しく配置するために、パラメーターとして渡すフロア インデックスとタイル インデックス (**split.index**) が必要になります。


フロア インデックスとタイル インデックスの組み合わせによって、**Double Tile** 内の窓の配置が決まります。<br>

2. 分割を繰り返す 2 つのルールを追加して、**MilkGlass** シェープと **Tile** シェープの異なる配置を取得します。
```
DoubleTile(floorIndex, tileIndex) -->
	case tileIndex%2 + floorIndex%2 == 1:
		split(x) { ~milkGlassW : MilkGlass 
		         | ~windowW    : Tile(tileIndex) }*
	else:
		split(x) { ~windowW    : Tile(tileIndex)
		         | ~milkGlassW : MilkGlass }*
```

フロアとタイルインデックスの組み合わせが **Double Tile** 内の窓の配置を決定します。

3. 今後の窓テクスチャのテクスチャ座標を設定します。

```
Tile(tileIndex) -->
	setupProjection(0, scope.xy, scope.sx, scope.sy)
	split(x) { frameW : Frame Bracing 
	         | ~1     : split(y) { frameW : Frame 
	                             | ~1     : Window(tileIndex)
	                             | frameW : Frame 
	                             | blindH : Blind 
	                             | frameW : Frame } 
	         | frameW : Frame Bracing }
```

次に、**Tile** シェープ全体を水平方向に窓枠と中央部分に分割します。
中央部分が再び垂直に分割され、枠、窓、枠、ブラインド、およびフレームのコンポーネントに分割されます。

4. ルール ファイルを保存して、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-41F592F4-B879-4175-B106-0A104681F970-web.png" title="タイル追加後のモデル">}}

## Part 6: 窓の追加

建物に窓を追加するために、以下の手順を実行します。

1. **Window** シェープの場合、**DoubleTile** のタイル インデックスを使用して小窓 (**Subwindows**) の位置が決定されます。
```
Window(tileIndex) -->
```
2. 右揃えの小窓を窓の左半分に配置します。
```
case tileIndex%nSymmetries >= 1:
		split(x) { ~1     : Subwindow("right")
		         | frameW : Frame
		         | ~1     : Glass }
```
3. 左揃えの小窓を窓の右半分に配置します。
```
case tileIndex%nSymmetries >= 0:
		split(x) { ~1     : Glass
		         | frameW : Frame
		         | ~1     : Subwindow("left") }
```
4. 最上階の窓を表す **-1** タイル インデックスを使用して、小窓がない窓を作成します。
```
else:
		split(x) { ~1     : Glass
		         | frameW : Frame
		         | ~1     : Glass }
```
5. 左と右のパラメーターを使用して、**RedWindow** を正しい位置に配置します。
```
Subwindow(align) -->
	case align == "left": 
		split(x) { ~3 : RedWindow 
		         | ~2 : Glass }
	else: 
		split(x) { ~2 : Glass
		         | ~3 : RedWindow }
```
6. **RedWindow** シェープの窓枠要素とガラス要素を作成するルールを追加します。
```
RedWindow -->
	split(x) { frameW : RedFrame 
	         | ~1     : split(y) { frameW  : RedFrame
	                             | ~1      : RedGlass
	                             | frameW  : RedFrame }
	         | frameW : RedFrame }

RedGlass -->
	split(y) { ~1       : Glass
	         | frameW/2 : t(0,0,-frameW) Frame
	         | ~1       : t(0,0,-frameW) Glass }
```
7. ルール ファイルを保存して、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-4BEFABD6-CCBF-4286-97D0-858C2097870F-web.png" title="窓追加後のモデル">}}

## Part 7: 材質の追加

建物に色とテクスチャを適用するには、以下の手順を実行します。

1. ファサード要素の色、押し出し、移動を定義します。

```
Wall -->
	color(darkblue)
Blind -->
	color(grey)
Frame -->
	extrude(frameW)
	color(white)
RedFrame --> 
	t(0, 0, -frameW)
	extrude(frameW*4)
	color(red)
```

2. 現在のジオメトリ シェープにテクスチャ座標を適用し、テクスチャと色を割り当てます。

```
Glass --> 
	projectUV(0)
	texture(window_tex)
	color(white)
	set(material.specular.r, 0.4)
	set(material.specular.g, 0.4)
	set(material.specular.b, 0.4)
	set(material.shininess, 4)
	set(material.reflectivity, 0.3)
	
MilkGlass --> 
	s('1, '1, frameW*1.2)
	primitiveCube
	color(brightblue)
	setupProjection(0, scope.xy, scope.sx, scope.sy, 0, 0, 0)
	texture(milkGlass_tex)
	projectUV(0)
	set(material.specular.r, 0.7)
	set(material.specular.g, 0.7)
	set(material.specular.b, 0.7)
	set(material.shininess, 20)
	set(material.reflectivity, 0.05)
```

3. ルール ファイルを保存して、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-2B74E808-1FB6-4992-9953-E137CF6D4D7B-web.png" title="テクスチャ適応後のモデル">}}

## Part 8: 詳細の追加

最後に要素に詳細を追加するには、以下の手順を実行します。

1. フロア レッジに背面の壁要素、奥行きとなる立方体、およびカバー プレートとなる 2 つ目の薄い立方体を追加して洗練させていきます。

```
Ledge -->
	Wall
	[ s('1, '0.9, 0.2) primitiveCube Wall ]
	t(0, -0.1, 0.2)
	s('1, scope.sy+0.1, 0.03)
	primitiveCube
	Wall
```

2. 垂直バーは、フローティングにした分割幅を繰り返すことで等間隔に配置されます。

```
Railing --> 
	[ t(0,scope.sy-barDiameter/2,0) HBar ]
	set(trim.vertical, false)
	split(x) { ~tileW/3 : VBar }*
```
 水平バーは、手すりの水平部分を作成するために挿入します。垂直トリミングを無効にすると、垂直コーナーのバーがカットされるのを防ぎます。

3. 円柱アセットを挿入して垂直バーと水平バーを作成します。

```
VBar -->
	s(barDiameter, '1, barDiameter)
	t(0, 0, -barDiameter)
	i(cyl_v)
	color(white)

HBar -->
	s('1, barDiameter, barDiameter)
	t(0, 0, -barDiameter)
	i(cyl_h)
	color(white)
```

4. 窓のブレースは、上下の取り付け金具と中央の水平バーで構成されています。取り付けの場合は、立方体を挿入し、**VBar** でシリンダー アセットをトリガーします。

```
Bracing --> 
	s(barDiameter, '1, 0.15)
	center(x) 
	primitiveCube
	split(y) { 0.01 : Wall
	         | ~1   : t(0, 0, 0.15) VBar
	         | 0.01 : Wall }
```

5. ルール ファイルを保存して、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-3D223736-73E8-431B-9FF8-925F0447F7E4-web.png" title="詳細追加後のモデル">}}

最終的なモデルには、レッジ、窓のブレース、手すりなどの詳細要素が追加され表示されます。
最終モデルが完成したので、様々な **lot** シェープにルールを適用するか、**[Inspector]** ウィンドウでユーザー属性を試してファサード デザインを変更します。

## Part 9: スタイルの追加

スタイル キーワードを使用して、一部の属性を再定義する新しいスタイルを定義できます。

1. ルール ファイルの一番下で、色属性を再定義してモデルにスタイルを追加します。
```
@Description("A Variation in Red")
style Red_Color_Theme
attr brightblue = "#FF8080"
attr darkblue 	= "#D20000"
attr grey 	= "#ECCACA"
attr red 	= "#361B1B"
```

2. ルール ファイルを保存します。
3. **[Inspector]** ウィンドウの **[Style Manager]** のドロップダウン メニューで **[Red_Color_Theme]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-176FAB5D-926C-4B06-9719-9622C02ECDEB-web.png" title="スタイルの選択">}}

**Red_Color_Theme** スタイルが適用されました。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-2445CD11-B3BB-44BC-B59F-8EA0D6CC1180-web.png" title="スタイル追加後のモデル" >}}

最終的なルールファイルを確認するには、**complexpatterns_01.cga** ルールを開きます。

## Part 10: キャンドラー ビルディング

キャンドラー ビルディングは、CGA がどのようにしてリアルな建物をプロシージャルに作成できるかを示す良い例です。CGA を調べるには、以下の手順を実行します。

1. **Candler Building.cej** シーンを開きます。
2. **[Navigator]** ウィンドウで **Candler Building.cga** ファイルをダブル クリックして、**Candler Building** を作成する CGA ルールを探索します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-8F7D5E36-7363-4F73-A1B3-F07DB73F1935-web.png" title="キャンドラー ビルディング">}}

## Part 11: パルテノン神殿

最後に、パルテノン神殿を探索するために、以下の手順を実行します。

1. **Parthenon.cej** シーンを開きます。
2. もう一度、**parthenon.cga** ファイルをダブル クリックして、パルテノン神殿の裏にあるルールを確認します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-9-advanced-shape-grammar/GUID-8B45B01F-006C-420F-9DFD-D3F501C0D5EE-web.png" title="パルテノン神殿">}}

このチュートリアルでは、以下の方法を学習しました。

- 画像を取得して解析し、CGA コンポーネントに分割
- 窓、タイル、マテリアルなどの要素の追加
- 高度なシェープ グラマーのより複雑な例の探求