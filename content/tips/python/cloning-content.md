+++
title = "アイテムのクローン"
description = "Web GIS のアイテムを他のアカウントに複製する方法を紹介します"
Weight=8
aliases = ["/python/cloning-content/"]
+++

参考：ArcGIS API for Python - [Cloning Content](
https://developers.arcgis.com/python/latest/guide/cloning-content/
)

### イントロダクション

企業または組織の開発環境からステージング、そして本番環境にコンテンツを移動させる最善の方法は何ですか？という質問がよくあります。このガイドでは、ある Web GIS から別の Web GIS にコンテンツを移動する方法について、可能なロードマップの 1 つを紹介します。これは、コンテンツを移動する際の基本的なソフトウェアの概念を示すためのテンプレートであり、ワークフローを他の種類のコンテンツ用に変更したり、管理者の特定のニーズに合わせて調整したりすることができます。

ContentManger の [clone_items()](https://developers.arcgis.com/python/api-reference/arcgis.gis.toc.html#arcgis.gis.ContentManager.clone_items) メソッドは、ArcGIS Online、ArcGIS Enteprise、または ArcGIS Enterprise on Kubernetes などの元の組織から別の組織に、すべての用途と機能を持つ 1 つのアイテムの完全な複製を作成することを目的としています。アイテムのクローンを作成するときは、サポートされているアイテム、関連するアイテム、またはリソース アイテムとクローンされるアイテムとの関係を考慮する必要があります。

アイテムのクローンついて、基本的な用語を定義しておきましょう。クローンとは、ArcGIS Enterprise、ArcGIS Online、または ArcGIS Enterprise on Kubernetes から他のデプロイメント タイプへの、あらゆる組織間でのアイテムの転送を指します。これらのポータルのタイプについて説明するときに、これらのポータルのタイプを区別しようとして混乱しないために、デプロイメントのタイプに関係なく、コンテンツ作成元の組織を「ソース」と呼び、コンテンツのクローン先の組織を「ターゲット」と呼びます。

このドキュメントでは、ソースの管理者アカウントを使用してソース アイテムを収集し、ターゲットの管理者アカウントにクローンするワークフローを説明します。具体的には、[ホスト フィーチャ レイヤー](https://doc.arcgis.com/en/arcgis-online/manage-data/hosted-web-layers.htm)と [Web マップ](https://esrijapan.github.io/arcgis-dev-resources/guide/services/create-webmap/)をクローンする方法を説明します。`Web マップ`は、これらのレイヤー アイテムとそのソース サービスを操作レイヤーの構成要素として利用できます。各アイテムの詳細については、ハイパーリンクをクリックしてください。

これは管理者のワークフローです。管理者アカウントを使用することで、ソース内でアイテムや依存関係にアクセスすること及び、ターゲット内でアイテムやサービスを作成するための必要な権限が保証されます。ターゲットの管理者は、ユーザー アカウントを作成し、必要に応じてアイテムの所有権やグループ メンバーシップを再割り当てすることができます。これは、ポータルが外部のアイデンティティ ストアによって管理されるユーザーを持つ場合、最も単純なワークフローになります。

### 対応アイテム

冒頭に記載したように、Python API の開発者は以下のアイテム タイプを転送する用に `clone_items()` メソッドを設計しました。

- Web マップ
- ホスト フィーチャ レイヤー
- ホスト フィーチャ レイヤーのビュー
- フィーチャ コレクション
- ArcGIS survey123 フォーム
- ArcGIS Workforce プロジェクト
- ArcGIS StoryMaps
  - [Cloning Complex Items](https://developers.arcgis.com/python/guide/cloning-complex-apps) を参照
- ArcGIS Experience Builder
  - [Cloning Complex Items](https://developers.arcgis.com/python/guide/cloning-complex-apps/) を参照
- ArcGIS Dashboards
  - [Cloning Complex Apps](https://developers.arcgis.com/python/guide/cloning-complex-apps) を参照
- ArcGIS QuickCapture プロジェクト
- ArcGIS Notebooks
- シンプルなタイプ
  - ダウンロードオプションのあるアイテム。(Web GIS に含まれ、ダウンロード可能なアイテムについては、[Data files](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types/#data-files) を参照) ジオデータベースやシェープファイル、コードサンプル、zip ファイル、その他のパッケージなどが含まれます。

`clone_items()` は、上記の複雑なアイテムの依存関係をクローンします。例えば、既存の Web アプリケーションをクローンする場合、Web マップと、そのマップで参照されるすべてのホスト フィーチャ レイヤーをクローンします。

`clone_items()` は、マップ サービスとイメージ サービスのクローンを作成できません。これらのサービスは、構成内のホストされているサーバー以外のサーバーに公開されるため、関数がターゲット内のどこに公開するかを決定することは不可能です。その結果、これらのアイテムはコピーされますが、元のソース URL を参照し続けます。

個々のアイテムのクローンを作成し、その結果を検証する例を見てみましょう。

※このドキュメントではバージョン 2.4.0 以降を対象とした書き方で紹介します。

まず、必要なライブラリをインポートし、ソースの GIS とターゲットの GIS に接続します。

### ライブラリのインポート
``` Python
from pathlib import Path
import sys
import pandas as pd

from arcgis.gis import GIS, Item
from arcgis.env import active_gis
from arcgis.features import FeatureLayerCollection
# 2.4.0 以降では from arcgis.mapping import WebMap の代わりに以下が必要
from arcgis.map import Map
```
### ソースとターゲットのポータルに接続

管理者としてログインするところから始めます。開発環境として [ArcGIS Online](https://doc.arcgis.com/en/arcgis-online/get-started/what-is-agol.htm) を使用してテストや開発を行ってきた管理者が、本番環境となる ArcGIS Online にアイテムをクローンする場合を想定します。

##### ログイン例
``` Python
source = GIS("https://www.arcgis.com", "USERNAME1")
#ID とパスワードを使用して ArcGIS Online にログイン
print(source)
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image1_ユーザー1ログイン.png" width="1200px">

``` Python
target = GIS("https://www.arcgis.com", "USERNAME2")
#ここではクローン先を別のArcGIS Online アカウントとする
print(target)
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image2_ユーザー2ログイン.png" width="1200px">

### クローンの作成

まず、`clone_items()` で何ができるかを簡単にデモンストレーションしてみます。管理者としてログインし、ソースのユーザーの 1 人が所有する特定のホスト フィーチャ レイヤー のアイテムを `get()` で取得し、ターゲットにクローンします。クローンされたフィーチャ レイヤーの `URL` を参照して、新しいアイテムを確認することができます。`owner` パラメーターを指定することで、組織内の他の`ユーザー`にクローンを転送することもできます。 　　

``` Python
hosted_flyr = source.content.get("71af4edb22c34c92893b983d7f7b52e6")
osted_flyr
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image3_クローン元レイヤー取得get.png" width="1200px">

``` Python
hosted_flyr.url
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image4_レイヤー取得後URL.png" width="1200px">

``` Python
cloned_flyr = target.content.clone_items(items = [hosted_flyr],
                                        folder="クローン先1"
                                        )#ここでは owner パラメーターを使用しない
cloned_flyr[0]
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image5_クローン後レイヤー.png" width="1200px">

``` Python
cloned_flyr[0].url
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image6_クローン後レイヤーURL.png" width="1200px">


`clone_items()` は、クローンされたアイテムを含むリストを返すことがわかります。リストをインデックス化すると、この操作によって、ターゲット組織に、新しいホスト フィーチャ レイヤーが作成されたことがわかります。

### 複数のアイテムを同時にクローンする

上記では、`items` パラメーター リストに 1 つのアイテムを渡す方法を示しました。次に、`clone_items()` がリスト内のすべてのアイテムをクローンする方法を見てみましょう。まず、[search()](https://developers.arcgis.com/python/api-reference/arcgis.gis.toc.html#arcgis.gis.ContentManager.search) 関数で特定のユーザーが所有するアイテムを検索し、リストのアイテムを全て同時にターゲットにクローンします。

``` Python
#複数アイテムのクローン
tester_content=source.content.advanced_search(query='tags:クローン AND owner:USERNAME1')["results"]
tester_content
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image7_テスト用複数アイテム取得.png" width="1200px">

``` Python
cloned_items = target.content.clone_items(items=tester_content, 
                                          search_existing_items=True, #既に存在するものはクローンしない
                                          folder="クローン先2")
cloned_items #アイテム「品川駅」は上でクローンを作成済み
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image8_クローン後複数アイテム.png" width="1200px">

`clone_items()` は、`items` 引数に渡したリスト内のすべてのアイテムをクローンしていることがわかります。また、`owner` 引数を渡さないことで、`clone_items()` を実行したログイン ユーザーにアイテムがクローンされます。

`clone_items()` がソースからターゲットへアイテムをクローンする簡単な例をご紹介しました。次に、ホスト フィーチャ レイヤーのリストを繰り返し処理し、いくつかの追加パラメーターを使用して、それらを利用する ArcGIS コンテンツのクローンを作成します。

### クローンのプロセス

`clone_items()` 関数の非常に重要なパラメーターは、その出力に影響します :
- `search_existing_items` - 設定可能な値は True または False です。

デフォルト値は True です。この値が True に設定されている場合の動作を説明します。クローン元`アイテム`がターゲットにクローンされると、`clone_items()` は、クローンされた`アイテム`にすべての必須アイテム タイプ [typeKeywords](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm) (アイテムに自動的に割り当てられる `typeKeywords` についてはハイパーリンクを参照) に加えて、`source-<source_item_id_value>` という追加の typeKeyword を割り当てます。たとえば、`clone_items()` が `ID d879c7d972b1d989b97d037c7a7737d6` のアイテムをソースとしてフィーチャ レイヤー アイテムをクローンする場合、ターゲットのフィーチャ レイヤー アイテムは、必須の `typeKeyword` に加えて、`source-d879c7d972b1d989b97d037c7a7737d6` の `typeKeyword` を持つことになります。実際にクローンされる前に、`clone_items()` は、そのパターンに一致する `typeKeyword` を持つアイテムをターゲットから検索し、見つかった場合は、アイテムを再度クローンするのではなく、既存のターゲットアイテムを使用します。

引数を False に設定すると、指定されたアイテムと参照するアイテムは、それらが既に存在するかどうかに関係なく、ターゲットにクローンされます。

### Web マップ

[advanced_search()](https://developers.arcgis.com/python/api-reference/arcgis.gis.toc.html#arcgis.gis.ContentManager.advanced_search) メソッドを使用して、Web マップのアイテムのリストを作成することができます。まず、全てのアイテムのリストを取得し、それをPandas DataFrame に変換して、Web マップ用にフィルタリングします 

``` Python
# ユーザーが所有するすべてのアイテムを検索
owner_items = source.content.advanced_search(query=f"owner:{source.users.me.username}", 
                                             max_items=-1)["results"]
owner_items
```

``` Python
# Pandas DataFrame 形式のリストへ変換
owner_items_df = pd.DataFrame(owner_items)
```


Pandas の `groupby()` を使用して、ユーザーが所有する各アイテムタイプ別のグループ オブジェクトを作成します。その後、`get_group()` メソッドを使用して、すべてのWeb マップを返します。

``` Python
# Web マップ形式を選択
wm_item_df = owner_items_df.groupby("type").get_group("Web Map")
wm_item_df
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image9_DataFrame前半.png" width="1200px">

出力されたデータフレームのインデックスは、元のデータフレームの各 Web マップの行番号を行インデックスに使っているので、0 から始まるインデックスにリセットします。

``` Python
wm_item_df.index
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image11_WebmapINDEX.png" width="1200px">


``` Python
web_maps = wm_item_df.reset_index(drop=True)
web_maps.index
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image12_ResetINDEX.png" width="1200px">

タグ検索を使ってWeb マップを取得し、それをターゲットにクローンしてみましょう :

``` Python
#品川駅のみ駅タグをつけている
def check_wm(tag_list):
    return "駅" in tag_list
```

``` Python
eki_df = web_maps[web_maps.tags.apply(check_wm)]
eki_df.index
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image13_駅タグINDEX.png" width="1200px">

``` Python
eki_df.loc[1].id
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image14_駅タグID.png" width="1200px">

``` Python
eki_wm_item = source.content.get(eki_df.loc[1].id)
eki_wm_item
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image15_駅タグget.png" width="1200px">

Map オブジェクトを使って、Web マップ内の各レイヤーに関する情報を表示してみましょう。レイヤー名と URL に注目して見てみると、URL のパス コンポーネントの最初にレイヤーをホストしている組織が含まれていることが分かります。

``` Python
wm_obj = Map(eki_wm_item)
```

``` Python
lyr = wm_obj.content.layers[0]
lyrname = lyr.properties.name
print(lyrname)
print(lyr.url)
print(f"Host Organization id: {lyr.url.split('/')[3]}")
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image16_駅タグURL_for文.png" width="1200px">

ソースの組織 ID を出力すると、Web マップのレイヤーがソースでホストされていることがわかります。

``` Python
print(f"{source.properties.id}")
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image17_駅タグクローン元組織ID.png" width="1200px">

`search_existing_items` パラメーターを使用することで、クローン作成時に `Web マップ`で利用されるアイテムの動作を処理することができます。このパラメーターについて学んできたことを踏まえると、Web マップで利用される`アイテムの ID` が、ターゲットに既に存在する `typeKeywords` のどれかと一致するかどうかを検出するために、このパラメーターを頼りにすることができます。もしこの関数がターゲットに既存のアイテムを見つけたら、新しい `Web マップ`の定義に適切な値を追加します。`typeKeyword` に基づいて既存のアイテムが見つからない場合、その`アイテム`をクローンします。ホストされていないアイテムの場合は、結果の `Web マップ`でそれらのアイテムを再作成します。

この場合、この Web マップをクローンしたことがないので、`False` に設定します。ホストされているレイヤーもターゲットにクローンするようにします。

``` Python
cloned_wm = target.content.clone_items(items=[eki_wm_item],
                                        folder="クローン先3",
                                        search_existing_items=False)
```

その結果、ターゲットにどのようなアイテムがあるか見てみましょう。

``` Python
cloned_wm
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image18_クローンWebmap.png" width="1200px">

``` Python
cloned_wm_obj = Map(cloned_wm[1])
```

``` Python
cloned_lyr = cloned_wm_obj.content.layers[0]
cloned_lyrname = cloned_lyr.properties.name
print(cloned_lyrname)
print(cloned_lyr.url)
print(f"Host Organization id: {cloned_lyr.url.split('/')[3]}")
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image19_クローン後URL_for文.png" width="1200px">

`clone_items()` によって Web マップが正常に再作成され、操作レイヤーがクローンされ、クローンされたフィーチャ レイヤーを使用するように Web マップが構成されていることがわかります。レイヤー URL からも別の ArcGIS Online へクローンされたことが確認できます。

ArcGIS Enterprise へクローンした場合は、レイヤー URL のスキーム名とパス コンポーネントから、クローンされたレイヤーが ArcGIS Online の組織ではなく ArcGIS Enterprise の組織を使用していることがわかります。

Web マップを視覚的に比較してみましょう :

### ソース

``` Python
wm_obj
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image20_クローン前ウェブマップ.png" width="1200px">

### ターゲット

``` Python
cloned_wm_obj
```

<img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/cloning-content/image21_クローン後ウェブマップ.png" width="1200px">

マップが同じレイヤーを含んでいるように見えることが視覚的にわかります。`wm_map` ディクショナリの他の `Web マップ`のソースとターゲットのペアにもこのプロセスを繰り返して、視覚的に比較することができます。

### ArcGIS Dashboards

ArcGIS Dashboards のクローンの詳細については、[Cloning and Troubleshooting Complex Items](https://developers.arcgis.com/python/guide/cloning-complex-apps#dashboards-and-editing-item-data)ガイドを参照してください。

### Story Maps

ArcGIS StoryMap のクローンの詳細については、[Cloning and Troubleshooting Complex Items](https://developers.arcgis.com/python/guide/#storymaps-web-scenes-and-item-remapping)ガイドを参照してください。

## まとめ

このガイドでは、ソースの Web GIS とターゲットの Web GIS の間でアイテムをクローンするための 1 つのワークフローを示しました。それぞれの GIS に管理者として接続し、個々のアイテムをクローンし、次にアイテムのセットをクローンしました。次に、Web マップ アイテムをクローンし、同時に Web マップ内のホスト フィーチャ レイヤーもクローンされ、クローンされた Web マップがターゲット組織でホストされているクローンされたフィーチャ レイヤーを読み込むように構成される方法を示した。
