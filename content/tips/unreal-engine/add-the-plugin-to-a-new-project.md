+++
title = "新規プロジェクトにプラグインを追加"
description = "ArcGIS Maps SDK for Unreal Engine を新規プロジェクトに導入する手順を紹介します。"
weight = 2
aliases = ["/unreal-engine/add-the-plugin-to-a-new-project/"]
+++

出典：ArcGIS Maps SDK for Unreal Engine - Guide - [Add the plugin to a new project](https://developers.arcgis.com/unreal-engine/install-and-set-up/add-the-plugin-to-a-new-project/)

**ArcGIS Maps SDK for Unreal Engine** は、ソース コードとサンプル アセットを含む Unreal Engine プラグインです。このページを始める前に、必ず[プラグインをダウンロード](https://developers.arcgis.com/downloads/#unreal-engine)してください。

## 新規プロジェクトの作成

Unreal Engine には、お客様の業種に合ったさまざまな**開発テンプレート (Developer Template)**が用意されています。 どのテンプレートを選べばよいかわからない場合は、**ゲーム テンプレート (Games Template)** と**シミュレーション テンプレート (Simulation Template)** をお勧めします。これらのテンプレートの詳細については、[Unreal Engine テンプレート リファレンス](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-templates-reference)を参照してください。

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

## シミュレーション テンプレートのシミュレーション ブランク テンプレート

Unreal Engine バージョン 5.1 以降には、さまざまなシミュレーション アプリケーション用の **シミュレーション テンプレート** が含まれています。 空、照明、体積雲、地理座標などの設定済みのシミュレーション ブランク テンプレートを活用して、プロジェクトを開始できます。

1. Unreal Engine を起動するには、**Epic Games ランチャー** を開き、[ライブラリ (Library)]をクリックします。サポートされているバージョンを選択し、[起動 (Launch)]をクリックします。Unreal Engine を起動すると、[Unreal プロジェクト ブラウザー (Project Browser)]が自動的に開きます。

2. [最近利用したプロジェクト (Recent Project)]の下で、[シミュレーション テンプレート (Simulation Template)]を選択してください。

3. [シミュレーション ブランク (Simulation Blank)]テンプレートを使用してください。

4. プロジェクトを [C++] プロジェクトに設定します。これにより、Visual Studio プロジェクトが作成され、ソース コード フォルダーに空の C++ クラスが 1 つ以上あるという条件が満たされます。品質 / パフォーマンス レベル、ターゲット プラットフォーム、スターター コンテンツを含めるかどうかなどを選択できます。詳細については、[Deployment](https://developers.arcgis.com/unreal-engine/deployment/) のページを参照してください。

5. ウィンドウの下部で、プロジェクトを保存する場所を選択し、プロジェクト名を付けます。[作成 (Create)] をクリックして終了します。
<img src="https://developers.arcgis.com/unreal-engine/static/87effbca79deb4fc3252b1ede4b7b2da/6e7b6/create-new-project-simulation.png" width="800px">

プロジェクト設定の詳細については、Unreal Engine 5 ドキュメント の [新規プロジェクトを作成する](https://dev.epicgames.com/documentation/ja-jp/unreal-engine/creating-a-new-project-in-unreal-engine) を参照してください。

## プラグインのインストール

ArcGIS Maps SDK for Unreal Engine をプロジェクトディレクトリにインストールする必要があります。

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