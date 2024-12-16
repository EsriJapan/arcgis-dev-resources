+++
title = "アプリケーション配布ガイド"
description = "ArcGIS Maps SDK for Flutter を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を紹介します。"
weight = 2
aliases = ["/android/distribution-flutter-200.x/"]
+++

ArcGIS Maps SDK for Flutter (バージョン 200.x) を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## API キーの設定
[ArcGIS Location Platform のロケーション サービス](../../../guide/services/)を使用する場合は、アプリで API キーを設定する必要があります。API キーの詳細は[API キーの取得](../../../guide/get-api-key/)を、API キーの設定方法はアプリの作成の[API キーを設定する](../../../guide/create-app/create-startup-app-flutter/#api-キーを設定する)をご覧ください。

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
    * __[Lite ライセンスキーを使用した認証](#lite-ライセンス-キーを使用した認証)__
    * __[配布パックのライセンスキーを使用した認証](#配布パックのライセンス-キーを使用した認証)__
    * __[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)__

## 使用するライセンスの選択

ArcGIS Maps SDK for Flutter には Lite、Basic、Standard の 3 つのライセンス レベルと Analysis エクステンションがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示（2D/3D）<br>・フィーチャの表示/検索<br>・フィーチャのオンライン/オフライン編集（ArcGIS Online/ArcGIS Enterprise のパブリックなフィーチャ サービス、ArcGIS Location Platform のフィーチャサービス）<br>・ルート検索/到達圏解析/最寄り施設検索<br>・住所検索/リバース ジオコーディング<br> |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャのオンライン/オフライン編集（ArcGIS Online/ArcGIS Enterprise のセキュアなフィーチャ サービス）<br>・モバイル ジオデータベースの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・シェープ ファイルの表示/編集<br>・GeoPackage の表示/編集<br>|
| Analysis Extension | ・Standard ライセンスで利用可能なエクステンション<br>・オフラインでの到達圏解析/最寄り施設検索 |
| Advanced Editing Extension | ・Basic ライセンス以上で利用可能なエクステンション</br>・ブランチ バージョン ジオデータベースに新しいバージョンの作成</br>・ブランチ バージョン ジオデータベースのバージョンのフィーチャ/テーブルの編集</br>|

ライセンスの詳細は [ESRIジャパン製品ページ](https://www.esrij.com/products/arcgis-maps-sdk-for-flutter/license/)をご参照ください。

## ライセンスの認証方法

ライセンスの認証は次の2つの方法があります。

1. __ライセンス キーを使用した認証__
    * ライセンス キーを使用した認証は、ArcGIS Runtime の配布パックを購入し、取得したライセンス キーを利用して、アプリケーションを認証します。

2. __指定ユーザーによるアカウント認証__  
    * 指定ユーザーによるアカウント認証とは、ArcGIS Online または ArcGIS Enterprise の組織のメンバーである ArcGIS 組織アカウントを使用してログイン認証を行います。
    * ログインを行う指定ユーザー アカウントのタイプによって関連付けられたライセンスのレベルが異なります。

### 指定ユーザーのユーザー タイプとライセンス レベルの対比表
| ユーザー タイプ | ライセンス レベル |
|:-----------|:------------|
| Viewer | Lite | 
| Contributor / Mobile Worker | Basic |
| Creator | Standard |
| Professional / Professional Plus | Advanced <sup>※1</sup>|

※1 ArcGIS Maps SDK for Flutter には Advanced ライセンスはありません。

### Lite ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Lite のライセンス キーを取得する必要があります
    * 認証の方法は、[Lite ライセンス キーを使用した認証](#lite-ライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Lite ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Basic ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Basic の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンス キーを使用した認証](#配布パックのライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Basic ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Standard ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Standard の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
    注意：この認証は、Portal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Standard ライセンス レベルを保有する）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Analysis Extension ライセンスの認証方法

1. __ライセンス キーを使用した認証__
    * ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
    * 認証の手順は、[配布パックのライセンス キーを使用した認証](#配布パックのライセンス-キーを使用した認証)をご参照ください

2. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__<br>
    注意：この認証は、Portal for ArcGIS をご利用の場合は、ArcGIS Enterprise 10.7 以前のバージョンでは使用できません。
    * アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウント（ArcGIS Runtime Analysis アドオン ライセンスを割り当てられた）が必要です
    * アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります
    * 認証の手順は、[指定ユーザー アカウントを使用した認証](#指定ユーザー-アカウントを使用した認証)をご参照ください

### Advanced Editing Extension ライセンスの認証方法

1. __ライセンス キーを使用した認証__
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

 1. [Get a license](https://developers.arcgis.com/flutter/license-and-deployment/get-a-license/#your-runtime-lite-license-string) ページにアクセスします
    * ArcGIS Location Platform アカウント、または、ArcGIS Online アカウントにサインインしてない場合は、いずれかのアカウントでサインインします。
    * いずれかのアカウントもお持ちでない場合は、ArcGIS Location Platform アカウントに [サインアップ](https://location.arcgis.com/sign-up/)（無料）してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。
 2. 表示されたライセンス キーをコピーします
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/distribution/lite_license.png" width="600px">
 3. 次に、アプリケーションのコードにおいて SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンス キーを設定します。

```dart
// 取得したライセンス文字列でアプリのライセンスを設定します
ArcGISEnvironment.setLicenseUsingKey(
    'runtimelite,1000,rud#########,day-month-year,####################',
);
```

### 配布パックのライセンス キーを使用した認証

ArcGIS Runtime の配布パックを購入し、取得したライセンス キーを利用して、アプリケーションを認証することができます。

ArcGIS Runtime の配布パックの購入については[ESRIジャパン](https://www.esrij.com/form/inquiry/)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンス キーをメールにてお送りします。

アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンス キーを設定します。

```dart
// 取得したライセンス文字列でアプリのライセンスを設定します
ArcGISEnvironment.setLicenseUsingKey(
    'runtimelite,1000,rud#########,day-month-year,####################',
);
```
Extension ライセンスを認証する場合は以下のコードを使用します。

```dart
// 基本ライセンスとエクステンション ライセンスのリストを設定します
ArcGISEnvironment.setLicenseUsingKey(
    'runtimelite,1000,rud#########,day-month-year,####################',
    extensions: [
        'runtimeanalysis,1000,rud#########,day-month-year,####################',
        'another license extension code',
    ],
);
```

### 指定ユーザー アカウントを使用した認証

アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する ArcGIS Online 組織向けプランもしくは Portal for ArcGIS の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、ライセンスを取得することができます。

アプリケーションのコードにおいて SDK の機能が呼び出される前に、ライセンスを取得・設定します。以下のコードは、ArcGIS Online の指定ユーザーのライセンスを取得する方法を示しています。

認証方法の詳細については、「[How to use named user authentication in your app（英語）](https://developers.arcgis.com/flutter/license-and-deployment/use-a-license-in-your-app/#how-to-use-user-authentication-in-your-app)」や「[Security and authentication（英語）](https://developers.arcgis.com/flutter/security-and-authentication/)」も併せてご覧ください。

```dart
// クレデンシャルを使用してポータル（ArcGIS Online）に接続します。
const url = 'https://myportal.com';
final portal = Portal(Uri.parse(url), connection: PortalConnection.authenticated);

// ポータルをロードします。
await portal.load();

// ポータルからメンバーのライセンス情報を取得します。
final licenseInfo = await portal.fetchLicenseInfo();

// メンバーの licenseInfo を使用してライセンスを設定します。
final licenseResult = ArcGISEnvironment.setLicenseUsingInfo(licenseInfo);
```

ライセンス情報をローカル ストレージに保存した場合、保存したライセンス情報を使用して、オフライン環境でアプリを起動してライセンスを取得できます。ストレージからライセンスを取得し、アプリを認証します。

```dart
// LicenseInfo を JSON 形式のテキストで取得します。
final licenseJson = licenseInfo.toJson();
// ... JSONをデバイスに保存します ...

// ... 起動時に、デバイスに保存されているライセンス JSON を取得します ...
// 取得した JSON からライセンス情報を設定します。
final licenseInfoFromJson = LicenseInfo.fromJson(licenseJson);
```