+++
title = "起動と設定"
description = "Field Maps の起動方法と設定について説明します。"
weight = 1
alwaysopen = false
publishDate = 2022-02-01T00:00:00+09:00
draft = false
author = "加藤"
+++
Field Maps の起動方法と設定について説明します。

### 起動
1. アプリを起動して表示される [ArcGIS Online でサイン イン] をタップし、ユーザー名とパスワードを入力してサイン インします。
2. マップ一覧の画面が表示されます。タップして任意のマップを開きます。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/start-launch.png" title="Field Maps モバイル アプリの起動方法" width="500" >}}

{{< callout >}}

画面キャプチャは一例です。端末やバージョンにより、表記が異なる場合があります 。

{{< /callout >}}


{{< callout >}}

[サイン インをスキップ] をタップすると、サイン インなしでパブリックに公開されているマップを閲覧することができます。

{{< /callout >}}

### 設定
データ収集の精度などの各種設定を必要に応じて変更することができます。

1. プロファイルをタップします。
2. 各種設定を変更し、[終了] をタップします。

{{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/fieldmaps/get-started/mobile/start-setting.png" title="Field Maps モバイル アプリの設定" width="500" >}} 



ここでは、主な設定を記載します。

|設定|詳細|
|---|---|
|精度|データ取得に必須の位置精度の半径の数値を設定します。ここで設定した値より小さい場合にのみ精度が高いとみなされ、データ入力が可能になります。|
|GPS 平均化|GPS 測位の誤差を平均化します。1 つの位置に対して指定した数の測位ポイントを収集し、その情報を平均化して最終的な位置と精度を取得します。|
|ストリーミング|ラインやエリアを移動時に自動入力する際に、頂点を挿入する時間または距離間隔を設定します。|
|写真のアップロード サイズ|データに添付する写真のサイズを設定します。|
|関連するタイプ|フィーチャ間のリレーションシップを設定します。|
|スナップ|ターゲットのフィーチャの頂点や線分に沿ったフィーチャの作成が可能になります。|
|プロバイダー|外付け GPS を設定します。|
|プロファイル|外付け GPS の座標系を設定します。|

{{< callout >}}

設定の詳細については、[ヘルプ](https://doc.arcgis.com/ja/field-maps/ios/help/configure-field-maps.htm) をご参照ください。

{{< /callout >}}
