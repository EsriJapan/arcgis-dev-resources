+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Runtime SDK for iOS を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/ios/distribution-ios-100.x/"]
+++

ArcGIS Runtime SDK for iOS を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
1. __[ライセンスの認証方法](#ライセンスの認証方法)__
	- __[Lite ライセンスの認証方法](#lite-ライセンスの認証方法)__
	- __[Basic ライセンスの認証方法](#basic-ライセンスの認証方法)__
	- __[Standard ライセンスの認証方法](#standard-ライセンスの認証方法)__
	- __[Analysis Extension ライセンスの認証方法](#analysis-extension-ライセンスの認証方法)__
1. __[ライセンスの認証](#ライセンスの認証)__
  - __[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)__
  - __[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)__
  - __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__

## 使用するライセンスの選択

ArcGIS Runtime SDK for iOS には Lite、Basic、Standard の 3 つのライセンス レベルがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

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
    - ライセンスキーを使用した認証は、ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証します。
<p></p>

1. __指定ユーザーによるアカウント認証__  
    - 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。<br>
    - ログインを行う指定ユーザーアカウントのタイプによって関連付けられたライセンスのレベルが異なり、また認証はランタイムアプリにコードを含める必要があります。

### 指定ユーザーのユーザータイプとライセンスレベルの対比表

__■ ArcGIS Online または ArcGIS Enterprise バージョン 10.8 以降をご利用の場合__

  ※ Standard/Advanced は ArcGIS Runtime 100.7 以降から対応しております

| User Type | Runtime Level |
|:-----------|:------------|
| Viewer | Lite | 
| Editor / Field Worker | Basic |
| Creator / GIS Professional Basic | Standard ※ |
| GIS Professional Standard / GIS Professional Advanced | Advanced ※ |

  注意：ArcGIS Runtime SDK for iOS には Advanced ライセンスはありません。

__■ ArcGIS Enterprise 10.7 以前をご利用の場合__

| User Type | Runtime Level |
|:-----------|:------------|
| レベル1 または Viewer タイプ以上 | Lite | 
| レベル2 または Editor タイプ以上 | Basic |

### Lite ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    - ArcGIS Runtime Lite のライセンスキーを取得する必要があります
    - 認証の手順は、[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    - アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Lite ライセンスレベルを保有する) が必要です
    - アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    - 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Basic ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    - ArcGIS Runtime Basic の配布パックを購入する必要があります
    - 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    - アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Basic ライセンスレベルを保有する) が必要です
    - アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    - 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Standard ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    - ArcGIS Runtime Standard の配布パックを購入する必要があります
    - 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意-この認証は、ArcGIS Runtime 100.7より以前のバージョンでは使用できません
    - アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Standard ライセンスレベルを保有する) が必要です
    - アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    - 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証方法

  1. __ライセンスキーを使用した認証__
      - ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
      - 基本ライセンス（Standard または Advanced）と併せて認証する必要があります
      - 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意-この認証は、ArcGIS Runtime 100.7より以前のバージョンでは使用できません<br>
注意-Protal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません
      - アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Analysisアドオンライセンス拡張機能を割り当てられた) が必要です
      - アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
      - 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## ライセンスの認証

以下の認証に応じた作業を行ってください。

## Lite ライセンスキーを使用した認証
ArcGIS Runtime Lite のライセンスキーを ArcGIS for Developers のサイトから取得し、取得したライセンスキーを利用して、アプリケーションを Lite ライセンスで認証することができます。
最初に以下の手順で Lite レベルのライセンスキーを取得します。

 1. [ArcGIS for Developers: Licensing Your ArcGIS Runtime App](https://developers.arcgis.com/arcgis-runtime/licensing/) ページにアクセスします
 1. Lite の枠に表示されている [Sign Up] をクリックします
 1. 画面右上に表示される [Sign In] をクリックして ArcGIS for Developers アカウントでサインインします。アカウントの作成方法は、[開発者アカウントの作成](../../../guide/create-map/get-dev-account/#アカウントの作成)
 1. 表示されたライセンスキーをコピーします
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/distribution/lite_license.png" width="400px">
 1. 次に、アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

 ```javascript
do {
  // ライセンスキーを設定して認証
  let result = try AGSArcGISRuntimeEnvironment.setLicenseKey("runtimelite,1000,rud#########,day-month-year,####################")
  print("License Result : \(result.licenseStatus)")
}
catch let error as NSError {
  // 認証に失敗した場合はエラーを出力
  print("error: \(error)")
}
```

## 配布パックのライセンスキーを使用した認証

  ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

  ArcGIS Runtime の配布パックの購入については [ESRIジャパン](https://esrij.smartseminar.jp/public/application/add/356)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

  アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

 ```javascript
do {
  // ライセンスキーを設定して認証
  let result = try AGSArcGISRuntimeEnvironment.setLicenseKey("runtimestandard,1000,rud#########,day-month-year,####################")
  print("License Result: \(result.licenseStatus)")
}
catch let error as NSError {
  // 認証に失敗した場合はエラーを出力
  print("Error: \(error)")
}
```

 Analysis Extension ライセンスを認証する場合は以下のコードを使用します。
 ```javascript
let error : NSErrorPointer = nil

AGSArcGISRuntimeEnvironment.setLicenseKey("runtimeadvanced,1000,rud#########,day-month-year,####################", 
 extensions: ["runtimesmpna,1000,rud#########,day-month-year,####################",
              "runtimesmpla,1000,rud#########,day-month-year,####################" ], error: error)
 ```

## 指定ユーザー アカウントを使用した認証

 アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する [ArcGIS Online 組織向けプラン](http://www.esrij.com/products/arcgis-online/plan/organization/) もしくは [Portal for ArcGIS](http://www.esrij.com/products/arcgis-for-server/details/portal-for-arcgis/) の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

 アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してライセンスを取得します。

 ```javascript
// 表示される入力フォームから ArcGIS Online / Portal for ArcGIS にログインし認証情報を取得   
let theURL = URL(string: "https://www.arcgis.com")
let portal = AGSPortal(url: theURL!, loginRequired: true)
    
portal.load { (error) in
  if let error = error {
    print(error)
  }
  else {
  
    // ポータルからユーザーライセンス情報を取得           
    portal.fetchLicenseInfo { (licenseInfo,error) in

      guard let error = error {
        print("ユーザーライセンスの取得エラー \(error)")
        return
      }

      // 指定ユーザーのライセンス情報を使用してライセンスを設定します
      do {
        let result = try AGSArcGISRuntimeEnvironment.setLicenseInfo(licenseInfo!) 
      }
      catch let error as NSError {
        print("error: \(error.localizedDescription)")
      }
    }   
  }
}
 ```
 ```javascript
注意：
上記のコードスニペットは、ArcGIS Runtime 100.7 で導入された新しい fetchLicenseInfo() API を使用しています。バージョン 100.7 では fetchLicenseInfo()、バージョン 100.6 以前では 
Portal.portalInfo.licenseInfo を使用します。
```

 __アプリケーションが ArcGIS Online / Portal for ArcGIS に常にログインできない場合__

 配布するアプリケーションがネットワークに接続できない環境で実行するなどの理由により、起動時に毎回 ArcGIS Online / Portal for ArcGIS にログインすることができない場合は、取得したライセンス情報を最大 30 日までローカルに保存しておくことができます。

 この方法を使用する場合、少なくとも 30 日に 1 回はアプリケーションから ArcGIS Online / Portal for ArcGIS にログインし、ローカルのライセンス情報を更新する必要があります。最後にログインしてから 30 日以上経過した場合は、ライセンスが無効となり該当するライセンスを必要とする機能が使用できなくなります。

 出力したライセンス情報は任意の方法でローカルに保存してください。以下のコードでは、ライセンス情報を配列で出力し、AGSKeychainItem クラスを使用して Keychain に保存しています（iOS シミュレータで実行する場合は、Xcode の Capabilities 設定画面で [Keychain Sharing] を ON にしてください）。

 ```javascript
// 表示される入力フォームから ArcGIS Online / Portal for ArcGIS にログインし認証情報を取得   
let theURL = URL(string: "https://www.arcgis.com")
let portal = AGSPortal(url: theURL!, loginRequired: true)
    
portal.load { (error) in
  if let error = error {
    print(error)
  }
  else {
  
    // ポータルからユーザーライセンス情報を取得           
    portal.fetchLicenseInfo { (licenseInfo,error) in

      guard let error = error {
        print("ユーザーライセンスの取得エラー \(error)")
        return
      }
      // 指定ユーザーのライセンス情報を使用してライセンスを設定します
      do {
        let result = try AGSArcGISRuntimeEnvironment.setLicenseInfo(licenseInfo!) 
      }
      catch let error as NSError {
        print("error: \(error.localizedDescription)")
      }

      // ライセンス情報を保存して、アプリを起動してオフラインでライセンスを取得
      // この例では、licenseDictionary はキーチェーンに保存              
      var licenseDictionary: NSDictionary?
            
      do {licenseDictionary = try licenseInfo?.toJSON() as! NSDictionary?
      } catch {
        print("ライセンス情報が無効です")
      }

      let keychainItem = AGSKeychainItem(identifier: "com.your_org.your_app_name", accessGroup: nil, acrossDevices: false)
      keychainItem.writeObject(toKeychain: licenseDictionary!, completion: { (writeError) in
        if let error = writeError {
          print("Keychain への書き込みエラー \(error)")
        }
      }) 
    }   
  }
}

・・・・・・

// Keychain からライセンス情報を取得
let keychainItem = AGSKeychainItem(identifier: "com.your_org.your_app_name", accessGroup: nil, acrossDevices: false)
        
//　キーチェーンから JSON 形式でライセンスを取得                
let licenseDictionary = keychainItem.readObjectFromKeychain() as? NSDictionary

// JSON からライセンス情報を生成
let licenseInfo = try! AGSLicenseInfo.fromJSON(licenseDictionary!) as? AGSLicenseInfo

// ライセンスキーを設定して認証
AGSArcGISRuntimeEnvironment.setLicenseInfo(licenseInfo!, error: errorPointer)
```
