+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Maps SDK for Swift を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/ios/distribution-ios-200.x/"]
+++

ArcGIS Maps SDK for Swift (バージョン 200.x) を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## API キーの設定
[ArcGIS Location Platform のロケーションサービス](../../../guide/services/)を使用する場合は、アプリで API キーを設定する必要があります。API キーの詳細は[API キーの取得](../../../guide/get-api-key/)を、APIキーの設定方法はアプリの作成の[API キーを設定する](../../../guide/create-app/create-startup-app-ios/#api-キーを設定する)をご覧ください。


## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
2. __[ライセンスの認証方法](#ライセンスの認証方法)__
  	* __[Lite ライセンスの認証方法](#lite-ライセンスの認証方法)__
  	* __[Basic ライセンスの認証方法](#basic-ライセンスの認証方法)__
  	* __[Standard ライセンスの認証方法](#standard-ライセンスの認証方法)__
  	* __[Analysis Extension ライセンスの認証方法](#analysis-extension-ライセンスの認証方法)__
    * __[Advanced Editing Extension ライセンスの認証方法](#advanced-editing-extension-ライセンスの認証方法)__


3. __[ライセンスの認証](#ライセンスの認証)__
    * __[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)__
    * __[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)__
    * __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__

## 使用するライセンスの選択

ArcGIS Maps SDK for Swift には Lite、Basic、Standard の 3 つのライセンス レベルと Analysis エクステンションがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示（2D/3D）<br>・フィーチャの表示/検索<br>・フィーチャのオンライン/オフライン編集（ArcGIS Online/ArcGIS Enterprise のパブリックなフィーチャ サービス、ArcGIS Location Platform のフィーチャサービス）<br>・ルート検索/到達圏解析/最寄り施設検索<br>・住所検索/リバース ジオコーディング<br>・ユーティリティ ネットワークのトレース  |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャのオンライン/オフライン編集（ArcGIS Online/ArcGIS Enterprise のセキュアなフィーチャ サービス）<br>・モバイル ジオデータベースの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・シェープファイルの表示/編集<br>・GeoPackage の表示/編集<br>・KML（ローカル ファイル）の表示/編集<br>・ラスター データの表示/解析<br>・航海用電子海図（ENC）の表示<br>・3D 解析 |
| Analysis Extension | ・Standard ライセンスで利用可能なエクステンション</br>・オフラインでの到達圏解析/最寄り施設検索 |
| Advanced Editing Extension | ・Basic ライセンス以上で利用可能なエクステンション</br>・ブランチ バージョン ジオデータベースに新しいバージョンの作成</br>・ブランチ バージョン ジオデータベースのバージョンのフィーチャ/テーブルの編集</br>・ユーティリティ ネットワークのネットワーク フィーチャの編集</br>・ユーティリティ ネットワークのトポロジーの検証 |

ライセンスの詳細は[ESRIジャパン製品ページ](https://www.esrij.com/products/arcgis-maps-sdk-for-swift/license/)をご参照ください。

## ライセンスの認証方法

ライセンスの認証は次の2つの方法があります。

1. __ライセンスキーを使用した認証__
    * ライセンスキーを使用した認証は、ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証します。

2. __指定ユーザーによるアカウント認証__  
    * 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。
    * ログインを行う指定ユーザーアカウントのタイプによって関連付けられたライセンスのレベルが異なります。

### 指定ユーザーのユーザータイプとライセンスレベルの対比表
ArcGIS Online のユーザータイプの場合
| ユーザータイプ | ライセンスレベル |
|:-----------|:------------|
| Viewer | Lite | 
| Contributor / Mobile Worker | Basic |
| Creator | Standard |
| Professional / Professional Plus | Advanced <sup>※1</sup>|

ArcGIS Enterprise のユーザータイプの場合
| ユーザータイプ | ライセンスレベル |
|:-----------|:------------|
| Viewer | Lite | 
| Editor / Mobile Worker | Basic |
| Creator / GIS Professional Basic | Standard |
| GIS Professional Standard / GIS Professional Advanced | Advanced <sup>※1</sup> |

※1 ArcGIS Maps SDK for Swift には Advanced ライセンスはありません。

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

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、Portal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Standard ライセンスレベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、Portal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Analysis アドオン ライセンスを割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Advanced Editing Extension ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Advanced Editing Extension の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください

2. __Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、ArcGIS Enterprise 11.1 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに Portal for ArcGIS の指定ユーザー アカウント（Advanced Editing ユーザー タイプ エクステンションを割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## ライセンスの認証

以下の認証に応じた作業を行ってください。

## Lite ライセンスキーを使用した認証
ArcGIS Runtime Lite のライセンスキーを Esri Developer のサイトから取得し、取得したライセンスキーを利用して、アプリケーションを Lite ライセンスで認証することができます。
最初に以下の手順で Lite レベルのライセンスキーを取得します。

 1. [Get a license](https://developers.arcgis.com/swift/license-and-deployment/get-a-license/#your-runtime-lite-license-string) ページにアクセスします
    * ArcGIS Location Platform アカウント、または、ArcGIS Online アカウントにサインインしてない場合は、いずれかのアカウントでサインインします。
    * いずれかのアカウントもお持ちでない場合は、ArcGIS Location Platform アカウントに [サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。
 2. 表示されたライセンスキーをコピーします。
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/distribution/lite_license.png" width="600px">
 3. 次に、アプリケーションのコードにおいて SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

    ```swift
    // 取得したライセンス文字列でアプリのライセンスを設定します
    guard let licenseKey = LicenseKey("runtimelite,1000,rud#########,none,####################") else { return }
    do {
      let result = try ArcGISEnvironment.setLicense(with: licenseKey)
      print("License Result : \(result.licenseStatus)")
    } catch {
      print(error)
    }
    ```

## 配布パックのライセンスキーを使用した認証

ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

ArcGIS Runtime の配布パックの購入については[ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

アプリケーションのコードにおいて SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

```swift
// 取得したライセンス文字列でアプリのライセンスを設定します
guard let licenseKey = LicenseKey("runtimestandard,1000,rud#########,day-month-year,####################") else { return }
do {
  let result = try ArcGISEnvironment.setLicense(with: licenseKey)
  print("License Result : \(result.licenseStatus)")
} catch {
  print(error)
}
```

Extension ライセンスを認証する場合は以下のコードを使用します。

```swift
// 基本ライセンスとエクステンション ライセンスのリストを設定します
let licenseKey = LicenseKey("runtimestandard,1000,rud#########,day-month-year,####################")!
let extensions = [
  LicenseKey("runtimeanalysis,1000,rud#########,day-month-year,####################")!
]
do {
  let result = try ArcGISEnvironment.setLicense(
    with: licenseKey,
    extensions: extensions
  )
} catch {
  print(error)
}
```

## 指定ユーザー アカウントを使用した認証
アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する ArcGIS Online 組織向けプランもしくは Portal for ArcGIS の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

アプリケーションのコードにおいて SDK の機能が呼び出される前に、ライセンスを取得・設定します。以下のコードは、ArcGIS Online の指定ユーザーのライセンスを取得する方法を示しています。
 
認証方法の詳細については、「[How to use named user login in your app（英語）](https://developers.arcgis.com/swift/license-and-deployment/use-a-license-in-your-app/#how-to-use-named-user-login-in-your-app)」や「[Security and authentication（英語）](https://developers.arcgis.com/swift/security-and-authentication/)」も併せてご覧ください。

```swift
// Portal クラスを構築し、指定ユーザーが認証情報を提供することを確認します。
let url = URL(string: "https://myportal.com")!

// 指定ユーザーが認証情報でログインすることを要求します。
let portal = Portal(url: url, connection: .authenticated)

// ポータルをロードします。
do {
  try await portal.load()
  // ポータルからユーザーのライセンス情報を取得します。
  let licenseInfo = try await portal.licenseInfo
  // 指定ユーザーの licenseInfo を使用してライセンスを設定します。
  let result = try ArcGISEnvironment.setLicense(from: licenseInfo)

  // これでアプリはライセンス認証されました。

  // キーチェーン アイテムを作成し、ライセンス情報を保存して、アプリをオフラインで起動してライセンスを取得できるようにします。
  let licenseInfoData = licenseInfo.toJSON().data(using: .utf8)!
  let label = "com.your_org.your_app_name".data(using: .utf8)!
  let keychainItem: [String: Any] = [kSecClass as String: kSecClassKey,
                                    kSecAttrLabel as String: label,
                                    kSecValueData as String: licenseInfoData,
                                    kSecUseDataProtectionKeychain as String: true]
  let status = SecItemAdd(keychainItem as CFDictionary, nil)

} catch {
  print(error)
}
```


