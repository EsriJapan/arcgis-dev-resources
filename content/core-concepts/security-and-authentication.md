+++
title = "セキュリティと認証"
description = "セキュリティを担保するために、ネットワーク上で利用可能なリソースに対して、公開範囲を設定してアクセスを制限することでリソースを保護します。リソースに対するアクセスはインターネットを使用して行われますが、VPN やイントラネットを使用したアクセスも可能です。ArcGIS でのセキュリティの方法や認証パターンなどについて紹介します。"
Weight=3
aliases = ["/security-and-authentication/"]
+++

## ArcGIS での認証
セキュリティを担保するために、ネットワーク上で利用可能なリソースに対して、公開範囲を設定してアクセスを制限することでリソースを保護します。リソースに対するアクセスはインターネットを使用して行われますが、VPN やイントラネットを使用したアクセスも可能です。公開範囲が制限されたリソースにアクセスする必要がある場合、アプリケーション、またはアプリケーションを利用するユーザーは、認定された機関 (ArcGIS Online、ArcGIS Enterprise、またはその他の互換性のあるセキュリティで保護されたサービスなどの ArcGIS プラットフォーム) との認証を行う必要があります。

アプリケーションが以下の操作を行う場合は、認証が必要となります。

- プライベート コンテンツへのアクセス
- コンテンツの作成、編集、公開
- プレミアム コンテンツおよびサービスへのアクセス

[プレミアム コンテンツ](http://www.esri.com/software/arcgis/arcgisonline/credits)とサービスは、クレジットを使用するサービスモデルです。クレジットの購入には、ArcGIS Online 組織アカウントのためのクレジットを購入するか、その他の方法で取得します。アプリケーションで対象となるサービスを使用すると、クレジットが消費されます。消費されるクレジット数は、サービスによって異なります。クレジットが必要なサービスについては、[クレジットの概要](https://www.esrij.com/products/arcgis-online/credits/)を参照してください。クレジットには費用もかかりますし、コンテンツの公開や編集はビジネスにとって重要であるため、Esri はこれらの貴重なリソースを保護するためのサービスやメカニズムを提供しています。

{{% panel theme="primary" header="製品毎の実装方法" %}}
セキュリティ手法や ArcGIS 認証パターンに詳しい場合は、以下の製品固有の詳細を参照してください。 

- [Android](https://developers.arcgis.com/android/latest/guide/access-the-arcgis-platform.htm)　　　　
- [iOS](https://developers.arcgis.com/ios/latest/swift/guide/access-the-arcgis-platform.htm)
- [Java](https://developers.arcgis.com/java/latest/guide/access-the-arcgis-platform.htm) <sup>※</sup>
- [JavaScript](https://developers.arcgis.com/javascript/3/jshelp/ags_secureservices.html)　
- [.NET](https://developers.arcgis.com/net/latest/wpf/guide/use-the-authentication-manager.htm)　　　
- [Qt](https://developers.arcgis.com/qt/latest/qml/guide/access-the-arcgis-platform.htm) <sup>※</sup>
- [Esri Leaflet](http://esri.github.io/esri-leaflet/api-reference/services/service.html) <sup>※</sup>
- [REST](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/accessing-arcgis-online-services/)

※ 現在、国内未サポートです。
{{% /panel %}}

## セキュリティの方法
ArcGIS プラットフォームは、いくつかのセキュリティ方法をサポートしています。ArcGIS Runtime を使用する場合でも、他のテクノロジを使用する場合でも、アプリを構築する際には、ユーザに代わってセキュリティ保護されたリソースにアクセスするために、少なくとも 1 つの認証方法を実装する必要があります。セキュアなリソースへのアクセスを得るための方法には、以下のようなものがあります。

- OAuth 2.0 ([OAuth](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/what-is-oauth-2))：ArcGIS プラットフォームがユーザーの信頼性を判断し、トークンがクライアント アプリに提供されます。このトークンは、保護されたリソースへのリクエストで使用されます。OAuth 2.0 は、ユーザーのサイン インに使用することを推奨する方法です。[ArcGIS Online](https://developers.arcgis.com/rest/users-groups-and-items/authorize.htm) および [ArcGIS Enterprise](https://developers.arcgis.com/rest/users-groups-and-items/authorize.htm) バージョン 10.3 以降で利用可能です。

- トークン ベース：アプリは、ユーザーに有効なユーザー名とパスワードを要求します。応答では、認証済みリソースのポータルで保護されたコンテンツのリクエストに含まれるトークンを受け取ります。[ArcGIS Online](https://developers.arcgis.com/rest/users-groups-and-items/generate-token.htm) および [ArcGIS Enterprise](http://www.esri.com/software/arcgis/arcgisserver) で使用できます。

- 公開鍵基盤 (PKI)：公開および秘密のデジタル キーは、安全ではないネットワーク上での認証および安全な通信をサポートします。PKI では、ユーザー、組織、またはソフトウェア エージェントの ID はデジタル キーのペアで表されます。PKI のユーザーは、デジタル キーを提示することで認証する必要があり、ユーザー名とパスワードが発行されることはありません。PKI では、公開鍵暗号と呼ばれる数学的手法を使用して、ユーザーまたは組織を表すデジタル キーを生成します。

    ArcGIS Enterprise は、[ArcGIS Web Adaptors](http://server.arcgis.com/en/portal/latest/administer/windows/using-windows-active-directory-and-pki-to-secure-access-to-your-portal.htm) を使用して PKI ソリューションを活用します。ArcGIS Enterprise 上のリソースに対してリクエストが行われると、Web サーバーは、提供されたクライアント証明書を検証してユーザーを認証します。リクエスト（ユーザー名とともに）は、Web Adaptor を介して ArcGIS Enterprise  に転送されます。

    ArcGIS Enterprise は、指定ユーザーから要求されたリソースへのアクセス権を持っていることを確認してから、適切な応答を送信します。

- HTTP/Windows 認証 (HTTP ベーシック、HTTP ダイジェスト、または統合 Windows 認証 (IWA))：リソースは、サービスに設定されたユーザー名とパスワードによって保護され、ブラウザーのポップアップまたはセッション クッキーによって要求されます。IWA を使用する場合、ログインは Microsoft Windows Active Directory を通じて管理されます。ユーザーはポータルにサイン インしたり、ポータルからサイン アウトするのではなく、Web サイトを開くと、Windows にログインするために使用したのと同じアカウントを使用してサイン インします。詳細については、[ポータルと Windows 認証の統合](http://server.arcgis.com/en/portal/latest/administer/windows/use-integrated-windows-authentication-with-your-portal.htm)を参照してください。

通常、サーバー管理者にも相談して、ポータルで使用する認証の種類と、ポータルにアクセスするために必要な方法を決定します。

{{% notice note %}}
別の認証方法の要件がない限り、アプリケーションは OAuth 2.0 を使用することをお勧めします。
{{% /notice %}}

## 認証パターン
サポートされている認証方法には、アプリ開発者であるユーザーとアプリ個々のユーザーの2つの分類があります。アプリを使用して提供したいユーザー体験とアプリに割り当てるリソースのアクセス権に応して、ArcGIS Runtime では2つの認証パターンが用意されています。

- 指定ユーザ ログイン
- アプリ ログイン

### 指定ユーザー ログイン
指定ユーザーのログインパターンでは、ArcGIS Online のユーザーが、アプリに対してコンテンツやサービスへのアクセスを許可します。このシナリオでは、アプリがユーザーに ArcGIS Online のユーザー名とパスワードの入力を要求し、その認証情報を使用してコンテンツにアクセスします。このモデルを使用すると、ユーザーは[プレミアム コンテンツ](http://www.esri.com/software/arcgis/arcgisonline/credits)を使用するために自身の保有するクレジットを消費し、自身がアクセス権を持つリソースにアクセスすることができます。

アプリは、ログインしたユーザーが所有、またはそのユーザーの組織が所属するプライベートコンテンツにアクセスすることができます。また、ジオコーディング、ルーティング、人口統計データなどのプレミアム コンテンツにもアクセスできます。

ログイン認証で取得したトークンの使用で発生した使用量は、そのユーザーの組織に請求されます。アプリは、ログインしたユーザーがアクセスできるすべてのサービスにアクセスできます。

ユーザーがアプリを承認してアクセストークンを取得すると、アプリは、ユーザーに許可されている以下の操作を行うことができます。

- ユーザーに代わって、プレミアムな ArcGIS Online コンテンツや[ジオコーディング](https://developers.arcgis.com/features/geocoding)、[ルーティング](https://developers.arcgis.com/features/directions)などのサービスにアクセスできます。
- ユーザーのコンテンツを作成、更新、削除ができます。
- 組織内の他のユーザーとコンテンツを共有できます。
- ユーザーが共有しているコンテンツにアクセスできます。

{{% notice tip %}}
ArcGIS Enterprise または ArcGIS Online の組織アカウントを使用して認証を行うと、オフライン編集などの機能を使用するために ArcGIS Runtime SDK アプリのライセンスを取得する方法が提供されます。詳細については、[ArcGIS Runtime アプリのライセンス取得](https://developers.arcgis.com/pricing/licensing/)を参照してください。
{{% /notice %}}

<br/>
### *アプリ ログイン*
アプリ ログインを使用して、組織が所有するコンテンツや[プレミアム コンテンツ、サービス](http://www.esri.com/software/arcgis/arcgisonline/credits)へのアクセスをユーザーに提供します。このシナリオでは、アプリはソースコードにハードコードされた認証情報を使用してコンテンツにアクセスします（この潜在的なセキュリティリスクに対処するには、[プロキシ サービスの使用](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#usingaproxyservice)を検討してください）。これにより、ユーザーが許可されていないコンテンツへのアクセスが可能になります。ユーザーはアプリの認証情報でログインしているため、ログインを求められることはありません。このモデルを使用すると、ユーザーはアクセス権のあるすべてのリソースにアクセスでき、プレミアム コンテンツを利用するとクレジットを消費します。

アプリ ログインは、ユーザーが ArcGIS Online のユーザーではないアプリやユーザー ログインを必要としないアプリ向けに設計されています。アプリストア、Ad Hoc 配布、または Web を介してアプリを配信するのに適しています。ただし、アプリ使用時に費用が発生するサービスを使用した場合は、その費用を支払う必要があります。アプリ ログインで取得したトークンの使用で発生した使用量は、登録しているアカウントに対して課金されます。

アプリ ログインのパターンでは、ユーザーは、ArcGIS Online のプレミアム コンテンツやルーティング、ジオコーディング、人口統計データなどのサービスにアクセスすることができます。ArcGIS for Developers または ArcGIS Online を使用して[アプリケーションを登録](https://developers.arcgis.com/applications/new/)をします。その後、アプリケーションの認証情報から API を使用してプレミアム サービスにアクセスします。

アプリ ログインでは、以下のサービスにアクセスすることができます。

- [ジオコーディング](https://developers.arcgis.com/features/geocoding)
- [ルート解析機能](https://developers.arcgis.com/features/directions)
- 人口統計データ ([GeoEnrichment](https://developers.arcgis.com/features/geo-enrichment))
- サブスクリプションが必要となる [Esri のプレミアム マップとレイヤー](http://www.arcgis.com/home/search.html?q=owner:esri)
- [標高解析](https://developers.arcgis.com/rest/elevation)

アプリ ログインの使用には[一定の制限](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/limitations-of-application-authentication)があります。

### 指定ユーザー ログイン vs アプリ ログイン
ここでは、トークンのやり取りに基づいて両方の認証パターンを比較します。アプリの利用ニーズに適した認証パターンを選択するために、次の質問を確認してください。そして、このセクションの機能表を使用して、アプリに含める機能を決定してください。

- ユーザーは ArcGIS Online ユーザーでもありますか？
- ユーザーにプレミアム コンテンツを有料で利用してもらいたいですか？
- ユーザーに非公開のコンテンツをアクセスさせますか？
- ログイン画面を表示しますか？

上記の質問のいずれかに「はい」と答えた場合は、指定ユーザー ログインを実装することをお勧めします。

{{% notice note %}}
[ArcGIS Marketplace](https://marketplace.arcgis.com/) 用のアプリをオーサリングする場合は、アプリに[指定ユーザー ログイン](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#userlogin)を使用する必要があります。
{{% /notice %}}

ユーザーが ArcGIS Online のユーザーではない場合、ユーザーにログインを要求させたくない場合、またはルーティング、ジオコーディング、人口統計データなどのプレミアム サービスの費用を負担したい場合は、アプリ ログインを選択してください。

### 機能一覧表
|機能|アプリ ログイン <sup>[3]</sup>|指定ユーザー ログイン <sup>[1]</sup>|
|:---|:---|:---|
|[ジオコーディング](https://developers.arcgis.com/features/geocoding)|✓|✓ <sup>[2]</sup>|
|[ルーティング](https://developers.arcgis.com/features/directions)|✓|✓ <sup>[2]</sup>|
|[人口統計データ](https://developers.arcgis.com/features/geo-enrichment/)|✓|✓ <sup>[2]</sup>|
|[プレミアム レイヤーと画像](https://www.arcgis.com/home/search.html?q=owner:esri)|✓|✓ <sup>[2]</sup>|
|[標高解析](https://developers.arcgis.com/rest/elevation/)|✓|✓ <sup>[2]</sup>|
|[空間解析](https://developers.arcgis.com/rest/analysis/)||✓ <sup>[2]</sup>|
|公開コンテンツの参照|✓|✓|
|ユーザーが所有するコンテンツの参照||✓|
|ユーザーが共有したコンテンツの参照||✓ <sup>[2]</sup>|
|ユーザーが所有するコンテンツの作成/更新/削除||✓|
|共有コンテンツの作成/更新/削除||✓ <sup>[2]</sup>|
|他のユーザーへコンテンツを共有||✓ <sup>[2]</sup>|

<span style="font-size: 75%">[1] ユーザーが所属する組織に課金される使用量</span></br>
<span style="font-size: 75%">[2] ユーザーの役割と権限で許可されている場合</span></br>
<span style="font-size: 75%">[3] アプリ ログインを利用する際の[制限事項](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/limitations-of-application-authentication)を確認</span>

## プロキシ サービスの利用
アプリは、ブラウザベース、ネイティブアプリ、またはハイブリッドアプリのいずれであってもクライアント側のアプリでは、クライアントシークレットは、決して公開されるべきではありません。秘密情報がハッカーに乗っ取られ、知らない間に使用されてしまう可能性があります。クライアント側で シークレットの漏洩を阻止する１つのソリューションは、プロキシ サービスを使用してアプリに代わって シークレットを仲介することです。クライアント側のアプリは、セキュリティ上、重要なリクエストをプロキシ サービスに送信し、プロキシが必要なシークレットを追加してから、その要求をサービスに転送します。サービスは返信をプロキシに送信し、プロキシはリクエストをアプリに転送します。

Esri では、アプリのプロキシ サービスを利用するために 2 つの方法を選択できます。

1. ArcGIS for Developers の Web サイトで構成された [ArcGIS Online がホストしているプロキシ サービス](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/working-with-proxies)では、多くのプレミアム サービスの公開エンドポイントを提供しています。
2. [PHP](https://github.com/Esri/resource-proxy/tree/master/PHP)、[.NET](https://github.com/Esri/resource-proxy/tree/master/DotNet)、または [Java](https://github.com/Esri/resource-proxy/tree/master/Java) で構築された[リソース プロキシ](https://github.com/Esri/resource-proxy)で、任意の ArcGIS サービスをプロキシすることができます。Esri は github でソース コードを提供しています。
これらのプロキシは、クライアント ID とライアントシークレットを使用して構成し、ArcGIS Runtime、ArcGIS API for JavaScript、Esri Leaflet、または REST のいずれかと組み合わせて使用することができます。

アプリケーションでのプロキシ サービスの使用方法の詳細については、[プロキシの使用方法](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/working-with-proxies)を参照してください。

## ArcGIS Marketplace のアプリ
[ArcGIS Marketplace](https://marketplace.arcgis.com/) は、ArcGIS ユーザーが認定プロバイダからアプリやコンテンツを検索して入手できるようにするための場所です。マーケットプレイスに掲載されているアプリやコンテンツは、世界中の ArcGIS Online 組織で使用することができます。マーケットプレイスにアプリを掲載することで、販売したアプリの収益を 100% 確保したり、アプリの無料トライアルを提供したりできます。また、新たな見込み顧客を発見したりと ArcGIS ユーザーのコミュニティにマーケティングしたりすることもできます。

ArcGIS Marketplace 用のアプリケーションを構築するためには、特定の実装要件に従う必要があります。

- ArcGIS Runtime SDK または、ArcGIS API for JavaScript のいずれかを使用してアプリを構築する。
- OAuth 2.0 を使用して[指定ユーザ ログイン](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#userlogin) パターンを実装する。
- [ArcGIS Online サブスクリプション](http://doc.arcgis.com/en/marketplace/provider/build-apps.htm#ESRI_SECTION1_3829E4A5064945C087BDA2FA6FB72668)を活用する。
- ArcGIS コミュニティに価値を提供する
- [Esri の承認](http://doc.arcgis.com/en/marketplace/provider/become-a-provider.htm)を受ける。

ArcGIS Marketplace の詳細については、[ArcGIS Marketplace アプリ構築](http://doc.arcgis.com/en/marketplace/provider/build-apps.htm)を参照してください。

## 認証を始める
アプリに認証を組み込むことを決めたら、サーバーにアプリを登録する必要があります。このプロセスでは、クライアントアプリとサーバーとのサービス間の接続と関連付けを設定します。ArcGIS Online にアプリケーションを登録すると、[指定ユーザ ログイン](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#userlogin)、または[アプリ ログイン](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/#appauthentication)を開始するための認証情報が提供されます。

### 指定ユーザー ログイン
アプリでユーザーにログインを要求する場合や、ArcGIS Marketplace で配布するアプリを作成する場合は、指定ユーザー ログインのパターンでアプリを登録します。

- [指定ユーザー ログインの設定](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/signing-in-arcgis-online-users/)

### アプリ ログイン
ユーザーが ArcGIS Online のユーザーではない場合や、ユーザーにログインを要求させたくない場合、また、プレミアム サービスの費用を負担したい場合は、アプリ ログインのパターンでアプリを登録します。アプリ ログインを利用するには、一定の[制限](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/limitations-of-application-authentication)があります。

- [アプリ ログインの設定](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/accessing-arcgis-online-services/)

## アプリの認証を実装
ここから先は、選択したプラットフォーム/プログラミング言語によって異なります。アプリの認証については、以下の各製品のドキュメントやサンプルコードを参照してください。

- [Android](https://developers.arcgis.com/android/latest/guide/access-the-arcgis-platform.htm)
- [iOS](https://developers.arcgis.com/ios/latest/swift/guide/access-the-arcgis-platform.htm)
- [Java](https://developers.arcgis.com/java/latest/guide/access-the-arcgis-platform.htm) <sup>※</sup>
- [JavaScript](https://developers.arcgis.com/javascript/3/jshelp/ags_secureservices.html)
- [.NET](https://developers.arcgis.com/net/latest/wpf/guide/use-the-authentication-manager.htm)
- [Qt](https://developers.arcgis.com/qt/latest/qml/guide/access-the-arcgis-platform.htm) <sup>※</sup>
- [Esri Leaflet](http://esri.github.io/esri-leaflet/api-reference/services/service.html) <sup>※</sup>
- [REST](https://developers.arcgis.com/documentation/core-concepts/security-and-authentication/ accessing-arcgis-online-services/) 

※ 現在、国内未サポートです。