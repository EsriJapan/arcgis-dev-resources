+++
title = "カスタム変数を用いたカラーコード マップの作成"
description = "カラーコード マップの応用的な使い方を学びます。"
weight = 7
alwaysopen = false
draft = false
publishDate = 2022-02-10T00:00:00+09:00
+++

カスタム変数を用いてカラーコード マップの作成し、商圏に重なる範囲の絞り込みを行います。また、その結果を Excel ファイルとしてエクスポートします。

{{< callout type = "important" >}}

<a href="https://doc.arcgis.com/ja/business-analyst/web/color-coded-maps.htm" target="_blank" rel="noopener noreferrer">カラーコード マップ</a>では、すばやく対象地域の統計情報をマッピングできます。カラーコード マップの基本的な操作方法は、ガイドツアーの「レベル 1 ：データからカラーコード マップを作成」で学ぶことができます。

{{< /callout >}}

## 商圏の作成

まず、商圏を作成します。

1. [マップ] タブ→ [エリアの定義] →  [位置の検索] をクリックします。
2. [住所を入力するかマップにピンをドロップ] に「東京都新宿区西新宿２-８-１」と入力し、[検索] を押します。
3. [位置に名前を付けます。] に「東京都庁」と入力し、[適用] をクリックします。
4. [位置の周辺にエリアを追加します。] の設定はそのままで、[適用] をクリックします。

マップ上に、東京都庁を中心としたリング商圏が作成されます。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/colorcodedmap1.png" width="80%">}}

## カスタム変数を用いたカラーコード マップの作成

次に、カスタム変数を作成し、その変数を用いたカラーコード マップを作成します。

1. [マップ] タブの [マップの作成] → [カラーコード マップ] をクリックします。
2. 左側に [カラーコード マップ] ダイアログ ボックスが表示されたら、[+ カスタム変数の作成] をクリックします。
3. [カスタム変数の作成] ダイアログ ボックスが開いたら、[年齢] カテゴリをクリックし、[年代別人口] をクリックします。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/PopbyAge_24r2.png" width="80%">}}

4. 「2020 人口 20 歳代 (国勢調査)」および「2020 人口 30 歳代 (国勢調査)」にチェックを入れます。<br>
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/select-20s30s_24r2.png" width="80%">}}

5. [選択した変数の追加] をクリックします。
6. [合計値として追加] をクリックします。
7. [保存および追加] をクリックします。
8. [カスタム変数の保存] ウィンドウで、「2020年20-30歳代の人口」と入力し、[保存] をクリックします。

マップ上に 20-30 歳代人口が表示されます。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/colorcodedmap3.png" >}}

さらに、商圏に重なる区画のみを抽出します。

9. [カラーコード マップ] ダイアログ ボックスの [区画] タブを展開し、[対象区画] ドロップダウン リストをクリックし、[自分のサイト] をクリックします。
10. [サイトの追加] ウィンドウが開いたら、[現在のマップ上] タブをクリックし、「東京都庁」にチェックを入れて [適用] をクリックします。<br>{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/colorcodedmap4_24r2.png" title="商圏の範囲に切り替え" >}}
 
商圏に重なる区画のみにフォーカスしたマップを作成することができました。

{{< callout type="info" >}}

[カラーコード マップ] ダイアログ ボックスの [区画] タブ内の [詳細レベル] を指定することで、縮尺に関わらず、指定した区画レベルで表示することができます。

{{< /callout >}}

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/colorcodedmap5.png" >}}

{{< callout type = "info" >}}

アプリケーション下部に表示される [結果] ウィンドウでは、マップ上の結果と連動して、区画数や統計値の平均値などを確認することができます。

{{< /callout >}}

## カラーコード マップの結果を Excel ファイルにエクスポート

最後に、表示した区画の 20-30 歳代人口データを Excel ファイルにエクスポートします。

1. アプリケーション下部の [結果] ウィンドウで [テーブル] タブをクリックし、結果をテーブル形式で表示します。
2. [Excel にエクスポート] ボタンをクリックします。<br>{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/colorcodedmap6.png" width="100%">}}
3. ウィンドウが表示されたら Excel ファイルを任意の場所に保存し、Excel ファイルを開きます。

商圏に重なる町丁・字等別の人口を Excel ファイルにエクスポートすることができました。