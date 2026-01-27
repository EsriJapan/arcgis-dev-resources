+++
title = "チャートやテーブルに可視化"
description = "チャートやテーブルに可視化"
weight = 5
alwaysopen = false
draft = false
publishDate = 2022-02-10T00:00:00+09:00
+++


## チャートやテーブルに可視化
先の演習で、事業所から 10 km 圏外に住んでいる従業員のみを抽出しました。本項では帰宅困難となる従業員のテーブルを利用して、その属性をテーブルとグラフで可視化していきます。

なお、下記の手順で実際に作成したワークブックは、<a href="https://insights.arcgis.com/index.html#/view/f838d1e3fb2b4e3c91348d4b2fe0ecac" target="_blank">こちら</a>から確認できます。

1. 「帰宅困難となる従業員」のデータセットを展開して、可視化したい任意のフィールドを選択します。その後、右側の余白のページにドラッグして、[チャート] 領域でドロップします。[チャート] 領域でドロップすると、選択したフィールド タイプに応じた <a href="https://doc.arcgis.com/ja/insights/latest/create/create-charts.htm" target="_blank">[可視化タイプ]</a> が表示されます。

例 1: 年齢と世帯人員の関連を可視化するために「年齢区分」と「世帯数区分」をチャートの <a href="https://doc.arcgis.com/ja/insights/latest/create/data-clock.htm" target="_blank">[データ クロック]</a> にドロップ
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Visualize/DataClock.png" title="データ クロック" width="60%">}}

2. 「帰宅困難となる従業員」のデータセットを展開して、可視化したい任意のフィールドを選択します。その後、[ページに追加] タブの右 2 つ横の [チャート作成] 横にあるドロップダウン リストの中から必要に応じたグラフ、チャートを選択するとデータが可視化されます。

例 2 : 性別の構成比を可視化するために、「性別」を選択して、チャートの <a href="https://doc.arcgis.com/ja/insights/latest/create/bubble-chart.htm" target="_blank">[バブル グラフ]</a> をクリック
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Visualize/BubbleGraph.png" title="バブル グラフ" width="20%">}}

3. 上記の中から任意の可視化方法を選択して、下記のデータを可視化してみましょう。

- 婚姻区分、年齢区分 → <a href="https://doc.arcgis.com/ja/insights/latest/create/column-chart.htm" target="_blank">[カラム チャート]</a>

同様のステップでチャートやテーブルを複数作成してみましょう。
<br>

4. 任意の属性条件をクリックすると、他のカードと連動することができます。ここではステップ 1 で例示したデータ クロックのカードで、世帯数が「2 人」かつ年齢区分が「35 ～ 44 歳」であるセルをクリックします。その結果、選択された情報のみが表示されます。

5. 任意の選択したデータのみを抽出して、新しいマップ カードを作成することも可能です。ここではステップ 2 で例示したバブル グラフのカードで「女性」を選択して、「帰宅困難となる従業員」を女性だけの表示に絞ります。
6. 凡例のレイヤー シンボルを選択し、[マップ] 領域にドロップすると新しいマップが作成されます。
7. 左上にある [保存] <img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/Save.png" title="保存" width="8%" style="all:initial;"> をクリックしてワークブックを保存します。
