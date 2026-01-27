+++
title = "シンボルを変更したい"
description = "マップ上でのレイヤーの見た目 (シンボル) の色や形を変更します。"
weight = 2
alwaysopen = false
publishDate = 2024-06-20T00:00:00+09:00
draft = false
author = "中家"
+++

マップに追加したレイヤーのシンボルの色や形を変更します。コンテンツを作成する[権限](https://doc.arcgis.com/ja/arcgis-online/reference/roles.htm)が必要です。

### シンボルの適用

1.	Map Viewer でレイヤーを含むマップを開くか、[マップにレイヤーを追加](/online/users-guide/map/set-map)します。
1. [コンテンツ] ツールバーの [レイヤー] をクリックして、[レイヤー] ウィンドウを表示します。
1.	[レイヤー] ウィンドウでシンボルを設定したいレイヤーを選択します。
1.	[設定] ツールバーの [シンボル] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-select-layers.png" title="レイヤーの選択" width=700" >}}

1. [シンボル] ウィンドウの [属性の選択] で [フィールド] をクリックし、シンボルを設定する属性フィールドを選択して [追加] をクリックします。</br>属性値でシンボル設定をしない場合は、属性の選択は不要です。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-select-fields.png" title="フィールドの選択" width="350" >}}

1.	[スタイルの選択] で描画スタイルを選択します。[スタイル オプション] をクリックすると、レイヤーの外観をカスタマイズできます。


### 代表的なシンボル設定

| 種類 | 説明 |
| --- | :--- |
| ![場所 (単一シンボル)](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-location-single-symbol.png "場所 (単一シンボル)") | [場所 (単一シンボル)](https://doc.arcgis.com/ja/arcgis-online/create-maps/style-location-mv.htm#ESRI_SECTION1_A06B2E23B234435FAC4D68006F926BC1)</br>すべてのフィーチャを同じシンボルで表現します。 |
| ![ヒートマップ](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-heat-map.png "ヒート マップ") | [ヒート マップ](https://doc.arcgis.com/ja/arcgis-online/create-maps/style-location-mv.htm#ESRI_SECTION1_2DFD98C91EAE47A4BAE846E5DE75E978)</br>ポイントが集中しているエリアを一目で確認できるような表現ができます。 |
| ![タイプ (個別値シンボル)](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-type-unique-symbols.png "タイプ (個別値シンボル)") | [タイプ (個別値シンボル)](https://doc.arcgis.com/ja/arcgis-online/create-maps/style-categories-mv.htm#ESRI_SECTION1_1084DA17FD3C470B87A004AB55132D38)</br>樹木の種類、道路クラス、都道府県名など、属性のカテゴリごとにシンボルを割り当てて描画します。 |
| ![数と量 (サイズ)](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-counts-and-amounts-size.png "数と量 (サイズ)") | [数と量 (サイズ)](https://doc.arcgis.com/ja/arcgis-online/create-maps/style-numbers-mv.htm#ESRI_SECTION1_872438351B424ECE9B435B47F6E7432F)</br>数値またはランク付けされたデータをシンボルの大きさで表現します。データの数値が大きいほど、シンボルの大きさも大きく表示されます。 |
| ![数と量 (色)](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-counts-and-amounts-color.png "数と量 (色)") | [数と量 (色)](https://doc.arcgis.com/ja/arcgis-online/create-maps/style-numbers-mv.htm#ESRI_SECTION1_1D8BD412F83148C6ABF315CA10111E66)</br>数値またはランク付けされたデータを色の濃淡で表現します。データの数値が大きいほど濃い色で、小さいほど淡い色で表示することなどができます。 |
| ![リレーションシップ](https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/style-relationship.png "リレーションシップ") | [リレーションシップ](https://doc.arcgis.com/ja/arcgis-online/create-maps/style-numbers-mv.htm#ESRI_SECTION1_C7FAB061D60344CAB6AC9A190DAED1D2)</br>数値型の属性を指定し、2 つの属性値の相関関係をカラー ランプで表現します。 |

{{< callout >}}

その他さまざまなシンボルを設定することができます。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/apply-styles-mv.htm#ESRI_SECTION1_195BD40347774AEDAEC373A7A0898A80)をご参照ください。

{{< /callout >}}
