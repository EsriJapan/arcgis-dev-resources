+++
title = "チュートリアル 13B : ファサード ウィザード - 高度なファサードの作成"
description = "ファサードを分割したルール テンプレートをより直感的に作成したり、詳細なファサード要素をインポートする方法や高度なファサード作成のためのCGA テンプレートの編集方法をを学習します。"
Weight = 14
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false 
+++


## チュートリアル データ {#チュートリアルデータ .TOC-Heading}

ArcGIS CityEngineのチュートリアルにアクセスするには、は、**[Help] メニュー → [Download Tutorials and Examples…]**  を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
このチュートリアルでは、ファサードを分割したルール テンプレートをより直感的に作成したり、詳細なファサード要素をインポートする方法や高度なファサード作成のためのCGA テンプレートの編集方法を分析します。ファサード作成の基本から開始するには、[チュートリアル 13a: ファサード ウィザード - 基本的なファサード作成](../tutorial-13a-facade-wizard-basic-facade-creation/)を参照してください。<br>
この例では、画像ファイルを **ファサード ウィザード** に読み込んで、ファサード ルール テンプレートを作成します。その後、単純なマス モデルの建物ルールを作成し、以前に生成したファサード ルールを適用します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-77CBBED4-ED4F-42EB-A4AC-4B581C503B3A-web.png" title=" "width="500px">}}


|演習|
|:--|
|・[Part 1: ファサード分析とルール作成](#part-1-ファサード分析とルール作成)|
|・[Part 2: 分割タイプで単一分割を作成](#part-2-分割タイプで単一分割を作成)|
|・[Part 3: 分割タイプについて](#part-3-分割タイプについて)
|・[Part 4: 繰り返し分割](#part-4-繰り返し分割)
|・[Part 5: LOD とアセットの挿入](#part-5-lod-とアセットの挿入)


## Part 1: ファサード分析とルール作成
使用する元のファサード テクスチャ ファイルは、高度なファサードです。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-A4F5D23E-3842-4085-A55E-E800FB5703E8-web.png" title=" "width="500px">}}
**ファサード ウィザード**を使用してより複雑なファサードを作成するときに頻繁に遭遇する一連の問題があります。<br>
ほとんどの場合、**ファサード ウィザード**を使用するときは、窓の細分化の数、装飾的な詳細の繰り返し、不均一な床の高さなど、ファサードの詳細を慎重に調査して、構造を分割する最適な方法を見つける必要があります。時間をかけて戦略的に考えることをお勧めします。<br><br>
・緑: 繰り返しのないシングルタイル<br>
・青: 繰り返しのあるタイル (x または y)<br>
・赤: 入れ子式に繰り返すタイル (x と y 方向にタイル化可能)<br>
・黄: ルール対称性 (VCGA でリンクされる)<br><br>
メインのファサード構造には、単一分割、反復分割、および規則の対称性の分析が含まれます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-8F8A5CD9-D37F-4804-B910-D17FCCA1843F-web.png" title=" "width="500px">}}

1.	**[New]** → **[CityEngine Scene]** をクリックして新しいシーンを作成し、名前を MassModel_Advanced.cej にします。
2.	**[Facade Wizard]** ウィンドウを開きます。
3.	**[New Facade from Image]** ボタンをクリックして、AdvancedFacade.tif ファイルを参照します。
4.	領域の幅を 20 に設定します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-0261E143-7EC3-4C39-8EC3-1506995EBB40-web.png" title=" "width="500px">}}

## Part 2: 分割タイプで単一分割を作成
ファサードのサイズを大きくし、テクスチャを繰り返すには、単一分割と反復分割を追加し、分割を絶対分割または浮動分割として定義します。下の画像に示されている分割の手順は、分割の順序 (絶対および浮動) が垂直方向に正しく設定されるよう意図的に配置されています。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-32003C23-5D8D-4096-AD7C-04572F3326A0-web.png" title=" "width="500px">}}

1.  **[X Split]** ツールと **[Y Split]** ツールを使用して、ファサードに 1 つの分割 (青い線で表示) を追加します。各分割の直後に、新しい領域にカーソルを合わせると、青色のハイライトが表示されます。上下の矢印キーを使用して、分割タイプ (黄色の破線と実線で表示) を切り替えて割り当てます。

    a.  Shift キーを使用して、前の分割と同じ軸に新しい軸をスナップします。

    b.  必要に応じて、領域にカーソルを合わせ、上下の矢印キーをもう一度押して、分割タイプを変更します。

2.	絶対分割タイプと浮動分割タイプを設定した後、残りの最上階の領域を分割できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-45AF8F33-EE2D-45B1-AC83-3A37B8FC6B28-web.png" title=" "width="500px">}}
3.	以下に示すように、1 階の領域についても同じ操作を行います。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-2C7C2F5A-FE9A-4928-9307-C5C969047D90-web.png" title=" "width="500px">}}

{{< callout >}}

右側の上層階の垂直分割は、意図的に分割されておらず、このチュートリアルの後半でルールの再リンクを使って解決します。

{{< /callout >}}

## Part 3: 分割タイプについて

黄色の線は、分割タイプを表します。分割タイプを絶対型または浮動型として正しく定義することが重要です。<br><br>
**絶対** – 領域の寸法は変更できず、領域は異なるサイズのファサードに比例してのみスケーリングされます。絶対値に設定された領域の繰り返しは、新しい領域を繰り返すために、必要な正確な寸法が元の単一分割の方向で満たされた場合にのみ生成されます。ファサードの適切なタイル張りを確保するには、絶対分割としてスケーリングするときに固定値を必要とする要素を指定します。

•	絶対分割タイプの X Splits は、ハイライト表示された領域に黄色の水平実線で表されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-03B015CF-60CD-4530-A95F-04C11E7C7965-web.png" title=" "width="500px">}}
•	絶対分割タイプの Y Splits は、ハイライト表示された領域に黄色の垂直実線で表されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-748887C9-BA46-40F5-9875-E4239FD282CC-web.png" title=" "width="500px">}}
**浮動** - 領域の寸法は変更可能で、さまざまなサイズのファサードに合わせて拡張できます。浮動に設定された領域の繰り返しは、元の分割の正確な寸法に依存しません。元の単一分割の方向にファサードに合わせて引き伸ばしたり、拡大縮小したりできます。浮動分割は、CGA コードのチルダ記号 (~) にも対応しています。

•	浮動分割タイプの X Splits は、強調表示された領域に黄色の水平破線で表されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-6A32B5C6-5226-4803-B315-3A61D5EE95E5-web.png" title=" "width="500px">}}
•	浮動分割タイプの Y Splits は、強調表示された領域に黄色の垂直破線で表されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-025DD169-C7F6-4782-9386-F877507FF3A0-web.png" title=" "width="500px">}}
**分割タイプなし** – 領域の寸法は、元のイメージのインポート時の寸法の残り部分です。ファサードを再スケーリングすると、どちらの方向にも動的な調整を行わずにテクスチャが引き伸ばされます。

•	割り当てられた分割タイプは、強調表示された領域に線なしで表されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-69B5ABCE-DF6A-4366-B2CC-9D70F6499E98-web.png" title=" "width="500px">}}
## Part 4: 繰り返し分割
次の分割は、ファサードのどの部分が繰り返されて任意のファサード サイズに適応するかを定義する繰り返し分割です。

1.	前のセクションで単一分割と絶対値または浮動値を既に割り当てられている状態で、[X Repeat] ツールを使用して次の垂直分割を作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-CA4E034E-5364-4DF8-AFCF-0CB28BBEECDB-web.png" title=" "width="500px">}}
2.	上層階の窓が様々なファサードの寸法に合わせて垂直方向に拡大縮小されるようにし、浮動分割タイプに割り当てられた窓には別の手順が必要です。

    a.  [Y Repeat] ツールを有効にします。

    b.  4 つのウィンドウのそれぞれにカーソルを合わせると、下図のように赤い繰り返し線で囲まれた上部を横切るビームが見えます。

    c.  カーソルを合わせた状態で、これらの窓の梁ごとに 1 回クリックします。結果の分割線は表示されませんが、これは予期されることです。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-584685D6-9637-4699-B4F3-5375A89A029F-web.png" title=" "width="500px">}}

3.	ジオメトリーをさらに詳細にするには、青い領域をそれぞれ個別の要素に分割してください。作業を進めるにつれて、これらの分割は赤い領域にも自動的に繰り返されます。分割の順序を確認するには、以下の詳細画像を参考にしてください。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-A6E62343-47FC-4200-8103-78E1953E8C91-web.png" title=" "width="500px">}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-5EAD9764-1EE5-42B4-B6E3-56A3E970D2AC-web.png" title=" "width="400px">}}

特別なケースは、円弧がある 1 階です。これを円弧の側面で正確に分割すると、このチュートリアルの次の部分でアセットを挿入できるようにします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-59F12C67-94FE-47B0-8B0E-C8F3C35BC5B2-web.png" title=" "width="400px">}}

4.	これらの領域にカーソルを合わせると、繰り返し表示されるウィンドウがどのように更新されたかを確認できます。

### 領域幅の設定
次に、1 つの窓の幅を定義して、ファサードの合計サイズを再定義します。チュートリアルのこの部分の冒頭で、**[Set Region Width]** ポップアップでファサード全体のサイズを定義しました。ただし、この値が正しいかどうかは不明であり、完全なファサードよりも窓のサイズに精通しているため、新しい値を設定します。

1.	分割された窓を右クリックし、**[Set Region Width]** を選択します。

2.	適切なサイズ (1.2 m) を入力します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-E521E6C3-75BC-4B3C-82A5-49A03B345D06-web.png" title=" "width="500px">}}

3.	**[Z Adjust]** ツールを使用して深度値を編集し、ファサードにボリュームのある外観を与えます。窓を少し後ろに押し、棚を前に押します。三角形と台形の装飾を進めることもできます。

4.	**[Save Rules and Textures for Current Facade]** ボタンをクリックして、ルール ファイルを作成します。<br>

ファサードで生成された CGA ルール ファイルを後で、このステージに戻す場合に備えて、一意の名前で 2 番目のコピーを作成することをお勧めします。

{{< callout >}}

**[Facade Wizard]** ウィンドウを右クリックすると、**[Immediate Save and Generate for Selected Shapes]** を有効にできます。これを有効にすると、**Facade Wizard** 内からファイル名を選択や変更したり、コピーを作成したりするためのルール ファイルの保存ウィンドウが表示されません。

{{< /callout >}}

### ルールの調整
このルールをどのように進めるべきかを尋ねるかもしれません。**ファサード ウィザード**のルール ファイルはファサード用に作成されているため、垂直サーフェスにのみ割り当てることができます。そのため、テストできる単純なマス モデル ルールを作成します。

1.	**[Navigator]** ウィンドウで、チュートリアル・プロジェクトの rules フォルダーを右クリックし、**[New]** → **[CGA Rule file]** をクリックします。
2.	この新しいルールに MassModel.cga という名前を付け、**[CGA Editor]** ウィンドウを展開します。
3.	属性を作成し、buildingHeight という名前を付けて、値 25 を指定します。
4.	作成したファサード テンプレート ファイル (gen_Facade_AdvancedFacade.cga) をインポートするには、**[CGA Editor]** ウィンドウで右クリックし、コンテキスト メニューから **[Add Import]** を選択して、参照して見つけます。または、CGA ファイルを **[Navigator]** ウィンドウから **[CGA Editor]** ウィンドウにドラッグして、同じ結果を確認します。

5.	押し出しコマンドで Lot という名前のルールを作成します。押し出しの値には、以前に生成された buildingHeight 属性を使用します。
6.	押し出しの後、すべての側面を分割する要素分割を追加します。
7.	インポートしたファサード テンプレート ファイルのファサード ルールを割り当てます。サンプルでは、これは gen_Facade_AdvancedFacade.Facade です。これにより、以下のマス モデル ルール ファイルが得られます。

```
import gen_Facade_AdvancedFacade: "gen_Facade_AdvancedFacade.cga"

attr buildingHeight = 25

Lot-->
	extrude(buildingHeight) 
   comp(f){ side : gen_Facade_AdvancedFacade.Facade }
```
8.	メインメニューの **[File]** → **[Save all ]** をクリックします。

9.	**[Viewport]** ウィンドウで、[[shape creation]](https://doc.arcgis.com/en/cityengine/latest/help/help-shapes-overview.htm) ツールを使用して、10 x 20 メートルのフットプリントを作成します。

10.	そのフットプリント シェープに MassModel.cga ルールを割り当て、Ctrl+G キーを押してモデルを生成します。
11.	モデルを選択した状態で、[[Transform Scale]](https://doc.arcgis.com/en/cityengine/latest/help/transform-scale-object.htm) ツールを使用して変更し、ファサードが比例して変化することを確認します。<br>
ファサード テンプレートは直接使用され、ルールは新しい区画のジオメトリーとあらかじめ定義された 25 メートルの押し出しの高さに適応します。<br>{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-BAE9F5FC-6C42-470F-AB6D-AFA586C8161B-web.png" title=" "width="500px">}}
このチュートリアル プロジェクトで目的の結果を得るには、scene フォルダー内のFacadeWizard_3_Advanced.cej ファイルを開き、rules フォルダー内の MassModel_Advanced_tutorial_part_1.cga を開きます。

{{< callout >}}

このルールは、参照用に gen_AdvancedFacade_tutorial_part_1.cga ルールをインポートします。

{{< /callout >}}

### 再リンク ルール
次の画像では、事前に詳細を説明せずに残した部分 (黄色) を確認します。次に、CGA と **[Model Hierarchy]** ウィンドウを使用して、ファサード テンプレートから特定のサブルールを再リンクし、黄色の領域で欠落しているパーツを埋めます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-D4E54541-E0F2-43E6-A82D-FFD22E069321-web.png" title=" "width="500px">}}

1.	**[Window]** → **[Model Hierarchy]** をクリックし、建物モデルを選択します。

2.	**[Model Hierarchy]** ツールバーの **[Inspect Model]** をクリックします。**[Inspect Model]** モードに入ると、モデルがわずかに透明になります。

3.	置き換えるシェープ ノード をクリックしてください。前の画像で黄色くハイライト表示されているファサードの右側の垂直部分です。これにより、**[Model Hierarchy]** ウィンドウでシェープが選択されます。

{{< callout >}}

**[Model Hierarchy]** ウィンドウにある一連の可視化ボタンを使用すると、ファサードの各セクションを簡単に視覚化・分離できます。モデル階層ツリーのさまざまな要素を選択すると、**[CGA Editor]** ウィンドウがそれぞれの構成を支えるルールの該当部分をインタラクティブにハイライト表示します。

{{< /callout >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-2BE9117B-E071-4D88-B058-B91501C4499C-web.png" title=" "width="500px">}}
ファサードのこの垂直セクションを選択した状態で、**[Model Hierarchy]** ウィンドウを右クリックし、**[Collapse Others]** を選択して、選択されていないシェープ ツリーの部分を折りたたむことでビューを簡略化します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-C20079B0-DDC7-4118-8C8B-8990F243A110-web.png" title=" "width="300px">}}

4.	親シェープ ノードを選択し、ダブル クリックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-83BD8134-D7DA-423F-A276-2FF95C3177AF-web.png" title=" "width="500px">}}{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-75438D8D-5663-4DCC-AD55-B2F020F80C5D-web.png" title=" "width="500px">}}

**[CGA Editor]** ウィンドウでこのシェープ ノードを作成するファサード テンプレート ルールがハイライト表示されます。選択したルールにより、左、中央、右の 3 つのファサード パーツが作成されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-96F810FE-232E-4850-8EB2-982214EAB0AF-web.png" title=" "width="500px">}}

5.	右側のファサード ルールを左のファサード ルールに置き換えます。この場合、Facade__1_3_3 を Facade__1_3_1 に置き換えます。

オリジナル：
```
Facade__1_3 -->
	split(x, noAdjust) { 2.68: Facade__1_3_1 | ~10.62: Facade__1_3_2 | 2.66: Facade__1_3_3 }Facade__1_3 -->
```
置き換え後：
```
Facade__1_3 -->
	split(x, noAdjust) { 2.68: Facade__1_3_1 | ~10.62:
Facade__1_3_2 | 2.66: Facade__1_3_1 }	split(x, noAdjust) { 2.68: 
```

ファサードの右側は、左側と同じルールを使用するようになりました。現在使用されていないルール Facade__1_3_3 は、不要になったため、削除できます。<br><br>
再リンクする前:
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-77C77978-F0FE-4C91-8A22-12A4D007EDFA-web.png" title=" "width="500px">}}

再リンク後:
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-F4CA9DBA-E082-46F0-A6E6-8754B81F8630-web.png" title=" "width="500px">}}

{{< callout >}}

変更を確認するには、シーンを更新するか、モデルを再生成する必要がある場合があります。

{{< /callout >}}
次に、入り口近くの黄色の部分についても同じことを行い、このチュートリアル セクションの冒頭の画像に示すように、左端のタイルを入り口の右側のタイルに置き換えます。その結果、上層階の右側に短い窓が表示され、1階の左側に日よけのないアーチ型の窓が表示されます。<br><br>
最終モデルは、再度生成した後に表示されます。<br>{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-DD3B4B23-6B8B-4670-8D7E-5116A6D5CD58-web.png" title=" "width="500px">}}

このチュートリアル プロジェクト フォルダーで目的の結果を表示するには、シーン フォルダー内の FacadeWizard_4_Advanced.cej ファイルと rules フォルダー内の MassModel_Advanced_tutorial_part_2.cga を開きます。なお、このルールは参照用として gen_AdvancedFacade_tutorial_part_2.cga ルールをインポートしています。

## Part 5: LOD とアセットの挿入
ここまでで、**[Facade Wizard]** ウィンドウでのファサード テンプレートの基本的な作成について説明しました。次に、CGA と **[Model Hierarchy]** ウィンドウを使用して、デフォルトの **[Facade Wizard]** ルールの品質を向上させる方法を説明します。<br>

ファサード ウィザード チュートリアルの最後の部分では、次の 2 つのトピックについて説明します。<br>
•	詳細レベル (LOD)<br>
•	ファサード テンプレートへのアセットの挿入

### 詳細レベル
3D 都市の作成は非常に大きなデータセットを生成する可能性があり、多くの場合、リソースの慎重な管理が必要になるため、上級ユーザーは、同じ建物に異なるモデルを作成することを選択する場合があります。<br><br>
たとえば、建物がカメラの真正面にある場合は、すべての詳細が表示される必要がありますが、カメラから遠く離れている (または見えない) 建物は、詳細をできるだけ少なくする必要がありますが、基本的な形で認識できる必要があります。同じオブジェクトの異なるモデルを作成し、カメラまでの距離に応じてそれらを使用するプロセスは、コンピューター グラフィックスの分野では、詳細レベル (LOD) の作成として広く知られています。<br><br>
**Facade Wizard** によって作成されたルール ファイルは、デフォルトの LOD システムが既に実装されていることが示されています。CGA ファイルの先頭 (**[CGA Editor]** ウィンドウで確認可能) には、デフォルト値の説明が記載されています。

{{< callout >}}

CityEngine は異なる LOD を作成できますが、カメラ近接性に基づくモデルを直接切り替えるためのシステムが実装されていません。

{{< /callout >}}
```
attr LOD = 2
# LOD 0 generates the original texture
# LOD 1 generates flat splits
# LOD 2 generates splits with depth as defined in Facade WizardFacade__1_3_1 | ~10.62: Facade__1_3_2 | 2.66: Facade__1_3_3 }
```
次の図は、このチュートリアルの前の部分で作成したルールに基づいて示されています。3 つの定義済み LOD には、すべての適用を示しています。LOD 1 と LOD 2 の違いは小さいですが、LOD 1 は分割された平面のみを生成し、すべてのZ Adjust 編集を無視するのに対し、LOD 2 は Z Adjust 編集を組み込んだテクスチャ付き立方体オブジェクトでボリューム表現を生成します。<br>
LOD 3 を作成するには、以下に示すように、必要な詳細を追加するためにいくつかの追加アセットを挿入する必要があります。<br>{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-EA0C96DA-5F1D-40C6-B072-ACBB511A4005-web.png" title=" "width="500px">}}
これらの LOD は非常によく似ていますが、ズームインすると、細部の違いは明らかです。これは、モデルがどのように体験されるかに基づいて考慮することが重要です。次の例は、これを示しています。

### Low LOD (0)
2D ファサード表現と画像スケーリングにより、シンプルな表現を提供{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-8EDB0631-5525-49B5-B420-AD78F302247E-web.png" title=" "width="500px">}}
### Med – Low LOD (1) 
分割された 2D ファサード表現を提供{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-5D6626F1-6DB8-4145-A3EC-92B635466A21-web.png" title=" "width="500px">}}
### Med LOD (2)
奥行き感を与えるために、一般的なファサード構成要素にアクセントを表現{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-B6BF4710-DEBE-4EF8-BA78-E25CF14289D4-web.png" title=" "width="500px">}}
### High LOD (3)
奥行き感と建築様式を表現するための、特定のファサード構成要素のディテール化{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-13408EC1-49F7-4F61-AC77-A5A17446FA72-web.png" title=" "width="500px">}}

{{< callout >}}

**ファサード ウィザード** ルール テンプレートを他の CGA ルールにインポートする場合 (たとえば、チュートリアルの最後の部分の MassModel.cga ファイルで行うように)、プライマリ CGA ファイル (> attr LOD = 2) で LOD 属性も初期化する必要があります。

{{< /callout >}}
LOD 3 を作成するためには、モデル階層でのシェープのハイライト表示、CGA におけるコードのハイライト表示、カスタム作成されたアセットの挿入を組み合わせることが目的です。

### アセットの編集
まず、MassModel.cga ファイルを編集します。
1.	LOD 属性を追加し、値を 3 に設定します。
```
attr LOD = 3
attr buildingHeight = 25

import gen_Facade_AdvancedFacade:"gen_Facade_AdvancedFacade.cga"
Lot-->
	extrude(buildingHeight) 
   comp(f) { side : gen_Facade_AdvancedFacade.Facade }
```
ファサードの装飾品を調べた後、次のアセットを導入できます。<br>
•	tympanon.obj<br>
•	triangularPediment.obj<br>
•	squarePediment.obj<br>
•	entryArc.obj<br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-2B2F461C-A3A4-425F-BEE6-0DE302252DA4-web.png" title=" "width="500px">}}

2.	三角形のペディメント アセットから始めて、**[CGA Editor]** ウィンドウで gen_Facade_AdvancedFacade.cga ルールを開きます。

3.	下部に三角形のペディメント アセットの新しいルールを追加します。
```
insertTriangularPedimentAsset --> 
	case LOD ==3 : Shape
        t(0, 0, '1)
        s('1, '1, 0.25) 
        i("triangularPediment.obj") 
        projectUV(0) Asset
	else : Shape
```
LOD 3 の場合は、obj アセットをロードします。t() と s() は、アセットを正しく配置してスケーリングします。projectUV() は、アセット上のファサードテクスチャをオーバーレイします。<br>

4.	他の 3 つのアセットにも同様のルールを追加します。
```
insertSquarePedimentAsset --> 
	case LOD ==3 : 
		Shape
		t(0, 0, '1) s('1, '1, 0.25) i("squarePediment.obj") 
		projectUV(0) Asset
	else : Shape		

insertArcEntryAsset --> 
	case LOD ==3 : 
		t(0, 0, -0.35) s('1, '1, 0.5) i("entryArc.obj")
		projectUV(0) Asset
	else : Shape

addTympanonAsset --> 
	case LOD ==3 : 
		t(0, 0, '1) i("tympanon.obj") 
		projectUV(0) Asset
	else : Shape
```
{{< callout >}}

entryArc.obj アセットと tympanon.obj アセットは既存のシェープのジオメトリーを置き換え、triangularPediment.obj アセットと squarePediment.obj アセットは既存のシェープの上に配置されます。ルールの主なコードの違いは、ルールの最初のシェープです。

{{< /callout >}}

### アセットの挿入
これで、次の画像が示すように、新しいルールにリンクし、アセットを挿入できる正しいターミナル シェープを見つけます。
1.	建物を選択し、**[Inspect Model]** モードに移動します。
2.	アセットを挿入するシェープを選択します。
3.	**[Model Hierarchy]** ウィンドウで、選択したシェープをダブルクリックします。<br>**[CGA Editor]** ウィンドウでこのシェープ ノードを作成するファサード テンプレート ルールがハイライト表示されます。
```
Facade__1_3_1_2_2_2 -->
	case LOD <= 1:
		setupProjection(0, scope.xy, '8.0953, '19.2869, '-0.1945, '-11.3296)
		projectUV(0) 
	else:
		setupProjection(0, scope.xy, '8.0953, '19.2869, '-0.1945, '-11.3296)
		t(0, 0, -0.2) 
		s('1, '1, 0.2) 
		i("builtin:cube") 
		projectUV(0) insertTriangularPedimentAsset
```
アセット挿入前のファサードは次のように表示されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-9A144F47-039E-42BB-B724-B2DC374CF2D9-web.png" title=" "width="500px">}}

4.	2 番目のケースでは、insertTriangularPedimentAsset ルールを追加して、アセットの挿入をトリガーします。<br>
アセットの挿入後、ファサードは次のように表示されます。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-CF79CC2D-9AA1-4DDC-87C7-27658E6C0135-web.png" title=" "width="500px">}}
5.	このアセットをファサードの他の位置に挿入する手順を繰り返し、他のアセットについても同様に挿入して LOD 3 を作成してください。

### 屋根要素の削除
最後のステップは、屋根の外側の要素を削除することです。
1.	**[Inspect Model]** モードを使用してルールを検索し、外側の分割パーツを NIL に置き換えます。
```
Facade__1_5 -->
	split(x, noAdjust) { 2.68: NIL | ~10.62: Facade__1_5_2 | 2.66: NIL }
```
2.	未使用の Facade__1_5_1 ルールと Facade__1_5_3 ルールを削除します。<br><br>

必要なルールをすべてリンクしたら、inspector で LOD 属性を更新し、**Facade Wizard** を使用して作成したすべての異なる LOD を試します。LOD 3 の場合、生成されたファサードは次のようになります。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-A9BF882B-81F0-4816-A1A5-8DF6ABE5C4E7-web.png" title=" "width="500px">}}

この例では、ポリゴン数がカウントされます。(ファサードのみ)<br>
•	LOD 0 = 4<br>
•	LOD 1 = 1288<br>
•	LOD 2 = 6616<br>
•	LOD 3 = 9654<br><br>
このチュートリアル プロジェクト フォルダーで提供される目的の結果を表示するには、scene フォルダー内の FacadeWizard_5_Advanced.cej ファイルを開き、rules フォルダー内の MassModel_Advanced_tutorial_part_3.cga を開きます。このルールは、参照用に gen_AdvancedFacade_tutorial_part_3.cga ルールをインポートしています。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13b-facade-wizard-advanced-facade-creation/GUID-3A4F6ACB-15A7-45AF-9EF9-916971FDAEEF-web.png" title=" "width="500px">}}<br>
これで、ささまざまな 3D 建物テンプレートに割り当てたり、詳細度を変更したり、動的にスケーリングしたりできるファサード ルールが作成されました。<br><br>
2D ファサードを操作する場合は、[[Crop Image]](https://doc.arcgis.com/en/cityengine/latest/help/shape-crop-image.htm) ツールの画像のトリミングとサイズ変更の機能も検討してみてください。




