+++
title = "デプロイの紹介"
description = "開発したアプリをデプロイするために必要なライセンスや利用規約などについて紹介します。"
Weight=6
aliases = ["/deployment/"]
+++

出典：ArcGIS Location Platform - [Deployment](https://location.arcgis.com/help/deployment/)

アプリケーションをデプロイするためのライセンスと配布の要件は、開発するアプリケーションのタイプと使用する [API](https://developers.arcgis.com/documentation/#sdks-and-apis) によって決まります。これには、Web、ネイティブ、およびサービスベースのアプリケーションが含まれます。このヘルプ トピックでは、ソリューションをデプロイする前に知っておく必要がある情報について説明します。

{{% notice note %}}

アプリケーションをデプロイする前に、必ず[利用規約](https://location.arcgis.com/help/terms-of-use/)を確認してください。
使用条件に従わない特別な導入要件がある場合は[お問い合わせ](https://www.esrij.com/form/inquiry/)ください。
<!-- 使用条件に従わない特別な導入要件がある場合は、[Esri の営業担当](https://www.esri.com/en-us/contact#c=us&t=1)までお問い合わせください。-->

{{% /notice %}}

すべての ArcGIS Location Platform アカウントには、サブスクリプション プランが関連付けられています。各サブスクリプションには、[無料枠](https://location.arcgis.com/pricing/)のロケーション サービスが付属しており、従量課金は無効になっています。このアカウントを使用して、[API キー](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/)または [OAuth 2.0](https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/oauth-credentials-user/) のいずれかを使用してロケーション サービスにアクセスするアプリケーションを構築できますが、利用できるのは無料レベルの使用量でアクセスできるロケーション サービスのみです。すべてのロケーション サービスにアクセスするには、従量課金を有効にする必要があります。利用可能な機能の一覧については、以下の表をご確認ください。

アプリケーションが特定の課金サイクルで無料枠を超えて使用した場合、従量課金を有効にしない限り、サービスへのアクセスは無効になります。従量課金は、アカウントのサブスクリプションの[課金](https://location.arcgis.com/billing/payments/)設定で構成することができます。従量課金と課金について詳しくは[こちら](https://location.arcgis.com/help/billing/)をご覧ください。

すべてのロケーション サービスのトランザクションは米ドルで課金されます。サービスの利用料については、[価格](https://www.esrij.com/products/arcgis-location-platform/license/)をご確認ください。

{{% notice tip %}}

アプリケーションを導入する前に、従量課金を有効にして、中断のないサービス アクセスを確保することをお勧めします。

{{% /notice %}}

|  | 無料枠 | 従量課金 |
| ---- | ---- | ---- |
| [ベースマップ](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemap-layers/)| 〇 | 〇 |
| [プレイス](https://developers.arcgis.com/documentation/mapping-and-location-services/place-finding/) | 〇 | 〇 |
| [住所検索 (データ保存しない)](https://developers.arcgis.com/documentation/mapping-and-location-services/geocoding/) | 〇 | 〇 |
| [住所検索 (データ保存する)](https://developers.arcgis.com/documentation/mapping-and-location-services/geocoding/#storage-parameter) | × | 〇 |
| [ルート検索](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/route-and-directions/) | 〇 | 〇 |
| [ルート検索（経由地の最適化）](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/optimized-routing/) | × | 〇 |
| [到達圏](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/service-areas/) | 〇 | 〇 |
| [配車ルート解析](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/fleet-routing/) | × | 〇 |
| [最寄りの検索](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/closest-facility-routing/) | × | 〇 |
| [ラスト マイル デリバリー](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/last-mile-delivery/) | × | 〇 |
| [ロケーション-アロケーション](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/location-allocation/) | × | 〇 |
| [移動コスト マトリックス](https://developers.arcgis.com/documentation/mapping-and-location-services/routing-and-directions/travel-cost-matrix/) | × | 〇 |
| [インフォグラフィックス](https://developers.arcgis.com/documentation/mapping-and-location-services/data-enrichment/) | × | 〇 |
| [レポート作成](https://developers.arcgis.com/documentation/mapping-and-location-services/data-enrichment/) | × | 〇 |
| [標高サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/elevation/) | 〇 | 〇 |
| [空間解析](https://developers.arcgis.com/rest/analysis/api-reference/getting-started.htm) | × | 〇 |
| [タイル、ファイル、アタッチメントの保存 (250 MB)](https://location.arcgis.com/help/billing/#storage) | 〇 | 〇 |
| [フィーチャの保存 (250 MB)](https://developers.arcgis.com/documentation/portal-and-data-services/data-services/feature-services/types-of-datasets/) | 〇 | 〇 |
| [フィーチャのクエリ (転送量、125 MB)](https://developers.arcgis.com/documentation/portal-and-data-services/data-services/feature-services/types-of-datasets/) | 〇 | 〇 |
| [フィーチャの編集 (転送量、125 MB)](https://developers.arcgis.com/documentation/portal-and-data-services/data-services/feature-services/types-of-datasets/) | 〇 | 〇 |

〇：対応　△：一部対応　×：未対応

## Web アプリケーション

Web アプリケーションは、[ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/)、[オープン ソース](https://developers.arcgis.com/documentation/#sdks-and-apis)、またはその他の [API](https://developers.arcgis.com/documentation/#sdks-and-apis) を使用して構築します。

Web アプリケーションを構築してデプロイするには、以下が必要です。

1. ArcGIS Location Platform アカウント
2. [利用規約](https://location.arcgis.com/help/terms-of-use/)への同意


<table>
<tbody><tr>
<td>          

#### アプリケーション例

- クライアントサイド、静的、単一 Web ページアプリケーション
- フロントエンドとバックエンドの技術を使用した動的な Web アプリケーション
- プログレッシブ Web アプリ (PWA)
- リッチインターネットアプリ (RIA、Web アプリをカプセル化したデスクトップ、または、モバイルのハイブリッドアプリ)
- ブラウザと IDE の拡張機能

注意：ここに掲載されていない種類の Web プリケーションも開発できる可能性があります。
</td>
</tr></tbody>
</table>

## ネイティブ アプリケーション
ネイティブ アプリケーションは、[ArcGIS Maps SDK for Native Apps](https://developers.arcgis.com/documentation/#sdks-and-apis) のいずれかを使用して構築され、デスクトップ、モバイル デバイス、または、組み込みシステムにデプロイされます。ネイティブ アプリケーションは、Microsoft Windows Installer（.msi）などの様々なインストーラー テクノロジを使用するか、Google Play ストア、Apple App Store、Microsoft Store、または [ArcGIS Marketplace](http://doc.arcgis.com/en/marketplace/provider/become-a-provider.htm) で展開できます。

ネイティブ アプリケーションを構築してデプロイするには、以下が必要です。

1. ArcGIS Location Platform アカウント
2. [利用規約](https://location.arcgis.com/help/terms-of-use/)への同意
3. ArcGIS Runtime ライセンス文字列、または、ユーザー認証の実装。これにより、アプリケーションの「ロックが解除」され、マップおよびコンソール ログに表示される「Licensed for Developer Use Only」のウォーターマーク (透かし)が削除されます。

ArcGIS Runtime ライセンス文字列の取得方法については、以下の「License and deployment」のセクションをご確認ください。

- [ArcGIS Maps SDK for .NET](https://developers.arcgis.com/net/license-and-deployment/)
- [ArcGIS Maps SDK for Swift](https://developers.arcgis.com/swift/license-and-deployment/)
- [ArcGIS Maps SDK for Kotlin](https://developers.arcgis.com/kotlin/license-and-deployment/)
- [ArcGIS Maps SDK for Java](https://developers.arcgis.com/java/license-and-deployment/)
- [ArcGIS Maps SDK for Qt](https://developers.arcgis.com/qt/license-and-deployment/)

{{% notice note %}}

Runtime ライセンス文字列は、ArcGIS Runtime SDKs 100.x および ArcGIS Maps SDKs for Native Apps 200.x で使用されます。ネイティブ アプリケーションが ArcGIS ロケーション サービスを使用する場合でも、ロケーション サービスにアクセスするには有効な[アクセス トークン](https://developers.arcgis.com/documentation/security-and-authentication/)が必要です。

{{% /notice %}}

<table>
<tbody><tr>
<td>

#### アプリケーション例

- スマートフォン、または、タブレット用のモバイルアプリ
- デスクトップ アプリ (Linux、macOS、Windows)

<!-- 
- スマートデバイス (スマートウォッチ、バンド、Apple TV)
- 組み込み（カスタム ハードウェア デバイス、Arduino、Raspberry など）
-->

注：ここに掲載されていない種類のネイティブ アプリケーションも開発できる可能性があります。
</td>
</tr></tbody>
</table>

## ゲームエンジン アプリケーション
ゲームエンジン アプリケーションは、[ArcGIS Maps SDKs](https://developers.arcgis.com/documentation/#sdks-and-apis) のいずれかを使用して構築され、サポート対象のデバイス、オペレーティング システム、または組み込みシステムにデプロイされます。

ゲームエンジン アプリケーションを構築してデプロイするには、以下が必要です。

1. ArcGIS Location Platform アカウント
2. [利用規約](https://location.arcgis.com/help/terms-of-use/)への同意
3. ArcGIS Maps SDK for Unity ガイドの[デプロイメント](https://developers.arcgis.com/unity/deployment/) もしくは、ArcGIS Maps SDK for Unreal Engine ガイドの[デプロイメント](https://developers.arcgis.com/unreal-engine/deployment/)を参照

{{% notice note %}}

ゲームエンジン アプリケーションが ArcGIS のロケーション サービスを使用する場合、ロケーション サービスにアクセスするには有効な[アクセス トークン](https://developers.arcgis.com/documentation/security-and-authentication/)が必要です。

{{% /notice %}}

<table>
<tbody><tr>
<td>

#### アプリケーション例

- Android、または iOS の携帯電話、または、タブレット用アプリ
- スタンドアロン Windows プラットフォーム、または、ユニバーサル Windows アプリケーション
- macOS アプリケーション
- XR プラットフォーム向け AR/VR アプリケーション

注：ここに掲載されていない種類のゲームエンジン アプリケーションも開発できる可能性があります。

</td>
</tr></tbody>
</table>

## サービス ベース アプリケーション
サービス ベースのアプリケーションは、ArcGIS のロケーション サービスを使用するもので、エンド ユーザー インタフェースを持たない場合があります。ロケーション サービス、API、ライブラリ、または、その他のバックエンド機能を使用できます。サービス ベースのアプリケーションは、Esri 以外のクライアント側 API で構築されたサービスやプロセス、Web フック、その他のスケジュールされたプロセスなど、ユーザーとのインタラクションによってトリガーされます。

通常、これらのアプリケーションは、[REST API](https://developers.arcgis.com/rest/) サービスのエンドポイント、Node.js アプリ内の [ArcGIS REST JS](https://developers.arcgis.com/arcgis-rest-js/)、または [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) のモジュール、または [ArcGIS API for Python](https://developers.arcgis.com/python/) を使用して構築されます。

サービス ベース アプリケーションを構築してデプロイするには、以下が必要です。

1. ArcGIS Location Platform アカウント
2. [利用規約](https://location.arcgis.com/help/terms-of-use/)への同意

{{% notice note %}}

ArcGIS Maps SDKs for Native Apps は、サービスベースのアプリケーションの構築には使用できません。

{{% /notice %}}

<table>
<tbody><tr>
<td>

#### アプリケーション例

- Web サービス
- REST アプリケーション
- スクリプト アプリケーション
- 内部ライブラリ
- 開発者向け API
- M2M (Machine to Machine)

注：ここに掲載されていない種類のサービスベースのアプリケーションも開発できる可能性があります。

</td>
</tr></tbody>
</table>

## ベースマップの帰属

[ベースマップ スタイル サービス](https://developers.arcgis.com/documentation/mapping-and-location-services/mapping/basemap-layers/)を使用するマッピング アプリケーションを構築、およびデプロイする場合は、ベースマップの帰属表示が必要です。[ベースマップの帰属](https://tech-support.esrij.com/arcgis/article/web/knowledge3172.html)については、こちらをご確認ください。

## 3rd party データ

多くの組織は、ArcGIS で独自のコンテンツやデータをホストし、[ArcGIS Online](https://www.arcgis.com/)、[ArcGIS Hub](https://hub.arcgis.com/)、または [ArcGIS Living Atlas of the World](https://livingatlas.arcgis.com/en/home/) を通じて利用できるようにしています。これらのデータをアプリケーションで使用する前に、利用規約を準拠する必要があり、組織によって定義されている場合は、帰属表示を行う必要があります。利用規約は通常、各データ プロバイダによって異なります。

## デプロイ サポート機能
アプリケーションに実装されている ArcGIS サービスに基づくデプロイの種類については、以下の表をご確認ください。

|  | ArcGIS Location Platform サブスクリプション |
| ---- | ---- |
| [プライベート アプリケーションの構築とデプロイ](https://developers.arcgis.com/documentation/mapping-and-location-services/faq/)| 〇 |
| [公開アプリケーションの構築とデプロイ](https://developers.arcgis.com/documentation/mapping-and-location-services/place-finding/) | 〇 |
| [無料 (非商用) アプリケーションの構築とデプロイ](https://developers.arcgis.com/documentation/mapping-and-location-services/faq/) | 〇 |
| [商用アプリケーションの構築とデプロイ](https://developers.arcgis.com/documentation/mapping-and-location-services/faq/) | 〇 |
| [ArcGIS およびオープン ソース API を使用した Web アプリケーションの構築](https://developers.arcgis.com/documentation/#sdks-and-apis) | 〇 |
| [ArcGIS およびオープン ソース API を使用したネイティブ アプリケーションの構築](https://developers.arcgis.com/documentation/#sdks-and-apis) | 〇 |
| [ArcGIS およびオープン ソース API を使用したサービス ベースのアプリケーションの構築](https://developers.arcgis.com/documentation/#sdks-and-apis) | 〇 |
| [ArcGIS のプライベート コンテンツにアクセスするアプリケーションの構築とデプロイ](https://developers.arcgis.com/documentation/portal-and-data-services/portal-service/) | 〇 |
| [Living Atlas のオープン データを使用するアプリケーションの構築とデプロイ](https://developers.arcgis.com/documentation/portal-and-data-services/portal-service/) | △<sup>1</sup> |
| [Living Atlas の加入者データを使用するアプリケーションの構築とデプロイ](https://developers.arcgis.com/documentation/portal-and-data-services/portal-service/) | △<sup>1</sup> |
| [アプリケーション ストアを通じたアプリケーションの配布	](https://developers.arcgis.com/documentation/mapping-and-location-services/faq/) | 〇 |
| [ArcGIS Marketplace を通じたアプリケーションの配布](https://www.esri.com/en-us/arcgis-marketplace/overview) | △<sup>2</sup> |
| [オフライン機能を備えたアプリケーションの配布](https://developers.arcgis.com/documentation/offline-mapping-apps/) | △<sup>1</sup> |

〇：対応　△：一部対応　×：未サポート

<!-- 1. Esri 営業にお問い合わせください。-->
1. [お問い合わせ](https://www.esrij.com/form/inquiry/)ください。
2. Esri パートナーとしてサインアップする必要があります。
