+++
title = "(補足) 様々な可視化手法"
description = "チュートリアルを基本とした補足説明をします。"
weight = 7
alwaysopen = false
draft = false
publishDate = 2022-02-10T00:00:00+09:00
+++

背景地図やシンボル、データの連動など ArcGIS Insights には多様なデータの可視化手法があります。
ここではその一部をご紹介します。
<br>


## <a href ="https://doc.arcgis.com/ja/insights/latest/create/create-maps.htm#:~:text=%E3%81%84%E3%82%8B%E3%81%8B%20(%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E5%88%A5)-,%E3%83%99%E3%83%BC%E3%82%B9%E3%83%9E%E3%83%83%E3%83%97%E3%81%AE%E5%A4%89%E6%9B%B4,-Insights%20in%20ArcGIS" target ="_blank">背景地図の変更</a>
右上の [ベースマップ] をクリックし、任意のベースマップを選択します。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/basemap.png" title="背景地図の変更">}}

{{< callout >}}

カードごとにベースマップを変更したい場合は、任意のカードを選択してからベースマップを変更してください。

{{< /callout >}}

## <a href ="https://doc.arcgis.com/ja/insights/latest/create/create-maps.htm#:~:text=%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82-,%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%20%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E5%A4%89%E6%9B%B4,-%5B%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%20%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3" target ="_blank">レイヤー オプションの変更</a>
ArcGIS Insights ではスマート マッピング機能を使用して視覚化するデータに最適なマップ タイプやシンボルを表示します。それらはデータ タイプによって異なりますが任意で変更することも可能です。
1. 作成した「事業所の位置」マップの「帰宅困難となる従業員」レイヤーの [レイヤー オプション] を開きます。
2. [表示設定] タブで [シンボル形状] や [シンボル サイズ] などを任意のものに設定します。
これによってポイント フィーチャ に応じてシンボルを設定することができました。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/layer_option2.png" title="シンボルの変更" width="50%">}}
3. 次に [シンボル] タブで [シンボル タイプ] から [ヒート マップ] 選択します。
ヒート マップに変更することで帰宅困難となる従業員がどのエリアに分布しているのか視覚的に把握することができました。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/heatmap.png" title="ヒートマップ" width="50%">}}


{{< callout >}}

[表示設定] タブにある [レイヤー効果] でブルームや影付きを設定することによって目を引くマップを作成したり、特定のフィーチャに注目を集めたりできます。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/broom.png" title="ブルームで駅ポイントを可視化" width="80%">}}
<div style="text-align: center;"> (左) <a href="https://livingatlas.arcgis.com/ja/home/" target="_blank">ArcGIS Living Atlas of the World</a> の<a href="https://www.arcgis.com/home/item.html?id=5f45b73222674878b4b6e6f7b905499e" target="_blank">駅名ポイント</a>を用いてブルームで可視化
</div>
<div style="text-align: center;"> (右) <a href="https://livingatlas.arcgis.com/ja/home/" target="_blank">ArcGIS Living Atlas of the World</a> の<a href="https://www.arcgis.com/home/item.html?id=cee3b3f7ed4b4826a7dc5c074040ef2c" target="_blank">全国都道府県界データ 2022 </a>を用いて影付きで可視化</div>
{{< /callout >}}

## <a href ="https://doc.arcgis.com/ja/insights/latest/get-started/create-relationships.htm" target ="_blank">リレーションシップの作成</a>
複数のデータ間の共通キー フィールドを用いることで複数のデータセットを結合することができます。結合したデータセットは 1 つのデータセットとして扱うことができます。
<br>例: 事業所ごとの備蓄品の量を把握
<br>事業所ごとの備蓄品の個数を別の Excel ファイル (備蓄品リスト.xlsx) で管理しています。一人当たりの備蓄量を確認するために、備蓄リストと従業員データ間でリレーションシップを行います。
1. 左上の [ページの追加] タブから「備蓄品リスト.xlsx」「従業員リスト.xlsx」を追加します。
2. [リレーションシップの作成] をクリックし、「オフィス」テーブルを選択した後に「備蓄リスト」テーブルを選択し [完了] をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/relationship.png" title="リレーションシップの作成" width="60%">}}
1. 一人当たりの備蓄品の数を求めます。
[データセットのオプション] → [データ テーブルの表示] → [+ フィールド] で新規フィールドを作成します。フィールド名を「一人当たりの備蓄量」に変更し、[fx] または [計算関数の入力] に「数量 / 従業員数」と入力し、[実行] をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/Entering+Calculation+Functions.png" title="フィールド演算" width="60%">}}


## 共有されているデータの活用
ArcGIS Insights では自信の作成したデータだけでなく、ArcGIS Online に共有されているアイテムや組織に共有されているデータを追加することも可能です。ここでは <a href="https://livingatlas.arcgis.com/ja/home/" target="_blank">ArcGIS Living Atlas of the World</a> に公開されている境界データを追加して、空間集約するステップを記載します。

1. 左上の [追加] をクリックし、[ページに追加] を表示します。[Living Atlas] を選択し、検索ボックスで [全国市区町村界データ] と検索します。
<br>今回は「全国市区町村界データ (簡易版)」を使用しますので、選択したら、[追加] をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/add+data.png" title="データの追加" width="60%">}}
2. <a href="https://insights_tips-deploy--esrijapan.netlify.app/insights/tutorial/gcp/page3/" target="_blank">空間解析機能の実行</a> で作成した「帰宅困難となる従業員」データセットの [座標] を選択します。
<br>全国市区町村界のカードの上に移動させ、左下の [空間集約] が表示されたところでドロップします。

3. パラメーターが下記のように設定されていることを確認して [実行] します。
<ul>
    <li>[エリア レイヤーの選択]: all_japan_shikuchoson
    <li>[集計するレイヤーの選択]: 帰宅困難となる従業員
    <li>[シンボル設定]: 帰宅困難となる従業員の個数
</ul>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/Spatial+Aggregation.png" title="空間集約処理" width="60%">}}
市区町村ごとに、空間集約された結果が表示されます。

集約した結果を円の大きさで可視化していますが、ラベルを使ってわかりやすく数値を表示するようにします。

4. 空間集約したマップの [レイヤー オプション] をクリックし、[アノテーション] タブの [<a href="https://doc.arcgis.com/ja/insights/latest/create/create-maps.htm#:~:text=%E4%BD%BF%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82-,%E3%83%A9%E3%83%99%E3%83%AB%E3%81%AE%E8%A1%A8%E7%A4%BA,-%E6%B3%A8%E6%84%8F%3A" target="_blank" >ラベルの表示</a>] パラメーターをオンにします。
<br>[ラベリング] の表示を [JCODE] → [帰宅困難となる従業員の個数] に変更します。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Insights_tips/Spatial+Aggregation2.png" title="空間集約結果" width="60%">}}
帰宅困難となる従業員の市区町村ごとの人数が円の大きさと数値でマップ上に可視化できました。

