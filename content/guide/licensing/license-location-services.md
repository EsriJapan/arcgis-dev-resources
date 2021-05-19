+++
title = "ロケーション サービスのライセンス"
description = "アプリケーションを本番環境にデプロイする準備ができましたら、ArcGIS テクノロジーを使用する際のライセンス方法を検討する必要があります。ロケーション サービスを使用する際のライセンスについて紹介します。"
Weight=1
aliases = ["/license-location-services/"]
+++

出典：ArcGIS Developers - licensing - [License location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-location-services/)

## ロケーション サービスのライセンス
アプリケーションを本番環境にデプロイする準備ができましたら、ArcGIS テクノロジーを使用する際のライセンス方法を検討する必要があります。アプリケーションには、使用する[コンテンツやサービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/services/)、開発された [API または SDK](https://developers.arcgis.com/documentation/mapping-apis-and-services/apis-and-sdks/) に応じたライセンス要件があります。詳細については、[使用条件](https://www.esri.com/en-us/legal/terms/full-master-agreement/mla-e204-e300-english)および [FAQ](https://developers.arcgis.com/faq/) を確認してください。

## ArcGIS ロケーション サービスの使用に関するライセンス
アプリが ArcGIS Platform のロケーション サービスを使用する場合、アプリを構築する際に選択したクライアント API にかかわらず、以下のように本番アプリのライセンスを取得することができます。

- API キー：API キーは、ArcGIS ロケーション サービスの使用を認可するものです。[ArcGIS またはオープン ソースの任意のクライアント API](https://developers.arcgis.com/documentation/mapping-apis-and-services/apis-and-sdks/) を使用して、API キーにてアプリを開発およびデプロイをすることができます。[ダッシュボード](https://developers.arcgis.com/api-keys/)にて API キーの使用状況の管理および追跡をします。API キーの詳細については、開発者ガイドの「[セキュリティと認証](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/api-keys/)」のセクションを参照してください。

- ArcGIS ID：お客様またはお客様の組織が ArcGIS Online サブスクリプションを購入した場合、アプリケーションの実運用ライセンスを取得するために追加の手順を踏む必要はありません。ただし、アプリケーションが使用可能なプリペイド クレジットをすべて使用する場合は、ArcGIS Online サブスクリプションの[追加クレジットを購入](https://www.esri.com/en-us/arcgis/products/credits/overview?rmedium=www_esri_com_EtoF&rsource=/en-us/arcgis/products/arcgis-online/pricing/credits)するか、API キーを使用してアプリケーションでロケーション サービスにアクセスします。

### Esri データのライセンス
本番アプリケーションで Esri が提供するデータを使用する場合は、特定のデータセットのすべてのライセンス要件に準拠する必要があります。ライセンスは、アイテムの ArcGIS Online ページの「Access and Use Constraints」セクションで確認できます。アイテムのページは、アプリケーションで使用しているアイテム ID または URL を検索して見つけることができます。ほとんどのデータは、[Esri マスター ライセンス契約](https://www.esri.com/en-us/legal/terms/full-master-agreement)によってライセンスされている。[マスター契約の概要](https://downloads2.esri.com/arcgisonline/docs/tou_summary.pdf)もご覧いただけます。

アプリケーションで Esri ベースマップを使用する場合は、Esri への帰属表示も追加する必要があります。ほとんどの ArcGIS API および SDK はこれを自動的に行います。詳細については、「[アプリケーションでの帰属](https://developers.arcgis.com/terms/attribution/)」を参照してください。

### サード パーティ データのライセンス
多くの組織は、ArcGIS Online で独自のデータをホストし、ArcGIS Hub または Living Atlas を通じてデータを利用できるようにしています。このデータをプロダクションで使用する前に、使用するデータに関連するライセンス要件に準拠していることを確認する必要があります。ライセンスは組織ごとに異なる場合があります。アイテムまたはサービスのライセンスを確認するには、ArcGIS Online で ID または URL を検索します。ライセンスには、「アクセスと使用の制約」のセクションがあります。

ArcGIS Hub および ArcGIS Open Data でも、データセットのページでデータセットのタイトルの下にライセンス要件が表示されます。

### 帰属
Esri では、アプリケーションで ArcGIS ベースマップ、ArcGIS データ サービス、または ArcGIS API テクノロジを使用する場合は、Esri の帰属表示を含める必要があります。アプリの構築方法や使用するデータに応じて、アプリで対応が求められる[帰属表示に関する特定の要件](../attribution)があります。

