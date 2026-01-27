+++
title = "ウィジェットとテーマのデプロイ"
description = "カスタム ウィジェットとカスタム テーマのデプロイについて紹介しています"
weight = 16 
aliases = ["/experience/deployment/widget-and-theme-deployment"]
+++

## ウィジェットのデプロイ
カスタム ウィジェットを配置できる場所は以下の 2 箇所です。

- ArcGIS Experience Builder (Developer Edition)
- ArcGIS Enterprise 版 ArcGIS Experience Builder

## ArcGIS Experience Builder (Developer Edition)

ArcGIS Experience Builder アプリケーション内でカスタム ウィジェットとテーマをデプロイするには、まずエクスペリエンスをダウンロードし、そのエクスペリエンスを Web サーバーにデプロイします。デプロイに関する詳細な手順は、[エクスペリエンスのデプロイ](../../deployment/experience-deployment/#エクスペリエンスのデプロイ) ページをご参照ください。

## ArcGIS Enterprise 版 ArcGIS Experience Builder

ArcGIS Enterprise にカスタム ウィジェットをホストすることで、ArcGIS Enterprise 内で直接作成されたエクスペリエンスまたは Developer Edition (同 ArcGIS Enterprise 環境に接続されているもの) 経由で作成されたエクスペリエンスが、カスタム ウィジェットを使用できるようになります。ArcGIS Enterprise 内にカスタム ウィジェットをホストするには、[カスタム ウィジェットの追加](https://doc.arcgis.com/en/experience-builder/11.4/configure-widgets/add-custom-widgets.htm) ページをご覧ください。このパターンは ArcGIS Enterprise のバージョンは 11.0 以降でサポートされています。

## テーマのデプロイ

現在、カスタム テーマは Developer Editon にのみデプロイ可能です。テーマの開発に関する詳細情報は、[Theme developement](https://developers.arcgis.com/experience-builder/guide/introduction-to-theme-development/) ページをご確認ください。

## ArcGIS Online 版について

ArcGIS Online へのカスタム ウィジェットとテーマのデプロイは、現在サポートされていません。

## 考慮事項

カスタム ウィジェットとテーマをデプロイする適切な場所は、アプリの要件と ArcGIS infrastructure によって異なります。これらの点を考慮し、ArcGIS Experience Builder の開発を開始する前にデプロイメント プランを作成することをおすすめします。
