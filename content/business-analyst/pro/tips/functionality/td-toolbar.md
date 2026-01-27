+++
title = "テリトリー デザイン ツールバー"
description = "テリトリー デザイン ツールバーから利用できる機能の対応表です。"
Weight = 5
alwaysopen = false
date = 2022-02-04T00:00:00+09:00
author = "中山、石橋" 
draft = false
publishDate = 2022-01-13T00:00:00+09:00
+++

ArcMap 版 BA Desktop の <a href="https://desktop.arcgis.com/ja/arcmap/latest/extensions/business-analyst/overview-of-the-territory-design-toolbar.htmm" target="_blank">[テリトリー デザイン] ツールバー</a>から実行できる各種機能に対応する BA Pro の機能を説明します。

### テリトリー ソリューションの作成

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|テリトリー ソリューションの作成|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/create-territory-solution.htm" target="_blank">テリトリー ソリューションの作成</a>|・[テリトリーの自動最適化](/business-analyst/pro/tutorial/territory-design/create-optimal-territory/)||

### テリトリー ソリューションの作成方法

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|シード ポイントからテリトリーを作成|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/add-territory-seed-points.htm" target="_blank">テリトリー シード ポイントの追加</a>|・[テリトリーの自動最適化](/business-analyst/pro/tutorial/territory-design/create-optimal-territory/)||
|最適位置からテリトリーを作成|-|-|BA Pro では、以下のツールを設定することで利用可能<br/><a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-balance-variables.htm" target="_blank">・バランス調整変数の設定</a><br/><a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-attribute-constraints.htm" target="_blank">・テリトリー属性制限</a><br/><a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-distance-parameters.htm" target="_blank">・テリトリー距離パラメーター</a>|
|密度中心からテリトリーを作成|-|-|BA Pro では、以下のツールを設定することで利用可能<br/><a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-balance-variables.htm" target="_blank">・バランス調整変数の設定</a><br/><a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-attribute-constraints.htm" target="_blank">・テリトリー属性制限</a><br/><a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-distance-parameters.htm" target="_blank">・テリトリー距離パラメーター</a>|
|データベースからテリトリーをインポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/import-territory-solution.htm" target="_blank">テリトリー ソリューションのインポート</a>|-||
|手動でテリトリーを作成|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/what-is-territory-design-.htm#ESRI_SECTION1_B806EBF9D2F14E368347BE48733FA88F" target="_blank">テリトリーの手動作成</a>|-||

### テリトリー ソリューションの設定

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|テリトリーのバランス調整|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-balance-variables.htm" target="_blank">バランス調整変数の設定</a>|・[テリトリーの自動最適化](/business-analyst/pro/tutorial/territory-design/create-optimal-territory/)||
|テリトリー形状の制御|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-level-options.htm" target="_blank">テリトリー レベル オプションの設定</a>|-|BA Pro では、[テリトリー レベル オプションの設定] ツールの [圧縮率] を設定することで利用可能|
|テリトリー属性制限の設定|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-attribute-constraints.htm" target="_blank">テリトリー属性制限の設定</a>|-||
|テリトリー距離パラメーターの設定|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-distance-parameters.htm" target="_blank">テリトリー距離パラメーターの設定</a>|・[テリトリーの自動最適化](/business-analyst/pro/tutorial/territory-design/create-optimal-territory/)||
|テリトリー ネットワーク インデックスの構築|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-territory-distance-parameters.htm" target="_blank">テリトリー距離パラメーターの設定</a>|-|BA Pro では、[テリトリー距離パラメーターの設定] ツールの [ネットワーク パラメーター] の [ネットワーク インデックスの構築] オプションを有効にすることで設定可能|
|テリトリー レベルの追加|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/add-territory-level.htm" target="_blank">テリトリー レベルの追加</a>|-||
|テリトリー バリアの追加|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/add-territory-barriers.htm" target="_blank">テリトリー バリアの追加</a>|-||
|空間結合による変数のインポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/data-management/join-field.htm" target="_blank">フィールドの結合</a>|-||
|属性結合による変数のインポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/analysis/spatial-join.htm" target="_blank">空間結合</a>|-||
|テリトリーの作成範囲の設定|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/create-territory-solution.htm" target="_blank">テリトリー ソリューションの作成</a>|-|BA Pro では、ポイント ベースのテリトリーを作成する時のみ [テリトリー ソリューションの作成] ツールの [境界マスク] から設定可能|

### テリトリー ソリューションのインポート

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|テリトリー ソリューションのインポート|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/territory-design/import-territory-solution.htm" target="_blank">テリトリー ソリューションのインポート</a>|・[現状のテリトリーを可視化](/business-analyst/pro/tutorial/territory-design/create-territory-from-database/)||

### テリトリーのエクスポート

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|Business Analyst の商圏へエクスポート|-|-||
|テリトリー データベースのエクスポート|-|-||
|テリトリー データベースと基本単位レイヤー レコードのエクスポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/export-territory-solution.htm" target="_blank">テリトリー ソリューションのエクスポート</a>|・[テリトリーの自動最適化](/business-analyst/pro/tutorial/territory-design/create-optimal-territory/)||
|テリトリーの境界と変数のエクスポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/create-territory-level-feature-classes.htm" target="_blank">テリトリー レベル フィーチャクラスの作成</a>|-|BA Pro では、[フィーチャクラス] オプションで「テリトリー境界」を選択することで、テリトリーの境界のみをエクスポート可能|

### テリトリーの解析

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|テリトリーの解析|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/territory-design/solve-territories.htm" target="_blank">テリトリーの解析</a>|・[テリトリーの自動最適化](/business-analyst/pro/tutorial/territory-design/create-optimal-territory/)||

### テリトリーの編集

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|テリトリーのバランス再調整|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/set-balance-variables.htm" target="_blank">バランス調整変数の設定</a>|-||
|テリトリーの作成|[テリトリー ソリューション] タブの [テリトリーの編集] グループ|-||
|テリトリーの割り当て / 割り当て解除|[テリトリー ソリューション] タブの [テリトリーの編集] グループ|・[テリトリーの自動最適化](/business-analyst/pro/tutorial/territory-design/create-optimal-territory/)||
|テリトリーの削除|[テリトリー ソリューション] タブの [テリトリーの編集] グループ|-||
|テリトリーのロック|-|-||
|オーバーラップ テリトリーの解決|-|-||

### テリトリー レポート

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|テリトリー レポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/generate-territory-report.htm" target="_blank">テリトリー レポートの生成</a>|-|BA Pro では、[レポート タイプ] オプションを「テリトリー サマリー」に設定することで利用可能|
|詳細テリトリー レポート|-|-||
|テリトリー ソリューションの比較レポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/territory-design/generate-territory-report.htm" target="_blank">テリトリー レポートの生成</a>|-|BA Pro では、[レポート タイプ] オプションを「テリトリーの比較」に設定することで利用可能|

### テリトリー デザイン ウィンドウ

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|データ|-|-||
|階層|-|-||
|チャート|[テリトリー ソリューション] タブの [視覚化] グループの [チャートの作成]|・[現状のテリトリーを可視化](/business-analyst/pro/tutorial/territory-design/create-territory-from-database/)||
|統計情報|[テリトリー ソリューション] タブの [視覚化] グループの [チャートの作成]|-||


<style>
table {
    width: 100%;
    margin-right: 5px;
    margin-left: 15px;
}
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width:20%;
}
table th:nth-of-type(3) {
    width: 25%;
}
table th:nth-of-type(4) {
    width: 35%;
}

</style>