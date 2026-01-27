+++
title = "サイトの作成"
description = "ArcGIS Hub で新しいサイトを作成する方法について説明します。"
Weight = 1
alwaysopen = false
date = 2025-08-22T00:00:00+09:00
author = "松尾" 
draft = false 
+++


ArcGIS Hub で新しいサイトを作成する方法について説明します。  

{{< callout type="warning" >}}

この操作は、デフォルトの [管理者] ロールまたは [更新機能を持つグループを作成] と [メンバーの割り当て] の権限を持つロールが割り当てられたユーザーのみが可能です。  
ロールについての詳細は、[ヘルプ](https://doc.arcgis.com/en/hub/team/configure-roles-and-privileges.htm)をご参照ください。

{{< /callout >}}  

### ArcGIS Hub にアクセス

1. ArcGIS Online 組織サイトの右上に表示されている [アプリ ランチャー] → [Hub] をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/create-site-app-luncher.png" caption="アプリランチャーから  Hub を選択" width="500" >}}
1. [ワークスペースへようこそ] のダイアログが表示される場合は、[ワークスペースの使用] をクリックし、ダイアログを閉じます。
1. [マイ ワークスペース] という、ArcGIS Hub を操作するホーム画面が表示されます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/create-site-myworkspace.png" caption="マイ ワークスペース" width="500" >}}

### サイトの作成
1.	[作成] → [サイト] をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/create-site-create-new-site.png" caption="サイトの作成" width="550">}}
1. [タイトル] にサイトの名前を、[サブドメイン] に希望するサイトのサブドメインを入力し、[次へ] をクリックします。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/create-site-enter-name-for-site.png" caption="サイト名の入力" width="600" >}}
1. [カタログ] セクションでカタログの構成方法を下記のオプションから選択します。
   - 空白のカタログ: カタログを構成せずに、サイトを作成します。
   - カタログをクイック スタート: サイトのカタログで使用するグループと、サイトを同時に作成します。グループは「<サイトのタイトル> contents」という名称で自動作成されます。
   - 既存のグループによるカタログ: カタログとして既存のグループを選択し、サイトを作成します。
  {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/hub/get-started/site/create-site-select-catalog-option.png" caption="カタログ オプションの選択" width="650" >}}
   ここでは、[カタログをクイック スタート] オプションを選択し、カタログに含めるコンテンツのグループを作成してから、サイトを作成する方法について説明します。

1. [サイト レイアウト] を下記のオプションから選択し、[次へ] をクリックします。
   - 空白: まっさらな空のレイアウトからサイトを作成します。
   - シンプル: あらかじめいくつかの行とカードがレイアウトに追加された状態から、サイトを作成します。
1. 必要に応じて、サイトを共有するグループを選択し、[作成] をクリックします。
1. [サイトが正常に作成されました。] と表示されたら、[終了] をクリックします。