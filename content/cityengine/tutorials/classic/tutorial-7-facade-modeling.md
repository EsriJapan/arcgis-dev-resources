+++
title = "チュートリアル 7 : ファサード モデリング"
description = "写真から建物をモデリングする方法を解説し、いくつかの複雑なCGA のテクニックを学習します。"
Weight = 7
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false 
+++


## チュートリアル データ {#チュートリアル-データ .TOC-Heading}

チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
このチュートリアルでは、ファサード構造の作成、アセットの挿入、建物へのテクスチャの追加など、写真から建物をモデリングする方法を学習します。また、複雑な CGA のテクニックについても学習します。

|演習|
|:--|
|・[Part 1 :ファサードの構造をモデリング](#part-1-ファサードの構造をモデリング)|
|・[Part 2 :ファサード アセットの挿入](#part-2-ファサード-アセットの挿入)|
|・[Part 3 :ファサードのテクスチャを作成](#part-3-ファサードのテクスチャを作成)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-6596F59E-08D1-42BE-9E14-44482EF8F227-web.png" title="すべてのテクスチャが適用されたファサードの完成形" >}}

## Part 1 :ファサードの構造をモデリング


### ファサード モデリング
以下のワークフローでは、実際の写真からファサードを再作成するための CGA ルール セットを記述する方法を示します

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-340655E4-26C5-428D-835B-CA12D549506B-web.png" title=" "  >}}

このセッションでは、CGA ルールでファサードの基本構造を作成します。ルール セットの拡張を進めながら、写真をより詳細に分析し、CGA ルールでプリモデルされたアセットをどのように使用できるかを学習します。

### ルール ファイルの作成

ルール ファイルを作成するために、以下の手順を行います。

1.  **[[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウ** で Tutorial_07_Facade_Modeling
フォルダーを展開します。
2.  scenes フォルダー の **FacadeModeling_01.cej** シーンを開きます。
3. **[File] メニュー** → **[New]** → **[CityEngine]** → **[CGA Rule File]**
    をクリックして、新規ルール ファイルを作成します。
4. **[Next]** をクリックします。
5. ルール名を「**facade_01.cga**」と入力します。
6. **[Finish]** をクリックします。

新しい CGA ルール ファイルが作成され、[[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)] ウィンドウが起動します。CityEngine の現在のバージョンの記述以外は空の状態です。

### ボリュームとファサード

これから建物の作成を始めます。まず押し出し操作によりマス モデルを作成します。建物の height 属性を使用します。

1.  ルール ファイルの最初に **height** 属性を追加します。
```
attr height 			= 24
```
2.  スタート ルールを **extrude** 操作を使用して記述し、その結果の形状に Building と名前を付けます。
```
Lot --> extrude(height) 
        Building
```
3.  ファサードのみが必要なので、**Building** ルールで component split を使用して正面を除くすべての面を削除し、**Frontfacade** ルールを呼び出します。
```
Building -->
	comp(f) { front : Frontfacade }
```

### フロアの追加
上記のファサードの写真を見ると、以下の画像のように、異なるタイプのフロアを分析することができます

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-A1419AE4-EEC2-43CF-9235-729CBDF5A82F-web.png" title="壁面の解析" >}}


1.  はじめに**高さ**と床寸法についての属性を定義していきます。
```
attr groundfloor_height 	= 5.5
attr floor_height 		= 4.5
```
2. **Frontfacade** ルールを **Building** ルールの下に追加します。
```
Frontfacade -->	
	split(y) { groundfloor_height : Floor(split.index)          // 地上フロア
		 |       floor_height : Floor(split.index)          // 第一フロア (二階)
		 |       floor_height : Floor(split.index)          // 第二フロア (三階)
		 |    { ~floor_height : Floor(split.index) }*       // 中間階
		 |       floor_height : Floor(999)                  // 最上階、インデックスは999
		 |                0.5 : s('1, '1, 0.3) LedgeAsset } // 屋根直下のトップレッジ
```

前面のファサードは水平方向に分割されて、各フロアに **floor_height** (フロアの高さ) の属性が設定されます。**Floor** 形状はフロアのインデックスである **split.index** によってパラメータで制御されます。このパラメータはサブ ルールに渡され、特定のフロアに対して何のエレメントを作成するかを決定します。

最上階の場合、フロア インデックスは 999 に設定されます。これにより、このフロアを識別することができます。また、中層階は繰り返し分割されているため、建物は異なる高さに動的に適応し、中層階で残りの垂直スペースを埋めることができます。

なお、**[CGA Editor]** ウィンドウには、未定義の **Floor** ルールと **LedgeAsset** ルールに対する警告が表示されます。チュートリアルの後半で、このルールを参照するため問題ありません。<br>


3. Ctrl ＋ S キーを押し、ルールを保存します。

4. **[Navigator]** ウィンドウの **facade_01.cga** ルールを [[3D View](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] ウィンドウの区画の上にドラッグします。
これによって、はじめてファサードが生成されます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-08D488BD-936E-4673-8121-89745CBD836B-web.png" title="フロアに分割されたファサード" >}}

Z キーを押すと、ファサードの正面に移動できます。

 ルールを割り当てて別の方法でモデルを生成するには、**[Inspector]** ウィンドウで **[Assign]** をクリックし、**facade_01.cga** ルールを選択して **[Generate models of selected shapes]** ボタンをクリックします (Ctrl＋G キーを押します)。<br>


### フロア レッジ (水平方向の張り出し) の追加

現在、フロアはレッジとタイルの形状に分割されています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-A53B0118-06AA-4847-B12B-C97DAAC97FBB-web.png" title="レッジの解析" >}}
1. **floorindex** パラメータを持つ **Floor** ルールを追加します。
```
Floor(floorindex) -->
	case floorindex == 0 :
		Subfloor(floorindex)
	case floorindex == 2 :
		split(y) {  ~1 : Subfloor(floorindex)
			 | 0.5 : TopLedge }
	else :
		split(y) {   1 : BottomLedge(floorindex)
			 |  ~1 : Subfloor(floorindex) 
			 | 0.5 : TopLedge }
```

フロア インデックスは、異なるフロアの特定のレッジを処理するために使用します。

-   地上階 (floorindex 0) にはレッジはないため、タイルのみを呼び出します。

-   二番目のフロア (Floor 2) については、窓領域がフロアの一番下の高さから開始されるため、ボトム レッジはありません。このフロアのバルコニーは後のステップで作成します。

-   それ以外のフロアにはボトム レッジ、タイルおよびトップ レッジ領域があります。

2. ルール ファイルを保存し、モデルを生成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-0B765350-988F-415E-8AE2-DF871361D746-web.png" title="レッジで分割されたフロア">}}

### サブフロアの追加

サブフロアは各フロアの左右端に位置する小さな壁領域とそれらの間の繰り返しタイルで構成されています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-06EB9F2D-88EE-43C0-9A50-DB0AA767E073-web.png" title="サブフロアの解析" >}}



1. ルール ファイルの先頭に他の属性と一緒に以下の属性を追加します。
```
attr tile_width 		= 3.1
```
2. **Subfloor** ルールをルール ファイルの一番下に追加します。
```
Subfloor(floorindex) -->
	split(x){ 0.5 : Wall(1) 
			| { ~tile_width : Tile(floorindex) }* 
			| 0.5 : Wall(1) }
```
これにより、フロアが繰り返しのタイルと両側の壁に水平に分割されます。

3. 他の属性の次に **wallcolor** 属性を追加します。
```
attr wallColor          = "#ffffff"
```
4. 続いて、ルール ファイルの一番下に **walltype** パラメータを持つ **Wall** ルールを追加します。
```
Wall(walltype) -->
	case walltype == 1 :
		color(wallColor)
	case walltype == 2 :
		color(wallColor)
	else :
		color(wallColor)
```

パラメータ化された **Wall** 形状を追加しました。これは後のステップでファサードにテクスチャを貼り付ける際に重要です。ファサードの写真を見ると、3 つの異なる壁のタイプがあることが分かります。

-   暗いブロックのダート テクスチャ

-   明るいブロックのダート テクスチャ

-   ダート テクスチャのみ。これは主にブロック構造を持たないファサード アセットに対して必要となります。
5. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-0D43975C-346E-4DB2-A1FA-7439828D86E2-web.png" title="各フロアがタイルに分割された状態" >}}

上記の **Wall** ルールの壁スタイルは、同一の出力を生成します。前述したように、後のステップで壁のタイプごとに異なるテクスチャを追加することで変更されます。

##  

### タイルの追加

このファサードのタイルは均質になっています。ここで地上フロアのタイルとそれより上の階のタイルを区別する必要があります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-6708D776-1DAF-43A2-B3FF-C1F3CF2AED46-web.png" title="タイルの解析" >}}

1. **door_width** 属性と **window_width** 属性を使用して異なる分割サイズを設定します。
```
attr door_width		= 2.1	
attr window_width	= 1.4
```
2. **Subfloor** ルールの後に **Tile** ルールを追加します。
```
Tile(floorindex) -->
	case floorindex == 0 :
		split(x){ ~1 : SolidWall 
			|  door_width : DoorTile
			| ~1 : SolidWall }		 
	else : 	
		split(x){ ~1 : Wall(getWalltype(floorindex))
			|  window_width : WindowTile(floorindex)
			| ~1 : Wall(getWalltype(floorindex)) }
```


地上フロアのタイルでは、**Wall** 形状の代わりに **SolidWall** 形状が追加されます。これは、地上フロアのドアがファサードからめり込んだ状態になっているために必要になります。ドアと壁の間に穴ができるのを防ぐために、特定の厚さを持った立体を挿入することにより、壁エレメントを作ります。この厚さは後の **Door** ルールでも使用するため、これを定数変数 **wall_inset** として定義します。<br>
複数回使用される値を宣言しておくと、同じ値が別のルールで使用されることを確認できることにもなり、便利です。

3. 属性と **Lot** ルールの間に **wall_inset const** を追加します。
```
const wall_inset = 0.4
```
4. **SolidWall** ルールを **Wall** ルールの下に追加します。
```
SolidWall -->
	s('1, '1, wall_inset)
	t(0, 0, -wall_inset)
	i("builtin:cube:notex")
	Wall(1)
```

5. **Wall** ルールの上に関数を宣言して、フロア インデックスから壁のタイプを取得します。
```
getWalltype(floorindex) = 
	case floorindex == 0 : 1
	case floorindex == 1 : 1
	else : 2
```

ファサードの写真を見ると、地上フロアおよび一番目のフロア (二階) は暗いテクスチャ、それ以外には明るいテクスチャとなっているのが分かります。**getWallstyle** 関数はフロア インデックスを対応する壁のタイプに割り当てます。

6. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-6FB5FB0A-6328-4AA3-9A10-098B878B4177-web.png" title="タイル分割後のファサード">}}

**FacadeModeling_02.cej** シーンと **facade_02.cga** ルール ファイルを開いて、この時点でシーンとルールがどのようになっているか確認できます。


## Part 2 :ファサード アセットの挿入

次にファサードで事前にモデル化されたアセットを使用する方法を学習します。
### アセット

現在モデリングしているファサードの写真を見ると、以下の項目についてアセットが必要であることが分かります。

-   窓: 窓エレメントとして使用

-   丸い窓上部: 窓上部の装飾

-   三角の窓上部: 窓上部の装飾

-   半円弧: 地上フロアのアーチとして使用

-   レッジ: すべてのレッジとして使用

-   モディリオン: 窓や地上フロアのアーチの装飾として使用

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-C2155F96-2425-4083-B4A6-BE960546914C-web.png" title="使用するアセット" width="500px" >}}

これらのアセットはすでにチュートリアル プロジェクトの asset フォルダーに含まれています。これらのアセットをプレビューするには、**[Navigator]** ウィンドウで目的のアセットを選択して右クリックし、**[File Preview]** を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-C3FED8E3-88EB-4624-B3B1-B81A12E5A2C3-web.png" title="Inspector のプレビューで表示された三角形の窓の装飾" width="500px">}}



以下の行をルール ファイルの属性の宣言の下にアセットへの参照を追加します。
```
const window_asset 		= "facades/elem.window.frame.obj"
const round_wintop_asset 	= "facades/round_windowtop.obj"
const tri_wintop_asset 		= "facades/triangle_windowtop.obj"
const halfarc_asset 		= "facades/arc_thin.obj"
const ledge_asset 		= 
                           "facades/ledge.03.twopart_lessprojection.obj"
const modillion_asset 		=
             "facades/ledge_modillion.03.for_cornice_ledge_closed.lod0.obj"
```


### 窓の追加
窓を追加をするために以下の手順を行います。

1. **Window asset** を正確に配置するためのルールが準備できました。**Tile** ルールの後に **WindowTile** ルールを追加して、**Window** 形状を呼び出します。
```
WindowTile(floorindex) -->
	Window
```
2.  そして次の **Window** ルールを追加して、**window asset** とその背後のガラス面をサイズ調整、配置、挿入します。
```
Window -->
	s('1,'1,0.2) t(0,0,-0.2) 
	t(0,0,0.02)
	[ i(window_asset) Wall(0) ]
	Glass
```
3. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-00D8743F-6C49-4C03-989C-71FFD9B168EB-web.png" title="窓アセットを挿入したファサード">}}


### 窓の装飾の追加

ファサードの写真をもう一度見みると、フロアによって異なる窓 (または窓のエレメント) があることに気づきます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-97CAE6B0-1DE9-422D-BFF3-9A171FBFDFBF-web.png" title="窓の解析">}}


1. **WindowTile** ルールを拡張し、フロア インデックスに固有の形状を以下のようにトリガーします。
```
WindowTile(floorindex) -->
	case floorindex == 1 || floorindex == 999 : 
		Window
	case floorindex == 2 : 
		Window
		t(0, '1, 0)
		WindowOrnamentRound
	else :
		Window
		WindowLedge
		t(0, '1, 0)
		WindowOrnamentTriangle
```
-   第一フロア (二階) と最上階には特別な装飾はないため、**Window** 形状のみが呼び出されます。

-   第二フロア (三階) には新しい形状 **WindowOrnamentRound**
    を追加します。このエレメントは窓の上の境界線に配置されるため、現在のスコープを y 軸方向に
    **\'1** 移動します。

-   他の窓タイル (中間階) には、**WindowLedge** 形状と **WindowOrnamentTriangle** 装飾が追加されます。<br>
最終的なアセットを直接使用せずに、最初に代用となる立方体を挿入します。
実際のアセットのサイズをより設定し易くなります。この場合、組み込みの立方体 アセットを使用できます。

2. **WindowTile** ルールの後に以下のルールを追加して、サイズを設定し、X 軸でスコープをセンタリングします。立方体を挿入して、見やすくするために色をつけ、代用となる立法体を作成します。
```
WindowOrnamentTriangle -->
	s('1.7, 1.2, 0.3)
	center(x) 
	i("builtin:cube")
	color("#ff0000")

WindowOrnamentRound -->
	s('1.7, 1.2, 0.4)
	center(x)
	i("builtin:cube")
	color("#00ff00")

WindowLedge -->
	s('1.5, 0.2, 0.1)
	t(0, -0.2, 0)
	center(x)
	i("builtin:cube")
	color("#0000ff")
```
3. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-969DA945-B804-403F-844C-9A1AF8577EE0-web.png" title=" ">}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-FDA1D5D8-0CBF-463A-95BD-47EBB4C00BD5-web.png" title="代用として色つきの立方体を使用した窓の装飾" >}}


#### 代用となる立方体を実際のアセットに交換

代用となる立方体を実際のアセットと交換するために、以下の手順を実行します。
1. 窓の装飾のサイズは妥当なようなので、立方体の代わりにアセットを挿入し、(**WindowLedge** については立方体のまま) 色を各ルールの **Wall** 形状の呼び出しに置き換えます。
```
WindowOrnamentTriangle -->
	s('1.7, 1.2, 0.3)
	center(x) 
	i(tri_wintop_asset)
	Wall(0)

WindowOrnamentRound -->
	s('1.7, 1.2, 0.4)
	center(x)
	i(round_wintop_asset)
	Wall(0)

WindowLedge -->
	s('1.5, 0.2, 0.1)
	t(0, -0.2, 0)
	center(x)
	i("builtin:cube")
	Wall(0)
```
2. ルール ファイルを保存し、モデルを適用します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-68A04B40-9188-4981-A9A1-D635EED9C401-web.png" title=" " >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-4A0A04FD-E93B-48CC-B755-7E726921762E-web.png" title="窓の装飾アセットを挿入した状態" >}}


3. 丸い窓の装飾には、第二フロアの側面の柱がないため、分割操作で **WindowOrnamentRound** ルールを拡張します。これにより、以下のモディリオン アセット用のスコープが準備されます。
```
WindowOrnamentRound -->
	s('1.7, 1.2, 0.4)
	center(x)
	i(round_wintop_asset)
	Wall(0)
	split(x) {           ~1 : WindowMod
		 | window_width : NIL
		 |           ~1 : WindowMod }
```
4. **WindowOrnamentRound** ルールの後に **WindowMod** ルールを追加します。サイズはモディリオンを挿入する前に設定されます。
```
WindowMod -->
	s(0.2, '1.3, '0.6)
	t(0, '-1, 0)
	center(x)
	i(modillion_asset)
	Wall(0)
```
 y 方向に相対的な負の移動 **(\'-1)** を適用すると、アセットの上面が装飾の下面に揃えられることに注意してください。<br>
5. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-2C21C225-7627-45AB-B89E-29B8384915C2-web.png" title="ピラーが挿入された窓の装飾" >}}


### ドアの追加

ドア タイルは垂直方向に分割されて、ドア、アーチおよび上部エリアに分割されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-8EDAD727-5B82-4BC5-A082-A0935CB9D02B-web.png" title="ドアタイルの構造" >}}

続いて、以下のルールを **Window** ルールの下に追加します。

1. 楕円形のアーチにならないようにするために、アーチ部の高さはドア (現在の x
スコープ) の幅の半分にする必要があります。
```
DoorTile -->
	split(y) {         ~1 : Door
		 | scope.sx/2 : Arcs
		 |        0.5 : Arctop }
```
2. ドアの上部エリアでは、壁のエレメントとその上に重なったモディリオン アセットが挿入されます。
```
Arctop -->
	Wall(1)
	s(0.5, '1, 0.3)
	center(x)
	i(modillion_asset)
	Wall(1)
```
3. アーチ エリアはさらに分割され、2 つのアーチ アセットが挿入されます。インセットに対して事前に定義した変数 **wall_inset** を使用します。また、アーチの右半分を回転して正しい向きにする必要があります。
```
Arcs -->
	s('1, '1, wall_inset)
	t(0, 0, -wall_inset)
	Doortop
	i("builtin:cube")
	split(x) { ~1 : ArcAsset
		 | ~1 : r(scopeCenter,0,0,-90) ArcAsset }
```
4. 実際のアーチ アセットを **ArcAsset** ルールに挿入し、**Doortop** ルールと **Door** ルールに **Wall** タイプを設定します。
```
ArcAsset --> 
	i(halfarc_asset)
	Wall(1)

Doortop -->
	Wall(0)

Door -->
	t(0,0,-wall_inset)
	Wall(0)
```
**Door** ルールでは、ドアは壁からセット バックしています。<br>
5. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-6196FD30-2608-4089-9531-A9406930837D-web.png" title="アセットを挿入した状態のドアタイル"  >}}


### レッジの追加

トップ レッジにはシンプルな壁のストライプを使用し、ボトム レッジにはレッジ アセットを挿入して他のフロアとの区別がつくようにする必要があります。

1. トップとボトムのレッジにルールを追加します。
```
TopLedge -->
	WallStripe

BottomLedge(floorindex) -->
	case floorindex == 1 :
		split(y) { ~1 : Wall(0)
			 | ~1 : s('1, '1, 0.2) LedgeAsset }
	case floorindex == 999 :
		split(y) { ~1 : WallStripe
			 | ~1 : s('1, '1, 0.2) LedgeAsset }
	else : WallStripe

WallStripe -->
	split(x) { 0.5 : Wall(1)
		 |  ~1 : Wall(2)
		 | 0.5 : Wall(1) }

LedgeAsset -->
	i(ledge_asset)
	Wall(0)
```
2. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-6CBF3E71-6107-480B-8F13-0809342359E2-web.png" title=" " >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-4FBDA8B6-D719-474E-8809-746AECE7B4B5-web.png" title="レッジ アセットを挿入した状態" >}}


### バルコニーの追加

今度は、バルコニーの作成をしていきます。


1. **Floor** ルールを編集し、**Balcony** 形状を case floorindex == 2 : に追加します。
```
case floorindex == 2 :
		split(y) {  ~1 : Subfloor(floorindex) Balcony 
			 | 0.5 : TopLedge }
```
2.  **LedgeAsset** ルールの後に **Balcony** ルールを追加し、バルコニーの配置とサイズを確保するために、色を追加した単純な代用の立方体を作成します。
```
Balcony -->
	s('1, 2, 1)
	t(0, -0.3, 0)
	i("builtin:cube")
	color("#99ff55")
```
3. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-F21F888E-E769-4F18-9367-280DBFABAA36-web.png" title="バルコニーの位置とサイズを代用の立方体で視覚化" >}}


4.  以下の図のように、バルコニー ボックスを 3 つの要素に分割します。：梁 (Beams)、床 (Floor)、手すり (Railing)

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-7D9FD925-AB3D-4211-826C-7D26D53518D5-web.png" title="バルコニーの解析" >}}

a. バルコニーを **BalconyBeams**、**BalconyFloor**、および **RailingBox** エレメントに分割して、**Balcony** ルールの緑色を置き換えます。

```
Balcony -->
		s('1, 2, 1)
		t(0, -0.3, 0)
		i("builtin:cube")
		split(y) { 0.2 : BalconyBeams
				 | 0.3 : BalconyFloor
				 |   1 : RailingBox }
```

b. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-537601ED-E32E-448D-88AF-48924FD10884-web.png" title="バルコニー要素に分割されたバルコニー立方体" >}}

5. 繰り返し分割してバルコニーを支える梁を作成します。
```
BalconyBeams -->
	split(x) { ~0.4 : s(0.2, '1, '0.9) center(x) Wall(0) }*
```
**BalconyFloor** 形状は **Wall** ルールのみを定義します。
```
BalconyFloor --> Wall(0)
```
6. **RailingBox** ルールに対して component split を使用し、バルコニーの手すりとして使用する面を抽出します。
```
RailingBox -->
	comp(f) { front : Rail | left : Rail | right : Rail }
```
7. バルコニー ボックスのサイズを設定するには、立方体を挿入してバルコニー レールを作成します。
```
Rail -->
	s('1.1, '1, 0.1)
	t(0, 0, -0.1)
	center(x)
	i("builtin:cube")
	Wall(0)
```
8. ルール ファイルを保存し、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-5359BA93-6532-42F3-86DE-F468D0E65AEB-web.png" title="アセットによる最終的なファサードモデル" >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-E4F81817-7060-482A-A714-B2EBDD8DFF5F-web.png" title="最終的なファサードモデルをエクスポートし、Blenderでレンダリングした状態" >}}


これで、ジオメトリ アセットが挿入された最終モデルが完成しました。ルールを様々な区画に適用したり、**[Inspector]** ウィンドウにあるユーザー属性を変更してファサードのデザインを変えることができます。

最終結果については、**FacadeModeling_03.cej** シーンと **facade_03.cga** ルールを開くことで確認できます。

次のセクションでは、ファサードにテクスチャを適用する方法を学習します。

## Part 3 :ファサードのテクスチャを作成
次に、ファサードにテクスチャを適用します。

### テクスチャ アセットの作成

テクスチャ アセットを作成するには、以下の手順を実行します。

1. アセットを定義した後に、ルール ファイルの先頭に使用するテクスチャを追加します。
```
const wall_tex    = "facades/textures/brickwall.jpg"
const wall2_tex   = "facades/textures/brickwall_bright.jpg"
const dirt_tex    = "facades/textures/dirtmap.15.tif"
const doortop_tex = "facades/textures/doortoptex.jpg"
```
2. 窓とドアのテクスチャについては、それぞれのアセット フォルダーからランダムなテクスチャ文字列を取得する関数を定義することでテクスチャを個別にリストする必要がなくなります。テクスチャの後に以下の行を追加します。
```
randomWindowTex = fileRandom("*facades/textures/window.*.jpg")
randomDoorTex   = fileRandom("*facades/textures/doortex.*.jpg")
```
### グローバル UV 座標の設定

CGA を使用したテクスチャリングは、以下の 3 つの手順で行われます。

1.   **setupProjection ()** - UV 座標空間を定義します。

2.    **set (material.map) またはtexture ()** - テクスチャ ファイルを設定します。

3.    **projectUV ()** - UV 座標を適用します。


### テクスチャ レイヤーの追加

レンガのテクスチャとダート マップという 2 つのテクスチャ レイヤーをファサードに追加します。ファサード全体で一貫したテクスチャ座標を維持するには、ファサード ルールに UV 設定を追加する必要があります。テクスチャ設定を事前にテストするために、新しい中間的なルール **FrontfacadeTex** を追加します。

1. **Building** ルールを以下のように変更します。
```
Building -->
	comp(f) { front : FrontfacadeTex }
```
2. **Building** ルールの後に新しい **FrontfacadeTex** ルールを作成します。
```
FrontfacadeTex -->
	setupProjection(0, scope.xy, 2.25, 1.5, 0, 0, 1)
	texture("builtin:uvtest.png")
	projectUV(0)
```
**setupProjection (0,scope.xy,2.25,1.5,0,0,1)** は、テクスチャ チャネル 0 (カラー チャネル) のテクスチャ座標を定義します。UV 座標はスコープの x、y 平面に沿って投影され、x 方向には 2.25 単位ごと、y 方向には 1.5 単位ごとに繰り返されます。texture () 操作は **set (material.map)** のショートカットです。この場合、カラー マップを **builtin:uvtest.png** に設定します。これは、UV 座標をすばやく確認するためのテクスチャです。最後に、チャンネル 0 の UV 座標をベイクし、UV 座標を適用します。

3. ルール ファイルを保存しファサードを生成して、 UV 設定を確認します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-7A97A590-0539-4E15-9BB6-DE752A4619D3-web.png" title="ファサード上でカラーマップ UV をテスト" >}}


4.  ダート チャンネルの UV セットアップを追加します。
```
FrontfacadeTex -->
	setupProjection(0, scope.xy, 2.25, 1.5, 0, 0, 1)
	texture("builtin:uvtest.png")
	projectUV(0)

	setupProjection(2, scope.xy, '1, '1)
	set(material.dirtmap, ("builtin:uvtest.png"))
	projectUV(2)
```
このテクスチャはファサード全体に広がる必要があるため、ファサードの寸法である UV 設定には相対演算子 '1 と '1 を使用します。

5.  ルール ファイルを再度保存して、生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-BC71319D-4538-4FD9-97C1-4D54BD671968-web.png" title="ファサード上にテスト用のカラーおよびダート UV を貼り付けた状態" >}}


6.  ファサードがテクスチャでどのように見えるかを確認するために、**builtin:uvtest.png** テクスチャを実際のテクスチャと交換します。

```
FrontfacadeTex -->
	setupProjection(0, scope.xy, 2.25, 1.5, 0, 0, 1)
	texture(wall_tex)
	projectUV(0)

	setupProjection(2, scope.xy, '1, '1)
	set(material.dirtmap, dirt_tex)
	projectUV(2)
```
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-DBA218D4-A4DB-4998-A1F1-E3DF7CA81FE8-web.png" title=" " >}}

UV 座標はファサードに適しています。

7. 建物の場合、この時点では UV のセットアップのみが必要なため、**FrontfacadeTex** ルールを以下のように変更します。
```
FrontfacadeTex -->
	setupProjection(0, scope.xy, 2.25, 1.5,  0, 0, 1)
	setupProjection(2, scope.xy, '1, '1)
	Frontfacade
```
**Frontfacade** ルールでは、後続のエレメントに対して UV 座標が正しく設定されるようになりました。

詳細については、[Texturing: Essential knowledge](https://doc.arcgis.com/en/cityengine/latest/cga/cga-texturing-essential-knowledge.htm) の [CGA reference](https://doc.arcgis.com/en/cityengine/latest/cga/cityengine-cga-introduction.htm) を参照してください。

### 壁にテクスチャを貼り付ける

ワークフローの前半で、**walltype** パラメータを **Wall** ルールに追加しました。これを使用して、壁のタイプごとに異なるテクスチャを割り当てます。

1. **Wall** ルールを探して以下のように変更します。
```
Wall(walltype) -->
	// dark bricks with dirt
	case walltype == 1 :
		color(wallColor)
		texture(wall_tex)
		set(material.dirtmap, dirt_tex)
		projectUV(0) projectUV(2)
	// bright bricks with dirt
	case walltype == 2 :
		color(wallColor)
		texture(wall2_tex)
		set(material.dirtmap, dirt_tex)
		projectUV(0) projectUV(2)
	// dirt only
	else :
		color(wallColor)
		set(material.dirtmap, dirt_tex)
		projectUV(2)
```

2. ルール ファイルを保存してモデルを再生します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-881E897B-4416-49F9-8BB6-19749C672327-web.png" title="壁が適用されたファサード" >}}

すべての壁エレメントは、いずれかのタイプの壁でテクスチャされます。

### 窓アセットのテクスチャを設定する

窓アセットの場合、一連の窓テクスチャを使用してガラス板に色を付けるため、ガラス形状全体にわたるように UV 座標を設定する必要があります。これを行うには、x 方向と y 方向の両方に **'1** を使用します。テクスチャ操作では、前に定義した **randomWindowTex** 関数を呼び出すことによって、ランダムなガラスのテクスチャが選択されます。

1. **Window** ルールの後に **Glass** ルールを追加します。
```
Glass -->
	setupProjection(0, scope.xy, '1, '1)
	projectUV(0)
	texture(randomWindowTex)
```

2. ルール ファイルを保存して、モデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-15C4CD15-E68A-45E9-9EFB-9E3C29F7DE2D-web.png" title="窓が適用されたファサード" >}}

3. 次に、ガラスに鏡面光沢を追加します。
```
Glass -->
	setupProjection(0, scope.xy, '1, '1)
	projectUV(0)
	texture(randomWindowTex)
	set(material.specular.r, 1)
	set(material.specular.g, 1)
	set(material.specular.b, 1)
	set(material.shininess, 4)
```

4. ルール ファイルを保存してモデルを生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-863EA4CD-69D7-4181-8D2C-A49E43D70AD4-web.png" title="" >}}

### ドア形状にテクスチャを貼り付ける

ドア面は窓ガラスと同じテクスチャになっています。**Doortop** ルールと **Door** ルールを以下のように置き換えます。
```
Doortop -->
	setupProjection(0, scope.xy, '1, '1)
	texture(doortop_tex)
	projectUV(0)

Door -->
	t(0, 0, -wall_inset)
	setupProjection(0, scope.xy, '1, '1)
	texture(randomDoorTex)
	projectUV(0)
```
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-7-Facade-modeling/GUID-6596F59E-08D1-42BE-9E14-44482EF8F227-web.png" title="すべてのテクスチャが適用されたファサードの完成形" >}}

**FacadeModeling_04.cej** シーンと **facade_04.cga** ルールを開いて、最終結果を確認します。

このチュートリアルでは、以下の方法を学習しました。

- ファサードの構造をモデル化
- 窓、ドア、レッジなどのアセットを挿入
- 壁、窓、ドアにテクスチャを適用

CGA 形状文法の詳細については、 [Rule-based modeling tutorial](https://doc.arcgis.com/en/cityengine/latest/tutorials/essentials-rule-based-modeling.htm)、および [Rule-based modeling](https://doc.arcgis.com/en/cityengine/latest/get-started/get-started-rule-based-modeling.htm) と [CGA modeling](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-modeling-overview.htm) のヘルプ トピックを参照してください。





