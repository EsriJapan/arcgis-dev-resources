+++
title = "チュートリアル 17: Desert City"
description = "GIS データのインポートとフィッティング、各オブジェクト タイプに対する CGA ルールの適用、ArcGIS 製品での編集方法について学習します。"
weight = 20
alwaysopen = false
publishDate = 2022-03-23T00:00:00+09:00
draft = false
author = "原田"
+++

## チュートリアルデータ
チュートリアルデータは、 **[Help] メニュー → [Download Tutorials and Examples]** を選択し、 [Example Desert City] をダウンロードしてください。

## 概要
GIS データのインポートとフィッティング、各オブジェクト タイプに対する CGA ルールの適用、ArcGIS 製品での編集方法について学習します。

|演習|
|:--|
|・[Part 1: Desert City チュートリアル](#part-1-desert-city-チュートリアル)|

## Part 1: Desert City チュートリアル

### Desert City のシーン ファイルを探検する 

1. [Scene] フォルダーにある **Desert_City.cej** のシーン ファイルをダブルクリックします。 
1. [Regenerate saved models] ダイアログが表示されたら **[Yes]** をクリックします。全てのエレメントのモデルが生成されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-17-Desert-city/GUID-102BC226-58AD-45EB-BB25-22F98F883B38-web.png" title=" " width="500" >}}

1. ナビゲート ツール群を使用しながら、シーン内の建物や道路、植物などを探索しましょう。
データの全体を見てみると、デフォルトでは一部の建物だけが生成されていることがわかります。これは、メモリ使用量をセーブするため、少量のモデルのみを生成しているためです。 
1. [Inspector] ウィンドウで、**Buidling_Height**、**Buidling_Usage**、**Level of Detail** などのパラメーターをいくつか変更します。 
1. 中心地外のモデルが立っていない建物と道路シェープをいくつか選択します。Selection ツールを使用して、左マウスボタンをクリック、ホールドしながら四角形を描くとシェープが選択できます。 

{{< callout >}}

四角形を描くとき、左上から右下にドラッグすると描いた四角形内に完全に含まれるシェープのみが選択できます。反対に右上から左下にドラッグして四角形を描画すると、描いた四角形に含まれる、または交差するシェープがすべて選択されます。

{{< /callout >}}

6. ツールバーの [Generate] ボタンをクリックするか、Ctrl+G キー (Mac では apple+G キー) を使用して選択したシェープにモデルを生成します。 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-17-Desert-city/GUID-74861067-484C-4071-841D-48A31D1D1226-web.png" title=" " width="500" >}}

### シーン全体を再生成する 
完成した Desert_City.cej シーンは GIS データとルール セットで構成されています。GIS データには属性を持ったフットプリント シェープ、道路の中心線、植物の一ポイント、壁のライン、電線などがあり、”ジオデータベース (GDB) ”ファイルに格納されています。各データはそれぞれ異なるデータ タイプ (ポイント、ライン、ポリゴン) が使用されているため、それぞれ異なるレイヤーとして格納されています。 

1. [Scene] フォルダー内の **Desert_City_terrain_only.cej** シーン ファイルを開きます。 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-17-Desert-city/GUID-8BBC0168-645C-45A1-9289-E43B118A4166-web.png" title=" " width="500" >}}


### GIS データのインポート 
1. [Navigator] ウィンドウ → **Example_Desert_City → [data** フォルダー→ **DesertCityGDB.gdb** を [3D Viewport] ウィンドウにドラッグ & ドロップします。**[File] メニュー → [Import]** からでもインポートすることができます。 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-17-Desert-city/GUID-1962034D-9C73-42C5-BCBA-007F3A214C7C-web.png" title=" " width="500" >}}

2. **TerrainExtent** レイヤーのチェックボックスをオフにします。 
3. **[Next]** をクリックします。**[Merge Nodes]** チェックボックスをオンにし、**Horizontal/Vertical Merge Distance** をそれぞれ 2 に設定して **[Finish]** をクリックします。 


### インポートした GIS データをテレイン上にフィッティングする 
[Scene Editor] ウィンドウですべてのレイヤーが作成されたことを確認します。[Viewport] ウィンドウを確認すると追加したデータが見当たりませんが、これはすべてのデータが標高値 0 に設定されているためです。ここで、データがテレイン上の正しい高さにフィットされるよう設定します。 

1. [Scene Editor] ウィンドウで、**[PowerLines]**、**[Structures]**、**[Vegetation]** レイヤーの表示を非表示にします。 
1. [Scene] ウィンドウで Streets レイヤーを選択 → **[Select] メニュー → [Select Objects in Same Layer]** をクリックして選択します。 
1. **[Graph] メニュー → [Align Graph To Terrain…]** をクリックします。 
1. Align function を **Project All**、Heightmap を **Terrain** 、Offset を **0.4** メートルに設定します。 
1. **[Shapes] メニュー → [Align Shapes To Terrain…]** をクリックします。 
1. Align function を **Translate to Maximum**、Heightmap を **Terrain** 、Offset を **0.2** メートルに設定します。 

{{< callout >}}

 Translate を選択するとシェープは水平に保たれます。  

{{< /callout >}}

7. **[Layer] メニュー →	[Align Terrain To Shapes…]** をクリックします。 
8. Terrain を +- 250 メートルに設定します。 
9. 非表示にしていた PowerLines、Structure、Vegetation レイヤーを表示します。 
10. これから行う設定では、地形は現在のままにしておきます。 
11. グラフ レイヤー (PowerLines, Walls) をそれぞれ選択し、**[Graph] メニュー → [Align Graph To Terrain…]** を選択します。 それぞれ Offset を -0.5 メートルに設定します。 
12. シェープ レイヤー (Structure、Vegetation Markers) をそれぞれ選択し、**[Shapes] メニュー → [Align Shapes To Terrain…]** をクリックし、 Align function を **Translate to Maximum**、Offset を **-0.5** メートルに設定します。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-17-Desert-city/GUID-206D92FF-B2E8-45F3-A682-DEB52D50206D-web.png" title=" " width="500" >}}
 

### CGA ルールの適用 
次は各オブジェクト タイプに対して CGA ルールを適用します。 
ルール ファイルの適用にはさまざまな方法があります。以下は代表的なルールの適用方法です。 


- [Navigator] ウィンドウからルール ファイルを直接 [Viewport] ウィンドウの選択シェープに適用する方法 	
- [Inspector] ウィンドウから Rule File の Assign ボタンを用いて適用する方法 
- レイヤーを右クリックし Assign Rule File から適用する方法 

Structures や Vegetation などの Marker シェープはとても小さいため、ドラッグ & ドロップで適用するのは大変です。そのため、レイヤーを右クリックしてすべてのシェープを選択し、[Inspector] ウィンドウからルールを適用する方法が最適です。それぞれ最適な方法を使用して、各レイヤーにルール ファイルを適用してみましょう。各レイヤーに rules フォルダーにあるルール ファイルは以下の表のとおりです。 

|  レイヤー  |  ルール ファイル  |
| ---- | ---- |
|  Street  |  Desrt_City_Street.cga   |
|  PowerLines |  Desert_City_Powerlines.cga  |
|  Walls  |  Desert_City_Walls.cga  |
|  Buildings  |  Desert_City_Buildings.cga  |
|  Structures |  Desert_City_Structures.cga  |
|  Vegetation  |  Deesert_City_Vegetation.cga  |


### 市中心のテクスチャ解像度を上げる 
CityEngine は 3D 表示するすべてのテクスチャ (ラスター画像) をグラフィックス カードのビデオ メモリ内に保存します。そのため、広範囲のテクスチャでは十分な詳細度は得られないかもしれませんが、CityEngine 内のすべてのテクスチャ ファイルの推奨最大解像度は 4000 × 4000 です。(CityEngine でのテクスチャの取り扱いについては以下の参考をご参照ください: [concepts in CityEngine-ArcGIS](https://community.esri.com/t5/arcgis-cityengine-questions/textures-raster-files-concepts-in-cityengine/td-p/45049) )





建物のベースマップとして利用するテレイン テクスチャの質を部分的に上げるには、ダイナミック ブロック分割 (Block Subdivision) を有効化し、その区画シェープを建物下のベースとして使用する方法があります。そしてそのベースに、より高解像度のテクスチャをマッピングすることができます。 


1. [Scene Editor] ウィンドウで **Streets** レイヤー以外のすべてのレイヤーを非表示にします。 
1. [Viewport] ウィンドウ内で [Selection] ツールを使用し右上から左下へ四角形を描いて、いくつかブロックを選択します。 
1. [Inspecto]r ウィンドウ → [Block Parameters] → [shapeCreation] パラメーターを **True** に変更し、**[lotAreaMin and Max]** を 2000 と 4000 に変更します。 
1. 各ブロック内のシェープを 1 つずつ選択し、 **[Select] メニュー → Select Objects in the Same Group** を選択します。 
1. 選択した区画に **Desert_City_ParcelTexturing.cga** ルール ファイルを適用します。 
1. ツールバーの **[Generate]** ボタンをクリックします。 



### 新しく学校を作成する 
市中心地近くのブロックで、サッカー コート付きの新しい学校を作成します。本項目では、ArcGIS for Desktop 製品のアプリケーションを使用して手動でデータの編集を行います。ArcGIS 製品をご利用でない方、手動でのデータ編集が必要ない方は次の項目へお進みください。 


{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-17-Desert-city/GUID-DF70072E-442B-4567-9070-4C951719DE4A-web.png" title="" width="500" >}}



ArcMap でデータを編集します。 
1. ArcMap を開き、**DesertCityGDB.gdb** に格納されているデータをマップに追加します。 
1. プロジェクトの Data フォルダーを右クリック → [新規作成] で新規にファイル ジオデータベースを作成し、名前 (例：**MyIntervention.gdb**) を付けます。 
1. 次のフィーチャクラスを作成します。 

	- ポリゴン フィーチャクラス

		**Intervention_Buidlings** と名付けます。 
		**Float** タイプで **Building_Height**、**Text** タイプで **Building_Usage** という属性を追加します。 
	
	- ポリゴン フィーチャクラス 

		**Intervension_Soccer_Field** と名付けます。 
	
	- ポイント フィーチャ 

		**Intervention_Vegetation** 
		**Float** タイプで **Size** という属性を追加します。

	- ライン フィーチャ 

		**Intervention_Walls** と名付けます。 
		**Float** タイプで **Width** という属性を追加します。 

1. フィーチャを作成します。エディター ツールバーで 1 つ以上の学校用の建物を作図します。属性テーブルの Building_Height フィールドに実際の学校の高さ (メートル単位) 、Building_Usage フィールドに建物の使用用途を入力します。 
1. Intervention_Wall フィーチャクラスで、ラインで壁を作図します。属性テーブルの **Width** フィールドに **0.4** (メートル単位) を入力します。**Width** フィールドに入力した値は、CityEngine に自動的に反映されます。 
1. 学校の建物ポリゴンの周囲の空き地にサッカーコート用のポリゴンを作図します。 
1. Intervention_Vegetation フィーチャクラスで、植物用のポイントを作図します。属性テーブルの **size** フィールドに 2 から 15 (メートル単位) の高さ値を入力します。 
1. 編集を保存します。 
1. CityEngine に戻り、**[File] メニュー → [Refresh Workspace]** をクリックして、変更を更新します。 

### 編集したデータをインポートする 
CityEngine の [Viewport] ウィンドウに GDB をドラッグ & ドロップすると、簡単にインポートすることができます。前のチャプターで作成した GDB または data フォルダーに入っている **DesertCity_Intervention.gdb** のどちらを追加しても構いません。 

1. Shapes と Graphs をテレインに沿うように設定します。 
1. 各データにルールを適用します。 
1. サッカー フィールド用のルールも用意されているので、データに適用します。 
ルール適用後、サッカー フィールドの方向が間違っている場合、[Inspector] ウィンドウの **Orientation_Change** パラメーターを **true** に変更します。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-17-Desert-city/GUID-1F8A6AFB-B5CE-465A-B7A6-12D4CBF100AD-web.png" title="" width="500" >}}
