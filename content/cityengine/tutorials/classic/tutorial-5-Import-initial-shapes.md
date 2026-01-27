+++
title = "チュートリアル 5: シェープのインポート"
description = "外部モデルをシェープとして取り込む方法を学習します。"
Weight = 5
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false 
+++


## チュートリアル データ 
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードすることができます。   


## 概要 
データのインポートは、CityEngine を使用する上で不可欠な部分です。シェープファイル、ジオデータベース、OBJ、FBX、USD、glTF、DWG、IFC など、多くの形式がサポートされています。詳細については、[ダイアログによるインポート](https://doc.arcgis.com/en/cityengine/latest/help/help-import-dialog.htm) を参照してください。
ほとんどのファイルの種類は、次の説明を含むシェープまたは静的モデルとしてインポートできます。

•	シェープは、CGA 生成のベースとして機能します。典型的な例はフットプリント データです。

•	静的モデルは、インポート後にスケーリング、回転、および変換できますが、CGA でそれ以上処理することはできません。典型的な例はランドマークの建物です。

このチュートリアルでは、データ形式をインポートする方法を示し、それらをさらに処理するためのワークフローを学習します。


|演習|
|:--|
|・[Part 1: シェープファイルのインポート](#part-1-シェープファイルのインポート)|
|・[Part 2: ジオデータベース データのインポート](#part-2-ジオデータベース-データのインポート)|
|・[Part 3: ポリライン Z シェープのインポート](#part-3-ポリライン-z-シェープのインポート)|
|・[Part 4: OBJ からシェープをインポート](#part-4-obj-からシェープをインポート)|
|・[Part 5: OBJ ファイルを建物モデルとして読み込む](#part-5-obj-ファイルを建物モデルとして読み込む)|
|・[Part 6: アセットをテクスチャ形状または静的モデルとしてインポートする](#part-6-アセットをテクスチャ形状または静的モデルとしてインポートする)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-D19DC111-A565-46F2-9B76-139CC3E03A07-web.png" title=" " width="400" >}}

## Part 1 :シェープファイルのインポート
シェープファイルをインポートするには、次の手順を実行します。 

1. **[File] メニュー → [New] → [CityEngine] → [CityEngine Scene]** をクリックしてシーンを作成します。 

2. **footprints.shp** ファイルを \data\shp_footprints フォルダーから [[Viewport](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] にドラッグします。

3. シーンの座標系として、**[No Projection]** の下の **[Raw data in meters]** を選択します。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-7290B5F1-399E-4D5D-9727-46FFA70E8364-web.png" title=" " width="400px" >}}  

シェープファイルのデータはメートル単位であり、ジオリファレンスされていないため、シーンの座標系は **Raw data in meters** に設定されます。

4.	**[OK]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-F9FA9394-38EF-480C-8EF8-8FA32F63DA18-web.png" title=" " width="400px" >}}  
 
5.	フットプリントを 1 つ選択すると、シェープファイルと共にインポートされたオブジェクト属性が表示されます。
オブジェクト属性は、[[Inspector](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm)] ウィンドウの **[Object Attributes]** の下に表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-89C58DE1-2938-4D88-81E6-AFB96F1B1E68-web.png" title=" " width="400px" >}}  


### ルールの適用とモデルの生成 
インポートされたフットプリントに対して [CGA ルール](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-modeling-overview.htm) を使用して単純な押し出しを行います。**extrude.cga** ルールは、高さオブジェクト属性で定義された高さまでフットプリントを立ち上げます。  
 
1. **rules** フォルダー内の **extrude.cga** ルール ファイルをダブルクリックして、[**[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)**] ウィンドウを開きます。 

```
attr height = 10 
 
@StartRule 
Lot --> extrude(height) 
```

2. **[Viewport]** ウィンドウですべてのフットプリントを選択します。 

3. 選択した図形に **extrude.cga** ルールをドラッグして、ルールを割り当てます。
  

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-3E29DB75-B9F2-4A8C-A1BC-ECFD54909ADC-web.png" title=" " width="400px" >}}    

**footprints_from_shp.cej** を開いて、生成されたモデルを確認します。 
 
## Part 2 :ジオデータベース データのインポート 
ジオデータベース データをインポートするワークフローは、シェープファイルのインポートと似ています。

1. シーンを作成します。

2. **footprints.gdb** フォルダーを **data** フォルダーから [Viewport] ウィンドウにドラッグします。 

{{< callout >}}
 
 **footprints.gdb** ファイルは、[[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウ内ではフォルダーとして表示されます。

{{< /callout >}}

3. **[FileGeodatabase]** ダイアログ ボックスが表示され、ジオデータベースからインポートするレイヤーを選択できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-58C316BF-36AD-4166-ADBB-FBD73978BC27-web.png" title=" " width="400px" >}}    

{{< callout >}}
 
 **[Next]** をクリックすると、**[Generate Bridges]**、**[Simplify Graph]**、**[Cleanup Graph]** などの追加のインポート オプションが表示されます。

{{< /callout >}}


4. **[Finish]** をクリックして選択したレイヤーをインポートします。 

シーン座標系を選択するよう求められます。ダイアログ ボックスに表示される座標系は、ジオデータベース内のデータから取得されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-D144973B-CE00-4176-9663-4A41A62F394E-web.png" title=" " width="400px" >}}   

ジオデータベースに含まれるデータは上記のシェープファイルの中身と同じものですので、同じ手順を適用してフットプリントから建物モデルを生成できます。
 


## Part 3 :ポリライン Z シェープのインポート 

1. シーンを作成します。
2. **sphereCity.shp** ファイルを **data\shp_sphereCity** フォルダーから **[Viewport]** ウィンドウにドラッグします。  

**[Select a shapefile data coordinate system]** ダイアログ ボックスが表示されます。

3.	シェープファイル データはメートル単位であり、ジオリファレンスされていないため、**[Raw Data in meters]** を選択します。
4.	**[OK]** をクリックします。

**sphereCity.shp** ファイルにはシーン座標系を定義する **.prj** ファイルがないため、**[Select Scene Coordinate System]** ダイアログ ボックスが表示されます。

5. シーン座標系として **Raw data in meters** を選択します。
データとシーンに同じ座標系を使用すると、インポート時にデータに再投影が適用されません。
 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-BBB804A2-2C89-4606-9BBC-D870485E2B95-web.png" title=" " width="400px">}}  


The new sphereCity shape layer が [[Scene Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-scene-editor.htm)] ウィンドウに追加され、フットプリント シェープには Z 値があるため、**Viewport** では 3D ポリゴンとして表示されます。  

### 属性 
このデータセットでは、**ruleFile** と **startRule** という 2 つの属性が定義されています。

{{< callout >}}

GIS アプリケーションに既に使用されている特定のシンタックスを使用すると、インポート時に Rule Files と Start Rules が直接アサインされ、手動でファイルをアサインする時間を省くことができます。

{{< /callout >}}

 GIS アプリケーションの属性テーブルは次のようになります。
 
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-9C3E248C-E2D4-4C16-AAFA-E793CECB3282-web.png" title=" " width="400px" >}}  

1. 1 つのシェープ (球体上の 1 つの面) を選択します。  
**[Inspector]** ウィンドウの **Object Attributes** 欄にオブジェクト属性が表示され、自動的に割り当てられるルールが **[Rules]** の下に表示されます。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-FA379DE5-99C4-4DA2-A440-D5BBEA2BEAA8-web.png" title=" " width="600px" >}}  
 

2. **[Scene Edito]** ウィンドウで **sphereCity** のすべてのシェープを選択します。  

3. **Generate** (Ctrl+G) をクリックすると、建物が生成されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-D19DC111-A565-46F2-9B76-139CC3E03A07-web.png" title=" " width="400px">}}  

**spherecity_from_shp.cej** シーンは、球体の都市をモデルで示しています。

### スタート ルールの変更 
個々のシェープについてスタート ルールを変更し、生成されるモデルを変えます。 


1. シーン内のモデルを 1 つ選択します。  

2. **[Start Rule]** の横にある **[Select]** をクリックします。
  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-7CC62818-4769-4073-AF24-B15854FDDF4B-web.png" title=" " width="400px" >}}  

**[Set Start Rule]** ダイアログ ボックスが表示されます。
 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-2C6F4E23-4C1F-4565-89F3-4CD852CC7959-web.png" title=" " width="400px" >}}  

スタート ルール (CGA コードで @StartRule タグが付いたルール) は太字で表示されます。

3.	新しいスタート ルールとして **[Commercial]** を選択します。

4.	**[OK]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-1343CF28-D871-4EC0-94A3-92C55B4097BC-web.png" title=" " width="400px" >}}  

## Part 4 :OBJ からシェープをインポート 
OBJ ファイルを図形として読み込むには、次の操作を行います。 
1. シーンを作成します。

2. \data\obj フォルダー内の **pompeii_footprints.obj** ファイルを右クリックし、**Import** を選択します。 

 [**OBJ**] インポート ダイアログが表示されます。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-79831170-198F-44D2-8B5E-0E3CD272F8FF-web.png" title=" " width="400px" >}}  

3. **[Import as static model]** のチェックを外します。

4. **[Finish]** をクリックします。  

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-1AAD5F9E-61F3-4006-BF3F-E009CADDE0FB-web.png" title=" " width="400px" >}}  

次に、フットプリントから単純な立ち上げを生成します。

5.	すべてのフットプリントを選択します。
6.	**extrude.cga** ルール ファイルを選択したフットプリントにドラッグします。
図形の上にルールをドラッグすると、図形が強調表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-D3916F6F-1FEA-496B-97E5-B940AB602AC7-web.png" title=" " width="400px" >}}  

**extrude.cga** ルール ファイルは、フットプリントの形状をルールの高さ属性で定義された高さ 10 メートルまで立ち上げます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-19C2843B-8258-4B29-8379-BEB904E1DDAE-web.png" title=" " width="400px" >}}  

**footprints_from_obj.cej** シーンを開いて、最終的な押し出しモデルを確認します。
　　  
## Part 5 :OBJ ファイルを建物モデルとして読み込む

ボリュームを CGA 文法で記述する代わりに、外部アプリケーションでモデル化できます。
このセクションでは、Autodesk Maya でモデル化された建物ボリュームを CityEngine に読み込み、CGA ルールを使用して側面を調整する方法について説明します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-F76D93BD-6C1D-4760-A618-C22C387A91AD-web.png" title=" " width="400px" >}}  


この建物ボリュームは、Maya の従来の方法でモデル化され、**.obj** ファイルとして書き出されました。

{{< callout >}}

CityEngine でサポートされているファイル形式の一覧については、[ダイアログによるインポート](https://doc.arcgis.com/en/cityengine/latest/help/help-import-dialog.htm)をご参照ください。 

{{< /callout >}}

OBJ をインポートするには、次の手順を実行します。


1. シーンを作成します。

2.	\data\obj フォルダー内の **Building_1.obj** ファイルを右クリックし、**[Import]** を選択します。
OBJ ダイアログ ボックスが表示されます。

3. **[Import as static model]** のチェックを外します。

4. **[Finish]** をクリックします。  
         
新しい **Building_1** シェープ レイヤーが **[Scene Editor]** ウィンドウに表示され、建物モデルが **[Viewport]** ウィンドウに表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-8F85F376-A2DE-4349-97F7-D4E949EE6338-web.png" title=" " width="400px" >}}  


 

  
### Building ルールを適用する
Building_1 shape には、Building スタート ルールが含まれます。モデルの座標系を CityEngine yUp システムに合わせる必要があります。
Building ルールでは、**alignScopeToAxes()** 操作と **comp(f)CGA** 操作を使用して、モデルを異なる面に分割します。屋根に対しては top セレクターを、建物正面に対しては **side** セレクターを使用します。
 

```
Building --> 
alignScopeToAxes(y) 
comp(f){top : color("#ff0000") Roof. | side : Facade. } 
```
 
建物モデルに建物ルールを適用するには、次の手順を実行します。
1.	建物モデルを選択します。
2.	**importedVolume_01_markFaces.cga** ルール ファイルを選択した建物にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-20FADEE2-A093-4053-8C30-E19138EE0FC3-web.png" title=" " width="400px" >}} 


インポートした建物立体モデルに対し面の確認のためのシンプルなルールを適用した状態：赤 : 状面 (屋根) ; グレー : 側面 (ファサード)
面は CityEngine の外部でモデル化されるため、その方向は必ずしもルール操作と互換性があるとは限りません。これを修正するために、**importedVolume_02_facades.cga** ルールは **alignScopeToGeometry (zUp, any, world.lowest)** CGA 操作にファサード ルールを追加します。


```
Facade -->  
alignScopeToGeometry(zUp, any, world.lowest)
split(y){3.5 : Groundfloor | {~3 : Floor}* }
```

ファサード ルールは、ファサード形状の範囲を z が外側を向くようにして、その下端に揃えます。これにより、すべてのファサード面で同じ方向のスコープで操作できます。



3.	建物モデルが選択されていることを確認します。
4.	**importedVolume_02_facades.cga** ルール ファイルを選択した建物にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-080E9AD8-3AAA-4C55-AA89-08D2F7CB3615-web.png" title=" " width="400px" >}} 



**volume_from_obj.cej** シーンは完成したモデルを示しています。


CGA ルールの詳細については、「[チュートリアル 6: 基本的なシェープ グラマー](https://doc.esrij.com/cityengine/tutorials/classic/tutorial-6-basic-shape-grammar/)」を参照してください。

 


## Part 6 :アセットをテキスト サーフェスまたは静的モデルとしてインポートする

ランドマークの建物など、事前にモデリングされたテクスチャ アセットをシェープまたは静的モデルとして読み込むことができます。

1.	シーンを作成します。
2.	**building_0.dae** ファイルを **\data\dae** フォルダーから **[Viewport]** ウィンドウにドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-A2003C00-F290-4CBC-9B01-8BF6A5372555-web.png" title=" " width="400px" >}}


新しい **building_0** シェープ レイヤーが **[Scene Editor]** ウィンドウに表示されます。

### 静的モデルをシェープに変換する
CGA ルールを静的モデルに適用するには、まず静的モデルをシェープに変換する必要があります。

1.	インポートした静的モデルを選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-19CEFF27-F085-48DC-A23E-1C0D23D123E5-web.png" title=" " width="600px" >}}

2.	メイン メニューの **[Shapes]** メニューの **[Convert Models to Shapes]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-0CFFC73D-BEFE-44C6-B12A-77DF53287BD1-web.png" title=" " width="600px" >}}

これで、モデルで CGA ルールを適用する準備ができました。
 

### CGA ルールを適用する 
landmark ルールをモデルに適用するには、次の手順を実行します。
1.	建物モデルを選択します。
2.	**landmark.cga** ルール ファイルを選択した建物にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-66F4DC12-9472-4A99-9A97-D8ED96DD4F76-web.png" title=" " width="400px" >}} 


3. ルールのオプションを調べるには、**[Inspector]** ウィンドウで **mode** パラメーターの値を変更します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-9F58E142-5CAB-4843-BB73-70231EE471C3-web.png" title=" " width="400px" >}}  

4. **landmark** のドロップダウン メニューをクリックしてスタイルを切り替えるか、**[Preview & select styles]** をクリックして **[Style Manager]** ウィンドウを開きます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-B98E8CE6-38E3-47BF-93E2-40631617CE74-web.png" title=" " width="400px" >}}  


**[Style Manager]** ウィンドウにスタイル オプションが表示されます。


{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-5-Import-initial-shapes/GUID-59AB635F-3514-40E3-A944-793A94BF8224-web.png" title=" " width="400px" >}}  

生成されたモデルで完成したシーンを表示するには、**landmark_as_shape.cej** シーンを開きます。


このチュートリアルでは、複数のファイル形式をシェープまたは静的モデルとして CityEngine にインポートし、それらにルールを適用する方法について説明しました。
CityEngine の学習を続けるには、完全な [CityEngine チュートリアル カタログ](https://doc.arcgis.com/en/cityengine/latest/tutorials/introduction-to-the-cityengine-tutorials.htm)を参照してください。







