
このインストール ガイドは、ArcGIS Runtime SDK for .NET をご使用のマシンにインストールする手順を紹介します。

## ArcGIS Runtime SDK for .NET とは

ArcGIS Runtime SDK for .NET は、Windows 及び iOS、Android プラットフォーム向け GIS アプリケーションの開発キット（SDK）です。この SDK を利用することで、データ編集、ジオコーディング、ルート解析など様々な GIS 機能を持ったアプリケーションを Windows デスクトップや Windows タブレット、iOS、Android などの多様なプラットフォーム向けに開発することができます。
詳細は、[ArcGIS Runtime SDK for .NET](http://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/) をご参照ください。

## ArcGIS Runtime SDK for .NET の開発環境

ArcGIS Runtime SDK for .NET を用いて、Windows や iOS、Android プラットフォーム向けの GIS アプリケーションを開発するには、一般的に統合開発環境として Microsoft Visual Studio を使用します。本インストールガイドの手順を行う前に、ご使用のマシンに ArcGIS Runtime SDK for .NET がサポートするバージョンの Windows OS 、Mac OS 及び Microsoft Visual Studio が適切にセットアップされている必要があります。ArcGIS Runtime SDK for .NET がサポートする最新の動作環境につきましては[動作環境](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/environments/)をご参照ください。

# 簡易 アプリケーションの開発

ここでは、Windows デスクトップ（WPF）および UWP アプリ、Xamarin.Forms の新規プロジェクトを作成し、ArcGIS Runtime SDK for .NET を使って地図を表示する簡易 アプリケーションを作成するための基本的な手順を説明します。

* __[Windows デスクトップアプリケーション（WPF）](#windows-デスクトップアプリケーション（wpf）)__
* __[UWP アプリケーション](#uwp-アプリケーション)__
* __[Xamarin.Forms アプリケーション](#xamarin.forms-アプリケーション)__

## Windows デスクトップアプリケーション（WPF）

1. Visual Studio を起動して [ファイル] メニューから [新規作成] → [プロジェクト] を選択します。

1. [新しいプロジェクト] ダイアログが表示されます。ツリー ペインから [テンプレート] → [Visual C#] → [Windows] →[クラシック デスクトップ] を選択します。テンプレートのリストから [WPF アプリケーション] を選択し、プロジェクトの名前とプロジェクトを保存するディレクトリを指定して [OK] をクリックします。
  
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_WPF_Projects_1.png" width="550px">

1. 新しい WPF アプリケーションのプロジェクトが作成されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_WPF_Projects_2.png" width="350px">

1. ArcGIS Runtime SDK for .NET をインストールするために 「NuGet パッケージの管理」を開きます。[ソリューション エクスプローラー] から [参照] を右クリックし、[NuGet パッケージの管理] を選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/start_WPF_NuGetPackageManager.png" width="350px">

1. NuGet パッケージの管理から目的の ArcGIS Runtime SDK をインストールします。
NuGet は 67,000以上のパッケージを提供しているため、検索ボックスを使用して ArcGIS Runtime パッケージを検索する必要があります。検索ボックスに　『ArcGIS Runtime』　と入力して検索を行います。検索されたリストから 『Esri.ArcGISRuntime.WPF』 を選択して、インストールをクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Install_ArcGISRuntimeWPF.png" width="550px">

1. [プレビュー]画面が表示されますので、[OK]をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/preview_WPF.png" width="350px">

1. [ライセンスへの同意]画面が表示されますので、[同意する]をクリックします。[同意する]をクリックすることでインストールが実行されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/license_agreement_WPF.png" width="350px">

  ※インストールが正常に終了した場合は以下の画面ようにインストール済みに表示されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Installed_ArcGISRuntimeWPF.png" width="550px">

1. [ソリューション エクスプローラー] から `MainWindow.xaml` の [XAML] ビューを開きます。

1. Window XAML エレメント内に以下の XML 名前空間参照を追加します。

	```XML
	　xmlns:esri="http://schemas.esri.com/arcgis/runtime/2013"
	```

	```XML
	<Window x:Class="MyDesktopApp.MainWindow"
	        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
	        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
	        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
	        xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
	        xmlns:esri="http://schemas.esri.com/arcgis/runtime/2013"
	        mc:Ignorable="d" 
	        d:DesignHeight="350" d:DesignWidth="525">
	    <Grid>

		</Grid>
	</Window>
	```
上記のコードでは、`esri` と言う名称で API ライブラリへの参照が宣言されました。これにより、`esri` という名前空間で API ライブラリ内のコントロールを参照することができるようになります。

1. Grid XAML エレメント内に以下のコードを追加します。

	```XML
	<esri:MapView>
	    <esri:Map>
	        <esri:Map.Basemap>
	            <esri:Basemap Name="Basemap">
	                <esri:ArcGISTiledLayer Name="World Topographic"
	                Source="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"/>
	            </esri:Basemap>
	        </esri:Map.Basemap>
	    </esri:Map>
	</esri:MapView>
	```

	```XML
	<Window x:Class="MyDesktopApp.MainWindow"
	        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
	        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
	        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
	        xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
	        xmlns:esri="http://schemas.esri.com/arcgis/runtime/2013"
	        mc:Ignorable="d" 
	        d:DesignHeight="350" d:DesignWidth="525">
	    <Grid>
	        <esri:MapView>
	            <esri:Map>
	                <esri:Map.Basemap>
	                    <esri:Basemap Name="Basemap">
	                        <esri:ArcGISTiledLayer Name="World Topographic"
	                Source="http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"/>
	                    </esri:Basemap>
	                </esri:Map.Basemap>
	            </esri:Map>
	        </esri:MapView>
	    </Grid>
	</Window>
	```

1. [F5] キーをクリックして、プロジェクトをデバッグ実行します。WPF アプリケーションが起動し、地図が表示されれば完了です。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/WPF_App.png" width="550px">

<br/>

## UWP アプリケーション
1. Visual Studio を起動して [ファイル] メニューから [新規作成] → [プロジェクト] を選択します。

1. [新しいプロジェクト] ダイアログが表示されます。ツリー ペインから [テンプレート] → [Visual C#] → [Windows] → [ユニバーサル] を選択します。テンプレートのリストから [空のアプリ（ユニバーサル Windows）] を選択し、プロジェクトの名前とプロジェクトを保存するディレクトリを指定して [OK] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_UWP_Projects_1.png" width="550px">

1. ユニバーサル　Windows アプリケーションがサポートする最小のターゲット プラットフォームバージョンを選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_UWP_Windows_Projects.png" width="350px">

1. 新しい UWP アプリケーションのプロジェクトが作成されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_UWP_Projects_2.png" width="350px">

1. ArcGIS Runtime SDK for .NET をインストールするために 「NuGet パッケージの管理」を開きます。[ソリューション エクスプローラー] から [参照] を右クリックし、[NuGet パッケージの管理] を選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/start_UWP_NuGetPackageManager.png" width="350px">

1. NuGet パッケージの管理から目的の ArcGIS Runtime SDK をインストールします。
NuGet は 67,000以上のパッケージを提供しているため、検索ボックスを使用して ArcGIS Runtime パッケージを検索する必要があります。検索ボックスに　『ArcGIS Runtime』　と入力して検索を行います。検索されたリストから 『Esri.ArcGISRuntime.UWP』 を選択して、インストールをクリックします。

  <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Install_ArcGISRuntimeUWP.png" width="550px">

1. [プレビュー]画面が表示されますので、[OK]をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/preview_UWP.png" width="350px">

1. [ライセンスへの同意]画面が表示されますので、[同意する]をクリックします。[同意する]をクリックすることでインストールが実行されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/license_agreement_UWP.png" width="350px">

  ※インストールが正常に終了した場合は以下の画面ようにインストール済みに表示されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Installed_ArcGISRuntimeUWP.png" width="550px">

1. [ソリューション エクスプローラー] から `MainPage.xaml` の [XAML] ビューを開きます。

1. Window XAML エレメント内に以下の XML 名前空間参照を追加します。

	```XML
	 xmlns:esriUI="using:Esri.ArcGISRuntime.UI.Controls"
	```

	```XML
	<Page
	    x:Class="MyUWPApp.MainPage"
	    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
	    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
	    xmlns:esriUI="using:Esri.ArcGISRuntime.UI.Controls"
	    xmlns:local="using:MyUWPApp"
	    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
	    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
	    mc:Ignorable="d">

	    <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">

	    </Grid>
	</Page>
	```
上記のコードでは、`esriUI` と言う名称で API ライブラリへの参照が宣言されました。これにより、`esriUI` という名前空間で API ライブラリ内のコントロールを参照することができるようになります。

1. アプリケーションをビルドするために、プロジェクトのビルド ターゲットを指定する必要があります。[標準] メニューから [Debug] → [構成マネージャー] を選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Build_Target.png" width="350px">

1. [構成マネージャー] ダイアログで、アクティブ ソリューション プラットフォームを [x86] に変更し、[閉じる] を選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Configuration_Manager.png" width="450px">

1. 目的のデバイスのプレビューを選択します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Device_Preview.png" width="350px">

	※デバイス プレビューで確認する場合は、事前に Emulator はインストールを行う必要があります。
	https://developer.microsoft.com/en-us/windows/downloads/sdk-archive

1. Grid XAML エレメント内に以下のコードを追加します。

	```XML
	<esriUI:MapView x:Name="MyMapView" />
	```

	```XML:MainPage.xaml
	<Page
	    x:Class="MyUWPApp.MainPage"
	    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
	    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
	    xmlns:esriUI="using:Esri.ArcGISRuntime.UI.Controls"
	    xmlns:local="using:MyUWPApp"
	    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
	    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
	    mc:Ignorable="d"
	    d:DesignHeight="300" d:DesignWidth="300">

	    <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
	        <esriUI:MapView x:Name="MyMapView" />
	    </Grid>
	</Page>
	```

1. [ソリューション エクスプローラー] から `MainPage.xaml.cs` を開きます。`MainPage.xaml.cs` を以下のように書き換えます。

	```C#:MainPage.xaml.cs
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;
	using System.Runtime.InteropServices.WindowsRuntime;
	using Windows.Foundation;
	using Windows.Foundation.Collections;
	using Windows.UI.Xaml;
	using Windows.UI.Xaml.Controls;
	using Windows.UI.Xaml.Controls.Primitives;
	using Windows.UI.Xaml.Data;
	using Windows.UI.Xaml.Input;
	using Windows.UI.Xaml.Media;
	using Windows.UI.Xaml.Navigation;
	using Esri.ArcGISRuntime.Mapping;

	// 空白ページのアイテム テンプレートについては、http://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409 を参照してください

	namespace MyUWPApp
	{
	    /// <summary>
	    /// それ自体で使用できる空白ページまたはフレーム内に移動できる空白ページ。
	    /// </summary>
	    public sealed partial class MainPage : Page
	    {
	        public MainPage()
	        {
	            this.InitializeComponent();

	            Initialize();
	        }

	        private void Initialize()
	        {
	            // create a new Map with a streets basemap
	            var map = new Map(Basemap.CreateStreets());
	            // assign the map to MyMapView (MapView control)
	            MyMapView.Map = map;
	        }
	    }
	}
	```

1. デバッグ実行環境を変更するために、[標準] メニューから [ローカル コンピューター] → [シミュレーター] を選択します。
  
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Simulator.png" width="350px">

1. [F5] キーをクリックして、プロジェクトをデバッグ実行します。シミュレーター内で UWP アプリが起動し、地図が表示されれば完了です。
  
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/UWP_App.png" width="550px">

<br/>

## Xamarin.Forms アプリケーション

1. Visual Studio for Mac を起動して [ファイル] メニューから [新しいソリューション] を選択します。

1. [新しいプロジェクト] 画面が表示されます。ツリー ペインから [Multiplateform] を選択します。テンプレートのリストから [Blank Forms App] を選択し
て [次へ] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_1.png" width="500px">

1. App Name を入力し、ターゲット プラットフォームを指定します。 Shard Code は、[Use Shared Library] を選択してください。すべての内容が問題なければ [次へ] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_2.png" width="500px">

1. プロジェクト名やソリューション名、プロジェクトの場所などを確認して、問題がなければ [作成] をクリックしてプロジェクトを作成します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_3.png" width="500px">

1. 新しい Xamarin.Forms アプリケーションのプロジェクトが作成されます。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project.png" width="550px">

1. ArcGIS Runtime SDK for .NET をNuGet パッケージからインストールします。NuGet パッケージのインストールは、Android、iOS とそれぞれに対してインストールを行います。はじめに Android に対してインストールを行います。Android ソリューションの 『パッケージ』 を右クリックして、『パッケージの追加』 をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_4.png" width="250px">

1. [パッケージを追加] 画面が起動しますので、検索項目の欄に esri と入力して検索を行います。 いくつかパッケージが表示されますが　Xamarin.Forms 用の [ArcGISRuntime SDK for .NET - Xamarin.Forms] を選択して、[パッケージを追加] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_5.png" width="400px">

1. [ライセンスの同意] 画面で [マージの許可] をクリックしてパッケージの追加を行います。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_6.png" width="300px">

1. 次に iOS に対してインストールを行います。iOS ソリューションの 『パッケージ』 を右クリックして、『パッケージの追加』 をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_7.png" width="250px">

1. [パッケージを追加] 画面」が起動しますので、検索項目の欄に esri と入力して検索を行います。 いくつかパッケージが表示されますが　Xamarin.Forms 用の [ArcGISRuntime SDK for .NET - Xamarin.Forms] を選択して、[パッケージを追加] をクリックします。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_8.png" width="400px">

1. [ライセンスの同意] 画面で [マージの許可] をクリックしてパッケージの追加を行います。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_9.png" width="300px">

1. [ソリューション] から `MyXamarinFormsAppPage.xaml` の [XAML] ビューを開きます。

1. XAML エレメント内に以下の XML 名前空間参照を追加します。

	```XML
	 xmlns:esriUI="clr-namespace:Esri.ArcGISRuntime.Xamarin.Forms;assembly=Esri.ArcGISRuntime.Xamarin.Forms"
	```

	```XML
	<?xml version="1.0" encoding="utf-8"?>
	<ContentPage xmlns="http://xamarin.com/schemas/2014/forms" 
    	xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" 
    	xmlns:local="clr-namespace:MyXamarinFormsApp" 
    	xmlns:esriUI="clr-namespace:Esri.ArcGISRuntime.Xamarin.Forms;assembly=Esri.ArcGISRuntime.Xamarin.Forms"
    	x:Class="MyXamarinFormsApp.MyXamarinFormsAppPage">

    	<Label Text="Welcome to Xamarin Forms!" VerticalOptions="Center" HorizontalOptions="Center" />

	</ContentPage>
	```

上記のコードでは、`esriUI` と言う名称で API ライブラリへの参照が宣言されました。これにより、`esriUI` という名前空間で API ライブラリ内のコントロールを参照することができるようになります。


1. Grid XAML エレメント内に以下のコードを追加します。

	```XML
	<esriUI:MapView x:Name="MyMapView" />
	```

	```XML:MyXamarinFormsAppPage.xaml
	<?xml version="1.0" encoding="utf-8"?>
	<ContentPage xmlns="http://xamarin.com/schemas/2014/forms" 
    	xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" 
    	xmlns:local="clr-namespace:MyXamarinFormsApp" 
    	xmlns:esriUI="clr-namespace:Esri.ArcGISRuntime.Xamarin.Forms;assembly=Esri.ArcGISRuntime.Xamarin.Forms"
    	x:Class="MyXamarinFormsApp.MyXamarinFormsAppPage">

    	<esriUI:MapView x:Name="MyMapView"/>

	</ContentPage>>
	</Page>
	```

1. [ソリューション エクスプローラー] から `MyXamarinFormsAppPage.xaml.cs` を開きます。`MyXamarinFormsAppPage.xaml.cs` を以下のように書き換えます。

	```C#:MyXamarinFormsAppPage.xaml.cs
	using Xamarin.Forms;
	using Esri.ArcGISRuntime.Mapping;

	namespace MyXamarinFormsApp
	{
    	public partial class MyXamarinFormsAppPage : ContentPage
    	{
        	public MyXamarinFormsAppPage()
        	{
            	InitializeComponent();

				Initialize();
			}

			private void Initialize()
			{
				// create a new Map with a streets basemap
				var map = new Map(Basemap.CreateStreets());
				// assign the map to MyMapView (MapView control)
				MyMapView.Map = map;
        	}
    	}
	}
	```

1. デバッグは iOS もしくは Android シュミレーターを選択して、目的の　[シミュレーター] を起動します。
  
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_10.png" width="500px">

1. iPhone シュミレーターが起動し、地図が表示されれば完了です（ここでは iPhone シュミレーターで確認していますが、Android シュミレーターでも同様の画面が表示されます）。
  
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Xamarin_Forms_App.png" width="300px">
