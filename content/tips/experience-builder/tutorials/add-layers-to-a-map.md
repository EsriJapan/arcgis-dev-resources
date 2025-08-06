+++
title = "マップにレイヤーを追加"
description = "ArcGIS Experience Builder (Developer Edition) のチュートリアルとして、カスタム ウィジェットでマップにレイヤーを追加する方法を学びます。"
weight = 15
aliases = ["/tutoarials/add-layers-to-a-map/"]
+++

出典：ArcGIS Experience Builder - Tutorials - [Add layers to a map](https://developers.arcgis.com/experience-builder/guide/add-layers-to-a-map/)

## 概要
学習内容：カスタムウィジェットからマップにレイヤーを追加する方法

ArcGIS Experience Builder のマップ ウィジェットは、ロードするように構成されている Web マップに基づいてレイヤーを自動的にロードします。ワークフローによっては、ウィジェットとのユーザー インタラクションに基づいてマップに動的にレイヤーを追加するカスタム ウィジェットが必要な場合があります。

このチュートリアルでは、マップにフィーチャ レイヤーを追加するためのボタンをウィジェットに追加します。



## 前提条件
1. ArcGIS Experience Builder のインストール ガイドを参照して、 ArcGIS Experience Builder (Developer Edition) を[ダウンロード、インストール、設定](https://developers.arcgis.com/experience-builder/guide/install-guide/)を行います。  


## ステップ
### スターター ウィジェットの取得
1. スターター ウィジェットのテンプレートを[こちら](https://developers.arcgis.com/experience-builder/zips/create-a-starter-widget.zip)からダウンロードします。
  すでにスターター ウィジェットの作成チュートリアルを完了している場合は、それを使用して開始できます。**client/your-extensions/widgets** 内のウィジェット フォルダーをコピーしてください。  

2. 手順 1 でテンプレートをダウンロードした場合は ArcGIS Experience Builder **フォルダー**内で、zip ファイルを以下のパスに展開してください。  
**/client/your-extensions/widgets**

### ウィジェット名の変更
1. ArcGIS Experience Builder の **client** フォルダーで `npm start` が実行されたターミナルがある場合、`ctrl + c` を押してスクリプトを停止します。  
2. **ファイル ブラウザー**で、Experience Builder を展開されたフォルダーに移動します。
3. Experience Builder **フォルダー**で、以下のパスを展開します。  
**/client/your-extensions/widgets**  
4. **widgets** フォルダー内で **starter-widget** フォルダーの名前を `add-layers-to-a-map` に変更します。
5. 新しく名前を変更した **add-layers-to-a-map** フォルダーの、**manifest.json** ファイルをコード エディターで開きます。
6. コード エディターで、`name` プロパティを `add-layers-to-a-map` に変更します。  
`manifest.json` の `name` プロパティがウィジェットのフォルダー名と一致することが重要です。この時点で、ウィジェットの説明、作成者など `manifest.json` ファイル内の他のメタデータも更新できます。
``` json
 {
   // *** 更新  ***
   // "name": "starter-widget",
   "name": "add-layers-to-a-map",
   "type": "widget",
   "version": "1.17.0",
```

7. **manifest.json** の `version` プロパティの後に、`jimu-arcgis` の依存関係を追加します。 これを宣言することで、ウィジェット内で [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) モジュールを使用できるようになります。
``` json
{
   "name": "add-layers-to-a-map",
   "type": "widget",
   "version": "1.17.0",
   // *** 追加 ***
   "dependency": ["jimu-arcgis"],
```

### 設定パネルの実装
設定パネルを実装することで、エクスペリエンスの作成者がウィジェットをカスタマイズできるようになります。設定パネルは、ArcGIS Experience Builder でウィジェットが選択された時に右側のサイドバーに表示されます。パネルを作成するには、React コンポーネントを作成します。  

1. ウィジェットのルート フォルダーに、空のオブジェクトを含む `config.json` ファイルを作成します。  
後で、ウィジェットの設定値を保存するために、このオブジェクトにウィジェットの構成パラメーターを追加できます。  
``` json
{}
```
2. **src** フォルダーに、**setting** という名前のフォルダーを作成します。
3. **setting** フォルダー内に、`setting.tsx` ファイルを作成します。
4. **setting/setting.tsx** ファイルを開き、以下の import 文を記述します。
``` typescript
import { React } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
```

5. コンポーネントを実装するためのコードを追加します。
``` typescript
const Setting = (props: AllWidgetSettingProps<any>) => {
  return <div className="widget-setting-demo">ここはスターター ウィジェットの設定パネルです</div>
}

export default Setting
```

6. ArcGIS Experience Builder の **client** フォルダーで `npm start` が実行されたターミナルがある場合、`ctrl + c` を押してスクリプトを停止します。その後、**client** フォルダーで `npm start` スクリプトを開始します。

### マップ ビューのデータ ソースを選択できるようにする
ArcGIS Experience Builder では、ページに複数のマップ ウィジェットを配置することができます。そのため、カスタム ウィジェットには、作成者が使用するマップ ウィジェットを選択するためのセクションが必要です。  

1. **setting/setting.tsx** ファイルに、`jimu` ライブラリから `MapWidgetSelector` モジュールを記述します。

``` javascript
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
```

2. コンポーネント内で onMapWidgetSelected 関数を定義します。

``` typescript
// *** 追加 ***
const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
  props.onSettingChange({
    id: props.id,
    useMapWidgetIds: useMapWidgetIds
  })
}

return <div className="widget-setting-demo">ここはスターター ウィジェットの設定パネルです</div>;
```

3. return() 文内に、MapWidgetSelector を表すタグを追加します。

``` typescript
return (
  <div className="widget-setting-demo">
    <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={onMapWidgetSelected} />
  </div>
)
```

### マップにアクセスする
これまでのステップでは、設定パネルに機能を追加し、マップ ウィジェットを選択できるようになりました。Map オブジェクトは [JimuMapViewComponent](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapViewComponent/) を使用してアクセスできます。

1. **widget.tsx** ファイルに、`jimu-arcgis` ライブラリから [`JimuMapViewComponent`](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapViewComponent/) と [`JimuMapView`](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapView/) の型を追加し、React 変数をデストラクチャリング (分割代入) して `getState` import にアクセスします。

``` javascript
import { React, type AllWidgetProps } from 'jimu-core'
/** 追加 **/
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
const { useState } = React
```

2. レイヤーをマップに追加するには、マップへの参照をコンポーネントの状態を保存する必要があります。これにはコンポーネント内で、`useState()` を使用し [state](https://reactjs.org/docs/state-and-lifecycle.html) として保存できるように設定します。

``` typescript
const { useState } = React

const Widget = (props: AllWidgetProps<any>) => {
  // *** 追加 ***//
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>()

  return (
```

3. `return` 文で、`JimuMapViewComponent` を JSX マークアップに追加します。  
追加されたコードの最初の 2 行 (`{props.useMapWidgetIds &&...`)は、JSX で条件を使用する方法です。これは基本的に「エクスペリエンス作成者が設定パネルで有効なマップ ウィジェットを選択した場合にのみ JimuMapViewComponent を追加する」という意味です。

``` typescript
return (
  <div className="widget-starter jimu-widget">
    {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
    )}
  </div>
)
```

4. `setState` コマンドのすぐ下に `activeViewChangeHandler` 関数を定義します。 この関数は、マップの準備ができたときに一度だけ呼び出され、この関数で jimuMapView の状態を更新します。

```typescript
/** 追加 **/
const activeViewChangeHandler = (jmv: JimuMapView) => {
  if (jmv) {
    setJimuMapView(jmv)
  }
}
```

### ボタンの追加
クリックするとレイヤーをマップに追加するボタンをウィジェットの UI に追加します。

1. コード エディターで、render 関数内の既存の div に `form` と `input` タグ要素を追加します。

``` typescript
return (
  <div className="widget-starter jimu-widget">
    {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
    )}

    {/* *** ADD: *** */}
    <form onSubmit={formSubmit}>
      <div>
        <button>Add Layer</button>
      </div>
    </form>
  </div>
)
```

2. コンポーネント内で、`formSubmit` という名前の新しい関数を作成します。 この関数はユーザーが **Add Layer** ボタンをクリックした時に呼び出されます。  
`evt.preventDefault` は、フォームが送信された際にページをリロードしないようにします。

### レイヤーの追加
ボタンをクリックしたとき、マップにレイヤーを追加します。

1. `widget.tsx` ファイルの先頭で、 [`FeatureLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) クラスをインポートします。

``` typescript
import FeatureLayer from 'esri/layers/FeatureLayer'
```

2. `formSubmit` 関数の内に、[Trailheads](https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0)（ポイント）のフィーチャ レイヤーを作成し、そのレイヤーをマップに追加するコードを追加します。  
`jimuMapView.view` は [`MapView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) のインスタンスのため、ここで使用する `add()` メソッドのように、MapView で定義されているメソッドやプロパティも使うことができます。  
``` typescript
const formSubmit = (evt) => {
  evt.preventDefault()

  // *** 追加 ***
  // 新しい FeatureLayer を作成
  const layer = new FeatureLayer({
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0'
  })

  // マップにレイヤーを追加 (Experience Builder の JimuMapView データ・ソースからアクセスできます。)
  jimuMapView.view.map.add(layer)
}
```

### ウィジェットのテスト
コードの変更が完了したら、ArcGIS Experience Builder を実行してエクスペリエンスを表示することでウィジェットをテストできます。

1. Web ブラウザーで、Experience Builder にアクセスします。  
例：https://localhost:3001  
Experience Builder タブが開かなかった場合は、https://localhost:3001 にアクセスしてください。「無効な SSL 証明書」の問題が発生した場合は「続行」をクリックします。  
2. Experience Builder で \[**新規作成**\] をクリックして新しいエクスペリエンス ページを作成します。  
3. \[**空白のスクロール**\] の \[**作成**\] ボタンをクリックします。  
   1. \[**ウィジェットの挿入**\] ボタンをクリックし、**マップ** ウィジェットをエクスペリエンスにドラッグします。
   2. \[プレビュー エリア\]の**マップ** ウィジェットをクリックし、\[ウィジェット設定パネル\]の\[**マップの選択**\]をクリックします。
   3. \[**データの選択**パネル\]の\[**新しいデータの追加**\]ボタンをクリックします。
   4. \[**データの追加**\]モーダルで、\[**ArcGIS Online**\] タブを選択し、Web マップの `eb1be6543e304b4d81ed55439c412c2c` を検索します。検索結果をクリックして選択し、\[**終了**\]をクリックします。 (この Web マップには意図的に操作するレイヤーがないことに注意してください。)
   5. \[**Select data** パネル\]に新しく追加された \[LA Parks and Trails Map\] をクリックして、Web マップを選択してください。
4. \[**ウィジェットの挿入**\] パネルが開きます。そこから、新しく作成した \[**add layers to a map**\]ウィジェットをエクスペリエンスにドラッグします。  
作成したウィジェットには無効を示すアイコンが表示されているかもしれませんが、まだアイコンを作成していないため、それは問題ありません。  
5. ウィジェットの設定パネルで、マップを選択するドロップダウンから「**Map**」を選択します。  
6. Experience Builder のツールバーで \[**保存**\] をクリックし、\[**プレビュー**\] をクリックすると、カスタム ウィジェットとマップを含むエクスペリエンスが新しいブラウザー タブで開きます。\[Add Layer\]ボタンをクリックするとレイヤーをマップに追加されます。