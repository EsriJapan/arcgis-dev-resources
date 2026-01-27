+++
title = "ベンチマーク比較"
description = "ベンチマーク比較の実行方法を学びます。"
weight = 6
alwaysopen = false
draft = false
+++

ベンチマーク比較では、複数商圏内の人口統計の集計値を、テーブル、サマリー、ヒストグラム、バブル チャート形式で対話的に比較することができます。本チュートリアルでは、近年開発の進む、流山おおたかの森駅と柏の葉キャンパス駅周辺の「人口 最終学歴別 大学」「在学者数 小学校」「未就学者数 保育園・保育所」のベンチマーク比較を実行します。

## ベンチマーク比較の実行

1. [マップ] タブを選択し、[住所または緯度/経度の入力] に「流山おおたかの森駅」と入力して Enter キーを押します。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/search_otakanomori.jpg" >}}

2. [サイトの作成] をクリックし、[リング] の [半径] を「1, 3」として [適用] をクリックし、リング商圏を作成します。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/ring_setting.jpg" >}}

3. 同様に、[住所または緯度/経度の入力] に「柏の葉キャンパス駅」と入力して Enter キーを押し、2. と同じ設定をして [適用] をクリックします。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/otakanomori_kashiwanoha.jpg" >}}

4. [分析の実行] → [ベンチマーク比較] をクリックし、[ベンチマーク比較] ウィンドウを開きます。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/open_benchmark_comparison.jpg" >}}

{{< callout type = "info" >}}

「流山おおたかの森駅」または「柏の葉キャンパス駅」のポップアップで、[比較] → [新しいベンチマーク比較] でも開くことができます。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/open_benchmark_comparison2.jpg" >}}

{{< /callout >}}

5. [位置情報の選択] で、[自分のサイト] を選択して [次へ] をクリックします。
6. [サイトの追加] ウィンドウで [現在のマップ上] タブに切り替えて、「柏の葉キャンパス駅」と「流山おおたかの森駅」のチェックボックスをクリックし、[適用] → [次へ] をクリックします。
7. [解析条件の選択] で [教育 リスト] を選択します。

{{< callout type = "info" >}}

[変数リスト] ボタンをクリックすると、各リストに含まれる変数が表示されます。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/education_list.jpg" >}}

{{< /callout >}}

{{< callout type = "info" >}}

[すべての変数の参照] をクリックするとデータ ブラウザーが開き、任意の変数を選択することができます。

{{< /callout >}}

8. [サイト] で、[リング、運転時間、徒歩時間の展開] のトグルボタンをオンにします。

{{< callout type = "info" >}}

[サイト] → [サイトの追加] ウィンドウで、さらに比較対象のサイトを追加することができます。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/site.jpg" >}}

{{< /callout >}}

9. [統計] で、[平均]、[中央値]、[標準偏差] のトグルボタンをオンにします。
10.	[比較方法] で、[方法] のドロップダウンから [ベンチマークの上下] を選択し、[ベンチマーク] のドロップダウンから [平均] を選択します。

以上で、ベンチマーク比較が実行できました。

[結果] パネルで [サマリー]、[ヒストグラム]、[バブルチャート]、[テーブル] を切り替えることで、結果の見え方を変えることができます。また、[オプション] ボタン → [区画との比較] をクリックすることで、各商圏と商圏が属する行政界との間でもベンチマークの比較ができます。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/benchmark/result_panel.jpg" title="結果パネル">}}

11. [レイヤーの保存] をクリックします。
12. [レイヤーの保存] ウィンドウで [レイヤー名] に「流山_柏比較」と入力し、[OK] をクリックします。

「流山_柏比較」ベンチマーク比較レイヤーを保存しました。次回から、設定されたレイヤーを開くことができます。

{{< callout type = "important" >}}

[結果] パネルの [Excel にエクスポート] で、Excel ファイルとしてエクスポートすることができます。

{{< /callout >}}