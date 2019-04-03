
ArcGIS API for Python を使用するための環境構築方法はいくつかあります。</br>
ArcGIS API for Python(以下、Python API) は、`arcgis`という名前のパッケージとして配布されています。
conda は Python と Python で使用できるライブラリのインストールやバージョンを管理するパッケージ管理アプリケーションです。

このページでは、conda と `arcgis` パッケージの両方をインストールする手順について解説します。</br>
※ conda は ArcGIS Pro 経由でインストールするか、Anaconda Distribution (以下、Anaconda) でインストールする方法がありますが、**PATH の問題を引き起こす可能性があるため、ベストプラクティスとしては、単一のマシンに ArcGIS Pro と Anaconda の両方をインストールすることは推奨されません。**

インストールが済みましたら、実行環境である [Jupyter Notebook について説明したページ](../python-api-jnsetup) や、更に便利な [Jupyter Lab について説明したページ](../python-api-jnlabsetup) もございますので、併せてご参照ください。


### STEP 1:[Conda をインストールする](#conda-をインストールする)
* [ArcGIS Pro で conda をインストールする](#arcgis-pro-で-conda-をインストールする)
    * [ArcGIS Pro 2.1 以上の場合](#arcgis-pro-2.1-以上の場合)
    * [ArcGIS Pro 1.4.x 以上と2.0.x の場合](#arcgis-pro-1.4.x-以上と-2.0.x-の場合)
* [Aaconda をインストールする](#anaconda-をインストールする)

### STEP 2:[`arcgis` パッケージをインストールする](#arcgis-パッケージをインストールする)
* [ArcGIS Pro の Python パッケージマネージャーからインストールする](#arcgis-pro-の-python-パッケージマネージャーからインストールする)
* [ArcGIS の Python コマンドプロンプトでインストールする](#arcgis-の-python-コマンドプロンプトでインストールする)
* [Anaconda からインストールする](#anaconda-からインストールする)

### STEP 3:[`arcgis` パッケージをアップグレードする](#arcgis-パッケージをアップグレードする)
* [ArcGIS Pro 2.2 の環境でアップグレードする](#arcgis-pro-2.2-の環境でアップグレードする)
* [ArcGIS Pro 2.1 の環境でアップグレードする](#arcgis-pro-2.1-の環境でアップグレードする)
* [ArcGIS Pro 1.4.x 以上と 2.0.x と Anaconda の環境でアップグレードする](#arcgis-pro-1.4.x-以上と2.0x-と-anaconda-の環境でアップグレードする)

### STEP 4:[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)
* [Jupyter Notebook を起動する](#jupyter-notebook-を起動する)
* [Jupyter Notebook で地図を表示してみる](#jupyter-notebook-で地図を表示してみる)

#### [オフライン時のインストール方法](#オフライン時のインストール方法)

***

## Conda をインストールする

### ArcGIS Pro で conda をインストールする

* #### ArcGIS Pro 2.1 以上の場合

ArcGIS Pro 2.1 以降のリリースには conda と `arcgis` パッケージがプリインストールされています。</br>
[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。または、バージョンが最新でない場合は[ArcGIS Pro 2.1 の環境でアップグレードする](#arcgis-pro-2.1-の環境でアップグレードする)を参照して Python API を更新します。

* #### ArcGIS Pro 1.4.x 以上と 2.0.x の場合

ArcGIS Pro 1.4 以上のバージョンには conda がすでにインストールされています。</br>
[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。または、バージョンが最新でない場合は[ArcGIS Pro 1.4.x 以上と 2.0.x と Anaconda の環境でアップグレードする](#arcgis-pro-1.4.x-以上と2.0x-と-anaconda-の環境でアップグレードする)を参照して Python API を更新します。

### Anaconda をインストールする

ArcGIS Pro をお持ちでない場合は、Anaconda をインストールします。</br>
Anaconda は Python やパッケージ管理用の conda とその他多くの便利な Python パッケージのインストールやパッケージバージョンを管理します。 </br>
Python API は Python 3.5 以降を必要とするため、[Anaconda ダウンロードページ](https://www.anaconda.com/download/)から、Anaconda ソフトウェアの適切な 3x バージョンをダウンロードしてください。

* [macOS](https://www.anaconda.com/download/#macos)
* [Linux](https://www.anaconda.com/download/#linux)
* [Windows](https://www.anaconda.com/download/#windows)

Anaconda がインストールされたら、STEP2 の [Anaconda からインストールする](#anaconda-からインストールする) へ進み`arcgis` パッケージをインストールします。

***

## arcgis パッケージをインストールする

### ArcGIS Pro の Python パッケージマネージャーからインストールする

ArcGIS Pro 1.4 以降では、Python パッケージ マネージャー（GUI）を使用して、任意の conda パッケージをダウンロードしてインストールできます。 ArcGIS Pro の詳細オプションからアクセスします。

* 新しい空のプロジェクトで ArcGIS Pro を開きます
* [プロジェクト]タブを選択して、Pro の詳細オプションを表示します（下記のスクリーンショットを参照）
* [Python]メニューオプションを選択してください
* [パッケージの追加]ボタンをクリックし、検索バーに"arcgis"を入力します
* 利用可能なリリースの完全なリストを確認するには、「更新」ボタンをクリックします。 1.2.5までのリリースをインストールすることができます。 [ArcGIS Pro 2.1 の環境でアップグレードする](#arcgis-pro-2.1-の環境でアップグレードする)を参照してください
* [インストール]ボタンを選択します
* [インストール]をクリックし、利用規約に同意します

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_installandsetup_03.png" width="800px">
</div>

※パッケージ名が表示されないなど、この方法がうまくいかない場合は、[ArcGIS の Python コマンドプロンプトでインストールする](#arcgis-の-python-コマンドプロンプトでインストールする)ことをお試しください。

### ArcGIS の Python コマンドプロンプトでインストールする

ArcGIS Pro 付属の Python コマンドプロンプトを使用してインストールします。

* スタートメニュー>すべてのプログラム> ArcGIS> Pythonコマンドプロンプト を選択します。
* 起動した Python コマンド プロンプトで次のように入力します。:

`conda install -c esri arcgis`

<div align="left">
<img src="https://developers.arcgis.com/assets/img/python-graphics/python_command_prompt.png" width="700px">
</div>

Pro のインストール方法によっては、このプロンプトは[管理者権限](https://pro.arcgis.com/ja/pro-app/arcpy/get-started/using-conda-with-arcgis-pro.htm#ESRI_SECTION2_10DDF8A21C394B9988C9CD785391DDD2)で起動する必要があります。

### Anaconda からインストールする

ターミナルアプリケーション（ここでは Anaconda プロンプト）を開き、次のコマンドを使用して `arcgis` パッケージをインストールします。

`conda install -c esri arcgis`

<div align="left">
<img src="http://esri.github.io/arcgis-python-api/notebooks/nbimages/install_arcgis_pkg_mac.png" width="700px">
</div>

インストールされる Python API のバージョンは基本的に最新バージョンとなります。</br>
インストールが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。

***

## arcgis パッケージをアップグレードする

<!-- to do：2.3の日本語版が出たら内容を確認・修正し、リリース後に反映させる。基本画像系は全て差し替え -->
<!-- ### ArcGIS Pro 2.3 の環境でアップグレードする

ArcGIS Pro 2.3 には ArcGIS API for Python 1.5.1 がインストールされています。</br>
ArcGIS Pro インストール時には "arcgispro-py3" という読み取り専用の conda 環境が作成されています。Python API を最新のバージョンに更新するには、Python Package Manager (ArcGIS Pro の機能のひとつ)を使用して、新しい環境を作成し、Python API の最新バージョンをインストール(アップグレード)します。

* ArcGIS Pro を起動し、スタートアップ画面の左下にある [設定] をクリックします。
* [Python]メニューオプションを選択します。
* [環境の管理]ボタンをクリックしウィンドウを開いて、[デフォルトの複製]ボタンを選択します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_mng_env.png" width="800px">
<p>[環境の管理]ボタンと環境の[デフォルトの複製]</p>
</div>

* 新しい環境の名前を入力して[保存]を選択します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_mng_env_new.png" width="800px">
<p>[名前]の入力ボックスへ入力する </br>※日本語は推奨しません。半角英数で入力します。</p>
</div>

* 新たに作成した環境の下部にインストール中のパッケージ名が表示されます。</br>この表示が完了してから、次の操作に進んでください。</br>※完了前に操作をすると、作成した環境が正常に動作しない可能性があります。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_env_create_progress.png" width="800px">
<p>青色の進行状況バー</p>
</div>

* 作成した環境のラジオボタンを選択して、環境をアクティブにします。</br>ここでの操作は、Anacondaで仮想環境をアクティベートする。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_active_env.png" width="800px">
<p>仮想環境を指定する</p>
</div>

* 環境の管理ダイアログを閉じ、ArcGIS Pro を閉じます
* Python コマンドプロンプトを開きます</br>またはスタートメニュー>すべてのプログラム> ArcGIS> Python コマンドプロンプトで開きます。
* 次のコマンドを入力します。

`conda upgrade -c esri --no-pin arcgis`

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/cmd_upgrade_pyapi.png" width="700px">
<p>コマンドの入力</p>
</div>

* 「Proceed([y]/n)?」 の表示は `y` を入力して実行します。

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/cmd_upgrade_y.png" width="700px">
<p align="center">インストールするパッケージ計画が表示され、この計画でよい場合は"y"を選択します</p>
</div>

* アップグレードしたバージョンを確認するには次のコマンドを入力します。

`conda list arcgis`

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/cmd_upgrade_verify.png" width="700px">
<p>Python API を含む ArcGIS 関連のパッケージとそのバージョン番号が表示できます</p>
</div>

> *Tips*
> ArcGIS Pro 2.3 ではデフォルトで 1.5.3までしかアップグレードできないように設定されています。</br>
> `conda upgrade -c esri --no-pin arcgis` の指定を外して最新版までアップグレードすることができます。</br>
> ただし、元の設定が変更されるわけではないため、アップグレード後に他のパッケージをインストールしようとすると、1.5.3 にダウングレードするよう conda で計画されます。</br>
> その場合、そのパッケージをインストール後に再度上記のコマンドを入力し arcgis パッケージをアップグレードしてください。</br>
> </br>
> *以下の操作はデフォルトで想定されているパッケージ管理の制御を変更するため、必ず事前に環境を複製しておく等、適切なバックアップの処置をしてください。*</br>
> *また、以下操作の実行による不具合等はサポートの対象としかねますので、ご承知おきください。*</br>
> 永続的に設定を変更するには conda 環境の中の pinned ファイルを書き換える必要があります。</br>
> > C:\Users\ (ユーザー名) \AppData\Local\ESRI\conda\envs\ (複製した環境名) \conda-meta\pinned</br>
> 上記ファイルをテキストエディタで開くと、`arcgis 1.5.*` と記載されているので、数字部分を 2 など、アップグレードしたいバージョン以上の数字に書き換え保存します。</br>
> 他の記載されているパッケージの設定を変更すると、予期しない不具合を招く恐れがありますので注意してください。</br>

アップデートが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。


-->
### ArcGIS Pro 2.2 の環境でアップグレードする

ArcGIS Pro 2.2 には ArcGIS API for Python 1.4.1 がインストールされています。</br>ArcGIS Pro インストール時には "arcgispro-py3" という読み取り専用の conda 環境が作成されています。Python API を最新のバージョンに更新するには、Python Package Manager (ArcGIS Pro の機能のひとつ)を使用して、新しい環境を作成し、Python API の最新バージョンをインストール(アップグレード)します。


* 新しい空のプロジェクトで ArcGIS Pro を開きます。
* [プロジェクト]タブを選択して、ArcGIS Pro の詳細オプションを表示します。（下記のスクリーンショットを参照）
* [Python]メニューオプションを選択します。
* [環境の管理]ボタンをクリックしウィンドウを開いて、[新規作成]ボタンを選択します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_mng_env.png" width="800px">
<p>[環境の管理]ボタンと環境の[新規作成ボタン]</p>
</div>

* 新しい環境の名前を入力して[保存]を選択します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_mng_env_new.png" width="800px">
<p>[名前]の入力ボックスへ入力する </br>※日本語は推奨しません。半角英数で入力します。</p>
</div>

* ダイアログの下部にある青色の進行状況バーが消えたら完了です。</br>この表示が完了してから、次の操作に進んでください。</br>※完了前の操作は正しい環境が作成・動作しない可能性があります。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_env_create_progress.png" width="800px">
<p>青色の進行状況バー</p>
</div>

* 作成した環境のラジオボタンを選択して、環境をアクティブにします。</br>ここでの操作は、Anacondaで仮想環境をアクティベートする操作に値します。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/ppm_active_env.png" width="800px">
<p>仮想環境を指定する</p>
</div>

* 環境の管理ダイアログを閉じ、ArcGIS Pro を閉じます
* Python コマンドプロンプトを開きます</br>またはスタートメニュー>すべてのプログラム> ArcGIS> Python コマンドプロンプトで開きます。
* 次のコマンドを入力します。

`conda upgrade -c esri arcgis`

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/cmd_upgrade_pyapi.png" width="700px">
<p>コマンドの入力</p>
</div>

* 「Proceed([y]/n)?」 の表示は `y` を入力して実行します。

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/cmd_upgrade_y.png" width="700px">
<p align="center">インストールするパッケージ計画が表示され、この計画でよい場合は"y"を選択します</p>
</div>

* アップグレードしたバージョンを確認するには次のコマンドを入力します。

`conda list arcgis`

<div align="left">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/cmd_upgrade_verify.png" width="700px">
<p>Python API を含む ArcGIS 関連のパッケージとそのバージョン番号が表示できます</p>
</div>

アップデートが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。

### ArcGIS Pro 2.1 の環境でアップグレードする

ArcGIS Pro 2.1 には ArcGIS API for Python 1.2.5 がインストールされています。 最新のバージョンに更新するには、arcgispro-py3 環境を有効にしたターミナルウィンドウまたは Python コマンド プロンプトから以下のコマンドを実行します。<

`conda upgrade -c esri --no-pin arcgis`

<div align="left">
<img src="https://community.esri.com/servlet/JiveServlet/downloadImage/102-11966-7-412235/pastedImage_16.png" width="700px">
</div>

アップデートが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。

### ArcGIS Pro 1.4 以上と2.0.x と Anaconda の環境でアップグレードする

コマンドプロンプトなどのターミナルまたは Python コマンド プロンプト、Python パッケージ マネージャーを使用してアップデートします。
Python パッケージ マネージャー 以外のコマンドで行う場合は、`arcgis` パッケージを含む環境を有効にして、次のように入力します。
Anaconda で作成した環境でも同様に、更新対象の Python API が存在する環境を有効にして同じコマンドを使用します。

`conda upgrade -c esri arcgis`

Python パッケージ マネージャーを使用してアップデートする場合は、次の手順を実行します。

* 新しい空のプロジェクトで ArcGIS Pro を開く
* [プロジェクト]タブを選択して、ArcGIS Pro の詳細オプションにアクセスします（下記のスクリーンショットを参照）
* 'Python'メニューオプションを選択してください
* 適切な環境を選択するには、「プロジェクト環境」ドロップダウンを使用します。
* [パッケージの更新]オプションを選択します。
* 最近更新されたパッケージのリストから適切なバージョンのリリースを選択してください
* [update(更新)]ボタンをクリックして、アップデートしたバージョンを確認します。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/python_package_manager_update_pkg.png" width="800px">
</div>

アップデートが完了したら、[ArcGIS API for Python を実行する](#arcgis-api-for-python-を実行する)を試してみましょう。


***

## ArcGIS API for Python を実行する

### Jupyter Notebook を起動する

Windowsの場合

* スタートメニュー>すべてのプログラム> ArcGIS> Pythonコマンドプロンプトを起動します。
* `cd` コマンドを使用して、ノートブックがあるディレクトリ、またはノートブックを作成したいディレクトリに移動します。
* 次のように入力して jupyter を起動します。

`jupyter notebook`

または、スタートメニュー>すべてのプログラム> ArcGIS>Jupyter Notebook を選択しても起動することができます。

macOS and Linux の場合

* 端末のターミナルを開きます
* ノートブックがあるディレクトリ、またはノートブックを作成したいディレクトリに変更します
* 以下を入力してjupyterを起動します

`jupyter notebook`


Jupyter Notebook の詳しい操作は [Jupyter Notebook を使ってみよう](../python-api-jnsetup)もご覧ください。</br>
Python API バージョン 1.5.0 以降からは、Jupyter Lab からも操作が可能です。[Jupyter Lab を使ってみよう](../python-api-jnlabsetup)も是非ご覧ください。


### Jupyter Notebook で地図を表示してみる

次の手順で、地図を表示するための新しいノートブックを作成します。

* Windows:  Click New > Python 3
* macOS and Linux:  Click New > Python[default]

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/newNoteboook.jpg" width="800px">
</div>

次のコードを入力します。

```
from arcgis.gis import GIS
my_gis = GIS()
my_gis.map()
```

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_installandsetup_02.png" width="800px">
</div>

<font color="Blue" size="+2" >★Tips★</font></br>
**Jupyter Notebook から使用している Python API のバージョンを確認する**

次のコードを実行することで、現在お使いのバージョンを確認することができます。

```text
from arcgis.gis import arcgis
arcgis.__version__
```

### オフライン時のインストール方法

インターネットに接続していない環境でも、次の手順で Python API をインストールすることが可能です。
ただし、事前に [Anaconda クラウドの ESRI チャネル](https://anaconda.org/Esri/arcgis/files)から、対象の OS と使用している Python のバージョンに適した Python API の最新バージョンのファイルをダウンロードしておきます。

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-install/anacondacloudesric.png" width="800px">
</div>

例えば、<font color="Crimson">Windows 64 bit</font> のマシンで、<font color="LimeGreen">Python 3.7</font> をお使いの場合は、<font color="Crimson">win-64</font>/arcgis-1.6.0-<font color="LimeGreen">py37</font>h62639d4_1.tar.bz2 のファイルをクリックし任意の格納先にダウンロードします。

ファイルダウンロード後は、ターミナルアプリケーションを起動して次のコマンドでインストールします。(ファイル格納場所まで移動します)

```text
conda install arcgis-1.6.0-py37h62639d4_1.tar.bz2
```

"done"が表示されればインストール完了です。


より詳しい情報は 米国Esri ガイドページ：[Install and set up](https://developers.arcgis.com/python/guide/install-and-set-up/) をご覧ください


ESRIジャパンが運営する [GIS アプリ開発者のためのコミュニティ グループ](https://community.esri.com/groups/devcom-jp) では、Python API の機能や実際のコードを[ArcGIS API for Python を使ってみよう](https://community.esri.com/docs/DOC-11401)シリーズブログにてご紹介しています。</br>
[GitHub](https://github.com/EsriJapan/arcgis-samples-python-api) にも日本語による解説付きのコードを公開していますので、是非ご参照ください。

