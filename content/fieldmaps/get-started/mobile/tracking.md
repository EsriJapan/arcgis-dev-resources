+++
title = "位置情報の共有"
description = "トラッキング データを収集するための事前設定とモバイル アプリの操作を説明します。"
weight = 3
alwaysopen = false
publishDate = 2023-06-29T00:00:00+09:00
draft = false
author = "角名"
+++
トラッキング データ (作業員の現在位置や移動履歴) を収集するための設定とモバイル アプリの操作について説明します。

### 位置情報の共有の有効化とライセンスの割り当て
ArcGIS Online の組織サイトで設定を行います。

1. 組織の管理者が[位置情報の共有を有効化](https://doc.arcgis.com/ja/arcgis-online/administer/configure-location-tracking.htm)します。

    {{< callout >}} 

    位置情報の共有の有効化には、Mobile Worker ユーザー タイプが 1 つ以上ある組織か、組織が Location Sharing ユーザー タイプ エクステンションを購入し保有している必要があります。

    {{< /callout >}}

    {{< callout >}} 

    位置情報の共有を有効化した管理者は、位置情報の共有に必要なすべてのアイテム (レイヤーおよびトラック ビュー) の所有者となり、それらが格納される「位置情報の共有」フォルダーがマイ コンテンツに作成されます。

    {{< /callout >}}

1. 位置情報の共有の機能を利用するユーザーに Location Sharing ユーザー タイプ エクステンション ライセンスを[割り当て](/online/get-started/administer/license/assign/)ます。  
利用するユーザーが Mobile Worker ユーザー タイプの場合は、この操作は不要です。

### 位置情報の共有
Field Maps モバイル アプリでトラックを収集します。

1. Mobile Worker ユーザー タイプまたは Location Sharing ユーザー タイプ エクステンション ライセンスが割り当てられたユーザーで、ArcGIS Field Maps にサイン インします。
1. マップの一覧ページの上部にある [マイ トラック] のトグルをオンにして、位置情報の共有期間を選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/tracking-settings.png" title="トラッキングの設定" width="300" >}}
1. 移動履歴を確認するには、開いたマップの、右上の [レイヤー] をタップして、[マイ トラック] レイヤーをオンにします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/tracking-view.png" title="トラッキングの表示" width="300" >}}

{{< callout >}}

設定の詳細については、[ヘルプ](https://doc.arcgis.com/ja/field-maps/ios/help/track.htm)をご参照ください。

{{< /callout >}}