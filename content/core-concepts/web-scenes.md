+++
title = "Web シーン"
description = "Web シーンは、さまざまなアプリケーション間で作成、スタイル設定、共有できる 3D マップです。二次元のWeb マップとは異なり、Web シーンは、一般的に都市や自然環境、建物、交通システムを表す 3 D地理空間データを含むシーンです。Web シーンの仕様や作成、表示方法についてご紹介します。"
Weight=6
aliases = ["/web-scenes/"]
+++

## Web シーンとは？
Web シーンは、異なるアプリケーション間で作成、スタイル設定、共有できる 3D マップです。Web シーンは、2 次元の [Web マップ](https://developers.arcgis.com/glossary/web-map/)とは異なり、一般的に都市や自然環境、建物、交通システムを表す 3D 地理空間データを含むシーンです。Web シーンは、Web シーン仕様に基づいた JSON で構成されており、マップの範囲、カメラの高さと角度、ベースマップ、レイヤー、レイヤースタイルなど、シーンをセットアップするために必要なすべての設定が含まれています。

ArcGIS Online の Web シーンの例としては、[オレゴン州ポートランド市の 3D 風景](https://www.arcgis.com/home/webscene/viewer.html?webscene=2b721b9e7bef45e2b7ff78a398a33acc)があります。

## なぜ Web シーンを使うのか？
Web シーンは、[ArcGIS Online](https://developers.arcgis.com/glossary/arcgis-online/) や [ArcGIS Pro](https://developers.arcgis.com/glossary/arcgis-pro/) で作成し、[ストーリー マップ](https://storymaps.arcgis.com/stories)や [ArcGIS の API および SDK](https://developers.arcgis.com/documentation/#sdks) を使用して構築されたアプリケーションなどの他の製品で表示することができます。アプリケーションが Web シーンをロードすると、以前に保存した設定が自動的にロードされるため、アプリケーションの開発や [ArcGIS プラットフォーム](https://developers.arcgis.com/glossary/arcgis-platform/)全体での 3D シーンの共有が容易になります。

例えば、ポートランド市の Web シーンのコピーを作成し、ArcGIS Online で人口統計データを含む別のフィーチャ レイヤーを追加し、ArcGIS API for JavaScript を使用してアプリ上で新しい Web シーンを表示することができます。

## Web シーンの仕様
[Web シーンの仕様](https://developers.arcgis.com/web-scene-specification/)は、[JSON](https://www.json.org/json-en.html) の仕様に基づいており、ArcGIS プラットフォーム全体で Web シーンを共有、作成、編集、可視化、参照などをすることができます。

JSON ファイルとして、Web シーンは ArcGIS Online または ArcGIS Enterprise でホストされ、REST API を介して使用することができます。技術的な側面で言うと、Web シーンは、ArcGIS Online または ArcGIS Enterprise に保存された[コンテンツ アイテム](https://developers.arcgis.com/rest/users-groups-and-items/item.htm)のことを指します。

すべてのウェブシーンには一意の ID があり、パブリックに公開したり、特定のグループやユーザーに制限して公開することもできます。

例えば、[ポートランド市の Web シーン](https://www.arcgis.com/home/webscene/viewer.html?webscene=2b721b9e7bef45e2b7ff78a398a33acc) はパブリックに公開されており、一意の ID：2b721b9e7bef45e2b7ff78a398a33acc を持っています。

この Web マップは、以下の URL で REST API の[コンテンツ アイテム操作](https://developers.arcgis.com/rest/users-groups-and-items/user-item-link-.htm)リクエストを行うことで、JSON形式で表示することができます。

```
https://www.arcgis.com/sharing/rest/content/items/2b721b9e7bef45e2b7ff78a398a33acc/data
```
この REST で取得できる JSON は以下の通りです(一部抜粋)。

```json
{
    "operationalLayers": [
        {
            "id": "14a3b7e8769-layer5",
            "opacity": 1,
            "title": "Topographic Map 3D",
            "url": "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Portland_v1/MapServer",
            "visibility": true,
            "layerType": "ArcGISTiledMapServiceLayer",
            "itemId": "77618c5b716a4417a2e72d75ccc62f30"
        },
        {
            "id": "159085c4486-layer-4",
            "showLegend": true,
            "opacity": 1,
            "disablePopup": false,
            "title": "Buildings",
            "url": "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Buildings_Portland/SceneServer/layers/0",
            "visibility": true,
            "layerType": "ArcGISSceneServiceLayer",
            "itemId": "d96440302be847f6aa6e6ac0012c53b0",
            "layerDefinition": {
                "elevationInfo": {
                    "mode": "absoluteHeight"
                },
                "drawingInfo": {
                    "renderer": {
                        "authoringInfo": {},
                        "type": "simple",
                        "label": "",
                        "symbol": {
                            "type": "MeshSymbol3D",
                            "symbolLayers": [
                                {
                                    "material": {
                                        "color": [
                                            255,
                                            255,
                                            255
                                        ]
                                    },
                                    "type": "Fill",
                                    "edges": {
                                        "type": "solid",
                                        "color": [
                                            0,
                                            0,
                                            0
                                        ],
                                        "transparency": 60,
                                        "size": 1
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            "showLabels": false
        }
    ],
    "baseMap": {
        "baseMapLayers": [
            {
                "id": "159085c1a03-layer-0",
                "opacity": 1,
                "title": "World Topo Map",
                "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
                "visibility": true,
                "layerType": "ArcGISTiledMapServiceLayer"
            }
        ],
        "id": "basemap",
        "title": "Topographic",
        "elevationLayers": [
            {
                "id": "globalElevation",
                "listMode": "hide",
                "title": "Terrain3D",
                "url": "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
                "visibility": true,
                "layerType": "ArcGISTiledElevationServiceLayer"
            }
        ]
    },
    "ground": {
        "layers": [
            {
                "id": "globalElevation",
                "listMode": "hide",
                "title": "Terrain3D",
                "url": "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
                "visibility": true,
                "layerType": "ArcGISTiledElevationServiceLayer"
            }
        ]
    },
    "heightModelInfo": {
        "heightModel": "gravity_related_height",
        "heightUnit": "meter"
    },
    "version": "1.10",
    "authoringApp": "WebSceneViewer",
    "authoringAppVersion": "6.1.0.0",
    "presentation": {
        /* omitted */
    },
    "initialState": {
        "environment": {
            "lighting": {
                "datetime": 1458072640000,
                "displayUTCOffset": -8
            }
        },
        "viewpoint": {
            "rotation": 12.457625182769334,
            "scale": 6263.2876185532195,
            "targetGeometry": {
                "spatialReference": {
                    "latestWkid": 3857,
                    "wkid": 102100
                },
                "x": -1.365579170165746E7,
                "y": 5704194.302859826,
                "z": 27.754899251274765
            },
            "camera": {
                "position": {
                    "spatialReference": {
                        "latestWkid": 3857,
                        "wkid": 102100
                    },
                    "x": -1.3655391201614857E7,
                    "y": 5702381.612632008,
                    "z": 754.9944650307298
                },
                "heading": 347.54237481723067,
                "tilt": 60.786972566225145
            }
        }
    },
    "spatialReference": {
        "latestWkid": 3857,
        "wkid": 102100
    },
    "viewingMode": "global"
}
```
### Web シーンの作成
テキスト エディタを使用して Web マップを作成することもできますが、Esri は Web シーンを簡単に作成するための多くのツールを提供しています。

### ArcGIS Online
ArcGIS Online を使用することが Web シーンを作成する最も簡単な方法です。
[ArcGIS Online のドキュメント](https://doc.arcgis.com/en/arcgis-online/get-started/get-started-with-scenes.htm)や ArcGIS Tutorials の [Create a web scene](https://developers.arcgis.com/labs/arcgisonline/create-a-web-scene/index.html) を参照して Web シーンを作成することができます。

### ArcGIS Pro
ArcGIS Pro では、Web シーンの作成と共有がサポートされています。ArcGIS Pro ヘルプの [Author a web scene](https://pro.arcgis.com/en/pro-app/help/mapping/map-authoring/author-a-web-scene.htm) を参照してください。

### ArcGIS API for JavaScript
ArcGIS API for JavaScript では、Web シーンを ArcGIS Online に戻して保存することができます。詳細は [Save a web scene](https://developers.arcgis.com/javascript/latest/sample-code/webscene-save/index.html) のサンプルを参照してください。

## Web シーンの表示
### ArcGIS API for JavaScript
ArcGIS API for JavaScript を使用して Web シーンを表示する方法については、[Load a basic web scene](https://developers.arcgis.com/javascript/latest/sample-code/webscene-basic/index.html) のサンプルを参照してください。

### ArcGIS Configurable apps
ArcGIS Configurable apps を使用した Web シーンを ArcGIS Online で 表示することもできます。アプリケーションを作成するには [Create a Scene](https://learn.arcgis.com/en/projects/create-a-scene/) または、[ArcGIS Configurable apps を使用したサンプル](https://doc.arcgis.com/en/arcgis-online/create-maps/choose-configurable-app.htm) を参照してください。
