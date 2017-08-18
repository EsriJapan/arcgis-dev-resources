
ArcGIS Runtime SDK for iOS を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
1. __[ライセンスの認証](#ライセンスの認証)__
	* __[Lite ライセンスの認証](#lite-ライセンスの認証)__
	* __[Basic ライセンスの認証](#basic-ライセンスの認証)__
	* __[Standard ライセンスの認証](#standard-ライセンスの認証)__
1. __[アプリケーションへの帰属の追加](#アプリケーションへの帰属の追加)__

## 使用するライセンスの選択

ArcGIS Runtime SDK for iOS には Lite、Basic、Standard の 3 つのライセンス レベルがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示<br>・フィーチャの表示/検索<br>・フィーチャ編集（パブリックなサービス）<br>・ルート検索<br>・住所検索 |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャ編集（セキュアなサービス）<br>・ArcGIS Online の解析サービスの使用<br>・ArcGIS Online/Portal for ArcGIS のコンテンツの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・ラスター データの直接参照 |

ライセンスの詳細は[ESRIジャパン製品ページ](http://www.esrij.com/products/arcgis-runtime-sdk-for-ios/details/license/)をご参照ください。

## ライセンスの認証

各ライセンス レベルで認証方法が異なります。使用するライセンス レベルのトピックをご参照ください。

## Lite ライセンスの認証
アプリケーションを Lite レベルで認証するには、以下の 2 つの方法があります。

1. __ライセンスキーを使用した認証__
	* ArcGIS Runtime Lite のライセンスキーを取得する必要があります
	* 認証の方法は、[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)をご参照ください
1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
	*  アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(レベル1 または レベル2) が必要です
	*  アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
	* 認証の方法は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## Basic ライセンスの認証
アプリケーションを Basic レベルで認証するには、以下の 2 つの方法があります。

1. __ライセンスキーを使用した認証__
	* ArcGIS Runtime Basic の配布パックを購入する必要があります
	* 認証の方法は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
	*  アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（レベル2）が必要です
	*  アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
	* 認証の方法は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## Standard ライセンスの認証
アプリケーションを Standard レベルで認証するには、以下の方法があります。

1. __ライセンスキーを使用した認証__
	* ArcGIS Runtime Standard の配布パックを購入する必要があります
	* 認証の方法は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください


## Lite ライセンスキーを使用した認証
ArcGIS Runtime Lite のライセンスキーを ArcGIS for Developers のサイトから取得し、取得したライセンスキーを利用して、アプリケーションを Lite ライセンスで認証することができます。
最初に以下の手順で Lite レベルのライセンスキーを取得します。

1. [ArcGIS for Developers: Licensing Your ArcGIS Runtime App](https://developers.arcgis.com/arcgis-runtime/licensing/) ページにアクセスします（サインインを求められた場合は、ArcGIS for Developers アカウントでサインインします。アカウントの作成方法は[開発者アカウントの作成](http://esrijapan.github.io/arcgis-dev-resources/get-dev-account/)をご参照ください。）

2. [Show my ArcGIS Runtime Lite license key] をクリックします
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/distribution/show_lite_license.png" width="400px">

3. 表示されたライセンスキーをコピーします

4. 次に、アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

 ```javascript
do {
 // ライセンスキーを設定して認証
 let result = try AGSArcGISRuntimeEnvironment.setLicenseKey("runtimelite,1000,rud#########,none,####################")
 print("License Result: \(result.licenseStatus)")
}
catch let error as NSError {
 // 認証に失敗した場合はエラーを出力
 print("Error: \(error)")
}
```

## 配布パックのライセンスキーを使用した認証

  ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

  ArcGIS Runtime の配布パックの購入については [ESRIジャパン](https://esrij.smartseminar.jp/public/application/add/356)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

  アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

  ```javascript
  // ライセンスキーを設定して認証
  do {
   let result = try AGSArcGISRuntimeEnvironment.setLicenseKey("runtimelite,1000,rud#########,day-month-year,####################")
   print("License Result: \(result.licenseStatus)")
  }
  catch let error as NSError {
   // 認証に失敗した場合はエラーを出力
   print("Error: \(error)")
  }
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
   // ArcGIS Online / Portal for ArcGIS からライセンスを取得            
   let licenseInfo = portal.portalInfo?.licenseInfo
   do {
    // ArcGIS Runtime にライセンスを設定
    let result = try AGSArcGISRuntimeEnvironment.setLicenseInfo(licenseInfo!)
   }
   catch let error as NSError {
    print("Error: \(error.localizedDescription)")
   }
  }
 }
 ```

 __アプリケーションが ArcGIS Online / Portal for ArcGIS に常にログインできない場合__

 配布するアプリケーションがネットワークに接続できない環境で実行するなどの理由により、起動時に毎回 ArcGIS Online / Portal for ArcGIS にログインすることができない場合は、取得したライセンス情報を最大 30 日までローカルに保存しておくことができます。

 この方法を使用する場合、少なくとも 30 日に 1 回はアプリケーションから ArcGIS Online / Portal for ArcGIS にログインし、ローカルのライセンス情報を更新する必要があります。最後にログインしてから 30 日以上経過した場合は、ライセンスが無効となり該当するライセンスを必要とする機能が使用できなくなります。

 出力したライセンス情報は任意の方法でローカルに保存してください。以下のコードでは、ライセンス情報を配列で出力し、AGSKeychainItem クラスを使用して Keychain に保存しています（iOS シミュレータで実行する場合は、Xcode の Capabilities 設定画面で [Keychain Sharing] を ON にしてください）。

 ```javascript
 var licenseDictionary: NSDictionary?
 do {
  // ライセンス情報を配列で出力
  let licenseDictionary = try licenseInfo?.toJSON() as! NSDictionary?
 } catch {
  print("ライセンス情報が無効です")
 }
 // 出力した配列を Keychain に保存
 self.keychainItem = AGSKeychainItem(identifier: "<一意な値>", accessGroup: nil, acrossDevices: false)
 self.keychainItem.writeObject(toKeychain: licenseDictionary!, completion: { (writeError) in
  if let error = writeError {
   print("Keychain への書き込みのエラー \(error)")
  }
 })

 ・・・・・・

 // Keychain からライセンス情報を取得
 self.keychainItem = AGSKeychainItem(identifier: "<一意な値>", accessGroup: nil, acrossDevices: false)                
 let licenseDictionary = self.keychainItem.readObjectFromKeychain() as? NSDictionary
 let licenseInfo = try! AGSLicenseInfo.fromJSON(licenseDictionary!) as? AGSLicenseInfo
 do {
  // ライセンスキーを設定して認証
  let result = try AGSArcGISRuntimeEnvironment.setLicenseInfo(licenseInfo!)
 } catch let error as NSError {
  print("Error: \(error.localizedDescription)")
 }
 ```




## アプリケーションへの帰属の追加

* __地図データへのクレジット__

 アプリケーション内で使用されている ArcGIS Online によって提供されている地図サービスのクレジット情報がアプリケーション内で明記されている必要があります。記載する必要があるテキストは地図サービスの REST サービスエンドポイントにおいて "Copyright Text" セクションに記載されています。

 例えば World_Imagery サービス を利用する場合に記載するテキストは以下の通りです。

 *Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community*

 ※ 上記テキストは [World_Imagery サービスの REST エンドポイント](https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer)の "Copyright Text" セクションに記載されています。


 * __Esri 帰属の表示__

  開発したアプリケーションのマップ上に Esri への帰属を表示する必要があります。ArcGIS Runtime SDK を使用して開発したアプリケーションでは、マップ画面にデフォルトで "Powered by Esri" の帰属が表示されています。この帰属が他の要素と重ならないように注意してください。
