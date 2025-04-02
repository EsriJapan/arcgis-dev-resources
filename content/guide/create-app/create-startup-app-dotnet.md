+++
title = ".NET"
description = "ArcGIS Maps SDK for .NET を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight=6
aliases = ["/create-startup-app-dotnet/"]
+++

出典：ArcGIS Maps SDK for .NET - Tutorials - [Display a map](https://developers.arcgis.com/net/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for .NET を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-dotnet100.0/display_map_jp.png" width="650px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで 1 つ以上のデータ レイヤーを追加できます。マップ ビューを使用し、場所とズーム レベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形ベクター タイル ベースマップ レイヤーを使用して、富士山付近を表示する地図を作成します。

{{% notice note %}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services guide](https://developers.arcgis.com/documentation/mapping-apis-and-services/) の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{% /notice %}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための開発者アカウントもしくは ArcGIS Online アカウントが必要です。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/) (無料)してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/net/reference/system-requirements/)を満たしていることを確認します。

必要に応じて、[ArcGIS Maps SDK for .NET をインストール](../../../tips/dotnet/install-dotnet-200.x/)して、Visual Studio プロジェクト テンプレート (Windows のみ) とオフラインにコピーされた NuGet パッケージを利用することもできます。

## 認証の設定
このチュートリアルで使用するセキュアな ArcGIS ロケーション サービスにアクセスするには、ArcGIS Location Platform または ArcGIS Online アカウントを使用して、API キー認証またはユーザー認証を実装する必要があります。

このチュートリアルでは、API キー認証またはユーザー認証を実装することができます。以下の違いを比較してください。

#### API キー認証
* ユーザーはサインインする必要がありません。
* 適切な権限を持つ API キーの認証情報を作成する必要があります。
* API キーは長期間のアクセス トークンです。
* サービス使用料は、API キーの所有者/開発者に請求されます。
* 実装が最も簡単な認証方法です。
* 新規の ArcGIS 開発者に推奨される方法です。

詳しくは [API キー認証](https://developers.arcgis.com/kotlin/security-and-authentication/#api-key-authentication)をご覧ください。

このチュートリアルで使用するセキュアなリソースにアクセスする権限を持つ、新しい API キーのアクセス トークンを作成します。

1. [API キーの作成](../../get-api-key/)のチュートリアルを完了し、以下の権限を持つ API キーを作成します。
    * **Privileges**
        * **Location services** > **Basemaps**
2. **API キーのアクセス トークン** をコピーし、安全な場所に貼り付けます。これは後のステップで使用します。

#### ユーザー認証
* ユーザーは、ArcGIS アカウントでサインインする必要があります。
* ユーザー アカウントには、アプリケーションで使用する ArcGIS サービスにアクセスする権限が必要です。
* OAuth 認証情報の作成が必要です。
* アプリケーションには、リダイレクト URL とクライアント ID を使用します。
* サービスの使用料は、アプリケーションにサインインしたユーザーの組織に請求されます。

詳しくは、[ユーザー認証](https://developers.arcgis.com/kotlin/security-and-authentication/#user-authentication)をご覧ください。

このチュートリアルで使用するセキュアなリソースにアクセスするための新しい OAuth 認証情報を作成します。

1. [ユーザー認証用の OAuth 認証情報を作成する](https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/tutorials/create-oauth-credentials-user-auth/)チュートリアルを完了します。

2. **ClientID** と **RedirectURL** をコピーして安全な場所に貼り付けます。これらは後のステップで使用します。

このアプリケーションにアクセスするすべてのユーザーには、ベースマップ スタイル サービスにアクセスするためのアカウント権限が必要です。

{{% notice note %}}

**セキュリティと認証ガイド** : 認証の種類について詳しくは、[認証の種類](../../security/)をご覧ください。

{{% /notice %}}


## 開発またはダウンロード
このチュートリアルを完了するには、2 つの選択肢があります。
1. [オプション 1: コードを開発する](#オプション-1-コードを開発する)
2. [オプション 2: 完成したソリューションをダウンロードする](#オプション-2-完成したソリューションをダウンロードする)


## オプション 1: コードを開発する
### 新しい Visual Studio プロジェクトを作成する
ArcGIS Maps SDK for .NET は、Windows Presentation Framework (WPF)、Universal Windows Platform (UWP)、Windows UI Library (WinUI)、.NET MAUI 向けのアプリをサポートしています。
このチュートリアルの説明は、Visual Studio for Windows を使用して WPF .NET プロジェクトを作成する手順を説明します。

{{% notice note %}}

.NET API アプリを開発できるプラットフォームは、開発環境に応じて異なります。例えば、Visual Studio for Mac を使用する場合、WPFと UWP のプロジェクトは利用できません。詳しくは、[システム要件](https://developers.arcgis.com/net/reference/system-requirements/)をご覧ください。

{{% /notice %}}

1. Visual Studio を起動し、新しいプロジェクトを作成します。
   * Visual Studio の開始画面で、[新しいプロジェクトの作成] をクリックします。
   * <b>C#</b> 用の [WPF アプリケーション]テンプレートを選択します。テンプレートが表示されていない場合は、**テンプレートの検索**テキストボックスに `WPF アプリケーション` と入力すると、テンプレートを見つけることができます。
   * [次へ] をクリックします。
   * [新しいプロジェクトを構成します] 画面で必要な値を入力します。
     * プロジェクト名: `DisplayAMap`
     * 場所: `任意のフォルダーを選択`
    * [次へ] をクリックします。
        * フレームワークで `.NET 8.0 (長期的なサポート)` を選択します。
   * [作成] をクリックしてプロジェクトを作成します。

Visual Studio for Windows で開発する場合、ArcGIS Maps SDK for .NET には、サポートされる .NET プラットフォームごとにプロジェクト テンプレート セットが用意されています。これらのテンプレートは、Model-View-ViewModel（MVVM）デザイン パターンに従っています。ArcGIS Maps SDK for .NET Visual Studio Extension をインストールして、テンプレートを Visual Studio に追加します（Windows のみ）。詳細については、[インストールとセットアップ](../../../tips/dotnet/install-dotnet-200.x/)を参照してください。

{{% notice tip %}}

このチュートリアルの手順は、WPF for .NET（Visual Studio 2022 以降が必要）を使用してアプリケーションを作成することに特化しています。サポートされている他の .NET プラットフォームでアプリを完成させるには、ArcGIS Maps SDK for .NET プロジェクト テンプレートの 1 つからプロジェクトを作成できます。Visual Studio テンプレートの 1 つから開始する場合、ガイドに記載されているコードとプロジェクトに含まれるコードにいくつかの違いがあることがあります。

{{% /notice %}}

### API の参照を追加する

{{% notice note %}}

ArcGIS Maps SDK for .NET プロジェクト テンプレートの 1 つからプロジェクトを作成した場合、必要な NuGet パッケージが既にプロジェクトに追加されています。

{{% /notice %}}

1. [NuGet パッケージをインストール](https://learn.microsoft.com/en-us/nuget/quickstart/install-and-use-a-package-in-visual-studio)して、API への参照を追加します。
   * <b>ソリューション エクスプローラー</b>で、[参照] を右クリックし、[NuGet パッケージの管理] を選択します。
   * [NuGet パッケージ マネージャー] ウィンドウで、[パッケージ ソース] に `nuget.org` (右上)が選択されていることを確認します。
   * [参照] タブを選択して、<b>ArcGIS Maps SDK</b> を検索します。
   * 検索結果から、プラットフォームに適したパッケージを選択します。このチュートリアルでは<b>Esri.ArcGISRuntime.WPF</b> NuGet パッケージを選択します。
   * [バージョン] にパッケージの「最新の安定版...」が選択されていることを確認します。
   * [インストール] をクリックします。
   * NuGet は、パッケージの依存関係または競合を自動的に解決します。デフォルトでは、[変更のプレビュー] ダイアログが表示されます。 変更を確認し [OK] をクリックしてパッケージのインストールを続行します。
   * [ライセンスへの同意] ダイアログでライセンス条項を確認し、[同意する] をクリックしてパッケージをプロジェクトに追加します。
   * Visual Studio の [出力] ウィンドウで、パッケージが正常にインストールされたことを確認します。ターゲットの Windows バージョンに関するエラーが表示された場合は、次の手順で修正します。
   * [NuGet パッケージ マネージャー] ウィンドウを閉じます。

2. Visual Studio エラー リストに `The 'Esri.ArcGISRuntime.WPF' nuget package cannot be used to target 'net8.0-windows'. Target 'net8.0-windows10.0.19041.0' or later instead.` のようなエラーが表示される場合があります。その場合は、次の手順に従って対処してください。

    * <b>ソリューション エクスプローラー</b>で、ツリー ビューの <b>DisplayAMap</b> プロジェクト エントリを右クリックし、[プロジェクト ファイルの編集] を選択します。

    *  `<TargetFramework>` 要素を `net8.0-windows10.0.19041.0`（またはそれ以上）で更新します。

        ```csharp
        <PropertyGroup>
        <OutputType>WinExe</OutputType>
        <TargetFramework>net8.0-windows10.0.19041.0</TargetFramework>
        <UseWPF>true</UseWPF>
        </PropertyGroup>
        ```

    * プロジェクト ファイル (`DisplayAMap`) を保存して閉じます。


### アプリ ロジックを保存するビュー モデルを作成する

このアプリは、以降のすべてのチュートリアルで使用する基盤を構築するためのものです。堅固な設計で構築することをお勧めします。

<b>Model-View-ViewModel (MVVM)</b> デザイン パターンは、ユーザー インターフェイス要素 (および関連するコード) をアプリの基礎となるロジックから分離するアーキテクチャを提供します。このパターンでは、`モデル`はアプリで消費されるデータを表し、`ビュー` はユーザー インターフェイスであり、`ビューモデル` にはモデルとビューをバインド (結合) するロジックが含まれます。このようなパターンに必要な追加のフレームワークは、小規模なプロジェクトでは大変な作業に思えるかもしれませんが、プロジェクトの複雑さが増すにつれて、堅固な設計を行うことでコードの保守性と柔軟性が大幅に向上します。

MVVM で設計された ArcGIS アプリでは、通常、マップ ビューがメインのビュー コンポーネントになります。クラスの多くは、モデルの役割を果たします (データをマップ、レイヤー、グラフィックス、フィーチャなどとして表します)。 ビュー モデル コンポーネントには、ArcGIS オブジェクトを操作するためのロジックを追加したり、ビューに表示するためのデータを提供したりするため、記述するコードの多くはここになります。

{{% notice note %}}

すべての ArcGIS Maps SDK for .NET プロジェクト テンプレートは、MVVM デザインパターンを使用しています。

{{% /notice %}}

1. プロジェクトのビュー モデルを定義する新しいクラスを追加します。
   * [プロジェクト] メニュー > [クラスの追加...] をクリックします。
   * 新しいクラスに `MapViewModel.cs` と名前を付けます。
   * [追加] をクリックして新しいクラスを作成し、プロジェクトに追加します。
   * 新しいクラスが VisualStudio で開きます。
2. 必要な `using` ステートメントをビュー モデルに追加します。

    MapViewModel.cs

    ```csharp
    using System;
    using System.Collections.Generic;
    using System.Text;

    // 追加開始
    using Esri.ArcGISRuntime.Mapping;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    // 追加終了
    ```

3. MapViewModel クラスに `INotifyPropertyChanged` インターフェイスを実装します。

   このインターフェイスは、ビュー モデルのプロパティが変更されたことをクライアント (ビュー) に通知するために使用される `PropertyChanged` イベントを定義します。

    MapViewModel.cs

    ```csharp
    namespace DisplayAMap
    {
        // 変更前
        // internal class MapViewModel
        // 変更後
        internal class MapViewModel : INotifyPropertyChanged
        {
        }
    }
    ```

4. `MapViewModel` クラス内に、`PropertyChanged` イベントを実装するコードを追加します。

   ビュー モデルのプロパティが変更されると、`OnPropertyChanged` の呼び出しにより、このイベントが発生します。

    MapViewModel.cs

    ```csharp
    class MapViewModel : INotifyPropertyChanged
    {
        // 追加開始
        public event PropertyChangedEventHandler? PropertyChanged;
        protected void OnPropertyChanged([CallerMemberName] string propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        // 追加終了
    }
    ```

5. ビュー モデルに [`Map`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.Mapping.Map.html) オブジェクトを公開する `Map` という新しいプロパティを定義します。
   プロパティが設定されると、`OnPropertyChanged` を呼び出します。

    MapViewModel.cs

    ```csharp
        public event PropertyChangedEventHandler? PropertyChanged;
        protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        // 追加開始
        private Map? _map;
        public Map? Map
        {
            get { return _map; }
            set
            {
                _map = value;
                OnPropertyChanged();
            }
        }
        // 追加終了
    }
    ```

6. `MapViewModel` クラスに `SetupMap` という関数を追加します。この関数は、新しいマップを作成して `Map` プロパティを設定します。

   マップは、地形 ベクタータイル ベースマップを使用します。ベースマップのデフォルトのラベル表示は英語のため、日本語に変更します。

    MapViewModel.cs

    ```csharp
        private Map _map;
        public Map Map
        {
            get { return _map; }
            set
            {
                _map = value;
                OnPropertyChanged();
            }
        }

        // 追加開始
        private void SetupMap()
        {
            //ベースマップのラベルを日本語で表示します。
            BasemapStyleParameters bsp = new BasemapStyleParameters();
            bsp.SpecificLanguage = System.Globalization.CultureInfo.CreateSpecificCulture("ja");
            Basemap basemap = new Basemap(BasemapStyle.ArcGISTopographic, bsp);
            //地形 ベクタータイル ベースマップを使用して新しいマップを作成します。
            Map = new Map(basemap);
        }
        // 追加終了
    }
    ```

7. `MapViewModel` が新規にインスタンス化された際に、`SetupMap` 関数を呼び出すコンストラクターを追加します。

   `MapViewModel newMapVM = new MapViewModel();` のようなコードを書くと、クラス コンストラクターが実行されます。これはクラスが初期化された時に実行する必要があるコードを追加するのに良い場所です。

    MapViewModel.cs

    ```csharp
    class MapViewModel : INotifyPropertyChanged
    {
        // 追加開始
        public MapViewModel()
        {
            SetupMap();
        }
        // 追加終了

        public event PropertyChangedEventHandler? PropertyChanged;
        protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    ```

これで `MapViewModel` が完成しました。

<b>MVVM</b> デザイン パターンを使用する利点は、ビュー モデルのコードを再利用できることです。API はプラットフォーム間でほぼ標準的な API サーフェスを持っているため、１つのアプリ用に作成した `ビュー モデル` のコードは、通常、サポートされているすべての .NET プラットフォームで動作します。


### 開発者認証情報の設定
アプリのユーザーが ArcGIS Location Service やセキュアなコンテンツにアクセスできるようにするには、[認証の設定](#認証の設定)ステップで作成した開発者認証情報を使用して、リソースへのアクセスを認証します。

#### アプリで API キーを設定する

1. <b>ソリューション エクスプローラー</b>で、<b>App.xaml</b> のノードを展開し、<b>App.xaml.cs</b> をダブルクリックして開きます。

2. App クラスで、`OnStartup()` 関数のオーバーライドを追加して、[`ArcGISRuntimeEnvironment`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.html) で `ApiKey` プロパティを設定します。


    App.xaml.cs

    ```csharp
    public partial class App : Application
    {
        // 追加開始
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            // 注: API キーをソース コードに保存することはベスト プラクティスではありません。
            // API キーは、チュートリアルの便宜上、ここで参照されています。
            Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.ApiKey = "API キー";
        }
        // 追加終了
    }
    ```
    {{% notice note %}}

    API キーは、このチュートリアルの便宜上、コードに直接格納されていますが、ソース コードに API キーを格納することは、ベスト プラクティスではありません。

    {{% /notice %}}


3. `App.xaml.cs` ファイルを保存して閉じます。

#### アプリでユーザー認証を使用する

1. Visual Studio の [プロジェクト] メニューから [クラスの追加] を選択します。クラス名を `ArcGISLoginPrompt.cs` とし、[追加] をクリックします。新しいクラスがプロジェクトに追加され、Visual Studio で開きます。
2. 新しいクラスのコードをすべて選択し、削除します。
3. 以下のコードをすべてコピーし、プロジェクトの `ArcGISLoginPrompt.cs` クラスに貼り付けます。

ArcGISLoginPrompt.cs
```csharp
// Copyright 2021 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.

using Esri.ArcGISRuntime.Security;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using System.Windows.Threading;

namespace UserAuth
{

    internal static class ArcGISLoginPrompt
    {
        private const string ArcGISOnlineUrl = "https://www.arcgis.com/sharing/rest";
        // Specify the Client ID and Redirect URL to use with OAuth authentication.
        // See the instructions here for creating OAuth app settings:
        // https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/tutorials/create-oauth-credentials-user-auth/

        private const string AppClientId = "YOUR_CLIENT_ID";
        private const string OAuthRedirectUrl = "YOUR_REDIRECT_URL";

        public static async Task<bool> EnsureAGOLCredentialAsync()
        {
            bool loggedIn = false;

            try
            {
                // Create a challenge request for portal credentials (OAuth credential request for arcgis.com)
                CredentialRequestInfo challengeRequest = new CredentialRequestInfo
                {
                    // Use the OAuth authorization code workflow.
                    GenerateTokenOptions = new GenerateTokenOptions
                    {
                        TokenAuthenticationType = TokenAuthenticationType.OAuthAuthorizationCode
                    },

                    // Indicate the url (portal) to authenticate with (ArcGIS Online)
                    ServiceUri = new Uri(ArcGISOnlineUrl)
                };

                // Call GetCredentialAsync on the AuthenticationManager to invoke the challenge handler
                Credential? cred = await AuthenticationManager.Current.GetCredentialAsync(challengeRequest, false);
                loggedIn = cred != null;
            }
            catch (OperationCanceledException)
            {
                // OAuth login was canceled, no need to display error to user.
            }
            catch (Exception ex)
            {
                // Login failure
                MessageBox.Show("Login failed: " + ex.Message);
            }

            return loggedIn;
        }

        public static void SetChallengeHandler()
        {
            var userConfig = new OAuthUserConfiguration(new Uri(ArcGISOnlineUrl), AppClientId, new Uri(OAuthRedirectUrl));
            AuthenticationManager.Current.OAuthUserConfigurations.Add(userConfig);
            AuthenticationManager.Current.OAuthAuthorizeHandler = new OAuthAuthorize();
        }

        #region OAuth handler

        // In a desktop (WPF) app, an IOAuthAuthorizeHandler component is used to handle some of the OAuth details. Specifically, it
        //     implements AuthorizeAsync to show the login UI (generated by the server that hosts secure content) in a web control.
        //     When the user logs in successfully, cancels the login, or closes the window without continuing, the IOAuthAuthorizeHandler
        //     is responsible for obtaining the authorization from the server or raising an OperationCanceledException.
        public class OAuthAuthorize : IOAuthAuthorizeHandler
        {
            // Window to contain the OAuth UI.
            private Window? _authWindow;

            // Use a TaskCompletionSource to track the completion of the authorization.
            private TaskCompletionSource<IDictionary<string, string>> _tcs;

            // URL for the authorization callback result (the redirect URI configured for your application).
            private string _callbackUrl = "";

            // URL that handles the OAuth request.
            private string? _authorizeUrl;

            // Function to handle authorization requests, takes the URIs for the secured service, the authorization endpoint, and the redirect URI.
            public Task<IDictionary<string, string>> AuthorizeAsync(Uri serviceUri, Uri authorizeUri, Uri callbackUri)
            {
                if (_tcs != null && !_tcs.Task.IsCompleted)
                    throw new Exception("Task in progress");

                _tcs = new TaskCompletionSource<IDictionary<string, string>>();

                // Store the authorization and redirect URLs.
                _authorizeUrl = authorizeUri.AbsoluteUri;
                _callbackUrl = callbackUri.AbsoluteUri;

                // Call a function to show the login controls, make sure it runs on the UI thread for this app.
                Dispatcher dispatcher = Application.Current.Dispatcher;
                if (dispatcher == null || dispatcher.CheckAccess())
                {
                    AuthorizeOnUIThread(_authorizeUrl);
                }
                else
                {
                    Action authorizeOnUIAction = () => AuthorizeOnUIThread(_authorizeUrl);
                    dispatcher.BeginInvoke(authorizeOnUIAction);
                }

                // Return the task associated with the TaskCompletionSource.
                return _tcs.Task;
            }

            // Challenge for OAuth credentials on the UI thread.
            private void AuthorizeOnUIThread(string authorizeUri)
            {
                // Create a WebBrowser control to display the authorize page.
                WebBrowser webBrowser = new WebBrowser();

                // Handle the navigation event for the browser to check for a response to the redirect URL.
                webBrowser.Navigating += WebBrowserOnNavigating;

                // Display the web browser in a new window.
                _authWindow = new Window
                {
                    Content = webBrowser,
                    Width = 450,
                    Height = 450,
                    WindowStartupLocation = WindowStartupLocation.CenterOwner
                };

                // Set the app's window as the owner of the browser window (if main window closes, so will the browser).
                if (Application.Current != null && Application.Current.MainWindow != null)
                {
                    _authWindow.Owner = Application.Current.MainWindow;
                }

                // Handle the window closed event then navigate to the authorize url.
                _authWindow.Closed += OnWindowClosed;
                webBrowser.Navigate(authorizeUri);

                // Display the window.
                _authWindow.ShowDialog();
            }

            // Handle the browser window closing.
            private void OnWindowClosed(object? sender, EventArgs e)
            {
                // If the browser window closes, return the focus to the main window.
                if (_authWindow != null && _authWindow.Owner != null)
                {
                    _authWindow.Owner.Focus();
                }

                // If the task wasn't completed, the user must have closed the window without logging in.
                if (!_tcs.Task.IsCompleted)
                {
                    // Set the task completion source exception to indicate a canceled operation.
                    _tcs.SetCanceled();
                }

                _authWindow = null;
            }

            // Handle browser navigation (content changing).
            private void WebBrowserOnNavigating(object sender, NavigatingCancelEventArgs e)
            {
                // Check for a response to the callback url.
                const string portalApprovalMarker = "/oauth2/approval";
                WebBrowser? webBrowser = sender as WebBrowser;

                Uri uri = e.Uri;

                // If no browser, uri, or an empty url, return.
                if (webBrowser == null || uri == null || string.IsNullOrEmpty(uri.AbsoluteUri))
                    return;

                // Check for redirect.
                bool isRedirected = uri.AbsoluteUri.StartsWith(_callbackUrl) ||
                    _callbackUrl.Contains(portalApprovalMarker) && uri.AbsoluteUri.Contains(portalApprovalMarker);

                // Check if browser was redirected to the callback URL. (This indicates succesful authentication.)
                if (isRedirected)
                {
                    e.Cancel = true;

                    // Call a helper function to decode the response parameters.
                    IDictionary<string, string> authResponse = DecodeParameters(uri);

                    // Set the result for the task completion source.
                    _tcs.SetResult(authResponse);

                    // Close the window.
                    if (_authWindow != null)
                    {
                        _authWindow.Close();
                    }
                }
            }

            private static IDictionary<string, string> DecodeParameters(Uri uri)
            {
                // Create a dictionary of key value pairs returned in an OAuth authorization response URI query string.
                string answer = "";

                // Get the values from the URI fragment or query string.
                if (!string.IsNullOrEmpty(uri.Fragment))
                {
                    answer = uri.Fragment.Substring(1);
                }
                else
                {
                    if (!string.IsNullOrEmpty(uri.Query))
                    {
                        answer = uri.Query.Substring(1);
                    }
                }

                // Parse parameters into key / value pairs.
                Dictionary<string, string> keyValueDictionary = new Dictionary<string, string>();
                string[] keysAndValues = answer.Split(new[] { '&' }, StringSplitOptions.RemoveEmptyEntries);
                foreach (string kvString in keysAndValues)
                {
                    string[] pair = kvString.Split('=');
                    string key = pair[0];
                    string value = string.Empty;
                    if (key.Length > 1)
                    {
                        value = Uri.UnescapeDataString(pair[1]);
                    }

                    keyValueDictionary.Add(key, value);
                }

                // Return the dictionary of string keys/values.
                return keyValueDictionary;
            }
        }

        #endregion OAuth handler
    }
}
```

4. クライアント ID (`AppClientId`) とリダイレクト URL (`OAuthRedirectUri`)の値を追加します。これらは、[認証の設定](#認証の設定)ステップで作成したユーザー認証設定です。

ArcGISLoginPrompt.cs
```csharp
internal static class ArcGISLoginPrompt
    {
        private const string ArcGISOnlineUrl = "https://www.arcgis.com/sharing/rest";
        // Specify the Client ID and Redirect URL to use with OAuth authentication.
        // See the instructions here for creating OAuth app settings:
        // https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/tutorials/create-oauth-credentials-user-auth/

        // 更新開始
        private const string AppClientId = "YOUR_CLIENT_ID";
        private const string OAuthRedirectUrl = "YOUR_REDIRECT_URL";
        // 更新終了
```

5. [ソリューション エクスプローラー] で <b>App.xaml</b> のノードを展開し、<b>App.xaml.cs</b> をダブルクリックして開きます。
6. App クラスで `OnStartup()` 関数のオーバーライドを追加して、静的 `ArcGISLoginPrompt` クラスの `SetChallengeHandler()` メソッドを呼び出します。

App.xaml.cs
```csharp
    public partial class App : Application
    {

        // 追加開始
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            // Call a function to set up the AuthenticationManager for OAuth.
            UserAuth.ArcGISLoginPrompt.SetChallengeHandler();

        }
        // 追加終了

    }
}
```

7. App.xaml.cs ファイルを保存して閉じます。

{{% notice note %}}

OAuth 認証情報は、このチュートリアルの便宜上、コードに直接格納されていますが、本番環境では認証情報をソース コードに直接保存しないでください。

{{% /notice %}}


### マップ ビューを追加する

[`MapView`](https://developers.arcgis.com/net/api-reference/api/netwin/wpf/Esri.ArcGISRuntime.UI.Controls.MapView.html) コントロールは、マップを表示するために使用します。 マップ ビューをプロジェクトの UI に追加し、`MapViewModel` で定義したマップを使用するように設定します。

1. 必要な XML 名前空間とリソースを追加します。
   * `MainWindow.xaml` を開き、<b>XAML</b> ビューに切り替えます。
   * 既存の名前空間の宣言内に、ArcGIS コントロールの `esri` XML 名前空間を追加します。
   * `MapViewModel` インスタンスを静的リソースとして定義する XAML を追加します。

    MainWindow.xaml

    ```xml
    <Window x:Class="DisplayAMap.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:local="clr-namespace:DisplayAMap"

            <!--追加開始-->
            xmlns:esri="http://schemas.esri.com/arcgis/runtime/2013"
            <!--追加終了-->

            mc:Ignorable="d"
            Title="MainWindow" Height="450" Width="800">

        <!--追加開始-->
        <Window.Resources>
            <local:MapViewModel x:Key="MapViewModel" />
        </Window.Resources>
        <!--追加終了-->

        <Grid>
        </Grid>
    ```

2. [`MapView`](https://developers.arcgis.com/net/api-reference/api/netwin/wpf/Esri.ArcGISRuntime.UI.Controls.MapView.html) コントロールを `MainWindow.xaml` に追加し、`MapViewModel` にバインドします。
   * `MainMapView` という名前の `MapView` コントロールを定義する XAML を追加します。
   * データ バインディングを使用して、`MapViewModel` リソースを使用しコントロールの `Map` プロパティを設定します。

    MainWindow.xaml

    ```xml
    <Window.Resources>
        <local:MapViewModel x:Key="MapViewModel" />
    </Window.Resources>

    <Grid>
    <!--追加開始-->
        <esri:MapView x:Name="MainMapView" Map="{Binding Map, Source={StaticResource MapViewModel}}" />
    <!--追加終了-->
    </Grid>
    ```

### マップ ビューの視点を設定する

ウィンドウの読み込み時にマップ ビューの視点 (ビュー ポイント) を設定します。富士山を中心にマップを表示するための、位置と縮尺を定義します。

1. `MainWindow.xaml.cs` を開きます。 これは、`MainWindow.xaml` に関連付けられたコードと、それが定義するユーザー インターフェイス要素を含むコード ビハインド ファイルです。
2. 必要な using ステートメントを追加します。

    MainWindow.xaml.cs

    ```csharp
    using System.Windows.Navigation;
    using System.Windows.Shapes;

    // 追加開始
    using Esri.ArcGISRuntime.Geometry;
    using Esri.ArcGISRuntime.Mapping;
    // 追加終了

    namespace DisplayAMap
    {
    ```

3. `MainWindow` のコンストラクターで、新しい [`Viewpoint`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.Mapping.Viewpoint.html) を定義するコードを追加し、マップ ビューに適用します。

    MainWindow.xaml.cs

    ```csharp
    public MainWindow()
    {
        InitializeComponent();

        // 追加開始
        // マップの中心位置として設定する MapPoint を作成
        MapPoint mapCenterPoint = new MapPoint(138.727363, 35.360626, SpatialReferences.Wgs84);
        // マップの視点を決める Viewpoint を設定
        MainMapView.SetViewpoint(new Viewpoint(mapCenterPoint, 200000.0));
        // 追加終了
    }
    ```

### アプリを実行する

[デバッグ] メニュー > [デバッグの開始] をクリックして (またはキーボードの <b>\<F5></b> キーを押して) アプリを実行します。

富士山を中心に、地形 ベクタータイル ベースマップ レイヤーが追加されたマップが表示されます。マップ ビュー上でマウス ホイールをダブルクリック、ドラッグ、およびスクロールして、マップを操作します。

完成版のプロジェクトは[こちら](https://developers.arcgis.com/net/zips/display-a-map.zip)からダウンロードできます (マップの表示場所は本チュートリアルで設定した場所とは異なります)。

## Web マップを表示する
「[Web マップの作成](../../services/create-webmap/)」のガイドで Web マップを作成している場合は、作成した Web マップも基本的に同じステップで表示できます。

1. Visual Studio で、[マップを表示する](#マップを表示する)のステップで作成したプロジェクトの MapViewModel.cs を開きます。
2. 必要な using ステートメントを追加します。

    MapViewModel.cs

    ```csharp
    using Esri.ArcGISRuntime.Portal;
    using System.Threading.Tasks;
    ```

3. MapViewModel.cs 内の SetupMap 関数を下記のように書き換えます。

    MapViewModel.cs

    ```csharp
    private async Task SetupMap()
    {
        // ArcGIS ポータルを作成します。URI を指定しない場合は "www.arcgis.com" を使用します。
        ArcGISPortal portal = await ArcGISPortal.CreateAsync();

        // アイテム ID を使用して、Web マップをポータル アイテムとして取得します。
        PortalItem mapItem = await PortalItem.CreateAsync(portal, "Web マップの ID");

        // ポータル アイテムからマップを作成します。
        Map map = new Map(mapItem);

        // マップを表示するには、マップ ビューにバインドされている MapViewModel.Map プロパティを設定します。
        this.Map = map;
    }
    ```

## オプション 2: 完成したソリューションをダウンロードする
1. [Download solution](https://developers.arcgis.com/net/zips/display-a-map.zip) をクリックしてください。
2. マシンの任意の場所にファイルを解凍します。
3. .sln ファイルを Visual Studio で開きます。

ダウンロードしたソリューションには認証情報が含まれていないため、[認証の設定](#認証の設定)で作成した開発者認証情報を追加する必要があります。

#### アプリで API キーを設定する
1. Visual Studio の<b>ソリューション エクスプローラー</b>で、<b>App.xaml.cs</b> をクリックしてファイルを開きます。
2. ArcGISEnvironment.ApiKey プロパティに API キーのアクセス トークンを設定します。

App.xaml.cs
```csharp
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            // Set the access token for ArcGIS Maps SDK for .NET.
            Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.ApiKey = "YOUR_ACCESS_TOKEN";

            // Call a function to set up the AuthenticationManager for OAuth.
            UserAuth.ArcGISLoginPrompt.SetChallengeHandler();

        }
```

3. ユーザー認証を設定するコードを削除します。

App.xaml.cs
```csharp
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            // Set the access token for ArcGIS Maps SDK for .NET.
            Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.ApiKey = "YOUR_ACCESS_TOKEN";

            // 削除開始
            // Call a function to set up the AuthenticationManager for OAuth.
            UserAuth.ArcGISLoginPrompt.SetChallengeHandler();
            // 削除終了

        }
```

{{% notice note %}}

アクセス トークンは、このチュートリアルの便宜上、コードに直接格納されていますが、本番環境では認証情報をソース コードに直接保存しないでください。

{{% /notice %}}

#### アプリでユーザー認証を使用する
1. Visual Studio のソリューション エクスプローラーから ArcGISLoginPrompt.cs ファイルを開きます。
2. クライアント ID (`OAuthClientID`) とリダイレクト URL (`OAuthRedirectUri`) の値を設定します。これらは[認証の設定](#認証の設定)で作成したユーザー認証設定です。

ArcGISLoginPrompt.cs
```csharp
    internal static class ArcGISLoginPrompt
    {
        private const string ArcGISOnlineUrl = "https://www.arcgis.com/sharing/rest";
        // Specify the Client ID and Redirect URL to use with OAuth authentication.
        // See the instructions here for creating OAuth app settings:
        // https://developers.arcgis.com/documentation/security-and-authentication/user-authentication/tutorials/create-oauth-credentials-user-auth/

        private const string AppClientId = "YOUR_CLIENT_ID";
        private const string OAuthRedirectUrl = "YOUR_REDIRECT_URL";
```

3. Visual Studio のソリューション エクスプローラーで App.xaml.cs をクリックしてファイルを開きます。
4. API キーのアクセス トークンを設定するコード行を削除します。

App.xaml.cs
```csharp
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            // 削除開始
            // Set the access token for ArcGIS Maps SDK for .NET.
            Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.ApiKey = "YOUR_ACCESS_TOKEN";
            // 削除終了

            // Call a function to set up the AuthenticationManager for OAuth.
            UserAuth.ArcGISLoginPrompt.SetChallengeHandler();

        }

```

{{% notice note %}}

OAuth 認証情報は、このチュートリアルの便宜上、コードに直接格納されていますが、本番環境では認証情報をソース コードに直接保存しないでください。

{{% /notice %}}

### アプリを実行する

[デバッグ] メニュー > [デバッグの開始] をクリックして (またはキーボードの <b>\<F5></b> キーを押して) アプリを実行します。
カリフォルニア州サンタモニカ山脈を中心とした地形図ベースマップ レイヤーの地図が表示されます。マップ ビューをダブルクリック、ドラッグ、マウス ホイールをスクロールしてマップを操作します。

---
アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)
