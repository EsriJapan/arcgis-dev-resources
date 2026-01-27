+++
title = "移行ガイド"
description = "ArcMap 版 BA Desktop を利用するユーザー様が BA Pro へと移行するための各種ガイドを提供します。"
weight = 1
alwaysopen = false
date = 2022-02-21T00:00:00+09:00
author = "石橋"
draft = false
+++

ArcMap 版 BA Desktop をご利用のユーザー様が、BA Pro へと移行を行う際に必要な手順や、利用可能な各種マテリアルについてご案内します。

- [BA Pro の特長](#ba-pro-の特長)
- [BA Pro のセットアップ](#ba-pro-のセットアップ)
- [ArcMap 版 BA Desktop のコンテンツを BA Pro に移行](#arcmap-版-ba-desktop-のコンテンツを-ba-pro-に移行)
  - [一般的なコンテンツ](#一般的なコンテンツ)
    - [ArcMap ドキュメントおよびスタイル](#arcmap-ドキュメントおよびスタイル)
    - [Python スクリプト](#python-スクリプト)
  - [Business Analyst 固有のコンテンツ](#business-analyst-固有のコンテンツ)
    - [プロジェクト データ](#プロジェクト-データ)
    - [Business Analyst データ レイヤー](#business-analyst-データ-レイヤー)
- [BA Pro の起動方法](#ba-pro-の起動方法)
- [BA Pro について学ぶ](#ba-pro-について学ぶ)

## BA Pro の特長

BA Pro が持つ特長や ArcMap 版 BA Desktop との違いについては、以下のブログ記事をご参照ください。

- ArcGIS ブログ「<a href="https://blog.esrij.com/2021/11/26/post-40794/" target="_blank">ArcGIS Business Analyst Pro への移行のススメ</a>」

## BA Pro のセットアップ

[ArcGIS Business Analyst Pro スタートアップ ガイド](/business-analyst/pro/get-started/)をご参照ください。

## ArcMap 版 BA Desktop のコンテンツを BA Pro に移行

ArcMap 版 BA Desktop で利用していた各種コンテンツを、BA Pro でもご利用いただくための手順をご紹介します。

### 一般的なコンテンツ

#### ArcMap ドキュメントおよびスタイル

ArcMap で作成したマップ ドキュメント (*.mxd) やスタイル (.style) は、ArcGIS Pro にインポートしたり、変換したりすることで、そのまま BA Pro で使用できます。インポートの方法は、ArcGIS Pro 移行ガイドの以下ページをご参照ください。

- <a href="https://www.esri.com/content/dam/esrisites/ja-jp/media/pdf/implementation-guides/arcgis-pro-migration-guide.pdf#page=13" target="_blank">コンテンツを ArcGIS Pro に移動</a>

#### Python スクリプト

ArcGIS Pro では、ArcMap の Python 2 ではなく、Python 3 を使用します。そのため、ArcMap で作成した Python スクリプトおよびカスタムのジオプロセシング ツールを ArcGIS Pro で利用するためには、スクリプトを更新する必要があります。
更新方法は、以下の Esri ヘルプ ドキュメントをご参照ください。
- <a href="https://pro.arcgis.com/ja/pro-app/latest/arcpy/get-started/python-migration-for-arcgis-pro.htm" target="_blank">10.x から ArcGIS Pro への Python の移行 - ArcGIS Pro</a>

### Business Analyst 固有のコンテンツ

#### プロジェクト データ

ArcMap 版 BA Desktop で作成された商圏などのデータは、Business Analyst プロジェクトに保存されてきました。
設定を変更していない場合、プロジェクト データの実体は、C:\My Output Data\Projects 配下に保存され、BA Pro からも直接参照することで開くことができます。保存先の詳細は以下の FAQ をご参照ください。

- <a href="https://tech-support.esrij.com/arcgis/article/web/knowledge3394.html" target="_blank">作成した商圏やレポートなどの解析結果はどこに保存されますか？(Business Analyst)</a>

#### Business Analyst データ レイヤー

ArcMap 版 BA Desktop では、シンボル調整済みの国勢調査や経済センサスなどの統計データを集約した「Business Analyst データ レイヤー」を利用できます。
ArcGIS Pro でも、以下 FAQ の手順に沿って操作いただくことで、同じレイヤーをご利用いただけます。
- <a href="https://tech-support.esrij.com/arcgis/article/web/knowledge3445.html" target="_blank">ArcMap 版 Business Analyst Desktop で利用できる「Business Analyst データ レイヤー」を Business Analyst Pro でも利用できますか？</a>

## BA Pro の起動方法

ArcMap 版 BA Desktop では、デスクトップや Windows メニュー上のショートカットを開くことで、オフライン背景地図 (広域地図・公共地図) が予め追加されたマップ ドキュメント (.mxd) を起動できましたが、BA Proでは、スタートメニュー → [ArcGIS] 配下にある [ArcGIS Pro] から起動することができます。

また、BA Pro では、オンラインの背景地図がデフォルトで表示されますが、オフライン背景地図 (広域地図・公共地図) は、以下の手順でレイヤー ファイルをマップに追加することで利用可能です。

- <a href="/business-analyst/pro/get-started/data/#arcgis-pro-で利用する方法" target="_blank">背景地図の利用 - ArcGIS Pro で利用する方法</a>

{{< callout >}}

**2022 年版以降のデータセット**をご利用の場合、オフライン背景地図を利用するためには事前にデータのダウンロード・配置を行っていただく必要がございます。
データのダウンロード・配置が完了していない場合は、<a href="/business-analyst/pro/get-started/data/offline_basemap/" target="_blank">背景地図の入手</a> から操作を行ってください。

{{< /callout >}}

## BA Pro について学ぶ

BA Pro への移行の際にご活用いただける操作方法に関するヘルプや学習用の教材をご案内します。

|名前|説明|
|:--|:--|
|<a href="/business-analyst/pro/tutorial/" target="_blank">ArcGIS Business Analyst Pro チュートリアル</a>|BA Pro のチュートリアルです。サンプル データを使用して解析を行うことで、BA Pro の基本的な操作方法や活用方法を学ぶことができます。|
|<a href="/business-analyst/pro/tips/functionality/" target="_blank">ArcGIS Business Analyst Desktop 機能対応表</a>|ArcMap 版 BA Desktop で利用できる機能に対応する BA Pro の機能を参照いただけます。|
|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/what-is-business-analyst-pro.htm" target="_blank">Business Analyst—ArcGIS Pro ドキュメント</a>|BA Pro に関するヘルプ ドキュメントです。|
|<a href="https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgis_pro_user_guide.pdf" target="_blank">ArcGIS Pro 逆引きガイド</a>|ArcGIS Pro での一般的な操作方法などを解説したガイドです。|
|<a href="https://www.esrij.com/cgi-bin/wp/wp-content/uploads/documents/arcgispro_faq.pdf" target="_blank">ArcGIS Pro FAQ 集</a>|ArcGIS Pro のよくある質問をまとめた資料です。|
|<a href="https://www.esri.com/ja-jp/arcgis/products/arcgis-pro/resources" target="_blank">ArcGIS Pro リソース ページ</a>|ArcGIS Pro の情報や、ヘルプ、ビデオ、ドキュメント等をご利用いただけます。|
|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/main/welcome-to-the-arcgis-pro-app-help.htm" target="_blank">ArcGIS Pro ヘルプ</a>|ArcGIS Pro 全般に関するヘルプ ドキュメントです。|

<style class="standard-table">
table th:first-of-type {
    width: 40%;
    }
table th:nth-of-type(2) {
    width: 60%;
    }
</style>