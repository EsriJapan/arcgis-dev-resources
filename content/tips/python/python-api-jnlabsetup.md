+++
title = "Jupyter Lab を使ってみよう"
description = "ArcGIS API for Python の実行に便利な Jupyter Notebook の基本的な起動と使用方法を簡単に紹介します。"
weight = 5
aliases = ["/python/python-api-jnlabsetup/"]
+++

JupyterLab は、コード、データ、そして Jupyter Notebook のファイル形式（*.ipynb）を扱う最新の対話型開発環境（IDE）です。Jupyter Notebook 同様、オープンソースとして公開されています。</br> ArcGIS API for Python（以下、Python API ）のバージョン 1.5.0 以降で対応しています。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/jlab_workflow.gif" width="600px">
<p>JupyterLab で GIS データとグラフの操作</p>
</div>

JupyterLab は、より柔軟で強力なユーザー体験を実現するために Jupyter Notebook の主要コンポーネント (ノートブック、ターミナル、テキスト エディター、ファイル ブラウザー、ipywidgets など) をベースに構築されています。JupyterLab の詳細は [JupyterLab のブログ](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906)や [GitHub](https://github.com/jupyterlab/jupyterlab) をご参照ください。

## JupyterLab をはじめる

Python API を JupyterLab で使用するためには、いくつかインストールなどの設定が必要です。

### インストール

* バージョン 1.5.0 以上の Python API をインストールするか、既存の環境を 1.5.0 以上にアップデートする
ターゲットの仮想環境がある場合は、アクティベート（`activate`）してから行います。Python API のインストールまたはアップデートの方法は[インストールガイド](http://esrijapan.github.io/arcgis-dev-resources/python/python-api-install/)をご覧ください。

* 次の 2 つのコマンドを実行します</br>
    * `jupyter labextension install @jupyter-widgets/jupyterlab-manager`
    * `jupyter labextension install arcgis-map-ipywidget@バージョン番号`

{{% notice info %}}

2 つ目のコマンドの最後にある「バージョン番号」部分は、使用する Python API のバージョンに合わせて変更してください (例：1.6.1)。<br>
エラー等で正常に完了できない場合は、お使いの端末または現在の環境に `npm` および `nodejs` をインストールする必要があります。インストールの詳細は [npm のウェブサイト](https://www.npmjs.com/get-npm)、または [node.js のウェブサイト](https://nodejs.org/en/)を参照してください。

{{% /notice %}}

<!-- 1. 以上の設定が完了したら、コマンドを実行したままの Python コマンドプロンプトや Anaconda プロンプトから、次のコマンドで JupyterLab をビルドします。

`jupyter lab build`

ArcGIS Online の背景地図を表示するなどの部分は、JupyterLab のエクステンション機能として動作しています。正常にエクステンションのインストールが完了すると、次のコマンドでその内容を確認できます。

`jupyter labextension list`

```text
Known labextensions:
app dir: D:\<your own path>\anaconda3\share\jupyter\lab
@jupyter-widgets/jupyterlab-manager v0.38.1 enabled  ok
arcgis-map-ipywidget v1.5.1 enabled  ok
``` -->

* 以上の設定が完了したら、次のコマンドで JupyterLab を起動します。
    * `jupyter lab`

任意のディレクトリをルート ディレクトリとして起動したい場合は、`cd` コマンドでディレクトリを移動してから起動コマンドを実行します。

### ファイルエクスプローラー

JupyterLab は、従来の Jupyter Notebook のように、既存のノートブックを開いたり、新しいノートブックを作成したり、コンテンツを整理するためのファイルエクスプローラを備えています。 JupyterLab のファイルエクスプローラは、メインビューの左側のウィンドウです。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/jlab_file_explorer.gif" width="600px">
</div>

JupyterLab も Jupyter Notebook と同様に、ノートブック形式（*.ipynb）で動作しコードや結果を保存できます。この 2 つのツールの違いは、主にユーザーインターフェースといくつかの外部エクステンションが追加された点です。

### ウィンドウとタブを使用する

JupyterLab には、Jupyter Notebook とは違って、「ウィンドウ」と「タブ」という概念があります。 これにより、ノートブックを重ねたり、横に並べたり、タブで整理したりすることができます。これらの操作は、以下のように「タブ」をクリックしてドラッグするだけで可能です。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/jlab_navigate_windows.gif" width="600px">
</div>
どのようなウィンドウでもこのようにドラッグすることが可能です。*.csv、*.json などのファイルも表示や編集することができます。

### セルの使用

上記のウィンドウとタブと同様に、JupyterLab ではノートブックのセルをドラッグアンドドロップして移動することができます。 JupyterLab は、1 つのノートブックから別のノートブックにセルをドラッグする機能もサポートしています。 移動したいセルの左側の領域をクリックして、それをドラッグします。

<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/jlab_cell_utilities_1.gif" width="600px">
</div>

JupyterLab では、Shift キーを押しながら複数のセルを選択することもできます。前述のようにこれらのセルを移動するか、右クリックして [Copy Cells] を選択してコピーします。また、右クリックのメニューには、[Create New View For Output] を含む多くのオプションがあります。[Create New View For Output] を使用すると、任意のセルの実行結果を別のタブで表示することができ、重ねたり、並べて表示したりすることができます。
<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/jlab_cell_utilities_2.gif" width="600px">
</div>
JupyterLab には他にも様々なセルの操作ができるので、いろいろと探してみてください！

## マップ ウィジェットとの連携

バージョン 1.5.0 以上の Python API では、2D 回転、3D モード、3D レンダラーのサポートなどマップ ウィジェットの機能が多数追加されています。これらの機能の詳細については、[ガイドページ（米国ESRI ページ）](https://developers.arcgis.com/python/guide/advanced-map-widget-useage/)でご紹介しています。このガイドでは、マップ ウィジェットと JupyterLab のシームレスな連携を紹介します。
<div align="center">
<img src="https://developers.arcgis.com/python/guide/images/jlab_widget_1.gif" width="600px">
</div>

Python API の `MapView` クラスのデフォルトの表示動作は、Jupyter Notebook と同じで、ウィジェットはセルの出力にマップが表示されます。JupyterLab では、これに加えて以下のようなボタンが表示されます。
<div align="left">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcUAAIIxu7mQQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABI0lEQVRYw+1Wy3GDMBTch3JLBanA+TQR0gDz4JB0Y1xISkBAA4EqHOeYU6qAzYVkPAyWYSLii/Ymzb63q89qBAQEXBgyNamquYhs5zSw1v72SNOUp3gkd2VZ5uP5K1dzkrslqxnzRWQD4MVV4zQw5XguP8uyDckGwBeAm1M10Rrnqqq3fd+3JEVEYhc3WkMcQDMM46IoPv7NQJIkdyLS/oiXZXk4VxP5FDfGNEvEz17Cuciy7J7kGwB0XRfXdX0Yp+NoZ/waGMQbABzE35ekKfIkDhF5mhJf7Q6o6sOReFwUxd7BzdM0ffR5BALglaQAiK21eydZZEsSAFpfBkjy2Rhz7Vr5qimoqurTR4JWeYqDgWDAWwpUNb+ogbn/woCAgL/gG9knfWwKBGcvAAAAAElFTkSuQmC" >
</div>

このボタンを押すと、ウィジェットが新しいウィンドウで表示されます。 このウィンドウは、他のすべてのウィンドウと同様に、タブでの表示、分割などが可能です。 ウィジェットを元に戻すには、以下のボタンを押します。
<div align="left">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcUAAYsnoHHlAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+2WMVLDMBBF/9q+BBUlAS5hn8BeqQk1B8HcBgpLowtgnyJwGWtTkFAEOzIgkmHQLzXjeW9nV2sBKSn/PTR1yMwtET3EBInIo7W2PTwvQh9FqfJIMUcFpoy/E6XUrEB27hlIAkngxwJa65umaS7PIsDMt977gYie55ZaKMXM4hhEJFi5iLy87yu5ByDRBIwxA4AhAO93spUxZnOyFtR1fb2rHERUdV23iT6ESqmSmdspeJ7nfSz4rICIlIc/EGZe7eHjOEaBL24BM68AfMCdc6+x9kDxFbiIlM65t5MtIq311R4OoLLWRoUHBUSkJyLJsqz8DfiSFlwAePLe3zHz5ENl6rZEnQEAa6JPW7Zd8txKSfkT2QKASXQbvOVu9AAAAABJRU5ErkJggg==" >
</div>

ここからは、実際にコードを試してみましょう。</br>
以下のセルを実行します。

```python
from arcgis.gis import GIS

# JupyterLab へ地図を表示する
gis = GIS()
map = gis.map()
map
```
<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/jupyter-lab/map_labdisplay.png" width="600px">
</div>

### Web マップ と Web シーン

Web マップ、Web シーン の両方とも、このボタンを使用することができます。

```python
from arcgis.mapping import WebMap
webmap_item = gis.content.get("ab42b088573d4253a22a8b38ee698ccd")
webmap = WebMap(webmap_item)
webmap
```

```python
from arcgis.mapping import WebScene
webscene_item = gis.content.get("421433baeb8d487b903d4a89df79149b")
webscene = WebScene(webscene_item)
webscene
```

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/jupyter-lab/map_labdisplay2d3d.png" width="600px">
</div>

#### プログラムによるウィンドウの制御

ここまではこの機能をマウスで実行しましたが、Pythonを使用して制御することもできます。
`MapView` ウィジェットの各インスタンスには、`tab_mode` プロパティと `toggle_window_view（）` メソッドがあります。`tab_mode` を設定すると、地図ウィジェットの新しいウィンドウへの移動方法が変更されます。 この動作を試すには、以下のコードを実行してみてください。

```python
# 対象の地図を表示する
map = gis.map()
map
```
```python
# コメントをひとつずつオフにして実行し、map で表示している地図の UI ボタンを都度押してみてください。
# map.tab_mode = "split-bottom"
# map.tab_mode = "split-right"
# map.tab_mode = "auto"
# map.tab_mode = "tab-after"
```

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/jupyter-lab/tab_layout.gif" width="600px">
</div>

UI ボタンによる新しいウィンドウでの地図表示は、`toggle_window_view（）` メソッドを使用することでも制御できます。次のコードでは、マップが表示されたらメソッドを使用して新しいウィンドウで表示させます。新しいウィンドウに戻すときも、このメソッドを使用可能です。</br>
以下のコードを実行してみてください。

```python
from arcgis.widgets import MapView
# 対象の地図を表示する
map = MapView(gis=gis)
map
```
```python
map.toggle_window_view()
```

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/jupyter-lab/tab_layout_toggle.gif" width="600px">
</div>


タイトル（タブに表示されるテキスト）と `tab_mode` をメソッドを呼び出すたびに指定することも可能です。

```python
# 対象の地図を表示する
map = gis.map(mode="3D")
map
```
```python
# このセルを実行して、新しいウィンドウに地図を表示します
map.toggle_window_view(title="My 3D Map", tab_mode="split-top")
# ウィンドウを元に戻す
map.toggle_window_view()
```
```python
import time

# このセルを実行して全てのタブモードの挙動を確認してみてください
tab_modes = ['auto', 'split-top' 'split-bottom', 'split-left',
'split-right', 'tab-before', 'tab-after']
for tab_mode in tab_modes:
    # 新しいウィンドウで開く
    map.toggle_window_view(title=tab_mode, tab_mode=tab_mode)
    time.sleep(4)
    # ウィンドウを元に戻す
    map.toggle_window_view()
    time.sleep(4)
```

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/jupyter-lab/tab_layout_interval.gif" width="600px">
</div>


最後に、3 つ以上の Web シーンを表示すると仮定した表示方法をご紹介します。各マップ ID で構成したリストから、1 度だけ処理を実行し、3 つの　Web シーンを一度にすべて新しいタブに表示します。

```python
#このセルの内容を1度で実行する
from arcgis.gis import GIS
from arcgis.widgets import MapView
gis = GIS()
for webscene_id in ['31874da8a16d45bfbc1273422f772270', '91b46c2b162c48dba264b2190e1dbcff', '46c47340708f446ba7f112f139e8ae5e']:
    webscene_item = gis.content.get(webscene_id)
    map = MapView(gis=gis, item=webscene_item, mode="3D")
    map.toggle_window_view(title=webscene_item.title, tab_mode='tab-after')
```

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/jupyter-lab/tab_layout_3scenes.gif" width="600px">
</div>

より詳細な情報は、マップ ウィジェットの [API リファレンス](https://developers.arcgis.com/python/api-reference/arcgis.widgets.html#arcgis.widgets.MapView.toggle_window_view)を参照してください。