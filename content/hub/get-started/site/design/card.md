+++
title = "カードの配置と設定"
description = "ArcGIS Hub でカードの配置と設定をする方法を説明します。"
Weight = 2
alwaysopen = false
date = 2025-08-29T00:00:00+09:00
author = "松尾" 
draft = false 
+++


カードを配置・設定する手順を説明します。

## 行カードの配置  
すべてのカードは、[行] カード内に配置する必要があります。

1.	画面左側のサイド パネルから [レイアウト] をクリックします。  
1.	[行] カードをレイアウト上にドラッグ & ドロップで追加します。  
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/card-add-a-row-card.png" caption="行カードの追加" width="600" >}}

## テキスト カードの配置と設定  
テキスト カードを使用して、サイトの任意の場所にテキストを追加できます。このカードを利用して、ボタン、リスト、テーブル、およびカスタム コードをサイトに追加することもできます。

1. [行] カード内に [テキスト] カードをドラッグ＆ドロップで追加します。  
1. [テキスト] カードを配置すると、テキストを入力するためのボックスが表示されます。  
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/card-add-a-text-card.png" caption="テキスト カードの追加" width="650" >}}
1. テキストを入力し、入力が完了したら [編集] ボタンをクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/card-configure-a-text-card.png" caption="テキスト カードの編集" width="650" >}}

## カテゴリ カードの配置と設定  
サイトのコンテンツを、カテゴリ別にグループ化することができます。作成した各カテゴリはラベル テキストと任意のアイコンによって表現できます。

1. [行] カード内に [カテゴリ] カードをドラッグ＆ドロップで追加します。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/card-add-a-category-card.png" caption="カテゴリ カードの追加" width="600" >}}
1. 追加した [カテゴリ] カード上にカーソルを移動し、[編集] ボタンをクリックします。
1. サイド パネルの [データ] を展開し、カードの構成を設定します。
    - [タグ クエリを使用] - タグ クエリを入力します。ArcGIS Online アイテムでこの一致タグを持つデータ セットがすべて、検索結果で返されます。  
    - [カテゴリ クエリを使用] – 組織が設定したカテゴリを表示します。カテゴリの作成方法については、[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/administer/manage-items.htm#ESRI_SECTION1_6EE6EAA55E494C0A9E8391555E7D54F3)をご参照ください。  
    - [グループを使用] – ArcGIS Online のグループを選択します。このグループのすべてのデータセットが検索結果に返されます。
1. サイド パネルの [表示設定] を展開し、カードの表示設定を行います。  
    - 	[リンク テキスト] – カテゴリの内容を示すテキストを入力します。  
    -    [アイコン] – [ライブラリから選択] → [アイコンを選択] をクリックすると、アイコン ライブラリからカテゴリの内容を示すアイコンを選び、色を設定できます。  
   [自分の URL を入力] を選択すると、アイコンとして使用する画像の URL と代替テキストを設定できます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/card-configure-a-category-card.png" caption="カテゴリ カードの編集" width="500" >}}

{{< callout type="info" >}}  

各項目の詳細については、[ヘルプ](https://doc.arcgis.com/ja/hub/sites/display-apps-data-and-maps.htm)をご参照ください。  

{{< /callout >}}  
