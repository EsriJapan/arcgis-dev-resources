+++
title = "クレジットの利用"
description = "クレジットの概要と消費する仕組みについて説明します。"
Weight = 1
alwaysopen = false
publishDate = 2023-12-13T00:00:00+09:00
draft = false
author = "角名"
+++

ArcGIS Online では、データ ストレージや解析機能の実行などの GIS 処理に応じて、決められた数の「サービス クレジット」が消費されます。ここではクレジット消費について説明します。

クレジットの取得方法 (チャージ) や管理方法については「[クレジットの取得と管理](/online/users-guide/credits/manage/manage-credits/)」をご参照ください。

### データ ストレージ

コンテンツを作成する権限がある場合、様々なタイプのコンテンツをアイテムとして追加できます。追加したアイテムは ArcGIS Online のストレージに保存されますが、保存にはクレジットを消費します。
<br>代表的なストレージ保存におけるクレジット消費は以下の表のとおりです。

<table>
    <tr>
      <th width="20%">機能</th>
      <th width="50%">内容</th>
      <th width="20%">消費クレジット <span style="font-size: 85%">(1 時間単位で計算)</span></th>
    </tr>
    <tr>
      <td rowspan="2">データ ストレージの使用</td>
      <td>フィーチャ レイヤーの保存<br><span style= "font-size: 85%">(フィーチャ アタッチメント、フィーチャ コレクション、位置情報に関連付くフィーチャを除く)</span></td>
      <td>10 MB の保存で月 2.4 クレジット</td>
    </tr>
    <tr>
      <td>ホスト フィーチャ レイヤーと ArcGIS Notebooks 内のコンテンツを除くすべてのコンテンツの保存<br><span style="font-size: 85%">(Web マップの保存、PDF など各種ファイルの保存、シーン レイヤー パッケージの保存など)</span></td>
      <td>1 GB の保存で月 1.2 クレジット</td>
    </tr>
</table>


詳細は「[ストレージ使用におけるクレジット消費の例](/online/users-guide/credits/use/consumption-example/)」をご参照ください。


なお、次の機能ではストレージを使用しないため、クレジットを消費しません。

  <table>
    <tr>
      <th width="30%">機能</th>
      <th width="50%">内容</th>
      <th width="20%">消費クレジット</th>
    </tr>
    <tr>
      <td>可視化</td>
      <td>マップ / レイヤーの表示</td>
      <td>0 クレジット</td>
    </tr>
    <tr>
      <td>検索とジオサーチ</td>
      <td>住所 / 場所検索 (表示のみ)</td>
      <td>0 クレジット</td>
    </tr>
  </table>



### 解析機能

空間[解析](https://doc.esrij.com/online/users-guide/map/analysis/)などの特定の処理に対してクレジットが消費されます。
<br>消費クレジットは、解析ツールの種類やデータセットのサイズ (入力フィーチャ数または処理するピクセル数) によって異なります。
<br>代表的なクレジットを消費する解析ツールは次の表のとおりです。

<table>
    <tr>
      <th width="20%">機能</th>
      <th width="50%">内容</th>
      <th width="30%">消費クレジット</th>
    </tr>
    <tr>
      <td>空間解析</td>
      <td>ポイントの集約やレイヤーのマージ / オーバーレイなど</td>
      <td>1,000 フィーチャにつき 1 クレジット</td>
    </tr>
    <tr>
      <td rowspan="3">ネットワーク解析</td>
      <td>移動コストの計算 <span style="font-size: 85%">(単純ルート)</span></td>
      <td>1 件につき 0.005 クレジット</td>
    </tr>
    <tr>
      <td>移動エリアの生成や最近接の検索</td>
      <td>1 件につき 0.5 クレジット</td>
    </tr>
    <tr>
      <td>ルート計画 <span style="font-size: 85%">(複数車両によるルート)</span></td>
      <td>1 件につき 1 クレジット</td>
    </tr>
    <tr>
      <td>ジオコーディング</td>
      <td>住所のジオコーディング <span style="font-size: 85%">(データ保存の場合)</span></td>
      <td>1,000 件につき 40 クレジット</td>
    </tr>
    <tr>
      <td>データの情報付加</td>
      <td>レイヤーへの情報付加 <span style="font-size: 85%">(AcrGIS GeoEnrichment Service を利用する場合)</span></td>
      <td>1,000 件につき 10 クレジット</td>
    </tr>
</table>

   {{< callout >}}

   解析実行前に [クレジットの推定] を行うことでクレジット消費の見積もりを行えます。
   {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/credits/use-credits-estimation.png" title="クレジットの推定" width="50%" >}} 

   {{< /callout >}}

なお、次の解析機能はクレジットを消費しません。

<table>
  <tr>
    <th width="20%">機能</th>
    <th width="50%">内容</th>
    <th width="30%">消費クレジット</th>
  </tr>
  <tr>
    <td>ネットワーク解析</td>
    <td>交通量の表示</td>
    <td>0 クレジット</td>
  </tr>
  <tr>
    <td>空間解析</td>
    <td>
      <ul>
        <li>可視領域の作成</li>
        <li>集水域の作成</li>
        <li>下流解析</li>
      </ul>
    </td>
    <td>0 クレジット</td>
  </tr>
</table>

より詳細な解析機能におけるクレジット消費は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/analyze/credits-analysis-mv.htm)をご参照ください。

### タイル生成

タイル レイヤーの作成でクレジットが消費される場合があります。
<br>作成して公開する方法には [ArcGIS Pro から公開する方法](/online/users-guide/create-data/tile/arcgispro/)のほかに、[ArcGIS Online で作成する方法](https://doc.arcgis.com/ja/arcgis-online/reference/tile-layers.htm)があります。
<br>クレジット消費は次の表のとおりです。

<table>
  <tr>
    <th width="30%">機能</td>
    <th width="50%">内容</td>
    <th width="20%">クレジット消費</td>
  </tr>
  <tr>
    <td rowspan="2">{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/credits/use-credits-raster.png" title="ラスター タイル" width="40%">}} </td>
    <td>タイルの生成</td>
    <td >1,000 タイルの生成に 1 クレジット</td>
  </tr>
  <tr>
    <td>ArcGIS Pro でタイル パッケージを作成して公開</td>
    <td>0 クレジット</td>
  </tr>
  <tr>
    <td>{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/credits/use-credits-vector.png" title="ベクター タイル" width="40%" >}} </td>
    <td>フィーチャ レイヤーから公開</td>
    <td>0 クレジット</td>
  </tr>
</table>

   {{< callout >}}

   <span style="font-size: 120%">[ラスター タイル](https://doc.arcgis.com/ja/arcgis-online/reference/tile-layers.htm#ESRI_SECTION1_368FBFBECB044972BADDE99DD7761FE3)と[ベクター タイル](https://doc.arcgis.com/ja/arcgis-online/reference/tile-layers.htm#ESRI_SECTION1_8F68399EB47B48FF9EF46719FCC96978)はどう違う？</span>
   <br>ラスター タイルはラスター形式のタイル キャッシュであり、作成に時間はかかりますが、描画速度は速い特徴があります。
   <br>ベクター タイルはベクター形式のタイル キャッシュであり、ラスター タイルよりも描画速度は劣る一方で、縮尺やマップの回転をしても描画が安定している特徴があります。

   {{< /callout >}}


### 統計データの参照

ArcGIS Online では 170 以上の国と地域の信頼性の高いオンライン統計データを提供しています。
<br>国や地域によってデータの種類や粒度は異なりますが、人口や収入、消費行動などのデータが含まれています。これらのデータを参照する場合、クレジットが消費されます。
<br>消費されるクレジットは次の表のとおりです。

<table>
  <tr>
    <th width="20%">機能</th>
    <th width="50%">内容</th>
    <th width="30%">消費クレジット</th>
  </tr>
  <tr>
    <td rowspan="3">人口統計データ</td>
    <td>インフォグラフィックスの表示</td>
    <td>1,000 ビューにつき 10 クレジット</td>
  </tr>
  <tr>
    <td>インフォグラフィックスのエクスポート</td>
    <td>1 回のエクスポートにつき 10 クレジット</td>
  </tr>
  <tr>
    <td>人口統計マップとレイヤーの表示</td>
    <td>1,000 マップ リクエスト <sup>※</sup> につき 10 クレジット</td>
  </tr>
</table>

<div style="text-align: right;">
※ 画面の移動、ズームおよび属性表示
</div>

統計データの詳細については「[What is Esri Demographics data (英語)](https://doc.arcgis.com/en/esri-demographics/latest/get-started/what-is-esri-demographics.htm)」をご参照ください。