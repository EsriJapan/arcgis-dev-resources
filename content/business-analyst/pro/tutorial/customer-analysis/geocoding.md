+++
title = "顧客・店舗情報の取り込み"
description = "住所情報を元に、店舗や顧客などのポイント データに変換する方法を学びます。"
weight = 7
alwaysopen = false
author = "石橋"
+++

{{< callout >}}

2022 年版以前の Business Analyst 用ローカル データセットに付属する従来形式のロケーターは、ArcGIS Pro 3.0 以降では動作しないのでご注意ください (詳細は<a href="https://www.esrij.com/news/details/155986/" target="_blank">こちら</a>)。

{{< /callout >}}

{{< callout >}}

本演習にかかる時間はおよそ 15 分です。

{{< /callout >}}

# 目的

住所情報を含むテーブル データと [<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/geocoding/geocode-addresses.htm" target="_blank">住所のジオコーディング</a>] ツールを用いて、自社の店舗や顧客をポイント データ化する方法を習得します。本演習では、顧客の住所情報を元に <a href="https://business-map.esrij.com/glossary/3099/" target="_blank">ジオコーディング<a>を行います。

# 演習

## 演習用データのダウンロード

1. <a href="https://www.arcgis.com/home/item.html?id=d4cf8c7d454f4252b379cf9bc263b949" target="_blank">BA Pro チュートリアル-顧客分析 プロジェクトパッケージ</a>が無い場合は、ダウンロードします。
2. ダウンロードした「BAProチュートリアル-商圏分析.ppkx」を開きます。
3. [演習1] マップが開いていることを確認します。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/customer-analysis/ca-tutorial-ex1-35.png" title="演習１">}}

{{< callout >}}

[Business Analyst データ ソース](/business-analyst/pro/tutorial/prepare-for-tutorial/#business-analyst-データ-ソースの設定) が最新のデータセットに設定されていることをご確認ください。

{{< /callout >}}

## 住所情報を含むテーブル データの確認

プロジェクトパッケージはデフォルト設定では、以下の場所に展開されます。
> C:\Users\\<ユーザー名>\Documents\ArcGIS\Packages\BAProチュートリアル-商圏分析_xxxx

顧客のテーブル データをマップに追加します。

1. [マップ] タブ → [レイヤー] グループの [データの追加] をクリックします。
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/add-data25.png" title="データの追加">}}

3. 演習データ内の Excel シートを選択し、[OK] をクリックします。
    > <上記展開先>\commondata\userdata\顧客リスト.xlsx\顧客リスト$

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/add-customer-data.png" title="顧客データの追加">}}

{{< callout >}}

Excel の読み込みができない場合、[事前準備](/business-analyst/pro/tutorial/prepare-for-tutorial/)をご確認ください。

{{< /callout >}}

{{< callout >}}

[フォルダー] に上記展開先のパスが接続されているため、[フォルダー] から Excel ファイルに接続することができます。

{{< /callout >}}

[コンテンツ] ウィンドウに「顧客リスト$」レイヤーが追加されます。

4. 「顧客リスト$」レイヤーを右クリック → [開く] をクリックし、テーブルを開きます。

テーブルに、住所情報や ID などの情報が格納されていることを確認します。

5. テーブルの [×] ボタンをクリックして、テーブルを閉じます。<br/>
   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/confirm-table.png" title="顧客リストの確認">}}

## 顧客ポイント データの作成

1. 「顧客リスト$」レイヤーを右クリック → [テーブルのジオコーディング] を選択します。<br/>
   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/geocode-table.png" title="テーブルのジオコーディング">}}

[テーブルのジオコーディング] ウィザードが起動するので、最初のステップでは使用するロケーター (住所辞書) を選択します。

2. [開始→] をクリックして、[ステップ 1: 使用しているロケーター] で、[参照] ボタンをクリックします。
   {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/reference-locator.png" title="ロケーターの参照">}}

3. 以下のロケーターを選択して [次へ] をクリックします。
    ><データセット配置先>\JPN_EsriJapan_2025\Data\Geocoding Data\Pro_Gaiku_2025.loc

{{< callout >}}

[ArcGIS World Geocoding Service] を選択すると、住居レベルでジオコーディングができます。ただし、ArcGIS Online へのサイン インが必要となり、<a href="https://www.esrij.com/products/arcgis-online/credits/" target="_blank">サービス クレジット</a>を消費します。

{{< /callout >}}

ジオコーディングに使用するフィールドやデータの出力先などを設定します。

4. [ステップ 2: テーブルについて] では、以下のように設定し [次へ] をクリックします。
    - 入力テーブル: 顧客リスト$
    - データはどのように～？: 1 つのフィールド
5. ステップ 3 では、[データ フィールド] に「住所」を指定し、[次へ] をクリックします。
6. ステップ 4 では、[出力] の [参照] ボタンをクリックし、[名前] に「自社顧客」と入力し、[保存] をクリックします。

{{< callout >}}

出力フィーチャクラスのデフォルトの保存先は、プロジェクト配下に保存されているファイル ジオデータベースです。

{{< /callout >}}

7. [次へ] をクリックして表示されるステップ 6 は、そのまま [完了] をクリックします。
8. 設定内容を確認し、[実行] をクリックします。<br/>
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/run-tool.png" title="ジオコーディングの実行">}}

ジオコーディングが実行され、照合結果が表示されます。住所が不一致の場所が 1 ヵ所あるようです。<a href="https://pro.arcgis.com/ja/pro-app/latest/help/data/geocoding/rematch-locations-converted-from-a-table.htm" target="_blank">住所の再照合</a>を行うと、不一致の住所を正しい位置にプロットし直すことができます。
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/result.png" title="ジオコーディング結果">}}

{{< callout >}}

「複数の候補あり」は一致スコアが同一の地点が複数あることを表します。ジオコーディング自体は行われているので、必要に応じて確認を行ってください。

{{< /callout >}}

8. [はい] をクリックして、[住所の再照合] ウィンドウと [自社顧客] の属性テーブルを開きます。

## 住所の再照合

不一致だった住所情報は、[住所の再照合] ウィンドウの [不一致] タブから確認できます。現在の住所は「千葉県船橋二宮1-59」となっています。市区町村名が「船橋」になっていたために、住所の照合に失敗したようです。
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/check-unmatch.png" title="不一致だった住所情報の確認">}}

1. [自動的に適用] トグルをオンにして、[住所] に「千葉県船橋**市**二宮1-59」と入力し、Enter キーを押します。

すると、住所が 100% 一致する候補が 1 ヵ所表示され、マップ上にも候補ポイントが表示されます。

{{< callout >}}

[自動的に適用] を有効にすることにより、住所フィールドの更新後 Enter キーを押すとすぐに新たな候補が検索されるようになります。

{{< /callout >}}

2. 表示された候補を選択して [一致] ボタン（✓）をクリックします。

    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/click-match.png" title="一致のクリック">}}


再照合が実行され、すべての顧客ポイントが正しくプロットされました。プロットした内容を保存します。

3. [編集の保存] ボタンをクリックして、[はい] を選択します。[×] をクリックして、[住所の再照合] ウィンドウを閉じます。<br/>
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/save-rematch_v33.png" title="編集内容の保存">}}


{{< callout >}}

[住所をマップから取得] ボタンを使用すると、マップ上で位置を選択して、住所を照合することができます。<br/>
{{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/geocoding/rematch-from-map.gif" title="マップから住所を照合">}}

{{< /callout >}}

4. [自社顧客] テーブルの [×] をクリックして、テーブルを閉じます。
5. [プロジェクト] タブ → [保存] を選択し、<a href="https://pro.arcgis.com/ja/pro-app/latest/help/projects/save-a-project.htm" target="_blank">プロジェクトを保存</a>します。

# まとめ

この演習では、住所情報を持つテーブル データを使用してジオコーディングを行い、顧客のポイント データを作成することができました。また、以下のツールの操作を学びました。

- [テーブルのジオコーディング] ツール
- [住所の再照合] ツール