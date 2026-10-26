+++
title = "カスタム フォント"
description = "独自のフォントを使用する手順を紹介します。"
weight = 7
aliases = ["/javascript/custom-font/"]
+++

ArcGIS Maps SDK for JavaScript でラベルやテキスト シンボルに独自のフォントを使用する場合は、ビューおよび使用する機能に応じた形式のフォント ファイルを用意する必要があります。 

2D の `MapView` でクライアント サイドで描画されるラベルや `TextSymbol` では、`pbf` 形式のフォントが使用されます。3D の `SceneView` および `renderPreviewHTML()` では、`woff2` などの Web フォントが使用されます。

デフォルトでは、これらのフォント ファイルは Esri が `https://static.arcgis.com/fonts` でホストしているものを使用できます。
使用可能なフォントの一覧は、Esri の[ガイド](https://developers.arcgis.com/javascript/latest/labeling/)で確認してください。
デフォルトで提供されていないフォントを使用する場合は、必要な形式のフォント ファイルを作成して Web サーバーから配信します。このガイドでは、独自のフォントを `pbf` および `woff2` 形式へ変換し、ArcGIS Maps SDK for JavaScript から参照する手順を紹介します。

{{< callout type="info" >}}

本ガイドでご紹介する手順に関しては ESRIジャパンの技術サポート サービスの対象外となります。予めご了承ください。また、フォントの変換・配置を行う場合は、利用されるフォントの利用規約を予めご確認ください。

{{< /callout >}}


## フォント ファイルの作成
### 使用するファイル形式
ArcGIS Maps SDK for JavaScript で使用されるフォント ファイルは `pbf`、`woff2` の 2 種類ありますが、これはどのような状況でフォントを使用するかによって異なります。

2D の [`MapView`](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-map/)では、[`MapImageLayer`](https://developers.arcgis.com/javascript/latest/references/core/layers/MapImageLayer/) 以外のすべてのレイヤーおよび [`TextSymbol`](https://developers.arcgis.com/javascript/latest/references/core/symbols/TextSymbol/) に `pbf` 形式のフォント ファイルが使用され、[`renderPreviewHTML()`](https://developers.arcgis.com/javascript/latest/references/core/symbols/support/symbolUtils/#renderPreviewHTML) には `woff2` 形式が使用されます。

3D の [SceneView](https://developers.arcgis.com/javascript/latest/references/map-components/components/arcgis-scene/) では、[`MapImageLayer`](https://developers.arcgis.com/javascript/latest/references/core/layers/MapImageLayer/) 以外のすべてのレイヤーおよび [`TextSymbol3DLayer`](https://developers.arcgis.com/javascript/latest/references/core/symbols/TextSymbol3DLayer/) に `ttf`、`otf`、`woff`、または `woff2` 形式のフォント ファイルが使用され、[`renderPreviewHTML()`](https://developers.arcgis.com/javascript/latest/references/core/symbols/support/symbolUtils/#renderPreviewHTML) には `woff2` 形式が使用されます。また、3D の SceneView では、https://static.arcgis.com/fonts にあるフォント ファイルは `woff2` 形式でのみ使用されます。

デフォルトで利用可能なフォントの一覧は、Esri の[ガイド](https://developers.arcgis.com/javascript/latest/labeling/)で確認してください。これらのフォント ファイルは Esri が `https://static.arcgis.com/fonts` でホストしているものを使用でき、アプリでラベルを描画するには、この URL へアクセスできる必要があります。
この URL にアクセスできない場合、たとえばネットワークから切断されたオフライン環境の場合、またはこの URL でホストされていないフォントを使用したい場合は、[config.fontsUrl](https://developers.arcgis.com/javascript/latest/references/core/config/#Config-fontsUrl) プロパティを設定することで独自のフォント ファイルを参照するように構成できます。フォントを表示するには、正しいファイル形式のフォント ファイルを用意する必要があります。使用するフォント形式は、ビューと対象機能によって異なります。必要な形式と主な取得元については、次の表を参照してください。

| ビュー     | 対象クラスまたは機能             | 使用する形式             | 主な取得元                     |
| ------- | ---------------------- | ------------------ | ------------------------- |
| 2D および 3D | `MapImageLayer`        | TTF、OTF、WOFF、WOFF2 | ユーザー環境および Web ブラウザー         |
| 2D および 3D | `renderPreviewHTML()`  | WOFF2              | Esri または独自のフォントサーバー        |
| 2D      | `MapImageLayer` 以外のレイヤー | PBF                | Esri または独自のフォントサーバー        |
| 3D      | `MapImageLayer` 以外のレイヤー | TTF、OTF、WOFF、WOFF2 | ユーザー環境、Esri または独自のフォントサーバー |


### フォントの入手
今回は [Google Fonts](https://fonts.google.com/) からフォントをダウンロードして `pbf` または `woff2` 形式に変換します。

![](https://apps.esrij.com/arcgis-dev/guide/img/javascript/CustomFont/download_font.png)


### pbf フォントの作成
ArcGIS Maps SDK for JavaScript の 2D 表示で独自のフォントを使用する場合は、`pbf` 形式で作成されたフォント ファイルを用意します。`pbf` ファイルは符号付き距離フィールドのセットとして以下の URL で配信する必要があります。これは Mapbox GL JS のスタイル仕様と同じです。  
`https://<サーバー名>/fonts/<フォント スタック>/<ユニコード文字範囲>.pbf`

本手順では [Protobuf SDF Font Glyph Builder](https://github.com/stadiamaps/sdf_font_tools/tree/main/build_pbf_glyphs) コマンドライン ツールを使って `pbf` 形式のフォント ファイルを作成します。

{{< callout type="info" >}}

Protobuf SDF Font Glyph Builder (build_pbf_glyphs) は、Rust で作成されたコマンドライン ツールです。本記事では、Ubuntuなどの `apt` パッケージマネージャーを使用できる Debian 系 Linux 環境を前提とし、ターミナル上で操作します。  
Windows 上で直接インストールする場合は、Rust に加えて、Microsoft C++ Build Tools などのビルド環境が必要です。

{{< /callout >}}

1. ビルドに必要なパッケージのインストール  
最初にパッケージ情報を更新します。

    ```bash
    sudo apt update
    ```

    続いて、コンパイラー、`CMake`、`curl`、`zlib` の開発用ファイルなどをインストールします。

    ```bash
    sudo apt install -y \
      build-essential \
      cmake \
      pkg-config \
      curl \
      zlib1g-dev
    ```

2. Rust のインストール  
Protobuf SDF Font Glyph Builder は [Rust](https://rust-lang.org/ja/) で作成されているため、Rust のビルド環境をインストールします。  

    ```bash
    curl --proto '=https' --tlsv1.2 -sSf \
      https://sh.rustup.rs | sh
    ```

    インストール後、現在のターミナルに環境変数を反映します。

    ```bash
    source "$HOME/.cargo/env"
    ```

3. Protobuf SDF Font Glyph Builder のインストール  
`Cargo` を使用して Protobuf SDF Font Glyph Builder をインストールします。

    ```bash
    cargo install build_pbf_glyphs
    ```

    {{< callout type="info" >}}

    インストールされるバージョンによって、コマンドのオプションや動作が記事の記載と異なる場合があります。本記事の動作確認バージョンは 1.5.1 です。

    {{< /callout >}}


4. 作業フォルダーの作成  
変換元フォント用のフォルダーと、変換結果の出力フォルダーを作成します。

    ```bash
    mkdir -p ~/pbf-font-work/fonts
    mkdir -p ~/pbf-font-work/glyphs
    ```

5. ttf ファイルの配置  
事前にダウンロードしたフォント ファイルを手順 4 で作成した fonts フォルダーにコピーします。

    ```bash
    cp \
      <ダウンロード済みフォント ファイルのパス>/NotoSerifJP-Regular.ttf \
      ~/pbf-font-work/fonts/
    ```

6. pbf ファイルへ変換  
次のコマンドを実行します。

    ```bash
    build_pbf_glyphs \
      ~/pbf-font-work/fonts \
      ~/pbf-font-work/glyphs
    ```

    基本的なコマンド形式は次のとおりです。

    ```bash
    build_pbf_glyphs <入力フォルダー> <出力フォルダー>
    ```

    変換が完了したら、出力結果を確認します。

    ```bash
    find ~/pbf-font-work/glyphs -maxdepth 2 -type f | head -n 20
    ```

    次のように、フォント名のサブ フォルダー内へ Unicode の文字範囲ごとの `pbf` ファイルが生成されていれば成功です。

    ```
    glyphs/
    └── Noto Serif JP Regular/
        ├── 0-255.pbf
        ├── 256-511.pbf
        ├── 512-767.pbf
        └── ...
    ```

    既存の `pbf` ファイルを再生成する場合は、`--overwrite` オプションを指定します。

    ```shell
    build_pbf_glyphs \
      --overwrite \
      ~/pbf-font-work/fonts \
      ~/pbf-font-work/glyphs
    ```


7. Web サーバーにフォントを配置  
ArcGIS Maps SDK for JavaScript から利用できるように、生成した `pbf` ファイルを Web サーバーに配置します。  
たとえば次の構成にします。

    ```
    fonts/
    └── NotoSerifJP-regular/
        ├── 0-255.pbf
        ├── 256-511.pbf
        ├── 512-767.pbf
        └── ...
    ```

    ![](https://apps.esrij.com/arcgis-dev/guide/img/javascript/CustomFont/server_font_pbf.png)

    {{< callout type="info" >}}

    フォントを配置するフォルダー名は <フォント ファミリー>-<ウェイト>-<スタイル> の形式 (例：arial-bold-italic) としてください。なお <スタイル> は省略可能です。

    {{< /callout >}}

    {{< callout type="info" >}}

    必要に応じて、Web サーバーの MIME タイプに .pbf (binary/octet-stream) を登録してください。

    {{< /callout >}}
    

### woff2 フォントの作成
ArcGIS Maps SDK for JavaScript の 3D 表示で独自のフォントを使用する場合は、Web フォントとして参照できる `woff2` 形式のフォント ファイルを用意します。

本手順では、Python ライブラリーの [FontTools](https://github.com/fonttools/fonttools) を使用して、`ttf` 形式のフォント ファイルを `woff2` 形式へ変換します。

{{< callout type="info" >}}

本記事では、Windows 上で Python および FontTools を使用し、コマンド プロンプトからフォントを変換する手順を説明します。FontTools の現行パッケージは Python 3.11 以降のバージョンが必要です。また、woff2 の圧縮および展開には、[Brotli](https://pypi.org/project/brotli/) の Python 拡張モジュールが必要です。

{{< /callout >}}

1. Python の確認  
コマンド プロンプトを起動し、Python がインストールされていることを確認します。FontTools の現行パッケージは Python 3.11 以降のバージョンが必要です。

    ```shell
    python --version
    ```

    `python` コマンドが見つからない場合は、Python Launcherの `py` コマンドを確認します。`py` コマンドが実行できる場合は、以降の手順の `python` コマンドは `py` コマンドに読み替えて実行してください。

    ```shell
    py --version
    ```

2. 作業フォルダーの作成  
次のコマンドから、作業フォルダーを作成します。本手順では、`C:\work\font-convert` を作業フォルダーとして使用します。

    ```shell
    mkdir C:\work\font-convert
    cd /d C:\work\font-convert
    ```

3. Python 仮想環境の作成・有効化  
作業フォルダー内に Python の仮想環境を作成します。

    ``` shell
    python -m venv .venv
    ```

    作成した仮想環境を有効化します。

    ``` shell
    .venv\Scripts\activate.bat
    ```

4. FontTools と Brotli のインストール  
`pip` を更新します。

    ```shell
    python -m pip install --upgrade pip
    ```

    続いて、FontTools と `woff2` の処理に必要な Brotli をインストールします。

    ```shell
    python -m pip install fonttools brotli
    ```

5. 変換用フォルダーの作成  
変換元フォント用と変換結果用のフォルダーを作成します。

    ```shell
    mkdir fonts
    mkdir woff2
    ```

    変換する `ttf` ファイルを `fonts` フォルダーへ配置します。本手順では以下のように配置します。

    ```text
    C:\work\font-convert\fonts\NotoSerifJP-Regular.ttf
    ```
6. ttf ファイルを woff2 へ変換  
FontTools の `fontTools.ttLib.woff2` モジュールを使用して変換します。

    ```shell
    python -m fontTools.ttLib.woff2 compress "fonts\NotoSerifJP-Regular.ttf" -o "woff2\NotoSerifJP-Regular.woff2"
    ```

    基本的なコマンド形式は次のとおりです。

    ``` shell
    python -m fontTools.ttLib.woff2 compress "<入力ファイル>" -o "<出力ファイル>"
    ```

7. Web サーバーにフォントを配置  
ArcGIS Maps SDK for JavaScript から利用できるように、生成した `woff2` ファイルを Web サーバーに配置します。  
たとえば次の構成にします。

    ```
    fonts/
    └── woff2/
        └── NotoSerifJP-regular.woff2
    ```

    ![](https://apps.esrij.com/arcgis-dev/guide/img/javascript/CustomFont/server_font_woff2.png)

    {{< callout type="info" >}}

    `woff2` ファイルは `esri/config` オブジェクトの [fontsUrl](https://developers.arcgis.com/javascript/latest/references/core/config/#Config-fontsUrl) プロパティに指定する URL 配下の `woff2` フォルダーに配置してください。

    {{< /callout >}}

    {{< callout type="info" >}}

    必要に応じて、Web サーバーの MIME タイプに .woff2 (font/woff2) を登録してください。

    {{< /callout >}}


## ArcGIS Maps SDK for JavaScript アプリでのカスタム フォントの利用
1. 参照するフォント URL を変更  
`esri/config` オブジェクトの [fontsUrl](https://developers.arcgis.com/javascript/latest/references/core/config/#Config-fontsUrl) プロパティに Web サーバーに配置したフォント フォルダーの URL を設定します。

2. カスタム フォントを設定  
`TextSymbol` クラスの font プロパティに設定する [Font](https://developers.arcgis.com/javascript/latest/references/core/symbols/Font/) クラスを使ってフォントを指定できます。このクラスで指定した、`family`、`weight`、`style` の各プロパティの値をもとに `esri/config` オブジェクトで指定されたフォント URL へリクエストが行われます。
フォントに複数スタイルが存在しない場合は `style` プロパティは省略できます。`weight` プロパティも省略できますが、コード上で指定しない場合は `regular` が自動で設定され、https://<サーバー名>/fonts/<フォント名>-regular にリクエストされます。

以下は、2D マップ用に作成した `pbf` フォントを使ったアプリ画面とサンプル コードです。

![](https://apps.esrij.com/arcgis-dev/guide/img/javascript/CustomFont/sample_map.png)


```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>カスタム フォント - MapView</title>

    <!-- ArcGIS Maps SDK for JavaScript のロード -->
    <script type="module" src="https://js.arcgis.com/5.1/"></script>

    <style>
      html, body, arcgis-map {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <!-- マップ コンポーネントを使用したマップの作成 -->
    <arcgis-map basemap="dark-gray" center="139.7525775,35.6850492" zoom="15">
      <arcgis-zoom slot="top-left"></arcgis-zoom>
    </arcgis-map>

    <script type="module">

      // モジュールのロード
      const config = await $arcgis.import("@arcgis/core/config.js");
      const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");

      // カスタム フォントのパスを設定
      config.fontsUrl = "https://<サーバー名>/fonts";

      // arcgis-map 要素の取得
      const arcgisMap = document.querySelector("arcgis-map");
      await arcgisMap.viewOnReady();

      // グラフィックの作成
      const textGraphic = new Graphic({
        geometry: {
          type: "point",
          longitude: 139.7525775,
          latitude: 35.6850492
        },
        symbol: {
          type: "text",
          color: "black",
          haloColor: "white",
          haloSize: "2px",
          text: "カスタム フォント",
          font: {
            size: 24,
            // カスタム フォントの名前を設定
            family: "NotoSerifJP",
            weight: "normal"
          }
        }
      });
      // MapView にグラフィックを追加
      arcgisMap.view.graphics.add(textGraphic);
      
    </script>
  </body>
</html>
```

続いて、3D シーン用に作成した `woff2` フォントを使ったアプリ画面とサンプル コードです。

![](https://apps.esrij.com/arcgis-dev/guide/img/javascript/CustomFont/sample_scene.png)


```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>カスタム フォント - SceneView</title>

    <!-- ArcGIS Maps SDK for JavaScript のロード -->
    <script type="module" src="https://js.arcgis.com/5.1/"></script>

    <style>
      html, body, arcgis-scene {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <!-- マップ コンポーネントを使用したシーンの作成 -->
    <arcgis-scene basemap="dark-gray" center="139.7525775,35.6850492" zoom="15">
      <arcgis-zoom slot="top-left"></arcgis-zoom>
    </arcgis-scene>

    <script type="module">

      // モジュールのロード
      const config = await $arcgis.import("@arcgis/core/config.js");
      const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");

      // カスタム フォントのパスを設定
      config.fontsUrl = "https://<サーバー名>/fonts";

      // arcgis-scene 要素の取得
      const arcgisScene = document.querySelector("arcgis-scene");
      await arcgisScene.viewOnReady();

      // グラフィックの作成
      const textGraphic = new Graphic({
        geometry: {
          type: "point",
          longitude: 139.7525775,
          latitude: 35.6850492
        },
        symbol: {
          type: "text",
          color: "black",
          haloColor: "white",
          haloSize: "2px",
          text: "カスタム フォント",
          font: {
            size: 24,
            // カスタム フォントの名前を設定
            family: "NotoSerifJP",
            weight: "normal"
          }
        }
      });
      // SceneView にグラフィックを追加
      arcgisScene.view.graphics.add(textGraphic);
      
    </script>
  </body>
</html>
```