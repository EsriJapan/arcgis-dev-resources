+++
title = "クラシック レポート テンプレートの作成"
description = "クラシック レポート テンプレートを作成し、クイック商圏で作成したエリアのレポートを出力します。"
weight = 27
alwaysopen = false
data = 2021-10-28T17:07:25+09:00
author = "石橋"
draft = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 30 分です。

{{< /callout >}}

このチュートリアルでは、クラシック レポート テンプレートの作成・配置方法、デザインの編集方法について学びます。本演習を通じて、以下のようなレポート テンプレートを作成します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/report-result_v33.png" title="出力されたレポート">}}

## 演習用プロジェクトの起動

BA Pro を起動して、任意の名前でプロジェクトを作成します。既存のプロジェクトを開いて演習を行うことも可能です。

{{< callout >}}

新規プロジェクトの作成方法の詳細は、<a href="https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgis_pro_user_guide.pdf#page=14" target="_blank">ArcGIS Pro 逆引きガイド</a>をご覧ください。

{{< /callout >}}

{{< callout >}}

[Business Analyst データ ソース](/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定) が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}

## 空のテンプレートの作成

[クラシック レポート エディター] を起動して、空のレポートテンプレートを準備します。

1. [解析] タブ→ [ビジネス解析] → [インフォグラフィックス エディター] をクリックします。
1. [テンプレートの構築] → [クラシック レポート] をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/open-classic-template-edtor.png" title="クラシックレポートエディターを開く">}}  
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/empty-classic-report.png" title="クラシックレポートエディター">}}  
    [クラシック レポート エディター] が表示されます。

## コンテンツの追加

クラシック レポート テンプレートにコンテンツを追加するには

- 既存テンプレートから追加する方法
- データ ブラウザーから変数を追加する方法

の２つの方法があります。

### 既存テンプレートから追加する方法

既存のクラシック レポートを利用して、コンテンツを追加することが可能です。

1. [レポートの選択] タブ → [サマリーレポート] を展開し、 [年齢別人口・経年比較レポート(Classic)] をクリックします。
1. [人口総数・男女別人口 経年比較（2015年 → 2020年）] セクションを [3. レポート テンプレートを～] にドラッグ ＆ ドロップで追加します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/add-dif-table-gender.gif" title="男女別経変比較の追加">}}  
1. 同様に [年代別 人口 増減率（2015年 → 2020年）] セクションをドラッグ ＆ ドロップで追加します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/added-existing-content.png" title="既存コンテンツの追加">}}  

### データ ブラウザーからコンテンツを追加する方法

データ ブラウザーから、ドラッグしてコンテンツを追加することが可能です。

1. [3. レポート テンプレートを～] の [編集] をクリックします。
1. [アイテムの挿入] → [テーブル] をクリックします。
1. [テーブル プロパティ] ダイアログで以下のようにプロパティを設定し、[適用]をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/config_table_property.png" title="既存コンテンツの追加">}}
1. [変数の選択] タブをクリックします。
1. [世帯] → [世帯総数] を選択して、 [2015 世帯数 総数 (国勢調査)] をテーブルの2 行2 列目にドラッグ ＆ ドロップで追加します。同様に、以下の変数をテーブルに追加します
    - 2 行目 3 列目：[2020 世帯数 総数 (国勢調査)]
    - 2 行目 4 列目：[2015-2020 世帯数 総数 増減率(%) (国勢調査)]

1. [1.変数を参照～] で [世帯] → [世帯人員] を選択して、以下の変数をテーブルに追加します。
    - 3 行目 2 列目：[2015 一般世帯1世帯当たり人員 (国勢調査)]
    - 3 行目 3 列目：[2020 一般世帯1世帯当たり人員 (国勢調査)]

1. 以下のように列名と項目名を変更します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/set-label-column.png" title="ラベルと列の設定">}}
1. 6 列目の1 行目をクリックします。続けてシフト キーを押しながら、6 列目の3 行目をクリックしてセルを選択した後、スパナのアイコンをクリックして、[テーブルの変更] で [セルのマージ] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/merge_cell_chart.gif" title="チャート用セルのマージ">}}
1. 2 行目の2 ,3 列目を選択した後、スパナのアイコンをクリックして、[チャートの作成] で [水平バー チャート] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/create_horizonal_barchart.gif" title="水平バーチャートの作成">}}
1. 水平バー チャートをマージしたセルにドラッグ ＆ ドロップで移動させます。チャートのあったセクションは削除します。
1. [セクション オプション] → [セクション タイトル] にチェックを入れ、「年代別　世帯数及び　一般世帯1世帯当たり人員　経年比較 (2015年 → 2020年)」と入力して、[×] でセクション オプションを閉じます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/input-section-title.png" title="セクションタイトルの入力">}}
1. 以下のようにチャートが表示されるようにセルの高さを枠線をドラッグして調整します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/layout-table.png" title="レイアウトの調整">}}

## マップの追加

レポート テンプレート にマップを追加します。

1. [アイテムの挿入] → [マップ] をクリックします。
1. [マップの参照と選択] ダイアログから [地形図] を選択します。

## レポート テンプレートの保存

作成したレポート テンプレートを繰り返し使えるようにするため、保存を行います。

1. [クラシック レポート エディター] タブの [保存] をクリックします。
1. [レポート テンプレートの保存] ダイアログの [タイトル] に「カスタムレポート(Classic)」と入力して [保存] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/save-report-template.png" title="レポートテンプレートの保存">}}
1. [マイ レポート] に作成したテンプレートが追加されます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/myreport-list.png" title="マイレポートの確認">}}

{{< callout >}}

作成したテンプレートの保存場所は以下の手順で設定できます。

1. [プロジェクト] タブをクリックして、[オプション] をクリックします。
1. [オプション] ダイアログ ボックスの [アプリケーション] 見出しの下で、[Business Analyst] をクリックします。
1. [レポート テンプレートのオプションの設定] で、次のいずれかを選択します。
    - [プロジェクトのホーム フォルダーを使用] を選択
    - [この場所を使用] を選択して、任意のフォルダーを参照
1. [OK] をクリックして、[オプション] ダイアログ ボックスを閉じます。

{{< /callout >}}

## クラシック レポートの実行

作成したレポート テンプレートを利用して、レポートを作成します。

### クイック商圏の作成

分析対象となる商圏を作成します。[クラシック レポート エディター] タブを閉じて、マップを表示させます。

1. [解析] タブ → [ワークフロー] グループの [ビジネス解析] ボタン → [クイック商圏] をクリックします。

    [クイック商圏] ウィザードの [ステップ 1: 位置] で、解析対象となる位置を指定します。
1. [場所検索] タブを開き、検索ボックスに「西船橋駅」と入力し、Enter キーを押します。
1. 検索結果が表示されるので、選択して [次へ] をクリックします。

    [ステップ2: バッファー] で商圏を作成します。
1. [道路距離/時間商圏] タブを選択し、以下のように設定し、[次へ] をクリックします。
    - 距離タイプ: 運転時間
    - 時間: 「5」と入力します。単位は「分」に設定します。
    - ディゾルブ オプション: ディスク
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/evaluate-site-step2_v33.png" title="クイック商圏:ステップ２">}}
1. [ステップ3: 解析] では、何も設定せず [次へ] をクリックします。
1. [ステップ4: サマリー] で設定内容を確認し、[完了] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/evaluate-site-result_v33.png" title="商圏ポリゴンの追加">}}

ツールが実行され、マップ上に商圏が追加されます。

### サマリーレポートの実行

作成した商圏を対象としたレポートを作成します。

1. [解析] タブ → [ジオプロセシング] グループの [ツール] をクリックします。
1. [ツールボックス] タブを選択し、[Business Analyst ツール] → [レポート] → [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/create-summary-reports.htm" target="_blank">サマリー レポート (Summary Reports)</a>] を開きます。
1. [入力フィーチャ] のプルダウンから「クイック商圏¥バッファー」レイヤーを選択します。
1. [レポートの作成] のプルダウンから「マイ レポート」 → [カスタムレポート(Classic)] のチェックボックスをオンにし、[追加] をクリックします。
1. [実行] をクリックします。
1. [ジオプロセシング] ウィンドウ の[詳細の表示] をクリックし、[パラメーター] タブの [出力ファイル] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/summary-report-result.png" title="レポートを開く">}}
レポートが出力されていることを確認します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-classicreport/report-result_v33.png" title="出力されたレポート">}}

# まとめ

このチュートリアルでは、空のテンプレートからクラシック レポート テンプレートを作成する方法を学びました。また、クイック商圏で商圏を作成し、カスタム レポートを出力する方法を学びました。
