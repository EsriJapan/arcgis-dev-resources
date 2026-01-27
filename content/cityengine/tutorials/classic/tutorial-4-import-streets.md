+++
title = "チュートリアル 4: 道路データのインポート"
description = "外部からインポートした道路データを扱う方法を学習します。"
Weight = 4
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
date = 2025-08-20T00:00:00+09:00
author = "森" 
draft = false
+++

## チュートリアルデータ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードすることができます。  


## 概要
チュートリアル 4 では、外部からインポートした道路データを扱う方法をご紹介します。外部のアプリケーションで作成、またはデータベースから導入された*.dxf、*.osm または*.shp ファイル フォーマット内にある道路ネットワーク データを CityEngine にインポートし、街作成のために初期データとして使用します。  

|演習|
|:--|
|・[Part 1: DXF ファイルのインポート](#part-1-dxf-ファイルのインポート)|
|・[Part 2: マイナー道路の生成](#part-2-マイナー道路の生成)|
|・[Part 3: OpenStreet Map (OSM) データをインポート](#part-3-openstreet-map-osm-データをインポート)|
|・[Part 4: 衛星画像マップ レイヤーの追加](#part-4-衛星画像マップ-レイヤーの追加)|
|・[Part 5: シェープファイルとジオデータベースをインポート](#part-5-シェープファイルとジオデータベースをインポート)|


  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-A2970A3E-41B3-44DE-A8D9-83530B14A956-web.png" title=" " width="500" >}} 

CityEngine の道路ネットワークは、グラフノード (交差点) とグラフエッジ (道路セグメント) で構成されています。これらは、成長する道路ツールで生成したり、CityEngine で手動で描画したり、DXF や SHP ファイルなどの外部ファイルからインポートしたりすることができます。

以下の例は、Adobe Illustrator でスケッチした海辺の街の主要道路構造を示しています。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-1935167B-6C10-4417-913E-EF0C4F900961-web.png" title=" " width="500" >}} 

それを DXF ファイルとして書き出し、CityEngine にインポートしたのです。

{{< callout >}}

道路網をDXFで書き出す場合、CityEngineの座標系はメートル単位なので、アプリケーションの単位を必ずメートルに変換してください。

{{< /callout >}}

## Part 1: DXF ファイルのインポート

DXF ファイルをシーンに取り込むには、次のようにします。
1. scene フォルダ内の **sesame_01.cej** を開きます。</br> 
シーン上に海辺のテクスチャーが表示されます。</br> 
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-E7AE32E2-08C1-4EFB-8B4A-9F66F2222ECF-web.png" title=" " width="500" >}} 
2. data フォルダ内の **sesame_streetsketch.dxf** ファイルを右クリックし、**[Import]** を選択します。
また、**.dxf** ファイルを選択し、メインメニューの **[File]** → **[Import]** をクリックすることも可能です。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-3250B807-B549-4792-A3B1-CDD491E691C1-web.png" title=" " width="500" >}} 
**[Graph]** ボックスには、インポートするグラフ レイヤーとしてレイヤー 2 データが追加されていることが表示されます。
3. **[Run Graph Cleanup Tool after Import]** と **[Create Street/Nodes Shapes from Graph]** のチェックボックスがオンになっていることを確認し、**[Next]** をクリックします。
4. **[Intersect Segments]**、**[Snap Nodes to Segments]**、**[Merge Nodes]** の各チェックボックスをオンにします。
5. **[Horizontal Snapping Distance]** と **[Vertical Snapping Distance]** の値を 1 に設定します。
6. **[Horizontal Merge Distance]** と **[Vertical Merge Distance]** の値を 5 に設定します。 **[Cleanup Graph]** の設定は、以下のようになります。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-02623BD6-7716-4972-81F2-C815F91065D1-web.png" title=" " width="500" >}} 
7. **[Finish]** をクリックします。  
8. [Inspector](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm) ウィンドウで、新しい道路レイヤーの名前を **Sesame Street Sketch** に変更します。
9. **[3D View]** ウィンドウで (D+G) を押すか、**[View settings]** ツールの **[Grid]** をクリックして、グリッドをオフにします。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-535B6DFA-E25C-4DDD-AADA-C6209849115C-web.png" title=" " width="500" >}} 
scene フォルダ内の **sesame_02.cej** を開くと、海辺の横にインポートした DXF が表示されます。


## Part 2: マイナー道路の生成
主要な道路がインポートされたら、道路ネットワークの改良に取り掛かり、その間にある細かい道路を生成していくことができます。次に、**[Grow Streets]** ツールを使って、既存の閉じたブロックを埋めることで、繰り返し道路ブロックを街路で埋め尽くしていきます。  

1. **sesame_02.cej** のシーンを開いたままにしておきます。 
2. 選択ツール **[Select]** ツールを使用し、メイン道路リング内のメイン道路セグメントを 1 つ選択します。これは、ブロック内の道路の一般的な方向を指定し、道路生成アルゴリズムの開始ノードを定義するものです。</br> 
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-3D3035E9-E32E-4FD2-86A5-C3244EA08800-web.png" title=" " width="500" >}} 
3. **[Visibility settings]** をクリックし、シェープを選択するか、F11 キーを押して、図形の可視性をオフにします。
これは、道路網の大通りと小通りを分離するために行うものです。

4. メインメニューの **[Graph]** → **[Grow Streets]** をクリックして、**[Grow Streets]** ダイアログボックスを表示します。 
5. **[Pattern of minor streets]** の隣にあるドロップダウン メニューから **[Radial]** をクリックします。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-4679A574-B7D8-4935-862D-AA0924AD1EFD-web.png" title=" " width="500" >}} 
6. **[Apply]** をクリックします。</br>
小路が放射状に生成されます。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-5B14AC8B-A453-47C7-BF83-91A0A44ED251-web.png" title=" " width="500" >}} 
7. 続けて細かい通りを成長させる場合は、別の通りを選択します。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-28E62959-E68B-47E8-839D-FF727A41DA78-web.png" title=" " width="500" >}} 
8. 同じ設定のまま、**[Apply]** をクリックします。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-2AA5F3F6-87CC-4108-B451-D144382F96D8-web.png" title=" " width="500" >}} 
道路はリングの内側にのみ生成します。**sesame_03.cej** のシーンは、完成した放射状の道路パターンを示しています。</br>
9. 道路網の別の部分に道路を作り、道路の生成を継続させる。
**[Polygonal Street Creation]** ツールを使って、新しい通りを 2 つ追加し、それらを選択したままにしておきます。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-65CFF6CE-EF6E-4425-B380-C826D1CF808E-web.png" title=" " width="500" >}}
10. 今度は **[Pattern of minor streets]** の設定を **[Raster]** に変更します。
11. **[Apply]** をクリックします。</br>
道路は、選択された街路と小路からラスター パターンで生成されます。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-9448CF93-FD2C-471F-8F7B-81FB7140152D-web.png" title=" " width="500" >}} 
設定を変更することで、道路を生成させる際に、異なる道路パターンを得ることができます。詳しくは、[Street pattern examples](https://doc.arcgis.com/en/cityengine/latest/help/help-grow-a-street.htm#ESRI_SECTION1_E14DD7043211416FA75492BF38074638) の例を参照してください。

### 建物や植生のモデル生成
**sesame_12.cej** は、完成したシーンを上から見たものです。道路生成アルゴリズムを複数回適用すると、大通りと小通りが生成され、建物のフットプリントが抽出されます。次に、建物と植生のモデルを生成します。
1. **sesame_12.cej** のシーンを開きます。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-A79787D5-71E5-484F-97A1-C92AB7498D96-web.png" title=" " width="500" >}} 
2. モデルを生成するかどうか聞かれたら、**[No]** をクリックします。
3. **[streets final]** レイヤーを右クリックし、**[Select Objects]** をクリックします。
4. **[Generate]** ボタン (Ctrl+G) をクリックすると、すべての建物と植生のモデルが生成されます。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-A2970A3E-41B3-44DE-A8D9-83530B14A956-web.png" title=" " width="500" >}} 


## Part 3: OpenStreet Map (OSM) データをインポート

OSM は XML ベースのフォーマットで、マップ上のベクトル データを記述するために使用されます。nodes、ways、closed ways の 3 つの基本データ型が定義され、他のすべての要素を記述するために使用されます。
- Nodes: セグメント間を示すポイントです。
- Ways: ノードの順序リストです。エディターでライン セグメントで接続されて表示されます。
- Closed Ways: Closed ways は完全にループで行われ、公園や湖、島などのエリアを表現します。

OSM データをインポートする作業をします。
OSM ファイルをインポートするには、次の操作を行います。
  
1. **[File] メニュー→ [New...] → [CityEngine] → [CityEngine Scene]** をクリックし、新規シーン ファイルを開きます。 
2. data フォルダにある **.osm** ファイルを **[3D View]** ウィンドウにドラッグします。
3. OSM インポートのダイアログボックスで、インポートするレイヤーを選択します。
通常、道路は高速道路レイヤーに、建物は建物レイヤーに含まれます。必要に応じて、**[Select/deselect]** チェックボックスを使用して、すべてのレイヤーの選択を解除します。

4. 下の画像のように、追加オプションを設定します。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-CC62EC15-2B63-4E0A-AFC9-02C1E876CCF5-web.png" title=" " width="500" >}} 
5. **[Finish]** をクリックします。
6. **シーンの座標系**は **WGS 1984 UTM Zone 33N** に設定しておきます。 </br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-63390E47-36F4-4C5E-BF1E-45B0FE0960FF-web.png" title=" " width="500" >}} 
詳しくは、[Scene coordinate systems](https://doc.arcgis.com/en/cityengine/latest/help/help-georeferencing.htm) をご参照ください。
7. **[OK]** をクリックします。  
[Scene Editor](https://doc.arcgis.com/en/cityengine/latest/help/help-scene-editor.htm) に、道路ネットワーク レイヤーとシェープ レイヤーという 2 つの新しいレイヤーが表示されます。**[3D View]** ウィンドウには OSM データが表示され、インポートされた道路の中心線上に自動的に作成された道路形状が表示されます。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-29F1898F-BB57-420D-A7B5-26236714A1BB-web.png" title=" " width="500" >}} 
8. **[Scene Editor]** で、「graph network」レイヤーの名前を「OSM_Streets」 に変更します。
9. [Shape] レイヤーの名前を 「OSM_Shapes」 に変更します。

{{< callout >}}

CityEngineの **[Get Map Data]** ツールを使って、世界の選択した地域の OSM データをインポートすることもできます。詳しくは [Get map data](https://doc.arcgis.com/en/cityengine/latest/help/cityengine-help-get-map-data.htm) をご参照ください。

{{< /callout >}}


### 道路幅
生成された道路シェープを拡大すると、各道路の幅が異なるのが分かります。Map OSM tags を有効にした状態で OSM データをインポートすると、CityEngine は OSM 道路タイプの道幅を定義したレイヤー属性を作成します。</br>
[3D View] ウィンドウ内で道路を 1 つ選択し、**[Inspector]** ウィンドウの Segment タブでパラメーターを確認します。</br>
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-78ECA8FF-A719-497C-8266-4C18D74AE8A3-web.png" title=" " width="500" >}} 
選択された道路は、[highway] パラメーターが [primary] に設定され、道路と歩道の幅のパラメーターは、インポートされた OSM_Streets レイヤーのレイヤー属性マッピングに従って定義されています。</br>
新しい幅の値を [Segment Width] パラメーター (値はユーザーが設定した値に変更可能) に設定、またはツールバーにある **[Edit Streets/Curves]** ツールを使用して、手動で道路幅を変更することもできます。


### 属性のマッピング  
OSM道路データのレイヤー属性を見るには、**[Scene Editor]** で **[OSM_Streets]** レイヤーを選択し、**[Inspector]** ウィンドウの **[Layer Attributes]** でレイヤー属性を調べます。
たとえば、前の画像で選択された道路セグメントは [primary] に設定され、streetWidthByClass 関数で道路幅は 8 メートルにマッピングされます。このマッピングは **[Layer Attributes]** で変更することができます。

```
//------------------------- 
// Example OSM Tag Mapping

streetscale = 1 // street width scale factor

width = getFloatObjectAttr("width", false)
lanes = getFloatObjectAttr("lanes", false)

attr streetWidth = // street width depending on available attributes
    case width > 0 : width       * streetscale
    case lanes > 0 : lanes * 3.5 * streetscale
    else           : streetWidthByClass * streetscale * oneway

class = getStringObjectAttr("highway", false)

streetWidthByClass =
    case class == "primary"     : 8
    case class == "secondary"   : 7
    case class == "tertiary"    : 6
    case class == "motorway"    : 12
    case class == "trunk"       : 11
    case class == "road"        : 6
    case class == "residential" : 5
    case class == "footway"     : 2
    case class == "cycleway"    : 2
    case class == "steps"       : 2
    else                        : 4

oneway = // oneway width correction
    case getStringObjectAttr("oneway", false) == "yes" : 0.5
    else                                               : 1

sidewalkscale = 1 // sidewalk width scale factor

sidewalkWidth =
    case class == "primary"     : 2
    case class == "secondary"   : 2
    case class == "tertiary"    : 2
    case class == "residential" : 2
    else                        : 0

attr sidewalkWidthLeft  = sidewalkWidth * sidewalkscale
attr sidewalkWidthRight = sidewalkWidth * sidewalkscale
```

### データの競合
インポートした OSM データには不要なものが含まれていることがあり、これが道路の重複等の競合を起こすことがあります。ブロックができていない箇所や赤い点線の箇所は、セグメントが接続されていなかったり、道路が重複してブロックが作成できないなどの状態を表します。以下の方法で競合を解消することができます。
- **[Cleanup Graph]** ツールで、パラメーターを変更する方法。
- インポート ダイアログで、高速道路レイヤーの道路を間引いて選択する方法。
- 道路同士の重複を減らすために、道路と歩道幅をより小さい値に設定する方法。
- インポート後に交差点や平行している道路を、結合または除去して手動で道路ネットワークの競合を解消する方法。

下図は、接続されていない Graph Node を解消する例の前と後を表しています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-B31C9FE2-A352-4867-8030-E6E0ABD75413-web.png" title=" " width="500" >}}  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-BE2BF5A2-1725-43F1-B863-326125CFE218-web.png" title=" " width="500" >}}  

{{< callout >}}

OSM 道路データは標高データ (**level** 属性) を含んでいますが、誤っている場合があります。**Run Generate Bridges** ツール オプションを有効にすると、CityEngine が自動で解決策を提示してくれます。

{{< /callout >}}

## Part 4: 衛星画像マップ レイヤーの追加  
次に、ジオリファレンス付きの航空写真をシーンに追加します。
1. **[Fileメニュー] → [Import...] → [CityEngine Layers] → [Texture Import]** をクリックします。
2. [Texture file] の [Browse…] ボタンから、maps フォルダにある  **pompeii_satellite.tif** ファイルを参照します。 
**pompeii_satellite.tif** に付随するワールドファイル **pompeii_satellite.tfw** は、画像のジオリファレンス情報を格納したファイルです。そのため、**[Dimensions]** と **[Location]** のパラメータは自動的に設定されます。詳しくは、[ラスターデータセットのワールドファイル](https://desktop.arcgis.com/ja/arcmap/latest/manage-data/raster-and-images/world-files-for-raster-datasets.htm)をご参照ください。</br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-F5F60969-E358-43CD-A2F0-689150FDEFF7-web.png" title=" " width="500" >}} 
3. **[Finish]** をクリックすると、新しいテクスチャー マップ レイヤーが作成されます。</br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-098C3A51-BF85-4BC7-892A-4CAB6B8DDEC5-web.png" title=" " width="500" >}} 

{{< callout >}} 

CityEngine はインポートで画像を再投影することはありません。画像のインポートで座標系を選択するのは、正確な位置情報を計算するためです。そのため、CityEngine のシーンで使用された投影法での画像データを用意する必要があります。上記の例では、ポンペイの衛星画像を **WGS 1984 UTM Zone 33N** (このチュートリアルのシーンで使用しているシーン座標系） に再投影しています。 

{{< /callout >}}

### モデルの生成  
最後に、OSM の形状からモデルを生成します。
1. **[Scene Editor]** で、[OSM_Shapes] レイヤーにある全てのシェープを選択します。
2. **osm_generic.cga** ルール ファイルを選択したシェープにドラッグします。
一部のシェープにはすでに有効なスタート ルールが設定されているため、**[Set Start Rule]** ダイアログ ボックスが表示されます。</br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-1BA60D1A-5AE9-4012-96D6-FED9253AA59D-web.png" title=" " width="500" >}} 

3. **[Lot]** ルールを選択します。
4. **[OK]** をクリックします。</br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-05C9479C-1B00-48B5-B89C-1093B3DEE9C4-web.png" title=" " width="500" >}} 

## Part 5: シェープファイルとジオデータベースをインポート
シェープファイル (SHP) やジオデータベース (GDB) のデータも CityEngine にインポートすることができます。シェープファイルとジオデータベースから道路をインポートする操作はほぼ同じであるため、ここではジオデータベースの具体例はありません。シェープファイルをインポートするには、次のようにします。
### シェープファイル データをインポート
1. CityEngine のシーンを作成します。
2. data フォルダにある **street.shp** を **[3D View]** ウィンドウにドラッグします。シェープファイルには、インポートする際に正確なジオリファレンスをする **.prj** ファイルが入っています。今回使用するデータは CityEngine に道路セグメントとしてインポートするポリラインです。また、このデータには道路の幅を制御する道路幅の属性が含まれます。
3. インポート作業の過程で、シーンの座標系を設定します。</br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-DBAE23AC-ABFF-47D3-9F0F-E238F15BF700-web.png" title=" " width="500" >}} 
4. シーンの座標系を **WGS 1984 UTM Zone 11N** のままにして、**[OK]** をクリックします。 </br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-4322560A-9BCA-4E00-B44A-E25DA6CD9272-web.png" title=" " width="500" >}} 
{{< callout >}}

この例では道路幅を調整するために、シェープファイルに width (幅) 属性が入っています。シェープファイルに幅の属性がない場合、デフォルトの道路幅が自動的に割り当てられます。また、インポート後に手動で道路幅を設定することもできます。[属性マッピング](https://doc.arcgis.com/en/cityengine/latest/help/help-inspector.htm#ESRI_SECTION1_45B62C2C902E446993B6AFF902FC5090)を使用して他の属性名にマッピングすることもできます。

{{< /callout >}}


### クリーンアップ
クリーンアップ インポートした道路シェープは道路シェープ同士で競合することがあり、赤い点線で示されます。</br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-6B0831EA-7F4A-444B-AED6-3864AF77FE52-web.png" title=" " width="500" >}} 
**[Resolve Conflicting Shapes]** を有効にし、**[Cleanup streets]** ツールを使用することで自動的に修正されます。また **[Graph]** → **[Simplify Graph]** をクリックすると、不要なものを削除したり、接線を設定することで、複雑なグラフ セグメントの数を減らすことができます。詳しくは、[Cleanup streets](https://doc.arcgis.com/en/cityengine/latest/help/help-cleanup-streets.htm) をご参照ください。

### ルール ファイルの適用  
最後に、道路モデルを生成するためのルールを割り当てます。
1. 道路シェープをすべて選択します。 
2. **sesame_01.cga** ルール ファイルを **[3D View]** ウィンドウで選択したシェープ上にドラッグします。</br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-DCE401C6-3F42-4ACC-8832-DAA210A16F22-web.png" title="モデルを生成する前に道路が表示されます。**shp_01.cej** のシーンをご確認ください。" width="500" >}} 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-4-import-streets/GUID-19EBD4FC-B0EF-44DF-AF14-C43D06CAD13C-web.png" title="道路はモデル生成後に表示されます。**shp_02.cej** のシーンをご確認ください。" width="500" >}} 


このチュートリアルでは、DXF、OSM、シェープ ファイルなど、さまざまなデータ タイプの道路をインポートする方法について学びました。


