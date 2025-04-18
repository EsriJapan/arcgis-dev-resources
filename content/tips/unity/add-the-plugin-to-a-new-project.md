+++
title = "新規プロジェクトにプラグインを追加"
description = "ArcGIS Maps SDK for Unity を新規プロジェクトに導入する手順を紹介します 。"
weight = 2
aliases = ["/unity/add-the-plugin-to-a-new-project/"]
+++

出典：ArcGIS Maps SDK for Unity - Guide - [Add the plugin to a new project](https://developers.arcgis.com/unity/install-and-set-up/add-the-plugin-to-a-new-project/)

**ArcGIS Maps SDK for Unity** は、ソース コードとサンプル アセットを含む Unity プラグインです。このページを始める前に、必ず[プラグインをダウンロード](https://developers.arcgis.com/downloads/#unity)してください。

## 新規プロジェクトの作成

1. 新しいプロジェクトを作成するには、**Unity Hub** を開いて [プロジェクト (Projects)] タブを選択し、[新しいプロジェクト (New project)] ボタンをクリックします。

2. ポップアップ ウィンドウで、以下を定義します。

    * エディター バージョン：**ArcGIS Maps SDK for Unity** は Unity 2022.3.x LTS および Unity 6 をサポートしています。複数の Unity エディター バージョンがインストールされている場合は、ポップアップ ウィンドウの上部でサポートされているエディター バージョンを選択してください。
    * テンプレート：プラグインは **High Definition Render Pipeline (12.x)** と **Universal Render Pipeline (12.x)** の両方をサポートしています。初めて使用する場合は、[Download template] ボタンをクリックして、これらのテンプレートをダウンロードする必要があります。**HDRP** または **URP** テンプレート以外のテンプレートを選択した場合は、[レンダー パイプライン パッケージを手動でインストール](https://developers.arcgis.com/unity/install-and-set-up/add-the-plugin-to-an-existing-project/#convert-the-project-to-urp-or-hdrp)します。(レガシー ビルトイン レンダー パイプラインはサポートされていません。)
    * プロジェクト名：プロジェクトに関連するアセット、シーン、その他のファイルを保存するメイン プロジェクト フォルダーの名前を設定します。
    * 場所：プロジェクトの保存場所を設定します。デフォルトのプロジェクトの場所は、コンピューターのホーム フォルダーに設定されています。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/create_new_project.png" width="800px">

## プラグインのインストール

Unity パッケージ マネージャー (Package Manager) を使用してプラグインをインストールします。**Unity パッケージ マネージャー (Package Manager)** の詳細については、Unity ドキュメントのトピック [Unity の Package Manager](https://docs.unity3d.com/ja/current/Manual/Packages.html) を参照してください。

### マイ アセット (My Asset) からプラグインをインストール

1. エディターでプロジェクトを開きます。
2. トップ メニューで、[ウィンドウ(Window)] > [パッケージ マネージャー(Package Manager)]を展開し、[パッケージ マネージャー (Package Manager)] ウィンドウを開きます。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/package-manager.png" width="800px">
3. Unity ドキュメントのトピック [Asset Store パッケージのインポート](https://docs.unity3d.com/ja/current/Manual/upm-ui-import.html)に従います。

プラグインがプロジェクトにインポートされると、[パッケージ (Package)] メニューから [`プロジェクト内 (In Project)`] を選択したときに、プロジェクト ウィンドウの [パッケージ (Packages)] セクションに [ArcGIS Maps SDK for Unity] フォルダーが表示されます。

### ローカルの .tgz(tarball) ファイルからプラグインをインストール

1. パッケージをインポートするプロジェクトをエディターで開きます。
2. トップ メニューで、[ウィンドウ(Window)] > [パッケージ マネージャー(Package Manager)]を展開し、[パッケージ マネージャー (Package Manager)] ウィンドウを開きます。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/package-manager.png" width="800px">
3. [パッケージ マネージャー (Package Manager)] ウィンドウの [+] アイコンをクリックします。
4. リストから [.tgz ファイルからパッケージを加える… (Add package from tarball)] を選択し、ファイル ブラウザーを表示します。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/tarball.png" width="400px">
5. .tgz(tarball) ファイルを保存したフォルダーに移動します。

プラグインがプロジェクトにインポートされると、[パッケージ (Package)] メニューから [`プロジェクト内 (In Project)`] を選択したときに、プロジェクト ウィンドウの [パッケージ (Packages)] セクションに [ArcGIS Maps SDK for Unity] フォルダーが表示されます。

## サンプル アセットのインポート

**ArcGIS Maps SDK for Unity** には、シーンに機能とビジュアル フィデリティを追加するために使用できる追加のサンプルとツールが付属しています。

<!-- 非対応バージョンにつきコメントアウト -->
<!-- **Unity 2021** でプラグインに付属するサンプル アセットをインポートするには、次の手順に従います：

1. トップ メニューで、**ウィンドウ > パッケージ マネージャー (Window > Package Manager)** を展開し、**パッケージ マネージャー (Package Manager)** ウィンドウを開きます。
2. 左側のリストから **ArcGIS Maps SDK for Unity** を選択します。
3. 右側のパネルで **サンプル (Samples)** をクリックし、セクションを展開します。
4. **Sample Content** の隣にある **インポート (Import)** ボタンをクリックします。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/import-sample-assets.png" width="800px"> -->

1. トップ メニューで、[ウィンドウ(Window)] > [パッケージ マネージャー(Package Manager)]** を展開し、[パッケージ マネージャー (Package Manager)] ウィンドウを開きます。
2. 左側のリストから [ArcGIS Maps SDK for Unity] を選択します。
3. 右側のパネルで [サンプル (Samples)] タブをクリックします。
4. [Sample Content] の隣にある [インポート (Import)] ボタンをクリックします。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/import-sample-assets-2022.png" width="800px">

サンプル アセットがプロジェクトにインポートされると、[プロジェクト (Project)] ウィンドウの [Assets] > [Samples] の下にフォルダーとそのコンテンツが表示されます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/samples-folder.png" width="800px">