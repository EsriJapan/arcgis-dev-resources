+++
title = "チュートリアル 20 : ローカル編集"
description = "CityEngine でローカル編集を行う方法について学習します。"
Weight = 23
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "鷺谷" 
draft = false 
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。チュートリアルまたはサンプルを選択すると、プロジェクトが自動的にダウンロードされ、ワークスペースに追加されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-50C0146C-7C9E-4C66-A236-3B4C01B2A5C8-web_1.png" title=" " width="500" >}} 

このチュートリアルでは、ArcGIS CityEngine におけるローカル編集の方法を紹介します。ローカル編集を使用すると、個々の窓のサイズを変更したり、1 階部分を調整したり、バルコニーを個別に追加したりすることができます。これらのローカルな変更を CGA コード内で指定する必要はありません。

生成されたモデルがどのように構成されているかを理解することは有益です。これをより深く理解するために、**[[Model Hierarchy](https://doc.arcgis.com/en/cityengine/latest/help/help-model-hierarchy.htm)]** ツールに慣れておくことをおすすめします。このツールを使えば、生成されたモデルのシェープ ツリーを確認することができます。

|演習|
|:--|
|・[Part 1: 個々の窓の編集](#part1-個々の窓の編集)|
|・[Part 2: 地上階の変更](#part2-地上階の変更)|
|・[Part 3: バルコニーの追加](#part3-バルコニーの追加)|

## Part1: 個々の窓の編集
個々の窓を編集するには、以下の手順を完了してください。

1. [[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウで **Tutorial_20_Local_Edits** チュートリアル フォルダーを展開します。
2. scenes フォルダー内の **Simple_Building_LE_01.cej** ファイルをダブルクリックして、シーンを [[Viewport](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] ウィンドウで開きます。
3. rules フォルダー内の **Simple_Building_LE_01.cga** ファイルをダブルクリックして、ルールを [[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)] ウィンドウで開きます。<br>ローカル編集は、ハンドルを持つ属性に対して利用可能です。窓のサイズのローカル編集を有効にするために、ルールの冒頭で窓の寸法に関する属性を作成します。その後、Tile ルールをこれらの属性を使用するように変更し、ユニークな属性にハンドルを追加することで、[Viewport] ウィンドウでインタラクティブに変更できるようにします。
4. Simple_Building_LE_01.cga ルール ファイル内で、窓の幅と高さの属性を追加します。

```
attr window_width = 2
attr window_height = 1.5
```

5. **[CGA Editor]** ウィンドウでこのルール ファイルを確認し、Tile ルールを見つけてください。窓のサイズに関する数値を、先ほど追加した属性に置き換えます。<br>タイル (Tile) とは、四方を壁に囲まれた窓を含む構成要素です。Tile ルールは、指定された幅と高さで窓を作成し、それをタイルの中央に配置します。


```
Tile -->
	split(x){ ~1 : Wall 
			| window_width: split(y){ ~1: Wall | window_height: Window | ~1: Wall }
			| ~1 : Wall }
```

6. 属性にハンドルを追加します。


```
@Handle(shape=Window, axis=x)
attr window_width = 2

@Handle(shape=Window)
attr window_height = 1.5
```

7. Ctrl+S を押して CGA ファイルを保存し、ツールバーの **[Generate Models]** ツール (Ctrl+G) をクリックして建物を再生成します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-8741BCF8-0DAE-45F0-B22C-B97FB7DC7FC1-web_1.png" title=" " width="500" >}} 

8. 青い窓のハンドルの 1 つをドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-2D10216A-69AC-400C-81AB-BFC771448B19-web_1.png" title=" " width="500" >}} 

この操作により、すべての窓のサイズが同じように変更されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-FED17DF6-F859-48F0-8694-CFC9A4845C1A-web_1.png" title=" " width="500" >}} 

ローカル編集を使用すると、ルール内に窓の幅の属性が 1 つしか存在しない場合でも、各窓の幅を個別に変更することが可能です。

9. **[Inspector]** ウィンドウで **Default style** を選択して、属性をリセットします。
10.	ツールバーで  **[Make local edits]** ツールをクリックします。
11.	1 つの窓を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-9A851E11-2764-4484-9CE3-A601B7BDC94A-web_1.png" title=" " width="500" >}} 

**[Viewport]** ウィンドウでオレンジ色にハイライトされている部分は、現在選択されているオブジェクトを示しています。**[Inspector]** ウィンドウで同じくオレンジ色にハイライトされている属性は、現在の選択に対してローカル編集が可能です。**window_width** と **window_height** の属性は、この窓だけに対して個別に設定することができます。

12.	青いハンドルをドラッグして、この窓だけのサイズを変更します。<br>**[Inspector]** ウィンドウでは、**window_width** と **window_height** 属性の横に表示される記号が、現在の選択に対してこれらの属性がローカル編集されたことを示しています。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-DACD5344-1C17-4294-95DE-3D4FA7A0E360-web_1.png" title=" " width="500" >}} 

複数選択を使用すると、同じローカル編集を複数の窓に同時に適用することができます。

13.	Shift を押しながら複数の窓を選択します。<br>Ctrl を押すと逆選択ができ、Ctrl+Shift を押すと選択解除ができます。
14.	選択した窓のサイズは、ハンドルをドラッグするか、**[Inspector]** ウィンドウで値を入力することで変更できます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-D3A4B7BC-4C80-48B8-9406-113339BEAC88-web_1.png" title=" " width="500" >}} 

ドアの上にある窓は、階段があるために小さくなることがよくあります。以前のすべての変更を取り消し、ローカル編集を使ってこの構成を作成することができます。

15.	すべてのローカル編集を元に戻すには、**[Viewport]** ウィンドウまたは **[Inspector]** ウィンドウで右クリックし、**Reset all local edits** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-7B39D30A-3FA3-4DDF-85BE-D8F479F7A12C-web_1.png" title=" " width="500" >}} 

16.	ドアの上にある窓を選択します。
17.	End を押して、ドアの上にある列のすべての窓を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-AE4758F4-2271-4815-B0BD-10FD9EA77BC5-web_1.png" title=" " width="500" >}} 

Home と End を押すことで、利用可能なパターンを前方または後方に繰り返すことができます。パターンは、シェープ ツリーと CGA コードによって作成された階層構造に基づいて自動的に検出されます。この場合、利用可能なオプションは、地上階の上にある窓の列の選択です。

18.	ハンドルをドラッグするか、**[Inspector]** ウィンドウで値を入力して、窓のサイズを小さくします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-E99E4588-A9EE-4D04-82FF-C3316C1203E0-web_1.png" title=" " width="500" >}} 


## Part2: 地上階の変更
地上階は建物の上層階とは異なることがよくあります。例えば、地上階の窓は通常、上層階の窓よりも大きくなっています。このシンプルな建物ルールでは、すべての階に同じ窓のタイルを作成するために、同じ窓のタイル コードを使用しています。しかし、ローカル編集を行うことで、地上階のためのタイル ルールを新たに作成する必要なく、地上階の建物正面の窓をより大きくすることができます。

1.	**Simple_Building_LE_02.cej** シーンを開きます。
2.	**Simple_Building_LE_02.cga** ルール ファイルを開きます。
3.	**Simple_Building_LE_02.cga** ルール ファイルの tile_width 属性にハンドルを追加し、属性のローカル編集をできるようにします。

```
@Handle(shape=Tile, axis=x)
@Range(min=1, max=10, restricted=false)
attr tile_width = rand(2.5,6)
```

4.	CGA ファイルを保存して建物を再生成します。
5.	ツールバーで  **[Local edits]** ツールをクリックします。
6.	地上階の窓を選択し、タイルの幅、窓の幅、および窓の高さを変更します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-1E322F87-F1B7-4DCF-9CA3-AA3B33573632-web_1.png" title=" " width="500" >}} 

これは地上階の 1 つのタイルを変更するだけです。しかし、目標は地上階のすべてのタイルを変更することです。これは、より高いレベルでシェープを選択することで可能になります。

7. PageUp を押して、ローカル編集レベルの1つ上のレベルに移動します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-F9950A65-4C43-4163-B32A-9F91F5AFF730-web_1.png" title=" " width="500" >}} 

現在、地上階のすべての窓が選択され、オレンジ色でハイライトされています。PageUp と PageDown は、それぞれ階層を上のレベル、または下のレベルへ移動します。ローカル編集はシェープ ツリーにリンクされており、編集をシェープ ツリーのより上位のレベルで適用することで、階すべての窓など複数のオブジェクトに対して編集を行うことができます。

8.	地上階の窓を大きくするために、窓の高さを増やします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-92A0A0A1-D4A6-4E31-95D9-E9841AE2B985-web_1.png" title=" " width="500" >}} 

これは、地上階のすべての窓を変更しますが、先ほど変更した最初の窓は除かれます。これは、最初の窓に対する編集がより低いレベルで行われたためです。同じオブジェクトに複数の編集が存在する場合、最も低いレベルで行われた編集が優先されます。

**[Inspector]** ウィンドウでは、**tile_width**、**window_width**、**window_height** 属性の横にある**下向き**矢印 (↓) は、これらの属性が現在の選択レベルよりも低いレベルで編集されていることを示しています。また、**window_width** 属性の横にあるアスタリスク (*) は、現在の選択レベルでも編集されていることを示しています。

地上階のすべての窓を同じにする必要があるため、不一致となっている窓に対して、低いレベルで行われた変更を元に戻す必要があります。

9.	PageDown を押してレベルを下げ、不一致のある窓を低いレベルで選択します。
10.	**[Viewport]** ウィンドウまたは **[Inspector]** ウィンドウで右クリックし、**Reset highlighted local edits** をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-8300551A-2F41-4F29-8E55-AB62DD1A2A9A-web_1.png" title=" " width="500" >}} 

11.	PageUp を押すか、**Local Edits Menu** の **Select higher level** をクリックして、地上階の窓を選択します。
12.	地上階の窓を大きくするために、タイルの幅、窓の幅、窓の高さを増やします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-8FA28367-0BC3-45B4-AD76-7FEBD835C5D9-web_1.png" title=" " width="500" >}} 

現在、すべての窓が同じサイズになっています。これは、下位レベルでのローカル編集が存在しないためです。

{{< callout >}}

タイルの幅を変更した後にオレンジ色のハイライトが消えた場合は、地上階の窓を再選択する必要があります。

{{< /callout >}}


## Part3: バルコニーの追加
建物にジオメトリーやディテールをローカルに追加するオプションを提供することは可能ですが、ジオメトリーが存在しない場合でもユーザーがハンドルにアクセスする方法が必要です。たとえば、選択した窓にバルコニーを追加するためにローカル編集を使用することができます。そのためには、バルコニーに並列ジオメトリーが必要です。この並列ジオメトリーがあることで、バルコニーが存在しない場合でもバルコニーのハンドルにアクセスすることが可能になります。

1.	**Simple_Building_LE_03.cej** シーンを開きます。
2.	**Simple_Building_LE_03.cej** ルール ファイルを開きます。
3.	**Simple_Building_LE_03.cej** ルール ファイルにバルコニーがあるかどうかを判断する属性を追加します。

```
attr hasBalcony = false
```

4.	バルコニーを作成するためのコードを追加します。

```
Tile -->
	split(x){ ~1 : Wall 
			| window_width: split(y){ ~1: Wall | window_height: Window BalconyMass | ~1: Wall }
			| ~1 : Wall }		 

BalconyMass -->
	s('1,0.9,0.9)
	t(0,0,'-0.5)
	Balcony
	
Balcony -->
	case hasBalcony:
		primitiveCylinder(32)
		color(0.8,0.8,0.8)
		split(z) { ~1: NIL
				 | ~1: comp(f) { top: NIL
				 			   | back: NIL
				 			   | bottom: extrude(0.05) Bottom.
				 			   | all= BalconyRailing } }
	else:
		NIL
		
BalconyRailing -->
	comp(f) { side: s(0.05,'1,'1) center(x) extrude(0.05) Bar. }
	s('1,0.05,'1)
	[ t(0,-0.05,0) extrude(vertex.normal, 0.05) Bottom. ]
	[ t(0,0.9,0) extrude(vertex.normal, 0.05) Railing. ]
```

Balcony ルールは、バルコニーのジオメトリーを生成する場合もあれば、何も生成しない(NIL) 場合もあるため、バルコニーが存在しないときでもハンドルにアクセスできるように、ジオメトリーを持つ並列シェープが必要です。その並列シェープが「窓」です。BalconyMass ルールは、バルコニーが挿入されるボリューム空間を作成し、残りのルールがバルコニーのジオメトリーを生成します。

5.	ローカル編集を有効にするために、hasBalcony 属性にトグル ハンドルを追加します。

```
@Handle(shape=Balcony, type=toggle, occlusion=false)
attr hasBalcony = false
```

6.	CGA ファイルを保存します。
7.	ツールバーで  **[Local edits]** ツールをクリックし、1 つの窓を選択します。
8.	窓の上にカーソルを合わせると、影付きのボリュームと新しいタイプのハンドル (四角いスイッチアイコンとして表示) が表示されます。
これは、Balcony ルールに付属しているトグル ハンドルであり、クリックすることで hasBalcony 属性を true と false に切り替えて、バルコニーの有無を制御することができます。
9.	スイッチ アイコンをクリックして true に切り替えると、選択した窓にバルコニーが表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-D4309FC2-425C-4E35-AC7C-E14363308AD9-web_1.png" title=" " width="500" >}}

10.	CGA ファイルを保存して建物を再生成します。

通常、バルコニーは建物の上層階にのみあり、玄関の上にある階段の窓には設置されないことが多いです。

11.	上層階の窓を選択し、PageUp を押して、地上階を除いたすべての上層階が選択されるまでレベルを上げます。

12.	トグル ハンドルを使って hasBalcony 属性を true に切り替えることで、すべての上層階の窓にバルコニーを追加してください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-162879E6-6C33-4659-B2EA-76CF74A13516-web_1.png" title=" " width="500" >}}

13.	PageDown を押して、玄関の上にある窓を選択してください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-822405FA-123E-44D4-9194-ACFC98255352-web_1.png" title=" " width="500" >}}

**[Inspector]** ウィンドウで、**hasBalcony** 属性の横に**上向き**矢印 (↑)が表示されています。これは、この属性がより高いレベルでローカル編集されていることを示しています。この変更は上書き可能です。なぜなら、同じオブジェクトに対して複数の編集がある場合、より低いレベルで行われた編集が優先されるためです。

14.	End を押して、玄関の上にあるすべての窓を選択します。

{{< callout >}}

Home と End は、パターンを選択するために使用できます。

{{< /callout >}}

15.	玄関の上にある窓からバルコニーを削除するには、hasBalcony 属性を false に設定してください。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-20-local-edits/GUID-500D75E0-90AC-4E90-8279-98ED87DB6DA5-web_1.png" title=" " width="500" >}}

{{< callout >}}

ローカル編集の制限のひとつに、シェープ ツリーの構造を変更すると、すでに適用されたローカル編集が失われる可能性があるという点があります。つまり、ローカル編集を適用した後にコードを変更すると、予期しない結果が生じる可能性があります。そのため、ローカル編集はコードが完成した後に行うことが推奨されます。

{{< /callout >}}

このチュートリアルでは、ローカル編集を使用して以下のことを行う方法を学びました。
* 個別の窓サイズの変更
* 地上階の変更
* CGA ルールファイルを変更せずにバルコニーを個別に追加


CityEngine の学習をさらに進めるには、その他の[クラシック チュートリアル](https://doc.esrij.com/cityengine/tutorials/classic/)をご覧ください。
