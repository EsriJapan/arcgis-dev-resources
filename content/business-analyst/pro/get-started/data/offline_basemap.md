+++
title = "オフライン背景地図の設定 (オプション)"
description = "オフライン背景地図の設定方法を説明します。"
weight = 2
alwaysopen = false
draft = false
+++

ローカルで利用可能な背景地図 (<a href="https://www.gisdata-store.biz/product/1587/" target="_blank">広域地図</a>・<a href="https://www.gisdata-store.biz/product/1593/" target="_blank">公共地図</a>) は、個別にダウンロードして利用できます。ご利用される場合は、以下の手順で背景地図をダウンロードし、データの配置を行ってください。

{{< callout >}}

インターネット接続環境で BA Pro を操作する場合、ArcGIS Online で配信されているオンライン背景地図をご利用いただけます。

{{< /callout >}}

## ステップ１：背景地図の入手

1. 「BAPro20xx年版データのダウンロードご案内」に記載された、オフライン背景地図のダウンロード用 URL にアクセスし、以下の zip ファイルをダウンロードします。
> - 広域地図.zip
> - 公共地図.zip
2. ダウンロードした zip ファイルを「BAPro20xx年版データのダウンロードご案内」に記載のパスワードを用いて解凍します。
3. 解凍が終了したら、任意の場所にデータを保存します。

## ステップ2：背景地図の利用

解凍した背景地図を ArcGIS Pro で利用する方法を説明します。

1. ArcGIS Pro を起動します。
2. [マップ] タブ → [レイヤー] グループの [データの追加] → [データ] をクリックします。
3. 利用する背景地図に応じてレイヤー ファイルを選択し、[OK] をクリックします。
|背景地図|レイヤー ファイル|
|:--|:--|
|公共地図|<データ保存先>\公共地図\公共地図.lyr|
|広域地図|<データ保存先>\広域地図\広域地図.lyr|

以上で、BA Pro 上で公共地図・広域地図を利用できるようになります。

### ArcMap 版 BA Desktop で利用する場合

ArcMap 版 BA Desktop で利用する場合は、以下の設定を行うこともできます。

{{< callout >}}

BA Pro 2025 年版データ以降は、以下のファイルは利用できないのでご注意ください。

{{< /callout >}}

1. BA Pro と同様に背景地図の入手・解凍を行います。
2. 広域地図・公共地図の両方を、フォルダーごと以下のパスにコピーします。
    > C:\ArcGIS\Business Analyst\JPN_Esrijapan_20xx\Data\Basemap Data

{{< callout >}}

Basemap Data フォルダーが存在しない場合は、手動で作成してください。<br/>
広域地図・公共地図のレイヤーファイルが以下のパスに保存されるようにします。<br/>
　・広域地図：C:\ArcGIS\Business Analyst\JPN_Esrijapan_20xx\Data\Basemap Data\広域地図\広域地図\広域地図.lyr<br/>
　・公共地図：C:\ArcGIS\Business Analyst\JPN_Esrijapan_20xx\Data\Basemap Data\公共地図\公共地図\公共地図.lyr

{{< /callout >}}

3. [**背景地図設定用ファイル**](https://www.esrij.com/cgi-bin/wp/wp-content/uploads/resources/ba2024-basemap-file.zip) (2024 年版データ用 ) をダウンロードして解凍します。
4. 解凍したフォルダー内の各ファイルを、以下のフォルダーにコピーします。
|データ名|コピー先のフォルダー|
|:--|:--|
|・Business Analyst 20xx Koiki.mxd<br/>・Business Analyst 20xx Public.mxd|C:\ArcGIS\Business Analyst\JPN_Esrijapan_20xx\Data|
|・広域地図.lyr<br/>・広域地図_グレースケール.lyr<br/>・公共地図.lyr<br/>・公共地図_グレースケール.lyr|C:\ArcGIS\Business Analyst\JPN_Esrijapan_20xx\Dataset\ArcGIS Online Maps|

### ArcMap 版 Business Analyst Desktop での利用方法

利用する背景地図に応じて、以下の MXD ファイルを開きます。
|背景地図|レイヤー ファイル|
|:--|:--|
|公共地図|C:\ArcGIS\Business Analyst\JPN_Esrijapan_20xx\Data\Business Analyst 20xx Public.mxd|
|広域地図|C:\ArcGIS\Business Analyst\JPN_Esrijapan_20xx\Data\Business Analyst 20xx Koiki.mxd|

{{< callout >}}

Business Analyst ツールバーの [マップ] メニューから、背景地図にチェックを入れて追加することもできます。<br/>

{{<figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/get-started/data/add-basemap.png" title="マップメニュー" >}}

{{< /callout >}}
