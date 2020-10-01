+++
title = "インストール ガイド"
description = "ArcGIS Experience Builder (Developer Edition) をインストールする手順を紹介します。"
weight = 1
aliases = ["/experience/install-guide/"]
+++

## インストール

ArcGIS Experience Builder (Developer Edition) は、ArcGIS Online および ArcGIS Enterprise 10.6 以降をサポートしています。
<br/>Experience Builder (Developer Edition) は `server` と `client` の 2 つのサービスがあります。Experience Builder での更新を自動的に反映するには、両方のサービスを実行しておく必要があります。
<br/>ここでは、Experience Builder (Developer Edition) の [server](#server-インストール) と [client](#client-インストール) のインストール手順について説明します。また、インターネットに接続していない環境で Experience Builder をインストールする必要がある場合は、[offline](#offline-インストール)でのインストール手順を参照してください。

## Server インストール

### ArcGIS for Developers サイト上での Client ID の作成

[ArcGIS for Developers](https://developers.arcgis.com) を使用している場合は、以下の手順を行います。

* Experience Builder は、Node.js 12+.x 以上のバージョンで動作します。<br/> Experience Builder のインストール環境に [Node.js (v12+.x)](https://nodejs.org/en/download/) をダウンロードしてインストールを行います。 

{{% notice tip %}}
Esri が公開している[インストール動画 (英語)](https://www.youtube.com/watch?v=BcJxNaKuTxg)でも確認することができます。 
{{% /notice %}}

1. Experience Builder (Developer Edition) の ZIP ファイルをローカルに[ダウンロード](/downloads/apis-and-sdks?product=arcgis-experience-builder)して、解凍します。
<br/>サインイン ページが表示される場合は、ArcGIS for Developers 開発者アカウント（あるいは ArcGIS Online 組織向けプランのアカウント）のユーザー名およびパスワードを入力しサインインします。
2. [ArcGIS for Developers](/sign-in/) のサイトでサインインします。
3. `New Application` をクリックします。
4. `New Applications Details` で以下の内容を入力します。
    -   `Title` - 例えば、`Experience Builder credentials` などのようにあなたにとって意味があるものを入力します。
    -   `Tags` - `Experience Builder` のような内容を入力します。
    -   `Register New Application` をクリックします。
5.  登録したアプリケーションの `Authentication` タブをクリックします。`Current Redirect URIs` のセクションで、リダイレクト URI に `https://localhost:3001/` と入力して、`+ Add` をクリックします。
<img src="https://developers.arcgis.com/experience-builder/static/a76d166fe99df98d9049163eb0aa1676/79e48/installExB.png" />
6.  Client ID は、このあとの手順で使用するため、コピーなどをして控えておきます。
7.  コマンド プロンプト、またはターミナルウィンドウを開き、Experience Builder の server ディレクトリに cd コマンドで移動して `npm ci` と入力し、Enter キーを押して、必要なモジュールをインストールします。
8.  `npm start` と入力して server を起動します。
9.  次の URL `https://localhost:3001/` を指定して Experience Builder をブラウザで開きます。
{{% notice tip %}}
Experience Builder は、Node.js の自己署名証明書を使用して HTTPS をサポートしています。この証明書を信頼して Experience Builder を実行することもできますし、独自の証明書を使用することもできます。デフォルトの証明書を独自の証明書に変更するには、server/cert ディレクトリの server.key と server.cert の 2 つのファイルを置き換える必要があります。
{{% /notice %}}
10.  ArcGIS Online の組織サイトの URL を指定し、6. でコピーした Client ID を指定します。すべて指定したらサイン インをクリックします。
11.  次のステップで [client](#client-install) のインストールを行います。

### ArcGIS Online または ArcGIS Enterprise を使用した Client ID の作成

ArcGIS Online または ArcGIS Enterprise を使用している場合は、以下の手順を行います。

* Experience Builder は、Node.js 12+.x 以上のバージョンで動作します。<br/> Experience Builder のインストール環境に [Node.js (v12+.x)](https://nodejs.org/en/download/) をダウンロードしてインストールを行います。 

{{% notice tip %}}
Esri が公開している[インストール動画 (英語)](https://www.youtube.com/watch?v=BcJxNaKuTxg)でも確認することができます。 
{{% /notice %}}

1. Experience Builder (Developer Edition) の ZIP ファイルをローカルに[ダウンロード](/downloads/apis-and-sdks?product=arcgis-experience-builder)して、解凍します。
<br/>サインイン ページが表示される場合は、ArcGIS for Developers 開発者アカウント（あるいは ArcGIS Online 組織向けプランのアカウント）のユーザー名およびパスワードを入力しサインインします。
2. ArcGIS Online または ArcGIS Enterprise ポータルにログインし、コンテンツ ページの `マイ コンテンツ` タブに移動して、`アイテムの追加` をクリックし、`アプリケーション` を選択します。
3. `アプリケーションの追加` ダイアログボックスで、以下のパラメータを入力します。
    - `タイプ` - タイプとして `アプリケーション` を選択します。
    - `タイトル` -  例えば、`Experience Builder credentials` などのようにあなたにとって意味があるものを入力します。
    - `タグ` - `Experience Builder` のような内容を入力します。
    - `アイテムの追加` をクリックします。
<img src="https://developers.arcgis.com/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/d0e73/AddApplication.png" />
4. `設定` タブをクリックします。アプリケーションの登録の項目までスクロールして、更新をクリックします。
5. `登録情報` ダイアログ ボックスで、次のように、`リダイレクト URI` に https://localhost:3001/ と入力し、`追加`をクリックして、`更新` をクリックします。アプリケーション ID は、このあとの手順で使用するため、コピーなどをして控えておきます。
<img src="https://developers.arcgis.com/experience-builder/static/7150fd8f693e6b20d4c5e41b886efaeb/ace37/Registeredinfo.png" />
6.  コマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder の server ディレクトリに cd コマンドで移動して `npm ci` と入力し、Enter キーを押して、必要なモジュールをインストールします。
7.  `npm start` と入力して server を起動します。
8.  次の URL `https://localhost:3001/` を指定して Experience Builder をブラウザで開きます。
{{% notice tip %}}
Experience Builder は、Node.js の自己署名証明書を使用して HTTPS をサポートしています。この証明書を信頼して Experience Builder を実行することもできますし、独自の証明書を使用することもできます。デフォルトの証明書を独自の証明書に変更するには、server/cert ディレクトリの server.key と server.cert の 2 つのファイルを置き換える必要があります。
{{% /notice %}}
10.  ArcGIS Online または ArcGIS Enterprise の組織サイトの URLを指定し、5. でコピーした アプリケーション ID を指定します。すべて指定したらサイン インをクリックします。
11.  次のステップで [client](#client-install) のインストールを行います。

## Client インストール

Experience Builder で開発するには、ローカルの Experience Builder で使用されているカスタム ウィジェットやテーマをバンドルしてロードするのを助けるために、webpack を起動するためにサービスをインストールする必要があります。

1.  コマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder の client ディレクトリに cd コマンドで移動して `npm ci` と入力し、Enter キーを押して、必要なモジュールをインストールします。
2.  `npm start` と入力して server を起動します。
{{% notice tip %}}
client/your-extensions ディレクトリに新規に作成されたファイルやフォルダは、client サーバの再起動が必要です。
{{% /notice %}}

同じマシンで複数のバージョンの Developer edition を持つことができます。お使いのマシンが[システム要件](https://developers.arcgis.com/experience-builder/guide/requirements)を満たしていることを確認してください。

## Offline インストール

* インターネットに繋がらない環境では、ArcGIS API JavaScript (JSAPI) CDN にアクセスすることはできません。このシナリオでは、[JSAPI](https://developers.arcgis.com/javascript/latest/guide/get-api/#download-api) をダウンロードしてローカルにインストールする必要があります。

* Experience Builder は、Node.js 12+.x 以上のバージョンで動作します。<br/> Experience Builder のインストール環境に [Node.js (v12+.x)](https://nodejs.org/en/download/) をダウンロードしてインストールを行います。 

{{% notice tip %}}
Esri が公開している[インストール動画 (英語)](https://www.youtube.com/watch?v=BcJxNaKuTxg)でも確認することができます。 
{{% /notice %}}

1. Experience Builder (Developer Edition) の ZIP ファイルをローカルに[ダウンロード](/downloads/apis-and-sdks?product=arcgis-experience-builder)して、解凍します。
2. Experience Builder Developer (Developer Edition) 用の [npm-cache zip](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder) をローカルにダウンロードして、解凍します。
3. コマンド プロンプト、またはターミナル`(例えば、macOS /Users/installExB)`で、ユーザーフォルダ`(例えば、Windows OS c:\Users\exbuser)`を開き、`npm config get cache` と入力します。
4. npm-cache のフォルダのパスをコピーして、そのディレクトリを Windows のエクスプローラか Mac の場合は Finder で開きます。
5. npm-cache ディレクトリ (手順3) をコピーして、このディレクトリに貼り付けます。
6. コマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder インストールの client ディレクトリに cd コマンドで移動して、`npm install --offline` と入力して Enter キーを押します。
7. 別のコマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder インストールの server ディレクトリに cd コマンドで移動して、`npm install -- offline` と入力して Enter キーを押します。
8. Experience Builder の client ディレクトリを以下のパス `<install folder>/client/dist` で開きます。
9. 変数 `ARCGIS_JS_API_URL` をローカルで JSAPI を参照している URL に更新する必要が4箇所あります。例えば、以下の各ファイルで `var ARCGIS_JS_API_URL = 'https://js.arcgis.com/4.16/'` を `var ARCGIS_JS_API_URL = 'https://exb.esri.com/4.16/'` に置き換えてください。
    -   `<install folder>/client/dist/index.html`
    -   `<install folder>/client/dist/experience/index.html`
    -   `<install folder>/client/dist/template/index.html`
    -   `<install folder>/client/dist/builder/index.html`
9. コマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder のインストール先の client ディレクトリに cd コマンドで移動して、npm start と入力して client サービスを起動します。
10. コマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder のインストール先の server ディレクトリに cd コマンドで移動して、npm start と入力して server サービスを起動します。

{{% notice tip %}}
Experience Builder では、Client ID を作成するために ArcGIS Online または ArcGIS Enterprise ポータルへの接続が必要になります。
{{% /notice %}}

ここでは、ArcGIS Online または ArcGIS Enterprise を使用した Client ID の作成手順について示します。

1. ArcGIS Online または ArcGIS Enterprise ポータルにログインし、コンテンツ ページの `マイ コンテンツ` タブに移動して、`アイテムの追加` をクリックし、`アプリケーション` を選択します。
2. `アプリケーションの追加` ダイアログボックスで、以下のパラメータを入力します。
    - `タイプ` - タイプとして `アプリケーション` を選択します。
    - `タイトル` -  例えば、`Experience Builder credentials` などのようにあなたにとって意味があるものを入力します。
    - `タグ` - `Experience Builder` のような内容を入力します。
    - `アイテムの追加` をクリックします。
<img src="https://developers.arcgis.com/experience-builder/static/335a7ac6a33a15e010711cf9ccc8411d/d0e73/AddApplication.png" />
3. `設定` タブをクリックします。アプリケーションの登録の項目までスクロールして、更新をクリックします。
4. `登録情報` ダイアログ ボックスで、次のように、`リダイレクト URI` に https://localhost:3001/ と入力し、`追加`をクリックして、`更新` をクリックします。アプリケーション ID は、このあとの手順で使用するため、コピーなどをして控えておきます。
<img src="https://developers.arcgis.com/experience-builder/static/7150fd8f693e6b20d4c5e41b886efaeb/ace37/Registeredinfo.png" />
5.  次の URL `https://localhost:3001/` を指定して Experience Builder をブラウザで開きます。
6.  ArcGIS Online または ArcGIS Enterprise の組織サイトの URLを指定し、4. でコピーした アプリケーション ID を指定します。すべて指定したらサイン インをクリックします。

