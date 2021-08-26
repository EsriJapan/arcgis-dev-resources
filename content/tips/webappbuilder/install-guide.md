+++
title = "インストール ガイド"
description = "ArcGIS Web AppBuilder (Developer Edition) をインストールする手順を紹介します。"
weight = 1
aliases = ["/webappbuilder/install-guide/"]
+++

<a href="https://www.esrij.com/products/arcgis-online/details/apps/#webappbuilderforarcgis" target="_blank">ArcGIS Web AppBuilder</a> は <a href="https://www.esrij.com/products/arcgis-online/" target="_blank">ArcGIS Online</a> あるいは <a href="https://www.esrij.com/products/arcgis-for-server/extensions/#extension1" target="_blank">Portal for ArcGIS</a> に組み込まれた機能として提供されており、ウィジェット（機能）やテーマ（デザイン）を組み合わせることにより、GIS やプログラミングなどの専門知識がなくても誰でも簡単に Web アプリケーションを作成できるソフトウェアです。
<a href="https://www.esrij.com/products/web-appbuilder-dev/" target="_blank">Developer Edition（開発者向けエディション）</a>はこれらの機能に加え、開発者のためにウィジェットやテーマを独自に開発するためのフレームワークを提供します。また、作成したアプリケーションをダウンロードし、独自のサーバーにホストすることも可能です。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide1.gif" alt="概要" width="600px">

ここでは、ArcGIS Web AppBuilder (Developer Edition) (以下 Web AppBuilder) のインストール手順を説明します。

* [インストール](#インストール)
* [Web AppBuilder の起動](#web-wppbuilder-の起動)
* [ポータル URL の指定](#ポータル-url-の指定)
* [アプリケーション ID の設定](#アプリケーション-id-の設定)
* [インストールの確認](#インストールの確認)

## インストール

1. Web AppBuilder の ZIP ファイルをローカルに<a href="https://developers.arcgis.com/web-appbuilder/" target="_blank">ダウンロード</a>し、解凍します。  
サインイン ページが表示される場合は、ArcGIS Developers 開発者アカウント（あるいは ArcGIS Online 組織向けプランのアカウント）のユーザー名およびパスワードを入力しサインインします。
2. Web AppBuilder は <a href="https://nodejs.org/" target="_blank">Node.js</a> 上で動作するため、インストールする端末に Node.js が必要です。Web AppBuilder のインストール ファイルには Windows バージョンの Node.js が含まれていますが、Mac や Linux など他の OS をお使いの場合は Web AppBuilder を起動する前に Node.jsをインストールする必要があります。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide2.png" alt="インストール" width="800px">

### ArcGIS API for JavaScript の参照先を変更する（オプション）

Web AppBuilder はデフォルトでは Esri の CDN で配信されている ArcGIS API for JavaScript を参照します。そのため、インターネットに接続できない環境で Web AppBuilder を使用する場合、ArcGIS API for JavaScript の参照先を変更する必要があります。ここでは Portal for ArcGIS に内蔵されている ArcGIS API for JavaScript へ参照先を変更する手順を説明します。

1. `<Web AppBuilder のインストール ディレクトリ>\client\stemapp\env.js` ファイルをテキストエディターで開きます。
2. `//apiUrl` を検索します。
  * API のバージョンは Web AppBuilder のバージョンにより異なります。通常、Web AppBuilder がリリースされた時点の最新バージョンの API が使われています。
3. `apiUrl= "https://<ポータル URL>/jsapi/jsapi/"` に書き換え、上書き保存します。
  * Portal for ArcGIS が内蔵する API を使用する際は、内蔵されている API のバージョンに注意が必要です。Web AppBuilder が使用する API のバージョンと異なるバージョンの API の利用はサポートされません。  
 Web AppBuilder のバージョンと API のバージョンの関係については <a href="https://developers.arcgis.com/web-appbuilder/guide/about-versions.htm" target="_blank">About release versions</a> を参照ください。

## Web AppBuilder の起動

1. Web AppBuilder を起動します。
  * Windows 端末  
  Windows をお使いの場合、解凍したフォルダーにある `startup.bat` ファイルをダブルクリックします。このバッチファイルはコマンド プロンプト上で Node.js サーバーを起動します。
  * その他の端末
  Windows 以外のマシンにインストールする場合は、直接 Node.js サーバーを起動するコマンドを実行します。  
  コマンド プロンプトを開き、`<Web AppBuilder のインストール ディレクトリ>\server` のパスを指定します。続けて `node server.js` と入力します。<br>  
  Web AppBuilder は Web ブラウザーで `http://[マシン名]:3344/webappbuilder` にアクセスすると起動します。コマンド プロンプト上で Node.js が起動している間はいつでも、どの Web ブラウザーからでも Web AppBuilder を開くことができます。利用するマシンがドメインに参加しているとき、Web AppBuilder へのアクセスにドメインを含める必要がある場合があります。その際は、`http://[マシン名].[ドメイン]:3344/webappbuilder` のようにドメインを含めてアクセスしてください。  

2. Node.js がデフォルトで使用するポート番号は 3344 です。パラメーターを追加したり、他のポート番号を割り当てたり、Windows サービスとして起動したりしたい場合は、以下の手順を参照してください。
  * パラメーターを追加し、他のポート番号を割り当てる

      1. コマンド プロンプトを開き、Web AppBuilder のサーバー ディレクトリ（`<Web AppBuilderのインストール ディレクトリ>\server`）へ移動します。割り当てたいポート番号と必要に応じてプロキシの URL を入力します。
          * 64 ビット版 Windows  
        `node_x64.exe server.js [-port=value] [-proxy=value]`
          * 32 ビット版 Windows  
        `node_x32.exe server.js [-port=value] [-proxy=value]`
          * その他のマシン  
        `node server.js [-port=value] [-proxy=value]`
      2. Web ブラウザーを開き、上記で設定したポート番号を指定し、Web AppBuilder を起動します。  
      `http://[マシン名]:[ポート番号]/webappbuilder`

  * Windows サービスとして起動する  
  Web AppBuilder は、`startup.bat` ファイルをクリックして起動させるほかに、Windows サービスとして起動させることもできます。
      1. Windows プラットフォームに Node.js をインストールします。
      2. 管理者としてコマンドプロンプトを開きます。
      3. Web AppBuilder のサーバー ディレクトリ（`<Web AppBuilder のインストール ディレクトリ>\server`）へ移動します。
      5. `npm install` コマンドを実行します。
      6. `npm run-script install-windows-service` コマンドを実行します。
      7. Windows の [サービス] ウィンドウを開き、ArcGISWebAppBuilder サービスを起動します。
      8. ArcGISWebAppBuilder サービスを削除するには、`npm run-script uninstall-windows-service` コマンドを実行します。
      プロキシを利用したい場合は、`/~server/package.json` ファイルを開き、`"start": "node server.js"` を `"start": "node server.js -proxy=<http://your proxy>"` に変更してください。

  <img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide3.jpg" alt="起動">

## ポータル URL の指定

1. Web AppBuilder で使用するアカウントに紐づく ArcGIS Online またはPortal for ArcGIS の URL を指定します。開発者アカウントをご利用の方は、ArcGIS for Developers の [[Account Settings](https://developers.arcgis.com/account/profile/)] ページにて URL をご確認ください。

2. [続行] をクリックします。Web 層認証を使用している場合、次のセクションはスキップしてください。ログイン後、[インストールの確認](#インストールの確認)をしてください。  
ArcGIS Online または Portal for ArcGIS で OAuth2 認証を使用する場合は、次のセクションでアプリケーション ID を設定する必要があります。

## アプリケーション ID の設定

上記で指定した ArcGIS Online または Portal for ArcGIS ではじめて Web AppBuilder を使用する場合、OAuth2 認証を利用できるようにするため、アプリケーション ID を設定する必要があります。  
アプリケーション ID を入手するには ArcGIS Online または Portal for ArcGIS に Web AppBuilder をアイテムとして追加します。

1. 指定したポータルへログインします。
2. Web AppBuilder をポータルにアイテムとして追加します。  

3. コンテンツ ページの[マイコンテンツ] を開きます。[新しいアイテム] をクリックし、[アプリケーション] を選択します。  

4. ダイアログボックスで、[アプリケーションタイプ] に Web マッピング、[URL] オプションに Web AppBuilder の URL を入力し [次へ] をクリックします。
  
  <img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide4-2.png" alt="アイテムの追加">
  
5. 任意のタイトル、保存先のフォルダー、タグとサマリーを設定し、 [保存] をクリックします。これで Web AppBuilder はアイテムとしてポータルに追加されました。  
  <img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide4-3.png" alt="アイテムの追加">

5. アイテムの追加が完了すると、追加したアイテムの詳細情報のページが表示されます。
    * ArcIGS Online：[設定] タブをクリックします。[アプリケーションの登録] セクションまでスクロールし、[登録] をクリックします。
    * Portal for ArcGIS：[アプリケーションの登録] セクションまでスクロールし、[登録] をクリックします。

6. [登録] ダイアログが表示されます。[リダイレクト URI] オプションに `http://[マシン名]` または `https://[マシン名]` を入力して、[追加] をクリックします。HTTP と HTTPS プロトコルは異なる URI として認識されることに注意してください。リダイレクトに関する問題を避けるため、両方のプロトコルを登録することを推奨しています。  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide5.png" alt="アプリケーションの登録">

7. [登録] をクリックします。これでアプリケーションの登録は完了です。
8. Web AppBuilder の起動画面に戻ります。[アプリケーション ID] オプションに入手したアプリケーション ID を入力し、[続行] をクリックします。  
 Invalid redirect_uri エラー ページが表示される場合は、以下の手順に従ってください。  

     アプリケーション ID を入手する際に登録したリダイレクト URI に誤りがある場合、アプリケーション ID オプションにアプリケーション ID を入力し、[続行] をクリックすると、エラー ページが表示されることがあります。この場合、登録したアプリケーションの情報を修正する必要があります。
      1. Web AppBuilder のサーバー ディレクトリ（`<Web AppBuilder のインストール ディレクトリ>\server`）を開き、`signininfo.json` ファイルを削除します。
      2. 手順 3 に戻り、入力したリダイレクト URI を更新するか、アプリケーションを新しく登録して、新しいアプリケーション ID を入手します。
      3. 起動中の Web AppBuilder のページを再読み込みします。
      4. [アプリケーション ID] オプションにアプリケーション ID を入力し、[続行] をクリックします。
7. [権限のリクエスト] ダイアログが表示されます。表示されたアカウント情報が正しいことを確認し [承認] をクリックします。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide6.gif" alt="アプリケーション ID の設定" width="600px">

アプリケーション ID は OAuth2 認証に必要です。詳細は [認証](https://esrijapan.github.io/arcgis-dev-resources/authentication/)をご参照ください。ログインに関する問題は、[FAQs](https://developers.arcgis.com/web-appbuilder/guide/faqs.htm) および [アプリの追加とアプリの登録](https://doc.arcgis.com/ja/arcgis-online/share-maps/add-items.htm)をご参照ください。

   Web AppBuilder は、デフォルトで HTTPS をサポートするために Node.js で自己署名証明書を使用しています。  
   独自に用意した証明書を使用したい場合は、Web AppBuilder のサーバー ディレクトリ（`<Web AppBuilder のインストール ディレクトリ>\server`）にある `cakey.pem` と `cacert.pem` を置き換えてください。

アプリケーション ID の登録手順の説明は以上です。これで 登録先のポータルへ OAuth2 認証を使用してサインインできるようになりました。次回からは Web AppBuilder を起動すると直接 Web AppBuilder のトップページが表示されます。

これで Web AppBuilder のインストールは終了です。

## インストールの確認

ここでは Web AppBuilder が正常にインストールされていることを確認するために、アプリケーションの起動確認を行います。

1. Web AppBuilder を起動します。
2. トップページが表示されたら [新規作成] をクリックします。
3. [デフォルト（2D）] を選択し、[次へ] をクリックします。
4. 新しい Web アプリの作成ページが開きます。任意のタイトルと説明を入力して [OK] をクリックします。
5. アプリケーションの作成のページが表示されたらインストールの確認は完了です。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/install-guide7.gif" alt="インストールの確認" width="600px">
