+++
title = "Jupyter Notebook を使ってみよう"
description = "ArcGIS API for Python の実行に便利な JupyterLab の初期設定方法と使用方法を簡単に紹介します。"
weight = 4
aliases = ["/python/python-api-jnsetup/"]
+++

出典：ArcGIS API for Python - [Using the Jupyter Notebook environment](https://developers.arcgis.com/python/latest/guide/using-the-jupyter-notebook-environment/)

ここでは、Python コードを対話形式で実行し、その出力を地図やグラフとして可視化できる Jupyter Notebook 環境について、ご紹介します。　　
Jupyter Notebook の詳細については、[Jupyter の公式ドキュメント](https://docs.jupyter.org/en/latest/)および[クイック スタート ガイド](https://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/index.html)をご参照ください。

## Jupyter Notebook 環境の起動

conda と ArcGIS API for Python がインストールされたら、ターミナルで次のコマンドを入力して Jupyter Notebook 環境を起動できます。

```
jupyter notebook
```

Windows OS をお使いの場合は、コマンド プロンプトまたは PowerShell ウィンドウになります。同様に、Mac や Linux OS をお使いの場合は、ターミナルになります。以下は、Windows のコマンドプロンプトからコマンドを実行した場合の画面のスクリーンショットです。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_01.png" width="600px">
</div>



ArcGIS API for Python を デフォルトである root 以外の conda 環境にインストールした場合、Jupyter Notebook を起動する前にその環境をアクティベートする必要があります。root 以外の環境を使用するメリットと環境の作成および管理方法の詳細については、[公式ドキュメント ページ](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/environments.html)を参照してください。

API の[サンプル ノートブック](https://github.com/Esri/arcgis-python-api/releases)を実行する場合は、サンプルをダウンロードしたディレクトリに 'cd' コマンドで移動する必要があります。上記の例では、サンプルは C:\code ディレクトリーにダウンロードされ、解凍されています。
このコマンドを実行すると、Jupyter Notebook が起動し、以下に示すようにデフォルトのウェブ ブラウザーで開きます。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_02.png" width="600px">
</div>

このページは、ノートブック ダッシュボードと呼ばれています。

## ノートブックの実行

Jupyter Notebook では、フォルダー構造を移動してノートブックをクリックすることができます。これにより、新しいタブまたはウィンドウでノートブックが開きます。各セルを選択し、[セルを実行] ボタンをクリックすることで、そのセルを実行できます。また、キーボード ショートカット `shift + Enter` を使用してセルを実行することができます。以下の画像では、これらの手順を実際に実行している様子を示しています。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_03.gif" width="600px">
</div>

セルを実行すると、セル番号がアスタリスク (*) に変わり、カーネル名 (上記画像では 「Python3」) の横にある ○ が塗りつぶされます。

## 新しいノートブックの作成

サンプル ノートブックを実行するだけでなく、プロジェクト用に新しいノートブックを作成することもできます。作成するには、ノートブック ダッシュボード ページで [New] ボタンをクリックし、以下の画像のように任意のPython カーネルを選択します。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_04.png" width="600px">
</div>

実行中のノートブックの [File] メニューから新しいノートブックを作成することもできます。上記の画像では、現在実行中のノートブックのアイコンが緑色で表示されています。

## ヘルプとキーボード ショートカット

ノートブックのインターフェースの概要は、[Help] ＞ [User Interface Tour] メニューから確認できます。この新しいインターフェースに慣れてきたら、いくつかのキーボード ショートカットを覚えて生産性を高めることができます。実行中のノートブックから [Help] ＞ [Keyboard shortcuts] を選択すると、下図のようなヘルプダイアログが表示されます。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/guide_getstarted_usingjupyternotebooks_05.png" width="600px">
</div>

ショートカットの中でも、[Ctrl + Shift + P] (Mac の場合は [cmd + shift + P]) はコマンド パレットを表示できるため、特に便利です。コマンド パレットでは、実行したい内容を入力して実行することができます。Jupyter Notebook の使い方については [Five Tips To Get You Started With Jupyter Notebook](https://www.esri.com/arcgis-blog/products/api-python/analytics/five-tips-to-get-you-started-with-jupyter-notebook/?rmedium=redirect&rsource=/esri/arcgis/2017/06/30/82220) のブログ記事も参考にしてください。