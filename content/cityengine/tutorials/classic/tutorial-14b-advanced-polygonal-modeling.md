+++
title = "チュートリアル 14B : 応用的なポリゴン モデリング"
description = "応用的なポリゴン モデリングについて学習します。"
Weight = 16
alwaysopen = false
publishDate = 2022-03-23T00:00:00+09:00
author = "井上" 
draft = false 
+++

|演習|
|:--|
|・[Part 1: ポリゴンによるモデリング](#part-1-ポリゴンによるモデリング)|
|・[Part 2: 押し出し](#part-2-押し出し)|
|・[Part 3: 張り出し屋根の作成](#part-3-張り出し屋根の作成)|
|・[Part 4: 屋根窓ドアの改造](#part-4-屋根窓ドアの改造)|
|・[Part 5: テクスチャ](#part-5-テクスチャ)|

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## Part 1: ポリゴンによるモデリング
1.	[Navigator] ウィンドウのチュートリアルのデータフォルダーから、**14B_Advanced_01.cej** をダブルクリックしてプロジェクトを開きます。
2.	**[Polygonal Shape Creation]** (S) ツールを選択し、最初の頂点 (ポイント) をクリックします。


{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-79D1D52B-AE89-4AD0-8E0D-F1BC0C959381-web.png" title=" " width="500" >}} 


{{< callout >}}

ラインを動かしている間、**[Polygonal Shape Creation]** ツール オプションはラインの長さを表示します。また、[ツール オプション] ウィンドウでは、[スナップ](https://doc.arcgis.com/en/cityengine/latest/help/help-snapping.htm)、円弧、[平面](https://doc.arcgis.com/en/cityengine/latest/help/help-drawing-modes.htm)のオプションを設定することができます。

{{< /callout >}}


{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-A59D58A5-E3C9-4801-8380-9B19217F2393-web.png" title=" " width="500" >}} 

3.	ラインの長さを 11 と指定する場合は、Tab キーを押しながら **[Edge Length]** フィールドに長さを入力して Enter キーをクリックします。ラインの色がマゼンタ色になり、長さが 11 に固定されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-52615B1A-36CB-4655-994B-F812EDC51A2D-web.png" title=" " width="550" >}} 


4. スナップ ラインに沿って指定の長さまで移動します。</br>

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-E7CF9286-0722-4CF9-A905-B902860529FE-web.png" title=" " width="550" >}} 

5. クリックして 2 番目の頂点をセットします。</br>
6.	3 番目の頂点では、値を 9 と入力し、Enter キーをクリックします。指定した長さの値をキャンセルしたい場合は、Esc キーをクリックすると、やり直しができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-85925645-ED8D-468F-9847-C97B26705AA8-web.png" title=" " width="550" >}}

7.	その後の頂点設定は、テキスト入力はせずに 90° のスナップラインを見つけ、適当な長さでクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-0DF5934F-6180-4325-BC92-0A18291D7E86-web.png" title=" " width="550" >}}

8.	最後の頂点の設定は始点の頂点上でクリックし、ダブルクリックか Enter キーを押してポリゴン シェープを完成させます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-8BCF28AF-13F4-4A72-967C-BAEB0FCD76B9-web.png" title=" " width="550" >}}

9.	ライン上で微調節が行えます。まず、**[Transform Move]** (W) ツールをクリックし、変更したいライン上にカーソルを合わせます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-A88E1146-6B3A-48E0-B6F1-3B5A84D69B43-web.png" title=" " width="550" >}}

10. 青いハンドルをドラッグして、エッジの位置に合わせます。


{{< callout >}}

色のついた矢印は、それぞれ異なる方向にエッジを移動させます。

{{< /callout >}}

## Part 2: 押し出し
1. **[Push Pull]** (P) ツールをクリックし、ポリゴンの上にカーソルを合わせます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-C7A3E210-5E4A-4455-9D22-C2F1AD3BF025-web.png" title=" " width="550" >}}

2. オレンジ色のハンドルをドラッグして離すと、3D シェープが完成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-29A81701-7D29-4EE5-A7B1-14DCB770B729-web.png" title=" " width="550" >}}

3. 中点スナップのハイライトが表示されるまで、前縁にカーソルを合わせます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-6D415711-DE60-47C1-BB58-7F5284B75E98-web.png" title=" " width="550" >}}

4. クリックしてセグメントを開始し、エッジに対して垂直にスナップしたら、クリックして終了します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-0055E72A-06F3-4D38-BE22-EADE7D59F529-web.png" title=" " width="550" >}}

5. エッジ ハンドルでエッジをドラッグして、斜めの屋根を作ることができるようになりました。エッジの上にカーソルを置き、オレンジ色のハンドルをドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-4F74BA89-61BC-4FF2-9EC7-D7C5569DEFC3-web.png" title=" " width="550" >}}

**14_B_Advanced_02.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。</br>

6. 後端部の緑色の矢印をドラッグすると、屋根が平らになります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-70D67821-D636-4293-B6C4-B930D88D6042-web.png" title=" " width="550" >}}

色の異なる矢印は、異なる方向に形状を押し出すことができます。エッジをドラッグしながら矢印の上にカーソルを置くと、方向を切り替えることができます。</br>
7. 3D シェープを修正します。側面のポリゴンにカーソルを合わせ、緑色のハンドルをドラッグします。ここでも、異なる方向に対して複数の矢印が表示されています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-02481A81-4D11-4A45-88BD-4DD8C37AFED8-web.png" title=" " width="550" >}}

色のついた矢印は、それぞれ異なる動作をします。緑色の矢印は、接地面に平行にドラッグし、新しい頂部ポリゴンを作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-EB0BD904-94E7-406A-A980-7DD0F1693F5D-web.png" title=" " width="550" >}}

青い矢印は、新しいポリゴンを作成せずに既存のエッジに沿ってドラッグします。どちらのタイプも、作成したいシェープによっては非常に有効です。

8. **[Polygonal Shape Creation]** (S) ツールまたは **[Rectangular Shape Creation]** (Shift+S) ツールを使って、押し出すバルコニーを描きます。長方形を描いてバルコニーを作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-5665E800-3626-41CE-8F71-C0A2E7ABCAE2-web.png" title=" " width="550" >}}

9. 新しいポリゴンにカーソルを合わせ、ハンドルをドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-F772DEB9-A158-4A2C-9419-4B5A0FADACE7-web.png" title=" " width="550" >}}

10. **[Polygonal Shape Creation]** (S) ツールをクリックし、壁を押し出すための多角形を作成します。
11. 新しいポリゴンをドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-0C8FD214-C8FD-464B-8C24-676666A99704-web.png" title=" " width="550" >}}

12. バルコニーをはめ込むには、側壁にスナップするセグメントを 2 つ作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-4525D215-5CB3-408B-985D-AFB193A65F2D-web.png" title=" " width="550" >}}

13. バルコニー床の取っ手を下にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-01A6AFE5-F29E-4745-83EC-027F393D530F-web.png" title=" " width="550" >}}

これでバルコニーが完成しました。</br>
14. カメラを奥に回転させます。</br>
15. 別のバルコニーを作るには、**[Rectangular Shape Creation]** (Shift+S) ツールをクリックし、壁に矩形を作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-A79AF2CA-20D4-4A51-A1CF-F16A96FD7DC1-web.png" title=" " width="550" >}}

16. バルコニーをドラッグして取り出し、上部に矩形を描きます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-119583C6-ED09-4BE5-ACC6-66BA8517E6CD-web.png" title=" " width="550" >}}

17. 床を下にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-F2711B9F-44A9-47A8-869C-5E4855D57C9A-web.png" title=" " width="550" >}}

**14_B_Advanced_03.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。


{{< callout >}}

[ガイド](https://doc.arcgis.com/en/cityengine/2021.0/help/help-guides.htm)を使用すると、エッジや面をドラッグする際の精度が向上します。

{{< /callout >}}

## Part 3: 張り出し屋根の作成
基本的なシェープができたので、より素敵な屋根を作ります。
1. 緑色の矢印を上にドラッグして、屋根を建物から切り離します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-01CEF9E2-C815-4999-9661-EB2715D93FC6-web.png" title=" " width="550" >}}

Ctrl キーを押しながら、初期位置に沿ってエッジを挿入します。今は、編集しやすいように屋根を厚くしておいて、後で薄くすることができます。

2. もう一方のポリゴンも同じようにします。ドラッグするときは、最初のポリゴンにスナップします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-895F8FF2-9498-4170-BBE4-D1EB3D3457B2-web.png" title=" " width="550" >}}

**14_B_Advanced_04.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。</br>

3. 張り出しを作成します。一番右端の面を手前にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-6ECE8D9E-D50D-4211-B3F0-2E4D0EB812F5-web.png" title=" " width="550" >}}

4. 隣の面も同じ長さまでドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-DECE26B8-5BF2-4BF7-B296-136B74040EA6-web.png" title=" " width="550" >}}

5. 3 面目もドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-792B72D9-D090-465F-8755-8215D7A02B2C-web.png" title=" " width="550" >}}

6. 4 面目もドラッグさせますが、少し短めに作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-2C915A05-63A4-41E9-AFDE-1CC7EBDF1FEE-web.png" title=" " width="550" >}}

7. 最後の面は 4 面目にスナップするようにドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-1EFC5E9F-CDF6-4D47-AE7F-ED14F6448554-web.png" title=" " width="550" >}}

8. カメラの視点を横にまわします。
9. 屋根の側面を青い矢印で下にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-DD9D142D-71F7-4EAC-A517-DCDC5E033CFD-web.png" title=" " width="550" >}}

10. 反対側も同様に行います。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-3D1DA15F-3C1C-42F7-BF6E-0F7F7D9EFE43-web.png" title=" " width="550" >}}

11. 最後にシェープの後方にカメラの視点を回し、屋根を手前にドラッグさせて張り出しを作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-19C1812E-AA5A-4591-8ADD-821DD4AB7270-web.png" title=" " width="550" >}}

**14_B_Advanced_05.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。

12. カメラの視点を再度正面にまわします。ここで最後の調整を行います。屋根ポリゴンを見ると、面に不要なラインが存在しているのが分かります。これを消去するには、まず **[Select]** ツールを使用して、建物シェープ全体を選択します。
13. **[Cleanup Shape]** ツールをクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-56D02999-2844-4DBB-8952-B52F9EAA2C9B-web.png" title=" " width="550" >}}

14. [Cleanup Shape] ダイアログの [Preset] で、デフォルトを選択し、**[Finish]** をクリックします。</br>
ほぼすべてのラインが消去されます。不要なラインが残っている場合、もう一度実行する必要があります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-6282CE1F-0A12-415C-891F-57BE82F83BC3-web.png" title=" " width="550" >}}

**14_B_Advanced_06.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。

## Part 4: 屋根、窓、ドアの改造
1. ここで、屋根の厚さを薄くします。複数のポリゴンを一度に動かすには、標準の [Selection] ツールと [transform] ツールを使用します。
2. 最初のポリゴンを **[Select]** ツールで選択します。Ctrl キーをホールドしたまま、次のポリゴンをクリックします。
3. **[Transform Move]** (W) ツールをクリックし、緑の矢印に沿ってドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-96069173-DB97-43E1-A772-0875C9428DD5-web.png" title=" " width="550" >}}

4. **[Push Pull]** (P) ツールを使って、プレーンをドラッグしながら、建物本体ポリゴンの最終調整をします。青い矢印を使用すると、屋根に沿ってシェープを押し引きしながら調整することが出来ます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-77657A28-C5B6-40F1-96C9-B112E29BD760-web.png" title=" " width="550" >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-D8BD8CE7-E58D-4C3D-9FA2-F22349CACC05-web.png" title=" " width="550" >}}

**14_B_Advanced_07.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。</br>
5. 次に、建物を装飾していきます。窓を 2 つ描画します。</br>
6. **[Push Pull]** (P) ツールをクリックし、長方形を内側にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-AFF35D9E-8CDC-4E3F-B0CB-4DB4D98C37D3-web.png" title=" " width="550" >}}

7. 次に、ドアを 2 枚作成します。ドアを作成する場所にカメラの視点を移動します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-4F84A1E7-201E-4A0A-BAC9-284C0296F7AD-web.png" title=" " width="550" >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-E9CC2365-7C15-4793-83B4-FBCC4BEFEEA3-web.png" title=" " width="550" >}}

8. 家を回転し、もういくつか窓を作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-48ABFAB3-55A8-4B50-84A4-0FA217E5D8E7-web.png" title=" " width="550" >}}

9. 最後に緑の矢印を使用して、屋根の一辺を地面と水平に延長させ、オープン ガレージを作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-E08CC724-DBB6-405F-9611-40477F468554-web.png" title=" " width="550" >}}

10. 柱を作成します。[Rectangle] ツールで、長方形を 2 つ描き、地面に向かってドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-4D73483C-D9AD-4090-86B4-52C9825D1FCD-web.png" title=" " width="550" >}}

**14_B_Advanced_08.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。

## Part 5: テクスチャ
1.	まず、家全体を選択します。
2.	**[Texture shapes]** ツールをクリックします。
3.	**[Browse]** をクリックし、wall_white を選択し、開きます。このテクスチャ アセットは、チュートリアルの asset フォルダーの中にあります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-F4142D81-AF33-4E69-B832-5F4B2C170BAB-web.png" title=" " width="550" >}}

4. 一様なテクスチャリングをするために **[Mode]** で **[Dimensions]** を選択して適用します。</br>
Absolute texture width と Absolute texture height の入力数値はメートル単位でのテクスチャの大きさを表しています。
5.	両パラメーターに 10 を指定し、**[Assign]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-1C380883-D5C9-48EE-84FB-D91EAAA129CB-web.png" title=" " width="550" >}}

6.	続いてすべての屋根を選択します。[Select] ツールですべての屋根ポリゴンを選択します。最初のポリゴン上でダブルクリックし、Ctrl キーを押しながら他のポリゴンをクリックします。
7.	**[Texture shapes]** ツールから roof を選択し、**[Assign]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-CA4661FC-0DC4-4811-BE1D-FF2E20D2ABDC-web.png" title=" " width="550" >}}

8.	次はドアと窓です。**[Select]** ツールで窓を 2 つ選択します。
9.	**[Texture shapes]** ツールで、窓テクスチャを指定します。
10.	[Mode] を **[Stretch to polygon]** に設定することにより、窓にテクスチャがフィットします。**[Assign]** をクリックして割り当てます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-CE74FBB3-11E4-469A-B991-55E47885F816-web.png" title=" " width="550" >}}

11.	ドアも 2 枚選択します。[Texture] ツールでドアのテクスチャを指定し、**[Assign]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-B41BC7B7-4869-4CA7-8203-2AC87C259DC0-web.png" title=" " width="550" >}}

12. カメラの視点を家の裏側にまわし、窓を選択します。窓テクスチャを選択し、**[Assign]** をクリックします。</br>
窓テクスチャが間延びしているはずです。</br>
13.	**[Horizontal repetitions]** に 4 と入力し、**[Assign]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-0100D214-1E98-4E98-82D8-FC0DFA9F2416-web.png" title=" " width="550" >}}

14. 煙突を追加するには、**[Rectangular Shape Creation]** ツールを使用して、屋根の上に長方形を描き、緑の矢印に沿って上方にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-EB55DFF6-41F5-4497-9882-DA829C039EDD-web.png" title=" " width="550" >}}

15. 煙突の奥の一辺をクリックし、手前の一辺と同じ高さになる様に下にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-789FE65B-C555-4DE7-B998-A599B40C2376-web.png" title=" " width="550" >}}

16.	すべての面を選択し、[Texture] ツールでテクスチャを指定します。
17.	**[Browse]** から wall_concrete_6.png を選択し、**[Dimensions]** を 10 に指定し、**[Assign]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-C6EECD6E-BB3D-44D5-B7DD-3311AAADFFB8-web.png" title=" " width="550" >}}

18.	次にドーマーを追加します。長方形を描き、上にドラッグします。
19. 後端を下にドラッグして、ピタッと止まるようにします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-97051FC3-55B4-4951-B8D3-611BB114F194-web.png" title=" " width="550" >}}

20.	側面にもテクスチャを貼り付けます。
21.	すでに学習したように、建物の前面に窓を作成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-5EFBBA74-7598-41FE-B4AD-2B190022F638-web.png" title=" " width="550" >}}

これで家の完成です。必要に応じて煙突を小さくするなど各パーツを微調整してください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14b-advanced-polygonal-modeling/GUID-5FE37C99-6045-4ABB-83A8-1CDBC7241E70-web.png" title=" " width="550" >}}

**14_B_Advanced_09.cej** を開くと、ここまでの手順で作成したシーンの模範例を見ることが出来ます。


{{< callout >}}

テクスチャシェイプの編集時にシェーディングモード (**[View settings] → [Shaded]**) を使用すると、描画のハイライトがより見やすくなります。

{{< /callout >}}

