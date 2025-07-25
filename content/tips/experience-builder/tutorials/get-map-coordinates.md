+++
title = "マップの座標を取得"
description = "ArcGIS Experience Builder (Developer Edition) のチュートリアルとして、カスタム ウィジェットで地図の緯度経度、縮尺、ズーム レベルを表示する方法を学びます。"
weight = 14
aliases = ["/experience/tutorials/"]
+++

出典：ArcGIS Experience Builder - Guide - [Get map coordinates](https://developers.arcgis.com/experience-builder/guide/get-map-coordinates/)


## 概要
<b>学習内容：</b>カスタム ウィジェットでマップの緯度と経度、縮尺、ズーム レベルを表示する方法

ArcGIS Experience Builder 標準のマップ ウィジェットには、ArcGIS Maps SDK for JavaScript の [View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) インスタンスが含まれています。[View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) はマップと対話し、位置情報を取得する方法を提供します。[View](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) のプロパティとイベント ハンドラーを使用して、マップ画面上の任意のポイントの位置に関する現在の[空間参照](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html)の情報、緯度と経度、縮尺、ズーム レベルを確認することができます。確認した情報は、カスタム ウィジェットに表示したり、地球上の他の場所に移動したり、エクスペリエンスの開始時にマップの初期表示範囲を設定したりするために使用できます。

このチュートリアルでは、マップ ウィジェットにアクセスし、カスタム ウィジェットでマウス カーソルが地図上にある時の緯度と経度を表示します。


## 前提条件
ArcGIS Experience Builder のインストール ガイドを参照して、ArcGIS Experience Builder (Developer Edition) のダウンロード、インストール、設定を行います。


## ステップ
### スターター ウィジェットの入手
1. スターター ウィジェット テンプレートを[こちら](https://developers.arcgis.com/experience-builder/zips/create-a-starter-widget.zip)からダウンロードします。</br>
すでに、[スターター ウィジェットの作成]() チュートリアルを完了している場合は、それを使用して開始できます。<b>/client/your-extensions/widgets</b> 内のウィジェット フォルダーをコピーしてください。
2. 手順 1 でテンプレートをダウンロードした場合は ArcGIS Experience Builder フォルダー内で、zip ファイルを以下のパスに展開してください。</br>
<b>/client/your-extensions/widgets</b>


### ウィジェット名の変更
1. ArcGIS Experience Builder の <b>client</b> フォルダーで `npm start` が実行されたターミナルがある場合、`ctrl + c` を押してスクリプトを停止します。
2. <b>ファイル ブラウザー</b>で Experience Builder が展開されたフォルダーに移動します。
3. Experience Builder フォルダー内で以下のパスを開きます。</br>
<b>/client/your-extensions/widgets</b>
4. <b>widgets</b> フォルダー内で、<b>starter-widget</b> フォルダーの名前を `get-map-coordinates` に変更します。
5. 新しく名前を変更した <b>get-map-coordinates</b> フォルダー内で、<b>manifest.json</b> ファイルをコード エディターで開きます。
6. コード エディターで、`name` プロパティを `get-map-coordinates` に変更します。</br>
`manifest.json` の `name` プロパティがウィジェットのフォルダー名と一致することが重要です。この時点で、ウィジェットの説明、作成者など `manifest.json` ファイル内の他のメタデータも更新できます。

``` json
{
   // *** 更新 ***
   // "name": "starter-widget",
   "name": "get-map-coordinates",
   "type": "widget",
   "version": "1.17.0",
   ・・・
```

7. <b>manifest.json</b> の `version` プロパティの後に `jimu-arcgis` 依存関係を追加します。これを宣言することで、ウィジェット内で [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/) モジュールを使用できるようになります。

``` json
{
   "name": "get-map-coordinates",
   "type": "widget",
   "version": "1.17.0",
   // *** 追加 ***
   "dependency": ["jimu-arcgis"],
```


### 設定パネルの実装
設定パネルを実装することで、エクスペリエンスの作成者がウィジェットをカスタマイズできるようになります。設定パネルは、ArcGIS Experience Builder でウィジェットが選択された時に右側のサイドバーに表示されます。パネルを作成するには、React コンポーネントを作成します。

1. ウィジェットのルート フォルダーに、空のオブジェクトを含む `config.json` ファイルを作成します。</br>
後で、ウィジェットの設定値を保存するために、このオブジェクトにウィジェットの構成パラメーターを追加できます。

```json
{}
```

2. <b>src</b> フォルダーに、<b>setting</b> という名前のフォルダーを作成します。
3. <b>setting</b> フォルダー内に、`setting.tsx` ファイルを作成します。
4. <b>setting/setting.tsx</b> ファイルを開き、以下の import 文を記述します。

``` javascript
import { React } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
```

5. コンポーネントを実装するためのコードを追加します。

``` javascript
const Setting = (props: AllWidgetSettingProps<any>) => {
  return <div className="widget-setting-demo">ここはスターター ウィジェットの設定パネルです</div>
}

export default Setting
```

6. ArcGIS Experience Builder の <b>client</b> フォルダーで `npm start` が実行されたターミナルがある場合、`ctrl + c` を押してスクリプトを停止します。その後、<b>client</b> フォルダーで `npm start` スクリプトを開始します。


### マップ ビューのデータ ソースを選択できるようにする
ArcGIS Experience Builder では、ページに複数のマップ ウィジェットを配置することができます。そのため、カスタム ウィジェットには、作成者が使用するマップ ウィジェットを選択するためのセクションが必要です。

1. <b>setting/setting.tsx</b> ファイルに、`jimu` ライブラリーから `MapWidgetSelector` モジュールを記述します。

``` javascript
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
```

2. コンポーネント内で onMapWidgetSelected 関数を定義します。

``` javascript
// *** 追加 ***
const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
  props.onSettingChange({
    id: props.id,
    useMapWidgetIds: useMapWidgetIds
  })
}

return <div className="widget-setting-demo">ここはスターター ウィジェットの設定パネルです</div>;
```

3. `return()` 文内に、`MapWidgetSelector` を表すタグを追加します。

``` javascript
return (
  <div className="widget-setting-demo">
    <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={onMapWidgetSelected} />
  </div>
)
```


### マップにアクセスする
これまでのステップでは、設定パネルに機能を追加し、マップ ウィジェットを選択できるようになりました。Map オブジェクトは [`JimuMapViewComponent`](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapViewComponent/) を使用してアクセスできます。

1. <b>widget.tsx</b> ファイルに、`jimu-arcgis` ライブラリーから [`JimuMapViewComponent`](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapViewComponent/) と [`JimuMapView`](https://developers.arcgis.com/experience-builder/api-reference/jimu-arcgis/JimuMapView/) の型を追加し、React 変数をデストラクチャリング (分割代入) して `getState` import にアクセスします。

``` javascript
import { React, type AllWidgetProps } from 'jimu-core'
/** 追加 **/
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
const { useState } = React
```

2. マウスの位置の緯度と経度のプロパティを表示するには、マウス ポインターの状態を追跡する必要があります。これにはコンポーネント内で、`useState()` を使用し [state](https://reactjs.org/docs/state-and-lifecycle.html) として追跡できるように設定します。

``` javascript
const { useState } = React

const Widget = (props: AllWidgetProps<any>) => {
  // *** 追加 ***//
  const [latitude, setLatitude] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')

  return (
```

3. `return` 文で、`JimuMapViewComponent` を JSX マークアップに追加します。</br>
追加されたコードの最初の 2 行 (`{props.useMapWidgetIds &&...`)は、JSX で条件を使用する方法です。これは基本的に「エクスペリエンス作成者が設定パネルで有効なマップ ウィジェットを選択した場合にのみ JimuMapViewComponent を追加する」という意味です。

``` javascript
return (
  <div className="widget-starter jimu-widget">
    {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
    )}
  </div>
)
```

4. `widget.tsx` の上部に、次のステップで使用する [`Point`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html) クラスをインポートします。

``` javascript
import Point from 'esri/geometry/Point'
```

5. `useState` コマンドのすぐ下に `activeViewChangeHandler` 関数を定義します。この関数は、マップが準備完了した時に一度だけ呼び出されます。この関数内で、`pointer-move` イベントがトリガーされる度に緯度と経度の state を更新するリスナーを設定します。</br>
マウスの x 座標と y 座標を使用して Point オブジェクトを作成し、[view.toMap()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#toMap) 関数を使用して座標を地理座標に変換します。緯度と経度の state を設定して、座標値を表示します。

``` javascript
/** 追加 **/
const activeViewChangeHandler = (jmv: JimuMapView) => {
  if (jmv) {
    // ポインターが移動したら、ポインターの位置を取得し、Point オブジェクトを作成
    // view.toMap() 関数を使用してジオメトリを取り出し、state を更新
    jmv.view.on('pointer-move', (evt) => {
      const point: Point = jmv.view.toMap({
        x: evt.x,
        y: evt.y
      })
      setLatitude(point.latitude.toFixed(3))
      setLongitude(point.longitude.toFixed(3))
    })
  }
}
```


### 緯度と経度の座標を表示する
コンポーネントの state に緯度と経度が保存されたので、関数コンポーネントから返される JSX に値を簡単に表示できます。

1. `return()` 文内で (先ほど配置した `JimuMapViewComponent` のすぐ後に)、緯度と経度を表示するための JSX を追加します。

``` javascript
return (
  <div className="widget-starter jimu-widget">
    {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
    )}
    {/* *** 追加 *** */}
    <p>
      緯度 / 経度: {latitude} {longitude}
    </p>
  </div>
);
```


### ウィジェットのテスト
コードの変更が完了したら、ArcGIS Experience Builder を実行してエクスペリエンスを表示することでウィジェットをテストできます。

1. Web ブラウザーで、Experience Builder にアクセスします。</br>
例：https://localhost:3001</br>
Experience Builder タブが開かなかった場合は、https://localhost:3001 にアクセスしてください。「無効な SSL 証明書」の問題が発生した場合は「続行」をクリックします。
2. Experience Builder で [<b>新規作成</b>] をクリックして新しいエクスペリエンス ページを作成します。
3. [<b>空白のスクロール</b>] の [<b>作成</b>] ボタンをクリックします。
4. [<b>ウィジェットの挿入</b>] パネルが開きます。そこから、<b>マップ</b> ウィジェットと新しく作成した「<b>Get Map Coordinates</b>」ウィジェットをエクスペリエンスにドラッグします。</br>
作成したウィジェットには無効を示すアイコンが表示されているかもしれませんが、まだアイコンを作成していないため、それは問題ありません。
5. ウィジェットの設定パネルで、マップを選択するドロップダウンから「<b>Map</b>」を選択します。
6. Experience Builder のツールバーで [<b>保存</b>] をクリックし、[<b>プレビュー</b>] をクリックすると、カスタム ウィジェットとマップを含むエクスペリエンスが新しいブラウザー タブで開きます。マップ上にマウスを移動させると、カーソルの位置の緯度と経度が表示されます。