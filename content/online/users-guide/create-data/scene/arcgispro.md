+++
title = "ArcGIS Pro からシーン レイヤーを公開したい"
description = "ArcGIS Pro の 3D のデータを ArcGIS Online のシーン レイヤーとして公開する方法について説明します。"
weight = 1
alwaysopen = false
publishDate = 2023-10-25T00:00:00+09:00
draft = false
author = "吉根"
+++

ArcGIS Pro から 3D ポイント、マルチパッチ、LiDAR データなどを、Web シーン レイヤーとして公開します。「ホスト シーン レイヤーの公開」権限が必要です。  
  
ArcGIS Pro からシーン レイヤーとして公開できる 3D データの例 (左から、高さの値が入った 3D ポイント、BIM データ、点群)
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/scene/arcgispro-scene-example.png" title="3D データ例" width="700" >}} 

それぞれのステップの詳細な手順は、「[ArcGIS Pro 逆引きガイド](https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgis_pro_user_guide.pdf)」をご参照ください。

1. ArcGIS Pro を起動し、プロジェクトを作成します。  
ArcGIS Pro 逆引きガイド「1-4. ArcGIS Pro の起動と保存」

1. ArcGIS Pro でシーンを作成します。  
ArcGIS Pro 逆引きガイド「5-1. 3D マップを作成したい」

1. [コンテンツ] ウィンドウの [3D レイヤー] カテゴリに、3D データを追加します。
ArcGIS Pro 逆引きガイド「2-3. マップにデータを追加・削除したい」

1. 公開したいレイヤーを右クリックし、[共有] → [Web レイヤーとして共有] をクリックします。
1. [Web レイヤーとして共有] ウィンドウで、[名前]、[概要]、[タグ] を入力します。


   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/scene/arcgispro-scenelayer.png" title="シーン レイヤーの共有" width="800" >}} 

   {{< callout >}} 

   [名前] について、既に組織サイト上に存在するサービス名と同じ名前は使用できません。また半角英数字とアンダースコア (\_) の使用を推奨します。日本語とアンダースコア (\_) 以外の特殊文字、スペースは使用しないでください。公開後、名前は ArcGIS Online のアイテム詳細ページで任意のものに変更できます。
   {{< /callout >}} 

   {{< callout >}}

   [構成] タブで、[キャッシュ] のオプションが利用できる場合、[オンライン上にキャッシュ] を選択すると、関連するフィーチャ レイヤーも同時に公開され、シーン レイヤー公開時に ArcGIS Online の[クレジット](https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm)を消費します。一方で [ローカルにキャッシュ] を選択すると、シーン レイヤー パッケージ (.slpk) がポータルへ共有され、このパッケージを使用して Web シーン レイヤーが公開されるため、関連するフィーチャ レイヤーは公開されません。詳細は[ヘルプ](https://pro.arcgis.com/ja/pro-app/latest/help/sharing/overview/configure-web-scene-layer.htm)をご参照ください。
      {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/create-data/scene/arcgispro-sceneconfig.png" title="シーン レイヤー構成" width="300" >}} 

   {{< /callout >}} 


1. [公開] をクリックして、シーン レイヤーとして ArcGIS Online に共有します。

   {{< callout >}} 

   レイヤーの公開時に、画面下部に [エラー]、[警告]、[メッセージ] が表示される場合があります。[エラー] が表示された場合は、レイヤーを公開できないため、エラー内容を確認し修正後、再度レイヤーを公開します。[警告] が表示された場合、示されている事項を修正することで、レイヤーのパフォーマンスなどを向上できます。

   {{< /callout >}} 

   {{< callout >}} 

   上記以外に、ジオプロセシング ツールで作成したタイル パッケージをブラウザー経由またはジオプロセシング ツールで ArcGIS Online に共有し、タイル レイヤーを公開する方法があります。詳細は[ヘルプ](https://pro.arcgis.com/ja/pro-app/latest/help/sharing/overview/scene-layer-package.htm)をご参照ください。

   {{< /callout >}}