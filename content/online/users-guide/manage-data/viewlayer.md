+++
title = "フィーチャの表示や設定を限定した状態のデータを作成したい"
description = "既存のレイヤーから、フィールドやレコードを限定表示したり、設定を一部変更した状態を保持できるビュー レイヤーを作成する方法を説明します。"
weight = 8
alwaysopen = false
publishDate = 2023-06-26T00:00:00+09:00
draft = false
author = "中家"
+++

ホスト フィーチャ レイヤー (親レイヤー) の情報は参照したまま、特定のエリアやフィールド、条件に合ったフィーチャのみを表示したり、編集権限を個別に設定し定義したビュー レイヤー (子レイヤー) を作成することができます。

## ホスト フィーチャ レイヤー ビューの作成

1. ビューを作成したいホスト フィーチャ レイヤーのアイテム詳細ページを開きます。
1. [概要] タブの [ビュー レイヤーを作成] → [ビュー レイヤー] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/viewlayer-create-view-layer.png" title="ビュー レイヤーを作成" width="350" >}}

1. [ビュー レイヤーを作成] ウィザードが表示されます。はじめに、[レイヤー] でビューに含めるレイヤーを選択し、[次へ] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/viewlayer-select-layers.png" title="レイヤーの選択" width="600" >}}

1.	[含まれるレイヤー] でレイヤー名をクリックし、[レイヤー定義] で下記のオプションを使用してビュー内の各レイヤーに含めるフィーチャを定義します。

    - フィルターの追加<br>
        レイヤー内の 1 つ以上のフィールドにフィルター式を定義することで、コンテンツをフィルター処理できます。[式の追加] をクリックし、ドロップダウン リストを使用して式を構築します。
    - 対象地域<br>
        レイヤーの空間範囲を定義し、その範囲内にあるフィーチャのみがビューに含まれます。[ポリゴン] または [四角形] 描画ツールを使用して、マップ上にエリアを描画します。<br>ビュー内のすべてのレイヤーに対して同じ対象地域を適用する場合は、[すべてのレイヤーに適用] をクリックします。
    - フィールド<br>
        表示する必要のないフィールドをビューから除外することができます。[フィールドの選択] をクリックし、フィールド名をクリックしてビューから削除または追加し、[完了] をクリックします。

    レイヤーの定義が完了したら、[レイヤー定義] 横の矢印をクリックし、レイヤー リストに戻ります。複数のレイヤーをビューに含める場合は、上記の手順を繰り返し、[次へ] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/viewlayer-layer-definitions.png" title="レイヤー定義" width="600" >}}

1. [作成] でホスト フィーチャ レイヤー ビューのタイトルなどを入力します。

   {{< callout >}}

   [タイトル] は半角英数字またはアンダースコア (_) で入力することを推奨します。

   {{< /callout >}}

1.	[作成] をクリックします。作成が完了すると、ビュー レイヤーのアイテム詳細ページに自動的に移動します。
    
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/viewlayer-item-options.png" title="ビュー レイヤーの作成" width="600" >}}

    ビュー レイヤーが作成されると、[コンテンツ] ページやアイテム詳細ページでは「Feature Layer (ホスト、ビュー)」と表示されます。

{{< callout >}}

ビュー レイヤーを作成した後にビューの定義を変更する場合は、ビュー レイヤーのアイテム詳細ページの [設定] タブ → [Feature Layer (ホスト、ビュー)] の [ビューの更新] ボタンをクリックして、手順 3. と 4. を実施して [更新] をクリックします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/viewlayer-update-view-layer.png" title="ビューの更新" width="600" >}}

{{< /callout >}}

{{< callout >}}

ビュー  レイヤーは、作成元のホスト フィーチャ レイヤー (親レイヤー) の一部の設定を継承して作成されます。フィーチャ レイヤーで設定できる項目のうち、[編集の有効化](/online/users-guide/manage-data/privilege/#編集の有効化)や[データのエクスポート許可](/online/users-guide/manage-data/download/#エクスポートの許可)、[時間設定](/online/users-guide/manage-data/time)などはビュー レイヤーで個別に設定することができます。<br>
詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/create-hosted-views.htm#ESRI_SECTION1_3C30E0A91C0B44AD9FC4B60FE3A7F97C)をご参照ください。

{{< /callout >}}