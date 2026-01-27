+++
title = "チュートリアル 11: レポーティング"
description = "既存の CGA にどのようにレポーティングの動作を組み込み、その結果のレポートがどのように生成されるのかを学習します。"
weight = 11
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。


## 概要
レポート機能は、CityEngine をジオメトリの生成以外にも拡張します。この機能は、モデルのパラメーターをルールに基づいて計算し、蓄積することができます。つまり、都市マスター プランを視覚化するだけでなく、Microsoft Excel や同様の表計算アプリで、さらに処理するための .csv ファイルなどの数値レポートを生成することで、都市マスター プランを強化することができます。3D モデルと同様に、[CGA](https://doc.arcgis.com/en/cityengine/latest/cga/cityengine-cga-introduction.htm) シェープ グラマーでレポートを生成できます。レポート操作は、ジオメトリを生成する対応するルールに含めることも、ジオメトリを作成せずにレポートのみを作成するルールを作成することもできます。

レポート操作により、建築設計またはマスター プラン プロパティのレポート値を作成することができます。これにより、レポートは完全に汎用的かつカスタマイズが可能になります。例えば、延床面積 (GFA) 、容積率 (FAR) 、戸数、土地用途構成などの値を含むレポートを作成できます。また、都市設計を変更することで、つまりモデルを再生成することで、レポートは自動的に更新されます。 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-73BEE505-7BB3-4E32-801C-E493B3C4CF9F-web.png" title=" " width="500px" >}}

このチュートリアルでは、マスター プランを最初から作成するシナリオを例に説明します。その後、レポート機能を使って既存の地理空間データを分析する方法を学びます。

|演習|
|:--|
|・[Part 1: 面積レポートの操作](#part-1-面積レポートの操作)|
|・[Part 2: 延床面積 (GFA) と容積率 (FAR) の追加のレポートを調べる](#part-2-延床面積-gfa-と容積率-far-の追加のレポートを調べる)|
|・[Part 3: 用途タイプによるレポート](#part-3-用途タイプによるレポート)|
|・[Part 4: 土地用途マッピングレイヤーでレポートを管理](#part-4-土地用途マッピングレイヤーでレポートを管理)|
|・[Part 5: レポート データのエクスポート](#part-5-レポート-データのエクスポート)|


## Part 1: 面積レポートの操作
このチュートリアルのセクションでは、CGA ファイルにレポート アクションを埋め込む方法と、結果のレポートがどのように生成されるか説明します。

### 面積レポート シーンを開く
面積レポート シーンを開くには、以下の手順を行います。

1. [[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウで Tutorial_11_Reporting チュートリアルフォルダーを展開します。
1. [scenes] フォルダー内の reporting_01.cej シーンをダブルクリックして、[[Viewport]( https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] ウィンドウでシーンを開きます。
1. [モデルを再生成するか] プロンプトが表示されたら、**[Yes]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-01A69DBC-2B5F-46E9-9333-E19477ACF3D0-web.png" title=" " width="750" >}}
このシーンには、単純な押し出しルールが適用された形状と、緑地の割合が設定されています。これは、CityEngine の grow street 機能でスパイラル パターンを使用して生成されました。
<br><br>このチュートリアルの残りの部分では、グラフ ネットワークを表示する必要はないので、F10 キーを押して、**[Visibility settings]** の下にある **[Graph Networks]** の可視設定をオフにします。

### Area.Greenspace と Area.BuildUp のレポートを調べる
CGA ルールでのレポートを見るには、以下の手順を行います。

1. [rules] フォルダー内のreporting_01.cgaファイルをダブルクリックして、[[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm)] ウィンドウでルールを開きます。
<br><br>この [case] ステートメントでは、p 関数は確率と現在のシェープ シード値に応じて、真または偽の値を出力します。値が真の場合、形状は緑地として生成され、geometry.area 関数で計算された現在の敷地面積がArea.Greenspace 変数として報告されます。そうでない場合は、建物として生成され、geometry.area 関数が Area.BuildUp 変数として報告されます。
```
@StartRule 
Lot -->  
	case p(greenspacePercentage/100): 
		report("Area.Greenspace",geometry.area) 
		GreenSpace 
	else: 
		report("Area.BuildUp",geometry.area) 
		BuildingLot
```
{{< callout >}}

レポーティング変数の中で区切り文字としてピリオド (.) を使用することにより、レポート出力には個々の変数についての情報とそれらの総和 (Area) の両方が表示されます。 

{{< /callout >}}

2. **[Select]** ツール (Q) をクリックして、いくつかのモデルを選択します。
3. **[Inspector]** ウィンドウで、**[Report]** セクションを展開します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-3F3BD061-ACBC-4C07-8422-854E5C751C58-web.png" title=" " width="750" >}}
**[Report]** セクションには、Area.BuildUp と Area.Greenspace のレポート変数と、自動的に追加された合計 [Area] が表示されます。レポートの列には以下の内容が表示されます。
<br>　・N 列は、各変数のレポート数を表示します。次の % 列は、その数をパーセンテージとして表示します。
<br>　・Sum 列は、各レポート変数のレポートされた値の合計を表示します。同様に、% 列はこれらの結果をパーセンテージとして表示します。
<br>　・次の 3 つの列は、モデルごとの平均値、最小値、最大値に関する追加統計情報を表示します。

{{< callout >}}

ドット文字の前に同じグループ名を共有するレポート変数は、自動的にグループ変数に収集されます。グループ変数を持たない場合、N および Sum 値の % 列は 0.00 と表示されます。

{{< /callout >}}

4. 生成された異なるモデル セットを選択し、**[Reports]** セクションの結果を比較します。
5. **[Inspector]** ウィンドウで、**[Report]** セクションを展開します。 
<br>greenspacePercentage 属性はデフォルトで 30 に設定されています。これは、土地の 30 ％ が緑地に割り当てられていることを意味します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-B657B199-3FC2-4D39-B53F-A80CFFEFF1E2-web.png" title=" " width="750" >}}
greenspacePercentage 属性は、土地の何パーセントが緑地やオープン スペースとして確保されているか、言い換えれば、土地の何パーセントが未建築であるかを示します。
<br>確率とシード値に応じて、パーセンテージはわずかに変化します。シード値を更新すると (**Shapes → Update Seed** または Ctrl + Shift + G)、値も変化します。

6. greenspacePercentage 属性の値を 75 に変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-BB8C98EE-D22C-403E-BC7C-07128633F5C3-web.png" title=" " width="750" >}}
シーン内の緑地が大幅に増加し、**[Reports]** セクションの Area.Greenspace の値もそれに応じて増加しました。

## Part 2: 延床面積 (GFA) と容積率 (FAR) の追加のレポートを調べる
次に、延床面積 (GFA) と容積率 (FAR) がどのようにレポートされるか調べます。

1. reporting_02.cejシーンを開きます。
2. reporting_02.cgaルールファイルを開きます。
<br>[Lot] ルールでは、セット操作が使用されて、区画の総面積を建物の plotArea 属性に保存します。この情報は後 FloorBottom ルールで容積率 (FAR) を計算するために使用されます。
```
@Hidden 
attr plotArea = 0 # used to calc FAR 

@StartRule 
Lot -->  
	case prob(greenspacePercentage): 
		report("Area.Greenspace",geometry.area) 
		GreenSpace 
	else: 
		set(plotArea, geometry.area) 
		report("Area.BuildUp",geometry.area) 
		BuildingLot 
```
最初のセクションのルールファイルと比較して、建物はフロアごとに分割されています。FloorBottom ルールを見つけます。このルールは report() 操作をすることで、建物の各フロアに対して呼び出します。したがって、レポート変数の延床面積 (GFA) は段階的に合計され、全てのフロア面積の合計となります。

同様に、容積率 (FAR) では、面積が以前に保存された plotArea 値で割られ、総フロア面積と区画面積の比率が得られます。

```
FloorBottom --> 
	report("GFA",geometry.area) 
	report("FAR",geometry.area/plotArea) 
```

3. 生成された建物を選択し、**[Report]** セクションを調べます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-350718B0-7396-40CF-BF62-0B49677E29CC-web.png" title=" " width="750" >}}
最初のセクションの面積のレポート値に加え、新しい延床面積 (GFA) と容積率 (FAR) のレポート変数が表示されます。N 列の値 18 は、レポート変数が選択に対して呼び出された回数を示します。Sum 列は延床面積 (GFA) と容積率 (FAR) の計算された値を表示します。延床面積 (GFA) と容積率 (FAR)の % 列は、グループ変数を持たないため、0.00 と表示されます。

4. [distanceStreet] スライダーを動かしてパラメーターを変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-5B610EFB-32BB-4E03-836F-2095302079B8-web.png" title=" " width="750" >}}
建物モデルの変更を反映して、延床面積 (GFA) と容積率 (FAR) の値が更新されます。

5. モデルの可視化を変更するには、**[Rules]** セクションの [vizMode] ドロップダウン メニューをクリックします。以下のいずれかの方法でモデルを可視化できます。可視化を変更しても、このルールファイルを使用している場合、レポート値には影響ありません。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-17DE5AC8-D72A-45F6-94BD-C21A07AD44FE-web.PNG" title=" " width="750" >}}

## Part 3: 用途タイプによるレポート
次に、このルールをどのように拡張すれば、フロアごとに異なる土地用途タイプを視覚化およびレポートできるかを見ていきます。

reporting_03.cej シーンと reporting_03.cga ルールファイルを開きます。

### 用途タイプの追加
reporting_03.cgaルールでは、以下の 3 つの属性が追加されています。
<br>・mixedOffice 属性は、土地用途タイプが [Mixed] の建物において、オフィススペースと住居スペースの比率をグローバルにコントロールします。
```
attr mixedOffice = 0.2 
```
・建物の landuseType 属性は、Office、Residential 、Mixed (Office と Residential） のいずれかを個別に設定できます。初期値は、ランダムに 1 つの土地用途タイプが均等に選ばれるように設定されています。
```
@Range("Office","Mixed","Residential")   
attr landuseType = "Mixed" 
	33% : "Mixed" 
	33% : "Office" 
	else : "Residential" 
```
・baseFloors は、建物の地上部 (base) に位置する小売業 (Retail) フロアの階数を制御します。タイプが Residential の建物にはベースフロアはなく、Office および Mixed 用途タイプの建物では、1 ～ 3 階の間でランダムに選択されます。
```
attr baseFloors =  
	case landuseType == "Residential" : 0  
	else : ceil(rand(0,3))  
```
BuildingLot ルールでは、階高および階数レポートが追加されます。
```
BuildingLot --> 
	report("Floor Height", floorHeight) 
	report("Floor Count", nFloor) 
	setback(distanceStreet) 
		{ streetSide: OpenSpace 
		| remainder: Parcel }   
```

### タイプ別によるレポーティング
用途タイプでフロア面積をレポートできるようにするために、floorBottom ルールを type 引数で拡張します。この type に応じて、FAR.usagetype で示される用途タイプに対応する面積がレポートされます。ピリオド付きの接頭語 [GFA.] を使用することにより、個々の用途タイプだけでなくこれらを加算したトータル [FAR] もレポート統計として表示されます。また、用途タイプにより異なる色が割り当てられ、生成されたモデルの機能が可視化されます。(赤: Retail (小売業)、緑: Office (オフィス)、 青: Residential (住居))
```
FloorBottom(type) --> 
	case type == "Retail": 
		report("GFA.Retail",geometry.area)  
	 	report("FAR",geometry.area/plotArea) 
	 	color("#ff4444") #Red 
	 	FloorViz 
	 	 
	case type == "Office" || (type == "Mixed" && split.index < mixedOffice*split.total):  
		report("GFA.Office",geometry.area)  
	 	report("FAR",geometry.area/plotArea) 
	 	color("#44ff44") #Green 
	 	FloorViz 
	 		 
	else: 
		report("GFA.Residential",geometry.area)  
	 	report("FAR",geometry.area/plotArea) 
	 	color("#4444ff") #Blue 
	 	FloorViz    
```
Mixed 用途タイプの場合にオフィスと住居を区別するために特別な表現を使用します。split.index (このコンテンツのフロア インデックスと等しい) を使用することにより、オフィスフロアが mixedOffice 属性で制御された目的のフロア インデックスまで生成されるようにします。

### 土地用途タイプの変更
**[Inspector]** ウィンドウで土地用途タイプを変更するには、以下の手順を行います。

1. モデルを選択します。
2. 建物の表現を変更するには、**[Rules]** セクションの[landuseType] ドロップダウン メニューをクリックします。
<br>[landuseType] パラメーターを以下のタイプのいずれかに変更できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-29D0030F-EA88-46DF-A579-7CD3D436E985-web.PNG" title=" " width="750" >}}
3. mixedOffice のパーセンテージ値を 0.2 から 0.6 に変更します。シーン内の緑色のオフィス フロアの数が増加しました。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-49FB7671-8839-4CE5-B13B-3999B8DCDB65-web.png" title=" " width="750" >}}
新しいレポート変数は、**[Reports]** セクションに表示されます。GFA.Office は、オフィス床面積の総平方メートルと総床面積に占める割合が増加した事例が 9 件 ( 9 つのオフィス フロア) であることを報告しています。

## Part 4: 土地用途マッピングレイヤーでレポートを管理
このセクションでは、土地利用タイプをランダムに分布させるのではなく、マッピング レイヤーを使って分布をコントロールします。

### 土地用途タイプのマッピングレイヤーを使用
マッピングレイヤーを使用して、都市の全体的な外観を制御することができます。
1. reporting_04.cej シーンを開きます。
2. **[Scene Editor]** ウィンドウで[Landuse Map]レイヤーの表示チェック ボックスをオンにして、**[Viewport]** ウィンドウに表示します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-D654A907-86BC-4BFF-998A-0FF9D75FC112-web.png" title=" " width="750" >}}
3. **[Scene Editor]** ウィンドウで、[Landuse Map] レイヤーを選択します。
4. **[Inspector]** ウィンドウで、**[Layer Attributes]** セクションを展開します。
```
attr landuse = map_01(red, 0.0, 1.0)
attr Office = case landuse > 0.66: true else: false
attr Mixed = case !Office && landuse > 0.33: true else: false
attr Residential = case !Office && !Mixed: true else: false 

attr landuseType = 
	case Office : "Office"
	case Mixed  : "Mixed"
	else :        "Residential"
```
Office、Mixed、Residential 属性は、マップの明るさ（マップの赤チャネルで決定）によって制御されます。たとえば、マップが明るい場所では、Officeが 真 と判別されます。

その結果、中央の明るい部分は背の高いオフィスビルを、中央の部分は土地用途が混在する小規模なビル（小売、オフィス、住宅）を、そして外側の部分は小規模な住宅をされることになります。

同じ方法で、建物の高さは BuildingHeight マッピング レイヤーによって制御されます。レイヤーを表示すると、マップと生成された建物の相関関係がわかります。

5. reporting_04.cgaルールファイルを開きます。
以前のルールのレポートと比較して、reporting_04.cga ルールは、フロアを異なる色で表示されており、また土地用途タイプに応じて異なるマスモデルを作成します。
```
Subparcel -->
	case landuseType == "Office": Office
	case landuseType == "Mixed" : Mixed
	else: Residential

Mixed -->
	[ extrude(baseFloors*floorHeight) RetailBase ]
	t(0,baseFloors*floorHeight,0) 
	set(nFloor,nFloor-baseFloors)
	offset(-5,inside) LUShape
```
以下の例は、Office、Mixed、Residential の各土地用途タイプの建物の視覚化を示しています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-CAA0795E-CAEB-4BAE-917C-3ED8B513327C-web.png" title=" " width="750" >}}

### 都市全体のレポートを作成
次に、都市全体のスペースと建物のレポートを作成します。
1. **[Select]** ツール (Q) で、シーン内のすべての形状を選択します。
<br>また、**[Scene Editor]** ウィンドウで [Blocks] レイヤーを選択し、**[Select Objects]** をクリックして、すべての形状を選択することもできます。
2. **[Generate]** ツール (Ctrl + G) をクリックして、すべての区画のスペースと建物を生成します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-3C912B68-716B-42F1-A6A8-A818468850EF-web2.png" title=" " width="750" >}}
mixedOffice 属性はデフォルトで 0.2 に設定されています。結果はシーンと **[Reports]** セクションで確認できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-8A99C98E-E048-4D2C-838B-5DF6E560CA59-web.png" title=" " width="750" >}}
3. すべての建物を選択したまま、mixedOffice 属性を 0.2 から 0.6 に変更します。建物は自動的に再生成されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-47184230-144A-4929-A692-9486CED19A14-web.png" title=" " width="750" >}}
レポートされた数値は、ビルやスペースの再生とともに更新され、GFA.Office エリアが増加し、GFA.Residential エリアが減少しました。

## Part 5: レポート データのエクスポート
レポート データをエクスポートするには以下の手順に従います。
1. エクスポートするレポート テーブルの行を選択します。（Shift を押しながらクリック、または Ctrl を押しながらクリックします。Ctrl + A を押すとすべての行が選択されます。）
2. Ctrl + C でクリップボードにコピー (タブ区切り) します。
3. Ctrl + V を押して、Microsoft Excel または他のアプリケーションにデータを貼り付けます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-8A068CD5-2A73-496C-ACE9-DE066E0B6133-web.png" title=" " width="500px" >}}

レポート データをエクスポートする別の方法として、レポートをオブジェクト別に分類し、各カテゴリに対応する値を表示する .csv ファイルを生成することです。一部のオブジェクトには複数のフロアが含まれており、.csv ファイルには、各建物とフロアのそのカテゴリの値が表示されます。

1. すべての建物が選択されていることを確認します。
2. メインメニューで **[Scripts] メニュー → [Add Script]** をクリックします。
3. [Select Script] ウィンドウが表示されますので、export_report.py スクリプト ファイルを選択し [open] クリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/2024-07-30_17h35_59.png" title=" " width="500px" >}}
4. [export report] をクリックして、[.csv] ファイルを生成します。
5. [deta] フォルダ内の reports.csv ファイルをダブルクリックして、Excel スプレッドシートを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-11-Reporting/GUID-64290307-68BB-488F-98D0-BCFFACEF1209-web.png" title=" " width="500px" >}}

このチュートリアルでは、次のことを学びました。
<br>・区画の面積などの値を計算し、レポートする方法
<br>・GFA と FAR の追加のレポートを調べる方法
<br>・利用タイプ別にレポートし、フロアごとに異なる土地用途タイプの視覚化をする方法
<br>・マッピングレイヤーを使用して土地用途タイプとレポートを制御する方法
<br>・Microsoft Excel や類似のスプレッドシート アプリにレポートをエクスポートする方法

CityEngineの学習を続けるには、[CityEngine チュートリアル カタログ](https://doc.esrij.com/cityengine/tutorials/)をご覧ください。
