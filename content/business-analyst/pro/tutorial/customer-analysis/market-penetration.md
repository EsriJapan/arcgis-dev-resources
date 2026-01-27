+++
title = "市場シェアの把握"
description = "顧客データの集計値を市場ポテンシャルで割ることで、エリアごとの市場シェアを算出します。"
weight = 13
alwaysopen = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 30 分です。

{{< /callout >}}

本演習では、商圏に重なる区画を抽出し、顧客データと市場ポテンシャルをもとに、町丁・字等別の市場シェアを算出します。また、市場シェアとポテンシャルを 2 軸で表現することで「ターゲット エリア」を抽出します。

{{< callout >}}

市場シェアの詳細は、ビジネスマップ用語集「<a href="https://www.esrij.com/business-map-glossary/trade_area/market_share/" target="_blank">市場占有率</a>」をご覧ください。

{{< /callout >}}

# 演習

商圏やポリゴンに重なる町丁・字等を抽出します。
## 演習用データのダウンロード

1. <a href="https://www.arcgis.com/home/item.html?id=d4cf8c7d454f4252b379cf9bc263b949" target="_blank">BA Pro チュートリアル-顧客分析 プロジェクトパッケージ</a>が無い場合は、ダウンロードし、プロジェクトパッケージを開きます。
2. [演習3] マップを開きます。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/ca-tutorial-ex3-35.png" title="演習2">}}

[コンテンツ] ウィンドウおよびマップ上に「自社店舗」レイヤー、「自社顧客」レイヤーおよび「顧客分布商圏_7割」レイヤーが追加されていることを確認します。

{{< callout >}}

[Business Analyst データ ソース](/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定) が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}
## 顧客分布商圏に重なる区画の抽出

1. [解析] タブ → [ジオプロセシング] グループの [ツール] をクリックし、[ジオプロセシング] ウィンドウの検索ボックスに「カラー コード」と入力します。
2. 検索結果の中の「<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/create-color-coded-layer.htm" target="_blank">カラー コード レイヤー (Color Coded Layer)</a>」ツールをクリックして開きます。
3. [カラー コード レイヤー] ツールが開いたら、以下のように設定し、[実行] をクリックします。
    パラメーター | 設定値
    -- | --
    分類変数 | 2020 人口総数
    出力レイヤー名 | 2020 人口総数 レイヤー
    対象エリア | 顧客分布商圏_7割
    出力ジオデータベース | デフォルトのまま
    フィーチャ データセット名 | 顧客分布エリア

4. [2020 人口総数 レイヤー] を選択すると [カラー コード グループ レイヤー] タブが表示されるので、[詳細レベル] を [町丁・字等] に変更します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/ccl_level_switch.png" title="詳細レベル">}}

ツールが完了すると、商圏に重なる町丁・字等レイヤーがマップに追加されます。

{{< callout >}}

[詳細レベル] を自動に設定すると、縮尺に応じて表示される区画レベルが変わります。

{{< /callout >}}

## 市場シェアを算出する

町丁・字等別の市場シェアを算出します。

1. [ジオプロセシング] ウィンドウの [戻る] ボタンをクリックし、検索ボックスに「市場占有率」と入力します。
2. 検索結果の中の [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/calculate-market-penetration.htm" target="_blank">市場占有率の計算 (Calculate Market Penetration)</a>] ツールをクリックして開きます。
3. 以下のように設定して、[実行] をクリックします。
   パラメーター | 設定値
   -- | --
   入力フィーチャ | 2020 人口総数 レイヤー\町丁・字等
   出力フィーチャクラス | 町丁字等別市場シェア
   ID フィールド | ID
   市場占有率の分母フィールド | 2020 人口総数
   入力顧客フィーチャ | 自社顧客
   エリア説明フィールド | NAME
   レポートの作成 | チェックボックスをオン

ツールが完了すると、マップに市場シェア別に色分けされた町丁・字等が追加されます。作成したレポートを開いて結果を確認します。

4. [市場占有率の計算] ツールの [詳細の表示] にカーソルを合わせて、[パラメーター] タブの [出力レポート] をクリックして出力されたレポートを開きます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/result-market-penetration.png" title="出力レポート">}}

町丁・字等別の顧客数や市場シェアが記入されたレポートが開きます。

## 2 つの変数を用いて表示

2 変数シンボルを用いて、2 つの属性の関連性を直感的に理解するマップを作成します。以前は<a href="https://www.esrij.com/business-map-glossary/analytical_method/cross_ranking/" target="_blank">クロスランキング</a>とも呼ばれていました。

ここでは、市場ポテンシャル (人口総数) と市場シェアでシンボル設定し、「市場ポテンシャルは高いが、市場シェアは低い」エリアを可視化します。

1. [コンテンツ] ウィンドウの「町丁字等別市場シェア」レイヤーを右クリック → [シンボル] をクリックして、[シンボル] ウィンドウを開きます。
2. [プライマリ シンボル] を「等級色」から「2 変量色」に変更します。
3. 色分けに使用する変数と分類方法を、以下のように設定します。
   - フィールド 1: 市場占有率 (%)
   - フィールド 2: 2020 人口総数
   - 方法: 等量

市場シェアの結果レイヤーのシンボルが変更され、[コンテンツ] ウィンドウの凡例が以下のように変わります。右下の色で塗られたエリアは、市場ポテンシャルは高いが市場シェアが低い＝ターゲットとなるエリアであることを表します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/bivariate-colors.png" title="市場シェアののシンボル設定">}}

4. [プロジェクト] タブ → [保存] を選択し、<a href="https://pro.arcgis.com/ja/pro-app/latest/help/projects/save-a-project.htm" target="_blank">プロジェクトを保存</a>します。

# まとめ

この演習では、既存のポリゴンに重なる区画ポリゴンと顧客ポイントを使用して、エリア別の市場シェアを算出しました。また、市場ポテンシャルと市場シェアの 2 つの属性で色分けすることで「ターゲット エリア」を可視化することができました。

また、以下のツールの操作を学びました。

- [カラー コード レイヤー] ツール
- [市場占有率の計算] ツール
- シンボル設定 (2 変量)

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

