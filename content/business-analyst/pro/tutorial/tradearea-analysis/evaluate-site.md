+++
title = "新規候補地に対する分析 (クイック商圏)"
description = "クイック商圏ツールの使用法や集計結果の Excel への出力方法を学びます。"
weight = 9
alwaysopen = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 20 分です。

{{< /callout >}}

「<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/evaluate-site.htm" target="_blank">クイック商圏</a>」を使用することで、商圏作成からレポートの実行までを簡単に行うことができます。本演習では、西船橋駅を評価対象として分析を行います。

# 演習

## 演習用プロジェクトの作成

1. Windows の [スタート] ボタンをクリックし、[ArcGIS] → [ArcGIS Pro] を選択して ArcGIS Pro を起動します。
2. [ArcGIS サイン イン] ダイアログが表示された場合は、ArcGIS Online のユーザー名とパスワードを入力し、[サイン イン] をクリックします。
3. [新しいプロジェクト] から [マップ] をクリックします。
4. [新しいプロジェクトの作成] ダイアログで、「クイック商圏プロジェクト」と名前を付けて [OK] をクリックします。

{{< callout >}}

新規プロジェクトの作成方法の詳細は、<a href="https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgis_pro_user_guide.pdf#page=14" target="_blank">ArcGIS Pro 逆引きガイド</a>をご覧ください。

{{< /callout >}}

{{< callout >}}

[Business Analyst データ ソース](/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定) が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}
## クイック商圏

クイック商圏を実行して、西船橋駅を起点とした商圏作成を行います。

1.	[解析] タブ → [ワークフロー] グループの [ビジネス解析] → [クイック商圏] をクリックします。
   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/launch-evaluate-site.png" title="クイック商圏の起動" >}}

[クイック商圏] ウィザードの [ステップ 1: 位置] で、解析対象となる位置を指定します。

2.	[場所検索] タブの検索ボックスに「西船橋駅」と入力し、Enter キーを押します。
3.	検索結果が表示されるので、選択して [次へ] をクリックします。

[ステップ2: バッファー] で商圏を作成します。

4.	[道路距離/時間商圏] タブを選択し、以下のように設定し、[次へ] をクリックします。
    パラメーター | 設定値
    -- | --
    距離タイプ | 運転時間
    時間 | 5, 10, 15 分
    ディゾルブ オプション | ディスク

   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/evaluate-sites-step2.png" title="ステップ2: バッファー" >}}

   {{< callout >}}

   ディゾルブ オプションでは、複数商圏生成時の形状を指定します。<br/>
   ・リング：ドーナツ状の商圏を生成します。<br/>
   ( 例: 5,10 分の道路時間商圏の場合、0-5 分の到達圏ポリゴンと 5-10 分の到達圏ポリゴンを生成します。 )<br/>
   ・ディスク :ドーナツ状になりません。<br/>
   ( 例: 5,10 分の道路時間商圏の場合、0-5 分の到達圏ポリゴンと 0-10 分の到達圏ポリゴンを生成します。 )<br/>

   {{< /callout >}}

5. [ステップ3: 解析] では、何も設定せず [次へ] をクリックします。

 {{< callout >}}

   ステップ 3 では、作成する商圏に対してインフォグラフィックスやレポートの作成、統計データの集計を実行できます。

 {{< /callout >}}

6. [ステップ4: サマリー] で設定内容を確認し、[完了] をクリックします。

ツールが実行され、マップ上に商圏が追加されます。

## 商圏に統計データを集計する

クイック商圏で作成した商圏に対して、統計データを集計してみましょう。

1. [解析] タブ → [ジオプロセシング] グループの [ツール] をクリックします。
2. 表示された [ジオプロセシング] ウィンドウで [ツールボックス] タブを選択します。
3. [Business Analyst ツール] → [解析] → [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/enrich-layer-advanced.htm" target="_blank">レイヤーへの情報付加 (Enrich Layer)</a>] を開きます。
  {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/open-enrichlayer.png" title="レイヤーへの情報負荷ツールの起動" >}}

レイヤーへの情報付加ツールに必要な項目を設定します。

4. [入力フィーチャ] のプルダウンから「クイック商圏¥バッファー」レイヤーを選択します。
5. [出力フィーチャクラス] で、[参照] ボタンをクリックして「西船橋駅周辺の人口世帯」と入力します。
6. [変数] 横の [+] ボタンをクリックして、データ ブラウザーを開きます。
  {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/browse-variables.png" title="データブラウザを開く" >}}

データ ブラウザーでは、集計する統計変数を選択することができます。今回は、人口総数と世帯総数を選択します。

6. [人口] → [人口総数] → [2020 人口総数] にチェックを入れます。
7. [カテゴリ] に戻り、[世帯] → [世帯総数] → [2020 世帯数 総数] にチェックを入れます。
8. [詳細パネルの表示/非表示] をクリックし、2 変数が選択されていることを確認して、[OK] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/enrich-layer.png" title="データ ブラウザー">}}

9. 各パラメーターが設定されているのを確認して、[実行] をクリックしてツールを実行します。

[コンテンツ] ウィンドウおよびマップに結果レイヤーが追加されるので、商圏別に人口および世帯が集計されていること確認します。

10. 結果レイヤーである「西船橋駅周辺の人口世帯」レイヤーを右クリック → [属性テーブル] をクリックします。

   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/enrich-layer-result.png" title="レイヤーへの情報付加の結果">}}

11. [西船橋駅周辺の人口世帯] テーブルの [×] をクリックして、属性テーブルを閉じます。

## 解析結果を Excel としてエクスポート

商圏レイヤーに付与された人口・世帯の値を Excel 形式でエクスポートします。

1. [ジオプロセシング] ウィンドウの [戻る (←) ] ボタンをクリックします。
2. [ツールの検索] に「Excel」と入力します。
3. 検索結果から [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/conversion/table-to-excel.htm" target="_blank">テーブル → Excel (Table to Excel)</a>] ツールをクリックして開きます。

 {{< callout >}}

  関連するツールが複数表示されますが、今回使用するのは [**テーブル → Excel (Table to Excel)**] ツールですので、ご注意ください。

 {{< /callout >}}

4. 以下のように設定して、[実行] をクリックします。
    パラメーター | 設定値
    -- | --
    入力テーブル | 西船橋駅周辺の人口世帯
    出力 Excel ファイル | [参照] ボタンをクリックし、任意の保存場所に「西船橋駅周辺の人口世帯.xlsx」という名前で保存
    フィールド エイリアスを列ヘッダーとして使用する | チェックをオンにする

エクスポートした Excel ファイルを開いて、西船橋駅を起点とした運転時間商圏レイヤーの情報と人口・世帯の集計値が含まれていることを確認します。（要 Microsoft Excel）

5. ツール実行後に [詳細の表示] にカーソルを当て、[パラメーター] タブの [出力 Excel ファイル] を選択します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/tradearea-analysis/excel-result.png" title="出力 Excel ファイル">}}

6. [プロジェクト] タブ → [保存] を選択し、<a href="https://pro.arcgis.com/ja/pro-app/latest/help/projects/save-a-project.htm" target="_blank">プロジェクトを保存</a>します。

# まとめ

この演習では、マップ上の任意の位置を選択して商圏を作成しました。さらに、商圏内の統計データを集計し、その結果をテーブル データとして出力することができました。また、以下ツールの操作について学びました。
- [クイック商圏] ツール
- [レイヤーへの情報付加] ツール
- [テーブル → Excel] ツール

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

