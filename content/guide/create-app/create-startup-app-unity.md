+++
title = "Unity"
description = "ArcGIS Maps SDK for Unity を用いたネイティブ地図アプリの作成方法を紹介します。"
Weight=9
aliases = ["/create-startup-app-unity/"]
+++

出典：ArcGIS Maps SDK for Unity - Tutorials - [Display a map(UI)](https://developers.arcgis.com/unity/maps/tutorials/display-a-map-ui/)

## マップを表示する (UI)

Unity の **Map Creator UI** と **High Definition Render Pipeline** を使用して、ベースマップ、標高ソースの設定、データレイヤーの追加、特定エリアの表示方法をご紹介します。

このチュートリアルでは、ベースマップレイヤーサービスとデータレイヤーを含むローカルシーンを Unity で作成します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/local-scene-ui.png" width="650px">

{{% notice note %}}

ArcGIS Map SDK for Unity は、現在 ESRIジャパンにおけるサポート対象外の製品です。</br>
ESRIジャパンで提供する <a href="https://www.esrij.com/services/maintenance/" style="color:#0000ff;">Esri 製品サポート サービス</a>や<a href="https://www.esrij.com/services/dev-support/" style="color:#0000ff;">開発者サポート サービス</a>はご利用いただけませんので、予めご了承ください。

{{% /notice %}}

## 前提条件


このチュートリアルを実施するには、以下が必要です。

1. ArcGIS サービスにアクセスするには、[ArcGIS Developer アカウント](https://www.esri.com/en-us/arcgis/products/arcgis-platform/overview)または [ArcGIS Online アカウント](https://www.esri.com/en-us/arcgis/products/arcgis-online/trial)と API キーが必要です。アカウントをお持ちでない場合は、[サインアップ](https://developers.arcgis.com/sign-up/) (無料) してください。アカウントの作成方法は「[開発者アカウントの作成](../../get-dev-account/)」をご覧ください。

    {{% notice note %}}

    <b>API キー</b> ページが開発者ダッシュボードに表示されない場合は、アカウントを <a href= "https://developers.arcgis.com/documentation/mapping-apis-and-services/deployment/accounts/#arcgis-developer-accounts">ArcGIS Developer アカウント</a>にアップグレードする必要があります。

    {{% /notice %}}

2. 開発環境が[システム要件](https://developers.arcgis.com/unity/reference/system-requirements/)を満たしていることを確認してください。
3. [インストールとセットアップ](../../../tips/unity/install-and-set-up/)の手順に従って、プラグインをインストールしてください。必ずサンプルアセットをインポートしてください。
4. まだ作成されていない場合は、新しい [HDRP プロジェクト](../../../tips/unity/add-the-plugin-to-a-new-project/)を作成してください。

Unity のインターフェイスに慣れていない場合は、最も一般的なエディタウィンドウとそれらを活用するための情報を [Unity マニュアル](https://docs.unity3d.com/ja/2022.3/Manual/UsingTheEditor.html) で参照してください。

## ステップ

### 新しいシーンを作成し、Map Creator UI を開く

1. 上部メニューで、**ファイル > 新しいシーン (File > New Scene)** をクリックし、ポップアップウィンドウを開きます。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/create-new-scene.png" width="350px">

2. **Basic Outdoors (HDRP)** テンプレートを選択し、**作成 (Create)** ボタンをクリックします。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/basic-outdoor-template.png" width="650px">

3. 上部メニューで、**ArcGIS Maps SDK > Map Creator** をクリックします。必要に応じて、**Map Creator UI** を開いた後にウィンドウ サイズを調整します。
    <img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/open-the-map-creator.png" width="650px">


### マップを作成する

このチュートリアルでは、ローカルシーンを作成し、円形の範囲を設定します。

1. **Map** タブをクリックし、パネルの内容を表示します。

2. **Map Type** セクションで **Local** をクリックします。

3. **Origin Position** セクションでは、GIS シーンの中心を座標とSpatial Reference Well-Known ID (WKID) で設定できます。チュートリアルでは、パラメータを以下の値に設定します :

    * Longitude : 139.745723
    * Latitude : 35.659041
    * Altitude : 0
    * Spatial Reference WKID : 4326

    spatial reference に関する情報は、[spatial references](https://developers.arcgis.com/unity/spatial-and-data-analysis/spatial-references/) のページを参照してください。

4. **Enable Map Extent** チェックボックスをオンにして、**Map Extent** セクションを表示し、マップの範囲をこれらの値に設定します :

    * Longitude : 139.745723
    * Latitude : 35.659041
    * Shape : Circle
    * Spatial Reference WKID : 4326
    * Shape Dimensions : (Radius) 5000 メートル

5. ArcGIS Map ゲームオブジェクトをシーンに追加するには、**Create Map** をクリックします。

以下が、**Map** パネルに入力した画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/create-map-local.png" width="500px">

**ヒエラルキー (Hierarchy)** ウィンドウで、作成された **ArcGISMap** ゲームオブジェクトを確認できます。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/arcgismap-game-object.png" width="650px">

**ヒエラルキー (Hierarchy)** ウィンドウで **ArcGISMap** ゲームオブジェクトをクリックすると、ゲームオブジェクトに **ArcGIS Map** コンポーネントがアタッチされていることがわかります。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/no-api-arcgis-map-component.png" width="650px">

**ArcGIS Map** の作成の詳細については、[Maps](https://developers.arcgis.com/unity/maps/) のページを参照してください。


### カメラの作成とセットアップ

**ArcGIS Maps SDK for Unity** は、カメラに近いエリアにはより高い解像度の LOD を表示し、カメラから遠いエリアにはより低い解像度の LOD を表示します。

1. Camera タブをクリックする。
2. **Camera Position** はカメラの初期視点を定義します。パラメータをこれらの値に設定します :

    * Longitude : 139.745723
    * Latitude : 35.659041
    * Altitude : 290
    * Spatial Reference WKID : 4326

3. **Camera Rotation** はカメラの角度を定義します。パラメータをこれらの値に設定します :

    * Heading : 270
    * Pitch : 93
    * Roll : 0

4. **Create Camera** ボタンをクリックします。

以下が、Camera パネルに入力した画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/create-tokyo-camera.png" width="400px">

**ヒエラルキー (Hierarchy)** ウィンドウで、**Main Camera** ゲームオブジェクトが **ArcGISCamera** ゲームオブジェクトに変換され、**ArcGISMap** ゲームオブジェクトの下に移動していることがわかります。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/arcgiscamera-game-opject.png" width="400px">

{{% notice note %}}

<b>ArcGISCamera</b> ゲームオブジェクトを右クリックし、ポップアップメニューの <b>Align View to Selected</b> を選択すると、<b>Scene</b> ビューのカメラがその位置に移動します。ピッチ、ヘディング、ロールも調整したい場合は、<b>Scene</b> ビューでマウスの右ボタンを押しながら調整してください。

{{% /notice %}}

この時点で、追加するベースマップとデータレイヤーを見るために、**Sky and Fog Volume** の **フォグ (Fog)** を無効にするとよいでしょう。このチュートリアルの最後では、ライティングを調整します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/disable-fog.png" width="500px">

カメラについての詳細は、[Camera](https://developers.arcgis.com/unity/maps/camera/) のページを参照してください。


### ベースマップの設定

このチュートリアルでは、プリセットオプションからベースマップを選択します。

1. **Basemap** タブをクリックし、パネルの内容を表示します。

2. プリセットのベースマップギャラリーから **Imagery** ベースマップを選択します。

以下が、プリセットからベースマップを **Imagery** に設定した画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/set-basemap-apikey.png" width="450px">


### API キーの設定

前のセクションで選択したプリセットベースマップには API キーが必要です。

1. [開発者ダッシュボード](https://developers.arcgis.com/dashboard/)にアクセスして API キーを取得してください。

2. **Auth** タブをクリックしてパネルの内容を表示します。

3. **API Key** セクションで API キーを設定します。

このスクリーンショットで `Paste your API key here` と表示されているフィールドに API キーが入力されていることを確認してください。API キーの取得方法については、UI の **[API キーの取得](../../get-api-key/)** をクリックしてください。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/api-key-ui.png" width="400px">

Unity プロジェクト内の複数のシーンに対してグローバル API キーを設定するもう1つの方法は、プロジェクト設定です。API キーの詳細については、[API キー](https://developers.arcgis.com/unity/authentication/#api-keys)のセクションを参照してください。

**Basemap** タブに戻ると、以前はグレーアウトしていたベースマップアイコンが有効になり、API キーが正常に登録されたことがわかります。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/set-basemap.png" width="450px">

この時点で、ローカルエクステントを持つマップデータが表示されるはずです。**シーン (Scene)** ビューに何も表示されない場合は、**ヒエラルキー (Hierarchy)** ウィンドウを開き、**ArcGIS Camera** をダブルクリックしてエディタカメラの位置を移動し、角度を調整してマップを表示します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/map-preview1.png" width="500px">

{{% notice tip %}}

<b>シーン (Scene)</b> ビューにベースマップが表示されない場合は、<b>ヒエラルキー (Hierarchy)</b> ウィンドウで <b>ArcGISCamera</b> ゲーム オブジェクトをダブルクリックして、設定した位置にカメラビューを設定し、必要に応じてマウスの右ボタンを押しながらカメラのピッチ、ヘディング、ロールを調整します。

{{% /notice %}}


### 標高の設定

このチュートリアルでは、デフォルトの標高を使って地形を定義します。

1. **Elevation** タブをクリックし、パネルの内容を表示します。

2. **Terrain 3D** が選択され、**Enable All** のチェックボックスがチェックされていることを確認します。

以下が、設定した Elevation パネルの画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/set-elevation.png" width="450px">


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

2. 右下の **Add New** ボタンを押して、**Add New Layer** ポップアップウィンドウを開きます。

3. **Type** のドロップダウンリストから適切なレイヤータイプを選択します。

4. 3D オブジェクトシーンレイヤーを追加するには、サービスの URL を **Source** フィールドに入力します。

5. **Name** フィールドにレイヤー名を入力します。

6. **Add** ボタンをクリックして、レイヤーをマップに追加します。レイヤーが追加されると、**Layers** セクションに表示されます。

7. **Opacity** スライダを動かすか、**Opacity** フィールドに正確な値を入力して、レイヤーの不透明度を設定します。

以下が、Layers パネルの画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/add-data-1_5_0.png" width="400px">


### 空とライティングの調整

Unity には空とライティングのシステムがあります。詳しくは [Sky and lighting](https://developers.arcgis.com/unity/maps/sky-and-lighting/) のページを参照してください。このチュートリアルでは、テンプレートによって追加されたゲームオブジェクトの設定を調整します。

#### 太陽の調整

1. **ヒエラルキー (Hierarchy)** ウィンドウで、**Sun** ゲームオブジェクトをクリックします。

2. **ヒエラルキー (Hierarchy)** ウィンドウの **トランスフォーム (Transform)** セクションで、回転を以下の値に設定します。
    * X : `36`
    * Y : `110`
    * Z : `85`
3. **放出 (Emission)** セクションを開き、**強さ (Intensity)** の値を`10000`に設定します。

以下が、設定した **Sun** ゲームオブジェクトの画像です。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/sun-settings.png" width="500px">

#### 空と霧のボリュームの調整

1. **ヒエラルキー (Hierarchy)** ウィンドウの **Sky and Fog Volume** をクリックします。

2. **ArcGIS Maps SDK for Unity** には、HDRP 用の Sky and Fog Volume のサンプルプロファイルが用意されています。**インスペクター (Inspector)** ウィンドウの **Volume** セクションで、プロファイル名の横にあるアイコンをクリックします。

3. ポップアップウィンドウで **Sky and Fog Settings SampleScenes Profile** を選択します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/select-sample-volume-profile.png" width="450px">

### カメラコントローラーのアタッチ

エディタモードが有効になっている間、ビューポート内をナビゲートするために、**シーン (Scene)** ビューカメラがあります。プレイモードでは、シーンを探索するためにカメラコントローラーをアタッチする必要があります。このチュートリアルでは、**ArcGIS Maps SDK for Unity** のサンプルアセットからコントローラをアタッチします。

1. **ヒエラルキー (Hierarchy)** ウィンドウで **ArcGISCamera** をクリックします。

2. **インスペクター (Inspector)** ウィンドウで、**コンポーネントを追加 (Add Component)** ボタンをクリックします。

3. **ArcGIS Camera Controller** を検索し、**ArcGISCamera** ゲームオブジェクトにアタッチします。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/unity-startup-app/attach-camera-controller.png" width="450px">

**Map Creator UI** でマップの設定が完了しました。**Toolbar** の **Play** アイコンをクリックすると、**ゲーム (Game)** ビューにマップが表示されます。

**WASD** キーで左右前後に移動します。マウスの左ボタンでシーンをパン、右ボタンでオービット、スクロールホイールで拡大・縮小します。