+++
title = "チュートリアル 1 : CityEngine の基本"
description = "このチュートリアルでは、シーンの作成、オブジェクトの選択、ルールの編集など、CityEngine で作業する際に必要なスキルを学びます。"
Weight = 1
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false 
+++




## チュートリアル データ

チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要

このチュートリアルでは、シーンの作成、オブジェクトの選択、ルールの編集など、CityEngine で作業する際に必要なスキルを学びます。

|演習|
|:--|
|・[Part 1: プロジェクトの新規作成](#part-1-プロジェクトの新規作成)|
|・[Part 2: シーンの作成](#part-2-シーンの作成)|
|・[Part 3: 最初の道路レイアウトの作成](#part-3-最初の道路レイアウトの作成)|
|・[Part 4: CityEngine のナビゲーションを探索](#part-4-cityengine-のナビゲーションを探索)|
|・[Part 5: オブジェクトの選択](#part-5-オブジェクトの選択)|
|・[Part 6: ルールを使用したモデルの生成](#part-6-ルールを使用したモデルの生成)|
|・[Part 7: ルールの編集](#part-7-ルールの編集)|
 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-C70587F0-4C3D-47D5-8696-A85444AF1EDF-web2.png" title=" " width="400" >}}

## Part 1: プロジェクトの新規作成

はじめに、CityEngine プロジェクトを新規作成します。

1.  **\[File\] メニュー → \[New\] → \[CityEngine\] → \[CityEngine
    project\]** をクリックします。\[Select a wizard\] ダイアログ
    ボックスが表示されます。</br>

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-BD4B44D5-F4F0-4535-B544-43733DCD9CAA-web2.png" title=" " width="400" >}}

2.  **\[Next\]** をクリックします。

3.  **\[Project name\]** に「MyFirstCity」と入力します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-C39777BF-6136-459B-9F02-56C639AFF233-web2.png" title=" " width="400" >}}

4.  **\[Finish\]** をクリックします。<br>
    [\[Navigator\]](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm) ウィンドウ内に **MyFirstCity** プロジェクトが作成されます。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-AA831958-6A2F-4BCF-AC25-34FC514ABB7A-web2.png" title=" " width="400" >}}

## Part 2: シーンの作成

次に、シーンを作成します。

1.  **\[File\] メニュー → \[New\] → \[CityEngine\] → \[Cityengine Scene\]** をクリックします。
または、\[Navigator\] ウィンドウの /**MyFirstCity**/scenes/ フォルダーを右クリックし、**\[New\]** → **\[CityEngine Scene\]** を選択して、**\[Select a wizard\]** ダイアログを再度開きます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-8609A668-4ED2-48E5-AB56-5C4E2F250F40-web2.png" title=" " width="400" >}}

2.  **\[Next\]** をクリックします。

3.  **\[File name\]** に「**myFirstCity_01.cej**」と入力します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-78CACFD1-3959-4A2A-8F78-2AB5B862C8B8-web2.png" title=" " width="400" >}}

4.  **\[Coordinate System\]** が空の状態になっていることを確認します。

    座標系の詳細については、[[Georeferensing]](https://doc.arcgis.com/en/cityengine/latest/help/help-georeferencing.htm) を参照してください。

5.  **\[Finish\]** をクリックします。

    **MyFirstCity \_01.cej** シーンは \[Navigator\] ウィンドウの
/MyFirstCity/scenes/ フォルダーに作成されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-E9A5EC44-4FE2-44F5-9D2D-7897CC0C8C0D-web2.png" title=" " width="400" >}}

### ルールとアセットのコピー

  **Tutorial_01_Essential_Skills** プロジェクトから **MyFirstCity** プロジェクトにコピーします。

1.  /Tutorial_01_Essential_Skills/rules/ フォルダーをクリックして展開します。

2.  フォルダー内のコンテンツを選択し、Ctrl+C キーを押してコピーまたは、右クリックで **\[Copy\]** を選択して、コンテンツをコピーします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-0BEC164B-DF40-4512-B428-35D304DA1EBD-web2.png" title=" " width="400" >}}

3.  /MyFirstCity/rules/ フォルダーをクリックし、Ctrl+V キーを押すまたは、右クリックで **\[Paste\]** を選択して、コンテンツを貼り付けます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-0BEC164B-DF40-4512-B428-35D304DA1EBD-web2.png" title=" " width="400" >}}

4.  同様の手順を /Tutorial_01_Essential_Skills/assets/ フォルダーに対して繰り返します。

これで、**MyFirstCity** プロジェクト内の assets フォルダーと rules フォルダーに、必要な   **Tutorial_1_Essential_Skills** のコンテンツをコピーできました。

## Part 3: 最初の道路レイアウトの作成

新規のプロジェクトとシーンのセットアップが完了しました。次に、道路レイアウトの生成を開始します。道路について詳しくは、[Graphs](https://doc.arcgis.com/en/cityengine/latest/help/help-graph-layer.htm) を参照してください。

道路ネットワークを作成するには以下の手順を行います。

1.  \[[Viewport](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)\] をクリックしてウィンドウをアクティブ化にします。

2.  **\[Graph\] メニュー** → **\[Grow Streets\]** をクリックし、**\[Grow Streets\]** ダイアログ ボックスを開きます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-A9034679-64B3-4B17-9EA3-40CC6C86A54E-web2.png" title=" " width="400" >}}

3.  デフォルト設定のまま、**\[Apply\]** をクリックします。

4.  **\[Close\]** をクリックしダイアログ ボックスを閉じます。

    約 500 以上の道路が作成されました。

5.  A キーを押すか、CityEngine ツールバーの **\[Frame all Viewports\]** tool を使用して **\[Viewport\]** 内の道路をフレーム化します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-6F4DDDA5-747F-4A8E-84C4-C033DA8B8A67-web2.png" title=" " width="400" >}}

6.  \[[Scene Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-scene-editor.htm)\] ウィンドウで新しい Streetnetwork レイヤーをクリックして、レイヤーを展開します。
Streetnetwork レイヤーには、block、graph、segments、shapes が含まれます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-59148AAF-2A3B-4FA7-A51C-FD8D9B61819F-web2.png" title=" " width="400" >}}

**Tutorial_01_Essential_Skills** フォルダーで **Essential_Skills_Part_2.cej** シーンを開いて、完成した例を確認します。

## Part 4: CityEngine のナビゲーションを探索

このセクションでは、画面移動、回転、ズームなど、CityEngine でのナビゲーション方法を学習します。
CityEngine でナビゲートするには、以下のアクションを使用します。

<table>

<tr>

  <th>アクション</th>

  <th>操作方法/Windows キーボード ショートカット</th>

 

</tr>

<tr>

  <td>回転移動<br>シーンを回転する</td>

  <td><b>[Tumble/Rotate]</b> ツールをクリックする
   <br>Alt キー＋左マウスボタン</td>

 

</tr>

<tr>

  <td>平行移動<br>ビューを上下左右に移動</td>

  <td><b>[Pan/Track]</b> ツールをクリックする
  <br>Alt キー＋ホイール ボタンをクリックする</td>

 

</tr>

<tr>

  <td>ズームイン/ズームアウト<br>注目ポイントに近づけたり、遠ざけたりします。</td>

  <td><b>[Dolly/Zoom]</b> ツールをクリックする<br>Alt キー＋右マウスボタン</td>

</tr>

<tr>

  <td>現在のカメラ位置からビューを回転<br><a href="https://doc.arcgis.com/en/cityengine/latest/help/help-export-360vr.htm">360 VR exports</a> ブックマークを作成するのに役立ちます。</td>

  <td><b>[Look around]</b> ツールをクリックする<br>B キー＋左クリック</td>

</tr>

<tr>

  <td colspan=2>全てのアクション リストと、マウス ナビゲーション の設定の変更方法については、<a href="https://doc.arcgis.com/en/cityengine/latest/help/help-3d-navigation.htm">[3D navigation essentials]</a> を参照してください。</td>

 

</tr>

</table>

## Part 5: オブジェクトの選択

**\[Select\]** ツールを使って、シーン内のオブジェクトを選択、操作、編集します。ツールバーの
**\[Select\]** ツール (または Q キーを押す) をクリックします。また、**\[Select\]** **メニュー** → **\[Selection tool\]** をクリックし、ツールを開くことができます。

以下の表の選択アクションを使用します。

|アクション|説明|
| ---- | ---- |
| シングル クリック                 | 個々のオブジェクトを選択します。<br>既に選択されているオブジェクトでは、選択要素 (面、エッジ、頂点) が選択されます。  |
| ダブル クリック                   | 個々のオブジェクトを選択し、フレーム化します。                    |
| 左から右方向へドラッグして範囲を選択 | 範囲内にあるオブジェクトまたはコンポーネントを選択します。マップ レイヤーは選択範囲に追加されません。  |
| 右から左へドラッグして範囲を選択  | 選択範囲と交差するオブジェクトを選択します。マップ レイヤーは選択範囲に追加されません。|


  {{< callout >}}

  左から右への選択は、通常、Street Graph Nodesのような小さなオブジェクトを選択するために使われます。<br>**Map Layers**、**Graph**、**Segments**、**Shapes**、および **Models** の 4 つの表示/非表示を切り替えるには、「F9」と「F12」を使用します。他のオブジェクトの表示を無効にすると、選択しやすくなります。
　{{< /callout >}}

オブジェクトが選択された後、右クリックをしてショートカット メニューを表示することができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-D1F46FDF-DE3B-4B21-80AF-B65449B4E40E-web2.png" title=" " width="400" >}}

 |アクション|説明|
| ---- | ---- |
  **Frame (F キー)**  | 選択範囲をフレームに入れます。(選択範囲がない場合はシーン全体をフレームに入れます。)
  **Select Objects in Same Layer** | 同じレイヤーまたはレイヤー内のすべてのオブジェクトを選択します。
  **Select Objects with Same Rule File** |  ルール ファイルが割り当てられている選択範囲内のすべてのオブジェクトを選択します。
  **Select Objects with Same Start Rule** |    同じスタート ルールが割り当てられていて、表示がオンになっているレイヤーのオブジェクトを選択します。

## Part 6: ルールを使用したモデルの生成

CityEngine はプロシージャル モデリング アプリケーションであり、[CGA rules](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-modeling-overview.htm) を使用します。Computer Generated Architecture (CGA) は、建築 3D コンテンツを生成するために指定された独自のプログラミング言語です。次のセッションでは、CGA ルールを使用してモデルを生成する方法について学習します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-5DDC7592-7DB9-41A7-8B3C-C946ECB8AB44-web2.png" >}}

1.  **\[Viewport\]** でブロックを選択します。

    [\[Inspector\]](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm) ウィンドウの中の **\[Block Parameters\]** で、**\[Subdivision Type\]** ボックスが「**RecursiveSubdivision**」に設定されていることを確認します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-C069C2FA-33F1-474F-B09D-84E746882A82-web2.png" >}}

2.  **\[Subdivision Type\]** ボックスのドロップ ダウン メニューをクリックして、「**Offset Subdivision**」に変更します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-03252525-272C-4FED-BA0C-A2E65128E49C-web2.png" >}} 

   ブロック分割とダイナミック シティ レイアウトの詳細については、[チュートリアル2 :テレインとダイナミック シティ レイアウト](/cityengine/tutorials/classic/tutorial-2-terrain-and-dynamic-city-layouts/)をご参照ください。

3.  ブロック内の形状を選択します。

4.  **\[Select\] → \[Select Object of Same Group\]** をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-AE1B83CF-831A-4EF6-8C61-89DA0C3FD739-web2.png" title=" " width="400" >}}

5.  rules フォルダー内の **building.cga** ルール ファイルを選択した形状にドラッグします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-35B42BFA-A2E7-4EC7-8453-49AFE921FAF4-web2.png" title=" " width="400" >}}

    ルール ファイルを形状にドロップすると、ルールが適用され、自動的に生成されます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-348AE995-71CF-4394-96B9-8F5CCD6AAB70-web2.png" >}}
      **\[Visibility settings\]** で、**\[Models\]** ボタンをクリックするか、F12 を押して、モデルが表示されていることを確認します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-478B982F-5006-4D72-A68D-63EB79799FF3-web2.png" title=" " width="200" >}}

6.  モデルを削除し、シーンに再度追加します。

     a.  モデルを選択して **Delete** キーを押すか、右クリックして **\[Delete\]** を選択します。これで、モデルが削除されます。

      {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-348AE995-71CF-4394-96B9-8F5CCD6AAB70-web2.png">}}

     b.　Footprint shape を再度選択し、ツールバーの **\[Generate\]** ツール (Ctrl＋G キー) をクリックして、フットプリントから建物を再度生成します。

7.  建物の高さの変化を確認するには、**\[Update Seed\]** ツール (Ctrl＋Shift＋G キー) をクリックして、シード値を変更します。

    以下の画像は、高さのシード値が異なる建物を表示しています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-0E2B187F-AE43-4127-9F8D-0D3B02A5E5AB-web2.png" >}} 
8.  **\[Inspector\]** ウィンドウで **\[height\]** の値を「60」に変更します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-288A8059-D34E-467F-A0B7-424AB498967D-web2.png" title=" " width="500" >}}
    **\[Inspector\]** ウィンドウで手動で変更すると、値が強調表示され、CGA ルールの定義が上書きされます。

9.  **\[Inspector\]** ウィンドウで属性の上にマウスを置き、右クリックして **\[Reset user attributes\]** を選択すると、**Building.cga** ルールをリセットできます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-1766CA68-4F6C-4297-93DB-C8414A0AD7F3-web2.png" title=" " width="300" >}}
  
    **Essensital_Skils_Part_4.cej** シーンを開いて完成した例を確認します。

## Part 7: ルールの編集

[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)
は現代から近代、古代から未来などのあらゆるタイプの 3D 都市モデルを作成および修正するためのツールです。ここまで使用してきた **building.cga** ルールの中身を見ていきます。

1.  **\[CGA Editor\]** で **building.cga** ルールを開くには、**\[Navigator\]** ウィンドウで CGA ルールファイルをダブル クリックするか、**\[Inspector\]** ウィンドウで **\[Rule File\]** リンクをクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-28708845-BDE7-4B25-A4DE-CA1F2CE7ECA0-web2.png" title=" " width="400" >}}

    **\[CGA Editor\]** で **building.cga** ルールが開きます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-1F3692DB-8E85-427D-9010-210B87C28F2A-web2.png" title=" " width="500" >}}

2.  **building.cga** ルールを編集します。

    height 属性は以下のコードで「15」から「25」までのランダム値として定義されています。

```
attr height = rand(15,25)
```

以下の例では、建物の \[height\] のランダム値は 18.35 です。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-62E6E238-3E38-42A9-B194-7B9B871A6D7E-web2.png" title=" " width="500" >}}

   {{< callout >}}

   building.cga ルールはランダムな値を生成するためシーンによっては異なります。
   {{< /callout >}}


3.  \[height\] のランダム値を「25」から「80」に変更します。

```
attr height = rand(15,80)
```

　　\[height\] のランダム値は「15」から「80」の間で定義されました。

　　　a.  Ctrl＋S キーを押すまたは、**\[File\]** **メニュー** → **\[Save\]** を選択して、編集したルールを保存します。

　　　b.  **\[Update Seed\]** ツール (Ctrl＋Shift＋G キー) をクリックして、建物を再生成します。

　　{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-A4D4B101-F96E-41F9-BA75-8FA336A7B436-web2.png" title=" " width="500" >}}

　　この建物の高さのランダム値は 56.79 です。

{{< callout >}}

  **\[Update Seed\]** ツールを使用する理由としては、\[height\]
  がランダム値であり、建物を再生成する際にランダム シード値を更新するときに必要なためです。
　{{< /callout >}}

4.  新しい屋根ルールを **building.cga** ルールに追加して、屋根のジオメトリを作成します。

　　a.  **Lot** ルールを編集して、以下のようにします。

```
Lot \--\>
    case shapeType == \"LotInner\" :
          Lot.
else :
  extrude(height) comp(f) { side : Facade \| top: Roof }
```

　　b.  **Roof** ルールを追加し、シェープを 22.5 度の角度を持つ **roofHip** として定義します。

```
Roof \--\> roofHip(22.5) Shape
```
　　c.  ルールを保存します。

5.  建物を再生成しますが、ここでは、**\[Generate Models\]** ツール (Ctrl＋G キー) をクリックします。これによって、建物の高さを 56.79 にキープすることができます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-1-Essential-skills/GUID-C70587F0-4C3D-47D5-8696-A85444AF1EDF-web2.png" title=" " width="400" >}}
**Essential_Skils_Part_5.cej** シーンを開いて完成した例を確認します。

このチュートリアルでは、プロジェクトとシーンの作成、道路レイアウトの作成、ナビゲーションとオブジェクトの選択、モデルの生成、ルールの編集方法について学習しました。
