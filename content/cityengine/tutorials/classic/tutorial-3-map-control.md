+++
title = "チュートリアル 3: マップ制御"
description = "マップを使って都市の外観を制御する方法を学習します。"
weight = 3
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
都市は広大で複雑であり、多数の形状やオブジェクトを含んでいるため、一度に1つの建物の属性を制御するのは難しい場合があります。このチュートリアルでは、マップを使って都市の外観を制御する方法を学習します。

|演習|
|:--|
|・[Part 1: Inspector による CGA ルール パラメーターの探索](#part-1-inspector-による-cga-ルール-パラメーターの探索)|
|・[Part 2: 高さのマップ制御の設定](#part-2-高さのマップ制御の設定)|
|・[Part 3: スカイラインの高さをマップと接続](#part-3-スカイラインの高さをマップと接続)|
|・[Part 4: 土地利用タイプをマップで制御](#part-4-土地利用タイプをマップで制御)|

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-15A44B5C-406B-4297-A7B4-03B80BB09D64-web.png" title=" " width="500" >}} 

## Part 1: Inspector による CGA ルール パラメーターの探索
最初に [Inspector](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm) ウィンドウで CGA ルール パラメーターがどのように使用されるのかを学習します。

1.	Scene フォルダーから、**mapcontrolTutorial_01.cej** シーンを開きます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-712949BB-297A-44F2-9B4C-AA72614F8E2F-web.png" title=" " width="500" >}} 

1. シェープを選択します。
   **[Inspector]** ウィンドウでシェープを調べると、シェイプに ルール パラメータが割り当てられていないことがわかります。
      {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-AD3AA57B-EF0E-4CCD-B0B5-9D4D553BB163-web.png" title=" " width="500" >}} 

1. [Scene Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-scene-editor.htm) で **Streetnetwork** レイヤーを 右クリックし、**[Select Objects]** をクリックします。
 
1. 次に、選択したシェープに構築ルールを割り当てます。
   ルール ファイルをシェープに割り当てる方法はいくつかあります。次のいずれかを実行します。
   - ツールバーの **[Assign rule file]** ツールをクリックしますルールの割り当て。
   - **[Inspector]** ウィンドウの **[Assign]** ボタンをクリックします。
   - メイン メニューで **[Shapes] > [Assign Rule File]** をクリックします。
   [Assign Rule File] ダイアログ ボックスが表示されます。

1. **simpleBuildingShells_01.cga** ルールをクリックし  、**[Open]** をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-CF11694B-10F7-4F05-BCA5-5CDD3FB7D9AC-web.png" title=" " width="500" >}}

1. シェープを再度選択します。

1. **[Rules]** セクションを展開して、ルールの属性を表示します。
   height 属性がシェープに割り当てられます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-76FB1575-2B5D-4DA9-A1F2-4C24A876121D-web.png" title=" " width="500" >}}

1. **Rule File** リンクを開き、[CGA Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-cga-editor.htm) で **simpleBuildingShells_01.cga** ルール ファイルを開きます。
   
   ```
   // height value
   attr height = 80
   ```

   height 属性は、建物の高さを定義します。

1. **[Generate]** ボタン (Ctrl+G) をクリックして選択したシェープを再生成します。

1. height 値を 80 から 150 に変更します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-35946DBE-BA36-4BEE-990E-D9CEB20DA7DA-web.png" title=" " width="500" >}}
   建物に設定した高さの値は、ルールのパラメータを上書きするようになりました。他のすべてのシェープは、ルールで定義された高さ値を引き続き使用します
   **mapcontrolTutorial_02.cej** を開いて、模範のシーンを確認します。

## Part 2: 高さのマップ制御の設定
このセクションでは、カラー マップを追加して、建物の高さパラメーターを制御します。

1. [Part 1](#part-1-inspector-による-cga-ルール-パラメーターの探索) から行っている場合はそのまま続けてください。Part 2 から始める場合はシーン **mapcontrolTutorial_02.cej** を開いてください。 

1. 建物の周りのいくつかのシェープを選択し、 **[Generate]** ボタン (Ctrl+G) をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-F7FA640E-7BB1-4603-8D70-E8C1BFB1DA60-web.png" title=" " width="500" >}}
   すべての建物の高さは 80 メートルです。スカイラインを追加することで、建物の外観を改善できます。ただし、最初のセクションで行ったように手動で CGA シェープ属性を設定するのではなく、以下の赤いスカイライン マップを使用して建物の高さを制御します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-6C2B8582-F0AE-473D-87FE-AB4653EC8A92-web.png" title="高さの赤チャンネル マップ" width="250" >}} 
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-F232FB33-9CA2-4C19-86A6-9D7B5ED4A9AE-web.png" title="地形マップ" width="250" >}}
   上図のスカイライン マップの赤チャンネル (バンド) は、このエリアの建物の高さを表しています。スカイライン マップを地形マップと比較すると、湖の縁に沿ってにスカイラインを形成仕様としていることがわかります。また、左上方に別の市街部ができることも分かります。

1. 新規マップ レイヤーを作成します。**[Layer] メニュー → [New Map Layer...]** をクリックします。
   **[Scene Editor]** を右クリックして、**[New] → [New Map Layer]** をクリックすることもできます。

1. **[Mapping]** を選択し **[Next]** をクリックします。

1. **[Browse]** をクリックして、 **maps** フォルダーにある **skylineMap.png** ファイルを選択します。

1. **[Dimensions]** ボックスを **3000 X 3000** に変更し、 **[Location]** ボックスが **0** に設定されていることを確認します。

1. **[Keep ratio]** ボタンの選択を解除し 比率を保つ、[Alignment] ボタンの位置合わせの場所が中心に設定されていることを確認します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-572C1297-8733-43D9-815F-29032029B775-web.png" title="Mappings 設定" width="500" >}}

1. **[Mappings]** セクションを 右クリックし、  **[Add Row]** をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-010EE303-B30A-4D8F-BFA3-F7E92688D323-web.png" title="Mappings ダイアログ ボックス" width="300" >}}

1. **[Attribute]** ボックスをクリックし、属性に **skylineValue** という名前を付けます。
1. ドロップダウン リストから **Channel** を **Red** のチャンネルに設定します。
1. **Minimum 値を 20** に、**Maximum 値を 200** に設定します。
   これは、建物の高さが 20 (赤 0 パーセント) から 200 (赤 100 パーセント) メートルの間で変化する必要があることを意味します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-E1C0CE29-00FA-4D33-88B8-DAC0FBD78F3C-web.png" title="Mappings ダイアログ ボックス" width="300" >}}
1. **[Finish]** をクリックしてマップ レイヤーを作成します。
1. [Inspector] ウィンドウ で、新しいマップ レイヤー に **Skyline Map** という名前を付けます。
   スカイライン マップでルールの **height** パラメーターを制御できるようになりました。


## Part 3: スカイラインの高さをマップと接続
このセクションでは、skylineValue 属性を建物に接続します。
1. **Streetnetwork** レイヤーのすべてのシェープを選択します。
1. [Inspector] ウィンドウ の **height** 属性の横にあるドロップダウン メニューをクリックし、**[Connect Attribute]** を選択します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-F48DBB48-6A28-4F6D-ADEC-8726BA8F4E9B-web.png" title="Connect Attribute" width="300" >}}
   [Attribute Connection Editor] ダイアログボックスが表示されます。
1. **[Layer attribute]** をクリックし、新しい **Skyline Map** レイヤーと **skylineValue(Layer attribute)** 属性を選択します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-712DD16D-9DF6-4D48-AFF7-84CE573BBD1A-web.png" title="Attribute Connection Editor ダイアログボックス" width="500" >}}
   詳細については、[Map attributes with Connection Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm#ESRI_SECTION1_5050267501F04FC28BB58C6E82C6866C) をご参照ください。
1. **[OK]** をクリックします。
1. 1 つの区画を選択し、その属性を確認します。
   **height** の属性値が **Skyline Map** に接続されました。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-B72A142B-D2A8-4989-927F-D3D74776E68A-web.png" title="Height 値の接続" width="300" >}}
1. 湾の周りのいくつかのシェープを選択し、建物を生成します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-AAC5094D-210E-43ED-BC95-E3E2199C975B-web.png" title="港の周りの建物" width="500" >}}
   スカイラインは見栄えが良くなりましたが、CGA ルールを変更することでより改善できます。
1.  **simpleBuildingShells_02.cga** ルール ファイルを開き、以下の関数を確認します。

      ```
      // calc height with variation
      getHeight(area) = 
      case area > 600 : rand(0,40)+height
      case area > 200 : rand(0,40)+height/2
      else: rand(15,30)
      ```
      スカイライン マップの高さの値をそのまま建物の高さに対応させるのではなく、この関数は広い面積の区画にのみ高層ビルを作成し、建物にランダム性を追加します。CGA の詳細については、[チュートリアル 6](/cityengine/tutorials/classic/tutorial-6-basic-shape-grammar/) の「基本的なシェープグラマー」をご参照ください。
1. **[Scene Editor]** ウィンドウで **Streetnetwork** レイヤーを選択します。
1. **simpleBuildingShells_02.cga** ルールを選択したシェープにドラッグします。
   {{< callout >}}

   ルール ファイルをシェープにドラッグすると、モデルが自動的に生成されます。

   {{< /callout >}}
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-D7D32E14-7564-4759-817C-34502F835F3C-web.png" title="結果のシーン" width="500" >}}

## Part 4: 土地利用タイプをマップで制御
このセクションでは、カラー マップを使用して各建物の土地利用タイプを制御する方法を学習します。使用するマップは、土地利用タイプを色で分類します。赤は工業地区、青は商業地区、緑は住宅地です。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-21E71257-F46A-47F0-B151-3BCAA35E916E-web.png" title="土地利用図" width="300" >}}
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-F232FB33-9CA2-4C19-86A6-9D7B5ED4A9AE-web.png" title="湖の地形図" width="300" >}}
1. **mapcontrolTutorial_03.cej** シーンを開きます。
1. **[Scene Editor]** ウィンドウで **Skyline Map** レイヤーをオフにします。
1. **simpleBuildingShells_03.cga** ルール ファイルを開きます。
   次のマップ レイヤーを作成する前に、ルールにリストされている属性を見つけます。マップ レイヤーでレイヤー属性を作成するときは、同じ名前を使用します。
   
   ```
   // land use types
   attr t_industrial = 0
   attr t_commercial = 0
   attr t_residential = 0
   ```
1. **[Layer] → [New Map Layer]** をクリックして、マップ レイヤーを作成します 。
1. **[Mapping]** を選択し、**[Next]** をクリックします。
1. **[Browse]** をクリックして、 **areatypes.png** を選択します。
1. **[Dimensions]** ボックスを **3000 x 3000** に変更し、**[Location]** ボックスが **0** に設定されていることを確認します。
1. **[Keep ratio]** ボタンの選択を解除し 比率を保つ、[Alignment] ボタン位置合わせの場所が中心に設定されていることを確認します。
1. **[Attributes]** で、ルールと同じ名前のマッピング属性を追加し、**Channel** ボックスを red、blue、および green に設定します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-8794F00C-872C-43BE-BD00-CE9317B8FEED-web.png" title="Mapping attributes" width="300" >}}
   デフォルトの Minimum 値と Maximum 値の **0** と **1** をそのまま使用します。
1. **[Finish]** をクリックしてマップ レイヤーを作成します。
1. **[Inspector]** ウィンドウでレイヤーに **LandUse Map** という名前を付けます。
1. 新しいマップ レイヤーを選択し、**[Inspector]** ウィンドウで **[Layer Attributes]** をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-FA761C08-2DE4-4E69-946F-37F2FB4F3643-web.png" title="Inspector ウィンドウにおける layer attributes" width="300" >}}
1. **Streetnetwork** レイヤーを選択します。
1. **simpleBuildingShells_03.cga** ルール ファイルを割り当てます。
1. このルールは、レイヤーの属性を LandUse Map に自動的に接続します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-8E4E6DCE-FFD0-4272-BC10-FAAA48409357-web.png" title="土地利用パラメーターを表示するInspector ウィンドウ" width="300" >}}
1. 建物を生成する前に、**simpleBuildingShells_03.cga** ルール ファイルを確認します。色の宣言と **landuseTypeColor** 関数の場所を確認します。
  
   土地利用のカラータイプ:
      ```
      // color declarations
      red = "#ffaaaa"
      green = "#aaffaa"
      blue = "#aaaaff"
      white = "#ffffff"
      ```

      土地利用のカラータイプ:
      ```
      // Functions
      landuseTypeColor = 
            case t_industrial > t_commercial && t_industrial > t_residential : red
            case t_commercial > t_industrial && t_commercial > t_residential : blue
            case t_residential > t_industrial && t_residential > t_commercial : green
            else : white
      ```
      この関数は土地利用 (Landuse) マップから取得される値を解析しそれに対応する色を返します。もしマップ由来のカラー チャンネル値が他のチャンネルの値よりも大きければそれに対応する土地利用マップの色が返されます。**Lot** ルールは **color(landuseTypeColor)** オペレーションを使用します。
      ```
      Lot -->
            // prepare building ground size and pivot orientation
            case geometry.isConcave : color(landuseTypeColor)LotSub(getHeight(geometry.area))	
            else : color(landuseTypeColor) s('.8,'1,'.8) center(xz) LotSub(getHeight(geometry.area))
      ```
      **color(landuseTypeColor)** オペレーションは、内部で landuseTypeColor 関数を呼び出しており、生成された建物に色が適用されます。
1. シーン内のすべての建物を生成します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-3-map-control/GUID-15A44B5C-406B-4297-A7B4-03B80BB09D64-web.png" title="最終的に生成された建物のシーン" width="500" >}}
   **mapcontrolTutorial_04.cej** シーンは、最終的なシーンを示しています。

このチュートリアルでは、シェープへの CGA ルールの適用、マップを使用した高さの制御、および 3 色マップを使用した土地利用タイプごとの建物の色の制御について説明しました。