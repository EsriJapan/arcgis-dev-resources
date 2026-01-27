+++
title = "レポート"
description = "レポートについて説明します。"
Weight = 2
alwaysopen = false
date = 2021-04-20T00:00:00+09:00
author = "中家" 
draft = false 
+++

## レポートとは
ArcGIS Online の操作ログやアイテムの一覧をレポートとして csv 形式でダウンロードでき、組織サイトの状態を確認できる機能です。ArcGIS Online 上のさまざまな情報を詳細なレポートとして出力することができます。

## レポートの作成



1. [組織] → [ステータス] → [レポート] タブ → [レポートの作成] → [単一レポート] をクリックします。
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/subscription/report-create.png" title="レポートの作成" width="600" >}}

    {{< callout >}}
    
    [単一レポート] ではなく [レポート スケジュール] を選択することで、レポートの作成を定期的に実行することもできます。
    
    {{< /callout >}}

1. [レポート タイプ] で出力したいレポートの種類を選択します。  

    - **アクティビティ**：組織サイトで行われた操作に関する簡易なログを出力します。
    - **クレジット**：クレジットを消費する処理の詳細情報をユーザーごとに集計し出力します。
    - **アイテム**：その時点での組織サイト上のアイテム一覧を出力します。
    - **メンバー**：その時点での組織サイト上のメンバー一覧を出力します。
    - **アイテム閲覧数**：指定した期間の各アイテムの閲覧数を集計し、出力します。
    - **サービスの使用状況**：API キーおよびアプリケーションの認証情報に関連付けられた使用状況を出力します。  

    {{< callout >}}
    
    アクティビティ、クレジット、サービスの使用状況は、出力する期間を指定します。レポートの各種類のフィールドの詳細は[ヘルプ](https://doc.arcgis.com/ja/arcgis-online/reference/report-fields.htm)をご参照ください。
    
    {{< /callout >}}

1. [名前] を入力します。
1. [レポートの作成] をクリックします。
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/subscription/report-create2.png" title="レポートの作成" width="500" >}}
1. 出力されたレポートをダウンロードします。
    {{< figure src="https://s3-ap-northeast-1.amazonaws.com/doc.esrij.com/online/get-started/administer/subscription/report-download.png" title="レポートのダウンロード" width="600" >}}
    
    {{< callout >}}

    ダウンロードした CSV ファイルが文字化けする場合は、「[FAQ: データストレージにおいてクレジットを消費しているアイテムを調べる](https://tech-support.esrij.com/arcgis/article/web/knowledge3508.html)」をご参照ください。

    {{< /callout >}}

 