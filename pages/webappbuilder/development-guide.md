## はじめに

### このガイドについて

このガイドは Web AppBuilder for ArcGIS (Developer Edition) （以下、Web AppBuilder）で使用するカスタム ウィジェットを作成する方法を説明します。  
Web AppBuilder のインストール方法に関しては、[Web AppBuilder for ArcGIS (Developer Edition) インストールガイド](../install-guide/)をご参照ください。  
また [Esri Japan GitHub](https://github.com/EsriJapan/arcgis-webappbuilder-widgets-themes) では、Web AppBuilder のカスタム ウィジェット/テーマが共有されています。このガイドで作成するウィジェットの完成版も公開されています。

#### 既成ウィジェットのソースコードの確認

Web AppBuilder で使われる全てのウィジェットは `<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` に格納されていて、ソースコードを確認できます。開発したカスタム ウィジェットも同様にこのディレクトリに配置します。  
上記ディレクトリにある `samplewidgets` フォルダーには簡易機能のサンプル ウィジェットが用意されています（本ガイドではウィジェット作成の雛形となるコードが記述されたテンプレートである `CustomWidgetTemplate` を使用します）。

#### ウィジェットのフォルダー構成

カスタム ウィジェットを作成する際に使用するファイルは以下です。全ファイルが必須ではなく、ウィジェットの UI を設ける、ウィジェットをローカライズする、設定画面を設ける等の目的に応じてファイルを準備します。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide1.jpg" alt="フォルダー構成">

## カスタム ウィジェットの開発

### ウィジェット ボタンを配置する

Web AppBuilder のウィジェットは2 種類に分けられます。1 つは「描画」ウィジェットのようなパネルを表示して使用するウィジェットです（Web AppBuilder では In-Panel ウィジェットと呼びます）。もう 1 つは、「現在位置」ウィジェットのように画面上にボタンのみを配置するパネルを表示しないウィジェットです（Off-Panel ウィジェットと呼びます）。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide2.jpg" alt="ウィジェットの種類">

本ガイドでは簡単なバッファー検索を行う In-Panel ウィジェットを開発していきます。ウィジェットを追加するには `<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` にウィジェットのフォルダーを配置します。

<ol start="1">
<li>`<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets\samplewidgets` にある `CustomWidgetTemplate` フォルダーを `<Web AppBuilder のインストール ディレクトリ>\client\stemapp\widgets` にコピーします。</li>
<li>`CustomWidgetTemplate` フォルダーの名前を `Buffer` に変えます。<br>
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide3.jpg" alt="フォルダー名"><br>フォルダー名がウィジェット名となります。ウィジェット名は半角英数字である必要があります。</li>
<li>`Buffer` フォルダー直下にある `manifest.json` ファイルを開きます。</li>
<li>`name` 属性の値を `Buffer` に変更します。</li>
<li>文字コードに UTF8 を指定して、`manifest.json` ファイルを保存します。  
以降で紹介する手順においてもファイルを保存する際は、文字コードを UTF8 に指定して保存するようにしてください。</li>
</ol>

#### manifest.json

ウィジェットの名前やバージョン等を設定するファイルです。`properties` 属性でカスタム ウィジェットのプロパティを構成できます。`inPanel` を `false` に設定すると Web AppBuilder のウィジェットの追加画面に表示されなくなります。ウィジェットのプロパティについては<a href="https://developers.arcgis.com/web-appbuilder/guide/widget-manifest.htm" target="_blank">Widget manifest</a>をご参照ください。

<ol start="6">
<li>Web AppBuilder のウィジェットの追加画面で表示されるウィジェット名をローカライズします。ウィジェットのローカライズは `Buffer` フォルダーの直下にある `nls` フォルダーで設定します。`Buffer\nls` フォルダーにある `strings.js` ファイルを開き、以下のコードを入力し保存します。  
<pre><code class="lang-js">define({root: {_widgetLabel: "Buffer"},
  "ja": 1
});</code></pre>
</li>
<li>`nls` フォルダー直下に `ja` フォルダーを作成します。</li>
<li>`ja` フォルダーに `strings.js` ファイルを作成し、以下のコードを入力し保存します。  
<pre><code class="lang-js">define({
  _widgetLabel: "バッファー検索"
});
</code></pre>
</li>
<li>Web AppBuilder を再起動（Node.js の再起動及びブラウザーで Web AppBuilder を更新）し、新たにアプリケーションを作成すると、ウィジェットの追加画面で「バッファー検索」というウィジェット名が表示されます。<br>
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide4.jpg" alt="追加画面"><br>
※ ビルドした Web アプリで表示されるウィジェット名は Web AppBuilder のウィジェット構成画面で変更可能です。
</li>
</ol>

#### nls フォルダー

カスタム ウィジェットを多言語化する場合に使用します（アクセスするブラウザーのロケールにより該当する言語が表示されます）。`_widgetLabel` はウィジェット追加時に表示されるラベルをローカライズするための固有の属性です。

**使用例**
* strings.js：「Widget.html」でローカライズするストリングを指定
```js
define({root: {label1:"Hello"},
  "ja": 1 //日本語表示する場合に 1 と設定
});
```
* ja\strings.js：各言語フォルダーにある strings.js ファイルで表示する文字を設定
```js
define({
  label1:"こんにちは"
});
```
* Widget.html：ラベルを表示
```html
<label>[${nls.label1}]</label>
```

#### images\icon.png

カスタム ウィジェットのボタンのアイコンを変更したい場合は、このファイルを置き換えます。  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide5.png" alt="アイコン変更">

### ウィジェットの構成画面を作成する

Web AppBuilder でウィジェットの構成を行う画面を作成します。ここでは検索に使用するバッファーの距離単位を設定する画面を作成します。

1. `Buffer` フォルダーに `setting` フォルダーを作成します。
2. `setting` フォルダーに `Setting.html` ファイルを作成し、以下のコードを入力します。  
```html
<div style="width:100%;height:100%;">
  <table class="settings-section">
    <tbody>
      <td>距離単位</td>
        <td>
          <div>
            <select style="margin-left: 10px;" data-dojo-attach-point="selectLengthUnit" data-dojo-type="dijit/form/Select">
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
  'dojo/_base/declare', 'dojo/_base/lang', 'dojo/Deferred', 'dijit/_WidgetsInTemplateMixin', 'jimu/BaseWidgetSetting', 'esri/units', 'dijit/form/Select'
], function(declare, lang, Deferred, _WidgetsInTemplateMixin, BaseWidgetSetting, esriUnits) {
  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
    baseClass: 'jimu-widget-Buffer-setting',

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
        this.selectLengthUnit.set('value',  this.config.measurement.LengthUnit);
      } else {
        //デフォルトで表示される単位をキロメートルに設定
        this.selectLengthUnit.set('value', "kilometers");
        this.config.measurement.UnitLabel = "キロメートル";
      }
    },

    getConfig: function() {
      //ユーザーが単位を変更した時に config.json にその値を格納
      this.config.measurement.LengthUnit = this.selectLengthUnit.value;
      //ウィジェットのパネルに表示する単位ラベルに使用
      if (this.config.measurement.LengthUnit == "kilometers") {
        this.config.measurement.UnitLabel = "キロメートル";
      } else {
        this.config.measurement.UnitLabel = "メートル";
      }
      return this.config;
    }
  });
});
```
4. `Buffer` フォルダーに `config.json` ファイルを作成し、以下のコードを入力します。  
```js
{
  "measurement": {}
}
```
5. `Buffer\manifest.json` を開き `hasSettingLocale` と `hasSettingStyle` 属性を `false` にします。  
`setting` フォルダーに `css` や `nls` フォルダーを作成することで、構成画面用のスタイル定義、ローカライズが可能ですが、ここでは使用しないため `false` にします。
6. ブラウザーで Web AppBuilder を更新後、新しくアプリケーションを作成し、バッファー検索ウィジェットを追加すると、ウィジェットの構成画面が表示されます。  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide6.png" alt="構成画面">

#### Setting\Setting.html

Web AppBuilder でウィジェットの設定を行う画面を作成します。

#### Setting\Setting.js

Web AppBuilder でウィジェットの設定を行う際の処理を実装します。`jimu/BaseWidgetSetting` の子クラスを作成し、`baseClass` に `jimu-widget-<ウィジェット名>-setting` を指定します。以下のイベントが用意されています。
* setConfig：設定画面の初期化時
* getConfig：設定変更時（変更内容を `config.json` のオブジェクトに格納）

#### config.json

JSON 形式のオブジェクト格納ファイルです。Web AppBuilder でウィジェットの設定を行う場合は、`config.json` に用意した空の配列にオブジェクトを格納して、 `Widget.html` や `Widget.js` からそのオブジェクトを取得します。
 
### ウィジェットの処理を実装する

1. `Buffer` フォルダーにある `Widget.html` ファイルを開き編集します。バッファーの半径（inputNode）とマップ上にあるレイヤーから検索対象のレイヤーを選択する画面（selectlayer）を作成します。  
```html
<div style="width:100%;height:100%;">
  <table>
    <tr>
      <td>半径を入力（${config.measurement.UnitLabel}）</td>
      <td><input class="jimu-input" data-dojo-attach-point="inputNode" value="1000"></input></td>
    </tr>
    <tr>
      <td>検索レイヤーを選択</td>
      <td><div id="selectlayer"></div></td>
    </tr>
  </table>
</div>
```
2. `Buffer` フォルダーにある `Widget.js` ファイルを開き編集します。  
```js
//>>built
define(['dojo/_base/declare', 'jimu/BaseWidget', 'esri/geometry/geometryEngine', 'esri/symbols/SimpleFillSymbol', 'esri/symbols/SimpleLineSymbol', 'esri/Color', 'esri/graphic', 'esri/tasks/query', 'esri/symbols/SimpleMarkerSymbol', 'dijit/form/Select'
], function (declare, BaseWidget, geometryEngine, SimpleFillSymbol, SimpleLineSymbol, Color, Graphic, Query, SimpleMarkerSymbol, Select) {
  var clazz = declare([BaseWidget], {
    baseClass: 'jimu-widget-Buffer',
    ckickfunction:null,
    layerlist:null,

    //ウィジェットのパネルを表示した際のイベント
    onOpen: function(){
      this.inherited(arguments);
      var distanceNode = this.inputNode;
      var json = this.config.measurement;
      //マップ コンストラクタを取得
      var map = this.map;
      this.ckickfunction = this.map.on("click", clickHandler);
      //マップ上のレイヤーを取得し、レイヤー一覧を selectlayer に表示
      if (!this.layerlist){
        this.layerlist = Select({name: "select"}, "selectlayer");
        for(var j = 0; j < map.graphicsLayerIds.length; j++) {
          var addlayer = map.getLayer(map.graphicsLayerIds[j]);
          option = { value: addlayer.id, label: addlayer.name, selected: true };
          this.layerlist.addOption([option]);
        }
        layerStr = this.layerlist.get("value");
        this.layerlist.startup();
      }
      // selectlayer で選択レイヤーを変更したとき
      this.layerlist.on("change", function(){
        layerStr = this.get("value");
      });

      //マップ上をクリック
      function clickHandler(evt){
        map.graphics.clear();
        //inputNodeの値を取得
        distance = distanceNode.value;
        //バッファー用のジオメトリを作成
        //半径の単位を config.json から取得
        var bufferGeometry = geometryEngine.buffer(evt.mapPoint, distance, json.LengthUnit);
        //Graphic を作成し GraphicsLayer に追加
        var sfs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([255,0,0]), 2),new Color([255,255,0,0.25]));
        var graphic = new Graphic(bufferGeometry, sfs);
        map.graphics.add(graphic);

        //バッファー検索
        var query = new Query();
        query.geometry = graphic.geometry;
        query.spatialRelationship = Query.SPATIAL_REL_CONTAINS;
        //マップ上からレイヤー ID を指定してフィーチャ レイヤーを取得
        var layer = map.getLayer(layerStr); 
        //フィーチャ レイヤーに対してクエリを実行
        layer.queryFeatures(query).then(function(featureSet){
          var resultGraphics = featureSet.features;
          for (var i=0; i<resultGraphics.length; i++) {
            //ポイント、ライン、ポリゴンごとにシンボルを設定
            if (layer.geometryType == "esriGeometryPoint"){
              var highlightSymbol = new esri.symbol.SimpleMarkerSymbol();
              highlightSymbol.setColor(new Color("#f00"));
            } else if (layer.geometryType == "esriGeometryPolygon"){
              var highlightSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255,0,0]), 3), new Color([125,125,125,0.5]));
            } else {
              var highlightSymbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255,0,0,0.5]), 6);
            } 
            //クエリ結果の Graphic を GraphicsLayer に追加
            var queryGraphic = new Graphic(resultGraphics[i].geometry, highlightSymbol);
            map.graphics.add(queryGraphic);
          };
        });
      }
    },

    //パネルを閉じたときに GraphicsLayer から Graphic を削除
    onClose: function(){
      this.map.graphics.clear();
      this.ckickfunction.remove();
    }
  });
  return clazz;
});
```
3. Web AppBuilder で新しくアプリケーションを作成します。
4. Web AppBuilder でフィーチャ サービスをレイヤーとして追加した Web マップを表示します（このウィジェットはフィーチャ レイヤーに対してバッファー検索を行います）。
5.	バッファー検索ウィジェットを追加し、バッファー検索ウィジェットのボタンをクリックして、半径とレイヤーを設定します。  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide7.png" alt="バッファー検索設定">
6. マップ上をクリックすると、バッファー内にあるフィーチャがハイライト表示されます。  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide8.jpg" alt="バッファー検索実行">

#### Widget.html

ウィジェットの画面を作成します。Web AppBuilder にデフォルトで含まれている以下の css ファイル（jimu.js/css/jimu.css）を使用することができます。
* jimu-input
* jimu-btn
* Jimu-icon-btn
* Jimu-nav-bar
* jimu-oe-row

**使用例：**  
```html
<input class="jimu-input" data-dojo-attach-point="inputNode" value="10000"></input>
```  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide9.png" alt="Widget.html">

#### css\style.css

`Widget.html` のスタイル定義ファイルです。

**使用例：**  
```css
jimu-widget-<ウィジェット名> div:first-child {
     color: red; 
}
```  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide10.png" alt="Widget.html">
 
#### Widget.js

ウィジェットの機能を実装するファイルです。`jimu/BaseWidget` の子クラスを作成し、"baseClass" に `jimu-widget-<ウィジェット名>` を指定します。

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
* icon
* config（config.json の配列）
* appConfig
* folderUrl
* state（ウィジェットの状態：”opened” または “closed”）
* windowState

##### ウィジェットのコールバック

ウィジェットが開かれた時に処理を実行するには `onOpen` コールバックを使用します。  
```js
onOpen: function() {
  var map = this.map;
  ...
}
```

コールバックに用意されている属性は以下です。
* onOpen
* onMaximized
* onMinimized
* onClose
* onSignIn
* onSignOut
* onPositionChange
* resize

##### 利用可能な Dojo のウィジェット

Web AppBuilder にデフォルトで含まれている以下の Dojo Toolkit で提供されるウィジェット （jimu.js/dijit）を使用することができます。  
ヘルプに使用方法は記載されていませんが、Web AppBuilder にデフォルトで含まれている以下のウィジェットも使用できます。
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
フォルダー名にはアプリケーションの作成順に1からの数字が割り当てられます。  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide11.jpg" alt="フォルダー">
3. 手順1で作成したアプリケーションのフォルダーを開き、ウィジェットの構成ファイルを更新します。アプリケーション名は、各アプリケーションのルート フォルダーにある `config.json` ファイルに記載された JSON の `title` 属性で確認できます。  
<img src="http://apps.esrij.com/arcgis-dev/guide/img/webappbuilder/development-guide12.jpg" alt="config.json">
4. Web AppBuilder で該当するアプリケーションを開きます。既に開いている場合はブラウザーを更新します。
