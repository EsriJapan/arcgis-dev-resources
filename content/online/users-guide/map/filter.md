+++
title = "表示するデータを限定したい"
description = "条件に当てはまるフィーチャのみをマップ上に表示します。"
weight = 5
alwaysopen = false
publishDate = 2022-04-06T00:00:00+09:00
draft = false
author = "馬野"
+++

条件に当てはまるフィーチャのみをマップ上に表示します。

1. Map Viewer でレイヤーを含むマップを開くか、[マップにレイヤーを追加](/online/users-guide/map/set-map#レイヤーの追加)します。
2. [レイヤー] ウィンドウで、フィルターを適用するレイヤーを選択します。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/filter-Select-layer.png" title="レイヤーの選択" width=350" >}}

3.	[設定] ツールバーの [フィルター] をクリックします。
4.	[フィルター] ウィンドウの [新しく追加] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/filter-filter.png" title="フィルター" width=300" >}}

5.	条件に使用するフィールドを選択します。
6.	[等しい]、[等しくない]、[含む] などの演算子を選択します。

{{< callout >}}

日付フィールドを選択している場合は日付演算子を使用できるようになります。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/apply-filters-mv.htm)をご参照ください。

{{< /callout >}}

7.	値の入力ボックスに条件の値を入力します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/filter-equation.png" title="フィルター式" width=250" >}}

{{< callout >}}

複数の式を作成して And/Or 条件を適用することもできます。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/apply-filters-mv.htm#ESRI_SECTION1_3426232199CF4530A51E0DD5ECFA2F3C)をご参照ください。

{{< /callout >}}

8. [保存] をクリックします。