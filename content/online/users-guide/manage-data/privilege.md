+++
title = "データの編集に関する設定を変更したい"
description = "データの編集に関するさまざまな設定を変更します。"
weight = 3
alwaysopen = false
publishDate = 2022-11-22T00:00:00+09:00
draft = false
author = "中家"
+++

データの編集に関するさまざまな設定を変更できます。

## 編集の有効化
データを編集できるようにします。
1. フィーチャ レイヤーのアイテム詳細ページの [設定] タブ → [編集の有効化] トグルをオンにします。
1. [どのような種類の編集が許可されていますか？] で許可する編集の権限を選択します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/privilege-edit.png" title="編集の有効化" width="500" >}} 
1. [保存] をクリックします。 

    {{< callout >}}

    既に保存済みの Web マップにレイヤーを追加している場合、レイヤーの編集が不可の状態を保持しています。Web マップで編集ができない場合は、上記の設定後にレイヤーを追加し直し、再度保存してください。

    {{< /callout >}}

## オフラインで利用する
現地調査アプリでオフライン利用ができるようにします。
1. フィーチャ レイヤーのアイテム詳細ページの [設定] タブ → [同期の有効化] トグルをオンにします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/privilege-sync.png" title="同期の有効化" width="400" >}}
1. [保存] をクリックします。


## 編集者、編集日時の自動記録
フィーチャごとに、作成者、作成日時、更新者、更新日時が自動記録されるフィールドを作成し、アプリ上で表示できるようにします。
1. フィーチャ レイヤーのアイテム詳細ページの [設定] タブ → [データを編集したユーザー (編集者名、編集日時) を記録します。] トグルをオンにします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/privilege-edit-track.png" title="編集者の自動記録設定" width="400" >}}
1. [保存] をクリックします。
1. フィーチャ レイヤーに [GlobalID]、[CreationDate]、[Creator]、[EditDate]、[Editor] の列が自動で追加され、それぞれフィーチャのグローバル ID、作成日時と作成者、更新日時と更新者が自動記録されます。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/privilege-track-field.png" title="自動記録のフィールド" width="600" >}}

## フィーチャの閲覧・編集権限の制御
フィーチャの閲覧・編集権限を細かく制御します。
1. フィーチャ レイヤーのアイテム詳細ページの [設定] タブ → [データを編集したユーザー (編集者名、編集日時) を記録します。] トグルをオンにします。
1. 必要に応じて [どのフィーチャを編集者は閲覧できますか？]、[どのフィーチャを編集者は編集できますか？]、[匿名の (サイン インしていない) 編集者はどのようなアクセスが可能ですか？] の設定を更新します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/privilege-details.png" title="編集設定の詳細" width="500" >}}

    {{< callout >}}

    詳細な設定につきましては、[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/manage-hosted-feature-layers.htm#ESRI_SECTION1_030A9819DFF7498E9DFCDE6030E5FFBA)をご参照下さい。
    {{< /callout >}}
