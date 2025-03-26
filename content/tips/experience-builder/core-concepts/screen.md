+++
title = "画面グループ（Screen groups）"
weight = 5
aliases = ["/screen/"]
+++

出典：ArcGIS Experience Builder - Guide - [Screen groups](https://developers.arcgis.com/experience-builder/guide/core-concepts/screen/)

### 画面グループ（Screen groups）
画面グループは、複数の画面を持つレイアウト コンテナで、スクロールするページのコンテンツやウィジェットを整理するためのものです。各画面はメイン ステージを持ち、画面グループのテンプレートによってはスクロール パネルを持つこともできます。画面グループにスクロールすると、画面の高さ全体を占めます。画面グループにスクロール パネルがある場合、エンド ユーザーがパネル内のコンテンツをスクロールしても、メイン ステージはその場に留まり、最後のパネルがスクロールしたときにのみ切り替わります。画面グループにパネルがない場合は、メイン ステージは画面の高さいっぱいにスクロールするまで固定されます。

app config では、画面グループは `screenGroups` で定義され、画面は `screens` で定義されます。
