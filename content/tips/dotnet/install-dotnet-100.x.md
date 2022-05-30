+++
title = "インストール ガイド"
description = "ArcGIS Runtime SDK for .NET のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/dotnet/install-dotnet-100.x/"]
+++

このインストール ガイドでは、ArcGIS Runtime SDK for .NET のインストールとセットアップ手順を紹介します。

ArcGIS Runtime SDK for .NET がサポートする最新の動作環境については[動作環境ページ](https://www.esrij.com/products/arcgis-runtime-sdk-for-dotnet/environments/)をご覧ください。

マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-dotnet/)」チュートリアルをご覧ください。

# インストールとセットアップ
ArcGIS Runtime の機能を Visual Studio プロジェクトに組み込むには、適切な NuGet パッケージを参照してください。これらのパッケージは、オンライン ソース (nuget.orgなど) またはローカルにインストールしたパッケージから参照できます。 Visual Studio 拡張機能 (Windows のみ) で使用できる ArcGIS Runtime の プロジェクト テンプレートのセットには、サポートされている各プラットフォームに必要な NuGet パッケージの参照が含まれています。

各インストール方法については、下記の各項目をご覧ください。

  * [オンライン ソースの ArcGIS Runtime NuGet パッケージを参照する方法](#オンライン-ソースの-arcgis-runtime-nuget-パッケージを参照する方法)
  * [Visual Studio プロジェクト テンプレートをインストールする方法](#visual-studio-プロジェクト-テンプレートをインストールする方法)
  * [Visual Studio 拡張機能をダウンロードしてインストールする方法](#visual-studio-拡張機能をダウンロードしてインストールする方法)

## オンライン ソースの ArcGIS Runtime NuGet パッケージを参照する方法

ArcGIS Runtime NuGet パッケージは、NuGet.org でホストされています。インターネットに接続している場合は、ローカルに何もインストールしなくても、これらのパッケージにアクセスして Visual Studio プロジェクトに追加できます。

ローカルで利用可能な NuGet パッケージが必要であるが、Visual Studio 拡張機能をインストールできない場合 (オフラインで開発している場合や、Visual Studio for Mac を使用している場合など)、必要なパッケージを NuGet.org からダウンロードできます。

1. Visual Studio で NuGet パッケージ マネージャーを開きます (例えば、[プロジェクト] メニュー > [NuGet パッケージの管理])。
2. [NuGet パッケージ マネージャー] ウィンドウで、[パッケージ ソース] に「nuget.org」が選択されていることを確認します。
3. [参照] タブを選択して、[検索] テキスト ボックスに「Esri.ArcGISRuntime」と入力します。

    <img src="https://developers.arcgis.com/net/static/389085f5a1ae20cee11c9df48fdeb7c2/dc616/nuget-package-manager-online-markup.png" width="650px">

4. [バージョン] にパッケージの「最新の安定版...」が選択されていることを確認します。
5. [インストール] をクリックして、パッケージをプロジェクトに追加します。

パッケージを追加すると、ArcGIS Runtime SDK for.NET のコンポーネントを操作できるようになります。

## Visual Studio プロジェクト テンプレートをインストールする方法

Visual Studio for Windows を使用して ArcGIS Runtime アプリを開発する場合、Visual Studio 拡張機能をダウンロードせずに ArcGIS Runtime プロジェクト テンプレートをインストールできます。プロジェクト テンプレートは、Model-View-ViewModel (MVVM) デザイン パターンを使用し、各プラットフォームに必要なすべての NuGet パッケージを参照します。

1. Visual Studio で、[拡張機能] メニュー > [拡張機能の管理] を選択して、[拡張機能の管理] ダイアログを表示します。
2. [検索] テキスト ボックスに、「ArcGIS」と入力します。ArcGIS Runtime の拡張現実 (AR) プロジェクト テンプレートなどが表示されます。
3. 「ArcGIS Runtime SDK for .NET Project Templates」拡張機能を選択し、[ダウンロード] を選択します。すぐにダウンロードされ、再起動時に拡張機能がインストールされることを示すメッセージが表示されます。

    <img src="https://developers.arcgis.com/net/static/46f8c032da39586ad0f27612861cb45b/4cdf7/manage-extensions-dialog-markup.png" width="650px">

4. [拡張機能の管理] ダイアログを閉じます。
5. [ファイル] メニュー > [終了] を選択して Visual Studio を閉じ、拡張機能をインストールします。
6. Visual Studio を閉じた時に表示される [VSIX インストーラー] ダイアログで [変更] をクリックします。
7. インストールが完了したら、インストーラー ダイアログで [閉じる] をクリックします。
8. 次回 Visual Studio で [新しいプロジェクトの作成] を選択すると、使用可能なすべてのプラットフォームの ArcGIS Runtime のプロジェクト テンプレートが表示されます。

## Visual Studio 拡張機能をダウンロードしてインストールする方法

ArcGIS Runtime SDK for .NET は、サポートされているプラ​​ットフォーム用のプロジェクト テンプレートと NuGet パッケージを含む Visual Studio 拡張機能 (.vsix ファイル) を提供します。拡張機能をダウンロードしてインストールすると、Visual Studio にプロジェクト テンプレートが追加され、ローカルの NuGet パッケージ ソースが構成されます。ArcGIS Runtime NuGet パッケージをオンライン ソース (NuGet.org) から追加する場合は、ローカルにダウンロードしてインストールする必要はありません。また、Visual Studio 拡張機能は Visual Studio for Mac では使用できません。

オンラインへのアクセスが制限されている環境で開発している場合は、ArcGIS Runtime NuGet パッケージをローカルで利用できるようにすることをお勧めします。

1. 下記リンクから該当バージョンの Visual Studio 拡張機能 (.vsix) をインストールします。ArcGIS 開発者アカウントでログインする必要があります。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/) (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。<br/>
   [Visual Studio 拡張機能のダウンロード](https://developers.arcgis.com/downloads/#net)
2. 開発マシンからアクセス可能な場所に ArcGIS_Runtime_SDK_DotNet vsix ファイル（NuGet パッケージ）または ArcGIS_Runtime_SDK_DotNet_Templates vsix ファイル（プロジェクト テンプレート）を保存します。
3. ダウンロードしたファイルをダブル クリックしてセットアップ ファイルを抽出し、インストールを開始します。
4. 使用可能な Visual Studio 製品のリストが表示されます。拡張機能をインストールする製品 (Visual Studio 2022 など) を選択します。[インストール] をクリックして、ライセンス条項に同意します。選択したすべての製品のインストールが開始されます。

    <img src="https://developers.arcgis.com/net/static/1be96601a1eb631574ac1b544703189f/8574c/vsix-installer-dialog.png" width="650px">

5. インストールが完了すると、選択した製品のインストール確認ダイアログが表示されます。 [閉じる] をクリックし、開いている Visual Studio のインスタンスをすべて閉じて再起動してください。
6. 拡張機能のプロジェクト テンプレートを使用するには、Visual Studio を起動し、[新しいプロジェクトの作成] を選択します。 サポートされているプロジェクト タイプには、ArcGIS Runtime SDK のプロジェクト テンプレートが表示されます。

    <img src="https://developers.arcgis.com/net/static/1c763116abb8991bc14ab85f28b44569/0fb99/new-project-dialog-markup.png" width="650px">

7. ローカルの NuGet パッケージを追加するには、NuGet パッケージ マネージャーを開き (例えば、[プロジェクト] メニュー > [NuGet パッケージの管理])、[参照] タブと、ローカルの Esri パッケージソース (Visual Studio 拡張機能インストーラーによって構成されている) を選択します。プロジェクトに適切なパッケージを選択し、[インストール] をクリックしてパッケージをプロジェクトに追加します。

    <img src="https://developers.arcgis.com/net/static/97b48033817cea9b9feb2fdf4b7ace56/f6f78/nuget-package-manager-local-markup.png" width="650px">

# 追加のダウンロード
## サンプル コード
ArcGIS Runtime アプリで実行できる、機能については[サンプル コード](https://github.com/Esri/arcgis-runtime-samples-dotnet)を参照してください。

コンパイル済みのサンプル ビューアー アプリ (WPF 版) は、[Microsoft ストア](https://www.microsoft.com/ja-jp/p/arcgis-runtime-sdk-for-net-samples-wpf/9mtp5013343h)から入手できます。 アプリを実行する前に、システム要件を参照して、正常に実行できることを確認してください。

## ArcGIS Runtime SDK for .NET Toolkit

[ArcGIS Runtime SDK for .NET Toolkit](https://github.com/Esri/arcgis-toolkit-dotnet) は、ArcGIS Runtime SDK for .NET 開発チームによって管理されているオープンソース プロジェクトで、アプリ開発を簡素化するためのコントロールとユーティリティが含まれています。ツールキットは NuGet パッケージとしてプロジェクトに含めるか、[GitHub リポジトリ](https://github.com/Esri/arcgis-toolkit-dotnet)からソース コードをダウンロードしてローカルでビルドできます。

## Local Server

Local Server では、オフラインでジオプロセシング タスクを実行して、アプリケーションで高度な空間解析とデータ操作を行うことができます。これらのタスクは、ArcGIS Enterprise で実行されるジオプロセシング タスクと同じように動作します。
アプリケーションでオフラインで[ジオプロセシング タスク](https://developers.arcgis.com/net/local-server/geoprocessing-tools-support/)を実行する場合は、[Local Server](https://developers.arcgis.com/net/local-server/) の手順に従って Local Server をインストールします。

## スタンドアロンの開発者向けドキュメント

[ダウンロード ページ](https://developers.arcgis.com/downloads/) から、開発者向けドキュメント（任意の ArcGIS Runtime SDK 用）をアーカイブとしてダウンロードできます。アーカイブには、ローカル Web サーバからドキュメントを提供する手順が含まれているため、インターネットに接続しなくてもドキュメントにアクセスできます。スタンドアロン ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、およびサンプル ドキュメントが含まれています。このドキュメントは、ローカルのスタンドアロン コンピューターまたは内部ネットワーク上で実行するように設計されており、パブリックなインターネット上では実行できません。

ローカルでドキュメントを公開する方法：

* 使用する ArcGIS Runtime SDK のドキュメントを[ダウンロード](https://developers.arcgis.com/downloads/)します。ダウンロードしたファイルは、.zip アーカイブ形式になっています。
* アーカイブをローカル フォルダに解凍します。解凍されたアーカイブには、public と install という 2 つのサブフォルダがあります。
* install フォルダ内の README.md ファイルを開き、選択した Web サーバーの指示に従います。

注：ライブ ドキュメント サイトはリリース時及びリリースの間に定期的に更新されますが、スタンドアロン ドキュメントは静的で、最初のリリース後は更新されません。

## 追加のデータ

[グリッド ベースの地理座標変換](https://developers.arcgis.com/net/spatial-and-data-analysis/spatial-references/#grid-based-transformations)を使用している場合は、ダウンロード ページからサポートする [Projection Engine ファイル](https://developers.arcgis.com/downloads/#pedata)をダウンロードしてください。

航海用電子海図 (ENC) を使用する場合は、Esri.ArcGISRuntime.Hydrography NuGet パッケージをアプリに追加するか、ダウンロード ページから [hydrography directory](https://developers.arcgis.com/downloads/#hydrodata) をダウンロードします。

