
ここでは、インタラクティブな方法で Python コードを実行し、出力を地図やグラフとして視覚化することができる Jupyter Notebook をご紹介します。Jupyter Notebook はオープンソ－スとして公開されている開発ツールのひとつで、ArcGIS API for Python (以下、Python API)はこのツール上でマップ等を表示することができます。<br/>
Jupyter Notebook の詳細については、[Jupyter の公式マニュアル](https://jupyter.readthedocs.io/en/latest/)および[クイックスタートガイド](https://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/index.html)を参照してください。</br>
**また、[サポートされているブラウザ](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#browser-compatibility)についてもご確認ください。Jupyter Notebook がサポートしていないブラウザ（Internet Explorer 等）ではマップ等が表示されないことがあります。**

## Jupyter Notebook の起動

conda と Python API がインストールされたら、ターミナル(Python コマンドプロンプト（ArcGIS Pro の場合）または、Anaconda Prompt (Anaconda の場合))に次のコマンドを入力して Jupyter Notebook を起動します。

`jupyter notebook`

他、Windows OS を実行している場合はコマンドプロンプトまたは PowerShell ウィンドウでも代用できます。同様に、Mac または Linux OS を実行している場合は、これがターミナルでも代用できます。以下は、Windows のコマンドプロンプトからコマンドを実行した場合の画面のスクリーンショットです。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_usingjupyternotebooks_01.png" width="600px">
<p>Windows のコマンドプロンプトからコマンドを実行した場合</p>
</div>
Python API を root 以外の仮想環境を作成しインストールした場合、Jupyter Notebook を起動する前にその仮想環境をアクティベート(`activate`)する必要があります。root 以外の仮想環境を使用するメリットと仮想環境の作成および管理する方法の詳細については、[公式のマニュアルページ](https://conda.io/docs/user-guide/tasks/manage-environments.html)を参照してください。

[GitHub](https://github.com/Esri/arcgis-python-api) 等からダウンロードした任意のディレクトリにあるノートブック（*.ipynb）を実行したい場合は、Jupyter Notebook を起動する前に、ノートブックを格納したディレクトリーに移動(`cd`)する必要があります。上の例では、ノートブックが c：\ codeディレクトリに配置されています。

Jupyter Notebook 起動のコマンドを実行すると Jupyter Notebook は以下のように端末のデフォルトに設定されている Web ブラウザで開きます。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_usingjupyternotebooks_02.png" width="600px">
<p>Jupyert Notebook 起動画面（Google Chrome）</p>
</div>

このページは、ノートブックダッシュボードと呼ばれています。

## ノートブックを実行する

Jupyter Notebookでは、windows のエクスプローラーのようにフォルダ構造やアクセスをナビゲートし、サンプルのノートブックをクリックして開くことができます。Jupyter Notebook で扱えるように記述した Python のコードはノートブック(*.ipynb)に保存されます。</br>
※Jupyter Notebook の機能で通常の Python ファイル（*.py）として出力することも可能です。 

ノートブックをクリックすると、新しいブラウザのタブまたはウィンドウで開きます。 各セルを選択し、[セルを実行]ボタン(または ctrl + Enter)をクリックすることで、各セルを実行できます。以下の画面のスクリーンショットでは、実行までの一通りの手順を示しています。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_usingjupyternotebooks_03.gif" width="600px">
<p>ノートブックを開いて実行するまで</p>
</div>

セルが実行されると、アスタリスク（*）はセル実行番号に変わります。この番号は、ノートブック自体を終了させると 1 からの項番に戻ります。

## 新しいノートブックの作成

Esri が提供するサンプルのノートブックを実行するだけでなく、プロジェクト用の新しいノートブックを作成することもできます。 これを行うには、ノートブックダッシュボードから、「New」ボタンをクリックし、次のように Python カーネルを選択します。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_usingjupyternotebooks_04.png" width="600px">
<p>新しいノートブックを作成する</p>
</div>

実行中のノートブックの「ファイル」メニューから新しいノートブックを作成することもできます。 上のスクリーンショットでは、現在実行中のノートブックのアイコンが緑色で表示されています。

## Jupyter Notebook ヘルプとキーボードショートカット

その他、Jupyter Notebook の各機能や使い方は、任意のノートブックを開いて、[Help > User Interface Tour] から体験することができます。 また、実行に便利な機能はキーボードショートカットが設定されていますので、コーディングスピードなどの側面でより便利に実行することができます。機能のショートカットキー一覧は、[Help > Keyboard Shortcuts]で、以下のようなダイアログを表示できます。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/guide_getstarted_usingjupyternotebooks_05.png" width="600px">
<p>ショートカットキー一覧</p>
</div>

ショートカットの中で、[Ctrl + Shift + P] Mac では[cmd + Shift + P]は、コマンド・パレットを表示するので、特に便利です。コマンド・パレットには、実行したいものを入力して実行することができます。 Jupyterノートブックを使うときには、ぜひ Esri ArcGIS Blog の [Five Tips To Get You Started With Jupyter Notebook（英語）](https://www.esri.com/arcgis-blog/products/api-python/analytics/five-tips-to-get-you-started-with-jupyter-notebook/?rmedium=redirect&rsource=/esri/arcgis/2017/06/30/82220) の記事も参考に、Jupyter Notebook をより便利に使用しましょう。
