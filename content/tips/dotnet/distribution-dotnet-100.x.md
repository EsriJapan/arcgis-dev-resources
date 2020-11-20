+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Runtime SDK for .NET を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/dotnet/distribution-dotnet-100.x/"]
+++

ArcGIS Runtime SDK for .NET を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
1. __[ライセンスの認証方法](#ライセンスの認証方法)__
    * __[Lite ライセンスの認証方法](#lite-ライセンスの認証方法)__
    * __[Basic ライセンスの認証方法](#basic-ライセンスの認証方法)__
    * __[Standard ライセンスの認証方法](#standard-ライセンスの認証方法)__
    * __[Advanced ライセンスの認証方法](#advanced-ライセンスの認証方法)__
    * __[Analysis Extension ライセンスの認証方法](#analysis-extension-ライセンスの認証方法)__
1. __[ライセンスの認証](#ライセンスの認証)__
    * __[Lite ライセンスキーを使用した認証](#lite-ライセンスキーを使用した認証)__
    * __[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)__
    * __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__


## 使用するライセンスの選択

ArcGIS Runtime SDK for .NET には Lite、Basic、Standard、Advanced の 4 つのライセンス レベルと Analysis エクステンションがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示（2D/3D）<br>・フィーチャの表示/検索<br>・フィーチャのオンライン編集（パブリックなフィーチャ サービス）<br>・ルート検索/到達圏解析/最寄り施設検索<br>・住所検索/リバース ジオコーディング |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャのオンライン編集（セキュアなフィーチャ サービス）<br>・フィーチャのオフライン編集<br>・ArcGIS Online/Portal for ArcGIS のコンテンツの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・シェープファイルの表示/編集<br>・GeoPackage の表示/編集<br>・KML（ローカル ファイル）の表示<br>・ラスター データの表示/解析<br>・航海用電子海図（ENC）の表示<br>・ローカル サーバーの標準的な機能（WPF API のみ） |
| Advanced | ・Standard ライセンスで利用できるすべての機能<br>・ローカル サーバーの高度な機能（WPF API のみ） |
| Analysis Extension | ・Standard ライセンス以上で利用可能なエクステンション</br>・オフラインでの到達圏解析/最寄り施設検索<br>・ArcGIS Desktop（Spatial/3D/Network エクステンション）で利用可能なジオプロセシング ツールの一部（WPF API のみ） |

ライセンスの詳細は[ESRIジャパン製品ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/details/license/)をご参照ください。

## ライセンスの認証方法

ライセンスの認証は次の2つの方法があります。

1. __ライセンスキーを使用した認証__
    - ライセンスキーを使用した認証は、ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証します。
<p></p>

2. __指定ユーザーによるアカウント認証__  
    * 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。<br>
    * ログインを行う指定ユーザーアカウントのタイプによって関連付けられたライセンスのレベルが異なり、また認証はランタイムアプリにコードを含める必要があります。

### 指定ユーザーのユーザータイプとライセンスレベルの対比表
__■ ArcGIS Online または ArcGIS Enterprise バージョン 10.8 以降をご利用の場合__

※ Standard/Advanced は ArcGIS Runtime 100.7 以降から対応しております

| User Type | Runtime Level |
|:-----------|:------------|
| Viewer | Lite | 
| Editor / Field Worker | Basic |
| Creator / GIS Professional Basic | Standard ※ |
| GIS Professional Standard / GIS Professional Advanced | Advanced ※ |

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

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Liteライセンスレベルを保有する) が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Basic ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Basic の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Basicライセンスレベルを保有する) が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Standard ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Standard の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意-この認証は、ArcGIS Runtime 100.7より以前のバージョンでは使用できません
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Standardライセンスレベルを保有する) が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Advanced ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Advanced の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意-この認証は、ArcGIS Runtime 100.7より以前のバージョンでは使用できません
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント(ArcGIS Runtime Advancedライセンスレベルを保有する) が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
    * 基本ライセンス（Standard または Advanced）と併せて認証する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください
<p></p>

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意-この認証は、ArcGIS Runtime 100.7より以前のバージョンでは使用できません<br>
注意-Protal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7以前のバージョンでは使用できません
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

```javascript
// ライセンスキーを設定して認証
string licenseKey = "runtimelite,1000,rud#########,day-month-year,####################";
Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.SetLicense(licenseKey);
```

### 配布パックのライセンスキーを使用した認証

ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

ArcGIS Runtime の配布パックの購入については [ESRIジャパン](https://esrij.smartseminar.jp/public/application/add/356)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

```javascript
// ライセンスキーを設定して認証
string licenseKey = "runtimestandard,1000,rud#########,day-month-year,####################";
ArcGISRuntimeEnvironment.SetLicense(licenseKey);
```

Analysis Extension ライセンスを認証する場合は以下のコードを使用します。
```javascript
// 基本ライセンス（Standard または Advanced）のライセンスキーの設定
string licenseKey = "runtimestandard,1000,rud#########,day-month-year,####################";

// Analysis Extension ライセンスのライセンスキーの設定
string[] extensions = { "runtimeanalysis,1000,rud#########,day-month-year,####################" };

// 基本ライセンスと Analysis Extension ライセンスの認証
ArcGISRuntimeEnvironment.SetLicense(licenseKey, extensions);
```


### 指定ユーザー アカウントを使用した認証

 アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する [ArcGIS Online 組織向けプラン](http://www.esrij.com/products/arcgis-online/plan/organization/) もしくは [Portal for ArcGIS](http://www.esrij.com/products/arcgis-for-server/details/portal-for-arcgis/) の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

 アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、ライセンスを取得・設定します。以下の認証方法は、指定ユーザーのユーザー名とパスワードをコードに埋め込んで認証する簡単な例です。認証方法の詳細については [ArcGIS for Developers: 認証マネージャーの使用（英語）](https://developers.arcgis.com/net/latest/wpf/guide/use-the-authentication-manager.htm)をご参照ください。

```javascript
try
{
    // 認証先のポータルの URL を設定
    Uri serviceUri = new Uri("https://www.arcgis.com/sharing/rest");

    // 認証情報の作成
    Credential credential = await AuthenticationManager.Current.GenerateCredentialAsync(serviceUri, "<ユーザー名>", "<パスワード>");

    // 認証情報を設定してポータルへ接続
    ArcGISPortal arcgisPortal = await ArcGISPortal.CreateAsync(serviceUri, credential);

    // ライセンス情報を取得
    LicenseInfo licenseInfo = await arcgisPortal.GetLicenseInfoAsync();

    // ArcGIS Runtime にライセンスを設定
    ArcGISRuntimeEnvironment.SetLicense(licenseInfo);

}
catch (Exception ex)
{
    MessageBox.Show(ex.Message, "認証のエラー");
}
```
```javascript
注意：
上記のコードスニペットは、ArcGIS Runtime 100.7 で導入された新しい GetLicenseInfoAsync() APIを使用しています。
バージョン 100.7 以降では GetLicenseInfoAsync()、バージョン 100.6 以前では Portal.portalInfo.licenseInfo を使用します。
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

```javascript
// --- 保存したライセンス情報を読み込むコードを記述 ---

//JSON 形式のライセンス情報からライセンスを復元
var localLicenseInfo = LicenseInfo.FromJson(licenseJson);

//ArcGIS Runtime にライセンスを設定
ArcGISRuntimeEnvironment.SetLicense(localLicenseInfo);
```
