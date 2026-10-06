+++
title = "ArcGIS API for Python のコンセプト"
description = "ArcGIS API for Python の概要と動作要件について紹介します。"
weight = 1
aliases = ["/python/python-api-concepts/"]
+++

出典：ArcGIS API for Python - [Overview of the ArcGIS API for Python](https://developers.arcgis.com/python/latest/guide/overview-of-the-arcgis-api-for-python/)

ArcGIS API for Python (以下、Python API) は、GIS の可視化や分析、空間データの管理、GIS システムの運用管理といったタスクを実行するための、強力で最新かつ使いやすい Python ライブラリーであり、対話モードでもスクリプトでも実行可能です。

## Pythonic な GIS API
Python API は、GIS を Pythonic な形で表現したものです。Pythonic な API とは、その設計において Python のベスト プラクティスに準拠し、標準的な Python の構文やデータ構造を、明確で読みやすいイディオムを用いて実装したものです。この API により、Python プログラマーは ArcGIS を簡単かつ自然に利用できるようになり、ArcGIS ユーザーも GIS のスクリプト作成や自動化を容易に行うことができます。  
Python API は、ArcGIS Online および ArcGIS Enterprise がそれぞれ提供する、オンラインおよびオンプレミスの Web GIS プラットフォームを利用して実装されています。この API には、ArcGIS プラットフォームの情報モデルの要素を管理・操作するための Python モジュール、クラス、関数、および型が用意されています。

## API のアーキテクチャー
この API は、conda および pip を介して `arcgis` パッケージとして配布されています。汎用 GIS モデルを表す `arcgis` パッケージ内では、機能がいくつかの異なるモジュールに整理されており、これにより使いやすく、理解しやすくなっています。各モジュールには、GIS の特定の側面に焦点を当てた数種類の型と関数が含まれています。以下の図は、この API に含まれるモジュールを示しています。

<div align="center">
 <img src="https://developers.arcgis.com/python/guide/images/guide_api_modules_overview.png" width="700px">
</div>

`gis` モジュールは最も重要であり、GIS への入り口となります。このモジュールを使用すると、GIS 内のユーザー、グループ、およびコンテンツを管理できます。GIS 管理者は、このモジュールに多くの時間を費やしています。  

緑色のモジュールは、GIS 内のさまざまな空間機能や地理データセットにアクセスするために使用されます。これらのモジュールには、ジオプロセシング関数のファミリー、型、および特定の種類の空間データを扱うためのその他のヘルパーオブジェクトが含まれます。  

青色のモジュールは、ワークフローに追加の機能を提供します。これには、場所を検索するための `geocoding` モジュール、フィーチャ データのジオメトリーを表現し、それらを扱うための関数を含む `geometry` モジュール、サードパーティー製のジオプロセシング ツールを簡単にインポートして利用できるようにする `geoprocessing` モジュール、およびテーマ別情報でデータセットを充実させるのに役立つ `geoenrichment` モジュールが含まれます。

オレンジ色のモジュールは、GIS データや分析結果を可視化・公開することを可能にします。`map` モジュールには、Web マップや Web レイヤーを扱うための型や関数が用意されており、`apps` モジュールは、ArcGIS で構築された Web アプリケーションの作成と管理を支援します。

各モジュールの詳しい内容は、[米国Esri ガイドページ (英語)](https://developers.arcgis.com/python/guide/overview-of-the-arcgis-api-for-python/#Architecture-of-the-API)をご覧ください。


## 動作要件

Python API は次の環境と動作要件が必要です。

* オペレーティング システム</br>
  * Windows (64 ビット) /macOS/ Linux</br>
* Python バージョン 3.10.x - 3.13.x

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
