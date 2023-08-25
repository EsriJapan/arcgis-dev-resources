+++
title = "インストール ガイド"
description = "ArcGIS Maps SDK for .NET のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/dotnet/install-dotnet-200.x/"]
+++

出典：ArcGIS Maps SDK for .NET - Guide - [Install and set up](https://developers.arcgis.com/net/install-and-set-up/)

このインストール ガイドでは、ArcGIS Maps SDK for .NET (バージョン 200.x) のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-dotnet/)」のチュートリアルをご覧ください。

ArcGIS Developers のダッシュボードから各インストーラーやデータをダウンロードするには、ArcGIS 開発者アカウントでログインする必要があります。アカウントをお持ちでない場合は、サインアップ (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。

## インストールとセットアップ
ArcGIS Maps の機能を .NET アプリケーションに組み込むには、1 つ以上の ArcGIS Maps SDK for .NET [NuGet パッケージ](https://www.nuget.org/profiles/Esri_Inc) への参照を Visual Studio プロジェクト内に追加します。ArcGIS Maps SDK for .NET がサポートするアプリケーション プラットフォームおよび UI フレームワークのそれぞれに対応するプロジェクト テンプレート セットは、[Visual Studio 拡張機能](https://marketplace.visualstudio.com/items?itemName=Esri.ArcGISRuntimeTemplates) として提供されています。

### プロジェクトでの ArcGIS Maps SDK for .NET の参照

ArcGIS Maps SDK for .NET NuGet パッケージは、NuGet.org でホストされています。NuGet を使用して Visual Studio でパッケージを使用するには、Microsoft のドキュメントにある [Visual Studio にパッケージをインストールして使用する (Windows)](https://learn.microsoft.com/ja-jp/nuget/quickstart/install-and-use-a-package-in-visual-studio) または [Visual Studio にパッケージをインストールして使用する (Mac)](https://learn.microsoft.com/ja-jp/nuget/quickstart/install-and-use-a-package-in-visual-studio-mac) を参照してください。

1. Visual Studio で NuGet パッケージ マネージャーを開きます (例えば、[プロジェクト] メニュー > [NuGet パッケージの管理])。
2. [NuGet パッケージ マネージャー] ウィンドウで、[パッケージ ソース] に「nuget.org」が選択されていることを確認します。
3. [参照] タブを選択して、[検索] テキスト ボックスに「Esri」と入力します。ArcGIS Maps SDK for .NET でサポートされているフレームワークに一致するものがいくつか表示されます。

    <img src="https://developers.arcgis.com/net/static/b895780c277623dc7fee9eae929c7444/d7ab4/nuget-package-manager-online-markup-v200.png" width="650px">

4. インストールする NuGet パッケージを選択し、[インストール] ボタンをクリックします。NuGet パッケージ マネージャの詳細については、Microsoft ドキュメントの [NuGet パッケージ マネージャーを使用して Visual Studio にパッケージをインストールして管理する](https://learn.microsoft.com/ja-jp/nuget/consume-packages/install-use-packages-visual-studio) を参照してください。
5. [変更のプレビュー] ダイアログで内容を確認し、「OK」を選択してインストールを進めてください。
6. インストールが完了すると、NuGet パッケージ マネージャーの [インストール済み] タブに追加したパッケージが表示され、ArcGIS Maps SDK for .NET を使用して開発できるようになります。

### Toolkit

[ArcGIS Maps SDK for .NET Toolkit](https://github.com/Esri/arcgis-toolkit-dotnet) は、ArcGIS Maps SDK for .NET 開発チームによって管理されているオープンソース プロジェクトで、アプリ開発を簡素化するためのコントロールとユーティリティが含まれています。ツールキットは NuGet パッケージとしてプロジェクトに含めるか、[GitHub リポジトリ](https://github.com/Esri/arcgis-toolkit-dotnet) からソース コードをダウンロードしてローカルでビルドできます。

### Visual Studio プロジェクト テンプレート 拡張機能のインストール（オプション）

Visual Studio（Windows）用の ArcGIS Maps SDK for .NET プロジェクト テンプレート 拡張機能は、Android、iOS、および Windows 用のアプリケーション プロジェクト テンプレートを提供します。プロジェクト テンプレートは、各プラットフォームに適した NuGet パッケージを参照し、Model-View-ViewModel（MVVM）デザイン パターンを使用します。拡張機能の使用方法の詳細については、Microsoft のドキュメントの [Visual Studio の機能拡張を管理する](https://docs.microsoft.com/visualstudio/ide/finding-and-using-visual-studio-extensions) のトピックを参照してください。

注: .NET Framework プロジェクト テンプレートなど、すぐに使用できる Visual Studio テンプレートの一部は [PackageReference](https://docs.microsoft.com/ja-jp/nuget/consume-packages/package-references-in-project-files) をサポートしていますが、現在、プロジェクトによって参照されるパッケージのリストを維持するために [packages.config](https://docs.microsoft.com/ja-jp/nuget/reference/packages-config) が既定になっています packages.config  このような状況を軽減するには、Microsoft の推奨に従って、[packages.config から PackageReference に移行](https://learn.microsoft.com/ja-jp/nuget/consume-packages/migrate-packages-config-to-package-reference) することを検討してください。

1. Visual Studio で、[拡張機能] メニュー > [拡張機能の管理] を選択して、[拡張機能の管理] ダイアログを表示します。
2. [検索] テキスト ボックスに、「ArcGIS」と入力します。
3. 「ArcGIS Maps SDK for .NET Project Templates」拡張機能を選択し、[ダウンロード] を選択します。すぐにダウンロードされ、再起動時に拡張機能がインストールされることを示すメッセージが表示されます。

    <img src="https://developers.arcgis.com/net/static/970329b2e6b3db35c0d268496df178de/d9217/manage-extensions-dialog-markup-v200.png" width="650px">

4. [拡張機能の管理] ダイアログを閉じます。
5. Visual Studio を閉じ、拡張機能をインストールします。
6. Visual Studio を閉じた時に表示される [VSIX インストーラー] ダイアログで [変更] をクリックします。
7. インストールが完了したら、インストーラー ダイアログで [閉じる] をクリックします。
8. 次回、Visual Studio で [新しいプロジェクトの作成] を選択すると、使用可能なすべてのプラットフォームの ArcGIS のプロジェクト テンプレートが表示されます。

    <img src="https://developers.arcgis.com/net/static/44dbd43129c09f2ffa420b6229eee7d3/dc616/new-project-dialog-markup-v200.png" width="650px">

注: ArcGIS Maps SDK App, Packaged (WinUI 3 in Desktop) テンプレートでは、[Single-project MSIX Packaging Tools for VS 2022](https://marketplace.visualstudio.com/items?itemName=ProjectReunion.MicrosoftSingleProjectMSIXPackagingToolsDev17) もインストールされている必要があります。


### Nuget パッケージを使用した、Mac および Windows への Visual Studio プロジェクト テンプレートのインストール

また、[nuget.org](https://www.nuget.org/packages/Esri.ArcGISRuntime.ProjectTemplates/) で公開されている Esri.ArcGISRuntime.ProjectTemplates NuGet パッケージを使用して、Mac と Windows にプロジェクト テンプレートをインストールすることができます。前述の Visual Studio の拡張機能は Windows 用のみであるため、この方法を使用して Mac 用 Visual Studio でテンプレートを利用できるようにすることができます。

以下の手順に従って、コマンドライン インターフェイスを使用してプロジェクト テンプレートをインストールします：

1. Windows を使用している場合、コマンドプロンプトを開きます。Mac の場合は、新しいターミナルを開きます。

1. 以下のコマンドを使用して、新しいテンプレートをインストールします：

    ```csharp
    dotnet new install Esri.ArcGISRuntime.ProjectTemplates
    ```

1. テンプレートがインストールされたら、Visual Studio を開き、ArcGIS Maps SDK .NET MAUI App の新しくインストールした .NET MAUI テンプレートを選択します。または、次のコマンドを使用して、新しい ArcGIS Maps SDK .NET MAUI App を作成します。
    ```csharp
    dotnet new mauimap
    ```

## 追加のダウンロード
[サンプルコード](#サンプル-コード)、[データ、コンポーネント](#追加のデータ) の追加のリソースを利用できます。また、ガイドを [ダウンロード](#スタンドアロンの開発者向けドキュメント) して、オフラインで利用することも可能です。

### サンプル コード
アプリケーションに追加できるさまざまな ArcGIS Maps の強力な機能を説明するサンプル コードを入手できます。サンプルを検索し、[サンプル ドキュメント](https://developers.arcgis.com/net/wpf/sample-code/) で関連するコードを参照するか、[サンプル リポジトリ](https://github.com/Esri/arcgis-runtime-samples-dotnet) からソース コードをダウンロードして、サンプルをローカルに構築および実行できます。

コンパイル済みのサンプル ビューアー アプリ (WPF 版) は、[Microsoft ストア](https://apps.microsoft.com/store/detail/arcgis-runtime-sdk-for-net-samples-wpf/9MTP5013343H?hl=ja-jp&gl=jp) から入手できます。 アプリを実行する前に、システム要件を参照して、正常に実行できることを確認してください。

### Local Server

ArcGIS Maps SDK for Local Server では、オフラインでジオプロセシング タスクを実行して、アプリケーションで高度な空間解析とデータ操作を行うことができます。これらのタスクは、ArcGIS Enterprise で実行されるジオプロセシング タスクと同じように動作します。
アプリケーションでオフラインで[ジオプロセシング タスク](https://developers.arcgis.com/net/local-server/supported-geoprocessing-tools/)を実行する場合は、[Local Server](https://developers.arcgis.com/net/local-server/) のトピックの手順に従って Local Server をインストールします。

### 追加のデータ
#### Projection Engine データ
測地系変換は、ある空間基準から別の空間基準へジオメトリを投影する際に、2つの空間基準の基礎となる測地系に違いがある場合に使用されます。測地系変換は、数学的に定義する（方程式ベースの変換）ことも、外部のサポート ファイルに依存する（グリッド ベースの変換）ことも可能です。アプリでグリッドベースの変換を使用する場合、Projection Engine ファイルが存在する必要があります。API は、必要なファイルがローカルのファイルシステムで利用可能かどうかを検出することができます。Projection Engine ファイルが無い状態で変換をしようとすると、エラーが発生します。API は、必要なファイルがローカル ファイル システムで利用可能かどうかを検出できます。

[グリッド ベースの変換](https://developers.arcgis.com/net/spatial-and-data-analysis/spatial-references/#grid-based-transformations)を使用している場合は、ダウンロード ページからサポートする [Projection Engine ファイル](https://developers.arcgis.com/downloads/#pedata)をダウンロードしてください。座標系、投影法、測地系変換の操作の詳細については、[Spatial references](https://developers.arcgis.com/net/spatial-and-data-analysis/spatial-references/) のトピックを参照してください。

#### Electronic Navigational Charts (ENC)
航海用電子海図（ENC）は、水路や海上の情報を可視化し、分析するためのジオリファレンスされたベクター データセットです。SDK は、[国際水路機関（IHO）の S-57 規格](https://iho.int/en/) に準拠した ENC をサポートしています。

航海用電子海図 (ENC) を使用する場合は、Esri.ArcGISRuntime.Hydrography NuGet パッケージをアプリに追加するか、ダウンロード ページから [hydrography](https://developers.arcgis.com/downloads/#hydrodata) データをダウンロードします。ENC データの操作の詳細については、[Display electronic navigational charts](https://developers.arcgis.com/net/layers/display-electronic-navigational-charts/) のトピックを参照してください。

### ArcGIS Maps SDK for .NET を使用したオフライン環境での開発
#### NuGet パッケージとプロジェクト テンプレート
オンライン アクセスが制限された環境でアプリを開発している場合は、ローカルの NuGet パッケージ フィードから ArcGIS Maps SDK for .NET を参照することができます。 NuGet.org で公開されている NuGet パッケージのサブセットを含む、追加の Visual Studio (Windows) 拡張機能を利用できます。 この拡張機能をインストールすると、ユーザー プロファイルの %localappdata%\Esri\NuGet の下にローカル NuGet パッケージ ソースが構成されます。 詳細については、Microsoft のドキュメントの [ローカル NuGet パッケージ フィード](https://learn.microsoft.com/ja-jp/nuget/hosting-packages/local-feeds) を参照してください。

#### Visual Studio 拡張機能をダウンロードしてインストールする
プロジェクト テンプレート 拡張機能（ArcGIS_Maps_SDK_DotNet_Templates_200_0_0.vsix）と NuGet パッケージ 拡張機能（ArcGIS_Maps_SDK_DotNet_200_0_0.vsix）の両方を、[ArcGIS Developers ダッシュボード](https://developers.arcgis.com/downloads/#net) からダウンロードできます。

1. 開発マシンからアクセスできる場所にファイルを保存します。
2. ダウンロードした Visual Studio 拡張機能をインストールするには、.vsix ファイルをダブルクリックします (またはファイルを選択して Enter キーを押します)。
3. 複数のバージョンの Visual Studio がインストールされている場合、VSIX インストーラー ダイアログには、拡張機能をインストールするために使用できる Visual Studio 製品 (Visual Studio Enterprise 2022 など) のリストが表示されます。 ターゲットの Visual Studio インスタンスを選択し、ライセンス条項を確認して [インストール] を選択します。

    <img src="https://developers.arcgis.com/net/static/a2d070cce2144018e8460d8e3a764dac/55fc0/vsix-installer-dialog-v200.png" width="450px">

4. インストールが完了すると、選択した製品の確認が表示されます。 [閉じる] を選択して、インストールを終了します。 インストールしたら、Visual Studio の [拡張機能の管理] ダイアログを使用して、拡張機能を有効化、無効化、またはアンインストールします。 詳細については、Microsoft ドキュメントのトピック [[拡張機能の管理] ダイアログ ボックスを使用しないインストール](https://learn.microsoft.com/ja-jp/visualstudio/ide/finding-and-using-visual-studio-extensions?view=vs-2022#install-without-using-the-manage-extensions-dialog-box) を参照してください。

#### ローカルの Esri パッケージ ソースから NuGet パッケージをインストールする
1. Visual Studio ソリューション エクスプローラー ウィンドウで、[プロジェクト] を右クリックし、[NuGet パッケージの管理] を選択します。
2. [参照] タブを選択し、パッケージ ソースとして Esri を選択します。
3. ArcGIS Maps SDK for .NET でサポートされているさまざまなフレームワーク用の NuGet パッケージがいくつか表示されます。

    <img src="https://developers.arcgis.com/net/static/7667eb6f542898528ceecd4106d54345/ad997/nuget-package-manager-local-markup-v200.png" width="650px">

4. インストールする NuGet パッケージを選択し、[インストール] ボタンをクリックします。 NuGet パッケージ マネージャーの詳細については、Microsoft ドキュメントの [NuGet パッケージ マネージャーを使用して Visual Studio にパッケージをインストールして管理する](https://learn.microsoft.com/ja-jp/nuget/consume-packages/install-use-packages-visual-studio) を参照してください。
5. [変更のプレビュー] ダイアログの内容を確認し、[OK] を選択してインストールを続行します。
6. インストールが完了すると、追加されたパッケージが NuGet パッケージ マネージャーの [インストール済み] タブに表示され、ArcGIS Maps SDK for .NET を使用して開発できるようになります。

#### スタンドアロンの開発者向けドキュメント
[ダウンロード ページ](https://developers.arcgis.com/downloads/) から、開発者向けドキュメントをアーカイブとしてダウンロードできます。アーカイブには、ローカル Web サーバからドキュメントを提供する手順が含まれているため、インターネットに接続しなくてもドキュメントにアクセスできます。スタンドアロン ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、およびサンプル ドキュメントが含まれています。このドキュメントは、パブリックなインターネット上ではなく、ローカルのスタンドアロン コンピューターまたは内部ネットワーク上で実行するように設計されています。

ローカルでドキュメントを公開する方法：
* 使用する ArcGIS Runtime SDK のドキュメントを[ダウンロード](https://developers.arcgis.com/downloads/)します。ダウンロードしたファイルは、.zip アーカイブ形式になっています。
* アーカイブをローカル フォルダに解凍します。解凍されたアーカイブには、public と install という 2 つのサブフォルダがあります。
* install フォルダ内の README.md ファイルを開き、選択した Web サーバーの指示に従います。

注：ライブ ドキュメント サイトはリリース時及びリリースの間に定期的に更新されますが、スタンドアロン ドキュメントは静的で、最初のリリース後は更新されません。
