+++
title = "matplotlib での日本語利用について"
description = "ArcGIS API for Python で利用されているグラフ描画ライブラリの matplotlib で日本語を使う方法を説明します。"
weight = 7
aliases = ["/python/matplotlib-japanese/"]
+++

ArcGIS API for Python では様々な オープンソース ライブラリを活用していますが、グラフを描画する際のメソッドでは主に matplotlib が使用されています。<br>
matplotlib をデフォルトのまま使用すると日本語のテキストは文字化けしてしまいますが、フォント設定を変更することで表示させることが可能です。

### 対応環境
ここで説明する方法は、次の環境で設定しました。

* ArcGIS Pro 2.5
* ArcGIS API for Python 1.7.0
* matplotlib 3.1.1

matplotlib 3.1.0 以上から tcc ファイルに対応するようになったため、フォントを追加でインストールすることなく日本語を表示させることができるようになっています。
それ以前のバージョンをご利用されている場合は、matplotlib のバージョンアップをご検討ください。

### 設定方法
設定方法は主に以下の 2 通りがあります。

1. [スクリプトで matplotlib の設定を都度変更する](#スクリプトで-matplotlib-の設定を都度変更する)
1. [matplotlib の設定ファイル (matplotlibrc) を編集する](#matplotlib-の設定ファイル-(matplotlibrc)-を編集する)

前者の方法では一時的な設定変更、後者では恒久的な設定変更が可能です。
どちらが適しているかはご自身の状況に合わせて選択してください。

#### スクリプトで matplotlib の設定を都度変更する

次のコードをスクリプトの最初に実行することでフォント設定を変更することが可能です。<br>

``` python
import matplotlib.pyplot as plt
from matplotlib import rcParams
rcParams['font.family'] = 'sans-serif'
rcParams['font.sans-serif'] = ["Meiryo"]
```

`rcParams` は matplotlib のデフォルト設定が入っているオブジェクトです。<br>
上記では Windows で利用可能な Meriyo に変更していますが、ご自身の OS 等に応じて適宜フォントファミリー、フォントを変更してください。<br>
設定したら[サンプル コード](#サンプル-コード)を実行してみましょう。

#### matplotlib の設定ファイル (matplotlibrc) を編集する

上記の設定方法では毎回スクリプトの最初にコードを実行する必要がありますが、以下の方法でデフォルトのフォントを恒久的に変更することが可能です。

1. matplotlibrc のパスを確認
次のコードを実行して matplotlib の設定ファイルである matplotlibrc のパスを確認します。

```python
import matplotlib as mpl
mpl.matplotlib_fname()
```

2. matplotlibrc を user/.matplotlib にコピー & ペーストで配置
matplotlibrc が格納されているパスへ移動し、ファイルをコピーしたら以下のディレクトリにペーストします。

* `C:\Users\<ユーザー名>\.matplotlib`

3. matplotlibrc の内容を修正
ペーストした matplotlibrc のフォント設定部分を書き換えます。<br>
matplotlibrc は非常に長いファイルですが、160 行目あたりからフォント設定のセクションが始まります。



198 行目にフォント ファミリー、210 行目に sans-serif のフォント設定の箇所があります。<br>
フォント ファミリーはデフォルトが sans-serif なので、ここではデフォルト設定のままにしておきます。<br>
210 行目のフォント設定の行で、`#` を削除し、`:` の後に日本語のフォントを追加しましょう。<br>
ここでは `Meiryo` に設定します。設定後の画面は以下のようになります。



4. キャッシュの再構築
以上で設定は終了ですが、うまく反映されない場合があるので、念のため以下のコードを実行してキャッシュを再構築します。

```python
import matplotlib
matplotlib.font_manager._rebuild()
```

設定が完了したらしたら[サンプル コード](#サンプル-コード)を実行してみましょう。


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




### 参考

* qiita
    * 
* matplotlib リファレンス
    * 