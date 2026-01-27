+++
title = "独自データを使用したカスタム インフォグラフィックスの作成"
description = "商圏内の顧客の売上高や売上数を集計するためのカスタム データの設定と、そのデータを利用したインフォグラフィックス テンプレートの作成方法を学びます。"
weight = 11
alwaysopen = false
draft = false
publishDate = 2022-09-02T00:00:00+09:00
+++

このチュートリアルでは、郵便番号別に集計された顧客データを基に、商圏内に含まれる顧客の売上高などを集計するための <a href="https://doc.arcgis.com/ja/business-analyst/web/custom-data-setup.htm" target="_blank">[カスタム データの設定]</a> とそのデータを利用した <a href="https://doc.arcgis.com/ja/business-analyst/web/building-infographic-reports.htm" target="_blank">[インフォグラフィックス テンプレートの作成]</a> を行います。

## ポイント データの取り込み

1.	店舗の顧客情報をまとめた <a href="https://bi-ej.maps.arcgis.com/sharing/rest/content/items/4758b9d37edc4eaba417a109399226c0/data" target="_blank">Excel ファイル (customer.xlsx)</a> をダウンロードします。
2. <a href="https://www.arcgis.com/index.html" target="_blank">ArcGIS Online にサインイン</a> します。
3. <a href="https://doc.esrij.com//online/users-guide/create-data/feature/file" target="_blank">「Excel やテキスト ファイルからフィーチャ レイヤーを作成したい | ArcGIS Online 逆引きガイド」</a>を参考にフィーチャ レイヤーを作成します。
    <br>● 本サンプルデータには、緯度・経度情報も含まれるため「緯度と経度」を用いてフィーチャ レイヤーを作成し、タイトルは「顧客ポイント」に指定します。

## カスタム データの設定

{{< callout type = "important" >}}

ポリゴン データを用いたカスタム データの設定は、<a href="/business-analyst/web/tutorial/guided-tour/" target="_blank">ガイド ツアー</a>のレベル 4 「レポートおよび解析で使用するカスタム データの設定」で学ぶことができます。

{{< /callout >}}

1. BA Web App を開きます。
2. [マップ] タブの [データの追加] → [カスタム データの設定] をクリックします。
3. [カスタム データの設定] ウィンドウで [開始] が表示された場合は、クリックして進みます。
4. [設定の開始] をクリックします。
5. [レイヤーの選択] → [レイヤーを参照] をクリックします。
6. [レイヤーの選択] ダイアログで、[マイ コンテンツ] のデータを格納したフォルダーを選択します。
7. 先ほど作成した「顧客ポイント」にカーソルを合わせ、[＋開く] をクリックします。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/CustomerPoint.png" width="50%" title="" >}}

{{< callout type = "info" >}}

[並べ替えの基準] を [最近] に変更すると、最近追加した順にコンテンツが表示されます。{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/tips_Recently.png" title="" width="80%">}}

{{< /callout >}}

8. [インポートされたレイヤー] が「郵便番号別顧客」になっていることを確認の上、[次へ] をクリックします。選択したレイヤーの変数とカテゴリ (郵便番号別顧客) が表示されます。
9. 以下の 3 つの変数を選択し、「郵便番号別顧客」カテゴリに向かって変数をドラッグ & ドロップします。
    <ul>
    <li>売上高_合計</li>
    <li>売上数_合計</li>
    <li>顧客数</li>
    </ul>
10. カテゴリにカーソルを合わせ、[開く] をクリックします。
    追加した変数の一覧が表示されます。
    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/VariableList.png"  title="">}}
11. [売上高_合計] 変数の横にある [...] → [変数の設定] をクリックします。
12. [変数の構成] ダイアログ ボックス上で各種設定を行います。ここでは、集計結果を円記号付きで取得するためにデータの単位を [通貨] に設定します。
    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/Variable+Configuration.png"  title="">}}
13. 設定ができたら [適用] をクリックし、 [カスタム データの設定] ウィンドウでも [保存] をクリックします。
14. 最後に [完了] をクリックして、カスタム データの設定は終了です。

{{< callout type = "info" >}}

 [変数の構成] ダイアログ ボックスでサマリータイプを [平均] とすると集計値の平均を取得できます。[ウェイト] を設定することで、加重平均を求めることもできます。

{{< /callout >}}

## カスタム データを使用したインフォグラフィックスの作成

{{< callout type="important" >}}

カスタム インフォグラフィックスの基本的な作成方法は、<a href="/business-analyst/web/tutorial/guided-tour/" target="_blank">ガイド ツアー</a>のレベル 4「インフォグラフィックス テンプレートの作成」でご紹介しています。

{{< /callout >}}

今回は顧客の位置を示すマップや商圏内の客単価が分かるインフォグラフィックス テンプレートを作成します。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/CompletionDrawing.png" width="40%" title="">}}

**空のテンプレートを開く**

1. [レポート] タブの [レポートの作成] → [インフォグラフィックスの作成] をクリックします。
2. [空のテンプレート] タブをクリックします。
3. 「2 列、2 行」テンプレートにカーソルを合わせ、[開く] をクリックします。

***マップの追加***
    <br> 集計に使用する商圏を表示するマップを追加します。ここでは、商圏に加えて、集計対象であるポイント データも一緒にマップに表示させるように設定します。

1. 左上のパネル [追加] → [マップ] を選択します。
    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/AddMap.png" width="50%" title="">}}
2. [マップの参照と選択] ダイアログが開いたら、[ベースマップ] タブ → [衛星画像] をクリックします。

***テーブルの追加***
    <br>商圏内の顧客の売上高や顧客数の合計値を表示するテーブルを追加します。
1. 右上のパネルの [追加] → [テーブル] を選択します。
2. [テーブルの追加] ダイアログが開いたら、[1. 追加するテーブルのタイプ～] で、[変数を含むテーブル] を選択します。
3. [2. テーブルを構成する変数を選択～] で、[マイ変数] タブ → [郵便番号別顧客] を選択します。
    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/add_table_24r2.png" width="80%" title="">}}
4. 以下の変数にチェックを入れて、[適用] をクリックします。
    <ul>
    <li>売上高_合計</li>
    <li>売上数_合計</li>
    <li>顧客数</li>
    </ul>

***近傍テーブルの追加***
    <br> 商圏内の顧客が属する店舗名や売上高などの詳細が分かる近傍テーブルを追加します。

{{< callout type = "info" >}}

<a href="https://doc.arcgis.com/ja/business-analyst/web/work-with-maps-and-nearby-panels.htm#ESRI_SECTION1_C9346CC17E6B4AF4AED9F7F82457043A" target="_blank">近傍</a>では、任意で追加したポイント レイヤーや目標物ポイントを使用して、独自の近傍パネルを作成できます。

{{< /callout >}}

1. 左下のパネルの [追加] → [近傍] を選択します。
2. [近傍の位置の追加] ダイアログで [ArcGIS 上のレイヤーを参照] をクリックして、[マイ コンテンツ] 内にある「顧客ポイント」データを追加します。
3. [3. テーブルに表示する属性を選択~] で、以下の変数にチェックを入れて [次へ] をクリックします。
    <ul>
    <li>顧客数</li>
    <li>店舗名</li>
    <li>売上高_合計</li>
    <li>売上数_合計</li>
    </ul>

    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/CheckVariable.png" width="60%" title="" >}}

4. [4. フィルターを追加～] では何も設定せず、そのまま [次へ] をクリックします。
5. [テーブルとして表示] が選択されていることを確認して、[位置の最大数] をデフォルトの 「25」 → 「5000」 に変更します。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/Max_Location_Point_24r2.png" width="60%" title="" >}}

上記の設定で商圏内の顧客リストを表示させることができますが、本チュートリアルでは店舗名をグルーピングして、店舗ごとの顧客数等の合計値をテーブル上に表示させるようにします。(手順 7 以降)

6. [結果の近傍の位置ポイントをマップに追加] を選択し、[適用] をクリックします。

{{< callout type = "info" >}}

[結果の近傍の位置ポイントをマップに追加] を有効化すると、インフォグラフィックス内のマップに近傍ポイントを表示します。既にマップ パネルが追加済みの場合は、テーブルは自動的にマップとリンクされます。マップ パネルが存在しない場合は、新しくマップが作成されます。

{{< /callout >}}

7. 追加したパネル上で、[編集] → [テーブル スタイルと位置の数の編集] をクリックします。
8. 以下のように設定を変更し、[適用] を選択します。
    <ul>
    <li>グループ化: 店舗名</li>
    <li>並べ替え: 顧客数</li>
    <li>順序: 降順で並べ替え</li>
    </ul>

    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/AdvancedSetting.png" title="" >}}

***インフォグラフィックス パネルの追加***
<br> 商圏内と区画内の顧客単価を比較するチャートを追加します。
1. 右下の [パネル] → [インフォグラフィクス] を選択します。
2. [インフォグラフィックス パネルの追加] ウィンドウで、左上の [区画との比較] にカーソルを合わせて [作成] をクリックします。
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/compare_with_geography_24r2.png" width="80%" title="" >}}

3. [比較パネルの作成] ウィンドウ下部にある [カスタム変数の作成] をクリックします。
4. [マイ変数] に切り替えて「郵便番号別顧客」を選択します。
5. 「売上高_合計」「顧客数」を選択し、[選択した変数の追加] をクリックします。
6. [別々の変数として追加] をクリックし、「+」のプルダウン リストから「/」を選択します。

以下の式ができていることを確認して、[追加] をクリックします。
<br>**式: 売上高_合計 / 顧客数**
{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/Infographics_panel1_24r2.png" width="80%" title="" >}}

7. カスタム変数の保存名を「顧客単価」と入力して、[保存] します。
8. [カスタム変数] 内にある「顧客単価」を選択し、インフォグラフィックス パネル中央の [＋] をクリックし、[形状とアイコン] から任意のアイコンを選択します。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/Infographics_panel2.png" width="50%" title="" >}}

9. 「MY INFOGRAPHIC」と書かれている部分にカーソルを合わせ、[テキストの編集] と表示されたらクリックし、「商圏内の顧客単価」と入力します。
10. [保存] をクリックし、タイトルを「商圏内の顧客単価」と入力し、インフォグラフィックス パネルを保存します。
11. [マイ パネル] に作成したインフォグラフィックス パネルが追加されるので、カーソルを合わせて [追加] をクリックします。
12. 右下の [保存] をクリックし、タイトルに「顧客商圏プロファイル」と入力して、再度 [保存] をクリックします。

以上の操作で、インフォグラフィックス テンプレートの作成ができました。

{{< callout type = "info" >}}

保存したテンプレートは、[レポート] タブの [レポートの作成] → [インフォグラフィックスの作成] 内にある [マイ テンプレート] タブ配下に保存されます。

{{< /callout >}}

## 作成したインフォグラフィックスの実行
最後に、作成したインフォグラフィックス テンプレートを実際に実行して結果を確認します。
インフォグラフィクスを実行する前に以下の事前設定を行います。


**手順**
1. ページ右上の [初期設定]<img src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/Initial_Setting.png" width="-10%" style="all:initial;" title="">を開きます。
2. [レポート] タブ配下の [インフォグラフィクスの実行] → [開く前にサイト メニューでインフォグラフィックスを選択できるようにする] にチェックを入れます。
3. [保存して閉じる] をクリックしたら事前設定は完了です。

    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/Initial_Setting2.png" width="100%" title="" >}}

{{< callout type = "important" >}}

表示させたいインフォグラフィックスのみを選択でき、目的にあったインフォグラフィックスを素早く表示できます。また、クレジットの消費を抑えることができます。

{{< /callout >}}

4. マップ タブに切り替えて、右上の [アドレスまたは位置の入力] で「習志野駅」と入力して Enter キーを押します。
5. マップの習志野駅上にピンがプロットされるので、[サイトの作成] を選択して、5km のリング商圏を作成します。
    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/site_5km.png" width="30%" title="" >}}
6. [インフォグラフィックス] を実行し、「顧客商圏プロファイル」で保存したインフォグラフィックス テンプレートを選択します。
    {{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/web/tutorial/create_custom_infographics/run_infographics.png" width="50%" title="" >}}
7. [インフォグラフィクスの実行] をクリックします。

{{< callout type = "info" >}}

左下の [近傍] エレメントで任意の店舗をクリックすると、[マップ] 上の同じグループの店舗がハイライト表示され、店舗ごとの分布特性が把握することができます。

{{< /callout >}}

以上で、カスタム データの設定およびカスタム インフォグラフィックスの作成・実行をすることができました。
