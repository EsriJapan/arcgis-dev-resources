+++
title = "調査票の作成"
description = "Survey123 Web デザイナーを利用して、調査票を作成する方法について説明します。"
weight = 1
alwaysopen = false
publishDate = 2025-10-01T00:00:00+09:00
draft = false
author = "松尾"
+++

Survey123 で新しい調査票を作成する方法について説明します。<br>

Web デザイナーでは、質問項目をドラッグ アンド ドロップするだけで調査票の作成ができます。

### 新しい調査の作成
1. ArcGIS Online 組織サイトの右上に表示されている [アプリ ランチャー] → [Survey123] をクリックします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/prepare/create-survey123-app-luncher.png" caption="アプリの起動" width="250" >}}<br>
1. 画面左上の [+ 新しい調査] をクリックし、調査票の作成を開始します。<br>
独自の調査票を白紙の状態から作成したい場合は、[Web デザイナーの使用] の [空白の調査] を選択し、[基本操作] をクリックします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/prepare/create-new-survey.png" caption="新しい調査の開始" width="800" >}}<br>
    {{< callout type="info" >}}

    ・調査テンプレート: あらかじめ構成されたテンプレートを使用し、すぐに調査票を作成できます。<br>
    ・フィーチャ レイヤー: 既存のフィーチャ レイヤーを使用し、調査票を作成できます。<br>
    ・Survey123 Connect: XLSForm を使用し、よりカスタマイズされた調査票を作成できます。<br>
    詳細は<a href="https://doc.arcgis.com/ja/survey123/desktop/create-surveys/createsurveys.htm" target="_self">ヘルプ</a>をご参照ください。
  
    {{< /callout >}}

1. 画面左上の [調査情報の編集] をクリックし、[調査情報の編集] ダイアログ ボックスを開きます。<br>
1. 調査の名前、タグ、サマリーを設定し、[OK] をクリックします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/prepare/create-survey-title-summary.png" caption="調査情報の編集" width="700" >}}<br>
1. 画面中央の「調査票のタイトルが設定されていません」をクリックし、調査票のタイトルを設定します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/prepare/create-edit-survey-title.png" caption="調査のタイトル" width="500" >}}<br>

 ### 調査票への質問の追加
Survey123 では、ドラッグ アンド ドロップで調査票に質問項目を追加できます。

1. 画面左側の [追加] をクリックし、[追加] タブを開きます。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/prepare/create-survey-addtab.png" caption="追加タブ" width="400" >}}<br>
1. 使用したい質問項目をドラッグ アンド ドロップで調査票に追加します。<br>
質問を追加すると、画面右側に [編集] パネルが開きます。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/prepare/create-survey-add-question.gif" caption="質問項目の追加" width="700" >}}<br>
1. [ラベル] フィールドに質問のタイトルを入力します。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/prepare/create-survey-edit-label.png" caption="[ラベル]フィールドの入力" width="700" >}}<br>
   {{< callout type="info" >}}

    [編集] タブでは、質問にヒントを追加したり、回答の必須/任意を切り替えたりできます。

   {{< /callout >}}

#### 調査票に追加できる主な質問項目
調査票に追加できる質問項目は、5 つのセクションに分かれています。<br>

1. テキスト、数値、日付、時刻<br>
  日時やテキスト、数値を入力する基本の質問項目を追加できます。<br>
  詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/textnumberdatetime.htm" target="_self">ヘルプ</a>をご参照ください。
1. 選択肢<br>
 [単一選択] や [複数選択] といった選択方式の質問項目を追加できます。<br>
 詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/choice.htm" target="_self">ヘルプ</a>をご参照ください。
1. 位置<br>
  位置情報に関する質問項目を追加できます。<br>
  [マップ] では、調査端末の位置情報からポイントを入力できるほか、マップ上でポイントやラインを描画することも可能です。<br>
  詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/location.htm" target="_self">ヘルプ</a>をご参照ください。


    {{< callout type="warning" >}}

   1 つの調査に複数の [位置] の質問を追加することができますが、結果のジオメトリーとして送信できるのは、1 つの調査につき 1 つの [位置] の質問のみです。<br>
    複数の [位置] の質問を追加した場合は、結果のジオメトリーとして送信したい [位置] の質問の設定を [編集] タブでご確認ください。<br>
    [マップ] の場合: [回答を送信しない] のチェックボックスがオフになっているか<br>
   [住所] の場合: [住所テキストとポイント ジオメトリー] がオンになっているか<br>


    {{< /callout >}}

1. メディアとファイル<br>
  画像や音声、ファイルなどメディアに関する質問項目を追加できます。<br>
  詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/mediafiles.htm" target="_self">ヘルプ</a>をご参照ください。
1. 表示と構造<br>
  調査票の構成を設定できます。<br>
  [ページ] では、調査票に別ページを作成できます。<br>
  詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/displaystructure.htm" target="_self">ヘルプ</a>をご参照ください。

    {{< callout type="info" >}}

   Survey123 では簡単な設定をするだけで、より高度な調査票にカスタマイズできます。<br>
   カスタマイズできる例は以下のとおりです。<br>
    ・ルールの設定: [動作] セクションの [ルールの設定] から、分岐条件を設定することで条件入力に応じた質問の表示/非表示ができます。詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/webdesigneressentials.htm#ESRI_SECTION1_21723D9039E847AF9E69867C802C695A" target="_self">ヘルプ</a>をご参照ください。<br>
    ・計算: [計算] を使用すると、[写真] から位置情報を取得するなど、回答を基に計算した値を結果として収集できます。詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/webdesigneressentials.htm#ESRI_SECTION1_D3A0181870BC463589057A66DBCEAF7F" target="_self">ヘルプ</a>をご参照ください。<br>
    ・テキストとジオメトリーの同時収集: [住所] では、住所テキストとポイント ジオメトリーを同時に収集できます。詳細は<a href="https://doc.arcgis.com/ja/survey123/browser/create-surveys/location.htm#ESRI_SECTION1_9FF9489173C741DD95472F21B5AD8374" target="_self">ヘルプ</a>をご参照ください。<br>

    {{< /callout >}}

