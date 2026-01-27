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

### 1.Unity のインストール

このプラグインは Unity 2022.3.x と Unity 6 でサポートしています。インストールされていない場合は、[Unity をインストール](https://unity.com/ja/download)してください。

以下の手順は、プラグインを新しいプロジェクトにインストールする方法を説明します。既存のプロジェクトがある場合は、その[プロジェクトにプラグインをインストール](https://developers.arcgis.com/unity/install-and-set-up/add-the-plugin-to-an-existing-project/)できます。

### 2.プラグインのインストール

1. 新しいプロジェクトを作成するには、**Unity Hub** を開き、[プロジェクト] タブを選択し、[新しいプロジェクト] ボタンをクリックします。

2. ポップアップ ウィンドウで、以下の設定を定義してください。
    * エディター バージョン: ArcGIS Maps SDK for Unity は、Unity 2022.3 LTS、6.0 LTS、および 6.1 をサポートしています。複数の Unity エディター バージョンがインストールされている場合、ポップアップ ウィンドウの上部でサポートされているエディター バージョンを選択してください。
    * テンプレート: このプラグインは、High Definition Render Pipeline (12.x) と Universal Render Pipeline (12.x) の両方をサポートしています。High Definition 3D Core または Universal 3D Core テンプレートをダウンロードできます。これらのテンプレート以外のテンプレートを選択した場合、レンダリング パイプライン パッケージを手動でインストールする必要があります。（レガシー ビルトイン レンダリング パイプラインはサポートされていません。）
    * プロジェクト名: プロジェクトのメイン フォルダーの名前を設定します。このフォルダーには、プロジェクトに関連するアセット、シーン、その他のファイルが含まれます。
    * 場所: プロジェクトがコンピューターのファイル システム内に保存されている場所。デフォルトのプロジェクトの場所は、コンピュータのホーム フォルダーに設定されています。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/create_new_project.png" width="800px">

### 3. プラグインのダウンロードとインストール

プラグインは、[Unity Asset Store](https://assetstore.unity.com/packages/tools/integration/arcgis-maps-sdk-for-unity-258537) または[ダウンロード ページ](https://developers.arcgis.com/unity/downloads/)からダウンロードできます。

#### Unity Asset Store からダウンロードする

1. [Unity Asset Store](https://assetstore.unity.com/packages/tools/integration/arcgis-maps-sdk-for-unity-258537) からプラグインをダウンローします。
2. ダウンロード後、上部メニューの [ウィンドウ（Window）] > [パッケージ マネージャー（Package Manager）] > [マイ アセット（My Assets）]を展開し、ダウンロードしたアセットを開きます。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/package-manager.png" width="800px">
3. Unity ドキュメントの [Importing an Asset Store package](https://docs.unity3d.com/6000.0/Documentation/Manual/upm-ui-import.html) の手順に従ってください。

プラグインがプロジェクトにインポートされると、[パッケージ (Package)] メニューから [`プロジェクト内 (In Project)`] を選択したときに、プロジェクト ウィンドウの [パッケージ (Packages)] セクションに **ArcGIS Maps SDK for Unity** フォルダーが表示されます。

#### ダウンロード ページからダウンロードする

1. [ダウンロード ページ](https://developers.arcgis.com/unity/downloads/)からプラグインをダウンロードしてください。

2. ダウンロード後、上部メニューから[ウィンドウ（Window）] > [パッケージ マネージャー（Package Manager）] をクリックして、[パッケージ マネージャー（Package Manager）] ウィンドウを開きます。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/package-manager.png" width="800px">

3. [パッケージ マネージャー（Package Manager）] ウィンドウの [+] アイコンをクリックします。

4. リストから [.tgz ファイルからパッケージを加える… (Add package from tarball)] を選択し、ファイル ブラウザーを表示します。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/tarball.png" width="400px">

5. .tgz(tarball) ファイルを保存したフォルダーに移動します。

プラグインがプロジェクトにインポートされると、[パッケージ (Package)] メニューから [`プロジェクト内 (In Project)`] を選択したときに、プロジェクト ウィンドウの [パッケージ (Packages)] セクションに **ArcGIS Maps SDK for Unity** フォルダーが表示されます。

### 4. サンプル アセットのインポート

**ArcGIS Maps SDK for Unity** には、シーンに機能とビジュアル フィデリティーを追加するために使用できる追加のサンプルとツールが付属しています。

以下の方法で、プラグインに付属しているサンプルアセットをインポートします。

1. トップ メニューで、[ウィンドウ(Window)] > [パッケージ マネージャー(Package Manager)] を展開し、[パッケージ マネージャー (Package Manager)] ウィンドウを開きます。
2. 左側のリストから [ArcGIS Maps SDK for Unity] を選択します。
3. 右側のパネルで [サンプル (Samples)] タブをクリックします。
4. [Sample Content] の隣にある [インポート (Import)] ボタンをクリックします。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/import-sample-assets-2022.png" width="800px">

サンプル アセットがプロジェクトにインポートされると、[プロジェクト (Project)] ウィンドウの [Assets] > [Samples] の下にフォルダーとそのコンテンツが表示されます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-add-the-plugin/samples-folder.png" width="800px">

### 5. シーン設定オプションの選択

プラグインは、シーン内で ArcGIS データおよびその他の地理空間コンテンツを使用するための 3 つのオプションを提供します。

* [Map Creator UI](https://developers.arcgis.com/unity/install-and-set-up/scene-setting-options/#map-creator-ui)では、コードを一切書かずにシーンを作成するオプションが提供されます。
* [コンポーネント](https://developers.arcgis.com/unity/install-and-set-up/scene-setting-options/#components)は、シーン内のゲームオブジェクトに添付できます。
* [C# API](https://developers.arcgis.com/unity/install-and-set-up/scene-setting-options/#c-api) では、プラグインのソースコードを修正することでカスタマイズ オプションが利用可能です。

