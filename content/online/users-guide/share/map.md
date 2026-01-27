+++
title = "マップを共有したい"
description = "作成したマップを他のユーザーやグループに共有します。"
weight = 1
alwaysopen = false
publishDate = 2022-04-06T00:00:00+09:00
draft = false
author = "岸本"
+++

作成したマップ (やレイヤーなどのアイテム) を、他のユーザーやグループに共有することができます。アイテムを共有する[権限](https://doc.arcgis.com/ja/arcgis-online/reference/roles.htm)を持っている必要があります。

[Map Viewer からの共有方法](#map-viewer-からの共有方法)<br>
[[マイ コンテンツ] タブからの共有方法](#マイ-コンテンツ-タブからの共有方法)


### マップやレイヤーの共有範囲

マップやレイヤーの共有範囲は次の 3 種類です。
- すべての人に公開 (パブリック): 組織内外にかかわらず、すべてのユーザーに共有します。
- 組織: 組織内のすべてのユーザーに共有します。
- グループ: 特定のグループのメンバーに共有します。

{{< callout >}}

Web マップを共有する場合、参照しているレイヤーも同じ共有範囲である必要があります。Web マップとレイヤーの共有範囲が異なる場合は [アイテムの共有が正常に更新されました] ウィンドウで [共有の確認] をクリックし、[共有の確認] ダイアログを開きます。内容を確認し、[共有の更新] をクリックすることで、マップに含まれているレイヤーの共有設定を更新できます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/share/map-update-layer.png" title="共有の更新" width="500" >}} 

{{< /callout >}}

{{< callout >}}

ArcGIS Online の組織サイトへの[匿名アクセスが無効](https://doc.arcgis.com/ja/arcgis-online/administer/configure-security.htm#ESRI_SECTION1_323F5BC306A542258085A4910D261463)の場合、Web マップや Web アプリ、関連するレイヤーを [すべての人に公開] へ共有しているにも関わらず、組織へのサイン インが求められます。共有した Web マップや Web アプリの URL を下記のように www.arcgis.com を含んだ URL に変更しお伝えください。

マップの URL:<br>
https://<font color="red" >〇〇.maps.arcgis.com</font>/home/webmap/viewer.html?webmap=<Web マップ ID><br>
※ 〇〇は、組織サイト独自のショートネームです。

パブリック URL に変更後:<br>
https://<font color="red">www.arcgis.com</font>/home/webmap/viewer.html?webmap=<Web マップ ID><br>

{{< /callout >}}

### Map Viewer からの共有方法

1. Map Viewer で[マップを作成して保存](/online/users-guide/map/set-map)します。
1. [コンテンツ] ツールバーの [マップの共有] タブ → [共有の管理] をクリックします。
1. [共有] ダイアログで、[共有する範囲](#マップやレイヤーの共有範囲)を選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/share/map-share.png" title="共有範囲" width="300" >}} 
1. [保存] をクリックします。

### [マイ コンテンツ] タブからの共有方法

1. [コンテンツ] ページ → [マイ コンテンツ] タブを開きます。
1. 共有したいアイテムの左のチェックボックスをオンにし、選択状態にします。複数のアイテムを共有する場合は、それらのアイテムを複数選択します。
1. [共有] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/share/map-share-contents.png" title="コンテンツの共有" width="500" >}} 

    {{< callout >}}

    特定のアイテムの共有設定を変更したい場合は、共有範囲のアイコンをクリックすることでも変更できます。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/share/map-share-content.png" title="個別コンテンツの共有" width="500" >}} 

    {{< /callout >}}
1. [共有] ダイアログで、[共有する範囲](#マップやレイヤーの共有範囲)を選択します。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/share/map-share.png" title="共有範囲" width="300" >}} 
1. [保存] をクリックします。
1. 共有設定後、[マイ コンテンツ] タブで、各アイテムの共有範囲を確認することができます。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/share/map-shared.png" title="共有" width="500" >}} 
