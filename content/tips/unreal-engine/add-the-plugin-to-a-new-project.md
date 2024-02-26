+++
title = "新規プロジェクトにプラグインを追加"
description = "ArcGIS Maps SDK for Unreal Engine を新規プロジェクトに導入する手順を紹介します。"
weight = 2
aliases = ["/unreal-engine/add-the-plugin-to-a-new-project/"]
+++

出典：ArcGIS Maps SDK for Unreal Engine - Guide - [Add the plugin to a new project](https://developers.arcgis.com/unreal-engine/install-and-set-up/add-the-plugin-to-a-new-project/)

**ArcGIS Maps SDK for Unreal Engine** は、ソースコードとサンプルアセットを含む Unreal Engine プラグインです。このページを始める前に、必ず[プラグインをダウンロード](https://developers.arcgis.com/downloads/#unreal-engine)してください。

## 新規プロジェクトの作成

1. Unreal Engine を起動するには、**Epic Games ランチャー** を開き、**ライブラリ (Library)** をクリックします。サポートされているバージョンを選択し、**起動 (Launch)** をクリックします。Unreal Engine を起動すると、**Unreal プロジェクトブラウザ (Project Browser)** が自動的に開きます。

2. **最近利用したプロジェクト (Recent Project)** で、業種に最も適した開発カテゴリーを選択してください。どのカテゴリーを選べばよいかわからない場合は、**ゲーム (Games)** カテゴリーを選択してください。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/categories.png" width="800px">

3. リストからプロジェクトのテンプレートを選択します。プラグインを初期化するには、ブランク (Blank) のテンプレートを使用することをお勧めします。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/select-template.png" width="800px">

4. プロジェクトを **C++** プロジェクトに設定します。これにより、Visual Studio プロジェクトが作成され、ソースコード フォルダーに空の C++ クラスが 1 つ以上あるという条件が満たされます。品質 / パフォーマンス レベル、ターゲット プラットフォーム、スターター コンテンツを含めるかどうかなどを選択できます。詳細については、[Deployment](https://developers.arcgis.com/unreal-engine/deployment/) のページを参照してください。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/project-settings.png" width="800px">

5. ウィンドウの下部で、プロジェクトを保存する場所を選択し、プロジェクト名を付けます。**作成 (Create)** をクリックして終了します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/create-new-project.png" width="800px">

プロジェクト設定の詳細については、Unreal Engine 5 ドキュメント の [新規プロジェクトを作成する](https://docs.unrealengine.com/5.0/ja/creating-a-new-project-in-unreal-engine/) を参照してください。

## プラグインのインストール

ArcGIS Maps SDK for Unreal Engine をプロジェクトディレクトリにインストールする必要があります。

1. Unreal Engine を終了し、Visual Studio を終了します。次に、メインのプロジェクト ディレクトリに **Plugins** フォルダーを作成します。
    {{% notice note %}}

    作成したフォルダーの名前は必ず <b>Plugins</b> にしてください。

    {{% /notice %}}

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/create-plugin-folder.png" width="800px">

2. *.zip* ファイルから **ArcGISMapsSDK** フォルダーを解凍し、新しい **Plugins** フォルダーにコピーします。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/place-folder.png" width="800px">
    
    {{% notice note %}}

    プロジェクトの再構築に関する警告メッセージが表示された場合は、[Yes] をクリックして続行できます。

    {{% /notice %}}

3. プロジェクトを開いたら、メニューバーの **編集 -> プラグイン (Edit -> Plugins)** に移動し、**ArcGIS Maps SDK for Unreal Engine** プラグインが正しくインストールされていることを確認します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/plugins.png" width="800px">
    
    {{% notice note %}}

    macOS をお使いの場合は、プライバシーとセキュリティでプラグインをホワイトリストに登録する必要があります。

    {{% /notice %}}

## Unreal Engine 5.0 をお使いの方向け

以下の手順は、 Unreal Engine 5.0 用です。Unreal Engine 5.1 以降を使用している場合は省略できます。

1. メニューバーの **ウィンドウ > ワールドセッティング (Window -> World Settings)** を開きます。**ワールドセッティング (World Settings)** パネルが開きます。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/open-world-settings.png" width="800px">

2. **ワールドセッティング (World Settings)** パネルで、**ワールド (World)** グループに行き、**詳細設定 (Advanced)** を開きます。**ラージワールドの有効化 (Enable Large Worlds)** オプションをチェックしてください。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-add-the-plugin/enable-large-worlds.png" width="800px">

