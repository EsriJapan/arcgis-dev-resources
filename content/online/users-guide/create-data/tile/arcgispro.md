+++
title = "ArcGIS Pro からタイル レイヤーを公開したい"
description = "ArcGIS Pro のマップのデータを ArcGIS Online のタイル レイヤーとして公開する方法について説明します。"
weight = 1
alwaysopen = false
publishDate = 2023-11-20T00:00:00+09:00
draft = false
author = "吉根"
+++

ArcGIS Pro 上のデータをタイル レイヤーとして ArcGIS Online に公開します。タイル レイヤーには、画像形式で高速描画が可能な[ラスター タイル](#ラスター-タイル-レイヤーの公開)と、Web マップ上でスタイルを変更できる[ベクター タイル](#ベクター-タイル-レイヤーの公開)の 2 種類があります。「ホスト タイル レイヤーの公開」の権限が必要です。  
  
それぞれのステップの詳細な手順は、「[ArcGIS Pro 逆引きガイド](https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgis_pro_user_guide.pdf)」をご参照ください。

### ラスター タイル レイヤーの公開
航空写真や図面などの画像形式のデータを ラスター タイル レイヤーとして公開します。
1. ArcGIS Pro を起動し、プロジェクトを作成します。  
ArcGIS Pro 逆引きガイド「1-4. ArcGIS Pro の起動と保存」

1. タイル レイヤーとして公開したいデータをマップに追加します。公開しないデータは ArcGIS Pro から削除します。  
ArcGIS Pro 逆引きガイド「2-3. マップにデータを追加・削除したい」

1. ArcGIS Online にサイン インしていることを確認し、[共有] タブ → [Web レイヤー] → [Web レイヤーの公開] をクリックします。
1. [Web レイヤーとして共有] ウィンドウで、[名前]、[概要]、[タグ] を入力し、[レイヤー タイプ] は [タイル] を選択します。


   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/tile/arcgispro-tilelayer.png" title="タイル レイヤーの公開" width="800" >}} 

   {{< callout >}} 

   [名前] について、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。公開後、名前は ArcGIS Online のアイテム詳細ページで任意のものに変更できます。
   {{< /callout >}} 

1. [構成] をクリックし、[詳細レベル] でタイルの最小/最大レベルを指定し、[ローカルにキャッシュ] ラジオ ボタンをオンにします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/tile/arcgispro-tileconfig.png" title="タイル レイヤーの構成" width="300" >}} 

   {{< callout >}} 

   [ローカルにキャッシュ] 以外のオプションを選択している場合、タイル レイヤーの公開処理に ArcGIS Online の[クレジット](https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm)を消費します。
   
   {{< /callout >}} 

1. [公開] をクリックして、タイル レイヤーとして ArcGIS Online に共有します。

   {{< callout >}} 

   レイヤーの公開時に、画面下部に [エラー]、[警告]、[メッセージ] が表示される場合があります。[エラー] が表示された場合は、レイヤーを公開できないため、エラー内容を確認し修正後、再度レイヤーを公開します。[警告] が表示された場合、示されている事項を修正することで、レイヤーのパフォーマンスなどを向上できます。

   {{< /callout >}} 

   {{< callout >}} 

   上記以外に、ジオプロセシング ツールで作成したタイル パッケージをブラウザー経由またはジオプロセシング ツールで ArcGIS Online に共有し、タイル レイヤーを公開する方法があります。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/publish-tiles.htm#ESRI_SECTION1_9DDC0AFDD2AD4AF59CD36A29721AB67A)をご参照ください。

   {{< /callout >}}

### ベクター タイル レイヤーの公開
境界や道路線などのベクターのデータをベクター タイル レイヤーとして公開します。
1. ArcGIS Pro を起動し、プロジェクトを作成します。  
ArcGIS Pro 逆引きガイド「1-4. ArcGIS Pro の起動と保存」

1. ベクター タイル レイヤーとして公開したいデータをマップに追加します。公開しないデータは ArcGIS Pro から削除します。  
ArcGIS Pro 逆引きガイド「2-3. マップにデータを追加・削除したい」

1. ArcGIS Online にサイン インしていることを確認し、[共有] タブ → [Web レイヤー] → [Web レイヤーの公開] をクリックします。
1. [Web レイヤーとして共有] ウィンドウで、[名前]、[概要]、[タグ] を入力し、[レイヤー タイプ] は [ベクター タイル] を選択します。


   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/tile/arcgispro-vectortilelayer.png" title="ベクター タイル レイヤーの公開" width="800" >}} 

   {{< callout >}} 

   [名前] について、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。公開後、名前は ArcGIS Online のアイテム詳細ページで任意のものに変更できます。
   {{< /callout >}} 

1. [構成] をクリックし、[詳細レベル] でタイルの最小/最大レベルを指定し、[ローカルにキャッシュ] ラジオ ボタンをオンにします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/tile/arcgispro-vectortileconfig.png" title="ベクター タイルの構成" width="300" >}} 

   {{< callout >}} 

   [オンライン上にキャッシュ] のオプションを選択している場合、フィーチャ レイヤーも同時に公開されます。
   
   {{< /callout >}} 

1. [公開] をクリックして、タイル レイヤーとして ArcGIS Online に共有します。

   {{< callout >}} 

   レイヤーの公開時に、画面下部に [エラー]、[警告]、[メッセージ] が表示される場合があります。[エラー] が表示された場合は、レイヤーを公開できないため、エラー内容を確認し修正後、再度レイヤーを公開します。[警告] が表示された場合、示されている事項を修正することで、レイヤーのパフォーマンスなどを向上できます。

   {{< /callout >}} 

   {{< callout >}} 

   上記以外に、ジオプロセシング ツールで作成したベクター タイル パッケージをブラウザー経由またはジオプロセシング ツールで ArcGIS Online に共有し、ベクター タイル レイヤーを公開する方法があります。詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/manage-data/publish-vector-tiles.htm#ESRI_SECTION1_D7F82432E5DD479DA47B4C9DD657610E)をご参照ください。

   {{< /callout >}} 