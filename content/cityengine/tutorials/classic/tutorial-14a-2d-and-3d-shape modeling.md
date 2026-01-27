+++
title = "チュートリアル 14A : 2D および 3D シェープ モデリング"
description = "2D および 3D の手動によるシェープの描画および編集テクニックを学習します。"
Weight = 15
alwaysopen = false
publishDate = 2022-03-23T00:00:00+09:00
author = "森" 
draft = false 
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-71F52571-E457-4766-8AB7-F6B99D03633B-web.png" title=" "width="500px">}}

## 概要
このチュートリアルでは、CityEngine で利用可能な 2D および 3D のシェープを手動で描画・編集するテクニックについて、順を追って解説します。多くの場合、シェープはプロシージャル モデル生成の入力として使用されますが、ランドマークとなる建物などのコンテキストを視覚化するために、より複雑な 3D シェープを作成することもできます。このチュートリアルでは、都市ブロック規模でのフットプリントの作成を中心に学びます。

•	第 1 部では、複雑さを増した 2D シェープとしてフットプリントを描画します。<br>
•	第 2 部では、そのフットプリントから 3D シェープとしてマスモデル作成します。<br>
•	第 3 部では、CGA を使用してより複雑なマスモデルを作成し、その 3D モデルを静的な 3D シェープに変換した後、[shape drawing] ツールを使ってさらに細かく調整します。<br>

|演習|
|:--|
|・[Part 1: 最初のシェープを作成](#part-1-最初のシェープを作成)|
|・[Part 2: 多面構成のシェープを操作](#part-2-多面構成のシェープを操作)|
|・[Part 3: 穴のあるシェープを作成](#part-3-穴のあるシェープを作成)|
|・[Part 4: より洗練された形状を描画](#part-4-より洗練された形状を描画)|
|・[Part 5: 長さを固定し、円弧モードを使用](#part-5-長さを固定し円弧モードを使用)|
|・[Part 6: シェープ編集ツール](#part-6-シェープ編集ツール)|
|・[Part 7: 3D シェープを手動でモデル化](#part-7-3d-シェープを手動でモデル化)|
|・[Part 8: 新しいシェープの作成を強制](#part-8-新しいシェープの作成を強制)|
|・[Part 9: CGAモデルをシェープに変換](#part-9-cgaモデルをシェープに変換)|

## Part 1: 最初のシェープを作成
最初のシェープを作成するには、次の操作を行います。
1.	[[Navigator]](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm) ウィンドウで、Tutorial_14_Polygonal_Modeling__2025_0 チュートリアル フォルダーを展開します。

2.	scenes フォルダー内の 14A_ShapeModeling.cej ファイルをダブルクリックして、[[Viewport]](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm) ウィンドウでシーンを開きます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-3DD80B53-D1C4-4E3C-853D-8C2D28516AF7-web.png" title=" "width="500px">}}<br>
シーンは、グリッド サイズが 10 メートルの空のビューです。この設定を使用することで、毎回正確な寸法を気にせずに、本的なフットプリントを描画する手順を進めることができます。

{{< callout >}}

描画プロセスでカメラ位置を変更した場合は、Shift+N を押すか **[Start]** [ブックマーク](https://doc.arcgis.com/en/cityengine/latest/help/help-bookmarks.htm)をクリックして、カメラ位置をトップダウンにリセットします。

{{< /callout >}}

3.	ツールバーの **[Polygonal Shape Creation]** ツール (S) をクリックし、**[Rectangular Shape Creation]** ツール (Shift+S) をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-76D57D4F-5062-4CFA-8DA5-6A7C3B1EDF5C-web.png" title=" "width="500px">}}<br>

**[Rectangular Shape Creation]** ツールは、CityEngine で四角形の 2D シェープを作成する最も簡単な方法です。合計で必要なクリックは 3 回だけです。最初の 2 つは、軸と 1 番目の辺の長さを定義し、3 番目の側は 2 番目の辺の長さを定義します。詳細については、[「Draw a rectangle」](https://doc.arcgis.com/en/cityengine/latest/help/shape-creation-draw-rectangle.htm)を参照してください。<br>
続行する前に、すべての [[snapping]](https://doc.arcgis.com/en/cityengine/latest/help/help-snapping.htm) オプションがオンになっていることを再確認してください。

4.	グリッドをクリックし、4 つのセル (約 40 メートル) が覆われるまでマウスを水平に動かします。オレンジ色の破線は、グローバル軸へのスナップを視覚化しています。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-7C28DAD2-FEC9-4EE6-8826-8AEFEFB164D2-web.png" title=" "width="400px">}}
5.	クリックして 2 番目の点を作成します。

6.	マウスを 4 つのセルを下に移動すると、マウスがスナップし、プレビューの周囲にオレンジ色のハイライトが表示され、約 40 x 40 メートルの正方形が作成されることを示します。

7.	クリックして 3 番目の点を作成し、シェープの作成を完了します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-F43D3B58-6A2A-4747-86CE-3428FEEECFCB-web.png" title=" "width="400px">}}
作成後、新しいシェープが自動的に選択されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-859F83A1-2D90-426F-8A02-37400B9BC079-web.png" title=" "width="400px">}}<br>
各コーナーには、 4 つの個別のポイントがあります。ポイントは頂点と呼ばれます。CityEngine のシェープは、少なくとも 3 つの頂点またはエッジで構成されます。閉じた頂点とエッジのセットの間の領域は、面と呼ばれます。単一点、線、または閉じていないポリラインはサポートされていません。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-EF289DC8-80E1-4FC9-8F74-FD88CA6A685F-web.png" title=" "width="500px">}}


## Part 2: 多面構成のシェープを操作
シェープは、前述したように、1 つの面のみを持つ 1 つのポリゴンとして存在できますが、複数の面を持つ複数のポリゴンで構成することもできます。CityEngine では、2D 区画や 3D 建物モデルを表現するために、複数の面を持つシェープがよく使用されます。どちらの場合も、必要に応じてプロシージャル [CGA](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-modeling-overview.htm) ルールを割り当てることができます。<br><br>
連立住宅のフットプリントを複数の面を持つシェープとして描画するには、次の手順を実行します。
1.	[Rectangular Shape Creation] ツールで、前の正方形の隣に 4 セルのサイズで別の正方形を作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-A603BA79-EAC8-4D2D-87DA-C52D1AB3441E-web.png" title=" "width="500px">}}
2.	2 つ目の 4 セル サイズの正方形を追加します。
以前に描画したシェープに追加するには、既存の頂点の 1 つにカーソルを合わせ、クリックして角の 1 つにスナップします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-2A06912F-26FE-4C1B-947C-6969B60FCA9B-web.png" title=" "width="500px">}}
3.	これをもう一度繰り返して、連立住宅のフットプリントを完成させます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-3C6C0BE9-7A77-47DC-A80E-07F32275A326-web.png" title=" "width="500px">}}

複数の面を作成する別の方法は、シェープを分割することです。別の手法を使用して、前の同じシェープを再現します。

4.	まず、2 x 6 グリッド セル (約 20 x 60 メートル) のサイズの長方形を作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-C2309B7A-2843-4A78-8A3A-66D30A624ADA-web.png" title=" "width="500px">}}
5.	3 番目のセルから、2 x 2 の正方形を追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-66AB9E1F-24EE-4950-AE99-903D07F1D364-web.png" title=" "width="500px">}}
シェープが 3 つの面に分割され、面を個別に選択できるようになりました。
6.	シェープを選択した状態で、ツールバーの **[Select]** ツールをクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-A23E0F24-F477-4FE8-925C-D6767F0249D0-web.png" title=" "width="500px">}}
7.	面の 1 つにカーソルを合わせ、もう一度クリックして 1 つの面を選択します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-0ED263EE-1773-4146-BC13-E0FD9F25EF22-web.png" title=" "width="500px">}}
これで、[component selection] モードになります。シェープを最初に選択した後にさらにクリックすると、その基になるコンポーネント (面、エッジ、頂点) が選択されます。<br>

これで、2つの連立住宅ができました。

## Part 3: 穴のあるシェープを作成
次に、連立住宅の右側に中庭があるフットプリントを作成します。
1.	**[Rectangular Shape Creation]** ツールをクリックし、8 x 8 セルの正方形を描画します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-8EBDCD8D-5B96-470D-B506-E528EF19F717-web.png" title=" "width="500px">}}
カウントしたくない場合は、[[rectangle tool options]](https://doc.arcgis.com/en/cityengine/latest/help/shape-creation-draw-rectangle.htm) ウィンドウで **Edge Length** 値を確認できます。マウスを動かすと、現在の長さで更新されます。これを使用して固定長に設定することもできますが、これはチュートリアルの後半で説明します。<br>

次に、内側を切り開きます。

2.	図形の内側に 2 つ目の正方形を追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-DB427927-A9A6-400F-9DAF-41F20648047E-web.png" title=" "width="500px">}}

{{< callout >}}

**[Shapes]** メニューの [[Offset Shapes]](https://doc.arcgis.com/en/cityengine/latest/help/help-offset-shapes.htm) ツールを使用しても、同じ結果を得ることができます。

{{< /callout >}}

これで、シェープが外側と内側の面に分割されます。しかし、中庭には内側の面は必要ありません。

3.	**[Select]** ツールをクリックし、中心シェープのみを選択します。

4.	Delete を押して削除します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-19961B21-B264-4CD2-BC1A-DB30D0E7803A-web.png" title=" "width="500px">}}
内面の面が取り除かれます。これで、穴の開いたシェープができました。<br>

フットプリントをもう少し面白くするには、フットプリントを 2 つの等しい部分に分割します。

5.	**[Polygonal Shape Creation]** ツールをクリックします。

6.	カーソルがスナップするまでカーソルを合わせて、上端の中点を見つけます。<br>
スナップはオレンジ色の X で示されます。クリックすると、最初の点が設定されます。カーソルを一番下に移動し、カーソルが下端の中点にスナップしたら、もう一度クリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-7B0C6075-D3F0-4A97-9BE7-66D45C1A7D32-web.png" title=" "width="500px">}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-1640DD33-D142-4171-8A54-96A25F32C0AE-web.png" title=" "width="500px">}}
これにより、シェープが 2 つの面に分割されます。チュートリアルの後半でこれを使用して、面ごとに異なる高さの 3D マスモデルを作成します。


## Part 4: より洗練された形状を描画
1.	以下のようなシェープを作成するには、**[Polygonal Shape Creation]** ツールを使用します。次に、2 つの L 字型のフットプリントを描画します。
2.	**[Polygonal Shape Creation]** ツールをアクティブにした状態で、中庭の隣に新しいポリゴンを開始します。
クリックするたびに、追加の頂点が追加されます。ポリゴンを完成させるには、始点をクリックするか、Enter を押します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-76647128-4811-4CA7-BAFC-410120C3896F-web.png" title=" "width="500px">}}

3.	2 つ目の L 字型を作成しますが、今回は逆さまにします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-32A72F9F-E8DE-4709-AD6C-503D931CF77D-web.png" title=" "width="500px">}}

これまでは、新しいシェープのみを作成していました。ただし、移動、拡大縮小、または回転の変換を適用することで、任意のシェープを変更することもできます。

3.	右の L 字型がまだ選択されていると仮定して、ツールバーの **[Transform Rotate]** ツール (R) に切り替えます。
4.	緑色の軸リングをクリックしたまま上に動かすと、少し左に回転します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-06FAF1DE-FD2D-4D71-BB6B-E7C1E93A2279-web.png" title=" "width="500px">}}
5.	**[Transform Move]** ツール (W) をクリックします。
選択した図形の中央に複数のハンドルが表示されます。これらの変換ツールの詳細については、[「Use transform tools」](https://doc.arcgis.com/en/cityengine/latest/help/help-transform-tools.htm)を参照してください。

6.	青い矢印に沿ってドラッグして、左上の頂点が前の図形と水平に揃うまで、図形を Z 軸に沿って上に移動します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-4A23EC72-61F8-4C71-9EDD-F8CFC5CA6E85-web.png" title=" "width="500px">}}<br>

次に、すべての角で左の L 字型とシェープを水平に再配置します。そのために、ガイドを使用できます。[ガイド](https://doc.arcgis.com/en/cityengine/latest/help/help-guides.htm)は、幾何学的な構成において一貫した整列を作成するために設定された一時的な線です。CityEngine では、描画ツールや編集ツールを使用するときにガイドにスナップできます。

7.	**[Guide Creation]** ツールをクリックします。ガイドを追加する最も簡単な方法は、既存のエッジをダブルクリックすることです。次の図に示すように、5 つのガイドを追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-0646D864-3F9C-4277-B8AE-B2C1E8855B56-web.png" title=" "width="500px">}}

8.	**[Transform Move]** ツールに切り替えて、[left to right rectangular selection](https://doc.arcgis.com/en/cityengine/latest/help/help-select-objects.htm#ESRI_SECTION1_3718ACF07E2E42D08C2E3CF9294521D9) を使用して左上の頂点を選択します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-6B19150E-5242-4262-B638-7C47D0A07984-web.png" title=" "width="500px">}}

また、最初にクリックしてシェープを選択し、2 回目のクリックで頂点コンポーネントを選択することもできます。<br>
**[Transform Move]** ツールの黄色のディスクを含むハンドルは、選択した頂点の位置に表示されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-0A05A542-E56A-4055-B809-E7AADB06129E-web.png" title=" "width="500px">}}

9.	黄色のディスク ハンドルを、以前に作成したガイド間の交点にスナップするまでドラッグし、マウスをもう一度放して頂点を新しい位置に設定します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-510A007A-B650-46A9-911D-B483A1DFA34B-web.png" title=" "width="500px">}}

10.	他の 3 つの角を水平に揃えるように、これを繰り返します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-55BB874B-6D93-4589-BD0F-50CFC2579077-web.png" title=" "width="500px">}}

11.	右側の L 字型にある 3 つのガイドを選択し、Delete を押してシーンから再度削除します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-43B40483-3B62-4BFC-B7D1-9E1ECF32499E-web.png" title=" "width="500px">}}
後で参照として使用するため、水平のものは保持しておいてください。

次に、右側のシェープをさらに調整するために、内側の長い辺にもう1つ頂点を追加します。

12.	**[Polygonal Shape Creation]** ツールで、シェープをダブルクリックします。
13.	新しく作成した頂点を選択し、[move] ツールを使用して少し右にドラッグします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-A48597A8-A898-445E-83FE-3CC1D7F5E6B3-web.png" title=" "width="500px">}}

## Part 5: 長さを固定し、円弧モードを使用
**[Polygonal Shape Creation]** ツールは、ポイントごとに描画するだけでなく、さまざまな目的で使用できます。固定された長さの入力が可能で、円弧作成用のサブ モードがあります。次に、これらの機能を使用して、角が丸みを帯びた、より正確な L 字型を描画します。

1.	開始する前に、**[Viewport]** ウィンドウの **[Visibility settings]** でグリッドのチェックを外すか、D,G を押してグリッドを非表示にします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-C4EE455E-9C1E-487E-A517-3845CACCA029-web.png" title=" "width="500px">}}
正確な数値で作業する場合は、必要ありません。

まず、20 メートル間隔で 2 つの垂直ガイドを作成します。2 つの水平ガイドとともに、角が丸い L 字型を描く際の境界として使用されます。

2.	**[Guide Creation]** ツールをクリックし、回転していない L 字型の左端をクリックして右にドラッグします。<br><br>
正確には、[tool] オプションでオフセットを定義します。2 つのガイドは 20 メートル離れている必要があります。このまま進めていくと、1 つ目のガイドは 100m、2 つ目のガイドは 120m になります。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-DD21AF62-3689-448B-A7B5-ADDC7F115AC8-web.png" title=" "width="400px">}}

{{< callout >}}

Tab キーを押してオフセット入力フィールドに直接ジャンプし、距離を入力します。Enter を押して値をロックします。

{{< /callout >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-7F449A77-BF65-4003-8AC1-1F9206969E98-web.png" title=" "width="500px">}}

3.	**[Polygonal Shape Creation]** ツールをクリックし、上部の水平ガイドと左垂直ガイドの交点に最初のポイントを設定します。

4.	長さを 70 メートルに設定します。

5.	もう一度クリックして 2 番目の点を追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-78332AEC-109A-4D7B-9AE7-EC43A5F6B930-web+(1).png" title=" "width="500px">}}

6.	**[Arc Mode]** トグル ボタンをオンにするか、A を押してカーソルを下と右に動かし、下部の水平ガイドにスナップします。
解像度を 20 に変更するには、スクロール ホイールを使用するか、**[Arc Mode]** トグル ボタンの横にあるボックスに入力します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-C2F61736-06BA-4FA3-9489-2486829DCB68-web.png" title=" "width="400px">}}
解像度は、円弧を形成するために使用される点または線の数を制御します。値が小さいほど、円弧はより丸く見えます。クリックしてポイントを追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-E2C9584B-5F37-45F1-A90D-7282F638336C-web.png" title=" "width="500px">}}

7.	**[Arc Mode]** トグル ボタンをオフにして、次のエッジの長さを 70 メートルに設定します。
もう一度クリックすると、次の点が作成されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-EC4F4415-B275-47EC-AAE9-30EB1919FB61-web.png" title=" "width="500px">}}

8.	長さ 20 メートルの点を上方に、そしてそこから 55 メートル後方に左方向へ 1 点を作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-95A98301-B95C-4733-B47A-B051448397A4-web.png" title=" "width="500px">}}

9.	内側の角では、少し拡大して、**[Arc Mode]** トグル ボタンを再度オンにします。

10.	解像度を 25 に設定し、右の垂直ガイドにスナップしながらクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-21335786-D6EE-41BB-87CA-87C5D6EF61EA-web.png" title=" "width="500px">}}

11.	もう一度ズームアウトし、水平ガイドと垂直ガイドが交差する上部に次の点を追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-F7D0FFF7-0E85-4BCA-86AD-1482EB440046-web.png" title=" "width="500px">}}

12.	Enter を押すか、最初の点をクリックして描画を終了します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-82AC99DA-3F4D-4958-98C6-0642687C1A02-web.png" title=" "width="500px">}}

13.	2 つのガイドを再度取り外します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-F84A5B7D-F9FD-4BA8-848D-B1ED57D6BF91-web.png" title=" "width="300px">}}

次に、同じシェープを反転して作成します。完全な描画プロセスを再度実行する代わりに、シェープをコピーして 180 度回転させることができます。

14.	シェープを選択し、**[Transform Move]** ツールに切り替えます。<br>
**[Copy on Move]** トグル ボタンをオンにします。

15.	赤い矢印をドラッグして右に移動します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-29963287-13A0-466F-B9E5-825C2D0F2D6B-web.png" title=" "width="500px">}}

16.	**[Copy on Move]** ボタンをオフにします。

17.	**[Transform Rotate]** ツールをクリックし、コピーを緑色のハンドルを使用するか、該当する軸の入力ボックスに値を入力して、180 度回転します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-5F16A1D3-DF3D-46B6-AA1A-A82E75369A6E-web.png" title=" "width="500px">}}

18.	両方のシェープが重なるまで、**[Transform Move]** ツールの黄色のディスク ハンドルを使用して、元に戻します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-3946D2A0-F05A-4992-B16C-C7D78813A0D5-web.png" title=" "width="500px">}}

これで、シェープが重なり合うフットプリントが作成されました。ただし、CityEngine で 2 つのシェープが同じスペースを占めると Z ファイティングが発生する可能性があるため、これは理想的ではありません。次の章では、重なり合うシェープをより便利なものに変換するさまざまな方法を見ていきます。


## Part 6: シェープ編集ツール
**[Shapes]** メニューのツールとコマンドを使用して、シェープを編集できます。次に、**[Union Shapes]**、**[Subtract Shapes]**、および **[Separate Faces.]** ツールについて説明します。
1.	重なり合うシェープを選択し、z 軸に沿って下に 2 つのコピーを作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-5E349052-48EB-47ED-9909-C99D36D22989-web.png" title=" "width="500px">}}
2.	最初のコピーのシェープを選択し、メインメニューの **[Shapes]** → **[Union Shapes]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-8AC9832E-4AF1-4338-A4D9-2606A7D68B26-web.png" title=" "width="500px">}}<br>
1 つの面のシェープが作成され、その間にすべてのエッジが削除されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-5C20E63A-8F38-4530-B81C-48635FD22A56-web.png" title=" "width="400px">}}

3.	2 番目のコピーの両方のシェープを選択し、メイン メニューから **[Shapes]** → **[Subtract Shapes]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-765F0507-398B-44E0-9958-67E8344F5E27-web.png" title=" "width="400px">}}<br><br>
これで、一方の L 字型がもう一方の L 字型を切断し、3 つの面に分割されます。どのシェープを他のシェープから減算するかを決定するには、[lead selection](https://doc.arcgis.com/en/cityengine/latest/help/help-select-objects.htm#ESRI_SECTION1_9F51B2F8BD074A37A212484A66400801) が使用されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-A8B0F336-8AA4-40F6-AAA8-EEC3161DB14F-web.png" title=" "width="400px">}}

別のオプションは、面を個々のシェープに分割することです。

4.	これを説明するには、前に減算したシェープをコピーし、メイン メニューから **[Shapes]** → **[Separate Faces]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-98192B97-FEE2-4EDF-B3BF-475BD775C7DF-web.png" title=" "width="400px">}}<br>
以前のマルチフェイス シェープは、面ごとに別々のシェープに分割されています。

5.	すべての新しいシェープを少し離します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-A161140A-0630-462E-AEEC-D8B0DA775729-web.png" title=" "width="400px">}}

{{< callout >}}

**[Combine Shapes]** ツールを使用して、別々のシェープを 1 つのシェープに結合することもできます。このツールは、接続されていないシェープにも機能します。

{{< /callout >}}

## Part 7: 3D シェープを手動でモデル化
このチュートリアルの次の部分では、**[Push Pull]** ツールを使用します。[[Push Pull]](https://doc.arcgis.com/en/cityengine/latest/help/help-push-pull-tools.htm) ツールを使用して、描画した 2D フットプリントから 3D 建物のマスモデルを手動でモデル化します。<br>

**[Push Pull]** ツールは、シェープを直接操作するため、元のフットプリントをバックアップすることをお勧めします。すべてのシェープを別のレイヤーにコピーするのも 1 つの方法ですが、このチュートリアルでは、現在のシナリオを複製することで対応します。

1.	**[Scene Editor]** ウィンドウで **Scenario 1** を右クリックし、**[Duplicate]** を選択します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-4E77A8CE-CB52-426B-94FD-62A67E626592-web.png" title=" "width="500px">}}

2.	ダイアログボックスで、名前を 3D シェープ に変更し、**[OK]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-89B734EF-7299-46DC-8960-EB60FF705B81-web.png" title=" "width="500px">}}<br>
新しく作成されたシナリオが **[Navigator]** ウィンドウと **[Viewport]** ウィンドウで選択されている以外は何も変更されていません。

3.	**[Push Pull]** ツールをクリックし、以前に移動したシェープの 1 つにカーソルを合わせます。
アクションに使用できるシェープまたは面は、オレンジ色のアウトラインで強調表示されます。さらに、中央にオレンジ色のボールが表示されます。**[Push Pull]** ツールはトップダウン ビューでは機能しないため、続行する前に、Alt を押しながらクリックしてドラッグし、ビューを少し傾けます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-13A54544-FEC7-4C52-BC15-78331E0D9F16-web.png" title=" "width="500px">}}

4.	シェープを押し出すには、オレンジ色のボールをクリックして上にドラッグします。<br>
ジオメトリーはすぐに更新されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-F306A7D4-15D5-4D00-8A44-E3B248E821AD-web.png" title=" "width="500px">}}

5.	他のバリエーションの押し出しを続行します。<br>
スナップが有効 (既定値) の場合、押し出しは同じ高さの他の面にスナップし、オレンジ色でマークされます。編集したシェープの違いは、押し出し後により明確になります。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-11571CF0-A646-412A-AA6B-77B5BE3AFF53-web.png" title=" "width="500px">}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-14F76C24-75D2-4DA3-AE4E-A84108D9312B-web.png" title=" "width="500px">}}
6.	以前に描画したすべてのフットプリントを引き続き押し出します。
任意の高さで作成できます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-6129D8FD-C6E9-4122-9042-E171113DABF4-web.png" title=" "width="500px">}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-09F6928C-68C0-44B7-9A93-C5FD618B69B4-web.png" title=" "width="500px">}}

さまざまな建物のマスモデルの作成に成功しました。

## Part 8: 新しいシェープの作成を強制
前回は、既存のシェープの上にシェープを描画すると、そのシェープに新しい面として追加される方法を学びました。この動作は必ずしも望ましいものではないため、[shape creation] ツールには、別のシェープを強制的に作成するオプションがあります。次に、シェープ作成ツールを使用して新しいシェープを強制的に作成する例を見ていきます。

1.	次の図に示すように、60 x 20 メートルと 40 x 20 メートルの 2 つの隣接する四角形を作成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-047E9E4E-5C3E-4F1A-8C58-0D74E9944C85-web.png" title=" "width="500px">}}
2.	**[Shapes]** メニューの **[Union Shapes]** ツールを使用して、内側のエッジを削除します。
3.	**[Force New Shape]** トグル ボタンをオンにします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-31C2EE1A-1888-4942-AB9B-7EE4862D894C-web.png" title=" "width="500px">}}
内側の角から 20 メートルの正方形を描きます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-01FF3A6E-828E-4F93-94B9-36FF1296C6D8-web.png" title=" "width="300px">}}
選択の変更によって示されるように、別のシェープが作成されます。
4.	下部に隣接する正方形をもう 1 つ作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-39B1CEFA-6C88-4934-BC0A-60D6709E4362-web.png" title=" "width="300px">}}

次に、角のシェープを縮小します。

5.	シェープを選択し、**[Transform Scale]** ツール (E) をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-491AFBB2-C258-4EBC-B61A-EAA54DE37F5B-web.png" title=" "width="300px">}}
このツールを使用すると、ハンドルを使用するか、ツール オプションで値を設定することで、任意の方向に拡大縮小したり、均一な比率を維持したりできます。スケーリングは、ハンドルの中心位置に基づいて適用されます。ただし、この場合は、左上の頂点の位置に基づいて[拡大縮小](https://doc.arcgis.com/en/cityengine/latest/help/transform-scale-object.htm)します。

6.	**[Adjust Position and Orientation]** トグル ボタンをオンにし、左上隅の頂点をクリックして、ハンドルの位置を新しい位置に移動します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-B49371C4-0D73-41D1-9B56-2C1F4FE9F1D4-web.png" title=" "width="300px">}}
7.	**[Adjust Position and Orientation]** トグル ボタンをオフにして、新しい位置に基づいてシェープを拡大縮小します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-491AFBB2-C258-4EBC-B61A-EAA54DE37F5B-web.png" title=" "width="300px">}}
8.	3 つの軸の入力ボックスのいずれかに 75 と入力し、Enter を押します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-D5DE3233-963A-4FED-AC7D-9C785DCFB258-web.png" title=" "width="500px">}}
シェープが小さくなりました。
次に、最初の正方形を新しい内側の角の位置に戻します。
9.	正方形を選択し、**[Transform Move]** ツールをクリックします。
再度、ハンドルの位置を正方形の左上に調整し、オレンジ色のボールを使用して内側の角に移動します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-F35122CB-8ADF-4C91-8AFD-03459676FE3E-web.png" title=" "width="500px">}}
10.	角のシェープの下端を選択し、下の正方形のシェープの上端に移動します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-7D75F4ED-A00E-4BB9-A1B8-CC9E6FF35DAB-web.png" title=" "width="500px">}}<br>
正確にスナップさせるには、ハンドルの位置を再度調整し、エッジの左側の頂点に合わせてから、オレンジ色のボールを使ってドラッグし、正方形のシェープの左上の頂点にスナップさせてください。

次に、**[Transform Move]** ツールと **[Transform Rotate]** ツールの両方を使用して、このブロックを完成させます。

11.	3 つのシェープのコピーを作成し、反転します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-D86ED4DD-D551-48ED-AD5B-EC2C34D94113-web.png" title=" "width="500px">}}
それらを上部の水平ガイドに合わせます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-62D79353-CE70-41E6-AAE7-68CB87CC440A-web.png" title=" "width="500px">}}

12.	**[Push Pull]** ツールを使用して、パーツを個別に押し出します。<br>
角のシェープを少し低く保ち、正方形のシェープを高くして、次の画像に示すようにタワーと L バーが得られるようにします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-159BCB09-F38F-4123-9592-7AA34CDCDF23-web.png" title=" "width="500px">}}

13.	タワーの高さを一時的に位置合わせするには、参照エッジからガイドを作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-8572D622-4580-476A-996F-F04BC8973F13-web.png" title=" "width="500px">}}
これにより、固定距離を測定せずに、位置を合わせて押し出すことができます。

14.	内側のタワーの内側の端をドラッグして、シェープをさらにカスタマイズします。<br>
上部を狭くするには、オレンジ色の矢印の反対方向に移動します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-0506D9C7-C10A-42F9-918B-9EACBCC52283-web.png" title=" "width="500px">}}
押し出された高さは、後で変更できます。

15.	青い矢印の軸に沿ってドラッグすると、長方形以外の角度に沿って、押し出されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-E17C854F-ED00-435C-B2F4-B06942F1559E-web.png" title=" "width="500px">}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-C5F876AA-66FA-4D12-A859-3F4A4A4C3339-web.png" title=" "width="500px">}}

## Part 9: CGAモデルをシェープに変換
3D 建物を作成する別の方法は、別の 3D モデリング アプリで作成したモデルをインポートして静的モデルとしてインポートするか、CGA を使用してプロシージャル モデルを作成することです。<br>
次に、組み込みのシェープ モデリング ツールを使用して、このようなモデルをさらにカスタマイズする方法を見ていきます。
1.	グリッドまたはツールのオプションを使用して、80 x 80 メートルのシェープを作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-A9FEDB32-EEB6-4BDE-9338-D83189D6A1BB-web.png" title=" "width="500px">}}

次に、ESRI.lib プロジェクトの rules/Components/Massing/Point_Block フォルダーにある Simple_Tower.cga rule ファイルをシェープに割り当てます。

2.	.cga ファイルをシェープにドラッグして、タワーのマスを作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-93F3C5D1-770E-4B41-B323-D7637322F4D1-web.png" title=" "width="500px">}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-6623CBB1-B727-45EF-96BB-2125CA92EC34-web.png" title=" "width="500px">}}
[ESRI.lib](https://doc.arcgis.com/en/cityengine/latest/help/help-esri-lib-webstyles.htm) には、大量作成に関するさまざまなルールが付属しています。
3.	**[Inspector]** ウィンドウで一部の属性を変更して、モデルを微調整します。
**[Height]** 属性を 60 m に、**[Shape]** 属性を **[Amoeba]** に、**[Position]** 属性を **[Center-Center]** に設定します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-DCCECBCA-3E7A-4DFB-90E2-A2444DE71CC0-web.png" title=" "width="500px">}}
4.	モデルを選択したまま、メイン メニューの **[Shapes]** → **[Convert Models to Shapes]** をクリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-3E232560-2C2D-4FA6-8D8D-BF4B8E1D8EE4-web.png" title=" "width="500px">}}
このツールは、プロシージャルに生成された 3D モデルを静的な 3D シェープに変換します (現在の 3D モデルのスナップショットと考えることができます)。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-2E01E333-E6A2-41D3-A43B-5C177E55171D-web.png" title=" "width="500px">}}
モデルは、このチュートリアルで以前に説明したすべての手法を使用して編集可能になりましたが、**[Inspector]** ウィンドウの属性を使用して制御できなくなりました。
5.	下部の面は不要になったため、削除します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-3A2AA7D1-38D3-4BD7-900A-B1CBFDB0143D-web.png" title=" "width="500px">}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-73250053-43BC-4CE2-BD5D-F637FB2BFECC-web.png" title=" "width="500px">}}
6.	**[Circular Shape Creation]** ツール (Shift+C) に切り替えます。<br>
これは、**[Rectangular Shape Creation]** ツールと非常によく似ていますが、始点と半径を定義するだけでよい点が異なります。**[Segments]** ツール オプションを使用すると、円のエッジの数を制御できます。プレビューは、すぐに更新されます。有効な数字は 3 (三角形) から 72 (非常に丸い円) の間です。

7.	**[Segments]** の値を 24 に設定します。

8.	円の描画を開始する前に、**[Force New Shapes]** トグル ボタンをオフにします。

9.	アメーバの屋根の下部の中央をクリックし、小さな境界線だけが残るまで、マウスを外側にドラッグします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-602153F5-F999-4D72-85B9-2AD322851680-web.png" title=" "width="500px">}}
Esc を押すと、開始点の初期位置にリセットできます。
10.	もう一度クリックすると、円が上面に追加されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-BA4F75F3-A822-408D-8222-12D42BC0432F-web.png" title=" "width="500px">}}

上部についても同様のことを行います。しかし、ここでは、下部ほど丸みを帯びた形はしていません。

11.	**[Polygonal Shape Creation]** ツールを使用し、**[Arc Mode]** トグル ボタンをオンにして、少し内側に沿って、トレースします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-A7E86690-A2E6-45E0-A5D1-AA56617DDFB3-web.png" title=" "width="500px">}}

12.	必要に応じて、その場でセグメントと距離を調整します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-D034AA6D-0C79-4EAE-A5EC-13E194BE9066-web.png" title=" "width="500px">}}
クリックするたびに、追加されたポイントを確認できます。セグメント数または接線を調整するには、青いハンドルを使用します。Ctrl+Z を押すと、いつでもポイントを元に戻すことができます。

13.	Enter を押すか、始点をクリックして、面を上部に追加します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-958414F4-DA95-4E27-AA4B-8AF24685362E-web.png" title=" "width="500px">}}
14.	シェープの選択を解除して **[Push Pull]** ツールに切り替え、円の面にカーソルを合わせ、オレンジ色のボールをクリックして下にドラッグします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-D69AB3B8-F894-41E3-8F72-B6792B347A16-web.png" title=" "width="500px">}}

15.	フリーフォームの面を上向きに押し出します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-EFA4887E-1B7B-4696-9BFF-00A2D516DD37-web.png" title=" "width="500px">}}

最後のステップとして、シナリオ 1 と 2 を切り替えることで、フットプリントとその潜在的な 3D 表現を表示できるようになりました。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-898DD1A9-637A-49CC-9ED8-95A96C9AB84E-web.png" title=" "width="500px">}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14a-2d-and-3d-shape-modeling/GUID-DCD500EF-E7E2-4AD6-8ECD-4C85AC1EC746-web.png" title=" "width="500px">}}


このチュートリアルでは、次の操作を行う方法を学習しました。

•	2D シェープにはさまざまな描画手法を使用します。<br>
•	シェープを編集します。<br>
•	2D シェープから 3D シェープを作成します。<br>
•	CGAモデルを3D シェープに変換します。<br>

CityEngine の学習を続けるには、[完全な CityEngine チュートリアル カタログ](https://doc.esrij.com/cityengine/tutorials/)を参照してください。

