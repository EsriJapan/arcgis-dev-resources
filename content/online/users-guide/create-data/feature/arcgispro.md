+++
title = "ArcGIS Pro からフィーチャ レイヤーを公開したい"
description = "ArcGIS Pro のマップのデータを ArcGIS Online のフィーチャ レイヤーとして公開する方法について説明します。"
weight = 4
alwaysopen = false
publishDate = 2022-10-25T00:00:00+09:00
draft = false
author = "吉根"
+++

ArcGIS Pro 上のベクター データをフィーチャ レイヤーとして ArcGIS Online に公開します。「ホスト フィーチャ レイヤーの公開」権限が必要です。  
  
それぞれのステップの詳細な手順は、「[ArcGIS Pro 逆引きガイド](https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgis_pro_user_guide.pdf)」をご参照ください。

1. ArcGIS Pro を起動し、プロジェクトを作成します。  
ArcGIS Pro 逆引きガイド「1-4. ArcGIS Pro の起動と保存」

1. 空のフィーチャクラスを作成、もしくは既存データを追加します。  
ArcGIS Pro 逆引きガイド「8-1. 新しくデータを作成したい」、「2-3. マップにデータを追加・削除したい」

   {{< callout >}} 

   空のフィーチャクラスを作成した場合は、フィールドを作成、必要に応じて、データ入力時の選択リスト (ドメイン) を作成します。  
   ArcGIS Pro 逆引きガイド「9-3. 新しいフィールドを作成したい」、「9-10. 入力値をリストから選べるようにしたい」

   {{< /callout >}} 

1. ArcGIS Online にサイン インしていることを確認し、[コンテンツ] ウィンドウで公開するレイヤーを右クリックし、[共有] → [Web レイヤーとして共有] をクリックします。
1. [Web レイヤーとして共有] ウィンドウで、[名前]、[概要]、[タグ] を入力し、[レイヤー タイプ] は [フィーチャ] を選択します。


   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/feature/arcgispro-featurelayer.png" title="フィーチャ レイヤーの公開" width="800" >}} 

   {{< callout >}} 

   [名前] について、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。公開後、名前は ArcGIS Online のアイテム詳細ページで任意のものに変更できます。
   {{< /callout >}} 

1. [公開] をクリックして Web フィーチャ レイヤーとして共有します。

   {{< callout >}} 

   レイヤーの公開時に、画面下部に [エラー]、[警告]、[メッセージ] が表示される場合があります。[エラー] が表示された場合は、レイヤーを公開できないため、エラー内容を確認し修正後、再度レイヤーを公開します。[警告] が表示された場合、示されている事項を修正することで、レイヤーのパフォーマンスなどを向上できます。

   {{< /callout >}} 