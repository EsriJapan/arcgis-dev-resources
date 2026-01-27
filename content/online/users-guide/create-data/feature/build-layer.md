+++
title = "独自のフィーチャ レイヤーを作成したい"
description = "ArcGIS Online で独自のフィーチャ レイヤーを作成する方法について説明します。"
weight = 1
alwaysopen = false
publishDate = 2024-03-26T00:00:00+09:00
draft = false
author = "吉根"
+++

新しくデータを入力できる、空のフィーチャ レイヤーを作成します。「ホスト フィーチャ レイヤーの公開」[権限](https://doc.arcgis.com/ja/arcgis-online/reference/roles.htm)が必要です。


1. [コンテンツ] ページの [マイ コンテンツ] タブへ移動します。
1. [新しいアイテム] → [フィーチャ レイヤー] をクリックします。  
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/build-layer-new-item.png" title="新しいアイテム" width="400" >}}  

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/build-layer-new-item-feature-layer.png" title="フィーチャ レイヤー" width="500" >}}

1. [フィーチャ レイヤーの作成] ウィンドウが表示されます。まず、フィーチャ レイヤーの作成方法を下記のオプションから選択します。 
    *  [独自のレイヤーの定義]: 任意のレイヤー タイプを指定し、空のフィーチャ レイヤーを作成します。
    *  [既存のフィーチャ レイヤーを選択]:  組織内に既に公開されているレイヤーから空のフィーチャ レイヤーを作成する際に、ここでレイヤーを選択します。
    *  [テンプレートの使用]: 組織内に既に公開されているレイヤーから空のフィーチャ レイヤーを作成する際に、ここでレイヤーを選択します。
    *  [ArcGIS Server レイヤーの URL を指定]: 組織内外のフィーチャ レイヤーの URL を指定して、空のフィーチャ レイヤーを作成します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/build-layer-select-option.png" title="空のレイヤー" width="500" >}}
    ここでは、[独自のレイヤーの定義] オプションを使用し、ホスト フィーチャ レイヤーに含めるレイヤーとテーブルを定義して作成する方法について説明します。

1. [名前とタイプの指定] でレイヤー名およびレイヤー タイプを指定します。[追加] をクリックすることで、1 つのフィーチャ レイヤー内に複数のレイヤーを含めることができます。レイヤー タイプは、以下の 5 種類です。
    *  ポイント レイヤー
    *  ライン レイヤー
    *  ポリゴン レイヤー
    *  マルチポイント レイヤー
    *  テーブル 

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/build-layer-name-type.png" title="名前とタイプ" width="500" >}}

   {{< callout >}} 

   現地で GPS の受信機情報を自動記録するための [GPS メタデータ フィールドの追加]、高さの情報を保存するための [Z 値の有効化]、ジオメトリの各頂点の情報を保存するための [M 値の有効化] (ライン レイヤーのみ) をオプションとして追加できます。[GPS メタデータフィールドの追加] はポイント レイヤーのみです。なお GPS メタデータの詳細は「[高精度なデータ収集の準備](https://doc.arcgis.com/ja/field-maps/latest/prepare-maps/high-accuracy-data-collection.htm)」をご参照ください。

   {{< /callout >}} 

1. [次へ] をクリックします。
1. フィーチャ レイヤーの [タイトル] を入力します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/build-layer-title.png" title="タイトル" width="500" >}}

   {{< callout >}} 

   タイトルについて、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。公開後、タイトルはアイテム詳細ページで任意のものに変更できます。

   {{< /callout >}} 


1. [保存] をクリックします。
1. 空のフィーチャ レイヤーが作成され、レイヤーのアイテム詳細ページが表示されます。
タイトルは、[編集] をクリックして、わかりやすい日本語のデータ名に変更できます。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/build-layer-title-edit.png" title="タイトルネーム" width="500" >}}

{{< callout >}} 

データにフィールドを追加したり、入力候補のリストを作成したりするには、「[フィールドを追加、削除したい](/online/users-guide/manage-data/field)」、「[入力時の選択リストを作成したい](/online/users-guide/manage-data/list)」をご参照ください。

{{< /callout >}} 



