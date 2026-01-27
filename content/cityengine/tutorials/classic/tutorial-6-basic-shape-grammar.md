+++
title = "チュートリアル 6: 基本的なシェープ グラマー"
description = "CityEngine の CGA シェープ グラマーの基本を学習します。"
weight = 6
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
CGA シェープ グラマーは、CityEngine の中心をなす技術です。
この機能を知ることは、自分で建物や都市を構築する上で重要です。<br>

このチュートリアルでは、CityEngine の CGA シェープ グラマーの基本事項を学習します。
基本的な建物を構築するための一通りのステップを含む完成したルール ファイルの中身を確認していきます。<br>

CGA シェープ グラマーの詳細については、エッセンシャル チュートリアルの[ルール ベースのモデリング](https://doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/)やヘルプの [Rule-based modeling](https://doc.arcgis.com/en/cityengine/latest/get-started/get-started-rule-based-modeling.htm)、[CGA modeling](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-modeling-overview.htm) をご参照ください。

|演習|
|:--|
|・[Part 1 :シンプルな建物のモデリング](#part-1-シンプルな建物のモデリング)|
|・[Part 2 :建物へのテクスチャや色の追加](#part-2-建物へのテクスチャや色の追加)|
|・[Part 3 :LOD の追加](#part-3-lod-の追加)|
|・[Part 4 :建物属性のランダム変化](#part-4-建物属性のランダム変化)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-AC47ED7E-7B9A-49B9-AAA1-9572F8BB677B-web-2.png" title=" " width="500px" >}}

## Part 1 :シンプルな建物のモデリング
典型的な壁面を持ったシンプルな建物を構築するために、以下の操作を行います。
1. [[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウで **Tutorial_06_Basic_Shape_Grammar** フォルダーを展開します。

2. **scenes** フォルダーのシーン **SimpleBuilding_01.cej** を開くと、以下の建物が表示されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-6CA00FEB-ACEE-4214-935C-E5A5AAA3B7C5-web-2.png" title=" " width="500px" >}}

3. [[3D View](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] ウィンドウにて区画 (すでにモデルが生成されている場合は生成されたもの) を選択し、**[[Inspector](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm)]** ウィンドウ (開いていない場合は **[Window] メニュー → [Inspector]** から開きます) を開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-425AD8F9-3F7B-4448-8178-483E69CE1DE1-web-2.png" title=" " width="500px" >}}
ここで 2 つの重要なパラメーターがあります。
	* **Rule File** は、**rules** ファイル内の **simpleBuilding.01.cga** へのリンクです。このルール ファイルがモデル生成の実行時に使用されます。
	* **Start Rule** は、ルール ファイルの中で実行される最初のルールを定義しています。この場合のスタート ルールは **Lot** ルールです。

4. CGA ルール ファイルを確認します。
**[Inspector]** ウィンドウで Rule File リンクをクリックするか、**[Navigator]** ウィンドウで rules ファイル → **simpleBuilding.01.cga** をダブルクリックして **[[CGA Rule Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)]** ウィンドウを開きます。

次のセクションでは、シンプルな建物を構築ために必要な属性、アセット、ルールを確認します。

### 建物属性
建物の属性情報は (ルール ファイル中のどこでも配置できますが)、通常はルール ファイルの最初の段階で定義されます。
これらの属性はルール セット全体で使用され、**Rule File** と **Start Rule** の定義の下、**[CGA Rule Editor]** ウィンドウだけでなく、**[Inspector]** ウィンドウの **[CGA Attribute Mapping Area]** でも値を設定したり、編集したりすることができます。<br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/Additional_Capture_CGA_Attribute_Mapping_Area.png" title=" " width="600px" >}}

建物の属性情報は下記のとおりです。
```
attr groundfloor_height = 4
attr floor_height       = 3.5
attr tile_width         = 4
attr height             = 11
```

### Lot ルール
これで建物の構築ができる状態です。
**Lot** ルールは、**[Inspector]** ウィンドウで割り当てられている最初のルールです。
Extrude オペレーションを使用して立体モデルが作成されます。
```
Lot -->
    extrude(height)
    Building
```

### Building ルール
Component 分割を適用することで立体モデルを壁面 (Facade) に分解します。
```
Building -->
    comp(f) { front : Frontfacade | side : Sidefacade | top: Roof }
```

**Building** ルールは、component 分割を適用することにより、建物モデルの図形を面に分解します。
これにより、前面 (玄関のある正面) の図形、いくつかの側面の図形、屋根 (Roof) の図形ができます。

その後で壁面がモデリングされます。
典型的な壁面モデリングのワークフローでは、壁面をフロア (Floors) に分け、さらにフロアを分解し、タイル (Tiles) と呼ばれる要素に分けられます。
1 つのタイルは壁と窓の要素で構成されています。
この分割は CGA シェープグラマーの中で以下のように記述されています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-F6D840F2-6C8C-4817-96AC-0BD946D095EE-web.png" title=" " width="500px" >}}

### Front Façade ルール
**FrontFacade** ルールは、建物の前面を高さ 4m の一階のフロアの図形と、高さ 3.5m の 2 階以上をフロアの繰り返した (繰り返すためにはリピート オペレーター [*] を使用します) 図形に分割します。<br>
```
Frontfacade -->	
    split(y) { groundfloor_height : Groundfloor
             |    { ~floor_height : Floor}* }
```

チルダ オペレーター [~] を使用すると、ビルの実際の高さにかかわらず、すべての上階のフロアが綺麗に配置されるように自動調節されます。
特に前面については、1 階フロアの見た目は他のフロアと異なることが多くなります。
例えば、玄関の有無や床の高さ、窓の外観、色なども異なります。

### Side Façade ルール
**SideFacade** ルールは、建物の側面をフロアに分割します。
したがって、フロアの高さが前面と等しくなるように subdivision 分割が同様に実行されます。
```
Sidefacade -->
    split(y) { groundfloor_height : Floor
             |    { ~floor_height : Floor}* }
```

### Roof ルール
**Roof** ルールは、屋根の形状を 0.4m 分内側にオフセットし、屋根を少し下げてフラットな屋根にします。
```
Roof -->
    offset(-0.4, inside)
    t(0, 0, -0.2)
```

### Floor ルール
**Floor** ルールは、フロアを幅およそ 3m のタイルに分割する典型的な例です。
フロアのデザインをもう少し見栄え良くするために、壁要素の両端を幅 1m だけ分割します。
```
Floor -->
    split(x) {           0.5 : SolidWall
             | { ~tile_width : Tile }*
             |           0.5 : SolidWall }
```

### Ground Floor ルール
**Groundfloor** ルールは、地上フロアの形状を、右側に玄関が付いた以外は同様の subdivision 分割で整えます。
```
Groundfloor -->
    split(x) {           0.5 : SolidWall
             | { ~tile_width : Tile }*
             |   ~tile_width : EntranceTile
             |           0.5 : SolidWall }
```
下図は、押し出しにより形成された立体モデル (上) とそれをフロアおよびタイルに分割したモデル (下) を示しています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-1957AC70-7D37-483F-9528-B5B906BBD94F-web-2.png" title="押し出された立体モデル" width="300px" >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-8867F114-19A3-4E37-AC99-0F68BD85F08F-web-2.png" title="フロアおよびタイルに分割した立体モデル" width="300px" >}}

### Tile ルール
初期的な前面の構造を定義したら、次は **Tile** ルールによってさらにタイルをモデリングします。
```
Tile -->
    split(x) {    1 : SolidWall
             | ~1.5 : split(y) { 0.4 : SolidWall | ~1.5 : Window | 0.4: SolidWall }
             |    1 : SolidWall }
```
**Tile** ルールは、x 軸および y 軸方向に (入れ子状の split によって) タイルを分割することでタイルの見栄えを定義します。
このデザインでは、壁の要素は浮動的 (チルダが付いている) であり、壁の幅は 1 m、高さは窓の上下に 0.4m と固定されています。

### EntranceTile ルール
**EntranceTile** ルールは、玄関の形状をタイルの場合と同様に定義します (ただし底辺には壁は作りません)。
```
EntranceTile -->
    split(x) {  ~1 : SolidWall
             | 2.5 : split(y) { 3 : Door | ~2 : SolidWall }
             |  ~1 : SolidWall }
```

### SolidWall、Window、Door ルール
**SolidWall**、**Window**、**Door** ルールは、面に厚みと複雑な形状を追加します。
```
SolidWall -->
    s('1, '1, -0.4)
    primitiveCube()

Window -->
    t(0, 0, -0.2)
    split(y) { 0.1 : Frame
             |  ~1 : split(x)  {  0.1 : Frame | { ~1 : Glass | 0.1 : Frame }* }
             | 0.1 : Frame }

Door -->
    t(0, 0, -0.4)
    split(y) {   ~1 : split(x) { 0.15 : Frame 
                               |   ~1 : Panel 
                               | 0.05 : Frame 
                               |   ~1 : Panel 
                               | 0.15 : Frame }
             | 0.15 : Frame }
```
**SolidWall** ルールでは、**s(x,y,z)** オペレーションを使用することでスコープのサイズが設定できます。
相対座標が使用されているため、スコープの幅や高さは影響を受けません。
現在のスコープの x および y 方向は 1 倍にスケール (‘1) されますので結果的に何も変わりません。
z 方向は -0.4m に設定されているため、結果的に 0.4m の厚さ (内側向き) を持った壁になります。
**primitiveCube()** オペレーションは、現在の形状のスコープを満たす立方体を作成します。
次に、形状を x と y に分割することで、フレームやガラス、パネルのパーツを作成します。

**Window** ルールと **Door** のルールでは、**t(x,y,z)** オペレーションを使用することで現在の形状を z 方向にそれぞれ -0.2m、-0.4m 分移動させます。
これにより、窓は壁面から 0.2m 分、ドアは壁の端から 0.4m 分下がった位置になります。
次に、形状を x と y に分割することで、フレームやガラス、パネルのパーツを作成します。

**[CGA Rule Editor]** ウィンドウでは、**Frame**、**Glass**、**Panel** のルールが未定義であることから、警告が表示されるため注意してください。
これは、次のセクションでこれらのルールを追加するため、問題ありません。

ここまでのルールを全て適用すると、テクスチャなしのシンプルな建物が完成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-6CA00FEB-ACEE-4214-935C-E5A5AAA3B7C5-web-2.png" title=" " width="500px" >}}
Part 2 では、このシンプルな建物モデルにテクスチャや色を追加する方法を学習します。

## Part 2 :建物へのテクスチャや色の追加
ルール ファイルで使用するテクスチャと色を定義し、建物にテクスチャと色を追加します。
テクスチャは、**assets** フォルダーから読み込みます。

1. Part 1 からの続きまたは、シーン **SimpleBuilding_01.cej** を開きます。

2. **simpleBuilding_01.cga** ルールをダブルクリックして開きます。

3. 以下の行を自分のルール ファイルの属性の下に追加します。
```
// textures & colors
const wall_tex          = "facades/brick_white_02.jpg"
const dirt_tex          = "dirtmaps/dirtmap_04.jpg"
const roof_tex          = "roofs/flat_01.jpg"
const window_color      = "#85acd6"
const frame_color       = "#444444"
const door_color        = "#666666"
```
テクスチャと色は、**[Inspector]** ウィンドウでルールの属性として表示されないように、定数として定義されています。

4. **setupProjection()** コマンドを **Frontfacade** および **Sidefacade** ルールに追加します。
```
Frontfacade -->
    setupProjection(0, scope.xy, 1.5, 1.5, 0, 0, 1)
    setupProjection(2, scope.xy, scope.sx, scope.sy)
    split(y) { groundfloor_height : Groundfloor
             |    { ~floor_height : Floor}* }

Sidefacade -->
    setupProjection(0, scope.xy, 1.5, 1.5, 0, 0, 1)
    setupProjection(2, scope.xy, scope.sx, scope.sy)
    split(y) { groundfloor_height : Floor
             |    { ~floor_height : Floor}* }
```
**setupProjection()** コマンドは、スコープの xy 平面に投影された色 (チャンネル 0) とダートマップ (チャンネル 1) を建物前面上の UV 座標へ投影する準備をします。
したがって **scope.xy** が第 2 パラメーターとしてセットされています。<br>

ブロックのテクスチャ (チャンネル 0) は、X 方向と Y 方向の両方に 1.5m ごとに繰り返されます。
一方、ダートマップ (チャンネル 2) は建物前面全体にわたっており、そのために **scope.sx** および **scope.sy** がサイズ パラメーターとして使用されています。

5. **Sidefacade** ルールの下に **Roof** ルールを追加します。
```
Roof -->
    offset(-0.4, inside)
    t(0, 0, -0.2)
    setupProjection(0, scope.xy, scope.sx, scope.sy)
    texture(roof_tex)
    projectUV(0)
```
**Roof** ルールは、屋根の面全体に適用される UV 座標を準備し、屋根のテクスチャをセットし、ジオメトリにテクスチャ座標を適用します。<br>

建物モデルを選択したまま、**[CGA Rule Editor]** で編集する度に保存 (Ctrl+S) し、生成 (Ctrl+G) することで変更点を確認できます。

6. **SolidWall** ルールを編集して component 分割を追加し、その直下に新しい **Wall** ルールを追加します。
```
SolidWall -->
    s('1, '1, -0.4)
    primitiveCube()
    comp(f) { side : Wall | all : setupProjection(0, scope.xy, 1.5, 1.5, 0, '1) Wall }

Wall -->
    texture(wall_tex)
    set(material.dirtmap, dirt_tex)
    projectUV(0) projectUV(2)
```
component 分割によって、上下のパーツから壁の側面が分離されます。
これによって、これらのパーツに対して異なる **setupProjection()** を使用することができ、テクスチャが適切なサイズに調整され、配置されるようになります。<br>

**Wall** ルールでは、色およびダート チャンネルが先に定義した定数に設定されています。
また、UV をこれら 2 つのチャンネルに投影する必要もあります。

7. **Window** ルールの下に **Glass** ルールと **Frame** ルールを追加します。
```
Glass -->
    color(window_color)
    set(material.specular.r, 0.5) 
    set(material.specular.g, 0.5) 
    set(material.specular.b, 0.5)
    set(material.reflectivity, 0.5) 
    set(material.shininess, 50) 
    set(material.opacity, 0.9)

Frame -->
    color(frame_color)
```
**color()** オペレーションによって、窓の色をブルーに、フレームの色をダークグレーに設定します。
このとき、窓をよりリアルに見せるために、様々なマテリアル プロパティを設定します。

8. **Door** ルールの下に **Panel** ルールを追加します。
```
Panel -->
    color(door_color)
```
ここで、ドアのパネルの色をフレームよりも明るいグレーに設定します。

完成したルールを確認するために **simpleBuilding_02.cga** ルールを開きます。

下図は壁やドアなどにテクスチャや色を追加した最終形のモデルです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-5D082634-56C1-48A6-8ECA-60EF65894E41-web-2.png" title=" " width="500px" >}}

同じモデルを拡大した状態：
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-140D68F1-C2DF-40A4-AA07-E40AA6F93918-web-2.png" title=" " width="500px" >}}

任意の立体モデルにこのルールセットを適用：
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-BEABFDA8-A67A-40BA-80B5-660AF0A7326B-web-2.png" title=" " width="500px" >}}


Part 3 では LOD (Level Of Detail、詳細レベル) を追加します。

## Part 3 :LOD の追加
このセクションでは、ここまでに作成した建物に対して簡単な LOD (詳細度) を追加します。
モデルの複雑さ (ポリゴン数) を省略することができるため、シンプルな建物をより広範囲で作成する場合に有効です。

新しい LOD 属性を追加するために、以下を実行します。
1. Part 2 からの続きまたは、シーン **SimpleBuilding_02.cej** を開きます。

2. 開いていない場合は、**simpleBuilding_02.cga** を開きます。

3. 他の属性の下に新しい **LOD** 属性を追加します。
```
@Enum(0,1)
attr LOD                = 1
```
以下の LOD を定義します。
* LOD 0 : 低い詳細度、複雑さの程度も低い
* LOD 1 : 高い詳細度、複雑さの程度が高い

ここまでに作成した建物は、高解像度モデルになります。

再び現在のモデルを見てみると、窓 (Window) アセットのポリゴンを省略できそうです。
複雑な窓アセットの代わりにテクスチャを貼った平面を使用します。
次に、モデルの低解像度バージョンを作成します。

**Enum(0,1)** アノテーションによって、**[Inspector]** ウィンドウでこの属性のオプションを 0 と 1 に制限することができます。

4. **Roof** ルール内の既存のコードを **LOD > 0:** の下に配置し、テクスチャのパートを **else:** の下にコピーします。
```
Roof -->
	case LOD > 0:
		offset(-0.4, inside)
		t(0, 0, -0.2)
		setupProjection(0, scope.xy, scope.sx, scope.sy)
		texture(roof_tex)
		projectUV(0)
	else:
		setupProjection(0, scope.xy, scope.sx, scope.sy)
		texture(roof_tex)
		projectUV(0)
```
ここでは、**Roof** ルールに条件を追加しました。**LOD** 値が 0 よりも大きい場合 (つまり、高解像度モデルの場合)、オフセットして低くした屋根形状を使用します。
**LOD** 値が 0 の場合は、初期の component 分割によるシンプルな平面を使用します。

5. **Window** ルールでは、**LOD** 値にかかわらず分割を維持し、**LOD** 値が 0 よりも大きい場合でのみ窓のはめ込みを行います。
```
Window -->
    case LOD > 0:
        t(0, 0, -0.2)
        split(y) { 0.1 : Frame
                 |  ~1 : split(x) {  0.1 : Frame 
                                  | { ~1 : Glass | 0.1 : Frame }* }
                 | 0.1 : Frame }
    else:
        split(y) { 0.1 : Frame
                 |  ~1 : split(x) {  0.1 : Frame 
                                  | { ~1 : Glass | 0.1 : Frame }* }
                 | 0.1 : Frame }
```

6. **Door** ルールについても同様に、**LOD** 値が 0 よりも大きい場合でのみ扉のはめ込みを行います。
```
Door -->
    case LOD > 0:
        t(0, 0, -0.4)
        split(y) {   ~1 : split(x) { 0.15 : Frame 
                                   |   ~1 : Panel 
                                   | 0.05 : Frame 
                                   |   ~1 : Panel 
                                   | 0.15 : Frame }
                 | 0.15 : Frame }
    else:
        split(y) {   ~1 : split(x) { 0.15 : Frame 
                                   |   ~1 : Panel 
                                   | 0.05 : Frame 
                                   |   ~1 : Panel 
                                   | 0.15 : Frame }
                 | 0.15 : Frame }
```

7. **SolidWall** ルールでは、**LOD** 値が 0 の場合、窓と扉のはめ込みを行わないため、立体的な要素は必要なくなりました。
```
SolidWall -->
    case LOD > 0:
        s('1, '1, -0.4)
        primitiveCube()
        comp(f) { side : Wall 
                |  all : setupProjection(0, scope.xy, 1.5, 1.5, 0, '1) Wall }
    else:
        Wall
```
保存して再生成し、**[Inspector]** ウィンドウで属性を確認します。
新しい **LOD** 属性はここに表示されます。

8. **LOD** 値を「**0**」にします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-787E9E5F-C08E-4F2D-A6A6-3019154352EA-web-2.png" title=" " width="500px" >}}

ソース値がルールにて入力した値に変わります。
**LOD** 値が **0** の (低解像度バージョン) の建物モデルが再生成されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-D2A3D8FB-8E92-48DC-87FD-742457669FA4-web-2.png" title=" " width="500px" >}}

9.  5 キーを押すことで、untextured か、shaded に切り替わります。<br>
ポリゴン数を確認するために d キーを 2 回押して**インフォメーション ディスプレイ** バーを表示します。
LOD 値を 0 にした場合、モデルを構成するポリゴンの数が 2347 から 816 に減少したことがわかります。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-1CC2A632-7495-42C9-90F8-0A32851377BC-web-2.png" title="LOD=1 - 2347 ポリゴン" width="500px" >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-BA285B10-1C92-420B-8019-DDA0B9C729AA-web-2.png" title="LOD=0 - 816 ポリゴン" width="500px" >}}

Part 4 では、建物にランダムな変化を追加します。

## Part 4 :建物属性のランダム変化
このセクションでは、ランダム属性を定義することにより建物の生成に変化をつける方法を学習します。

1. Part 3 からの続きまたは、シーン **SimpleBuilding_03.cej** を開きます。

2. 作成したルールをそのまま使用するか、**simpleBuilding_03.cga** ルールをダブルクリックして開きます。

3. 以下のように建物の属性に変化を追加します。
```
attr groundfloor_height = rand(4,7)
attr floor_height       = rand(3.5,5)
attr tile_width         = rand(3,6)
attr height             = rand(11,25)
```
タイル幅を 3m から 6m の間で、高さを 11m から 25m の間で、床の高さをランダムに設定し、各建物に適用します。

4. 壁や屋根のテクスチャのアセットと窓の色がランダムになるようにします。
```
const wall_tex          = fileRandom("facades/*.jpg")
const dirt_tex          = fileRandom("dirtmaps/*.jpg")
const roof_tex          = fileRandom("roofs/*.jpg")
const window_color      = 33%  : "#85acd6"
                          33%  : "#96acb3"
                          else : "#999999"
```
**fileRandom()** 関数によって、壁、ダート、屋根のテクスチャをそれぞれのアセットのフォルダーからランダムに選択することができます。<br>
窓の色は、確率関数によって異なる 3 色を定義します。

5. **setback** オペレーションによって、区画内にスペースと変化を与えるために **Lot** ルールを変更します。
```
Lot --> 
 setback(rand(2, 6)) { all = color("#f0f0f0") Ground. | remainder : extrude(height) Building }
```
これは、2m から 6m の範囲で区画の内側を設定することで、内側の形状に基づいて建物を生成し、建物より外側の地面にライトグレーの着色を行います。

6. 大量の建物を生成するため、ルール内のデフォルトの **LOD** 値を **1** から **0** に変更し、ルールを保存します。
```
attr LOD = 0
```

7. **[Scene Editor]** ウィンドウ内の **Streetnetwork** レイヤーを右クリックし、**[Select Objects]** をクリックしてすべてのモデルを選択します。

8. **[Generate]** ツールをクリックして (もしくは Ctrl+G)、建物を再生成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-AC47ED7E-7B9A-49B9-AAA1-9572F8BB677B-web-2.png" title=" " width="500px" >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-6-basic-shape-grammar/GUID-71581E6D-635E-40ED-BCD6-A2E63310BA97-web-2.png" title=" " width="500px" >}}

完成したランダムな属性を持った建物モデルを確認するには、シーン **SimpleBuilding_04.cej** を開きます。

このチュートリアルでは、以下の方法を学習しました。
* シンプルな建物を生成するために必要な CityEngine の CGA シェープ グラマーを構成しました。
* テクスチャや色、LOD、ランダム性を属性に追加することで建物モデルに多様性を与えました。