+++
title = "Web マップ"
description = "Web マップは、異なるアプリケーション間で作成、スタイル設定、共有できる 2D マップです。Web マップは Web マップ仕様に基づいた JSON で構成されており、マップの範囲、ベースマップ、レイヤー、レイヤー スタイル、ポップアップなどの設定が含まれています。Web マップの仕様や作成、表示方法についてご紹介します。"
Weight=6
aliases = ["/web-maps/"]
+++

## Web マップとは？
Web マップは、異なるアプリケーション間で作成、スタイル設定、共有できる 2D マップです。Web マップは Web マップ仕様に基づいた JSON で構成されており、マップの範囲、ベースマップ、レイヤー、レイヤー スタイル、ポップアップなどの設定が含まれています。

ArcGIS Online の Web マップの例としては、[サンタ モニカの公園とオープン スペース、トレイル、トレイルヘッド](https://www.arcgis.com/home/webmap/viewer.html?webmap=6712da5c872c44deaf24499e6f6c2d2b)があります。

## なぜ Web マップを使うのか？
Web マップは、[ArcGIS Online](https://www.esrij.com/products/arcgis-online/) および [ArcGIS Pro](https://www.esrij.com/products/arcgis-desktop/) で作成し、[Collector for ArcGIS](https://www.esrij.com/products/collector-for-arcgis/)、[Survey123 for ArcGIS](https://www.esrij.com/products/survey123-for-arcgis/)、[ArcGIS StoryMaps](https://www.esrij.com/products/arcgis-storymaps/) や [ArcGIS API および SDK](https://www.esrij.com/products/developer/) を使用して構築されたアプリなど、多くのアプリケーションで表示することができます。アプリケーションが Web マップをロードすると、以前に保存した設定が自動的にロードされるため、アプリケーションの開発や [ArcGIS プラットフォーム](https://www.esrij.com/question/85268/)全体でのマップの共有が容易になります。

例えば、ArcGIS Online でポップアップを使用するために作成され、スタイルの設定がされた Web マップを REST API を使って参照したり、ArcGIS API for JavaScript を使用して Web ページに表示したり、ArcGIS Pro にインポートしたりすることができます。

## Web マップの仕様
[Web マップの仕様](https://developers.arcgis.com/web-map-specification/) は、 [JSON](https://www.json.org/json-en.html) の仕様に基づいており、ArcGIS プラットフォーム全体で Web マップを共有、作成、編集、可視化、参照などをすることができます。

JSON として、Web マップは ArcGIS Server 上でホストされ、REST API を介して使用することができます。技術的な側面で言うと、Web マップは、ArcGIS Online または ArcGIS Enterprise に保存されたコンテンツ アイテムのことを指し、ユーザー間で[共有](https://www.esrij.com/products/arcgis-online/details/datashare/)することができます。

各 Web マップには一意の ID があり、パブリックに公開したり、特定のグループやユーザに制限して公開することもできます。

例えば、[サンタ モニカ](https://www.arcgis.com/home/webmap/viewer.html?webmap=6712da5c872c44deaf24499e6f6c2d2b)の Web マップはパブリックに公開されており、一意の ID: 6712da5c872c44deaf24499e6f6c2d2b が割り当てられています。

次の URL で REST API の [コンテンツ アイテム操作](https://developers.arcgis.com/rest/users-groups-and-items/user-item-link-.htm)のリクエストを行うことで、この Web マップを JSON 形式で表示することができます。

```
https://www.arcgis.com/sharing/rest/content/items/6712da5c872c44deaf24499e6f6c2d2b/data
```

この REST で取得できる JSON は以下の通りです(一部抜粋)。

```json
{
    "operationalLayers": [
        {
            "id": "Boundary_1356",
            "layerType": "ArcGISFeatureLayer",
            "url": "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Boundary/FeatureServer/0",
            "visibility": true,
            "opacity": 1,
            "title": "Boundary",
            "itemId": "30cf3b4c11c5408d87f255ba4e9aa611",
            "disablePopup": true
        },
        {
            "id": "Parks_and_Open_Space_2992",
            "layerType": "ArcGISFeatureLayer",
            "url": "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
            "visibility": true,
            "opacity": 0.51,
            "title": "Parks and Open Space",
            "itemId": "f2ea5d874dad427294641d2d45097c0e",
            "layerDefinition": {
                "drawingInfo": {
                    "renderer": {
                        "visualVariables": [
                            {
                                "type": "sizeInfo",
                                "target": "outline",
                                "expression": "view.scale",
                                "valueExpression": "$view.scale",
                                "stops": [
                                    {
                                        "size": 1.5,
                                        "value": 9501
                                    },
                                    /* ... */
                                ]
                            }
                        ],
                        "type": "uniqueValue",
                        "field1": "TYPE",
                        "uniqueValueInfos": [
                            {
                                "value": "Local Park",
                                "symbol": {
                                    "color": [
                                        158,
                                        85,
                                        156,
                                        255
                                    ],
                                    "outline": {
                                        "color": [
                                            153,
                                            153,
                                            153,
                                            128
                                        ],
                                        "width": 0.75,
                                        "type": "esriSLS",
                                        "style": "esriSLSSolid"
                                    },
                                    "type": "esriSFS",
                                    "style": "esriSFSSolid"
                                },
                                "label": "Local Park"
                            },
                            /* ... */
                        ]
                    }
                },
                "minScale": 4622325,
                "maxScale": 0
            },
            "popupInfo": {
                "title": "Parks_and_Open_Space",
                "fieldInfos": [
                    {
                        "fieldName": "FID",
                        "label": "FID",
                        "isEditable": false,
                        "tooltip": "",
                        "visible": true,
                        "format": {
                            "places": 0,
                            "digitSeparator": true
                        },
                        "stringFieldOption": "textbox"
                    },
                    /* ... */
                ],
                "description": null,
                "showAttachments": true,
                "mediaInfos": []
            }
        },
        {
            "id": "Trails_7558",
            "layerType": "ArcGISFeatureLayer",
            "url": "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
            "visibility": true,
            "opacity": 1,
            "title": "Trails",
            "layerDefinition": {
                "drawingInfo": {
                    "renderer": {
                        "type": "uniqueValue",
                        "field1": "USE_BIKE",
                        "uniqueValueInfos": [
                            {
                                "value": "Yes",
                                "symbol": {
                                    "color": [
                                        26,
                                        26,
                                        26,
                                        255
                                    ],
                                    "width": 0.9,
                                    "type": "esriSLS",
                                    "style": "esriSLSDot"
                                },
                                "label": "Bikes"
                            },
                            {
                                "value": "No",
                                "symbol": {
                                    "color": [
                                        230,
                                        0,
                                        0,
                                        255
                                    ],
                                    "width": 0.9,
                                    "type": "esriSLS",
                                    "style": "esriSLSDot"
                                },
                                "label": "No Bikes"
                            }
                        ]
                    }
                }
            },
            "popupInfo": {
                "title": "Trails_0",
                "fieldInfos": [
                    {
                        "fieldName": "OBJECTID",
                        "label": "OBJECTID",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": false,
                        "format": {
                            "places": 0,
                            "digitSeparator": true
                        },
                        "stringFieldOption": "textbox"
                    },
                    /* ... */
                ],
                "description": null,
                "showAttachments": true,
                "mediaInfos": []
            }
        },
        {
            "id": "Trailheads_8053",
            "layerType": "ArcGISFeatureLayer",
            "url": "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
            "visibility": true,
            "opacity": 1,
            "title": "Trailheads",
            "layerDefinition": {
                "drawingInfo": {
                    "renderer": {
                        "type": "simple",
                        "symbol": {
                            "angle": 0,
                            "xoffset": 0,
                            "yoffset": 0,
                            "type": "esriPMS",
                            "url": "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
                            "imageData": "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",
                            "contentType": "image/png",
                            "width": 10.5,
                            "height": 10.5
                        }
                    }
                }
            },
            "popupInfo": {
                "title": "Trailheads",
                "fieldInfos": [
                    {
                        "fieldName": "OBJECTID",
                        "label": "OBJECTID",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": false,
                        "format": {
                            "places": 0,
                            "digitSeparator": true
                        },
                        "stringFieldOption": "textbox"
                    },
                    /* ... */
                ],
                "description": null,
                "showAttachments": true,
                "mediaInfos": []
            }
        }
    ],
    "baseMap": {
        "baseMapLayers": [
            {
                "id": "VectorTile_1818",
                "type": "VectorTileLayer",
                "layerType": "VectorTileLayer",
                "title": "World Topographic Map",
                "styleUrl": "https://www.arcgis.com/sharing/rest/content/items/86d5ed4b6dc741de9dad5f0fbe09ae95/resources/styles/root.json",
                "itemId": "86d5ed4b6dc741de9dad5f0fbe09ae95",
                "visibility": true,
                "opacity": 1
            }
        ],
        "title": "World Topographic Map"
    },
    "spatialReference": {
        "wkid": 102100
    },
    "authoringApp": "WebMapViewer",
    "authoringAppVersion": "7.4",
    "version": "2.16",
    "applicationProperties": {
        "viewing": {
            "routing": {
                "enabled": true
            },
            "basemapGallery": {
                "enabled": true
            },
            "measure": {
                "enabled": true
            }
        }
    }
}
```

## Web マップの作成
テキスト エディタを使用して Web マップを作成することもできますが、Esri は Web マップを簡単に作成するための多くのツールを提供しています。

## ArcGIS Online
ArcGIS Online を使用することが Web マップを作成する最も簡単な方法です。

[ArcGIS Online 逆引きガイド](http://www.dokairen-okinawa.jp/wp/wp-content/uploads/arcgis-online-e98086e5bc95e3818de382ace382a4e38389-e6b0b4e59c9fe9878ce3838de38383e38388e3818ae3818de381aae3828f.pdf)や [ArcGIS for Developers 開発リソース集](https://esrijapan.github.io/arcgis-dev-resources/guide/create-map/create-webmap/)を参照して、Web マップを作成することができます。

## ArcGIS Pro
ArcGIS Pro では、Web マップの作成と共有がサポートされています。ArcGIS Pro ヘルプの [Web マップの作成](https://pro.arcgis.com/ja/pro-app/help/mapping/map-authoring/author-a-web-map.htm)を参照してください。

## ArcGIS API for JavaScript
ArcGIS API for JavaScript を使用した Web マップの作成は今後リリース予定です。

## ArcGIS Runtime SDK
ArcGIS Runtime SDK を使用して Web マップを作成、共有することができます。詳細は以下のドキュメントを参照してください（お使いの OS によって使用する SDK が異なります）。

* Web マップの作成 - [Android](https://developers.arcgis.com/android/latest/guide/build-a-new-map.htm),[iOS](https://developers.arcgis.com/ios/latest/swift/guide/build-a-new-map.htm), [.NET](https://developers.arcgis.com/net/latest/wpf/guide/build-a-new-map.htm), [Java](https://developers.arcgis.com/java/latest/guide/build-a-new-map.htm), [Qt](https://developers.arcgis.com/qt/latest/qml/guide/build-a-new-map.htm) ※
* Web マップの保存 - [Android](https://developers.arcgis.com/android/latest/guide/save-a-map.htm), [iOS](https://developers.arcgis.com/ios/latest/swift/guide/save-a-map.htm), [.NET](https://developers.arcgis.com/net/latest/wpf/guide/save-a-map.htm), [Java](https://developers.arcgis.com/java/latest/guide/save-a-map.htm), [Qt](https://developers.arcgis.com/qt/latest/qml/guide/save-a-map.htm) ※

※Java, Qt は現在、国内未サポートです

## Web マップの表示
すべての ArcGIS API および SDK を使用して Web マップを表示することができます。これらの API および SDK は [Web マップの仕様](https://developers.arcgis.com/web-map-specification/) に基づいて Web マップの表示をするため、Web マップはすべてのデバイスで同じようにレンダリングされます。

## ArcGIS API for JavaScript
ArcGIS API for JavaScript を使用して Web マップを表示する方法については、[はじめての Web マッピングアプリケーション開発：Web マップの作成・表示編](https://community.esri.com/docs/DOC-12505)を参照してください。

## ArcGIS Runtime SDK
すべての ArcGIS Runtime SDK には、Web マップをレンダリングする機能があります。Web マップを表示する方法については、以下のドキュメントを参照してください。

* Web マップの表示 - [Android](https://developers.arcgis.com/labs/android/display-a-web-map/index.html), [iOS](https://developers.arcgis.com/labs/ios/display-a-web-map/index.html), [.NET](https://developers.arcgis.com/labs/net/display-a-web-map/index.html), [Java](https://developers.arcgis.com/labs/java/display-a-web-map/index.html), [Qt](https://developers.arcgis.com/labs/qt/display-a-web-map/index.html) ※

※Java, Qt は現在、国内未サポートです

## ArcGIS Configurable apps
ArcGIS Configurable apps を使用した Web マップを ArcGIS Online 上で表示することもできます。

アプリケーションを作成するには、[マップからアプリの作成](https://enterprise.arcgis.com/ja/portal/latest/use/create-map-apps.htm)を参照してください。

