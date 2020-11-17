+++
title = "スタートアップ ガイド（10.2.x）"
description = ""
weight = 5
hidden = true
aliases = ["/ios/create-startup-app-ios10.2/"]
+++

## SDK のインストール

ArcGIS Runtime SDK for iOS のライブラリをインストールします。

1. [SDK のダウンロードページ](https://developers.arcgis.com/downloads) にアクセスします（[開発者アカウント](../../../guide/create-map/get-dev-account) でサインインします）。
1. ArcGIS Runtime SDK for iOS の箇所の [Download] をクリックして、インストーラーをダウンロードします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-ios/sdk-download.png" width="450px">
1. ダウンロードしたインストーラー（.pkg ファイル）を実行して SDK をインストールします。

## サンプル プロジェクトのダウンロード

このリポジトリ（[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources)）には開発を試してみたい方向けのサンプル コードが含まれています。ダウンロードする際の方法は 2 通りあります。

* __リポジトリをご自身のアカウントに Fork（複製）__

 1. GitHub にログインして、[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Fork] をクリックすると、ご自身のアカウントに同じリポジトリが作成されます。
 1. Fork 後はご自身のローカル マシンにクローンを作成します。


* __zip ファイルでダウンロード（※GitHub アカウントをお持ちでない方向け）__

 [arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Download ZIP] をクリックするとプロジェクト ファイル一式が手に入ります。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-ios/sample-download.png" width="600px">

## 地図の表示

まずはダウンロードしたサンプル プロジェクトを実行してみましょう。

 1. ダウンロードしたサンプル プロジェクト（arcgis-dev-resources/startup/ios/map/sample.xcodeproj）を Xcode で開きます。
 1. `ViewController.swift` の 24 行目にある以下のコードの `<Web マップ ID>` と記載されている箇所に [Web マップの作成](../../../guide/create-map/create-webmap) で作成した Web マップ ID を上書きします。  

     ```javascript
     webmap = AGSWebMap(itemId: "<Web マップ ID>", credential: nil)
     ```
   まだ Web マップを作成しておらず、すぐに試してみたい方は[サンプル Web マップ](https://www.arcgis.com/home/item.html?id=d3ffea931f4a455f9c3b6c2102e66eda)をご利用ください。  
 1. サンプル プロジェクトを実行すると、以下のように地図が表示されます。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-ios/map-app.png" width="200px">
 Web マップを表示するには、最初に地図を表示するビュー（AGSMapView クラス）を作成し、作成したビュー上で Web マップを開きます。

## 現在位置の表示

iOS の位置情報サービスと連携し、端末の現在位置を地図上に表示します。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-ios/location-app.png" width="200px">

 1. 地図の読み込みが完了したイベントをハンドリングするために、デリゲート プロトコル(`AGSMapViewLayerDelegate`)
を宣言します。`ViewController.swift` の 13 行目を以下のコードに置き換えます。

     ```javascript
     // デリゲート プロトコルの宣言
     class ViewController: UIViewController, AGSMapViewLayerDelegate {
     ```
 1. 地図の読み込みのデリゲートを自身に設定します。`viewDidLoad()` 関数の最後に以下のコードを追加します。
     ```javascript
      // AGSMapView のデリゲートを自身に設定
     mapView.layerDelegate = self
     ```
1. 地図の読み込み完了時に実行されるデリゲート メソッド内に現在位置を表示する処理を記述します。`ViewController.swift` に以下のコードを記述します。
     ```javascript
      // AGSMapView のデリゲート メソッド（地図の読み込み完了時に実行）
      func mapViewDidLoad(_ mapView: AGSMapView!) {

          // 位置情報の表示モードを設定
          mapView.locationDisplay.autoPanMode = .default

          // 地図が現在位置にズームされる際の表示縮尺の設定
          mapView.locationDisplay.zoomScale = 100000

          // 現在位置の表示を開始
          mapView.locationDisplay.startDataSource()

      }
     ```
1. プロジェクトを実行すると、以下のように現在位置を表す青い丸のシンボルが地図上に表示されます。
位置情報の表示モードについては[ナビゲーションに便利な位置情報の表示モード](https://geonet.esri.com/docs/DOC-6533)をご覧ください。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-ios/location-app.gif" width="200px">

 シミュレータで実行する場合は、iOS シミュレータの [Debug] → [Location] メニューで設定することで、端末の位置情報を擬似表現できます。

 アプリが起動すると「マップ上での現在位置確認に位置情報サービスを使用します。」と位置情報サービスの使用を確認するメッセージが表示されます。このメッセージはサンプル プロジェクトの `Info.plist` ファイルの `NSLocationWhenInUseUsageDescription` プロパティで設定できます。

---

アプリの動作が確認できたら [ArcGIS の OAuth 認証について学びましょう！](../../authentication)
