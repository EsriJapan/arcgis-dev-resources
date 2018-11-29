
ArcGIS Runtime SDK for .NET を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
1. __[ライセンスの認証](#ライセンスの認証)__
  * __[Lite ライセンスの認証](#lite-ライセンスの認証)__
  * __[Basic ライセンスの認証](#basic-ライセンスの認証)__
  * __[Standard または Advanced ライセンスの認証](#standard-または-advanced-ライセンスの認証)__
  * __[エクステンション（Analysis）ライセンスの認証](#エクステンション（analysis）ライセンスの認証)__


## 使用するライセンスの選択

ArcGIS Runtime SDK for .NET には Lite、Basic、Standard、Advanced の 4 つのライセンス レベルと Analysis エクステンションがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示（2D/3D）<br>・フィーチャの表示/検索<br>・フィーチャのオンライン編集（パブリックなフィーチャ サービス）<br>・ルート検索/到達圏解析/最寄り施設検索<br>・住所検索/リバース ジオコーディング |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャのオンライン編集（セキュアなフィーチャ サービス）<br>・フィーチャのオフライン編集<br>・ArcGIS Online/Portal for ArcGIS のコンテンツの編集 |
| Standard | ・Basic ライセンスで利用できるすべての機能<br>・シェープファイルの表示/編集<br>・GeoPackage の表示/編集<br>・KML（ローカル ファイル）の表示<br>・ラスター データの表示/解析<br>・航海用電子海図（ENC）の表示<br>・ローカル サーバーの標準的な機能（WPF API のみ)|
| Advanced | ・Standard ライセンスで利用できるすべての機能<br>・ローカル サーバーの高度な機能（WPF API のみ) |
| エクステンション（Analysis）| ・Standard ライセンス以上で利用可能なエクステンション（Spatial/3D/Network）ライセンス（WPF API のみ)|

ライセンスの詳細は[ESRIジャパン製品ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/details/license/licensing/)をご参照ください。

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

## Standard または Advanced ライセンスの認証
アプリケーションを Standard または Advanced レベルで認証するには、以下の方法があります。

1. __ライセンスキーを使用した認証__
  * ArcGIS Runtime Standard または Advanced の配布パックを購入する必要があります
  * 認証の方法は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください

## エクステンション（Analysis）ライセンスの認証
  アプリケーションをエクステンション（Analysis）ライセンスで認証するには、以下の方法があります。

  1. __ライセンスキーを使用した認証__
    * ArcGIS Runtime Analysis Extension の配布パックを購入する必要があります
    * 基本ライセンス（Standard または Advanced）と併せて認証する必要があります
    * 認証の方法は、[配布パックのライセンスキーを使用した認証](#配布パックのライセンスキーを使用した認証)をご参照ください

### Lite ライセンスキーを使用した認証
ArcGIS Runtime Lite のライセンスキーを ArcGIS for Developers のサイトから取得し、取得したライセンスキーを利用して、アプリケーションを Lite ライセンスで認証することができます。
最初に以下の手順で Lite レベルのライセンスキーを取得します。

 1. [ArcGIS for Developers: Licensing Your ArcGIS Runtime App](https://developers.arcgis.com/arcgis-runtime/licensing/) ページにアクセスします（サインインを求められた場合は、ArcGIS for Developers アカウントでサインインします。アカウントの作成方法は[開発者アカウントの作成](http://esrijapan.github.io/arcgis-dev-resources/get-dev-account/)をご参照ください。）

 1. [Show my ArcGIS Runtime Lite license key] をクリックします

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/distribution/show_lite_license.png" width="400px">

 1. 表示されたライセンスキーをコピーします

 1. 次に、アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

```javascript
// ライセンスキーを設定して認証
string licenseKey = "runtimelite,1000,rud#########,day-month-year,####################";
Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.SetLicense(licenseKey);
```

## 配布パックのライセンスキーを使用した認証

ArcGIS Runtime の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを認証することができます。

ArcGIS Runtime の配布パックの購入については [ESRIジャパン](https://esrij.smartseminar.jp/public/application/add/356)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用して配布パックのライセンスキーを設定します。

```javascript
// ライセンスキーを設定して認証
string licenseKey = "runtimestandard,1000,rud#########,day-month-year,####################";
ArcGISRuntimeEnvironment.SetLicense(licenseKey);
```

エクステンション ライセンスを認証する場合は以下のコードを使用します。
```javascript
// 基本ライセンス（Standard または Advanced）のライセンスキーの設定
string licenseKey = "runtimestandard,1000,rud#########,day-month-year,####################";

// エクステンション ライセンスのライセンスキーの設定
string[] extensions = { "runtimeanalysis,1000,rud#########,day-month-year,####################" };

// 基本ライセンスとエクステンション ライセンスの認証
ArcGISRuntimeEnvironment.SetLicense(licenseKey, extensions);
```


## 指定ユーザー アカウントを使用した認証

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
    LicenseInfo licenseInfo = arcgisPortal.PortalInfo.LicenseInfo;

    // ArcGIS Runtime にライセンスを設定
    ArcGISRuntimeEnvironment.SetLicense(licenseInfo);

}
catch (Exception ex)
{
    MessageBox.Show(ex.Message, "認証のエラー");
}
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
