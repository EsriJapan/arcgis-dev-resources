+++
title = "テリトリーの自動最適化"
description = "位置情報や、売上高などの数値情報を元にテリトリーを最適化します。"
weight = 21
alwaysopen = false
+++

{{< callout >}}

本演習にかかる時間はおよそ 40 分です。

{{< /callout >}}

テリトリー デザインでは、<a href="/business-analyst/pro/tutorial/territory-design/create-territory-from-database/" target="_blank" >現状のテリトリーの可視化</a>だけでなく、位置や数値情報を元にテリトリーを自動最適化することができます。本演習では、以下の要素を考慮して、営業担当エリアを最適化します。
- 各営業担当エリアの顧客数の合計値を均等にする。
- 各営業担当エリアが担当拠点を中心にまとまり、飛び地を持たないようにする。

# 演習

## 演習用データのダウンロード

1. <a href="https://www.arcgis.com/home/item.html?id=0dce6715d8674479b4bd9860c37ad814" target="_blank">BA Pro チュートリアル-テリトリー プロジェクトパッケージ</a>無い場合は、ダウンロードし、プロジェクトパッケージを開きます。
2. [演習2] マップを開きます。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/territory-input-data.png" title="演習用データ">}}

[コンテンツ] ウィンドウおよびマップ上に「営業拠点」レイヤーおよび「世田谷区ポリゴン」レイヤーが追加されていることを確認します。


{{< callout >}}

<a href="/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定" target="_blank">Business Analyst データ ソース</a>が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}

## テリトリー ソリューション レイヤーの作成

最初に、空のテリトリー ソリューション レイヤーを作成します。

1. [解析] タブ → [ワークフロー] グループの [ビジネス解析] ボタン → [新しいテリトリー デザイン ソリューション] をクリックします。
2. [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/create-territory-solution.htm" target="_blank">テリトリー ソリューションの作成 (Create Territory Solution)</a>] ツールが開いたら、以下のように設定してツールを実行します。
    パラメーター | 設定値
    -- | --
    入力フィーチャ | 世田谷区ポリゴン
    テリトリー ソリューションの名前 | 営業担当エリアの最適化
    ID フィールド | 町丁字等コード
    名前フィールド | 町丁字等名

マップ上に、世田谷区ポリゴンをベースにした「営業担当エリアの最適化」レイヤーが追加されます。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/territory-solution-layer.png" title="テリトリー ソリューション レイヤー">}}

## レベル変数の設定

次に、テリトリー分けを行う際の最小単位である「ベース レイヤー」に含まれる数値フィールドをレベル変数として設定します。本演習では、世田谷区ポリゴンのポリゴン数および「顧客数」フィールドの合計値の 2 つをレベル変数として設定します。

{{< callout >}}

レベル変数は、指定したレベルのテリトリーに対して追加できる数値フィールドです。テリトリーを最適化する時の指標として使用されます。

{{< /callout >}}

1. [コンテンツ] ウィンドウ上の「営業担当エリアの最適化」レイヤーを選択し、上部に表示される [テリトリー デザイン] タブをクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/territory-design-tab.png" title="テリトリー デザイン タブ">}}

{{< callout >}}

テリトリー デザインの一連の操作は、[テリトリー デザイン] タブからツールを起動して実行できます。

{{< /callout >}}

2. [テリトリー デザイン] タブの [変数の追加] ボタンをクリックして、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/add-level-variables.htm" target="_target">レベル変数の追加 (Add Level Variables)</a>] ツールを開きます。
3. 以下のように設定されていることを確認します。
    - 入力テリトリー ソリューション：営業担当エリアの最適化
    - レベル：テリトリー [1]
    - ベース レベル：世田谷区ポリゴン [0]
4. [変数] パラメーターについて、以下のように設定します。
    パラメーター | 設定値
    -- | --
    統計フィールド | 顧客数
    統計 | 合計
    フィールド名 | 顧客数
    フィールドのエイリアス名 | 顧客数
5. [他を追加] ボタンをクリックし、さらに以下のように設定します。
    パラメーター | 設定値
    -- | --
    統計フィールド | 顧客数
    統計 | 個数
    フィールド名 | エリア数
    フィールドのエイリアス名 | エリア数
6. 以下の通りに設定できていることを確認し、[実行] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/add-level-variables-setting2_v33.png" width="25%" title="ツールの設定画面">}}

## レベル変数のバランス調整

テリトリー デザインでは、レベル変数に対して重みを個別に設定し、テリトリーを最適化する際に重視する指標の優先度を制御できます。今回は、各担当エリアの顧客数の合計値がなるべく均等になるように、顧客数の優先度を高く設定します。

1. [テリトリー デザイン] タブの [バランス調整変数] ボタンをクリックして、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-balance-variables.htm" target="_target">バランス調整変数の設定 (Set Balance Variables)</a>] ツールを開きます。
2. 以下のように設定します。
    パラメーター | 設定値
    -- | --
    入力テリトリー ソリューション | 営業担当エリアの最適化
    レベル | テリトリー [1]
    バランス調整変数 | 顧客数：70<br/>エリア数：30
3. 以下の通りに設定できていることを確認し、[実行] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/set-balance-variables-setting.png" width="25%" title="ツールの設定画面">}}

## 距離パラメーターの設定

テリトリーを最適化する際には、距離 (直線距離もしくはネットワーク距離) を考慮できます。

1. [テリトリー デザイン] タブの [距離パラメーター] ボタンをクリックして、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-distance-parameters.htm" target="_target">テリトリー距離パラメーターの設定 (Set Territory Distance Parameters)</a>] ツールを開きます。
2. 以下のように設定します。
    パラメーター | 設定値
    -- | --
    入力テリトリー ソリューション | 営業担当エリアの最適化
    レベル | テリトリー [1]
    距離タイプ | 直線
    計測単位 | キロメートル
3. 以下の通りに設定できていることを確認し、[実行] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/set-territory-distance-parameters-setting.png" width="25%" title="ツールの設定画面">}}

{{< callout >}}

距離タイプは、直線距離もしくは運転時間などのネットワーク距離を選択できます。作成するテリトリーが広域にわたる場合、ネットワーク距離を使用した解析は長時間かかります。

{{< /callout >}}

## シード ポイントの追加

拠点を起点にしたテリトリーを構築する場合は、テリトリー シード ポイントを設定します。今回は、営業拠点をシード ポイントとして設定します。

1. [テリトリー デザイン] タブの [シード ポイント] ボタンをクリックして、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/add-territory-seed-points.htm" target="_target">テリトリー シード ポイントの追加 (Add Territory Seed Points)</a>] ツールを開きます。
2. 以下のように設定します。
    パラメーター | 設定値
    -- | --
    入力テリトリー ソリューション | 営業担当エリアの最適化
    レベル | テリトリー [1]
    入力シード ポイント フィーチャ | 営業拠点
    フィールド マップ | 名前：拠点名<br/>ID：拠点コード
3. 以下の通りに設定できていることを確認し、[実行] をクリックします。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/add-territory-seed-points-setting.png" width="25%" title="ツールの設定画面">}}

「営業担当エリアの最適化」レイヤーに「シード ポイント テリトリー」が追加されます。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/added-territory-seed-points.png" title="追加されたシード ポイント">}}

## テリトリーの解析

ここまでの操作で、テリトリー最適化のための設定が完了しました。これらの設定を元に解析を実行し、最適化したテリトリーを構築します。

1. [テリトリー デザイン] タブの [解析の実行] ボタンをクリックして、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/solve-territories.htm" target="_target">テリトリーの解析 (Solve Territories)</a>] ツールを開きます。
2. 以下のように設定し、[実行] をクリックします。
    パラメーター | 設定値
    -- | --
    入力テリトリー ソリューション | 営業担当エリアの最適化
    レベル | テリトリー [1]
    テリトリー数を決定する方法 | ユーザー定義
    テリトリー数 | 7

{{< callout >}}

テリトリーの解析結果は、「ユーザー定義」の場合、ツールで指定した数になります。シード ポイントと同じ数を指定するとすべてのシード ポイントが使用され、それよりも少ない場合は、いずれかのシード ポイントが使用されずに最適化されます。

{{< /callout >}}

テリトリーの解析が実行され、「営業担当エリアの最適化」テリトリー ソリューション レイヤーが色分けされます。テリトリー シード ポイントを中心にしたテリトリーが構築されました。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/result-territory2.png" width="700px" title="テリトリーの解析結果">}}

{{< callout >}}

解析結果は、上記画像と同じものにならない場合があります。また、テリトリー デザインの色分けは画像と異なる場合があります。

{{< /callout >}}

## 結果の確認

作成されたテリトリーの顧客数やエリア数が均等に割り振られているのか確認します。

1. [テリトリー デザイン] タブの [チャートの作成] ボタンをクリックします。
2. [チャート] ウィンドウ左上の [プロパティ] ボタンをクリックします。
3. チャート プロパティの [数値フィールド] → [+ 選択] ボタンをクリックし、「エリア数」にチェックを入れて [適用] をクリックします。

各テリトリーの顧客数およびエリア数を比較できるチャートが表示されます。各テリトリーの顧客数およびエリア数が自動的に均一化されていることが分かります。
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/territory-chart.png" title="テリトリー チャート">}}


## テリトリーの手動調整

構築したテリトリーは、各テリトリーのレベル変数の値をチャートで確認しながら、マップ上で対話的に調整することができます。

1. [テリトリー デザイン] タブの [選択] ボタンをクリックし、マップ上でテリトリーの割り当てを変更したいエリアを選択します。

{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/select-area2.png" width="700px" title="テリトリーの選択">}}

2. [テリトリーの変更] をクリックし、[テリトリーの変更] ウィンドウで、割り当てたいテリトリーを選択し、[割り当て] をクリックします。
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/assign-territory2.png" width="700px" title="テリトリー チャート">}}

{{< callout >}}

[テリトリーの変更] ウィンドウには、テリトリーの変更作業に役立つ各種オプションがあります。選択したテリトリーにズームしたり、テリトリーのフラッシュ、割り当て変更後のレベル変数値が変化を確認したりできます。<br/>
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/assign-territory-option2.gif" width="60%" title="テリトリーの割り当てオプション">}}

{{< /callout >}}

テリトリーの割り当てを変更すると、マップ上のレイヤーの色分けおよびチャートが更新されます。

3. 必要に応じて、マップおよびチャートを確認しながら手順 2, 3 を繰り返し、テリトリーの割り当てを調整します。

以上の手順で、テリトリーの手動調整を実施することができます。

## 最適化したテリトリーの結果をエクスポート

最適化したテリトリーの結果を、フィーチャクラスとしてエクスポートします。

1.	[テリトリー デザイン] タブの [ソリューションのエクスポート] ボタンをクリックして、[<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/export-territory-solution.htm" target="_target">テリトリー ソリューションのエクスポート (Export Territory Solution)</a>] ツールを開きます。
2. 以下のように設定し、[実行] をクリックしてツールを実行します。
    パラメーター | 設定値
    -- | --
    入力テリトリー ソリューション | 営業担当エリアの最適化
    出力フィーチャクラス | 最適化後の営業担当エリア
    出力形状タイプ | テリトリー境界

マップに「最適化後の営業担当エリア」レイヤーが追加されます。

3. [コンテンツ] ウィンドウの「最適化後の営業担当エリア」レイヤーを右クリック → [シンボル] をクリックします。
4. シンボル設定を以下のように変更します。
    - プライマリ シンボル：個別値
    - フィールド 1：テリトリー: 名前

マップ上の「最適化後の営業担当エリア」レイヤーが、先ほど調整したテリトリー別に色分けされます。

{{< callout >}}

テリトリーの結果をテリトリー境界としてエクスポートすると、フィーチャの形状としてはベース レイヤー (本演習における「世田谷区ポリゴン」) と同じものが出力されますが、属性情報にはベース レイヤーが元々持つ属性に加え、テリトリー レイヤーの持つ属性も付与されます。各エリアが割り当てられたテリトリーや、各テリトリーの顧客数の合計値などを確認することができます。<br/>
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/territory-design/exported-data-attribute.png" title="テリトリー境界の属性">}}

{{< /callout >}}

5. [プロジェクト] タブ → [保存] を選択し、プロジェクトを保存します。

# まとめ

この演習では、数値情報や位置情報を元に営業担当エリアのテリトリーを最適化しました。さらに、テリトリーの結果を手動で調整し、エクスポートしました。

また、以下のツールの操作方法を学びました。
- [テリトリー ソリューションの作成] ツール
- [レベル変数の追加] ツール
- [バランス調整変数の設定] ツール
- [テリトリー距離パラメーターの設定] ツール
- [テリトリー シード ポイントの追加] ツール
- [テリトリーの解析] ツール
- テリトリーの割り当て
- [テリトリー ソリューションのエクスポート] ツール

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

