+++
title = "インストール ガイド"
description = "ArcGIS API for Python の環境構築方法を紹介します。"
weight = 3
aliases = ["/python/python-api-install/"]
+++

Python には、ArcGIS Pro で使用できるパッケージが豊富に用意されています。Python パッケージの使用を簡素化するために、ArcGIS Pro には [conda](https://docs.conda.io/en/latest/) と呼ばれるパッケージ管理システムが含まれています。 conda は、パッケージとその依存関係のインストールや更新の手間を省きます。
個のガイドでは ArcGIS Pro を使用したインストールの流れについてご紹介します。

### STEP 1: [Python API のインストール](#python-api-のインストール)
* [ArcGIS Pro でインストール](#arcgis-pro-でインストール)
* [Python コマンド プロンプトでインストール](#python-コマンド-プロンプトでインストール)

### STEP 2: [arcgis パッケージのアップグレード](#arcgis-パッケージのアップグレード)

### STEP 3: [ArcGIS API for Python の実行](#arcgis-api-for-python-の実行)
* [Jupyter Notebook の起動](#jupyter-notebook-の起動)
* [Jupyter Notebook で地図表示](#jupyter-notebook-で地図表示)

### [参考](#参考)
* [オフライン時のインストール方法](#オフライン時のインストール方法)
* [特定の Python 環境のカーネルの追加](#特定の-python-環境のカーネルの追加)

### Python API のインストール

#### ArcGIS Pro でインストール

ArcGIS Pro では、2.5 以降のリリースから conda と `arcgis` パッケージが最初からインストールされています。  conda の機能は、[パッケージ マネージャー](https://pro.arcgis.com/ja/pro-app/latest/arcpy/get-started/what-is-conda.htm) を通じて ArcGIS Pro に統合されています。ArcGIS Pro 2.5 以降では、任意の conda パッケージをダウンロードしてインストールするための パッケージ マネージャーの GUI が提供されています。ArcGIS Pro の設定画面からアクセスすることができます。

{{% notice note %}}

ArcGIS API for Python 2.4.0 は ArcGIS Pro 3.4 以降でのみサポートされます。ArcGIS Pro 3.3 以前の環境では、2.4.0 の arcgis および arcgis-mapping パッケージはサポートされません。ArcGIS Pro 3.3.x 環境でのインストールについては、[ArcGIS API for Python 2.3.x のドキュメント](https://developers.arcgis.com/python-2-3/guide/install-and-set-up/arcgis-pro/)をご参照ください。

{{% /notice %}}

* ArcGIS Pro を開き [設定] ＞ [パッケージ マネージャー] を選択します。プロジェクトを開いている場合は、[プロジェクト] タブ ＞ [パッケージ マネージャー] を選択します。
* デフォルトの arcgispro-py3 環境にインストールされているパッケージのリストが表示されます。さらにパッケージの追加や更新を行うには、以下の操作を行います。
* パッケージ マネージャーで [環境マネージャー] ボタンをクリックし、[arcgispro-py3 のクローン作成] ボタンを選択します。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/Pro_30/arcgis_pro_clone.png" width="800px">
<p>(ArcGIS Pro 3.x)①[環境マネージャー]ボタンと環境の②[デフォルトのクローン]ボタン</p>
</div>

* 必要に応じてパスと名前を変更し、[OK] をクリックします。
* すべてのパッケージのインストールが完了すると、クローンされた環境が格納されているディレクトリ名が表示されます。  
  ※ 完了前に操作をすると、作成した環境が正常に動作しない可能性があります。
* 環境マネージャー ウィンドウで作成した環境の右側にある [・・・] から [アクティブ化] を選択し、完了したら [OK] をクリックします。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/Pro_30/arcgis_pro_active.png" width="800px">
<p>(ArcGIS Pro 3.x)環境をアクティベート</p>
</div>

アクティブ化した環境でインストールされているパッケージを確認したり、更新やパッケージの追加オプションを使用して、クローン環境をニーズに合わせて変更することができます。

{{% notice note %}}

パッケージ マネージャー を使用して arcgis パッケージをアップグレードすることはできません。arcgis パッケージのアップグレード手順については、「パッケージのアップグレード」のセクションを参照してください。

{{% /notice %}}

***

#### Python コマンド プロンプトでインストール 
ArcGIS Pro には、任意の conda パッケージをダウンロードしてインストールするための Python コマンド プロンプトが提供されています。

* Windows のスタートメニュー ＞ すべてのアプリ ＞ ArcGIS ＞ Python コマンド プロンプトを選択します。 

{{% notice note %}}

デフォルトでは、Python コマンド プロンプトは ArcGIS Pro のデフォルトの arcgispro-py3 環境ディレクトリ(通常は C:\Program Files\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\ ) で開き、デフォルトの conda 環境がアクティブになります。

{{% /notice %}}

さらにパッケージを追加するには、デフォルトの arcgispro-py3 環境のクローンを作成する必要があります。Python コマンド プロンプトでクローン環境を作成する手順についての詳細は、[Clone a Python environment with the Python Command Prompt](https://support.esri.com/en-us/knowledge-base/how-to-clone-a-python-environment-with-the-python-comma-000020560) を参照してください。クローン環境を既に作成している場合は、以下のコマンドを使用してクローン環境をデフォルトの環境に変更することができます。

```
proswap <環境名>
```
* Python コマンドプロンプトで以下のコマンドを使用してパッケージをインストールします。  
  ※ バージョン番号を指定しない場合はその時点の最新版がインストールされます。

```
conda install -c esri arcgis arcgis-mapping
```

{{% notice note %}}

arcgis 2.4.0 および arcgis-mapping パッケージは、ArcGIS Pro 3.4 以降の環境でサポートされています。ArcGIS Pro 3.3.x インストールのパッケージのアップグレードについては、[バージョン 2.3.x のドキュメント](https://developers.arcgis.com/python-2-3/guide/install-and-set-up/arcgis-pro/)を参照してください。

{{% /notice %}}

<div align="center">
<img src="https://developers.arcgis.com/python/latest/static/6c293c32dd7e66acda7fab3729601249/4cdf7/arcgis_24_upgrade_cmd.png" width="800px">
<p>Python コマンド プロンプト</p>
</div>

### arcgis パッケージのアップグレード

{{% notice note %}}

デフォルトの arcgispro-py3 環境は変更できません。パッケージをアップデートする場合は、クローン環境を作成してください。また、パッケージ マネージャーでは arcgis パッケージを更新することはできません。以下のようにPython コマンド プロンプトを使用します。

{{% /notice %}}

* Python コマンドプロンプトを開きます。  
  Windows のスタートメニュー ＞ すべてのアプリ ＞ ArcGIS ＞ Python コマンド プロンプトで開くことができます。
* 以下のコマンドでアップグレードする arcgis パッケージを含む環境をアクティブ化します。 

```
activate <環境名>
```

* esri チャネルからバージョン番号なしでインストールして、arcgis パッケージを最新版にアップグレードします。以下のコマンドを入力します。

```
conda install -c esri arcgis arcgis-mapping
```

<div align="center">
<img src="https://developers.arcgis.com/python/latest/static/6c293c32dd7e66acda7fab3729601249/4cdf7/arcgis_24_upgrade_cmd.png" width="800px">
<p>コマンドの入力</p>
</div>

* インストール、アップグレードするパッケージの名前とバージョン番号が表示されるので、問題がなければ `y` を入力し、実行します。
* ArcGIS Pro のバージョンによっては、最新の Python API のバージョンが表示されない場合があります。その場合、一度 `n` を入力・実行し、以下のコマンドを再入力してください。

```
conda install -c esri arcgis --no-pin
```

{{% notice note %}}

ArcGIS Pro のバージョンによってはデフォルトの設定で、アップグレードできる Python API のバージョンの上限が指定がされています。</br>
`conda install -c esri arcgis --no-pin` のうち、`--no-pin` がバージョンの指定を外して最新版までアップグレードするためのオプションです。</br>
ただし、デフォルトの設定が変更されるわけではないため、アップグレード後に他のパッケージをインストールしようとすると、設定された上限のバージョンにダウングレードするように conda で計画されます。</br>
その場合、そのパッケージをインストールした後に再度上記のコマンドを入力し `arcgis` パッケージをアップグレードしてください。

{{% /notice %}}

* アップグレードしたバージョンを確認するには、次のコマンドを入力します。

```
conda list arcgis
```
* Python API を含む ArcGIS 関連のパッケージとそのバージョン番号が表示されます。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_23/py_cmd_list.png" width="700px">
<p></p>
</div>

***

### ArcGIS API for Python の実行

#### Jupyter Notebook の起動

* Pythonコマンドプロンプトを起動します。
* `cd` コマンドを使用して、ノートブックがあるディレクトリ、またはノートブックを作成したいディレクトリに移動します。
* 次のように入力して Jupyter Notebook を起動します。

```
jupyter notebook
```
* 起動しなかった場合は、以下を試してください。

```
jupyter-notebook
```

または、スタートメニュー ＞ すべてのプログラム ＞ ArcGIS ＞ Jupyter Notebook を選択しても起動することができます。

Jupyter Notebook の詳しい操作は [Jupyter Notebook を使ってみよう](../python-api-jnsetup)もご覧ください。</br>
Python API バージョン 1.5.0 以降からは、Jupyter Lab からも操作が可能です。[Jupyter Lab を使ってみよう](../python-api-jnlabsetup)も是非ご覧ください。


#### Jupyter Notebook で地図表示

次の手順で、地図を表示するための新しいノートブックを作成します。
* Click New > Python 3

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/newNoteboook.jpg" width="800px">
</div>

次のコードを入力します。

```python
from arcgis.gis import GIS
my_gis = GIS()
my_gis.map()
```

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/guide_getstarted_installandsetup_02.png" width="800px">
</div>

{{% notice tip %}}

Jupyter Notebook から使用している Python API のバージョンを確認する場合、次のコードを実行することで、現在お使いのバージョンを確認することができます。
```python
import arcgis
arcgis.__version__
```
もしくは、先頭に `!` を付けて以下のようにコマンドを実行して確認することも可能です。
```
!conda list arcgis
```

{{% /notice %}}


---

### 参考
#### オフライン時のインストール方法

インターネットに接続していない環境の場合、次の手順で Python API のインストールが可能です。<br>
ただし、この場合、すべての依存パッケージがインストールされるわけではないため、Jupyter Notebook の利用など、一部の機能が制限される可能性があります (※ 組織やコンテンツの管理など特定のタスクは以下手順でインストールする [six](https://pypi.org/project/six/) パッケージのみで可能です。)<br>
依存パッケージについては米国Esri 社のガイドページ：[System requirements](https://developers.arcgis.com/python/guide/system-requirements/) を参照ください。


インターネットに接続できる環境で以下の必要なソフトウェアをダウンロードします。
* 最新の Python 3.x 用の Anaconda
* 適切なバージョンの Python API のファイル
    * [Anaconda クラウドの Esri のチャネル](https://anaconda.org/Esri/arcgis/files)からダウンロード可能です。
    * ファイル名は以下のパターンに従います
        * **<font color="#d04255">OS</font>/arcgis-<font color="#208dc3">x.x.x</font>-py<font color="#1ba466">ZZ</font>yyyyyyy-y.tar.bz2.**
          * OS: 使用するマシンの OS
           * x.x.x: API のバージョン
           * ZZ: 使用する Python のバージョン
           * yyyyyyy-y: チャネルにアップロードされた conda のパッケージに付与されるハッシュ ナンバー
    * 例えば、<font color="#d04255">Windows 64 bit</font> のマシンで、Python API <font color="#208dc3">1.6.0</font> の Python <font color="#1ba466">3.7</font> 版をダウンロードする場合は、"<font color="#d04255">win-64</font>/arcgis-<font color="#208dc3">1.6.0</font>-py<font color="#1ba466">37</font>h62639d4_1.tar.bz2" をクリックしてダウンロードします。
<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/anacondacloudesric.png" width="800px">
</div>

オフライン環境で Anaconda を設定
* Anaconda をインストールします。
* 次のコマンドで[オフライン モード](https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/use-condarc.html#offline-mode-only-offline)に設定します。

```
conda config --set offline True
```

* 次のコマンドで新しい環境を作成します。

```
conda create -n <環境名> python six
```

* 環境をアクティベートします。

```
conda activate <環境名>
```

* ArcGIS API for Python をインストールします。

```
conda install <事前にダウンロードしたファイルのパス>
```

"done"が表示されればインストール完了です。<br>
より詳しい情報は Esri ガイド ページ [Install-Offline](https://developers.arcgis.com/python/guide/install-and-set-up/#Install-Offline) をご覧ください。

<br>

#### 特定の Python 環境のカーネルの追加

異なる Python 環境ごとに Jupyter Notebook のインスタンスを実行する代わりに、特定の Python 環境を持つカーネルを Jupyter Notebook にインストールすることができます。  
Jupyter Notebook に特定の Python 環境でカーネルを追加するには、以下で説明する手順に従います。

1. Python コマンド プロンプトを管理者として実行します
2. Python コマンド プロンプト ウィンドウで、次のコマンドを挿入します
```
python -m ipykernel install --user --name <環境名> --display-name "<Jupyter Notebook 上の表示名>"
```
3. 2 のコマンドを実行すると、カーネルが作成され、次の応答が返されます
```
Installed kernelspec <カーネル名> in C:\Users\<user>\AppData\Roaming\jupyter\kernels\<カーネル名>
```
4. 次に、別の Python 環境でカーネルを作成するために別の環境をアクティベートします
```
activate <環境名>
```
5. 手順 2 と同様の方法でカーネルを作成します
6. Python コマンド プロンプトで下記のコマンドを入力し、Jupyter Notebook を起動します
```
Jupyter Notebook
```
7. カーネルのリストに作成したカーネルが存在することが確認できます
<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/select_kernel.png" width="400px">
</div>

このような方法で特定の異なる環境のカーネルを作成し、Jupyter Notebook 上で切り替えられるようになります。  
特定の Python 環境を持つ新しいカーネルは手動で作成することでも可能です。詳細は [Install a new kernel in Jupyter Notebook using a specific Python environment](https://support.esri.com/en-us/knowledge-base/how-to-install-a-new-kernel-in-jupyter-notebook-using-a-000019210) をご参照ください。  
また、特定の環境のパスを指定してカーネルを作成する方法については [Kernels for different environments](https://ipython.readthedocs.io/en/8.27.0/install/kernel_install.html#kernels-for-different-environments) もご参照ください。

インストールに関しての詳細は Esri ガイド ページ [Install and set up](https://developers.arcgis.com/python/guide/intro/) もご参照ください。