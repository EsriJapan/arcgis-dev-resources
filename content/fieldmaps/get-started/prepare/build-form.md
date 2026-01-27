+++
title = "フォームの構成"
description = "Field Maps Web アプリを利用して、フォームを構成し、モバイル アプリ利用者が現場で作業をスムーズに実施できるようにします。"
weight = 3
alwaysopen = false
publishDate = 2023-12-20T00:00:00+09:00
draft = false
author = "馬野"
+++

モバイル アプリ利用者がデータの収集に使用するフォームを Web アプリで作成します。フォームを構成することで、現場でデータを収集し、調査を実施するためのフィーチャ テンプレートを作成できます。<br>
Web アプリの起動方法については 「[Field Maps Web アプリの利用](/fieldmaps/get-started/prepare/start/)」をご参照ください。

### フォーム ビルダーを開く<br>
1. Field Maps Web アプリを開き [マップ] ページを表示します。フォームを構成したいマップ カードをクリックし、構成を開始します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/build-form-map.png" title="マップの選択" width="700" >}}<br>
2.  [フォーム] ページが表示され、[レイヤー] リストにマップ コンテンツが表示されます。任意のレイヤーをクリックし、フォーム ビルダーを表示します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/build-form-form-builder.png" title="フォーム ビルダーの表示" width="700" >}}<br>
 
 {{< callout >}}

 レイヤーのフォームを構成する際は、そのレイヤーの編集を有効にする必要があります。Field Maps Web アプリを利用してマップを作成した場合は、レイヤーの編集がデフォルトで有効です。既存のマップでフォームを構成する際は、レイヤーの編集が有効ではない場合があります。編集を有効にする際は「<a href="https://doc.esrij.com/online/users-guide/manage-data/privilege/" target="_self">データの編集に関する設定を変更したい</a>」をご参照ください。

 {{< /callout >}}
 
 ### フォームの構成
 基本または選択肢フォーム エレメントを使用して、フォームを構成します。

1. 基本フォーム エレメントの追加<br>
  日付、数字、テキスト、バーコードなどの基本的な情報をフォームに追加する際に、基本フォーム エレメントを利用します。

1. 選択肢フォーム エレメントの追加 <br>
  事前に定義した値のリストをフォームに追加する際に、選択肢フォーム エレメントを利用します。

  {{< callout >}}

   レイヤーまたはテーブル内のフィールドをフォームに追加して、フォーム エレメントとして構成することもできます。詳細は<a href="https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/configure-the-form.htm#ESRI_SECTION1_C16F930352DA41EA9B983FC6BFEFB008" target="_self">ヘルプ</a>をご参照ください。

  {{< /callout >}}

#### 基本フォーム エレメントの追加<br>
1. [フォーム エレメント] ウィンドウの [基本] セクションから任意のエレメントを選択し、キャンバスまでドラッグ アンド ドロップします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/build-form-basic-form.png" title="基本フォーム エレメントの追加" width="700" >}}<br>
2. [プロパティ] ウィンドウが開くので、[表示名] や [フィールド名] などの必要な情報を入力します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/build-form-basic-property.png" title="基本フォーム エレメントのプロパティ" width="700" >}}<br>

{{< callout >}}

 [フィールド名] にはアンダースコア (_) 以外の特殊文字 (&、( )、スペースなど) や、<a href="https://learn.microsoft.com/ja-jp/previous-versions/sql/sql-server-2014/ms189822(v=sql.120)" target="_self">予約語</a> (「type」や「user」) を使用できません。また、フィールド名の最初の文字に数字を使用することはできません。これらの文字を表示上使用したい場合は、[表示名] でご利用ください。

{{< /callout >}}

3. 入力が終わったら [プロパティ] ウィンドウを閉じます。
基本フォーム エレメントの一覧と詳細については<a href="https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/configure-the-form.htm#ESRI_SECTION1_8667568168E448F2973BF86E884A243C" target="_self">ヘルプ</a>をご参照ください。

{{< callout >}}

 [プロパティ] を閉じた後でも、キャンバス上のエレメントをクリックすることで編集を再開できます。

{{< /callout >}}

{{< callout >}}

   [数値 - 小数] や [数値 – 整数] を利用することで値の範囲を設定できます。詳細については<a href="https://doc.arcgis.com/ja/arcgis-online/manage-data/define-attribute-lists-and-ranges.htm#ESRI_SECTION1_FA236734BF3247BF8092D80CD5523171" target="_self">ヘルプ</a>をご参照ください。

{{< /callout >}}

#### 選択肢フォーム エレメントの追加<br>
1. [フォーム エレメント] ウィンドウの [選択肢] セクションから任意のエレメントを選択し、キャンバスまでドラッグ アンド ドロップします。 <br>
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/build-form-choice-form.png" title="選択肢フォーム エレメントの追加" width="700" >}}<br>
2. [プロパティ] ウィンドウが開くので、[表示名] や [フィールド名] などの必要な情報を入力します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/prepare/build-form-choice-property.png" title="選択肢フォーム エレメントのプロパティ" width="700" >}}<br>

{{< callout >}}

 [フィールド名] にはアンダースコア (_) 以外の特殊文字 (&、( )、スペースなど) や、<a href="https://learn.microsoft.com/ja-jp/previous-versions/sql/sql-server-2014/ms189822(v=sql.120)" target="_self">予約語</a> (「type」や「user」) を使用できません。また、フィールド名の最初の文字に数字を使用することはできません。これらの文字を表示上使用したい場合は、[表示名] でご利用ください。

{{< /callout >}}

3. 入力が終わったら [プロパティ] ウィンドウを閉じます。
選択肢フォーム エレメントの一覧と詳細については<a href="https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/configure-the-form.htm#ESRI_SECTION1_C9751DC99CE04A14ACAE75DE12E05C75" target="_self">ヘルプ</a>をご参照ください。

{{< callout >}}

   [コンボ ボックス] や [ラジオ ボタン] を利用することで値のリストを作成できます。詳細については<a href="https://doc.arcgis.com/ja/arcgis-online/manage-data/define-attribute-lists-and-ranges.htm#GUID-6E9A9121-2F49-4C31-A167-8DD08BDD41AC" target="_self">ヘルプ</a>をご参照ください。

{{< /callout >}}