## サンプル プロジェクトのダウンロード

このリポジトリ（[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources)）には開発を試してみたい方向けのサンプル コードが含まれています。ダウンロードする際の方法は 2 通りあります。

* __リポジトリをご自身のアカウントに Fork（複製）__

 1. GitHub にログインして、[arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Fork] をクリックすると、ご自身のアカウントに同じリポジトリが作成されます。
 1. Fork 後はご自身のローカル マシンにクローンを作成します。


* __zip ファイルでダウンロード（※GitHub アカウントをお持ちでない方向け）__

 [arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) ページを開いて [Download ZIP] をクリックするとプロジェクト ファイル一式が手に入ります。

 <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-ios/sample-download.png" width="600px">

## 地図の表示

まずはダウンロードしたサンプル コードを実行してみましょう。

1. ダウンロードしたサンプル コード（[arcgis-dev-resources/startup/javascript/4.x/map/index.html](https://github.com/EsriJapan/arcgis-dev-resources/blob/master/startup/javascript/4.x/map/index.html)）を Web ブラウザーにドラッグ＆ドロップします。
> ※Web サーバーをお持ちの方はサンプル コードを Web サーバーにホストしてアクセスすることを推奨します。`http://localhost/arcgis-dev-resources/startup/javascript/4.x/map/index.html` のように localhost を指定してアクセスできます。

1. この状態では地図は表示されません。サンプル コードをテキスト エディターで開いてみましょう。

1. 26 行目にある以下のコードの `<Web マップ ID>` と記載されている箇所に [Web マップの作成](../create-webmap)で作成した Web マップ ID を上書きします。このコードで Web マップを参照します。
> ```javascript
> // Web マップの参照
>	var map = new WebMap({
>   portalItem: {
>     id: "<Web マップ ID>"
>   }
> });
> ```
> まだ Web マップを作成しておらず、すぐに試してみたい方は[サンプル Web マップ](https://www.arcgis.com/home/item.html?id=d3ffea931f4a455f9c3b6c2102e66eda)をご利用ください。

1. 31～34 行目のコードは地図のビューを作成しています。先のコードで参照した Web マップを地図データのソースとして、実際に地図の表示を行います。2D 地図は `MapView`、3D 地図は `SceneView` を使用します。
> __2D の場合__
> ```javascript
> // 地図ビュー
> var view = new MapView({
>   map: map,
>   container: "viewDiv"
> });
> ```
> __3D の場合__
> ```javascript
> // 地図ビュー
> var view = new SceneView({
>   map: map,
>   container: "viewDiv"
> });
> ```
> このように地図のビューを切り替えるだけで簡単に 2D と 3D を使い分けることができます。

1. Web アプリを実行すると、以下のように地図が表示されます。
> __2D__
>
> <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-js4.0/map-app-2d.png" width="450px">
>
> __3D__
>
> <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-js4.0/map-app-3d.png" width="450px">

## 検索機能の追加

検索機能の実装方法はいくつかありますが、ここではもっとも簡単な方法をご紹介します。検索機能の実装には `esri/widgets/Search` モジュール（検索ウィジェット）を使用します。検索ソースには[サンプル Web マップ](https://www.arcgis.com/home/item.html?id=d3ffea931f4a455f9c3b6c2102e66eda)に含まれる東京都 23 区のデータを使用します。

> ![検索ウィジェット](http://apps.esrij.com/arcgis-dev/guide/img/startup-js4.0/search-widget.png)
>
> 検索ウィジェットは住所検索/属性検索機能を組み込んだ文字入力フォームの UI を提供します。

1. ArcGIS API for JavaScript から使用したいモジュールを追加します。モジュールのインポートは `require` 関数の第一引数に入力される配列内で行います。配列内に検索機能の実装に必要なモジュールを追加します。
> ```javascript
> require(["esri/views/MapView", "esri/WebMap", "esri/widgets/Search", "esri/layers/FeatureLayer"],
> function(MapView, WebMap, Search, FeatureLayer) {
>   ...
> });
> ```
> 以下は検索機能に必要なモジュール一覧です。
>
    > * `"esri/widgets/Search"`: 検索ウィジェット
    > * `"esri/layers/FeatureLayer"`: フィーチャ レイヤー（オプション）
>
> フィーチャ レイヤーは検索ソース、情報テンプレートは検索結果の属性表示を設定するために利用します。
>
> ここで以下の点に注意してください。
> * `require` 関数の第ニ引数の無名関数の引数にはモジュールに対応したクラス名（任意）を定義しますが、これは配列内のモジュールの順序と対応している必要があります

1. 検索ウィジェット作成のスクリプトを記述します。
> ```javascript
> // 検索ウィジェット
> var search = new Search({
>     view: view,
>     allPlaceholder: "検索キーワードの入力",
>     sources: [{
>       layer: new FeatureLayer({
>         url: "//services.arcgis.com/wlVTGRSYTzAbjjiC/arcgis/rest/services/tokyo_23/FeatureServer/0",
>         popupTemplate: {
>           title: "東京都 {Name}",
>           overwriteActions: true
>         }
>       }), // 検索ソースとなるフィーチャ レイヤー
>       placeholder: "検索キーワードの入力", // プレースホルダー
>       searchFields: ["Name"], // 検索対象となる属性フィールド
>       displayField: "Name", // 検索結果のポップアップに表示する属性フィールド
>       outFields: ["*"], // 結果として返す属性フィールド
>       name: "東京都", // 検索ソースの名前
>       exactMatch: false
>     }]
> });
>
> search.startup();
> ```
>
> `"esri/widgets/Search"` モジュールが定義する `Search` クラスは `require` 関数内でのみ動作します。
>
> 対応するマップを指定するための `map` プロパティにはマップのオブジェクトを、検索ソースを指定するための `sources` プロパティには検索ソースの情報を定義します。検索ソースがない状態でも ArcGIS のクラウド サービスが提供する住所検索サービスが標準で含まれています。
>
> `sources.layer` には検索ソースとなるレイヤーを定義しますが、必ずしも地図上に表示されているレイヤーを使う必要はありません。サンプルはマップ オブジェクトに存在しない別のレイヤーを検索ソースとして利用します。
>
> フィールド名の確認は次の手順で紹介します。

1. 検索対象とするレイヤーの詳細ページにて、[レイヤー] の項目から対象とするレイヤーをクリックして [サービスの URL] を選択します。
> <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup/view-fields.gif" width="450px">

1. [Fields] という項目にレイヤーのフィールド情報のリストが表示されているので、検索対象とするフィールド名をコピーして `searchFields` の配列に追加します。
> 検索結果のポップアップに表示する属性情報として利用したい場合は `displayField` にも入力してください。

1. 最後に検索ウィジェットを地図ビュー上に配置します。
> ```javascript
> // 地図ビューに検索ウィジェットを配置
> view.ui.add(search, {
>   position: "top-right"
> });
> ```
>
> `positon` プロパティで地図ビュー上の四隅への配置位置が指定できます。

1. Web アプリを実行すると、以下のように地図上に検索ウィジェットが表示され、設定した検索ソースでの検索が可能になります。
> <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup-js4.0/search-3d.gif" width="450px">

---

アプリの動作が確認できたら [ArcGIS の OAuth 認証について学びましょう！](../authentication)
