+++
title = "セキュリティと認証"
description = "一般に共有されていないリソースにアクセスする必要がある場合、アプリケーション、またはアプリケーションのユーザは、資格のある機関 (ArcGIS Online、ArcGIS Enterprise、またはその他の互換性のあるセキュリティで保護されたサービスなどの ArcGIS プラットフォーム) との認証を行う必要があります。ArcGIS でのセキュリティの方法論や認証パターンなどについて紹介します。"
Weight=3
aliases = ["/security-and-authentication/"]
+++

## ArcGIS での認証
セキュリティとは、ネットワーク上で利用可能なリソースを保護することですが、許可されたアクセスのみを目的としています。インターネットはそのようなネットワークの 1 つであるが、VPN やイントラネットも可能である。一般に共有されていないリソースにアクセスする必要がある場合、アプリケーション、またはアプリケーションのユーザは、資格のある機関 (ArcGIS Online、ArcGIS Enterprise、またはその他の互換性のあるセキュリティで保護されたサービスなどの ArcGIS プラットフォーム) との認証を行う必要があります。

アプリケーションが以下の操作を行うとする場合は、認証が必要になります。

- ユーザのプライベート コンテンツへのアクセス
- コンテンツの作成、編集、公開
- プレミアム コンテンツおよびサービスへのアクセス

[プレミアム コンテンツ](http://www.esri.com/software/arcgis/arcgisonline/credits)およびサービスには、クレジット ベース モデルで動作するサービスの ArcGIS プラットフォームが含まれます。ユーザーは、ArcGIS Online 組織のためにクレジットを購入、またはその他の方法で取得します。アプリケーションで対象となるサービスを使用すると、クレジットが消費されます。消費されるクレジットの数は、サービスによって異なります。クレジットが必要なサービスの詳細およびクレジットが必要なサービスについては、[クレジットの概要](http://www.esri.com/software/arcgis/arcgisonline/credits)を参照してください。クレジットには実費がかかり、コンテンツの出版および編集はビジネスにとって重要であるため、Esri はこれらの貴重なリソースを保護するためのサービス、およびメカニズムを提供しています。

##### 実装:
>> セキュリティ手法や ArcGIS 認証パターンに精通している場合は、実装に固有の詳細を参照してください。  
>> [Android](https://developers.arcgis.com/android/latest/guide/access-the-arcgis-platform.htm)　　　　[iOS](https://developers.arcgis.com/ios/latest/swift/guide/access-the-arcgis-platform.htm)　　　[Java](https://developers.arcgis.com/java/latest/guide/access-the-arcgis-platform.htm)  
>> [JavaScript](https://developers.arcgis.com/javascript/3/jshelp/ags_secureservices.html)　　[.NET](https://developers.arcgis.com/net/latest/wpf/guide/use-the-authentication-manager.htm)　　　[Qt](https://developers.arcgis.com/qt/latest/qml/guide/access-the-arcgis-platform.htm)  
>> [Esri Leaflet](http://esri.github.io/esri-leaflet/api-reference/services/service.html)　　[REST](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/accessing-arcgis-online-services/)    


## セキュリティの方法論
ArcGIS プラットフォームは、いくつかのセキュリティ方法をサポートしています。ArcGIS Runtime を使用する場合でも、他のテクノロジを使用する場合でも、アプリを構築する際には、ユーザに代わってセキュリティ保護されたリソースにアクセスするために、少なくとも 1 つの認証方法を実装する必要があります。セキュアなリソースへのアクセスを得るための方法には、以下のようなものがあります。

- OAuth 2.0 ([OAuth](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/what-is-oauth-2))：ArcGIS プラットフォームがユーザの真正性を判断し、トークンがクライアント アプリに提供されます。このトークンは、その後のセキュア リソースへのリクエストで使用されます。OAuth 2.0 は、ユーザーのサイン インに使用することを推奨する方法です。[ArcGIS Online](https://developers.arcgis.com/rest/users-groups-and-items/authorize.htm) および [ArcGIS Enterprise](https://developers.arcgis.com/rest/users-groups-and-items/authorize.htm) バージョン 10.3 以降で利用可能です。

- Token-based: アプリは、ユーザーに有効なユーザー名とパスワードを提供します。応答では、認証済みリソースのポータル上のセキュアなコンテンツに対する要求に含まれるトークンを受け取ります。[ArcGIS Online](https://developers.arcgis.com/rest/users-groups-and-items/generate-token.htm) および [ArcGIS Enterprise](http://www.esri.com/software/arcgis/arcgisserver) で使用できます。

- Public Key Infrastructure (PKI)：公開および秘密のデジタル キーは、安全ではないネットワーク上での認証および安全な通信をサポートします。PKI では、ユーザ、組織、またはソフトウェア エージェントの ID は、一対のデジタル キーによって表されます。PKI のユーザは、デジタル鍵を提示することで自分自身を認証する必要があり、ユーザ名とパスワードは決して発行されません。PKI では、公開鍵暗号と呼ばれる数学的手法を使用して、ユーザまたは組織を表すデジタル キーを生成します。

>> ArcGIS Enterprise は、[ArcGIS Web Adaptors](http://server.arcgis.com/en/portal/latest/administer/windows/using-windows-active-directory-and-pki-to-secure-access-to-your-portal.htm) を使用して Web サーバで PKI ソリューションを活用します。ArcGIS Enterprise 上でリソースに対するリクエストが行われると、Web サーバは、提供されたクライアント証明書を検証することでユーザを認証します。リクエスト（ユーザ名とともに）は、Web Adaptor を介して ArcGIS Enterprise に転送されます。ArcGIS Enterprise は、指定されたユーザが要求されたリソースにアクセスできることを確認した後、適切な応答を送信します。

- HTTP/Windows Authentication (HTTP basic, HTTP digest or Integrated Windows Authentication (IWA))：リソースは、サービスに設定されたユーザ名とパスワードによって保護され、ブラウザのポップアップまたはセッション クッキーによって要求されます。IWA を使用する場合、ログインは Microsoft Windows Active Directory を通じて管理されます。ユーザーはポータル Web サイトにサイン インしたり、ポータル Web サイトから出たりするのではなく、Web サイトを開くと、Windows にログインするために使用したのと同じアカウントを使用してサイン インします。詳細については、[ポータルと Windows 認証の統合](http://server.arcgis.com/en/portal/latest/administer/windows/use-integrated-windows-authentication-with-your-portal.htm)を参照してください。


通常、サーバー管理者にも相談して、ポータルで使用する認証の種類と、ポータルにアクセスするために必要な方法を決定します。

##### 注意:
>> 別の認証方法の要件がない限り、アプリケーションは OAuth 2.0 を使用することをお勧めします。


## 認証パターン
サポートされている認証方法の中には、アプリ開発者であるユーザーと、アプリの個々のユーザーの 2 つのクラスがあります。公開したいユーザ エクスペリエンスとアプリに割り当てるリソース アクセス権に応じて、ArcGIS Runtime では 2 つの認証パターンが用意されています。

- 指定ユーザ ログイン
- アプリ ログイン


### 指定ユーザー ログイン
指定ユーザ ログイン パターンでは、ArcGIS Online のユーザは、アプリに対してコンテンツやサービスにアクセスすることを承認します。このシナリオでは、アプリがユーザに ArcGIS Online のユーザ名とパスワードの入力を求め、その資格情報を使用してコンテンツにアクセスします。このモデルを使用すると、ユーザーは[プレミアム コンテンツ](http://www.esri.com/software/arcgis/arcgisonline/credits)のために自身のクレジットを消費し、自身がアクセス権を持っているリソースにアクセスすることができます。

指名ユーザー ログイン パターンでは、アプリは、ログインしたユーザーが所有する、またはそのユーザーの組織が所有するプライベート コンテンツにアクセスできます。アプリは、ジオコーディング、ルーティング、人口統計データなどのプレミアム コンテンツにもアクセスできます。

指定ユーザーのログインで取得したトークンで発生した使用量は、そのユーザーの組織に請求されます。アプリは、ログインしたユーザーがアクセスできるサービスにアクセスできます。

ユーザーがアプリを承認してアクセストークンを取得すると、アプリは、そのユーザーに許可されているすべての操作を行うことができます。

- ユーザーに代わって、プレミアムな ArcGIS Online コンテンツや[ジオコーディング](https://developers.arcgis.com/features/geocoding)、[ルーティング](https://developers.arcgis.com/features/directions)などのサービスにアクセスします。
- そのユーザーのコンテンツを作成、更新、削除します。
- 組織内の他のユーザーとコンテンツを共有します。
- ユーザーと共有しているコンテンツにアクセスします。

##### Tip:
> ArcGIS Enterprise または ArcGIS Online の組織アカウントを使用して認証を行うと、オフライン編集などの機能を使用するために ArcGIS Runtime SDK アプリのライセンスを取得する方法が提供されます。詳細については、[ArcGIS Runtime アプリのライセンス取得](https://developers.arcgis.com/pricing/licensing/)を参照してください。


### アプリ ログイン
アプリ ログインを使用して、組織のコンテンツや[プレミアム コンテンツ、サービス](http://www.esri.com/software/arcgis/arcgisonline/credits)へのアクセスをユーザーに提供します。このシナリオでは、アプリはアプリ内にハードコードされた資格情報を使用してコンテンツにアクセスします（この潜在的なセキュリティリスクに対処するには、以下の[プロキシ サービスの使用](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#usingaproxyservice)を参照してください）。これにより、ユーザーが許可されていないコンテンツへのアクセスが可能になります。ユーザーはアプリの認証情報でログインしているため、ログインを求められることはありません。このモデルを使用すると、ユーザーはあなたがアクセスできるすべてのリソースにアクセスでき、プレミアム コンテンツのクレジットを消費します。

アプリ ログインは、ユーザが ArcGIS Online のユーザではないアプリや、ユーザ ログインを必要としないアプリ向けに設計されています。アプリ ストア、アドホック配信、または Web アプリを介してアプリを配信するのに最適です。ただし、アプリがコストが発生するサービスを利用する場合は、そのコストを支払う必要があります。アプリ ログインで取得したトークンで発生した利用は、アカウントに課金されます。

アプリ ログインのパターンでは、ユーザーは、ArcGIS Online のプレミアム コンテンツや、ルーティング、ジオコーディング、人口統計データなどのサービスにアクセスすることができます。ArcGIS for Developers または ArcGIS Online で[アプリケーションを登録](https://developers.arcgis.com/applications/new/)します。その後、アプリケーションの資格情報を使用して、API を利用してプレミアム サービスにアクセスします。

アプリのログインは、これらのサービスのいずれかにアクセスするために使用できます。

- パブリック コンテンツ（ベースマップ、公開されているレイヤー）
- [ジオコーディング](https://developers.arcgis.com/features/geocoding)
- [ルート解析機能](https://developers.arcgis.com/features/directions)
- 人口統計データ ([GeoEnrichment](https://developers.arcgis.com/features/geo-enrichment))
- サブスクリプションが必要となる [Esri のプレミアム マップとレイヤー](http://www.arcgis.com/home/search.html?q=owner:esri)
- [標高解析](https://developers.arcgis.com/rest/elevation)


アプリのログインを使用すると、[一定の制限](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/limitations-of-application-authentication)があります。


### 指定ユーザー ログイン vs アプリ ログイン
ここでは、両方の認証パターンを比較し、トークンのやり取りに基づいています。利用ニーズに最も適した認証パターンを選択するために、以下の質問に答え、このセクションの機能表を使用して、アプリに含める機能を決定してください。

- ユーザは ArcGIS Online ユーザでもありますか?
- ユーザにプレミアム コンテンツを有料で利用してもらいたいですか?
- ユーザに非公開のコンテンツにアクセスさせますか?
- ログイン フォームを表示しますか？

上記の質問のいずれかに「はい」と答えた場合は、指定ユーザ ログインを実装することをお勧めします。

##### 注意:
>> ArcGIS Marketplace 用のアプリをオーサリングする場合は、アプリに指定ユーザ ログインを使用する必要があります。

ユーザが ArcGIS Online のユーザではない場合、またはユーザにログインを要求したくない場合、またはルーティング、ジオコーディング、人口統計データなどのプレミアム サービスのコストを負担したい場合は、アプリ ログインを選択してください。


### 機能一覧表
|機能|アプリ ログイン [3]|指定ユーザー ログイン [1]|
|:---|:---|:---|
|[ジオコーディング](https://developers.arcgis.com/features/geocoding)|✓|✓ [2]|
|[ルーティング](https://developers.arcgis.com/features/directions)|✓|✓ [2]|
|[人口統計データ](https://developers.arcgis.com/features/geo-enrichment/)|✓|✓ [2]|
|[プレミアム レイヤーと画像](https://www.arcgis.com/home/search.html?q=owner:esri)|✓|✓ [2]|
|[標高解析](https://developers.arcgis.com/rest/elevation/)|✓|✓ [2]|
|[空間解析](https://developers.arcgis.com/rest/analysis/)||✓ [2]|
|公開されているコンテンツ|✓|✓|
|ユーザーが所有するコンテンツ||✓|
|ユーザーが共有したコンテンツ||✓ [2]|
|ユーザーコンテンツの作成/更新/削除||✓|
|共有コンテンツの作成/更新/削除||✓ [2]|
|他のユーザーとコンテンツを共有する||✓ [2]|

[1] ユーザーの組織に課金される使用量  
[2] ユーザーのロールと権限で許可されている場合  
[3] アプリ ログインを利用する際の[制限事項](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/limitations-of-application-authentication)を確認


### プロキシ サービスの利用
アプリがブラウザベースであるか、ネイティブアプリであるか、またはハイブリッドアプリであるかに関わらず、クライアント側のアプリでは、クライアントの秘密は決して公開されるべきではありません。秘密情報がハッカーに乗っ取られ、知らないうちに使用されてしまう可能性があります。クライアント側での秘密の漏洩を緩和するソリューションの 1 つは、プロキシ サービスを使用してアプリに代わって秘密を仲介することです。クライアント側のアプリがプロキシ サービスにセキュリティ上の機密要求を送信し、プロキシが必要な秘密を追加してから、その要求をサービスに転送します。サービスは返信をプロキシに送り返し、プロキシは返信をアプリに転送します。

Esri では、アプリのプロキシ サービスを展開するために 2 つの方法を選択できます。

>> 1. ArcGIS for Developers の Web サイトで構成された [ArcGIS Online がホストしているプロキシ サービス](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/working-with-proxies)では、多くのプレミアム サービスの公開エンドポイントを提供しています。
>> 2. [PHP](https://github.com/Esri/resource-proxy/tree/master/PHP)、[.NET](https://github.com/Esri/resource-proxy/tree/master/DotNet)、または [Java](https://github.com/Esri/resource-proxy/tree/master/Java) で構築された[リソース プロキシ](https://github.com/Esri/resource-proxy)で、任意の ArcGIS サービスをプロキシすることができます。Esri は github でソース コードを提供しています。
これらのプロキシは、クライアント ID とクライアント秘密を使用して構成し、ArcGIS Runtime、ArcGIS API for JavaScript、Esri Leaflet、または REST のいずれかと組み合わせて使用することができます。

アプリケーションでのプロキシ サービスの使用方法の詳細については、[プロキシの使用方法](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/working-with-proxies)を参照してください。

### ArcGIS Marketplace のアプリ
[ArcGIS Marketplace](https://marketplace.arcgis.com/) は、ArcGIS ユーザが適格なプロバイダからアプリやコンテンツを検索、発見、入手できるようにするための場所です。マーケットプレイスに掲載されているアプリやコンテンツ サービスは、世界中の ArcGIS Online 組織が利用できるようにすることができます。マーケットプレイスにアプリをリストアップすることで、アプリを販売して販売収益を 100% 確保したり、アプリの無料トライアルを提供したり、新たなリードを生成したり、ArcGIS ユーザ コミュニティにマーケティングしたりすることができます。

ArcGIS Marketplace 用のアプリケーションを構築するためには、特定の実装要件に従う必要があります。

- ArcGIS Runtime SDK または、ArcGIS API for JavaScript のいずれかを使用してアプリを構築する。
- OAuth 2.0 を使用して[指定ユーザ ログイン](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#userlogin) パターンを実装する。
- [ArcGIS Online サブスクリプション](http://doc.arcgis.com/en/marketplace/provider/build-apps.htm#ESRI_SECTION1_3829E4A5064945C087BDA2FA6FB72668)の活用
- ArcGIS コミュニティに価値を提供する
- [Esri の承認を受ける](http://doc.arcgis.com/en/marketplace/provider/become-a-provider.htm)

ArcGIS Marketplace の詳細については、[Build apps for ArcGIS Marketplace](http://doc.arcgis.com/en/marketplace/provider/build-apps.htm)を参照してください。


## 認証を始める
アプリに認証を組み込むことを決めたら、サーバーにアプリを登録する必要があります。このプロセスでは、クライアント アプリとサーバのサービス間の接続と関連付けを設定します。ArcGIS Online にアプリケーションを登録すると、[指定ユーザ ログイン](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#userlogin)、または[アプリ ログイン](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#appauthentication)を開始するための資格情報が与えられます。

#### 指定ユーザー ログイン
アプリでユーザにログインを要求する場合や、ArcGIS Marketplace で配布するアプリを作成する場合は、指定ユーザ ログイン パターン用にアプリを登録します。

>> [指定ユーザー ログインの設定](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/signing-in-arcgis-online-users/)


#### アプリ ログイン
ユーザーが ArcGIS Online のユーザーではない場合や、ユーザーにログインを要求したくない場合、プレミアム サービスの費用を負担したい場合は、アプリ ログイン パターン用にアプリを登録してください。アプリ ログインを利用するには、一定の[制限](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/limitations-of-application-authentication)があります。

>> [アプリ ログインの設定](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/accessing-arcgis-online-services/)


### アプリの認証を実装
ここから先は、選択したプラットフォーム/プログラミング言語によって異なります。  
以下のリンクからドキュメントとサンプル コードにアクセスしてください。

- [Android](https://developers.arcgis.com/android/latest/guide/access-the-arcgis-platform.htm)
- [iOS](https://developers.arcgis.com/ios/latest/swift/guide/access-the-arcgis-platform.htm)
- [Java](https://developers.arcgis.com/java/latest/guide/access-the-arcgis-platform.htm)
- [JavaScript](https://developers.arcgis.com/javascript/3/jshelp/ags_secureservices.html)
- [.NET](https://developers.arcgis.com/net/latest/wpf/guide/use-the-authentication-manager.htm)
- [Qt](https://developers.arcgis.com/qt/latest/qml/guide/access-the-arcgis-platform.htm)
- [Esri Leaflet](http://esri.github.io/esri-leaflet/api-reference/services/service.html)
- [REST](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/accessing-arcgis-online-services/)

