+++
title = "スタートアップ ガイド（10.2.x）"
description = ""
weight = 5
hidden = true
aliases = ["/android/create-startup-app-android10.2/"]
+++

## 開発環境

ArcGIS Runtime SDK for Android は Android Strdio に対応しています。開発環境は Android Studio をご用意ください。

またこの後使用するサンプル アプリは ArcGIS Runtime SDK のライブラリを Android Library プロジェクトとして参照する方法を用いています。
ArcGIS Runtime SDK のライブラリをローカル環境にダウンロードしてお使いになりたい方はこちらの [The SDK download](https://developers.arcgis.com/android/guide/install-and-set-up.htm#ESRI_SECTION1_4108D3B809C54DD4A0BD37E6397EBFA8)（英語）手順をご覧ください。

なお、ArcGIS Runtime SDK を使用するには ArcGIS Online 開発者アカウントが必要です。作成方法は「[開発者アカウントの作成](../../get-dev-account)」をご参照ください。


## サンプル プロジェクトのダウンロード

このリポジトリ（[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources)）には開発を試してみたい方向けのサンプル コードが含まれています。ダウンロードする方法は 2 通りあります。

* __リポジトリをご自身のアカウントに Fork（複製）__
  1. GitHub にログインして、[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Fork] をクリックすると、ご自身のアカウントに同じリポジトリが作成されます。
  1. Fork 後はご自身のローカル マシンにクローンを作成します。

* __zip ファイルでダウンロード（※GitHub アカウントをお持ちでない方向け）__

 [arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Download ZIP] をクリックするとプロジェクト ファイル一式が手に入ります。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-ios/sample-download.png" width="600px">

## 地図の表示

まずはダウンロードしたサンプル プロジェクトを実行してみましょう。

1. ダウンロードしたサンプル プロジェクト（arcgis-dev-resources/startup/android/map）を Android Studio で開きます。

1. `MainActivity.java` の 30 行目の `<Web マップ ID>` と記載されている箇所に [Web マップの作成](../../create-webmap)で作成した Web マップ ID を上書きします。32 行目の以下のコードでは、上で設定した Web マップ ID を含んだ WebMap の URL を MapView へ受け渡しています。
 ```java
  mapView = new MapView(this, webmapUrl, "", "");
 ```

 まだ Web マップを作成しておらず、すぐに試してみたい方は[サンプル Web マップ](https://www.arcgis.com/home/item.html?id=d3ffea931f4a455f9c3b6c2102e66eda)をご利用ください。

1. サンプル プロジェクトを実行すると、以下のように地図が表示されます。

 <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/startup-android/WebMap.png" width="200px">

 Web マップを表示するには、最初に地図を表示するビュー（MapView クラス）を作成し、作成したビュー上で Web マップを開きます。

## 現在位置の表示

Android の位置情報サービスと連携し、端末の現在位置を地図上に表示します。

 <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/startup-android/GPS.png" width="200px">

では以下に倣ってソース コードを修正・追加してみてください。

1. 現在位置の変化を受け取るための [LocationListner](http://developer.android.com/intl/ja/reference/android/location/LocationListener.html) を実装します。今回はすでに実装してあるコードを有効化します。
 `MainActivity.java` の 41 行目から 70 行目までのコメント化されたコードをコメント解除してください。（コメント解除したい範囲を選択して `Ctrl + /` を押下）
 ```java
  // LocationListner を実装
  private class MyLocationListener implements LocationListener {

    public MyLocationListener() {
      super();
    }
    Point mLocation = null;
    SpatialReference wm = SpatialReference.create(102100);
    SpatialReference egs = SpatialReference.create(4326);

    public void onLocationChanged(Location loc) {
      if (loc == null)
        return;
      // 現在位置を取得する
      mLocation = new Point(loc.getLongitude(), loc.getLatitude());
      Point point = (Point) GeometryEngine.project(mLocation, egs, wm);
      // 表示縮尺を設定して現在位置へズーム
      mapView.zoomToResolution(point, 20.0);
    }

    public void onProviderDisabled(String provider) {
    }

    public void onProviderEnabled(String provider) {
    }

    public void onStatusChanged(String provider, int status, Bundle extras) {
    }

  }
```
 この中で現在位置を取得しています。

1. `onCreate` メソッド（38 行目）へ以下のコードを追加します。
 ```java
  // MapView 上に現在位置を表示するために LocationDisplayManager を取得
  LocationDisplayManager locationDisplayManager;
  locationDisplayManager = mapView.getLocationDisplayManager();
  // LocationDisplayManager に LocationListner を設定
  locationDisplayManager.setLocationListener(new MyLocationListener());
  // 現在位置を中央にして地図を表示する設定
  locationDisplayManager.setAutoPanMode(LocationDisplayManager.AutoPanMode.LOCATION);
  // 現在位置の表示を開始
  locationDisplayManager.start();
 ```

1. プロジェクトを実行すると、以下のように現在位置を表す青い丸のシンボルが地図上に表示されます。
  <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/startup-android/Android_GPS.gif" width="230px">

 エミュレータで実行する場合は以下の要領で位置情報を疑似的に有効にします。
 2. Android Studio の [Tools] → [Android] → [Android Device Monitor] を選択し、Android Device Monitor を起動します。
 2. 左側の Devices タブで該当のエミュレータ名をクリックして選択し、右側の Emulator Control タブをクリックします。
 2. 下の方に Location Controls というセクションがあるので、その中の Manual タブを選択します。
 2. Longitude（経度）とLatitude（緯度）へ任意の値を入力します。

---

アプリの動作が確認できたら [ArcGIS の OAuth 認証について学びましょう！](../../authentication)
