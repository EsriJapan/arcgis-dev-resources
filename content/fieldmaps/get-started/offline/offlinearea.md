+++
title = "オフライン エリアの作成"
description = "オフライン マップで利用する作業エリアを作成します。"
weight = 2
alwaysopen = false
publishDate = 2022-02-01T00:00:00+09:00
draft = false
author = "中家"
+++
オフラインでマップを操作するには、オフライン用の作業エリアを切り出して利用します。作業エリアはオフライン エリアと呼び、[Web アプリで作成する方法](#field-maps-web-アプリを使用して作成ダウンロード)と[モバイル アプリで作成する方法](#モバイル-アプリを使って作成)があります。

### Field Maps Web アプリを使用して作成、ダウンロード
あらかじめ作業エリアが決まっている場合や、複数の作業エリアをまとめて作成、管理したい場合に便利です。

1. オフライン利用を行う Web マップを [Field Maps Web アプリで開きます](/fieldmaps/get-started/prepare/start/)。
1. [オフライン] タブをクリックします。
1. [マップ エリア] セクションを開き、[エリアの管理] をクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-manage-area.png" title="マップ エリアの管理" width="400" >}}
1. [+ オフライン エリアの作成] をクリックし、スケッチ ツールで切り出す範囲を描画します。また、エリアの名前や切り出す縮尺レベルを設定します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-create-area.gif" title="オフライン エリアの作成" width="700" >}}

1. [保存] をクリックします。エリア名右に [パッケージ中] と表示され、このラベルの表示が消えると、オフライン エリアの作成は完了です。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-packaging.png" title="パッケージ" width="450" >}}


   {{< callout >}}

   1 つの Web マップにつき 16 のオフライン エリアを作成することが可能です。

   {{< /callout >}}

1. インターネット接続がある環境で Field Maps モバイル アプリを開きます。
1. Field Maps のマップ一覧の画面で、該当のマップ名の下に [オフライン エリア] という表示を確認し、タップします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-mobilemap.png" title="マップ一覧" width="300" >}}

1. 作成済みのオフライン エリアをダウンロードします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-download.png" title="オフライン マップのダウンロード" width="300" >}}


### モバイル アプリを使って作成
急にオフライン作業をする必要が出た場合や、作業員が自由にエリアを切り出したい場合に便利です。

1. インターネット接続がある環境で Field Maps モバイル アプリを開きます。
1. マップの一覧画面で、オフライン利用したいマップ名右の […] → [オフライン エリアの追加] をタップします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-add.png" title="オフライン エリアの追加" width="250" >}} 
1. 表示する背景地図の最大縮尺レベルを変更したい場合は、詳細レベルの [部屋] をタップし、縮尺レベルを変更します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-level.png" title="縮尺レベル" width="250" >}} 

1. マップを拡大/縮小、移動して、利用したいオフライン エリアの範囲を枠内に収めます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-extent.png" title="範囲の指定" width="250" >}} 

1. [ダウンロード エリア] をタップし、オフライン エリアを端末にダウンロードします。

{{< callout >}}

エリア名を分かりやすい名前に変更することが可能です。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/offline/offlinearea-name.png" title="エリア名の変更" width="250" >}} 


{{< /callout >}}
