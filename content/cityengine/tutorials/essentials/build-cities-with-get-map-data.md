+++
title = "Get Map Data を使った都市モデルの構築"
description = "Get Map Data の使い方を学習します。"
Weight = 2
alwaysopen = false
publishDate = 2023-07-11T00:00:00+09:00
draft = false
author = "則貞"
+++


チュートリアル データは、**\[Help\] メニュー** → **\[Download Tutorials
and Examples...\]** を選択し、\[CityEngine Tutorial\]
からダウンロードできます。

このチュートリアルは、Houseal Lavigne Associates の Devin Lavigne 氏との共同作業で作成されました。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-4C139263-DC50-41DB-A8DF-9BAA2FED5196-web.png" title=" " width="700" >}} 

## 概要

都市計画立案者や設計者によくある依頼には、推奨事項やアイデアを示したり、図解したりすることがあります。例えば、ドイツのベルリンの中心で計画を進めている立案者が、シュプレー川沿いの工業用地と大規模な路面駐車場を再開発に推すことがあります。川沿いの環境と繁華街に近いことから、この場所は複合用途開発に適しています。<br>

提案のメッセージを伝えるために、立案者はしばしば地域社会と協力し、地域のビジョンを明確にするためのビジュアルを提示します。地域社会で計画が採択されると、不動産所有者や開発予定者は建築家を招き、その土地のより詳細な計画や提案を作成し、地域社会のビジョン達成を支援することができます。<br>

どちらのシナリオでも、設計者は 3D コンセプト プランを作成します。この 3D コンセプト プランには、敷地の計画と周囲の都市背景が含まれます。このチュートリアルでは、CityEngine と一般公開されている GIS データを活用して、このタイプのビジュアライゼーションを作成するワークフローを学習します。主な手順は次のとおりです。

|演習|
|:--|
|・[データの取得](#データの取得)|
|・[建物の生成と修正](#建物の生成と修正)|
|・[グラフ ネットワークと道路のクリーンナップ](#グラフ-ネットワークと道路のクリーンナップ)|
|・[地形の利用](#地形の利用)|
|・[シナリオの作成](#シナリオの作成)|


## データの取得

### シーンを開く

このチュートリアルでは、空の **GetMapData.cej** シーンを使って始めます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-83B2937E-037A-4D6C-8598-848497844FA2-web.png" title=" " width="500" >}} 

### ArcGIS Online にサイン イン

最初のステップでは、ベルリン中心部の地図データを取得します。**[Get Map Data]** ツールを使用するためには、ArcGIS Online にサイン インしている必要があります。**[Not signed in]** ドロップダウン メニューをクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-D23C3DB4-96EA-4D76-B121-B89C5F38BE19-web.png" title=" " width="300" >}} 

**[Sign In]** をクリックして、**[ArcGIS Sign in for CityEngine]** ダイアログ ボックスを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-BFA7452C-CAF1-4CA8-93D2-182951B048F1-web.png" title=" " width="500" >}} 

ArcGIS Online のユーザー名とパスワードを入力してサイン インします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-02BE3B67-CEDE-4882-93AC-0658D7538EF7-web.png" title=" " width="300" >}} 

### Get Map Data

次に、**[File] メニュー** → **[Get Map Data]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-0AD7C7EF-576E-465C-A12E-063514B0A8BC-web.png" title=" " width="500" >}} 

**[Get Map Data]** ダイアログ ボックスが表示され、「Berlin Cathedral, Berlin, DEU」と検索できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-F4258049-9685-4733-9733-3D34899EB4F6-web.png" title=" " width="700" >}} 

地図上でその位置をズームします。<br>

次に、**[Set Extent]** をクリックします。ダウンロード範囲を指定する調整可能な長方形の選択ボックスが表示されます。正確な結果のために下記の座標値をコピー アンド ペーストします。この定義された範囲において、ブックマークを使ってベルリン内を移動するため、座標値を入力することは重要です。
* **Width**: 9177.662
* **Height**: 5692.849
* **X-Offset**: 1487196.025
* **Y-Offset**: 6892058.511
<br>

これらの座標値は、Web メルカトル座標系と一致します。座標系は、シーンを開いた後、自動的に UTM 座標系に変更されます。**[Fixed ratio]** ボタンと下の **[Reference Point]** オプションを無効にし、長方形の基準点が左下に設定されていることを確認します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/fixed_ratio_button_reference_point_option.png" title=" " width="500" >}} 

**Esri World Elevation** の下の地形の **[Resolution]** 設定を **Medium (2k)** から **High (4K)** に変更できます。その他の設定はそのままにします。**[OK]** をクリックして、ダウンロードを開始します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-58548102-5825-4C95-A8FF-82075DF6D08B-web.png" title=" " width="500" >}} 

{{< callout >}}

・地図で標高データを取得するには、[ArcGIS Online の組織アカウント](https://doc.arcgis.com/ja/arcgis-online/get-started/create-account.htm)が必要です。<br>
・ダウンロードに問題がある場合は、**/maps/Terrain_Imagery_Final/** チュートリアル プロジェクト フォルダーに必要なデータがあります。そこから、**eleavation.tif** と **map.osm** ファイルをシーンにドラッグ アンド ドロップします。

{{< /callout >}}

### インポート設定

設定を変えることで、インポートや後処理の動作が異なり、CityEngine を使いこなすことで、それぞれの設定が何をするのか、より深く理解できるようになります。このセッションでは、主にデフォルト設定を使用しますが、1 つ例外があります。[highway] カテゴリを展開し、[tertiary] のチェックボックスがオンになっていることを確認してから **[Finish]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-3C8217E3-2857-4AE1-8E3E-0E26A585E3BA-web.png" title=" " width="500" >}} 
<br>

## 建物の生成と修正

次のセクションでは、建物を生成し、さまざまなスタイルに修正する方法を学習します。

### 建物の生成

**[Get Map Data]** ダイアログ ボックスの **[Generate models for downloaded shapes]** チェックボックスをオンにしたことで、建物のフットプリントに **Building_From_OpenStreetMap.cga** ルール ファイルが適用されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-B00A42ED-401D-4732-AECF-59A5A5584CC6-web.png" title=" " width="700" >}} 

ルール ファイルは、CityEngine に含まれており、**ESRI.lib** 内にあります。

{{< callout >}}

**ESRI.lib** フォルダーには、**Building_From_Footprint.cga** という同様のルールがあり、GIS データを含む他のソースからのフットプリント形状でも機能します。

{{< /callout >}}

### 外観の概略図

シーンの中心に少しズームします。ナビゲーション オプションの概要については、[3D navigation essentials](https://doc.arcgis.com/en/cityengine/latest/help/help-3d-navigation.htm) を参照してください。<br>

**Building_From_OpenStreetMap.cga** ルールを建物に適用すると、デフォルトでは、建物が白色になります。次に、建物のスタイルを変更します。**[Scene Editor]** ウィンドウで、**Footprints** レイヤーを右クリックし、**[Select Objects]** をクリックして、すべてのフットプリントを選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-809C9D08-A14A-4F92-89A0-49CD08293359-web.png" title=" " width="500" >}} 

建物フットプリントを選択した状態で、**[Inspector]** ウィンドウの **[Representation]** ボックスをクリックして、「**schematic facades**」に変更します。これにより、壁に外窓を作成するように CGA ルールに指示し、各フットプリントに対して異なるパターンと色が割り当てられます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-F16E407A-82BA-4E37-BC47-C9203D5FFACA-web.png" title=" " width="700" >}} 

ズームすると、**schematic facades** が適用された建物との違いが確認できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-B746E0FF-B6AC-41BC-B24B-8EF4169745F3-web.png" title=" " width="500" >}} 

### リアルな外観

フットプリントを再度選択し、次は **[Representation]** の値を「**Realistic with facade textures**」に変更します。この値によって、CGA が外観の異なる画像やテクスチャを建物にランダムに割り当て、都市をよりリアルな外観にします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-2390ABC6-EF93-425C-BD07-BCD31F35630B-web.png" title=" " width="500" >}} 

ランダムなテクスチャの割り当てであるため、建物のタイプと必ずしも一致しませんが、ズームアウトすることでリアルな街の概観が得られます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-8BE906B2-BF77-43A1-B47F-6B436D4279CB-web.png" title=" " width="500" >}} 

### 建物を白に変更

最後に、次のステップに進む前に、建物の **[Representation]** 値をすべてデフォルトの白に戻します。これは開発のビジュアライゼーションにおいて使われる一般的な手法です。フルカラー モデルで、シーンの主役となる計画案や開発案を示し、既存の建物を白や控えめな色で表示することで、計画案の周辺の背景を調整し、メインとなる案に注目させます。ここまでのステップは、CityEngine のデフォルト ライブラリ (ESRI.lib) で利用可能なルール ファイル内のオプションを紹介するためのものです。

### 主要建物のソリッド カラー

**[Bookmarks]** の **[Bookmark 1 - Fernsehturm Berlin]** をクリックするか、「0」を押して、ベルリンの中心地にあるテレビ塔のベルリン放送局に移動してします。周囲の建物の詳細を確認します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/bookmarks.png" title=" " width="700" >}} 

建物の形状の [Object Attributes] 内のデータは、**Building_From_OpenStreetMap.cga** ルールによって読み込まれます。また、詳細なジオメトリ情報がある場合、ルールはその形状に対して、単純な押し出し (LOD1) ではなく、より複雑なモデル (LOD2) を生成することができます。<br>

テレビ塔のモデルを選択し、**[Representation]** 属性値を「**solid color**」に変更します。アンテナの上部が真っ赤になります。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-FD8A177A-D674-4E0C-A31E-EB5697076949-web.png" title=" " width="500" >}} 

{{< callout >}}

OSM データはコミュニティによる取り組みであるため、データの質や情報量にはかなりのばらつきがあることに留意してください。色情報が存在する場合もあれば、Representation の属性が Solid color に設定されていても、建物が white で表示される場合もあります。

{{< /callout >}}

続いて、[Bookmarks] の **[Bookmark 2 – Berlin Cathedral]** をクリック (もしくは「1」を入力) します。ここでは、OSM の建物のフットプリントに保存されている LOD2 データを活用して、CityEngine で建築的にリッチな 3D 建物を自動的に作成できるもう 1 つの例を紹介します。<br>

テレビ塔の時と同様に大聖堂を選択し、**[Representation]** の値を「**solid color**」に変更します
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-B7B38897-B771-4CBC-ADC7-BEF819AE660D-web.png" title=" " width="500" >}} 

この時点で、ブランデンブルク門や主要な駅など、シーン内の他の主要な建物の色を変えることができます。完成すれば、大部分の建物が白で、いくつかのランドマークが特別な色のシーンになるはずです。<br>

次に様々な道路のクリーンナップ方法について学習します。

## グラフ ネットワークと道路のクリーンナップ

多くの場合、OSM データをインポートした後に、道路ネットワークをクリーンナップする必要があります。インポート時、CityEngine では、OSM データをグラフ ネットワークと呼ばれる独自の表現モデルに変換します。グラフ ネットワークは、ノードとセグメントで構成されており、その形状は都度、設定することで作成することができます。最も一般的なエラーが交差点に発生し、ノードが近接して配置されていたり、中心線や道路情報が欠落していたりします。

{{< callout >}}

グラフ ネットワークと道路の形状の問題を修正するために実行できるツールがいくつかあります。このワークフローで最も一般的なツールが、[[Cleanup Graph](https://doc.arcgis.com/en/cityengine/latest/help/help-cleanup-streets.htm)] ツールと [[Simplify Graph](https://doc.arcgis.com/en/cityengine/latest/help/help-simplify-graph.htm)] ツールです。これらのツールは、大体の道路の問題を修復するための自動的な方法を提供します。インポート時に有効にできますが、一部のセグメントに選択的に適用したい場合は、メニューからこのプロセスをトリガーとすることもできます。<br>

どのワークフローが最も効果的かは、インポートされたデータの品質に依存するため、明確な答えはありません。自動クリーンナップが非常に良い結果をもたらす場合もあれば、状況を悪化させる場合もあります。通常、様々な方法を組み合わせて適用することになりますが、このチュートリアルではそのいくつかの方法をご紹介します。

{{< /callout >}}

### 道路と歩道の幅を変更

道路と歩道の幅は、OSM データのインポート時に自動的に設定されます。このチュートリアルでは、クリーンナップの量を最小限にするために、歩道を削除し、道路の幅を狭くします。道路の幅を変更するには、**[Street Network]** レイヤーを右クリック → **[Select Objects]** をクリックし、道路ネットワーク全体を選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-75A1B13F-CA8E-4B82-93D4-A845891D0A8D-web.png" title=" " width="500" >}} 

**[Inspector]** ウィンドウで **[Segment]** タブがアクティブになっていることを確認し、**[Segment Parameters]** を以下に変更します。
* **Segment Width**: 9
* **Lane Width**: 4
* **Left Sidewalk Width**: 0
* **Right Sidewalk Width**: 0
<br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-C65344FB-AE2B-42D8-B9F6-29BB22DB8199-web.png" title=" " width="500" >}} 

このセグメントのような動的な形状は、新しいパラメータに応じて調整されます。上と下のスクリーンショットを比較すると、見てわかるようにずっとシンプルな道路になっています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-C602A865-5B4C-497E-A3C6-CFB4ABAD9C3D-web.png" title=" " width="500" >}} 

### ルール ファイルの変更

建物のフットプリントと同様に、道路にもインポート時にルールが割り当てられます。この場合、デフォルトの **Street_Modern_Standard.cga** ルールを、同じく ESRI.lib の一部である **Street_Modern_Simple.cga** ルールに変更します。<br>

すべての道路が選択されていない場合は再度選択し、メイン メニューの **[Shapes]** → **[Assign Rule File]** をクリックし、**[Assign Rule File]** ダイアログ ボックスを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-4589FD61-E8BE-4765-A2CB-1159D111F0B8-web.png" title=" " width="700" >}} 

次に、CityEngine のワークスペース全体が表示されるように 2 つ上の階層に移動し、**/ESRI.lib/rules/Streets/** フォルダーを参照します。**Street_Modern_Simple.cga** ルールを選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-AEE66CA8-3156-44BE-AAD1-D6E05ABAB1C4-web.png" title=" " width="300" >}} 

新しいルールで道路ネットワークを再生成するには、**[Open]** をクリックします。すぐにわかる主な違いの 1 つが、横断歩道がなくなったことです。<br>

すべての道路形状を選択したまま、**[Inspector]** ウィンドウで **[Segment]** を以下の属性値に変更します。

* **NbrOfRightLanes**: 0
* **Centerline**: white
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-9022BD79-146D-4C09-B70C-B85377B354C1-web.png" title=" " width="500" >}} 

この変更により、センターラインは連続した黄色から破線の白線となり、道路は 2 車線のみとなります。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-E0E3B378-C25D-4E9B-84B9-B629E9A3DFCB-web.png" title=" " width="500" >}} 

### グラフ編集のためのシーンを準備

はじめに、**[Visibility settings]** で **[Graph Networks]** と **[Shapes]** が表示されていることを確認します。**[Map Layers (ベースマップ画像)]** をクリックするか、「F9」を押し、**[Models]** をクリック (もしくは「F12」を入力) し、それらの表示をオフにします。また、**[Scene Editor]** ウィンドウで **[Footprints]** レイヤーを非表示にします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/visibility_settings.png" title=" " width="700" >}} 

これにより、グラフ ネットワークが分離され、エラーの可能性がより明確になります。

### 道路のクリーンナップ

**[Bookmarks]** より **[Bookmark 3 – Street Repair]** をクリックするか、「2」を押します。下図のようなものが表示されるはずです。赤い線は、相反する図形と目に見える道路の隙間を示しています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-1E469E3F-1144-4B5B-9FF8-38812DD96776-web.png" title=" " width="700" >}} 

**[Cleanup Graph]** ツールを使用するには、**[Select]** ボタンをクリック (もしくは「Q」を入力) し、**[Tool Options]** ウィンドウで **[Lasso Select]** ツールをクリックして、中心のエリアの道路セグメントを選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/cleanup_graph.png" title=" " width="300" >}} 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-C73D5446-E1B8-40CB-81E3-4684EAE291E3-web.png" title=" " width="500" >}} 

次にツールバーの **[Cleanup Graph]** ツールをクリックするか、メイン メニューの **[Graph] メニュー** → **[Cleanup Graph]** をクリックして、**[Cleanup Graph]** ダイアログ ボックスを開きます。ポイントの [Vertical Merge Distance] と [Horizontal Merge Distance] でマージ距離を指定し（ポイント同士が近い場合、マージされます）、赤の破線で示された競合する形状を解決するために **[Resolve Conflicting Shapes]** チェックボックスをオンにします。**[Finish]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-A57FBE44-F4B4-4E50-B600-709DE8F2F752-web.png" title=" " width="500" >}} 

結果は下図のようになるはずです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-50839E9E-7A51-4244-847E-7E25604ABDB7-web.png" title=" " width="700" >}} 

選択された道路のノードの数が減り、交差点の赤いエラー マーカーが削除されました。これは、CityEngine が、選択したすべての道路形状の再設定ができたことを指します。次のセクションに進む前に、シーンの他の部分のクリーンナップを続けることができます。<br>

次に、地形を使ってよりリアルなシーンを作成します。

## 地形の利用

チュートリアルのこのセクションでは、「F9」と「F12」を押して、**Map Layers** と **Models** の表示を再度オンにします。次に [Bookmarks] より **[Bookmark 4 - Terrain Editing]** をクリック (もしくは「3」を入力) して移動します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-DCF10298-14D2-43A0-A09A-326BB86B48FD-web.png" title=" " width="700" >}} 

地形が道路より高くなっている場所がいくつかあるほか、道路のひとつが実は公園の下を通るトンネルになっている箇所があります。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-4DE3699B-4642-4317-8CE9-CF0FC91530BF-web.png" title=" " width="500" >}} 

### トンネル道路の削除

CityEngine の地形は、ハイトマップに基づいており、このアプローチの利点には、特に大きなエリアに対するパフォーマンスに優れていることがありますが、欠点の 1 つは穴を表現できないことがあります。つまり、トンネルを適切にモデリングする方法がありません。そのため地下にある道路のセグメントを削除することになります。<br>

トンネルは公園エリアの南側にある交差点の少し後から始まり、主要駅まで続いています。<br>

**[Select]** ツールを使って、2 つの交点間の大きな部分を矩形で選択し、[Delete] キーを押して選択したセグメントを削除します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-77B091DF-F92D-4862-935B-7DF2648BA9E0-web.png" title=" " width="700" >}} 

トンネルに沿って、道路の一部を削除しながら作業を続けます。交差点では、トンネルのセグメントだけを注意深く選択します。[Shift] キーを押しながらクリックするか、**[Selection Tool]** オプション ウィンドウで **[Add]** モードに変更すると効果的です。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/add_mode.png" title=" " width="300" >}} 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-8660E6F4-ACB2-44B2-95FE-90E6BBFE5EBC-web.png" title=" " width="700" >}} 

完了したら、下図のようになるはずです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-313E5934-AA45-4079-A081-0E75B4E94837-web.png" title=" " width="500" >}} 

### 地形の高さの調整

次に、地形がこれ以上重ならないように、道路の形状の高さを調整します。公園を横切る長い道路にズーム インして、地形が重なっている道路をいくつか選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-1F3A4E87-33E6-4B2F-94F0-C199620AE7B7-web.png" title=" " width="700" >}} 

ツールバーの **[Align terrain to shapes]** ツールをクリックします。これは、上記の **[Cleanup Graph]** ダイアログ ボックスと同様に、現在の選択範囲に対して機能するダイアログ ボックスを開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/align_terrain_to_shapes.png" title=" " width="300" >}} 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-9070C14A-0D9A-4689-9A74-AAE45EBA704F-web.png" title=" " width="500" >}} 

すべてをデフォルト値のままにして、**[Apply]** をクリックします。ダイアログを閉じると、地形が適切に調整されています。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-38E7D821-2E3D-4213-8C57-66A6C06658B7-web.png" title=" " width="700" >}} 

{{< callout >}}

シーン内のすべての形状を選択して、これと同じツールで地形を調整することもできますが、結果に満足できない領域に対して調整が生じてしまう可能性があります。このチュートリアルの逐次的なアプローチによって、結果をよりコントロールすることができます。

{{< /callout >}}

### Terrain Edit Brush を使った地形の微調整

ズーム インすると、至近距離でもわずかな重なりを見つけることができます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-DB86C2E0-06F9-41DC-81B1-96842E28970D-web.png" title=" " width="500" >}} 

CityEngine では、ブラシを使って地形を修正し、必要な高さに変更することもできます。**[Terrain Edit Brush]** ツールをクリックして、**[Terrain Edit Brush]** ツール オプションでオプションを変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/terrain_edit_brush.png" title=" " width="300" >}} 

地形の正確な標高を取得するには、**[Elevation Picker]** のトグル ボタンをオンにします。カーソルを地図上に移動し、クリックして標高を選択します。道路の下の地形を低くするために、地図上の低い地点を選択します。マップのこの部分は、38m 程度の高さが丁度良いです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-6D064AEE-1DDA-43B1-AED8-692AB2DF1FC7-web.png" title=" " width="700" >}} 

標高を選択すると、**[Terrain Edit Brush]** ツールがアクティブになります。クリック アンド ドラッグで地形を塗りつぶすようにし、ピッカーで選択した高さに標高を編集することで、その **Height** 値で表示されるようになります。道路が地面より下にある部分がなくなるまで、道路上に対してこの作業を行います。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-BE0A0F07-64F8-463F-8ED7-12A6ABE6D2AF-web.png" title=" " width="500" >}} 

公園エリアで重なっている他の場所の地形の編集を繰り返します。編集が終わったら、[Bookmarks] より **[Bookmark 4 - Terrain Editing]** (もしくは「3」を入力) に移動します。下図のようになるはずです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-6064C75B-4000-48B7-AA02-28433F46D675-web.png" title=" " width="700" >}} 


## シナリオの作成

次のセクションでは、再開発の可能性について 2 つのシナリオを作成します。

[シナリオ](https://doc.arcgis.com/en/cityengine/latest/help/help-scenarios.htm)では、1 つのシーン内で複数のデザインを作成し、それらを比較することができます。シナリオを異なるビューに並べて表示し、視覚的に比較することができます。<br>
シナリオは、建物、道路、地形などのオブジェクトを含むレイヤーで構成することができ、シナリオがアクティブな場合にのみ表示されます。特定のシナリオだけに影響するカスタム変更も、すべてのシナリオに適用できるグローバル変更も可能です。これらは、1 つのシーンに複数のデザイン案を保存する方法を提供します。さらに、複数のシナリオを持つことは、Unreal Engine と 360 VR Experience でサポートされています。

### 現況シナリオの作成

[Bookmarks] より **[Bookmark 5 – Spree River Redevelopment Site]** (もしくは「4」を入力) に移動し、**[Scene Editor]** ウィンドウで **[Footprints]** レイヤーの表示を戻します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-0D684537-BE63-4842-BCDD-0E1C66584FC6-web.png" title=" " width="700" >}} 

初期シナリオを作成するために **[Scene Editor]** ウィンドウの **[Add new scenario]** ボタンをクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-1E2C02DB-88E5-432C-80F1-18F79C2F4976-web.png" title=" " width="500" >}} 

**[New scenario]** ダイアログ ボックスが表示されます。シナリオ名を「**Existing Conditions**」にし、**ID** タグを「**EC**」に変更します。**[OK]** をクリックすると、新しいシナリオが自動的にシーン上のアクティブなシナリオになります。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-CA515073-6E79-40E3-BAAD-E7D9627CB927-web.png" title=" " width="500" >}} 

### 既存の建物を現況シナリオに移行

作成するシナリオは、川沿いの遊休地の再開発の可能性を探るものです。三角形の敷地にある 6 つのフットプリントを選択し、Ctrl+X を押すか、右クリックして **[Cut]** を選択してフットプリントを切り取ります。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-9E6B9694-74A7-4969-ACD6-571C2F6B989F-web.png" title=" " width="500" >}} 

ここで、Ctrl+V を押すか、**[Scene Editor]** ウィンドウで右クリックし、**[Paste]** を選択してフットプリントを貼り付けます。新しい **[Footprints Paste]** レイヤーが作成されます。**[Inspector]** ウィンドウで、名前を「**Redevelopment Footprints**」に変更します。レイヤーがどのシナリオに属しているかは、**[Scenario]** の横にあるシナリオの色で確認できます。

レイヤーの種類とシナリオ メンバーシップを管理するには、**[Edit]** をクリックして **[Edit Scenarios Membership]** ダイアログ ボックスを開きます。**[Existing Conditions]** チェックボックスがオンになっていることを確認し、[OK] をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-896D4EF3-4328-4081-A8DB-148037CF73E1-web.png" title=" " width="500" >}} 

### 再開発シナリオ A の作成

別のシナリオを作成し、「**Scenario A**」と名付け、**ID** を「**A**」に変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-B4025B82-B116-446F-B334-B22584CCE1DE-web.png" title=" " width="500" >}} 

新しい **Scenario A** がアクティブなシナリオとして設定されているため、**Existing Conditions** シナリオに移動した建物は非表示になり、空きエリアが残ります。

この空いたスペースをもう一度塗りつぶします。**[Polygonal Shape Creation]** ツール (もしくは「Ｓ」と入力) に切り替え、新しい区画形状を作成します。左側の既存の建物のすぐ横から始め、その周囲を回り込むように作業を続け、高架鉄道の線路に沿って右側の既存の建物の手前の道路まで戻り、道路沿いに最初の点をクリックして形状を完成させます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/polygonal_shape_creation.png" title=" " width="500" >}} 
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-9262E029-56B3-4C7A-AA3C-D5E9B5E62C24-web.png" title=" " width="700" >}} 

開発エリアの地形は完全に平坦ではないため、新しく作成した区画が地形と重なっている箇所があります。**[Align terrain to shapes]** ツールを使用して、区画の下の地形を調整します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-3BA3D75E-AB98-4947-B352-C603C03AE2F4-web.png" title=" " width="700" >}} 

**[Scene Editor]** ウィンドウで新しいレイヤーの名前を「**Parcel**」に変更し、整理します。

次に、**[Navigator]** ウィンドウで rules フォルダーを展開し、**UrbanBlocks.cga** ルールを区画にドラッグ アンド ドロップします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-A570AE53-9488-4519-80DB-F0B0BE4F7983-web.png" title=" " width="500" >}} 

デフォルトでは、区画に 2 つの建物ブロックが作成されます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-41FAC0EB-CE6C-4511-A133-981BA3538B4F-web.png" title=" " width="500" >}} 

**[Inspector]** ウィンドウでさまざまな属性を調整し、デザイン案を作成します。最大 6 つのブロックを選択でき、ブロックの幅、高さ、長さ、ブロック間の隙間を個別に設定できます。**[general]** では、その他の設定、特に最初のブロックの開始位置 (**patternOffset**)、区画のセットバック (**SetbackDepth**)、色の値 (**BlockColor**) を定義できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-657E152D-B197-4861-A3EA-1693DB787383-web.png" title=" " width="500" >}} 

属性を調整した後、シーンは下図のようになるはずです。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-723595DF-1473-4461-AE1F-396B1F6193D2-web.png" title=" " width="700" >}} 

結果に満足したら、用地に樹木を追加していきます。**ESRI.lib** には多くの樹木のタイプが用意されています。**[Navigator]** ウィンドウで、**/ESRI.lib/assets/Webstyles/Vegetation/Realistic/** フォルダーを探し、樹木を 1 つ選んでシーンにドラッグ アンド ドロップします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-3A8C76B6-664B-47FF-A758-8E4DED28E2D2-web.png" title=" " width="500" >}} 

樹木はポインターの位置に生成されます。事前に樹木をプレビューしたい場合は、ファイル名を右クリックして、**[File Preview]** を選択すると、小さなプレビュー ウィンドウが開きます。

ドラッグ アンド ドロップ、または既存の樹木のコピー アンド ペーストで、樹木をどんどん追加します。変形ツールを使って、サイズや向きにバリエーションを作ることができます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-F2D36EB4-4C26-4AF9-A77F-724794A6659D-web.png" title=" " width="500" >}} 

### 再開発シナリオ B の作成

代替案を作成するには、**[Scene Editor]** ウィンドウで **Scenario A** を右クリックし、**[Duplicate]** を選択します。**[Duplicate scenario]** ダイアログ ボックスで、**Scenario B** と名付け、ID を **B** に変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-2FF4AC38-9926-4BE2-BD11-E069CE8347B7-web.png" title=" " width="500" >}} 

新規シナリオ作成時と同様に、複製されたシナリオは自動的にアクティブなシナリオに設定されます。区画を再度選択し、**[Inspector]** ウィンドウで、このバリアントの属性を調整します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-EF032795-B1DC-49EC-ACB2-2AC769A3ED54-web.png" title=" " width="700" >}} 

変形ツールを使って、**Scenario A** から複製した樹木を、代替案に合わせて並べ替えます。
また、[Delete] キーで樹木を削除したり、前述のように新しい樹木を追加したりすることで、樹木の本数を変更することもできます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-3C8858B3-941F-4A3F-9FD2-2312BCC62137-web.png" title=" " width="500" >}} 

これで **Existing Conditions** シナリオのほかに、2 つの企画案である **Scenario A** と **Scenario B** の 3 つの異なるシナリオを作成したことになります。

### シナリオのビジュアライゼーション

最後にシーンを確認する前に、シナリオが適切にハイライトされていることを確認します。デフォルトでは、CityEngine のシーンのライトがかなり明るく設定されています。これは編集には最適ですが、ビジュアライゼーションにはより滑らかなライティングが好ましいです。

ツールバーの **[Scene Light and Panorama]** ツールをクリックして、**[Scene Light and Panorama]** ダイアログ ボックスを開きます。手動で太陽を配置するか、タイムゾーンで時間 / 月を選択することができます。このチュートリアルでは、**[Sun position source]** は **[Direct Solar Angle Entry]** のままにしておきます。次に、太陽の位置を以下の設定に変更します。
* **Solar elevation angle**: 35.0
* **Solar azimuth angle**: 325.0
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/scene_light_and_panorama.png" title=" " width="500" >}} 

光をより滑らかにするために、**[Luminance levels]** 設定で微調整することもできます。
* **Solar intensity**: 0.7
* **Ambient intensity**: 0.25
* **Shadow attenuation**: 0.3
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-DFE53566-FCD3-426F-90AE-801BAFDA5605-web.png" title=" " width="500" >}} 

最後に、「F10」を押して、形状の表示をオフにします。これにより生成されたモデルの下にあるすべての形状だけでなく、残っている可能性のある未固定の横断歩道のエラー マーカーも非表示になります。

### シナリオの切り替え

これで探索の準備ができました。**[Scene Editor]** ウィンドウで、3 つのシナリオを切り替えるには、それぞれのシナリオをクリックするか、**[Viewport]** の **[Scenario]** から直接シナリオを選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/viewport_scenario.png" title=" " width="700" >}} 

シナリオを切り替えながら、さまざまな角度やズーム レベルから用地を確認します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-7C74E428-3EE0-49B8-8D6F-18844D388E29-web.png" title=" " width="700" >}} 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-F40B0B50-6AE9-4AD2-9891-1428B94CC2D5-web.png" title=" " width="700" >}} 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-27BFE210-DDCB-4A58-B321-A2D1F37B7287-web.png" title=" " width="700" >}} 

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/essentials/build-cities-with-get-map-data/GUID-4C139263-DC50-41DB-A8DF-9BAA2FED5196-web.png" title=" " width="700" >}} 

シナリオは、Unreal Engine にエクスポートして将来のビジュアライゼーションに利用したり、360 VR Experience にエクスポートして没入感のある表示を行ったりすることもできます。詳細については、ヘルプや CityEngine ツアー、GIS データを使った作業など、その他の重要なチュートリアルをご参照ください。

このチュートリアルでは、以下の方法を学習しました。
* [Get Map Data] ダイアログを使用した特定の地域からのデータのインポート
* データをクリーンナップし、それを使用した再開発シナリオの作成とビジュアライゼーション

他のエッセンシャル チュートリアルもご参照ください。：[CityEngine ツアー](https://doc.esrij.com/cityengine/tutorials/essentials/cityengine-tour/)、[GIS データを使った作業](https://doc.esrij.com/cityengine/tutorials/essentials/work-with-gis-data/)、[ルール ベースのモデリング](https://doc.esrij.com/cityengine/tutorials/essentials/rule-based-modeling/)

CityEngine の学習を続けるには、[CityEngine チュートリアル](https://doc.esrij.com/cityengine/tutorials/)をご参照ください。