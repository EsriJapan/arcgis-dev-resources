+++
title = "デプロイ"
description = "ArcGIS Experience Builder (Developer Edition) で作成したアプリケーションをダウンロードし、独自のサーバーにホストする手順を紹介します。"
weight = 12
aliases = ["/experience/deployment-topics/"]
+++

ArcGIS Experience Builder で作成した Experience は、ダウンロードして Web サーバーにホストすることができます。プライベート コンテンツを使用している Experience は、ArcGIS Online または ArcGIS Enterprise にアプリを登録する必要があります。エンド ユーザーに最適なユーザー エクスペリエンスを提供するために、Experience を展開する前に[システム要件](https://developers.arcgis.com/experience-builder/guide/requirements)を参照してください。

## Experience のダウンロード
Experience ギャラリーのホームページで Experience をダウンロードするには、以下のように `● (3 つのドット)` をクリックして `ダウンロード` をクリックします。ZIP ファイルが作成され、ローカルドライブにダウンロードされます。ZIP ファイルは、お使いのブラウザ用に定義されたダウンロード ディレクトリにあります。

<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/experience-builder/deploy.png" width="70%" />

## Experience のデプロイ
Experience を Web サーバーにデプロイするには、次の手順を実行します。

1. ダウンロードした Experience を解凍し、フォルダを Web サーバーにコピーします。
2. アプリにプライベート コンテンツがある場合は、手順 3 ～ 6 を完了し、そうでない場合は Experience が展開されます。
3. アプリを追加して登録します。詳細については、[アプリの追加](https://doc.arcgis.com/ja/arcgis-online/manage-data/add-items.htm#ESRI_SECTION1_0D1B620254F745AE84F394289F8AF44B)と[アプリの登録](https://doc.arcgis.com/ja/arcgis-online/manage-data/add-items.htm#REG_APP)を参照してください。
4. `AppID` をコピーし、Experience アプリのルート ディレクトリ (例：app/config.json) にある `config.json` ファイルを開きます。
5. `attributes` オブジェクトの下に `clientId` プロパティを作成します。
6. `config.json` ファイルの `clientId` プロパティに `AppID` を貼り付けます。再度にファイルを保存します。

```json
"attributes": {
    "portalUrl": "https://exb.maps.arcgis.com",
    "clientId": "EXBAPPsag0XSRtpj"
  },
```

server/app name/index.html にアクセスすることでアプリを利用することができます。