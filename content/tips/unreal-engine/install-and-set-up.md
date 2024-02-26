+++
title = "インストールガイド"
description = "ArcGIS Maps SDK for Unreal Engine のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/unreal-engine/install-and-set-up/"]
+++

出典：ArcGIS Maps SDK for Unreal Engine - Guide - [Install and set up](https://developers.arcgis.com/unreal-engine/install-and-set-up/)

このインストール ガイドでは、**ArcGIS Maps SDK for Unreal Engine** のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-unreal-engine/)」のチュートリアルをご覧ください。

ArcGIS Developers のダッシュボードから各インストーラーやデータをダウンロードするには、ArcGIS 開発者アカウントでログインする必要があります。アカウントをお持ちでない場合は、サインアップ (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](../../../guide/get-dev-account/)」をご覧ください。

## インストールおよびセットアップ方法
**ArcGIS Maps SDK for Unreal Engine** は Unreal Engine 用のプラグインです。**ArcGIS Maps SDK for Unreal Engine** を使用して ArcGIS の実世界のマップや 3D コンテンツを使用した 3D GIS アプリケーションを作成するには、Unreal プロジェクトを準備する必要があります。作業を開始する前に、必ず[プラグインをダウンロード](https://developers.arcgis.com/downloads/#unreal-engine)してください。

### Unreal Engine のインストール

このプラグインは、Unreal Engine 5.0、5.1、5.2、および 5.3 をサポートしています。インストールされていない場合は、[Unreal Engine](https://www.unrealengine.com/ja/download) をインストールしてください。Visual Studio for Unreal Engine の設定については、[Unreal Engine 5 のドキュメント](https://docs.unrealengine.com/5.0/ja/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine/)を参照してください。

### プラグインのインストール

**ArcGIS Maps SDK for Unreal Engine** を使用するには、[新規プロジェクト](../add-the-plugin-to-a-new-project/)または[既存プロジェクト (英語)](https://developers.arcgis.com/unreal-engine/install-and-set-up/add-the-plugin-to-an-existing-project/) のいずれかにプラグインをインストールします。

### シーン設定オプションを選択する

SDK には、シーン内で ArcGIS データやその他の地理空間コンテンツを使用するための 4 つのオプションが用意されています：

* [Modes Panel UI](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#modes-panel-ui) は、コードを記述せずにシーンを作成できます。
* [Components](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#components) は、**Modes Panel UI** の背後にあり、コードを記述せずにシーンを作成できます。
* [BluePrints](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#blueprints) は、Unreal Engine で提供されているノードベースのビジュアルスクリプトインターフェイスを使用してシーンを作成するオプションを提供します。
* [C++ API](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#c-api) は、プラグインのソースコードを変更することでカスタマイズオプションを提供します。

## 追加のダウンロード

[ダウンロードページ](https://developers.arcgis.com/downloads/)から、開発者向けドキュメントをアーカイブ形式としてダウンロードできます。ドキュメントには、開発者ガイド、API リファレンス、チュートリアル、サンプルドキュメントが含まれています。アーカイブには、インターネットに接続しなくてもドキュメントにアクセスできるように、ローカルのウェブサーバーからドキュメントにアクセスする手順が記述されています。このドキュメントは、ローカルのコンピュータまたは内部ネットワーク上で実行するように設計されており、公共のインターネット上では実行できません。

ローカルでドキュメントを使用するには:

* **ArcGIS Maps SDK for Unreal Engine** の[ドキュメントをダウンロード](https://developers.arcgis.com/downloads/)します。ダウンロードしたファイルは zip アーカイブ形式です。
* アーカイブをローカルフォルダーに解凍します。解凍したアーカイブには、`public` と `install` という 2 つのサブフォルダーがあります。
* `install` フォルダー内の `README.md` ファイルを開き、選択した Web サーバーの指示に従います。
