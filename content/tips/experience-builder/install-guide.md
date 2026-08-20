+++
title = "インストール ガイド"
description = "ArcGIS Experience Builder (Developer Edition) をインストールする手順を紹介します。"
weight = 3
aliases = ["/experience/install-guide/"]
+++

[ArcGIS Experience Builder](https://www.esrij.com/products/arcgis-experience-builder/) は、モダンな Web アプリ構築のための新しいビルダーで、コードを記述することなく Web アプリケーションを作成することができます。豊富なウィジェット セットから必要なツールを選択したり、独自のテンプレートをデザインしたり、2D コンテンツや 3D コンテンツを操作したりすることができます。[Developer Edition (開発者向けエディション)](https://developers.arcgis.com/experience-builder/)は、これらの機能に加え、ウィジェットやテーマを独自に開発するなどのアプリをカスタマイズするためのフレームワークを提供します。また、作成したアプリケーションをダウンロードして、Web サーバーなどの独自のサーバーにホストすることが可能です。

ArcGIS Experience Builder (Developer Edition) で使用されている技術は、ArcGIS Maps SDK for JavaScript に加えて、React + Redux といったフレームワークや Bootstrap 4 などのコンポーネント ライブラリー等を使用しています。開発に必要な情報は ArcGIS Experience Builder (Developer Edition) の[コア コンセプト (Core concepts)](../core-concepts) を参照してください。

## インストール

ArcGIS Experience Builder (Developer Edition) は、ArcGIS Online および ArcGIS Enterprise 10.6 以降をサポートしています。
<br/>Experience Builder (Developer Edition) は server と client の 2 つのサービスを使用しています。

* server サービス
    * Experience Builder (Developer Edition) の本体を起動します。
* client サービス
    * 独自のウィジェットやテーマを開発するためには client サービスを使用する必要があります。通常、server サービスを起動することで、Experience Builder (Developer Edition) を動作させることはできますが、開発したウィジェットなどを配置したり、デバッグするには、client サービスを起動しておく必要があります。

両方のサービスを実行しておくことで、Experience Builder での更新を自動的に反映することができます。
<br/>ここでは、Experience Builder (Developer Edition) の [server](#server-インストール) と [client](#client-インストール) のインストール手順について説明します。また、インターネットに接続していない環境で Experience Builder をインストールする必要がある場合は、[オフライン](#オフライン-インストール)でのインストール手順を参照してください。


## 1. クライアント ID の作成
はじめに クライアント ID を作成する必要があります。クライアント ID は、このあとの server サービスを起動することで実行されるアプリケーションで指定します。
クライアント ID の作成は、ArcGIS Online/ArcGIS Enterprise を使用して作成します。ご使用の環境に応じて作成を行ってください。

{{< callout type="info" >}}

ArcGIS Developerアカウントは現在、[ArcGIS Location Platform アカウント](https://developers.arcgis.com/documentation/glossary/arcgis-location-platform-account/)となっています。以前、開発者ダッシュボードで OAuth 2.0 アプリケーションを管理するためのツールは、利用できなくなりました。また、ArcGIS Experience Builder へのアクセスもサポートしていません。ArcGIS Online または ArcGIS Enterprise アカウントをご利用ください。

{{< /callout >}}

### ArcGIS Online/ArcGIS Enterprise にて クライアント ID を作成

{{< callout >}}

`クライアント ID` を提供するアイテム タイプは 2 種類あります。オプション 1：[アプリケーション](#オプション-1アプリケーション) またはオプション 2：[開発者の認証情報](#オプション-2開発者の認証情報) のいずれかの手順を行ってください。

{{< /callout >}}

#### オプション 1：アプリケーション

1. ArcGIS Online または ArcGIS Enterprise ポータルにログインし、コンテンツ ページの `マイ コンテンツ` タブに移動して、`新しいアイテム` をクリックし、`アプリケーション` を選択します。
2. `アプリケーション タイプ` で `他のアプリケーション` を選択します。
3. ダイアログ ボックスで、以下のパラメータを入力し、`保存` をクリックします。
    - `タイトル` -  例えば、`Experience Builder credentials` などの任意のタイトルをを入力します。
    - `フォルダー` - アイテムを保存する任意のフォルダーを選択します。
    - `タグ` - `Experience Builder` のような内容を入力します。
    - 必要に応じて`カテゴリー`と`サマリー`を入力してください。
    
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/AddApplication3.png" />

4. `設定` タブをクリックします。`Application` までスクロールします。
5. `URL` に任意の URL を入力します。
6. `認証情報`までスクロールし、次のように、`リダイレクト URL` に `https://localhost:3001/` と入力し、`追加`をクリックして、`更新` をクリックします。クライアント ID は、このあとの手順で使用するため、コピーなどをして控えておきます。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/Registeredinfo2.png" />

{{< callout type="warning" >}}

ArcGIS Enterprise 11.1 以前のバージョンでは、画面構成や表現が異なります。`クライアント ID` は ArcGIS Enterprise 11.1 以前では `アプリケーション ID` となっています。

{{< /callout >}}

#### オプション 2：開発者の認証情報

1. ArcGIS Online または ArcGIS Enterprise ポータルにログインし、コンテンツ ページの `マイ コンテンツ` タブに移動して、`新しいアイテム` をクリックし、`開発者の認証情報` を選択します。
2. `OAuth 2.0 の認証情報` (`ユーザー認証用`) を選択します。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/developer-credentials.png" />
3. `リダイレクト URL` に `https://localhost:3001/` と入力し [次へ] をクリックします。
4. 以下のパラメーターを入力します。
    - `タイトル` -  例えば、`Experience Builder credentials` などの任意のタイトルをを入力します。
    - `フォルダー` - アイテムを保存する任意のフォルダーを選択します。
    - `タグ` - `Experience Builder` のような内容を入力します。
    - 必要に応じて`カテゴリー`と`サマリー`を入力してください。
5. [次へ] をクリックして設定内容を確認します。
6. [作成] をクリックして開発者の認証情報を作成します。
7. アイテムの詳細ページで [認証情報] セクションにある `クライアント ID` をコピーします。クライアント ID はこのあとの server サービスのインストールの手順で使用します。


## 2. server サービスのインストール

クライアント ID の作成が完了したら以下の手順で server サービスのインストールを行います。

**sever サービス**は、Experience Builder 開発者版におけるビルダー インターフェイスの実行を担当します。ビルダー インターフェイスで変更内容を反映させるには、サーバー サービスが実行されている必要があります。

1. Experience Builder は Node.js を使用しています。お使いの Experience Builder のバージョンに対応する [推奨 Node バージョン](https://developers.arcgis.com/experience-builder/guide/release-versions/) を確認し、お使いのオペレーティング システムに対応したそのバージョンの [Node.js](https://nodejs.org/en/download/) をダウンロードしてインストールしてください。

{{< callout type="info" >}}
また、[インストールガイド動画](https://www.youtube.com/watch?v=BcJxNaKuTxg)をご視聴いただけます。
{{< /callout >}}


2. Experience Builder の Developer edition を[ダウンロード](https://developers.arcgis.com/experience-builder/guide/downloads/)し、ローカル ドライブで解凍してください。

3. コマンド プロンプトまたはターミナルウィンドウを開きます。

4. ターミナル内で、`cd` コマンドを使用して、手順 2 で解凍した Experience Builder ファイルの `/server` ディレクトリーに移動します。

5. 必要なモジュールをインストールしてください。パッケージ マネージャーは、お使いの Experience Builder のバージョンによって異なります：
   - Experience Builder **1.21** 以降の場合、依存関係は [pnpm](https://pnpm.io/) を使用してインストールされます。お使いの Experience Builder のバージョンに対応する[推奨される pnpm のバージョン](https://developers.arcgis.com/experience-builder/guide/release-versions/)を確認し、`npm i -g pnpm` と入力して `Enter` キーを押すことで、pnpm をグローバルにインストールしてください。その後、`pnpm ci` と入力し、`Enter` キーを押して、必要なモジュールをインストールしてください。
{{< callout type="info" >}}
バージョン 1.21 以降では、依存関係をインストールする際に pnpm を使用する必要があります。バージョン 1.21 以降で `npm ci` または `npm i` を実行すると、エラーが発生します。
{{< /callout >}}
- Experience Builder **1.20 以前** をお使いの場合は、`npm ci` と入力し、`Enter` キーを押して、必要なモジュールをインストールしてください。

6. `npm start` と入力し、 `Enter` キーを押してサービスを起動します。
{{< callout type="info" >}}
カスタム ポートを使用するには、次のようにオプションとして指定します：`npm start -- --port 81 --https_port 443`。
サブディレクトリー（例：`https://localhost:3001/subfolder`）サーバーを実行するには、次のように path オプションを指定します：`npm start -- --path /subfolder`。
{{< /callout >}}

7. ブラウザで、次のURLを開いてください：`https://localhost:3001/`。ビルダー インターフェイスが表示されるはずです。
{{< callout type="info" >}}
Experience Builder は、HTTPS をサポートするために Node.js で自己署名証明書を使用しています。この証明書を信頼して Experience Builder を実行することも、独自の証明書を使用することもできます。 独自の証明書を使用するには、server/cert ディレクトリー内の次の 2 つのファイル、`server.key` および `server.cert` を置き換えてください。あるいは、次のように、証明書ファイル（`server.cert` および `server.key`）が格納されているフォルダーへのカスタム パスを指定することもできます：`npm start -- --cert_folder <folder path>`
{{< /callout >}}

8. ArcGIS Online または ArcGIS Enterprise 組織の URL を指定し、前のセクションで作成した`クライアント ID` を貼り付けてください。
{{< callout type="info" >}}
Safariで、PKI、Kerberos、IWA、または LDAP 認証方式を使用して Experience Builder (Developer Edition) にサインインするには、 `Disable Cross-Origin Restrictions`（Safariの [開発] メニュー内）を選択する必要があります。
{{< /callout >}}

9. client をインストールしてください。詳細は以下をご覧ください。


## 3. client インストール

Experience Builder の開発では、ローカルの Experience Builder で使用しているカスタム ウィジェットやテーマをバンドルしてロードするため webpack を起動する必要があります。webpack を起動するために client サービスをインストールする必要があります。

1. コマンド プロンプトまたはターミナル ウィンドウを開きます。

2. ターミナル内で、`cd` コマンドを使用して、前のセクションで解凍した Experience Builder ファイルの `/client` ディレクトリーに移動します。

3. 必要なモジュールをインストールしてください。パッケージ マネージャーは、お使いの Experience Builder のバージョンによって異なります：
    - Experience Builder **1.21 以降** では、依存関係は [pnpm](https://pnpm.io/) を使用してインストールされます。お使いの Experience Builder のバージョンに対応する[推奨される pnpm のバージョン](https://developers.arcgis.com/experience-builder/guide/release-versions/)を確認し、`npm i -g pnpm` と入力して `Enter` キーを押すことで、pnpm をグローバルにインストールしてください。次に、`pnpm ci` と入力し、`Enter` キーを押して、必要なモジュールをインストールしてください。
{{< callout type="info" >}}
バージョン 1.21 以降では、依存関係をインストールする際に pnpm を使用する必要があります。バージョン 1.21 以降で `npm ci` または `npm i` を実行すると、エラーが発生します。
{{< /callout >}}
   - Experience Builder **1.20 以前** をお使いの場合は、`npm ci` と入力し、`Enter` キーを押して、必要なモジュールをインストールしてください。

4. `npm start` と入力し、`Enter` キーを押してサービスを起動します。
{{< callout type="info" >}}
`client/your-extensions` ディレクトリー内に新しいファイルやフォルダーを作成した場合は、クライアント サーバーを再起動する必要があります。
{{< /callout >}}

同じマシンに、 Experience Builder (Developer Edition) を複数インストールすることができます。お使いのマシンがシステム要件を満たしているかご確認ください。

{{< callout type="info" >}}
お使いのマシンで Node.js のバージョンを変更またはアップグレードした場合は、インストールされた新しいバージョンの Node.js によるすべての変更が反映されるよう、Experience Builder Developer Edition の「server」 および 「client」フォルダー内の依存関係を再インストールすることをお勧めします。バージョン 1.21 以降の場合は `pnpm ci` を、バージョン 1.20 以前の場合は `npm ci` を実行してください。
{{< /callout >}}


## オフライン インストール

インターネットに接続されていない環境では、Developer edition のオフライン インストールを実行できます。これは、インターネットにアクセスできない環境にある場合や、インターネットに接続されていないサーバー上で Experience Builder を実行したい場合に便利です。

1. [オフライン パッケージ](#オフライン-パッケージのインストール)をインストールして、 Developer Edition とその依存関係をセット アップしてください。
2. オフライン利用のために、[オフライン用ライブラリー](../../javascript/install-jsapi/)である ArcGIS Maps SDK for JavaScript と Calcite をインストールし、Experience Builder を更新してこれらを参照するように設定してください。

{{< callout type="info" >}}
また、ホストされている ArcGIS Maps SDK for JavaScript に対して、サーバー側で CORS 対応を設定することをお勧めします。たとえば、Windows OS の場合、HTTPS レスポン スヘッダーに `Access-Control-Allow-Origin` という項目を追加することができます。
{{< /callout >}}

### オフライン パッケージのインストール
オフラインで使用するために、Developer Edition とその依存関係をインストールしてください。依存関係のインストール方法は、お使いのバージョンによって異なります：

1. バージョン 1.21 以降の場合は、[pnpm オフライン ストア](#pnpm-オフライン-ストア-121-以降) をご利用ください。
2. バージョン 1.20 以前の場合は、[オフラインの Node cache](#オフライン-node-cache120-以前) をご利用ください。


### pnpm オフライン ストア (1.21 以降)
バージョン 1.21 以降、Experience Builder（Developer Edition）では、依存関係のインストールに `npm` の代わりに`pnpm` が 使用されます。オフラインでインストールする場合は、Node cache ZIP ではなく、pnpm offline store ZIP を使用してください。

作業を開始する前に、以下の点を確認してください：
- お使いの Node.js および pnpm のメジャー バージョンは、[システム要件](https://developers.arcgis.com/experience-builder/guide/requirements/)を満たしています。
- pnpm のオフライン ストアは、お使いの Developer Edition のバージョンに対応しています。
- `pnpm-lock.yaml` にはローカルでの変更はありません。

1. Experience Builder は Node.js を使用しています。お使いの Experience Builder のバージョンに対応する [推奨 Node バージョン](https://developers.arcgis.com/experience-builder/guide/release-versions/) を確認し、お使いの OS に対応したそのバージョンの [Node.js](https://nodejs.org/en/download/) をダウンロードしてインストールしてください。

2. Experience Builder の Developer edition を[ダウンロード](https://developers.arcgis.com/experience-builder/guide/downloads/)し、ローカル ドライブに解凍してください。

3. Experience Builder の Developer edition から [pnpm オフライン ストアの ZIP ファイル](https://developers.arcgis.com/experience-builder/guide/downloads/)をダウンロードしてください。

4. ストアのキャッシュ保存先（例：/`cache`）を選択し、そのディレクトリーに ZIP ファイルを配置して解凍してください。プロジェクト間で再利用できるよう、ストアの絶対パスは変更しないでください。
   - `cd /cache`
   - `unzip exb-<version>-pnpm-offline-store.zip`<br>

   解凍後、`store` というディレクトリーが表示され、その下にストアのバージョン ディレクトリー（例：`v11`）が含まれているはずです。

5. ストアを設定し、各プロジェクト ディレクトリーでオフライン インストールを実行します。以下のオプションのいずれかを選択してください。

{{< callout type="info" >}}
`/path/to/ExperienceDevEdition` を、Developer edition を解凍した場所に置き換え、
`/cache/store` をストアのパスに置き換えてください。
{{< /callout >}}


**オプション A: 1 回限りの一時的な設定** - プロジェクトの設定ファイルは一切書き込まれません。各インストール コマンドに対して `--store-dir` を指定します。
- `cd /path/to/ExperienceDevEdition/client`
- `pnpm --store-dir "/cache/store" install --offline --frozen-lockfile`
- `cd /path/to/ExperienceDevEdition/server`
- `pnpm --store-dir "/cache/store" install --offline --frozen-lockfile`

**オプション B: グローバル設定** - 現在のユーザーの下にあるすべてのプロジェクトで同じストアを共有したい場合は、一度設定を行った後、各プロジェクト ディレクトリーでオフライン インストールを実行してください。
- `pnpm config set store-dir /cache/store --location user`
- `cd /path/to/ExperienceDevEdition/client`
- `pnpm install --offline --frozen-lockfile`
- `cd /path/to/ExperienceDevEdition/server`
- `pnpm install --offline --frozen-lockfile`


### オフライン Node cache（1.20 以前）
バージョン 1.20 以前の場合、Experience Builder の Developer edition では、`npm` を使用して依存関係をインストールします。以下の手順に従って、オフライン用の Node cashe ZIP ファイルを使用してください。

1. Experience Builder は Node.js を使用しています。お使いの Experience Builder のバージョンに対応する [推奨された Node バージョン](https://developers.arcgis.com/experience-builder/guide/release-versions/)を確認し、お使いのオペレーティング システムに対応したそのバージョンの [Node.js](https://nodejs.org/en/download/) をダウンロードしてインストールしてください。

2. Experience Builder（Developer edition） を[ダウンロード](https://developers.arcgis.com/experience-builder/guide/downloads/)し、ローカル ドライブに解凍してください。

3. Experience Builder（Developer Edition）の [Node cache ZIP](https://developers.arcgis.com/experience-builder/guide/downloads/) ファイルをダウンロードし、ローカル ドライブに解凍してください。

4. コマンド プロンプトまたはターミナルで、ユーザー フォルダを開きます。`npm config get cache` と入力し、Enter キーを押します。フォルダのパスが表示されます。
{{< callout type="info" >}}
- Windows では、ユーザー フォルダーは `C:\Users\my_username` のようなパスになります。
- macOSでは、ユーザー フォルダーは `/Users/my_username` のような形式になります。
{{< /callout >}}

5. 前の手順で取得したフォルダーのパスをコピーし、Windows エクスプローラーまたは Finder でそのディレクトリーを開きます。

6. (手順3で) ダウンロードした Node cache ファイルを、このディレクトリーにコピーしてください。

7. コマンド プロンプトまたはターミナル ウィンドウを開きます。

8. ターミナル内で、`cd` コマンドを使用して、このセクションの冒頭で解凍した Experience Builder ファイルの `/client` ディレクトリーに移動します。

9. `npm install --offline` と入力し、`Enter` キーを押して、必要なモジュールをインストールしてください。

10. 別のコマンド プロンプトまたはターミナル ウィンドウを開きます。

11. ターミナル内で、`cd` コマンドを使用して、このセクションの冒頭で解凍した Experience Builder ファイルの `/server` ディレクトリーに移動します。

12. `npm install --offline` と入力し、`Enter` キーを押して、必要なモジュールをインストールしてください。


## オフライン ライブラリーのインストール
オフライン環境では、Experience Builder の実行に必要な CDN ライブラリーにアクセスできません：
1. ArcGIS Maps SDK for JavaScript CDN
2. Calcite Components CDN

このため、これらのライブラリーをダウンロードしてローカルにホストし、Experience Builder (Developer Edition) で、そのローカルにホストされたバージョンを使用するように設定する必要があります。

詳細については[インストール ガイド](../../javascript/install-jsapi/)をご参照ください。


## オフライン Developer Edition の実行
オフラインの Node キャッシュをインストールし、Experience Builder がローカルでアクセス可能なライブラリーを参照するように更新したことで、Developer Edition をオフラインで実行できるようになりました。

1. Experience Builder には ArcGIS Enterprise ポータルへの接続が必要です。前のセクションの [クライアント ID の作成](#1-クライアント-id-の作成)に従ってクライアント ID を作成します。

2. 前のセクションで開いた `/client` フォルダーのターミナル ウィンドウで、client サービスを起動するために `npm start` と入力します。

3. 別のターミナル ウィンドウで、前のセクションで開いた `/server` フォルダーに移動し、server サービスを起動するために `npm start` と入力します。

4. ブラウザーで次の URL を開きます: `https://localhost:3001/`  
    Experience Builder のビルダー インターフェイスが表示されます。

5. ArcGIS Enterprise 組織の URL を指定し、このセクションの最初で作成した`クライアント ID` を貼り付けます。


## Windows サービスとしてインストール

1. お使いの OS に対応した最新の [Node.js LTS バージョン](https://nodejs.org/en/download/)をダウンロードし、インストールしてください。

2. Windows のコマンド プロンプトを管理者権限で開きます。

3. Experience Builder の `/server` ディレクトリーに移動（`cd`）します。

4. 依存関係をインストールします。パッケージ マネージャーは、お使いの Experience Builder のバージョンによって異なります：
- Experience Builder **1.21 以降** の場合、依存関係は [pnpm](https://pnpm.io/) を使用してインストールされます。お使いの Experience Builder のバージョンに対応する [推奨された pnpm のバージョン](https://developers.arcgis.com/experience-builder/guide/release-versions/) を確認し、`npm i -g pnpm` を実行して pnpm をグローバルにインストールしてください。その後、 `pnpm ci` コマンドを実行して、依存関係をインストールしてください。

{{< callout type="info" >}}
バージョン 1.21 以降では、依存関係をインストールする際に pnpm を使用する必要があります。バージョン 1.21 以降で `npm ci` または `npm i` を実行すると、エラーが発生します。
{{< /callout >}}

- Experience Builder **1.20 以前**では、`npm ci` コマンドを実行して依存関係をインストールしてください。

5. `npm run install-windows-service` コマンドを実行します。

6. Windows サービス アプリを開き、Experience Builder サービス (デフォルト名：`exb-server`) を起動します。

7. Experience Builder サービスを削除するには、 `npm run uninstall-windows-service` コマンドを実行します。