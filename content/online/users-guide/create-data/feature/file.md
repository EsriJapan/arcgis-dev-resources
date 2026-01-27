+++
title = "Excel やテキスト ファイルからフィーチャ レイヤーを作成したい"
description = "ArcGIS Online で緯度経度、住所の位置情報が入力された Excel やテキスト ファイルからフィーチャ レイヤーを作成する方法について説明します。"
weight = 2
alwaysopen = false
publishDate = 2025-03-25T00:00:00+09:00
draft = false
author = "角名"
+++

緯度経度、住所、場所の名前 (駅名や公園名など) の位置情報が入力された Excel やテキスト ファイル (*.csv) からフィーチャ レイヤーを作成します。「ホスト フィーチャ レイヤーの公開」の[権限](https://doc.arcgis.com/ja/arcgis-online/reference/roles.htm)が必要です。



### Excel または CSV ファイルの準備

1 行目にフィールド名、その下に値が入力された形式のファイルを準備します。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/file-csv.png" title="csv" width="700" >}} 


{{< callout >}} 

命名規則外のフィールド名がある場合は、ArcGIS Online に公開できない、または公開してもデータが表示されません。
- アンダースコア（_）以外の特殊文字は使えません。スペースやカッコなどは削除してください。
- 数字で始まる名前は使えません。
- 同じフィールド名を重複して使うことはできません。

住所は、都道府県から入力してください。  
(例) 北区赤羽 1 → 東京都北区赤羽 1  

住所からフィーチャ レイヤーを作成する場合は、ジオコーディング処理に[クレジット](https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm)が消費されます。  

日本語を含む CSV ファイルを扱う場合は、文字コードを UTF-8 で保存する必要があります。  

{{< /callout >}} 


### Excel や CSV ファイル からフィーチャ レイヤーを作成

ArcGIS Online 上にファイルをアップロードして、フィーチャ レイヤーを公開します。

1.	ArcGIS Online の [コンテンツ] ページ → [マイ コンテンツ] タブに移動します。
2.	[新しいアイテム] → [お使いのデバイス] をクリックして、Excel または CSV ファイルを選択します。
3.	[このファイルをどのように追加しますか？] で、Excel の場合は [<ファイル名>.xlsx を追加してホスト フィーチャー レイヤーまたはテーブルを作成] を選択、CSV の場合は [<ファイル名>.csv を追加してホスト フィーチャー レイヤーまたはテーブルを作成] を選択します。
4.	[フィールド] 画面でホスト フィーチャ レイヤーに含めるフィールドを選択します。

  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/file-field-select.png" title="フィールドの選択" width="600" >}} 


5.	[位置情報の設定] 画面で、ファイルに含まれる位置情報のタイプを指定します。
ファイルに緯度経度の座標値が入っている場合は [緯度と経度]、住所や場所名が入っている場合は [住所または場所の名前] を選択します。


{{< callout >}} 

ジオコードに対応している住所の言語とレベルについては「[ジオコード データの有効範囲](https://doc.arcgis.com/ja/arcgis-online/reference/geocode-coverage.htm)」をご参照ください。
住所を利用する場合は [高度な位置設定] を展開すると、ジオコーディング処理の精度に関するフィールドを追加できます。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/reference/geocode.htm)をご参照ください。

{{< /callout >}}


{{< callout >}} 

[住所または場所の名前] を選択した場合はジオコーディング処理に[クレジット](https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm)が消費されます。

{{< /callout >}}

6.	位置情報が緯度経度の場合は緯度フィールド、経度フィールドをそれぞれ指定します。 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/file-coordinates.png" title="新しいアイテム" width="600" >}} 位置情報が住所や場所の名前の場合は、[住所または場所の名前] を指定します。また、ジオコーディングに必要なクレジット数が [クレジットの見積り] に表示されます。 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/file-address.png" title="タイトル" width="600" >}} 



7.	[タイトル] にレイヤー名を入力し、[保存] をクリックします。

 {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/file-title.png" title="タイトル" width="400" >}} 

{{< callout >}} 

タイトルについて、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また、半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。公開後、タイトルはアイテム詳細ページで任意のものに変更できます。

{{< /callout >}}

8.	[保存] ボタンをクリックします。

