+++
title = "スターター ウィジェットの作成"
description = "ArcGIS Experience Builder (Developer Edition) のチュートリアルとして、カスタム ウィジェットの開発の基本的な実装方法について学びます。"
weight = 13
aliases = ["/tutoarials/create-starter-widget/"]
+++

出典：ArcGIS Experience Builder - Tutorials - [Create Starter Widget](https://developers.arcgis.com/experience-builder/guide/create-a-starter-widget/)

## [概要]
ここでは、ウィジェットの基本実装の構築方法について学習します。

ArcGIS Experience Builder では、さまざまなウィジェットから選択し、対話形式でアプリケーションを構築できます。これらのアプリケーションはエクスペリエンスと呼ばれます。ユーザーにより多くのオプションを提供する場合は、独自のカスタム ウィジェットを作成し、ArcGIS Experience Builder に追加できます。作成するウィジェットのタイプは、求める機能によって異なります。マップと対話するウィジェットを作成することも、ArcGIS の外部で処理を実行するウィジェットを作成することもできます。ウィジェットを作成してインストールすると、ArcGIS Experience Builder によって自動的にウィジェットが検出され、ユーザーが使用できるようになります。

このチュートリアルでは、新しいウィジェットの作成に必要なフォルダーと主なファイルを作成します。これらのファイルは、他のウィジェット チュートリアルの開始点として使用されます。

## [前提条件]

ArcGIS Experience Builder を[ダウンロード、インストール、および構成](https://developers.arcgis.com/experience-builder/guide/install-guide/)してください。

### [ステップ]

#### [新しいフォルダーを作成する]

新しいウィジェットを作成する最初のステップは、ウィジェット ファイル用のフォルダーを作成することです。
1. **ファイル ブラウザー**で、ArcGIS Experience Builder を解凍したフォルダーに移動します。

    ArcGIS Experience Builder の開発者向け追加機能のインストール方法の詳細については、[インストールガイド](https://developers.arcgis.com/experience-builder/guide/install-guide/)を参照してください。

2. ArcGISExperienceBuilder **フォルダー**で、次のパスを展開します
        
         /client/your-extensions/widgets

3. **widgets** フォルダーに、`starter-widget` という新しいフォルダーを作成します。
パスは以下のようになります

         /client/your-extensions/widgets/starter-widget

    ウィジェット フォルダーにスペースを含めることはできません。ウィジェットの構築については、[こちらのドキュメント](https://developers.arcgis.com/experience-builder/)を参照してください。

#### [マニフェスト ファイルの作成]
ウィジェットのプロパティを定義するには、マニフェスト ファイルが必要です。これらは、ArcGIS Experience Builder のロード時に読み込まれます。

**starter-widget** フォルダーに、`manifest.json` という名前のファイルを作成します。以下の JSON オブジェクトを追加して、ウィジェットを定義します。

``` JavaScript
 {
   "name": "starter-widget",
   "type": "widget",
   "version": "1.17.0",
   "exbVersion": "1.17.0",
   "author": "Your Name",
   "description": "A hello world starter widget",
   "copyright": "",
   "license": "",
   "properties": {},
   "translatedLocales": [
     "en"
   ],
   "defaultSize": {
     "width": 800,
     "height": 500
   }
 }

```


#### [コンポーネントの実装]

ウィジェットのメイン ロジックは、**widget.tsx** の React コンポーネントに実装します。このファイルは単一の関数 React コンポーネントをエクスポートします。

ArcGIS Experience Builder では、関数スタイルまたはクラス スタイルのコンポーネントを使用できます。この 2 つのタイプの詳細については、[React ドキュメント](https://reactjs.org/docs/components-and-props.html#function-and-class-components)を参照してください。

1. **starter-widget** フォルダーに、**src** という新しいフォルダーを作成します。このフォルダーの中に、runtime という別のフォルダーを作成します。

2. **Runtime** フォルダーに、`widget.tsx` という名前のファイルを作成します。以下のコードを追加して、React コンポーネントを作成します。

    最初の行は、`jimu-core` モジュールから Reactをインポートしている。

    ウィジェットを実装するには、React コンポーネントとなる関数を作成する必要がある。この関数は、ユーザーに表示される [JSX](https://reactjs.org/docs/introducing-jsx.html)（この例では、`div` 要素といくつかのテキスト）、HTML のような構文を返します。

```JavaScript
 import { React, type AllWidgetProps } from 'jimu-core'

 const Widget = (props: AllWidgetProps<any>) => {
   return <div className="widget-starter jimu-widget">This is your starter widget!</div>
 }
 export default Widget
```
3. ターミナルで、**client** フォルダーで実行中の `npm start` スクリプトを停止（ctrl + c）し、再スタートします。

#### ウィジェットをテストする

フォルダーとメイン ファイルを配置したら、ArcGIS Experience Builder を実行して新しいページにウィジェットを追加して、ウィジェットをテストできます。ビルダーは自動的にウィジェットを検出し、利用可能にします。

1. Web ブラウザーで ArcGIS Experience Builder にアクセスします。例： [https://localhost:3001](https://localhost:3001/)

2. ArcGIS Experience Builder で [**新規作成**] をクリックして、新しいエクスペリエンス ページを作成します。

3. **空白のスクロール** テンプレートの [**作成**] ボタンをクリックします。

4. ウィジェットの挿入パネルが開きます。そこから、新しいスターター ウィジェットをエクスペリエンスにドラッグしてください。

    ウィジェットは、ウィジェット一覧の下部にある「カスタム」セクションに配置されます。作成したウィジェットには無効を示すアイコンが表示されているかもしれませんが、まだアイコンを作成していないため、それは問題ありません。ウィジェットが表示されない場合、元のセットアップ手順に従って、**client** フォルダーで `npm start` を実行したか再確認してください。

5. マップ ウィジェットをエクスペリエンスにドラッグします。

6. ツールバーで、[保存] をクリックし、次に [プレビュー] をクリックすると、カスタム ウィジェットを含むエクスペリエンスが新しいブラウザ タブで開きます。

