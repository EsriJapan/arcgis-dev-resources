+++
title = "Unreal Engine"
description = "ArcGIS Maps SDK for Unreal Engine を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight=10
aliases = ["/create-startup-app-unreal-engine/"]
+++

出典：ArcGIS Maps SDK for Unreal Engine - Tutorials - [Display a map (UI)](https://developers.arcgis.com/unreal-engine/maps/tutorials/display-a-map-ui/)

## マップを表示する (UI)

**Modes Panel UI** を使用したベースマップ、標高ソースの設定、データレイヤーの追加、特定エリアの表示方法をご紹介します。

このチュートリアルでは、ベースマップ レイヤーサービスとデータレイヤーを含むローカルシーンを Unreal Engine で作成します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/local-scene-ui.png" width="650px">

{{% notice note %}}

ArcGIS Map SDK for Unreal Engine は、現在 ESRIジャパンにおけるサポート対象外の製品です。</br>
ESRIジャパンで提供する <a href=https://www.esrij.com/services/maintenance/>Esri 製品サポート サービス</a>や<a href=https://www.esrij.com/services/dev-support/>開発者サポート サービス</a>はご利用いただけませんので、予めご了承ください。

{{% /notice %}}

## 前提条件

このチュートリアルを実施するには、以下が必要です。

1. ArcGIS サービスにアクセスするには、[ArcGIS Developer アカウント](https://www.esri.com/en-us/arcgis/products/arcgis-platform/overview)または [ArcGIS Online アカウント](https://www.esri.com/en-us/arcgis/products/arcgis-online/trial)と API キーが必要です。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/) (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。

    {{% notice note %}}

    <b>API キー</b> ページが開発者ダッシュボードに表示されない場合は、アカウントを <a href= "https://developers.arcgis.com/documentation/mapping-apis-and-services/deployment/accounts/#arcgis-developer-accounts">ArcGIS Developer アカウント</a>にアップグレードする必要があります。

    {{% /notice %}}

2. 開発環境が[システム要件](https://developers.arcgis.com/unreal-engine/reference/system-requirements/)を満たしていることを確認してください。
3. [インストールとセットアップ](../../../tips/unreal-engine/install-and-set-up/)の手順に従って、プラグインをインストールしてください。必ずサンプルアセットをインポートしてください。
4. [シーン設定オプション](https://developers.arcgis.com/unreal-engine/install-and-set-up/scene-setting-options/)のページを確認してください。

Unreal Engine のインターフェースに慣れていない場合は、最も一般的なエディターパネルとその活用方法について、[Unreal Editor のインターフェース](https://docs.unrealengine.com/5.0/ja/unreal-editor-interface/) を参照してください。

## ステップ

### 新しいレベルを作成し、Modes Panel UI を開く

{{% notice note %}}

Unreal Engine 5.1 または 5.2 を使用している場合は、手順 3 と 4 を省略できます。

{{% /notice %}}

1. メニューバーの **ファイル (File)** をクリックし、**新規レベル (New Level)** を選択します。

2. ポップアップウィンドウで **空のレベル (Empty Level)** を選択します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/new-level.png" width="650px">

3. メニューバーの **ウィンドウ > ワールドセッティング (Window ‐> World Settings)** を開きます。**ワールドセッティング (World Settings)** パネルが開きます。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/open-world-settings.png" width="650px">


4. **ワールドセッティング (World Settings)** パネルで、**ワールド (World)** グループに行き、**詳細設定 (Advanced)** を開きます。**ラージワールドの有効化 (Enable Large Worlds)** オプションをチェックします。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/enable-large-worlds.png" width="650px">

5. メインツールバーの **モード選択 (Select Modes)** ドロップダウンをクリックし、**ArcGIS Maps SDK** を選択します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/toolbar.png" width="650px">

6. Unreal Editor インターフェースの左側に、**Modes Panel UI** が開きます。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/open-modes-panel.png" width="650px">


### マップの作成

1. **Modes Panel UI** の **Map** タブをクリックします。
2. **Map Type** で `Local` を選択します。
3. **Origin Position** セクションでは、GIS シーンの中心を座標と Spatial Reference Well-Known ID (WKID) で設定できます。チュートリアルでは、パラメータをこれらの値に設定します：

    * Longitude : 139.745723
    * Latitude : 35.659041
    * Altitude : 0
    * Spatial Reference WKID : 4326

    spatial reference については、[spatial references](https://developers.arcgis.com/unreal-engine/spatial-and-data-analysis/spatial-references/) のページを参照してください。

4. **Enable Extent** チェックボックスをオンにすると、**Map Extent** セクションが表示されます。

5. **Map Extent** で、マップの範囲をこれらの値に設定します :

    * Longitude : 139.745723
    * Latitude : 35.659041
    * Shape : Circle
    * Spatial Reference WKID : 4326
    * Shape Dimensions : (Radius) 5000 メートル

    以下が、**Map** パネルに入力した画像です。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/tokyo-map-tab-local.png" width="650px">

6. **Create** ボタンをクリックします。**アウトライナー (Outliner)** パネルに、**ArcGISMapActor** が作成されます。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/arcgismap-actor.png" width="650px">

### カメラの作成と設定

**ArcGIS Maps SDK for Unreal Engine** は、カメラに近いエリアにはより高い解像度の LOD を表示し、カメラから遠いエリアにはより低い解像度の LOD を表示します。

1. **Camera** タブをクリックします。
2. **Camera Position** でカメラの初期視点を定義します。パラメータをこれらの値に設定します：

    * Longitude : 139.745723
    * Latitude : 35.659041
    * Altitude : 290
    * Spatial Reference WKID : 4326

3. **Camera Rotation** でカメラの角度を定義します。

    * Heading : 270
    * Pitch : 93
    * Roll : 0

    以下が、**Camera** パネルに入力した画像です。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/camera-tab-tokyo.png" width="650px">

4. **Create** ボタンをクリックします。**アウトライナー (Outliner)** パネルに、**Default Pawn** アクターが作成されます。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/default-pawn.png" width="650px">

この時点では、レベルはまだ空です。これからのチュートリアルステップで、マップデータがレベルに追加されます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/level-preview-tokyo1.png" width="650px">

### ベースマップとAPIキーの設定

このチュートリアルでは、API キーが必要なベースマップを選択します。

1. **Basemap** タブをクリックし、パネルの内容を表示します。

2. プリセットのベースマップリストから **Imagery** ベースマップを選択します。プリセットのベースマップから **Imagery** に設定した結果です。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/set-basemap-ui-apikey.png" width="650px">

3. [開発者ダッシュボード](https://developers.arcgis.com/dashboard/)にアクセスし、API キーを取得してください。

4. **Auth** タブをクリックしてパネルの内容を表示します。

5. **API Key** セクションで API キーを設定します。

    API キーが、このスクリーンショットの `Paste your API key here` と表示されているフィールドに入力されていることを確認してください。API キーの取得方法については、UI の [**API キーの取得**](../../get-api-key/)をクリックしてください。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/api-key-ui.png" width="650px">

6. **Basemap** タブに戻ると、以前はグレー表示だったベースマップアイコンが有効になり、API キーが正常に登録されたことがわかります。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/set-basemap-ui.png" width="650px">

Unreal プロジェクト内の複数のレベルに対してグローバル API キーを設定するもう 1 つの方法は、プロジェクト設定を使用することです。API キーの詳細については、[API キー](https://developers.arcgis.com/unreal-engine/authentication/#api-keys)のセクションを参照してください。

### 標高の設定

このチュートリアルでは、デフォルトの標高を使って地形を定義します。

1. **Elevation** タブをクリックし、パネルの内容を表示します。

2. **Terrain 3D** が選択され、**Enable All** チェックボックスがチェックされていることを確認します。

以下が、Elevation パネルに入力した画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/set-elevation.png" width="650px">

### データレイヤーの追加

ArcGIS Online から使用できるデータを追加します。

* ArcGIS Online Item : [東京都23区・八王子市南大沢 3D 都市モデル（Project PLATEAU）](https://www.arcgis.com/home/item.html?id=ca7baa183c6e4c998a668a6fadc5fc49)

    * Layer name : `Tokyo Model`
    * Type : `ArcGIS 3DObject Scene Layer`
    * ArcGIS Online サービスの URL（ Source ）:
    <pre><code>https://tiles.arcgis.com/tiles/wlVTGRSYTzAbjjiC/arcgis/rest/services/13100_13201_Tokyo-23ku_Minamiosawa_Building/SceneServer</code></pre>
    * Opacity : `1.0`

以下の手順でレイヤーを追加します。

1. **Layers** タブをクリックします。

2. **Add New Data** セクションで、**Type** のドロップダウンリストから適切なレイヤータイプを選択します。

3. 3D オブジェクトシーンレイヤーを追加するには、サービスの URL を **Source** フィールドに入力します。

4. Name にレイヤー名を入力します。

5. マップにレイヤーを追加するには、**Add** ボタンをクリックします。レイヤーが追加されると、**Layers** セクションに表示されます。

6. スライダーをドラッグして **Opacity** を設定します。

7. **Is Visible** チェックボックスを使用して、レイヤーの表示 / 非表示を切り替えます。

以下が、Layers パネルに入力した画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/add-data.png" width="650px">

### 空とライティングの設定

1. メインツールバーの 作成 (Create) ショートカットから、**ライト (Light) > Directional Light** を選択し、レベルにドラッグして **DirectionalLight** を作成します。Directional Light の詳細については、[ライトのタイプ](https://docs.unrealengine.com/5.0/ja/BuildingWorlds/LightingAndShadows/LightTypes/)を参照してください。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/unreal-direct-light.png" width="650px">

2. **アウトライナー (Outliner)** で **DirectionalLight** を選択し、**詳細パネル (Details)** の **トランスフォーム (Transform)** セクションを開きます。

3. **位置 (Location)** をリセットし、**回転 (Rotation)** を設定します：

    * X: 0
    * Y: -28
    * Z: -28

4. 可動性 (Mobility) を **ムーバブル (Movable)** に設定します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/transform-light-unreal.png" width="650px">

5. **ライト (Light)** セクションで、**Intensity Value** を`3.1416`に変更します。

6. **カスケードシャドウマップ (Cascaded Shadow Maps)** セクションで、**Dynamic Shadow Distance MovableLight** を `2000000` に変更します。

7. **大気と雲 (Atmosphere and Cloud)** セクションで、**Atmosphere Sun Light** を有効にします。

8. **アクタ (Actor) > Spawn Collision Handling Method** セクションで、**Always Spawn, Ignore Collisions** を選択します。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/actor-light-unreal.png" width="650px">

9. メインツールバーの Create (作成) ショートカットから、**ライト (Light) > Sky Light** を選択し、レベルにドラッグして **SkyLight** を作成します。SkyLight の詳細については、[ライトのタイプ](https://docs.unrealengine.com/5.0/ja/BuildingWorlds/LightingAndShadows/LightTypes/)を参照してください。

10. **トランスフォーム (Transform)** セクションで、**位置 (Location)** をリセットし、可動性 (Mobility) を **ムーバブル (Movable)** に設定します。

11. **ライト (Light)** セクションで、**Real Time Capture** を有効にします。

    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/skylight.png" width="650px">

12. メインツールバーの Create (作成) ショートカットから、**ビジュアルエフェクト (Visual Effects) > Sky Atmosphere** を選択し、レベルにドラッグして **SkyAtmosphere** を作成します。Sky Atmosphere の詳細については、[フォグのエフェクト](https://docs.unrealengine.com/5.0/ja/BuildingWorlds/FogEffects/)を参照してください。

13. **Planet** セクションで、**Ground Radius** を `6378.137207` に変更します。

この時点で、エクステントの設定で切り取られたマップデータが表示されるはずです。**アウトライナー (Outliner)** パネルで、**Default Pawn** をダブルクリックして、エディターカメラを設定されたカメラ位置に移動します。マウスの右ボタンを押しながら **WASD** キーを使って移動するか、マウスの左ボタンを押しながらエディターモード中に周囲を見回します。エディターモード中に **ビューポート (Viewport)** のカメラ移動速度を上げるには、**ビューポート (Viewport)** 右上の **カメラ速度 (Camera Speed)** アイコンをクリックし、スライダーをドラッグして値を上げます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unreal-engine-startup-app/level-preview2.png" width="650px">

### Default Pawn を ArcGIS Pawn に置き換える

エディターモードでは、Unreal Engine の標準の [ビューポート制御](https://docs.unrealengine.com/5.0/ja/viewport-controls-in-unreal-engine/) を使用してシーンを自由に移動できます。プレイモードでシーンを移動するには、**Pawn** 用の独自のコントローラーコンポーネントを作成するか、**Default Pawn** の移動コンポーネントを修正します。また、**Default Pawn** を Samples で使用されているサンプル **ArcGIS Pawn** に置き換えることもできます。サンプル **ArcGIS Pawn** については、 [**ArcGIS Pawn**](https://developers.arcgis.com/unreal-engine/maps/camera/#arcgis-pawn) のセクションを参照してください。

1. **コンテンツ ドロワー (Content Drawer)** で以下の場所を開きます。

    <blockquote>
    プラグイン > ArcGIS Maps SDK for Unreal Engine C++ クラス > ArcGISSamples > Public
    </blockquote>

2. **ArcGIS Pawn** をクリックして選択します。選択されると背景色が青に変わります。

3. **アウトライナー (Outliner)** パネルで **Default Pawn** を右クリックします。

4. **選択中のアクタを置換 (Replaced Selected Actor with)** をクリックし、**ArcGIS Pawn** を選択します。

これで、**Modes Panel UI** を使用したローカル シーンの構成は完了です。

メインツールバーの **プレイ (Play)** アイコンをクリックし、**WASD** キーで移動します。マウスの右ボタンを押したままカーソルを動かして周囲を見渡し、マウスの左ボタンを押したままカーソルを動かしてパンします。