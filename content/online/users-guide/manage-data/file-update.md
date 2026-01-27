+++
title = "データをファイルから更新したい"
description = "レイヤー全体を上書き、またはレイヤーにデータを追加したり、一部を更新したりする方法を説明します。"
weight = 7
alwaysopen = false
publishDate = 2023-06-26T00:00:00+09:00
draft = false
author = "中家"
+++

ファイルを使用して、既存のデータを更新できます。更新したい内容によって、データの更新方法を選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-overview.png" title="レイヤー更新の種類" width="600" >}}

1. フィーチャ レイヤーのアイテム詳細ページを開きます。
1. [∨] ボタンで展開した後、[データの更新] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-updatedata.png" title="データの更新" width="250" >}}
1. 更新の方法を選択します。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-selecttype.png" title="更新の種類を選択" width="600" >}}

## フィーチャ レイヤー全体を上書き
すべての既存のデータは追加するファイルに置き換わります。

{{< callout >}}

[フィーチャ レイヤー全体を上書き] が利用可能なレイヤーにはさまざまな条件や注意点があります。本機能を利用するための条件や注意点については、[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/manage-hosted-feature-layers.htm#ESRI_SECTION1_1D3A87A80E3E4CD2A71744715F1522FE)をご参照ください。

{{< /callout >}}

4. [フィーチャ レイヤー全体を上書き] を選択し、[次へ] をクリックします。
5. 上書きするファイルを枠内にドラッグ&ドロップするか、[お使いのデバイス] をクリックしてファイルを選択し、[次へ] をクリックします。
 {{< callout >}}

 上書きするファイル名は、ArcGIS Online でレイヤーのソースとなっているファイル名と同じである必要があります。

 {{< /callout >}}
6. [正常に上書きされました] と表示され、データの上書きが完了します。

## レイヤーにデータを追加
既存のデータを保持し、差分のデータを追加します。

{{< callout >}}

[フィーチャの追加] が利用可能なレイヤーにはさまざまな条件や注意点があります。本機能を利用するための条件や注意点については、[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/manage-hosted-feature-layers.htm#APPEND)をご参照ください。

{{< /callout >}}

4. [フィーチャの追加] を選択し、[次へ] をクリックします。
5. 追加する差分のレコードを持つファイルを枠内にドラッグ&ドロップするか、[お使いのデバイス] をクリックしてファイルを選択し、[次へ] をクリックします。
6. 更新するレイヤーがポイント データの場合は、追加分のデータ内の緯度経度や住所等の位置情報列を指定します。
7. [一致するフィールドの選択] で、更新するレイヤーのフィールドに対応するファイル内の列を指定し、[追加して完了] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-match-field1.png" title="[一致するフィールドの選択] ダイアログ" width="600" >}}
8. [アイテムが正常に更新されました] と表示され、データの追加が完了します。

## データの一部を更新、またはデータの追加と更新
既存のデータの一部を更新します。またはデータの追加と一部の更新を行います。

{{< callout >}}

[フィーチャの更新] または [フィーチャの追加および更新] が利用可能なレイヤーにはさまざまな条件や注意点があります。本機能を利用するための条件や注意点については、[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/manage-hosted-feature-layers.htm#APPEND)をご参照ください。

{{< /callout >}}

4. データの一部を更新する場合は [フィーチャの更新] を、データの追加と一部の更新を行う場合は [フィーチャの追加および更新]を選択し、[次へ] をクリックします。
5. 更新するレコードの一意の ID を持つファイルを枠内にドラッグ&ドロップするか、[お使いのデバイス] をクリックしてファイルを選択し、[次へ] をクリックします。
6. 更新するレイヤーがポイント データの場合は、追加分のデータ内の緯度経度や住所等の位置情報列を指定します。
7. [一意識別子の選択] で、更新するレイヤーの一意の値フィールドに対応するファイル内の列を指定し、[次へ] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-unique.png" title="一意の値のフィールドを設定" width="600" >}}  

   {{< callout >}}

   [元のフィールド] で表示されるオブジェクト ID 等以外のフィールドを、レイヤーの一意の値フィールドとして設定することができます。
   1. フィーチャ レイヤーのアイテム詳細ページ → [データ] タブ → [フィールド] のフィールドの一覧で、設定したいフィールド名をクリックします。
   1. [個別値が必要] トグルをオンにします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-field-configure-unique-value.png" title="一意の値のフィールドを設定" width="300" >}}  
    
   {{< /callout >}}

8.	[一致するフィールドの選択] で、更新するレイヤーのフィールドに対応するファイル内の列を指定し、[次へ] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-match-field1.png" title="[一致するフィールドの選択] ダイアログ" width="600" >}}
9.	属性のみ更新する場合は [属性のみ] を、ジオメトリ (位置情報) と属性を更新する場合は [ジオメトリおよび属性] を選択し、[更新して完了] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/file-update-geometry-attribute.png" title="[既存フィーチャの更新方法] ダイアログ" width="600" >}}
10.	[アイテムが正常に更新されました] と表示され、データの追加が完了します。



