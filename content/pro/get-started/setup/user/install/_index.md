+++
title = "インストールとアンインストール"
description = "ArcGIS Pro およびパッチ等のインストーラーを実行し、インストールします。また必要に応じてアンインストールします。"
Weight = 3
alwaysopen = false
publishDate = 2026-01-21T00:00:00+09:00
draft = false
author = "司馬" 
+++

ArcGIS Pro の[インストール](#インストール)と[アンインストール](#アンインストール)の手順を説明します。

## インストール

ArcGIS Pro をインストールする手順を説明します。

{{< callout type="warning" >}}

必ず**管理者権限を持つ半角英数文字名**のユーザー
アカウントでコンピューターにログインして作業を行ってください。

{{< /callout >}}

1.  ArcGIS Pro の実行ファイル (\.exe) をダブルクリックし、インストールを開始します。
    {{<  callout type="important" >}}

    ご利用される ArcGIS Pro のバージョンによって、必要となる Microsoft Windows Desktop Runtime のバージョンが異なります。<br>
    ArcGIS Pro 3.0 ～ 3.2 のバージョンでは、Microsoft Windows Desktop Runtime - 6.0.x (x64) が必要です。<br>
    インストール時にメッセージが表示された場合は、 [「ArcGIS Pro のインストール時に「Microsoft Windows Desktop Runtime - 6.0.5 (x64) 以上が必要です。」というメッセージが表示される」](https://tech-support.esrij.com/arcgis/article/web/knowledge3472.html)をご参照ください。<br>
    ArcGIS Pro 3.3 以降のバージョンでは、Microsoft .NET Desktop Runtime 8.0.0 またはそれ以降のパッチ リリース (8.0.1 など) と Microsoft Edge WebView2 Runtime バージョン 117 以降が必要です。Microsoft .NET 9 以降のバージョンをインストールしても、このソフトウェア要件を満たしません。

    {{< /callout >}}

1.  プログラムが自動的に展開されるので、ダイアログにしたがってインストールしてください。

    {{< callout type="info" >}}

    デフォルトの展開先フォルダーは、\<ドキュメント\>\\ArcGIS Pro
    \<バージョン名\>
    です。展開先のドライブの空き容量が不足する場合は、\[参照\]
    ボタンをクリックして別の保存場所を指定してください。

    {{< /callout >}}

    {{< callout type="info" >}}

    AI モデル機能は、デフォルトではインストールされません。<br>
    利用目的に応じて、必要な機能を選択してインストールすることを推奨します。すべての AI モデル機能を利用したい場合は、[AI モデル] を選択してください。<br>
    ・[ロケーターの作成](https://pro.arcgis.com/ja/pro-app/latest/tool-reference/geocoding/create-locator.htm): [ロケーターの作成] ツールにおいて、ユーザーのデータのフィールドをロケーターのフィールドに自動的にマッピングする機能です。<br>
    ・[セマンティック検索](https://pro.arcgis.com/ja/pro-app/latest/get-started/use-semantic-search.htm): コマンド検索やジオプロセシング検索などで、自然言語による検索を可能にする機能です。従来の検索よりもより関連性の高い結果を提供します。<br>
    ・[ツールの提案](https://pro.arcgis.com/ja/pro-app/latest/help/analysis/geoprocessing/basics/run-geoprocessing-tools.htm#ESRI_SECTION1_1E6BC92D842F47B6A03FAA08C93ACB8F): 過去のツール実行履歴に基づいて、次のステップに適したジオプロセシングツールを提案する機能です。<br>Enhanced Compression Wavelet Raster ドライバーをインストールしない場合は、[インストールしない] を選択します。<br>
    {{< figure src="https://s3.ap-northeast-1.amazonaws.com/doc.esrij.com/pro/get-started/setup/user/install/2025-12-22_09h51_34.png" width="600" >}}

    {{< /callout >}}

1.  ArcGIS Pro がインストールされたら \[完了\] をクリックします。  
    続けて「ArcGIS Pro - 日本語パック」のインストールが開始します。

1.  ArcGIS Pro 日本語パックのセットアップが終了したら、\[OK\] をクリックします。  
    以上で ArcGIS Pro のインストールは完了です。

{{< callout type="info" >}}

ArcGIS Pro パッチおよび任意プログラムをインストールする場合は、続いてインストールをしてください。  
日本国内用のツールはリソース集からダウンロードしてインストールしてください。  
・[アドイン ツール](/pro/get-started/setup/user/addin-tool)  
・[シンボル スタイルとフォント](/pro/get-started/setup/user/style-font)  

{{< /callout >}}

{{< callout type="important" >}}

ArcGIS Pro において Microsoft Excel ファイルを操作する場合は、ドライバーのインストールが必要となる場合があります。<br>
ArcGIS Pro 3.0-3.4 をお使いの場合は、以下をご参照ください。  
[「ArcGIS Pro: Excel ファイルの読み込み方と注意事項 (バージョン 3.0 以降)」](https://tech-support.esrij.com/arcgis/article/web/knowledge3475.html)をご参照ください。<br>
なお、ArcGIS Pro 3.5 以降では、ドライバーのインストールは不要です。

{{< /callout >}}


## アンインストール

ArcGIS Pro をアンインストールする手順を説明します。

「ArcGIS Pro -- 日本語パック」→「ArcGIS
Pro」の順にアンインストールしてください。

{{< callout type="warning" >}}

指定ユーザー ライセンスの場合は、必ずアンインストール前にオフライン設定の解除を行ってください。<br>
単独使用 (SU) ライセンスの場合は、必ずアンインストール前にライセンスの認証解除を行ってください。

{{< /callout >}}

### [コントロール パネル] を使用する方法

1.  Windows の \[コントロール パネル\] →
    \[プログラムと機能\] をクリックします。

2.  「ArcGIS Pro -- 日本語パック」→「ArcGIS
    Pro」の順にアンインストールします。各プログラムをクリックして \[アンインストールと変更\] から \[削除\] オプションを選択します。

### [設定] を使用する方法

1.  \[スタート\] → \[設定\] → \[アプリ\] から \[アプリと機能\] へ移動します。

2.  「ArcGIS Pro -- 日本語パック」→「ArcGIS
    Pro」の順にアンインストールします。各プログラムをクリックし、\[アンインストール\] から \[削除\] オプションを選択します。

