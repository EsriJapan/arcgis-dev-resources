+++
title = "フィールド アプリを利用したデータの収集"
description = "作成した調査票に、フィールド アプリを利用して回答を入力する方法について説明します。"
weight = 2
alwaysopen = false
publishDate = 2024-06-07T00:00:00+09:00
draft = false
author = "松尾"
+++
Survey123 で作成した調査票に、フィールド アプリを利用して回答を入力する方法について説明します。<br>
フィールド アプリを利用することで、オフライン環境でもデータの収集ができます。<br>

調査票を作成する方法については「[調査票の作成](/survey123/get-started/prepare/create/)」、ブラウザーを利用して回答を入力する方法については「[ブラウザーを利用したデータの収集](/survey123/get-started/survey/web/)」をご参照ください。

### フィールド アプリのインストール
Survey123 フィールド アプリを利用するには、アプリケーションのインストールが必要です。<br>
インストール方法および動作環境については「[はじめに](/survey123/get-started/introduction/)」をご参照ください。

### 調査を開く
1. アプリを起動して表示される [ArcGIS Online でサイン イン] をタップし、ユーザ
   ー名とパスワードを入力してサイン インします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-signin-or-not.png" caption="サイン イン画面" width="200" >}} 

   {{< callout type="warning" >}}

   画面キャプチャは一例です。端末やバージョンにより、表記が異なる場合があります 。

   {{< /callout >}}

   {{< callout type="info" >}}

   [サイン インしないで続行] をタップすると、サイン インなしでパブリックに公開されている調査に回答することができます。

   {{< /callout >}}

1. [調査のダウンロード] から、共有されている調査を検索し、ダウンロードします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-download-survey.png" caption="調査のダウンロード" width="200" >}}    

   {{< callout type="info" >}}

   デバイスにすでに調査票が存在する場合は、画面右上のアイコンをタップし、[調査のダウンロード] をタップします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-download-survey-2ndtime.png" caption="2 つ目以降の調査のダウンロード" width="600" >}}
  
   {{< /callout >}}

   {{< callout type="warning" >}}

   調査票をダウンロードするには、インターネットへの接続が必要です。

   {{< /callout >}}

   {{< callout type="info" >}}

   URL や QR から調査票をダウンロードすることもできます。

   {{< /callout >}}

### 調査票の使用
1. ダウンロードした調査票をタップし、[+ 収集] をタップします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-start-survey.png" caption="調査票の起動" width="450" >}}
1. 調査票に沿って回答を入力後、画面右下に表示される [☑] をタップします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-checkmark.png" caption="チェックマーク" width="300" >}}
1. [調査が完了しました] ダイアログが表示されます。<br>
   [調査が完了しました] ダイアログの内容は以下の通りです。<br>
   - デバイスがインターネットに接続している場合
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-dialog-online.png" caption="オンライン環境でのダイアログ" width="250" >}}
   [今すぐ送信]: ArcGIS Online に結果が共有されます。<br>
   [この調査を続行]: 調査票の入力を続けられます。 <br>
   [送信箱に保存]: 調査結果が [送信箱] に保存されます。<br>

   - デバイスがインターネットに接続していない場合
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-dialog-offline.png" caption="オフライン環境でのダイアログ" width="250" >}}
   [送信箱に保存]: 調査結果が [送信箱] に保存されます。<br>
   [この調査を続行]: 調査票の入力を続けられます。 <br>

   {{< callout type="info" >}}

   [送信箱] に保存したデータは、編集、削除することができます。

   {{< /callout >}}

2. [送信箱] 内のデータを送信したい場合は、[送信箱] をタップし、[送信] をタップします。
 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/survey123/get-started/survey/fieldapp-sentbox.png" caption="送信箱から送信" width="450" >}}

   ベースマップをオフラインで表示したい場合は<a href= "https://doc.arcgis.com/ja/survey123/desktop/create-surveys/preparebasemaps.htm" target= "_self">ヘルプ</a>をご参照ください。