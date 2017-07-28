## 開発環境

ArcGIS Runtime SDK for .NET を使用した開発には、Visual Studio が必要です。

また、この後使用するサンプル アプリは ArcGIS Runtime SDK のライブラリを Nuget パッケージとして参照する方法を用いています。
ArcGIS Runtime SDK のライブラリをローカル環境にダウンロードしてお使いになりたい方は ローカル環境にダウンロードしてお使いになりたい方は [ドキュメント ダウンロード](http://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/documents/)のページにあるインストール ガイドをご覧ください。

なお、ArcGIS Runtime SDK を使用するには ArcGIS Online 開発者アカウントが必要です。作成方法は「[開発者アカウントの作成](../get-dev-account)」をご参照ください。

## サンプル プロジェクトのダウンロード

このリポジトリ（[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources)）には開発を試してみたい方向けのサンプル コードが含まれています。ダウンロードする際の方法は 2 通りあります。

* __リポジトリをご自身のアカウントに Fork（複製）__

 1. GitHub にログインして、[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Fork] をクリックすると、ご自身のアカウントに同じリポジトリが作成されます。
 1. Fork 後はご自身のローカル マシンにクローンを作成します。


* __zip ファイルでダウンロード（※GitHub アカウントをお持ちでない方向け）__

 [arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Download ZIP] をクリックするとプロジェクト ファイル一式が手に入ります。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-dotnet/sample-download.png" width="600px">

### 既知の制限
既知の問題により、ソリューションを正しくデバッグ実行するには、ソリューションのクローンもしくはダウンロード先のディレクトリパスに日本語などの 2 バイト文字を含めないでください（※ ArcGIS Runtime SDK for .NET を別途ご使用のマシンにインストールする場合は、この制限事項は適用されません）。

## 地図の表示

まずはダウンロードしたサンプル プロジェクトを実行してみましょう。
ここでは Windows デスクトップアプリケーション（WPF） の例で説明していますが、UWP、Xamarin でも同じアプリを実行することができます。

* __UWP__
　サンプル プロジェクト(arcgis-dev-resources/startup/dotnet/100.x/uwp/sample.sln)

* __Xamarin__
　サンプル プロジェクト(arcgis-dev-resources/startup/dotnet/100.x/xamarin/sample.sln)


1. ダウンロードしたサンプル プロジェクト（arcgis-dev-resources/startup/dotnet/100.x/desktop/sample.sln）を Visual Studio で開きます。

1. `mainWindow.xaml.cs` の 51 行目にある以下のコードの `<Web マップ ID>` と記載されている箇所に [Web マップの作成](../create-webmap)で作成した Web マップ ID を上書きします。

 ```C#
 var item = await PortalItem.CreateAsync(portal, "Web マップ ID");
 ```

 まだ Web マップを作成しておらず、すぐに試してみたい方は[サンプル Web マップ](https://www.arcgis.com/home/item.html?id=d3ee769333954213b2f7e894e8e1032c)をご利用ください。

1. サンプル プロジェクトを実行すると、以下のように地図が表示されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-dotnet/map-app.png" width="600px">

 Web マップを表示するには、ポータル サイトから指定した ID を持つ Web マップを取得し、MapView のマップとして表示します。

## 住所検索機能の追加

ArcGIS Online のジオコーディング サービスを利用した住所検索機能を追加します。[検索] ボタンをクリックすることで、テキスト ボックス内の文字列を使用して、住所検索を行うサンプルです。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-dotnet/Geocoording.png" width="300px">


1. MainWindow.xaml.cs に住所検索機能で使用する以下のメンバー変数を定義します。  

    - WORLD_GEOCODE_SERVICE_URL  
ArcGIS Online のジオコーディング サービスの URL です。ArcGIS for Developers の開発者はこのクラウド サービスを利用して住所検索を実行することができます。

    - onlineLocatorTask  
住所検索を実行するための OnlineLocatorTask クラスです。

 ```C#
  //ArcGIS Online ジオコーディングサービスの URL  
  private const string WORLD_GEOCODE_SERVICE_URL = "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";
  //住所検索用のジオコーディング タスク  
  private LocatorTask onlineLocatorTask;
 ```
 
1. メンバー変数として定義した OnlineLocatorTask クラスを初期化します。初期化時のパラメーターとして ArcGIS Online のジオコーディング サービスの URL を指定します。OnlineLocatorTask クラスが住所検索のリクエストを発行する際にこの URL が使用されます。

 ```C#
 //住所検索用のジオコーディング タスクを初期化
 onlineLocatorTask = await LocatorTask.CreateAsync(new Uri(WORLD_GEOCODE_SERVICE_URL));
 ```

1. 住所検索に使用する検索文字列などを指定する住所検索パラメーターを作成します。パラメーターの作成には GeocodeParameters クラスを使用します。
 
 ```C#
  //住所検索用のパラメータを作成  
  var geocodeParams = new GeocodeParameters
  {
      MaxResults = 5,
      OutputSpatialReference = SpatialReferences.WebMercator,
      CountryCode = "Japan",
      OutputLanguage = new System.Globalization.CultureInfo("ja-JP"),
  }; 
 ```
 
1. OnlineLocatorTask クラスの GeocodeAsync  非同期メソッドを使用して住所検索を実行します。パラメーターとして事前に作成した住所検索パラメーターを指定しています。
 
 ```C#
  //住所の検索  
  var resultCandidates = await onlineLocatorTask.GeocodeAsync(addressTextBox.Text, geocodeParams);
 ```

1. 住所検索を実行し結果の取得に成功したら、検索結果に対して地図上に表示するなどの何らかの処理を実行します。サンプル アプリケーションでは、ジオコーディング サービスから返された検索結果候補の一番最初の検索結果候補（最も一致していると思われる検索結果）を地図上に拡大表示します。
 
 ```C#
  //常に最初の候補を採用
  var candidate = resultCandidates.FirstOrDefault();                 
  
  //最初の候補からグラフィックを作成
  Graphic locatedPoint = new Graphic()
  {
      Geometry = candidate.DisplayLocation
  };

  //住所検索結果表示用のグラフィックスオーバーレイにグラフィックを追加
  geocodeResultGraphicsOverlay.Graphics.Add(locatedPoint);

  //追加したグラフィックの周辺に地図を拡大
  await MyMapView.SetViewpointCenterAsync((MapPoint)locatedPoint.Geometry, 36112);   
 ```
<img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-dotnet/SampleApp.gif" width="600px">

---

アプリの動作が確認できたら [ArcGIS の OAuth 認証について学びましょう！](../authentication)