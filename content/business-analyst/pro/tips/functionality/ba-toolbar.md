+++
title = "Business Analyst ツールバー"
description = "Business Analyst ツールバーから利用できる機能の対応表です。"
Weight = 4
alwaysopen = false
date = 2022-02-04T00:00:00+09:00
author = "中山、石橋"
draft = false
publishDate = 2022-01-13T00:00:00+09:00
+++

ArcMap 版 BA Desktop の <a href="https://desktop.arcgis.com/ja/arcmap/latest/extensions/business-analyst/about-evaluate-sites.htm" target="_blank">[Business Analyst] ツールバー</a>から実行できる各種機能に対応する BA Pro の機能を説明します。

### 分析プロジェクト

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|分析プロジェクトの作成|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/projects/create-a-new-project.htm" target="_blank">プロジェクトの作成</a>|・[事前準備](/business-analyst/pro/tutorial/prepare-for-tutorial/)||

### 分析範囲

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|分析範囲の作成|-|-|BA Pro では、事前に分析範囲を設定するワークフローは無くなりました。|

### 店舗の設定

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|住所リストから店舗を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/geocoding/geocode-addresses.htm" target="_blank">住所のジオコーディング</a>|・[顧客・店舗情報の取り込み](/business-analyst/pro/tutorial/geocoding/)||
|既存のポイント データから店舗を登録|-|-||
|地図上でポイントを入力して店舗を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/data/feature-classes/create-a-feature-class.htm" target="_blank">フィーチャクラスの作成</a>|-||
|住所を手入力して店舗を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/data/geocoding/identify-addresses-and-places-on-the-map.htm" target="_blank">マップ上の住所と場所の特定</a>|-||
|XY 座標から店舗を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/data-management/xy-table-to-point.htm" target="_blank">XY テーブル → ポイント</a>|-||

### 顧客の設定

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|住所リストから顧客を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/geocoding/geocode-addresses.htm" target="_blank">住所のジオコーディング</a>|・[顧客・店舗情報の取り込み](/business-analyst/pro/tutorial/geocoding/)||
|既存のポイント データから顧客を登録|-|-||
|地図上でポイントを入力して顧客を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/data/feature-classes/create-a-feature-class.htm" target="_blank">フィーチャクラスの作成</a>|-||
|住所を手入力して顧客を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/data/geocoding/identify-addresses-and-places-on-the-map.htm" target="_blank">マップ上の住所と場所の特定</a>|-||
|XY 座標から顧客を登録|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/data-management/xy-table-to-point.htm" target="_blank">XY テーブル → ポイント</a>|-||
|顧客を最寄りの店舗の ID で割り当て|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/assign-customers-by-distance.htm" target="_blank">距離による顧客の割り当て</a>|-||
|顧客を ID で割り当て|-|-||
|顧客を商圏によって割り当て|-|-||

### 商圏

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|顧客分布商圏|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/customer-derived-trade-areas.htm" target="_blank">顧客分布商圏の生成</a>|・[顧客分布を元にした商圏の生成](/business-analyst/pro/tutorial/customer-analysis/customer-derived-tradearea/)||
|リング商圏|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-trade-area-rings.htm" target="_blank">リング商圏の生成</a>|・[既存店舗を対象とした分析](/business-analyst/pro/tutorial/tradearea-analysis/analysis-for-existing-stores/)||
|道路距離/時間商圏|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-drive-time-trade-area.htm" target="_blank">道路距離/時間商圏の生成</a>|・[ハフ モデル](/business-analyst/pro/tutorial/huff-model/)||
|限界値商圏|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-threshold-rings.htm" target="_blank">・限界値リングの生成</a><br/><a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-threshold-drive-times.htm" target="_blank">・限界値到達圏の生成</a>|-|||
|手書きによる商圏|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/data/feature-classes/create-a-feature-class.htm" target="_blank">フィーチャクラスの作成|-||
|データ値依存リング|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-trade-area-rings.htm" target="_blank">・リング商圏の生成</a><br/><a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-drive-time-trade-area.htm" target="_blank">・道路距離/時間商圏の生成</a><br/><a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-threshold-rings.htm" target="_blank">・限界値リングの生成</a><br/><a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-threshold-drive-times.htm" target="_blank">・限界値到達圏の生成</a>|-|BA Pro では、リング商圏、道路距離/時間商圏、限界値リング、限界値到達圏の各ツールの [入力方法] オプションを「値」から「式」に変更し、[距離条件式] を設定することで利用可能|
|ボロノイ分割|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/analysis/create-thiessen-polygons.htm" target="_blank">ティーセン ポリゴンの作成</a>|-||
|ハフモデル商圏|-|-||
|リング商圏 (オーバーラップ無し)|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-trade-area-rings.htm" target="_blank">リング商圏の生成</a>|-|BA Pro では、[リング商圏の生成] ツールの [オーバーラップの除去] オプションを有効にすることで利用可能|
|区画単位による商圏|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-standard-geography-trade-areas.htm" target="_blank">標準区画商圏の生成</a>|・[独自データからカスタム変数を作成](/business-analyst/pro/tutorial/customize-data/how-to-use-unique-data/)<br/>・[現状のテリトリーを可視化](/business-analyst/pro/tutorial/territory-design/create-territory-from-database/)||
|構成する区画レイヤーから商圏を作成|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-geographies-from-overlay.htm" target="_blank">重複する区画ポリゴンの生成</a>|・[市場シェアの把握](/business-analyst/pro/tutorial/customer-analysis/market-penetration/) ||
|商圏内占有率|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/calculate-market-penetration.htm" target="_blank">市場占有率の計算</a>|-|BA Pro では、[市場占有率の計算] ツールの [商圏内占有率] オプション機能を設定することで利用可能|
|オーバーラップ測定|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/measure-cannibalization.htm" target="_blank">オーバーラップ測定</a>|-||
|オーバーラップの削除|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/remove-overlap.htm" target="_blank">オーバーラップの除去</a>|-||
|商圏の比較|-|-||

### 分析

#### マーケット分析

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|市場のランク付け|-|-|BA Pro では、類似のツールとして [<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/understanding-suitability-analysis.htm" target="_blank">適合性解析</a>] ツールを利用可能|
|空間オーバーレイ|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/enrich-layer-advanced.htm" target="_blank">レイヤーへの情報付加</a>|・[新規候補地に対する分析 (クイック商圏)](/business-analyst/pro/tutorial/tradearea-analysis/evaluate-site/)<br/>・[市場シェアの把握](/business-analyst/pro/tutorial/customer-analysis/market-penetration/)<br/>・[BA データからカスタム変数を作成](/business-analyst/pro/tutorial/customize-data/how-to-use-existing-ba-data/)|||
|ポイントの集計|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/analysis/summarize-within.htm" target="_blank">エリア内での集計</a>|-||
|市場占有率の測定|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/calculate-market-penetration.htm" target="_blank">市場占有率の計算</a>|・[市場シェアの把握](/business-analyst/pro/tutorial/customer-analysis/market-penetration/)|||
|潜在顧客エリアの抽出|-|-||
|グリッドの作成|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-grids-and-hexagons.htm" target="_blank">グリッドと六角形の生成</a>|-||

#### サイト分析

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|近接解析 (ロケーター レポート)|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/find-nearby-locations.htm" target="_blank">近傍の位置の検索</a>|-||
|類似商圏のランク付け|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/spatial-statistics/similarity-search.htm" target="_blank">類似検索</a>|-||
|顧客分布の中心を検索|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/spatial-statistics/mean-center.htm" target="_blank">・地理的中心の算出</a><br/><a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/spatial-statistics/median-center.htm" target="_blank">・地理的中間地点の算出</a>|-||
|スパイダー ダイアグラムの作成|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-desire-lines.htm" target="_blank">スパイダー ダイアグラムの生成</a>|-||
|距離商圏内占有率|-|-||

### マップ

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|主題図|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/mapping/layer-properties/symbolize-feature-layers.htm" target="_blank">フィーチャ レイヤーのシンボル化</a>|・[既存店舗を対象とした分析](/business-analyst/pro/tutorial/tradearea-analysis/analysis-for-existing-stores/)||

### モデリング

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|ロケーション - アロケーション|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/networks/location-allocation-analysis-layer.htm" target="_blank">ロケーション - アロケーション解析</a>|-|BA Pro では <a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/networks/what-is-network-analyst-.htm" target="_blank">Network Analyst エクステンション</a>の機能の一つとして利用可能|
|ハフ モデル|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/huff-model.htm" target="_blank">ハフ モデル</a>|・[ハフ モデル](/business-analyst/pro/tutorial/huff-model/)||
|アドバンス ハフ モデル|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/huff-model.htm" target="_blank">ハフ モデル</a>|・[ハフ モデル](/business-analyst/pro/tutorial/huff-model/)|BA Pro では、	[ハフ モデル] ツールの [距離タイプ] オプションを設定することで利用可能|
|モデルのキャリブレーション|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/huff-model-calibration.htm" target="_blank">ハフ モデルのキャリブレーション</a>|-||
|属性によるディゾルブ|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/data-management/dissolve.htm" target="_blank">ディゾルブ</a>|-||

### レポート

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|サマリー レポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/create-summary-reports.htm" target="_blank">サマリー レポート</a>|・[既存店舗を対象とした分析](/business-analyst/pro/tutorial/tradearea-analysis/analysis-for-existing-stores/)||
|目標物ポイント レポート|-|-||
|顧客の地理的サマリー レポート|-|-||
|顧客の人口統計比較レポート|-|-||
|平均運転時間レポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-approximate-drive-times.htm" target="_blank">近似到達圏の生成</a>|・[顧客分布を元にした商圏の生成](/business-analyst/pro/tutorial/customer-analysis/customer-derived-tradearea/)|BA Pro では、[近似到達圏の生成] ツールの [レポートの作成] オプションを有効にすることで利用可能|
|ベンチマーク レポート|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/benchmark-comparisons.htm" target="_blank">ベンチマークの比較</a>|-||
|風配図レポート|<a href="https://pro.arcgis.com/ja/pro-app/tool-reference/business-analyst/generate-desire-lines.htm" target="_blank">スパイダー ダイアグラムの生成</a>|-|BA Pro では、[スパイダー ダイアグラムの生成] ツールの [レポートの作成] オプションを有効にすることで利用可能|

### 目標物検索

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|目標物検索|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/generate-points-from-business-listings.htm" target="_blank">目標物リストからポイントを生成</a>|-|[解析] タブ -> [ビジネス解析] 内の [目標物の検索] から検索することも可能|

### データのカスタマイズ

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|カスタム データ (BDS) の設定|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/custom-data.htm" target="_blank">統計データ コレクションの作成</a>|・[データのカスタマイズ](/business-analyst/pro/tutorial/customize-data/)|BA Pro 3.1 から ArcMap 版で作成した BDS を直接インポートできるようになりました。|
|レポートのカスタマイズ|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/build-infographic-templates.htm" target="_blank">インフォグラフィックス エディター</a>|-||

### その他

|機能名 (ArcMap 版)|機能名 (BA Pro)|関連チュートリアル|備考|
|:--|:--|:--|:--|
|クイック商圏|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/analysis/business-analyst/evaluate-site.htm" target="_blank">クイック商圏</a>|・[新規候補地に対する分析 (クイック商圏)](/business-analyst/pro/tutorial/tradearea-analysis/evaluate-site/)<br/>・[独自データからカスタム変数を作成](/business-analyst/pro/tutorial/customize-data/how-to-use-unique-data/)||
|住所インスペクター|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/data/geocoding/identify-addresses-and-places-on-the-map.htm#ESRI_SECTION1_FD293D36DE3E4A6A9CF620A33791D7C2" target="_blank">住所インスペクター</a>|-||
|インフォグラフィックス|<a href="https://pro.arcgis.com/ja/pro-app/latest/help/mapping/navigation/infographics.htm" target="_blank">インフォグラフィックス</a>|-||
|ダイナミック リング分析|-|-||
|カラーコード マップ|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/business-analyst/create-color-coded-layer.htm" target="_blank">カラー コード レイヤー</a>|・[既存店舗を対象とした分析](/business-analyst/pro/tutorial/tradearea-analysis/analysis-for-existing-stores/)<br/>・[ハフ モデル](/business-analyst/pro/tutorial/huff-model)||
|スマートマップ サーチ|-|-||
|初期設定|<a href="https://pro.arcgis.com/ja/pro-app/latest/tool-reference/environment-settings/ba-data-source.htm" target="_blank">ジオプロセシング環境設定 (Business Analyst)</a>|-|ジオプロセシング ツールの [環境] タブからも設定可能|

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