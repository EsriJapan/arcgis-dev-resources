+++
title = "データを時系列で見たい"
description = "データに含まれる時系列情報を使用して、マップ上でアニメーション表示する方法を説明します。"
weight = 5
alwaysopen = false
publishDate = 2022-04-06T00:00:00+09:00
draft = false
author = "寺内"
+++

データの属性に含まれる時系列情報を使用して、ArcGIS Online の Map Viewer 上で時系列のアニメーションでデータを表示することができます。<br>
使用するデータはあらかじめ「[フィーチャ レイヤーを公開したい](/online/users-guide/create-data/feature/)」を参考に作成してください。

## 時間の有効化
1. フィーチャ レイヤーのアイテム詳細ページを開き、[概要] タブの [レイヤー] 項目で時間を有効化したいレイヤーをクリックします。
1. 右下の [時間設定] の [編集] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/time-configure.png" title="レイヤーの時間設定" width="650" >}}

1. [時間設定] ダイアログで、[時間の有効化] チェックボックスをオンにします。
1. [時間フィールド] または [開始時間フィールド] と [終了時間フィールド] に Date 型のフィールドを指定します。
1. [OK] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/time-configure-dialog.png" title="[時間設定] ダイアログ" width="400" >}}

## タイム スライダーの利用

1. Map Viewer に時間の有効化を行った[レイヤーを追加](/online/users-guide/map/set-map)します。
1. Map Viewer の下部にタイム スライダーが表示されます。[再生] または [停止] ボタンをクリックするとアニメーションが再生・停止します。[前へ] または [次へ] ボタンをクリックすると、前後のステップに移動することができます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/time-mv-time-slider.png" title="タイム スライダー" width="650" >}}

1. タイム スライダー右端の歯車ボタンをクリックし、 [タイム スライダー オプション] で、アニメーションの再生速度や時間間隔などを設定できます。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/time-mv-time-slider-option.png" title="タイム スライダー オプション" width="650" >}}


