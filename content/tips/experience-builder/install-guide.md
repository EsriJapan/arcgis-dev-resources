+++
title = "インストール ガイド"
description = "ArcGIS Experience Builder (Developer Edition) をインストールする手順を紹介します。"
weight = 3
aliases = ["/experience/install-guide/"]
+++

[ArcGIS Experience Builder](https://www.esrij.com/products/arcgis-experience-builder/) は、モダンな Web アプリ構築のための新しいビルダーで、コードを記述することなくWebアプリケーションを作成することができます。豊富なウィジェット セットから必要なツールを選択したり、独自のテンプレートをデザインしたり、2D コンテンツや 3D コンテンツを操作したりすることができます。[Developer Edition (開発者向けエディション)](https://developers.arcgis.com/experience-builder/)は、これらの機能に加え、ウィジェットやテーマを独自に開発するなどのアプリをカスタマイズするためのフレームワークを提供します。また、作成したアプリケーションをダウンロードして、Webサーバーなどの独自のサーバーにホストすることが可能です。

ArcGIS Experience Builder (Developer Edition) で使用されている技術は、ArcGIS API for JavaScript 4.x に加えて、React + Redux といったフレームワークや Bootstrap 4 などのコンポーネントライブラリ等を使用しています。開発に必要な情報は ArcGIS Experience Builder (Developer Edition) の[コア コンセプト (Core concepts)](../core-concepts) を参照してください。

## インストール

ArcGIS Experience Builder (Developer Edition) は、ArcGIS Online および ArcGIS Enterprise 10.6 以降をサポートしています。
<br/>Experience Builder (Developer Edition) は server と client の 2 つのサービスを使用しています。

* server サービス
    * Experience Builder (Developer Edition) の本体を起動します。
* client サービス
    * 独自のウィジェットやテーマを開発するためには client サービスを使用する必要があります。通常、server サービスを起動することで、Experience Builder (Developer Edition) を動作させることはできますが、開発したウィジェットなどを配置したり、デバッグするには、client サービスを起動しておく必要があります。

両方のサービスを実行しておくことで、Experience Builder での更新を自動的に反映することができます。
<br/>ここでは、Experience Builder (Developer Edition) の [server](#server-インストール) と [client](#client-インストール) のインストール手順について説明します。また、インターネットに接続していない環境で Experience Builder をインストールする必要がある場合は、[offline](#offline-インストール)でのインストール手順を参照してください。

## Server インストール

### 1. Client ID の作成
はじめに Client ID を作成する必要があります。Client ID は、このあとの server サービスを起動して立ち上がるアプリケーションで指定します。
Client ID の作成は、ArcGIS Developers 、もしくは、ArcGIS Online/ArcGIS Enterprise を使用して作成します。ご使用の環境に合わせて作成を行ってください。
<br/>ここでは、ArcGIS Developers 、ArcGIS Online/ArcGIS Enterprise を使用した 2 パターンでの作成方法について説明します。

- [1-1. ArcGIS Developers を使用した Client ID の作成](#1-1-arcgis-for-developers-を使用した-client-id-の作成)
- [1-2. ArcGIS Online/ArcGIS Enterprise を使用した Client ID の作成](#1-2-arcgis-online-arcgis-enterprise-を使用した-client-id-の作成)

### 1-1. ArcGIS Developers を使用した Client ID の作成

[ArcGIS Developers](https://developers.arcgis.com) を使用している場合は、以下の手順を行います。

{{% notice tip %}}

インストール手順については Esri が公開している[インストール動画 (英語)](https://www.youtube.com/watch?v=BcJxNaKuTxg)でも確認することができます。 

{{% /notice %}}

1. [ArcGIS Developers](https://developers.arcgis.com/sign-in/) のサイトでサイン インします。
2. `New Application` をクリックします。
3. `New Applications Details` で以下の内容を入力します。
    -   `Title` - 例えば、`Experience Builder credentials` などのように任意のタイトルを入力します。
    -   `Tags` - `Experience Builder` のような内容を入力します。
    -   `Register New Application` をクリックします。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/newApplications.png" width="80%" /> 
4.  登録したアプリケーションの `Authentication` タブをクリックします。`Current Redirect URIs` のセクションで、`リダイレクト URI` に `https://localhost:3001/` と入力して、`+ Add` をクリックします。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/installExB.png" /> 
5.  Client ID は、このあとの手順で使用するため、コピーなどをして控えておきます。

### 1-2. ArcGIS Online/ArcGIS Enterprise を使用した Client ID の作成

ArcGIS Online または ArcGIS Enterprise を使用している場合は、以下の手順を行います。

{{% notice tip %}}

※ インストール手順については Esri が公開している[インストール動画 (英語)](https://www.youtube.com/watch?v=BcJxNaKuTxg)でも確認することができます。 

{{% /notice %}}

1. ArcGIS Online または ArcGIS Enterprise ポータルにログインし、コンテンツ ページの `マイ コンテンツ` タブに移動して、`アイテムの追加` をクリックし、`アプリケーション` を選択します。
2. `アプリケーションの追加` ダイアログボックスで、以下のパラメータを入力します。
    - `タイプ` - タイプとして `アプリケーション` を選択します。
    - `タイトル` -  例えば、`Experience Builder credentials` などの任意のタイトルをを入力します。
    - `タグ` - `Experience Builder` のような内容を入力します。
    - `アイテムの追加` をクリックします。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/AddApplication.png" />
3. `設定` タブをクリックします。アプリケーションの登録の項目までスクロールして、更新をクリックします。
4. `登録情報` ダイアログ ボックスで、次のように、`リダイレクト URI` に `https://localhost:3001/` と入力し、`追加`をクリックして、`更新` をクリックします。アプリケーション ID は、このあとの手順で使用するため、コピーなどをして控えておきます。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/Registeredinfo.png" />

## 2. server サービスのインストール

Client ID の作成が完了したら以下の手順で server サービスのインストールを行います。

* Experience Builder は、Node.js 12+.x 以上のバージョンで動作します。Experience Builder のインストール環境に [Node.js (v12+.x)](https://nodejs.org/en/download/) をダウンロードしてインストールを行います。 

1. Experience Builder (Developer Edition) の ZIP ファイルをローカルに[ダウンロード](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder)して、解凍します。
<br/><span style="font-size: 75%">※ [ダウンロードページ](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder)でサイン イン ページが表示される場合は、ArcGIS Developers 開発者アカウント（あるいは ArcGIS Online 組織向けプランのアカウント）のユーザー名およびパスワードを入力しサイン インします。</span>
2.  コマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder の /server ディレクトリに cd コマンドで移動して `npm ci` と入力し、Enter キーを押して、必要なモジュールをインストールします。
<br/><span style="font-size: 75%">※ npm ci でのインストールは初回のみになります。次回以降は Experience Builder (Devloper Edition) の起動のみになりますので、npm start  で実行します。</span>
3.  `npm start` と入力して server を起動します。
4.  次の URL `https://localhost:3001/` を指定して Experience Builder をブラウザで開きます。
{{% notice tip %}}

Experience Builder は、Node.js の自己署名証明書を使用して HTTPS をサポートしています。この証明書を信頼して Experience Builder を実行することもできますし、独自の証明書を使用することもできます。デフォルトの証明書を独自の証明書に変更するには、/server/cert ディレクトリの server.key と server.cert の 2 つのファイルを置き換える必要があります。

{{% /notice %}}
5.  ポータルの URL には、ArcGIS Online または ArcGIS Enterpriseの組織サイトの URL を指定し、
<br/>クライアント ID には、
「[1-1. ArcGIS Developers を使用した Client ID の作成](#1-1-arcgis-for-developers-を使用した-client-id-の作成)」で作成した client ID、 
<br/>または、「[1-2. ArcGIS Online/ArcGIS Enterpriseを使用した Client ID の作成](#1-2-arcgis-online-arcgis-enterprise-を使用した-client-id-の作成)」で作成したアプリケーション ID を指定します。
<br/>すべてを指定したらサイン インをクリックします。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/ServerInstall_1.png" width="70%" /> 
サイン インをクリックすると、以下のように「権限のリクエスト画面」、もしくは、「ArcGIS ログイン画面」が表示されます。<br/>
<br/>● 権限のリクエスト画面
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/ServerInstall_2.png" width="60%" /> 
権限のリクエスト画面は、使用しているブラウザですでに ArcGIS Online などにログインしているため、ログインした組織のアカウントが表示されます。許可をクリックすることで、Experience Builder の初期画面が表示されます。もし、他のアカウントでサイン インする場合は、別のアカウントでサイン インをクリックしてください。以下の ArcGIS ログイン画面が起動しますので、目的のユーザー名、パスワードを入力してサイン インします。<br/>
<br/>● ArcGIS ログイン画面
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/ServerInstall_3.png" width="60%" /> 
使用しているブラウザで ArcGIS Online などにログインしていない場合は、ArcGIS ログイン画面が表示されます。目的のユーザー名、パスワードを入力してサイン インをクリックしてください。認証に成功すると、Experience Builder の初期画面が表示されます。
<br/><br/>
6. 次のステップで [client](#client-install) インストールを行います。

## Client インストール

Experience Builder の開発では、ローカルの Experience Builder で使用しているカスタム ウィジェットやテーマをバンドルしてロードするため webpack を起動する必要があります。webpack を起動するために client サービスをインストールする必要があります。

1. コマンド プロンプト、またはターミナル ウィンドウを開き、Experience Builder の /client ディレクトリに cd コマンドで移動して `npm ci` と入力し、Enter キーを押して、必要なモジュールをインストールします。
<br/><span style="font-size: 75%">※ npm ci でのインストールは初回のみになります。次回以降は Experience Builder (Devloper Edition) の起動のみになりますので、npm start で実行します。</span>
2. `npm start` と入力して client を起動します。
<br/><span style="font-size: 75%">※ client のサービスを起動することで、カスタム ウィジェットやテーマは `https://localhost:3001` で表示した Experience Builder 上で使用することが可能となります。</span>

{{% notice tip %}}

/client/your-extensions ディレクトリに新規にファイルやフォルダを作成した場合は、client サービスの再起動が必要になります。

{{% /notice %}}

同じマシンで複数のバージョンの Developer edition を持つことができます。お使いのマシンが[システム要件](https://developers.arcgis.com/experience-builder/guide/requirements)を満たしていることを確認してください。

## Offline インストール

* インターネットに繋がらない環境では、ArcGIS API JavaScript (JSAPI) CDN にアクセスすることはできません。このシナリオでは、[JSAPI](https://developers.arcgis.com/javascript/latest/guide/get-api/#download-api) をダウンロードしてローカルにインストールする必要があります。

* Experience Builder は、Node.js 12+.x 以上のバージョンで動作します。<br/> Experience Builder のインストール環境に [Node.js (v12+.x)](https://nodejs.org/en/download/) をダウンロードしてインストールを行います。 

{{% notice tip %}}

Esri が公開している[オフライン インストール動画 (英語)](https://youtube.com/watch?v=1rO1cZNEr0E)でも確認することができます。 

{{% /notice %}}

1. Experience Builder (Developer Edition) の ZIP ファイルをローカルに[ダウンロード](/downloads/apis-and-sdks?product=arcgis-experience-builder)して、解凍します。
2. Experience Builder (Developer Edition) 用の [npm-cache zip](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder) をローカルにダウンロードして、解凍します。
3. コマンド プロンプト`(例えば、Windows OS c:\Users\exbuser)`、またはターミナル`(例えば、macOS /Users/installExB)`で、ユーザーフォルダを開き、`npm config get cache` と入力します。
4. `npm config get cache` の実行で表示された npm-cache のフォルダのパスをコピーして、そのディレクトリを Windows のエクスプローラーか Mac の場合は Finder で開きます。
5. ダウンロードした Experience Builder (Developer Edition) 用 の npm-cache ディレクトリをコピーして、4 で参照しているディレクトリに貼り付けます。
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

Experience Builder (Developer Edition) を使用するために Client ID が必要になります。Client ID を作成するために ArcGIS Online または ArcGIS Enterprise に接続します。

{{% /notice %}}

ここでは、ArcGIS Online または ArcGIS Enterprise を使用した Client ID の作成手順について示します。

1. ArcGIS Online または ArcGIS Enterprise ポータルにログインし、コンテンツ ページの `マイ コンテンツ` タブに移動して、`アイテムの追加` をクリックし、`アプリケーション` を選択します。
2. `アプリケーションの追加` ダイアログボックスで、以下のパラメータを入力します。
    - `タイプ` - タイプとして `アプリケーション` を選択します。
    - `タイトル` -  例えば、`Experience Builder credentials` などのように任意のタイトルを入力します。
    - `タグ` - `Experience Builder` のような内容を入力します。
    - `アイテムの追加` をクリックします。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/AddApplication.png" />
3. `設定` タブをクリックします。アプリケーションの登録の項目までスクロールして、更新をクリックします。
4. `登録情報` ダイアログ ボックスで、次のように、`リダイレクト URI` に `https://localhost:3001/` と入力し、`追加`をクリックして、`更新` をクリックします。アプリケーション ID は、このあとの手順で使用するため、コピーなどをして控えておきます。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/Registeredinfo.png" />
5. 次の URL `https://localhost:3001/` を指定して Experience Builder をブラウザで開きます。
6. ポータルの URL には、ArcGIS Online または ArcGIS Enterpriseの組織サイトの URL を指定し、4. で作成した アプリケーション ID を指定します。すべてを指定したらサイン インをクリックします。
7. サイン イン後の流れについては、[2. server サービスのインストール](#2-server-サービスのインストール)のステップ5 以降を参照してください。

