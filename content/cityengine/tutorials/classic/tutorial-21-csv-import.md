+++
title = "チュートリアル 21: CSV のインポート"
description = "CSV ファイルからデータをインポートし、配列を使用して CGA コードで使用する方法を学習します。"
weight = 24
alwaysopen = false
publishDate = 2022-03-23T00:00:00+09:00
draft = false
author = "原田"
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。


## 概要 
このチュートリアルでは、CSV ファイルからデータをインポートし、配列を使用して [CGA](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-modeling-overview.htm) コードで使用する方法を学習します。 
CSV ファイルをインポートするには、建物をフロア毎に分割し、各フロアにスペース使用状況を割り当てることができるルールを使用します。CSV ファイルには、使用可能なスペースの使用状況とその色、および床の高さのリストが含まれています。CGA コードでは、CSV ファイルのデータが配列に読み込まれ、[Inspector](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm) でルールと対応する UI を駆動するために使用されます。 


|演習|
|:--|
|・[Part 1: CSV ファイルからデータをインポート](#part-1-csv-ファイルからデータをインポート)|
|・[Part 2: ダッシュボードの作成](#part-2-ダッシュボードの作成)|




## Part 1: CSV ファイルからデータをインポート 
例のセットアップ 
1. **Assign_Floor_Usages_01.cej** シーンを開きます。 
1. Lot スタート ルールを使用して、**Assign_Floor_Usages_01.cga** ルールファイルを 2D の建物のフットプリント (Footprints) に割り当てます。 
1. MassModel スタート ルールを使用して、**Assign_Floor_Usages_01.cga** ルール ファイルを 3D マスモデル (Mass Models) に割り当てます。 
1. 両方のシェープを選択します。 
1. [Inspector] で展開ボタン をクリックして、最初は空の状態になっている floor_usages 配列属性を展開します。 
1. 追加ボタン をクリックして、エレメントを配列に追加します。このボタンを 4 回クリックして、デフォルトの使用状況である ResidentialSingle-Family で 4 つのフロアを作成します。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-21-CSV-import/GUID-1058BA22-E09E-4B99-9441-DE19A93F39C7-web.png" title=" " width="500" >}}

行を削除する必要がある場合は、各エレメントの横にある灰色の配列インデックスを右クリックして、**Delete Row** をクリックします。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-21-CSV-import/GUID-C4007EFB-4985-4F20-838F-A68F355FB783-web.png" title=" " width="500" >}}

このルールは、2D の建物フットプリント (左) と 3D のマスモデル (右) に適用されます。この初期状態では、ルールにはデフォルトの使用状況、色、および各フロアに割り当てられたフロアの高さがあります。 



### CSV ファイルからデータをインポート 
1. **Assign_Floor_Usages_02.cej** シーンを開きます。 
1. **Assign_Floor_Usages_02.cga** ルール ファイルを開きます。 
1. 「/assets/usages.csv」CSV ファイル内のスペース使用状況データを確認します。 
最初の列にはスペースの使用状況がリストされ、次の列には各使用状況の色と床の高さが含まれています。このファイルはコンマと改行区切り文字で構成されていますが、コンマ、セミコロン、タブ、スペースなど、多くの一般的な区切り文字も有効です。Excel ファイルは以下の様になっています。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-21-CSV-import/GUID-15A8B152-780A-42E2-B04E-A1A4C9043BA5-web.png" title=" " width="500" >}}

4. CSV ファイルからデータを読み取るには、Constants and Function セクションにある default_floor_height の後に次のコードを追加します。 

```
// read usages data from csv file 
const usages_filename = "usages.csv" 
const usages_data = readStringTable(usages_filename) 
const numUsages = nRows(usages_data) 
```
readStringTable 関数は、CSV ファイルデータを読み取り、文字列配列を返し、usages_data に格納します。配列の次元は 15 x 3 で、これはデータファイルの行と列の数に対応します。nRows 関数は、配列の行数を返します。 

5. usage 属性を再定義し、データ配列の最初の列に設定します。括弧は、配列要素のサブセットにアクセスするために使用されます。括弧内では、行が最初にリストされ、列が後にリストされます。0：numUsages-1は、0 から 14 までのすべての行を返します。コンマの後の 0 は、最初の列を示します。配列インデックスは 0 から始まります。 

```
@Hidden 
attr usages = usages_data[0:numUsages-1,0] 
```

6. Inspector で floor_usages 配列の各エレメントをクリックし、ドロップダウン メニューから使用状況を選択して、フロアごとの使用状況を変更します。リストの値は、CSV ファイルの usage 配列から取得されます。この関係は、属性定義の上の @Enum アノテーションで定義されています。 

```
@Enum(valuesAttr=usages) 
attr floor_usages = stringArray()  
```
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-21-CSV-import/GUID-294AB412-4D78-4806-8D37-24F30C90D2C7-web.png" title=" " width="500" >}}


7. 他 2 つの列のデータを格納する定数を定義します。これらの行は、usages 定義の下に追加できます。floatArray 関数は、文字列配列を float 配列に変換します。 

```
const colors = usages_data[0:numUsages-1,1] 
const floor_heights = floatArray(usages_data[0:numUsages-1,2])  
```
8. 特定の使用状況の色または床の高さを取得する関数を記述します。

```
getUsageColor(usage) = _getUsageColorFromIndex(findFirst(usages, usage)) 
_getUsageColorFromIndex(usageInd) = 
	case usageInd==-1:           default_color 
	else:                        colors[usageInd] 

getFloorHeight(usage) = _getFloorHeightFromIndex(findFirst(usages, usage)) 
_getFloorHeightFromIndex(usageInd) = 
	case usageInd==-1:           default_floor_height 
	else:                        floor_heights[usageInd]  
```
9. データを使用して、使用状況ごとに適切な床の高さを取得します。CreateFloor、FloorMass、および SplitMassModel ルールで、default_floor_height を次のコードに置き換えます。 

```
getFloorHeight(floor_usages[floorInd])  
```

10. データを使用して、用途に応じて各フロアに色を付けます。 FloorMass ルールで、2 つの default_color の部分を次のコードに置き換えます。 

```
getUsageColor(floor_usages[floorInd]) 
```

11. Ctrl + S キーを押して、CGA ルール ファイルを保存します。 
12. シェープを選択します。 
13. ツールバーにある **[Generate]** をクリックします。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-21-CSV-import/2022-03-14_15h32_07.png" title=" " width="500" >}}


ルールがインポートされた CSV ファイルのデータを使用して、フロアごとに指定された使用状況に従い、各フロアの高さと色を定めるようになりました。 


## Part 2: ダッシュボードの作成 
1. レポートを修正して、対応する色で使用状況を報告するようにします。FloorMass ルールで、 
usages[0] を次のコードに置き換えます。 

```
floor_usages[floorInd] 
```

2. CGA ルールファイルを保存して、モデルを再度生成します。 
3. ダッシュボード カードを作成して、使用ごとの総床面積 (GFA) を視覚化します。 

	a) **[Window]** メニューから **[Dashboard]** をクリックします。 

	b) **[Add a Chart]**  をクリックして、**[Bar Chart]** を選択します。 

	c) **[Icon & Title]** に「GFA by Usage」と入力します。 

	d) **[Report]** で **[GFA.*.]** をクリックして、**Unit** に「sqm」と入力します。 

	e) 最後に **[Add Card]** をクリックします。 


{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-21-CSV-import/2022-03-14_15h32_18.png" title=" " width="500" >}}



