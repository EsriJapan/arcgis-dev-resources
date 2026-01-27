+++
title = "チュートリアル 13A : ファサード ウィザード - 基本的なファサードの作成"
description = "基本的なファサードを作成し、単一分割と反復分割を含むファサード ルール テンプレートを学習します。"
Weight = 13
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false 
+++


## チュートリアル データ {#チュートリアルデータ .TOC-Heading}

ArcGIS CityEngineのチュートリアルにアクセスするには、**[Help] メニュー → [Download Tutorials and Examples…]**  を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
**ファサード ウィザード**を使用すると、複雑な CGA ファサード ルール テンプレートを作成できます。このツールでは CGA コードを自分で記述する必要はありません。代わりに、コードは、CityEngine によってバックグラウンドで自動的に生成されます。このウィザードを使用すると、複雑な構造を迅速かつ効率的に生成できます。このツールを使用すると、任意のファサード ジオメトリーに適応できる CGA ルールを作成できます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-8F7009F7-C43F-47A1-91B5-DA4607AA4E23-web.png" title=" "width="500px">}}

上の画像は、ファサードの例とルール ファイルを異なるサイズの建物のファサードに割り当てた後の結果のモデルです。<br>
ファサードのサイズに応じて窓の数が自動的に調整される点にご注目ください。<br>
**ファサード ウィザード**を使えば、再利用可能なファサード テンプレートを大量に作成することができ、今後のプロジェクトにも役立つ可能性があります。<br><br>
ファサード ウィザード チュートリアルは、[「チュートリアル 13a: ファサード ウィザード - 基本的なファサード作成」](../tutorial-13a-facade-wizard-basic-facade-creation/)と[「チュートリアル 13b: ファサード ウィザード - 高度なファサード作成」](../tutorial-13b-facade-wizard-advanced-facade-creation/)の 2 つのチュートリアルに分かれています。このチュートリアルでは、画像ファイルを**ファサード ウィザード**に読み込むことで、基本的なファサードを作成し、単一分割と反復分割を含むファサード ルール テンプレートを作成します。

|演習|
|:--|
|・[Part 1: ウィザードを使用し開始](#part-1-ウィザードを使用し開始)|
|・[Part 2: 分割の理解](#part-2-分割の理解)|

## Part 1: ウィザードを使用し開始

1.  [[Navigator]](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm) ウィンドウで Tutorial_13_Facade_Wizard__2025_0 チュートリアル フォルダーを展開します。
2.  [scenes] フォルダー内の FacadeWizard_1_SNB.cej ファイルをダブルクリックして、シーンを [[Viewport]](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm) ウィンドウで開いてください。<br><br>
開始シーンには、テクスチャが適用された OBJ モデルと、その隣にテクスチャのない縦長の 2D 長方形が表示されます。このビューは、開始位置としてブックマークされています。ビューを移動した場合は、[bookmarks] メニューのこのエントリをクリックするか、テンキーの 0 キー を押すことで元のビューに戻ることができます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-496B6E12-48AE-4CBA-8433-9E42E00F9B94-web.png" title=" "width="500px"  >}}
3.  **[Window] メニュー** → **[Facade Wizard]** をクリックして、**[Facade Wizard]** ウィンドウを開きます。<br><br>
**ファサード ウィザード**は、プロシージャル テクスチャーリングのための対話的な ツールであり、画像を繰り返し可能なファサード コンポーネントに解析し、それから様々な詳細レベルを CGA ルールとして定義することができます。そのルールは、建物のファサードを表す 2D シェープに割り当てることで、スケーラブルな 3D テクスチャーになります。<br><br>
このツールを使用して、既存の条件を正確に解釈したり、建築の細部を補完するモデルを 3D ファサードに統合したり、新しい建物の外壁のインスピレーションとしてカスタム テクスチャーを適用したりできます。

4. **[Facade Wizard]** ウィンドウで、**[New Facade from Image]** ツールをクリックし、チュートリアル アセット フォルダーに移動します。<br>SNB_ShortFacade.jpg ファイルを開きます。

5.	領域の幅によって、ファサードのスケーリングが決まります。既存の建物のファサードの窓とドアの分割を一致させるには、片側の幅を測定し、その測定値を領域の幅として使用します。スイス国立銀行の短いファサードには、26 メートルを入力します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-1524F181-664F-452D-A706-4E0F4F5167BD-web.png" title=" "width="400px"  >}}

6.	**[OK]** をクリックします。

7.	次に、**[Facade Wizard]** で右クリックして、領域の高さを 19.4 メートルに設定します。

{{< callout >}}

**領域幅を設定**では、ファサードの全幅を入力して、分割寸法が幾何学的に意味をなすようにすることができます。この値は後でリセットできません。

{{< /callout >}}

8.  この段階では、CityEngine のレイアウトを調整して、**[Facade Wizard]** をメイン ビューにすると便利です。設定手順は、以下の通りです。

    a.  **[Facade Wizard]** ウィンドウをクリックしてドラッグし、ウィンドウはめ込みガイドが表示されるまでドラッグします。

    b.  ウィンドウが任意の位置にスナップしたら、マウス ボタンを放します。これにより、**[Viewport]** ウィンドウと **[Facade Wizard]** ウィンドウの分割画面が作成されます。

    c.  必要に応じて、サイズを変更します。
        {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-F4BAF0D1-40C0-4789-9EB2-868083C989AD-web.png" title=" "width="500px">}}


## Part 2: 分割の理解

**ファサード ウィザード**の分割ツールは、選択したファサードの写真 / イメージを、領域内の指定したスコープ軸 (x、y) に沿って細分化します。各分割は、最終的に、ファサード シェープを細分化するための CGA ルールの [split operation](https://doc.arcgis.com/en/cityengine/latest/cga/cga-split.htm) として表されます。<br><br>
これらのシェープは、必要な詳細レベル (LOD) に応じて、プロシージャルに生成された窓、ドア、コーニス、装飾要素になります。この方法で分割すると、適切なテクスチャーが細分化されたシェープに整列し、CGA ルールが異なるサイズの建物のファサードに割り当てられたときに、比例したスケーリングが可能になります。

### 1階の分割

このセクションでは、**ファサード ウィザード**の分割ツールをアクティブにすると、どの軸 / 方向に沿ってカットできるかが決まります。ファサード イメージに示すように、どの細分化された領域が繰り返されるかを考慮しながら、ファサード コンポーネントのエッジに沿って分割を設定するのが最適です。必要な分割のタイプを選択した後、ツール インターフェイスの画像にカーソルを合わせると、分割が適用される可能性のある場所を示す赤と青のライン インジケーターが表示されます。**[Viewport]** ウィンドウと同じタンブル、回転、パン [ナビゲーション](https://doc.arcgis.com/en/cityengine/latest/help/help-3d-navigation.htm)を使用します。

1.  **[Y Split]** ツールが選択されていることを確認し、水平分割 1 と 2 を作成して、1 階、上層階、および屋根として主要な建物のマスをブロックします。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-B2194E60-E428-4012-8AF2-22AD361F1C7C-web.png" title=" "width="500px">}}
2. 分割 1 と分割 2 の間の領域を選択し、右クリックして領域の幅を編集します。デフォルトの 30 を 26.0 メートルに更新します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-EE44043C-5BF6-4AF1-9BA2-AE559CD2DEFB-web.png" title=" "width="500px">}}
3. 次に、1階を分割して、最も左の2つの窓、入り口、および右側の2つの窓を含めます。

    a. **[X Split]** ツールをクリックします。

    b. **[X Split]** の青い線で、1 階の分割エリアにカーソルを合わせ、1 階の左側をクリックして分割 3 と 4 を作成し、2 つの (繰り返しの) 左側の窓を分離します。

    c.  垂直分割の作成を続行し、エントリーの右側をクリックして分割 5 を作成します。

    d. 最後に、右端の 1 階をクリックして分割 6 を作成し、右側の 2 つの (繰り返しの) 窓を定義します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-E89AD516-EEA1-4CC1-9B7B-5338A4D9EB88-web.png" title=" "width="500px">}}


{{< callout >}}

正しい分割タイプをより早く選択するには、左右の矢印キーを使用して分割タイプを切り替えることもできます。

{{< /callout >}}

{{< callout >}}

分割を設定したら、分割線に戻り、クリックしてドラッグし、分割位置を対話的に編集できます。

{{< /callout >}}

4. **[X Repeat]** ツールをクリックして、分割タイプを繰り返し分割に変更します。

    a. 赤い繰り返しの分割 7 と 8 を作成します。

    b. 分割 3 を表す線は、新しい繰り返し分割を表すために赤に変わりました。

5. 左側の 1 階の窓の分割エリアで、光が当たらない部分を右クリックし、**[Select region]** を選択します。このステップでは、繰り返し分割のテクスチャーリングに使用するパーツを選択しました。この場合、背景の光が消えている領域を繰り返すことになります。右側の (繰り返しの) 窓についても、同じ手順を繰り返してください。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-B55F70A3-6FAC-4347-AD4A-D87FFDA6DD93-web.png" title=" "width="500px">}}


### 上層階の分割

1.  上層階の場合、分割 9 と 10 を作成するには、**[X Split]** ツールをクリックし、Shift を押して、1 階レベルに作成された分割 3 と 6 にスナップします。

2. **[Y Repeat]** ツールを有効にし、カーソルを合わせて分割の位置を設定し、上層階エリア内で1回クリックします。

3.  次に、右クリックして上部の領域を選択し、残りの 2 つの水平方向の繰り返し分割 11 と 12 が設定されていることを確認します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-3387D14A-68EA-4398-A3D4-15A5B14C496C-web.png" title=" "width="500px">}}

4. **[X Repeat]** ツールをクリックし、1 回クリックして 9 つの垂直方向の繰り返し分割を作成し、10 個の窓 セクションを 3 行作成します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-9F7A97C0-92B5-4375-A0E7-84474FA3F8B0-web.png" title=" "width="500px">}}

5.	上部の暗い窓の 1 つを選択し、**[Select Region]** を選択して繰り返し領域を設定します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-6233596A-693E-47CB-84F7-01FA7D9B50B7-web.png" title=" "width="500px">}}

6.	**[X Split]** ツールと **[Y Split]** ツールを使用して、上層の窓ガラスのガラス部分を分離します。{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-544E81A7-8862-49FB-9904-B55C83D10B6E-web.png" title=" "width="500px">}}

7.	屋根で、**[X Split]** ツールを使用して、屋根棚の装飾の両側に垂直方向の分割を作成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-86C30C0A-5BE6-4D53-A153-8290A7DD263A-web.png" title=" "width="500px">}}

8.  現在の平坦なサーフェスにボリュームのある外観を追加するには、分割タイルごとの [Z Adjust] 値を設定してオフセットを定義できます。孤立したウィンドウ領域をクリックして、奥にスライドして戻すと、インデントされた窓棚が作成されます。**[Facade Wizard]** ウィンドウの左上隅にある **[Z Adjust]** 値が変化します。これは、建物の必要な部分だけ行います。

{{< callout >}}

 [[CityEngine 3D View] ナビゲーション](https://doc.arcgis.com/en/cityengine/latest/help/help-3d-navigation.htm)は、**ファサード ウィザード**でも同じように機能します。ファサードの詳細を描きながら、インタラクティブにズームおよびピボットするのに役立ちます。3D ナビゲーションは、[Z Adjust] 機能を使用する場合に特に便利です。ビューをタンブルまたは回転するには、Alt キーを押しながらアクティブな **[Facade Wizard]** ウィンドウをクリックしてドラッグし、[Z Adjust] 編集を横からの角度から表示します。

{{< /callout >}}
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-A99E1222-89A8-4CA0-9E34-2E3DB9431CC1-web.png" title=" "width="500px">}}
9.  **[Save Rules and Textures for Current Facade]** ツールをクリックし、gen_Facade_SNB.cga という名前を付けて、ファサードのルール ファイルを生成します。**[Facade Wizard]** ウィンドウは、閉じないでください。

{{< callout >}}

分割編集は、ファサード編集のアクティブな作業セッションにのみ保存できます。保存した CGA ファイルをインポートし、編集内容を保存してウィンドウを閉じた後は、**ファサード ウィザード**で視覚的に編集することはできません。

{{< /callout >}}

10.	[rules] フォルダーで新しいファサード ルールを見つけます。

11.	CGA ルールをクリックして **[Viewport]** ウィンドウのシェープにドラッグし、割り当てます。シェープを選択し、**[Generate Models]** ツール (Ctrl+G) をクリックして、ボリューム ファサードを表示します。

12.	**[Viewport]** ウィンドウの上部にある **[Visibility Settings]** ツールをクリックし、**[Shapes]** のチェックを外して元のシェープを非表示にします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-0E0B225D-619B-41DE-9EAD-658D76CDC1E8-web.png" title=" "width="250px">}}

{{< callout >}}

ボリューム ファサードを正しく表示するには、**[Visibility Settings]** ツールの **[Shapes]** (F11) のチェックを外してシェープを非表示にします。他のファサードを選択して、これらの手順を繰り返す場合は、再度アクティブにする必要があります。

{{< /callout >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-13a-facade-wizard-basic-facade-creation/GUID-8F7009F7-C43F-47A1-91B5-DA4607AA4E23-web.png" title=" "width="500px">}}

13.	これで、元のモデルに基づいてスケーラブルなファサードが作成されました。それらの類似点と相違点に注目してください。このファサードをより大きなファサード シェープにスケール アップした例を含む完成した結果を確認するには、FacadeWizard_2_SNB.cej シーンを開きます。

[チュートリアル 13B : ファサード ウィザード - 高度なファサードの作成](../tutorial-13b-facade-wizard-advanced-facade-creation/)に進み、ルール テンプレートの作成やファサードへのアセットの挿入など、より高度なファサード作成ワークフローについて学習できます。
