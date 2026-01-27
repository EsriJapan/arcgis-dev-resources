+++
title = "ArcGIS API for Python のための基礎環境：Conda入門"
description = "Conda の基本について簡単に紹介します。"
weight = 2
aliases = ["/python/python-api-conda/"]
+++

出典：ArcGIS API for Python - [Understanding Conda](https://developers.arcgis.com/python/guide/understanding-conda/)

ArcGIS API for Python (以下、Python API) を使用する際、Conda を利用すると Python の環境やパッケージを管理することが容易になります。</br>

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/introduction-to-conda/conda.png" width="500px">
</div>

Conda の基本について説明します。Conda は Python と Python で使用できるライブラリのインストールやバージョンを管理するためのツールです。
Conda を使用する場合、次の 2 つの選択肢があります。

* [Anaconda Distribution](https://docs.anaconda.com/free/anaconda/) : Python とデータサイエンス向けの Python パッケージなどを提供するプラットフォームです (以下、Anaconda)。
* [Miniconda](https://docs.anaconda.com/free/miniconda/) : Anaconda をコンパクトにしたもので、Python、Conda、それらの依存パッケージ、その他の最小限のパッケージをインストールします。ArcGIS Pro をインストールした場合、Miniconda も同時にインストールされます。

Anaconda と Miniconda の詳しい違いは [Anaconda or Miniconda (英語)](https://docs.anaconda.com/free/distro-or-miniconda/) のページをご覧ください。</br>

## Conda の基本
Conda を理解する最も簡単な方法は、[チュートリアル](https://conda.io/projects/conda/en/latest/user-guide/getting-started.html)に取り組むことです。 以下のセクションでは、ArcGIS API for Python を使用するために必要なコマンドの概要について説明します。

Condaは プラットフォームに依存しないパッケージ マネージャー アプリケーションで、Python パッケージのインストールや更新、削除などを行うことができます。[パッケージ](https://docs.conda.io/projects/conda/en/latest/glossary.html#packages)は、[チャネル](https://docs.conda.io/projects/conda/en/latest/glossary.html#channels)と呼ばれるさまざまなリポジトリに保存されているソフトウェアとサポートファイルのバンドルです。チャネルは、Anaconda Cloud のようなクラウド ロケーションのデフォルト セットである場合もあれば、個人や組織が作成したプライベート リポジトリである場合もあります。Conda は、パッケージのリストアップやインストールを行う際に、デフォルトのチャネルを検索します。特定のチャネルを検索するように Conda を設定する方法など、詳細については [Channels](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/channels.html) を参照してください。

Esri は、esri という名前のチャネルに、arcgis パッケージを格納するための Conda リポジトリを作成しています。conda install コマンドのフラグでチャネルにアクセスし、特定の [Conda の環境](https://docs.conda.io/projects/conda/en/latest/glossary.html#conda-environment)にパッケージをインストールするよう Conda に指示することができます。

---
## Conda の環境
Conda の環境を作成するとき、特定の Python インタプリターと環境にインストールするパッケージを隔離する物理的なディレクトリを作成します。これにより、Python を含むソフトウェアの異なるバージョンを持つ複数の環境を作ることができます。新しい環境を簡単に作成し、他の環境に影響を与えることなく切り替えることができます。詳細な説明と手順については、Conda のドキュメント [Managing environments](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html) を参照してください。

conda をインストールすると、Python のインタープリターと環境にインストールしたパッケージを隔離するディレクトリが作成されます。これにより、Python を含む異なるバージョンのソフトウェアを持つ複数の環境を作成することが可能になります。新しい環境は簡単に作成することができ、他の環境に影響を与えることなくそれらを切り替えて使用することができます。詳細な説明と手順については、[環境の管理に関する conda のドキュメント (英語)](https://conda.io/docs/user-guide/tasks/manage-environments.html)を参照してください。

以降では ArcGIS Pro を通じて conda をインストールした場合と、Anaconda でインストールした場合のデフォルトの環境について説明します。

### ArcGIS Pro 
ArcGIS Pro をインストールした後で環境を確認すると、以下の 2 つが作成されています。

* `base`  
この環境には、Miniconda がインストールされています。Miniconda は Anaconda をコンパクトにしたもので、Conda、Python、それらに依存するパッケージ、その他最小限のパッケージのセットを含みます

* `arcgispro-py3`  
この環境には、Python、[ArcPy](https://www.esrij.com/gis-guide/arcgis-basic/arcpy/) の機能を含む arcgispro パッケージが含まれています。

#### ArcGIS Pro で Conda の環境を管理
ArcGIS Pro の conda の環境は、次の 3 つの方法を使用して管理できます。どの方法でも、それぞれパッケージのインストール、更新、削除などを行うことができます。

* [Python パッケージ マネージャー](https://pro.arcgis.com/ja/pro-app/latest/arcpy/get-started/what-is-conda.htm)  
ArcGIS Pro プロジェクトタブからアクセス可能な GUI ツール。

* [Python コマンド プロンプト](https://pro.arcgis.com/ja/pro-app/latest/arcpy/get-started/installing-python-for-arcgis-pro.htm#ESRI_SECTION2_7FDA7FD13D724C51B442D8859F3A25A8)  
arcgispro-py3 の環境に直接アクセスしアクティブにするコマンドライン ショートカット。Windows のスタートメニューで Python Command Prompt を検索すると開くことができます。  

* [コマンド プロンプト (windows)](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc754340(v=ws.11)?redirectedfrom=MSDN)  
標準の MS-DOS Windows コマンドライン アプリケーション。

### Anaconda
Anaconda をインストールすると Python、conda、その他多数のパッケージが `base` という 1 つの環境にインストールされます。

#### Anaconda で Conda の環境を管理
主に以下の 2 つの方法で conda の環境を管理することができます。

* ターミナル アプリケーション  
標準的なコマンドライン ターミナル アプリケーション。  

* [Anaconda Navigator](https://docs.anaconda.com/anaconda/navigator/)  
conda の環境を包括的に管理するための GUI アプリケーション。

---

## 環境のアクティベート
Conda には複数の環境があり、環境を利用するためには、対象となる環境をアクティベートする必要があります。以下のコマンドを実行することで対象の環境をアクティベートできます。

* `activate <環境名>`

詳細については、[Activating an environment](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#activating-an-environment)を参照してください。


---
## パッケージの追加

アクティベートした環境に新しいパッケージを追加したい場合は次のコマンドを使用します。

`conda install <パッケージ名>`

また、`--name` や `--channel` オプションを使用して、特定の環境およびチャネルを指定することもできます。

`conda install --name <環境名> --channel <チャネル名> <パッケージ名>`

conda コマンドや他オプションの使用方法の詳細については [Managing packages](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-pkgs.html) を参照してください。

---
## IDE の設定
IDE でプロジェクトを始めるには、Python インタプリターへのパスを指定しなければならないことがあります。 Conda 環境を使用する場合、作成する環境ごとに異なる Python インタプリターを使用します。ここでは以下の 2 つのケースが考えられます。

* ArcGis Pro に含まれている Conda 環境を使用する場合  
スタートメニューで Python コマンドプロンプトを検索して開きます。
* Anaconda を使用している場合  
スタートメニューで Anaconda プロンプト検索して開きます。

次のように入力すると、マシン上のすべての環境のリストと、その環境で使われている特定の Python インタプリター (python.exe) のディレクトリの場所が表示されます。

* `conda info --envs`

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_understandingconda01.png" width="80%">
</div>

ディレクトリ名を入力し、python.exe を追加して、特定の環境の Python インタプリターへの正しいパスを設定します。例えば、上の画像に基づく IDE の arcgispro-py3 環境の正しいインタプリターは次のようになります。

* `C:\Program Files\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\python.exe`

詳細な手順については、[Finding your Anaconda Python interpreter path](https://docs.anaconda.com/working-with-conda/ide-tutorials/python-path/) を参照してください。