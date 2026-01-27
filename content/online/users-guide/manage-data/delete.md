+++
title = "アイテムを削除、復元したい"
description = "コンテンツ上からアイテムを削除・復元する方法を説明します。"
weight = 9
alwaysopen = false
publishDate = 2023-10-19T00:00:00+09:00
draft = false
author = "角名"
+++

コンテンツ上で不要になり、使用していないアイテムは<a href="https://doc.arcgis.com/ja/arcgis-online/manage-data/delete-items.htm" target="_blank">削除</a>することができます。
ただし削除後 14 日間はゴミ箱から<a href="https://doc.arcgis.com/ja/arcgis-online/manage-data/restore-items.htm" target="_blank">復元</a>することができます。

{{< callout >}}

ゴミ箱を利用するには、組織の管理者が<a href="https://doc.arcgis.com/ja/arcgis-online/administer/configure-details.htm#ESRI_SECTION1_91D3B03954B54E97B68DEA91854AD2F8" target="_blank">ゴミ箱機能を有効化</a>する必要があります。

{{< /callout >}}

## アイテムの削除

1. アイテムの所有者として組織にサインインします。

2. [コンテンツ] ページから [マイ コンテンツ] タブを選択します。

3. 削除したいアイテムのチェックボックスをオンにし、[削除] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/delete-item-delete.png" title="アイテムの削除" width="800" >}} 

4. [削除] ウィンドウで、アイテムを削除しても問題ないかを確認し、[削除] をクリックします。

5. 削除したアイテムは [ゴミ箱] に移動します。または完全に削除されます。


    {{< callout >}}

    ゴミ箱に移動したアイテムは 14 日後に自動的に削除されます。この期間もストレージ保存におけるクレジットを消費します。詳細については<a href="https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm#ESRI_SECTION1_4E74456E44D84BFDB5A590BA86FB3B76" target="_blank">ヘルプ</a>をご参照ください。
    <br>なお [表示を増やす ＋] ボタンから [完全に削除 (この操作を取り消すことはできません)] を選択することもできます。

    <!-- UI が [表示を増やす ＋] から [さらに表示] へ修正されたら書き換え-->

    {{< /callout >}}

    {{< callout >}}

    一部のアイテムはゴミ箱に移動することなく削除されます。
    <br>詳細については「<a href="https://doc.arcgis.com/ja/arcgis-online/reference/faq.htm#ESRI_QUESTIONANSWER_60A4B4E5F0994E8DB4A999818B19ED1D" target="_blank">削除したアイテムがすべてゴミ箱に移動しないのはなぜですか？</a>」をご参照ください。

    {{< /callout >}}

## アイテムの復元

1. アイテムの所有者として組織にサイン インします。

2. [コンテンツ] ページから [マイ コンテンツ] タブをクリックします。

3. [フォルダー] 内の [ゴミ箱] をクリックします。

4. ゴミ箱の中から復元したいアイテムを選択し、[復元] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/manage-data/delete-item-restore.png" title="アイテムの復元" width="900" >}} 

5. アイテムは復元先に指定したフォルダーへ格納されます。

    {{< callout >}}

    復元する場合は以下の点などに注意してください。
    <br>・ 削除前に設定されていたアイテムの共有設定やカテゴリは保存されません。復元後、再度設定を行う必要があります。
    <br>・ Web マップにオフライン マップ エリアが定義されていた場合、オフライン マップ エリアはゴミ箱内では保持されません。復元後、再定義する必要があります。
    <br>詳細については<a href="https://docuat.arcgis.com/en/arcgis-online/manage-data/restore-items.htm#ESRI_SECTION1_1DC1E3AC83004E07B825F5A335107ED9" target="_blank">ヘルプ</a>をご参照ください。

    {{< /callout >}}