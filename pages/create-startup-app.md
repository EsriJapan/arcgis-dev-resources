# シンプルな地図アプリの作成

ArcGIS for Developers を利用した地図アプリの作成方法を紹介します。地図の表示と機能の追加は簡易な JavaScript API での実装例をお伝えしますが、ArcGIS Runtime SDK についても基本的にできることは変わりません。

## サンプル コードのダウンロード

このリポジトリ（[arcgis-samples-js](https://github.com/EsriJapan/arcgis-samples-js)）には開発を試してみたい方向けのサンプル コードが含まれています。ダウンロードする際の方法は 2 通りあります。

* __リポジトリをご自身のアカウントに Fork（複製）__
> 1. GitHub にログインして、[arcgis-samples-js](https://github.com/EsriJapan/arcgis-samples-js) ページを開いて [Fork] をクリックすると、ご自身のアカウントに同じリポジトリが作成されます。
> 1. Fork 後はご自身のローカル マシンにクローンを作成します。

* __zip ファイルでダウンロード（※GitHub アカウントをお持ちでない方向け）__
> [arcgis-samples-js](https://github.com/EsriJapan/arcgis-samples-js) ページを開いて [Download ZIP] をクリックするとプロジェクト ファイル一式が手に入ります。

<img src="http://apps.esrij.com/arcgis-dev/guide/img/startup/sample-download.png" width="600px">

## 地図の表示

まずはダウンロードしたサンプル コードを実行してみましょう。

1. ダウンロードしたサンプル コード（[arcgis-samples-js/simple/map.html](https://github.com/EsriJapan/arcgis-samples-js/blob/gh-pages/simple/map.html)）を Web ブラウザーにドラッグ＆ドロップします。
> ※Web サーバーをお持ちの方はサンプル コードを Web サーバーにホストしてアクセスすることを推奨します。`http://localhost/arcgis-samples-js/simple/map.html` のように localhost を指定してアクセスできます。

1. この状態では地図は表示されません。サンプル コードをテキスト エディターで開いてみましょう。

1. `map.html` 29 行目にある以下のコードの `<Web マップ ID>` と記載されている箇所に [Web マップの作成](create-webmap.md)で作成した Web マップ ID を上書きします。
> ```javascript
> var mapDeferred = arcgisUtils.createMap("<Web マップ ID>", "mapDiv");
> ```
> まだ Web マップを作成しておらず、すぐに試してみたい方は[サンプル Web マップ](http://www.arcgis.com/home/item.html?id=d3ee769333954213b2f7e894e8e1032c)をご利用ください。

1. Web アプリを実行すると、以下のように地図が表示されます。
> <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup/map-app.png" width="450px">

## 検索機能の追加

検索機能の実装方法はいくつかありますが、ここではもっとも簡単な方法をご紹介します。検索機能の実装には `esri/dijit/Search` モジュール（検索ウィジェット）を使用します。検索ソースには[サンプル Web マップ](www.arcgis.com/home/item.html?id=d3ee769333954213b2f7e894e8e1032c)に含まれる東京都 23 区のデータを使用します。

> ![検索ウィジェット](http://apps.esrij.com/arcgis-dev/guide/img/startup/search-widget.png)
>
> 検索ウィジェットは住所検索/属性検索機能を組み込んだ文字入力フォームの UI を提供します。

1. ArcGIS API for JavaScript から使用したいモジュールを追加します。モジュールのインポートは `require` 関数の第一引数に入力される配列内で行います。配列内に検索機能の実装に必要なモジュールを追加します。
> ```javascript
> require(["esri/arcgis/utils", "esri/dijit/Search", "esri/layers/FeatureLayer", "esri/InfoTemplate", "dojo/domReady!"],
> function(arcgisUtils, Search, FeatureLayer, InfoTemplate) {
>   ...
> });
> ```
> 以下は検索機能に必要なモジュール一覧です。
>
    > * `"esri/dijit/Search"`: 検索ウィジェット
    > * `"esri/layers/FeatureLayer"`: フィーチャ レイヤー（オプション）
    > * `"esri/InfoTemplate"`: 情報テンプレート（オプション）
>
> フィーチャ レイヤーは検索ソース、情報テンプレートは検索結果の属性表示を設定するために利用します。
>
> ここで以下の点に注意してください。
> * 配列の一番最後のモジュールは必ず `"dojo/domReady!"` になるようにしてください
> * `require` 関数の第ニ引数の無名関数の引数にはモジュールに対応したクラス名（任意）を定義しますが、これは配列内のモジュールの順序と対応している必要があります

1. 検索ウィジェット用の DOM 要素を作成します。
> ```html
> <div id="searchDiv"></div>
> ```
> ここで指定した DIV の ID は検索ウィジェットを作成する際に、JavaScript 側で使用します。

1. 検索ウィジェットの表示位置を CSS で記述します。
> ```css
> #searchDiv {
>   display: block;
>   position: absolute;
>   z-index: 2;
>   top: 20px;
>   left: 74px;
> }
> ```

1. `mapDeffered.then` の関数内で検索ウィジェット作成のスクリプトを記述します。
> ```javascript
> mapDeferred.then(function(response) {
>     map = response.map;
>     var search = new Search({
>         map: map,
>         sources: []
>     }, "searchDiv");
> });
> ```
>
> `"esri/dijit/Search"` モジュールが定義する `Search` クラスは `require` 関数内でのみ動作します。
>
> マップのオブジェクトは `mapDeffered.then` の処理完了後の `Deferred` で取得できます。検索ウィジェットはマップのオブジェクトを使用するため、この位置に記述する必要があります。
>
> 対応するマップを指定するための `map` プロパティにはマップのオブジェクトを、検索ソースを指定するための `sources` プロパティには空の配列を定義します。検索ソースがない状態でも ArcGIS のクラウド サービスが提供する住所検索サービスが標準で含まれています。

1. 検索ソースに検索対象とするフィーチャ レイヤーを定義します。
> ```javascript
>     var sources = search.get("sources");
>     sources.push({
>        featureLayer: new FeatureLayer("http://services.arcgis.com/wlVTGRSYTzAbjjiC/arcgis/rest/services/tokyo_23/FeatureServer/0"), // 検索ソースとなるフィーチャ レイヤー
>        placeholder: "検索キーワードの入力", // プレースホルダー
>        enableLabel: false, // 検索結果ラベルの表示
>        searchFields: ["<フィールド名>"], // 検索対象となる属性フィールド
>        displayField: "<フィールド名>", // 検索結果のポップアップに表示する属性フィールド
>        outFields: ["*"] // 結果として返す属性フィールド
>        name: "東京都", // 検索ソースの名前
>        infoTemplate: new InfoTemplate("東京都", "市区町村: ${Name}"), // 検索結果のポップアップ表示構成
>        enableSuggestions: true // 検索結果の候補リスト表示
>     });
>     // 検索ソースを検索ウィジェットに設定
>     search.set("sources", sources);
>     search.startup();
> ```
>
> `sources.featureLayer` には検索ソースとなるレイヤーを定義しますが、必ずしも地図上に表示されているレイヤーを使う必要はありません。サンプルはマップ オブジェクトに存在しない別のレイヤーを検索ソースとして利用します。
>
> フィールド名の確認は次の手順で紹介します。

1. 検索対象とするレイヤーの詳細ページにて、[レイヤー] の項目から対象とするレイヤーをクリックして [サービスの URL] を選択します。
> <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup/view-fields.gif" width="450px">

1. [Fields] という項目にレイヤーのフィールド情報のリストが表示されているので、検索対象とするフィールド名をコピーして `searchFields` の配列に追加します。
> 検索結果のポップアップに表示する属性情報として利用したい場合は `displayField` にも入力してください。

1. Web アプリを実行すると、以下のように地図上に検索ウィジェットが表示され、設定した検索ソースでの検索が可能になります。
> <img src="http://apps.esrij.com/arcgis-dev/guide/img/startup/search-app.gif" width="450px">

---

[:back: メインページへ戻る](https://github.com/EsriJapan/arcgis-dev-resources/blob/gh-pages/README.md)
