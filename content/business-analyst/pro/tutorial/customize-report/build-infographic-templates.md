+++
title = "インフォグラフィックス テンプレートの作成"
description = "インフォグラフィックス テンプレートを作成し、クイック商圏で作成したエリアのインフォグラフィックスを出力します。"
weight = 26
alwaysopen = false
data = 2021-10-28T17:07:25+09:00
author = "石橋"
draft = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 30 分です。

{{< /callout >}}

このチュートリアルでは、インフォグラフィックス パネルの作成・配置方法、デザインの編集方法について学びます。本演習を通じて、以下のようなインフォグラフィックス テンプレートを作成します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/report-output25.png" title="出力されたレポート">}}

## 演習用プロジェクトの起動

BA Pro を起動して、任意の名前でプロジェクトを作成します。既存のプロジェクトを開いて演習を行うことも可能です。

{{< callout >}}

新規プロジェクトの作成方法の詳細は、<a href="https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgis_pro_user_guide.pdf#page=14" target="_blank">ArcGIS Pro 逆引きガイド</a>をご覧ください。

{{< /callout >}}

{{< callout >}}

[Business Analyst データ ソース](/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定) が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}

## 空のテンプレートの作成

[インフォグラフィックス エディター] を起動して、空のインフォグラフィックス テンプレートを準備します。

1. [解析] タブ→ [ビジネス解析] → [インフォグラフィックス エディター] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/launch-infographics-editor.png" title="エディタの起動">}}
1. [インフォグラフィックス エディター] が開いたら、[空のテンプレート] タブから [3列、3行] のテンプレートにカーソルを合わせて [開く] をクリックします。
1. [＋] をクリックして、行と列を１ ずつ増やします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/grid-template-3by3.png" title="3,3のテンプレート">}}
1. [一般設定] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/grid-template-option.png" title="ページオプション">}}
1. [ページサイズ] から [A4] を選択して、[適用] をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/template-page-option.png" title="用紙サイズ変更">}}
1. 以下のようにグリッドを編集します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/edit-grid-merge.gif" title="セルのマージ">}}
1. [保存] をクリックします。[インフォグラフィックス テンプレートの保存] ダイアログの [タイトル] に「カスタムインフォグラフィックス」と入力して [保存] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/save-new-template.png" title="テンプレートの保存">}}
1. [マイ テンプレート] タブで「カスタムインフォグラフィックス」にカーソルをあわせ、[開く] をクリックします。

## コンテンツの追加

インフォグラフィックス テンプレートにコンテンツを追加するには

- 既存テンプレートから追加する方法
- データ ブラウザーから変数を追加する方法

の２つの方法があります。

### 既存テンプレートから追加する方法

既存のインフォグラフィックスを利用して、コンテンツを追加することが可能です。

#### インフォグラフィックス パネル の追加

1. 画像の位置のセルにカーソルを合わせて、[追加] → [別のテンプレートからパネルを追加] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e1-place-cursor.png" title="１つ目のエレメント位置">}}
1. [標準テンプレート] タブの「複数エリア比較 プロファイル」テンプレートにカーソルを合わせ、[開く] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e1-open-ref1.png" title="複数エリア比較プロファイルの選択">}}
1. 下のインフォグラフィックス パネルにカーソルを合わせ、[追加] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e1-select-infographic-panel.png" title="インフォグラフィックス パネルの選択">}}

テンプレートに選択したインフォグラフィックス パネルが追加されます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e1-panel-added.png" title="インフォグラフィックス パネルの選択">}}

### データ ブラウザーからコンテンツを追加する方法

データ ブラウザーから、ドラッグしてコンテンツを追加することが可能です。

#### テーブル パネルの追加

1. 画像の位置のセルにカーソルを合わせて、[追加] → [テーブル] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e2-place-cursor.png" title="２つ目のエレメント位置">}}
1. [テーブルの追加] ウィンドウ上で [比較テーブル] を選択し、表示されたカテゴリーから [年齢] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e2-select-category25.png" title="カテゴリの選択">}}
1. [年齢３区分別人口] をクリックし、[計算] を [割合] に変更します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e2-select-category_next25.png" title="継続を閲覧">}}
1. 以下の変数を選択して [次へ] をクリックします。
    - 2020 人口 15歳未満(%)
    - 2020 人口 15-64歳(%)
    - 2020 人口 65歳以上(%)
      {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e2-select-variables25.png" title="カテゴリの選択">}}
1. サイトと比較する区画レベルとして [JP] と [都道府県] を選択して [適用] をクリックします。

    レイアウトに作成したテーブル パネルが追加されます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e2-panel-added.png" title="テーブルの追加">}}

#### チャート パネルの追加

1. 画像の位置のセルにカーソルを合わせて、[追加] → [チャート] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e3-place-cursor.png" title="３つ目のエレメント位置">}}
1. [チャートの挿入] ウィンドウ の [変数またはキーワードの検索] に 「人口増減」と入力して検索を実行します。
1. [2.チャートを～] で [水平ライン チャート] を選択します。
1. パネルに以下の変数を追加します。「1.」で変数を選択し、「2.」へドラッグ & ドロップで追加します。２つ目以降の変数を追加するときには [現在のシリーズに追加] を選択します。
    - 2020-2025 人口総数 増減率(%)
    - 2020-2030 人口総数 増減率(%)
    - 2020-2035 人口総数 増減率(%)
    - 2020-2040 人口総数 増減率(%)
    - 2020-2045 人口総数 増減率(%)
    - 2020-2050 人口総数 増減率(%)
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e3-add-series.png" title="シリーズの追加">}}
1. [2020-2025 人口総数 増減率 (%)] をクリックして、ラベルを「-2025」に変更します。同様に他の年度のラベルも変更します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/update-xlabel_v33.png" title="ラベル変更">}}
1. [チャート オプション] をクリックします。[チャート] セクションを開き、[タイトル] に「人口 増減率 (%)」と入力します。
1. [区画との比較] セクションを開き、[区画との比較を表示] のチェックボックスをオンにします。
1. [凡例] セクションを開き、[凡例を表示] のチェックボックスをオン、[位置] を [下] に選択し、[比較区画を表示] のチェックボックスをオンにします。
1. 凡例の「シリーズ１」をクリックして、「人口総数 増減」に変更します。
1. [適用] をクリックします。
    レイアウトに作成したチャート パネルが追加されます。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e3-panel-added.png" title="チャートの追加">}}

### マップの追加

1. 画像の位置のセルにカーソルを合わせて、[追加] → [マップ] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e4-place-cursor.png" title="４つ目のエレメント位置">}}
1. [マップの参照と選択] ダイアログから[地形図] をクリックします。
 <!-- {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e4-panel-added.png" title="マップの追加後">}}  テンプレートにマップ が追加されます。 -->

### テキストの追加とレイアウトの調整

1. 左上のエレメントを追加していないセルにカーソルを合わせて、[追加] → [インフォグラフィックス] をクリックします。
1. [インフォグラフィックスのヘッダー] にカーソルを合わせて、[追加] をクリックします。
1. 追加されたエレメントにカーソルを合わせて、[編集] をクリックします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e5-edit-header25.PNG" title="ヘッダーの編集">}}
1. 枠からはみ出したロゴとテキストのサイズを変更して、枠内に納めます。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e5-adjust-logo25.png" title="レイアウトの編集">}}
1. ロゴにカーソルを合わせて、[画像の編集] をクリックし、[画像の変更] → [形状とアイコン] を選択します。
1. 表示されたアイコンのリストから任意のアイコンを選択します。
1. 右下の「Add your site~」と書かれているエレメントにカーソルを合わせて、[テキストの編集] をクリックします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e5-edit-text25.PNG" title="テキストの編集">}}
1. [設定を増やす] を選択し、[+ 動的なフィールドまたはノートの追加] をクリックし、[日時] を選択します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/e5-add-date25.PNG" title="日時のテキストスタイル">}}
1. 最後に [適用] をクリックします。

## テンプレートの保存

作成したテンプレートを繰り返し使えるようにするため、保存を行います。

1. [インフォグラフィックス エディター] タブの [保存] をクリックします。
1. [インフォグラフィックス テンプレートの保存] ダイアログの [タイトル] に「カスタムインフォグラフィックス」と入力されていることを確認して [保存] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/save-layout-overwrite.png" title="レイアウトの更新">}}
{{< callout >}}

上書き保存ができない場合は、別名で保存してください。

{{< /callout >}}

3. [置換の確認] ダイアログが表示された場合は [はい] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/save-layout-confirm.png" title="上書きの確認">}}


{{< callout >}}

作成したテンプレートの保存場所は以下の手順で設定できます。

1. [プロジェクト] タブをクリックして、[オプション] をクリックします。
1. [オプション] ダイアログ ボックスの [アプリケーション] 見出しの下で、[Business Analyst] をクリックします。
1. [レポート テンプレートのオプションの設定] で、次のいずれかを選択します。
    - [プロジェクトのホーム フォルダーを使用] を選択
    - [この場所を使用] を選択して、任意のフォルダーを参照
1. [OK] をクリックして、[オプション] ダイアログ ボックスを閉じます。

{{< /callout >}}


## インフォグラフィックスの実行

作成したインフォグラフィックス テンプレートを利用して、レポートを作成します。

### クイック商圏の作成

分析対象となる商圏を作成します。[インフォグラフィックス エディター] タブを閉じて、マップを表示させます。

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

### サマリー レポートの実行

作成した商圏を対象としたインフォグラフィックスを作成します。

1. [解析] タブ → [ジオプロセシング] グループの [ツール] をクリックします。
1. [ツールボックス] タブを選択し、[Business Analyst ツール] → [レポート] → [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/create-summary-reports.htm" target="_blank">サマリー レポート (Summary Reports)</a>] を開きます。
1. [入力フィーチャ] のプルダウンから「クイック商圏¥バッファー」レイヤーを選択します。
1. [レポートの作成] のプルダウンから「マイ レポート」 → [カスタム インフォグラフィックス] のチェックボックスをオンにし、[追加] をクリックします。
1. [レポートの書式設定] → [レポート出力形式] を [HTML] に変更してから、[実行] をクリックします。
1. [ジオプロセシング] ウィンドウ の[詳細の表示] をクリックし、[パラメーター] タブの [出力ファイル] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/summary-report-result.png" title="レポートを開く">}}
インフォグラフィックスが出力されていることを確認します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customize-infographics/report-output25.png" title="出力されたレポート">}}

# まとめ

このチュートリアルでは、空のグリッド テンプレートからインフォグラフィックス テンプレートを作成する方法を学びました。また、クイック商圏で商圏を作成し、カスタムインフォグラフィックスを出力する方法を学びました。
