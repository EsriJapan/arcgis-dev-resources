+++
title = "アプリのライセンス"
description = "作成したアプリケーションを本番環境で運用するために必要となる ArcGIS テクノロジーを使用する際のライセンスについて紹介します。"
Weight=2
aliases = ["/license-your-app/"]
+++

出典：ArcGIS Developers - Licensing - [License your app](https://developers.arcgis.com/documentation/mapping-apis-and-services/licensing/license-your-app/)

## アプリのライセンス
作成したアプリケーションを本番環境にデプロイする際には、ArcGIS テクノロジーを使用するライセンスを検討する必要があります。アプリケーションには、使用する[コンテンツとサービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/services/)、およびアプリケーションが開発された [API や SDK](https://developers.arcgis.com/documentation/mapping-apis-and-services/apis-and-sdks/) に応じたライセンス要件があります。詳細については、[利用規約](https://www.esri.com/en-us/legal/terms/full-master-agreement/mla-e204-e300-english)や [FAQ](https://developers.arcgis.com/faq/) をご参照ください。

## ArcGIS API for JavaScript

ArcGIS API for JavaScript を使用して作成されたアプリは、以下のいずれかを使用している場合、ライセンスが取得されます。

* API キー：API キーは、ArcGIS ロケーション サービスの使用を許可するものです。API キーを使用したアプリは、[ArcGIS またはオープン ソースのクライアント API](https://developers.arcgis.com/documentation/mapping-apis-and-services/apis-and-sdks/) を使用して開発およびデプロイすることができます。[ダッシュボード](https://developers.arcgis.com/api-keys/)で API キーの使用状況を管理および追跡します。API キーの詳細については、開発者ガイドの[セキュリティと認証](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/api-keys/)をご参照ください。
* ArcGIS Identity (指定ユーザー ログイン)：ユーザーまたはユーザーの組織が ArcGIS Online サブスクリプションを購入した場合は、アプリを本番環境で使用するライセンスを取得するために追加の手順を踏む必要はありません。ただし、アプリケーションが使用可能なプリペイド クレジットをすべて使用する場合は、ArcGIS Online サブスクリプションの[追加クレジット](https://www.esri.com/ja-jp/arcgis/products/credits/overview?rmedium=www_esri_com_EtoF&rsource=/en-us/arcgis/products/arcgis-online/pricing/credits)を購入するか、API キーを使用してアプリケーションでロケーション サービスにアクセスします。

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

## アプリテンプレートとビルダー
すべての [ArcGIS アプリテンプレートおよびビルダー](https://developers.arcgis.com/documentation/app-templates-and-builders/)には、テクノロジーへのアクセスによるライセンスが組み込まれています。Builder プラン以上で ArcGIS Online 組織 サブスクリプションまたは ArcGIS Developer Subscription を維持する必要があります。

## 拡張機能とプラグイン
ArcGIS Pro や ArcGIS Enterprise などの ArcGIS 製品のエクステンションまたはプラグインを開発する場合、エクステンションのライセンスを取得するために追加の手順を踏む必要はありません。ただし、プラグインやエクステンションのユーザーは、プラグインやエクステンションを使用するために商用ライセンスが必要になる場合があります。
詳細については、[ArcGIS アドインと自動化](https://developers.arcgis.com/documentation/arcgis-add-ins-and-automation/)をご参照ください。

## ArcGIS Marketplace
ArcGIS Marketplace に掲載されている製品は、組織での ArcGIS Online および ArcGIS Platform の使用を強化するために作られています。ArcGIS Online 組織の指定ユーザーは、ArcGIS Marketplace の製品を使用できます。ライセンスの詳細については、[購入したアイテムの使用および共有](https://www.esri.com/ja-jp/arcgis-marketplace/help/use-share-purchases) をご覧ください。

## 特別な注意事項
[利用規約](https://www.esri.com/en-us/legal/terms/full-master-agreement/mla-e204-e300-english)に記載されている特別な使用例には、特別な対応が必要な場合があります。このような場合には、具体的なライセンス契約についてご相談いただく必要があります。

  * リアルタイムのナビゲーション ガイダンス
  * 複数の車両を同期させたルート解析
  * 同期したルートの最適化
  * 資産・車両管理
  * 自動運転車両の制御

{{% notice note %}}

ArcGIS クライアント API を使用していて、ArcGIS Online または ArcGIS Enterprise を使用していない場合でも、有効な ArcGIS Developer Subscription を維持していれば、追加費用なしで API テクノロジーを使用することができます。
ArcGIS 組織の開発者が商用アプリをデプロイする場合、アプリは従量課金制サービスのエンドポイントを使用し、API キーを使用して pay as you go をオンにする必要があります。

{{% /notice %}}