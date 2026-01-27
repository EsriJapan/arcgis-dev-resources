+++
title = "顧客分布を基にした商圏の生成"
description = "店舗ごとの顧客データを基に商圏を生成する方法を学びます。"
weight = 12
alwaysopen = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 20 分です。

{{< /callout >}}

本演習では、顧客データを用いて顧客分布商圏を作成し、自動車到達圏で近似することにより、各店舗の実勢商圏とその商圏が自動車で平均何分圏に該当するのかを確認します。

{{< callout >}}

顧客分布商圏は、店舗から近い順に顧客を一定割合含む範囲を指し「実勢商圏」と呼ばれることもあります。詳細は、<a href="https://www.esrij.com/business-map-glossary/trade_area/prevailing_trade_area/" target="_blank">ビジネスマップ用語集</a>をご覧ください。

{{< /callout >}}

# 演習

店舗および顧客ポイントを使用して、近い順に顧客の7割をカバーする商圏（顧客分布商圏）を作成します。
## 演習用データのダウンロード

1. <a href="https://www.arcgis.com/home/item.html?id=d4cf8c7d454f4252b379cf9bc263b949" target="_blank">BA Pro チュートリアル-顧客分析 プロジェクトパッケージ</a>をダウンロードします。
2. ダウンロードした「BAProチュートリアル-顧客分析.ppkx」を開きます。
3. [演習2] マップを開きます。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/ca-tutorial-ex2-35.png" title="演習1">}}


[コンテンツ] ウィンドウおよびマップ上に「自社店舗」レイヤーおよび「自社顧客」レイヤーが追加されていることを確認します。

{{< callout >}}

[Business Analyst データ ソース](/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定) が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}
## 顧客分布商圏の生成

1. [解析] タブ → [ジオプロセシング] グループの [ツール] をクリックします。
2. [ジオプロセシング] ウィンドウの検索ボックスに「顧客分布商圏」と入力します。
3. 検索結果の中の [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/customer-derived-trade-areas.htm" target="_blank">顧客分布商圏の生成 (Generate Customer Derived Trade Areas)</a>] ツールをクリックして開きます。
4. 以下のように設定して、[実行] をクリックします。
    パラメーター | 設定値
    -- | --
    店舗 | 自社店舗
    店舗 ID フィールド | 店舗ID
    顧客 | 自社顧客
    関連付けられた店舗 ID フィールド | 店舗ID
    出力フィーチャクラス | 顧客分布商圏_7割    
    方法 | 詳細 (スムージング)
    半径 (%) | 70    
    顧客の集計タイプ | 個数

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/generate-customer-derived-trade-areas.png" title="顧客分布商圏の生成">}}

{{< callout >}}

顧客の集計タイプは、顧客ポイントの個数以外に顧客の持つ属性 (例えば売上高など) を選択できます。

{{< /callout >}}

マップに、自社店舗を起点とした、顧客の 7 割をカバーする実勢商圏が追加されます。

## 顧客分布商圏に近似した道路時間商圏の生成

これまでの操作で、顧客の 7 割をカバーする商圏（実勢商圏）を作成しました。次に、作成した各店舗の実勢商圏が自動車で平均何分圏に該当するかを確認します。

1. [ジオプロセシング] ウィンドウの [戻る(←)] ボタンをクリックします。
2. 検索ボックスに「近似到達圏」と入力し、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-approximate-drive-times.htm" target="_blank">近似到達圏の生成 (Generate Approximate Drive Times)</a>] ツールをクリックして開きます。
3. ツールを以下のように設定して [実行] をクリックします。
    パラメーター | 設定値
    -- | --
    入力フィーチャ | 顧客分布商圏_7割
    出力フィーチャクラス | 近似到達圏_顧客分布
    距離タイプ | 運転時間
    距離単位 | 分
    それ以外のパラメーター | デフォルトのまま 

{{< callout >}}

ツールで設定するパラメーターには、ツール実行のために設定が必須のパラメーターと、任意に設定するオプション パラメーターの 2 種類があります。本演習では、「店舗レイヤー」などのオプション パラメーターは使用していません。各パラメーターの詳細は、パラメーター名にマウス カーソルを当てると表示される情報アイコンにカーソルを合わせることで確認できます。

{{< /callout >}}

マップに、顧客分布商圏に近似した道路時間商圏が追加されました。結果の詳細を確認します。

4. [コンテンツ] ウィンドウ上の「近似到達圏_顧客分布」レイヤーを右クリック → [属性テーブル] をクリックします。

「AREA_DESC0」フィールドに、各実勢商圏を道路時間商圏で近似したときの移動時間が格納されます。いずれの顧客分布商圏も 8~10 分程度の商圏範囲であることが分かりました。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/result-approximate-dt.png" title="近似到達圏の結果">}}

{{< callout >}}

近似到達圏によって得られた移動時間を新しいエリアでの出店時の商圏範囲の基準として利用することで、より高精度な商圏分析を行うことができます。

{{< /callout >}}

5. [プロジェクト] タブ → [保存] を選択し、<a href="https://pro.arcgis.com/ja/pro-app/latest/help/projects/save-a-project.htm" target="_blank">プロジェクトを保存</a>します。

# まとめ

この演習では、顧客データを基にした実勢商圏を作成することができました。さらに、実勢商圏を近似した道路時間商圏を作成し、各店舗の商圏範囲が自動車で平均何分圏に該当するのかを調べることができました。

また、以下のツールの操作について学びました。

- [顧客分布商圏の生成] ツール
- [近似到達圏の生成] ツール


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

