ArcGIS API for Python（以下、Python API）を使用するために、PC端末 に conda と Python API がインストールされている必要があります。</br>
ここでは、conda の基本について簡単に説明します。conda について基本的な事項を把握しておきますと、この後の[インストールガイド](../python-api-install)での環境作成を行いやすくなります。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/conda.png" width="500px">
</div>

### conda の基本

conda の基本について説明します。conda は Python と Python で使用できるライブラリのインストールやバージョンを管理し、プロジェクトやスクリプト用の IDE（統合開発環境）をセットアップすることができます。
conda は次の 2 種類のソフトウェアを使用してインストールできます。

* [Anaconda Distribution](https://www.anaconda.com/what-is-anaconda/) : Python と他汎用性が高い Python ライブラリ一式をインストールできます。(以下、Anaconda)
* [Miniconda](https://conda.io/miniconda.html) : Python と最小限のライブラリをインストールします。他に必要なライブラリは都度手動でインストールが必要です。

Anaconda と Miniconda の詳しい違いは [Anaconda or Miniconda](https://conda.io/docs/user-guide/install/download.html#anaconda-or-miniconda) のページをご覧ください。</br>
※pip でも Python API を扱うことができますが、conda を推奨します。

conda をより深く理解したい方は [Getting Started with Conda](https://conda.io/docs/user-guide/getting-started.html) チュートリアルをご覧ください。

### conda のインストールと環境

conda をインストールすると、必要なパッケージ・ファイルなどが任意のフォルダに配置されます。
conda は、Python や関連パッケージ・ライブラリのインストールおよびバージョン管理を行います。また、複数の実行環境を作成して"仮想的に動作させることができるため、ソフトウェアのバージョン毎に環境を作成するといったことも可能です。
作成した環境は、他の環境に影響を与えることなくそれらを切り替えて使用することができます。 
詳細な説明と手順については、[環境の管理に関する conda のドキュメント](https://conda.io/docs/user-guide/tasks/manage-environments.html)を参照してください。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/github_virtual_Environment.jpg" width="300px">
<p>Anaconda 上の仮想環境イメージ</p>
</div>

<!-- memo:一旦非表示にしておく -->
<!-- >**Tips：ArcGIS Pro と Anaconda の共存**
>
>2 つのソフトウェアは 1 つのマシンに共存することができます。
>ArcGIS Pro は ArcGIS Pro の Python ライブラリ管理のために conda を内包しています。
>Anaconda は Anaconda 内の Python ライブラリを管理します。Python の動作は、それぞれのソフトウェア内で完結しています。
>ただし、端末に依存する環境変数の設定は、ArcGIS 製品を優先いただくことを推奨します。 -->

### ArcGIS Pro の conda 環境と管理ツール

■環境

ArcGIS Pro には、製品をインストールした時点ですでに conda がセットアップされています。例えば、次章で説明する Python コマンド プロンプトを立ち上げて `conda env list`のコマンドを入力すると、
ArcGIS Pro にすでに設定された環境を 2 つ確認することができます。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/condalist_Pro.png" width="800px">
<p>ArcGIS Pro の conda 上の初期環境</p>
</div>

* `arcgispro-py3`</br>
この環境には、ArcPy と arcgispro パッケージで必要なすべての機能を含む Python ライブラリが含まれています。ArcGIS と連携する場合はこちらの環境を使用します。

* `root`</br>
この環境には Minaconda のインストールが含まれています。Miniconda には必要最小限の conda、Python、依存するパッケージなどが設定されています。

■管理ツール

ArcGIS Pro の conda で Python が動作する環境は、次の 3 つの方法を使用して管理できます。 どれを使用してもそれぞれパッケージのインストール、更新、削除のための機能を提供します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/managementTool.jpg" width="900px">
<p>Python パッケージ マネージャー・Python コマンド プロンプト・コマンド プロンプト(windows)<p>
</div>

* Python パッケージ マネージャー</br>
ArcGIS Pro プロジェクトタブからアクセス可能な GUI ツール。

* Python コマンド プロンプト</br>
ArcGIS Pro や ArcPy が使用できる環境をアクティブにするコマンドラインショートカット。Windows ではメニューから起動する。

* コマンド プロンプト(windows)</br>
標準の MS-DOS Windows コマンドラインアプリケーション。

### Anaconda と管理ツール

Anaconda の場合は、次で説明する Anaconda プロンプトを立ち上げて `conda env list` のコマンドを入力すると次の利用可能な環境を確認することができます。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/AnacondaPrmptRoot00.png" width="600px">
<p>Anaconda プロンプト 初期の環境<p>
</div>

* `base`

この環境には Minaconda のインストールが含まれています。Miniconda には必要最小限の conda、Python、依存するパッケージなどが設定されています。

■管理ツール

次の 2 つの方法を使用して conda を管理することができます。 どれを使用してもそれぞれパッケージのインストール、更新、削除のための機能を提供します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/managementTool2.jpg" width="600px">
<p>Anaconda プロンプト・Anaconda Navigator<p>
</div>

* Terminal Application (Anaconda プロンプト)</br>
Anaconda をインストールすると使用できる標準コマンドラインターミナルアプリケーション。対象の OS（Windows、macOS、または Linux）で共通で使用可能。

* [Anaconda Navigator](https://docs.anaconda.com/anaconda/navigator/)</br>
conda を管理するための GUI アプリケーション。

どちらのツールも、標準的なインストールが成功すれば、Windowsではメニューから起動ができます。

### 環境をアクティベートする

ArcGIS Pro から Python コマンド プロンプト を起動する、または Anaconda から Terminal Application(Anaconda プロンプト) を起動すると、次のような表示が確認できます。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/activate_base.png" width="800px">
<p>Anaconda プロンプト から起動したとき</p>
</div>

`(base)`が現在 conda で起動している Python が使用できる(アクティベートされた)環境です。
デフォルトで使用する場合は、この時点で Python を使用することができます。

conda では複数の環境を作成し仮想的に起動できるため、ターゲットの環境を使用するにはアクティブ化する必要があります。
次のように、`activate` コマンドを使用してターゲットの環境に切り替えます。仮想環境を新たに作成するなど、その他のコマンドの詳細については、[環境のアクティブ化](https://conda.io/docs/user-guide/tasks/manage-environments.html#activating-an-environment)を参照してください。
アクティブ化を切り替えるためには、次のコマンドを使用します。

* Windows

`activate <environment_name>`

* macOS と Linux

`source activate <environment_name>`

#### 新しいパッケージを追加する

Python API を含む新しいパッケージを追加したい場合は次のコマンドを使用します。新しいパッケージは現在アクティベートされている環境にインストールされ有効になります。
次のコマンドを使用してパッケージを追加します。Python API の詳しいインストール方法は[インストールと設定ガイド](../python-api-install)を参照します。

`conda install <package_name>`

また、--name や --channel オプションを使用して、特定の環境およびチャネルを指定することもできます。

`conda install --name <environment_name> --channel <channel_name> <package_name>`

conda コマンドや 他オプションの使用方法の詳細については[パッケージの管理](https://conda.io/docs/user-guide/tasks/manage-pkgs.html)を参照してください。

>**Tips：conda からパッケージをインストールできる仕組み**
>
>Conda は、プラットフォームに依存しないパッケージ マネージャー アプリケーションで、Python パッケージをインストール、更新、および削除できます。
>パッケージは、チャネルと呼ばれるさまざまなリポジトリのいずれかに格納されているソフトウェアおよびサポートファイルのバンドルです。
>チャネルは、Anaconda クラウドなどの既定のクラウド ロケーションのセット、または個人または組織によって作成されたプライベートレポジトリである場合があります。 condaは、パッケージのリスト表示またはインストール時にデフォルトのチャネルセットを検索します。
>
>arcgis パッケージを格納するために esri という名前のチャネルに conda リポジトリが作成されています。 `conda install` コマンドは、チャネルにアクセスし、特定の conda 環境にパッケージをインストールしています。
>
><div align="center">
> <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/esrianaconda150.jpg" width="600px">
> <p>Anaconda クラウド上の esri チャネル<p>
></div>

このページについて、詳しくは [米国Esri ガイドページ：Understanding Conda](https://developers.arcgis.com/python/guide/understanding-conda/)をご覧ください。


次は、[ArcGIS API for Python の環境構築方法](../python-api-install)を紹介します。

