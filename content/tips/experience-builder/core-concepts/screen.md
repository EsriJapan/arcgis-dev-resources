+++
title = "スクリーン グループ (Screen groups)"
weight = 5
aliases = ["/screen/"]
+++

出典：ArcGIS Experience Builder - Guide - [Screen groups](https://developers.arcgis.com/experience-builder/guide/core-concepts/screen/)

## スクリーン グループとは
ArcGIS Experience Builder のスクリーン グループは、複数のスクリーンを含むことができるレイアウト コンテナーです。スクロール ページのコンテンツやウィジェットを整理するために使用されます。スクリーン グループ内の各スクリーンにはメイン ステージがあり、スクロール パネルを含むスクリーン グループもあります。

ユーザーがスクリーン グループまでスクロールすると、そのスクリーン グループが画面全体の高さを占めます。スクリーン グループにスクロール可能なパネルが含まれている場合、ユーザーがパネル内のコンテンツをスクロールしている間、メイン ステージの位置は変わりません。メイン ステージの位置が変わるのは、最後のパネルがスクロールして画面外に移動したときだけです。パネルが含まれていない場合、メイン ステージは画面 1 つ分の高さをスクロールするまで同じ位置に留まります。

## スクリーン グループでの操作方法
アプリケーションにスクリーン グループを追加して構成するには、次の手順に従います。
1. スクリーン グループを追加するキャンバスに移動します。
2. キャンバス上の [スクリーン グループの挿入] ボタンをクリックします。
3. ギャラリーからスクリーン グループ テンプレートを選択します。
4. スクリーンの数やレイアウト オプションなどのプロパティを設定します。
5. スクリーン グループ内の [スクリーンの追加] ボタンをクリックして、必要に応じて新しいスクリーンを追加します。

{{< callout >}}

スクリーン グループの詳細については、[add screen groups](https://developers.arcgis.com/experience-builder/guide/add-screen-groups/) を参照してください。

{{< /callout >}}

## スクリーン グループ テンプレート
スクリーン グループで利用可能なテンプレートをいくつか紹介します。

| **テンプレート** | 説明 |
|---|---|
| **カスケード** | 複数のスクリーン、フローティング パネル、メイン ステージのフェード切り替え、パネルの押し出し |
| **インデックス** | ドッキングされたパネル、カスケードと同様の切り替え効果 |
| **フライヤー** | ブックマークを使用するマップ向けに設計された単一のスクリーンで、パネルのスクロールに合わせて地図が移動 |
| **ストリーム** | 複数のスクリーン、フローティング パネル、パララックス効果、次の画面へのフェード切り替え |

{{< callout >}}

スクリーン グループ テンプレートの詳細については、[Add Screen groups > templates](https://developers.arcgis.com/experience-builder/guide/add-screen-groups/#templates) を参照してください。

{{< /callout >}}

## AppConfig におけるスクリーン グループ
`appConfig` オブジェクトでは、一意の `screenGroupId` を持つオブジェクトを表す `screenGroups` プロパティの下にスクリーン グループが定義されます。`screenGroups` プロパティにはスクリーン グループ オブジェクトの配列が含まれ、各オブジェクトはアプリケーションに追加されたスクリーン グループを表します。各スクリーン グループ オブジェクトには、`screenId`、`name`、`layout` など、スクリーンの構成情報が含まれます。

appConfig でスクリーン グループを定義する例を以下に示します。
```json
{
  "screenGroups": {
    "screenGroup1": {
      "screenGroupId": "screenGroup1",
      "screens": [
        {
          "screenId": "screen1",
          "name": "Screen 1",
          "layout": {
            "mainStage": {
              "type": "mainStage",
              "height": 600
            },
            "panels": [
              {
                "type": "scrollingPanel",
                "height": 300
              }
            ]
          }
        },
        {
          "screenId": "screen2",
          "name": "Screen 2",
          "layout": {
            "mainStage": {
              "type": "mainStage",
              "height": 600
            }
          }
        }
      ]
    }
  }
}
```