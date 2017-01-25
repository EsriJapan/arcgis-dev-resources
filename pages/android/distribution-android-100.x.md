
ArcGIS Runtime SDK for Android を使用して開発したアプリケーションを配布する場合に必要なライセンス認証の手順を説明します。

## ライセンス認証のステップ

開発したアプリケーションのライセンス認証のステップは以下の通りです。

1. __[使用するライセンスの選択](#使用するライセンスの選択)__
1. __[ライセンスの認証](#ライセンスの認証)__
  * __[Lite ライセンスの認証](#lite-ライセンスの認証)__
  * __[Basic ライセンスの認証](#basic-ライセンスの認証)__
1. __[アプリケーションへの帰属の追加](#アプリケーションへの帰属の追加)__


## 使用するライセンスの選択

ArcGIS Runtime SDK for Android には Lite、Basic の 2 つのライセンス レベルがあります。開発したアプリケーションが使用する機能に応じて、適切なライセンス レベルを選択してください。

各ライセンスで利用可能な機能の概要は以下の表をご参照ください。

| ライセンス | 利用できる機能 |
|:-----|:-----|
| Lite | ・地図表示<br>・フィーチャの表示/検索<br>・ルート検索<br>・住所検索 |
| Basic | ・Lite ライセンスで利用できるすべての機能<br>・フィーチャ編集<br>・ArcGIS Online の解析サービスの使用<br>・ArcGIS Online/Portal for ArcGIS のコンテンツの編集 |

ライセンスの詳細は[ESRIジャパン製品ページ](http://www.esrij.com/products/arcgis-runtime-sdk-for-android/details/license/)をご参照ください。

## ライセンスの認証

各ライセンス レベルで認証方法が異なります。使用するライセンス レベルのトピックをご参照ください。


## Lite ライセンスの認証
アプリケーションを Lite レベルで認証するには、以下の 2 つの方法があります。

1. __ライセンスキーを使用した認証__

 * ArcGIS Runtime Lite のライセンスキーを取得する必要があります。

1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__

 *  アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウントが必要です
 *  アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります


### ライセンスキーを使用した認証

  ArcGIS Runtime Lite のライセンスキーを ArcGIS for Developers のサイトから取得し、取得したライセンスキーを利用して、アプリケーションを Lite ライセンスで認証することができます。

  最初に以下の手順で Lite レベルのライセンスキーを取得します。

 1. [ArcGIS for Developers: Licensing Your ArcGIS Runtime App](https://developers.arcgis.com/arcgis-runtime/licensing/) ページにアクセスします（サインインを求められた場合は、ArcGIS for Developers アカウントでサインインします。アカウントの作成方法は[開発者アカウントの作成](http://esrijapan.github.io/arcgis-dev-resources/get-dev-account/)をご参照ください。）
 1. [Show my ArcGIS Runtime Lite license key] をクリックします
 
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/distribution/show_lite_license.png" width="400px">

 1. 表示されたライセンスキーをコピーします

 1. 次に、アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してアプリケーションにコピーしたライセンスキーを設定します。

  ```java
 // ライセンスキーを設定して認証
 ArcGISRuntimeEnvironment.setLicense("runtimelite,1000,rud#########,day-month-year,####################");
 ```


### ArcGIS Online / Portal for ArcGIS へのログインによる認証

 アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する [ArcGIS Online 組織向けプラン](http://www.esrij.com/products/arcgis-online/plan/organization/) もしくは [Portal for ArcGIS](http://www.esrij.com/products/arcgis-for-server/details/portal-for-arcgis/) の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、Lite ライセンスを取得することができます。

 アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してライセンスを取得します。

  ```java
  // namedユーザー情報で ArcGIS Online または ArcGISポータルに接続します。   
  UserCredential credential = new UserCredential("user", "password");
  
  //ArcGIS Online またはご自分の portal の URL を設定します。
  Portal portal = new Portal("https://your-org.arcgis.com/");
  portal.setCredential(credential);

  // ポータルの情報を同期してロードします。
  portal.loadAsync();
  portal.addDoneLoadingListener(new Runnable() {

    @Override
    public void run() {
      // ポータルからライセンス情報を取得します。
      LicenseInfo licenseInfo = null;
      try {
        licenseInfo = portal.getPortalInfo().getLicenseInfo();
      } catch (Exception e) {
        // エラーステータスが返ってきた場合のコードをここに作成します。
      }
      // 文字列のライセンス情報を取得します。
      String licenseJson = licenseInfo.toJson();

      // 取得したライセンスを設定します。
      ArcGISRuntimeEnvironment.setLicense(licenseInfo);

    }
 ```

 __アプリケーションが ArcGIS Online / Portal for ArcGIS に常にログインできない場合__

 配布するアプリケーションがネットワークに接続できない環境で実行するなどの理由により、起動時に毎回 ArcGIS Online / Portal for ArcGIS にログインすることができない場合は、取得したライセンス情報を最大 30 日までローカルに保存しておくことができます。

 この方法を使用する場合、少なくとも 30 日に 1 回はアプリケーションから ArcGIS Online / Portal for ArcGIS にログインし、ローカルのライセンス情報を更新する必要があります。最後にログインしてから 30 日以上経過した場合は、ライセンスが無効となり Lite ライセンスを必要とする機能が使用できなくなります。

 以下のコードを使用して取得したライセンス情報を配列で出力することができます。出力したライセンス情報は任意の方法でローカルに保存してください。
 以下のコードのように、を使用して取得したライセンス情報を配列で出力することができます。出力したライセンス情報は任意の方法でローカルに保存してください。

  ```java
  // オンラインで作成し、文字列で保存したライセンス情報を取得します。
  LicenseInfo licenseInfo = new LicenseInfo(licenseJSONstring);

  // 作成したライセンス情報を設定します。
  ArcGISRuntimeEnvironment.setLicense(licenseInfo);
 ```


## Basic ライセンスの認証

アプリケーションを Basic レベルで認証するには、以下の 2 つの方法があります。


1. __ライセンスキーを使用した認証__
 * ArcGIS Runtime Basic の配布パックを購入する必要があります

1. __ArcGIS Online / Portal for ArcGIS へのログインによる認証__
 *  アプリケーションを使用するユーザーごとに ArcGIS Online 組織向けプラン/ Portal for ArcGIS の指定ユーザー アカウントが必要です
 *  アプリケーションが少なくとも 30 日に 1 回は ArcGIS Online 組織向けプラン/ Portal for ArcGIS へログインする必要があります


### ライセンスキーを使用した認証

  ArcGIS Runtime Basic の配布パックを購入し、取得したライセンスキーを利用して、アプリケーションを Basic ライセンスで認証することができます。

  ArcGIS Runtime Basic の配布パックの購入については [ESRIジャパン](https://esrij.smartseminar.jp/public/application/add/356)にお問合せください。ArcGIS Runtime の配布パックをご購入頂いた場合、ESRIジャパンよりライセンスキーをメールにてお送りします。

  配布パックのライセンスキーを使用してアプリケーションを Basic レベルで認証するには以下のコードを使用します。

  ```java
  // ライセンスキーを設定して認証
  LicenseResult licenseResult = ArcGISRuntimeEnvironment.setLicense("runtimelite,1000,rud#########,day-month-year,####################");
  if(licenseResult.equals(LicenseStatus.INVALID)){
      // ログインに失敗したときの処理を記述する
      return;
  }
  ```

### ArcGIS Online / Portal for ArcGIS へのログインによる認証

 アプリケーションの実行時に、アプリケーションを利用するユーザーが保有する [ArcGIS Online 組織向けプラン](http://www.esrij.com/products/arcgis-online/plan/organization/) もしくは [Portal for ArcGIS](http://www.esrij.com/products/arcgis-for-server/details/portal-for-arcgis/) の指定ユーザー アカウントを使用して ArcGIS Online / Portal for ArcGIS にログインすることで、Basic ライセンスを取得することができます。

 アプリケーションのコードにおいて ArcGIS Runtime SDK の機能が呼び出される前に、以下のコードを使用してライセンスを取得します。

 ```java
 // namedユーザー情報で ArcGIS Online または ArcGISポータルに接続します。   
  UserCredential credential = new UserCredential("user", "password");
  
  //ArcGIS Online またはご自分の portal の URL を設定します。
  Portal portal = new Portal("https://your-org.arcgis.com/");
  portal.setCredential(credential);

  // ポータルの情報を同期してロードします。
  portal.loadAsync();
  portal.addDoneLoadingListener(new Runnable() {

    @Override
    public void run() {
      // ポータルからライセンス情報を取得します。
      LicenseInfo licenseInfo = null;
      try {
        licenseInfo = portal.getPortalInfo().getLicenseInfo();
      } catch (Exception e) {
        // エラーステータスが返ってきた場合のコードをここに作成します。
      }
      // 文字列のライセンス情報を取得します。
      String licenseJson = licenseInfo.toJson();

      // 取得したライセンスを設定します。
      ArcGISRuntimeEnvironment.setLicense(licenseInfo);

    }
 ```

 __アプリケーションが ArcGIS Online / Portal for ArcGIS に常にログインできない場合__

 配布するアプリケーションがネットワークに接続できない環境で実行するなどの理由により、起動時に毎回 ArcGIS Online / Portal for ArcGIS にログインすることができない場合は、取得したライセンス情報を最大 30 日までローカルに保存しておくことができます。

 この方法を使用する場合、少なくとも 30 日に 1 回はアプリケーションから ArcGIS Online / Portal for ArcGIS にログインし、ローカルのライセンス情報を更新する必要があります。最後にログインしてから 30 日以上経過した場合は、ライセンスが無効となり Basic ライセンスを必要とする機能が使用できなくなります。

  ```java
  // オンラインで作成し、文字列で保存したライセンス情報を取得します。
  LicenseInfo licenseInfo = new LicenseInfo(licenseJSONstring);

  // 作成したライセンス情報を設定します。
  ArcGISRuntimeEnvironment.setLicense(licenseInfo);
 ```

## アプリケーションへの帰属の追加

* __地図データへのクレジット__

 アプリケーション内で使用されている ArcGIS Online によって提供されている地図サービスのクレジット情報がアプリケーション内で明記されている必要があります。記載する必要があるテキストは地図サービスの REST サービスエンドポイントにおいて "Copyright Text" セクションに記載されています。

 例えば World_Imagery サービス を利用する場合に記載するテキストは以下の通りです。

 *Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community*

 ※ 上記テキストは [World_Imagery サービスの REST エンドポイント](https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer)の "Copyright Text" セクションに記載されています。


 * __Esri 帰属の表示__

  開発したアプリケーションのマップ上に Esri への帰属を表示する必要があります。ArcGIS Runtime SDK を使用して開発したアプリケーションでは、マップ画面にデフォルトで "Powered by Esri" の帰属が表示されています。この帰属が他の要素と重ならないように注意してください。


