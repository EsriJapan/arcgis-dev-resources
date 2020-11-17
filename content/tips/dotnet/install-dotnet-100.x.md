+++
title = "インストール ガイド"
description = "ArcGIS Runtime SDK for .NET をご使用のマシンにインストールする手順を紹介します。"
weight = 1
aliases = ["/dotnet/install-dotnet-100.x/"]
+++

このインストール ガイドは、ArcGIS Runtime SDK for .NET をご使用のマシンにインストールする手順を紹介します。

## ArcGIS Runtime SDK for .NET とは

ArcGIS Runtime SDK for .NET は、Windows 及び iOS、Android プラットフォーム向け GIS アプリケーションの開発キット（SDK）です。この SDK を利用することで、データ編集、ジオコーディング、ルート解析など様々な GIS 機能を持ったアプリケーションを Windows デスクトップや Windows タブレット、iOS、Android などの多様なプラットフォーム向けに開発することができます。
詳細は、[ArcGIS Runtime SDK for .NET](http://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/) をご参照ください。

## ArcGIS Runtime SDK for .NET の開発環境

ArcGIS Runtime SDK for .NET を用いて、Windows や iOS、Android プラットフォーム向けの GIS アプリケーションを開発するには、統合開発環境として Microsoft Visual Studio を使用します。本インストールガイドの手順を行う前に、ご使用のマシンに ArcGIS Runtime SDK for .NET がサポートするバージョンの Windows OS 、Mac OS 及び Microsoft Visual Studio が適切にセットアップされている必要があります。ArcGIS Runtime SDK for .NET がサポートする最新の動作環境につきましては[動作環境](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/environments/)をご参照ください。

# 簡易 アプリケーションの開発

ここでは、WPF、UWP、Xamarin.Forms の新規プロジェクトを作成し、ArcGIS Runtime SDK for .NET を使って地図を表示する簡易アプリケーションを作成するための基本的な手順を説明します。

* __[WPF アプリケーション](#wpf-アプリケーション)__
* __[UWP アプリケーション](#uwp-アプリケーション)__
* __[Xamarin.Forms アプリケーション](#xamarin-forms-アプリケーション)__

## WPF アプリケーション

1. Visual Studio を起動して [ファイル] メニューから [新規作成] → [プロジェクト] を選択します。

1. [新しいプロジェクト] ダイアログが表示されます。ツリー ペインから [インストール済み] → [Visual C#] → [Windows デスクトップ] → [WPF アプリ] を選択します。プロジェクトの名前とプロジェクトを保存するディレクトリを指定して [OK] をクリックします。
　<img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_WPF_Projects_1.png" width="550px">

1. 新しい WPF アプリケーションのプロジェクトが作成されます。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_WPF_Projects_2.png" width="350px">

1. ArcGIS Runtime SDK for .NET をインストールするために「NuGet パッケージの管理」を開きます。[ソリューション エクスプローラー] から [参照] を右クリックし、[NuGet パッケージの管理] を選択します。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/start_WPF_NuGetPackageManager.png" width="350px">

1. NuGet パッケージの管理から ArcGIS Runtime SDK をインストールします。
検索ボックスに『ArcGIS Runtime』と入力して検索を行います。検索されたリストから「Esri.ArcGISRuntime.WPF」を選択して、インストールをクリックします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Install_ArcGISRuntimeWPF.png" width="550px">

1. [ライセンスへの同意] 画面が表示されるので、[同意する] をクリックします。[同意する] をクリックすることでインストールが実行されます。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/license_agreement_WPF.png" width="350px">
		※インストールが正常に終了した場合は、以下の画面のようにインストール済みの一覧に Esri.ArcGISRuntime.WPF が表示されます。
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
        	xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        	xmlns:local="clr-namespace:MyDesktopApp"
	        xmlns:esri="http://schemas.esri.com/arcgis/runtime/2013"
        	mc:Ignorable="d"
        	Title="MainWindow" Height="450" Width="800">
	    <Grid>

		</Grid>
	</Window>
	```
上記のコードでは、`esri` と言う名称で API ライブラリへの参照が宣言されました。これにより、`esri` という名前空間で API ライブラリ内のコントロールを参照することができるようになります。

1. Grid XAML エレメント内に以下のコードを追加します。

	```XML
   <esri:MapView x:Name="MyMapView" />
	```

	```XML
	<Window x:Class="MyDesktopApp.MainWindow"
    	    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        	xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        	xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        	xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        	xmlns:local="clr-namespace:MyDesktopApp"
	        xmlns:esri="http://schemas.esri.com/arcgis/runtime/2013"
        	mc:Ignorable="d"
        	Title="MainWindow" Height="450" Width="800">
	    <Grid>
        <esri:MapView x:Name="MyMapView" />
	    </Grid>
	</Window>
	```

1. [ソリューション エクスプローラー] から `MainWindow.xaml.cs` を開きます。以下のように `Esri.ArcGISRuntime.Mapping` 名前空間と ArcGIS Online のベースマップ（道路地図）を表示するコードを追加します。
   
    ```C#:MainPage.xaml.cs
    using Esri.ArcGISRuntime.Mapping;

    namespace MyDesktopApp
    {
       public partial class MainWindow : Window
       {
           public MainWindow()
           {
               InitializeComponent();
               Initialize();
           }

           private void Initialize()
           {
               var map = new Map(Basemap.CreateStreets());
               MyMapView.Map = map;
           }
        }
    }
    ```

1. [F5] キーをクリックして、プロジェクトをデバッグ実行します。WPF アプリケーションが起動し、地図が表示されれば完了です。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/WPF_App.png" width="550px">

<br/>

## UWP アプリケーション
1. Visual Studio を起動して [ファイル] メニューから [新規作成] → [プロジェクト] を選択します。

1. [新しいプロジェクト] ダイアログが表示されます。ツリー ペインから [インストール済み] → [Visual C#] → [Windows ユニバーサル] → [空白のアプリ] を選択し、プロジェクトの名前とプロジェクトを保存するディレクトリを指定して [OK] をクリックします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_UWP_Projects_1.png" width="550px">

1. アプリケーションがサポートするプラットフォームのバージョンを選択します。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_UWP_Windows_Projects.png" width="350px">

1. 新しい UWP アプリケーションのプロジェクトが作成されます。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_UWP_Projects_2.png" width="350px">

1. ArcGIS Runtime SDK for .NET をインストールするために「NuGet パッケージの管理」を開きます。[ソリューション エクスプローラー] から [参照] を右クリックし、[NuGet パッケージの管理] を選択します。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/start_UWP_NuGetPackageManager.png" width="350px">

1. NuGet パッケージの管理から ArcGIS Runtime SDK をインストールします。検索ボックスに『ArcGIS Runtime』と入力して検索を行います。検索されたリストから「Esri.ArcGISRuntime.UWP」を選択して、インストールをクリックします。
  <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Install_ArcGISRuntimeUWP.png" width="550px">

1. [ライセンスへの同意] 画面が表示されますので、[同意する] をクリックします。[同意する] をクリックすることでインストールが実行されます。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/license_agreement_UWP.png" width="350px">
	※インストールが正常に終了した場合は以下の画面ように、インストール済みの一覧に Esri.ArcGISRuntime.UWP が表示されます。
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
		xmlns:local="using:MyUWPApp"
		xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
		xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
		xmlns:esriUI="using:Esri.ArcGISRuntime.UI.Controls"
		mc:Ignorable="d"
		Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">

		<Grid>

		</Grid>
	</Page>
	```
上記のコードでは、`esriUI` と言う名称で API ライブラリへの参照が宣言されました。これにより、`esriUI` という名前空間で API ライブラリ内のコントロールを参照することができるようになります。

1. Grid XAML エレメント内に以下のコードを追加します。

	```XML
	<esriUI:MapView x:Name="MyMapView" />
	```

	```XML:MainPage.xaml
	<Page
		x:Class="MyUWPApp.MainPage"
		xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
		xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
		xmlns:local="using:MyUWPApp"
		xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
		xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
		xmlns:esriUI="using:Esri.ArcGISRuntime.UI.Controls"
		mc:Ignorable="d"
		Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">

		<Grid>
			<esriUI:MapView x:Name="MyMapView" />
		</Grid>
	</Page>
	```

1. [ソリューション エクスプローラー] から `MainPage.xaml.cs` を開きます。以下のように `Esri.ArcGISRuntime.Mapping` 名前空間と ArcGIS Online のベースマップ（道路地図）を表示するコードを追加します。

	```C#:MainPage.xaml.cs
    using Esri.ArcGISRuntime.Mapping;

	namespace MyUWPApp
	{
	    public sealed partial class MainPage : Page
	    {
	        public MainPage()
	        {
	            this.InitializeComponent();
	            Initialize();
	        }

	        private void Initialize()
	        {
	            var map = new Map(Basemap.CreateStreets());
	            MyMapView.Map = map;
	        }
	    }
	}
	```

1. [F5] キーをクリックして、プロジェクトをデバッグ実行します。UWP アプリが起動し、地図が表示されれば完了です。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/UWP_App.png" width="550px">

<br/>

## Xamarin Forms アプリケーション
macOS を使用した開発の手順を紹介します。

1. Visual Studio for Mac を起動して [ファイル] メニューから [新しいソリューション] を選択します。

1. [新しいプロジェクト] 画面が表示されます。ツリー ペインから [マルチプラットフォーム] → [アプリ] → [空白フォームのアプリ] を選択します。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_1.png" width="500px">

1. アプリ名を入力し、ターゲット プラットフォームを選択します。[次へ] をクリックします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_2.png" width="500px">

1. プロジェクト名やソリューション名、プロジェクトの場所などを確認して、問題がなければ [作成] をクリックしてプロジェクトを作成します。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_3.png" width="500px">

1. 新しい Xamarin.Forms アプリケーションのプロジェクトが作成されます。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project.png" width="550px">

1. ArcGIS Runtime SDK for .NET を NuGet パッケージからインストールします。NuGet パッケージのインストールは、Android、iOS とそれぞれに対してインストールを行います。はじめに Android に対してインストールを行います。Android プロジェクトの [パッケージ] を右クリックして、[パッケージの追加] をクリックします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_4.png" width="250px">

1. [パッケージを追加] 画面が起動するので、検索項目の欄に『ArcGIS Runtime』と入力して検索を行います。いくつかパッケージが表示されますが　Xamarin.Forms 用の [Esri.ArcGISRuntime.Xamarin.Forms] を選択して、[パッケージを追加] をクリックします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_5.png" width="400px">

1. [ライセンスの同意] 画面で [同意する] をクリックしてパッケージの追加を行います。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_6.png" width="300px">

1. 同様の手順で iOS に対してもインストールを行います。iOS プロジェクトの [パッケージ] を右クリックして、[パッケージの追加] をクリックします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_7.png" width="250px">

1. [パッケージを追加] 画面が起動するので、検索項目の欄に『ArcGIS Runtime』と入力して検索を行います。いくつかパッケージが表示されますが　Xamarin.Forms 用の [Esri.ArcGISRuntime.Xamarin.Forms] を選択して、[パッケージを追加] をクリックします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_8.png" width="400px">

1. [ライセンスの同意] 画面で [同意する] をクリックしてパッケージの追加を行います。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_9.png" width="300px">

1. [ソリューション エクスプローラー] から `MainPage.xaml` の [XAML] ビューを開きます。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_11.png" width="500px">

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
			x:Class="MyXamarinFormsApp.MainPage">
	    <StackLayout>
		<!-- Place new controls here -->
		<Label Text="Welcome to Xamarin.Forms!" HorizontalOptions="Center" VerticalOptions="CenterAndExpand" />
		</StackLayout>
	</ContentPage>
	```
	上記のコードでは、`esriUI` と言う名称で API ライブラリへの参照が宣言されました。これにより、`esriUI` という名前空間で API ライブラリ内のコントロールを参照することができるようになります。
1. StackLayout エレメントを以下のコードに置き換えます。

	```XML
    <Grid>
       <esriUI:MapView x:Name="MyMapView"/>
    </Grid>
	```

	```XML
    <?xml version="1.0" encoding="utf-8"?>
    <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
               xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
               xmlns:local="clr-namespace:MyXamarinFormsApp"
               xmlns:esriUI="clr-namespace:Esri.ArcGISRuntime.Xamarin.Forms;assembly=Esri.ArcGISRuntime.Xamarin.Forms"
               x:Class="MyXamarinFormsApp.MainPage">
        <Grid>
           <esriUI:MapView x:Name="MyMapView"/>
        </Grid>
    </ContentPage>
    ```

1. [ソリューション エクスプローラー] から `MainPage.xaml.cs` を開きます。以下のように `Esri.ArcGISRuntime.Mapping` 名前空間と ArcGIS Online のベースマップ（道路地図）を表示するコードを追加します。

    ```C#:MyXamarinFormsAppPage.xaml.cs
    using Esri.ArcGISRuntime.Mapping;

    namespace MyXamarinFormsApp
    {
        public partial class MainPage : ContentPage
        {
            public MainPage()
			{
				InitializeComponent();
				Initialize();
			}

			private void Initialize()
			{
			    var map = new Map(Basemap.CreateStreets());
				MyMapView.Map = map;
			}
        }
    }
	```

1. iOS または Android プロジェクトを選択して、ビルドします。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_10.png" width="500px">

1. アプリが起動し地図が表示されれば完了です。
 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/Xamarin_Forms_App.png" width="300px">

###### ※ Android プロジェクトのビルドで「`The Esri.ArcGISRuntime.Xamarin.Android package does not currently support building for the x86_64 architecture.` 」のエラーが発生してビルドに失敗する場合は、ソリューション エクスプローラーの Android プロジェクトの右クリックから [オプション] を選択して「プロジェクト オプション」画面を開き、[ビルド] → [Android のビルド] → [詳細設定] → [サポートされる ABI] で `x86_64` のチェックを外します。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/install-dotnet/new_Xamarin_Forms_Project_12.png" width="500px">
