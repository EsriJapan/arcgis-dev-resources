+++
title = "デプロイ"
description = "ArcGIS Experience Builder (Developer Edition) で作成したアプリケーションをダウンロードし、独自のサーバーにホストする手順を紹介します。"
weight = 15
aliases = ["/experience/deployment/experience-deployment/"]
+++

ArcGIS Experience Builder で作成したエクスペリエンスは、ダウンロードして Web サーバーにホストすることができます。プライベート コンテンツを使用しているエクスペリエンスは、ArcGIS Online または ArcGIS Enterprise にアプリを登録する必要があります。エンド ユーザーに最適なユーザー エクスペリエンスを提供するために、エクスペリエンスを展開する前に[システム要件](https://www.esrij.com/products/experience-builder-dev/spec/)を参照してください。

## エクスペリエンスのダウンロード
エクスペリエンス ギャラリーのホームページでエクスペリエンスをダウンロードするには、以下のように `● (3 つのドット)` をクリックして `ダウンロード` をクリックします。ZIP ファイルが作成され、ローカル ドライブにダウンロードされます。ZIP ファイルは、お使いのブラウザー用に定義されたダウンロード ディレクトリーに保存されます。

![](https://apps.esrij.com/arcgis-dev/guide/img/experience-builder/deploy2.png)

{{< callout >}}

アプリケーションをダウンロードするには事前にアプリケーションを公開する必要があります。ダウンロードされたエクスペリエンスには Web サーバーのいくつかのデフォルトの設定を構成する `web.config` ファイルが付属しており、このデフォルト `web.config` に [ArcGIS Maps SDK for JavaScript](../../../javascript/install-and-setup/#web-サーバーのホスティング設定) の設定が含まれるようになりました。

ダウンロードに失敗した場合は、お使いのマシンでウイルス対策ソフトがオンになっているか確認してください。ウイルス対策ソフトをオフにして、もう一度試してください。
{{< /callout >}}

## エクスペリエンスのデプロイ
エクスペリエンスを Web サーバーにデプロイするには、次の手順を実行します。

1. ダウンロードしたエクスペリエンスを解凍し、フォルダーを Web サーバーにコピーします。
2. アプリにプライベート コンテンツがある場合は、手順 3 ～ 6 を完了し、そうでない場合はエクスペリエンスのデプロイは完了です。
3. アプリを追加して登録します。詳細については、[ArcGIS Online/ArcGIS Enterprise を使用した Client ID の作成](../../install-guide/#arcgis-onlinearcgis-enterprise-にて-クライアント-id-を作成) を参照してください。
4. `AppID` をコピーし、エクスペリエンス アプリのルート ディレクトリ (例：<.zip ファイル ルート>\cdn\0\config.json) にある `config.json` ファイルを開きます。
5. `attributes` オブジェクトの下に `clientId` プロパティを作成します。
6. `config.json` ファイルの `clientId` プロパティに `AppID` を貼り付けます。再度ファイルを保存します。

```json
"attributes": {
  "portalUrl": "https://exb.maps.arcgis.com",
  "clientId": "EXBAPPsag0XSRtpj"
},
```

server/app name/index.html にアクセスすることでアプリを利用することができます。

## デプロイの自動化
Experience Builder サーバーを実行せずにターミナルからアプリの ZIP エクスポートを自動で生成するには、`zipApp` コマンドを使用します。これは自動デプロイのための DevOps ワークフローでよく使用されます。

ターミナルで Experience Builder (Developer Edition) がインストールされた解凍済みのルート ディレクトリ ("client" フォルダーと "server" フォルダーが含まれるディレクトリ) を参照し、次のコマンドを実行します。

```shell
node -e "require('./server/src/middlewares/dev/apps/app-download.js').zipApp('0', 'app.zip', 'my_client_id');"
```

- '0' はエクスポートしたいアプリの ID に置き換えてください。
- 'app.zip' は生成したい ZIP ファイルの名前に置き換えてください。
- `my_client_id` を ArcGIS Online または ArcGIS Enterprise の有効な `AppID` で置き換えます。詳細については、[ArcGIS Online/ArcGIS Enterprise を使用した Client ID の作成](../../install-guide/#arcgis-onlinearcgis-enterprise-にて-クライアント-id-を作成)を参照してください。
- 環境変数 `NODE_ENV` が `production` に設定されていることを確認し、最小化された (より小さな) ファイルを生成する production ビルドを作成します。

バージョン 1.15 から、`zipApp` 関数はオプションの第 4 パラメーターをサポートします。このパラメーターは、`locales` または `configModifier` のプロパティを持つオブジェクトです。

- `locales` プロパティは、エクスポートするロケールを指定するために使用できます。これが設定されていない場合、すべてのロケールがエクスポートされます。
- `configModifier` プロパティは、アプリをエクスポートする前に `config.json` ファイルを変更するために使用できます。これは関数またはオブジェクトを指定できます。
  - 関数の場合、`config` オブジェクトを引数として呼び出され、変更された `config` オブジェクトが返されます。
  - オブジェクトである場合、以下の例のように更新値を指定することができます。

```json
{
  "configModifier": {
    "attributes.portalUrl": "new-portal-url"
  }
}
```

`download-app.js` ファイルには、さらに多くの例があります。

## サービス ワーカー キャッシュ
Experience Builder では[サービス ワーカー](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)を使用してアセットのキャッシュを先読みし、アプリケーションのロード時間を改善します。デプロイ済みのアプリケーションのソース コード、config.json、またはその他の変更の更新が必要な場合は、Experience Builder (Developer Edition) で更新を行い、アプリケーションを再ダウンロードしてデプロイできます。ただし、ダウンロード パッケージを直接更新する必要がある場合は、次の手順を実行してサービス ワーカー キャッシュを更新する必要があります。

1. app ディレクトリで、`cdn/0` を `cdn/1` にリネームします。
2. アプリに必要なソース コードの修正や変更を行います。
3. アプリケーションのルート フォルダーで `index.html` を開きます。
    - `<base href="./cdn/0/"/>` を `<base href="./cdn/1/"/>` に変更します。
    - `buildNumber = '0'` を `buildNumber = '1'` に変更します。

より良いパフォーマンスのためのキャッシュ ヘッダーの推奨設定は以下のとおりです。
- `index.html` を 1 分など非常に短い期間キャッシュするか、キャッシュしない。
- `cdn` フォルダーを 1 年間など長期間キャッシュする。