+++
title = "チュートリアル 15: Web シーンの共有"
description = "CityEngine レイヤーをシーン レイヤー パッケージ (SLPK) ファイルとタイル パッケージ (TPK) ファイルにエクスポートする方法を学習します。"
weight = 18
alwaysopen = false
publishDate = 2024-08-30T00:00:00+09:00
draft = false
author = "森"
+++

## チュートリアル データ
チュートリアル データは、**[Help] メニュー → [Download Tutorials and Examples…]** を選択し、[CityEngine Tutorial] からダウンロードできます。

## 概要
このチュートリアルでは、CityEngine のシーン ファイルやシーンの一部を ArcGIS Online に Web シーンとしてエクスポートし、Scene Viewer で開く方法を学習します。また、シーン ファイルのレイヤーを個別に公開し、Scene Viewer で開く方法を学習します。最後に、公開されたアイテムを共有する方法を説明します。

|演習|
|:--|
|・[Part 1: CityEngineのシーン ファイルを ArcGIS Online に Web シーンとしてエクスポート](#part-1-cityengine-のシーン-ファイルを-arcgis-online-に-web-シーンとしてエクスポート)|
|・[Part 2: シーン ファイルの一部を ArcGIS Online に Web シーンとしてエクスポート](#part-2-シーン-ファイルの一部を-arcgis-online-に-web-シーンとしてエクスポート)|
|・[Part 3: 公開されたアイテムを ArcGIS Online で共有](#part-3-公開されたアイテムを-arcgis-online-で共有)|
|・[Part 4: CityEngine を使用して公開されたアイテムを共有](#part-4-cityengine-を使用して公開されたアイテムを共有)|

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-15-publish-web-scenes/GUID-A2A637D4-F6C6-4A8D-BFC5-76CC7AC8ECC4-web.png" title=" " width="750" >}}

## Part 1: CityEngine のシーン ファイルを ArcGIS Online に Web シーンとしてエクスポート
1. [[Navigator](https://doc.arcgis.com/en/cityengine/latest/help/help-navigator.htm)] ウィンドウで **Tutorial_15_Publish_Web_Scenes** チュートリアル フォルダーを開きます。
1. [Scene] フォルダーにある **Esri_Campus.cej** シーンを開きます。[[Viewport](https://doc.arcgis.com/en/cityengine/latest/help/help-viewport.htm)] ウィンドウにモデルが表示されます。
1. **[File] メニュー →  [Export]** をクリックします。 
1. **[Share As Web Scene]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-15-publish-web-scenes/GUID-39FC1719-AF81-47F4-B0B3-9270B89150BA-web.png" title=" " width="500" >}}
1. **[Next]** をクリックして、**[Share As Web Scene]** ダイアログ ボックスを開きます。ArcGIS Online にサイン インしていない場合は、サイン インして次に進みます。
1. デフォルトのエクスポート オプションを維持します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-15-publish-web-scenes/GUID-2D2BEB8D-0687-475A-91EE-BAF718AEDEC6-web.png" title=" " width="500" >}}
シナリオを作成し、それを個別にエクスポートしたい場合は、次のようにしてください。
<br>a. **[Content to Export]** ドロップダウン メニューでシナリオを選択します。
<br>b. **[Export Default Objects]** チェック ボックスをオンにしてデフォルト オブジェクトでシナリオをエクスポートします。
<br>c. **[Merge Layers]** チェック ボックスをオンにしてグループレイヤー内のレイヤーをマージします。

{{< callout >}}

地形レイヤーはマージされません。

{{< /callout >}}

7. **[Finish]** をクリックします。
<br>すべてのレイヤーを統合した Web シーンが ArcGIS Online に公開されます。また、各地形レイヤーのタイルパッケージ (.tpk) およびその他すべてのレイヤーのシーンレイヤーパッケージ (.slpk) も同様に公開されます。これらは、現在サインインしているポータルにアップロードされます。ブックマークに保存されたカメラ構成は、ウェブシーン内のスライドとして Scene Viewer にエクスポートされます。
 
8. Scene Viewer で開くをクリックして、Web シーンを **Scene Viewer** で開きます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-15-publish-web-scenes/GUID-A2A637D4-F6C6-4A8D-BFC5-76CC7AC8ECC4-web.png" title=" " width="750" >}}
9. エクスポートされたブックマークを確認するには、Scene Viewer のスライドをクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-15-publish-web-scenes/GUID-9CA9D53D-FD4F-44D0-977F-23B5A0B74059-web.png" title=" " width="750" >}}

## Part 2: シーン ファイルの一部を ArcGIS Online に Web シーンとしてエクスポート
次に、CityEngine シーンの一部をエクスポートするには、次の手順を行います。
1. 標準ツールバーの **[選択]** をクリックして、**[Viewport]** ウィンドウでシーンの一部を選択します。
1. Part 1 の手順で、**[Share As Web Scene]** ダイアログ ボックスを開きます。
1. **[Content to Export]** ドロップダウン メニューで **[Selection]** をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-15-publish-web-scenes/GUID-A759B213-B0F0-4F5B-9A8A-558383AAE8D2-web.png" title=" " width="500" >}}

1. **[Finish]** をクリックすると、選択部分が Web シーンとしてエクスポートされます。

## Part 3: 公開されたアイテムを ArcGIS Online で共有
公開されたアイテムを共有するには、次の手順を行います。
1. ArcGIS Online の **[コンテンツ]** タブで共有したいアイテムをクリックします。アイテム ページが表示されます。
1. **[共有]** をクリックします。
1. 共有レベルの設定を選択します。
1. **[保存]** をクリックします。

## Part 4: CityEngine を使用して公開されたアイテムを共有
1. **[Navigator]** ウィンドウで **[My Content]** タブをクリックして全てのファイルとレイヤーがあることを確認します。また、サイン インを求められた場合は、ArcGIS Online にサイン インします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/cityengine/tutorials/tutorial-15-publish-web-scenes/GUID-1B714C3F-A132-467E-9D58-6EEB52F7C58E-web.png" title=" " width="500" >}}

2. 作成したアイテムを右クリックして **[ブラウザで開く]** を選択し、ArcGIS Online のアイテムページをクリックします。
1. ArcGIS Online のアイテムページで **[共有]** をクリックしてアイテムを共有します。
1. 共有レベルの設定を選択します。
1. **[保存]** をクリックします。


このチュートリアルでは、次のことを学びました。
<br>・CityEngine のシーンやシーンの一部を ArcGIS Online に Web シーンとしてエクスポートする方法
<br>・これらのレイヤーを ArcGIS Online で共有する方法

ArcGIS Online での Web シーンの作成と共有の詳細については、[シーンの作成の開始](https://doc.arcgis.com/en/arcgis-online/get-started/get-started-with-scenes.htm) と [シーンの共有](https://doc.arcgis.com/en/arcgis-online/share-maps/share-scenes.htm) を確認ください。
<br>個々の TPK ファイルと SLPK ファイルのエクスポートの詳細については、[地形のエクスポート](https://doc.arcgis.com/en/cityengine/latest/help/help-export-a-map.htm) と [SLPK のエクスポート](https://doc.arcgis.com/en/cityengine/latest/help/help-export-slpk.htm) を確認ください。

CityEngineの学習を続けるには、[CityEngine チュートリアル カタログ](https://doc.esrij.com/cityengine/tutorials/classic/)をご覧ください。