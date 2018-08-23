
このインストール ガイドでは、初めて ArcGIS Runtime SDK for iOS を使用してモバイル マッピング アプリケーションを構築する開発者の方に最も基本的な開発手順を紹介します。

このインストール ガイドをお読み頂くことで、ArcGIS Runtime SDK for iOS を使用したモバイル マッピング アプリケーション開発の基礎を理解することができます。


## ArcGIS Runtime SDK for iOS とは

ArcGIS Runtime SDK for iOS を使うと ArcGIS の機能を iOS のネイティブ アプリケーションとして実装することができます。

この SDK には API やリファレンス、サンプルコードなどが含まれています。
詳細は [ArcGIS Runtime SDK for iOS](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/) をご参照ください。

## ArcGIS Runtime SDK for iOS の開発環境

ここでは次の開発環境にて ArcGIS Runtime SDK for iOS を用いたモバイル マッピング アプリケーションの開発手順を説明します。

開発手順を進める前に以下の開発環境をご使用のマシンにセットアップしてください。

*	High Sierra (macOS 10.13) または Sierra (macOS 10.12)
*	Xcode 9 (iOS SDK 11)

ArcGIS Runtime SDK for iOS がサポートする最新の動作環境につきましては[動作環境](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/environments/)をご参照ください。

## モバイル マッピング アプリケーションの開発

ここでは、ArcGIS Runtime SDK for iOS を使ってモバイル マッピング アプリケーションを作成するための基本的な手順を説明します。

* __[プロジェクトの作成](#プロジェクトの作成)__
* __[ArcGIS Runtime SDK の設定](#arcgis-runtime-sdk-の設定)__
* __[地図表示の実装](#地図表示の実装)__
* __[モバイル マッピング アプリケーションの実行](#モバイル-マッピング-アプリケーションの実行)__

## プロジェクトの作成

まず Xcode 上に新しいプロジェクトを作成します。

1.	Xcode を起動して、表示されたダイアログで [Create a new Xcode project] をクリックします。

1.	[Single View App] テンプレートを選択して、[Next] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/project01.png" width="450px">

1.	[Product Name] に `sample` と入力し、[Next] をクリックします（[Language] に `Swift` が選択されていることを確認してください）。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/project02.png" width="450px">

1.	プロジェクトの作成場所を指定して、[Create] をクリックするとプロジェクトが作成されます。

## ArcGIS Runtime SDK の設定
次に ArcGIS Runtime SDK for iOS の API を使えるようにするための設定を行います。設定を行うには2つの方法があります。

* __[CocoaPods を使用して Xcode ワークスペースに SDK をインストールする](#cocoapods-を使用して-sdk-をインストールする)__
* __[macOS の共通ディレクトリに SDK をインストールし、Xcode プロジェクトに SDK へのリンクを手動で設定する](#sdk-を手動でインストールする)__

### CocoaPods を使用して SDK をインストールする
ArcGIS Runtime SDK for iOS は、[CocoaPods](https://cocoapods.org/) を利用してインストールできます（CocoaPods のインストール等で問題が発生した場合は、[Troubleshooting](https://guides.cocoapods.org/using/troubleshooting#installing-cocoapods) のページをご参照ください）。

1.	CocoaPods を開発に使用するマシンにインストールします。ターミナル アプリケーションを開き、以下のコマンドを実行します。

 ```none
$ sudo gem install cocoapods
```

1.	__[プロジェクトの作成](#プロジェクトの作成)__ で作成したプロジェクトに [Empty] テンプレート ファイルを追加し、ファイル名を `Podfile` とします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/cocoapods01.png" width="450px">

  <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/cocoapods02.png" width="450px">

1.	追加した `Podfile` に以下のコードを書いて保存します。

 ```none
target '<プロジェクト名>' do
use_frameworks!
pod 'ArcGIS-Runtime-SDK-iOS', '100.3'
end
```

1.	ターミナル アプリケーションで、cd コマンドを使用して作成したプロジェクト ファイルのルートフォルダーに移動します。

 ```none
$ cd /<プロジェクト フォルダーのパス>/
```

1.	以下のコマンドを実行して、CocoaPods をセットアップします。

 ```none
$ pod setup
```

1.	CocoaPods のセットアップに成功したら、以下のコマンドを実行して、ArcGIS Runtime SDK for iOS をインストールします。これにより ArcGIS フレームワークがマシンにダウンロードされ、プロジェクトの Pods ディレクトリに配置されます。また、ArcGIS フレームワークを正しく参照するために、必要な変更が自動で設定されます。

 ```none
pod install
```

1.	Xcode プロジェクトを一度閉じて、プロジェクト フォルダを参照し、新しく作成されたワークスペース ファイル（.xcworkspace）を開きます。

### SDK を手動でインストールする
マシンに手動で SDK をインストールして、すべてのプロジェクトで使用できる場所に配置することができます。

#### SDK のインストール

1.	ArcGIS for Developers サイトの[ダウンロード ページ](https://developers.arcgis.com/en/downloads)から SDK をダウンロードします。

1.	ArcGIS for Developers の認証ページに遷移します。ArcGIS for Developers の開発者アカウント情報を入力してサインインして下さい。ArcGIS for Developers 開発者アカウントを お持ちでない方は、ArcGIS for Developers 開発リソース集の[開発者アカウントの作成](https://esrijapan.github.io/arcgis-dev-resources/get-dev-account/)を参考にしてアカウントを作成してください。

1. 表示された画面で ArcGIS Runtime SDK for iOS の [Download] ボタンをクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/manual01.png" width="450px">

1.	ダウンロードした .pkg ファイルをダブルクリックし、表示された画面に従って SDK をインストールします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/manual02.png" width="350px">

  * `${HOME}/Library` フォルダへの書き込み権限があることを確認してください。
  *	マシンに以前のバージョンの ArcGIS Runtime SDK for iOS をインストールしている場合は、アンインストールしてください。アンインストールするには、ターミナル アプリケーションで、`${HOME}/Library/Application Support/AGSiOSRuntimeSDK` にある `uninstallAGSiOSSDK` スクリプトをダブルクリックして実行してください。

#### Xcode プロジェクトの設定
SDK を手動でインストールした場合、各 Xcode プロジェクトで API を使用できるように設定を行う必要があります。設定項目は以下です。

 * __[ArcGIS フレームワークの追加](#arcgis-フレームワークの追加)__
 * __[ビルド フラグの追加](#ビルド-フラグの追加)__
 * __[関連ライブラリの設定](#関連ライブラリの設定)__
 * __[ArcGIS リソース バンドルの追加](#arcgis-リソース-バンドルの追加)__

##### ArcGIS フレームワークの追加

 1. __[プロジェクトの作成](#プロジェクトの作成)__ で作成した Xcode プロジェクトの Project Navigator でプロジェクト名を選択して、[TARGETS (プロジェクト名)] を選択します。

 1. [Build Settings] タブを開きます。

 1. [Framework Search Paths] セクションに `$(HOME)/Library/SDKs/ArcGIS/iOS/Frameworks/Static` と入力します。

  <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/manual03.png" width="650px">

##### ビルド フラグの追加
 [Build Settings] タブにある [Other Linker Flags] セクションに `-ObjC -framework ArcGIS -l c++`と入力します。

  <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/manual04.png" width="650px">

##### 関連ライブラリの設定
[Build Settings] タブにある [Enable Modules (C and Objective-C)] セクションで `Yes` を設定します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/manual05.png" width="650px">

##### ArcGIS リソース バンドルの追加
Esri ロゴ、GPS 位置のシンボル、ローカライズされた文字列などのリソースは、ArcGIS.bundle ファイルに含まれています。この ArcGIS リソース バンドルをプロジェクトに追加するには、次の手順を実行します。

1.	Xcode アプリケーションのメニューで、[File] → [Add Files to <プロジェクト名>] を選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/manual06.png" width="350px">

1. 	`${HOME}/Library/SDKs/ArcGIS/iOS/Frameworks/Static/ArcGIS.framework/Versions/Current/Resources` フォルダを参照します。

1. ArcGIS.bundle ファイルを選択し、[Add] をクリックします。
 * `${HOME}/Library` フォルダはデフォルトで非表示になっています。ターミナル アプリケーションで以下のコマンドを入力して、フォルダを表示することができます。

    ```none
 $ chflags nohidden ~/Library/
```

これでモバイル マッピング アプリケーションを開発するための準備が整いました。

## 地図表示の実装
ArcGIS の機能を実装する準備ができたので、アプリケーションに ArcGIS Online のベースマップを表示するための実装を加えます。


1.	最初に ArcGIS Runtime SDK for iOS の API を使用できるようにするために、import 文を追加します。Project Navigator で「ViewController.swift」ファイルを選択して、下記のようにコードを記述します。

 ```javascript
import ArcGIS
```

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/develop01.png" width="450px">

1.	Project Navigator で `Main.storyboard` ファイルを選択します。

1.	View Controller にデフォルトで追加されている `View` オブジェクトを選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/develop02.png" width="650px">

1.	Identity Inspector を開き [Custom Class] セクションの [Class] で `AGSMapView` と入力し、[return] キーを押して `View` オブジェクトの名前が `Map View` に変わったことを確認します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/develop03.png" width="650px">

1.	ツールバーで Assistant Editor を選択し、`Main.storyboard` ファイルと `ViewController.h` ファイルを表示します。

1.	`View (Map View)` オブジェクトを [control] キーを押しながら `ViewController.swift` ファイル上にドラッグ&ドロップします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/develop04.png" width="650px">

1.	表示されたダイアログで [Name] に `mapView`（任意の値で構いません）と入力し、[Connect] ボタンをクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/develop05.png" width="350px">

1.	ViewController.swift に IBOutlet 宣言が追加されます。

1.	Project Navigator で `ViewController.swift` ファイルを選択し、`viewDidLoad` メソッド内で下記のようにコードを記述します。下記のコードでは、地図の種類（道路地図）、初期表示の中心位置（緯度・経度）、ズームレベルを指定して地図を表示します。

 ```javascript
self.mapView.map = AGSMap(basemapType: .streets, latitude: 35.658581,  longitude: 139.745433, levelOfDetail: 18)
```

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/develop06.png" width="650px">

## モバイル マッピング アプリケーションの実行
ベースマップを表示するアプリケーションが作成できたので iOS シミュレータにインストールして実行します。

1.	Xcode のツールバーで、適当な端末を選択し [Run] をクリックして、iOS シミュレータでプロジェクトをデバッグします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/application01.png" width="350px">

1.	iOS シミュレータ上でアプリケーションが起動し、地図が表示されます。スワイプやピンチイン/ピンチアウトで地図を移動したり拡大/縮小したりすることができます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-ios/application02.png" width="200px">
