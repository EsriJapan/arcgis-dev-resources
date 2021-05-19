+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Runtime SDK for iOS を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/ios/distribution-ios-100.x/"]
+++

ArcGIS Runtime SDK for iOS を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## API キーの設定
[ArcGIS Platform のロケーションサービス](../../../guide/services/)を使用する場合は、アプリで API キーを設定する必要があります。API キーの詳細は[API キーの取得](../../../guide/get-api-key/)を、APIキーの設定方法はアプリの作成の[API キーを設定する](../../../guide/create-app/create-startup-app-ios/#api-キーを設定する)をご覧ください。


## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
2. __[ライセンスの認証方法](#ライセンスの認証方法)__
  	* __[Lite ライセンスの認証方法](#lite-ライセンスの認証方法)__
  	* __[Basic ライセンスの認証方法](#basic-ライセンスの認証方法)__
  	* __[Standard ライセンスの認証方法](#standard-ライセンスの認証方法)__
  	* __[Analysis Extension ライセンスの認証方法](#analysis-extension-ライセンスの認証方法)__
3. __[ライセンスの認証](#ライセンスの認証)__
    * __[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)__
    * __[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)__
    * __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__

## 使用するライセンスの選択

ArcGIS Runtime SDK for iOS には Lite、Basic、Standard の 3 つのライセンス レベルと Analysis エクステンションがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示（2D/3D）<br>・フィーチャの表示/検索<br>・フィーチャのオンライン編集（パブリックなフィーチャ サービス）<br>・ルート検索/到達圏解析/最寄り施設検索<br>・住所検索/リバース ジオコーディング |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャのオンライン編集（セキュアなフィーチャ サービス）<br>・フィーチャのオフライン編集<br>・ArcGIS Online/Portal for ArcGIS のコンテンツの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・シェープファイルの表示/編集<br>・GeoPackage の表示/編集<br>・KML（ローカル ファイル）の表示<br>・ラスター データの表示/解析<br>・航海用電子海図（ENC）の表示 |
| Analysis Extension | ・Standard ライセンス以上で利用可能なエクステンション</br>・オフラインでの到達圏解析/最寄り施設検索 |

ライセンスの詳細は[ESRIジャパン製品ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-ios/details/license/)をご参照ください。

## ライセンスの認証方法

ライセンスの認証は次の2つの方法があります。

1. __ライセンスキーを使用した認証__
    * ライセンスキーを使用した認証は、ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証します。

2. __指定ユーザーによるアカウント認証__  
    * 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。
    * ログインを行う指定ユーザーアカウントのタイプによって関連付けられたライセンスのレベルが異なり、また認証はランタイムアプリにコードを含める必要があります。

### 指定ユーザーのユーザータイプとライセンスレベルの対比表

__■ ArcGIS Online または ArcGIS Enterprise バージョン 10.8 以降をご利用の場合__

| User Type | Runtime Level |
|:-----------|:------------|
| Viewer | Lite | 
| Editor / Field Worker | Basic |
| Creator / GIS Professional Basic | Standard <sup>※1</sup>  |
| GIS Professional Standard / GIS Professional Advanced | Advanced <sup>※1,2</sup> |

※1 Standard/Advanced は ArcGIS Runtime (Android/iOS/.NET) 100.7 以降から対応しております。
  
※2 ArcGIS Runtime SDK for iOS には Advanced ライセンスはありません。

__■ ArcGIS Enterprise 10.7 以前をご利用の場合__

| User Type | Runtime Level |
|:-----------|:------------|
| レベル1 または Viewer タイプ以上 | Lite | 
| レベル2 または Editor タイプ以上 | Basic |

### Lite ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Lite のライセンスキーを取得する必要があります
    * 認証の手順は、[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Lite ライセンスレベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Basic ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Basic の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Basic ライセンスレベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Standard ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Standard の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
注意：この認証は、ArcGIS Runtime 100.7 より以前のバージョンでは使用できません。また、Protal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Standard ライセンスレベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
    * 基本ライセンス（Standard）と併せて認証する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、ArcGIS Runtime 100.7 より以前のバージョンでは使用できません。また、Protal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Analysis アドオン ライセンス拡張機能を割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## ライセンスの認証

以下の認証に応じた作業を行ってください。

## Lite ライセンスキーを使用した認証
ArcGIS Runtime Lite のライセンスキーを ArcGIS Developers のサイトから取得し、取得したライセンスキーを利用して、アプリケーションを Lite ライセンスで認証することができます。
最初に以下の手順で Lite レベルのライセンスキーを取得します。

 1. [ArcGIS Developers: ArcGIS Runtime license](https://developers.arcgis.com/ios/license-and-deployment/#arcgis-runtime-license) ページにアクセスします。
    * ArcGIS Developers にサインインしてない場合は [Sign in to retrieve your Runtime license string] をクリックします。
    * ArcGIS 開発者アカウントでサインインします。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。
 2. 表示されたライセンスキーをコピーします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/distribution/lite_license.png" width="400px">
 3. 次に、アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

    ```swift
    // 取得したライセンス文字列でアプリのライセンスを設定します
    do {
      let result = try AGSArcGISRuntimeEnvironment.setLicenseKey("runtimelite,1000,rud#########,none,####################")
      print("License Result : \(result.licenseStatus)")
    }
    catch let error as NSError {
      print("error: \(error)")
    }
    ```

## 配布パックのライセンスキーを使用した認証

ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

ArcGIS Runtime の配布パックの購入については[ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

```swift
// 取得したライセンス文字列でアプリのライセンスを設定します
do {
  let result = try AGSArcGISRuntimeEnvironment.setLicenseKey("runtimestandard,1000,rud#########,day-month-year,####################")
  print("License Result : \(result.licenseStatus)")
}
catch let error as NSError {
  print("error: \(error)")
}
```

Analysis Extension ライセンスを認証する場合は以下のコードを使用します。

```swift
// 基本ライセンスとエクステンション ライセンスのリストを設定します
do {
  let result = try AGSArcGISRuntimeEnvironment.setLicenseKey("runtimestandard,1000,rud#########,day-month-year,####################", extensions: ["runtimeanalysis,1000,rud#########,day-month-year,####################"])
  print("License Result : \(result.licenseStatus)")
}
catch let error as NSError {
  print("error: \(error)")
}
```

## 指定ユーザー アカウントを使用した認証
アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する ArcGIS Online 組織向けプランもしくは Portal for ArcGIS の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してライセンスを取得します。プロセスの一環として、アプリがオフライン環境で最大 30日 間使用されることに備えて、ライセンス情報を保存します。
 
認証方法の詳細については、「[License your app with a named user account（英語）](https://developers.arcgis.com/ios/license-and-deployment/license/#license-your-app-with-a-named-user-account)」や「[Security and authentication（英語）](https://developers.arcgis.com/ios/security-and-authentication/)」も併せてご覧ください。

```swift
// Portal クラスを作成し、指定ユーザーが資格情報を提供するようにします
let theURL = URL(string: "https://www.arcgis.com")

// 指定ユーザーが資格情報を使用してログインするように要求します
self.portal = AGSPortal(url: theURL!, loginRequired: true)

// ポータルをロードします
self.portal.load { (error) in
 if let error = error {
  print(error)
 }
 else {

  // ポータルからユーザーのライセンス情報を取得します
  self.portal.fetchLicenseInfo { (licenseInfo, error) in

    if let error = error {
     print("ユーザーのライセンスの取得中にエラーが発生しました... \(error)")
     return
    }

     // 指定ユーザーの licenseInfo を使用してライセンスを設定します
    do {
      let result = try AGSArcGISRuntimeEnvironment.setLicenseInfo(licenseInfo!)
    }
    catch let error as NSError {
     print("error: \(error.localizedDescription)")
    }

    // これでアプリがライセンス認証されました

    // アプリを起動してオフラインでライセンスを取得できるように、ライセンス情報を保存します
    // この例では、licenseDictionary をキーチェーンに保存します

    var licenseDictionary: NSDictionary?

    do {licenseDictionary = try licenseInfo?.toJSON() as! NSDictionary?
    } catch {
     print("LicenseInfo は利用できません")
    }

    let keychainItem = AGSKeychainItem(identifier: "com.your_org.your_app_name", accessGroup: nil, acrossDevices: false)
    keychainItem.writeObject(toKeychain: licenseDictionary!, completion: { (writeError) in
     if let error = writeError {
      print("キーチェーンへの書き込み中にエラーが発生しました... \(error)")
     }
    })
   }
  }
}
```

注意：上記のコードスニペットは、ArcGIS Runtime 100.7 で導入された新しい [fetchLicenseInfoWithCompletion()](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_portal.html#ad2b77a629b46bc2ce5c12875f8fda607) API を使用しています。バージョン 100.6 以前では AGSPortal.portalInfo.licenseInfo を使用します。

ライセンス情報をローカルストレージに保存した場合、保存したライセンス情報を使用して、オフライン環境でアプリを起動してライセンスを取得できます。ストレージからライセンスを取得し、アプリのライセンスを取得します。

```swift
// キーチェーンを取得します
let keychainItem = AGSKeychainItem(identifier: "com.your_org.your_app_name", accessGroup: nil, acrossDevices: false)

// キーチェーンからライセンスの JSON を取得します
let licenseDictionary = keychainItem.readObjectFromKeychain() as? NSDictionary

// JSON からライセンス情報を作成します
let licenseInfo = try! AGSLicenseInfo.fromJSON(licenseDictionary!) as? AGSLicenseInfo

// ライセンス情報を使用してアプリのライセンスを設定します
AGSArcGISRuntimeEnvironment.setLicenseInfo(licenseInfo!, error: errorPointer)
```
