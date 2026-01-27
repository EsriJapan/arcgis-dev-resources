+++
title = "チュートリアル 18: ハンドル"
description = "モデルにハンドル機能を追加する CGA ルールの作成方法を学習します。"
weight = 21
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
draft = false
author = "鷺谷"
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。


## 概要
このチュートリアルは、主にモデルにハンドル機能を追加したい CGA ルール作成者向けです。ハンドルを設定すると、[Viewport] ウィンドウ内で CGA 属性を編集することができます。モデル編集を簡易化し、どの属性をコントロールできるかを視覚的に確認することができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-C21B3D93-5FC5-4F25-A31B-3549CC7AC9BF-web.png" title=" " width="500px" >}}

|演習|
|:--|
|・[Part 1: 基本的なライン ハンドル](#part-1-基本的なライン-ハンドル)|
|・[Part 2: 高度なライン ハンドル](#part-2-高度なライン-ハンドル)|
|・[Part 3: その他のハンドル タイプ](#part-3-その他のハンドルタイプ)|


## Part 1: 基本的なライン ハンドル
ハンドルは CGA で使用される属性アノテーションによって生成され、動的な編集ツールを提供します。これにより、モデルの寸法や位置を [Viewport] ウィンドウ内で直接、精密に操作することができます。このセクションでは、まずライン ハンドルの作成から始めます。

1. [[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウで Tutorial_18_Handles tutorial フォルダーを展開してください。
2. Scenes フォルダー内の part 1.cej ファイルをダブルクリックし、[[Viewport](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] ウィンドウでシーンを開きます。
3. 「Would you like to regenerate these models?」と尋ねられた場合は **Yes** をクリックします。
4. キューブ モデルを選択し、[[Inspector](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm)] ウィンドウで height、width、depth、offset の属性を確認します。
5. Rules/cube.cga ルール ファイルをダブルクリックし、[[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)] ウィンドウを開きます。
このファイルには、ハンドルのアノテーションが含まれています。

```
#@Handle(shape=Cube)
attr height = 10

#@Handle(shape=Cube, axis=x, skin=sphere, color="#6666ff")
attr width = 10

#@Handle(shape=Cube, axis=z, skin=diameterArrow)
attr depth = 10

#@Handle(shape=ShapeForHandleOnly
axis=x
reference=origin
slip=inside
translate={0,0.5,0})
attr offsetX = 5


Lot --> 
	[ s(offsetX,height,1) ShapeForHandleOnly ] t(offsetX,0,0) 
	t(0,0,-depth/2) s(width,0,depth)
	extrude(height)
	Cube

Cube --> 
	color("#E5E6E7")

ShapeForHandleOnly --> NIL
```


### 高さハンドルの作成
キューブの高さを調節するハンドルを作成します。

1. height 属性にアノテーションを追加し、**[File] メニュー → [Save]** をクリックし、ルールを保存します。

```
@Handle(shape=Cube)
attr height = 10
```

これにより、キューブ モデルの高さを制御するハンドルが追加されます。ハンドルは CGA ルールのスコープに付与されます。この最初の例では、生成されるキューブ モデルのジオメトリーとスコープが一致するため、Cube ルールが選ばれています。

2. キューブ モデルを選択し、**[Generate Model]** ツール (Ctrl + G) をクリックしてモデルを再生成し、ハンドルを表示します。<br>ハンドルの青い矢印をクリックしてドラッグすることで、属性の値を編集できます。ハンドルをドラッグすると、属性の値が表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-BD3B828F-D777-4A3C-B37F-DCF80577BC2B-web.png" title=" " width="500px" >}}

{{< callout >}}

ハンドルはモデルの外側に配置されます。ビューを回転させるとハンドルも合わせて最適な位置に移動するので、モデルに隠れたりしません。

{{< /callout >}}

3. ビューをズームインします。ハンドルがモデルの外側に維持できない場合、ハンドルはモデルの外側ではなく、モデル上に配置されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-96866706-ED3A-47D8-9EFA-0F7BC0FEC15C-web.png" title=" " width="500px" >}}


### 幅ハンドルの作成
次にキューブの幅をコントロールするハンドルを作成します。

1. width 属性に以下のアノテーションを追加し、Ctrl + S を押してルールを保存します。

```
@Handle(shape=Cube, axis=x, skin=sphere, color="#6666ffff")
attr width = 10
```

これは、同じ Cube という名前のルールに別のハンドルを追加し、位置や外観をカスタマイズするための追加パラメーターを使用します。

* axis = x ハンドルの方向をキューブのスコープに対して x 方向に指定します。
* skin = sphere ハンドルの先端を矢印から球体に変更します。
* color=”#6666ff” ハンドルの色をデフォルトの青から紫に変更します。

2. Ctrl+G を押してモデルを再生成し、新しいハンドルを確認します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-D00B691C-0883-45A9-AA6C-D917A5318808-web.png" title=" " width="500px" >}}

3. マウス ポインターをハンドルの上に重ねます。
CityEngine は、**[Viewport]** ウィンドウ内の関連するスコープと、**[Inspector]** ウィンドウ内の属性の両方をハイライト表示します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-E5C661EF-7C50-4228-947F-8311E47EC73A-web.png" title=" " width="500px" >}}


### 奥行きハンドルの作成
次に、キューブの奥行きをコントロールするハンドルを作成します。

1. 次のアノテーションを depth 属性に追加し、保存して再生成します。

```
@Handle(shape=Cube, axis=z, skin=diameterArrow)
attr depth = 10
```

再び、axis パラメーターを設定して、ハンドルが配置されるスコープ軸を指定します。モデルの depth 属性は、width や height 属性とは異なる動作をします。この属性はキューブの中心を基準にして奥行きをスケーリングします。この動作に対応するために、skin=diameterArrow パラメーターを使用します。これにより、異なるドラッグ動作を持つハンドルが作成され、奥行きを変更するために使用できる 2 つの青い矢印が表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-40D227F4-AE9C-41D5-92EA-656925E6ACFD-web.png" title=" " width="500px" >}}

2. ビューを回転させます。ビューが回転すると、ハンドルはモデルや他のハンドルとの描画の衝突を避けるように表示されます。


### オフセット ハンドルの作成
最後のパラメーターである offsetX には、視点が変化しても動かないハンドルを作成します。

1. offsetX に以下のハンドル アノテーションと、専用のプレースホルダー スコープを追加します。

```
@Handle(shape=ShapeForHandleOnly, axis=x, reference=origin, slip=inside)
attr offsetX = 5

Lot --> 
	[ s(offsetX,height,1) ShapeForHandleOnly ] t(offsetX,0,0) 
	t(0,0,-depth/2) s(width,0,depth)
	extrude(height)
	Cube

Cube --> 
	color("#E5E6E7")

ShapeForHandleOnly --> NIL

```

このハンドルは、ジオメトリーを生成しないこのハンドル専用に作成された空のプレースホルダー スコープの ShapeForHandleOnly に付加されています。

2. シェープのスコープを視覚的に確認するには、**[Model Hierarchy]** ウィンドウを開き、ShapeForHandleOnly を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-144C0400-A6EC-43AB-879D-F35150EB039C-web.png" title=" " width="500px" >}}

slip=inside パラメーターは、ハンドルがモデルの輪郭内に配置され、視点の変更によって動かないように指定します。通常、ハンドルは指定された軸方向において、スコープの 4 つの辺のいずれかに表示される可能性がありますが、reference=origin パラメーターを使用すると、ハンドルはスコープの原点に隣接する辺のみに表示されます。


3. この新しいハンドルを編集して、キューブの中心に触れるようにします。

```
@Handle(shape=ShapeForHandleOnly, 
        axis=x, reference=origin, slip=inside, translate={0,0.5,0})
attr offsetX = 5
```

translate = パラメーターは現在のスコープに合わせてハンドルを移動させます。引数 {0, 0.5 ,0} は、scope-y のサイズ (高さ) に対して 0.5 倍分、つまり上方向にハンドルを移動させます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-1938EBA5-F512-407A-B048-78CB35719D20-web.png" title=" " width="500px" >}}

translate= パラメーターがない場合、offsetX ハンドルは床の位置 (左) にあり、translate= パラメーターを使用すると、ハンドルはキューブの中心 (右) に配置されます。最初の 3 つのハンドルはシルエットの外側にありますが、slip=inside パラメーターによって、このハンドルは常に見えないキューブのシルエット内に配置されます。ハンドルにマウスカーソルを重ねると、shape という名前のルールのスコープが青くハイライト表示されます。


## Part 2: 高度なライン ハンドル

より複雑な風車のモデルを使用してハンドルを設定します。


### 基本的な風車小屋ハンドルの作成
本チュートリアルの [Part 1](#part-1-基本的なライン-ハンドル) では、立方形のシェープにハンドルを追加しました。視点が変わると、ハンドルはキューブの面と同じ平面にスナップされていました。同様の設定を円搭形の風車小屋オブジェクトに適用できます。

1. part 2.cej ファイルを開きます。シーン内のさまざまな属性を確認してみましょう。
2.	rules/windmill.cga ルール ファイルを開きます。<br>円筒形や他の形状の繰り返しなど、フィーチャ形状を様々にコントロールするための属性が設定されています。複雑なジオメトリーに対してハンドルを追加する方法を掘り下げていきます。
3.	基本的なハンドルを作成し、属性の値の範囲を定義するためのアノテーションを追加します。

```
@Handle(shape=UnderRoof)
@Range(min=3, max=100)
attr height = 7
```

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-BBA28F0D-D2FB-4202-9091-0F3C04206C2C-web.png" title=" " width="500px" >}}

視点を回転させると、このハンドルはあまり効果的ではないことがわかります。視点が回転すると、UnderRoof スコープのコーナーの位置の間をジャンプします。スコープは建物よりも大きく、形状が異なるため、モデルとハンドルの関連付けを追跡することは困難です。

4.	基本的なハンドルを修正し、範囲制限を無効にしてください。

```
@Handle(shape=UnderRoof, reference=center, slip=screen)
@Range(min=3, max=100, restricted=false)
attr height = 7
```

reference = center パラメーターによってハンドルがスコープの中心に付与されます (詳細は、[**CGA リファレンス**](https://doc.arcgis.com/en/cityengine/latest/cga/cityengine-cga-introduction.htm)をご参照ください)。slip = パラメーターはハンドルがモデルの外側に移動する方向を定義します。今回の場合、slip=screen パラメーターによって、ハンドルはカメラの 2D スクリーンに平行に移動します。これによって作成されたハンドルはより明確かつスムーズに動きます。


### 半径ハンドルの追加
画面の上部と下部に、風車の半径を制御する 2 つのハンドルを追加することができます。

1. 半径ハンドルを作成するアノテーションを追加します。

```
@Handle(shape=UnderRoof, reference=radial, align=bottomLeft)
@Range(min=1.5, max=9)
attr bottomRadius = 2

@Handle(shape=UnderRoof, reference=radial, align=topLeft)
@Range(min=1.0, max=5.1)
attr topRadius = 1
```

2. 視点を回転させます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-297C05BB-AFFD-420F-AEAD-56EC4212CDE9-web.png" title=" " width="500px" >}}

モデルの周りで視点を回転させると、2 つのハンドルがモデルのジオメトリーに対して適切に動くことがわかります。reference=radial パラメーターは、円筒の半径を調整する位置にハンドルを配置します。align= パラメーターは、[Viewport] ウィンドウ内でハンドルの表示位置を指定するためのパラメーターです。align を使用することで、画面上で各ハンドルの位置を固定することができます。これを定義しない場合、bottomRadius ハンドルがモデルの上部に表示されてしまうことがあります。


### チェーン ハンドルの作成
多くのモデルでは、1つの属性が複数のパートに影響を与えます。この風車小屋の例では、bladeLength 属性が風車の 4枚の羽根の長さを変更します。CityEngine はそのようなハンドルを連結して、各属性に対して 単一のチェーン ハンドルとして表示します。

1. bladeLength 属性に Handle アノテーションを追加します。

```
@Handle(shape=Blade, axis=x, reference=origin)
attr bladeLength = height * 0.6
```

視点の方向によって、異なるハンドル チェーンが表示されることがあります。この例では、風車の羽根に対して 2 つのハンドルからなる 1 つのチェーンとして表示しています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-5E0CA95A-C252-48D2-A77C-646F9F71E2B2-web.png" title=" " width="500px" >}}

2. repeat=none パラメーターを使用し、チェーンの挙動をオフにします。

```
@Handle(shape=Blade, axis=x, reference=origin, repeat=none)
attr bladeLength = height * 0.6
```

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-7DA65638-E5E1-4FC1-8F6B-D66BCF6EB07B-web.png" title=" " width="500px" >}}


### ドアと窓のハンドルを追加
windowScale 属性は少し複雑ですが、ドアと窓のサイズを操作できます。

{{< callout >}}

windoor ルールは単一のルールで窓とドアの両方を作成します。

{{< /callout >}}

1. windowScale 属性をコントロールするハンドルを作成します。

```
@Handle(shape=Windoor, axis=y)
@Range(min=0.1, max=1.5)
attr windowScale = 1
```

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-8BC3A27F-35F5-46D6-A8DB-BC5F7D35772F-web.png" title=" " width="500px" >}}

{{< callout >}}

height 属性を編集すると、窓の数が増減します。

{{< /callout >}}

windowScale 属性に関するもう一つの観点は、これは縮尺の値であり、窓のサイズではないということです。さらに、各窓やドアには異なるサイズのスコープが関連付けられています。CityEngine は繰り返す要素の上にチェーン ハンドルを配置し、各スコープに合わせて各ハンドルの長さをスケーリングします。このようなライン ハンドルをドラッグすると（ハンドルの長さとは異なる値で）、実際の長さが括弧内に表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-2BB31BBE-50E4-42C3-80E8-302FEAB5FD8D-web.png" title=" " width="500px" >}}

2. ハンドルにカーソルを合わせると、ハンドルに付与されているスコープがハイライト表示されます。<br>この挙動はすべてのハンドル タイプに共通しています。ここでは、windoor スコープが青色で表示されています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-5F8CB0E2-0066-40DC-938B-561B1F1AB878-web.png" title=" " width="500px" >}}

3. さまざまな方向からハンドルの位置を確認しましょう。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-C1EEDC1A-FEAD-418D-A034-FDF7BE310ADF-web.png" title=" " width="500px" >}}


## Part 3: その他のハンドルタイプ
このチュートリアルの最後のワークフローでは、カラー、トグル、回転ハンドル、およびスコープの削除によるハンドルの非表示にする方法について見ていきます。

### モデルにスコープを追加
なじみのない CGA コードを扱う際には、**[Model Hierarchy]** ウィンドウを使用して使用可能なスコープを確認すると便利です。

1. part 3.cej シーンを開きます。
2. シーンでモデルを生成します。
3. rules/biped.cga ルール ファイルを開きます。

```
import leftArm  : "limb.cga" 
import rightArm : "limb.cga" 
import leftLeg  : "limb.cga" 
import rightLeg : "limb.cga" 

@Handle(type=linear, axis=x, reference=origin, translate={0, 0.5,0.5},shape=HeadHandle^1, skin=diameterArrow)
attr boneSize = 0.16

@Handle(type=linear, shape=Mass, align=left)
attr height = 1.85

@Color
attr color = "#888888"

attr showLimbHandles = false

Lot --> 
	t (-boneSize*2.15,0,0)
	s (boneSize*4.3, 0, boneSize )
	extrude(height)
	Mass
	
Mass -->
	split (y)
	{
		~4 : Body |
		boneSize*2 : Head 
	}
	
Head -->
	t (scope.sx/2-boneSize , 0, scope.sz/2-boneSize )
	s (boneSize*2, boneSize*2, boneSize*2)
	HeadHandle("sphere.obj")
	
HeadHandle(mesh) --> 
	i (mesh) X

# (…)
```

このチュートリアルの [Part 1](#part-1-基本的なライン-ハンドル) と [Part 2](#part-2-高度なライン-ハンドル) では、ライン ハンドルを使用しました。これらのタイプに加えて、ハンドルは他の種類の属性も調整できます。次は、モデルの頭上に配置されるカラー ハンドルを追加します。

4. **[Window]** メニューをクリックして、**[Model Hierarchy]** ウィンドウを開きます。
5. **[Inspect model]** ツールをクリックして、シェープ ツリーを表示します。
6. モデルの頭部をクリックすると、Model Hierarchy 内のスコープが表示されます。
7. 階層をたどって、固有の名前を持つ適切なスコープを探します。<br>ここでは HeadHandle がハンドルに適したスコープです。X はこの CGA ルール内の複数箇所で使用されているため、ハンドルの接続には理想的ではありません。
8. **[Model Hierarchy]** ウィンドウで HeadHandle 上にカーソルを合わせると、このルールには 1 つの入力パラメーターがあり、現在の値は sphere.obj であることが表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-44EE7D25-7844-404E-9CBC-E25B36AFBAAE-web.png" title=" " width="500px" >}}

### カラー ハンドルの作成
次に、前のセクションで確認した HeadHandle スコープにカラー ハンドルを追加します。

1. 以下のアノテーションを追加します。

```
@Handle(type=color, shape=HeadHandle^1, axis=y, reference=center)
@Color
attr color = "#888888"
```

スコープは、そのルール名とルールが受け取るパラメーターの数によって識別されます。この場合、shape=HeadHandle^1 です。これまでの例では、パラメーターの数がゼロだったため、この識別子を省略することができました。color 属性は文字列であり、type=color パラメーターを使用することで、**[Viewport]** ウィンドウ内で編集可能になります。カラー、トグル、セレクター ハンドルは、ライン ハンドルとは異なる動作をします。たとえば、axis=y はハンドルが y (上方向) に移動できるようにし、reference=center はハンドルをスコープの中心点に付与します。

2. モデルを生成します。<br>現在では、三角形として表示されるカラー ハンドルが追加されています。この新しいハンドルにカーソルを合わせると、カラー ホイールが表示され、color 属性を編集できるようになります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-3F20E317-14F1-4167-BD0A-ED60746493A2-web.png" title=" " width="500px" >}}

三角形の内側をクリックしてドラッグすると、色の彩度と明度が変化します。同じクリックを保持したまま大きな円の周囲をドラッグすると、色相が変化します。以前に選択した色は、ホイールの外側の小さな円に表示されます。


### ハンドルの表示コントロール
ルール内で関連するスコープの生成を制御することにより、ハンドルを非表示にすることができます。このモデルの各腕、および脚は、1 つのインポートされたルール インスタンスによって作成されています。それぞれのインポートされたインスタンスには、手足の位置を制御するための 3 つのパラメーターを持っています。しかし、モデルにこれらの 12 個のハンドルを追加すると、紛らわしくなります。そこで、これらのハンドルに、ブール属性 (showLimbHandles) が  true の場合にのみ生成されるオプションのスコープを付与します。

1. ハンドルにオプションのスコープを接続します。

```
@Handle(type=toggle, shape=HeadHandle^1, slip=screen, align=right)
attr showLimbHandles = false
```

トグル ハンドル タイプは Boolean 属性に対して提供され、四角形のスイッチとして表示されます。今回は、slip=screen と align=right を使用して、ハンドルを球状の頭部の右側に一貫した位置で配置します。

2. ハンドルのアノテーションを追加した後、Ctrl+S を押して保存し、Ctrl+G を押してモデルを再生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-18-handles/GUID-E8407A9E-C5E9-41A4-A995-24BAA52DB226-web.png" title=" " width="500px" >}}

3. トグル ハンドルは、クリックするか、クリックしたまま上下にドラッグすることで操作できます。このハンドルを使って showLimbHandles を true に設定します。有効になると、各手足に対して回転ハンドルが表示され、人モデルを自由にポーズさせることができます。

デフォルトでは、回転ハンドルは表示方向が変わっても動きません。ただし、横から見るとハンドルは見えなくなります。視点をモデルの周囲で回転させることで、より良いハンドルの操作が可能になることがあります。そうすることで、モデル上に配置されたすべてのハンドルと、それらの編集により影響を受ける属性を確認できます。ぜひ、ハンドルのさまざまな可能性と、ハンドルをモデルにどう適用できるかを探ってみてください。
