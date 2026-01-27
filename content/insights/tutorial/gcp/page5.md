+++
title = "共有と再利用"
description = "共有と再利用"
weight = 6
alwaysopen = false
draft = false
publishDate = 2022-02-10T00:00:00+09:00
+++

## 共有と再利用
分析結果は自動的にモデルとして記録されています。同じ分析手順で異なる地域を分析したい場合などにモデルを再利用することができます。ここでは、モデルを保存して異なる地域の分析を再度行い、分析結果を共有する手順を説明します。
<br>

### <a href="https://doc.arcgis.com/ja/insights/latest/share/share-model.htm" target="_blank">モデルの共有</a>

1. 画面右上の [解析ビュー]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/AnalysisView.png" title="解析ビュー" width="8%" style="all:initial;"> をクリックして、分析の手順が自動的に保存されていることを確認します。

2. 同じ分析を異なる事業所でも行うために、モデルを共有します。画面右上の一番右側の [公開] ボタンをクリックして [公開] ウィンドウを開きます。

3. 下記のように入力して [公開] をクリックします。
    <ul>
        <li>タイトル: 帰宅困難者の把握モデル</li>
        <li>タイプ: モデル</li>
        <li>タグ: Insights</li>
        <li>共有範囲: 組織名</li>
    </ul>

{{< callout >}}

共有範囲で [すべての人] を選択すると、アカウントを持たないユーザーも閲覧することが可能です。

{{< /callout >}}

### <a href="https://doc.arcgis.com/ja/insights/latest/analyze/automate-analysis-with-models.htm" target="_blank">モデルの利用</a>

1. モデルを再度利用するために、新規のページを作成します。ページ下部の [新規ページ] をクリックして [ページに追加] ウィンドウを開きます。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/NewPage.png" title="ページに追加" width="10%">}}

2. [ページに追加] ウィンドウが表示されたら、[モデル] タブを開き、保存したモデル (ここでは「帰宅困難者の把握モデル」) を選択し、[追加] をクリックします。次に、このモデルで分析したいデータを追加します。

3. 左上の [ページに追加]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/AddToPage.png" title="ページに追加" width="8%" style="all:initial;"> をクリックします。[ファイルのアップロード] を選択して、ドラッグ＆ドロップまたは [コンピューターの参照] より「従業員リスト.xlsx」を追加します。「オフィス.Table」と「従業員_大阪.xlsx」にチェックを入れて、[追加] をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/AddToPageWindow.png" title="コンピューターの参照" width="50%">}}

4. データが追加されたら [解析ビュー]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/AnalysisView.png" title="解析ビュー" width="8%" style="all:initial;"> をクリックします。

5. 「従業員_新宿.xlsx」の下の [+ 更新] をクリックして、[データセットの選択] で「従業員_大阪.Table」をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/Update1.png" title="更新" width="30%">}}

6. 同様に「オフィス.Table」も更新します。[+ 更新] をクリックして、[データセットの選択] で「オフィス.Table」をクリックします。[更新] をクリックすると自動的に分析が行われます。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/Update2.png" title="更新" width="30%">}}

{{< callout >}}

モデルにクレジットを消費するジオコーディングや解析処理が含まれている場合、[更新] ボタンをクリックすると同様の処理が行われ、<a href="https://doc.arcgis.com/ja/insights/latest/administer/credits.htm" target="_blank">クレジット</a>が消費されます。ここでは、0.12 クレジットが消費されます。

{{< /callout >}}


{{< callout >}}

データを出力したい場合は [データセットのオプション] → [エクスポート] から CSV、Shapefile、GeoJSON 形式でエクスポートできます。

{{< /callout >}}

7. 更新完了後、[ページ ビュー]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Model/PageView.png" title="ページ ビュー" width="8%" style="all:initial;"> をクリックして、分析結果が更新されていることを確認します。

### <a href="https://doc.arcgis.com/ja/insights/latest/share/share-page.htm" target="_blank">レポートの公開と共有</a>

1. 分析ページをレポートとして公開し、第三者と共有したい場合は、画面右上の一番右側の [公開] ボタンをクリックします。
2. [公開] ウィンドウが開いたら、[タイプ] がレポートになっていることを確認し、タイトル、説明、タグ、共有範囲を任意に設定し、[公開] をクリックします。

{{< callout >}}

[タイプ] をレポートに設定する場合、「カスタム レイアウトなしでレポートが公開されます。～」というメッセージが出てくる場合があります。このメッセージは、<a href="https://doc.arcgis.com/ja/insights/latest/share/design-report.htm" target="_blank">レポート デザイナー</a>を使用して対話形式のレポートを作成していないと表示されるものです。本演習ではレポート デザイナーは使用せずにレポートを公開します。

{{< /callout >}}

3. 共有ページの URL が表示されます。作成されたリンクを共有すると、分析結果をレポートとして確認することができます。公開したレポートは、手順 2 で設定した共有範囲に含まれる人のみが閲覧できます。
4. 最後に左上にある [保存]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/Save.png" title="保存" width="8%" style="all:initial;"> をクリックしてワークブックを保存すれば、チュートリアルは終了です。

{{< callout >}}

ページに追加したデータセットを ArcGIS Online に共有したい場合は、データ ウィンドウ上のデータセットの [データセットのオプション] → [公開] から「タイトル」、「タグ」、「共有範囲」を設定後に [公開] をクリックするとレイヤーが ArcGIS Onlineに保存されます。

{{< /callout >}}