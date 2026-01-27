+++
title = "シェープファイルを ArcGIS Online にアップロードしたい"
description = "シェープファイルを ArcGIS Online にアップロードし、フィーチャ レイヤーとして公開する方法について説明します。"
weight = 3
alwaysopen = false
publishDate = 2023-10-25T00:00:00+09:00
draft = false
author = "吉根"
+++



シェープファイルを ArcGIS Online にアップロードし、フィーチャ レイヤーとして公開します。この方法では最大 500 GB のファイルを [マイ コンテンツ] にアップロードできます。

### シェープファイルの準備

シェープファイルを zip 形式に圧縮します。
 
1. Windows エクスプローラーでシェープファイルを保存している場所へ移動します。
1. シェープファイルを構成しているファイルをすべて選択し、右クリック → [送る] → [圧縮 (zip 形式) フォルダー] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/shapefile-zip.png" title="zip" width="600" >}} 

   {{< callout >}} 

   ArcGIS Desktop 10.2.1 より前のバージョンや ArcGIS 製品以外で作成したシェープファイルを ArcGIS Online にアップロードした際に属性情報が文字化けする場合があります。下記の 1 ~ 3 の手順で CPG (*.cpg) ファイルを作成し、シェープファイルで使われている文字コードを明示的に指定することにより、文字化けを回避できます。

    1. テキスト ファイルに「SJIS」と入力して保存します。  
    1. ファイル名をシェープファイルと同じ名称に変更し、拡張子を「*.cpg」に変更し、シェープファイルと同じ場所に保存します。    
     例: シェープファイル「abc.shp」をご利用の場合は「abc.cpg」というファイル名にします。  
    1. 上記のファイルをまとめて、Zip 形式に圧縮します。



   {{< /callout >}} 

   {{< callout >}}

   ファイル名には、半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。アップロード後、アイテム詳細ページで任意の名前に変更できます。

   {{< /callout >}}

   圧縮したシェープファイルを下記の手順でアップロードします。

### シェープファイルのアップロード

1. [コンテンツ] ページ → [マイ コンテンツ] タブで、[新しいアイテム] → [お使いのデバイス] をクリックし、シェープファイルを圧縮した Zip ファイルを指定します。
1. [ファイル タイプ] が「シェープファイル」になっていることと、[～ を追加してホスト フィーチャ レイヤーを作成] になっていることを確認し、[次へ] をクリックします。


   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/shapefile-new-item.png" title="" width="600" >}} 


1. [タイトル] にレイヤー名を入力し、[保存] をクリックします。


   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/shapefile-title.png" title="" width="600" >}} 

   {{< callout >}} 

   タイトルについて、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。公開後、タイトルはアイテム詳細ページで任意のものに変更できます。

   {{< /callout >}} 

1. フィーチャ レイヤーが作成され、サービスのアイテム詳細ページが表示されます。

{{< callout >}} 

編集を行いたい場合は、「[データの編集に関する設定を変更したい](/online/users-guide/manage-data/privilege)」をご参照ください。

{{< /callout >}} 