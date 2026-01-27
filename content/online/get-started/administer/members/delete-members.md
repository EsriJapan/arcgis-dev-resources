+++
title = "メンバーの削除"
description = "メンバーを削除する操作について説明します。"
Weight = 3
alwaysopen = false
date = 2025-03-05T00:00:00+09:00
author = "中家" 
draft = false 
+++

ArcGIS Online の組織メンバーを削除します。

1. 管理者権限を持つユーザーで ArcGIS Online にサイン インします。
1. [組織] → [メンバー] タブをクリックします。
1. 削除したいメンバーを検索します。
1. メンバー名の一番右にある […] → [メンバーの削除] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/members/delete-members-delete.png" title="メンバーの削除" width="700" >}}

    {{< callout >}}
    
    複数のメンバーを一括で削除する場合は、削除するメンバー名の左にあるチェックボックスをオンにし、[その他] ドロップダウン メニューの [メンバーの削除] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/members/delete-members-bulkdelete.png" title="複数メンバーの削除" width="700" >}}

    {{< /callout >}}

1. 削除するメンバーがコンテンツやグループを所有している場合、以下の画面が表示されます。いずれかのオプションを選択し、[次へ] をクリックします。  
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/members/delete-members-manage-items.png" title="グループとコンテンツの管理" width="400" >}}

    {{< callout >}}
    
    コンテンツやグループを所有している状態では、メンバーを削除することができません。
    <br>ただしゴミ箱に含まれるコンテンツは、メンバーの削除と同時に削除されます。
    
    {{< /callout >}}

    {{< callout >}}
    

    [コンテンツとグループの削除] を選択した場合は、完全に削除され、元に戻せません。
    
    {{< /callout >}}

1. 手順 5 で [コンテンツとグループの移動] を選択した場合は、削除するメンバーが所有するコンテンツとグループを移行する他のメンバーを [メンバーの検索] ボックスで検索して指定します。  
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/members/delete-members-transfer-items.png" title="グループとコンテンツの移動" width="400" >}}

    {{< callout >}}
    
    [移動するコンテンツ]、[移動するグループ] 右の [すべて表示] をクリックして、削除するメンバーが所有するコンテンツやグループの一覧を表示することができます。一覧内のコンテンツやグループのそれぞれのアイテム詳細ページを開いて、個別に所有者の変更を行うこともできます。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/members/delete-members-content-change.png" title="コンテンツの所有者変更" width="600" >}}
    
    {{< /callout >}}

1. [メンバーの削除] をクリックします。
グループとコンテンツの移動と同時に、Esri アクセスの無効化や割り当てられているライセンスの取り消しが行われ、メンバーが削除されます。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/members/delete-members-processing.png" title="メンバーの削除の処理" width="400" >}}
