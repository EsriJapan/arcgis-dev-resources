+++
title = "オフライン マップの操作"
description = "準備したオフライン マップで現地調査を行います。収集したデータを後で同期します。"
weight = 4
alwaysopen = false
publishDate = 2022-02-01T00:00:00+09:00
draft = false
author = "中家"
+++
オフライン マップを Field Maps モバイル アプリで操作します。オフライン環境でデータの収集を行ったのち、インターネット接続がある環境で編集データの同期を行います。

### オフライン マップでデータの収集
1. Field Maps モバイル アプリを開きます。
1. Field Maps のマップ一覧の画面で、[オフライン エリアを作成](/fieldmaps/get-started/offline/offlinearea/)したマップ名をタップします。
1. エリア名をタップして、オフライン マップを開きます。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/edit-sync-map.png" title="オフライン マップを開く" width="250" >}} 
   {{< callout >}}

   [独自の参照用ベースマップを配置](/fieldmaps/get-started/offline/deploy-basemap)した場合は、右上の […] → [ベースマップ] をタップし、追加したパッケージ ファイルをベースマップとして利用できることを確認します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/edit-sync-deploymap.png" title="配置済みマップを開く" width="250" >}} 

   {{< /callout >}}
1. オフライン環境で[データの編集](/fieldmaps/get-started/mobile/edit)を行います。編集したデータは端末に保存されます。

### 収集したデータの同期
1. 端末をインターネットに接続します。
1. オフライン エリア一覧の画面で同期するエリア名右の […] → [同期] をタップします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/edit-sync-sync1.png" title="同期" width="250" >}} 
または、マップを開いた状態で [↑↓] → [同期] をタップします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/edit-sync-sync2.png" title="マップで同期" width="250" >}} 

{{< callout >}}

デフォルトでは、インターネットに接続して 15 分後に自動的に同期が行われます。自動同期を無効にする場合は、アプリの [プロファイル] 設定で [自動同期] のトグルをオフにします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/edit-sync-autosync.png" title="自動同期をオフ" width="400" >}} 

{{< /callout >}}

{{< callout >}}

モバイル端末上のオフライン エリアを削除したい場合、モバイル アプリから削除することができます。また、元のファイルを削除したい場合は Web アプリ上で削除します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/edit-sync-deletearea.png" title="オフライン エリアの削除" width="600" >}} 

{{< /callout >}}

