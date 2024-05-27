+++
title = "ウィジェット manifest"
description = "ウィジェットの名前やバージョンなどのウィジェットの属性などを設定する manifest.json ファイルについて紹介します。"
weight = 6
aliases = ["/widget-manifest/"]
+++

出典：ArcGIS Experience Builder - Guide - [Widget manifest](https://developers.arcgis.com/experience-builder/guide/widget-manifest/)


各 ArcGIS Experience Builder ウィジェットには、ウィジェットの属性とプロパティを記述した `manifest.json` ファイルがあります。ウィジェットの manifest には、name、type、version、exbVersion、および translatedLocales プロパティを含める必要があります。ウィジェットの manifest を作成する簡単な方法は、[demo widget](https://developers.arcgis.com/experience-builder/sample-code/widgets/demo) から `manifest.json` ファイルをコピーすることです。以下は `manifest.json` ファイルの例です。ウィジェット内で ArcGIS Maps SDK for JavaScript を使用するには、`dependency` プロパティに `jimu-arcgis` を設定します。

```JSON
{
  "name": "count-features",
  "label": "Count Features",
  "type": "widget",
  "version": "1.14.0",
  "exbVersion": "1.14.0",
  "author": "Esri R&D Center Beijing",
  "description": "This is widget is designed to display the numeric attributes of features.",
  "copyright": "",
  "license": "http://www.apache.org/licenses/LICENSE-2.0",
  "publishMessages": [
    "EXTENT_CHANGE",
    "DATA_RECORDS_SELECTION_CHANGE"
  ],
  "messageActions": [],
  "defaultSize": {
    "width": 360,
    "height": 80
  },
 "properties": {},
  "translatedLocales": [
    "en",
    "es",
    "zh-cn"
  ]
}
```

[widget's manifest](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/WidgetManifest) で利用可能なプロパティの詳細を参照してください。
