+++
title = "特定の場所を検索したい"
description = "検索機能を使ってマップの表示範囲を検索場所に移動します。"
weight = 7
alwaysopen = false
publishDate = 2023-10-20T00:00:00+09:00
draft = false
author = "吉根"
+++

住所や地名を検索したり、レイヤーの属性情報を基に特定の場所を検索したりして、マップの表示範囲をその場所に移動します。

### 住所や地名の検索

1. [Map Viewer を開きます](/online/users-guide/map/set-map/)。
1. [検索] をクリックします。
1. [住所または場所の検索] ボックスに住所や地名を入力します。
1. Enter キーを押すと、検索された住所の位置にマップが移動し、ポップアップが表示されます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/search-search.png" title="検索" width=600" >}}

{{< callout >}}

[住所または場所の検索] ボックスでは、住所、道路の交差点、経度と緯度、フィーチャ ID などを入力し、検索できます。

{{< /callout >}}


### レイヤーの属性情報を基に検索

#### Web マップの設定

レイヤーの属性情報を基に検索するには、はじめに Web マップを作成し、Web マップのプロパティを設定します。

1. 属性情報を基に検索したいレイヤーを含む Web マップを作成していない場合は[作成し、保存します](/online/users-guide/map/set-map/)。
1. Web マップのアイテム ページで [設定] タブをクリックします。[アプリケーション設定] セクションにある [検索の有効化] をオンにし、検索対象のレイヤーと属性フィールド等を設定して [保存] をクリックします。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/configure-feature-search.htm)をご参照ください。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/search-config.png" title="検索設定" width=500" >}}

{{< callout >}}

検索対象として設定できるのは、文字列 (String) 型のフィールドのみです。

{{< /callout >}}

#### Map Viewer での検索

1. 検索の設定をした Web マップを Map Viewer で開きます。
1. [検索] をクリックします。
1. [住所または場所の検索] ボックスの左側にある矢印をクリックし、ドロップダウン リストから検索対象のレイヤー名をクリックします。
1. 検索ボックスにレイヤーの属性値を入力します。
1. Enter キーを押すと、検索されたフィーチャの位置にマップが移動し、ポップアップが表示されます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/search-layer.png" title="属性検索" width=600" >}}

