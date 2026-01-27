+++
title = "はじめに"
description = "ArcGIS Business Analyst および BA Pro の概要を説明します。"
weight = 5
alwaysopen = false
author = "石橋"
data = 2021-10-14T17:00:00+09:00
draft = false
+++

チュートリアルを開始する前に、ArcGIS Business Analyst および BA Pro の概要を学びます。

## ArcGIS Business Analyst とは

ArcGIS Business Analyst は、インフォグラフィックスや人口統計、消費データなどのデータに基づいて、組織がデータに基づいた意思決定ができるように支援する、商圏分析・エリアマーケティング特化型 GIS ソリューションです。
新規出店候補地の立地評価や、自社顧客の市場シェアの把握、市場ポテンシャルの高いエリアの絞りこみなどの解析を行うことができます。

ArcGIS Business Analyst には、人口統計や、立地評価のための地図や境界などのデータがバンドルされており、国内に加え、海外分析を行うことができます。また、ビジネスの課題を解決するための分析ワークフローも一緒に提供されます。

ユーザーは、これらを利用して商圏分析や顧客分析などを実行し、その結果を美しく魅力的なレポートを利用して共有することができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/ba.png" title="多種多様なデータセットと分析機能で効率的な意思決定をサポート">}}

{{< callout >}}

提供データは、ローカルに配置する **ローカル データセット** と、ArcGIS Online にアクセスして利用する **オンライン データ** の 2 種類があります。
詳細は、<a href="https://www.esrij.com/products/arcgis-business-analyst/data/" target="_blank">ArcGIS Business Analyst 製品ページ</a>をご参照ください。

{{< /callout >}}

## 利用できるアプリケーション

ArcGIS Business Analyst は利用するユーザーの目的に応じたアプリケーションを提供します。詳細は <a href="https://www.esrij.com/products/arcgis-business-analyst/" target="_blank">ArcGIS Business Analyst 製品ページ</a>をご参照ください。
{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/apps.png" title="ArcGIS Business Analyst アプリケーション">}}

## BA Pro とは

BA Pro は、高機能デスクトップ型 GIS「ArcGIS Pro」をベースにした、エリアマーケティング特化型のアプリケーションです。<br/>
高度な商圏分析や顧客分析、予測分析を行うことができ、クラウド型 GIS「ArcGIS Online」を通して、データを組織内で共有することができます。

### 利用できる機能

#### 商圏

商圏分析を行うにあたって、まずは商圏を定義することが分析の第一歩となります。BA Pro では、以下表のように、シンプルなものから高度なものまで多彩な商圏を作成できます。

|名前|説明|イメージ|
|:--|:--|:--|
|リング商圏|店舗を中心として、半径を指定して作成される円形の商圏です。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/ring-ta.png" title="リング商圏" width="50%">}}|
|道路距離/時間商圏|道路ネットワークデータを使用して、店舗からの道路距離または道路を通行した場合の所要時間に基づき作成される商圏です。到達圏とも呼ばれます。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/drive-time-ta.png" title="道路距離/時間商圏" width="50%">}}|
|近似到達圏|既存のポリゴンに近似した到達圏です。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/approximate-dt.png" title="近似到達圏" width="50%">}}|
|限界値商圏|店舗から外側に向かって、指定した限界値 (人口総数など) に達する地点が境界線となる商圏です。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/threshold-ta.png" title="限界値商圏" width="50%">}}|
|顧客分布商圏|店舗ごとの顧客データをもとにした、店舗から近い順に顧客データを一定割合含む範囲を指します。<a href="https://business-map.esrij.com/glossary/1849/" target="_blank">実勢商圏</a>とも呼ばれます。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/customer-derived-ta.png" title="顧客分布商圏" width="50%">}}|
|区画商圏|町丁・字等や市区町村等の区画ポリゴンを商圏として出力します。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/geography-ta.png" title="区画商圏" width="50%">}}|

{{< callout >}}

商圏とは、店舗が顧客を集客できる可能性のある地理的な範囲です。詳細は<a href="https://business-map.esrij.com/glossary/1861/" target="_blank">ビジネスマップ用語集</a>をご覧ください。

{{< /callout >}}

#### 解析

市場エリアの人口統計属性、顧客分布、店舗や施設のネットワークを評価することのできるツールを利用できます。

|名前|説明|イメージ|
|:--|:--|:--|
|レイヤーへの情報付加|任意のエリア (商圏・区画など) 内の統計情報を集計します。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/enrich-layer.png" title="レイヤーへの情報付加" width="50%">}}|
|市場占有率の計算|顧客データをエリアごとに集計をして、その値を世帯数や人口総数などの市場ポテンシャルで割ることで、エリアごとの市場シェアを算出します。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/market-penetration.png" title="市場占有率の計算" width="50%">}}|
|カラー コード レイヤー|任意の統計情報の数値情報を元に、町丁・字等などの区画ポリゴンをマッピングします。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/color-coded-layer.png" title="カラー コード レイヤー" width="50%">}}|
|スパイダー ダイアグラム|店舗・顧客間のラインを生成し、距離を計測します。ラインの形状は直線ですが、道路ネットワークを使用して距離を計測できます。|{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/desire-lines.png" title="スパイダー ダイアグラム" width="50%">}}|

#### インフォグラフィックス・クラシック レポート

商圏内の人口・世帯などの統計情報を集計し、PDF や HTML 形式のレポートとして出力します。
BA Pro では、レイアウト調整済みのテンプレートを利用できます。<br/>

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/report-and-infographics.png" title="レポート・インフォグラフィックス" width="60%">}}

{{< callout >}}

利用可能なレポートの詳細は、<a href="https://www.esrij.com/products/arcgis-business-analyst/report/" target="_blank">ArcGIS Business Analyst 製品ページ</a>をご覧ください。

{{< /callout >}}

#### ハフモデル

<a href="https://business-map.esrij.com/glossary/2021/" target="_blank">ハフモデル</a>に基づいた市場シェアおよび販売予測のモデルを生成できます。直線距離でなく道路距離や道路時間を用いた「アドバンス ハフモデル」を行うこともできます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/huff-model.png" title="ハフ モデル" width="30%">}}

#### 適合性解析

適合性解析では、出店候補地周辺の人口・世帯や、出店候補地の持つ売場面積などの数値情報、競合店の分布状況を加味して、ランク付けができます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/suitability-analysis.png" title="適合性解析" width="40%">}}

#### テリトリー デザイン

テリトリー デザインでは、地図と統計情報を元に、営業管轄エリアなどを最適化・管理できます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/territory-design.png" title="テリトリー デザイン" width="40%">}}

#### カスタム変数

自社の売上情報などの独自のデータを取り込み、カスタム変数として登録することで、マッピングや解析に利用することができます。また、登録した変数を ArcGIS Online に共有することで、BA Web and Mobile Apps の解析でも利用できるようになります。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/business-analyst/pro/tutorial/overview/custom-variables.png" title="カスタム変数" width="50%">}}

<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 60%;
}
table th:nth-of-type(3) {
    width: 20%;
}
</style>