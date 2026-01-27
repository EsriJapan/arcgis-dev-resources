+++
title = "空間解析機能の実行"
description = "空間解析機能の実行"
weight = 4
alwaysopen = false
draft = false
+++

## <a href="https://doc.arcgis.com/ja/insights/latest/analyze/spatial-analysis.htm" target="_blank">[空間解析機能の実行]</a>
空間解析機能を用いて、事業所から半径 10 km 以上に住んでいる帰宅困難となる従業員を特定します。
<br><br>
1. 事業所が表示されている「オフィス.Table」の「事業所の位置」(カード ２) を選択状態にします。
2. マップ カード右下の [アクション](https://doc.arcgis.com/ja/insights/latest/analyze/perform-analysis.htm)<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/SpatialAnalysis/ActionButton.png" title="アクション ボタン" width="5%" style="all:initial;">ボタンをクリックして、[バッファー/到達圏](https://doc.arcgis.com/ja/insights/latest/analyze/create-buffer-drive-times.htm)<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/SpatialAnalysis/Buffer.png" title="バッファー／到達圏" width="5%" style="all:initial;">を選択します。

{{< callout >}}

 [アクション] ボタンから分析機能にアクセスすることができます。どのような分析を行っていいかわからない場合は、[アクション] ボタンの [回答の検索] タブから対話的に分析を実施することができます。

{{< /callout >}}

2. 以下のようにパラメーターを設定して、[実行] をクリックします。 
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/SpatialAnalysis/BufferParameter.png" title="バッファー処理" width="20%">}}

<ul>
    <li>[バッファー処理するレイヤーの選択]: オフィス.Table
    <li>[距離と単位の設定]: 固定距離、10 キロメートル
    <li>[バッファー スタイルの選択]: オーバーラップ
</ul>
処理が完了すると、自動的に「固定距離 1」というテーブル データセットが作成され、レイヤーが「事業所の位置」に出力されます。


{{< callout >}}

バッファーは、ある地点から特定の距離範囲のエリアを作成する機能です。ここでは事業所から 10 km 圏内のバッファーを作成することで、10 km 圏外の従業員の自宅を抽出するのに使用します。

{{< /callout >}}

3. 「固定距離 １」では分かりにくいため、レイヤー名を変更します。[データセット名の変更] をクリックして、「オフィスから 10 km」と変更します。

4. 10 km 圏外の従業員を抽出するために、オフィスから 10 km と従業員のデータを重ね合わせます。[従業員居住地」の右上にある「従業員_新宿.Table」レイヤーを「事業所の位置」にドラッグして、[新しいレイヤーの追加] にドロップします。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/SpatialAnalysis/AddNewLayer.png" title="事業所の位置" width="50%">}}

{{< callout >}}

データの追加は、データ ウィンドウからだけでなく、既にカードに追加されている異なるデータからも可能です。

{{< /callout >}}


5. 「事業所の位置」を選択状態にします。マップ カード右下の [アクション] ボタンをクリックして、<a href="https://doc.arcgis.com/ja/insights/latest/analyze/spatial-filter.htm" target="_blank">[空間フィルター]</a> を選択します。

6. 以下のようにパラメーターを設定して、[実行] をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/SpatialAnalysis/filter.png" title="パラメーター" width="20%">}}


- [フィルター処理するレイヤーの選択] : 従業員_新宿.Table
- [フィルターの基準にするレイヤーの選択]: オフィスから 10 km
- <a href="https://doc.arcgis.com/ja/insights/latest/analyze/spatial-filter.htm" target="_blank">[フィルターのタイプの選択]</a>: 含まない


7. 処理が完了すると、自動的に「空間フィルター １」という解析結果テーブルが追加されます。分かりやすいレイヤー名に変更するため、データセット ウィンドウ上で [データセット名の変更] をクリックして、「帰宅困難となる従業員」と変更します。

8. 「事業所の位置」の右上の「オフィスから 10 km」をクリックして非表示にします。オフィスから 10 km 圏外に住む従業員のみが抽出されたのを確認してください。

9. 「帰宅困難となる従業員」の [データセットのオプション] から [データ テーブルの表示] をクリックして、データ テーブル右下の「レコード総数」で帰宅困難となる従業員のリスト及び人数を確認します。 {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/SpatialAnalysis/Records.png" title="レコード総数" width="15%">}}

10. 左上にある [保存]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/Save.png" title="保存" width="8%" style="all:initial;"> をクリックしてワークブックを保存します。