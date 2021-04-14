+++
title = "カスタム ウィジェット開発ガイド"
description = "カスタム ウィジェットを開発する手順を紹介します。"
weight = 2
aliases = ["/webappbuilder/development-guide/"]
+++

## はじめに

### このガイドについて

このガイドは ArcGIS Web AppBuilder (Developer Edition) （以下、Web AppBuilder）で使用するカスタム ウィジェットを作成する方法を説明します。  
Web AppBuilder のインストール方法に関しては、[ArcGIS Web AppBuilder (Developer Edition) インストールガイド](../install-guide/)をご参照ください。  
また [Esri Japan GitHub](https://github.com/EsriJapan/arcgis-webappbuilder-widgets-themes) では、Web AppBuilder のカスタム ウィジェット/テーマが共有されています。このガイドで作成するウィジェットの完成版も公開されています。

#### 既成ウィジェットのソースコードの確認

Web AppBuilder で使われる全てのウィジェットは `<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` に格納されていて、ソースコードを確認できます。開発したカスタム ウィジェットも同様にこのディレクトリに配置します。  
上記ディレクトリにある `samplewidgets` フォルダーには簡易機能のサンプル ウィジェットが用意されています（本ガイドではウィジェット作成の雛形となるコードが記述されたテンプレートである `CustomWidgetTemplate` を使用します）。

#### ウィジェットのフォルダー構成

カスタム ウィジェットを作成する際に使用するファイルは以下です。全ファイルが必須ではなく、ウィジェットの UI を設ける、ウィジェットをローカライズする、設定画面を設ける等の目的に応じてファイルを準備します。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide1.jpg" alt="フォルダー構成">

## カスタム ウィジェットの開発

### 1. ウィジェット ボタンを配置する

Web AppBuilder のウィジェットは2 種類に分けられます。1 つは「描画」ウィジェットのようなパネルを表示して使用するウィジェットです（Web AppBuilder では In-Panel ウィジェットと呼びます）。もう 1 つは、「現在位置」ウィジェットのように画面上にボタンのみを配置するパネルを表示しないウィジェットです（Off-Panel ウィジェットと呼びます）。

<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide2.jpg" alt="ウィジェットの種類">

本ガイドでは簡単なバッファー検索を行う In-Panel ウィジェットを開発していきます。ウィジェットを追加するには `<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` にウィジェットのフォルダーを配置します。

<ol start="1">
<li>`<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets\samplewidgets` にある `CustomWidgetTemplate` フォルダーを `<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` にコピーします。</li>
<li>`CustomWidgetTemplate` フォルダーの名前を `Buffer` に変えます。<br>
フォルダー名は半角英数字である必要があります。<br>
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide3.jpg" alt="フォルダー名"></li>
<li>`Buffer` フォルダー直下にある `manifest.json` ファイルを開きます。</li>
<li>`name` 属性の値を `Buffer` に変更します。</li>
<li>文字コードに UTF8 を指定して、`manifest.json` ファイルを保存します。  
以降で紹介する手順においてもファイルを保存する際は、文字コードを UTF8 に指定して保存するようにしてください。</li>
</ol>

#### manifest.json

ウィジェットの名前やバージョンなどのウィジェットの属性を設定するファイルです。`properties` 属性でカスタム ウィジェットのプロパティを構成できます。`inPanel` を `false` に設定すると Web AppBuilder のウィジェットの追加画面に表示されなくなります。ウィジェットのプロパティについては<a href="https://developers.arcgis.com/web-appbuilder/guide/widget-manifest.htm" target="_blank">Widget manifest</a>をご参照ください。

<ol start="6">
<li>Web AppBuilder のウィジェットの追加画面で表示されるウィジェット名をローカライズします。ウィジェットのローカライズは `Buffer` フォルダーの直下にある `nls` フォルダーで設定します。`Buffer\nls` フォルダーにある `strings.js` ファイルを開き、以下のコードを入力し保存します。  
<pre><code class="lang-js">define({
  root: ({
    _widgetLabel: "Buffer"
  }),
  "ja": 1
});</code></pre>
</li>
<li>`nls` フォルダー直下に `ja` フォルダーを作成します。</li>
<li>`ja` フォルダーに `strings.js` ファイルを作成し、以下のコードを入力し保存します。  
<pre><code class="lang-js">define({
  _widgetLabel: "バッファー検索"
});</code></pre>
</li>
<li>Web AppBuilder を起動してアプリケーションを作成すると、ウィジェットの追加画面に「バッファー検索」というウィジェットが新しく表示されます。<br>
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide4.jpg" alt="追加画面"><br>
※ 作成する Web アプリに表示するウィジェット名は Web AppBuilder のウィジェット構成画面で変更可能です。
</li>
</ol>

#### nls フォルダー

カスタム ウィジェットを多言語化する場合に使用します（アクセスするブラウザーのロケールにより該当する言語が表示されます）。`_widgetLabel` はウィジェット追加時に表示されるラベルをローカライズするための固有の属性です。

**使用例**
* nls\strings.js：「Widget.html」でローカライズするストリングを指定
```js
define({
  root: ({
    label1: "Hello"
  }),
  "ja": 1 // 日本語ロケールを使用する場合に 1 と設定
});
```
* nls\ja\strings.js：各言語フォルダーにある strings.js ファイルで表示する文字を設定
```js
define({
  label1: "こんにちは"
});
```
* Widget.html：文字を表示
```html
<label>${nls.label1}</label>
```

#### images\icon.png

カスタム ウィジェットのボタンのアイコンを変更したい場合は、このファイルを置き換えます。  
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide5.png" alt="アイコン変更">

### 2. ウィジェットの構成画面を作成する

Web AppBuilder でウィジェットの構成を行う画面を作成します。ここでは検索に使用するバッファーの距離単位を設定する画面を作成します。

1. `Buffer` フォルダーに `setting` フォルダーを作成します。

2. `setting` フォルダーに `Setting.html` ファイルを作成し、以下のコードを入力します。
  ```html
  <div>
    <table>
      <tbody>
        <td>距離単位</td>
          <td>
            <div>
              <select data-dojo-attach-point="selectLengthUnit" data-dojo-type="dijit/form/Select">
                <option value="kilometers" selected="selected">キロメートル</option>
                <option value="meters">メートル</option>
              </select>
            </div>
          </td>
      </tbody>
    </table>
  </div>
  ```
3. `setting` フォルダーに `Setting.js` ファイルを作成し、以下のコードを入力します。  
```js
define([
  'dojo/_base/declare',
  'dijit/_WidgetsInTemplateMixin',
  'jimu/BaseWidgetSetting',
  'esri/units',
  'dijit/form/Select'
], function(declare, _WidgetsInTemplateMixin, BaseWidgetSetting, esriUnits) {
  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
    baseClass: 'jimu-widget-buffer-setting',

    startup: function() {
      this.inherited(arguments);

      if (!this.config.measurement) {
        this.config.measurement = {};
      }
      this.setConfig(this.config);
    },

    setConfig: function(config) {
      this.config = config;
      if (this.config.measurement.LengthUnit) {
        this.selectLengthUnit.set('value', this.config.measurement.LengthUnit);
      } else {
        // デフォルトで表示される単位をキロメートルに設定
        this.selectLengthUnit.set('value', 'kilometers');
        this.config.measurement.UnitLabel = 'キロメートル';
      }
    },

    getConfig: function() {
      // ユーザーが単位を変更した時に config.json にその値を格納
      this.config.measurement.LengthUnit = this.selectLengthUnit.value;
      // ウィジェットのパネルに表示する単位ラベルに使用
      if (this.config.measurement.LengthUnit === 'kilometers') {
        this.config.measurement.UnitLabel = 'キロメートル';
      } else {
        this.config.measurement.UnitLabel = 'メートル';
      }
      return this.config;
    }
  });
});
```
4. `Buffer` フォルダーの `config.json` ファイルを開き、以下のコードを入力します。  
```json
{
  "measurement": {}
}
```
5. `Buffer\manifest.json` を開き `hasSettingLocale` と `hasSettingStyle` 属性を `false` にします。  
`setting` フォルダーに `css` や `nls` フォルダーを作成することで、構成画面用のスタイル定義、ローカライズが可能ですが、ここでは使用しないため `false` にします。
6. ブラウザーを更新して、バッファー検索ウィジェットを追加すると、ウィジェットの構成画面が表示されます。  
変更を反映するために Web AppBuilder を再起動（Node.js の再起動およびブラウザーで Web AppBuilder を更新）する必要がある場合があります。
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide6.png" alt="構成画面">

#### Setting\Setting.html

Web AppBuilder でウィジェットの設定を行う画面を作成します。

#### Setting\Setting.js

Web AppBuilder でウィジェットの設定を行う際の処理を実装します。`jimu/BaseWidgetSetting` の子クラスを作成し、`baseClass` に `jimu-widget-<ウィジェット名>-setting` を指定します。以下のイベントが用意されています。

  * setConfig：設定画面の初期化時
  * getConfig：設定変更時（変更内容を `config.json` のオブジェクトに格納）

#### config.json

JSON 形式のオブジェクト格納ファイルです。Web AppBuilder でウィジェットの設定を行う場合は、`config.json` に用意した空のオブジェクトに値を格納して、 `Widget.html` や `Widget.js` からそのオブジェクトを取得します。
 
### 3. ウィジェットの処理を実装する

1. `Buffer` フォルダーにある `Widget.html` ファイルを開き編集します。バッファーの半径（inputNode）とマップ上にあるレイヤーから検索対象のレイヤーを選択（layerSelectNode）する画面を作成します。

    ```html
    <div>
      <table>
        <tr>
          <td>半径を入力（${config.measurement.UnitLabel}）</td>
          <td>
            <input class="jimu-input" data-dojo-attach-point="inputNode" value="1000"></input>
          </td>
        </tr>
        <tr>
          <td>検索レイヤーを選択</td>
          <td>
            <div data-dojo-attach-point="layerSelectNode"></div>
          </td>
        </tr>
      </table>
    </div>
    ```
2. `Buffer` フォルダーにある `Widget.js` ファイルを開き編集します。  
```js
define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'jimu/BaseWidget',
  'jimu/LayerStructure',
  'esri/geometry/geometryEngine',
  'esri/symbols/SimpleMarkerSymbol',
  'esri/symbols/SimpleLineSymbol',
  'esri/symbols/SimpleFillSymbol',
  'esri/Color',
  'esri/graphic',
  'esri/tasks/query',
  'dijit/form/Select'
], function(declare, lang, BaseWidget, LayerStructure, geometryEngine, SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Color, Graphic, Query, Select) {
  return declare([BaseWidget], {
    baseClass: 'jimu-widget-buffer',

    ckickfunction: null,
    layerList: null,
    layerId: null,

    // スタートアップ時に実行されるメソッド
    startup: function() {
      this.inherited(arguments);

      // マップ上のレイヤーを取得し、レイヤー一覧を作成
      var options = [];
      var layerStructure = LayerStructure.getInstance();
      layerStructure.traversal(function(layerNode) {
        layerNode.getLayerType()
          .then(function(type) {
            if (type === 'FeatureLayer') {
              var option = {
                value: layerNode.id,
                label: layerNode.title
              };
              options.push(option);
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      });

      this.layerList = new Select({
        options: options
      }, this.layerSelectNode);
      this.layerList.startup();

      // レイヤー一覧を変更したときのイベント
      this.layerList.on("change", lang.hitch(this, function(val) {
        this.layerId = val;
      }));
    },

    // ウィジェットのパネルを開くときに実行されるメソッド
    onOpen: function() {
      this.inherited(arguments);

      // マップをクリックしたときのイベント ハンドラ
      this.ckickfunction = this.map.on("click", lang.hitch(this, this._clickHandler));
    },

    // ウィジェットのパネルを閉じるときに実行されるメソッド
    onClose: function() {
      this.inherited(arguments);

      // マップに表示されているグラフィックを削除
      this.map.graphics.clear();

      // マップのクリック イベントを削除
      this.ckickfunction.remove();
    },

    // マップのクリック イベント
    _clickHandler: function(evt) {
      // マップ コンストラクタを取得
      var map = this.map;

      // マップに表示されているグラフィックを削除
      map.graphics.clear();

      // inputNode に入力された半径の値を取得
      var distance = this.inputNode.value;

      // ウィジェット構成時に設定した半径の単位を config.json から取得
      var unit = this.config.measurement.LengthUnit;

      // クリック地点から指定した半径のバッファーを作成
      var bufferGeometry = geometryEngine.buffer(evt.mapPoint, distance, unit);
      // 作成したバッファーをマップに表示
      var sfs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([255, 0, 0]), 2),
        new Color([255, 255, 0, 0.25]));
      var graphic = new Graphic(bufferGeometry, sfs);
      map.graphics.add(graphic);

      // バッファー内のフィーチャを検索
      var query = new Query();
      query.geometry = graphic.geometry;
      query.spatialRelationship = Query.SPATIAL_REL_CONTAINS;
      // マップからレイヤー ID を指定してフィーチャ レイヤーを取得
      var layer = map.getLayer(this.layerId);
      // フィーチャ レイヤーに対してクエリを実行
      layer.queryFeatures(query)
        .then(function(featureSet) {
          // ポイント、ライン、ポリゴンごとにシンボルを設定
          var highlightSymbol;
          if (layer.geometryType == "esriGeometryPoint") {
            highlightSymbol = new SimpleMarkerSymbol();
            highlightSymbol.setColor(new Color("#f00"));
            highlightSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 16,
              new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 1),
              new Color([255, 0, 0, 0.5]));
          } else if (layer.geometryType == "esriGeometryPolyline") {
            highlightSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0, 0.5]), 6);
          } else {
            highlightSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
              new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 3),
              new Color([125, 125, 125, 0.5]));
          }
          // 結果を表示
          featureSet.features.forEach(function(feature) {
            var queryGraphic = new Graphic(feature.geometry, highlightSymbol);
            map.graphics.add(queryGraphic);
          });
        });
    }
  });
});
```
3. Web AppBuilder で新しくアプリケーションを作成します。
4. Web AppBuilder でフィーチャ サービスをレイヤーとして追加した Web マップを表示します（このウィジェットはフィーチャ レイヤーに対してバッファー検索を行います）。
5.	バッファー検索ウィジェットを追加し、バッファー検索ウィジェットのボタンをクリックして、半径とレイヤーを設定します。  
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide7.png" alt="バッファー検索設定">
6. マップ上をクリックすると、バッファー内にあるフィーチャがハイライト表示されます。  
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide8.jpg" alt="バッファー検索実行">

#### Widget.html

ウィジェットの画面を作成します。Web AppBuilder には、デフォルトでいくつかの <a href="https://developers.arcgis.com/web-appbuilder/api-reference/css-framework.htm" target="_blank">css クラス</a>が含まれており、アプリのデザインを統一させることができます。各クラスの詳細は css ファイル（jimu.js/css/jimu.css）を参照ください。

**使用例：**  
```html
<input class="jimu-input" data-dojo-attach-point="inputNode" value="10000"></input>
```  
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide9.png" alt="Widget.html">

#### css\style.css

`Widget.html` のスタイル定義ファイルです。

**使用例：**  
```css
jimu-widget-<ウィジェット名> div:first-child {
     color: red;
}
```  
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide10.png" alt="Widget.html">

#### Widget.js

ウィジェットの機能を実装するファイルです。`jimu/BaseWidget` の子クラスを作成し、`"baseClass"` に `jimu-widget-<ウィジェット名>` を指定します。  
`"baseClass"` は、ウィジェットの css クラスとして適用されるためスタイルの競合を避けることができ、スタイルを定義する際に役立ちます。

##### ウィジェットのプロパティ

Web AppBuilder で表示しているマップには `map` プロパティを使用してアクセスします。

**使用例：**

* Widget.js：

```js
this.mapIdNode.innerHTML = 'マップのID：' + this.map.id;
```
* Widget.html：

```html
<div data-dojo-attach-point="mapIdNode"></div>
```

その他に利用可能なプロパティは以下です。

  * id
  * label
  * icon
  * uri
  * position
  * config（config.json のオブジェクト）
  * appConfig（アプリの構成ファイルのオブジェクト）
  * folderUrl
  * state（ウィジェットの状態：`"opened"`、`"closed"` または `"active"`）
  * windowState（ウィジェット ウィンドウの状態：`"normal"`、`"minimized"` または `"maximized"`）
  * started（ウィジェットの起動状態）
  * name
  * baseClass
  * templateString

##### ウィジェットのメソッド

ウィジェットは、読み込みやウィジェットの開閉などのイベントの発生で実行されるメソッドが定義されています（<a href="https://developers.arcgis.com/web-appbuilder/guide/widget-life-cycle.htm" target="_blank">ウィジェット ライフサイクル</a>）。このメソッド内に処理を追加することで、ウィジェットをカスタマイズしていきます。  
例えば、ウィジェットが開かれた時に処理を実行するには `onOpen` メソッドを使用します。  

**使用例：**
```js
onOpen: function() {
  var map = this.map;
  // ...
}
```

その他に利用可能なメソッドは以下です。

  * onOpen
  * onClose
  * onNormalize
  * onMinimize
  * onMaximize
  * onActive
  * onDeActive
  * onSignIn
  * onSignOut
  * onPositionChange

##### 利用可能な Dojo のウィジェット

Web AppBuilder では Dojo Toolkit が提供している<a href="https://dojotoolkit.org/reference-guide/1.10/dijit/" target="_blank">ウィジェット（dijit）</a>を使用することができます。  
さらに、Web AppBuilder 独自の<a href="https://developers.arcgis.com/web-appbuilder/guide/widget-life-cycle.htm" target="_blank">ウィジェット（jimu.js/dijit）</a>も提供されています。  
ヘルプに使用方法は記載されていませんが、Web AppBuilder に含まれている以下のウィジェットも使用できます。

  * CheckBox
  * RadioBtn
  * DrawBox
  * ColorPicker
  * Popup
  * ImageChooser
  * TabContainer
  * ExtentChooser
  * Message
  * LayerFieldChooser
  * PopupConfig
  * SymbolChooser

##### nls

ウィジェットで表示されるメニューを多言語化する場合に使用します。ウィジェット名をローカライズした方法と同様の手順でローカライズできます。

### ウィジェットの更新

#### Web AppBuilder に追加する場合

`<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` にフォルダーを配置します。ウィジェットの構成用ファイルを更新した場合は、ブラウザーで Web AppBuilder を更新することで、更新内容が Web AppBuilder に反映されます。  
※ 更新前に作成したアプリケーションには更新内容は反映されません。新たに設置したカスタム ウィジェットを利用したい場合は、新たにアプリケーションを作成する必要があります。

#### ダウンロードした Webアプリケーションに追加する場合

ダウンロードしたアプリケーションの `widgets` フォルダーの直下にカスタム ウィジェットのフォルダーを配置し、アプリケーションのルート フォルダーにある `config.json` の `widgetOnScreen`（マップ上に表示）または `widgetPool`（ツールバー上に表示）セクションの `widgets` 属性にウィジェットの参照先等を設定します。

**widgetPool にウィジェットを追加する例：**
```js
{
  "name": "<ウィジェット名>",
  "label": "<アプリで表示する名前>",
  "uri": "widgets/<ウィジェット名>/Widget"
}
```

### ウィジェット開発時の Tips

Web AppBuilder では新規にアプリケーションを作成するときに、`<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` フォルダーに配置されたウィジェットが読み込まれます。作成済みの既存アプリケーションには、ウィジェットの更新内容は反映されないため、ウィジェットを更新する度に新規にアプリケーションを作成する作業が発生してしまい、非常に面倒です。  
開発段階でウィジェットの更新や動作確認を行うには、以下の手順が便利です。

1. Web AppBuilder で新規にアプリケーションを作成します。
2. `<Web AppBuilder のインストール ディレクトリ>\server\apps` フォルダーを開きます。このフォルダーには Web AppBuilder で作成したアプリケーションが配置されています。  
フォルダー名にはアプリケーションの作成順に数字が割り当てられます。  
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide11.jpg" alt="フォルダー">
3. 手順1で作成したアプリケーションのフォルダーを開き、ウィジェットの構成ファイルを更新します。アプリケーション名は、各アプリケーションのルート フォルダーにある `config.json` ファイルに記載された JSON の `title` 属性で確認できます。  
<img src="https://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide12.jpg" alt="config.json">
4. Web AppBuilder で該当するアプリケーションを開きます。既に開いている場合はブラウザーを更新します。
