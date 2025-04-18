+++
title = "セクションとビュー（Section and view）"
weight = 4 
aliases = ["/section-view/"]
+++

出典：ArcGIS Experience Builder - Guide - [Section and view](https://developers.arcgis.com/experience-builder/guide/section-view/)

### セクションとビュー（Section and view）

セクションは、複数のビューを追加できる領域を占めています。ビューはレイアウト コンテナで、ページやウィンドウに似ていますが、セクションの中にしか置くことができません。ビュー ナビゲーション ウィジェットは、セクション内のビューをナビゲートします。メニュー ウィジェットで複数のページを使用したり、ビュー ナビゲーション ウィジェットでセクションとビューを使用して同様の操作感を得ることができますが、両者には主な違いがあります。

- レンダリングについて - 複数のページを読み込む場合、最初は現在のページのコンテンツのみがレンダリングされます。セクション内の複数のビューを読み込む場合、ビュー内のすべてのコンテンツがレンダリングされますが、現在のビューのみが表示され、他はすべて非表示になります。
- アニメーションについて - セクションでのみトランジションアニメーションを定義できます。

app config では、セクションは `sections` で定義され、ビューは `views` で定義されます。

