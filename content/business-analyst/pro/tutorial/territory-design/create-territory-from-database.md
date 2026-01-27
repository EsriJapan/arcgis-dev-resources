+++
title = "現状のテリトリーを可視化"
description = "既存のエリア分けの情報を持つテーブルを使用して現状のテリトリーをマップに可視化します。"
weight = 20
alwaysopen = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 30 分です。

{{< /callout >}}

本演習では、区画ごとに営業担当が整理されたテーブル データを用いて、既存エリアを可視化したテリトリーを作成する方法を学びます。

# 演習

## 演習用データのダウンロード

1. <a href="https://www.arcgis.com/home/item.html?id=0dce6715d8674479b4bd9860c37ad814" target="_blank">BA Pro チュートリアル-テリトリー プロジェクトパッケージ</a>をダウンロードします。
2. ダウンロードした「BAProチュートリアル-テリトリー.ppkx」を開きます。
3. [演習1] マップを開きます。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/territory-tutorial-ex1.png" title="演習1">}}


{{< callout >}}

<a href="/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定" target="_blank">Business Analyst データ ソース</a>が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}

## 既存の営業担当エリア情報テーブルの確認

プロジェクトパッケージはデフォルト設定では、以下の場所に展開されます。

> C:\Users<ユーザー名>\Documents\ArcGIS\Packages\BAProチュートリアル-テリトリー_xxxx

既存の営業担当エリア分けの情報を持つテーブル データをマップに追加します。

1. [マップ] タブ → [レイヤー] グループの [データの追加] をクリックします。
2. [データ] を選択して、[データの追加] ダイアログを開きます。
3. 演習データ内の Excel シートを選択し、[OK] をクリックします。
    ><上記展開先>\commondata\userdata\既存の営業担当エリアリスト.xlsx\担当エリア$

{{< callout >}}

Excel の読み込みができない場合、[事前準備](/business-analyst/pro/tutorial/prepare-for-tutorial/)をご確認ください。

{{< /callout >}}

{{< callout >}}

[フォルダー] に上記展開先のパスが接続されているため、[フォルダー] から Excel ファイルに接続することができます。

{{< /callout >}}

[コンテンツ] ウィンドウに「担当エリア$」レイヤーが追加されます。

4. 「担当エリア$」レイヤーを右クリック → [開く] をクリックし、テーブルを開きます。

テーブルに、以下の情報が格納されていることを確認します。
- 町丁字等コード
- 町丁字等名
- 顧客数
- 担当拠点コード
- 担当拠点名

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/territory-area-table.png" width="35%" title="属性テーブル">}}

5. テーブルの [×] ボタンをクリックして、テーブルを閉じます。

## 営業担当エリア ポリゴンの作成

上記テーブル データを使用して、営業担当エリアの情報を持つ町丁・字等ポリゴンを作成します。

1. ArcGIS Pro 上部の [コマンド検索] で「標準区画」と入力します。
2. 検索結果の中の [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-standard-geography-trade-areas.htm" target="_blank" >標準区画商圏の生成 (Generate Standard Geography Trade Areas)</a>] ツールをクリックして開きます。
3. 以下のように設定して、[実行] をクリックします。
    パラメーター | 設定値
    -- | --
    区画レベル | 町丁・字等 (JP.Blocks)
    出力フィーチャクラス | 世田谷区営業担当エリア
    入力タイプ | テーブル
    区画 ID テーブル | 担当エリア$
    区画キー フィールド | 町丁字等コード

マップ上に「担当エリア$」テーブルの属性が結合された状態で、世田谷区内の町丁・字等ポリゴンが追加されます。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/result-standard-geography.png" title="世田谷区ポリゴン">}}

## 現状のテリトリーを可視化

前のステップで生成した世田谷区の町丁・字等ポリゴンに含まれる営業担当拠点の情報を元に、現状の担当エリアを再現したテリトリーを作成します。

1. ArcGIS Pro 上部の [コマンド検索] で「テリトリー インポート」と入力します。
2. 検索結果の中の [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/import-territory-solution.htm" target="_blank" >テリトリー ソリューションのインポート (Import Territory Solution)</a>] ツールをクリックして開きます。
3. 以下のように設定します。
    - 入力データ：世田谷区営業担当エリア
    - テリトリー ソリューションの名前：現状の営業担当エリア
4. [レベル設定] パラメーターを以下のように設定します。
    - レベル名：ベース
    - ID フィールド：町丁字等コード
    - 名前フィールド：町丁字等名
    - 上位 ID フィールド：担当拠点コード
5. [他を追加] をクリックし、追加で以下のように設定します。
    - レベル名：テリトリー
    - ID フィールド：担当拠点コード
    - 名前フィールド：担当拠点名
6. 下図のように設定されていることを確認し、[実行] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/import-territory-solution-setting.png" width="30%" title="ツールの設定画面">}}

マップ上に、現状の営業担当を可視化したテリトリー ソリューション レイヤーが追加されます。なお、テリトリーの色分けは画像と異なる場合があります。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/result-import-territory-solution.png"  width="700px" title="現状の営業担当を可視化したテリトリー">}}

{{< callout >}}

テリトリー ソリューション レイヤーは、テリトリー デザインに関連する各種レイヤーが格納されるグループ レイヤーです。デフォルトで以下の 2 種類のレイヤーが格納されます。<br/>
- ベース レイヤー：テリトリーを構成する最小単位の区画レイヤー (レベル 0)
   - ポリゴンまたはポイント フィーチャを設定できます。
- テリトリー レイヤー：ベース レイヤーやテリトリー レイヤーをグルーピングしたレイヤー (レベル 1～)
  - [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/create-territory-solution.htm" target="_blank">テリトリー ソリューションの作成</a>] 時にレベル 1 のテリトリー レイヤーが自動で 1 つ作成され、初期設定では空のレイヤーとして出力されます。
  - テリトリー レイヤーは複数のレベルを階層的に作成することができ、それぞれのレベルでテリトリーを構築することができます。<br/>
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/new-territory-solution-layer.png" width="500px" title="テリトリー ソリューション レイヤー">}}<br/>
{{< /callout >}}

{{< callout >}}

本演習では、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/import-territory-solution.htm" target="_blank" >テリトリー ソリューションのインポート</a>] ツールを使用して、レベル 1 のテリトリー レイヤーに関する設定を行った上でテリトリー ソリューション レイヤーを作成するため、初めからテリトリー分けが完了した状態で出力されます。

{{< /callout >}}

## 結果の確認

作成されたテリトリー (営業担当エリア) の結果を [テリトリーの検証] ツールを使って確認します。

1. [コンテンツ] ウィンドウ上の「現状の営業担当エリア」レイヤーを選択し、上部に表示される [テリトリー デザイン] タブをクリックします。
2. [テリトリーの検証] ボタンをクリックし、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/validate-territories.htm" target="_blank" >テリトリーの検証 (Validate Territories)</a>] ツールを開きます。
3. デフォルトの設定のまま [実行] をクリックします。
4. ツール下部に結果が表示されるので、[詳細の表示] にカーソルを合わせます。

「テリトリーが連続していません (3)」というメッセージが表示されています。これは、3 つのテリトリーで飛び地が発生していることを表します。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/confirm-result-with-map.png" width="700px" title="結果をマップで確認">}}

{{< callout >}}

検証結果は必ずしも上記と同じものになるとは限りません。そのため、問題が検出されない場合もあります。

{{< /callout >}}

## チャートの作成

次に、テリトリーごとに顧客数の合計値を比較するチャートを作成します。事前準備として、テリトリー レイヤーに対して「顧客数の合計値」をレベル変数として追加します。

{{< callout >}}

レベル変数は、指定したレベルのテリトリーに対して追加できる数値フィールドです。テリトリーを最適化する時の指標として使用されます。

{{< /callout >}}

1. [コンテンツ] ウィンドウ上の「現状の営業担当エリア」レイヤーを選択し、上部に表示される [テリトリー デザイン] タブをクリックします。
2. [変数の追加] ボタンをクリックし、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/add-level-variables.htm" target="_target">レベル変数の追加 (Add Level Variables)</a>] ツールを開きます。
3. 以下のように設定します。
    - 入力テリトリー ソリューション：現状の営業担当エリア
    - レベル：テリトリー[1]
    - ベース レベル：ベース[0]
4. [変数] パラメーターを以下のように設定します。
    - 統計フィールド：顧客数
    - 統計：合計
    - フィールド名：顧客数
    - フィールドのエイリアス名：顧客数
5. 下図のように設定されていることを確認し、[実行] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/add-level-variables-setting_v33.png" width="23%" title="ツールの設定画面">}}

テリトリー レイヤーに対して顧客数合計値のレベル変数を設定できました。次に、顧客数の合計値をチャートで可視化します。

6. [テリトリー デザイン] タブの [チャートの作成] ボタンをクリックします。

各テリトリーの顧客数の合計値を比較できるチャートを作成できました。この結果を見ると、拠点 C および E の顧客数が特に多く、拠点によって偏りがあることが分かります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/confirm-result-with-chart.png" width="40%" title="チャートで結果を確認">}}

7. [プロジェクト] タブ → [保存] を選択し、プロジェクトを保存します。

# まとめ

この演習では、区画ごとに既存の営業担当が整理されたテーブルを使用して、既存テリトリーを可視化しました。 さらに、テリトリーの結果をマップやチャートを通して確認し、現状のエリア分けの改善点を把握しました。

また、以下のツールの操作方法を学びました。
- [標準区画商圏の生成] ツール
- [テリトリー ソリューションのインポート] ツール
- [レベル変数の追加] ツール
- テリトリー チャートの作成
- [テリトリーの検証] ツール

各テリトリーが持つ数値を均一化しつつ、飛び地を解消して移動ロスを削減するために、次の演習では、現状の営業担当エリアをテリトリー デザインを用いて最適化する方法を学びます。

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

