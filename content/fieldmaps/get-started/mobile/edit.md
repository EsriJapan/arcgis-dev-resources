+++
title = "データの入力・編集"
description = "データの入力・編集方法について説明します。"
weight = 2
alwaysopen = false
publishDate = 2023-03-15T00:00:00+09:00
draft = false
author = "中家"
+++
データの入力・編集方法について説明します。

[1. 新規データの入力 (例: ポイント)](#1-新規データの入力-例-ポイント)  
[2. 既存データの編集](#2-既存データの編集-例-エリア)  
[3. 既存データの属性をコピーして、入力](#3-既存データの属性や形状をコピーして入力-例-ポイント)  
[4. 写真の添付](#4-写真の添付)  
[5. ストリーミング入力](#5-ストリーミング入力-例-ライン)  
[6. 既存データの削除](#6-既存データの削除)

### 1. 新規データの入力 (例: ポイント)
1. 右下のプラス ボタンをタップします。
1. 入力するレイヤーをタップします。ポイントが自動で入力されない場合は、[ポイントの追加] をタップします。
1. ポイントの位置を修正する場合は [ポイントの更新] をタップします。
1. パネルを上にスライドし、属性フィールドをタップして情報を入力します。
1. [送信] をタップします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/edit-newdata-plot.gif" title="新規データの入力" width="300" >}} 

### 2. 既存データの編集 (例: エリア)
1. 編集したいフィーチャをマップ上でタップして選択し、左下の [編集] をタップします。
1. 頂点を移動する場合は、その頂点をタップし、[選択したポイントの更新] をタップします。また、頂点を追加する場合は、追加したい位置にある辺を選択して、 [ポイントの追加] をタップします。
1. 属性を変更する場合はパネルを上にスライドし、属性を入力します。
1. [送信] をタップします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/edit-existing-data.gif" title="既存データの編集" width="300" >}}

### 3. 既存データの属性や形状をコピーして、入力 (例: ポイント)
1. 属性をコピーしたいフィーチャをマップ上でタップします。
1. パネルを上にスライドし、[コピー] をタップします。選択肢が出る場合は、[すべてをコピー]、[形状をコピー]、[属性のコピー] のいずれかをタップします。
   {{< callout >}}

   Field Maps Designer で形状や形状および属性もコピーできるように設定ができます (エリアやラインのみ)。設定方法は[ヘルプ](https://doc.arcgis.com/ja/field-maps/ios/help/configure-the-map.htm#ESRI_SECTION2_DE55A4A3B361404AA568EA0B378AED3A)をご参照ください。

   {{< /callout >}}

1. 入力する位置をマップ上で指定し、[ポイントの追加] をタップします。
1. [送信] をタップします。
        {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/edit-copy.gif" title="既存データの属性や形状をコピーして、入力" width="300" >}}
   


### 4. 写真の添付
1. マップにデータを入力し、パネルを上にスライドします。
1. [写真の撮影] をタップし、カメラ ビューで撮影して [写真を使用] をタップします。 
1. [送信] をタップします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/edit-fhoto.gif" title="写真の添付" width="300" >}}

### 5. ストリーミング入力 (例: ライン)
移動中に、GPS で取得した位置でラインまたはエリア フィーチャを自動描画することができます。
1. ラインまたはエリアのレイヤーを選択します。
1. […] をタップします。
1. [ストリーミングの開始] をタップします。
1. 描画したい位置まで移動します。
1. [ストリーミングの停止] をタップします。
1. [送信] をタップします 。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/edit-stream.gif" title="ストリーミング入力" width="300" >}}

### 6. 既存データの削除
1. 削除したいフィーチャをマップ上でタップし、パネル下の […] をタップします。
1. [削除] をタップします。
1. 確認のポップアップが表示されるので、[削除] をタップします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/edit-delete.gif" title="既存データの削除" width="300" >}}

   {{< callout >}}

   データの入力・編集の詳細については[ヘルプ](https://doc.arcgis.com/ja/field-maps/ios/help/capture.htm) をご参照ください。

   {{< /callout >}}







