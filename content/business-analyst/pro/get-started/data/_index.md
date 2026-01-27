+++
title = "データセット"
description = "Business Analyst 用ローカル データセットのセットアップ方法を説明します。"
weight = 2
alwaysopen = false
draft = false
+++

Business Analyst 用のローカル データセットのセットアップ方法を説明します。

## 動作環境

<a href="https://www.esrij.com/products/arcgis-business-analyst/data-spec/offline/" target="_blank">データ仕様</a>をご参照ください。

{{< callout >}}

最新版データはリリース時の最新版アプリケーションに最適化しています。データの更新と併せて、アプリケーションのバージョン アップをお勧めします。

{{< /callout >}}

{{< callout >}}

2022 年版以前のローカル データセットに付属するクラシック ロケーターは BA Pro 3.0 以降では動作しませんのでご注意ください。（<a href="https://blog.esrij.com/2022/08/10/post-45047/" target="_blank">詳細</a>）

{{< /callout >}}

## セットアップ

ローカル データセットを利用するには、データをダウンロードし、設定を行う必要があります。

### ステップ１：データの入手と解凍

BA Pro の新規購入時もしくは BA Pro の契約／保守有効期間中にデータが更新された場合、「**BAPro20xx年版データのダウンロードご案内**」が送付されます。ドキュメントに記載された URL より、最新版データをダウンロードしてください。

{{< callout >}}

<span style="color: red; ">**ダウンロードしたファイルは、必ず Windows 標準の解凍ツール等を用いて UTF8 形式で解凍してください。Lhaplus 等の解凍ツールは UTF8 形式の解凍に対応していないため、BA Pro でのエラー発生の原因となります。**</span>

{{< /callout >}}

### ステップ２：データの設定

BA Pro 3.0 以降では、データセット接続機能を利用して、インストールすることなくデータを利用できます。

#### データセット接続機能の利用

1.	ArcGIS Pro を起動します。
2.	<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/installing-business-analyst-data.htm#ESRI_SECTION1_B2DA93BB1F64473BAED3FB9A0307441E" target="_blank">接続可能データセットへの接続</a> の手順に沿って BA Pro 2025 年版データへの接続を行います。<br/>
※ 日本のローカル データセットはデータ ライセンスを付与せずに利用できます。

{{< callout >}}

データセット接続に利用する **dataset_description.xml** は以下のフォルダーに保存されています。<br/>
<解凍先フォルダー>\JPN_EsriJapan_2025

{{< /callout >}}

### ステップ３：データ ソースの確認

Business Analyst から使用するデータ ソースが正しく設定されていることを確認します。

1. ArcGIS Pro を起動します。
2. 任意のプロジェクトを開きます。作成済みプロジェクトが無い場合、<a href="https://pro.arcgis.com/ja/pro-app/latest/get-started/create-a-project.htm" target="_blank">新規で作成</a>します。
3. [解析] タブを開き、[ビジネス解析] ボタンをクリックします。
4. [Business Analyst データ ソース] が **JPN_EsriJapan_2025** になっていることを確認します。

{{<figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/get-started/data/ba-data-source25.png" title="Business Analyst データ ソース">}}

以上で、BA Pro を利用するための準備が整いました。

{{< callout >}}

BA Pro 3.2 以前では、Business Analyst データ キャッシュの作成が繰り返す不具合が発生します。<a href="https://tech-support.esrij.com/arcgis/article/web/knowledge5745.html" target="_blank">FAQ の内容</a>を参考に回避策をお試しください。

{{< /callout >}}

{{< callout >}}

Business Analyst データソースを変更する場合、[データ ソースの変更] をクリックして任意のデータを選択します。（<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/setting-business-analyst-data-source.htm" target="_blank">詳細</a>）

{{< /callout >}}

{{< callout >}}

一部ツールは、実行するジオプロセシング ツール単位でデータ ソースを変更することが可能です。(<a href="https://pro.arcgis.com/jp/pro-app/latest/help/analysis/business-analyst/setting-business-analyst-data-source.htm#ESRI_SECTION1_D43572EB49064E3AB6F52D3A97276C61" target="_blank">詳細</a>)
{{< /callout >}}


### オプション

必要に応じて、ローカルで利用可能な背景地図の設定を行えます。また、過去バージョンのデータでは ArcMap 版 BA Desktop もしくは BA Pro 2.9 以前で利用するためにインストールを行うことができます。
- [オフライン背景地図の設定 (オプション)](/business-analyst/pro/get-started/data/offline_basemap/) 
- [データのインストール (オプション)](/business-analyst/pro/get-started/data/install_data/)


{{< callout >}}

セットアップに関してご不明点がある場合や、データセットをメディアで入手したい場合は、<a href="https://tech-support.esrij.com/arcgis/article/web/knowledge101.html" target="_blank">My Esri</a> から <a href="https://tech-support.esrij.com/arcgis/article/web/knowledge106.html" target="_blank">お問い合わせ</a>ください。

{{< /callout >}}

<style class="info-table">
table {
    font-size: 16px;
    width: 95%;
    margin-right: 5px;
    margin-left: 15px;
}
table th:first-of-type {
    width: 25%;
    }
table th:nth-of-type(2) {
    width: 35%;
    }
table th:nth-of-type(3) {
    width: 40%;
    }
table tr{
    background-color: #ffffff;
}
</style>

<style class="standard-table">
table th:first-of-type {
    width: 25%;
    }
table th:nth-of-type(2) {
    width: 35%;
    }
table th:nth-of-type(3) {
    width: 40%;
    }
}
</style>