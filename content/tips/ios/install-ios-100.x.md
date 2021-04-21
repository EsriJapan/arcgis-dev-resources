+++
title = "インストール ガイド"
description = "ArcGIS Runtime SDK for iOS のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/ios/install-ios-100.x/"]
+++

このインストール ガイドでは、ArcGIS Runtime SDK for iOS のインストールとセットアップ手順を紹介します。インストールを進める前に、ご使用のマシン（macOS）に Xcode をインストールしてください。

ArcGIS Runtime SDK for iOS がサポートする最新の動作環境につきましては[動作環境](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/environments/)をご覧ください。

マップを表示する方法については「[アプリの作成](../create-app/create-startup-app-ios/)」のチュートリアルをご覧ください。

# インストールとセットアップ
Xcode プロジェクトに API をインストールして使用する方法は2つあります。手動でダウンロードしてインストールするか、CocoaPods を使用できます。

* [手動でダウンロードする](#手動でダウンロードする)
* [CocoaPods を使用する](#cocoapods-を使用する)

## 手動でダウンロードする
手動ダウンロードは、すべての iOS プロジェクト用に一度だけ API をインストールします。

1. SDK パッケージ インストーラーを[ダウンロード](https://developers.arcgis.com/downloads/#ios)します。

    ダウンロードには ArcGIS 開発者アカウントが必要です。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../get-dev-account/)」をご覧ください。

2. ${HOME}/Library フォルダへの書き込み権限があることを確認してください。
3. マシンに以前のバージョンの ArcGIS Runtime SK for iOS がインストールされている場合は、それをアンインストールします。アンインストールしないと、以前のインストールが上書きされます。アンインストールするには、ターミナル アプリケーションで ${HOME}/Library/Application Support/AGSiOSRuntimeSDK/uninstallAGSiOSSDK スクリプトを実行します。
4. SDK をダウンロードしたら、ダウンロードした .pkg ファイルをダブルクリックします。インストール ウィザードの指示に従って、インストール手順を完了します。
5. [プロジェクトを構成する](#プロジェクトを構成する)ための追加の手順を実施します。
6. デフォルトでは、SDK は ${HOME}/Library/SDKs/ArcGIS にインストールされます。このフォルダーには、Frameworks、Legal、Samples のサブフォルダーが含まれています。

Samples フォルダーに移動し、Objective-C または Swift サンプルのいずれかを実行して、すべてがマシンに正しくインストールされていることを確認できます。

注：${HOME}/Library フォルダは、デフォルトでは非表示になっています。ターミナル アプリケーションで chflags nohidden ~/Library/ コマンドを実行することで表示できます。

インストールエラーが発生した場合は、/var/log/install.log の install.log ファイルで詳細を確認してください。失敗の一般的な理由は、ダウンロード中にインストール パッケージが破損することです。パッケージをもう一度ダウンロードしてみてください。まれに、インストーラーがインストール中にユーザー名/パスワードを要求する場合があります。これが発生すると、インストーラーは正常に終了しますが、SDK はホームディレクトリではなくルートディレクトリにインストールされます。この問題を解決するには、SDKs フォルダをルート /Library ディレクトリからユーザープロファイルの $HOME/Library ディレクトリに手動でコピーします。

## CocoaPods を使用する
[公開済みの CocoaPod](https://cocoapods.org/pods/ArcGIS-Runtime-SDK-iOS) を利用できます。CocoaPods を初めて使用する場合は、[CocoaPods の使用方法](https://cocoapods.org/)を確認してから、次の手順に従って iOS プロジェクト内でこの Pod を使用してください。

1. プロジェクトの Podfile に下記を追加します。
    ```swift  
    pod 'ArcGIS-Runtime-SDK-iOS', '100.10'
    ```

2. ターミナル アプリケーションを使用して、Podfile 上で pod install コマンドを実行します。これにより、ArcGIS フレームワークがマシンにダウンロードされ、プロジェクトの Pod ディレクトリ内に配置されます。また、ArcGIS フレームワークを正しく参照するために、プロジェクトのビルド設定に必要な変更が加えられて、新しい Xcode ワークスペース（.xcworkspace ファイル）を作成されます。

ArcGIS の API を使用するには、新しく作成した Xcode ワークスペースを開き、次のインポートステートメントを任意の Swift コード（.swift）ファイルに追加します。

```swift  
import ArcGIS
```

## プロジェクトを構成する
この手順は、SDK を手動でインストールした場合のみ必要です。CocoaPods を使用してインストールしている場合は、この手順は不要です。
SDK を手動でインストールした後に、API を使用するために各 Xcode プロジェクトを構成します。

### プロジェクトに ArcGIS フレームワークを追加する

1. Xcode プロジェクトを開くか、新しいプロジェクトを作成します。

2. 左側の Navigator ペインでプロジェクト名を選択して、[TARGETS (プロジェクト名)] > [General] タブを選択します。

 1. [Frameworks, Libraries, and Embedded Content] セクションに $(HOME)/Library/SDKs/ArcGIS/Frameworks ディレクトリにある ArcGIS.xcframework ファイルをドラッグアンドドロップします。

    <img src="https://developers.arcgis.com/ios/61ceaf5d25107c3daad81c9afde9d4ed/get-started-xcode-framework.gif" width="650px">

注：${HOME}/Library フォルダは、デフォルトでは非表示になっています。ターミナル アプリケーションで chflags nohidden ~/Library/ コマンドを実行して表示するか、Finder メニューの [移動] > [フォルダへ移動] を使用して移動することもできます。

以上でプロジェクトの構成は完了です。ArcGIS の API を使用するには、次のインポートステートメントを任意の Swift コード（.swift）ファイルに追加します。

```swift  
import ArcGIS
```
