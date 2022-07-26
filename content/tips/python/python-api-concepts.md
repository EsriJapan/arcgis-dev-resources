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

<!-- #### このページでは、次のことを解説します。

* [ArcGIS API for Python のアーキテクチャ](#arcgis-api-for-python-のアーキテクチャ)</br>
  ArcGIS API for Python がどのようなモジュールから成り立っているのかを解説します。

* [動作要件](#動作要件)</br>
  OS などシステム要件と推奨する開発環境をご紹介します。

* [ガイドページとサンプルコード](#ガイドページとサンプルコード)</br>
  用途別に、初めの一歩として有用なサンプルをご紹介します。 -->
***
## Python API のアーキテクチャ

Python API は、Web GIS プラットフォームを使用する目的で実装されています。
Python API には、ArcGIS プラットフォーム上で利用するデータやユーザの認証情報など、各オブジェクトを管理して作業するためのモジュール、クラス、関数、およびタイプがあります。

Python API は `arcgis` パッケージとして配布されています。
このパッケージの中には、最も基本になる `gis` モジュールを中心に、Web GIS で使用できる機能がさまざまなモジュールとして編成されています。

<div align="center">
 <img src="https://developers.arcgis.com/python/guide/images/guide_api_overview_modules.png" width="500px">
 <p>Python API のモジュールを表したダイアグラム</p>
</div>

`gis`は最も重要なモジュールで、Web GIS への入口となり、ユーザー、グループ、およびコンテンツを管理 (作成、読み込み、更新、削除) する機能を提供します。Web GIS の管理者権限をもつユーザーは、自身の組織のメンバー、グループなどの管理にこのモジュールを使用します。

緑色のモジュールは、さまざまな空間解析に用いる地理情報データセットにアクセスするために使用します。これらのモジュールには、特定のタイプの空間データを操作するための関数、ジオプロセシング処理、ArcGIS で使用できる様々なデータに対応したクラス、およびそれらを補助するようなヘルパー クラスなどが含まれています。

青色のモジュールは、GIS のワークフローをサポートする追加的な機能を提供します。住所から緯度経度を特定するジオコーディング モジュール、フィーチャのジオメトリを表すモジュール、そしてサード パーティーのジオプロセシング ツールをインポートして使用するためのジオプロセシング モジュール等が含まれています。

オレンジ色のモジュールは、GIS データの分析結果を可視化して共有することを可能にします。
`widgets` モジュールには、[Jupyter Notebook](http://jupyter.org/) でマップとレイヤーを可視化する機能を実装しています。
`mapping` モジュールには、Web マップと Web シーンに対応し、それぞれのレイヤーを操作するためのタイプと関数があり、`apps` モジュールは ArcGIS で構築された Web アプリケーションの作成と管理に役立ちます。

各モジュールの詳しい内容は、[米国Esri ガイドページ（英語）](https://developers.arcgis.com/python/guide/overview-of-the-arcgis-api-for-python/#Architecture-of-the-API)をご覧ください。

***

## 動作要件

Python API は次の環境と動作要件が必要です。

* オペレーティング システム</br>
  * Windows (32 /64 ビット) /macOS/ Linux</br>
  ※macOS/Linux は国内サポート対象外となります
* Python バージョン 3.5+

* 開発環境
  * [Jupyter Notebook](http://jupyter.org/)※
  * [Jpyter Lab](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906)※
  * 他、Python 開発環境/テキスト エディター

※ Jupyter Notebook および Jupyter Lab はオープンソースとして利用できる開発環境のひとつです。
Python API はこれらの開発ツールでの地図出力をサポートしてます。利用可能なブラウザは次の通りですが、詳細については [Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#browser-compatibility) のシステム要件をご覧ください。

* Google Chrome
* FireFox
* Safari

サポートする最新の動作環境につきましては[米国Esri システム要件（英語）](https://developers.arcgis.com/python/guide/system-requirements/)または、[動作環境](https://www.esrij.com/products/arcgis-api-for-python/environments/)もご参照ください。

***

<!-- ## ガイドページとサンプルコード

米国Esri の [ArcGIS API for Python ガイドページ](https://developers.arcgis.com/python/guide/)には、Python API のモジュール毎または使用者のユースケースに沿ったベストプラクティスが説明されています。
サンプルのノートブックでは、この API を使用して Python スクリプトを作成し、マッピング、クエリ、分析、ジオコーディング、ルート解析、ポータル管理などの機能を組み込んで、現実の問題を解決する方法について解説します。サンプルノートブックは、GitHub からダウンロードも可能です。また、ここから業務に沿ったサンプルを見つけることもできます。

<div align="center">
 <img src="https://s3-ap-northeast-1.amazonaws.com/apps.esrij.com/arcgis-dev/guide/img/pythonAPI/samplepage.jpg" width="700px">
 <p>Esri サンプル ガイド ページ</p>
</div>

* [`gis`を使って、ユーザー情報やコンテンツを検索してみる](https://developers.arcgis.com/python/guide/using-the-gis/#Using-the-GIS)
* [【開発者向け】:ノートブックをはじめる](https://developers.arcgis.com/python/sample-notebooks/your-first-notebook/)
* [【管理者向け】:グループをバッチで作成する](https://developers.arcgis.com/python/sample-notebooks/batch-creation-of-groups/)
* [【GISデータ解析者向け】:自然現象を解析する](https://developers.arcgis.com/python/sample-notebooks/chennai-floods-analysis/)
* [【コンテンツ公開者向け】:シェープファイルや CSV からコンテンツを作成する](https://developers.arcgis.com/python/sample-notebooks/publishing-sd-shapefiles-and-csv/) -->


次は、Python API を利用する[ArcGIS API for Python のための基礎環境：conda入門](../python-api-conda)についてご紹介します。
