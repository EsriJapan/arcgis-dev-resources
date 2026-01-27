+++
title = "オフライン利用のための準備"
description = "Field Maps Web アプリを使って、レイヤーやマップの設定を行います。"
weight = 1
alwaysopen = false
publishDate = 2022-02-01T00:00:00+09:00
draft = false
author = "中家"
+++
Field Maps Web アプリを利用して、オフライン利用のための準備を行います。

{{< callout >}} 

[Web マップの作成](/fieldmaps/get-started/prepare/create-map/)で Web マップおよびフィーチャ レイヤーを作成した場合は、既に下記の設定はそれぞれ有効化されているため、この手順は不要です。[オフライン エリアの作成](/fieldmaps/get-started/offline/offlinearea/)に進んでください。


{{< /callout >}}

### オフラインで使用するコンテンツの有効化
モバイル アプリでオフライン利用するためには、マップのコンテンツがオフラインで使用できる状態になっている必要があります。

1. オフライン利用を行う Web マップを [Field Maps Web アプリで開きます](/fieldmaps/get-started/prepare/start/) 。
1. [オフライン] タブをクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/prepare-offlinetab.png" title="オフライン タブ" width="150" >}}
1. [コンテンツ] セクション内の [レイヤー] を展開します。
1. 必要なフィールドがない、同期が有効化されていない、などのエラーが表示された場合は、リンクをクリックしてエラーを解決します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/prepare-enable-offline-use.png" title="オフライン利用の有効化" width="500" >}}


{{< callout >}}

リンクに表示されている内容以外の方法でエラーを解決するには、以下の手順を実行します。
1.	レイヤー名右に表示される [アイテム詳細の表示] ボタンをクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/prepare-itemdetail.png" title="アイテム詳細を開く" width="550" >}}
1.	アイテム詳細ページで各種設定を変更します。
1.	Field Maps Web アプリに戻り、[コンテンツ] セクション下の [更新] をクリックして、コンテンツの設定を読み込みます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/prepare-update-contents.png" title="コンテンツの更新" width="300" >}}

{{< /callout >}}

{{< callout >}}

各エラーの詳細と解決方法については「[FAQ: ArcGIS Online または Field Maps Designer でオフラインを有効化する際に表示される警告の解消方法](https://tech-support.esrij.com/arcgis/article/web/knowledge5807.html)」をご参照ください。

{{< /callout >}}

### マップのオフライン モードを有効化
ページ上部の [オフライン] トグルをクリックして、マップのオフライン利用を有効化します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/prepare-enable-offline.png" title="オフラインの有効化" width="400" >}}