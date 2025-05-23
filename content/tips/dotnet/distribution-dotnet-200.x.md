+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Maps SDK for .NET を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/dotnet/distribution-dotnet-200.x/"]
+++

ArcGIS Maps SDK for .NET (バージョン 200.x) を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## API キーの設定
[ArcGIS Location Platform のロケーションサービス](../../../guide/services/)を使用する場合は、アプリで API キーを設定する必要があります。API キーの詳細は[API キーの取得](../../../guide/get-api-key/)を、API キーの設定方法はアプリの作成の[API キーを設定する](../../../guide/create-app/create-startup-app-dotnet/#api-キーを設定する)をご参照ください。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
2. __[ライセンスの認証方法](#ライセンスの認証方法)__
    * __[Lite ライセンスの認証方法](#lite-ライセンスの認証方法)__
    * __[Basic ライセンスの認証方法](#basic-ライセンスの認証方法)__
    * __[Standard ライセンスの認証方法](#standard-ライセンスの認証方法)__
    * __[Advanced ライセンスの認証方法](#advanced-ライセンスの認証方法)__
    * __[Analysis Extension ライセンスの認証方法](#analysis-extension-ライセンスの認証方法)__
    * __[Advanced Editing Extension ライセンスの認証方法](#advanced-editing-extension-ライセンスの認証方法)__


3. __[ライセンスの認証](#ライセンスの認証)__
    * __[Lite ライセンス キーを使用した認証](#lite-ライセンスキーを使用した認証)__
    * __[配布パックのライセンス キーを使用した認証](#配布パックのライセンスキーを使用した認証)__
    * __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__


## 使用するライセンスの選択

ArcGIS Maps SDK for .NET には Lite、Basic、Standard、Advanced の 4 つのライセンス レベルと Analysis エクステンションがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示（2D/3D）<br>・フィーチャの表示/検索<br>・フィーチャのオンライン/オフライン編集（ArcGIS Online/ArcGIS Enterprise のパブリックなフィーチャ サービス、ArcGIS Location Platform のフィーチャ サービス）<br>・ルート検索/到達圏解析/最寄り施設検索<br>・住所検索/リバース ジオコーディング<br>・ユーティリティー ネットワークのトレース |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャのオンライン/オフライン編集（ArcGIS Online/ArcGIS Enterprise のセキュアなフィーチャ サービス）<br>・モバイル ジオデータベースの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・シェープファイルの表示/編集<br>・GeoPackage の表示/編集<br>・KML の表示/編集（ローカル ファイル）<br>・ラスター データの表示/解析<br>・航海用電子海図（ENC）の表示<br>・3D 解析<br>・ローカル サーバーの標準的な機能 |
| Advanced | ・Standard ライセンスで利用できるすべての機能<br>・ローカル サーバーの高度な機能 |
| Analysis Extension | ・Standard ライセンス以上で利用可能なエクステンション</br>・オフラインでの到達圏解析/最寄り施設検索<br>・ローカル サーバーの高度な機能 |
| Advanced Editing Extension | ・Basic ライセンス以上で利用可能なエクステンション</br>・ブランチ バージョン ジオデータベースに新しいバージョンの作成</br>・ブランチ バージョン ジオデータベースのバージョンのフィーチャ/テーブルの編集</br>・ユーティリティー ネットワークのネットワーク フィーチャの編集</br>・ユーティリティー ネットワークのトポロジーの検証 |


ライセンスの詳細は[ESRIジャパン製品ページ](https://www.esrij.com/products/arcgis-maps-sdk-for-dotnet/license/)をご参照ください。

## ライセンスの認証方法

ライセンスの認証は次の2つの方法があります。

1. __ライセンス キーを使用した認証__
    * ライセンス キーを使用した認証は、ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証します。

2. __指定ユーザーによるアカウント認証__  
    * 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。
    * ログインを行う指定ユーザー アカウントのタイプによって関連付けられたライセンスのレベルが異なり、また認証はアプリにコードを含める必要があります。

### 指定ユーザーのユーザー タイプとライセンスレベルの対比表
| ユーザー タイプ | ライセンスレベル |
|:-----------|:------------|
| Viewer | Lite | 
| Contributor / Mobile Worker | Basic |
| Creator | Standard |
| Professional / Professional Plus | Advanced |

### Lite ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Lite のライセンスキーを取得する必要があります
    * 認証の方法は、[Lite ライセンス キーを使用した認証](#lite-ライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Lite ライセンスレベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Basic ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Basic の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Basic ライセンスレベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Standard ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Standard の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、Portal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Standard ライセンスレベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Advanced ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Advanced の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセン-スキーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、Portal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Advanced ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンス キーを使用した認証](#配布パックのライセン-スキーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、Portal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Analysis アドオン ライセンスを割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Advanced Editing Extension ライセンスの認証方法

1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Advanced Editing Extension の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンス キーを使用した認証](#配布パックのライセンス-キーを使用した認証)をご参照ください

2. __Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、ArcGIS Enterprise 11.1 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに Portal for ArcGIS の指定ユーザー アカウント（Advanced Editing ユーザー タイプ エクステンションを割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## ライセンスの認証

以下の認証に応じた作業を行ってください。


### Lite ライセンス キーを使用した認証
ArcGIS Runtime Lite のライセンス キーを Esri Developer のサイトから取得し、取得したライセンス キーを利用して、アプリケーションを Lite ライセンスで認証することができます。
最初に以下の手順で Lite レベルのライセンス キーを取得します。

 1. [Get a license](https://developers.arcgis.com/net/license-and-deployment/get-a-license/#your-runtime-lite-license-string) ページにアクセスします
    * ArcGIS Location Platform アカウント、または、ArcGIS Online アカウントにサインインしてない場合は、いずれかのアカウントでサインインします。
    * いずれかのアカウントもお持ちでない場合は、ArcGIS Location Platform アカウントに [サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。
 2. 表示されたライセンス キーをコピーします
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/distribution/lite_license.png" width="600px">
 3. 次に、アプリケーションのコードにおいて SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

    ```c#
    // 取得したライセンス文字列でアプリのライセンスを設定します
    string licenseKey = "runtimelite,1000,rud#########,none,####################";
    ArcGISRuntimeEnvironment.SetLicense(licenseKey);
    ```

### 配布パックのライセンスキーを使用した認証

ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

ArcGIS Runtime の配布パックの購入については[ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

アプリケーションのコードにおいて SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

```c#
// 取得したライセンス文字列でアプリのライセンスを設定します
string licenseKey = "runtimelite,1000,rud#########,day-month-year,####################";
ArcGISRuntimeEnvironment.SetLicense(licenseKey);
```

Analysis Extension ライセンスを認証する場合は以下のコードを使用します。
```javascript
// 基本ライセンスとエクステンション ライセンスのリストを設定します
string licenseKey = "runtimelite,1000,rud#########,day-month-year,####################";
string[] extensions = { "runtimeanalysis,1000,rud#########,day-month-year,####################" };

Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.SetLicense(licenseKey, extensions);
```


### 指定ユーザー アカウントを使用した認証

 アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する ArcGIS Online 組織向けプランもしくは Portal for ArcGIS の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

アプリケーションのコードにおいて SDK の機能が呼び出される前に、ライセンスを取得・設定します。以下のコードは、ArcGIS Online の指定ユーザーのライセンスを取得する方法を示しています。コードの前半で、ArcGIS Online ポータルを登録し、チャレンジ ハンドラーと OAuth 認証ハンドラーを設定することによって、[`AuthenticationManager`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.Security.AuthenticationManager.html) を構成します。（[Authentication Manager の使用](https://developers.arcgis.com/net/security-and-authentication/)を参照）

認証方法の詳細については、「[How to use user authentication in your app（英語）](https://developers.arcgis.com/net/license-and-deployment/use-a-license-in-your-app/#how-to-use-user-authentication-in-your-app)」や「[Security and authentication（英語）](https://developers.arcgis.com/net/security-and-authentication/)」も併せてご覧ください。

```c#
// ポータルの認証情報をユーザーに要求します (arcgis.com の OAuth 認証情報のリクエスト)
CredentialRequestInfo loginInfo = new CredentialRequestInfo();

// OAuth の暗黙的なグラントフローを使用します
loginInfo.GenerateTokenOptions = new GenerateTokenOptions
{
    TokenAuthenticationType = TokenAuthenticationType.OAuthImplicit
};

// 認証する URL（ポータル）を指定します（ArcGIS Online）
loginInfo.ServiceUri = new Uri("http://www.arcgis.com/sharing/rest");

try
{
    // AuthenticationManager の GetCredentialAsync を呼び出し、チャレンジハンドラを起動します
    Credential cred = await AuthenticationManager.Current.GetCredentialAsync(loginInfo, false);
    AuthenticationManager.Current.AddCredential(cred);

    // 認証情報を使用してポータル（ArcGIS Online）に接続します
    ArcGISPortal arcgisPortal = await ArcGISPortal.CreateAsync(loginInfo.ServiceUri);

    // ポータルから LicenseInfo を取得します
    LicenseInfo licenseInfo = await arcgisPortal.GetLicenseInfoAsync();
    // ... アプリをオフラインにするためにライセンス（JSON 文字列）を保存したり、すぐにアプリを認証するためにコードをここに記述します ...
    // ライセンス情報を使ってアプリを認証します
    ArcGISRuntimeEnvironment.SetLicense(licenseInfo);
}
catch (Exception ex)
{
    // 例外処理を記述します。
    Console.WriteLine("ライセンス認証中の例外:" + ex);
}
```

ライセンス情報をローカルストレージに保存した場合、保存したライセンス情報を使用して、オフライン環境でアプリを起動してライセンスを取得できます。ストレージからライセンスを取得し、アプリを認証します。

```c#
// LicenseInfo を JSON 形式のテキストとして取得します
string licenseJson = licenseInfo.ToJson();
// ... テキスト文字列をローカルに保存します ...

// (起動時) ... デバイスに保存されているライセンス JSON を取得します ...
// 保存した JSON 文字列からライセンス情報を設定します
LicenseInfo license = LicenseInfo.FromJson(licenseJson);
```

