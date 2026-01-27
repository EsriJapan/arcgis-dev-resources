+++
title = "写真やファイルをフィーチャに添付したい"
description = "フィーチャに画像などファイルを添付する設定の方法を説明します。"
weight = 4
alwaysopen = false
publishDate = 2025-03-25T00:00:00+09:00
draft = false
author = "角名"
+++

フィーチャ レイヤーの各フィーチャに画像などファイルを添付したり、モバイル端末のカメラで撮影した画像を現地調査アプリで添付したりすることができます。この機能を使用するには、レイヤーの設定が必要です。

## 添付ファイルの有効化

1. フィーチャ レイヤーのアイテム詳細ページを開きます。
1.	[概要] タブに表示されている、[レイヤー] 項目内で添付ファイルを有効にしたいレイヤーをクリックします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/attachment-layer.png" title="レイヤーの詳細" width="400" >}} 

1. 	[添付ファイルの有効化] をオンにします。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/attachment-enable.png" title="添付ファイルの有効化" width="300" >}} 

## Map Viewer でファイルの添付

{{< callout >}}

ファイルを添付するには、レイヤーに対して[編集が有効化](/online/users-guide/manage-data/privilege)されている必要があります。

{{< /callout >}}

1. [Map Viewer にレイヤーを追加](/online/users-guide/map/set-map#レイヤーの追加)します。
1.	右側のツール メニューから [編集] をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/attachment-edit.png" title="編集ボタン" width="150" >}} 

1.	新しい[フィーチャを作成](/online/users-guide/map/edit/#フィーチャの追加)、または既存の[フィーチャを編集](/online/users-guide/map/edit/#フィーチャの編集)します。
1.	[添付ファイル] で [追加] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/attachment-add.png" title="添付ファイルの追加" width="600" >}} 
1. [ファイルの選択] で添付したいファイルを選択し、[追加] をクリックして、[更新] をクリックします。
{{< callout >}}

・添付可能なファイルのサイズは、 1 ファイルにつき 10 MB の制限があります。<br>
・添付可能なファイルの形式については[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/reference/work-with-tables.htm#ESRI_SECTION2_3C99CF74A5C74A0AA0AD4A619F4457D7)をご参照ください。

{{< /callout >}}