+++
title = "インストール ガイド"
description = "ArcGIS API for Python の環境構築方法を紹介します。"
weight = 3
aliases = ["/python/python-api-install/"]
+++

出典：ArcGIS API for Python - [Install and set up - ArcGIS Pro](https://developers.arcgis.com/python/latest/guide/install-and-set-up/arcgis-pro/)

Python には、[ArcGIS Pro](https://doc.esri.com/ja/arcgis-pro/latest/get-started/download-arcgis-pro.html) で使用できる豊富なパッケージが用意されています。Python パッケージの使用を簡素化するため、ArcGIS Pro には [conda](https://docs.conda.io/en/latest/) と呼ばれるパッケージ管理システムが組み込まれています。conda を使用することで、パッケージやその依存関係のインストールや更新に伴う手間を省くことができます。
Python パッケージの汎用性と実用性をさらに高めるため、1 台のワークステーション上で複数の Python 環境を互いに独立して共存させることができます。これらの各インストール環境は、Python 環境と呼ばれます。各 Python 環境には独自のパッケージセットを保持できるため、毎回パッケージをアンインストールしたり再インストールしたりすることなく、Python の機能セットを切り替えることができます。
デフォルトでは、ArcGIS Pro には arcgispro-py3 という単一の conda 環境が用意されており、これには ArcGIS Pro で使用されるすべての Python ライブラリーに加え、[scipy](https://scipy.org/) や [pandas](https://pandas.pydata.org/) などのいくつかのライブラリーも含まれています。

{{< callout type="info">}}

クローンされた ArcGIS Pro 環境において、ArcGIS API for Python 2.4.x のリリースは、ArcGIS Pro 3.4 以降でのみサポートされます。2.4.2 の arcgis および arcgis-mapping パッケージは、クローンされた ArcGIS Pro 3.3 およびそれ以前の環境ではサポートされていません。
ArcGIS Pro 3.3.x のクローン環境へのインストールにおいてサポートされる最新のバージョンは 2.3.x です。Pro 3.3.x へのインストールについては、[API 2.3.x の手順](https://developers.arcgis.com/python-2-3/guide/install-and-set-up/arcgis-pro/)を参照してください。

{{< /callout >}}

* [Python パッケージ マネージャーを使用したインストール](#python-パッケージ-マネージャーを使用したインストール)
* [Python コマンド プロンプトを使用したインストール](#python-コマンド-プロンプトを使用したインストール)
* [arcgis パッケージのアップグレード](#arcgis-パッケージのアップグレード)
* [インストールの確認](#インストールの確認)
* [参考](#参考)
  * [オフライン時のインストール方法](#オフライン時のインストール方法)
  * [特定の Python 環境のカーネルの追加](#特定の-python-環境のカーネルの追加)

## Python パッケージ マネージャーを使用したインストール
Python パッケージマネージャーにより、Python コードを記述する際に直面する多くの課題が解消されます。このマネージャーは、Python の基本インストール環境ではなく、個々のプロジェクトに関連付けられたオープンソースやサードパーティのライブラリのインストールをサポートしています。これにより、複雑な Python ツールを複数のコンピュータ間で円滑に共有するプロセスが簡素化されます。

ArcGIS Pro では、2.5 以降のリリースから conda と `arcgis` パッケージが最初からインストールされています。  conda の機能は、[パッケージ マネージャー](https://pro.arcgis.com/ja/pro-app/latest/arcpy/get-started/what-is-conda.htm) を通じて ArcGIS Pro に統合されています。Python パッケージ マネージャーにより、Python コードを記述する際に直面する多くの課題が解消されます。このマネージャーは、Python の基本インストール環境ではなく、個々のプロジェクトに関連付けられたオープンソースやサードパーティのライブラリのインストールをサポートしています。これにより、複雑な Python ツールを複数のコンピュータ間で円滑に共有するプロセスが簡素化されます。

ArcGIS Pro 2.5 以降では、任意の conda パッケージをダウンロードおよびインストールするための Python パッケージマネージャーの GUI が提供されています。ArcGIS Pro の設定画面からアクセスできます。

* ArcGIS Pro を開き [設定] ＞ [パッケージ マネージャー] を選択します。プロジェクトを開いている場合は、[プロジェクト] タブ ＞ [パッケージ マネージャー] を選択します。
* デフォルトの arcgispro-py3 環境にインストールされているパッケージのリストが表示されます。さらにパッケージの追加や更新を行うには、以下の操作を行います。
* パッケージ マネージャーで [環境マネージャー] ボタンをクリックし、[arcgispro-py3 のクローン作成] ボタンを選択します。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/Pro_30/arcgis_pro_clone.png" width="800px">
<p>(ArcGIS Pro 3.x) ① [環境マネージャー] ボタンと環境の ② [デフォルトのクローン] ボタン</p>
</div>

* 必要に応じてパスと名前を変更し、[OK] をクリックします。
* すべてのパッケージのインストールが完了すると、クローンされた環境が格納されているディレクトリ名が表示されます。  
  ※ 完了前に操作をすると、作成した環境が正常に動作しない可能性があります。
* 環境マネージャー ウィンドウで作成した環境の右側にある [・・・] から [アクティブ化] を選択し、完了したら [OK] をクリックします。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/install-guide/Pro_30/arcgis_pro_active.png" width="800px">
<p>(ArcGIS Pro 3.x) 環境をアクティブ化</p>
</div>

アクティブ化した環境でインストールされているパッケージを確認したり、更新やパッケージの追加オプションを使用して、クローン環境をニーズに合わせて変更することができます。

{{< callout type="info">}}

Python パッケージ マネージャー を使用して arcgis パッケージをアップグレードすることはできません。arcgis パッケージのアップグレード手順については、「パッケージのアップグレード」のセクションを参照してください。

{{< /callout >}}

## Python コマンド プロンプトを使用したインストール 
ArcGIS Pro には、任意の conda パッケージをダウンロードしてインストールするための Python コマンド プロンプトが提供されています。

* Windows のスタートメニュー ＞ すべてのプログラム ＞ ArcGIS ＞ Python コマンド プロンプトを選択します。 

{{< callout type="info">}}

デフォルトでは、Python コマンド プロンプトは ArcGIS Pro のデフォルトの arcgispro-py3 環境ディレクトリ(通常は C:\Program Files\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\ ) で開き、デフォルトの conda 環境がアクティブになっています。

{{< /callout >}}

さらにパッケージを追加するには、デフォルトの arcgispro-py3 環境のクローンを作成する必要があります。Python コマンド プロンプトでクローン環境を作成する手順についての詳細は、[Clone a Python environment with the Python Command Prompt](https://support.esri.com/en-us/knowledge-base/how-to-clone-a-python-environment-with-the-python-comma-000020560) を参照してください。クローン環境を既に作成している場合は、以下のコマンドを使用してクローン環境をデフォルトの環境に変更することができます。

```
proswap <環境名>
```
* Python コマンドプロンプトで以下のコマンドを使用してパッケージをインストールします。  

  ```
  conda install -c esri arcgis arcgis-mapping
  ```

{{< callout type="info">}}

arcgis 2.4.0 および arcgis-mapping パッケージは、ArcGIS Pro 3.4 以降の環境でサポートされています。ArcGIS Pro 3.3.x インストールのパッケージのアップグレードについては、[バージョン 2.3.x のドキュメント](https://developers.arcgis.com/python-2-3/guide/install-and-set-up/arcgis-pro/)を参照してください。

{{< /callout >}}

<div align="center">
<img src="https://developers.arcgis.com/python/latest/static/6c293c32dd7e66acda7fab3729601249/4cdf7/arcgis_24_upgrade_cmd.png" width="800px">
<p>Python コマンド プロンプト</p>
</div>

バージョンを指定しない場合、パッケージは ArcGIS API for Python の最新リリースにアップグレードされます。

## arcgis パッケージのアップグレード

{{< callout type="info">}}

デフォルトの arcgispro-py3 環境は変更できません。パッケージをアップデートする場合は、クローン環境を作成してください。また、Python パッケージ マネージャーでは arcgis パッケージを更新することはできません。以下のように Python コマンド プロンプトを使用します。

ArcGIS Pro 環境では、arcgis パッケージはパッチリリースへのみアップグレードできます。たとえば、ArcGIS Pro にインストールされている arcgis パッケージが 2.4.1 の場合、クローン環境では 2.4.1.x シリーズのリリースのみにアップグレードできます。

{{< /callout >}}

* Python コマンドプロンプトを開きます。  
  Windows のスタートメニュー ＞ すべてのプログラム ＞ ArcGIS ＞ Python コマンド プロンプトで開くことができます。
* 以下のコマンドでアップグレードする arcgis パッケージを含む環境をアクティブ化します。 

  ```
  activate <環境名>
  ```

* esri チャネルから、以下のコマンドでパッチ リリース番号を指定してインストールし、arcgis パッケージをパッチリリースにアップグレードします。

  ```
  conda install -c esri arcgis=<パッチ リリース番号> arcgis-mapping
  ```

<div align="center">
<img src="https://developers.arcgis.com/python/latest/static/6c293c32dd7e66acda7fab3729601249/4cdf7/arcgis_24_upgrade_cmd.png" width="800px">
<p>コマンドの入力</p>
</div>

* インストール、アップグレードするパッケージの名前とバージョン番号が表示されるので、問題がなければ `y` を入力し、実行します。


{{< callout type="info">}}

バージョン番号を指定して、互換性のある特定の arcgis リリースをインストールすることができます。
```
conda install -c esri arcgis=<バージョン番号> arcgis-mapping=<バージョン番号>
```
{{< /callout >}}


## インストールの確認

出典：ArcGIS API for Python - [Install and set up - Test your install](https://developers.arcgis.com/python/latest/guide/install-and-set-up/test-install/)

arcgis パッケージのインストール状況を確認するには、Juptyter Notebook や Jupyter Lab（Lab 4.x または Notebook 7.x）で以下のコマンドを実行してください。
Jupyter Notebook の操作については [Jupyter Notebook を使ってみよう](../python-api-jnsetup)をご参照ください。

```python
from arcgis.gis import GIS
my_gis = GIS()
my_gis.map()
```

ディープ ラーニング環境を確認するには、以下のコマンドを実行してください。

```python
import fastai
import torch
import arcgis
```

GPU 上でモデルを学習する際に、CUDA デバイスが認識されているかどうかを確認するには、このコマンドを実行してください。

```python
torch.cuda.is_available()
torch.zeros((3, 224, 224)).cuda()
```
{{< callout type="info">}}

ドライバーに関する問題を示すエラーが発生した場合は、ドライバーを更新する必要があります。

{{< /callout >}}

[ArcGIS API for Python のドキュメント](https://developers.arcgis.com/python/latest/guide/overview-of-the-arcgis-api-for-python/)では、ArcGIS API for Python を使用して、マッピング、クエリー、分析、ジオコーディング、ルート検索、ポータル管理などの機能を組み込んだ Python コードを作成する方法について説明しています。まずは[サンプル ノートブック](https://developers.arcgis.com/python/latest/samples/)をご覧ください。これらのサンプル ノートブックは ArcGIS Notebooks として利用可能なので、実際の環境で試してみることもできます。

{{< callout type="info">}}

これらは一時的な環境であり、ブラウザーのタブを閉じると消去されます。変更内容を保存したい場合は、Jupyter Notebook、Juptyter Lab の File メニューからノートブックをダウンロードしてください。

{{< /callout >}}


## 参考
### オフライン時のインストール方法

出典：ArcGIS API for Python - [Install and set up - Offline](https://developers.arcgis.com/python/latest/guide/install-and-set-up/offline/)

オフライン環境で ArcGIS API for Python をインストールする方法をご紹介します。
ここでは、conda を使用してオフライン環境で ArcGIS API for Python をインストールする手順です。

{{< callout type="info">}}
ArcGIS Pro や ArcGIS Enterprise などの Esri 製品で使用するために `-c esri` チャネルを使用してパッケージをインストールするユーザー、および Esri の環境で使用するためのアプリケーションをデプロイするユーザーは、現行のすべてのライセンスの対象となります。外部環境にアプリケーションをデプロイする場合、または Anaconda のリポジトリーやコンポーネントをミラーリングする場合は、Anaconda ベースパッケージの使用をカバーするために、追加の Anaconda ライセンスが必要となります。詳細については、[Esri と Anaconda のライセンス契約](https://support.esri.com/en-us/knowledge-base/faq-do-i-need-to-purchase-an-additional-license-from-an-000028175)を参照してください。
{{< /callout >}}

#### 1. ソフトウェアのダウンロード

インターネットに接続できる環境で以下の必要なソフトウェアをダウンロードします。
* お使いの OS に対応した、Python 3.x 用の Anaconda または Miniconda の最新バージョン
  * [Anaconda](https://www.anaconda.com/download)
  * [Miniconda](https://www.anaconda.com/docs/getting-started/concepts/anaconda-or-miniconda)
* ターゲット プラットフォームに対応した Python パッケージ用の API の適切なバージョンとその依存関係。現在サポートされているターゲットプラットフォームは以下の通りです
  * Windows 64-bit (win-64)
  * Linux 64-bit (linux-64)
  * macOS Intel (osx-64)
* ソース (接続先) 環境がターゲット プラットフォームとは異なるプラットフォームである場合
  * `CONDA_SUBDIR` 環境変数を、ターゲットとなる (接続されていない) プラットフォーム (win-64、linux-64、または osx-64) に設定してください。例 :
    * Bash : `export CONDA_SUBDIR=win-64`
    * PowerShell : `$env:CONDA_SUBDIR="linux-64"`
    * cmd : `set CONDA_SUBDIR=linux-64`
* ダウンロード用の空のディレクトリを作成します。例 :
  * Windows : `mkdir C:\Users\me\Downloads\arcgis_offline`
  * macOS : `mkdir ~/Downloads/arcgis_offline`
* `CONDA_PKGS_DIRS` 環境変数を、前の手順で作成した空のダウンロード ディレクトリに設定します。例 :
  * Bash : `export CONDA_PKGS_DIRS=~/Downloads/arcgis_offline`
  * PowerShell : `$env:CONDA_PKGS_DIRS="C:\Users\me\Downloads\arcgis_offline"`
  * cmd : `set CONDA_PKGS_DIRS=C:\Users\me\Downloads\arcgis_offline`
* ArcGIS API for Python およびその依存関係をダウンロードするには、次のコマンドを実行してください。
  ```
  conda create --name arcgis_offline --override-channels --download-only -c esri -c defaults arcgis arcgis-mapping
  ```
  * arcgis および arcgis-mapping の特定のバージョンをダウンロードするには、次のコマンドを実行してください。
    ```
    conda create --name arcgis_offline --override-channels --download-only -c esri -c defaults arcgis=<release_number> arcgis-mapping=<release_number>
    ```

{{< callout type="info">}}

arcgis-mapping は、arcgis バージョン 2.4.0 以降でのみサポートされています。

{{< /callout >}}

次のようなメッセージが表示される場合があります。これは、ダウンロードが正常に完了したことを示しています。

```
CondaExitZero: Package caches prepared. UnlinkLinkTransaction canceled with --download-only option
```
ダウンロード ディレクトリ内のすべてのファイル (サブディレクトリはスキップしても構いません) を、オフライン環境にコピーしてください。詳細は以下をご覧ください。

{{< callout type="info">}}

すべての .conda ファイルや .tar.bz2 ファイルに加え、URL および urls.txt を必ず含めることが重要です。

{{< /callout >}}

#### 2. Anaconda の設定

オフライン環境内で、Anaconda をインストールしてください。インストールが完了したら、Anaconda Navigator GUI アプリケーションまたは Anaconda Prompt コマンド ライン コンソールを使用して、ソフトウェアを操作できます。以下の手順では、Windows での Anaconda Prompt および conda ユーティリティーの使用方法について説明します。

まず、Start > Anaconda3 (64-bit) > Anaconda Prompt で Anaconda Prompt を開きます。以降のコマンドはすべて、このプロンプト内で実行します。

1. Anaconda を[オフライン](https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/use-condarc.html#offline-mode-only)で使用できるように設定します。詳細については、[Conda Configuration](https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/index.html) を参照してください。

    ```
    conda config --set offline True
    ```

2. オフライン環境にあるパッケージ キャッシュ ディレクトリを取得します。

    ```
    conda config --show pkgs_dirs
    ```

3. 接続先の環境から、前の手順で指定したキャッシュ　ディレクトリのいずれかにファイルをコピーしてください。
4. 新しい空の環境を作成します。

    ```
    conda create -n <my_env_name>
    ```

5. 環境をアクティブ化します。

    ```
    conda activate <my_env_name>
    ```

6. Python をインストールします。

    ```
    conda install python --offline --use-local
    ```

7. ArcGIS API for Python をインストールします。

    ```
    conda install arcgis arcgis-mapping --offline --use-local
    ```

#### 3. インストールの確認

現時点では、[マップ ウィジェット](https://developers.arcgis.com/python/latest/api-reference/arcgis.map.toc.html#arcgis.map.Map)を除くすべてのモジュール、クラス、関数が API として利用可能であり、Python スクリプトや Jupyter Notebook で使用できます。GIS に接続してプロパティを出力することで、インストールが正常に行われたかを確認できます。

```Python
gis = GIS("url_to_your_gis", "username", "password")
print(f"Connected to {gis.properties.portalHostname} as {gis.users.me.username}")
```
マップ ウィジェットは、[Jupyter](https://jupyter.org/) アプリケーション内でのみサポートされています。オフライン環境でマップ ウィジェットを使用するには、以下の追加手順に従ってください。

1. ArcGIS Maps SDK for JavaScript をローカルにインストールします。
   * ArcGIS API for JavaScript SDK のダウンロードページは[こちら](https://developers.arcgis.com/javascript/latest/downloads-and-previous-versions/)。
   * ダウンロードが完了したら、ArcGIS Maps SDK for JavaScript をローカルでホストします。手順の詳細は[こちら](https://developers.arcgis.com/javascript/latest/downloads-and-previous-versions/#hosting-the-cdn-build-locally) を参照してください。

{{< callout type="info">}}

使用しているマップ ウィジェットの対応バージョンは、次のコードで確認できます。
```Python
from arcgis.map import Map

m = Map()
m.js_requirement()

'This version of arcgis-mapping requires the ArcGIS Maps SDK for JavaScript version 4.33. You can download it from https://developers.arcgis.com/javascript/latest/downloads/ .'
```
{{< /callout >}}

2. JavaScript のインストール手順に従って MIME 型を追加した後、JavaScript を完全に機能させるために、以下のヘッダーを追加する必要がある場合があります。
    * Access-Control-Allow-Credentials
    * Access-Control-Allow-Origin

{{< callout type="info">}}

手順はご利用の環境によって異なります。設定の詳細については、[CORS with the SDK](https://developers.arcgis.com/javascript/latest/cors/) もご参照ください。

{{< /callout >}}

3. `JS_API_CDN` 環境変数を、お使いのローカルの JavaScript インストール先に設定してください。

```Python
import os
CDN_Path = "http://<local_path>/arcgis_js_api/javascript/4.33/"
os.environ["JSAPI_CDN"] = CDN_Path
```

{{< callout type="info">}}

Web GIS では、位置情報が初期設定された地図を表示するために、ユーティリティー サービスとして [Geocoder](https://developers.arcgis.com/python/latest/api-reference/arcgis.geocoding.html#geocoder) が設定されている必要があります。詳細については、[住所をジオコーディングするための組織の構成](https://doc.esri.com/ja/arcgis-enterprise/latest/administer/configure-portal-to-geocode-addresses.html)および[ユーティリティー サービスの構成](https://doc.esri.com/ja/arcgis-enterprise/latest/administer/configure-services.html)を参照してください。

{{< /callout >}}

pixi を使用したオフライン環境でのインストールについては [Pixi steps](https://developers.arcgis.com/python/latest/guide/install-and-set-up/offline/#pixi-steps) をご参照ください。

### 特定の Python 環境のカーネルの追加

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