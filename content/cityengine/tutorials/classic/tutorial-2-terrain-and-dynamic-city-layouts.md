+++
title = "チュートリアル 2 : テレインとダイナミック シティ レイアウト"
description = "テレインの作成と配置、道路の生成と道路のクリーンアップ、そしてダイナミック シティ レイアウトの基礎について学習します。"
Weight = 2
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false 
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
通常 CityEngine シーンを起動した際、まずテレインの生成を行います。[テレイン](https://doc.arcgis.com/en/cityengine/latest/help/help-map-layer-terrain.htm)は単一画像ファイル、または座標系の情報を持つ GeoTIFF ファイルなどの DEM (デジタル標高モデル) から生成できます。</br>
※ CityEngine で使用する「テレイン」という単語は、ArcGIS の「ラスター」に相当し、ArcGIS の「テレイン」とは別の意味になります。</br>

このチュートリアルでは、テレインの作成と配置、道路の生成と道路のクリーンアップ、そしてダイナミック シティ レイアウトの基礎について学習します。

|演習|
|:--|
|・[Part 1 : テレインの生成](#part-1--テレインの生成)|
|・[Part 2 : 道路の生成](#part-2--道路の生成)|
|・[Part 3 : 道路のクリーンアップ](#part-3--道路のクリーンアップ)|
|・[Part 4 : テレインの配置](#part-4--テレインの配置)|
|・[Part 5 : ダイナミック シティ レイアウト](#part-5--ダイナミック-シティ-レイアウト)|
|・[Part 6 : 道路の操作](#part-6--道路の操作)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-6839B39A-881E-4E3B-AF73-139255D80C89-web.png" title=" " width="400" >}}

## Part 1 : テレインの生成
テレインを生成するには、以下を行います。
1. **Tutorial_02_Terrain_and_Dynamic_City_Layouts** チュートリアル フォルダーを展開します。
1. **Part_1_Start.cej** ファイルをクリックしてシーンを開きます。
1. **[Navigator]** ウィンドウのプロジェクトから **maps** フォルダーを開き、[Viewport](https://doc.arcgis.com/en/cityengine/latest/help/help-map-layer-terrain.htm) に **elevation.jpg** 画像をドラッグして **[Import]** ダイアログを開きます。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-DA6B4DF7-E6CC-47CA-8860-7B65B8A63F60-web.png" title=" " width="400" >}}

1. **[Terrain Import]** を選択し、**[Next]** をクリックします。
1. **Texture file** で、**[Browse]** をクリックして **maps** フォルダーの **topo.png** テクスチャ ファイルを選択します。
1. **[Open]** をクリックします。
1. **[Channel]** プロパティを **brightness** のままにします。
1. **[Maximum Height]** を **150** に設定します。
1. **[Bounds]** で、**[Dimensions]** と **[Location]** の値を以下の画像のように設定します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-30833D5D-0792-4604-901F-06720A0802B7-web.png" title=" " width="400" >}}

{{< callout >}}

地理参照情報なしで画像を読み込んだ場合、そのピクセル解像度がテレイン ディメンションとして設定されます。

{{< /callout >}}

10. **[Keep ratio]** ボタンを選択し、[Alignment] ボタンが中央に設定されていることを確認します。 
11. **[Finish]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-053C3F4F-FED2-404D-B7A6-2CC5B976ECF0-web.png" title=" " width="400" >}}

**Terrain elevation** レイヤーが作成され、[[Scene Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-scene-editor.htm)] ウィンドウに追加されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-2FAB9760-3EBF-4EE2-A80F-1A558058E35D-web.png" title=" " width="400" >}}

12. **[Scene Editor]** ウィンドウでレイヤーをクリックし、**[[Inspector](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm)]** で属性を編集します。
13. **Resolution** 値を変更します。</br>
テレインの解像度は、テレイン メッシュの平面の分割数を決定します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-8EC39E5B-6287-4FAC-9700-A7F219CECE7E-web1.png" title=" " width="650" >}}

解像度はデフォルトで標高マップ画像のサイズに設定されていますが、自由に変更することができます。グリッド サイズをカスタマイズすると、シーンのパフォーマンスに影響を与えます。</br>
**scnes** フォルダー内の **Part_1_End.cej** を開くと、模範の結果を見ることができます。

{{< callout >}}

現在 CityEngine では画像ベースのテレイン (グレースケールの標高マップ) のみをサポートしており、3D メッシュはサポートしていません。</br>3D メッシュ、または他のデータ タイプをお持ちの場合は、標高マップに変換する必要があります。

{{< /callout >}}

## Part 2 : 道路の生成
[チュートリアル 1](https://doc.esrij.com/cityengine/tutorials/tutorial-1-essential-skills/) では、高さが無い平面上に道路を[生成](https://doc.arcgis.com/en/cityengine/2022.1/help/help-grow-a-street.htm)する方法を学習しました。このセクションでは実際のテレインの標高上に道路を生成する **[Grow Streets]** ツールとアルゴリズムを使用して、実際のテレインの標高に直接道路を適応させます。</br>

### 標高マップでの道路の生成
1. **Part_2_Start.cej** ファイルをクリックし、シーンを開きます。
1. メイン メニューの **Graph → Grow Streets** から **[Grow Streets]** ダイアログを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-4FD92AAD-9DF3-476B-A271-1CB1FC69D999-web.png" title=" " width="400" >}}

3. **[Environment Settings]** セクションを展開します。
4.	**[Heightmap]** ドロップダウンを展開し、**[Terrain elevation]** を選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-F41730F2-2811-4D6D-A9C4-0992981C3978-web1.png" title=" " width="400" >}} 

5. **[Apply]** をクリックして道路を生成します。**Streetnetwork** レイヤーが **Scene Editor** に追加されています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-04988A18-4436-44B0-B025-9F83EBCAE1A1-web.png" title=" " width="400" >}} 
  テレインに合わせて自動的に道路が配置されます。
6. **[Close]** をクリックすると、**Viewport** で道路を確認できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-2D47D14E-7F70-4089-A5BF-C37DC210C742-web.png" title=" " width="400" >}} 


### 障害物マップでの道路の生成 
**[Grow Street]** ツールはランダムに道路を生成します。これには道路を生成したくないエリアも含まれています。</br>障害物マップを作成することで、道路を生成したくない部分を空白にすることができ、手動でのクリーンアップ作業を最小限に抑えることができます。障害物マップは、白黒の画像で明るさによって道が生成される領域を定義したものです。</br>

1. **Scene Editor** を右クリックし、**[New] → [New Map Layer]** を選択して、**[New Map Layer]** ダイアログを開きます。 
1. **[Obstacle]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-7351C1C6-B140-4924-8E3A-CE3ECEDC047B-web.png" title=" " width="400" >}} 
3. **[Next]** をクリックします。
4. **[Browse]** をクリックし、**maps** フォルダーから **obstacles.png** 画像を選択します。
5. **[Channel]** プロパティは **brightness** のままにします。
6. **[Obstacle Threshold]** の値を **0.5** に変更します。</br>
   **Obstacle Threshold** は道路を生成するエリアと生成しないエリアを区別する画像の輝度を定義します。
7. **[Bounds]** で、値をテレインの範囲に設定します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-1ECDB4F8-63B7-4B8B-BD32-A4898F3D40CE-web.png" title=" " width="400" >}} 
8. **[Finish]** をクリックします。</br>
  **Scene Editor** に New Obstacle マップ レイヤーが作成されます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-F77B0B95-438F-493C-AE96-BADBF3BE7725-web.png" title=" " width="400" >}} 
9. **[Inspector]** ウィンドウの **[Layer Attribute]** セクションを展開します。
   ```
   attr obstacle = brightness < 0.5
   ```
   このコードでは、マップの属性をブール値 **(true/false)** として決定しています。

10. 道路を生成する際に障害物マップを適用するには、まず **Scene Editor** の New Obstacle レイヤーの [Visibility] ボックスをオフにします。</br>
11. **Viewport** をクリックして、**Scene Editor** 内の New Obstacle レイヤーの選択を解除します。</br>
12. メイン メニューの **[Graph] → [Grow Streets...]** を再度クリックします。</br>
13. **[Environment Settings]** セクションを展開します。</br>
14. **[Obstacle map]** 横のドロップダウン リストをクリックし、**[New Obstacle]** を選択して障害物マップを割り当てます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-23D0DFED-5D3B-4F58-BBC9-DFD957125C5D-web.png" title=" " width="400" >}} 
15. **[Apply]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-C77474D7-F4BD-483D-B64B-1964E2442DAF-web.png" title=" " width="400" >}} 

**[Grow Streets]** ツールは、障害物マップの白い部分に道路を作成し、黒い部分には道路を生成しません。</br>
**Part_2_End.cej** シーンを開くと、模範の結果を見ることができます。

{{< callout >}}

**[Grow Streets]** ツールでは、パラメーターを使用して道路パターンを自動的に作成することもできます。詳細は[道路パターンの例](https://doc.arcgis.com/en/cityengine/2022.1/help/help-grow-a-street.htm#ESRI_SECTION1_E14DD7043211416FA75492BF38074638)をご参照ください。

{{< /callout >}}


## Part 3 : 道路のクリーンアップ
道路ネットワークは時々クリーン アップが必要な競合するグラフ セグメントを持っている場合があります。適切なシェープが作成できない場合、これらのエラーは赤でハイライトされます。道路ネットワークの問題をクリーンアップするには、**[Cleanup Graph]** ツールを使用します。

1.	**Part_3_Start.cej** シーンを開きます。
1.	赤い表示の競合しているグラフ セグメントにズームします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-63AC00C7-2104-4B9B-A4B0-9487ACE2EA84-web1.png" title=" " width="400" >}} 

3. **[Select]** ツールで、競合するセグメントの周辺を選択します。
4. ツールバーの **[Cleanup Graph]** ツール (C) をクリックするか、メイン メニューから **[Graph] → [Cleanup Graph...]** を選択すると、**[Cleanup Graph]** ダイアログ ボックスが表示されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-E41FC41F-6484-48EC-A0C0-690FB6508830-web.png" title=" " width="400" >}} 
5. デフォルトの設定のままにします。詳細は [Cleanup Street](https://doc.arcgis.com/en/cityengine/2022.1/help/help-cleanup-streets.htm) をご参照ください。
6. **[Finish]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-775B4584-7457-45CA-905B-5A96499F9DED-web1.png" title=" " width="400" >}} 

7. **Part_3_End.cej** シーンを開くと、模範の結果を見ることができます。 

## Part 4 : テレインの配置
作成された道路は、通常テレインの表面や建物の位置に沿って配置されます。しかし 2D GIS データをインポートした場合など、シーン内で作成されたオブジェクトがテレインに正しく配置されていない場合があります。

道路や図形をテレインに配置することができるツール：
|ツール名|概要|
|--|--|
|[Align streets to terrain](https://doc.arcgis.com/en/cityengine/latest/help/help-align-streets-terrain.htm)|道路セグメントをテレイン上に投影|
|[Align shapes to terrain](https://doc.arcgis.com/en/cityengine/latest/help/help-align-shapes-terrain.htm)|静的なシェープをテレイン上に投影*|
|[Align terrain to shapes](https://doc.arcgis.com/en/cityengine/latest/help/help-align-terrain-shapes.htm)|テレインを静的または動的なシェープに配置|


{{< callout >}}

*手動で描画、またはインポートしたシェープを静的シェープと呼びます。配置に関して、[Dynamic City layout] ツールは、[Allignment] ツールで配置できない動的なシェープを作成します。</dr>
ダイナミック シェープは (ダイナミック) ブロックの子として作成されるため (道路も同様)、Block Subdivisioin パラメーターには配置のための特定パラメーターが含まれています。詳細は [Block parameters](https://doc.arcgis.com/en/cityengine/latest/help/help-layers-block-parameters.htm) をご参照ください。

{{< /callout >}}

### テレインにグラフを配置
まず、グラフをテレインに配置します。

1.	**Part_4_Start.cej** シーンを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-FE2DDB5A-6388-47ED-94DF-78DDAD3FF48D-web.png" title=" " width="400" >}} 
2.	シーン内のシェープを選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-26BF3ACA-8EC3-42CF-A3C6-44FF0BE42053-web.png" title=" " width="400" >}} 

3.	ツールバーの **[Align Graph to Terrain]** ツールをクリック、またはメイン メニューの **[Graph] → [Align Graph to Terrain]** を選択します。</br>
4.	**[Heightmap]** 横のドロップダウン ダウンリストから **[Terrain elvation]** を選択します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-29F2D9EA-F5F8-40AA-A231-E367EF347A62-web.png" title=" " width="400" >}} 
   詳細は[テレインへ道路を配置](https://doc.arcgis.com/en/cityengine/latest/help/help-align-streets-terrain.htm)をご参照ください。</br>
5.	**[Offset]** を **0.2** に設定します。</br>
6. **[Finish]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-29EB1267-762A-4B8E-A825-97232415FEB3-web.png" title=" " width="400" >}} 


{{< callout >}}

この変更はあまり目立ちません。より強い効果を得るには、**[Maximum Height]** の値を変更します。

{{< /callout >}}

### テレインをシェープに配置
次に、シーンでテレイン ダイナミック シェープに合わせて配置します。</br>

1.	シーン内のシェープを再度選択します。
1.	ツールバーの **[Align Terrain to Shapes]** ツールをクリック、またはメイン メニューで **[Terrains] → [Align Terrain to Shapes...]** を選択し、**[Allign Terrain to Shapes]** ダイアログを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-7D33A616-9847-48C9-86B5-ABF7779A7CAE-web.png" title=" " width="400" >}}
詳細は [Align terrain to shapes](https://doc.arcgis.com/en/cityengine/latest/help/help-align-terrain-shapes.htm) をご参照ください。</br>
3. デフォルト設定のまま **[Apply]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-D939E00A-692A-45EB-B5B3-96EBEF6692B6-web.png" title=" " width="400" >}}

{{< callout >}}

すでにテレインに沿った道並みになっているので、変化はごく僅かです。

{{< /callout >}}

4. **[Close]** をクリックします。</br>
5. **[Scene Editor]** でテレイン標高レイヤーをクリックします。
6. **Inspector** の **[Elevation]** セクションで、ドロップダウン リスト から **[Apply Alignments]** の設定を交互に無効化および有効化します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-F364EED2-8816-4276-97A0-C9D618C5ABCD-web.png" title=" " width="400" >}}
テレインは配置されていない状態、または配置された状態に切り替わります。つまり配置データ、または **[elevationDelta]** プロパティはファイルとして保存されています。</br>
7. **[Layer Attributes]** セクションを展開し、**[elevationDelta]** プロパティが **elevation** 属性の定義にどのように役立つかを確認します。
  ```
   attr elevation = map_01(brightness, minHeight, maxHeight) + elevationDelta + elevationOffset
  ```
8. シーンを保存します。</br>
9. **[File]  → [Refresh Workspace]** をクリックし、チュートリアルのプロジェクト ワークスペースを更新します。</br>
   **data** フォルダーの **Part_4_Start.cej** フォルダーに標高デルタ ファイルが含まれています。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-7F838030-2711-4B48-894F-F6B8A4D9B81D-web1.png" title=" " width="400" >}}
   最初にテレインを配置させた後、必ずシーンを保存してください。

10. トップ ビューから標高ファイルを表示するには、メイン メニューの **[Windows] → [New Viewport] → [Top View]** をクリックして、新しいビューポートを作成します。</br>
11. **elevation_delta** ファイルを **Top View** ビューポートにドラッグします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-C8B9008C-1205-4DD5-851F-31ABD0E501FE-web1.png" title=" " width="400" >}}

    16 ビットのデルタ マップには、標高の変化 (灰色 ＝ 変化なし、黒 ＝ 低い、白 ＝ 高い) が格納されています。詳細は、[Elevation delta maps](https://doc.arcgis.com/en/cityengine/latest/help/help-align-terrain-shapes.htm#ESRI_SECTION1_8C2169A428C04F72A7750DBEF0A42848) をご参照ください。</br>
   **Part_4_End.cej** シーンを開くと、模範の結果を見ることができます。

## Part 5 : ダイナミック シティ レイアウト
ダイナミック シティ レイアウトはユーザーが素早く都市のレイアウトを作成するためのツール セットと機能です。その結果一連のシェープが作成され、[CGA ルール](https://doc.arcgis.com/en/cityengine/2022.1/help/help-cga-modeling-overview.htm) で 3D モデルを作成するのにすぐに利用できます。</br>
主なエレメントは道路とブロックです。ブロックは道路の中心線が物理的にエリアを囲んでいる (かつネットワークが適切に接続されている) 場合に作成されます。ブロックは点線で表現され、選択することができます。</br>

道路セグメントもブロックもそれぞれのパラメーターにより、その子であるダイナミック シェープが生成されます。

### オブジェクト タイプ
作成した道路を探索すると、[Segments](https://doc.arcgis.com/en/cityengine/2022.1/help/help-layers-street-parameters.htm)、[Nodes](https://doc.arcgis.com/en/cityengine/2022.1/help/help-intersection-parameters.htm)、[Blocks](https://doc.arcgis.com/en/cityengine/2022.1/help/help-layers-block-parameters.htm#ESRI_SECTION1_E9ABB261C4B14CE2A6667F092B637553) という 3 つのオブジェクト タイプが選択可能で、そのパラメーターによって形状の作成が左右されることがわかります。

|オブジェクト タイプ|パラメーター|
|--|--|
|**Segment Parameters**|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-1B51D744-0695-4F91-B09F-BE714526777C-web.png" title=" " width="100" >}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-91CC74BE-7142-4376-8FC5-D442D397303C-web1.png" title=" " width="300" >}}|
|**Node Parameters**|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-65D68481-9953-4D96-9D65-78031619DE2A-web.png" title=" " width="100" >}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-011A5E19-8090-4ADB-8052-8EE1B7673602-web1.png" title=" " width="300" >}}|
|**Block Parameters**|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-CF9CC430-9ADD-492F-A741-B7665B10A74D-web.png" title=" " width="100" >}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-280C3CC9-296D-4B66-BE36-86665769495F-web1.png" title=" " width="300" >}}|

**[Create Shape]** パラメーターは 3 つのオブジェクト タイプに共通で、シェープ ジオメトリの作成を有効または無効にします。例えば、道路にはシェープを作成したいが、ブロックには分割を作成したくない場合などです。</br>
道路や歩道の幅を調整したり、ロータリーを作ってその半径を編集したり、袋小路を作ったりと、さまざまなオブジェクト タイプのパラメーターを自由に調整することができます。

### ブロック分割タイプ
次に、ブロック分割を使って作業します。シーン内のブロックを選択し、**[Subdivision Type]** のパラメーターを変更します。各分割アルゴリズムは独自のパラメーターを持ち、特定のパターンを作成します。

|分割タイプ|パラメーター|
|--|--|
|**Recursive Subdivision**|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-4AB87456-1808-4730-AF6E-045F2DE3D8A3-web.png" title=" " width="400" >}}|
|**Skeleton Subdivision**|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-FE6285CF-F9B7-4BF4-8E67-FF42831D6959-web.png" title=" " width="400" >}}|
|**Offset Subdivision**|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-726935BA-5952-442E-8D84-7AC3CCC944D9-web.png" title=" " width="400" >}}|
|**No Subdivision**|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-96BA2AC5-BCDC-4F3B-A909-03E7EE8F474E-web.png" title=" " width="400" >}}|

これまでダイナミック シェープの作成方法について学習しました。次のセクションでは、道路描画、道路と曲線の編集、道路モデルの生成について学習します。

## Part 6 : 道路の操作
これまでのセクションでは、ダイナミック  シティ レイアウト ツールを使用して道路ネットワークを作成し、道路のクリーンアップを実践し、テレインの配置を行いました。このセクションでは、道路の操作における一般的なワークフローについて学習します。

### 手動での道路描画
はじめに、**[Polygonal Street Creation]** ツールと **[Freehand Street Creation]** ツールの両方を使用して[道路を描画](https://doc.arcgis.com/en/cityengine/2022.1/help/help-graph-overview.htm)をします。

1. 既存のネットワークに道路を追加するには、ツールバーの **[Polygonal Street Creation]** (G) ツールをクリックします。</br>
    a. スナップとクリックで、新しい道路の最初のノードを配置します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-045F0145-21FD-462B-B684-E3A13CB7C55D-web.png" title=" " width="400" >}}
    b. ダブルクリックで道路の描画を終了します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-67037005-1864-400B-963A-393B2F7E1A27-web.png" title=" " width="400" >}}
    セグメントの長さやその他のプロパティは、**[Polygonal Street Creation]** ツールの [オプション] ウィンドウで設定できます。詳細は、[Draw a polygonal street](https://doc.arcgis.com/en/cityengine/2022.1/help/help-graph-overview.htm#ESRI_SECTION1_2661447165214118AB22ECA50E858570) をご参照ください。

1. フリーハンドで道路を描くには、ツールバーの **[Frreehand Street Creation]** ツール (Shift+G) をクリックします。</br>
  a. スナップとクリックで、新しい道路を描画します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-89678BB5-D8BC-4E43-86FA-2575211320D5-web.png" title=" " width="400" >}}
   b. マウスのボタンを離すと、道路の描画が終了します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-A6CC2C91-3628-4CDC-A181-577716E68B4C-web.png" title=" " width="400" >}}
   **[Freehand Street Creation]** ツールの [オプション] ウィンドウで、道路の幅やその他のプロパティを設定することができます。詳細は [Draw a street freehand](https://doc.arcgis.com/en/cityengine/2022.1/help/help-graph-overview.htm#ESRI_SECTION1_4F5EE03B655F4F4C9D2BEE08C1C5730E) をご参照ください。

### 曲線セグメント
次に、道路を直線から曲線に、あるいは曲線から直線へ変更します。

1. 道路を選択します。
1. メイン メニューの **[Graph] → [Set Curves Straight]** ツールと **[Graph] → [Set Curves Smooth]** ツールで形状を変更します。</br>
   これらのツールを使って、道路を直線と曲線に切り替えることができます。次の画像は、**[Set Curves Straight]** ツールと **[Set Curves Smooth]** ツールの違いを示す良い例を示しています。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-464C32DB-787F-415D-BEB0-D25FD7DC658A-web.png" title=" " width="400" >}}
  ハンドルで道路の曲率を調整することができます。詳細は [Straight vs smooth](https://doc.arcgis.com/en/cityengine/2022.1/help/help-edit-street-curves.htm#ESRI_SECTION1_670BCA83DE2E47F8AE5A853C440507ED) をご参照ください。

{{< callout >}}

曲線を持った道路はポリゴン数が多くなるので、最小限にとどめることをおすすめします。

{{< /callout >}}

3. 作成した曲線道路のセグメント数の精度を編集します。</br>
   a. 道路を選択し、**Inspector** の **[Precision]** パラメーターをクリックします。</br>
   **[Precision]** パラメーターの値を **.5** に設定します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-76A48D1B-3FF3-40AA-9CFD-B0C0B6423750-web1.png" title=" " width="400" >}}
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-8E674652-6185-4C71-AA21-BCFB980C47C6-web.png" title=" " width="400" >}}
   b. 値を **.25** に変更します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-84FE38D3-036A-4184-A199-D6F782E9704D-web1.png" title=" " width="400" >}}
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-6D9D69C3-201A-405F-BD8E-674D19D924D5-web.png" title=" " width="400" >}}

### 道路の編集
続けて **[Edit Streets/Curves]** ツールを使用して道路を曲線を編集します。

1. ツールバーの **[Edit Streets/Curves]** ツール (C) をクリックします。</br>
   詳細は [Edit street and curves](https://doc.arcgis.com/en/cityengine/2022.1/help/help-edit-street-curves.htm) をご参照ください。
1. ハンドルを使用して道路と歩道の幅を編集します。
1. 接線ハンドルを編集します。
   視野角に応じて、水平または垂直で編集する接線ハンドルが表示されます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-A258AF7A-440C-4CCD-8CE0-9F277293C5EB-web1.png" title=" " width="400" >}}

### 道路モデルの生成
最後に、**Street Construction Simple.cga** ルールを使用して道路モデルを生成します。

1. Streetnetwork レイヤーを展開し、Network サブレイヤーを右クリックします。
1. **[Select Objects]** を右クリックします。</br>
   これにより道路のみが選択され、ブロックは選択されません。
1. **Street Construction Simple.cga** ルールを選択されたシェープ上にドラッグします。</br>
   道路モデルと 3D オブジェクトがルールにより生成されます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-6839B39A-881E-4E3B-AF73-139255D80C89-web.png" title=" " width="400" >}}

{{< callout >}}

長さ、幅、曲線を含め、道路を編集してその場でモデルを再生成することができます。

{{< /callout >}}

4. 道路シェープを選択し、**Inspector** で **[Start Rule]** リンクをクリックします。</br>
   これにより、[CGA Editor](https://doc.arcgis.com/en/cityengine/2022.1/help/help-cga-editor.htm) でルールを確認できます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-6EAC1AFB-B5CF-4F7F-8897-EEAF2BD72CE3-web.png" title=" " width="550" >}}
   以下の図は、**StartRules** とそれに対応する道路のシェープを色で示しています。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-7CCD7B21-D053-415E-BD76-6FB2B69CFD4A-web.png" title=" " width="550" >}}
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-2-terrain-and-dynamic-city-layouts/GUID-3F936FFF-62D6-4865-A1E5-C8E71D1D688A-web.png" title=" " width="550" >}}

   {{< callout >}}

   **color_streetshapes.cga** ルールを道路に適用することで、よりカラー シェープを探求することができます。

   {{< /callout >}}

   **Part_5_End.cej** を開くと、模範の結果を見ることができます。

このチュートリアルでは、テレインの作成、道路の自動生成、道路のクリーンアップ、テレインの配置、ダイナミック シティ レイアウトの作成について学習しました。そして、道路の描画と編集、道路モデルの生成について学習しました。