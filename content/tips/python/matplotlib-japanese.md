+++
title = "matplotlib での日本語利用について"
description = "ArcGIS API for Python で利用されているグラフ描画ライブラリの matplotlib で日本語を使う方法を説明します。"
weight = 7
aliases = ["/python/matplotlib-japanese/"]
+++

ArcGIS API for Python では様々な オープンソース ライブラリを活用していますが、グラフを描画する際は主に matplotlib が使用されています。<br>
matplotlib をデフォルトのまま使用すると日本語のテキストは文字化けしてしまいますが、フォント設定を変更することで表示させることが可能です。

### 対応環境
ここでは、次の環境を用いた場合の設定方法を説明します。

* ArcGIS Pro 2.5
* ArcGIS API for Python 1.7.0
* matplotlib 3.1.1

日本語フォントの多くは ttc ファイルで提供されていますが、以前の matplotlib は ttc ファイルに対応していませんでした。matplotlib 3.1.0 から ttc ファイルに対応するようになったため、フォントを追加でインストールすることなく日本語を表示させることができるようになっています。それ以前のバージョンをご利用されている場合は以下をご検討ください。

1. ArcGIS Pro のアップグレード
    * ArcGIS Pro 2.5 では、デフォルトで作成されている arcgispro-py3 という名前の環境に、ArcGIS API for Python 1.7.0 及び matplotlib 3.1.1 がインストールされています。
1. ArcGIS API for Python をアップグレード
    * Anaconda を利用して環境構築している場合、ArcGIS API for Python を最新バージョンにアップグレードすることで、依存パッケージである matplotlib も併せてアップグレードされます。

### matplotlib での日本語フォントの設定方法
設定方法は主に以下の 2 通りがあります。

1. スクリプトで matplotlib の設定を都度変更する
1. matplotlib の設定ファイル (matplotlibrc) を編集する

前者の方法では一時的な設定変更、後者では恒久的な設定変更が可能です。
どちらが適しているかはご自身の状況に合わせて選択してください。

#### スクリプトで matplotlib の設定を都度変更する

次のコードをスクリプトの最初に実行することでフォント設定を変更することが可能です。<br>

``` python
import matplotlib.pyplot as plt
from matplotlib import rcParams
rcParams["font.family"] = "sans-serif"
rcParams["font.sans-serif"] = ["Meiryo"]
```

`rcParams` は matplotlib のデフォルト設定が入っているオブジェクトです。<br>
上記では Windows で利用可能な Meriyo に変更していますが、ご自身の OS 等に応じて適宜フォントファミリー、フォントを変更してください。<br>
設定したら[サンプル コード](#サンプル-コード)を実行してみましょう。

#### matplotlib の設定ファイル (matplotlibrc) を編集する

上記の設定方法では毎回スクリプトの最初にコードを実行する必要がありますが、以下の方法でデフォルトのフォントを恒久的に変更することが可能です。

##### matplotlibrc のパスを確認

次のコードを実行して matplotlib の設定ファイルである matplotlibrc のパスを確認します。

```python
import matplotlib as mpl
mpl.matplotlib_fname()
```

##### matplotlibrc を C:\Users\\<ユーザー名>\\.matplotlib にコピー & ペーストで配置
matplotlibrc が格納されているパスへ移動しファイルをコピーしたら、以下のディレクトリにペーストします。

* `C:\Users\<ユーザー名>\.matplotlib`

{{% notice tip %}}

conda を使用して複数の環境を作成・利用している場合、それぞれの環境が matplotlibrc を保持しています。<br>
上記のパスに配置された matplotlibrc は各環境の matplotlibrc よりも優先されるため、当該ファイルを修正するだけで全ての環境で日本語のフォントを設定することができます。

{{% /notice %}}

##### matplotlibrc の内容を修正
ペーストした matplotlibrc のフォント設定部分を書き換えます。<br>
matplotlibrc は非常に長いファイルですが、160 行目あたりからフォント設定のセクションが始まります。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/matplotlib-japanese/font-section.png" width="500px">
</div>

198 行目にフォント ファミリー、210 行目に sans-serif のフォント設定の箇所があります。<br>
フォント ファミリーはデフォルトが sans-serif なので、ここではデフォルト設定のままにしておきます。<br>
210 行目のフォント設定の行で、`#` を削除し、`:` の後に日本語のフォントを追加しましょう。<br>
ここでは `Meiryo` に設定します。設定後の画面は以下のようになります。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/matplotlib-japanese/font-setting.png" width="1100px">
</div>

##### キャッシュの再構築
以上で設定は終了ですが、うまく反映されない場合があるので、念のため以下のコードを実行してキャッシュを再構築します。

```python
import matplotlib.font_manager
matplotlib.font_manager._rebuild()
```

設定が完了したらしたら以下のサンプルコードを実行してみましょう。


#### サンプル コード
フォント設定が完了したら以下のサンプル コードを実行してみましょう。

```python
import matplotlib.pyplot as plt
import numpy as np

def test_function(x):
    return 3*x**3 + 2*x**2 + 4*x - 10

x = np.linspace(-3, 3, 200)

plt.plot(x, test_function(x), color = "cornflowerblue", label = "日本語のラベル")

plt.legend(loc = "upper left")
plt.ylim(-120, 120)
plt.title("日本語のタイトル")
plt.xlabel("日本語のX軸")
plt.ylabel("日本語のY軸")
plt.grid(True)
plt.show()
```

次のようなグラフが描ければ成功です。

<div align="center">
<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/matplotlib-japanese/gragh.png" width="500px">
</div>

### 参考
* [matplotlibで日本語 - Qiita](https://qiita.com/yniji/items/3fac25c2ffa316990d0c)
* matplotlib 公式ドキュメント
    * [Configuring the font family](https://matplotlib.org/gallery/api/font_family_rc_sgskip.html)
    * [The matplotlibrc file](https://matplotlib.org/tutorials/introductory/customizing.html#the-matplotlibrc-file)