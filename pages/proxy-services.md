## プロキシ サービスとは

[ルート解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Route_service_with_synchronous_execution/02r300000036000000/) や [ジオエンリッチメント](http://resources.arcgis.com/en/help/arcgis-rest-api/#/GeoEnrichment_Service_Overview/02r30000021r000000/) などの、ArcGIS Online の有償サービス にアクセスするためにはトークンが必要です。アプリケーションがブラウザー ベースであるかネイティブ アプリケーションであるか、ハイブリッド であるかにかかわらず、秘密鍵を埋め込むことはセキュリティのリスクが高まるため、プロキシ サービスの利用が推奨されています。プロキシ サービスを経由することでクライアント側からのリクエストに秘密の情報を追加してサービスに転送し、結果をレスポンスとしてアプリに返します。


プロキシ サービスを利用する方法は以下の２通りあります。

* ArcGIS Online にホストされたプロキシ サービス（Service Proxies）
> ArcGIS for Developers の Web サイト上での設定のみで Esri の有償サービスへのアクセス権を持った URL を発行します

* 独自の Web サーバーにホストするプロキシ サービス（Resource Proxy）
> 米国 Esri 社が PHP、.NET、Java でプロキシ サービスのソースコード（PHP、.NET、Java）を GitHub で公開しています

また、[ArcGIS API for JavaScript 4.9 から CORS でのリクエストが標準](https://www.esrij.com/products/arcgis-api-for-javascript/details/whats-new/#4.9) になりました。Web サーバー 側で CORS を有効化することが推奨される方法ですが、Webサーバー / ブラウザー がCORSに対応していない場合には、自分の Webサーバー にプロキシ サービスをホストする必要があります。

## ArcGIS Online にホストされたプロキシ サービス

1. [ArcGIS for Developers](https://developers.arcgis.com/) の [Dashboard] ページを開きます。

2. [Create a New App] をクリックしてアプリを登録します（登録済みのアプリであれば、アプリのページを開きます）。

3. [Services] タブをクリックします。

4. ページ下部の [Service Proxies] セクションまでスクロールします。

5. [Service] リストからプロキシ サービスを利用したい Esri 有償サービスの種類を選択します。

6. [Request Limit] にアクセス数の上限を設定します。

7. [Whitelisted Referrers] にてプロキシへのアクセス権を与えるリファラのホワイトリストにドメインを追加します。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/auth/service-proxies.gif" width="600px">

### 利用可能な Esri のサービス一覧

以下ではプロキシ サービスが利用可能なサービス一覧です。

|サービス|[Service] リストの値|
|:-:|:-:|
|[ジオコーディング](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm)|`geocode`|
|[ジオエンリッチメント](http://resources.arcgis.com/en/help/arcgis-rest-api/#/GeoEnrichment_Service_Overview/02r30000021r000000/)|`geoenrichment`|
|[ルート解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Route_service_with_synchronous_execution/02r300000036000000/)|`route`|
|[ルート解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Route_service_with_asynchronous_execution/02r300000275000000/)|`asyncroute`|
|[ユーティリティ ](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Utilities_GetToolInfo_Tool/02r3000002qs000000/)|`routingUtilities`|
|[最寄り施設解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Closest_Facility_service_with_synchronous_execution/02r3000000n7000000/)|`closestFacility`|
|[最寄り施設解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Closest_Facility_service_with_asynchronous_execution/02r30000020n000000/)|`asyncClosestFacility`|
|[到達圏解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Service_Area_service_with_synchronous_execution/02r3000000n2000000/)|`serviceArea`|
|[到達圏解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Service_Area_service_with_asynchronous_execution/02r3000000n0000000/)|`asyncServiceArea`|
|[ロケーション-アロケーション解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Location_Allocation_service/02r30000026s000000/)|`asyncLocationAllocation`|
|[配車ルート解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Vehicle_Routing_Problem_service/02r3000000n4000000/)|`syncVRP`|
|[配車ルート解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Vehicle_Routing_Problem_service/02r3000000n4000000/)|`asyncVRP`|
|[OD コスト マトリックス解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Origin_Destination_Cost_Matrix_Service/02r3000002r2000000/)|`asyncODCostMatrix`|
|[交通量](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Traffic_service/02r3000000n6000000/)|`traffic`|
|[標高](https://developers.arcgis.com/rest/elevation/)|`elevationSync`|
|[標高（非同期）](https://developers.arcgis.com/rest/elevation/)|`elevation`|
|[水文解析](https://developers.arcgis.com/rest/elevation/)|`hydrology`|

## 独自の Web サーバーにホストするプロキシ サービス

米国 Esri 社が [PHP](https://github.com/Esri/resource-proxy/tree/master/PHP)、[.NET](https://github.com/Esri/resource-proxy/tree/master/DotNet)、[Java](https://github.com/Esri/resource-proxy/tree/master/Java) でプロキシ サービスのソースコードを GitHub で公開しています。このプロキシ サービスを設定することにより、[ArcGIS Runtime SDK](https://developers.arcgis.com/arcgis-runtime)、[ArcGIS API for JavaScript](https://developers.arcgis.com/javascript) 等と共に使用すると、Esri 有償サービスを利用するためのトークンとの交換を代替してくれます。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/auth/resource-proxy.png" width="600px">

### プロキシ サービスの設定

[プロキシ サービス（Resource Proxy）](https://github.com/Esri/resource-proxy) から自分の環境にあわせて [PHP](https://github.com/Esri/resource-proxy/tree/master/PHP)、[.NET](https://github.com/Esri/resource-proxy/tree/master/DotNet)、[Java](https://github.com/Esri/resource-proxy/tree/master/Java) のいずれかの言語の `Instructions` に書かれている設定方法に従って設定します。
ここでは例として .NETでの設定方法を記載しています。
- zipファイルをダウンロードして解凍するか、リポジトリをクローンします。[リリース版](https://github.com/Esri/resource-proxy/releases)（推奨）または最新のデイリービルドをダウンロード可能です。
- .NET 4.0 以降のアプリケーション プールを指定して、`DotNet`フォルダの内容を .NET Webアプリケーションとしてインストールします。たとえば、次の手順で行います。
  - IIS マネージャを開きます
    - wwwroot 下に `DotNet`フォルダ を置いた場合は、それを右クリックして [アプリケーションに変換] を選択します。
    - 「アプリケーション プール」が4.0以上であることを確認します。
- プロキシがインストールされて利用可能であることをテストします。
```html
  http://[yourmachine]/DotNet/proxy.ashx?ping
```
- プロキシがブラウザで直接リクエストを転送できることをテストします。
```html
  http://[yourmachine]/DotNet/proxy.ashx?http://services.arcgisonline.com/ArcGIS/rest/services/?f=pjson
```

- トラブルシューティング：404.3というエラーメッセージが表示された場合は、ASP.NETがセットアップされていない可能性があります。
  - Windows 8の場合は、「Windowsの機能の有効化または無効化」 - >「インターネットインフォメーションサービス」 - >「World Wide Webサービス」 - >「アプリケーション開発機能」 - >「ASP .NET 4.5」の順に選択します。
- テキストエディタで`proxy.config`ファイルを編集して、プロキシの設定をします。
- 指定されたサービスにプロキシを使用するようにアプリケーションを更新してください。このJavaScriptの例では、route.arcgis.comへのリクエストはプロキシを利用します。
```js
urlUtils.addProxyRule({
        urlPrefix: "route.arcgis.com",
        proxyUrl: "http://[yourmachine]/proxy/proxy.ashx"
    });
```  

- セキュリティに関するヒント：デフォルトでは、`proxy.config` は任意の参照元を許可します。これを制限するに `allowedReferers` プロパティ `*` の部分を独自のアプリケーションURL に置き換えます。

**※** 最新の```DotNet``` の Proxy Version "1.1.2"では 561 行目で TLS 1.2 に対しての実装がされていますが、リクエスト先のサーバーが TLS 1.2 に対応していない場合は 500 のエラーになります。

```json
"error": {
    "code": 500,
    "message": "要求は中止されました: SSL/TLS のセキュリティで保護されているチャネルを作成できませんでした"
}
```

外部のサーバーで TLS 1.2 にすぐに変更できない場合は、TLS 1.0 , TLS 1.1 にも対応するようにコードを変更します。
```C#
ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
```
⇒
```C#
ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
```

### プロキシ サービス の設定ファイルの設定

プロキシの設定ファイル（`proxy.config`）にアクセスを許可する Esri 有償サービスの情報を設定します。

1. `allowedReferers` 属性を使ってアクセスを許可する HTTP リファラを設定します。

2. `rateLimit` と `rateLimitPeriod` 属性にて一定期間におけるアクセス数の上限を設定します。

以下は、プロキシ サービスの設定例です。

```xml
<ProxyConfig
    mustMatch="true"
    logFile="proxy_log_xml.log"
    allowedReferers="example.com">

  <serverUrls>
    <serverUrl
      url="geoenrich.arcgis.com"
      oauth2Endpoint="https://www.arcgis.com/sharing/oauth2"
      clientId="6Xo1d-example-9Kn2"
      clientSecret="5a5d50-example-c867b6efcf969bdcc6a2"
      rateLimit="120"
      rateLimitPeriod="60"
      matchAll="true"/>

    <serverUrl
      url="route.arcgis.com"
      matchAll="true"
      oauth2Endpoint="https://www.arcgis.com/sharing/oauth2"
      clientId="6Xo1d-example-9Kn2"
      clientSecret="5a5d50-example-c867b6efcf969bdcc6a2"
      rateLimit="120"
      rateLimitPeriod="60"/>

  </serverUrls>
</ProxyConfig>
```
