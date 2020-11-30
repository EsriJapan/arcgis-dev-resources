+++
title = "インストール ガイド"
description = "ArcGIS API for Python の環境構築方法を紹介します。"
weight = 3
aliases = ["/python/python-api-install/"]
+++

ArcGIS API for Python (以下、Python API) を使用するための環境構築は主に 2 つあります。一つは ArcGIS Pro でインストールする方法、もう一つは Anaconda でインストールする方法です。</br>
Python API は、`arcgis` という名前のパッケージで [Anaconda Cloud](https://anaconda.org/) 等で配布されています。Anaconda Cloud 上のパッケージは conda を使用してインストールやバージョン管理を行うことができます。conda の詳細については [ArcGIS API for Python のための基礎環境：conda入門](../python-api-conda) を参照してください。

{{% notice warning %}}

Python API は ArcGIS Pro 経由でインストールするか、Anaconda 経由でインストールする方法がありますが、**PATH の問題を引き起こす可能性があるため、ベストプラクティスとしては、単一のマシンに ArcGIS Pro と Anaconda の両方をインストールすることは推奨されません。**

ArcGIS Pro と Anaconda の違いについては以下のブログもご参照ください。
- [ArcGIS API for Python のコアコンセプト その 2：Anaconda、Conda、Jupyter Notebook、そしてArcGIS Pro](https://community.esri.com/docs/DOC-13655)

{{% /notice %}}

### STEP 1: [Python API をインストールする](#python-api-をインストールする)
* [ArcGIS Pro でインストールする](#arcgis-pro-でインストールする)
* [Anaconda 経由でインストールする](#anaconda-経由でインストールする)

### STEP 2: [`arcgis` パッケージをアップグレードする](#arcgis-パッケージをアップグレードする)
* [ArcGIS Pro 2.3 以上の環境の場合](#arcgis-pro-2-3-以上の環境の場合)
* [ArcGIS Pro 2.2 環境の場合](#arcgis-pro-2-2-環境の場合)
* [Anaconda 環境の場合](#anaconda-環境の場合)

### STEP 3: [ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)
* [Jupyter Notebook を起動する](#jupyter-notebook-を起動する)
* [Jupyter Notebook で地図を表示してみる](#jupyter-notebook-で地図を表示してみる)

### [参考](#参考)
* [1. オフライン時のインストール方法](#1-オフライン時のインストール方法)
* [2. Linux へのインストール](#2-linux-へのインストール)

***

### Python API をインストールする

#### ArcGIS Pro でインストールする

ArcGIS Pro では、2.1 以降のリリースから conda と `arcgis` パッケージが最初からインストールされています。</br>
[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。バージョンが最新でない場合は[`arcgis` パッケージをアップグレードする](#arcgis-パッケージをアップグレードする)を参照して Python API を更新します。

#### Anaconda 経由でインストールする

ArcGIS Pro をお持ちでない場合は、Anaconda をインストールします。</br>
Anaconda は Python とデータサイエンス向けの Python パッケージなどを提供するプラットフォームです。 </br>
Python API は Python 3.5 以降を必要とするため、[Anaconda ダウンロードページ](https://www.anaconda.com/download/)から、適切なバージョンをダウンロードしてください。 </br>
※ Python API は、国内では Windows 版のサポートを提供しています。
<!-- macOS/Linux は Python API の国内サポート対象外のため、現時点ではコメントアウトしておく -->
<!-- * [macOS](https://www.anaconda.com/download/#macos) -->
<!-- * [Linux](https://www.anaconda.com/download/#linux) -->

ターミナルアプリケーション（ここでは Anaconda Prompt）を開き、次のコマンドを使用して `arcgis` パッケージをインストールします。
```
conda install -c esri arcgis
```

<div align="left">
<img src="http://esri.github.io/arcgis-python-api/notebooks/nbimages/install_arcgis_pkg_mac.png" width="700px">
</div>

インストールされる Python API のバージョンは基本的に最新バージョンとなりますが、古いバージョンがインストールされた場合は以下のようにバージョン番号を指定することで指定したバージョンがインストールされます。</br>
```
conda install -c esri arcgis=1.8.0
```

{{% notice note %}}

Anaconda で Python API の環境構築をした場合、内部ではデータの書き出し等に [pyshp](https://pypi.org/project/pyshp/) を利用しています。2020 年 5 月現在の最新版である pyshp 2.1.0 ではフィールド名が Unicode に対応して日本語が扱えるようになる等、機能が改善されていますが、Python API 1.7.1 以前のバージョンでは古いバージョンの pyshp を使っています。そのため、Anaconda で環境構築する際は 1.8.0 以降の Python API のインストールを推奨します。

{{% /notice %}}

インストールが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。

***

### arcgis パッケージをアップグレードする

#### ArcGIS Pro 2.3 以上の環境の場合

ArcGIS Pro 2.3 以上では Python API が最初からインストールされています。</br>
ArcGIS Pro をインストールすると、デフォルトで "arcgispro-py3" という読み取り専用の conda 環境が作成されています。Python API を最新のバージョンに更新するには、Python パッケージ マネージャー (ArcGIS Pro の機能のひとつ) を使用して、デフォルトの環境をクローンし、クローンした環境の Python API を最新バージョンにアップグレードします。

* ArcGIS Pro を起動し、スタートアップ画面の左下にある [設定] をクリックします。
* [Python]メニューオプションを選択します。
* [環境の管理]ボタンをクリックし、「環境の管理」ウィンドウを開いて、[デフォルトのクローン]ボタンを選択します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_23/py_pkg_mng.png" width="800px">
<p>[環境の管理]ボタンと環境の[デフォルトのクローン]ボタン</p>
</div>

* デフォルト環境のクローンが作成されます。

<!-- Pro2.3から環境名の変更がProからはできなくなっている -->
<!-- <div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_mng_env_new.png" width="800px">
<p>[名前]の入力ボックスへ入力する </br>※日本語は推奨しません。半角英数で入力します。</p>
</div> -->

* クローンの作成中は下部にインストール中のパッケージ名が表示されます。</br>すべてのパッケージのインストールが完了すると、クローンされた環境が格納されているディレクトリ名が表示されます。</br>※完了前に操作をすると、作成した環境が正常に動作しない可能性があります。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_23/py_pkg_mng_installing2.png" width="800px">
<p>クローンの作成中の様子</p>
</div>

* 作成した環境のラジオボタンをクリックして、環境をアクティブにします。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_23/py_pkg_mng_activate2.png" width="800px">
<p>環境をアクティベート</p>
</div>

* 環境の管理ダイアログを閉じ、ArcGIS Pro を閉じます
* Python コマンドプロンプトを開きます。<br>スタートメニュー>すべてのプログラム> ArcGIS> Python コマンドプロンプトで開くことができます。
* 次のコマンドを入力します。

```
conda upgrade -c esri arcgis
```

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_23/py_cmd_upgrade2.png" width="700px">
<p>コマンドの入力</p>
</div>

* インストール、アップグレードするパッケージの名前とバージョン番号が表示されるので、問題がなければ `y` を入力し、実行します。
* ArcGIS Pro のバージョンによっては、最新の Python API のバージョンが表示されない場合があります。その場合、一度 `n` を入力・実行し、以下のコマンドを再入力してください。

```
conda upgrade -c esri arcgis --no-pin
```

{{% notice note %}}

ArcGIS Pro のバージョンによってはデフォルトの設定で、アップグレードできる Python API のバージョンの上限が指定がされています。</br>
`conda upgrade -c esri --no-pin arcgis` のうち、`--no-pin` がバージョンの指定を外して最新版までアップグレードするためのオプションです。</br>
ただし、デフォルトの設定が変更されるわけではないため、アップグレード後に他のパッケージをインストールしようとすると、設定された上限のバージョンにダウングレードするように conda で計画されます。</br>
その場合、そのパッケージをインストールした後に再度上記のコマンドを入力し `arcgis` パッケージをアップグレードしてください。
<!-- > *以下の操作はデフォルトで想定されているパッケージ管理の制御を変更するため、必ず事前に環境を複製しておく等、適切なバックアップの処置をしてください。*</br>
> *また、以下操作の実行による不具合等はサポートの対象としかねますので、ご承知おきください。*</br>
> 永続的に設定を変更するには conda 環境の中の pinned ファイルを書き換える必要があります。</br>
> > C:\Users\ (ユーザー名) \AppData\Local\ESRI\conda\envs\ (複製した環境名) \conda-meta\pinned</br>
> 上記ファイルをテキストエディタで開くと、`arcgis 1.5.*` と記載されているので、数字部分を `2` など、アップグレードしたいバージョン以上の数字に書き換え保存します。</br>
> 他の記載されているパッケージの設定を変更すると、予期しない不具合を招く恐れがありますので注意してください。</br> -->

{{% /notice %}}

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_23/py_cmd_plan.png" width="700px">
<p align="center">インストールされるパッケージの確認</p>
</div>

* アップグレードしたバージョンを確認するには、次のコマンドを入力します。

```
conda list arcgis
```
* Python API を含む ArcGIS 関連のパッケージとそのバージョン番号が表示されます。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_23/py_cmd_list.png" width="700px">
<p></p>
</div>

アップデートが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。

#### ArcGIS Pro 2.2 環境の場合

ArcGIS Pro 2.2 には ArcGIS API for Python 1.4.1 がインストールされています。</br>
ArcGIS Pro をインストールすると、デフォルトで "arcgispro-py3" という読み取り専用の conda 環境が作成されています。Python API を最新のバージョンに更新するには、Python パッケージ マネージャー (ArcGIS Pro の機能のひとつ) を使用して、デフォルトの環境をクローンし、クローンした環境の Python API を最新バージョンにアップグレードします。

* 新しい空のプロジェクトで ArcGIS Pro を開きます。
* [プロジェクト]タブを選択して、ArcGIS Pro の詳細オプションを表示します。（下記のスクリーンショットを参照）
* [Python]メニューオプションを選択します。
* [環境の管理]ボタンをクリックしウィンドウを開いて、[新規作成]ボタンを選択します。                                                                      

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_22/ppm_mng_env.png" width="800px">
<p>[環境の管理]ボタンと環境の[新規作成ボタン]</p>
</div>

* 新しい環境の名前を入力して[保存]を選択します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_22/ppm_mng_env_new.png" width="800px">
<p>[名前]の入力ボックスへ入力する </br>※日本語は推奨しません。半角英数で入力します。</p>
</div>

* ダイアログの下部にある青色の進行状況バーが消えたら完了です。</br>この表示が完了してから、次の操作に進んでください。</br>※完了前の操作は正しい環境が作成・動作しない可能性があります。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_22/ppm_env_create_progress.png" width="800px">
<p>青色の進行状況バー</p>
</div>

* 作成した環境のラジオボタンを選択して、環境をアクティブにします。</br>ここでの操作は、Anacondaで仮想環境をアクティベートする操作に値します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_22/ppm_active_env.png" width="800px">
<p>仮想環境を指定する</p>
</div>

* 環境の管理ダイアログを閉じ、ArcGIS Pro を閉じます
* Python コマンドプロンプトを開きます</br>またはスタートメニュー>すべてのプログラム> ArcGIS> Python コマンドプロンプトで開きます。
* 次のコマンドを入力します。

```
conda upgrade -c esri arcgis
```

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_22/cmd_upgrade_pyapi.png" width="700px">
<p>コマンドの入力</p>
</div>

* 「Proceed([y]/n)?」 の表示は `y` を入力して実行します。

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_22/cmd_upgrade_y.png" width="700px">
<p align="center">インストールするパッケージ計画が表示され、この計画でよい場合は"y"を選択します</p>
</div>

* アップグレードしたバージョンを確認するには次のコマンドを入力します。

```
conda list arcgis
```

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/pro_22/cmd_upgrade_verify.png" width="700px">
<p>Python API を含む ArcGIS 関連のパッケージとそのバージョン番号が表示できます</p>
</div>

アップデートが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。

#### Anaconda 環境の場合
Anaconda Prompt のようなターミナルアプリケーションを開き、次のコマンドを使用して `arcgis` を実行してアップグレードします。
```
conda upgrade -c esri arcgis
```

インストールするパッケージの計画が表示されるので、`y` を選択し、アップグレードします。

アップデートが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。

***

### ArcGIS API for Python を実行する

#### Jupyter Notebook を起動する

<!-- macOS、Linuxは未サポートのためコメントアウト -->
<!-- #### Windowsの場合 -->

* Pythonコマンドプロンプト (ArcGIS Pro でインストールした場合)、もしくは Anaconda Prompt (Anaconda でインストールした場合) を起動します。
* `cd` コマンドを使用して、ノートブックがあるディレクトリ、またはノートブックを作成したいディレクトリに移動します。
* 次のように入力して Jupyter Notebook を起動します。

```
jupyter notebook
```
* 起動しなかった場合は、以下を試してください。

```
jupyter-notebook
```


または、スタートメニュー>すべてのプログラム> ArcGIS>Jupyter Notebook を選択しても起動することができます。

<!-- 現在は未サポートのためコメントアウト -->
<!-- #### macOS and Linux の場合

* 端末のターミナルを開きます
* ノートブックがあるディレクトリ、またはノートブックを作成したいディレクトリに変更します
* 以下を入力してjupyterを起動します
    * `jupyter notebook` -->

Jupyter Notebook の詳しい操作は [Jupyter Notebook を使ってみよう](../python-api-jnsetup)もご覧ください。</br>
Python API バージョン 1.5.0 以降からは、Jupyter Lab からも操作が可能です。[Jupyter Lab を使ってみよう](../python-api-jnlabsetup)も是非ご覧ください。


#### Jupyter Notebook で地図を表示してみる

次の手順で、地図を表示するための新しいノートブックを作成します。
* Click New > Python 3
<!-- * macOS and Linux:  Click New > Python[default] -->

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/newNoteboook.jpg" width="800px">
</div>

次のコードを入力します。

```python
from arcgis.gis import GIS
my_gis = GIS()
my_gis.map()
```

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_installandsetup_02.png" width="800px">
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
#### 1. オフライン時のインストール方法

インターネットに接続していない環境の場合、次の手順で Python API のインストールが可能です。<br>
ただし、この場合、すべての依存パッケージがインストールされるわけではないため、Jupyter Notebook の利用など、一部の機能が制限される可能性があります (※ 組織やコンテンツの管理など特定のタスクは以下手順でインストールする [six](https://pypi.org/project/six/) パッケージのみで可能です。)<br>
依存パッケージについては米国Esri 社のガイドページ：[System requirements](https://developers.arcgis.com/python/guide/system-requirements/) を参照ください。


##### インターネットに接続できる環境で以下の必要なソフトウェアをダウンロードします。
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
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/anacondacloudesric.png" width="800px">
</div>

##### オフライン環境で Anaconda を設定
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
より詳しい情報は 米国Esri ガイドページ：[Install-Offline](https://developers.arcgis.com/python/guide/install-and-set-up/#Install-Offline) をご覧ください。

<br>

#### 2. Linux へのインストール
ArcGIS API for Python は Linux マシンにもインストールすることができます。<br>
ここでは、例として [Ubuntu Server](https://ubuntu.com/download/server) にインストールする手順をご紹介します。<br>

{{% notice warning %}}

現在国内では ArcGIS API for Python の Linux での利用は未サポートです。ご利用そのものを妨げるものではありませんが、利用される際は ESRIジャパンの提供するサポート サービス等の対象とならない可能性がある点に留意してください。

{{% /notice %}}

##### Anaconda をインストール
Linux では ArcGIS Pro を利用できないため、Anaconda から ArcGIS API for Python をインストールします。

* Linux 版の Anaconda の [ダウンロード URL](https://www.anaconda.com/distribution/#download-section) を確認し、wget でファイルをダウンロードします
    * ここでは Anaconda 2019.10 for Linux をダウンロードします。

```
wget https://repo.anaconda.com/archive/Anaconda3-2019.10-Linux-x86_64.sh
```
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/linux/dl-anaconda.png" width="800px">
</div>

* ダウンロードしたインストーラーを以下のコマンドで実行します。

```
sh Anaconda3-2019.10-Linux-x86_64.sh
```
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/linux/sh-anaconda.png" width="500px">
</div>

* インストールするディレクトリは任意のディレクトリを選ぶことができます。ここではデフォルトの設定である、ログイン ユーザーのホーム ディレクトリにインストールすることにします。
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/linux/install-dir.png" width="500px">
</div>

* 最後に PATH を通すか確認されます。ここでは [Anaconda のドキュメント](https://docs.anaconda.com/anaconda/user-guide/faq/#id2)に従い、yes として進めます。
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/linux/initialize.png" width="500px">
</div>


{{% notice note %}}

変更を反映させるためには一度 シェル を閉じて再度開く必要があります。

{{% /notice %}}

##### `arcgis` パッケージをインストール
ArcGIS API for Python (arcgis) をインストールします。

Anaconda の base 環境にインストールしてもよいですが、ここでは conda で新しい環境を作成してインストールします。

* 新しい Python 環境を作成
    * 以下のコマンドで新しい Python 環境を作成します。
    * <環境名> には識別しやすい任意の環境名を指定します。また、ここではインストールする Python のバージョンとして 3.7 を指定しています。

```
conda create -n <環境名> python=3.7
```

* 作成した環境をアクティベート
    * 以下のコマンドで作成した環境に切り替えます

```
conda activate <環境名>
```

* ArcGIS API for Python をインストール
    * 以下のコマンドで ArcGIS API for Python をインストールします。
    * 以下では ArcGIS API for Python 1.7.1 をインストールするよう指定しています。

```
conda install -c esri arcgis=1.7.1
```

* インストールの確認
    * インストールが終了したら以下のコマンドで正常にインストールされているか確認しましょう。
    * 正常にインストールされていれば、arcgis というパッケージ名とインストールしたバージョン番号が表示されます。

```
conda list arcgis
```
<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/linux/conda-list-arcgis.png" width="500px">
</div>

ESRIジャパンが運営する [GIS アプリ開発者のためのコミュニティ グループ](https://community.esri.com/groups/devcom-jp) では、Python API の機能や実際のコードを[ブログ](https://community.esri.com/groups/devcom-jp/content?filterID=contentstatus[published]~category[web-%E9%96%8B%E7%99%BA]&query=python)でご紹介しています。</br>
また、[GitHub](https://github.com/EsriJapan/arcgis-samples-python-api) にも日本語による解説付きのコードを公開していますので、是非ご参照ください。