+++
title = "データアクション（Data action）"
weight = 11
aliases = ["/data-action/"]
+++

出典：ArcGIS Experience Builder - Guide - [Data action](https://developers.arcgis.com/experience-builder/guide/core-concepts/data-action/)

### データアクション（Data action）
データアクションは、データレコードのコレクションを拡張可能な方法で処理する方法を提供します。データアクションは、データソースのインスタンスとデータレコードの配列を受け取ります。データをサポートしているかどうかや、ユーザーが実行したときに何が実行されるかを定義することができます。フレームワークは、CSV へのエクスポートや JSON へのエクスポートなどのデータアクションを提供します。ウィジェットでもデータアクションを提供することができます。例えば、Map ウィジェットは pan to とzoom to のデータアクションを提供しています。データアクションは、`manifest.json` でデータアクションを宣言し、`AbstractDataAction` を継承したクラスを作成することで、ウィジェットに実装することができます。

データ・アクションを提供するだけでなく、ウィジェットはデータ・アクションを使用することもできます。ウィジェットでデータアクションを使用するには、ウィジェットの`manifest.json` プロパティで `canConsumeDataAction: true` を宣言し、`import {DataActionDropDown} from 'jimu-ui'` をインポートして、ウィジェットの UI で `DataActionDropDown` をレンダリングする必要があります。