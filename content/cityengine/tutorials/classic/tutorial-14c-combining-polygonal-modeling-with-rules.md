+++
title = "チュートリアル 14C : ルールによるポリゴン モデルの結合"
description = "ルール ベースのモデリングを使用したポリゴン モデリングの編集について学習します。"
Weight = 17
alwaysopen = false
publishDate = 2022-03-23T00:00:00+09:00
author = "井上" 
draft = false 
+++

|演習|
|:--|
|・[Part 1: ポリゴン モデリングとルール](#part-1-ポリゴン-モデリングとルール)|

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## Part 1: ポリゴン モデリングとルール
本チュートリアルでは、ルール ベースのモデリングを使用して、ポリゴン モデリングの編集について説明します。今回は、家のすべての窓に見栄えが良い 3D フレームを設置します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-B9A2D1B7-9BEF-49EB-825A-D595FB2178D6-web.png" title=" " width="500" >}} 

現在の状態では、テクスチャは平面です。もちろん、ウィンドウごとにフレームをドラッグすることもできますが、これは非常に面倒です。また、スケールを変更すると窓テクスチャが不自然になります。下図では、窓のスケールを変更したために、テクスチャの窓が途切れています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-E4CD6110-DCD4-4315-BD98-600D050DEC9F-web.png" title=" " width="500" >}} 

3D の窓を効率よく配置するには、建物にルールを適用します。
1.	まず、3D 窓を作成します。**[Rectangle]** ツールを選択し、上にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-D20E260D-C8A9-4D3B-9E51-AD92ED1F73A7-web.png" title=" " width="500" >}} 

2.	**[Selection]** ツールで正面を選択し、**[Texturing]** ツールで窓テクスチャをアサインします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-74FCD192-2F9F-48A0-B268-3F619B5A014B-web.png" title=" " width="500" >}}

3.	**[Rectangle]** ツールで、窓枠にいくつか長方形を描きます。3D 構造にするため、ドラッグします。
これで窓が完成です。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-2660BBFD-7D1B-428D-873C-0BE7A2D32E4B-web.png" title=" " width="500" >}}

これをルールで使用するために、まずエクスポートする必要があります。</br>
4.	モデルを選択し、**[File] メニュー → [Export] → [models]** を選択します。</br>
5.	**wavefront OBJ** を選択し、名前を **window** と名付けます。
出力先フォルダーが model フォルダーになっていることを確認します。</br>
6.	**[Finish]** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-199F08AE-26F7-4037-8FB5-8BB940D91571-web.png" title=" " width="500" >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-CAA3F7F9-1985-429F-8A01-9B09088D8C41-web.png" title=" " width="500" >}}

これでルールを適用することができます。</br>
7.	家を選択し、右クリックで **[Assign Rule File]** を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-5C782D7F-0B5F-4886-8CF9-D96263B30A02-web.png" title=" " width="500" >}}

8.	チュートリアルの rules フォルダーから、rule.cga を選択し、[Generate] をクリックします。


{{< callout >}}

ルールがすべてのポリゴンを 3D 窓のウィンドウ テクスチャに置換します。

{{< /callout >}}


すべての窓が 3D シェープになりました。違いを比較するには、**[show/hide models]** スイッチをオン/オフにします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-AD2BE60C-9D05-4247-A0F5-62918C4D8D28-web.png" title=" " width="500" >}} 

これで、窓枠をドラッグしても、テクスチャが自然に窓に配置されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-A3087BCA-0DBD-4E77-9B29-416EEF97E6A1-web.png" title=" " width="500" >}} 

また、グローバル パラメーターを変更することもできます。</br>
9.	**[Inspector]** ウィンドウを開き、家を選択します。</br>
10.	パラメーター スライダーをドラッグさせると、すべての窓にパラメーターの変更が更新されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-14c-combining-polygonal-modeling-with-rules/GUID-80A38D7D-4604-4F47-BF33-57C5FBB6E432-web.png" title=" " width="500" >}} 

