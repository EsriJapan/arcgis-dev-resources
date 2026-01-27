+++
title = "フィールドを追加、削除したい"
description = "ホスト フィーチャ レイヤーのフィールドを追加・削除します。"
weight = 1
alwaysopen = false
publishDate = 2021-11-30T00:00:00+09:00
draft = false
author = "中家"
+++

ホスト フィーチャ レイヤーのフィールドを追加・削除します。

## フィールドの追加

1. フィーチャ レイヤーのアイテム詳細ページの [データ] タブ → [フィールド] → [＋フィールドの追加] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/field-create.png" title="フィールドの作成" width="600" >}} 
1.	格納したいデータの種類によって、適する [タイプ] を選択します。タイプの詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/add-or-delete-fields.htm#GUID-BE260302-CEA6-4A3A-8933-60911375943A)をご参照ください。

1. [フィールド名]、[表示名] を入力します。 

    {{< callout >}}

    [フィールド名] にはアンダースコア (_) 以外の特殊文字 (&、( )、スペースなど) や、[予約語](https://docs.microsoft.com/ja-jp/previous-versions/sql/sql-server-2014/ms189822(v=sql.120)) (「type」や「user」) を使用できません。また、フィールド名の最初の文字に数字を使用することはできません。これらの文字を表示上使用したい場合は、[表示名] でご利用ください。

    {{< /callout >}}

1. [フィールドの追加] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/field-add.png" title="フィールドの追加" width="300" >}} 

   
## フィールドの削除

1. フィーチャ レイヤーのアイテム詳細ページの [データ] タブの [フィールド] をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/field-field.png" title="フィールド ボタン" width="400" >}}
1. 削除したいフィールド名横のチェックボックスをオンにし、[削除] をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/field-select.png" title="フィールドの選択と削除" width="600" >}}

    {{< callout >}}

    FID や OBJECTID などのフィールドは削除できません。また、[スタイル設定](https://doc.arcgis.com/ja/arcgis-online/create-maps/apply-styles-mv.htm)、[フィルター](https://doc.arcgis.com/ja/arcgis-online/create-maps/apply-filters-mv.htm)、[ラベル](https://doc.arcgis.com/ja/arcgis-online/create-maps/configure-labels-mv.htm)、[フィーチャ検索](https://doc.arcgis.com/ja/arcgis-online/create-maps/configure-feature-search.htm)、[タイム スライダー](https://doc.arcgis.com/ja/arcgis-online/create-maps/configure-time-mv.htm)や編集情報の記録に使用されているフィールドは削除できません。

    {{< /callout >}}