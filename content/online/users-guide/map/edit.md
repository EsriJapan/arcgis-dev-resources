+++
title = "データを編集したい"
description = "Web マップに追加されているレイヤーを編集してフィーチャを追加、編集、削除します。"
weight = 10
alwaysopen = false
publishDate = 2025-03-25T00:00:00+09:00
draft = false
author = "角名"
+++


Web マップに追加されているレイヤーを編集してフィーチャを追加、編集、削除します。



1. 編集可能なレイヤーを[マップに追加](/online/users-guide/map/set-map/)します。

    {{< callout >}}

    レイヤーの編集の有効化方法は、「[編集の有効化](/online/users-guide/manage-data/privilege/)」をご参照ください。

    {{< /callout >}}

1. [設定] ツールバーの [編集] をクリックします。

1. [編集] ウィンドウが表示されるので、フィーチャを[追加](#フィーチャの追加)、[編集](#フィーチャの編集)、[削除](#フィーチャの削除)します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/edit-pane.png" title="編集ウィンドウ" width=400" >}}

    {{< callout >}}

    使用できる編集オプションは、フィーチャ レイヤーで許可されている[編集のレベル](https://doc.arcgis.com/ja/arcgis-online/manage-data/manage-hosted-feature-layers.htm#ESRI_SECTION1_030A9819DFF7498E9DFCDE6030E5FFBA)によって異なります。

    {{< /callout >}}

    {{< callout >}}

    各レイヤーの図形を入力する際、[編集] ウィンドウ上部にある [設定] で [ツールチップの有効化] や [スナップの有効化] 切り替えボタンをオンにすると、描画しやすくなります。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/edit-features-mv.htm#ESRI_SECTION1_DC808F9F669C4A4DAAAC8A3441EAE0FA)をご参照ください。

    {{< /callout >}}


### フィーチャの追加

1. [編集] ウィンドウで [フィーチャの作成] セクションに表示されている、編集したいレイヤーのアイコンをクリックして選択します。個別値シンボルを設定している場合は、個別値に応じたアイコンが表示されます。

1. マップ上をクリックして図形を入力します。

    - ポイントを追加するには、マップ上の位置をクリックします。
    - ラインまたはポリゴンを追加するには、マップ上で開始位置をクリックします。続けて頂点をクリックで追加し、終点をダブル クリックして入力を終了します。ポリゴンの場合は始点と終点が自動的に結ばれます。
1. 属性を入力し、[作成] をクリックします。
1. [フィーチャの作成] 左の [<] をクリックして [編集] ウィンドウに戻ります。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/edit-create.gif" title="フィーチャの追加" width=500" >}}



### フィーチャの編集

1. [編集] ウィンドウで [フィーチャの編集] から適した選択方法をクリックします。

1. マップ上のフィーチャを選択します。

    - 選択したフィーチャを移動するには、マップ上でフィーチャを新しい位置にドラッグして [更新] をクリックします。
        
        {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/edit-move.gif" title="フィーチャの移動" width=500" >}}

    - ラインまたはポリゴンの形状を変更するには、フィーチャを 2 回クリックし、表示されたノードを新しい位置にドラッグしたり、不要なノードを削除したりします。
        
        {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/edit-reshape.gif" title="フィーチャの形状変更" width=500" >}}
    
    - 属性を追加または編集するには、編集ウィンドウに表示されるフォームに新しい属性値を入力して [更新] をクリックします。
        
        {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/edit-attribute.gif" title="属性の編集" width=500" >}}

1. [フィーチャの選択] 左の [<] をクリックして [編集] ウィンドウに戻ります。



{{< callout >}}

この操作によってフィーチャとその属性が更新されます。この操作は取り消せません。

{{< /callout >}}


### フィーチャの削除

1. [編集] ウィンドウで [フィーチャの編集] から適した選択方法をクリックします。

1. マップ上のフィーチャを選択します。

1. [削除] をクリックします。

1. [フィーチャの選択] 左の [<] をクリックして [編集] ウィンドウに戻ります。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/edit-delete.gif" title="フィーチャの削除" width=500" >}}

{{< callout >}}

この操作によってフィーチャとその属性が削除されます。この操作は取り消せません。

{{< /callout >}}

{{< callout >}}

フィーチャの編集の詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/edit-features-mv.htm)をご参照ください。

{{< /callout >}}