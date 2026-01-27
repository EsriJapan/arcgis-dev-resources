+++
title = "マップを作成したい"
description = "Map Viewer を開き、追加するレイヤーを検索してマップに追加します。"
weight = 1
alwaysopen = false
publishDate = 2022-04-06T00:00:00+09:00
draft = false
author = "寺内"
+++

[データの作成](/online/users-guide/create-data)で作成したフィーチャ レイヤーなどを、レイヤーとしてマップに追加し、様々なレイヤーを組み合わせてマップを作成することができます。</br>
マップの保存には、コンテンツを作成する[権限](https://doc.arcgis.com/ja/arcgis-online/reference/roles.htm)が必要です (権限を持っていない場合でもマップは作成できますが、保存することはできません)。



### レイヤーの追加

1. ArcGIS Online 組織サイトの上部に表示されている [マップ] をクリックします。または、右上に表示されている [アプリ ランチャー] から [Map Viewer] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-app-launcher.png" title="アプリ ランチャー" width="400" >}} 

1. [コンテンツ] ツールバーの [追加] をクリックします。

1. 表示されるいずれかのレイヤーの追加方法を選択します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-contents-toolbar-add.png" title="レイヤーの追加方法" width="660" >}} 

それぞれのレイヤーの追加方法は、以下の通りです。


#### レイヤーの参照

1. [レイヤーの参照] で [マイ コンテンツ] をクリックし、検索する場所を指定します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-browse-layers.png" title="レイヤーの参照" width="300" >}} 

1. [レイヤーの検索] ボックスにキーワードを入力し、Enter キーで検索します。

1. [フィルター] をクリックすると、[フィルター] パネルが開きます。[タイトル] や [関連性] などで検索結果の並べ替えや、[更新日] や [アイテム タイプ] などでフィルターして検索することも可能です。

1. 検索結果の [追加] をクリックして、レイヤーをマップに追加します。追加後に [削除] をクリックしてマップから削除することもできます。

 
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-search-and-add-layers.png" title="レイヤーの検索と追加" width="400" >}}

1. [閉じる] をクリックして、パネルを閉じます。

{{< callout >}}

[レイヤーの参照] で検索する場所を [Living Atlas] に指定すると、米国 Esri 社やほかのユーザーが提供する高品質なレイヤーをマップに追加できます。レイヤーの詳細は、アイテム説明で確認できます。レイヤーによっては、クレジットを消費するものがあります。

{{< /callout >}}

#### URL からレイヤーを追加
CSV、KML、ArcGIS Server Web サービス、GeoRSS、GeoJSON、タイル レイヤーなどのレイヤー タイプは、URL を使用してマップにレイヤーを追加できます。

{{< callout >}}

詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/add-layers-from-url.htm)をご参照ください。

{{< /callout >}}

#### ファイルからレイヤーを追加
サポートされているファイル形式で保存したデータをインポートして、Map Viewer にレイヤーを追加することができます。
サポートされているファイル タイプは、CSV、Microsoft Excel、ファイル ジオデータベース、GeoJSON、シェープファイル、KML、GeoPackage などのファイル タイプです。


{{< callout >}}

ホスト フィーチャ レイヤーを作成しないで、ローカルまたはネットワーク ディレクトリからウィンドウにドラッグし追加することができます。

{{< /callout >}}

{{< callout >}}

詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/add-layers-from-file.htm)をご参照ください。

{{< /callout >}}


#### スケッチ レイヤーの作成
マップの任意の場所に、スタンプまたはフィーチャ、テキストを描画できます。スケッチ レイヤー内のフィーチャをクリックしたときに表示されるポップアップも設定できます。</br>描画したスケッチ レイヤーは、マップと一緒に保存されます。

1. スケッチ レイヤーを作成すると [スケッチ] ウィンドウが表示されます。

1. スケッチ ツールで、マップに追加するフィーチャの種類を選択します。

1. マップ上でフィーチャを描画します。

1. 描画したフィーチャの外観を変更するには、[スケッチ] ウィンドウの [シンボル] で設定します。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-draw-sketch-layers.png" title="スケッチ レイヤーの描画" width="600" >}}

1. 描画したフィーチャにポップアップを追加する場合は、[スケッチ] ウィンドウの [ポップアップ] をクリックし、[ポップアップの有効化] ボタンをオンにします。

1. [タイトル] と [テキスト] エレメントを入力します。

1. [戻る] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-popup-sketch-layers.png" title="ポップアップの設定" width="550" >}}

#### ルート レイヤーの作成

ネットワーク解析を実行する[権限](https://doc.arcgis.com/ja/arcgis-online/reference/roles.htm)を持つ組織サイトのメンバーは、ターンごとの自動車または歩行者向けのルート案内を取得し、マップ上にルートを表示できます。移動モードを設定し、複数のストップを追加し、出発時間を選択することができます。また、[ルートを構成] し、適切な権限が付与されていれば、[ルートを保存] して他のユーザーと共有することもできます。

{{< callout >}} 

詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/create-route-layers.htm)をご参照ください。

{{< /callout >}}

#### メディア レイヤーの追加

1 つまたは複数の画像をマップに追加し、目的の位置に画像を配置したレイヤーを作成することができます。 サポートされているファイル タイプは、JPG または PNG です。

{{< callout >}} 

詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/create-maps/add-media-layers.htm)をご参照ください。

{{< /callout >}}

### マップの保存

1. [コンテンツ] ツールバーの [保存と開く] → [名前を付けて保存] をクリックして、新しくマップを保存します。
既存のマップを上書き保存する場合は、[保存] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-save-map.png" title="マップの保存" width="300" >}}

1. [マップの保存] ダイアログで、タイトルの入力、保存するフォルダーの選択等を行い、[保存] をクリックします。

   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-save-map-dialog.png" title="[マップの保存] ダイアログ" width="400" >}}

1. マップが [マイ コンテンツ] に保存されます。

{{< callout >}}

保存した後でマップのタイトルを変更する場合は、タイトルの横にある [マップ タイトルの変更] をクリックした後、タイトルを変更して、[確認] をクリックし、マップを保存します。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/set-map-change-map-name.png" title="マップのタイトルの変更" width="600" >}}


{{< /callout >}}