﻿+++
title = "ルートの検索"
description = "マッピングAPI＆ロケーションサービス内のルーティング＆ディレクションズについて紹介します"
Weight=3
aliases = ["/create-routing/"]
+++

<img src="https://apps.esrij.com/arcgis-dev/guide/img/create-routing/RouteAndDirection_Smalple_ja.png" width="1200px">

## ルーティングとは？

ルーティングとはシンプル ルーティングとも呼ばれ、人や車両を出発地点地から目的地点地までの最適経路を導き出す手段の一つです。ルーティングは、制限速度や車線の数、時間帯といった道路網における様々なデータ パラメータを考慮しています。その他にも道路状況や事故、障害物といったリアルタイム データを考慮したルーティングも可能となります。

ルーティングを利用して以下のアプリケーションを構築することができます。

・出発地点から目的地点までの最短経路を検索

・複数の目的地点への最短経路を検索

・多言語での経路案内を実現

## ルーティングの仕組み

経路作成における典型的なワークフロー

１　出発地点と経由地点および目的地点を明確にする

２　経路における移動手段を明確にする

３　サービスから経路や道案内を呼び出す際に、経路の特徴や道順を確認することが可能

ルーティング サービスを用い、シンプルな経路ものや最適化された経路を作成することができます。

・シンプルな経路とは地点間の最短経路のことをいいます。

・最適化された経路とは、地点間の最も効率的な経路のことをいいます。

最適化された経路を作成するためには、[findBestSequence](https://developers.arcgis.com/rest/network/api-reference/route-synchronous-service.htm)パラメータを使用する必要があります。このパラメータを使用すると、地点間の最も効率的な経路を返すように順序が変更されます。

ヒント： ArcGIS Developer 開発者アカウントをお持ちの場合、シンプルな経路の作成は位置情報サービスへのアクセスの無料枠に含まれています。最適化された経路の作成を利用するには、従量課金となります。

## 経路のナビゲーションの方法
経路が決定したら、現在の端末位置情報を使用して進行状況を把握することや、経路を縦断する際にナビゲーション指示(音声案内)を呼び出したい場合、[ArcGIS Maps SDKs for Native Apps](https://developers.arcgis.com/documentation/mapping-apis-and-services/apis-and-sdks/#native-apis)で実行するのが効果的です。

注：経路案内についてより詳しく知りたい方は、以下に記載のガイド「Navigate a route」をご参照ください。

・[ArcGIS Maps SDK for Kotlin](https://developers.arcgis.com/kotlin/route-and-directions/navigate-a-route/)

・[ArcGIS Maps SDK for Swift](https://developers.arcgis.com/swift/route-and-directions/navigate-a-route/)

・[ArcGIS Maps SDK for .NET](https://developers.arcgis.com/net/route-and-directions/navigate-a-route/)

・[ArcGIS Maps SDK for Qt](https://developers.arcgis.com/qt/route-and-directions/navigate-a-route/)


## URLリクエスト
ルーティング サービスにhttps リクエストを行うか、[クライアント API](https://developers.arcgis.com/documentation/mapping-apis-and-services/routing/route-and-directions/#api-support)を使用することで経路と道順を検索できます。出発地点、目的地点、そしてオプションで追加のパラメータを指定すると経路検索結果を絞り込むことができます。ここで最も一般的なパラメータの一部を以下に説明します。

## リクエスト制限

|**リミット**|**ダイレクト**|**ジョブ**|
| - | - | - |
|最大ストップ数|150|10,000|
|最大トランザクション時間|5分|60分|
|最大バリア地点|250|250|
|ポリライン バリアと交差する道路ストリート フィーチャーの最大数|500|500|
|ポリゴン バリアと交差するストリートフィーチャーの最大数|2,000|2,000|
|徒歩移動モードにおける最長距離（いずれかのストップ間の直線距離がこの制限を超える場合に歩行制限を使用すると解析が失敗します）|<p>27マイル </p><p>(43.45km)</p>|<p>27マイル </p><p>(43.45km)</p>|
|<p>直線距離が以下の距離を超えると階層化を強制します(いずれかの停止位置間の直線距離がここに示す限界値より大きい場合、</p><p>travel\_modeで階層化を使用しないと、定義されていても解析では階層化を使用します)</p>|<p>50マイル</p><p>(80.46km)</p>|<p>50マイル </p><p>(80.46km)</p>|
|最大スナップ許容範囲：(入力地点と最寄りのトラバース可能な道路との距離がここで指定した距離より大きい場合、その地点は解析から除外されます)|<p>12\.42マイル </p><p>(20km)</p>|<p>12\.42マイル</p><p>(20km)</p>|
|返すことができる方向性のフィーチャ特徴の最大数(travel\_modeで階層を使用しないと、定義されていても各地点間の直線距離がここに示した制限値を超える場合、解析では階層を使用します)|制限なし|<p>1,000,000</p><p></p>|
|返すことができる路肩の最大数|<p>利用不可</p><p></p>|1,000,000|

## 必要なパラメータ

|パラメータ名|説明|一例|
| - | - | - |
|f|返されるデータ形式|f=json f=pjson f=geojson f=html|
|token|APIキーまたはOauth 2.0のアクセストークン アクセストークンの取得方法については、[セキュリティと認証](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/)をご覧ください。|<p>token=<YOUR\_API\_KEY></p><p>token=<ACCESS\_TOKEN></p>|
|Stops|経路上で訪問する必要のある2か所以上の場所|Stops=139.767176,35.681260;139.796337. 35.710982|
|findBestSequence|複数の目的地点を訪れる際に、サービスが最適な順序を発見するサービスを行うかどうかを指定します。注意：最適化された経路を生成する場合は、このパラメータをtrueに設定します。|findBest Sequence=true|

## [ダイレクト](https://developers.arcgis.com/documentation/glossary/direct-request/)
5分以内で経由地点が150未満の短い処理のものに使用します


### エンドポイント

```Enhanced endpoints
https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/solve?<parameters>
```
```Enhanced endpoints
https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World/solve?<parameters>
```

注：上記のエンドポイントは、いずれも機能は基本的に同じものです。エンハンスド エンドポイントの詳細については、[サービス エンドポイント](https://developers.arcgis.com/documentation/mapping-apis-and-services/service-endpoints/)をご覧ください。

## キー パラメータ

|パラメータ名|説明|一例|
| - | - | - |
|travelMode|車やトラックの運転、徒歩などの移動手段|travelMode=[JSONObject](https://developers.arcgis.com/rest/network/api-reference/route-synchronous-service.htm#ESRI_SECTION2_1A9936A9B63043B7BBD2AF79830B2330) |
|startTime|入力した地点から移動を開始する時刻です。Nnowを指定すると出発時刻を現在時刻に設定することもできます。|startTime=now|
|returnDirections　|各経路ルートのドライブガイドを生成する|returnDirections=true|
|directionsLanguage|経路案内目的地の生成時に使用する言語|directionsLanguage=ja|
## 追加パラメータ
polygon\_Barriersは一時的な減速など経路を追加設定する場合、

route\_shyapeはサービスで作成するルート フィーチャの種類を指定する場合、

return\_to\_startは経路の開始位置と終了位置が同じ場合に設定します。

ヒント：リクエストやパラメータ、有効な入力値の詳細については、[Routing service REST APIドキュメント](https://developers.arcgis.com/rest/network/api-reference/route-asynchronous-service.htm#ESRI_SECTION1_0BF1A9C57C9E428CB440E6843E6AB5DA)を参照してください。

## [ジョブ](https://developers.arcgis.com/documentation/glossary/job-request/)

60分以内で経由地点が最大10000までの長時間の処理のものに利用します。

### エンドポイント

```Enhanced endpoints
https://logistics.arcgis.com/arcgis/rest/services/World/Route/GPServer/FindRoutes/submitJob?<parameters>
```

ヒント：エンドポイントについての詳細は、[サービス エンドポイント](https://developers.arcgis.com/documentation/mapping-apis-and-services/service-endpoints/)をご覧ください。

## 必要パラメータ

|パラメータ名|説明|一例|
| :- | :- | :- |
|f|返されるデータ形式|f=json f=pjson f=geojson f=html|
|token|APIキーまたはOAuth 2.0のアクセス トークン  アクセストークンの取得方法については、[セキュリティと認証](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/)をご覧ください。|Token=<YOUR\_API\_KEY>|
|stops|経路上で2か所以上の経由する地点|Stops=,139.767176,35.681260; 139.796337,35.710982|
|<p>reorder\_stops\_to\_</p><p>find\_optimal\_routes</p>|複数の目的地点地を訪問する際に、最適な順序を見つけるかどうかを指定します。|<p>Reoder\_stops\_to\_find\_</p><p>optimal\_routes=true</p>|

## キー パラメータ

|パラメータ名|説明|一例|
| :- | :- | :- |
|travel\_mode|車やトラックの運転、徒歩などの移動手段|travel_mode=[JSON Object](https://developers.arcgis.com/rest/network/api-reference/route-asynchronous-service.htm#GUID-0C769832-F606-4002-ABF0-0A794DDC244E)
|time\_of\_day|入力した終点から移動を開始する時間|time_of_day=1608022800000|
|populate\_directions|各経路のドライブガイドを生成|populate_directions=true|
|directions\_language|経路案内目的地の生成時に用いる言語|directions_language=ja|

## 追加パラメータ

polygon\_barriersは一時減速を設定する場合、

route\_shapeはサービスで作成するルート フィーチャーの種類を指定する場合、return\_to\_startは経路の開始位置と終了位置が同じ場合に設定します。

ヒント：リクエストやパラメータ、有効な入力値の詳細については、[ルーティング サービスREST APIドキュメント](https://developers.arcgis.com/rest/network/api-reference/route-asynchronous-service.htm#ESRI_SECTION1_0BF1A9C57C9E428CB440E6843E6AB5DA)を参照してください。

## サンプル コード

### ダイレクト:経路や道順の検索

この例ではルーティング サービスを使用して、現在の交通状況を考慮した停留所間の経路ルートを検索し、日本語のドライブガイドを生成します。

経路を見つけるには、訪れる地点を少なくとも２つ定義する必要があります。デフォルトの travelMode では自動車の走行時間ですが、徒歩やトラック輸送の走行モードでも使用可能です。最適な結果を得るためには常に startTime を指定するのがよいでしょう。この例では、startingTimeをnowと指定し、経路ルートの出発時刻を現在の時刻に設定するとともに、経路が現在の交通状況を使用することをサービスに表設定しています。また、directorsLanguage を設定して選択した言語で道案内を生成しています。

応答には目的地点地やルート セグメント、ターンバイターンのテキスト道案内が含まれています。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/create-routing/RouteAndDirection_Smalple_ja.png" width="1200px">

ヒント：アクセストークンを取得するには、[トークンの生成](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/arcgis-identity/direct-username-password/)、[APIキーの生成と管理](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/tutorials/create-and-manage-an-api-key/)、[OAuth2.0の実装](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/oauth-2.0/)のいずれかを行ってください。

## APIs
#### ArcGIS Maps SDK for JavaScript
<details>
<summary>クリックでコードを表示</summary>

```HTML
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>ArcGIS JavaScript Tutorials: Find a route and directions (Auth)</title>
  <style>
    html, body, #viewDiv {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
  </style>

  <link rel="stylesheet" href="https://js.arcgis.com/4.26/esri/themes/light/main.css">
  <script src="https://js.arcgis.com/4.26"></script>

  <script>
    require([
      "esri/Map",
      "esri/views/MapView",
      "esri/Graphic",
      "esri/geometry/Point",
      "esri/rest/route",
      "esri/rest/support/RouteParameters",
      "esri/rest/support/FeatureSet",
      "esri/config",
      "esri/widgets/Expand"
    ],(Map, MapView, Graphic, Point, route, RouteParameters, FeatureSet, esriConfig,Expand)=> {

      const apiKey = "YOUR_API_KEY";

      esriConfig.apiKey = apiKey;

      const map = new Map({
        basemap: 'osm-standard'
      });

      const center = new Point ([139.78679,35.71374]);
      const origin = new Point([139.77770,35.71159]);
      const stop =  new Point([139.79016,35.711]);
      const destination = new Point([139.79637,35.71108]);

      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: center,
        zoom: 12,
        constraints: {
          snapToZoom: false
        }
      });

      view.when(()=>{
        addGraphic("start", origin);
        addGraphic("stop", stop);
        addGraphic("finish", destination);
        getRoute();
      });

      view.on("click", (event)=>{
        if (view.graphics.length === 0) {
          addGraphic("start", event.mapPoint);
        } else if (view.graphics.length === 1) {
          addGraphic("stop", event.mapPoint);
        } else if (view.graphics.length === 2) {
          addGraphic("finish", event.mapPoint);
          getRoute();
        } else {
          view.graphics.removeAll();
          view.ui.empty("top-right");
          addGraphic("start",event.mapPoint);
        }
      });

      function addGraphic(type, point) {
        let color = "#ffffff";
        let outlineColor = "#000000"
        let size = "12px";
        if (type == "start") {
          color = "#ffffff";
        } else if (type == "stop") {
          color = "#000000";
          outlineColor = "#ffffff";
          size = "8px";
        } else {
          color = "#000000";
          outlineColor = "#ffffff";
        }
        const graphic = new Graphic({
          symbol: {
            type: "simple-marker",
            color: color,
            size: size,
            outline: {
              color: outlineColor,
              width: "1px"
            }
          },
          geometry: point
        });
        view.graphics.add(graphic);
      }

      function getRoute() {

        const routeUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";

        const routeParams = new RouteParameters({
          stops: new FeatureSet({
            features: view.graphics.toArray()
          }),
          returnDirections: true,
          directionsLanguage: "ja"
        });

        route.solve(routeUrl, routeParams)
          .then((data)=> {
            if (data.routeResults.length > 0) {
              showRoute(data.routeResults[0].route);
              showDirections(data.routeResults[0].directions.features);
            }
          })
          .catch((error)=>{
            console.log(error);
          })
      }

      function showRoute(routeResult) {
        routeResult.symbol = {
          type: "simple-line",
          color: [5, 150, 255],
          width: 3
        };
        view.graphics.add(routeResult,0);
      }

      function showDirections(directions) {
        function showRouteDirections(directions) {
          const directionsList = document.createElement("ol");
          directions.forEach(function(result,i){
            const direction = document.createElement("li");
            direction.innerHTML = result.attributes.text + ((result.attributes.length > 0) ? " (" + result.attributes.length.toFixed(2) + " miles)" : "");
            directionsList.appendChild(direction);
          });
          directionsElement.appendChild(directionsList);
        }

        const directionsElement = document.createElement("div");
        directionsElement.innerHTML = "<h3>Directions</h3>";
        directionsElement.classList = "esri-widget esri-widget--panel esri-directions__scroller directions";
        directionsElement.style.marginTop = "0";
        directionsElement.style.padding = "0 15px";
        directionsElement.style.minHeight = "365px";

        showRouteDirections(directions);

        view.ui.empty("top-right");
        view.ui.add(new Expand({
          view:view,
          content:directionsElement,
          expanded:true,
          mode:"floating"}), "top-right");
      }

    });
  </script>
</head>
<body>
  <div id="viewDiv"></div>
</body>
</html>
```
</details>

## REST API

```REST API

curl https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route\_World/solve? \

-d "f=json"

-d "token=<ACCESS\_TOKEN>"

-d "stops=-139.77770,35.71159; 139.79016,35.711; 139.79637,35.71108"
-d "startTime=now"

-d "returnDirections=tr

-d "directionsLanguage=ja
```