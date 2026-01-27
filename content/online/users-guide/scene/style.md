+++
title = "シンボルを変更したい"
description = "3D データのシンボルの色や形を変更します。"
weight = 2
alwaysopen = false
publishDate = 2022-04-06T00:00:00+09:00
draft = false
author = "加藤"
+++

### シンボルの適用
1. Scene Viewer でレイヤーを含むシーンを開くか、シーンにレイヤーを追加します。
1. [レイヤー マネージャー] パネルを展開し、レイヤー名の横の […] をクリックして、[レイヤーのスタイル] をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/scene/style-style.png" title=" " width="400" >}}

1. [① 表示するメイン属性を選択] ドロップダウン リストから、シンボルの設定をする属性フィールドを選択します。属性値でシンボル設定をしない場合は、[<なし>] を選択します。
1. [② 描画スタイルを選択] で、変更したい描画方法の [選択] をクリックします。既に選択されている描画スタイルは [オプション] と表示されます。

### 代表的なシンボル設定

| 種類 | 説明 |
| --- | :--- |
| ![2D マーカー/ライン/ポリゴン](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/scene/style-2Dmarker.png "2D マーカー/ライン/ポリゴン") | [2D マーカー/](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-points.htm#ESRI_SECTION1_07C23D7053044ECEAA9D745BBF60D23D)[ライン/](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-lines.htm#ESRI_SECTION1_07C23D7053044ECEAA9D745BBF60D23D)[ポリゴン](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-polygons.htm#ESRI_SECTION1_07C23D7053044ECEAA9D745BBF60D23D)</br>公園や小売店の場所のようなフィーチャの場所が優先される場合に適しています。 |
| ![3D オブジェクト](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/scene/style-3DObject.png "3D オブジェクト") | [3D オブジェクト](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-points.htm#ESRI_SECTION1_DA1996687B1449D390244E95B70AAF1A)</br>街路樹など、シーンの実際のサイズのオブジェクトをシンボル化することができます。 |
| ![3D パス](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/scene/style-3DPath.png "3D パス") | [3D パス](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-lines.htm#ESRI_SECTION1_DA1996687B1449D390244E95B70AAF1A)</br>単一色を使用して実際の計測値で属性別にラインを表示することができます。 |
| ![3D 立ち上げ](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/scene/style-3Dlaunch.png "3D 立ち上げ") | [3D 立ち上げ](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-polygons.htm#ESRI_SECTION1_DA1996687B1449D390244E95B70AAF1A)</br>単一色を使用して、実際の寸法でポリゴンを立ち上げることができます。 |
| ![2D タイプ/3D タイプ](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/scene/style-type.png "2D タイプ/3D タイプ") | [2D タイプ/](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-polygons.htm#ESRI_SECTION1_E25966A001A74A8EADCDF03C111C216E)[3D タイプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-polygons.htm#ESRI_SECTION1_3537554C57044B9DA1EEB22972BF73DD)</br>樹木の種類、道路クラス、都道府県名など、属性のカテゴリごとにシンボルを割り当てて描画します。 |
| ![2D 数と量/3D 数と量](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/scene/style-quantity.png "2D 数と量/3D 数と量") | [2D 数と量/](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-polygons.htm#ESRI_SECTION1_E66D3856408245219C7860B8A99AC838)[3D 数と量](https://doc.arcgis.com/ja/arcgis-online/create-maps/scene-style-polygons.htm#ESRI_SECTION1_4A175B6A642F490BA3ECCBD55DCAB42E)</br>数値またはランク付けされたデータを色の濃淡で表現します。データの数値が大きいほど濃い色で、小さいほど淡い色で表示することなどができます。 |

{{< callout >}} 

その他さまざまなシンボルを設定することができます。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/configure-content-in-scene.htm#ESRI_SECTION1_A23EBC107DD1416BA5167E8E2B1EF802)をご参照ください。

{{< /callout >}}


