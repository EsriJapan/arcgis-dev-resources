+++
title = "アイテムの削除と復元"
description = "メンバーが所有するアイテムの削除と復元について説明します。"
Weight = 2
alwaysopen = false
date = 2024-06-05T00:00:00+09:00
author = "角名" 
draft = false 
+++


組織の管理者は、組織のメンバーが保有する<a href="https://doc.arcgis.com/ja/arcgis-online/administer/manage-items.htm#ESRI_SECTION1_7DB7FE325E16446CA623231CC0721451" target="_blank">アイテムの削除</a>を行うことができます。またゴミ箱機能を有効化している場合、削除から 14 日間に限り、削除したアイテムを<a href="https://doc.arcgis.com/ja/arcgis-online/administer/manage-items.htm#ESRI_SECTION1_DB87DF8F4E15433D954B7E8B25579A03" target="_blank">復元</a>することができます。


{{< callout >}}

ゴミ箱機能の詳細と有効化の手順については<a href="https://doc.arcgis.com/ja/arcgis-online/administer/configure-details.htm#ESRI_SECTION1_91D3B03954B54E97B68DEA91854AD2F8" target="_blank">ヘルプ</a>をご参照ください。

{{< /callout >}}

## アイテムの削除

1. 管理者または組織のメンバーが所有するコンテンツの管理権限を持っているユーザーとして ArcGIS Online にサイン インします。

2. サイト上部の [組織] タブ → [メンバー] タブをクリックします。

3. 操作を行いたいメンバーの右に表示される […] をクリックして、[アイテム] をクリックします。

    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/delete-member-list.png" width="500" alt="メンバーの一覧">

4. メンバーの [マイ コンテンツ] ページへ移動します。

5. 削除したいアイテムのチェックボックスをオンにし、[削除] をクリックします。

    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/delete-select-item.png" width="750" alt="アイテムの選択と削除">
    
6. [アイテムの削除] ウィンドウで、アイテムを削除しても問題ないかを確認し、[削除] をクリックします。

7. 削除したアイテムは [ゴミ箱] に移動します。または完全に削除されます。


    {{< callout >}}

    ゴミ箱に移動したアイテムは 14 日後に自動的に削除されます。この期間もストレージ保存におけるクレジットを消費します。詳細については<a href="https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm#ESRI_SECTION1_4E74456E44D84BFDB5A590BA86FB3B76" target="_blank">ヘルプ</a>をご参照ください。
    <br>なお [表示を増やす ＋] ボタンから [完全に削除 (この操作を取り消すことはできません)] を選択することもできます。

    <!-- UI が [表示を増やす ＋] から [さらに表示] へ修正されたら書き換え-->

    {{< /callout >}}

    {{< callout >}}

    一部のアイテムはゴミ箱に移動することなく削除されます。
    <br>詳細については「<a href="https://doc.arcgis.com/ja/arcgis-online/reference/faq.htm#ESRI_QUESTIONANSWER_60A4B4E5F0994E8DB4A999818B19ED1D" target="_blank">削除したアイテムの一部がゴミ箱に移動しないのはなぜですか？</a>」をご参照ください。


    {{< /callout >}}



## アイテムの復元

1. 管理者または組織のメンバーが所有するコンテンツの管理権限を持っているユーザーとして ArcGIS Online にサイン インします。

2. サイト上部の [コンテンツ] → [組織] タブをクリックします。

3. [コンテンツ タイプ] 内の [ゴミ箱] をクリックします。

4. 復元したいアイテムを選択し、画面右上の [復元] をクリックします。
   
    <img src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/contents/delete-restore-item.png" width="950" alt="アイテムの復元">
   
5. [アイテムの復元] ウィンドウで、復元先のフォルダーを確認し、[復元] をクリックします。

    {{< callout >}}

    元の所有者の [マイ コンテンツ] のフォルダーを復元先として指定可能です。

    {{< /callout >}}

6. アイテムは復元先に指定したフォルダーへ格納されます。

    {{< callout >}}

    復元する場合は以下の点などに注意してください。
    <br>・ 削除前に設定されていたアイテムの共有設定やカテゴリは保存されません。復元後、再度設定を行う必要があります。
    <br>・ Web マップにオフライン マップ エリアが定義されていた場合、オフライン マップ エリアはゴミ箱内では保持されません。復元後、再定義する必要があります。
    <br>詳細については<a href="https://docuat.arcgis.com/en/arcgis-online/manage-data/restore-items.htm#ESRI_SECTION1_1DC1E3AC83004E07B825F5A335107ED9" target="_blank">ヘルプ</a>をご参照ください。

    {{< /callout >}}