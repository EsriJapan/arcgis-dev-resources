+++
title = "アドイン ツール"
description = "日本国内用のツールはアドイン ツールとして提供しています。任意のツールをダウンロードし、インストールしてご利用ください。"
Weight = 4
alwaysopen = false
publishDate = 2026-01-21T00:00:00+09:00
draft = false
author = "司馬" 
aliases = [ "/pro/get-started/setup/user/addin_tool/" ]
+++

日本国内用のツールはアドイン ツールとして提供しています。
任意のツールを[ダウンロード](#ダウンロード)し、[インストール](#インストールとアンインストール)してご利用ください。

## ダウンロード
### 変換ツール (国内データ) for ArcGIS Pro
日本の各種団体で規定・提供されている仕様のデータを ArcGIS Pro で利用できるようにするための変換ツール

**対応フォーマット**
- 基盤地図情報
    - 基本項目
    - 数値標高モデル（1m、5m、 10m）

- 数値地図（国土基本情報） GML 形式
    - 数値地図（国土基本情報 20 万） GML 形式の地図情報
    - 数値地図 (国土基本情報 ) GML 形式の地図情報、地名情報、メッシュ標高情報

- DM データ
    - 公共測量作業規定に基づくデータ形式

- 法務省 地図 XML ファイル

|ファイル|ArcGIS Pro のバージョン|更新日|
|:--|:--:|:--|
|[ESRIJ.ArcGISPro.AddinJPDataCnv_v160.zip](https://www.esrij.com/support/download/esri/software/arcgis_pro/tools/ESRIJ.ArcGISPro.AddinJPDataCnv_v160.zip)|3.6|2025 年 12 月 26 日|
|[ESRIJ.ArcGISPro.AddinJPDataCnv_v150.zip](https://www.esrij.com/support/download/esri/software/arcgis_pro/tools/ESRIJ.ArcGISPro.AddinJPDataCnv_v150.zip)|3.5|2025 年 7 月 4 日|
|[ESRIJ.ArcGISPro.AddinJPDataCnv_v140.zip](https://www.esrij.com/support/download/esri/software/arcgis_pro/tools/ESRIJ.ArcGISPro.AddinJPDataCnv_v140.zip)|3.4|2025 年 2 月 10 日|
|[ESRIJ.ArcGISPro.AddinJPDataCnv_v130.zip](https://www.esrij.com/support/download/esri/software/arcgis_pro/tools/ESRIJ.ArcGISPro.AddinJPDataCnv_v130.zip)|3.3|2024 年 7 月 4 日|
|[ESRIJ.ArcGISPro.AddinJPDataCnv_v121.zip](https://www.esrij.com/support/download/esri/software/arcgis_pro/tools/ESRIJ.ArcGISPro.AddinJPDataCnv_v121.zip)|3.2|2024 年 1 月 25 日|
|[ESRIJ.ArcGISPro.AddinJPDataCnv_v110.zip](https://www.esrij.com/support/download/esri/software/arcgis_pro/tools/ESRIJ.ArcGISPro.AddinJPDataCnv_v110.zip)|3.1|2023 年 4 月 18 日|





### Zmap 対応ツール for ArcGIS Pro
株式会社ゼンリンから発売されている Zmap データをジオデータベースに変換して ArcGIS Pro で利用できるようにするための変換ツール


|ファイル|ArcGIS Pro のバージョン|更新日|
|:--|:--:|:--|
|[ダウンロードのお申し込み](https://www.esrij.com/form/arcgis/zmap-for-arcgispro/)|3.6|2025 年 12 月 26 日|
|[ダウンロードのお申し込み](https://www.esrij.com/form/arcgis/zmap-for-arcgispro/)|3.5|2025 年 7 月 4 日|
|[ダウンロードのお申し込み](https://www.esrij.com/form/arcgis/zmap-for-arcgispro/)|3.4|2025 年 2 月 10 日|



### シェープファイル文字コード設定ユーティリティ
ArcGIS Desktop (ArcMap、ArcGIS Pro)、ArcGIS Engine、ArcGIS Server の現在の文字コード設定を確認し、選択した文字コードに設定するためのツール

{{< callout type="info" >}}

このツールは実行ファイル (*.exe) として提供しているため、インストールの必要はありません。<br>
ツールにおいて、対象アプリケーションが表示されない場合は、[「ArcGIS Pro：文字コード設定ユーティリティから文字コードを変更できない」](https://tech-support.esrij.com/arcgis/article/web/knowledge3455.html)をご参照ください。

{{< /callout >}}
|ファイル|更新日|
|:--|:--|
|[ShpEncodingUtility_Multi.zip](https://www.esrij.com/cgi-bin/wp/wp-content/uploads/software/ShpEncodingUtility_Multi.zip)|2020 年 10 月 20 日|


## インストールとアンインストール
{{< callout type="info" >}}

あらかじめコンピューターの設定で、ファイルの拡張子を表示するよう設定を行ってください。

{{< /callout >}}

アドインのインストールには大きく分けて 2 つの方法があります。<br>
1つずつ個別にインストールする方法 ([マイ アドイン](#マイ-アドイン)) と共有フォルダーなどに配置してあるアドインを自動でインストールする方法 ([共有アドイン](#共有アドイン)) で手順が異なります。
### マイ アドイン
#### 1 つずつ個別にアドインをインストールする方法

**インストール**
1. ArcGIS Pro を終了した状態で、拡張子「*.esriAddinX」ファイルをダブルクリックします。
1. [アドインのインストール] をクリックします。
1. インストールが完了したら、[OK] をクリックします。
1. ArcGIS Pro を起動すると、アドインが有効になります。

**アンインストール**
1. ArcGIS Pro のプロジェクトを開き、[プロジェクト] タブ → [アドイン マネージャー] をクリックします。
1. [このアドインを削除] をクリックします。
1. ArcGIS Pro を再起動すると、アドインの削除が有効になります。


### 共有アドイン
#### 共有フォルダーなどに配置してあるアドインを自動で読み込む方法
この方法でインストールすると、任意のフォルダーに配置しているアドインを自動で読み込み、アドインを使用できるようになります。

**インストール**
1. 拡張子「*.esriAddinX」ファイルを任意の共有フォルダーにコピーします。
1.	ArcGIS Pro を起動し、[プロジェクト] タブ → [アドイン マネージャー] をクリックします。
1.	[アドイン マネージャー] の [オプション] をクリックし、[フォルダーの追加] ボタンから、手順 1 でアドインをコピーした共有フォルダーを指定します。<br>
※共有フォルダーに存在するすべてのアドインが使用可能になります。
1.	ArcGIS Pro を再起動すると、アドインが有効になります。
1. [アドイン マネージャー] においては、[共有アドイン] セクションにインストールしたアドインが表示されます。


**アンインストール**
1. ArcGIS Pro を起動し、[プロジェクト] タブ → [アドイン マネージャー] をクリックします。
1.	[オプション] タブをクリックし、削除するフォルダーを選択し、[フォルダーの削除] ボタンをクリックします。<br>
※フォルダー内に存在するすべてのアドインが使用できなくなります。
1.	ArcGIS Pro を再起動すると、アドインの削除が有効になります。