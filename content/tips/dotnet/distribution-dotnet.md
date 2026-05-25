+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Maps SDK for .NET を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/dotnet/distribution-dotnet/"]
+++

ArcGIS Maps SDK for .NET を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## API キーの設定
[ArcGIS Location Platform のロケーション サービス](../../../guide/services/)を使用する場合は、アプリで API キーを設定する必要があります。API キーの詳細は [API キーの取得](../../../guide/get-api-key/)を、API キーの設定方法はアプリの作成の [API キーを設定する](../../../guide/create-app/create-startup-app-dotnet/#api-キーを設定する)をご参照ください。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
2. __[ライセンスの認証パターン](#ライセンスの認証パターン)__
    * __[Lite ライセンス キーの取得方法](#lite-ライセンス-キーの取得方法)__
    * __[Lite ライセンスの認証](#lite-ライセンスの認証)__
    * __[Basic ライセンスの認証](#basic-ライセンスの認証)__
    * __[Standard ライセンスの認証](#standard-ライセンスの認証)__
    * __[Advanced ライセンスの認証](#advanced-ライセンスの認証)__
    * __[Analysis Extension ライセンスの認証](#analysis-extension-ライセンスの認証)__
    * __[Advanced Editing Extension ライセンスの認証](#advanced-editing-extension-ライセンスの認証)__


3. __[ライセンスの認証方法](#ライセンスの認証方法)__
    * __[ライセンス キーを使用した認証](#ライセンス-キーを使用した認証)__
    * __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__


## 使用するライセンスの選択

ArcGIS Maps SDK for .NET には Lite、Basic、Standard、Advanced の 4 つのライセンス レベルと Analysis、Advanced Editing の 2 つのエクステンションがあります。Analysis エクステンションは Standard ライセンス以上、Advanced Editing エクステンションは Basic ライセンス以上で利用可能です。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は[ESRIジャパン製品ページ](https://www.esrij.com/products/arcgis-maps-sdk-for-dotnet/license/)をご参照ください。

## ライセンスの認証パターン

ライセンスの認証は次の2つの方法があります。

1. __ライセンス キーを使用した認証__
    * ライセンス キーを使用した認証では、Lite ライセンスの場合は My Esri から取得でき、Basic 以上のライセンスの場合は ArcGIS Native Apps の配布パックを購入して取得できます。取得したライセンス キーを利用して、アプリケーションを認証します。
    {{< callout type="important">}}
    バージョン 100.x / 200.x とバージョン 300.x ではライセンス キーが異なります。保守契約が有効なユーザーの方で、バージョン 300.x 用のライセンス キーが必要な方は、[My Esri からお問い合わせ](https://tech-support.esrij.com/arcgis/article/web/knowledge106.html)ください。
    {{< /callout >}}

2. __指定ユーザーによるアカウント認証__  
    * 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。
    * ログインを行う指定ユーザー アカウントのタイプによって関連付けられたライセンスのレベルが異なり、また認証はアプリにコードを含める必要があります。

### 指定ユーザーのユーザー タイプとライセンス レベルの対比表
| ユーザー タイプ | ライセンス レベル |
|:-----------|:------------|
| Viewer | Lite | 
| Contributor / Mobile Worker | Basic |
| Creator | Standard |
| Professional / Professional Plus | Advanced |

### Lite ライセンス キーの取得
ArcGIS Native Apps Lite のライセンス キーを My Esri のダッシュボードから取得し、取得したライセンス キーを利用して、アプリケーションを Lite ライセンスで認証することができます。
以下の手順で Lite レベルのライセンス キーを取得します。

 1. [My Esri](https://my.esri.com/) にアクセスしサインインします。
    * ArcGIS Location Platform アカウント、または、ArcGIS Online アカウントにサインインしてない場合は、いずれかのアカウントでサインインします。
    * いずれかのアカウントもお持ちでない場合は、ArcGIS Location Platform アカウントに [サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。
 2. 画面右上のプロフィール アイコンをクリックし、[Profiel & Settings] をクリックします。
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/distribution/myesri.png" width="600px">
 3. ダッシュボードの中にあるパネルから、[ArcGIS Maps SDKs for Native Apps ライセンス文字列] というパネルをクリックします。
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/distribution/myesri_profiel.png" width="600px">
 4. お使いの SDK バージョン向けのライセンス キーをコピーし、入手してください。
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/distribution/myesri_lite_license.png" width="600px">

### Lite ライセンスの認証

1. __ライセンス キーを使用した認証__
    * ArcGIS Native Apps Lite のライセンス キーを取得する必要があります
    * ライセンス キーの取得方法は [Lite のライセンス キーの取得](#lite-のライセンス-キーの取得)をご参照ください
    * 認証の方法は、[ライセンス キーを使用した認証](#ライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online /Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Native Apps Lite ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Basic ライセンスの認証

1. __ライセンス キーを使用した認証__
    * ArcGIS Native Apps Basic の配布パックを購入する必要があります
    * ArcGIS Native Apps の配布パックの購入については [ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Native Apps の配布パックをご購入頂いた場合、ESRIジャパンよりライセンス キーをメールにてお送りします。
    * 認証の手順は、[ライセンス キーを使用した認証](#ライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Native Apps Basic ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Standard ライセンスの認証

1. __ライセンス キーを使用した認証__
    * ArcGIS Native Apps Standard の配布パックを購入する必要があります
    * ArcGIS Native Apps の配布パックの購入については [ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Native Apps の配布パックをご購入頂いた場合、ESRIジャパンよりライセンス キーをメールにてお送りします。
    * 認証の手順は、[ライセンス キーを使用した認証](#ライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online /Portal for ArcGIS へのログインによる認証__<br>
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Native Apps Standard ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Advanced ライセンスの認証

1. __ライセンス キーを使用した認証__
    * ArcGIS Native Apps Advanced の配布パックを購入する必要があります
    * ArcGIS Native Apps の配布パックの購入については [ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Native Apps の配布パックをご購入頂いた場合、ESRIジャパンよりライセンス キーをメールにてお送りします。
    * 認証の手順は、[ライセンス キーを使用した認証](#ライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online /Portal for ArcGIS へのログインによる認証__<br>
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Native Apps Advanced ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証

1. __ライセンス キーを使用した認証__
    * ArcGIS Native Apps Analysis Extension の配布パックを購入する必要があります
    * ArcGIS Native Apps の配布パックの購入については [ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Native Apps の配布パックをご購入頂いた場合、ESRIジャパンよりライセンス キーをメールにてお送りします。
    * 認証の手順は、[ライセンス キーを使用した認証](#ライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online /Portal for ArcGIS へのログインによる認証__<br>
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Native Apps Analysis アドオン ライセンスを割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Advanced Editing Extension ライセンスの認証

1. __ライセンス キーを使用した認証__
    * ArcGIS Native Apps Advanced Editing Extension の配布パックを購入する必要があります
    * ArcGIS Native Apps の配布パックの購入については [ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Native Apps の配布パックをご購入頂いた場合、ESRIジャパンよりライセンス キーをメールにてお送りします。
    * 認証の手順は、[ライセンス キーを使用した認証](#ライセンス-キーを使用した認証)をご参照ください

2. __Portal for ArcGIS へのログインによる認証__<br>
注意：この認証は、ArcGIS Enterprise 11.1 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに Portal for ArcGIS の指定ユーザー アカウント（Advanced Editing ユーザー タイプ エクステンションを割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

## ライセンスの認証方法

以下の認証に応じた作業を行ってください。

### ライセンス キーを使用した認証

ArcGIS Native Apps の配布パックを My Esri から購入し、取得したライセンス キーを利用して、アプリケーションを認証することができます。

アプリケーションのコードにおいて SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンス キーを設定します。

```csharp
// 取得したライセンス文字列でアプリのライセンスを設定します
string licenseKey = "nativelite,3000,rud#########,day-month-year,####################";
ArcGISRuntimeEnvironment.SetLicense(licenseKey);
```

Analysis Extension ライセンスを認証する場合は以下のコードを使用します。

```csharp
// 基本ライセンスとエクステンション ライセンスのリストを設定します
string licenseKey = "nativelite,3000,rud#########,day-month-year,####################";
string[] extensions = { "nativeanalysis,3000,rud#########,day-month-year,####################" };
Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.SetLicense(licenseKey, extensions);
```


### 指定ユーザー アカウントを使用した認証

 アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する ArcGIS Online 組織向けプランもしくは Portal for ArcGIS の指定ユーザー アカウントを使用して ArcGIS Online /Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

アプリケーションのコードにおいて SDK の機能が呼び出される前に、ライセンスを取得・設定します。以下のコードは、ArcGIS Online の指定ユーザーのライセンスを取得する方法を示しています。コードの前半で、ArcGIS Online ポータルを登録し、チャレンジ ハンドラーと OAuth 認証ハンドラーを設定することによって、[`AuthenticationManager`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.Security.AuthenticationManager.html) を構成します。

認証方法の詳細については、「[How to use user authentication in your app（英語）](https://developers.arcgis.com/net/license-and-deployment/use-a-license-in-your-app/#how-to-use-user-authentication-in-your-app)」や「[Security and authentication（英語）](https://developers.arcgis.com/net/security-and-authentication/)」も併せてご覧ください。

```csharp
// ポータルの認証情報をユーザーに要求します (arcgis.com の OAuth 認証情報のリクエスト)
CredentialRequestInfo loginInfo = new CredentialRequestInfo();

// 認証する URL（ポータル）を指定します（ArcGIS Online）
loginInfo.ServiceUri = new Uri("http://www.arcgis.com/sharing/rest");

try
{
    // AuthenticationManager の GetCredentialAsync を呼び出し、チャレンジ ハンドラーを起動します
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
{{<callout>}}
ライセンスのエクステンション：
メンバーのライセンス情報にエクステンションが含まれている場合、アプリが自動的にそのエクステンションを使用できるようライセンスが付与されます。
{{</callout>}}

ライセンス情報をローカル ストレージに保存した場合、保存したライセンス情報を使用して、オフライン環境でアプリを起動してライセンスを取得できます。ストレージからライセンスを取得し、アプリを認証します。

```csharp
// LicenseInfo を JSON 形式のテキストとして取得します
string licenseJson = licenseInfo.ToJson();
// ... テキスト文字列をローカルに保存します ...

// (起動時) ... デバイスに保存されているライセンス JSON を取得します ...
// 保存した JSON 文字列からライセンス情報を設定します
LicenseInfo license = LicenseInfo.FromJson(licenseJson);
```

