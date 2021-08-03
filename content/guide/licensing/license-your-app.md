+++
title = "アプリのライセンス"
description = "作成したアプリケーションを本番環境で運用するために必要となる ArcGIS テクノロジーを使用する際のライセンスについて紹介します。"
Weight=2
aliases = ["/license-your-app/"]
+++

出典：ArcGIS Developer - Licensing - [License your app](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-your-app/)

## アプリのライセンス
各開発プラットフォームには、使用する[コンテンツやサービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/services/)、開発に使用する [API や SDK](https://developers.arcgis.com/documentation/mapping-apis-and-services/apis-and-sdks/) に応じて、特定のライセンス要件があります。開発者の仕事は、[Esri の法的契約、ライセンス、および輸出に関する文書](https://www.esri.com/en-us/legal/overview)を確認し、アプリケーションがすべてのライセンス要件を正しく順守することです。アプリケーションのライセンス方法に関するよくある質問については、ライセンスに関する [FAQ](https://developers.arcgis.com/faq/#licensing])をご参照ください。

{{% notice tip %}}

ArcGIS Platform を介した認証およびライセンスは、アプリケーションを商用利用するための認証ではありません。ArcGIS Online education サブスクリプションを使用している場合など、[製品の利用規約](https://www.esri.com/en-us/legal/terms/product-specific-scope-of-use)には、ライセンス機能の条件が記載されています。

{{% /notice %}}

プラットフォーム固有のライセンス情報

- [ArcGIS API for JavaScript](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-your-app/#arcgis-api-for-javascript)
- [ArcGIS Runtime アプリケーション](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-your-app/#arcgis-runtime-apps)
- [オープン ソース アプリケーション](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-your-app/#open-source-applications)
- [アプリ テンプレートおよびビルダー](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-your-app/#app-templates-and-builders)
- [エクステンションおよびプラグイン](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-your-app/#extensions-and-plugins)

## ArcGIS API for JavaScript

ArcGIS API for JavaScript を使用して作成されたアプリは、以下のいずれかを使用している場合、ライセンスが取得されます。

- [API キー](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/api-keys/)は永久的なトークンであり、アプリケーションがすぐに使用できるサービスや、ArcGIS Developer アカウントがあればプライベート コンテンツへのアクセスを許可します。

- [ArcGIS Identity](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/arcgis-identity/) は、既存の ArcGIS ユーザのアカウントに認可されたプライベート コンテンツおよびサービスへのアクセスをアプリケーションに付与する一時的なトークンです。ユーザーまたはユーザーの組織が ArcGIS Online サブスクリプションを購入した場合は、アプリを本番環境で使用するライセンスを取得するために追加の手順を踏む必要はありません。ただし、アプリケーションが使用可能なプリペイド クレジットをすべて使用する場合は、ArcGIS Online サブスクリプションの[追加クレジット](https://www.esri.com/ja-jp/arcgis/products/credits/overview?rmedium=www_esri_com_EtoF&rsource=/en-us/arcgis/products/arcgis-online/pricing/credits)を購入するか、API キーを使用してアプリケーションでロケーション サービスにアクセスします。

- [アプリケーション認証情報](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/application-credentials/)は、OAuth 2.0 で生成される一時的なトークンで、すぐに使えるサービスへのアクセスをアプリケーションに許可するものです。

{{% notice note %}}

サブスクリプションやアカウントの種類、アプリケーションが使用するコンテンツやサービス、製品の API/SDK に基づくアプリケーションの特定のライセンス制限については、[製品の利用規約](https://www.esri.com/en-us/legal/terms/product-specific-scope-of-use)をご参照ください。

{{% /notice %}}

## ArcGIS Runtime 

ArcGIS Runtime を使用して構築されたアプリケーションは、ライセンスキーによる追加の配布ライセンスが必要です。必要なライセンスの種類は、アプリケーションで使用される機能によって異なります。

  * Lite：検索機能やルート機能を備えたマップやデータを表示。ArcGIS Runtime Lite のライセンスキーは、ArcGIS Developer Subscription に含まれています。
  * Basic：ArcGIS でデータを作成・編集機能。
  * Standard：ローカル データ ファイルまたはファイル ジオデータベースフォーマットの使用。
  * Advanced：ArcGIS Enterprise ジオデータベースを直接使用する高度なアプリケーション。

ArcGIS Runtime のドキュメントには、ライセンス レベルの詳細や、無料の Lite ライセンスなど、アプリに必要なライセンスを取得する方法に関する情報が記載されています。

  * [ArcGIS Runtime SDK for Android](https://developers.arcgis.com/android/license-and-deployment/)
  * [ArcGIS Runtime SDK for iOS](https://developers.arcgis.com/ios/license-and-deployment/)
  * [ArcGIS Runtime SDK for .NET](https://developers.arcgis.com/net/license-and-deployment/)
  * [ArcGIS Runtime SDK for Java](https://developers.arcgis.com/java/license-and-deployment/)*
  * [ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/qt/license-and-deployment/)*

*国内未サポート

また、ArcGIS Runtime のライセンスについては [ESRIジャパンの製品ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/details/license/)もご参照ください。

{{% notice note %}}

サブスクリプションやアカウントの種類、アプリケーションが使用するコンテンツやサービス、製品の API/SDK に基づくアプリケーションの特定のライセンス制限については、[製品の利用規約](https://www.esri.com/en-us/legal/terms/product-specific-scope-of-use)をご参照ください。

{{% /notice %}}

## オープン ソース アプリケーション
オープン ソース アプリケーションで構築されたアプリケーションは、ArcGIS Developer サブスクリプションを使用して開発する場合はライセンスが付与されますが、アプリケーションを開発する製品の法的要件も遵守する必要があります。オープン ソース アプリケーションで ArcGIS Online サブスクリプションを使用することはできません。

- [Esri Leaflet](https://github.com/esri/esri-leaflet#terms)
- [Mapbox GL JS](https://www.mapbox.com/legal/tos/)
- [OpenLayers](https://tldrlegal.com/license/bsd-2-clause-license-(freebsd))

{{% notice note %}}

サブスクリプションやアカウントの種類、アプリケーションが使用するコンテンツやサービス、使用した製品のAPI/SDKに基づくアプリケーションの特定のライセンス制限については、[製品の利用規約](https://www.esri.com/en-us/legal/terms/product-specific-scope-of-use)をご覧ください。

{{% /notice %}}

## アプリテンプレートとビルダー
すべての [ArcGIS アプリテンプレートおよびビルダー](https://developers.arcgis.com/documentation/app-templates-and-builders/)には、テクノロジーへのアクセスによるライセンスが組み込まれています。Builder プラン以上で ArcGIS Online 組織 サブスクリプションまたは ArcGIS Developer Subscription を維持する必要があります。

## 拡張機能とプラグイン
ArcGIS Pro や ArcGIS Enterprise などの ArcGIS 製品のエクステンションまたはプラグインを開発する場合、エクステンションのライセンスを取得するために追加の手順を踏む必要はありません。ただし、プラグインやエクステンションのユーザーは、プラグインやエクステンションを使用するために商用ライセンスが必要になる場合があります。
詳細については、[ArcGIS アドインと自動化](https://developers.arcgis.com/documentation/arcgis-add-ins-and-automation/)をご参照ください。

## ArcGIS Marketplace
ArcGIS Marketplace に掲載されている製品は、組織での ArcGIS Online および ArcGIS Platform の使用を強化するために作られています。ArcGIS Online 組織の指定ユーザーは、[ArcGIS Marketplace](https://marketplace.arcgis.com/) の製品を使用できます。ライセンスの詳細については、[購入したアイテムの使用および共有](https://www.esri.com/ja-jp/arcgis-marketplace/help/use-share-purchases) をご覧ください。

## 特別な注意事項
[利用規約](https://www.esri.com/en-us/legal/terms/full-master-agreement/mla-e204-e300-english)に記載されている特別な使用例には、特別な対応が必要な場合があります。このような場合には、具体的なライセンス契約についてご相談いただく必要があります。

  * リアルタイムのナビゲーション ガイダンス
  * 複数の車両を同期させたルート解析
  * 同期したルートの最適化
  * 資産・車両管理
  * 自動運転車両の制御

{{% notice note %}}

有効な ArcGIS Developer サブスクリプションを維持していれば、ArcGIS Online または ArcGIS Enterprise を使用せずに ArcGIS client APIs を使用することができます。

{{% /notice %}}