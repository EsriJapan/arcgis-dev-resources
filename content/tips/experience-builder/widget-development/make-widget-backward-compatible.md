+++
title = "ウィジェットに下位互換性を持たせる"
description = "ウィジェットのバージョンと下位互換性について紹介します。"
weight = 11
aliases = ["/make-widget-backward-compatible/"]
+++
出典：ArcGIS Experience Builder - Guide - [Make widget backward compatible](https://developers.arcgis.com/experience-builder/guide/make-widgets-backward-compatible/)

ArcGIS Experience Builder の進化に伴い、Jimu フレームワークに新機能が追加されることや、変更が加えられることがあります。ArcGIS Experience Builder の新しいバージョンでウィジェットを使用する必要がある場合は、新しいバージョンでウィジェットをテストしなければなりません。 ウィジェットが期待どおりに動作しない場合は、リリース ノートを読んで、ウィジェットに影響する変更点がないか確認してください。

各 ArcGIS Experience Builder ウィジェットの構成は、アプリ構成に保存されます。 カスタム ウィジェットに機能を追加する場合、構成形式を変更する必要がある場合があります。ウィジェットを以前の構成と後方互換性を持たせるには、2 つの選択肢があります。プログラムで構成 フォーマットをチェックするか、VersionManager を使って古いフォーマットをアップグレードするかです。 以下の利点から、後者を強く推奨します。
- 最新のフォーマットだけを処理するので、コードはよりシンプルになる。
- 変更点を 1 つの VersionManager ファイルにまとめることで、変更点の追跡が容易になる。

最初のオプションは簡単です。以下は、VersionManager を使用してウィジェットに下位互換性を持たせるためのガイドです。
VersionManager を使うには、2 つのステップを踏む必要があります。 

1. `WidgetVersionManager` のサブクラスとして VersionManager クラスを定義します。 バージョン 1.13 以前を使用している場合は、`BaseVersionManager`を使用してください。それ以降のバージョンでは、`WidgetVersionManager` を推奨します。
2. 以下のように VersionManager インスタンスをウィジェットクラスまたは関数のプロパティ `versionManager` に割り当てます。
`Widget.versionManager = new WidgetVersionManager();`

`BaseVersionManager` を継承した VersionManager クラスでは、バージョン オブジェクトの配列である `versions` プロパティを定義する必要があります。各バージョンのオブジェクトには、`version` プロパティと `upgrader` 関数が含まれます。`upgrader` 関数は、構成を以前のバージョンから現在のバージョンにアップグレードするために使用されます。`upgrader` 関数は、構成 オブジェクトをパラメータとして受け取り、アップグレードされた構成 オブジェクトを返します。構成が変更されない場合は、`versions` 配列でバージョンをスキップできます。`useDatasources` や `outputDataSources` など、VersionManager がウィジェットの設定以上のものをアップグレードする必要がある場合、`WidgetVersionManager` クラスを継承することができます。`WidgetVersionManager` を継承した VersionManager は、`BaseVersionManager` を継承した VersionManager と非常によく似ていますが、バージョン オブジェクトは、さらに 1 つのプロパティ、`upgradeFullInfo` をサポートしています。 このプロパティが `true` に設定されている場合、`upgrader` 関数は完全なウィジェット情報オブジェクトを受け取り、アップグレードされた完全なウィジェット情報オブジェクトを返す必要があります。

以下は、`WidgetVersionManager` を継承した VersionManager クラスの例です：

``` JavaScript
import { WidgetVersionManager, WidgetUpgradeInfo } from 'jimu-core'

class VersionManager extends WidgetVersionManager {
  versions = [{
    version: '1.6.0',
    description: 'Change property a to b. This demonstrates how to upgrade the widget config',
    upgrader: (oldConfig) => {
      if (!oldConfig) return oldConfig
      const newConfig = oldConfig.set('b', oldConfig.a).without('a')
      return newConfig
    }
  }, {
    version: '1.15.0',
    description: 'Upgrade the use data source.',
    upgradeFullInfo: true,
    upgrader: async (oldInfo: WidgetUpgradeInfo) => {
      const newWidgetJson = oldInfo.widgetJson.set('useDataSources', YOUR_NEW_USE_DATA_SOURCES)
      const widgetInfo = { ...oldInfo, widgetJson: newWidgetJson }
      return widgetInfo
    }
  }]
}

export const versionManager = new VersionManager()

```

VersionManager クラスは、`version-manager.ts` のような別のファイルにして、`src` フォルダに置くことをお勧めします。 次に、`widget.tsx` ファイルで、VersionManager インスタンスを widget クラスまたは関数に割り当てます。

``` JavaScript

import { versionManager } from '../version-manager'

export default function Widget (props) {
  //...
}

Widget.versionManager = versionManager
```
















































