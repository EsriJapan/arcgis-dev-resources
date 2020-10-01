+++
title = "ウィジェット manifest"
description = "ArcGIS Experience Builder (Developer Edition) をインストールする手順を紹介します。"
weight = 5
aliases = ["/widget-manifest/"]
+++

各 ArcGIS Experience Builder ウィジェットには、ウィジェットの属性とプロパティを記述する manifest.json ファイルがあります。ウィジェットのマニフェストには、名前、タイプ、バージョン、exbVersion、および translatedLocales プロパティを含める必要があります。ウィジェットのマニフェストを作成する最も簡単な方法は、デモ・ウィジェットから manifest.json ファイルをコピーすることです。以下は manifest.json ファイルの例です。

```JavaScript
{
  "name": "count-features",
  "label": "Count Features",
  "type": "widget",
  "version": "1.1.0",
  "exbVersion": "1.1.0",
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

ウィジェットのマニフェストで利用可能なプロパティの詳細については、こちらを参照してください。