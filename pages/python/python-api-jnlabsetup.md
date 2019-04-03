
JupyterLab とは、コードやデータを Jupyter Notebook のノートブック形式（*.ipynb）で作業できる最新の対話型開発環境（IDE）です。Jupyter Notebook 同様、オープンソースとして公開されています。</br> ArcGIS API for Python（以下、Python API ）のバージョン 1.5.0 以降では、このツールでも ArcGIS Online が配信する地図を表示してよりダイナミックに見せることができます。JupyterLab で Python API を使用することで、より便利で印象的な開発経験となります。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/jlab_workflow.gif" width="600px">
<p>JupyterLab で GIS データとグラフの操作</p>
</div>

JupyterLab は、ノートブック、ターミナル、テキストエディタ、ファイルブラウザ、ipywidgets などの Jupyter Notebook の主要コンポーネントの機能の全てをベースに、より柔軟で強力な開発をサポートします。JupyterLab の詳細は [JupyterLab のブログ](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906)や [GitHub](https://github.com/jupyterlab/jupyterlab) をご参照ください。

## JupyterLab をはじめる

Python API を JupyterLab で使用するためには、いくつかインストールなどの設定が必要です。</br>
JupyterLab は Jupyter Notebook と同様に、Anaconda 等の Python パッケージにはデフォルトでインストールされています。（ArcGIS Pro も同様）しかし、次のコマンドで実行できない場合は、[conda コマンドからインストール](https://anaconda.org/conda-forge/jupyterlab)する必要があります。

`jupyter lab`

### インストール

1. バージョン 1.5.0 以上の Python API をインストールするか、既存の環境を 1.5.0 以上にアップデートする</br>
ターゲットの仮想環境がある場合は、アクティベート（`activate`）してから行います。Python API のインストールまたはアップデートの方法は[インストールガイド](http://esrijapan.github.io/arcgis-dev-resources/python/python-api-install/)をご覧ください。

1. 次の 2 つのコマンドを実行します</br>
`jupyter labextension install @jupyter-widgets/jupyterlab-manager`</br>
`jupyter labextension install arcgis-map-ipywidget@バージョン番号`</br></br>
<font color="Red">重要</font></br>・2 つ目のコマンドの最後にある「バージョン番号」部分は、使用する Python API のバージョンに合わせて変更してください (例：1.6.0)。</br>
・エラー等で正常に完了できない場合は、お使いの端末または現在の環境に `npm` および `nodejs` をインストールする必要があります。nodejs をインストールすると、npm もインストールすることができます。[Anaconda の nodejs インストールコマンド](https://anaconda.org/conda-forge/nodejs) をご参照ください。

1. 以上の設定が完了したら、コマンドを実行したままの Python コマンドプロンプトや Anaconda プロンプトから、次のコマンドで JupyterLab をビルドします。

`jupyter lab build`

ArcGIS Online の背景地図を表示するなどの部分は、JupyterLab のエクステンション機能として動作しています。正常にエクステンションのインストールが完了すると、次のコマンドでその内容を確認できます。

`jupyter labextension list`

```text
Known labextensions:
app dir: D:\<your own path>\anaconda3\share\jupyter\lab
@jupyter-widgets/jupyterlab-manager v0.38.1 enabled  ok
arcgis-map-ipywidget v1.5.1 enabled  ok
```

1. 以上の設定が完了したら、コマンドを実行したままの Python コマンドプロンプトや Anaconda プロンプトから、次のコマンドで JupyterLab を起動します。

`jupyter lab`

任意のフォルダ配下をホーム（ダッシュボード）として起動したい場合は、`cd` コマンドによりフォルダを移動してから起動コマンドを実行します。

### ファイルエクスプローラー

JupyterLab は、従来の Jupyter Notebook のように、既存のノートブックを開いたり、新しいノートブックを作成したり、コンテンツを整理するためのファイルエクスプローラを備えています。 JupyterLab のファイルエクスプローラは、メインビューの左側のウィンドウです。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/jlab_file_explorer.gif" width="600px">
<p>エクスプローラーでファイル/フォルダを操作する</p>
</div>

JupyterLab も Jupyter Notebook と同様に、ノートブック形式（*.ipynb）で動作しコードや結果を保存できます。この 2 つのツールの違いは、主にユーザーインターフェースです。

### ウィンドウとタブを使用する

JupyterLab には、Jupyter Notebookとは違って、"ウィンドウ"と"タブ"という概念があります。 これにより、ノートブックを積み重ねたり、ノートブックを横に並べたり、タブでノートブックを整理したりすることができます。以下のように「タブ」をクリックしてドラッグするだけです。
これは、JupyterLab　の強力な機能のひとつです。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/jlab_navigate_windows.gif" width="600px">
<p>エクスプローラーでファイル/フォルダを操作する</p>
</div>

どのようなウィンドウでもドラッグできます。 JupyterLab を使用すると、上記のように、新しいウィンドウで *.csv、*.json などのファイルタイプを表示および編集できます。

### セルの使用

上記のウィンドウとタブと同様に、JupyterLab ではノートブックのセルをドラッグアンドドロップして移動することができます。 JupyterLab は、1 つのノートブックから別のノートブックにセルをドラッグする機能もサポートしています。 移動したいセルの左側の領域をクリックして、それをドラッグします.

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/jlab_cell_utilities_1.gif" width="600px">
<p>セルをドラッグして移動する</p>
</div>

JupyterLab では、Shift キーを押しながら複数のセルを選択することもできます。前述のようにこれらのセルを移動するか、右クリックして[セルをコピー]を選択してコピーします。 JupyterLab には、'出力のための新しいビューを作成する'オプションを含む、右クリックのコンテキストメニューに多くのオプションがあります。 これにより、任意のセル出力を取得して新しいウィンドウで複製することができ、スタックしたり、並べて表示することができます。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/jlab_cell_utilities_2.gif" width="600px">
<p>セルをドラッグして移動する</p>
</div>

まだまだセルの操作はできることがあります!是非見つけてみてください。

### マップウィジェットの操作

バージョン 1.5.0 以上の Python API には、2D 回転、3D モード、3D レンダラのサポートなどマップウィジェットの新機能が多数追加されています。新しいウィジェットのこれらの他の機能の詳細については、[ガイドページ（米国ESRI ページ）](https://developers.arcgis.com/python/guide/advanced-map-widget-useage/)でご紹介しています。マップウィジェットは JupyterLab での地図操作をよりシームレスにしています。

<div align="center">
<img src="https://developers.arcgis.com/assets/img/python-graphics/jlab_widget_1.gif" width="600px">
<p>マップウィジェットから JupyterLab で地図を表示する</p>
</div>

Python API の `MapView` クラスのデフォルトの表示動作は、Jupyter Notebook と同じです。ウィジェットはセルの出力領域に表示されます。 JupyterLab では、これに加えて UI ボタンが表示されることがあります。

<div align="left">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcUAAIIxu7mQQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABI0lEQVRYw+1Wy3GDMBTch3JLBanA+TQR0gDz4JB0Y1xISkBAA4EqHOeYU6qAzYVkPAyWYSLii/Ymzb63q89qBAQEXBgyNamquYhs5zSw1v72SNOUp3gkd2VZ5uP5K1dzkrslqxnzRWQD4MVV4zQw5XguP8uyDckGwBeAm1M10Rrnqqq3fd+3JEVEYhc3WkMcQDMM46IoPv7NQJIkdyLS/oiXZXk4VxP5FDfGNEvEz17Cuciy7J7kGwB0XRfXdX0Yp+NoZ/waGMQbABzE35ekKfIkDhF5mhJf7Q6o6sOReFwUxd7BzdM0ffR5BALglaQAiK21eydZZEsSAFpfBkjy2Rhz7Vr5qimoqurTR4JWeYqDgWDAWwpUNb+ogbn/woCAgL/gG9knfWwKBGcvAAAAAElFTkSuQmC" >
</div>

このボタンを押すと、ウィジェットはセルの出力領域から新しいウィンドウに移動します。 このウィンドウは、他のすべてのウィンドウと同様に、タブでの表示、分割などが可能です。 ウィジェットを元のノートブックに復元するには、このボタンを押します。

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
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-jnlabsetup/map_labdisplay.png" width="600px">
</div>

#### Web マップ と Web シーン

Web マップ、Web シーン ともに表示させると、UI ボタンから別の新しいウィンドウへの表示を 切り替えることができます。次の 2 つのコードをそれぞれ別のセルで実行して、UI ボタンで切り替えてみましょう。

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
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-jnlabsetup/map_labdisplay2d3d.png" width="600px">
</div>

#### プログラムによるウィンドウの制御

地図をどのような新しいウィンドウで表示するか、Python プログラムから制御することができます。`MapView` ウィジェットの各インスタンスには、`tab_mode` プロパティと `toggle_window_view（）` メソッドがあります。`tab_mode` を設定すると、地図ウィジェットの新しいウィンドウへの移動方法が変更されます。 この動作を試すには、以下のコードを実行してみてください。

```python
#対象の地図を表示する
map = gis.map()
map
```
```python
# コメントをひとつずつオフにして実行し、map で表示している地図の UI ボタンを都度押してみてください。
#map.tab_mode = "split-bottom"
#map.tab_mode = "split-right"
#map.tab_mode = "auto"
#map.tab_mode = "tab-after"
```

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-jnlabsetup/tab_layout.gif" width="600px">
</div>

UI ボタンによる新しいウィンドウでの地図表示は、メソッドを呼び出すことでも制御できます。次のコードでは、マップが表示されたら、`toggle_window_view（）` メソッドを呼び出してマップを新しいウィンドウに移動できます。新しいウィンドウに戻すときも、このメソッドを使用できます。(このメソッドの利用はボタンを押すことと同等の機能です）</br>以下のコードを実行してみてください。

```python
from arcgis.widgets import MapView
#対象の地図を表示する
map = MapView(gis=gis)
map
```
```python
#このセルを連続して実行する
map.toggle_window_view()
```

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-jnlabsetup/tab_layout_toggle.gif" width="600px">
</div>


表示する地図には一時的なタイトル（タブに表示されるテキスト）を付けて、これに対して `tab_mode` をプログラムで指定することもできます。次のプグラムは、一時的にタイトルを付けたマップを一定時間で `tab_mode` が持つ表示制御を順番に表現します。

```python
#対象の地図を表示する
map = gis.map(mode="3D")
map
```
```python
#このセルを実行して、新しいウィンドウに地図を移動して表示します
map.toggle_window_view(title="My 3D Map", tab_mode="split-top")
# タブを戻す
map.toggle_window_view()
```
```python
#このセルを実行してすべてのタブ挙動をみることができます
import time

tab_modes = ['auto', 'split-top' 'split-bottom', 'split-left',
'split-right', 'tab-before', 'tab-after']
for tab_mode in tab_modes:
#指定のタブ形式で表示する
map.toggle_window_view(title=tab_mode, tab_mode=tab_mode)
time.sleep(3) #2秒間隔
#デフォルトのタブに戻す
map.toggle_window_view()
time.sleep(2) #2秒間隔
```

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-jnlabsetup/tab_layout_interval.gif" width="600px">
</div>


最後に、3 つ以上の Web シーンを表示すると仮定した表示方法をご紹介します。各マップ ID で構成したリストから、1 度だけ処理を実行し、3 つの　Web シーンを一度にすべて新しいタブに表示します。

```python
#このセルの内容を1度で実行する
from arcgis.gis import GIS
from arcgis.widgets import MapView
gis = GIS()
for webscene_id in ['31874da8a16d45bfbc1273422f772270',
'91b46c2b162c48dba264b2190e1dbcff',
'46c47340708f446ba7f112f139e8ae5e']:
webscene_item = gis.content.get(webscene_id)
map = MapView(gis=gis, item=webscene_item, mode="3D") 
map.toggle_window_view(title=webscene_item.title, tab_mode='tab-after')
```

<div align="center">
<img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/python-api-jnlabsetup/tab_layout_3scenes.gif" width="600px">
</div>

ぜひ、実行してみてください！
