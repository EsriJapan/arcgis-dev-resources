+++
title = "ArcGIS API for Python のコンセプト"
description = "ArcGIS API for Python のプロダクト コンセプトと動作要件について紹介します。"
weight = 1
aliases = ["/python/python-api-concepts/"]
+++

## ArcGIS API for Python のコンセプト

ArcGIS API for Python (以下、Python API) は、Web GIS ([ArcGIS Online](https://www.esrij.com/products/arcgis-online/) / [ArcGIS Enterprise](https://www.esrij.com/products/arcgis-enterprise/)) を活用してマップと地理空間データを扱うための Python ベースの API です。<br>
Python のベスト プラクティスに基づき、標準的なイディオムやデータ構造を用いた、シンプルで使いやすい設計になっており、GIS データの可視化や解析の実行だけでなく、ユーザー、グループ、アイテムなどを管理するためのシンプルで使いやすいツールを提供します。 さらに、自身が所有しているデータだけでなく、Esri 等が提供するすぐに使えるマップやデータにアクセスすることも可能です。 また、Pandas や Jupyter Notebook といった、他の Python 向けのライブラリやツールとの連携で、より豊富な機能を活用することが可能です。

<div align="center">
 <img src="https://apps.esrij.com/arcgis-dev/guide/img/pythonAPI/concept/python_api_laptop.png" width="500px">
</div>

***

## Python API のアーキテクチャ

Python API は、Web GIS プラットフォームを使用する目的で実装されています。
Python API には、ArcGIS プラットフォーム上で利用するデータやユーザの認証情報など、各オブジェクトを管理して作業するためのモジュール、クラス、関数、およびタイプがあります。

Python API は `arcgis` パッケージとして配布されています。
このパッケージの中には、最も基本になる `gis` モジュールを中心に、Web GIS で使用できる機能がさまざまなモジュールとして編成されています。

<div align="center">
 <img src="https://developers.arcgis.com/python/guide/images/guide_api_modules_overview.png" width="700px">
 <p>Python API のモジュールを表したダイアグラム</p>
</div>

`gis` モジュールは最も重要なモジュールで、Web GIS への入口となり、ユーザー、グループ、およびコンテンツを管理 (作成、読み込み、更新、削除) する機能を提供します。Web GIS の管理者権限をもつユーザーは、自身の組織のメンバー、グループなどの管理にこのモジュールを使用します。

紫色のモジュールは、さまざまな空間解析に用いる地理情報データセットにアクセスするために使用します。これらのモジュールには、特定のタイプの空間データを操作するための関数、ジオプロセシング処理、ArcGIS で使用できる様々なデータに対応したクラス、およびそれらを補助するようなヘルパー クラスなどが含まれています。

青色のモジュールは、GIS のワークフローをサポートする追加的な機能を提供します。住所から緯度経度を特定する `geocoding` モジュール、フィーチャのジオメトリを表す `geometry` モジュール、そしてサード パーティーのジオプロセシング ツールをインポートして使用するための `geoprocessing` モジュール等が含まれています。

オレンジ色のモジュールは、GIS データの分析結果を可視化して共有することを可能にします。
`map` モジュールには、[Jupyter Notebook](http://jupyter.org/) でマップとレイヤーを可視化する機能を実装しています。
`apps` モジュールは ArcGIS で構築された Web アプリケーションの作成と管理に役立ちます。

各モジュールの詳しい内容は、[米国Esri ガイドページ (英語)](https://developers.arcgis.com/python/guide/overview-of-the-arcgis-api-for-python/#Architecture-of-the-API)をご覧ください。

***

## 動作要件

Python API は次の環境と動作要件が必要です。

* オペレーティング システム</br>
  * Windows (64 ビット) /macOS/ Linux</br>
* Python バージョン 3.10.x - 3.12.x

* 開発環境
  * [Jupyter Notebook](http://jupyter.org/)※
  * [Jpyter Lab](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906)※
  * 他、Python 開発環境/テキスト エディター

※ Jupyter Notebook および Jupyter Lab はオープンソースとして利用できる開発環境のひとつです。
Python API はこれらの開発ツールでの地図出力をサポートしてます。利用可能なブラウザは次の通りですが、詳細については [Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#browser-compatibility) のシステム要件をご覧ください。

* Google Chrome
* FireFox
* Safari

サポートする最新の動作環境につきましては [System requirements](https://developers.arcgis.com/python/guide/system-requirements/) または、[動作環境](https://www.esrij.com/products/arcgis-api-for-python/environments/)もご参照ください。
