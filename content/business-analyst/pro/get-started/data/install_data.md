+++
title = "データのインストール (オプション)"
description = "データのインストール方法を説明"
weight = 3
alwaysopen = false
draft = false
+++

ArcMap 版 Business Analyst Desktop もしくは BA Pro 2.9 以前でデータを利用する場合は、データのインストールが必要です。

{{< callout >}}

BA Pro 3.0 以降では、Business Analyst データセットをインストールして使用することは推奨されません。[データセット接続機能](/business-analyst/pro/get-started/data/#データセット接続機能の利用)をご利用ください。BA Pro 2024 年版データ以降はインストールできません。

{{< /callout >}}

### インストールの実行

1. ArcGIS Business Analyst 20xx 年版データのフォルダー直下に格納されている [setup.exe] を実行します。
2. インストール ダイアログが起動したら、[次へ] をクリックします。
3. 「ESRIジャパン データ コンテンツ使用規定」の内容に同意された上で、[使用許諾契約の条項に同意します] にチェックを入れて、[次へ] をクリックします。
4. [完全] を選択し、[次へ] をクリックして次へ進みます。

{{< callout >}}

[カスタム] を選択すると、インストール先のフォルダー変更が可能です。デフォルトのインストール先は「C:\ArcGIS\Business Analyst\JPN_EsriJapan_20xx」です。また、一部データは、インストールの可否を選択することができます。

{{< /callout >}}

5. [インストール] をクリックして、インストールを開始します。

{{< callout >}}

インストールが開始されるまでに時間がかかることがあります。また、10GB 以上のデータをコピーするため、インストールに長時間 (数十分程度) 要する場合があります。

{{< /callout >}}

6. インストール完了のウィンドウが表示されたら、[完了] をクリックしてウィンドウを閉じます。

以上で、データのインストールは完了です。

{{< callout >}} 

インストールが完了すると、Windows のスタート メニュー → [ArcGIS] フォルダー内にショートカット「Business Analyst 20xx (オンライン地形図・ArcMap版)」が作成されます。ArcMap 版 BA Desktop をご利用する場合は、こちらのショートカットから ArcMap 版 BA Desktop を起動できます。<br/>
{{<figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/get-started/data/open-ba-mxd.png" width="20%" title="BAショートカット" >}}

{{< /callout >}}

## アンインストール

以下の手順でデータセットをアンインストールできます。データセット接続機能を用いた場合は、アンインストールの必要はありません。

1. [コントロール パネル] を開き、[プログラムと機能] を開きます。
2. プログラムの一覧から [ArcGIS Business Analyst -20xx 年版データ] を右クリックし、[アンインストール] を選択します。

