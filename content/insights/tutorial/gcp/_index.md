+++
title = "帰宅困難となる従業員の確認"
description = "チュートリアルの事前準備を行います。"
weight = 2
alwaysopen = false
draft = false
publishDate = 2022-02-10T00:00:00+09:00
+++


# はじめに／事前準備
## はじめに
<a href="https://doc.arcgis.com/ja/insights/latest/get-started/get-started.htm" target="_blank">ArcGIS Insights</a> では、<a href="https://doc.arcgis.com/ja/insights/latest/get-started/get-started-with-drag-and-drop.htm" target="_blank">ドラッグ＆ドロップ</a>を活用して簡単にグラフやマップを可視化したり、空間分析を実施したりすることが可能です。また豊富な可視化、空間分析機能を有しており、空間的あるいは属性的な関連性を分析することができます。それらの成果物は他のユーザーと共有するのはもちろんのこと、結果に至る分析フローも同時に保存でき、そのほかの分析に再利用することも可能です。
<br>本項では、ArcGIS Insights の基本的な操作法と空間分析機能を理解して、<a href="https://doc.arcgis.com/ja/insights/latest/get-started/open-workbooks.htm" target="_blank">ワーク ブック</a>やマップ カードを作成、共有する方法についてを下記シナリオを基に学習します。

{{< callout >}}

お使いの ArcGIS Online アカウントに ArcGIS Insights ライセンスが割り当てられている必要があります。割り当て方法については、ArcGIS Insights スタートアップガイドの「<a href="https://doc.esrij.com/insights/get-started/" target="_blank">1. ライセンスの割り当て (共通)</a>」をご覧ください。<br/>
また、本ドキュメントでは ArcGIS Insights 2022.1  (Online) を利用して作成しています。バージョンアップ等で UI 等が一部異なる場合がございます。ご了承ください。
{{< /callout >}}

{{< callout >}}

本演習では 0.24 クレジットを消費します。クレジット詳細については下記のページをご覧ください。<br/>
・<a href="https://doc.arcgis.com/ja/insights/latest/administer/credits.htm" target="_blank">ArcGIS Insights におけるクレジットの消費の概要</a>

{{< /callout >}}

## シナリオ

あなたは会社の管理部門に属しています。災害時に帰宅困難者となる従業員を確認することになりました。まず、従業員の居住地と事業所の位置をマップに可視化して、帰宅困難者となる従業員及び人数、属性を把握しましょう。

## 事前準備

1. 下記の演習用データをダウンロードの上、任意の場所に保存します。
<br> <a href="https://arcg.is/0f1SL0" target="_blank">・従業員リスト.xlsx</a>

2. 演習用データが保存できたら以下のリンクを開いて ArcGIS Online または Portal for ArcGIS に <a href="https://www.arcgis.com/index.html" target="_blank">サインイン</a> します。


3. サインインできたら右上の [アプリランチャー]<img src=" https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/AppLauncher.png" title="アプリランチャー" width="8%" style="all:initial;">をクリックして、[Insights]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/Insights.png" title="ArcGIS Insights ロゴ" width="8%" style="all:initial;"> を選択してクリックして、起動します。
4. 「ようこそ、○○（ユーザー名）さん」と表示されたら、左の分析タブにある [ワーク ブック] をクリックして開きます。[ワーク ブック] を開くと右上に [新しいワーク ブック] が表示されるので、クリックします。
5. [ページに追加] ウィンドウが表示されます。[ファイルのアップロード] をクリックして、先ほど任意の場所に保存したExcel ファイル「従業員リスト.xlsx」を選択します。
6. Excel ファイルはシート毎に読み込みが可能なため、ここでは「オフィス.Table」と「従業員_新宿.Table」にチェックを入れて右下の [追加] をクリックします。
 {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/Tables.png" title="従業員リスト" width="20%">}}

7. 左側のデータ ウィンドウに先ほど選択した Excel シートが追加されました。
8. 「従業員_新宿.Table」の [データセットのオプション] <img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/OptButton.png" title="データセット オプション" width="8%" style="all:initial;"> にカーソルを合わせて、[データ テーブルの表示] をクリックします。テーブル内に以下のような属性情報が格納されていることを確認します。「オフィス.Table」も同様に「住所」の属性情報が格納されていることを確認します。
    - 利用者 ID
    - 氏名
    - 性別や年代などの従業員の属性を表す情報
    - 住所
    - 緯度・経度
9.  左上の「無題のワークブック」を「帰宅困難となる従業員の確認」と変更します。
10.  左上にある [保存]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/insights/tutorial/gcp/Introduction/Save.png" title="保存" width="8%" style="all:initial;"> をクリックして「帰宅困難となる従業員の確認」の [ワークブック] を保存します。