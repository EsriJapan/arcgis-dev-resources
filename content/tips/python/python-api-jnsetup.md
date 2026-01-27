+++
title = "Jupyter Notebook を使ってみよう"
description = "ArcGIS API for Python の実行に便利な JupyterLab の初期設定方法と使用方法を簡単に紹介します。"
weight = 4
aliases = ["/python/python-api-jnsetup/"]
+++

ここでは、対話的に Python コードを実行し、出力を地図やグラフとして視覚化することができる Jupyter Notebook をご紹介します。Jupyter Notebook はオープンソ－スとして公開されている開発ツールのひとつで、ArcGIS API for Python (以下、Python API)はこのツール上でマップ等を表示することができます。<br/>
Jupyter Notebook の詳細については、[Jupyter の公式マニュアル](https://jupyter.readthedocs.io/en/latest/)および[クイックスタートガイド](https://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/index.html)を参照してください。</br>
**また、[サポートされているブラウザ](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#browser-compatibility)についてもご確認ください。Jupyter Notebook がサポートしていないブラウザ（Internet Explorer 等）ではマップ等が表示されないことがあります。**

## Jupyter Notebook の起動

conda と Python API がインストールされたら、Python コマンドプロンプト (ArcGIS Pro 経由でインストールした場合) または、Anaconda Prompt (Anaconda でインストールした場合) 等のターミナル アプリケーションに次のコマンドを入力して Jupyter Notebook を起動します。

```
jupyter notebook
```

もし起動できなかった場合は次のコマンドをお試しください (参考: [Jupyter fails to start](https://jupyter-notebook.readthedocs.io/en/stable/troubleshooting.html#jupyter-fails-to-start))。

```
jupyter-notebook
```

他、Windows OS を実行している場合はコマンド プロンプトまたは PowerShell ウィンドウでも代用できます。以下は、Windows のコマンドプロンプトからコマンドを実行した場合の画面のスクリーンショットです。
<!-- 同様に、Mac または Linux OS を実行している場合は、ターミナルで実行できます。 -->


<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_01.png" width="600px">
<p>Windows のコマンドプロンプトからコマンドを実行した場合</p>
</div>

Python API を root 以外の仮想環境を作成しインストールした場合、Jupyter Notebook を起動する前にその仮想環境をアクティベートする必要があります。root 以外の仮想環境を使用するメリットと仮想環境の作成および管理する方法の詳細については、[公式のマニュアルページ](https://conda.io/docs/user-guide/tasks/manage-environments.html)を参照してください。

Esri では GitHub 上で[サンプルのノートブック](https://github.com/Esri/arcgis-python-api/tree/master/samples) (\*.ipynb) を公開していますが、こうしたノートブックをダウンロードしてを実行したい場合は、Jupyter Notebook を起動する前に、ノートブックを格納したディレクトリに移動 (`cd`) する必要があります。
上の例では、ノートブックが C:\code ディレクトリに配置されています。

Jupyter Notebook 起動のコマンドを実行すると Jupyter Notebook は以下のように端末のデフォルトに設定されている Web ブラウザで開きます。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_02.png" width="600px">
<p>Jupyert Notebook 起動画面 (Google Chrome)</p>
</div>

このページは、ノートブック ダッシュボードと呼ばれています。

## ノートブックを実行する

Jupyter Notebookでは、ディレクトリを移動してノートブックをクリックすることでそのノートブックを新しいブラウザのタブまたはウィンドウで開くことができます。各セルを選択し、[セルを実行]ボタン(または shift + Enter)をクリックすることで、各セルを実行できます。以下の画像では、実行までの一通りの手順を示しています。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_03.gif" width="600px">
<p>ノートブックを開いて実行するまで</p>
</div>

セルを実行すると、そのセルのコードを実行している間、左わきにアスタリスク (*) が表示されます。実行が完了するとセル実行番号に変わります。

## 新しいノートブックの作成

Esri が提供するサンプルのノートブックを実行するだけでなく、プロジェクト用の新しいノートブックを作成することもできます。 これを行うには、ノートブックダッシュボードから、「New」ボタンをクリックし、以下の画像のように Python のカーネルを選択します。
<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_04.png" width="600px">
<p>新しいノートブックを作成する</p>
</div>
実行中のノートブックの「ファイル」メニューから新しいノートブックを作成することもできます。 上の画像では、現在実行中のノートブックのアイコンが緑色で表示されています。

## Jupyter Notebook ヘルプとキーボードショートカット

その他、Jupyter Notebook の各機能や使い方は、任意のノートブックを開いて、[Help > User Interface Tour] から体験することができます。 また、便利なキーボード ショートカットも設定されています。ショートカット キーの一覧は、[Help > Keyboard Shortcuts] で表示できます。
<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_05.png" width="600px">
<p>ショートカットキー一覧</p>
</div>

<!-- Mac では[cmd + Shift + P] -->
ショートカットの中でも、[Ctrl + Shift + P] はコマンド パレットを表示できるため、特に便利です。コマンド パレットでは、実行したい機能を入力して実行することができます。Jupyter Notebook の使い方については [Five Tips To Get You Started With Jupyter Notebook（英語）](https://www.esri.com/arcgis-blog/products/api-python/analytics/five-tips-to-get-you-started-with-jupyter-notebook/?rmedium=redirect&rsource=/esri/arcgis/2017/06/30/82220) のブログ記事も参考にしてください。