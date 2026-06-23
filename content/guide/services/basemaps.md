+++
title = "ベースマップ"
description = "マッピングAPI＆ロケーションサービス内のベースマップについて紹介します"
Weight=4
aliases = ["/basemaps/"]
+++

出典：Mapping APIs and location services - [basemaps](
https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/basemap-layers/
)

<iframe width="100%" height="400" id="DemoApp-gf1e4f0b9-39b1-23c1-aa14-4f83e29dbd4c" title="ArcGIS Developer Guide: Basemap layers" class="relative h-full w-full border-none bg-transparent" src="https://developers.arcgis.com/documentation/demo-apps/mapping-and-location-services-mapping-basemaps-code-basemap-services-basemaps-2d3d-13b05296cda3d76312c3ae73db6c76ea.html"
></iframe>

## ベースマップとは？

ベースマップとは、地図やシーン全体の視覚的・地理的背景を提供する基盤となるレイヤーおよびデータのことです。これにより、地理的要素の位置を容易に把握し、それらの間の空間的な関係を理解することができます。通常、陸地・水域・道路・建物・都市・地名・行政境界などの要素やラベルが含まれますが、衛星画像や航空写真データが含まれる場合もあります。ベースマップは、地球規模から地域規模に至るまで、地図に背景情報を提供します。

ベースマップは、サポートするデータの種類や、表現する地図デザインのタイプによって分類されます。これを「ベースマップスタイル」と呼びます。ArcGIS では、データプロバイダーの種類に基づいて、主に 2つのベース マップ スタイルがあります。それは、ArcGIS ベースマップスタイルと オープン ベースマップスタイルです。これらに含まれるベースマップスタイルの例としては、arcgis/streets、arcgis/navigation、 arcgis/outdoor、arcgis/imagery (satellite)、open/osm-style、および open/streets などがあります。

ベースマップのデータとスタイルは、ArcGIS ベース マップ サービス と呼ばれるデータソース によって提供されます。



## ベースマップの仕組み

ベースマップは、ベースマップレイヤーによって表示されます。ベースマップレイヤーは、データやスタイルにアクセスするために使用するデータソースを参照します。データやスタイルの利用可否は、データソースの種類とその機能によって異なります。ベースマップレイヤーは通常、マップやシーンに最初に追加されるレイヤーです。ビューがマップやシーンを表示する際、最初に描画されるのはこのレイヤーであり、その後にデータレイヤー、そしてグラフィックが続きます。（存在する場合）

<img src="https://apps.esrij.com/arcgis-dev/guide/img/basemaps/photo02_basemaplayers.png" width="1200px">



図1：マップまたはシーン内で、ベースマップレイヤーを含むベースマップが表示されています。

　　　　


[ベースマップサービスの種類](../types-of-basemap-services)　　　　　　　　　　　　　　　　　　　　　　　　　　

