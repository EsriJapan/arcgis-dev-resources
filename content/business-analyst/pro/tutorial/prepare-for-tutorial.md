+++
title = "事前準備"
description = "演習を行うにあたり必要な作業を行います。"
weight = 6
alwaysopen = false
author = "石橋"
draft = false
+++

演習を開始するために必要な作業を行います。

## Excel ファイルを操作するためのドライバーをインストール

本チュートリアルでは、演習用データとして Excel 形式のファイルを提供しています。Excel ファイルを BA Pro で操作するには、以下の FAQ に沿って準備を行う必要があります。
- <a href="https://tech-support.esrij.com/arcgis/article/web/knowledge3475.html" target="_blank">ArcGIS Pro: Excel ファイルの読み込み方と注意事項 (バージョン 3.0 以降)</a>（BA Pro 2.9 以前は<a href="https://tech-support.esrij.com/arcgis/article/web/knowledge3364.html" target="_blank">こちら</a>）

## 演習用データ

演習に必要なデータは、各演習中にプロジェクト パッケージ形式 (.ppkx) でダウンロードできます。

{{< callout >}}

ArcGIS Pro の作業内容は「<a href="https://pro.arcgis.com/ja/pro-app/latest/help/projects/what-is-a-project.htm#ESRI_SECTION1_238659AC319E415BA2AB764DC500E4B8" target="_blank">プロジェクト</a>」に保存されます。プロジェクト パッケージは、プロジェクトに加え、関連するレイヤーやデータなどを含めてパッケージ化したものです。パッケージをダウンロードして開くと、デフォルトで以下のパスにファイルが展開されます。</br>
　　C:\Users\<ユーザー名>\Documents\ArcGIS\Packages\<プロジェクト パッケージ名>_xxxx

{{< /callout >}}

{{< callout >}}

新規プロジェクトの作成方法は、<a href="https://youtu.be/F8e6TZdgLLo" target="_blank">ArcGIS Pro 操作ムービー</a>をご覧ください。

{{< /callout >}}

## Business Analyst データ ソースの設定

Business Analyst の機能を利用するためには、Business Analyst データ ソースを設定する必要があります。

本チュートリアルでは、ローカル データセットをデータ ソースとして設定します。

1.	[解析] タブ → [ワークフロー] グループの [ビジネス解析] ボタンをクリックし、[Business Analyst データ ソース] が **JPN_EsriJapan_2025** に設定されているか確認します。設定されていない場合は、[データ ソースの変更] をクリックします。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/preparation/ba-data-source25.png" title="Business Analyst データ ソース">}}

2. [Business Analyst データ ソース] ダイアログが開いたら、[コンピューター] をクリックし、**JPN_EsriJapan_2025** を選択します。
3. [OK] をクリックしてダイアログを閉じます。

{{< callout >}}

BA Pro 3.2 以前では、Business Analyst データ キャッシュの作成が繰り返ず不具合が発生します。<a href="https://tech-support.esrij.com/arcgis/article/web/knowledge5745.html" target="_blank">FAQ の内容</a>を参考に回避策をお試しください。

{{< /callout >}}

{{< callout >}}

オンライン データセットを利用したい場合は、[ポータル] 内の地域別フォルダーの中から、解析対象の国を選択します。たとえば、日本を選択する場合は、[ポータル] → [アジア] → [日本] と選択します。なお、日本を含む一部の国では複数のデータ ソースから選択することができます。各データの詳細は<a href="https://doc.arcgis.com/en/esri-demographics/latest/esri-demographics/demographics.htm" target="_blank">ヘルプページ (英語) </a>をご覧ください。<br/>
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/preparation/ba-online-dataset.png" title="オンライン データセットの利用">}}

{{< /callout >}}

以上で、事前準備完了です。本チュートリアルの各演習に進んでください。
