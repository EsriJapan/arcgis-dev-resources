+++
title = "Android"
description = "ArcGIS Runtime SDK for Android を用いたモバイル地図アプリの作成方法を紹介します。"
Weight=3
aliases = ["/create-startup-app-android/"]
+++

## 開発環境

ArcGIS Runtime SDK for Android は Android Strdio に対応しています。開発環境は Android Studio をご用意ください。

またこの後使用するサンプル アプリは ArcGIS Runtime SDK のライブラリを Android Library プロジェクトとして参照する方法を用いています。
ArcGIS Runtime SDK のライブラリをローカル環境にダウンロードしてお使いになりたい方はこちらの [SDK download](https://developers.arcgis.com/android/latest/guide/install-and-set-up.htm#ESRI_SECTION1_4108D3B809C54DD4A0BD37E6397EBFA8)（英語）手順をご覧ください。

なお、ArcGIS Runtime SDK を使用するには ArcGIS Online 開発者アカウントが必要です。作成方法は「[開発者アカウントの作成](../get-dev-account)」をご参照ください。


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

 1. ダウンロードしたサンプル プロジェクト（arcgis-dev-resources/startup/android/100.x/map）を Android Studio で開きます。
 1. `MainActivity.java` の 23 行目の `<Web マップ ID>` と記載されている箇所に [Web マップの作成](../create-webmap)で作成した Web マップ ID を上書きします。32 行目の以下のコードでは、上で設定した Web マップ ID を含んだ WebMap の URL で ArcGISMap オブジェクトを作成します。
 ```java
  mArcGISMap = new ArcGISMap("http://www.arcgis.com/home/item.html?id=<Web マップ ID>");
 ```
 まだ Web マップを作成しておらず、すぐに試してみたい方は[サンプル Web マップ](https://www.arcgis.com/home/item.html?id=d3ffea931f4a455f9c3b6c2102e66eda)をご利用ください。
 1. サンプル プロジェクトを実行すると、以下のように地図が表示されます。
 <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/startup-android/WebMap.png" width="200px">

 Web マップを表示するには、最初に地図を表示するビュー（MapView クラス）を作成し、作成したビュー上で Web マップを開きます。

## 現在位置の表示

Android の位置情報サービスと連携し、端末の現在位置を地図上に表示します。

 <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/startup-android/GPS.png" width="200px">

以下に倣ってソース コードを修正・追加してみてください。

 1. 現在位置の変化を受け取るための [LocationChangedListener](https://developers.arcgis.com/android/latest/api-reference/reference/com/esri/arcgisruntime/mapping/view/LocationDisplay.LocationChangedListener.html) を実装します。今回はすでに実装してあるコードを有効化します。
 `MainActivity.java` の 35 行目から 50 行目までのコメント化されたコードをコメント解除してください。（コメント解除したい範囲を選択して `Ctrl + /` を押下）
 ```java
    // LocationListner を実装
    private class MyLocationListener implements LocationDisplay.LocationChangedListener{

        public MyLocationListener(){
            super();
        }
        @Override
        public void onLocationChanged(LocationDisplay.LocationChangedEvent locationChangedEvent) {

            if(locationChangedEvent == null){
                return;
            }
            // 現在地を取得し、表示縮尺を設定して現在位置へズーム
            Viewpoint viewpoint = new Viewpoint(locationChangedEvent.getLocation().getPosition(),1000.0);
            mMapView.setViewpointAsync(viewpoint);

        }
    }
```

1. `onCreate` メソッドの 27 ～ 31 行目のコメントを解除してください。現在地を取得するためのコードを定義しています。
 ```java
 // MapView 上に現在位置を表示するために LocationDisplay を取得
 mLocationDisplay = mMapView.getLocationDisplay();
 // LocationDisplay に LocationListner を設定
 mLocationDisplay.addLocationChangedListener(new MyLocationListener());
 // 現在位置の表示を開始
 mLocationDisplay.startAsync();
 ```

---

アプリの動作が確認できたら [ArcGIS の OAuth 認証について学びましょう！](../../authentication)
