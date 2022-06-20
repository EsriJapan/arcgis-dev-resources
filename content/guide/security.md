+++
title = "セキュリティと認証"
description = "有償のサービスやプライベート コンテンツへアクセスするアプリに必要な認証について紹介します。"
Weight=5
aliases = ["/security/"]
+++

出典：ArcGIS Developer - Security and authentication - [Introduction](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/)


## セキュリティと認証 
ArcGIS は、ロケーション サービスやプライベート データへの安全なアクセスをサポートしています。これにより、有効かつ認証されたユーザーやサービスのみが保護された情報にアクセスできるようになります。安全なリソースにアクセスするためには、アプリケーションがサービスに対して認証されたリクエストを行えるように、[認証方法](#認証方法)を実装する必要があります。


## はじめに
以下の手順で認証を開始できます。

1. ArcGIS 開発者アカウントをお持ちでない場合は、[新規作成](https://developers.arcgis.com/sign-up/)してください。

2. [利用可能な認証方法](#認証方法)と[認証方法の選択](#認証方法の選択)を確認します。

3. [開発者用ダッシュボード](https://developers.arcgis.com/dashboard/)にサインインし、認証情報を作成します。

4. [認証チュートリアル](#チュートリアル)にアクセスして、アプリの構築を始めましょう。


{{% notice note %}}

ArcGIS Enterprise アカウントを使用して認証する場合、ArcGIS identity、アプリケーション認証情報、その他の [ArcGIS identity 認証方法](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/arcgis-identity/other-authentication-methods/)を使用できます。ただし、API キーは ArcGIS Enterprise ではサポートされていません。

{{% /notice %}}

## 認証方法
認証方法とは、アクセストークンを取得するためのプロセスです。アプリケーションがロケーション サービスに認証済みのリクエストを行う際には、アクセストークンを提示する必要があります。アクセストークンは、アプリケーションが利用できる範囲と権限を定義します。アクセストークンの取得に使用する認証方法はいくつかあります。

アクセストークンには以下の 3 種類あります。
* [API キー](#API-キー)：すぐに使えるサービスや、ArcGIS Developer アカウントがあればプライベート（[ベータ](https://developers.arcgis.com/faq/#licensing-private-data)）なコンテンツへのアクセスをアプリケーションに与える永続的なトークンです。
* [ArcGIS Identity (指定ユーザー ログイン)](#ArcGIS-Identity-指定ユーザー-ログイン)：既存の ArcGIS ユーザのアカウントに認可されたプライベート コンテンツおよびサービスへのアクセスをアプリケーションに与える一時的なトークンです。
* [アプリケーション認証](#アプリケーション認証)：
OAuth 2.0 で生成された一時的なトークンで、すぐに使えるサービスへのアクセスを認証することができます。

サービスに対して認証のリクエストを行うには、token パラメーターにアクセストークンを設定する必要があります。

`https://<LOCATION-SERVICE-URL>?token=<ACCESS-TOKEN>`

{{% notice note %}}

各サービスへのURLリクエストのフォーマットについては、[ロケーション サービス](https://developers.arcgis.com/documentation/mapping-apis-and-services/services/)を参照してください。

{{% /notice %}}


## API キー
API キーは永続的なアクセストークンであり、公開アプリケーションにすぐに使用できるサービスへのアクセスを付与します。また、ArcGIS Developer アカウントを使用すると、プライベート([ベータ](https://developers.arcgis.com/faq/#licensing-private-data))なコンテンツ、アイテム、および限定されたクライアント リファラーへのアクセスが可能になります。

次のような場合に API キーを使用します。

* すぐに使えるサービスを利用するアプリケーションを素早く作成する場合。
* ユーザーが ArcGIS アカウントでサインインしなくてもサービスへのアクセスを提供する場合。
* アクセストークンは有効期限のないものを使用する場合。

<img src="https://developers.arcgis.com/documentation/static/42a29ae3cec58e37faa2f917ab47e85a/4cdf7/api-keys.png" alt="API キー">

1. [開発者ダッシュボード](https://developers.arcgis.com/api-keys/)で [API キーを構成](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/create-and-manage-an-api-key/)します。
API キーは、[ArcGIS 開発者アカウントにサインアップ](https://developers.arcgis.com/sign-up/)したときに作成されます。

2. 選択したクライアント API に従って [API キーを設定](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/api-keys/#using-your-api-key)し、ArcGIS との認証を行います。

API キーの詳細については[こちら](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/api-keys/)をご参照ください。


## ArcGIS Identity (指定ユーザー ログイン)
ArcGIS Identity (指定ユーザー ログインとも呼ばれる) は、一時的なアクセストークンであり、アプリケーション ユーザーの既存の ArcGIS Online または ArcGIS Enterprise アカウントで許可されたコンテンツおよびサービスへのアクセスをアプリケーションに与えるものです。この一時的なトークンは [OAuth 2.0](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/oauth-2.0/) プロトコルを使用して作成され、ユーザーのセキュアなパスワードをアプリケーションに公開することなく、ユーザーの代わりにアプリケーションを動作することを許可します。消費されたサービス クレジットは、認証されたユーザーの ArcGIS サブスクリプションに請求され、認証された期間中は、ユーザーに代わってアプリケーションがユーザーのプライベート コンテンツにアクセスすることが許可されます。

次のような場合に ArcGIS Identity (指定ユーザーログイン) を使用します。

* ユーザーが自分の ArcGIS アカウントでサインインし、認証されていることを確認する場合。
* アプリユーザーのクレジットを使用して、プライベートなデータ、コンテンツ、サービスの取引の支払いを行う場合。
* ユーザーが一時的なトークンを使ってアプリにサインインできる時間を制限する場合。

<img src="https://developers.arcgis.com/documentation/static/c67ea902cb272c599159996a52182a35/4cdf7/arcgis-identity.png" alt="arcgis-identity">

1. [開発者用ダッシュボード](https://developers.arcgis.com/dashboard/)で[アプリケーションを登録](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/register-your-application/)し、クライアント認証情報を取得します。

2. [OAuth 2.0 認証のワークフロー](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/arcgis-identity/#authentication-workflows)を実装します。

3. ユーザーがアプリケーションを認証すると、認可コードが返されます。

4. 認証コードは、短命のアクセストークンと交換されます。

5. アクセストークンは、ArcGIS のコンテンツやサービスにアクセスするために使用されます。

ArcGIS Identity の詳細については[こちら](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/arcgis-identity/)をご参照ください。


## アプリケーション認証
アプリケーション認証は、OAuth 2.0 によって取得される一時的なアクセストークンで、ベースマップレイヤー、検索、ルート解析など、すぐに使えるサービスへのアクセスを可能にします。

次のような場合にアプリケーション認証を使用します。

 * すぐに使えるサービスにアクセスしたいが、一時的なトークンを使ってより安全なプロセスを実現したい場合。
 
 * ユーザーが ArcGIS アカウントを持っていなくても、サービスにアクセスできるようにする場合。

<img src="https://developers.arcgis.com/documentation/static/38eac1ebfdcb722c68a20aa2b227f8f4/4cdf7/application-credenitals.png" alt="application-credenitals">


1. [開発者用ダッシュボード](https://developers.arcgis.com/dashboard/)で [OAuth 2.0 アプリケーションを登録](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/register-your-application/)し、認証情報を受け取ります。

2. ユーザーが Web サーバー上のリソースをリクエストします。

3. [OAuth 2.0 クライアント認証情報](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/application-credentials/)のワークフローを実装し、アプリケーション認証情報を生成します。

4. アプリケーション認証を用いてユーザーのリクエストに応答します。

5. アプリケーション認証を使用して、特定のクライアント API に従って ArcGIS で認証します。

アプリケーション認証の詳細については[こちら](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/application-credentials/)をご参照ください。


## 認証方法の選択

一連の状況に最適な認証を選択するには、多くの考慮事項があります。以下のことを考慮してください。

1. アクセストークンを作成するために使用するアカウントの種類：ArcGIS Developer、ArcGIS Online、または ArcGIS Enterprise。

2. APIを選択することができます。

3. 要求されるセキュリティのレベル：短命なトークンか永続的なトークンか。

4. ユーザーがログインしてアクセスを許可する、または無言でログインするための要件。

5. セキュリティのアクセスが行われる場所：クライアントサイド、Web ベースのアプリ、またはサーバーサイド。

| シナリオ | 認証方法 |
| ---- | ---- |
| すぐに使えるサービスへのアクセスのみを必要とするアプリケーションを構築しており、ユーザーにはログインしてほしくない場合 | API キー、またはアプリケーション認証 |
| サーバーや API バックエンドでアプリケーションを構築し、すぐに利用できるサービスにのみアクセスする必要がある場合 | API キー、またはアプリケーション認証 |
| ArcGIS Developer アカウントでホストされているプライベート データを読み込むアプリケーションを構築している場合 | API キー、またはアプリケーション認証 |
| ArcGIS Online アカウントのプライベート ホスト データを使用するアプリケーションを構築している場合 |  ArcGIS Identity (指定ユーザー ログイン) |
| オープン ソース API を使用してアプリケーションを構築している場合、または ArcGIS REST API を直接使用している場合 | API キー |
| ArcGIS API を使用するアプリケーションを構築している場合 | API キー、またはアプリケーション認証、ArcGIS Identity (指定ユーザー ログイン) |

以下の対応表を参考に、検討中の機能と API を照らし合わせてください。

## 機能の比較
|  |　API キー　|　ArcGIS Identity (指定ユーザー ログイン)　|　アプリケーション認証　|
| ---- | ---- | ---- | ---- |
| 永続的なトークン | 〇 | × | × |
| 一時的なトークン | × | 〇 | 〇 |
| サーバーレス認証 | 〇 | 〇 | × |
| サーバーベース認証 | 〇 | × | 〇 |
| 特定のサービスへの制限 | 〇 | × | × |
| 特定のリファラーに制限 | 〇 | × | × |
| すぐに使えるサービス | 〇 | 〇 | 〇 |
| プライベート データのホスティング サービス | △<sup>1</sup> | 〇 | × |
| コンテンツ管理 | △<sup>2</sup> | 〇 | × |

〇：対応　△：一部対応 ×：未対応

<span style="font-size: 75%">1. ArcGIS Developer サブスクリプションのみ</span><br/>
<span style="font-size: 75%">2. ArcGIS Developer サブスクリプションのみ、制限付き</span>

## API のサポート
|  | API キー | アプリケーション認証 | ArcGIS Identity (指定ユーザー ログイン) |
| ---- | ---- | ---- | ---- |
| [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/)| 〇 | △<sup>1</sup> | 〇 |
| [ArcGIS Runtime API for Android](https://developers.arcgis.com/android/) | 〇 | 〇 | 〇 |
| [ArcGIS Runtime API for iOS](https://developers.arcgis.com/ios/) | 〇 | 〇 | 〇 |
| [ArcGIS Runtime API for Java](https://developers.arcgis.com/java/)* | 〇 | 〇 | 〇 |
| [ArcGIS Runtime API for .NET](https://developers.arcgis.com/net/) | 〇 | 〇 | 〇 |
| [ArcGIS Runtime API for Qt](https://developers.arcgis.com/qt/)* | 〇 | 〇 | 〇 |
| [ArcGIS API for Python](https://developers.arcgis.com/python/) | 〇 | 〇 | 〇 |
| [Esri Leaflet](https://developers.arcgis.com/esri-leaflet/)* | 〇 | △<sup>1</sup> | △<sup>2</sup> |
| [MapBox GL JS](https://developers.arcgis.com/mapbox-gl-js/)* | 〇 | △<sup>1</sup> | △<sup>2</sup> |
| [OpenLayers](https://developers.arcgis.com/openlayers/)* | 〇 | △<sup>1</sup> | △<sup>2</sup> |
| [ArcGIS REST JS](https://developers.arcgis.com/arcgis-rest-js/)* | 〇 | 〇 | 〇 |

〇：対応　△：一部対応 (詳細は各 API のページを参照)　*国内未サポート

<span style="font-size: 75%">1. トークンやユーザーセッションにアクセスし管理するために、サーバーコンポーネントを使用する必要があります。</span><br/>
<span style="font-size: 75%">2. OAuth 2.0 から取得したトークンの利用をサポートするが、高度な ID 管理機能はない。</span>

{{% notice tip %}}

[ArcGIS 以外の API で ArcGIS Identity (指定ユーザー ログイン) を使用する](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/arcgis-identity/#authentication-with-non-arcgis-apis)ことは可能ですが、アプリケーションの一部としてユーザーび資格情報を取得、管理、および保護する責任が生じます。このオプションを選択する場合は、[セキュリティのベスト プラクティス](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/security-best-practices/)でガイドラインを確認してください。

{{% /notice %}}

## チュートリアル
* [Create and manage an API key](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/create-and-manage-an-api-key/)
* [Authenticate with an ArcGIS identity](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/authenticate-with-an-arcgis-identity/)