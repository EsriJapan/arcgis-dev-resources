# プロキシ サービスの利用

ブラウザー ベースの Web アプリに秘密鍵を埋め込むことはセキュリティのリスクが高まるため、プロキシ サービスの利用を推奨しています。プロキシ サービスを経由してアプリ ID と秘密鍵をリクエストに埋め込むことができます。
プロキシ サービスを利用する方法は以下の２通りあります。

* ArcGIS Online にホストされたプロキシ サービス（Service Proxies）
> ArcGIS for Developers の Web サイト上での設定のみで Esri の有償サービスへのアクセス権を持った URL を発行します
* 独自の Web サーバーにホストするプロキシ ファイル（Resource Proxy）
> 米国 Esri 社によってプロキシ ファイルのソースコード（PHP、.NET、Java）を GitHub で公開しています

## ArcGIS Online にホストされたプロキシ サービス

1. ArcGIS for Developers の [Application] ページを開きます。

1. [REGISTER NEW APPLICATION] をクリックしてアプリを登録します（登録済みのアプリであれば、アプリのページを開きます）。

1. [Authentication] タブをクリックします。

1. ページ下部の [Service Proxies] セクションまでスクロールします。

1. [Service] リストからプロキシ サービスを利用したい Esri 有償サービスの種類を選択します。

1. [Request Limit] にアクセス数の上限を設定します。

1. [Allowed Domains] にてプロキシへのアクセス権を与えるリファラのホワイトリストにドメインを追加します。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/auth/service-proxies.gif" width="600px">

### サービス プロキシを利用可能な Esri 有償サービス一覧

以下ではサービス プロキシがサポートしているサービス一覧です。リストにないサービスやコンテンツ（例：個人が保有するセキュアなマップ/レイヤー）を設定したい場合は Resource Proxy を使ってください。

|サービス|[Service] リストの値|
|:-:|:-:|
|[ジオコーディング](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm)|`geocode`|
|[ジオエンリッチメント](http://resources.arcgis.com/en/help/arcgis-rest-api/#/GeoEnrichment_Service_Overview/02r30000021r000000/)|`geoenrichment`|
|[ルート解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Route_service_with_synchronous_execution/02r300000036000000/)|`route`|
|[ルート解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Route_service_with_asynchronous_execution/02r300000275000000/)|`asyncroute`|
|[最寄り施設解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Closest_Facility_service_with_synchronous_execution/02r3000000n7000000/)|`closestFacility`|
|[最寄り施設解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Closest_Facility_service_with_asynchronous_execution/02r30000020n000000/)|`asyncClosestFacility`|
|[到達圏解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Service_Area_service_with_synchronous_execution/02r3000000n2000000/)|`serviceArea`|
|[到達圏解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Service_Area_service_with_asynchronous_execution/02r3000000n0000000/)|`asyncServiceArea`|
|[ロケーション-アロケーション解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Location_Allocation_service/02r30000026s000000/)|`asyncLocationAllocation`|
|[配車ルート解析](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Vehicle_Routing_Problem_service/02r3000000n4000000/)|`syncVRP`|
|[配車ルート解析（非同期）](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Vehicle_Routing_Problem_service/02r3000000n4000000/)|`asyncVRP`|
|[交通量](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Traffic_service/02r3000000n6000000/)|`traffic`|
|[標高](https://developers.arcgis.com/rest/elevation/)|`elevationSync`|
|[標高（非同期）](https://developers.arcgis.com/rest/elevation/)|`elevation`|
|[水文解析](https://developers.arcgis.com/rest/elevation/)|`hydrology`|

## 独自の Web サーバーにホストするプロキシ ファイル

プロキシ ファイルは米国 Esri 社がメンテナンスしているソースコード（[Resource Proxy](https://github.com/Esri/resource-proxy)）が GitHub で公開されています。このプロキシ サービスにはアプリ ID と秘密鍵を設定することができ、Esri 有償サービスを利用するためのトークンとの交換を代替してくれます。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/auth/resource-proxy.png" width="600px">

### プロキシ サービスの設定

プロキシの設定ファイル（`proxy.config`）にアクセスを許可する Esri 有償サービスやプライベート コンテンツ（マップ/レイヤー）の情報を設定します。

1. `allowedReferers` 属性を使ってアクセスを許可する HTTP リファラを設定します。

1. `rateLimit` と `rateLimitPeriod` 属性にて一定期間におけるアクセス数の上限を設定します。

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

---

[:back: メインページへ戻る](https://github.com/EsriJapan/arcgis-dev-resources/blob/gh-pages/README.md)
