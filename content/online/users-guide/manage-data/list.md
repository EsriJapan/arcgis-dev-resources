+++
title = "入力時の選択リストを作成したい"
description = "データの編集時に便利な選択リストを作成します。"
weight = 2
alwaysopen = false
publishDate = 2021-11-30T00:00:00+09:00
draft = false
author = "中家"
+++

データの編集時や現地調査アプリでは、ドメインと呼ばれるあらかじめ決まった選択ルールを作成しておくと、キーボード入力の手間を省くことができます。ホスト フィーチャ レイヤーにのみ設定が可能です。

## ドメインの作成

1. フィーチャ レイヤーのアイテム詳細ページの [データ] タブ → [フィールド] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/field-field.png" title="フィールド ボタン" width="400" >}} 
    
1. ドメインを作成したいフィールドの [表示名] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/list-field.png" title="フィールド名" width="200" >}} 

1. [ドメイン] の項目から [開始] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/list-create-list.png" title="リストの作成" width="600" >}} 

1. [値の入力] を選択し、 [次へ] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/list-select-method.png" title="値の入力を選択" width="600" >}} 

    {{< callout >}}

    レイヤー内にフィーチャが既に存在し、属性値に個別値が含まれている場合、[値の検索] を選択すると個別値がドメインに自動で追加されます。

    {{< /callout >}}

    {{< callout >}}

    フィールドのタイプが数値や日時の場合は、許容される値の範囲をドメインとして設定することもできます。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/define-attribute-lists-and-ranges.htm)をご参照ください。

    {{< /callout >}}

1. [ラベル] と [コード] を入力し、入力値リストを作成します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/list-save-list.png" title="リストの保存" width="600" >}} 


1. 必要に応じて [･･･] をクリックし、ドメインの追加や削除を行うことでリストを調整します。

1. [保存] をクリックします。