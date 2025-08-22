+++
title = "インストールとセットアップ"
description = "ArcGIS Maps SDK for Unreal Engine のインストールとセットアップ手順を紹介します。"
weight = 1
aliases = ["/unreal-engine/install-and-set-up/"]
+++

出典：ArcGIS Maps SDK for Unreal Engine - Guide - [Install and setup](https://developers.arcgis.com/unreal-engine/install-and-set-up/)

ここでは、**ArcGIS Maps SDK for Unreal Engine** のインストールとセットアップ手順を紹介します。マップを表示する方法については「[アプリの作成](../../../guide/create-app/create-startup-app-unreal-engine/)」のチュートリアルをご覧ください。

## インストールおよびセットアップ方法
**ArcGIS Maps SDK for Unreal Engine** は Unreal Engine 用のプラグインです。**ArcGIS Maps SDK for Unreal Engine** を使用して ArcGIS の実世界のマップや 3D コンテンツを使用した 3D GIS アプリケーションを作成するには、Unreal プロジェクトを準備する必要があります。作業を開始する前に、必ず[プラグインをダウンロード](https://developers.arcgis.com/downloads/#unreal-engine)してください。

## 1. Unreal Engine のインストール

このプラグインは、Unreal Engine 5.6、 5.5、5.4、および 5.3 をサポートしています。インストールされていない場合は、[Unreal Engine](https://www.unrealengine.com/ja/download) をインストールしてください。Visual Studio for Unreal Engine の設定については、[Unreal Engine 5 のドキュメント](https://docs.unrealengine.com/5.0/ja/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine/)を参照してください。

## 2. 新規プロジェクトの作成

Unreal Engine には、お客様の業種に合ったさまざまな**開発テンプレート (Developer Template)**が用意されています。 どのテンプレートを選べばよいかわからない場合は、**ゲーム テンプレート (Games Template)** と**シミュレーション テンプレート (Simulation Template)** をお勧めします。これらのテンプレートの詳細については、[Unreal Engine テンプレート リファレンス](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-templates-reference)を参照してください。

### ゲーム テンプレートのシミュレーション ブランク テンプレート

1. Unreal Engine を起動するには、**Epic Games ランチャー** を開き、[ライブラリ (Library)] をクリックします。サポートされているバージョンを選択し、[起動 (Launch)] をクリックします。Unreal Engine を起動すると、[Unreal プロジェクトブラウザ (Project Browser)] が自動的に開きます。

2. [最近利用したプロジェクト (Recent Project)] の下で、[開発テンプレート (Developer Template)] の[ゲーム テンプレート (Games Template)]を選択してください。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/categories.png" width="800px">

3. リストからプロジェクトのテンプレートを選択します。プラグインを初期化するには、[ブランク (Blank)]のテンプレートを使用することをお勧めします。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/select-template.png" width="800px">

4. プロジェクトを [C++] プロジェクトに設定します。これにより、Visual Studio プロジェクトが作成され、ソース コード フォルダーに空の C++ クラスが 1 つ以上あるという条件が満たされます。品質 / パフォーマンス レベル、ターゲット プラットフォーム、スターター コンテンツを含めるかどうかなどを選択できます。詳細については、[Deployment](https://developers.arcgis.com/unreal-engine/deployment/) のページを参照してください。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/project-settings.png" width="800px">

5. ウィンドウの下部で、プロジェクトを保存する場所を選択し、プロジェクト名を付けます。[作成 (Create)]をクリックして終了します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/create-new-project.png" width="800px">

プロジェクト設定の詳細については、Unreal Engine ドキュメント の [新規プロジェクトを作成する](https://dev.epicgames.com/documentation/ja-jp/unreal-engine/creating-a-new-project-in-unreal-engine) を参照してください。

### シミュレーション テンプレートのシミュレーション ブランク テンプレート

Unreal Engine バージョン 5.1 以降には、さまざまなシミュレーション アプリケーション用の **シミュレーション テンプレート** が含まれています。 空、照明、体積雲、地理座標などの設定済みのシミュレーション ブランク テンプレートを活用して、プロジェクトを開始できます。

1. Unreal Engine を起動するには、**Epic Games ランチャー** を開き、[ライブラリ (Library)]をクリックします。サポートされているバージョンを選択し、[起動 (Launch)]をクリックします。Unreal Engine を起動すると、[Unreal プロジェクト ブラウザー (Project Browser)]が自動的に開きます。

2. [最近利用したプロジェクト (Recent Project)]の下で、[シミュレーション テンプレート (Simulation Template)]を選択してください。

3. [シミュレーション ブランク (Simulation Blank)]テンプレートを使用してください。

4. プロジェクトを [C++] プロジェクトに設定します。これにより、Visual Studio プロジェクトが作成され、ソース コード フォルダーに空の C++ クラスが 1 つ以上あるという条件が満たされます。品質 / パフォーマンス レベル、ターゲット プラットフォーム、スターター コンテンツを含めるかどうかなどを選択できます。詳細については、[Deployment](https://developers.arcgis.com/unreal-engine/deployment/) のページを参照してください。

5. ウィンドウの下部で、プロジェクトを保存する場所を選択し、プロジェクト名を付けます。[作成 (Create)] をクリックして終了します。
<img src="https://developers.arcgis.com/unreal-engine/static/87effbca79deb4fc3252b1ede4b7b2da/6e7b6/create-new-project-simulation.png" width="800px">

プロジェクト設定の詳細については、Unreal Engine 5 ドキュメント の [新規プロジェクトを作成する](https://dev.epicgames.com/documentation/ja-jp/unreal-engine/creating-a-new-project-in-unreal-engine) を参照してください。

## 3. プラグインのダウンロード
[システム要件](https://developers.arcgis.com/unreal-engine/system-requirements/)を確認し、[プラグインをダウンロード](https://developers.arcgis.com/unreal-engine/downloads/)してください。

## 4. プラグインのインストール

ArcGIS Maps SDK for Unreal Engine をプロジェクト ディレクトリにインストールする必要があります。

1. Unreal Engine を終了し、Visual Studio を終了します。次に、メインのプロジェクト ディレクトリに **Plugins** フォルダーを作成します。
    {{% notice note %}}

    作成したフォルダーの名前は必ず **Plugins** にしてください。

    {{% /notice %}}

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/create-plugin-folder.png" width="800px">

2. *.zip* ファイルから **ArcGISMapsSDK** フォルダーを解凍し、新しい **Plugins** フォルダーにコピーします。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/place-folder.png" width="800px">

    {{% notice note %}}

    プロジェクトの再構築に関する警告メッセージが表示された場合は、[Yes] をクリックして続行できます。

    {{% /notice %}}

3. プロジェクトを開いたら、メニュー バーの [編集(Edit)] -> [プラグイン(Plugins)] に移動し、**ArcGIS Maps SDK for Unreal Engine** プラグインが正しくインストールされていることを確認します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/plugins.png" width="800px">

    {{% notice note %}}

    macOS をお使いの場合は、プライバシーとセキュリティでプラグインを許可する必要があるかもしれません。

    {{% /notice %}}


### 5. シーン設定オプションを選択する

SDK には、シーン内で ArcGIS データやその他の地理空間コンテンツを使用するための 4 つのオプションが用意されています。

* [Modes Panel UI](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#modes-panel-ui) は、コードを記述せずにシーンを作成できます。
* [コンポーネント](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#components) は、**Modes Panel UI** の背後にあり、コードを記述せずにシーンを作成できます。
* [BluePrints](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#blueprints) は、Unreal Engine で提供されているノードベースのビジュアル スクリプト インターフェイスを使用してシーンを作成するオプションを提供します。
* [C++ API](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/#c-api) は、プラグインのソース コードを変更することでカスタマイズ オプションを提供します。


