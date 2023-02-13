+++
title = "ArcGIS API for Python のための基礎環境：conda入門"
description = "conda の基本について簡単に紹介します。"
weight = 2
aliases = ["/python/python-api-conda/"]
+++
<!-- 以下、macOS、Linuxに関する記述はコメントアウト -->
ArcGIS API for Python (以下、Python API) を使用する際、conda を利用すると Python の環境やパッケージを管理することが容易になります。</br>
ここでは、conda の基本について簡単に説明します。conda について基本的な事項を把握しておきますと、この後の[インストールガイド](../python-api-install)での環境作成を行いやすくなります。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/introduction-to-conda/conda.png" width="500px">
</div>

## conda の基本

conda の基本について説明します。conda は Python と Python で使用できるライブラリのインストールやバージョンを管理するためのツールです。
conda を使用する場合、次の 2 つの選択肢があります。

* [Anaconda Distribution](https://www.anaconda.com/what-is-anaconda/) : Python とデータサイエンス向けの Python パッケージなどを提供するプラットフォームです (以下、Anaconda)。
* [Miniconda](https://conda.io/miniconda.html) : Anaconda をコンパクトにしたもので、Python、conda、それらの依存パッケージ、その他の最小限のパッケージをインストールします。ArcGIS Pro をインストールした場合、Miniconda も同時にインストールされます。

Anaconda と Miniconda の詳しい違いは [Anaconda or Miniconda (英語)](https://conda.io/projects/conda/en/latest/user-guide/install/download.html#anaconda-or-miniconda) のページをご覧ください。</br>
※ pip でも Python API をインストールすることができますが、初心者には conda が推奨されています。参考: [ArcGIS API for Python - Install and set up (英語)](https://developers.arcgis.com/python/guide/install-and-set-up/#Disclaimer)

conda をより深く理解したい方は [Getting Started with Conda (英語)](https://conda.io/docs/user-guide/getting-started.html) チュートリアルをご覧ください。

---
## conda の環境
conda をインストールすると、Python のインタープリターと環境にインストールしたパッケージを隔離するディレクトリが作成されます。これにより、Python を含む異なるバージョンのソフトウェアを持つ複数の環境を作成することが可能になります。新しい環境は簡単に作成することができ、他の環境に影響を与えることなくそれらを切り替えて使用することができます。詳細な説明と手順については、[環境の管理に関する conda のドキュメント (英語)](https://conda.io/docs/user-guide/tasks/manage-environments.html)を参照してください。

インストール手順は次章で詳しくご説明しますが、以降では ArcGIS Pro を通じて conda をインストールした場合と、Anaconda でインストールした場合のデフォルトの環境について説明します。

<!-- <div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/github_virtual_Environment.jpg" width="300px">
<p>Anaconda 上の仮想環境イメージ</p>
</div> -->

### デフォルトの環境
conda をどのようにインストールしたか (ArcGIS Pro 経由か Anaconda 経由か) によってデフォルトの環境は異なります。
コマンド プロンプト等で `conda env list` とコマンドを入力することで作成されている環境の一覧を確認することができます。

#### ArcGIS Pro の場合
ArcGIS Pro をインストールした後で環境を確認すると、以下の 2 つが作成されています。

* `arcgispro-py3`</br>
この環境には、Python、[ArcPy](https://www.esrij.com/gis-guide/arcgis-basic/arcpy/) の機能を含む arcgispro パッケージが含まれています。

* `root`</br>
この環境には、必要最小限の conda、Python、依存するパッケージなどが含まれる Minaconda がインストールされています。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/introduction-to-conda/condalist_Pro.png" width="800px">
<p>ArcGIS Pro の conda 上の初期環境</p>
</div>

##### conda の環境を ArcGIS Pro で管理する
ArcGIS Pro の conda の環境は、次の 3 つの方法を使用して管理できます。どの方法でも、それぞれパッケージのインストール、更新、削除などを行うことができます。

* Python パッケージ マネージャー</br>
ArcGIS Pro プロジェクトタブからアクセス可能な GUI ツール。

* Python コマンド プロンプト</br>
上述した arcgispro-py3 の環境に直接アクセスしアクティブにするコマンドライン ショートカット。  

* コマンド プロンプト (windows)</br>
標準の MS-DOS Windows コマンドライン アプリケーション。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/introduction-to-conda/managementTool.jpg" width="900px">
<p>(左) Python パッケージ マネージャー、(中) Python コマンド プロンプト、(右) コマンド プロンプト (windows)<p>
</div>

#### Anaconda の場合
Anaconda をインストールすると Python、conda、その他多数のパッケージが `base` という 1 つの環境にインストールされます。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/introduction-to-conda/AnacondaPrmptRoot00.png" width="600px">
<p>Anaconda Prompt 初期の環境<p>
</div>

##### conda の環境を Anaconda で管理する
主に以下の 2 つの方法で conda の環境を管理することができます。

* ターミナル アプリケーション</br>
<!-- Windows、macOS、または Linux で利用できる -->
標準的なコマンドラインターミナルアプリケーション。<br>
※ Anaconda をインストールすると Anaconda Prompt が一緒にインストールされます。Anaconda Prompt を使用すると環境変数を操作せずに conda のコマンドを利用できます。

* [Anaconda Navigator](https://docs.anaconda.com/anaconda/navigator/)</br>
conda の環境を包括的に管理するための GUI アプリケーション。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/introduction-to-conda/managementTool2.jpg" width="600px">
<p>Anaconda Navigator (左) と Anaconda Prompt (右)<p>
</div>

---

### 環境をアクティベートする
環境を利用するためには、対象となる環境をアクティベートする必要があります。以下のコマンドを実行することで対象の環境をアクティベートできます。

* `activate <環境名>`

ArcGIS Pro と共にインストールした場合は、Python コマンド　プロンプトから以下のコマンドで環境を切り替えることができます。

* `proswap <環境名>`

<!-- * macOS と Linux

`source activate <environment_name>` -->

その他のコマンドの詳細については、[環境のアクティブ化 (英語)](https://conda.io/docs/user-guide/tasks/manage-environments.html#activating-an-environment)を参照してください。

---
### 新しいパッケージを追加する

アクティベートした環境に新しいパッケージを追加したい場合は次のコマンドを使用します。

`conda install <package_name>`

また、`--name` や `--channel` オプションを使用して、特定の環境およびチャネルを指定することもできます。

`conda install --name <environment_name> --channel <channel_name> <package_name>`

conda コマンドや 他オプションの使用方法の詳細については[パッケージの管理 (英語)](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html#managing-packages)を参照してください。

> **参考：conda からパッケージをインストールできる仕組み**
>
>Conda は、プラットフォームに依存しないパッケージ マネージャー アプリケーションで、Python パッケージをインストール、更新、および削除できます。
>パッケージは、チャネルと呼ばれるさまざまなリポジトリのいずれかに格納されているソフトウェアおよびサポートファイルのバンドルです。
>チャネルは、Anaconda クラウドなどの既定のクラウド ロケーションのセット、または個人または組織によって作成されたプライベートレポジトリである場合があります。 condaは、パッケージのリスト表示またはインストール時にデフォルトのチャネルセットを検索します。
>
>arcgis パッケージを格納するために esri という名前のチャネルに conda リポジトリが作成されています。 `conda install` コマンドは、チャネルにアクセスし、特定の conda 環境にパッケージをインストールしています。
>
><div align="center">
> <img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/introduction-to-conda/esrianaconda150.jpg" width="600px">
> <p>Anaconda クラウド上の esri チャネル<p>
></div>

このページの内容の詳細については [米国Esri ガイドページ：Understanding Conda (英語)](https://developers.arcgis.com/python/guide/understanding-conda/)をご覧ください。


次の章では、[ArcGIS API for Python の環境構築方法](../python-api-install)を紹介します。
