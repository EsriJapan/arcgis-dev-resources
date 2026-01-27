+++
title = "既存店舗を対象とした分析"
description = "既存店舗から商圏を作成し、周辺の人口分布マップやレポートを作成します。"
weight = 10
alwaysopen = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 30 分です。

{{< /callout >}}

本演習では、既存店舗から商圏を作成し、周辺の人口分布マップや人口特性が把握できるレポートを作成します。

# 演習

## 演習用データのダウンロード

1. <a href="https://www.arcgis.com/home/item.html?id=6deb3838c178420e9ef622e7ac4b759e" target="_blank">BA Pro チュートリアル-商圏分析 プロジェクトパッケージ</a>が無い場合は、ダウンロードし、プロジェクトパッケージを開きます。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/ta-tutorial-ex3-35.png" title="演習3">}}

[コンテンツ] ウィンドウおよびマップ上に「自社店舗」レイヤーがあらかじめ追加されていることを確認します。

{{< callout >}}

[Business Analyst データ ソース](/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定) が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}

## リング商圏の生成

自社店舗ポイントを起点としたリング商圏を作成します。

1. [解析] タブ → [ジオプロセシング] グループの [ツール] をクリックします。

[ジオプロセシング] ウィンドウが表示されます。

2. [ツールボックス] タブ → [Business Analyst ツール] → [商圏] → [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-trade-area-rings.htm" target="_blank">リング商圏の生成 (Generate Trade Area Rings)</a>] をクリックします。
3. [リング商圏の生成] ツールに、以下のように設定します。
    パラメーター | 設定値
    -- | --
    入力フィーチャ | 自社店舗
    出力フィーチャクラス | リング商圏_1_3km
    入力方法 | 値
    距離 | 1 列目に「1」と入力し、[＋他を追加] をクリックして 2 列目に「3」と入力
    距離単位 | キロメートル
    ID フィールド | 店舗ID

   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/generate-trade-area-rings.png" title="リング商圏の生成">}}
4. [実行] をクリックしてツールを実行します。

マップに、自社店舗を起点とした 1,3km のリング商圏が追加されます。

## カラー コード レイヤー

人口総数を表現する階級区分マップを作成し、店舗周辺の人口分布を把握します。

1. [解析] タブ → [ビジネス解析] → [カラー コード レイヤー] を選択します。
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/color-coded-layer.png" title="カラー コード レイヤー">}}

{{< callout >}}

[Business Analyst ツール] → [解析] → [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/create-color-coded-layer.htm" target="_blank">カラー コード レイヤー (Color Coded Layer)</a>] ではなく、ビジネス解析から起動してください。

{{< /callout >}}

{{< callout >}}

データ ブラウザーが起動します。データ ブラウザーでは、人口や世帯などのカテゴリ別に格納された統計変数を検索・選択することができます。

{{< /callout >}}

2. [人口] → [人口総数] → [2020 人口総数] を選択し、[OK] をクリックして、可視化する変数を選択します。

[シンボル - カラー コード レイヤー] パネルが表示されます。

3. [区画] → [対象地域] 横の [v] ボタンをクリックして、[境界レイヤー] に [リング商圏_1_3km] レイヤーを選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/ccl_target_area_pro3_4.jpg" title="カラー コード レイヤー 対象地域">}}

4. [詳細レベル] を [町丁・字等] に設定します。

5. [スタイル] でクラスや配色、分類方法などを任意に設定します。

{{< callout >}}

各設定項目の詳細は<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/color-coded-layer.htm#ESRI_SECTION1_B8E80273B7CE46BBBE5FDA76A62C8D19" target="_blank">ヘルプ</a>をご覧ください。

{{< /callout >}}


{{< callout >}}

[結果の表示] をクリックすると、統計サマリーやヒストグラム、テーブル形式で結果を確認できます。
{{<figure src= "https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/ccl_result_panel.jpg" title="カラー コード レイヤー 結果パネル">}}

{{< /callout >}}

## マップの見た目を調整

ここまでの操作で、リング商圏とカラー コード レイヤーを作成しましたが、自社店舗やリング商圏がカラーコード レイヤーの下に配置されており、各レイヤーの位置関係が分かりにくい状態です。

以下のようなマップになるように、各レイヤーの描画順やシンボルを変更します。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/map-image_v33.png" title="作成するマップのイメージ">}}

1. [コンテンツ] ウィンドウで、[描画順にリスト] タブが選択されていることを確認します。
2. 「カラー コード レイヤー」をドラッグ＆ドロップで「リング商圏_1_3km」レイヤーの下に移動させ、以下の順番になるように調整します。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/adjust-layers_v33.png" title="レイヤーの調整">}}

{{< callout >}}

レイヤーの順番を入れ替えるときは、[描画順にリスト] タブが選択されている必要があります。

{{< /callout >}}

ここまでの操作で、上から自社店舗、リング商圏、カラーコード レイヤーの順にマップが描画されています。
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/current-map-v33.png" title="現在のマップ">}}

リング商圏のシンボル設定を変更します。

3. [コンテンツ] ウィンドウの「リング商圏_1_3km」レイヤーを右クリック → [シンボル] をクリックします。

[シンボル] ウィンドウが開きます。

4. [プライマリ シンボル] を [個別値] から [単一シンボル] に変更します。
5. シンボルのアイコンをクリックします。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/change-symbol1.png" title="ポリゴン シンボルの書式設定">}}

[ポリゴン シンボルの書式設定] が開きます。

6. [プロパティ] タブの表示設定を以下のように設定し、[適用] をクリックします。
    - 色: 色なし
    - アウトライン色: 黒
    - アウトライン幅: 2pt<br/>
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/change-symbol2.png" title="[プロパティ] タブ">}}

カラー コード レイヤーの透過度を調整し、背景地図が見えるようにします。

7. [コンテンツ] ウィンドウの「カラー コード レイヤー」を選択します。
8. 表示された [カラー コード グループ レイヤー] タブの [効果] → [透過表示] を「50%」に変更します。

以上で、レイアウトの調整は完了です。

## サマリー レポート

リング商圏内の統計情報を集計したレポートを出力します。

1. [解析] タブ → [ジオプロセシング] → [ツール] をクリックします。
2. [ジオプロセシング] ウィンドウで、[ツールボックス] タブを選択し、[Business Analyst ツール] → [レポート] → [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/create-summary-reports.htm" target="_blank">サマリー レポート (Summary Reports)</a>] をクリックします。
3. [サマリー レポート] ツールを以下のように設定し、実行します。
    パラメーター | 設定値
    -- | --
    境界レイヤー | リング商圏_1_3km
    レポートの作成 | 年齢別人口・地域比較レポート (Classic)
    出力フォルダー | デフォルトのまま

ツールの実行完了後に、出力されたサマリーレポートを確認します。

4. [詳細の表示] にカーソルを当て、[パラメーター] タブの [出力ファイル] をクリックします。<br/>
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/summary-report-result25.png" title="出力ファイル">}}
5. これまでの手順で作成したマップ画像と、リング商圏内の人口を経年比較した値がテーブルやチャートで表現されていることを確認します。<br/>
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/summary-report-output25.png" title="出力されたレポート">}}
6. [プロジェクト] タブ → [保存] を選択し、<a href="https://pro.arcgis.com/ja/pro-app/latest/help/projects/save-a-project.htm" target="_blank">プロジェクトを保存</a>します。

# まとめ

この演習では、自社店舗周辺の人口分布を直感的に把握できるマップと、商圏内の人口などの統計情報を集計したレポートを作成することができました。また、以下ツールの操作を学びました。
- [リング商圏の生成] ツール
- [カラーコード レイヤー] ツール
- [サマリー レポート] ツール


<style class="info-table">
table {
    font-size: 13px;
    width: 85%;
    margin-right: 5px;
    margin-left: 15px;
}
table th:first-of-type {
    width: 30%;
    }
table th:nth-of-type(2) {
    width: 70%;
    }
table tr{
    background-color: #ffffff;
}
</style>

