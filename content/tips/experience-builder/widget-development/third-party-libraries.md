+++
title = "サードパーティ製のライブラリ使用"
description = "サードパーティ製のライブラリの使用方法について紹介します。"
weight = 11
aliases = ["/debugging-widget-development/"]
+++

Experience Builder に付属の `jimu` ライブラリを使用して、ウィジェットに様々な機能を組み込むことができます。この機能に加えて、サードパーティのライブラリを追加して、Experience Builder のカスタム ウィジェット内で使用することができます。

サードパーティのライブラリをインクルードして、ウィジェット内で使用できるようにするには、3 つの方法があります。

## NPM インストール
このライブラリを 1 つのウィジェットのみで使用する場合は、`npm` を使用してライブラリを含めるのも良い選択肢です。

### 利用方法
ターミナルでカスタム ウィジェットのルートディレクトリを参照し、`npm init` を実行し、対話形式で質問に答えます。これにより、カスタム ウィジェットのルートディレクトリに `package.json` ファイルが作成されます。

次に、npm のパッケージディレクトリからサードパーティのライブラリの名前を探します。これは [npmjs.com](https://www.npmjs.com/) にアクセスして検索するか、通常はライブラリのドキュメントページにパッケージ名が記載されています。パッケージ名を使って npm インストールコマンドを実行します。

```
npm install <package-name>
```

このコマンドを実行すると、2 つのことができます。まず、ライブラリファイルをダウンロードし、`node_modules` ディレクトリに配置します。第二に、上記の `npm init` コマンドで作成した `package.json` ファイルにライブラリへの参照を追加します。

パッケージ名は、カスタムウィジェットの `import` コマンドで使用できるようになりました。例えば、`"import * as ReactDataGrid from "react-data-grid"` としてインポートします。

`package.json` にライブラリへの参照が追加されたので、他のコンピュータにすべてのウィジェットの依存関係を素早くインストールするには、ウィジェットのルートディレクトリでターミナルを開き、`npm install` を実行して、ウィジェットのすべての依存関係をインストールします。

このパターンの動作の説明は [react-data-grid](https://developers.arcgis.com/experience-builder/sample-code/widgets/react-data-grid/) のサンプルを参照してください。

## manifest.json を使用して CDN 経由で使用
ライブラリを複数のウィジェットで使用する場合は、ライブラリの CDN url を `manifest.json` ファイルの `dependency` プロパティに
配置することで、ライブラリを含めることができます。

### 利用方法
ライブラリの CDN url を見つける必要があります。通常、これはライブラリのドキュメントに記載されているか、[jsDelivr](https://www.jsdelivr.com/) や [unpkg](https://unpkg.com/) で見つけることができます。たとえば、jQuery サンプルでは、CDN URL は `https://unpkg.com/jquery@3.5.1/dist/jquery.js` です。

ウィジェットの `manifest.json` ファイルに `dependency` と呼ばれる配列プロパティを追加し、その配列に url を追加します。例えば、以下のようになります。

```json
"dependency": [
  "https://unpkg.com/jquery@3.5.1/dist/jquery.js"
],
```

Experience Builder は Experience がロードされると自動的にライブラリをロードし、ウィジェットはライブラリのドキュメントに従ってライブラリを使用することができます。

このパターンの動作の説明は [jquery](https://developers.arcgis.com/experience-builder/sample-code/widgets/jquery/) のサンプルを参照してください。

## ダウンロードして直接読み込む
ライブラリが複数のウィジェットで使用されている場合、手動でファイルをダウンロードしてウィジェットのコード構造内に格納することでライブラリを含めることができます。

### 利用方法
ライブラリのダウンロード可能なビルド済み assets を探します。通常、これはライブラリのドキュメントにリンクされているか、ライブラリの GitHub リポジトリの `Releases` エリアにあるダウンロード可能な assets の `dist` フォルダにあります。

ダウンロード後、ファイルを展開し、ウィジェットのルートディレクトリにコピーしてください。相対パスで指定し、インポートを介してインクルードされるので、ウィジェット内の任意の場所にファイルを配置することができますが、慣習的には、`lib` というフォルダ内に配置することをお勧めします。

ファイルを配置した後、相対パスを使用してライブラリをインポートすることができます。例えば、以下のようになります。

```tsx
import * as d3 from "./lib/d3/d3.min.js";
```

このパターンの動作例は、[D3](https://developers.arcgis.com/experience-builder/sample-code/widgets/d3/) のサンプルを参照してください。
