+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Runtime SDK for Android を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/android/distribution-android-100.x/"]
+++

ArcGIS Runtime SDK for Android を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
1. __[ライセンスの認証方法](#ライセンスの認証方法方法)__
  * __[Lite ライセンスの認証方法](#lite-ライセンスの認証方法)__
  * __[Basic ライセンスの認証方法](#basic-ライセンスの認証方法)__
  * __[Standard ライセンスの認証方法](#standard-ライセンスの認証方法)__
  * __[Analysis Extension ライセンスの認証方法](#analysis-extension-ライセンスの認証方法)__
1. __[ライセンスの認証](#ライセンスの認証)__
  * __[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)__
  * __[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)__
  * __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__

## 使用するライセンスの選択

ArcGIS Runtime SDK for Android には Lite、Basic、Standard の 3 つのライセンス レベルがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示（2D/3D）<br>・フィーチャの表示/検索<br>・フィーチャのオンライン編集（パブリックなフィーチャ サービス）<br>・ルート検索/到達圏解析/最寄り施設検索<br>・住所検索/リバース ジオコーディング |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャのオンライン編集（セキュアなフィーチャ サービス）<br>・フィーチャのオフライン編集<br>・ArcGIS Online/Portal for ArcGIS のコンテンツの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・シェープファイルの表示/編集<br>・GeoPackage の表示/編集<br>・KML（ローカル ファイル）の表示<br>・ラスター データの表示/解析<br>・航海用電子海図（ENC）の表示 |
| Analysis Extension | ・Standard ライセンス以上で利用可能なエクステンション<br>・オフラインでの到達圏解析/最寄り施設検索 |

ライセンスの詳細は[ESRIジャパン製品ページ](http://www.esrij.com/products/arcgis-runtime-sdk-for-Android/details/license/)をご参照ください。

## ライセンスの認証方法

ライセンスの認証は次の2つの方法があります。

1. __ライセンスキーを使用した認証__
  * ライセンスキーを使用した認証は、ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証します。
<p></p>
1. __指定ユーザーによるアカウント認証__  
  * 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。<br>
  * ログインを行う指定ユーザーアカウントのタイプによって関連付けられたライセンスのレベルが異なり、また認証はランタイムアプリにコードを含める必要があります。

##### 指定ユーザーのユーザータイプとライセンスレベルの対比表
__■ ArcGIS Online または ArcGIS Enterprise 次期バージョン 10.8（国内リリース時期未定）以降をご利用の場合 <br>__※Standard/Advanced は ArcGIS Runtime 100.7 以降から対応しております

| User Type | Runtime Level |
|:-----------|:------------|
| Viewer | Lite | 
| Editor / Field Worker | Basic |
| Creator / GIS Professional Basic | Standard ※ |
| GIS Professional Standard / GIS Professional Advanced | Advanced ※ |

注-ArcGIS Runtime SDK for Android には Advanced ライセンスはありません。

__■ ArcGIS Enterprise 10.7 以前をご利用の場合__

| User Type | Runtime Level |
|:-----------|:------------|
| レベル1 または Viewer タイプ以上 | Lite | 
| レベル2 または Editor タイプ以上 | Basic |

### Lite ライセンスの認証方法

1. __ライセンスキーを使用した認証__
  * ArcGIS Runtime Lite のライセンスキーを取得する必要があります
  * 認証の方法は、[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)をご参照ください
<p></p>
1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
  * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Liteライセンスレベルを保有する) が必要です
  * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
  * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Basic ライセンスの認証方法

1. __ライセンスキーを使用した認証__
  * ArcGIS Runtime Basic の配布パックを購入する必要があります
  * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>
1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
  * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Basicライセンスレベルを保有する) が必要です
  * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
  * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Standard ライセンスの認証方法

1. __ライセンスキーを使用した認証__
  * ArcGIS Runtime Standard の配布パックを購入する必要があります
  * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>
1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注-この認証は、ArcGIS Runtime 100.7より以前のバージョンでは使用できません
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Standardライセンスレベルを保有する) が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証方法

  1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
    * 基本ライセンス（Standard または Advanced）と併せて認証する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>
1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注-この認証は、ArcGIS Runtime 100.7より以前のバージョンでは使用できません<br>
注-Protal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7以前のバージョンでは使用できません
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Analysisアドオンライセンス拡張機能を割り当てられた) が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## ライセンスの認証

以下の認証に応じた作業を行ってください。


### Lite ライセンスキーを使用した認証
ArcGIS Runtime Lite のライセンスキーを ArcGIS for Developers のサイトから取得し、取得したライセンスキーを利用して、アプリケーションを Lite ライセンスで認証することができます。
最初に以下の手順で Lite レベルのライセンスキーを取得します。

 1. [ArcGIS for Developers: Licensing Your ArcGIS Runtime App](https://developers.arcgis.com/arcgis-runtime/licensing/) ページにアクセスします
 1. Lite の枠に表示されている [Sign Up] をクリックします
 1. 画面右上に表示される [Sign In] をクリックして ArcGIS for Developers アカウントでサインインします。アカウントの作成方法は、[開発者アカウントの作成](../../../guide/create-map/get-dev-account/#アカウントの作成)
 1. 表示されたライセンスキーをコピーします
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/distribution/lite_license.png" width="400px">
 1. 次に、アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

```java
 // ライセンスキーを設定して認証
 LicenseResult licenseResult = ArcGISRuntimeEnvironment.setLicense("runtimelite,1000,rud#########,day-month-year,####################");
 if(licenseResult.getLicenseStatus() == LicenseStatus.VALID){
 	Log.d(TAG,"ライセンスは有効です:" + licenseResult.getLicenseStatus());
 }else{
 	// TODO ライセンスが無効の場合の処理
 	Log.d(TAG,"ライセンスは無効です:" + licenseResult.getLicenseStatus());
 }
 ```

### 配布パックのライセンスキーを使用した認証

ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

ArcGIS Runtime の配布パックの購入については [ESRIジャパン](https://esrij.smartseminar.jp/public/application/add/356)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

 ```java
// ライセンスキーを設定して認証:runtimebasic/runtimestandard/runtimeadvanced
LicenseResult licenseResult = ArcGISRuntimeEnvironment.setLicense("runtimebasic,1000,rud#########,day-month-year,####################");
if(licenseResult.getLicenseStatus() == LicenseStatus.VALID){
	Log.d(TAG,"ライセンスは有効です:" + licenseResult.getLicenseStatus());
}else{
	// TODO ライセンスが無効の場合の処理
	Log.d(TAG,"ライセンスは無効です:" + licenseResult.getLicenseStatus());
}
```
Analysis Extension ライセンスを認証する場合は以下のコードを使用します。

```java
// ライセンスキーを設定して認証
LicenseResult extLicenseResult = ArcGISRuntimeEnvironment.setLicense("runtimestandard,1000,rud#########,day-month-year,####################",
        Arrays.asList("runtimeanalysis,1000,rud#########,day-month-year,####################", "another license extension code"));
if(extLicenseResult.getLicenseStatus() == LicenseStatus.VALID){
    Log.d(TAG,"ライセンスは有効です:" + extLicenseResult.getLicenseStatus());
}else{
    // TODO ライセンスが無効の場合の処理
    Log.d(TAG,"ライセンスは無効です:" + extLicenseResult.getLicenseStatus());
}
```

### 指定ユーザー アカウントを使用した認証

 アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する [ArcGIS Online 組織向けプラン](http://www.esrij.com/products/arcgis-online/plan/organization/) もしくは [Portal for ArcGIS](http://www.esrij.com/products/arcgis-for-server/details/portal-for-arcgis/) の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

 アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、ライセンスを取得・設定します。以下の認証方法は、指定ユーザーのユーザー名とパスワードをコードに埋め込んで認証する簡単な例です。認証方法の詳細については [ArcGIS for Developers: 認証マネージャーの使用（英語）](https://developers.arcgis.com/net/latest/wpf/guide/use-the-authentication-manager.htm)をご参照ください。

```java
// ユーザー アカウント情報で ArcGIS Online / ArcGISポータルへログインし認証情報を取得します
// ログインのための入力フォームが表示されます。
DefaultAuthenticationChallengeHandler handler = new DefaultAuthenticationChallengeHandler(this);
AuthenticationManager.setAuthenticationChallengeHandler(handler);

//ArcGIS Online またはご自分の portal の URL を設定します
final Portal portal = new Portal("https://www.arcgis.com",true);

// ポータルの情報を同期してロードします。
portal.loadAsync();
portal.addDoneLoadingListener(new Runnable() {
    @Override
    public void run() {
        if (portal.getLoadStatus() == LoadStatus.LOADED) {

            // ポータルからライセンス情報を取得します
            LicenseInfo licenseInfo = portal.getPortalInfo();

            // 取得したライセンスを設定します
            LicenseResult licenseResult = ArcGISRuntimeEnvironment.setLicense(licenseInfo);

            if(licenseResult.getLicenseStatus() == LicenseStatus.VALID){
                Log.d(TAG,"ライセンスは有効です:" + licenseResult.getLicenseStatus());
            }else{
                // TODO ライセンスが無効の場合の処理
                Log.d(TAG,"ライセンスは無効です:" + licenseResult.getLicenseStatus());
            }
        }
    }
});
```
```java
注意：
バージョン 100.7 以降でのライセンス情報の取得は portal.getPortalInfo() を使用し、バージョン 100.6 以前では portal.getPortalInfo().getLicenseInfo() を使用してください。
```

 __アプリケーションが ArcGIS Online / Portal for ArcGIS に常にログインできない場合__

 配布するアプリケーションがネットワークに接続できない環境で実行するなどの理由により、起動時に毎回 ArcGIS Online / Portal for ArcGIS にログインすることができない場合は、取得したライセンス情報を最大 30 日までローカルに保存しておくことができます。

 この方法を使用する場合、少なくとも 30 日に 1 回はアプリケーションから ArcGIS Online / Portal for ArcGIS にログインし、ローカルのライセンス情報を更新する必要があります。最後にログインしてから 30 日以上経過した場合は、ライセンスが無効となりそのライセンスを必要とする機能が使用できなくなります。

 以下のコードを使用して取得したライセンス情報を JSON 形式で出力することができます。出力したライセンス情報は任意の方法でローカルに保存してください。

```javascript
// ライセンス情報を JSON 形式で出力
var licenseJson = licenseInfo.ToJson();

// --- 出力したライセンス情報を保存するコードを記述 ---
```

 ローカルに保存した JSON 形式のライセンス情報を読み込み ArcGIS Runtime に設定するには、以下のコードを使用します。

```java
// ネットワーク接続可能時に Json 形式でライセンス情報を取得します。
LicenseInfo licenseInfo = portal.getPortalInfo();
String licenseInfoJson = licenseInfo.toJson();

// オフライン状態の場合は、作成済みの文字列で保存したライセンス情報を取得します。
LicenseInfo licenseInfo = new LicenseInfo(licenseInfoJson);

// 作成したライセンス情報を設定します。
ArcGISRuntimeEnvironment.setLicense(licenseInfo);
```