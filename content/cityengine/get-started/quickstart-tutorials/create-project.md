+++
title = "プロジェクトの作成"
description = "プロジェクトを新規作成してデータの作成をします。"
Weight = 2
alwaysopen = false
publishDate = 2025-08-20T00:00:00+09:00
author = "鷺谷"
draft = false 
+++


## 概要
プロジェクトを新規作成してデータを作成するまでを学びます。

CityEngine では、プロジェクト単位でデータを管理します。新規プロジェクトを作成すると、[Navigator] ウィンドウにプロジェクト フォルダーが表示されます。
そしてプロジェクト フォルダー下には assets、data、images、maps、models、rules、scenes、scripts の 8 つのフォルダーが自動的に作成されます。
この各フォルダー内にプロジェクトで必要なデータや画像、ルールやテクスチャーなどを格納します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/20250801_%25EF%25BC%2591_MD.png" title="Navigator ウィンドウ" width="500" >}}

|演習|
|:-|
|・[プロジェクトの新規作成](#プロジェクトの新規作成)|
|・[シーン ファイルの作成](#シーン-ファイルの作成)|
|・[データの新規作成](#データの新規作成)|
|・[ルール ファイルの適用](#ルール-ファイルの適用)|
|・[補足 Get Map Data でデータをダウンロード](#補足-get-map-data-でデータをダウンロード)|

## プロジェクトの新規作成

1.  \[File\] メニュー → \[New\] をクリックします。

2.  \[New\] ダイアログで、CityEngine フォルダー → \[CityEngine project\] を選択し、\[Next >\] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/20250801_2_MD_2.png" title="Select a wizard" width="500" >}}

3.  \[Project name\] に任意のプロジェクト名 (ここでは「MyProject」とします) をつけ、\[Finish\] をクリックします。

4.  [Navigator] ウィンドウに作成した新規プロジェクトが表示されます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/20250801_3_MD.png" title="新規プロジェクト" width="500" >}}

## シーン ファイルの作成

プロジェクトを作成したら、シーン ファイルを作成します。
データを追加した状態でシーンを保存すると、いつでも保存した状態のシーンを開き直すことができます。

1.  [Navigator] ウィンドウにあるプロジェクトから scenes フォルダーを右クリック → \[New\] → \[CityEngine Scene\] を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/20250801_4_123_MD.png" title="[CityEngine Scene] を選択" width="700" >}}

2.  \[CityEngine Scene\] ダイアログで、[Project folder:] でシーンを保存するフォルダーを指定します。
<br>特別な理由がない限りはデフォルトの場所に保存することをお勧めします。
    フォルダーを変更する場合は、\[Browse\] ボタンからシーン ファイルを保存するフォルダーを指定します。

3.  [File name:] で、シーン ファイルに名前をつけます。
    ここでは「MyScene1.cej」と名付けます。
    <br>※シーンファイルの拡張子は「.cej」です。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/5MD2.png" title="シーン ファイルに名前を付ける" width="700" >}}


4.  [Coordinate System:] の \[Choose\] ボタンから座標系を指定します。
    CityEngine で使用できる座標系は投影座標系のみです。
    GIS データなどすでに特定の地理的な座標系を持っているデータがある場合は、同じ座標系をシーンに指定します。
    <br>今回は、Projected Coordinate Systems フォルダー → World フォルダー から、一般的な WEB マップで使用されている [WGS 1984 Web Mercator (auxiliary sphere) ] を設定し、[OK] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/6%EF%BD%9E7_240717_v2.png" title="座標系の指定" width="900" >}}

5.  \[Finish\] をクリックします。
    \['my_city.cej' has been modified. Save changes? (\'my_city.cej' が変更されています。保存しますか？) \] というメッセージが表示されたら [Yes] をクリックします。これは前回のプロジェクトのシーンを保存するかどうかを聞いています。

6.  ファイルを作成したら、[Navigator] ウィンドウの scenes フォルダーの下に作成したシーン ファイルがあることを確認します。
    また、3D View ウィンドウは空の状態になっているはずです。

{{< callout >}}

マップにグリッドを表示したい場合は、3D View ウィンドウ ツールバーの [View settings] をクリックし、[Grid] にチェックをいれることで有効化します。
{{< /callout >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/MD_240722_p1.PNG" title="デフォルトの 3D View ウィンドウ" width="900" >}}


## データの新規作成

CityEngine では GIS データなどの外部のデータをインポートしてそのまま利用することもできますが、自分でデータを一から作成することも可能です。

1.  ツールバーより \[Street creation tools\] をクリックし、\[Polygonal Street Creation\] ウィンドウで \[Polygonal street creation\] または \[Freehand street creation\] ツールをクリックします。

2.  3D View ウィンドウ上で区画ができるようにラインを何本か描画します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/MD_240722_p2.PNG" title="区画の描画" width="900" >}}

また、[Move]、 [Scale]、 [Rotate] ツールなどを用いて自由に編集しても構いません。
さらに [Edit streets/curves] ツールを用いることで道路幅などを変更して車線を増やしたり、カーブをつけたりすることができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/10.png"  title="道路ネットワークを作図して、区画ができると自動的に区画シェープが作成される" width="900" >}} 

{{< callout >}}

道路端部は、[Inspector] ウィンドウで [Nodes] タブの [Type] にて変更可能です。
また、端部の違いによる演習への影響はありません。

{{< /callout >}}

<br>今回、区画シェープは使用しないので、[Scene] ウィンドウの Streetnetwork レイヤーを展開し、Blocks レイヤーのチェックをはずして非表示にします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/11_MD_2.png" title="Blocks レイヤーの非表示" width="500">}}
次に、建物用にポリゴン シェープを新規作成します。


3.  ツールバーより [Shape drawing tools] をクリックし、[Polygonal Shape Creation] タブの[Polygonal Shape Creation] や [Rectangular Shape Creation] ツールを使用して、任意の場所に図形を 3 つ以上作図します。ここでも図形の移動や方向転換に [Move]、[Scale]、[Rotate] ツールなどを用いるといいでしょう。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/basic-operation/20240722_p13.png" title="ポリゴン シェープ作成" width="900" >}}
    

## ルール ファイルの適用

シェープを作成したら、次はルール ファイルを適用します。
今回は CityEngine にあらかじめ付属されているライブラリ Esri.lib のルール ファイルを使用します。

まずは、Esri.lib のルール ファイルを更新します。

1.  \[File\] メニュー → \[Manage ESRI.lib\...\] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/13_MD.png" title="[Manage ESRI.lib...]" width="500" >}}


2.  インストールされていないルール ファイルのチェックボックスが自動的にオンとなっています。
    このまま \[Update\] をクリックします。
    
{{< callout >}} 
    
以前のバージョンをインストールしていた場合や、以降の手順において、テクスチャがうまく反映されない場合は、\[Esri.lib\] チェックボックスもオンにして \[Update\] を実行してください。
{{< /callout >}}

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/20250801_14_MD.png" title="ルール ファイルの更新" width="700" >}}

自動的にウィンドウが閉じたら、ルール ファイルの更新は完了です。
<br>では、道路ネットワークのルール ファイルを適用してみましょう。

3.  [Scene] ウィンドウの Streetnetwork レイヤーを展開し、Network レイヤーを選択します。
    右クリック → \[Select Objects\] を選択します。
    道路ネットワークがすべて選択されます。

4.  [Navigator] ウィンドウ → [ESRI.lib] → rules フォルダー → [Streets] → [Street_Modern_Standard.cga] を選択し、道路ネットワークの中心線上にドラッグ & ドロップします (中心線がオレンジ色になったらマウスボタンを放します)。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/15_MD_2.png" title="道路のルールファイルが適用されたことにより、道路モデルが作成される" width="900" >}}

    <br>次に建物のルール ファイルを適用します。
    建物のルール ファイルは 3 つ用意されています。
    Building_From_Footprint.cga は主に建物のフットプリントなど、平面シェープがあるときに使用します。
    対して、Building_Mass_Texturizer.cga は主に立体シェープがあるときに使用します。
    また、Building_From_OpenStreetMap.cga は Get Map Data 機能でダウンロードした OpenStreetMap データに使用します。

5.  [Navigator] ウィンドウ → \[ESRI.lib\] → rules フォルダー → \[Buildings\] → \[Building_From_Footprint.cga\] を建物用シェープの 1 つにドラッグ & ドロップします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/16_2.png" title="建物のルール ファイルを適用" width="900" >}}


6.  続いて [Navigator] ウィンドウ → \[ESRI.lib\] → rules フォルダー → \[Buildings\] → \[Building_Mass_Texturizer.cga\] を建物用シェープにドラッグ & ドロップします。
    今回は立体シェープがないので、高さがない平面の状態でルールが適用されます。

7.  ツールバーより \[Push Pull tool\] ツールをクリックし、カーソルを建物用シェープの上に当てます。

8.  シェープの中央にオレンジ色の球体が表示されるので、球体をクリックし、ホールドしたままカーソルを上にドラッグします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/17_18_MD.png" title="任意の高さのビルを作成" width="900" >}}

9.最後にもうひとつルールを適用してみましょう。 [Navigator] ウィンドウ → [ESRI.lib] → rules フォルダー → [Plants] → [Plant_Distributor.cga] を区画シェープにドラッグ & ドロップします (区画シェープにルールを適用する場合は、[Scene] ウィンドウの Streetnetwork レイヤーを展開し、Blocks レイヤーのチェックボックスをオンにします。)
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/19_MD_2.png" title="敷地に樹木がランダムに配置される" width="900" >}}

{{< callout >}}

Esri.lib に格納されているルール ファイルには、あらかじめパラメーターがいくつか設定されています。
[Inspector] ウィンドウを開き、パラメーターを変更してみましょう。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/20_2.png" title="樹木のシェープを変更" width="900" >}}
例：樹木のシェープを選択し、[Inspector] ウィンドウの [Plant] → [Representation] パラメーターを [Realistic] から [Schematic] に変更
{{< /callout >}}


10. \[File\] メニュー → \[Save\] でシーンを保存します。

本項目では、プロジェクトを新規作成し、道路ネットワークやシェープなどのデータの作成、ルール ファイルを適用するまでの流れを学習しました。
これは CityEngine のメイン ワークフローであり、とても重要です。
[CGA の作成]({{% ref "/cityengine/get-started/quickstart-tutorials/create-cga" %}} "CGA の作成")では、CGA ルール ファイルの作成方法を学習します。

## 補足 Get Map Data でデータをダウンロード

Get Map Data 機能は、ArcGIS Online から世界中の街の中から選択した任意の範囲の [OpenStreetMap](https://www.openstreetmap.org) の地図データや衛星画像などを切り出してダウンロードし、プロジェクトで利用できる便利な機能です。

1.  プロジェクトを作成し、シーン ファイルを作成します ([シーン ファイルの作成](#シーン-ファイルの作成)参照)。

2.  \[File\] メニュー → \[Get Map Data\] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/21_0_MD.png" title="[Get Map Data]" width="500" >}}


3.  ArcGIS Online アカウントでサイン インします (アカウントを持っていない場合は、[アカウントを作成](https://doc.arcgis.com/ja/arcgis-online/reference/create-account.htm)してサインインします)。

4.  左上の検索ボックスに、移動したい場所 (住所やランドマーク) を入力します。

5.  \[Set Extent\] をクリックして範囲選択ボックスを表示し、切り出したい範囲を指定します。

6.  ダウンロードしたいデータを指定し、\[OK\] をクリックし、ウィザードに従って進みます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/21_MD_edited3.png" title="ダウンロードしたいデータを範囲選択" width="900" >}}

7.  ダウンロードが終わると自動的にシーンに追加されます (このダウンロードには ArcGIS Online の[クレジット](https://doc.esrij.com/online/users-guide/credits/use/use-credits/)を消費しません)。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/22_2.png" title="選択した部分がシーンに追加される" width="900" >}}

8.  Get Map Data をダウンロードすると自動的にBuilding_From_OpenStreetMap.cga が自動的に適用されており、[Inspector] ウィンドウにおいて、ルールのパラメーター (属性) を変更することができます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/get-started/quickstart-tutorials/create-project/23_MD_2.png" title="任意のパラメータに変更" width="900" >}}

{{< callout >}} 

OpenStreetMap は、米国 Esri 社および ESRIジャパンが作成している地図データではなく、OSM コミュニティが作成して、公開しているデータです。
その詳細度やレイヤーの種類、格納されているデータの内容は地域によって異なります。
そのため、ダウンロードした地域によっては、ここで紹介した手順と同じ処理が実行できない可能性があります。
{{< /callout >}}