+++
title = "解析機能を使用したい"
description = "Map Viewer の解析ツールを使用して、空間解析を行います。"
weight = 11
alwaysopen = false
publishDate = 2023-10-25T00:00:00+09:00
draft = false
author = "吉根"
+++


Web マップに追加されているレイヤーに対して空間的な解析やネットワーク解析などを行います。解析機能を利用するためには、「コンテンツの作成、更新、および削除」、「ホスト フィーチャ レイヤーの公開」、「空間解析」の[権限](https://doc.arcgis.com/ja/arcgis-online/reference/roles.htm)が必要です。一部のツールでは追加の権限を要する場合があります。ライセンス要件の詳細については、各ツールの[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/analyze/licensing-analysis-mv.htm)をご参照ください。



1. Map Viewer でレイヤーを含むマップを開くか、[マップにレイヤーを追加](/online/users-guide/map/set-map/)します。
1. [設定] ツールバーの [解析] をクリックします。
1. [ツール] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/analysis-analysis.png" title="解析ウィンドウ" width=400" >}}

1. ツールボックスをクリックしてツールを展開するか、検索ボックスを使用してツールを検索します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/analysis-tools.png" title="ツールの検索" width=400" >}}

1. ツールを選択します。
1. 入力レイヤーの選択、出力レイヤー名の指定などの、ツールのパラメーターを設定します。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/analysis-parameter.png" title="ツールの設定" width=300" >}}

    {{< callout >}}

    解析結果を出力する結果レイヤーの名前には、日本語と特殊文字 (「－」(ハイフン)、「( )」「[ ]」「・」「/」「*」「/」「＃」「%」) は使用しないでください。結果レイヤー名には、半角英数字とアンダースコア (_) を使用できます。結果レイヤーの名前に日本語を使用すると、このレイヤーにアクセスする URL に日本語が含まれ、正常な処理ができない可能性があります。

    {{< /callout >}}

    {{< callout >}}

    パラメーターの詳細は、各ツールの[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/analyze/licensing-analysis-mv.htm)をご参照ください。

    {{< /callout >}}

1. 必要に応じて [環境設定] をクリックして、ツールの実行時に使用する環境を表示し、更新します。
1. [クレジットの推定] をクリックして、ツールの実行時に消費される[クレジット](https://doc.arcgis.com/ja/arcgis-online/administer/credits.htm)数を計算します。
1. [実行] をクリックします。

    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/users-guide/map/analysis-run.png" title="ツールの実行" width=400" >}}
