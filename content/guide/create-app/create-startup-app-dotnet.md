+++
title = ".NET"
description = "ArcGIS Maps SDK for .NET を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight=8
aliases = ["/create-startup-app-dotnet/"]
+++

出典：ArcGIS Maps SDK for .NET - Tutorials - [Display a map](https://developers.arcgis.com/net/maps-2d/tutorials/display-a-map/)

## マップを表示する

このチュートリアルでは ArcGIS Maps SDK for .NET を使用して、マップとベースマップ レイヤーを表示する方法を紹介します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/startup-dotnet100.0/display_map_jp.png" width="650px">

マップには、地理データのレイヤーが含まれています。マップには、ベースマップ レイヤーと、オプションで 1 つ以上のデータ レイヤーを追加できます。マップ ビューを使用し、場所とズーム レベルを設定することで、マップの特定の領域を表示できます。

このチュートリアルでは、地形 ベクタータイル ベースマップ レイヤーを使用して、富士山付近を表示する地図を作成します。

{{% notice note %}}

このチュートリアルのトピックの背景情報については、[Mapping API and location services](https://developers.arcgis.com/documentation/mapping-apis-and-services/) guide の [Maps (2D)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/maps-2d/) と [ベースマップ](../../../basemaps/) を参照してください。

{{% /notice %}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. API キーにアクセスするための ArcGIS 開発者アカウント。アカウントをお持ちでない場合は、[サインアップ](https://location.arcgis.com/sign-up/) (無料)してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。
2. 開発環境が[システム要件](https://developers.arcgis.com/net/reference/system-requirements/)を満たしていることを確認します。

必要に応じて、[ArcGIS Maps SDK for .NET をインストール](../../../tips/dotnet/install-dotnet-200.x/)して、Visual Studio プロジェクト テンプレート (Windows のみ) とオフラインにコピーされた NuGet パッケージを利用することもできます。

## ステップ

### 新しい Visual Studio プロジェクトを作成する
ArcGIS Maps SDK for .NET は、Windows Presentation Framework (WPF)、Universal Windows Platform (UWP)、Windows UI Library (WinUI)、.NET MAUI 向けのアプリをサポートしています。
このチュートリアルの説明は、Visual Studio for Windows を使用して WPF .NET プロジェクトを作成する手順を説明します。

{{% notice note %}}

.NET API アプリを開発できるプラットフォームは、開発環境に応じて異なります。例えば、Visual Studio for Mac を使用する場合、WP Fと UWP のプロジェクトは利用できません。詳しくは、[システム要件](https://developers.arcgis.com/net/reference/system-requirements/)をご覧ください。

{{% /notice %}}

1. Visual Studio を起動し、新しいプロジェクトを作成します。
   * Visual Studio の開始画面で、[新しいプロジェクトの作成] をクリックします
   * <b>C#</b> 用の [WPF アプリケーション]テンプレートを選択します。テンプレートが表示されていない場合は、テンプレートの検索テキストボックスに `WPF アプリケーション` と入力すると、テンプレートを見つけることができます。
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
   * <b>ソリューション エクスプローラー</b>で、[依存関係] を右クリックし、[NuGet パッケージの管理] を選択します。
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
*
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

### API キーを取得する

ArcGIS Online でホストされているサービス、Web マップ、および Web シーンにアクセスするには アクセストークンが必要です。

まだ取得していない場合は、[ArcGIS Developers のダッシュボード](https://location.arcgis.com/dashboard/)に移動してAPI キーを取得します。作成方法は「[API キーの取得](../get-api-key/)」をご覧ください。
このチュートリアルでは、ロケーション サービスのベースマップの権限が有効になっている API キーが必要です。

以下では、この API キーを使用します。

### アプリで API キーを設定する

1. <b>ソリューション エクスプローラー</b>で、<b>App.xaml</b> のノードを展開し、<b>App.xaml.cs</b> をダブルクリックして開きます。

2. App クラスで、`OnStartup()` 関数のオーバーライドを追加して、[`ArcGISRuntimeEnvironment`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.ArcGISRuntimeEnvironment.html) で `ApiKey` プロパティを設定します。

    {{% notice note %}}

    API キーは、このチュートリアルの便宜上、コードに直接格納されていますが、ソース コードに API キーを格納することは、ベスト プラクティスではありません。

    {{% /notice %}}

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

3. `App.xaml.cs` ファイルを保存して閉じます。

### アプリ ロジックを保存するビュー モデルを作成する

このアプリは、以降のすべてのチュートリアルで使用する基盤を構築するためのものです。堅固な設計で構築することをお勧めします。

<b>Model-View-ViewModel (MVVM)</b> デザイン パターンは、ユーザー インターフェイス要素 (および関連するコード) をアプリの基礎となるロジックから分離するアーキテクチャを提供します。このパターンでは、`モデル`はアプリで消費されるデータを表し、`ビュー` はユーザー インターフェースであり、`ビューモデル` にはモデルとビューをバインド (結合) するロジックが含まれます。このようなパターンに必要な追加のフレームワークは、小規模なプロジェクトでは大変な作業に思えるかもしれませんが、プロジェクトの複雑さが増すにつれて、堅固な設計を行うことでコードの保守性と柔軟性が大幅に向上します。

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
   ビュー モデルのプロパティが変更されると、OnPropertyChanged の呼び出しにより、このイベントが発生します。

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

次に、プロジェクトに `ビュー` を設定して、ビュー モデルを使用します。

### マップ ビューを追加する

[`MapView`](https://developers.arcgis.com/net/api-reference/api/netwin/wpf/Esri.ArcGISRuntime.UI.Controls.MapView.html) コントロールは、マップを表示するために使用します。 マップ ビューをプロジェクトの UI に追加し、`MapViewModel` で定義したマップを使用するように設定します。

1. 必要な XML 名前空間とリソースを追加します。
   * `MainWindow.xaml` を開き、<b>XAML</b> ビューに切り替えます。
   * 既存の名前空間の宣言内に、ArcGIS コントロールの esri XML 名前空間を追加します。
   * MapViewModel インスタンスを静的リソースとして定義する XAML を追加します。

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

---
アプリの動作が確認できたら [ArcGIS の セキュリティと認証について学びましょう！](../../security)
