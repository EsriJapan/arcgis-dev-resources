+++
title = "所有者の変更"
description = "メンバーが所有するアイテムの所有権の変更について説明します。"
Weight = 1
alwaysopen = false
date = 2025-03-05T00:00:00+09:00
author = "中家" 
draft = false 
+++

## 所有者の変更
組織の管理者または [コンテンツの再割り当て] 権限を持つ組織のメンバーは、アイテムの所有権の変更を行うことができます。
- [すべてのアイテムの所有権を他のメンバーに一括で変更](#すべてのアイテムの所有権を他のメンバーに一括で変更)  
組織からメンバーを削除する時など、管理者が一括で当該メンバーが所有するアイテムの所有権を変更します。
- [組織のメンバーのアイテムの所有権を他のメンバーに変更](#組織のメンバーのアイテムの所有権を他のメンバーに変更)  
管理者が当該メンバーが所有するアイテムの一部の所有権を変更します。

- [自身が所有するアイテムの所有権を他のメンバーに変更](#自身が所有するアイテムの所有権を他のメンバーに変更)  
組織のメンバー自身がアイテムの所有権を変更します。

{{< callout >}}

アイテム所有者の変更を行っても ArcGIS Online アイテムの URL、サービス URL は変わりません。そのため、組織サイトに追加している Web マップのリンク修正作業などは必要ありません。

 {{< /callout >}}

### すべてのアイテムの所有権を他のメンバーに一括で変更
1. 管理者権限を持つユーザーで ArcGIS Online にサイン インします。

1. サイト上部の [組織] タブ → [メンバー] タブをクリックします。

1. 操作を行いたいメンバーの右に表示される […] をクリックして、[コンテンツの移動] をクリックします。

    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/change-owner-member-contents-send.png" width="500" alt="コンテンツの移動">

1. [コンテンツの移動] ウィンドウで、アイテムの新しい所有者を、ドロップダウン、もしくは検索して選択します。

    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/change-owner-contents-send-window.png" width="500" alt="アイテムの新しい所有者を選択">

1. [移動] をクリックします。

{{< callout >}}

[移動] をクリックする前に、所有者が変更されるアイテムのリストを確認するには、[移動するコンテンツ] の下にある [すべて表示] をクリックします。
<img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/change-owner-contents-send-item-view.png" width="500" alt="すべてのアイテムの表示">  

{{< /callout >}}

{{< callout >}}

ゴミ箱に入っているアイテムは転送されません。

{{< /callout >}}


### 組織のメンバーのアイテムの所有権を他のメンバーに変更
1. 管理者権限を持つユーザーで ArcGIS Online にサイン インします。

1. サイト上部の [組織] タブ → [メンバー] タブをクリックします。

1. 操作を行いたいメンバーの右に表示される […] をクリックして、[アイテム] をクリックします。

    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/change-owner-member-list.png" width="500" alt="アイテムの管理">


1. メンバーの [マイ コンテンツ] ページへ移動します。

1. 所有者を変更したいアイテムのチェックボックスをオンにし、[その他] → [所有者の変更] をクリックします。

    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/change-owner-select-item.png" width="750" alt="アイテムの選択と所有者の変更">

1. [所有者の変更] ウィンドウで新しい所有者となるメンバーを選択し、[保存] をクリックします。

### 自身が所有するアイテムの所有権を他のメンバーに変更

   {{< callout >}}

   管理者ではないメンバーがこの操作を行うには、管理者があらかじめ [コンテンツの再割り当て] 権限を持つ[カスタム ロールを構成](https://doc.arcgis.com/ja/arcgis-online/administer/configure-roles.htm)し、[メンバーのロールを変更](/online/get-started/administer/members/role/)する必要があります。

   {{< /callout >}}

1. ArcGIS Online にサイン インします。
1. [マイ コンテンツ] ページへ移動します。

1. 所有者を変更したいアイテムのチェックボックスをオンにし、[その他] → [所有者の変更] をクリックします。

    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/change-owner-select-item.png" width="750" alt="アイテムの選択と所有者の変更">

1. [所有者の変更] ウィンドウで新しい所有者となるメンバーを選択し、[保存] をクリックします。

   {{< callout >}}

   [コンテンツの再割り当て] 権限を持つメンバーが所有者の変更先は、管理者または [コンテンツの受信] 権限を持つメンバーに限られます。[コンテンツの受信] 権限は、管理者があらかじめ[カスタム ロールを構成](https://doc.arcgis.com/ja/arcgis-online/administer/configure-roles.htm)し、[メンバーのロールを変更](/online/get-started/administer/members/role/)する必要があります。

  {{< /callout >}}