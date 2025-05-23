+++
title = "インストール ガイド"
description = "ArcGIS Maps SDK for Unity のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/unity/install-and-set-up/"]
+++

出典：ArcGIS Maps SDK for Unity - Guide - [Install and set up](https://developers.arcgis.com/unity/install-and-set-up/)

このインストール ガイドでは、**ArcGIS Maps SDK for Unity** のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-unity/)」のチュートリアルをご覧ください。

## インストールおよびセットアップ方法
**ArcGIS Maps SDK for Unity** は Unity 用のプラグインです。**ArcGIS Maps SDK for Unity** を使用して ArcGIS の実世界のマップや 3D コンテンツを使用した 3D GIS アプリケーションを作成するには、Unity プロジェクトを準備する必要があります。作業を開始する前に、必ず[プラグインをダウンロード](https://developers.arcgis.com/downloads/#unity)してください。

### Unity のインストール

このプラグインは Unity 2022.3.x と Unity 6 でサポートしています。インストールされていない場合は、Unity を[インストール](https://unity.com/ja/download)してください。

### プラグインのインストール

**ArcGIS Maps SDK for Unity** を使用するには、[新規プロジェクト](../add-the-plugin-to-a-new-project/)または[既存プロジェクト (英語) ](https://developers.arcgis.com/unity/install-and-set-up/add-the-plugin-to-an-existing-project/)のいずれかにプラグインをインストールします。

### シーン設定オプションの選択

プラグインには、シーン内で ArcGIS データやその他の地理空間コンテンツを使用するための 3 つのオプションが用意されています。

* [Map Creator UI](https://developers.arcgis.com/unity/install-and-set-up/scene-setting-options/#map-creator-ui) では、コードを記述せずにシーンを作成できます。
* [Components](https://developers.arcgis.com/unity/install-and-set-up/scene-setting-options/#components) では、シーン内のゲーム オブジェクトにアタッチできます。
* [C# API](https://developers.arcgis.com/unity/install-and-set-up/scene-setting-options/#c-api) では、プラグインのソース コードを変更することでカスタマイズ オプションを提供します。

## 追加のダウンロード

[ダウンロード ページ](https://developers.arcgis.com/downloads/)から、開発者向けドキュメントをアーカイブ形式としてダウンロードできます。ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、サンプル ドキュメントが含まれています。アーカイブには、インターネットに接続しなくてもドキュメントにアクセスできるように、ローカルの Web サーバーからドキュメントにアクセスする手順が記述されています。このドキュメントは、ローカルのコンピュータまたは内部ネットワーク上で実行するように設計されており、公共のインターネット上では実行できません。

ローカルでドキュメントを使用するには、

* **ArcGIS Maps SDK for Unity** の[ドキュメントをダウンロード](https://developers.arcgis.com/downloads/)します。ダウンロードしたファイルは zip アーカイブ形式です。
* アーカイブをローカル フォルダーに解凍[^*]します。解凍したアーカイブには、`public` と `install` という 2 つのサブ フォルダーがあります。
* `install` フォルダー内の `README.md` ファイルを開き、選択した Web サーバーの指示に従います。

[^*]:パスが長いため、そのままだと Windows の標準機能で解凍できません。他のフリー ソフトを用いるかフォルダーやファイルの名前を変更して解凍を行ってください。

