+++
title = "Web アプリケーションのデプロイ"
description = "ArcGIS Web AppBuilder (Developer Edition) で作成したアプリケーションをダウンロードし、独自のサーバーにホストする手順を紹介します。"
weight = 4
aliases = ["/webappbuilder/deploy-your-app/"]
+++

## トピック

* [アプリのダウンロード](#アプリのダウンロード)
* [アプリのデプロイ](#アプリのデプロイ)
* [グループ アクセスの設定](#グループ-アクセスの設定)
* [動作環境](#動作環境)

ArcGIS Web AppBuilder (Developer Edition)（以下 Web AppBuilder）で作成したWeb アプリケーション (以下、アプリ) はダウンロードして、独自の Web サーバーにホストすることができます。もしアプリが未共有のアイテムを参照しているとき、ダウンロードしたアプリは ArcGIS Online または Portal for ArcGIS に登録する必要があります。
アプリをデプロイする場所にかかわらず、Web マップへのアクセスは必須です。

その他のデプロイ パターンについては[デプロイ パターン](https://esrijapan.github.io/arcgis-dev-resources/tips/webappbuilder/deploy-pattern/)のページをご覧下さい。

## アプリのダウンロード

1. Web AppBuilder を起動し、トップページを開いたら、アプリのダウンロードボタンをクリックします。
2. アプリケーションは ZIP ファイルでダウンロードされます。保存ダイアログが表示されたら、任意のフォルダーを指定し、[保存] をクリックします。これで、アプリケーションはローカル ドライブに保存されます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/deploy-your-app.gif" alt="ダウンロード" width="600px">

## アプリのデプロイ

1. ダウンロードしたアプリを解凍します。
2. 解凍したアプリを Web サーバーへ配置します。
3. アプリのルート ディレクトリにある `config.json` ファイルを開き、以下の項目を編集します。
  1. プロキシ  
  必要に応じて、使用するプロキシを `proxy` プロパティに追加します。プロキシの詳細は <a href="https://developers.arcgis.com/web-appbuilder/guide/use-proxy.htm" target="_blank">Use proxy</a> をご参照ください。
  2. アプリケーション ID  
  アプリケーション ID を `appId` プロパティへ設定します。アプリケーション ID を入手するには、アプリの追加、登録が必要です。詳細は<a href="https://doc.arcgis.com/ja/arcgis-online/share-maps/add-items.htm" target="_blank">アプリの追加およびアプリの登録</a>をご参照ください。
   OAuth と SAML を用いたプラットフォーム認証を活用するために、アプリケーション ID を使用することを推奨しています。

アプリをカスタマイズするには、以下のドキュメントを参照してください。

  * アプリとウィジェットの設定：<a href="https://developers.arcgis.com/web-appbuilder/api-reference/app-configuration.htm" target="_blank">App configuration</a>
  * ArcGIS API for JavaScript の変更：[ArcGIS API for JavaScript の参照先を変更する（オプション）](../install-guide/)

## グループ アクセスの設定

もしアプリがグループや異なる組織間のメンバーで共有している、パブリックではない Web マップを使用しているとき、すべてのグループのメンバーがWeb マップにアクセスできるように設定します。

1. アプリの `config.json` ファイルを開きます。
2. `portalUrl` プロパティの値を `www.arcgis.com` に変更します。
3. `map` プロパティに `portalUrl` プロパティが含まれている場合は、値を `www.arcgis.com` に変更します。

## 動作環境

アプリがサポートしているブラウザーは以下の通りです。

* 2D
  * Google Chrome
  * Firefox
  * Safari（Mac）
  * Edge
  * Internet Explorer 11  
    IE11 または Edge で OAuth 認証を使用してアプリを開くとき、ポップアップが表示されることがあります。**はい**をクリックすると、ポップアップは消えますが、アプリは読み込まれません。この場合は、ブラウザーの設定から `.arcgis.com` を信頼済みサイトとして追加してください。
  * Safari（iOS）
  * Google Chrome（Android）
* 3D
  * Google Chrome
  * Firefox
  * Safari（Mac）
  * Edge
  * Internet Explorer 11  
    3D アプリには WebGL をサポートしているデスクトップの Web ブラウザーが必要です。ほとんどの最新バージョンのデスクトップ Web ブラウザーは WebGL を内蔵しています。ご利用の Web ブラウザーが WebGL を利用可能かどうかは <a href="https://get.webgl.org/" target="_blank">get.webgl.org</a> で確認できます。WebGL に関するトラブルシューティングは <a href="https://get.webgl.org/troubleshooting/" target="_blank">WebGL Troubleshooting</a> をご参照ください。また、シーン ビューアーについての詳細は <a href="https://doc.arcgis.com/ja/arcgis-online/reference/scene-viewer-requirements.htm" target="_blank">シーン ビューアーの要件</a> をご参照ください。
